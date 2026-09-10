---
title: "`quotes` CSS property"
short-title: quotes
slug: Web/CSS/Reference/Properties/quotes
l10n:
  sourceCommit: 3fb9ea0187429234b47cb0385a9515a69757fe63
---

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`quotes`** legt fest, wie der Browser Anführungszeichen darstellen soll, die automatisch dem HTML-Element {{HTMLElement("q")}} hinzugefügt oder mithilfe der Werte `open-quotes` oder `close-quotes` (bzw. mithilfe der Werte `no-open-quote` und `no-close-quote` ausgelassen) der CSS-Eigenschaft {{cssxref("content")}} hinzugefügt werden.

Browser fügen am Anfang und Ende von `<q>`-Elementen sowie für die Werte `open-quote` und `close-quote` der Eigenschaft `content` Anführungszeichen ein. Jedes öffnende oder schließende Anführungszeichen wird abhängig von der Verschachtelungstiefe durch eine der Zeichenketten aus dem Wert von `quotes` ersetzt. Wenn `quotes` explizit auf `auto` gesetzt ist oder anderweitig zu `auto` aufgelöst wird, sind die verwendeten Anführungszeichen sprachabhängig.

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
  - : Die Werte `open-quote` und `close-quote` der Eigenschaft {{cssxref("content")}} erzeugen keine Anführungszeichen, als wären jeweils `no-open-quote` und `no-close-quote` gesetzt.
- `auto`
  - : Anführungszeichen, die typografisch für die geerbte Sprache geeignet sind (d.h. über das auf einem übergeordneten oder anderen Vorfahren gesetzte Attribut [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang)).
- {{cssxref("&lt;string&gt;")}}
  - : Definiert ein oder mehrere Paare von Anführungszeichenwerten für öffnende und schließende Anführungszeichen. In jedem Paar wird das erste Anführungszeichen als Wert für `open-quote` und das zweite als `close-quote` verwendet.

    Das erste Paar repräsentiert die äußerste Ebene des Zitats. Das zweite Paar, falls vorhanden, repräsentiert die erste verschachtelte Ebene. Das nächste Paar wird für doppelt verschachtelte Ebenen verwendet usw. Wenn die Tiefe der Zitatverschachtelung größer als die Anzahl der Paare ist, wird das letzte Paar im Wert von `quotes` wiederholt.

    Welches Anführungszeichenpaar verwendet wird, hängt von der Tiefe bzw. Verschachtelungsebene der Zitate ab: der Anzahl der Vorkommen von `<q>`-Zitaten oder `open-quote` (bzw. `no-open-quote`) in allen generierten Texten vor dem aktuellen Vorkommen, abzüglich der Anzahl der Vorkommen schließender Anführungszeichen, entweder als `</q>`, `close-quote` oder `no-close-quote`. Wenn die Tiefe 0 ist, wird das erste Paar verwendet, bei einer Tiefe von 1 das zweite Paar usw.

> [!NOTE]
> Der CSS-Eigenschaftswert `no-open-quote` von `content` erhöht und `no-close-quote` verringert die Zitatebene, sie fügen jedoch keine Anführungszeichen ein.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Standardanführungszeichen und Überschreibungen

Dieses Beispiel vergleicht die vom semantischen HTML-Element `<q>` bereitgestellten Standardanführungszeichen mit denen, die wir mithilfe der CSS-Eigenschaft `quotes` definieren.

Der Standardwert von `quotes` ist [`auto`](#auto). In diesem Beispiel ist beim ersten Listenelement `quotes: auto` gesetzt, daher erhält es die Standardanführungszeichen für die angegebene Sprache; genauso, als wäre keine `quotes`-Eigenschaft gesetzt. Das zweite Listenelement definiert, welche Anführungszeichen für Zitate und verschachtelte Zitate verwendet werden sollen; diese Anführungszeichen werden unabhängig von der Sprache für Nachfahren eines Elements mit der Klasse `specialQuotes` verwendet (wie auch immer die Werte eines gesetzten [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang)-Attributs lauten).

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

Standardmäßig stellen Browser sprachspezifische Anführungszeichen bereit, wenn das `<q>`-Element verwendet wird. Wenn die Eigenschaft `quotes` definiert ist, überschreiben die bereitgestellten Werte die Browserstandards. Beachten Sie, dass die Eigenschaft `quotes` vererbt wird. Die Eigenschaft `quotes` wird auf dem `<li>` mit der Klasse `specialQuotes` gesetzt, die Anführungszeichen werden jedoch auf die `<q>`-Elemente angewendet.

Beachten Sie, dass jedes öffnende und schließende Anführungszeichen abhängig von der Verschachtelungstiefe durch eine der Zeichenketten aus dem Wert von `quotes` ersetzt wird.

### Automatische Anführungszeichen

Der Standardwert von `quotes` ist `auto`. Dieses Beispiel funktioniert, ohne dass der Wert explizit gesetzt wird.

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

Beachten Sie, dass das Attribut [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang) auf einem Vorfahren von `<q>` und nicht auf `<q>` selbst platziert wurde. Wenn ein Zitat in einer anderen Sprache als der umgebende Text verfasst ist, ist es üblich, den Text mit den Anführungszeichen der Sprache des umgebenden Textes und nicht mit denen der Sprache des Zitats zu kennzeichnen.

### Mit generierten Inhalten

In diesem Beispiel verwenden wir statt des `<q>`-Elements die Pseudoelemente {{cssxref("::before")}} und {{cssxref("::after")}}, um vor und nach dem Inhalt jedes Elements mit einem bestimmten Klassennamen Anführungszeichen hinzuzufügen.

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

Dieses Beispiel demonstriert die Verwendung anderer Werte als Anführungszeichen für die `<string>`-Werte. Das `open-quote` gibt den Sprecher an und da es kein öffnendes Anführungszeichen gibt, ist `close-quote` leer. (Das Mischen eines `<string>` mit einem aufgezählten Schlüsselwort zum Erstellen eines Paars wird nicht unterstützt.) Für die verschachtelten Zitate setzen wir `auto`. Diese verschachtelten Zitate werden durch die Anführungszeichen eingerahmt, die in der jeweiligen Sprache üblicherweise für verschachtelte Zitate verwendet werden.

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

- Modul [CSS-generierte Inhalte](/de/docs/Web/CSS/Guides/Generated_content)
- {{ Cssxref("contain") }}
- {{ Cssxref("content") }}
