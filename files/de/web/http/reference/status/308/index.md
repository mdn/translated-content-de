---
title: 308 Permanent Redirect
slug: Web/HTTP/Reference/Status/308
l10n:
  sourceCommit: a52689c74c6c89f45c54447bb148e54ed320db62
---

{{HTTPSidebar}}

Der HTTP-Statuscode **`308 Permanent Redirect`** [Umleitungsantwort](/de/docs/Web/HTTP/Reference/Status#redirection_messages) zeigt an, dass die angeforderte Ressource dauerhaft zur URL verschoben wurde, die im {{HTTPHeader("Location")}}-Header angegeben ist.

Ein Browser, der diesen Status erhält, fordert automatisch die Ressource an der URL im `Location`-Header an und leitet den Benutzer zur neuen Seite weiter. Suchmaschinen, die diese Antwort erhalten, ordnen Links zur ursprünglichen URL der umgeleiteten Ressource zu und übergeben das {{Glossary("SEO", "SEO")}}-Ranking an die neue URL.

Die Anforderungsmethode und der Body **werden nicht geändert** durch den Client bei der umgeleiteten Anfrage.
Ein {{HTTPStatus("301", "301 Moved Permanently")}} erfordert, dass die Anforderungsmethode und der Body bei der Umleitung unverändert bleiben, wird jedoch von älteren Clients fälschlicherweise behandelt, indem die {{HTTPMethod("GET")}}-Methode verwendet wird.

> [!NOTE]
> Einige Webanwendungen können den `308 Permanent Redirect` auf nicht standardisierte Weise und für unterschiedliche Zwecke verwenden.
> Zum Beispiel verwendet Google Drive eine `308 Resume Incomplete`-Antwort, um dem Client anzuzeigen, wenn ein unvollständiger Upload ins Stocken geraten ist.
> Weitere Informationen finden Sie in der Google Drive-Dokumentation unter [Perform a resumable download](https://developers.google.com/workspace/drive/api/guides/manage-uploads).

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

- [Umleitungen in HTTP](/de/docs/Web/HTTP/Guides/Redirections)
- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Reference/Status)
- {{HTTPStatus("301", "301 Moved Permanently")}}, das Äquivalent dieses Statuscodes, das die Anforderungsmethode ändern kann, wenn es sich nicht um {{HTTPMethod("GET")}} handelt
- {{HTTPStatus("302", "302 Found")}}, eine temporäre Weiterleitung
