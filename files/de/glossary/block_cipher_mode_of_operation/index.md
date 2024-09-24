---
title: Blockverschlüsselungsmodus
slug: Glossary/Block_cipher_mode_of_operation
l10n:
  sourceCommit: 7a551aaa034fbada3eb99e6fc924a0313b78307f
---

{{GlossarySidebar}}

Ein **Blockverschlüsselungsmodus**, im Kontext meist einfach als "Modus" bezeichnet, legt fest, wie ein Blockverschlüsselungsalgorithmus genutzt werden sollte, um Nachrichten zu verschlüsseln oder zu entschlüsseln, die länger als die Blockgröße sind.

Die meisten derzeit verwendeten symmetrischen Verschlüsselungsverfahren sind Blockverschlüsselungen: Das bedeutet, dass sie Daten blockweise verschlüsseln. Die Größe jedes Blocks ist festgelegt und wird durch den Algorithmus bestimmt: Zum Beispiel verwendet AES 16-Byte-Blöcke. Blockverschlüsselungen werden immer mit einem _Modus_ verwendet, der festlegt, wie Nachrichten sicher verschlüsselt werden können, die länger als die Blockgröße sind. Zum Beispiel ist AES eine Verschlüsselung, während CTR, CBC und GCM alle Modi sind. Die Verwendung eines unangemessenen Modus oder die falsche Anwendung eines Modus kann die Sicherheit, die durch die zugrunde liegende Verschlüsselung geboten wird, vollständig untergraben.
