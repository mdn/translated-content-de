---
title: Clear-Site-Data
slug: Web/HTTP/Headers/Clear-Site-Data
l10n:
  sourceCommit: bb23abe84f0f4da3cf5d72a66d356cf5f9e3cfa2
---

{{securecontext_header}}{{HTTPSidebar}}

Der **`Clear-Site-Data`**-Header löscht Browsing-Daten (Cookies, Speicher, Cache), die mit der anfordernden Website verbunden sind. Er ermöglicht es Webentwicklern, mehr Kontrolle über die vom Client-Browser für ihre Ursprünge gespeicherten Daten zu haben.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Headertyp</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>nein</td>
    </tr>
  </tbody>
</table>

## Syntax

Der `Clear-Site-Data`-Header akzeptiert eine oder mehrere Direktiven. Wenn alle Arten von Daten gelöscht werden sollen, kann die Joker-Direktive (`"*"`) verwendet werden.

```http
// Einzelne Direktive
Clear-Site-Data: "cache"

// Mehrere Direktiven (kommagetrennt)
Clear-Site-Data: "cache", "cookies"

// Wildcard
Clear-Site-Data: "*"
```

## Direktiven

> [!NOTE]
> Alle Direktiven müssen der [quoted-string Grammatik](https://datatracker.ietf.org/doc/html/rfc7230#section-3.2.6) entsprechen. Eine Direktive, die nicht die Anführungszeichen enthält, ist ungültig.

- `"cache"` {{Experimental_Inline}}

  - : Gibt an, dass der Server wünscht, lokal zwischengespeicherte Daten (den Browsercache, siehe [HTTP-Caching](/de/docs/Web/HTTP/Caching)) für den Ursprung der Antwort-URL zu entfernen. Abhängig vom Browser kann dies auch Dinge wie vorgerenderte Seiten, Skript-Caches, WebGL-Shader-Caches oder Adressleiste-Vorschläge löschen.

- `"clientHints"` {{Experimental_Inline}}

  - : Gibt an, dass der Server wünscht, alle [Client-Hints](/de/docs/Web/HTTP/Client_hints) (angefordert via {{httpheader("Accept-CH")}}) für den Ursprung der Antwort-URL zu entfernen.

    > [!NOTE]
    > In Browsern, die den Datentyp `"clientHints"` unterstützen, werden Client-Hints auch gelöscht, wenn die Typen `"cache"`, `"cookies"` oder `"*"` angegeben werden. `"clientHints"` ist daher nur erforderlich, wenn keiner dieser anderen Typen angegeben ist.

- `"cookies"`
  - : Gibt an, dass der Server wünscht, alle Cookies für den Ursprung der Antwort-URL zu entfernen. HTTP-Authentifizierungsanmeldedaten werden ebenfalls gelöscht. Dies betrifft die gesamte registrierte Domain, einschließlich Subdomains. Also sowohl `https://example.com` als auch `https://stage.example.com` werden die Cookies gelöscht.
- `"storage"`

  - : Gibt an, dass der Server wünscht, alle DOM-Speicher für den Ursprung der Antwort-URL zu entfernen. Dies schließt Speichermethoden wie ein:

    - localStorage (führt `localStorage.clear` aus),
    - sessionStorage (führt `sessionStorage.clear` aus),
    - IndexedDB (für jede Datenbank {{domxref("IDBFactory.deleteDatabase")}} ausführen),
    - Service-Worker-Registrierungen (für jede Service-Worker-Registrierung {{domxref("ServiceWorkerRegistration.unregister")}} ausführen),
    - Web SQL-Datenbanken (veraltet),
    - [FileSystem-API-Daten](/de/docs/Web/API/File_and_Directory_Entries_API),
    - Plug-in-Daten (Flash über [`NPP_ClearSiteData`](https://wiki.mozilla.org/NPAPI:ClearSiteData)).

- `"executionContexts"` {{Experimental_Inline}}
  - : Gibt an, dass der Server wünscht, alle Browsing-Kontexte für den Ursprung der Antwort zu neu zu laden ({{domxref("Location.reload")}}).
- `"*"` (Wildcard)
  - : Gibt an, dass der Server wünscht, alle Arten von Daten für den Ursprung der Antwort zu löschen. Wenn in zukünftigen Versionen dieses Headers weitere Datentypen hinzugefügt werden, werden diese ebenfalls abgedeckt.

## Beispiele

### Abmelden von einer Website

Wenn sich ein Benutzer von Ihrer Website oder Ihrem Dienst abmeldet, möchten Sie möglicherweise lokal gespeicherte Daten entfernen. Fügen Sie dazu den `Clear-Site-Data`-Header zur Seite hinzu, die bestätigt, dass das Ausloggen von der Website erfolgreich abgeschlossen wurde (`https://example.com/logout`, zum Beispiel):

```http
Clear-Site-Data: "cache", "cookies", "storage", "executionContexts"
```

### Löschen von Cookies

Wenn dieser Header mit der Antwort unter `https://example.com/clear-cookies` ausgegeben wird, werden alle Cookies auf derselben Domain `https://example.com` und allen Subdomains (wie `https://stage.example.com`, etc.) gelöscht.

```http
Clear-Site-Data: "cookies"
```

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- {{HTTPHeader("Cache-Control")}}
