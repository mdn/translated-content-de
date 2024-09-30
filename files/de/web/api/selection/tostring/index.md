---
title: "Selection: toString() Methode"
short-title: toString()
slug: Web/API/Selection/toString
l10n:
  sourceCommit: f2f9346c0c0e9f6676f2df9f1850933e274401de
---

{{ ApiRef("DOM") }}

Die **`Selection.toString()`** Methode gibt einen String zurück,
der derzeit durch das Selection-Objekt dargestellt wird, d.h. den aktuell ausgewählten Text.

## Syntax

```js-nolint
toString()
```

### Parameter

Keine.

### Rückgabewert

Ein String, der die Auswahl repräsentiert.

## Beschreibung

Diese Methode gibt den aktuell ausgewählten Text zurück.

In [JavaScript](/de/docs/Web/JavaScript) wird diese Methode automatisch aufgerufen, wenn
eine Funktion, der das Selection-Objekt übergeben wird, einen String erfordert:

```js
alert(window.getSelection()); // What is called
alert(window.getSelection().toString()); // What is actually being effectively called.
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Selection`](/de/docs/Web/API/Selection), die Schnittstelle, zu der sie gehört.
