---
title: "HTMLIFrameElement: referrerPolicy-Eigenschaft"
short-title: referrerPolicy
slug: Web/API/HTMLIFrameElement/referrerPolicy
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

{{APIRef("HTML DOM")}}

Die **`HTMLIFrameElement.referrerPolicy`**-Eigenschaft entspricht dem HTML-[`referrerpolicy`](/de/docs/Web/HTML/Reference/Elements/iframe#referrerpolicy)-Attribut des {{HTMLElement("iframe")}}-Elements, das definiert, welcher Referrer beim Abrufen der Ressource gesendet wird.

## Wert

- `no-referrer`
  - : Der {{HTTPHeader("Referer")}}-Header wird vollständig weggelassen. Es werden keine Referrer-Informationen mit den Anfragen gesendet.
- `no-referrer-when-downgrade`
  - : Die URL wird als Referrer gesendet, wenn das Protokollsicherheitsniveau gleich bleibt (HTTP→HTTP, HTTPS→HTTPS), jedoch nicht an ein weniger sicheres Ziel (HTTPS→HTTP).
- `origin`
  - : Nur der Ursprung des Dokuments wird in allen Fällen als Referrer gesendet. Das Dokument `https://example.com/page.html` wird den Referrer `https://example.com/` senden.
- `origin-when-cross-origin`
  - : Eine vollständige URL wird bei einer Anfrage selben Ursprungs gesendet, aber nur der Ursprung des Dokuments wird für andere Fälle gesendet.
- `same-origin`
  - : Ein Referrer wird für [gleichseitige Ursprünge](/de/docs/Web/Security/Defenses/Same-origin_policy) gesendet, aber bei Cross-Origin-Anfragen werden keine Referrer-Informationen enthalten sein.
- `strict-origin`
  - : Nur der Ursprung des Dokuments wird als Referrer gesendet, wenn das Protokollsicherheitsniveau gleich bleibt (HTTPS→HTTPS), jedoch nicht an ein weniger sicheres Ziel (HTTPS→HTTP).
- `strict-origin-when-cross-origin` (standardmäßig)
  - : Dies ist das Standardverhalten des Benutzeragenten, wenn keine Richtlinie angegeben ist. Eine vollständige URL wird bei einer Anfrage selben Ursprungs gesendet, nur der Ursprung wird gesendet, wenn das Protokollsicherheitsniveau gleich bleibt (HTTPS→HTTPS), und es wird kein Header an ein weniger sicheres Ziel (HTTPS→HTTP) gesendet.
- `unsafe-url`
  - : Eine vollständige URL wird bei einer Anfrage selben Ursprungs oder Cross-Origin gesendet.

    > [!NOTE]
    > Diese Richtlinie wird Ursprünge und Pfade von TLS-geschützten Ressourcen an unsichere Ursprünge lecken. Überlegen Sie sorgfältig die Auswirkungen dieser Einstellung.

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
