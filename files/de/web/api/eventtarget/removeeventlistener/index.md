---
title: "EventTarget: Methode removeEventListener()"
short-title: removeEventListener()
slug: Web/API/EventTarget/removeEventListener
l10n:
  sourceCommit: 976891fb78ba24cb4ac6e58ae8a903b20eae4337
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

Die **`removeEventListener()`** Methode der [`EventTarget`](/de/docs/Web/API/EventTarget) Schnittstelle entfernt einen zuvor mit [`EventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) registrierten Ereignis-Listener vom Ziel. Der zu entfernende Event-Listener wird durch eine Kombination aus Event-Typ, der Event-Listener-Funktion selbst und verschiedenen optionalen Optionen, die den Abgleichprozess beeinflussen können, identifiziert; siehe [Abgleich von Event-Listenern zur Entfernung](#abgleich_von_event-listenern_zur_entfernung).

Ein Aufruf von `removeEventListener()` mit Argumenten, die keinen aktuell registrierten [Event-Listener](/de/docs/Web/API/EventTarget/addEventListener#the_event_listener_callback) auf dem `EventTarget` identifizieren, hat keine Auswirkung.

Wenn ein [Event-Listener](/de/docs/Web/API/EventTarget/addEventListener#the_event_listener_callback) von einem [`EventTarget`](/de/docs/Web/API/EventTarget) entfernt wird, während ein anderer Listener des Ziels ein Ereignis verarbeitet, wird er nicht durch das Ereignis ausgelöst. Allerdings kann er wieder angefügt werden.

> [!WARNING]
> Wenn ein Listener zweimal registriert wird, einmal mit gesetztem _capture_ Flag und einmal ohne, müssen Sie jeden separat entfernen. Die Entfernung eines Capture-Listeners hat keine Auswirkungen auf eine Nicht-Capture-Version desselben Listeners und umgekehrt.

Event-Listener können auch entfernt werden, indem ein [`AbortSignal`](/de/docs/Web/API/AbortSignal) an [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) übergeben wird und anschließend [`abort()`](/de/docs/Web/API/AbortController/abort) auf dem Controller, der das Signal besitzt, aufgerufen wird.

## Syntax

```js-nolint
removeEventListener(type, listener)
removeEventListener(type, listener, options)
removeEventListener(type, listener, useCapture)
```

### Parameter

- `type`
  - : Ein String, der den Typ des Ereignisses angibt, für das ein Event-Listener entfernt werden soll.
- `listener`
  - : Die [Event-Listener](/de/docs/Web/API/EventTarget/addEventListener#the_event_listener_callback) Funktion des Event-Handlers, der vom
    Event-Target entfernt werden soll.
- `options` {{optional_inline}}
  - : Ein Optionsobjekt, das Eigenschaften über den Event-Listener angibt.

    Die verfügbaren Optionen sind:
    - `capture`: Ein boolescher Wert, der angibt, ob der [Event-Listener](/de/docs/Web/API/EventTarget/addEventListener#the_event_listener_callback), der entfernt werden soll, als Capturing-Listener registriert ist oder nicht. Wird dieser Parameter nicht übergeben, wird der Standardwert `false` angenommen.

- `useCapture` {{optional_inline}}
  - : Ein boolescher Wert, der angibt, ob der [Event-Listener](/de/docs/Web/API/EventTarget/addEventListener#the_event_listener_callback), der entfernt werden soll, als Capturing-Listener registriert ist oder nicht. Wird dieser Parameter nicht übergeben, wird der Standardwert `false` angenommen.

### Rückgabewert

Keiner.

### Abgleich von Event-Listenern zur Entfernung

Wenn ein Event-Listener zuvor durch den Aufruf von
[`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) hinzugefügt wurde, kann es irgendwann
notwendig werden, ihn zu entfernen. Offensichtlich müssen Sie die gleichen
`type` und `listener` Parameter an
`removeEventListener()` übergeben. Aber was ist mit den Parametern `options`
oder `useCapture`?

Während `addEventListener()` es erlaubt, denselben Listener mehr als einmal
für denselben Typ hinzuzufügen, wenn die Optionen unterschiedlich sind, überprüft
`removeEventListener()` nur die
`capture`/`useCapture`-Flag. Sein Wert muss
übereinstimmen, damit `removeEventListener()` übereinstimmt, aber die anderen Werte nicht.

Zum Beispiel, betrachten Sie diesen Aufruf von `addEventListener()`:

```js
element.addEventListener("mousedown", handleMouseDown, true);
```

Betrachten Sie nun jeden dieser zwei Aufrufe von `removeEventListener()`:

```js
element.removeEventListener("mousedown", handleMouseDown, false); // Fails
element.removeEventListener("mousedown", handleMouseDown, true); // Succeeds
```

Der erste Aufruf schlägt fehl, da der Wert von `useCapture` nicht übereinstimmt.
Der zweite ist erfolgreich, da `useCapture` übereinstimmt.

Betrachten Sie nun dies:

```js
element.addEventListener("mousedown", handleMouseDown, { passive: true });
```

Hier geben wir ein `options` Objekt an, in dem
`passive` auf `true` gesetzt ist, während die anderen Optionen auf den
Standardwert `false` gesetzt sind.

Sehen Sie sich nun jeden dieser Aufrufe von `removeEventListener()` der Reihe nach an. Jeder Aufruf, bei dem `capture` oder `useCapture`
`true` ist, schlägt fehl; alle anderen sind erfolgreich.

Nur die `capture`-Einstellung ist für `removeEventListener()` von Bedeutung.

```js
element.removeEventListener("mousedown", handleMouseDown, { passive: true }); // Succeeds
element.removeEventListener("mousedown", handleMouseDown, { capture: false }); // Succeeds
element.removeEventListener("mousedown", handleMouseDown, { capture: true }); // Fails
element.removeEventListener("mousedown", handleMouseDown, { passive: false }); // Succeeds
element.removeEventListener("mousedown", handleMouseDown, false); // Succeeds
element.removeEventListener("mousedown", handleMouseDown, true); // Fails
```

Es sei darauf hingewiesen, dass einige Browserversionen hier inkonsistent gewesen sind, und es sei geraten, die gleichen Werte wie beim
Aufruf von `addEventListener()` zu verwenden, wenn Sie
`removeEventListener()` aufrufen, es sei denn, Sie haben spezifische Gründe, es anders zu machen.

## Beispiel

Dieses Beispiel zeigt, wie man einen auf `mouseover` basierenden Event-Listener hinzufügt, der einen auf `click` basierenden Event-Listener entfernt.

```js
const body = document.querySelector("body");
const clickTarget = document.getElementById("click-target");
const mouseOverTarget = document.getElementById("mouse-over-target");

let toggle = false;
function makeBackgroundYellow() {
  body.style.backgroundColor = toggle ? "white" : "yellow";

  toggle = !toggle;
}

clickTarget.addEventListener("click", makeBackgroundYellow);

mouseOverTarget.addEventListener("mouseover", () => {
  clickTarget.removeEventListener("click", makeBackgroundYellow);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`EventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)
