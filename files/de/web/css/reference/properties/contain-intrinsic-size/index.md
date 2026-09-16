---
title: CSS-Eigenschaft `contain-intrinsic-size`
short-title: contain-intrinsic-size
slug: Web/CSS/Reference/Properties/contain-intrinsic-size
l10n:
  sourceCommit: 880c2c4b113c6fe127ca3ae3603a56ef7a2eb9a6
---

Die [CSS](/de/docs/Web/CSS)-[Kurzschreibweise](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) **`contain-intrinsic-size`** legt die Größe eines Elements fest, die ein Browser für das Layout verwendet, wenn das Element der [Größen-Containment](/de/docs/Web/CSS/Guides/Containment/Using#size_containment) unterliegt.

## Bestandteilseigenschaften

Diese Eigenschaft ist eine Kurzschreibweise für die folgenden CSS-Eigenschaften:

- {{cssxref("contain-intrinsic-width")}}
- {{cssxref("contain-intrinsic-height")}}

## Syntax

```css
/* Keyword value */
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

Für die Eigenschaft `contain-intrinsic-size` können die folgenden Werte angegeben werden:

- `none`
  - : Das Element hat in den angegebenen Dimensionen keine intrinsische Größe.
- `<length>`
  - : Das Element hat die angegebene {{cssxref("&lt;length&gt;")}} in den angegebenen Dimensionen.
- `auto [<length> | none]`
  - : Ein gespeicherter Wert der Größe des „normal gerenderten“ Elements, sofern ein solcher vorhanden ist und das Element seinen Inhalt überspringt (beispielsweise, wenn es sich außerhalb des sichtbaren Bereichs befindet); andernfalls die angegebene `<length>`.
    Das Schlüsselwort `none` kann anstelle von `<length>` verwendet werden, wenn feste Längen von `0px` sich anders verhalten als `none` (etwa in mehrspaltigen oder Grid-Layouts).

Wenn ein Wert als Schlüsselwort, Länge oder als Paar `auto [<length> | none]` angegeben wird, gilt er sowohl für Breite als auch Höhe.

Es können zwei Längenwerte angegeben werden, die in dieser Reihenfolge für Breite und Höhe gelten.
Wenn zwei Paare `auto [<length> | none]` angegeben werden, gilt das erste Paar für die Breite und das zweite für die Höhe.

## Beschreibung

Die Eigenschaft wird üblicherweise zusammen mit Elementen angewendet, die Größen-Containment auslösen können, wie etwa [`contain: size`](/de/docs/Web/CSS/Reference/Properties/contain) und {{cssxref("content-visibility")}}.

Größen-Containment ermöglicht es einem User Agent, ein Element so zu layouten, als hätte es eine feste Größe. Dadurch werden unnötige Reflows verhindert, indem das erneute Rendern von Kindelementen zur Ermittlung der tatsächlichen Größe vermieden wird, was die Benutzererfahrung verbessert.
Standardmäßig behandelt Größen-Containment Elemente so, als hätten sie keinen Inhalt, und kann das Layout auf dieselbe Weise zusammenfallen lassen, als hätte der Inhalt keine Breite oder Höhe.
Die Eigenschaft `contain-intrinsic-size` ermöglicht es Autorinnen und Autoren, einen geeigneten Wert anzugeben, der als Größe für das Layout verwendet wird.

Der Wert `auto <length>` ermöglicht es, die Größe des Elements zu speichern, wenn das Element jemals „normal gerendert“ wird (mit seinen Kindelementen), und sie dann anstelle der angegebenen Länge zu verwenden, wenn das Element seinen Inhalt überspringt.
Dadurch können Elemente außerhalb des sichtbaren Bereichs mit [`content-visibility: auto`](/de/docs/Web/CSS/Reference/Properties/content-visibility) von Größen-Containment profitieren, ohne dass Entwickelnde ihre Schätzungen der Elementgröße so genau vornehmen müssen.
Der gespeicherte Wert wird nicht verwendet, wenn die Kindelemente gerendert werden; wenn Größen-Containment aktiviert ist, wird `<length>` verwendet.

In Grid- und mehrspaltigen Layouts wird eine explizite Größe anders behandelt als eine implizite, inhaltsbasierte Höhe.
Elemente können ein wesentlich anderes Layout erhalten, als es der Fall wäre, wenn sie einfach bis zu dieser Höhe mit Inhalt gefüllt wären.
Der Wert `auto none` ermöglicht es dem Element, auf `contain-intrinsic-size: none` zurückzufallen, wenn kein gespeicherter Wert vorhanden ist. Dadurch wird das Element so gelayoutet, als hätte es keinen Inhalt. Dies ist in Grid- und mehrspaltigen Layouts fast immer der Festlegung von `0px` als intrinsischer Größe vorzuziehen, da enthaltene Elemente ihre Elternelemente überlaufen können und zu einem unerwarteten Seitenlayout führen können.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verwenden von `auto`-Wertepaaren für die intrinsische Größe

Dieses Beispiel demonstriert `contain-intrinsic-size: auto <length>` und `contain-intrinsic-size: auto none` anhand eines Layouts mit vielen vertikal angezeigten Elementen, die sowohl genaue als auch ungenaue Schätzungen der intrinsischen Größe aufweisen.
Die Verwendung von `content-visibility: auto` überspringt das Rendern von Elementen, wenn sie sich außerhalb des sichtbaren Bereichs befinden. Daher eignet sich diese Eigenschaft gut zur Kombination mit `contain-intrinsic-size`, um die Rendering-Performance zu verbessern und {{Glossary("Reflow", "Reflows")}} zu minimieren.

Das Wertepaar `contain-intrinsic-size: auto 500px` weist den Browser an, `500px` als eine Art Platzhaltergröße (Breite und Höhe) für das Element zu verwenden, wenn es sich außerhalb des sichtbaren Bereichs befindet und das Seitenlayout erstellt wird.
Wenn die Benutzerin oder der Benutzer zum Element scrollt und es angezeigt werden muss, berechnet der Browser die tatsächliche Größe des Elements und seines Inhalts.
Wenn sich die Platzhaltergröße von der berechneten Größe unterscheidet, kann dies ein neues Layout erzwingen, einschließlich entsprechender Änderungen an der Position der Seitenleiste.

Sobald der Browser über tatsächliche Größeninformationen für das Element verfügt, speichert er diese Größe, wenn das Element wieder außerhalb des sichtbaren Bereichs scrollt, und verwendet die gespeicherte Größe statt des Platzhalterwerts für Layoutberechnungen.
Der Vorteil besteht darin, dass der Browser den Elementinhalt nicht wiederholt rendern muss, um seine Größe zu berechnen. Dies ist besonders nützlich, wenn der Inhalt komplex ist oder von Netzwerkressourcen oder JavaScript abhängt.

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

- Die ersten beiden Boxen haben eine intrinsische Größe, die ihrer tatsächlichen Größe entspricht. Wenn sie in den sichtbaren Bereich gelangen, wird das Layout daher neu berechnet, es sind jedoch keine Änderungen an der Bildlaufleiste oder der Scrollposition sichtbar.

- Die dritte und vierte Box haben eine sehr große intrinsische Größe. Das anfängliche Layout, das der Browser berechnet hat, ist daher viel zu groß. Diese Boxen wurden kleiner gemacht, damit klar erkennbar ist, wenn ein Punkt erreicht wird, der eine drastische Layoutänderung erzwingt.

  Wenn die dritte und vierte Box in den sichtbaren Bereich scrollen, wird ihre Größe neu berechnet, wodurch die Box und ihr Elternelement weniger hoch werden.
  Dies hat zur Folge, dass der Scrollbereich auf der Seite nach unten springt – effektiv wurde weiter durch die Box gescrollt als geschätzt – und dass der Scrollbereich länger wird, weil die gesamte Seite weniger hoch ist als geschätzt.

- Die letzten Boxen haben `auto none` und damit eine geschätzte Größe von null.
  Wenn sie in den sichtbaren Bereich scrollen, werden die Größe des Elements und seines Elternelements neu berechnet und deutlich größer. Dadurch wird der Scrollbereich kleiner und bewegt sich in der Leiste nach oben.

Nachdem bis ganz nach unten gescrollt wurde, kann anschließend flüssig nach oben und unten gescrollt werden, da `content-visibility: auto` die tatsächlich gerenderte Größe des Elements für die nächste Anzeige speichert.

{{EmbedLiveSample('Using_auto_value_pairs_for_intrinsic_size', 800, 400)}}

### Festlegen der intrinsischen Größe

Dieses Beispiel stellt Auswahllisten bereit, mit denen `contain-intrinsic-size`, `content-visibility` und `contain` für ein Element geändert werden können, um die Auswirkung der verschiedenen Einstellungen zu beobachten.

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

Der folgende Code fügt dem enthaltenden Element abhängig von den ausgewählten Optionen Stile hinzu und entfernt sie wieder.

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

Das HTML definiert zwei Schaltflächen und ein Containerelement, das über die Eigenschaft `content-visibility` dem Containment unterliegt.

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

Verwenden Sie die Auswahlfelder, um die angegebenen Stile auf das enthaltende `div`-Element anzuwenden.
Beachten Sie, dass eine Änderung von `contain-intrinsic-size` keinen Unterschied macht, wenn `content-visibility` den Wert `visible` oder `auto` hat.
Wenn der Inhalt jedoch ausgeblendet ist, lässt `contain-intrinsic-size` mit dem Wert `none` das Elternelement so zusammenfallen, als hätte sein Kindelement keine Größe.

{{EmbedLiveSample('Setting the intrinsic size', '100%', 170)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("contain-intrinsic-block-size")}}
- {{CSSxRef("contain-intrinsic-inline-size")}}
- [Verwenden von CSS-Containment](/de/docs/Web/CSS/Guides/Containment/Using)
- Modul [CSS-Containment](/de/docs/Web/CSS/Guides/Containment)
- [`content-visibility`: die neue CSS-Eigenschaft, die Ihre Rendering-Performance steigert](https://web.dev/articles/content-visibility) über web.dev (2020)
