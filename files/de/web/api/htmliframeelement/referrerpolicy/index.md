---
title: "HTMLIFrameElement: referrerPolicy-Eigenschaft"
short-title: referrerPolicy
slug: Web/API/HTMLIFrameElement/referrerPolicy
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef}}

Die Eigenschaft
**`HTMLIFrameElement.referrerPolicy`**
widerspiegelt das HTML-Attribut [`referrerpolicy`](/de/docs/Web/HTML/Reference/Elements/iframe#referrerpolicy) des
{{HTMLElement("iframe")}}-Elements, das definiert, welcher Referrer beim Abrufen der Ressource gesendet wird.

## Wert

- `no-referrer`
  - : Der {{HTTPHeader("Referer")}}-Header wird vollständig weggelassen. Es werden keine Referrer-Informationen mit den Anfragen gesendet.
- `no-referrer-when-downgrade`
  - : Die URL wird als Referrer gesendet, wenn das Sicherheitsniveau des Protokolls gleich bleibt (HTTP→HTTP, HTTPS→HTTPS), aber nicht zu einem weniger sicheren Ziel gesendet wird (HTTPS→HTTP).
- `origin`
  - : Nur der Ursprung des Dokuments wird in jedem Fall als Referrer gesendet. Das Dokument `https://example.com/page.html` wird den Referrer `https://example.com/` senden.
- `origin-when-cross-origin`
  - : Eine vollständige URL wird gesendet, wenn eine Anfrage im gleichen Ursprung durchgeführt wird, aber nur der Ursprung des Dokuments wird in anderen Fällen gesendet.
- `same-origin`
  - : Ein Referrer wird für [gleichseitige Ursprünge](/de/docs/Web/Security/Same-origin_policy) gesendet, aber bei Cross-Origin-Anfragen werden keine Referrer-Informationen enthalten sein.
- `strict-origin`
  - : Nur der Ursprung des Dokuments wird als Referrer gesendet, wenn das Sicherheitsniveau des Protokolls gleich bleibt (HTTPS→HTTPS), aber nicht zu einem weniger sicheren Ziel gesendet wird (HTTPS→HTTP).
- `strict-origin-when-cross-origin` (Standard)
  - : Dies ist das Standardverhalten des Benutzeragenten, wenn keine Richtlinie angegeben ist. Eine vollständige URL wird gesendet, wenn eine Anfrage im gleichen Ursprung durchgeführt wird, nur der Ursprung wird gesendet, wenn das Sicherheitsniveau des Protokolls gleich bleibt (HTTPS→HTTPS), und es wird kein Header zu einem weniger sicheren Ziel gesendet (HTTPS→HTTP).
- `unsafe-url`

  - : Eine vollständige URL wird gesendet, wenn eine Anfrage im gleichen Ursprung oder über Ursprünge hinweg durchgeführt wird.

    > [!NOTE]
    > Diese Richtlinie wird Ursprünge und Pfade von TLS-geschützten Ressourcen an unsichere Ursprünge leaken. Überlegen Sie sich die Auswirkungen dieser Einstellung sorgfältig.

## Beispiele

```js
const iframe = document.createElement("iframe");
iframe.src = "/";
iframe.referrerPolicy = "unsafe-url";
const body = document.querySelector("body");
body.appendChild(iframe); // Fetch the image using the complete URL as the referrer
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLAnchorElement.referrerPolicy`](/de/docs/Web/API/HTMLAnchorElement/referrerPolicy),
  [`HTMLAreaElement.referrerPolicy`](/de/docs/Web/API/HTMLAreaElement/referrerPolicy), und
  [`HTMLAreaElement.referrerPolicy`](/de/docs/Web/API/HTMLAreaElement/referrerPolicy).
