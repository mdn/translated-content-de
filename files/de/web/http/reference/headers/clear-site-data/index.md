---
title: Clear-Site-Data header
short-title: Clear-Site-Data
slug: Web/HTTP/Reference/Headers/Clear-Site-Data
l10n:
  sourceCommit: f1113cf25440d058956cfae2a9e44e8c86182d43
---

{{securecontext_header}}{{HTTPSidebar}}

Der HTTP-**`Clear-Site-Data`**-{{Glossary("response_header", "Antwortheader")}} sendet ein Signal an den Client, dass er alle Browsing-Daten bestimmter Typen (Cookies, Speicher, Cache), die mit der anfordernden Website verbunden sind, entfernen soll. Er ermöglicht es Webentwicklern, mehr Kontrolle über die von Browsern für ihre Ursprünge gespeicherten Daten zu haben.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwortheader")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungsheader")}}</th>
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
> Alle Direktiven müssen der [quoted-string Grammatik](https://datatracker.ietf.org/doc/html/rfc7230#section-3.2.6) entsprechen. Eine Direktive, die die Anführungszeichen nicht einschließt, ist ungültig.

- `"cache"`

  - : Der Server signalisiert, dass der Client lokal zwischengespeicherte Daten (den Browser-Cache, siehe [HTTP-Caching](/de/docs/Web/HTTP/Guides/Caching)) für den Ursprung der Antwort-URL entfernen soll. Je nach Browser kann dies auch Dinge wie vorgerenderte Seiten, Skript-Caches, WebGL-Shader-Caches oder Adressleiste-Vorschläge löschen.

- `"clientHints"` {{Experimental_Inline}}

  - : Gibt an, dass der Server alle [Client-Hinweise](/de/docs/Web/HTTP/Guides/Client_hints) (angefordert über {{HTTPHeader("Accept-CH")}}) entfernt, die für den Ursprung der Antwort-URL gespeichert sind.

    > [!NOTE]
    > In Browsern, die den `"clientHints"`-Datentyp unterstützen, werden Client-Hinweise auch bei Angabe der Typen `"cache"`, `"cookies"` oder `"*"` gelöscht. `"clientHints"` ist daher nur erforderlich, wenn keiner dieser anderen Typen angegeben ist.

- `"cookies"`

  - : Der Server signalisiert, dass der Client alle Cookies für den Ursprung der Antwort-URL entfernen soll. HTTP-Authentifizierungsdaten werden ebenfalls gelöscht. Dies wirkt sich auf die gesamte registrierte Domäne aus, einschließlich Subdomains. Sowohl `https://example.com` als auch `https://stage.example.com` werden Cookies gelöscht haben.

- `"executionContexts"` {{Experimental_Inline}}

  - : Der Server signalisiert, dass der Client alle Browsing-Kontexte für den Ursprung der Antwort neu laden soll ([`Location.reload`](/de/docs/Web/API/Location/reload)).

- `"prefetchCache"` {{experimental_inline}}

  - : Wird verwendet, um [Spekulationsregeln](/de/docs/Web/API/Speculation_Rules_API)-Prefetches zu löschen, die auf den Referrer-Ursprung beschränkt sind.

- `"prerenderCache"` {{experimental_inline}}

  - : Wird verwendet, um [Spekulationsregeln](/de/docs/Web/API/Speculation_Rules_API)-Prerender zu löschen, die auf den Referrer-Ursprung beschränkt sind.

- `"storage"`

  - : Der Server signalisiert, dass der Client alle DOM-Speicher für den Ursprung der Antwort-URL entfernen soll. Dies schließt Speichermechanismen wie ein:

    - localStorage (führt `localStorage.clear` aus),
    - sessionStorage (führt `sessionStorage.clear` aus),
    - IndexedDB (für jede Datenbank ausführen [`IDBFactory.deleteDatabase`](/de/docs/Web/API/IDBFactory/deleteDatabase)),
    - Serviceworker-Registrierungen (für jede Serviceworker-Registrierung ausführen [`ServiceWorkerRegistration.unregister`](/de/docs/Web/API/ServiceWorkerRegistration/unregister)),
    - Web SQL-Datenbanken (veraltet),
    - [FileSystem-API-Daten](/de/docs/Web/API/File_and_Directory_Entries_API),
    - Plug-in-Daten (Flash über [`NPP_ClearSiteData`](https://wiki.mozilla.org/NPAPI:ClearSiteData)).

- `"*"` (Wildcard)
  - : Der Server signalisiert, dass der Client alle Datentypen für den Ursprung der Antwort löschen soll. Wenn in zukünftigen Versionen dieses Headers weitere Datentypen hinzugefügt werden, werden diese ebenfalls abgedeckt.

## Beispiele

### Abmelden von einer Website

Wenn sich ein Benutzer von Ihrer Website oder Ihrem Dienst abmeldet, möchten Sie möglicherweise lokal gespeicherte Daten, einschließlich vorab abgerufener oder vorgerenderter Inhalte für [spekulierte Navigationen](/de/docs/Web/API/Speculation_Rules_API) entfernen. Um dies zu tun, fügen Sie den `Clear-Site-Data`-Header zu der Seite hinzu, die das erfolgreiche Abmelden von der Site bestätigt (zum Beispiel `https://example.com/logout`):

```http
Clear-Site-Data: "cache", "cookies", "storage", "executionContexts", "prefetchCache", "prerenderCache"
```

### Cookies löschen

Wenn dieser Header mit der Antwort auf `https://example.com/clear-cookies` geliefert wird, werden alle Cookies auf derselben Domäne `https://example.com` und allen Subdomains (wie `https://stage.example.com` usw.) gelöscht.

```http
Clear-Site-Data: "cookies"
```

### Spekulationen löschen

Wenn dieser Header mit der Antwort auf `https://example.com/change-state.json` geliefert wird, werden alle [spekulierten Navigationen](/de/docs/Web/API/Speculation_Rules_API)-Prerender auf derselben Domäne `https://example.com` und allen Subdomains (wie `https://stage.example.com`), gelöscht.

```http
Clear-Site-Data: "prerenderCache"
```

Um sowohl Prefetch- als auch Prerender-Spekulationen zu löschen, müssen sowohl `prefetchCache` als auch `prerenderCache` gesendet werden:

```http
Clear-Site-Data: "prefetchCache", "prerenderCache"
```

Es gibt Fälle, in denen das Löschen des einen oder anderen oder beider sinnvoll ist.

Zum Beispiel könnte eine clientseitig gerenderte Anwendung, die Daten aus JavaScript zieht, `prerenderCache` bei einer Zustandsänderung verwenden, um die vorgerenderten Seiten zu verwerfen, aber das vorab abgerufene HTML behalten, um es zu verwenden, wenn die Seite gerendert (oder erneut vorgerendert) wird.

Andererseits, wenn das vorab abgerufene HTML-Dokument veraltete Daten enthält, die entsprechende vorgerenderte Seite jedoch so eingerichtet ist, dass die Daten beim Anzeigen aktualisiert werden, müssen Sie `prerenderCache` möglicherweise nicht verwenden, möchten aber wahrscheinlich die Anweisung `prefetchCache` verwenden: damit das veraltete HTML nicht in einem zukünftigen Prerender verwendet wird.

Schließlich, wenn das vorab abgerufene HTML-Dokument veraltete Daten enthält und veraltete Inhalte auf vorgerenderten Seiten nicht aktualisiert, ist es am sinnvollsten, sowohl `prefetchCache` als auch `prerenderCache` anzugeben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Cache-Control")}}
