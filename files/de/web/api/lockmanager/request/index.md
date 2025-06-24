---
title: "LockManager: request() Methode"
short-title: request()
slug: Web/API/LockManager/request
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("Web Locks API")}}{{securecontext_header}} {{AvailableInWorkers}}

Die **`request()`** Methode des [`LockManager`](/de/docs/Web/API/LockManager) Interfaces fordert ein [`Lock`](/de/docs/Web/API/Lock)-Objekt mit Parametern an, die dessen Namen und Eigenschaften spezifizieren. Das angeforderte `Lock` wird an einen Callback übergeben, während die Funktion selbst ein {{jsxref('Promise')}} zurückgibt, das (oder mit dem Ergebnis des Callbacks nach Freigabe des Locks auflöst (oder ablehnt) oder ablehnt, wenn die Anfrage abgebrochen wird.

Die `mode`-Eigenschaft des `options`-Parameters kann entweder `"exclusive"` oder `"shared"` sein.

Fordern Sie einen `"exclusive"`-Lock an, wenn er nur von einer Codeinstanz gleichzeitig gehalten werden soll. Dies gilt für Code sowohl in Tabs als auch in Workern. Verwenden Sie dies, um gegenseitig ausschließenden Zugriff auf eine Ressource darzustellen. Wenn ein `"exclusive"`-Lock für einen bestimmten Namen gehalten wird, kann kein anderer Lock mit demselben Namen gehalten werden.

Fordern Sie einen `"shared"`-Lock an, wenn mehrere Instanzen des Codes auf eine Ressource zugreifen können. Wenn ein `"shared"`-Lock für einen bestimmten Namen gehalten wird, können andere `"shared"`-Locks mit demselben Namen gewährt werden, aber keine `"exclusive"`-Locks mit diesem Namen können gehalten oder gewährt werden.

Dieses geteilte/exklusive Lock-Muster ist häufig in der Datenbank-Transaktionsarchitektur verbreitet, zum Beispiel um mehrere gleichzeitige Leser zu ermöglichen (jeder fordert einen `"shared"`-Lock an), aber nur einen einzigen Schreiber (ein einzelner `"exclusive"`-Lock). Dies ist als das Leser-Schreiber-Muster bekannt. In der [IndexedDB API](/de/docs/Web/API/IndexedDB_API) wird dies als `"readonly"` und `"readwrite"` Transaktionen dargestellt, die die gleichen Semantiken haben.

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

      - : Wenn `true`, wird die Lock-Anfrage nur gewährt, wenn sie nicht bereits gehalten wird. Wenn sie nicht gewährt werden kann, wird der Callback mit `null` anstelle einer `Lock`-Instanz aufgerufen. Der Standardwert ist `false`.

    - `steal` {{optional_inline}}

      - : Wenn `true`, werden alle gehaltenen Locks mit demselben Namen freigegeben, und die Anfrage wird gewährt, wobei alle in der Warteschlange befindlichen Anfragen für sie ersetzt werden. Der Standardwert ist `false`.

        > [!WARNING]
        > Mit Vorsicht verwenden! Code, der zuvor innerhalb des Locks ausgeführt wurde, läuft weiter und kann mit dem Code in Konflikt geraten, der jetzt das Lock hält.

    - `signal` {{optional_inline}}
      - : Ein [`AbortSignal`](/de/docs/Web/API/AbortSignal) (die [`signal`](/de/docs/Web/API/AbortController/signal) Eigenschaft eines [`AbortController`](/de/docs/Web/API/AbortController)); wenn angegeben und der [`AbortController`](/de/docs/Web/API/AbortController) wird abgebrochen, wird die Lock-Anfrage abgebrochen, wenn sie noch nicht gewährt wurde.

- `callback`
  - : Methode, die aufgerufen wird, wenn das Lock gewährt wird. Das Lock wird automatisch freigegeben, wenn der Callback zurückkehrt (oder eine Ausnahme ausgelöst wird). In der Regel ist der Callback eine asynchrone Funktion, die dazu führt, dass der Lock erst freigegeben wird, wenn die asynchrone Funktion vollständig abgeschlossen ist.

### Rückgabewert

Ein {{jsxref('Promise')}} das auflöst (oder ablehnt) mit dem Ergebnis des Callbacks nach Freigabe des Locks oder ablehnt, wenn die Anfrage abgebrochen wird.

### Ausnahmen

Diese Methode kann ein Promise zurückgeben, das mit einer [`DOMException`](/de/docs/Web/API/DOMException) einer der folgenden Arten abgelehnt wird:

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das Dokument der Umgebung nicht vollständig aktiv ist.
- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn für die aktuelle Umgebung kein Lock-Manager abgerufen werden kann.
- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn `name` mit einem Bindestrich (`-`) beginnt, sowohl die Optionen `steal` als auch `ifAvailable` `true` sind oder wenn die Option `signal` existiert und _entweder_ die Option `steal` oder `ifAvailable` `true` ist.
- `AbortError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Option `signal` existiert und abgebrochen wird.

## Beispiele

### Allgemeines Beispiel

Das folgende Beispiel zeigt die grundlegende Verwendung der `request()` Methode mit einer asynchronen Funktion als Callback. Sobald der Callback aufgerufen wird, kann kein anderer laufender Code auf diesem Ursprung `my_resource` halten, bis der Callback zurückkehrt.

```js
await navigator.locks.request("my_resource", async (lock) => {
  // The lock was granted.
});
```

### `mode` Beispiel

Das folgende Beispiel zeigt, wie die `mode`-Option für Leser und Schreiber verwendet wird.

Beachtrichten, dass beide Funktionen ein Lock namens `my_resource` verwenden.
Die `do_read()` fordert ein Lock im `'shared'` Modus an, was bedeutet, dass mehrere Anrufe gleichzeitig über verschiedene Event-Handler, Tabs oder Worker erfolgen können.

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

Die `do_write()`-Funktion verwendet dasselbe Lock, jedoch im `'exclusive'` Modus, was die Ausführung des `request()`-Aufrufs in `do_read()` verzögert, bis der Schreibvorgang abgeschlossen ist. Dies gilt für Event-Handler, Tabs oder Worker.

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

Um ein Lock nur zu erhalten, wenn es noch nicht gehalten wird, verwenden Sie die `ifAvailable`-Option. In dieser Funktion bedeutet `await`, dass die Methode nicht zurückkehrt, bis der Callback abgeschlossen ist. Da der Lock nur gewährt wird, wenn er verfügbar war, vermeidet dieser Aufruf das Warten auf die Freigabe des Locks an anderer Stelle.

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
