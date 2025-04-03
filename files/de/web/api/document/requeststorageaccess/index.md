---
title: "Dokument: requestStorageAccess()-Methode"
short-title: requestStorageAccess()
slug: Web/API/Document/requestStorageAccess
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{APIRef("Storage Access API")}}

Die **`requestStorageAccess()`**-Methode der [`Document`](/de/docs/Web/API/Document)-Schnittstelle ermöglicht es Inhalten, die in einem Drittanbieter-Kontext geladen sind (d.h. eingebettet in einem {{htmlelement("iframe")}}), Zugriff auf [Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies) und unpartitionierten [Status](/de/docs/Web/Privacy/Guides/State_Partitioning#state_partitioning) zu beantragen. Dies ist relevant für Benutzeragenten, die standardmäßig den Zugriff auf Drittanbieter-Cookies blockieren, um die Privatsphäre zu verbessern (z. B. um Tracking zu verhindern) und ist Teil der [Storage Access API](/de/docs/Web/API/Storage_Access_API).

Um zu überprüfen, ob die Erlaubnis zum Zugriff auf Drittanbieter-Cookies bereits erteilt wurde, können Sie [`Permissions.query()`](/de/docs/Web/API/Permissions/query) aufrufen und dabei den Funktionsnamen `"storage-access"` angeben.

> [!NOTE]
> Die Nutzung dieser Funktion kann durch eine auf Ihrem Server festgelegte [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy), {{httpheader("Permissions-Policy/storage-access", "storage-access")}}, blockiert werden. Zusätzlich muss das Dokument weitere browserspezifische Überprüfungen bestehen, wie Whitelists, Blacklists, geräteinterne Klassifizierungen, Benutzereinstellungen, Anti-[Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking)-Heuristiken oder das Anfordern der ausdrücklichen Zustimmung des Benutzers.

## Syntax

```js-nolint
requestStorageAccess()
requestStorageAccess(types)
```

### Parameter

- `types` {{optional_inline}}

  - : Ein Objekt, das Eigenschaften enthält, die steuern, welcher unpartitionierte Status zugänglich gemacht wird. Wenn nicht angegeben, ist der Standardwert der Eigenschaft `false`. Verfügbare Eigenschaften sind wie folgt:

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

Ein {{jsxref("Promise")}}, das mit `undefined` erfüllt wird, wenn der Zugriff auf Drittanbieter-Cookies gewährt wurde und kein `types`-Parameter bereitgestellt wurde, erfüllt wird mit [`StorageAccessHandle`](/de/docs/Web/API/StorageAccessHandle), wenn der Zugriff auf den im `types`-Parameter angeforderten unpartitionierten Zustand gewährt wurde, und abgelehnt wird, wenn der Zugriff verweigert wurde.

`requestStorageAccess()`-Anfragen werden automatisch abgelehnt, es sei denn, der eingebettete Inhalt verarbeitet gerade eine Benutzeraktion wie einen Tipp oder Klick ({{Glossary("transient_activation", "vorübergehende Aktivierung")}}), oder die Erlaubnis wurde bereits zuvor erteilt. Wenn die Erlaubnis nicht zuvor erteilt wurde, müssen sie innerhalb eines benutzergesteuerten Ereignishandlers ausgeführt werden. Das Benutzeraktionsverhalten hängt vom Zustand des Versprechens ab:

- Wenn das Versprechen erfüllt wird (d.h. wenn die Erlaubnis erteilt wurde), wurde die Benutzeraktion nicht verbraucht, sodass das Skript anschließend APIs aufrufen kann, die eine Benutzeraktion erfordern.
- Wenn das Versprechen abgelehnt wird (d.h. die Erlaubnis wurde nicht erteilt), wurde die Benutzeraktion verbraucht, sodass das Skript nichts tun kann, was eine Aktion erfordert. Dies ist ein beabsichtigter Schutz gegen Missbrauch — es verhindert, dass Skripte `requestStorageAccess()` in einer Schleife aufrufen, bis der Benutzer die Eingabeaufforderung akzeptiert.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst, wenn:
    - Das aktuelle [`Document`](/de/docs/Web/API/Document) noch nicht aktiv ist.
    - Der `types`-Parameter bereitgestellt wird und alle seine Eigenschaften `false` sind.
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst, wenn:
    - Das Fenster des Dokuments ist kein [sicherer Kontext](/de/docs/Web/Security/Secure_Contexts).
    - Die Nutzung wird durch eine {{httpheader("Permissions-Policy/storage-access", "storage-access")}} [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy) blockiert.
    - Das Dokument oder das oberste Dokument hat einen `null`-Ursprung.
    - Das einbettende {{htmlelement("iframe")}} ist sandboxed, und das Token `allow-storage-access-by-user-activation` ist nicht gesetzt.
    - Die Nutzung wird durch die Berechtigungsanfrage des Benutzeragenten zur Nutzung der API verweigert.

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
> Siehe [Verwendung der Storage Access API](/de/docs/Web/API/Storage_Access_API/Using) für ein vollständigeren Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Document.hasStorageAccess()`](/de/docs/Web/API/Document/hasStorageAccess), [`Document.hasUnpartitionedCookieAccess()`](/de/docs/Web/API/Document/hasUnpartitionedCookieAccess), [`Document.requestStorageAccessFor()`](/de/docs/Web/API/Document/requestStorageAccessFor)
- [Verwendung der Storage Access API](/de/docs/Web/API/Storage_Access_API/Using)
- [Introducing Storage Access API](https://webkit.org/blog/8124/introducing-storage-access-api/) (WebKit-Blog)
