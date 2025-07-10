---
title: Numerische Datentypen
slug: Web/CSS/CSS_Values_and_Units/Numeric_data_types
l10n:
  sourceCommit: 594ae0d4ffb6326a9529fe366d30ca633309ee30
---

{{CSSRef}}

Jede CSS-Deklaration besteht aus einem Eigenschafts-/Wertpaar. Der Wert kann je nach Eigenschaft verschiedene Datentypen umfassen, wie zum Beispiel eine einzelne Zahl, ein Schlüsselwort, eine Funktion oder eine Kombination verschiedener Typen; einige Werte haben Einheiten, während andere dies nicht tun. Numerische Datentypen umfassen {{cssxref("&lt;integer&gt;")}}, {{cssxref("&lt;number&gt;")}}, {{cssxref("&lt;dimension&gt;")}} und {{cssxref("&lt;percentage&gt;")}} Werte. Dieser Leitfaden bietet einen Überblick über numerische Datentypen. Weitere detaillierte Informationen finden Sie auf der Seite für jeden Werttyp.

## Ganzzahlen

Eine Ganzzahl ist eine oder mehrere Dezimalstellen, `0` bis `9`, wie zum Beispiel `1024` oder `-55`. Eine Ganzzahl kann durch ein `+` oder `-` Symbol vorangestellt werden, ohne Leerzeichen zwischen dem Symbol und der Ganzzahl.

## Zahlen

Ein {{cssxref("&lt;number&gt;")}} repräsentiert eine reelle Zahl, die möglicherweise einen Dezimalpunkt mit einem Bruchteil enthält oder nicht, zum Beispiel `0.255`, `128` oder `-1.2`. Zahlen können auch durch ein `+` oder `-` Symbol vorangestellt sein.

## Dimensionen

Ein {{cssxref("&lt;dimension&gt;")}} ist ein `<number>`, dem eine Einheit angehängt ist, zum Beispiel `45deg`, `100ms` oder `10px`. Der angehängte Einheitenbezeichner ist nicht case-sensitiv. Es gibt niemals ein Leerzeichen oder andere Zeichen zwischen der Zahl und dem Einheitenbezeichner: Das heißt, `1 cm` ist nicht gültig.

CSS verwendet Dimensionen zur Spezifizierung von:

- {{cssxref("&lt;length&gt;")}} (Längeneinheiten)
- {{cssxref("&lt;angle&gt;")}}
- {{cssxref("&lt;time&gt;")}}
- {{cssxref("&lt;frequency&gt;")}}
- {{cssxref("&lt;flex&gt;")}}
- {{cssxref("&lt;resolution&gt;")}}

Diese werden in den folgenden Unterabschnitten behandelt.

### Längeneinheiten

Wo eine Längeneinheit, auch bekannt als Länge, als Wert für eine Eigenschaft erlaubt ist, wird dies als {{cssxref("&lt;length&gt;")}} Typ beschrieben. Es gibt zwei Arten von Längen in CSS: relative und absolute. Relative Längeneinheiten spezifizieren eine Länge in Relation zu etwas anderem.

Es gibt zwei Arten von relativen Längen: schriftgrößenabhängige Längen und ansichtsportabhängige Längen. Diese kommen beide in zwei Arten vor. Schriftgrößenabhängige Längeneinheiten sind entweder lokal schriftgrößenabhängig oder wurzel schriftgrößenabhängig. Ansichtsportabhängige Längen sind entweder relativ zur Höhe oder Breite des Ansichtsports oder, wie im [CSS Containment Modul](/de/docs/Web/CSS/CSS_containment) definiert, relativ zu einem [Container](/de/docs/Web/CSS/CSS_containment/Container_queries#container_query_length_units).

#### Lokal schriftgrößenabhängige Längen

Lokal schriftgrößenabhängige Längen sind relativ zur "lokalen" Schriftgröße oder Zeilenhöhe und spezifizieren eine Länge in Relation zu einer berechneten Größe eines Merkmals des [Elements](/de/docs/Web/HTML/Reference/Elements) selbst oder relativ zum geerbten Wert des Elements im Fall einer Ringschleife, wie der `em` Wert für eine {{cssxref("font-size")}} Eigenschaft oder ein `lh` Wert für eine {{cssxref("line-height")}} Eigenschaft. Zum Beispiel ist `em` relativ zur Schriftgröße des Elements und `ex` ist relativ zur x-Höhe der Schrift des Elements.

| Einheit | Relativ zu                                                                                                                                                |
| ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `cap`   | Großbuchstabenhöhe (die nominelle Höhe von Großbuchstaben) der Schrift des Elements.                                                                      |
| `ch`    | Durchschnittliche Zeichenweiterung eines schmalen Glyphs in der Schrift des Elements, dargestellt durch das "0" (NULL, U+0030) Glyph.                     |
| `em`    | Schriftgröße der Schrift des Elements.                                                                                                                    |
| `ex`    | x-Höhe der Schrift des Elements.                                                                                                                          |
| `ic`    | Durchschnittliche Zeichenweiterung eines vollbreiten Glyphs in der Schrift des Elements, dargestellt durch das "水" (CJK Wasser-Ideogramm, U+6C34) Glyph. |
| `lh`    | Zeilenhöhe des Elements.                                                                                                                                  |

#### Wurzel schriftgrößenabhängige Längen

Wurzel schriftgrößenabhängige Längen spezifizieren eine Länge in Relation zum [Wurzelelement](/de/docs/Web/CSS/:root) Vorfahren eines Elements, wie zum Beispiel {{HTMLElement("HTML")}} oder {{SVGElement("SVG")}}.
Zum Beispiel ist `rem` relativ zur Schriftgröße des Wurzelelements und `rex` ist die x-Höhe der Schrift des Wurzelelements.

| Einheit | Relativ zu                                                                                                                                                      |
| ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `rcap`  | Großbuchstabenhöhe (die nominelle Höhe von Großbuchstaben) der Schrift des Wurzelelements.                                                                      |
| `rch`   | Durchschnittliche Zeichenweiterung eines schmalen Glyphs in der Schrift des Wurzelelements, dargestellt durch das "0" (NULL, U+0030) Glyph.                     |
| `rem`   | Schriftgröße der Schrift des Wurzelelements.                                                                                                                    |
| `rex`   | x-Höhe der Schrift des Wurzelelements.                                                                                                                          |
| `ric`   | Durchschnittliche Zeichenweiterung eines vollbreiten Glyphs in der Schrift des Wurzelelements, dargestellt durch das "水" (CJK Wasser-Ideogramm, U+6C34) Glyph. |
| `rlh`   | Zeilenhöhe des Wurzelelements.                                                                                                                                  |

#### Ansichtsporteinheiten

Ansichtsporteinheiten spezifizieren eine Länge relativ zu den Dimensionen des {{Glossary("Viewport", "Ansichtsports")}}.
Zum Beispiel ist `vw` relativ zur Breite des Ansichtsports und `vh` relativ zur Höhe des Ansichtsports.

| Einheit | Relativ zu                                                                                                     |
| ------- | -------------------------------------------------------------------------------------------------------------- |
| `dvh`   | 1% der [dynamischen](/de/docs/Web/CSS/length#dynamic_viewport_units) Höhe des Ansichtsports.                   |
| `dvw`   | 1% der [dynamischen](/de/docs/Web/CSS/length#dynamic_viewport_units) Breite des Ansichtsports.                 |
| `lvh`   | 1% der [großen](/de/docs/Web/CSS/length#large_viewport_units) Höhe des Ansichtsports.                          |
| `lvw`   | 1% der [großen](/de/docs/Web/CSS/length#large_viewport_units) Breite des Ansichtsports.                        |
| `svh`   | 1% der [kleinen](/de/docs/Web/CSS/length#small_viewport_units) Höhe des Ansichtsports.                         |
| `svw`   | 1% der [kleinen](/de/docs/Web/CSS/length#small_viewport_units) Breite des Ansichtsports.                       |
| `vb`    | 1% der Größe des Ansichtsports in der {{Glossary("Flow_relative_values", "Block-Achse")}} des Wurzelelements.  |
| `vh`    | 1% der Höhe des Ansichtsports.                                                                                 |
| `vi`    | 1% der Größe des Ansichtsports in der {{Glossary("Flow_relative_values", "Inline-Achse")}} des Wurzelelements. |
| `vmax`  | 1% der größeren Dimension des Ansichtsports.                                                                   |
| `vmin`  | 1% der kleineren Dimension des Ansichtsports.                                                                  |
| `vw`    | 1% der Breite des Ansichtsports.                                                                               |

#### Containereinheiten

Containereinheiten spezifizieren eine Länge relativ zu den Dimensionen eines [Abfragecontainers](/de/docs/Web/CSS/CSS_containment/Container_queries).
Zum Beispiel ist `cqw` relativ zur Breite des Abfragecontainers und `cqh` relativ zur Höhe des Abfragecontainers.

| Einheit | Relativ zu                                  |
| ------- | ------------------------------------------- |
| `cqb`   | 1% der Blockgröße eines Abfragecontainers   |
| `cqh`   | 1% der Höhe eines Abfragecontainers         |
| `cqi`   | 1% der Inline-Größe eines Abfragecontainers |
| `cqmax` | Der größere Wert von `cqi` oder `cqb`       |
| `cqmin` | Der kleinere Wert von `cqi` oder `cqb`      |
| `cqw`   | 1% der Breite eines Abfragecontainers       |

### Absolute Längeneinheiten

Absolute Längeneinheiten sind an eine physische Länge gebunden: entweder ein Zoll oder ein Zentimeter. Viele dieser Einheiten sind daher nützlicher, wenn das Ausgabeformat ein festes Größenmedium ist, wie zum Beispiel Druck. Zum Beispiel ist `mm` ein physischer Millimeter, 1/10 eines Zentimeters.

| Einheit | Name              | Entspricht          |
| ------- | ----------------- | ------------------- |
| `cm`    | Zentimeter        | 1cm = 96px/2.54     |
| `in`    | Zoll              | 1in = 2.54cm = 96px |
| `mm`    | Millimeter        | 1mm = 1/10 von 1cm  |
| `pc`    | Pica              | 1pc = 1/6 von 1in   |
| `pt`    | Punkt             | 1pt = 1/72 von 1in  |
| `px`    | Pixel             | 1px = 1/96 von 1in  |
| `Q`     | Viertelmillimeter | 1Q = 1/40 von 1cm   |

Bei der Einbindung eines Längenwerts, wenn die Länge `0` ist, ist der Einheitenbezeichner nicht erforderlich. Andernfalls ist der Einheitenbezeichner erforderlich, nicht case-sensitiv und muss unmittelbar nach dem numerischen Teil des Wertes kommen, ohne Leerzeichen dazwischen.

#### Winkeleinheiten

Winkelwerte werden durch den Typ {{cssxref("&lt;angle&gt;")}} dargestellt und akzeptieren die folgenden Werte:

| Einheit | Name    | Beschreibung                    |
| ------- | ------- | ------------------------------- |
| `deg`   | Grad    | Ein Vollwinkel hat 360 Grad.    |
| `grad`  | Gon     | Ein Vollwinkel hat 400 Gon.     |
| `rad`   | Radiant | Ein Vollwinkel hat 2π Radiant.  |
| `turn`  | Umdr.   | Ein Vollwinkel hat 1 Umdrehung. |

#### Zeiteinheiten

Zeitwerte werden durch den Typ {{cssxref("&lt;time&gt;")}} dargestellt. Wenn ein Zeitwert angegeben wird, ist der Einheitenbezeichner — `s` oder `ms` — erforderlich. Es akzeptiert die folgenden Werte.

| Einheit | Name          | Beschreibung                          |
| ------- | ------------- | ------------------------------------- |
| `ms`    | Millisekunden | Eine Sekunde hat 1.000 Millisekunden. |
| `s`     | Sekunden      |                                       |

#### Frequenzeinheiten

Frequenzwerte werden durch den Typ {{cssxref("&lt;frequency&gt;")}} dargestellt. Es akzeptiert die folgenden Werte.

| Einheit | Name      | Beschreibung                                        |
| ------- | --------- | --------------------------------------------------- |
| `Hz`    | Hertz     | Repräsentiert die Anzahl der Vorkommen pro Sekunde. |
| `kHz`   | KiloHertz | Ein KiloHertz sind 1000 Hertz.                      |

`1Hz`, was auch als `1hz` oder `1HZ` geschrieben werden kann, ist ein Zyklus pro Sekunde.

#### Flex-Einheiten

Flex-Einheiten werden durch den Typ {{cssxref("&lt;flex&gt;")}} dargestellt. Es akzeptiert den folgenden Wert.

| Einheit | Name | Beschreibung                                                      |
| ------- | ---- | ----------------------------------------------------------------- |
| `fr`    | Flex | Repräsentiert eine flexible Länge innerhalb eines Grid-Containers |

#### Auflösungseinheiten

Auflösungseinheiten werden durch den Typ {{cssxref("&lt;resolution&gt;")}} dargestellt. Sie repräsentieren die Größe eines einzelnen Punkts in einer grafischen Darstellung, wie zum Beispiel einem Bildschirm, indem sie angeben, wie viele dieser Punkte in einen CSS-Zoll, Zentimeter oder Pixel passen. Es akzeptiert die folgenden Werte:

| Einheit     | Beschreibung           |
| ----------- | ---------------------- |
| `dpcm`      | Punkte pro Zentimeter. |
| `dpi`       | Punkte pro Zoll.       |
| `dppx`, `x` | Punkte pro px Einheit. |

### Prozentsätze

Ein {{cssxref("&lt;percentage&gt;")}} ist ein Typ, der einen Bruchteil eines anderen Wertes repräsentiert.

Prozentwerte sind immer relativ zu einer anderen Größe, zum Beispiel einer Länge. Jede Eigenschaft, die Prozentsätze zulässt, definiert auch die Größe, auf die sich der Prozentsatz bezieht. Diese Größe kann der Wert einer anderen Eigenschaft desselben Elements sein, der Wert einer Eigenschaft eines Vorfahrenelements, eine Messung eines umgebenden Blocks oder etwas anderes.

Zum Beispiel, wenn Sie die {{cssxref("width")}} einer Box als Prozentsatz angeben, bezieht sie sich auf den Prozentsatz der berechneten Breite des Elternteils der Box:

```css
.box {
  width: 50%;
}
```

## Mischung von Prozentsätzen und Dimensionen

Einige Eigenschaften akzeptieren eine Dimension, die entweder einer von zwei Typen sein könnte, zum Beispiel ein `<length>` **oder** ein `<percentage>`. In diesem Fall ist der erlaubte Wert in der Spezifikation als Kombinationseinheit detailliert angegeben, z.B. {{cssxref("&lt;length-percentage&gt;")}}. Andere mögliche Kombinationen sind wie folgt:

- {{cssxref("&lt;frequency-percentage&gt;")}}
- {{cssxref("&lt;angle-percentage&gt;")}}
- {{cssxref("&lt;time-percentage&gt;")}}

## Spezielle Datentypen (in anderen Spezifikationen definiert)

- {{cssxref("&lt;color&gt;")}}
- {{cssxref("&lt;image&gt;")}}
- {{cssxref("&lt;position&gt;")}}

### Farbe

Der {{cssxref("&lt;color&gt;")}} Wert legt die Farbe eines Merkmal eines Elements fest (z.B. die Hintergrundfarbe) und ist im [CSS Color Module](https://drafts.csswg.org/css-color-3/) definiert.

### Bild

Der {{cssxref("&lt;image&gt;")}} Wert spezifiziert alle verschiedenen Typen von Bildern, die in CSS verwendet werden können und ist im [CSS Image Values and Replaced Content Module](https://drafts.csswg.org/css-images-4/) definiert.

### Position

Der {{cssxref("&lt;position&gt;")}} Typ definiert die 2D-Positionierung eines Objekts innerhalb eines Positionierungsbereichs, zum Beispiel eines Hintergrundbildes innerhalb eines Containers. Dieser Typ wird als {{cssxref("background-position")}} interpretiert und daher in der [CSS Backgrounds and Borders Specification](https://drafts.csswg.org/css-backgrounds/) festgelegt.

## Funktionale Notation

- {{cssxref("calc", "calc()")}}
- {{cssxref("min", "min()")}}
- {{cssxref("max", "max()")}}
- {{cssxref("minmax", "minmax()")}}
- {{cssxref("clamp", "clamp()")}}
- {{cssxref("attr", "attr()")}}

[Funktionale Notation](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) ist ein Wertetyp, der komplexere Typen repräsentieren oder spezielle Verarbeitung durch CSS aufrufen kann. Die Syntax beginnt mit dem Namen der Funktion, gefolgt von einer linken Klammer `(`, gefolgt von den Argument(en) der Notation, gefolgt von einer rechten Klammer `)`. Funktionen können mehrere Argumente enthalten, die ähnlich wie ein CSS-Eigenschaftswert formatiert sind.

Leerzeichen sind innerhalb der Klammern erlaubt, aber optional. (Siehe jedoch Hinweise zu Leerzeichen auf Seiten für `min()`, `max()`, `minmax()` und `clamp()` Funktionen.)

Einige alte Notationen, wie die alte Syntax für `rgb()`, `rgba()`, `hsl()` und `hsla()`, verwendeten Kommas, aber Kommas werden im Allgemeinen nur verwendet, um Elemente in einer Liste zu trennen. Wenn ein Komma verwendet wird, um Argumente zu trennen, sind Leerzeichen optional vor und nach dem Komma.

Die Spezifikation definiert auch die `toggle()` Funktion. Diese wurde bisher jedoch noch nicht implementiert.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Textuelle Datentypen](/de/docs/Web/CSS/CSS_Values_and_Units/Textual_data_types)
- [CSS-Datentypen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types)
- [CSS-Werte und Einheiten](/de/docs/Web/CSS/CSS_Values_and_Units) Modul
- [Lernen: Werte und Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units)
