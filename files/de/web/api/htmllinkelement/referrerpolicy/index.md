---
title: "HTMLLinkElement: referrerPolicy-Eigenschaft"
short-title: referrerPolicy
slug: Web/API/HTMLLinkElement/referrerPolicy
l10n:
  sourceCommit: 1a790d83cbfcd76ac05a1b18697597f8d110d2cf
---

{{APIRef("HTML DOM")}}

Die **`referrerPolicy`**-Eigenschaft des [`HTMLLinkElement`](/de/docs/Web/API/HTMLLinkElement)-Interfaces
spiegelt das HTML-Attribut [`referrerpolicy`](/de/docs/Web/HTML/Element/link#referrerpolicy) des
{{HTMLElement("link")}}-Elements wider, das definiert, welcher Referrer gesendet wird, wenn die Ressource abgerufen wird.

Weitere Informationen finden Sie im HTTP {{HTTPHeader("Referrer-Policy")}}-Header.

## Wert

Ein String; einer der folgenden:

- `no-referrer`
  - : Der {{HTTPHeader("Referer")}}-Header wird vollständig weggelassen. Es werden keine
    Referrer-Informationen mit Anfragen gesendet.
- `no-referrer-when-downgrade`
  - : Die URL wird als Referrer gesendet, wenn das Sicherheitsniveau des Protokolls gleich bleibt (z. B. HTTP→HTTP,
    HTTPS→HTTPS), aber nicht an ein weniger sicheres Ziel gesendet (z. B. HTTPS→HTTP).
- `origin`
  - : Es wird in allen Fällen nur der Ursprung des Dokuments als Referrer gesendet.
    Das Dokument `https://example.com/page.html` sendet den Referrer
    `https://example.com/`.
- `origin-when-cross-origin`
  - : Eine vollständige URL wird bei einer Anfrage mit demselben Ursprung gesendet, aber es wird nur der Ursprung des
    Dokuments für andere Fälle gesendet.
- `same-origin`
  - : Ein Referrer wird für [same-site origins](/de/docs/Web/Security/Same-origin_policy) gesendet, aber
    bei cross-origin Anfragen werden keine Referrer-Informationen sendet.
- `strict-origin`
  - : Es wird nur der Ursprung des Dokuments als Referrer gesendet, wenn das Sicherheitsniveau des Protokolls gleich bleibt (z. B. HTTPS→HTTPS), aber nicht an ein weniger sicheres Ziel gesendet (z. B. HTTPS→HTTP).
- `strict-origin-when-cross-origin` (Standard)
  - : Dies ist das Standardverhalten des Benutzeragenten, wenn keine Richtlinie angegeben ist. Eine vollständige URL wird bei einer Anfrage mit demselben Ursprung gesendet, es wird nur der Ursprung gesendet, wenn das Sicherheitsniveau des Protokolls gleich bleibt (z. B. HTTPS→HTTPS), und es wird kein Header an ein weniger sicheres Ziel gesendet (z. B. HTTPS→HTTP).
- `unsafe-url`
  - : Eine vollständige URL wird bei einer Anfrage mit demselben oder einem anderen Ursprung gesendet. Diese Richtlinie wird Ursprünge und Pfade von TLS-geschützten Ressourcen an unsichere Ursprünge weitergeben.
    Überlegen Sie sich sorgfältig die Auswirkungen dieser Einstellung.

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
