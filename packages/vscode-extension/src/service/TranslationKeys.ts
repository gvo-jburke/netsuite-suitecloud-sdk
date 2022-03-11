/* eslint-disable @typescript-eslint/naming-convention */
/*
 ** Copyright (c) 2021 Oracle and/or its affiliates.  All rights reserved.
 ** Licensed under the Universal Permissive License v 1.0 as shown at https://oss.oracle.com/licenses/upl.
 */

export const ADD_DEPENDENCIES = {
	ADDED: 'ADD_DEPENDENCIES_ADDED',
	ADDED_LOG: 'ADD_DEPENDENCIES_ADDED_LOG',
	ADDING: 'ADD_DEPENDENCIES_ADDING',
	EMPTY: 'ADD_DEPENDENCIES_EMPTY',
	ERROR: 'ADD_DEPENDENCIES_ERROR',
};

export const ANSWERS = {
	CANCEL: 'ANSWERS_CANCEL',
	CONTINUE: 'ANSWERS_CONTINUE',
	NO: 'ANSWERS_NO',
	YES: 'ANSWERS_YES',
};

export const BUTTONS = {
	RESTART_NOW: 'BUTTONS_RESTART_NOW',
	SEE_DETAILS: 'BUTTONS_SEE_DETAILS',
};

export const COMMAND = {
	ERROR: 'COMMAND_ERROR',
	SUCCESS: 'COMMAND_SUCCESS',
	TRIGGERED: 'COMMAND_TRIGGERED',
	WARNING: 'COMMAND_WARNING',
};

export const CREATE_FILE = {
	ERRORS: {
		MISSING_VALID_FOLDER_FOR_SUITECRIPT_FILE: 'CREATE_FILE_ERRORS_MISSING_VALID_FOLDER_FOR_SUITECRIPT_FILE',
	},
	QUESTIONS: {
		CHOOSE_SUITESCRIPT_TYPE: 'CREATE_FILE_QUESTIONS_CHOOSE_SUITESCRIPT_TYPE',
		ENTER_NAME: 'CREATE_FILE_QUESTIONS_ENTER_NAME',
		SELECT_FOLDER: 'CREATE_FILE_QUESTIONS_SELECT_FOLDER',
		SELECT_SUITESCRIPT_MODULES: 'CREATE_FILE_QUESTIONS_SELECT_SUITESCRIPT_MODULES',
	},
	MESSAGES: {
		CREATING_FILE: 'CREATE_FILE_MESSAGES_CREATING_FILE',
		SUITESCRIPT_FILE_CREATED: 'CREATE_FILE_MESSAGES_SUITESCRIPT_FILE_CREATED',
		SUITESCRIPT_FILE_CREATED_WITH_MODULES: 'CREATE_FILE_MESSAGES_SUITESCRIPT_FILE_CREATED_WITH_MODULES',
	},
};

export const CREATE_PROJECT = {
	BUTTONS: {
		NEW_WINDOW: 'CREATE_PROJECT_BUTTON_NEW_WINDOW',
		THIS_WINDOW: 'CREATE_PROJECT_BUTTON_THIS_WINDOW',
	},
	MESSAGES: {
		CREATING_PROJECT: 'CREATE_PROJECT_MESSAGE_CREATING_PROJECT',
		OPEN_PROJECT: 'CREATE_PROJECT_MESSAGE_OPEN_PROJECT',
	},
	PROJECT_TYPE: {
		ACP: 'CREATE_PROJECT_PROJECT_TYPE_ACP',
		SUITEAPP: 'CREATE_PROJECT_PROJECT_TYPE_SUITEAPP',
	},
	QUESTIONS: {
		CHOOSE_PROJECT_TYPE: 'CREATE_PROJECT_QUESTION_CHOOSE_PROJECT_TYPE',
		ENTER_PROJECT_ID: 'CREATE_PROJECT_QUESTION_ENTER_PROJECT_ID',
		ENTER_PROJECT_NAME: 'CREATE_PROJECT_QUESTION_ENTER_PROJECT_NAME',
		ENTER_PROJECT_VERSION: 'CREATE_PROJECT_QUESTION_ENTER_PROJECT_VERSION',
		ENTER_PUBLISHER_ID: 'CREATE_PROJECT_QUESTION_ENTER_PUBLISHER_ID',
		INCLUDE_UNIT_TESTING: 'CREATE_PROJECT_QUESTION_INCLUDE_UNIT_TESTING',
		OVERWRITE_PROJECT: 'CREATE_PROJECT_QUESTION_OVERWRITE_PROJECT',
	},
	SELECT_PARENT_FOLDER: 'CREATE_PROJECT_SELECT_PARENT_FOLDER',
};

export const DEPLOY = {
	DEPLOYING: 'DEPLOY_DEPLOYING',
	QUESTIONS: {
		ACCOUNT_SPECIFIC_VALUES: 'DEPLOY_QUESTIONS_ACCOUNT_SPECIFIC_VALUES',
		APPLY_INSTALLATION_PREFERENCES: 'DEPLOY_QUESTIONS_APPLY_INSTALLATION_PREFERENCES',
	},
	QUESTIONS_CHOICES: {
		ACCOUNT_SPECIFIC_VALUES: {
			CANCEL_PROCESS: 'DEPLOY_QUESTIONS_CHOICES_ACCOUNT_SPECIFIC_VALUES_CANCEL_PROCESS',
			DISPLAY_WARNING: 'DEPLOY_QUESTIONS_CHOICES_ACCOUNT_SPECIFIC_VALUES_DISPLAY_WARNING',
		},
	},
};

export const DISMISS = 'DISMISS';

export const ERRORS = {
	COURRUPTED_SDK_JAR_DEPENDENCY: 'ERRORS_COURRUPTED_SDK_JAR_DEPENDENCY',
	MISSING_MANIFEST_FILE_COMMAND_PALETTE: 'ERRORS_MISSING_MANIFEST_FILE_COMMAND_PALETTE',
	MISSING_MANIFEST_FILE_CONTEXT_MENU_FILE: 'ERRORS_MISSING_MANIFEST_FILE_CONTEXT_MENU_FILE',
	NO_ACTIVE_FILE: 'ERRORS_NO_ACTIVE_FILE',
	NO_ACTIVE_WORKSPACE: 'ERRORS_NO_ACTIVE_WORKSPACE',
	SDK_JAVA_VERSION_NOT_COMPATIBLE: 'ERRORS_SDK_JAVA_VERSION_NOT_COMPATIBLE',
	SDK_JAVA_VERSION_NOT_INSTALLED: 'ERRORS_SDK_JAVA_VERSION_NOT_INSTALLED',
};

export const EXTENSION_INSTALLATION = {
	ERROR: {
		GENERAL_ERROR: 'EXTENSION_INSTALLATION_ERROR_GENERAL_ERROR',
		SDK_INVALID: 'EXTENSION_INSTALLATION_ERROR_SDK_INVALID',
		SDK_NOT_AVAILABLE: 'EXTENSION_INSTALLATION_ERROR_SDK_NOT_AVAILABLE',
	},
	IN_PROGRESS: 'EXTENSION_INSTALLATION_IN_PROGRESS',
	PROJECT_STARTUP: {
		BUTTONS: {
			RUN_SUITECLOUD_SETUP_ACCOUNT: 'EXTENSION_PROJECT_STARTUP_BUTTON_RUN_SUITECLOUD_SETUP_ACCOUNT',
		},
		MESSAGES: {
			PROJECT_NEEDS_SETUP_ACCOUNT: 'EXTENSION_PROJECT_STARTUP_MESSAGE_PROJECT_NEEDS_SETUP_ACCOUNT',
		},
	},
	SUCCESS: {
		SDK_DOWNLOADED: 'EXTENSION_INSTALLATION_SUCCESS_SDK_DOWNLOADED',
	},
	WARNING: {
		VALIDATING_SDK_DEPENDENCIES: 'EXTENSION_INSTALLATION_WARINING_VALIDATING_SDK_DEPENDENCIES',
	}
};

export const IMPORT_FILES = {
	ERROR: {
		IMPORT_TO_SUITEAPP_NOT_ALLOWED: 'IMPORT_FILES_ERROR_IMPORT_TO_SUITEAPP_NOT_ALLOWED',
		NO_FOLDERS_FOUND: 'IMPORT_FILES_ERROR_NO_FOLDERS_FOUND',
		NOT_ALLOWED_FOLDER: 'IMPORT_FILES_ERROR_NOT_ALLOWED_FOLDER',
	},
	IMPORTING_FILES: 'IMPORT_FILES_IMPORTING_FILES',
	PROCESS_CANCELED: 'IMPORT_FILES_PROCESS_CANCELED',
	QUESTIONS: {
		CHOOSE_OPTION: 'IMPORT_FILES_QUESTIONS_CHOOSE_OPTION',
		EXCLUDE_PROPERTIES: 'IMPORT_FILES_QUESTIONS_EXCLUDE_PROPERTIES',
		SELECT_FILES: 'IMPORT_FILES_QUESTIONS_SELECT_FILES',
		SELECT_FOLDER: 'IMPORT_FILES_QUESTIONS_SELECT_FOLDER',
		OVERRIDE: 'IMPORT_FILES_QUESTIONS_OVERRIDE',
		OVERRIDE_SINGLE: 'IMPORT_FILES_QUESTIONS_OVERRIDE_SINGLE',
	},
};

export const IMPORT_OBJECTS = {
	ERROR: {
		EMPTY_LIST_SEARCH: 'IMPORT_OBJECTS_ERROR_EMPTY_LIST_SEARCH',
		INCORRECT_FOLDER: 'IMPORT_OBJECTS_ERROR_INCORRECT_FOLDER',
	},
	IMPORTING_OBJECTS: 'IMPORT_OBJECTS_IMPORTING_OBJECTS',
	PROCESS_CANCELED: 'IMPORT_OBJECTS_PROCESS_CANCELED',
	QUESTIONS: {
		APP_ID: 'IMPORT_OBJECTS_QUESTIONS_APP_ID',
		FILTER_APP_ID: 'IMPORT_OBJECTS_QUESTIONS_FILTER_APP_ID',
		OVERWRITE: 'IMPORT_OBJECTS_QUESTIONS_OVERWRITE',
		OVERWRITE_WITH_REFERENCED: 'IMPORT_OBJECTS_QUESTIONS_OVERWRITE_WITH_REFERENCED',
		REFERENCED_FILES: 'IMPORT_OBJECTS_QUESTIONS_REFERENCED_FILES',
		SCRIPT_ID: 'IMPORT_OBJECTS_QUESTIONS_SCRIPT_ID',
		SELECT_DESTINATION_FOLDER: 'IMPORT_OBJECTS_QUESTIONS_SELECT_DESTINATION_FOLDER',
		SELECT_OBJECTS: 'IMPORT_OBJECTS_QUESTIONS_SELECT_OBJECTS',
		SELECT_TYPES: 'IMPORT_OBJECTS_QUESTIONS_SELECT_TYPES',
	},
};

export const LIST_FILES = {
	ERROR: {
		NO_FILES_FOUND: 'LIST_FILES_ERROR_NO_FILES_FOUND',
		NO_FOLDERS_FOUND: 'LIST_FILES_ERROR_NO_FOLDERS_FOUND',
	},
	LISTING: 'LIST_FILES_LISTING',
	LOADING_FOLDERS: 'LIST_FILES_LOADING_FOLDERS',
	RESTRICTED_FOLDER: 'LIST_FILES_RESTRICTED_FOLDER',
	SELECT_FOLDER: 'LIST_FILES_SELECT_FOLDER',
};

export const LIST_OBJECTS = {
	LISTING: 'LIST_OBJECTS_LISTING',
	QUESTIONS: {
		APP_ID: 'LIST_OBJECTS_QUESTIONS_APP_ID',
		FILTER_APP_ID: 'LIST_OBJECTS_QUESTIONS_FILTER_APP_ID',
		FILTER_SCRIPT_ID: 'LIST_OBJECTS_QUESTIONS_FILTER_SCRIPT_ID',
		SELECT_OBJECTS_TYPES: 'LIST_OBJECTS_QUESTIONS_SELECT_OBJECT_TYPES',
	}
};

export const MANAGE_ACCOUNTS = {
	AVAILABLE_CONNECTIONS: 'MANAGE_ACCOUNTS_AVAILABLE_CONNECTIONS',
	CANCELED: 'MANAGE_ACCOUNTS_CANCELED',
	CREATE: {
		BROWSER: 'MANAGE_ACCOUNTS_CREATE_BROWSER',
		BROWSER_CANCEL: 'MANAGE_ACCOUNTS_CREATE_BROWSER_CANCEL',
		CONTINUE_IN_BROWSER: 'MANAGE_ACCOUNTS_CREATE_CONTINUE_IN_BROWSER',
		ENTER_AUTH_ID: 'MANAGE_ACCOUNTS_ENTER_AUTH_ID',
		ENTER_URL: 'MANAGE_ACCOUNTS_ENTER_URL',
		NEW_AUTHID: 'MANAGE_ACCOUNTS_CREATE_NEW_AUTHID',
		SAVE_TOKEN: {
			ENTER_ACCOUNT_ID: 'MANAGE_ACCOUNTS_SAVE_TOKEN_ENTER_ACCOUNT_ID',
			ENTER_TOKEN_ID: 'MANAGE_ACCOUNTS_SAVE_TOKEN_ENTER_TOKEN_ID',
			ENTER_TOKEN_SECRET: 'MANAGE_ACCOUNTS_SAVE_TOKEN_ENTER_TOKEN_SECRET',
			OPTION: 'MANAGE_ACCOUNTS_CREATE_SAVE_TOKEN_OPTION',
			SAVING_TBA: 'MANAGE_ACCOUNTS_CREATE_SAVE_TOKEN_SAVING_TBA',
			SUCCESS: {
				NEW_TBA: 'MANAGE_ACCOUNTS_CREATE_SAVE_TOKEN_NEW_TBA',
			},
		},
	},
	CREATE_NEW: 'MANAGE_ACCOUNTS_CREATE_NEW',
	ERROR: {
		NOT_IN_PROJECT: 'MANAGE_ACCOUNTS_ERROR_NOT_IN_PROJECT',
	},
	LOADING: 'MANAGE_ACCOUNTS_LOADING',
	SELECT_AUTH_ID: {
		SUCCESS: 'MANAGE_ACCOUNTS_SELECT_AUTH_ID_SUCCESS',
	},
	SELECT_CREATE: 'MANAGE_ACCOUNTS_SELECT_CREATE',
};

export const MANAGE_AUTH = {
	GENERAL: {
		INFO_OPTION: 'MANAGE_AUTH_GENERAL_INFO_OPTION',
		NO_ACCOUNTS_TO_MANAGE: 'MANAGE_AUTH_GENERAL_NO_ACCOUNTS_TO_MANAGE',
		REMOVE_OPTION: 'MANAGE_AUTH_GENERAL_REMOVE_OPTION',
		RENAME_OPTION: 'MANAGE_AUTH_GENERAL_RENAME_OPTION',
		SELECT_AUTH_ID_TO_MANAGE: 'MANAGE_AUTH_GENERAL_SELECT_AUTH_ID_TO_MANAGE',
		SELECT_OPTION_FOR_AUTH_ID: 'MANAGE_AUTH_GENERAL_SELECT_OPTION_FOR_AUTH_ID',
	},
	REMOVE: {
		CANCEL: 'MANAGE_AUTH_REMOVE_CANCEL',
		CONFIRMATION_MESSAGE: 'MANAGE_AUTH_REMOVE_CONFIRMATION_MESSAGE',
		CONTINUE: 'MANAGE_AUTH_REMOVE_CONTINUE',
		REMOVING_AUTH_ID: 'MANAGE_AUTH_REMOVE_REMOVING_AUTH_ID'
	},
	RENAME: {
		ENTER_NEW_AUTH_ID: 'MANAGE_AUTH_RENAME_ENTER_NEW_AUTH_ID',
		RENAMING_AUTH_ID: 'MANAGE_AUTH_RENAME_RENAMING_AUTH_ID'
	},
	
}

export const UPLOAD_FILE = {
	ERROR: {
		UPLOAD_FILE_FOLDER_RESTRICTION: 'UPLOAD_FILE_ERROR_UPLOAD_FILE_FOLDER_RESTRICTION',
	},
	OVERWRITE_QUESTION: 'UPLOAD_FILE_OVERWRITE_FILE',
	PROCESS_CANCELED: 'UPLOAD_FILE_PROCESS_CANCELED',
	UPLOADING: 'UPLOAD_FILE_UPLOADING',
};

export const UPDATE_OBJECT = {
	ERROR: {
		SDF_OBJECT_MUST_BE_IN_OBJECTS_FOLDER: 'UPDATE_OBJECT_ERROR_SDF_OBJECT_MUST_BE_IN_OBJECTS_FOLDER',
	},
	OVERWRITE: 'UPDATE_OBJECT_OVERWRITE',
	OVERWRITE_INSTANCES: 'UPDATE_OBJECT_OVERWRITE_INSTANCES',
	QUESTIONS: {
		INCLUDE_INSTANCES: 'UPDATE_OBJECT_QUESTIONS_INCLUDE_INSTANCES'
	},
	PROCESS_CANCELED: 'UPDATE_OBJECT_PROCESS_CANCELED',
	UPDATING: 'UPDATE_OBJECT_UPDATING',
};

export const VALIDATE = {
	VALIDATING: 'VALIDATE_VALIDATING'
}
