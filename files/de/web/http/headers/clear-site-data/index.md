---
title: Clear-Site-Data
slug: Web/HTTP/Headers/Clear-Site-Data
l10n:
  sourceCommit: 442db82028668b17b888ee439468ae2ac9d589a5
---

{{securecontext_header}}{{HTTPSidebar}}

Der HTTP **`Clear-Site-Data`** {{Glossary("response_header", "Antwort-Header")}} sendet ein Signal an den Client, dass er alle Browsing-Daten bestimmter Typen (Cookies, Speicher, Cache) entfernen soll, die mit der anfragenden Website verbunden sind.
Er ermöglicht es Webentwicklern, mehr Kontrolle über die von Browsern für ihre Ursprünge gespeicherten Daten zu haben.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungs-Header")}}</th>
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
> Alle Direktiven müssen der [quoted-string Syntax](https://datatracker.ietf.org/doc/html/rfc7230#section-3.2.6) entsprechen. Eine Direktive, die nicht die Anführungszeichen enthält, ist ungültig.

- `"cache"`

  - : Der Server signalisiert, dass der Client die lokal zwischengespeicherten Daten (den Browser-Cache, siehe [HTTP-Caching](/de/docs/Web/HTTP/Caching)) für den Ursprung der Antwort-URL entfernen soll. Abhängig vom Browser werden dadurch möglicherweise auch Dinge wie vorgerenderte Seiten, Skript-Caches, WebGL-Shader-Caches oder Adressleisten-Vorschläge gelöscht.

- `"clientHints"` {{Experimental_Inline}}

  - : Gibt an, dass der Server alle [Client-Hinweise](/de/docs/Web/HTTP/Client_hints) (angefordert über {{HTTPHeader("Accept-CH")}}) löscht, die für den Ursprung der Antwort-URL gespeichert sind.

    > [!NOTE]
    > In Browsern, die den Datentyp `"clientHints"` unterstützen, werden Client-Hinweise ebenfalls gelöscht, wenn die Typen `"cache"`, `"cookies"` oder `"*"` angegeben sind. `"clientHints"` wird daher nur benötigt, wenn keine dieser anderen Typen angegeben sind.

- `"cookies"`
  - : Der Server signalisiert, dass der Client alle Cookies für den Ursprung der Antwort-URL entfernen soll. Auch HTTP-Authentifizierungsinformationen werden entfernt. Dies betrifft die gesamte registrierte Domäne, einschließlich Subdomains. So werden bei `https://example.com` sowie `https://stage.example.com` Cookies gelöscht.
- `"storage"`

  - : Der Server signalisiert, dass der Client alle DOM-Speicher für den Ursprung der Antwort-URL entfernen soll. Dies umfasst Speichermechanismen wie:

    - localStorage (führt `localStorage.clear` aus),
    - sessionStorage (führt `sessionStorage.clear` aus),
    - IndexedDB (für jede Datenbank wird [`IDBFactory.deleteDatabase`](/de/docs/Web/API/IDBFactory/deleteDatabase) ausgeführt),
    - Service-Worker-Registrierungen (für jede Service-Worker-Registrierung wird [`ServiceWorkerRegistration.unregister`](/de/docs/Web/API/ServiceWorkerRegistration/unregister) ausgeführt),
    - Web-SQL-Datenbanken (veraltet),
    - [FileSystem-API-Daten](/de/docs/Web/API/File_and_Directory_Entries_API),
    - Plug-in-Daten (Flash über [`NPP_ClearSiteData`](https://wiki.mozilla.org/NPAPI:ClearSiteData)).

- `"executionContexts"` {{Experimental_Inline}}
  - : Der Server signalisiert, dass der Client alle Browsing-Kontexte für den Ursprung der Antwort neu laden soll ([`Location.reload`](/de/docs/Web/API/Location/reload)).
- `"*"` (Wildcard)
  - : Der Server signalisiert, dass der Client alle Datentypen für den Ursprung der Antwort löschen soll. Wenn in zukünftigen Versionen dieses Headers mehr Datentypen hinzugefügt werden, werden auch diese abgedeckt.

## Beispiele

### Abmeldung von einer Website

Wenn sich ein Benutzer von Ihrer Website oder einem Dienst abmeldet, möchten Sie möglicherweise lokal gespeicherte Daten entfernen. Um dies zu tun, fügen Sie den `Clear-Site-Data`-Header auf der Seite hinzu, die die Abmeldung von der Website erfolgreich bestätigt hat (zum Beispiel `https://example.com/logout`):

```http
Clear-Site-Data: "cache", "cookies", "storage", "executionContexts"
```

### Cookies löschen

Wenn dieser Header mit der Antwort bei `https://example.com/clear-cookies` geliefert wird, werden alle Cookies auf derselben Domäne `https://example.com` und allen Subdomains (wie `https://stage.example.com` usw.) gelöscht.

```http
Clear-Site-Data: "cookies"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Cache-Control")}}
