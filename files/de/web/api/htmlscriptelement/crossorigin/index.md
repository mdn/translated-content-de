---
title: "HTMLScriptElement: crossOrigin-Eigenschaft"
short-title: crossOrigin
slug: Web/API/HTMLScriptElement/crossOrigin
l10n:
  sourceCommit: 0a9c10fc67901972221dc7b3d006334fbfa73dce
---

{{APIRef("HTML DOM")}}

Die **`crossOrigin`**-Eigenschaft der [`HTMLScriptElement`](/de/docs/Web/API/HTMLScriptElement)-Schnittstelle spiegelt die [Cross-Origin Resource Sharing](/de/docs/Glossary/CORS)-Einstellungen für das Skript-Element wider. Für klassische Skripte von anderen [Ursprüngen](/de/docs/Glossary/Origin) steuert dies, ob vollständige Fehlermeldungen offen gelegt werden. Bei Modulscripten steuert es das Script selbst und jedes Script, das es importiert. Siehe [Attribute von CORS-Einstellungen](/de/docs/Web/HTML/Attributes/crossorigin) für Details.

## Wert

Ein String eines Schlüsselworts, das den CORS-Modus angibt, der beim Abrufen der Ressource verwendet werden soll. Mögliche Werte sind:

- `anonymous` oder ein leerer String (`""`)
  - : Anfragen, die von dem [`HTMLScriptElement`](/de/docs/Web/API/HTMLScriptElement) gesendet werden, verwenden den `cors` [Modus](/de/docs/Web/API/Request/mode) und den `same-origin` [Credentials](/de/docs/Web/API/Request/credentials) Modus. Das bedeutet, dass CORS aktiviert ist und Anmeldeinformationen gesendet werden, _wenn_ die Ressource von demselben Ursprung abgerufen wird, von dem das Dokument geladen wurde.
- `use-credentials`
  - : Anfragen, die von dem [`HTMLScriptElement`](/de/docs/Web/API/HTMLScriptElement) gesendet werden, verwenden den `cors` [Modus](/de/docs/Web/API/Request/mode) und den `include` [Credentials](/de/docs/Web/API/Request/credentials) Modus. Alle Ressourcenanfragen des Elements verwenden CORS, unabhängig davon, von welcher Domain der Abruf erfolgt.

Wenn die `crossOrigin`-Eigenschaft mit einem anderen Wert angegeben wird, ist dies gleichbedeutend mit der Angabe als `anonymous`.

Wenn die `crossOrigin`-Eigenschaft nicht angegeben ist, wird die Ressource ohne CORS abgerufen (der `no-cors` [Modus](/de/docs/Web/API/Request/mode) und der `same-origin` [Credentials](/de/docs/Web/API/Request/credentials) Modus).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLImageElement.crossOrigin`](/de/docs/Web/API/HTMLImageElement/crossOrigin)
- [`HTMLLinkElement.crossOrigin`](/de/docs/Web/API/HTMLLinkElement/crossOrigin)
- [`HTMLMediaElement.crossOrigin`](/de/docs/Web/API/HTMLMediaElement/crossOrigin)
