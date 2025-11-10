---
title: "HTMLLinkElement: referrerPolicy-Eigenschaft"
short-title: referrerPolicy
slug: Web/API/HTMLLinkElement/referrerPolicy
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

Die **`referrerPolicy`**-Eigenschaft des [`HTMLLinkElement`](/de/docs/Web/API/HTMLLinkElement)-Interfaces spiegelt das HTML-Attribut [`referrerpolicy`](/de/docs/Web/HTML/Reference/Elements/link#referrerpolicy) des {{HTMLElement("link")}}-Elements wider, welches definiert, welcher Referrer beim Abrufen der Ressource gesendet wird.

Siehe den HTTP-{{HTTPHeader("Referrer-Policy")}}-Header für Details.

## Wert

Ein String; einer der folgenden:

- `no-referrer`
  - : Der {{HTTPHeader("Referer")}}-Header wird vollständig weggelassen. Es werden keine Referrer-Informationen zusammen mit Anfragen gesendet.
- `no-referrer-when-downgrade`
  - : Die URL wird als Referrer gesendet, wenn das Protokoll-Sicherheitsniveau gleich bleibt (z.B. HTTP→HTTP, HTTPS→HTTPS), aber nicht an ein weniger sicheres Ziel (z.B. HTTPS→HTTP) gesendet.
- `origin`
  - : Nur der Ursprung des Dokuments wird in allen Fällen als Referrer gesendet. Das Dokument `https://example.com/page.html` sendet den Referrer `https://example.com/`.
- `origin-when-cross-origin`
  - : Eine vollständige URL wird bei einer Anfrage mit gleichem Ursprung gesendet, aber nur der Ursprung des Dokuments für andere Fälle.
- `same-origin`
  - : Ein Referrer wird für [gleicher-Ursprung-Anfragen](/de/docs/Web/Security/Same-origin_policy) gesendet, aber bei Cross-Origin-Anfragen werden keine Referrer-Informationen enthalten sein.
- `strict-origin`
  - : Nur der Ursprung des Dokuments wird als Referrer gesendet, wenn das Protokoll-Sicherheitsniveau gleich bleibt (z.B., HTTPS→HTTPS), aber nicht an ein weniger sicheres Ziel (z.B., HTTPS→HTTP) gesendet.
- `strict-origin-when-cross-origin` (Standard)
  - : Dies ist das Standardverhalten des Benutzeragents, wenn keine Richtlinie angegeben ist. Eine vollständige URL wird bei einer Anfrage mit gleichem Ursprung gesendet, nur der Ursprung wird gesendet, wenn das Protokoll-Sicherheitsniveau gleich bleibt (z.B. HTTPS→HTTPS), und es wird kein Header an ein weniger sicheres Ziel gesendet (z.B. HTTPS→HTTP).
- `unsafe-url`
  - : Eine vollständige URL wird sowohl bei Anfragen mit gleichem Ursprung als auch bei Cross-Origin-Anfragen gesendet. Diese Richtlinie wird Ursprünge und Pfade von TLS-geschützten Ressourcen an unsichere Ursprünge preisgeben. Überlegen Sie sorgfältig die Auswirkungen dieser Einstellung.

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
