---
title: Clear-Site-Data header
short-title: Clear-Site-Data
slug: Web/HTTP/Reference/Headers/Clear-Site-Data
l10n:
  sourceCommit: 08d05cdb5579ad780d418a9b55da7220f491de8d
---

{{securecontext_header}}{{HTTPSidebar}}

Der HTTP **`Clear-Site-Data`** {{Glossary("response_header", "Antwort-Header")}} sendet ein Signal an den Client, dass er alle Browsing-Daten bestimmter Typen (Cookies, Speicher, Cache), die mit der anfordernden Website verknüpft sind, entfernen soll. Dadurch erhalten Webentwickler mehr Kontrolle über die von Browsern für ihre Ursprünge gespeicherten Daten.

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
> Alle Direktiven müssen der [quoted-string grammar](https://datatracker.ietf.org/doc/html/rfc7230#section-3.2.6) entsprechen. Eine Direktive, die keine Anführungszeichen verwendet, ist ungültig.

- `"cache"`

  - : Der Server signalisiert, dass der Client lokal zwischengespeicherte Daten (den Browser-Cache, siehe [HTTP-Caching](/de/docs/Web/HTTP/Guides/Caching)) für den Ursprung der Antwort-URL entfernen soll. Abhängig vom Browser kann dies auch Dinge wie vorgerenderte Seiten, Skript-Caches, WebGL Shader-Caches oder Adressleiste-Vorschläge löschen.

- `"clientHints"` {{Experimental_Inline}}

  - : Gibt an, dass der Server alle [client hints](/de/docs/Web/HTTP/Guides/Client_hints) (angefordert über {{HTTPHeader("Accept-CH")}}) entfernt, die für den Ursprung der Antwort-URL gespeichert sind.

    > [!NOTE]
    > In Browsern, die den Datentyp `"clientHints"` unterstützen, werden client hints auch gelöscht, wenn die Typen `"cache"`, `"cookies"` oder `"*"` angegeben sind. `"clientHints"` wird daher nur benötigt, wenn keiner dieser anderen Typen angegeben ist.

- `"cookies"`

  - : Der Server signalisiert, dass der Client alle Cookies für den Ursprung der Antwort-URL entfernen soll. HTTP-Authentifizierungsanmeldedaten werden ebenfalls gelöscht. Dies betrifft die gesamte registrierte Domain einschließlich der Subdomains. So werden sowohl `https://example.com` als auch `https://stage.example.com` Cookies gelöscht.

- `"executionContexts"` {{Experimental_Inline}}

  - : Der Server signalisiert, dass der Client alle Browsing-Kontexte für den Ursprung der Antwort neu laden soll ([`Location.reload`](/de/docs/Web/API/Location/reload)).

- `"prefetchCache"`

  - : Wird verwendet, um [Spekulationsregeln](/de/docs/Web/API/Speculation_Rules_API) Vorabrufe, die auf den Referrer-Ursprung beschränkt sind, zu löschen.

- `"prerenderCache"`

  - : Wird verwendet, um [Spekulationsregeln](/de/docs/Web/API/Speculation_Rules_API) Vorabrenderungen, die auf den Referrer-Ursprung beschränkt sind, zu löschen.

- `"storage"`

  - : Der Server signalisiert, dass der Client alle DOM-Speicher für den Ursprung der Antwort-URL entfernen soll. Dazu gehören Speichermechanismen wie:

    - localStorage (führt `localStorage.clear` aus),
    - sessionStorage (führt `sessionStorage.clear` aus),
    - IndexedDB (führt für jede Datenbank [`IDBFactory.deleteDatabase`](/de/docs/Web/API/IDBFactory/deleteDatabase) aus),
    - Service-Worker-Registrierungen (führt für jede Service-Worker-Registrierung [`ServiceWorkerRegistration.unregister`](/de/docs/Web/API/ServiceWorkerRegistration/unregister) aus),
    - Web SQL-Datenbanken (veraltet),
    - [FileSystem API-Daten](/de/docs/Web/API/File_and_Directory_Entries_API),
    - Plugindaten (Flash über [`NPP_ClearSiteData`](https://wiki.mozilla.org/NPAPI:ClearSiteData)).

- `"*"` (Wildcard)
  - : Der Server signalisiert, dass der Client alle Datentypen für den Ursprung der Antwort löschen soll. Wenn in zukünftigen Versionen dieses Headers weitere Datentypen hinzugefügt werden, werden auch diese abgedeckt sein.

## Beispiele

### Abmelden von einer Website

Wenn sich ein Benutzer von Ihrer Website oder Ihrem Dienst abmeldet, möchten Sie möglicherweise lokal gespeicherte Daten entfernen, einschließlich aller vorab abgerufenen oder vorgeladenen Inhalte für [spekulierte Navigationen](/de/docs/Web/API/Speculation_Rules_API). Um dies zu tun, fügen Sie den `Clear-Site-Data`-Header zu der Seite hinzu, die bestätigt, dass das Abmelden von der Website erfolgreich abgeschlossen wurde (zum Beispiel `https://example.com/logout`):

```http
Clear-Site-Data: "cache", "cookies", "storage", "executionContexts", "prefetchCache", "prerenderCache"
```

### Cookies löschen

Wird dieser Header mit der Antwort bei `https://example.com/clear-cookies` geliefert, werden alle Cookies auf der gleichen Domain `https://example.com` und allen Subdomains (wie `https://stage.example.com` usw.) gelöscht.

```http
Clear-Site-Data: "cookies"
```

### Spekulationen löschen

Wird dieser Header mit der Antwort bei `https://example.com/change-state.json` geliefert, werden alle [spekulierten Navigationen](/de/docs/Web/API/Speculation_Rules_API) -Vorabrenderungen auf der gleichen Domain `https://example.com` und allen Subdomains (wie `https://stage.example.com`) gelöscht.

```http
Clear-Site-Data: "prerenderCache"
```

Um sowohl Vorabladen als auch Vorabrendern von Spekulationen zu löschen, müssen sowohl `prefetchCache` als auch `prerenderCache` gesendet werden:

```http
Clear-Site-Data: "prefetchCache", "prerenderCache"
```

Es gibt Fälle, in denen das Löschen des einen oder anderen oder beider angemessen ist.

Beispielsweise könnte eine clientseitig gerenderte Anwendung, die Daten von JavaScript aus einholt, `prerenderCache` bei einem Statuswechsel verwenden, um die vorgeladenen Seiten zu verwerfen, aber das vorab abgerufene HTML behalten, um es zu verwenden, wenn die Seite gerendert (oder erneut vorgeladen) wird.

Andererseits, wenn das vorab abgerufene HTML-Dokument veraltete Daten enthält, die entsprechende vorgeladene Seite jedoch so eingestellt ist, dass die Daten bei der Anzeige aktualisiert werden, müssen Sie möglicherweise nicht `prerenderCache` verwenden, möchten aber wahrscheinlich die `prefetchCache`-Direktive benutzen, damit das alte HTML nicht in einem zukünftigen Vorabrender verwendet wird.

Schließlich, wenn das vorab abgerufene HTML-Dokument veraltete Daten enthält und auch nicht veraltete Inhalte auf vorgeladenen Seiten aktualisiert, dann ist es am besten, sowohl `prefetchCache` als auch `prerenderCache` zu spezifizieren.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Cache-Control")}}
