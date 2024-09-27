---
title: TrustedTypePolicyFactory
slug: Web/API/TrustedTypePolicyFactory
l10n:
  sourceCommit: c7d5004cd6c5d5b1318f626425fcb06cb2c6a509
---

{{APIRef("Trusted Types API")}}{{AvailableInWorkers}}

Die **`TrustedTypePolicyFactory`**-Schnittstelle der [Trusted Types API](/de/docs/Web/API/Trusted_Types_API) erstellt Richtlinien und ermöglicht die Überprüfung von Trusted Type Objekten anhand erstellter Richtlinien.

## Instanzeigenschaften

- [`TrustedTypePolicyFactory.emptyHTML`](/de/docs/Web/API/TrustedTypePolicyFactory/emptyHTML) {{ReadOnlyInline}}
  - : Gibt ein [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Objekt zurück, das einen leeren String enthält.
- [`TrustedTypePolicyFactory.emptyScript`](/de/docs/Web/API/TrustedTypePolicyFactory/emptyScript) {{ReadOnlyInline}}
  - : Gibt ein [`TrustedScript`](/de/docs/Web/API/TrustedScript)-Objekt zurück, das einen leeren String enthält.
- [`TrustedTypePolicyFactory.defaultPolicy`](/de/docs/Web/API/TrustedTypePolicyFactory/defaultPolicy) {{ReadOnlyInline}}
  - : Gibt die Standard-[`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy) zurück oder null, wenn diese leer ist.

## Instanzmethoden

- [`TrustedTypePolicyFactory.createPolicy()`](/de/docs/Web/API/TrustedTypePolicyFactory/createPolicy)
  - : Erstellt ein [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy)-Objekt, das die als `policyOptions` übermittelten Regeln implementiert.
- [`TrustedTypePolicyFactory.isHTML()`](/de/docs/Web/API/TrustedTypePolicyFactory/isHTML)
  - : Überprüft, ob der übergebene Wert ein gültiges [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Objekt ist.
- [`TrustedTypePolicyFactory.isScript()`](/de/docs/Web/API/TrustedTypePolicyFactory/isScript)
  - : Überprüft, ob der übergebene Wert ein gültiges [`TrustedScript`](/de/docs/Web/API/TrustedScript)-Objekt ist.
- [`TrustedTypePolicyFactory.isScriptURL()`](/de/docs/Web/API/TrustedTypePolicyFactory/isScriptURL)
  - : Überprüft, ob der übergebene Wert ein gültiges [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL)-Objekt ist.
- [`TrustedTypePolicyFactory.getAttributeType()`](/de/docs/Web/API/TrustedTypePolicyFactory/getAttributeType)
  - : Ermöglicht Webentwicklern zu überprüfen, ob ein Trusted Type für ein Element und Attribut erforderlich ist, und falls ja, welcher.
- [`TrustedTypePolicyFactory.getPropertyType()`](/de/docs/Web/API/TrustedTypePolicyFactory/getPropertyType)
  - : Ermöglicht Webentwicklern zu überprüfen, ob ein Trusted Type für eine Eigenschaft erforderlich ist, und falls ja, welcher.

## Beispiele

Der nachstehende Code erstellt eine Richtlinie mit dem Namen `"myEscapePolicy"` mit einer Funktion definiert für `createHTML()`, die HTML bereinigt.

Wir nutzen dann die Richtlinie, um einen String zu bereinigen und ein [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Objekt, `escaped`, zu erstellen. Dieses Objekt kann mit [`isHTML()`](/de/docs/Web/API/TrustedTypePolicyFactory/isHTML) getestet werden, um sicherzustellen, dass es von einer unserer Richtlinien erstellt wurde.

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
