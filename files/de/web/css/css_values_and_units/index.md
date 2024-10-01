---
title: CSS-Werte und Einheiten
slug: Web/CSS/CSS_Values_and_Units
l10n:
  sourceCommit: 5178e1e7c9edf0c9c652275ae62f090042ce2422
---

{{CSSRef}}

Jede CSS-Deklaration umfasst ein Paar aus Eigenschaft und Wert. Abhängig von der Eigenschaft kann der Wert von einer einzelnen Zahl oder einem Schlüsselwort bis hin zu einer Reihe von Schlüsselwörtern und Werten mit oder ohne Einheiten reichen. Es gibt einen gemeinsamen Satz von Datentypen — Werte und Einheiten —, die von CSS-Eigenschaften akzeptiert werden. Unten finden Sie einen Überblick über die meisten dieser Datentypen. Für detailliertere Informationen konsultieren Sie die Seite zu jedem Werttyp.

## Textuelle Datentypen

- {{cssxref("&lt;custom-ident&gt;")}}
- Vordefinierte Schlüsselwörter als `<ident>`
- {{cssxref("&lt;string&gt;")}}
- {{cssxref("url_value", "&lt;url&gt;")}}

Textdaten-Typen sind entweder `<string>`, eine in Anführungszeichen stehende Zeichenreihe, oder ein `<ident>`, ein "CSS Identifier", der eine nicht zitierte Zeichenkette ist. Ein `<string>` muss mit einfachen oder doppelten Anführungszeichen versehen sein. CSS-Identifikatoren, in den Spezifikationen als `<ident>` oder `<custom-ident>` aufgeführt, müssen unverändert sein.

In den CSS-Spezifikationen sind Werte, die vom Webentwickler definiert werden können, wie Keyframe-Animationen, Schriftartfamiliennamen oder Rasterbereiche, als {{cssxref("&lt;custom-ident&gt;")}}, {{cssxref("&lt;string&gt;")}} oder beides aufgeführt.

Wenn sowohl zitierte als auch unzitierte benutzerdefinierte Textwerte erlaubt sind, gibt die Spezifikation `<custom-ident> | <string>` an, was bedeutet, dass Anführungszeichen optional sind, wie im Fall von Animationsnamen:

```css
@keyframe validIdent {
  /* keyframes go here */
}
@keyframe 'validString' {
  /* keyframes go here */
}
```

Einige Textwerte sind nicht gültig, wenn sie in Anführungszeichen eingeschlossen sind. Zum Beispiel kann der Wert von {{cssxref("grid-area")}} ein `<custom-ident>` sein, sodass wir bei einem Rasterbereich namens `content` diesen ohne Anführungszeichen verwenden würden:

```css
.item {
  grid-area: content;
}
```

Im Vergleich dazu muss ein Datentyp, der ein {{cssxref("&lt;string&gt;")}} ist, wie ein Zeichenkettenwert der {{cssxref("content")}}-Eigenschaft, in Anführungszeichen gesetzt werden:

```css
.item::after {
  content: "This is my content.";
}
```

Obwohl Sie grundsätzlich jeden beliebigen Namen erstellen können, einschließlich der Verwendung von Emojis, darf der Identifier nicht `none`, `unset`, `initial` oder `inherit` sein, nicht mit einer Ziffer oder zwei Bindestrichen beginnen, und im Allgemeinen sollte er kein anderes vordefiniertes CSS-Schlüsselwort sein. Siehe die Referenzseiten {{cssxref("&lt;custom-ident&gt;")}} und {{cssxref("&lt;string&gt;")}} für weitere Details.

### Vordefinierte Schlüsselwortwerte

Vordefinierte Schlüsselwörter sind Textwerte, die durch die Spezifikation für diese Eigenschaft definiert sind. Diese Schlüsselwörter sind ebenfalls CSS-Identifikatoren und werden daher ohne Anführungszeichen verwendet.

Beim Betrachten der CSS-Eigenschaftswertsyn­tax in einer CSS-Spezifikation oder auf der MDN-Eigenschaftsseite werden zulässige Schlüsselwörter in der folgenden Form aufgeführt. Die folgenden Werte sind die vordefinierten Schlüsselwortwerte, die für {{cssxref("float")}} erlaubt sind.

```plain
left | right | none | inline-start | inline-end
```

Solche Werte werden ohne Anführungszeichen verwendet:

```css
.box {
  float: left;
}
```

### CSS-globalen Werte

Zusätzlich zu den vordefinierten Schlüsselwörtern, die Teil der Spezifikation einer Eigenschaft sind, akzeptieren alle CSS-Eigenschaften die CSS-weiten Eigenschaftswerte {{cssxref("initial")}}, {{cssxref("inherit")}}, {{cssxref("unset")}}, {{cssxref("revert")}}, und {{cssxref("revert-layer")}}, die explizit Standardverhalten angeben.

- {{cssxref("initial")}}
  - : Repräsentiert den als anfänglichen Wert der Eigenschaft spezifizierten Wert.
- {{cssxref("inherit")}}
  - : Stellt den berechneten Wert der Eigenschaft auf dem Elternelement dar, sofern sie geerbt wird.
- {{cssxref("unset")}}
  - : Wirkt entweder als `inherit` oder `initial`, je nachdem, ob die Eigenschaft vererbbar ist oder nicht.
- {{cssxref("revert")}}
  - : Setzt die Eigenschaft auf ihren geerbten Wert zurück, falls sie vom übergeordneten Element erbt, oder auf den Standardwert, der durch das Stylesheet des Benutzeragents (oder durch Benutzerstile, falls vorhanden) etabliert wurde.
- {{cssxref("revert-layer")}}
  - : Setzt den Wert einer Eigenschaft in einer [Kaskadenschicht](/de/docs/Web/CSS/@layer) auf den Wert der Eigenschaft in einer CSS-Regel zurück, die dem Element in einer vorherigen Kaskadenschicht entspricht. Der Wert der Eigenschaft mit diesem Schlüsselwort wird neu berechnet, als ob im Ziel-Element in der aktuellen Kaskadenschicht keine Regeln festgelegt worden wären.

### URLs

Ein Typ {{cssxref("url_value", "&lt;url&gt;")}} verwendet funktionale Notation, die ein `<string>` akzeptiert, das eine URL ist. Dies kann eine absolute URL oder eine relative URL sein. Beispielsweise, wenn Sie ein Hintergrundbild einbinden möchten, können Sie eine der folgenden Optionen verwenden.

```css
.box {
  background-image: url("images/my-background.png");
}

.box {
  background-image: url("https://www.exammple.com/images/my-background.png");
}
```

Der Parameter für `url()` kann entweder zitiert oder unzitiert sein. Wenn er unzitiert ist, wird er als `<url-token>` analysiert, das zusätzliche Anforderungen einschließlich des Entkommens bestimmter Zeichen hat. Weitere Informationen finden Sie unter {{cssxref("url_value", "&lt;url&gt;")}}.

## Numerische Datentypen

- {{cssxref("&lt;integer&gt;")}}
- {{cssxref("&lt;number&gt;")}}
- {{cssxref("&lt;dimension&gt;")}}
- {{cssxref("&lt;percentage&gt;")}}

### Ganzzahlen

Eine Ganzzahl ist eine oder mehrere Dezimalziffern, `0` bis `9`, wie `1024` oder `-55`. Eine Ganzzahl kann durch ein `+`- oder `-`-Symbol vorangestellt werden, ohne dass zwischen dem Symbol und der Ganzzahl ein Leerzeichen steht.

### Zahlen

Ein {{cssxref("&lt;number&gt;")}} stellt eine reelle Zahl dar, die möglicherweise oder möglicherweise nicht ein Komma mit einer Bruchkomponente enthält, zum Beispiel `0.255`, `128` oder `-1.2`. Zahlen können ebenfalls mit einem `+`- oder `-`-Symbol vorangestellt werden.

### Maßeinheiten

Ein {{cssxref("&lt;dimension&gt;")}} ist eine `<number>` mit einer angehängten Einheit, zum Beispiel `45deg`, `100ms` oder `10px`. Der angehängte Einheit-Identifikator ist nicht case-sensitive. Es gibt nie einen Leerschritt oder andere Zeichen zwischen der Zahl und dem Einheiten-Identifikator: das heißt, `1 cm` ist nicht gültig.

CSS verwendet Maßeinheiten, um anzugeben:

- {{cssxref("&lt;length&gt;")}} (Distanz-Einheiten)
- {{cssxref("&lt;angle&gt;")}}
- {{cssxref("&lt;time&gt;")}}
- {{cssxref("&lt;frequency&gt;")}}
- {{cssxref("&lt;flex&gt;")}}
- {{cssxref("&lt;resolution&gt;")}}

Diese werden alle in den folgenden Unterabschnitten behandelt.

#### Distanz-Einheiten

Wo eine Distanz-Einheit, auch bekannt als Länge, als Wert für eine Eigenschaft erlaubt ist, wird dies als Type {{cssxref("&lt;length&gt;")}} beschrieben. In CSS gibt es zwei Arten von Längen: relative und absolute. Relative Längeneinheiten geben eine Länge im Verhältnis zu etwas anderem an.

Es gibt zwei Arten von relativen Längen: schriftbezogene Längen und Ansichtsfenster-Prozentsatzlängen. Diese kommen beide in zwei Typen. Schriftbezogene Längeinheiten sind entweder lokale schriftbezogene oder wurzel-schriftbezogene. Ansichtsfenster-Prozentsatzlängen sind entweder relativ zur Höhe oder Breite des Ansichtsfensters oder, wie im [CSS Containment Modul](/de/docs/Web/CSS/CSS_containment) definiert, relativ zu einem [Container](/de/docs/Web/CSS/CSS_containment/Container_queries#container_query_length_units).

##### Lokale schriftbezogene Längen

Lokale schriftbezogene Längen sind relativ zur "lokalen" Schriftgröße oder Zeilenhöhe und spezifizieren eine Länge im Verhältnis zu einer berechneten Größe eines Merkmals des [Elements](/de/docs/Web/HTML/Element) selbst oder relativ zum geerbten Wert des Elements im Fall eines zirkulären Verweises, wie etwa beim `em`-Wert einer {{cssxref("font-size")}}-Eigenschaft oder einem `lh`-Wert einer {{cssxref("line-height")}}-Eigenschaft. Zum Beispiel, `em` ist relativ zur Schriftgröße auf dem Element und `ex` ist relativ zur x-Höhe der Schrift des Elements.

| Einheit | Relativ zu                                                                                                                                                  |
| ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `cap`   | Kapphöhe (die nominale Höhe von Großbuchstaben) der Schrift des Elements.                                                                                   |
| `ch`    | Durchschnittlicher Zeichenabstand eines schmalen Glyphen in der Schrift des Elements, dargestellt durch das Zeichen "0" (NULL, U+0030).                     |
| `em`    | Schriftgröße der Schrift des Elements.                                                                                                                      |
| `ex`    | x-Höhe der Schrift des Elements.                                                                                                                            |
| `ic`    | Durchschnittlicher Zeichenabstand eines vollbreiten Glyphen in der Schrift des Elements, dargestellt durch das Zeichen "水" (CJK Wasser-Ideogramm, U+6C34). |
| `lh`    | Zeilenhöhe des Elements.                                                                                                                                    |

##### Wurzel-schriftbezogene Längen

Wurzel-schriftbezogene Längen geben eine Länge im Verhältnis zum [Wurzelelement](/de/docs/Web/CSS/:root) Vorfahr des Elements an, wie {{HTMLElement("HTML")}} oder {{SVGElement("SVG")}}.
Beispielsweise ist `rem` relativ zur Schriftgröße auf dem Wurzelelement und `rex` ist die x-Höhe der Schrift des Wurzelelements.

| Einheit | Relativ zu                                                                                                                                                        |
| ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `rcap`  | Kapphöhe (die nominale Höhe von Großbuchstaben) der Schrift des Wurzelelements.                                                                                   |
| `rch`   | Durchschnittlicher Zeichenabstand eines schmalen Glyphen in der Schrift des Wurzelelements, dargestellt durch das Zeichen "0" (NULL, U+0030).                     |
| `rem`   | Schriftgröße der Schrift des Wurzelelements.                                                                                                                      |
| `rex`   | x-Höhe der Schrift des Wurzelelements.                                                                                                                            |
| `ric`   | Durchschnittlicher Zeichenabstand eines vollbreiten Glyphen in der Schrift des Wurzelelements, dargestellt durch das Zeichen "水" (CJK Wasser-Ideogramm, U+6C34). |
| `rlh`   | Zeilenhöhe des Wurzelelements.                                                                                                                                    |

##### Ansichtsfenster-Einheiten

Ansichtsfenster-Einheiten geben eine Länge relativ zu den Abmessungen des {{Glossary("Viewport", "Ansichtsfensters")}} an.
Beispielsweise ist `vw` relativ zur Breite des Ansichtsfensters und `vh` relativ zur Höhe des Ansichtsfensters.

| Einheit | Relativ zu                                                                                                        |
| ------- | ----------------------------------------------------------------------------------------------------------------- |
| `dvh`   | 1% der [dynamischen](/de/docs/Web/CSS/length#dynamic) Höhe des Ansichtsfensters.                                  |
| `dvw`   | 1% der [dynamischen](/de/docs/Web/CSS/length#dynamic) Breite des Ansichtsfensters.                                |
| `lvh`   | 1% der [großen](/de/docs/Web/CSS/length#large) Höhe des Ansichtsfensters.                                         |
| `lvw`   | 1% der [großen](/de/docs/Web/CSS/length#large) Breite des Ansichtsfensters.                                       |
| `svh`   | 1% der [kleinen](/de/docs/Web/CSS/length#small) Höhe des Ansichtsfensters.                                        |
| `svw`   | 1% der [kleinen](/de/docs/Web/CSS/length#small) Breite des Ansichtsfensters.                                      |
| `vb`    | 1% der Größe des Ansichtsfensters auf der {{Glossary("Flow_relative_values", "Blockachse")}} des Wurzelelements.  |
| `vh`    | 1% der Höhe des Ansichtsfensters.                                                                                 |
| `vi`    | 1% der Größe des Ansichtsfensters auf der {{Glossary("Flow_relative_values", "Inlineachse")}} des Wurzelelements. |
| `vmax`  | 1% der größeren Dimension des Ansichtsfensters.                                                                   |
| `vmin`  | 1% der kleineren Dimension des Ansichtsfensters.                                                                  |
| `vw`    | 1% der Breite des Ansichtsfensters.                                                                               |

##### Container-Einheiten

Container-Abfrage Längeneinheiten geben eine Länge an, die relativ zu den Abmessungen eines [Abfragecontainers](/de/docs/Web/CSS/CSS_containment/Container_queries) ist.
Beispielsweise ist `cqw` relativ zur Breite des Abfragecontainers und `cqh` ist relativ zur Höhe des Abfragecontainers.

| Einheit | Relativ zu                                 |
| ------- | ------------------------------------------ |
| `cqb`   | 1% der Blockgröße eines Abfragecontainers  |
| `cqh`   | 1% der Höhe eines Abfragecontainers        |
| `cqi`   | 1% der Inlinegröße eines Abfragecontainers |
| `cqmax` | Der größere Wert von `cqi` oder `cqb`      |
| `cqmin` | Der kleinere Wert von `cqi` oder `cqb`     |
| `cqw`   | 1% der Breite eines Abfragecontainers      |

#### Absolute Längeneinheiten

Absolute Längeneinheiten sind an eine physische Länge gebunden: entweder ein Zoll oder ein Zentimeter. Viele dieser Einheiten sind daher nützlicher, wenn die Ausgabe ein festes Medienformat hat, wie z.B. Druck. Zum Beispiel, `mm` ist ein physischer Millimeter, 1/10 eines Zentimeters.

| Einheit | Name               | Äquivalent zu        |
| ------- | ------------------ | -------------------- |
| `cm`    | Zentimeter         | 1cm = 96px/2,54      |
| `in`    | Zoll               | 1in = 2,54cm = 96px  |
| `mm`    | Millimeter         | 1mm = 1/10 eines 1cm |
| `pc`    | Picas              | 1pc = 1/6 eines 1in  |
| `pt`    | Punkte             | 1pt = 1/72 eines 1in |
| `px`    | Pixel              | 1px = 1/96 eines 1in |
| `Q`     | Viertel-Millimeter | 1Q = 1/40 eines 1cm  |

Beim Einfügen eines Längenwertes, wenn die Länge `0` ist, ist der Einheiten-Identifikator nicht erforderlich. Andernfalls ist der Einheiten-Identifikator erforderlich, ist nicht case-sensitive und muss unmittelbar nach dem numerischen Teil des Wertes kommen, ohne dass ein Leerzeichen dazwischen ist.

##### Winkeleinheiten

Winkelwerte werden durch den Typ {{cssxref("&lt;angle&gt;")}} dargestellt und akzeptieren die folgenden Werte:

| Einheit | Name        | Beschreibung                             |
| ------- | ----------- | ---------------------------------------- |
| `deg`   | Grad        | Es gibt 360 Grad in einem Vollkreis.     |
| `grad`  | Gon         | Es gibt 400 Gon in einem Vollkreis.      |
| `rad`   | Radiant     | Es gibt 2π Radianten in einem Vollkreis. |
| `turn`  | Umdrehungen | Es gibt 1 Umdrehung in einem Vollkreis.  |

##### Zeiteinheiten

Zeitwerte werden durch den Typ {{cssxref("&lt;time&gt;")}} dargestellt. Bei der Angabe eines Zeitwertes ist der Einheiten-Identifikator — das `s` oder `ms` — erforderlich. Er akzeptiert die folgenden Werte.

| Einheit | Name          | Beschreibung                                  |
| ------- | ------------- | --------------------------------------------- |
| `ms`    | Millisekunden | Es gibt 1.000 Millisekunden in einer Sekunde. |
| `s`     | Sekunden      |                                               |

##### Frequenzeinheiten

Frequenzwerte werden durch den Typ {{cssxref("&lt;frequency&gt;")}} dargestellt. Sie akzeptieren die folgenden Werte.

| Einheit | Name      | Beschreibung                                        |
| ------- | --------- | --------------------------------------------------- |
| `Hz`    | Hertz     | Repräsentiert die Anzahl der Vorkommen pro Sekunde. |
| `kHz`   | KiloHertz | Ein KiloHertz sind 1.000 Hertz.                     |

`1Hz`, welcher auch als `1hz` oder `1HZ` geschrieben werden kann, ist ein Zyklus pro Sekunde.

##### Flex-Einheiten

Flex-Einheiten werden durch den Typ {{cssxref("&lt;flex&gt;")}} dargestellt. Sie akzeptieren den folgenden Wert.

| Einheit | Name | Beschreibung                                                       |
| ------- | ---- | ------------------------------------------------------------------ |
| `fr`    | Flex | Repräsentiert eine flexible Länge innerhalb eines Rastercontainers |

##### Auflösungseinheiten

Auflösungseinheiten werden durch den Typ {{cssxref("&lt;resolution&gt;")}} dargestellt. Sie repräsentieren die Größe eines einzelnen Punkts in einer grafischen Darstellung, z.B. eines Bildschirms, indem angegeben wird, wie viele dieser Punkte in einen CSS-Zoll, Zentimeter oder Pixel passen. Es werden die folgenden Werte akzeptiert:

| Einheit     | Beschreibung           |
| ----------- | ---------------------- |
| `dpcm`      | Punkte pro Zentimeter. |
| `dpi`       | Punkte pro Zoll.       |
| `dppx`, `x` | Punkte pro px Einheit. |

#### Prozentsätze

Ein {{cssxref("&lt;percentage&gt;")}} ist ein Typ, der einen Bruchteil eines anderen Wertes darstellt.

Prozentwerte sind immer relativ zu einer anderen Größe, zum Beispiel einer Länge. Jede Eigenschaft, die Prozentsätze erlaubt, definiert auch die Größe, auf die sich der Prozentsatz bezieht. Diese Größe kann ein Wert einer anderen Eigenschaft des gleichen Elements sein, der Wert einer Eigenschaft eines Vorfahrelements, eine Messung eines enthaltenen Blocks oder etwas anderes.

Als Beispiel, wenn Sie die {{cssxref("width")}} eines Kastens als Prozentsatz angeben, bezieht sich dies auf den Prozentsatz der berechneten Breite des Elternkastens:

```css
.box {
  width: 50%;
}
```

### Mischen von Prozentsätzen und Maßeinheiten

Einige Eigenschaften akzeptieren eine Maßeinheit, die entweder eine von zwei Typen sein kann, zum Beispiel eine `<length>` **oder** ein `<percentage>`. In diesem Fall wird der erlaubte Wert in der Spezifikation als Kombinationseinheit detailliert beschrieben, z.B. {{cssxref("&lt;length-percentage&gt;")}}. Andere mögliche Kombinationen sind wie folgt:

- {{cssxref("&lt;frequency-percentage&gt;")}}
- {{cssxref("&lt;angle-percentage&gt;")}}
- {{cssxref("&lt;time-percentage&gt;")}}

### Spezielle Datentypen (in anderen Spezifikationen definiert)

- {{cssxref("&lt;color&gt;")}}
- {{cssxref("&lt;image&gt;")}}
- {{cssxref("&lt;position&gt;")}}

#### Farbe

Der {{cssxref("&lt;color&gt;")}}-Wert gibt die Farbe einer Elementeigenschaft an (z.B. ihre Hintergrundfarbe) und ist im [CSS-Farbmodul](https://drafts.csswg.org/css-color-3/) definiert.

#### Bild

Der {{cssxref("&lt;image&gt;")}}-Wert spezifiziert alle verschiedenen Bildtypen, die in CSS verwendet werden können, und ist im [CSS Image Values and Replaced Content Module](https://www.w3.org/TR/css-images-4/) definiert.

#### Position

Der {{cssxref("&lt;position&gt;")}}-Typ definiert die 2D-Positionierung eines Objekts innerhalb eines Positionierungsbereichs, beispielsweise eines Hintergrundbilds innerhalb eines Containers. Dieser Typ wird als {{cssxref("background-position")}} interpretiert und daher in der [CSS Backgrounds and Borders Spezifikation](https://www.w3.org/TR/css-backgrounds-3/) spezifiziert.

### Funktionale Notation

- {{cssxref("calc", "calc()")}}
- {{cssxref("min", "min()")}}
- {{cssxref("max", "max()")}}
- {{cssxref("minmax", "minmax()")}}
- {{cssxref("clamp", "clamp()")}}
- {{cssxref("toggle", "toggle()")}}
- {{cssxref("attr", "attr()")}}

[Funktionale Notation](/de/docs/Web/CSS/CSS_Functions) ist ein Werttyp, der komplexere Typen darstellen oder spezielle Verarbeitung durch CSS anstoßen kann. Die Syntax beginnt mit dem Namen der Funktion, gefolgt unmittelbar von einer linken Klammer `(`, gefolgt von den Argument(en) für die Notation, gefolgt von einer rechten Klammer `)`. Funktionen können mehrere Argumente annehmen, die ähnlich wie ein CSS-Eigenschaftswert formatiert sind.

Leerzeichen sind erlaubt, aber innerhalb der Klammern optional. (Aber beachten Sie die Hinweise zu Leerzeichen auf den Seiten für `min()`, `max()`, `minmax()` und `clamp()`-Funktionen.)

Einige Legacy-Funktionsnotationen, wie die ältere Syntax für `rgb()`, `rgba()`, `hsl()`, und `hsla()`, verwendeten Kommata, aber im Allgemeinen werden Kommata nur verwendet, um Elemente in einer Liste zu trennen. Wenn ein Komma verwendet wird, um Argumente zu trennen, ist vor und nach dem Komma optional ein Leerzeichen.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS Grundlegende Datentypen](/de/docs/Web/CSS/CSS_Types)
- [Einführung in CSS: Werte und Einheiten](/de/docs/Learn/CSS/Building_blocks/Values_and_units)
- [Trigonometrische Funktionen in CSS](https://web.dev/articles/css-trig-functions)
