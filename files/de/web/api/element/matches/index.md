---
title: "Element: matches() Methode"
short-title: matches()
slug: Web/API/Element/matches
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{APIRef("DOM")}}

Die **`matches()`** Methode des [`Element`](/de/docs/Web/API/Element) Interfaces prüft, ob das Element durch den angegebenen [CSS-Selektor](/de/docs/Learn_web_development/Core/Styling_basics/Basic_selectors) ausgewählt werden würde.

## Syntax

```js-nolint
matches(selectors)
```

### Parameter

- `selectors`
  - : Ein String, der gültige [CSS-Selektoren](/de/docs/Learn_web_development/Core/Styling_basics/Basic_selectors) enthält, um das [`Element`](/de/docs/Web/API/Element) zu testen.

### Rückgabewert

`true`, wenn das [`Element`](/de/docs/Web/API/Element) den `selectors` entspricht. Andernfalls `false`.

### Ausnahmen

- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn `selectors` nicht als Liste von CSS-Selektoren geparst werden kann.

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

Dies wird "The Philippine eagle is endangered!" in die Konsole ausgeben, da das Element tatsächlich ein `class` Attribut mit dem Wert `endangered` hat.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS-Selektoren](/de/docs/Web/CSS/Guides/Selectors) Modul
- Andere [`Element`](/de/docs/Web/API/Element) Methoden, die Selektoren verwenden: [`Element.querySelector()`](/de/docs/Web/API/Element/querySelector), [`Element.querySelectorAll()`](/de/docs/Web/API/Element/querySelectorAll), und [`element.closest()`](/de/docs/Web/API/Element/closest).
