---
title: UTF-8
slug: Glossary/UTF-8
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

UTF-8 (UCS Transformation Format 8) ist die am häufigsten verwendete [Zeichenkodierung](/de/docs/Glossary/Character_encoding) im World Wide Web. Jedes Zeichen wird durch ein bis vier Bytes dargestellt. UTF-8 ist rückwärtskompatibel mit [ASCII](/de/docs/Glossary/ASCII) und kann jedes standardmäßige Unicode-Zeichen repräsentieren.

Die ersten 128 UTF-8-Zeichen entsprechen genau den ersten 128 ASCII-Zeichen (nummeriert 0-127), was bedeutet, dass bestehender ASCII-Text bereits gültiges UTF-8 ist. Alle anderen Zeichen verwenden zwei bis vier Bytes. Jedes Byte hat einige Bits, die für Kodierungszwecke reserviert sind. Da nicht-ASCII-Zeichen mehr als ein Byte für die Speicherung benötigen, besteht die Gefahr, dass sie beschädigt werden, wenn die Bytes getrennt und nicht wieder zusammengefügt werden.

## Siehe auch

- [UTF-8](https://en.wikipedia.org/wiki/UTF-8) auf Wikipedia
- [FAQ über UTF-8 auf der Unicode-Website](https://www.unicode.org/faq/utf_bom.html#UTF8)
