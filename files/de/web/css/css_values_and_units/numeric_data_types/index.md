---
title: Numerische Datentypen
slug: Web/CSS/CSS_Values_and_Units/Numeric_data_types
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Jede CSS-Deklaration besteht aus einem Paar von Eigenschaft und Wert. Der Wert kann je nach Eigenschaft verschiedene Datentypen umfassen, wie eine einzelne Zahl, ein Schlüsselwort, eine Funktion oder eine Kombination verschiedener Typen; einige Werte haben Einheiten, während andere keine haben. Numerische Datentypen umfassen {{cssxref("&lt;integer&gt;")}}, {{cssxref("&lt;number&gt;")}}, {{cssxref("&lt;dimension&gt;")}} und {{cssxref("&lt;percentage&gt;")}} Werte. Dieser Leitfaden bietet einen Überblick über numerische Datentypen. Weitere Informationen zu jedem Wertetyp finden Sie auf der jeweiligen Seite.

## Ganzzahlen

Eine Ganzzahl besteht aus einem oder mehreren Dezimalziffern, `0` bis `9`, wie zum Beispiel `1024` oder `-55`. Eine Ganzzahl kann mit einem `+` oder `-` Symbol versehen werden, ohne dass zwischen dem Symbol und der Ganzzahl ein Leerzeichen steht.

## Zahlen

Ein {{cssxref("&lt;number&gt;")}} repräsentiert eine reelle Zahl, die möglicherweise einen Dezimalpunkt mit einem Bruchteil hat, zum Beispiel `0.255`, `128` oder `-1.2`. Zahlen können auch mit einem `+` oder `-` Symbol versehen werden.

## Dimensionen

Ein {{cssxref("&lt;dimension&gt;")}} ist eine `<number>` mit einer daran angehängten Einheit, zum Beispiel `45deg`, `100ms` oder `10px`. Die angehängte Einheit ist nicht zwischen Groß- und Kleinschreibung empfindlich. Es gibt niemals ein Leerzeichen oder andere Zeichen zwischen der Zahl und der Einheitenangabe: d.h. `1 cm` ist nicht gültig.

CSS verwendet Dimensionen, um Folgendes anzugeben:

- {{cssxref("&lt;length&gt;")}} (Abstandseinheiten)
- {{cssxref("&lt;angle&gt;")}}
- {{cssxref("&lt;time&gt;")}}
- {{cssxref("&lt;frequency&gt;")}}
- {{cssxref("&lt;flex&gt;")}}
- {{cssxref("&lt;resolution&gt;")}}

Diese werden alle in den nachfolgenden Abschnitten behandelt.

### Abstandseinheiten

Wo eine Abstandseinheit, auch bekannt als Länge, als Wert für eine Eigenschaft erlaubt ist, wird dies als der Typ {{cssxref("&lt;length&gt;")}} beschrieben. Es gibt zwei Arten von Längen in CSS: relative und absolute. Relative Längeneinheiten spezifizieren eine Länge im Verhältnis zu etwas anderem.

Es gibt zwei Arten von relativen Längen: schriftbezogene Längen und Ansichtsfenster-Prozentlängen. Diese kommen in jeweils zwei Typen vor. Schriftbezogene Längeneinheiten sind entweder lokal schriftbezogen oder wurzelschriftbezogen. Ansichtsfenster-Prozentlängen sind entweder relativ zur Höhe oder Breite des Ansichtsfensters oder, wie im [CSS Containment-Modul](/de/docs/Web/CSS/CSS_containment) definiert, relativ zu einem [Container](/de/docs/Web/CSS/CSS_containment/Container_queries#container_query_length_units).

#### Lokale schriftbezogene Längen

Lokale schriftbezogene Längen beziehen sich auf die "lokale" Schriftgröße oder Zeilenhöhe und geben eine Länge im Verhältnis zu einer berechneten Größe eines Merkmals des [Elementes](/de/docs/Web/HTML/Reference/Elements) selbst oder relativ zum geerbten Wert des Elements im Falle eines Zirkelschlusses an, wie der `em` Wert für eine {{cssxref("font-size")}} Eigenschaft oder ein `lh` Wert für eine {{cssxref("line-height")}} Eigenschaft.
Zum Beispiel ist `em` relativ zur Schriftgröße des Elements und `ex` ist relativ zur x-Höhe der Schrift des Elements.

| Einheit | Relativ zu                                                                                                                                                |
| ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `cap`   | Großbuchstabenhöhe (die nominelle Höhe der Großbuchstaben) der Schrift des Elements.                                                                      |
| `ch`    | Durchschnittlicher Zeichenabstand eines schmalen Zeichens in der Schrift des Elements, dargestellt durch das Zeichen "0" (ZERO, U+0030).                  |
| `em`    | Schriftgröße der Schrift des Elements.                                                                                                                    |
| `ex`    | x-Höhe der Schrift des Elements.                                                                                                                          |
| `ic`    | Durchschnittlicher Zeichenabstand eines vollbreiten Zeichens in der Schrift des Elements, dargestellt durch das Zeichen "水" (CJK Wasserzeichen, U+6C34). |
| `lh`    | Zeilenhöhe des Elements.                                                                                                                                  |

#### Wurzelschriftbezogene Längen

Wurzelschriftbezogene Längen spezifizieren eine Länge im Verhältnis zu dem Vorfahren des [Wurzelelementes](/de/docs/Web/CSS/:root) des Elements, wie {{HTMLElement("HTML")}} oder {{SVGElement("SVG")}}.
Zum Beispiel ist `rem` relativ zur Schriftgröße des Wurzelelements und `rex` ist die x-Höhe der Schrift des Wurzelelements.

| Einheit | Relativ zu                                                                                                                                                      |
| ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `rcap`  | Großbuchstabenhöhe (die nominelle Höhe der Großbuchstaben) der Schrift des Wurzelelements.                                                                      |
| `rch`   | Durchschnittlicher Zeichenabstand eines schmalen Zeichens in der Schrift des Wurzelelements, dargestellt durch das Zeichen "0" (ZERO, U+0030).                  |
| `rem`   | Schriftgröße der Schrift des Wurzelelements.                                                                                                                    |
| `rex`   | x-Höhe der Schrift des Wurzelelements.                                                                                                                          |
| `ric`   | Durchschnittlicher Zeichenabstand eines vollbreiten Zeichens in der Schrift des Wurzelelements, dargestellt durch das Zeichen "水" (CJK Wasserzeichen, U+6C34). |
| `rlh`   | Zeilenhöhe des Wurzelelements.                                                                                                                                  |

#### Ansichtsfenstereinheiten

Ansichtsfenstereinheitslängen spezifizieren eine Länge relativ zu den Dimensionen des {{Glossary("Viewport", "Ansichtsfensters")}}.
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

#### Containereinheiten

Container-Abfrage-Längeneinheiten spezifizieren eine Länge relativ zu den Dimensionen eines [Abfrage-Containers](/de/docs/Web/CSS/CSS_containment/Container_queries).
Zum Beispiel ist `cqw` relativ zur Breite des Abfrage-Containers und `cqh` relativ zur Höhe des Abfrage-Containers.

| Einheit | Relativ zu                                  |
| ------- | ------------------------------------------- |
| `cqb`   | 1% der Blockgröße eines Abfrage-Containers  |
| `cqh`   | 1% der Höhe eines Abfrage-Containers        |
| `cqi`   | 1% der Inlinegröße eines Abfrage-Containers |
| `cqmax` | Der größere Wert von `cqi` oder `cqb`       |
| `cqmin` | Der kleinere Wert von `cqi` oder `cqb`      |
| `cqw`   | 1% der Breite eines Abfrage-Containers      |

### Absolute Längeneinheiten

Absolute Längeneinheiten sind auf eine physische Länge festgelegt: entweder ein Zoll oder ein Zentimeter. Viele dieser Einheiten sind daher nützlicher, wenn das Ausgabemedium eine feste Größe hat, wie zum Beispiel beim Druck. Zum Beispiel ist `mm` ein physischer Millimeter, 1/10 Zentimeter.

| Einheit | Name               | Entspricht            |
| ------- | ------------------ | --------------------- |
| `cm`    | Zentimeter         | 1cm = 96px/2.54       |
| `in`    | Zoll               | 1in = 2.54cm = 96px   |
| `mm`    | Millimeter         | 1mm = 1/10 eines cm   |
| `pc`    | Picas              | 1pc = 1/6 eines Zoll  |
| `pt`    | Punkt              | 1pt = 1/72 eines Zoll |
| `px`    | Pixel              | 1px = 1/96 eines Zoll |
| `Q`     | Viertel-Millimeter | 1Q = 1/40 eines cm    |

Wenn ein Längenwert aufgenommen wird, ist bei einem Wert von `0` die Einheit nicht erforderlich. Ansonsten ist die Einheitenangabe erforderlich, ist nicht zwischen Groß- und Kleinschreibung empfindlich und muss unmittelbar nach dem numerischen Teil des Wertes ohne Leerzeichen kommen.

#### Winkeleinheiten

Winkelwerte werden durch den Typ {{cssxref("&lt;angle&gt;")}} dargestellt und akzeptieren die folgenden Werte:

| Einheit | Name      | Beschreibung                                       |
| ------- | --------- | -------------------------------------------------- |
| `deg`   | Grad      | Es gibt 360 Grad in einem vollständigen Kreis.     |
| `grad`  | Gon       | Es gibt 400 Gon in einem vollständigen Kreis.      |
| `rad`   | Radiant   | Es gibt 2π Radianten in einem vollständigen Kreis. |
| `turn`  | Umdrehung | Es gibt 1 Umdrehung in einem vollständigen Kreis.  |

#### Zeiteinheiten

Zeitwerte werden durch den Typ {{cssxref("&lt;time&gt;")}} dargestellt. Wenn ein Zeitwert aufgenommen wird, ist die Einheitenangabe — entweder `s` oder `ms` — erforderlich. Es akzeptiert die folgenden Werte.

| Einheit | Name          | Beschreibung                                  |
| ------- | ------------- | --------------------------------------------- |
| `ms`    | Millisekunden | Es gibt 1.000 Millisekunden in einer Sekunde. |
| `s`     | Sekunden      |                                               |

#### Frequenzeinheiten

Frequenzwerte werden durch den Typ {{cssxref("&lt;frequency&gt;")}} dargestellt. Es akzeptiert die folgenden Werte.

| Einheit | Name      | Beschreibung                                     |
| ------- | --------- | ------------------------------------------------ |
| `Hz`    | Hertz     | Steht für die Anzahl der Ereignisse pro Sekunde. |
| `kHz`   | KiloHertz | Ein KiloHertz entspricht 1.000 Hertz.            |

`1Hz`, das auch als `1hz` oder `1HZ` geschrieben werden kann, ist ein Zyklus pro Sekunde.

#### Flex-Einheiten

Flex-Einheiten werden durch den Typ {{cssxref("&lt;flex&gt;")}} dargestellt. Es akzeptiert den folgenden Wert.

| Einheit | Name | Beschreibung                                                        |
| ------- | ---- | ------------------------------------------------------------------- |
| `fr`    | Flex | Repräsentiert eine flexible Länge innerhalb eines Raster-Containers |

#### Auflösungseinheiten

Auflösungseinheiten werden durch den Typ {{cssxref("&lt;resolution&gt;")}} dargestellt. Sie repräsentieren die Größe eines einzigen Punktes in einer grafischen Darstellung, wie z.B. einem Bildschirm, indem sie angeben, wie viele dieser Punkte in einen CSS-Zoll, Zentimeter oder Pixel passen. Sie akzeptieren die folgenden Werte:

| Einheit     | Beschreibung           |
| ----------- | ---------------------- |
| `dpcm`      | Punkte pro Zentimeter. |
| `dpi`       | Punkte pro Zoll.       |
| `dppx`, `x` | Punkte pro px-Einheit. |

### Prozentwerte

Ein {{cssxref("&lt;percentage&gt;")}} ist ein Typ, der einen Bruchteil eines anderen Wertes darstellt.

Prozentwerte beziehen sich stets auf eine andere Größe, beispielsweise eine Länge. Jede Eigenschaft, die Prozentsätze zulässt, definiert auch die Größe, auf die sich der Prozentsatz bezieht. Diese Größe kann der Wert einer anderen Eigenschaft desselben Elements, der Wert einer Eigenschaft eines Vorfahrenelements, eine Messung eines umgebenden Blocks oder etwas anderes sein.

Zum Beispiel, wenn Sie die {{cssxref("width")}} eines Kastens als Prozentsatz angeben, bezieht sie sich auf den Prozentsatz der berechneten Breite des übergeordneten Kastens:

```css
.box {
  width: 50%;
}
```

## Mischen von Prozentsätzen und Dimensionen

Einige Eigenschaften akzeptieren eine Dimension, die entweder einer von zwei Typen sein könnte, zum Beispiel eine `<length>` **oder** ein `<percentage>`. In diesem Fall wird der erlaubte Wert in der Spezifikation als Kombinationseinheit angegeben, z.B. {{cssxref("&lt;length-percentage&gt;")}}. Andere mögliche Kombinationen sind:

- {{cssxref("&lt;frequency-percentage&gt;")}}
- {{cssxref("&lt;angle-percentage&gt;")}}
- {{cssxref("&lt;time-percentage&gt;")}}

## Spezielle Datentypen (definiert in anderen Spezifikationen)

- {{cssxref("&lt;color&gt;")}}
- {{cssxref("&lt;image&gt;")}}
- {{cssxref("&lt;position&gt;")}}

### Farbe

Der {{cssxref("&lt;color&gt;")}} Wert spezifiziert die Farbe eines Elementmerkmals (z.B. seine Hintergrundfarbe) und ist im [CSS-Color-Modul](https://drafts.csswg.org/css-color-3/) definiert.

### Bild

Der {{cssxref("&lt;image&gt;")}} Wert spezifiziert alle verschiedenen Arten von Bildern, die in CSS verwendet werden können und ist im [CSS Image Values and Replaced Content Module](https://drafts.csswg.org/css-images-4/) definiert.

### Position

Der {{cssxref("&lt;position&gt;")}} Typ definiert die zweidimensionale Positionierung eines Objekts innerhalb eines Positionierungsbereichs, zum Beispiel eines Hintergrundbildes innerhalb eines Containers. Dieser Typ wird als {{cssxref("background-position")}} interpretiert und daher in der [CSS Backgrounds and Borders Specification](https://drafts.csswg.org/css-backgrounds/) spezifiziert.

## Funktionale Notation

- {{cssxref("calc", "calc()")}}
- {{cssxref("min", "min()")}}
- {{cssxref("max", "max()")}}
- {{cssxref("minmax", "minmax()")}}
- {{cssxref("clamp", "clamp()")}}
- {{cssxref("attr", "attr()")}}

[Funktionale Notation](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) ist eine Art von Wert, der komplexere Typen repräsentieren oder spezielle Verarbeitung durch CSS aufrufen kann. Die Syntax beginnt mit dem Namen der Funktion unmittelbar gefolgt von einer linken Klammer `(` gefolgt von den Argument(en) der Notation und einer rechten Klammer `)`. Funktionen können mehrere Argumente annehmen, die ähnlich wie ein CSS-Eigenschaftswert formatiert sind.

Leerraum ist innerhalb der Klammern erlaubt, aber optional. (Aber beachten Sie Hinweise zum Leerraum innerhalb der Seiten für `min()`, `max()`, `minmax()`, und `clamp()` Funktionen.)

Einige ältere funktionale Notationen, wie die veraltete Syntax für `rgb()`, `rgba()`, `hsl()`, und `hsla()`, verwendeten Kommata, aber Kommata werden allgemein nur verwendet, um Elemente in einer Liste zu trennen. Wenn ein Komma verwendet wird, um Argumente zu trennen, ist der Leerraum vor und nach dem Komma optional.

Die Spezifikation definiert auch die `toggle()` Funktion. Sie wurde bisher noch nicht implementiert.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Textuelle Datentypen](/de/docs/Web/CSS/CSS_Values_and_Units/Textual_data_types)
- [CSS-Datentypen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types)
- [CSS-Werte und Einheiten](/de/docs/Web/CSS/CSS_Values_and_Units) Modul
- [Lernen: Werte und Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units)
