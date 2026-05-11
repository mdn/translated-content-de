---
title: "`quotes` CSS property"
short-title: quotes
slug: Web/CSS/Reference/Properties/quotes
l10n:
  sourceCommit: 652d220f00bede14baef1fc755003a3bcfd2573c
---

Die [CSS](/de/docs/Web/CSS) **`quotes`**-Eigenschaft legt fest, wie der Browser Anführungszeichen rendern soll, die automatisch zum HTML-{{HTMLElement("q")}}-Element hinzugefügt werden oder die mit den Werten `open-quotes` oder `close-quotes` (oder weggelassen mit den Werten `no-open-quote` und `no-close-quote`) der CSS-{{cssxref("content")}}-Eigenschaft hinzugefügt werden.

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

Browser fügen Anführungszeichen am Anfang und Ende von `<q>`-Elementen und für die Werte `open-quote` und `close-quote` der `content`-Eigenschaft ein. Jedes öffnende oder schließende Anführungszeichen wird durch eine der Zeichenketten aus dem Wert von `quotes` ersetzt, basierend auf der Verschachtelungstiefe. Wenn `quotes` explizit auf `auto` gesetzt ist oder sich darauf auflöst, hängen die verwendeten Anführungszeichen von der Sprache ab.

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
  - : Die `open-quote`- und `close-quote`-Werte der {{cssxref("content")}}-Eigenschaft erzeugen keine Anführungszeichen, so als ob `no-open-quote` und `no-close-quote` gesetzt wären.
- `auto`
  - : Anführungszeichen, die typografisch für die geerbte Sprache geeignet sind (d.h. über das [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang)-Attribut, das auf das übergeordnete oder ein anderes Vorfahrelement gesetzt ist).
- {{cssxref("&lt;string&gt;")}}
  - : Definiert ein oder mehrere Paare von Anführungszeichen für öffnende und schließende Anführungen. In jedem Paar wird das erste als Wert für `open-quote` und das zweite als `close-quote` verwendet.

    Das erste Paar repräsentiert die äußere Ebene der Anführung. Das zweite Paar, sofern vorhanden, repräsentiert die erste verschachtelte Ebene. Das nächste Paar wird für doppele Verschachtelungen verwendet und so weiter. Wenn die Verschachtelungstiefe der Anführungen größer ist als die Anzahl der Paare, wird das letzte Paar im `quotes`-Wert wiederholt.

    Welches Paar Anführungen verwendet wird, hängt von der Tiefe bzw. Verschachtelungsebene der Anführungen ab: der Anzahl der Vorkommen von `<q>`-Anführungen oder `open-quote` (oder `no-open-quote`) in allen generierten Texten vor dem aktuellen Vorkommen minus der Anzahl der Vorkommen von schließenden Anführungen, entweder als `</q>`, `close-quote` oder `no-close-quote`. Ist die Tiefe 0, wird das erste Paar verwendet, ist die Tiefe 1, wird das zweite Paar verwendet, usw.

> [!NOTE]
> Der `content`-Eigenschaftswert `no-open-quote` erhöht und `no-close-quote` verringert die Verschachtelungsebene, aber sie fügen keine Anführungszeichen ein.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Standard-Anführungen und Überschreibungen

Dieses Beispiel vergleicht die Standard-Anführungen des semantischen HTML-`<q>`-Elements mit denjenigen, die wir mit der CSS-`quotes`-Eigenschaft definieren.

Der Standardwert von `quotes` ist [`auto`](#auto). In diesem Beispiel hat das erste Listenelement `quotes: auto` gesetzt, sodass es die Standard-Anführungen für die angegebene Sprache erhält, als ob keine `quotes`-Eigenschaft gesetzt wäre. Das zweite Listenelement definiert, welche Anführungszeichen für Anführungen und verschachtelte Anführungen verwendet werden sollen; Diese Anführungszeichen werden für Nachkommen eines Elements mit der Klasse `specialQuotes` verwendet, unabhängig von der Sprache (ähnlich wie bei allen [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang)-Attributwerten, die gesetzt sind).

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

Standardmäßig bieten Browser sprachspezifische Anführungszeichen, wenn das `<q>`-Element verwendet wird. Wenn die `quotes`-Eigenschaft definiert ist, überschreiben die bereitgestellten Werte die Standardwerte des Browsers. Beachten Sie, dass die `quotes`-Eigenschaft vererbt wird. Die `quotes`-Eigenschaft ist auf dem `<li>` mit der Klasse `specialQuotes` gesetzt, aber die Anführungen werden auf die `<q>`-Elemente angewendet.

Beachten Sie, dass jedes `open-quote` und `close-quote` durch eine der Zeichenketten aus dem Wert von quotes ersetzt wird, basierend auf der Verschachtelungstiefe.

### Automatische Anführungen

Der Standardwert von `quotes` ist `auto`. Dieses Beispiel funktioniert, ohne dass er explizit gesetzt wird.

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

Beachten Sie, dass das [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang)-Attribut auf einem Vorfahre des `<q>` platziert wurde, nicht auf dem `<q>` selbst. Wenn ein Zitat in einer anderen Sprache als dem umgebenden Text steht, ist es üblich, den Text mit den Anführungszeichen der Sprache des umgebenden Textes zu umrahmen, nicht mit der Sprache des Zitats selbst.

### Mit generiertem Inhalt

In diesem Beispiel fügen wir anstelle des `<q>`-Elements Anführungszeichen zu den {{cssxref("::before")}}- und {{cssxref("::after")}}-Pseudo-Elementen vor und nach dem Inhalt jedes Elements mit einem bestimmten Klassennamen hinzu.

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

### Text als Anführungen und leere Anführungen

Dieses Beispiel zeigt die Verwendung von etwas anderem als Anführungszeichen als `<string>`-Werte. Das open-quote gibt den Sprecher an und, da kein öffnendes Anführungszeichen vorhanden ist, ist das close-quote leer. (Das Mischen eines `<string>` mit einem aufgezählten Schlüsselwort zur Erstellung eines Paares wird nicht unterstützt). Wir setzen `auto` für die verschachtelten Anführungen. Diese verschachtelten Anführungen werden von dem umrahmt, was die Sprache als normal für verschachtelte Anführungen vorschreibt.

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

- [CSS generierter Inhalt](/de/docs/Web/CSS/Guides/Generated_content) Modul
- {{ Cssxref("contain") }}
- {{ Cssxref("content") }}
