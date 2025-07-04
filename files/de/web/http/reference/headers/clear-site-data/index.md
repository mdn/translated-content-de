---
title: Clear-Site-Data header
short-title: Clear-Site-Data
slug: Web/HTTP/Reference/Headers/Clear-Site-Data
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

{{securecontext_header}}

Der HTTP **`Clear-Site-Data`** {{Glossary("response_header", "Antwort-Header")}} sendet ein Signal an den Client, dass er alle Browserdaten bestimmter Typen (Cookies, Speicher, Cache), die mit der anfordernden Website verbunden sind, entfernen soll. Er ermöglicht Webentwicklern eine größere Kontrolle über die von Browsern für ihre Ursprünge gespeicherten Daten.

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
> Alle Direktiven müssen der [Syntax der Anführungszeichen](https://datatracker.ietf.org/doc/html/rfc7230#section-3.2.6) entsprechen. Eine Direktive, die nicht die doppelten Anführungszeichen enthält, ist ungültig.

- `"cache"`
  - : Der Server signalisiert, dass der Client lokal zwischengespeicherte Daten (den Browser-Cache, siehe [HTTP-Caching](/de/docs/Web/HTTP/Guides/Caching)) für den Ursprung der Antwort-URL entfernen soll. Abhängig vom Browser könnten auch Dinge wie vorab gerenderte Seiten, {{Glossary("bfcache", "Vorwärts-Rückwärts-Cache")}}, Skript-Caches, WebGL-Shader-Caches oder Adressleisten-Vorschläge geleert werden.

- `"clientHints"` {{Experimental_Inline}}
  - : Gibt an, dass der Server alle für den Ursprung der Antwort-URL gespeicherten [Client-Hinweise](/de/docs/Web/HTTP/Guides/Client_hints) (angefordert über {{HTTPHeader("Accept-CH")}}) entfernen wird.

    > [!NOTE]
    > In Browsern, die den `"clientHints"`-Datentyp unterstützen, werden Client-Hinweise auch gelöscht, wenn die Typen `"cache"`, `"cookies"` oder `"*"` angegeben werden. `"clientHints"` ist daher nur notwendig, wenn keiner dieser anderen Typen angegeben ist.

- `"cookies"`
  - : Der Server signalisiert, dass der Client alle Cookies für den Ursprung der Antwort-URL entfernen soll. HTTP-Authentifizierungsdaten werden ebenfalls gelöscht. Dies betrifft die gesamte registrierte Domain, einschließlich Subdomains. Somit werden beispielsweise `https://example.com` sowie `https://stage.example.com` Cookies gelöscht.

- `"executionContexts"` {{Experimental_Inline}}
  - : Der Server signalisiert, dass der Client alle Browser-Kontexte für den Ursprung der Antwort neu laden soll ([`Location.reload`](/de/docs/Web/API/Location/reload)).

- `"prefetchCache"` {{experimental_inline}}
  - : Wird verwendet, um [Spekulationsregeln](/de/docs/Web/API/Speculation_Rules_API) zu löschen, die auf den Ursprungs-Referrer beschränkt sind.

- `"prerenderCache"` {{experimental_inline}}
  - : Wird verwendet, um [Spekulationsregeln](/de/docs/Web/API/Speculation_Rules_API) zu löschen, die auf den Ursprungs-Referrer beschränkt sind.

- `"storage"`
  - : Der Server signalisiert, dass der Client alle DOM-Speicher für den Ursprung der Antwort-URL entfernen soll. Dazu gehören Speichersysteme wie:
    - localStorage (führt `localStorage.clear` aus),
    - sessionStorage (führt `sessionStorage.clear` aus),
    - IndexedDB (für jede Datenbank wird [`IDBFactory.deleteDatabase`](/de/docs/Web/API/IDBFactory/deleteDatabase) ausgeführt),
    - Service-Worker-Registrierungen (für jede Service-Worker-Registrierung wird [`ServiceWorkerRegistration.unregister`](/de/docs/Web/API/ServiceWorkerRegistration/unregister) ausgeführt),
    - Web-SQL-Datenbanken (veraltet),
    - [FileSystem-API-Daten](/de/docs/Web/API/File_and_Directory_Entries_API),
    - Plugin-Daten (Flash via [`NPP_ClearSiteData`](https://wiki.mozilla.org/NPAPI:ClearSiteData)).

- `"*"` (Wildcard)
  - : Der Server signalisiert, dass der Client alle Datentypen für den Ursprung der Antwort löschen soll. Wenn in zukünftigen Versionen dieses Headers weitere Datentypen hinzugefügt werden, werden diese ebenfalls von diesem erfasst.

## Beispiele

### Abmelden von einer Website

Wenn sich ein Benutzer von Ihrer Website oder Ihrem Dienst abmeldet, möchten Sie möglicherweise lokal gespeicherte Daten entfernen, einschließlich aller vorgeladenen oder vorgerenderten Inhalte für [spekulierte Navigationen](/de/docs/Web/API/Speculation_Rules_API). Um dies zu tun, fügen Sie den `Clear-Site-Data`-Header der Seite hinzu, die das erfolgreiche Abmelden von der Website bestätigt (zum Beispiel `https://example.com/logout`):

```http
Clear-Site-Data: "cache", "cookies", "storage", "executionContexts", "prefetchCache", "prerenderCache"
```

### Cookies löschen

Wenn dieser Header mit der Antwort auf `https://example.com/clear-cookies` geliefert wird, werden alle Cookies auf derselben Domain `https://example.com` und alle Subdomains (wie `https://stage.example.com` etc.) gelöscht.

```http
Clear-Site-Data: "cookies"
```

### Spekulationen löschen

Wenn dieser Header mit der Antwort auf `https://example.com/change-state.json` geliefert wird, werden alle [spekulierten Navigationen](/de/docs/Web/API/Speculation_Rules_API) auf derselben Domain `https://example.com` und allen Subdomains (wie `https://stage.example.com`) gelöscht.

```http
Clear-Site-Data: "prerenderCache"
```

Um sowohl Vorablesen als auch Vorab-Rendern von Spekulationen zu löschen, müssen sowohl `prefetchCache` als auch `prerenderCache` gesendet werden:

```http
Clear-Site-Data: "prefetchCache", "prerenderCache"
```

Es gibt Fälle, in denen das Löschen eines der beiden oder beider geeignet ist.

Zum Beispiel könnte eine clientseitig gerenderte Anwendung, die Daten aus JavaScript zieht, `prerenderCache` bei einem Statuswechsel verwenden, um die vorgerenderten Seiten zu verwerfen, aber das vorab geladene HTML beibehalten, um es bei der Darstellung (oder erneuter Vorab-Renderung) der Seite zu verwenden.

Andererseits, wenn das vorab geladene HTML-Dokument veraltete Daten enthält, die entsprechende vorgerenderte Seite jedoch so eingerichtet ist, dass sie die Daten beim Anzeigen aktualisiert, müssen Sie möglicherweise nicht `prerenderCache` verwenden, möchten aber wahrscheinlich die `prefetchCache`-Direktive verwenden: damit das veraltete HTML nicht in einer zukünftigen Vorab-Renderung verwendet wird.

Wenn das vorab geladene HTML-Dokument veraltete Daten enthält und auch keine veralteten Inhalte auf vorgerenderten Seiten aktualisiert, ist das Angeben von sowohl `prefetchCache` als auch `prerenderCache` am geeignetsten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Cache-Control")}}
