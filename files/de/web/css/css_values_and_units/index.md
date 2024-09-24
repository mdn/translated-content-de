---
title: CSS-Werte und Einheiten
slug: Web/CSS/CSS_Values_and_Units
l10n:
  sourceCommit: 5178e1e7c9edf0c9c652275ae62f090042ce2422
---

{{CSSRef}}

Jede CSS-Deklaration beinhaltet ein Paar aus Eigenschaft und Wert. Abhängig von der Eigenschaft kann der Wert von einem einzelnen ganzzahligen Wert oder Schlüsselwort bis zu einer Serie von Schlüsselwörtern und Werten mit oder ohne Einheiten variieren. Es gibt eine gemeinsame Menge von Datentypen — Werte und Einheiten — die CSS-Eigenschaften akzeptieren. Nachfolgend finden Sie einen Überblick über die meisten dieser Datentypen. Für detailliertere Informationen beziehen Sie sich bitte auf die Seite für jeden Werttyp.

## Textuelle Datentypen

- {{cssxref("&lt;custom-ident&gt;")}}
- Vordefinierte Schlüsselwörter als `<ident>`
- {{cssxref("&lt;string&gt;")}}
- {{cssxref("url_value", "&lt;url&gt;")}}

Textdatentypen sind entweder `<string>`, eine in Anführungszeichen gesetzte Serie von Zeichen, oder ein `<ident>`, ein "CSS Identifier", welcher ein nicht zitierter String ist. Ein `<string>` muss entweder mit einfachen oder doppelten Anführungszeichen versehen sein. CSS-Identifikatoren, die in den Spezifikationen als `<ident>` oder `<custom-ident>` aufgeführt sind, dürfen nicht zitiert werden.

In den CSS-Spezifikationen sind Werte, die vom Webentwickler definiert werden können, wie Keyframe-Animationen, Schriftfamilien-Namen oder Rasterbereiche, als {{cssxref("&lt;custom-ident&gt;")}}, {{cssxref("&lt;string&gt;")}} oder beides aufgeführt.

Wenn sowohl zitierte als auch nicht zitierte benutzerdefinierte Textwerte zulässig sind, wird die Spezifikation `<custom-ident> | <string>` auflisten, was bedeutet, dass Anführungszeichen optional sind, wie im Fall von Animationsnamen:

```css
@keyframe validIdent {
  /* keyframes go here */
}
@keyframe 'validString' {
  /* keyframes go here */
}
```

Einige Textwerte sind nicht gültig, wenn sie in Anführungszeichen gesetzt sind. Zum Beispiel kann der Wert von {{cssxref("grid-area")}} ein `<custom-ident>` sein, daher würden wir einen Rasterbereich, der `content` genannt wird, ohne Anführungszeichen verwenden:

```css
.item {
  grid-area: content;
}
```

Im Vergleich dazu muss ein Datentyp, der ein {{cssxref("&lt;string&gt;")}} ist, wie ein String-Wert der {{cssxref("content")}}-Eigenschaft, zitiert werden:

```css
.item::after {
  content: "This is my content.";
}
```

Während Sie im Allgemeinen jeden gewünschten Namen erstellen können, einschließlich der Verwendung von Emojis, darf der Bezeichner nicht `none`, `unset`, `initial` oder `inherit` sein, nicht mit einer Zahl oder zwei Bindestrichen beginnen, und im Allgemeinen sollte er kein anderes vordefiniertes CSS-Schlüsselwort sein. Siehe die Referenzseiten {{cssxref("&lt;custom-ident&gt;")}} und {{cssxref("&lt;string&gt;")}} für weitere Details.

### Vordefinierte Schlüsselwortwerte

Vordefinierte Schlüsselwörter sind Textwerte, die durch die Spezifikation für diese Eigenschaft definiert sind. Diese Schlüsselwörter sind ebenfalls CSS-Identifikatoren und werden daher ohne Anführungszeichen verwendet.

Beim Betrachten der Syntax von CSS-Eigenschaftswerten in einer CSS-Spezifikation oder auf der MDN-Eigenschaftsseite werden zulässige Schlüsselwörter in der folgenden Form aufgeführt. Die folgenden Werte sind die vordefinierten Schlüsselwortwerte, die für {{cssxref("float")}} zulässig sind.

```plain
left | right | none | inline-start | inline-end
```

Solche Werte werden ohne Anführungszeichen verwendet:

```css
.box {
  float: left;
}
```

### CSS-weite Werte

Zusätzlich zu den vordefinierten Schlüsselwörtern, die Teil der Spezifikation für eine Eigenschaft sind, akzeptieren alle CSS-Eigenschaften die CSS-weiten Eigenschaftswerte {{cssxref("initial")}}, {{cssxref("inherit")}}, {{cssxref("unset")}}, {{cssxref("revert")}} und {{cssxref("revert-layer")}}, die explizit das Verhalten beim Zurücksetzen spezifizieren.

- {{cssxref("initial")}}
  - : Repräsentiert den Wert, der als Anfangswert der Eigenschaft festgelegt ist.
- {{cssxref("inherit")}}
  - : Repräsentiert den berechneten Wert der Eigenschaft des Elternelements, sofern diese vererbt wird.
- {{cssxref("unset")}}
  - : Agiert entweder als `inherit` oder `initial`, abhängig davon, ob die Eigenschaft vererbt wird oder nicht.
- {{cssxref("revert")}}
  - : Setzt die Eigenschaft auf ihren geerbten Wert zurück, wenn sie vom Elternelement erbt, oder auf den Standardwert, der durch das Stylesheet des Benutzeragenten (oder durch Benutzereinstellungen, falls vorhanden) festgelegt wurde.
- {{cssxref("revert-layer")}}
  - : Hebt den Wert einer Eigenschaft in einer [Kaskadenschicht](/de/docs/Web/CSS/@layer) auf den Wert der Eigenschaft in einer CSS-Regel zurück, die das Element in einer vorherigen Kaskadenschicht betrifft. Der Wert der Eigenschaft mit diesem Schlüsselwort wird neu berechnet, als ob keine Regeln für das Ziel-Element in der aktuellen Kaskadenschicht angegeben worden wären.

### URLs

Ein {{cssxref("url_value", "&lt;url&gt;")}}-Typ verwendet funktionale Notation, die ein `<string>` akzeptiert, der eine URL ist. Dies kann eine absolute URL oder eine relative URL sein. Wenn Sie zum Beispiel ein Hintergrundbild einfügen möchten, könnten Sie eine der folgenden Optionen verwenden.

```css
.box {
  background-image: url("images/my-background.png");
}

.box {
  background-image: url("https://www.exammple.com/images/my-background.png");
}
```

Der Parameter für `url()` kann entweder zitiert oder nicht zitiert sein. Wenn er nicht zitiert ist, wird er als `<url-token>` geparst, das zusätzliche Anforderungen hat, einschließlich des Escapens bestimmter Zeichen. Siehe {{cssxref("url_value", "&lt;url&gt;")}} für weitere Informationen.

## Numerische Datentypen

- {{cssxref("&lt;integer&gt;")}}
- {{cssxref("&lt;number&gt;")}}
- {{cssxref("&lt;dimension&gt;")}}
- {{cssxref("&lt;percentage&gt;")}}

### Ganzzahlen

Eine Ganzzahl ist eine oder mehrere Dezimalziffern, `0` bis `9`, wie `1024` oder `-55`. Einer Ganzzahl kann ein `+` oder `-` Symbol vorangestellt werden, ohne Leerzeichen zwischen dem Symbol und der Ganzzahl.

### Zahlen

Ein {{cssxref("&lt;number&gt;")}} repräsentiert eine reelle Zahl, die eine Dezimalstelle mit einem Bruchanteil haben kann oder nicht, zum Beispiel `0.255`, `128` oder `-1.2`. Zahlen können auch mit einem `+` oder `-` Symbol vorangestellt werden.

### Dimensionen

Ein {{cssxref("&lt;dimension&gt;")}} ist ein `<number>` mit einer Einheit, z. B. `45deg`, `100ms` oder `10px`. Der beigefügte Einheit-Identifier ist nicht case-sensitiv. Es gibt niemals ein Leerzeichen oder andere Zeichen zwischen der Zahl und dem Einheit-Identifier: d. h., `1 cm` ist nicht gültig.

CSS verwendet Dimensionen, um Folgendes anzugeben:

- {{cssxref("&lt;length&gt;")}} (Entfernungseinheiten)
- {{cssxref("&lt;angle&gt;")}}
- {{cssxref("&lt;time&gt;")}}
- {{cssxref("&lt;frequency&gt;")}}
- {{cssxref("&lt;flex&gt;")}}
- {{cssxref("&lt;resolution&gt;")}}

Diese werden in den folgenden Unterabschnitten behandelt.

#### Entfernungseinheiten

Wenn eine Entfernungseinheit, auch als Länge bekannt, als Wert für eine Eigenschaft erlaubt ist, wird dies als {{cssxref("&lt;length&gt;")}} Typ beschrieben. Es gibt zwei Arten von Längen in CSS: relative und absolute. Relative Längeneinheiten geben eine Länge im Verhältnis zu etwas anderem an.

Es gibt zwei Arten von relativen Längen: schriftgrößenabhängige Längen und Ansichtsfenster-Prozentsatz-Längen. Diese kommen beide in zwei Typen vor. Schriftgrößenabhängige Längeneinheiten sind entweder lokale schriftgrößenabhängige oder wurzel-schriftgrößenabhängige. Ansichtsfenster-Prozentsatz-Längen sind entweder relativ zur Ansichtsfensterhöhe oder -breite, oder, wie im [CSS-Containment-Modul](/de/docs/Web/CSS/CSS_containment) definiert, relativ zu einem [Container](/de/docs/Web/CSS/CSS_containment/Container_queries#container_query_length_units).

##### Lokale schriftgrößenabhängige Längen

Lokale schriftgrößenabhängige Längen sind relativ zur "lokalen" Schriftgröße oder Zeilenhöhe und geben eine Länge im Verhältnis zu einer errechneten Größe eines Merkmals des [Elementes](/de/docs/Web/HTML/Element) selbst an oder relativ zum vererbten Wert des Elements im Fall einer zirkulären Referenz, wie dem `em` Wert für eine {{cssxref("font-size")}} Eigenschaft oder einem `lh` Wert für eine {{cssxref("line-height")}} Eigenschaft. Zum Beispiel ist `em` relativ zur Schriftgröße des Elements und `ex` ist relativ zur x-Höhe der Schrift des Elements.

| Einheit | Relativ zu                                                                                                                         |
| ------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `cap`   | Kappenhöhe (die nominelle Höhe von Großbuchstaben) der Schrift des Elements.                                                        |
| `ch`    | Durchschnittlicher Zeichenüberstand eines schmalen Zeichens in der Schrift des Elements, wie durch das Zeichen "0" (ZERO, U+0030) dargestellt. |
| `em`    | Schriftgröße der Schrift des Elements.                                                                                             |
| `ex`    | x-Höhe der Schrift des Elements.                                                                                                   |
| `ic`    | Durchschnittlicher Zeichenüberstand eines ganz breiten Zeichens in der Schrift des Elements, dargestellt durch das Zeichen "水" (CJK Wasser-Ideogramm, U+6C34). |
| `lh`    | Zeilenhöhe des Elements.                                                                                                           |

##### Wurzel-schriftgrößenabhängige Längen

Wurzel-schriftgrößenabhängige Längen geben eine Länge im Verhältnis zum [Wurzelelement](/de/docs/Web/CSS/:root)-Vorfahr des Elements an, wie {{HTMLElement("HTML")}} oder {{SVGElement("SVG")}}.
Zum Beispiel ist `rem` relativ zur Schriftgröße des Wurzelelements und `rex` zur x-Höhe der Schrift des Wurzelelements.

| Einheit | Relativ zu                                                                                                                           |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `rcap`  | Kappenhöhe (die nominelle Höhe von Großbuchstaben) der Schrift des Wurzelelements.                                                    |
| `rch`   | Durchschnittlicher Zeichenüberstand eines schmalen Zeichens in der Schrift des Wurzelelements, wie durch das Zeichen "0" (ZERO, U+0030) dargestellt. |
| `rem`   | Schriftgröße der Schrift des Wurzelelements.                                                                                         |
| `rex`   | x-Höhe der Schrift des Wurzelelements.                                                                                               |
| `ric`   | Durchschnittlicher Zeichenüberstand eines ganz breiten Zeichens in der Schrift des Wurzelelements, dargestellt durch das Zeichen "水" (CJK Wasser-Ideogramm, U+6C34). |
| `rlh`   | Zeilenhöhe des Wurzelelements.                                                                                                       |

##### Ansichtsfenster-Einheiten

Ansichtsfenster-Einheiten geben eine Länge im Verhältnis zu den Dimensionen des [Ansichtsfensters](/de/docs/Glossary/Viewport) an.
Zum Beispiel ist `vw` relativ zur Breite des Ansichtsfensters und `vh` relativ zur Höhe des Ansichtsfensters.

| Einheit   | Relativ zu                                                                                            |
| --------- | ----------------------------------------------------------------------------------------------------- |
| `dvh`     | 1% der [dynamischen](/de/docs/Web/CSS/length#dynamic) Höhe des Ansichtsfensters.                    |
| `dvw`     | 1% der [dynamischen](/de/docs/Web/CSS/length#dynamic) Breite des Ansichtsfensters.                  |
| `lvh`     | 1% der [großen](/de/docs/Web/CSS/length#large) Höhe des Ansichtsfensters.                           |
| `lvw`     | 1% der [großen](/de/docs/Web/CSS/length#large) Breite des Ansichtsfensters.                         |
| `svh`     | 1% der [kleinen](/de/docs/Web/CSS/length#small) Höhe des Ansichtsfensters.                          |
| `svw`     | 1% der [kleinen](/de/docs/Web/CSS/length#small) Breite des Ansichtsfensters.                        |
| `vb`      | 1% der Größe des Ansichtsfensters auf der [Block-Achse](/de/docs/Glossary/Flow_relative_values) des Wurzelelements. |
| `vh`      | 1% der Höhe des Ansichtsfensters.                                                                     |
| `vi`      | 1% der Größe des Ansichtsfensters auf der [Inline-Achse](/de/docs/Glossary/Flow_relative_values) des Wurzelelements. |
| `vmax`    | 1% der größeren Dimension des Ansichtsfensters.                                                       |
| `vmin`    | 1% der kleineren Dimension des Ansichtsfensters.                                                      |
| `vw`      | 1% der Breite des Ansichtsfensters.                                                                   |

##### Container-Einheiten

Container-Abfrage-Längeneinheiten geben eine Länge relativ zu den Dimensionen eines [Abfragecontainers](/de/docs/Web/CSS/CSS_containment/Container_queries) an.
Zum Beispiel ist `cqw` relativ zur Breite des Abfragecontainers und `cqh` relativ zur Höhe des Abfragecontainers.

| Einheit  | Relativ zu                                      |
| -------- | ------------------------------------------------ |
| `cqb`    | 1% der Blockgröße eines Abfragecontainers       |
| `cqh`    | 1% der Höhe eines Abfragecontainers             |
| `cqi`    | 1% der Inline-Größe eines Abfragecontainers     |
| `cqmax`  | Der größere Wert von `cqi` oder `cqb`           |
| `cqmin`  | Der kleinere Wert von `cqi` oder `cqb`          |
| `cqw`    | 1% der Breite eines Abfragecontainers           |

#### Absolute Längeneinheiten

Absolute Längeneinheiten sind an eine physische Länge gebunden: entweder einen Zoll oder einen Zentimeter. Viele dieser Einheiten sind daher nützlicher, wenn die Ausgabe ein festes Größen-Medium, wie zum Beispiel ein Druck, ist. Zum Beispiel ist `mm` ein physischer Millimeter, 1/10tel eines Zentimeters.

| Einheit | Name                   | Entspricht              |
| ------- | ---------------------- | ----------------------- |
| `cm`    | Zentimeter             | 1cm = 96px/2.54         |
| `in`    | Zoll                   | 1in = 2.54cm = 96px     |
| `mm`    | Millimeter             | 1mm = 1/10tel von 1cm   |
| `pc`    | Pica                   | 1pc = 1/6tel von 1 Zoll |
| `pt`    | Punkt                  | 1pt = 1/72tel von 1 Zoll|
| `px`    | Pixel                  | 1px = 1/96tel von 1 Zoll|
| `Q`     | Viertelmillimeter     | 1Q = 1/40tel von 1cm    |

Beim Einfügen eines Längenwertes, wenn die Länge `0` beträgt, ist der Einheits-Identifikator nicht erforderlich. Andernfalls ist der Einheits-Identifikator erforderlich, ist nicht case-sensitiv und muss unmittelbar nach dem numerischen Teil des Wertes kommen, ohne Leerzeichen dazwischen.

##### Winkeleinheiten

Winkelwerte werden durch den Typ {{cssxref("&lt;angle&gt;")}} dargestellt und akzeptieren die folgenden Werte:

| Einheit   | Name     | Beschreibung                                |
| --------- | -------- | ------------------------------------------- |
| `deg`     | Grad     | Es gibt 360 Grad in einem vollen Kreis.     |
| `grad`    | Gon      | Es gibt 400 Gon in einem vollen Kreis.      |
| `rad`     | Radiant  | Es gibt 2π Radianten in einem vollen Kreis. |
| `turn`    | Umdrehung| Es gibt 1 Umdrehung in einem vollen Kreis.  |

##### Zeiteinheiten

Zeitwerte werden durch den Typ {{cssxref("&lt;time&gt;")}} dargestellt. Beim Einfügen eines Zeitwertes ist der Einheits-Identifikator — das `s` oder `ms` — erforderlich. Es akzeptiert die folgenden Werte.

| Einheit | Name         | Beschreibung                               |
| ------- | ------------ | ------------------------------------------ |
| `ms`    | Millisekunden| Es gibt 1.000 Millisekunden in einer Sekunde. |
| `s`     | Sekunden     |                                            |

##### Frequenzeinheiten

Frequenzwerte werden durch den Typ {{cssxref("&lt;frequency&gt;")}} dargestellt. Es akzeptiert die folgenden Werte.

| Einheit | Name      | Beschreibung                                       |
| ------- | --------- | -------------------------------------------------- |
| `Hz`    | Hertz     | Repräsentiert die Anzahl der Vorkommen pro Sekunde. |
| `kHz`   | KiloHertz | Ein KiloHertz entspricht 1000 Hertz.               |

`1Hz`, was auch als `1hz` oder `1HZ` geschrieben werden kann, ist ein Zyklus pro Sekunde.

##### Flex-Einheiten

Flex-Einheiten werden durch den Typ {{cssxref("&lt;flex&gt;")}} dargestellt. Es akzeptiert den folgenden Wert.

| Einheit | Name  | Beschreibung                                          |
| ------- | ----- | ----------------------------------------------------- |
| `fr`    | Flex  | Repräsentiert eine flexible Länge innerhalb eines Rasters |

##### Auflösungs-Einheiten

Auflösungs-Einheiten werden durch den Typ {{cssxref("&lt;resolution&gt;")}} dargestellt. Sie repräsentieren die Größe eines einzelnen Punktes in einer grafischen Darstellung, wie z. B. einem Bildschirm, indem angegeben wird, wie viele dieser Punkte in einen CSS-Zoll, Zentimeter oder Pixel passen. Es akzeptiert die folgenden Werte:

| Einheit       | Beschreibung            |
| ------------- | ----------------------- |
| `dpcm`        | Punkte pro Zentimeter.  |
| `dpi`         | Punkte pro Zoll.        |
| `dppx`, `x`   | Punkte pro px-Einheit.  |

#### Prozentsätze

Ein {{cssxref("&lt;percentage&gt;")}} ist ein Typ, der einen Bruchteil eines anderen Wertes darstellt.

Prozentwerte sind immer relativ zu einer anderen Größe, beispielsweise einer Länge. Jede Eigenschaft, die Prozentsätze zulässt, definiert auch die Größe, auf die sich der Prozentsatz bezieht. Diese Größe kann ein Wert einer anderen Eigenschaft desselben Elements, der Wert einer Eigenschaft eines Vorgängerelements, eine Messung eines enthaltenden Blocks oder etwas anderes sein.

Als Beispiel, wenn Sie die {{cssxref("width")}} einer Box als Prozentsatz angeben, bezieht sie sich auf den Prozentsatz der berechneten Breite des übergeordneten Elements der Box:

```css
.box {
  width: 50%;
}
```

### Mischen von Prozentsätzen und Dimensionen

Einige Eigenschaften akzeptieren eine Dimension, die entweder eine von zwei Typen sein könnte, zum Beispiel eine `<length>` **oder** ein `<percentage>`. In diesem Fall wird der erlaubte Wert in der Spezifikation als kombinierte Einheit detailliert, z. B. {{cssxref("&lt;length-percentage&gt;")}}. Andere mögliche Kombinationen sind wie folgt:

- {{cssxref("&lt;frequency-percentage&gt;")}}
- {{cssxref("&lt;angle-percentage&gt;")}}
- {{cssxref("&lt;time-percentage&gt;")}}

### Spezielle Datentypen (in anderen Spezifikationen definiert)

- {{cssxref("&lt;color&gt;")}}
- {{cssxref("&lt;image&gt;")}}
- {{cssxref("&lt;position&gt;")}}

#### Farbe

Der {{cssxref("&lt;color&gt;")}}-Wert spezifiziert die Farbe eines Elementelements (z. B. die Hintergrundfarbe) und ist im [CSS Color Module](https://drafts.csswg.org/css-color-3/) definiert.

#### Bild

Der {{cssxref("&lt;image&gt;")}}-Wert spezifiziert alle verschiedenen Typen von Bildern, die in CSS verwendet werden können, und ist im [CSS Image Values and Replaced Content Module](https://www.w3.org/TR/css-images-4/) definiert.

#### Position

Der {{cssxref("&lt;position&gt;")}}-Typ definiert die 2D-Positionierung eines Objekts innerhalb eines Positionierungsbereichs, beispielsweise eines Hintergrundbildes innerhalb eines Containers. Dieser Typ wird als {{cssxref("background-position")}} interpretiert und daher in der [CSS Backgrounds and Borders-Spezifikation](https://www.w3.org/TR/css-backgrounds-3/) spezifiziert.

### Funktionale Notation

- {{cssxref("calc", "calc()")}}
- {{cssxref("min", "min()")}}
- {{cssxref("max", "max()")}}
- {{cssxref("minmax", "minmax()")}}
- {{cssxref("clamp", "clamp()")}}
- {{cssxref("toggle", "toggle()")}}
- {{cssxref("attr", "attr()")}}

[Funktionale Notation](/de/docs/Web/CSS/CSS_Functions) ist eine Art Wert, der komplexere Typen darstellen oder spezielle Verarbeitung durch CSS initiieren kann. Die Syntax beginnt mit dem Namen der Funktion, dem sofort eine linke Klammer `(` und anschließend das/die Argument(e) der Notation folgt, gefolgt von einer rechten Klammer `)`. Funktionen können mehrere Argumente haben, die ähnlich wie ein CSS-Eigenschaftswert formatiert sind.

Weißraum ist erlaubt, aber optional innerhalb der Klammern. (Aber beachten Sie die Hinweise zum Weißraum auf den Seiten für die `min()`, `max()`, `minmax()`, und `clamp()` Funktionen.)

Einige ältere funktionale Notationen, wie die veraltete Syntax für `rgb()`, `rgba()`, `hsl()`, und `hsla()`, verwendeten Kommas, aber Kommas werden im Allgemeinen nur verwendet, um Elemente in einer Liste zu trennen. Wenn ein Komma verwendet wird, um Argumente zu trennen, ist Weißraum vor und nach dem Komma optional.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS Grundlegende Datentypen](/de/docs/Web/CSS/CSS_Types)
- [Einführung in CSS: Werte und Einheiten](/de/docs/Learn/CSS/Building_blocks/Values_and_units)
- [Trigonometrische Funktionen in CSS](https://web.dev/articles/css-trig-functions)
