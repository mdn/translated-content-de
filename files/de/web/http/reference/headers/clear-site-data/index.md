---
title: Clear-Site-Data header
short-title: Clear-Site-Data
slug: Web/HTTP/Reference/Headers/Clear-Site-Data
l10n:
  sourceCommit: e482e164bfb8135fd1c957bb62d816f41a4659dc
---

{{securecontext_header}}{{HTTPSidebar}}

Der HTTP **`Clear-Site-Data`** {{Glossary("response_header", "Antwort-Header")}} sendet ein Signal an den Client, dass alle Browserdaten bestimmter Typen (Cookies, Speicher, Cache) entfernt werden sollen, die mit der anfordernden Website verbunden sind. Er ermöglicht Webentwicklern, mehr Kontrolle über die von Browsern für ihre Ursprünge gespeicherten Daten zu haben.

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
> Alle Direktiven müssen der [quoted-string Grammatik](https://datatracker.ietf.org/doc/html/rfc7230#section-3.2.6) entsprechen. Eine Direktive, die die Anführungszeichen nicht enthält, ist ungültig.

- `"cache"`

  - : Der Server signalisiert, dass der Client lokal zwischengespeicherte Daten (den Browser-Cache, siehe [HTTP-Caching](/de/docs/Web/HTTP/Guides/Caching)) für den Ursprung der Antwort-URL entfernen sollte. Abhängig vom Browser könnten auch Dinge wie vorgerenderte Seiten, {{Glossary("bfcache", "Vorwärts-Rückwärts-Cache")}}, Script-Caches, WebGL-Shader-Caches oder Adressleisten-Vorschläge gelöscht werden.

- `"clientHints"` {{Experimental_Inline}}

  - : Zeigt an, dass der Server alle für den Ursprung der Antwort-URL gespeicherten [Client-Hinweise](/de/docs/Web/HTTP/Guides/Client_hints) (angefordert über {{HTTPHeader("Accept-CH")}}) entfernen wird.

    > [!NOTE]
    > In Browsern, die den Datentyp `"clientHints"` unterstützen, werden Client-Hinweise auch gelöscht, wenn die Typen `"cache"`, `"cookies"` oder `"*"` angegeben sind. `"clientHints"` ist daher nur erforderlich, wenn keiner dieser anderen Typen angegeben ist.

- `"cookies"`

  - : Der Server signalisiert, dass der Client alle Cookies für den Ursprung der Antwort-URL entfernen soll. Auch HTTP-Authentifizierungsinformationen werden gelöscht. Dies betrifft die gesamte registrierte Domain, einschließlich Subdomains. So werden sowohl `https://example.com` als auch `https://stage.example.com` von Cookies befreit.

- `"executionContexts"` {{Experimental_Inline}}

  - : Der Server signalisiert, dass der Client alle Browsing-Kontexte für den Ursprung der Antwort neu laden soll ([`Location.reload`](/de/docs/Web/API/Location/reload)).

- `"prefetchCache"` {{experimental_inline}}

  - : Wird verwendet, um [Spekulationsregeln](/de/docs/Web/API/Speculation_Rules_API)-Prefetches zu löschen, die auf den Verweis-Ursprung beschränkt sind.

- `"prerenderCache"` {{experimental_inline}}

  - : Wird verwendet, um [Spekulationsregeln](/de/docs/Web/API/Speculation_Rules_API)-Prerenderings zu löschen, die auf den Verweis-Ursprung beschränkt sind.

- `"storage"`

  - : Der Server signalisiert, dass der Client alle DOM-Speicher für den Ursprung der Antwort-URL entfernen soll. Dies umfasst Speichermechanismen wie:
    - localStorage (führt `localStorage.clear` aus),
    - sessionStorage (führt `sessionStorage.clear` aus),
    - IndexedDB (für jede Datenbank wird [`IDBFactory.deleteDatabase`](/de/docs/Web/API/IDBFactory/deleteDatabase) ausgeführt),
    - Service-Worker-Registrierungen (für jede Service-Worker-Registrierung wird [`ServiceWorkerRegistration.unregister`](/de/docs/Web/API/ServiceWorkerRegistration/unregister) ausgeführt),
    - Web-SQL-Datenbanken (veraltet),
    - [FileSystem-API-Daten](/de/docs/Web/API/File_and_Directory_Entries_API),
    - Plugins-Daten (Flash via [`NPP_ClearSiteData`](https://wiki.mozilla.org/NPAPI:ClearSiteData)).

- `"*"` (Wildcard)
  - : Der Server signalisiert, dass der Client alle Datentypen für den Ursprung der Antwort löschen soll. Wenn in zukünftigen Versionen dieses Headers weitere Datentypen hinzugefügt werden, sind diese ebenfalls abgedeckt.

## Beispiele

### Von einer Website abmelden

Wenn sich ein Benutzer von Ihrer Website oder Ihrem Dienst abmeldet, möchten Sie möglicherweise lokal gespeicherte Daten entfernen, einschließlich aller vorab geladenen oder gerenderten Inhalte für [spekulative Navigationen](/de/docs/Web/API/Speculation_Rules_API). Um dies zu tun, fügen Sie den `Clear-Site-Data`-Header der Seite hinzu, die das erfolgreiche Abmelden von der Site bestätigt (`https://example.com/logout`, zum Beispiel):

```http
Clear-Site-Data: "cache", "cookies", "storage", "executionContexts", "prefetchCache", "prerenderCache"
```

### Cookies löschen

Wenn dieser Header mit der Antwort unter `https://example.com/clear-cookies` bereitgestellt wird, werden alle Cookies auf derselben Domain `https://example.com` und allen Subdomains (wie `https://stage.example.com`, etc.) gelöscht.

```http
Clear-Site-Data: "cookies"
```

### Spekulationen löschen

Wenn dieser Header mit der Antwort unter `https://example.com/change-state.json` bereitgestellt wird, werden alle [spekulierten Navigationen](/de/docs/Web/API/Speculation_Rules_API) Prerenders auf derselben Domain `https://example.com` und allen Subdomains (wie `https://stage.example.com`) gelöscht.

```http
Clear-Site-Data: "prerenderCache"
```

Um sowohl Prefetch- als auch Prerender-Spekulationen zu löschen, müssen sowohl `prefetchCache` als auch `prerenderCache` gesendet werden:

```http
Clear-Site-Data: "prefetchCache", "prerenderCache"
```

Es gibt Fälle, in denen das Löschen eines von beiden oder beider angemessen ist.

Zum Beispiel könnte eine client-seitig gerenderte Anwendung, die Daten aus JavaScript abruft, `prerenderCache` bei Zustandsänderungen verwenden, um die vorgerenderten Seiten zu verwerfen, aber das vorausgeladene HTML beibehalten, um es zu verwenden, wenn die Seite gerendert (oder erneut gerendert) wird.

Andererseits, wenn das vorausgeladene HTML-Dokument veraltete Daten enthält, die entsprechende vorgerenderte Seite jedoch eingerichtet ist, um die Daten zu aktualisieren, wenn sie angezeigt wird, müssen Sie möglicherweise nicht `prerenderCache` verwenden, möchten aber wahrscheinlich die `prefetchCache`-Direktive verwenden: damit das veraltete HTML in einem zukünftigen Prerender nicht verwendet wird.

Schließlich, wenn das vorausgeladene HTML-Dokument veraltete Daten enthält und auch keine veralteten Inhalte auf vorgerenderten Seiten aktualisiert, dann ist es am angemessensten, sowohl `prefetchCache` als auch `prerenderCache` anzugeben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Cache-Control")}}
