---
title: TrustedHTML
slug: Web/API/TrustedHTML
l10n:
  sourceCommit: 3ceedbd90089cfb6970c9bf63ff9e6f3801fcbc5
---

{{APIRef("Trusted Types API")}}{{AvailableInWorkers}}

Die **`TrustedHTML`**-Schnittstelle der [Trusted Types-API](/de/docs/Web/API/Trusted_Types_API) repräsentiert einen String, den ein Entwickler in eine [Injection-Senke](/de/docs/Web/API/Trusted_Types_API#concepts_and_usage) einfügen kann, um ihn als HTML darzustellen. Diese Objekte werden über [`TrustedTypePolicy.createHTML()`](/de/docs/Web/API/TrustedTypePolicy/createHTML) erstellt und haben daher keinen Konstruktor.

Der Wert eines `TrustedHTML`-Objekts wird festgelegt, wenn das Objekt erstellt wird, und kann nicht durch JavaScript geändert werden, da kein Setter verfügbar ist.

## Instanzmethoden

- [`TrustedHTML.toJSON()`](/de/docs/Web/API/TrustedHTML/toJSON)
  - : Gibt eine JSON-Darstellung der gespeicherten Daten zurück.
- [`TrustedHTML.toString()`](/de/docs/Web/API/TrustedHTML/toString)
  - : Ein String, der das bereinigte HTML enthält.

## Beispiele

Im folgenden Beispiel erstellen wir eine Richtlinie, die `TrustedHTML`-Objekte mithilfe von [`TrustedTypePolicyFactory.createPolicy()`](/de/docs/Web/API/TrustedTypePolicyFactory/createPolicy) erstellt. Wir können dann [`TrustedTypePolicy.createHTML()`](/de/docs/Web/API/TrustedTypePolicy/createHTML) verwenden, um einen bereinigten HTML-String zu erstellen, der in das Dokument eingefügt werden kann.

Der bereinigte Wert kann dann mit [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) verwendet werden, um sicherzustellen, dass keine neuen HTML-Elemente eingefügt werden können.

```html
<div id="myDiv"></div>
```

```js
const escapeHTMLPolicy = trustedTypes.createPolicy("myEscapePolicy", {
  createHTML: (string) => string.replace(/</g, "&lt;"),
});

let el = document.getElementById("myDiv");
const escaped = escapeHTMLPolicy.createHTML("<img src=x onerror=alert(1)>");
console.log(escaped instanceof TrustedHTML); // true
el.innerHTML = escaped;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verhindern von DOM-basierten Cross-Site-Scripting-Schwachstellen mit Trusted Types](https://web.dev/articles/trusted-types)
