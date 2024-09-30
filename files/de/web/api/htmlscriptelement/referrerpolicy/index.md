---
title: "HTMLScriptElement: referrerPolicy-Eigenschaft"
short-title: referrerPolicy
slug: Web/API/HTMLScriptElement/referrerPolicy
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{APIRef("HTML DOM")}}

Die **`referrerPolicy`**-Eigenschaft des Interfaces [`HTMLScriptElement`](/de/docs/Web/API/HTMLScriptElement) spiegelt die HTML-`referrerpolicy` der {{HTMLElement("script")}}-Element wider, welche definiert, wie der Referer gesetzt wird, wenn das Skript und alle von ihm importierten Skripte abgerufen werden.

## Wert

Ein String; einer der folgenden:

- `no-referrer`
  - : Der {{HTTPHeader("Referer")}}-Header wird vollständig ausgelassen. Keine Referer-Informationen werden mit Anfragen gesendet.
- `no-referrer-when-downgrade`
  - : Die URL wird als Referer gesendet, wenn das Sicherheitsniveau des Protokolls gleich bleibt (z.B. HTTP→HTTP, HTTPS→HTTPS), jedoch nicht an ein weniger sicheres Ziel (z.B. HTTPS→HTTP) gesendet.
- `origin`
  - : Sendet in allen Fällen nur die Herkunft des Dokuments als Referer. Das Dokument `https://example.com/page.html` sendet den Referer `https://example.com/`.
- `origin-when-cross-origin`
  - : Sendet eine vollständige URL bei einer Anfrage aus demselben Ursprung, sendet jedoch nur die Herkunft des Dokuments in anderen Fällen.
- `same-origin`
  - : Ein Referer wird für [gleichseitige Ursprünge](/de/docs/Web/Security/Same-origin_policy) gesendet, aber Anfragen über Ursprungsgrenzen hinweg enthalten keine Referer-Informationen.
- `strict-origin`
  - : Sendet nur die Herkunft des Dokuments als Referer, wenn das Sicherheitsniveau des Protokolls gleich bleibt (z.B. HTTPS→HTTPS), sendet es jedoch nicht an ein weniger sicheres Ziel (z.B. HTTPS→HTTP).
- `strict-origin-when-cross-origin` (Standard)
  - : Dies ist das Standardverhalten des Benutzeragenten, wenn keine Richtlinie angegeben ist. Sendet eine vollständige URL bei einer Anfrage aus demselben Ursprung, sendet nur die Herkunft, wenn das Sicherheitsniveau des Protokolls gleich bleibt (z.B. HTTPS→HTTPS) und sendet keinen Header an ein weniger sicheres Ziel (z.B. HTTPS→HTTP).
- `unsafe-url`
  - : Sendet eine vollständige URL bei einer Anfrage aus demselben Ursprung oder über Ursprungsgrenzen hinweg. Diese Richtlinie gibt Ursprünge und Pfade von TLS-geschützten Ressourcen an unsichere Ursprünge preis. Überlegen Sie sorgfältig die Auswirkungen dieser Einstellung.

> [!NOTE]
> Ein leerer String-Wert (`""`) ist sowohl der Standardwert als auch ein Fallback-Wert, wenn `referrerpolicy` nicht unterstützt wird. Wenn `referrerpolicy` nicht explizit auf dem `<script>`-Element angegeben wird, wird eine höherstufige Referer-Richtlinie übernommen, d.h. eine, die auf das gesamte Dokument oder die Domain gesetzt ist. Wenn keine höherstufige Richtlinie verfügbar ist, wird der leere String als äquivalent zu `no-referrer-when-downgrade` behandelt.

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
