---
title: "Document: requestStorageAccess() Methode"
short-title: requestStorageAccess()
slug: Web/API/Document/requestStorageAccess
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{APIRef("Storage Access API")}}

Die **`requestStorageAccess()`** Methode der [`Document`](/de/docs/Web/API/Document) Schnittstelle ermöglicht es Inhalten, die in einem Drittanbieter-Kontext geladen werden (d. h. eingebettet in einem {{htmlelement("iframe")}}), den Zugriff auf [Drittanbieter-Cookies](/de/docs/Web/Privacy/Third-party_cookies) und [unpartitionierten Zustand](/de/docs/Web/Privacy/State_Partitioning#state_partitioning) anzufordern. Dies ist relevant für Benutzeragenten, die standardmäßig den Zugriff auf Drittanbieter-[unpartitionierte](/de/docs/Web/API/Storage_Access_API#unpartitioned_versus_partitioned_cookies) Cookies blockieren, um die Privatsphäre zu verbessern (z. B. um Tracking zu verhindern), und ist Teil der [Storage Access API](/de/docs/Web/API/Storage_Access_API).

Um zu überprüfen, ob bereits die Berechtigung zum Zugriff auf Drittanbieter-Cookies erteilt wurde, können Sie [`Permissions.query()`](/de/docs/Web/API/Permissions/query) aufrufen und den Funktionsnamen `"storage-access"` angeben.

> [!NOTE]
> Die Nutzung dieser Funktion kann durch eine {{httpheader("Permissions-Policy/storage-access", "storage-access")}} [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy), die auf Ihrem Server eingerichtet ist, blockiert werden. Darüber hinaus muss das Dokument zusätzliche, browserspezifische Prüfungen bestehen, wie z. B. Zulassungslisten, Sperrlisten, auf dem Gerät durchgeführte Klassifizierungen, Benutzereinstellungen, Anti-[Clickjacking](/de/docs/Glossary/Clickjacking) Heuristiken oder die explizite Einholung der Erlaubnis des Benutzers.

## Syntax

```js-nolint
requestStorageAccess()
requestStorageAccess(types)
```

### Parameter

- `types` {{optional_inline}}

  - : Ein Objekt, das Eigenschaften enthält, die steuern, welcher unpartitionierte Zustand zugänglich gemacht wird. Wird nichts angegeben, beträgt der Standardwert der Eigenschaft `false`. Verfügbare Eigenschaften sind wie folgt:

    - `all`
      - : Ein Boolean, der angibt, dass alle möglichen unpartitionierten Zustände zugänglich gemacht werden sollen.
    - `cookies`
      - : Ein Boolean, der angibt, dass Drittanbieter-Cookies zugänglich gemacht werden sollen.
    - `sessionStorage`
      - : Ein Boolean, der angibt, dass [`StorageAccessHandle.sessionStorage`](/de/docs/Web/API/StorageAccessHandle/sessionStorage) zugänglich gemacht werden soll.
    - `localStorage`
      - : Ein Boolean, der angibt, dass [`StorageAccessHandle.localStorage`](/de/docs/Web/API/StorageAccessHandle/localStorage) zugänglich gemacht werden soll.
    - `indexedDB`
      - : Ein Boolean, der angibt, dass [`StorageAccessHandle.indexedDB`](/de/docs/Web/API/StorageAccessHandle/indexedDB) zugänglich gemacht werden soll.
    - `locks`
      - : Ein Boolean, der angibt, dass [`StorageAccessHandle.locks`](/de/docs/Web/API/StorageAccessHandle/locks) zugänglich gemacht werden soll.
    - `caches`
      - : Ein Boolean, der angibt, dass [`StorageAccessHandle.caches`](/de/docs/Web/API/StorageAccessHandle/caches) zugänglich gemacht werden soll.
    - `getDirectory`
      - : Ein Boolean, der angibt, dass [`StorageAccessHandle.getDirectory()`](/de/docs/Web/API/StorageAccessHandle/getDirectory) zugänglich gemacht werden soll.
    - `estimate`
      - : Ein Boolean, der angibt, dass [`StorageAccessHandle.estimate()`](/de/docs/Web/API/StorageAccessHandle/estimate) zugänglich gemacht werden soll.
    - `createObjectURL`
      - : Ein Boolean, der angibt, dass [`StorageAccessHandle.createObjectURL()`](/de/docs/Web/API/StorageAccessHandle/createObjectURL) zugänglich gemacht werden soll.
    - `revokeObjectURL`
      - : Ein Boolean, der angibt, dass [`StorageAccessHandle.revokeObjectURL()`](/de/docs/Web/API/StorageAccessHandle/revokeObjectURL) zugänglich gemacht werden soll.
    - `BroadcastChannel`
      - : Ein Boolean, der angibt, dass [`StorageAccessHandle.BroadcastChannel()`](/de/docs/Web/API/StorageAccessHandle/BroadcastChannel) zugänglich gemacht werden soll.
    - `SharedWorker`
      - : Ein Boolean, der angibt, dass [`StorageAccessHandle.SharedWorker()`](/de/docs/Web/API/StorageAccessHandle/SharedWorker) zugänglich gemacht werden soll.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit `undefined` erfüllt wird, wenn der Zugriff auf Drittanbieter-Cookies gewährt wurde und kein `types`-Parameter angegeben wurde, wird mit [`StorageAccessHandle`](/de/docs/Web/API/StorageAccessHandle) erfüllt, wenn der Zugriff auf den vom `types`-Parameter angeforderten unpartitionierten Zustand gewährt wurde, und wird abgelehnt, wenn der Zugriff verweigert wurde.

`requestStorageAccess()` Anfragen werden automatisch abgelehnt, es sei denn, der eingebettete Inhalt verarbeitet derzeit eine Benutzergeste wie einen Tipp oder Klick ([transiente Aktivierung](/de/docs/Glossary/transient_activation)) oder es wurde bereits zuvor die Erlaubnis erteilt. Wenn bislang keine Erlaubnis erteilt wurde, müssen sie innerhalb eines benutzergesteuerten Ereignis-Handlers ausgeführt werden. Das Verhalten der Benutzergeste hängt vom Status des Versprechens ab:

- Wenn das Versprechen aufgelöst wird (d. h. wenn die Erlaubnis erteilt wurde), wurde die Benutzergeste nicht verbraucht, sodass das Skript anschließend APIs aufrufen kann, die eine Benutzergeste erfordern.
- Wenn das Versprechen abgelehnt wird (d. h. die Erlaubnis wurde nicht erteilt), wurde die Benutzergeste verbraucht, sodass das Skript nichts tun kann, was eine Geste erfordert. Dies ist ein beabsichtigter Schutz gegen Missbrauch — es verhindert, dass Skripts `requestStorageAccess()` in einer Schleife aufrufen, bis der Benutzer die Eingabeaufforderung akzeptiert.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn:
    - Das aktuelle [`Document`](/de/docs/Web/API/Document) noch nicht aktiv ist.
    - Der `types`-Parameter angegeben wird und alle seine Eigenschaften `false` sind.
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn:
    - Das Fenster des Dokuments kein [sicherer Kontext](/de/docs/Web/Security/Secure_Contexts) ist.
    - Die Nutzung durch eine {{httpheader("Permissions-Policy/storage-access", "storage-access")}} [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy) blockiert wird.
    - Das Dokument oder das übergeordnete Dokument einen `null` Ursprung hat.
    - Das einbettende {{htmlelement("iframe")}} sandboxed ist und das `allow-storage-access-by-user-activation` Token nicht gesetzt ist.
    - Die Nutzung durch die Berechtigungsanfrage des Benutzeragenten, die API zu verwenden, verweigert wird.

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
> Sehen Sie [Verwendung der Storage Access API](/de/docs/Web/API/Storage_Access_API/Using) für ein vollständigeres Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Document.hasStorageAccess()`](/de/docs/Web/API/Document/hasStorageAccess), [`Document.hasUnpartitionedCookieAccess()`](/de/docs/Web/API/Document/hasUnpartitionedCookieAccess), [`Document.requestStorageAccessFor()`](/de/docs/Web/API/Document/requestStorageAccessFor)
- [Verwendung der Storage Access API](/de/docs/Web/API/Storage_Access_API/Using)
- [Einführung der Storage Access API](https://webkit.org/blog/8124/introducing-storage-access-api/) (WebKit Blog)
