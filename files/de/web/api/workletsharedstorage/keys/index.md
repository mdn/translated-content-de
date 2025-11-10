---
title: "WorkletSharedStorage: keys() Methode"
short-title: keys()
slug: Web/API/WorkletSharedStorage/keys
l10n:
  sourceCommit: 775df1c62a1cbe555c4374ff9122d4ef15bd6f60
---

{{APIRef("Shared Storage API")}}{{SeeCompatTable}}

Die **`keys()`** Methode der [`WorkletSharedStorage`](/de/docs/Web/API/WorkletSharedStorage)-Schnittstelle gibt einen [asynchronen Iterator](/de/docs/Web/JavaScript/Reference/Global_Objects/AsyncIterator) zurück, der die Schlüssel für jedes Element in einer `WorkletSharedStorage`-Instanz enthält.

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
  - : Ausgelöst, wenn die aufrufende Stelle die Shared Storage API nicht in einem erfolgreichen [Datenschutz-Sandbox-Registrierungsprozess](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Enrollment) eingebunden hat.

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
