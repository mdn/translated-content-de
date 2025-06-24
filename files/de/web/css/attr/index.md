---
title: attr()
slug: Web/CSS/attr
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{CSSRef}}

> [!NOTE]
> Die `attr()`-Funktion kann mit jeder CSS-Eigenschaft verwendet werden, aber die Unterstützung für Eigenschaften außer {{CSSxRef("content")}} ist experimentell.

Die **`attr()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) wird verwendet, um den Wert eines Attributs des ausgewählten Elements abzurufen und ihn in einem Eigenschaftswert zu verwenden, ähnlich wie die {{cssxref("var", "var()")}}-Funktion einen benutzerdefinierten Eigenschaftswert ersetzt. Sie kann auch mit [Pseudo-Elementen](/de/docs/Web/CSS/Pseudo-elements) verwendet werden, wobei in diesem Fall der Wert des Attributs auf dem Ursprungs-Element des Pseudo-Elements zurückgegeben wird.

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
  - : Der Attributname, dessen Wert von dem ausgewählten HTML-Element abgerufen werden soll.
- `<attr-type>`

  - : Gibt an, wie der Attributswert in einen CSS-Wert geparst werden soll. Dies kann das Schlüsselwort `raw-string`, eine `type()`-Funktion oder eine CSS-Dimensionseinheit (angegeben mit einem `<attr-unit>`-Bezeichner) sein. Wird dieser Parameter weggelassen, ist die Standardeinstellung `raw-string`.

    - Das Schlüsselwort `raw-string` bewirkt, dass der literal Wert des Attributs als Wert eines CSS-Strings behandelt wird, ohne CSS-Parsen (einschließlich CSS-Escapes, Leerzeichenentfernung, Kommentare usw.). Der `<fallback-value>` wird nur verwendet, wenn das Attribut fehlt; eine Angabe eines leeren Wertes löst den Fallback nicht aus.

      ```css
      attr(data-name raw-string, "stranger")
      ```

      > [!NOTE]
      > Dieses Schlüsselwort wurde ursprünglich und in Chromium-Browsern als `string` unterstützt. Beide Schlüsselwörter werden kurzzeitig unterstützt, um die Rückwärtskompatibilität zu gewährleisten.

    - Die `type()`-Funktion nimmt ein `<syntax>` als Argument, das angibt, in welchen [Datentyp](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types) der Wert geparst werden soll. Das `<syntax>` kann {{CSSxRef("&lt;angle&gt;")}}, {{CSSxRef("&lt;color&gt;")}}, {{CSSxRef("&lt;custom-ident&gt;")}}, {{CSSxRef("&lt;image&gt;")}}, {{CSSxRef("&lt;integer&gt;")}}, {{CSSxRef("&lt;length&gt;")}}, {{CSSxRef("&lt;length-percentage&gt;")}}, {{CSSxRef("&lt;number&gt;")}}, {{CSSxRef("&lt;percentage&gt;")}}, {{CSSxRef("&lt;resolution&gt;")}}, {{CSSxRef("&lt;string&gt;")}}, {{CSSxRef("&lt;time&gt;")}}, {{CSSxRef("&lt;transform-function&gt;")}} oder eine Kombination davon sein.

      ```css
      attr(id type(<custom-ident>), none)
      attr(data-count type(<number>), 0)
      ```

      Um mehrere Typen zu akzeptieren, listen Sie alle erlaubten `<syntax>`es in der `type()`-Funktion durch ein `|` getrennt auf.

      ```css
      attr(data-size type(<length> | <percentage>), 0px)
      ```

      > [!NOTE]
      > Aus [Sicherheitsgründen](#einschränkungen_und_sicherheit) ist {{CSSxRef("url_value", "&lt;url&gt;")}} nicht als `<syntax>` erlaubt.

      Um jeden Datentyp zu akzeptieren, verwenden Sie `*` als Typ. Dies löst dennoch das CSS-Parsen aus, ohne Anforderungen daran abzuleiten, außer dass es gültig geparst wird und das Ergebnis dieses Parsens direkt als Token substituiert wird, anstatt als `<string>`-Wert.

      ```css
      attr(data-content type(*))
      ```

    - Der `<attr-unit>`-Bezeichner gibt die Einheit an, die ein numerischer Wert haben soll (falls vorhanden). Es kann das `%`-Zeichen (Prozent) oder eine [CSS-Distanzeinheit](/de/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types#distance_units) wie `px`, `rem`, `deg`, `s` etc. sein.

      ```css
      attr(data-size rem)
      attr(data-width px, inherit)
      attr(data-rotation deg)
      ```

- `<fallback-value>`
  - : Der Wert, der verwendet werden soll, wenn das angegebene Attribut fehlt oder einen ungültigen Wert enthält.

### Rückgabewert

Der Rückgabewert von `attr()` ist der Wert des HTML-Attributs, dessen Name `<attr-name>` ist, geparst als der angegebene `<attr-type>` oder als CSS-String.

Wenn ein `<attr-type>` festgelegt ist, versucht `attr()`, das Attribut in diesen angegebenen `<attr-type>` zu parsen und es zurückzugeben. Wenn das Attribut nicht in den angegebenen `<attr-type>` geparst werden kann, wird stattdessen der `<fallback-value>` zurückgegeben. Wenn kein `<attr-type>` festgelegt ist, wird das Attribut als CSS-String geparst.

Wenn kein `<fallback-value>` gesetzt ist, wird der Rückgabewert standardmäßig ein leerer String sein, wenn kein `<attr-type>` gesetzt ist, oder der {{Glossary("guaranteed_invalid_value", "garantiert ungültige Wert")}}, wenn ein `<attr-type>` gesetzt ist.

## Beschreibung

### Einschränkungen und Sicherheit

Die `attr()`-Funktion kann auf Attribute verweisen, die vom Seitenautor niemals zur Verwendung für Stilzwecke vorgesehen waren und möglicherweise sensible Informationen enthalten (zum Beispiel ein Sicherheitstoken, das von Skripten auf der Seite verwendet wird). Im Allgemeinen ist das unproblematisch, kann jedoch zu einem Sicherheitsrisiko werden, wenn es in URLs verwendet wird. Daher kann `attr()` nicht verwendet werden, um URLs dynamisch zu erstellen.

```html
<!-- This won't work! -->
<span data-icon="https://example.org/icons/question-mark.svg">help</span>
```

```css
span[data-icon] {
  background-image: url(attr(data-icon));
}
```

Werte, die `attr()` verwenden, werden als _`attr()`-gezeichnet_ markiert. Wenn ein `attr()`-gezeichneter Wert als `<url>` verwendet wird, wird die Deklaration als ["invalid at computed value time" oder IACVT abgekürzt](https://www.bram.us/2024/02/26/css-what-is-iacvt/) ungültig.

### Rückwärtskompatibilität

Im Allgemeinen ist die moderne `attr()`-Syntax rückwärtskompatibel, da die alte Art ihrer Verwendung — ohne Angabe eines `<attr-type>` — sich genauso verhält wie zuvor. Wenn Sie `attr(data-attr)` in Ihrem Code haben, entspricht das dem Schreiben von `attr(data-attr type(<string>))` oder dem einfacheren `attr(data-attr string))`.

Es gibt jedoch zwei Grenzfälle, bei denen sich die moderne `attr()`-Syntax anders verhält als die alte Syntax.

Im folgenden Codeausschnitt werden Browser, die die moderne `attr()`-Syntax nicht unterstützen, die zweite Deklaration verwerfen, da sie diese nicht parsen können. Das Ergebnis in diesen Browsern ist `"Hello World"`.

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

In Browsern mit Unterstützung für die moderne Syntax wird die Ausgabe … nichts sein. Diese Browser werden die zweite Deklaration erfolgreich parsen, aber da sie ungültiger Inhalt für die `content`-Eigenschaft ist, wird die Deklaration als ["invalid at computed value time" oder IACVT abgekürzt](https://www.bram.us/2024/02/26/css-what-is-iacvt/) ungültig.

Um solche Situationen zu vermeiden, wird die [Funktionsüberprüfung](#funktionsüberprüfung) empfohlen.

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

Dies liegt daran, dass `attr()` — ähnlich wie benutzerdefinierte Eigenschaften, die die `var()`-Funktion verwenden — zum [computed value time](https://www.bram.us/2024/02/26/css-what-is-iacvt/#custom-properties) ersetzt werden. Mit dem modernen Verhalten versucht `--x` zuerst, das `data-attr`-Attribut vom `#parent`-Element zu lesen, was zu einem leeren String führt, da es kein solches Attribut auf `#parent` gibt. Dieser leere String wird dann vom `#child`-Element geerbt, was dazu führt, dass eine `content: ;`-Deklaration gesetzt wird.

Um solche Situationen zu vermeiden, übergeben Sie keine geerbten `attr()`-Werte an Kinder, es sei denn, Sie möchten dies explizit.

### Funktionsüberprüfung

Sie können die Unterstützung für die moderne `attr()`-Syntax mithilfe der {{CSSxRef("@supports")}}-At-Regel überprüfen. Im Test versuchen Sie, erweiterte `attr()` in einer (nicht-benutzerdefinierten) CSS-Eigenschaft zuzuweisen.

Beispielsweise:

```css
@supports (x: attr(x type(*))) {
  /* Browser has modern attr() support */
}

@supports not (x: attr(x type(*))) {
  /* Browser does not have modern attr() support */
}
```

Wir können die gleiche Überprüfung in JavaScript mit [`CSS.supports()`](/de/docs/Web/API/CSS/supports_static) durchführen:

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

### Content-Eigenschaft

In diesem Beispiel stellen wir den Wert des `data-foo`-[`data-*`](/de/docs/Web/HTML/Reference/Global_attributes/data-*)[global attribute](/de/docs/Web/HTML/Reference/Global_attributes) vor den Inhalt des {{HTMLElement("p")}}-Elements.

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

In diesem Beispiel hängen wir den Wert des `data-browser`-[`data-*`](/de/docs/Web/HTML/Reference/Global_attributes/data-*)[global attribute](/de/docs/Web/HTML/Reference/Global_attributes) an das {{HTMLElement("p")}}-Element an. Wenn das `data-browser`-Attribut im {{HTMLElement("p")}}-Element fehlt, fügen wir den _Fallback_-Wert "**Unknown**" hinzu.

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

In diesem Beispiel setzen wir den CSS-Wert von {{CSSXRef("background-color")}} auf den Wert des `data-background`-[`data-*`](/de/docs/Web/HTML/Reference/Global_attributes/data-*)[global attribute](/de/docs/Web/HTML/Reference/Global_attributes), das dem {{HTMLElement("div")}}-Element zugewiesen wurde.

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

In diesem Beispiel wird das `data-rotation`-Attribut in eine `deg`-Einheit geparst, die die Drehung des Elements angibt.

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

In diesem Beispiel werden die Werte für die {{cssxref("view-transition-name")}}-Eigenschaft aus dem `id`-Attribut des Elements abgeleitet. Das Attribut wird in ein {{CSSxRef("&lt;custom-ident&gt;")}} geparst, das von {{cssxref("view-transition-name")}} als Wert akzeptiert wird.

Die resultierenden Werte für {{cssxref("view-transition-name")}} sind `card-1`, `card-2`, `card-3` usw.

#### HTML

Das HTML enthält vier Karten mit verschiedenen `id`-Attributen und einen "Shuffle cards" `<button>`, der die Karten mischt.

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

Auf jeder Karte wird mit der `attr()`-Funktion das `id`-Attribut abgerufen und in ein {{CSSxRef("&lt;custom-ident&gt;")}} geparst, das als Wert für die {{cssxref("view-transition-name")}}-Eigenschaft verwendet wird. Wenn auf einer Karte kein `id` gesetzt ist, wird stattdessen der Fallback-Wert `none` verwendet.

```css
.card {
  view-transition-name: attr(id type(<custom-ident>), none);
  view-transition-class: card;
}
```

#### JavaScript

Wenn der `<button>` gedrückt wird, werden die Karten gemischt. Dies geschieht, indem die Reihenfolge eines Arrays mit Verweisen auf alle Karten zufällig geändert wird und anschließend die {{CSSxRef("order")}}-Eigenschaft jeder Karte auf ihre neue Array-Indexposition aktualisiert wird.

Um jede Karte zu ihrer neuen Position zu animieren, werden [Ansichtsübergänge](/de/docs/Web/API/View_Transition_API/Using) verwendet. Dies geschieht, indem das `order`-Update in einem Aufruf von [`document.startViewTransition`](/de/docs/Web/API/Document/startViewTransition) eingeschlossen wird.

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

- [Attributselektoren](/de/docs/Web/CSS/Attribute_selectors)
- [HTML `data-*`-Attribute](/de/docs/Web/HTML/Reference/Global_attributes/data-*)
- [SVG `data-*`-Attribute](/de/docs/Web/SVG/Reference/Attribute/data-*)
