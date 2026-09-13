---
title: "Window: sharedStorage-Eigenschaft"
short-title: sharedStorage
slug: Web/API/Window/sharedStorage
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("Shared Storage API")}}{{SecureContext_Header}}{{non-standard_header}}

Die globale schreibgeschützte **`sharedStorage`**-Eigenschaft gibt das [`WindowSharedStorage`](/de/docs/Web/API/WindowSharedStorage)-Objekt für die aktuelle Origin zurück. Dies ist der Haupteingangspunkt zum Schreiben von Daten in den gemeinsam genutzten Speicher mithilfe der [Shared Storage API](/de/docs/Web/API/Shared_Storage_API).

> [!NOTE]
> `sharedStorage` ist in Workern nicht verfügbar. Es wird von [`Window`](/de/docs/Web/API/Window) implementiert und ist auch in gemeinsam genutzten Speicher-Worklets verfügbar (siehe [`SharedStorageWorkletGlobalScope.sharedStorage`](/de/docs/Web/API/SharedStorageWorkletGlobalScope/sharedStorage), das [`WorkletSharedStorage`](/de/docs/Web/API/WorkletSharedStorage) zurückgibt).

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
