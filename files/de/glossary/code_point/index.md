---
title: Codepoint
slug: Glossary/Code_point
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Ein **Codepoint** ist eine Zahl, die zur Darstellung eines abstrakten Zeichens in einem System zur Textdarstellung (wie Unicode) zugewiesen wird. In Unicode wird ein Codepoint in der Form "U+1234" ausgedrückt, wobei "1234" die zugewiesene Nummer ist. Zum Beispiel ist dem Zeichen "A" der Codepoint U+0041 zugewiesen.

Zeichenkodierungsformen, wie {{Glossary("UTF-8", "UTF-8")}} und {{Glossary("UTF-16", "UTF-16")}}, bestimmen, wie ein Unicode-Codepoint als Folge von Bytes kodiert werden soll. Verschiedene Kodierungsformen können denselben Codepoint als unterschiedliche Bytefolgen kodieren: Beispielsweise wird das kyrillische Zeichen "Ф", dessen Codepoint U+0424 ist, in UTF-8 als `0xd0a4` und in UTF-16 als `0x0424` kodiert.

## Siehe auch

- [Der Unicode-Standard: Codepoints und Zeichen](https://www.unicode.org/versions/Unicode14.0.0/ch02.pdf#G25564)
