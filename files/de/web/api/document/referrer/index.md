---
title: "Document: referrer-Eigenschaft"
short-title: referrer
slug: Web/API/Document/referrer
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("DOM")}}

Die **`Document.referrer`**-Eigenschaft gibt die [URI](https://www.w3.org/Addressing/#background) der Seite zurück, die auf diese Seite verlinkt hat.

## Wert

Der Wert ist ein leerer String, wenn der Benutzer direkt zur Seite navigiert ist (nicht über einen Link, sondern zum Beispiel durch die Nutzung eines Lesezeichens). Da diese Eigenschaft nur einen String zurückgibt, erhalten Sie keinen Zugriff auf das Document Object Model (DOM) der verweisenden Seite.

Innerhalb eines {{HTMLElement("iframe")}} wird `Document.referrer` anfänglich auf das [`href`](/de/docs/Web/API/HTMLAnchorElement/href) des Elternteil-`Window.location` bei Same-Origin-Anfragen gesetzt. Bei Cross-Origin-Anfragen ist es standardmäßig der [`origin`](/de/docs/Web/API/HTMLAnchorElement/origin) des Elternteil-`Window.location`. Für weitere Informationen siehe die Dokumentation zur [Referrer-Policy: strict-origin-when-cross-origin](/de/docs/Web/HTTP/Reference/Headers/Referrer-Policy#strict-origin-when-cross-origin).

## Beispiele

Das folgende Beispiel wird einen String mit dem Referrer des Dokuments protokollieren.

```js
console.log(document.referrer);
```

Wenn der Benutzer über einen Link wie `<a href="https://www.w3.org/">W3</a>` auf die Seite navigiert hat, wird die vorherige Domain wie `developer.mozilla.org` ausgegeben. Wenn der Benutzer direkt zur Seite navigiert ist, wird ein leerer String ausgegeben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
