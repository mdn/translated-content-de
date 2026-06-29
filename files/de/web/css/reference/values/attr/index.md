---
title: "`attr()` CSS-Funktion"
short-title: attr()
slug: Web/CSS/Reference/Values/attr
l10n:
  sourceCommit: 3e21789c23062f7cfffa6fd7e24bd9dfc2c38551
---

> [!NOTE]
> Die Funktion `attr()` kann mit jeder CSS-Eigenschaft verwendet werden, aber die Unterstützung für andere Eigenschaften als {{CSSxRef("content")}} ist experimentell.

Die **`attr()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/Reference/Values/Functions) wird verwendet, um den Wert eines Attributs des ausgewählten Elements abzurufen und in einem Eigenschaftswert zu verwenden, ähnlich wie die Funktion {{cssxref("var()")}} einen benutzerdefinierten Eigenschaftswert ersetzt. Sie kann auch mit [Pseudo-Elementen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) verwendet werden, wobei in diesem Fall der Attributwert des ursprünglichen Elements des Pseudo-Elements zurückgegeben wird.

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

Die Syntax der `attr()`-Funktion ist wie folgt:

```plain
attr(<attr-name> <attr-type>? , <fallback-value>?)
```

Die Parameter sind:

- `<attr-name>`
  - : Der Attributname, dessen Wert aus dem/den ausgewählten HTML-Element(en) abgerufen werden soll.
    - Namespaces
      - : Der Attributname kann einen [`Namespace`](/de/docs/Web/CSS/Guides/Namespaces) enthalten, der das Targeting von Elementen in [XML](/de/docs/Web/XML)-basierten Markup-Sprachen wie [SVG](/de/docs/Web/SVG) oder [MathML](/de/docs/Web/MathML) ermöglicht.

        ```css
        @namespace svg url("http://www.w3.org/2000/svg");
        a {
          fill: attr(svg|myAttr type(*), green);
        }
        ```

        > [!NOTE]
        > Wenn kein Namespace angegeben ist (nur ein Bezeichner wie `attr(foo)`), wird der leere Namespace impliziert. Dies ist normalerweise erwünscht, da Attributnamen in Namespaces selten sind. Wie bei Attributselektoren hängt die Groß-/Kleinschreibung von `<attr-name>` von der Dokumentensprache ab.

- `<attr-type>`
  - : Gibt an, wie der Attributwert in einen CSS-Wert geparst wird. Dies kann das Schlüsselwort `raw-string`, eine {{cssxref("type()")}}-Funktion oder eine CSS-Dimensionalitätseinheit (angegeben mit einem `<attr-unit>`-Bezeichner) sein. Wenn es weggelassen wird, lautet der Standardwert `raw-string`.
    - `raw-string`
      - : Das Schlüsselwort `raw-string` bewirkt, dass der wörtliche Wert des Attributs als der Wert eines CSS-Strings behandelt wird, ohne dass eine CSS-Analyse durchgeführt wird (einschließlich CSS-Escapes, Leerzeichenentfernung, Kommentare usw.). Der `<fallback-value>` wird nur verwendet, wenn das Attribut weggelassen wird; eine leere Angabe löst nicht den Fallback aus.

        ```css
        attr(data-name raw-string, "stranger")
        ```

        > [!NOTE]
        > Dieses Schlüsselwort wurde ursprünglich in Chromium-Browsern als `string` benannt und unterstützt. Beide Schlüsselwörter werden kurzzeitig unterstützt, um die Abwärtskompatibilität zu gewährleisten.

    - {{cssxref("type()")}}
      - : Die Funktion `type()` nimmt ein `<syntax>` als Argument, das angibt, in welchen Datentyp der Wert geparst werden soll.
        > [!NOTE]
        > Aus [Sicherheitsgründen](#einschränkungen_und_sicherheit) ist {{CSSxRef("url_value", "&lt;url&gt;")}} nicht als Datentyp für `attr()` erlaubt.

    - `<attr-unit>`
      - : Der `<attr-unit>`-Bezeichner gibt die Einheit an, die ein numerischer Wert haben sollte (falls vorhanden). Es kann das `%`-Zeichen (Prozentsatz) oder eine [CSS-Entfernungseinheit](/de/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types#distance_units) wie `px`, `rem`, `deg`, `s` usw. sein.

        ```css
        attr(data-size rem)
        attr(data-width px, inherit)
        attr(data-rotation deg)
        ```

- `<fallback-value>`
  - : Der zu verwendende Wert, wenn das angegebene Attribut fehlt oder einen ungültigen Wert enthält.

### Rückgabewert

Der Rückgabewert von `attr()` ist der Wert des HTML-Attributs, dessen Name `<attr-name>` ist, geparst als der angegebene `<attr-type>` oder geparst als ein CSS-String.

Wenn ein `<attr-type>` festgelegt ist, versucht `attr()`, das Attribut in diesen angegebenen `<attr-type>` zu parsen und zurückzugeben. Wenn das Attribut nicht in den angegebenen `<attr-type>` geparst werden kann, wird stattdessen der `<fallback-value>` zurückgegeben. Wenn kein `<attr-type>` festgelegt ist, wird das Attribut in einen CSS-String geparst.

Wenn kein `<fallback-value>` festgelegt ist, wird der Rückgabewert auf eine leere Zeichenfolge voreingestellt, wenn kein `<attr-type>` festgelegt ist, oder auf den {{Glossary("guaranteed_invalid_value", "garantiert ungültigen Wert")}}, wenn ein `<attr-type>` festgelegt ist.

## Beschreibung

### Einschränkungen und Sicherheit

Die Funktion `attr()` kann auf Attribute verweisen, die nie für Stilisierungszwecke vorgesehen waren und möglicherweise sensible Informationen enthalten (zum Beispiel ein Sicherheitstoken, das von Skripten auf der Seite verwendet wird). Im Allgemeinen ist das in Ordnung, kann jedoch ein Sicherheitsrisiko darstellen, wenn es in URLs verwendet wird.

Aus diesem Grund können Sie `attr()` nicht verwenden, um URLs dynamisch zu konstruieren:

```html example-bad
<!-- This won't work! -->
<span data-icon="https://example.org/icons/question-mark.svg">help</span>
```

```css example-bad
span[data-icon] {
  background-image: url(attr(data-icon));
}
```

Diese Einschränkung gilt auch für jeden Kontext, der möglicherweise in einem `<url>`-Wert resultieren könnte.
Werte, die `attr()` verwenden, werden als _`attr()`-kontaminiert_ markiert, und ihre Verwendung als oder in einem `<url>` macht eine Deklaration zu ["invalid at computed value time" (IACVT)](https://www.bram.us/2024/02/26/css-what-is-iacvt/).

Funktionen wie {{CSSxRef("image/image-set","image-set()")}}, die Werte annehmen, die zu `<url>` aufgelöst werden, funktionieren daher ebenfalls nicht:

```css example-bad
span[data-icon] {
  background: image-set(attr(data-icon));
}
```

### Abwärtskompatibilität

Im Allgemeinen ist die moderne `attr()`-Syntax abwärtskompatibel, da die alte Art der Verwendung — ohne Angabe eines `<attr-type>` — sich genauso verhält wie zuvor. `attr(data-attr)` in Ihrem Code zu haben, ist dasselbe wie `attr(data-attr type(<string>))` oder `attr(data-attr string)` zu schreiben.

Es gibt jedoch zwei Grenzfälle, in denen sich die moderne `attr()`-Syntax von der alten Syntax unterscheidet.

Im folgenden Snippet verwerfen Browser, die die moderne `attr()`-Syntax nicht unterstützen, die zweite Deklaration, da sie diese nicht parsen können. Das Ergebnis in diesen Browsern ist `"Hello World"`.

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

In Browsern mit Unterstützung für die moderne Syntax wird die Ausgabe … nichts sein. Diese Browser parsen die zweite Deklaration erfolgreich, aber da es sich um einen ungültigen Inhalt für die `content`-Eigenschaft handelt, wird die Deklaration zu ["invalid at computed value time" oder kurz IACVT](https://www.bram.us/2024/02/26/css-what-is-iacvt/).

Um diese Art von Situation zu vermeiden, wird [Feature Detection](#feature_detection) empfohlen.

Ein zweiter Grenzfall ist der folgende:

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

Browser ohne Unterstützung für die moderne Syntax zeigen den Text `"foo"` an. In Browsern mit moderner `attr()`-Unterstützung gibt es keine Ausgabe.

Dies liegt daran, dass `attr()` — ähnlich wie benutzerdefinierte Eigenschaften, die die Funktion `var()` verwenden — zur [Berechnungszeit](https://www.bram.us/2024/02/26/css-what-is-iacvt/#custom-properties) substituiert wird. Mit dem modernen Verhalten versucht `--x` zuerst, das `data-attr`-Attribut aus dem `#parent`-Element zu lesen, was zu einer leeren Zeichenfolge führt, weil kein solches Attribut auf `#parent` vorhanden ist. Diese leere Zeichenfolge wird dann vom `#child`-Element geerbt, was zu einer `content: ;`-Deklaration führt.

Um diese Art von Situation zu vermeiden, verwenden Sie keine geerbten `attr()`-Werte in untergeordneten Elementen, es sei denn, Sie möchten es ausdrücklich.

### Feature Detection

Sie können die Unterstützung für moderne `attr()`-Syntax mit der {{CSSxRef("@supports")}}-Regel erkennen. Testen Sie dabei, einem erweiterten `attr()`-Ausdruck eine (nicht benutzerdefinierte) CSS-Eigenschaft zuzuweisen.

Beispiel:

```css
@supports (x: attr(x type(*))) {
  /* Browser has modern attr() support */
}

@supports not (x: attr(x type(*))) {
  /* Browser does not have modern attr() support */
}
```

Den gleichen Test können wir in JavaScript mit [`CSS.supports()`](/de/docs/Web/API/CSS/supports_static) durchführen:

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

### content-Eigenschaft

In diesem Beispiel fügen wir den Wert des `data-foo` [`data-*`](/de/docs/Web/HTML/Reference/Global_attributes/data-*) [globalen Attributs](/de/docs/Web/HTML/Reference/Global_attributes) zum Inhalt des {{HTMLElement("p")}}-Elements hinzu.

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

### Verwendung eines Fallback-Werts

{{SeeCompatTable}}

In diesem Beispiel fügen wir den Wert des `data-browser` [`data-*`](/de/docs/Web/HTML/Reference/Global_attributes/data-*) [globalen Attributs](/de/docs/Web/HTML/Reference/Global_attributes) zum {{HTMLElement("p")}}-Element hinzu. Wenn das `data-browser`-Attribut beim {{HTMLElement("p")}}-Element fehlt, fügen wir den _Fallback_-Wert "**Unknown**" hinzu.

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

{{EmbedLiveSample("using_fallback", "100%", 90)}}

### Farbwert

{{SeeCompatTable}}

In diesem Beispiel setzen wir den CSS-Wert von {{CSSXRef("background-color")}} auf den Wert des `data-background` [`data-*`](/de/docs/Web/HTML/Reference/Global_attributes/data-*) [globalen Attributs](/de/docs/Web/HTML/Reference/Global_attributes), das dem {{HTMLElement("div")}}-Element zugewiesen ist.

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

In diesem Beispiel wird das `data-rotation`-Attribut in eine `deg`-Einheit geparst, die die Rotation des Elements angibt.

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

### Parsen von `attr()`-Werten als `<custom-ident>`s

{{SeeCompatTable}}

In diesem Beispiel werden die Werte für die {{cssxref("view-transition-name")}}-Eigenschaft aus dem `id`-Attribut des Elements abgeleitet. Das Attribut wird in eine {{CSSxRef("&lt;custom-ident&gt;")}} geparst, was {{cssxref("view-transition-name")}} als Wert akzeptiert.

Die resultierenden Werte für {{cssxref("view-transition-name")}} sind `card-1`, `card-2`, `card-3` usw.

#### HTML

Das HTML enthält vier Karten mit unterschiedlichen `id`-Attributen und einen "Shuffle cards"-\<button>, der die Karten mischt.

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

Auf jeder Karte ruft die `attr()`-Funktion das `id`-Attribut ab und parst es in einen {{CSSxRef("&lt;custom-ident&gt;")}}, der als Wert für die {{cssxref("view-transition-name")}}-Eigenschaft verwendet wird. Wenn für eine Karte kein `id` festgelegt ist, wird stattdessen der Fallback-Wert `none` verwendet.

```css
.card {
  view-transition-name: attr(id type(<custom-ident>), none);
  view-transition-class: card;
}
```

#### JavaScript

Wenn der `<button>` gedrückt wird, werden die Karten gemischt. Dies geschieht, indem die Reihenfolge eines Arrays, das Referenzen zu allen Karten enthält, randomisiert und dann die {{CSSxRef("order")}}-Eigenschaft jeder Karte auf ihre neue Array-Indexposition aktualisiert wird.

Um jede Karte an ihre neue Position zu animieren, werden [Ansichtsübergänge](/de/docs/Web/API/View_Transition_API/Using) verwendet. Dies geschieht, indem die `order`-Aktualisierung in einem Aufruf von [`document.startViewTransition`](/de/docs/Web/API/Document/startViewTransition) eingepackt wird.

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
- [HTML `data-*` Attribute](/de/docs/Web/HTML/Reference/Global_attributes/data-*)
- [SVG `data-*` Attribute](/de/docs/Web/SVG/Reference/Attribute/data-*)
