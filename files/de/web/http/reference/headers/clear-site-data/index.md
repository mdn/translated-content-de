---
title: Clear-Site-Data header
short-title: Clear-Site-Data
slug: Web/HTTP/Reference/Headers/Clear-Site-Data
l10n:
  sourceCommit: 7f6778934020a9b5b82b4dd8ca79a99bc9950c2a
---

{{securecontext_header}}

Der HTTP-Header **`Clear-Site-Data`** {{Glossary("response_header", "Antwort-Header")}} sendet ein Signal an den Client, dass er alle Browsing-Daten bestimmter Typen (Cookies, Speicher, Cache) entfernen soll, die mit der anfordernden Website verbunden sind.
Er ermöglicht es Webentwicklern, mehr Kontrolle über die von Browsern für ihre Ursprünge gespeicherten Daten zu haben.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
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
> Alle Direktiven müssen der [quoted-string grammar](https://datatracker.ietf.org/doc/html/rfc7230#section-3.2.6) entsprechen. Eine Direktive, die keine doppelten Anführungszeichen enthält, ist ungültig.

- `"cache"`
  - : Der Server signalisiert, dass der Client lokal zwischengespeicherte Daten (den Browser-Cache, siehe [HTTP-Caching](/de/docs/Web/HTTP/Guides/Caching)) für den Ursprung der Antwort-URL entfernen sollte.
    Abhängig vom Browser könnte dies auch Dinge wie vorgerenderte Seiten, {{Glossary("bfcache", "Vorwärts-Rückwärts-Cache")}}, Skript-Caches, WebGL-Shader-Caches oder Adressleisten-Vorschläge löschen.

- `"clientHints"` {{Experimental_Inline}}
  - : Gibt an, dass der Server alle [Client-Hinweise](/de/docs/Web/HTTP/Guides/Client_hints) (angefordert über {{HTTPHeader("Accept-CH")}}) entfernt, die für den Ursprung der Antwort-URL gespeichert sind.

    > [!NOTE]
    > In Browsern, die den Datentyp `"clientHints"` unterstützen, werden Client-Hinweise auch gelöscht, wenn die Datentypen `"cache"`, `"cookies"` oder `"*"` angegeben sind. `"clientHints"` ist daher nur erforderlich, wenn keiner dieser anderen Typen angegeben ist.

- `"cookies"`
  - : Der Server signalisiert, dass der Client alle Cookies für den Ursprung der Antwort-URL entfernen sollte. HTTP-Authentifizierungsdaten werden ebenfalls gelöscht. Dies betrifft die gesamte registrierte Domäne, einschließlich der Subdomänen. So werden Cookies sowohl für `https://example.com` als auch für `https://stage.example.com` gelöscht.

- `"executionContexts"` {{Experimental_Inline}}
  - : Der Server signalisiert, dass der Client alle Browser-Kontexte für den Ursprung der Antwort neu laden soll ([`Location.reload`](/de/docs/Web/API/Location/reload)).

- `"prefetchCache"` {{experimental_inline}} {{non-standard_inline}}
  - : Wird verwendet, um [Spekulationsregeln](/de/docs/Web/API/Speculation_Rules_API) Prefetches zu löschen, die auf den Referer-Ursprung bezogen sind.

- `"prerenderCache"` {{experimental_inline}} {{non-standard_inline}}
  - : Wird verwendet, um [Spekulationsregeln](/de/docs/Web/API/Speculation_Rules_API) Prerenders zu löschen, die auf den Referer-Ursprung bezogen sind.

- `"storage"`
  - : Der Server signalisiert, dass der Client alle DOM-Speicher für den Ursprung der Antwort-URL entfernen sollte. Dies umfasst Speichermethoden wie:
    - localStorage (führt `localStorage.clear` aus),
    - sessionStorage (führt `sessionStorage.clear` aus),
    - IndexedDB (für jede Datenbank wird [`IDBFactory.deleteDatabase`](/de/docs/Web/API/IDBFactory/deleteDatabase) ausgeführt),
    - Service Worker-Registrierungen (für jede Registrierung eines Service Workers wird [`ServiceWorkerRegistration.unregister`](/de/docs/Web/API/ServiceWorkerRegistration/unregister) ausgeführt),
    - Web SQL-Datenbanken (veraltet),
    - [FileSystem API-Daten](/de/docs/Web/API/File_and_Directory_Entries_API),
    - Plug-in-Daten (Flash über [`NPP_ClearSiteData`](https://wiki.mozilla.org/NPAPI:ClearSiteData)).

- `"*"` (Sternchen)
  - : Der Server signalisiert, dass der Client alle Datentypen für den Ursprung der Antwort löschen soll. Wenn in zukünftigen Versionen dieses Headers weitere Datentypen hinzugefügt werden, werden diese ebenfalls abgedeckt.

## Beispiele

### Abmelden von einer Website

Wenn sich ein Nutzer von Ihrer Website oder Ihrem Dienst abmeldet, möchten Sie möglicherweise lokal gespeicherte Daten entfernen, einschließlich aller vorab geladenen oder vorgerenderten Inhalte für [spekulative Navigationen](/de/docs/Web/API/Speculation_Rules_API).
Fügen Sie dazu den `Clear-Site-Data`-Header zur Seite hinzu, die das erfolgreiche Abmelden von der Seite bestätigt (zum Beispiel `https://example.com/logout`):

```http
Clear-Site-Data: "cache", "cookies", "storage", "executionContexts", "prefetchCache", "prerenderCache"
```

### Cookies löschen

Wenn dieser Header mit der Antwort unter `https://example.com/clear-cookies` übermittelt wird, werden alle Cookies auf derselben Domain `https://example.com` und allen Subdomänen (wie `https://stage.example.com`, etc.) gelöscht.

```http
Clear-Site-Data: "cookies"
```

### Spekulationen löschen

Wenn dieser Header mit der Antwort unter `https://example.com/change-state.json` übermittelt wird, werden alle [spekulierten Navigationen](/de/docs/Web/API/Speculation_Rules_API) prerenders auf derselben Domain `https://example.com` und allen Subdomänen (wie `https://stage.example.com`) gelöscht.

```http
Clear-Site-Data: "prerenderCache"
```

Um sowohl Prefetch- als auch Prerender-Spekulationen zu löschen, müssen sowohl `prefetchCache` als auch `prerenderCache` gesendet werden:

```http
Clear-Site-Data: "prefetchCache", "prerenderCache"
```

Es gibt Fälle, in denen das Löschen des einen oder anderen oder beider angemessen ist.

Zum Beispiel könnte eine Client-seitig gerenderte Anwendung, die Daten aus JavaScript bezieht, `prerenderCache` bei einem Zustandswechsel verwenden, um die vorgerenderten Seiten zu verwerfen, aber das vorab geladene HTML behalten, um es zu nutzen, wenn die Seite erneut angezeigt (oder vorgerendert) wird.

Andererseits, wenn das vorab geladene HTML-Dokument veraltete Daten enthält, aber die entsprechende vorgerenderte Seite so eingerichtet ist, dass sie die Daten beim Anzeigen aktualisiert, müssen Sie möglicherweise nicht `prerenderCache` verwenden, aber Sie möchten wahrscheinlich die Direktive `prefetchCache` verwenden, damit das veraltete HTML nicht in einem zukünftigen Prerender verwendet wird.

Schließlich, wenn das vorab geladene HTML-Dokument veraltete Daten enthält und auch keine veralteten Inhalte auf vorgerenderten Seiten aktualisiert, dann ist es am besten, sowohl `prefetchCache` als auch `prerenderCache` anzugeben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Cache-Control")}}
