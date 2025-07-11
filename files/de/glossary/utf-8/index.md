---
title: UTF-8
slug: Glossary/UTF-8
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

UTF-8 (UCS Transformation Format 8) ist die am häufigsten verwendete {{Glossary("Character_encoding", "Zeichenkodierung")}} im World Wide Web. Jedes Zeichen wird durch ein bis vier Bytes dargestellt. UTF-8 ist rückwärtskompatibel mit {{Glossary("ASCII", "ASCII")}} und kann jedes standardisierte Unicode-Zeichen darstellen.

Die ersten 128 UTF-8-Zeichen entsprechen exakt den ersten 128 ASCII-Zeichen (nummeriert von 0-127), was bedeutet, dass vorhandener ASCII-Text bereits gültiges UTF-8 ist. Alle anderen Zeichen verwenden zwei bis vier Bytes. Jedes Byte hat einige Bits, die für Kodierungszwecke reserviert sind. Da Nicht-ASCII-Zeichen mehr als ein Byte für die Speicherung benötigen, besteht das Risiko, dass sie beschädigt werden, wenn die Bytes getrennt werden und nicht wieder kombiniert werden.

## Siehe auch

- [UTF-8](https://en.wikipedia.org/wiki/UTF-8) auf Wikipedia
- [FAQ über UTF-8 auf der Unicode-Website](https://www.unicode.org/faq/utf_bom.html#UTF8)
