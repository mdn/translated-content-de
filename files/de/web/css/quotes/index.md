---
title: quotes
slug: Web/CSS/quotes
l10n:
  sourceCommit: c749deb4ccb647d792deee4807d4852104bedd9d
---

{{CSSRef}}

Die [CSS](/de/docs/Web/CSS) **`quotes`**-Eigenschaft legt fest, wie der Browser Anführungszeichen darstellen soll, die automatisch dem HTML-{{HTMLElement("q")}}-Element hinzugefügt werden oder die mit den Werten `open-quotes` oder `close-quotes` (oder weggelassen mit `no-open-quote` und `no-close-quote`) der CSS-[`content`](/de/docs/Web/CSS/content)-Eigenschaft hinzugefügt werden.

{{EmbedInteractiveExample("pages/css/quotes.html")}}

Browser fügen Anführungszeichen am Anfang und Ende von `<q>`-Elementen sowie für die Werte `open-quote` und `close-quote` der `content`-Eigenschaft ein. Jedes öffnende oder schließende Anführungszeichen wird durch eine der Zeichenfolgen aus dem Wert von `quotes` ersetzt, basierend auf der Verschachtelungstiefe, oder, wenn `quotes` ausdrücklich auf `auto` gesetzt oder anderweitig auf `auto` aufgelöst wird, sind die Anführungszeichen sprachabhängig.

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
  - : Die `open-quote` und `close-quote` Werte der {{cssxref("content")}}-Eigenschaft erzeugen keine Anführungszeichen, als ob `no-open-quote` und `no-close-quote` gesetzt wären.
- `auto`
  - : Anführungszeichen, die typografisch für die geerbte Sprache geeignet sind (d.h. über das [`lang`](/de/docs/Web/HTML/Global_attributes/lang)-Attribut, das am Eltern- oder anderem Vorfahren-Element gesetzt ist).
- `[{{cssxref("&lt;string&gt;")}} <string>]+`

  - : Definiert ein oder mehrere Paare von Anführungszeichenwerten für öffnende und schließende Zitate. Im ersten Paar jedes Zitatpaares werden die Werte für das `open-quote` und im zweiten des Paares für das `close-quote` verwendet.

    Das erste Paar repräsentiert das äußere Zitatniveau. Das zweite Paar, falls vorhanden, repräsentiert das erste verschachtelte Niveau. Das nächste Paar wird für doppelt verschachtelte Ebenen verwendet und so weiter. Wenn die Tiefe der Zitatverschachtelung größer ist als die Anzahl der Paare, wird das letzte Paar im `quotes`-Wert wiederholt.

    Welches Paar von Anführungszeichen verwendet wird, hängt von der Tiefe oder Verschachtelungsebene der Zitate ab: die Anzahl der Vorkommen von `<q>`-Zitaten oder `open-quote` (oder `no-open-quote`) in allen generierten Texten vor dem aktuellen Vorkommen, minus der Anzahl der Vorkommen von schließenden Zitaten, entweder als `</q>`, `close-quote` oder `no-close-quote`. Wenn die Tiefe 0 ist, wird das erste Paar verwendet, wenn die Tiefe 1 ist, wird das zweite Paar verwendet usw.

> [!NOTE]
> Der CSS `content` Eigenschaftswert `open-quote` erhöht und `no-close-quote` verringert die Zitatstufe, aber fügt keine Anführungszeichen ein.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Standardzitate und Überschreibungen

Dieses Beispiel vergleicht die Standardzitate, die durch das semantische HTML-Element `<q>` bereitgestellt werden, mit denen, die wir mit der CSS-Eigenschaft `quotes` definieren.

Der Standardwert von `quotes` ist [`auto`](#auto). In diesem Beispiel hat das erste Listenelement `quotes: auto` gesetzt, sodass die Standardzitate für die angegebene Sprache erhalten werden; genauso, wie wenn keine `quotes`-Eigenschaft gesetzt wäre. Das zweite Listenelement definiert, welche Anführungszeichen für Zitate und verschachtelte Zitate verwendet werden sollen; diese Anführungszeichen werden für Nachkommen eines Elements mit der Klasse `specialQuotes` verwendet, unabhängig von der Sprache (wie alle `lang`-Attributwerte, die gesetzt sind).

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

Standardmäßig stellt der Browser sprachspezifische Anführungszeichen bereit, wenn das `<q>`-Element verwendet wird. Wenn die `quotes`-Eigenschaft definiert ist, überschreiben die angegebenen Werte die Browserstandards. Beachten Sie, dass die Eigenschaft `quotes` vererbt wird. Die Eigenschaft `quotes` wird auf das `<li>` mit der Klasse `specialQuotes` gesetzt, aber die Anführungszeichen werden auf die `<q>`-Elemente angewendet.

Beachten Sie, dass jedes `open-quote` und `close-quote` durch eine der Zeichenfolgen aus dem Wert von `quotes` ersetzt wird, basierend auf der Verschachtelungstiefe.

### Automatische Zitate

Der Standardwert von `quotes` ist `auto`. Dieses Beispiel funktioniert, ohne dass es explizit gesetzt wird.

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

Beachten Sie, dass das [`lang`](/de/docs/Web/HTML/Global_attributes/lang)-Attribut auf einen Vorfahren des `<q>` gesetzt wurde, nicht auf das `<q>` selbst. Wenn ein Zitat in einer anderen Sprache als dem umgebenden Text steht, ist es üblich, den Text mit den Anführungszeichen der Sprache des umgebenden Textes zu umgeben, nicht der Sprache des Zitats selbst.

### Mit generiertem Inhalt

In diesem Beispiel fügen wir statt des `<q>`-Elements Anführungszeichen zu den {{cssxref("::before")}}- und {{cssxref("::after")}}-Pseudoelementen vor und nach dem Inhalt jedes Elements mit einem bestimmten Klassennamen hinzu.

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

### Text als Zitate und leere Zitate

Dieses Beispiel zeigt die Verwendung von etwas anderem als Anführungszeichen als `<string>`-Werte. Das `open-quote` zeigt den Sprecher an und, da kein öffnendes Anführungszeichen vorhanden ist, ist das `close-quote` leer. (Das Mischen einer `<string>` mit einem aufgezählten Schlüsselwort zur Erstellung eines Paares wird nicht unterstützt). Wir setzen `auto` für die verschachtelten Zitate. Diese verschachtelten Zitate werden von dem umgeben, was die Sprache als normal für verschachtelte Zitate vorschreibt.

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
