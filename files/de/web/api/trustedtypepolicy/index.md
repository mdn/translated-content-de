---
title: TrustedTypePolicy
slug: Web/API/TrustedTypePolicy
l10n:
  sourceCommit: c7d5004cd6c5d5b1318f626425fcb06cb2c6a509
---

{{APIRef("Trusted Types API")}}{{AvailableInWorkers}}

Die **`TrustedTypePolicy`**-Schnittstelle der {{domxref("Trusted Types API", "", "", "nocode")}} definiert eine Gruppe von Funktionen, die `TrustedType`-Objekte erstellen.

Ein `TrustedTypePolicy`-Objekt wird durch {{domxref("TrustedTypePolicyFactory.createPolicy","TrustedTypePolicyFactory.createPolicy()")}} erstellt, um eine Richtlinie zur Durchsetzung von Sicherheitsregeln für Eingaben zu definieren. Daher hat `TrustedTypePolicy` keinen Konstruktor.

## Instanzeigenschaften

- {{domxref("TrustedTypePolicy.name")}} {{ReadOnlyInline}}
  - : Ein String, der den Namen der Richtlinie enthält.

## Instanzmethoden

- {{domxref("TrustedTypePolicy.createHTML","TrustedTypePolicy.createHTML()")}}
  - : Erstellt ein {{domxref("TrustedHTML")}}-Objekt.
- {{domxref("TrustedTypePolicy.createScript","TrustedTypePolicy.createScript()")}}
  - : Erstellt ein {{domxref("TrustedScript")}}-Objekt.
- {{domxref("TrustedTypePolicy.createScriptURL","TrustedTypePolicy.createScriptURL()")}}
  - : Erstellt ein {{domxref("TrustedScriptURL")}}-Objekt.

## Beispiele

Im folgenden Beispiel erstellen wir eine Richtlinie, die {{domxref("TrustedHTML")}}-Objekte mithilfe von {{domxref("TrustedTypePolicyFactory.createPolicy()")}} erstellt. Wir können dann {{domxref("TrustedTypePolicy.createHTML")}} verwenden, um einen bereinigten HTML-String zu erstellen, der in das Dokument eingefügt werden soll.

Der bereinigte Wert kann dann mit {{domxref("Element.innerHTML")}} verwendet werden, um sicherzustellen, dass keine neuen HTML-Elemente eingefügt werden können.

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
