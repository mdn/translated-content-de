---
title: prefers-contrast
slug: Web/CSS/Reference/At-rules/@media/prefers-contrast
l10n:
  sourceCommit: c4d3b34b77fcfc28dd1d1a7ecb051ee912d9d3dd
---

Das **`prefers-contrast`** [CSS](/de/docs/Web/CSS) [Media-Feature](/de/docs/Web/CSS/Reference/At-rules/@media#media_features) wird verwendet, um zu erkennen, ob der Nutzer die Darstellung des Webinhalts mit einem niedrigeren oder höheren Kontrast angefordert hat.

## Syntax

- `no-preference`
  - : Zeigt an, dass der Nutzer keine Vorlieben dem System mitgeteilt hat. Dieser Schlüsselwortwert wird im booleschen Kontext als falsch bewertet.
- `more`
  - : Zeigt an, dass der Nutzer das System darüber informiert hat, dass sie eine Oberfläche mit einem höheren Kontrastniveau bevorzugen.
- `less`
  - : Zeigt an, dass der Nutzer das System darüber informiert hat, dass sie eine Oberfläche mit einem niedrigeren Kontrastniveau bevorzugen.
- `custom`
  - : Zeigt an, dass der Nutzer das System gebeten hat, einen spezifischen Satz von Farben zu verwenden, und der durch diese Farben implizierte Kontrast weder `more` noch `less` entspricht. Dieser Wert wird mit der von Benutzern von [`forced-colors: active`](/de/docs/Web/CSS/Reference/At-rules/@media/forced-colors) angegebenen Farbpalette übereinstimmen.

## Nutzervorlieben

Verschiedene Betriebssysteme unterstützen solche Vorlieben und Benutzeragenten werden voraussichtlich auf die vom Betriebssystem bereitgestellten Einstellungen zurückgreifen.

## Beispiele

Dieses Beispiel enthält ein Kästchen mit einer standardmäßig gesetzten gestrichelten {{cssxref("outline")}}. Wenn die `prefers-contrast: more` Media Query zutrifft, erhält die angewandte Umrandung stattdessen einen höher kontrastierten `solid` Stil.

### HTML

```html
<div class="contrast">low contrast box</div>
```

### CSS

```css
.contrast {
  margin: 5px;
  width: 100px;
  height: 100px;
  outline: 2px dashed black;
}

@media (prefers-contrast: more) {
  .contrast {
    outline: 2px solid black;
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

- CSS [forced-colors](/de/docs/Web/CSS/Reference/At-rules/@media/forced-colors) Media Query
