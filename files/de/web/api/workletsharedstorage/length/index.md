---
title: "WorkletSharedStorage: length()-Methode"
short-title: length()
slug: Web/API/WorkletSharedStorage/length
l10n:
  sourceCommit: 0c906f7f464d8ff632baf8d25fa63eed3f03b632
---

{{APIRef("Shared Storage API")}}{{deprecated_header}}

Die **`length()`**-Methode der [`WorkletSharedStorage`](/de/docs/Web/API/WorkletSharedStorage)-Schnittstelle gibt die Anzahl der derzeit im gemeinsamen Speicher für die aktuelle Origin gespeicherten Einträge zurück.

## Syntax

```js-nolint
length()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, der mit einer Zahl erfüllt wird, die die Gesamtanzahl der momentan im gemeinsamen Speicher befindlichen Schlüssel-Wert-Paare darstellt.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn:
    - Das Worklet-Modul noch nicht mit [`addModule()`](/de/docs/Web/API/Worklet/addModule) hinzugefügt wurde.
    - Die aufrufende Stelle die Shared Storage API nicht in einem erfolgreichen [Privacy Sandbox-Anmeldeprozess](/de/docs/Web/Privacy/Guides/Privacy_sandbox#enrollment) eingebunden hat.
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
