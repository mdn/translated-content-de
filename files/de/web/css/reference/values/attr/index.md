---
title: attr()
slug: Web/CSS/Reference/Values/attr
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

> [!NOTE]
> Die `attr()`-Funktion kann mit jeder CSS-Eigenschaft verwendet werden, aber die Unterstützung für andere Eigenschaften als {{CSSxRef("content")}} ist experimentell.

Die **`attr()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/Reference/Values/Functions) wird verwendet, um den Wert eines Attributs des ausgewählten Elements abzurufen und ihn in einem Eigenschaftswert zu verwenden, ähnlich wie die {{cssxref("var()")}}-Funktion einen benutzerdefinierten Eigenschaftswert ersetzt. Sie kann auch mit [Pseudo-Elementen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) verwendet werden, wobei der Attributwert des Ursprungs-Elements des Pseudo-Elements zurückgegeben wird.

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
```

### Parameter

Die Syntax der `attr()`-Funktion ist wie folgt:

```plain
attr(<attr-name> <attr-type>? , <fallback-value>?)
```

Die Parameter sind:

- `<attr-name>`
  - : Der Attributname, dessen Wert von dem/den ausgewählten HTML-Element(en) abgerufen werden soll.
- `<attr-type>`
  - : Gibt an, wie der Attributwert in einen CSS-Wert geparst wird. Dies kann das Schlüsselwort `raw-string`, eine {{cssxref("type()")}}-Funktion oder eine CSS-Dimensionseinheit (angegeben mit einem `<attr-unit>`-Bezeichner) sein. Wenn es weggelassen wird, wird es standardmäßig als `raw-string` behandelt.
    - `raw-string`
      - : Das Schlüsselwort `raw-string` bewirkt, dass der wörtliche Wert des Attributs als Wert eines CSS-Strings behandelt wird, ohne dass eine CSS-Analyse durchgeführt wird (einschließlich CSS-Escapes, Leerzeichenentfernung, Kommentare usw.). Der `<fallback-value>` wird nur verwendet, wenn das Attribut weggelassen wird; ein leerer Wert löst nicht den Rückfall aus.

        ```css
        attr(data-name raw-string, "stranger")
        ```

        > [!NOTE]
        > Dieses Schlüsselwort wurde ursprünglich in Chromium-Browsern als `string` benannt und unterstützt. Beide Schlüsselwörter werden kurzzeitig unterstützt, um die Rückwärtskompatibilität zu gewährleisten.

    - {{cssxref("type()")}}
      - : Die `type()`-Funktion nimmt ein `<syntax>` als Argument, das angibt, in welchen Datentyp der Wert geparst werden soll.
        > [!NOTE]
        > Aus [Sicherheitsgründen](#einschränkungen_und_sicherheit) ist {{CSSxRef("url_value", "&lt;url&gt;")}} als `attr()`-Datentyp nicht erlaubt.

    - `<attr-unit>`
      - : Der `<attr-unit>`-Bezeichner gibt die Einheit an, die ein numerischer Wert haben sollte (falls vorhanden). Es kann das `%`-Zeichen (Prozentsatz) oder eine [CSS-Distanz-Einheit](/de/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types#distance_units) wie `px`, `rem`, `deg`, `s` usw. sein.

        ```css
        attr(data-size rem)
        attr(data-width px, inherit)
        attr(data-rotation deg)
        ```

- `<fallback-value>`
  - : Der Wert, der verwendet wird, wenn das angegebene Attribut fehlt oder einen ungültigen Wert enthält.

### Rückgabewert

Der Rückgabewert von `attr()` ist der Wert des HTML-Attributs, dessen Name `<attr-name>` ist, geparst als der angegebene `<attr-type>` oder geparst als ein CSS-String.

Wenn ein `<attr-type>` festgelegt ist, versucht `attr()`, das Attribut in diesen angegebenen `<attr-type>` zu parsen und es zurückzugeben. Wenn das Attribut nicht in den gegebenen `<attr-type>` geparst werden kann, wird der `<fallback-value>` stattdessen zurückgegeben. Wenn kein `<attr-type>` festgelegt ist, wird das Attribut in einen CSS-String geparst.

Wenn kein `<fallback-value>` festgelegt ist, wird der Rückgabewert standardmäßig auf einen leeren String gesetzt, wenn kein `<attr-type>` festgelegt ist, oder auf den {{Glossary("guaranteed_invalid_value", "garantie-ungültigen Wert")}}, wenn ein `<attr-type>` festgelegt ist.

## Beschreibung

### Einschränkungen und Sicherheit

Die `attr()`-Funktion kann auf Attribute verweisen, die nie für die stilistische Verwendung vorgesehen waren und möglicherweise sensible Informationen enthalten (zum Beispiel ein Sicherheitstoken, das von Skripten auf der Seite verwendet wird). Im Allgemeinen ist das in Ordnung, aber es kann zu einem Sicherheitsrisiko werden, wenn es in URLs verwendet wird. Daher können Sie `attr()` nicht verwenden, um URLs dynamisch zu konstruieren.

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
Einige Funktionen — wie {{CSSxRef("image/image-set","image-set()")}} — können einen `<string>`-Wert akzeptieren, der später als URL interpretiert wird, sodass `attr()` in diesen Kontexten funktionieren kann, abhängig von der Unterstützung des Browsers:

```css
span[data-icon] {
  background: image-set(attr(data-icon));
}
```

Werte, die `attr()` verwenden, werden als _`attr()`-gekennzeichnet_ gekennzeichnet. Die Verwendung eines `attr()`-gekennzeichneten Wertes als oder in einem `<url>` macht eine Deklaration [„ungültig zur Berechnungszeit“ oder kurz IACVT](https://www.bram.us/2024/02/26/css-what-is-iacvt/).

### Rückwärtskompatibilität

Im Allgemeinen ist die moderne `attr()`-Syntax rückwärtskompatibel, da die alte Methode, sie zu verwenden — ohne `<attr-type>` anzugeben — sich gleich verhält wie zuvor. In Ihrem Code `attr(data-attr)` ist dasselbe, als ob Sie `attr(data-attr type(<string>))` oder das einfachere `attr(data-attr string))` schreiben.

Es gibt jedoch zwei Grenzfälle, in denen sich die moderne `attr()`-Syntax anders verhält als die alte Syntax.

Im folgenden Codeausschnitt werden Browser, die die moderne `attr()`-Syntax nicht unterstützen, die zweite Deklaration verwerfen, weil sie sie nicht parsen können. Das Ergebnis in diesen Browsern ist `"Hello World"`.

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

In Browsern mit Unterstützung für die moderne Syntax wird die Ausgabe ... nichts sein. Diese Browser werden die zweite Deklaration erfolgreich parsen, aber da sie für die `content`-Eigenschaft ungültiger Inhalt ist, wird die Deklaration [„ungültig zur Berechnungszeit“ oder kurz IACVT](https://www.bram.us/2024/02/26/css-what-is-iacvt/) werden.

Um diese Art von Situation zu vermeiden, wird [Funktionsdetektion](#funktionsdetektion) empfohlen.

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

Dies liegt daran, dass `attr()` — ähnlich wie benutzerdefinierte Eigenschaften, die die `var()`-Funktion verwenden — zur [Berechnungszeit](https://www.bram.us/2024/02/26/css-what-is-iacvt/#custom-properties) ersetzt wird. Mit dem modernen Verhalten versucht `--x` zuerst, das `data-attr`-Attribut vom `#parent`-Element zu lesen, was zu einem leeren String führt, da es kein solches Attribut auf `#parent` gibt. Dieser leere String wird dann vom `#child`-Element geerbt, was zu einer `content: ;`-Deklaration führt.

Um solche Situationen zu vermeiden, geben Sie keine geerbten `attr()`-Werte an Kinder weiter, es sei denn, Sie wollen dies ausdrücklich.

### Funktionsdetektion

Sie können die Unterstützung für moderne `attr()`-Syntax mit der {{CSSxRef("@supports")}}-Regel erkennen. Im Test versuchen Sie, eine erweiterte `attr()`-Funktion einer (nicht benutzerdefinierten) CSS-Eigenschaft zuzuweisen.

Zum Beispiel:

```css
@supports (x: attr(x type(*))) {
  /* Browser has modern attr() support */
}

@supports not (x: attr(x type(*))) {
  /* Browser does not have modern attr() support */
}
```

Wir können denselben Test in JavaScript mit [`CSS.supports()`](/de/docs/Web/API/CSS/supports_static) durchführen:

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

In diesem Beispiel fügen wir den Wert des `data-foo`-[`data-*`](/de/docs/Web/HTML/Reference/Global_attributes/data-*)-[globalen Attributs](/de/docs/Web/HTML/Reference/Global_attributes) vor den Inhalt des {{HTMLElement("p")}}-Elements ein.

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

### Verwendung eines Fallback-Wertes

{{SeeCompatTable}}

In diesem Beispiel fügen wir den Wert des `data-browser`-[`data-*`](/de/docs/Web/HTML/Reference/Global_attributes/data-*)-[globalen Attributs](/de/docs/Web/HTML/Reference/Global_attributes) dem {{HTMLElement("p")}}-Element hinzu. Wenn das `data-browser`-Attribut dem {{HTMLElement("p")}}-Element fehlt, fügen wir den _Fallback_-Wert "**Unknown**" hinzu.

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

### color-Wert

{{SeeCompatTable}}

In diesem Beispiel setzen wir den CSS-Wert von {{CSSXRef("background-color")}} auf den Wert des `data-background`-[`data-*`](/de/docs/Web/HTML/Reference/Global_attributes/data-*)-[globalen Attributs](/de/docs/Web/HTML/Reference/Global_attributes), das dem {{HTMLElement("div")}}-Element zugewiesen ist.

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

In diesem Beispiel wird das `data-rotation`-Attribut in eine `deg`-Einheit geparst, die die Rotation des Elements spezifiziert.

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

In diesem Beispiel werden die Werte für die {{cssxref("view-transition-name")}}-Eigenschaft aus dem `id`-Attribut des Elements abgeleitet. Das Attribut wird in ein {{CSSxRef("&lt;custom-ident&gt;")}} geparst, das ist, was {{cssxref("view-transition-name")}} als Wert akzeptiert.

Die resultierenden Werte für {{cssxref("view-transition-name")}} sind `card-1`, `card-2`, `card-3` usw.

#### HTML

Das HTML enthält vier Karten mit unterschiedlichen `id`-Attributen und einen "Shuffle cards"-`<button>`, der die Karten mischt.

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
    this demo won’t do anything.
  </p>
</div>
```

#### CSS

Die Karten sind in einem flexiblen Container angeordnet:

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

Auf jeder Karte holt die `attr()`-Funktion das `id`-Attribut und parst es in ein {{CSSxRef("&lt;custom-ident&gt;")}}, das als Wert für die {{cssxref("view-transition-name")}}-Eigenschaft verwendet wird. Wenn es auf einer Karte kein `id` gibt, wird stattdessen der Fallback-Wert `none` verwendet.

```css
.card {
  view-transition-name: attr(id type(<custom-ident>), none);
  view-transition-class: card;
}
```

#### JavaScript

Wenn die `<button>` gedrückt wird, werden die Karten gemischt. Dies geschieht, indem die Reihenfolge eines Arrays mit Referenzen zu allen Karten zufällig geändert wird und dann die {{CSSxRef("order")}}-Eigenschaft jeder Karte auf ihre neue Array-Index-Position aktualisiert wird.

Um jede Karte zu ihrer neuen Position zu animieren, werden [View Transitions](/de/docs/Web/API/View_Transition_API/Using) verwendet. Dies geschieht, indem das `order`-Update in ein Aufruf von [`document.startViewTransition`](/de/docs/Web/API/Document/startViewTransition) eingebettet wird.

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
