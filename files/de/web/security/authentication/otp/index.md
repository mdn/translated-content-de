---
title: Einmalpasswörter (OTP)
slug: Web/Security/Authentication/OTP
l10n:
  sourceCommit: 815f1a18f44059500b337719295c6eda14b6228e
---

Ein _Einmalpasswort_ (OTP), auch bekannt als _Einmal-PIN_ oder _Einmal-Autorisierungscode_ (OTAC), ist ein generierter Code, der spezifisch für einen einzigen Anmeldeversuch ist. Die Website sendet entweder den Code über einen separaten Kanal, wie eine E-Mail, an den Benutzer, oder das Gerät des Benutzers generiert den Code unabhängig. Der Benutzer gibt dann den Code auf der Website ein, um sich anzumelden.

## Übersicht

Authentifizierungsabläufe mit Einmalpasswörtern basieren auf etwas, das der Benutzer hat (ein Telefon, eine E-Mail-Adresse, ein Geheimnis in einer Authenticator-App gespeichert), und nicht auf etwas, das er weiß (ein Passwort) oder etwas, das er ist (biometrische Informationen, wie ein Fingerabdruck).

Einmalpasswörter können entweder zusätzlich zu traditionellen Passwörtern verwendet werden oder sie können diese ersetzen. Oft werden sie verwendet, um die Absichten des Benutzers zu bestätigen, beispielsweise bei einer Zahlung.

Viele OTPs sind 6-stellig mit einer 1-zu-einer-Million-Chance, korrekt zu raten. Das ist viel besser als 4 Stellen mit nur 10.000 möglichen Kombinationen. Der Sicherheitsmechanismus, auf den OTPs sich stützen, ist die zeitliche Komponente: OTPs sind normalerweise nur einmal für einen definierten Zeitraum gültig und werden nach der Nutzung ungültig. Deshalb haben OTPs eine kurze Ablaufzeit (idealerweise ≤5 Minuten; 30–120 Sekunden für stärkeren Schutz).

Dieser Artikel diskutiert drei gängige Implementierungen für Einmalpasswörter: E-Mail, SMS und zeitbasierte Einmalpasswörter (TOTP). TOTP gilt als sicherster Lieferkanal in diesem Vergleich.

## E-Mail OTP

Beim E-Mail-basierten OTP, während der Registrierung:

- Der Benutzer gibt seine E-Mail-Adresse auf der Website an.
- Die Website verifiziert, dass der Benutzer Zugang zu dieser E-Mail-Adresse hat.

Wenn der Benutzer sich anmelden möchte:

- Die Website generiert den Einmalcode und sendet ihn per E-Mail an den Benutzer.
- Der Benutzer gibt den Code auf der Website ein.
- Die Website meldet den Benutzer an.

Es gibt zwei gängige Ansätze zur Zustellung des Codes:

1. Die Website sendet einen personalisierten Einmal-Link an die E-Mail-Adresse des Benutzers. Wenn der Benutzer auf den Link klickt, authentifiziert die Website den Benutzer. Der Link ist nur für ein paar Minuten gültig und verfällt sofort, nachdem der Benutzer darauf geklickt hat. Diese Option kann für den Benutzer äußerst bequem sein. Allerdings erfordert sie, dass der Benutzer den Prozess auf demselben Gerät und im selben Browser abschließt, was ein Problem sein kann, wenn er sich in einem In-App-Browser oder einem anderen Gerät anmeldet. Benutzer zu bitten, auf Links in E-Mails zu klicken, macht sie auch anfälliger für [Phishing](/de/docs/Web/Security/Attacks/Phishing)-Angriffe.

2. Die Website sendet einen personalisierten Einmalcode an die E-Mail-Adresse des Benutzers. Der Benutzer wird dann aufgefordert, den Code auf dem gewünschten Gerät und im gewünschten Browser auf der Website einzugeben. Dieser Prozess kann für den Benutzer langsamer und weniger bequem sein, bietet jedoch größere Flexibilität bei der Anmeldung und gilt als sicherer als die Verwendung von Links in E-Mails.

Für eine gute Benutzererfahrung mit allen E-Mail-basierten OTP-Methoden ist es wichtig, dass Benutzer die OTP-E-Mails zeitnah erhalten.

## SMS OTP

Beim SMS OTP gibt der Benutzer während der Registrierung seine Handynummer an, und bei der Anmeldung sendet die Website den Einmalcode per SMS an das Telefon.

Eine Schwäche sowohl der E-Mail- als auch der SMS-Methoden ist, dass ein Angreifer die Nachricht, die den Code enthält, abfangen könnte. Allerdings gilt SMS als anfälliger:

- Obwohl SMS-Nachrichten mit [A5/X-Stream-ciphers](https://en.wikipedia.org/wiki/A5/1) verschlüsselt werden können, wurden verschiedene Schwachstellen im Cipher identifiziert, und Nachrichten können innerhalb von Minuten oder Sekunden entschlüsselt werden.
- Es gibt bekannte Schwächen in SMS-Routing-Protokollen ([SS7](https://en.wikipedia.org/wiki/Signalling_System_No._7)), durch die Angreifer Textnachrichten an sich umleiten können.
- Bei [SIM-Swap-Betrügereien](https://en.wikipedia.org/wiki/SIM_swap_scam) missbraucht der Angreifer die Mobilnummernportabilität (normalerweise verwendet, wenn Dienste gewechselt werden oder ein Telefon verloren geht oder gestohlen wird), um das Opfer zu imitieren.
- Provider können Telefonnummern nach Schließung eines Kontos auch an neue Benutzer weitergeben.

Benutzer könnten zudem eine andere SIM-Karte oder eine eSIM verwenden, wenn sie reisen und eventuell ihre übliche SIM-Karte oder SMS-Dienste deaktiviert haben, um Kosten zu sparen, in welchem Fall sie keine SMS Einmalpasswörter erhalten.

Aus diesem Grund sollten Sie SMS OTP nicht allein nutzen, um neue Sitzungen zu etablieren oder für die allgemeine Authentifizierung. Stattdessen sollten Sie es, wenn überhaupt, nur als zweiten Faktor oder zur Bestätigung von Absichten (z.B. Zahlungen) verwenden.

### Autovervollständigung von SMS-Codes

Um es Benutzern zu erleichtern, SMS-Codes auf einer Website einzugeben und die Wahrscheinlichkeit von Phishing-Angriffen zu verringern, ermöglicht der [Standard für Ursprungsgebundene Einmalcodes per SMS](https://wicg.github.io/sms-one-time-codes/) Websites die Unterstützung der Autovervollständigung für Einmalcode-Werte.

Um dies zu ermöglichen, müssen Sie die SMS-Nachricht wie folgt formatieren:

```plain
Your verification code is 123456.

@www.example.com #123456
```

Stellen Sie dann auf dem Anmeldeformular Ihrer Website ein {{HTMLElement("input")}}-Element mit dem Attributwert `autocomplete=one-time-code` bereit.

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

Der Browser extrahiert den Code automatisch aus der SMS, und wenn der Ursprung in der Nachricht mit dem Ursprung des Anmeldeformulars übereinstimmt, wird das `<input>`-Element mit dem Code automatisch ausgefüllt.

### WebOTP API

Die [WebOTP API](/de/docs/Web/API/WebOTP_API) gibt Websites programmgesteuerten Zugriff auf Einmalcodes, die per SMS geliefert werden. Sie hat jedoch keine gute Unterstützung in verschiedenen Browsern, und es sei denn, Sie benötigen programmgesteuerten Zugriff auf den Code, müssen Sie diese API nicht verwenden. Die Verwendung des standardisierten Formats und `autocomplete=one-time-code` sollte ausreichen, damit die Autovervollständigung browserübergreifend funktioniert.

## TOTP

Bei zeitbasierten Einmalpasswörtern sendet die Website den Anmeldecode nicht an den Benutzer. Stattdessen sind die Website und der Benutzer in der Lage, denselben Code unabhängig voneinander zu generieren, basierend auf der aktuellen Zeit und einem gemeinsamen Geheimnis. Um den Code zu generieren, muss der Benutzer eine App auf seinem Gerät installieren: Dies wird als _Authenticator-App_ bezeichnet.

Bei der Registrierung:

1. Der Benutzer installiert eine Authenticator-App, falls er noch keine hat.
2. Die Website:
   - Generiert das gemeinsame Geheimnis.
   - Speichert das Geheimnis sicher und verknüpft es mit dem Benutzerkonto.
   - Betten das Geheimnis und einige zugehörige Metadaten in einer [`otpauth`](https://www.rfc-editor.org/info/rfc6238/) URI.
   - Codiert die URI als QR-Code und lädt den Benutzer ein, diesen zu scannen.

3. Die Authenticator-App auf dem Gerät des Benutzers decodiert die URI aus dem QR-Code und analysiert die URI, speichert das Geheimnis und die zugehörigen Metadaten.

Bei der Anmeldung gibt der Benutzer den aktuellen Codewert an, den die Authenticator-App basierend auf dem Geheimnis und der aktuellen Zeit berechnet. Die Website kann dieselbe Berechnung durchführen, und wenn die Werte übereinstimmen, kann der Benutzer angemeldet werden.

### TOTP-Algorithmus

Der Algorithmus für zeitbasierte Einmalpasswörter (TOTP) ist in {{rfc("6238")}} spezifiziert. Er ist eine Erweiterung des HMAC-basierten Einmalpasswort-Algorithmus (HOTP), der in {{rfc("4226")}} spezifiziert ist.

Der Algorithmus erstellt Einmalcodes, die 6-stellig sind und nur für eine begrenzte Zeit gültig sind (in der Regel 30 Sekunden). Dies bedeutet, dass TOTP im Gegensatz zu den anderen beschriebenen OTP-Systemen Zeitbasierte Gültigkeit und automatische Ungültigmachung von Haus aus implementiert.

Der geheime Schlüssel ist ein Zufallswert, der empfohlen wird, mindestens 160 Bit lang zu sein.

Sie sollten ein anerkanntes Drittanbieterpaket verwenden, um TOTP zu implementieren, wie [pyotp](https://pyauth.github.io/pyotp/) für Python oder [otpauth](https://www.npmjs.com/package/otpauth) für Node.

### Das `otpauth` URI-Format

Das `otpauth` URI-Format ist in diesem [IETF-Entwurf](https://www.ietf.org/archive/id/draft-linuxgemini-otpauth-uri-00.html) definiert.

Für TOTP ist die URI wie folgt formatiert:

```plain
otpauth://totp/LABEL?secret=MQCHJLS6FJXT2BGQJ6QMG3WCAVUC2HJZ&issuer=My_Website
```

Die `LABEL`-Komponente identifiziert den Benutzer: zum Beispiel könnte es ihr Benutzername sein.

Die URI beinhaltet eine Reihe von Abfragezeichenfolgenparametern, von denen die wichtigsten sind:

- `secret`
  - : Das in [Base32](https://en.wikipedia.org/wiki/Base32) kodierte gemeinsame Geheimnis.
- `issuer`
  - : Der Name des Anbieters oder Dienstes, mit dem dieses Konto verbunden ist. Technisch optional, aber dringend empfohlen.

### Authenticator-Apps

Eine große Anzahl von Authenticator-Apps, sowohl proprietäre als auch Open Source, unterstützen TOTP. Beispiele sind: [Ente Auth](https://ente.com/auth/), [2FAS](https://2fas.com), und [Microsoft Authenticator](https://www.microsoft.com/en-US/security/mobile-authenticator-app).

### Sicherung des Geheimnisses

Bei TOTP muss der geheime Schlüssel sowohl auf dem Server als auch auf dem Client sicher gespeichert werden.

Für den Server ähneln die Überlegungen denen für die [Passwortspeicherung](/de/docs/Web/Security/Authentication/Passwords#storing_passwords): Der Server muss TOTP-Geheimnisse so speichern, dass der Angreifer nicht auf sie zugreifen kann, selbst wenn er Zugriff auf die Datenbank des Servers erhält.

Für den Client sollte die Authenticator-App eine gewisse Schutzmaßnahme für den geheimen Schlüssel bieten.

## Stärken und Schwächen

Im Vergleich zu [Passwörtern](/de/docs/Web/Security/Authentication/Passwords) ist die größte Stärke von OTP, dass der Benutzer nicht an der Erstellung oder Erinnerung von Geheimnissen beteiligt ist, sodass OTP nicht anfällig für [Erraten](/de/docs/Web/Security/Authentication/Passwords#guessing) oder [Credential Stuffing](/de/docs/Web/Security/Authentication/Passwords#credential_stuffing) Angriffe ist.

### Schwächen

- SMS- und E-Mail-basierte OTP haben das Risiko, dass ein Angreifer OTP-Codes, die vom Server gesendet werden, abfangen könnte, und SMS ist in dieser Hinsicht viel schwächer als E-Mail.

- TOTP ist nicht anfällig für Abfangangriffe, birgt jedoch das Risiko, dass ein Angreifer Zugriff auf das gemeinsame Geheimnis erlangen könnte.

- Alle Formen von OTP sind anfällig für [Phishing-Angriffe](/de/docs/Web/Security/Attacks/Phishing#multi-factor_authentication).

Abgesehen von der Sicherheit gibt es bei OTP einige Benutzerfreundlichkeitsprobleme:

- SMS- und E-Mail-basierte OTP können umständlich zu verwenden sein, insbesondere wenn es erhebliche Verzögerungen zwischen dem Senden des Codes durch den Server und dem Empfang durch den Benutzer gibt.
- Bei TOTP stellt die Notwendigkeit, eine Authenticator-App zu installieren, eine erhebliche Barriere für die Anmeldung dar: Aber natürlich, wenn der Benutzer die App bereits für eine andere Website installiert hat, muss er dies nicht erneut tun, wenn er sich auf Ihrer Website anmeldet.

## OTP-Empfehlungen

OTP und insbesondere TOTP können als {{Glossary("Multi-factor_authentication", "zusätzlicher Authentifizierungsfaktor")}} und zur Bestätigung von Benutzerabsichten, z.B. bei einer Zahlung, nützlich sein. Für allgemeine Authentifizierungszwecke ist es besser, [Passkeys](/de/docs/Web/Security/Authentication/Passkeys) zu verwenden, die resistenter gegen Phishing-Angriffe sind.

Wenn Sie OTP implementieren, sollten Sie folgende Empfehlungen berücksichtigen:

- Bevorzugen Sie TOTP gegenüber E-Mail- oder SMS-basierten OTP und vermeiden Sie insbesondere SMS-basierte OTP.
- Wenn Sie TOTP verwenden:
  - Nutzen Sie eine seriöse Bibliothek, um Geheimnisse und OTP-Codes zu generieren.
  - Speichern Sie das Geheimnis sicher auf dem Server.
