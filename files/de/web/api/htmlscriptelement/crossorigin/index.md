---
title: "HTMLScriptElement: crossOrigin-Eigenschaft"
short-title: crossOrigin
slug: Web/API/HTMLScriptElement/crossOrigin
l10n:
  sourceCommit: 0a9c10fc67901972221dc7b3d006334fbfa73dce
---

{{APIRef("HTML DOM")}}

Die **`crossOrigin`**-Eigenschaft des [`HTMLScriptElement`](/de/docs/Web/API/HTMLScriptElement)-Interfaces spiegelt die [Cross-Origin Resource Sharing](/de/docs/Glossary/CORS)-Einstellungen für das Skriptelement wider. Für klassische Skripte von anderen [Ursprüngen](/de/docs/Glossary/Origin) steuert es, ob vollständige Fehlerinformationen offengelegt werden. Für Modulscripte steuert es das Skript selbst und alle Skripte, die es importiert. Details finden Sie unter [CORS-Einstellung-Attribute](/de/docs/Web/HTML/Attributes/crossorigin).

## Wert

Ein String eines Schlüsselworts, das den zu verwendenden CORS-Modus beim Abrufen der Ressource angibt. Mögliche Werte sind:

- `anonymous` oder ein leerer String (`""`)
  - : Anfragen, die vom [`HTMLScriptElement`](/de/docs/Web/API/HTMLScriptElement) gesendet werden, verwenden den `cors`- [Modus](/de/docs/Web/API/Request/mode) und den `same-origin`- [Anmeldeinformationen](/de/docs/Web/API/Request/credentials) Modus. Dies bedeutet, dass CORS aktiviert ist und Anmeldeinformationen gesendet werden _wenn_ die Ressource von dem gleichen Ursprung abgerufen wurde, von dem das Dokument geladen wurde.
- `use-credentials`
  - : Anfragen, die vom [`HTMLScriptElement`](/de/docs/Web/API/HTMLScriptElement) gesendet werden, verwenden den `cors`- [Modus](/de/docs/Web/API/Request/mode) und den `include`- [Anmeldeinformationen](/de/docs/Web/API/Request/credentials) Modus. Alle Ressourcenanforderungen des Elements verwenden CORS, unabhängig von der Domain, von der der Abruf erfolgt.

Wenn die `crossOrigin`-Eigenschaft mit einem anderen Wert spezifiziert wird, ist es dasselbe, als würde sie als `anonymous` spezifiziert.

Wenn die `crossOrigin`-Eigenschaft nicht spezifiziert wird, wird die Ressource ohne CORS abgerufen (der `no-cors`- [Modus](/de/docs/Web/API/Request/mode) und der `same-origin`- [Anmeldeinformationen](/de/docs/Web/API/Request/credentials) Modus).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLImageElement.crossOrigin`](/de/docs/Web/API/HTMLImageElement/crossOrigin)
- [`HTMLLinkElement.crossOrigin`](/de/docs/Web/API/HTMLLinkElement/crossOrigin)
- [`HTMLMediaElement.crossOrigin`](/de/docs/Web/API/HTMLMediaElement/crossOrigin)
