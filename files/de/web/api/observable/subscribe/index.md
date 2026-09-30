---
title: "Observable: Methode subscribe()"
short-title: subscribe()
slug: Web/API/Observable/subscribe
l10n:
  sourceCommit: bacd00c353f643d8f5be0ce769015b1a66b4251a
---

{{APIRef("Observable API")}}{{SeeCompatTable}}

Die Methode **`subscribe()`** des [`Observable`](/de/docs/Web/API/Observable)-Interfaces abonniert das Observable. Über Observer-Callbacks empfängt sie dessen Werte, Fehler und die Benachrichtigung über den Abschluss.

## Syntax

```js-nolint
subscribe()
subscribe(observer)
subscribe(observer, options)
```

### Parameter

- `observer` {{optional_inline}}
  - : Ein Objekt, das eine oder mehrere der folgenden Callback-Funktionen enthält:
    - `next` {{optional_inline}}
      - : Eine Funktion, die mit jedem vom Observable ausgegebenen Wert aufgerufen wird.
    - `error` {{optional_inline}}
      - : Eine Funktion, die mit dem Fehler aufgerufen wird, wenn im Observable ein Fehler auftritt. Fehlt sie, wird der Fehler an das globale Objekt gemeldet.
    - `complete` {{optional_inline}}
      - : Eine Funktion, die ohne Argumente aufgerufen wird, wenn das Observable abgeschlossen ist. Beim Abbestellen wird dieser Callback nicht aufgerufen.

    Alternativ kann `observer` eine Funktion sein. Dies entspricht der Übergabe eines Objekts mit dieser Funktion als `next`-Callback. Die Rückgabewerte aller Callbacks werden ignoriert.

- `options` {{optional_inline}}
  - : Ein Optionsobjekt mit der folgenden Eigenschaft:
    - `signal` {{optional_inline}}
      - : Ein [`AbortSignal`](/de/docs/Web/API/AbortSignal), mit dem dieser Observer abbestellt werden kann. Wurde das Signal bereits abgebrochen, erhält der Observer keine Benachrichtigungen. Siehe [Ein Observable abbestellen](/de/docs/Web/API/Observable_API/Using_observables#unsubscribing_from_an_observable).

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beschreibung

Ein Aufruf von `subscribe()` startet sofort ein Abonnement. Werte können synchron übermittelt werden, noch bevor `subscribe()` zurückkehrt. Mehrere Observer teilen sich den aktiven [`Subscriber`](/de/docs/Web/API/Subscriber) des Observables. Wird ein Observer abbestellt, bleiben die anderen abonniert.

> [!NOTE]
> Dieses Verhalten bei gemeinsam genutzten Abonnements könnte sich ändern. Ein [Vorschlag, jedem Observer einen eigenen `Subscriber` zuzuweisen](https://github.com/WICG/observable/issues/217), würde bewirken, dass jedes Abonnement eine separate Ausführung startet, statt ein aktives Abonnement wiederzuverwenden.

Die Callbacks des Observers erhalten Benachrichtigungen vom Produzenten. Sie definieren oder ersetzen nicht die `Subscriber`-Methoden des Produzenten. Ein Fehler oder ein Abschluss beendet das Abonnement, sodass der Observer danach keine weiteren Werte erhält.

Löst ein Observer-Callback eine Ausnahme aus, wird diese an das globale Objekt gemeldet, ohne das Abonnement zu beenden oder den `error`-Callback des Observers aufzurufen. Auf zurückgegebene Promises wird nicht gewartet, und ihre Ablehnungen werden von `subscribe()` nicht behandelt.

## Beispiele

### Werte und Abschluss empfangen

Dieses Beispiel zeigt die Koordinaten der ersten drei Klicks auf eine Schaltfläche und anschließend eine Abschlussmeldung an. Der `next`-Callback des Observers verarbeitet jeden Wert, und sein `complete`-Callback verarbeitet das Ende des Datenstroms. Klicken Sie auf „Restart“, um es nach dem Abschluss erneut zu versuchen.

```html hidden live-sample___basic-subscribe
<button>Click me</button>
<p>Waiting for clicks</p>
<button id="restart" disabled>Restart</button>
```

```js live-sample___basic-subscribe
const btn = document.querySelector("button");
const output = document.querySelector("p");
const restart = document.querySelector("#restart");

function start() {
  restart.disabled = true;
  output.textContent = "Waiting for clicks";
  btn
    .when("click")
    .take(3)
    .subscribe({
      next(event) {
        output.textContent = `${event.clientX},${event.clientY}`;
      },
      complete() {
        restart.disabled = false;
        output.textContent += " — Complete.";
      },
    });
}

restart.when("click").subscribe(start);
start();
```

{{EmbedLiveSample("basic-subscribe", "", 140)}}

### Abbestellen

Dieses Beispiel zeigt Mauskoordinaten an, bis auf die Schaltfläche „Stop“ geklickt wird. Das Abbrechen entfernt den Observer, ohne einen Abschluss-Callback aufzurufen. Klicken Sie auf „Restart“, um ihn erneut zu abonnieren.

```html hidden live-sample___unsubscribe
<button>Stop</button>
<p>Move the mouse</p>
<button id="restart" disabled>Restart</button>
```

```js live-sample___unsubscribe
const btn = document.querySelector("button");
const output = document.querySelector("p");
const restart = document.querySelector("#restart");

function start() {
  restart.disabled = true;
  output.textContent = "Move the mouse";
  const controller = new AbortController();

  document.body.when("mousemove").subscribe(
    (event) => {
      output.textContent = `${event.clientX},${event.clientY}`;
    },
    { signal: controller.signal },
  );

  btn
    .when("click")
    .take(1)
    .subscribe(() => {
      controller.abort();
      output.textContent += " — Stopped";
      restart.disabled = false;
    });
}

restart.when("click").subscribe(start);
start();
```

{{EmbedLiveSample("unsubscribe", "", 140)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Observables verwenden](/de/docs/Web/API/Observable_API/Using_observables)
- [Erläuterung zu Observable](https://github.com/WICG/observable/blob/master/README.md)
