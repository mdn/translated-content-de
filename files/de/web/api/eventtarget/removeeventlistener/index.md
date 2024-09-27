---
title: "EventTarget: removeEventListener() Methode"
short-title: removeEventListener()
slug: Web/API/EventTarget/removeEventListener
l10n:
  sourceCommit: d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

Die **`removeEventListener()`**-Methode des [`EventTarget`](/de/docs/Web/API/EventTarget)-Interfaces entfernt einen zuvor mit [`EventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) registrierten Ereignis-Listener vom Ziel. Der zu entfernende Ereignis-Listener wird durch eine Kombination aus Ereignistyp, der Ereignis-Listener-Funktion selbst und verschiedenen optionalen Optionen identifiziert, die den Abgleichprozess beeinflussen können; siehe [Abgleich von Ereignis-Listenern zur Entfernung](#abgleich_von_ereignis-listenern_zur_entfernung).

Der Aufruf von `removeEventListener()` mit Argumenten, die keinen derzeit registrierten [Ereignis-Listener](/de/docs/Web/API/EventTarget/addEventListener#the_event_listener_callback) auf dem `EventTarget` identifizieren, hat keine Wirkung.

Wenn ein [Ereignis-Listener](/de/docs/Web/API/EventTarget/addEventListener#the_event_listener_callback) von einem [`EventTarget`](/de/docs/Web/API/EventTarget) entfernt wird, während ein anderer Listener des Ziels ein Ereignis verarbeitet, wird er nicht durch das Ereignis ausgelöst. Er kann jedoch wieder angefügt werden.

> [!WARNING]
> Wenn ein Listener zweimal registriert ist, einmal mit gesetztem _capture_-Flag und einmal ohne, müssen Sie jeden separat entfernen. Die Entfernung eines Capturing-Listeners betrifft nicht die nicht-capturing Version desselben Listeners und umgekehrt.

Ereignis-Listener können auch entfernt werden, indem ein [`AbortSignal`](/de/docs/Web/API/AbortSignal) an ein [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) übergeben und dann später [`abort()`](/de/docs/Web/API/AbortController/abort) an dem Controller des Signals aufgerufen wird.

## Syntax

```js-nolint
removeEventListener(type, listener)
removeEventListener(type, listener, options)
removeEventListener(type, listener, useCapture)
```

### Parameter

- `type`
  - : Ein String, der den Typ des Ereignisses angibt, für das ein Ereignis-Listener entfernt werden soll.
- `listener`
  - : Die [Ereignis-Listener](/de/docs/Web/API/EventTarget/addEventListener#the_event_listener_callback)-Funktion des Ereignishandlers, der vom Ereignisziel entfernt werden soll.
- `options` {{optional_inline}}

  - : Ein Optionsobjekt, das Merkmale des Ereignis-Listeners angibt.

    Die verfügbaren Optionen sind:

    - `capture`: Ein boolescher Wert, der angibt, ob der zu entfernende [Ereignis-Listener](/de/docs/Web/API/EventTarget/addEventListener#the_event_listener_callback) als Capturing-Listener registriert ist oder nicht. Wenn dieser Parameter fehlt, wird der Standardwert `false` angenommen.

- `useCapture` {{optional_inline}}
  - : Ein boolescher Wert, der angibt, ob der zu entfernende [Ereignis-Listener](/de/docs/Web/API/EventTarget/addEventListener#the_event_listener_callback) als Capturing-Listener registriert ist oder nicht. Wenn dieser Parameter fehlt, wird der Standardwert `false` angenommen.

### Rückgabewert

Keiner.

### Abgleich von Ereignis-Listenern zur Entfernung

Wenn ein Ereignis-Listener zuvor durch Aufruf von [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) hinzugefügt wurde, kann es schließlich notwendig werden, ihn zu entfernen. Offensichtlich müssen Sie dieselben `type`- und `listener`-Parameter für `removeEventListener()` angeben. Aber was ist mit den Parametern `options` oder `useCapture`?

Während `addEventListener()` es Ihnen ermöglicht, denselben Listener mehr als einmal für denselben Typ hinzuzufügen, wenn die Optionen unterschiedlich sind, überprüft `removeEventListener()` nur die `capture`/`useCapture`-Flag. Ihr Wert muss übereinstimmen, damit `removeEventListener()` erfolgreich ist, andere Werte nicht.

Beispielsweise betrachten Sie diesen Aufruf von `addEventListener()`:

```js
element.addEventListener("mousedown", handleMouseDown, true);
```

Betrachten Sie nun diese beiden Aufrufe von `removeEventListener()`:

```js
element.removeEventListener("mousedown", handleMouseDown, false); // Fails
element.removeEventListener("mousedown", handleMouseDown, true); // Succeeds
```

Der erste Aufruf schlägt fehl, weil der Wert von `useCapture` nicht übereinstimmt. Der zweite ist erfolgreich, da `useCapture` übereinstimmt.

Betrachten Sie nun dies:

```js
element.addEventListener("mousedown", handleMouseDown, { passive: true });
```

Hier geben wir ein `options`-Objekt an, in dem `passive` auf `true` gesetzt ist, während die anderen Optionen auf den Standardwert `false` gesetzt sind.

Betrachten Sie nun jeweils diese Aufrufe von `removeEventListener()`. Jeder von ihnen, bei dem `capture` oder `useCapture` `true` ist, schlägt fehl; alle anderen sind erfolgreich.

Nur die `capture`-Einstellung ist für `removeEventListener()` von Bedeutung.

```js
element.removeEventListener("mousedown", handleMouseDown, { passive: true }); // Succeeds
element.removeEventListener("mousedown", handleMouseDown, { capture: false }); // Succeeds
element.removeEventListener("mousedown", handleMouseDown, { capture: true }); // Fails
element.removeEventListener("mousedown", handleMouseDown, { passive: false }); // Succeeds
element.removeEventListener("mousedown", handleMouseDown, false); // Succeeds
element.removeEventListener("mousedown", handleMouseDown, true); // Fails
```

Es ist erwähnenswert, dass einige Browser-Versionen hierbei inkonsistent waren. Sofern Sie keinen spezifischen Grund haben, sollten Sie wahrscheinlich dieselben Werte verwenden, die für den Aufruf von `addEventListener()` verwendet wurden, wenn Sie `removeEventListener()` aufrufen.

## Beispiel

Dieses Beispiel zeigt, wie ein `mouseover`-basierter Ereignis-Listener hinzugefügt wird, der einen `click`-basierten Ereignis-Listener entfernt.

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
