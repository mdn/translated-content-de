---
title: "HTMLScriptElement: crossOrigin-Eigenschaft"
short-title: crossOrigin
slug: Web/API/HTMLScriptElement/crossOrigin
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

Die **`crossOrigin`**-Eigenschaft des [`HTMLScriptElement`](/de/docs/Web/API/HTMLScriptElement)-Interfaces spiegelt die {{Glossary("CORS", "Cross-Origin Resource Sharing")}} Einstellungen für das Skriptelement wider. Für klassische Skripte von anderen {{Glossary("Origin", "Ursprüngen")}} steuert diese Eigenschaft, ob vollständige Fehlermeldungen offengelegt werden. Für Modulskripte steuert sie das Skript selbst und alle Skripte, die es importiert. Siehe [CORS-Einstellung-Attribute](/de/docs/Web/HTML/Reference/Attributes/crossorigin) für Details.

## Wert

Ein Zeichenfolgen-Schlüsselwort, das den CORS-Modus angibt, der beim Abrufen der Ressource verwendet werden soll. Mögliche Werte sind:

- `anonymous` oder eine leere Zeichenfolge (`""`)
  - : Von der [`HTMLScriptElement`](/de/docs/Web/API/HTMLScriptElement) gesendete Anfragen verwenden den `cors`-[Modus](/de/docs/Web/API/Request/mode) und den `same-origin`-[Credentials](/de/docs/Web/API/Request/credentials)-Modus. Dies bedeutet, dass CORS aktiviert ist und Berechtigungsnachweise gesendet werden, _wenn_ die Ressource von demselben Ursprung abgerufen wird, von dem das Dokument geladen wurde.
- `use-credentials`
  - : Von der [`HTMLScriptElement`](/de/docs/Web/API/HTMLScriptElement) gesendete Anfragen verwenden den `cors`-[Modus](/de/docs/Web/API/Request/mode) und den `include`-[Credentials](/de/docs/Web/API/Request/credentials)-Modus. Alle Ressourcenanfragen des Elements verwenden CORS, unabhängig davon, von welcher Domain der Abruf erfolgt.

Wenn die `crossOrigin`-Eigenschaft mit einem anderen Wert angegeben wird, ist dies dasselbe, wie sie als `anonymous` anzugeben.

Wenn die `crossOrigin`-Eigenschaft nicht angegeben wird, wird die Ressource ohne CORS abgerufen (der `no-cors`-[Modus](/de/docs/Web/API/Request/mode) und der `same-origin`-[Credentials](/de/docs/Web/API/Request/credentials)-Modus).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLImageElement.crossOrigin`](/de/docs/Web/API/HTMLImageElement/crossOrigin)
- [`HTMLLinkElement.crossOrigin`](/de/docs/Web/API/HTMLLinkElement/crossOrigin)
- [`HTMLMediaElement.crossOrigin`](/de/docs/Web/API/HTMLMediaElement/crossOrigin)
