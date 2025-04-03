---
title: "Auswahl: toString()-Methode"
short-title: toString()
slug: Web/API/Selection/toString
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{ ApiRef("DOM") }}

Die **`Selection.toString()`**-Methode gibt einen String zurück, der aktuell von dem Auswahlobjekt dargestellt wird, d.h. der aktuell ausgewählte Text.

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

In [JavaScript](/de/docs/Web/JavaScript) wird diese Methode automatisch aufgerufen, wenn eine Funktion, an die das Auswahlobjekt übergeben wird, einen String erfordert:

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
