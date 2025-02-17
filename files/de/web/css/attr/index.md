---
title: attr()
slug: Web/CSS/attr
l10n:
  sourceCommit: a075805de90029b65fa5cfcc8ea43737728320f5
---

{{CSSRef}}

> [!NOTE]
> Die `attr()`-Funktion kann mit jeder CSS-Eigenschaft verwendet werden, aber die Unterstützung für andere Eigenschaften als {{CSSxRef("content")}} ist experimentell.

Die **`attr()`**-[CSS](/de/docs/Web/CSS)-[Funktion](/de/docs/Web/CSS/CSS_Functions) wird verwendet, um den Wert eines Attributs des ausgewählten Elements abzurufen und in einem Eigenschaftswert zu verwenden, ähnlich wie die {{cssxref("var", "var()")}}-Funktion einen benutzerdefinierten Eigenschaftswert ersetzt. Sie kann auch mit [Pseudo-Elementen](/de/docs/Web/CSS/Pseudo-elements) verwendet werden, wobei in diesem Fall der Wert des Attributs des Ursprungs-Elements des Pseudo-Elements zurückgegeben wird.

{{EmbedInteractiveExample("pages/tabbed/function-attr.html", "tabbed-shorter")}}

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
  - : Der Name des Attributs, dessen Wert aus dem ausgewählten HTML-Element abgerufen werden soll.
- `<attr-type>`

  - : Gibt an, wie der Attributwert in einen CSS-Wert geparst wird. Dies kann das Schlüsselwort `string`, eine `type()`-Funktion oder eine CSS-Dimensionseinheit sein. Wenn es ausgelassen wird, lautet es standardmäßig `string`.

    - Das Schlüsselwort `string` parst den Wert in einen CSS-String.

      ```css
      attr(data-name string, "stranger")
      ```

    - Die `type()`-Funktion nimmt ein `<syntax>` als Argument, das angibt, in welchen [Datentyp](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types) der Wert geparst werden soll. Das `<syntax>` kann {{CSSxRef("&lt;angle&gt;")}}, {{CSSxRef("&lt;color&gt;")}}, {{CSSxRef("&lt;custom-ident&gt;")}}, {{CSSxRef("&lt;image&gt;")}}, {{CSSxRef("&lt;integer&gt;")}}, {{CSSxRef("&lt;length&gt;")}}, {{CSSxRef("&lt;length-percentage&gt;")}}, {{CSSxRef("&lt;number&gt;")}}, {{CSSxRef("&lt;percentage&gt;")}}, {{CSSxRef("&lt;resolution&gt;")}}, {{CSSxRef("&lt;string&gt;")}}, {{CSSxRef("&lt;time&gt;")}}, {{CSSxRef("&lt;transform-function&gt;")}}, oder eine Kombination davon sein.

      ```css
      attr(id type(<custom-ident>), none)
      attr(data-count type(<number>), 0)
      ```

      Um mehrere Typen zuzulassen, listen Sie alle erlaubten `<syntax>` getrennt durch ein `|` in der `type()`-Funktion auf.

      ```css
      attr(data-size type(<length> | <percentage>), 0px)
      ```

      Aus [Sicherheitsgründen](#einschränkungen_und_sicherheit) ist {{CSSxRef("url_value", "&lt;url&gt;")}} nicht als `<syntax>` erlaubt.

    - Der `<attr-unit>`-Bezeichner gibt die Einheit an, die ein numerischer Wert haben soll (falls vorhanden). Dies kann das Zeichen `%` (Prozent) oder eine [CSS-Distanz-Einheit](/de/docs/Web/CSS/CSS_Values_and_Units#distance_units) wie `px`, `rem`, `deg`, `s` usw. sein.

      ```css
      attr(data-size rem)
      attr(data-width px, inherit)
      attr(data-rotation deg)
      ```

- `<fallback-value>`
  - : Der Wert, der verwendet wird, wenn das angegebene Attribut fehlt oder einen ungültigen Wert enthält.

### Rückgabewert

Der Rückgabewert von `attr()` ist der Wert des HTML-Attributs mit dem Namen `<attr-name>`, geparst als der angegebene `<attr-type>` oder als CSS-String geparst.

Wenn ein `<attr-type>` festgelegt ist, versucht `attr()`, das Attribut in den angegebenen `<attr-type>` zu parsen und zurückzugeben. Kann das Attribut nicht in den angegebenen `<attr-type>` geparst werden, wird stattdessen der `<fallback-value>` zurückgegeben. Wenn kein `<attr-type>` festgelegt ist, wird das Attribut in einen CSS-String geparst.

Wenn kein `<fallback-value>` festgelegt ist, wird der Rückgabewert standardmäßig zu einem leeren String, wenn kein `<attr-type>` festgelegt ist, oder zum {{Glossary("guaranteed_invalid_value", "garantiert ungültigen Wert")}}, wenn ein `<attr-type>` festgelegt ist.

## Beschreibung

### Einschränkungen und Sicherheit

Die `attr()`-Funktion kann auf Attribute verweisen, die vom Seitenautor nie für die Verwendung in der Gestaltung vorgesehen waren und möglicherweise sensible Informationen enthalten (z. B. ein Sicherheitstoken, das von Skripten auf der Seite verwendet wird). Im Allgemeinen ist dies kein Problem, es kann aber ein Sicherheitsrisiko darstellen, wenn es in URLs verwendet wird. Daher kann `attr()` nicht zum dynamischen Erstellen von URLs verwendet werden.

```html
<!-- This won't work! -->
<span data-icon="https://example.org/icons/question-mark.svg">help</span>
<style>
  span[data-icon] {
    background-image: url(attr(data-icon));
  }
</style>
```

Werte, die `attr()` verwenden, werden als _"`attr()`-belastet"_ markiert. Wird ein belasteter `attr()`-Wert als Teil eines `<url>`s verwendet, wird eine Deklaration ["invalid at computed value time" oder kurz IACVT](https://brm.us/iacvt).

### Rückwärtskompatibilität

Im Allgemeinen ist die moderne `attr()`-Syntax rückwärtskompatibel, da die alte Verwendungsweise — ohne Angabe eines `<attr-type>` — genauso funktioniert wie zuvor. `attr(data-attr)` in Ihrem Code zu haben, entspricht `attr(data-attr type(<string>))` oder dem einfacheren `attr(data-attr string)`.

Es gibt jedoch zwei Randfälle, in denen sich die moderne `attr()`-Syntax anders verhält als die alte Syntax.

Im folgenden Beispiel verwerfen Browser, die die moderne `attr()`-Syntax nicht unterstützen, die zweite Deklaration, da sie diese nicht parsen können. Das Ergebnis in diesen Browsern lautet `"Hello World"`.

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

In Browsern mit Unterstützung für die moderne Syntax gibt es … nichts. Diese Browser parsen die zweite Deklaration erfolgreich, aber da sie ungültiger Inhalt für die `content`-Eigenschaft ist, wird die Deklaration ["invalid at computed value time" oder IACVT](https://brm.us/iacvt).

Um solche Situationen zu vermeiden, wird [Feature Detection](#feature_detection) empfohlen.

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

Browser ohne Unterstützung der modernen Syntax zeigen den Text `"foo"` an. In Browsern mit Unterstützung für die moderne `attr()`-Syntax gibt es keine Ausgabe.

Dies liegt daran, dass `attr()` — ähnlich wie benutzerdefinierte Eigenschaften, die die `var()`-Funktion verwenden — zum Zeitpunkt der [computed value-Ermittlung](https://brm.us/iacvt/#custom-properties) ersetzt werden. Bei der modernen Funktionalität versucht `--x` zuerst, das `data-attr`-Attribut vom `#parent`-Element zu lesen, was zu einem leeren String führt, da ein solches Attribut bei `#parent` nicht existiert. Dieser leere String wird dann vom `#child`-Element geerbt, was eine `content: ;`-Deklaration zur Folge hat.

Um solche Situationen zu vermeiden, sollten Sie keine geerbten `attr()`-Werte an Kind-Elemente weitergeben, es sei denn, Sie möchten dies ausdrücklich.

### Feature Detection

Sie können die Unterstützung für die moderne `attr()`-Syntax mithilfe der {{CSSxRef("@supports")}}-Regel erkennen. Im Test versuchen Sie, fortschrittliche `attr()`-Werte einer (nicht-benutzerdefinierten) CSS-Eigenschaft zuzuweisen.

Zum Beispiel:

```css
@supports (x: attr(x type(*))) {
  /* Browser has modern attr() support */
}

@supports not (x: attr(x type(*))) {
  /* Browser does not have modern attr() support */
}
```

Wir können dieselbe Überprüfung in JavaScript mit [`CSS.supports()`](/de/docs/Web/API/CSS/supports_static) durchführen:

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

In diesem Beispiel fügen wir den Wert des `data-foo`-[`data-*`](/de/docs/Web/HTML/Global_attributes/data-*)-[Globalattributs](/de/docs/Web/HTML/Global_attributes) dem Inhalt des {{HTMLElement("p")}}-Elements voran.

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

In diesem Beispiel hängen wir den Wert des `data-browser`-[`data-*`](/de/docs/Web/HTML/Global_attributes/data-*)-[Globalattributs](/de/docs/Web/HTML/Global_attributes) an das {{HTMLElement("p")}}-Element an. Wenn das `data-browser`-Attribut beim {{HTMLElement("p")}}-Element fehlt, wird der _Fallback_-Wert "**Unknown**" hinzugefügt.

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

In diesem Beispiel setzen wir den CSS-Wert von {{CSSXRef("background-color")}} auf den Wert des `data-background`-[`data-*`](/de/docs/Web/HTML/Global_attributes/data-*)-[Globalattributs](/de/docs/Web/HTML/Global_attributes), das dem {{HTMLElement("div")}}-Element zugewiesen ist.

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

In diesem Beispiel wird das Attribut `data-rotation` in eine `deg`-Einheit geparst, die die Drehung des Elements angibt.

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

### Parsing von `attr()`-Werten als `<custom-ident>`s

{{SeeCompatTable}}

In diesem Beispiel werden die Werte für die {{cssxref("view-transition-name")}}-Eigenschaft aus dem `id`-Attribut des Elements abgeleitet. Das Attribut wird in ein {{CSSxRef("&lt;custom-ident&gt;")}} geparst, was von {{cssxref("view-transition-name")}} als Wert akzeptiert wird.

Die resultierenden Werte für {{cssxref("view-transition-name")}} sind `card-1`, `card-2`, `card-3` usw.

#### HTML

Das HTML enthält vier Karten mit unterschiedlichen `id`-Attributen und einen `<button>` "Karten mischen", der die Karten mischt.

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

Für jede Karte ruft die `attr()`-Funktion das `id`-Attribut ab und parsed es in ein {{CSSxRef("&lt;custom-ident&gt;")}}, das als Wert für die {{cssxref("view-transition-name")}}-Eigenschaft verwendet wird. Wenn bei einer Karte kein `id` festgelegt ist, wird stattdessen der Fallback-Wert `none` verwendet.

```css
.card {
  view-transition-name: attr(id type(<custom-ident>), none);
  view-transition-class: card;
}
```

#### JavaScript

Wenn der `<button>` gedrückt wird, werden die Karten gemischt. Dies geschieht, indem die Reihenfolge eines Arrays mit Referenzen zu allen Karten zufällig geändert und anschließend die {{CSSxRef("order")}}-Eigenschaft jeder Karte auf ihren neuen Array-Index gesetzt wird.

Um jede Karte in ihre neue Position zu animieren, werden [View Transitions](/de/docs/Web/API/View_Transition_API/Using) verwendet. Dies erfolgt, indem die `order`-Aktualisierung in einen Aufruf von [`document.startViewTransition`](/de/docs/Web/API/Document/startViewTransition) eingeschlossen wird.

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
- [HTML `data-*` Attribute](/de/docs/Web/HTML/Global_attributes/data-*)
- [SVG `data-*` Attribute](/de/docs/Web/SVG/Attribute/data-*)
