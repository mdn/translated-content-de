---
title: Numerische Datentypen
slug: Web/CSS/CSS_Values_and_Units/Numeric_data_types
l10n:
  sourceCommit: c4c42a1573a65a808f085999a4d8d97199e142d1
---

{{CSSRef}}

Jede CSS-Deklaration besteht aus einem Paar von Eigenschaft und Wert. Der Wert kann je nach Eigenschaft verschiedene Datentypen umfassen, z.B. eine einzelne Zahl, ein Schlüsselwort, eine Funktion oder eine Kombination unterschiedlicher Typen; einige Werte haben Einheiten, während andere keine haben. Zu den numerischen Datentypen gehören {{cssxref("&lt;integer&gt;")}}, {{cssxref("&lt;number&gt;")}}, {{cssxref("&lt;dimension&gt;")}} und {{cssxref("&lt;percentage&gt;")}}-Werte. Dieser Leitfaden gibt einen Überblick über numerische Datentypen. Für detailliertere Informationen siehe die Seite für jeden Werttyp.

## Ganzzahlen

Eine Ganzzahl ist eine oder mehrere Dezimalziffern, `0` bis `9`, wie z.B. `1024` oder `-55`. Einer Ganzzahl kann ein `+` oder `-` Symbol ohne Leerzeichen zwischen dem Symbol und der Ganzzahl vorangestellt sein.

## Zahlen

Ein {{cssxref("&lt;number&gt;")}} stellt eine reelle Zahl dar, die möglicherweise einen Dezimalpunkt mit einem Bruchanteil enthält, z.B. `0.255`, `128` oder `-1.2`. Zahlen können auch mit einem `+` oder `-` Symbol versehen werden.

## Dimensionen

Ein {{cssxref("&lt;dimension&gt;")}} ist ein `<number>` mit einer angehängten Einheit, z.B. `45deg`, `100ms` oder `10px`. Der angehängte Einheit-Identifikator ist nicht case-sensitiv. Es gibt nie ein Leerzeichen oder andere Zeichen zwischen der Zahl und dem Einheit-Identifikator: z.B. `1 cm` ist nicht gültig.

CSS verwendet Dimensionen, um Folgendes anzugeben:

- {{cssxref("&lt;length&gt;")}} (Abstandseinheiten)
- {{cssxref("&lt;angle&gt;")}}
- {{cssxref("&lt;time&gt;")}}
- {{cssxref("&lt;frequency&gt;")}}
- {{cssxref("&lt;flex&gt;")}}
- {{cssxref("&lt;resolution&gt;")}}

Diese werden alle in den folgenden Unterabschnitten behandelt.

### Abstandseinheiten

Wo eine Abstandseinheit, auch bekannt als Länge, als Wert für eine Eigenschaft erlaubt ist, wird dies als der {{cssxref("&lt;length&gt;")}} Typ beschrieben. In CSS gibt es zwei Arten von Längen: relative und absolute. Relative Längeneinheiten geben eine Länge in Relation zu etwas anderem an.

Es gibt zwei Arten von relativen Längen: schriftspezifische Längen und Längen in Bezug auf die Ansichtsfensterprozentzahl. Diese kommen jeweils in zwei Typen. Schriftspezifische Längeneinheiten sind entweder lokal schriftspezifisch oder Wurzel schriftspezifisch. Ansichtsfensterprozentlängen sind entweder relativ zur Höhe oder Breite des Ansichtsfensters oder, wie im [CSS Containment-Modul](/de/docs/Web/CSS/CSS_containment) definiert, relativ zu einem [Container](/de/docs/Web/CSS/CSS_containment/Container_queries#container_query_length_units).

#### Lokale schriftspezifische Längen

Lokale schriftspezifische Längen sind relativ zur "lokalen" Schriftgröße oder Zeilenhöhe und spezifizieren eine Länge in Relation zu einer berechneten Größe eines Merkmals des [Elements](/de/docs/Web/HTML/Element) selbst oder relativ zum geerbten Wert des Elements im Falle eines zirkulären Bezugs, wie z.B. der `em` Wert für eine {{cssxref("font-size")}} Eigenschaft oder ein `lh` Wert für eine {{cssxref("line-height")}} Eigenschaft. Zum Beispiel ist `em` relativ zur Schriftgröße des Elements und `ex` relativ zur x-Höhe der Schrift des Elements.

| Einheit | Relativ zu                                                                                                                                                  |
| ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `cap`   | Großbuchstabenhöhe (die nominelle Höhe von Großbuchstaben) der Schrift des Elements.                                                                        |
| `ch`    | Durchschnittlicher Zeichenabstand eines schmalen Glyphen in der Schrift des Elements, repräsentiert durch das "0" (NULL, U+0030) Glyph.                     |
| `em`    | Schriftgröße der Schrift des Elements.                                                                                                                      |
| `ex`    | x-Höhe der Schrift des Elements.                                                                                                                            |
| `ic`    | Durchschnittlicher Zeichenabstand eines vollbreiten Glyphen in der Schrift des Elements, repräsentiert durch das "水" (CJK Wasser Ideograph, U+6C34) Glyph. |
| `lh`    | Zeilenhöhe des Elements.                                                                                                                                    |

#### Wurzel schriftspezifische Längen

Wurzel schriftspezifische Längen spezifizieren eine Länge in Relation zum [Wurzelelement](/de/docs/Web/CSS/:root) Vorfahren des Elements, wie spezifiert durch {{HTMLElement("HTML")}} oder {{SVGElement("SVG")}}.
Zum Beispiel ist `rem` relativ zur Schriftgröße des Wurzelelements und `rex` ist die x-Höhe der Schrift des Wurzelelements.

| Einheit | Relativ zu                                                                                                                                                        |
| ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `rcap`  | Großbuchstabenhöhe (die nominelle Höhe von Großbuchstaben) der Schrift des Wurzelelements.                                                                        |
| `rch`   | Durchschnittlicher Zeichenabstand eines schmalen Glyphen in der Schrift des Wurzelelements, repräsentiert durch das "0" (NULL, U+0030) Glyph.                     |
| `rem`   | Schriftgröße der Schrift des Wurzelelements.                                                                                                                      |
| `rex`   | x-Höhe der Schrift des Wurzelelements.                                                                                                                            |
| `ric`   | Durchschnittlicher Zeichenabstand eines vollbreiten Glyphen in der Schrift des Wurzelelements, repräsentiert durch das "水" (CJK Wasser Ideograph, U+6C34) Glyph. |
| `rlh`   | Zeilenhöhe des Wurzelelements.                                                                                                                                    |

#### Ansichtsfenstereinheiten

Ansichtsfenstereinheiten spezifizieren eine Länge relativ zu den Dimensionen des {{Glossary("Viewport", "Ansichtsfensters")}}. Zum Beispiel ist `vw` relativ zur Breite des Ansichtsfensters und `vh` ist relativ zur Höhe des Ansichtsfensters.

| Einheit | Relativ zu                                                                                                        |
| ------- | ----------------------------------------------------------------------------------------------------------------- |
| `dvh`   | 1% der [dynamischen](/de/docs/Web/CSS/length#dynamic_viewport_units) Höhe des Ansichtsfensters.                   |
| `dvw`   | 1% der [dynamischen](/de/docs/Web/CSS/length#dynamic_viewport_units) Breite des Ansichtsfensters.                 |
| `lvh`   | 1% der [großen](/de/docs/Web/CSS/length#large_viewport_units) Höhe des Ansichtsfensters.                          |
| `lvw`   | 1% der [großen](/de/docs/Web/CSS/length#large_viewport_units) Breite des Ansichtsfensters.                        |
| `svh`   | 1% der [kleinen](/de/docs/Web/CSS/length#small_viewport_units) Höhe des Ansichtsfensters.                         |
| `svw`   | 1% der [kleinen](/de/docs/Web/CSS/length#small_viewport_units) Breite des Ansichtsfensters.                       |
| `vb`    | 1% der Größe des Ansichtsfensters in der {{Glossary("Flow_relative_values", "Block-Achse")}} des Wurzelelements.  |
| `vh`    | 1% der Höhe des Ansichtsfensters.                                                                                 |
| `vi`    | 1% der Größe des Ansichtsfensters in der {{Glossary("Flow_relative_values", "Inline-Achse")}} des Wurzelelements. |
| `vmax`  | 1% der größeren Dimension des Ansichtsfensters.                                                                   |
| `vmin`  | 1% der kleineren Dimension des Ansichtsfensters.                                                                  |
| `vw`    | 1% der Breite des Ansichtsfensters.                                                                               |

#### Containereinheiten

Längeneinheiten mit Containerabfragen spezifizieren eine Länge relativ zu den Dimensionen eines [Abfragecontainers](/de/docs/Web/CSS/CSS_containment/Container_queries). Zum Beispiel ist `cqw` relativ zur Breite des Abfragecontainers und `cqh` ist relativ zur Höhe des Abfragecontainers.

| Einheit | Relativ zu                                 |
| ------- | ------------------------------------------ |
| `cqb`   | 1% der Blockgröße eines Abfragecontainers  |
| `cqh`   | 1% der Höhe eines Abfragecontainers        |
| `cqi`   | 1% der Inlinegröße eines Abfragecontainers |
| `cqmax` | Der größere Wert von `cqi` oder `cqb`      |
| `cqmin` | Der kleinere Wert von `cqi` oder `cqb`     |
| `cqw`   | 1% der Breite eines Abfragecontainers      |

### Absolute Längeneinheiten

Absolute Längeneinheiten sind fest an eine physische Länge gebunden: entweder einen Zoll oder einen Zentimeter. Viele dieser Einheiten sind daher nützlicher, wenn die Ausgabe ein Medium mit fester Größe ist, wie z.B. Druck. Zum Beispiel ist `mm` ein physischer Millimeter, ein Zehntel eines Zentimeters.

| Einheit | Name               | Entspricht          |
| ------- | ------------------ | ------------------- |
| `cm`    | Zentimeter         | 1cm = 96px/2.54     |
| `in`    | Zoll               | 1in = 2.54cm = 96px |
| `mm`    | Millimeter         | 1mm = 1/10 eines cm |
| `pc`    | Picas              | 1pc = 1/6 eines in  |
| `pt`    | Punkte             | 1pt = 1/72 eines in |
| `px`    | Pixel              | 1px = 1/96 eines in |
| `Q`     | Viertel-Millimeter | 1Q = 1/40 eines cm  |

Wenn ein Längenwert einbezogen wird und die Länge `0` ist, ist der Einheit-Identifikator nicht erforderlich. Andernfalls ist der Einheit-Identifikator erforderlich, ist nicht case-sensitiv und muss unmittelbar nach dem numerischen Teil des Wertes stehen, ohne Leerzeichen dazwischen.

#### Winkeleinheiten

Winkelwerte werden durch den Typ {{cssxref("&lt;angle&gt;")}} dargestellt und akzeptieren die folgenden Werte:

| Einheit | Name      | Beschreibung                     |
| ------- | --------- | -------------------------------- |
| `deg`   | Grad      | Ein voller Kreis hat 360 Grad.   |
| `grad`  | Gon       | Ein voller Kreis hat 400 Gon.    |
| `rad`   | Radiant   | Ein voller Kreis hat 2π Radiant. |
| `turn`  | Drehungen | Ein voller Kreis hat 1 Drehung.  |

#### Zeiteinheiten

Zeitwerte werden durch den Typ {{cssxref("&lt;time&gt;")}} dargestellt. Wenn ein Zeitwert eingebunden wird, ist der Einheit-Identifikator — `s` oder `ms` — erforderlich. Es akzeptiert die folgenden Werte.

| Einheit | Name          | Beschreibung                                  |
| ------- | ------------- | --------------------------------------------- |
| `ms`    | Millisekunden | Es gibt 1.000 Millisekunden in einer Sekunde. |
| `s`     | Sekunden      |                                               |

#### Frequenzeinheiten

Frequenzwerte werden durch den Typ {{cssxref("&lt;frequency&gt;")}} dargestellt. Es akzeptiert die folgenden Werte.

| Einheit | Name      | Beschreibung                                        |
| ------- | --------- | --------------------------------------------------- |
| `Hz`    | Hertz     | Repräsentiert die Anzahl der Vorkommen pro Sekunde. |
| `kHz`   | Kilohertz | Ein Kilohertz entspricht 1000 Hertz.                |

`1Hz`, das auch als `1hz` oder `1HZ` geschrieben werden kann, entspricht einem Zyklus pro Sekunde.

#### Flex-Einheiten

Flex-Einheiten werden durch den Typ {{cssxref("&lt;flex&gt;")}} dargestellt. Es akzeptiert den folgenden Wert.

| Einheit | Name | Beschreibung                                                      |
| ------- | ---- | ----------------------------------------------------------------- |
| `fr`    | Flex | Repräsentiert eine flexible Länge innerhalb eines Grid-Containers |

#### Auflösungseinheiten

Auflösungseinheiten werden durch den Typ {{cssxref("&lt;resolution&gt;")}} dargestellt. Sie repräsentieren die Größe eines einzelnen Punkts in einer grafischen Darstellung, wie z.B. einem Bildschirm, indem sie angeben, wie viele dieser Punkte in einen CSS-Zoll, Zentimeter oder Pixel passen. Es akzeptiert die folgenden Werte:

| Einheit     | Beschreibung           |
| ----------- | ---------------------- |
| `dpcm`      | Punkte pro Zentimeter. |
| `dpi`       | Punkte pro Zoll.       |
| `dppx`, `x` | Punkte pro px-Einheit. |

### Prozentsätze

Ein {{cssxref("&lt;percentage&gt;")}} ist ein Typ, der einen Bruchteil eines anderen Wertes darstellt.

Prozentwerte sind immer relativ zu einer anderen Größe, z.B. einer Länge. Jede Eigenschaft, die Prozentsätze zulässt, definiert auch die Größe, auf die sich der Prozentsatz bezieht. Diese Größe kann ein Wert einer anderen Eigenschaft desselben Elements sein, der Wert einer Eigenschaft eines Vorfahrenelements, eine Messung eines enthaltenen Blocks oder etwas anderes.

Zum Beispiel, wenn Sie die {{cssxref("width")}} einer Box als Prozentsatz angeben, bezieht sich dies auf den Prozentsatz der berechneten Breite der übergeordneten Box:

```css
.box {
  width: 50%;
}
```

## Mischen von Prozentsätzen und Dimensionen

Einige Eigenschaften akzeptieren eine Dimension, die entweder eine von zwei Typen sein könnte, zum Beispiel ein `<length>` **oder** ein `<percentage>`. In diesem Fall wird der zulässige Wert in der Spezifikation als kombiniert dargestellter Einheitentyp beschrieben, z.B. {{cssxref("&lt;length-percentage&gt;")}}. Andere mögliche Kombinationen sind wie folgt:

- {{cssxref("&lt;frequency-percentage&gt;")}}
- {{cssxref("&lt;angle-percentage&gt;")}}
- {{cssxref("&lt;time-percentage&gt;")}}

## Spezielle Datentypen (in anderen Spezifikationen definiert)

- {{cssxref("&lt;color&gt;")}}
- {{cssxref("&lt;image&gt;")}}
- {{cssxref("&lt;position&gt;")}}

### Farbe

Der {{cssxref("&lt;color&gt;")}} Wert spezifiziert die Farbe eines Elementmerkmals (z.B. seine Hintergrundfarbe) und ist im [CSS Farbmodul](https://drafts.csswg.org/css-color-3/) definiert.

### Bild

Der {{cssxref("&lt;image&gt;")}} Wert spezifiziert alle verschiedenen Bildtypen, die in CSS verwendet werden können, und ist im [CSS Bildwerte und ersetzte Inhalte Modul](https://www.w3.org/TR/css-images-4/) definiert.

### Position

Der {{cssxref("&lt;position&gt;")}} Typ definiert die 2D-Positionierung eines Objekts innerhalb eines Positionierungsbereichs, zum Beispiel eines Hintergrundbildes innerhalb eines Containers. Dieser Typ wird als {{cssxref("background-position")}} interpretiert und ist daher in der [CSS Hintergründe und Rahmen Spezifikation](https://www.w3.org/TR/css-backgrounds-3/) angegeben.

## Funktionale Notation

- {{cssxref("calc", "calc()")}}
- {{cssxref("min", "min()")}}
- {{cssxref("max", "max()")}}
- {{cssxref("minmax", "minmax()")}}
- {{cssxref("clamp", "clamp()")}}
- {{cssxref("toggle", "toggle()")}}
- {{cssxref("attr", "attr()")}}

[Funktionale Notation](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) ist eine Art von Wert, der komplexere Typen darstellen oder spezielle Verarbeitungen durch CSS auslösen kann. Die Syntax beginnt mit dem Namen der Funktion, unmittelbar gefolgt von einer linken Klammer `(`, gefolgt von dem/den Argument(en) der Notation und dann von einer rechten Klammer `)`. Funktionen können mehrere Argumente haben, die ähnlich wie ein CSS-Eigenschaftswert formatiert sind.

Leerzeichen sind erlaubt, aber optional innerhalb der Klammern. (Aber siehe Hinweise bezüglich Leerzeichen innerhalb von Seiten für `min()`, `max()`, `minmax()` und `clamp()` Funktionen.)

Einige ältere funktionale Notationen, wie die ältere Syntax für `rgb()`, `rgba()`, `hsl()` und `hsla()` verwendeten Kommas, aber Kommas werden im Allgemeinen nur verwendet, um Elemente in einer Liste zu trennen. Wenn ein Komma verwendet wird, um Argumente zu trennen, ist Leerzeichen vor und nach dem Komma optional.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Textuelle Datentypen](/de/docs/Web/CSS/CSS_Values_and_Units/Textual_data_types)
- [CSS-Datentypen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types)
- [CSS-Werte und -Einheiten](/de/docs/Web/CSS/CSS_Values_and_Units) Modul
- [Lernen: Werte und Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units)
