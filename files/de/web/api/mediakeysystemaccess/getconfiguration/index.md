---
title: "MediaKeySystemAccess: getConfiguration()-Methode"
short-title: getConfiguration()
slug: Web/API/MediaKeySystemAccess/getConfiguration
l10n:
  sourceCommit: ba9a6bebd0e7bf1dd6b5c4eed156d8f1748ade0f
---

{{APIRef("Encrypted Media Extensions")}}{{SecureContext_Header}}

Die **`getConfiguration()`**-Methode der [`MediaKeySystemAccess`](/de/docs/Web/API/MediaKeySystemAccess)-Schnittstelle liefert ein Objekt mit der unterstützten Kombination der folgenden Konfigurationsoptionen:

- `initDataTypes` {{ReadOnlyInline}}
  - : Gibt eine Liste der unterstützten Initialisierungs-Datentypnamen zurück. Ein Initialisierungs-Datentyp ist ein String, der das Format der Initialisierungsdaten angibt.
- `audioCapabilities` {{ReadOnlyInline}}
  - : Gibt eine Liste der unterstützten Audio-Typ- und Fähigkeits-Paare zurück.
- `videoCapabilities` {{ReadOnlyInline}}
  - : Gibt eine Liste der unterstützten Video-Typ- und Fähigkeits-Paare zurück.
- `distinctiveIdentifier` {{ReadOnlyInline}}
  - : Gibt an, ob ein persistenter, unverwechselbarer Bezeichner erforderlich ist.
- `persistentState` {{ReadOnlyInline}}
  - : Gibt an, ob die Möglichkeit zum Persistieren des Zustands erforderlich ist.

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
