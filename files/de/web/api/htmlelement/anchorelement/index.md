---
title: "HTMLElement: anchorElement-Eigenschaft"
short-title: anchorElement
slug: Web/API/HTMLElement/anchorElement
l10n:
  sourceCommit: bba05bf24a714715f3517cf1296274dd41d6e811
---

{{APIRef("HTML DOM")}}{{Non-standard_Header}}{{SeeCompatTable}}

Die **`anchorElement`**-Eigenschaft der {{domxref("HTMLElement")}}-Schnittstelle gibt eine Referenz auf das Ankerelement des Elements zurück. Dies funktioniert nur bei Elementen, die über das [`anchor`](/de/docs/Web/HTML/Global_attributes/anchor) HTML-Attribut mit ihren Ankern verknüpft sind, nicht bei Elementen, die über die CSS-Eigenschaften {{cssxref("anchor-name")}} und {{cssxref("position-anchor")}} mit ihren Ankern verknüpft sind.

Für detaillierte Informationen zu Ankerfunktionen und deren Verwendung siehe die moduläre Einstiegsseite zu [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) und den Leitfaden [Verwendung der CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using).

## Wert

Eine {{domxref("HTMLElement")}}-Instanz, die das Ankerelement des Elements darstellt, oder `null`, falls keines vorhanden ist.

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel verknüpft ein Element in HTML mit einem Anker und verwendet JavaScript, um eine Referenz auf das Ankerelement abzurufen.

#### HTML

Im HTML erstellen wir ein {{htmlelement("div")}}-Element mit einer [`id`](/de/docs/Web/HTML/Global_attributes/id) von `example-anchor`. Dies wird unser Ankerelement sein. Dann fügen wir ein weiteres `<div>` mit einer Klasse `infobox` und einem [`anchor`](/de/docs/Web/HTML/Global_attributes/anchor)-Attribut hinzu, das auf `example-anchor` gesetzt ist. Dies legt das erste `<div>` als Anker des zweiten `<div>` fest und verknüpft die beiden miteinander.

Wir fügen auch ein {{htmlelement("p")}}-Element hinzu, um einige Ergebnisse auszugeben.

```html
<div class="anchor" id="example-anchor">⚓︎</div>

<div class="infobox" anchor="example-anchor">
  <p>Dies ist eine Informationsbox.</p>
</div>

<p class="output"></p>
```

#### JavaScript

Wir verwenden JavaScript, um Referenzen auf das positionierte Element und das Ausgabeelement zu erhalten und drucken dann den Wert der mit der `anchorElement`-Eigenschaft des positionierten Elements verknüpften `id` in die Ausgabe, um zu zeigen, dass das Ankerelement das `anchorElement` des positionierten Elements ist.

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

Dieses Attribut ist derzeit kein Bestandteil der HTML-Spezifikation. Lesen Sie die Diskussion über das Hinzufügen der `anchorElement`-Eigenschaft unter [https://github.com/whatwg/html/pull/9144](https://github.com/whatwg/html/pull/9144).

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- HTML [`anchor`](/de/docs/Web/HTML/Global_attributes/anchor) Attribut
- CSS {{cssxref("anchor-name")}} und {{cssxref("position-anchor")}} Eigenschaften
- [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul
- [Verwendung der CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using) Leitfaden
