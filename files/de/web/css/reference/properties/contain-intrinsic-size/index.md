---
title: "`contain-intrinsic-size` CSS-Eigenschaft"
short-title: contain-intrinsic-size
slug: Web/CSS/Reference/Properties/contain-intrinsic-size
l10n:
  sourceCommit: 5381238460a48ff323a93e652d15cb62598f0262
---

Die **`contain-intrinsic-size`** [CSS](/de/docs/Web/CSS) [Kurzschrift](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) Eigenschaft legt die Größe eines Elements fest, die ein Browser beim Layout verwendet, wenn das Element der [Größenbegrenzung](/de/docs/Web/CSS/Guides/Containment/Using#size_containment) unterliegt.

## Bestandteileigenschaften

Diese Eigenschaft ist eine Kurzschrift für die folgenden CSS-Eigenschaften:

- {{cssxref("contain-intrinsic-width")}}
- {{cssxref("contain-intrinsic-height")}}

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
  - : Das Element hat die angegebene {{cssxref("&lt;length&gt;")}} in der angegebenen Dimension(en).
- `auto [<length> | none]`
  - : Ein gespeicherter Wert der "normal gerenderten" Elementgröße, falls vorhanden und das Element seine Inhalte überspringt (zum Beispiel, wenn es außerhalb des Bildschirms ist); ansonsten die angegebene `<length>`.
    Das Schlüsselwort `none` kann anstelle von `<length>` verwendet werden, wo feste Längen von `0px` anders als `none` behandelt werden (zum Beispiel in mehrspaltigen oder Raster-Layouts).

Wenn ein Wert als Schlüsselwort, eine Länge oder ein `auto [<length> | none]` Paar angegeben wird, gilt es sowohl für die Breite als auch für die Höhe.

Es können zwei Längenwerte angegeben werden, die der Breite bzw. der Höhe in dieser Reihenfolge zugeordnet werden.
Wenn zwei `auto [<length> | none]` Paare angegeben sind, gilt das erste Paar für die Breite und das zweite für die Höhe.

## Beschreibung

Die Eigenschaft wird häufig zusammen mit Elementen verwendet, die Größenbegrenzung auslösen können, wie zum Beispiel [`contain: size`](/de/docs/Web/CSS/Reference/Properties/contain) und {{cssxref("content-visibility")}}.

Größenbegrenzung ermöglicht es einem Benutzeragenten, ein Element so zu layouten, als hätte es eine feste Größe, und verhindert unnötige Neuberechnungen durch Vermeidung der Neudarstellung von Kinderlementen, um die tatsächliche Größe zu bestimmen (was die Benutzererfahrung verbessert).
Standardmäßig behandelt die Größenbegrenzung Elemente so, als hätten sie keinen Inhalt, und kann das Layout auf dieselbe Weise kollabieren, als hätten die Inhalte keine Breite oder Höhe.
Die `contain-intrinsic-size` Eigenschaft ermöglicht es Autoren, einen geeigneten Wert als Größe für das Layout festzulegen.

Der `auto <length>` Wert ermöglicht es, die Größe des Elements zu speichern, wenn das Element jemals "normal gerendert" wird (mit seinen Kinderlementen), und diese dann anstelle der angegebenen Länge zu verwenden, wenn das Element seine Inhalte überspringt.
Dies ermöglicht es Elementen außerhalb des Bildschirms mit [`content-visibility: auto`](/de/docs/Web/CSS/Reference/Properties/content-visibility) von der Größenbegrenzung zu profitieren, ohne dass Entwickler so präzise bei der Schätzung der Elementgröße sein müssen.
Der gespeicherte Wert wird nicht verwendet, wenn die Kinderlemente gerendert werden (wenn die Größenbegrenzung aktiviert ist, wird die `<length>` verwendet).

In Raster- und mehrspaltigen Layouts wird eine explizite Größe anders behandelt als eine implizite inhaltsbasierte Höhe.
Elemente könnten sich wesentlich anders layouten, als hätten sie einfach Inhalt bis zu dieser Höhe gefüllt.
Der `auto none` Wert ermöglicht es dem Element, auf `contain-intrinsic-size: none` zurückzufallen, wenn kein gespeicherter Wert vorliegt, wodurch das Element so layoutet wird, als hätte es keinen Inhalt. Dies wird fast immer bevorzugt, anstatt `0px` als intrinsische Größe in Raster- und mehrspaltigen Layouts einzustellen, wo enthaltene Elemente ihre Eltern überschreiten und zu unerwarteten Seitenlayouts führen können.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verwenden von automatischen Wertepaaren für die intrinsische Größe

Dieses Beispiel demonstriert `contain-intrinsic-size: auto <length>` und `contain-intrinsic-size: auto none` in einem Layout, in dem viele Elemente vertikal angezeigt werden, die sowohl genaue als auch falsche Schätzungen der intrinsischen Größe besitzen.
Verwenden von `content-visibility: auto` überspringt das Rendern von Elementen, wenn sie außerhalb des Bildschirms sind. Daher ist diese Eigenschaft ein guter Kandidat, um mit `contain-intrinsic-size` kombiniert zu werden, um die Rendering-Leistung zu verbessern und {{Glossary("Reflow", "Reflows")}} zu minimieren.

Das `contain-intrinsic-size: auto 500px` Wertepaar weist den Browser an, 500px als eine Art 'Platzhalter'-Größe (Breite und Höhe) für das Element zu verwenden, wenn es außerhalb des Bildschirms ist und die Seite layoutet wird.
Wenn der Benutzer zum Element scrollt und es angezeigt werden muss, berechnet der Browser die tatsächliche Größe des Elements und seiner Inhalte.
Wenn es einen Unterschied zwischen Platzhalter und berechneter Größe gibt, kann dies zu einem neuen Layout führen, mit begleitenden Änderungen der Position der Seitenleiste.

Sobald der Browser die tatsächliche Größeninformation für das Element hat, wird er diese Größe merken, wenn das Element wieder außerhalb des Bildschirms gescrollt wird, und die gespeicherte Größe für Layout-Berechnungen anstelle des Platzhalterwerts verwenden.
Der Vorteil ist, dass der Browser nicht wiederholt die Inhalte des Elements rendern muss, um dessen Größe zu berechnen; das ist besonders nützlich, wenn die Inhalte komplex sind oder von Netzwerk-Ressourcen oder JavaScript abhängen.

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

- Die ersten beiden Boxen haben eine intrinsische Größe, die ihrer tatsächlichen Größe entspricht, daher wird beim Einblenden in den Anzeigebereich das Layout neu berechnet, aber es gibt keine Veränderung in der Scrollleiste oder der Scrollposition.

- Die dritte und vierte Boxen haben eine riesige intrinsische Größe, daher ist das anfängliche Layout, das der Browser berechnet hat, viel zu groß, und wir haben diese Boxen kleiner gemacht, damit es offensichtlich ist, wenn Sie einen Punkt erreichen, der eine drastische Layout-Änderung erzwingt.

  Wenn die dritte und vierte Boxen in den Anzeigebereich gescrollt werden, wird die Größe neu berechnet, was dazu führt, dass die Box und ihre Eltern weniger hoch sind.
  Der Effekt ist, dass die Scrollleiste nach unten auf der Seite springt (wir haben effektiver durch die Box gescrollt, als wir geschätzt hatten) und die Scrollleiste länger wird, weil die gesamte Seite weniger hoch ist, als wir geschätzt hatten.

- Die letzten Boxen haben `auto none`, daher haben sie Null geschätzte Größe.
  Wenn sie in den Anzeigebereich gescrollt werden, werden die Größe des Elements und seiner Eltern neu berechnet, um viel größer zu sein, wodurch die Scrollleiste an Größe abnimmt und die Bar hochschiebt.

Nach dem vollständigen Scrollen nach unten können Sie anschließend reibungslos auf- und abscrollen, da `content-visibility: auto` die tatsächlich gerenderte Größe des Elements für das nächste Mal speichert, wenn es angezeigt wird.

{{EmbedLiveSample('Using_auto_value_pairs_for_intrinsic_size', 800, 400)}}

### Festlegen der intrinsischen Größe

Dieses Beispiel bietet Auswahlmenüs, die verwendet werden können, um `contain-intrinsic-size`, `content-visibility` und `contain` an einem Element zu ändern, um die Wirkung der verschiedenen Einstellungen zu beobachten.

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

Der folgende Code fügt Stile hinzu und entfernt sie aus dem Containerelement basierend auf den ausgewählten Optionen.

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

Das HTML definiert zwei Buttons und ein Containerelement, das durch die Eigenschaft `content-visibility` der Eindämmung unterliegt.

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

Verwenden Sie die Selektoren, um die angegebenen Stile auf das umgebende `div`-Element anzuwenden.
Beachten Sie, dass, wenn `content-visibility` `visible` oder `auto` ist, das Ändern der `contain-intrinsic-size` keinen Unterschied macht.
Wenn der Inhalt jedoch ausgeblendet ist, führt `contain-intrinsic-size` von `none` dazu, dass das Elternelement kollabiert, als hätte sein Kinderelement keine Größe.

{{EmbedLiveSample('Setting the intrinsic size', '100%', 170)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("contain-intrinsic-block-size")}}
- {{CSSxRef("contain-intrinsic-inline-size")}}
- [Verwendung von CSS-Eindämmung](/de/docs/Web/CSS/Guides/Containment/Using)
- [CSS-Eindämmung](/de/docs/Web/CSS/Guides/Containment) Modul
- [`content-visibility`: die neue CSS-Eigenschaft, die Ihre Rendering-Leistung steigert](https://web.dev/articles/content-visibility) über web.dev (2020)
