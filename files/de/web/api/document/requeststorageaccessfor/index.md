---
title: "Dokumentation: `requestStorageAccessFor()` Methode"
short-title: requestStorageAccessFor()
slug: Web/API/Document/requestStorageAccessFor
l10n:
  sourceCommit: be3f184d89979d413204b8f9cbecfc8dd0e5ecf9
---

{{APIRef("Storage Access API")}}{{SeeCompatTable}}

Die **`requestStorageAccessFor()`** Methode der [`Document`](/de/docs/Web/API/Document) Schnittstelle erlaubt es Top-Level-Seiten, im Namen von eingebettetem Inhalt, der von einer anderen Seite desselben [related website set](/de/docs/Web/API/Storage_Access_API/Related_website_sets) stammt, Zugriff auf Drittanbieter-Cookies anzufordern. Sie gibt ein {{jsxref("Promise")}} zurück, das gelöst wird, wenn der Zugriff gewährt wurde, und abgelehnt wird, wenn der Zugriff verweigert wurde.

## Syntax

```js-nolint
requestStorageAccessFor(requestedOrigin)
```

### Parameter

- `requestedOrigin`
  - : Ein String, der die URL des Ursprungs darstellt, für den Sie Zugriff auf Drittanbieter-Cookies anfordern.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit `undefined` erfüllt wird, wenn der Zugriff auf Drittanbieter-Cookies gewährt wurde, und abgelehnt wird, wenn der Zugriff verweigert wurde.

Anforderungen von `requestStorageAccessFor()` werden automatisch abgelehnt, es sei denn, der Top-Level-Inhalt verarbeitet gerade eine Benutzerinteraktion wie beispielsweise ein Tippen oder Klicken ({{Glossary("transient_activation", "transient activation")}}), oder die Berechtigung wurde bereits zuvor erteilt. Wenn die Berechtigung nicht zuvor gewährt wurde, müssen sie innerhalb eines auf Benutzerinteraktionen basierenden Ereignishandlers ablaufen. Das Verhalten der Benutzerinteraktion hängt vom Zustand des Promise ab:

- Wenn das Promise erfüllt wird (d.h. die Berechtigung wurde erteilt), wurde die Benutzerinteraktion nicht verbraucht, sodass das Skript anschließend APIs aufrufen kann, die eine Benutzerinteraktion erfordern.
- Wenn das Promise abgelehnt wird (d.h. die Berechtigung wurde nicht erteilt), wurde die Benutzerinteraktion verbraucht, sodass das Skript nichts tun kann, was eine Interaktion erfordert. Dies verhindert, dass Skripte `requestStorageAccessFor()` erneut aufrufen, wenn die Berechtigung verweigert wird.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das aktuelle [`Document`](/de/docs/Web/API/Document) noch nicht aktiv ist.
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn:
    - Das Fenster des Dokuments kein [sicherer Kontext](/de/docs/Web/Security/Secure_Contexts) ist.
    - Das Dokument nicht das Top-Level-Dokument ist.
    - Das Dokument einen `null` Ursprung hat.
    - Der angegebene `requestedOrigin` [undurchsichtig](https://html.spec.whatwg.org/multipage/browsers.html#concept-origin-opaque) ist.
    - Die Top-Level und eingebetteten Seiten nicht im selben [related website set](/de/docs/Web/API/Storage_Access_API/Related_website_sets) sind.
    - Das einbettende {{htmlelement("iframe")}} ist sandboxed, und das `allow-storage-access-by-user-activation` Token ist nicht gesetzt.
    - Die Nutzung durch eine {{httpheader("Permissions-Policy/storage-access", "storage-access")}} [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy) blockiert wird.
    - Die Nutzung durch die Berechtigungsanfrage des Benutzeragenten zur Nutzung der API verweigert wird.
- `TypeError`
  - : Wird ausgelöst, wenn `requestedOrigin` keine gültige URL ist.

## Beschreibung

Die `requestStorageAccessFor()` Methode adressiert Herausforderungen bei der Einführung der Storage Access API auf Top-Level-Seiten, die cross-site Bilder oder Skripte verwenden, die Cookies benötigen. Es ist relevant für Benutzeragenten, die standardmäßig den Zugriff auf [Drittanbieter](/de/docs/Web/Privacy/Third-party_cookies), [unpartitionierte](/de/docs/Web/API/Storage_Access_API#unpartitioned_versus_partitioned_cookies) Cookies zur Verbesserung der Privatsphäre blockieren (z.B. um Tracking zu verhindern) und ist eine vorgeschlagene Erweiterung der [Storage Access API](/de/docs/Web/API/Storage_Access_API).

`requestStorageAccessFor()` kann den Zugriff auf Drittanbieter-Cookies für cross-site Ressourcen ermöglichen, die direkt in eine Top-Level-Seite eingebettet sind und nicht selbst Speicherzugriff anfordern können, wie zum Beispiel {{htmlelement("img")}} Elemente. Cross-site Inhalt, der in `<iframe>`s eingebettet ist und seine eigene Logik und Ressourcen hat und Zugriff auf Drittanbieter-Cookies benötigt, sollte den Speicherzugriff über [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess) anfordern.

Um zu überprüfen, ob die Berechtigung für den Zugriff auf Drittanbieter-Cookies bereits über `requestStorageAccessFor()` gewährt wurde, können Sie [`Permissions.query()`](/de/docs/Web/API/Permissions/query) aufrufen, wobei Sie den Feature-Namen `"top-level-storage-access"` angeben. Dies unterscheidet sich vom Feature-Namen, der für die reguläre [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess) Methode verwendet wird, welche `"storage-access"` ist.

Der `Permissions.query()` Aufruf muss den eingebetteten Ursprung angeben; zum Beispiel:

```js
navigator.permissions.query({
  name: "top-level-storage-access",
  requestedOrigin: "https://www.example.com",
});
```

> [!NOTE]
> Die Verwendung dieser Funktion kann durch eine auf Ihrem Server eingestellte {{httpheader("Permissions-Policy/storage-access", "storage-access")}} [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy) blockiert werden (dieselbe, die den Rest der Storage Access API kontrolliert). Zusätzlich muss das Dokument zusätzliche browserspezifische Prüfungen bestehen, wie zum Beispiel Zulassungslisten, Sperrlisten, Geräteklassifikation, Benutzereinstellungen oder Anti-[Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking) Heuristiken.

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

Nach einem erfolgreichen `requestStorageAccessFor()` Aufruf werden cross-site Anfragen Cookies enthalten, wenn sie [CORS](/de/docs/Web/HTTP/CORS) / [`crossorigin`](/de/docs/Web/HTML/Attributes/crossorigin) einschließen, daher sollten Seiten möglicherweise warten, bevor sie eine Anfrage auslösen. Solche Anfragen müssen die [`credentials: "include"`](/de/docs/Web/API/RequestInit#credentials) Option verwenden und Ressourcen müssen das `crossorigin="use-credentials"` Attribut enthalten.

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
- [Einführung der Storage Access API](https://webkit.org/blog/8124/introducing-storage-access-api/) (WebKit Blog)
