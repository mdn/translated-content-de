---
title: 308 Permanent Redirect
slug: Web/HTTP/Status/308
l10n:
  sourceCommit: fcb01c3c48499529a7e846d1887a091433add073
---

{{HTTPSidebar}}

Der HTTP-Statuscode **`308 Permanent Redirect`** [redirection response](/de/docs/Web/HTTP/Status#redirection_messages) zeigt an, dass die angeforderte Ressource dauerhaft auf die in der {{HTTPHeader("Location")}}-Header angegebenen URL verschoben wurde.

Ein Browser, der diesen Status erhält, wird automatisch die Ressource unter der im `Location`-Header angegebenen URL anfordern und den Benutzer zur neuen Seite weiterleiten. Suchmaschinen, die diese Antwort erhalten, werden Links zur ursprünglichen URL der umgeleiteten Ressource zuordnen und das [SEO](/de/docs/Glossary/SEO)-Ranking an die neue URL weitergeben.

Die Anfragemethode und der Inhalt **werden nicht** vom Client in der umgeleiteten Anfrage geändert.
Ein {{HTTPStatus("301", "301 Moved Permanently")}} erfordert, dass die Anfragemethode und der Inhalt unverändert bleiben, wenn die Umleitung durchgeführt wird, jedoch wird dies von älteren Clients fälschlicherweise behandelt, indem die {{HTTPMethod("GET")}}-Methode verwendet wird.

> [!NOTE]
> Einige Webanwendungen können den `308 Permanent Redirect` auf nicht standardisierte Weise und für unterschiedliche Zwecke nutzen.
> Zum Beispiel verwendet Google Drive eine `308 Resume Incomplete`-Antwort, um dem Client mitzuteilen, wenn ein unvollständiger Upload ins Stocken geraten ist.
> Siehe [Perform a resumable download](https://developers.google.com/drive/api/guides/manage-uploads) in der Google Drive-Dokumentation für weitere Informationen.

## Status

```http
308 Permanent Redirect
```

## Beispiele

### 308-Antwort auf eine verschobene Ressource

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

- [Weiterleitungen in HTTP](/de/docs/Web/HTTP/Redirections)
- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Status)
- {{HTTPStatus("301", "301 Moved Permanently")}}, das Äquivalent dieses Statuscodes, das die Anfragemethode ändern kann, wenn es sich nicht um {{HTTPMethod("GET")}} handelt
- {{HTTPStatus("302", "302 Found")}}, eine temporäre Umleitung
