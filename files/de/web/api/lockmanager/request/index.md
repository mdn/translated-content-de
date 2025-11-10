---
title: "LockManager: request() Methode"
short-title: request()
slug: Web/API/LockManager/request
l10n:
  sourceCommit: f336c5b6795a562c64fe859aa9ee2becf223ad8a
---

{{APIRef("Web Locks API")}}{{securecontext_header}} {{AvailableInWorkers}}

Die **`request()`** Methode des [`LockManager`](/de/docs/Web/API/LockManager) Schnittstelle fordert ein [`Lock`](/de/docs/Web/API/Lock) Objekt mit Parametern an, die seinen Namen und seine Eigenschaften spezifizieren.
Das angeforderte `Lock` wird an einen Callback übergeben, während die Funktion selbst ein {{jsxref('Promise')}} zurückgibt, das mit dem Ergebnis des Callbacks aufgelöst (oder abgelehnt) wird, nachdem die Sperre freigegeben wurde, oder abgelehnt wird, wenn die Anfrage abgebrochen wird.

Die `mode` Eigenschaft des `options` Parameters kann entweder `"exclusive"` oder `"shared"` sein.

Fordern Sie eine `"exclusive"` Sperre an, wenn sie nur von einer Codeinstanz zur gleichen Zeit gehalten werden sollte.
Dies gilt sowohl für Code in Tabs als auch in Workern. Verwenden Sie dies, um gegenseitig ausschließenden Zugang zu einer Ressource darzustellen.
Wenn eine `"exclusive"` Sperre für einen bestimmten Namen gehalten wird, kann keine andere Sperre mit demselben Namen gehalten werden.

Fordern Sie eine `"shared"` Sperre an, wenn mehrere Instanzen des Codes gemeinsam Zugang zu einer Ressource teilen können.
Wenn eine `"shared"` Sperre für einen bestimmten Namen gehalten wird, können andere `"shared"` Sperren für denselben Namen gewährt werden, aber keine `"exclusive"` Sperren mit diesem Namen können gehalten oder gewährt werden.

Dieses shared/exclusive Sperrmuster ist üblich in der Datenbank-Transaktionsarchitektur, zum Beispiel, um mehrere gleichzeitige Leser zu ermöglichen (jede Anfrage eine `"shared"` Sperre) aber nur einen Schreiber (eine einzige `"exclusive"` Sperre).
Dies ist als das Leser-Schreiber-Muster bekannt.
In der [IndexedDB API](/de/docs/Web/API/IndexedDB_API) wird dies als `"readonly"` und `"readwrite"` Transaktionen ausgesetzt, die die gleichen Semantiken haben.

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
      - : Wenn `true`, wird die Sperranfrage nur gewährt, wenn sie nicht bereits gehalten wird.
        Wenn sie nicht gewährt werden kann, wird der Callback mit `null` statt einer `Lock` Instanz aufgerufen.
        Der Standardwert ist `false`.

    - `steal` {{optional_inline}}
      - : Wenn `true`, werden alle gehaltenen Sperren mit demselben Namen freigegeben, und die Anfrage wird gewährt, wobei alle in der Warteschlange stehenden Anfragen für diese Sperre vorweggenommen werden.
        Der Standardwert ist `false`.

        > [!WARNING]
        > Mit Vorsicht verwenden!
        > Code, der vorher innerhalb der Sperre ausgeführt wurde, läuft weiter und kann mit dem Code kollidieren, der jetzt die Sperre hält.

    - `signal` {{optional_inline}}
      - : Ein [`AbortSignal`](/de/docs/Web/API/AbortSignal) (die [`signal`](/de/docs/Web/API/AbortController/signal) Eigenschaft eines [`AbortController`](/de/docs/Web/API/AbortController));
        wenn angegeben und der [`AbortController`](/de/docs/Web/API/AbortController) abgebrochen wird, wird die Sperranfrage fallen gelassen, wenn sie noch nicht gewährt wurde.

- `callback`
  - : Methode, die aufgerufen wird, wenn die Sperre gewährt wird.
    Die Sperre wird automatisch freigegeben, wenn der Callback zurückkehrt (oder eine Ausnahme geworfen wird).
    Normalerweise ist der Callback eine asynchrone Funktion, die dazu führt, dass die Sperre erst freigegeben wird, wenn die asynchrone Funktion vollständig abgeschlossen ist.

### Rückgabewert

Ein {{jsxref('Promise')}}, das mit dem Ergebnis des Callbacks aufgelöst (oder abgelehnt) wird, nachdem die Sperre freigegeben wurde, oder abgelehnt wird, wenn die Anfrage abgebrochen wird.

### Ausnahmen

Diese Methode kann ein Promise zurückgeben, das mit einem [`DOMException`](/de/docs/Web/API/DOMException) der folgenden Typen abgelehnt wird:

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das Dokument der Umgebung nicht vollständig aktiv ist.
- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn kein Lock Manager für die aktuelle Umgebung erhalten werden kann.
- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn `name` mit einem Bindestrich (`-`) beginnt, sowohl Optionen `steal` als auch `ifAvailable` auf `true` gesetzt sind, oder wenn die Option `signal` existiert und _entweder_ die Option `steal` oder `ifAvailable` auf `true` gesetzt ist.
- `AbortError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Option `signal` existiert und abgebrochen wird.

## Beispiele

### Allgemeines Beispiel

Das folgende Beispiel zeigt die grundlegende Verwendung der `request()` Methode mit einer asynchronen Funktion als Callback.
Sobald der Callback aufgerufen wird, kann kein anderer laufender Code an diesem Ursprung `my_resource` halten, bis der Callback zurückkehrt.

```js
await navigator.locks.request("my_resource", async (lock) => {
  // The lock was granted.
});
```

### `mode` Beispiel

Das folgende Beispiel zeigt, wie man die `mode` Option für Leser und Schreiber verwendet.

Beachten Sie, dass beide Funktionen eine Sperre namens `my_resource` verwenden.
Die `doRead()` fordert eine Sperre im `'shared'` Modus an, was bedeutet, dass mehrere Aufrufe gleichzeitig über verschiedene Ereignis-Handler, Tabs oder Worker erfolgen können.

```js
async function doRead() {
  await navigator.locks.request(
    "my_resource",
    { mode: "shared" },
    async (lock) => {
      // Read code here.
    },
  );
}
```

Die `doWrite()` Funktion verwendet die gleiche Sperre, aber im `'exclusive'` Modus, was die Ausführung des `request()` Aufrufs in `doRead()` verzögert, bis der Schreibvorgang abgeschlossen ist.
Dies gilt für alle Ereignis-Handler, Tabs oder Worker.

```js
async function doWrite() {
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

Um eine Sperre nur zu erhalten, wenn sie nicht bereits gehalten wird, verwenden Sie die `ifAvailable` Option.
In dieser Funktion bedeutet `await`, dass die Methode nicht zurückkehrt, bis der Callback abgeschlossen ist.
Da die Sperre nur gewährt wird, wenn sie verfügbar war, vermeidet dieser Aufruf die Notwendigkeit, auf die Freigabe der Sperre anderswo zu warten.

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

Um nur für eine kurze Zeit auf eine Sperre zu warten, verwenden Sie die `signal` Option.

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
