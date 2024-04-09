La traccia descrive come aggiungere una nuova funzionalità per visualizzare informazioni su utenti GitHub:

Nuova rotta: Verrà aggiunta una nuova strada all'applicazione, raggiungibile con l'indirizzo users/:username. Il :username nella parte finale indica che ci aspettiamo un valore specifico al posto di quei due punti. Questo valore identificherà l'username di un utente GitHub.

Componente ShowGithubUser: Quando l'utente accede alla rotta users/:username, verrà visualizzato un componente chiamato ShowGithubUser. Questo componente avrà il compito di mostrare le informazioni dell'utente GitHub.

Recupero username: Il componente ShowGithubUser sarà in grado di leggere il valore di username presente nell'indirizzo. Immaginalo come estrarre l'username specifico digitato dall'utente nell'indirizzo.

Riutilizzo del componente GithubUser: La traccia chiede di riutilizzare il componente GithubUser creato in un precedente esercizio chiamato "Data Fetching with fetch and useEffect". Questo componente probabilmente è già capace di visualizzare le informazioni di un utente GitHub se gli viene fornito l'username.

Passaggio dell'username: Il componente ShowGithubUser non visualizza direttamente le informazioni. Invece, passerà l'username recuperato dall'indirizzo (punto 3) al componente GithubUser (punto 4). In questo modo, il componente GithubUser potrà utilizzare l'username per recuperare e mostrare le informazioni dell'utente richiesto.

Riassumendo, la traccia richiede di creare una nuova sezione nell'applicazione dedicata agli utenti GitHub. Questa sezione riceverà come parametro l'username dell'utente e riuscirà a mostrare le sue informazioni grazie a un componente già implementato in precedenza.
