---
title: Anführungszeichen
slug: Web/CSS/quotes
l10n:
  sourceCommit: fc1cc5684c98d19816d5cc81702d70f2a0debbad
---

{{CSSRef}}

Die [CSS](/de/docs/Web/CSS) **`quotes`**-Eigenschaft legt fest, wie der Browser Anführungszeichen darstellen soll, die automatisch zum HTML-{{HTMLElement("q")}}-Element hinzugefügt oder unter Verwendung der `open-quotes`- oder `close-quotes`- (oder weggelassen mit den Werten `no-open-quote` und `no-close-quote`) Werte der CSS-[`content`](/de/docs/Web/CSS/content)-Eigenschaft hinzugefügt werden.

{{EmbedInteractiveExample("pages/css/quotes.html")}}

Browser fügen Anführungszeichen beim Öffnen und Schließen von `<q>`-Elementen und für die `open-quote`- und `close-quote`-Werte der `content`-Eigenschaft hinzu. Jedes öffnende oder schließende Anführungszeichen wird durch einen der Strings aus dem Wert von `quotes` ersetzt, basierend auf der Verschachtelungstiefe. Wenn `quotes` explizit auf `auto` gesetzt oder anderweitig aufgelöst wird, sind die verwendeten Anführungszeichen sprachabhängig.

## Syntax

```css
/* Schlüsselwortwert */
quotes: none;
quotes: auto;

/* <string> Werte */
quotes: "«" "»"; /* Setzen Sie open-quote und close-quote auf französische Anführungszeichen */
quotes: "«" "»" "‹" "›"; /* Setzen Sie zwei Ebenen von Anführungszeichen */

/* Globale Werte */
quotes: inherit;
quotes: initial;
quotes: revert;
quotes: revert-layer;
quotes: unset;
```

### Werte

- `none`
  - : Die `open-quote` und `close-quote` Werte der {{cssxref("content")}}-Eigenschaft erzeugen keine Anführungszeichen, als ob `no-open-quote` und `no-close-quote` gesetzt wären.
- `auto`
  - : Anführungszeichen, die typografisch angemessen für die geerbte Sprache sind (d.h. über das [`lang`](/de/docs/Web/HTML/Global_attributes#lang)-Attribut, das auf dem übergeordneten Element oder einem anderen Vorfahren gesetzt ist).
- `[{{cssxref("&lt;string&gt;")}} <string>]+`

  - : Definiert ein oder mehrere Paare von Anführungszeichenwerten für öffnende und schließende Anführungszeichen. In jedem Paar wird das erste als Wert für das `open-quote` und das zweite als `close-quote` verwendet.

    Das erste Paar repräsentiert die äußere Ebene des Zitats. Das zweite Paar, falls vorhanden, repräsentiert die erste verschachtelte Ebene. Das nächste Paar wird für doppelt verschachtelte Ebenen verwendet, und so weiter. Wenn die Verschachtelungstiefe von Zitaten größer ist als die Anzahl der Paare, wird das letzte Paar im `quotes`-Wert wiederholt.

    Welches Paar von Anführungszeichen verwendet wird, hängt von der Tiefe oder dem Verschachtelungsgrad der Anführungszeichen ab: die Anzahl der Vorkommen von `<q>`-Anführungszeichen oder `open-quote` (oder `no-open-quote`) in allen generierten Texten vor dem aktuellen Vorkommen, minus der Anzahl der Vorkommen von schließenden Anführungszeichen, entweder als `</q>`, `close-quote` oder `no-close-quote`. Wenn die Tiefe 0 ist, wird das erste Paar verwendet, wenn die Tiefe 1 ist, das zweite Paar, usw.

> [!NOTE]
> Der CSS `content`-Eigenschaftswert `open-quote` erhöht und `no-close-quote` verringert die Zitierungstiefe, fügt jedoch keine Anführungszeichen ein.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Standard-Anführungszeichen und Überschreibungen

Dieses Beispiel vergleicht die Standard-Anführungszeichen, die durch das semantische HTML-`<q>`-Element bereitgestellt werden, mit denen, die wir mit der CSS-`quotes`-Eigenschaft definieren.

Der Standardwert von `quotes` ist [`auto`](#auto). In diesem Beispiel ist für das erste Listenelement `quotes: auto` gesetzt, das heißt, es erhält die Standard-Anführungszeichen für die angegebene Sprache; genau so, als ob keine `quotes`-Eigenschaft gesetzt wäre. Das zweite Listenelement definiert, welche Anführungszeichen für Zitate und verschachtelte Zitate verwendet werden sollen; diese Anführungszeichen werden für Nachkommen eines Elements mit der Klasse `specialQuotes` verwendet, unabhängig von der Sprache (wie bei allen [`lang`](/de/docs/Web/HTML/Global_attributes/lang)-Attributwerten, die gesetzt sind).

#### HTML

```html
<ul>
  <li>
    Standard-Anführungszeichen:
    <p lang="ru">
      <q
        >Митч Макконнелл - это человек, который знает о России и ее влиянии
        меньше, чем даже Дональд Трамп, и <q>я ничего не знаю</q>, сказал
        Трамп</q
      >, - писал Раджу.
    </p>
  </li>
  <li class="specialQuotes">
    Definiert durch <code>quotes</code>-Eigenschaft:
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

Standardmäßig stellen Browser sprachspezifische Anführungszeichen bereit, wenn das `<q>`-Element verwendet wird. Wenn die `quotes`-Eigenschaft definiert ist, überschreiben die angegebenen Werte die Standardeinstellungen des Browsers. Beachten Sie, dass die `quotes`-Eigenschaft vererbt wird. Die `quotes`-Eigenschaft ist auf dem `<li>` mit der Klasse `specialQuotes` gesetzt, aber die Anführungszeichen werden auf die `<q>`-Elemente angewendet.

Beachten Sie, dass jedes open-quote und close-quote durch einen der Strings aus dem Wert von quotes ersetzt wird, basierend auf der Verschachtelungstiefe.

### Automatische Anführungszeichen

Der Standardwert von `quotes` ist `auto`. Dieses Beispiel funktioniert, ohne dass es explizit gesetzt werden muss.

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

Beachten Sie, dass das [`lang`](/de/docs/Web/HTML/Global_attributes#lang) -Attribut auf einen Vorfahren des `<q>` gesetzt wurde, nicht auf das `<q>` selbst. Wenn ein Zitat in einer anderen Sprache als dem umgebenden Text verfasst ist, ist es üblich, den Text mit den Anführungszeichen der Sprache des umgebenden Textes zu kennzeichnen, nicht der Sprache des Zitats selbst.

### Mit generiertem Inhalt

In diesem Beispiel fügen wir anstelle des `<q>`-Elements Anführungszeichen zu den {{cssxref("::before")}}- und {{cssxref("::after")}} -Pseudo-Elementen vor und nach dem Inhalt jedes Elements mit einem bestimmten Klassennamen hinzu.

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

Dieses Beispiel zeigt, wie etwas anderes als Anführungszeichen als `<string>`-Werte verwendet werden kann. Das open-quote zeigt den Sprecher an, und da es kein öffnendes Anführungszeichen gibt, ist das close-quote leer. (Das Mischen eines `<string>` mit einem aufgezählten Schlüsselwort, um ein Paar zu erstellen, wird nicht unterstützt). Wir setzen `auto` für die verschachtelten Anführungszeichen. Diese verschachtelten Anführungszeichen werden durch das, was die Sprache als normal für verschachtelte Anführungszeichen diktieren, eingerahmt.

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
