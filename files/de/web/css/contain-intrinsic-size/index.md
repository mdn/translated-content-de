---
title: contain-intrinsic-size
slug: Web/CSS/contain-intrinsic-size
l10n:
  sourceCommit: 9aff58ba641ce676db1ae5a1955ed6ef81cbc718
---

{{CSSRef}}

Die **`contain-intrinsic-size`** [CSS](/de/docs/Web/CSS) [Kurzschreibweise](/de/docs/Web/CSS/Shorthand_properties) legt die Größe eines Elements fest, die ein Browser für das Layout verwendet, wenn das Element [Größenbegrenzung](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment#size_containment) unterliegt.

## Bestandteilige Eigenschaften

Diese Eigenschaft ist eine Kurzschreibweise für die folgenden CSS-Eigenschaften:

- [`contain-intrinsic-width`](/de/docs/Web/CSS/contain-intrinsic-width)
- [`contain-intrinsic-height`](/de/docs/Web/CSS/contain-intrinsic-height)

## Syntax

```css
/* Keyword values */
contain-intrinsic-size: none;

/* <length> values */
contain-intrinsic-size: 1000px;
contain-intrinsic-size: 10rem;

/* width | height */
contain-intrinsic-size: 1000px 1.5em;

/* auto <length> */
contain-intrinsic-size: auto 300px;
contain-intrinsic-size: auto none;

/* auto width | auto height */
contain-intrinsic-size: auto 300px auto 4rem;

/* Global values */
contain-intrinsic-size: inherit;
contain-intrinsic-size: initial;
contain-intrinsic-size: revert;
contain-intrinsic-size: revert-layer;
contain-intrinsic-size: unset;
```

### Werte

Die folgenden Werte können für die Eigenschaft `contain-intrinsic-size` angegeben werden:

- `none`
  - : Das Element hat keine intrinsische Größe in der angegebenen Dimension(en).
- `<length>`
  - : Das Element hat die angegebene {{cssxref("&lt;length&gt;")}} in der gegebenen Dimension(en).
- `auto [<length> | none]`
  - : Ein gespeicherter Wert der "normal gerenderten" Elementgröße, falls vorhanden, und das Element überspringt seinen Inhalt (zum Beispiel, wenn es offscreen ist); andernfalls die angegebene `<length>`.
    Das Schlüsselwort `none` kann anstelle von `<length>` verwendet werden, wo feste Längen von `0px` sich anders verhalten als `none` (wie in Multi-Spalten- oder Grid-Layouts).

Wenn ein Wert als Schlüsselwort, Länge oder `auto [<length> | none]`-Paar angegeben wird, gilt er sowohl für die Breite als auch für die Höhe.

Es können zwei Längenwerte angegeben werden, die in dieser Reihenfolge auf Breite und Höhe angewendet werden.
Wenn zwei `auto [<length> | none]`-Paare angegeben sind, gilt das erste Paar für die Breite und das zweite für die Höhe.

## Beschreibung

Die Eigenschaft wird häufig zusammen mit Elementen angewendet, die Größenbegrenzung auslösen können, wie [`contain: size`](/de/docs/Web/CSS/contain) und [`content-visibility`](/de/docs/Web/CSS/content-visibility).

Größenbegrenzung ermöglicht es einem Benutzeragenten, ein Element so zu layouten, als hätte es eine feste Größe, und vermeidet so unnötige Neuanordnungen, indem das erneute Rendern von Kind-Elementen zur Bestimmung der tatsächlichen Größe vermieden wird (was die Benutzererfahrung verbessert).
Standardmäßig behandelt die Größenbegrenzung Elemente, als hätten sie keinen Inhalt, und kann das Layout in ähnlicher Weise kollabieren lassen, als hätten die Inhalte keine Breite oder Höhe.
Die Eigenschaft `contain-intrinsic-size` ermöglicht es Autoren, einen geeigneten Wert anzugeben, der als Größe für das Layout verwendet werden soll.

Der Wert `auto <length>` ermöglicht es, die Größe des Elements zu speichern, wenn es jemals "normal gerendert" wird (mit seinen Kind-Elementen), und dann anstelle der angegebenen Länge verwendet zu werden, wenn das Element seinen Inhalt überspringt.
Dies erlaubt es, dass Offscreen-Elemente mit [`content-visibility: auto`](/de/docs/Web/CSS/content-visibility) von der Größenbegrenzung profitieren, ohne dass Entwickler so präzise in ihrer Schätzung der Elementgröße sein müssen.
Der gespeicherte Wert wird nicht verwendet, wenn die Kind-Elemente gerendert werden (wenn die Größenbegrenzung aktiviert ist, wird die `<length>` verwendet).

In Grid- und Multi-Spalten-Layouts wird eine explizite Größe anders behandelt als eine implizite inhaltsbasierte Höhe.
Elemente könnten sich wesentlich anders layouten als es der Fall wäre, wenn sie einfach mit einem Inhalt bis zu dieser Höhe gefüllt wären.
Der Wert `auto none` ermöglicht dem Element, auf `contain-intrinsic-size: none` zurückzufallen, wenn kein gespeicherter Wert existiert, was es dem Element erlaubt, so layoutet zu werden, als hätte es keinen Inhalt. Dies wird fast immer dem Setzen von 0px als intrinsische Größe in Grid- und Multi-Spalten-Layouts vorgezogen, wo enthaltene Elemente ihre Eltern überlaufen und zu unerwarteten Seitenlayouts führen können.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verwendung von Auto-Wert-Paaren für die intrinsische Größe

Dieses Beispiel demonstriert `contain-intrinsic-size: auto <length>` und `contain-intrinsic-size: auto none`, indem ein Layout verwendet wird, in dem viele Elemente vertikal angezeigt werden, die sowohl genaue als auch fehlerhafte Schätzungen der intrinsischen Größe aufweisen.
Die Verwendung von `content-visibility: auto` überspringt das Rendern von Elementen, wenn sie offscreen sind, daher ist diese Eigenschaft ein guter Kandidat, um damit kombiniert die Rendering-Leistung zu verbessern und [Neuanordnungen](/de/docs/Glossary/Reflow) zu minimieren.

Das Wertepaar `contain-intrinsic-size: auto 500px` weist den Browser an, 500px als eine Art "Platzhaltergröße" (Breite und Höhe) für das Element zu verwenden, wenn es offscreen ist und die Seite layoutet wird.
Wenn der Benutzer zum Element scrollt und es angezeigt werden muss, berechnet der Browser die tatsächliche Größe des Elements und seines Inhalts.
Wenn es einen Unterschied zwischen dem Platzhalter und der berechneten Größe gibt, könnte dies ein neues Layout erzwingen, mit entsprechenden Änderungen an der Position der Seitenleiste.

Sobald der Browser tatsächliche Größeninformationen für das Element hat, wird er diese Größe merken, wenn das Element wieder aus dem Bildschirm scrollt und die gespeicherte Größe für Layout-Berechnungen anstelle des Platzhalterwerts verwenden.
Der Vorteil besteht darin, dass der Browser nicht wiederholt den Inhalt des Elements rendern muss, um seine Größe zu berechnen, was besonders nützlich ist, wenn die Inhalte komplex sind oder von Netzwerkressourcen oder JavaScript abhängen.

#### HTML

```html
<div id="container">
  <div id="auto-length-note">
    <p>
      Your browser does not support
      <code>contain-intrinsic-size: auto &lt;length&gt;</code>.
    </p>
  </div>
  <div class="auto-length">
    <p>Item one</p>
  </div>
  <div class="auto-length">
    <p>Item two</p>
  </div>
  <div class="auto-length large-intrinsic-size">
    <p class="small">Item three</p>
  </div>
  <div class="auto-length large-intrinsic-size">
    <p class="small">Item four</p>
  </div>
  <div id="auto-none-note">
    <p>
      Your browser does not support
      <code>contain-intrinsic-size: auto none</code>.
    </p>
  </div>
  <div class="auto-length none">
    <p>Item five</p>
  </div>
  <div class="auto-length none">
    <p>Item six</p>
  </div>
</div>
```

#### CSS

```css hidden
div,
p {
  padding: 1rem;
  margin-bottom: 1rem;
  font-size: 2rem;
  font-family: sans-serif;
}

code {
  background-color: lightgray;
  padding: 0.25rem;
  border-radius: 0.25rem;
}

#container {
  width: 90%;
  height: 80%;
}

.auto-length,
.auto-length.none {
  display: none;
}

#auto-length-note,
#auto-none-note {
  display: block;
  padding: 0;
}

#auto-length-note p,
#auto-none-note p {
  padding: 0.5rem;
  width: 100%;
  height: max-content;
  font-size: 1rem;
  line-height: 1.5rem;
  background-color: tomato;
}

@supports (contain-intrinsic-size: auto none) {
  .auto-length.none {
    display: block;
  }
  #auto-none-note {
    display: none;
  }
}
@supports (contain-intrinsic-size: auto 500px) {
  .auto-length {
    display: block;
  }
  #auto-length-note {
    display: none;
  }
}
```

```css
p {
  height: 500px;
  width: 500px;
  border: 4px dotted;
  background: lightblue;
}

.auto-length {
  content-visibility: auto;
  contain-intrinsic-size: auto 500px;
  background-color: linen;
  outline: 4px dotted blue;
}

.large-intrinsic-size {
  /* Setting an inaccurate intrinsic size for the element */
  contain-intrinsic-size: auto 5000px;
  background-color: lightgray;
  outline: 4px dotted red;
}

.small {
  /* This element is a lot smaller than expected */
  height: 100px;
  width: 100px;
}

.none {
  background-color: papayawhip;
  contain-intrinsic-size: auto none;
  outline: 4px dotted red;
}
```

#### Ergebnis

- Die ersten beiden Boxen haben eine intrinsische Größe, die ihrer tatsächlichen Größe entspricht. Wenn sie in den Sichtbereich gelangen, wird das Layout neu berechnet, aber wir sehen keine Änderung der Scrollleiste oder der Scrollposition.

- Die dritte und vierte Box haben eine riesige intrinsische Größe, sodass das anfängliche Layout, das der Browser berechnet hat, viel zu groß ist, und wir haben diese Boxen kleiner gemacht, damit es offensichtlich wird, wann Sie einen Punkt erreichen, der eine drastische Layoutänderung erzwingt.

  Wenn die dritte und vierte Box in den Sichtbereich scrollen, wird die Größe neu berechnet, was die Box und ihren Elternteil weniger hoch macht.
  Der Effekt ist, dass der Scroller die Seite herunter springt (wir haben effektiv weiter durch die Box gescrollt, als wir geschätzt hatten) und der Scroller länger ist, weil die gesamte Seite weniger hoch ist als wir geschätzt hatten.

- Die letzten Boxen haben `auto none`, sodass sie eine Größe von null haben.
  Wenn sie in den Sichtbereich scrollen, werden die Größe des Elements und seines Elternteils neu berechnet, um viel größer zu sein, sodass der Scroller kleiner wird und die Leiste nach oben bewegt.

Nach dem vollständigen Herunterscrollen können Sie anschließend reibungslos nach oben und unten scrollen, weil `content-visibility: auto` die tatsächlich gerenderte Größe des Elements für die nächste Anzeige speichert.

{{EmbedLiveSample('Using_auto_value_pairs_for_intrinsic_size', 800, 400)}}

### Einstellen der intrinsischen Größe

Dieses Beispiel bietet Auswahllisten, mit denen Sie `contain-intrinsic-size`, `content-visibility` und `contain` auf ein Element anwenden und die Wirkung der verschiedenen Einstellungen beobachten können.

#### CSS

```css
#contained_element {
  border: 2px solid green;
  width: 120px;
}
.child_element {
  border: 1px solid red;
  background: blue;
  height: 50px;
  width: 150px;
}
```

#### JavaScript

Der folgende Code fügt der enthaltenden Element Stile hinzu und entfernt sie basierend auf den ausgewählten Optionen.

```js
const containedElement = document.querySelector("#contained_element");
const intrinsicSizeSelector = document.querySelector(
  "#contain_intrinsic_size_selector",
);
const containSelector = document.querySelector("#contain_selector");
const contentVisibilitySelector = document.querySelector(
  "#content_visibility_selector",
);

containedElement.style["contain-intrinsic-size"] =
  intrinsicSizeSelector.options[intrinsicSizeSelector.selectedIndex].text;
containedElement.style["contain"] =
  containSelector.options[containSelector.selectedIndex].text;
containedElement.style["content-visibility"] =
  contentVisibilitySelector.options[
    contentVisibilitySelector.selectedIndex
  ].text;

intrinsicSizeSelector.addEventListener("change", () => {
  containedElement.style["contain-intrinsic-size"] =
    intrinsicSizeSelector.options[intrinsicSizeSelector.selectedIndex].text;
});

containSelector.addEventListener("change", () => {
  containedElement.style["contain"] =
    containSelector.options[containSelector.selectedIndex].text;
});

contentVisibilitySelector.addEventListener("change", () => {
  containedElement.style["content-visibility"] =
    contentVisibilitySelector.options[
      contentVisibilitySelector.selectedIndex
    ].text;
});
```

#### HTML

Das HTML definiert zwei Buttons, ein Container-Element, das über die Eigenschaft `content-visibility` von Einstüchtigkeit betroffen ist.

```html
<p>
  <label for="contain_intrinsic_size_selector">contain-intrinsic-size:</label>
  <select id="contain_intrinsic_size_selector">
    <option>none</option>
    <option>40px 130px</option>
    <option>auto 40px auto 130px</option></select
  >;<br />

  <label for="contain_selector">contain:</label>
  <select id="contain_selector">
    <option>none</option>
    <option>size</option>
    <option>strict</option></select
  >;<br />

  <label for="content_visibility_selector">content-visibility:</label>
  <select id="content_visibility_selector">
    <option>visible</option>
    <option>auto</option>
    <option>hidden</option></select
  >;
</p>

<div id="contained_element">
  <div class="child_element"></div>
</div>
```

#### Ergebnis

Verwenden Sie die Selektoren, um die gegebenen Stile auf das enthaltende `div`-Element anzuwenden.
Beachten Sie, dass beim `content-visibility` von `visible` oder `auto` das Ändern von `contain-intrinsic-size` keinen Unterschied macht.
Wenn der Inhalt jedoch verborgen ist, lässt ein `contain-intrinsic-size` von `none` das Elternelement kollabieren, als hätte sein Kind-Element keine Größe.

{{EmbedLiveSample('Setting the intrinsic size', '100%', 170)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("contain-intrinsic-block-size")}}
- {{CSSxRef("contain-intrinsic-inline-size")}}
- [Verwendung der CSS-Einschränkung](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment)
- [CSS-Einschränkungsmodul](/de/docs/Web/CSS/CSS_containment)
- [`content-visibility`: die neue CSS-Eigenschaft, die Ihre Rendering-Leistung steigert](https://web.dev/articles/content-visibility) via web.dev (2020)
