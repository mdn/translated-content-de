---
title: "LockManager: request() Methode"
short-title: request()
slug: Web/API/LockManager/request
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("Web Locks API")}}{{securecontext_header}} {{AvailableInWorkers}}

Die **`request()`**-Methode der [`LockManager`](/de/docs/Web/API/LockManager)-Schnittstelle fordert ein [`Lock`](/de/docs/Web/API/Lock)-Objekt an, wobei Parameter dessen Namen und Eigenschaften spezifizieren.
Das angeforderte `Lock` wird an eine Callback-Funktion übergeben, während die Funktion selbst ein {{jsxref('Promise')}} zurückgibt, das mit dem Ergebnis des Callbacks aufgelöst (oder abgelehnt) wird, nachdem der Lock freigegeben wurde, oder abgelehnt wird, wenn die Anforderung abgebrochen wird.

Die `mode`-Eigenschaft des `options`-Parameters kann entweder `"exclusive"` oder `"shared"` sein.

Fordern Sie eine `"exclusive"`-Sperre an, wenn sie nur von einer Code-Instanz zu einem Zeitpunkt gehalten werden sollte.
Dies gilt sowohl für Code in Registerkarten als auch in Workern. Verwenden Sie dies, um einen gegenseitig ausschließenden Zugriff auf eine Ressource zu repräsentieren.
Wenn eine `"exclusive"`-Sperre für einen bestimmten Namen gehalten wird, kann keine andere Sperre mit demselben Namen gehalten werden.

Fordern Sie eine `"shared"`-Sperre an, wenn mehrere Instanzen des Codes gemeinsam auf eine Ressource zugreifen können.
Wenn eine `"shared"`-Sperre für einen bestimmten Namen gehalten wird, können andere `"shared"`-Sperren für denselben Namen gewährt werden, aber keine `"exclusive"`-Sperren mit diesem Namen können gehalten oder gewährt werden.

Dieses Muster von gemeinsamer/exklusiver Sperre ist in der Datenbank-Transaktionsarchitektur üblich, um zum Beispiel mehrere gleichzeitige Leser zuzulassen (jeder fordert eine `"shared"`-Sperre an), aber nur einen Schreiber (eine einzelne `"exclusive"`-Sperre).
Dies ist als das Leser-Schreiber-Muster bekannt.
Im [IndexedDB API](/de/docs/Web/API/IndexedDB_API) wird dies als `"readonly"` und `"readwrite"`-Transaktionen angezeigt, die dieselbe Semantik besitzen.

## Syntax

```js-nolint
request(name, callback)
request(name, options, callback)
```

### Parameter

- `name`

  - : Ein Bezeichner für die Sperre, die Sie anfordern möchten.

- `options` {{optional_inline}}

  - : Ein Objekt, das die Eigenschaften der Sperre beschreibt, die Sie erstellen möchten.
    Gültige Werte sind:

    - `mode` {{optional_inline}}

      - : Entweder `"exclusive"` oder `"shared"`.
        Der Standardwert ist `"exclusive"`.

    - `ifAvailable` {{optional_inline}}

      - : Wenn `true`, wird die Sperranforderung nur gewährt, wenn sie nicht bereits gehalten wird.
        Wenn sie nicht gewährt werden kann, wird das Callback mit `null` anstelle einer `Lock`-Instanz ausgeführt.
        Der Standardwert ist `false`.

    - `steal` {{optional_inline}}

      - : Wenn `true`, werden alle gehaltenen Sperren mit demselben Namen freigegeben und die Anforderung wird gewährt, wodurch alle dafür eingereihten Anfragen vorweggenommen werden.
        Der Standardwert ist `false`.

        > [!WARNING]
        > Verwenden Sie dies mit Vorsicht!
        > Code, der zuvor innerhalb der Sperre ausgeführt wurde, läuft weiter und kann mit dem Code in Konflikt geraten, der die Sperre jetzt hält.

    - `signal` {{optional_inline}}
      - : Ein [`AbortSignal`](/de/docs/Web/API/AbortSignal) (die [`signal`](/de/docs/Web/API/AbortController/signal)-Eigenschaft eines [`AbortController`](/de/docs/Web/API/AbortController));
        wenn angegeben und der [`AbortController`](/de/docs/Web/API/AbortController) abgebrochen wurde, wird die Sperranforderung fallengelassen, wenn sie noch nicht gewährt wurde.

- `callback`
  - : Methode, die aufgerufen wird, wenn die Sperre gewährt wird.
    Die Sperre wird automatisch freigegeben, wenn das Callback zurückkehrt (oder eine Ausnahme ausgelöst wird).
    In der Regel ist das Callback eine asynchrone Funktion, die dafür sorgt, dass die Sperre erst freigegeben wird, wenn die asynchrone Funktion vollständig beendet ist.

### Rückgabewert

Ein {{jsxref('Promise')}} das mit dem Ergebnis des Callbacks aufgelöst (oder abgelehnt) wird, nachdem die Sperre freigegeben wurde, oder abgelehnt wird, wenn die Anforderung abgebrochen wird.

### Ausnahmen

Diese Methode kann ein Promise zurückgeben, das mit einem [`DOMException`](/de/docs/Web/API/DOMException) der folgenden Typen abgelehnt wird:

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das Dokument der Umgebungen nicht vollständig aktiv ist.
- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn ein Sperrenmanager für die aktuelle Umgebung nicht bezogen werden kann.
- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn `name` mit einem Bindestrich (`-`) beginnt, sowohl die Optionen `steal` als auch `ifAvailable` `true` sind oder wenn die `signal`-Option vorhanden ist und _entweder_ die Option `steal` oder `ifAvailable` `true` ist.
- `AbortError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Option `signal` vorhanden ist und abgebrochen wird.

## Beispiele

### Allgemeines Beispiel

Das folgende Beispiel zeigt die grundlegende Verwendung der `request()`-Methode mit einer asynchronen Funktion als Callback.
Sobald das Callback aufgerufen wird, kann kein anderer laufender Code unter diesem Ursprung `my_resource` halten, bis das Callback zurückkehrt.

```js
await navigator.locks.request("my_resource", async (lock) => {
  // The lock was granted.
});
```

### `mode` Beispiel

Das folgende Beispiel zeigt, wie man die `mode`-Option für Leser und Schreiber verwendet.

Beachten Sie, dass beide Funktionen eine Sperre namens `my_resource` verwenden.
Die Funktion `do_read()` fordert eine Sperre im `'shared'`-Modus an, was bedeutet, dass mehrere Aufrufe gleichzeitig über verschiedene Ereignishandler, Registerkarten oder Worker stattfinden können.

```js
async function do_read() {
  await navigator.locks.request(
    "my_resource",
    { mode: "shared" },
    async (lock) => {
      // Read code here.
    },
  );
}
```

Die `do_write()`-Funktion verwendet dieselbe Sperre, jedoch im `'exclusive'`-Modus, wodurch die Ausführung des `request()`-Aufrufs in `do_read()` verzögert wird, bis der Schreibvorgang abgeschlossen ist.
Dies gilt über Ereignishandler, Registerkarten oder Worker hinweg.

```js
async function do_write() {
  await navigator.locks.request(
    "my_resource",
    { mode: "exclusive" },
    async (lock) => {
      // Write code here.
    },
  );
}
```

### `ifAvailable` Beispiel

Um eine Sperre nur zu erhalten, wenn sie nicht bereits gehalten wird, verwenden Sie die `ifAvailable`-Option.
In dieser Funktion bedeutet `await`, dass die Methode erst zurückkehrt, wenn das Callback abgeschlossen ist.
Da die Sperre nur gewährt wird, wenn sie verfügbar war, vermeidet dieser Aufruf, auf die Freigabe der Sperre an anderer Stelle warten zu müssen.

```js
await navigator.locks.request(
  "my_resource",
  { ifAvailable: true },
  async (lock) => {
    if (!lock) {
      // The lock was not granted - get out fast.
      return;
    }

    // The lock was granted, and no other running code in this origin is holding
    // the 'my_res_lock' lock until this returns.
  },
);
```

### `signal` Beispiel

Um nur für eine kurze Zeit auf eine Sperre zu warten, verwenden Sie die `signal`-Option.

```js
const controller = new AbortController();
// Wait at most 200ms.
setTimeout(() => controller.abort(), 200);

try {
  await navigator.locks.request(
    "my_resource",
    { signal: controller.signal },
    async (lock) => {
      // The lock was acquired!
    },
  );
} catch (ex) {
  if (ex.name === "AbortError") {
    // The request aborted before it could be granted.
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
