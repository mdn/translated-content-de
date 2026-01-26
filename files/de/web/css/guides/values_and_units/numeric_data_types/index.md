---
title: Numerische Datentypen
slug: Web/CSS/Guides/Values_and_units/Numeric_data_types
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

Jede CSS-Deklaration besteht aus einem Eigenschafts-/Wertpaar. Der Wert kann je nach Eigenschaft verschiedene Datentypen umfassen, wie z. B. eine einzelne Zahl, ein Schlüsselwort, eine Funktion oder eine Kombination verschiedener Typen; einige Werte haben Einheiten, während andere keine haben. Numerische Datentypen umfassen {{cssxref("&lt;integer&gt;")}}, {{cssxref("&lt;number&gt;")}}, {{cssxref("&lt;dimension&gt;")}}, und {{cssxref("&lt;percentage&gt;")}} Werte. Dieser Leitfaden ist ein Überblick über numerische Datentypen. Weitere detaillierte Informationen finden Sie auf der Seite für jeden Werttyp.

## Ganzzahlen

Eine Ganzzahl besteht aus einem oder mehreren Dezimalziffern, `0` bis `9`, wie `1024` oder `-55`. Einer Ganzzahl kann ein `+`- oder `-`-Symbol vorangestellt sein, ohne Leerzeichen zwischen dem Symbol und der Ganzzahl.

## Zahlen

Ein {{cssxref("&lt;number&gt;")}} repräsentiert eine reelle Zahl, die möglicherweise oder möglicherweise keinen Dezimalpunkt mit einer Bruchkomponente hat, zum Beispiel `0.255`, `128` oder `-1.2`. Zahlen können ebenfalls von einem `+`- oder `-`-Symbol vorangestellt werden.

## Dimensionen

Eine {{cssxref("&lt;dimension&gt;")}} ist ein `<number>` mit einer Einheit, die an sie angehängt ist, zum Beispiel `45deg`, `100ms` oder `10px`. Der beigefügte Einheitenbezeichner ist nicht case-sensitiv. Es gibt niemals ein Leerzeichen oder andere Zeichen zwischen der Zahl und dem Einheitenbezeichner: das heißt, `1 cm` ist nicht gültig.

CSS verwendet Dimensionen, um Folgendes zu spezifizieren:

- {{cssxref("&lt;length&gt;")}} (Distanzmaßeinheiten)
- {{cssxref("angle")}}
- {{cssxref("&lt;time&gt;")}}
- {{cssxref("&lt;frequency&gt;")}}
- {{cssxref("&lt;flex&gt;")}}
- {{cssxref("resolution")}}

Diese werden alle in den untenstehenden Unterabschnitten behandelt.

### Distanzmaßeinheiten

Wenn eine Distanzmaßeinheit, auch als Länge bekannt, als Wert für eine Eigenschaft zulässig ist, wird dies als Typ {{cssxref("&lt;length&gt;")}} beschrieben. Es gibt zwei Arten von Längen in CSS: relative und absolute. Relative Längeneinheiten geben eine Länge in Relation zu etwas anderem an.

Es gibt zwei Arten von relativen Längen: schriftbildbezogene Längen und viewportbezogene Prozentsatz-Längen. Diese werden jeweils in zwei Typen unterteilt. Schriftbildbezogene Längeneinheiten sind entweder lokal schriftbildbezogen oder wurzelschriftbildbezogen. Viewport-Prozentsatz-Längen sind entweder relativ zur Höhe oder Breite des Viewports oder, wie im [CSS-Containment-Modul](/de/docs/Web/CSS/Guides/Containment) definiert, relativ zu einem [Container](/de/docs/Web/CSS/Guides/Containment/Container_queries#container_query_length_units).

#### Lokal schriftbildbezogene Längen

Lokal schriftbildbezogene Längen sind relativ zur "lokalen" Schriftgröße oder Zeilenhöhe und spezifizieren eine Länge in Relation zu einer berechneten Größe eines Features des [Elements](/de/docs/Web/HTML/Reference/Elements) selbst oder relativ zum geerbten Wert des Elements im Fall einer zyklischen Referenz, wie zum Beispiel der `em`-Wert für eine {{cssxref("font-size")}}-Eigenschaft oder ein `lh`-Wert für eine {{cssxref("line-height")}}-Eigenschaft. Zum Beispiel ist `em` relativ zur Schriftgröße des Elements und `ex` ist relativ zur x-Höhe der Schrift des Elements.

| Einheit | Relativ zu                                                                                                                                                       |
| ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `cap`   | Kapitalhöhe (die nominale Höhe von Großbuchstaben) der Schrift des Elements.                                                                                     |
| `ch`    | Durchschnittlicher Zeichenfortschritt eines schmalen Zeichens in der Schrift des Elements, dargestellt durch das "0" (NULL, U+0030) Zeichen.                     |
| `em`    | Schriftgröße der Schrift des Elements.                                                                                                                           |
| `ex`    | x-Höhe der Schrift des Elements.                                                                                                                                 |
| `ic`    | Durchschnittlicher Zeichenfortschritt eines vollbreiten Zeichens in der Schrift des Elements, dargestellt durch das "水" (CJK Wasser-Ideogramm, U+6C34) Zeichen. |
| `lh`    | Zeilenhöhe des Elements.                                                                                                                                         |

#### Wurzelschriftbildbezogene Längen

Wurzelschriftbildbezogene Längen spezifizieren eine Länge in Relation zum Vorfahren des [Stammelements](/de/docs/Web/CSS/Reference/Selectors/:root), wie {{HTMLElement("HTML")}} oder {{SVGElement("SVG")}}. Beispielsweise ist `rem` relativ zur Schriftgröße des Stammelements und `rex` ist die x-Höhe der Schrift des Stammelements.

| Einheit | Relativ zu                                                                                                                                                            |
| ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `rcap`  | Kapitalhöhe (die nominale Höhe von Großbuchstaben) der Schrift des Stammelements.                                                                                     |
| `rch`   | Durchschnittlicher Zeichenfortschritt eines schmalen Zeichens in der Schrift des Stammelements, dargestellt durch das "0" (NULL, U+0030) Zeichen.                     |
| `rem`   | Schriftgröße der Schrift des Stammelements.                                                                                                                           |
| `rex`   | x-Höhe der Schrift des Stammelements.                                                                                                                                 |
| `ric`   | Durchschnittlicher Zeichenfortschritt eines vollbreiten Zeichens in der Schrift des Stammelements, dargestellt durch das "水" (CJK Wasser-Ideogramm, U+6C34) Zeichen. |
| `rlh`   | Zeilenhöhe des Stammelements.                                                                                                                                         |

#### Viewport-Einheiten

Viewport-Einheit-Längen spezifizieren eine Länge relativ zu den Dimensionen des {{Glossary("Viewport", "Viewports")}}. Zum Beispiel ist `vw` relativ zur Breite des Viewports und `vh` ist relativ zur Höhe des Viewports.

| Einheit | Relativ zu                                                                                                  |
| ------- | ----------------------------------------------------------------------------------------------------------- |
| `dvh`   | 1% der [dynamischen](/de/docs/Web/CSS/Reference/Values/length#dynamic_viewport_units) Höhe des Viewports.   |
| `dvw`   | 1% der [dynamischen](/de/docs/Web/CSS/Reference/Values/length#dynamic_viewport_units) Breite des Viewports. |
| `lvh`   | 1% der [großen](/de/docs/Web/CSS/Reference/Values/length#large_viewport_units) Höhe des Viewports.          |
| `lvw`   | 1% der [großen](/de/docs/Web/CSS/Reference/Values/length#large_viewport_units) Breite des Viewports.        |
| `svh`   | 1% der [kleinen](/de/docs/Web/CSS/Reference/Values/length#small_viewport_units) Höhe des Viewports.         |
| `svw`   | 1% der [kleinen](/de/docs/Web/CSS/Reference/Values/length#small_viewport_units) Breite des Viewports.       |
| `vb`    | 1% der Größe des Viewports in der {{Glossary("Flow_relative_values", "Block-Achse")}} des Stammelements.    |
| `vh`    | 1% der Höhe des Viewports.                                                                                  |
| `vi`    | 1% der Größe des Viewports in der {{Glossary("Flow_relative_values", "Inline-Achse")}} des Stammelements.   |
| `vmax`  | 1% der größeren Dimension des Viewports.                                                                    |
| `vmin`  | 1% der kleineren Dimension des Viewports.                                                                   |
| `vw`    | 1% der Breite des Viewports.                                                                                |

#### Container-Einheiten

Containeranfragelängen-Einheiten geben eine Länge relativ zu den Dimensionen eines [Abfrage-Containers](/de/docs/Web/CSS/Guides/Containment/Container_queries) an. Zum Beispiel ist `cqw` relativ zur Breite des Abfrage-Containers und `cqh` ist relativ zur Höhe des Abfrage-Containers.

| Einheit | Relativ zu                                   |
| ------- | -------------------------------------------- |
| `cqb`   | 1% der Blockgröße eines Abfrage-Containers   |
| `cqh`   | 1% der Höhe eines Abfrage-Containers         |
| `cqi`   | 1% der Inline-Größe eines Abfrage-Containers |
| `cqmax` | Der größere Wert von `cqi` oder `cqb`        |
| `cqmin` | Der kleinere Wert von `cqi` oder `cqb`       |
| `cqw`   | 1% der Breite eines Abfrage-Containers       |

### Absolute Längeneinheiten

Absolute Längeneinheiten sind an eine physische Länge gebunden: entweder ein Zoll oder ein Zentimeter. Viele dieser Einheiten sind deshalb nützlicher, wenn das Ausgabeformat ein Medium fester Größe ist, wie zum Beispiel ein Druckmedium. Zum Beispiel ist `mm` ein physischer Millimeter, 1/10 eines Zentimeters.

| Einheit | Name               | Entspricht          |
| ------- | ------------------ | ------------------- |
| `cm`    | Zentimeter         | 1cm = 96px/2.54     |
| `in`    | Zoll               | 1in = 2.54cm = 96px |
| `mm`    | Millimeter         | 1mm = 1/10 von 1cm  |
| `pc`    | Picas              | 1pc = 1/6 von 1in   |
| `pt`    | Punkte             | 1pt = 1/72 von 1in  |
| `px`    | Pixel              | 1px = 1/96 von 1in  |
| `Q`     | Viertel-Millimeter | 1Q = 1/40 von 1cm   |

Beim Einfügen eines Längenwerts ist, wenn die Länge `0` beträgt, der Einheitenbezeichner nicht erforderlich. Ansonsten ist der Einheitenbezeichner erforderlich, nicht case-sensitiv und muss unmittelbar nach dem Zahlenanteil des Werts folgen, ohne dazwischenliegenden Leerraum.

#### Winkeleinheiten

Winkelwerte werden durch den Typ {{cssxref("angle")}} dargestellt und akzeptieren die folgenden Werte:

| Einheit | Name      | Beschreibung                           |
| ------- | --------- | -------------------------------------- |
| `deg`   | Grad      | Es gibt 360 Grad in einem Vollkreis.   |
| `grad`  | Gon       | Es gibt 400 Gon in einem Vollkreis.    |
| `rad`   | Radiant   | Es gibt 2π Radiant in einem Vollkreis. |
| `turn`  | Drehungen | Es gibt 1 Drehung in einem Vollkreis.  |

#### Zeiteinheiten

Zeitwerte werden durch den Typ {{cssxref("&lt;time&gt;")}} dargestellt. Beim Einfügen eines Zeitwerts ist der Einheitenbezeichner — `s` oder `ms` — erforderlich. Es akzeptiert die folgenden Werte.

| Einheit | Name          | Beschreibung                                  |
| ------- | ------------- | --------------------------------------------- |
| `ms`    | Millisekunden | Es gibt 1.000 Millisekunden in einer Sekunde. |
| `s`     | Sekunden      |                                               |

#### Frequenzeinheiten

Frequenzwerte werden durch den Typ {{cssxref("&lt;frequency&gt;")}} dargestellt. Es akzeptiert die folgenden Werte.

| Einheit | Name      | Beschreibung                                        |
| ------- | --------- | --------------------------------------------------- |
| `Hz`    | Hertz     | Representiert die Anzahl der Vorkommen pro Sekunde. |
| `kHz`   | KiloHertz | Ein KiloHertz entspricht 1000 Hertz.                |

`1Hz`, welches auch als `1hz` oder `1HZ` geschrieben werden kann, ist ein Zyklus pro Sekunde.

#### Flexible Einheiten

Flexible Einheiten werden durch den Typ {{cssxref("&lt;flex&gt;")}} dargestellt. Es akzeptiert den folgenden Wert.

| Einheit | Name | Beschreibung                                                      |
| ------- | ---- | ----------------------------------------------------------------- |
| `fr`    | Flex | Representiert eine flexible Länge innerhalb eines Grid-Containers |

#### Auflösungseinheiten

Auflösungseinheiten werden durch den Typ {{cssxref("resolution")}} dargestellt. Sie repräsentieren die Größe eines einzelnen Punkts in einer grafischen Darstellung, wie einem Bildschirm, indem sie angeben, wie viele dieser Punkte in einen CSS-Zoll, Zentimeter oder Pixel passen. Es akzeptiert die folgenden Werte:

| Einheit     | Beschreibung           |
| ----------- | ---------------------- |
| `dpcm`      | Punkte pro Zentimeter. |
| `dpi`       | Punkte pro Zoll.       |
| `dppx`, `x` | Punkte pro px-Einheit. |

### Prozentsätze

Ein {{cssxref("&lt;percentage&gt;")}} ist ein Typ, der einen Bruchteil eines anderen Werts repräsentiert.

Prozentwerte sind immer relativ zu einer anderen Größe, z.B. einer Länge. Jede Eigenschaft, die Prozentsätze erlaubt, definiert auch die Menge, auf die sich der Prozentsatz bezieht. Diese Menge kann ein Wert einer anderen Eigenschaft des gleichen Elements sein, der Wert einer Eigenschaft eines Elternelements, ein Maß eines enthaltenden Blocks oder etwas anderes.

Wenn Sie beispielsweise die {{cssxref("width")}} einer Box als Prozentsatz angeben, bezieht sich das auf den Prozentsatz der berechneten Breite des übergeordneten Elements der Box:

```css
.box {
  width: 50%;
}
```

## Mischung von Prozentsätzen und Dimensionen

Einige Eigenschaften akzeptieren eine Dimension, die entweder von zwei Typen sein könnte, zum Beispiel eine `<length>` **oder** ein `<percentage>`. In diesem Fall ist der erlaubte Wert in der Spezifikation als Kombinationseinheit detailliert aufgeführt, z.B. {{cssxref("&lt;length-percentage&gt;")}}. Andere mögliche Kombinationen sind wie folgt:

- {{cssxref("&lt;frequency-percentage&gt;")}}
- {{cssxref("&lt;angle-percentage&gt;")}}
- {{cssxref("&lt;time-percentage&gt;")}}

## Spezielle Datentypen (in anderen Spezifikationen definiert)

- {{cssxref("&lt;color&gt;")}}
- {{cssxref("image")}}
- {{cssxref("&lt;position&gt;")}}

### Farbe

Der {{cssxref("&lt;color&gt;")}}-Wert gibt die Farbe eines Element-Features an (z.B. die Hintergrundfarbe) und ist im [CSS Color Module](https://drafts.csswg.org/css-color-3/) definiert.

### Bild

Der {{cssxref("image")}}-Wert spezifiziert alle verschiedenen Arten von Bildern, die in CSS verwendet werden können, und ist im [CSS Image Values and Replaced Content Module](https://drafts.csswg.org/css-images-4/) definiert.

### Position

Der {{cssxref("&lt;position&gt;")}}-Typ definiert die 2D-Positionierung eines Objekts innerhalb eines Positionierungsbereichs, zum Beispiel eines Hintergrundbilds in einem Container. Dieser Typ wird als {{cssxref("background-position")}} interpretiert und ist daher in der [CSS Backgrounds and Borders]
Spezifikation definiert(https://drafts.csswg.org/css-backgrounds/).

## Funktionale Notation

- {{cssxref("calc()")}}
- {{cssxref("min()")}}
- {{cssxref("max()")}}
- {{cssxref("minmax()")}}
- {{cssxref("clamp()")}}
- {{cssxref("attr()")}}

[Functionale Notation](/de/docs/Web/CSS/Reference/Values/Functions) ist eine Art von Wert, der komplexere Typen darstellen oder eine spezielle Verarbeitung durch CSS aufrufen kann. Die Syntax beginnt mit dem Namen der Funktion, gefolgt von einer linken Klammer `(`, gefolgt von den Argument(en) zur Notation, gefolgt von einer rechten Klammer `)`. Funktionen können mehrere Argumente annehmen, die ähnlich wie ein CSS-Eigenschaftswert formatiert sind.

Leerzeichen sind erlaubt, aber optional innerhalb der Klammern. (Siehe jedoch Hinweise zu Leerraum innerhalb der Seiten für die Funktionen `min()`, `max()`, `minmax()`, und `clamp()`.)

Einige frühere funktionale Notationen, wie die veraltete Syntax für `rgb()`, `rgba()`, `hsl()`, und `hsla()`, verwendeten Kommata, aber Kommata werden im Allgemeinen nur verwendet, um Elemente in einer Liste zu trennen. Wenn ein Komma verwendet wird, um Argumente zu trennen, ist Leerplatz vor und nach dem Komma optional.

Die Spezifikation definiert auch die `toggle()`-Funktion. Sie wurde bisher nirgendwo implementiert.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Textuelle Datentypen](/de/docs/Web/CSS/Guides/Values_and_units/Textual_data_types)
- [CSS-Datentypen](/de/docs/Web/CSS/Reference/Values/Data_types)
- Modul [CSS-Werte und -Einheiten](/de/docs/Web/CSS/Guides/Values_and_units)
- [Lernen: Werte und Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units)
