---
title: "Document: Methode requestStorageAccessFor()"
short-title: requestStorageAccessFor()
slug: Web/API/Document/requestStorageAccessFor
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{APIRef("Storage Access API")}}{{SeeCompatTable}}

Die **`requestStorageAccessFor()`**-Methode des [`Document`](/de/docs/Web/API/Document)-Interfaces ermöglicht es obersten Websites, Drittanbieter-Cookie-Zugriff für eingebettete Inhalte zu beantragen, die von einer anderen Website im selben [verwandten Website-Set](/de/docs/Web/API/Storage_Access_API/Related_website_sets) stammen. Sie gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn der Zugriff gewährt wurde, und abgelehnt wird, wenn der Zugriff verweigert wurde.

## Syntax

```js-nolint
requestStorageAccessFor(requestedOrigin)
```

### Parameter

- `requestedOrigin`
  - : Ein String, der die URL des Ursprungs darstellt, für den Sie Drittanbieter-Cookie-Zugriff anfordern.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit `undefined` erfüllt wird, wenn der Zugriff auf Drittanbieter-Cookies gewährt wurde, und abgelehnt wird, wenn der Zugriff verweigert wurde.

`requestStorageAccessFor()`-Anfragen werden automatisch abgelehnt, es sei denn, der oberste Inhalt verarbeitet derzeit eine Benutzeraktion wie einen Tap oder Klick ([transiente Aktivierung](/de/docs/Glossary/transient_activation)) oder die Erlaubnis wurde bereits zuvor gewährt. Wenn die Erlaubnis nicht zuvor gewährt wurde, müssen sie in einem benutzergestengesteuerten Ereignishandler ausgeführt werden. Das Verhalten der Benutzeraktion hängt vom Stand des Versprechens ab:

- Wenn das Versprechen aufgelöst wird (d.h. die Erlaubnis wurde erteilt), wurde die Benutzeraktion nicht verbraucht, sodass das Skript anschließend APIs aufrufen kann, die eine Benutzeraktion erfordern.
- Wenn das Versprechen abgelehnt wird (d.h. die Erlaubnis wurde nicht erteilt), wurde die Benutzeraktion verbraucht, sodass das Skript nichts tun kann, was eine Aktion erfordert. Dies verhindert, dass Skripte `requestStorageAccessFor()` erneut aufrufen, wenn die Erlaubnis verweigert wurde.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das aktuelle [`Document`](/de/docs/Web/API/Document) noch nicht aktiv ist.
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn:
    - Das Fenster des Dokuments kein [sicherer Kontext](/de/docs/Web/Security/Secure_Contexts) ist.
    - Das Dokument nicht das oberste Dokument ist.
    - Das Dokument einen `null`-Ursprung hat.
    - Der angegebene `requestedOrigin` [opake](https://html.spec.whatwg.org/multipage/browsers.html#concept-origin-opaque) ist.
    - Die obersten und eingebetteten Websites nicht im selben [verwandten Website-Set](/de/docs/Web/API/Storage_Access_API/Related_website_sets) sind.
    - Das einbettende {{htmlelement("iframe")}} sandboxed ist und das `allow-storage-access-by-user-activation`-Token nicht gesetzt ist.
    - Die Nutzung durch eine {{httpheader("Permissions-Policy/storage-access", "storage-access")}} [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Permissions_Policy) blockiert wird.
    - Die Nutzung durch die Berechtigungsanfrage des Benutzeragents zur Nutzung der API verweigert wird.
- `TypeError`
  - : Wird ausgelöst, wenn `requestedOrigin` keine gültige URL ist.

## Beschreibung

Die Methode `requestStorageAccessFor()` adressiert Herausforderungen bei der Einführung der Storage Access API auf obersten Websites, die plattformübergreifende Bilder oder Skripte verwenden, die Cookies benötigen. Sie ist für Benutzeragenten relevant, die standardmäßig den Zugriff auf [Drittanbieter-](/de/docs/Web/Privacy/Third-party_cookies), [unpartitionierte](/de/docs/Web/API/Storage_Access_API#unpartitioned_versus_partitioned_cookies) Cookies blockieren, um die Privatsphäre zu verbessern (z.B. um Tracking zu verhindern), und ist eine vorgeschlagene Erweiterung der [Storage Access API](/de/docs/Web/API/Storage_Access_API).

`requestStorageAccessFor()` kann Drittanbieter-Cookie-Zugriff für plattformübergreifende Ressourcen ermöglichen, die direkt in eine oberste Website eingebettet sind und selbst keinen Speicherzugriff anfordern können, zum Beispiel {{htmlelement("img")}}-Elemente. Plattformübergreifende Inhalte, die in `<iframe>`s eingebettet sind, eigene Logik und Ressourcen haben und Drittanbieter-Cookie-Zugriff benötigen, sollten den Speicherzugriff über [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess) anfordern.

Um zu überprüfen, ob die Erlaubnis zum Zugriff auf Drittanbieter-Cookies bereits über `requestStorageAccessFor()` erteilt wurde, können Sie [`Permissions.query()`](/de/docs/Web/API/Permissions/query) aufrufen und den Funktionsnamen `"top-level-storage-access"` angeben. Dies unterscheidet sich vom Funktionsnamen, der für die reguläre [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess)-Methode verwendet wird, der `"storage-access"` lautet.

Der `Permissions.query()`-Aufruf muss den eingebetteten Ursprung angeben; zum Beispiel:

```js
navigator.permissions.query({
  name: "top-level-storage-access",
  requestedOrigin: "https://www.example.com",
});
```

> [!NOTE]
> Die Nutzung dieser Funktion kann durch eine {{httpheader("Permissions-Policy/storage-access", "storage-access")}} [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Permissions_Policy) blockiert werden, die auf Ihrem Server festgelegt ist (die gleiche, die den Rest der Storage Access API steuert). Außerdem muss das Dokument zusätzliche, browserspezifische Prüfungen bestehen, wie z.B. Zulassungslisten, Sperrlisten, Geräteklassifizierung, Benutzereinstellungen oder Anti-[Clickjacking](/de/docs/Glossary/Clickjacking)-Heuristiken.

## Beispiele

```js
function rSAFor() {
  if ("requestStorageAccessFor" in document) {
    document.requestStorageAccessFor("https://example.com").then(
      (res) => {
        // Use storage access
        doThingsWithCookies();
      },
      (err) => {
        // Handle errors
      },
    );
  }
}
```

Nach einem erfolgreichen `requestStorageAccessFor()`-Aufruf werden plattformübergreifende Anfragen Cookies enthalten, wenn sie [CORS](/de/docs/Web/HTTP/CORS) / [`crossorigin`](/de/docs/Web/HTML/Attributes/crossorigin) beinhalten, sodass Websites möglicherweise warten möchten, bevor sie eine Anfrage auslösen. Solche Anfragen müssen die Option [`credentials: "include"`](/de/docs/Web/API/RequestInit#credentials) verwenden und Ressourcen müssen das Attribut `crossorigin="use-credentials"` beinhalten.

Zum Beispiel:

```js
function checkCookie() {
  fetch("https://example.com/getcookies.json", {
    method: "GET",
    credentials: "include",
  })
    .then((response) => response.json())
    .then((json) => {
      // Do something
    });
}
```

> [!NOTE]
> Siehe [Verwendung der Storage Access API](/de/docs/Web/API/Storage_Access_API/Using) für ein ausführlicheres Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Document.hasStorageAccess()`](/de/docs/Web/API/Document/hasStorageAccess), [`Document.hasUnpartitionedCookieAccess()`](/de/docs/Web/API/Document/hasUnpartitionedCookieAccess), [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess)
- [Verwendung der Storage Access API](/de/docs/Web/API/Storage_Access_API/Using)
- [Einführung der Storage Access API](https://webkit.org/blog/8124/introducing-storage-access-api/) (WebKit-Blog)
