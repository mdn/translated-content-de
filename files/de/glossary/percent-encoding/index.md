---
title: Prozentkodierung
slug: Glossary/Percent-encoding
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

**Prozentkodierung** ist ein Mechanismus zur Kodierung von 8-Bit-Zeichen, die in Bezug auf {{Glossary("URL", "URLs")}} eine spezielle Bedeutung haben. Es wird manchmal auch als URL-Kodierung bezeichnet. Die Kodierung besteht aus einer Ersetzung: Ein '%' gefolgt von der hexadezimalen Darstellung des ASCII-Werts des zu ersetzenden Zeichens.

Spezielle Zeichen, die kodiert werden müssen, sind: `':'`, `'/'`, `'?'`, `'#'`, `'['`, `']'`, `'@'`, `'!'`, `'$'`, `'&'`, `"'"`, `'('`, `')'`, `'*'`, `'+'`, `','`, `';'`, `'='`, sowie `'%'` selbst. Andere Zeichen müssen nicht kodiert werden, obwohl sie kodiert werden könnten.

| Zeichen | Kodierung      |
| ------- | -------------- |
| `':'`   | `%3A`          |
| `'/'`   | `%2F`          |
| `'?'`   | `%3F`          |
| `'#'`   | `%23`          |
| `'['`   | `%5B`          |
| `']'`   | `%5D`          |
| `'@'`   | `%40`          |
| `'!'`   | `%21`          |
| `'$'`   | `%24`          |
| `'&'`   | `%26`          |
| `"'"`   | `%27`          |
| `'('`   | `%28`          |
| `')'`   | `%29`          |
| `'*'`   | `%2A`          |
| `'+'`   | `%2B`          |
| `','`   | `%2C`          |
| `';'`   | `%3B`          |
| `'='`   | `%3D`          |
| `'%'`   | `%25`          |
| `' '`   | `%20` oder `+` |

Je nach Kontext wird das Zeichen `' '` in ein `'+'` übersetzt (wie in der Prozentkodierungsversion, die in einer `application/x-www-form-urlencoded` Nachricht verwendet wird), oder in `'%20'` wie in URLs.

## Siehe auch

- Definition der [Prozentkodierung](https://en.wikipedia.org/wiki/Percent-encoding) in Wikipedia.
- {{RFC(3986)}}, Abschnitt 2.1, wo diese Kodierung definiert ist.
- [`encodeURI()`](/de/docs/Web/JavaScript/Reference/Global_Objects/encodeURI) und [`encodeURIComponent()`](/de/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent) — Funktionen zur Prozentkodierung von URLs.
