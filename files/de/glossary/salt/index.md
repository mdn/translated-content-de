---
title: Salt
slug: Glossary/Salt
l10n:
  sourceCommit: e63979cfb7866a20a546623e6cf736ccf9055f03
---

{{GlossarySidebar}}

In der Kryptographie wird als **Salt** zufällige Daten bezeichnet, die zu einem Passwort hinzugefügt werden, bevor es [gehasht](/de/docs/Glossary/hash) wird. Dies macht es einem Angreifer unmöglich, Passwörter aus ihren Hashes mit vorab berechneten Tabellen von Passwörtern und den entsprechenden Hashes abzuleiten.

Passwörter sollten niemals in ihrer Klartextform gespeichert werden, da das Risiko besteht, dass ein Angreifer in die Datenbank einbricht, in der sie gespeichert sind. Normalerweise wird das Passwort gehasht und der resultierende Hash gespeichert. Wenn die Hash-Funktion kryptographisch sicher ist, ist es für einen Angreifer selbst dann unpraktisch, die Funktion rückgängig zu machen, wenn er Zugang zu den gespeicherten Hashes erhält.

Um ein Passwort aus einem Hash abzuleiten, können Angreifer das Passwort mithilfe einer vorab berechneten Tabelle (auch bekannt als [Rainbow Table](https://en.wikipedia.org/wiki/Rainbow_table)) nachschlagen, die mögliche Passwörter ihren Hashes zuordnet:

| Passwort | Hash        |
| -------- | ----------- |
| pa55w0rd | 56965E2A... |
| abcdef   | BEF57EC7... |
| letmein  | 1C8BFE8F... |

Obwohl diese Tabellen sehr groß sein können, können solche Angriffe effektiv sein, da das Nachschlagen in der Tabelle eine schnelle Operation ist.

Das Hinzufügen von zufälligem Salt zu Passwörtern, bevor sie gehasht werden, verhindert, dass dieser Angriff funktioniert, da der Hash nicht nur auf dem Passwort basiert, sondern auf dem Passwort in Kombination mit dem Salt.

Im Gegensatz zum Passwort muss das Salt nicht geheim gehalten werden: Es kann zusammen mit dem gesalzenen und gehashten Passwort in der Datenbank des Servers gespeichert werden.
