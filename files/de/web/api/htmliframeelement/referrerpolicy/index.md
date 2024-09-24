---
title: "HTMLIFrameElement: referrerPolicy-Eigenschaft"
short-title: referrerPolicy
slug: Web/API/HTMLIFrameElement/referrerPolicy
l10n:
  sourceCommit: e9e2ec643ac69c132f31427a0b586ab2cf83ed58
---

{{APIRef}}

Die Eigenschaft
**`HTMLIFrameElement.referrerPolicy`**
spiegelt das HTML-Attribut [`referrerpolicy`](/de/docs/Web/HTML/Element/iframe#referrerpolicy) des
{{HTMLElement("iframe")}}-Elements wider, welches definiert, welcher Referrer gesendet wird, wenn die Ressource abgerufen wird.

## Wert

- `no-referrer`
  - : Der {{HTTPHeader("Referer")}}-Header wird vollständig weggelassen. Es werden keine Referrer-Informationen mit Anfragen gesendet.
- `no-referrer-when-downgrade`
  - : Die URL wird als Referrer gesendet, wenn das Sicherheitsniveau des Protokolls gleich bleibt (HTTP→HTTP, HTTPS→HTTPS), aber nicht an eine weniger sichere Zieladresse (HTTPS→HTTP) gesendet wird.
- `origin`
  - : Sendet in allen Fällen nur den Ursprung des Dokuments als Referrer. Das Dokument `https://example.com/page.html` sendet den Referrer `https://example.com/`.
- `origin-when-cross-origin`
  - : Sendet eine vollständige URL bei einer gleichnamigen Anfrage, sendet aber nur den Ursprung des Dokuments in anderen Fällen.
- `same-origin`
  - : Ein Referrer wird für [gleiche Ursprünge](/de/docs/Web/Security/Same-origin_policy) gesendet, aber Cross-Origin-Anfragen enthalten keine Referrer-Informationen.
- `strict-origin`
  - : Sendet nur den Ursprung des Dokuments als Referrer, wenn das Sicherheitsniveau des Protokolls gleich bleibt (HTTPS→HTTPS), aber nicht an eine weniger sichere Zieladresse (HTTPS→HTTP).
- `strict-origin-when-cross-origin` (Standard)
  - : Dies ist das Standardverhalten des Benutzeragents, wenn keine Richtlinie angegeben ist. Sendet eine vollständige URL bei einer gleichnamigen Anfrage, sendet nur den Ursprung, wenn das Sicherheitsniveau des Protokolls gleich bleibt (HTTPS→HTTPS), und sendet keinen Header an eine weniger sichere Zieladresse (HTTPS→HTTP).
- `unsafe-url`

  - : Sendet eine vollständige URL sowohl bei gleichnamigen als auch bei Cross-Origin-Anfragen.

    > [!NOTE]
    > Diese Richtlinie wird Ursprünge und Pfade von TLS-geschützten Ressourcen an unsichere Ursprünge durchsickern lassen. Betrachten Sie die Auswirkungen dieser Einstellung sorgfältig.

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

- {{domxref("HTMLAnchorElement.referrerPolicy")}},
  {{domxref("HTMLAreaElement.referrerPolicy")}}, und
  {{domxref("HTMLAreaElement.referrerPolicy")}}.
