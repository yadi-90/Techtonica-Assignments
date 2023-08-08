class TicketType {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

class Event {
    constructor(name, description) {
        this.name = name;
        this.description = description;
        this.availableTickets = [];
    }

    addAvailableTickets(ticketName, ticketPrice) {
        const newTicketType = new TicketType(ticketName, ticketPrice);
        this.availableTickets.push(newTicketType);
    }

    searchTickets(minPrice, maxPrice) {
        const eligibleTickets = this.availableTickets.filter(ticket => {
            return ticket.price >= minPrice && ticket.price <= maxPrice;
        });

        if (eligibleTickets.length === 0) {
            return 'No tickets available.';
        }

        const ticketList = eligibleTickets.map((ticket, index) => {
            return `${index + 1}. ${ticket.name} ($${ticket.price})`;
        });

        return 'Eligible tickets:\n' + ticketList.join('\n');
    }

    getCheapestTicket() {
        if (this.availableTickets.length === 0) {
            return 'No tickets available.';
        }

        let cheapestTicket = this.availableTickets[0];
        this.availableTickets.forEach(ticket => {
            if (ticket.price < cheapestTicket.price) {
                cheapestTicket = ticket;
            }
        });

        return `Cheapest ticket: ${cheapestTicket.name} ($${cheapestTicket.price})`;
    }
}

const eventObj1 = new Event(
    'KLOS Golden Gala',
    'An evening with Hollywood vampires'
);

const eventObj2 = new Event('Skillet & Sevendust', 'Victorious war tour');
const eventObj3 = new Event('Jenny Lewis', 'On the line tour 2019');

// Add available tickets for eventObj1
eventObj1.addAvailableTickets('human', 299);
eventObj1.addAvailableTickets('vampire', 99);

// Add available tickets for eventObj2 and eventObj3
eventObj2.addAvailableTickets('general', 40);
eventObj2.addAvailableTickets('floor seating', 80);
eventObj3.addAvailableTickets('balcony', 100);

const eventArray = [eventObj1, eventObj2, eventObj3];

document.addEventListener('DOMContentLoaded', function () {
    const ul = document.getElementById('event');

    eventArray.forEach(event => {
        const li = document.createElement('li');
        li.textContent = `${event.name} - ${event.description}`;

        const cheapestTicket = event.getCheapestTicket();
        li.textContent += ` - ${cheapestTicket}`;

        ul.appendChild(li);
    });
});

