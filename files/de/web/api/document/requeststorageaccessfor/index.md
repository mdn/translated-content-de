---
title: "Document: requestStorageAccessFor() Methode"
short-title: requestStorageAccessFor()
slug: Web/API/Document/requestStorageAccessFor
l10n:
  sourceCommit: 775df1c62a1cbe555c4374ff9122d4ef15bd6f60
---

{{APIRef("Storage Access API")}}{{SeeCompatTable}}

Die **`requestStorageAccessFor()`** Methode des [`Document`](/de/docs/Web/API/Document) Interfaces ermöglicht es Top-Level-Websites, Drittanbieter-Cookie-Zugriff im Namen von eingebetteten Inhalten anzufordern, die von einer anderen Website innerhalb desselben [verwandten Website-Sets](/de/docs/Web/API/Storage_Access_API/Related_website_sets) stammen. Sie gibt ein {{jsxref("Promise")}} zurück, das sich auflöst, wenn der Zugriff gewährt wurde, und abgelehnt wird, wenn der Zugriff verweigert wurde.

## Syntax

```js-nolint
requestStorageAccessFor(requestedOrigin)
```

### Parameter

- `requestedOrigin`
  - : Ein String, der die URL des Ursprungs darstellt, für den Sie Zugriff auf Drittanbieter-Cookies anfordern.

### Rückgabewert

Ein {{jsxref("Promise")}}, das sich mit `undefined` erfüllt, wenn der Zugriff auf Drittanbieter-Cookies gewährt wurde, und abgelehnt wird, wenn der Zugriff verweigert wurde.

`requestStorageAccessFor()`-Anfragen werden automatisch abgelehnt, es sei denn, der Top-Level-Inhalt verarbeitet gerade eine Benutzeraktion wie einen Tap oder Klick ({{Glossary("transient_activation", "flüchtige Aktivierung")}}), oder es wurde bereits zuvor eine Erlaubnis erteilt. Wenn die Erlaubnis zuvor nicht erteilt wurde, müssen sie innerhalb eines Benutzeraktions-basierten Ereignishandlers ausgeführt werden. Das Verhalten der Benutzeraktion hängt vom Zustand des `Promise` ab:

- Wenn das `Promise` aufgelöst wird (d.h. die Erlaubnis wurde erteilt), wurde die Benutzeraktion nicht verbraucht, sodass das Skript anschließend APIs aufrufen kann, die eine Benutzeraktion erfordern.
- Wenn das `Promise` abgelehnt wird (d.h. die Erlaubnis wurde nicht erteilt), wurde die Benutzeraktion verbraucht, sodass das Skript nichts tun kann, das eine Aktion erfordert. Dies verhindert, dass Skripte `requestStorageAccessFor()` erneut aufrufen, wenn die Erlaubnis verweigert wurde.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das aktuelle [`Document`](/de/docs/Web/API/Document) noch nicht aktiv ist.
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn:
    - Das Fenster des Dokuments kein [sicherer Kontext](/de/docs/Web/Security/Secure_Contexts) ist.
    - Das Dokument nicht das Top-Level-Dokument ist.
    - Das Dokument einen `null`-Ursprung hat.
    - Der angegebene `requestedOrigin` [opak](https://html.spec.whatwg.org/multipage/browsers.html#concept-origin-opaque) ist.
    - Die Top-Level- und eingebetteten Seiten nicht im selben [verwandten Website-Set](/de/docs/Web/API/Storage_Access_API/Related_website_sets) sind.
    - Das einbettende {{htmlelement("iframe")}} ist sandboxed, und das `allow-storage-access-by-user-activation` Token ist nicht gesetzt.
    - Die Nutzung durch eine {{httpheader("Permissions-Policy/storage-access", "storage-access")}} [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Permissions_Policy) blockiert wird.
    - Die Nutzung durch die Berechtigungsanfrage des Benutzeragenten zum Verwenden der API verweigert wird.
- `TypeError`
  - : Wird ausgelöst, wenn `requestedOrigin` keine gültige URL ist.

## Beschreibung

Die `requestStorageAccessFor()` Methode adressiert Herausforderungen bei der Anwendung der Storage Access API auf Top-Level-Websites, die bilder- oder skriptübergreifende Websites verwenden, die Cookies erfordern. Sie ist relevant für Benutzeragenten, die standardmäßig den Zugriff auf [Drittanbieter-](/de/docs/Web/Privacy/Guides/Third-party_cookies) und [nicht partitionierte](/de/docs/Web/API/Storage_Access_API#unpartitioned_versus_partitioned_cookies) Cookies blockieren, um die Privatsphäre zu verbessern (z.B. um Tracking zu verhindern), und ist eine vorgeschlagene Erweiterung der [Storage Access API](/de/docs/Web/API/Storage_Access_API).

`requestStorageAccessFor()` kann den Zugriff auf Drittanbieter-Cookies für direkt in eine Top-Level-Site eingebettete Quell-Ressourcen ermöglichen, die selbst keinen Speicherzugriff anfordern können, zum Beispiel {{htmlelement("img")}} Elemente. Quellübergreifende Inhalte, die in `<iframe>`s eingebettet sind, ihre eigene Logik und Ressourcen haben und Zugriff auf Drittanbieter-Cookies benötigen, sollten Speicherzugriff über [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess) anfordern.

Um zu überprüfen, ob bereits die Erlaubnis für den Zugriff auf Drittanbieter-Cookies über `requestStorageAccessFor()` erteilt wurde, können Sie [`Permissions.query()`](/de/docs/Web/API/Permissions/query) aufrufen und den Feature-Namen `"top-level-storage-access"` angeben. Dies unterscheidet sich vom Feature-Namen, der für die reguläre [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess) Methode verwendet wird, welcher `"storage-access"` ist.

Der `Permissions.query()` Aufruf muss den eingebetteten Ursprung angeben; zum Beispiel:

```js
navigator.permissions.query({
  name: "top-level-storage-access",
  requestedOrigin: "https://www.example.com",
});
```

> [!NOTE]
> Die Nutzung dieser Funktion kann durch eine {{httpheader("Permissions-Policy/storage-access", "storage-access")}} [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Permissions_Policy) blockiert werden, die auf Ihrem Server festgelegt ist (dieselbe, die den Rest der Storage Access API steuert). Zusätzlich muss das Dokument weitere browserspezifische Überprüfungen bestehen, wie Zulassungslisten, Sperrlisten, geräteinterne Klassifizierung, Benutzereinstellungen oder Anti-[Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking) Heuristiken.

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

Nach einem erfolgreichen `requestStorageAccessFor()` Aufruf werden quellenübergreifende Anfragen Cookies enthalten, wenn sie [CORS](/de/docs/Web/HTTP/CORS) / [`crossorigin`](/de/docs/Web/HTML/Attributes/crossorigin) enthalten, sodass Websites möglicherweise warten möchten, bevor eine Anfrage ausgelöst wird. Solche Anfragen müssen die Option [`credentials: "include"`](/de/docs/Web/API/RequestInit#credentials) verwenden, und Ressourcen müssen das `crossorigin="use-credentials"` Attribut enthalten.

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
> Sehen Sie [Verwenden der Storage Access API](/de/docs/Web/API/Storage_Access_API/Using) für ein umfassenderes Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Document.hasStorageAccess()`](/de/docs/Web/API/Document/hasStorageAccess), [`Document.hasUnpartitionedCookieAccess()`](/de/docs/Web/API/Document/hasUnpartitionedCookieAccess), [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess)
- [Verwenden der Storage Access API](/de/docs/Web/API/Storage_Access_API/Using)
- [Einführung der Storage Access API](https://webkit.org/blog/8124/introducing-storage-access-api/) (WebKit Blog)
