---
title: "Observable: Observable()-Konstruktor"
short-title: Observable()
slug: Web/API/Observable/Observable
l10n:
  sourceCommit: bacd00c353f643d8f5be0ce769015b1a66b4251a
---

{{APIRef("Observable API")}}{{SeeCompatTable}}

Der **`Observable()`**-Konstruktor erstellt ein neues [`Observable`](/de/docs/Web/API/Observable)-Objekt, dessen Werte und Lebenszyklus durch eine Callback-Funktion gesteuert werden.

## Syntax

```js-nolint
new Observable(callback)
```

### Parameter

- `callback`
  - : Eine Funktion, die mit der Erzeugung von Werten beginnt, sobald eine Subscription startet. Ihr Rückgabewert wird ignoriert. Die Funktion wird mit dem folgenden Argument aufgerufen:
    - `subscriber`
      - : Ein [`Subscriber`](/de/docs/Web/API/Subscriber), mit dem Werte über [`next()`](/de/docs/Web/API/Subscriber/next) gesendet, der Abschluss oder ein Fehler über [`complete()`](/de/docs/Web/API/Subscriber/complete) beziehungsweise [`error()`](/de/docs/Web/API/Subscriber/error) signalisiert und Bereinigungsaktionen über [`addTeardown()`](/de/docs/Web/API/Subscriber/addTeardown) registriert werden können.

### Rückgabewert

Ein neues [`Observable`](/de/docs/Web/API/Observable)-Objekt.

## Beschreibung

Der Konstruktor ruft `callback` nicht sofort auf. Die Funktion wird synchron ausgeführt, wenn sich der erste Observer anmeldet. Weitere Observer verwenden denselben [`Subscriber`](/de/docs/Web/API/Subscriber), bis dieser inaktiv wird. Bei einer späteren Anmeldung wird die Callback-Funktion mit einem neuen Subscriber erneut gestartet. Weitere Informationen zum Lebenszyklus einer Subscription finden Sie unter [Ein Observable erstellen](/de/docs/Web/API/Observable_API/Creating_observables#creating_an_observable).

> [!NOTE]
> Dieses Verhalten, bei dem sich Observer eine Subscription teilen, kann sich ändern. Ein [Vorschlag, jedem Observer einen eigenen `Subscriber` zu geben](https://github.com/WICG/observable/issues/217), würde dazu führen, dass jede Subscription eine separate Ausführung startet, statt eine aktive Subscription wiederzuverwenden.

Wenn `callback` eine Ausnahme auslöst, wird diese an `subscriber.error()` übergeben. Das von einer asynchronen Callback-Funktion zurückgegebene Promise wird ignoriert; eine Ablehnung wird daher nicht automatisch behandelt. Behandeln Sie asynchrone Fehler ausdrücklich und leiten Sie sie mit `subscriber.error()` weiter, solange der Subscriber aktiv ist.

## Beispiele

### Elementgröße beobachten

Dieses Beispiel meldet die Abmessungen eines Panels mit veränderbarer Größe. Dazu verwendet es ein benutzerdefiniertes Observable, das auf [`ResizeObserver`](/de/docs/Web/API/ResizeObserver) basiert. Ein Klick auf „Stop“ beendet die Subscription und trennt die Verbindung zum Observer. Klicken Sie auf „Restart“, um das Panel erneut zu beobachten. Eine ausführlichere Erklärung finden Sie unter [Elementgröße beobachten](/de/docs/Web/API/Observable_API/Creating_observables#example_observing_element_size).

```html hidden live-sample___constructor-resize
<div id="panel">Drag the corner to resize.</div>
<p></p>
<button>Stop</button>
<button id="restart" disabled>Restart</button>
```

```css hidden live-sample___constructor-resize
#panel {
  width: 200px;
  height: 100px;
  resize: both;
  overflow: auto;
  border: 1px solid;
}
```

```js live-sample___constructor-resize
const panel = document.querySelector("#panel");
const output = document.querySelector("p");
const btn = document.querySelector("button");

const sizes = new Observable((subscriber) => {
  const observer = new ResizeObserver(([entry]) => {
    subscriber.next(entry.contentRect);
  });
  observer.observe(panel);
  subscriber.addTeardown(() => observer.disconnect());
});

const restart = document.querySelector("#restart");

function start() {
  restart.disabled = true;
  sizes.takeUntil(btn.when("click")).subscribe({
    next({ width, height }) {
      output.textContent = `${Math.round(width)} × ${Math.round(height)} pixels`;
    },
    complete() {
      restart.disabled = false;
    },
  });
}

restart.when("click").subscribe(start);
start();
```

{{EmbedLiveSample("constructor-resize", "", 250)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Benutzerdefinierte Observables erstellen](/de/docs/Web/API/Observable_API/Creating_observables)
- [Erläuterung zu Observable](https://github.com/WICG/observable/blob/master/README.md)
