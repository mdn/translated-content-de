---
title: "Range: deleteContents() Methode"
short-title: deleteContents()
slug: Web/API/Range/deleteContents
l10n:
  sourceCommit: 860cbd30a1ea3812c51f60a341f856e7d5426efb
---

{{ApiRef("DOM")}}

Die **`Range.deleteContents()`** Methode entfernt den Inhalt des [`Range`](/de/docs/Web/API/Range) aus dem [`Document`](/de/docs/Web/API/Document).

Im Kontext eines [`Range`](/de/docs/Web/API/Range), wenn ein Knoten teilweise ausgewählt ist – das bedeutet, er überschneidet sich mit dem Anfang oder Ende der Auswahl – wird nur der ausgewählte Teil des Textes gelöscht, während der Knoten selbst intakt bleibt. Ist jedoch ein Knoten vollständig ausgewählt, werden der gesamte Knoten und sein Inhalt entfernt.

Im Gegensatz zu [`Range.extractContents()`](/de/docs/Web/API/Range/extractContents) gibt diese Methode kein [`DocumentFragment`](/de/docs/Web/API/DocumentFragment) zurück, das den gelöschten Inhalt enthält.

## Syntax

```js-nolint
deleteContents()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
range = document.createRange();
range.selectNode(document.getElementsByTagName("div").item(0));
range.deleteContents();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Das DOM-Schnittstellen-Index](/de/docs/Web/API/Document_Object_Model)
