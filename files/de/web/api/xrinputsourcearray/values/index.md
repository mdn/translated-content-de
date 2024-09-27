---
title: "XRInputSourceArray: values() Methode"
short-title: values()
slug: Web/API/XRInputSourceArray/values
l10n:
  sourceCommit: 8a9085b96d0135920be9b281d4500ff72a7a8369
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

Die Methode **`values()`** von [`XRInputSourceArray`](/de/docs/Web/API/XRInputSourceArray) gibt einen [JavaScript](/de/docs/Glossary/JavaScript) [`Iterator`](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator) zurück, der über die Liste der im Array enthaltenen [`XRInputSource`](/de/docs/Web/API/XRInputSource)-Objekte von Anfang bis Ende gehen kann.

## Syntax

```js-nolint
values()
```

### Parameter

Keine.

### Rückgabewert

Ein JavaScript [`Iterator`](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator), der verwendet werden kann, um durch die Liste der [`XRInputSource`](/de/docs/Web/API/XRInputSource)-Objekte im Array zu gehen, beginnend mit dem ersten Eintrag (bei Index 0) und direkt durch die Liste fortfahrend.

## Beispiele

Dieses Beispiel durchläuft jedes Eingabegerät und ruft die Funktion `checkInput()` mit jedem zurückgegebenen Wert auf.

```js
for (const source of xrSession.inputSources.values()) {
  checkInput(source);
}
```

Hier wird [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of) verwendet, um über den Inhalt des Arrays zu iterieren. Bei jedem Durchlauf der Schleife ist `source` das nächste [`XRInputSource`](/de/docs/Web/API/XRInputSource) in der Liste. Die Schleife endet, sobald jedes Eingabegerät an `checkInput()` übergeben wurde.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Eingaben und Eingabequellen](/de/docs/Web/API/WebXR_Device_API/Inputs)
- Die [`XRInputSourceArray`](/de/docs/Web/API/XRInputSourceArray) Methode [`keys()`](/de/docs/Web/API/XRInputSourceArray/keys)
- Die [`Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) Methode `values()`
- [`XRInputSource`](/de/docs/Web/API/XRInputSource)
