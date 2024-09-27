---
title: "HTMLAreaElement: referrerPolicy-Eigenschaft"
short-title: referrerPolicy
slug: Web/API/HTMLAreaElement/referrerPolicy
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{APIRef}}

Die Eigenschaft
**`HTMLAreaElement.referrerPolicy`**
spiegelt das HTML-Attribut [`referrerpolicy`](/de/docs/Web/HTML/Element/area#referrerpolicy) des
{{HTMLElement("area")}}-Elements wider, welches definiert, welcher Referrer gesendet wird, wenn die Ressource abgerufen wird.

## Wert

Ein String; einer der folgenden:

- `no-referrer`
  - : Der {{HTTPHeader("Referer")}}-Header wird vollständig weggelassen. Es werden keine
    Referrer-Informationen zusammen mit Anfragen gesendet.
- `no-referrer-when-downgrade`
  - : Die URL wird als Referrer gesendet, wenn das Sicherheitsniveau des Protokolls gleich bleibt (z. B. HTTP→HTTP,
    HTTPS→HTTPS), aber nicht zu einem weniger sicheren Ziel gesendet wird (z. B. HTTPS→HTTP).
- `origin`
  - : Nur der Ursprung des Dokuments wird in allen Fällen als Referrer gesendet.
    Das Dokument `https://example.com/page.html` wird den Referrer
    `https://example.com/` senden.
- `origin-when-cross-origin`
  - : Eine vollständige URL wird bei einer Anfrage gleichen Ursprungs gesendet, aber nur der Ursprung des Dokuments für andere Fälle.
- `same-origin`
  - : Ein Referrer wird für [gleichseitige Ursprünge](/de/docs/Web/Security/Same-origin_policy) gesendet, aber bei
    Cross-Origin-Anfragen werden keine Referrer-Informationen enthalten.
- `strict-origin`
  - : Nur den Ursprung des Dokuments als Referrer senden, wenn das Sicherheitsniveau des Protokolls gleich bleibt
    (z. B. HTTPS→HTTPS), aber nicht zu einem weniger sicheren Ziel senden (z. B. HTTPS→HTTP).
- `strict-origin-when-cross-origin` (Standard)
  - : Dies ist das Standardverhalten des Benutzeragenten, wenn keine Richtlinie angegeben ist. Eine vollständige URL wird bei einer Anfrage gleichen Ursprungs gesendet, nur den Ursprung senden, wenn das
    Sicherheitsniveau des Protokolls gleich bleibt (z. B. HTTPS→HTTPS), und keinen Header zu einem
    weniger sicheren Ziel senden (z. B. HTTPS→HTTP).
- `unsafe-url`
  - : Eine vollständige URL wird bei einer Anfrage gleichen Ursprungs oder Cross-Origin gesendet. Diese Richtlinie
    wird Ursprünge und Pfade von TLS-geschützten Ressourcen zu unsicheren Ursprüngen leaken. Berücksichtigen Sie sorgfältig die Auswirkungen dieser Einstellung.

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
