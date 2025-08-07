---
title: 418 I'm a teapot
slug: Web/HTTP/Reference/Status/418
l10n:
  sourceCommit: 8654d0983add0e93af8c754e76ba9e3d56fe79be
---

Der HTTP-Statusantwortcode **`418 I'm a teapot`** zeigt an, dass der Server es ablehnt, Kaffee zu brühen, weil er dauerhaft eine Teekanne ist.
Ein kombiniertes Kaffee-/Teekannengerät, das vorübergehend keinen Kaffee hat, sollte stattdessen {{HTTPStatus("503")}} zurückgeben.
Dieser Fehler ist eine Anspielung auf das Hyper Text Coffee Pot Control Protocol, das in April-Scherzen in den Jahren 1998 und 2014 definiert wurde.

Obwohl ursprünglich in [RFC 2324](https://www.rfc-editor.org/rfc/rfc2324) als ein April-Scherz definiert, wurde dieser Statuscode in [RFC 9110](https://www.rfc-editor.org/rfc/rfc9110) formell reserviert, da er als Scherz weit verbreitet eingesetzt wurde. Somit kann er auf absehbare Zeit keine nicht-scherzhaften Bedeutungen erhalten.

Einige Websites verwenden diese Antwort für Anfragen, die sie nicht bearbeiten möchten, wie automatisierte Abfragen.

## Status

```http
418 I'm a teapot
```

## Spezifikationen

{{Specifications}}

## Siehe auch

- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Reference/Status)
- [Wikipedia: Hyper Text Coffee Pot Control Protocol](https://en.wikipedia.org/wiki/Hyper_Text_Coffee_Pot_Control_Protocol)
