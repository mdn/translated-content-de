---
title: "Document: requestStorageAccessFor() Methode"
short-title: requestStorageAccessFor()
slug: Web/API/Document/requestStorageAccessFor
l10n:
  sourceCommit: 793bcbe2dd88fc553d2c4c918c4dec4899704022
---

{{APIRef("Storage Access API")}}{{deprecated_header}}{{non-standard_header}}

Die **`requestStorageAccessFor()`** Methode der [`Document`](/de/docs/Web/API/Document) Schnittstelle ermöglicht es Websites auf oberster Ebene, den Zugriff auf Drittanbieter-Cookies im Namen von eingebetteten Inhalten, die von einer anderen Website im selben [Related Website Set](https://privacysandbox.google.com/cookies/related-website-sets-integration) stammen, anzufordern. Sie gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn der Zugriff gewährt wurde, und abgelehnt wird, wenn der Zugriff verweigert wurde.

## Syntax

```js-nolint
requestStorageAccessFor(requestedOrigin)
```

### Parameter

- `requestedOrigin`
  - : Ein String, der die URL des Ursprungs darstellt, für den Sie Zugriff auf Drittanbieter-Cookies anfordern.

### Rückgabewert

Ein {{jsxref("Promise")}} das mit `undefined` aufgelöst wird, wenn der Zugriff auf Drittanbieter-Cookies gewährt wurde, und abgelehnt wird, wenn der Zugriff verweigert wurde.

`requestStorageAccessFor()` Anfragen werden automatisch abgelehnt, es sei denn, der Hauptinhalt verarbeitet derzeit eine Benutzeraktion wie einen Tipp oder Klick ({{Glossary("transient_activation", "transiente Aktivierung")}}) oder die Erlaubnis wurde bereits zuvor erteilt. Wenn die Erlaubnis nicht zuvor erteilt wurde, müssen sie innerhalb eines benutzergestützten Ereignishandlers ausgeführt werden. Das Benutzeraktionsverhalten hängt vom Status des Versprechens ab:

- Wenn das Versprechen aufgelöst wird (d.h. die Erlaubnis wurde erteilt), wurde die Benutzeraktion nicht verbraucht, sodass das Skript anschließend APIs aufrufen kann, die eine Benutzeraktion erfordern.
- Wenn das Versprechen abgelehnt wird (d.h. die Erlaubnis wurde nicht erteilt), wurde die Benutzeraktion verbraucht, sodass das Skript nichts tun kann, das eine Aktion erfordert. Dies verhindert, dass Skripte `requestStorageAccessFor()` erneut aufrufen, wenn die Erlaubnis verweigert wird.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst, wenn das aktuelle [`Document`](/de/docs/Web/API/Document) noch nicht aktiv ist.
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst, wenn:
    - Das Dokumentfenster ist kein [sicherer Kontext](/de/docs/Web/Security/Defenses/Secure_Contexts).
    - Das Dokument ist nicht das oberste Dokument.
    - Das Dokument hat einen `null` Ursprung.
    - Der angegebene `requestedOrigin` ist [undurchsichtig](https://html.spec.whatwg.org/multipage/browsers.html#concept-origin-opaque).
    - Die oberste und die eingebettete Site befinden sich nicht im selben [Related Website Set](https://privacysandbox.google.com/cookies/related-website-sets-integration).
    - Das einbettende {{htmlelement("iframe")}} ist mit einem Sandbox versehen, und das `allow-storage-access-by-user-activation` Token ist nicht gesetzt.
    - Die Nutzung wird durch eine {{httpheader("Permissions-Policy/storage-access", "storage-access")}} [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) blockiert.
    - Die Nutzung wird durch die Berechtigungsanfrage des Benutzeragenten zur Verwendung der API verweigert.
- `TypeError`
  - : Ausgelöst, wenn `requestedOrigin` keine gültige URL ist.

## Beschreibung

Die `requestStorageAccessFor()` Methode adressiert Herausforderungen bei der Einführung der Storage Access API auf Websites auf oberster Ebene, die standortübergreifende Bilder oder Skripte verwenden, die Cookies benötigen. Sie ist relevant für Benutzeragenten, die standardmäßig den Zugriff auf [Drittanbieter-](/de/docs/Web/Privacy/Guides/Third-party_cookies), [unpartitionierte](/de/docs/Web/API/Storage_Access_API#unpartitioned_versus_partitioned_cookies) Cookies blockieren, um die Privatsphäre zu verbessern (z.B. um das Tracking zu verhindern), und ist eine vorgeschlagene Erweiterung der [Storage Access API](/de/docs/Web/API/Storage_Access_API).

`requestStorageAccessFor()` kann den Zugriff auf Drittanbieter-Cookies für standortübergreifende Ressourcen, die direkt in eine Website auf oberster Ebene eingebettet sind und selbst keinen Speicherzugriff anfordern können, aktivieren, zum Beispiel {{htmlelement("img")}}-Elemente. Standortübergreifende Inhalte, die in `<iframe>`s eingebettet sind und über eigene Logik und Ressourcen verfügen sowie Zugriff auf Drittanbieter-Cookies benötigen, sollten über [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess) Speicherzugriff anfordern.

Um zu überprüfen, ob die Erlaubnis zum Zugriff auf Drittanbieter-Cookies bereits über `requestStorageAccessFor()` gewährt wurde, können Sie [`Permissions.query()`](/de/docs/Web/API/Permissions/query) aufrufen und den Feature-Namen `"top-level-storage-access"` angeben. Dies unterscheidet sich vom Feature-Namen, der für die reguläre [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess) Methode verwendet wird, der `"storage-access"` lautet.

Der `Permissions.query()` Aufruf muss den eingebetteten Ursprung angeben; zum Beispiel:

```js
navigator.permissions.query({
  name: "top-level-storage-access",
  requestedOrigin: "https://www.example.com",
});
```

> [!NOTE]
> Die Nutzung dieser Funktion kann durch eine auf Ihrem Server gesetzte {{httpheader("Permissions-Policy/storage-access", "storage-access")}} [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) blockiert werden (dieselbe, die den Rest der Storage Access API kontrolliert). Darüber hinaus muss das Dokument zusätzliche browserspezifische Prüfungen wie Whitelists, Blacklists, auf dem Gerät durchgeführte Klassifizierungen, Benutzereinstellungen oder Anti-[Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking) Heuristiken bestehen.

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

Nach einem erfolgreichen `requestStorageAccessFor()` Aufruf werden standortübergreifende Anfragen Cookies enthalten, wenn sie [CORS](/de/docs/Web/HTTP/Guides/CORS) / [`crossorigin`](/de/docs/Web/HTML/Reference/Attributes/crossorigin) beinhalten, weshalb Websites möglicherweise warten möchten, bevor sie eine Anfrage auslösen. Solche Anfragen müssen die Option [`credentials: "include"`](/de/docs/Web/API/RequestInit#credentials) verwenden und Ressourcen müssen das `crossorigin="use-credentials"` Attribut beinhalten.

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
