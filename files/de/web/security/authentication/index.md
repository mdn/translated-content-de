---
title: Authentifizierung
slug: Web/Security/Authentication
l10n:
  sourceCommit: a516a9818e8cef06c626d436ee1d73fc6d87ec51
---

Die Authentifizierung ist der Prozess der Überprüfung, dass eine Entität — wie beispielsweise ein Benutzer einer Website — tatsächlich die Person ist, die sie vorgibt zu sein. Sie müssen sich wahrscheinlich mit der Authentifizierung auseinandersetzen, wenn Sie möchten, dass Benutzer sich auf Ihrer Website anmelden.

Wenn sich Benutzer auf Ihrer Website anmelden können, gibt es normalerweise Dinge, die angemeldete Benutzer tun können oder auf Daten zugreifen können, die Sie nicht allgemein verfügbar machen möchten. Beispielsweise könnten angemeldete Benutzer in der Lage sein:

- Einen Dienst zu nutzen, für den sie bezahlt haben
- Geld ausgeben
- Auf private persönliche oder Unternehmensinformationen zugreifen
- Sozial mit anderen in der mit dem Konto verknüpften Identität interagieren

All diese Fähigkeiten und mehr machen den Zugriff auf Benutzerkonten zu einem wichtigen Ziel für Angreifer. Wenn ein Angreifer in der Lage ist, sich auf Ihrer Seite anzumelden, indem er vorgibt, ein legitimer Benutzer zu sein, könnte er beispielsweise auf die privaten Daten des Benutzers, dessen Finanzdaten oder vertrauliche Unternehmensgeheimnisse zugreifen und diese ausnutzen. Sie könnten auch den Benutzer auf Ihrer Seite imitieren, was zu Rufschädigung und potenziellen finanziellen Schäden führen könnte.

In diesem Satz von Leitfäden werden wir die wichtigsten Techniken zur Authentifizierung von Benutzern im Web und gute Praktiken dafür untersuchen.

## Authentifizierungsmethoden

In diesem Satz von Leitfäden beschreiben wir die folgenden Authentifizierungssysteme. Jedes System kann eigenständig implementiert werden oder in Kombination mit anderen, entweder um Benutzern die Auswahl zu geben, welche sie verwenden möchten, oder um ein {{Glossary("multi-factor_authentication", "Multi-Faktor-Authentifizierungssystem")}} zu implementieren.

- [Passwörter](/de/docs/Web/Security/Authentication/Passwords)
  - : Ein Passwort ist ein relativ dauerhaftes Geheimnis, das der Benutzer der Website bei der Anmeldung präsentiert. Die Website vergleicht das Passwort mit einer sicher gespeicherten Transformation davon und meldet den Benutzer an, wenn sie übereinstimmen. Passwörter haben viele bekannte Sicherheitsmängel, und in diesem Artikel erklären wir die besten Praktiken, um diese zu minimieren.
- [Einmalpasswörter (OTP)](/de/docs/Web/Security/Authentication/OTP)
  - : Ein Einmalpasswort ist ein generierter Code, der spezifisch für einen einzelnen Anmeldeversuch ist. Die Website sendet entweder den Code über einen separaten Kanal, wie eine E-Mail, an den Benutzer, oder das Gerät des Benutzers generiert den Code unabhängig. Der Benutzer gibt dann den Code auf der Seite ein, um sich anzumelden.
- [Verbundene Identität](/de/docs/Web/Security/Authentication/Federated_identity)
  - : In den meisten Authentifizierungssystemen gibt es zwei Parteien: den Benutzer und die Website, bei der er sich anzumelden versucht. In einem verbundenen System gibt es eine dritte Partei, die als _Anbieter der Identität_ bezeichnet wird. Wenn der Benutzer sich auf der Website anmelden möchte, bittet die Website den Anbieter der Identität, den Benutzer zu identifizieren, und wenn die Identifizierung erfolgreich ist, wird der Benutzer angemeldet.
- [Passkeys](/de/docs/Web/Security/Authentication/Passkeys)
  - : Passkeys ermöglichen es Websites, Benutzer zu authentifizieren, ohne dass der Benutzer Passwörter oder andere geheime Codes auf der Seite selbst eingeben muss.

    In einem System, das Passkeys verwendet, speichert das Gerät des Benutzers ein {{Glossary("Public-key_cryptography", "kryptographisches Schlüsselpaar")}}, das die Registrierung des Benutzers auf einer bestimmten Seite darstellt. Wenn der Benutzer versucht, sich auf der Seite anzumelden, sendet die Seite dem Gerät eine Herausforderung. Das Gerät {{Glossary("digital_signature", "unterschreibt")}} die Herausforderung mit dem privaten Schlüssel und sendet das Ergebnis an die Website, die die Signatur verifizieren und den Benutzer anmelden kann.

    Passkeys werden mit der [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) implementiert.

## Sitzungsverwaltung

Nachdem eine Website einen Benutzer authentifiziert hat, möchte sie normalerweise diesen Benutzer angemeldet halten, ohne dass eine erneute Authentifizierung erforderlich ist, entweder für eine bestimmte Zeit oder sogar unbegrenzt, bis der Benutzer sich abmeldet. Websites erreichen dies typischerweise, indem sie ein Cookie setzen, das eine geheime Sitzungskennung enthält, oder ein {{Glossary("digital_signature", "kryptographisch signiertes")}} Objekt wie ein JSON Web Token (JWT) verwenden.

In unserem [Leitfaden zur Sitzungsverwaltung](/de/docs/Web/Security/Authentication/Session_management) skizzieren wir die besten Praktiken für die Sitzungsverwaltung.
