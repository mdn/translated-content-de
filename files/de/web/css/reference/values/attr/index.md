---
title: CSS-Funktion `attr()`
short-title: attr()
slug: Web/CSS/Reference/Values/attr
l10n:
  sourceCommit: 7cabe7010a0ccfcf587ddac1571963eba102090d
---

> [!NOTE]
> Die Funktion `attr()` kann mit jeder CSS-Eigenschaft verwendet werden, aber die Unterstützung für andere Eigenschaften als {{CSSxRef("content")}} ist experimentell.

Die [CSS](/de/docs/Web/CSS)-[Funktion](/de/docs/Web/CSS/Reference/Values/Functions) **`attr()`** ruft den Wert eines Attributs des ausgewählten Elements ab und verwendet ihn als Eigenschaftswert. Das ähnelt der Art und Weise, wie die Funktion {{cssxref("var()")}} den Wert einer benutzerdefinierten Eigenschaft einsetzt. `attr()` kann auch mit [Pseudoelementen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) verwendet werden. In diesem Fall wird der Attributwert des Elements zurückgegeben, von dem das Pseudoelement stammt.

{{InteractiveExample("CSS Demo: attr()", "tabbed-shorter")}}

```css interactive-example
blockquote {
  margin: 1em 0;
}

blockquote::after {
  display: block;
  content: " (source: " attr(cite) ") ";
  color: hotpink;
}
```

```html interactive-example
<blockquote cite="https://mozilla.org/en-US/about/">
  Mozilla is working to put control of the internet back in the hands of the
  people using it.
</blockquote>

<blockquote cite="https://web.dev/about/">
  Build beautiful, accessible, fast, and secure websites that work
  cross-browser.
</blockquote>
```

## Syntax

```css
/* Basic usage */
attr(data-count)
attr(href)

/* With type */
attr(data-width px)
attr(data-size rem)
attr(data-name raw-string)
attr(id type(<custom-ident>))
attr(data-count type(<number>))
attr(data-size type(<length> | <percentage>))

/* With fallback */
attr(data-count type(<number>), 0)
attr(data-width px, inherit)
attr(data-something, "default")

/* With namespace */
attr(color|myAttr type(*), red)
```

### Parameter

Die Syntax der Funktion `attr()` lautet:

```plain
attr(<attr-name> <attr-type>? , <fallback-value>?)
```

Die Parameter sind:

- `<attr-name>`
  - : Der Name des Attributs, dessen Wert von den ausgewählten HTML-Elementen abgerufen werden soll.
    - Namespaces
      - : Der Attributname kann einen [`namespace`](/de/docs/Web/CSS/Guides/Namespaces) enthalten. Damit lassen sich Elemente von [XML](/de/docs/Web/XML)-basierten Auszeichnungssprachen wie [SVG](/de/docs/Web/SVG) oder [MathML](/de/docs/Web/MathML) ansprechen.

        ```css
        @namespace svg url("http://www.w3.org/2000/svg");
        a {
          fill: attr(svg|myAttr type(*), green);
        }
        ```

        > [!NOTE]
        > Wenn kein Namespace angegeben ist, sondern nur ein Bezeichner wie in `attr(foo)`, wird der Null-Namespace angenommen. Das ist in der Regel erwünscht, da Attribute mit Namespace selten sind. Wie bei Attributselektoren hängt die Groß- und Kleinschreibung von `<attr-name>` von der Dokumentensprache ab.

- `<attr-type>`
  - : Gibt an, wie der Attributwert als CSS-Wert geparst wird. Dies kann das Schlüsselwort `raw-string`, eine Funktion {{cssxref("type()")}} oder eine CSS-Dimensionseinheit sein, die durch einen `<attr-unit>`-Bezeichner angegeben wird. Wird der Parameter weggelassen, gilt standardmäßig `raw-string`.
    - `raw-string`
      - : Das Schlüsselwort `raw-string` bewirkt, dass der wörtliche Attributwert als Wert eines CSS-Strings behandelt wird, ohne ihn als CSS zu parsen. Das gilt auch für CSS-Escape-Sequenzen, das Entfernen von Leerraum, Kommentare usw. Der `<fallback-value>` wird nur verwendet, wenn das Attribut fehlt; ein ausdrücklich angegebener leerer Wert löst den Rückgriff auf den Ersatzwert nicht aus.

        ```css
        attr(data-name raw-string, "stranger")
        ```

        > [!NOTE]
        > Dieses Schlüsselwort hieß ursprünglich `string` und wurde unter diesem Namen von Chromium-Browsern unterstützt. Aus Gründen der Abwärtskompatibilität werden beide Schlüsselwörter vorübergehend unterstützt.

    - {{cssxref("type()")}}
      - : Die Funktion `type()` nimmt eine `<syntax>` als Argument entgegen. Diese gibt an, als welcher Datentyp der Wert geparst werden soll.
        > [!NOTE]
        > Aus [Sicherheitsgründen](#einschränkungen_und_sicherheit) ist {{CSSxRef("url_value", "&lt;url&gt;")}} als Datentyp für `attr()` nicht zulässig.

    - `<attr-unit>`
      - : Der Bezeichner `<attr-unit>` gibt an, welche Einheit ein numerischer Wert gegebenenfalls haben soll. Er kann das Zeichen `%` (Prozent) oder eine [CSS-Distanzeinheit](/de/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types#distance_units) wie `px`, `rem`, `deg`, `s` usw. sein.

        ```css
        attr(data-size rem)
        attr(data-width px, inherit)
        attr(data-rotation deg)
        ```

- `<fallback-value>`
  - : Der Wert, der verwendet wird, wenn das angegebene Attribut fehlt oder einen ungültigen Wert enthält.

### Rückgabewert

Der Rückgabewert von `attr()` ist der Wert des HTML-Attributs mit dem Namen `<attr-name>`, geparst als der angegebene `<attr-type>` oder als CSS-String.

Wenn ein `<attr-type>` festgelegt ist, versucht `attr()`, den Attributwert als diesen `<attr-type>` zu parsen und zurückzugeben. Kann der Attributwert nicht als der angegebene `<attr-type>` geparst werden, wird stattdessen der `<fallback-value>` zurückgegeben. Ist kein `<attr-type>` festgelegt, wird der Attributwert als CSS-String geparst.

Ist kein `<fallback-value>` festgelegt, wird standardmäßig ein leerer String zurückgegeben, wenn kein `<attr-type>` festgelegt ist. Ist ein `<attr-type>` festgelegt, wird stattdessen der {{Glossary("guaranteed_invalid_value", "garantiert ungültige Wert")}} zurückgegeben.

## Beschreibung

### Einschränkungen und Sicherheit

Die Funktion `attr()` kann auf Attribute zugreifen, die nie für die Gestaltung vorgesehen waren und möglicherweise vertrauliche Informationen enthalten, beispielsweise ein Sicherheitstoken, das von Skripten auf der Seite verwendet wird. Im Allgemeinen ist das unproblematisch, kann bei der Verwendung in URLs aber zu einem Sicherheitsrisiko werden.

Aus diesem Grund können Sie mit `attr()` keine URLs dynamisch erstellen:

```html example-bad
<!-- This won't work! -->
<span data-icon="https://example.org/icons/question-mark.svg">help</span>
```

```css example-bad
span[data-icon] {
  background-image: url(attr(data-icon));
}
```

Diese Einschränkung gilt auch für jeden Kontext, der möglicherweise zu einem `<url>`-Wert führen könnte. Werte, die `attr()` verwenden, werden als _`attr()`-tainted_ markiert. Wenn sie als `<url>` oder innerhalb eines `<url>` verwendet werden, wird die Deklaration [„invalid at computed value time“ (IACVT)](https://www.bram.us/2024/02/26/css-what-is-iacvt/).

Daher funktionieren beispielsweise auch Funktionen wie {{CSSxRef("image/image-set","image-set()")}} nicht, wenn sie Werte entgegennehmen, die zu `<url>` aufgelöst werden:

```css example-bad
span[data-icon] {
  background: image-set(attr(data-icon));
}
```

### Abwärtskompatibilität

Im Allgemeinen ist die moderne `attr()`-Syntax abwärtskompatibel, da die bisherige Verwendung ohne Angabe eines `<attr-type>` weiterhin dasselbe Verhalten zeigt. `attr(data-attr)` im Code entspricht `attr(data-attr type(<string>))` oder der einfacheren Schreibweise `attr(data-attr string))`.

Es gibt jedoch zwei Grenzfälle, in denen sich die moderne `attr()`-Syntax anders verhält als die alte Syntax.

Im folgenden Ausschnitt verwerfen Browser, die die moderne `attr()`-Syntax nicht unterstützen, die zweite Deklaration, weil sie sie nicht parsen können. In diesen Browsern lautet das Ergebnis `"Hello World"`.

```html
<div text="Hello"></div>
```

```css
div::before {
  content: attr(text) " World";
}
div::before {
  content: attr(text) 1px;
}
```

In Browsern, die die moderne Syntax unterstützen, wird hingegen nichts ausgegeben. Diese Browser können die zweite Deklaration zwar parsen, aber da ihr Wert für die Eigenschaft `content` ungültig ist, wird die Deklaration [„invalid at computed value time“, kurz IACVT](https://www.bram.us/2024/02/26/css-what-is-iacvt/).

Um solche Situationen zu vermeiden, empfiehlt sich eine [Feature-Erkennung](#feature-erkennung).

Der zweite Grenzfall ist folgender:

```html
<div id="parent"><div id="child" data-attr="foo"></div></div>
```

```css
#parent {
  --x: attr(data-attr);
}
#child::before {
  content: var(--x);
}
```

Browser ohne Unterstützung für die moderne Syntax zeigen den Text `"foo"` an. In Browsern mit Unterstützung für das moderne `attr()` erfolgt keine Ausgabe.

Der Grund dafür ist, dass `attr()` – ähnlich wie benutzerdefinierte Eigenschaften, die die Funktion `var()` verwenden – erst bei der [Berechnung des Werts](https://www.bram.us/2024/02/26/css-what-is-iacvt/#custom-properties) eingesetzt wird. Beim modernen Verhalten versucht `--x` zunächst, das Attribut `data-attr` vom Element `#parent` zu lesen. Da `#parent` kein solches Attribut besitzt, ergibt sich ein leerer String. Dieser leere String wird anschließend an das Element `#child` vererbt, sodass eine Deklaration `content: ;` gesetzt wird.

Um solche Situationen zu vermeiden, geben Sie geerbte `attr()`-Werte nur dann an Kindelemente weiter, wenn Sie dies ausdrücklich beabsichtigen.

### Feature-Erkennung

Sie können die Unterstützung für die moderne `attr()`-Syntax mit der At-Regel {{CSSxRef("@supports")}} erkennen. Versuchen Sie bei der Prüfung, einer CSS-Eigenschaft, die keine benutzerdefinierte Eigenschaft ist, einen erweiterten `attr()`-Ausdruck zuzuweisen.

Zum Beispiel:

```css
@supports (x: attr(x type(*))) {
  /* Browser has modern attr() support */
}

@supports not (x: attr(x type(*))) {
  /* Browser does not have modern attr() support */
}
```

Dieselbe Prüfung können Sie in JavaScript mit [`CSS.supports()`](/de/docs/Web/API/CSS/supports_static) durchführen:

```js
if (CSS.supports("x: attr(x type(*))")) {
  /* Browser has modern attr() support */
}

if (!CSS.supports("x: attr(x type(*))")) {
  /* Browser does not have modern attr() support */
}
```

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Eigenschaft `content`

In diesem Beispiel stellen wir dem Inhalt des Elements {{HTMLElement("p")}} den Wert des [globalen Attributs](/de/docs/Web/HTML/Reference/Global_attributes) `data-foo` vom Typ [`data-*`](/de/docs/Web/HTML/Reference/Global_attributes/data-*) voran.

#### HTML

```html
<p data-foo="hello">world</p>
```

#### CSS

```css
[data-foo]::before {
  content: attr(data-foo) " ";
}
```

#### Ergebnis

{{EmbedLiveSample("content_property", "100%", 50)}}

### Verwendung eines Ersatzwerts

{{SeeCompatTable}}

In diesem Beispiel hängen wir den Wert des [globalen Attributs](/de/docs/Web/HTML/Reference/Global_attributes) `data-browser` vom Typ [`data-*`](/de/docs/Web/HTML/Reference/Global_attributes/data-*) an das Element {{HTMLElement("p")}} an. Fehlt dem Element {{HTMLElement("p")}} das Attribut `data-browser`, hängen wir stattdessen den _Ersatzwert_ „**Unknown**“ an.

#### HTML

```html
<p data-browser="Firefox">My favorite browser is:</p>
<p>Your favorite browser is:</p>
```

#### CSS

```css
p::after {
  content: " " attr(data-browser, "Unknown");
  color: tomato;
}
```

#### Ergebnis

{{EmbedLiveSample("using_a_fallback_value", "100%", 90)}}

### Farbwert

{{SeeCompatTable}}

In diesem Beispiel setzen wir den CSS-Wert von {{CSSXRef("background-color")}} auf den Wert des [globalen Attributs](/de/docs/Web/HTML/Reference/Global_attributes) `data-background` vom Typ [`data-*`](/de/docs/Web/HTML/Reference/Global_attributes/data-*), das dem Element {{HTMLElement("div")}} zugewiesen ist.

#### HTML

```html
<div class="background" data-background="lime">
  background expected to be red if your browser does not support advanced usage
  of attr()
</div>
```

#### CSS

```css hidden
.background {
  height: 100vh;
}
```

```css
.background {
  background-color: red;
}

.background[data-background] {
  background-color: attr(data-background type(<color>), red);
}
```

#### Ergebnis

{{EmbedLiveSample("color_value", "100%", 50)}}

### Verwendung von Dimensionseinheiten

{{SeeCompatTable}}

In diesem Beispiel wird das Attribut `data-rotation` als Wert mit der Einheit `deg` geparst, der die Drehung des Elements angibt.

#### HTML

```html
<div data-rotation="-3">I am rotated by -3 degrees</div>
<div data-rotation="2">And I by 2 degrees</div>
<div>And so am I, using the fallback value of 1.5deg</div>
```

#### CSS

```css hidden
body {
  min-height: 100svh;
  display: grid;
  place-content: center;
  gap: 1em;
}
div {
  margin: 0 auto;
  border: 1px solid;
  border-radius: 0.25em;
  padding: 0.5em;
}
```

```css
div {
  width: fit-content;
  transform-origin: 50% 50%;
  rotate: attr(data-rotation deg, 1.5deg);
}
```

#### Ergebnis

{{EmbedLiveSample("using_dimension_units", "100%", 300)}}

### Parsen von `attr()`-Werten als `<custom-ident>`

{{SeeCompatTable}}

In diesem Beispiel werden die Werte für die Eigenschaft {{cssxref("view-transition-name")}} aus dem Attribut `id` des Elements abgeleitet. Das Attribut wird als {{CSSxRef("&lt;custom-ident&gt;")}} geparst – ein Wert, den {{cssxref("view-transition-name")}} akzeptiert.

Die resultierenden Werte für {{cssxref("view-transition-name")}} lauten `card-1`, `card-2`, `card-3` usw.

#### HTML

Das HTML enthält vier Karten mit unterschiedlichen `id`-Attributen und einen `<button>` mit der Aufschrift „Shuffle cards“, der die Karten neu anordnet.

```html
<div class="cards">
  <div class="card" id="card-1">1</div>
  <div class="card" id="card-2">2</div>
  <div class="card" id="card-3">3</div>
  <div class="card" id="card-4">4</div>
</div>
<button>Shuffle cards</button>
```

```html hidden
<div class="warning">
  <p>
    Your browser does not support advanced <code>attr()</code>. As a result,
    this demo won't do anything.
  </p>
</div>
```

#### CSS

Die Karten sind in einem Flex-Container angeordnet:

```css
.cards {
  display: flex;
  flex-direction: row;
  gap: 1em;
  padding: 1em;
}
```

```css hidden
:root {
  view-transition-name: none;
}
::view-transition {
  pointer-events: none;
}

@supports (x: attr(x type(*))) {
  .warning {
    display: none;
  }
}

@layer layout {
  .card {
    border-radius: 0.25em;
    width: 20vw;
    max-width: 5em;
    aspect-ratio: 1 / 1.6;
    background: lightgrey;

    display: grid;
    place-content: center;
    font-size: 2em;
  }

  * {
    box-sizing: border-box;
  }

  body {
    min-height: 100svh;
    display: grid;
    place-content: center;
  }

  button {
    justify-self: center;
  }
}

@layer warning {
  .warning {
    padding: 1em;
    border: 1px solid #cccccc;
    background: rgb(255 255 205 / 0.8);
    text-align: center;
    order: -1;
    margin: 1em;
  }

  .warning > :first-child {
    margin-top: 0;
  }
  .warning > :last-child {
    margin-bottom: 0;
  }
}
```

Bei jeder Karte liest die Funktion `attr()` das Attribut `id` und parst es als {{CSSxRef("&lt;custom-ident&gt;")}}. Dieser Wert wird für die Eigenschaft {{cssxref("view-transition-name")}} verwendet. Ist für eine Karte keine `id` festgelegt, wird stattdessen der Ersatzwert `none` verwendet.

```css
.card {
  view-transition-name: attr(id type(<custom-ident>), none);
  view-transition-class: card;
}
```

#### JavaScript

Wenn der `<button>` gedrückt wird, werden die Karten neu angeordnet. Dazu wird die Reihenfolge eines Arrays mit Referenzen auf alle Karten zufällig geändert. Anschließend wird die Eigenschaft {{CSSxRef("order")}} jeder Karte auf ihre neue Indexposition im Array gesetzt.

Um den Übergang jeder Karte an ihre neue Position zu animieren, werden [View Transitions](/de/docs/Web/API/View_Transition_API/Using) verwendet. Dazu wird die Aktualisierung von `order` in einen Aufruf von [`document.startViewTransition`](/de/docs/Web/API/Document/startViewTransition) eingebettet.

```js
const shuffle = (array) => {
  for (let i = array.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

document.querySelector("button").addEventListener("click", (e) => {
  const $cards = Array.from(document.querySelectorAll(".card"));
  shuffle($cards);
  document.startViewTransition(() => {
    $cards.forEach(($card, i) => {
      $card.style.setProperty("order", i);
    });
  });
});
```

#### Ergebnis

{{EmbedLiveSample("parsing_attr_values_as_custom-idents", "100%", 400)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Attributselektoren](/de/docs/Web/CSS/Reference/Selectors/Attribute_selectors)
- [HTML-Attribute `data-*`](/de/docs/Web/HTML/Reference/Global_attributes/data-*)
- [SVG-Attribute `data-*`](/de/docs/Web/SVG/Reference/Attribute/data-*)
