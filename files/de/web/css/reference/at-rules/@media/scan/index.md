---
title: scan
slug: Web/CSS/Reference/At-rules/@media/scan
l10n:
  sourceCommit: ad9776a6cf53eaf570ac0515402247e82ecefcfe
---

Das **`scan`** [CSS](/de/docs/Web/CSS)-[Medienmerkmal](/de/docs/Web/CSS/Reference/At-rules/@media#media_features) wird verwendet, um CSS-Stile basierend auf dem Scanvorgang des Ausgabegeräts anzuwenden.

## Syntax

Das `scan`-Merkmal wird mit einem der folgenden Schlüsselwortwerte angegeben:

- `interlace`
  - : Das Ausgabegerät verwendet eine "interlace" Darstellung, bei der Video-Frames abwechselnd nur die "geraden" Linien oder nur die "ungeraden" Linien auf dem Bildschirm spezifizieren.
- `progressive`
  - : Das Ausgabegerät rendert Inhalte auf dem Bildschirm ohne spezielle Behandlung.

## Beschreibung

Die meisten modernen Bildschirme (und alle Computerbildschirme) verwenden progressives Rendering und zeigen jeden Bildschirm vollständig ohne spezielle Behandlung an.

Interlacing wurde von CRT-Monitoren und einigen Plasma-TVs verwendet, um den Anschein einer höheren Bildrate pro Sekunde (FPS) zu erzeugen und gleichzeitig die Bandbreite zu reduzieren. Beim Interlacing wechseln die Video-Frames zwischen dem Rendern der geraden Linien und der ungeraden Linien auf dem Bildschirm ab, wobei für jeden Frame nur die Hälfte des Bildschirms heruntergeladen und gerendert wird. So wird die menschliche Bildglättungsfähigkeit ausgenutzt, damit das Gehirn eine höhere FPS-Übertragung bei halben Bandbreitenkosten simuliert.

Beim Ansprechen von interlaced Bildschirmen sollte man sehr schnelle Bewegungen auf dem Bildschirm vermeiden und sicherstellen, dass animierte Details breiter als 1px sind, um Flackern zu reduzieren.

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

- Die [@media](/de/docs/Web/CSS/Reference/At-rules/@media)-At-Regel, die verwendet wird, um den Scan-Ausdruck zu spezifizieren.
- [Verwendung von Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries), um zu verstehen, wann und wie eine Media Query verwendet wird.
