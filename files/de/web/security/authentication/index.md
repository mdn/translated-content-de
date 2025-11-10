---
title: Authentifizierung
slug: Web/Security/Authentication
l10n:
  sourceCommit: 1188cdeb09d5160c3d75d53712a9e64f18b44f60
---

Die Authentifizierung ist der Prozess der Überprüfung, ob eine Entität – wie ein Benutzer einer Website – tatsächlich die Person ist, die sie vorgibt zu sein. Sie müssen sich wahrscheinlich mit Authentifizierung auseinandersetzen, wenn Sie möchten, dass Benutzer sich auf Ihrer Website anmelden.

Wenn Benutzer sich auf Ihrer Website anmelden können, gibt es typischerweise Dinge, die angemeldete Benutzer tun können, oder Daten, auf die sie zugreifen können, die Sie nicht allgemein verfügbar machen möchten. Beispielsweise könnten angemeldete Benutzer in der Lage sein:

- Einen bezahlten Dienst zu nutzen
- Geld auszugeben
- Auf private persönliche oder Unternehmensinformationen zuzugreifen
- Sozial mit anderen in der mit dem Konto verknüpften Persona zu interagieren

All diese Fähigkeiten und mehr machen den Zugriff auf Benutzerkonten zu einem wichtigen Ziel für Angreifer. Wenn ein Angreifer in der Lage ist, sich auf Ihrer Website anzumelden, indem er vorgibt, ein legitimer Benutzer zu sein, könnte der Angreifer beispielsweise auf die privaten Daten, finanziellen Anmeldedaten oder vertraulichen Unternehmensgeheimnisse des Benutzers zugreifen und diese ausnutzen. Sie könnten auch den Benutzer auf Ihrer Website imitieren, was zu reputationsschädigendem und potenziell finanziellen Schaden führen könnte.

In diesem Satz von Leitfäden werden wir uns die wichtigsten Techniken zur Authentifizierung von Benutzern im Web ansehen und gute Praktiken hierfür erläutern.

## Authentifizierungsmethoden

In diesem Satz von Leitfäden werden wir die folgenden Authentifizierungssysteme beschreiben. Jedes System kann eigenständig implementiert werden oder mit anderen kombiniert werden, um Benutzern entweder eine Wahl darüber zu geben, welches sie verwenden möchten, oder um ein {{Glossary("multi-factor_authentication", "Multi-Faktor-Authentifizierungssystem")}} zu implementieren.

- [Passwörter](/de/docs/Web/Security/Authentication/Passwords)
  - : Ein Passwort ist ein relativ langandauerndes Geheimnis, das der Benutzer der Website präsentiert, wenn er sich anmelden muss. Die Website vergleicht das Passwort mit einer sicher gespeicherten Transformation davon und meldet den Benutzer an, wenn sie übereinstimmen. Passwörter haben viele bekannte Sicherheitsanfälligkeiten, und in diesem Artikel erklären wir die Best Practices zur Minimierung dieser Schwächen.
- [Einmalpasswörter (OTP)](/de/docs/Web/Security/Authentication/OTP)
  - : Ein Einmalpasswort ist ein von der Website generierter Code, der spezifisch für einen einzelnen Anmeldeversuch ist. Die Website sendet entweder den Code über einen separaten Kanal, wie z.B. eine E-Mail, an den Benutzer, oder das Gerät des Benutzers generiert den Code unabhängig. Der Benutzer gibt dann den Code auf der Website ein, um sich anzumelden.
- [Föderierte Identität](/de/docs/Web/Security/Authentication/Federated_identity)
  - : In den meisten Authentifizierungssystemen gibt es zwei Parteien: den Benutzer und die Website, auf die er sich einzuloggen versucht. In einem föderierten System gibt es eine dritte Partei, die als _Identitätsanbieter_ bezeichnet wird. Wenn der Benutzer sich auf der Website anmelden möchte, bittet die Website den Identitätsanbieter, den Benutzer zu identifizieren, und wenn die Identifizierung erfolgreich ist, wird der Benutzer angemeldet.
- [Passkeys](/de/docs/Web/Security/Authentication/Passkeys)
  - : Passkeys ermöglichen es Websites, Benutzer zu authentifizieren, ohne dass der Benutzer auf der Website selbst Passwörter oder andere geheime Codes eingeben muss.

    In einem System, das Passkeys verwendet, speichert das Gerät des Benutzers ein {{Glossary("Public-key_cryptography", "Kryptographisches Schlüsselpaar")}}, das die Registrierung des Benutzers auf einer bestimmten Website repräsentiert. Wenn der Benutzer versucht, sich auf der Website anzumelden, sendet die Website dem Gerät eine Herausforderung. Das Gerät {{Glossary("digital_signature", "signiert")}} die Herausforderung mit dem privaten Schlüssel und sendet das Ergebnis an die Website, die die Signatur verifizieren und den Benutzer anmelden kann.

    Passkeys werden mithilfe der [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) implementiert.

## Sitzungsverwaltung

Nachdem eine Website einen Benutzer authentifiziert hat, möchte die Website typischerweise diesen Benutzer angemeldet halten, ohne dass eine erneute Authentifizierung erforderlich ist, entweder für eine begrenzte Zeit oder sogar unbegrenzt, bis der Benutzer sich abmeldet. Websites erreichen dies typischerweise, indem sie ein Cookie setzen, das einen geheimen Sitzungsbezeichner enthält, oder indem sie ein {{Glossary("digital_signature", "kryptographisch signiertes")}} Objekt wie ein {{glossary("JWT", "JSON Web Token(JWT)"")}} verwenden.

In unserem [Leitfaden zur Sitzungsverwaltung](/de/docs/Web/Security/Authentication/Session_management) umreißen wir die Best Practices zur Sitzungsverwaltung.
