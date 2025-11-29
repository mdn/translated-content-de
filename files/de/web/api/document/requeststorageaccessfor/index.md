---
title: "Dokumentation: Methode requestStorageAccessFor()"
short-title: requestStorageAccessFor()
slug: Web/API/Document/requestStorageAccessFor
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("Storage Access API")}}{{SeeCompatTable}}

Die **`requestStorageAccessFor()`** Methode des [`Document`](/de/docs/Web/API/Document) Interfaces ermöglicht es Top-Level-Sites, im Namen von eingebetteten Inhalten, die von einer anderen Seite im selben [verbundenen Website-Set](/de/docs/Web/API/Storage_Access_API/Related_website_sets) stammen, Zugriff auf Drittanbieter-Cookies zu beantragen. Sie liefert ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn der Zugriff gewährt wurde, und abgelehnt wird, wenn der Zugriff verweigert wurde.

## Syntax

```js-nolint
requestStorageAccessFor(requestedOrigin)
```

### Parameter

- `requestedOrigin`
  - : Ein String, der die URL des Ursprungs darstellt, für den Sie Zugriff auf Drittanbieter-Cookies beantragen.

### Rückgabewert

Ein {{jsxref("Promise")}}, der mit `undefined` erfüllt wird, wenn der Zugriff auf Drittanbieter-Cookies gewährt wurde, und abgelehnt wird, wenn der Zugriff verweigert wurde.

`requestStorageAccessFor()`-Anfragen werden automatisch abgelehnt, es sei denn, der Top-Level-Inhalt verarbeitet gerade eine Benutzeraktion wie einen Tipp oder Klick ({{Glossary("transient_activation", "transiente Aktivierung")}}), oder die Erlaubnis wurde bereits vorher erteilt. Wenn die Erlaubnis nicht vorher erteilt wurde, müssen sie innerhalb eines benutzeraktionsbasierten Ereignishandlers laufen. Das Benutzeraktionsverhalten hängt vom Zustand des Promise ab:

- Wenn das Promise aufgelöst wird (d.h. die Erlaubnis wurde erteilt), wurde die Benutzeraktion nicht verbraucht, sodass das Skript anschließend APIs aufrufen kann, die eine Benutzeraktion erfordern.
- Wenn das Promise abgelehnt wird (d.h. die Erlaubnis wurde nicht erteilt), wurde die Benutzeraktion verbraucht, sodass das Skript nichts tun kann, das eine Aktion erfordert. Dies verhindert, dass Skripte `requestStorageAccessFor()` erneut aufrufen, wenn die Erlaubnis verweigert wurde.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das aktuelle [`Document`](/de/docs/Web/API/Document) noch nicht aktiv ist.
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn:
    - Das Fenster des Dokuments kein [sicherer Kontext](/de/docs/Web/Security/Defenses/Secure_Contexts) ist.
    - Das Dokument nicht das oberste Dokument ist.
    - Das Dokument einen `null` Ursprung hat.
    - Der angegebene `requestedOrigin` [undurchsichtig](https://html.spec.whatwg.org/multipage/browsers.html#concept-origin-opaque) ist.
    - Die Top-Level- und eingebetteten Sites sich nicht im selben [verbundenen Website-Set](/de/docs/Web/API/Storage_Access_API/Related_website_sets) befinden.
    - Das einbettende {{htmlelement("iframe")}} gesandet ist und das `allow-storage-access-by-user-activation`-Token nicht gesetzt ist.
    - Die Nutzung durch eine {{httpheader("Permissions-Policy/storage-access", "storage-access")}} [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy) blockiert wird.
    - Die Nutzung durch die Berechtigungsanfrage des Benutzeragenten zur Nutzung der API verweigert wird.
- `TypeError`
  - : Wird ausgelöst, wenn `requestedOrigin` keine gültige URL ist.

## Beschreibung

Die `requestStorageAccessFor()` Methode adressiert Herausforderungen bei der Adoption der Storage Access API auf Top-Level-Sites, die site-übergreifende Bilder oder Skripte nutzen, die Cookies erfordern. Sie ist relevant für Benutzeragenten, die standardmäßig den Zugriff auf [Drittanbieter-](/de/docs/Web/Privacy/Guides/Third-party_cookies), [nicht partitionierte](/de/docs/Web/API/Storage_Access_API#unpartitioned_versus_partitioned_cookies) Cookies blockieren, um den Datenschutz zu verbessern (z. B. zur Vermeidung von Tracking), und ist eine vorgeschlagene Erweiterung der [Storage Access API](/de/docs/Web/API/Storage_Access_API).

`requestStorageAccessFor()` kann den Zugriff auf Drittanbieter-Cookies für site-übergreifende Ressourcen direkt in eine Top-Level-Site eingebettet ermöglichen, die sich selbst keinen Speicherzugang anfordern können, beispielsweise {{htmlelement("img")}} Elemente. Site-übergreifende Inhalte, die in `<iframe>`s eingebettet sind und ihre eigene Logik und Ressourcen haben und Zugriff auf Drittanbieter-Cookies benötigen, sollten Speicherzugriff über [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess) anfordern.

Um zu überprüfen, ob die Erlaubnis zum Zugriff auf Drittanbieter-Cookies bereits durch `requestStorageAccessFor()` erteilt wurde, können Sie [`Permissions.query()`](/de/docs/Web/API/Permissions/query) aufrufen und den Funktionsnamen `"top-level-storage-access"` angeben. Dies unterscheidet sich von dem Funktionsnamen, der für die reguläre [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess) Methode verwendet wird, nämlich `"storage-access"`.

Der Aufruf von `Permissions.query()` muss den eingebetteten Ursprung angeben; zum Beispiel:

```js
navigator.permissions.query({
  name: "top-level-storage-access",
  requestedOrigin: "https://www.example.com",
});
```

> [!NOTE]
> Die Nutzung dieser Funktion kann durch eine {{httpheader("Permissions-Policy/storage-access", "storage-access")}} [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy) blockiert werden, die auf Ihrem Server festgelegt ist (die gleiche, die den Rest der Storage Access API steuert). Darüber hinaus muss das Dokument zusätzliche browserspezifische Überprüfungen wie Allowlists, Blocklists, Geräteklassifizierung, Benutzereinstellungen oder Anti-[Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking) Heuristiken bestehen.

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

Nach einem erfolgreichen `requestStorageAccessFor()`-Aufruf werden site-übergreifende Anfragen Cookies enthalten, wenn sie [CORS](/de/docs/Web/HTTP/Guides/CORS) / [`crossorigin`](/de/docs/Web/HTML/Reference/Attributes/crossorigin) beinhalten, daher sollten Sites möglicherweise warten, bevor sie eine Anfrage auslösen. Solche Anfragen müssen die Option [`credentials: "include"`](/de/docs/Web/API/RequestInit#credentials) verwenden und Ressourcen müssen das `crossorigin="use-credentials"` Attribut enthalten.

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
> Siehe [Using the Storage Access API](/de/docs/Web/API/Storage_Access_API/Using) für ein vollständigeres Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Document.hasStorageAccess()`](/de/docs/Web/API/Document/hasStorageAccess), [`Document.hasUnpartitionedCookieAccess()`](/de/docs/Web/API/Document/hasUnpartitionedCookieAccess), [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess)
- [Using the Storage Access API](/de/docs/Web/API/Storage_Access_API/Using)
- [Introducing Storage Access API](https://webkit.org/blog/8124/introducing-storage-access-api/) (WebKit Blog)
