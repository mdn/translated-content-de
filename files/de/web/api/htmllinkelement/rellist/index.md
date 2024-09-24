---
title: "HTMLLinkElement: relList-Eigenschaft"
short-title: relList
slug: Web/API/HTMLLinkElement/relList
l10n:
  sourceCommit: 1a790d83cbfcd76ac05a1b18697597f8d110d2cf
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte **`relList`**-Eigenschaft der {{domxref("HTMLLinkElement")}}-Schnittstelle spiegelt das [`rel`](/de/docs/Web/HTML/Attributes/rel)-Attribut wider. Es ist eine dynamische {{domxref("DOMTokenList")}}, die den Satz von Link-Typen enthält, der die Beziehung zwischen der durch das {{HTMLElement("link")}}-Element dargestellten Ressource und dem aktuellen Dokument angibt.

Die Eigenschaft selbst ist schreibgeschützt, das bedeutet, dass Sie die
{{domxref("DOMTokenList")}} nicht durch eine andere ersetzen können, aber der Inhalt der zurückgegebenen Liste kann geändert werden.

## Wert

Eine dynamische {{domxref("DOMTokenList")}} von Strings.

## Beispiele

```js
const links = document.getElementsByTagName("link");
for (const link of links) {
  console.log("New link found.");
  link.relList.forEach((relEntry) => {
    console.log(relEntry);
  });
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die gleichwertige Eigenschaft bei {{HTMLElement("a")}} und {{HTMLElement("area")}},
  {{domxref("HTMLAnchorElement.relList")}} und {{domxref("HTMLAreaElement.relList")}}.
- Die genau gleiche Liste, aber als durch Leerzeichen getrennte Tokens in einem String:
  {{domxref("HTMLLinkElement.rel")}}
