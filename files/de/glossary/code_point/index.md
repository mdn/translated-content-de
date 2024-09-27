---
title: Code Point
slug: Glossary/Code_point
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

Ein **Code Point** ist eine Zahl, die zugewiesen wird, um ein abstraktes Zeichen in einem System zur Darstellung von Text darzustellen (wie zum Beispiel Unicode). In Unicode wird ein Code Point in der Form "U+1234" ausgedrückt, wobei "1234" die zugewiesene Zahl ist. Zum Beispiel wird dem Zeichen "A" der Code Point U+0041 zugewiesen.

Zeichenkodierungsformen, wie UTF-8 und UTF-16, bestimmen, wie ein Unicode-Code Point als Bytefolge codiert werden soll. Verschiedene Kodierungsformen können denselben Code Point als unterschiedliche Bytefolgen kodieren: Zum Beispiel wird das kyrillische Zeichen "Ф", dessen Code Point U+0424 ist, in UTF-8 als `0xd0a4` und in UTF-16 als `0x0424` codiert.

## Siehe auch

- [Der Unicode-Standard: Code Points und Zeichen](https://www.unicode.org/versions/Unicode14.0.0/ch02.pdf#G25564)
