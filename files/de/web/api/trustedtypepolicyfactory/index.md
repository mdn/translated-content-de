---
title: TrustedTypePolicyFactory
slug: Web/API/TrustedTypePolicyFactory
l10n:
  sourceCommit: c7d5004cd6c5d5b1318f626425fcb06cb2c6a509
---

{{APIRef("Trusted Types API")}}{{AvailableInWorkers}}

Das **`TrustedTypePolicyFactory`**-Interface der [Trusted Types API](/de/docs/Web/API/Trusted_Types_API) erstellt Richtlinien und ermöglicht die Überprüfung von Trusted Type-Objekten gegen erstellte Richtlinien.

## Instanzeigenschaften

- [`TrustedTypePolicyFactory.emptyHTML`](/de/docs/Web/API/TrustedTypePolicyFactory/emptyHTML) {{ReadOnlyInline}}
  - : Gibt ein [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Objekt zurück, das einen leeren String enthält.
- [`TrustedTypePolicyFactory.emptyScript`](/de/docs/Web/API/TrustedTypePolicyFactory/emptyScript) {{ReadOnlyInline}}
  - : Gibt ein [`TrustedScript`](/de/docs/Web/API/TrustedScript)-Objekt zurück, das einen leeren String enthält.
- [`TrustedTypePolicyFactory.defaultPolicy`](/de/docs/Web/API/TrustedTypePolicyFactory/defaultPolicy) {{ReadOnlyInline}}
  - : Gibt die Standard-[`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy) zurück, oder null, wenn diese leer ist.

## Instanzmethoden

- [`TrustedTypePolicyFactory.createPolicy()`](/de/docs/Web/API/TrustedTypePolicyFactory/createPolicy)
  - : Erstellt ein [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy)-Objekt, das die als `policyOptions` übergebenen Regeln implementiert.
- [`TrustedTypePolicyFactory.isHTML()`](/de/docs/Web/API/TrustedTypePolicyFactory/isHTML)
  - : Überprüft, wenn ein Wert übergeben wird, ob es sich um ein gültiges [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Objekt handelt.
- [`TrustedTypePolicyFactory.isScript()`](/de/docs/Web/API/TrustedTypePolicyFactory/isScript)
  - : Überprüft, wenn ein Wert übergeben wird, ob es sich um ein gültiges [`TrustedScript`](/de/docs/Web/API/TrustedScript)-Objekt handelt.
- [`TrustedTypePolicyFactory.isScriptURL()`](/de/docs/Web/API/TrustedTypePolicyFactory/isScriptURL)
  - : Überprüft, wenn ein Wert übergeben wird, ob es sich um ein gültiges [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL)-Objekt handelt.
- [`TrustedTypePolicyFactory.getAttributeType()`](/de/docs/Web/API/TrustedTypePolicyFactory/getAttributeType)
  - : Ermöglicht es Webentwicklern zu prüfen, ob ein Trusted Type für ein Element und Attribut erforderlich ist, und wenn ja, welcher.
- [`TrustedTypePolicyFactory.getPropertyType()`](/de/docs/Web/API/TrustedTypePolicyFactory/getPropertyType)
  - : Ermöglicht es Webentwicklern zu prüfen, ob ein Trusted Type für eine Eigenschaft erforderlich ist, und wenn ja, welcher.

## Beispiele

Der untenstehende Code erstellt eine Richtlinie mit dem Namen `"myEscapePolicy"` mit einer definierten Funktion für `createHTML()`, die HTML saniert.

Wir verwenden dann die Richtlinie, um einen String zu sanieren und ein [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Objekt, `escaped`, zu erstellen. Dieses Objekt kann mit [`isHTML()`](/de/docs/Web/API/TrustedTypePolicyFactory/isHTML) getestet werden, um sicherzustellen, dass es von einer unserer Richtlinien erstellt wurde.

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
