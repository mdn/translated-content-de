---
title: "HTMLScriptElement: referrerPolicy Eigenschaft"
short-title: referrerPolicy
slug: Web/API/HTMLScriptElement/referrerPolicy
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{APIRef("HTML DOM")}}

Die **`referrerPolicy`**-Eigenschaft der [`HTMLScriptElement`](/de/docs/Web/API/HTMLScriptElement)-Schnittstelle spiegelt das HTML-[`referrerpolicy`](/de/docs/Web/HTML/Element/script#referrerpolicy) des {{HTMLElement("script")}}-Elements wider, das definiert, wie der Referrer gesetzt wird, wenn das Skript und alle Skripte, die es importiert, abgerufen werden.

## Wert

Ein String; einer der folgenden:

- `no-referrer`
  - : Der {{HTTPHeader("Referer")}}-Header wird vollständig weggelassen. Es werden keine Referrer-Informationen zusammen mit Anfragen gesendet.
- `no-referrer-when-downgrade`
  - : Die URL wird als Referrer gesendet, wenn das Sicherheitsniveau des Protokolls gleich bleibt (z. B. HTTP→HTTP, HTTPS→HTTPS), aber nicht zu einem weniger sicheren Ziel (z. B. HTTPS→HTTP) gesendet.
- `origin`
  - : Nur der Ursprung des Dokuments wird in allen Fällen als Referrer gesendet. Das Dokument `https://example.com/page.html` sendet den Referrer `https://example.com/`.
- `origin-when-cross-origin`
  - : Eine vollständige URL wird bei einer gleichherkunftlichen Anfrage gesendet, jedoch nur der Ursprung des Dokuments für andere Fälle.
- `same-origin`
  - : Ein Referrer wird für [gleichseitige Ursprünge](/de/docs/Web/Security/Same-origin_policy) gesendet, aber bei fremden Anfragen werden keine Referrer-Informationen enthalten sein.
- `strict-origin`
  - : Nur der Ursprung des Dokuments wird als Referrer gesendet, wenn das Sicherheitsniveau des Protokolls gleich bleibt (z. B. HTTPS→HTTPS), aber nicht zu einem weniger sicheren Ziel (z. B. HTTPS→HTTP).
- `strict-origin-when-cross-origin` (Standard)
  - : Dies ist das Standardverhalten des Benutzeragenten, wenn keine Richtlinie angegeben ist. Eine vollständige URL wird bei einer gleichherkunftlichen Anfrage gesendet, nur der Ursprung wird gesendet, wenn das Sicherheitsniveau des Protokolls gleich bleibt (z. B. HTTPS→HTTPS), und es wird kein Header zu einem weniger sicheren Ziel (z. B. HTTPS→HTTP) gesendet.
- `unsafe-url`
  - : Eine vollständige URL wird sowohl bei einer gleichherkunftlichen als auch bei einer fremden Anfrage gesendet. Diese Richtlinie wird Ursprünge und Pfade von TLS-geschützten Ressourcen zu unsicheren Ursprüngen durchlassen. Überlegen Sie sich sorgfältig die Auswirkungen dieser Einstellung.

> [!NOTE]
> Ein leerer String-Wert (`""`) ist sowohl der Standardwert als auch ein Fallback-Wert, wenn `referrerpolicy` nicht unterstützt wird. Wenn `referrerpolicy` nicht explizit auf dem `<script>`-Element angegeben ist, wird es eine höherstufige Referrer-Richtlinie übernehmen, d. h. eine, die auf das gesamte Dokument oder die Domain festgelegt ist. Wenn eine höherstufige Richtlinie nicht verfügbar ist, wird der leere String als äquivalent zu `no-referrer-when-downgrade` behandelt.

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
