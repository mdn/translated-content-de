---
title: Prozentkodierung
slug: Glossary/Percent-encoding
l10n:
  sourceCommit: 6c7cb932f7a0735ec2ac64732c9a947510fd1303
---

{{GlossarySidebar}}

**Prozentkodierung** ist ein Mechanismus zum Kodieren von 8-Bit-Zeichen, die im Kontext von {{Glossary("URL", "URLs")}} eine spezielle Bedeutung haben. Es wird manchmal URL-Kodierung genannt. Die Kodierung besteht aus einer Ersetzung: Ein '%' gefolgt von der hexadezimalen Darstellung des ASCII-Werts des zu ersetzenden Zeichens.

Sonderzeichen, die kodiert werden müssen, sind: `':'`, `'/'`, `'?'`, `'#'`, `'['`, `']'`, `'@'`, `'!'`, `'$'`, `'&'`, `"'"`, `'('`, `')'`, `'*'`, `'+'`, `','`, `';'`, `'='`, sowie `'%'` selbst. Andere Zeichen müssen nicht kodiert werden, obwohl sie es könnten.

| Zeichen   | Kodierung    |
| --------- | ------------ |
| `':'`     | `%3A`        |
| `'/'`     | `%2F`        |
| `'?'`     | `%3F`        |
| `'#'`     | `%23`        |
| `'['`     | `%5B`        |
| `']'`     | `%5D`        |
| `'@'`     | `%40`        |
| `'!'`     | `%21`        |
| `'$'`     | `%24`        |
| `'&'`     | `%26`        |
| `"'"`     | `%27`        |
| `'('`     | `%28`        |
| `')'`     | `%29`        |
| `'*'`     | `%2A`        |
| `'+'`     | `%2B`        |
| `','`     | `%2C`        |
| `';'`     | `%3B`        |
| `'='`     | `%3D`        |
| `'%'`     | `%25`        |
| `' '`     | `%20` oder `+` |

Je nach Kontext wird das Zeichen `' '` in ein `'+'` übersetzt (wie in der Prozentkodierungsversion, die in einer `application/x-www-form-urlencoded`-Nachricht verwendet wird), oder in `'%20'` wie bei URLs.

## Siehe auch

- Definition von [Prozentkodierung](https://en.wikipedia.org/wiki/Percent-encoding) in Wikipedia.
- {{RFC(3986)}}, Abschnitt 2.1, wo diese Kodierung definiert ist.
- [`encodeURI()`](/de/docs/Web/JavaScript/Reference/Global_Objects/encodeURI) und [`encodeURIComponent()`](/de/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent) — Funktionen zum Prozentkodieren von URLs