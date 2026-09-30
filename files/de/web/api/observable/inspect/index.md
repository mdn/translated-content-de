---
title: "Observable: Methode inspect()"
short-title: inspect()
slug: Web/API/Observable/inspect
l10n:
  sourceCommit: bacd00c353f643d8f5be0ce769015b1a66b4251a
---

{{APIRef("Observable API")}}{{SeeCompatTable}}

Die Methode **`inspect()`** der Schnittstelle [`Observable`](/de/docs/Web/API/Observable) gibt ein neues Observable zurück, das das Quell-Observable widerspiegelt und Callback-Funktionen aufruft, um dessen Werte und den Lebenszyklus des Abonnements zu untersuchen.

## Syntax

```js-nolint
inspect()
inspect(inspector)
```

### Parameter

- `inspector` {{optional_inline}}
  - : Ein Objekt, das eine oder mehrere der folgenden Callback-Funktionen enthält:
    - `next` {{optional_inline}}
      - : Eine Funktion, die mit jedem Wert der Quelle aufgerufen wird, bevor dieser an die Beobachter weitergeleitet wird.
    - `error` {{optional_inline}}
      - : Eine Funktion, die mit dem Fehler der Quelle aufgerufen wird, bevor dieser an die Beobachter weitergeleitet wird.
    - `complete` {{optional_inline}}
      - : Eine Funktion, die ohne Argumente aufgerufen wird, wenn die Quelle abgeschlossen ist, bevor der Abschluss an die Beobachter weitergeleitet wird.
    - `subscribe` {{optional_inline}}
      - : Eine Funktion, die ohne Argumente aufgerufen wird, wenn das Abonnement des zurückgegebenen Observables beginnt, bevor es das Quell-Observable abonniert.
    - `abort` {{optional_inline}}
      - : Eine Funktion, die mit dem Grund für den Abbruch aufgerufen wird, wenn sich alle Beobachter vom zurückgegebenen Observable abmelden. Sie wird nicht aufgerufen, wenn die Quelle abgeschlossen ist oder einen Fehler meldet.

    Alternativ kann `inspector` eine Funktion sein. Dies entspricht der Übergabe eines Objekts, dessen `next`-Callback diese Funktion ist. Die Rückgabewerte aller Callback-Funktionen werden ignoriert.

### Rückgabewert

Ein neues [`Observable`](/de/docs/Web/API/Observable). Wenn es abonniert wird, gibt es die Werte des Quell-Observables aus und leitet dessen Abschluss oder Fehler weiter. Vor jeder Weiterleitung ruft es die entsprechende Callback-Funktion von `inspector` auf.

## Beschreibung

Wie andere Operatoren, die ein Observable zurückgeben, arbeitet diese Methode verzögert: Ihr Aufruf erstellt ein neues Observable, ohne das Quell-Observable zu abonnieren. Die Verarbeitung beginnt, wenn das zurückgegebene Observable abonniert wird.

Wenn eine der Callback-Funktionen `subscribe`, `next`, `error` oder `complete` eine Ausnahme auslöst, meldet das zurückgegebene Observable diese Ausnahme als Fehler. Eine von `subscribe` ausgelöste Ausnahme verhindert das Abonnement der Quelle. Eine von `abort` ausgelöste Ausnahme wird an das globale Objekt gemeldet.

Die Callback-Funktionen werden synchron ausgeführt. Auf zurückgegebene Promises wird nicht gewartet, und ihre Ablehnungen werden von `inspect()` nicht behandelt.

## Beispiele

### inspect() verwenden

Dieses Beispiel zählt die ersten drei Klicks auf eine Schaltfläche. Die Callback-Funktionen von `inspect()` protokollieren den Beginn des Abonnements, jedes Ereignis vor der Aktualisierung des Zählers und den endgültigen Zählerstand beim Abschluss des Abonnements. Klicken Sie nach dem Ende des Streams auf „Restart“, um es erneut zu versuchen.

```html hidden live-sample___basic-inspect
<button>Click me</button>
<p>Click count: 0</p>
<button id="restart" disabled>Restart</button>
```

```js live-sample___basic-inspect
const btn = document.querySelector("button");
const para = document.querySelector("p");

let countValue = 0;

function increment() {
  countValue++;
  para.textContent = `Click count: ${countValue}`;
}

const restart = document.querySelector("#restart");

function start() {
  restart.disabled = true;
  countValue = 0;
  para.textContent = "Click count: 0";
  btn
    .when("click")
    .take(3)
    .inspect({
      subscribe() {
        console.log(`Subscription started`);
      },
      next(e) {
        console.log(`Count value before click: ${countValue}`);
        console.log(`Event type: ${e.type}`);
      },
      complete() {
        console.log(`Final count value: ${countValue}`);
      },
    })
    .subscribe({
      next: increment,
      complete() {
        para.textContent = `No more clicks!`;
        restart.disabled = false;
      },
    });
}

restart.when("click").subscribe(start);
start();
```

Öffnen Sie die Konsole des Browsers und klicken Sie dreimal auf die Schaltfläche, um die protokollierten Benachrichtigungen zu sehen.

{{EmbedLiveSample("basic-inspect", "", 140)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Observables verwenden](/de/docs/Web/API/Observable_API/Using_observables)
- [Erläuterung zu Observable](https://github.com/WICG/observable/blob/master/README.md)
