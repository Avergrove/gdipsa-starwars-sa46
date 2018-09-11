export interface PeopleMeta {
    count: string;
    next: string;
    previous: string;
    results: People[];
}

export interface People {
    category: "people";
    name: string;
    height: string;
    mass: number;
    hair_color: string;
    skin_color: string;
    birth_year: string;
    gender: string;

    homeworld: string; // Url
    films: string[];   // Url
    species: string[]; // Url
    vehicles: string[];
    starships: string[];

    created: string[];
    edited: string[];

    url: string;
}



export interface FilmMeta {
    count: string;
    next: string;
    previous: string;
    results: Film[];
}

export interface Film {
    category: "film";
    
    title: string;
    episode_id: string;
    opening_crawl: string;
    director: string;
    producer: string;
    release_date: string;

    characters: string[];
    planets: string[];
    starships: string[];
    vehicles: string[];
    species: string[];
    
    created: string;
    edited: string;
    url: string;
}



export interface SpeciesMeta {
    count: string;
    next: string;
    previous: string;
    results: Species[];
}

export interface Species {
    category: "species";
    
    name: string;
    classification: string;
    designation: string;
    average_height: string;
    skin_colors: string;
    hair_colors: string;
    eye_colors: string;
    average_lifespan: string;
    homeworld: string;
    language: string;

    people: string[];
    films: string[];

    created: string;
    edited: string;
    url: string;
}

export interface StarshipMeta {
    count: string;
    next: string;
    previous: string;
    results: Starship[];
}

export interface Starship{
    category: "starship";
    
    name: string;
    model: string;
    manufacturer: string;
    cost_in_credits: string;
    length: string;
    max_atmosphering_speed: string;
    crew: string;
    passengers: string;
    cargo_capacity: string;
    consumables: string;
    hyperdrive_rating: string;
    MGLT: string;
    starship_class: string;
    
    pilots: string[];
    films: string[];

    created: string;
    edited: string;
    url: string;
}

export interface VehicleMeta {
    count: string;
    next: string;
    previous: string;
    results: Vehicle[];
}

export interface Vehicle{
    category: "vehicle";
    
    name: string;
    model: string;
    manufacturer: string;
    cost_in_credits: string;
    length: string;
    max_atmosphering_speed: string;
    crew: string;
    passengers: string;
    cargo_capacity: string;
    consumables: string;
    vehicle_class: string;

    
    pilots: string[];
    films: string[];
    created: string;
    edited: string;
    url: string;
}

export interface PlanetMeta{
    count: string;
    next: string;
    previous: string;
    results: Planet[];
}

export interface Planet{
    category: "planet";
    
    name: string;
    rotation_period: string;
    orbital_period: string;
    diameter: string;
    climate: string;
    gravity: string;
    terrain: string;
    surface_water: string;
    population: string;
    residents: string[];
    films: string[];
    created: string;
    edited: string;
    url: string;
}