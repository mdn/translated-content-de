---
title: Numerische Datentypen
slug: Web/CSS/CSS_values_and_units/Numeric_data_types
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Jede CSS-Deklaration besteht aus einem Paar aus Eigenschaft und Wert. Der Wert kann, abhängig von der Eigenschaft, verschiedene Datentypen enthalten, wie z.B. eine einzelne Zahl, ein Schlüsselwort, eine Funktion oder eine Kombination unterschiedlicher Typen; einige Werte haben Einheiten, während andere dies nicht tun. Numerische Datentypen umfassen {{cssxref("&lt;integer&gt;")}}, {{cssxref("&lt;number&gt;")}}, {{cssxref("&lt;dimension&gt;")}} und {{cssxref("&lt;percentage&gt;")}} Werte. Dieser Leitfaden bietet einen Überblick über numerische Datentypen. Für detailliertere Informationen konsultieren Sie die Seite für jeden Wertetyp.

## Ganzzahlen

Eine Ganzzahl besteht aus einem oder mehreren Dezimalstellen, `0` bis `9`, wie z.B. `1024` oder `-55`. Einer Ganzzahl kann ein `+`- oder `-`-Symbol vorangestellt werden, ohne Leerraum zwischen dem Symbol und der Ganzzahl.

## Zahlen

Ein {{cssxref("&lt;number&gt;")}} repräsentiert eine reelle Zahl, die möglicherweise oder möglicherweise nicht einen Dezimalpunkt mit einer Bruchkomponente enthält, zum Beispiel `0.255`, `128` oder `-1.2`. Zahlen können ebenfalls von einem `+`- oder `-`-Symbol begleitet werden.

## Dimensionen

Ein {{cssxref("&lt;dimension&gt;")}} ist eine `<number>` mit einer daran angehängten Einheit, zum Beispiel `45deg`, `100ms` oder `10px`. Der angehängte Einheitsbezeichner ist nicht case-sensitiv. Zwischen der Zahl und dem Einheitsbezeichner darf nie ein Leerzeichen oder andere Zeichen stehen: d.h. `1 cm` ist nicht gültig.

CSS verwendet Dimensionen zum Spezifizieren von:

- {{cssxref("&lt;length&gt;")}} (Maßeinheiten)
- {{cssxref("&lt;angle&gt;")}}
- {{cssxref("&lt;time&gt;")}}
- {{cssxref("&lt;frequency&gt;")}}
- {{cssxref("&lt;flex&gt;")}}
- {{cssxref("&lt;resolution&gt;")}}

Diese werden alle in den untenstehenden Unterabschnitten behandelt.

### Maßeinheiten

Wo eine Maßeinheit, auch als Länge bekannt, als Wert für eine Eigenschaft zulässig ist, wird dies als {{cssxref("&lt;length&gt;")}} Typ beschrieben. In CSS gibt es zwei Arten von Längen: relative und absolute. Relative Längeneinheiten geben eine Länge im Verhältnis zu etwas anderem an.

Es gibt zwei Arten von relativen Längen: schriftbezogene Längen und Ansichtsfenster-Prozent-Längen. Diese kommen in zwei Arten vor. Schriftbezogene Längeneinheiten sind entweder lokal schriftbezogen oder wurzelschriftbezogen. Ansichtsfenster-Prozent-Längen beziehen sich entweder auf die Höhe oder Breite des Ansichtsfensters oder, wie im [CSS Containment-Modul](/de/docs/Web/CSS/CSS_containment) definiert, auf einen [Container](/de/docs/Web/CSS/CSS_containment/Container_queries#container_query_length_units).

#### Lokal schriftbezogene Längen

Lokal schriftbezogene Längen sind relativ zur "lokalen" Schriftgröße oder Zeilenhöhe und geben eine Länge im Verhältnis zu einer berechneten Größe eines Merkmals des [Elements](/de/docs/Web/HTML/Reference/Elements) selbst an, oder relativ zum geerbten Wert des Elements im Falle eines zirkulären Verweises, wie der `em`-Wert für eine {{cssxref("font-size")}}-Eigenschaft oder ein `lh`-Wert für eine {{cssxref("line-height")}}-Eigenschaft.
Beispielsweise ist `em` relativ zur Schriftgröße des Elements und `ex` ist relativ zur x-Höhe der Schrift des Elements.

| Einheit | Relativ zu                                                                                                                                         |
| ------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `cap`   | Großbuchstabenhöhe (nominale Höhe der Großbuchstaben) der Schrift des Elements.                                                                    |
| `ch`    | Durchschnittlicher Zeichenabstand eines schmalen Glyphs in der Schrift des Elements, dargestellt durch das "0"-Glyph (NULL, U+0030).               |
| `em`    | Schriftgröße der Schrift des Elements.                                                                                                             |
| `ex`    | x-Höhe der Schrift des Elements.                                                                                                                   |
| `ic`    | Durchschnittlicher Zeichenabstand eines vollbreiten Glyphs in der Schrift des Elements, dargestellt durch das "水" (CJK Wasser-Ideogramm, U+6C34). |
| `lh`    | Zeilenhöhe des Elements.                                                                                                                           |

#### Wurzelschriftbezogene Längen

Wurzelschriftbezogene Längen spezifizieren eine Länge in Relation zum [Wurzelelement](/de/docs/Web/CSS/Reference/Selectors/:root) Vorfahren des Elements, wie {{HTMLElement("HTML")}} oder {{SVGElement("SVG")}}.
Zum Beispiel ist `rem` relativ zur Schriftgröße des Wurzelelements und `rex` ist die x-Höhe der Schrift des Wurzelelements.

| Einheit | Relativ zu                                                                                                                                               |
| ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `rcap`  | Großbuchstabenhöhe (nominale Höhe der Großbuchstaben) der Schrift des Wurzelelements.                                                                    |
| `rch`   | Durchschnittlicher Zeichenabstand eines schmalen Glyphs in der Schrift des Wurzelelements, dargestellt durch das "0"-Glyph (NULL, U+0030).               |
| `rem`   | Schriftgröße der Schrift des Wurzelelements.                                                                                                             |
| `rex`   | x-Höhe der Schrift des Wurzelelements.                                                                                                                   |
| `ric`   | Durchschnittlicher Zeichenabstand eines vollbreiten Glyphs in der Schrift des Wurzelelements, dargestellt durch das "水" (CJK Wasser-Ideogramm, U+6C34). |
| `rlh`   | Zeilenhöhe des Wurzelelements.                                                                                                                           |

#### Ansichtsfenster-Einheiten

Ansichtsfensterlängeneinheiten spezifizieren eine Länge relativ zu den Dimensionen des {{Glossary("Viewport", "Ansichtsfensters")}}.
Beispielsweise ist `vw` relativ zur Breite des Ansichtsfensters und `vh` ist relativ zur Höhe des Ansichtsfensters.

| Einheit | Relativ zu                                                                                                         |
| ------- | ------------------------------------------------------------------------------------------------------------------ |
| `dvh`   | 1% der [dynamischen](/de/docs/Web/CSS/Reference/Values/length#dynamic_viewport_units) Höhe des Ansichtsfensters.   |
| `dvw`   | 1% der [dynamischen](/de/docs/Web/CSS/Reference/Values/length#dynamic_viewport_units) Breite des Ansichtsfensters. |
| `lvh`   | 1% der [großen](/de/docs/Web/CSS/Reference/Values/length#large_viewport_units) Höhe des Ansichtsfensters.          |
| `lvw`   | 1% der [großen](/de/docs/Web/CSS/Reference/Values/length#large_viewport_units) Breite des Ansichtsfensters.        |
| `svh`   | 1% der [kleinen](/de/docs/Web/CSS/Reference/Values/length#small_viewport_units) Höhe des Ansichtsfensters.         |
| `svw`   | 1% der [kleinen](/de/docs/Web/CSS/Reference/Values/length#small_viewport_units) Breite des Ansichtsfensters.       |
| `vb`    | 1% der Größe des Ansichtsfensters in der {{Glossary("Flow_relative_values", "Blockachse")}} des Wurzelelements.    |
| `vh`    | 1% der Höhe des Ansichtsfensters.                                                                                  |
| `vi`    | 1% der Größe des Ansichtsfensters in der {{Glossary("Flow_relative_values", "Inlineachse")}} des Wurzelelements.   |
| `vmax`  | 1% der größeren Dimension des Ansichtsfensters.                                                                    |
| `vmin`  | 1% der kleineren Dimension des Ansichtsfensters.                                                                   |
| `vw`    | 1% der Breite des Ansichtsfensters.                                                                                |

#### Container-Einheiten

Längeneinheiten für Container-Abfragen spezifizieren eine Länge relativ zu den Dimensionen eines [Abfrage-Containers](/de/docs/Web/CSS/CSS_containment/Container_queries).
Beispielsweise ist `cqw` relativ zur Breite des Abfrage-Containers und `cqh` ist relativ zur Höhe des Abfrage-Containers.

| Einheit | Relativ zu                                   |
| ------- | -------------------------------------------- |
| `cqb`   | 1% der Blockgröße eines Abfrage-Containers   |
| `cqh`   | 1% der Höhe eines Abfrage-Containers         |
| `cqi`   | 1% der Inline-Größe eines Abfrage-Containers |
| `cqmax` | Der größere Wert von `cqi` oder `cqb`        |
| `cqmin` | Der kleinere Wert von `cqi` oder `cqb`       |
| `cqw`   | 1% der Breite eines Abfrage-Containers       |

### Absolute Längeneinheiten

Absolute Längeneinheiten sind an eine physische Länge gebunden: entweder einen Zoll oder einen Zentimeter. Viele dieser Einheiten sind daher nützlicher, wenn das Ausgabemedium eine feste Größe hat, wie beispielsweise beim Druck. Zum Beispiel ist `mm` ein physikalischer Millimeter, 1/10 eines Zentimeters.

| Einheit | Name              | Entspricht          |
| ------- | ----------------- | ------------------- |
| `cm`    | Zentimeter        | 1cm = 96px/2,54     |
| `in`    | Zoll              | 1in = 2,54cm = 96px |
| `mm`    | Millimeter        | 1mm = 1/10 eines cm |
| `pc`    | Pica              | 1pc = 1/6 eines in  |
| `pt`    | Punkt             | 1pt = 1/72 eines in |
| `px`    | Pixel             | 1px = 1/96 eines in |
| `Q`     | Viertelmillimeter | 1Q = 1/40 eines cm  |

Wenn Sie einen Längenwert einschließen, ist bei einer Länge von `0` der Einheitsbezeichner nicht erforderlich. Andernfalls ist der Einheitsbezeichner erforderlich, nicht case-sensitiv und muss unmittelbar nach dem numerischen Teil des Werts stehen, ohne dazwischenliegenden Leerraum.

#### Winkeleinheiten

Werte von Winkeleinheiten werden durch den Typ {{cssxref("&lt;angle&gt;")}} dargestellt und akzeptieren die folgenden Werte:

| Einheit | Name      | Beschreibung                                 |
| ------- | --------- | -------------------------------------------- |
| `deg`   | Grad      | Ein voller Kreis hat 360 Grad.               |
| `grad`  | Gon       | Ein voller Kreis hat 400 Gon.                |
| `rad`   | Radiant   | Ein voller Kreis hat 2π Radiant.             |
| `turn`  | Umdrehung | Ein voller Kreis entspricht einer Umdrehung. |

#### Zeiteinheiten

Zeitwerte werden durch den Typ {{cssxref("&lt;time&gt;")}} dargestellt. Wenn ein Zeitwert inkludiert wird, ist der Einheitsbezeichner — `s` oder `ms` — erforderlich. Er akzeptiert die folgenden Werte.

| Einheit | Name          | Beschreibung                                  |
| ------- | ------------- | --------------------------------------------- |
| `ms`    | Millisekunden | Es gibt 1.000 Millisekunden in einer Sekunde. |
| `s`     | Sekunden      |                                               |

#### Frequenzeinheiten

Frequenzwerte werden durch den Typ {{cssxref("&lt;frequency&gt;")}} dargestellt. Er akzeptiert die folgenden Werte.

| Einheit | Name      | Beschreibung                                        |
| ------- | --------- | --------------------------------------------------- |
| `Hz`    | Hertz     | Repräsentiert die Anzahl der Vorkommen pro Sekunde. |
| `kHz`   | KiloHertz | Ein KiloHertz entspricht 1000 Hertz.                |

`1Hz`, was auch als `1hz` oder `1HZ` geschrieben werden kann, ist ein Zyklus pro Sekunde.

#### Flex-Einheiten

Flex-Einheiten werden durch den Typ {{cssxref("&lt;flex&gt;")}} dargestellt. Er akzeptiert den folgenden Wert.

| Einheit | Name | Beschreibung                                                         |
| ------- | ---- | -------------------------------------------------------------------- |
| `fr`    | Flex | Repräsentiert eine flexible Länge innerhalb eines Raster-Containers. |

#### Auflösungseinheiten

Auflösungseinheiten werden durch den Typ {{cssxref("&lt;resolution&gt;")}} dargestellt. Sie repräsentieren die Größe eines einzelnen Punkts in einer grafischen Darstellung, wie einem Bildschirm, indem sie angeben, wie viele dieser Punkte in einem CSS-Zoll, Zentimeter oder Pixel passen. Er akzeptiert die folgenden Werte:

| Einheit     | Beschreibung           |
| ----------- | ---------------------- |
| `dpcm`      | Punkte pro Zentimeter. |
| `dpi`       | Punkte pro Zoll.       |
| `dppx`, `x` | Punkte pro px-Einheit. |

### Prozentsätze

Ein {{cssxref("&lt;percentage&gt;")}} ist ein Typ, der einen Bruchteil eines anderen Wertes repräsentiert.

Prozentwerte sind immer relativ zu einer anderen Größe, beispielsweise einer Länge. Jede Eigenschaft, die Prozentsätze zulässt, definiert auch die Größe, auf die sich der Prozentsatz bezieht. Diese Größe kann ein Wert einer anderen Eigenschaft desselben Elements sein, der Wert einer Eigenschaft eines Vorfahrenelements, ein Maß eines umgebenden Blocks oder etwas anderes.

Zum Beispiel, wenn Sie die {{cssxref("width")}} einer Box als Prozentsatz angeben, bezieht sie sich auf den Prozentsatz der berechneten Breite des übergeordneten Elements der Box:

```css
.box {
  width: 50%;
}
```

## Mischung von Prozentsätzen und Dimensionen

Einige Eigenschaften akzeptieren eine Dimension, die entweder einer von zwei Typen sein kann, z.B. eine `<length>` **oder** eine `<percentage>`. In diesem Fall wird der zulässige Wert in der Spezifikation als Kombinationseinheit beschrieben, z.B. {{cssxref("&lt;length-percentage&gt;")}}. Andere mögliche Kombinationen sind wie folgt:

- {{cssxref("&lt;frequency-percentage&gt;")}}
- {{cssxref("&lt;angle-percentage&gt;")}}
- {{cssxref("&lt;time-percentage&gt;")}}

## Spezielle Datentypen (in anderen Spezifikationen definiert)

- {{cssxref("&lt;color&gt;")}}
- {{cssxref("&lt;image&gt;")}}
- {{cssxref("&lt;position&gt;")}}

### Farbe

Der {{cssxref("&lt;color&gt;")}}-Wert gibt die Farbe eines Elementmerkmals an (z.B. die Hintergrundfarbe) und ist im [CSS Color Module](https://drafts.csswg.org/css-color-3/) definiert.

### Bild

Der {{cssxref("&lt;image&gt;")}}-Wert spezifiziert alle verschiedenen Bildtypen, die in CSS verwendet werden können, und ist im [CSS Image Values and Replaced Content Module](https://drafts.csswg.org/css-images-4/) definiert.

### Position

Der {{cssxref("&lt;position&gt;")}}-Typ definiert die 2D-Positionierung eines Objekts innerhalb eines Positionierungsbereichs, beispielsweise eines Hintergrundbildes innerhalb eines Containers. Dieser Typ wird als {{cssxref("background-position")}} interpretiert und daher in der [CSS Backgrounds and Borders specification](https://drafts.csswg.org/css-backgrounds/) spezifiziert.

## Funktionale Notation

- {{cssxref("calc", "calc()")}}
- {{cssxref("min", "min()")}}
- {{cssxref("max", "max()")}}
- {{cssxref("minmax", "minmax()")}}
- {{cssxref("clamp", "clamp()")}}
- {{cssxref("attr", "attr()")}}

[Funktionale Notation](/de/docs/Web/CSS/Reference/Values/Functions) ist ein Werttyp, der komplexere Typen darstellen oder eine spezielle Verarbeitung durch CSS auslösen kann. Die Syntax beginnt mit dem Namen der Funktion und wird unmittelbar von einer linken Klammer `(` gefolgt, danach folgen das/die Argument(e) der Notation und eine rechte Klammer `)`. Funktionen können mehrere Argumente akzeptieren, die ähnlich wie ein CSS-Eigenschaftswert formatiert sind.

Leerzeichen sind optional, aber innerhalb der Klammern erlaubt. (Aber beachten Sie Anmerkungen bezüglich Leerzeichen innerhalb der Seiten für `min()`, `max()`, `minmax()` und `clamp()`-Funktionen.)

Einige veraltete funktionale Notationen, wie die veraltete Syntax für `rgb()`, `rgba()`, `hsl()` und `hsla()`, verwendeten Kommata, aber Kommata werden im Allgemeinen nur verwendet, um Elemente in einer Liste zu trennen. Wenn ein Komma verwendet wird, um Argumente zu trennen, sind Leerzeichen vor und nach dem Komma optional.

Die Spezifikation definiert auch die `toggle()`-Funktion. Sie wurde bisher noch nirgends implementiert.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Textuelle Datentypen](/de/docs/Web/CSS/CSS_values_and_units/Textual_data_types)
- [CSS-Datentypen](/de/docs/Web/CSS/Reference/Values/Data_types)
- [CSS-Werte und -Einheiten](/de/docs/Web/CSS/CSS_values_and_units) Modul
- [Lernen: Werte und Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units)
