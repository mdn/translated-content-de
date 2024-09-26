---
title: pointer
slug: Web/CSS/@media/pointer
l10n:
  sourceCommit: 4cb569f768ec9529724f8fb06539f2903a583a41
---

{{CSSRef}}

Die **`pointer`** [CSS](/de/docs/Web/CSS) [Media-Feature](/de/docs/Web/CSS/@media#media_features) prüft, ob der Benutzer ein Zeigegerät (wie eine Maus) hat und, falls ja, wie genau das _primäre_ Zeigegerät ist.

> [!NOTE]
> Wenn Sie die Genauigkeit _eines beliebigen_ Zeigegeräts testen möchten, verwenden Sie stattdessen [`any-pointer`](/de/docs/Web/CSS/@media/any-pointer).

## Syntax

Das `pointer`-Feature wird als Schlüsselwort aus der folgenden Liste angegeben.

- `none`
  - : Das primäre Eingabegerät enthält kein Zeigegerät.
- `coarse`
  - : Das primäre Eingabegerät enthält ein Zeigegerät mit begrenzter Genauigkeit, wie z.B. einen Finger auf einem Touchscreen.
- `fine`
  - : Das primäre Eingabegerät enthält ein genaues Zeigegerät, wie z.B. eine Maus.

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

- [Das `any-pointer` Media-Feature](/de/docs/Web/CSS/@media/any-pointer)