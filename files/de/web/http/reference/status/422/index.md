---
title: 422 Unprocessable Content
slug: Web/HTTP/Reference/Status/422
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Der HTTP-Statuscode **`422 Unprocessable Content`** [Client-Fehlerantwort](/de/docs/Web/HTTP/Reference/Status#client_error_responses) zeigt an, dass der Server den Inhaltstyp der Anforderungsinhalte verstanden hat und die Syntax der Anforderungsinhalte korrekt war, aber er nicht in der Lage war, die enthaltenen Anweisungen zu verarbeiten.

Clients, die eine `422`-Antwort erhalten, sollten erwarten, dass das Wiederholen der Anforderung ohne Änderungen mit dem gleichen Fehler fehlschlägt.

## Status

```http
422 Unprocessable Content
```

## Beispiele

### SHA-Validierungsfehler

Im folgenden Beispiel wird eine Anforderung zur Aktualisierung von Dateiinhalten gestellt ([basierend auf der GitHub-API](https://docs.github.com/en/rest/repos/contents?apiVersion=2022-11-28#create-or-update-file-contents)).
Das `content`-Feld ist {{Glossary("Base64", "Base64")}} kodiert und verwendet `\n`-Zeilenumbrüche alle 60 Zeichen, wobei eines die Zeichenkette beendet:

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

In dieser Implementierung erwartet der Server strikt {{rfc("4648")}}-kompatibel Base64-kodierte Inhalte (unter Verwendung von [strikten Kodierungsmethoden](https://ruby-doc.org/3.3.2/stdlibs/base64/Base64.html#method-i-strict_encode64)).
Eine `422` Unprocessable Content-Antwort wird zurückgegeben und das `message`-Feld bietet Kontext über den Validierungsfehler:

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
