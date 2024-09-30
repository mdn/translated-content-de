---
title: TrustedTypePolicy
slug: Web/API/TrustedTypePolicy
l10n:
  sourceCommit: c7d5004cd6c5d5b1318f626425fcb06cb2c6a509
---

{{APIRef("Trusted Types API")}}{{AvailableInWorkers}}

Das **`TrustedTypePolicy`**-Interface der [Trusted Types API](/de/docs/Web/API/Trusted_Types_API) definiert eine Gruppe von Funktionen, die `TrustedType`-Objekte erstellen.

Ein `TrustedTypePolicy`-Objekt wird durch [`TrustedTypePolicyFactory.createPolicy()`](/de/docs/Web/API/TrustedTypePolicyFactory/createPolicy) erstellt, um eine Richtlinie zur Durchsetzung von Sicherheitsregeln für Eingaben zu definieren. Daher hat `TrustedTypePolicy` keinen Konstruktor.

## Instanzeigenschaften

- [`TrustedTypePolicy.name`](/de/docs/Web/API/TrustedTypePolicy/name) {{ReadOnlyInline}}
  - : Ein String, der den Namen der Richtlinie enthält.

## Instanzmethoden

- [`TrustedTypePolicy.createHTML()`](/de/docs/Web/API/TrustedTypePolicy/createHTML)
  - : Erstellt ein [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Objekt.
- [`TrustedTypePolicy.createScript()`](/de/docs/Web/API/TrustedTypePolicy/createScript)
  - : Erstellt ein [`TrustedScript`](/de/docs/Web/API/TrustedScript)-Objekt.
- [`TrustedTypePolicy.createScriptURL()`](/de/docs/Web/API/TrustedTypePolicy/createScriptURL)
  - : Erstellt ein [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL)-Objekt.

## Beispiele

Im folgenden Beispiel erstellen wir eine Richtlinie, die [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Objekte mithilfe von [`TrustedTypePolicyFactory.createPolicy()`](/de/docs/Web/API/TrustedTypePolicyFactory/createPolicy) erstellt. Wir können dann [`TrustedTypePolicy.createHTML`](/de/docs/Web/API/TrustedTypePolicy/createHTML) verwenden, um einen bereinigten HTML-String zu erstellen, der in das Dokument eingefügt werden kann.

Der bereinigte Wert kann dann mit [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) verwendet werden, um sicherzustellen, dass keine neuen HTML-Elemente eingeschleust werden können.

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
