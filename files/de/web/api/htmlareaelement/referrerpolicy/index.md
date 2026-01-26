---
title: "HTMLAreaElement: referrerPolicy-Eigenschaft"
short-title: referrerPolicy
slug: Web/API/HTMLAreaElement/referrerPolicy
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

{{APIRef("HTML DOM")}}

Die **`HTMLAreaElement.referrerPolicy`**-Eigenschaft spiegelt das HTML-Attribut [`referrerpolicy`](/de/docs/Web/HTML/Reference/Elements/area#referrerpolicy) des {{HTMLElement("area")}}-Elements wider. Dieses definiert, welcher Referrer beim Abrufen der Ressource gesendet wird.

## Wert

Ein String; einer der folgenden:

- `no-referrer`
  - : Der {{HTTPHeader("Referer")}}-Header wird vollständig weggelassen. Es werden keine Referrer-Informationen mit den Anfragen gesendet.
- `no-referrer-when-downgrade`
  - : Die URL wird als Referrer gesendet, wenn das Sicherheitsniveau des Protokolls gleich bleibt (z.B. HTTP→HTTP, HTTPS→HTTPS), aber nicht an ein weniger sicheres Ziel gesendet (z.B. HTTPS→HTTP).
- `origin`
  - : Sendet in allen Fällen nur den Ursprung des Dokuments als Referrer. Das Dokument `https://example.com/page.html` sendet den Referrer `https://example.com/`.
- `origin-when-cross-origin`
  - : Sendet eine volle URL, wenn eine Anfrage im selben Ursprung durchgeführt wird, aber nur den Ursprung des Dokuments in anderen Fällen.
- `same-origin`
  - : Ein Referrer wird für [same-site origins](/de/docs/Web/Security/Defenses/Same-origin_policy) gesendet, aber Anfragen über unterschiedliche Ursprünge hinweg enthalten keine Referrer-Informationen.
- `strict-origin`
  - : Sendet nur den Ursprung des Dokuments als Referrer, wenn das Sicherheitsniveau des Protokolls gleich bleibt (z.B. HTTPS→HTTPS), aber nicht an ein weniger sicheres Ziel (z.B. HTTPS→HTTP).
- `strict-origin-when-cross-origin` (Standard)
  - : Dies ist das Standardverhalten des User-Agents, wenn keine Richtlinie spezifiziert ist. Sendet eine volle URL, wenn eine Anfrage im selben Ursprung durchgeführt wird, sendet nur den Ursprung, wenn das Sicherheitsniveau des Protokolls gleich bleibt (z.B. HTTPS→HTTPS), und sendet keinen Header an ein weniger sicheres Ziel (z.B. HTTPS→HTTP).
- `unsafe-url`
  - : Sendet eine volle URL bei Anfragen im selben oder über unterschiedliche Ursprünge hinweg. Diese Richtlinie kann Ursprünge und Pfade von TLS-geschützten Ressourcen an unsichere Ursprünge weitergeben. Erwägen Sie sorgfältig die Auswirkungen dieser Einstellung.

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
  [`HTMLAnchorElement.referrerPolicy`](/de/docs/Web/API/HTMLAnchorElement/referrerPolicy) und
  [`HTMLIFrameElement.referrerPolicy`](/de/docs/Web/API/HTMLIFrameElement/referrerPolicy).
