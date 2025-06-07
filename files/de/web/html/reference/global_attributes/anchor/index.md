---
title: HTML `anchor` globales Attribut
short-title: anchor
slug: Web/HTML/Reference/Global_attributes/anchor
l10n:
  sourceCommit: 7885271e36e9d2744296c01f400653f63caa6f75
---

{{HTMLSidebar("Global_attributes")}}{{Non-standard_Header}}{{SeeCompatTable}}

Das **`anchor`** [globale Attribut](/de/docs/Web/HTML/Reference/Global_attributes) wird verwendet, um ein positioniertes Element mit einem Anker-Element zu verknüpfen. Der Wert des Attributs ist der [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)-Wert des Elements, das Sie als Anker für das positionierte Element verwenden möchten. Das Element kann dann mithilfe von [CSS-Anker-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using) positioniert werden.

> [!NOTE]
> Alternativ können Sie ein positioniertes Element über CSS mit einem Anker-Element verknüpfen, indem Sie die Eigenschaften {{cssxref("anchor-name")}} und {{cssxref("position-anchor")}} verwenden. Wenn beide Verankerungstechniken auf demselben Element verwendet werden, hat die CSS-Technik Vorrang vor der HTML-Technik.

## Beispiele

### Grundlegende Verwendung des `anchor`-Attributs

Das folgende Beispiel verwendet HTML, um ein positioniertes Element mit einem Anker zu verknüpfen. CSS wird dann verwendet, um das positionierte Element rechts vom Anker anzuheften.

#### HTML

Wir erstellen ein {{htmlelement("div")}}-Element mit einer `id` von `example-anchor`. Dies ist unser Anker-Element. Anschließend fügen wir ein weiteres `<div>` mit dem `anchor`-Attribut hinzu, das auf `example-anchor` gesetzt ist. Dies bestimmt das erste `<div>` als Anker für das zweite `<div>` und verknüpft die beiden miteinander.

Wir fügen auch etwas Fülltext um die beiden `<div>`s hinzu, um den {{htmlelement("body")}} höher zu machen, sodass er scrollen kann.

```html
<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
  incididunt ut labore et dolore magna aliqua. Dui nunc mattis enim ut tellus
  elementum sagittis vitae et.
</p>

<div class="anchor" id="example-anchor">⚓︎</div>

<div class="infobox" anchor="example-anchor">
  <p>This is an information box.</p>
</div>

<p>
  Nisi quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus. In arcu
  cursus euismod quis viverra nibh cras pulvinar. Vulputate ut pharetra sit amet
  aliquam.
</p>

<p>
  Malesuada nunc vel risus commodo viverra maecenas accumsan lacus. Vel elit
  scelerisque mauris pellentesque pulvinar pellentesque habitant morbi
  tristique. Porta lorem mollis aliquam ut porttitor. Turpis cursus in hac
  habitasse platea dictumst quisque. Dolor sit amet consectetur adipiscing elit.
  Ornare lectus sit amet est placerat. Nulla aliquet porttitor lacus luctus
  accumsan.
</p>
```

#### CSS

```css hidden
body {
  width: 50%;
  margin: 0 auto;
}

.anchor {
  font-size: 1.8rem;
  color: white;
  text-shadow: 1px 1px 1px black;
  background-color: hsl(240 100% 75%);
  width: fit-content;
  border-radius: 10px;
  border: 1px solid black;
  padding: 3px;
}

.infobox {
  color: darkblue;
  background-color: azure;
  border: 1px solid #ddd;
  padding: 10px;
  border-radius: 10px;
  font-size: 1rem;
}
```

Wir verwenden CSS, um das `infobox`-Element in ein _anker-positioniertes Element_ zu konvertieren und relativ zu seinem Anker zu positionieren. Wir setzen dazu:

- Die {{cssxref("position")}}-Eigenschaft auf `fixed`, um es in ein positioniertes Element zu verwandeln, sodass es relativ zur Position des Ankers positioniert werden kann.
- Die {{cssxref("left")}}-Eigenschaft auf eine {{cssxref("anchor()")}}-Funktion mit einem Wert von `right`. Dies verbindet das positionierte Element mit seinem Anker, indem es seine linke Kante bündig an die rechte Kante des Ankers positioniert.
- Die {{cssxref("align-self")}}-Eigenschaft auf [`anchor-center`](/de/docs/Web/CSS/CSS_anchor_positioning/Using#centering_on_the_anchor_using_anchor-center). Dies bewirkt, dass die Infobox zentral zur Mitte des Ankers in der Inline-Richtung ausgerichtet wird.
- {{cssxref("margin-left")}} auf `10px`, um Platz zwischen dem anker-positionierten Element und seinem Anker zu schaffen.

```css
.infobox {
  position: fixed;
  left: anchor(right);
  align-self: anchor-center;
  margin-left: 10px;
}
```

#### Ergebnis

Scrollen Sie das Beispiel, um zu sehen, wie die Infobox an den Anker gekoppelt ist. Wenn das `anchor`-Attribut unterstützt wird, wird die Infobox rechts vom Anker fixiert. Wenn nicht unterstützt, wird die Infobox zum Viewport fixiert.

{{EmbedLiveSample("Basic `anchor` attribute usage", "100%", 225)}}

## Spezifikationen

Dieses Attribut ist derzeit nicht Teil der HTML-Spezifikation. Lesen Sie die Diskussion über das Hinzufügen des `anchor`-Attributs unter [https://github.com/whatwg/html/pull/9144](https://github.com/whatwg/html/pull/9144).

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLElement.anchorElement`](/de/docs/Web/API/HTMLElement/anchorElement)
- CSS {{cssxref("anchor-name")}}-Eigenschaft
- CSS {{cssxref("position-anchor")}}-Eigenschaft
- [CSS-Anker-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul
