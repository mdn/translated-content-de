---
title: Blockchiffre-Betriebsmodus
slug: Glossary/Block_cipher_mode_of_operation
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Ein **Blockchiffre-Betriebsmodus**, im Kontext meist einfach als "Modus" bezeichnet, legt fest, wie eine Blockchiffre verwendet werden soll, um Nachrichten zu verschlüsseln oder zu entschlüsseln, die länger als die Blockgröße sind.

Die meisten derzeit verwendeten symmetrischen Verschlüsselungsalgorithmen sind Blockchiffren: Das bedeutet, dass sie Daten blockweise verschlüsseln. Die Größe jedes Blocks ist festgelegt und wird durch den Algorithmus bestimmt: Ein Beispiel dafür ist AES, das 16-Byte-Blöcke verwendet. Blockchiffren werden immer mit einem _Modus_ verwendet, der festlegt, wie Nachrichten sicher verschlüsselt werden sollen, die länger als die Blockgröße sind. Zum Beispiel ist AES eine Chiffre, während CTR, CBC und GCM alle Moden sind. Die Verwendung eines ungeeigneten Modus oder die fehlerhafte Verwendung eines Modus kann die Sicherheit der zugrunde liegenden Chiffre vollständig untergraben.
