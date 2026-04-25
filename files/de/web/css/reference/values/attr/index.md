---
title: "`attr()` CSS-Funktion"
short-title: attr()
slug: Web/CSS/Reference/Values/attr
l10n:
  sourceCommit: b760560abe30bd69ca968dac38528102f423b5ea
---

> [!NOTE]
> Die `attr()`-Funktion kann mit jeder CSS-Eigenschaft verwendet werden, aber die Unterstützung für andere Eigenschaften als {{CSSxRef("content")}} ist experimentell.

Die **`attr()`** [CSS](/de/docs/Web/CSS)-[Funktion](/de/docs/Web/CSS/Reference/Values/Functions) wird verwendet, um den Wert eines Attributs des ausgewählten Elements abzurufen und in einem Eigenschaftswert zu verwenden, ähnlich wie die {{cssxref("var()")}}-Funktion einen benutzerdefinierten Eigenschaftswert ersetzt. Sie kann auch mit [Pseudoelementen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) verwendet werden, wobei in diesem Fall der Attributwert des Herkunftselements des Pseudoelements zurückgegeben wird.

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
  - : Der Attributname, dessen Wert von dem/den ausgewählten HTML-Element(en) abgerufen werden soll.
    - Namespaces
      - : Der Attributname kann einen [`Namespace`](/de/docs/Web/CSS/Guides/Namespaces) enthalten, der es erlaubt, Elemente von [XML](/de/docs/Web/XML)-basierten Markupsprachen wie [SVG](/de/docs/Web/SVG) oder [MathML](/de/docs/Web/MathML) anzusprechen.

        ```css
        @namespace svg url("http://www.w3.org/2000/svg");
        a {
          fill: attr(svg|myattr type(*), green);
        }
        ```

        > [!NOTE]
        > Wenn kein Namespace angegeben wird (nur ein Bezeichner wie `attr(foo)`), wird der Null-Namespace angenommen. Dies ist in der Regel gewünscht, da namensbasierte Attribute selten sind. Wie bei Attributselektoren hängt die Groß- und Kleinschreibung von `<attr-name>` von der Dokumentensprache ab.

- `<attr-type>`
  - : Gibt an, wie der Attributwert in einen CSS-Wert analysiert wird. Dies kann das `raw-string`-Schlüsselwort, eine {{cssxref("type()")}}-Funktion oder eine CSS-Dimensionseinheit sein, die mit einem `<attr-unit>`-Bezeichner angegeben wird. Wird sie weggelassen, wird `raw-string` als Standard verwendet.
    - `raw-string`
      - : Das `raw-string`-Schlüsselwort bewirkt, dass der Literalwert des Attributs als Wert eines CSS-Strings behandelt wird, ohne CSS-Parsing (einschließlich CSS-Escapes, Leerzeichenentfernung, Kommentare usw.). Der `<fallback-value>` wird nur verwendet, wenn das Attribut fehlt; die Angabe eines leeren Werts löst die Rückfalllösung nicht aus.

        ```css
        attr(data-name raw-string, "stranger")
        ```

        > [!NOTE]
        > Dieses Schlüsselwort wurde ursprünglich in Chromium-Browsern als `string` benannt und unterstützt. Beide Schlüsselwörter werden kurzzeitig aus Gründen der Abwärtskompatibilität unterstützt.

    - {{cssxref("type()")}}
      - : Die `type()`-Funktion nimmt ein `<syntax>` als Argument an, das angibt, in welchen Datentyp der Wert analysiert werden soll.
        > [!NOTE]
        > Aus [Sicherheitsgründen](#einschränkungen_und_sicherheit) ist {{CSSxRef("url_value", "&lt;url&gt;")}} als `attr()`-Datentyp nicht erlaubt.

    - `<attr-unit>`
      - : Der `<attr-unit>`-Bezeichner gibt die Einheit an, die ein numerischer Wert haben sollte (falls vorhanden). Es kann sich um das `%`-Zeichen (Prozentsatz) oder um eine [CSS-Distanzeinheit](/de/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types#distance_units) wie `px`, `rem`, `deg`, `s` usw. handeln.

        ```css
        attr(data-size rem)
        attr(data-width px, inherit)
        attr(data-rotation deg)
        ```

- `<fallback-value>`
  - : Der Wert, der verwendet wird, wenn das angegebene Attribut fehlt oder einen ungültigen Wert enthält.

### Rückgabewert

Der Rückgabewert von `attr()` ist der Wert des HTML-Attributs, dessen Name `<attr-name>` ist, analysiert als der angegebene `<attr-type>` oder analysiert als CSS-String.

Wenn ein `<attr-type>` festgelegt ist, versucht `attr()`, das Attribut in diesen angegebenen `<attr-type>` zu analysieren und zurückzugeben. Wenn das Attribut nicht in den angegebenen `<attr-type>` analysiert werden kann, wird stattdessen der `<fallback-value>` zurückgegeben. Wenn kein `<attr-type>` festgelegt ist, wird das Attribut in einen CSS-String analysiert.

Wenn kein `<fallback-value>` festgelegt ist, wird der Rückgabewert standardmäßig ein leerer String, wenn kein `<attr-type>` festgelegt ist, oder der {{Glossary("guaranteed_invalid_value", "garantiert ungültige Wert")}}, wenn ein `<attr-type>` festgelegt ist.

## Beschreibung

### Einschränkungen und Sicherheit

Die `attr()`-Funktion kann auf Attribute verweisen, die nie zur Verwendung in der Gestaltung gedacht waren und möglicherweise sensible Informationen enthalten (z. B. ein Sicherheitstoken, das von Skripten auf der Seite verwendet wird). Im Allgemeinen ist dies in Ordnung, kann jedoch ein Sicherheitsrisiko werden, wenn es in URLs verwendet wird. Daher kann `attr()` nicht verwendet werden, um URLs dynamisch zu konstruieren.

```html
<!-- This won't work! -->
<span data-icon="https://example.org/icons/question-mark.svg">help</span>
```

```css
span[data-icon] {
  background-image: url(attr(data-icon));
}
```

Diese Einschränkung gilt jedoch nur für Stellen, die streng einen `<url>`-Typ erfordern.
Einige Funktionen – wie {{CSSxRef("image/image-set", "image-set()")}} – können einen `<string>`-Wert akzeptieren, der später als URL interpretiert wird, sodass `attr()` je nach Browser-Unterstützung in diesen Kontexten funktioniert:

```css
span[data-icon] {
  background: image-set(attr(data-icon));
}
```

Werte, die `attr()` verwenden, werden als _`attr()`-kontaminiert_ markiert. Die Verwendung eines `attr()`-kontaminierten Wertes als oder in einer `<url>` führt dazu, dass eine Deklaration ["invalid at computed value time" oder IACVT für kurze Zeit"](https://www.bram.us/2024/02/26/css-what-is-iacvt/) wird.

### Abwärtskompatibilität

Im Allgemeinen ist die moderne `attr()`-Syntax abwärtskompatibel, da die alte Verwendungsmethode – ohne Angabe eines `<attr-type>` – genauso funktioniert wie zuvor. Wenn Sie `attr(data-attr)` in Ihrem Code haben, ist dies dasselbe wie `attr(data-attr type(<string>))` oder das einfachere `attr(data-attr string)` zu schreiben.

Es gibt jedoch zwei Grenzfälle, in denen sich die moderne `attr()`-Syntax von der alten Syntax unterscheidet.

Im folgenden Snippet verwerfen Browser, die die moderne `attr()`-Syntax nicht unterstützen, die zweite Deklaration, da sie nicht analysiert werden kann. Das Ergebnis in diesen Browsern ist `"Hello World"`.

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

In Browsern mit Unterstützung für die moderne Syntax wird die Ausgabe … nichts sein. Diese Browser analysieren die zweite Deklaration erfolgreich, aber da ihr Inhalt für die `content`-Eigenschaft ungültig ist, wird die Deklaration ["invalid at computed value time" oder IACVT für kurze Zeit"](https://www.bram.us/2024/02/26/css-what-is-iacvt/).

Um diese Art von Situationen zu vermeiden, wird [Feature-Erkennung](#feature-erkennung) empfohlen.

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

Browser ohne Unterstützung für moderne Syntax zeigen den Text `"foo"` an. In Browsern mit moderner `attr()`-Unterstützung gibt es keine Ausgabe.

Das liegt daran, dass `attr()` – ähnlich wie benutzerdefinierte Eigenschaften, die die `var()`-Funktion verwenden – zur [berechneten Wertzeit](https://www.bram.us/2024/02/26/css-what-is-iacvt/#custom-properties) ersetzt wird. Mit dem modernen Verhalten versucht `--x` zuerst, das `data-attr`-Attribut vom `#parent`-Element zu lesen, was zu einem leeren String führt, da kein solches Attribut auf `#parent` vorhanden ist. Dieser leere String wird dann vom `#child`-Element geerbt, was zu einer `content: ;`-Deklaration führt.

Um diese Art von Situation zu vermeiden, sollten Sie keine geerbten `attr()`-Werte an Kinder weitergeben, es sei denn, Sie möchten dies ausdrücklich.

### Feature-Erkennung

Sie können die Unterstützung für moderne `attr()`-Syntax mit der {{CSSxRef("@supports")}}-At-Regel erkennen. Im Test versuchen Sie, ein erweitertes `attr()` einer (nicht benutzerdefinierten) CSS-Eigenschaft zuzuweisen.

Zum Beispiel:

```css
@supports (x: attr(x type(*))) {
  /* Browser has modern attr() support */
}

@supports not (x: attr(x type(*))) {
  /* Browser does not have modern attr() support */
}
```

Die gleiche Überprüfung kann in JavaScript mit [`CSS.supports()`](/de/docs/Web/API/CSS/supports_static) durchgeführt werden:

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

### `content`-Eigenschaft

In diesem Beispiel fügen wir den Wert des `data-foo`-[`data-*`](/de/docs/Web/HTML/Reference/Global_attributes/data-*) [globalen Attributs](/de/docs/Web/HTML/Reference/Global_attributes) vor dem Inhalt des {{HTMLElement("p")}}-Elements hinzu.

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

### Verwendung eines Rückfallwerts

{{SeeCompatTable}}

In diesem Beispiel fügen wir den Wert des `data-browser`-[`data-*`](/de/docs/Web/HTML/Reference/Global_attributes/data-*) [globalen Attributs](/de/docs/Web/HTML/Reference/Global_attributes) dem {{HTMLElement("p")}}-Element hinzu. Wenn das `data-browser`-Attribut beim {{HTMLElement("p")}}-Element fehlt, fügen wir den _Fallback_-Wert "**Unbekannt**" hinzu.

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

In diesem Beispiel setzen wir den CSS-Wert von {{CSSXRef("background-color")}} auf den Wert des `data-background`-[`data-*`](/de/docs/Web/HTML/Reference/Global_attributes/data-*) [globalen Attributs](/de/docs/Web/HTML/Reference/Global_attributes), das dem {{HTMLElement("div")}}-Element zugewiesen ist.

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

In diesem Beispiel wird das Attribut `data-rotation` in eine `deg`-Einheit analysiert, die die Drehung des Elements angibt.

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

### Analysieren von `attr()`-Werten als `<custom-ident>`s

{{SeeCompatTable}}

In diesem Beispiel leiten sich die Werte für die {{cssxref("view-transition-name")}}-Eigenschaft aus dem `id`-Attribut des Elements ab. Das Attribut wird in ein {{CSSxRef("&lt;custom-ident&gt;")}} analysiert, was {{cssxref("view-transition-name")}} als Wert akzeptiert.

Die resultierenden Werte für {{cssxref("view-transition-name")}} sind `card-1`, `card-2`, `card-3` usw.

#### HTML

Das HTML enthält vier Karten mit unterschiedlichen `id`-Attributen und einen "Karten mischen" `<button>`, der die Karten mischt.

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

Auf jeder Karte ruft die `attr()`-Funktion das `id`-Attribut ab und analysiert es in ein {{CSSxRef("&lt;custom-ident&gt;")}}, welches als Wert für die {{cssxref("view-transition-name")}}-Eigenschaft verwendet wird. Wenn kein `id` auf einer Karte gesetzt ist, wird stattdessen der Fallback-Wert `none` verwendet.

```css
.card {
  view-transition-name: attr(id type(<custom-ident>), none);
  view-transition-class: card;
}
```

#### JavaScript

Wenn der `<button>` gedrückt wird, werden die Karten gemischt. Dies geschieht, indem die Reihenfolge eines Arrays, das Verweise auf alle Karten enthält, zufällig bestimmt wird und anschließend die {{CSSxRef("order")}}-Eigenschaft jeder Karte auf ihre neue Array-Indexposition aktualisiert wird.

Um jede Karte zu ihrer neuen Position zu animieren, werden [View-Transitions](/de/docs/Web/API/View_Transition_API/Using) verwendet. Dies geschieht, indem das `order`-Update in einen Aufruf von [`document.startViewTransition`](/de/docs/Web/API/Document/startViewTransition) eingebettet wird.

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
