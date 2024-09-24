---
title: "HTMLAnchorElement: referrerPolicy-Eigenschaft"
short-title: referrerPolicy
slug: Web/API/HTMLAnchorElement/referrerPolicy
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{APIRef}}

Die **`HTMLAnchorElement.referrerPolicy`**-Eigenschaft spiegelt das HTML-Attribut [`referrerpolicy`](/de/docs/Web/HTML/Element/a#referrerpolicy) des {{HTMLElement("a")}}-Elements wider, das definiert, welcher Referrer beim Abrufen der Ressource gesendet wird.

## Wert

Ein String; einer der folgenden:

- `no-referrer`
  - : Der {{HTTPHeader("Referer")}}-Header wird vollständig weggelassen. Es werden keine Referrer-Informationen mit den Anfragen gesendet.
- `no-referrer-when-downgrade`
  - : Die URL wird als Referrer gesendet, wenn das Protokollsicherheitsniveau gleich bleibt (z. B. HTTP→HTTP, HTTPS→HTTPS), aber nicht zu einem weniger sicheren Ziel gesendet (z. B. HTTPS→HTTP).
- `origin`
  - : Nur der Ursprung des Dokuments wird in allen Fällen als Referrer gesendet. Das Dokument `https://example.com/page.html` sendet den Referrer `https://example.com/`.
- `origin-when-cross-origin`
  - : Eine vollständige URL wird gesendet, wenn eine Anfrage mit dem gleichen Ursprung durchgeführt wird, aber nur der Ursprung des Dokuments wird in anderen Fällen gesendet.
- `same-origin`
  - : Ein Referrer wird für [gleiche Ursprünge](/de/docs/Web/Security/Same-origin_policy) gesendet, aber Anfragen über verschiedene Ursprünge enthalten keine Referrer-Informationen.
- `strict-origin`
  - : Nur der Ursprung des Dokuments wird als Referrer gesendet, wenn das Protokollsicherheitsniveau gleich bleibt (z. B. HTTPS→HTTPS), aber nicht zu einem weniger sicheren Ziel gesendet (z. B. HTTPS→HTTP).
- `strict-origin-when-cross-origin` (Standard)
  - : Dies ist das Standardverhalten des Benutzeragenten, wenn keine Richtlinie angegeben ist. Eine vollständige URL wird gesendet, wenn eine Anfrage mit dem gleichen Ursprung durchgeführt wird, nur der Ursprung wird gesendet, wenn das Protokollsicherheitsniveau gleich bleibt (z. B. HTTPS→HTTPS), und kein Header wird zu einem weniger sicheren Ziel gesendet (z. B. HTTPS→HTTP).
- `unsafe-url`
  - : Eine vollständige URL wird sowohl bei Anfragen mit dem gleichen Ursprung als auch bei Anfragen über verschiedene Ursprünge gesendet. Diese Richtlinie kann Ursprünge und Pfade von TLS-geschützten Ressourcen an unsichere Ursprünge weitergeben. Berücksichtigen Sie sorgfältig die Auswirkungen dieser Einstellung.

## Beispiele

```js
const elt = document.createElement("a");
const linkText = document.createTextNode("My link");
elt.appendChild(linkText);
elt.href = "https://developer.mozilla.org/en-US/";
elt.referrerPolicy = "no-referrer";

const div = document.getElementById("divAround");
div.appendChild(elt); // Wenn geklickt, sendet der Link keinen Referrer-Header.
```

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- {{domxref("HTMLImageElement.referrerPolicy")}},
  {{domxref("HTMLAreaElement.referrerPolicy")}} und
  {{domxref("HTMLIFrameElement.referrerPolicy")}}.
