---
title: scan
slug: Web/CSS/@media/scan
l10n:
  sourceCommit: 6da4cf5ad98eff4a623db03164549c4f2e3b001a
---

{{CSSRef}}

Das **`scan`** [CSS](/de/docs/Web/CSS) [Medienmerkmal](/de/docs/Web/CSS/@media#media_features) wird verwendet, um CSS-Stile basierend auf dem Scanprozess des Ausgabegeräts anzuwenden.

## Syntax

Das `scan`-Merkmal wird als einer der folgenden Schlüsselwortwerte angegeben:

- `interlace`
  - : Das Ausgabegerät verwendet "interlaced" Rendering, wobei Videoframes abwechselnd nur die "geraden" Linien auf dem Bildschirm und nur die "ungeraden" Linien spezifizieren.
- `progressive`
  - : Das Ausgabegerät rendert Inhalte ohne besondere Behandlung auf den Bildschirm.

## Beschreibung

Die meisten modernen Bildschirme (und alle Computermonitore) verwenden progressives Rendering und zeigen jeden Bildschirm vollständig ohne besondere Behandlung an.

Interlacing wurde von CRT-Monitoren und einigen Plasma-Fernsehern verwendet, um den Eindruck von schnelleren Frames pro Sekunde (FPS) zu ermöglichen und dabei die Bandbreite zu reduzieren. Beim Interlacing wechseln Videoframes zwischen dem Rendern der geraden und der ungeraden Linien auf dem Bildschirm, indem jeweils nur die Hälfte des Bildschirms heruntergeladen und gerendert wird. So wird die menschliche Fähigkeit zur Bildglättung ausgenutzt, damit das Gehirn eine höhere FPS-Übertragung mit halben Bandbreitenkosten simuliert.

Bei der Zielsetzung auf interlaced Bildschirme sollten sehr schnelle Bewegungen über den Bildschirm vermieden werden, und animierte Details sollten breiter als 1px sein, um Flimmern zu reduzieren.

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

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- Der [@media](/de/docs/Web/CSS/@media) At-Regel, die verwendet wird, um den scan-Ausdruck anzugeben.
- [Verwendung von Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries), um zu verstehen, wann und wie eine Media Query verwendet werden sollte.
