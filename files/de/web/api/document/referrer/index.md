---
title: "Dokument: referrer Eigenschaft"
short-title: referrer
slug: Web/API/Document/referrer
l10n:
  sourceCommit: 7e385b7fecd116785ef090dd385051398fa1293c
---

{{APIRef("DOM")}}

Die **`Document.referrer`** Eigenschaft gibt die [URI](https://www.w3.org/Addressing/#background) der Seite zurück, die auf diese Seite verwiesen hat.

## Wert

Der Wert ist ein leerer String, wenn der Benutzer direkt zur Seite navigiert hat (nicht durch einen Link, sondern zum Beispiel durch die Verwendung eines Lesezeichens). Da diese Eigenschaft nur einen String zurückgibt, bietet sie keinen Zugriff auf das Document Object Model (DOM) der verweisenden Seite.

Innerhalb eines {{HTMLElement("iframe")}} wird `Document.referrer` anfangs auf das {{domxref("HTMLAnchorElement/href", "href")}} des Elternteils {{domxref("Window/location", "Window.location")}} bei Same-Origin-Anfragen gesetzt. Bei Cross-Origin-Anfragen ist es standardmäßig der {{domxref("HTMLAnchorElement/origin", "origin")}} des `Window.location` des Elternteils. Für weitere Informationen lesen Sie die [Referrer-Policy: strict-origin-when-cross-origin](/de/docs/Web/HTTP/Headers/Referrer-Policy#strict-origin-when-cross-origin) Dokumentation.

## Beispiele

Das folgende Beispiel protokolliert einen String, der den Referrer des Dokuments enthält.

```js
console.log(document.referrer);
```

Wenn der Benutzer über einen Link wie `<a href="https://www.w3.org/">W3</a>` zur Seite navigierte, wird die vorherige Domain, wie `developer.mozilla.org`, ausgegeben. Wenn der Benutzer direkt zur Seite navigierte, wird ein leerer String ausgegeben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
