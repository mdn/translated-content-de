---
title: "WorkletSharedStorage: entries()-Methode"
short-title: entries()
slug: Web/API/WorkletSharedStorage/entries
l10n:
  sourceCommit: 775df1c62a1cbe555c4374ff9122d4ef15bd6f60
---

{{APIRef("Shared Storage API")}}{{SeeCompatTable}}

Die **`entries()`**-Methode der [`WorkletSharedStorage`](/de/docs/Web/API/WorkletSharedStorage)-Schnittstelle gibt einen [async iterator](/de/docs/Web/JavaScript/Reference/Global_Objects/AsyncIterator) zurück. Der Iterator liefert ein Array von `[key, value]` Paaren, die den aufzählbaren Eigenschaften einer `WorkletSharedStorage`-Instanz entsprechen. Die Reihenfolge dieser Paare ähnelt der in einer [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in)-Schleife, obwohl eine `for...in`-Schleife auch Eigenschaften aus der Prototypkette auflistet.

## Syntax

```js-nolint
entries()
```

### Parameter

Keine.

### Rückgabewert

Ein Array der aufzählbaren Eigenschaften-Schlüssel-Werte-Paare von `WorkletSharedStorage`.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn die aufrufende Seite die Shared Storage API nicht in einem erfolgreichen [Privacy Sandbox-Einschreibungsprozess](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Enrollment) enthalten hat.

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
