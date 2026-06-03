---
title: "MediaKeySystemAccess: getConfiguration() Methode"
short-title: getConfiguration()
slug: Web/API/MediaKeySystemAccess/getConfiguration
l10n:
  sourceCommit: 5918123ea64a318165fe489d04c98650bf611efc
---

{{APIRef("Encrypted Media Extensions")}}{{SecureContext_Header}}

Die **`getConfiguration()`** Methode der Schnittstelle [`MediaKeySystemAccess`](/de/docs/Web/API/MediaKeySystemAccess) gibt ein Objekt mit der unterstützten Kombination der folgenden Konfigurationsoptionen zurück:

- `label` {{ReadOnlyInline}}
  - : Ein String, der die Konfiguration identifiziert und unverändert aus der an [`Navigator.requestMediaKeySystemAccess()`](/de/docs/Web/API/Navigator/requestMediaKeySystemAccess) übergebenen Konfiguration übernommen wird.
    Standardmäßig ist dies der leere String (`""`).
- `initDataTypes` {{ReadOnlyInline}}
  - : Gibt eine Liste der unterstützten Initialisierungsdatentypnamen zurück. Ein Initialisierungsdatentyp ist ein String, der das Format der Initialisierungsdaten angibt.
- `audioCapabilities` {{ReadOnlyInline}}
  - : Gibt eine Liste unterstützter Audio-Typ- und Fähigkeits-Paare zurück.
- `videoCapabilities` {{ReadOnlyInline}}
  - : Gibt eine Liste unterstützter Video-Typ- und Fähigkeits-Paare zurück.
- `distinctiveIdentifier` {{ReadOnlyInline}}
  - : Gibt an, ob ein persistenter, unterscheidbarer Identifikator erforderlich ist.
- `persistentState` {{ReadOnlyInline}}
  - : Gibt an, ob die Möglichkeit, den Zustand zu speichern, erforderlich ist.
- `sessionTypes` {{ReadOnlyInline}}
  - : Ein Array von Strings, das die Sitzungstypen angibt, die von der Konfiguration unterstützt werden.

    Zulässige Werte sind unter anderem:
    - `temporary`
      - : Eine Sitzung, für die das Lizenzierungs-, Schlüssel- und Sitzungsprotokoll oder -daten nicht gespeichert werden.
        Die Anwendung muss diese Speicherung nicht verwalten.
        Implementierungen müssen diese Option unterstützen, und sie ist die Standardeinstellung.
    - `persistent-license`
      - : Eine Sitzung, für die die Lizenz (und möglicherweise andere mit der Sitzung verbundene Daten) gespeichert werden.
        Ein Eintrag der Lizenz und der zugehörigen Schlüssel bleibt auch dann bestehen, wenn die Lizenz gelöscht wird, was eine Bescheinigung darstellt, dass die Lizenz und die enthaltenen Schlüssel vom Client nicht mehr verwendet werden können.

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
