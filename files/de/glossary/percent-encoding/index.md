---
title: Prozent-Codierung
slug: Glossary/Percent-encoding
l10n:
  sourceCommit: 6c7cb932f7a0735ec2ac64732c9a947510fd1303
---

{{GlossarySidebar}}

**Prozent-Codierung** ist ein Mechanismus zur Codierung von 8-Bit-Zeichen, die im Kontext von [URLs](/de/docs/Glossary/URL) eine spezielle Bedeutung haben. Es wird manchmal auch URL-Codierung genannt. Die Codierung besteht aus einer Ersetzung: Ein `'%'` gefolgt von der hexadezimalen Darstellung des ASCII-Werts des zu ersetzenden Zeichens.

Besondere Zeichen, die codiert werden müssen, sind: `':'`, `'/'`, `'?'`, `'#'`, `'['`, `']'`, `'@'`, `'!'`, `'$'`, `'&'`, `"'"`, `'('`, `')'`, `'*'`, `'+'`, `','`, `';'`, `'='`, sowie `'%'` selbst. Andere Zeichen müssen nicht codiert werden, können aber.

| Zeichen | Codierung      |
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

Je nach Kontext wird das Zeichen `' '` in ein `'+'` übersetzt (wie in der Prozent-Codierungs-Version, die in einer `application/x-www-form-urlencoded` Nachricht verwendet wird) oder in `'%20'`, wie es in URLs vorkommt.

## Siehe auch

- Definition der [Prozent-Codierung](https://en.wikipedia.org/wiki/Percent-encoding) in Wikipedia.
- {{RFC(3986)}}, Abschnitt 2.1, wo diese Codierung definiert ist.
- [`encodeURI()`](/de/docs/Web/JavaScript/Reference/Global_Objects/encodeURI) und [`encodeURIComponent()`](/de/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent) — Funktionen zur Prozent-Codierung von URLs
