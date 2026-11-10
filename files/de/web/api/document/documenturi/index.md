---
title: "Dokument: documentURI-Eigenschaft"
short-title: documentURI
slug: Web/API/Document/documentURI
l10n:
  sourceCommit: b9569fcd65bb09ea7e032ef0938185eccdc2d9c4
---

{{ApiRef("DOM")}}

Die schreibgeschützte Eigenschaft **`documentURI`** der Schnittstelle [`Document`](/de/docs/Web/API/Document) gibt den Speicherort des Dokuments als Zeichenfolge zurück.

## Wert

Eine Zeichenfolge.

## Beispiele

### HTML

```html
<p id="urlText">
  URL:<br />
  <span id="url">URL goes here</span>
</p>
```

### JavaScript

```js
document.getElementById("url").textContent = document.documentURI;
```

### Ergebnis

{{EmbedLiveSample("Examples", "100%", 100)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die Eigenschaft [`document.URL`](/de/docs/Web/API/Document/URL), die denselben Wert zurückgibt.
