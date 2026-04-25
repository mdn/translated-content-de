---
title: "`pointer` CSS Medienfunktion"
short-title: pointer
slug: Web/CSS/Reference/At-rules/@media/pointer
l10n:
  sourceCommit: 67d40334c8b90e4623f3b0d3aea466b9882d8236
---

Die **`pointer`** [CSS](/de/docs/Web/CSS) [Medienfunktion](/de/docs/Web/CSS/Reference/At-rules/@media#media_features) prüft, ob der Benutzer ein Zeigegerät (wie eine Maus) hat und, falls ja, wie genau das _primäre_ Zeigegerät ist.

> [!NOTE]
> Wenn Sie die Genauigkeit _jedes_ Zeigegeräts testen möchten, verwenden Sie stattdessen [`any-pointer`](/de/docs/Web/CSS/Reference/At-rules/@media/any-pointer).

## Syntax

Die `pointer`-Funktion wird als Schlüsselwortwert angegeben, der aus der untenstehenden Liste ausgewählt wird.

- `none`
  - : Der primäre Eingabemechanismus umfasst kein Zeigegerät.
- `coarse`
  - : Der primäre Eingabemechanismus umfasst ein Zeigegerät mit begrenzter Genauigkeit, wie ein Finger auf einem Touchscreen.
- `fine`
  - : Der primäre Eingabemechanismus umfasst ein genaues Zeigegerät, wie eine Maus.

## Beispiele

Dieses Beispiel erstellt ein kleines Kontrollkästchen für Benutzer mit präzisen primären Zeigegeräten und ein großes Kontrollkästchen für Benutzer mit grober primärer Zeigegerätgenauigkeit.

### HTML

```html
<input id="test" type="checkbox" /> <label for="test">Look at me!</label>
```

### CSS

```css
input[type="checkbox"] {
  appearance: none;
  border: solid;
  margin: 0;
}

input[type="checkbox"]:checked {
  background: gray;
}

@media (pointer: fine) {
  input[type="checkbox"] {
    width: 15px;
    height: 15px;
    border-width: 1px;
    border-color: blue;
  }
}

@media (pointer: coarse) {
  input[type="checkbox"] {
    width: 30px;
    height: 30px;
    border-width: 2px;
    border-color: red;
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

- [Die `any-pointer` Medienfunktion](/de/docs/Web/CSS/Reference/At-rules/@media/any-pointer)
