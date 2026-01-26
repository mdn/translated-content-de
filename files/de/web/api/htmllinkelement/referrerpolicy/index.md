---
title: "HTMLLinkElement: referrerPolicy-Eigenschaft"
short-title: referrerPolicy
slug: Web/API/HTMLLinkElement/referrerPolicy
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

{{APIRef("HTML DOM")}}

Die **`referrerPolicy`**-Eigenschaft des [`HTMLLinkElement`](/de/docs/Web/API/HTMLLinkElement)-Interfaces
entspricht dem HTML-Attribut [`referrerpolicy`](/de/docs/Web/HTML/Reference/Elements/link#referrerpolicy) des
{{HTMLElement("link")}}-Elements, das definiert, welcher Referrer gesendet wird, wenn die Ressource abgerufen wird.

Siehe den HTTP-{{HTTPHeader("Referrer-Policy")}}-Header für Details.

## Wert

Ein String; einer der folgenden:

- `no-referrer`
  - : Der {{HTTPHeader("Referer")}}-Header wird vollständig weggelassen. Es werden keine Referrer-Informationen zusammen mit Anfragen gesendet.
- `no-referrer-when-downgrade`
  - : Die URL wird als Referrer gesendet, wenn das Protokollsicherheitslevel gleich bleibt (z. B. HTTP→HTTP, HTTPS→HTTPS), aber nicht an ein weniger sicheres Ziel gesendet wird (z. B. HTTPS→HTTP).
- `origin`
  - : Sendet in allen Fällen nur den Ursprung des Dokuments als Referrer. Das Dokument `https://example.com/page.html` wird den Referrer `https://example.com/` senden.
- `origin-when-cross-origin`
  - : Sendet eine vollständige URL, wenn eine Anfrage im selben Ursprung erfolgt, aber nur den Ursprung des Dokuments in anderen Fällen.
- `same-origin`
  - : Ein Referrer wird für [same-site origins](/de/docs/Web/Security/Defenses/Same-origin_policy) gesendet, aber bei cross-origin Anfragen werden keine Referrer-Informationen enthalten.
- `strict-origin`
  - : Sendet den Ursprung des Dokuments nur als Referrer, wenn das Protokollsicherheitslevel gleich bleibt (z. B. HTTPS→HTTPS), aber nicht an ein weniger sicheres Ziel (z. B. HTTPS→HTTP).
- `strict-origin-when-cross-origin` (Standard)
  - : Dies ist das Standardverhalten des Benutzeragenten, wenn keine Richtlinie angegeben ist. Sendet eine vollständige URL bei einer Anfrage im selben Ursprung, sendet nur den Ursprung, wenn das Protokollsicherheitslevel gleich bleibt (z. B. HTTPS→HTTPS), und sendet keinen Header an ein weniger sicheres Ziel (z. B. HTTPS→HTTP).
- `unsafe-url`
  - : Sendet eine vollständige URL bei einer Anfrage im selben oder einem anderen Ursprung. Diese Richtlinie kann Ursprünge und Pfade von TLS-geschützten Ressourcen an unsichere Ursprünge preisgeben. Betrachten Sie die Auswirkungen dieser Einstellung sorgfältig.

## Beispiele

```js
const links = document.getElementsByTagName("link");
links[0].referrerPolicy; // "no-referrer"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- HTTP-Header {{HTTPHeader("Referrer-Policy")}}
- [`HTMLAnchorElement.referrerPolicy`](/de/docs/Web/API/HTMLAnchorElement/referrerPolicy)
- [`HTMLAreaElement.referrerPolicy`](/de/docs/Web/API/HTMLAreaElement/referrerPolicy)
- [`HTMLIFrameElement.referrerPolicy`](/de/docs/Web/API/HTMLIFrameElement/referrerPolicy)
- [`HTMLImageElement.referrerPolicy`](/de/docs/Web/API/HTMLImageElement/referrerPolicy)
