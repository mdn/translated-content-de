---
title: "HTMLAnchorElement: referrerPolicy-Eigenschaft"
short-title: referrerPolicy
slug: Web/API/HTMLAnchorElement/referrerPolicy
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{APIRef}}

Die **`HTMLAnchorElement.referrerPolicy`**-Eigenschaft spiegelt das HTML-Attribut [`referrerpolicy`](/de/docs/Web/HTML/Element/a#referrerpolicy) des {{HTMLElement("a")}}-Elements wider, das definiert, welcher Referrer gesendet wird, wenn die Ressource abgerufen wird.

## Wert

Ein String; einer der folgenden:

- `no-referrer`
  - : Der {{HTTPHeader("Referer")}}-Header wird vollständig weggelassen. Es werden keine Referrerinformationen zusammen mit Anfragen gesendet.
- `no-referrer-when-downgrade`
  - : Die URL wird als Referrer gesendet, wenn das Sicherheitsniveau des Protokolls gleich bleibt (z.B. HTTP→HTTP, HTTPS→HTTPS), aber nicht zu einem weniger sicheren Ziel (z.B. HTTPS→HTTP).
- `origin`
  - : Nur der Ursprung des Dokuments wird in allen Fällen als Referrer gesendet. Das Dokument `https://example.com/page.html` sendet den Referrer `https://example.com/`.
- `origin-when-cross-origin`
  - : Eine vollständige URL wird bei Anfragen innerhalb derselben Herkunft gesendet, aber nur der Ursprung des Dokuments in anderen Fällen.
- `same-origin`
  - : Ein Referrer wird für [same-site origins](/de/docs/Web/Security/Same-origin_policy) gesendet, aber bei Cross-Origin-Anfragen werden keine Referrerinformationen gesendet.
- `strict-origin`
  - : Nur der Ursprung des Dokuments wird als Referrer gesendet, wenn das Sicherheitsniveau des Protokolls gleich bleibt (z.B. HTTPS→HTTPS), aber nicht zu einem weniger sicheren Ziel (z.B. HTTPS→HTTP).
- `strict-origin-when-cross-origin` (Standard)
  - : Dies ist das Standardverhalten des Benutzeragenten, wenn keine Richtlinie angegeben ist. Eine vollständige URL wird bei Anfragen innerhalb derselben Herkunft gesendet, nur der Ursprung wird gesendet, wenn das Sicherheitsniveau des Protokolls gleich bleibt (z.B. HTTPS→HTTPS), und kein Header wird zu einem weniger sicheren Ziel gesendet (z.B. HTTPS→HTTP).
- `unsafe-url`
  - : Eine vollständige URL wird bei Anfragen innerhalb derselben oder einer anderen Herkunft gesendet. Diese Richtlinie kann Ursprünge und Pfade von TLS-geschützten Ressourcen an unsichere Ursprünge weitergeben. Überlegen Sie die Auswirkungen dieser Einstellung sorgfältig.

## Beispiele

```js
const elt = document.createElement("a");
const linkText = document.createTextNode("My link");
elt.appendChild(linkText);
elt.href = "https://developer.mozilla.org/en-US/";
elt.referrerPolicy = "no-referrer";

const div = document.getElementById("divAround");
div.appendChild(elt); // When clicked, the link will not send a referrer header.
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLImageElement.referrerPolicy`](/de/docs/Web/API/HTMLImageElement/referrerPolicy),
  [`HTMLAreaElement.referrerPolicy`](/de/docs/Web/API/HTMLAreaElement/referrerPolicy), und
  [`HTMLIFrameElement.referrerPolicy`](/de/docs/Web/API/HTMLIFrameElement/referrerPolicy).
