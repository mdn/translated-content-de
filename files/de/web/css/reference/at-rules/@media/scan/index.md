---
title: scan
slug: Web/CSS/Reference/At-rules/@media/scan
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Das **`scan`** [CSS](/de/docs/Web/CSS) [Media-Feature](/de/docs/Web/CSS/Reference/At-rules/@media#media_features) wird verwendet, um CSS-Stile basierend auf dem Scan-Prozess des Ausgabegeräts anzuwenden.

## Syntax

Das `scan`-Feature wird als einer der folgenden Schlüsselwortwerte angegeben:

- `interlace`
  - : Das Ausgabegerät verwendet eine "interlacierte" Darstellung, bei der Video-Frames abwechselnd nur die "geraden" Zeilen auf dem Bildschirm und nur die "ungeraden" Zeilen spezifizieren.
- `progressive`
  - : Das Ausgabegerät rendert Inhalte auf den Bildschirm ohne spezielle Behandlung.

## Beschreibung

Die meisten modernen Bildschirme (und alle Computerbildschirme) verwenden progressive Darstellung, bei der jeder Bildschirm komplett ohne spezielle Behandlung dargestellt wird.

Interlacing wurde von CRT-Monitoren und einigen Plasma-TVs verwendet, um den Anschein einer höheren Bildwiederholrate (FPS) zu erwecken, während die Bandbreite reduziert wird. Bei Interlacing wechseln sich Video-Frames dabei ab, die geraden und ungeraden Zeilen des Bildschirms zu rendern, indem sie nur die Hälfte des Bildschirms für jedes Frame herunterladen und rendern. Dadurch wird die menschliche Fähigkeit zur Bildglättung genutzt, sodass das Gehirn eine höhere Bildschirmwiederholrate bei halben Bandbreitenkosten simuliert.

Beim Anvisieren von interlaced Bildschirmen sollten sehr schnelle Bewegungen quer über den Bildschirm vermieden werden, und sicherstellen, dass animierte Details breiter als 1px sind, um Flackern zu reduzieren.

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

- Die [@media](/de/docs/Web/CSS/Reference/At-rules/@media) At-Regel, die verwendet wird, um den Scan-Ausdruck zu spezifizieren.
- [Verwendung von Media Queries](/de/docs/Web/CSS/Guides/Media_queries/Using), um zu verstehen, wann und wie eine Media Query verwendet wird.
