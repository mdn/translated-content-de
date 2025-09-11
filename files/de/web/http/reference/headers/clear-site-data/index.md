---
title: Clear-Site-Data header
short-title: Clear-Site-Data
slug: Web/HTTP/Reference/Headers/Clear-Site-Data
l10n:
  sourceCommit: 9c2dabaabc326c4a3fed27f6e9bcb3605958e516
---

{{securecontext_header}}

Der HTTP **`Clear-Site-Data`** {{Glossary("response_header", "Antwort-Header")}} sendet ein Signal an den Client, dass alle Browsing-Daten bestimmter Typen (Cookies, Speicher, Cache) der anfragenden Website entfernt werden sollen.
Dies gibt Webentwicklern mehr Kontrolle über die von Browsern für ihre Ursprünge gespeicherten Daten.

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
> Alle Direktiven müssen der [quoted-string grammar](https://datatracker.ietf.org/doc/html/rfc7230#section-3.2.6) entsprechen. Eine Direktive ohne Anführungszeichen ist ungültig.

- `"cache"`
  - : Der Server signalisiert, dass der Client lokal zwischengespeicherte Daten (den Browser-Cache, siehe [HTTP-Caching](/de/docs/Web/HTTP/Guides/Caching)) für den Ursprung der Antwort-URL entfernen soll.
    Abhängig vom Browser könnte dies auch Dinge wie vorgerenderte Seiten, {{Glossary("bfcache", "Backwards-Forwards-Cache")}}, Skript-Caches, WebGL-Shader-Caches oder Adressleisten-Vorschläge löschen.

- `"clientHints"` {{Experimental_Inline}}
  - : Gibt an, dass der Server alle für den Ursprung der Antwort-URL gespeicherten [Client-Hints](/de/docs/Web/HTTP/Guides/Client_hints) (angefordert über {{HTTPHeader("Accept-CH")}}) entfernen wird.

    > [!NOTE]
    > In Browsern, die den Datentyp `"clientHints"` unterstützen, werden Client-Hints auch gelöscht, wenn die Typen `"cache"`, `"cookies"` oder `"*"` angegeben sind. `"ClientHints"` ist daher nur erforderlich, wenn keiner der anderen Typen angegeben ist.

- `"cookies"`
  - : Der Server signalisiert, dass der Client alle Cookies für den Ursprung der Antwort-URL entfernen soll. HTTP-Authentifizierungsdaten werden ebenfalls gelöscht. Dies betrifft die gesamte registrierte Domain, einschließlich Subdomains. Daher werden sowohl `https://example.com` als auch `https://stage.example.com` die Cookies entfernen.

- `"executionContexts"` {{Experimental_Inline}}
  - : Der Server signalisiert, dass der Client alle Browsing-Kontexte für den Ursprung der Antwort neu laden soll ([`Location.reload`](/de/docs/Web/API/Location/reload)).

- `"prefetchCache"` {{experimental_inline}} {{non-standard_inline}}
  - : Wird verwendet, um [Speculation Rules](/de/docs/Web/API/Speculation_Rules_API)-Prefetches zu löschen, die auf den Referrer-Ursprung beschränkt sind.

- `"prerenderCache"` {{experimental_inline}} {{non-standard_inline}}
  - : Wird verwendet, um [Speculation Rules](/de/docs/Web/API/Speculation_Rules_API)-Prerendervorgänge zu löschen, die auf den Referrer-Ursprung beschränkt sind.

- `"storage"`
  - : Der Server signalisiert, dass der Client alle DOM-Speicher für den Ursprung der Antwort-URL entfernen soll. Dazu gehören Speichermethoden wie:
    - localStorage (führt `localStorage.clear` aus),
    - sessionStorage (führt `sessionStorage.clear` aus),
    - IndexedDB (für jede Datenbank ausführen [`IDBFactory.deleteDatabase`](/de/docs/Web/API/IDBFactory/deleteDatabase)),
    - Service-Worker-Registrierungen (für jede Service-Worker-Registrierung ausführen [`ServiceWorkerRegistration.unregister`](/de/docs/Web/API/ServiceWorkerRegistration/unregister)),
    - Web-SQL-Datenbanken (veraltet),
    - [FileSystem-API-Daten](/de/docs/Web/API/File_and_Directory_Entries_API),
    - Plug-in-Daten (Flash über [`NPP_ClearSiteData`](https://wiki.mozilla.org/NPAPI:ClearSiteData)).

- `"*"` (Wildcard)
  - : Der Server signalisiert, dass der Client alle Datentypen für den Ursprung der Antwort löschen soll. Wenn in zukünftigen Versionen dieses Headers mehr Datentypen hinzugefügt werden, werden sie auch von ihm abgedeckt.

## Beispiele

### Von einer Website abmelden

Wenn sich ein Benutzer von Ihrer Website oder Ihrem Dienst abmeldet, möchten Sie möglicherweise lokal gespeicherte Daten entfernen, einschließlich aller vorab geladenen oder vorgemerkten Inhalte für [spekulierte Navigationsvorgänge](/de/docs/Web/API/Speculation_Rules_API).
Um dies zu tun, fügen Sie den `Clear-Site-Data`-Header auf der Seite hinzu, die bestätigt, dass das Abmelden von der Site erfolgreich abgeschlossen wurde (zum Beispiel `https://example.com/logout`):

```http
Clear-Site-Data: "cache", "cookies", "storage", "executionContexts", "prefetchCache", "prerenderCache"
```

### Cookies löschen

Wenn dieser Header mit der Antwort auf `https://example.com/clear-cookies` geliefert wird, werden alle Cookies auf derselben Domain `https://example.com` und allen Subdomains (wie `https://stage.example.com` usw.) gelöscht.

```http
Clear-Site-Data: "cookies"
```

### Spekulationen löschen

Wenn dieser Header mit der Antwort auf `https://example.com/change-state.json` geliefert wird, werden alle auf derselben Domain `https://example.com` spekulierten Navigationsvorgänge und alle Subdomains (wie `https://stage.example.com`) gelöscht.

```http
Clear-Site-Data: "prerenderCache"
```

Um sowohl Prefetch- als auch Prerender-Spekulationen zu löschen, müssen sowohl `prefetchCache` als auch `prerenderCache` gesendet werden:

```http
Clear-Site-Data: "prefetchCache", "prerenderCache"
```

Es gibt Fälle, in denen es angebracht ist, eines der beiden oder beide zu löschen.

Zum Beispiel könnte eine clientseitig gerenderte Anwendung, die Daten von JavaScript abruft, `prerenderCache` bei einem Statuswechsel verwenden, um die vorgemerkten Seiten zu verwerfen, aber das vorab geladene HTML behalten, um es zu verwenden, wenn die Seite erneut gerendert (oder vorgemerkt) wird.

Andererseits, wenn das vorab geladene HTML-Dokument veraltete Daten enthält, die entsprechende vorgemerkte Seite jedoch so eingerichtet ist, dass sie die Daten beim Anzeigen aktualisiert, brauchen Sie möglicherweise `prerenderCache` nicht zu verwenden, aber wahrscheinlich wollen Sie die `prefetchCache`-Direktive verwenden, damit das veraltete HTML nicht bei einer zukünftigen Vormerkung verwendet wird.

Schließlich, wenn das vorab geladene HTML-Dokument veraltete Daten enthält und auch keine veralteten Inhalte auf vorgemerkten Seiten aktualisiert, ist es am ratsamsten, sowohl `prefetchCache` als auch `prerenderCache` zu spezifizieren.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Cache-Control")}}
