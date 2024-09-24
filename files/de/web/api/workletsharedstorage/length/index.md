---
title: "WorkletSharedStorage: length()-Methode"
short-title: length()
slug: Web/API/WorkletSharedStorage/length
l10n:
  sourceCommit: d484785e53cff16c020adc868415bb9b07b0f6af
---

{{APIRef("Shared Storage API")}}{{SeeCompatTable}}

Die **`length()`**-Methode der
{{domxref("WorkletSharedStorage")}}-Schnittstelle gibt die Anzahl der Einträge zurück, die derzeit im geteilten Speicher für den aktuellen Ursprung gespeichert sind.

## Syntax

```js-nolint
length()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, der mit einer Zahl erfüllt wird, die die Gesamtanzahl der momentan im geteilten Speicher vorhandenen Schlüssel-Wert-Paare darstellt.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn:
    - Das Worklet-Modul noch nicht mit {{domxref("Worklet.addModule", "addModule()")}} hinzugefügt wurde.
    - Der Aufrufort die Shared Storage API nicht in einem erfolgreichen [Privacy-Sandbox-Anmeldeprozess](/de/docs/Web/Privacy/Privacy_sandbox/Enrollment) enthalten hat.
    - Der Browser aus einem anderen Grund die Anzahl der Einträge nicht abrufen kann.

## Beispiele

```js
// length() verfügbar innerhalb eines Shared-Storage-Worklet-Moduls

async function retrieveLength() {
  const length = await this.sharedStorage.length();
  console.log(length);
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Shared Storage API](/de/docs/Web/API/Shared_Storage_API)
