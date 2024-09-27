---
title: "HTMLIFrameElement: referrerPolicy-Eigenschaft"
short-title: referrerPolicy
slug: Web/API/HTMLIFrameElement/referrerPolicy
l10n:
  sourceCommit: e9e2ec643ac69c132f31427a0b586ab2cf83ed58
---

{{APIRef}}

Die
**`HTMLIFrameElement.referrerPolicy`**
Eigenschaft spiegelt das HTML [`referrerpolicy`](/de/docs/Web/HTML/Element/iframe#referrerpolicy) Attribut des
{{HTMLElement("iframe")}}-Elements wider, welches definiert, welcher Referrer beim Abrufen der
Ressource gesendet wird.

## Wert

- `no-referrer`
  - : Der {{HTTPHeader("Referer")}}-Header wird vollständig weggelassen. Es werden keine Referrer-Informationen zusammen mit Anfragen gesendet.
- `no-referrer-when-downgrade`
  - : Die URL wird als Referrer gesendet, wenn das Sicherheitsniveau des Protokolls gleich bleibt (HTTP→HTTP,
    HTTPS→HTTPS), jedoch nicht an ein weniger sicheres Ziel (HTTPS→HTTP) gesendet.
- `origin`
  - : Nur der Ursprung des Dokuments wird in allen Fällen als Referrer gesendet.
    Das Dokument `https://example.com/page.html` wird den Referrer
    `https://example.com/` senden.
- `origin-when-cross-origin`
  - : Eine vollständige URL wird gesendet, wenn eine Anfrage derselben Herkunft erfolgt, jedoch wird nur der Ursprung des Dokuments in anderen Fällen gesendet.
- `same-origin`
  - : Ein Referrer wird für [Same-Site-Herkünfte](/de/docs/Web/Security/Same-origin_policy) gesendet, aber
    Cross-Origin-Anfragen enthalten keine Referrer-Informationen.
- `strict-origin`
  - : Nur der Ursprung des Dokuments wird als Referrer gesendet, wenn das Sicherheitsniveau des Protokolls gleich bleibt (HTTPS→HTTPS), jedoch nicht an ein weniger sicheres Ziel
    (HTTPS→HTTP) gesendet.
- `strict-origin-when-cross-origin` (Standard)
  - : Dies ist das Standardverhalten des Benutzeragenten, wenn keine Richtlinie angegeben ist. Eine vollständige URL wird gesendet, wenn eine Anfrage derselben Herkunft erfolgt, nur der Ursprung wird gesendet, wenn das Sicherheitsniveau des Protokolls gleich bleibt (HTTPS→HTTPS), und es wird kein Header an ein weniger
    sicheres Ziel gesendet (HTTPS→HTTP).
- `unsafe-url`

  - : Eine vollständige URL wird gesendet, wenn eine Anfrage derselben Herkunft oder einer anderen Herkunft erfolgt.

    > [!NOTE]
    > Diese Richtlinie wird Ursprünge und Pfade von TLS-geschützten Ressourcen an unsichere Ursprünge leaken. Überlegen Sie sorgfältig die Auswirkungen dieser Einstellung.

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
  [`HTMLAreaElement.referrerPolicy`](/de/docs/Web/API/HTMLAreaElement/referrerPolicy), und
  [`HTMLAreaElement.referrerPolicy`](/de/docs/Web/API/HTMLAreaElement/referrerPolicy).
