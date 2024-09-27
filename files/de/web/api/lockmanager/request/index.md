---
title: "LockManager: request() Methode"
short-title: request()
slug: Web/API/LockManager/request
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("Web Locks API")}}{{securecontext_header}} {{AvailableInWorkers}}

Die **`request()`**-Methode der [`LockManager`](/de/docs/Web/API/LockManager)-Schnittstelle fordert ein [`Lock`](/de/docs/Web/API/Lock)-Objekt mit Parametern an, die seinen Namen und seine Eigenschaften spezifizieren. Das angeforderte `Lock` wird an eine Callback-Funktion übergeben, während die Funktion selbst ein {{jsxref('Promise')}} zurückgibt, das mit dem Ergebnis des Callbacks aufgelöst (oder verworfen) wird, nachdem das Lock freigegeben wurde, oder verworfen wird, wenn die Anfrage abgebrochen wird.

Die `mode`-Eigenschaft des `options`-Parameters kann entweder `"exclusive"` oder `"shared"` sein.

Fordern Sie ein `"exclusive"`-Lock an, wenn es nur von einem Code-Instanz zu einem Zeitpunkt gehalten werden soll. Dies gilt sowohl für Code in Tabs als auch in Workern. Verwenden Sie dies, um wechselseitigen exklusiven Zugriff auf eine Ressource darzustellen. Wenn ein `"exclusive"`-Lock für einen bestimmten Namen gehalten wird, kann kein anderes Lock mit demselben Namen gehalten werden.

Fordern Sie ein `"shared"`-Lock an, wenn mehrere Instanzen des Codes gemeinsamen Zugriff auf eine Ressource haben können. Wenn ein `"shared"`-Lock für einen bestimmten Namen gehalten wird, können andere `"shared"`-Locks für denselben Namen gewährt werden, aber keine `"exclusive"`-Locks mit diesem Namen können gehalten oder gewährt werden.

Dieses gemeinsame/exklusive Sperrmuster ist in Datenbank-Transaktionsarchitekturen gebräuchlich, um zum Beispiel mehreren gleichzeitigen Lesern zu erlauben (jeder fordert ein `"shared"`-Lock an), jedoch nur einem Schreiber (ein einziges `"exclusive"`-Lock). Dies ist als Leser-Schreiber-Muster bekannt. In der [IndexedDB API](/de/docs/Web/API/IndexedDB_API) wird dies als `"readonly"`- und `"readwrite"`-Transaktionen ausgestellt, die dieselben Semantiken haben.

## Syntax

```js-nolint
request(name, callback)
request(name, options, callback)
```

### Parameter

- `name`

  - : Ein Bezeichner für das Lock, das Sie anfordern möchten.

- `options` {{optional_inline}}

  - : Ein Objekt, das die Eigenschaften des Locks beschreibt, das Sie erstellen möchten. Gültige Werte sind:

    - `mode` {{optional_inline}}

      - : Entweder `"exclusive"` oder `"shared"`. Der Standardwert ist `"exclusive"`.

    - `ifAvailable` {{optional_inline}}

      - : Wenn `true`, wird die Lock-Anforderung nur gewährt, wenn sie nicht bereits gehalten wird. Wenn sie nicht gewährt werden kann, wird der Callback mit `null` statt mit einer `Lock`-Instanz aufgerufen. Der Standardwert ist `false`.

    - `steal` {{optional_inline}}

      - : Wenn `true`, werden alle gehaltenen Locks mit demselben Namen freigegeben, und die Anfrage wird gewährt, wobei alle in der Warteschlange stehenden Anfragen vorgezogen werden. Der Standardwert ist `false`.

        > [!WARNING]
        > Mit Vorsicht verwenden!
        > Code, der zuvor innerhalb des Locks ausgeführt wurde, wird weiter ausgeführt und kann mit dem Code kollidieren, der jetzt das Lock hält.

    - `signal` {{optional_inline}}
      - : Ein [`AbortSignal`](/de/docs/Web/API/AbortSignal) (die [`signal`](/de/docs/Web/API/AbortController/signal)-Eigenschaft eines [`AbortController`](/de/docs/Web/API/AbortController)); wenn angegeben und der [`AbortController`](/de/docs/Web/API/AbortController) abgebrochen wird, wird die Lock-Anfrage fallen gelassen, wenn sie noch nicht gewährt wurde.

- `callback`
  - : Methode, die aufgerufen wird, wenn das Lock gewährt wird. Das Lock wird automatisch freigegeben, wenn der Callback zurückkehrt (oder eine Ausnahme geworfen wird). Gewöhnlich ist der Callback eine asynchrone Funktion, was dazu führt, dass das Lock erst dann freigegeben wird, wenn die asynchrone Funktion vollständig abgeschlossen ist.

### Rückgabewert

Ein {{jsxref('Promise')}}, das mit dem Ergebnis des Callbacks aufgelöst (oder verworfen) wird, nachdem das Lock freigegeben wurde, oder verworfen wird, wenn die Anfrage abgebrochen wird.

### Ausnahmen

Diese Methode kann ein Promise zurückgeben, das mit einem [`DOMException`](/de/docs/Web/API/DOMException) von einem der folgenden Typen verworfen wird:

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das Umgebungsdokument nicht vollständig aktiv ist.
- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn ein Lock-Manager für die aktuelle Umgebung nicht erlangt werden kann.
- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn `name` mit einem Bindestrich (`-`) beginnt, beide Optionen `steal` und `ifAvailable` `true` sind, oder wenn die Option `signal` existiert und _entweder_ die Option `steal` oder `ifAvailable` `true` ist.
- `AbortError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Option `signal` existiert und abgebrochen wird.

## Beispiele

### Allgemeines Beispiel

Das folgende Beispiel zeigt die grundlegende Verwendung der `request()`-Methode mit einer asynchronen Funktion als Callback. Sobald der Callback aufgerufen wird, kann kein anderer laufender Code an diesem Ursprung `my_resource` halten, bis der Callback zurückkehrt.

```js
await navigator.locks.request("my_resource", async (lock) => {
  // The lock was granted.
});
```

### Beispiel für `mode`

Das folgende Beispiel zeigt, wie man die `mode`-Option für Leser und Schreiber verwendet.

Beachten Sie, dass beide Funktionen ein Lock namens `my_resource` verwenden. Die `do_read()` fordert ein Lock im `'shared'`-Modus an, was bedeutet, dass mehrere Aufrufe gleichzeitig über verschiedene Ereignis-Handler, Tabs oder Worker erfolgen können.

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

Die `do_write()`-Funktion verwendet dasselbe Lock, aber im `'exclusive'`-Modus, was die Aufrufung des `request()`-Aufrufs in `do_read()` verzögert, bis der Schreibvorgang abgeschlossen ist. Dies gilt für Ereignis-Handler, Tabs oder Worker.

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

### Beispiel für `ifAvailable`

Um ein Lock nur zu greifen, wenn es nicht bereits gehalten wird, verwenden Sie die `ifAvailable`-Option. In dieser Funktion bedeutet `await`, dass die Methode nicht zurückkehrt, bis der Callback abgeschlossen ist. Da das Lock nur gewährt wird, wenn es verfügbar war, vermeidet dieser Aufruf das Warten darauf, dass das Lock anderswo freigegeben wird.

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

### Beispiel für `signal`

Um nur für eine kurze Zeit auf ein Lock zu warten, verwenden Sie die `signal`-Option.

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
