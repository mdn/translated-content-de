---
title: 418 Ich bin eine Teekanne
slug: Web/HTTP/Status/418
l10n:
  sourceCommit: ba53fe04589c36a2210d7549c003f3016093ef8e
---

{{HTTPSidebar}}

Der HTTP-Statusantwortcode **`418 Ich bin eine Teekanne`** zeigt an, dass der Server sich weigert, Kaffee zu brühen, da er dauerhaft eine Teekanne ist. Eine kombinierte Kaffee-/Teekanne, die vorübergehend keinen Kaffee hat, sollte stattdessen {{HTTPStatus("503")}} zurückgeben. Dieser Fehler ist eine Anspielung auf das "Hyper Text Coffee Pot Control Protocol", das in Aprilstreichen 1998 und 2014 definiert wurde.

Einige Websites verwenden diese Antwort für Anfragen, die sie nicht bearbeiten möchten, wie zum Beispiel automatisierte Abfragen.

## Status

```http
418 I'm a teapot
```

## Spezifikationen

{{Specifications}}

## Siehe auch

- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Status)
- [Wikipedia: Hyper Text Coffee Pot Control Protocol](https://en.wikipedia.org/wiki/Hyper_Text_Coffee_Pot_Control_Protocol)
