---
title: "HTMLMediaElement: crossOrigin-Eigenschaft"
short-title: crossOrigin
slug: Web/API/HTMLMediaElement/crossOrigin
l10n:
  sourceCommit: cc756217fbcb8214730fe736973ec15f3592a246
---

{{APIRef("HTML DOM")}}

Die **`HTMLMediaElement.crossOrigin`**-Eigenschaft ist die CORS-Einstellung für dieses Medienelement. Siehe [CORS-Einstellungen Attribute](/de/docs/Web/HTML/Attributes/crossorigin) für Details.

## Wert

Ein String eines Schlüsselworts, das den CORS-Modus angibt, der beim Abrufen der Ressource verwendet werden soll. Mögliche Werte sind:

- `anonymous` oder der leere String (`""`)
  - : Anfragen, die durch das {{domxref("HTMLMediaElement")}} gesendet werden, verwenden den `cors` {{domxref("Request.mode", "mode", "", "nocode")}} und den `same-origin` {{domxref("Request.credentials", "credentials", "", "nocode")}} Modus. Das bedeutet, dass CORS aktiviert ist und Anmeldedaten gesendet werden, _wenn_ die Ressource von derselben Herkunft abgerufen wird, von der das Dokument geladen wurde.
- `use-credentials`
  - : Anfragen, die durch das {{domxref("HTMLMediaElement")}} gesendet werden, verwenden den `cors` {{domxref("Request.mode", "mode", "", "nocode")}} und den `include` {{domxref("Request.credentials", "credentials", "", "nocode")}} Modus. Alle durch das Element angeforderten Ressourcen verwenden CORS, unabhängig davon, von welcher Domain die Anforderung stammt.

Wenn die `crossOrigin`-Eigenschaft mit einem anderen Wert angegeben wird, ist dies dasselbe, wie wenn `anonymous` angegeben wird.

Wenn die `crossOrigin`-Eigenschaft nicht angegeben wird, wird die Ressource ohne CORS abgerufen (der `no-cors` {{domxref("Request.mode", "mode", "", "nocode")}} und der `same-origin` {{domxref("Request.credentials", "credentials", "", "nocode")}} Modus).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("HTMLImageElement.crossOrigin")}}
- {{domxref("HTMLLinkElement.crossOrigin")}}
- {{domxref("HTMLScriptElement.crossOrigin")}}
