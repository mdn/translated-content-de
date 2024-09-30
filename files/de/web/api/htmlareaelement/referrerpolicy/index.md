---
title: "HTMLAreaElement: referrerPolicy-Eigenschaft"
short-title: referrerPolicy
slug: Web/API/HTMLAreaElement/referrerPolicy
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{APIRef}}

Die Eigenschaft **`HTMLAreaElement.referrerPolicy`** spiegelt das HTML-Attribut [`referrerpolicy`](/de/docs/Web/HTML/Element/area#referrerpolicy) des {{HTMLElement("area")}}-Elements wider und legt fest, welcher Referrer gesendet wird, wenn die Ressource abgerufen wird.

## Wert

Ein String; einer der folgenden:

- `no-referrer`
  - : Der {{HTTPHeader("Referer")}}-Header wird vollständig weggelassen. Es werden keine Referrer-Informationen mit Anfragen gesendet.
- `no-referrer-when-downgrade`
  - : Die URL wird als Referrer gesendet, wenn das Sicherheitsniveau des Protokolls gleich bleibt (z.B. HTTP→HTTP, HTTPS→HTTPS), aber nicht zu einem weniger sicheren Ziel (z.B. HTTPS→HTTP) gesendet.
- `origin`
  - : Senden Sie in allen Fällen nur den Ursprung des Dokuments als Referrer. Das Dokument `https://example.com/page.html` sendet den Referrer `https://example.com/`.
- `origin-when-cross-origin`
  - : Senden Sie eine vollständige URL bei einer Anforderung gleichen Ursprungs, aber nur den Ursprung des Dokuments für andere Fälle.
- `same-origin`
  - : Ein Referrer wird für [gleichseitige Ursprünge](/de/docs/Web/Security/Same-origin_policy) gesendet, aber Anfragen aus anderen Ursprüngen enthalten keine Referrer-Informationen.
- `strict-origin`
  - : Nur den Ursprung des Dokuments als Referrer senden, wenn das Sicherheitsniveau des Protokolls gleich bleibt (z.B. HTTPS→HTTPS), aber nicht zu einem weniger sicheren Ziel (z.B. HTTPS→HTTP) senden.
- `strict-origin-when-cross-origin` (Standard)
  - : Dies ist das Standardverhalten des Benutzeragents, wenn keine Richtlinie angegeben ist. Senden Sie eine vollständige URL bei einer Anforderung gleichen Ursprungs, senden Sie nur den Ursprung, wenn das Sicherheitsniveau des Protokolls gleich bleibt (z.B. HTTPS→HTTPS), und senden Sie keinen Header zu einem weniger sicheren Ziel (z.B. HTTPS→HTTP).
- `unsafe-url`
  - : Senden Sie eine vollständige URL sowohl bei Anfragen gleichen Ursprungs als auch bei Anfragen aus anderen Ursprüngen. Diese Richtlinie leakt Ursprünge und Pfade von TLS-geschützten Ressourcen zu unsicheren Ursprüngen. Überlegen Sie sorgfältig die Auswirkungen dieser Einstellung.

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
