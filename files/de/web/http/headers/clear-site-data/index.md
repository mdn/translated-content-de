---
title: Clear-Site-Data
slug: Web/HTTP/Headers/Clear-Site-Data
l10n:
  sourceCommit: 92b03e46cef6be37de60799363e3e33e3415b491
---

{{securecontext_header}}{{HTTPSidebar}}

Der HTTP **`Clear-Site-Data`** {{Glossary("response_header", "Antwort-Header")}} sendet ein Signal an den Client, dass dieser alle Browserdaten bestimmter Typen (Cookies, Speicher, Cache) entfernen soll, die mit der anfragenden Website verbunden sind. Dadurch haben Webentwickler mehr Kontrolle über die im Browser für ihre Ursprünge gespeicherten Daten.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
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
> Alle Direktiven müssen der [quoted-string Grammatik](https://datatracker.ietf.org/doc/html/rfc7230#section-3.2.6) entsprechen. Eine Direktive ohne Anführungszeichen ist ungültig.

- `"cache"`

  - : Der Server signalisiert, dass der Client lokal zwischengespeicherte Daten (den Browser-Cache, siehe [HTTP Caching](/de/docs/Web/HTTP/Caching)) für den Ursprung der Antwort-URL entfernen sollte. Abhängig vom Browser könnten auch Dinge wie vorgerenderte Seiten, Skript-Caches, WebGL-Shader-Caches oder Adressleisten-Vorschläge entfernt werden.

- `"clientHints"` {{Experimental_Inline}}

  - : Zeigt an, dass der Server alle für den Ursprung der Antwort-URL gespeicherten [Client-Hints](/de/docs/Web/HTTP/Client_hints) (angefordert über {{HTTPHeader("Accept-CH")}}) entfernt.

    > [!NOTE]
    > In Browsern, die den Datentyp `"clientHints"` unterstützen, werden Client-Hints auch gelöscht, wenn die Typen `"cache"`, `"cookies"` oder `"*"` angegeben sind. `"clientHints"` ist daher nur erforderlich, wenn keiner dieser anderen Typen angegeben ist.

- `"cookies"`
  - : Der Server signalisiert, dass der Client alle Cookies für den Ursprung der Antwort-URL entfernen soll. Auch HTTP-Authentifizierungsinformationen werden gelöscht. Dies betrifft die gesamte registrierte Domain, einschließlich Subdomains. Daher werden sowohl `https://example.com` als auch `https://stage.example.com` Cookies gelöscht.
- `"storage"`

  - : Der Server signalisiert, dass der Client den gesamten DOM-Speicher für den Ursprung der Antwort-URL entfernen soll. Dazu gehören Speichermechanismen wie:

    - localStorage (führt `localStorage.clear` aus),
    - sessionStorage (führt `sessionStorage.clear` aus),
    - IndexedDB (führt für jede Datenbank [`IDBFactory.deleteDatabase`](/de/docs/Web/API/IDBFactory/deleteDatabase) aus),
    - Service-Worker-Registrierungen (führt für jede Service-Worker-Registrierung [`ServiceWorkerRegistration.unregister`](/de/docs/Web/API/ServiceWorkerRegistration/unregister) aus),
    - Web SQL-Datenbanken (veraltet),
    - [FileSystem API-Daten](/de/docs/Web/API/File_and_Directory_Entries_API),
    - Plug-in-Daten (Flash über [`NPP_ClearSiteData`](https://wiki.mozilla.org/NPAPI:ClearSiteData)).

- `"executionContexts"` {{Experimental_Inline}}
  - : Der Server signalisiert, dass der Client alle Browsing-Kontexte für den Ursprung der Antwort neu laden soll ([`Location.reload`](/de/docs/Web/API/Location/reload)).
- `"*"` (Platzhalter)
  - : Der Server signalisiert, dass der Client alle Datentypen für den Ursprung der Antwort löschen soll. Wenn in zukünftigen Versionen dieses Headers weitere Datentypen hinzugefügt werden, werden diese ebenfalls abgedeckt.

## Beispiele

### Abmelden von einer Website

Wenn ein Benutzer sich von Ihrer Website oder Ihrem Dienst abmeldet, möchten Sie möglicherweise lokal gespeicherte Daten entfernen. Fügen Sie dazu den `Clear-Site-Data`-Header zur Seite hinzu, die bestätigt, dass das Abmelden von der Website erfolgreich war (z. B. `https://example.com/logout`):

```http
Clear-Site-Data: "cache", "cookies", "storage", "executionContexts"
```

### Löschen von Cookies

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
