---
title: "HTMLAreaElement: referrerPolicy-Eigenschaft"
short-title: referrerPolicy
slug: Web/API/HTMLAreaElement/referrerPolicy
l10n:
  sourceCommit: aff319cd81d10cfda31b13adb3263deafb284b20
---

{{APIRef("HTML DOM")}}

Die Eigenschaft
**`HTMLAreaElement.referrerPolicy`**
spiegelt das HTML-Attribut [`referrerpolicy`](/de/docs/Web/HTML/Reference/Elements/area#referrerpolicy) des
{{HTMLElement("area")}}-Elements wider, das definiert, welcher Referrer beim Abrufen der
Ressource gesendet wird.

## Wert

Ein String; einer der folgenden:

- `no-referrer`
  - : Der {{HTTPHeader("Referer")}}-Header wird vollständig weggelassen. Es wird keine Referrer-
    Information zusammen mit Anfragen gesendet.
- `no-referrer-when-downgrade`
  - : Die URL wird als Referrer gesendet, wenn das Sicherheitsniveau des Protokolls gleich bleibt (z.B. HTTP→HTTP,
    HTTPS→HTTPS), wird jedoch nicht an ein weniger sicheres Ziel gesendet (z.B. HTTPS→HTTP).
- `origin`
  - : Nur der Ursprung des Dokuments wird in allen Fällen als Referrer gesendet.
    Das Dokument `https://example.com/page.html` wird den Referrer
    `https://example.com/` senden.
- `origin-when-cross-origin`
  - : Sendet eine vollständige URL bei einer Anfrage, die vom selben Ursprung kommt, sendet jedoch nur den Ursprung des
    Dokuments in anderen Fällen.
- `same-origin`
  - : Ein Referrer wird für [gleichartige Ursprünge](/de/docs/Web/Security/Same-origin_policy) gesendet, jedoch
    enthalten Anfragen zwischen unterschiedlichen Ursprüngen keine Referrer-Informationen.
- `strict-origin`
  - : Sendet nur den Ursprung des Dokuments als Referrer, wenn das Sicherheitsniveau des Protokolls gleich bleibt (z.B. HTTPS→HTTPS),
    sendet ihn jedoch nicht an ein weniger sicheres Ziel (z.B. HTTPS→HTTP).
- `strict-origin-when-cross-origin` (Standard)
  - : Dies ist das Standardverhalten des Benutzeragents, wenn keine Richtlinie angegeben ist. Sendet eine vollständige URL bei einer Anfrage vom selben Ursprung,
    sendet jedoch nur den Ursprung, wenn das Sicherheitsniveau des Protokolls gleich bleibt (z.B. HTTPS→HTTPS), und sendet keinen Header an ein
    weniger sicheres Ziel (z.B. HTTPS→HTTP).
- `unsafe-url`
  - : Sendet eine vollständige URL bei Anfragen vom selben Ursprung oder zwischen unterschiedlichen Ursprüngen. Diese Richtlinie
    wird Ursprünge und Pfade von TLS-geschützten Ressourcen an unsichere Ursprünge weitergeben. Überlegen Sie sorgfältig die Auswirkungen dieser Einstellung.

## Beispiele

```html
<img usemap="#my-map" width="100" height="100" src="/img/logo@2x.png" />
<map id="my-map" name="my-map"></map>
```

```js
const elt = document.createElement("area");
elt.href = "/img2.png";
elt.shape = "rect";
elt.referrerPolicy = "no-referrer";
elt.coords = "0,0,100,100";
const map = document.getElementById("my-map");

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
