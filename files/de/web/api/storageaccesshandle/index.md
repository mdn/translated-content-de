---
title: StorageAccessHandle
slug: Web/API/StorageAccessHandle
l10n:
  sourceCommit: 22080a7cc403f7f45c8e85065b182c9f0d4d383c
---

{{APIRef("Storage Access API")}}

Die **`StorageAccessHandle`** Schnittstelle repräsentiert den Zugriff auf [unpartitionierten Zustand](/de/docs/Web/Privacy/State_Partitioning#state_partitioning), der durch einen Aufruf von {{domxref("Document.requestStorageAccess()")}} gewährt wird.

## Instanzeigenschaften

- {{domxref("StorageAccessHandle.sessionStorage")}} {{ReadOnlyInline}}
  - : Gibt ein unpartitioniertes {{domxref("Storage")}}-Objekt der Sitzung zurück, wenn der Zugriff gewährt wurde.
- {{domxref("StorageAccessHandle.localStorage")}} {{ReadOnlyInline}}
  - : Gibt ein unpartitioniertes {{domxref("Storage")}}-Objekt des lokalen Speichers zurück, wenn der Zugriff gewährt wurde.
- {{domxref("StorageAccessHandle.indexedDB")}} {{ReadOnlyInline}}
  - : Gibt ein unpartitioniertes {{domxref("IDBFactory")}}-Objekt zurück, wenn der Zugriff gewährt wurde.
- {{domxref("StorageAccessHandle.locks")}} {{ReadOnlyInline}}
  - : Gibt ein unpartitioniertes {{domxref("LockManager")}}-Objekt zurück, wenn der Zugriff gewährt wurde.
- {{domxref("StorageAccessHandle.caches")}} {{ReadOnlyInline}}
  - : Gibt ein unpartitioniertes {{domxref("CacheStorage")}}-Objekt zurück, wenn der Zugriff gewährt wurde.

## Instanzmethoden

- {{domxref("StorageAccessHandle.getDirectory()")}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einem unpartitionierten {{domxref("FileSystemDirectoryHandle")}}-Objekt erfüllt wird, wenn der Zugriff gewährt wurde, und andernfalls ablehnt.
- {{domxref("StorageAccessHandle.estimate()")}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einem unpartitionierten {{domxref("StorageManager.estimate()", "StorageEstimate")}}-Objekt erfüllt wird, wenn der Zugriff gewährt wurde, und andernfalls ablehnt.
- {{domxref("StorageAccessHandle.createObjectURL()")}}
  - : Gibt einen String zurück, der die erstellte unpartitionierte Blob-Speicher-URL darstellt, wenn der Zugriff gewährt wurde, und wirft andernfalls eine Ausnahme.
- {{domxref("StorageAccessHandle.revokeObjectURL()")}}
  - : Widerruft die übergebene unpartitionierte Blob-Speicher-URL, wenn der Zugriff gewährt wurde, und wirft andernfalls eine Ausnahme.
- {{domxref("StorageAccessHandle.BroadcastChannel()")}}
  - : Gibt den erstellten unpartitionierten {{domxref("BroadcastChannel")}} zurück, wenn der Zugriff gewährt wurde, und wirft andernfalls eine Ausnahme.
- {{domxref("StorageAccessHandle.SharedWorker()")}}
  - : Gibt den erstellten unpartitionierten {{domxref("SharedWorker")}} zurück, wenn der Zugriff gewährt wurde, und wirft andernfalls eine Ausnahme.

## Beispiel

```js
document.requestStorageAccess({ localStorage: true }).then(
  (handle) => {
    console.log("localStorage access granted");
    handle.localStorage.setItem("foo", "bar");
  },
  () => {
    console.log("localStorage access denied");
  },
);
```

> [!NOTE]
> Siehe [Using the Storage Access API](/de/docs/Web/API/Storage_Access_API/Using) für ein vollständigeres Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("Document.requestStorageAccess()")}}
- [Using the Storage Access API](/de/docs/Web/API/Storage_Access_API/Using)
