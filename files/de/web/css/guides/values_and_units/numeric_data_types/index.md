---
title: Numerische Datentypen
slug: Web/CSS/Guides/Values_and_units/Numeric_data_types
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Jede CSS-Deklaration besteht aus einem Paar aus Eigenschaft/Wert. Der Wert kann je nach Eigenschaft verschiedene Datentypen enthalten, wie z.B. eine einzelne Zahl, ein Schlüsselwort, eine Funktion oder eine Kombination verschiedener Typen; einige Werte haben Einheiten, andere nicht. Zu den numerischen Datentypen gehören {{cssxref("&lt;integer&gt;")}}, {{cssxref("&lt;number&gt;")}}, {{cssxref("&lt;dimension&gt;")}} und {{cssxref("&lt;percentage&gt;")}} Werte. Diese Anleitung bietet einen Überblick über numerische Datentypen. Für detailliertere Informationen verweisen Sie bitte auf die Seite für jeden Werttyp.

## Ganzzahlen

Eine Ganzzahl besteht aus einem oder mehreren Dezimalziffern, `0` bis `9`, wie zum Beispiel `1024` oder `-55`. Einer Ganzzahl kann ein `+` oder `-` Symbol vorangestellt sein, ohne Leerzeichen zwischen dem Symbol und der Ganzzahl.

## Zahlen

Ein {{cssxref("&lt;number&gt;")}} stellt eine reelle Zahl dar, die möglicherweise eine Dezimalstelle mit einem Bruchteil enthält oder nicht, z.B. `0.255`, `128` oder `-1.2`. Zahlen können auch ein `+` oder `-` Symbol vorangestellt haben.

## Dimensionen

Ein {{cssxref("&lt;dimension&gt;")}} ist ein `<number>` mit einer dazugehörigen Einheit, z.B. `45deg`, `100ms` oder `10px`. Der angehängte Einheitenbezeichner ist nicht case-sensitiv. Zwischen der Nummer und dem Einheitenbezeichner darf nie ein Leerzeichen oder andere Zeichen stehen: d.h. `1 cm` ist nicht gültig.

CSS verwendet Dimensionen zur Spezifizierung von:

- {{cssxref("&lt;length&gt;")}} (Längeneinheiten)
- {{cssxref("&lt;angle&gt;")}}
- {{cssxref("&lt;time&gt;")}}
- {{cssxref("&lt;frequency&gt;")}}
- {{cssxref("&lt;flex&gt;")}}
- {{cssxref("&lt;resolution&gt;")}}

Diese werden in den folgenden Unterabschnitten behandelt.

### Längeneinheiten

Wenn eine Längeneinheit, auch bekannt als Länge, als Wert für eine Eigenschaft erlaubt ist, wird dies als der Typ {{cssxref("&lt;length&gt;")}} beschrieben. Es gibt in CSS zwei Arten von Längen: relative und absolute. Relative Längeneinheiten geben eine Länge in Relation zu etwas anderem an.

Es gibt zwei Arten von relativen Längen: schriftbezogene Längen und viewport-prozentuale Längen. Beide kommen in zwei Typen vor. Schriftbezogene Längeneinheiten sind entweder lokal schriftbezogen oder wurzelbezogen. Viewport-prozentuale Längen sind entweder relativ zur Viewport-Höhe oder -Breite oder, wie im [CSS Containment-Modul](/de/docs/Web/CSS/Guides/Containment) definiert, relativ zu einem [Container](/de/docs/Web/CSS/Guides/Containment/Container_queries#container_query_length_units).

#### Lokal schriftbezogene Längen

Lokal schriftbezogene Längen sind relativ zur "lokalen" Schriftgröße oder Zeilenhöhe und geben eine Länge in Relation zu einer berechneten Größe eines Merkmals des [Elements](/de/docs/Web/HTML/Reference/Elements) selbst an oder relativ zum geerbten Wert des Elements im Falle einer zirkulären Referenz, wie z.B. der `em` Wert für eine {{cssxref("font-size")}} Eigenschaft oder ein `lh` Wert für eine {{cssxref("line-height")}} Eigenschaft.
Zum Beispiel ist `em` relativ zur Schriftgröße des Elements und `ex` relativ zur x-Höhe der Schrift des Elements.

| Einheit | Relativ zu                                                                                                                                                  |
| ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `cap`   | Kapitälchenhöhe (die nominale Höhe von Großbuchstaben) der Schrift des Elements.                                                                            |
| `ch`    | Durchschnittlicher Zeichenfortschritt eines schmalen Zeichens in der Schrift des Elements, dargestellt durch das "0" (NULL, U+0030) Zeichen.                |
| `em`    | Schriftgröße der Schrift des Elements.                                                                                                                      |
| `ex`    | x-Höhe der Schrift des Elements.                                                                                                                            |
| `ic`    | Durchschnittlicher Zeichenfortschritt eines breiten Zeichens in der Schrift des Elements, dargestellt durch das "水" (CJK Wasserideograph, U+6C34) Zeichen. |
| `lh`    | Zeilenhöhe des Elements.                                                                                                                                    |

#### Wurzel schriftbezogene Längen

Wurzel schriftbezogene Längen geben eine Länge relativ zum [Root-Element](/de/docs/Web/CSS/Reference/Selectors/:root) Vorfahren des Elements an, wie z.B. {{HTMLElement("HTML")}} oder {{SVGElement("SVG")}}.
Zum Beispiel ist `rem` relativ zur Schriftgröße des Wurzelelements und `rex` ist die x-Höhe der Schrift des Wurzelelements.

| Einheit | Relativ zu                                                                                                                                                        |
| ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `rcap`  | Kapitälchenhöhe (die nominale Höhe von Großbuchstaben) der Schrift des Wurzelelements.                                                                            |
| `rch`   | Durchschnittlicher Zeichenfortschritt eines schmalen Zeichens in der Schrift des Wurzelelements, dargestellt durch das "0" (NULL, U+0030) Zeichen.                |
| `rem`   | Schriftgröße der Schrift des Wurzelelements.                                                                                                                      |
| `rex`   | x-Höhe der Schrift des Wurzelelements.                                                                                                                            |
| `ric`   | Durchschnittlicher Zeichenfortschritt eines breiten Zeichens in der Schrift des Wurzelelements, dargestellt durch das "水" (CJK Wasserideograph, U+6C34) Zeichen. |
| `rlh`   | Zeilenhöhe des Wurzelelements.                                                                                                                                    |

#### Viewport-Einheiten

Viewport-Längeneinheiten geben eine Länge relativ zu den Dimensionen des {{Glossary("Viewport", "Viewports")}} an.
Zum Beispiel ist `vw` relativ zur Breite des Viewports und `vh` relativ zur Höhe des Viewports.

| Einheit | Relativ zu                                                                                                  |
| ------- | ----------------------------------------------------------------------------------------------------------- |
| `dvh`   | 1% der [dynamischen](/de/docs/Web/CSS/Reference/Values/length#dynamic_viewport_units) Höhe des Viewports.   |
| `dvw`   | 1% der [dynamischen](/de/docs/Web/CSS/Reference/Values/length#dynamic_viewport_units) Breite des Viewports. |
| `lvh`   | 1% der [großen](/de/docs/Web/CSS/Reference/Values/length#large_viewport_units) Höhe des Viewports.          |
| `lvw`   | 1% der [großen](/de/docs/Web/CSS/Reference/Values/length#large_viewport_units) Breite des Viewports.        |
| `svh`   | 1% der [kleinen](/de/docs/Web/CSS/Reference/Values/length#small_viewport_units) Höhe des Viewports.         |
| `svw`   | 1% der [kleinen](/de/docs/Web/CSS/Reference/Values/length#small_viewport_units) Breite des Viewports.       |
| `vb`    | 1% der Größe des Viewports in der {{Glossary("Flow_relative_values", "Block-Achse")}} des Root-Elements.    |
| `vh`    | 1% der Höhe des Viewports.                                                                                  |
| `vi`    | 1% der Größe des Viewports in der {{Glossary("Flow_relative_values", "Inline-Achse")}} des Root-Elements.   |
| `vmax`  | 1% der größeren Dimension des Viewports.                                                                    |
| `vmin`  | 1% der kleineren Dimension des Viewports.                                                                   |
| `vw`    | 1% der Breite des Viewports.                                                                                |

#### Container-Einheiten

Längeneinheiten für Container-Abfragen geben eine Länge relativ zu den Dimensionen eines [Query-Containers](/de/docs/Web/CSS/Guides/Containment/Container_queries) an.
Zum Beispiel ist `cqw` relativ zur Breite des Abfragecontainers und `cqh` relativ zur Höhe des Abfragecontainers.

| Einheit | Relativ zu                                 |
| ------- | ------------------------------------------ |
| `cqb`   | 1% der Blockgröße eines Query-Containers   |
| `cqh`   | 1% der Höhe eines Query-Containers         |
| `cqi`   | 1% der Inline-Größe eines Query-Containers |
| `cqmax` | Der größere Wert von `cqi` oder `cqb`      |
| `cqmin` | Der kleinere Wert von `cqi` oder `cqb`     |
| `cqw`   | 1% der Breite eines Query-Containers       |

### Absolute Längeneinheiten

Absolute Längeneinheiten sind auf eine physikalische Länge festgelegt: entweder ein Zoll oder ein Zentimeter. Viele dieser Einheiten sind daher nützlicher, wenn die Ausgabe auf ein festes Medienformat ausgerichtet ist, wie z.B. Druck. Zum Beispiel ist `mm` ein physikalischer Millimeter, 1/10 eines Zentimeters.

| Einheit | Name              | Äquivalent zu                |
| ------- | ----------------- | ---------------------------- |
| `cm`    | Zentimeter        | 1cm = 96px/2.54              |
| `in`    | Zoll              | 1in = 2.54cm = 96px          |
| `mm`    | Millimeter        | 1mm = 1/10 eines Zentimeters |
| `pc`    | Picas             | 1pc = 1/6 eines Zolls        |
| `pt`    | Punkte            | 1pt = 1/72 eines Zolls       |
| `px`    | Pixel             | 1px = 1/96 eines Zolls       |
| `Q`     | Viertelmillimeter | 1Q = 1/40 eines Zentimeters  |

Bei der Angabe eines Längenwerts ist der Einheitenbezeichner nicht erforderlich, wenn die Länge `0` ist. Andernfalls ist der Einheitenbezeichner erforderlich, ist nicht case-sensitiv und muss direkt nach dem numerischen Teil des Werts kommen, ohne Leerzeichen dazwischen.

#### Winkeleinheiten

Winkelwerte werden durch den Typ {{cssxref("&lt;angle&gt;")}} dargestellt und akzeptieren die folgenden Werte:

| Einheit | Name    | Beschreibung                        |
| ------- | ------- | ----------------------------------- |
| `deg`   | Grad    | Ein Vollkreis umfasst 360 Grad.     |
| `grad`  | Gon     | Ein Vollkreis umfasst 400 Gon.      |
| `rad`   | Radiant | Ein Vollkreis umfasst 2π Radianten. |
| `turn`  | Runde   | Ein Vollkreis umfasst 1 Runde.      |

#### Zeiteinheiten

Zeitwerte werden durch den Typ {{cssxref("&lt;time&gt;")}} dargestellt. Bei der Angabe eines Zeitwerts ist der Einheitenbezeichner — das `s` oder `ms` — erforderlich. Es werden die folgenden Werte akzeptiert.

| Einheit | Name          | Beschreibung                          |
| ------- | ------------- | ------------------------------------- |
| `ms`    | Millisekunden | Eine Sekunde hat 1.000 Millisekunden. |
| `s`     | Sekunden      |                                       |

#### Frequenzeinheiten

Frequenzwerte werden durch den Typ {{cssxref("&lt;frequency&gt;")}} dargestellt. Es werden die folgenden Werte akzeptiert.

| Einheit | Name      | Beschreibung                                     |
| ------- | --------- | ------------------------------------------------ |
| `Hz`    | Hertz     | Stellt die Anzahl der Vorkommen pro Sekunde dar. |
| `kHz`   | Kilohertz | Ein Kilohertz sind 1.000 Hertz.                  |

`1Hz`, das auch als `1hz` oder `1HZ` geschrieben werden kann, ist ein Zyklus pro Sekunde.

#### Flex-Einheiten

Flex-Einheiten werden durch den Typ {{cssxref("&lt;flex&gt;")}} dargestellt. Es wird der folgende Wert akzeptiert.

| Einheit | Name | Beschreibung                                                    |
| ------- | ---- | --------------------------------------------------------------- |
| `fr`    | Flex | Stellt eine flexible Länge innerhalb eines Gittercontainers dar |

#### Auflösungseineiten

Auflösungseinheiten werden durch den Typ {{cssxref("&lt;resolution&gt;")}} dargestellt. Sie repräsentieren die Größe eines einzelnen Punkts in einer grafischen Darstellung, wie einem Bildschirm, indem sie angeben, wie viele dieser Punkte in einen CSS-Zoll, Zentimeter oder Pixel passen. Es werden die folgenden Werte akzeptiert:

| Einheit     | Beschreibung           |
| ----------- | ---------------------- |
| `dpcm`      | Punkte pro Zentimeter. |
| `dpi`       | Punkte pro Zoll.       |
| `dppx`, `x` | Punkte pro px Einheit. |

### Prozentangaben

Ein {{cssxref("&lt;percentage&gt;")}} ist ein Typ, der einen Bruchteil eines anderen Werts darstellt.

Prozentwerte sind immer relativ zu einer anderen Größe, z.B. einer Länge. Jede Eigenschaft, die Prozentsätze zulässt, definiert auch die Größe, auf die sich der Prozentsatz bezieht. Diese Größe kann ein Wert einer anderen Eigenschaft des gleichen Elements, der Wert einer Eigenschaft eines Vorfahrelements, eine Messung eines enthaltenen Blocks oder etwas anderes sein.

Ein Beispiel: Wenn Sie die {{cssxref("width")}} einer Box als Prozentsatz angeben, bezieht sich dieser auf den Prozentsatz der berechneten Breite des Elternteils der Box:

```css
.box {
  width: 50%;
}
```

## Mischen von Prozentangaben und Dimensionen

Einige Eigenschaften akzeptieren eine Dimension, die entweder eine von zwei Typen sein könnte, z.B. ein `<length>` **oder** ein `<percentage>`. In diesem Fall wird der erlaubte Wert in der Spezifikation als Kombinationseinheit angegeben, z.B. {{cssxref("&lt;length-percentage&gt;")}}. Andere mögliche Kombinationen sind wie folgt:

- {{cssxref("&lt;frequency-percentage&gt;")}}
- {{cssxref("&lt;angle-percentage&gt;")}}
- {{cssxref("&lt;time-percentage&gt;")}}

## Spezielle Datentypen (in anderen Spezifikationen definiert)

- {{cssxref("&lt;color&gt;")}}
- {{cssxref("&lt;image&gt;")}}
- {{cssxref("&lt;position&gt;")}}

### Farbe

Der {{cssxref("&lt;color&gt;")}} Wert legt die Farbe eines Merkmals eines Elements fest (z.B. dessen Hintergrundfarbe) und ist im [CSS Farbemodul](https://drafts.csswg.org/css-color-3/) definiert.

### Bild

Der {{cssxref("&lt;image&gt;")}} Wert spezifiziert alle verschiedenen Arten von Bildern, die in CSS verwendet werden können, und ist im [CSS Bildwerte und ersetzte Inhalte Modul](https://drafts.csswg.org/css-images-4/) definiert.

### Position

Der {{cssxref("&lt;position&gt;")}} Typ definiert die 2D-Positionierung eines Objekts innerhalb einer Positionierungsfläche, z.B. eines Hintergrundbildes innerhalb eines Containers. Dieser Typ wird als {{cssxref("background-position")}} interpretiert und daher in der [CSS-Hintergründe und Ränder Spezifikation](https://drafts.csswg.org/css-backgrounds/) spezifiziert.

## Funktionale Notation

- {{cssxref("calc", "calc()")}}
- {{cssxref("min", "min()")}}
- {{cssxref("max", "max()")}}
- {{cssxref("minmax", "minmax()")}}
- {{cssxref("clamp", "clamp()")}}
- {{cssxref("attr", "attr()")}}

[Funktionale Notation](/de/docs/Web/CSS/Reference/Values/Functions) ist ein Werttyp, der komplexere Typen darstellen oder eine spezielle Verarbeitung durch CSS auslösen kann. Der Syntax beginnt mit dem Namen der Funktion, gefolgt von einer linken Klammer `(` gefolgt von den Argument(en) der Notation, gefolgt von einer rechten Klammer `)`. Funktionen können mehrere Argumente haben, die ähnlich wie ein CSS-Eigenschaftswert formatiert sind.

Leerzeichen sind erlaubt, aber optional innerhalb der Klammern. (Beachten Sie jedoch die Anmerkungen zu Leerzeichen auf Seiten mit `min()`, `max()`, `minmax()` und `clamp()` Funktionen.)

Einige veraltete funktionale Notationen, wie die für `rgb()`, `rgba()`, `hsl()` und `hsla`, verwendeten Kommata, aber Kommata werden im Allgemeinen nur verwendet, um Elemente in einer Liste zu trennen. Wenn ein Komma verwendet wird, um Argumente zu trennen, sind Leerzeichen vor und nach dem Komma optional.

Die Spezifikation definiert auch die `toggle()` Funktion. Sie wurde bisher noch nirgends implementiert.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Textuelle Datentypen](/de/docs/Web/CSS/Guides/Values_and_units/Textual_data_types)
- [CSS-Datentypen](/de/docs/Web/CSS/Reference/Values/Data_types)
- [CSS-Werte und Einheiten](/de/docs/Web/CSS/Guides/Values_and_units) Modul
- [Lernen: Werte und Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units)
