---
title: "`quotes` CSS property"
short-title: quotes
slug: Web/CSS/Reference/Properties/quotes
l10n:
  sourceCommit: 7cabe7010a0ccfcf587ddac1571963eba102090d
---

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`quotes`** legt fest, wie der Browser Anführungszeichen darstellt, die dem HTML-Element {{HTMLElement("q")}} automatisch hinzugefügt oder mithilfe der Werte `open-quote` und `close-quote` der CSS-Eigenschaft {{cssxref("content")}} eingefügt werden. Mit `no-open-quote` und `no-close-quote` werden die entsprechenden Anführungszeichen nicht eingefügt.

Browser fügen am Anfang und Ende von `<q>`-Elementen sowie für die Werte `open-quote` und `close-quote` der Eigenschaft `content` Anführungszeichen ein. Jedes öffnende oder schließende Anführungszeichen wird abhängig von der Verschachtelungstiefe durch eine der Zeichenfolgen aus dem Wert von `quotes` ersetzt. Wenn `quotes` ausdrücklich auf `auto` gesetzt ist oder anderweitig zu `auto` aufgelöst wird, hängen die verwendeten Anführungszeichen von der Sprache ab.

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

## Syntax

```css
/* Keyword values */
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
  - : Die Werte `open-quote` und `close-quote` der Eigenschaft {{cssxref("content")}} erzeugen keine Anführungszeichen, als wären stattdessen `no-open-quote` beziehungsweise `no-close-quote` festgelegt.
- `auto`
  - : Anführungszeichen, die für die geerbte Sprache typografisch angemessen sind (die Sprache wird beispielsweise durch das Attribut [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang) eines übergeordneten Elements festgelegt).
- {{cssxref("&lt;string&gt;")}}
  - : Definiert ein oder mehrere Paare von Werten für öffnende und schließende Anführungszeichen. In jedem Paar wird der erste Wert für `open-quote` und der zweite für `close-quote` verwendet.

    Das erste Paar steht für die äußerste Zitatebene. Das zweite Paar, sofern vorhanden, steht für die erste verschachtelte Ebene. Das nächste Paar wird für die zweite verschachtelte Ebene verwendet und so weiter. Ist die Verschachtelungstiefe größer als die Anzahl der Paare, wird das letzte Paar im Wert von `quotes` wiederholt.

    Welches Paar verwendet wird, hängt von der Verschachtelungstiefe ab: der Anzahl der Vorkommen von öffnenden `<q>`-Tags, `open-quote` und `no-open-quote` im gesamten generierten Text vor der aktuellen Stelle, abzüglich der Anzahl der Vorkommen von schließenden `</q>`-Tags, `close-quote` und `no-close-quote`. Bei einer Tiefe von 0 wird das erste Paar verwendet, bei einer Tiefe von 1 das zweite und so weiter.

> [!NOTE]
> Der Wert `no-open-quote` der CSS-Eigenschaft `content` erhöht die Verschachtelungstiefe von Zitaten, während `no-close-quote` sie verringert. Beide fügen jedoch keine Anführungszeichen ein.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Standardmäßige Anführungszeichen und Überschreibungen

Dieses Beispiel vergleicht die standardmäßigen Anführungszeichen des semantischen HTML-Elements `<q>` mit denen, die wir über die CSS-Eigenschaft `quotes` definieren.

Der Standardwert von `quotes` ist [`auto`](#auto). Beim ersten Listeneintrag dieses Beispiels ist `quotes: auto` festgelegt. Er erhält daher die standardmäßigen Anführungszeichen für die angegebene Sprache, genau wie ohne Festlegung der Eigenschaft `quotes`. Der zweite Listeneintrag legt fest, welche Anführungszeichen für Zitate und verschachtelte Zitate verwendet werden. Diese Anführungszeichen gelten für Nachfahren eines Elements mit der Klasse `specialQuotes`, unabhängig von der Sprache und etwaigen Werten des Attributs [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang).

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

{{EmbedLiveSample('default_quotes_and_overrides', "100%", 200)}}

Standardmäßig stellen Browser bei Verwendung des Elements `<q>` sprachspezifische Anführungszeichen bereit. Wenn die Eigenschaft `quotes` definiert ist, überschreiben ihre Werte die Browservorgaben. Beachten Sie, dass die Eigenschaft `quotes` vererbt wird. Sie ist für das `<li>`-Element mit der Klasse `specialQuotes` festgelegt, die Anführungszeichen werden jedoch auf die `<q>`-Elemente angewendet.

Beachten Sie, dass jedes öffnende und schließende Anführungszeichen abhängig von der Verschachtelungstiefe durch eine der Zeichenfolgen aus dem Wert von `quotes` ersetzt wird.

### Automatische Anführungszeichen

Der Standardwert von `quotes` ist `auto`. Dieses Beispiel funktioniert, ohne dass der Wert ausdrücklich festgelegt wird.

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

Beachten Sie, dass das Attribut [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang) für ein übergeordnetes Element von `<q>` festgelegt wurde, nicht für `<q>` selbst. Wenn ein Zitat in einer anderen Sprache als der umgebende Text verfasst ist, wird üblicherweise mit den Anführungszeichen der Sprache des umgebenden Textes zitiert, nicht mit denen der Sprache des Zitats.

### Mit generiertem Inhalt

In diesem Beispiel verwenden wir nicht das Element `<q>`. Stattdessen fügen wir Anführungszeichen über die Pseudoelemente {{cssxref("::before")}} und {{cssxref("::after")}} vor und nach dem Inhalt jedes Elements mit einem bestimmten Klassennamen ein.

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

Dieses Beispiel zeigt, wie sich statt Anführungszeichen andere Werte für `<string>` verwenden lassen. Der Wert für das öffnende Anführungszeichen kennzeichnet die sprechende Person. Da kein öffnendes Anführungszeichen verwendet wird, ist der Wert für das schließende Anführungszeichen leer. (Ein `<string>` und ein aufgezähltes Schlüsselwort lassen sich nicht zu einem Paar kombinieren.) Für die verschachtelten Zitate legen wir `auto` fest. Sie werden dadurch von den Anführungszeichen eingerahmt, die in der jeweiligen Sprache für verschachtelte Zitate üblich sind.

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

- Modul [CSS-generierter Inhalt](/de/docs/Web/CSS/Guides/Generated_content)
- {{ Cssxref("contain") }}
- {{ Cssxref("content") }}
