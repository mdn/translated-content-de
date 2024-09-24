---
title: 308 Permanent Redirect
slug: Web/HTTP/Status/308
l10n:
  sourceCommit: fcb01c3c48499529a7e846d1887a091433add073
---

{{HTTPSidebar}}

Der HTTP-Statuscode **`308 Permanent Redirect`** [Weiterleitungsantwort](/de/docs/Web/HTTP/Status#redirection_messages) gibt an, dass die angeforderte Ressource dauerhaft zur URL verschoben wurde, die durch den {{HTTPHeader("Location")}}-Header angegeben wird.

Ein Browser, der diesen Status erhält, wird automatisch die Ressource bei der URL im `Location`-Header anfordern und den Benutzer zur neuen Seite umleiten.
Suchmaschinen, die diese Antwort erhalten, werden Links zur ursprünglichen URL der umgeleiteten Ressource zuordnen und das {{Glossary("SEO")}}-Ranking an die neue URL weitergeben.

Die Anfragemethode und der Inhalt **werden nicht** vom Client in der weitergeleiteten Anfrage geändert.
Ein {{HTTPStatus("301", "301 Moved Permanently")}} erfordert, dass die Anfragemethode und der Inhalt unverändert bleiben, wenn eine Weiterleitung erfolgt, aber dies wird von älteren Clients fälschlicherweise gehandhabt, indem stattdessen die {{HTTPMethod("GET")}}-Methode verwendet wird.

> [!NOTE]
> Einige Webanwendungen verwenden das `308 Permanent Redirect` auf nicht standardmäßige Weise und für unterschiedliche Zwecke.
> Zum Beispiel verwendet Google Drive eine `308 Resume Incomplete`-Antwort, um dem Client anzuzeigen, wenn ein nicht abgeschlossener Upload ins Stocken geraten ist.
> Weitere Informationen finden Sie unter [Perform a resumable download](https://developers.google.com/drive/api/guides/manage-uploads) in der Google Drive-Dokumentation.

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

- [Weiterleitungen in HTTP](/de/docs/Web/HTTP/Redirections)
- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Status)
- {{HTTPStatus("301", "301 Moved Permanently")}}, das Äquivalent dieses Statuscodes, der die Anfragemethode möglicherweise ändert, wenn es sich nicht um {{HTTPMethod("GET")}} handelt
- {{HTTPStatus("302", "302 Found")}}, eine temporäre Weiterleitung
