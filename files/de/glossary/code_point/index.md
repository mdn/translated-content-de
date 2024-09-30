---
title: Code point
slug: Glossary/Code_point
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

Ein **Codepoint** ist eine Zahl, die zugewiesen wird, um ein abstraktes Zeichen in einem System zur Darstellung von Text (wie Unicode) darzustellen. In Unicode wird ein Codepoint in der Form "U+1234" ausgedrückt, wobei "1234" die zugewiesene Zahl ist. Zum Beispiel ist dem Zeichen "A" der Codepoint U+0041 zugewiesen.

Zeichenkodierungsformen wie UTF-8 und UTF-16 bestimmen, wie ein Unicode-Codepoint als Byte-Sequenz kodiert werden soll. Verschiedene Kodierungsformen können denselben Codepoint als unterschiedliche Byte-Sequenzen kodieren: zum Beispiel wird das kyrillische Zeichen "Ф", dessen Codepoint U+0424 ist, in UTF-8 als `0xd0a4` und in UTF-16 als `0x0424` kodiert.

## Siehe auch

- [Der Unicode-Standard: Codepoints und Zeichen](https://www.unicode.org/versions/Unicode14.0.0/ch02.pdf#G25564)
