---
title: 308 Permanent Redirect
slug: Web/HTTP/Reference/Status/308
l10n:
  sourceCommit: a44f198025a4efab10df30201b59793b8e0fd38c
---

Der HTTP-Statuscode **`308 Permanent Redirect`** [Umleitungsantwort](/de/docs/Web/HTTP/Reference/Status#redirection_messages) zeigt an, dass die angeforderte Ressource dauerhaft zur URL verschoben wurde, die im {{HTTPHeader("Location")}}-Header angegeben ist.

Ein Browser, der diesen Status empfängt, wird automatisch die Ressource unter der im `Location`-Header angegebenen URL anfordern und den Benutzer auf die neue Seite umleiten.

Die Anfragemethode und der Body **werden nicht** vom Client in der umgeleiteten Anfrage modifiziert.
Ein {{HTTPStatus("301", "301 Moved Permanently")}} erfordert, dass die Anfragemethode und der Body unverändert bleiben, wenn die Umleitung erfolgt, aber dies wird von älteren Clients fälschlicherweise so gehandhabt, dass die {{HTTPMethod("GET")}}-Methode verwendet wird.

> [!NOTE]
> Einige Webanwendungen können den `308 Permanent Redirect` auf nicht standardisierte Weise und für unterschiedliche Zwecke verwenden.
> Zum Beispiel verwendet Google Drive eine `308 Resume Incomplete`-Antwort, um dem Client anzuzeigen, wenn ein unvollständiger Upload angehalten wurde.
> Weitere Informationen finden Sie in der [Anleitung zum Durchführen eines fortsetzbaren Downloads](https://developers.google.com/workspace/drive/api/guides/manage-uploads) in der Google Drive-Dokumentation.

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

- [Umleitungen in HTTP](/de/docs/Web/HTTP/Guides/Redirections)
- [HTTP-Antwortstatus-Codes](/de/docs/Web/HTTP/Reference/Status)
- {{HTTPStatus("301", "301 Moved Permanently")}}, das Äquivalent dieses Statuscodes, das die Anfragemethode ändern kann, wenn sie nicht {{HTTPMethod("GET")}} ist
- {{HTTPStatus("302", "302 Found")}}, eine temporäre Umleitung
