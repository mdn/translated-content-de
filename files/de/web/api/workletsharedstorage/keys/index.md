---
title: "WorkletSharedStorage: keys()-Methode"
short-title: keys()
slug: Web/API/WorkletSharedStorage/keys
l10n:
  sourceCommit: 0c906f7f464d8ff632baf8d25fa63eed3f03b632
---

{{APIRef("Shared Storage API")}}{{deprecated_header}}

Die **`keys()`**-Methode des [`WorkletSharedStorage`](/de/docs/Web/API/WorkletSharedStorage)-Interfaces gibt einen [asynchronen Iterator](/de/docs/Web/JavaScript/Reference/Global_Objects/AsyncIterator) zurück, der die Schlüssel für jedes Element in einer `WorkletSharedStorage`-Instanz enthält.

## Syntax

```js-nolint
keys()
```

### Parameter

Keine.

### Rückgabewert

Ein Array der aufzählbaren Eigenschaftsschlüssel des `WorkletSharedStorage`.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn die aufrufende Stelle die Shared Storage API nicht in einem erfolgreichen [Privacy Sandbox-Einschreibungsprozess](/de/docs/Web/Privacy/Guides/Privacy_sandbox#enrollment) enthalten hat.

## Beispiele

```js
// keys() available inside a shared storage worklet module
const storage = await this.sharedStorage;

async function logKeys() {
  for await (const key of storage.keys()) {
    console.log(key);
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Shared Storage API](/de/docs/Web/API/Shared_Storage_API)
