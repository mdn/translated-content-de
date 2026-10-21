---
title: "`font-family` CSS property"
short-title: font-family
slug: Web/CSS/Reference/Properties/font-family
l10n:
  sourceCommit: e7ee9edb037573b84aca121a0bce4f3f700f3fa3
---

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`font-family`** legt für das ausgewählte Element eine nach Priorität geordnete Liste mit einem oder mehreren Schriftfamiliennamen und/oder generischen Schriftfamiliennamen fest.

{{InteractiveExample("CSS Demo: font-family")}}

```css interactive-example-choice
font-family: "Georgia", serif;
```

```css interactive-example-choice
font-family: "Gill Sans", sans-serif;
```

```css interactive-example-choice
font-family: sans-serif;
```

```css interactive-example-choice
font-family: serif;
```

```css interactive-example-choice
font-family: cursive;
```

```css interactive-example-choice
font-family: system-ui;
```

```html interactive-example
<section id="default-example">
  <p id="example-element">
    London. Michaelmas term lately over, and the Lord Chancellor sitting in
    Lincoln's Inn Hall. Implacable November weather. As much mud in the streets
    as if the waters had but newly retired from the face of the earth, and it
    would not be wonderful to meet a Megalosaurus, forty feet long or so,
    waddling like an elephantine lizard up Holborn Hill.
  </p>
</section>
```

```css interactive-example
section {
  font-size: 1.2em;
}
```

Die Werte werden durch Kommas getrennt, um anzuzeigen, dass es sich um Alternativen handelt. Der Browser wählt die erste Schriftart in der Liste aus, die installiert ist oder mithilfe einer {{CSSxRef("@font-face")}}-At-Regel heruntergeladen werden kann.

Oft ist es praktisch, die Kurzschreibweise {{CSSxRef("font")}} zu verwenden, um `font-size` und andere schriftbezogene Eigenschaften gleichzeitig festzulegen.

Eine `font-family`-Liste sollte immer mindestens einen generischen Schriftfamiliennamen enthalten, da nicht garantiert ist, dass eine bestimmte Schriftart verfügbar ist. So kann der Browser bei Bedarf eine geeignete Ersatzschrift auswählen.

Die Eigenschaft `font-family` legt eine Liste von Schriftarten fest, geordnet von der höchsten zur niedrigsten Priorität. Die Schriftauswahl endet _nicht_ bei der ersten Schriftart in der Liste, die auf dem System der nutzenden Person vorhanden ist. Stattdessen erfolgt die Auswahl _Zeichen für Zeichen_: Wenn eine verfügbare Schriftart keine Glyphe für ein benötigtes Zeichen enthält, werden die nachfolgenden Schriftarten ausprobiert. Ist eine Schriftart nur in bestimmten [Schriftstilen](/de/docs/Web/CSS/Reference/Properties/font-style), [Varianten](/de/docs/Web/CSS/Reference/Properties/font-variant) oder [Größen](/de/docs/Web/CSS/Reference/Properties/font-size) verfügbar, können auch diese Eigenschaften beeinflussen, welche Schriftfamilie ausgewählt wird.

## Syntax

```css
/* A font family name and a generic family name */
font-family: "Gill Sans Extrabold", sans-serif;
font-family: "Goudy Bookletter 1911", sans-serif;

/* A generic family name only */
font-family: serif;
font-family: sans-serif;
font-family: monospace;
font-family: cursive;
font-family: fantasy;
font-family: system-ui;
font-family: ui-serif;
font-family: ui-sans-serif;
font-family: ui-monospace;
font-family: ui-rounded;
font-family: math;
font-family: fangsong;

/* Global values */
font-family: inherit;
font-family: initial;
font-family: revert;
font-family: revert-layer;
font-family: unset;
```

Die Eigenschaft `font-family` enthält eine oder mehrere durch Kommas getrennte Schriftfamilien. Jede Schriftfamilie wird entweder als `<family-name>`- oder als `<generic-name>`-Wert angegeben.

Das folgende Beispiel enthält zwei Schriftfamilien: Die erste wird mit `<family-name>`, die zweite mit `<generic-name>` angegeben:

```css
font-family: "Gill Sans Extrabold", sans-serif;
```

### Werte

- `<family-name>`
  - : Der Name einer Schriftfamilie. Er muss entweder ein einzelner {{cssxref("string")}}-Wert oder eine durch Leerzeichen getrennte Folge von {{cssxref("custom-ident")}}-Werten sein. Zeichenfolgen müssen in Anführungszeichen stehen, dürfen aber beliebige Unicode-Zeichen enthalten. Benutzerdefinierte Bezeichner stehen nicht in Anführungszeichen; bestimmte Zeichen müssen jedoch mit einem Escape-Zeichen versehen werden.

    Es empfiehlt sich, Schriftfamiliennamen in Anführungszeichen zu setzen, wenn sie Leerzeichen, Ziffern oder andere Satzzeichen als Bindestriche enthalten.

    Siehe auch [Gültige Schriftfamiliennamen](#gültige_schriftfamiliennamen).

- `<generic-name>`
  - : Generische Schriftfamilien dienen als Ersatz, wenn keine der angegebenen Schriftarten verfügbar ist. Dadurch bleibt ein Teil der gestalterischen Absicht der Person erhalten, die das Stylesheet verfasst hat. Generische Schriftfamiliennamen sind Schlüsselwörter und dürfen nicht in Anführungszeichen stehen. Eine generische Schriftfamilie sollte der letzte Eintrag in der Liste der Schriftfamiliennamen sein. Die folgenden Schlüsselwörter sind definiert:
    - `serif`
      - : Die Glyphen haben Abschlussstriche, verbreiterte oder sich verjüngende Enden oder ausgeprägte Serifen.

        Beispiele: Lucida Bright, Lucida Fax, Palatino, Palatino Linotype, Palladio, URW Palladio, serif.

    - `sans-serif`
      - : Die Striche der Glyphen haben schlichte Enden.

        Beispiele: Open Sans, Fira Sans, Lucida Sans, Lucida Sans Unicode, Trebuchet MS, Liberation Sans, Nimbus Sans L, sans-serif.

    - `monospace`
      - : Alle Glyphen haben dieselbe feste Breite.

        Beispiele: Fira Mono, DejaVu Sans Mono, Menlo, Consolas, Liberation Mono, Monaco, Lucida Console, monospace.

        > [!NOTE]
        > Wenn `font-family` ausschließlich auf das Schlüsselwort `monospace` gesetzt ist und kein `font-size` festgelegt wurde, verwenden Browser die vom Nutzer bevorzugte Schriftgröße für Festbreitenschriften. Diese ist häufig kleiner als die für proportionale Schriftarten verwendete Größe. Weitere Informationen und Hinweise zur Steuerung dieses Verhaltens finden Sie unter [Schriftgröße von Festbreitenschriften](#schriftgröße_von_festbreitenschriften).

    - `cursive`
      - : Die Glyphen von Schreibschriften haben im Allgemeinen Verbindungsstriche oder andere kursive Merkmale, die über die Merkmale kursiver Druckschriften hinausgehen. Die Glyphen sind teilweise oder vollständig miteinander verbunden. Das Ergebnis ähnelt eher handgeschriebenem Text mit Stift oder Pinsel als gedruckten Buchstaben.

        Beispiele: Brush Script MT, Brush Script Std, Lucida Calligraphy, Lucida Handwriting, Apple Chancery, cursive.

        > [!NOTE]
        > Unter Windows verwenden Browser Comic Sans MS als `cursive`-Schriftart. Dabei handelt es sich um eine informelle Schriftart mit vollständig unverbundenen Glyphen.

    - `fantasy`
      - : Fantasy-Schriftarten sind vorwiegend dekorative Schriftarten mit verspielten Darstellungen von Zeichen.

        Beispiele: Papyrus, Herculanum, Party LET, Curlz MT, Harrington, fantasy.

    - `system-ui`
      - : Die Glyphen stammen aus der Standardschriftart der Benutzeroberfläche der jeweiligen Plattform. Da sich typografische Traditionen weltweit stark unterscheiden, steht diese generische Schriftfamilie für Schriftarten zur Verfügung, die sich keiner der anderen generischen Schriftfamilien eindeutig zuordnen lassen.
        > [!NOTE]
        > Wie der Name nahelegt, ist `system-ui` dafür gedacht, Benutzeroberflächenelemente wie in nativen Anwendungen aussehen zu lassen, nicht aber für den Satz längerer Textabsätze. Die angezeigte Schriftart kann für manche Nutzende ungeeignet sein: Beispielsweise stellt die standardmäßige CJK-Schriftart unter Windows lateinische Schriften möglicherweise schlecht dar, und das Attribut `lang` beeinflusst die angezeigte Schriftart möglicherweise nicht. Bei manchen Betriebssystemen lässt sich `system-ui` nicht anpassen, während Browser in der Regel die Anpassung der Schriftfamilie `sans-serif` erlauben. Verwenden Sie für längere Absätze stattdessen `sans-serif` oder eine andere Schriftfamilie, die nicht für Benutzeroberflächen vorgesehen ist.
    - `ui-serif`
      - : Die standardmäßige Serifenschriftart der Benutzeroberfläche.
    - `ui-sans-serif`
      - : Die standardmäßige serifenlose Schriftart der Benutzeroberfläche.
    - `ui-monospace`
      - : Die standardmäßige Festbreitenschriftart der Benutzeroberfläche.
    - `ui-rounded`
      - : Die standardmäßige Schriftart der Benutzeroberfläche mit abgerundeten Formen.
    - `math`
      - : Eine Schriftart, die den besonderen typografischen Anforderungen bei der Darstellung mathematischer Inhalte gerecht wird: hoch- und tiefgestellte Zeichen, Klammern über mehrere Zeilen, verschachtelte Ausdrücke und doppelt gestrichene Glyphen mit unterschiedlichen Bedeutungen.
        User-Agent-Stylesheets können `math { font-family: math }` festlegen, damit das Element {{MathMLElement("math")}} standardmäßig geeignete Schriftarten verwendet.
    - `fangsong`
      - : Ein besonderer Stil chinesischer Schriftzeichen zwischen dem Serifenstil Song und dem Schreibschriftstil Kai. Dieser Stil wird häufig für amtliche Dokumente verwendet.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einige gebräuchliche Schriftfamilien

```css
.serif {
  font-family: "Times", "Times New Roman", "Georgia", serif;
}

.sansserif {
  font-family: "Verdana", "Helvetica", "Arial", sans-serif;
}

.monospace {
  font-family: "Lucida Console", "Courier New", monospace;
}

.cursive {
  font-family: cursive;
}

.fantasy {
  font-family: fantasy;
}

.math {
  font-family: math;
}

.fangsong {
  font-family: fangsong;
}
```

```css hidden
div {
  margin: 0.5rem;
}
```

```html hidden
<div class="serif">This is an example of a serif font.</div>

<div class="sansserif">This is an example of a sans-serif font.</div>

<div class="monospace">This is an example of a monospace font.</div>

<div class="cursive">This is an example of a cursive font.</div>

<div class="fantasy">This is an example of a fantasy font.</div>

<div class="fangsong">This is an example of a fangsong font.</div>

<div class="math">This is an example of a math font: ℝ, ∫, ∑…</div>
```

{{EmbedLiveSample("Some_common_font_families", 600, 220)}}

### Schriftgröße von Festbreitenschriften

Browser verwalten getrennte Einstellungen für die Standardschriftgröße proportionaler Schriftarten (wie `serif` und `sans-serif`) und Festbreitenschriften. Typische Standardwerte sind `16px` für proportionale Schriftarten und `13px` für Festbreitenschriften.

Wenn `font-family` ausschließlich auf das Schlüsselwort `monospace` gesetzt ist, verwenden Browser die bevorzugte Schriftgröße für Festbreitenschriften. Wenn Nutzende ihre Browsereinstellungen nicht geändert haben und {{cssxref("font-size")}} nicht ausdrücklich festgelegt ist, kann Text in Festbreitenschrift kleiner dargestellt werden als der umgebende Inhalt. Dieselbe Verkleinerung gilt für Elemente, für die das User-Agent-Stylesheet `font-family: monospace` festlegt, beispielsweise {{HTMLElement("code")}} und {{HTMLElement("pre")}}.

Wenn der Wert von `font-family` mehr als eine Schriftfamilie enthält – selbst wenn der Wert `monospace, monospace` lautet –, verwenden Browser nicht die bevorzugte Schriftgröße für Festbreitenschriften. Stattdessen stellen sie den Text mit dem geerbten `font-size` dar. Mit `font-family: monospace, monospace` (oder einer benannten Festbreitenschrift, gefolgt von `monospace`) wird der Text daher in derselben Größe wie der umgebende Text in proportionaler Schrift dargestellt. Dieses Verhalten ist nicht in CSS spezifiziert, funktioniert aber in den wichtigsten Browser-Engines einheitlich.

```html
<p class="proportional">
  This proportional text is at the default size; generally 16px.
</p>
<p class="mono-only">
  This monospace text is at the preferred size for monospace fonts; generally
  13px.
</p>
<p class="mono-list">
  This is in "monospace, monospace" font, rendered at the same size as
  proportional text; generally 16px.
</p>
```

```css
.mono-only {
  font-family: monospace;
}

.mono-list {
  font-family: monospace, monospace;
}
```

{{EmbedLiveSample("Monospace_font_size", 600, 120)}}

Wenn Sie die Schriftgröße in Ihren Browsereinstellungen nicht geändert haben, werden der erste und der letzte Absatz in derselben Schriftgröße dargestellt: der vom Browser bevorzugten Schriftgröße. Der mittlere Absatz wird in der bevorzugten Schriftgröße für Festbreitenschriften dargestellt, die im Allgemeinen kleiner eingestellt ist als die bevorzugte Schriftgröße für anderen Text.

### Gültige Schriftfamiliennamen

Die folgenden Deklarationen sind gültig:

```css example-good
font-family: "Goudy Bookletter 1911", sans-serif;
```

Die folgenden Deklarationen sind ungültig:

```css-nolint example-bad
font-family: Goudy Bookletter 1911, sans-serif;
font-family: Red/Black, sans-serif;
font-family: "Lucida" Grande, sans-serif;
font-family: Ahem!, sans-serif;
font-family: test@foo, sans-serif;
font-family: #POUND, sans-serif;
font-family: Hawaii 5-0, sans-serif;
```

Das folgende Beispiel ist technisch gültig, wird aber nicht empfohlen:

```css
font-family:
  Gill Sans Extrabold,
  sans-serif;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("font-style")}}
- {{cssxref("font-weight")}}
- {{cssxref("font-variant-emoji")}}
- SVG-Attribut {{SVGAttr("font-family")}}
- [Lernen: Grundlagen der Text- und Schriftgestaltung](/de/docs/Learn_web_development/Core/Text_styling/Fundamentals)
