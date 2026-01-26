---
title: "Dokument: requestStorageAccess() Methode"
short-title: requestStorageAccess()
slug: Web/API/Document/requestStorageAccess
l10n:
  sourceCommit: 1296e665fd82a80bb17123725dcbf1f08b89ab4e
---

{{APIRef("Storage Access API")}}

Die **`requestStorageAccess()`** Methode der [`Document`](/de/docs/Web/API/Document) Schnittstelle ermöglicht es, in einem Drittanbieter-Kontext geladenen Inhalten (d.h. eingebettet in einem {{htmlelement("iframe")}}) den Zugriff auf [Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies) und [unpartitionierten Zustand](/de/docs/Web/Privacy/Guides/State_Partitioning#state_partitioning) zu beantragen. Dies ist relevant für Benutzeragenten, die standardmäßig den Zugriff auf Drittanbieter- und [unpartitionierte](/de/docs/Web/API/Storage_Access_API#unpartitioned_versus_partitioned_cookies) Cookies blockieren, um die Privatsphäre zu verbessern (z.B. um Tracking zu verhindern), und ist Teil der [Storage Access API](/de/docs/Web/API/Storage_Access_API).

Um zu überprüfen, ob die Berechtigung zum Zugriff auf Drittanbieter-Cookies bereits erteilt wurde, können Sie [`Permissions.query()`](/de/docs/Web/API/Permissions/query) aufrufen und den Funktionsnamen `"storage-access"` angeben.

Nachdem ein eingebetteter Inhalt die `storage-access` Berechtigung über `requestStorageAccess()` aktiviert hat, sollte er sich selbst neu laden. Der Browser wird die Ressource mit Drittanbieter-unpartitionierten Cookies erneut anfordern und diese dem eingebetteten Inhalt zur Verfügung stellen, sobald er geladen ist.

Drittanbieter-Cookies werden nur mit Anfragen an den genauen Ursprung der eingebetteten Ressource gesendet. Andere Ursprünge innerhalb derselben Seite, die Zugriff auf ihre Drittanbieter-Cookies wünschen, müssen die gewährte Zugriffsberechtigung aktivieren. Die [storage access headers](/de/docs/Web/API/Storage_Access_API#storage_access_headers) sollten zur Aktivierung einer gewährten `storage-access` Berechtigung verwendet werden. Beachten Sie, dass die Header eine gewährte Berechtigung für jede eingebettete Ressource aktivieren können, z.B. für authentifizierte Bilder, nicht nur für in einem {{htmlelement("iframe")}} eingebetteten Code.

Es ist auch möglich, eine gewährte Berechtigung für einen cross-origin, same-site Endpunkt zu aktivieren, indem `requestStorageAccess()` aufgerufen wird (diesmal ohne die Anforderung für vorübergehende Aktivierung). Dies funktioniert jedoch nur, um die Berechtigung für eingebetteten Code zu aktivieren. Es ist auch weniger effizient als die Verwendung der Header, da die Ressource geladen werden muss, um die Berechtigung zu aktivieren.

> [!NOTE]
> Die Nutzung dieses Features kann durch eine {{httpheader("Permissions-Policy/storage-access", "storage-access")}} [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy), die auf Ihrem Server festgelegt ist, blockiert werden. Zusätzlich muss das Dokument zusätzliche browser-spezifische Prüfungen bestehen, wie z.B. Whitelists, Blacklists, geräteinterne Klassifikation, Benutzereinstellungen, Anti-[Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking) Heuristiken oder die Aufforderung an den Benutzer, eine explizite Genehmigung zu erteilen.

## Syntax

```js-nolint
requestStorageAccess()
requestStorageAccess(types)
```

### Parameter

- `types` {{optional_inline}}
  - : Ein Objekt, das Eigenschaften enthält, die steuern, welcher unpartitionierte Zustand zugänglich gemacht wird. Wenn nicht angegeben, ist der Standardwert der Eigenschaft `false`. Verfügbare Eigenschaften sind wie folgt:
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

Ein {{jsxref("Promise")}}, das mit `undefined` erfüllt wird, wenn der Zugriff auf Drittanbieter-Cookies gewährt wurde und kein `types` Parameter angegeben wurde, mit [`StorageAccessHandle`](/de/docs/Web/API/StorageAccessHandle) erfüllt wird, wenn der Zugriff auf den vom `types` Parameter angeforderten unpartitionierten Zustand gewährt wurde, und abgelehnt wird, wenn der Zugriff verweigert wurde.

`requestStorageAccess()` Anfragen werden automatisch abgelehnt, es sei denn, der eingebettete Inhalt verarbeitet gerade eine Nutzeraktion wie einen Tap oder Klick ({{Glossary("transient_activation", "transiente Aktivierung")}}), oder die Berechtigung wurde bereits zuvor erteilt. Wenn die Berechtigung nicht zuvor erteilt wurde, müssen sie innerhalb eines auf Nutzeraktionen basierenden Event-Handlers ausgeführt werden. Das Verhalten der Nutzeraktion hängt vom Zustand des Promises ab:

- Wenn das Promise gelöst wird (d.h. wenn die Berechtigung erteilt wurde), dann wurde die Nutzeraktion nicht verbraucht, so dass das Skript anschließend APIs aufrufen kann, die eine Nutzeraktion erfordern.
- Wenn das Promise abgelehnt wird (d.h. die Berechtigung wurde nicht erteilt), dann wurde die Nutzeraktion verbraucht, so dass das Skript nichts tun kann, was eine Nutzeraktion erfordert. Dies ist ein beabsichtigter Schutz gegen Missbrauch — es verhindert, dass Skripte `requestStorageAccess()` in einer Schleife aufrufen, bis der Benutzer die Eingabeaufforderung akzeptiert.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst, wenn:
    - Das aktuelle [`Document`](/de/docs/Web/API/Document) noch nicht aktiv ist.
    - Der `types` Parameter angegeben ist und alle seine Eigenschaften `false` sind.
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst, wenn:
    - Das Fenster des Dokuments kein [sicherer Kontext](/de/docs/Web/Security/Defenses/Secure_Contexts) ist.
    - Die Nutzung durch eine {{httpheader("Permissions-Policy/storage-access", "storage-access")}} [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy) blockiert wird.
    - Das Dokument oder das oberste Dokument hat einen `null` Ursprung.
    - Das eingebettete {{htmlelement("iframe")}} ist sandboxed, und das `allow-storage-access-by-user-activation` Token ist nicht gesetzt.
    - Die Nutzung wird durch die Berechtigungsanfrage des Benutzeragenten zur Nutzung der API verweigert.

## Beispiele

### Grundlegende Verwendung

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
- [Einführung der Storage Access API](https://webkit.org/blog/8124/introducing-storage-access-api/) (WebKit-Blog)
