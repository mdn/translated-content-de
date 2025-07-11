---
title: Verschlüsselung
slug: Glossary/Encryption
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

In der {{Glossary("cryptography", "Kryptographie")}} ist **Verschlüsselung** die Umwandlung von {{Glossary("plaintext", "Klartext")}} in einen kodierten Text oder {{Glossary("ciphertext", "Chiffriertext")}}. Ein Chiffriertext soll für nicht autorisierte Leser unlesbar sein.

Verschlüsselung ist eine kryptografische Primitive: Sie transformiert eine Klartextnachricht in einen Chiffriertext mithilfe eines kryptografischen Algorithmus, der als {{Glossary("cipher", "Chiffre")}} bezeichnet wird. Bei modernen Chiffren wird die Verschlüsselung unter Verwendung eines spezifischen Algorithmus und eines Geheimnisses, dem sogenannten {{Glossary("key", "Schlüssel")}}, durchgeführt. Da der Algorithmus oft öffentlich ist, muss der Schlüssel geheim bleiben, damit die Verschlüsselung sicher bleibt.

![Wie Verschlüsselung funktioniert.](encryption.png)

Ohne Kenntnis des Geheimnisses ist der umgekehrte Vorgang, die {{Glossary("decryption", "Entschlüsselung")}}, mathematisch schwer durchzuführen. Wie schwer das ist, hängt von der Sicherheit des gewählten kryptografischen Algorithmus ab und entwickelt sich mit dem Fortschritt der {{Glossary("cryptanalysis", "Kryptanalyse")}} weiter.
