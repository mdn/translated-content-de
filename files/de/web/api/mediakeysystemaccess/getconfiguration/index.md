---
title: "MediaKeySystemAccess: getConfiguration()-Methode"
short-title: getConfiguration()
slug: Web/API/MediaKeySystemAccess/getConfiguration
l10n:
  sourceCommit: ba9a6bebd0e7bf1dd6b5c4eed156d8f1748ade0f
---

{{APIRef("Encrypted Media Extensions")}}{{SecureContext_Header}}

Die **`getConfiguration()`**-Methode der [`MediaKeySystemAccess`](/de/docs/Web/API/MediaKeySystemAccess)-Schnittstelle gibt ein Objekt mit der unterstützten Kombination der folgenden Konfigurationsoptionen zurück:

- `initDataTypes` {{ReadOnlyInline}}
  - : Gibt eine Liste der unterstützten Initialisierungsdatentypnamen zurück. Ein Initialisierungsdatentyp ist ein String, der das Format der Initialisierungsdaten angibt.
- `audioCapabilities` {{ReadOnlyInline}}
  - : Gibt eine Liste der unterstützten Audiotyp- und Fähigkeitspaare zurück.
- `videoCapabilities` {{ReadOnlyInline}}
  - : Gibt eine Liste der unterstützten Videotyp- und Fähigkeitspaare zurück.
- `distinctiveIdentifier` {{ReadOnlyInline}}
  - : Gibt an, ob ein eindeutiger, dauerhafter Bezeichner erforderlich ist.
- `persistentState` {{ReadOnlyInline}}
  - : Gibt an, ob die Fähigkeit, den Zustand zu speichern, erforderlich ist.

## Syntax

```js-nolint
getConfiguration()
```

### Parameter

Keine.

### Rückgabewert

Ein Objekt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
