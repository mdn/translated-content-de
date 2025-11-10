---
title: any-pointer
slug: Web/CSS/Reference/At-rules/@media/any-pointer
l10n:
  sourceCommit: ad9776a6cf53eaf570ac0515402247e82ecefcfe
---

Das **`any-pointer`** [CSS](/de/docs/Web/CSS) [Medienmerkmal](/de/docs/Web/CSS/Reference/At-rules/@media#media_features) prüft, ob der Benutzer _irgendein_ Zeigegerät (wie eine Maus) hat und, falls ja, wie genau es ist.

> [!NOTE]
> Wenn Sie die Genauigkeit des _primären_ Zeigegeräts testen möchten, verwenden Sie stattdessen [`pointer`](/de/docs/Web/CSS/Reference/At-rules/@media/pointer).

## Syntax

Das Merkmal `any-pointer` wird als Schlüsselwortwert angegeben, der aus der folgenden Liste ausgewählt wird.

- `none`
  - : Kein Zeigegerät ist verfügbar.
- `coarse`
  - : Mindestens ein Eingabemechanismus umfasst ein Zeigegerät mit begrenzter Genauigkeit.
- `fine`
  - : Mindestens ein Eingabemechanismus umfasst ein genaues Zeigegerät.

> [!NOTE]
> Mehr als ein Wert kann zutreffen, wenn die verfügbaren Geräte unterschiedliche Eigenschaften haben, obwohl `none` nur zutrifft, wenn keines von ihnen ein Zeigegerät ist.

## Beispiele

Dieses Beispiel erstellt ein kleines Kontrollkästchen für Benutzer mit mindestens einem feinen Zeiger und ein großes Kontrollkästchen für Benutzer mit mindestens einem groben Zeiger. Das große Kontrollkästchen hat Vorrang, da es nach dem kleinen deklariert ist.

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

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Das `pointer`-Medienmerkmal](/de/docs/Web/CSS/Reference/At-rules/@media/pointer)
