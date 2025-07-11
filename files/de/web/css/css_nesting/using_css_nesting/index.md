---
title: Verwendung von CSS-Nesting
short-title: Verwendung von Nesting
slug: Web/CSS/CSS_nesting/Using_CSS_nesting
l10n:
  sourceCommit: 0b8f00bb9ece33c6964eea886b2f7db8711d7b62
---

{{CSSRef}}

Das Modul [CSS-Nesting](/de/docs/Web/CSS/CSS_nesting) ermöglicht es Ihnen, Ihre Stylesheets so zu schreiben, dass sie einfacher zu lesen, modularer und wartungsfreundlicher sind. Da Sie nicht ständig Selektoren wiederholen, kann auch die Dateigröße reduziert werden.

CSS-Nesting unterscheidet sich von CSS-Präprozessoren wie [Sass](https://sass-lang.com/), da es vom Browser geparst wird anstatt von einem CSS-Präprozessor vorab kompiliert zu werden. Außerdem ist im CSS-Nesting die [Spezifität des `&`-Nesting-Selectors](/de/docs/Web/CSS/CSS_nesting/Nesting_and_specificity) ähnlich der Funktion {{cssxref(':is',':is()')}}; sie wird mit der höchsten Spezifität in der zugehörigen Selektoren-Liste berechnet.

Dieser Leitfaden zeigt verschiedene Möglichkeiten zur Anordnung von Nesting in CSS.

## Kind-Selektoren

Sie können CSS-Nesting verwenden, um Kind-Selektoren eines Elternteils zu erstellen, die wiederum verwendet werden können, um Kind-Elemente bestimmter Eltern zu zielen. Dies kann mit oder ohne den [`&`-Nesting-Selector](/de/docs/Web/CSS/Nesting_selector) erfolgen.

Es gibt bestimmte Fälle, in denen der Gebrauch des `&`-Nesting-Selectors notwendig oder hilfreich sein kann:

- Beim Zusammenfügen von Selektoren, wie der Verwendung von [Compound-Selektoren](#compound-selektoren) oder [Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes).
- Für Rückwärtskompatibilität.
- Als visueller Indikator zur Unterstützung der Lesbarkeit. Wenn Sie den `&`-Nesting-Selector sehen, wissen Sie, dass CSS-Nesting verwendet wird.

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

In diesen Beispielen, eines ohne und eines mit dem `&`-Nesting-Selector, wird das `<input>`-Element innerhalb des `<label>`-Elements anders gestylt als das `<input>`, das ein Geschwister-Element eines `<label>` ist.

#### Ohne Nesting-Selector

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

#### Mit Nesting-Selector

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

[CSS-Kombinatoren](/de/docs/Learn_web_development/Core/Styling_basics/Combinators) können ebenfalls mit oder ohne den `&`-Nesting-Selector verwendet werden.

### Beispiel

#### Nesting des Geschwisterkombinators

In diesem Beispiel wird der erste Absatz nach jedem `<h2>` mit dem [nächsten Geschwister-Kombinator (`+`)](/de/docs/Web/CSS/Next-sibling_combinator) unter Verwendung von CSS-Nesting angezielt.

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

## Compound-Selektoren

Beim Verwenden von [Compound-Selektoren](/de/docs/Web/CSS/CSS_selectors/Selector_structure#compound_selector) in verschachteltem CSS müssen Sie den `&`-Nesting-Selector verwenden. Dies liegt daran, dass der Browser automatisch einen Leerraum zwischen Selektoren hinzufügt, die nicht den `&`-Nesting-Selector verwenden.

Um ein Element mit `class="a b"` anzuzielen, wird der `&`-Nesting-Selector benötigt, da ansonsten der Leerraum den Compound-Selektor unterbrechen würde.

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

#### Verschachtelung und Compound-Selektoren

In diesem Beispiel wird der `&`-Nesting-Selector verwendet, um Compound-Selektoren zu erstellen, die Elemente mit mehreren Klassen stylen.

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

Stile für die `.notices`, um eine Spalte mit [Flexbox-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) zu erstellen.

```css
.notices {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 90%;
  margin: auto;
}
```

Im folgenden CSS-Code wird Nesting verwendet, um Compound-Selektoren sowohl mit als auch ohne `&` zu erstellen. Der oberste Selektor definiert die grundlegenden Stile für Elemente mit `class="notice"`. Der `&`-Nesting-Selector wird dann verwendet, um Compound-Selektoren für Elemente mit entweder `class="notice warning"` oder `class="notice success"` zu erstellen. Zusätzlich ist die Verwendung von Nesting zur Erstellung von Compound-Selektoren ohne explizite Verwendung von `&` im Selektor `.notice .notice-heading::before` zu sehen.

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

## Angefügter Nesting-Selector

Der `&`-Nesting-Selector kann auch an einen verschachtelten Selektor angefügt werden, was den Effekt hat, den Kontext umzukehren.

Dies kann nützlich sein, wenn wir Stile für ein Kind-Element haben, die sich ändern, wenn ein Eltern-Element eine andere Klasse erhält:

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

#### Anfügen des Nesting-Selectors

In diesem Beispiel gibt es 3 Karten, von denen eine hervorgehoben ist. Die Karten sind alle exakt gleich, außer dass die hervorgehobene Karte eine alternative Farbe für die Überschrift haben wird. Durch das Anfügen des `&`-Nesting-Selectors kann der Stil für `.featured h2` in den Stil für `h2` verschachtelt werden.

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

Im folgenden CSS erstellen wir die Stile für `.card` und `.card h2`. Dann wird im `h2`-Stilblock die `.featured`-Klasse mit dem angefügten `&`-Nesting-Selector verschachtelt, was einen Stil für `.card :is(.featured h2)` erstellt, was gleichwertig zu `:is(.card h2):is(.featured h2)` ist.

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

Die Regel für verschachtelte Deklarationen besagt, dass CSS-Regeln in der Reihenfolge geparst werden, in der sie im CSS-Dokument geschrieben sind.

Mit folgendem CSS:

```css
.foo {
  background-color: silver;
  @media screen {
    color: tomato;
  }
  color: black;
}
```

Die `background-color` wird zuerst geparst und auf Silber gesetzt, dann wird die `@media`-Regel ausgewertet, und schließlich die `color`.

Der CSSOM parst das CSS folgendermaßen:

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

Beachten Sie, dass, um die Parsing-Reihenfolge beizubehalten, alle Regeln vor dem Nesting als Top-Level-`CSSRules` behandelt werden, während alle Top-Level-Regeln nach dem Nesting als `CSSNestedDeclarations` dargestellt werden. Daher ist `color-black` innerhalb einer verschachtelten Deklaration, obwohl es eine Top-Level-Deklaration im Originaldokument ist.

> [!NOTE]
> Unterstützung für die Regel wurde mit [`CSSNestedDeclarations`](/de/docs/Web/API/CSSNestedDeclarations) hinzugefügt.
> Browser, die [diese Schnittstelle nicht unterstützen](/de/docs/Web/API/CSSNestedDeclarations#browser_compatibility), könnten verschachtelte Regeln in falscher Reihenfolge parsen.

## Verkettung (ist nicht möglich)

In CSS-Präprozessoren wie [Sass](https://sass-lang.com/) ist es möglich, durch Nesting Zeichenketten zu verbinden, um neue Klassen zu erstellen. Dies ist üblich in CSS-Methodologien wie [BEM](https://getbem.com/naming/).

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
> Dies ist im CSS-Nesting nicht möglich: wenn ein [Kombinator](/de/docs/Learn_web_development/Core/Styling_basics/Combinators) nicht verwendet wird, wird der verschachtelte Selektor als [Typ-Selektor](/de/docs/Web/CSS/Type_selectors) behandelt. Eine Verkettung zuzulassen, würde dies brechen.

In [Compound-Selektoren](/de/docs/Web/CSS/CSS_selectors/Selector_structure#compound_selector) muss der Typ-Selektor zuerst kommen. Das Schreiben von `&Element` (ein [Typ-Selektor](/de/docs/Web/CSS/Type_selectors)) macht den CSS-Selektor und den gesamten Selektorblock ungültig. Da der Typ-Selektor zuerst kommen muss, muss der Compound-Selektor als `Element&` geschrieben werden.

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

Wenn eine verschachtelte CSS-Regel ungültig ist, werden alle eingeschlossenen Stile ignoriert. Dies betrifft nicht die übergeordneten oder vorhergehenden Regeln.

Im folgenden Beispiel gibt es einen ungültigen Selektor (`%` ist kein gültiges Zeichen für Selektoren). Die Regel, die diesen Selektor enthält, wird ignoriert, aber nachfolgende gültige Regeln werden nicht ignoriert.

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

- [CSS-Nesting](/de/docs/Web/CSS/CSS_nesting) Modul
- [`&`-Nesting-Selector](/de/docs/Web/CSS/Nesting_selector)
- [Verschachtelung `@`-Regeln](/de/docs/Web/CSS/CSS_nesting/Nesting_at-rules)
- [Verschachtelung und Spezifität](/de/docs/Web/CSS/CSS_nesting/Nesting_and_specificity)
- [`CSSNestedDeclarations`](/de/docs/Web/API/CSSNestedDeclarations)
- [Die Regel für verschachtelte Deklarationen](https://drafts.csswg.org/css-nesting-1/#nested-declarations-rule)
