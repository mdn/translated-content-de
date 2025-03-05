---
title: attr()
slug: Web/CSS/attr
l10n:
  sourceCommit: 33a12980eb49cc795a41f15ec7a0181270ad3048
---

{{CSSRef}}

> [!NOTE]
> Die `attr()`-Funktion kann mit jeder CSS-Eigenschaft verwendet werden, aber die Unterstützung für andere Eigenschaften als {{CSSxRef("content")}} ist experimentell.

Die **`attr()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) wird verwendet, um den Wert eines Attributs des ausgewählten Elements abzurufen und in einem Eigenschaftswert zu verwenden, ähnlich wie die {{cssxref("var", "var()")}}-Funktion einen benutzerdefinierten Eigenschaftswert ersetzt. Sie kann auch mit [Pseudo-Elementen](/de/docs/Web/CSS/Pseudo-elements) verwendet werden, wobei in diesem Fall der Attributwert des Ursprungs-Elements des Pseudo-Elements zurückgegeben wird.

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
  Mozilla makes browsers, apps, code and tools that put people before profit.
</blockquote>

<blockquote cite="https://web.dev/about/">
  Google believes in an open, accessible, private, and secure web.
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
attr(data-name string)
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
  - : Der Attributname, dessen Wert von dem ausgewählten HTML-Element(en) abgerufen werden soll.
- `<attr-type>`

  - : Gibt an, wie der Attributwert in einen CSS-Wert umgewandelt wird. Dies kann das `string`-Schlüsselwort, eine `type()`-Funktion oder eine CSS-Dimensionseinheit sein. Wenn es weggelassen wird, wird es standardmäßig als `string` behandelt.

    - Das `string`-Schlüsselwort wandelt den Wert in eine CSS-Zeichenkette um.

      ```css
      attr(data-name string, "stranger")
      ```

    - Die `type()`-Funktion nimmt ein `<syntax>` als Argument, das angibt, in welchen [Datentyp](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types) der Wert umgewandelt werden soll. Das `<syntax>` kann {{CSSxRef("&lt;angle&gt;")}}, {{CSSxRef("&lt;color&gt;")}}, {{CSSxRef("&lt;custom-ident&gt;")}}, {{CSSxRef("&lt;image&gt;")}}, {{CSSxRef("&lt;integer&gt;")}}, {{CSSxRef("&lt;length&gt;")}}, {{CSSxRef("&lt;length-percentage&gt;")}}, {{CSSxRef("&lt;number&gt;")}}, {{CSSxRef("&lt;percentage&gt;")}}, {{CSSxRef("&lt;resolution&gt;")}}, {{CSSxRef("&lt;string&gt;")}}, {{CSSxRef("&lt;time&gt;")}}, {{CSSxRef("&lt;transform-function&gt;")}} oder eine Kombination davon sein.

      ```css
      attr(id type(<custom-ident>), none)
      attr(data-count type(<number>), 0)
      ```

      Um mehrere Typen zu akzeptieren, listen Sie alle erlaubten `<syntax>`es in der `type()`-Funktion, getrennt durch ein `|`.

      ```css
      attr(data-size type(<length> | <percentage>), 0px)
      ```

      Aus [Sicherheitsgründen](#einschränkungen_und_sicherheit) ist {{CSSxRef("url_value", "&lt;url&gt;")}} als `<syntax>` nicht erlaubt.

    - Der `<attr-unit>`-Bezeichner gibt an, welche Einheit ein numerischer Wert haben soll (falls vorhanden). Es kann das `%`-Zeichen (Prozentsatz) oder eine [CSS-Distanz-Einheit](/de/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types#distance_units) wie `px`, `rem`, `deg`, `s`, etc. sein.

      ```css
      attr(data-size rem)
      attr(data-width px, inherit)
      attr(data-rotation deg)
      ```

- `<fallback-value>`
  - : Der Wert, der verwendet werden soll, wenn das angegebene Attribut fehlt oder einen ungültigen Wert enthält.

### Rückgabewert

Der Rückgabewert von `attr()` ist der Wert des HTML-Attributs, dessen Name `<attr-name>` ist, geparst als der angegebene `<attr-type>` oder geparst als eine CSS-Zeichenkette.

Wenn ein `<attr-type>` gesetzt ist, versucht `attr()`, das Attribut in diesen angegebenen `<attr-type>` zu parsen und zurückzugeben. Wenn das Attribut nicht in den angegebenen `<attr-type>` geparst werden kann, wird stattdessen das `<fallback-value>` zurückgegeben. Wenn kein `<attr-type>` gesetzt ist, wird das Attribut in eine CSS-Zeichenkette geparst.

Wenn kein `<fallback-value>` gesetzt ist, wird der Rückgabewert standardmäßig eine leere Zeichenkette sein, wenn kein `<attr-type>` gesetzt ist oder der {{Glossary("guaranteed_invalid_value", "garantiert ungültige Wert")}}, wenn ein `<attr-type>` gesetzt ist.

## Beschreibung

### Einschränkungen und Sicherheit

Die `attr()`-Funktion kann auf Attribute verweisen, die vom Seitenautor nie für das Styling vorgesehen waren und möglicherweise sensible Informationen enthalten (z. B. ein Sicherheitstoken, das von Skripten auf der Seite verwendet wird). Im Allgemeinen ist das in Ordnung, aber es kann zu einer Sicherheitsbedrohung werden, wenn es in URLs verwendet wird. Sie können daher `attr()` nicht verwenden, um URLs dynamisch zu konstruieren.

```html
<!-- This won't work! -->
<span data-icon="https://example.org/icons/question-mark.svg">help</span>
<style>
  span[data-icon] {
    background-image: url(attr(data-icon));
  }
</style>
```

Werte, die `attr()` verwenden, werden als _"`attr()`-belastet"_ markiert. Die Verwendung eines `attr()`-belasteten Werts als oder in einem `<url>` macht eine Deklaration [„invalid at computed value time" oder kurz IACVT](https://brm.us/iacvt).

### Abwärtskompatibilität

Im Allgemeinen ist die moderne `attr()`-Syntax abwärtskompatibel, da die alte Art der Verwendung — ohne Angabe eines `<attr-type>` — sich wie vorher verhält. Das Vorhandensein von `attr(data-attr)` in Ihrem Code entspricht dem Schreiben von `attr(data-attr type(<string>))` oder dem einfacheren `attr(data-attr string))`.

Es gibt jedoch zwei Sonderfälle, in denen sich die moderne `attr()`-Syntax anders verhält als die alte Syntax.

Im folgenden Snippet verwerfen Browser, die die moderne `attr()`-Syntax nicht unterstützen, die zweite Deklaration, weil sie sie nicht parsen können. Das Ergebnis in diesen Browsern ist `"Hello World"`.

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

In Browsern mit Unterstützung für die moderne Syntax wird die Ausgabe … nichts sein. Diese Browser parsen die zweite Deklaration erfolgreich, aber da es sich um ungültigen Inhalt für die `content`-Eigenschaft handelt, wird die Deklaration ["invalid at computed value time" oder IACVT für kurz](https://brm.us/iacvt).

Um solche Situationen zu vermeiden, wird [Feature-Erkennung](#feature-erkennung) empfohlen.

Ein zweiter Sonderfall ist der folgende:

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

Das liegt daran, dass `attr()` — ähnlich wie benutzerdefinierte Eigenschaften, die die `var()`-Funktion verwenden — zur [Berechnungszeit](/de/docs/Web/API/Document/startViewTransition) ersetzt werden. Mit dem modernen Verhalten versucht `--x` zuerst, das `data-attr` Attribut vom `#parent` Element zu lesen, was zu einer leeren Zeichenkette führt, da auf `#parent` kein solches Attribut existiert. Diese leere Zeichenkette wird dann vom `#child` Element geerbt, wodurch eine `content: ;` Deklaration gesetzt wird.

Um solche Situationen zu vermeiden, geben Sie keine vererbten `attr()`-Werte an Kinder weiter, es sei denn, Sie wollen dies explizit.

### Feature-Erkennung

Sie können die Unterstützung für die moderne `attr()`-Syntax mit der {{CSSxRef("@supports")}} at-rule erkennen. Im Test versuchen Sie, eine erweiterte `attr()` einem (nicht-benutzerdefinierten) CSS-Eigenschaft zuzuweisen.

Zum Beispiel:

```css
@supports (x: attr(x type(*))) {
  /* Browser has modern attr() support */
}

@supports not (x: attr(x type(*))) {
  /* Browser does not have modern attr() support */
}
```

Wir können den gleichen Check in JavaScript mit [`CSS.supports()`](/de/docs/Web/API/CSS/supports_static) durchführen:

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

In diesem Beispiel fügen wir den Wert des `data-foo` [`data-*`](/de/docs/Web/HTML/Global_attributes/data-*) [globalen Attributs](/de/docs/Web/HTML/Global_attributes) dem Inhalt des {{HTMLElement("p")}}-Elements voran.

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

In diesem Beispiel fügen wir den Wert des `data-browser` [`data-*`](/de/docs/Web/HTML/Global_attributes/data-*) [globalen Attributs](/de/docs/Web/HTML/Global_attributes) dem {{HTMLElement("p")}}-Element hinzu. Wenn das `data-browser`-Attribut am {{HTMLElement("p")}}-Element fehlt, fügen wir den _Fallback_-Wert "**Unbekannt**" hinzu.

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

In diesem Beispiel setzen wir den CSS-Wert von {{CSSXRef("background-color")}} auf den Wert des `data-background` [`data-*`](/de/docs/Web/HTML/Global_attributes/data-*) [globalen Attributs](/de/docs/Web/HTML/Global_attributes), das dem {{HTMLElement("div")}} Element zugewiesen ist.

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

In diesem Beispiel wird das `data-rotation` Attribut in eine `deg` Einheit geparst, die die Rotation des Elements angibt.

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

In diesem Beispiel werden die Werte für die {{cssxref("view-transition-name")}} Eigenschaft aus dem `id`-Attribut des Elements abgeleitet. Das Attribut wird in ein {{CSSxRef("&lt;custom-ident&gt;")}} geparst, was {{cssxref("view-transition-name")}} als Wert akzeptiert.

Die resultierenden Werte für {{cssxref("view-transition-name")}} sind `card-1`, `card-2`, `card-3`, etc.

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
    You browser does not support advanced <code>attr()</code>. As a result, this
    demo won’t do anything.
  </p>
</div>
```

#### CSS

Die Karten sind in einem flex Container angeordnet:

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
    border: 1px solid #ccc;
    background: rgba(255 255 205 / 0.8);
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

Auf jeder Karte ruft die `attr()`-Funktion das `id`-Attribut ab und parst es in ein {{CSSxRef("&lt;custom-ident&gt;")}}, das als Wert für die {{cssxref("view-transition-name")}} Eigenschaft verwendet wird. Wenn kein `id` auf einer Karte gesetzt ist, wird stattdessen der Fallback-Wert `none` verwendet.

```css
.card {
  view-transition-name: attr(id type(<custom-ident>), none);
  view-transition-class: card;
}
```

#### JavaScript

Wenn der `<button>` gedrückt wird, werden die Karten gemischt. Dies geschieht, indem die Reihenfolge eines Arrays mit Referenzen zu allen Karten zufällig verändert wird, und dann die {{CSSxRef("order")}}-Eigenschaft jeder Karte auf ihre neue Array-Index-Position aktualisiert wird.

Um jede Karte zu ihrer neuen Position zu animieren, werden [View Transitions](/de/docs/Web/API/View_Transition_API/Using) verwendet. Dies geschieht, indem das `order`-Update in einem Aufruf von [`document.startViewTransition`](/de/docs/Web/API/Document/startViewTransition) zusammengefasst wird.

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

- [Attribut-Selektoren](/de/docs/Web/CSS/Attribute_selectors)
- [HTML `data-*` Attribute](/de/docs/Web/HTML/Global_attributes/data-*)
- [SVG `data-*` Attribute](/de/docs/Web/SVG/Attribute/data-*)
