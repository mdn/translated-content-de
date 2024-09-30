---
title: scan
slug: Web/CSS/@media/scan
l10n:
  sourceCommit: 6da4cf5ad98eff4a623db03164549c4f2e3b001a
---

{{CSSRef}}

Das **`scan`** [CSS](/de/docs/Web/CSS) [Medienmerkmal](/de/docs/Web/CSS/@media#media_features) wird verwendet, um CSS-Stile basierend auf dem Scanprozess des Ausgabegeräts anzuwenden.

## Syntax

Das `scan` Merkmal wird als einer der folgenden Schlüsselwortwerte angegeben:

- `interlace`
  - : Das Ausgabegerät verwendet "interlaced" Rendering, bei dem Videoframes abwechselnd nur die "geraden" Zeilen auf dem Bildschirm und nur die "ungeraden" Zeilen spezifizieren.
- `progressive`
  - : Das Ausgabegerät rendert Inhalte auf dem Bildschirm ohne spezielle Behandlung.

## Beschreibung

Die meisten modernen Bildschirme (und alle Computerbildschirme) verwenden das progressive Rendering und zeigen jeden Bildschirm vollständig ohne spezielle Behandlung an.

Interlacing wurde von CRT-Monitoren und einigen Plasma-Fernsehern verwendet, um den Anschein von schnelleren Frames pro Sekunde (FPS) zu ermöglichen, während die Bandbreite reduziert wird. Beim Interlacing wechseln sich Videoframes ab, um die geraden und ungeraden Zeilen auf dem Bildschirm zu rendern. Dabei wird nur die Hälfte des Bildschirms für jeden Frame heruntergeladen und gerendert, wobei die menschliche Fähigkeit zur Bildglättung ausgenutzt wird, sodass das Gehirn eine Übertragung mit höherer FPS zu halben Bandbreitenkosten simuliert.

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

- Die [@media](/de/docs/Web/CSS/@media) At-Regel, die verwendet wird, um den Ausdruck für das Scannen anzugeben.
- [Verwendung von Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries), um zu verstehen, wann und wie eine Media Query verwendet wird.
