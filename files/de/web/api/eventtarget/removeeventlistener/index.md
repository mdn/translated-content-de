---
title: "EventTarget: removeEventListener()-Methode"
short-title: removeEventListener()
slug: Web/API/EventTarget/removeEventListener
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

Die **`removeEventListener()`**-Methode des [`EventTarget`](/de/docs/Web/API/EventTarget)-Interfaces entfernt einen zuvor mit [`EventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) registrierten Event-Listener vom Ziel. Der zu entfernende Event-Listener wird durch eine Kombination aus dem Event-Typ, der Event-Listener-Funktion selbst und verschiedenen optionalen Optionen identifiziert, die den Zuordnungsprozess beeinflussen können; siehe [Zuordnen von Event-Listenern zur Entfernung](#zuordnen_von_event-listenern_zur_entfernung).

Ein Aufruf von `removeEventListener()` mit Argumenten, die keinen derzeit registrierten [Event-Listener](/de/docs/Web/API/EventTarget/addEventListener#the_event_listener_callback) auf dem `EventTarget` identifizieren, hat keine Auswirkung.

Wenn ein [Event-Listener](/de/docs/Web/API/EventTarget/addEventListener#the_event_listener_callback) von einem [`EventTarget`](/de/docs/Web/API/EventTarget) entfernt wird, während ein anderer Listener des Ziels ein Event verarbeitet, wird er durch das Event nicht ausgelöst. Er kann jedoch wieder angefügt werden.

> [!WARNING]
> Wenn ein Listener zweimal registriert wird, einmal mit gesetztem _capture_-Flag und einmal ohne, müssen Sie jeden separat entfernen. Das Entfernen eines Listener im Capture-Modus hat keine Auswirkungen auf die Nicht-Capture-Version desselben Listeners und umgekehrt.

Event-Listener können auch entfernt werden, indem ein [`AbortSignal`](/de/docs/Web/API/AbortSignal) an ein [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) übergeben und anschließend [`abort()`](/de/docs/Web/API/AbortController/abort) auf dem die Signal besitzenden Controller aufgerufen wird.

## Syntax

```js-nolint
removeEventListener(type, listener)
removeEventListener(type, listener, options)
removeEventListener(type, listener, useCapture)
```

### Parameter

- `type`
  - : Ein String, der den Typ des Events angibt, für das ein Event-Listener entfernt werden soll.
- `listener`
  - : Die [Event-Listener](/de/docs/Web/API/EventTarget/addEventListener#the_event_listener_callback)-Funktion des Event-Handlers, die vom Event-Ziel entfernt werden soll.
- `options` {{optional_inline}}

  - : Ein Optionen-Objekt, das Merkmale über den Event-Listener spezifiziert.

    Die verfügbaren Optionen sind:

    - `capture`: Ein Boolean-Wert, der angibt, ob der zu entfernende [Event-Listener](/de/docs/Web/API/EventTarget/addEventListener#the_event_listener_callback) als capturing Listener registriert ist oder nicht. Wenn dieser Parameter nicht vorhanden ist, wird der Standardwert `false` angenommen.

- `useCapture` {{optional_inline}}
  - : Ein Boolean-Wert, der angibt, ob der [Event-Listener](/de/docs/Web/API/EventTarget/addEventListener#the_event_listener_callback) als capturing Listener registriert ist oder nicht. Wenn dieser Parameter nicht vorhanden ist, wird der Standardwert `false` angenommen.

### Rückgabewert

Keiner.

### Zuordnen von Event-Listenern zur Entfernung

Angenommen, ein Event-Listener wurde zuvor durch Aufruf von [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) hinzugefügt, es kann irgendwann nötig werden, ihn zu entfernen. Offensichtlich müssen Sie dieselben `type`- und `listener`-Parameter für `removeEventListener()` angeben. Aber was ist mit den Parametern `options` oder `useCapture`?

Obwohl `addEventListener()` es Ihnen erlaubt, denselben Listener mehr als einmal für denselben Typ hinzuzufügen, wenn die Optionen unterschiedlich sind, überprüft `removeEventListener()` nur die `capture`/`useCapture`-Option. Deren Wert muss übereinstimmen, damit `removeEventListener()` erfolgreich ist, aber die anderen Werte sind unwichtig.

Betrachten Sie zum Beispiel diesen Aufruf von `addEventListener()`:

```js
element.addEventListener("mousedown", handleMouseDown, true);
```

Betrachten Sie dann jeden dieser beiden Aufrufe von `removeEventListener()`:

```js
element.removeEventListener("mousedown", handleMouseDown, false); // Fails
element.removeEventListener("mousedown", handleMouseDown, true); // Succeeds
```

Der erste Aufruf schlägt fehl, weil der Wert von `useCapture` nicht übereinstimmt. Der zweite ist erfolgreich, da `useCapture` übereinstimmt.

Betrachten Sie nun dies:

```js
element.addEventListener("mousedown", handleMouseDown, { passive: true });
```

Hier spezifizieren wir ein `options`-Objekt, in dem `passive` auf `true` gesetzt ist, während die anderen Optionen auf den Standardwert `false` gesetzt sind.

Schauen Sie sich nun die Aufrufe von `removeEventListener()` der Reihe nach an. Jeder Aufruf, bei dem `capture` oder `useCapture` auf `true` gesetzt ist, schlägt fehl; alle anderen sind erfolgreich.

Nur die Einstellung `capture` ist für `removeEventListener()` von Bedeutung.

```js
element.removeEventListener("mousedown", handleMouseDown, { passive: true }); // Succeeds
element.removeEventListener("mousedown", handleMouseDown, { capture: false }); // Succeeds
element.removeEventListener("mousedown", handleMouseDown, { capture: true }); // Fails
element.removeEventListener("mousedown", handleMouseDown, { passive: false }); // Succeeds
element.removeEventListener("mousedown", handleMouseDown, false); // Succeeds
element.removeEventListener("mousedown", handleMouseDown, true); // Fails
```

Es ist erwähnenswert, dass einige Browserversionen in dieser Hinsicht inkonsistent waren, und sofern Sie keinen spezifischen Grund haben, ist es wahrscheinlich sinnvoll, dieselben Werte zu verwenden, wie beim Aufruf von `addEventListener()`, wenn Sie `removeEventListener()` aufrufen.

## Beispiel

Dieses Beispiel zeigt, wie ein `mouseover`-basierter Event-Listener hinzugefügt wird, der einen `click`-basierten Event-Listener entfernt.

```js
const body = document.querySelector("body");
const clickTarget = document.getElementById("click-target");
const mouseOverTarget = document.getElementById("mouse-over-target");

let toggle = false;
function makeBackgroundYellow() {
  body.style.backgroundColor = toggle ? "white" : "yellow";

  toggle = !toggle;
}

clickTarget.addEventListener("click", makeBackgroundYellow, false);

mouseOverTarget.addEventListener("mouseover", () => {
  clickTarget.removeEventListener("click", makeBackgroundYellow, false);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`EventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)
