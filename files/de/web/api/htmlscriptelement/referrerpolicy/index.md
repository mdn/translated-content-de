---
title: "HTMLScriptElement: referrerPolicy-Eigenschaft"
short-title: referrerPolicy
slug: Web/API/HTMLScriptElement/referrerPolicy
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{APIRef("HTML DOM")}}

Die **`referrerPolicy`**-Eigenschaft des
{{domxref("HTMLScriptElement")}}-Interfaces spiegelt die HTML
[`referrerpolicy`](/de/docs/Web/HTML/Element/script#referrerpolicy) des {{HTMLElement("script")}}-Elements wider, die definiert, wie der Referrer festgelegt wird, wenn das Script und alle von ihm importierten Scripts abgerufen werden.

## Wert

Ein String; einer der folgenden:

- `no-referrer`
  - : Der {{HTTPHeader("Referer")}}-Header wird vollständig weggelassen. Es wird keine Referrer-Information mit den Anfragen gesendet.
- `no-referrer-when-downgrade`
  - : Die URL wird als Referrer gesendet, wenn das Sicherheitsniveau des Protokolls gleich bleibt (z.B. HTTP→HTTP, HTTPS→HTTPS), aber nicht zu einem weniger sicheren Ziel (z.B. HTTPS→HTTP).
- `origin`
  - : In allen Fällen wird nur der Ursprung des Dokuments als Referrer gesendet. Das Dokument `https://example.com/page.html` sendet den Referrer `https://example.com/`.
- `origin-when-cross-origin`
  - : Eine vollständige URL wird bei Anfragen an denselben Ursprung gesendet, aber nur der Ursprung des Dokuments für andere Fälle.
- `same-origin`
  - : Ein Referrer wird für [same-site Ursprünge](/de/docs/Web/Security/Same-origin_policy) gesendet, aber bei cross-origin Anfragen werden keine Referrer-Informationen gesendet.
- `strict-origin`
  - : Nur der Ursprung des Dokuments wird als Referrer gesendet, wenn das Sicherheitsniveau des Protokolls gleich bleibt (z.B. HTTPS→HTTPS), aber nicht zu einem weniger sicheren Ziel (z.B. HTTPS→HTTP).
- `strict-origin-when-cross-origin` (Standard)
  - : Dies ist das Standardverhalten des Benutzeragenten, wenn keine Richtlinie angegeben ist. Eine vollständige URL wird bei Anfragen an denselben Ursprung gesendet, nur der Ursprung wird gesendet, wenn das Sicherheitsniveau des Protokolls gleich bleibt (z.B. HTTPS→HTTPS), und es wird kein Header zu einem weniger sicheren Ziel gesendet (z.B. HTTPS→HTTP).
- `unsafe-url`
  - : Bei Anfragen an denselben oder einen anderen Ursprung wird eine vollständige URL gesendet. Diese Richtlinie wird Ursprünge und Pfade von TLS-geschützten Ressourcen an unsichere Ursprünge weitergeben. Überlegen Sie sich sorgfältig die Auswirkungen dieser Einstellung.

> [!NOTE]
> Ein leerer String-Wert (`""`) ist sowohl der Standardwert als auch ein Fallback-Wert, wenn `referrerpolicy` nicht unterstützt wird. Wenn `referrerpolicy` nicht explizit auf dem `<script>`-Element angegeben ist, übernimmt es eine höherstufige Referrer-Richtlinie, d.h. eine, die auf das gesamte Dokument oder die Domain gesetzt ist. Wenn keine höherstufige Richtlinie verfügbar ist, wird der leere String als gleichwertig mit `no-referrer-when-downgrade` behandelt.

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

- {{domxref("HTMLIFrameElement.referrerPolicy")}}
