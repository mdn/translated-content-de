---
title: quotes
slug: Web/CSS/quotes
l10n:
  sourceCommit: fc1cc5684c98d19816d5cc81702d70f2a0debbad
---

{{CSSRef}}

Die [CSS](/de/docs/Web/CSS) **`quotes`** Eigenschaft bestimmt, wie der Browser Anführungszeichen rendern soll, die automatisch zum HTML-Element {{HTMLElement("q")}} hinzugefügt oder mit den Werten `open-quotes` oder `close-quotes` (oder weggelassen mit `no-open-quote` und `no-close-quote`) der CSS-Eigenschaft [`content`](/de/docs/Web/CSS/content) hinzugefügt werden.

{{EmbedInteractiveExample("pages/css/quotes.html")}}

Browser fügen Anführungszeichen zu den öffnenden und schließenden `<q>`-Elementen und für die Werte `open-quote` und `close-quote` der `content`-Eigenschaft hinzu. Jedes öffnende oder schließende Anführungszeichen wird durch einen der Strings aus dem Wert von `quotes` basierend auf der Verschachtelungstiefe ersetzt, oder wenn `quotes` explizit auf `auto` gesetzt ist oder darauf auflöst, sind die verwendeten Anführungszeichen sprachabhängig.

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
  - : Die Werte `open-quote` und `close-quote` der {{cssxref("content")}} Eigenschaft erzeugen keine Anführungszeichen, als ob `no-open-quote` und `no-close-quote` gesetzt wären.
- `auto`
  - : Anführungszeichen, die typographisch für die geerbte Sprache geeignet sind (z. B. über das [`lang`](/de/docs/Web/HTML/Global_attributes#lang) Attribut, das auf dem Eltern- oder einem anderen Vorfahren gesetzt ist).
- `[{{cssxref("&lt;string&gt;")}} <string>]+`

  - : Definiert ein oder mehrere Paare von Anführungszeichenwerten für öffnende und schließende Anführungszeichen. In jedem Paar werden die ersten Anführungszeichen als Werte für `open-quote` und die zweiten Anführungszeichen als `close-quote` verwendet.

    Das erste Paar repräsentiert die äußere Ebene des Zitats. Das zweite Paar, falls vorhanden, repräsentiert die erste verschachtelte Ebene. Das nächste Paar wird für doppelt verschachtelte Ebenen verwendet usw. Wenn die Tiefe der Anführungszeichenverschachtelung größer ist als die Anzahl der Paare, wird das letzte Paar im `quotes` Wert wiederholt.

    Welches Paar von Anführungszeichen verwendet wird, hängt von der Tiefe oder Verschachtelungsebene der Anführungszeichen ab: Die Anzahl der Vorkommen von `<q>`-Anführungszeichen oder `open-quote` (oder `no-open-quote`) in allen generierten Texten vor dem aktuellen Vorkommen, minus der Anzahl der Vorkommen von schließenden Anführungszeichen, entweder als `</q>`, `close-quote` oder `no-close-quote`. Wenn die Tiefe 0 ist, wird das erste Paar verwendet, wenn die Tiefe 1 ist, wird das zweite Paar verwendet usw.

> [!NOTE]
> Der CSS `content` Eigenschaftswert `open-quote` erhöht und `no-close-quote` verringert die Zitatebene, fügt jedoch keine Anführungszeichen ein.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Standard-Anführungszeichen und Überschreibungen

Dieses Beispiel vergleicht die Standard-Anführungszeichen, die durch das semantische HTML `<q>`-Element bereitgestellt werden, mit denjenigen, die wir mit der CSS `quotes`-Eigenschaft definieren.

Der Standardwert von `quotes` ist [`auto`](#auto). In diesem Beispiel hat das erste Listenelement `quotes: auto` gesetzt und erhält daher die Standard-Anführungszeichen für die angegebene Sprache; das gleiche wie wenn keine `quotes`-Eigenschaft gesetzt wäre. Das zweite Listenelement definiert, welche Anführungszeichen für Zitate und verschachtelte Zitate verwendet werden sollen; diese Anführungszeichen werden für Nachkommen eines Elements mit der `specialQuotes` Klasse unabhängig von der Sprache verwendet (wie alle [`lang`](/de/docs/Web/HTML/Global_attributes/lang) Attributwerte, die gesetzt sind).

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

Standardmäßig bieten Browser sprachspezifische Anführungszeichen, wenn das `<q>`-Element verwendet wird. Wenn die `quotes`-Eigenschaft definiert ist, überschreiben die bereitgestellten Werte die Standardeinstellungen des Browsers. Beachten Sie, dass die `quotes`-Eigenschaft vererbt wird. Die `quotes`-Eigenschaft wird auf dem `<li>` mit der Klasse `specialQuotes` gesetzt, aber die Anführungszeichen werden auf die `<q>`-Elemente angewendet.

Beachten Sie, dass jedes open-quote und close-quote durch einen der Strings aus dem Wert von quotes ersetzt wird, basierend auf der Verschachtelungstiefe.

### Auto-Anführungszeichen

Der Standardwert von `quotes` ist `auto`. Dieses Beispiel funktioniert, ohne dass es explizit gesetzt ist.

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

Beachten Sie, dass das [`lang`](/de/docs/Web/HTML/Global_attributes#lang) Attribut auf einen Vorfahren des `<q>` gesetzt wurde, nicht auf das `<q>` selbst. Wenn ein Zitat in einer anderen Sprache als der umgebenden Sprache steht, ist es üblich, den Text mit den Anführungszeichen der Umgebungssprache zu zitieren, nicht mit den Anführungszeichen der Zitatsprache.

### Mit generiertem Inhalt

In diesem Beispiel verwenden wir anstelle des `<q>`-Elements Anführungszeichen, die zu den {{cssxref("::before")}} und {{cssxref("::after")}} Pseudoelementen vor und nach dem Inhalt jedes Elements mit einem bestimmten Klassennamen hinzugefügt werden.

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

Dieses Beispiel demonstriert die Verwendung von etwas anderem als Anführungszeichen als `<string>`-Werte. Das open-quote gibt den Sprecher an und da es kein öffnendes Anführungszeichen gibt, ist das close-quote leer. (Das Mischen eines `<string>` mit einem aufgezählten Schlüsselwort zur Erstellung eines Paares wird nicht unterstützt). Wir setzen `auto` für die verschachtelten Zitate. Diese verschachtelten Zitate werden von dem eingeklammert, was die Sprache als normal für verschachtelte Zitate vorgibt.

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

- [CSS erzeugte Inhalte](/de/docs/Web/CSS/CSS_generated_content) Modul
- {{ Cssxref("contain") }}
- {{ Cssxref("content") }}
