---
title: Numerische Datentypen
slug: Web/CSS/CSS_values_and_units/Numeric_data_types
l10n:
  sourceCommit: 70285e396b5c97675e90b85d573be42078e0168e
---

Jede CSS-Deklaration besteht aus einem Paar aus Eigenschaft und Wert. Der Wert kann je nach Eigenschaft verschiedene Datentypen umfassen, wie z.B. eine einzelne Zahl, ein Schlüsselwort, eine Funktion oder eine Kombination verschiedener Typen; einige Werte haben Einheiten, andere nicht. Numerische Datentypen umfassen {{cssxref("&lt;integer&gt;")}}, {{cssxref("&lt;number&gt;")}}, {{cssxref("&lt;dimension&gt;")}} und {{cssxref("&lt;percentage&gt;")}}. Dieser Leitfaden bietet einen Überblick über numerische Datentypen. Weitere detaillierte Informationen finden Sie auf der Seite zu jedem Werttyp.

## Ganzzahlen

Eine Ganzzahl ist eine oder mehrere Dezimalziffern, `0` bis `9`, wie `1024` oder `-55`. Einer Ganzzahl kann ein `+`- oder `-`-Symbol vorangestellt sein, ohne Leerzeichen zwischen dem Symbol und der Ganzzahl.

## Zahlen

Ein {{cssxref("&lt;number&gt;")}} stellt eine reelle Zahl dar, die einen Dezimalpunkt mit einem Bruchteil haben kann oder nicht, zum Beispiel `0.255`, `128` oder `-1.2`. Zahlen können ebenfalls ein `+` oder `-`-Symbol vorangestellt haben.

## Dimensionen

Eine {{cssxref("&lt;dimension&gt;")}} ist eine `<number>`, an die eine Einheit angehängt ist, zum Beispiel `45deg`, `100ms` oder `10px`. Die angehängte Einheit ist nicht abhängig von Groß- oder Kleinschreibung. Es gibt niemals ein Leerzeichen oder andere Zeichen zwischen der Zahl und der Einheit: d.h. `1 cm` ist nicht gültig.

CSS verwendet Dimensionen, um Folgendes zu spezifizieren:

- {{cssxref("&lt;length&gt;")}} (Entfernungseinheiten)
- {{cssxref("&lt;angle&gt;")}}
- {{cssxref("&lt;time&gt;")}}
- {{cssxref("&lt;frequency&gt;")}}
- {{cssxref("&lt;flex&gt;")}}
- {{cssxref("&lt;resolution&gt;")}}

Diese werden alle in den folgenden Unterabschnitten behandelt.

### Entfernungseinheiten

Wenn eine Entfernungseinheit, auch bekannt als Länge, als Wert für eine Eigenschaft erlaubt ist, wird dies als Typ {{cssxref("&lt;length&gt;")}} beschrieben. In CSS gibt es zwei Arten von Längen: relative und absolute. Relative Längeneinheiten geben eine Länge im Verhältnis zu etwas anderem an.

Es gibt zwei Arten von relativen Längen: schriftbezogene Längen und Ansichtsprozentsatzlängen. Diese beiden kommen in zwei Arten. Schriftbezogene Längeneinheiten sind entweder lokal schriftbezogen oder wurzelbezugene Schrift. Ansichtsprozentsatzlängen sind entweder relativ zur Höhe oder Breite der Ansicht oder, wie im [CSS Containment Module](/de/docs/Web/CSS/CSS_containment) definiert, relativ zu einem [Container](/de/docs/Web/CSS/CSS_containment/Container_queries#container_query_length_units).

#### Lokal schriftbezogene Längen

Lokal schriftbezogene Längen sind relativ zur "lokalen" Schriftgröße oder Zeilenhöhe und spezifizieren eine Länge im Verhältnis zu einer berechneten Größe eines Merkmals des [Elements](/de/docs/Web/HTML/Reference/Elements) selbst oder relativ zum geerbten Wert des Elements im Falle einer Kettenreferenz, wie der `em`-Wert für eine {{cssxref("font-size")}}-Eigenschaft oder ein `lh`-Wert für eine {{cssxref("line-height")}}-Eigenschaft.
Zum Beispiel ist `em` relativ zur Schriftgröße des Elements und `ex` relativ zur x-Höhe der Schrift des Elements.

| Einheit | Relativ zu                                                                                                                                                |
| ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `cap`   | Kappenhöhe (die nominale Höhe der Großbuchstaben) der Schrift des Elements.                                                                               |
| `ch`    | Durchschnittlicher Zeichenabstand eines schmalen Glyphe in der Schrift des Elements, dargestellt durch das "0" (Null, U+0030) Glyphe.                     |
| `em`    | Schriftgröße des Elements.                                                                                                                                |
| `ex`    | x-Höhe der Schrift des Elements.                                                                                                                          |
| `ic`    | Durchschnittlicher Zeichenabstand eines vollbreiten Glyphe in der Schrift des Elements, dargestellt durch das "水" (CJK Wasser-Ideogramm, U+6C34) Glyphe. |
| `lh`    | Zeilenhöhe des Elements.                                                                                                                                  |

#### Wurzel schriftbezogene Längen

Wurzel schriftbezogene Längen spezifizieren eine Länge im Verhältnis zum [Wurzelelement](/de/docs/Web/CSS/Reference/Selectors/:root) Vorfahre, wie {{HTMLElement("HTML")}} oder {{SVGElement("SVG")}}.
Zum Beispiel ist `rem` relativ zur Schriftgröße des Wurzelelements und `rex` ist die x-Höhe der Schrift des Wurzelelements.

| Einheit | Relativ zu                                                                                                                                                      |
| ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `rcap`  | Kappenhöhe (die nominale Höhe der Großbuchstaben) der Schrift des Wurzelelements.                                                                               |
| `rch`   | Durchschnittlicher Zeichenabstand eines schmalen Glyphe in der Schrift des Wurzelelements, dargestellt durch das "0" (Null, U+0030) Glyphe.                     |
| `rem`   | Schriftgröße des Wurzelelements.                                                                                                                                |
| `rex`   | x-Höhe der Schrift des Wurzelelements.                                                                                                                          |
| `ric`   | Durchschnittlicher Zeichenabstand eines vollbreiten Glyphe in der Schrift des Wurzelelements, dargestellt durch das "水" (CJK Wasser-Ideogramm, U+6C34) Glyphe. |
| `rlh`   | Zeilenhöhe des Wurzelelements.                                                                                                                                  |

#### Ansichtsport-Einheiten

Ansichtseinheitslängen geben eine Länge im Verhältnis zu den Dimensionen des {{Glossary("Viewport", "Ansichtsfensters")}} an.
Zum Beispiel ist `vw` relativ zur Breite des Ansichtsfensters und `vh` relativ zur Höhe des Ansichtsfensters.

| Einheit | Relativ zu                                                                                                       |
| ------- | ---------------------------------------------------------------------------------------------------------------- |
| `dvh`   | 1% der [dynamischen](/de/docs/Web/CSS/length#dynamic_viewport_units) Höhe des Ansichtsfensters.                  |
| `dvw`   | 1% der [dynamischen](/de/docs/Web/CSS/length#dynamic_viewport_units) Breite des Ansichtsfensters.                |
| `lvh`   | 1% der [großen](/de/docs/Web/CSS/length#large_viewport_units) Höhe des Ansichtsfensters.                         |
| `lvw`   | 1% der [großen](/de/docs/Web/CSS/length#large_viewport_units) Breite des Ansichtsfensters.                       |
| `svh`   | 1% der [kleinen](/de/docs/Web/CSS/length#small_viewport_units) Höhe des Ansichtsfensters.                        |
| `svw`   | 1% der [kleinen](/de/docs/Web/CSS/length#small_viewport_units) Breite des Ansichtsfensters.                      |
| `vb`    | 1% der Größe des Ansichtsfensters in der {{Glossary("Flow_relative_values", "Blockachse")}} des Wurzelelements.  |
| `vh`    | 1% der Höhe des Ansichtsfensters.                                                                                |
| `vi`    | 1% der Größe des Ansichtsfensters in der {{Glossary("Flow_relative_values", "Inlineachse")}} des Wurzelelements. |
| `vmax`  | 1% der größeren Dimension des Ansichtsfensters.                                                                  |
| `vmin`  | 1% der kleineren Dimension des Ansichtsfensters.                                                                 |
| `vw`    | 1% der Breite des Ansichtsfensters.                                                                              |

#### Container-Einheiten

Container-Abfragelängeneinheiten geben eine Länge im Verhältnis zu den Dimensionen eines [Abfragecontainers](/de/docs/Web/CSS/CSS_containment/Container_queries) an.
Zum Beispiel ist `cqw` relativ zur Breite des Abfragecontainers und `cqh` relativ zur Höhe des Abfragecontainers.

| Einheit | Relativ zu                               |
| ------- | ---------------------------------------- |
| `cqb`   | 1% der Blockgröße des Abfragecontainers  |
| `cqh`   | 1% der Höhe des Abfragecontainers        |
| `cqi`   | 1% der Inlinegröße des Abfragecontainers |
| `cqmax` | Der größere Wert von `cqi` oder `cqb`    |
| `cqmin` | Der kleinere Wert von `cqi` oder `cqb`   |
| `cqw`   | 1% der Breite des Abfragecontainers      |

### Absolute Längeneinheiten

Absolute Längeneinheiten sind an eine physische Länge gebunden: entweder ein Zoll oder ein Zentimeter. Viele dieser Einheiten sind daher nützlicher, wenn das Ergebnis ein Medium fester Größe ist, wie z.B. Druck. Zum Beispiel ist `mm` ein physischer Millimeter, 1/10 eines Zentimeters.

| Einheit | Name               | Entspricht             |
| ------- | ------------------ | ---------------------- |
| `cm`    | Zentimeter         | 1cm = 96px/2.54        |
| `in`    | Zoll               | 1in = 2.54cm = 96px    |
| `mm`    | Millimeter         | 1mm = 1/10 eines cm    |
| `pc`    | Picas              | 1pc = 1/6 eines Zolls  |
| `pt`    | Punkte             | 1pt = 1/72 eines Zolls |
| `px`    | Pixel              | 1px = 1/96 eines Zolls |
| `Q`     | Viertel-Millimeter | 1Q = 1/40 eines cm     |

Wenn ein Längenwert eingeschlossen ist, wenn die Länge `0` beträgt, ist die Einheit nicht erforderlich. Andernfalls ist die Einheit erforderlich, ist nicht abhängig von der Groß- oder Kleinschreibung und muss unmittelbar nach dem numerischen Teil des Wertes stehen, ohne Leerzeichen dazwischen.

#### Winkeleinheiten

Winkelwerte werden durch den Typ {{cssxref("&lt;angle&gt;")}} dargestellt und akzeptieren die folgenden Werte:

| Einheit | Name        | Beschreibung                              |
| ------- | ----------- | ----------------------------------------- |
| `deg`   | Grad        | Es gibt 360 Grad in einem Vollkreis.      |
| `grad`  | Gradianen   | Es gibt 400 Gradianen in einem Vollkreis. |
| `rad`   | Radianten   | Es gibt 2π Radianten in einem Vollkreis.  |
| `turn`  | Umdrehungen | Es gibt 1 Umdrehung in einem Vollkreis.   |

#### Zeiteinheiten

Zeitwerte werden durch den Typ {{cssxref("&lt;time&gt;")}} dargestellt. Wenn ein Zeitwert eingeschlossen ist, ist die Einheit — `s` oder `ms` — erforderlich. Es akzeptiert die folgenden Werte.

| Einheit | Name          | Beschreibung                                  |
| ------- | ------------- | --------------------------------------------- |
| `ms`    | Millisekunden | Eine Sekunde besteht aus 1.000 Millisekunden. |
| `s`     | Sekunden      |                                               |

#### Frequenzeinheiten

Frequenzwerte werden durch den Typ {{cssxref("&lt;frequency&gt;")}} dargestellt. Es akzeptiert die folgenden Werte.

| Einheit | Name      | Beschreibung                                     |
| ------- | --------- | ------------------------------------------------ |
| `Hz`    | Hertz     | Stellt die Anzahl der Vorkommen pro Sekunde dar. |
| `kHz`   | Kilohertz | Ein Kilohertz sind 1.000 Hertz.                  |

`1Hz`, das auch als `1hz` oder `1HZ` geschrieben werden kann, ist ein Zyklus pro Sekunde.

#### Flex-Einheiten

Flex-Einheiten werden durch den Typ {{cssxref("&lt;flex&gt;")}} dargestellt. Es akzeptiert den folgenden Wert.

| Einheit | Name | Beschreibung                                                    |
| ------- | ---- | --------------------------------------------------------------- |
| `fr`    | Flex | Stellt eine flexible Länge innerhalb eines Rastercontainers dar |

#### Auflösungseinheiten

Auflösungseinheiten werden durch den Typ {{cssxref("&lt;resolution&gt;")}} dargestellt. Sie stellen die Größe eines einzelnen Punkts in einer grafischen Darstellung dar, wie z.B. einem Bildschirm, indem angegeben wird, wie viele dieser Punkte in einem CSS-Zoll, Zentimeter oder Pixel passen. Es akzeptiert die folgenden Werte:

| Einheit     | Beschreibung           |
| ----------- | ---------------------- |
| `dpcm`      | Punkte pro Zentimeter. |
| `dpi`       | Punkte pro Zoll.       |
| `dppx`, `x` | Punkte pro px-Einheit. |

### Prozentangaben

Ein {{cssxref("&lt;percentage&gt;")}} ist ein Typ, der einen Bruchteil eines anderen Wertes darstellt.

Prozentwerte sind immer relativ zu einer anderen Größe, zum Beispiel einer Länge. Jede Eigenschaft, die Prozentangaben erlaubt, definiert auch die Größe, auf die sich der Prozentsatz bezieht. Diese Größe kann der Wert einer anderen Eigenschaft des gleichen Elements, der Wert einer Eigenschaft eines Vorfahren-Elements, eine Messung eines enthaltenen Blocks oder etwas anderes sein.

Zum Beispiel, wenn Sie die {{cssxref("width")}} einer Box als Prozentsatz angeben, bezieht sich dies auf den Prozentsatz der berechneten Breite des Elternteils der Box:

```css
.box {
  width: 50%;
}
```

## Mischen von Prozenten und Dimensionen

Einige Eigenschaften erlauben eine Dimension, die entweder einer von zwei Typen sein kann, zum Beispiel eine `<length>` **oder** ein `<percentage>`. In diesem Fall wird der erlaubte Wert in der Spezifikation als Kombinations-Einheit detailliert, z.B. {{cssxref("&lt;length-percentage&gt;")}}. Andere mögliche Kombinationen sind wie folgt:

- {{cssxref("&lt;frequency-percentage&gt;")}}
- {{cssxref("&lt;angle-percentage&gt;")}}
- {{cssxref("&lt;time-percentage&gt;")}}

## Spezielle Datentypen (in anderen Spezifikationen definiert)

- {{cssxref("&lt;color&gt;")}}
- {{cssxref("&lt;image&gt;")}}
- {{cssxref("&lt;position&gt;")}}

### Farbe

Der {{cssxref("&lt;color&gt;")}}-Wert spezifiziert die Farbe eines Elementmerkmals (z.B. die Hintergrundfarbe) und ist im [CSS Color Module](https://drafts.csswg.org/css-color-3/) definiert.

### Bild

Der {{cssxref("&lt;image&gt;")}}-Wert spezifiziert alle verschiedenen Arten von Bildern, die in CSS verwendet werden können, und wird im [CSS Image Values and Replaced Content Module](https://drafts.csswg.org/css-images-4/) definiert.

### Position

Der {{cssxref("&lt;position&gt;")}}-Typ definiert die 2D-Positionierung eines Objekts innerhalb eines Positionierungsbereichs, zum Beispiel eines Hintergrundbildes in einem Container. Dieser Typ wird als {{cssxref("background-position")}} interpretiert und daher in der [CSS Backgrounds and Borders]-Spezifikation (https://drafts.csswg.org/css-backgrounds/) spezifiziert.

## Funktionale Notation

- {{cssxref("calc", "calc()")}}
- {{cssxref("min", "min()")}}
- {{cssxref("max", "max()")}}
- {{cssxref("minmax", "minmax()")}}
- {{cssxref("clamp", "clamp()")}}
- {{cssxref("attr", "attr()")}}

[Funktionale Notation](/de/docs/Web/CSS/CSS_values_and_units/CSS_value_functions) ist ein Werttyp, der komplexere Typen darstellen oder spezielle Verarbeitung durch CSS auslösen kann. Die Syntax beginnt mit dem Namen der Funktion, gefolgt von einer linken Klammer `(`, gefolgt von den Argument(en) der Notation und gefolgt von einer rechten Klammer `)`. Funktionen können mehrere Argumente haben, die ähnlich wie ein CSS-Eigenschaftswert formatiert sind.

Leerzeichen sind erlaubt, aber optional innerhalb der Klammern. (Aber sehen Sie die Hinweise zu Leerzeichen innerhalb der Seiten für die Funktionen `min()`, `max()`, `minmax()`, und `clamp()`.)

Einige veraltete Funktionalnotationen, wie die veraltete Syntax für `rgb()`, `rgba()`, `hsl()`, und `hsla()`, verwendeten Kommata, aber Kommata werden im Allgemeinen nur verwendet, um Elemente in einer Liste zu trennen. Wenn ein Komma verwendet wird, um Argumente zu trennen, sind Leerzeichen vor und nach dem Komma optional.

Die Spezifikation definiert auch die Funktion `toggle()`. Sie wurde bisher noch nirgends implementiert.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Textuelle Datentypen](/de/docs/Web/CSS/CSS_values_and_units/Textual_data_types)
- [CSS-Datentypen](/de/docs/Web/CSS/CSS_values_and_units/CSS_data_types)
- [CSS-Werte und -Einheiten](/de/docs/Web/CSS/CSS_values_and_units) Modul
- [Lernen: Werte und Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units)
