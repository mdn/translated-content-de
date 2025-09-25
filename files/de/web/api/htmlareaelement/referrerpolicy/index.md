---
title: "HTMLAreaElement: referrerPolicy-Eigenschaft"
short-title: referrerPolicy
slug: Web/API/HTMLAreaElement/referrerPolicy
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("HTML DOM")}}

Die **`HTMLAreaElement.referrerPolicy`**-Eigenschaft spiegelt das HTML-Attribut [`referrerpolicy`](/de/docs/Web/HTML/Reference/Elements/area#referrerpolicy) des {{HTMLElement("area")}}-Elements wider, das definiert, welcher Referrer beim Abrufen der Ressource gesendet wird.

## Wert

Ein String; einer der folgenden:

- `no-referrer`
  - : Der {{HTTPHeader("Referer")}}-Header wird komplett weggelassen. Es werden keine Referrer-Informationen mit den Anfragen gesendet.
- `no-referrer-when-downgrade`
  - : Die URL wird als Referrer gesendet, wenn das Protokollsicherheitslevel gleich bleibt (z.B. HTTP→HTTP, HTTPS→HTTPS), aber nicht an ein weniger sicheres Ziel gesendet wird (z.B. HTTPS→HTTP).
- `origin`
  - : Nur der Ursprung des Dokuments wird in allen Fällen als Referrer gesendet. Das Dokument `https://example.com/page.html` wird den Referrer `https://example.com/` senden.
- `origin-when-cross-origin`
  - : Eine vollständige URL wird bei einer same-origin-Anfrage gesendet, aber nur der Ursprung des Dokuments in anderen Fällen.
- `same-origin`
  - : Ein Referrer wird für [same-site Ursprünge](/de/docs/Web/Security/Same-origin_policy) gesendet, aber cross-origin-Anfragen enthalten keine Referrer-Informationen.
- `strict-origin`
  - : Nur der Ursprung des Dokuments wird als Referrer gesendet, wenn das Protokollsicherheitslevel gleich bleibt (z.B. HTTPS→HTTPS), aber nicht an ein weniger sicheres Ziel gesendet wird (z.B. HTTPS→HTTP).
- `strict-origin-when-cross-origin` (Standard)
  - : Dies ist das Standardverhalten des User-Agents, wenn keine Richtlinie angegeben ist. Eine vollständige URL wird bei einer same-origin-Anfrage gesendet, nur der Ursprung, wenn das Protokollsicherheitslevel gleich bleibt (z.B. HTTPS→HTTPS), und kein Header zu einem weniger sicheren Ziel gesendet wird (z.B. HTTPS→HTTP).
- `unsafe-url`
  - : Eine vollständige URL wird sowohl bei einer same-origin- als auch bei einer cross-origin-Anfrage gesendet. Diese Richtlinie wird Ursprünge und Pfade von TLS-geschützten Ressourcen an unsichere Ursprünge preisgeben. Überlegen Sie sich die Auswirkungen dieser Einstellung sorgfältig.

## Beispiele

```html
<img usemap="#mapAround" width="100" height="100" src="/img/logo@2x.png" />
<map id="myMap" name="mapAround"></map>
```

```js
const elt = document.createElement("area");
elt.href = "/img2.png";
elt.shape = "rect";
elt.referrerPolicy = "no-referrer";
elt.coords = "0,0,100,100";
const map = document.getElementById("myMap");

map.appendChild(elt);
// When clicked, the area's link will not send a referrer header.
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLImageElement.referrerPolicy`](/de/docs/Web/API/HTMLImageElement/referrerPolicy),
  [`HTMLAnchorElement.referrerPolicy`](/de/docs/Web/API/HTMLAnchorElement/referrerPolicy) und
  [`HTMLIFrameElement.referrerPolicy`](/de/docs/Web/API/HTMLIFrameElement/referrerPolicy).
