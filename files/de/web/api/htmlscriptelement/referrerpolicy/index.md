---
title: "HTMLScriptElement: referrerPolicy-Eigenschaft"
short-title: referrerPolicy
slug: Web/API/HTMLScriptElement/referrerPolicy
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{APIRef("HTML DOM")}}

Die **`referrerPolicy`**-Eigenschaft der
[`HTMLScriptElement`](/de/docs/Web/API/HTMLScriptElement)-Schnittstelle spiegelt das HTML
[`referrerpolicy`](/de/docs/Web/HTML/Element/script#referrerpolicy) der {{HTMLElement("script")}}-Element wider, das definiert, wie der Referrer gesetzt wird, wenn das Skript und alle importierten Skripte abgerufen werden.

## Wert

Ein String; einer der folgenden:

- `no-referrer`
  - : Der {{HTTPHeader("Referer")}}-Header wird vollständig weggelassen. Es werden keine Referrer-Informationen mit Anfragen gesendet.
- `no-referrer-when-downgrade`
  - : Die URL wird als Referrer gesendet, wenn das Protokoll-Sicherheitsniveau gleich bleibt (z. B. HTTP→HTTP, HTTPS→HTTPS), aber nicht zu einem weniger sicheren Ziel gesendet (z. B. HTTPS→HTTP).
- `origin`
  - : Nur der Ursprung des Dokuments wird in allen Fällen als Referrer gesendet. Das Dokument `https://example.com/page.html` sendet den Referrer `https://example.com/`.
- `origin-when-cross-origin`
  - : Eine vollständige URL wird bei einer gleichherkunftlichen Anfrage gesendet, aber nur der Ursprung des Dokuments für andere Fälle.
- `same-origin`
  - : Ein Referrer wird für [gleichherkunftliche Ursprünge](/de/docs/Web/Security/Same-origin_policy) gesendet, aber bei Cross-Origin-Anfragen werden keine Referrer-Informationen enthalten sein.
- `strict-origin`
  - : Nur der Ursprung des Dokuments wird als Referrer gesendet, wenn das Protokoll-Sicherheitsniveau gleich bleibt (z. B. HTTPS→HTTPS), aber nicht zu einem weniger sicheren Ziel gesendet (z. B. HTTPS→HTTP).
- `strict-origin-when-cross-origin` (Standard)
  - : Dies ist das Standardverhalten des Benutzers, wenn keine Richtlinie angegeben ist. Eine vollständige URL wird bei einer gleichherkunftlichen Anfrage gesendet, nur der Ursprung wird gesendet, wenn das Protokoll-Sicherheitsniveau gleich bleibt (z. B. HTTPS→HTTPS), und kein Header wird zu einem weniger sicheren Ziel gesendet (z. B. HTTPS→HTTP).
- `unsafe-url`
  - : Eine vollständige URL wird sowohl bei gleichherkunftlichen als auch bei Cross-Origin-Anfragen gesendet. Diese Richtlinie kann Ursprünge und Pfade von TLS-geschützten Ressourcen an unsichere Ursprünge weitergeben. Überlegen Sie sorgfältig die Auswirkungen dieser Einstellung.

> [!NOTE]
> Ein leerer String-Wert (`""`) ist sowohl der Standardwert als auch ein Fallback-Wert, wenn `referrerpolicy` nicht unterstützt wird. Wenn `referrerpolicy` nicht explizit auf dem `<script>`-Element angegeben ist, wird eine höherstufige Referrer-Richtlinie übernommen, d.h. eine auf dem gesamten Dokument oder der Domain gesetzte Richtlinie. Wenn keine höherstufige Richtlinie verfügbar ist, wird der leere String als äquivalent zu `no-referrer-when-downgrade` behandelt.

## Beispiele

```js
const scriptElem = document.createElement("script");
scriptElem.src = "/";
scriptElem.referrerPolicy = "unsafe-url";
document.body.appendChild(scriptElem);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLIFrameElement.referrerPolicy`](/de/docs/Web/API/HTMLIFrameElement/referrerPolicy)
