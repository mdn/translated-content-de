---
title: Escape-Zeichen
slug: Glossary/Escape_character
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Ein **Escape-Zeichen** ist ein {{Glossary("character", "Zeichen")}}, das bewirkt, dass eines oder mehrere der darauf folgenden Zeichen anders interpretiert werden. Dies bildet eine **Escape-Sequenz**, die häufig verwendet wird, um ein Zeichen darzustellen, das eine alternative Bedeutung hat, wenn es wörtlich gedruckt wird, wie das Anführungszeichen in einem Zeichenfolgenliteral. Escape-Sequenzen können auch andere Verwendungen haben, insbesondere in [regulären Ausdrücken](/de/docs/Web/JavaScript/Reference/Regular_expressions#escape_sequences).

- In JavaScript-[Regexes](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape), [Zeichenfolgen-Literalen](/de/docs/Web/JavaScript/Reference/Lexical_grammar#string_literals) und [Bezeichnern](/de/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers) können wir den Backslash (`\`) verwenden, um Zeichen wie `\'`, `\"`, `\u0026` usw. zu maskieren.
- In CSS-Bezeichnern können wir den Backslash (`\`) verwenden, um Zeichen wie `\\`, `\n`, `\26` usw. zu maskieren. Weitere Informationen finden Sie unter [Escape-Zeichen](/de/docs/Web/CSS/Reference/Values/ident#escaping_characters).
- In HTML-Textinhalten und Attributwerten können wir {{Glossary("character_reference", "Zeichenreferenzen")}} wie `&lt;`, `&#60;` oder `&#x3C;` verwenden.
- In {{Glossary("URL", "URLs")}} können wir das Prozentzeichen (`%`) verwenden, um Zeichen wie `%20`, `%3C`, `%3E` usw. zu maskieren.

## Siehe auch

- Verwandte Glossarbegriffe:
  - {{Glossary("Character", "Character")}}
  - {{Glossary("Character_reference", "Character reference")}}
  - {{Glossary("Code_point", "Code point")}}
- [Escape-Zeichen](https://en.wikipedia.org/wiki/Escape_character) auf Wikipedia
- [Escape-Sequenz](https://en.wikipedia.org/wiki/Escape_sequence) auf Wikipedia
