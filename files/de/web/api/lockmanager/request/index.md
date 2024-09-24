---
title: "LockManager: request() Methode"
short-title: request()
slug: Web/API/LockManager/request
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("Web Locks API")}}{{securecontext_header}} {{AvailableInWorkers}}

Die **`request()`** Methode der {{domxref("LockManager")}} Schnittstelle fordert ein {{domxref('Lock')}} Objekt mit Parametern an, die seinen Namen und seine Eigenschaften spezifizieren.
Das angeforderte `Lock` wird an einen Callback übergeben, während die Funktion selbst ein {{jsxref('Promise')}} zurückgibt, das mit dem Ergebnis des Callbacks aufgelöst (oder abgelehnt) wird, nachdem das Lock freigegeben wurde. Es wird abgelehnt, wenn die Anfrage abgebrochen wird.

Die Eigenschaft `mode` des Parameters `options` kann entweder `"exclusive"` oder `"shared"` sein.

Fordern Sie ein `"exclusive"` Lock an, wenn es nur von einer Code-Instanz gleichzeitig gehalten werden soll.
Dies gilt sowohl für Code in Tabs als auch für Worker. Verwenden Sie dies, um den wechselseitigen Ausschlusszugriff auf eine Ressource darzustellen.
Wenn ein `"exclusive"` Lock für einen bestimmten Namen gehalten wird, kann kein anderes Lock mit demselben Namen gehalten werden.

Fordern Sie ein `"shared"` Lock an, wenn mehrere Instanzen des Codes gemeinsam Zugriff auf eine Ressource haben können.
Wenn ein `"shared"` Lock für einen bestimmten Namen gehalten wird, können andere `"shared"` Locks für denselben Namen gewährt werden, aber keine `"exclusive"` Locks mit diesem Namen können gehalten oder gewährt werden.

Dieses geteilte/exklusive Lock-Muster ist gängig in Datenbanktransaktionsarchitekturen, beispielsweise zu erlauben, dass mehrere gleichzeitige Leser (jede Anforderung ein `"shared"` Lock) aber nur ein Schreiber (ein einzelnes `"exclusive"` Lock) vorhanden sind.
Dies wird als Leser-Schreiber-Muster bezeichnet.
Im [IndexedDB API](/de/docs/Web/API/IndexedDB_API) wird dies als `"readonly"` und `"readwrite"` Transaktionen dargestellt, die dieselben Semantiken haben.

## Syntax

```js-nolint
request(name, callback)
request(name, options, callback)
```

### Parameter

- `name`

  - : Ein Bezeichner für das Lock, das Sie anfordern möchten.

- `options` {{optional_inline}}

  - : Ein Objekt, das die Eigenschaften des Locks, das Sie erstellen möchten, beschreibt.
    Gültige Werte sind:

    - `mode` {{optional_inline}}

      - : Entweder `"exclusive"` oder `"shared"`.
        Der Standardwert ist `"exclusive"`.

    - `ifAvailable` {{optional_inline}}

      - : Wenn `true`, wird die Lock-Anfrage nur gewährt, wenn es nicht bereits gehalten wird.
        Wenn es nicht gewährt werden kann, wird der Callback mit `null` anstelle einer `Lock` Instanz aufgerufen.
        Der Standardwert ist `false`.

    - `steal` {{optional_inline}}

      - : Wenn `true`, werden alle gehaltenen Locks mit demselben Namen freigegeben, und die Anfrage wird gewährt, wodurch alle angeforderten Anfragen dafür vorgezogen werden.
        Der Standardwert ist `false`.

        > [!WARNING]
        > Vorsicht bei der Anwendung!
        > Code, der zuvor innerhalb des Locks lief, läuft weiter und kann mit dem Code kollidieren, der nun das Lock hält.

    - `signal` {{optional_inline}}
      - : Ein {{domxref("AbortSignal")}} (die {{domxref("AbortController.signal", "signal")}} Eigenschaft eines {{domxref("AbortController")}});
        wenn angegeben und der {{domxref("AbortController")}} abgebrochen wird, wird die Lock-Anfrage fallen gelassen, wenn sie noch nicht gewährt wurde.

- `callback`
  - : Methode, die aufgerufen wird, wenn das Lock gewährt wird.
    Das Lock wird automatisch freigegeben, wenn der Callback zurückkehrt (oder eine Ausnahme ausgelöst wird).
    In der Regel ist der Callback eine asynchrone Funktion, die dazu führt, dass das Lock erst freigegeben wird, wenn die asynchrone Funktion vollständig abgeschlossen ist.

### Rückgabewert

Ein {{jsxref('Promise')}}, das mit dem Ergebnis des Callbacks aufgelöst wird (oder abgelehnt), nachdem das Lock freigegeben wurde, oder abgelehnt, wenn die Anfrage abgebrochen wird.

### Ausnahmen

Diese Methode kann ein Promise zurückgeben, das mit einem {{domxref("DOMException")}} der folgenden Typen abgelehnt wird:

- `InvalidStateError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn das Dokument der Umgebung nicht vollständig aktiv ist.
- `SecurityError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn ein Lock-Manager für die aktuelle Umgebung nicht bezogen werden kann.
- `NotSupportedError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn `name` mit einem Bindestrich (`-`) beginnt, beide Optionen `steal` und `ifAvailable` `true` sind, oder wenn die Option `signal` existiert und _entweder_ Option `steal` oder `ifAvailable` `true` ist.
- `AbortError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn die Option `signal` existiert und abgebrochen wird.

## Beispiele

### Allgemeines Beispiel

Das folgende Beispiel zeigt die grundlegende Verwendung der `request()` Methode mit einer asynchronen Funktion als Callback.
Sobald der Callback aufgerufen wird, kann kein anderer laufender Code in diesem Ursprung `my_resource` halten, bis der Callback zurückkehrt.

```js
await navigator.locks.request("my_resource", async (lock) => {
  // The lock was granted.
});
```

### Beispiel `mode`

Das folgende Beispiel zeigt, wie man die `mode`-Option für Leser und Schreiber verwendet.

Beachten Sie, dass beide Funktionen ein Lock namens `my_resource` verwenden.
Die `do_read()` fordert ein Lock im `'shared'` Modus an, was bedeutet, dass mehrere Aufrufe gleichzeitig in verschiedenen Ereignis-Handlern, Tabs oder Workern auftreten können.

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

Die Funktion `do_write()` verwendet dasselbe Lock, jedoch im `'exclusive'` Modus, was den Aufruf der `request()` Funktion in `do_read()` verzögern wird, bis die Schreiboperation abgeschlossen ist.
Dies gilt über Event-Handler, Tabs oder Worker hinweg.

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

### Beispiel `ifAvailable`

Um ein Lock nur dann zu ergreifen, wenn es nicht bereits gehalten wird, verwenden Sie die Option `ifAvailable`.
In dieser Funktion bedeutet `await`, dass die Methode erst zurückkehrt, wenn der Callback vollständig ist.
Da das Lock nur gewährt wird, wenn es verfügbar war, vermeidet dieser Aufruf, warten zu müssen, bis das Lock an anderer Stelle freigegeben wird.

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

### Beispiel `signal`

Um nur für kurze Zeit auf ein Lock zu warten, verwenden Sie die `signal` Option.

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
