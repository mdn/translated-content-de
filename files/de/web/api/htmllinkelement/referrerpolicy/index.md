---
title: "HTMLLinkElement: Eigenschaft referrerPolicy"
short-title: referrerPolicy
slug: Web/API/HTMLLinkElement/referrerPolicy
l10n:
  sourceCommit: 1a790d83cbfcd76ac05a1b18697597f8d110d2cf
---

{{APIRef("HTML DOM")}}

Die **`referrerPolicy`**-Eigenschaft des [`HTMLLinkElement`](/de/docs/Web/API/HTMLLinkElement)-Interfaces
spiegelt das HTML-Attribut [`referrerpolicy`](/de/docs/Web/HTML/Element/link#referrerpolicy) des
{{HTMLElement("link")}}-Elements wider, welches definiert, welcher Referrer beim Abrufen der
Ressource gesendet wird.

Weitere Details finden Sie im HTTP-{{HTTPHeader("Referrer-Policy")}}-Header.

## Wert

Ein String; einer der folgenden:

- `no-referrer`
  - : Der {{HTTPHeader("Referer")}}-Header wird vollständig weggelassen. Es werden keine Referrer-Informationen
    mit Anfragen gesendet.
- `no-referrer-when-downgrade`
  - : Die URL wird als Referrer gesendet, wenn das Sicherheitsniveau des Protokolls gleich bleibt (z. B. HTTP→HTTP,
    HTTPS→HTTPS), aber nicht an ein weniger sicheres Ziel gesendet (z. B. HTTPS→HTTP).
- `origin`
  - : Sendet in allen Fällen nur den Ursprung des Dokuments als Referrer.
    Das Dokument `https://example.com/page.html` sendet den Referrer
    `https://example.com/`.
- `origin-when-cross-origin`
  - : Sendet eine volle URL bei einer Anfrage im selben Ursprung, sendet aber nur den Ursprung des
    Dokuments in anderen Fällen.
- `same-origin`
  - : Ein Referrer wird für [gleiche Site-Ursprünge](/de/docs/Web/Security/Same-origin_policy) gesendet, aber
    Cross-Origin-Anfragen enthalten keine Referrer-Informationen.
- `strict-origin`
  - : Sendet den Ursprung des Dokuments nur als Referrer, wenn das Sicherheitsniveau des Protokolls gleich bleibt (z. B. HTTPS→HTTPS), jedoch nicht an ein weniger sicheres Ziel (z. B. HTTPS→HTTP).
- `strict-origin-when-cross-origin` (Standard)
  - : Dies ist das Standardverhalten des Benutzeragenten, wenn keine Richtlinie angegeben ist. Sendet eine volle URL bei einer Anfrage im selben Ursprung, nur den Ursprung, wenn das
    Sicherheitsniveau des Protokolls gleich bleibt (z. B. HTTPS→HTTPS), und sendet keinen Header an ein
    weniger sicheres Ziel (z. B. HTTPS→HTTP).
- `unsafe-url`
  - : Sendet eine volle URL bei einer Anfrage im selben oder einem anderen Ursprung. Diese Richtlinie
    gibt Ursprünge und Pfade von TLS-geschützten Ressourcen an unsichere Ursprünge weiter.
    Überlegen Sie sich gut die Auswirkungen dieser Einstellung.

## Beispiele

```js
const links = document.getElementsByTagName("link");
links[0].referrerPolicy; // "no-referrer"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- HTTP-Header {{HTTPHeader("Referrer-Policy")}}
- [`HTMLAnchorElement.referrerPolicy`](/de/docs/Web/API/HTMLAnchorElement/referrerPolicy)
- [`HTMLAreaElement.referrerPolicy`](/de/docs/Web/API/HTMLAreaElement/referrerPolicy)
- [`HTMLIFrameElement.referrerPolicy`](/de/docs/Web/API/HTMLIFrameElement/referrerPolicy)
- [`HTMLImageElement.referrerPolicy`](/de/docs/Web/API/HTMLImageElement/referrerPolicy)
