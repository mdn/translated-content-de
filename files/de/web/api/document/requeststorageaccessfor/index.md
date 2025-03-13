---
title: "Dokument: `requestStorageAccessFor()` Methode"
short-title: requestStorageAccessFor()
slug: Web/API/Document/requestStorageAccessFor
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("Storage Access API")}}{{SeeCompatTable}}

Die **`requestStorageAccessFor()`** Methode der [`Document`](/de/docs/Web/API/Document) Schnittstelle ermöglicht es obersten Websites, Zugriff auf Cookies von Drittanbietern für eingebettete Inhalte anzufordern, die von einer anderen Website innerhalb desselben [verwandten Website-Sets](/de/docs/Web/API/Storage_Access_API/Related_website_sets) stammen. Sie gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn der Zugriff gewährt wurde, und abgelehnt wird, wenn der Zugriff verweigert wurde.

## Syntax

```js-nolint
requestStorageAccessFor(requestedOrigin)
```

### Parameter

- `requestedOrigin`
  - : Ein String, der die URL des Ursprungs darstellt, für den Sie Zugriff auf Cookies von Drittanbietern anfordern.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit `undefined` erfüllt wird, wenn der Zugriff auf Cookies von Drittanbietern gewährt wurde, und abgelehnt wird, wenn der Zugriff verweigert wurde.

Anfragen über `requestStorageAccessFor()` werden automatisch abgelehnt, es sei denn, der oberste Inhalt verarbeitet momentan eine Benutzeraktion wie einen Klick oder Tap ({{Glossary("transient_activation", "transiente Aktivierung")}}), oder die Berechtigung wurde bereits zuvor gewährt. Wurde die Berechtigung nicht zuvor gewährt, müssen sie innerhalb eines benutzergesteuerten Ereignishandlers ausgeführt werden. Das Verhalten der Benutzeraktion hängt vom Status des Promises ab:

- Wenn das Promise aufgelöst wird (d.h. die Berechtigung wurde gewährt), wurde die Benutzeraktion nicht verbraucht, sodass das Skript anschließend APIs aufrufen kann, die eine Benutzeraktion erfordern.
- Wenn das Promise abgelehnt wird (d.h. die Berechtigung wurde nicht gewährt), wurde die Benutzeraktion verbraucht, sodass das Skript nichts tun kann, was eine Aktion erfordert. Dies verhindert, dass Skripte `requestStorageAccessFor()` erneut aufrufen, wenn die Berechtigung verweigert wurde.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das aktuelle [`Document`](/de/docs/Web/API/Document) noch nicht aktiv ist.
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn:
    - Das Fenster des Dokuments kein [sicherer Kontext](/de/docs/Web/Security/Secure_Contexts) ist.
    - Das Dokument nicht das oberste Dokument ist.
    - Das Dokument einen `null`-Ursprung hat.
    - Der angegebene `requestedOrigin` [undurchsichtig](https://html.spec.whatwg.org/multipage/browsers.html#concept-origin-opaque) ist.
    - Die oberste und die eingebettete Website nicht im selben [verwandten Website-Set](/de/docs/Web/API/Storage_Access_API/Related_website_sets) sind.
    - Das einbettende {{htmlelement("iframe")}} sandboxed ist und das `allow-storage-access-by-user-activation` Token nicht gesetzt ist.
    - Die Nutzung durch eine {{httpheader("Permissions-Policy/storage-access", "storage-access")}} [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) blockiert wird.
    - Die Nutzung durch die Berechtigungsanforderung des User-Agents zur Verwendung der API verweigert wird.
- `TypeError`
  - : Wird ausgelöst, wenn `requestedOrigin` keine gültige URL ist.

## Beschreibung

Die `requestStorageAccessFor()` Methode adressiert Herausforderungen bei der Einführung der Storage Access API auf obersten Websites, die plattformübergreifende Bilder oder Skripte nutzen, die Cookies erfordern. Sie ist relevant für User Agents, die standardmäßig den Zugriff auf [Drittanbieter](/de/docs/Web/Privacy/Guides/Third-party_cookies), [unpartitionierte](/de/docs/Web/API/Storage_Access_API#unpartitioned_versus_partitioned_cookies) Cookies blockieren, um die Privatsphäre zu verbessern (z.B. um Tracking zu verhindern), und stellt eine vorgeschlagene Erweiterung der [Storage Access API](/de/docs/Web/API/Storage_Access_API) dar.

`requestStorageAccessFor()` kann Drittanbieter-Cookie-Zugriff für plattformübergreifende Ressourcen aktivieren, die direkt in eine oberste Website eingebettet sind und selbst keinen Speicherzugriff anfordern können, zum Beispiel {{htmlelement("img")}} Elemente. Plattformübergreifende Inhalte, die in `<iframe>`s eingebettet sind, ihre eigene Logik und Ressourcen haben und Drittanbieter-Cookie-Zugriff benötigen, sollten Speicherzugriff über [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess) anfordern.

Um zu überprüfen, ob die Berechtigung zum Zugriff auf Drittanbieter-Cookies bereits über `requestStorageAccessFor()` gewährt wurde, können Sie [`Permissions.query()`](/de/docs/Web/API/Permissions/query) aufrufen und den Funktionsnamen `"top-level-storage-access"` angeben. Dies unterscheidet sich vom Funktionsnamen, der für die reguläre [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess) Methode verwendet wird, die `"storage-access"` lautet.

Der `Permissions.query()`-Aufruf muss den eingebetteten Ursprung angeben; zum Beispiel:

```js
navigator.permissions.query({
  name: "top-level-storage-access",
  requestedOrigin: "https://www.example.com",
});
```

> [!NOTE]
> Die Verwendung dieses Features kann durch eine {{httpheader("Permissions-Policy/storage-access", "storage-access")}} [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) blockiert werden, die auf Ihrem Server gesetzt ist (dieselbe, die den Rest der Storage Access API steuert). Zusätzlich muss das Dokument zusätzliche browserspezifische Prüfungen wie Zulassungslisten, Sperrlisten, Geräteklassifizierungen, Benutzereinstellungen oder Anti-[Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking) Heuristiken bestehen.

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

Nach einem erfolgreichen `requestStorageAccessFor()` Aufruf werden plattformübergreifende Anfragen Cookies enthalten, wenn sie [CORS](/de/docs/Web/HTTP/Guides/CORS) / [`crossorigin`](/de/docs/Web/HTML/Attributes/crossorigin) beinhalten, sodass Websites möglicherweise warten möchten, bevor sie eine Anfrage auslösen. Solche Anfragen müssen die Option [`credentials: "include"`](/de/docs/Web/API/RequestInit#credentials) verwenden und Ressourcen müssen das `crossorigin="use-credentials"` Attribut einschließen.

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
- [Einführung der Storage Access API](https://webkit.org/blog/8124/introducing-storage-access-api/) (WebKit-Blog)
