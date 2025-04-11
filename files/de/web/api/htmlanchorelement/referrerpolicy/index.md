---
title: "HTMLAnchorElement: referrerPolicy Eigenschaft"
short-title: referrerPolicy
slug: Web/API/HTMLAnchorElement/referrerPolicy
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef}}

Die **`HTMLAnchorElement.referrerPolicy`**-Eigenschaft spiegelt das HTML-Attribut [`referrerpolicy`](/de/docs/Web/HTML/Reference/Elements/a#referrerpolicy) des {{HTMLElement("a")}}-Elements wider und definiert, welcher Referrer beim Abrufen der Ressource gesendet wird.

## Wert

Ein String; einer der folgenden:

- `no-referrer`
  - : Der {{HTTPHeader("Referer")}}-Header wird vollständig weggelassen. Es werden keine Referrer-Informationen mit Anfragen gesendet.
- `no-referrer-when-downgrade`
  - : Die URL wird als Referrer gesendet, wenn das Sicherheitsniveau des Protokolls gleich bleibt (z.B. HTTP→HTTP, HTTPS→HTTPS), aber nicht an ein weniger sicheres Ziel (z.B. HTTPS→HTTP) gesendet wird.
- `origin`
  - : Sendet in allen Fällen nur den Ursprung des Dokuments als Referrer. Das Dokument `https://example.com/page.html` wird den Referrer `https://example.com/` senden.
- `origin-when-cross-origin`
  - : Sendet eine vollständige URL bei gleich-originierten Anfragen, aber nur den Ursprung des Dokuments für andere Fälle.
- `same-origin`
  - : Ein Referrer wird für [gleichseitige Ursprünge](/de/docs/Web/Security/Same-origin_policy) gesendet, aber bei ursprungsübergreifenden Anfragen werden keine Referrer-Informationen enthalten sein.
- `strict-origin`
  - : Sendet nur den Ursprung des Dokuments als Referrer, wenn das Sicherheitsniveau des Protokolls gleich bleibt (z.B. HTTPS→HTTPS), aber nicht an ein weniger sicheres Ziel (z.B. HTTPS→HTTP).
- `strict-origin-when-cross-origin` (Standard)
  - : Dies ist das Standardverhalten des User-Agents, wenn keine Richtlinie angegeben ist. Sendet eine vollständige URL bei gleich-originierten Anfragen, sendet nur den Ursprung, wenn das Sicherheitsniveau des Protokolls gleich bleibt (z.B. HTTPS→HTTPS), und sendet keinen Header an ein weniger sicheres Ziel (z.B. HTTPS→HTTP).
- `unsafe-url`
  - : Sendet eine vollständige URL bei gleich-originierten oder ursprungsübergreifenden Anfragen. Diese Richtlinie wird Ursprünge und Pfade von TLS-geschützten Ressourcen an unsichere Ursprünge leiten. Berücksichtigen Sie sorgfältig die Auswirkungen dieser Einstellung.

## Beispiele

```js
const elt = document.createElement("a");
const linkText = document.createTextNode("My link");
elt.appendChild(linkText);
elt.href = "https://developer.mozilla.org/en-US/";
elt.referrerPolicy = "no-referrer";

const div = document.getElementById("divAround");
div.appendChild(elt); // When clicked, the link will not send a referrer header.
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLImageElement.referrerPolicy`](/de/docs/Web/API/HTMLImageElement/referrerPolicy),
  [`HTMLAreaElement.referrerPolicy`](/de/docs/Web/API/HTMLAreaElement/referrerPolicy), und
  [`HTMLIFrameElement.referrerPolicy`](/de/docs/Web/API/HTMLIFrameElement/referrerPolicy).
