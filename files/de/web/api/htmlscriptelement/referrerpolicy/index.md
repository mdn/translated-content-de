---
title: "HTMLScriptElement: referrerPolicy-Eigenschaft"
short-title: referrerPolicy
slug: Web/API/HTMLScriptElement/referrerPolicy
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

Die **`referrerPolicy`**-Eigenschaft der [`HTMLScriptElement`](/de/docs/Web/API/HTMLScriptElement)-Schnittstelle spiegelt die HTML-[`referrerpolicy`](/de/docs/Web/HTML/Reference/Elements/script#referrerpolicy) des {{HTMLElement("script")}}-Elements wider, die definiert, wie der Referrer gesetzt wird, wenn das Skript und alle von ihm importierten Skripte abgerufen werden.

## Wert

Ein String, einer der folgenden:

- `no-referrer`
  - : Der {{HTTPHeader("Referer")}}-Header wird vollständig weggelassen. Es werden keine Referrer-Informationen mit Anfragen gesendet.
- `no-referrer-when-downgrade`
  - : Die URL wird als Referrer gesendet, wenn das Sicherheitslevel des Protokolls gleich bleibt (z.B. HTTP→HTTP, HTTPS→HTTPS), aber nicht an eine weniger sichere Zieladresse (z.B., HTTPS→HTTP) gesendet.
- `origin`
  - : Nur die Herkunft des Dokuments wird in allen Fällen als Referrer gesendet. Das Dokument `https://example.com/page.html` sendet den Referrer `https://example.com/`.
- `origin-when-cross-origin`
  - : Eine vollständige URL wird gesendet, wenn eine Anfrage von derselben Herkunft stammt, aber nur die Herkunft des Dokuments wird in anderen Fällen gesendet.
- `same-origin`
  - : Ein Referrer wird für [gleichseitige Ursprünge](/de/docs/Web/Security/Defenses/Same-origin_policy) gesendet, aber Cross-Origin-Anfragen enthalten keine Referrer-Informationen.
- `strict-origin`
  - : Nur die Herkunft des Dokuments wird als Referrer gesendet, wenn das Sicherheitslevel des Protokolls gleich bleibt (z.B., HTTPS→HTTPS), aber nicht an eine weniger sichere Zieladresse (z.B., HTTPS→HTTP).
- `strict-origin-when-cross-origin` (Standard)
  - : Dies ist das Standardverhalten des Benutzeragenten, wenn keine Richtlinie angegeben ist. Eine vollständige URL wird gesendet, wenn eine Anfrage von derselben Herkunft stammt; nur die Herkunft wird gesendet, wenn das Sicherheitslevel des Protokolls gleich bleibt (z.B., HTTPS→HTTPS), und es wird kein Header an eine weniger sichere Zieladresse gesendet (z.B., HTTPS→HTTP).
- `unsafe-url`
  - : Eine vollständige URL wird gesendet, wenn eine Anfrage von derselben oder einer anderen Herkunft kommt. Diese Richtlinie wird Ursprünge und Pfade von TLS-geschützten Ressourcen an unsichere Ursprünge leaken. Überlegen Sie sorgfältig die Auswirkungen dieser Einstellung.

> [!NOTE]
> Ein leerer Zeichenfolgenwert (`""`) ist sowohl der Standardwert als auch ein Ersatzwert, wenn `referrerpolicy` nicht unterstützt wird. Wenn `referrerpolicy` nicht explizit auf dem `<script>`-Element angegeben ist, übernimmt es eine höherstufige Referrerpolitik, d.h. eine, die für das gesamte Dokument oder die gesamte Domain festgelegt ist. Wenn keine höherstufige Politik verfügbar ist, wird die leere Zeichenfolge als gleichbedeutend mit `no-referrer-when-downgrade` behandelt.

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
