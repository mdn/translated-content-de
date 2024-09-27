---
title: StorageAccessHandle
slug: Web/API/StorageAccessHandle
l10n:
  sourceCommit: 22080a7cc403f7f45c8e85065b182c9f0d4d383c
---

{{APIRef("Storage Access API")}}

Die **`StorageAccessHandle`**-Schnittstelle steht für den Zugriff auf [unpartitionierten Zustand](/de/docs/Web/Privacy/State_Partitioning#state_partitioning), der durch einen Aufruf von [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess) gewährt wird.

## Instanzeigenschaften

- [`StorageAccessHandle.sessionStorage`](/de/docs/Web/API/StorageAccessHandle/sessionStorage) {{ReadOnlyInline}}
  - : Gibt ein unpartitioniertes Session-[`Storage`](/de/docs/Web/API/Storage)-Objekt zurück, wenn der Zugriff gewährt wurde.
- [`StorageAccessHandle.localStorage`](/de/docs/Web/API/StorageAccessHandle/localStorage) {{ReadOnlyInline}}
  - : Gibt ein unpartitioniertes Local-[`Storage`](/de/docs/Web/API/Storage)-Objekt zurück, wenn der Zugriff gewährt wurde.
- [`StorageAccessHandle.indexedDB`](/de/docs/Web/API/StorageAccessHandle/indexedDB) {{ReadOnlyInline}}
  - : Gibt ein unpartitioniertes [`IDBFactory`](/de/docs/Web/API/IDBFactory)-Objekt zurück, wenn der Zugriff gewährt wurde.
- [`StorageAccessHandle.locks`](/de/docs/Web/API/StorageAccessHandle/locks) {{ReadOnlyInline}}
  - : Gibt ein unpartitioniertes [`LockManager`](/de/docs/Web/API/LockManager)-Objekt zurück, wenn der Zugriff gewährt wurde.
- [`StorageAccessHandle.caches`](/de/docs/Web/API/StorageAccessHandle/caches) {{ReadOnlyInline}}
  - : Gibt ein unpartitioniertes [`CacheStorage`](/de/docs/Web/API/CacheStorage)-Objekt zurück, wenn der Zugriff gewährt wurde.

## Instanzmethoden

- [`StorageAccessHandle.getDirectory()`](/de/docs/Web/API/StorageAccessHandle/getDirectory)
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einem unpartitionierten [`FileSystemDirectoryHandle`](/de/docs/Web/API/FileSystemDirectoryHandle)-Objekt erfüllt wird, wenn der Zugriff gewährt wurde, und lehnt es andernfalls ab.
- [`StorageAccessHandle.estimate()`](/de/docs/Web/API/StorageAccessHandle/estimate)
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einem unpartitionierten [`StorageEstimate`](/de/docs/Web/API/StorageManager/estimate)-Objekt erfüllt wird, wenn der Zugriff gewährt wurde, und lehnt es andernfalls ab.
- [`StorageAccessHandle.createObjectURL()`](/de/docs/Web/API/StorageAccessHandle/createObjectURL)
  - : Gibt einen String zurück, der die unpartitionierte Blob-Speicher-URL darstellt, wenn der Zugriff gewährt wurde, und wirft andernfalls einen Fehler.
- [`StorageAccessHandle.revokeObjectURL()`](/de/docs/Web/API/StorageAccessHandle/revokeObjectURL)
  - : Widerruft die übergebene unpartitionierte Blob-Speicher-URL, wenn der Zugriff gewährt wurde, und wirft andernfalls einen Fehler.
- [`StorageAccessHandle.BroadcastChannel()`](/de/docs/Web/API/StorageAccessHandle/BroadcastChannel)
  - : Gibt den unpartitionierten [`BroadcastChannel`](/de/docs/Web/API/BroadcastChannel)-Kanal zurück, der erstellt wurde, wenn der Zugriff gewährt wurde, und wirft andernfalls einen Fehler.
- [`StorageAccessHandle.SharedWorker()`](/de/docs/Web/API/StorageAccessHandle/SharedWorker)
  - : Gibt den unpartitionierten [`SharedWorker`](/de/docs/Web/API/SharedWorker) zurück, der erstellt wurde, wenn der Zugriff gewährt wurde, und wirft andernfalls einen Fehler.

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
> Siehe [Verwendung der Storage Access API](/de/docs/Web/API/Storage_Access_API/Using) für ein vollständigeres Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess)
- [Verwendung der Storage Access API](/de/docs/Web/API/Storage_Access_API/Using)
