---
title: "`quotes` CSS property"
short-title: quotes
slug: Web/CSS/Reference/Properties/quotes
l10n:
  sourceCommit: 880c2c4b113c6fe127ca3ae3603a56ef7a2eb9a6
---

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`quotes`** legt fest, wie der Browser Anführungszeichen darstellen soll, die automatisch zum HTML-Element {{HTMLElement("q")}} hinzugefügt oder mithilfe der Werte `open-quotes` oder `close-quotes` (bzw. mit `no-open-quote` und `no-close-quote` weggelassen) der CSS-Eigenschaft {{cssxref("content")}} hinzugefügt werden.

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
  - : Die Werte `open-quote` und `close-quote` der Eigenschaft {{cssxref("content")}} erzeugen keine Anführungszeichen, als wären jeweils `no-open-quote` und `no-close-quote` gesetzt.
- `auto`
  - : Anführungszeichen, die typografisch für die geerbte Sprache angemessen sind (d.h. über das Attribut [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang), das für das übergeordnete Element oder einen anderen Vorfahren gesetzt ist).
- {{cssxref("&lt;string&gt;")}}
  - : Definiert ein oder mehrere Paare von Anführungszeichenwerten für öffnende und schließende Anführungszeichen. In jedem Paar wird das erste Anführungszeichen als Wert für `open-quote` und das zweite als Wert für `close-quote` verwendet.

    Das erste Paar stellt die äußerste Ebene des Zitats dar. Das zweite Paar, falls vorhanden, stellt die erste verschachtelte Ebene dar. Das nächste Paar wird für doppelt verschachtelte Ebenen verwendet usw. Ist die Tiefe der Zitatverschachtelung größer als die Anzahl der Paare, wird das letzte Paar im Wert von `quotes` wiederholt.

    Welches Anführungszeichenpaar verwendet wird, hängt von der Tiefe bzw. Verschachtelungsebene der Zitate ab: der Anzahl der Vorkommen von `<q>`-Zitaten oder `open-quote` (bzw. `no-open-quote`) in sämtlichem generierten Text vor dem aktuellen Vorkommen, abzüglich der Anzahl der Vorkommen schließender Anführungszeichen, entweder als `</q>`, `close-quote` oder `no-close-quote`. Bei einer Tiefe von 0 wird das erste Paar verwendet, bei einer Tiefe von 1 das zweite Paar usw.

> [!NOTE]
> Die Werte `no-open-quote` und `no-close-quote` der CSS-Eigenschaft `content` erhöhen bzw. verringern die Zitatebene, fügen jedoch keine Anführungszeichen ein.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Standardanführungszeichen und Überschreibungen

Dieses Beispiel vergleicht die standardmäßigen Anführungszeichen des semantischen HTML-Elements `<q>` mit denen, die wir mithilfe der CSS-Eigenschaft `quotes` definieren.

Der Standardwert von `quotes` ist [`auto`](#auto). Im diesem Beispiel ist für das erste Listenelement `quotes: auto` gesetzt, sodass es die Standardanführungszeichen für die angegebene Sprache erhält; dies entspricht dem Fall, dass keine Eigenschaft `quotes` gesetzt wäre. Das zweite Listenelement definiert, welche Anführungszeichen für Zitate und verschachtelte Zitate verwendet werden sollen; diese Anführungszeichen werden unabhängig von der Sprache für Nachfahren eines Elements mit der Klasse `specialQuotes` verwendet (ebenso wie alle gesetzten Werte des Attributs [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang)).

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

Standardmäßig stellen Browser sprachspezifische Anführungszeichen bereit, wenn das Element `<q>` verwendet wird. Wenn die Eigenschaft `quotes` definiert ist, überschreiben die bereitgestellten Werte die Browser-Standardwerte. Beachten Sie, dass die Eigenschaft `quotes` vererbt wird. Die Eigenschaft `quotes` wird für das `<li>` mit der Klasse `specialQuotes` gesetzt, die Anführungszeichen werden jedoch auf die `<q>`-Elemente angewendet.

Beachten Sie, dass jedes `open-quote` und `close-quote` abhängig von der Verschachtelungstiefe durch eine der Zeichenketten aus dem Wert von `quotes` ersetzt wird.

### Automatische Anführungszeichen

Der Standardwert von `quotes` ist `auto`. Dieses Beispiel funktioniert, ohne dass dieser Wert explizit gesetzt wird.

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

Beachten Sie, dass das Attribut [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang) auf einem Vorfahren von `<q>` und nicht auf `<q>` selbst platziert wurde. Wenn ein Zitat in einer anderen Sprache als der umgebende Text verfasst ist, ist es üblich, den Text mit den Anführungszeichen der Sprache des umgebenden Textes zu zitieren, nicht mit denen der Sprache des Zitats selbst.

### Mit generiertem Inhalt

In diesem Beispiel fügen wir Anführungszeichen nicht mithilfe des Elements `<q>` hinzu, sondern den Pseudoelementen {{cssxref("::before")}} und {{cssxref("::after")}} vor bzw. nach dem Inhalt jedes Elements mit einem bestimmten Klassennamen.

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

Dieses Beispiel demonstriert die Verwendung anderer Werte als Anführungszeichen für die `<string>`-Werte. `open-quote` gibt den Sprecher an und da kein öffnendes Anführungszeichen vorhanden ist, ist `close-quote` leer. (Das Mischen eines `<string>` mit einem aufgezählten Schlüsselwort zur Erstellung eines Paars wird nicht unterstützt.) Für die verschachtelten Anführungszeichen setzen wir `auto`. Diese verschachtelten Anführungszeichen werden von dem eingerahmt, was die jeweilige Sprache üblicherweise für verschachtelte Anführungszeichen vorgibt.

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

- Modul [CSS-generated content](/de/docs/Web/CSS/Guides/Generated_content)
- {{ Cssxref("contain") }}
- {{ Cssxref("content") }}
