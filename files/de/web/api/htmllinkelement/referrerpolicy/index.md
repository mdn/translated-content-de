---
title: "HTMLLinkElement: referrerPolicy-Eigenschaft"
short-title: referrerPolicy
slug: Web/API/HTMLLinkElement/referrerPolicy
l10n:
  sourceCommit: 1a790d83cbfcd76ac05a1b18697597f8d110d2cf
---

{{APIRef("HTML DOM")}}

Die **`referrerPolicy`**-Eigenschaft der {{domxref("HTMLLinkElement")}}-Schnittstelle
spiegelt das HTML-Attribut [`referrerpolicy`](/de/docs/Web/HTML/Element/link#referrerpolicy) des
{{HTMLElement("link")}}-Elements wider, welches definiert, welcher Referrer beim Abrufen der
Ressource gesendet wird.

Siehe den HTTP-{{HTTPHeader("Referrer-Policy")}}-Header für Details.

## Wert

Ein String; einer der folgenden:

- `no-referrer`
  - : Der {{HTTPHeader("Referer")}}-Header wird vollständig ausgelassen. Keine Referrer-
    Informationen werden mit Anfragen gesendet.
- `no-referrer-when-downgrade`
  - : Die URL wird
    als Referrer gesendet, wenn das Sicherheitsniveau des Protokolls gleich bleibt (z.B. HTTP→HTTP,
    HTTPS→HTTPS), jedoch nicht an ein weniger sicheres Ziel (z.B. HTTPS→HTTP).
- `origin`
  - : Sendet nur den Ursprung des Dokuments als Referrer in allen Fällen.
    Das Dokument `https://example.com/page.html` sendet den Referrer
    `https://example.com/`.
- `origin-when-cross-origin`
  - : Sendet eine vollständige URL bei einer gleich-origin-Anfrage, aber nur den Ursprung des
    Dokuments in anderen Fällen.
- `same-origin`
  - : Ein Referrer wird für [same-site origins](/de/docs/Web/Security/Same-origin_policy) gesendet, aber
    bei cross-origin-Anfragen werden keine Referrer-Informationen enthalten sein.
- `strict-origin`
  - : Sendet nur den Ursprung des Dokuments als Referrer, wenn das Sicherheitsniveau des
    Protokolls gleich bleibt (z.B. HTTPS→HTTPS), jedoch nicht an ein weniger sicheres
    Ziel (z.B. HTTPS→HTTP).
- `strict-origin-when-cross-origin` (standardmäßig)
  - : Dies ist das Standardverhalten des Benutzeragents, wenn keine Richtlinie angegeben ist. Sendet eine vollständige URL bei einer gleich-origin-Anfrage, sendet nur den Ursprung, wenn das
    Sicherheitsniveau des Protokolls gleich bleibt (z.B. HTTPS→HTTPS), und sendet keinen Header an ein
    weniger sicheres Ziel (z.B. HTTPS→HTTP).
- `unsafe-url`
  - : Sendet eine vollständige URL bei einer gleich-origin oder cross-origin Anfrage. Diese Richtlinie
    wird Ursprünge und Pfade von TLS-geschützten Ressourcen an unsichere Ursprünge weitergeben.
    Berücksichtigen Sie sorgfältig die Auswirkungen dieser Einstellung.

## Beispiele

```js
const links = document.getElementsByTagName("link");
links[0].referrerPolicy; // "no-referrer"
```

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- HTTP-Header {{HTTPHeader("Referrer-Policy")}}
- {{domxref("HTMLAnchorElement.referrerPolicy")}}
- {{domxref("HTMLAreaElement.referrerPolicy")}}
- {{domxref("HTMLIFrameElement.referrerPolicy")}}
- {{domxref("HTMLImageElement.referrerPolicy")}}
