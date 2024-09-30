---
title: scripting
slug: Web/CSS/@media/scripting
l10n:
  sourceCommit: 0702c8b455d44d12892863735bf7f507ea8eb1cf
---

{{CSSRef}}

Die **`scripting`** [CSS](/de/docs/Web/CSS) [Medienabfrage](/de/docs/Web/CSS/@media#media_features) kann verwendet werden, um zu testen, ob Skripte (wie JavaScript) verfügbar sind.

> [!NOTE]
> Die Erkennung erfolgt durch die Browser basierend auf den Benutzereinstellungen. Einige Browser-Erweiterungen können Skript-Blockierung mit unterschiedlichen Techniken implementieren. In solchen Fällen kann die `scripting` Medienabfrage möglicherweise nicht wie erwartet funktionieren.

## Syntax

Das `scripting`-Feature wird als Schlüsselwortwert aus der folgenden Liste angegeben.

- `none`
  - : Skripting ist im aktuellen Dokument vollständig nicht verfügbar.
- `initial-only`
  - : Skripting ist während des initialen Seitenladens aktiviert, aber danach nicht mehr.
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
- [Verwendung von Medienabfragen](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
