---
title: Authentifizierung
slug: Web/Security/Authentication
l10n:
  sourceCommit: 64e7d62e466859d471791367050ab2cc40d36506
---

Die Authentifizierung ist der Prozess der Überprüfung, dass eine Entität – wie zum Beispiel ein Benutzer einer Website – tatsächlich die Person ist, die sie vorgibt zu sein. Sie werden sich höchstwahrscheinlich mit der Authentifizierung beschäftigen müssen, wenn Sie möchten, dass Benutzer sich auf Ihrer Website anmelden.

Wenn sich Benutzer auf Ihrer Website einloggen können, gibt es normalerweise Dinge, die eingeloggte Benutzer tun können, oder Daten, auf die sie zugreifen können, die Sie nicht allgemein verfügbar machen möchten. Zum Beispiel könnten eingeloggte Benutzer in der Lage sein:

- Einen Dienst zu nutzen, für den sie bezahlt haben
- Geld auszugeben
- Auf private persönliche oder unternehmensinterne Informationen zuzugreifen
- Sozial mit anderen in der mit dem Konto verbundenen Persona zu interagieren

All diese Fähigkeiten und mehr machen den Zugriff auf Benutzerkonten zu einem wichtigen Ziel für Angreifer. Wenn ein Angreifer in der Lage ist, sich auf Ihrer Website anzumelden, indem er vorgibt, ein legitimer Benutzer zu sein, könnte der Angreifer beispielsweise auf die privaten Daten des Benutzers, finanzielle Zugangsdaten oder vertrauliche Unternehmensgeheimnisse zugreifen und diese ausnutzen. Sie könnten auch den Benutzer auf Ihrer Website imitieren, was zu Rufschäden und potenziell finanziellen Schäden führen könnte.

In diesem Satz von Leitfäden werden wir uns die wichtigsten Techniken zur Authentifizierung von Benutzern im Web ansehen und gute Praktiken für deren Anwendung präsentieren.

## Authentifizierungsmethoden

In diesem Satz von Leitfäden beschreiben wir die folgenden Authentifizierungssysteme. Jedes System kann für sich allein eingesetzt oder mit anderen kombiniert werden, entweder um den Benutzern eine Wahl zu geben, welches sie verwenden möchten, oder um ein {{Glossary("multi-factor_authentication", "Multi-Faktor-Authentifizierungssystem")}} zu implementieren.

- [Passwörter](/de/docs/Web/Security/Authentication/Passwords)
  - : Ein Passwort ist ein relativ langlebiges Geheimnis, das vom Benutzer bei der Anmeldung auf der Website präsentiert wird. Die Website vergleicht das Passwort mit einer sicher gespeicherten Transformation davon und loggt den Benutzer ein, wenn sie übereinstimmen. Passwörter haben viele bekannte Sicherheitslücken, und in diesem Artikel werden wir die besten Praktiken zur Minimierung dieser erläutern.
- [Einmalpasswörter (OTP)](/de/docs/Web/Security/Authentication/OTP)
  - : Ein Einmalpasswort ist ein generierter Code, der spezifisch für einen einzelnen Anmeldeversuch ist. Die Website sendet entweder den Code in einem separaten Kanal, wie einer E-Mail, an den Benutzer, oder das Gerät des Benutzers generiert den Code unabhängig. Der Benutzer gibt dann den Code auf der Website ein, um sich anzumelden.
- [Verbundene Identität](/de/docs/Web/Security/Authentication/Federated_identity)
  - : In den meisten Authentifizierungssystemen gibt es zwei Parteien: den Benutzer und die Website, bei der sie sich anmelden möchten. In einem föderierten System gibt es eine dritte Partei, die als _Identitätsanbieter_ bezeichnet wird. Wenn der Benutzer sich auf der Website anmelden möchte, bittet die Website den Identitätsanbieter, den Benutzer zu identifizieren, und wenn die Identifizierung erfolgreich ist, wird der Benutzer angemeldet.
- [Passkeys](/de/docs/Web/Security/Authentication/Passkeys)
  - : Passkeys ermöglichen es Websites, Benutzer zu authentifizieren, ohne dass der Benutzer irgendwelche Passwörter oder andere geheime Codes direkt auf der Seite eingeben muss.

    In einem System, das Passkeys verwendet, speichert das Gerät des Benutzers ein {{Glossary("Public-key_cryptography", "kryptografisches Schlüsselpaar")}}, das die Registrierung des Benutzers auf einer bestimmten Seite darstellt. Wenn der Benutzer versucht, sich auf der Seite einzuloggen, sendet die Seite dem Gerät eine Herausforderung. Das Gerät {{Glossary("digital_signature", "signiert")}} die Herausforderung mit dem privaten Schlüssel und sendet das Ergebnis an die Website, die die Signatur überprüfen und den Benutzer einloggen kann.

    Passkeys werden mittels der [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) implementiert.

## Sitzungsverwaltung

Nachdem eine Website einen Benutzer authentifiziert hat, möchte die Website in der Regel diesen Benutzer eingeloggt halten, ohne dass eine erneute Authentifizierung erforderlich ist, entweder für eine begrenzte Zeit oder sogar unbegrenzt, bis der Benutzer sich abmeldet. Websites erreichen dies typischerweise durch das Setzen eines Cookies, das einen geheimen Sitzungsbezeichner enthält, oder durch die Verwendung eines {{Glossary("digital_signature", "kryptografisch signierten")}} Objekts wie eines {{glossary("JWT", JSON Web Token(JWT)"")}}.

In unserem [Leitfaden zur Sitzungsverwaltung](/de/docs/Web/Security/Authentication/Session_management) skizzieren wir die besten Praktiken für die Sitzungsverwaltung.
