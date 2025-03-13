---
title: 422 Unprocessable Content
slug: Web/HTTP/Reference/Status/422
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

Der HTTP-Statuscode **`422 Unprocessable Content`** [Client-Fehlerantwort](/de/docs/Web/HTTP/Reference/Status#client_error_responses) zeigt an, dass der Server den Inhaltstyp des Anforderungsinhalts verstanden hat und die Syntax des Anforderungsinhalts korrekt war, aber die enthaltenen Anweisungen nicht verarbeiten konnte.

Clients, die eine `422`-Antwort erhalten, sollten erwarten, dass das Wiederholen der Anfrage ohne Änderungen mit demselben Fehler fehlschlägt.

## Status

```http
422 Unprocessable Content
```

## Beispiele

### SHA-Validierungsfehler

Das folgende Beispiel sendet eine Anfrage, um Datei-Inhalte zu aktualisieren ([basierend auf der GitHub-API](https://docs.github.com/en/rest/repos/contents?apiVersion=2022-11-28#create-or-update-file-contents)).
Das `content`-Feld ist {{Glossary("Base64", "Base64")}} kodiert und verwendet `\n` Zeilenumbrüche alle 60 Zeichen, mit einem, das die Zeichenkette abschließt:

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

In dieser Implementierung erwartet der Server strikt [RFC 4648](https://tools.ietf.org/html/rfc4648)-konformen Base64-kodierten Inhalt (unter Verwendung [strenger Kodierungsmethoden](https://ruby-doc.org/3.3.2/stdlibs/base64/Base64.html#method-i-strict_encode64)).
Eine `422` Unprocessable Content-Antwort wird zurückgegeben, und das `message`-Feld bietet Kontext zu dem Validierungsfehler:

```http
HTTP/1.1 422 Unprocessable Content
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

- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Reference/Status)
