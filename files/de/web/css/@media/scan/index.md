---
title: scan
slug: Web/CSS/@media/scan
l10n:
  sourceCommit: 6da4cf5ad98eff4a623db03164549c4f2e3b001a
---

{{CSSRef}}

Die **`scan`** [CSS](/de/docs/Web/CSS) [Medienabfrage](/de/docs/Web/CSS/@media#media_features) wird verwendet, um CSS-Stile basierend auf dem Scan-Prozess des Ausgabegeräts anzuwenden.

## Syntax

Das `scan`-Feature wird als einer der folgenden Schlüsselwortwerte angegeben:

- `interlace`
  - : Das Ausgabegerät verwendet "Interlaced"-Rendering, bei dem Videoframes abwechselnd nur die "geraden" Zeilen auf dem Bildschirm und nur die "ungeraden" Zeilen spezifizieren.
- `progressive`
  - : Das Ausgabegerät rendert den Inhalt ohne besondere Behandlung auf den Bildschirm.

## Beschreibung

Die meisten modernen Bildschirme (und alle Computerbildschirme) verwenden progresstives Rendering, indem sie den Bildschirm vollständig ohne besondere Behandlung anzeigen.

Interlacing wurde von CRT-Monitoren und einigen Plasmafernsehern verwendet, um das Erscheinungsbild schnellerer Frames pro Sekunde (FPS) zu ermöglichen und gleichzeitig die Bandbreite zu reduzieren. Beim Interlacing wechseln die Videoframes zwischen dem Rendern der geraden und der ungeraden Zeilen auf dem Bildschirm, wobei pro Frame jeweils nur die Hälfte des Bildschirms heruntergeladen und gerendert wird. Dabei wird die Bildglättungsfähigkeit des menschlichen Gehirns ausgenutzt, sodass das Gehirn eine höhere FPS-Übertragung bei halben Bandbreitenkosten simuliert.

Beim Anvisieren von interlaced Bildschirmen sollten Sie sehr schnelle Bewegungen über den Bildschirm vermeiden und sicherstellen, dass animierte Details breiter als 1px sind, um Flackern zu reduzieren.

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

- Die [@media](/de/docs/Web/CSS/@media) Regel, die verwendet wird, um die `scan`-Ausdruck zu spezifizieren.
- [Verwendung von Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) um zu verstehen, wann und wie eine Media Query verwendet wird.
