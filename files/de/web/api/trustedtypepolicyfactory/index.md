---
title: TrustedTypePolicyFactory
slug: Web/API/TrustedTypePolicyFactory
l10n:
  sourceCommit: c7d5004cd6c5d5b1318f626425fcb06cb2c6a509
---

{{APIRef("Trusted Types API")}}{{AvailableInWorkers}}

Das **`TrustedTypePolicyFactory`**-Interface der {{domxref("Trusted Types API", "", "", "nocode")}} erstellt Richtlinien und ermöglicht die Überprüfung von Trusted Type Objekten gegen erstellte Richtlinien.

## Instanz-Eigenschaften

- {{domxref("TrustedTypePolicyFactory.emptyHTML")}} {{ReadOnlyInline}}
  - : Gibt ein {{domxref("TrustedHTML")}}-Objekt zurück, das einen leeren String enthält.
- {{domxref("TrustedTypePolicyFactory.emptyScript")}} {{ReadOnlyInline}}
  - : Gibt ein {{domxref("TrustedScript")}}-Objekt zurück, das einen leeren String enthält.
- {{domxref("TrustedTypePolicyFactory.defaultPolicy")}} {{ReadOnlyInline}}
  - : Gibt die standardmäßige {{domxref("TrustedTypePolicy")}} zurück oder null, wenn diese leer ist.

## Instanz-Methoden

- {{domxref("TrustedTypePolicyFactory.createPolicy()")}}
  - : Erstellt ein {{domxref("TrustedTypePolicy")}}-Objekt, das die als `policyOptions` übergebenen Regeln implementiert.
- {{domxref("TrustedTypePolicyFactory.isHTML()")}}
  - : Überprüft, ob ein übergebener Wert ein gültiges {{domxref("TrustedHTML")}}-Objekt ist.
- {{domxref("TrustedTypePolicyFactory.isScript()")}}
  - : Überprüft, ob ein übergebener Wert ein gültiges {{domxref("TrustedScript")}}-Objekt ist.
- {{domxref("TrustedTypePolicyFactory.isScriptURL()")}}
  - : Überprüft, ob ein übergebener Wert ein gültiges {{domxref("TrustedScriptURL")}}-Objekt ist.
- {{domxref("TrustedTypePolicyFactory.getAttributeType()")}}
  - : Erlaubt Webentwicklern zu überprüfen, ob ein Trusted Type für ein Element und Attribut erforderlich ist und, falls ja, welches.
- {{domxref("TrustedTypePolicyFactory.getPropertyType()")}}
  - : Erlaubt Webentwicklern zu überprüfen, ob ein Trusted Type für eine Eigenschaft erforderlich ist und, falls ja, welches.

## Beispiele

Der untenstehende Code erstellt eine Richtlinie mit dem Namen `"myEscapePolicy"` mit einer Funktion, die für `createHTML()` definiert ist und HTML bereinigt.

Wir verwenden dann die Richtlinie, um einen String zu bereinigen und ein {{domxref("TrustedHTML")}}-Objekt, `escaped`, zu erstellen. Dieses Objekt kann mit {{domxref("TrustedTypePolicyFactory.isHTML","isHTML()")}} getestet werden, um sicherzustellen, dass es von einer unserer Richtlinien erstellt wurde.

```js
const escapeHTMLPolicy = trustedTypes.createPolicy("myEscapePolicy", {
  createHTML: (string) => string.replace(/</g, "&lt;"),
});

const escaped = escapeHTMLPolicy.createHTML("<img src=x onerror=alert(1)>");

console.log(trustedTypes.isHTML(escaped)); // true;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
