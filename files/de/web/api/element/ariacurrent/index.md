---
title: "Element: ariaCurrent-Eigenschaft"
short-title: ariaCurrent
slug: Web/API/Element/ariaCurrent
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{APIRef("DOM")}}

Die **`ariaCurrent`**-Eigenschaft des [`Element`](/de/docs/Web/API/Element)-Interfaces spiegelt den Wert des [`aria-current`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-current)-Attributs wider, das das Element kennzeichnet, das das aktuelle Element innerhalb eines Containers oder einer Reihe verwandter Elemente darstellt.

## Wert

Ein String mit einem der folgenden Werte:

- `"page"`
  - : Stellt die aktuelle Seite innerhalb einer Reihe von Seiten dar.
- `"step"`
  - : Stellt den aktuellen Schritt innerhalb eines Prozesses dar.
- `"location"`
  - : Stellt den aktuellen Ort dar, beispielsweise die aktuelle Seite in einer Breadcrumbs-Hierarchie.
- `"date"`
  - : Stellt das aktuelle Datum innerhalb einer Sammlung von Daten dar.
- `"time"`
  - : Stellt die aktuelle Zeit innerhalb einer Reihe von Zeiten dar.
- `"true"`
  - : Stellt das aktuelle Element innerhalb einer Reihe dar.
- `"false"`
  - : Stellt nicht das aktuelle Element innerhalb einer Reihe dar.

## Beispiele

In diesem Beispiel wird eine Reihe von Links für die Navigation auf der Website verwendet. Das `aria-current`-Attribut kennzeichnet die aktuelle Seite. Der Wert `page` wird in die Screenreader-Ausgabe aufgenommen. Mit `ariaCurrent` können wir diesen Wert aktualisieren.

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

- [Verwendung des aria-current-Attributs](https://tink.uk/using-the-aria-current-attribute/)
