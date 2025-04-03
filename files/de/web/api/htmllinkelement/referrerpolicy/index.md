---
title: "HTMLLinkElement: referrerPolicy-Eigenschaft"
short-title: referrerPolicy
slug: Web/API/HTMLLinkElement/referrerPolicy
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{APIRef("HTML DOM")}}

Die **`referrerPolicy`**-Eigenschaft des [`HTMLLinkElement`](/de/docs/Web/API/HTMLLinkElement)-Interfaces
spiegelt das HTML-Attribut [`referrerpolicy`](/de/docs/Web/HTML/Element/link#referrerpolicy) des
{{HTMLElement("link")}}-Elements wider, das definiert, welcher Referrer gesendet wird, wenn die
Ressource abgerufen wird.

Siehe den HTTP-Header {{HTTPHeader("Referrer-Policy")}} für Details.

## Wert

Ein String; einer der folgenden:

- `no-referrer`
  - : Der {{HTTPHeader("Referer")}}-Header wird vollständig weggelassen. Es werden keine Referrerinformationen mit den Anfragen gesendet.
- `no-referrer-when-downgrade`
  - : Die URL wird als Referrer gesendet, wenn das Protokoll-Sicherheitslevel gleich bleibt (z.B. HTTP→HTTP, HTTPS→HTTPS), aber nicht an ein weniger sicheres Ziel gesendet wird (z.B. HTTPS→HTTP).
- `origin`
  - : Nur der Ursprung des Dokuments wird in allen Fällen als Referrer gesendet.
    Das Dokument `https://example.com/page.html` sendet den Referrer
    `https://example.com/`.
- `origin-when-cross-origin`
  - : Eine vollständige URL wird bei einer Same-Origin-Anfrage gesendet, aber nur der Ursprung des Dokuments für andere Fälle.
- `same-origin`
  - : Ein Referrer wird für [Same-Site-Ursprünge](/de/docs/Web/Security/Same-origin_policy) gesendet, aber
    bei Cross-Origin-Anfragen werden keine Referrer-Informationen enthalten.
- `strict-origin`
  - : Nur der Ursprung des Dokuments wird als Referrer gesendet, wenn das Protokoll-Sicherheitslevel gleich bleibt (z.B. HTTPS→HTTPS), jedoch nicht an ein weniger sicheres Ziel (z.B. HTTPS→HTTP).
- `strict-origin-when-cross-origin` (Standard)
  - : Dies ist das Standardverhalten des User-Agents, wenn keine Richtlinie angegeben ist. Eine vollständige URL wird bei einer Same-Origin-Anfrage gesendet, nur der Ursprung wird gesendet, wenn das
    Protokoll-Sicherheitslevel gleich bleibt (z.B. HTTPS→HTTPS), und es wird kein Header an ein
    weniger sicheres Ziel gesendet (z.B. HTTPS→HTTP).
- `unsafe-url`
  - : Eine vollständige URL wird bei einer Same-Origin- oder Cross-Origin-Anfrage gesendet. Diese Richtlinie wird Ursprünge und Pfade von TLS-geschützten Ressourcen an unsichere Ursprünge weitergeben.
    Berücksichtigen Sie sorgfältig die Auswirkungen dieser Einstellung.

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
