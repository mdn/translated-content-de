---
title: TrustedHTML
slug: Web/API/TrustedHTML
l10n:
  sourceCommit: 6bb81a788ff71f726e32d16757c99d5c45a7edf9
---

{{APIRef("Trusted Types API")}}{{AvailableInWorkers}}

Das **`TrustedHTML`**-Interface der [Trusted Types API](/de/docs/Web/API/Trusted_Types_API) repräsentiert einen String, den Entwickler in eine [Injection Sink](/de/docs/Web/API/Trusted_Types_API#concepts_and_usage) einfügen können, die ihn als HTML rendert. Diese Objekte werden mit [`TrustedTypePolicy.createHTML()`](/de/docs/Web/API/TrustedTypePolicy/createHTML) erstellt und haben daher keinen Konstruktor.

Der Wert eines `TrustedHTML`-Objekts wird bei seiner Erstellung festgelegt und kann durch JavaScript nicht geändert werden, da kein Setter verfügbar ist.

## Instanzmethoden

- [`TrustedHTML.toJSON()`](/de/docs/Web/API/TrustedHTML/toJSON)
  - : Gibt einen String zurück, der das `TrustedHTML`-Objekt repräsentiert und denselben Wert wie [`TrustedHTML.toString()`](/de/docs/Web/API/TrustedHTML/toString) hat. Wird von {{jsxref("JSON.stringify()")}} automatisch aufgerufen.
- [`TrustedHTML.toString()`](/de/docs/Web/API/TrustedHTML/toString)
  - : Ein String, der das bereinigte HTML enthält.

## Beispiele

Im folgenden Beispiel erstellen wir mit [`TrustedTypePolicyFactory.createPolicy()`](/de/docs/Web/API/TrustedTypePolicyFactory/createPolicy) eine Policy, die `TrustedHTML`-Objekte erzeugt. Anschließend können wir mit [`TrustedTypePolicy.createHTML()`](/de/docs/Web/API/TrustedTypePolicy/createHTML) einen bereinigten HTML-String erstellen, der in das Dokument eingefügt werden kann.

Der bereinigte Wert kann dann mit [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) verwendet werden, um sicherzustellen, dass keine unerwünschten HTML-Elemente eingeschleust werden können.

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

- [DOM-basierte Cross-Site-Scripting-Schwachstellen mit Trusted Types verhindern](https://web.dev/articles/trusted-types)
