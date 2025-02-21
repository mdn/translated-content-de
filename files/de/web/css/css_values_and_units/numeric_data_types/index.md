---
title: Numerische Datentypen
slug: Web/CSS/CSS_Values_and_Units/Numeric_data_types
l10n:
  sourceCommit: 891bc513a3349040a16c4896197d6a3a910ca42b
---

{{CSSRef}}

Jede CSS-Deklaration besteht aus einem Eigenschaft/Wert-Paar. Der Wert kann je nach Eigenschaft verschiedene Datentypen enthalten, wie z.B. eine einzelne Zahl, ein Schlüsselwort, eine Funktion oder eine Kombination verschiedener Typen; einige Werte haben Einheiten, andere nicht. Numerische Datentypen umfassen {{cssxref("&lt;integer&gt;")}}, {{cssxref("&lt;number&gt;")}}, {{cssxref("&lt;dimension&gt;")}} und {{cssxref("&lt;percentage&gt;")}}-Werte. Dieser Leitfaden gibt einen Überblick über numerische Datentypen. Für detailliertere Informationen beziehen Sie sich auf die Seite für den jeweiligen Wertetyp.

## Ganzzahlen

Eine Ganzzahl besteht aus einem oder mehreren Dezimalziffern, `0` bis `9`, wie z.B. `1024` oder `-55`. Einer Ganzzahl kann ein `+`- oder `-`-Symbol vorangestellt sein, ohne Leerzeichen zwischen dem Symbol und der Ganzzahl.

## Zahlen

Ein {{cssxref("&lt;number&gt;")}} stellt eine reelle Zahl dar, die einen Dezimalpunkt mit einer Bruchkomponente haben kann oder auch nicht, wie z.B. `0.255`, `128` oder `-1.2`. Zahlen können ebenfalls durch ein `+`- oder `-`-Symbol eingeleitet werden.

## Dimensionen

Ein {{cssxref("&lt;dimension&gt;")}} ist eine `<number>` mit einer angehängten Einheit, wie zum Beispiel `45deg`, `100ms` oder `10px`. Der angehängte Einheitsbezeichner ist nicht zwischen Groß- und Kleinschreibung unterscheidend. Es gibt nie ein Leerzeichen oder andere Zeichen zwischen der Zahl und dem Einheitsbezeichner: das heißt `1 cm` ist nicht gültig.

CSS verwendet Dimensionen, um Folgendes anzugeben:

- {{cssxref("&lt;length&gt;")}} (Entfernungsmaßeinheiten)
- {{cssxref("&lt;angle&gt;")}}
- {{cssxref("&lt;time&gt;")}}
- {{cssxref("&lt;frequency&gt;")}}
- {{cssxref("&lt;flex&gt;")}}
- {{cssxref("&lt;resolution&gt;")}}

Diese werden alle in den Unterabschnitten unten behandelt.

### Entfernungsmaßeinheiten

Wenn eine Entfernungsmaßeinheit, auch bekannt als Länge, als Wert für eine Eigenschaft zulässig ist, wird dies als der Typ {{cssxref("&lt;length&gt;")}} beschrieben. Es gibt zwei Arten von Längen in CSS: relative und absolute. Relative Längeneinheiten geben eine Länge im Verhältnis zu etwas anderem an.

Es gibt zwei Arten von relativen Längen: schriftbezogene Längen und viewportbezogene Prozentlängen. Diese kommen jeweils in zwei Typen vor. Schriftbezogene Längeneinheiten sind entweder lokal schriftbezogen oder stammbezogen. Viewport-Prozentlängen sind entweder relativ zur Höhe oder Breite des Viewports oder, wie im [CSS Containment-Modul](/de/docs/Web/CSS/CSS_containment) definiert, relativ zu einem [Container](/de/docs/Web/CSS/CSS_containment/Container_queries#container_query_length_units).

#### Lokale schriftbezogene Längen

Lokale schriftbezogene Längen sind relativ zur "lokalen" Schriftgröße oder Zeilenhöhe und geben eine Länge im Verhältnis zu einer berechneten Größe eines Merkmals des [Elements](/de/docs/Web/HTML/Element) selbst an oder relativ zum vererbten Wert des Elements im Falle einer zirkulären Referenz, wie der `em`-Wert für eine {{cssxref("font-size")}}-Eigenschaft oder ein `lh`-Wert für eine {{cssxref("line-height")}}-Eigenschaft. Zum Beispiel ist `em` relativ zur Schriftgröße des Elements und `ex` relativ zur x-Höhe der Schrift des Elements.

| Einheit | Relativ zu                                                                                                                                               |
| ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `cap`   | Großbuchstabenhöhe (die nominelle Höhe der Großbuchstaben) der Schrift des Elements.                                                                     |
| `ch`    | Durchschnittlicher Zeichenabstand eines schmalen Glyphen in der Schrift des Elements, dargestellt durch das "0" (NULL, U+0030) Glyph.                    |
| `em`    | Schriftgröße der Schrift des Elements.                                                                                                                   |
| `ex`    | x-Höhe der Schrift des Elements.                                                                                                                         |
| `ic`    | Durchschnittlicher Zeichenabstand eines Vollbreitenglyphen in der Schrift des Elements, dargestellt durch das "水" (CJK Wasser-Ideogramm, U+6C34) Glyph. |
| `lh`    | Zeilenhöhe des Elements.                                                                                                                                 |

#### Stammbezogene schriftbezogene Längen

Stammbezogene schriftbezogene Längen geben eine Länge im Verhältnis zum [Stammelement](/de/docs/Web/CSS/:root)-Vorfahren des Elements an, wie z.B. {{HTMLElement("HTML")}} oder {{SVGElement("SVG")}}.
Zum Beispiel ist `rem` relativ zur Schriftgröße des Stammelements und `rex` ist die x-Höhe der Schrift des Stammelements.

| Einheit | Relativ zu                                                                                                                                                    |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `rcap`  | Großbuchstabenhöhe (die nominelle Höhe der Großbuchstaben) der Schrift des Stammelements.                                                                     |
| `rch`   | Durchschnittlicher Zeichenabstand eines schmalen Glyphen in der Schrift des Stammelements, dargestellt durch das "0" (NULL, U+0030) Glyph.                    |
| `rem`   | Schriftgröße der Schrift des Stammelements.                                                                                                                   |
| `rex`   | x-Höhe der Schrift des Stammelements.                                                                                                                         |
| `ric`   | Durchschnittlicher Zeichenabstand eines Vollbreitenglyphen in der Schrift des Stammelements, dargestellt durch das "水" (CJK Wasser-Ideogramm, U+6C34) Glyph. |
| `rlh`   | Zeilenhöhe des Stammelements.                                                                                                                                 |

#### Viewport-Einheiten

Viewport-Einheitenlängen spezifizieren eine Länge relativ zu den Abmessungen des {{Glossary("Viewport", "Viewports")}}.
Zum Beispiel ist `vw` relativ zur Breite des Viewports und `vh` relativ zur Höhe des Viewports.

| Einheit | Relativ zu                                                                                                |
| ------- | --------------------------------------------------------------------------------------------------------- |
| `dvh`   | 1% der [dynamischen](/de/docs/Web/CSS/length#dynamic) Viewport-Höhe.                                      |
| `dvw`   | 1% der [dynamischen](/de/docs/Web/CSS/length#dynamic) Viewport-Breite.                                    |
| `lvh`   | 1% der [großen](/de/docs/Web/CSS/length#large) Viewport-Höhe.                                             |
| `lvw`   | 1% der [großen](/de/docs/Web/CSS/length#large) Viewport-Breite.                                           |
| `svh`   | 1% der [kleinen](/de/docs/Web/CSS/length#small) Viewport-Höhe.                                            |
| `svw`   | 1% der [kleinen](/de/docs/Web/CSS/length#small) Viewport-Breite.                                          |
| `vb`    | 1% der Größe des Viewports in der {{Glossary("Flow_relative_values", "Blockachse")}} des Stammelements.   |
| `vh`    | 1% der Höhe des Viewports.                                                                                |
| `vi`    | 1% der Größe des Viewports in der {{Glossary("Flow_relative_values", "Inline-Achse")}} des Stammelements. |
| `vmax`  | 1% der größeren Dimension des Viewports.                                                                  |
| `vmin`  | 1% der kleineren Dimension des Viewports.                                                                 |
| `vw`    | 1% der Breite des Viewports.                                                                              |

#### Container-Einheiten

Container-Abfrage-Längeneinheiten spezifizieren eine Länge relativ zu den Abmessungen eines [Abfrage-Containers](/de/docs/Web/CSS/CSS_containment/Container_queries).
Zum Beispiel ist `cqw` relativ zur Breite des Anfragencontainers und `cqh` relativ zur Höhe des Anfragencontainers.

| Einheit | Relativ zu                                   |
| ------- | -------------------------------------------- |
| `cqb`   | 1% der Blockgröße eines Abfrage-Containers   |
| `cqh`   | 1% der Höhe eines Abfrage-Containers         |
| `cqi`   | 1% der Inline-Größe eines Abfrage-Containers |
| `cqmax` | Der größere Wert von `cqi` oder `cqb`        |
| `cqmin` | Der kleinere Wert von `cqi` oder `cqb`       |
| `cqw`   | 1% der Breite eines Abfrage-Containers       |

### Absolute Längeneinheiten

Absolute Längeneinheiten sind an eine physische Länge gebunden: entweder ein Zoll oder ein Zentimeter. Viele dieser Einheiten sind daher nützlicher, wenn die Ausgabe ein festes Größenmedium ist, wie z.B. Druck. Zum Beispiel ist `mm` ein physischer Millimeter, 1/10 eines Zentimeters.

| Einheit | Name              | Entspricht          |
| ------- | ----------------- | ------------------- |
| `cm`    | Zentimeter        | 1cm = 96px/2.54     |
| `in`    | Zoll              | 1in = 2.54cm = 96px |
| `mm`    | Millimeter        | 1mm = 1/10 von 1cm  |
| `pc`    | Picas             | 1pc = 1/6 von 1in   |
| `pt`    | Punkte            | 1pt = 1/72 von 1in  |
| `px`    | Pixel             | 1px = 1/96 von 1in  |
| `Q`     | Viertelmillimeter | 1Q = 1/40 von 1cm   |

Wenn ein Längenwert angegeben wird, ist das Einheitszeichen nicht erforderlich, wenn die Länge `0` beträgt. Andernfalls ist das Einheitszeichen erforderlich, ist nicht zwischen Groß- und Kleinschreibung unterscheidend und muss unmittelbar nach dem numerischen Teil des Wertes kommen, ohne dazwischenliegenden Raum.

#### Winkeleinheiten

Werte für Winkel werden durch den Typ {{cssxref("&lt;angle&gt;")}} dargestellt und akzeptiert die folgenden Werte:

| Einheit | Name    | Beschreibung                           |
| ------- | ------- | -------------------------------------- |
| `deg`   | Grad    | Es gibt 360 Grad in einem Vollkreis.   |
| `grad`  | Gon     | Es gibt 400 Gon in einem Vollkreis.    |
| `rad`   | Radiant | Es gibt 2π Radiant in einem Vollkreis. |
| `turn`  | Drehung | Es gibt 1 Drehung in einem Vollkreis.  |

#### Zeiteinheiten

Zeitwerte werden durch den Typ {{cssxref("&lt;time&gt;")}} dargestellt. Wenn ein Zeitwert angegeben wird, ist das Einheitszeichen — das `s` oder `ms` — erforderlich. Es akzeptiert die folgenden Werte.

| Einheit | Name          | Beschreibung                                  |
| ------- | ------------- | --------------------------------------------- |
| `ms`    | Millisekunden | Es gibt 1.000 Millisekunden in einer Sekunde. |
| `s`     | Sekunden      |                                               |

#### Frequenzeinheiten

Frequenzwerte werden durch den Typ {{cssxref("&lt;frequency&gt;")}} dargestellt. Es akzeptiert die folgenden Werte.

| Einheit | Name      | Beschreibung                                         |
| ------- | --------- | ---------------------------------------------------- |
| `Hz`    | Hertz     | Repräsentiert die Anzahl der Ereignisse pro Sekunde. |
| `kHz`   | KiloHertz | Ein KiloHertz sind 1000 Hertz.                       |

`1Hz`, das auch als `1hz` oder `1HZ` geschrieben werden kann, entspricht einem Zyklus pro Sekunde.

#### Flex-Einheiten

Flex-Einheiten werden durch den Typ {{cssxref("&lt;flex&gt;")}} dargestellt. Es akzeptiert den folgenden Wert.

| Einheit | Name | Beschreibung                                                      |
| ------- | ---- | ----------------------------------------------------------------- |
| `fr`    | Flex | Repräsentiert eine flexible Länge innerhalb eines Grid-Containers |

#### Auflösungseinheiten

Auflösungseinheiten werden durch den Typ {{cssxref("&lt;resolution&gt;")}} dargestellt. Sie repräsentieren die Größe eines einzelnen Punkts in einer grafischen Darstellung, z.B. auf einem Bildschirm, indem sie angeben, wie viele dieser Punkte in einen CSS-Zoll, Zentimeter oder Pixel passen. Es akzeptiert die folgenden Werte:

| Einheit     | Beschreibung           |
| ----------- | ---------------------- |
| `dpcm`      | Punkte pro Zentimeter. |
| `dpi`       | Punkte pro Zoll.       |
| `dppx`, `x` | Punkte pro px-Einheit. |

### Prozentsätze

Ein {{cssxref("&lt;percentage&gt;")}} ist ein Typ, der einen Bruchteil eines anderen Wertes darstellt.

Prozentwerte sind immer relativ zu einer anderen Menge, zum Beispiel einer Länge. Jede Eigenschaft, die Prozentsätze zulässt, definiert auch die Menge, auf die sich der Prozentsatz bezieht. Diese Menge kann ein Wert einer anderen Eigenschaft desselben Elements, der Wert einer Eigenschaft eines Vorfahrenelements, eine Messung eines begrenzenden Blocks oder etwas anderes sein.

Ein Beispiel: Wenn Sie die {{cssxref("width")}} einer Box als Prozentsatz angeben, bezieht sie sich auf den Prozentsatz der berechneten Breite des übergeordneten Elements der Box:

```css
.box {
  width: 50%;
}
```

## Kombination von Prozentsätzen und Dimensionen

Einige Eigenschaften akzeptieren eine Dimension, die entweder einer von zwei Typen sein könnte, zum Beispiel eine `<length>` **oder** ein `<percentage>`. In diesem Fall ist der erlaubte Wert in der Spezifikation als kombinierte Einheit detailliert beschrieben, z.B. {{cssxref("&lt;length-percentage&gt;")}}. Andere mögliche Kombinationen sind wie folgt:

- {{cssxref("&lt;frequency-percentage&gt;")}}
- {{cssxref("&lt;angle-percentage&gt;")}}
- {{cssxref("&lt;time-percentage&gt;")}}

## Spezielle Datentypen (in anderen Spezifikationen definiert)

- {{cssxref("&lt;color&gt;")}}
- {{cssxref("&lt;image&gt;")}}
- {{cssxref("&lt;position&gt;")}}

### Farbe

Der {{cssxref("&lt;color&gt;")}}-Wert spezifiziert die Farbe eines Elementmerkmals (z.B. dessen Hintergrundfarbe) und wird im [CSS-Farbmodul](https://drafts.csswg.org/css-color-3/) definiert.

### Bild

Der {{cssxref("&lt;image&gt;")}}-Wert spezifiziert alle verschiedenen Bildtypen, die in CSS verwendet werden können, und wird im [CSS-Bildwerte und ersetzte Inhalte Modul](https://www.w3.org/TR/css-images-4/) definiert.

### Position

Der {{cssxref("&lt;position&gt;")}}-Typ definiert die 2D-Positionierung eines Objekts in einem Positionierungsbereich, z.B. ein Hintergrundbild in einem Container. Dieser Typ wird als {{cssxref("background-position")}} interpretiert und daher in der [CSS-Hintergründe und Rahmen Spezifikation](https://www.w3.org/TR/css-backgrounds-3/) spezifiziert.

## Funktionale Notation

- {{cssxref("calc", "calc()")}}
- {{cssxref("min", "min()")}}
- {{cssxref("max", "max()")}}
- {{cssxref("minmax", "minmax()")}}
- {{cssxref("clamp", "clamp()")}}
- {{cssxref("toggle", "toggle()")}}
- {{cssxref("attr", "attr()")}}

[Funktionale Notation](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) ist ein Typ von Wert, der komplexere Typen darstellen oder spezielle Verarbeitung durch CSS aufrufen kann. Die Syntax beginnt mit dem Namen der Funktion, gefolgt von einer linken Klammer `(`, gefolgt von den Argument(en) der Notation und einer rechten Klammer `)`. Funktionen können mehrere Argumente annehmen, die ähnlich wie ein CSS-Eigenschaftswert formatiert sind.

Leerzeichen sind erlaubt, aber optional innerhalb der Klammern. (Siehe jedoch Hinweise zu Leerzeichen auf den Seiten für `min()`, `max()`, `minmax()` und `clamp()` Funktionen.)

Einige ältere funktionale Notationen, wie die ältere Syntax für `rgb()`, `rgba()`, `hsl()` und `hsla()`, verwendeten Kommata, aber Kommata werden im Allgemeinen nur verwendet, um Elemente in einer Liste zu trennen. Wenn ein Komma verwendet wird, um Argumente zu trennen, ist ein Leerzeichen vor und nach dem Komma optional.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Textuelle Datentypen](/de/docs/Web/CSS/CSS_Values_and_Units/Textual_data_types)
- [CSS-Datentypen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types)
- [CSS-Werte und Einheiten](/de/docs/Web/CSS/CSS_Values_and_Units) Modul
- [Lernen: Werte und Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units)
