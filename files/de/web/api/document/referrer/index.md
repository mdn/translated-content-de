---
title: "Dokument: referrer-Eigenschaft"
short-title: referrer
slug: Web/API/Document/referrer
l10n:
  sourceCommit: ae380dd2b211ab497e064d4074ff81e71cb91a00
---

{{APIRef("DOM")}}

Die schreibgeschützte Eigenschaft **`referrer`** der [`Document`](/de/docs/Web/API/Document)-Schnittstelle gibt die [URI](https://www.w3.org/Addressing/#background) der Seite zurück, von der aus auf diese Seite verlinkt wurde.

## Wert

Der Wert ist eine leere Zeichenfolge, wenn der Benutzer die Seite direkt aufgerufen hat, also nicht über einen Link, sondern beispielsweise über ein Lesezeichen. Da diese Eigenschaft nur eine Zeichenfolge zurückgibt, bietet sie keinen Zugriff auf das Document Object Model (DOM) der verweisenden Seite.

Innerhalb eines {{HTMLElement("iframe")}} wird `Document.referrer` bei Same-Origin-Anfragen zunächst auf den [`href`](/de/docs/Web/API/HTMLAnchorElement/href)-Wert von [`Window.location`](/de/docs/Web/API/Window/location) der übergeordneten Seite gesetzt. Bei Cross-Origin-Anfragen ist es standardmäßig der [`origin`](/de/docs/Web/API/HTMLAnchorElement/origin)-Wert von `Window.location` der übergeordneten Seite. Weitere Informationen finden Sie in der Dokumentation zu [Referrer-Policy: strict-origin-when-cross-origin](/de/docs/Web/HTTP/Reference/Headers/Referrer-Policy#strict-origin-when-cross-origin).

## Beispiele

Der folgende Code gibt eine Zeichenfolge mit dem Referrer des Dokuments in der Konsole aus.

```js
console.log(document.referrer);
```

Wenn der Benutzer über einen Link wie `<a href="https://www.w3.org/">W3</a>` zur Seite navigiert ist, wird die vorherige Domain ausgegeben, beispielsweise `developer.mozilla.org`. Wenn der Benutzer die Seite direkt aufgerufen hat, wird eine leere Zeichenfolge ausgegeben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
