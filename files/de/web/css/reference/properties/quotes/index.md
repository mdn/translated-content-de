---
title: quotes
slug: Web/CSS/Reference/Properties/quotes
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die [CSS](/de/docs/Web/CSS) **`quotes`**-Eigenschaft legt fest, wie der Browser Anführungszeichen darstellen soll, die automatisch zum HTML {{HTMLElement("q")}}-Element hinzugefügt werden oder mithilfe der Werte `open-quotes` oder `close-quotes` (oder ausgelassen bei Verwendung der Werte `no-open-quote` und `no-close-quote`) der CSS [`content`](/de/docs/Web/CSS/Reference/Properties/content)-Eigenschaft hinzugefügt werden.

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

Browser fügen Anführungszeichen am Anfang und Ende von `<q>`-Elementen und für die Werte `open-quote` und `close-quote` der `content`-Eigenschaft ein. Jedes Öffnungs- oder Schlusszeichen wird durch eine der Zeichenfolgen aus dem Wert von `quotes` ersetzt, basierend auf der Verschachtelungstiefe. Wenn `quotes` explizit auf `auto` gesetzt oder anderweitig darauf aufgelöst ist, sind die verwendeten Anführungszeichen sprachabhängig.

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
  - : Die Werte `open-quote` und `close-quote` der {{cssxref("content")}}-Eigenschaft erzeugen keine Anführungszeichen, als ob `no-open-quote` bzw. `no-close-quote` gesetzt wären.
- `auto`
  - : Anführungszeichen, die typografisch für die geerbte Sprache geeignet sind (z.B. über das [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang)-Attribut, das auf das Eltern- oder andere Vorfahrenelement gesetzt wurde).
- {{cssxref("&lt;string&gt;")}}
  - : Definiert ein oder mehrere Paare von Anführungszeichenwerten für Öffnungs- und Schlusszeichen. Im Paar wird das erste Zitatzeichen für `open-quote` und das zweite für `close-quote` verwendet.

    Das erste Paar repräsentiert die äußerste Ebene des Zitats. Das zweite Paar, falls vorhanden, repräsentiert die erste verschachtelte Ebene. Das nächste Paar wird für doppelt verschachtelte Ebenen verwendet und so weiter. Wenn die Tiefe der Zitatenverschachtelung größer ist als die Anzahl der Paare, wird das letzte Paar im `quotes`-Wert wiederholt.

    Welches Paar von Anführungszeichen verwendet wird, hängt von der Tiefe oder Verschachtelungsebene der Anführungszeichen ab: die Anzahl der Vorkommen von `<q>`-Zitaten oder `open-quote` (oder `no-open-quote`) in allen generierten Texten vor dem aktuellen Vorkommen, minus der Anzahl der Vorkommen von Schlusszeichen, entweder als `</q>`, `close-quote` oder `no-close-quote`. Wenn die Tiefe 0 ist, wird das erste Paar verwendet, wenn die Tiefe 1 ist, wird das zweite Paar verwendet usw.

> [!NOTE]
> Der `open-quote`-Wert der CSS-`content`-Eigenschaft erhöht und `no-close-quote` verringert die Zitatebene, fügt jedoch kein Anführungszeichen ein.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Standardanführungszeichen und Überschreibungen

Dieses Beispiel vergleicht die von dem semantischen HTML-Element `<q>` bereitgestellten Standardanführungszeichen mit denen, die wir mithilfe der CSS-`quotes`-Eigenschaft definieren.

Der Standardwert von `quotes` ist [`auto`](#auto). In diesem Beispiel hat das erste Listenelement `quotes: auto` gesetzt und erhält daher die Standardanführungszeichen für die angegebene Sprache, genauso wie wenn keine `quotes`-Eigenschaft gesetzt wäre. Das zweite Listenelement definiert, welche Anführungszeichen für Zitate und verschachtelte Zitate verwendet werden sollen; diese Anführungszeichen werden für Nachkommen eines Elements mit der Klasse `specialQuotes` verwendet, unabhängig von der Sprache (wie etwa über [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang)-Attributwerte gesetzt).

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

Standardmäßig liefern Browser sprachspezifische Anführungszeichen, wenn das `<q>`-Element verwendet wird. Wenn die `quotes`-Eigenschaft definiert ist, überschreiben die bereitgestellten Werte die Standardeinstellungen des Browsers. Beachten Sie, dass die `quotes`-Eigenschaft vererbt wird. Die `quotes`-Eigenschaft wird auf das `<li>` mit der Klasse `specialQuotes` gesetzt, aber die Anführungszeichen werden auf die `<q>`-Elemente angewendet.

Beachten Sie, dass jedes open-quote und close-quote durch eine der Zeichenfolgen aus dem Wert von quotes ersetzt wird, basierend auf der Verschachtelungstiefe.

### Automatische Anführungszeichen

Der Standardwert von `quotes` ist `auto`. Dieses Beispiel funktioniert, ohne dass er ausdrücklich gesetzt wird.

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

Beachten Sie, dass das [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang)-Attribut auf einem Vorfahren des `<q>`, nicht auf dem `<q>` selbst platziert wurde. Wenn ein Zitat in einer anderen Sprache als der umgebenden Sprache vorliegt, ist es üblich, den Text mit den Anführungszeichen der Sprache des umgebenden Textes zu zitieren, nicht der Sprache des Zitats selbst.

### Mit generiertem Inhalt

In diesem Beispiel werden statt des `<q>`-Elements Anführungszeichen zu den {{cssxref("::before")}}- und {{cssxref("::after")}}-Pseudo-Elementen vor und nach dem Inhalt jedes Elements mit einem bestimmten Klassennamen hinzugefügt.

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

Dieses Beispiel zeigt, wie etwas anderes als Anführungszeichen als `<string>`-Werte verwendet werden kann. Die open-quote geben den Sprecher an und, da es kein öffnendes Anführungszeichen gibt, ist das close-quote leer. (Das Mischen eines `<string>` mit einem aufgelisteten Schlüsselwort zur Erstellung eines Paares wird nicht unterstützt). Wir setzen `auto` für die verschachtelten Zitate. Diese verschachtelten Zitate werden von den Anführungszeichen umrahmt, die für verschachtelte Zitate in der angegebenen Sprache normal sind.

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

- [CSS Generated Content](/de/docs/Web/CSS/CSS_generated_content) Modul
- {{ Cssxref("contain") }}
- {{ Cssxref("content") }}
