---
title: "WorkletSharedStorage: length()-Methode"
short-title: length()
slug: Web/API/WorkletSharedStorage/length
l10n:
  sourceCommit: 923adb616baa87402ca965ebd18a73380cc84d27
---

{{APIRef("Shared Storage API")}}{{deprecated_header}}

Die **`length()`**-Methode der [`WorkletSharedStorage`](/de/docs/Web/API/WorkletSharedStorage)-Schnittstelle gibt die Anzahl der derzeit im gemeinsamen Speicher für den aktuellen Ursprung gespeicherten Einträge zurück.

## Syntax

```js-nolint
length()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einer Zahl erfüllt wird, welche die Gesamtanzahl der aktuell im gemeinsamen Speicher vorhandenen Schlüssel-Wert-Paare darstellt.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn:
    - Das Worklet-Modul noch nicht mit [`addModule()`](/de/docs/Web/API/Worklet/addModule) hinzugefügt wurde.
    - Die aufrufende Stelle die Shared Storage API nicht in einem erfolgreichen [Privacy Sandbox-Einschreibungsprozess](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Enrollment) eingebunden hat.
    - Der Browser aus irgendeinem anderen Grund die Anzahl der Einträge nicht abrufen kann.

## Beispiele

```js
// length() available inside a shared storage worklet module

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
