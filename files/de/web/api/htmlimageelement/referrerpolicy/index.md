---
title: "HTMLImageElement: referrerPolicy-Eigenschaft"
short-title: referrerPolicy
slug: Web/API/HTMLImageElement/referrerPolicy
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{APIRef("HTML DOM")}}

Die **`HTMLImageElement.referrerPolicy`**-Eigenschaft spiegelt das HTML-Attribut [`referrerpolicy`](/de/docs/Web/HTML/Element/img#referrerpolicy) des {{HTMLElement("img")}}-Elements wider, das definiert, welcher Referrer beim Abrufen der Ressource gesendet wird.

## Wert

Ein String; einer der folgenden:

- `no-referrer`
  - : Der {{HTTPHeader("Referer")}}-Header wird vollständig ausgelassen. Es werden keine Referrer-Informationen mit den Anfragen gesendet.
- `no-referrer-when-downgrade`
  - : Die URL wird als Referrer gesendet, wenn das Sicherheitsniveau des Protokolls gleich bleibt (z.B. HTTP→HTTP, HTTPS→HTTPS), aber nicht zu einem weniger sicheren Ziel (z.B. HTTPS→HTTP) gesendet wird.
- `origin`
  - : Nur die Herkunft des Dokuments wird in allen Fällen als Referrer gesendet. Das Dokument `https://example.com/page.html` sendet den Referrer `https://example.com/`.
- `origin-when-cross-origin`
  - : Eine vollständige URL wird gesendet, wenn eine gleiche Herkunfts-Anfrage ausgeführt wird, aber nur die Herkunft des Dokuments für andere Fälle.
- `same-origin`
  - : Ein Referrer wird für [same-site origins](/de/docs/Web/Security/Same-origin_policy) gesendet, aber Cross-Origin-Anfragen enthalten keine Referrer-Informationen.
- `strict-origin`
  - : Nur die Herkunft des Dokuments wird als Referrer gesendet, wenn das Sicherheitsniveau des Protokolls gleich bleibt (z.B. HTTPS→HTTPS), aber nicht zu einem weniger sicheren Ziel (z.B. HTTPS→HTTP).
- `strict-origin-when-cross-origin` (Standard)
  - : Dies ist das Standardverhalten des Benutzeragenten, wenn keine Richtlinie angegeben ist. Eine vollständige URL wird gesendet, wenn eine gleiche Herkunfts-Anfrage ausgeführt wird, nur die Herkunft wird gesendet, wenn das Sicherheitsniveau des Protokolls gleich bleibt (z.B. HTTPS→HTTPS), und kein Header wird zu einem weniger sicheren Ziel gesendet (z.B. HTTPS→HTTP).
- `unsafe-url`
  - : Eine vollständige URL wird gesendet, wenn eine gleiche Herkunfts- oder Cross-Origin-Anfrage ausgeführt wird. Diese Richtlinie leakt Ursprünge und Pfade von TLS-geschützten Ressourcen zu unsicheren Ursprüngen. Berücksichtigen Sie sorgfältig die Auswirkungen dieser Einstellung.

## Beispiele

```js
const img = new Image();
img.src = "img/logo.png";
img.referrerPolicy = "origin";

const div = document.getElementById("divAround");
div.appendChild(img); // Fetch the image using the origin as the referrer
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLAnchorElement.referrerPolicy`](/de/docs/Web/API/HTMLAnchorElement/referrerPolicy),
  [`HTMLAreaElement.referrerPolicy`](/de/docs/Web/API/HTMLAreaElement/referrerPolicy), und
  [`HTMLIFrameElement.referrerPolicy`](/de/docs/Web/API/HTMLIFrameElement/referrerPolicy).
