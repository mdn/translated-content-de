---
title: "Document: requestStorageAccess()-Methode"
short-title: requestStorageAccess()
slug: Web/API/Document/requestStorageAccess
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{APIRef("Storage Access API")}}

Die **`requestStorageAccess()`**-Methode des {{domxref("Document")}}-Interfaces ermöglicht es Inhalten, die in einem Drittanbieterkontext geladen sind (d.h. eingebettet in einem {{htmlelement("iframe")}}), den Zugriff auf [Drittanbieter-Cookies](/de/docs/Web/Privacy/Third-party_cookies) und [nicht partitionierten Zustand](/de/docs/Web/Privacy/State_Partitioning#state_partitioning) anzufordern. Dies ist relevant für Benutzeragenten, die standardmäßig den Zugriff auf Drittanbieter-[nicht partitionierte](/de/docs/Web/API/Storage_Access_API#unpartitioned_versus_partitioned_cookies) Cookies blockieren, um die Privatsphäre zu verbessern (z.B. um Tracking zu verhindern) und ist Teil der [Storage Access API](/de/docs/Web/API/Storage_Access_API).

Um zu überprüfen, ob die Berechtigung zum Zugriff auf Drittanbieter-Cookies bereits erteilt wurde, können Sie {{domxref("Permissions.query()")}} aufrufen und den Funktionsnamen `"storage-access"` angeben.

> [!NOTE]
> Die Nutzung dieser Funktion kann durch eine auf Ihrem Server festgelegte {{httpheader("Permissions-Policy/storage-access", "storage-access")}} [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Permissions_Policy) blockiert werden. Darüber hinaus muss das Dokument zusätzliche, browserspezifische Prüfungen bestehen, wie Whitelists, Blacklists, On-Device-Klassifizierungen, Benutzereinstellungen, Anti-[Clickjacking](/de/docs/Glossary/Clickjacking)-Heuristiken oder Anfordern der ausdrücklichen Zustimmung des Benutzers.

## Syntax

```js-nolint
requestStorageAccess()
requestStorageAccess(types)
```

### Parameter

- `types` {{optional_inline}}

  - : Ein Objekt, das Eigenschaften enthält, die steuern, welcher nicht partitionierte Zustand zugänglich gemacht werden soll. Wenn nicht angegeben, ist der Standardwert der Eigenschaft `false`. Verfügbare Eigenschaften sind wie folgt:

    - `all`
      - : Ein boolescher Wert, der angibt, dass alle möglichen nicht partitionierten Zustände zugänglich gemacht werden sollen.
    - `cookies`
      - : Ein boolescher Wert, der angibt, dass Drittanbieter-Cookies zugänglich gemacht werden sollen.
    - `sessionStorage`
      - : Ein boolescher Wert, der angibt, dass {{domxref("StorageAccessHandle.sessionStorage")}} zugänglich gemacht werden soll.
    - `localStorage`
      - : Ein boolescher Wert, der angibt, dass {{domxref("StorageAccessHandle.localStorage")}} zugänglich gemacht werden soll.
    - `indexedDB`
      - : Ein boolescher Wert, der angibt, dass {{domxref("StorageAccessHandle.indexedDB")}} zugänglich gemacht werden soll.
    - `locks`
      - : Ein boolescher Wert, der angibt, dass {{domxref("StorageAccessHandle.locks")}} zugänglich gemacht werden soll.
    - `caches`
      - : Ein boolescher Wert, der angibt, dass {{domxref("StorageAccessHandle.caches")}} zugänglich gemacht werden soll.
    - `getDirectory`
      - : Ein boolescher Wert, der angibt, dass {{domxref("StorageAccessHandle.getDirectory()")}} zugänglich gemacht werden soll.
    - `estimate`
      - : Ein boolescher Wert, der angibt, dass {{domxref("StorageAccessHandle.estimate()")}} zugänglich gemacht werden soll.
    - `createObjectURL`
      - : Ein boolescher Wert, der angibt, dass {{domxref("StorageAccessHandle.createObjectURL()")}} zugänglich gemacht werden soll.
    - `revokeObjectURL`
      - : Ein boolescher Wert, der angibt, dass {{domxref("StorageAccessHandle.revokeObjectURL()")}} zugänglich gemacht werden soll.
    - `BroadcastChannel`
      - : Ein boolescher Wert, der angibt, dass {{domxref("StorageAccessHandle.BroadcastChannel()")}} zugänglich gemacht werden soll.
    - `SharedWorker`
      - : Ein boolescher Wert, der angibt, dass {{domxref("StorageAccessHandle.SharedWorker()")}} zugänglich gemacht werden soll.

### Rückgabewert

Ein {{jsxref("Promise")}}, der mit `undefined` erfüllt wird, wenn der Zugriff auf Drittanbieter-Cookies gewährt wurde und kein `types`-Parameter angegeben wurde, wird mit {{domxref("StorageAccessHandle")}} erfüllt, wenn der Zugriff auf den nicht partitionierten Zustand, der durch den `types`-Parameter angefordert wurde, gewährt wurde, und wird abgelehnt, wenn der Zugriff verweigert wurde.

`requestStorageAccess()`-Anfragen werden automatisch abgelehnt, es sei denn, der eingebettete Inhalt verarbeitet derzeit einen Benutzerbefehl, wie ein Tippen oder Klicken ({{Glossary("transient activation")}}), oder es wurde bereits zuvor eine Erlaubnis erteilt. Wenn die Erlaubnis nicht zuvor erteilt wurde, müssen sie innerhalb eines benutzerbefehlbasierten Ereignishandlers ausgeführt werden. Das Verhalten des Benutzerbefehls hängt vom Zustand des Versprechens ab:

- Wenn das Versprechen erfüllt wird (d.h. wenn die Erlaubnis erteilt wurde), wurde der Benutzerbefehl nicht verbraucht, sodass das Skript anschließend APIs aufrufen kann, die einen Benutzerbefehl erfordern.
- Wenn das Versprechen abgelehnt wird (d.h. die Erlaubnis wurde nicht erteilt), wurde der Benutzerbefehl verbraucht, sodass das Skript nichts tun kann, was einen Befehl erfordert. Dies ist ein beabsichtigter Schutz vor Missbrauch — es verhindert, dass Skripte `requestStorageAccess()` in einer Schleife aufrufen, bis der Benutzer die Eingabeaufforderung akzeptiert.

### Ausnahmen

- `InvalidStateError` {{domxref("DOMException")}}
  - : Ausgelöst wenn:
    - Das aktuelle {{domxref("Document")}} ist noch nicht aktiv.
    - Der `types`-Parameter wird angegeben und alle seine Eigenschaften sind `false`.
- `NotAllowedError` {{domxref("DOMException")}}
  - : Ausgelöst wenn:
    - Das Fenster des Dokuments befindet sich nicht in einem [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts).
    - Die Nutzung wird durch eine {{httpheader("Permissions-Policy/storage-access", "storage-access")}} [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Permissions_Policy) blockiert.
    - Das Dokument oder das oberste Dokument hat einen `null`-Ursprung.
    - Das einbettende {{htmlelement("iframe")}} ist sandboxed, und das `allow-storage-access-by-user-activation` Token ist nicht gesetzt.
    - Die Nutzung wird durch die Berechtigungsanforderung des Benutzeragenten zur Nutzung der API verweigert.

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

- {{domxref("Document.hasStorageAccess()")}}, {{domxref("Document.hasUnpartitionedCookieAccess()")}}, {{domxref("Document.requestStorageAccessFor()")}}
- [Using the Storage Access API](/de/docs/Web/API/Storage_Access_API/Using)
- [Introducing Storage Access API](https://webkit.org/blog/8124/introducing-storage-access-api/) (WebKit Blog)
