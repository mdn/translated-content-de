---
title: "HTMLImageElement: referrerPolicy-Eigenschaft"
short-title: referrerPolicy
slug: Web/API/HTMLImageElement/referrerPolicy
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{APIRef("HTML DOM")}}

Die
**`HTMLImageElement.referrerPolicy`**
Eigenschaft spiegelt das HTML-Attribut [`referrerpolicy`](/de/docs/Web/HTML/Element/img#referrerpolicy) des
{{HTMLElement("img")}}-Elements wider, welches definiert, welcher Referrer beim Abrufen der
Ressource gesendet wird.

## Wert

Ein String; einer der folgenden:

- `no-referrer`
  - : Der {{HTTPHeader("Referer")}}-Header wird vollständig weggelassen. Es werden keine Referrer-Informationen mit Anfragen gesendet.
- `no-referrer-when-downgrade`
  - : Die URL wird als Referrer gesendet, wenn das Sicherheitsniveau des Protokolls gleich bleibt (z.B. HTTP→HTTP,
    HTTPS→HTTPS), aber nicht an ein weniger sicheres Ziel gesendet wird (z.B. HTTPS→HTTP).
- `origin`
  - : Es wird in allen Fällen nur der Ursprung des Dokuments als Referrer gesendet.
    Das Dokument `https://example.com/page.html` wird den Referrer
    `https://example.com/` senden.
- `origin-when-cross-origin`
  - : Eine vollständige URL wird bei einer same-origin-Anfrage gesendet, jedoch wird nur der Ursprung des
    Dokuments für andere Fälle gesendet.
- `same-origin`
  - : Ein Referrer wird für [same-site origins](/de/docs/Web/Security/Same-origin_policy) gesendet, aber
    bei Cross-Origin-Anfragen werden keine Referrer-Informationen gesendet.
- `strict-origin`
  - : Es wird nur der Ursprung des Dokuments als Referrer gesendet, wenn das Sicherheitsniveau des Protokolls gleich bleibt (z.B. HTTPS→HTTPS), jedoch nicht an ein weniger sicheres Ziel (z.B. HTTPS→HTTP).
- `strict-origin-when-cross-origin` (Standard)
  - : Dies ist das Standardverhalten des User Agents, wenn keine Richtlinie angegeben ist. Eine vollständige URL wird bei einer same-origin-Anfrage gesendet, nur der Ursprung wird gesendet, wenn das Sicherheitsniveau des Protokolls gleich bleibt (z.B. HTTPS→HTTPS), und es wird kein Header an ein weniger sicheres Ziel gesendet (z.B. HTTPS→HTTP).
- `unsafe-url`
  - : Eine vollständige URL wird sowohl bei same-origin- als auch bei Cross-Origin-Anfragen gesendet. Diese Richtlinie kann Ursprünge und Pfade von TLS-geschützten Ressourcen an unsichere Ursprünge preisgeben.
    Überdenken Sie sorgfältig die Auswirkungen dieser Einstellung.

## Beispiele

```js
const img = new Image();
img.src = "img/logo.png";
img.referrerPolicy = "origin";

const div = document.getElementById("divAround");
div.appendChild(img); // Fetch the image using the origin as the referrer
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLAnchorElement.referrerPolicy`](/de/docs/Web/API/HTMLAnchorElement/referrerPolicy),
  [`HTMLAreaElement.referrerPolicy`](/de/docs/Web/API/HTMLAreaElement/referrerPolicy) und
  [`HTMLIFrameElement.referrerPolicy`](/de/docs/Web/API/HTMLIFrameElement/referrerPolicy).
