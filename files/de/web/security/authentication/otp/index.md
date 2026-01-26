---
title: Einmalpasswörter (OTP)
slug: Web/Security/Authentication/OTP
l10n:
  sourceCommit: 78e19ccf328e1933aeeb8c620331c14072eeb240
---

Ein _Einmalpasswort_ (OTP), auch bekannt als _Einmal-PIN_ oder _Einmal-Autorisierungscode_ (OTAC), ist ein generierter Code, der für einen einzigen Anmeldeversuch spezifisch ist. Die Webseite sendet entweder den Code über einen separaten Kanal, wie eine E-Mail, an den Benutzer oder das Gerät des Benutzers generiert den Code unabhängig. Der Benutzer gibt dann den Code auf der Seite ein, um sich anzumelden.

## Übersicht

Authentifizierungsabläufe mit Einmalpasswörtern basieren auf etwas, das der Benutzer hat (ein Telefon, eine E-Mail-Adresse, ein in einer Authentifizierungs-App gespeichertes Geheimnis), anstatt auf etwas, das er weiß (ein Passwort) oder etwas, das er ist (biometrische Informationen wie ein Fingerabdruck).

Einmalpasswörter können zusätzlich zu traditionellen Passwörtern verwendet oder diese ersetzen. Oft werden sie verwendet, um die Absichten des Benutzers zu bestätigen, zum Beispiel bei einer Zahlung.

Viele OTPs sind 6-stellig mit einer Wahrscheinlichkeit von 1 zu 1 Million, korrekt zu raten. Dies ist wesentlich besser als 4-stellige Codes mit nur 10.000 möglichen Kombinationen. Der Sicherheitsmechanismus, auf den sich OTPs stützen, ist die zeitliche Komponente: OTPs sind normalerweise nur einmal für einen definierten Zeitraum gültig und werden nach der Verwendung ungültig. Daher haben OTPs eine kurze Ablaufzeit (idealerweise ≤5 Minuten; 30–120 Sekunden für stärkeren Schutz).

Dieser Artikel beschreibt drei gängige Implementierungen für Einmalpasswörter: E-Mail, SMS und zeitbasierte Einmalpasswörter (TOTP). TOTP wird in diesem Vergleich als der sicherste Übertragungskanal angesehen.

## E-Mail OTP

Bei E-Mail-basierten OTPs, während der Registrierung:

- Der Benutzer gibt seine E-Mail-Adresse auf der Webseite an.
- Die Webseite überprüft, dass der Benutzer Zugriff auf diese E-Mail-Adresse hat.

Wenn der Benutzer um Anmeldung bittet:

- Die Webseite generiert den Einmalcode und sendet ihn per E-Mail an den Benutzer.
- Der Benutzer gibt den Code auf der Webseite ein.
- Die Webseite meldet den Benutzer an.

Es gibt zwei gängige Ansätze zur Bereitstellung des Codes:

1. Die Webseite sendet einen personalisierten Einmal-Link an die E-Mail-Adresse des Benutzers. Wenn der Benutzer auf den Link klickt, authentifiziert die Webseite den Benutzer. Der Link ist nur für ein paar Minuten gültig und läuft unmittelbar nach dem Klicken ab. Diese Option kann für den Benutzer sehr bequem sein. Allerdings erfordert sie, dass der Benutzer den Prozess auf demselben Gerät und im selben Browser abschließt, was problematisch sein kann, wenn man sich aus einem In-App-Browser oder einem anderen Gerät anmeldet. Das Bitten der Benutzer, Links in E-Mails zu klicken, macht sie auch anfälliger für [Phishing](/de/docs/Web/Security/Attacks/Phishing).

2. Die Webseite sendet einen personalisierten Einmalcode an die E-Mail-Adresse des Benutzers. Der Benutzer wird dann aufgefordert, den Code auf dem gewünschten Gerät und im gewünschten Browser auf der Webseite einzugeben. Dieser Prozess kann langsamer und weniger bequem für den Benutzer sein, bietet jedoch mehr Flexibilität beim Anmelden und wird als sicherer angesehen als die Verwendung von Links in E-Mails.

Für eine gute Benutzererfahrung mit allen E-Mail-basierten OTP-Methoden ist es wichtig, dass die Benutzer die OTP-E-Mails in angemessener Zeit erhalten.

## SMS OTP

Bei SMS-OTP gibt der Benutzer während der Registrierung seine Handynummer an, und bei der Anmeldung sendet die Webseite den Einmalcode in einer SMS-Nachricht an das Telefon.

Eine Schwäche sowohl der E-Mail- als auch der SMS-Methoden ist, dass ein Angreifer die Nachricht mit dem Code abfangen könnte. Allerdings gilt SMS als anfälliger:

- Obwohl SMS-Nachrichten mithilfe von [A5/X-Stream-Ziffern](https://en.wikipedia.org/wiki/A5/1) verschlüsselt werden können, wurden verschiedene Schwachstellen im Ziffer identifiziert, und Nachrichten können innerhalb von Minuten oder Sekunden entschlüsselt werden.
- Es gibt bekannte Schwächen in SMS-Routing-Protokollen ([SS7](https://en.wikipedia.org/wiki/Signalling_System_No._7)), die Angreifern erlauben, Textnachrichten umzuleiten.
- Bei [SIM-Swap-Betrug](https://en.wikipedia.org/wiki/SIM_swap_scam) missbraucht der Angreifer die Mobilfunknummernübertragbarkeit (normalerweise verwendet beim Wechseln von Diensten oder wenn ein Telefon verloren geht oder gestohlen wird), um das Opfer zu imitieren.
- Netzbetreiber können Telefonnummern nach der Schließung eines Kontos an neue Benutzer weitergeben.

Benutzer könnten auch eine andere SIM-Karte oder eine eSIM verwenden, wenn sie reisen, und könnten ihren üblichen SIM-Karten- oder SMS-Dienst deaktiviert haben, um Kosten zu sparen, in welchem Fall sie keine SMS-Einmalpasswörter erhalten.

Aus diesem Grund sollten Sie SMS-OTP nicht allein verwenden, um neue Sitzungen zu erstellen oder für die allgemeine Authentifizierung. Stattdessen sollten sie, wenn überhaupt, nur als zweiter Faktor oder zur Bestätigung von Absichten (z.B. Zahlungen) verwendet werden.

### Autovervollständigung von SMS-Codes

Um es Benutzern zu erleichtern, SMS-Codes in eine Seite einzugeben und die Wahrscheinlichkeit von Phishing-Angriffen zu verringern, ermöglicht der [Standard für ursprungsgebundene Einmalcodes, die über SMS geliefert werden](https://wicg.github.io/sms-one-time-codes/), Websites, die Autovervollständigung für Einmalcode-Werte zu unterstützen.

Um dies zu aktivieren, müssen Sie die SMS-Nachricht folgendermaßen formatieren:

```plain
Your verification code is 123456.

@www.example.com #123456
```

Fügen Sie dann im Anmeldeformular Ihrer Website ein {{HTMLElement("input")}}-Element mit dem Attributwert `autocomplete=one-time-code` ein.

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

Der Browser extrahiert den Code automatisch aus der SMS, und wenn der in der Nachricht angegebene Ursprung mit dem Ursprung des Anmeldeformulars übereinstimmt, wird das `<input>`-Element automatisch mit dem Code gefüllt.

### WebOTP API

Die [WebOTP API](/de/docs/Web/API/WebOTP_API) ermöglicht Websites den programmgesteuerten Zugriff auf über SMS gelieferte Einmalcodes. Allerdings gibt es keine gute Unterstützung über Browser hinweg, und sofern Sie keinen programmgesteuerten Zugriff auf den Code benötigen, müssen Sie diese API nicht verwenden. Die Verwendung des standardisierten Formats und `autocomplete=one-time-code` sollte ausreichen, damit die Autovervollständigung in verschiedenen Browsern funktioniert.

## TOTP

Bei zeitbasierten Einmalpasswörtern sendet die Website den Anmeldecode nicht an den Benutzer. Stattdessen können die Website und der Benutzer denselben Code unabhängig voneinander generieren, basierend auf der aktuellen Zeit und einem gemeinsamen Geheimnis. Um den Code zu generieren, muss der Benutzer eine App auf seinem Gerät installieren: Dies wird als _Authenticator App_ bezeichnet.

Zum Zeitpunkt der Registrierung:

1. Der Benutzer installiert eine Authenticator App, falls er noch keine hat.
2. Die Website:
   - Generiert das gemeinsame Geheimnis.
   - Speichert das Geheimnis sicher und verknüpft es mit dem Benutzerkonto.
   - Betttet das Geheimnis und einige zugehörige Metadaten in eine [`otpauth`](https://www.rfc-editor.org/rfc/rfc6238)-URI ein.
   - Codiert die URI als QR-Code und bittet den Benutzer, diesen zu scannen.

3. Die Authenticator App auf dem Gerät des Benutzers dekodiert die URI aus dem QR-Code und analysiert die URI, speichert das Geheimnis und die zugehörigen Metadaten.

Zur Anmeldezeit gibt der Benutzer den aktuellen Code ein, den die Authenticator App basierend auf dem Geheimnis und der aktuellen Zeit berechnet. Die Website kann dieselbe Berechnung durchführen, und wenn die Werte übereinstimmen, kann der Benutzer angemeldet werden.

### TOTP-Algorithmus

Der zeitbasierte Einmalpasswortalgorithmus (TOTP) ist in {{rfc("6238")}} spezifiziert. Er ist eine Erweiterung des HMAC-basierten Einmalpasswortalgorithmus (HOTP), der in {{rfc("4226")}} spezifiziert ist.

Der Algorithmus erstellt Einmalcodes, die 6 Stellen lang sind und nur für eine begrenzte Zeit (normalerweise 30 Sekunden) gültig sind. Das bedeutet, dass im Gegensatz zu den anderen OTP-Systemen, die wir beschrieben haben, TOTP zeitbasierte Gültigkeit und automatische Ungültigmachung von Haus aus implementiert.

Der geheime Schlüssel ist ein zufälliger Wert, der mindestens 160 Bit lang sein sollte.

Sie sollten ein anerkanntes Drittanbieterpaket zur Implementierung von TOTP verwenden, wie zum Beispiel [pyotp](https://pyauth.github.io/pyotp/) für Python oder [otpauth](https://www.npmjs.com/package/otpauth) für Node.

### Das `otpauth` URI-Format

Das `otpauth` URI-Format ist in diesem [IETF-Entwurf](https://www.ietf.org/archive/id/draft-linuxgemini-otpauth-uri-00.html) definiert.

Für TOTP wird die URI folgendermaßen formatiert:

```plain
otpauth://totp/LABEL?secret=MQCHJLS6FJXT2BGQJ6QMG3WCAVUC2HJZ&issuer=My_Website
```

Die `LABEL`-Komponente identifiziert den Benutzer: Zum Beispiel könnte es sein Benutzername sein.

Die URI enthält eine Reihe von Abfragezeichenfolgenparametern, von denen die wichtigsten sind:

- `secret`
  - : Das in [Base32](https://de.wikipedia.org/wiki/Base32) codierte gemeinsame Geheimnis.
- `issuer`
  - : Der Name des Anbieters oder Dienstes, mit dem dieses Konto verknüpft ist. Technisch optional, aber dringend empfohlen.

### Authenticator Apps

Eine große Anzahl von Authenticator Apps, sowohl proprietär als auch Open Source, unterstützt TOTP. Beispiele: [Ente Auth](https://ente.io/auth/), [2FAS](https://2fas.com) und [Microsoft Authenticator](https://www.microsoft.com/en-US/security/mobile-authenticator-app).

### Sicherung des Geheimnisses

Bei TOTP muss der geheime Schlüssel sowohl auf dem Server als auch auf dem Client sicher gespeichert werden.

Für den Server sind die Überlegungen ähnlich wie bei der [Passwortspeicherung](/de/docs/Web/Security/Authentication/Passwords#storing_passwords): Der Server muss TOTP-Geheimnisse so speichern, dass der Angreifer keinen Zugriff darauf erhält, selbst wenn er Zugriff auf die Datenbank des Servers erhält.

Für den Client sollte die Authenticator App einen gewissen Schutz für den geheimen Schlüssel bieten.

## Stärken und Schwächen

Im Vergleich zu [Passwörtern](/de/docs/Web/Security/Authentication/Passwords) liegt die größte Stärke von OTP darin, dass der Benutzer nicht an der Erstellung oder dem Merken von Geheimnissen beteiligt ist, sodass OTP nicht anfällig für [Ratensicherheits](/de/docs/Web/Security/Authentication/Passwords#guessing) oder [Anmeldeinformationsfüll](/de/docs/Web/Security/Authentication/Passwords#credential_stuffing) Angriffe ist.

### Schwächen

- SMS- und E-Mail-basierte OTP haben das Risiko, dass ein Angreifer OTP-Codes abfangen könnte, die vom Server gesendet werden, wobei SMS in dieser Hinsicht viel schwächer ist als E-Mail.

- TOTP ist nicht anfällig für Abfangen, birgt jedoch das Risiko, dass ein Angreifer Zugriff auf das gemeinsame Geheimnis bekommt.

- Alle Formen von OTP sind anfällig für [Phishing-Angriffe](/de/docs/Web/Security/Attacks/Phishing#multi-factor_authentication).

Abgesehen von der Sicherheit hat OTP einige Nutzbarkeitsprobleme:

- SMS- und E-Mail-basierte OTP können umständlich zu verwenden sein, insbesondere wenn bedeutende Latenzzeiten zwischen dem Senden des Codes durch den Server und dem Erhalt durch den Benutzer bestehen.
- Bei TOTP ist die Notwendigkeit, eine Authenticator App zu installieren, ein signifikanter Anmeldehindernis: aber natürlich, wenn der Benutzer die App bereits für eine andere Seite installiert hat, muss er dies nicht noch einmal tun, wenn er sich auf Ihrer Seite anmeldet.

## OTP-Empfehlungen

OTP und insbesondere TOTP können als {{Glossary("Multi-factor_authentication", "zusätzlicher Authentifizierungsfaktor")}} und zur Bestätigung von Benutzerabsichten nützlich sein, beispielsweise beim Tätigen einer Zahlung. Für allgemeine Authentifizierungszwecke ist es besser, [Passkeys](/de/docs/Web/Security/Authentication/Passkeys) zu verwenden, die widerstandsfähiger gegen Phishing-Angriffe sind.

Wenn Sie OTP implementieren, berücksichtigen Sie die folgenden Empfehlungen:

- Bevorzugen Sie TOTP gegenüber E-Mail- oder SMS-basierten OTPs und vermeiden Sie insbesondere SMS-basierte OTPs.
- Wenn Sie TOTP verwenden:
  - Verwenden Sie eine seriöse Bibliothek, um Geheimnisse und OTP-Codes zu generieren.
  - Speichern Sie das Geheimnis sicher auf dem Server.
