---
title: Verschlüsselung
slug: Glossary/Encryption
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

In der {{glossary("Kryptographie")}} bezeichnet **Verschlüsselung** die Umwandlung von {{glossary("Klartext")}} in einen kodierten Text oder {{glossary("Chiffretext")}}. Ein Chiffretext soll für unbefugte Leser unlesbar sein.

Die Verschlüsselung ist ein kryptographisches Grundelement: Sie transformiert eine Klartextnachricht in einen Chiffretext mittels eines kryptographischen Algorithmus, der als {{glossary("Chiffre")}} bezeichnet wird. Bei modernen Chiffren wird die Verschlüsselung mit einem spezifischen Algorithmus und einem Geheimnis, dem sogenannten {{glossary("Schlüssel")}}, durchgeführt. Da der Algorithmus oft öffentlich ist, muss der Schlüssel geheim bleiben, damit die Verschlüsselung sicher bleibt.

![Wie Verschlüsselung funktioniert.](encryption.png)

Ohne Kenntnis des Geheimnisses ist der umgekehrte Vorgang, die {{glossary("Entschlüsselung")}}, mathematisch schwer durchzuführen. Wie schwer dies ist, hängt von der Sicherheit des gewählten kryptographischen Algorithmus ab und entwickelt sich mit dem Fortschritt der {{glossary("Kryptanalyse")}}.
