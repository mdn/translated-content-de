---
title: "Dokument: requestStorageAccessFor() Methode"
short-title: requestStorageAccessFor()
slug: Web/API/Document/requestStorageAccessFor
l10n:
  sourceCommit: aea2d29336c910940abb1f8e71e02158ac51e7c4
---

{{APIRef("Storage Access API")}}{{deprecated_header}}

Die **`requestStorageAccessFor()`** Methode des [`Document`](/de/docs/Web/API/Document) Interfaces erlaubt es obersten Websites, den Zugriff auf Drittanbieter-Cookies im Auftrag von eingebetteten Inhalten anzufordern, die von einer anderen Website innerhalb desselben [zusammenhängenden Website-Sets](/de/docs/Web/API/Storage_Access_API/Related_website_sets) stammen. Sie gibt ein {{jsxref("Promise")}} zurück, das erfüllt wird, wenn der Zugriff gewährt wurde, und abgelehnt wird, wenn der Zugriff verweigert wurde.

## Syntax

```js-nolint
requestStorageAccessFor(requestedOrigin)
```

### Parameter

- `requestedOrigin`
  - : Ein String, der die URL des Ursprungs repräsentiert, für die Sie Zugriff auf Drittanbieter-Cookies anfordern.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit `undefined` erfüllt wird, wenn der Zugriff auf Drittanbieter-Cookies gewährt wurde, und abgelehnt wird, wenn der Zugriff verweigert wurde.

`requestStorageAccessFor()` Anfragen werden automatisch abgelehnt, es sei denn, der oberste Inhalt verarbeitet gerade eine Benutzeraktion wie einen Tap oder Klick ({{Glossary("transient_activation", "transiente Aktivierung")}}), oder die Erlaubnis wurde bereits zuvor erteilt. Falls die Erlaubnis nicht zuvor erteilt wurde, müssen sie innerhalb eines benutzeraktionsbasierten Event-Handlers ausgeführt werden. Das Benutzeraktionsverhalten hängt vom Status des Versprechens ab:

- Wenn das Versprechen erfüllt wird (d.h. die Erlaubnis wurde erteilt), wurde die Benutzeraktion nicht verbraucht, und das Skript kann anschließend APIs aufrufen, die eine Benutzeraktion erfordern.
- Wenn das Versprechen abgelehnt wird (d.h. die Erlaubnis wurde nicht erteilt), wurde die Benutzeraktion verbraucht, und das Skript kann nichts ausführen, was eine Aktion erfordert. Dies verhindert, dass Skripte `requestStorageAccessFor()` erneut aufrufen, wenn die Erlaubnis verweigert wird.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird geworfen, wenn das aktuelle [`Document`](/de/docs/Web/API/Document) noch nicht aktiv ist.
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird geworfen, wenn:
    - Das Fenster des Dokuments kein [sicherer Kontext](/de/docs/Web/Security/Defenses/Secure_Contexts) ist.
    - Das Dokument nicht das oberste Dokument ist.
    - Das Dokument einen `null` Ursprung hat.
    - Der angegebene `requestedOrigin` [opak](https://html.spec.whatwg.org/multipage/browsers.html#concept-origin-opaque) ist.
    - Die oberste und eingebetteten Websites nicht im selben [zusammenhängenden Website-Set](/de/docs/Web/API/Storage_Access_API/Related_website_sets) sind.
    - Das eingebettete {{htmlelement("iframe")}} gesandboxt ist, und das `allow-storage-access-by-user-activation` Token nicht gesetzt ist.
    - Die Nutzung durch eine {{httpheader("Permissions-Policy/storage-access", "storage-access")}} [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy) blockiert ist.
    - Die Nutzung durch die Berechtigungsanfrage des Benutzeragenten zur Nutzung der API abgelehnt wird.
- `TypeError`
  - : Wird geworfen, wenn `requestedOrigin` keine gültige URL ist.

## Beschreibung

Die `requestStorageAccessFor()` Methode adressiert Herausforderungen bei der Einführung der Storage Access API auf obersten Websites, die plattformübergreifende Bilder oder Skripte verwenden, die Cookies benötigen. Sie ist relevant für Benutzeragenten, die standardmäßig den Zugriff auf [Drittanbieter-](/de/docs/Web/Privacy/Guides/Third-party_cookies), [unpartitionierte](/de/docs/Web/API/Storage_Access_API#unpartitioned_versus_partitioned_cookies) Cookies blockieren, um die Privatsphäre zu verbessern (zum Beispiel, um Tracking zu verhindern) und ist eine vorgeschlagene Erweiterung der [Storage Access API](/de/docs/Web/API/Storage_Access_API).

`requestStorageAccessFor()` kann den Zugriff auf Drittanbieter-Cookies für plattformübergreifende Ressourcen direkt ermöglichen, die in eine oberste Website eingebettet sind und selbst keinen Speicherzugriff anfordern können, beispielsweise {{htmlelement("img")}} Elemente. Plattformübergreifende Inhalte, die in `<iframe>`s eingebettet sind, ihre eigene Logik und Ressourcen haben und Zugriff auf Drittanbieter-Cookies benötigen, sollten den Speicherzugriff über [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess) anfordern.

Um zu überprüfen, ob bereits die Erlaubnis zum Zugriff auf Drittanbieter-Cookies über `requestStorageAccessFor()` erteilt wurde, können Sie [`Permissions.query()`](/de/docs/Web/API/Permissions/query) aufrufen und den Funktionsnamen `"top-level-storage-access"` spezifizieren. Dies unterscheidet sich von dem Funktionsnamen, der für die reguläre [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess) Methode verwendet wird, der `"storage-access"` ist.

Der `Permissions.query()` Aufruf muss den eingebetteten Ursprung spezifizieren, zum Beispiel:

```js
navigator.permissions.query({
  name: "top-level-storage-access",
  requestedOrigin: "https://www.example.com",
});
```

> [!NOTE]
> Die Nutzung dieser Funktion kann durch eine {{httpheader("Permissions-Policy/storage-access", "storage-access")}} [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy) blockiert werden, die auf Ihrem Server festgelegt ist (die gleiche, die den Rest der Storage Access API kontrolliert). Zusätzlich muss das Dokument weitere browser-spezifische Überprüfungen bestehen, wie Whitelists, Blacklists, On-Device-Klassifikation, Benutzereinstellungen oder Antiklickbetrug- (/de/docs/Web/Security/Attacks/Clickjacking) Heuristiken.

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

Nach einem erfolgreichen `requestStorageAccessFor()` Aufruf werden plattformübergreifende Anforderungen Cookies enthalten, wenn sie [CORS](/de/docs/Web/HTTP/Guides/CORS) / [`crossorigin`](/de/docs/Web/HTML/Reference/Attributes/crossorigin) umfassen, sodass Websites eventuell warten möchten, bevor sie eine Anforderung auslösen. Solche Anfragen müssen die [`credentials: "include"`](/de/docs/Web/API/RequestInit#credentials) Option verwenden und Ressourcen müssen das `crossorigin="use-credentials"` Attribut enthalten.

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
> Sehen Sie sich [Die Verwendung der Storage Access API](/de/docs/Web/API/Storage_Access_API/Using) für ein vollständigeres Beispiel an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Document.hasStorageAccess()`](/de/docs/Web/API/Document/hasStorageAccess), [`Document.hasUnpartitionedCookieAccess()`](/de/docs/Web/API/Document/hasUnpartitionedCookieAccess), [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess)
- [Die Verwendung der Storage Access API](/de/docs/Web/API/Storage_Access_API/Using)
- [Einführung der Storage Access API](https://webkit.org/blog/8124/introducing-storage-access-api/) (WebKit Blog)
