(() => {
    // Arriba las interfaces principales, y abajo las secundarias
  interface Client {
    name: string;
    age?: number;
    address?: Address;
    getFullAddress(id: string): string
  }

  interface Address {
    id: number;
    zip: string;
    city: string;
  }

  const client: Client = {
    name: 'Beto',
    age: 23,
    address: {
      id: 125,
      zip: 'a 8123',
      city: 'Otawa',
    },
    getFullAddress(id: string) {
        return this.address?.city!;
    }
  };

  const client2: Client = {
    name: 'Jorge',
    age: 24,
    address: {
        city: 'Toronto',
        id: 120,
        zip: 'ABC 123'
    },
    getFullAddress(id: string) {
        return this.address?.city!;
    }
  };
})();
