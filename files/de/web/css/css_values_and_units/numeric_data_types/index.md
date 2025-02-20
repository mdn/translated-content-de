---
title: Numerische Datentypen
slug: Web/CSS/CSS_Values_and_Units/Numeric_data_types
l10n:
  sourceCommit: 83dd1960e946e82f2cf830ac5df5703df501f73b
---

{{CSSRef}}

Jede CSS-Deklaration besteht aus einem Paar von Eigenschaft und Wert. Der Wert kann je nach Eigenschaft verschiedene Datentypen umfassen, wie z.B. eine einzelne Zahl, ein Schlüsselwort, eine Funktion oder eine Kombination verschiedener Typen; einige Werte haben Einheiten, andere nicht. Numerische Datentypen umfassen {{cssxref("&lt;integer&gt;")}}, {{cssxref("&lt;number&gt;")}}, {{cssxref("&lt;dimension&gt;")}} und {{cssxref("&lt;percentage&gt;")}} Werte. Dieser Leitfaden bietet einen Überblick über numerische Datentypen. Für detailliertere Informationen lesen Sie die jeweilige Seite zu jedem Werttyp.

## Ganzzahlen

Ein Integer ist eine oder mehrere Dezimalziffern, `0` bis `9`, wie `1024` oder `-55`. Eine Ganzzahl kann mit einem `+` oder `-` Symbol versehen sein, ohne dass ein Leerzeichen zwischen dem Symbol und der Ganzzahl steht.

## Zahlen

Ein {{cssxref("&lt;number&gt;")}} repräsentiert eine reelle Zahl, die möglicherweise einen Dezimalpunkt mit einem Bruchteil enthält oder nicht, zum Beispiel `0.255`, `128` oder `-1.2`. Zahlen können ebenfalls mit einem `+` oder `-` Symbol versehen sein.

## Dimensionen

Ein {{cssxref("&lt;dimension&gt;")}} ist ein `<number>` mit einer angehängten Einheit, zum Beispiel `45deg`, `100ms` oder `10px`. Der angehängte Einheitenbezeichner ist nicht case-sensitiv. Es gibt nie ein Leerzeichen oder andere Zeichen zwischen der Zahl und dem Einheitenbezeichner: d.h. `1 cm` ist nicht gültig.

CSS verwendet Dimensionen zur Angabe von:

- {{cssxref("&lt;length&gt;")}} (Entfernungs-Einheiten)
- {{cssxref("&lt;angle&gt;")}}
- {{cssxref("&lt;time&gt;")}}
- {{cssxref("&lt;frequency&gt;")}}
- {{cssxref("&lt;flex&gt;")}}
- {{cssxref("&lt;resolution&gt;")}}

Diese werden in den folgenden Unterabschnitten behandelt.

### Entfernungs-Einheiten

Wenn eine Entfernungseinheit, auch als Länge bekannt, als Wert für eine Eigenschaft zulässig ist, wird dies als der {{cssxref("&lt;length&gt;")}} Typ beschrieben. Es gibt zwei Arten von Längen in CSS: relative und absolute. Relative Längeneinheiten legen eine Länge im Verhältnis zu etwas anderem fest.

Es gibt zwei Arten von relativen Längen: schriftgradrelative Längen und Ansichtsfenster-Prozentlängen. Diese gibt es jeweils in zwei Typen. Schriftgradrelative Längeneinheiten sind entweder lokal schriftgradrelativ oder Wurzel schriftgradrelativ. Ansichtsfenster-Prozentlängen beziehen sich entweder auf die Höhe oder Breite des Ansichtsfensters oder, wie im [CSS Containment-Modul](/de/docs/Web/CSS/CSS_containment) definiert, auf einen [Container](/de/docs/Web/CSS/CSS_containment/Container_queries#container_query_length_units).

#### Lokale schriftgradrelative Längen

Lokale schriftgradrelative Längen sind relativ zur "lokalen" Schriftgröße oder Zeilenhöhe und spezifizieren eine Länge im Verhältnis zu einer berechneten Größe eines Merkmals des [Elements](/de/docs/Web/HTML/Element) selbst oder im Fall einer zirkulären Referenz relativ zum geerbten Wert des Elements, wie der `em` Wert für eine {{cssxref("font-size")}} Eigenschaft oder ein `lh` Wert für eine {{cssxref("line-height")}} Eigenschaft.
Zum Beispiel ist `em` relativ zur Schriftgröße des Elements und `ex` ist relativ zur x-Höhe der Schrift des Elements.

| Einheit | Relativ zu                                                                                                                                                   |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `cap`   | Großbuchstabenhöhe (die nominelle Höhe von Großbuchstaben) der Schrift des Elements.                                                                         |
| `ch`    | Durchschnittlicher Zeichenabstand eines schmalen Zeichens in der Schrift des Elements, dargestellt durch das Zeichen "0" (NULL, U+0030).                     |
| `em`    | Schriftgröße der Schrift des Elements.                                                                                                                       |
| `ex`    | x-Höhe der Schrift des Elements.                                                                                                                             |
| `ic`    | Durchschnittlicher Zeichenabstand eines vollbreiten Zeichens in der Schrift des Elements, dargestellt durch das Zeichen "水" (CJK Wasser-Ideogramm, U+6C34). |
| `lh`    | Zeilenhöhe des Elements.                                                                                                                                     |

#### Wurzel schriftgradrelative Längen

Wurzel schriftgradrelative Längen spezifizieren eine Länge im Verhältnis zum [Wurzelelement](/de/docs/Web/CSS/:root) eines Elements, wie {{HTMLElement("HTML")}} oder {{SVGElement("SVG")}}.
Zum Beispiel ist `rem` relativ zur Schriftgröße des Wurzelelements und `rex` ist die x-Höhe der Schrift des Wurzelelements.

| Einheit | Relativ zu                                                                                                                                                         |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `rcap`  | Großbuchstabenhöhe (die nominelle Höhe von Großbuchstaben) der Schrift des Wurzelelements.                                                                         |
| `rch`   | Durchschnittlicher Zeichenabstand eines schmalen Zeichens in der Schrift des Wurzelelements, dargestellt durch das Zeichen "0" (NULL, U+0030).                     |
| `rem`   | Schriftgröße der Schrift des Wurzelelements.                                                                                                                       |
| `rex`   | x-Höhe der Schrift des Wurzelelements.                                                                                                                             |
| `ric`   | Durchschnittlicher Zeichenabstand eines vollbreiten Zeichens in der Schrift des Wurzelelements, dargestellt durch das Zeichen "水" (CJK Wasser-Ideogramm, U+6C34). |
| `rlh`   | Zeilenhöhe des Wurzelelements.                                                                                                                                     |

#### Ansichtsfenster-Einheiten

Ansichtsfenster-Einheitslängen spezifizieren eine Länge relativ zu den Dimensionen des {{Glossary("Viewport", "Ansichtsfensters")}}.
Zum Beispiel ist `vw` relativ zur Breite des Ansichtsfensters und `vh` ist relativ zur Höhe des Ansichtsfensters.

| Einheit | Relativ zu                                                                                                       |
| ------- | ---------------------------------------------------------------------------------------------------------------- |
| `dvh`   | 1% der [dynamischen](/de/docs/Web/CSS/length#dynamic) Höhe des Ansichtsfensters.                                 |
| `dvw`   | 1% der [dynamischen](/de/docs/Web/CSS/length#dynamic) Breite des Ansichtsfensters.                               |
| `lvh`   | 1% der [großen](/de/docs/Web/CSS/length#large) Höhe des Ansichtsfensters.                                        |
| `lvw`   | 1% der [großen](/de/docs/Web/CSS/length#large) Breite des Ansichtsfensters.                                      |
| `svh`   | 1% der [kleinen](/de/docs/Web/CSS/length#small) Höhe des Ansichtsfensters.                                       |
| `svw`   | 1% der [kleinen](/de/docs/Web/CSS/length#small) Breite des Ansichtsfensters.                                     |
| `vb`    | 1% der Größe des Ansichtsfensters in der {{Glossary("Flow_relative_values", "Blockachse")}} des Wurzelelements.  |
| `vh`    | 1% der Höhe des Ansichtsfensters.                                                                                |
| `vi`    | 1% der Größe des Ansichtsfensters in der {{Glossary("Flow_relative_values", "Inlineachse")}} des Wurzelelements. |
| `vmax`  | 1% der größeren Dimension des Ansichtsfensters.                                                                  |
| `vmin`  | 1% der kleineren Dimension des Ansichtsfensters.                                                                 |
| `vw`    | 1% der Breite des Ansichtsfensters.                                                                              |

#### Container-Einheiten

Container-Abfrage-Längeneinheiten spezifizieren eine Länge relativ zu den Dimensionen eines [Abfrage-Containers](/de/docs/Web/CSS/CSS_containment/Container_queries).
Zum Beispiel ist `cqw` relativ zur Breite des Abfrage-Containers und `cqh` ist relativ zur Höhe des Abfrage-Containers.

| Einheit | Relativ zu                                   |
| ------- | -------------------------------------------- |
| `cqb`   | 1% der Blockgröße eines Abfrage-Containers   |
| `cqh`   | 1% der Höhe eines Abfrage-Containers         |
| `cqi`   | 1% der Inline-Größe eines Abfrage-Containers |
| `cqmax` | Der größere Wert von `cqi` oder `cqb`        |
| `cqmin` | Der kleinere Wert von `cqi` oder `cqb`       |
| `cqw`   | 1% der Breite eines Abfrage-Containers       |

### Absolute Längeneinheiten

Absolute Längeneinheiten sind an eine physische Länge gebunden: entweder ein Zoll oder ein Zentimeter. Viele dieser Einheiten sind daher nützlicher, wenn das Ausgabeformat ein festes Größenmedium ist, wie beispielsweise Druck. Zum Beispiel ist `mm` ein physischer Millimeter, 1/10 eines Zentimeters.

| Einheit | Name               | Entspricht           |
| ------- | ------------------ | -------------------- |
| `cm`    | Zentimeter         | 1cm = 96px/2.54      |
| `in`    | Zoll               | 1in = 2.54cm = 96px  |
| `mm`    | Millimeter         | 1mm = 1/10 eines 1cm |
| `pc`    | Picas              | 1pc = 1/6 eines 1in  |
| `pt`    | Punkte             | 1pt = 1/72 eines 1in |
| `px`    | Pixel              | 1px = 1/96 eines 1in |
| `Q`     | Viertel-Millimeter | 1Q = 1/40 eines 1cm  |

Wenn ein Längenwert eingeschlossen wird, ist kein Einheitenbezeichner erforderlich, wenn die Länge `0` ist. Andernfalls ist der Einheitenbezeichner erforderlich, ist nicht case-sensitiv und muss unmittelbar nach dem numerischen Teil des Wertes kommen, ohne ein Leerzeichen dazwischen.

#### Winkeleinheiten

Werte für Winkel werden durch den Typ {{cssxref("&lt;angle&gt;")}} repräsentiert und akzeptieren die folgenden Werte:

| Einheit | Name      | Beschreibung                       |
| ------- | --------- | ---------------------------------- |
| `deg`   | Grad      | Ein voller Kreis hat 360 Grad.     |
| `grad`  | Gon       | Ein voller Kreis hat 400 Gon.      |
| `rad`   | Radiant   | Ein voller Kreis hat 2π Radianten. |
| `turn`  | Drehungen | Ein voller Kreis hat eine Drehung. |

#### Zeiteinheiten

Zeitwerte werden durch den Typ {{cssxref("&lt;time&gt;")}} repräsentiert. Wenn ein Zeitwert eingeschlossen wird, ist der Einheitenbezeichner — das `s` oder `ms` — erforderlich. Er akzeptiert die folgenden Werte:

| Einheit | Name          | Beschreibung                                  |
| ------- | ------------- | --------------------------------------------- |
| `ms`    | Millisekunden | In einer Sekunde gibt es 1.000 Millisekunden. |
| `s`     | Sekunden      |                                               |

#### Frequenzeinheiten

Frequenzwerte werden durch den Typ {{cssxref("&lt;frequency&gt;")}} repräsentiert. Er akzeptiert die folgenden Werte:

| Einheit | Name      | Beschreibung                                        |
| ------- | --------- | --------------------------------------------------- |
| `Hz`    | Hertz     | Repräsentiert die Anzahl der Vorkommen pro Sekunde. |
| `kHz`   | KiloHertz | Ein KiloHertz sind 1000 Hertz.                      |

`1Hz`, kann auch als `1hz` oder `1HZ` geschrieben werden und ist ein Zyklus pro Sekunde.

#### Flex-Einheiten

Flex-Einheiten werden durch den Typ {{cssxref("&lt;flex&gt;")}} repräsentiert. Es akzeptiert den folgenden Wert:

| Einheit | Name | Beschreibung                                                       |
| ------- | ---- | ------------------------------------------------------------------ |
| `fr`    | Flex | Repräsentiert eine flexible Länge innerhalb eines Rastercontainers |

#### Auflösungseinheiten

Auflösungseinheiten werden durch den Typ {{cssxref("&lt;resolution&gt;")}} repräsentiert. Sie repräsentieren die Größe eines einzelnen Punkts in einer grafischen Darstellung, wie einem Bildschirm, indem angegeben wird, wie viele dieser Punkte in einen CSS-Zoll, Zentimeter oder Pixel passen. Es akzeptiert die folgenden Werte:

| Einheit     | Beschreibung           |
| ----------- | ---------------------- |
| `dpcm`      | Punkte pro Zentimeter. |
| `dpi`       | Punkte pro Zoll.       |
| `dppx`, `x` | Punkte pro px Einheit. |

### Prozentsätze

Ein {{cssxref("&lt;percentage&gt;")}} ist ein Typ, der einen Bruchteil eines anderen Wertes darstellt.

Prozentwerte sind immer relativ zu einer anderen Größe, zum Beispiel einer Länge. Jede Eigenschaft, die Prozentsätze zulässt, definiert auch die Menge, auf die sich der Prozentsatz bezieht. Diese Menge kann ein Wert einer anderen Eigenschaft desselben Elements, der Wert einer Eigenschaft eines Vorfahren-Elements, eine Messung eines enthaltenden Blocks oder etwas anderes sein.

Zum Beispiel, wenn Sie die {{cssxref("width")}} einer Box als Prozentsatz angeben, bezieht sich dies auf den Prozentsatz der berechneten Breite des übergeordneten Elements der Box:

```css
.box {
  width: 50%;
}
```

## Mischen von Prozentsätzen und Dimensionen

Einige Eigenschaften akzeptieren eine Dimension, die entweder eine von zwei Typen sein kann, zum Beispiel eine `<length>` **oder** ein `<percentage>`. In diesem Fall wird der erlaubte Wert in der Spezifikation als kombiniert, z.B. {{cssxref("&lt;length-percentage&gt;")}}. Andere mögliche Kombinationen sind:

- {{cssxref("&lt;frequency-percentage&gt;")}}
- {{cssxref("&lt;angle-percentage&gt;")}}
- {{cssxref("&lt;time-percentage&gt;")}}

## Spezielle Datentypen (in anderen Spezifikationen definiert)

- {{cssxref("&lt;color&gt;")}}
- {{cssxref("&lt;image&gt;")}}
- {{cssxref("&lt;position&gt;")}}

### Farbe

Der {{cssxref("&lt;color&gt;")}} Wert spezifiziert die Farbe einer Merkmals eines Elements (z.B. dessen Hintergrundfarbe) und ist im [CSS Color Module](https://drafts.csswg.org/css-color-3/) definiert.

### Bild

Der {{cssxref("&lt;image&gt;")}} Wert spezifiziert alle unterschiedlichen Arten von Bildern, die in CSS verwendet werden können, und ist im [CSS Image Values and Replaced Content Module](https://www.w3.org/TR/css-images-4/) definiert.

### Position

Der {{cssxref("&lt;position&gt;")}} Typ definiert die 2D-Positionierung eines Objekts innerhalb eines Positionierungsbereichs, z.B. eines Hintergrundbilds innerhalb eines Containers. Dieser Typ wird als {{cssxref("background-position")}} interpretiert und daher in der [CSS Backgrounds and Borders specification](https://www.w3.org/TR/css-backgrounds-3/) angegeben.

## Funktionale Notation

- {{cssxref("calc", "calc()")}}
- {{cssxref("min", "min()")}}
- {{cssxref("max", "max()")}}
- {{cssxref("minmax", "minmax()")}}
- {{cssxref("clamp", "clamp()")}}
- {{cssxref("toggle", "toggle()")}}
- {{cssxref("attr", "attr()")}}

[Funktionale Notation](/de/docs/Web/CSS/CSS_Functions) ist ein Werttyp, der komplexere Typen darstellen oder spezielle Verarbeitungen durch CSS initiieren kann. Die Syntax beginnt mit dem Namen der Funktion, gefolgt von einer linken Klammer `(`, gefolgt von dem/den Argument(en), die in der Notation verarbeitet werden, gefolgt von einer rechten Klammer `)`. Funktionen können mehrere Argumente annehmen, die ähnlich wie ein CSS-Wert formatiert sind.

Leerzeichen sind innerhalb der Klammern erlaubt, aber optional. (Beachten Sie jedoch die Anmerkungen zu Leerzeichen auf den Seiten für die Funktionen `min()`, `max()`, `minmax()` und `clamp()`.)

Einige veraltete funktionale Notationen, wie die veraltete Syntax für `rgb()`, `rgba()`, `hsl()` und `hsla()`, verwendeten Kommas, aber Kommas werden im Allgemeinen nur verwendet, um Elemente in einer Liste zu trennen. Wenn ein Komma verwendet wird, um Argumente zu trennen, sind Leerzeichen vor und nach dem Komma optional.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Textuelle Datentypen](/de/docs/Web/CSS/CSS_Values_and_Units/Textual_data_types)
- [CSS-Datentypen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types)
- [CSS-Werte- und Einheit](/de/docs/Web/CSS/CSS_Values_and_Units) Modul
- [Lernen: Werte und Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units)
