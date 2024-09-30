---
title: "XRInputSourceArray: values()-Methode"
short-title: values()
slug: Web/API/XRInputSourceArray/values
l10n:
  sourceCommit: 8a9085b96d0135920be9b281d4500ff72a7a8369
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

Die Methode **`values()`** des [`XRInputSourceArray`](/de/docs/Web/API/XRInputSourceArray) gibt einen [JavaScript](/de/docs/Glossary/JavaScript) [`Iterator`](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator) zurück, der die Liste der im Array enthaltenen [`XRInputSource`](/de/docs/Web/API/XRInputSource)-Objekte von Anfang bis Ende durchlaufen kann.

## Syntax

```js-nolint
values()
```

### Parameter

Keine.

### Rückgabewert

Ein JavaScript-[`Iterator`](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator), der verwendet werden kann, um die Liste der [`XRInputSource`](/de/docs/Web/API/XRInputSource)-Objekte im Array zu durchlaufen, beginnend mit dem ersten Eintrag (bei Index 0) und direkt durch die Liste fortfahrend.

## Beispiele

Dieses Beispiel durchläuft jeden Eingang und ruft die Funktion `checkInput()` mit jedem zurückgegebenen Wert auf.

```js
for (const source of xrSession.inputSources.values()) {
  checkInput(source);
}
```

Hierbei wird [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of) verwendet, um über die Inhalte des Arrays zu iterieren. Bei jedem Durchlauf der Schleife ist `source` das nächste [`XRInputSource`](/de/docs/Web/API/XRInputSource) in der Liste. Die Schleife endet, sobald jedes Eingabegerät an `checkInput()` übergeben wurde.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Eingaben und Eingabequellen](/de/docs/Web/API/WebXR_Device_API/Inputs)
- Die [`XRInputSourceArray`](/de/docs/Web/API/XRInputSourceArray)-Methode [`keys()`](/de/docs/Web/API/XRInputSourceArray/keys)
- Die [`Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array)-Methode `values()`
- [`XRInputSource`](/de/docs/Web/API/XRInputSource)
