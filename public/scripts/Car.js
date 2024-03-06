import Component from "./Component.js";

export default class Car extends Component {
    constructor({
        id,
        plate,
        manufacture,
        model,
        image,
        rentPerDay,
        capacity,
        description,
        transmission,
        available,
        type,
        year,
        options,
        specs,
        availableAt,
    }) {
        super(id);
        this.plate = plate;
        this.manufacture = manufacture;
        this.model = model;
        this.image = image;
        this.rentPerDay = rentPerDay;
        this.capacity = capacity;
        this.description = description;
        this.transmission = transmission;
        this.available = available;
        this.type = type;
        this.year = year;
        this.options = options;
        this.specs = specs;
        this.availableAt = availableAt;
    }

    static list = [];

    static init = (cars) => (this.list = cars.map((car) => new this(car)));

    render() {
        return `
            <p>id: <b>${this.id}</b></p>
            <p>plate: <b>${this.plate}</b></p>
            <p>manufacture: <b>${this.manufacture}</b></p>
            <p>model: <b>${this.model}</b></p>
            <p>available at: <b>${this.availableAt}</b></p>
            <img src="${this.image}" alt="${this.manufacture}" width="64px">
        `;
    }
}
