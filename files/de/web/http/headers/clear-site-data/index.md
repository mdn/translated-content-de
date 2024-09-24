---
title: Clear-Site-Data
slug: Web/HTTP/Headers/Clear-Site-Data
l10n:
  sourceCommit: bb23abe84f0f4da3cf5d72a66d356cf5f9e3cfa2
---

{{securecontext_header}}{{HTTPSidebar}}

Der **`Clear-Site-Data`**-Header entfernt Browserdaten (Cookies, Speicherung, Cache), die mit der anfordernden Website verbunden sind. Er ermöglicht Webentwicklern, mehr Kontrolle über die von einem Client-Browser für ihre Ursprünge gespeicherten Daten zu haben.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>nein</td>
    </tr>
  </tbody>
</table>

## Syntax

Der `Clear-Site-Data`-Header akzeptiert eine oder mehrere Direktiven. Wenn alle Datentypen gelöscht werden sollen, kann die Platzhalter-Direktive (`"*"`) verwendet werden.

```http
// Einzelne Direktive
Clear-Site-Data: "cache"

// Mehrere Direktiven (durch Komma getrennt)
Clear-Site-Data: "cache", "cookies"

// Platzhalter
Clear-Site-Data: "*"
```

## Direktiven

> [!NOTE]
> Alle Direktiven müssen der [quoted-string grammar](https://datatracker.ietf.org/doc/html/rfc7230#section-3.2.6) entsprechen. Eine Direktive, die die Anführungszeichen nicht enthält, ist ungültig.

- `"cache"` {{Experimental_Inline}}

  - : Zeigt an, dass der Server den lokal zwischengespeicherten Daten (den Browser-Cache, siehe [HTTP-Caching](/de/docs/Web/HTTP/Caching)) für den Ursprung der Antwort-URL entfernen möchte. Abhängig vom Browser können auch Dinge wie vorgerenderte Seiten, Skriptcaches, WebGL-Shader-Caches oder Adressleisten-Vorschläge gelöscht werden.

- `"clientHints"` {{Experimental_Inline}}

  - : Zeigt an, dass der Server alle [client hints](/de/docs/Web/HTTP/Client_hints) (angefordert über {{httpheader("Accept-CH")}}) löschen möchte, die für den Ursprung der Antwort-URL gespeichert sind.

    > [!NOTE]
    > In Browsern, die den Datentyp `"clientHints"` unterstützen, werden Client-Hints auch gelöscht, wenn die Typen `"cache"`, `"cookies"` oder `"*"` angegeben sind. `"clientHints"` ist daher nur erforderlich, wenn keiner dieser anderen Typen angegeben ist.

- `"cookies"`
  - : Zeigt an, dass der Server alle Cookies für den Ursprung der Antwort-URL entfernen möchte. Auch HTTP-Authentifizierungsdaten werden gelöscht. Dies betrifft die gesamte registrierte Domain, einschließlich Subdomains. So werden Cookies sowohl von `https://example.com` als auch von `https://stage.example.com` entfernt.
- `"storage"`

  - : Zeigt an, dass der Server alle DOM-Speicher für den Ursprung der Antwort-URL entfernen möchte. Dies umfasst Speichersysteme wie:

    - localStorage (führt `localStorage.clear` aus),
    - sessionStorage (führt `sessionStorage.clear` aus),
    - IndexedDB (führt für jede Datenbank {{domxref("IDBFactory.deleteDatabase")}} aus),
    - Service-Worker-Registrierungen (führt für jede Service-Worker-Registrierung {{domxref("ServiceWorkerRegistration.unregister")}} aus),
    - Web-SQL-Datenbanken (veraltet),
    - [Dateisystem-API-Daten](/de/docs/Web/API/File_and_Directory_Entries_API),
    - Plugin-Daten (Flash über [`NPP_ClearSiteData`](https://wiki.mozilla.org/NPAPI:ClearSiteData)).

- `"executionContexts"` {{Experimental_Inline}}
  - : Zeigt an, dass der Server alle Browsing-Kontexte für den Ursprung der Antwort neu laden möchte ({{domxref("Location.reload")}}).
- `"*"` (Platzhalter)
  - : Zeigt an, dass der Server alle Datentypen für den Ursprung der Antwort löschen möchte. Wenn in zukünftigen Versionen dieses Headers weitere Datentypen hinzugefügt werden, werden diese ebenfalls abgedeckt sein.

## Beispiele

### Abmelden von einer Website

Wenn sich ein Nutzer von Ihrer Website oder Ihrem Dienst abmeldet, möchten Sie möglicherweise lokal gespeicherte Daten entfernen. Um dies zu tun, fügen Sie den `Clear-Site-Data`-Header zu der Seite hinzu, die das erfolgreiche Abmelden von der Website bestätigt (z. B. `https://example.com/logout`):

```http
Clear-Site-Data: "cache", "cookies", "storage", "executionContexts"
```

### Cookies löschen

Wenn dieser Header mit der Antwort an `https://example.com/clear-cookies` geliefert wird, werden alle Cookies auf derselben Domain `https://example.com` und allen Subdomains (wie `https://stage.example.com`, etc.) gelöscht.

```http
Clear-Site-Data: "cookies"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Cache-Control")}}
