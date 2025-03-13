---
title: Clear-Site-Data
slug: Web/HTTP/Reference/Headers/Clear-Site-Data
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{securecontext_header}}{{HTTPSidebar}}

Der HTTP-**`Clear-Site-Data`**-{{Glossary("response_header", "Antwortheader")}} sendet ein Signal an den Client, dass er alle Browsing-Daten bestimmter Typen (Cookies, Speicher, Cache), die mit der anfordernden Website verbunden sind, entfernen soll. Er ermöglicht Webentwicklern mehr Kontrolle über die von Browsern für ihre Ursprünge gespeicherten Daten.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwortheader")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anfrageheader")}}</th>
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
> Alle Direktiven müssen der [Grammatik für Quoted-Strings](https://datatracker.ietf.org/doc/html/rfc7230#section-3.2.6) entsprechen. Eine Direktive, die die Anführungszeichen nicht beinhaltet, ist ungültig.

- `"cache"`

  - : Der Server signalisiert, dass der Client lokal zwischengespeicherte Daten (den Browser-Cache, siehe [HTTP-Caching](/de/docs/Web/HTTP/Guides/Caching)) für den Ursprung der Antwort-URL entfernen soll. Abhängig vom Browser könnte dies auch Dinge wie vorgerenderte Seiten, Skript-Caches, WebGL-Shader-Caches oder Adressleistenvorschläge löschen.

- `"clientHints"` {{Experimental_Inline}}

  - : Gibt an, dass der Server alle [Client-Hinweise](/de/docs/Web/HTTP/Guides/Client_hints) (angefordert über {{HTTPHeader("Accept-CH")}}) entfernt, die für den Ursprung der Antwort-URL gespeichert sind.

    > [!NOTE]
    > In Browsern, die den Datentyp `"clientHints"` unterstützen, werden Client-Hinweise auch gelöscht, wenn die Typen `"cache"`, `"cookies"` oder `"*"` angegeben sind. `"clientHints"` wird daher nur benötigt, wenn keiner dieser anderen Typen angegeben ist.

- `"cookies"`
  - : Der Server signalisiert, dass der Client alle Cookies für den Ursprung der Antwort-URL entfernen soll. Auch HTTP-Authentifizierungsanmeldeinformationen werden gelöscht. Dies betrifft die gesamte registrierte Domain, einschließlich Subdomains. So werden sowohl `https://example.com` als auch `https://stage.example.com` die Cookies gelöscht.
- `"storage"`

  - : Der Server signalisiert, dass der Client alle DOM-Speicher für den Ursprung der Antwort-URL entfernen soll. Dies umfasst Speichermechanismen wie:

    - localStorage (führt `localStorage.clear` aus),
    - sessionStorage (führt `sessionStorage.clear` aus),
    - IndexedDB (für jede Datenbank wird [`IDBFactory.deleteDatabase`](/de/docs/Web/API/IDBFactory/deleteDatabase) ausgeführt),
    - Service-Worker-Registrierungen (für jede Service-Worker-Registrierung wird [`ServiceWorkerRegistration.unregister`](/de/docs/Web/API/ServiceWorkerRegistration/unregister) ausgeführt),
    - Web SQL-Datenbanken (veraltet),
    - [FileSystem-API-Daten](/de/docs/Web/API/File_and_Directory_Entries_API),
    - Plugindaten (Flash über [`NPP_ClearSiteData`](https://wiki.mozilla.org/NPAPI:ClearSiteData)).

- `"executionContexts"` {{Experimental_Inline}}
  - : Der Server signalisiert, dass der Client alle Browsing-Kontexte für den Ursprung der Antwort neu laden soll ([`Location.reload`](/de/docs/Web/API/Location/reload)).
- `"*"` (Wildcard)
  - : Der Server signalisiert, dass der Client alle Datentypen für den Ursprung der Antwort löschen soll. Wenn in zukünftigen Versionen dieses Headers mehr Datentypen hinzugefügt werden, werden sie ebenfalls durch diesen abgedeckt.

## Beispiele

### Abmeldung von einer Website

Wenn sich ein Benutzer von Ihrer Website oder Ihrem Dienst abmeldet, möchten Sie möglicherweise lokal gespeicherte Daten entfernen. Um dies zu tun, fügen Sie den `Clear-Site-Data`-Header zur Seite hinzu, die bestätigt, dass die Abmeldung von der Website erfolgreich abgeschlossen wurde (zum Beispiel `https://example.com/logout`):

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
