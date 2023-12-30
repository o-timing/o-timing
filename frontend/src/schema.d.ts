/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */


export interface paths {
  "/v1/participants": {
    /**
     * List of participants.
     * @description Returns the list of all participants
     */
    get: operations["get_participants"];
    /**
     * Creates a Participant.
     * @description Creates a participant using given fields.
     */
    post: operations["create_participant"];
  };
  "/v1/participants/{id}": {
    /**
     * Particular participant info
     * @description All the information on a single participant
     */
    get: operations["get_participant"];
  };
}

export type webhooks = Record<string, never>;

export interface components {
  schemas: {
    /**
     * @example {
     *   "id": 3986238010,
     *   "firstname": "Alfred",
     *   "lastname": "Teig",
     *   "startno": "435,",
     *   "ecard": "4530167",
     *   "class": "H15-16",
     *   "team": "Nydalen SK",
     *   "rentalEcard": false
     * }
     */
    Participant: {
      /** @description Database id of the participant */
      id?: number;
      firstname: string;
      lastname: string;
      startno?: number;
      ecard?: string;
      class: string;
      team: string;
      rentalEcard: boolean;
    };
    /**
     * @example {
     *   "firstname": "Christine",
     *   "lastname": "Teig",
     *   "startno": "345,",
     *   "ecard": "4430167",
     *   "class": "D50",
     *   "team": "Nydalen SK",
     *   "rentalEcard": false
     * }
     */
    ParticipantBody: {
      firstname: string;
      lastname: string;
      startno?: number;
      ecard?: string;
      class: string;
      team: string;
    };
    Error: {
      msg: string;
      errorCode: number;
    };
  };
  responses: never;
  parameters: {
    /** @description Human readable id */
    slug: string;
  };
  requestBodies: never;
  headers: never;
  pathItems: never;
}

export type $defs = Record<string, never>;

export type external = Record<string, never>;

export interface operations {

  /**
   * List of participants.
   * @description Returns the list of all participants
   */
  get_participants: {
    responses: {
      /** @description List of all participants */
      200: {
        content: {
          "application/json": components["schemas"]["Participant"][];
        };
      };
    };
  };
  /**
   * Creates a Participant.
   * @description Creates a participant using given fields.
   */
  create_participant: {
    /** @description Required information to create a participant */
    requestBody: {
      content: {
        "application/json": components["schemas"]["ParticipantBody"];
      };
    };
    responses: {
      /** @description Created participant */
      200: {
        content: {
          "application/json": components["schemas"]["Participant"];
        };
      };
      /** @description Request was wrong. Some fields in body might be missing or invalid. */
      400: {
        content: {
          "application/json": components["schemas"]["Error"];
        };
      };
    };
  };
  /**
   * Particular participant info
   * @description All the information on a single participant
   */
  get_participant: {
    parameters: {
      path: {
        id: number;
      };
    };
    responses: {
      /** @description A participant object */
      200: {
        content: {
          "application/json": components["schemas"]["Participant"];
        };
      };
      /** @description Provided participant ID does not correspond to any object in the DB */
      404: {
        content: {
          "application/json": components["schemas"]["Error"];
        };
      };
    };
  };
}
