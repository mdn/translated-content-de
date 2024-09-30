---
title: "EventTarget: removeEventListener() Methode"
short-title: removeEventListener()
slug: Web/API/EventTarget/removeEventListener
l10n:
  sourceCommit: d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

Die **`removeEventListener()`** Methode des [`EventTarget`](/de/docs/Web/API/EventTarget)-Interfaces entfernt einen zuvor mit [`EventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) registrierten Ereignis-Listener vom Ziel. Der zu entfernende Ereignis-Listener wird durch eine Kombination des Ereignistyps, der Ereignis-Listener-Funktion selbst und verschiedener optionaler Optionen identifiziert, die den Abgleichsprozess beeinflussen können; siehe [Entsprechende Ereignis-Listener zur Entfernung](#entsprechende_ereignis-listener_zur_entfernung).

Ein Aufruf von `removeEventListener()` mit Argumenten, die keinen aktuell registrierten [Ereignis-Listener](/de/docs/Web/API/EventTarget/addEventListener#the_event_listener_callback) auf dem `EventTarget` identifizieren, hat keine Wirkung.

Wenn ein [Ereignis-Listener](/de/docs/Web/API/EventTarget/addEventListener#the_event_listener_callback) von einem [`EventTarget`](/de/docs/Web/API/EventTarget) entfernt wird, während ein anderer Listener des Ziels ein Ereignis verarbeitet, wird er nicht durch das Ereignis ausgelöst. Er kann jedoch neu angehängt werden.

> [!WARNING]
> Wenn ein Listener zweimal registriert ist, einmal mit gesetztem _capture_-Flag und einmal ohne, müssen Sie jeden einzeln entfernen. Das Entfernen eines Capturing-Listeners wirkt sich nicht auf eine Nicht-Capturing-Version desselben Listeners aus und umgekehrt.

Ereignis-Listener können auch entfernt werden, indem ein [`AbortSignal`](/de/docs/Web/API/AbortSignal) an einen [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) übergeben und dann später [`abort()`](/de/docs/Web/API/AbortController/abort) auf dem Controller, der das Signal besitzt, aufgerufen wird.

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
  - : Die [Ereignis-Listener](/de/docs/Web/API/EventTarget/addEventListener#the_event_listener_callback)-Funktion des zu entfernenden Ereignis-Handlers vom Ereignis-Ziel.
- `options` {{optional_inline}}

  - : Ein Optionsobjekt, das Merkmale des Ereignis-Listners angibt.

    Die verfügbaren Optionen sind:

    - `capture`: Ein boolescher Wert, der angibt, ob der zu entfernende [Ereignis-Listener](/de/docs/Web/API/EventTarget/addEventListener#the_event_listener_callback) als Capturing-Listener registriert ist oder nicht. Wenn dieser Parameter nicht vorhanden ist, wird der Standardwert `false` angenommen.

- `useCapture` {{optional_inline}}
  - : Ein boolescher Wert, der angibt, ob der zu entfernende [Ereignis-Listener](/de/docs/Web/API/EventTarget/addEventListener#the_event_listener_callback) als Capturing-Listener registriert ist oder nicht. Wenn dieser Parameter nicht vorhanden ist, wird der Standardwert `false` angenommen.

### Rückgabewert

Keiner.

### Entsprechende Ereignis-Listener zur Entfernung

Angenommen, Sie haben einen Ereignis-Listener hinzugefügt, indem Sie
[`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) aufgerufen haben, und möchten ihn schließlich entfernen. Offensichtlich müssen Sie die gleichen `type`- und `listener`-Parameter für `removeEventListener()` angeben. Aber was ist mit den Parametern `options` oder `useCapture`?

Auch wenn `addEventListener()` es Ihnen ermöglicht, denselben Listener mehrmals für denselben Typ hinzuzufügen, wenn die Optionen unterschiedlich sind, überprüft `removeEventListener()` nur das `capture`/`useCapture`-Flag. Sein Wert muss übereinstimmen, damit `removeEventListener()` übereinstimmt, aber die anderen Werte nicht.

Beispielsweise betrachten Sie diesen Aufruf von `addEventListener()`:

```js
element.addEventListener("mousedown", handleMouseDown, true);
```

Betrachten Sie nun jeden dieser beiden Aufrufe von `removeEventListener()`:

```js
element.removeEventListener("mousedown", handleMouseDown, false); // Fails
element.removeEventListener("mousedown", handleMouseDown, true); // Succeeds
```

Der erste Aufruf schlägt fehl, weil der Wert von `useCapture` nicht übereinstimmt. Der zweite gelingt, da `useCapture` übereinstimmt.

Nun betrachten Sie dies:

```js
element.addEventListener("mousedown", handleMouseDown, { passive: true });
```

Hier geben wir ein `options`-Objekt an, bei dem `passive` auf `true` gesetzt ist, während die anderen Optionen auf den Standardwert `false` gesetzt bleiben.

Schauen Sie sich nun jeden dieser Aufrufe von `removeEventListener()` an. Jeder Aufruf, bei dem `capture` oder `useCapture` auf `true` gesetzt ist, schlägt fehl; alle anderen gelingen.

Nur die Einstellung `capture` ist wichtig für `removeEventListener()`.

```js
element.removeEventListener("mousedown", handleMouseDown, { passive: true }); // Succeeds
element.removeEventListener("mousedown", handleMouseDown, { capture: false }); // Succeeds
element.removeEventListener("mousedown", handleMouseDown, { capture: true }); // Fails
element.removeEventListener("mousedown", handleMouseDown, { passive: false }); // Succeeds
element.removeEventListener("mousedown", handleMouseDown, false); // Succeeds
element.removeEventListener("mousedown", handleMouseDown, true); // Fails
```

Es ist erwähnenswert, dass einige Browser-Versionen hier inkonsistent waren, und es ist wahrscheinlich klug, die gleichen Werte wie für den Aufruf von `addEventListener()` zu verwenden, wenn Sie `removeEventListener()` aufrufen, sofern Sie keine spezifischen Gründe dafür haben.

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
