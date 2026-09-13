---
title: "WorkletSharedStorage: entries()-Methode"
short-title: entries()
slug: Web/API/WorkletSharedStorage/entries
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("Shared Storage API")}}

Die **`entries()`**-Methode der [`WorkletSharedStorage`](/de/docs/Web/API/WorkletSharedStorage)-Schnittstelle gibt einen [asynchronen Iterator](/de/docs/Web/JavaScript/Reference/Global_Objects/AsyncIterator) zurück. Der Iterator liefert ein Array von `[key, value]`-Paaren, die den aufzählbaren Eigenschaften einer `WorkletSharedStorage`-Instanz entsprechen. Die Reihenfolge dieser Paare ähnelt der in einer [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in)-Schleife, obwohl eine `for...in`-Schleife auch Eigenschaften aus der Prototypen-Kette aufzählt.

## Syntax

```js-nolint
entries()
```

### Parameter

Keine.

### Rückgabewert

Ein Array der aufzählbaren Eigenschaftsschlüssel-Wert-Paaren der `WorkletSharedStorage`.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn die aufrufende Site die Shared Storage API nicht in einem erfolgreichen [Privacy-Sandbox-Eintrag](/de/docs/Web/Privacy/Guides/Privacy_sandbox#enrollment) eingeschlossen hat.

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
