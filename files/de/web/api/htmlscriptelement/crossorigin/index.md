---
title: "HTMLScriptElement: crossOrigin-Eigenschaft"
short-title: crossOrigin
slug: Web/API/HTMLScriptElement/crossOrigin
l10n:
  sourceCommit: cc756217fbcb8214730fe736973ec15f3592a246
---

{{APIRef("HTML DOM")}}

Die **`crossOrigin`**-Eigenschaft der {{domxref("HTMLScriptElement")}}-Schnittstelle spiegelt die {{Glossary("CORS", "Cross-Origin Resource Sharing")}}-Einstellungen für das Skriptelement wider. Für klassische Skripte von anderen [Ursprüngen](/de/docs/Glossary/Origin) kontrolliert sie, ob vollständige Fehlermeldungen angezeigt werden. Bei Modulscripten steuert sie das Script selbst und jedes Script, das es importiert. Siehe [CORS-Einstellungsattribute](/de/docs/Web/HTML/Attributes/crossorigin) für Details.

## Wert

Ein String eines Schlüsselwortes, der den CORS-Modus angibt, der beim Abrufen der Ressource verwendet werden soll. Mögliche Werte sind:

- `anonymous` oder ein leerer String (`""`)
  - : Anfragen, die vom {{domxref("HTMLScriptElement")}} gesendet werden, verwenden den `cors`-{{domxref("Request.mode", "mode", "", "nocode")}} und den `same-origin`-{{domxref("Request.credentials", "credentials", "", "nocode")}} Modus. Das bedeutet, dass CORS aktiviert ist und Anmeldeinformationen gesendet werden, _wenn_ die Ressource von derselben Quelle abgerufen wird, von der das Dokument geladen wurde.
- `use-credentials`
  - : Anfragen, die vom {{domxref("HTMLScriptElement")}} gesendet werden, verwenden den `cors`-{{domxref("Request.mode", "mode", "", "nocode")}} und den `include`-{{domxref("Request.credentials", "credentials", "", "nocode")}} Modus. Alle Ressourcenanforderungen durch das Element nutzen CORS, unabhängig davon, von welcher Domain der Abruf erfolgt.

Wenn die `crossOrigin`-Eigenschaft mit einem anderen Wert angegeben wird, ist dies dasselbe wie die Angabe als `anonymous`.

Wenn die `crossOrigin`-Eigenschaft nicht angegeben ist, wird die Ressource ohne CORS abgerufen (der `no-cors`-{{domxref("Request.mode", "mode", "", "nocode")}} und der `same-origin`-{{domxref("Request.credentials", "credentials", "", "nocode")}} Modus).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("HTMLImageElement.crossOrigin")}}
- {{domxref("HTMLLinkElement.crossOrigin")}}
- {{domxref("HTMLMediaElement.crossOrigin")}}
