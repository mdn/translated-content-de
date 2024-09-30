---
title: "Document: requestStorageAccess()-Methode"
short-title: requestStorageAccess()
slug: Web/API/Document/requestStorageAccess
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{APIRef("Storage Access API")}}

Die **`requestStorageAccess()`**-Methode des [`Document`](/de/docs/Web/API/Document)-Interfaces ermöglicht es Inhalten, die in einem Drittanbieter-Kontext geladen sind (d. h. eingebettet in einem {{htmlelement("iframe")}}), Zugriff auf [Drittanbieter-Cookies](/de/docs/Web/Privacy/Third-party_cookies) und [nicht partitionierten Zustand](/de/docs/Web/Privacy/State_Partitioning#state_partitioning) anzufordern. Dies ist relevant für User Agents, die standardmäßig den Zugriff auf Drittanbieter- und [nicht partitionierte](/de/docs/Web/API/Storage_Access_API#unpartitioned_versus_partitioned_cookies) Cookies blockieren, um die Privatsphäre zu verbessern (z. B. um Tracking zu verhindern), und ist Teil der [Storage Access API](/de/docs/Web/API/Storage_Access_API).

Um zu überprüfen, ob die Berechtigung zum Zugriff auf Drittanbieter-Cookies bereits gewährt wurde, können Sie [`Permissions.query()`](/de/docs/Web/API/Permissions/query) aufrufen und den Funktionsnamen `"storage-access"` angeben.

> [!NOTE]
> Die Nutzung dieser Funktion kann durch eine auf Ihrem Server gesetzte {{httpheader("Permissions-Policy/storage-access", "storage-access")}} [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Permissions_Policy) blockiert werden. Darüber hinaus muss das Dokument zusätzliche browserspezifische Überprüfungen bestehen, wie z. B. Positivlisten, Negativlisten, ON-Device-Klassifizierungen, Benutzereinstellungen, Anti-[Clickjacking](/de/docs/Glossary/Clickjacking)-Heuristiken oder das Anfordern einer expliziten Erlaubnis vom Benutzer.

## Syntax

```js-nolint
requestStorageAccess()
requestStorageAccess(types)
```

### Parameter

- `types` {{optional_inline}}

  - : Ein Objekt, das Eigenschaften enthält, die steuern, welcher nicht partitionierte Zustand zugänglich gemacht wird. Wenn nicht angegeben, ist der Standardwert der Eigenschaft `false`. Verfügbare Eigenschaften sind:

    - `all`
      - : Ein Boolean, der angibt, dass alle möglichen nicht partitionierten Zustände zugänglich gemacht werden sollten.
    - `cookies`
      - : Ein Boolean, der angibt, dass Drittanbieter-Cookies zugänglich gemacht werden sollten.
    - `sessionStorage`
      - : Ein Boolean, der angibt, dass [`StorageAccessHandle.sessionStorage`](/de/docs/Web/API/StorageAccessHandle/sessionStorage) zugänglich gemacht werden sollte.
    - `localStorage`
      - : Ein Boolean, der angibt, dass [`StorageAccessHandle.localStorage`](/de/docs/Web/API/StorageAccessHandle/localStorage) zugänglich gemacht werden sollte.
    - `indexedDB`
      - : Ein Boolean, der angibt, dass [`StorageAccessHandle.indexedDB`](/de/docs/Web/API/StorageAccessHandle/indexedDB) zugänglich gemacht werden sollte.
    - `locks`
      - : Ein Boolean, der angibt, dass [`StorageAccessHandle.locks`](/de/docs/Web/API/StorageAccessHandle/locks) zugänglich gemacht werden sollte.
    - `caches`
      - : Ein Boolean, der angibt, dass [`StorageAccessHandle.caches`](/de/docs/Web/API/StorageAccessHandle/caches) zugänglich gemacht werden sollte.
    - `getDirectory`
      - : Ein Boolean, der angibt, dass [`StorageAccessHandle.getDirectory()`](/de/docs/Web/API/StorageAccessHandle/getDirectory) zugänglich gemacht werden sollte.
    - `estimate`
      - : Ein Boolean, der angibt, dass [`StorageAccessHandle.estimate()`](/de/docs/Web/API/StorageAccessHandle/estimate) zugänglich gemacht werden sollte.
    - `createObjectURL`
      - : Ein Boolean, der angibt, dass [`StorageAccessHandle.createObjectURL()`](/de/docs/Web/API/StorageAccessHandle/createObjectURL) zugänglich gemacht werden sollte.
    - `revokeObjectURL`
      - : Ein Boolean, der angibt, dass [`StorageAccessHandle.revokeObjectURL()`](/de/docs/Web/API/StorageAccessHandle/revokeObjectURL) zugänglich gemacht werden sollte.
    - `BroadcastChannel`
      - : Ein Boolean, der angibt, dass [`StorageAccessHandle.BroadcastChannel()`](/de/docs/Web/API/StorageAccessHandle/BroadcastChannel) zugänglich gemacht werden sollte.
    - `SharedWorker`
      - : Ein Boolean, der angibt, dass [`StorageAccessHandle.SharedWorker()`](/de/docs/Web/API/StorageAccessHandle/SharedWorker) zugänglich gemacht werden sollte.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit `undefined` erfüllt wird, wenn der Zugriff auf Drittanbieter-Cookies gewährt wurde und kein `types`-Parameter bereitgestellt wurde, oder mit [`StorageAccessHandle`](/de/docs/Web/API/StorageAccessHandle) erfüllt wird, wenn der Zugriff auf nicht partitionierten Zustand, der durch den `types`-Parameter angefordert wurde, gewährt wurde, und das verworfen wird, wenn der Zugriff abgelehnt wurde.

`requestStorageAccess()`-Anfragen werden automatisch abgelehnt, es sei denn, der eingebettete Inhalt verarbeitet aktuell eine Benutzeraktion wie ein Tippen oder Klicken ([transiente Aktivierung](/de/docs/Glossary/transient_activation)), oder die Erlaubnis wurde bereits zuvor gewährt. Wenn die Erlaubnis nicht zuvor gewährt wurde, müssen sie innerhalb eines benutzergestengestützten Ereignis-Handlers ausgeführt werden. Das Verhalten der Benutzeraktion hängt vom Status des Promises ab:

- Wenn das Promise aufgelöst wird (d. h. wenn die Erlaubnis erteilt wurde), wird die Benutzeraktion nicht verbraucht, sodass das Skript anschließend APIs aufrufen kann, die eine Benutzeraktion erfordern.
- Wenn das Promise abgelehnt wird (d. h. die Erlaubnis wurde nicht erteilt), wird die Benutzeraktion verbraucht, sodass das Skript nichts machen kann, was eine Aktion erfordert. Dies ist ein beabsichtigter Schutz gegen Missbrauch – es verhindert, dass Skripte `requestStorageAccess()` in einer Schleife aufrufen, bis der Benutzer die Aufforderung akzeptiert.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn:
    - Das aktuelle [`Document`](/de/docs/Web/API/Document) noch nicht aktiv ist.
    - Der `types`-Parameter angegeben ist und alle seine Eigenschaften `false` sind.
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn:
    - Das Fenster des Dokuments kein [sicherer Kontext](/de/docs/Web/Security/Secure_Contexts) ist.
    - Die Nutzung durch eine {{httpheader("Permissions-Policy/storage-access", "storage-access")}} [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Permissions_Policy) blockiert wird.
    - Das Dokument oder das oberste Dokument einen `null`-Ursprung hat.
    - Das einbettende {{htmlelement("iframe")}} im Sandbox-Modus ist und das `allow-storage-access-by-user-activation`-Token nicht gesetzt ist.
    - Die Nutzung durch die Erlaubnisanforderung des Benutzeragents zur Nutzung der API abgelehnt wird.

## Beispiele

```js
document.requestStorageAccess().then(
  () => {
    console.log("cookie access granted");
  },
  () => {
    console.log("cookie access denied");
  },
);

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

- [`Document.hasStorageAccess()`](/de/docs/Web/API/Document/hasStorageAccess), [`Document.hasUnpartitionedCookieAccess()`](/de/docs/Web/API/Document/hasUnpartitionedCookieAccess), [`Document.requestStorageAccessFor()`](/de/docs/Web/API/Document/requestStorageAccessFor)
- [Verwendung der Storage Access API](/de/docs/Web/API/Storage_Access_API/Using)
- [Einführung in die Storage Access API](https://webkit.org/blog/8124/introducing-storage-access-api/) (WebKit Blog)
