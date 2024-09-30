---
title: any-pointer
slug: Web/CSS/@media/any-pointer
l10n:
  sourceCommit: 4cb569f768ec9529724f8fb06539f2903a583a41
---

{{CSSRef}}

Die **`any-pointer`** [CSS](/de/docs/Web/CSS) [Medienabfrageeigenschaft](/de/docs/Web/CSS/@media#media_features) prüft, ob der Benutzer _irgendein_ Zeigegerät (wie eine Maus) hat und, falls ja, wie genau es ist.

> [!NOTE]
> Wenn Sie die Genauigkeit des _primären_ Zeigegeräts testen möchten, verwenden Sie stattdessen [`pointer`](/de/docs/Web/CSS/@media/pointer).

## Syntax

Die `any-pointer` Eigenschaft wird als Schlüsselwortwert angegeben, der aus der folgenden Liste ausgewählt wird.

- `none`
  - : Kein Zeigegerät ist verfügbar.
- `coarse`
  - : Mindestens ein Eingabemechanismus umfasst ein Zeigegerät mit begrenzter Genauigkeit.
- `fine`
  - : Mindestens ein Eingabemechanismus umfasst ein genaues Zeigegerät.

> [!NOTE]
> Mehr als ein Wert kann zutreffen, wenn die verfügbaren Geräte unterschiedliche Eigenschaften haben, obwohl `none` nur dann zutrifft, wenn keines von ihnen ein Zeigegerät ist.

## Beispiele

Dieses Beispiel erstellt ein kleines Kontrollkästchen für Benutzer mit mindestens einem genauen Zeiger und ein großes Kontrollkästchen für Benutzer mit mindestens einem groben Zeiger. Das große Kontrollkästchen hat Vorrang, da es nach dem kleinen deklariert wird.

### HTML

```html
<input id="test" type="checkbox" /> <label for="test">Look at me!</label>
```

### CSS

```css
input[type="checkbox"]:checked {
  background: gray;
}

@media (any-pointer: fine) {
  input[type="checkbox"] {
    appearance: none;
    width: 15px;
    height: 15px;
    border: 1px solid blue;
  }
}

@media (any-pointer: coarse) {
  input[type="checkbox"] {
    appearance: none;
    width: 30px;
    height: 30px;
    border: 2px solid red;
  }
}
```

### Ergebnis

{{EmbedLiveSample("Examples")}}

## Spezifikationen

{{Spezifikationen}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Die `pointer` Medienabfrageeigenschaft](/de/docs/Web/CSS/@media/pointer)
