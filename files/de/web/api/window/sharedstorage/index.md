---
title: "Fenster: Eigenschaft sharedStorage"
short-title: sharedStorage
slug: Web/API/Window/sharedStorage
l10n:
  sourceCommit: b2323759014333d2f36a27b05539d4856eb7f1fe
---

{{APIRef("Shared Storage API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die globale, schreibgeschützte **`sharedStorage`**-Eigenschaft gibt das {{domxref("WindowSharedStorage")}}-Objekt für den aktuellen Ursprung zurück. Dies ist der Haupteinstiegspunkt zum Schreiben von Daten in den geteilten Speicher mithilfe der [Shared Storage API](/de/docs/Web/API/Shared_Storage_API).

> **Note:** `sharedStorage` ist innerhalb von Workern nicht verfügbar. Es wird von {{domxref("Window")}} implementiert und ist auch in gemeinsamen Speicher-Worklets verfügbar (siehe {{domxref("SharedStorageWorkletGlobalScope.sharedStorage")}}, das {{domxref("WorkletSharedStorage")}} zurückgibt).

## Wert

Eine Instanz eines {{domxref("WindowSharedStorage")}}-Objekts.

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

- {{domxref("WindowSharedStorage")}}
- [Shared Storage API](/de/docs/Web/API/Shared_Storage_API)
