---
title: "Observable: Methode finally()"
short-title: finally()
slug: Web/API/Observable/finally
l10n:
  sourceCommit: bacd00c353f643d8f5be0ce769015b1a66b4251a
---

{{APIRef("Observable API")}}{{SeeCompatTable}}

Die Methode **`finally()`** des Interfaces [`Observable`](/de/docs/Web/API/Observable) gibt ein neues Observable zurück, das das Quell-Observable widerspiegelt und einen Callback aufruft, wenn dessen Subscription endet.

## Syntax

```js-nolint
finally(callback)
```

### Parameter

- `callback`
  - : Eine Funktion, die ausgeführt wird, wenn die Subscription durch Abschluss, einen Fehler oder das Abmelden aller Observer endet. Die Funktion wird ohne Argumente aufgerufen. Ihr Rückgabewert wird ignoriert.

### Rückgabewert

Ein neues [`Observable`](/de/docs/Web/API/Observable). Wird es abonniert, gibt es die Werte des Quell-Observables aus und leitet dessen Abschluss oder Fehler weiter. Wenn die Subscription endet, wird `callback` ausgeführt.

## Beschreibung

Wie andere Operatoren, die ein Observable zurückgeben, arbeitet diese Methode verzögert: Ihr Aufruf erstellt ein neues Observable, ohne das Quell-Observable zu abonnieren. Die Verarbeitung beginnt, wenn das zurückgegebene Observable abonniert wird.

Der Callback wird als Teardown beim [`Subscriber`](/de/docs/Web/API/Subscriber) des zurückgegebenen Observables registriert. Er wird synchron vor den Abschluss- oder Fehler-Callbacks der Observer ausgeführt und auch dann, wenn sich alle Observer abmelden. Einzelheiten zum Teardown-Verhalten finden Sie unter [`Subscriber.addTeardown()`](/de/docs/Web/API/Subscriber/addTeardown).

> [!NOTE]
> Dieses Verhalten mit einer gemeinsam genutzten Subscription könnte sich ändern. Ein [Vorschlag, jedem Observer einen eigenen `Subscriber` zu geben](https://github.com/WICG/observable/issues/217), würde dazu führen, dass jede Subscription eine separate Ausführung startet, statt eine aktive Subscription wiederzuverwenden.

Wenn `callback` eine Ausnahme auslöst, wird sie dem globalen Objekt gemeldet, ohne den Abschluss oder Fehler des Streams zu verändern. Auf ein zurückgegebenes Promise wird nicht gewartet, und dessen Ablehnung wird von `finally()` nicht behandelt.

## Beispiele

### finally() verwenden

Dieses Beispiel zeigt Mauskoordinaten an, bis auf die Schaltfläche „Stop“ geklickt wird. Der `finally()`-Callback fügt eine Nachricht hinzu, wenn die Ausgabe der Koordinaten endet. Klicken Sie nach dem Ende des Streams auf „Restart“, um es erneut zu versuchen.

```html hidden live-sample___basic-finally
<button>Stop</button>
<p>Move the mouse</p>
<button id="restart" disabled>Restart</button>
```

```css hidden live-sample___basic-finally
html {
  height: 100%;
}

body {
  box-sizing: border-box;
  min-height: 100%;
  margin: 0;
  padding: 8px;
}
```

```js live-sample___basic-finally
const btn = document.querySelector("button");
const output = document.querySelector("p");

const restart = document.querySelector("#restart");

function start() {
  restart.disabled = true;
  output.textContent = "Move the mouse";
  document.body
    .when("mousemove")
    .takeUntil(btn.when("click"))
    .finally(() => {
      restart.disabled = false;
      output.textContent += " — Reporting stopped.";
    })
    .subscribe((event) => {
      output.textContent = `${event.clientX},${event.clientY}`;
    });
}

restart.when("click").subscribe(start);
start();
```

{{EmbedLiveSample("basic-finally", "", 140)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Observable.catch()`](/de/docs/Web/API/Observable/catch)
- [`Subscriber.addTeardown()`](/de/docs/Web/API/Subscriber/addTeardown)
- [Observables verwenden](/de/docs/Web/API/Observable_API/Using_observables)
- [Erläuterung zu Observable](https://github.com/WICG/observable/blob/master/README.md)
