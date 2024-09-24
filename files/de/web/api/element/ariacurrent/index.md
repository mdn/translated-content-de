---
title: "Element: ariaCurrent Eigenschaft"
short-title: ariaCurrent
slug: Web/API/Element/ariaCurrent
l10n:
  sourceCommit: 11f58a4cd8758f89056900a6fb7c21e2d42fa6f1
---

{{APIRef("DOM")}}

Die **`ariaCurrent`** Eigenschaft des {{domxref("Element")}}-Interfaces spiegelt den Wert des [`aria-current`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-current)-Attributs wider, welches das Element anzeigt, das das aktuelle Element innerhalb eines Containers oder einer Gruppe verwandter Elemente darstellt.

## Wert

Ein String mit einem der folgenden Werte:

- `"page"`
  - : Repräsentiert die aktuelle Seite innerhalb einer Gruppe von Seiten.
- `"step"`
  - : Repräsentiert den aktuellen Schritt innerhalb eines Prozesses.
- `"location"`
  - : Repräsentiert den aktuellen Ort, beispielsweise die aktuelle Seite in einer Breadcrumbs-Hierarchie.
- `"date"`
  - : Repräsentiert das aktuelle Datum innerhalb einer Sammlung von Daten.
- `"time"`
  - : Repräsentiert die aktuelle Uhrzeit innerhalb einer Reihe von Zeiten.
- `"true"`
  - : Repräsentiert das aktuelle Element innerhalb einer Gruppe.
- `"false"`
  - : Repräsentiert nicht das aktuelle Element innerhalb einer Gruppe.

## Beispiele

In diesem Beispiel wird eine Reihe von Links für die Navigation auf der Website verwendet. Das `aria-current` Attribut zeigt die aktuelle Seite an. Der Wert `page` wird in die Bildschirmleser-Ankündigung aufgenommen. Mit `ariaCurrent` können wir diesen Wert aktualisieren.

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
