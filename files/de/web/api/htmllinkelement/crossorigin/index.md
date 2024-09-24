---
title: "HTMLLinkElement: crossOrigin-Eigenschaft"
short-title: crossOrigin
slug: Web/API/HTMLLinkElement/crossOrigin
l10n:
  sourceCommit: cc756217fbcb8214730fe736973ec15f3592a246
---

{{APIRef("HTML DOM")}}

Die **`crossOrigin`**-Eigenschaft des {{domxref("HTMLLinkElement")}}-Interfaces legt die Einstellung für Cross-Origin Resource Sharing ({{Glossary("CORS")}}) fest, die beim Abrufen der Ressource verwendet werden soll.

## Wert

Ein Zeichenfolgen-Keyword, das den CORS-Modus angibt, der beim Abrufen der Ressource verwendet werden soll. Mögliche Werte sind:

- `anonymous` oder die leere Zeichenfolge (`""`)
  - : Anfragen, die vom {{domxref("HTMLLinkElement")}} gesendet werden, nutzen den `cors` {{domxref("Request.mode", "mode", "", "nocode")}} und den `same-origin` {{domxref("Request.credentials", "credentials", "", "nocode")}} Modus. Das bedeutet, dass CORS aktiviert ist und Anmeldeinformationen _nur_ gesendet werden, wenn die Ressource von derselben Herkunft abgerufen wird, von der das Dokument geladen wurde.
- `use-credentials`
  - : Anfragen, die vom {{domxref("HTMLLinkElement")}} gesendet werden, nutzen den `cors` {{domxref("Request.mode", "mode", "", "nocode")}} und den `include` {{domxref("Request.credentials", "credentials", "", "nocode")}} Modus. Alle Ressourcenzugriffe, die von dem Element angefordert werden, verwenden CORS, unabhängig von der Domain, von der sie abgerufen werden.

Wenn die `crossOrigin`-Eigenschaft mit einem anderen Wert angegeben wird, ist dies dasselbe wie die Angabe von `anonymous`.

Wenn die `crossOrigin`-Eigenschaft nicht angegeben wird, wird die Ressource ohne CORS abgerufen (der `no-cors` {{domxref("Request.mode", "mode", "", "nocode")}} und der `same-origin` {{domxref("Request.credentials", "credentials", "", "nocode")}} Modus).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("HTMLImageElement.crossOrigin")}}
- {{domxref("HTMLMediaElement.crossOrigin")}}
- {{domxref("HTMLScriptElement.crossOrigin")}}
