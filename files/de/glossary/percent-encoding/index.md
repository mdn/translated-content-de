---
title: Prozentkodierung
slug: Glossary/Percent-encoding
l10n:
  sourceCommit: 757b8ff0ceaea2113344ad39ab3f5e123fa24ede
---

**Prozentkodierung** ist ein Mechanismus zur Kodierung von 8-Bit-Zeichen, die im Kontext von {{Glossary("URL", "URLs")}} eine spezielle Bedeutung haben. Es wird manchmal auch URL-Kodierung genannt. Die Kodierung besteht aus einer Substitution: Ein '%' gefolgt von der hexadezimalen Darstellung des ASCII-Werts des ersetzten Zeichens.

Spezielle Zeichen, die kodiert werden müssen, sind: `':'`, `'/'`, `'?'`, `'#'`, `'['`, `']'`, `'@'`, `'!'`, `'$'`, `'&'`, `"'"`, `'('`, `')'`, `'*'`, `'+'`, `','`, `';'`, `'='` sowie `'%'` selbst. Andere Zeichen müssen nicht kodiert werden, obwohl sie kodiert werden könnten.

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

Abhängig vom Kontext wird das Zeichen `' '` in ein `'+'` übersetzt (wie in der Prozentkodierungsversion, die in einer `application/x-www-form-urlencoded` Nachricht verwendet wird) oder in `'%20'` wie bei URLs.

## Siehe auch

- Definition der [Prozentkodierung](https://en.wikipedia.org/wiki/Percent-encoding) auf Wikipedia.
- {{RFC(3986)}}, Abschnitt 2.1, in dem diese Kodierung definiert ist.
- [`encodeURI()`](/de/docs/Web/JavaScript/Reference/Global_Objects/encodeURI) und [`encodeURIComponent()`](/de/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent) — Funktionen zur Prozentkodierung von URLs
