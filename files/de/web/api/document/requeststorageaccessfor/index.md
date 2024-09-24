---
title: "Document: Methode requestStorageAccessFor()"
short-title: requestStorageAccessFor()
slug: Web/API/Document/requestStorageAccessFor
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{APIRef("Storage Access API")}}{{SeeCompatTable}}

Die **`requestStorageAccessFor()`**-Methode des {{domxref("Document")}}-Interfaces ermöglicht es Top-Level-Websites, Drittanbieter-Cookie-Zugriff im Namen von eingebetteten Inhalten zu beantragen, die von einer anderen Website innerhalb desselben [zusammengehörenden Website-Sets](/de/docs/Web/API/Storage_Access_API/Related_website_sets) stammen. Sie gibt ein {{jsxref("Promise")}} zurück, das erfüllt wird, wenn der Zugriff gewährt wurde, und abgelehnt wird, wenn der Zugriff verweigert wurde.

## Syntax

```js-nolint
requestStorageAccessFor(requestedOrigin)
```

### Parameter

- `requestedOrigin`
  - : Ein String, der die URL des Ursprungs darstellt, für den Sie den Drittanbieter-Cookie-Zugriff beantragen.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit `undefined` erfüllt wird, wenn der Zugriff auf Drittanbieter-Cookies gewährt wurde und abgelehnt wird, wenn der Zugriff verweigert wurde.

`requestStorageAccessFor()`-Anfragen werden automatisch abgelehnt, es sei denn, der Top-Level-Inhalt bearbeitet gerade eine Nutzergeste wie ein Tippen oder Klicken ({{Glossary("transient activation")}}), oder es wurde zuvor bereits eine Erlaubnis erteilt. Wenn keine Erlaubnis zuvor erteilt wurde, müssen sie innerhalb eines Nutzergestik-basierten Ereignis-Handlers ausgeführt werden. Das Verhalten der Nutzergeste hängt vom Zustand des Promises ab:

- Wenn das Promise erfüllt wird (d.h., die Erlaubnis wurde erteilt), wurde die Nutzergeste nicht verbraucht, sodass das Skript anschließend APIs aufrufen kann, die eine Nutzergeste erfordern.
- Wenn das Promise abgelehnt wird (d.h., die Erlaubnis wurde nicht erteilt), wurde die Nutzergeste verbraucht, sodass das Skript nichts durchführen kann, das eine Geste erfordert. Dies verhindert, dass Skripte `requestStorageAccessFor()` erneut aufrufen, wenn die Erlaubnis verweigert wurde.

### Ausnahmen

- `InvalidStateError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn das aktuelle {{domxref("Document")}} noch nicht aktiv ist.
- `NotAllowedError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn:
    - Das Fenster des Dokuments kein [sicherer Kontext](/de/docs/Web/Security/Secure_Contexts) ist.
    - Das Dokument nicht das Top-Level-Dokument ist.
    - Das Dokument einen `null`-Ursprung hat.
    - Der angegebene `requestedOrigin` [opake] ist(https://html.spec.whatwg.org/multipage/browsers.html#concept-origin-opaque).
    - Die Top-Level- und eingebetteten Websites nicht im selben [zusammengehörenden Website-Set](/de/docs/Web/API/Storage_Access_API/Related_website_sets) sind.
    - Das einbettende {{htmlelement("iframe")}} ist sandboxed, und das `allow-storage-access-by-user-activation` Token ist nicht gesetzt.
    - Die Nutzung durch eine {{httpheader("Permissions-Policy/storage-access", "storage-access")}} [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy) blockiert wird.
    - Die Nutzung durch die Berechtigungsanforderung des Benutzeragenten zur Verwendung der API verweigert wird.
- `TypeError`
  - : Wird ausgelöst, wenn `requestedOrigin` keine gültige URL ist.

## Beschreibung

Die `requestStorageAccessFor()`-Methode befasst sich mit Herausforderungen bei der Einführung der Storage Access API auf Top-Level-Websites, die standortübergreifende Bilder oder Skripte verwenden, die Cookies erfordern. Sie ist relevant für Benutzeragenten, die standardmäßig den Zugriff auf [Drittanbieter-](/de/docs/Web/Privacy/Third-party_cookies), [unpartitionierte](/de/docs/Web/API/Storage_Access_API#unpartitioned_versus_partitioned_cookies) Cookies blockieren, um die Privatsphäre zu verbessern (z.B. um Tracking zu verhindern), und ist eine vorgeschlagene Erweiterung der [Storage Access API](/de/docs/Web/API/Storage_Access_API).

`requestStorageAccessFor()` kann den Drittanbieter-Cookie-Zugriff für standortübergreifende Ressourcen direkt auf einer Top-Level-Site aktivieren, die nicht in der Lage sind, selbst einen Speicherzugriff anzufordern, wie z.B. {{htmlelement("img")}}-Elemente. Standortübergreifende Inhalte, die in `<iframe>`s eingebettet sind und ihre eigene Logik und Ressourcen besitzen sowie Drittanbieter-Cookie-Zugriff benötigen, sollten den Speicherzugriff über {{domxref("Document.requestStorageAccess()")}} anfordern.

Um zu überprüfen, ob die Erlaubnis zum Zugriff auf Drittanbieter-Cookies bereits über `requestStorageAccessFor()` erteilt wurde, können Sie {{domxref("Permissions.query()")}} aufrufen und den Feature-Namen `"top-level-storage-access"` angeben. Dies unterscheidet sich vom Feature-Namen, der für die reguläre {{domxref("Document.requestStorageAccess()")}}-Methode verwendet wird, die `"storage-access"` ist.

Der `Permissions.query()`-Aufruf muss den eingebetteten Ursprung spezifizieren; zum Beispiel:

```js
navigator.permissions.query({
  name: "top-level-storage-access",
  requestedOrigin: "https://www.example.com",
});
```

> [!NOTE]
> Die Nutzung dieses Features kann durch eine {{httpheader("Permissions-Policy/storage-access", "storage-access")}} [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy) blockiert werden, die auf Ihrem Server festgelegt ist (die gleiche, die den Rest der Storage Access API steuert). Darüber hinaus muss das Dokument zusätzliche browserspezifische Prüfungen bestehen, wie Whitelists, Blacklists, On-Device-Klassifizierung, Benutzereinstellungen oder Anti-[Clickjacking](/de/docs/Glossary/Clickjacking) Heuristiken.

## Beispiele

```js
function rSAFor() {
  if ("requestStorageAccessFor" in document) {
    document.requestStorageAccessFor("https://example.com").then(
      (res) => {
        // Verwenden von Storage Access
        doThingsWithCookies();
      },
      (err) => {
        // Fehler behandeln
      },
    );
  }
}
```

Nach einem erfolgreichen `requestStorageAccessFor()`-Aufruf werden standortübergreifende Anfragen Cookies enthalten, wenn sie [CORS](/de/docs/Web/HTTP/CORS) / [`crossorigin`](/de/docs/Web/HTML/Attributes/crossorigin) enthalten, sodass Websites möglicherweise warten möchten, bevor sie eine Anfrage auslösen. Solche Anfragen müssen die Option [`credentials: "include"`](/de/docs/Web/API/RequestInit#credentials) verwenden und Ressourcen müssen das Attribut `crossorigin="use-credentials"` beinhalten.

Zum Beispiel:

```js
function checkCookie() {
  fetch("https://example.com/getcookies.json", {
    method: "GET",
    credentials: "include",
  })
    .then((response) => response.json())
    .then((json) => {
      // Etwas tun
    });
}
```

> [!NOTE]
> Sehen Sie [Using the Storage Access API](/de/docs/Web/API/Storage_Access_API/Using) für ein vollständigeres Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("Document.hasStorageAccess()")}}, {{domxref("Document.hasUnpartitionedCookieAccess()")}}, {{domxref("Document.requestStorageAccess()")}}
- [Using the Storage Access API](/de/docs/Web/API/Storage_Access_API/Using)
- [Introducing Storage Access API](https://webkit.org/blog/8124/introducing-storage-access-api/) (WebKit-Blog)
