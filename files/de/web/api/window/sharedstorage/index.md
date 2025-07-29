---
title: "Window: sharedStorage-Eigenschaft"
short-title: sharedStorage
slug: Web/API/Window/sharedStorage
l10n:
  sourceCommit: d71c12f2ab7cc289117e13513cb965c88a39065e
---

{{APIRef("Shared Storage API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die globale, schreibgeschützte **`sharedStorage`**-Eigenschaft gibt das [`WindowSharedStorage`](/de/docs/Web/API/WindowSharedStorage)-Objekt für den aktuellen Ursprung zurück. Dies ist der Haupteinstiegspunkt für das Schreiben von Daten in den gemeinsamen Speicher mithilfe der [Shared Storage API](/de/docs/Web/API/Shared_Storage_API).

> [!NOTE]
> `sharedStorage` ist innerhalb von Workern nicht verfügbar. Es wird von [`Window`](/de/docs/Web/API/Window) implementiert und ist auch in Worklets für gemeinsamen Speicher verfügbar (siehe [`SharedStorageWorkletGlobalScope.sharedStorage`](/de/docs/Web/API/SharedStorageWorkletGlobalScope/sharedStorage), das [`WorkletSharedStorage`](/de/docs/Web/API/WorkletSharedStorage) zurückgibt).

## Wert

Eine Instanz des [`WindowSharedStorage`](/de/docs/Web/API/WindowSharedStorage)-Objekts.

## Beispiele

```js
window.sharedStorage
  .set("ab-testing-group", "0")
  .then(() => console.log("Value saved to shared storage"));
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WindowSharedStorage`](/de/docs/Web/API/WindowSharedStorage)
- [Shared Storage API](/de/docs/Web/API/Shared_Storage_API)
