---
title: "HTMLMetaElement: httpEquiv-Eigenschaft"
short-title: httpEquiv
slug: Web/API/HTMLMetaElement/httpEquiv
l10n:
  sourceCommit: 83c8b8d54ac8fa2459b5a31011e68c0485084991
---

{{APIRef("HTML DOM")}}

Die **`HTMLMetaElement.httpEquiv`**-Eigenschaft ruft die Pragma-Direktive oder den Namen eines HTTP-Response-Headers für das {{domxref("HTMLMetaElement.content")}}-Attribut ab oder setzt diesen. Für weitere Details zu den möglichen Werten, siehe das [http-equiv](/de/docs/Web/HTML/Element/meta#http-equiv)-Attribut.

## Wert

Ein String.

## Beispiele

### Lesen des `http-equiv`-Werts eines Meta-Elements

Das folgende Beispiel fragt ein `<meta>`-Element mit einem `http-equiv`-Attribut ab. Das `http-equiv`-Attribut wird in der Konsole angezeigt und zeigt eine `refresh` [Pragma-Direktive](/de/docs/Web/HTML/Element/meta#http-equiv), die den Browser anweist, die Seite nach einer Anzahl von Sekunden, die durch das `content`-Attribut definiert sind, zu aktualisieren:

```js
// given <meta http-equiv="refresh" content="10" />
const meta = document.querySelector("meta[http-equiv]");
console.log(meta.httpEquiv);
// refresh
console.log(meta.content);
// 10
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("meta")}}
