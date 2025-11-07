---
title: scripting
slug: Web/CSS/Reference/At-rules/@media/scripting
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`scripting`** [CSS](/de/docs/Web/CSS) [Media-Funktion](/de/docs/Web/CSS/Reference/At-rules/@media#media_features) kann verwendet werden, um zu testen, ob Skripting (wie JavaScript) verfügbar ist.

> [!NOTE]
> Die Erkennung erfolgt durch die Browser basierend auf den Benutzereinstellungen. Einige Browser-Erweiterungen können Skript-Blockierung mithilfe verschiedener Techniken implementieren. In solchen Fällen kann es sein, dass die `scripting` Media-Funktion nicht wie erwartet funktioniert.

## Syntax

Die `scripting`-Funktion wird als Schlüsselwortwert angegeben, der aus der unten stehenden Liste ausgewählt wird.

- `none`
  - : Skripting ist im aktuellen Dokument vollständig nicht verfügbar.
- `initial-only`
  - : Skripting ist beim initialen Laden der Seite aktiviert, aber danach nicht mehr.
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

- [@media](/de/docs/Web/CSS/Reference/At-rules/@media)
- [Verwendung von Media Queries](/de/docs/Web/CSS/Guides/Media_queries/Using)
