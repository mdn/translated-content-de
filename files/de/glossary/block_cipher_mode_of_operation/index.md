---
title: Blockchiffre-Betriebsmodus
slug: Glossary/Block_cipher_mode_of_operation
l10n:
  sourceCommit: 7a551aaa034fbada3eb99e6fc924a0313b78307f
---

{{GlossarySidebar}}

Ein **Blockchiffre-Betriebsmodus**, im Kontext oft einfach als "Modus" bezeichnet, legt fest, wie eine Blockchiffre verwendet werden soll, um Nachrichten zu verschlüsseln oder zu entschlüsseln, die länger sind als die Blockgröße.

Die meisten derzeit verwendeten symmetrischen Schlüsselalgorithmen sind Blockchiffren: Das bedeutet, dass sie Daten blockweise verschlüsseln. Die Größe jedes Blocks ist fest und wird durch den Algorithmus bestimmt: Zum Beispiel verwendet AES 16-Byte-Blöcke. Blockchiffren werden immer mit einem _Modus_ verwendet, der angibt, wie Nachrichten, die länger als die Blockgröße sind, sicher verschlüsselt werden. Zum Beispiel ist AES eine Chiffre, während CTR, CBC und GCM alle Modi sind. Die Verwendung eines ungeeigneten Modus oder die inkorrekte Verwendung eines Modus kann die Sicherheit der zugrunde liegenden Chiffre vollständig untergraben.
