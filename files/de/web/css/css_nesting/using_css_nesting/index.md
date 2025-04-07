---
title: Verwendung von CSS-Nesting
slug: Web/CSS/CSS_nesting/Using_CSS_nesting
l10n:
  sourceCommit: af98ab1715ff54825888ef1f7f13d6e3e3bf90b8
---

{{CSSRef}}

Das [CSS-Nesting](/de/docs/Web/CSS/CSS_nesting)-Modul ermöglicht es Ihnen, Ihre Stylesheets so zu schreiben, dass sie leichter zu lesen, modularer und besser wartbar sind. Da Sie nicht ständig Selektoren wiederholen, kann auch die Dateigröße reduziert werden.

CSS-Nesting unterscheidet sich von CSS-Präprozessoren wie [Sass](https://sass-lang.com/) darin, dass es vom Browser geparst wird, anstatt von einem CSS-Präprozessor vorab kompiliert zu werden. Im CSS-Nesting ist die [Spezifität des `&`-Nesting-Selektors](/de/docs/Web/CSS/CSS_nesting/Nesting_and_specificity) der Funktion {{cssxref(':is',':is()')}} ähnlich; sie wird anhand der höchsten Spezifität in der zugehörigen Selektorliste berechnet.

Dieser Leitfaden zeigt verschiedene Möglichkeiten, das Nesting in CSS anzuordnen.

## Kindselektoren

Sie können CSS-Nesting verwenden, um Kindselektoren eines Elternteils zu erstellen, die wiederum verwendet werden können, um Kindelemente spezifischer Elternteile anzusprechen. Dies kann mit oder ohne den [`&`-Nesting-Selektor](/de/docs/Web/CSS/Nesting_selector) erfolgen.

Es gibt bestimmte Fälle, in denen die Verwendung des `&`-Nesting-Selektors notwendig oder hilfreich sein kann:

- Beim Zusammenfügen von Selektoren, z.B. bei Verwendung von [zusammengesetzten Selektoren](#zusammengesetzte_selektoren) oder [Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes).
- Für die Rückwärtskompatibilität.
- Als visueller Indikator zur Unterstützung der Lesbarkeit, wenn der `&`-Nesting-Selektor zu sehen ist, wissen Sie, dass CSS-Nesting verwendet wird.

```css
/* Without nesting selector */
parent {
  /* parent styles */
  child {
    /* child of parent styles */
  }
}

/* With nesting selector */
parent {
  /* parent styles */
  & child {
    /* child of parent styles */
  }
}

/* the browser will parse both of these as */
parent {
  /* parent styles */
}
parent child {
  /* child of parent styles */
}
```

### Beispiele

In diesen Beispielen, einem ohne und einem mit dem `&`-Nesting-Selektor, wird das `<input>` innerhalb des `<label>` unterschiedlich zum `<input>`, das ein Geschwister eines `<label>` ist, gestylt.

#### Ohne Nesting-Selektor

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

#### Mit Nesting-Selektor

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

[CSS-Kombinatoren](/de/docs/Learn_web_development/Core/Styling_basics/Combinators) können ebenfalls mit oder ohne den `&`-Nesting-Selektor verwendet werden.

### Beispiel

#### Nesting des Geschwister-Kombinators

In diesem Beispiel wird der erste Absatz nach jedem `<h2>` mit dem [direkten Geschwister-Kombinator (`+`)](/de/docs/Web/CSS/Next-sibling_combinator) unter Verwendung von CSS-Nesting angesprochen.

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

Beim Verwenden von [zusammengesetzten Selektoren](/de/docs/Web/CSS/CSS_selectors/Selector_structure#compound_selector) in geschachteltem CSS müssen Sie den `&`-Nesting-Selektor verwenden. Dies liegt daran, dass der Browser automatisch Leerzeichen zwischen Selektoren hinzufügt, die den `&`-Nesting-Selektor nicht verwenden.

Um ein Element mit `class="a b"` anzusprechen, wird der `&`-Nesting-Selektor benötigt, andernfalls wird das Leerzeichen den zusammengesetzten Selektor unterbrechen.

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

#### Nesting und zusammengesetzte Selektoren

In diesem Beispiel wird der `&`-Nesting-Selektor verwendet, um zusammengesetzte Selektoren zu erstellen, um Elemente mit mehreren Klassen zu stylen.

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

Stile für die `.notices`, um eine Spalte mit dem [Flexbox-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) zu erstellen.

```css
.notices {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 90%;
  margin: auto;
}
```

Im folgenden CSS-Code wird das Nesting verwendet, um sowohl mit als auch ohne `&` zusammengesetzte Selektoren zu erstellen. Der oberste Selektor definiert die grundlegenden Stile für Elemente mit `class="notice"`. Der `&`-Nesting-Selektor wird dann verwendet, um zusammengesetzte Selektoren für Elemente mit `class="notice warning"` oder `class="notice success"` zu erstellen. Zusätzlich kann die Verwendung des Nestings zur Erstellung zusammengesetzter Selektoren ohne explizite Verwendung von `&` im Selektor `.notice .notice-heading::before` gesehen werden.

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

## Angefügter Nesting-Selektor

Der `&`-Nesting-Selektor kann auch an einen geschachtelten Selektor angehängt werden, was den Effekt hat, den Kontext umzukehren.

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

#### Anheften des Nesting-Selektors

In diesem Beispiel gibt es 3 Karten, von denen eine hervorgehoben ist. Die Karten sind alle genau gleich, außer dass die hervorgehobene Karte eine alternative Farbe für die Überschrift hat. Durch das Anfügen des `&`-Nesting-Selektors kann der Stil für `.featured h2` im Stil für `h2` geschachtelt werden.

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

Im folgenden CSS erstellen wir die Stile für `.card` und `.card h2`. Dann, im `h2`-Stilblock, schachteln wir die `.featured`-Klasse mit dem angefügten `&`-Nesting-Selektor, der einen Stil für `.card :is(.featured h2)` erstellt, was gleichbedeutend ist mit `:is(.card h2):is(.featured h2)`.

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
  @media (screen) {
    color: tomato;
  }
  color: black;
}
```

Wird `background-color` zuerst geparst und auf Silber gesetzt, dann wird die `@media`-Regel ausgewertet und schließlich die `color`.

Das CSSOM parst das CSS auf folgende Weise:

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

Beachten Sie, dass zur Erhaltung der Parsing-Reihenfolge alle Regeln vor dem Nesting als Top-Level-`CSSRules` behandelt werden, während alle Top-Level-Regeln nach dem Nesting als `CSSNestedDeclarations` dargestellt werden. Deshalb ist das `color-black` innerhalb einer verschachtelten Deklaration, obwohl es in der ursprünglichen Dokumentation eine Top-Level-Deklaration ist.

> [!NOTE]
> Unterstützung für die Regel wurde mit [`CSSNestedDeclarations`](/de/docs/Web/API/CSSNestedDeclarations) hinzugefügt.
> Browser, die [diese Schnittstelle nicht unterstützen](/de/docs/Web/API/CSSNestedDeclarations#browser_compatibility), können verschachtelte Regeln in der falschen Reihenfolge parsen.

## Verkettung (nicht möglich)

In CSS-Präprozessoren wie [Sass](https://sass-lang.com/) ist es möglich, Nesting zu verwenden, um Strings zu verbinden und neue Klassen zu erstellen. Dies ist üblich in CSS-Methodologien wie [BEM](https://getbem.com/naming/).

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
> Dies ist im CSS-Nesting nicht möglich: Wenn kein [Kombinator](/de/docs/Learn_web_development/Core/Styling_basics/Combinators) verwendet wird, wird der geschachtelte Selektor als [Typselektor](/de/docs/Web/CSS/Type_selectors) behandelt. Das Zulassen der Verkettung würde dies unterbrechen.

In [zusammengesetzten Selektoren](/de/docs/Web/CSS/CSS_selectors/Selector_structure#compound_selector) muss der Typselektor zuerst kommen. Das Schreiben von `&Element` (ein [Typselektor](/de/docs/Web/CSS/Type_selectors)) macht den CSS-Selektor und den gesamten Selektorblock ungültig. Da der Typselektor zuerst kommen muss, muss der zusammengesetzte Selektor als `Element&` geschrieben werden.

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

Wenn eine verschachtelte CSS-Regel ungültig ist, werden alle eingeschlossenen Stile ignoriert. Dies beeinträchtigt nicht die übergeordneten oder vorhergehenden Regeln.

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

- [CSS-Nesting](/de/docs/Web/CSS/CSS_nesting)-Modul
- [`&`-Nesting-Selektor](/de/docs/Web/CSS/Nesting_selector)
- [Nesting `@`-Regeln](/de/docs/Web/CSS/CSS_nesting/Nesting_at-rules)
- [Nesting und Spezifität](/de/docs/Web/CSS/CSS_nesting/Nesting_and_specificity)
- [`CSSNestedDeclarations`](/de/docs/Web/API/CSSNestedDeclarations)
- [Die verschachtelte Deklarationsregel](https://drafts.csswg.org/css-nesting-1/#nested-declarations-rule)
