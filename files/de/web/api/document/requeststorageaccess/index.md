---
title: "Dokument: requestStorageAccess() Methode"
short-title: requestStorageAccess()
slug: Web/API/Document/requestStorageAccess
l10n:
  sourceCommit: 775df1c62a1cbe555c4374ff9122d4ef15bd6f60
---

{{APIRef("Storage Access API")}}

Die **`requestStorageAccess()`** Methode des [`Document`](/de/docs/Web/API/Document) Interface ermöglicht es, Inhalten, die in einem Drittanbieter-Kontext geladen sind (d. h. eingebettet in einem {{htmlelement("iframe")}}), Zugriff auf [Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies) und [nicht partitionierten Status](/de/docs/Web/Privacy/Guides/State_Partitioning#state_partitioning) anzufordern. Dies ist relevant für Benutzeragenten, die standardmäßig den Zugriff auf Drittanbieter-[nicht partitionierte](/de/docs/Web/API/Storage_Access_API#unpartitioned_versus_partitioned_cookies) Cookies blockieren, um die Privatsphäre zu verbessern (z. B. um Tracking zu verhindern), und ist Teil der [Storage Access API](/de/docs/Web/API/Storage_Access_API).

Um zu überprüfen, ob die Erlaubnis zum Zugriff auf Drittanbieter-Cookies bereits erteilt wurde, können Sie [`Permissions.query()`](/de/docs/Web/API/Permissions/query) aufrufen und den Feature-Namen `"storage-access"` angeben.

> [!NOTE]
> Die Nutzung dieser Funktion könnte durch eine {{httpheader("Permissions-Policy/storage-access", "storage-access")}} [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Permissions_Policy) blockiert werden, die auf Ihrem Server gesetzt ist. Außerdem muss das Dokument zusätzliche browserspezifische Prüfungen bestehen, wie Whitelists, Blacklists, Geräteklassifizierungen, Benutzereinstellungen, Anti-[Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking) Heuristiken oder die Aufforderung an den Benutzer, eine ausdrückliche Erlaubnis zu erteilen.

## Syntax

```js-nolint
requestStorageAccess()
requestStorageAccess(types)
```

### Parameter

- `types` {{optional_inline}}

  - : Ein Objekt, das Eigenschaften enthält, die steuern, welcher nicht partitionierte Status zugänglich gemacht wird. Wenn nicht angegeben, ist der Standardwert der Eigenschaft `false`. Verfügbare Eigenschaften sind wie folgt:

    - `all`
      - : Ein boolescher Wert, der angibt, dass alle möglichen nicht partitionierten Zustände zugänglich gemacht werden sollten.
    - `cookies`
      - : Ein boolescher Wert, der angibt, dass Drittanbieter-Cookies zugänglich gemacht werden sollten.
    - `sessionStorage`
      - : Ein boolescher Wert, der angibt, dass [`StorageAccessHandle.sessionStorage`](/de/docs/Web/API/StorageAccessHandle/sessionStorage) zugänglich gemacht werden sollte.
    - `localStorage`
      - : Ein boolescher Wert, der angibt, dass [`StorageAccessHandle.localStorage`](/de/docs/Web/API/StorageAccessHandle/localStorage) zugänglich gemacht werden sollte.
    - `indexedDB`
      - : Ein boolescher Wert, der angibt, dass [`StorageAccessHandle.indexedDB`](/de/docs/Web/API/StorageAccessHandle/indexedDB) zugänglich gemacht werden sollte.
    - `locks`
      - : Ein boolescher Wert, der angibt, dass [`StorageAccessHandle.locks`](/de/docs/Web/API/StorageAccessHandle/locks) zugänglich gemacht werden sollte.
    - `caches`
      - : Ein boolescher Wert, der angibt, dass [`StorageAccessHandle.caches`](/de/docs/Web/API/StorageAccessHandle/caches) zugänglich gemacht werden sollte.
    - `getDirectory`
      - : Ein boolescher Wert, der angibt, dass [`StorageAccessHandle.getDirectory()`](/de/docs/Web/API/StorageAccessHandle/getDirectory) zugänglich gemacht werden sollte.
    - `estimate`
      - : Ein boolescher Wert, der angibt, dass [`StorageAccessHandle.estimate()`](/de/docs/Web/API/StorageAccessHandle/estimate) zugänglich gemacht werden sollte.
    - `createObjectURL`
      - : Ein boolescher Wert, der angibt, dass [`StorageAccessHandle.createObjectURL()`](/de/docs/Web/API/StorageAccessHandle/createObjectURL) zugänglich gemacht werden sollte.
    - `revokeObjectURL`
      - : Ein boolescher Wert, der angibt, dass [`StorageAccessHandle.revokeObjectURL()`](/de/docs/Web/API/StorageAccessHandle/revokeObjectURL) zugänglich gemacht werden sollte.
    - `BroadcastChannel`
      - : Ein boolescher Wert, der angibt, dass [`StorageAccessHandle.BroadcastChannel()`](/de/docs/Web/API/StorageAccessHandle/BroadcastChannel) zugänglich gemacht werden sollte.
    - `SharedWorker`
      - : Ein boolescher Wert, der angibt, dass [`StorageAccessHandle.SharedWorker()`](/de/docs/Web/API/StorageAccessHandle/SharedWorker) zugänglich gemacht werden sollte.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit `undefined` erfüllt wird, wenn der Zugriff auf Drittanbieter-Cookies gewährt wurde und kein `types` Parameter bereitgestellt wurde, wird mit [`StorageAccessHandle`](/de/docs/Web/API/StorageAccessHandle) erfüllt, wenn der Zugriff auf einen nicht partitionierten Status, der durch den `types` Parameter angefordert wurde, gewährt wurde, und wird abgelehnt, wenn der Zugriff verweigert wurde.

`requestStorageAccess()` Anfragen werden automatisch verweigert, es sei denn, der eingebettete Inhalt verarbeitet derzeit eine Benutzergeste wie einen Tap oder Klick ({{Glossary("transient_activation", "transiente Aktivierung")}}), oder die Erlaubnis wurde bereits zuvor gewährt. Wenn die Erlaubnis nicht zuvor gewährt wurde, müssen sie innerhalb eines benutzergesteuerten Ereignishandlers ausgeführt werden. Das Benutzergestenverhalten hängt vom Zustand des Versprechens ab:

- Wenn das Versprechen eingelöst wird (d. h., wenn die Erlaubnis erteilt wurde), wurde die Benutzergeste nicht verbraucht, sodass das Skript anschließend APIs aufrufen kann, die eine Benutzergeste erfordern.
- Wenn das Versprechen abgelehnt wird (d. h. die Erlaubnis wurde nicht erteilt), wurde die Benutzergeste verbraucht, sodass das Skript nichts tun kann, was eine Geste erfordert. Dies ist ein absichtlicher Schutz gegen Missbrauch — es verhindert, dass Skripte `requestStorageAccess()` in einer Schleife aufrufen, bis der Benutzer die Aufforderung akzeptiert.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn:
    - Das aktuelle [`Document`](/de/docs/Web/API/Document) noch nicht aktiv ist.
    - Der `types` Parameter angegeben ist und alle seine Eigenschaften `false` sind.
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn:
    - Das Fenster des Dokuments kein [sicherer Kontext](/de/docs/Web/Security/Secure_Contexts) ist.
    - Die Nutzung durch eine {{httpheader("Permissions-Policy/storage-access", "storage-access")}} [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Permissions_Policy) blockiert wird.
    - Das Dokument oder das übergeordnete Dokument hat einen `null` Ursprung.
    - Das einbettende {{htmlelement("iframe")}} ist in einer Sandbox, und das `allow-storage-access-by-user-activation` Token ist nicht gesetzt.
    - Die Nutzung wird durch die Berechtigungsanfrage des Benutzeragenten zur Verwendung der API verweigert.

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
- [Einführung in die Storage Access API](https://webkit.org/blog/8124/introducing-storage-access-api/) (WebKit Blog)
