---
title: "WorkletSharedStorage: length()-Methode"
short-title: length()
slug: Web/API/WorkletSharedStorage/length
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("Shared Storage API")}}

Die **`length()`**-Methode des [`WorkletSharedStorage`](/de/docs/Web/API/WorkletSharedStorage)-Interfaces gibt die Anzahl der Einträge zurück, die derzeit im gemeinsamen Speicher für den aktuellen Ursprung gespeichert sind.

## Syntax

```js-nolint
length()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das eine Zahl erfüllt, welche die Gesamtanzahl der derzeit im gemeinsamen Speicher vorhandenen Schlüssel-Wert-Paare darstellt.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn:
    - Das Worklet-Modul noch nicht mit [`addModule()`](/de/docs/Web/API/Worklet/addModule) hinzugefügt wurde.
    - Die aufrufende Seite die Shared Storage API nicht in einem erfolgreichen [Privacy Sandbox-Anmeldeprozess](/de/docs/Web/Privacy/Guides/Privacy_sandbox#enrollment) eingeschlossen hat.
    - Der Browser aus einem anderen Grund die Anzahl der Einträge nicht abrufen kann.

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
