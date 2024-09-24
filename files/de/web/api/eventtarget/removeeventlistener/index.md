---
title: "EventTarget: removeEventListener() Methode"
short-title: removeEventListener()
slug: Web/API/EventTarget/removeEventListener
l10n:
  sourceCommit: d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

Die **`removeEventListener()`** Methode der {{domxref("EventTarget")}} Schnittstelle entfernt einen zuvor mit {{domxref("EventTarget.addEventListener()")}} registrierten Ereignis-Listener vom Ziel. Der zu entfernende Ereignis-Listener wird durch eine Kombination aus dem Ereignistyp, der Ereignis-Listener-Funktion selbst und verschiedenen optionalen Optionen, die den Zuordnungsprozess beeinflussen können, identifiziert; siehe [Zuordnung von Ereignis-Listenern zur Entfernung](#zuordnung_von_ereignis-listenern_zur_entfernung).

Ein Aufruf von `removeEventListener()` mit Argumenten, die keinen derzeit registrierten [Ereignis-Listener](/de/docs/Web/API/EventTarget/addEventListener#the_event_listener_callback) auf dem `EventTarget` identifizieren, hat keine Auswirkung.

Wenn ein [Ereignis-Listener](/de/docs/Web/API/EventTarget/addEventListener#the_event_listener_callback) von einem {{domxref("EventTarget")}} entfernt wird, während ein anderer Listener des Ziels ein Ereignis verarbeitet, wird er nicht vom Ereignis ausgelöst. Er kann jedoch wieder angehängt werden.

> [!WARNING]
> Wenn ein Listener zweimal registriert wird, einmal mit gesetztem _capture_-Flag und einmal ohne, müssen Sie jeden separat entfernen. Die Entfernung eines capturing-Listeners beeinflusst nicht eine nicht-capturing-Version desselben Listeners und umgekehrt.

Ereignis-Listener können auch entfernt werden, indem ein {{domxref("AbortSignal")}} an ein {{domxref("EventTarget/addEventListener()", "addEventListener()")}} übergeben und dann später {{domxref("AbortController/abort()", "abort()")}} auf dem Controller, der das Signal besitzt, aufgerufen wird.

## Syntax

```js-nolint
removeEventListener(type, listener)
removeEventListener(type, listener, options)
removeEventListener(type, listener, useCapture)
```

### Parameter

- `type`
  - : Ein String, der den Ereignistyp angibt, für den ein Ereignis-Listener entfernt werden soll.
- `listener`
  - : Die [Ereignis-Listener](/de/docs/Web/API/EventTarget/addEventListener#the_event_listener_callback) Funktion des Ereignis-Handlers, der vom Ereignisziel entfernt werden soll.
- `options` {{optional_inline}}

  - : Ein Optionsobjekt, das Charakteristika über den Ereignis-Listener spezifiziert.

    Die verfügbaren Optionen sind:

    - `capture`: Ein booleanischer Wert, der angibt, ob der [Ereignis-Listener](/de/docs/Web/API/EventTarget/addEventListener#the_event_listener_callback), der entfernt werden soll, als capturing-Listener registriert ist oder nicht. Wenn dieser Parameter fehlt, wird der Standardwert `false` angenommen.

- `useCapture` {{optional_inline}}
  - : Ein booleanischer Wert, der angibt, ob der [Ereignis-Listener](/de/docs/Web/API/EventTarget/addEventListener#the_event_listener_callback), der entfernt werden soll, als capturing-Listener registriert ist oder nicht. Wenn dieser Parameter fehlt, wird der Standardwert `false` angenommen.

### Rückgabewert

Keiner.

### Zuordnung von Ereignis-Listenern zur Entfernung

Wenn ein Ereignis-Listener zuvor durch einen Aufruf von {{domxref("EventTarget.addEventListener", "addEventListener()")}} hinzugefügt wurde, könnten Sie schließlich an einen Punkt kommen, an dem Sie ihn entfernen müssen. Offensichtlich müssen Sie dieselben `type`- und `listener`-Parameter für `removeEventListener()` angeben. Aber was ist mit den `options` oder `useCapture`-Parametern?

Obwohl `addEventListener()` es Ihnen ermöglicht, denselben Listener mehr als einmal für denselben Typ hinzuzufügen, wenn die Optionen unterschiedlich sind, überprüft `removeEventListener()` nur die `capture`/`useCapture`-Flag. Sein Wert muss übereinstimmen, damit `removeEventListener()` zugeordnet wird, aber die anderen Werte nicht.

Betrachten Sie zum Beispiel diesen Aufruf von `addEventListener()`:

```js
element.addEventListener("mousedown", handleMouseDown, true);
```

Betrachten Sie nun jeden dieser zwei Aufrufe von `removeEventListener()`:

```js
element.removeEventListener("mousedown", handleMouseDown, false); // Scheitert
element.removeEventListener("mousedown", handleMouseDown, true); // Erfolgreich
```

Der erste Aufruf scheitert, weil der Wert von `useCapture` nicht übereinstimmt. Der zweite ist erfolgreich, da `useCapture` übereinstimmt.

Betrachten Sie nun dies:

```js
element.addEventListener("mousedown", handleMouseDown, { passive: true });
```

Hier geben wir ein `options`-Objekt an, in dem `passive` auf `true` gesetzt ist, während die anderen Optionen auf den Standardwert `false` gelassen werden.

Betrachten Sie nun diese Aufrufe von `removeEventListener()` der Reihe nach. Jeder von ihnen, in dem `capture` oder `useCapture` `true` ist, scheitert; alle anderen sind erfolgreich.

Nur die `capture`-Einstellung ist für `removeEventListener()` relevant.

```js
element.removeEventListener("mousedown", handleMouseDown, { passive: true }); // Erfolgreich
element.removeEventListener("mousedown", handleMouseDown, { capture: false }); // Erfolgreich
element.removeEventListener("mousedown", handleMouseDown, { capture: true }); // Scheitert
element.removeEventListener("mousedown", handleMouseDown, { passive: false }); // Erfolgreich
element.removeEventListener("mousedown", handleMouseDown, false); // Erfolgreich
element.removeEventListener("mousedown", handleMouseDown, true); // Scheitert
```

Es ist erwähnenswert, dass einige Browser-Versionen in dieser Hinsicht inkonsistent gewesen sind, und wenn Sie keine spezifischen Gründe dagegen haben, ist es wahrscheinlich klug, dieselben Werte zu verwenden, die beim Aufruf von `addEventListener()` beim Aufrufen von `removeEventListener()` verwendet wurden.

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

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- {{domxref("EventTarget.addEventListener()")}}
