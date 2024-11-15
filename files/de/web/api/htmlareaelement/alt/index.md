---
title: "HTMLAreaElement: alt-Eigenschaft"
short-title: alt
slug: Web/API/HTMLAreaElement/alt
l10n:
  sourceCommit: 96424fe82247208bdbf281fd6b7f536079320c2a
---

{{APIRef("HTML DOM")}}

Die **`alt`**-Eigenschaft des [`HTMLAreaElement`](/de/docs/Web/API/HTMLAreaElement)-Interfaces spezifiziert den Text des Hyperlinks und definiert das textuelle Label für den Link in einer Bildkarte. Sie spiegelt das [`alt`](/de/docs/Web/HTML/Element/area#alt)-Attribut des {{htmlelement("area")}}-Elements wider.

Der `alt`-Wert muss ein Text sein, der zusammen mit dem `alt`-Text der anderen `<area>`-Hyperlinks innerhalb desselben {{htmlelement("map")}} und dem `alt`-Text des {{htmlelement("img")}} selbst dem Benutzer die gleiche Auswahlmöglichkeit bietet, wie sie der Hyperlink bieten würde, wenn er ohne seinen Text, aber mit seiner Form auf das Bild angewendet, verwendet wird.

Wenn das {{htmlelement("area")}} ein Link ist (eine [`href`](/de/docs/Web/API/HTMLAreaElement/href)-Eigenschaft enthält), sollte der `alt`-Eigenschaftswert eine nicht-leere Zeichenkette sein, die das Label für den Link angibt, das geeignet wäre, falls das Bild nicht verfügbar wäre. Das `alt`-Attribut für ein Link-`<area>` kann nur leer sein, wenn es ein anderes `<area>`-Element im selben `<map>` gibt, das auf dieselbe Ressource verweist und ein nicht-leeres `alt`-Attribut hat.

## Wert

Eine Zeichenkette.

## Beispiele

```js
const areaElement = document.getElementById("imageArea");
console.log(areaElement.alt);
areaElement.alt = "A much better link description";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLImageElement.alt`](/de/docs/Web/API/HTMLImageElement/alt)
- [`HTMLInputElement.alt`](/de/docs/Web/API/HTMLInputElement/alt)
- [`HTMLMapElement`](/de/docs/Web/API/HTMLMapElement)
- {{HTMLElement("area")}}
- {{HTMLElement("map")}}
- {{HTMLElement("a")}}
- [Guter Alt-Text, schlechter Alt-Text — Machen Sie Ihre Inhalte wahrnehmbar](https://www.wcag.com/blog/good-alt-text-bad-alt-text-making-your-content-perceivable/) auf WCAG.com (2021)
- [Ein Alt-Entscheidungsbaum](https://www.w3.org/WAI/tutorials/images/decision-tree/) auf W3C Web Accessibility Initiative (WAI)
