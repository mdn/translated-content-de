---
title: "Selection: toString() Methode"
short-title: toString()
slug: Web/API/Selection/toString
l10n:
  sourceCommit: f2f9346c0c0e9f6676f2df9f1850933e274401de
---

{{ ApiRef("DOM") }}

Die **`Selection.toString()`** Methode gibt einen String zurück, der aktuell durch das Selection-Objekt repräsentiert wird, d.h. den momentan ausgewählten Text.

## Syntax

```js-nolint
toString()
```

### Parameter

Keine.

### Rückgabewert

Ein String, der die Selektion repräsentiert.

## Beschreibung

Diese Methode gibt den momentan ausgewählten Text zurück.

In [JavaScript](/de/docs/Web/JavaScript) wird diese Methode automatisch aufgerufen, wenn eine Funktion, an die das Selection-Objekt übergeben wird, einen String erfordert:

```js
alert(window.getSelection()); // Was aufgerufen wird
alert(window.getSelection().toString()); // Was tatsächlich effektiv aufgerufen wird.
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("Selection")}}, das Interface, zu dem es gehört.
