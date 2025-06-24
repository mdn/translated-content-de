---
title: Unicode
slug: Glossary/Unicode
l10n:
  sourceCommit: 3e097148b4c6cb9c6d8824275599f855ca63827b
---

{{GlossarySidebar}}

Unicode ist ein Standard für {{Glossary("Character_set", "Zeichensätze")}}, der {{Glossary("Character", "Zeichen")}} aus den verschiedenen Sprachen, Schriftsystemen und Symbolen der Welt nummeriert und definiert.

Indem jedem Zeichen eine Nummer zugewiesen wird, können Programmierer {{Glossary("Character_encoding", "Zeichenkodierungen")}} erstellen, die es Computern ermöglichen, jede Kombination von Sprachen in derselben Datei oder demselben Programm zu speichern, zu verarbeiten und zu übertragen.

Vor Unicode war es schwierig und fehleranfällig, Sprachen im selben Datensatz zu mischen. Zum Beispiel würde ein Zeichensatz japanische Zeichen speichern, und ein anderer das arabische Alphabet. Wenn nicht klar markiert war, welche Teile der Daten in welchem Zeichensatz waren, würden andere Programme und Computer den Text falsch anzeigen oder ihn während der Verarbeitung beschädigen. Wenn Sie jemals Text gesehen haben, bei dem Zeichen wie geschwungene Anführungszeichen („“) durch Kauderwelsch wie `Ã‚Â£` ersetzt wurden, dann haben Sie dieses Problem gesehen, bekannt als [Mojibake](https://en.wikipedia.org/wiki/Mojibake).

Die gebräuchlichste Unicode-Zeichenkodierung im Web ist {{Glossary("UTF-8", "UTF-8")}}. Es existieren andere Kodierungen wie {{Glossary("UTF-16", "UTF-16")}} oder das veraltete UCS-2, aber UTF-8 wird empfohlen.

## Siehe auch

- [Unicode](https://en.wikipedia.org/wiki/Unicode) auf Wikipedia
- [The Unicode Standard: A Technical Introduction](https://www.unicode.org/standard/principles.html)
