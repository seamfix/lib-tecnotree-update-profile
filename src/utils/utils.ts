import * as https from "https";
import axios from "axios";
import { firstValueFrom, from, lastValueFrom } from "rxjs";

export async function generateMadApiAuthToken(
  authReqBody: any,
  authGrantType: string,
  authUrl: string
): Promise<any> {

  const authHeader = {
    "Content-Type": "application/x-www-form-urlencoded",
  };

  const authParam = {
    grant_type: authGrantType,
  };

  const response = await postRequest(authUrl, authReqBody, null, authHeader, authParam)
    .then((result) => {
      return result;
    })
    .catch((error) => {
      return null;
    });

    if(response && response.data) {
      return response.data
    } else {
      return null;
    }
}

export async function postRequest(url: string, payload: any, token: string, headerObj: any, params: any ): Promise<any> {
    const agent = new https.Agent({ rejectUnauthorized: false });

    let config: any = { httpsAgent: agent };

    if (headerObj) {
        config["headers"] = {
        ...headerObj,
        ...(token ? { Authorization: [`Bearer ${token}`] } : {}),
        };
    }

    if (params) {
        config["params"] = { ...params };
    }

    const response = await firstValueFrom(from(axios.post(url, payload, config)))
    .then((result) => {
        console.log("postRequest Result:", JSON.stringify(result?.data));
        return result;
    }).catch((error) => {
        console.log("ErrorResponse:", JSON.stringify(error?.response?.data));
        return error.response;
    });

    return response;
}

export async function getRequest(url: string, token: string, headerObj: any, params: any ): Promise<any> {
    const agent = new https.Agent({
        rejectUnauthorized: false,
    });

    let config: any = {
        httpsAgent: agent,
    };

    if (headerObj) {
        config["headers"] = {
        ...headerObj,
        ...(token ? { Authorization: [`Bearer ${token}`] } : {}),
        };
    }

    if (params) {
        config["params"] = { ...params };
    }

    const response = await firstValueFrom(from(axios.get(url, config)))
    .then((result) => {
        console.log("getRequest Result:", JSON.stringify(result?.data))
        return result;
    })
    .catch((error) => {
        console.log("ErrorResponse:", JSON.stringify(error?.response?.data))
        return error.response;
    });

    return response;
}

export function calculateDuration(startTime: Date, endTime: Date) {
    const differenceValue = (endTime.getTime() - startTime.getTime()) / 1000;
    return Math.abs(Math.round(differenceValue));
}