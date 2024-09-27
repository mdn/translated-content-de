---
title: "Document: referrer-Eigenschaft"
short-title: referrer
slug: Web/API/Document/referrer
l10n:
  sourceCommit: 7e385b7fecd116785ef090dd385051398fa1293c
---

{{APIRef("DOM")}}

Die **`Document.referrer`**-Eigenschaft gibt die [URI](https://www.w3.org/Addressing/#background) der Seite zurück, die auf diese Seite verwiesen hat.

## Wert

Der Wert ist ein leerer String, wenn der Benutzer direkt zur Seite navigiert hat (nicht über einen
Link, sondern zum Beispiel durch die Verwendung eines Lesezeichens). Da diese Eigenschaft nur einen
String zurückgibt, erhalten Sie keinen Zugriff auf das Dokumentobjektmodell (DOM) der verweisenden Seite.

Innerhalb eines {{HTMLElement("iframe")}} wird `Document.referrer` anfänglich
auf das [`href`](/de/docs/Web/API/HTMLAnchorElement/href) des Elternteils
[`Window.location`](/de/docs/Web/API/Window/location) bei gleichherzigen Anfragen gesetzt.
Bei anfrageübergreifenden Anfragen ist es standardmäßig der [`origin`](/de/docs/Web/API/HTMLAnchorElement/origin) des `Window.location` des Elternteils.
Für weitere Informationen siehe die [Referrer-Policy: strict-origin-when-cross-origin](/de/docs/Web/HTTP/Headers/Referrer-Policy#strict-origin-when-cross-origin) Dokumentation.

## Beispiele

Das folgende Beispiel protokolliert einen String, der den Referrer des Dokuments enthält.

```js
console.log(document.referrer);
```

Wenn der Benutzer über einen Link wie `<a href="https://www.w3.org/">W3</a>` zur Seite navigiert hat, wird die vorherige Domain wie `developer.mozilla.org` ausgegeben. Wenn der Benutzer direkt auf die Seite navigiert hat, wird ein leerer String ausgegeben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
