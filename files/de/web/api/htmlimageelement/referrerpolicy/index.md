---
title: "HTMLImageElement: referrerPolicy-Eigenschaft"
short-title: referrerPolicy
slug: Web/API/HTMLImageElement/referrerPolicy
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

Die
**`HTMLImageElement.referrerPolicy`**
Eigenschaft spiegelt das HTML-Attribut [`referrerpolicy`](/de/docs/Web/HTML/Reference/Elements/img#referrerpolicy) des
{{HTMLElement("img")}}-Elements wider, das definiert, welcher Referrer gesendet wird, wenn die Ressource abgerufen wird.

## Wert

Ein String; einer der folgenden:

- `no-referrer`
  - : Der {{HTTPHeader("Referer")}}-Header wird vollständig weggelassen. Es werden keine Referrer-Informationen mit den Anfragen gesendet.
- `no-referrer-when-downgrade`
  - : Die URL wird als Referrer gesendet, wenn das Protokoll-Sicherheitsniveau gleich bleibt (z.B. HTTP→HTTP, HTTPS→HTTPS), aber nicht an ein weniger sicheres Ziel gesendet (z.B. HTTPS→HTTP).
- `origin`
  - : Nur der Ursprung des Dokuments wird in allen Fällen als Referrer gesendet. Das Dokument `https://example.com/page.html` sendet den Referrer `https://example.com/`.
- `origin-when-cross-origin`
  - : Eine vollständige URL wird gesendet, wenn eine gleichstammmige Anfrage ausgeführt wird, aber nur der Ursprung des Dokuments wird in anderen Fällen gesendet.
- `same-origin`
  - : Ein Referrer wird für [gleich-stammige Ursprünge](/de/docs/Web/Security/Same-origin_policy) gesendet, aber bei Cross-Origin-Anfragen werden keine Referrer-Informationen enthalten sein.
- `strict-origin`
  - : Nur der Ursprung des Dokuments wird als Referrer gesendet, wenn das Protokoll-Sicherheitsniveau gleich bleibt (z.B. HTTPS→HTTPS), aber nicht an ein weniger sicheres Ziel gesendet (z.B. HTTPS→HTTP).
- `strict-origin-when-cross-origin` (Standard)
  - : Dies ist das Standardverhalten des Benutzeragenten, wenn keine Richtlinie angegeben ist. Eine vollständige URL wird gesendet, wenn eine gleichstammmige Anfrage ausgeführt wird. Es wird nur der Ursprung gesendet, wenn das Protokoll-Sicherheitsniveau gleich bleibt (z.B. HTTPS→HTTPS), und es wird kein Header an ein weniger sicheres Ziel gesendet (z.B. HTTPS→HTTP).
- `unsafe-url`
  - : Eine vollständige URL wird gesendet, wenn eine gleichstammmige oder Cross-Origin-Anfrage ausgeführt wird. Diese Richtlinie wird Ursprünge und Pfade von TLS-geschützten Ressourcen an unsichere Ursprünge preisgeben. Überlegen Sie sorgfältig die Auswirkungen dieser Einstellung.

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
