---
title: "Range: deleteContents() Methode"
short-title: deleteContents()
slug: Web/API/Range/deleteContents
l10n:
  sourceCommit: 860cbd30a1ea3812c51f60a341f856e7d5426efb
---

{{ApiRef("DOM")}}

Die **`Range.deleteContents()`**-Methode entfernt den Inhalt des {{ domxref("Range") }} aus dem {{ domxref("Document") }}.

Im Kontext eines {{ domxref("Range") }}, wenn ein Knoten teilweise ausgewählt ist – was bedeutet, dass er mit dem Anfang oder Ende der Auswahl überlappt – wird nur der ausgewählte Teil des Textes gelöscht, während der Knoten selbst intakt bleibt. Ist ein Knoten jedoch vollständig ausgewählt, werden der gesamte Knoten und sein Inhalt entfernt.

Im Gegensatz zu {{ domxref("Range.extractContents()") }} gibt diese Methode kein {{domxref("DocumentFragment")}} zurück, das den gelöschten Inhalt enthält.

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

- [Das DOM-Schnittstellenverzeichnis](/de/docs/Web/API/Document_Object_Model)
