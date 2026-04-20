---
title: "`scripting` CSS-Medienmerkmal"
short-title: scripting
slug: Web/CSS/Reference/At-rules/@media/scripting
l10n:
  sourceCommit: 67d40334c8b90e4623f3b0d3aea466b9882d8236
---

Das **`scripting`** [CSS](/de/docs/Web/CSS)-[Medienmerkmal](/de/docs/Web/CSS/Reference/At-rules/@media#media_features) kann verwendet werden, um zu testen, ob Skripting (wie JavaScript) verfügbar ist.

> [!NOTE]
> Die Erkennung erfolgt durch die Browser basierend auf den Nutzereinstellungen. Einige Browser-Erweiterungen können Skriptblockierung durch verschiedene Techniken implementieren. In solchen Fällen kann es sein, dass das `scripting`-Medienmerkmal nicht wie erwartet funktioniert.

## Syntax

Das `scripting`-Merkmal wird als Schlüsselwortwert aus der untenstehenden Liste festgelegt.

- `none`
  - : Skripting ist im aktuellen Dokument vollständig nicht verfügbar.
- `initial-only`
  - : Skripting ist während des ersten Ladens der Seite aktiviert, danach jedoch nicht mehr.
- `enabled`
  - : Skripting wird unterstützt und ist im aktuellen Dokument aktiv.

## Beispiele

### HTML

```html
<p class="script-none">You do not have scripting available. :-(</p>
<p class="script-initial-only">
  Your scripting is only enabled during the initial page load. Weird.
</p>
<p class="script-enabled">You have scripting enabled! :-)</p>
```

### CSS

```css
p {
  color: lightgray;
}

@media (scripting: none) {
  .script-none {
    color: red;
  }
}

@media (scripting: initial-only) {
  .script-initial-only {
    color: red;
  }
}

@media (scripting: enabled) {
  .script-enabled {
    color: red;
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

- [@media](/de/docs/Web/CSS/Reference/At-rules/@media)
- [Verwendung von Media Queries](/de/docs/Web/CSS/Guides/Media_queries/Using)
