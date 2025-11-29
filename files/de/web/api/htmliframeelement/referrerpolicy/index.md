---
title: "HTMLIFrameElement: referrerPolicy-Eigenschaft"
short-title: referrerPolicy
slug: Web/API/HTMLIFrameElement/referrerPolicy
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("HTML DOM")}}

Die Eigenschaft **`HTMLIFrameElement.referrerPolicy`** spiegelt das HTML-Attribut [`referrerpolicy`](/de/docs/Web/HTML/Reference/Elements/iframe#referrerpolicy) des {{HTMLElement("iframe")}}-Elements wider, das definiert, welcher Referrer beim Abrufen der Ressource gesendet wird.

## Wert

- `no-referrer`
  - : Der {{HTTPHeader("Referer")}}-Header wird vollständig weggelassen. Es werden keine Referrer-Informationen zusammen mit Anfragen gesendet.
- `no-referrer-when-downgrade`
  - : Die URL wird als Referrer gesendet, wenn das Sicherheitsniveau des Protokolls gleich bleibt (HTTP→HTTP, HTTPS→HTTPS), aber nicht zu einem weniger sicheren Ziel (HTTPS→HTTP) gesendet wird.
- `origin`
  - : Nur der Ursprung des Dokuments wird in allen Fällen als Referrer gesendet. Das Dokument `https://example.com/page.html` wird den Referrer `https://example.com/` senden.
- `origin-when-cross-origin`
  - : Eine vollständige URL wird bei einer selben Ursprungsanforderung gesendet, aber nur der Ursprung des Dokuments für andere Fälle.
- `same-origin`
  - : Ein Referrer wird für [same-site origins](/de/docs/Web/Security/Defenses/Same-origin_policy) gesendet, aber Cross-Origin-Anfragen enthalten keine Referrer-Informationen.
- `strict-origin`
  - : Nur der Ursprung des Dokuments wird als Referrer gesendet, wenn das Sicherheitsniveau des Protokolls gleich bleibt (HTTPS→HTTPS), aber nicht zu einem weniger sicheren Ziel (HTTPS→HTTP).
- `strict-origin-when-cross-origin` (Standard)
  - : Dies ist das Standardverhalten des Benutzeragents, wenn keine Richtlinie angegeben ist. Eine vollständige URL wird bei einer selben Ursprungsanforderung gesendet, nur der Ursprung wird gesendet, wenn das Sicherheitsniveau des Protokolls gleich bleibt (HTTPS→HTTPS), und kein Header wird zu einem weniger sicheren Ziel gesendet (HTTPS→HTTP).
- `unsafe-url`
  - : Eine vollständige URL wird bei einer selben Ursprungs- oder Cross-Origin-Anforderung gesendet.

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
