---
title: Salt
slug: Glossary/Salt
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

In der Kryptografie ist **Salt** ein zufälliger Datenwert, der zu einem Passwort hinzugefügt wird, bevor es {{Glossary("hash_function", "gehasht")}} wird. Dies macht es Angreifern unmöglich, Passwörter aus ihren Hashes mit vorab berechneten Tabellen von Passwörtern und den entsprechenden Hashes abzuleiten.

Passwörter sollten niemals in ihrer Klartextform gespeichert werden, aufgrund des Risikos, dass ein Angreifer in die Datenbank einbrechen könnte, in der sie gespeichert sind. Typischerweise wird das Passwort gehasht, und der resultierende Hash wird gespeichert. Wenn die Hash-Funktion kryptografisch sicher ist, ist es für einen Angreifer selbst dann unpraktisch, die Funktion umzukehren, wenn er Zugriff auf die gespeicherten Hashes erlangen kann.

Um ein Passwort aus einem Hash abzuleiten, können Angreifer das Passwort entsprechend einem Hash in einer vorab berechneten Tabelle (auch bekannt als [Rainbow-Table](https://en.wikipedia.org/wiki/Rainbow_table)) nachschlagen, die mögliche Passwörter ihren Hashes zuordnet:

| Passwort | Hash        |
| -------- | ----------- |
| pa55w0rd | 56965E2A... |
| abcdef   | BEF57EC7... |
| letmein  | 1C8BFE8F... |

Obwohl diese Tabellen sehr groß sein können, können solche Angriffe effektiv sein, da das Nachschlagen in der Tabelle eine schnelle Operation ist.

Das Hinzufügen von zufälligem Salt zu Passwörtern, bevor sie gehasht werden, verhindert, dass dieser Angriff funktioniert, da der Hash nicht nur auf dem Passwort allein, sondern auf dem Passwort in Kombination mit dem Salt berechnet wird.

Im Gegensatz zum Passwort muss das Salt nicht geheim gehalten werden: Es kann zusammen mit dem gesalzenen und gehashten Passwort in der Server-Datenbank gespeichert werden.
