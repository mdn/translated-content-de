---
title: "Element: matches()-Methode"
short-title: matches()
slug: Web/API/Element/matches
l10n:
  sourceCommit: b85bf9fcc2c0062a765d104799d7d45d9e9b13bb
---

{{APIRef("DOM")}}

Die **`matches()`**-Methode des [`Element`](/de/docs/Web/API/Element)-Interfaces prüft, ob das Element durch den angegebenen [CSS-Selektor](/de/docs/Learn/CSS/Building_blocks/Selectors) ausgewählt werden würde.

## Syntax

```js-nolint
matches(selectors)
```

### Parameter

- `selectors`
  - : Ein String, der gültige [CSS-Selektoren](/de/docs/Learn/CSS/Building_blocks/Selectors) enthält, gegen die das [`Element`](/de/docs/Web/API/Element) getestet wird.

### Rückgabewert

`true`, wenn das [`Element`](/de/docs/Web/API/Element) mit den `selectors` übereinstimmt. Andernfalls `false`.

### Ausnahmen

- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn `selectors` nicht als CSS-Selektorliste geparst werden kann.

## Beispiele

### HTML

```html
<ul id="birds">
  <li>Orange-winged parrot</li>
  <li class="endangered">Philippine eagle</li>
  <li>Great white pelican</li>
</ul>
```

### JavaScript

```js
const birds = document.querySelectorAll("li");

for (const bird of birds) {
  if (bird.matches(".endangered")) {
    console.log(`The ${bird.textContent} is endangered!`);
  }
}
```

Dies wird "The Philippine eagle is endangered!" in die Konsole ausgeben, da das Element tatsächlich ein `class`-Attribut mit dem Wert `endangered` hat.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS-Selektoren](/de/docs/Web/CSS/CSS_selectors)-Modul
- Andere [`Element`](/de/docs/Web/API/Element)-Methoden, die Selektoren verwenden: [`Element.querySelector()`](/de/docs/Web/API/Element/querySelector), [`Element.querySelectorAll()`](/de/docs/Web/API/Element/querySelectorAll) und [`element.closest()`](/de/docs/Web/API/Element/closest).
