---
title: "`scan` CSS Media-Feature"
short-title: scan
slug: Web/CSS/Reference/At-rules/@media/scan
l10n:
  sourceCommit: 5a41c90092765ffe35958f439c2ab626714db340
---

Das **`scan`** [CSS](/de/docs/Web/CSS)-[Medien-Feature](/de/docs/Web/CSS/Reference/At-rules/@media#media_features) wird verwendet, um CSS-Stile basierend auf dem Scan-Prozess des Ausgabegeräts anzuwenden.

## Syntax

Das `scan`-Feature wird als einer der folgenden Schlüsselwortwerte angegeben:

- `interlace`
  - : Das Ausgabegerät verwendet eine „interlaced“ Darstellung, bei der Video-Frames abwechselnd nur die „geraden“ Linien auf dem Bildschirm und nur die „ungeraden“ Linien spezifizieren.
- `progressive`
  - : Das Ausgabegerät rendert Inhalte auf dem Bildschirm ohne spezielle Behandlung.

## Beschreibung

Die meisten modernen Bildschirme (und alle Computermonitore) verwenden progressive Darstellung, bei der jeder Bildschirm vollständig ohne spezielle Behandlung angezeigt wird.

Interlacing wurde von CRT-Monitoren und einigen Plasma-TVs verwendet, um den Anschein einer höheren Bildrate pro Sekunde (FPS) zu ermöglichen und gleichzeitig die Bandbreite zu reduzieren. Mit Interlacing wechseln Video-Frames zwischen dem Rendern der geraden und ungeraden Linien auf dem Bildschirm, wobei für jeden Frame nur die halbe Bildschirmfläche heruntergeladen und gerendert wird. Dadurch wird die Fähigkeit des menschlichen Gehirns zur Bildglättung ausgenutzt, um eine höhere FPS-Übertragung bei halben Bandbreitenkosten zu simulieren.

Wenn Sie interlaced Bildschirme anvisieren, vermeiden Sie sehr schnelle Bewegungen über den Bildschirm und stellen Sie sicher, dass animierte Details breiter als 1px sind, um Flackern zu reduzieren.

## Beispiele

### HTML

```html
<p>This is a test.</p>
```

### CSS

```css
p {
  padding: 10px;
  border: solid;
}

@media screen and (scan: interlace) {
  p {
    background: #f4ae8a;
  }
}
@media screen and (scan: progressive) {
  p {
    text-decoration: underline;
  }
}
@media not screen and (scan: progressive) {
  p {
    border-style: dashed;
  }
}
@media not screen and (scan: interlace) {
  p {
    color: purple;
  }
}
```

### Ergebnis

{{EmbedLiveSample("Examples")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [@media](/de/docs/Web/CSS/Reference/At-rules/@media) At-Regel, die verwendet wird, um den Scan-Ausdruck zu spezifizieren.
- [Verwendung von Media-Queries](/de/docs/Web/CSS/Guides/Media_queries/Using), um zu verstehen, wann und wie man eine Media-Query verwendet.
