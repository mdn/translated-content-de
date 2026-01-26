---
title: "Document: requestStorageAccessFor() Methode"
short-title: requestStorageAccessFor()
slug: Web/API/Document/requestStorageAccessFor
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

{{APIRef("Storage Access API")}}{{SeeCompatTable}}

Die **`requestStorageAccessFor()`**-Methode der [`Document`](/de/docs/Web/API/Document)-Schnittstelle ermöglicht es Hauptwebseiten, Drittanbieter-Cookie-Zugang für eingebettete Inhalte anzufordern, die von einer anderen Website im gleichen [verwandten Website-Set](/de/docs/Web/API/Storage_Access_API/Related_website_sets) stammen. Sie gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn der Zugriff gewährt wurde, und abgelehnt wird, wenn der Zugriff verweigert wurde.

## Syntax

```js-nolint
requestStorageAccessFor(requestedOrigin)
```

### Parameter

- `requestedOrigin`
  - : Ein String, der die URL des Ursprungs darstellt, für den Sie Zugriff auf Drittanbieter-Cookies anfordern.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit `undefined` erfüllt wird, wenn der Zugriff auf Drittanbieter-Cookies gewährt wurde, und abgelehnt wird, wenn der Zugriff verweigert wurde.

`requestStorageAccessFor()`-Anfragen werden automatisch abgelehnt, es sei denn, der Hauptinhalt verarbeitet gerade eine Benutzerinteraktion wie Tippen oder Klicken ({{Glossary("transient_activation", "flüchtige Aktivierung")}}), oder die Erlaubnis wurde bereits zuvor gewährt. Wenn die Erlaubnis nicht zuvor erteilt wurde, müssen sie innerhalb eines ereignisbasierten Nutzerinteraktions-Handlers ausgeführt werden. Das Verhalten der Benutzerinteraktion hängt vom Zustand des Versprechens ab:

- Wenn das Versprechen aufgelöst wird (d.h. die Erlaubnis wurde erteilt), wurde die Benutzerinteraktion nicht verbraucht, sodass das Skript anschließend APIs aufrufen kann, die eine Benutzerinteraktion erfordern.
- Wenn das Versprechen abgelehnt wird (d.h. die Erlaubnis wurde nicht erteilt), wurde die Benutzerinteraktion verbraucht, sodass das Skript nichts tun kann, was eine Interaktion erfordert. Dies verhindert, dass Skripte `requestStorageAccessFor()` erneut aufrufen, wenn die Erlaubnis verweigert wird.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird geworfen, wenn das aktuelle [`Document`](/de/docs/Web/API/Document) noch nicht aktiv ist.
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird geworfen, wenn:
    - Das Fenster des Dokuments kein [sicherer Kontext](/de/docs/Web/Security/Defenses/Secure_Contexts) ist.
    - Das Dokument nicht das Hauptdokument ist.
    - Das Dokument einen `null`-Ursprung hat.
    - Der angegebene `requestedOrigin` [undurchsichtig](https://html.spec.whatwg.org/multipage/browsers.html#concept-origin-opaque) ist.
    - Die Haupt- und eingebetteten Websites nicht im selben [verwandten Website-Set](/de/docs/Web/API/Storage_Access_API/Related_website_sets) sind.
    - Das einbettende {{htmlelement("iframe")}} sandkastenfähig ist und das `allow-storage-access-by-user-activation`-Token nicht gesetzt ist.
    - Die Nutzung durch eine {{httpheader("Permissions-Policy/storage-access", "storage-access")}} [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) blockiert wird.
    - Die Nutzung durch die Berechtigungsanforderung des Benutzeragenten zur Nutzung der API abgelehnt wird.
- `TypeError`
  - : Wird geworfen, wenn `requestedOrigin` keine gültige URL ist.

## Beschreibung

Die `requestStorageAccessFor()`-Methode adressiert Herausforderungen bei der Einführung der Storage Access API auf Hauptwebseiten, die standortübergreifende Bilder oder Skripte verwenden, die Cookies benötigen. Sie ist relevant für Benutzeragenten, die standardmäßig den Zugriff auf [Drittanbieter-](/de/docs/Web/Privacy/Guides/Third-party_cookies), [unpartitionierte](/de/docs/Web/API/Storage_Access_API#unpartitioned_versus_partitioned_cookies) Cookies blockieren, um die Privatsphäre zu verbessern (z.B. um Tracking zu verhindern), und ist eine vorgeschlagene Erweiterung der [Storage Access API](/de/docs/Web/API/Storage_Access_API).

`requestStorageAccessFor()` kann Zugriff auf Drittanbieter-Cookies für ressourcenübergreifende Inhalte aktivieren, die direkt in eine Hauptwebseite eingebettet sind und selbst keinen Speicherzugriff anfordern können, z.B. {{htmlelement("img")}}-Elemente. Standotverwandte Inhalte, die in `<iframe>`s eingebettet sind und ihre eigene Logik und Ressourcen haben und Zugriff auf Drittanbieter-Cookies benötigen, sollten den Speicherzugriff über [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess) anfordern.

Um zu überprüfen, ob die Erlaubnis zum Zugriff auf Drittanbieter-Cookies bereits über `requestStorageAccessFor()` erteilt wurde, können Sie [`Permissions.query()`](/de/docs/Web/API/Permissions/query) aufrufen, wobei Sie den Funktionsnamen „top-level-storage-access“ angeben. Dies unterscheidet sich vom Funktionsnamen, der für die reguläre Methode [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess) verwendet wird, der „storage-access“ lautet.

Der `Permissions.query()`-Aufruf muss die eingebettete Herkunft spezifizieren; zum Beispiel:

```js
navigator.permissions.query({
  name: "top-level-storage-access",
  requestedOrigin: "https://www.example.com",
});
```

> [!NOTE]
> Die Nutzung dieses Features kann durch eine {{httpheader("Permissions-Policy/storage-access", "storage-access")}} [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) blockiert werden, die auf Ihrem Server gesetzt ist (dieselbe, die den Rest der Storage Access API steuert). Zusätzlich muss das Dokument zusätzliche browser-spezifische Prüfungen wie Allowlisten, Sperrlisten, On-Device-Klassifikation, Benutzereinstellungen oder Anti-[Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking) Heuristiken bestehen.

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

Nach einem erfolgreichen Aufruf von `requestStorageAccessFor()` werden standotverwandte Anfragen Cookies enthalten, wenn sie [CORS](/de/docs/Web/HTTP/Guides/CORS) / [`crossorigin`](/de/docs/Web/HTML/Reference/Attributes/crossorigin) enthalten, sodass Websites möglicherweise warten möchten, bevor sie eine Anfrage auslösen. Solche Anfragen müssen die [`credentials: "include"`](/de/docs/Web/API/RequestInit#credentials) Option verwenden und Ressourcen müssen das `crossorigin="use-credentials"` Attribut enthalten.

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
> Siehe [Verwendung der Storage Access API](/de/docs/Web/API/Storage_Access_API/Using) für ein vollständigeres Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Document.hasStorageAccess()`](/de/docs/Web/API/Document/hasStorageAccess), [`Document.hasUnpartitionedCookieAccess()`](/de/docs/Web/API/Document/hasUnpartitionedCookieAccess), [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess)
- [Verwendung der Storage Access API](/de/docs/Web/API/Storage_Access_API/Using)
- [Einführung in die Storage Access API](https://webkit.org/blog/8124/introducing-storage-access-api/) (WebKit-Blog)
