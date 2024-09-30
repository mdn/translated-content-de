---
title: 422 Unprocessable Content
slug: Web/HTTP/Status/422
l10n:
  sourceCommit: ba53fe04589c36a2210d7549c003f3016093ef8e
---

{{HTTPSidebar}}

Der HTTP-Statuscode **`422 Unprocessable Content`** [Client-Fehlerantwort](/de/docs/Web/HTTP/Status#client_error_responses) zeigt an, dass der Server den Inhaltstyp der Anfrageentität verstanden hat und die Syntax der Anfrageentität korrekt war, aber er konnte die enthaltenen Anweisungen nicht verarbeiten.

Clients, die eine `422`-Antwort erhalten, sollten erwarten, dass das erneute Senden der Anfrage ohne Änderungen mit dem gleichen Fehler scheitern wird.

## Status

```http
422 Unprocessable Content
```

## Beispiele

### SHA-Validierungsfehler

Im folgenden Beispiel wird eine Anfrage gesendet, um Dateiinhalte zu aktualisieren ([basierend auf der GitHub-API](https://docs.github.com/en/rest/repos/contents?apiVersion=2022-11-28#create-or-update-file-contents)).
Das `content`-Feld ist [Base64](/de/docs/Glossary/Base64) kodiert und verwendet `\n` als Zeilenumbruch alle 60 Zeichen, wobei eines die Zeichenkette abschließt:

```http
PUT /repos/mdn/content/contents/README.md HTTP/1.1
Host: api.example.com
Accept: application/vnd.github+json
Authorization: Bearer abcd123
Content-Type: application/json
Content-Length: 165

{
  "message": "My commit",
  "content": "WW9zaGkgd2FzIHRoZXJlLCBzbyB3ZXJlIEF5c2UsIGFuZCBCZWxnaW4uIEl0\nIHdhcyBncmVhdCE=\n",
  "sha": "80e73970fdee49dbdbac27c1f565d1eb1975d519"
}
```

In dieser Implementierung erwartet der Server strikt {{rfc("4648")}}-konform kodierten Base64-Inhalt (unter Verwendung von [strikten Kodiermethoden](https://ruby-doc.org/3.3.2/stdlibs/base64/Base64.html#method-i-strict_encode64)).
Eine `422 Unprocessable Entity`-Antwort wird zurückgegeben und das `message`-Feld liefert Kontext zur Validierungsfehlermeldung:

```http
HTTP/1.1 422 Unprocessable Entity
Date: Fri, 28 Jun 2024 12:00:00 GMT
Content-Type: application/json; charset=utf-8
Content-Length: 187

{
  "message": "content is not valid Base64",
  "documentation_url": "https://docs.example.com/en/rest/repos/contents"
}
```

## Spezifikationen

{{Specifications}}

## Siehe auch

- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Status)
