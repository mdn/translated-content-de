---
title: "HTMLAnchorElement: Eigenschaft attributionSourceId"
short-title: attributionSourceId
slug: Web/API/HTMLAnchorElement/attributionSourceId
l10n:
  sourceCommit: 44a5fa2aace490e0114349d9d683675b2f5cacce
---

{{APIRef("HTML DOM")}}

Die **`attributionSourceId`**-Eigenschaft der [`HTMLAnchorElement`](/de/docs/Web/API/HTMLAnchorElement)-Schnittstelle liest und setzt das `attributionsourceid` HTML-Attribut auf einem {{htmlelement("a")}}-Element.

Die `attributionSourceId` wird im Rahmen der [Private Click Measurement](https://privacycg.github.io/private-click-measurement/)-Spezifikation verwendet, um den Inhalt zu identifizieren, der beim Klicken auf einen Link zu einer anderen Seite angeklickt wurde.

## Wert

Eine Zahl. Gültige Werte für die private Klickmessung liegen zwischen `0` und `255`. Der Standardwert ist `0`. Werte außerhalb dieses Bereichs führen beim Setzen der Eigenschaft zwar nicht zu einem Fehler, werden vom Browser jedoch für Zuordnungszwecke ignoriert.

## Beispiele

### Festlegen einer Attribution-Source-ID für einen Link

```html
<a
  id="ad-link"
  href="https://example.com"
  attributiondestination="https://example.com">
  Click to visit our shop
</a>
```

```js
const adLink = document.getElementById("ad-link");
adLink.attributionSourceId = 17;

console.log(adLink.attributionSourceId); // 17
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLAnchorElement`](/de/docs/Web/API/HTMLAnchorElement)
- {{htmlelement("a")}} HTML-Element
- [Private Click Measurement](https://privacycg.github.io/private-click-measurement/)-Spezifikation
