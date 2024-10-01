---
title: Clear-Site-Data
slug: Web/HTTP/Headers/Clear-Site-Data
l10n:
  sourceCommit: bb23abe84f0f4da3cf5d72a66d356cf5f9e3cfa2
---

{{securecontext_header}}{{HTTPSidebar}}

Der **`Clear-Site-Data`** Header löscht Browserdaten (Cookies, Speicher, Cache), die mit der anfordernden Website verknüpft sind. Er ermöglicht Webentwicklern mehr Kontrolle über die Daten, die von einem Client-Browser für ihre Ursprünge gespeichert werden.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
      <td>nein</td>
    </tr>
  </tbody>
</table>

## Syntax

Der `Clear-Site-Data`-Header akzeptiert eine oder mehrere Direktiven. Sollten alle Datentypen gelöscht werden, kann die Platzhalter-Direktive (`"*"`) verwendet werden.

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
> Alle Direktiven müssen mit der [quoted-string Grammatik](https://datatracker.ietf.org/doc/html/rfc7230#section-3.2.6) übereinstimmen. Eine Direktive ohne Anführungszeichen ist ungültig.

- `"cache"` {{Experimental_Inline}}

  - : Gibt an, dass der Server wünscht, lokal zwischengespeicherte Daten (den Browser-Cache, siehe [HTTP-Caching](/de/docs/Web/HTTP/Caching)) für den Ursprung der Antwort-URL zu entfernen. Abhängig vom Browser könnten auch Dinge wie vorgerenderte Seiten, Skriptcaches, WebGL-Shader-Caches oder Adressleisten-Vorschläge gelöscht werden.

- `"clientHints"` {{Experimental_Inline}}

  - : Gibt an, dass der Server wünscht, alle [Client Hints](/de/docs/Web/HTTP/Client_hints) (angefordert über {{httpheader("Accept-CH")}}) für den Ursprung der Antwort-URL zu entfernen.

    > [!NOTE]
    > In Browsern, die den Datentyp `"clientHints"` unterstützen, werden Client Hints auch gelöscht, wenn die Typen `"cache"`, `"cookies"` oder `"*"` angegeben sind. `"clientHints"` ist daher nur erforderlich, wenn keiner dieser anderen Typen angegeben ist.

- `"cookies"`
  - : Gibt an, dass der Server wünscht, alle Cookies für den Ursprung der Antwort-URL zu entfernen. HTTP-Authentifizierungsdaten werden ebenfalls gelöscht. Dies betrifft die gesamte registrierte Domain, einschließlich ihrer Subdomains. Also werden sowohl `https://example.com` als auch `https://stage.example.com` die Cookies entfernt.
- `"storage"`

  - : Gibt an, dass der Server wünscht, alle DOM-Speicher für den Ursprung der Antwort-URL zu entfernen. Dies umfasst Speichermechanismen wie:

    - localStorage (führt `localStorage.clear` aus),
    - sessionStorage (führt `sessionStorage.clear` aus),
    - IndexedDB (führt für jede Datenbank [`IDBFactory.deleteDatabase`](/de/docs/Web/API/IDBFactory/deleteDatabase) aus),
    - Service-Worker-Registrierungen (führt für jede Service-Worker-Registrierung [`ServiceWorkerRegistration.unregister`](/de/docs/Web/API/ServiceWorkerRegistration/unregister) aus),
    - Web SQL Datenbanken (veraltet),
    - [FileSystem API Daten](/de/docs/Web/API/File_and_Directory_Entries_API),
    - Plugindaten (Flash über [`NPP_ClearSiteData`](https://wiki.mozilla.org/NPAPI:ClearSiteData)).

- `"executionContexts"` {{Experimental_Inline}}
  - : Gibt an, dass der Server wünscht, alle Browsing-Kontexte für den Ursprung der Antwort neu zu laden ([`Location.reload`](/de/docs/Web/API/Location/reload)).
- `"*"` (Platzhalter)
  - : Gibt an, dass der Server wünscht, alle Arten von Daten für den Ursprung der Antwort zu löschen. Sollten in zukünftigen Versionen dieses Headers weitere Datentypen hinzugefügt werden, werden diese ebenfalls abgedeckt sein.

## Beispiele

### Von einer Website abmelden

Wenn sich ein Benutzer von Ihrer Website oder Ihrem Dienst abmeldet, möchten Sie möglicherweise lokal gespeicherte Daten entfernen. Dafür fügen Sie den `Clear-Site-Data`-Header zu der Seite hinzu, die das erfolgreiche Abmelden von der Seite bestätigt hat (z.B. `https://example.com/logout`):

```http
Clear-Site-Data: "cache", "cookies", "storage", "executionContexts"
```

### Cookies löschen

Wenn dieser Header mit der Antwort unter `https://example.com/clear-cookies` geliefert wird, werden alle Cookies auf derselben Domain `https://example.com` und allen Subdomains (wie `https://stage.example.com`, etc.) gelöscht.

```http
Clear-Site-Data: "cookies"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Cache-Control")}}
