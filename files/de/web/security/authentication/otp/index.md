---
title: Einmalpasswörter (OTP)
slug: Web/Security/Authentication/OTP
l10n:
  sourceCommit: 64e7d62e466859d471791367050ab2cc40d36506
---

Ein _Einmalpasswort_ (OTP), auch bekannt als _Einmal-PIN_ oder _Einmal-Autorisierungscode_ (OTAC), ist ein generierter Code, der spezifisch für einen einzelnen Anmeldeversuch ist. Die Website sendet den Code entweder über einen separaten Kanal an den Benutzer, wie beispielsweise eine E-Mail, oder das Gerät des Benutzers generiert den Code unabhängig. Der Benutzer gibt dann den Code auf der Website ein, um sich anzumelden.

## Übersicht

Authentifizierungsabläufe mit Einmalpasswörtern basieren auf etwas, das der Benutzer besitzt (ein Telefon, eine E-Mail-Adresse, ein Geheimnis, das in einer Authentifizierungs-App gespeichert ist), anstatt auf etwas, das sie wissen (ein Passwort) oder etwas, das sie sind (biometrische Informationen, wie ein Fingerabdruck).

Einmalpasswörter können zusätzlich zu traditionellen Passwörtern verwendet werden oder diese ersetzen. Oft werden sie verwendet, um die Absichten des Benutzers zu bestätigen, beispielsweise bei der Durchführung einer Zahlung.

Viele OTPs sind 6-stellig mit einer Wahrscheinlichkeit von 1 zu einer Million, korrekt geraten zu werden. Dies ist viel besser als 4-stellige Codes mit nur 10.000 möglichen Kombinationen. Der Sicherheitsmechanismus, auf den OTPs angewiesen sind, ist die zeitliche Komponente: OTPs sind normalerweise nur einmal für einen festgelegten Zeitraum gültig und nach der Verwendung ungültig. Deshalb haben OTPs eine kurze Ablaufzeit (idealerweise ≤5 Minuten; 30–120 Sekunden für stärkeren Schutz).

Dieser Artikel diskutiert drei häufige Implementierungen von Einmalpasswörtern: E-Mail, SMS und zeitbasierte Einmalpasswörter (TOTP). TOTP wird in diesem Vergleich als der sicherste Übertragungskanal angesehen.

## E-Mail OTP

Bei E-Mail-basierten OTPs erfolgt die Registrierung folgendermaßen:

- Der Benutzer gibt seine E-Mail-Adresse auf der Website ein.
- Die Website überprüft, dass der Benutzer Zugriff auf diese E-Mail-Adresse hat.

Wenn der Benutzer sich anmelden möchte:

- Die Website generiert den Einmalcode und sendet ihn per E-Mail an den Benutzer.
- Der Benutzer gibt den Code auf der Website ein.
- Die Website meldet den Benutzer an.

Es gibt zwei gebräuchliche Methoden, den Code zu übermitteln:

1. Die Website sendet einen personalisierten Einmal-Link an die E-Mail-Adresse des Benutzers. Sobald der Benutzer auf den Link klickt, authentifiziert die Website den Benutzer. Der Link ist nur für einige Minuten gültig und verfällt sofort, nachdem der Benutzer ihn angeklickt hat. Diese Option kann für den Benutzer sehr bequem sein. Allerdings erfordert es, dass der Benutzer den Prozess auf demselben Gerät und im selben Browser abschließt, was ein Problem darstellen kann, wenn die Anmeldung über einen In-App-Browser oder ein anderes Gerät erfolgt. Das Bitten der Benutzer, Links in E-Mails zu klicken, macht sie auch anfälliger für [Phishing](/de/docs/Web/Security/Attacks/Phishing)-Angriffe.

2. Die Website sendet einen personalisierten Einmalcode an die E-Mail-Adresse des Benutzers. Der Benutzer wird dann aufgefordert, den Code auf dem gewünschten Gerät und im gewünschten Browser einzugeben. Dieser Prozess kann für den Benutzer langsamer und weniger bequem sein, bietet jedoch eine größere Flexibilität, wo man sich anmeldet, und gilt als sicherer, als Links in E-Mails zu verwenden.

Für ein gutes Benutzererlebnis mit allen E-Mail-basierten OTP-Methoden ist es wichtig, dass die Benutzer die OTP-E-Mails relativ schnell erhalten.

## SMS OTP

Bei SMS OTP gibt der Benutzer während der Registrierung seine Handynummer an, und bei der Anmeldung sendet die Website den Einmalcode in einer SMS-Nachricht an das Telefon.

Eine Schwäche sowohl der E-Mail- als auch der SMS-Methoden besteht darin, dass ein Angreifer die Nachricht mit dem Code abfangen könnte. Allerdings wird SMS als anfälliger angesehen:

- Obwohl SMS-Nachrichten mit [A5/X-Stream-Ciphers](https://en.wikipedia.org/wiki/A5/1) verschlüsselt werden können, wurden verschiedene Schwächen im Chiffre identifiziert, und Nachrichten können innerhalb von Minuten oder Sekunden entschlüsselt werden.
- Es gibt bekannte Schwächen in den SMS-Routing-Protokollen ([SS7](https://en.wikipedia.org/wiki/Signalling_System_No._7)), die dazu führen können, dass Angreifer Textnachrichten zu ihnen umleiten können.
- Bei [SIM-Swap-Betrügereien](https://en.wikipedia.org/wiki/SIM_swap_scam) missbraucht der Angreifer die Mobilnummer-Portabilität (normalerweise verwendet, wenn der Dienst gewechselt wird oder ein Telefon verloren geht oder gestohlen wird), um das Opfer zu imitieren.
- Netzbetreiber können Telefonnummern auch nach der Schließung eines Kontos an neue Benutzer weitergeben.

Zudem könnten Benutzer eine andere SIM-Karte oder eine eSIM verwenden, wenn sie reisen, und möglicherweise ihre übliche SIM-Karte oder SMS-Dienste deaktiviert haben, um Kosten zu sparen, wodurch sie keine SMS-Einmalpasswörter erhalten würden.

Aus diesem Grund sollten Sie SMS OTP nicht allein verwenden, um neue Sitzungen zu etablieren oder zur allgemeinen Authentifizierung. Verwenden Sie es stattdessen, wenn überhaupt, nur als zweiten Faktor oder zur Bestätigung von Absichten (z. B. Zahlungen).

### Autovervollständigen von SMS-Codes

Um es Benutzern zu erleichtern, SMS-Codes auf einer Seite einzugeben und die Wahrscheinlichkeit von Phishing-Angriffen zu verringern, ermöglicht der [Standard für ursprungsgebundene Einmalkodes, die über SMS geliefert werden](https://wicg.github.io/sms-one-time-codes/), dass Websites die Autovervollständigung für Einmalcodes unterstützen.

Um dies zu ermöglichen, müssen Sie die SMS-Nachricht folgendermaßen formatieren:

```plain
Your verification code is 123456.

@www.example.com #123456
```

Bieten Sie dann in Ihrem Anmeldeformular auf der Seite ein {{HTMLElement("input")}}-Element mit dem Attributwert `autocomplete=one-time-code` an.

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

Der Browser extrahiert automatisch den Code aus der SMS, und wenn der in der Nachricht angegebene Ursprung mit dem Ursprung des Anmeldeformulars übereinstimmt, wird das `<input>`-Element automatisch mit dem Code ausgefüllt.

### WebOTP API

Die [WebOTP API](/de/docs/Web/API/WebOTP_API) bietet Websites programmgesteuerten Zugriff auf Einmalkodes, die über SMS geliefert werden. Sie hat jedoch keine gute Cross-Browser-Unterstützung, und es sei denn, Sie benötigen programmgesteuerten Zugriff auf den Code, benötigen Sie diese API nicht. Die Verwendung des standardisierten Formats und `autocomplete=one-time-code` sollte ausreichen, damit die Autovervollständigung in verschiedenen Browsern funktioniert.

## TOTP

Bei zeitbasierten Einmalpasswörtern sendet die Website den Anmeldecode nicht an den Benutzer. Stattdessen können die Website und der Benutzer den gleichen Code unabhängig voneinander generieren, basierend auf der aktuellen Zeit und einem gemeinsamen Geheimnis. Um den Code zu generieren, muss der Benutzer eine App auf seinem Gerät installieren: dies wird als _authentifizierende App_ bezeichnet.

Während der Registrierung:

1. Der Benutzer installiert eine Authentifizierungs-App, wenn er noch keine hat.
2. Die Website:
   - Generiert das gemeinsame Geheimnis.
   - Speichert das Geheimnis sicher und verknüpft es mit dem Benutzerkonto.
   - Betten das Geheimnis und einige zugehörige Metadaten in eine [`otpauth`](https://www.rfc-editor.org/rfc/rfc6238) URI ein.
   - Codiert die URI als QR-Code und fordert den Benutzer auf, diesen zu scannen.

3. Die Authentifizierungs-App auf dem Gerät des Benutzers dekodiert die URI aus dem QR-Code und analysiert die URI, speichert das Geheimnis und die zugehörigen Metadaten.

Zum Anmeldezeitpunkt gibt der Benutzer den aktuellen Codewert an, den die Authentifizierungs-App basierend auf dem Geheimnis und der aktuellen Zeit berechnet. Die Website kann dieselbe Berechnung durchführen, und wenn die Werte übereinstimmen, kann der Benutzer angemeldet werden.

### TOTP-Algorithmus

Der zeitbasierte Einmalpasswort-Algorithmus (TOTP) ist in {{rfc("6238")}} spezifiziert. Es ist eine Erweiterung des HMAC-basierten Einmalpasswort-Algorithmus (HOTP), der in {{rfc("4226")}} spezifiziert ist.

Der Algorithmus erstellt Einmalcodes, die 6 Ziffern lang sind und nur für eine begrenzte Zeit gültig sind (normalerweise 30 Sekunden). Das bedeutet, dass im Gegensatz zu den anderen OTP-Systemen, die wir beschrieben haben, TOTP eine zeitbasierte Gültigkeit und automatische Ungültigkeit von Natur aus implementiert.

Der geheime Schlüssel ist ein zufälliger Wert, der mindestens 160 Bit lang sein sollte.

Sie sollten ein angesehenes Drittanbieter-Paket verwenden, um TOTP zu implementieren, wie beispielsweise [pyotp](https://pyauth.github.io/pyotp/) für Python oder [otpauth](https://www.npmjs.com/package/otpauth) für Node.

### Das `otpauth` URI-Format

Das `otpauth` URI-Format ist in diesem [IETF-Entwurf](https://www.ietf.org/archive/id/draft-linuxgemini-otpauth-uri-00.html) definiert.

Für TOTP ist die URI folgendermaßen formatiert:

```plain
otpauth://totp/LABEL?secret=MQCHJLS6FJXT2BGQJ6QMG3WCAVUC2HJZ&issuer=My_Website
```

Die `LABEL`-Komponente identifiziert den Benutzer: zum Beispiel könnte es ihr Benutzername sein.

Die URI enthält eine Reihe von Anfragenstring-Parametern, von denen die wichtigsten sind:

- `secret`
  - : Das gemeinsam genutzte Geheimnis, kodiert in [Base32](https://en.wikipedia.org/wiki/Base32).
- `issuer`
  - : Der Name des Anbieters oder Dienstes, mit dem dieses Konto verknüpft ist. Technisch optional, aber dringend empfohlen.

### Authentifizierungs-Apps

Eine große Anzahl von Authentifizierungs-Apps, sowohl proprietär als auch Open Source, unterstützt TOTP. Zum Beispiel: [Ente Auth](https://ente.io/auth/), [2FAS](https://2fas.com) und [Microsoft Authenticator](https://www.microsoft.com/en-US/security/mobile-authenticator-app).

### Sicherung des Geheimnisses

Bei TOTP muss der geheime Schlüssel sowohl auf dem Server als auch auf dem Client sicher gespeichert werden.

Für den Server sind die Überlegungen ähnlich wie für die [Passwortspeicherung](/de/docs/Web/Security/Authentication/Passwords#storing_passwords): Der Server muss TOTP-Geheimnisse so speichern, dass der Angreifer keinen Zugriff darauf hat, selbst wenn er Zugang zur Datenbank des Servers erhält.

Für den Client sollte die Authentifizierungs-App einen gewissen Schutz für den geheimen Schlüssel bieten.

## Stärken und Schwächen

Verglichen mit [Passwörtern](/de/docs/Web/Security/Authentication/Passwords) besteht die größte Stärke von OTP darin, dass der Benutzer nicht in die Erstellung oder das Merken von Geheimnissen involviert ist, sodass OTP nicht anfällig für [Ratespiele](/de/docs/Web/Security/Authentication/Passwords#guessing) oder [Credential Stuffing](/de/docs/Web/Security/Authentication/Passwords#credential_stuffing)-Angriffe ist.

### Schwächen

- SMS- und E-Mail-basierte OTP haben das Risiko, dass ein Angreifer OTP-Codes abfangen könnte, die vom Server gesendet werden, und SMS ist in dieser Hinsicht viel schwächer als E-Mail.

- TOTP ist nicht anfällig für Abfangen, birgt jedoch das Risiko, dass ein Angreifer Zugriff auf das gemeinsame Geheimnis erhält.

- Alle Formen von OTP sind anfällig für [Phishing-Angriffe](/de/docs/Web/Security/Attacks/Phishing#multi-factor_authentication).

Abgesehen von der Sicherheit hat OTP einige Benutzerfreundlichkeitsprobleme:

- SMS- und E-Mail-basierte OTP können umständlich zu verwenden sein, insbesondere wenn es eine erhebliche Verzögerung zwischen dem Senden des Codes durch den Server und dem Empfang durch den Benutzer gibt.
- Bei TOTP ist die Notwendigkeit, eine Authentifizierungs-App zu installieren, eine erhebliche Hürde bei der Anmeldung: aber natürlich, wenn der Benutzer die App bereits für eine andere Seite installiert hat, muss er sie nicht noch einmal installieren, wenn er sich auf Ihrer Seite anmeldet.

## OTP-Empfehlungen

OTP, und insbesondere TOTP, können als {{Glossary("Multi-factor_authentication", "zusätzlicher Authentifizierungsfaktor")}} und zur Bestätigung der Benutzerabsichten nützlich sein, zum Beispiel bei der Durchführung einer Zahlung. Für allgemeine Authentifizierungszwecke ist es besser, [Passkeys](/de/docs/Web/Security/Authentication/Passwords) zu verwenden, die widerstandsfähiger gegen Phishing-Angriffe sind.

Wenn Sie OTP implementieren, sollten Sie folgende Empfehlungen berücksichtigen:

- Bevorzugen Sie TOTP gegenüber E-Mail-basierten oder SMS-basierten OTP und vermeiden Sie insbesondere SMS-basierte OTP.
- Wenn Sie TOTP verwenden:
  - Nutzen Sie eine renommierte Bibliothek zur Generierung von Geheimnissen und OTP-Codes.
  - Speichern Sie das Geheimnis sicher auf dem Server.
