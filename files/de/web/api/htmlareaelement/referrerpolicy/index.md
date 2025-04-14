---
title: "HTMLAreaElement: referrerPolicy-Eigenschaft"
short-title: referrerPolicy
slug: Web/API/HTMLAreaElement/referrerPolicy
l10n:
  sourceCommit: 874ad29df9150037acb8a4a3e7550a302c90a080
---

{{APIRef}}

Die
**`HTMLAreaElement.referrerPolicy`**
Eigenschaft spiegelt das HTML-Attribut [`referrerpolicy`](/de/docs/Web/HTML/Reference/Elements/area#referrerpolicy) des
{{HTMLElement("area")}}-Elements wider, das definiert, welcher Referrer beim Abrufen der
Ressource gesendet wird.

## Wert

Ein String; einer der folgenden:

- `no-referrer`
  - : Der {{HTTPHeader("Referer")}}-Header wird vollständig weggelassen. Es werden keine
    Referrer-Informationen mit Anfragen gesendet.
- `no-referrer-when-downgrade`
  - : Die URL wird als Referrer gesendet, wenn das Protokollsicherheitsniveau gleich
    bleibt (z.B. HTTP→HTTP, HTTPS→HTTPS), aber nicht an ein weniger sicheres Ziel (z.B. HTTPS→HTTP).
- `origin`
  - : Es wird in allen Fällen nur der Ursprung des Dokuments als Referrer gesendet.
    Das Dokument `https://example.com/page.html` wird den Referrer
    `https://example.com/` senden.
- `origin-when-cross-origin`
  - : Eine vollständige URL wird bei einer Anfrage desselben Ursprungs gesendet, aber
    nur der Ursprung des Dokuments in anderen Fällen.
- `same-origin`
  - : Ein Referrer wird für [gleiche Seitenursprünge](/de/docs/Web/Security/Same-origin_policy) gesendet, jedoch werden bei
    Anfragen zu einem anderen Ursprung keine Referrer-Informationen enthalten.
- `strict-origin`
  - : Nur der Ursprung des Dokuments wird als Referrer gesendet, wenn das
    Protokollsicherheitsniveau gleich bleibt (z.B. HTTPS→HTTPS), aber nicht an ein
    weniger sicheres Ziel (z.B. HTTPS→HTTP).
- `strict-origin-when-cross-origin` (Standard)
  - : Dies ist das Standardverhalten des Benutzeragenten, wenn keine Richtlinie
    angegeben ist. Eine vollständige URL wird bei einer Anfrage desselben Ursprungs gesendet,
    nur der Ursprung wird gesendet, wenn das Protokollsicherheitsniveau
    gleich bleibt (z.B. HTTPS→HTTPS), und es wird kein Header an
    ein weniger sicheres Ziel gesendet (z.B. HTTPS→HTTP).
- `unsafe-url`
  - : Eine vollständige URL wird sowohl bei Anfragen desselben Ursprungs als auch bei
    Anfragen zu einem anderen Ursprung gesendet. Diese Richtlinie kann Ursprünge und Pfade
    von TLS-geschützten Ressourcen an unsichere Ursprünge weitergeben.
    Überlegen Sie sich die Auswirkungen dieser Einstellung sorgfältig.

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
  [`HTMLAnchorElement.referrerPolicy`](/de/docs/Web/API/HTMLAnchorElement/referrerPolicy), und
  [`HTMLIFrameElement.referrerPolicy`](/de/docs/Web/API/HTMLIFrameElement/referrerPolicy).
