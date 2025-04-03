---
title: "Dokument: requestStorageAccessFor()-Methode"
short-title: requestStorageAccessFor()
slug: Web/API/Document/requestStorageAccessFor
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{APIRef("Storage Access API")}}{{SeeCompatTable}}

Die **`requestStorageAccessFor()`**-Methode des [`Document`](/de/docs/Web/API/Document)-Interfaces ermöglicht es Top-Level-Seiten, den Zugriff auf Drittanbieter-Cookies im Namen von eingebettetem Inhalt aus einer anderen Website innerhalb desselben [verwandten Website-Sets](/de/docs/Web/API/Storage_Access_API/Related_website_sets) anzufordern. Sie gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn der Zugriff gewährt wurde, und abgelehnt, wenn der Zugriff verweigert wurde.

## Syntax

```js-nolint
requestStorageAccessFor(requestedOrigin)
```

### Parameter

- `requestedOrigin`
  - : Ein String, der die URL des Ursprungs darstellt, für den Sie den Zugriff auf Drittanbieter-Cookies anfordern.

### Rückgabewert

Ein {{jsxref("Promise")}}, das sich mit `undefined` erfüllt, wenn der Zugriff auf Drittanbieter-Cookies gewährt wurde, und abgelehnt wird, wenn der Zugriff verweigert wurde.

`requestStorageAccessFor()`-Anfragen werden automatisch abgelehnt, es sei denn, der Top-Level-Inhalt verarbeitet derzeit eine Benutzeraktion wie ein Tippen oder Klicken ({{Glossary("transient_activation", "transiente Aktivierung")}}) oder die Berechtigung wurde zuvor bereits erteilt. Wenn die Berechtigung nicht zuvor erteilt wurde, müssen sie innerhalb eines auf Benutzeraktionen basierenden Ereignishandlers ausgeführt werden. Das Verhalten der Benutzeraktion hängt vom Zustand des Promises ab:

- Wenn das Promise aufgelöst wird (d.h. die Berechtigung wurde erteilt), wurde die Benutzeraktion nicht verbraucht, sodass das Skript anschließend APIs aufrufen kann, die eine Benutzeraktion erfordern.
- Wenn das Promise abgelehnt wird (d.h. die Berechtigung wurde nicht erteilt), wurde die Benutzeraktion verbraucht, sodass das Skript nichts tun kann, was eine Aktion erfordert. Dies verhindert, dass Skripte `requestStorageAccessFor()` erneut aufrufen, wenn die Berechtigung verweigert wird.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das aktuelle [`Document`](/de/docs/Web/API/Document) noch nicht aktiv ist.
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn:
    - Das Fenster des Dokuments kein [sicherer Kontext](/de/docs/Web/Security/Secure_Contexts) ist.
    - Das Dokument nicht das Top-Level-Dokument ist.
    - Das Dokument eine `null`-Herkunft hat.
    - Die angegebene `requestedOrigin` [opak](https://html.spec.whatwg.org/multipage/browsers.html#concept-origin-opaque) ist.
    - Die Top-Level- und eingebetteten Seiten nicht im selben [verwandten Website-Set](/de/docs/Web/API/Storage_Access_API/Related_website_sets) sind.
    - Das einbettende {{htmlelement("iframe")}} sandboxed ist und das `allow-storage-access-by-user-activation`-Token nicht gesetzt ist.
    - Die Nutzung durch eine {{httpheader("Permissions-Policy/storage-access", "storage-access")}} [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy) blockiert wird.
    - Die Nutzung durch die Berechtigungsanfrage des Benutzeragenten zur Nutzung der API verweigert wird.
- `TypeError`
  - : Wird ausgelöst, wenn `requestedOrigin` keine gültige URL ist.

## Beschreibung

Die `requestStorageAccessFor()`-Methode adressiert Herausforderungen bei der Übernahme der Storage Access API auf Top-Level-Seiten, die Cross-Site-Bilder oder -Skripte verwenden, die Cookies benötigen. Sie ist relevant für Benutzeragenten, die standardmäßig den Zugriff auf [Drittanbieter-](/de/docs/Web/Privacy/Guides/Third-party_cookies), [unpartitionierte](/de/docs/Web/API/Storage_Access_API#unpartitioned_versus_partitioned_cookies) Cookies blockieren, um die Privatsphäre zu verbessern (z.B. um Tracking zu verhindern), und ist eine vorgeschlagene Erweiterung der [Storage Access API](/de/docs/Web/API/Storage_Access_API).

`requestStorageAccessFor()` kann den Zugriff auf Drittanbieter-Cookies für cross-site Ressourcen ermöglichen, die direkt in eine Top-Level-Seite eingebunden sind und selbst keinen Zugriff auf Speicher anfordern können, wie z.B. {{htmlelement("img")}} Elemente. Eingebetteter Cross-Site-Inhalt in `<iframe>`s, der über eigene Logik und Ressourcen verfügt und Zugriff auf Drittanbieter-Cookies benötigt, sollte den Zugriff über [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess) anfordern.

Um zu überprüfen, ob die Berechtigung zum Zugriff auf Drittanbieter-Cookies bereits über `requestStorageAccessFor()` erteilt wurde, können Sie [`Permissions.query()`](/de/docs/Web/API/Permissions/query) aufrufen und den Feature-Namen `"top-level-storage-access"` angeben. Dies unterscheidet sich vom Feature-Namen, der für die reguläre [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess)-Methode verwendet wird, der `"storage-access"` ist.

Der `Permissions.query()`-Aufruf muss die eingebettete Herkunft spezifizieren; zum Beispiel:

```js
navigator.permissions.query({
  name: "top-level-storage-access",
  requestedOrigin: "https://www.example.com",
});
```

> [!NOTE]
> Die Nutzung dieses Features kann durch eine auf Ihrem Server gesetzte {{httpheader("Permissions-Policy/storage-access", "storage-access")}} [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy) blockiert werden (dieselbe, die den Rest der Storage Access API kontrolliert). Darüber hinaus muss das Dokument zusätzliche browser-spezifische Prüfungen bestehen, wie Whitelists, Blacklists, geräteinterne Klassifizierungen, Benutzereinstellungen oder Anti-[Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking)-Heuristiken.

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

Nach einem erfolgreichen `requestStorageAccessFor()`-Aufruf werden Cross-Site-Anfragen Cookies enthalten, wenn sie [CORS](/de/docs/Web/HTTP/Guides/CORS) / [`crossorigin`](/de/docs/Web/HTML/Attributes/crossorigin) enthalten, sodass Websites möglicherweise warten möchten, bevor sie eine Anfrage auslösen. Solche Anfragen müssen die [`credentials: "include"`](/de/docs/Web/API/RequestInit#credentials)-Option verwenden und Ressourcen müssen das `crossorigin="use-credentials"`-Attribut enthalten.

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
