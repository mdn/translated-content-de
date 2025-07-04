---
title: 308 Permanent Redirect
slug: Web/HTTP/Reference/Status/308
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Der HTTP-Statuscode **`308 Permanent Redirect`** [Weiterleitungsantwort](/de/docs/Web/HTTP/Reference/Status#redirection_messages) gibt an, dass die angeforderte Ressource dauerhaft zu der URL verschoben wurde, die im {{HTTPHeader("Location")}}-Header angegeben ist.

Ein Browser, der diesen Status empfängt, wird automatisch die Ressource unter der URL im `Location`-Header anfordern und den Benutzer zur neuen Seite weiterleiten. Suchmaschinen, die diese Antwort erhalten, schreiben Links zur ursprünglichen URL der weitergeleiteten Ressource zu und übertragen das {{Glossary("SEO", "SEO")}}-Ranking zur neuen URL.

Die Anforderungsmethode und der Body **werden nicht** von der Client-Seite in der weitergeleiteten Anfrage verändert. Ein {{HTTPStatus("301", "301 Moved Permanently")}} erfordert, dass die Anforderungsmethode und der Body unverändert bleiben, wenn die Weiterleitung durchgeführt wird, aber dies wird von älteren Clients fälschlicherweise behandelt, indem stattdessen die {{HTTPMethod("GET")}}-Methode verwendet wird.

> [!NOTE]
> Einige Webanwendungen können den `308 Permanent Redirect` in nicht standardisierter Weise und für andere Zwecke verwenden.
> Zum Beispiel verwendet Google Drive eine `308 Resume Incomplete`-Antwort, um dem Client anzuzeigen, wenn ein unvollständiger Upload ins Stocken geraten ist.
> Siehe [Perform a resumable download](https://developers.google.com/workspace/drive/api/guides/manage-uploads) in der Google Drive-Dokumentation für weitere Informationen.

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

- [Weiterleitungen in HTTP](/de/docs/Web/HTTP/Guides/Redirections)
- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Reference/Status)
- {{HTTPStatus("301", "301 Moved Permanently")}}, das Äquivalent zu diesem Statuscode, das die Anforderungsmethode ändern kann, wenn es sich nicht um eine {{HTTPMethod("GET")}} handelt
- {{HTTPStatus("302", "302 Found")}}, eine temporäre Weiterleitung
