---
title: "WorkletSharedStorage: keys() Methode"
short-title: keys()
slug: Web/API/WorkletSharedStorage/keys
l10n:
  sourceCommit: 923adb616baa87402ca965ebd18a73380cc84d27
---

{{APIRef("Shared Storage API")}}{{deprecated_header}}

Die **`keys()`** Methode der [`WorkletSharedStorage`](/de/docs/Web/API/WorkletSharedStorage) Schnittstelle gibt einen [asynchronen Iterator](/de/docs/Web/JavaScript/Reference/Global_Objects/AsyncIterator) zurück, der die Schlüssel für jedes Element in einer `WorkletSharedStorage` Instanz enthält.

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
  - : Wird ausgelöst, wenn die aufrufende Stelle die Shared Storage API nicht in einem erfolgreichen [Datenschutz-Sandbox-Anmeldungsprozess](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Enrollment) enthalten hat.

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
