---
title: 308 Permanent Redirect
slug: Web/HTTP/Reference/Status/308
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

Der HTTP-Statuscode **`308 Permanent Redirect`** [Umlenkungsantwort](/de/docs/Web/HTTP/Reference/Status#redirection_messages) zeigt an, dass die angeforderte Ressource dauerhaft auf die durch den {{HTTPHeader("Location")}} Header angegebene URL verschoben wurde.

Ein Browser, der diesen Status erhält, wird automatisch die Ressource unter der URL im `Location`-Header anfordern und den Benutzer zur neuen Seite weiterleiten. Suchmaschinen, die diese Antwort erhalten, werden Links auf die ursprüngliche URL der umgeleiteten Ressource zuordnen und das {{Glossary("SEO", "SEO")}}-Ranking an die neue URL weitergeben.

Die Anfragemethode und der -inhalt **werden nicht verändert** durch den Client in der umgeleiteten Anfrage. Ein {{HTTPStatus("301", "301 Moved Permanently")}} erfordert, dass die Anfragemethode und der -inhalt unverändert bleiben, wenn eine Umleitung durchgeführt wird. Ältere Clients handhaben dies jedoch falsch und verwenden stattdessen die {{HTTPMethod("GET")}}-Methode.

> [!NOTE]
> Einige Webanwendungen können den `308 Permanent Redirect` auf nicht standardisierte Weise und für unterschiedliche Zwecke verwenden.
> Zum Beispiel verwendet Google Drive eine `308 Resume Incomplete`-Antwort, um dem Client mitzuteilen, wenn ein unvollständiger Upload ins Stocken geraten ist.
> Lesen Sie [Führen Sie einen wiederaufnehmbaren Download durch](https://developers.google.com/drive/api/guides/manage-uploads) in der Google Drive-Dokumentation für weitere Informationen.

## Status

```http
308 Permanent Redirect
```

## Beispiele

### 308 Antwort auf eine verschobene Ressource

```http
GET /featured HTTP/1.1
Host: www.example.org
```

```http
HTTP/1.1 308 Permanent Redirect
Location: http://www.example.com/featured
Content-Length: 0
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Umlenkungen in HTTP](/de/docs/Web/HTTP/Guides/Redirections)
- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Reference/Status)
- {{HTTPStatus("301", "301 Moved Permanently")}}, das Äquivalent zu diesem Statuscode, das möglicherweise die Anfragemethode ändert, wenn sie nicht {{HTTPMethod("GET")}} ist
- {{HTTPStatus("302", "302 Found")}}, eine temporäre Umleitung
