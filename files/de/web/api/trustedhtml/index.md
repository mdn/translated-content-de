---
title: TrustedHTML
slug: Web/API/TrustedHTML
l10n:
  sourceCommit: 736da094f1fe86aefb458e5505ad216789b0ba12
---

{{APIRef("Trusted Types API")}}{{AvailableInWorkers}}

Das **`TrustedHTML`**-Interface der [Trusted Types API](/de/docs/Web/API/Trusted_Types_API) repräsentiert einen String, den ein Entwickler in einen [Injektionspunkt](/de/docs/Web/API/Trusted_Types_API#injection_sinks) einfügen kann, um ihn als HTML darzustellen. Diese Objekte werden über [`TrustedTypePolicy.createHTML()`](/de/docs/Web/API/TrustedTypePolicy/createHTML) erstellt und haben daher keinen Konstruktor.

Wert eines `TrustedHTML`-Objekts wird beim Erstellen des Objekts festgelegt und kann von JavaScript nicht geändert werden, da kein Setter bereitgestellt wird.

## Instanzmethoden

- [`TrustedHTML.toJSON()`](/de/docs/Web/API/TrustedHTML/toJSON)
  - : Gibt eine JSON-Darstellung der gespeicherten Daten zurück.
- [`TrustedHTML.toString()`](/de/docs/Web/API/TrustedHTML/toString)
  - : Ein String, der das bereinigte HTML enthält.

## Beispiele

Im folgenden Beispiel erstellen wir eine Richtlinie, die `TrustedHTML`-Objekte mit [`TrustedTypePolicyFactory.createPolicy()`](/de/docs/Web/API/TrustedTypePolicyFactory/createPolicy) erstellt. Wir können dann [`TrustedTypePolicy.createHTML()`](/de/docs/Web/API/TrustedTypePolicy/createHTML) verwenden, um einen bereinigten HTML-String zu erstellen, der in das Dokument eingefügt wird.

Der bereinigte Wert kann dann mit [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) verwendet werden, um sicherzustellen, dass keine neuen HTML-Elemente injiziert werden können.

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

- [Verhindern Sie DOM-basierte Cross-Site Scripting-Schwachstellen mit Trusted Types](https://web.dev/articles/trusted-types)
