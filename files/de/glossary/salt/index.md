---
title: Salz
slug: Glossary/Salt
l10n:
  sourceCommit: e63979cfb7866a20a546623e6cf736ccf9055f03
---

{{GlossarySidebar}}

In der Kryptographie ist **Salz** zufällige Daten, die zu einem Passwort hinzugefügt werden, bevor es {{glossary("hash", "gehasht")}} wird. Dies macht es einem Angreifer unmöglich, Passwörter aus ihren Hashes unter Verwendung vorgefertigter Tabellen mit Passwörtern und den entsprechenden Hashes abzuleiten.

Passwörter sollten niemals in ihrer Klartextform gespeichert werden, wegen des Risikos, dass ein Angreifer in die Datenbank einbricht, in der sie gespeichert sind. Typischerweise wird das Passwort gehasht und der resultierende Hash wird gespeichert. Wenn die Hash-Funktion kryptographisch sicher ist, dann ist es selbst dann, wenn ein Angreifer Zugriff auf die gespeicherten Hashes erhält, unpraktisch für ihn, die Funktion umzukehren.

Um ein Passwort aus einem Hash abzuleiten, können Angreifer das Passwort, das zu einem Hash gehört, in einer vorgefertigten Tabelle nachschlagen (auch bekannt als [Regenbogentabelle](https://en.wikipedia.org/wiki/Rainbow_table)), die mögliche Passwörter ihren Hashes zuordnet:

| Passwort | Hash        |
| -------- | ----------- |
| pa55w0rd | 56965E2A... |
| abcdef   | BEF57EC7... |
| letmein  | 1C8BFE8F... |

Obwohl diese Tabellen sehr groß sein können, können solche Angriffe effektiv sein, da das Nachschlagen in der Tabelle eine schnelle Operation ist.

Das Hinzufügen von zufälligem Salz zu Passwörtern, bevor sie gehasht werden, verhindert, dass dieser Angriff funktioniert, da der Hash nicht nur basierend auf dem Passwort, sondern auf dem Passwort kombiniert mit dem Salz berechnet wird.

Im Gegensatz zum Passwort muss das Salz nicht geheim gehalten werden: Es kann zusammen mit dem gesalzenen und gehashten Passwort in der Datenbank des Servers gespeichert werden.
