---
title: "Window: sharedStorage-Eigenschaft"
short-title: sharedStorage
slug: Web/API/Window/sharedStorage
l10n:
  sourceCommit: b2323759014333d2f36a27b05539d4856eb7f1fe
---

{{APIRef("Shared Storage API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die globale, schreibgeschützte **`sharedStorage`**-Eigenschaft gibt das [`WindowSharedStorage`](/de/docs/Web/API/WindowSharedStorage)-Objekt für den aktuellen Ursprung zurück. Dies ist der Haupteinstiegspunkt zum Schreiben von Daten in Shared Storage mithilfe der [Shared Storage API](/de/docs/Web/API/Shared_Storage_API).

> **Note:** `sharedStorage` ist innerhalb von Workern nicht verfügbar. Es wird von [`Window`](/de/docs/Web/API/Window) implementiert und ist auch in Shared Storage Worklets verfügbar (siehe [`SharedStorageWorkletGlobalScope.sharedStorage`](/de/docs/Web/API/SharedStorageWorkletGlobalScope/sharedStorage), das [`WorkletSharedStorage`](/de/docs/Web/API/WorkletSharedStorage) zurückgibt).

## Wert

Eine Instanz eines [`WindowSharedStorage`](/de/docs/Web/API/WindowSharedStorage)-Objekts.

## Beispiele

```js
window.sharedStorage
  .set("ab-testing-group", "0")
  .then(console.log("Value saved to shared storage"));
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WindowSharedStorage`](/de/docs/Web/API/WindowSharedStorage)
- [Shared Storage API](/de/docs/Web/API/Shared_Storage_API)
