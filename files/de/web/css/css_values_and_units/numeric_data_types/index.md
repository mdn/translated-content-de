---
title: Numerische Datentypen
slug: Web/CSS/CSS_Values_and_Units/Numeric_data_types
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{CSSRef}}

Jede CSS-Deklaration besteht aus einem Eigenschaft/Wert-Paar. Der Wert kann je nach Eigenschaft verschiedene Datentypen enthalten, wie zum Beispiel eine einzelne Zahl, ein Schlüsselwort, eine Funktion oder eine Kombination verschiedener Typen; einige Werte haben Einheiten, während andere keine haben. Numerische Datentypen sind {{cssxref("&lt;integer&gt;")}}, {{cssxref("&lt;number&gt;")}}, {{cssxref("&lt;dimension&gt;")}} und {{cssxref("&lt;percentage&gt;")}} Werte. Dieser Leitfaden ist ein Überblick über numerische Datentypen. Weitere detaillierte Informationen finden Sie auf der Seite für jeden Werttyp.

## Ganzzahlen

Eine Ganzzahl ist eine oder mehrere Dezimalziffern, `0` bis `9`, wie zum Beispiel `1024` oder `-55`. Eine Ganzzahl kann mit einem `+` oder `-` Symbol versehen sein, ohne dass ein Leerzeichen zwischen dem Symbol und der Ganzzahl steht.

## Zahlen

Ein {{cssxref("&lt;number&gt;")}} stellt eine reelle Zahl dar, die möglicherweise einen Dezimalpunkt mit einer Bruchkomponente aufweist oder nicht, zum Beispiel `0.255`, `128` oder `-1.2`. Zahlen können ebenfalls mit einem `+` oder `-` Symbol versehen sein.

## Dimensionen

Ein {{cssxref("&lt;dimension&gt;")}} ist ein `<number>` mit einer angehängten Einheit, zum Beispiel `45deg`, `100ms` oder `10px`. Der angehängte Einheitenbezeichner ist nicht case-sensitiv. Es gibt nie ein Leerzeichen oder andere Zeichen zwischen der Zahl und dem Einheitenbezeichner: Das heißt, `1 cm` ist nicht gültig.

CSS verwendet Dimensionen, um folgende Werte anzugeben:

- {{cssxref("&lt;length&gt;")}} (Distanz-Einheiten)
- {{cssxref("&lt;angle&gt;")}}
- {{cssxref("&lt;time&gt;")}}
- {{cssxref("&lt;frequency&gt;")}}
- {{cssxref("&lt;flex&gt;")}}
- {{cssxref("&lt;resolution&gt;")}}

Diese werden alle in den nachfolgenden Unterabschnitten behandelt.

### Distanz-Einheiten

Wo eine Distanz-Einheit, auch als Länge bekannt, als Wert für eine Eigenschaft erlaubt ist, wird dies als {{cssxref("&lt;length&gt;")}} Typ beschrieben. Es gibt zwei Arten von Längen in CSS: relative und absolute. Relative Längeneinheiten geben eine Länge im Verhältnis zu etwas anderem an.

Es gibt zwei Arten von relativen Längen: schriftgrößenbezogene Längen und viewport-prozentuale Längen. Diese beide haben jeweils zwei Arten. Schriftgrößenbezogene Längeneinheiten sind entweder lokal schriftgrößenbezogen oder root schriftgrößenbezogen. Viewport-prozentuale Längen sind entweder relativ zur Höhe oder Breite des Viewports oder, wie im [CSS Containment Modul](/de/docs/Web/CSS/CSS_containment) definiert, relativ zu einem [Container](/de/docs/Web/CSS/CSS_containment/Container_queries#container_query_length_units).

#### Lokale schriftgrößenbezogene Längen

Lokale schriftgrößenbezogene Längen sind relativ zur "lokalen" Schriftgröße oder Zeilenhöhe und geben eine Länge im Verhältnis zu einer berechneten Größe eines Merkmals des [Elements](/de/docs/Web/HTML/Element) selbst oder relativ zum geerbten Wert des Elements im Falle einer zirkulären Referenz an, wie zum Beispiel der `em`-Wert für eine {{cssxref("font-size")}}-Eigenschaft oder ein `lh`-Wert für eine {{cssxref("line-height")}}-Eigenschaft.
Zum Beispiel ist `em` relativ zur Schriftgröße des Elements und `ex` ist relativ zur x-Höhe der Schrift des Elements.

| Einheit | Relativ zu                                                                                                                                                   |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `cap`   | Versalienhöhe (die nominelle Höhe der Großbuchstaben) der Schrift des Elements.                                                                              |
| `ch`    | Durchschnittlicher Zeichenabstand eines schmalen Zeichens in der Schrift des Elements, dargestellt durch das "0" (ZERO, U+0030) Zeichen.                     |
| `em`    | Schriftgröße der Schrift des Elements.                                                                                                                       |
| `ex`    | x-Höhe der Schrift des Elements.                                                                                                                             |
| `ic`    | Durchschnittlicher Zeichenabstand eines vollbreiten Zeichens in der Schrift des Elements, dargestellt durch das "水" (CJK Wasser-Ideogramm, U+6C34) Zeichen. |
| `lh`    | Zeilenhöhe des Elements.                                                                                                                                     |

#### Root schriftgrößenbezogene Längen

Root schriftgrößenbezogene Längen geben eine Länge im Verhältnis zur [Root-Element](/de/docs/Web/CSS/:root)-Vorfahre des Elements an, wie {{HTMLElement("HTML")}} oder {{SVGElement("SVG")}}.
Zum Beispiel ist `rem` relativ zur Schriftgröße auf dem Root-Element und `rex` ist die x-Höhe der Root-Schrift.

| Einheit | Relativ zu                                                                                                                                                        |
| ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `rcap`  | Versalienhöhe (die nominelle Höhe der Großbuchstaben) der Root-Schrift des Elements.                                                                              |
| `rch`   | Durchschnittlicher Zeichenabstand eines schmalen Zeichens in der Root-Schrift des Elements, dargestellt durch das "0" (ZERO, U+0030) Zeichen.                     |
| `rem`   | Schriftgröße der Root-Schrift des Elements.                                                                                                                       |
| `rex`   | x-Höhe der Root-Schrift des Elements.                                                                                                                             |
| `ric`   | Durchschnittlicher Zeichenabstand eines vollbreiten Zeichens in der Root-Schrift des Elements, dargestellt durch das "水" (CJK Wasser-Ideogramm, U+6C34) Zeichen. |
| `rlh`   | Zeilenhöhe der Root-Element.                                                                                                                                      |

#### Viewport-Einheiten

Viewport-Einheitenlängen geben eine Länge relativ zu den Abmessungen des {{Glossary("Viewport", "Viewports")}} an.
Zum Beispiel ist `vw` relativ zur Breite des Viewports und `vh` relativ zur Höhe des Viewports.

| Einheit | Relativ zu                                                                                                |
| ------- | --------------------------------------------------------------------------------------------------------- |
| `dvh`   | 1% der [dynamischen](/de/docs/Web/CSS/length#dynamic_viewport_units) Höhe des Viewports.                  |
| `dvw`   | 1% der [dynamischen](/de/docs/Web/CSS/length#dynamic_viewport_units) Breite des Viewports.                |
| `lvh`   | 1% der [großen](/de/docs/Web/CSS/length#large_viewport_units) Höhe des Viewports.                         |
| `lvw`   | 1% der [großen](/de/docs/Web/CSS/length#large_viewport_units) Breite des Viewports.                       |
| `svh`   | 1% der [kleinen](/de/docs/Web/CSS/length#small_viewport_units) Höhe des Viewports.                        |
| `svw`   | 1% der [kleinen](/de/docs/Web/CSS/length#small_viewport_units) Breite des Viewports.                      |
| `vb`    | 1% der Größe des Viewports in der {{Glossary("Flow_relative_values", "Blockachse")}} des Root-Elements.   |
| `vh`    | 1% der Höhe des Viewports.                                                                                |
| `vi`    | 1% der Größe des Viewports in der {{Glossary("Flow_relative_values", "Inline-Achse")}} des Root-Elements. |
| `vmax`  | 1% der größeren Dimension des Viewports.                                                                  |
| `vmin`  | 1% der kleineren Dimension des Viewports.                                                                 |
| `vw`    | 1% der Breite des Viewports.                                                                              |

#### Container-Einheiten

Container-Abfrage-Längeneinheiten geben eine Länge relativ zu den Dimensionen eines [Abfragecontainers](/de/docs/Web/CSS/CSS_containment/Container_queries) an.
Zum Beispiel ist `cqw` relativ zur Breite des Abfragecontainers und `cqh` ist relativ zur Höhe des Abfragecontainers.

| Einheit | Relativ zu                                 |
| ------- | ------------------------------------------ |
| `cqb`   | 1% der Blockgröße eines Abfragecontainers  |
| `cqh`   | 1% der Höhe eines Abfragecontainers        |
| `cqi`   | 1% der Inlinegröße eines Abfragecontainers |
| `cqmax` | Der größere Wert von `cqi` oder `cqb`      |
| `cqmin` | Der kleinere Wert von `cqi` oder `cqb`     |
| `cqw`   | 1% der Breite eines Abfragecontainers      |

### Absolutlängeneinheiten

Absolute Längeneinheiten sind an eine physische Länge gebunden: entweder ein Zoll oder ein Zentimeter. Viele dieser Einheiten sind daher nützlicher, wenn das Ausgabeformat ein fester Größe-Medium ist, wie zum Beispiel beim Drucken. Zum Beispiel ist `mm` ein physischer Millimeter, 1/10 eines Zentimeters.

| Einheit | Name              | Entspricht          |
| ------- | ----------------- | ------------------- |
| `cm`    | Zentimeter        | 1cm = 96px/2,54     |
| `in`    | Zoll              | 1in = 2,54cm = 96px |
| `mm`    | Millimeter        | 1mm = 1/10 von 1cm  |
| `pc`    | Picas             | 1pc = 1/6 von 1in   |
| `pt`    | Punkte            | 1pt = 1/72 von 1in  |
| `px`    | Pixel             | 1px = 1/96 von 1in  |
| `Q`     | Viertelmillimeter | 1Q = 1/40 von 1cm   |

Wenn ein Längenwert eingeschlossen wird, ist das Einheitssymbol nicht erforderlich, wenn die Länge `0` ist. Andernfalls ist das Einheitssymbol erforderlich, ist nicht case-sensitiv und muss unmittelbar nach dem numerischen Teil des Wertes ohne Leerzeichen dazwischen folgen.

#### Winkeleinheiten

Winkelwerte werden durch den Typ {{cssxref("&lt;angle&gt;")}} dargestellt und akzeptieren die folgenden Werte:

| Einheit | Name        | Beschreibung                         |
| ------- | ----------- | ------------------------------------ |
| `deg`   | Grad        | Ein voller Kreis hat 360 Grad.       |
| `grad`  | Gradianten  | Ein voller Kreis hat 400 Gradianten. |
| `rad`   | Radianten   | Ein voller Kreis hat 2π Radianten.   |
| `turn`  | Umdrehungen | Ein voller Kreis hat 1 Umdrehung.    |

#### Zeiteinheiten

Zeitwerte werden durch den Typ {{cssxref("&lt;time&gt;")}} dargestellt. Bei der Angabe eines Zeitwertes ist das Einheitssymbol — `s` oder `ms` — erforderlich. Es akzeptiert die folgenden Werte.

| Einheit | Name          | Beschreibung                          |
| ------- | ------------- | ------------------------------------- |
| `ms`    | Millisekunden | Eine Sekunde hat 1.000 Millisekunden. |
| `s`     | Sekunden      |                                       |

#### Frequenzeinheiten

Frequenzwerte werden durch den Typ {{cssxref("&lt;frequency&gt;")}} dargestellt. Es akzeptiert die folgenden Werte.

| Einheit | Name      | Beschreibung                                     |
| ------- | --------- | ------------------------------------------------ |
| `Hz`    | Hertz     | Stellt die Anzahl der Vorkommen pro Sekunde dar. |
| `kHz`   | Kilohertz | Ein Kilohertz ist 1.000 Hertz.                   |

`1Hz`, was auch als `1hz` oder `1HZ` geschrieben werden kann, ist ein Zyklus pro Sekunde.

#### Flex-Einheiten

Flex-Einheiten werden durch den Typ {{cssxref("&lt;flex&gt;")}} dargestellt. Es akzeptiert den folgenden Wert.

| Einheit | Name | Beschreibung                                                    |
| ------- | ---- | --------------------------------------------------------------- |
| `fr`    | Flex | Stellt eine flexible Länge innerhalb eines Grid-Containers dar. |

#### Auflösungseinheiten

Auflösungseinheiten werden durch den Typ {{cssxref("&lt;resolution&gt;")}} dargestellt. Sie repräsentieren die Größe eines einzelnen Punkts in einer grafischen Darstellung, wie zum Beispiel einem Bildschirm, indem sie angeben, wie viele dieser Punkte in einen CSS-Zoll, -Zentimeter oder -Pixel passen. Es akzeptiert die folgenden Werte:

| Einheit     | Beschreibung           |
| ----------- | ---------------------- |
| `dpcm`      | Punkte pro Zentimeter. |
| `dpi`       | Punkte pro Zoll.       |
| `dppx`, `x` | Punkte pro px-Einheit. |

### Prozentsätze

Ein {{cssxref("&lt;percentage&gt;")}} ist ein Typ, der einen Bruchteil eines anderen Wertes darstellt.

Prozentwerte sind immer relativ zu einer anderen Größe, zum Beispiel einer Länge. Jede Eigenschaft, die Prozentsätze zulässt, definiert auch die Größe, auf die sich der Prozentsatz bezieht. Diese Größe kann ein Wert einer anderen Eigenschaft desselben Elements sein, der Wert einer Eigenschaft eines Vorfahrelements, eine Messung eines umgebenden Blocks oder etwas anderes.

Zum Beispiel, wenn Sie die {{cssxref("width")}} einer Box als Prozentsatz angeben, bezieht sich dies auf den Prozentsatz der berechneten Breite des Elternteils der Box:

```css
.box {
  width: 50%;
}
```

## Mischung von Prozentsätzen und Dimensionen

Einige Eigenschaften akzeptieren eine Dimension, die entweder einer von zwei Typen sein könnte, zum Beispiel eine `<length>` **oder** ein `<percentage>`. In diesem Fall wird der erlaubte Wert in der Spezifikation als Kombinationseinheit detailliert beschrieben, z. B. {{cssxref("&lt;length-percentage&gt;")}}. Andere mögliche Kombinationen sind wie folgt:

- {{cssxref("&lt;frequency-percentage&gt;")}}
- {{cssxref("&lt;angle-percentage&gt;")}}
- {{cssxref("&lt;time-percentage&gt;")}}

## Spezielle Datentypen (in anderen Spezifikationen definiert)

- {{cssxref("&lt;color&gt;")}}
- {{cssxref("&lt;image&gt;")}}
- {{cssxref("&lt;position&gt;")}}

### Farbe

Der Wert {{cssxref("&lt;color&gt;")}} spezifiziert die Farbe eines Elementeigenschafts (z.B., die Hintergrundfarbe) und ist im [CSS Color Module](https://drafts.csswg.org/css-color-3/) definiert.

### Bild

Der Wert {{cssxref("&lt;image&gt;")}} spezifiziert alle verschiedenen Arten von Bildern, die in CSS verwendet werden können, und ist im [CSS Image Values and Replaced Content Module](https://www.w3.org/TR/css-images-4/) definiert.

### Position

Der Typ {{cssxref("&lt;position&gt;")}} definiert die 2D-Positionierung eines Objekts innerhalb eines Positionierungsbereichs, zum Beispiel eines Hintergrundbildes innerhalb eines Containers. Dieser Typ wird als {{cssxref("background-position")}} interpretiert und ist daher in der [CSS Backgrounds and Borders Specification](https://www.w3.org/TR/css-backgrounds-3/) spezifiziert.

## Funktionale Notation

- {{cssxref("calc", "calc()")}}
- {{cssxref("min", "min()")}}
- {{cssxref("max", "max()")}}
- {{cssxref("minmax", "minmax()")}}
- {{cssxref("clamp", "clamp()")}}
- {{cssxref("toggle", "toggle()")}}
- {{cssxref("attr", "attr()")}}

[Funktionale Notation](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) ist eine Art von Wert, der komplexere Typen repräsentieren oder spezielle Verarbeitung durch CSS auslösen kann. Die Syntax beginnt mit dem Namen der Funktion, gefolgt von einer linken Klammer `(`, gefolgt von den Argument(en) zur Notation und gefolgt von einer rechten Klammer `)`. Funktionen können mehrere Argumente annehmen, die ähnlich zu einem CSS-Eigenschaftswert formatiert sind.

Leerzeichen sind erlaubt, aber optional innerhalb der Klammern. (Siehe jedoch Hinweise zu Leerzeichen auf den Seiten für die `min()`, `max()`, `minmax()` und `clamp()` Funktionen.)

Einige ältere funktionale Notationen, wie die veraltete Syntax für `rgb()`, `rgba()`, `hsl()` und `hsla()`, verwendeten Kommas, aber Kommas werden im Allgemeinen nur verwendet, um Elemente in einer Liste zu trennen. Wenn ein Komma verwendet wird, um Argumente zu trennen, ist das Leerzeichen vor und nach dem Komma optional.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Textuelle Datentypen](/de/docs/Web/CSS/CSS_Values_and_Units/Textual_data_types)
- [CSS-Datentypen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types)
- [CSS-Werte und -Einheiten](/de/docs/Web/CSS/CSS_Values_and_Units) Modul
- [Lernen: Werte und Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units)
