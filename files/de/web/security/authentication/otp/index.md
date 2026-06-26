---
title: Einmal-Passwörter (OTP)
slug: Web/Security/Authentication/OTP
l10n:
  sourceCommit: 87ca9db1ebe56eb20c1f20b91fca43955d8f0e26
---

Ein _Einmal-Passwort_ (OTP), auch bekannt als _Einmal-PIN_ oder _Einmal-Autorisierungscode_ (OTAC), ist ein generierter Code, der spezifisch für einen einzigen Anmeldeversuch ist. Die Website sendet entweder den Code über einen separaten Kanal wie eine E-Mail an den Nutzer oder das Gerät des Nutzers generiert den Code unabhängig. Der Nutzer gibt dann den Code auf der Website ein, um sich anzumelden.

## Überblick

Authentifizierungsabläufe mit Einmal-Passwörtern basieren auf etwas, das der Nutzer besitzt (ein Telefon, eine E-Mail-Adresse, ein Geheimnis, das in einer Authentifizierungs-App gespeichert ist), anstatt auf etwas, das sie wissen (ein Passwort) oder etwas, das sie sind (biometrische Informationen wie ein Fingerabdruck).

Einmal-Passwörter können entweder zusätzlich zu herkömmlichen Passwörtern verwendet werden oder sie ersetzen. Oft werden sie verwendet, um die Absichten des Nutzers zu bestätigen, zum Beispiel bei einer Zahlung.

Viele OTPs sind 6-stellig mit einer 1-zu-einer-Million Chance, korrekt erraten zu werden. Dies ist wesentlich besser als 4-stellige Codes mit nur 10.000 möglichen Kombinationen. Der Sicherheitsmechanismus, auf den sich OTPs verlassen, ist die zeitliche Komponente: OTPs sind normalerweise nur einmal für einen definierten Zeitraum gültig und werden nach der Nutzung ungültig. Deshalb haben OTPs eine kurze Ablaufzeit (idealerweise ≤5 Minuten; 30–120 Sekunden für stärkeren Schutz).

Dieser Artikel diskutiert drei gängige Implementierungen für Einmal-Passwörter: E-Mail, SMS und zeitbasierte Einmal-Passwörter (TOTP). TOTP wird in diesem Vergleich als der sicherste Übertragungskanal betrachtet.

## E-Mail OTP

Bei OTPs auf E-Mail-Basis, während der Registrierung:

- Der Nutzer gibt seine E-Mail-Adresse auf der Website an.
- Die Website verifiziert, dass er Zugang zu dieser E-Mail-Adresse hat.

Wenn der Nutzer sich anmelden möchte:

- Die Website generiert den Einmal-Code und sendet ihn per E-Mail an den Nutzer.
- Der Nutzer gibt den Code auf der Website ein.
- Die Website meldet den Nutzer an.

Es gibt zwei gängige Methoden, den Code zu übermitteln:

1. Die Website sendet einen personalisierten Einmal-Link an die E-Mail-Adresse des Nutzers. Wenn der Nutzer auf den Link klickt, authentifiziert die Website den Nutzer. Der Link ist nur für wenige Minuten gültig und läuft sofort nach dem Klick des Nutzers ab. Diese Option kann für den Nutzer sehr praktisch sein. Es erfordert jedoch, dass der Nutzer den Vorgang auf demselben Gerät und im selben Browser abschließt, was ein Problem sein kann, wenn man sich aus einem In-App-Browser oder von einem anderen Gerät aus anmeldet. Die Aufforderung an Nutzer, Links in E-Mails zu klicken, macht sie auch anfälliger für [Phishing](/de/docs/Web/Security/Attacks/Phishing)-Angriffe.

2. Die Website sendet einen personalisierten Einmal-Code an die E-Mail-Adresse des Nutzers. Der Nutzer muss dann den Code auf seinem gewünschten Gerät und in seinem gewünschten Browser auf der Website eingeben. Dieser Prozess kann langsamer und weniger bequem für den Nutzer sein, bietet jedoch mehr Flexibilität, wo man sich einloggen kann und wird als sicherer angesehen, als Links in E-Mails zu verwenden.

Für eine gute Benutzererfahrung mit allen E-Mail-basierten OTP-Methoden ist es wichtig, dass Nutzer die OTP-E-Mails angemessen schnell erhalten.

## SMS OTP

Bei SMS OTP gibt der Nutzer während der Registrierung seine Handynummer an, und bei der Anmeldung sendet die Website den Einmal-Code als SMS an das Telefon.

Eine Schwäche sowohl der E-Mail- als auch der SMS-Methoden ist, dass ein Angreifer die Nachricht abfangen könnte, die den Code enthält. Dennoch wird SMS als verwundbarer angesehen:

- Auch wenn SMS-Nachrichten mit [A5/X-Stream-Verschlüsselungen](https://de.wikipedia.org/wiki/A5/1) verschlüsselt werden können, wurden verschiedene Schwächen in der Verschlüsselung identifiziert, und Nachrichten können innerhalb von Minuten oder Sekunden entschlüsselt werden.
- Es gibt bekannte Schwächen in SMS-Routing-Protokollen ([SS7](https://de.wikipedia.org/wiki/Sigtran)), die es Angreifern ermöglichen, Textnachrichten an sich umzuleiten.
- Bei [SIM-Swap-Betrügereien](https://de.wikipedia.org/wiki/SIM-Swap-Betrug) missbraucht der Angreifer die Mobilnummerportabilität (normalerweise verwendet, um Dienste zu wechseln oder wenn ein Telefon verloren geht oder gestohlen wird), um sich als Opfer auszugeben.
- Anbieter können Telefonnummern nach Schließung eines Kontos an neue Nutzer vergeben.

Außerdem könnten Nutzer, wenn sie reisen, eine andere SIM-Karte oder eine eSIM verwenden und möglicherweise ihre übliche SIM-Karte oder SMS-Dienste deaktiviert haben, um Kosten zu sparen, in diesem Fall erhalten sie keine SMS-Einmal-Codes.

Deshalb sollten Sie SMS-OTPs nicht eigenständig verwenden, um neue Sitzungen zu etablieren oder für die allgemeine Authentifizierung. Stattdessen, wenn überhaupt, nur als zweiten Faktor oder zur Bestätigung von Absichten (z. B. Zahlungen) verwenden.

### Autovervollständigung von SMS-Codes

Um es Nutzern zu erleichtern, SMS-Codes in eine Website einzugeben, und um die Wahrscheinlichkeit von Phishing-Angriffen zu reduzieren, ermöglicht der [Standard für ursprungsgebundene Einmal-Codes, die über SMS bereitgestellt werden](https://wicg.github.io/sms-one-time-codes/), dass Websites die Autovervollständigung für Einmal-Codes unterstützen.

Um dies zu ermöglichen, müssen Sie die SMS-Nachricht wie folgt formatieren:

```plain
Your verification code is 123456.

@www.example.com #123456
```

Geben Sie dann im Anmeldeformular Ihrer Website ein {{HTMLElement("input")}}-Element mit dem `autocomplete=one-time-code`-Attributwert an.

```html
<form action="/verify-otp" method="POST">
  <input
    required
    type="text"
    autocomplete="one-time-code"
    inputmode="numeric"
    maxlength="6"
    pattern="\d{6}" />
  <input type="submit" />
</form>
```

Der Browser extrahiert automatisch den Code aus der SMS und füllt das `<input>`-Element mit dem Code aus, wenn der im Nachricht angegebenen Ursprung mit dem Ursprung des Anmeldeformulars übereinstimmt.

### WebOTP API

Die [WebOTP API](/de/docs/Web/API/WebOTP_API) gibt Websites programmgesteuerten Zugriff auf über SMS bereitgestellte Einmal-Codes. Allerdings hat sie keine gute browserübergreifende Unterstützung und es ist nicht notwendig, diese API zu verwenden, es sei denn, Sie benötigen einen programmgesteuerten Zugriff auf den Code. Die Verwendung des standardisierten Formats und `autocomplete=one-time-code` sollte ausreichen, damit die Autovervollständigung browserübergreifend funktioniert.

## TOTP

Bei zeitbasierten Einmal-Passwörtern sendet die Website den Anmeldecode nicht an den Nutzer. Stattdessen können die Website und der Nutzer den gleichen Code unabhängig voneinander generieren, basierend auf der aktuellen Zeit und einem gemeinsamen Geheimnis. Um den Code zu generieren, muss der Nutzer eine App auf seinem Gerät installieren: Dies wird als _Authenticator App_ bezeichnet.

Während der Registrierung:

1. Der Nutzer installiert eine Authentifizierungs-App, falls er noch keine hat.
2. Die Website:
   - Generiert das gemeinsame Geheimnis.
   - Speichert das Geheimnis sicher und verknüpft es mit dem Benutzerkonto.
   - Betttet das Geheimnis und einige zugehörige Metadaten in eine [`otpauth`](https://www.rfc-editor.org/info/rfc6238/)-URI ein.
   - Sie kodiert die URI als QR-Code und lädt den Nutzer ein, diesen zu scannen.

3. Die Authentifizierungs-App auf dem Gerät des Nutzers decodiert die URI aus dem QR-Code und analysiert die URI, speichert das Geheimnis und die zugehörigen Metadaten.

Bei der Anmeldung gibt der Nutzer den aktuellen Code ein, den die Authentifizierungs-App basierend auf dem Geheimnis und der aktuellen Zeit berechnet. Die Website kann die gleiche Berechnung durchführen, und wenn die Werte übereinstimmen, kann der Nutzer angemeldet werden.

### TOTP-Algorithmus

Der Algorithmus für zeitbasierte Einmal-Passwörter (TOTP) ist in {{rfc("6238")}} spezifiziert. Er ist eine Erweiterung des HMAC-basierten Einmal-Passwort-Algorithmus (HOTP), der in {{rfc("4226")}} spezifiziert ist.

Der Algorithmus erstellt Einmal-Codes, die 6-stellig sind und nur eine begrenzte Zeit gültig sind (üblicherweise 30 Sekunden). Das bedeutet, dass TOTP im Gegensatz zu den anderen beschriebenen OTP-Systemen zeitbasierte Gültigkeit und automatische Invalidierung standardmäßig implementiert.

Der geheime Schlüssel ist ein zufälliger Wert, der mindestens 160 Bit lang sein sollte.

Sie sollten eine gut angesehene Drittanbieter-Bibliothek verwenden, um TOTP zu implementieren, wie [pyotp](https://pyauth.github.io/pyotp/) für Python oder [otpauth](https://www.npmjs.com/package/otpauth) für Node.

### Das `otpauth`-URI-Format

Das `otpauth`-URI-Format ist in diesem [IETF-Entwurf](https://www.ietf.org/archive/id/draft-linuxgemini-otpauth-uri-00.html) definiert.

Für TOTP ist die URI wie folgt formatiert:

```plain
otpauth://totp/LABEL?secret=MQCHJLS6FJXT2BGQJ6QMG3WCAVUC2HJZ&issuer=My_Website
```

Die `LABEL`-Komponente identifiziert den Benutzer: zum Beispiel könnte es der Benutzername sein.

Die URI enthält einige Abfrageparameter, von denen die wichtigsten sind:

- `secret`
  - : Das gemeinsam genutzte Geheimnis, kodiert in [Base32](https://de.wikipedia.org/wiki/Base32).
- `issuer`
  - : Der Name des Anbieters oder Dienstes, mit dem dieses Konto verknüpft ist. Technisch optional, aber stark empfohlen.

### Authentifizierungs-Apps

Eine große Anzahl von Authentifizierungs-Apps, sowohl proprietäre als auch Open-Source, unterstützen TOTP. Beispielsweise: [Ente Auth](https://ente.com/auth/), [2FAS](https://2fas.com) und [Microsoft Authenticator](https://www.microsoft.com/en-US/security/mobile-authenticator-app).

### Geheimhaltung des Geheimnisses

Bei TOTP muss der geheime Schlüssel sowohl auf dem Server als auch auf dem Client sicher gespeichert werden.

Für den Server sind die Überlegungen ähnlich wie für die [Passwortspeicherung](/de/docs/Web/Security/Authentication/Passwords#storing_passwords): Der Server muss TOTP-Geheimnisse so speichern, dass der Angreifer keinen Zugriff darauf hat, selbst wenn er Zugang zur Datenbank des Servers erhält.

Für den Client sollte die Authentifizierungs-App einen gewissen Grad an Schutz für den geheimen Schlüssel bieten.

## Stärken und Schwächen

Im Vergleich zu [Passwörtern](/de/docs/Web/Security/Authentication/Passwords) liegt die größte Stärke von OTP darin, dass der Nutzer nicht daran beteiligt ist, Geheimnisse zu erstellen oder zu merken, sodass OTP nicht anfällig für [Rateversuche](/de/docs/Web/Security/Authentication/Passwords#guessing) oder [Credential Stuffing](/de/docs/Web/Security/Authentication/Passwords#credential_stuffing)-Angriffe ist.

### Schwächen

- SMS- und E-Mail-basierte OTP haben das Risiko, dass ein Angreifer die vom Server gesendeten OTP-Codes abfangen könnte, und SMS ist in dieser Hinsicht viel schwächer als E-Mail.

- TOTP ist nicht anfällig für Abfangungen, bringt jedoch das Risiko mit sich, dass ein Angreifer Zugang zum gemeinsamen Geheimnis erhält.

- Alle Formen von OTP sind anfällig für [Phishing-Angriffe](/de/docs/Web/Security/Attacks/Phishing#multi-factor_authentication).

Unabhängig von der Sicherheit hat OTP einige Benutzerfreundlichkeitsprobleme:

- SMS- und E-Mail-basierte OTP können umständlich zu verwenden sein, insbesondere wenn es erhebliche Verzögerungen zwischen dem Server, der den Code sendet, und dem Nutzer, der ihn erhält, gibt.
- Bei TOTP ist die Notwendigkeit, eine Authentifizierungs-App zu installieren, eine erhebliche Hürde bei der Anmeldung, aber natürlich, wenn der Nutzer bereits die App für eine andere Website installiert hat, muss er dies nicht erneut tun, wenn er sich auf Ihrer Website anmeldet.

## OTP-Empfehlungen

OTP, und insbesondere TOTP, kann als [zusätzlicher Authentifizierungsfaktor](/de/docs/Glossary/Multi-factor_authentication) und zur Bestätigung von Nutzerabsichten nützlich sein, beispielsweise bei der Durchführung einer Zahlung. Für allgemeine Authentifizierungszwecke ist es besser, [Passkeys](/de/docs/Web/Security/Authentication/Passkeys) zu verwenden, die widerstandsfähiger gegen Phishing-Angriffe sind.

Wenn Sie OTP implementieren, beachten Sie die folgenden Empfehlungen:

- Bevorzugen Sie TOTP gegenüber E-Mail-basierten oder SMS-basierten OTP, und vermeiden Sie insbesondere SMS-basierte OTP.
- Wenn Sie TOTP verwenden:
  - Verwenden Sie eine renommierte Bibliothek zur Generierung von Geheimnissen und OTP-Codes.
  - Speichern Sie das Geheimnis sicher auf dem Server.
