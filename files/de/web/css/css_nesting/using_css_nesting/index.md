---
title: Verwenden von CSS-Verschachtelung
short-title: Verwenden von Verschachtelung
slug: Web/CSS/CSS_nesting/Using_CSS_nesting
l10n:
  sourceCommit: c52ed787442db9d65b21f5c2874fa6bfd08a253a
---

Das [CSS-Nesting-Modul](/de/docs/Web/CSS/CSS_nesting) ermöglicht es Ihnen, Ihre Stylesheets so zu schreiben, dass sie leichter lesbar, modularer und wartungsfreundlicher sind. Da Sie nicht ständig Selektoren wiederholen, kann auch die Dateigröße reduziert werden.

CSS-Verschachtelung unterscheidet sich von CSS-Präprozessoren wie [Sass](https://sass-lang.com/), da sie vom Browser geparst wird und nicht von einem CSS-Präprozessor vorkompiliert wird. In CSS-Verschachtelung ist auch die [Spezifität des `&`-Verschachtelungsselektors](/de/docs/Web/CSS/CSS_nesting/Nesting_and_specificity) ähnlich der {{cssxref(':is', ':is()')}}-Funktion; sie wird unter Verwendung der höchsten Spezifität in der zugehörigen Selektorliste berechnet.

Dieser Leitfaden zeigt verschiedene Möglichkeiten zur Anordnung von Verschachtelungen in CSS.

## Kind-Selektoren

Sie können CSS-Verschachtelung verwenden, um Kind-Selektoren eines Elternteils zu erstellen, die wiederum verwendet werden können, um Kind-Elemente spezifischer Eltern anzusprechen. Dies kann mit oder ohne den [`&`-Verschachtelungsselektor](/de/docs/Web/CSS/Reference/Selectors/Nesting_selector) erfolgen.

Es gibt bestimmte Fälle, in denen die Verwendung des `&`-Verschachtelungsselektors erforderlich oder hilfreich sein kann:

- Beim Zusammenführen von Selektoren, wie bei [zusammengesetzten Selektoren](#zusammengesetzte_selektoren) oder [Pseudoklassen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes).
- Für Rückwärtskompatibilität.
- Als visueller Indikator für bessere Lesbarkeit. Mit dem `&`-Verschachtelungsselektor erkennen Sie, dass CSS-Verschachtelung verwendet wird.

```css
/* Without nesting selector */
.parent {
  /* parent styles */
  .child {
    /* child of parent styles */
  }
}

/* With nesting selector */
.parent {
  /* parent styles */
  & .child {
    /* child of parent styles */
  }
}

/* the browser will parse both of these as */
.parent {
  /* parent styles */
}
.parent .child {
  /* child of parent styles */
}
```

### Beispiele

In diesen Beispielen, eines ohne und eines mit dem `&`-Verschachtelungsselektor, wird das `<input>` innerhalb des `<label>` anders gestylt als das `<input>`, das Nachbar eines `<label>` ist.

#### Ohne Verschachtelungsselektor

##### HTML

```html-nolint
<form>
  <label for="name">Name:
    <input type="text" id="name" />
  </label>
  <label for="email">email:</label>
  <input type="text" id="email" />
</form>
```

##### CSS

```css hidden
form,
label {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
```

```css
input {
  /* styles for input not in a label  */
  border: tomato 2px solid;
}
label {
  /* styles for label */
  font-family: system-ui;
  font-size: 1.25rem;

  input {
    /* styles for input in a label  */
    border: blue 2px dashed;
  }
}
```

##### Ergebnis

{{EmbedLiveSample('Without_nesting_selector','100%','120')}}

#### Mit Verschachtelungsselektor

```html-nolint hidden
<form>
  <label for="name">Name:
    <input type="text" id="name" />
  </label>
  <label for="email">email:</label>
  <input type="text" id="email" />
</form>
```

##### CSS

```css hidden
form,
label {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
```

```css
input {
  /* styles for input not in a label  */
  border: tomato 2px solid;
}
label {
  /* styles for label */
  font-family: system-ui;
  font-size: 1.25rem;

  & input {
    /* styles for input in a label  */
    border: blue 2px dashed;
  }
}
```

##### Ergebnis

{{EmbedLiveSample('With_nesting_selector','100%','120')}}

## Kombinatoren

[CSS-Kombinatoren](/de/docs/Learn_web_development/Core/Styling_basics/Combinators) können ebenfalls mit oder ohne den `&`-Verschachtelungsselektor verwendet werden.

### Beispiel

#### Verschachtelung des Geschwister-Kombinators

In diesem Beispiel wird der erste Absatz nach jedem `<h2>` mit dem [Geschwister-Kombinator (`+`)](/de/docs/Web/CSS/Reference/Selectors/Next-sibling_combinator) mithilfe von CSS-Verschachtelung angesprochen.

##### HTML

```html
<h2>Heading</h2>
<p>This is the first paragraph.</p>
<p>This is the second paragraph.</p>
```

##### CSS

```css
h2 {
  color: tomato;
  + p {
    color: white;
    background-color: black;
  }
}
/* this code can also be written with the & nesting selector */
/* 
h2 {
  color: tomato;
  & + p {
    color: white;
    background-color: black;
  }
}
*/
```

##### Ergebnis

{{EmbedLiveSample('Nesting_the_sibling_combinator','100%','135')}}

## Zusammengesetzte Selektoren

Bei der Verwendung von [zusammengesetzten Selektoren](/de/docs/Web/CSS/CSS_selectors/Selector_structure#compound_selector) in verschachteltem CSS **müssen** Sie den `&`-Verschachtelungsselektor verwenden. Dies liegt daran, dass der Browser automatisch Leerzeichen zwischen Selektoren einfügt, die den `&`-Verschachtelungsselektor nicht verwenden.

Um ein Element mit `class="a b"` anzusprechen, wird der `&`-Verschachtelungsselektor benötigt, da sonst das Leerzeichen den zusammengesetzten Selektor unterbricht.

```css
.a {
  /* styles for element with class="a" */
  .b {
    /* styles for element with class="b" which is a descendant of class="a" */
  }
  &.b {
    /* styles for element with class="a b" */
  }
}

/* the browser parses this as */
.a {
  /* styles for element with class="a" */
}
.a .b {
  /* styles for element with class="b" which is a descendant of class="a" */
}
.a.b {
  /* styles for element with class="a b" */
}
```

### Beispiel

#### Verschachtelung und zusammengesetzte Selektoren

In diesem Beispiel wird der `&`-Verschachtelungsselektor verwendet, um zusammengesetzte Selektoren zu erstellen, um Elemente mit mehreren Klassen zu stylen.

##### HTML

```html
<div class="notices">
  <div class="notice">
    <h2 class="notice-heading">Notice</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
  </div>
  <div class="notice warning">
    <h2 class="warning-heading">Warning</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
  </div>
  <div class="notice success">
    <h2 class="success-heading">Success</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
  </div>
</div>
```

##### CSS

Stile für die `.notices`, um eine Spalte unter Verwendung des [Flexbox-Layouts](/de/docs/Web/CSS/CSS_flexible_box_layout) zu erstellen.

```css
.notices {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 90%;
  margin: auto;
}
```

Im folgenden CSS wird Verschachtelung verwendet, um zusammengesetzte Selektoren sowohl mit als auch ohne `&` zu erstellen. Der oberste Selektor definiert die Basisstile für Elemente mit `class="notice"`. Der `&`-Verschachtelungsselektor wird verwendet, um zusammengesetzte Selektoren für Elemente mit entweder `class="notice warning"` oder `class="notice success"` zu erstellen. Zusätzlich kann die Verwendung von Verschachtelung gesehen werden, um zusammengesetzte Selektoren ohne explizite Verwendung von `&` im Selektor `.notice .notice-heading::before` zu erstellen.

```css
.notice {
  width: 90%;
  justify-content: center;
  border-radius: 1rem;
  border: black solid 2px;
  background-color: #ffc107;
  color: black;
  padding: 1rem;
  .notice-heading::before {
    /* equivalent to `.notice .notice-heading::before` */
    content: "ℹ︎ ";
  }
  &.warning {
    /* equivalent to `.notice.warning` */
    background-color: #d81b60;
    border-color: #d81b60;
    color: white;
    .warning-heading::before {
      /* equivalent to `.notice.warning .warning-heading::before` */
      content: "! ";
    }
  }
  &.success {
    /* equivalent to `.notice.success` */
    background-color: #004d40;
    border-color: #004d40;
    color: white;
    .success-heading::before {
      /* equivalent to `.notice.success .success-heading::before` */
      content: "✓ ";
    }
  }
}
```

##### Ergebnis

{{EmbedLiveSample('Nesting_and_compound_selectors','100%', '455')}}

## Angefügter Verschachtelungsselektor

Der `&`-Verschachtelungsselektor kann auch an einen verschachtelten Selektor angehängt werden, was den Kontext umkehrt.

Dies kann nützlich sein, wenn wir Stile für ein Kindelement haben, die sich ändern, wenn ein Elternelement eine andere Klasse erhält:

```html
<div>
  <span class="foo">text</span>
</div>
```

Im Gegensatz zu:

```html
<div class="bar">
  <span class="foo">text</span>
</div>
```

```css
.foo {
  /* .foo styles */
  .bar & {
    /* .bar .foo styles */
  }
}
```

### Beispiel

#### Anfügen des Verschachtelungsselektors

In diesem Beispiel gibt es 3 Karten, von denen eine hervorgehoben ist. Die Karten sind alle genau gleich, außer dass bei der hervorgehobenen Karte die Farbe der Überschrift eine Alternative hat. Indem Sie den `&`-Verschachtelungsselektor anhängen, kann der Stil für `.featured h2` im Stil für `h2` verschachtelt werden.

##### HTML

```html
<div class="wrapper">
  <article class="card">
    <h2>Card 1</h2>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
  </article>
  <article class="card featured">
    <h2>Card 2</h2>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
  </article>
  <article class="card">
    <h2>Card 3</h2>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
  </article>
</div>
```

##### CSS

```css
.wrapper {
  display: flex;
  flex-direction: row;
  gap: 0.25rem;
  font-family: system-ui;
}
```

Im folgenden CSS erstellen wir die Stile für `.card` und `.card h2`. Dann, im `h2`-Stilblock, verschachteln wir die `.featured`-Klasse mit dem angehängten `&`-Verschachtelungsselektor, was einen Stil für `.card :is(.featured h2)` erstellt, der äquivalent zu `:is(.card h2):is(.featured h2)` ist.

```css
.card {
  padding: 0.5rem;
  border: 1px solid black;
  border-radius: 0.5rem;
  & h2 {
    /* equivalent to `.card h2` */
    color: slateblue;
    .featured & {
      /* equivalent to `:is(.card h2):is(.featured h2)` */
      color: tomato;
    }
  }
}
```

##### Ergebnis

{{EmbedLiveSample('Appending_nesting_selector','100%','250')}}

## Verschachtelte Deklarationsregel

Die verschachtelte Deklarationsregel besagt, dass CSS-Regeln in der Reihenfolge geparst werden, in der sie im CSS-Dokument geschrieben sind.

Mit dem folgenden CSS:

```css
.foo {
  background-color: silver;
  @media screen {
    color: tomato;
  }
  color: black;
}
```

Die `background-color` wird zuerst geparst und auf Silber gesetzt, dann wird die `@media`-Regel ausgewertet und schließlich die `color`.

Das CSSOM parst das CSS wie folgt:

```plain
↳ CSSStyleRule
  .style
    - background-color: silver
  ↳ CSSMediaRule
    ↳ CSSNestedDeclarations
      .style (CSSStyleDeclaration, 1) =
      - color: tomato
  ↳ CSSNestedDeclarations
    .style (CSSStyleDeclaration, 1) =
      - color: black
```

Beachten Sie, dass zur Beibehaltung der Parso Kundenordnung alle Regeln vor der Verschachtelung als Top-Level-`CSSRules` behandelt werden, während alle Top-Level-Regeln nach Verschachtelung als `CSSNestedDeclarations` dargestellt werden.
Deshalb befindet sich das `color-black` in einer verschachtelten Deklaration, obwohl es in der Originaldatei eine Top-Level-Deklaration ist.

> [!NOTE]
> Die Unterstützung für die Regel wurde mit [`CSSNestedDeclarations`](/de/docs/Web/API/CSSNestedDeclarations) hinzugefügt.
> Browser, die diese [Schnittstelle nicht unterstützen](/de/docs/Web/API/CSSNestedDeclarations#browser_compatibility), könnten verschachtelte Regeln in der falschen Reihenfolge parsen.

## Verkettung (ist nicht möglich)

In CSS-Präprozessoren wie [Sass](https://sass-lang.com/) ist es möglich, Verschachtelung zu verwenden, um Zeichenfolgen zu verbinden, um neue Klassen zu erstellen. Dies ist üblich in CSS-Methodologien wie [BEM](https://getbem.com/naming/).

```css example-bad
.component {
  &__child-element {
  }
}
/* In Sass this becomes */
.component__child-element {
}
```

> [!WARNING]
> Dies ist in CSS-Verschachtelung nicht möglich: Wenn ein [Kombinator](/de/docs/Learn_web_development/Core/Styling_basics/Combinators) nicht verwendet wird, wird der verschachtelte Selektor als [Typselektor](/de/docs/Web/CSS/Reference/Selectors/Type_selectors) behandelt. Eine Verkettung würde dies brechen.

In [zusammengesetzten Selektoren](/de/docs/Web/CSS/CSS_selectors/Selector_structure#compound_selector) muss der Typselektor zuerst kommen. Wenn `&Element` (ein [Typselektor](/de/docs/Web/CSS/Reference/Selectors/Type_selectors)) geschrieben wird, wird der CSS-Selektor und der gesamte Selektorblock ungültig. Da der Typselektor zuerst kommen muss, muss der zusammengesetzte Selektor als `Element&` geschrieben werden.

```css example-good
.my-class {
  element& {
  }
}

/* the browser parses this to become a compound selector */
.my-class {
}
element.my-class {
}
```

## Ungültige verschachtelte Stilregeln

Wenn eine verschachtelte CSS-Regel ungültig ist, werden alle eingeschlossenen Stile ignoriert. Dies wirkt sich nicht auf die übergeordneten oder vorhergehenden Regeln aus.

Im folgenden Beispiel gibt es einen ungültigen Selektor (`%` ist kein gültiges Zeichen für Selektoren). Die Regel, die diesen Selektor beinhaltet, wird ignoriert, aber nachfolgende gültige Regeln nicht.

```css example-bad
.parent {
  /* .parent styles these work fine */
  & %invalid {
    /* %invalid styles all of which are ignored */
  }
  & .valid {
    /* .parent .valid styles these work fine */
  }
}
```

## Siehe auch

- [CSS-Nesting-Modul](/de/docs/Web/CSS/CSS_nesting)
- [`&`-Verschachtelungsselektor](/de/docs/Web/CSS/Reference/Selectors/Nesting_selector)
- [Verschachteln von `@`-Regeln](/de/docs/Web/CSS/CSS_nesting/Nesting_at-rules)
- [Verschachtelung und Spezifität](/de/docs/Web/CSS/CSS_nesting/Nesting_and_specificity)
- [`CSSNestedDeclarations`](/de/docs/Web/API/CSSNestedDeclarations)
- [Die verschachtelte Deklarationsregel](https://drafts.csswg.org/css-nesting-1/#nested-declarations-rule)
