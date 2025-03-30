---
title: Salt
slug: Glossary/Salt
l10n:
  sourceCommit: 7159a4c0a2f1e886c09268c41c103c4ac7100d63
---

{{GlossarySidebar}}

In der Kryptografie ist **Salt** zufällige Daten, die einem Passwort hinzugefügt werden, bevor es {{Glossary("hash_function", "gehasht")}} wird. Dadurch wird es für einen Angreifer unmöglich, Passwörter aus ihren Hashes abzuleiten, indem vorab berechnete Tabellen mit Passwörtern und den entsprechenden Hashes verwendet werden.

Passwörter sollten nie in ihrer Klartextform gespeichert werden, aufgrund des Risikos, dass ein Angreifer in die Datenbank einbricht, in der sie gespeichert sind. Normalerweise wird das Passwort gehasht und der resultierende Hash gespeichert. Wenn die Hash-Funktion kryptografisch sicher ist, dann ist es selbst dann unpraktisch für einen Angreifer, der Zugriff auf die gespeicherten Hashes erlangt hat, die Funktion zu entschlüsseln.

Um ein Passwort aus einem Hash abzuleiten, können Angreifer das Passwort entsprechend eines Hashs in einer vorab berechneten Tabelle (auch bekannt als [Regenbogentabelle](https://en.wikipedia.org/wiki/Rainbow_table)) nachschlagen, die mögliche Passwörter ihren Hashes zuordnet:

| Passwort | Hash        |
| -------- | ----------- |
| pa55w0rd | 56965E2A... |
| abcdef   | BEF57EC7... |
| letmein  | 1C8BFE8F... |

Obwohl diese Tabellen sehr groß sein können, können solche Angriffe effektiv sein, da das Nachschlagen in der Tabelle ein schneller Prozess ist.

Das Hinzufügen von zufälligem Salt zu Passwörtern, bevor sie gehasht werden, verhindert, dass dieser Angriff funktioniert, da der Hash nicht nur auf dem Passwort basiert, sondern auf der Kombination aus Passwort und Salt.

Im Gegensatz zum Passwort muss das Salt nicht geheim gehalten werden: Es kann zusammen mit dem gesalzenen und gehashten Passwort in der Datenbank des Servers gespeichert werden.
