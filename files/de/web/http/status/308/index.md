---
title: 308 Permanent Redirect
slug: Web/HTTP/Status/308
l10n:
  sourceCommit: fcb01c3c48499529a7e846d1887a091433add073
---

{{HTTPSidebar}}

Der HTTP-Statuscode **`308 Permanent Redirect`** [Redirection-Response](/de/docs/Web/HTTP/Status#redirection_messages) zeigt an, dass die angeforderte Ressource dauerhaft an die URL verschoben wurde, die im {{HTTPHeader("Location")}}-Header angegeben ist.

Ein Browser, der diesen Status erhält, wird automatisch die Ressource unter der im `Location`-Header angegebenen URL anfordern und den Benutzer zur neuen Seite weiterleiten. Suchmaschinen, die diese Antwort erhalten, werden die Verweise auf die ursprüngliche URL der umgeleiteten Ressource zuordnen und das [SEO](/de/docs/Glossary/SEO)-Ranking an die neue URL weitergeben.

Die Anfragemethode und der -inhalt **werden von** dem Client in der umgeleiteten Anfrage **nicht verändert**.
Ein {{HTTPStatus("301", "301 Moved Permanently")}} erfordert, dass die Anfragemethode und der -inhalt bei der Umleitung unverändert bleiben, wird jedoch von älteren Clients fälschlicherweise behandelt, die stattdessen die {{HTTPMethod("GET")}}-Methode verwenden.

> [!NOTE]
> Einige Webanwendungen könnten den `308 Permanent Redirect` auf nicht standardisierte Weise und für verschiedene Zwecke verwenden.
> Zum Beispiel verwendet Google Drive eine `308 Resume Incomplete`-Antwort, um dem Client anzuzeigen, dass ein nicht vollständig hochgeladener Upload gestoppt wurde.
> Weitere Informationen finden Sie unter [Perform a resumable download](https://developers.google.com/drive/api/guides/manage-uploads) in der Google Drive-Dokumentation.

## Status

```http
308 Permanent Redirect
```

## Beispiele

### 308-Antwort für eine verschobene Ressource

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

- [Umleitungen in HTTP](/de/docs/Web/HTTP/Redirections)
- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Status)
- {{HTTPStatus("301", "301 Moved Permanently")}}, das Äquivalent zu diesem Statuscode, der die Anfragemethode ändern kann, wenn es sich nicht um eine {{HTTPMethod("GET")}} handelt
- {{HTTPStatus("302", "302 Found")}}, eine temporäre Umleitung
