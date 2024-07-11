export const MAD_API_UPDATE_PROFILE_RESPONSE = [
    {
        "resultCode": "0000",
        "resultDescription": "Success.",
        "transactionId": "8888888888888888",
        "data": {
            "id": "PI53854",
            "href": "https://bss-uat.mtn.ci/partyInteractionManagement/v1/partyInteraction/PI53854",
            "interactionDate": {
                "startDateTime": "2024-06-21T10:43:02.851Z"
            },
            "reason": "01",
            "status": "inProgress",
            "direction": "inbound",
            "relatedParty": [
                {
                    "role": "isl",
                    "id": "madapi3pp",
                    "name": "madapi3pp",
                    "contactMedium": [
                        {
                            "medium": {
                                "verified": false,
                                "emailAddress": "madapi3pp@mtn.com"
                            },
                            "type": "EmailAddress",
                            "preferred": false,
                            "verified": false
                        }
                    ],
                    "validFor": [
                        {
                            "startDateTime": "2024-06-21T10:43:02.860Z",
                            "endDateTime": "2024-06-21T10:43:02.860Z"
                        }
                    ],
                    "@referredType": "SSOUser"
                },
                {
                    "role": "Customer",
                    "id": "C8657",
                    "engagedParty": {
                        "id": "I7367",
                        "customFields": {},
                        "contactMedium": [
                            {
                                "medium": {
                                    "city": "Juba",
                                    "stateOrProvince": "SS",
                                    "country": "Zambia",
                                    "addressLine1": "Baker Street",
                                    "addressLine2": "Aur koi",
                                    "addressLine3": "Koi nahi",
                                    "addressLine4": "bass yahi",
                                    "verified": false,
                                    "streetName": "street",
                                    "postcode": "567876"
                                },
                                "type": "Address",
                                "role": "ResidenceAddress"
                            },
                            {
                                "medium": {
                                    "number": "9040009811",
                                    "verified": false
                                },
                                "type": "Phone",
                                "preferred": false
                            },
                            {
                                "medium": {
                                    "number": "9040009812",
                                    "verified": false
                                },
                                "type": "Phone",
                                "preferred": false
                            },
                            {
                                "medium": {
                                    "emailAddress": "subst95@gmail.com",
                                    "verified": false
                                },
                                "type": "EmailAddress",
                                "preferred": true
                            }
                        ],
                        "@baseType": "Party",
                        "@type": "Individual",
                        "@referredType": "Individual"
                    },
                    "@referredType": "Customer"
                }
            ],
            "interactionItem": [
                {
                    "id": "II1",
                    "item": {
                        "id": "C8657",
                        "name": "John",
                        "customerType": "Individual",
                        "customerCategory": "INDV",
                        "customerSubCategory": "INV",
                        "engagedParty": {
                            "id": "I7367",
                            "contactMedium": [
                                {
                                    "medium": {
                                        "type": "POBox",
                                        "city": "Juba",
                                        "verified": false,
                                        "stateOrProvince": "SS",
                                        "country": "Zambia",
                                        "addressLine1": "Baker Street",
                                        "streetName": "street",
                                        "addressLine2": "Aur koi",
                                        "addressLine3": "Koi nahi",
                                        "addressLine4": "bass yahi"
                                    },
                                    "type": "Address",
                                    "preferred": false,
                                    "verified": false,
                                    "role": "ResidenceAddress"
                                },
                                {
                                    "medium": {
                                        "verified": false,
                                        "number": "9040009811"
                                    },
                                    "type": "Phone",
                                    "preferred": false,
                                    "verified": false
                                },
                                {
                                    "medium": {
                                        "verified": false,
                                        "number": "9040009812"
                                    },
                                    "type": "Phone",
                                    "preferred": false,
                                    "verified": false
                                },
                                {
                                    "medium": {
                                        "verified": false,
                                        "emailAddress": "subst95@gmail.com"
                                    },
                                    "type": "EmailAddress",
                                    "preferred": true,
                                    "verified": false
                                }
                            ],
                            "customFields": {},
                            "@baseType": "Party",
                            "@type": "Individual"
                        },
                        "@baseType": "PartyRole",
                        "@type": "Customer",
                        "@referredType": "Customer"
                    }
                },
                {
                    "id": "II2",
                    "item": {
                        "id": "99225050015847013486",
                        "@type": "StarterPack"
                    }
                },
                {
                    "id": "II3",
                    "item": {
                        "customFields": {},
                        "orderItem": [
                            {
                                "id": "OI1",
                                "action": "add",
                                "productOffering": {
                                    "id": "66210c65132610d0e606923d",
                                    "externalSystem": [
                                        {
                                            "id": "71e43477-8671-4e90-81db-a7f15b837c83",
                                            "system": "NGB",
                                            "@baseType": "Offering",
                                            "@type": "MandatoryOffering"
                                        },
                                        {
                                            "id": "120",
                                            "system": "EricssonCharging",
                                            "@baseType": "Offering",
                                            "@type": "SERVICEOFFERINGID"
                                        },
                                        {
                                            "id": "100",
                                            "system": "EricssonCharging",
                                            "@baseType": "Offering",
                                            "@type": "BPLAN"
                                        },
                                        {
                                            "id": "IC_Others_526",
                                            "system": "EricssonCharging",
                                            "@baseType": "Offering",
                                            "@type": "OFFERID"
                                        }
                                    ],
                                    "name": "PROFIL_INTERNET_MOBILE",
                                    "category": [
                                        {
                                            "name": "Plan",
                                            "version": "1",
                                            "id": "5ce67563a9060a9e0944ad57",
                                            "@type": "Category",
                                            "@referredType": "Category"
                                        }
                                    ],
                                    "@type": "SimpleProductOffering"
                                },
                                "product": {
                                    "businessType": "Prepaid",
                                    "productSpecification": {
                                        "id": "66210c64132610d0e6069233",
                                        "name": "PROFIL_INTERNET_MOBILE product specification",
                                        "version": "13",
                                        "technology": [
                                            "GSM"
                                        ],
                                        "@baseType": "ProductSpecification",
                                        "@type": "CompositeProductSpecification",
                                        "@referredType": "ProductSpecification",
                                        "LoB": "Mobile"
                                    },
                                    "productOffering": {
                                        "id": "66210c65132610d0e606923d",
                                        "externalSystem": [
                                            {
                                                "id": "71e43477-8671-4e90-81db-a7f15b837c83",
                                                "system": "NGB",
                                                "@baseType": "Offering",
                                                "@type": "MandatoryOffering"
                                            },
                                            {
                                                "id": "120",
                                                "system": "EricssonCharging",
                                                "@baseType": "Offering",
                                                "@type": "SERVICEOFFERINGID"
                                            },
                                            {
                                                "id": "100",
                                                "system": "EricssonCharging",
                                                "@baseType": "Offering",
                                                "@type": "BPLAN"
                                            },
                                            {
                                                "id": "IC_Others_526",
                                                "system": "EricssonCharging",
                                                "@baseType": "Offering",
                                                "@type": "OFFERID"
                                            }
                                        ],
                                        "name": "PROFIL_INTERNET_MOBILE",
                                        "category": [
                                            {
                                                "name": "Plan",
                                                "version": "1",
                                                "id": "5ce67563a9060a9e0944ad57",
                                                "@type": "Category",
                                                "@referredType": "Category"
                                            }
                                        ],
                                        "@type": "SimpleProductOffering"
                                    },
                                    "customFields": {},
                                    "imsiNumber": "612051584701383",
                                    "simNumber": "99225050015847013486"
                                },
                                "state": "draft",
                                "itemTotalPrice": [
                                    {
                                        "price": {
                                            "taxIncludedAmount": {
                                                "value": "0",
                                                "unit": "XOF"
                                            },
                                            "dutyFreeAmount": {
                                                "value": "0",
                                                "unit": "XOF"
                                            }
                                        }
                                    },
                                    {
                                        "priceType": "Rental",
                                        "price": {
                                            "taxIncludedAmount": {
                                                "value": "0",
                                                "unit": "XOF"
                                            },
                                            "dutyFreeAmount": {
                                                "value": "0",
                                                "unit": "XOF"
                                            },
                                            "taxRate": 0
                                        }
                                    }
                                ],
                                "orderItem": [
                                    {
                                        "action": "add",
                                        "product": {
                                            "technology": "GSM",
                                            "productSpecification": {
                                                "id": "66210c62132610d0e6069227",
                                                "name": "PROFIL_INTERNET_MOBILE - MTNIC- GSM PostPaid-MSISDN",
                                                "version": "13",
                                                "@referredType": "MSISDNProductSpec"
                                            },
                                            "productOffering": {},
                                            "realizingResource": [
                                                {
                                                    "id": "6675562877ae950007676742",
                                                    "name": "MSISDN",
                                                    "value": "049000802",
                                                    "@referredType": "MSISDN",
                                                    "@baseType": "LogicalResource"
                                                }
                                            ],
                                            "characteristic": [
                                                {
                                                    "name": "MSISDN",
                                                    "value": "049000802",
                                                    "valueType": "number",
                                                    "@type": "MSISDN"
                                                },
                                                {
                                                    "name": "MSISDNCategory",
                                                    "value": "MSISDN",
                                                    "@type": "DRMCategory"
                                                }
                                            ],
                                            "LoB": "Mobile"
                                        },
                                        "modifiable": true,
                                        "productSpecification": {
                                            "id": "66210c62132610d0e6069227",
                                            "name": "PROFIL_INTERNET_MOBILE - MTNIC- GSM PostPaid-MSISDN",
                                            "version": "13",
                                            "technology": [
                                                "GSM"
                                            ],
                                            "resourcePoolType": "MSISDN",
                                            "@baseType": "AtomicProductSpecification",
                                            "@type": "MSISDNProductSpec",
                                            "@referredType": "ProductSpecification",
                                            "LoB": "Mobile"
                                        },
                                        "reservationId": "6675593ad4a419000721db80"
                                    },
                                    {
                                        "action": "add",
                                        "product": {
                                            "technology": "GSM",
                                            "productSpecification": {
                                                "id": "66210c63132610d0e606922b",
                                                "name": "PROFIL_INTERNET_MOBILE - MTNIC-SIM-PS",
                                                "version": "13",
                                                "@referredType": "GoodsProductSpec"
                                            },
                                            "productOffering": {},
                                            "realizingResource": [
                                                {
                                                    "id": "6675562877ae95000767673e",
                                                    "name": "SIM number",
                                                    "value": "99225050015847013486",
                                                    "@referredType": "SIM",
                                                    "@baseType": "PhysicalResource"
                                                }
                                            ],
                                            "characteristic": [
                                                {
                                                    "name": "SIM number",
                                                    "value": "99225050015847013486",
                                                    "valueType": "number",
                                                    "@type": "SIM"
                                                },
                                                {
                                                    "name": "IMSI",
                                                    "value": "612051584701383",
                                                    "valueType": "number",
                                                    "@type": "IMSI"
                                                },
                                                {
                                                    "name": "SIMCategory",
                                                    "value": "SIM",
                                                    "@type": "DRMCategory"
                                                }
                                            ],
                                            "LoB": "Mobile"
                                        },
                                        "modifiable": true,
                                        "productSpecification": {
                                            "id": "66210c63132610d0e606922b",
                                            "name": "PROFIL_INTERNET_MOBILE - MTNIC-SIM-PS",
                                            "version": "13",
                                            "technology": [
                                                "GSM"
                                            ],
                                            "resourcePoolType": "SIM",
                                            "@baseType": "AtomicProductSpecification",
                                            "@type": "GoodsProductSpec",
                                            "@referredType": "ProductSpecification",
                                            "LoB": "Mobile"
                                        },
                                        "reservationId": "6675593ad4a419000721db80"
                                    },
                                    {
                                        "action": "add",
                                        "product": {
                                            "technology": "GSM",
                                            "productSpecification": {
                                                "id": "66210c64132610d0e606922f",
                                                "name": "PROFIL_INTERNET_MOBILE - New product specification",
                                                "version": "13",
                                                "@referredType": "NetworkProductSpec"
                                            },
                                            "productOffering": {},
                                            "characteristic": [
                                                {
                                                    "name": "Product Details",
                                                    "value": "GSMICPostPaidPackage",
                                                    "@type": "CharacteristicValue"
                                                }
                                            ],
                                            "LoB": "Mobile"
                                        },
                                        "modifiable": true
                                    }
                                ],
                                "modifiable": true,
                                "productSpecification": {
                                    "id": "66210c64132610d0e6069233",
                                    "name": "PROFIL_INTERNET_MOBILE product specification",
                                    "version": "13",
                                    "technology": [
                                        "GSM"
                                    ],
                                    "@baseType": "ProductSpecification",
                                    "@type": "CompositeProductSpecification",
                                    "@referredType": "ProductSpecification",
                                    "LoB": "Mobile"
                                }
                            }
                        ],
                        "orderTotalPrice": [
                            {
                                "price": {
                                    "taxIncludedAmount": {
                                        "value": "0"
                                    },
                                    "dutyFreeAmount": {
                                        "value": "0"
                                    }
                                }
                            },
                            {
                                "priceType": "Rental",
                                "price": {
                                    "taxIncludedAmount": {
                                        "value": "0",
                                        "unit": "XOF"
                                    },
                                    "dutyFreeAmount": {
                                        "value": "0",
                                        "unit": "XOF"
                                    },
                                    "taxRate": 0
                                }
                            }
                        ],
                        "state": "draft",
                        "category": "5ce67563a9060a9e0944ad57",
                        "relatedParty": [
                            {
                                "role": "isl",
                                "id": "madapi3pp",
                                "href": null,
                                "name": "madapi3pp",
                                "contactMedium": [
                                    {
                                        "medium": {
                                            "verified": false,
                                            "emailAddress": "madapi3pp@mtn.com"
                                        },
                                        "type": "EmailAddress",
                                        "preferred": false,
                                        "verified": false
                                    }
                                ],
                                "location": null,
                                "engagedParty": null,
                                "@referredType": "SSOUser",
                                "@schemaLocation": null
                            },
                            {
                                "role": "Customer",
                                "id": "C8657",
                                "href": null,
                                "name": null,
                                "contactMedium": null,
                                "location": null,
                                "engagedParty": {
                                    "id": "I7367",
                                    "contactMedium": [
                                        {
                                            "medium": {
                                                "type": "POBox",
                                                "city": "Juba",
                                                "verified": false,
                                                "stateOrProvince": "SS",
                                                "country": "Zambia",
                                                "addressLine1": "Baker Street",
                                                "streetName": "street",
                                                "addressLine2": "Aur koi",
                                                "addressLine3": "Koi nahi",
                                                "addressLine4": "bass yahi"
                                            },
                                            "type": "Address",
                                            "preferred": false,
                                            "verified": false,
                                            "role": "ResidenceAddress"
                                        },
                                        {
                                            "medium": {
                                                "verified": false,
                                                "number": "9040009811"
                                            },
                                            "type": "Phone",
                                            "preferred": false,
                                            "verified": false
                                        },
                                        {
                                            "medium": {
                                                "verified": false,
                                                "number": "9040009812"
                                            },
                                            "type": "Phone",
                                            "preferred": false,
                                            "verified": false
                                        },
                                        {
                                            "medium": {
                                                "verified": false,
                                                "emailAddress": "subst95@gmail.com"
                                            },
                                            "type": "EmailAddress",
                                            "preferred": true,
                                            "verified": false
                                        }
                                    ],
                                    "legalEntity": false,
                                    "vip": false,
                                    "headOffice": false,
                                    "@baseType": "Party",
                                    "@referredType": "Individual",
                                    "@type": "Individual"
                                },
                                "@referredType": "Customer",
                                "@schemaLocation": null
                            }
                        ],
                        "modifiable": false,
                        "orderDate": "2024-06-21T10:43:03.935Z",
                        "cancellable": false,
                        "requestedStartDate": "2024-06-21T10:43:03.935Z",
                        "channel": [
                            {
                                "name": "ISL",
                                "role": "interaction creation",
                                "id": "isl",
                                "@referredType": "Channel",
                                "@type": "ISL"
                            }
                        ],
                        "@type": "ProductOrder"
                    }
                },
                {
                    "id": "II4",
                    "item": {
                        "customFields": {},
                        "@type": "Product"
                    }
                },
                {
                    "id": "II5",
                    "item": {
                        "relatedParty": [
                            {
                                "role": "isl",
                                "id": "madapi3pp",
                                "href": null,
                                "name": "madapi3pp",
                                "contactMedium": [
                                    {
                                        "medium": {
                                            "verified": false,
                                            "emailAddress": "madapi3pp@mtn.com"
                                        },
                                        "type": "EmailAddress",
                                        "preferred": false,
                                        "verified": false
                                    }
                                ],
                                "location": null,
                                "engagedParty": null,
                                "@referredType": "SSOUser",
                                "@schemaLocation": null
                            }
                        ],
                        "lifecycleState": "uploaded",
                        "documentSpecification": {
                            "id": "POID"
                        },
                        "documentCharacteristic": [
                            {
                                "name": "requestType",
                                "value": "PrepaidRegistrationRequest"
                            },
                            {
                                "name": "partyInteractionId",
                                "value": "PI53854"
                            },
                            {
                                "name": "channel",
                                "value": "isl"
                            }
                        ],
                        "@type": "Document"
                    }
                }
            ],
            "channel": [
                {
                    "name": "ISL",
                    "role": "interaction creation",
                    "id": "isl",
                    "@referredType": "Channel",
                    "@type": "ISL"
                }
            ],
            "productId": [],
            "retryable": false,
            "createdDate": "2024-06-21T10:43:02.323Z",
            "modifiedDate": "2024-06-21T10:43:07.242Z",
            "@baseType": "PartyInteraction",
            "@type": "AddPlanProductRequest",
            "@schemaLocation": "https://bss-uat.mtn.ci/partyInteractionManagement/v1/partyInteraction/schema"
        }
    }
];