---
title: Code point
slug: Glossary/Code_point
l10n:
  sourceCommit: 3e097148b4c6cb9c6d8824275599f855ca63827b
---

{{GlossarySidebar}}

Ein **Codepunkt** ist eine Zahl, die verwendet wird, um ein abstraktes Zeichen in einem System zur Darstellung von Text (wie Unicode) zu repräsentieren. In Unicode wird ein Codepunkt in der Form "U+1234" ausgedrückt, wobei "1234" die zugeordnete Zahl ist. Zum Beispiel hat das Zeichen "A" den Codepunkt U+0041.

Zeichencodierungsformen, wie {{Glossary("UTF-8", "UTF-8")}} und {{Glossary("UTF-16", "UTF-16")}}, bestimmen, wie ein Unicode-Codepunkt als eine Folge von Bytes codiert werden soll. Verschiedene Codierungsformen können denselben Codepunkt als verschiedene Bytesequenzen codieren: beispielsweise wird das kyrillische Zeichen "Ф", dessen Codepunkt U+0424 ist, in UTF-8 als `0xd0a4` und in UTF-16 als `0x0424` kodiert.

## Siehe auch

- [Der Unicode-Standard: Codepunkte und Zeichen](https://www.unicode.org/versions/Unicode14.0.0/ch02.pdf#G25564)
