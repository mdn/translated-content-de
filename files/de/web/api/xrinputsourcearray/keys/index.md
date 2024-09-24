---
title: "XRInputSourceArray: keys() Methode"
short-title: keys()
slug: Web/API/XRInputSourceArray/keys
l10n:
  sourceCommit: 8a9085b96d0135920be9b281d4500ff72a7a8369
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

Die **`keys()`**-Methode der
{{domxref("XRInputSourceArray")}}-Schnittstelle gibt einen {{Glossary("JavaScript")}}
[`Iterator`](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator)
zurück, der verwendet werden kann, um über die Schlüssel zu iterieren, die zum Referenzieren jedes Elements im Array der Eingabequellen verwendet werden.

## Syntax

```js-nolint
keys()
```

### Parameter

Keine.

### Rückgabewert

Ein
JavaScript [`Iterator`](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator), der
verwendet werden kann, um durch die Schlüssel für jeden Eintrag in der Liste der Eingabequellen zu gehen. Die
vom Iterator zurückgegebenen Werte sind die Indizes jedes Eintrags in der Liste, das heißt, die
Nummern 0, 1, 2 und so weiter bis zum Index des letzten Elements in der Liste.

## Beispiele

Dieses Beispiel-Snippet holt die Liste der Eingaben für eine Sitzung und versucht, mit jedem
Unterstützten Eingabegerättyp umzugehen.

```js
for (const inputIdx of xrSession.inputSources.keys()) {
  /* die Schlüssel sind die Indizes in der Liste der Eingaben */
  checkInput(xrSession.inputSources[inputIdx]);
}
```

Hier wird
[`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of)
verwendet, um über jeden der Schlüssel zu iterieren. Für jeden Schlüssel wird die Eingabe mit dem
Index der Array-Notation abgerufen: `xrSession.inputSources[inputIdx]`.

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- [Eingaben und Eingabequellen](/de/docs/Web/API/WebXR_Device_API/Inputs)
- Die {{domxref("XRInputSourceArray")}} Methode {{domxref("XRInputSourceArray.values", "values()")}}
- Die [`Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) Methode `keys()`
- {{domxref("XRInputSource")}}
