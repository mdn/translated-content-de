---
title: Numerische Datentypen
slug: Web/CSS/CSS_Values_and_Units/Numeric_data_types
l10n:
  sourceCommit: 636b90011532e3fd2cf9333aaf1754fdc8de7938
---

{{CSSRef}}

Jede CSS-Deklaration besteht aus einem Eigenschaft/Wert-Paar. Der Wert kann je nach Eigenschaft verschiedene Datentypen enthalten, wie eine einzelne Zahl, ein Schlüsselwort, eine Funktion oder eine Kombination verschiedener Typen; einige Werte haben Einheiten, während andere keine haben. Numerische Datentypen umfassen {{cssxref("&lt;integer&gt;")}}, {{cssxref("&lt;number&gt;")}}, {{cssxref("&lt;dimension&gt;")}} und {{cssxref("&lt;percentage&gt;")}} Werte. Dieser Leitfaden gibt einen Überblick über numerische Datentypen. Für detailliertere Informationen verweisen wir auf die Seite für jeden Werttyp.

## Ganzzahlen

Eine Ganzzahl besteht aus einem oder mehreren Dezimalziffern, `0` bis `9`, wie `1024` oder `-55`. Eine Ganzzahl kann durch ein `+` oder `-` Symbol vorangestellt werden, ohne Leerzeichen zwischen dem Symbol und der Ganzzahl.

## Zahlen

Ein {{cssxref("&lt;number&gt;")}} repräsentiert eine reelle Zahl, die mit oder ohne Dezimalpunkt mit einer Bruchkomponente sein kann, zum Beispiel `0.255`, `128` oder `-1.2`. Zahlen können ebenfalls durch ein `+` oder `-` Symbol vorangestellt werden.

## Dimensionen

Ein {{cssxref("&lt;dimension&gt;")}} ist ein `<number>` mit einer angehängten Einheit, zum Beispiel `45deg`, `100ms` oder `10px`. Der angehängte Einheit-Identifikator ist nicht empfindlich gegenüber Groß- und Kleinschreibung. Zwischen der Zahl und dem Einheit-Identifikator darf nie ein Leerzeichen oder andere Zeichen stehen: also `1 cm` ist nicht gültig.

CSS verwendet Dimensionen, um folgendes anzugeben:

- {{cssxref("&lt;length&gt;")}} (Entfernungsmaßeinheiten)
- {{cssxref("&lt;angle&gt;")}}
- {{cssxref("&lt;time&gt;")}}
- {{cssxref("&lt;frequency&gt;")}}
- {{cssxref("&lt;flex&gt;")}}
- {{cssxref("&lt;resolution&gt;")}}

Diese werden alle in den folgenden Unterabschnitten behandelt.

### Entfernungsmaßeinheiten

Wo eine Entfernungsmaßeinheit, auch bekannt als Länge, als Wert für eine Eigenschaft erlaubt ist, wird dies als {{cssxref("&lt;length&gt;")}} Typ beschrieben. Es gibt zwei Arten von Längen in CSS: relative und absolute. Relative Längeneinheiten geben eine Länge in Bezug auf etwas anderes an.

Es gibt zwei Arten von relativen Längen: schriftbezogene Längen und Ansichtsport-Prozentlängen. Diese kommen beide in zwei Typen: schriftbezogene Längeneinheiten sind entweder lokal schriftbezogen oder Wurzel-schriftbezogen. Ansichtsport-Prozentlängen sind entweder relativ zur Höhe oder Breite des Ansichtsports oder, wie im [CSS Containment Module](/de/docs/Web/CSS/CSS_containment) definiert, relativ zu einem [Container](/de/docs/Web/CSS/CSS_containment/Container_queries#container_query_length_units).

#### Lokale schriftbezogene Längen

Lokale schriftbezogene Längen sind relativ zur "lokalen" Schriftgröße oder Zeilenhöhe und geben eine Länge in Bezug auf eine berechnete Größe eines Merkmals des [elements](/de/docs/Web/HTML/Reference/Elements) selbst an oder relativ zum vererbten Wert des Elements im Falle einer zirkulären Referenz, wie der `em` Wert für eine {{cssxref("font-size")}} Eigenschaft oder ein `lh` Wert für eine {{cssxref("line-height")}} Eigenschaft.
Zum Beispiel ist `em` relativ zur Schriftgröße des Elements und `ex` relativ zur x-Höhe der Schrift des Elements.

| Einheit | Relativ zu                                                                                                                                                     |
| ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `cap`   | Kappenhöhe (die nominelle Höhe der Großbuchstaben) der Schrift des Elements.                                                                                   |
| `ch`    | Durchschnittlicher Zeichenfortschritt eines schmalen Zeichens in der Schrift des Elements, wie durch das "0" (NULL, U+0030) Zeichen dargestellt.               |
| `em`    | Schriftgröße der Schrift des Elements.                                                                                                                         |
| `ex`    | x-Höhe der Schrift des Elements.                                                                                                                               |
| `ic`    | Durchschnittlicher Zeichenfortschritt eines vollbreiten Zeichens in der Schrift des Elements, vertreten durch das "水" (CJK Wasser Ideogramm, U+6C34) Zeichen. |
| `lh`    | Zeilenhöhe des Elements.                                                                                                                                       |

#### Wurzel-schriftbezogene Längen

Wurzel-schriftbezogene Längen geben eine Länge in Bezug auf den [Wurzel-Element](/de/docs/Web/CSS/:root) Vorfahren des Elements an, wie {{HTMLElement("HTML")}} oder {{SVGElement("SVG")}}.
Zum Beispiel ist `rem` relativ zur Schriftgröße des Wurzelelements und `rex` ist die x-Höhe der Schrift des Wurzelelements.

| Einheit | Relativ zu                                                                                                                                                           |
| ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `rcap`  | Kappenhöhe (die nominelle Höhe der Großbuchstaben) der Schrift des Wurzelelements.                                                                                   |
| `rch`   | Durchschnittlicher Zeichenfortschritt eines schmalen Zeichens in der Schrift des Wurzelelements, wie durch das "0" (NULL, U+0030) Zeichen dargestellt.               |
| `rem`   | Schriftgröße der Schrift des Wurzelelements.                                                                                                                         |
| `rex`   | x-Höhe der Schrift des Wurzelelements.                                                                                                                               |
| `ric`   | Durchschnittlicher Zeichenfortschritt eines vollbreiten Zeichens in der Schrift des Wurzelelements, vertreten durch das "水" (CJK Wasser Ideogramm, U+6C34) Zeichen. |
| `rlh`   | Zeilenhöhe des Wurzelelements.                                                                                                                                       |

#### Ansichtsport-Einheiten

Ansichtsport-Einheitenlängen geben eine Länge relativ zu den Abmessungen des {{Glossary("Viewport", "Ansichtsports")}} an.
Zum Beispiel ist `vw` relativ zur Breite des Ansichtsports und `vh` ist relativ zur Höhe des Ansichtsports.

| Einheit | Relativ zu                                                                                                |
| ------- | --------------------------------------------------------------------------------------------------------- |
| `dvh`   | 1% der Höhe des [dynamischen](/de/docs/Web/CSS/length#dynamic_viewport_units) Ansichtsports.              |
| `dvw`   | 1% der Breite des [dynamischen](/de/docs/Web/CSS/length#dynamic_viewport_units) Ansichtsports.            |
| `lvh`   | 1% der Höhe des [großen](/de/docs/Web/CSS/length#large_viewport_units) Ansichtsports.                     |
| `lvw`   | 1% der Breite des [großen](/de/docs/Web/CSS/length#large_viewport_units) Ansichtsports.                   |
| `svh`   | 1% der Höhe des [kleinen](/de/docs/Web/CSS/length#small_viewport_units) Ansichtsports.                    |
| `svw`   | 1% der Breite des [kleinen](/de/docs/Web/CSS/length#small_viewport_units) Ansichtsports.                  |
| `vb`    | 1% der Ansichtsport-Größe in der {{Glossary("Flow_relative_values", "Blockachse")}} des Wurzelelements.   |
| `vh`    | 1% der Höhe des Ansichtsports.                                                                            |
| `vi`    | 1% der Ansichtsport-Größe in der {{Glossary("Flow_relative_values", "Inline-Achse")}} des Wurzelelements. |
| `vmax`  | 1% der größeren Dimension des Ansichtsports.                                                              |
| `vmin`  | 1% der kleineren Dimension des Ansichtsports.                                                             |
| `vw`    | 1% der Breite des Ansichtsports.                                                                          |

#### Container-Einheiten

Container-Abfrage-Längeneinheiten geben eine Länge relativ zu den Abmessungen eines [Abfragecontainers](/de/docs/Web/CSS/CSS_containment/Container_queries) an.
Zum Beispiel ist `cqw` relativ zur Breite des Abfragecontainers und `cqh` ist relativ zur Höhe des Abfragecontainers.

| Einheit | Relativ zu                                  |
| ------- | ------------------------------------------- |
| `cqb`   | 1% der Blockgröße eines Abfragecontainers   |
| `cqh`   | 1% der Höhe eines Abfragecontainers         |
| `cqi`   | 1% der Inline-Größe eines Abfragecontainers |
| `cqmax` | Der größere Wert von `cqi` oder `cqb`       |
| `cqmin` | Der kleinere Wert von `cqi` oder `cqb`      |
| `cqw`   | 1% der Breite eines Abfragecontainers       |

### Absolute Längeneinheiten

Absolute Längeneinheiten sind auf eine physische Länge festgelegt: entweder ein Zoll oder ein Zentimeter. Viele dieser Einheiten sind daher nützlicher, wenn der Ausgang ein Medium mit fester Größe ist, wie z.B. Druck. Zum Beispiel ist `mm` ein physischer Millimeter, ein Zehntel eines Zentimeters.

| Einheit | Name               | Entspricht          |
| ------- | ------------------ | ------------------- |
| `cm`    | Zentimeter         | 1cm = 96px/2.54     |
| `in`    | Zoll               | 1in = 2.54cm = 96px |
| `mm`    | Millimeter         | 1mm = 1/10 von 1cm  |
| `pc`    | Picas              | 1pc = 1/6 von 1in   |
| `pt`    | Punkte             | 1pt = 1/72 von 1in  |
| `px`    | Pixel              | 1px = 1/96 von 1in  |
| `Q`     | Viertel-Millimeter | 1Q = 1/40 von 1cm   |

Wenn ein Längenwert angegeben wird und die Länge `0` ist, ist der Einheit-Identifikator nicht erforderlich. Andernfalls ist der Einheit-Identifikator erforderlich, ist nicht empfindlich gegenüber Groß- und Kleinschreibung und muss unmittelbar nach dem numerischen Teil des Wertes stehen, ohne Leerzeichen dazwischen.

#### Winkeleinheiten

Winkelwerte werden durch den Typ {{cssxref("&lt;angle&gt;")}} dargestellt und akzeptieren die folgenden Werte:

| Einheit | Name      | Beschreibung                                |
| ------- | --------- | ------------------------------------------- |
| `deg`   | Grad      | Es gibt 360 Grad in einem vollen Kreis.     |
| `grad`  | Gon       | Es gibt 400 Gon in einem vollen Kreis.      |
| `rad`   | Radiant   | Es gibt 2π Radianten in einem vollen Kreis. |
| `turn`  | Umdrehung | Es gibt 1 Umdrehung in einem vollen Kreis.  |

#### Zeiteinheiten

Zeitwerte werden durch den Typ {{cssxref("&lt;time&gt;")}} dargestellt. Wenn ein Zeitwert angegeben wird, ist der Einheit-Identifikator – das `s` oder `ms` – erforderlich. Es akzeptiert die folgenden Werte.

| Einheit | Name          | Beschreibung                                  |
| ------- | ------------- | --------------------------------------------- |
| `ms`    | Millisekunden | Es gibt 1.000 Millisekunden in einer Sekunde. |
| `s`     | Sekunden      |                                               |

#### Frequenzeinheiten

Frequenzwerte werden durch den Typ {{cssxref("&lt;frequency&gt;")}} dargestellt. Es akzeptiert die folgenden Werte.

| Einheit | Name      | Beschreibung                                        |
| ------- | --------- | --------------------------------------------------- |
| `Hz`    | Hertz     | Repräsentiert die Anzahl der Vorkommen pro Sekunde. |
| `kHz`   | Kilohertz | Ein Kilohertz sind 1000 Hertz.                      |

`1Hz`, das auch als `1hz` oder `1HZ` geschrieben werden kann, ist ein Zyklus pro Sekunde.

#### Flex-Einheiten

Flex-Einheiten werden durch den Typ {{cssxref("&lt;flex&gt;")}} dargestellt. Es akzeptiert den folgenden Wert.

| Einheit | Name | Beschreibung                                                |
| ------- | ---- | ----------------------------------------------------------- |
| `fr`    | Flex | Repräsentiert eine flexible Länge in einem Gitter-Container |

#### Auflösungseinheiten

Auflösungseinheiten werden durch den Typ {{cssxref("&lt;resolution&gt;")}} dargestellt. Sie repräsentieren die Größe eines einzelnen Punktes in einer grafischen Darstellung, wie einem Bildschirm, indem sie angeben, wie viele dieser Punkte in einem CSS-Zoll, Zentimeter oder Pixel passen. Es akzeptiert die folgenden Werte:

| Einheit     | Beschreibung           |
| ----------- | ---------------------- |
| `dpcm`      | Punkte pro Zentimeter. |
| `dpi`       | Punkte pro Zoll.       |
| `dppx`, `x` | Punkte pro px-Einheit. |

### Prozentsätze

Ein {{cssxref("&lt;percentage&gt;")}} ist ein Typ, der einen Bruchteil eines anderen Wertes darstellt.

Prozentsatzwerte sind immer relativ zu einer anderen Größe, zum Beispiel einer Länge. Jede Eigenschaft, die Prozentsätze zulässt, definiert auch die Größe, auf die sich der Prozentsatz bezieht. Diese Größe kann ein Wert einer anderen Eigenschaft desselben Elements, der Wert einer Eigenschaft eines Vorfahrenelements, eine Messung eines enthaltenden Blocks oder etwas anderes sein.

Als Beispiel: Wenn Sie die {{cssxref("width")}} einer Box als Prozentsatz angeben, bezieht sich dies auf den Prozentsatz der berechneten Breite des übergeordneten Elements der Box:

```css
.box {
  width: 50%;
}
```

## Mischung von Prozentsätzen und Dimensionen

Einige Eigenschaften akzeptieren eine Dimension, die entweder einer von zwei Typen sein könnte, zum Beispiel ein `<length>` **oder** ein `<percentage>`. In diesem Fall wird der erlaubte Wert in der Spezifikation als Kombinations-Einheit detailliert, z.B. {{cssxref("&lt;length-percentage&gt;")}}. Andere mögliche Kombinationen sind wie folgt:

- {{cssxref("&lt;frequency-percentage&gt;")}}
- {{cssxref("&lt;angle-percentage&gt;")}}
- {{cssxref("&lt;time-percentage&gt;")}}

## Spezielle Datentypen (in anderen Spezifikationen definiert)

- {{cssxref("&lt;color&gt;")}}
- {{cssxref("&lt;image&gt;")}}
- {{cssxref("&lt;position&gt;")}}

### Farbe

Der {{cssxref("&lt;color&gt;")}} Wert gibt die Farbe eines Elementmerkmals an (z.B. seine Hintergrundfarbe) und wird im [CSS Color Module](https://drafts.csswg.org/css-color-3/) definiert.

### Bild

Der {{cssxref("&lt;image&gt;")}} Wert gibt alle verschiedenen Bildtypen an, die in CSS verwendet werden können, und ist im [CSS Image Values and Replaced Content Module](https://drafts.csswg.org/css-images-4/) definiert.

### Position

Der {{cssxref("&lt;position&gt;")}} Typ definiert die 2D-Positionierung eines Objekts innerhalb eines Positionierungsbereichs, zum Beispiel eines Hintergrundbilds innerhalb eines Containers. Dieser Typ wird als {{cssxref("background-position")}} interpretiert und daher in der [CSS Backgrounds and Borders Spezifikation](https://drafts.csswg.org/css-backgrounds/) spezifiziert.

## Funktionale Notation

- {{cssxref("calc", "calc()")}}
- {{cssxref("min", "min()")}}
- {{cssxref("max", "max()")}}
- {{cssxref("minmax", "minmax()")}}
- {{cssxref("clamp", "clamp()")}}
- {{cssxref("toggle", "toggle()")}}
- {{cssxref("attr", "attr()")}}

[Funktionale Notation](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) ist ein Werttyp, der komplexere Typen darstellen oder spezielle Verarbeitung durch CSS aufrufen kann. Die Syntax beginnt mit dem Namen der Funktion unmittelbar gefolgt von einer öffnenden Klammer `(` gefolgt von den Argument(en) zur Notation, gefolgt von einer schließenden Klammer `)`. Funktionen können mehrere Argumente haben, die ähnlich wie ein CSS-Eigenschaftswert formatiert sind.

Leerzeichen sind innerhalb der Klammern erlaubt, aber optional. (Beachten Sie jedoch die Hinweise zu Leerzeichen auf den Seiten für `min()`, `max()`, `minmax()` und `clamp()` Funktionen.)

Einige ältere funktionale Notationen, wie legacy Syntax für `rgb()`, `rgba()`, `hsl()`, und `hsla()`, verwendeten Kommata, aber Kommata werden im Allgemeinen nur verwendet, um Elemente in einer Liste zu trennen. Wenn ein Komma verwendet wird, um Argumente zu trennen, ist Leerzeichen vor und nach dem Komma optional.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Textuelle Datentypen](/de/docs/Web/CSS/CSS_Values_and_Units/Textual_data_types)
- [CSS-Datentypen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types)
- [CSS Werte und Einheiten](/de/docs/Web/CSS/CSS_Values_and_Units) Modul
- [Lernen: Werte und Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units)
