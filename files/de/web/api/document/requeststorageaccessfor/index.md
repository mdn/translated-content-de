---
title: "Dokument: requestStorageAccessFor() Methode"
short-title: requestStorageAccessFor()
slug: Web/API/Document/requestStorageAccessFor
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("Storage Access API")}}{{non-standard_header}}

Die **`requestStorageAccessFor()`** Methode des [`Document`](/de/docs/Web/API/Document) Schnittstelle ermöglicht es obersten Sites, den Zugriff auf Drittanbieter-Cookies im Namen von eingebetteten Inhalten anzufordern, die von einer anderen Site im gleichen [verbundenen Website-Set](https://privacysandbox.google.com/cookies/related-website-sets-integration) stammen. Sie gibt ein {{jsxref("Promise")}} zurück, das sich auflöst, wenn der Zugriff gewährt wurde, und zurückgewiesen wird, wenn der Zugriff verweigert wurde.

## Syntax

```js-nolint
requestStorageAccessFor(requestedOrigin)
```

### Parameter

- `requestedOrigin`
  - : Ein String, der die URL des Ursprungs repräsentiert, für den Sie den Zugriff auf Drittanbieter-Cookies anfordern.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit `undefined` erfüllt wird, wenn der Zugriff auf Drittanbieter-Cookies gewährt wurde, und das zurückgewiesen wird, wenn der Zugriff verweigert wurde.

Anfragen für `requestStorageAccessFor()` werden automatisch zurückgewiesen, es sei denn, die oberste Inhalte befinden sich gerade in der Verarbeitung einer Benutzeraktion wie ein Tippen oder Klicken ({{Glossary("transient_activation", "transiente Aktivierung")}}), oder die Erlaubnis wurde zuvor bereits gewährt. Wenn die Erlaubnis nicht zuvor gewährt wurde, müssen sie innerhalb eines auf Benutzeraktionen basierenden Ereignishandlers ausgeführt werden. Das Verhalten der Benutzeraktion hängt vom Zustand des Promise ab:

- Wenn das Promise aufgelöst wird (d.h. die Erlaubnis wurde gewährt), wurde die Benutzeraktion nicht verbraucht, sodass das Skript anschließend APIs aufrufen kann, die eine Benutzeraktion erfordern.
- Wenn das Promise abgelehnt wird (d.h. die Erlaubnis wurde nicht gewährt), wurde die Benutzeraktion verbraucht, sodass das Skript nichts tun kann, was eine Aktion erfordert. Dies verhindert, dass Skripte erneut `requestStorageAccessFor()` aufrufen, wenn die Erlaubnis verweigert wird.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das aktuelle [`Document`](/de/docs/Web/API/Document) noch nicht aktiv ist.
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn:
    - Das Fenster des Dokuments ist kein [sicherer Kontext](/de/docs/Web/Security/Defenses/Secure_Contexts).
    - Das Dokument ist nicht das oberste Dokument.
    - Das Dokument hat einen `null` Ursprung.
    - Der bereitgestellte `requestedOrigin` ist [undurchsichtig](https://html.spec.whatwg.org/multipage/browsers.html#concept-origin-opaque).
    - Die obersten und eingebetteten Sites befinden sich nicht im gleichen [verbundenen Website-Set](https://privacysandbox.google.com/cookies/related-website-sets-integration).
    - Das eingebettete {{htmlelement("iframe")}} ist sandboxed, und das Token `allow-storage-access-by-user-activation` ist nicht gesetzt.
    - Die Nutzung wird durch eine {{httpheader("Permissions-Policy/storage-access", "storage-access")}} [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy) blockiert.
    - Die Nutzung wird vom Berechtigungsantrag des Benutzeragenten zur Nutzung der API abgelehnt.
- `TypeError`
  - : Wird ausgelöst, wenn `requestedOrigin` keine gültige URL ist.

## Beschreibung

Die `requestStorageAccessFor()` Methode adressiert Herausforderungen bei der Einführung der Storage Access API auf obersten Sites, die Cross-Site-Bilder oder Skripte verwenden, die Cookies erfordern. Sie ist relevant für Benutzeragenten, die standardmäßig den Zugriff auf [Drittanbieter](/de/docs/Web/Privacy/Guides/Third-party_cookies), [unpartitionierte](/de/docs/Web/API/Storage_Access_API#unpartitioned_versus_partitioned_cookies) Cookies blockieren, um die Privatsphäre zu verbessern (z. B. um Tracking zu verhindern), und ist eine vorgeschlagene Erweiterung der [Storage Access API](/de/docs/Web/API/Storage_Access_API).

`requestStorageAccessFor()` kann den Zugriff auf Drittanbieter-Cookies für Cross-Site-Ressourcen ermöglichen, die direkt in eine oberste Site eingebettet sind und selbst keinen Speicherzugriff anfordern können, beispielsweise {{htmlelement("img")}} Elemente. In `<iframe>`s eingebettete Cross-Site-Inhalte mit eigener Logik und Ressourcen, die Zugriff auf Drittanbieter-Cookies benötigen, sollten den Speicherzugang über [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess) anfordern.

Um zu überprüfen, ob bereits eine Berechtigung zum Zugriff auf Drittanbieter-Cookies über `requestStorageAccessFor()` gewährt wurde, können Sie [`Permissions.query()`](/de/docs/Web/API/Permissions/query) aufrufen und den Feature-Namen `"top-level-storage-access"` angeben. Dies unterscheidet sich vom Feature-Namen, der für die reguläre [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess) Methode verwendet wird, welcher `"storage-access"` ist.

Der `Permissions.query()` Aufruf muss den eingebetteten Ursprung spezifizieren; beispielsweise:

```js
navigator.permissions.query({
  name: "top-level-storage-access",
  requestedOrigin: "https://www.example.com",
});
```

> [!NOTE]
> Die Verwendung dieser Funktion kann durch eine {{httpheader("Permissions-Policy/storage-access", "storage-access")}} [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy) blockiert werden, die auf Ihrem Server festgelegt ist (die gleiche, die den Rest der Storage Access API steuert). Zusätzlich muss das Dokument zusätzliche browserspezifische Prüfungen bestehen, wie Allowlisten, Blocklisten, On-Device-Klassifizierung, Benutzereinstellungen oder Anti-[Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking) Heuristiken.

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

Nach einem erfolgreichen `requestStorageAccessFor()` Aufruf werden Cross-Site-Anfragen Cookies enthalten, wenn sie [CORS](/de/docs/Web/HTTP/Guides/CORS) / [`crossorigin`](/de/docs/Web/HTML/Reference/Attributes/crossorigin) einbeziehen, sodass Sites möglicherweise warten möchten, bevor eine Anfrage ausgelöst wird. Solche Anfragen müssen die [`credentials: "include"`](/de/docs/Web/API/RequestInit#credentials) Option verwenden und Ressourcen müssen das `crossorigin="use-credentials"` Attribut einbeziehen.

Beispielsweise:

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
