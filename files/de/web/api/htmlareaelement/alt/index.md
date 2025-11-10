---
title: "HTMLAreaElement: alt-Eigenschaft"
short-title: alt
slug: Web/API/HTMLAreaElement/alt
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

Die **`alt`**-Eigenschaft des [`HTMLAreaElement`](/de/docs/Web/API/HTMLAreaElement)-Interfaces gibt den Text des Hyperlinks an und definiert die textuelle Beschriftung für den Link einer Bildkarte. Sie spiegelt das [`alt`](/de/docs/Web/HTML/Reference/Elements/area#alt)-Attribut des {{htmlelement("area")}}-Elements wider.

Der `alt`-Wert muss ein Text sein, der, wenn er zusammen mit dem `alt`-Text der anderen `<area>`-Hyperlinks innerhalb derselben {{htmlelement("map")}} und dem `alt`-Text des {{htmlelement("img")}} selbst präsentiert wird, dem Benutzer dieselbe Art von Auswahl bietet, wie es der Hyperlink ohne seinen Text tun würde, jedoch mit seiner Form auf das Bild angewendet.

Wenn das {{htmlelement("area")}} ein Link ist (eine [`href`](/de/docs/Web/API/HTMLAreaElement/href)-Eigenschaft enthält), sollte der `alt`-Eigenschaftswert eine nicht-leere Zeichenfolge sein, die die Beschriftung für den Link angibt, die angemessen wäre, wenn das Bild nicht verfügbar wäre. Das `alt`-Attribut für einen Link im `<area>`-Element kann nur leer sein, wenn ein anderes `<area>`-Element im selben `<map>` auf dieselbe Ressource verweist und ein nicht-leeres `alt`-Attribut hat.

## Wert

Ein String.

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
- [Guter alt-Text, schlechter alt-Text – Ihre Inhalte wahrnehmbar machen](https://www.wcag.com/blog/good-alt-text-bad-alt-text-making-your-content-perceivable/) auf WCAG.com (2021)
- [Ein Entscheidungsbaum für alt-Text](https://www.w3.org/WAI/tutorials/images/decision-tree/) bei der W3C Web Accessibility Initiative (WAI)
