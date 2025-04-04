---
title: quotes
slug: Web/CSS/quotes
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{CSSRef}}

Die [CSS](/de/docs/Web/CSS) **`quotes`**-Eigenschaft legt fest, wie der Browser Anführungszeichen rendern soll, die automatisch zum HTML-{{HTMLElement("q")}}-Element hinzugefügt oder mit den Werten `open-quotes` oder `close-quotes` (oder ausgelassen mit den Werten `no-open-quote` und `no-close-quote`) der CSS-[`content`](/de/docs/Web/CSS/content)-Eigenschaft hinzugefügt werden.

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

Browser fügen Anführungszeichen beim Öffnen und Schließen von `<q>`-Elementen und für die Werte `open-quote` und `close-quote` der `content`-Eigenschaft hinzu. Jedes öffnende oder schließende Anführungszeichen wird durch eine der Zeichenfolgen aus dem Wert von `quotes` ersetzt, basierend auf der Verschachtelungstiefe, oder, wenn `quotes` explizit auf `auto` gesetzt ist oder darauf zurückfällt, sind die verwendeten Anführungszeichen sprachabhängig.

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
  - : Die `open-quote`- und `close-quote`-Werte der {{cssxref("content")}}-Eigenschaft erzeugen keine Anführungszeichen, als ob `no-open-quote` und `no-close-quote` gesetzt wären.
- `auto`
  - : Typographisch passende Anführungszeichen für die geerbte Sprache (d.h. über das [`lang`](/de/docs/Web/HTML/Global_attributes/lang)-Attribut am übergeordneten oder anderen Vorfahren festgelegt).
- `[{{cssxref("&lt;string&gt;")}} <string>]+`

  - : Definiert ein oder mehrere Paare von Anführungszeichenwerten für öffnende und schließende Anführungszeichen. In jedem Paar wird das erste als `open-quote` und das zweite als `close-quote` verwendet.

    Das erste Paar repräsentiert die äußere Ebene des Zitats. Das zweite Paar, sofern vorhanden, repräsentiert die erste verschachtelte Ebene. Das nächste Paar wird für doppelt verschachtelte Ebenen verwendet und so weiter. Wenn die Tiefe der Zitatverschachtelung größer ist als die Anzahl der Paare, wird das letzte Paar im `quotes`-Wert wiederholt.

    Welches Anführungszeichenpaar verwendet wird, hängt von der Tiefe oder Verschachtelungsebene der Anführungszeichen ab: der Anzahl der Vorkommen von `<q>`-Anführungszeichen oder `open-quote` (oder `no-open-quote`) in allen generierten Texten vor dem aktuellen Vorkommen, minus der Anzahl der Vorkommen schließender Anführungszeichen, entweder als `</q>`, `close-quote` oder `no-close-quote`. Wenn die Tiefe 0 ist, wird das erste Paar verwendet, wenn die Tiefe 1 ist, wird das zweite Paar verwendet usw.

> [!NOTE]
> Der CSS-`content`-Eigenschaftswert `open-quote` erhöht und `no-close-quote` verringert die Zitatebene, fügt jedoch keine Anführungszeichen ein.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Standard-Anführungszeichen und Überschreibungen

Dieses Beispiel vergleicht die Standard-Anführungszeichen, die vom semantischen HTML-`<q>`-Element bereitgestellt werden, mit denen, die wir mithilfe der CSS-`quotes`-Eigenschaft definieren.

Der Standardwert von `quotes` ist [`auto`](#auto). In diesem Beispiel hat das erste Listenelement `quotes: auto` gesetzt und erhält somit die Standard-Anführungszeichen für die angegebene Sprache; dasselbe, als wenn keine `quotes`-Eigenschaft gesetzt wäre. Das zweite Listenelement definiert, welche Anführungszeichen für Zitate und verschachtelte Zitate verwendet werden sollen; diese Anführungszeichen werden für Nachkommen eines Elements mit der Klasse `specialQuotes` unabhängig von der Sprache verwendet (wie alle [`lang`](/de/docs/Web/HTML/Global_attributes/lang)-Attributwerte gesetzt).

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

Standardmäßig stellt der Browser sprachspezifische Anführungszeichen bereit, wenn das `<q>`-Element verwendet wird. Wenn die `quotes`-Eigenschaft definiert ist, überschreiben die angegebenen Werte die Standardwerte des Browsers. Beachten Sie, dass die `quotes`-Eigenschaft vererbt wird. Die `quotes`-Eigenschaft ist am `<li>` mit der Klasse `specialQuotes` gesetzt, aber die Anführungszeichen werden auf die `<q>`-Elemente angewendet.

Beachten Sie, dass jedes open-quote und close-quote durch eine der Zeichenfolgen aus dem Wert von quotes ersetzt wird, basierend auf der Verschachtelungstiefe.

### Automatische Anführungszeichen

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

Beachten Sie, dass das [`lang`](/de/docs/Web/HTML/Global_attributes/lang)-Attribut auf einen Vorfahren des `<q>` gesetzt wurde, nicht auf das `<q>` selbst. Wenn ein Zitat in einer anderen Sprache als der umgebenden Sprache ist, ist es üblich, den Text mit den Anführungszeichen der Sprache des umgebenden Textes zu umschließen, nicht mit der Sprache des Zitats selbst.

### Mit generiertem Inhalt

In diesem Beispiel verwenden wir anstelle des `<q>`-Elements Anführungszeichen, die zu den {{cssxref("::before")}}- und {{cssxref("::after")}}-Pseudo-Elementen vor und nach dem Inhalt jedes Elements mit einem bestimmten Klassennamen hinzugefügt werden.

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

Dieses Beispiel demonstriert die Verwendung von etwas anderem als Anführungszeichen als `<string>`-Werte. Das open-quote zeigt den Sprecher an, und da es kein öffnendes Anführungszeichen gibt, ist das close-quote leer. (Die Kombination eines `<string>` mit einem enumerierten Schlüsselwort, um ein Paar zu erstellen, wird nicht unterstützt). Wir setzen `auto` für die verschachtelten Anführungszeichen. Diese verschachtelten Anführungszeichen werden von dem umschlossen, was die Sprache als normal für verschachtelte Anführungszeichen vorschreibt.

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

- [CSS Generated Content](/de/docs/Web/CSS/CSS_generated_content)-Modul
- {{ CSSXref("contain") }}
- {{ CSSXref("content") }}
