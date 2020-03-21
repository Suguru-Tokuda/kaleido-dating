const userRegistrationData = {
    raceIDs: [],
    gender: '',
    racePrefIDs: [],
    genderToLookFor: '',
    firstName: '',
    dateOfBirth: '',
    height: 0,
    bodyTypeID: 0,
    physicalAppearanceIDs: [],
};

export default function UserRegistration(state = userRegistrationData, action) {
    const newState = Object.assign({}, state);
    switch (action.type) {
        case 'SET_RACE_IDS':
            newState.raceIDs = action.value;
            break;
        case 'SET_GENDER':
            newState.gender = action.value;
            break;
        case 'SET_RACE_PREF_IDS':
            newState.racePrefIDs = action.value;
            break;
        case 'SET_GENDER_TO_LOOK_FOR':
            newState.genderToLookFor = action.value;
            break;
        case 'SET_FIRST_NAME':
            newState.firstName = action.value;
            break;
        case 'SET_DATE_OF_BIRTH':
            newState.dateOfBirth = action.value;
            break;
        case 'SET_HEIGHT':
            newState.height = action.value;
            break;
        case 'SET_BODY_TYPE_ID':
            newState.bodyTypeID = action.value;
            break;
        case 'SET_PHYSICAL_APPEARANCE_IDS':
            newState.physicalAppearanceIDs = action.value;
            break;
        default:
            breakl;
    }
    return newState;
}