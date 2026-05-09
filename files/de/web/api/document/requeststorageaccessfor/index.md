---
title: "Dokument: requestStorageAccessFor() Methode"
short-title: requestStorageAccessFor()
slug: Web/API/Document/requestStorageAccessFor
l10n:
  sourceCommit: 44a5fa2aace490e0114349d9d683675b2f5cacce
---

{{APIRef("Storage Access API")}}{{deprecated_header}}{{non-standard_header}}

Die **`requestStorageAccessFor()`**-Methode der [`Document`](/de/docs/Web/API/Document)-Schnittstelle ermöglicht es obersten Webseiten, den Zugriff auf Drittanbieter-Cookies im Namen von eingebetteten Inhalten anzufordern, die von einer anderen Seite im gleichen [verwandten Website-Set](/de/docs/Web/API/Storage_Access_API/Related_website_sets) stammen. Sie gibt ein {{jsxref("Promise")}} zurück, das sich erfüllt, wenn der Zugriff gewährt wurde, und abgelehnt wird, wenn der Zugriff verweigert wurde.

## Syntax

```js-nolint
requestStorageAccessFor(requestedOrigin)
```

### Parameter

- `requestedOrigin`
  - : Ein String, der die URL des Ursprungs darstellt, für den Sie den Zugriff auf Drittanbieter-Cookies anfordern.

### Rückgabewert

Ein {{jsxref("Promise")}}, das sich mit `undefined` erfüllt, wenn der Zugriff auf Drittanbieter-Cookies gewährt wurde, und abgelehnt wird, wenn der Zugriff verweigert wurde.

Anfragen an `requestStorageAccessFor()` werden automatisch abgelehnt, es sei denn, der oberste Inhalt verarbeitet derzeit eine Benutzeraktion wie einen Tippen oder Klick ({{Glossary("transient_activation", "transient activation")}}) oder die Erlaubnis wurde zuvor bereits erteilt. Wenn die Erlaubnis nicht zuvor erteilt wurde, müssen sie innerhalb eines ereignisbasierten Benutzeraktions-Handlers ausgeführt werden. Das Verhalten der Benutzeraktion hängt vom Status des Promises ab:

- Wenn sich das Promise erfüllt (d.h. die Erlaubnis wurde erteilt), wurde die Benutzeraktion nicht verbraucht, sodass das Skript anschließend APIs aufrufen kann, die eine Benutzeraktion erfordern.
- Wenn das Promise abgelehnt wird (d.h. die Erlaubnis wurde nicht erteilt), wurde die Benutzeraktion verbraucht, sodass das Skript nichts tun kann, was eine Aktion erfordert. Dadurch wird verhindert, dass Skripts `requestStorageAccessFor()` erneut aufrufen, wenn die Erlaubnis verweigert wurde.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das aktuelle [`Document`](/de/docs/Web/API/Document) noch nicht aktiv ist.
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn:
    - Das Fenster des Dokuments nicht ein [sicherer Kontext](/de/docs/Web/Security/Defenses/Secure_Contexts) ist.
    - Das Dokument nicht das oberste Dokument ist.
    - Das Dokument einen `null`-Ursprung hat.
    - Der angegebene `requestedOrigin` [opake](https://html.spec.whatwg.org/multipage/browsers.html#concept-origin-opaque) ist.
    - Die oberste und eingebetteten Seiten nicht im gleichen [verwandten Website-Set](/de/docs/Web/API/Storage_Access_API/Related_website_sets) sind.
    - Das einbettende {{htmlelement("iframe")}} sandboxed ist und das `allow-storage-access-by-user-activation` Token nicht gesetzt ist.
    - Die Verwendung durch eine {{httpheader("Permissions-Policy/storage-access", "storage-access")}} [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) blockiert wird.
    - Die Verwendung durch die Berechtigungsanfrage des Benutzeragentes zur Nutzung der API abgelehnt wird.
- `TypeError`
  - : Wird ausgelöst, wenn `requestedOrigin` keine gültige URL ist.

## Beschreibung

Die Methode `requestStorageAccessFor()` adressiert Herausforderungen bei der Einführung der Storage Access API auf obersten Websites, die cross-site Bilder oder Skripts verwenden, die Cookies benötigen. Sie ist relevant für Benutzeragenten, die standardmäßig den Zugriff auf [Drittanbieter](/de/docs/Web/Privacy/Guides/Third-party_cookies), [unpartitionierte](/de/docs/Web/API/Storage_Access_API#unpartitioned_versus_partitioned_cookies) Cookies blockieren, um die Privatsphäre zu verbessern (z.B. um Tracking zu verhindern), und ist eine vorgeschlagene Erweiterung der [Storage Access API](/de/docs/Web/API/Storage_Access_API).

`requestStorageAccessFor()` kann den Zugriff auf Drittanbieter-Cookies für cross-site Ressourcen ermöglichen, die direkt in eine oberste Website eingebettet sind und die nicht in der Lage sind, selbst Zugriff zu beantragen, z.B. {{htmlelement("img")}}-Elemente. Cross-site Inhalte, die in `<iframe>`s eingebettet sind, ihre eigene Logik und Ressourcen haben und Zugriff auf Drittanbieter-Cookies benötigen, sollten über [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess) Zugriff anfordern.

Um zu prüfen, ob die Erlaubnis zum Zugriff auf Drittanbieter-Cookies bereits über `requestStorageAccessFor()` gewährt wurde, kann [`Permissions.query()`](/de/docs/Web/API/Permissions/query) aufgerufen werden, wobei der Funktionsname `"top-level-storage-access"` angegeben wird. Dies unterscheidet sich vom Funktionsnamen der regulären [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess) Methode, der `"storage-access"` ist.

Der Aufruf von `Permissions.query()` muss den eingebetteten Ursprung spezifizieren; zum Beispiel:

```js
navigator.permissions.query({
  name: "top-level-storage-access",
  requestedOrigin: "https://www.example.com",
});
```

> [!NOTE]
> Die Verwendung dieser Funktion kann durch eine {{httpheader("Permissions-Policy/storage-access", "storage-access")}} [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy), die auf Ihrem Server gesetzt ist (die gleiche, die den Rest der Storage Access API steuert), blockiert werden. Außerdem muss das Dokument zusätzliche browserspezifische Überprüfungen wie Allowlisten, Blocklisten, geräteinterne Klassifizierungen, Benutzereinstellungen oder Anti-[Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking)-Heuristiken bestehen.

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

Nach einem erfolgreichen `requestStorageAccessFor()`-Aufruf werden cross-site Anfragen Cookies enthalten, wenn sie [CORS](/de/docs/Web/HTTP/Guides/CORS) / [`crossorigin`](/de/docs/Web/HTML/Reference/Attributes/crossorigin) enthalten; daher möchten die Seiten möglicherweise warten, bevor sie eine Anfrage auslösen. Solche Anfragen müssen die Option [`credentials: "include"`](/de/docs/Web/API/RequestInit#credentials) verwenden und Ressourcen müssen das Attribut `crossorigin="use-credentials"` enthalten.

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
