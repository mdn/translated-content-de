---
title: "Element: ariaCurrent-Eigenschaft"
short-title: ariaCurrent
slug: Web/API/Element/ariaCurrent
l10n:
  sourceCommit: 11f58a4cd8758f89056900a6fb7c21e2d42fa6f1
---

{{APIRef("DOM")}}

Die **`ariaCurrent`**-Eigenschaft der [`Element`](/de/docs/Web/API/Element)-Schnittstelle spiegelt den Wert des [`aria-current`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-current)-Attributs wider, welches das Element kennzeichnet, das das aktuelle Element innerhalb eines Containers oder einer Gruppe von verwandten Elementen darstellt.

## Wert

Ein String mit einem der folgenden Werte:

- `"page"`
  - : Repräsentiert die aktuelle Seite innerhalb eines Satzes von Seiten.
- `"step"`
  - : Repräsentiert den aktuellen Schritt innerhalb eines Prozesses.
- `"location"`
  - : Repräsentiert den aktuellen Ort, zum Beispiel die aktuelle Seite in einer Breadcrumb-Hierarchie.
- `"date"`
  - : Repräsentiert das aktuelle Datum innerhalb einer Sammlung von Daten.
- `"time"`
  - : Repräsentiert die aktuelle Uhrzeit innerhalb eines Satzes von Zeiten.
- `"true"`
  - : Repräsentiert das aktuelle Element innerhalb eines Satzes.
- `"false"`
  - : Repräsentiert nicht das aktuelle Element innerhalb eines Satzes.

## Beispiele

In diesem Beispiel wird ein Satz von Links für die Seitennavigation verwendet. Das `aria-current`-Attribut zeigt die aktuelle Seite an. Der Wert `page` wird in die Screenreader-Ankündigung aufgenommen. Mit `ariaCurrent` können wir diesen Wert aktualisieren.

```html
<nav>
  <ul>
    <li><a id="link-home" href="/" aria-current="page">Home</a></li>
    <li><a href="/">About</a></li>
    <li><a href="/">Contact</a></li>
  </ul>
</nav>
```

```js
let el = document.getElementById("link-home");
console.log(el.ariaCurrent); // "page"
el.ariaCurrent = "tab";
console.log(el.ariaCurrent); // "tab"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung des aria-current Attributs](https://tink.uk/using-the-aria-current-attribute/)
