---
title: UTF-8
slug: Glossary/UTF-8
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

UTF-8 (UCS Transformation Format 8) ist die am häufigsten verwendete {{Glossary("Character encoding", "Zeichenkodierung")}} im World Wide Web. Jedes Zeichen wird durch ein bis vier Bytes dargestellt. UTF-8 ist abwärtskompatibel mit {{Glossary("ASCII")}} und kann jedes standardisierte Unicode-Zeichen darstellen.

Die ersten 128 UTF-8-Zeichen stimmen genau mit den ersten 128 ASCII-Zeichen (nummeriert 0-127) überein, was bedeutet, dass bestehender ASCII-Text bereits gültiges UTF-8 ist. Alle anderen Zeichen verwenden zwei bis vier Bytes. Jedes Byte hat einige Bits, die für Kodierungszwecke reserviert sind. Da nicht-ASCII-Zeichen mehr als ein Byte zur Speicherung benötigen, besteht die Gefahr, dass sie beschädigt werden, wenn die Bytes getrennt und nicht wieder zusammengeführt werden.

## Siehe auch

- [UTF-8](https://en.wikipedia.org/wiki/UTF-8) auf Wikipedia
- [FAQ über UTF-8 auf der Unicode-Website](https://www.unicode.org/faq/utf_bom.html#UTF8)
