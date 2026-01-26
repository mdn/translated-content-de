---
title: "WorkletSharedStorage: Methode entries()"
short-title: entries()
slug: Web/API/WorkletSharedStorage/entries
l10n:
  sourceCommit: 923adb616baa87402ca965ebd18a73380cc84d27
---

{{APIRef("Shared Storage API")}}{{deprecated_header}}

Die **`entries()`**-Methode der [`WorkletSharedStorage`](/de/docs/Web/API/WorkletSharedStorage)-Schnittstelle gibt einen [async iterator](/de/docs/Web/JavaScript/Reference/Global_Objects/AsyncIterator) zurück. Der Iterator liefert ein Array von `[key, value]`-Paaren, die den aufzählbaren Eigenschaften einer `WorkletSharedStorage`-Instanz entsprechen. Die Reihenfolge dieser Paare ist ähnlich wie bei einer [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in)-Schleife, obwohl eine `for...in`-Schleife auch Eigenschaften aus der Prototypen-Kette aufzählt.

## Syntax

```js-nolint
entries()
```

### Parameter

Keine.

### Rückgabewert

Ein Array der aufzählbaren Schlüssel-Wert-Paare der `WorkletSharedStorage`.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn die aufrufende Seite die Shared Storage API nicht in einem erfolgreichen [Privacy Sandbox Registrierungsprozess](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Enrollment) eingeschlossen hat.

## Beispiele

```js
// entries() available inside a shared storage worklet module
const storage = await this.sharedStorage;

async function logEntries() {
  for await (const [key, value] of storage.entries()) {
    console.log({ key, value });
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Shared Storage API](/de/docs/Web/API/Shared_Storage_API)
