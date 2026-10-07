---
title: Numerische Datentypen
slug: Web/CSS/Guides/Values_and_units/Numeric_data_types
l10n:
  sourceCommit: d78544a841b0e266a6efc169c044573f5e0b4e7d
---

Jede CSS-Deklaration besteht aus einem Eigenschaft-Wert-Paar. Je nach Eigenschaft kann der Wert verschiedene Datentypen enthalten, beispielsweise eine einzelne Zahl, ein Schlüsselwort, eine Funktion oder eine Kombination verschiedener Typen. Manche Werte haben Einheiten, andere nicht. Zu den numerischen Datentypen gehören Werte der Typen {{cssxref("&lt;integer&gt;")}}, {{cssxref("&lt;number&gt;")}}, {{cssxref("&lt;dimension&gt;")}} und {{cssxref("&lt;percentage&gt;")}}. Dieser Leitfaden bietet einen Überblick über numerische Datentypen. Ausführlichere Informationen finden Sie auf der jeweiligen Seite des Werttyps.

## Ganzzahlen

Eine Ganzzahl besteht aus einer oder mehreren Dezimalziffern von `0` bis `9`, beispielsweise `1024` oder `-55`. Vor einer Ganzzahl kann ein `+`- oder `-`-Zeichen stehen. Zwischen dem Zeichen und der Ganzzahl darf kein Leerzeichen stehen.

## Zahlen

Ein {{cssxref("&lt;number&gt;")}}-Wert stellt eine reelle Zahl dar, die einen Dezimalpunkt mit Nachkommastellen haben kann, aber nicht muss, beispielsweise `0.255`, `128` oder `-1.2`. Auch Zahlen kann ein `+`- oder `-`-Zeichen vorangestellt sein.

## Dimensionen

Ein {{cssxref("&lt;dimension&gt;")}}-Wert ist ein `<number>`-Wert mit angehängter Einheit, beispielsweise `45deg`, `100ms` oder `10px`. Bei der Einheitenkennung wird nicht zwischen Groß- und Kleinschreibung unterschieden. Zwischen der Zahl und der Einheitenkennung dürfen weder Leerzeichen noch andere Zeichen stehen: `1 cm` ist beispielsweise ungültig.

CSS verwendet Dimensionen zur Angabe von:

- {{cssxref("&lt;length&gt;")}} (Längeneinheiten)
- {{cssxref("angle")}}
- {{cssxref("&lt;time&gt;")}}
- {{cssxref("&lt;frequency&gt;")}}
- {{cssxref("&lt;flex&gt;")}}
- {{cssxref("resolution")}}

Alle diese Typen werden in den folgenden Abschnitten behandelt.

### Längeneinheiten

Wenn eine Eigenschaft eine Entfernung, auch Länge genannt, als Wert zulässt, wird dies als Typ {{cssxref("&lt;length&gt;")}} bezeichnet. In CSS gibt es zwei Arten von Längen: relative und absolute. Relative Längeneinheiten geben eine Länge im Verhältnis zu etwas anderem an.

Es gibt zwei Arten relativer Längen: schriftbezogene Längen und viewportbezogene Längen. Beide lassen sich weiter unterteilen. Schriftbezogene Längeneinheiten beziehen sich entweder auf die Schrift des jeweiligen Elements oder auf die Schrift des Wurzelelements. Viewportbezogene Längen beziehen sich entweder auf die Höhe oder Breite des Viewports oder, wie im [CSS-Containment-Modul](/de/docs/Web/CSS/Guides/Containment) definiert, auf einen [Container](/de/docs/Web/CSS/Guides/Containment/Container_queries#container_query_length_units).

#### Auf die Schrift des Elements bezogene Längen

Diese Längen beziehen sich auf die „lokale“ Schriftgröße oder Zeilenhöhe. Sie geben eine Länge im Verhältnis zu einer berechneten Größe einer Eigenschaft des [Elements](/de/docs/Web/HTML/Reference/Elements) selbst an. Bei einem Zirkelbezug beziehen sie sich stattdessen auf den geerbten Wert des Elements, etwa beim Wert `em` für die Eigenschaft {{cssxref("font-size")}} oder beim Wert `lh` für die Eigenschaft {{cssxref("line-height")}}.
Beispielsweise bezieht sich `em` auf die Schriftgröße des Elements und `ex` auf die x-Höhe seiner Schrift.

| Einheit | Bezugsgröße                                                                                                                                                      |
| ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `cap`   | Versalhöhe (die nominelle Höhe von Großbuchstaben) der Schrift des Elements.                                                                                     |
| `ch`    | Durchschnittliche Zeichenbreite eines schmalen Glyphen in der Schrift des Elements, repräsentiert durch die Glyphe „0“ (NULL, U+0030).                           |
| `em`    | Schriftgröße des Elements.                                                                                                                                       |
| `ex`    | x-Höhe der Schrift des Elements.                                                                                                                                 |
| `ic`    | Durchschnittliche Zeichenbreite eines Glyphen voller Breite in der Schrift des Elements, repräsentiert durch die Glyphe „水“ (CJK-Ideogramm für Wasser, U+6C34). |
| `lh`    | Zeilenhöhe des Elements.                                                                                                                                         |

#### Auf die Schrift des Wurzelelements bezogene Längen

Diese Längen geben eine Länge im Verhältnis zum [Wurzelelement](/de/docs/Web/CSS/Reference/Selectors/:root) an, von dem das Element abstammt, beispielsweise {{HTMLElement("HTML")}} oder {{SVGElement("SVG")}}.
Beispielsweise bezieht sich `rem` auf die Schriftgröße des Wurzelelements und `rex` auf die x-Höhe seiner Schrift.

| Einheit | Bezugsgröße                                                                                                                                                            |
| ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `rcap`  | Versalhöhe (die nominelle Höhe von Großbuchstaben) der Schrift des Wurzelelements.                                                                                     |
| `rch`   | Durchschnittliche Zeichenbreite eines schmalen Glyphen in der Schrift des Wurzelelements, repräsentiert durch die Glyphe „0“ (NULL, U+0030).                           |
| `rem`   | Schriftgröße des Wurzelelements.                                                                                                                                       |
| `rex`   | x-Höhe der Schrift des Wurzelelements.                                                                                                                                 |
| `ric`   | Durchschnittliche Zeichenbreite eines Glyphen voller Breite in der Schrift des Wurzelelements, repräsentiert durch die Glyphe „水“ (CJK-Ideogramm für Wasser, U+6C34). |
| `rlh`   | Zeilenhöhe des Wurzelelements.                                                                                                                                         |

#### Viewport-Einheiten

Längen in Viewport-Einheiten geben eine Länge im Verhältnis zu den Abmessungen des {{Glossary("Viewport", "Viewports")}} an.
Beispielsweise bezieht sich `vw` auf die Breite und `vh` auf die Höhe des Viewports.

| Einheit | Bezugsgröße                                                                                                      |
| ------- | ---------------------------------------------------------------------------------------------------------------- |
| `dvh`   | 1 % der Höhe des [dynamischen](/de/docs/Web/CSS/Reference/Values/length#dynamic_viewport_units) Viewports.       |
| `dvw`   | 1 % der Breite des [dynamischen](/de/docs/Web/CSS/Reference/Values/length#dynamic_viewport_units) Viewports.     |
| `lvh`   | 1 % der Höhe des [großen](/de/docs/Web/CSS/Reference/Values/length#large_viewport_units) Viewports.              |
| `lvw`   | 1 % der Breite des [großen](/de/docs/Web/CSS/Reference/Values/length#large_viewport_units) Viewports.            |
| `svh`   | 1 % der Höhe des [kleinen](/de/docs/Web/CSS/Reference/Values/length#small_viewport_units) Viewports.             |
| `svw`   | 1 % der Breite des [kleinen](/de/docs/Web/CSS/Reference/Values/length#small_viewport_units) Viewports.           |
| `vb`    | 1 % der Größe des Viewports entlang der {{Glossary("Flow_relative_values", "Blockachse")}} des Wurzelelements.   |
| `vh`    | 1 % der Höhe des Viewports.                                                                                      |
| `vi`    | 1 % der Größe des Viewports entlang der {{Glossary("Flow_relative_values", "Inline-Achse")}} des Wurzelelements. |
| `vmax`  | 1 % der größeren Abmessung des Viewports.                                                                        |
| `vmin`  | 1 % der kleineren Abmessung des Viewports.                                                                       |
| `vw`    | 1 % der Breite des Viewports.                                                                                    |

#### Container-Einheiten

Längeneinheiten für Container-Abfragen geben eine Länge im Verhältnis zu den Abmessungen eines [Abfrage-Containers](/de/docs/Web/CSS/Guides/Containment/Container_queries) an.
Beispielsweise bezieht sich `cqw` auf die Breite und `cqh` auf die Höhe des Abfrage-Containers.

| Einheit | Bezugsgröße                                   |
| ------- | --------------------------------------------- |
| `cqb`   | 1 % der Blockgröße eines Abfrage-Containers   |
| `cqh`   | 1 % der Höhe eines Abfrage-Containers         |
| `cqi`   | 1 % der Inline-Größe eines Abfrage-Containers |
| `cqmax` | Der größere Wert von `cqi` und `cqb`          |
| `cqmin` | Der kleinere Wert von `cqi` und `cqb`         |
| `cqw`   | 1 % der Breite eines Abfrage-Containers       |

### Absolute Längeneinheiten

Absolute Längeneinheiten sind an eine physische Länge gebunden: einen Zoll oder einen Zentimeter. Viele dieser Einheiten sind daher nützlicher, wenn die Ausgabe auf einem Medium mit fester Größe erfolgt, beispielsweise im Druck. So entspricht `mm` einem physischen Millimeter, also einem Zehntel Zentimeter.

| Einheit | Name              | Entspricht          |
| ------- | ----------------- | ------------------- |
| `cm`    | Zentimeter        | 1cm = 96px/2.54     |
| `in`    | Zoll              | 1in = 2.54cm = 96px |
| `mm`    | Millimeter        | 1mm = 1/10 von 1cm  |
| `pc`    | Pica              | 1pc = 1/6 von 1in   |
| `pt`    | Punkt             | 1pt = 1/72 von 1in  |
| `px`    | Pixel             | 1px = 1/96 von 1in  |
| `Q`     | Viertelmillimeter | 1Q = 1/40 von 1cm   |

Bei einem Längenwert von `0` ist keine Einheitenkennung erforderlich. Andernfalls ist sie erforderlich. Bei ihr wird nicht zwischen Groß- und Kleinschreibung unterschieden, und sie muss unmittelbar auf den numerischen Teil des Werts folgen, ohne Leerzeichen dazwischen.

#### Winkeleinheiten

Winkelwerte werden durch den Typ {{cssxref("angle")}} dargestellt. Folgende Werte sind zulässig:

| Einheit | Name      | Beschreibung                              |
| ------- | --------- | ----------------------------------------- |
| `deg`   | Grad      | Ein Vollkreis hat 360 Grad.               |
| `grad`  | Neugrad   | Ein Vollkreis hat 400 Neugrad.            |
| `rad`   | Radiant   | Ein Vollkreis hat 2π Radiant.             |
| `turn`  | Umdrehung | Ein Vollkreis entspricht einer Umdrehung. |

#### Zeiteinheiten

Zeitwerte werden durch den Typ {{cssxref("&lt;time&gt;")}} dargestellt. Bei einem Zeitwert ist die Einheitenkennung `s` oder `ms` erforderlich. Folgende Werte sind zulässig:

| Einheit | Name          | Beschreibung                          |
| ------- | ------------- | ------------------------------------- |
| `ms`    | Millisekunden | Eine Sekunde hat 1.000 Millisekunden. |
| `s`     | Sekunden      |                                       |

#### Frequenzeinheiten

Frequenzwerte werden durch den Typ {{cssxref("&lt;frequency&gt;")}} dargestellt. Folgende Werte sind zulässig:

| Einheit | Name      | Beschreibung                                   |
| ------- | --------- | ---------------------------------------------- |
| `Hz`    | Hertz     | Gibt die Anzahl der Ereignisse pro Sekunde an. |
| `kHz`   | Kilohertz | Ein Kilohertz entspricht 1000 Hertz.           |

`1Hz`, das auch als `1hz` oder `1HZ` geschrieben werden kann, entspricht einem Zyklus pro Sekunde.

#### Flex-Einheiten

Flex-Einheiten werden durch den Typ {{cssxref("&lt;flex&gt;")}} dargestellt. Folgender Wert ist zulässig:

| Einheit | Name | Beschreibung                                                    |
| ------- | ---- | --------------------------------------------------------------- |
| `fr`    | Flex | Stellt eine flexible Länge innerhalb eines Grid-Containers dar. |

#### Auflösungseinheiten

Auflösungseinheiten werden durch den Typ {{cssxref("resolution")}} dargestellt. Sie beschreiben die Größe eines einzelnen Punkts in einer grafischen Darstellung, etwa auf einem Bildschirm, indem sie angeben, wie viele solcher Punkte auf einen CSS-Zoll, -Zentimeter oder -Pixel entfallen. Folgende Werte sind zulässig:

| Einheit     | Beschreibung             |
| ----------- | ------------------------ |
| `dpcm`      | Punkte pro Zentimeter.   |
| `dpi`       | Punkte pro Zoll.         |
| `dppx`, `x` | Punkte pro `px`-Einheit. |

### Prozentwerte

Ein {{cssxref("&lt;percentage&gt;")}}-Wert stellt einen Anteil eines anderen Werts dar.

Prozentwerte beziehen sich immer auf eine andere Größe, beispielsweise eine Länge. Jede Eigenschaft, die Prozentwerte zulässt, legt auch fest, auf welche Größe sich der Prozentwert bezieht. Diese Größe kann der Wert einer anderen Eigenschaft desselben Elements, der Wert einer Eigenschaft eines Vorfahrenelements, eine Abmessung des umschließenden Blocks oder etwas anderes sein.

Wenn Sie beispielsweise die {{cssxref("width")}} einer Box als Prozentwert angeben, bezieht sich dieser auf die berechnete Breite des Elternelements der Box:

```css
.box {
  width: 50%;
}
```

## Prozentwerte und Dimensionen kombinieren

Manche Eigenschaften akzeptieren eine Dimension, die einem von zwei Typen entsprechen kann, beispielsweise **entweder** `<length>` **oder** `<percentage>`. In diesem Fall wird der zulässige Wert in der Spezifikation als kombinierter Typ angegeben, beispielsweise {{cssxref("&lt;length-percentage&gt;")}}. Weitere mögliche Kombinationen sind:

- {{cssxref("&lt;frequency-percentage&gt;")}}
- {{cssxref("&lt;angle-percentage&gt;")}}
- {{cssxref("&lt;time-percentage&gt;")}}

## Spezielle Datentypen (in anderen Spezifikationen definiert)

- {{cssxref("&lt;color&gt;")}}
- {{cssxref("image")}}
- {{cssxref("&lt;position&gt;")}}

### Farbe

Der Wert {{cssxref("&lt;color&gt;")}} gibt die Farbe eines Merkmals eines Elements an, beispielsweise seine Hintergrundfarbe. Er ist im [CSS-Color-Modul](https://drafts.csswg.org/css-color-3/) definiert.

### Bild

Der Wert {{cssxref("image")}} beschreibt die verschiedenen Bildtypen, die in CSS verwendet werden können. Er ist im [Modul CSS Image Values and Replaced Content](https://drafts.csswg.org/css-images-4/) definiert.

### Position

Der Typ {{cssxref("&lt;position&gt;")}} definiert die zweidimensionale Positionierung eines Objekts innerhalb eines Positionierungsbereichs, beispielsweise eines Hintergrundbilds in einem Container. Dieser Typ wird als {{cssxref("background-position")}} interpretiert und ist daher in der [Spezifikation CSS Backgrounds and Borders](https://drafts.csswg.org/css-backgrounds/) beschrieben.

## Funktionale Notation

- {{cssxref("calc()")}}
- {{cssxref("min()")}}
- {{cssxref("max()")}}
- {{cssxref("minmax()")}}
- {{cssxref("clamp()")}}
- {{cssxref("attr()")}}

Die [funktionale Notation](/de/docs/Web/CSS/Reference/Values/Functions) ist eine Art von Wert, mit der sich komplexere Typen darstellen oder besondere Verarbeitungen durch CSS auslösen lassen. Die Syntax beginnt mit dem Funktionsnamen, unmittelbar gefolgt von einer öffnenden Klammer `(`, den Argumenten und einer schließenden Klammer `)`. Funktionen können mehrere Argumente annehmen, die ähnlich wie ein CSS-Eigenschaftswert formatiert werden.

Leerraum innerhalb der Klammern ist zulässig, aber optional. (Beachten Sie jedoch die Hinweise zu Leerraum auf den Seiten zu den Funktionen `min()`, `max()`, `minmax()` und `clamp()`.)

Einige ältere funktionale Notationen, etwa die ältere Syntax für `rgb()`, `rgba()`, `hsl()` und `hsla()`, verwendeten Kommas. Im Allgemeinen werden Kommas jedoch nur verwendet, um Einträge in einer Liste voneinander zu trennen. Wenn ein Komma Argumente trennt, ist Leerraum davor und danach optional.

Die Spezifikation definiert außerdem die Funktion `toggle()`. Sie wurde bisher nirgends implementiert.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Textuelle Datentypen](/de/docs/Web/CSS/Guides/Values_and_units/Textual_data_types)
- [CSS-Datentypen](/de/docs/Web/CSS/Reference/Values/Data_types)
- Modul [CSS-Werte und -Einheiten](/de/docs/Web/CSS/Guides/Values_and_units)
- [Lernen: Werte und Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units)
