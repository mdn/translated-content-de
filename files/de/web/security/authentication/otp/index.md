---
title: Einmalpasswörter (OTP)
slug: Web/Security/Authentication/OTP
l10n:
  sourceCommit: 09d8ff096be97b28ea415fc4c68fb1cff0ff8af9
---

Ein _Einmalpasswort_ (OTP), auch bekannt als _Einmal-PIN_ oder _Einlauf-Authentifizierungscode_ (OTAC), ist ein generierter Code, der spezifisch für einen einzigen Login-Versuch ist. Die Website sendet entweder den Code über einen separaten Kanal, wie eine E-Mail, an den Benutzer, oder das Gerät des Benutzers generiert den Code unabhängig. Der Benutzer gibt dann den Code auf der Seite ein, um sich einzuloggen.

## Überblick

Authentifizierungsabläufe mit Einmalpasswörtern basieren auf etwas, das der Benutzer hat (ein Telefon, eine E-Mail-Adresse, ein Geheimnis, das in einer Authentifizierungs-App gespeichert ist), anstatt auf etwas, das er kennt (ein Passwort) oder etwas, das er ist (biometrische Informationen wie ein Fingerabdruck).

Einmalpasswörter können entweder zusätzlich zu traditionellen Passwörtern verwendet werden oder sie können diese ersetzen. Häufig werden sie verwendet, um die Absichten des Benutzers zu bestätigen, zum Beispiel bei einer Zahlung.

Viele OTPs sind 6-stellig und haben eine Wahrscheinlichkeit von 1 zu einer Million, richtig geraten zu werden. Das ist weitaus besser als 4 Ziffern mit nur 10.000 möglichen Kombinationen. Der Sicherheitsmechanismus, auf dem OTPs beruhen, ist die zeitliche Komponente: OTPs sind in der Regel nur einmal in einem definierten Zeitrahmen gültig und werden nach dem Gebrauch ungültig gemacht. Aus diesem Grund haben OTPs eine kurze Ablaufzeit (ideal ≤5 Minuten; 30–120 Sekunden für stärkeren Schutz).

Dieser Artikel behandelt drei gängige Implementierungen für Einmalpasswörter: E-Mail, SMS und zeitbasierte Einmalpasswörter (TOTP). TOTP wird in diesem Vergleich als der sicherste Übertragungskanal angesehen.

## E-Mail OTP

Bei E-Mail-basierten OTPs registriert sich der Benutzer:

- Der Benutzer gibt seine E-Mail-Adresse auf der Website an.
- Die Website überprüft, dass er Zugriff auf diese E-Mail-Adresse hat.

Wenn der Benutzer sich einloggen möchte:

- Die Website generiert den Einmalcode und sendet ihn per E-Mail an den Benutzer.
- Der Benutzer gibt den Code auf der Website ein.
- Die Website loggt den Benutzer ein.

Es gibt zwei gängige Ansätze zur Übermittlung des Codes:

1. Die Website sendet einen personalisierten Einmal-Link an die E-Mail-Adresse des Benutzers. Wenn der Benutzer auf den Link klickt, authentifiziert die Website den Benutzer. Der Link ist nur wenige Minuten gültig und verfällt sofort, nachdem der Benutzer ihn angeklickt hat. Diese Option kann sehr bequem für den Benutzer sein. Allerdings muss der Benutzer den Prozess auf demselben Gerät und im gleichen Browser abschließen, was beim Einloggen aus einem In-App-Browser oder von einem anderen Gerät problematisch sein kann. Benutzer zu bitten, auf Links in E-Mails zu klicken, macht sie auch anfälliger für [Phishing](/de/docs/Web/Security/Attacks/Phishing)-Angriffe.

2. Die Website sendet einen personalisierten Einmalcode an die E-Mail-Adresse des Benutzers. Der Benutzer wird dann aufgefordert, den Code auf dem gewünschten Gerät und im gewünschten Browser auf der Website einzugeben. Dieser Prozess kann langsamer und weniger bequem für den Benutzer sein, bietet aber größere Flexibilität bei der Anmeldung und wird als sicherer angesehen als das Verwenden von Links in E-Mails.

Für eine gute Benutzererfahrung mit allen E-Mail-basierten OTP-Methoden ist es wichtig, dass Benutzer die OTP-E-Mails in angemessener Zeit erhalten.

## SMS OTP

Beim SMS OTP gibt der Benutzer während der Registrierung seine Handynummer an, und beim Einloggen sendet die Website den Einmalcode an das Telefon in einer SMS.

Eine Schwäche sowohl von E-Mail- als auch von SMS-Methoden ist, dass ein Angreifer die Nachricht, die den Code enthält, abfangen könnte. Allerdings wird SMS als noch verwundbarer angesehen:

- Obwohl SMS-Nachrichten mithilfe von [A5/X-Stream-Chiffren](https://en.wikipedia.org/wiki/A5/1) verschlüsselt werden können, wurden verschiedene Schwächen in der Chiffre identifiziert und Nachrichten können innerhalb von Minuten oder Sekunden entschlüsselt werden.
- Es sind bekannte Schwächen in SMS-Routing-Protokollen ([SS7](https://en.wikipedia.org/wiki/Signalling_System_No._7)) vorhanden, durch die Angreifer Textnachrichten zu sich umleiten können.
- Bei [SIM-Swap-Betrügereien](https://en.wikipedia.org/wiki/SIM_swap_scam) missbraucht der Angreifer die Mobilnummernübertragbarkeit (die normalerweise beim Wechsel des Dienstes oder bei Verlust oder Diebstahl eines Telefons verwendet wird), um das Opfer nachzuahmen.
- Netzbetreiber können Telefonnummern nach Abschluss eines Kontos auch an neue Benutzer recyceln.

Außerdem verwenden Benutzer möglicherweise eine andere SIM-Karte oder eine eSIM beim Reisen und haben möglicherweise ihre übliche SIM-Karte oder SMS-Dienste deaktiviert, um Kosten zu sparen, in welchem Fall sie keine SMS-Einmalpasswörter erhalten würden.

Deshalb sollten Sie SMS-OTPs nicht allein verwenden, um neue Sitzungen zu etablieren oder für allgemeine Authentifizierung. Verwenden Sie sie stattdessen, falls überhaupt, nur als zweiten Faktor oder zur Bestätigung von Absichten (z. B. Zahlungen).

### Automatisches Ausfüllen von SMS-Codes

Um es den Benutzern zu erleichtern, SMS-Codes auf einer Website einzugeben und die Wahrscheinlichkeit von Phishing-Angriffen zu verringern, ermöglicht der [Standard für ursprüngsgebundene Einmalcodes, die über SMS geliefert werden](https://wicg.github.io/sms-one-time-codes/), dass Websites das automatische Ausfüllen von Einmalcode-Werten unterstützen.

Um dies zu aktivieren, müssen Sie die SMS-Nachricht wie folgt formatieren:

```plain
Your verification code is 123456.

@www.example.com #123456
```

Dann bieten Sie im Anmeldeformular Ihrer Website ein {{HTMLElement("input")}}-Element mit dem Attributwert `autocomplete=one-time-code` an.

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

Der Browser extrahiert automatisch den Code aus der SMS, und wenn die im Nachrichtentext angegebene Herkunft mit der Herkunft des Anmeldeformulars übereinstimmt, wird das `<input>`-Element automatisch mit dem Code ausgefüllt.

### WebOTP API

Die [WebOTP API](/de/docs/Web/API/WebOTP_API) gibt Websites programmatischen Zugriff auf Einmalcodes, die über SMS geliefert werden. Sie bietet jedoch keine umfassende Unterstützung über alle Browser hinweg, und es sei denn, Sie benötigen programmatischen Zugriff auf den Code, brauchen Sie diese API nicht zu verwenden. Die Verwendung des standardisierten Formats und `autocomplete=one-time-code` sollte für das automatische Ausfüllen über verschiedene Browser hinweg ausreichen.

## TOTP

Bei zeitbasierten Einmalpasswörtern sendet die Website den Anmeldecode nicht an den Benutzer. Stattdessen sind die Website und der Benutzer in der Lage, denselben Code unabhängig voneinander zu generieren, basierend auf der aktuellen Zeit und einem gemeinsamen Geheimnis. Um den Code zu generieren, muss der Benutzer eine App auf ihrem Gerät installieren: Dies wird als _Authenticator-App_ bezeichnet.

Zur Registrierungszeit:

1. Der Benutzer installiert eine Authenticator-App, wenn er noch keine hat.
2. Die Website:
   - Generiert das gemeinsame Geheimnis.
   - Speichert das Geheimnis sicher und verknüpft es mit dem Benutzerkonto.
   - Betettet das Geheimnis und einige verwandte Metadaten in einer [`otpauth`](https://www.rfc-editor.org/rfc/rfc6238)-URI.
   - Kodiert die URI als QR-Code und fordert den Benutzer auf, sie zu scannen.

3. Die Authentifizierungs-App auf dem Gerät des Benutzers dekodiert die URI vom QR-Code und analysiert die URI, speichert das Geheimnis und die zugehörigen Metadaten.

Bei der Anmeldung gibt der Benutzer den aktuellen Codewert ein, den die Authentifizierungs-App basierend auf dem Geheimnis und der aktuellen Zeit berechnet. Die Website kann dieselbe Berechnung durchführen, und wenn die Werte übereinstimmen, kann der Benutzer eingeloggt werden.

### TOTP-Algorithmus

Der zeitbasierte Einmalpasswort-Algorithmus (TOTP) ist in {{rfc("6238")}} spezifiziert. Er ist eine Erweiterung des HMAC-basierten Einmalpasswort-Algorithmus (HOTP), der in {{rfc("4226")}} spezifiziert ist.

Der Algorithmus erstellt Einmalcodes, die 6-stellig sind und nur für einen begrenzten Zeitraum gültig sind (normalerweise 30 Sekunden). Das bedeutet, dass im Gegensatz zu den anderen beschriebenen OTP-Systemen TOTP von Natur aus zeitbasierte Gültigkeit und automatische Ungültigmachung implementiert.

Der geheime Schlüssel ist ein zufälliger Wert, der mindestens 160 Bit lang sein sollte.

Sie sollten ein anerkanntes Drittanbieter-Paket verwenden, um TOTP zu implementieren, wie zum Beispiel [pyotp](https://pyauth.github.io/pyotp/) für Python oder [otpauth](https://www.npmjs.com/package/otpauth) für Node.

### Das `otpauth`-URI-Format

Das `otpauth`-URI-Format wird in diesem [IETF-Entwurf](https://www.ietf.org/archive/id/draft-linuxgemini-otpauth-uri-00.html) definiert.

Für TOTP wird die URI folgendermaßen formatiert:

```plain
otpauth://totp/LABEL?secret=MQCHJLS6FJXT2BGQJ6QMG3WCAVUC2HJZ&issuer=My_Website
```

Die `LABEL`-Komponente identifiziert den Benutzer: zum Beispiel könnte es sein Benutzername sein.

Die URI enthält eine Reihe von Abfragezeichenfolgen-Parametern, von denen die wichtigsten sind:

- `secret`
  - : Das gemeinsam genutzte Geheimnis, codiert in [Base32](https://en.wikipedia.org/wiki/Base32).
- `issuer`
  - : Der Name des Anbieters oder Dienstes, mit dem dieses Konto verknüpft ist. Technisch optional, aber stark empfohlen.

### Authenticator-Apps

Eine große Anzahl von Authentifizierungs-Apps, sowohl proprietäre als auch Open-Source, unterstützen TOTP. Zum Beispiel: [Ente Auth](https://ente.com/auth/), [2FAS](https://2fas.com) und [Microsoft Authenticator](https://www.microsoft.com/en-US/security/mobile-authenticator-app).

### Absicherung des Geheimnisses

Bei TOTP muss der geheime Schlüssel sowohl auf dem Server als auch auf dem Client sicher gespeichert werden.

Für den Server ähneln die Überlegungen denen zur [Passwortspeicherung](/de/docs/Web/Security/Authentication/Passwords#storing_passwords): Der Server muss TOTP-Geheimnisse so speichern, dass der Angreifer keinen Zugriff darauf hat, selbst wenn er Zugriff auf die Datenbank des Servers erhält.

Für den Client sollte die Authentifizierungs-App einen gewissen Schutz für den geheimen Schlüssel bieten.

## Stärken und Schwächen

Im Vergleich zu [Passwörtern](/de/docs/Web/Security/Authentication/Passwords) liegt die größte Stärke von OTP darin, dass der Benutzer nicht an der Erstellung oder Erinnerung von Geheimnissen beteiligt ist, sodass OTP nicht anfällig für [Raten](/de/docs/Web/Security/Authentication/Passwords#guessing) oder [Credential Stuffing](/de/docs/Web/Security/Authentication/Passwords#credential_stuffing)-Angriffe ist.

### Schwächen

- SMS- und E-Mail-basierte OTPs haben das Risiko, dass ein Angreifer die vom Server gesendeten OTP-Codes abfangen könnte, und SMS ist in dieser Hinsicht viel schwächer als E-Mail.

- TOTP ist nicht anfällig für Abfangen, birgt jedoch das Risiko, dass ein Angreifer Zugriff auf das gemeinsame Geheimnis erlangen könnte.

- Alle Formen von OTP sind anfällig für [Phishing-Angriffe](/de/docs/Web/Security/Attacks/Phishing#multi-factor_authentication).

Abgesehen von der Sicherheit hat OTP einige Benutzerfreundlichkeitsprobleme:

- SMS- und E-Mail-basierte OTPs können umständlich zu verwenden sein, insbesondere wenn erhebliche Verzögerungen zwischen dem Senden des Codes durch den Server und dem Empfang durch den Benutzer bestehen.
- Für TOTP stellt die Notwendigkeit, eine Authentifizierungs-App zu installieren, eine erhebliche Barriere für die Anmeldung dar: Wenn der Benutzer jedoch die App bereits für eine andere Website installiert hat, muss er dies nicht erneut tun, wenn er sich bei Ihrer Website anmeldet.

## OTP-Empfehlungen

OTP, insbesondere TOTP, kann als {{Glossary("Multi-factor_authentication", "zusätzlicher Authentifizierungsfaktor")}} und zur Bestätigung von Benutzerabsichten nützlich sein, beispielsweise bei einer Zahlung. Für allgemeine Authentifizierungszwecke ist es besser, [Passwörter](/de/docs/Web/Security/Authentication/Passkeys) zu verwenden, die widerstandsfähiger gegen Phishing-Angriffe sind.

Wenn Sie OTP implementieren, ziehen Sie die folgenden Empfehlungen in Betracht:

- Bevorzugen Sie TOTP gegenüber E-Mail-basierten oder SMS-basierten OTPs, und insbesondere vermeiden Sie SMS-basierte OTPs.
- Wenn Sie TOTP verwenden:
  - Verwenden Sie eine angesehene Bibliothek zum Generieren von Geheimnissen und OTP-Codes.
  - Speichern Sie das Geheimnis sicher auf dem Server.
