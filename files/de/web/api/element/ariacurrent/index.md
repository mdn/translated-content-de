---
title: "Element: ariaCurrent-Eigenschaft"
short-title: ariaCurrent
slug: Web/API/Element/ariaCurrent
l10n:
  sourceCommit: 11f58a4cd8758f89056900a6fb7c21e2d42fa6f1
---

{{APIRef("DOM")}}

Die **`ariaCurrent`**-Eigenschaft des [`Element`](/de/docs/Web/API/Element)-Interfaces spiegelt den Wert des [`aria-current`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-current)-Attributs wider, welches das Element angibt, das das aktuelle Element innerhalb eines Containers oder einer Gruppe verwandter Elemente darstellt.

## Wert

Ein String mit einem der folgenden Werte:

- `"page"`
  - : Stellt die aktuelle Seite innerhalb eines Satzes von Seiten dar.
- `"step"`
  - : Stellt den aktuellen Schritt innerhalb eines Prozesses dar.
- `"location"`
  - : Stellt den aktuellen Standort dar, zum Beispiel die aktuelle Seite in einer Breadcrumbs-Hierarchie.
- `"date"`
  - : Stellt das aktuelle Datum innerhalb einer Sammlung von Daten dar.
- `"time"`
  - : Stellt die aktuelle Uhrzeit innerhalb eines Satzes von Zeiten dar.
- `"true"`
  - : Stellt das aktuelle Element innerhalb einer Menge dar.
- `"false"`
  - : Stellt das aktuelle Element innerhalb einer Menge nicht dar.

## Beispiele

In diesem Beispiel wird ein Satz von Links zur Navigation auf der Website verwendet. Das `aria-current`-Attribut gibt die aktuelle Seite an. Der Wert `page` wird in die Ausgabe des Screenreaders eingebaut. Mit `ariaCurrent` können wir diesen Wert aktualisieren.

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
