---
title: "Dokument: Methode requestStorageAccessFor()"
short-title: requestStorageAccessFor()
slug: Web/API/Document/requestStorageAccessFor
l10n:
  sourceCommit: 41a472e5bad6c6d2698d6e85c1172909cb102fa1
---

{{APIRef("Storage Access API")}}{{non-standard_header}}

Die Methode **`requestStorageAccessFor()`** der Schnittstelle [`Document`](/de/docs/Web/API/Document) ermöglicht es Top-Level-Websites, im Namen eingebetteter Inhalte, die von einer anderen Website im selben [Verbund zusammengehöriger Websites](https://privacysandbox.google.com/cookies/related-website-sets-integration) stammen, Zugriff auf Drittanbieter-Cookies anzufordern. Sie gibt ein {{jsxref("Promise")}} zurück, das erfüllt wird, wenn der Zugriff gewährt wurde, und abgelehnt wird, wenn der Zugriff verweigert wurde.

## Syntax

```js-nolint
requestStorageAccessFor(requestedOrigin)
```

### Parameter

- `requestedOrigin`
  - : Ein String mit der URL des Ursprungs, für den Sie Zugriff auf Drittanbieter-Cookies anfordern.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit `undefined` erfüllt wird, wenn der Zugriff auf Drittanbieter-Cookies gewährt wurde, und abgelehnt wird, wenn der Zugriff verweigert wurde.

Anfragen mit `requestStorageAccessFor()` werden automatisch abgelehnt, sofern der Top-Level-Inhalt nicht gerade eine Nutzerinteraktion wie ein Tippen oder Klicken verarbeitet ({{Glossary("transient_activation", "transiente Aktivierung")}}) oder die Berechtigung nicht bereits zuvor erteilt wurde. Wurde die Berechtigung nicht zuvor erteilt, müssen sie innerhalb eines Ereignishandlers ausgeführt werden, der durch eine Nutzerinteraktion ausgelöst wurde. Wie sich die Nutzerinteraktion auswirkt, hängt vom Zustand des Promise ab:

- Wird das Promise erfüllt (d.h. die Berechtigung wurde erteilt), wurde die Nutzerinteraktion nicht verbraucht. Das Skript kann anschließend also APIs aufrufen, die eine Nutzerinteraktion erfordern.
- Wird das Promise abgelehnt (d.h. die Berechtigung wurde nicht erteilt), wurde die Nutzerinteraktion verbraucht. Das Skript kann daher nichts mehr ausführen, was eine Nutzerinteraktion erfordert. Dies verhindert, dass Skripte `requestStorageAccessFor()` erneut aufrufen, wenn die Berechtigung verweigert wurde.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das aktuelle [`Document`](/de/docs/Web/API/Document) noch nicht aktiv ist.
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn:
    - das Fenster des Dokuments kein [sicherer Kontext](/de/docs/Web/Security/Defenses/Secure_Contexts) ist.
    - das Dokument nicht das Top-Level-Dokument ist.
    - das Dokument einen `null`-Ursprung hat.
    - der angegebene `requestedOrigin` [opak](https://html.spec.whatwg.org/multipage/browsers.html#concept-origin-opaque) ist.
    - die Top-Level-Website und die eingebettete Website nicht zum selben [Verbund zusammengehöriger Websites](https://privacysandbox.google.com/cookies/related-website-sets-integration) gehören.
    - das einbettende {{htmlelement("iframe")}} durch eine Sandbox eingeschränkt ist und das Token `allow-storage-access-by-user-activation` nicht gesetzt ist.
    - die Verwendung durch eine {{httpheader("Permissions-Policy/storage-access", "storage-access")}}-[Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) blockiert wird.
    - die Verwendung durch die Berechtigungsabfrage des User Agents für die API verweigert wird.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `requestedOrigin` keine gültige URL ist.

## Beschreibung

Die Methode `requestStorageAccessFor()` hilft bei Herausforderungen, die sich bei der Einführung der Storage Access API auf Top-Level-Websites ergeben, die websiteübergreifende Bilder oder Skripte verwenden, für die Cookies erforderlich sind. Sie ist für User Agents relevant, die den Zugriff auf [Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies), die [nicht partitioniert](/de/docs/Web/API/Storage_Access_API#unpartitioned_versus_partitioned_cookies) sind, standardmäßig blockieren, um den Datenschutz zu verbessern (z. B. um Tracking zu verhindern). Sie ist eine vorgeschlagene Erweiterung der [Storage Access API](/de/docs/Web/API/Storage_Access_API).

`requestStorageAccessFor()` kann den Zugriff auf Drittanbieter-Cookies für websiteübergreifende Ressourcen ermöglichen, die direkt in eine Top-Level-Website eingebettet sind und selbst keinen Speicherzugriff anfordern können, beispielsweise {{htmlelement("img")}}-Elemente. Websiteübergreifende Inhalte, die in `<iframe>`-Elemente eingebettet sind, über eigene Logik und Ressourcen verfügen und Zugriff auf Drittanbieter-Cookies benötigen, sollten den Speicherzugriff über [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess) anfordern.

Um zu prüfen, ob die Berechtigung zum Zugriff auf Drittanbieter-Cookies bereits über `requestStorageAccessFor()` erteilt wurde, können Sie [`Permissions.query()`](/de/docs/Web/API/Permissions/query) mit dem Funktionsnamen `"top-level-storage-access"` aufrufen. Dieser unterscheidet sich vom Funktionsnamen `"storage-access"`, der für die reguläre Methode [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess) verwendet wird.

Beim Aufruf von `Permissions.query()` muss der eingebettete Ursprung angegeben werden, zum Beispiel:

```js
navigator.permissions.query({
  name: "top-level-storage-access",
  requestedOrigin: "https://www.example.com",
});
```

> [!NOTE]
> Die Verwendung dieser Funktion kann durch eine auf Ihrem Server festgelegte {{httpheader("Permissions-Policy/storage-access", "storage-access")}}-[Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) blockiert werden (dieselbe, die den übrigen Teil der Storage Access API steuert). Außerdem muss das Dokument zusätzliche browserspezifische Prüfungen bestehen, etwa anhand von Zulassungslisten, Sperrlisten, einer Klassifizierung auf dem Gerät, Nutzereinstellungen oder Heuristiken gegen [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking).

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

Nach einem erfolgreichen Aufruf von `requestStorageAccessFor()` enthalten websiteübergreifende Anfragen Cookies, wenn sie [CORS](/de/docs/Web/HTTP/Guides/CORS) / [`crossorigin`](/de/docs/Web/HTML/Reference/Attributes/crossorigin) verwenden. Websites sollten daher gegebenenfalls warten, bevor sie eine Anfrage auslösen. Solche Anfragen müssen die Option [`credentials: "include"`](/de/docs/Web/API/RequestInit#credentials) verwenden, und Ressourcen müssen das Attribut `crossorigin="use-credentials"` enthalten.

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
> Ein ausführlicheres Beispiel finden Sie unter [Verwendung der Storage Access API](/de/docs/Web/API/Storage_Access_API/Using).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Document.hasStorageAccess()`](/de/docs/Web/API/Document/hasStorageAccess), [`Document.hasUnpartitionedCookieAccess()`](/de/docs/Web/API/Document/hasUnpartitionedCookieAccess), [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess)
- [Verwendung der Storage Access API](/de/docs/Web/API/Storage_Access_API/Using)
- [Einführung in die Storage Access API](https://webkit.org/blog/8124/introducing-storage-access-api/) (WebKit-Blog)
