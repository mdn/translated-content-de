---
title: "`scan` CSS-Medienmerkmal"
short-title: scan
slug: Web/CSS/Reference/At-rules/@media/scan
l10n:
  sourceCommit: 67d40334c8b90e4623f3b0d3aea466b9882d8236
---

Das **`scan`** [CSS](/de/docs/Web/CSS) [Medienmerkmal](/de/docs/Web/CSS/Reference/At-rules/@media#media_features) wird verwendet, um CSS-Stile basierend auf dem Scan-Prozess des Ausgabegeräts anzuwenden.

## Syntax

Das `scan` Merkmal wird als eines der folgenden Schlüsselwortwerte angegeben:

- `interlace`
  - : Das Ausgabegerät verwendet eine "interlacierte" Darstellung, bei der Video-Frames abwechselnd nur die "geraden" Zeilen auf dem Bildschirm und nur die "ungeraden" Zeilen spezifizieren.
- `progressive`
  - : Das Ausgabegerät rendert Inhalte ohne besondere Behandlung auf den Bildschirm.

## Beschreibung

Die meisten modernen Bildschirme (und alle Computermonitore) verwenden progressive Darstellung, bei der jeder Bildschirm vollständig ohne besondere Behandlung angezeigt wird.

Interlacing wurde von CRT-Monitoren und einigen Plasma-TVs verwendet, um den Anschein von schnelleren Bildern pro Sekunde (FPS) zu ermöglichen und gleichzeitig die Bandbreite zu reduzieren. Mit Interlacing wechseln Videoframes zwischen dem Rendern der geraden und der ungeraden Linien auf dem Bildschirm, indem nur die Hälfte des Bildschirms für jeden Frame heruntergeladen und gerendert wird. Dies nutzt die Fähigkeit des menschlichen Gehirns zur Bildglättung aus, sodass ein höherer FPS-Übertragung simuliert wird, jedoch mit halben Bandbreitenkosten.

Beim Ziel von interlaced Bildschirmen sollten sehr schnelle Bewegungen über den Bildschirm vermieden und sichergestellt werden, dass animierte Details breiter als 1px sind, um Flackern zu reduzieren.

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
@media not screen and (scan: interlaced) {
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

- Die [@media](/de/docs/Web/CSS/Reference/At-rules/@media) At-Regel, die verwendet wird, um den Scan-Ausdruck anzugeben.
- [Verwendung von Media Queries](/de/docs/Web/CSS/Guides/Media_queries/Using) für ein besseres Verständnis, wann und wie man eine Media Query verwendet.
