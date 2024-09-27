---
title: CSS-Werte und Einheiten
slug: Web/CSS/CSS_Values_and_Units
l10n:
  sourceCommit: 5178e1e7c9edf0c9c652275ae62f090042ce2422
---

{{CSSRef}}

Jede CSS-Deklaration enthält ein Eigenschafts-/Werte-Paar. Abhängig von der Eigenschaft kann der Wert eine einzelne ganze Zahl oder ein Schlüsselwort bis hin zu einer Reihe von Schlüsselwörtern und Werten mit oder ohne Einheiten umfassen. Es gibt eine gemeinsame Gruppe von Datentypen – Werte und Einheiten –, die CSS-Eigenschaften akzeptieren. Nachfolgend finden Sie einen Überblick über die meisten dieser Datentypen. Konsultieren Sie die Seite für jeden Wertetyp für detailliertere Informationen.

## Textuelle Datentypen

- {{cssxref("&lt;custom-ident&gt;")}}
- Vordefinierte Schlüsselwörter als `<ident>`
- {{cssxref("&lt;string&gt;")}}
- {{cssxref("url_value", "&lt;url&gt;")}}

Textuelle Datentypen sind entweder `<string>`, eine in Anführungszeichen gesetzte Zeichenserie, oder ein `<ident>`, ein "CSS Identifier", der eine nicht zitierte Zeichenkette ist. Ein `<string>` muss entweder mit einfachen oder doppelten Anführungszeichen umschlossen werden. CSS-Identifiers, die in den Spezifikationen als `<ident>` oder `<custom-ident>` angegeben sind, dürfen nicht zitiert werden.

In den CSS-Spezifikationen werden Werte, die vom Webentwickler definiert werden können, wie Keyframe-Animationen, Schriftfamiliennamen oder Gitterbereiche, als {{cssxref("&lt;custom-ident&gt;")}} oder {{cssxref("&lt;string&gt;")}} oder beides aufgelistet.

Wenn sowohl zitierte als auch nicht zitierte, benutzerdefinierte Textwerte erlaubt sind, wird die Spezifikation `<custom-ident> | <string>` aufführen, was bedeutet, dass Anführungszeichen optional sind, wie es im Falle von Animationsnamen der Fall ist:

```css
@keyframe validIdent {
  /* keyframes go here */
}
@keyframe 'validString' {
  /* keyframes go here */
}
```

Einige Textwerte sind nicht gültig, wenn sie in Anführungszeichen eingeschlossen werden. Zum Beispiel kann der Wert von {{cssxref("grid-area")}} ein `<custom-ident>` sein, sodass, wenn wir einen Gitterbereich namens `content` hätten, wir ihn ohne Anführungszeichen verwenden würden:

```css
.item {
  grid-area: content;
}
```

Im Vergleich dazu muss ein Datentyp, der ein {{cssxref("&lt;string&gt;")}} ist, wie ein Zeichenkettewert der {{cssxref("content")}}-Eigenschaft, zitiert werden:

```css
.item::after {
  content: "This is my content.";
}
```

Während Sie im Allgemeinen jeden Namen erstellen können, den Sie möchten, einschließlich der Verwendung von Emojis, darf der Identifier nicht `none`, `unset`, `initial` oder `inherit` sein, nicht mit einer Ziffer oder zwei Bindestrichen beginnen, und im Allgemeinen sollten Sie vermeiden, ein anderes vordefiniertes CSS-Schlüsselwort zu verwenden. Details finden Sie auf den Referenzseiten zu {{cssxref("&lt;custom-ident&gt;")}} und {{cssxref("&lt;string&gt;")}}.

### Vordefinierte Schlüsselwert-Schlüsselwörter

Vordefinierte Schlüsselwörter sind Textwerte, die durch die Spezifikation für diese Eigenschaft definiert sind. Diese Schlüsselwörter sind ebenfalls CSS-Identifiers und werden daher ohne Anführungszeichen verwendet.

Beim Betrachten der CSS-Eigenschaftswerte-Syntax in einer CSS-Spezifikation oder auf der MDN-Eigenschaftsseite werden die zulässigen Schlüsselwörter in der folgenden Form aufgelistet: Die folgenden Werte sind die vordefinierten Schlüsselwortwerte, die für {{cssxref("float")}} erlaubt sind.

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

Zusätzlich zu den vordefinierten Schlüsselwörtern, die Teil der Spezifikation für eine Eigenschaft sind, akzeptieren alle CSS-Eigenschaften die CSS-weiten Eigenschaftswerte {{cssxref("initial")}}, {{cssxref("inherit")}}, {{cssxref("unset")}}, {{cssxref("revert")}} und {{cssxref("revert-layer")}}, die explizit Standardverhalten spezifizieren.

- {{cssxref("initial")}}
  - : Repräsentiert den als Anfangswert der Eigenschaft angegebenen Wert.
- {{cssxref("inherit")}}
  - : Repräsentiert den berechneten Wert der Eigenschaft des Elternelementes, sofern es vererbt wird.
- {{cssxref("unset")}}
  - : Agiert entweder als `inherit` oder `initial`, je nachdem, ob die Eigenschaft vererbt ist oder nicht.
- {{cssxref("revert")}}
  - : Setzt die Eigenschaft auf ihren geerbten Wert zurück, falls sie vom Elternelement vererbt wird, oder auf den Standardwert, der durch das Stylesheet des Benutzeragenten (oder, falls vorhanden, durch Benutzerstyles) festgelegt wird.
- {{cssxref("revert-layer")}}
  - : Setzt den Wert einer Eigenschaft in einer [Kaskadenschicht](/de/docs/Web/CSS/@layer) auf den Wert der Eigenschaft in einer CSS-Regel zurück, die in einer vorherigen Kaskadenschicht mit dem Element übereinstimmt. Der Wert der Eigenschaft mit diesem Schlüsselwort wird neu berechnet, als ob keine Regeln für das Ziel-Element in der aktuellen Kaskadenschicht angegeben wären.

### URLs

Ein Typ {{cssxref("url_value", "&lt;url&gt;")}} verwendet funktionale Notation, die ein `<string>` akzeptiert, das eine URL ist. Dies kann eine absolute URL oder eine relative URL sein. Wenn Sie beispielsweise ein Hintergrundbild einfügen möchten, könnten Sie eine der folgenden verwenden.

```css
.box {
  background-image: url("images/my-background.png");
}

.box {
  background-image: url("https://www.exammple.com/images/my-background.png");
}
```

Der Parameter für `url()` kann entweder zitiert oder nicht zitiert sein. Wenn er nicht zitiert ist, wird er als `<url-token>` geparst, das zusätzliche Anforderungen hat, einschließlich der Entschärfung bestimmter Zeichen. Details finden Sie unter {{cssxref("url_value", "&lt;url&gt;")}}.

## Numerische Datentypen

- {{cssxref("&lt;integer&gt;")}}
- {{cssxref("&lt;number&gt;")}}
- {{cssxref("&lt;dimension&gt;")}}
- {{cssxref("&lt;percentage&gt;")}}

### Ganze Zahlen

Ein Ganzzahl ist eine oder mehrere Dezimalziffern, `0` bis `9`, wie `1024` oder `-55`. Eine Ganzzahl kann durch ein `+`- oder `-`-Symbol vorangestellt sein, ohne Leerzeichen zwischen dem Symbol und der Ganzzahl.

### Zahlen

Ein {{cssxref("&lt;number&gt;")}} repräsentiert eine reelle Zahl, die möglicherweise einen Dezimalpunkt mit einer Bruchkomponente hat oder nicht, beispielsweise `0.255`, `128` oder `-1.2`. Zahlen können auch durch ein `+`- oder `-`-Symbol vorangestellt sein.

### Dimensionen

Ein {{cssxref("&lt;dimension&gt;")}} ist eine `<number>` mit einer Einheit angefügt, zum Beispiel `45deg`, `100ms` oder `10px`. Der angehängte Einheitenbezeichner ist nicht zwischen Groß- und Kleinschreibung unterscheidend. Es darf niemals ein Leerzeichen oder andere Zeichen zwischen der Zahl und dem Einheitensymbol stehen: Das heißt, `1 cm` ist nicht gültig.

CSS verwendet Dimensionen zur Spezifizierung von:

- {{cssxref("&lt;length&gt;")}} (Distanz-Einheiten)
- {{cssxref("&lt;angle&gt;")}}
- {{cssxref("&lt;time&gt;")}}
- {{cssxref("&lt;frequency&gt;")}}
- {{cssxref("&lt;flex&gt;")}}
- {{cssxref("&lt;resolution&gt;")}}

Diese werden alle in den nachfolgenden Abschnitten behandelt.

#### Distanz-Einheiten

Wo eine Distanzeinheit, auch bekannt als Länge, als Wert für eine Eigenschaft erlaubt ist, wird dies als {{cssxref("&lt;length&gt;")}}-Typ beschrieben. In CSS gibt es zwei Arten von Längen: relative und absolute. Relative Längeneinheiten spezifizieren eine Länge in Relation zu etwas anderem.

Es gibt zwei Arten von relativen Längen: schriftgrößenbezogene Längen und Bildschirmprozentsatz-Längen. Diese kommen jeweils in zwei Typen. Schriftgrößenbezogene Längeneinheiten sind entweder lokale Schriftgrößen-verwandte oder Wurzel-Schriftgrößen-verwandte. Bildschirmprozentsatz-Längen sind entweder relativ zur Höhe oder Breite des Viewports oder, wie im [CSS Containment-Modul](/de/docs/Web/CSS/CSS_containment) definiert, relativ zu einem [Container](/de/docs/Web/CSS/CSS_containment/Container_queries#container_query_length_units).

##### Lokale schriftgrößenbezogene Längen

Lokale schriftgrößenbezogene Längen beziehen sich auf die "lokale" Schriftgröße oder Zeilenhöhe, indem sie eine Länge in Bezug auf eine berechnete Größe eines Merkmals des [Elements](/de/docs/Web/HTML/Element) selbst angeben, oder relativ zum geerbten Wert des Elements im Falle einer zirkulären Referenz, wie den `em`-Wert für eine {{cssxref("font-size")}}-Eigenschaft oder einen `lh`-Wert für eine {{cssxref("line-height")}}-Eigenschaft.
Beispielsweise ist `em` relativ zur Schriftgröße des Elements und `ex` ist relativ zur x-Höhe der Schrift des Elements.

| Einheit | Relativ zu                                                                                                                                            |
| ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| `cap`   | Kapitälchen-Höhe (die nominale Höhe der Großbuchstaben) der Schrift des Elements.                                                                     |
| `ch`    | Durchschnittlicher Zeichenabstand eines schmalen Glyphs in der Schrift des Elements, dargestellt durch das "0" (NULL, U+0030) Glyph.                  |
| `em`    | Schriftgröße der Schrift des Elements.                                                                                                                |
| `ex`    | X-Höhe der Schrift des Elements.                                                                                                                      |
| `ic`    | Durchschnittlicher Zeichenabstand eines vollbreiten Glyphs in der Schrift des Elements, dargestellt durch das "水" (CJK Wasserzeichen, U+6C34) Glyph. |
| `lh`    | Zeilenhöhe des Elements.                                                                                                                              |

##### Wurzel schriftgrößenbezogene Längen

Wurzel schriftgrößenbezogene Längen spezifizieren eine Länge in Relation zum [Wurzelelement](/de/docs/Web/CSS/:root)-Vorfahr des Elements, wie {{HTMLElement("HTML")}} oder {{SVGElement("SVG")}}.
Zum Beispiel ist `rem` relativ zur Schriftgröße des Wurzelelementes und `rex` ist die x-Höhe der Schrift des Wurzelelementes.

| Einheit | Relativ zu                                                                                                                                                   |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `rcap`  | Kapitälchen-Höhe (die nominale Höhe der Großbuchstaben) der Schrift des Wurzelelementes.                                                                     |
| `rch`   | Durchschnittlicher Zeichenabstand eines schmalen Glyphs in der Schrift des Wurzelelementes, dargestellt durch das "0" (NULL, U+0030) Glyph.                  |
| `rem`   | Schriftgröße der Schrift des Wurzelelementes.                                                                                                                |
| `rex`   | X-Höhe der Schrift des Wurzelelementes.                                                                                                                      |
| `ric`   | Durchschnittlicher Zeichenabstand eines vollbreiten Glyphs in der Schrift des Wurzelelementes, dargestellt durch das "水" (CJK Wasserzeichen, U+6C34) Glyph. |
| `rlh`   | Zeilenhöhe des Wurzelelementes.                                                                                                                              |

##### Viewport-Einheiten

Längen von Viewport-Einheiten spezifizieren eine Länge relativ zu den Dimensionen des [Viewports](/de/docs/Glossary/Viewport).
Zum Beispiel ist `vw` relativ zur Breite des Viewports und `vh` ist relativ zur Höhe des Viewports.

| Einheit | Relativ zu                                                                                              |
| ------- | ------------------------------------------------------------------------------------------------------- |
| `dvh`   | 1% der Höhe des [dynamischen](/de/docs/Web/CSS/length#dynamic) Viewports.                               |
| `dvw`   | 1% der Breite des [dynamischen](/de/docs/Web/CSS/length#dynamic) Viewports.                             |
| `lvh`   | 1% der Höhe des [großen](/de/docs/Web/CSS/length#large) Viewports.                                      |
| `lvw`   | 1% der Breite des [großen](/de/docs/Web/CSS/length#large) Viewports.                                    |
| `svh`   | 1% der Höhe des [kleinen](/de/docs/Web/CSS/length#small) Viewports.                                     |
| `svw`   | 1% der Breite des [kleinen](/de/docs/Web/CSS/length#small) Viewports.                                   |
| `vb`    | 1% der Viewportgröße in der [Block-Achse](/de/docs/Glossary/Flow_relative_values) des Wurzelelementes.  |
| `vh`    | 1% der Höhe des Viewports.                                                                              |
| `vi`    | 1% der Viewportgröße in der [Inline-Achse](/de/docs/Glossary/Flow_relative_values) des Wurzelelementes. |
| `vmax`  | 1% der größeren Dimension des Viewports.                                                                |
| `vmin`  | 1% der kleineren Dimension des Viewports.                                                               |
| `vw`    | 1% der Breite des Viewports.                                                                            |

##### Container-Einheiten

Längeneinheiten von Container-Abfragen spezifizieren eine Länge relativ zu den Dimensionen eines [Abfrage-Containers](/de/docs/Web/CSS/CSS_containment/Container_queries).
Zum Beispiel ist `cqw` relativ zur Breite des Abfrage-Containers und `cqh` relativ zur Höhe des Abfrage-Containers.

| Einheit | Relativ zu                                   |
| ------- | -------------------------------------------- |
| `cqb`   | 1% der Blockgröße eines Abfrage-Containers   |
| `cqh`   | 1% der Höhe eines Abfrage-Containers         |
| `cqi`   | 1% der Inline-Größe eines Abfrage-Containers |
| `cqmax` | Der größere Wert von `cqi` oder `cqb`        |
| `cqmin` | Der kleinere Wert von `cqi` oder `cqb`       |
| `cqw`   | 1% der Breite eines Abfrage-Containers       |

#### Absolute Längeneinheiten

Absolute Längeneinheiten sind auf eine physische Länge festgelegt: entweder einen Zoll oder einen Zentimeter. Viele dieser Einheiten sind daher nützlicher, wenn die Ausgabe ein festes Größenmedium ist, wie zum Beispiel ein Druck. Beispielsweise ist `mm` ein physischer Millimeter, 1/10 eines Zentimeters.

| Einheit | Name              | Entspricht          |
| ------- | ----------------- | ------------------- |
| `cm`    | Zentimeter        | 1cm = 96px/2.54     |
| `in`    | Zoll              | 1in = 2.54cm = 96px |
| `mm`    | Millimeter        | 1mm = 1/10 von 1cm  |
| `pc`    | Picas             | 1pc = 1/6 von 1in   |
| `pt`    | Punkte            | 1pt = 1/72 von 1in  |
| `px`    | Pixel             | 1px = 1/96 von 1in  |
| `Q`     | Viertelmillimeter | 1Q = 1/40 von 1cm   |

Bei der Angabe eines Längenwerts ist das Einheitensymbol nicht erforderlich, wenn die Länge `0` beträgt. Ansonsten ist das Einheitensymbol erforderlich, es ist nicht zwischen Groß- und Kleinschreibung unterscheidend und muss unmittelbar nach dem numerischen Teil des Wertes stehen, ohne Leerzeichen dazwischen.

##### Winkeleinheiten

Winkelwerte werden durch den Typ {{cssxref("&lt;angle&gt;")}} dargestellt und akzeptieren die folgenden Werte:

| Einheit | Name        | Beschreibung                             |
| ------- | ----------- | ---------------------------------------- |
| `deg`   | Grad        | Ein voller Kreis hat 360 Grad.           |
| `grad`  | Gon         | Ein voller Kreis hat 400 Gon.            |
| `rad`   | Radiant     | Ein voller Kreis hat 2π Radiant.         |
| `turn`  | Umrundungen | Ein voller Kreis entspricht 1 Umrundung. |

##### Zeiteinheiten

Zeitwerte werden durch den Typ {{cssxref("&lt;time&gt;")}} dargestellt. Wenn ein Zeitwert angegeben wird, ist das Einheitensymbol — das `s` oder `ms` — erforderlich. Es akzeptiert die folgenden Werte.

| Einheit | Name          | Beschreibung                          |
| ------- | ------------- | ------------------------------------- |
| `ms`    | Millisekunden | Eine Sekunde hat 1.000 Millisekunden. |
| `s`     | Sekunden      |                                       |

##### Frequenzeinheiten

Frequenzwerte werden durch den Typ {{cssxref("&lt;frequency&gt;")}} dargestellt. Es akzeptiert die folgenden Werte.

| Einheit | Name      | Beschreibung                                    |
| ------- | --------- | ----------------------------------------------- |
| `Hz`    | Hertz     | Steht für die Anzahl der Vorkommen pro Sekunde. |
| `kHz`   | Kilohertz | Ein Kilohertz sind 1.000 Hertz.                 |

`1Hz`, was auch als `1hz` oder `1HZ` geschrieben werden kann, entspricht einem Zyklus pro Sekunde.

##### Flex-Einheiten

Flex-Einheiten werden durch den Typ {{cssxref("&lt;flex&gt;")}} dargestellt. Es akzeptiert den folgenden Wert.

| Einheit | Name | Beschreibung                                                   |
| ------- | ---- | -------------------------------------------------------------- |
| `fr`    | Flex | Steht für eine flexible Länge innerhalb eines Grid-Containers. |

##### Auflösungseinheiten

Auflösungseinheiten werden durch den Typ {{cssxref("&lt;resolution&gt;")}} dargestellt. Sie repräsentieren die Größe eines einzelnen Punkts in einer grafischen Darstellung, wie z.B. auf einem Bildschirm, indem sie angeben, wie viele dieser Punkte in einen CSS-Zoll, Zentimeter oder Pixel passen. Es akzeptiert die folgenden Werte:

| Einheit     | Beschreibung           |
| ----------- | ---------------------- |
| `dpcm`      | Punkte pro Zentimeter. |
| `dpi`       | Punkte pro Zoll.       |
| `dppx`, `x` | Punkte pro px-Einheit. |

#### Prozentsätze

Ein {{cssxref("&lt;percentage&gt;")}} ist ein Typ, der einen Bruchteil von einem anderen Wert darstellt.

Prozentwerte sind immer relativ zu einer anderen Größe, zum Beispiel einer Länge. Jede Eigenschaft, die Prozentsätze zulässt, definiert auch die Größe, auf die sich der Prozentsatz bezieht. Diese Größe kann ein Wert einer anderen Eigenschaft desselben Elements sein, der Wert einer Eigenschaft eines Vorfahrelements, ein Maß eines umgebenden Blocks oder etwas anderes.

Als Beispiel: Wenn Sie die {{cssxref("width")}} einer Box als Prozentwert angeben möchten, bezieht sich dies auf den Prozentsatz der berechneten Breite des Elternteils der Box:

```css
.box {
  width: 50%;
}
```

### Mischen von Prozentsätzen und Dimensionen

Einige Eigenschaften akzeptieren eine Dimension, die entweder einer von zwei Typen sein könnte, zum Beispiel eine `<length>` **oder** ein `<percentage>`. In diesem Fall wird der erlaubte Wert in der Spezifikation als Kombinationseinheit, z.B. {{cssxref("&lt;length-percentage&gt;")}}, angegeben. Andere mögliche Kombinationen sind wie folgt:

- {{cssxref("&lt;frequency-percentage&gt;")}}
- {{cssxref("&lt;angle-percentage&gt;")}}
- {{cssxref("&lt;time-percentage&gt;")}}

### Spezielle Datentypen (definiert in anderen Spezifikationen)

- {{cssxref("&lt;color&gt;")}}
- {{cssxref("&lt;image&gt;")}}
- {{cssxref("&lt;position&gt;")}}

#### Farbe

Der {{cssxref("&lt;color&gt;")}}-Wert spezifiziert die Farbe eines Elementmerkmals (z.B. seine Hintergrundfarbe) und ist im [CSS Color Module](https://drafts.csswg.org/css-color-3/) definiert.

#### Bild

Der {{cssxref("&lt;image&gt;")}}-Wert spezifiziert alle verschiedenen Arten von Bildern, die in CSS verwendet werden können, und ist im [CSS Image Values and Replaced Content Module](https://www.w3.org/TR/css-images-4/) definiert.

#### Position

Der {{cssxref("&lt;position&gt;")}}-Typ definiert die 2D-Positionierung eines Objekts innerhalb eines Positionierungsbereichs, z.B. ein Hintergrundbild innerhalb eines Containers. Dieser Typ wird als {{cssxref("background-position")}} interpretiert und ist daher in der [CSS Backgrounds and Borders specification](https://www.w3.org/TR/css-backgrounds-3/) spezifiziert.

### Funktionale Notation

- {{cssxref("calc", "calc()")}}
- {{cssxref("min", "min()")}}
- {{cssxref("max", "max()")}}
- {{cssxref("minmax", "minmax()")}}
- {{cssxref("clamp", "clamp()")}}
- {{cssxref("toggle", "toggle()")}}
- {{cssxref("attr", "attr()")}}

[Funktionale Notation](/de/docs/Web/CSS/CSS_Functions) ist eine Art Wert, der komplexere Typen darstellen oder besondere Verarbeitung durch CSS auslösen kann. Die Syntax beginnt mit dem Namen der Funktion, gefolgt von einer öffnenden Klammer `(`, gefolgt von den Argument(en) der Notation, gefolgt von einer schließenden Klammer `)`. Funktionen können mehrere Argumente annehmen, die ähnlich wie ein CSS-Eigenschaftswert formatiert sind.

Leerzeichen sind innerhalb der Klammern erlaubt, aber optional. (Beachten Sie jedoch die Notizen zu Leerzeichen innerhalb von Seiten für die Funktionen `min()`, `max()`, `minmax()` und `clamp()`.)

Einige ältere funktionale Notationen, wie die veraltete Syntax für `rgb()`, `rgba()`, `hsl()` und `hsla()`, verwendeten Kommas, jedoch werden Kommas generell nur verwendet, um Elemente in einer Liste zu trennen. Wenn ein Komma verwendet wird, um Argumente zu trennen, sind Leerzeichen vor und nach dem Komma optional.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS-Basisdatentypen](/de/docs/Web/CSS/CSS_Types)
- [Einführung in CSS: Werte und Einheiten](/de/docs/Learn/CSS/Building_blocks/Values_and_units)
- [Trigonometrische Funktionen in CSS](https://web.dev/articles/css-trig-functions)
