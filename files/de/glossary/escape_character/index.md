---
title: Escape-Zeichen
slug: Glossary/Escape_character
l10n:
  sourceCommit: bd74b8a8222517dead9def675a499dcf1dc30328
---

{{GlossarySidebar}}

Ein **Escape-Zeichen** ist ein {{Glossary("character", "Zeichen")}}, das dazu führt, dass eines oder mehrere nachfolgende Zeichen anders interpretiert werden. Dies bildet eine **Escape-Sequenz**, die oft verwendet wird, um ein Zeichen darzustellen, das eine alternative Bedeutung hat, wenn es wörtlich gedruckt wird, wie das Anführungszeichen in einem String-Literal. Escape-Sequenzen können auch andere Verwendungszwecke haben, insbesondere in [regulären Ausdrücken](/de/docs/Web/JavaScript/Reference/Regular_expressions#escape_sequences).

- In JavaScript [RegExps](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape), [String-Literalen](/de/docs/Web/JavaScript/Reference/Lexical_grammar#string_literals) und [Identifikatoren](/de/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers) können wir den Backslash (`\`) verwenden, um Zeichen wie `\'`, `\"`, `\u0026` usw. zu escapen.
- In CSS-Identifikatoren können wir den Backslash (`\`) verwenden, um Zeichen wie `\\`, `\n`, `\26` usw. zu escapen. Weitere Informationen finden Sie unter [escape characters](/de/docs/Web/CSS/ident#escaping_characters).
- In HTML-Textinhalten und Attributwerten können wir {{Glossary("character_reference", "Zeichenreferenzen")}} wie `&lt;`, `&#60;` oder `&#x3C;` verwenden.
- In {{Glossary("URL", "URLs")}} können wir das Prozentzeichen (`%`) verwenden, um Zeichen wie `%20`, `%3C`, `%3E` usw. zu escapen.

## Siehe auch

- Verwandte Glossarbegriffe:
  - {{Glossary("Character", "Zeichen")}}
  - {{Glossary("Character_reference", "Zeichenreferenz")}}
  - {{Glossary("Code_point", "Codepoint")}}
- [Escape-Zeichen](https://en.wikipedia.org/wiki/Escape_character) auf Wikipedia
- [Escape-Sequenz](https://en.wikipedia.org/wiki/Escape_sequence) auf Wikipedia
