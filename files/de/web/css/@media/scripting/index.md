---
title: scripting
slug: Web/CSS/@media/scripting
l10n:
  sourceCommit: 0702c8b455d44d12892863735bf7f507ea8eb1cf
---

{{CSSRef}}

Das **`scripting`** [CSS](/de/docs/Web/CSS) [Media-Feature](/de/docs/Web/CSS/@media#media_features) kann verwendet werden, um zu testen, ob Scripting (wie JavaScript) verfügbar ist.

> [!NOTE]
> Die Erkennung erfolgt durch die Browser basierend auf den Benutzereinstellungen. Einige Browser-Erweiterungen können Skript-Blockierung mit unterschiedlichen Techniken implementieren. In solchen Fällen kann es sein, dass das `scripting` Media-Feature nicht wie erwartet funktioniert.

## Syntax

Das `scripting`-Feature wird als Schlüsselwortwert aus der folgenden Liste festgelegt.

- `none`
  - : Scripting ist im aktuellen Dokument vollständig nicht verfügbar.
- `initial-only`
  - : Scripting ist während des initialen Seitenladens aktiviert, aber danach nicht mehr.
- `enabled`
  - : Scripting wird im aktuellen Dokument unterstützt und ist aktiv.

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

- [@media](/de/docs/Web/CSS/@media)
- [Verwenden von Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
