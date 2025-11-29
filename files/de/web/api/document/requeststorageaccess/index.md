---
title: "Dokument: requestStorageAccess() Methode"
short-title: requestStorageAccess()
slug: Web/API/Document/requestStorageAccess
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("Storage Access API")}}

Die **`requestStorageAccess()`** Methode der [`Document`](/de/docs/Web/API/Document)-Schnittstelle ermöglicht es Inhalten, die in einem Drittanbieter-Kontext geladen werden (d.h. eingebettet in einem {{htmlelement("iframe")}}), den Zugriff auf [Third-Party-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies) und den [unpartitionierten Zustand](/de/docs/Web/Privacy/Guides/State_Partitioning#state_partitioning) anzufordern. Dies ist relevant für User Agents, die standardmäßig den Zugriff auf Drittanbieter, [unpartitionierte](/de/docs/Web/API/Storage_Access_API#unpartitioned_versus_partitioned_cookies) Cookies blockieren, um die Privatsphäre zu verbessern (z. B. um Tracking zu verhindern), und ist Teil der [Storage Access API](/de/docs/Web/API/Storage_Access_API).

Um zu überprüfen, ob die Erlaubnis zum Zugriff auf Drittanbieter-Cookies bereits erteilt wurde, können Sie [`Permissions.query()`](/de/docs/Web/API/Permissions/query) aufrufen und den Feature-Namen `"storage-access"` angeben.

> [!NOTE]
> Die Nutzung dieser Funktion kann durch eine vom Server festgelegte [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) {{httpheader("Permissions-Policy/storage-access", "storage-access")}} blockiert werden. Darüber hinaus muss das Dokument zusätzliche, browserspezifische Prüfungen bestehen, wie z. B. Whitelists, Blacklists, On-Device-Klassifizierung, Benutzereinstellungen, Anti-[Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking)-Heuristiken oder die Aufforderung an den Benutzer zur ausdrücklichen Erlaubnis.

## Syntax

```js-nolint
requestStorageAccess()
requestStorageAccess(types)
```

### Parameter

- `types` {{optional_inline}}
  - : Ein Objekt, das Eigenschaften enthält, die steuern, welcher unpartitionierte Zustand zugänglich gemacht werden soll. Wenn nicht angegeben, beträgt der Standardwert der Eigenschaft `false`. Verfügbare Eigenschaften sind wie folgt:
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

Ein {{jsxref("Promise")}}, der mit `undefined` erfüllt wird, wenn der Zugriff auf Drittanbieter-Cookies gewährt wurde und kein `types`-Parameter bereitgestellt wurde, erfüllt mit [`StorageAccessHandle`](/de/docs/Web/API/StorageAccessHandle), wenn der von dem `types`-Parameter angeforderte unpartitionierte Zustand bereitgestellt wurde, und ablehnt, wenn der Zugang verweigert wurde.

`requestStorageAccess()`-Anfragen werden automatisch abgelehnt, es sei denn, die eingebetteten Inhalte verarbeiten derzeit eine Benutzerinteraktion wie Tippen oder Klicken ({{Glossary("transient_activation", "transiente Aktivierung")}}), oder die Erlaubnis wurde bereits zuvor erteilt. Wenn die Erlaubnis nicht zuvor erteilt wurde, müssen sie innerhalb eines benutzerinteraktionsbasierten Ereignishandlers ausgeführt werden. Das Verhalten der Benutzerinteraktion hängt vom Zustand des Versprechens ab:

- Wenn das Versprechen erfüllt wird (d.h. wenn die Erlaubnis erteilt wurde), wurde die Benutzerinteraktion nicht verbraucht, sodass das Skript anschließend APIs aufrufen kann, die eine Benutzerinteraktion erfordern.
- Wenn das Versprechen abgelehnt wird (d.h. die Erlaubnis wurde nicht erteilt), wurde die Benutzerinteraktion verbraucht, sodass das Skript nichts tun kann, was eine Interaktion erfordert. Dies ist ein absichtlicher Schutz gegen Missbrauch — es verhindert, dass Skripte `requestStorageAccess()` in einer Schleife aufrufen, bis der Benutzer die Aufforderung akzeptiert.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn:
    - Das aktuelle [`Document`](/de/docs/Web/API/Document) noch nicht aktiv ist.
    - Der `types`-Parameter bereitgestellt wird und alle seine Eigenschaften `false` sind.
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn:
    - Das Fenster des Dokuments kein [sicherer Kontext](/de/docs/Web/Security/Defenses/Secure_Contexts) ist.
    - Die Nutzung durch eine {{httpheader("Permissions-Policy/storage-access", "storage-access")}} [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) blockiert wird.
    - Das Dokument oder das oberste Dokument einen `null`-Ursprung hat.
    - Das einbettende {{htmlelement("iframe")}} sandboxed ist und das `allow-storage-access-by-user-activation` Token nicht gesetzt ist.
    - Die Nutzung durch die Erlaubnisanfrage des User Agents zur Verwendung der API verweigert wird.

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
