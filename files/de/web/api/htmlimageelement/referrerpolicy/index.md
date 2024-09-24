---
title: "HTMLImageElement: referrerPolicy-Eigenschaft"
short-title: referrerPolicy
slug: Web/API/HTMLImageElement/referrerPolicy
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{APIRef("HTML DOM")}}

Die **`HTMLImageElement.referrerPolicy`**-Eigenschaft spiegelt das HTML-[`referrerpolicy`](/de/docs/Web/HTML/Element/img#referrerpolicy)-Attribut des {{HTMLElement("img")}}-Elements wider, das definiert, welcher Referrer beim Abrufen der Ressource gesendet wird.

## Wert

Ein String; einer der folgenden:

- `no-referrer`
  - : Der {{HTTPHeader("Referer")}}-Header wird vollständig weggelassen. Es werden keine Referrer-Informationen mit Anfragen gesendet.
- `no-referrer-when-downgrade`
  - : Die URL wird als Referrer gesendet, wenn das Sicherheitsniveau des Protokolls gleich bleibt (z. B. HTTP→HTTP, HTTPS→HTTPS), aber nicht an ein weniger sicheres Ziel (z. B. HTTPS→HTTP).
- `origin`
  - : Senden Sie in allen Fällen nur die Herkunft des Dokuments als Referrer. Das Dokument `https://example.com/page.html` sendet den Referrer `https://example.com/`.
- `origin-when-cross-origin`
  - : Senden Sie eine vollständige URL bei der Durchführung einer Anfrage gleichen Ursprungs, aber nur die Herkunft des Dokuments in anderen Fällen.
- `same-origin`
  - : Ein Referrer wird für [gleiche Ursprünge](/de/docs/Web/Security/Same-origin_policy) gesendet, aber Anfragen über Ursprungsgrenzen hinweg enthalten keine Referrer-Informationen.
- `strict-origin`
  - : Nur die Herkunft des Dokuments als Referrer senden, wenn das Sicherheitsniveau des Protokolls gleich bleibt (z. B. HTTPS→HTTPS), aber nicht an ein weniger sicheres Ziel (z. B. HTTPS→HTTP).
- `strict-origin-when-cross-origin` (default)
  - : Dies ist das Standardverhalten des Benutzeragenten, wenn keine Richtlinie angegeben ist. Senden Sie eine vollständige URL bei der Durchführung einer Anfrage gleichen Ursprungs, senden Sie nur die Herkunft, wenn das Sicherheitsniveau des Protokolls gleich bleibt (z. B. HTTPS→HTTPS), und senden Sie keinen Header an ein weniger sicheres Ziel (z. B. HTTPS→HTTP).
- `unsafe-url`
  - : Senden Sie eine vollständige URL bei der Durchführung sowohl von Anfragen gleichen Ursprungs als auch von Anfragen über Ursprungsgrenzen hinweg. Diese Richtlinie wird Ursprünge und Pfade von TLS-geschützten Ressourcen an unsichere Ursprünge weitergeben. Überlegen Sie sorgfältig die Auswirkungen dieser Einstellung.

## Beispiele

```js
const img = new Image();
img.src = "img/logo.png";
img.referrerPolicy = "origin";

const div = document.getElementById("divAround");
div.appendChild(img); // Fetch the image using the origin as the referrer
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("HTMLAnchorElement.referrerPolicy")}},
  {{domxref("HTMLAreaElement.referrerPolicy")}} und
  {{domxref("HTMLIFrameElement.referrerPolicy")}}.
