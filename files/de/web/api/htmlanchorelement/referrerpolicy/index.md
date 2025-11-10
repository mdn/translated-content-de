---
title: "HTMLAnchorElement: referrerPolicy-Eigenschaft"
short-title: referrerPolicy
slug: Web/API/HTMLAnchorElement/referrerPolicy
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("HTML DOM")}}

Die **`HTMLAnchorElement.referrerPolicy`**-Eigenschaft spiegelt das HTML-Attribut [`referrerpolicy`](/de/docs/Web/HTML/Reference/Elements/a#referrerpolicy) des {{HTMLElement("a")}}-Elements wider, das definiert, welcher Referrer beim Abrufen der Ressource gesendet wird.

## Wert

Ein String; einer der folgenden:

- `no-referrer`
  - : Der {{HTTPHeader("Referer")}}-Header wird vollständig weggelassen. Es werden keine Referrer-Informationen mit Anfragen gesendet.
- `no-referrer-when-downgrade`
  - : Die URL wird als Referrer gesendet, wenn das Sicherheitsniveau des Protokolls gleich bleibt (z.B. HTTP→HTTP, HTTPS→HTTPS), aber nicht an ein weniger sicheres Ziel gesendet (z.B. HTTPS→HTTP).
- `origin`
  - : Nur der Ursprung des Dokuments wird in allen Fällen als Referrer gesendet. Das Dokument `https://example.com/page.html` sendet den Referrer `https://example.com/`.
- `origin-when-cross-origin`
  - : Sendet eine vollständige URL bei einer Anfrage mit demselben Ursprung, aber nur den Ursprung des Dokuments in anderen Fällen.
- `same-origin`
  - : Ein Referrer wird für [same-site origins](/de/docs/Web/Security/Same-origin_policy) gesendet, aber bei Cross-Origin-Anfragen werden keine Referrer-Informationen enthalten.
- `strict-origin`
  - : Sendet nur den Ursprung des Dokuments als Referrer, wenn das Sicherheitsniveau des Protokolls gleich bleibt (z.B. HTTPS→HTTPS), aber nicht an ein weniger sicheres Ziel (z.B. HTTPS→HTTP).
- `strict-origin-when-cross-origin` (Standard)
  - : Dies ist das Standardverhalten des Benutzeragenten, wenn keine Richtlinie angegeben ist. Eine vollständige URL wird gesendet, wenn eine Same-Origin-Anfrage durchgeführt wird, es wird nur der Ursprung gesendet, wenn das Sicherheitsniveau des Protokolls gleich bleibt (z.B. HTTPS→HTTPS), und kein Header wird an ein weniger sicheres Ziel gesendet (z.B. HTTPS→HTTP).
- `unsafe-url`
  - : Sendet eine vollständige URL bei einer Same-Origin- oder Cross-Origin-Anfrage. Diese Richtlinie wird Ursprünge und Pfade von TLS-geschützten Ressourcen an unsichere Ursprünge weitergeben. Berücksichtigen Sie sorgfältig die Auswirkungen dieser Einstellung.

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

- [`HTMLImageElement.referrerPolicy`](/de/docs/Web/API/HTMLImageElement/referrerPolicy), [`HTMLAreaElement.referrerPolicy`](/de/docs/Web/API/HTMLAreaElement/referrerPolicy) und [`HTMLIFrameElement.referrerPolicy`](/de/docs/Web/API/HTMLIFrameElement/referrerPolicy).
