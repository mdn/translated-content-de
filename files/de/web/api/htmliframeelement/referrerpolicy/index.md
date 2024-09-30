---
title: "HTMLIFrameElement: referrerPolicy-Eigenschaft"
short-title: referrerPolicy
slug: Web/API/HTMLIFrameElement/referrerPolicy
l10n:
  sourceCommit: e9e2ec643ac69c132f31427a0b586ab2cf83ed58
---

{{APIRef}}

Die **`HTMLIFrameElement.referrerPolicy`**-Eigenschaft spiegelt das HTML-[`referrerpolicy`](/de/docs/Web/HTML/Element/iframe#referrerpolicy)-Attribut des {{HTMLElement("iframe")}}-Elements wider, das definiert, welcher Referrer gesendet wird, wenn die Ressource abgerufen wird.

## Wert

- `no-referrer`
  - : Der {{HTTPHeader("Referer")}}-Header wird vollständig weggelassen. Es werden keine Referrer-Informationen mit Anfragen gesendet.
- `no-referrer-when-downgrade`
  - : Die URL wird als Referrer gesendet, wenn das Sicherheitsniveau des Protokolls gleich bleibt (HTTP→HTTP, HTTPS→HTTPS), aber nicht zu einem weniger sicheren Ziel (HTTPS→HTTP) gesendet wird.
- `origin`
  - : Nur der Ursprung des Dokuments wird in allen Fällen als Referrer gesendet. Das Dokument `https://example.com/page.html` sendet den Referrer `https://example.com/`.
- `origin-when-cross-origin`
  - : Eine vollständige URL wird bei einer Same-Origin-Anfrage gesendet, aber nur der Ursprung des Dokuments in anderen Fällen.
- `same-origin`
  - : Ein Referrer wird für [gleichartige Ursprünge](/de/docs/Web/Security/Same-origin_policy) gesendet, aber Cross-Origin-Anfragen enthalten keine Referrer-Informationen.
- `strict-origin`
  - : Nur der Ursprung des Dokuments wird als Referrer gesendet, wenn das Sicherheitsniveau des Protokolls gleich bleibt (HTTPS→HTTPS), aber nicht zu einem weniger sicheren Ziel (HTTPS→HTTP) gesendet wird.
- `strict-origin-when-cross-origin` (Standard)
  - : Dies ist das Standardverhalten des Benutzeragents, wenn keine Richtlinie festgelegt ist. Eine vollständige URL wird bei einer Same-Origin-Anfrage gesendet, nur der Ursprung, wenn das Sicherheitsniveau des Protokolls gleich bleibt (HTTPS→HTTPS), und kein Header zu einem weniger sicheren Ziel (HTTPS→HTTP) gesendet.
- `unsafe-url`

  - : Sendet eine vollständige URL bei einer Same-Origin- oder Cross-Origin-Anfrage.

    > [!NOTE]
    > Diese Richtlinie wird Ursprünge und Pfade von TLS-geschützten Ressourcen an unsichere Ursprünge preisgeben. Berücksichtigen Sie sorgfältig die Auswirkungen dieser Einstellung.

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
  [`HTMLAreaElement.referrerPolicy`](/de/docs/Web/API/HTMLAreaElement/referrerPolicy) und
  [`HTMLAreaElement.referrerPolicy`](/de/docs/Web/API/HTMLAreaElement/referrerPolicy).
