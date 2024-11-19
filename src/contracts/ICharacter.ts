export interface ICharacter {
    id:              number;
    name:            string;
    normalized_name: string;
    gender:          Gender;
}

export enum Gender {
    EdBegleyJr = "ed begley jr",
    Empty = "",
    F = "f",
    HomerMargeAndBart = "homer marge and bart",
    HulkingShamblingFigure = "hulking shambling figure",
    KearneyJr = "kearney jr",
    M = "m",
    MartinPrinceSr = "martin prince sr",
    NedwardFlandersSr = "nedward flanders sr",
    RayJayJohnsonJr = "ray jay johnson jr",
    RogerMeyersJr = "roger meyers jr",
    The5 = "& #5'",
    WaylonSmithersSr = "waylon smithers sr",
}
