---
title: <dimension>
slug: Web/CSS/dimension
l10n:
  sourceCommit: 70285e396b5c97675e90b85d573be42078e0168e
---

Der **`<dimension>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_values_and_units/CSS_data_types) repräsentiert ein {{CSSxRef("&lt;number&gt;")}} mit einer angehängten Einheit, zum Beispiel `10px`.

CSS verwendet Dimensionen, um Abstände ({{CSSxRef("&lt;length&gt;")}}), Zeitdauern ({{CSSxRef("&lt;time&gt;")}}), Frequenzen ({{CSSxRef("&lt;frequency&gt;")}}), Auflösungen ({{CSSxRef("&lt;resolution&gt;")}}) und andere Größen anzugeben.

## Syntax

Die Syntax von `<dimension>` ist ein {{CSSxRef("&lt;number&gt;")}}, unmittelbar gefolgt von einer Einheit, die ein Bezeichner ist. Einheit-Bezeichner sind nicht auf Groß- und Kleinschreibung empfindlich.

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

- [CSS-Datentypen](/de/docs/Web/CSS/CSS_values_and_units/CSS_data_types)
- [Lernen, HTML mit CSS zu stylen](/de/docs/Learn_web_development/Core/Styling_basics)
- CSS-Abstände ({{CSSxRef("&lt;length&gt;")}}), -Zeitdauern ({{CSSxRef("&lt;time&gt;")}}), -Frequenzen ({{CSSxRef("&lt;frequency&gt;")}}) und -Auflösungen ({{CSSxRef("&lt;resolution&gt;")}})
