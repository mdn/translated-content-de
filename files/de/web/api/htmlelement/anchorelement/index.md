---
title: "HTMLElement: anchorElement-Eigenschaft"
short-title: anchorElement
slug: Web/API/HTMLElement/anchorElement
l10n:
  sourceCommit: 7b35cff797e29c66f364ece0fd64f4b2a3b2acf3
---

{{APIRef("HTML DOM")}}{{Non-standard_Header}}{{SeeCompatTable}}

Die **`anchorElement`**-Eigenschaft der [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Schnittstelle gibt eine Referenz auf das Anker-Element des Elements zurück. Dies funktioniert nur bei Elementen, die über das HTML-Attribut [`anchor`](/de/docs/Web/HTML/Global_attributes/anchor) mit ihren Ankern verbunden sind, nicht bei Elementen, die über die CSS-Eigenschaften {{cssxref("anchor-name")}} und {{cssxref("position-anchor")}} mit ihren Ankern verbunden sind.

## Wert

Eine Instanz von [`HTMLElement`](/de/docs/Web/API/HTMLElement), die das Anker-Element des Elements darstellt, oder `null`, wenn es keines besitzt.

## Beispiele

### Grundlegende Nutzung

Dieses Beispiel verknüpft ein Element mit einem Anker in HTML und verwendet JavaScript, um eine Referenz auf das Anker-Element abzurufen.

#### HTML

Im HTML erstellen wir ein {{htmlelement("div")}}-Element mit einer [`id`](/de/docs/Web/HTML/Global_attributes/id) von `example-anchor`. Dies wird unser Anker-Element sein. Dann fügen wir ein weiteres `<div>` mit einer Klasse `infobox` und einem [`anchor`](/de/docs/Web/HTML/Global_attributes/anchor)-Attribut hinzu, das auf `example-anchor` gesetzt ist. Dies bezeichnet das erste `<div>` als Anker des zweiten `<div>` und verbindet die beiden miteinander.

Wir fügen auch ein {{htmlelement("p")}}-Element hinzu, um einige Ergebnisse auszugeben.

```html
<div class="anchor" id="example-anchor">⚓︎</div>

<div class="infobox" anchor="example-anchor">
  <p>This is an information box.</p>
</div>

<p class="output"></p>
```

#### JavaScript

Wir verwenden JavaScript, um Referenzen auf das positionierte Element und das Ausgabeelement zu erhalten, und dann den Wert der `anchorElement`-Eigenschaft des positionierten Elements, um die damit verbundene `id` in die Ausgabe zu drucken. Dies zeigt, dass das Anker-Element tatsächlich das `anchorElement` des positionierten Elements ist.

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

{{EmbedLiveSample("Basic usage", "100%", 110)}}

## Spezifikationen

Dieses Attribut ist derzeit nicht Teil der HTML-Spezifikation. Lesen Sie die Diskussion über die Hinzufügung der `anchorElement`-Eigenschaft unter [https://github.com/whatwg/html/pull/9144](https://github.com/whatwg/html/pull/9144).

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- HTML [`anchor`](/de/docs/Web/HTML/Global_attributes/anchor)-Attribut
- CSS-Eigenschaften {{cssxref("anchor-name")}} und {{cssxref("position-anchor")}}
- [CSS-Anker-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning)-Modul
