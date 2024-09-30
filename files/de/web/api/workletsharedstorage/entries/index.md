---
title: "WorkletSharedStorage: entries()-Methode"
short-title: entries()
slug: Web/API/WorkletSharedStorage/entries
l10n:
  sourceCommit: d484785e53cff16c020adc868415bb9b07b0f6af
---

{{APIRef("Shared Storage API")}}{{SeeCompatTable}}

Die **`entries()`**-Methode der [`WorkletSharedStorage`](/de/docs/Web/API/WorkletSharedStorage)-Schnittstelle gibt einen [asynchronen Iterator](/de/docs/Web/JavaScript/Reference/Global_Objects/AsyncIterator) zurück. Der Iterator liefert ein Array von `[key, value]`-Paaren, die den aufzählbaren Eigenschaften einer `WorkletSharedStorage`-Instanz entsprechen. Die Reihenfolge dieser Paare ähnelt der in einer [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in)-Schleife, obwohl eine `for...in`-Schleife auch Eigenschaften von der Prototyp-Kette aufzählt.

## Syntax

```js-nolint
entries()
```

### Parameter

Keine.

### Rückgabewert

Ein Array der aufzählbaren Eigenschafts-Schlüssel-Wert-Paare des `WorkletSharedStorage`.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn die aufrufende Stelle die Shared Storage API nicht im Rahmen eines erfolgreichen [Privacy Sandbox Enrollment-Prozesses](/de/docs/Web/Privacy/Privacy_sandbox/Enrollment) eingebunden hat.

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
