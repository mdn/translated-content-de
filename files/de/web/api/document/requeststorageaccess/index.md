---
title: "Dokument: Methode requestStorageAccess()"
short-title: requestStorageAccess()
slug: Web/API/Document/requestStorageAccess
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("Storage Access API")}}

Die **`requestStorageAccess()`**-Methode des [`Document`](/de/docs/Web/API/Document)-Interfaces ermöglicht es Inhalten, die in einem Drittanbieter-Kontext geladen sind (z.B. eingebettet in einem {{htmlelement("iframe")}}), den Zugriff auf [Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies) und [unpartitionierten Zustand](/de/docs/Web/Privacy/Guides/State_Partitioning#state_partitioning) anzufordern. Dies ist relevant für Benutzeragenten, die standardmäßig den Zugriff auf Drittanbieter-[unpartitionierte](/de/docs/Web/API/Storage_Access_API#unpartitioned_versus_partitioned_cookies) Cookies blockieren, um die Privatsphäre zu verbessern (z.B. um Tracking zu verhindern), und ist Teil der [Storage Access API](/de/docs/Web/API/Storage_Access_API).

Um zu prüfen, ob die Erlaubnis zum Zugriff auf Drittanbieter-Cookies bereits erteilt wurde, können Sie [`Permissions.query()`](/de/docs/Web/API/Permissions/query) aufrufen, wobei der Funktionsname `"storage-access"` spezifiziert wird.

> [!NOTE]
> Die Nutzung dieser Funktion kann von einer auf Ihrem Server gesetzten {{httpheader("Permissions-Policy/storage-access", "storage-access")}} [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) blockiert werden. Zudem muss das Dokument zusätzliche browser-spezifische Überprüfungen bestehen, wie z.B. Whitelists, Blacklists, geräteinterne Klassifikationen, Benutzereinstellungen, Anti-[Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking) Heuristiken oder das Abfragen der ausdrücklichen Zustimmung des Benutzers.

## Syntax

```js-nolint
requestStorageAccess()
requestStorageAccess(types)
```

### Parameter

- `types` {{optional_inline}}

  - : Ein Objekt, das Eigenschaften enthält, die steuern, welcher unpartitionierte Zustand zugänglich gemacht wird. Wenn nicht angegeben, ist der Standardwert der Eigenschaft `false`. Verfügbare Eigenschaften sind wie folgt:

    - `all`
      - : Ein Boolean, der spezifiziert, dass alle möglichen unpartitionierten Zustände zugänglich gemacht werden sollen.
    - `cookies`
      - : Ein Boolean, der spezifiziert, dass Drittanbieter-Cookies zugänglich gemacht werden sollen.
    - `sessionStorage`
      - : Ein Boolean, der spezifiziert, dass [`StorageAccessHandle.sessionStorage`](/de/docs/Web/API/StorageAccessHandle/sessionStorage) zugänglich gemacht werden soll.
    - `localStorage`
      - : Ein Boolean, der spezifiziert, dass [`StorageAccessHandle.localStorage`](/de/docs/Web/API/StorageAccessHandle/localStorage) zugänglich gemacht werden soll.
    - `indexedDB`
      - : Ein Boolean, der spezifiziert, dass [`StorageAccessHandle.indexedDB`](/de/docs/Web/API/StorageAccessHandle/indexedDB) zugänglich gemacht werden soll.
    - `locks`
      - : Ein Boolean, der spezifiziert, dass [`StorageAccessHandle.locks`](/de/docs/Web/API/StorageAccessHandle/locks) zugänglich gemacht werden soll.
    - `caches`
      - : Ein Boolean, der spezifiziert, dass [`StorageAccessHandle.caches`](/de/docs/Web/API/StorageAccessHandle/caches) zugänglich gemacht werden soll.
    - `getDirectory`
      - : Ein Boolean, der spezifiziert, dass [`StorageAccessHandle.getDirectory()`](/de/docs/Web/API/StorageAccessHandle/getDirectory) zugänglich gemacht werden soll.
    - `estimate`
      - : Ein Boolean, der spezifiziert, dass [`StorageAccessHandle.estimate()`](/de/docs/Web/API/StorageAccessHandle/estimate) zugänglich gemacht werden soll.
    - `createObjectURL`
      - : Ein Boolean, der spezifiziert, dass [`StorageAccessHandle.createObjectURL()`](/de/docs/Web/API/StorageAccessHandle/createObjectURL) zugänglich gemacht werden soll.
    - `revokeObjectURL`
      - : Ein Boolean, der spezifiziert, dass [`StorageAccessHandle.revokeObjectURL()`](/de/docs/Web/API/StorageAccessHandle/revokeObjectURL) zugänglich gemacht werden soll.
    - `BroadcastChannel`
      - : Ein Boolean, der spezifiziert, dass [`StorageAccessHandle.BroadcastChannel()`](/de/docs/Web/API/StorageAccessHandle/BroadcastChannel) zugänglich gemacht werden soll.
    - `SharedWorker`
      - : Ein Boolean, der spezifiziert, dass [`StorageAccessHandle.SharedWorker()`](/de/docs/Web/API/StorageAccessHandle/SharedWorker) zugänglich gemacht werden soll.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit `undefined` erfüllt wird, wenn der Zugriff auf Drittanbieter-Cookies gewährt wurde und kein `types`-Parameter bereitgestellt wurde, erfüllt wird mit [`StorageAccessHandle`](/de/docs/Web/API/StorageAccessHandle), wenn der Zugriff auf den vom `types`-Parameter angeforderten unpartitionierten Zustand gewährt wurde, und abgewiesen wird, wenn der Zugriff verweigert wurde.

`requestStorageAccess()`-Anfragen werden automatisch abgelehnt, es sei denn, der eingebettete Inhalt verarbeitet derzeit eine Benutzeraktion wie einen Tipp oder Klick ({{Glossary("transient_activation", "transient activation")}}), oder die Erlaubnis wurde bereits zuvor erteilt. Wenn die Erlaubnis nicht zuvor erteilt wurde, müssen sie innerhalb eines auf Benutzeraktionen basierenden Ereignishandlers ausgeführt werden. Das Verhalten der Benutzeraktion hängt vom Zustand des Versprechens ab:

- Wenn das Versprechen erfüllt wird (d.h. wenn die Erlaubnis erteilt wurde), wurde die Benutzeraktion nicht konsumiert, sodass das Skript anschließend APIs aufrufen kann, die eine Benutzeraktion erfordern.
- Wenn das Versprechen abgelehnt wird (d.h. die Erlaubnis wurde nicht erteilt), wurde die Benutzeraktion konsumiert, sodass das Skript nichts tun kann, das eine Aktion erfordert. Dies ist ein beabsichtigter Schutz gegen Missbrauch — es verhindert, dass Skripte `requestStorageAccess()` in einer Schleife aufrufen, bis der Benutzer das Eingabeaufforderung akzeptiert.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn:
    - Das aktuelle [`Document`](/de/docs/Web/API/Document) noch nicht aktiv ist.
    - Der `types`-Parameter angegeben ist und alle seine Eigenschaften `false` sind.
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn:
    - Das Fenster des Dokuments kein [sicherer Kontext](/de/docs/Web/Security/Secure_Contexts) ist.
    - Die Nutzung durch eine {{httpheader("Permissions-Policy/storage-access", "storage-access")}} [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) blockiert wird.
    - Das Dokument oder das Top-Level-Dokument einen `null`-Ursprung hat.
    - Das einbettende {{htmlelement("iframe")}} im Sandbox-Modus ist und das Token `allow-storage-access-by-user-activation` nicht gesetzt ist.
    - Die Nutzung durch die Berechtigungsanforderung des Benutzeragenten zur Nutzung der API verweigert wird.

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
> Siehe [Using the Storage Access API](/de/docs/Web/API/Storage_Access_API/Using) für ein vollständigeres Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Document.hasStorageAccess()`](/de/docs/Web/API/Document/hasStorageAccess), [`Document.hasUnpartitionedCookieAccess()`](/de/docs/Web/API/Document/hasUnpartitionedCookieAccess), [`Document.requestStorageAccessFor()`](/de/docs/Web/API/Document/requestStorageAccessFor)
- [Using the Storage Access API](/de/docs/Web/API/Storage_Access_API/Using)
- [Introducing Storage Access API](https://webkit.org/blog/8124/introducing-storage-access-api/) (WebKit-Blog)
