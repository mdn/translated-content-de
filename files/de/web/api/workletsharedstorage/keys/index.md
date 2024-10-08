---
title: "WorkletSharedStorage: keys() Methode"
short-title: keys()
slug: Web/API/WorkletSharedStorage/keys
l10n:
  sourceCommit: d484785e53cff16c020adc868415bb9b07b0f6af
---

{{APIRef("Shared Storage API")}}{{SeeCompatTable}}

Die **`keys()`**-Methode der [`WorkletSharedStorage`](/de/docs/Web/API/WorkletSharedStorage) Schnittstelle gibt einen [asynchronen Iterator](/de/docs/Web/JavaScript/Reference/Global_Objects/AsyncIterator) zurück, der die Schlüssel für jedes Element in einer `WorkletSharedStorage`-Instanz enthält.

## Syntax

```js-nolint
keys()
```

### Parameter

Keine.

### Rückgabewert

Ein Array der aufzählbaren Eigenschaftsschlüssel der `WorkletSharedStorage`.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn die aufrufende Stelle die Shared Storage API im Rahmen eines erfolgreichen [Privacy Sandbox Einschreibungsprozesses](/de/docs/Web/Privacy/Privacy_sandbox/Enrollment) nicht eingeschlossen hat.

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
