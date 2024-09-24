---
title: <dimension>
slug: Web/CSS/dimension
l10n:
  sourceCommit: 66944f622b6b51bc9c24bebbbea242138d910600
---

{{CSSRef}}

Der **`<dimension>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_Types) stellt eine {{CSSxRef("&lt;number&gt;")}} mit einer angehängten Einheit dar, zum Beispiel `10px`.

CSS verwendet Dimensionen, um Entfernungen ({{CSSxRef("&lt;length&gt;")}}), Zeitdauern ({{CSSxRef("&lt;time&gt;")}}), Frequenzen ({{CSSxRef("&lt;frequency&gt;")}}), Auflösungen ({{CSSxRef("&lt;resolution&gt;")}}) und andere Mengenangaben zu spezifizieren.

## Syntax

Die Syntax von `<dimension>` ist eine {{CSSxRef("&lt;number&gt;")}}, der sofort eine Einheit folgt, die ein Bezeichner ist. Einheitenbezeichner sind nicht groß-/kleinschreibungssensitiv.

## Beispiele

### Gültige Dimensionen

```plain example-good
12px      12 Pixel
1rem      1 rem
1.2pt     1.2 Punkt
2200ms    2200 Millisekunden
5s        5 Sekunden
200hz     200 Hertz
200Hz     200 Hertz (Werte sind nicht groß-/kleinschreibungssensitiv)
```

### Ungültige Dimensionen

```plain example-bad
12 px       Die Einheit muss unmittelbar nach der Zahl kommen.
12"px"      Einheiten sind Bezeichner und daher nicht in Anführungszeichen.
3sec        Die Einheitenabkürzung für Sekunden ist "s", nicht "sec".
```

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [CSS-Datentypen](/de/docs/Web/CSS/CSS_Types)
- [Lernen Sie HTML mit CSS zu gestalten](/de/docs/Learn/CSS)
- CSS-Entfernungen ({{CSSxRef("&lt;length&gt;")}}), Zeitdauern ({{CSSxRef("&lt;time&gt;")}}), Frequenzen ({{CSSxRef("&lt;frequency&gt;")}}) und Auflösungen ({{CSSxRef("&lt;resolution&gt;")}})
