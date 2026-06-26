---
title: 418 I'm a teapot
slug: Web/HTTP/Reference/Status/418
l10n:
  sourceCommit: 87ca9db1ebe56eb20c1f20b91fca43955d8f0e26
---

Der HTTP-Statuscode **`418 I'm a teapot`** zeigt an, dass der Server sich weigert, Kaffee zu brühen, da er dauerhaft eine Teekanne ist. Eine kombinierte Kaffee-/Teekanne, die vorübergehend keinen Kaffee hat, sollte stattdessen {{HTTPStatus("503")}} zurückgeben. Dieser Fehler ist eine Anspielung auf das Hyper Text Coffee Pot Control Protocol, das in den Aprilscherzen der Jahre 1998 und 2014 definiert wurde.

Obwohl ursprünglich in [RFC 2324](https://www.rfc-editor.org/info/rfc2324/) als Aprilscherz definiert, wurde dieser Statuscode in [RFC 9110](https://www.rfc-editor.org/info/rfc9110/) formell reserviert, da er aufgrund seines breiten Einsatzes als Scherz nicht mit einer ernsten Bedeutung belegt werden kann.

Einige Websites verwenden diesen Statuscode für Anfragen, die sie nicht bearbeiten möchten, wie zum Beispiel automatisierte Abfragen.

## Status

```http
418 I'm a teapot
```

## Spezifikationen

{{Specifications}}

## Siehe auch

- [HTTP-Statuscodes](/de/docs/Web/HTTP/Reference/Status)
- [Wikipedia: Hyper Text Coffee Pot Control Protocol](https://en.wikipedia.org/wiki/Hyper_Text_Coffee_Pot_Control_Protocol)
