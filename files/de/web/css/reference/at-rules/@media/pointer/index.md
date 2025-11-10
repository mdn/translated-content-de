---
title: pointer
slug: Web/CSS/Reference/At-rules/@media/pointer
l10n:
  sourceCommit: ad9776a6cf53eaf570ac0515402247e82ecefcfe
---

Die **`pointer`**-[CSS](/de/docs/Web/CSS)-[Medienfunktion](/de/docs/Web/CSS/Reference/At-rules/@media#media_features) prüft, ob der Benutzer ein Zeigegerät (wie eine Maus) hat, und wenn ja, wie genau das _primäre_ Zeigegerät ist.

> [!NOTE]
> Wenn Sie die Genauigkeit _irgendeines_ Zeigegeräts testen möchten, verwenden Sie stattdessen [`any-pointer`](/de/docs/Web/CSS/Reference/At-rules/@media/any-pointer).

## Syntax

Die `pointer`-Funktion wird als ein Schlüsselwortwert aus der unten stehenden Liste angegeben.

- `none`
  - : Der primäre Eingabemechanismus umfasst kein Zeigegerät.
- `coarse`
  - : Der primäre Eingabemechanismus umfasst ein Zeigegerät mit begrenzter Genauigkeit, wie z. B. einen Finger auf einem Touchscreen.
- `fine`
  - : Der primäre Eingabemechanismus umfasst ein genaues Zeigegerät, wie z. B. eine Maus.

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

- [Die `any-pointer` Medienfunktion](/de/docs/Web/CSS/Reference/At-rules/@media/any-pointer)
