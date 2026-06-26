---
title: "SVGScriptElement: crossOrigin-Eigenschaft"
short-title: crossOrigin
slug: Web/API/SVGScriptElement/crossOrigin
l10n:
  sourceCommit: a9e07b75358077e93e2515a13a7413275116ee48
---

{{APIRef("SVG")}}

Die **`crossOrigin`**-Eigenschaft der [`SVGScriptElement`](/de/docs/Web/API/SVGScriptElement)-Schnittstelle spiegelt die {{Glossary("CORS", "Cross-Origin Resource Sharing")}}-Einstellungen für das `<script>`-Element wider. Für klassische Skripte von anderen {{Glossary("Origin", "Ursprüngen")}} steuert dies, ob vollständige Fehlerinformationen offengelegt werden. Für Modulskripte steuert es das Skript selbst und alle Skripte, die es importiert. Siehe [CORS-Einstellungsattribute](/de/docs/Web/HTML/Reference/Attributes/crossorigin) für Details.

## Wert

Ein String, der ein Schlüsselwort enthält, das den CORS-Modus angibt, der beim Abrufen der Ressource verwendet werden soll. Mögliche Werte sind:

- `anonymous` oder ein leerer String (`""`)
  - : Anfragen, die vom [`SVGScriptElement`](/de/docs/Web/API/SVGScriptElement) gesendet werden, verwenden den `cors`-Modus von [`Request.mode`](/de/docs/Web/API/Request/mode) und den `same-origin`-Modus von [`Request.credentials`](/de/docs/Web/API/Request/credentials). Das bedeutet, dass CORS aktiviert ist und Anmeldeinformationen _gesendet_ werden, _wenn_ die Ressource vom gleichen Ursprung abgerufen wird, von dem das Dokument geladen wurde.
- `use-credentials`
  - : Anfragen, die vom [`SVGScriptElement`](/de/docs/Web/API/SVGScriptElement) gesendet werden, verwenden den `cors`-Modus von [`Request.mode`](/de/docs/Web/API/Request/mode) und den `include`-Modus von [`Request.credentials`](/de/docs/Web/API/Request/credentials). Alle von dem Element angeforderten Ressourcen verwenden CORS, unabhängig davon, von welcher Domain der Abruf erfolgt.

Wenn die `crossOrigin`-Eigenschaft mit einem anderen Wert angegeben wird, entspricht dies der Angabe als `anonymous`.

Wenn die `crossOrigin`-Eigenschaft nicht angegeben wird, wird die Ressource ohne CORS abgerufen (entspricht der Verwendung des `no-cors`-Modus von [`Request.mode`](/de/docs/Web/API/Request/mode) und des `same-origin`-Modus von [`Request.credentials`](/de/docs/Web/API/Request/credentials)).

## Beispiele

### Zugriff auf die `crossOrigin`-Eigenschaft

```html
<svg xmlns="http://www.w3.org/2000/svg" width="400" height="200">
  <script
    id="myScript"
    href="https://example.com/script.js"
    crossorigin="anonymous"></script>
</svg>
```

```js
const scriptElement = document.getElementById("myScript");
console.log(scriptElement.crossOrigin); // Output: "anonymous"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLScriptElement.crossOrigin`](/de/docs/Web/API/HTMLScriptElement/crossOrigin)
- [`HTMLImageElement.crossOrigin`](/de/docs/Web/API/HTMLImageElement/crossOrigin)
- [`HTMLLinkElement.crossOrigin`](/de/docs/Web/API/HTMLLinkElement/crossOrigin)
- [`HTMLMediaElement.crossOrigin`](/de/docs/Web/API/HTMLMediaElement/crossOrigin)
