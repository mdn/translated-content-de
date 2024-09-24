---
title: "HTMLAreaElement: referrerPolicy-Eigenschaft"
short-title: referrerPolicy
slug: Web/API/HTMLAreaElement/referrerPolicy
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{APIRef}}

Die **`HTMLAreaElement.referrerPolicy`**-Eigenschaft spiegelt das HTML-Attribut [`referrerpolicy`](/de/docs/Web/HTML/Element/area#referrerpolicy) des {{HTMLElement("area")}}-Elements wider und definiert, welche Referrer-Informationen gesendet werden, wenn die Ressource abgerufen wird.

## Wert

Ein String; einer der folgenden:

- `no-referrer`
  - : Der {{HTTPHeader("Referer")}}-Header wird vollständig weggelassen. Es werden keine Referrer-Informationen mit den Anfragen gesendet.
- `no-referrer-when-downgrade`
  - : Die URL wird als Referrer gesendet, wenn das Sicherheitsniveau des Protokolls gleich bleibt (z.B. HTTP→HTTP, HTTPS→HTTPS), aber nicht zu einem weniger sicheren Ziel (z.B. HTTPS→HTTP) gesendet.
- `origin`
  - : Nur der Ursprung des Dokuments wird in allen Fällen als Referrer gesendet. Das Dokument `https://example.com/page.html` sendet den Referrer `https://example.com/`.
- `origin-when-cross-origin`
  - : Eine vollständige URL wird bei einer Same-Origin-Anfrage gesendet, aber nur der Ursprung des Dokuments für andere Fälle.
- `same-origin`
  - : Ein Referrer wird für [Same-Site-Ursprünge](/de/docs/Web/Security/Same-origin_policy) gesendet, aber bei Cross-Origin-Anfragen werden keine Referrer-Informationen gesendet.
- `strict-origin`
  - : Nur der Ursprung des Dokuments wird als Referrer gesendet, wenn das Sicherheitsniveau des Protokolls gleich bleibt (z.B. HTTPS→HTTPS), aber nicht zu einem weniger sicheren Ziel (z.B. HTTPS→HTTP) gesendet.
- `strict-origin-when-cross-origin` (Standard)
  - : Dies ist das Standardverhalten des User-Agents, wenn keine Richtlinie festgelegt ist. Eine vollständige URL wird bei einer Same-Origin-Anfrage gesendet, der Ursprung nur, wenn das Sicherheitsniveau des Protokolls gleich bleibt (z.B. HTTPS→HTTPS), und kein Header wird zu einem weniger sicheren Ziel (z.B. HTTPS→HTTP) gesendet.
- `unsafe-url`
  - : Eine vollständige URL wird bei einer Same-Origin- oder Cross-Origin-Anfrage gesendet. Diese Richtlinie kann Ursprünge und Pfade von TLS-geschützten Ressourcen an unsichere Ursprünge weitergeben. Berücksichtigen Sie die Auswirkungen dieser Einstellung sorgfältig.

## Beispiele

```html
<img usemap="#mapAround" width="100" height="100" src="/img/logo@2x.png" />
<map id="myMap" name="mapAround" />>
```

```js
const elt = document.createElement("area");
elt.href = "/img2.png";
elt.shape = "rect";
elt.referrerPolicy = "no-referrer";
elt.coords = "0,0,100,100";
const map = document.getElementById("myMap");

map.appendChild(elt);
// Beim Klicken wird die Link des area-Elementes keinen Referrer-Header senden.
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("HTMLImageElement.referrerPolicy")}},
  {{domxref("HTMLAnchorElement.referrerPolicy")}} und
  {{domxref("HTMLIFrameElement.referrerPolicy")}}.
