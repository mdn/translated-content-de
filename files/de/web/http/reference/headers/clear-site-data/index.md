---
title: Clear-Site-Data header
short-title: Clear-Site-Data
slug: Web/HTTP/Reference/Headers/Clear-Site-Data
l10n:
  sourceCommit: ee756fd51ccbc4820a4b334aa753648650ad1d51
---

{{securecontext_header}}{{HTTPSidebar}}

Der HTTP **`Clear-Site-Data`** {{Glossary("response_header", "Antwort-Header")}} sendet ein Signal an den Client, dass er alle Browsing-Daten bestimmter Typen (Cookies, Speicher, Cache), die mit der anfragenden Website verbunden sind, entfernen soll. Er ermöglicht Webentwicklern, mehr Kontrolle über die von Browsern für ihre Ursprünge gespeicherten Daten zu haben.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anfrage-Header")}}</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

## Syntax

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
> Alle Direktiven müssen der [quoted-string Grammatik](https://datatracker.ietf.org/doc/html/rfc7230#section-3.2.6) entsprechen. Eine Direktive, die keine Anführungszeichen enthält, ist ungültig.

- `"cache"`

  - : Der Server signalisiert, dass der Client lokal zwischengespeicherte Daten (den Browser-Cache, siehe [HTTP-Caching](/de/docs/Web/HTTP/Guides/Caching)) für den Ursprung der Antwort-URL entfernen soll. Abhängig vom Browser könnte dies auch Dinge wie vorgerenderte Seiten, Script-Caches, WebGL-Shader-Caches oder Adressleisten-Vorschläge leeren.

- `"clientHints"` {{Experimental_Inline}}

  - : Gibt an, dass der Server alle [Client-Hints](/de/docs/Web/HTTP/Guides/Client_hints) (angefordert über {{HTTPHeader("Accept-CH")}}), die für den Ursprung der Antwort-URL gespeichert sind, entfernen wird.

    > [!NOTE]
    > In Browsern, die den Datentyp `"clientHints"` unterstützen, werden Client-Hints auch gelöscht, wenn die Typen `"cache"`, `"cookies"` oder `"*"` angegeben sind. `"clientHints"` ist daher nur erforderlich, wenn keiner dieser anderen Typen angegeben ist.

- `"cookies"`
  - : Der Server signalisiert, dass der Client alle Cookies für den Ursprung der Antwort-URL entfernen soll. HTTP-Authentifizierungs-Credentials werden ebenfalls gelöscht. Dies betrifft die gesamte registrierte Domain, einschließlich Subdomains. Sowohl `https://example.com` als auch `https://stage.example.com` werden daher von den Cookies befreit.
- `"storage"`

  - : Der Server signalisiert, dass der Client den gesamten DOM-Speicher für den Ursprung der Antwort-URL entfernen soll. Dies umfasst Speichermechanismen wie:

    - localStorage (führt `localStorage.clear` aus),
    - sessionStorage (führt `sessionStorage.clear` aus),
    - IndexedDB (für jede Datenbank wird [`IDBFactory.deleteDatabase`](/de/docs/Web/API/IDBFactory/deleteDatabase) ausgeführt),
    - Service-Worker-Registrierungen (für jede Service-Worker-Registrierung wird [`ServiceWorkerRegistration.unregister`](/de/docs/Web/API/ServiceWorkerRegistration/unregister) ausgeführt),
    - Web SQL-Datenbanken (veraltet),
    - [FileSystem API-Daten](/de/docs/Web/API/File_and_Directory_Entries_API),
    - Plugin-Daten (Flash über [`NPP_ClearSiteData`](https://wiki.mozilla.org/NPAPI:ClearSiteData)).

- `"executionContexts"` {{Experimental_Inline}}
  - : Der Server signalisiert, dass der Client alle Browsing-Kontexte für den Ursprung der Antwort neu laden soll ([`Location.reload`](/de/docs/Web/API/Location/reload)).
- `"*"` (Wildcard)
  - : Der Server signalisiert, dass der Client alle Datentypen für den Ursprung der Antwort löschen soll. Wenn in zukünftigen Versionen dieses Headers weitere Datentypen hinzugefügt werden, werden auch diese von ihm abgedeckt.

## Beispiele

### Abmelden von einer Website

Wenn ein Benutzer sich von Ihrer Website oder Ihrem Dienst abmeldet, möchten Sie möglicherweise lokal gespeicherte Daten entfernen. Um dies zu tun, fügen Sie den `Clear-Site-Data`-Header zur Seite hinzu, die bestätigt, dass das Abmelden von der Website erfolgreich abgeschlossen wurde (zum Beispiel `https://example.com/logout`):

```http
Clear-Site-Data: "cache", "cookies", "storage", "executionContexts"
```

### Löschen von Cookies

Wenn dieser Header bei der Antwort auf `https://example.com/clear-cookies` ausgeliefert wird, werden alle Cookies auf der gleichen Domain `https://example.com` und alle Subdomains (wie `https://stage.example.com` usw.) gelöscht.

```http
Clear-Site-Data: "cookies"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Cache-Control")}}
