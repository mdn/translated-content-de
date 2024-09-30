---
title: TrustedHTML
slug: Web/API/TrustedHTML
l10n:
  sourceCommit: 736da094f1fe86aefb458e5505ad216789b0ba12
---

{{APIRef("Trusted Types API")}}{{AvailableInWorkers}}

Das **`TrustedHTML`**-Interface der [Trusted Types API](/de/docs/Web/API/Trusted_Types_API) repräsentiert einen String, den ein Entwickler in einen [Injection-Sink](/de/docs/Web/API/Trusted_Types_API#injection_sinks) einfügen kann, damit er als HTML dargestellt wird. Diese Objekte werden über [`TrustedTypePolicy.createHTML()`](/de/docs/Web/API/TrustedTypePolicy/createHTML) erstellt und haben daher keinen Konstruktor.

Der Wert eines `TrustedHTML`-Objekts wird beim Erstellen des Objekts festgelegt und kann nicht durch JavaScript geändert werden, da kein Setter verfügbar ist.

## Instanzmethoden

- [`TrustedHTML.toJSON()`](/de/docs/Web/API/TrustedHTML/toJSON)
  - : Liefert eine JSON-Darstellung der gespeicherten Daten.
- [`TrustedHTML.toString()`](/de/docs/Web/API/TrustedHTML/toString)
  - : Ein String, der das bereinigte HTML enthält.

## Beispiele

Im untenstehenden Beispiel erstellen wir eine Policy, die `TrustedHTML`-Objekte mithilfe von [`TrustedTypePolicyFactory.createPolicy()`](/de/docs/Web/API/TrustedTypePolicyFactory/createPolicy) erstellt. Wir können dann [`TrustedTypePolicy.createHTML()`](/de/docs/Web/API/TrustedTypePolicy/createHTML) verwenden, um einen bereinigten HTML-String zu erstellen, der ins Dokument eingefügt werden kann.

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
