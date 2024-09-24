---
title: any-pointer
slug: Web/CSS/@media/any-pointer
l10n:
  sourceCommit: 4cb569f768ec9529724f8fb06539f2903a583a41
---

{{CSSRef}}

Das **`any-pointer`** [CSS](/de/docs/Web/CSS) [Medienmerkmal](/de/docs/Web/CSS/@media#media_features) testet, ob der Benutzer _irgendein_ Zeigegerät (wie eine Maus) hat, und wenn ja, wie genau es ist.

> [!NOTE]
> Wenn Sie die Genauigkeit des _primären_ Zeigegeräts testen möchten, verwenden Sie stattdessen [`pointer`](/de/docs/Web/CSS/@media/pointer).

## Syntax

Das Merkmal `any-pointer` wird als Schlüsselwortwert angegeben, der aus der unten stehenden Liste ausgewählt wird.

- `none`
  - : Kein Zeigegerät ist verfügbar.
- `coarse`
  - : Mindestens ein Eingabegerät umfasst ein Zeigegerät mit begrenzter Genauigkeit.
- `fine`
  - : Mindestens ein Eingabegerät umfasst ein genaues Zeigegerät.

> [!NOTE]
> Es können mehr als ein Wert zutreffen, wenn die verfügbaren Geräte unterschiedliche Eigenschaften haben, obwohl `none` nur zutrifft, wenn keines von ihnen Zeigegeräte sind.

## Beispiele

Dieses Beispiel erstellt ein kleines Kontrollkästchen für Benutzer mit mindestens einem feinen Zeiger und ein großes Kontrollkästchen für Benutzer mit mindestens einem groben Zeiger. Das große Kontrollkästchen hat Vorrang, da es nach dem kleinen deklariert wird.

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

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [Das `pointer` Medienmerkmal](/de/docs/Web/CSS/@media/pointer)
