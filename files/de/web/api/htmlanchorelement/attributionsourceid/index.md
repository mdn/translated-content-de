---
title: "HTMLAnchorElement: attributionSourceId-Eigenschaft"
short-title: attributionSourceId
slug: Web/API/HTMLAnchorElement/attributionSourceId
l10n:
  sourceCommit: af9a8ff87cfa6563c9a082162ce4ed7ba0b204e1
---

{{APIRef("HTML DOM")}}{{SeeCompatTable}}

Die **`attributionSourceId`**-Eigenschaft der [`HTMLAnchorElement`](/de/docs/Web/API/HTMLAnchorElement)-Schnittstelle ruft das `attributionsourceid`-HTML-Attribut an einem {{htmlelement("a")}}-Element ab und setzt es.

Das `attributionSourceId` wird als Teil der [Private Click Measurement](https://privacycg.github.io/private-click-measurement/)-Spezifikation verwendet, um den Inhalt zu identifizieren, der angeklickt wurde, wenn ein Link zu einer anderen Seite gefolgt wird.

## Wert

Eine Zahl. Gültige Werte für private Click-Messungen liegen zwischen `0` und `255`. Der Standardwert ist `0`. Werte außerhalb dieses Bereichs führen nicht zu einem Fehler beim Setzen der Eigenschaft, werden jedoch vom Browser für Zuordnungszwecke ignoriert.

## Beispiele

### Setzen einer Attribution-Source-ID auf einem Link

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
