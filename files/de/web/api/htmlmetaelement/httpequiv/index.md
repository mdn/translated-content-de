---
title: "HTMLMetaElement: httpEquiv-Eigenschaft"
short-title: httpEquiv
slug: Web/API/HTMLMetaElement/httpEquiv
l10n:
  sourceCommit: 83c8b8d54ac8fa2459b5a31011e68c0485084991
---

{{APIRef("HTML DOM")}}

Die **`HTMLMetaElement.httpEquiv`**-Eigenschaft erhält oder setzt die Pragma-Direktive oder einen HTTP-Header-Namen für das [`HTMLMetaElement.content`](/de/docs/Web/API/HTMLMetaElement/content)-Attribut.
Weitere Details zu den möglichen Werten finden Sie im [http-equiv](/de/docs/Web/HTML/Element/meta#http-equiv)-Attribut.

## Wert

Ein String.

## Beispiele

### Lesen des `http-equiv`-Werts eines Meta-Elements

Das folgende Beispiel fragt ein `<meta>`-Element mit einem `http-equiv`-Attribut ab.
Das `http-equiv`-Attribut wird in der Konsole protokolliert und zeigt eine `refresh`- [Pragma-Direktive](/de/docs/Web/HTML/Element/meta#http-equiv), die den Browser anweist, die Seite nach einer durch das `content`-Attribut definierten Anzahl von Sekunden zu aktualisieren:

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
