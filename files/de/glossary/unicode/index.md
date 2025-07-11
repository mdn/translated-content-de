---
title: Unicode
slug: Glossary/Unicode
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Unicode ist ein standardisiertes {{Glossary("Character_set", "Zeichensatz")}}, das {{Glossary("Character", "Zeichen")}} aus den verschiedenen Sprachen, Schriftsystemen und Symbolen der Welt nummeriert und definiert.

Indem jedem Zeichen eine Nummer zugewiesen wird, können Programmierer {{Glossary("Character_encoding", "Zeichenkodierungen")}} erstellen, um es Computern zu ermöglichen, jede Kombination von Sprachen in derselben Datei oder demselben Programm zu speichern, zu verarbeiten und zu übertragen.

Vor Unicode war es schwierig und fehleranfällig, Sprachen in denselben Daten zu mischen. Zum Beispiel würde ein Zeichensatz japanische Zeichen speichern, während ein anderer das arabische Alphabet speicherte. Wenn nicht klar gekennzeichnet war, welche Teile der Daten in welchem Zeichensatz vorlagen, würden andere Programme und Computer den Text falsch anzeigen oder ihn während der Verarbeitung beschädigen. Wenn Sie jemals Text gesehen haben, bei dem Zeichen wie Anführungszeichen („“) durch Kauderwelsch wie `Ã‚Â£` ersetzt wurden, dann haben Sie dieses Problem, bekannt als [Mojibake](https://en.wikipedia.org/wiki/Mojibake), erlebt.

Die gebräuchlichste Unicode-Zeichenkodierung im Web ist {{Glossary("UTF-8", "UTF-8")}}. Es gibt andere Kodierungen wie {{Glossary("UTF-16", "UTF-16")}} oder das veraltete UCS-2, aber UTF-8 wird empfohlen.

## Siehe auch

- [Unicode](https://en.wikipedia.org/wiki/Unicode) auf Wikipedia
- [The Unicode Standard: A Technical Introduction](https://www.unicode.org/standard/principles.html)
