---
title: "XRInputSourceArray: values() Methode"
short-title: values()
slug: Web/API/XRInputSourceArray/values
l10n:
  sourceCommit: 8a9085b96d0135920be9b281d4500ff72a7a8369
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

Die Methode **`values()`** des {{domxref("XRInputSourceArray")}} gibt einen {{Glossary("JavaScript")}} [`iterator`](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator) zurück, der über die Liste der im Array enthaltenen {{domxref("XRInputSource")}} Objekte von vorne nach hinten gehen kann.

## Syntax

```js-nolint
values()
```

### Parameter

Keine.

### Rückgabewert

Ein JavaScript [`iterator`](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator), der verwendet werden kann, um durch die Liste der {{domxref("XRInputSource")}} Objekte im Array zu gehen, beginnend mit dem ersten Eintrag (an Index 0) und direkt durch die Liste fortschreitend.

## Beispiele

Dieses Beispiel durchläuft jedes Eingabeelement und ruft die Funktion `checkInput()` mit jedem zurückgegebenen Wert auf.

```js
for (const source of xrSession.inputSources.values()) {
  checkInput(source);
}
```

Hier wird [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of) verwendet, um über den Inhalt des Arrays zu iterieren. Bei jedem Durchlauf der Schleife ist `source` das nächste {{domxref("XRInputSource")}} in der Liste. Die Schleife endet, sobald jeder Input an `checkInput()` übergeben wurde.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Inputs und Eingabequellen](/de/docs/Web/API/WebXR_Device_API/Inputs)
- Die {{domxref("XRInputSourceArray")}} Methode {{domxref("XRInputSourceArray.keys", "keys()")}}
- Die [`Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) Methode `values()`
- {{domxref("XRInputSource")}}
