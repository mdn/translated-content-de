---
title: Unicode
slug: Glossary/Unicode
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

Unicode ist ein standardisierter [Zeichensatz](/de/docs/Glossary/Character_set), der [Zeichen](/de/docs/Glossary/Character) aus den verschiedenen Sprachen, Schriftsystemen und Symbolen der Welt nummeriert und definiert.

Indem jedem Zeichen eine Nummer zugewiesen wird, können Programmierer [Zeichenkodierungen](/de/docs/Glossary/Character_encoding) erstellen, die es Computern ermöglichen, jede Kombination von Sprachen in derselben Datei oder demselben Programm zu speichern, zu verarbeiten und zu übertragen.

Vor Unicode war es schwierig und fehleranfällig, verschiedene Sprachen in denselben Daten zu mischen. Zum Beispiel würde ein Zeichensatz japanische Zeichen speichern und ein anderer das arabische Alphabet. Wenn nicht klar markiert war, welche Teile der Daten in welchem Zeichensatz vorlagen, zeigten andere Programme und Computer den Text falsch an oder beschädigten ihn während der Verarbeitung. Wenn Sie jemals einen Text gesehen haben, in dem Zeichen wie typografische Anführungszeichen (&ldquo;&rdquo;) durch Kauderwelsch wie `Ã‚Â£` ersetzt wurden, haben Sie dieses Problem erlebt, das als [Mojibake](https://en.wikipedia.org/wiki/Mojibake) bekannt ist.

Die am häufigsten verwendete Unicode-Zeichenkodierung im Web ist [UTF-8](/de/docs/Glossary/UTF-8). Es gibt andere Kodierungen wie UTF-16 oder das veraltete UCS-2, aber UTF-8 wird empfohlen.

## Siehe auch

- [Unicode](https://en.wikipedia.org/wiki/Unicode) auf Wikipedia
- [The Unicode Standard: A Technical Introduction](https://www.unicode.org/standard/principles.html)
