---
title: "HTMLScriptElement: referrerPolicy-Eigenschaft"
short-title: referrerPolicy
slug: Web/API/HTMLScriptElement/referrerPolicy
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

{{APIRef("HTML DOM")}}

Die **`referrerPolicy`**-Eigenschaft der [`HTMLScriptElement`](/de/docs/Web/API/HTMLScriptElement)-Schnittstelle spiegelt die HTML-[`referrerpolicy`](/de/docs/Web/HTML/Reference/Elements/script#referrerpolicy) des {{HTMLElement("script")}}-Elements wider, welche definiert, wie der Referrer beim Abrufen des Skripts und der von ihm importierten Skripte festgelegt wird.

## Wert

Ein String; einer der folgenden:

- `no-referrer`
  - : Der {{HTTPHeader("Referer")}}-Header wird vollständig weggelassen. Es wird keine Referrer-Information mit den Anfragen gesendet.
- `no-referrer-when-downgrade`
  - : Die URL wird als Referrer gesendet, wenn das Protokollsicherheitsniveau gleich bleibt (z. B. HTTP→HTTP, HTTPS→HTTPS), aber nicht an ein weniger sicheres Ziel gesendet wird (z. B. HTTPS→HTTP).
- `origin`
  - : Nur der Ursprung des Dokuments wird in allen Fällen als Referrer gesendet. Das Dokument `https://example.com/page.html` wird den Referrer `https://example.com/` senden.
- `origin-when-cross-origin`
  - : Eine vollständige URL wird bei Anfragen mit gleichem Ursprung gesendet, jedoch nur der Ursprung des Dokuments für andere Fälle.
- `same-origin`
  - : Ein Referrer wird für [same-site origins](/de/docs/Web/Security/Defenses/Same-origin_policy) gesendet, aber bei Anfragen mit einem anderen Ursprung werden keine Referrer-Informationen enthalten sein.
- `strict-origin`
  - : Nur der Ursprung des Dokuments wird als Referrer gesendet, wenn das Protokollsicherheitsniveau gleich bleibt (z. B. HTTPS→HTTPS), aber nicht an ein weniger sicheres Ziel gesendet wird (z. B. HTTPS→HTTP).
- `strict-origin-when-cross-origin` (Standard)
  - : Dies ist das Standardverhalten des Benutzeragenten, wenn keine Richtlinie angegeben ist. Eine vollständige URL wird bei Anfragen mit gleichem Ursprung gesendet, nur der Ursprung wird gesendet, wenn das Protokollsicherheitsniveau gleich bleibt (z. B. HTTPS→HTTPS), und es wird kein Header an ein weniger sicheres Ziel gesendet (z. B. HTTPS→HTTP).
- `unsafe-url`
  - : Eine vollständige URL wird bei Anfragen mit gleichem oder anderem Ursprung gesendet. Diese Richtlinie wird Ursprünge und Pfade von TLS-geschützten Ressourcen zu unsicheren Ursprüngen preisgeben. Überlegen Sie sich die Auswirkungen dieser Einstellung sorgfältig.

> [!NOTE]
> Ein leerer String-Wert (`""`) ist sowohl der Standardwert als auch ein Fallback-Wert, wenn `referrerpolicy` nicht unterstützt wird. Wenn `referrerpolicy` nicht explizit am `<script>`-Element angegeben ist, wird eine umfassendere Referrer-Richtlinie übernommen, d.h. eine, die auf das gesamte Dokument oder die Domain festgelegt wurde. Wenn keine umfassendere Richtlinie verfügbar ist, wird der leere String als gleichwertig zu `no-referrer-when-downgrade` angesehen.

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
