---
title: Identifier
slug: Glossary/Identifier
l10n:
  sourceCommit: 4c56b29d3e8e85de044a93a4a37509d03b48b2cb
---

{{GlossarySidebar}}

Ein **Identifier** ist eine Zeichenfolge im Code, die eine {{Glossary("variable", "Variable")}}, {{Glossary("function", "Funktion")}} oder {{Glossary("property", "Eigenschaft")}} identifiziert. In den meisten Programmiersprachen sind Bezeichner case-sensitive und nicht in Anführungszeichen gesetzt.

In {{Glossary("JavaScript", "JavaScript")}} können Bezeichner {{Glossary("Unicode", "Unicode")}}-Buchstaben, `$`, `_` und Ziffern (0-9) enthalten, dürfen jedoch nicht mit einer Ziffer beginnen. Ein Bezeichner unterscheidet sich von einem {{Glossary("string", "String")}} dadurch, dass ein String Daten darstellt, während ein Bezeichner Teil des Codes ist. In JavaScript gibt es keine Möglichkeit, Bezeichner in Strings zu konvertieren, aber manchmal ist es möglich, Strings in Bezeichner zu parsen.

In {{Glossary("CSS", "CSS")}} gibt es zwei Identifier-Datentypen: {{cssxref("custom-ident")}} und {{cssxref("dashed-ident")}}. Das CSS {{cssxref("ident")}} kann fast jedes Zeichen enthalten, aber nicht-Buchstaben/Ziffern-ASCII-Zeichen wie `"`, `\` und `*` müssen maskiert werden, es darf nicht mit einer Ziffer beginnen, und Emojis sind gültige Bezeichner, die nicht maskiert werden müssen.

## Siehe auch

- Verwandte Glossarbegriffe:
  - {{Glossary("Scope", "Scope")}}
  - {{Glossary("string", "string")}}
  - {{Glossary("Unicode", "Unicode")}}
- [Identifier](https://en.wikipedia.org/wiki/Identifier#In_computer_science) auf Wikipedia
