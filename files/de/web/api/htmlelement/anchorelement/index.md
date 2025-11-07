---
title: "HTMLElement: anchorElement-Eigenschaft"
short-title: anchorElement
slug: Web/API/HTMLElement/anchorElement
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{APIRef("HTML DOM")}}{{Non-standard_Header}}{{SeeCompatTable}}

Die **`anchorElement`**-Eigenschaft der [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Schnittstelle gibt eine Referenz auf das Ankerelement des Elements zurück. Dies funktioniert nur bei Elementen, die über das [`anchor`](/de/docs/Web/HTML/Reference/Global_attributes/anchor)-HTML-Attribut mit ihren Ankern verbunden sind und nicht bei Elementen, die über die CSS-Eigenschaften {{cssxref("anchor-name")}} und {{cssxref("position-anchor")}} verbunden sind.

## Wert

Eine Instanz von [`HTMLElement`](/de/docs/Web/API/HTMLElement), die das Ankerelement des Elements darstellt, oder `null`, wenn es keines besitzt.

## Beispiele

### Grundlegende Nutzung

Dieses Beispiel verbindet ein Element in HTML mit einem Anker und verwendet JavaScript, um eine Referenz auf das Ankerelement abzurufen.

#### HTML

Im HTML erstellen wir ein {{htmlelement("div")}}-Element mit einer [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) von `example-anchor`. Dies wird unser Ankerelement sein. Dann fügen wir ein weiteres `<div>` mit einer Klasse `infobox` und einem [`anchor`](/de/docs/Web/HTML/Reference/Global_attributes/anchor)-Attribut hinzu, das auf `example-anchor` gesetzt ist. Dies bestimmt das erste `<div>` als den Anker des zweiten `<div>` und verbindet die beiden miteinander.

Wir fügen auch ein {{htmlelement("p")}}-Element hinzu, um einige Ergebnisse auszugeben.

```html
<div class="anchor" id="example-anchor">⚓︎</div>

<div class="infobox" anchor="example-anchor">
  <p>This is an information box.</p>
</div>

<p class="output"></p>
```

#### JavaScript

Wir verwenden JavaScript, um Referenzen sowohl auf das positionierte Element als auch auf das Ausgabeelement zu erhalten. Dann geben wir den Wert der `anchorElement`-Eigenschaft des positionierten Elements, die zugehörige `id`, in die Ausgabe und zeigen, dass das Ankerelement das `anchorElement` des positionierten Elements ist.

```js
const posElem = document.querySelector(".infobox");
const outputElem = document.querySelector(".output");

try {
  outputElem.textContent = `The positioned element's anchor element is the ${posElem.anchorElement.id}.`;
} catch (e) {
  outputElem.textContent = `Your browser doesn't support the anchorElement property.`;
}
```

#### Ergebnis

Das Ergebnis ist wie folgt.

{{EmbedLiveSample("Grundlegende Nutzung", "100%", 110)}}

## Spezifikationen

Dieses Attribut ist derzeit kein Bestandteil der HTML-Spezifikation. Lesen Sie die Diskussion über das Hinzufügen der `anchorElement`-Eigenschaft unter [https://github.com/whatwg/html/pull/9144](https://github.com/whatwg/html/pull/9144).

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- HTML-Attribut [`anchor`](/de/docs/Web/HTML/Reference/Global_attributes/anchor)
- CSS-Eigenschaften {{cssxref("anchor-name")}} und {{cssxref("position-anchor")}}
- [CSS-Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning)-Modul
