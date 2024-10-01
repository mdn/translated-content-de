---
title: Encryption
slug: Glossary/Encryption
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

In der {{Glossary("cryptography", "Kryptographie")}} ist **Verschlüsselung** die Umwandlung von {{Glossary("plaintext", "Klartext")}} in einen kodierten Text oder {{Glossary("ciphertext", "Chiffretext")}}. Ein Chiffretext soll für nicht autorisierte Leser unlesbar sein.

Die Verschlüsselung ist eine kryptographische Primitive: Sie transformiert eine Klartextnachricht in einen Chiffretext unter Verwendung eines kryptographischen Algorithmus, der als {{Glossary("cipher", "Chiffre")}} bezeichnet wird. Die Verschlüsselung in modernen Chiffren erfolgt mit einem spezifischen Algorithmus und einem Geheimnis, dem sogenannten {{Glossary("key", "Schlüssel")}}. Da der Algorithmus oft öffentlich ist, muss der Schlüssel geheim bleiben, damit die Verschlüsselung sicher bleibt.

![Wie Verschlüsselung funktioniert.](encryption.png)

Ohne Kenntnis des Geheimnisses ist die Umkehrung, also die {{Glossary("decryption", "Entschlüsselung")}}, mathematisch schwer durchzuführen. Wie schwer das ist, hängt von der Sicherheit des gewählten kryptografischen Algorithmus ab und entwickelt sich mit den Fortschritten der {{Glossary("cryptanalysis", "Kryptoanalyse")}} weiter.
