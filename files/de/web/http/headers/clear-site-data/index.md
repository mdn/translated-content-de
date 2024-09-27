---
title: Clear-Site-Data
slug: Web/HTTP/Headers/Clear-Site-Data
l10n:
  sourceCommit: bb23abe84f0f4da3cf5d72a66d356cf5f9e3cfa2
---

{{securecontext_header}}{{HTTPSidebar}}

Der **`Clear-Site-Data`**-Header löscht Browsing-Daten (Cookies, Speicher, Cache), die mit der anfordernden Website verbunden sind. Er ermöglicht Webentwicklern, mehr Kontrolle über die von einem Client-Browser für ihre Ursprünge gespeicherten Daten zu haben.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>[Response header](/de/docs/Glossary/Response_header)</td>
    </tr>
    <tr>
      <th scope="row">[Verbotener Header-Name](/de/docs/Glossary/Forbidden_header_name)</th>
      <td>nein</td>
    </tr>
  </tbody>
</table>

## Syntax

Der `Clear-Site-Data`-Header akzeptiert eine oder mehrere Direktiven. Wenn alle Datentypen gelöscht werden sollen, kann die Wildcard-Direktive (`"*"`) verwendet werden.

```http
// Single directive
Clear-Site-Data: "cache"

// Multiple directives (comma separated)
Clear-Site-Data: "cache", "cookies"

// Wild card
Clear-Site-Data: "*"
```

## Direktiven

> [!NOTE]
> Alle Direktiven müssen der [quoted-string Grammatik](https://datatracker.ietf.org/doc/html/rfc7230#section-3.2.6) entsprechen. Eine Direktive ohne Anführungszeichen ist ungültig.

- `"cache"` {{Experimental_Inline}}

  - : Gibt an, dass der Server wünscht, lokal zwischengespeicherte Daten (den Browser-Cache, siehe [HTTP-Caching](/de/docs/Web/HTTP/Caching)) für den Ursprung der Antwort-URL zu entfernen. Je nach Browser könnten auch Dinge wie vorgerenderte Seiten, Skript-Caches, WebGL-Shader-Caches oder Adressleisten-Vorschläge gelöscht werden.

- `"clientHints"` {{Experimental_Inline}}

  - : Gibt an, dass der Server wünscht, alle [Client Hints](/de/docs/Web/HTTP/Client_hints) (angefordert über {{httpheader("Accept-CH")}}) zu entfernen, die für den Ursprung der Antwort-URL gespeichert sind.

    > [!NOTE]
    > In Browsern, die den Datentyp `"clientHints"` unterstützen, werden Client Hints auch gelöscht, wenn die Typen `"cache"`, `"cookies"` oder `"*"` angegeben sind. `"clientHints"` wird daher nur benötigt, wenn keiner dieser anderen Typen angegeben ist.

- `"cookies"`
  - : Gibt an, dass der Server wünscht, alle Cookies für den Ursprung der Antwort-URL zu entfernen. Auch HTTP-Authentifizierungsdaten werden gelöscht. Dies betrifft die gesamte registrierte Domain, einschließlich Subdomains. So werden sowohl `https://example.com` als auch `https://stage.example.com` Cookies entfernt.
- `"storage"`

  - : Gibt an, dass der Server wünscht, den gesamten DOM-Speicher für den Ursprung der Antwort-URL zu entfernen. Dies umfasst Speichermechanismen wie:

    - localStorage (führt `localStorage.clear` aus),
    - sessionStorage (führt `sessionStorage.clear` aus),
    - IndexedDB (führt für jede Datenbank [`IDBFactory.deleteDatabase`](/de/docs/Web/API/IDBFactory/deleteDatabase) aus),
    - Registrierung von Service-Workern (führt für jede Registrierung von Service-Workern [`ServiceWorkerRegistration.unregister`](/de/docs/Web/API/ServiceWorkerRegistration/unregister) aus),
    - Web-SQL-Datenbanken (veraltet),
    - [FileSystem API Daten](/de/docs/Web/API/File_and_Directory_Entries_API),
    - Plugin-Daten (Flash über [`NPP_ClearSiteData`](https://wiki.mozilla.org/NPAPI:ClearSiteData)).

- `"executionContexts"` {{Experimental_Inline}}
  - : Gibt an, dass der Server wünscht, alle Browsing-Kontexte für den Ursprung der Antwort neu zu laden ([`Location.reload`](/de/docs/Web/API/Location/reload)).
- `"*"` (Wildcard)
  - : Gibt an, dass der Server wünscht, alle Datentypen für den Ursprung der Antwort zu löschen. Wenn in zukünftigen Versionen dieses Headers weitere Datentypen ergänzt werden, werden sie ebenfalls davon erfasst.

## Beispiele

### Abmeldung von einer Website

Wenn sich ein Benutzer von Ihrer Website oder Ihrem Dienst abmeldet, möchten Sie möglicherweise lokal gespeicherte Daten entfernen. Dazu fügen Sie den `Clear-Site-Data`-Header zu der Seite hinzu, die die erfolgreiche Abmeldung von der Website bestätigt (`https://example.com/logout`, zum Beispiel):

```http
Clear-Site-Data: "cache", "cookies", "storage", "executionContexts"
```

### Cookies löschen

Wird dieser Header mit der Antwort unter `https://example.com/clear-cookies` geliefert, werden alle Cookies auf derselben Domain `https://example.com` und allen Subdomains (wie `https://stage.example.com`, etc.) gelöscht.

```http
Clear-Site-Data: "cookies"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Cache-Control")}}
