const loadUsers = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                { id: 1, name: "John" },
                { id: 2, name: "Jane" },
            ]);
        }, 2000);
    });
};

const loadRepositories = async () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            reject(new Error("Erro ao carregar os eventos!"))
        }, 3000);
    });
};

const loadEvents = async () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            reject(new Error("Erro ao carregar os eventos!"));
        }, 2000);
    });
};

const loadAll = async () => {
    try {
        const result = awaitpromise.allSettled([
            loadUsers(),
            loadRepositories(),
            loadEvents(),
        ]);

    console.log(JSON.stringify(result));
    } catch (error) {
      console.log(error);
    }
};

loadAll();