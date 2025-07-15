---
title: <url>
slug: Web/CSS/url_value
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Der **`<url>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types) ist ein Zeiger auf eine Ressource. Die Ressource könnte ein Bild, ein Video, eine CSS-Datei, eine Schriftartdatei, eine SVG-Funktion etc. sein.

## Syntax

```plain
<url> = <url()>
```

### Werte

Der Wert ist einer der folgenden:

- [`<url()>`](/de/docs/Web/CSS/url_function)
  - : Die `url()`-Funktion akzeptiert nur einen URL-Zeichenfolgenliteral (mit oder ohne Anführungszeichen).

> [!NOTE]
> Die Spezifikation definiert eine alternative Funktion namens `src()`, die eine URL-Zeichenfolge oder eine [CSS-Variable](/de/docs/Web/CSS/var) akzeptiert. Allerdings hat bisher kein Webbrowser die Funktion implementiert.

## Spezifikationen

{{Specifications}}

## Siehe auch

- {{cssxref("url_function", "url()")}}
