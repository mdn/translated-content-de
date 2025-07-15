---
title: scan
slug: Web/CSS/@media/scan
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Das **`scan`** [CSS](/de/docs/Web/CSS) [Medien-Feature](/de/docs/Web/CSS/@media#media_features) wird verwendet, um CSS-Stile basierend auf dem Scan-Prozess des Ausgabegeräts anzuwenden.

## Syntax

Das `scan`-Feature wird als einer der folgenden Schlüsselwortwerte angegeben:

- `interlace`
  - : Das Ausgabegerät verwendet ein "Interlace"-Rendering, bei dem Videoframes abwechselnd nur die "geraden" Linien auf dem Bildschirm und nur die "ungeraden" Linien spezifizieren.
- `progressive`
  - : Das Ausgabegerät rendert den Inhalt ohne besondere Behandlung auf den Bildschirm.

## Beschreibung

Die meisten modernen Bildschirme (und alle Computerbildschirme) verwenden das progressive Rendering, bei dem jeder Bildschirm vollständig ohne besondere Behandlung angezeigt wird.

Interlacing wurde von CRT-Monitoren und einigen Plasma-TVs verwendet, um die Darstellung von schnelleren Bildern pro Sekunde (FPS) zu ermöglichen und gleichzeitig die Bandbreite zu reduzieren. Beim Interlacing wechseln die Video-Frames zwischen dem Rendering der geraden und der ungeraden Linien auf dem Bildschirm, indem nur die Hälfte des Bildschirms für jeden Frame heruntergeladen und gerendert wird. Dadurch wird die menschliche Fähigkeit zur Bildglättung genutzt, sodass das Gehirn eine höhere FPS-Übertragung bei halben Bandbreitenkosten simuliert.

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

- Die [@media](/de/docs/Web/CSS/@media) At-Regel, die verwendet wird, um den Scan-Ausdruck zu spezifizieren.
- [Verwendung von Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries), um zu verstehen, wann und wie eine Media Query verwendet wird.
