---
title: "HTMLLinkElement: crossOrigin-Eigenschaft"
short-title: crossOrigin
slug: Web/API/HTMLLinkElement/crossOrigin
l10n:
  sourceCommit: 0a9c10fc67901972221dc7b3d006334fbfa73dce
---

{{APIRef("HTML DOM")}}

Die **`crossOrigin`**-Eigenschaft der [`HTMLLinkElement`](/de/docs/Web/API/HTMLLinkElement)-Schnittstelle spezifiziert die Cross-Origin Resource Sharing ([CORS](/de/docs/Glossary/CORS))-Einstellung, die beim Abrufen der Ressource verwendet werden soll.

## Wert

Ein String eines Schlüsselworts, das den zu verwendenden CORS-Modus beim Abrufen der Ressource spezifiziert. Mögliche Werte sind:

- `anonymous` oder der leere String (`""`)
  - : Anfragen, die vom [`HTMLLinkElement`](/de/docs/Web/API/HTMLLinkElement) gesendet werden, verwenden den `cors`-[Modus](/de/docs/Web/API/Request/mode) und den `same-origin`-[credentials](/de/docs/Web/API/Request/credentials)-Modus. Das bedeutet, dass CORS aktiviert ist und Berechtigungsnachweise gesendet werden, _wenn_ die Ressource von demselben Ursprung abgerufen wird, von dem das Dokument geladen wurde.
- `use-credentials`
  - : Anfragen, die vom [`HTMLLinkElement`](/de/docs/Web/API/HTMLLinkElement) gesendet werden, verwenden den `cors`-[Modus](/de/docs/Web/API/Request/mode) und den `include`-[credentials](/de/docs/Web/API/Request/credentials)-Modus. Alle Ressourcenanfragen des Elements verwenden CORS, unabhängig davon, von welcher Domain der Abruf erfolgt.

Wenn die `crossOrigin`-Eigenschaft mit einem anderen Wert angegeben wird, ist dies dasselbe wie die Angabe von `anonymous`.

Wenn die `crossOrigin`-Eigenschaft nicht angegeben wird, wird die Ressource ohne CORS abgerufen (der `no-cors`-[Modus](/de/docs/Web/API/Request/mode) und der `same-origin`-[credentials](/de/docs/Web/API/Request/credentials)-Modus).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLImageElement.crossOrigin`](/de/docs/Web/API/HTMLImageElement/crossOrigin)
- [`HTMLMediaElement.crossOrigin`](/de/docs/Web/API/HTMLMediaElement/crossOrigin)
- [`HTMLScriptElement.crossOrigin`](/de/docs/Web/API/HTMLScriptElement/crossOrigin)
