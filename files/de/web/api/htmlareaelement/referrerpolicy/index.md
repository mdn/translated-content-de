---
title: "HTMLAreaElement: referrerPolicy-Eigenschaft"
short-title: referrerPolicy
slug: Web/API/HTMLAreaElement/referrerPolicy
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef}}

Die **`HTMLAreaElement.referrerPolicy`**-Eigenschaft spiegelt das HTML-Attribut [`referrerpolicy`](/de/docs/Web/HTML/Reference/Elements/area#referrerpolicy) des {{HTMLElement("area")}}-Elements wider und definiert, welcher Referrer beim Abrufen der Ressource gesendet wird.

## Wert

Ein String; einer der folgenden:

- `no-referrer`
  - : Der {{HTTPHeader("Referer")}}-Header wird vollständig weggelassen. Es wird keine Referrer-Information mit Anfragen gesendet.
- `no-referrer-when-downgrade`
  - : Die URL wird als Referrer gesendet, wenn das Sicherheitsniveau des Protokolls gleich bleibt (z.B. HTTP→HTTP, HTTPS→HTTPS), aber nicht an ein weniger sicheres Ziel gesendet (z.B. HTTPS→HTTP).
- `origin`
  - : Nur der Ursprung des Dokuments wird in allen Fällen als Referrer gesendet. Das Dokument `https://example.com/page.html` sendet den Referrer `https://example.com/`.
- `origin-when-cross-origin`
  - : Eine vollständige URL wird bei einer Same-Origin-Anfrage gesendet, aber nur der Ursprung des Dokuments für andere Fälle.
- `same-origin`
  - : Ein Referrer wird für [same-site origins](/de/docs/Web/Security/Same-origin_policy) gesendet, aber bei Cross-Origin-Anfragen werden keine Referrer-Informationen gesendet.
- `strict-origin`
  - : Nur der Ursprung des Dokuments wird als Referrer gesendet, wenn das Sicherheitsniveau des Protokolls gleich bleibt (z.B. HTTPS→HTTPS), jedoch nicht an ein weniger sicheres Ziel (z.B. HTTPS→HTTP).
- `strict-origin-when-cross-origin` (Standard)
  - : Dies ist das Standardverhalten des Benutzeragenten, wenn keine Richtlinie angegeben ist. Eine vollständige URL wird für eine Same-Origin-Anfrage gesendet, nur der Ursprung wird gesendet, wenn das Sicherheitsniveau des Protokolls gleich bleibt (z.B. HTTPS→HTTPS), und es wird kein Header an ein weniger sicheres Ziel gesendet (z.B. HTTPS→HTTP).
- `unsafe-url`
  - : Senden Sie eine vollständige URL bei Same-Origin- oder Cross-Origin-Anfragen. Diese Richtlinie wird Ursprünge und Pfade von TLS-geschützten Ressourcen an unsichere Ursprünge lecken. Überlegen Sie sorgfältig, welche Auswirkungen diese Einstellung hat.

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

- [`HTMLImageElement.referrerPolicy`](/de/docs/Web/API/HTMLImageElement/referrerPolicy), [`HTMLAnchorElement.referrerPolicy`](/de/docs/Web/API/HTMLAnchorElement/referrerPolicy) und [`HTMLIFrameElement.referrerPolicy`](/de/docs/Web/API/HTMLIFrameElement/referrerPolicy).
