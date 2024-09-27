---
title: Block Cipher Mode of Operation
slug: Glossary/Block_cipher_mode_of_operation
l10n:
  sourceCommit: 7a551aaa034fbada3eb99e6fc924a0313b78307f
---

{{GlossarySidebar}}

Ein **Blockverschlüsselungsmodus**, im Kontext meist einfach als "Modus" bezeichnet, spezifiziert, wie ein Blockverschlüsselungsalgorithmus verwendet werden sollte, um Nachrichten zu verschlüsseln oder zu entschlüsseln, die länger als die Blockgröße sind.

Die meisten derzeit verwendeten symmetrischen Schlüsselalgorithmen sind Blockverschlüsselungen: Das bedeutet, dass sie Daten blockweise verschlüsseln. Die Größe jedes Blocks ist festgelegt und wird vom Algorithmus bestimmt: Zum Beispiel verwendet AES 16-Byte-Blöcke. Blockverschlüsselungen werden immer mit einem _Modus_ verwendet, der spezifiziert, wie Nachrichten, die länger als die Blockgröße sind, sicher verschlüsselt werden können. Zum Beispiel ist AES eine Verschlüsselung, während CTR, CBC und GCM Modi sind. Die Verwendung eines ungeeigneten Modus oder der fehlerhafte Einsatz eines Modus kann die Sicherheit, die durch die zugrunde liegende Verschlüsselung geboten wird, vollständig unterminieren.
