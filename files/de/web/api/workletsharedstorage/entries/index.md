---
title: "WorkletSharedStorage: entries() Methode"
short-title: entries()
slug: Web/API/WorkletSharedStorage/entries
l10n:
  sourceCommit: 0c906f7f464d8ff632baf8d25fa63eed3f03b632
---

{{APIRef("Shared Storage API")}}{{deprecated_header}}

Die **`entries()`**-Methode der [`WorkletSharedStorage`](/de/docs/Web/API/WorkletSharedStorage)-Schnittstelle gibt einen [asynchronen Iterator](/de/docs/Web/JavaScript/Reference/Global_Objects/AsyncIterator) zurück. Der Iterator liefert ein Array von `[key, value]`-Paaren, die den aufzählbaren Eigenschaften einer `WorkletSharedStorage`-Instanz entsprechen. Die Reihenfolge dieser Paare ist ähnlich wie in einer [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in)-Schleife, obwohl eine `for...in`-Schleife auch Eigenschaften aus der Prototypenkette aufzählt.

## Syntax

```js-nolint
entries()
```

### Parameter

Keine.

### Rückgabewert

Ein Array der aufzählbaren Schlüssel-Wert-Paare von `WorkletSharedStorage`.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn die aufrufende Stelle die Shared Storage API nicht im Rahmen eines erfolgreichen [Privacy Sandbox Enrollment-Prozesses](/de/docs/Web/Privacy/Guides/Privacy_sandbox#enrollment) einbezogen hat.

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
