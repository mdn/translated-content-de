---
title: "MediaKeySystemAccess: getConfiguration() Methode"
short-title: getConfiguration()
slug: Web/API/MediaKeySystemAccess/getConfiguration
l10n:
  sourceCommit: ba9a6bebd0e7bf1dd6b5c4eed156d8f1748ade0f
---

{{APIRef("Encrypted Media Extensions")}}{{SecureContext_Header}}

Die **`getConfiguration()`**-Methode der {{domxref("MediaKeySystemAccess")}}-Schnittstelle gibt ein Objekt mit der unterstützten Kombination der folgenden Konfigurationsoptionen zurück:

- `initDataTypes` {{ReadOnlyInline}}
  - : Gibt eine Liste von unterstützten Initialisierungsdatentyp-Namen zurück. Ein Initialisierungsdatentyp ist eine Zeichenkette, die das Format der Initialisierungsdaten angibt.
- `audioCapabilities` {{ReadOnlyInline}}
  - : Gibt eine Liste von unterstützten Audio-Typen und Fähigkeits-Paaren zurück.
- `videoCapabilities` {{ReadOnlyInline}}
  - : Gibt eine Liste von unterstützten Video-Typen und Fähigkeits-Paaren zurück.
- `distinctiveIdentifier` {{ReadOnlyInline}}
  - : Gibt an, ob eine persistente einzigartige Kennung erforderlich ist.
- `persistentState` {{ReadOnlyInline}}
  - : Gibt an, ob die Fähigkeit zur Statuspersistenz erforderlich ist.

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
