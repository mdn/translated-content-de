---
title: "HTMLElement: anchorElement-Eigenschaft"
short-title: anchorElement
slug: Web/API/HTMLElement/anchorElement
l10n:
  sourceCommit: bba05bf24a714715f3517cf1296274dd41d6e811
---

{{APIRef("HTML DOM")}}{{Non-standard_Header}}{{SeeCompatTable}}

Die **`anchorElement`**-Eigenschaft der [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Schnittstelle gibt eine Referenz auf das Ankerelement des Elements zurück. Dies funktioniert nur für Elemente, die über das [`anchor`](/de/docs/Web/HTML/Global_attributes/anchor)-HTML-Attribut mit ihren Ankern verbunden sind, nicht für Elemente, die über die CSS-Eigenschaften {{cssxref("anchor-name")}} und {{cssxref("position-anchor")}} mit ihren Ankern verbunden sind.

Für detaillierte Informationen zu Ankerfunktionen und deren Verwendung siehe die [CSS-Anker-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning)-Modul-Startseite und den [Leitfaden zur Verwendung der CSS-Anker-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using).

## Wert

Eine Instanz von [`HTMLElement`](/de/docs/Web/API/HTMLElement), die das Ankerelement des Elements repräsentiert, oder `null`, wenn es keines hat.

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel verknüpft ein Element mit einem Anker in HTML und verwendet JavaScript, um eine Referenz auf das Ankerelement abzurufen.

#### HTML

Im HTML erstellen wir ein {{htmlelement("div")}}-Element mit einer [`id`](/de/docs/Web/HTML/Global_attributes/id) von `example-anchor`. Dies wird unser Ankerelement sein. Wir fügen dann ein weiteres `<div>` mit einer Klasse von `infobox` und einem [`anchor`](/de/docs/Web/HTML/Global_attributes/anchor)-Attribut, das auf `example-anchor` gesetzt ist, hinzu. Dies bestimmt das erste `<div>` als Anker des zweiten `<div>`, wodurch die beiden verbunden werden.

Wir fügen auch ein {{htmlelement("p")}}-Element hinzu, um einige Ergebnisse auszugeben.

```html
<div class="anchor" id="example-anchor">⚓︎</div>

<div class="infobox" anchor="example-anchor">
  <p>This is an information box.</p>
</div>

<p class="output"></p>
```

#### JavaScript

Wir verwenden JavaScript, um Referenzen auf das positionierte Element und das Ausgabeelement zu erhalten, und drucken dann den `id`-Wert der `anchorElement`-Eigenschaft des positionierten Elements in die Ausgabe. Dies zeigt, dass das Ankerelement das `anchorElement` des positionierten Elements ist.

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

Dieses Attribut ist derzeit nicht Teil der HTML-Spezifikation. Lesen Sie die Diskussion über das Hinzufügen der `anchorElement`-Eigenschaft unter [https://github.com/whatwg/html/pull/9144](https://github.com/whatwg/html/pull/9144).

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- HTML [`anchor`](/de/docs/Web/HTML/Global_attributes/anchor)-Attribut
- CSS-{{cssxref("anchor-name")}} und {{cssxref("position-anchor")}}-Eigenschaften
- [CSS-Anker-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning)-Modul
- [Leitfaden zur Verwendung der CSS-Anker-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using)
