---
title: enthaltene-intrinsische-Größe
slug: Web/CSS/contain-intrinsic-size
l10n:
  sourceCommit: 9aff58ba641ce676db1ae5a1955ed6ef81cbc718
---

{{CSSRef}}

Die **`contain-intrinsic-size`** [CSS](/de/docs/Web/CSS) [Kurzschreibweise](/de/docs/Web/CSS/Shorthand_properties) legt die Größe eines Elements fest, die ein Browser für das Layout verwendet, wenn das Element einer [Größenbeschränkung](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment#size_containment) unterliegt.

## Zusätzliche Eigenschaften

Diese Kurzschreibweise steht für die folgenden CSS-Eigenschaften:

- [`contain-intrinsic-width`](/de/docs/Web/CSS/contain-intrinsic-width)
- [`contain-intrinsic-height`](/de/docs/Web/CSS/contain-intrinsic-height)

## Syntax

```css
/* Stichwort-Werte */
contain-intrinsic-size: none;

/* <Längen> Werte */
contain-intrinsic-size: 1000px;
contain-intrinsic-size: 10rem;

/* Breite | Höhe */
contain-intrinsic-size: 1000px 1.5em;

/* auto <Länge> */
contain-intrinsic-size: auto 300px;
contain-intrinsic-size: auto none;

/* auto Breite | auto Höhe */
contain-intrinsic-size: auto 300px auto 4rem;

/* Globale Werte */
contain-intrinsic-size: inherit;
contain-intrinsic-size: initial;
contain-intrinsic-size: revert;
contain-intrinsic-size: revert-layer;
contain-intrinsic-size: unset;
```

### Werte

Folgende Werte können für die `contain-intrinsic-size`-Eigenschaft angegeben werden:

- `none`
  - : Das Element hat keine intrinsische Größe in den angegebenen Dimension(en).
- `<Länge>`
  - : Das Element hat die angegebene {{cssxref("&lt;length&gt;")}} in den angegebenen Dimension(en).
- `auto [<Länge> | none]`
  - : Ein gespeicherter Wert der "normal gerenderten" Elementgröße, falls verfügbar und das Element seine Inhalte überspringt (zum Beispiel, wenn es nicht sichtbar ist); sonst die angegebene `<length>`.
    Das `none`-Stichwort kann anstelle von `<length>` verwendet werden, wo `0px` feste Längen sich anders verhalten als `none` (wie bei Multi-Column- oder Grid-Layouts).

Wenn ein Wert als Stichwort, eine Länge oder ein `auto [<length> | none]`-Paar angegeben wird, gilt er sowohl für die Breite als auch für die Höhe.

Es können zwei Längenwerte angegeben werden, die in dieser Reihenfolge auf Breite und Höhe angewendet werden.
Wenn zwei `auto [<length> | none]`-Paare angegeben sind, gilt das erste Paar für die Breite und das zweite für die Höhe.

## Beschreibung

Die Eigenschaft wird häufig zusammen mit Elementen angewendet, die Größenbeschränkungen auslösen können, wie [`contain: size`](/de/docs/Web/CSS/contain) und [`content-visibility`](/de/docs/Web/CSS/content-visibility).

Größenbeschränkungen ermöglichen es einem Benutzeragenten, ein Element so zu layouten, als hätte es eine feste Größe, wodurch unnötige Neulayouts vermieden werden, indem das Neurendern von Kindelementen zur Bestimmung der tatsächlichen Größe vermieden wird (wodurch die Benutzererfahrung verbessert wird).
Standardmäßig behandelt die Größenbeschränkung Elemente so, als hätten sie keinen Inhalt, und das Layout kann in ähnlicher Weise wie bei Elementen ohne Breite oder Höhe kollabieren.
Die `contain-intrinsic-size`-Eigenschaft ermöglicht es den Entwicklern, einen geeigneten Wert als Größe für das Layout anzugeben.

Der Wert `auto <length>` ermöglicht es, die Größe des Elements zu speichern, wenn das Element jemals "normal gerendert" (mit seinen Kindelementen) wird, und diesen Wert anstelle der angegebenen Länge zu verwenden, wenn das Element seine Inhalte überspringt.
Dies erlaubt es, dass nicht sichtbare Elemente mit [`content-visibility: auto`](/de/docs/Web/CSS/content-visibility) von der Größenbeschränkung profitieren, ohne dass Entwickler ihre Schätzungen der Elementgröße so präzise anpassen müssen.
Der gespeicherte Wert wird nicht verwendet, wenn die Kindelemente gerendert werden (falls die Größenbeschränkung aktiv ist, wird die `<length>` genutzt).

In Grid- und Mehrspaltenlayouts wird eine explizite Größe anders behandelt als eine implizite, inhaltsbasierte Höhe.
Elemente könnten wesentlich anders layouten, als wenn sie einfach mit Inhalt bis zu dieser Höhe gefüllt wären.
Der Wert `auto none` erlaubt es dem Element, auf `contain-intrinsic-size: none` zurückzufallen, falls kein gespeicherter Wert existiert, wodurch das Element so layoutet wird, als hätte es keinen Inhalt.
Dies wird fast immer gegenüber der Einstellung von 0px als intrinsische Größe in Grid- und Mehrspaltenlayouts bevorzugt, wo eingeschlossene Elemente ihre Eltern überschreiten können und unerwartete Layouts der Seite verursachen können.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verwendung von Auto-Wertpaaren für die intrinsische Größe

Dieses Beispiel demonstriert `contain-intrinsic-size: auto <length>` und `contain-intrinsic-size: auto none` in einem Layout, in dem viele Elemente vertikal angezeigt werden, die sowohl genaue als auch ungenaue Schätzungen der intrinsischen Größe haben.
Die Verwendung von `content-visibility: auto` überspringt das Rendern von Elementen, wenn sie nicht sichtbar sind. Diese Eigenschaft ist daher ein guter Kandidat, um mit `contain-intrinsic-size` kombiniert zu werden, um die Rendering-Leistung zu verbessern und [Reflows](/de/docs/Glossary/Reflow) zu minimieren.

Das Wertpaar `contain-intrinsic-size: auto 500px` teilt dem Browser mit, dass er 500px als eine Art 'Platzhalter'-Größe (Breite und Höhe) für das Element verwenden soll, wenn es nicht sichtbar ist und das Layout aufgebaut wird.
Wenn der Benutzer zum Element scrollt und es angezeigt werden muss, wird der Browser die tatsächliche Größe des Elements und seiner Inhalte berechnen.
Wenn es eine Differenz zwischen dem Platzhalter und der berechneten Größe gibt, könnte dies ein neues Layout erzwingen, mit begleitenden Änderungen an der Position der Seitenleiste.

Sobald der Browser die tatsächlichen Größeninformationen für das Element hat, wird er diese Größe verwenden, wenn das Element wieder aus dem Sichtbereich scrollt, und sie für Layoutberechnungen anstelle des Platzhalterwerts verwenden.
Der Vorteil besteht darin, dass der Browser nicht wiederholt die Inhalte des Elements rendern muss, um seine Größe zu berechnen. Dies ist besonders nützlich, wenn die Inhalte komplex sind oder von Netzwerkressourcen oder JavaScript abhängen.

#### HTML

```html
<div id="container">
  <div id="auto-length-note">
    <p>
      Ihr Browser unterstützt nicht
      <code>contain-intrinsic-size: auto &lt;length&gt;</code>.
    </p>
  </div>
  <div class="auto-length">
    <p>Element eins</p>
  </div>
  <div class="auto-length">
    <p>Element zwei</p>
  </div>
  <div class="auto-length large-intrinsic-size">
    <p class="small">Element drei</p>
  </div>
  <div class="auto-length large-intrinsic-size">
    <p class="small">Element vier</p>
  </div>
  <div id="auto-none-note">
    <p>
      Ihr Browser unterstützt nicht
      <code>contain-intrinsic-size: auto none</code>.
    </p>
  </div>
  <div class="auto-length none">
    <p>Element fünf</p>
  </div>
  <div class="auto-length none">
    <p>Element sechs</p>
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
  /* Eine ungenaue intrinsische Größe für das Element einstellen */
  contain-intrinsic-size: auto 5000px;
  background-color: lightgray;
  outline: 4px dotted red;
}

.small {
  /* Dieses Element ist viel kleiner als erwartet */
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

- Die ersten beiden Kästen haben eine intrinsische Größe, die ihrer tatsächlichen Größe entspricht, sodass bei ihrem Sichtbarwerden das Layout neu berechnet wird, aber keine Änderungen an der Bildlaufleiste oder der Scrollposition sichtbar sind.

- Die dritten und vierten Kästen haben eine enorm große intrinsische Größe, sodass das ursprünglich vom Browser berechnete Layout viel zu groß ist. Diese Kästen wurden verkleinert, damit es offensichtlich ist, wenn ein Punkt erreicht ist, der eine drastische Layoutänderung erzwingt.

  Wenn die dritten und vierten Kästen sichtbar werden, wird die Größe neu berechnet, wodurch der Kasten und sein Elternteil nicht mehr so hoch sind.
  Der Effekt ist, dass der Scroll-Lauf am Seitenende springt (wir sind effektiv weiter durch den Kasten gescrollt, als wir geschätzt haben) und der Lauf länger ist, weil die gesamte Seite weniger hoch ist, als wir geschätzt haben.

- Die letzten Kästen haben `auto none`, sodass sie null geschätzte Größe haben.
  Wenn sie sichtbar werden, werden die Größe des Elements und seiner Eltern neu berechnet und stark vergrößert, sodass die Scrollleiste verkleinert und nach oben gezogen wird.

Nachdem Sie ganz nach unten gescrollt haben, können Sie anschließend fließend nach oben und unten scrollen, da die Verwendung von `content-visibility: auto` die tatsächlich gerenderte Größe des Elements für das nächste Mal speichert, wenn es angezeigt wird.

{{EmbedLiveSample('Using_auto_value_pairs_for_intrinsic_size', 800, 400)}}

### Einstellen der intrinsischen Größe

Dieses Beispiel bietet Auswahllisten, die verwendet werden können, um `contain-intrinsic-size`, `content-visibility` und `contain` an einem Element zu ändern, um die Wirkung der verschiedenen Einstellungen zu beobachten.

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

Der folgende Code fügt Stile hinzu und entfernt Stile vom enthaltenen Element basierend auf den ausgewählten Optionen.

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

Das HTML definiert zwei Schaltflächen, ein Containerelement, das der Befestigung über die `content-visibility`-Eigenschaft unterliegt.

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

Verwenden Sie die Auswahlen, um die gegebenen Stile auf das enthaltende `div`-Element anzuwenden.
Beachten Sie, dass beim `content-visibility`-Derivat `visible` oder `auto`, das Ändern von `contain-intrinsic-size` keinen Unterschied macht.
Jedoch wird, wenn der Inhalt verborgen ist, durch das Vorhandensein von `contain-intrinsic-size` der übergeordnete Container zusammengebrochen, als hätte das Kindelement keine Größe.

{{EmbedLiveSample('Setting the intrinsic size', '100%', 170)}}

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("contain-intrinsic-block-size")}}
- {{CSSxRef("contain-intrinsic-inline-size")}}
- [Verwendung von CSS-Beschränkungen](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment)
- [CSS-Beschränkungsmodul](/de/docs/Web/CSS/CSS_containment)
- [`content-visibility`: die neue CSS-Eigenschaft zur Verbesserung der Renderleistung](https://web.dev/articles/content-visibility) via web.dev (2020)
