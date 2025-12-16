---
title: <dimension>
slug: Web/CSS/Reference/Values/dimension
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

Der **`<dimension>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/Reference/Values/Data_types) repräsentiert einen {{CSSxRef("&lt;number&gt;")}} mit einer Einheit, z. B. `10px`.

CSS verwendet Dimensionen, um Entfernungen ({{CSSxRef("&lt;length&gt;")}}), Zeitdauern ({{CSSxRef("&lt;time&gt;")}}), Frequenzen ({{CSSxRef("&lt;frequency&gt;")}}), Auflösungen ({{cssxref("resolution")}}) und andere Größen anzugeben.

## Syntax

Die Syntax von `<dimension>` besteht aus einem {{CSSxRef("&lt;number&gt;")}}, dem sofort eine Einheit folgt, die ein Bezeichner ist. Einheitsbezeichner sind nicht case-sensitiv.

## Beispiele

### Gültige Dimensionen

```plain example-good
12px      12 pixels
1rem      1 rem
1.2pt     1.2 points
2200ms    2200 milliseconds
5s        5 seconds
200hz     200 Hertz
200Hz     200 Hertz (values are case insensitive)
```

### Ungültige Dimensionen

```plain example-bad
12 px       The unit must come immediately after the number.
12"px"      Units are identifiers and therefore unquoted.
3sec        The seconds unit is abbreviated "s" not "sec".
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS-Datentypen](/de/docs/Web/CSS/Reference/Values/Data_types)
- [HTML mit CSS gestalten lernen](/de/docs/Learn_web_development/Core/Styling_basics)
- CSS-Entfernungen ({{CSSxRef("&lt;length&gt;")}}), Zeitdauern ({{CSSxRef("&lt;time&gt;")}}), Frequenzen ({{CSSxRef("&lt;frequency&gt;")}}) und Auflösungen ({{cssxref("resolution")}})
