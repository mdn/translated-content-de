---
title: scripting
slug: Web/CSS/Reference/At-rules/@media/scripting
l10n:
  sourceCommit: ad9776a6cf53eaf570ac0515402247e82ecefcfe
---

Das **`scripting`** [CSS](/de/docs/Web/CSS) [Medienmerkmal](/de/docs/Web/CSS/Reference/At-rules/@media#media_features) kann verwendet werden, um zu prüfen, ob Skripting (wie JavaScript) verfügbar ist.

> [!NOTE]
> Die Erkennung erfolgt durch die Browser basierend auf den Benutzereinstellungen. Einige Browser-Erweiterungen können die Skriptblockierung mit unterschiedlichen Techniken implementieren. In solchen Fällen funktioniert das `scripting`-Medienmerkmal möglicherweise nicht wie erwartet.

## Syntax

Das `scripting`-Merkmal wird als Schlüsselwortwert aus der unten stehenden Liste spezifiziert.

- `none`
  - : Skripting ist im aktuellen Dokument vollständig nicht verfügbar.
- `initial-only`
  - : Skripting ist während des initialen Seitenladevorgangs aktiviert, danach jedoch nicht mehr.
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
- [Medienabfragen verwenden](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
