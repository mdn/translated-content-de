---
title: Unicode
slug: Glossary/Unicode
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

Unicode ist ein standardisiertes [Zeichensatz](/de/docs/Glossary/Character_set), das [Zeichen](/de/docs/Glossary/Character) aus den verschiedenen Sprachen, Schriftsystemen und Symbolen der Welt nummeriert und definiert.

Indem jedem Zeichen eine Nummer zugewiesen wird, können Programmierer [Zeichenkodierungen](/de/docs/Glossary/Character_encoding) erstellen, die es Computern ermöglichen, beliebige Sprachkombinationen in derselben Datei oder im selben Programm zu speichern, zu verarbeiten und zu übertragen.

Vor Unicode war es schwierig und fehleranfällig, Sprachen in denselben Daten zu mischen. Zum Beispiel würde ein Zeichensatz japanische Zeichen speichern, und ein anderer das arabische Alphabet. Wenn nicht klar gekennzeichnet war, welche Teile der Daten in welchem Zeichensatz waren, würden andere Programme und Computer den Text falsch anzeigen oder ihn während der Verarbeitung beschädigen. Wenn Sie jemals Text gesehen haben, bei dem Zeichen wie gebogene Anführungszeichen („“) durch Kauderwelsch wie `Ã‚Â£` ersetzt wurden, dann haben Sie dieses Problem gesehen, das als [Mojibake](https://en.wikipedia.org/wiki/Mojibake) bekannt ist.

Die häufigste Unicode-Zeichenkodierung im Web ist [UTF-8](/de/docs/Glossary/UTF-8). Andere Kodierungen existieren, wie UTF-16 oder das veraltete UCS-2, aber UTF-8 wird empfohlen.

## Siehe auch

- [Unicode](https://en.wikipedia.org/wiki/Unicode) bei Wikipedia
- [The Unicode Standard: A Technical Introduction](https://www.unicode.org/standard/principles.html)
