---
title: "WorkletSharedStorage: length()-Methode"
short-title: length()
slug: Web/API/WorkletSharedStorage/length
l10n:
  sourceCommit: d484785e53cff16c020adc868415bb9b07b0f6af
---

{{APIRef("Shared Storage API")}}{{SeeCompatTable}}

Die **`length()`**-Methode des [`WorkletSharedStorage`](/de/docs/Web/API/WorkletSharedStorage)-Interfaces gibt die Anzahl der aktuell im gemeinsamen Speicher für den aktuellen Ursprung gespeicherten Einträge zurück.

## Syntax

```js-nolint
length()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einer Zahl erfüllt wird, die die Gesamtanzahl der aktuell im gemeinsamen Speicher vorhandenen Schlüssel-Wert-Paare darstellt.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn:
    - Das Worklet-Modul noch nicht mit [`addModule()`](/de/docs/Web/API/Worklet/addModule) hinzugefügt wurde.
    - Die aufrufende Stelle die Shared Storage API nicht in einem erfolgreichen [Anmeldeprozess für die Privacy Sandbox](/de/docs/Web/Privacy/Privacy_sandbox/Enrollment) integriert hat.
    - Der Browser aus einem anderen Grund nicht in der Lage ist, die Anzahl der Einträge abzurufen.

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
