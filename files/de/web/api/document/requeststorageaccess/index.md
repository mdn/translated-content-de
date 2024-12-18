---
title: "Dokumentation: Methode requestStorageAccess()"
short-title: requestStorageAccess()
slug: Web/API/Document/requestStorageAccess
l10n:
  sourceCommit: be3f184d89979d413204b8f9cbecfc8dd0e5ecf9
---

{{APIRef("Storage Access API")}}

Die **`requestStorageAccess()`**-Methode des [`Document`](/de/docs/Web/API/Document)-Interfaces ermöglicht es, in einem Drittanbieter-Kontext geladene Inhalte (d. h. eingebettet in einem {{htmlelement("iframe")}}) den Zugriff auf [Drittanbieter-Cookies](/de/docs/Web/Privacy/Third-party_cookies) und [unpartitionierten Status](/de/docs/Web/Privacy/State_Partitioning#state_partitioning) anzufordern. Dies ist relevant für Benutzeragenten, die standardmäßig den Zugriff auf Drittanbieter-[unpartitionierte](/de/docs/Web/API/Storage_Access_API#unpartitioned_versus_partitioned_cookies) Cookies zur Verbesserung der Privatsphäre blockieren (z. B. um Tracking zu verhindern), und ist Teil der [Storage Access API](/de/docs/Web/API/Storage_Access_API).

Um zu prüfen, ob bereits die Berechtigung zum Zugriff auf Drittanbieter-Cookies gewährt wurde, kann [`Permissions.query()`](/de/docs/Web/API/Permissions/query) mit dem Feature-Namen `"storage-access"` aufgerufen werden.

> [!NOTE]
> Die Nutzung dieses Features kann durch eine {{httpheader("Permissions-Policy/storage-access", "storage-access")}} [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Permissions_Policy), die auf Ihrem Server festgelegt ist, blockiert werden. Zusätzlich muss das Dokument weitere, browserspezifische Prüfungen bestehen, wie z.B. Whitelists, Blacklists, Klassifikationen auf dem Gerät, Benutzereinstellungen, Anti-[Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking)-Heuristiken oder die Aufforderung an den Benutzer, eine explizite Berechtigung zu erteilen.

## Syntax

```js-nolint
requestStorageAccess()
requestStorageAccess(types)
```

### Parameter

- `types` {{optional_inline}}

  - : Ein Objekt, das Eigenschaften enthält, die regulieren, welcher unpartitionierte Zustand zugänglich gemacht wird. Wenn nicht angegeben, lautet der Standardwert der Eigenschaft `false`. Die verfügbaren Eigenschaften sind wie folgt:

    - `all`
      - : Ein boolean, der angibt, dass alle möglichen unpartitionierten Zustände zugänglich gemacht werden sollen.
    - `cookies`
      - : Ein boolean, der angibt, dass Drittanbieter-Cookies zugänglich gemacht werden sollen.
    - `sessionStorage`
      - : Ein boolean, der angibt, dass [`StorageAccessHandle.sessionStorage`](/de/docs/Web/API/StorageAccessHandle/sessionStorage) zugänglich gemacht werden soll.
    - `localStorage`
      - : Ein boolean, der angibt, dass [`StorageAccessHandle.localStorage`](/de/docs/Web/API/StorageAccessHandle/localStorage) zugänglich gemacht werden soll.
    - `indexedDB`
      - : Ein boolean, der angibt, dass [`StorageAccessHandle.indexedDB`](/de/docs/Web/API/StorageAccessHandle/indexedDB) zugänglich gemacht werden soll.
    - `locks`
      - : Ein boolean, der angibt, dass [`StorageAccessHandle.locks`](/de/docs/Web/API/StorageAccessHandle/locks) zugänglich gemacht werden soll.
    - `caches`
      - : Ein boolean, der angibt, dass [`StorageAccessHandle.caches`](/de/docs/Web/API/StorageAccessHandle/caches) zugänglich gemacht werden soll.
    - `getDirectory`
      - : Ein boolean, der angibt, dass [`StorageAccessHandle.getDirectory()`](/de/docs/Web/API/StorageAccessHandle/getDirectory) zugänglich gemacht werden soll.
    - `estimate`
      - : Ein boolean, der angibt, dass [`StorageAccessHandle.estimate()`](/de/docs/Web/API/StorageAccessHandle/estimate) zugänglich gemacht werden soll.
    - `createObjectURL`
      - : Ein boolean, der angibt, dass [`StorageAccessHandle.createObjectURL()`](/de/docs/Web/API/StorageAccessHandle/createObjectURL) zugänglich gemacht werden soll.
    - `revokeObjectURL`
      - : Ein boolean, der angibt, dass [`StorageAccessHandle.revokeObjectURL()`](/de/docs/Web/API/StorageAccessHandle/revokeObjectURL) zugänglich gemacht werden soll.
    - `BroadcastChannel`
      - : Ein boolean, der angibt, dass [`StorageAccessHandle.BroadcastChannel()`](/de/docs/Web/API/StorageAccessHandle/BroadcastChannel) zugänglich gemacht werden soll.
    - `SharedWorker`
      - : Ein boolean, der angibt, dass [`StorageAccessHandle.SharedWorker()`](/de/docs/Web/API/StorageAccessHandle/SharedWorker) zugänglich gemacht werden soll.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit `undefined` erfüllt wird, wenn der Zugriff auf Drittanbieter-Cookies gewährt wurde und kein `types`-Parameter bereitgestellt wurde, erfüllt mit [`StorageAccessHandle`](/de/docs/Web/API/StorageAccessHandle), wenn der Zugriff auf den durch den `types`-Parameter angeforderten unpartitionierten Zustand gewährt wurde, und abgelehnt wird, wenn der Zugriff verweigert wurde.

`requestStorageAccess()`-Anfragen werden automatisch abgelehnt, es sei denn, der eingebettete Inhalt verarbeitet derzeit eine Benutzerinteraktion wie einen Tipp oder Klick ({{Glossary("transient_activation", "transiente Aktivierung")}}), oder die Erlaubnis wurde bereits zuvor erteilt. Falls die Erlaubnis zuvor nicht erteilt wurde, müssen sie innerhalb eines benutzergesteuerten Ereignis-Handlers ausgeführt werden. Das Verhalten des Benutzer-Gesten hängt vom Zustand des Promise ab:

- Wenn das Promise erfüllt wird (d. h. wenn die Berechtigung erteilt wurde), wurde die Benutzer-Geste nicht verbraucht, sodass das Skript anschließend APIs aufrufen kann, die eine Benutzer-Geste erfordern.
- Wenn das Promise abgelehnt wird (d. h. die Berechtigung wurde nicht erteilt), wurde die Benutzer-Geste verbraucht, sodass das Skript nichts tun kann, das eine Geste erfordert. Dies ist ein absichtlicher Schutz gegen Missbrauch — es verhindert, dass Skripte `requestStorageAccess()` in einer Schleife aufrufen, bis der Benutzer das Prompt akzeptiert.

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
    - Das einbettende {{htmlelement("iframe")}} gesandboxed ist und das `allow-storage-access-by-user-activation`-Token nicht gesetzt ist.
    - Die Nutzung durch die Erlaubnisanfrage des Benutzeragenten zur Nutzung der API verweigert wird.

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
- [Einführung der Storage Access API](https://webkit.org/blog/8124/introducing-storage-access-api/) (WebKit Blog)
