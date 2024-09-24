---
title: Codepunkt
slug: Glossary/Code_point
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

Ein **Codepunkt** ist eine Nummer, die einem abstrakten Zeichen in einem System zur Darstellung von Texten (wie Unicode) zugewiesen wird. In Unicode wird ein Codepunkt in der Form "U+1234" ausgedrückt, wobei "1234" die zugewiesene Nummer ist. Zum Beispiel ist dem Zeichen "A" ein Codepunkt von U+0041 zugewiesen.

Zeichenkodierungsformen wie UTF-8 und UTF-16 bestimmen, wie ein Unicode-Codepunkt als Bytefolge kodiert werden soll. Verschiedene Kodierungsformen können denselben Codepunkt als unterschiedliche Bytefolgen kodieren: Zum Beispiel wird das kyrillische Zeichen "Ф", dessen Codepunkt U+0424 ist, in UTF-8 als `0xd0a4` und in UTF-16 als `0x0424` kodiert.

## Siehe auch

- [The Unicode Standard: Code Points and Characters](https://www.unicode.org/versions/Unicode14.0.0/ch02.pdf#G25564)
