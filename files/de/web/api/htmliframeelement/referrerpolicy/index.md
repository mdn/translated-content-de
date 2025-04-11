---
title: "HTMLIFrameElement: Eigenschaft referrerPolicy"
short-title: referrerPolicy
slug: Web/API/HTMLIFrameElement/referrerPolicy
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef}}

Die Eigenschaft
**`HTMLIFrameElement.referrerPolicy`**
entspricht dem HTML-Attribut [`referrerpolicy`](/de/docs/Web/HTML/Reference/Elements/iframe#referrerpolicy) des
{{HTMLElement("iframe")}}-Elements und definiert, welcher Referrer beim Abrufen der Ressource gesendet wird.

## Wert

- `no-referrer`
  - : Der {{HTTPHeader("Referer")}}-Header wird vollständig weggelassen. Es werden keine Referrer-Informationen mit Anfragen gesendet.
- `no-referrer-when-downgrade`
  - : Die URL wird als Referrer gesendet, wenn das Protokollsicherheitsniveau gleich bleibt (HTTP→HTTP, HTTPS→HTTPS), jedoch nicht an ein weniger sicheres Ziel (HTTPS→HTTP).
- `origin`
  - : Es wird in allen Fällen nur der Ursprung des Dokuments als Referrer gesendet.
    Das Dokument `https://example.com/page.html` sendet den Referrer
    `https://example.com/`.
- `origin-when-cross-origin`
  - : Eine vollständige URL wird gesendet, wenn eine Anfrage gleicher Herkunft erfolgt, aber nur der Ursprung des Dokuments für andere Fälle.
- `same-origin`
  - : Ein Referrer wird für [gleiche-Origin-Anfragen](/de/docs/Web/Security/Same-origin_policy) gesendet, jedoch enthalten Cross-Origin-Anfragen keine Referrer-Informationen.
- `strict-origin`
  - : Es wird nur der Ursprung des Dokuments als Referrer gesendet, wenn das Protokollsicherheitsniveau gleich bleibt (HTTPS→HTTPS), es wird jedoch nicht an ein weniger sicheres Ziel gesendet (HTTPS→HTTP).
- `strict-origin-when-cross-origin` (Standard)
  - : Dies ist das Standardverhalten des Benutzer-Agents, wenn keine Richtlinie angegeben ist. Eine vollständige URL wird gesendet, wenn eine Anfrage gleicher Herkunft erfolgt, nur der Ursprung wird gesendet, wenn das Protokollsicherheitsniveau gleich bleibt (HTTPS→HTTPS), und es wird kein Header an ein weniger sicheres Ziel gesendet (HTTPS→HTTP).
- `unsafe-url`

  - : Eine vollständige URL wird gesendet, wenn eine Anfrage gleicher Herkunft oder Cross-Origin-Anfrage durchgeführt wird.

    > [!NOTE]
    > Diese Richtlinie wird Ursprünge und Pfade von TLS-geschützten Ressourcen
    > an unsichere Ursprünge weitergeben. Überlegen Sie sorgfältig die Auswirkungen dieser Einstellung.

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
