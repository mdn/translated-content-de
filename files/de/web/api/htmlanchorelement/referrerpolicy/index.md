---
title: "HTMLAnchorElement: referrerPolicy-Eigenschaft"
short-title: referrerPolicy
slug: Web/API/HTMLAnchorElement/referrerPolicy
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{APIRef}}

Die
**`HTMLAnchorElement.referrerPolicy`**
Eigenschaft spiegelt das HTML-Attribut [`referrerpolicy`](/de/docs/Web/HTML/Element/a#referrerpolicy) des
{{HTMLElement("a")}}-Elements wider, das definiert, welcher Referrer beim Abrufen der Ressource gesendet wird.

## Wert

Ein String; einer der folgenden:

- `no-referrer`
  - : Der {{HTTPHeader("Referer")}}-Header wird vollständig weggelassen. Es wird keine Referrer-
    Information mit Anfragen gesendet.
- `no-referrer-when-downgrade`
  - : Die URL wird als Referrer gesendet, wenn das Protokoll-Sicherheitsniveau gleich bleibt (z.B. HTTP→HTTP,
    HTTPS→HTTPS), aber nicht zu einem weniger sicheren Ziel gesendet wird (z.B. HTTPS→HTTP).
- `origin`
  - : Es wird nur der Ursprung des Dokuments als Referrer in allen Fällen gesendet.
    Das Dokument `https://example.com/page.html` wird den Referrer
    `https://example.com/` senden.
- `origin-when-cross-origin`
  - : Sendet eine vollständige URL bei einer Anfrage aus dem gleichen Ursprungsbereich, aber nur den Ursprung des
    Dokuments in anderen Fällen.
- `same-origin`
  - : Ein Referrer wird für [origin-gleiche Ursprünge](/de/docs/Web/Security/Same-origin_policy) gesendet, aber
    Anfragen mit unterschiedlichem Ursprung enthalten keine Referrer-Informationen.
- `strict-origin`
  - : Sendet nur den Ursprung des Dokuments als Referrer, wenn das Protokoll-Sicherheitsniveau gleich bleibt
    (z.B. HTTPS→HTTPS), jedoch nicht zu einem weniger sicheren Ziel (z.B. HTTPS→HTTP).
- `strict-origin-when-cross-origin` (Standard)
  - : Dies ist das Standardverhalten des Benutzeragenten, wenn keine Richtlinie angegeben ist. Es wird eine vollständige URL bei einer Anfrage aus dem gleichen Ursprungsbereich gesendet, nur der Ursprung wird gesendet, wenn
    das Protokoll-Sicherheitsniveau gleich bleibt (z.B. HTTPS→HTTPS), und es wird kein Header an ein
    weniger sicheres Ziel gesendet (z.B. HTTPS→HTTP).
- `unsafe-url`
  - : Sendet eine vollständige URL sowohl bei einer Anfrage aus dem gleichen Ursprungsbereich als auch bei einer Anfrage mit unterschiedlichem Ursprung. Diese Richtlinie
    wird Ursprünge und Pfade von TLS-geschützten Ressourcen an unsichere Ursprünge weiterleiten.
    Überlegen Sie sorgfältig die Auswirkungen dieser Einstellung.

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
  [`HTMLAreaElement.referrerPolicy`](/de/docs/Web/API/HTMLAreaElement/referrerPolicy) und
  [`HTMLIFrameElement.referrerPolicy`](/de/docs/Web/API/HTMLIFrameElement/referrerPolicy).
