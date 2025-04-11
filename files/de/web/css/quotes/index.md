---
title: quotes
slug: Web/CSS/quotes
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{CSSRef}}

Die [CSS](/de/docs/Web/CSS) **`quotes`**-Eigenschaft legt fest, wie der Browser Anführungszeichen rendern soll, die automatisch zum HTML-{{HTMLElement("q")}}-Element hinzugefügt werden oder mittels der Werte `open-quotes` oder `close-quotes` (oder ausgelassen mit den Werten `no-open-quote` und `no-close-quote`) der CSS-[`content`](/de/docs/Web/CSS/content)-Eigenschaft hinzugefügt werden.

{{InteractiveExample("CSS Demo: quotes")}}

```css interactive-example-choice
quotes: none;
```

```css interactive-example-choice
quotes: initial;
```

```css interactive-example-choice
quotes: "'" "'";
```

```css interactive-example-choice
quotes: "„" "“" "‚" "‘";
```

```css interactive-example-choice
quotes: "«" "»" "‹" "›";
```

```html interactive-example
<section id="default-example">
  <q id="example-element"
    >Show us the wonder-working <q>Brothers,</q> let them come out publicly—and
    we will believe in them!</q
  >
</section>
```

```css interactive-example
q {
  font-size: 1.2rem;
}
```

Browser fügen Anführungszeichen beim Öffnen und Schließen von `<q>`-Elementen und für die Werte `open-quote` und `close-quote` der `content`-Eigenschaft ein. Jedes öffnende oder schließende Anführungszeichen wird durch einen der Zeichenfolgen aus dem Wert von `quotes` ersetzt, basierend auf der Verschachtelungstiefe oder, wenn `quotes` explizit auf `auto` gesetzt ist oder sich anderweitig darauf auflöst, werden die Anführungszeichen verwendet, die abhängig von der Sprache sind.

## Syntax

```css
/* Keyword value */
quotes: none;
quotes: auto;

/* <string> values */
quotes: "«" "»"; /* Set open-quote and close-quote to use French quotation marks */
quotes: "«" "»" "‹" "›"; /* Set two levels of quotation marks */

/* Global values */
quotes: inherit;
quotes: initial;
quotes: revert;
quotes: revert-layer;
quotes: unset;
```

### Werte

- `none`
  - : Die Werte `open-quote` und `close-quote` der {{cssxref("content")}}-Eigenschaft erzeugen keine Anführungszeichen, als ob `no-open-quote` und `no-close-quote` entsprechend gesetzt sind.
- `auto`
  - : Anführungszeichen, die typografisch für die geerbte Sprache geeignet sind (d.h. über das [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang)-Attribut, das beim Eltern- oder einem anderen Vorfahrelement gesetzt ist).
- `[{{cssxref("&lt;string&gt;")}} <string>]+`

  - : Definiert ein oder mehrere Paare von Anführungszeichenwerten für öffnende und schließende Anführungszeichen. In jedem Paar wird das erste Anführungszeichen als Wert für das `open-quote` und das zweite des Paares als `close-quote` verwendet.

    Das erste Paar stellt die äußere Ebene des Zitats dar. Das zweite Paar, falls vorhanden, stellt die erste verschachtelte Ebene dar. Das nächste Paar wird für doppelt verschachtelte Ebenen verwendet, und so weiter. Ist die Verschachtelungstiefe von Zitaten größer als die Anzahl der Paare, wird das letzte Paar im `quotes`-Wert wiederholt.

    Welches Paar von Anführungszeichen verwendet wird, hängt von der Tiefe oder Verschachtelungsebene der Zitate ab: die Anzahl der Vorkommen von `<q>`-Zitaten oder `open-quote` (oder `no-open-quote`) in allen generierten Texten vor dem aktuellen Vorkommen, minus der Anzahl der abschließenden Zitate, entweder als `</q>`, `close-quote` oder `no-close-quote`. Wenn die Tiefe 0 ist, wird das erste Paar verwendet, wenn die Tiefe 1 ist, wird das zweite Paar verwendet usw.

> [!NOTE]
> Der CSS-`content`-Eigenschaftswert `open-quote` erhöht und `no-close-quote` verringert die Zitierungsebene, fügt jedoch keine Anführungszeichen ein.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Standardanführungszeichen und Überschreibungen

Dieses Beispiel vergleicht die Standardanführungszeichen des semantischen HTML-Elements `<q>` mit denen, die wir mit der CSS-`quotes`-Eigenschaft definieren.

Der Standardwert von `quotes` ist [`auto`](#auto). In diesem Beispiel ist das erste Listenelement mit `quotes: auto` festgelegt, sodass die Standardanführungszeichen für die angegebene Sprache angezeigt werden; dasselbe, als wenn keine `quotes`-Eigenschaft gesetzt wäre. Das zweite Listenelement definiert, welche Anführungszeichen für Zitate und verschachtelte Zitate verwendet werden sollen; diese Anführungszeichen werden für Nachfahren eines Elements mit der `specialQuotes`-Klasse unabhängig von der Sprache (wie jeder `[lang](/de/docs/Web/HTML/Reference/Global_attributes/lang)`-Attributwert) verwendet.

#### HTML

```html
<ul>
  <li>
    Default quotes:
    <p lang="ru">
      <q
        >Митч Макконнелл - это человек, который знает о России и ее влиянии
        меньше, чем даже Дональд Трамп, и <q>я ничего не знаю</q>, сказал
        Трамп</q
      >, - писал Раджу.
    </p>
  </li>
  <li class="specialQuotes">
    Defined by <code>quotes</code> property :
    <p lang="ru">
      <q
        >Митч Макконнелл - это человек, который знает о России и ее влиянии
        меньше, чем даже Дональд Трамп, и <q>я ничего не знаю</q>, сказал
        Трамп</q
      >, - писал Раджу.
    </p>
  </li>
  <ul></ul>
</ul>
```

#### CSS

```css
li {
  quotes: auto;
}

.specialQuotes {
  quotes: "“" "”" "‘" "’";
}
```

#### Ergebnis

{{EmbedLiveSample('Overriding default quotes', "100%", 200)}}

Standardmäßig stellen Browser sprachspezifische Anführungszeichen zur Verfügung, wenn das `<q>`-Element verwendet wird. Wenn die `quotes`-Eigenschaft definiert ist, überschreiben die bereitgestellten Werte die Standardeinstellungen des Browsers. Beachten Sie, dass die `quotes`-Eigenschaft vererbt wird. Die `quotes`-Eigenschaft wird am `<li>`-Element mit der `specialQuotes`-Klasse gesetzt, aber die Anführungszeichen werden auf die `<q>`-Elemente angewendet.

Beachten Sie, dass jedes `open-quote` und `close-quote` durch eine der Zeichenfolgen aus dem Wert von quotes ersetzt wird, basierend auf der Verschachtelungstiefe.

### Automatische Anführungszeichen

Der Standardwert von `quotes` ist `auto`. Dieses Beispiel funktioniert, ohne dass er explizit gesetzt ist.

#### HTML

```html
<ul>
  <li lang="fr">
    <q>Ceci est une citation française.</q>
  </li>
  <li lang="ru">
    <q>Это русская цитата</q>
  </li>
  <li lang="de">
    <q>Dies ist ein deutsches Zitat</q>
  </li>
  <li lang="en">
    <q>This is an English quote.</q>
  </li>
</ul>
```

#### CSS

```css
q {
  quotes: auto;
}
li:not(:last-of-type) {
  border-bottom: 1px solid;
}
```

```css hidden
li {
  padding: 0.5em 0;
}
```

#### Ergebnis

{{EmbedLiveSample('Auto_quotes', "100%", 200)}}

Beachten Sie, dass das [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang)-Attribut auf einen Vorfahren des `<q>`, nicht auf das `<q>` selbst gesetzt wurde. Wenn ein Zitat in einer anderen Sprache als der umgebende Text verfasst ist, ist es üblich, den Text mit den Anführungszeichen der Sprache des umgebenden Textes zu zitieren, nicht mit denen der Sprache des Zitats selbst.

### Mit generiertem Inhalt

In diesem Beispiel fügen wir, anstatt das `<q>`-Element zu verwenden, Anführungszeichen zu den {{cssxref("::before")}}- und {{cssxref("::after")}}-Pseudo-Elementen vor und nach dem Inhalt jedes Elements mit einem bestimmten Klassennamen hinzu.

#### HTML

```html
<p>
  <span class="quote">I should be using quotes</span>, I thought,
  <span class="quote"
    >But why use semantic HTML elements when I can add classes to
    <span class="quote">ALL THE THINGS!</span>?
  </span>
</p>
```

#### CSS

```css
.quote {
  quotes: '"' '"' "'" "'";
}
.quote::before {
  content: open-quote;
}
.quote::after {
  content: close-quote;
}
```

#### Ergebnis

{{EmbedLiveSample('With generated content', "100%", 80)}}

### Text als Anführungszeichen und leere Anführungszeichen

Dieses Beispiel demonstriert die Verwendung von etwas anderem als Anführungszeichen als `<string>`-Werte. Das `open-quote` zeigt den Sprecher, und da kein öffnendes Anführungszeichen vorhanden ist, ist das `close-quote` leer. (Das Mischen eines `<string>` mit einem aufgezählten Schlüsselwort, um ein Paar zu erstellen, wird nicht unterstützt). Wir setzen `auto` für die verschachtelten Anführungszeichen. Diese verschachtelten Zitate werden von dem umschlossen, was die Sprache als normal für verschachtelte Zitate vorschreibt.

#### HTML

```html
<ul>
  <li><q data-speaker="karen">Hello</q></li>
  <li><q data-speaker="chad">Hi</q></li>
  <li><q data-speaker="karen">this conversation is not interesting</q></li>
  <li>
    <q data-speaker="pat"
      >OMG! <q>Hi</q>? Seriously? at least <q>hello</q> is five letters long.</q
    >
  </li>
</ul>
```

#### CSS

```css
[data-speaker="karen" i] {
  quotes: "She said: " "";
}
[data-speaker="chad" i] {
  quotes: "He said: " "";
}
[data-speaker="pat" i] {
  quotes: "They said: " "";
}
[data-speaker] q {
  quotes: auto;
}
```

```css hidden
li {
  padding: 0.5em 0;
}
```

#### Ergebnis

{{EmbedLiveSample('Text as quotes and empty quotes', "100%", 200)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS generierter Inhalt](/de/docs/Web/CSS/CSS_generated_content) Modul
- {{ Cssxref("contain") }}
- {{ Cssxref("content") }}
