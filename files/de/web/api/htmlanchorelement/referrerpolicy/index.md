---
title: "HTMLAnchorElement: referrerPolicy-Eigenschaft"
short-title: referrerPolicy
slug: Web/API/HTMLAnchorElement/referrerPolicy
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{APIRef}}

Die
**`HTMLAnchorElement.referrerPolicy`**
Eigenschaft spiegelt das HTML-Attribut [`referrerpolicy`](/de/docs/Web/HTML/Element/a#referrerpolicy) des
{{HTMLElement("a")}}-Elements wider, das definiert, welcher Referrer gesendet wird, wenn die Ressource abgerufen wird.

## Wert

Ein String; einer der folgenden:

- `no-referrer`
  - : Der {{HTTPHeader("Referer")}}-Header wird vollständig ausgelassen. Es werden keine Referrer-Informationen zusammen mit Anfragen gesendet.
- `no-referrer-when-downgrade`
  - : Die URL wird als Referrer gesendet, wenn das Sicherheitsniveau des Protokolls gleich bleibt (z.B. HTTP→HTTP, HTTPS→HTTPS), jedoch nicht an ein weniger sicheres Ziel gesendet (z.B. HTTPS→HTTP).
- `origin`
  - : Es wird in allen Fällen nur der Ursprung des Dokuments als Referrer gesendet. Das Dokument `https://example.com/page.html` wird den Referrer `https://example.com/` senden.
- `origin-when-cross-origin`
  - : Sendet eine vollständige URL bei einer Same-Origin-Anfrage, sendet jedoch nur den Ursprung des Dokuments in anderen Fällen.
- `same-origin`
  - : Ein Referrer wird für [gleichseitige Ursprünge](/de/docs/Web/Security/Same-origin_policy) gesendet, aber bei Cross-Origin-Anfragen werden keine Referrer-Informationen enthalten.
- `strict-origin`
  - : Sendet nur den Ursprung des Dokuments als Referrer, wenn das Sicherheitsniveau des Protokolls gleich bleibt (z.B. HTTPS→HTTPS), sendet es jedoch nicht an ein weniger sicheres Ziel (z.B. HTTPS→HTTP).
- `strict-origin-when-cross-origin` (Standard)
  - : Dies ist das Standardverhalten des Benutzeragenten, wenn keine Richtlinie festgelegt ist. Eine vollständige URL wird bei einer Same-Origin-Anfrage gesendet, der Ursprung nur, wenn das Sicherheitsniveau des Protokolls gleich bleibt (z.B. HTTPS→HTTPS), und es wird kein Header an ein weniger sicheres Ziel gesendet (z.B. HTTPS→HTTP).
- `unsafe-url`
  - : Sendet eine vollständige URL bei einer Same-Origin- oder Cross-Origin-Anfrage. Diese Richtlinie wird Ursprünge und Pfade von TLS-geschützten Ressourcen zu unsicheren Ursprüngen weitergeben. Berücksichtigen Sie sorgfältig die Auswirkungen dieser Einstellung.

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
  [`HTMLAreaElement.referrerPolicy`](/de/docs/Web/API/HTMLAreaElement/referrerPolicy) und
  [`HTMLIFrameElement.referrerPolicy`](/de/docs/Web/API/HTMLIFrameElement/referrerPolicy).
