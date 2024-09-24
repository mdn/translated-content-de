---
title: Skripting
slug: Web/CSS/@media/scripting
l10n:
  sourceCommit: 0702c8b455d44d12892863735bf7f507ea8eb1cf
---

{{CSSRef}}

Das **`scripting`** [CSS](/de/docs/Web/CSS) [Media-Feature](/de/docs/Web/CSS/@media#media_features) kann verwendet werden, um zu testen, ob Skripting (wie JavaScript) verfügbar ist.

> [!NOTE]
> Die Erkennung erfolgt durch die Browser basierend auf den Benutzereinstellungen. Einige Browser-Erweiterungen können das Blockieren von Skripten mit verschiedenen Techniken implementieren. In solchen Fällen funktioniert das `scripting` Media-Feature möglicherweise nicht wie erwartet.

## Syntax

Das `scripting`-Feature wird als Schlüsselwortwert angegeben, der aus der unten stehenden Liste ausgewählt wird.

- `none`
  - : Skripting ist im aktuellen Dokument vollständig nicht verfügbar.
- `initial-only`
  - : Skripting ist nur während des initialen Seitenladens aktiviert, aber danach nicht mehr.
- `enabled`
  - : Skripting wird im aktuellen Dokument unterstützt und ist aktiv.

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
- [Media Queries verwenden](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
