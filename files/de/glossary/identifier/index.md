---
title: Bezeichner
slug: Glossary/Identifier
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Ein **Bezeichner** ist eine Zeichenfolge im Code, die eine {{Glossary("variable", "Variable")}}, {{Glossary("function", "Funktion")}} oder {{Glossary("property", "Eigenschaft")}} identifiziert. In den meisten Programmiersprachen sind Bezeichner case-sensitiv und nicht in Anführungszeichen gesetzt.

In {{Glossary("JavaScript", "JavaScript")}} können Bezeichner {{Glossary("Unicode", "Unicode")}}-Buchstaben, `$`, `_` und Ziffern (0-9) enthalten, dürfen jedoch nicht mit einer Ziffer beginnen. Ein Bezeichner unterscheidet sich von einem {{Glossary("string", "String")}} dadurch, dass ein String Daten darstellt, während ein Bezeichner Teil des Codes ist. In JavaScript gibt es keine Möglichkeit, Bezeichner in Strings zu konvertieren, aber manchmal ist es möglich, Strings in Bezeichner zu parsen.

In {{Glossary("CSS", "CSS")}} gibt es zwei Bezeichner-Datentypen: {{cssxref("custom-ident")}} und {{cssxref("dashed-ident")}}. Der CSS-{{cssxref("ident")}} kann fast jedes Zeichen enthalten, aber nicht-Buchstaben/Ziffern-ASCII-Zeichen wie `"`, `\` und `*` müssen escaped werden, er darf nicht mit einer Ziffer beginnen, und Emojis sind gültige Bezeichner, die kein Escaping erfordern.

## Siehe auch

- Verwandte Glossarbegriffe:
  - {{Glossary("Scope", "Scope")}}
  - {{Glossary("string", "String")}}
  - {{Glossary("Unicode", "Unicode")}}
- [Bezeichner](https://en.wikipedia.org/wiki/Identifier#In_computer_science) auf Wikipedia
