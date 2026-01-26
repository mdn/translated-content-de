---
title: quotes
slug: Web/CSS/Reference/Properties/quotes
l10n:
  sourceCommit: 1dbba9f7a2c2e35c6e01e8a63159e2aac64b601b
---

Die [CSS](/de/docs/Web/CSS) **`quotes`**-Eigenschaft legt fest, wie der Browser die Anführungszeichen rendert, die automatisch dem HTML-{{HTMLElement("q")}}-Element hinzugefügt werden oder die durch die Werte `open-quotes` oder `close-quotes` (oder weggelassen durch `no-open-quote` und `no-close-quote`) der CSS-{{cssxref("content")}}-Eigenschaft hinzugefügt werden.

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

Browser fügen Anführungszeichen am Anfang und Ende von `<q>`-Elementen und für die `open-quote`- und `close-quote`-Werte der `content`-Eigenschaft hinzu. Jedes öffnende oder schließende Anführungszeichen wird durch einen der Strings aus dem `quotes`-Wert ersetzt, basierend auf der Verschachtelungsebene. Oder, wenn `quotes` explizit auf `auto` gesetzt ist oder sich darauf auflöst, sind die Anführungszeichen sprachabhängig.

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
  - : Typografisch angemessene Anführungszeichen für die vererbte Sprache (z. B. über das [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang)-Attribut, das am Elternteil oder einem anderen Vorfahren gesetzt wurde).
- {{cssxref("&lt;string&gt;")}}
  - : Definiert ein oder mehrere Paare von Anführungszeichenwerten für öffnende und schließende Anführungszeichen. In jedem Paar werden die ersten Anführungszeichen als Werte für `open-quote` und die zweiten des Paares als `close-quote` verwendet.

    Das erste Paar repräsentiert die äußere Ebene des Zitats. Das zweite Paar, falls vorhanden, repräsentiert die erste verschachtelte Ebene. Das nächste Paar wird für doppelt verschachtelte Ebenen verwendet und so weiter. Wenn die Verschachtelungstiefe von Anführungszeichen größer ist als die Anzahl der Paare, wird das letzte Paar im `quotes`-Wert wiederholt.

    Welches Paar von Anführungszeichen verwendet wird, hängt von der Tiefe oder der Verschachtelungsebene der Anführungszeichen ab: die Anzahl der Vorkommen von `<q>`-Anführungszeichen oder `open-quote` (oder `no-open-quote`) in allen generierten Texten vor dem aktuellen Auftreten, minus der Anzahl der Vorkommen von schließenden Anführungszeichen, entweder als `</q>`, `close-quote` oder `no-close-quote`. Wenn die Tiefe 0 ist, wird das erste Paar verwendet, wenn die Tiefe 1 ist, wird das zweite Paar verwendet usw.

> [!NOTE]
> Der CSS-`content`-Eigenschaftswert `open-quote` erhöht und `no-close-quote` verringert die Zitierungsebene, fügt aber keine Anführungszeichen ein.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Standardeinstellungen für Anführungszeichen und Überschreibungen

Dieses Beispiel vergleicht die Standardanführungszeichen, die durch das semantische HTML-`<q>`-Element bereitgestellt werden, mit denen, die wir mit der CSS-`quotes`-Eigenschaft definieren.

Der Standardwert von `quotes` ist [`auto`](#auto). In diesem Beispiel hat das erste Listenelement `quotes: auto` gesetzt, sodass es die Standardanführungszeichen für die angegebene Sprache erhält; genauso, als ob keine `quotes`-Eigenschaft gesetzt wäre. Das zweite Listenelement definiert, welche Anführungszeichen für Zitate und verschachtelte Zitate verwendet werden sollen; diese Anführungszeichen werden für Nachfahren eines Elements mit der Klasse `specialQuotes` verwendet, unabhängig von der Sprache (wie alle über das [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang)-Attribut gesetzte Werte).

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

Standardmäßig liefern Browser sprachspezifische Anführungszeichen, wenn das `<q>`-Element verwendet wird. Wenn die `quotes`-Eigenschaft definiert ist, überschreiben die bereitgestellten Werte die Standardeinstellungen des Browsers. Beachten Sie, dass die `quotes`-Eigenschaft vererbt wird. Die `quotes`-Eigenschaft wird auf das `<li>` mit der Klasse `specialQuotes` gesetzt, aber die Anführungszeichen werden auf die `<q>`-Elemente angewendet.

Beachten Sie, dass jedes open-quote und close-quote durch einen der Strings aus dem Wert der Anführungszeichen ersetzt wird, basierend auf der Verschachtelungstiefe.

### Auto-Anführungszeichen

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

Beachten Sie, dass das [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang)-Attribut auf einem Vorfahren des `<q>`, nicht auf dem `<q>` selbst platziert wurde. Wenn ein Zitat in einer anderen Sprache als dem umgebenden Text ist, ist es üblich, den Text mit den Anführungszeichen der Sprache des umgebenden Textes zu zitieren, nicht der Sprache des Zitats selbst.

### Mit generierten Inhalten

In diesem Beispiel fügen wir anstelle des `<q>`-Elements Anführungszeichen den {{cssxref("::before")}}- und {{cssxref("::after")}}-Pseudo-Elementen vor und nach dem Inhalt jedes Elements mit einem bestimmten Klassennamen hinzu.

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

Dieses Beispiel demonstriert die Verwendung von etwas anderem als Anführungszeichen als `<string>`-Werte. Das open-quote gibt den Sprecher an und, da es kein öffnendes Anführungszeichen gibt, ist das close-quote leer. (Die Mischung eines `<string>` mit einem aufgezählten Schlüsselwort zur Erstellung eines Paares wird nicht unterstützt). Wir setzen `auto` für die verschachtelten Anführungszeichen. Diese verschachtelten Anführungszeichen werden von dem, was die Sprache für verschachtelte Anführungszeichen als normal erachtet, eingerahmt.

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

- [CSS generierte Inhalte](/de/docs/Web/CSS/Guides/Generated_content) Modul
- {{ Cssxref("contain") }}
- {{ Cssxref("content") }}
