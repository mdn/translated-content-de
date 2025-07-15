---
title: pointer
slug: Web/CSS/@media/pointer
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`pointer`** [CSS](/de/docs/Web/CSS) [Media-Funktion](/de/docs/Web/CSS/@media#media_features) überprüft, ob der Benutzer ein Zeigegerät (wie eine Maus) hat und falls ja, wie genau das _primäre_ Zeigegerät ist.

> [!NOTE]
> Wenn Sie die Genauigkeit _jedes_ Zeigegeräts testen möchten, verwenden Sie stattdessen [`any-pointer`](/de/docs/Web/CSS/@media/any-pointer).

## Syntax

Die `pointer`-Funktion wird als ein Schlüsselwortwert festgelegt, der aus der unten stehenden Liste ausgewählt wird.

- `none`
  - : Der primäre Eingabemechanismus enthält kein Zeigegerät.
- `coarse`
  - : Der primäre Eingabemechanismus umfasst ein Zeigegerät mit begrenzter Genauigkeit, wie ein Finger auf einem Touchscreen.
- `fine`
  - : Der primäre Eingabemechanismus umfasst ein präzises Zeigegerät, wie eine Maus.

## Beispiele

Dieses Beispiel erstellt ein kleines Kontrollkästchen für Benutzer mit feinen primären Zeigegeräten und ein großes Kontrollkästchen für Benutzer mit groben primären Zeigegeräten.

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

- [Die `any-pointer` Media-Funktion](/de/docs/Web/CSS/@media/any-pointer)
