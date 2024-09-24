---
title: WebOTP-API
slug: Web/API/WebOTP_API
l10n:
  sourceCommit: 44c4ec928281dc2d7c5ea42b7d2c74a2013f16ac
---

{{securecontext_header}}{{DefaultAPISidebar("WebOTP API")}}

Die **WebOTP-API** bietet ein nahtloses Benutzererlebnis für Webanwendungen, um zu überprüfen, dass eine Telefonnummer einem Benutzer gehört, wenn diese als Anmeldungsfaktor verwendet wird. WebOTP ist eine Erweiterung der [Credential Management API](/de/docs/Web/API/Credential_Management_API).

Die Verifizierung erfolgt in einem zweistufigen Prozess:

1. Der App-Client fordert ein Einmalpasswort (OTP) an, das aus einer speziell formatierten SMS-Nachricht, die vom App-Server gesendet wird, bezogen wird.
2. JavaScript wird verwendet, um das OTP in ein Validierungsformular im App-Client einzugeben und es wird an den Server zurückgesendet, um zu überprüfen, ob es mit dem ursprünglich in der SMS gesendeten OTP übereinstimmt.

## Konzepte und Nutzung

Telefonnummern werden oft als Mittel verwendet, um den Benutzer einer App zu identifizieren. Eine SMS wird häufig eingesetzt, um zu verifizieren, dass die Nummer dem Benutzer gehört. Die SMS enthält typischerweise ein OTP, das der Benutzer kopieren und in ein Formular in der App einfügen muss, um zu bestätigen, dass er die Nummer besitzt. Dies ist ein etwas umständliches Benutzererlebnis.

OTP-Anwendungsfälle umfassen:

- Verbesserung der Anmeldesicherheit durch Verwendung einer Telefonnummer als zusätzlichen Faktor (z. B. für Zwei-Faktor-Authentifizierung (2FA) oder Multi-Faktor-Authentifizierung (MFA)).
- Verifizierung sensibler Aktionen wie Zahlungen.

Die WebOTP-API ermöglicht es Webanwendungen, diesen Validierungsprozess zu beschleunigen, indem das OTP aus der SMS kopiert und nach der Zustimmung des Benutzers automatisch an die App übermittelt wird (die meisten nativen Plattformen haben eine entsprechende API).

Beachten Sie, dass ein OTP an die sendende Domain gebunden ist. Dies ist eine nützliche Sicherheitsbeschränkung zur Überprüfung, dass das OTP aus der richtigen Quelle stammt, was das Risiko von Phishing-Angriffen bei alltäglichen Wiederautorisierungen verringern kann.

### Sicherheitsbedenken bei SMS-OTPs

SMS-OTPs sind nützlich, um Telefonnummern zu verifizieren, und die Verwendung von SMS als zweiten Faktor ist sicherlich besser, als keinen zweiten Faktor zu haben. In einigen Regionen sind andere Identifikatoren wie E-Mail-Adressen und Authentifikatoren nicht weit verbreitet, sodass SMS-OTPs sehr häufig sind.

Jedoch sind SMS-Nachrichten nicht sehr sicher. Angreifer können eine SMS fälschen und die Telefonnummer einer Person kapern. Anbieter können Telefonnummern nach Schließung eines Kontos an neue Benutzer weitergeben.

Es wird daher empfohlen, eine stärkere Form der Authentifizierung zu nutzen, wenn möglich, beispielsweise eine auf der [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) basierende Lösung mit Passwörtern und Sicherheitsschlüsseln oder einem Passkey.

## Wie funktioniert die WebOTP-API?

Der Prozess funktioniert wie folgt:

1. An dem Punkt, an dem die Telefonnummernüberprüfung erforderlich ist, wird ein Benutzer von einem App-Client gebeten, seine Telefonnummer in ein Formular einzugeben, das dann an den App-Server übermittelt wird.
2. Der App-Client ruft dann {{domxref("CredentialsContainer.get", "navigator.credentials.get()")}} mit einer `otp`-Option auf, die einen `transport`-Typ von `"sms"` angibt. Dies löst eine Anfrage nach einem OTP vom zugrunde liegenden System aus, dessen Quelle eine [speziell formatierte SMS-Nachricht](#sms-nachrichtenformat) ist (die das OTP und die Domain der App enthält), die vom App-Server empfangen wird. Der `get()`-Aufruf ist {{jsxref("Promise")}}-basiert und wartet darauf, dass die SMS-Nachricht empfangen wird.
3. Der App-Server sendet die SMS-Nachricht an die angegebene Telefonnummer. Dies muss unmittelbar nach Schritt 2 geschehen.
4. Wenn die SMS auf dem Gerät empfangen wird und sie die Domain der App enthält, fragt der Browser den Benutzer, ob er zustimmt, dass das OTP abgerufen/verwendet wird. Chrome beispielsweise zeigt einen Dialog an, der um Erlaubnis bittet, das OTP aus der SMS abzurufen; andere Browser könnten es anders handhaben. Wenn der Benutzer zustimmt, wird der `get()`-Aufruf mit einem {{domxref("OTPCredential")}}-Objekt erfüllt, das das OTP enthält.
5. Sie können dann das OTP auf beliebige Weise verwenden. Eine typische Verwendung wäre, es als Wert des Validierungsformulars im App-Client festzulegen und dann das Formular abzusenden, um den Prozess so nahtlos wie möglich zu gestalten.
6. Der App-Server überprüft dann, ob das zurückgesendete OTP mit dem ursprünglich in der SMS gesendeten übereinstimmt, und schließt den Prozess ab (zum Beispiel, indem er den Benutzer anmeldet).

### SMS-Nachrichtenformat

Eine typische SMS-Nachricht sieht folgendermaßen aus:

```plain
Your verification code is 123456.

@www.example.com #123456
```

- Die erste Zeile und die zweite leere Zeile sind optional und dienen der menschlichen Lesbarkeit.
- Die letzte Zeile ist obligatorisch. Sie muss die letzte Zeile sein, wenn andere vorhanden sind, und muss bestehen aus:
  - Dem Domain-Teil der URL der Website, die die API aufgerufen hat, vorausgehend mit einem `@`.
  - Gefolgt von einem Leerzeichen.
  - Gefolgt vom OTP, vorausgehend mit einem Pfundzeichen (`#`).

> [!NOTE]
> Der angegebene Domain-Wert darf kein URL-Schema, keinen Port oder andere URL-Features enthalten, die oben nicht gezeigt wurden.

Wenn die `get()`-Methode von einer Drittanbieter-Website aufgerufen wird, die in ein {{htmlelement("iframe")}} eingebettet ist, sollte die SMS-Struktur wie folgt sein:

```plain
Your verification code is 123456.

@top-level.example.com #123456 @embedded.com
```

In diesem Fall muss die letzte Zeile bestehen aus:

- Dem Domain-Teil der obersten Ebene, vorausgehend mit einem `@`.
- Gefolgt von einem Leerzeichen.
- Gefolgt vom OTP, vorausgehend mit einem Pfundzeichen (`#`).
- Gefolgt von einem Leerzeichen.
- Gefolgt vom Domain-Teil der eingebetteten Domain, vorausgehend mit einem `@`.

## Zugriffskontrolle für die API

Die Verfügbarkeit von WebOTP kann mit einer [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy) gesteuert werden, die eine {{httpheader("Permissions-Policy/otp-credentials", "otp-credentials")}}-Richtlinie spezifiziert. Diese Richtlinie hat einen Standard-Wert von `"self"`, was bedeutet, dass diese Methoden standardmäßig in Kontexten von Dokumenten auf oberster Ebene verwendet werden können.

Sie könnten eine Richtlinie angeben, die die Nutzung von WebOTP in einer bestimmten domainübergreifenden Domain erlaubt (z. B. in einem {{htmlelement("iframe")}}) wie folgt:

```http
Permissions-Policy: otp-credentials=(self "https://embedded.com")
```

Oder Sie könnten es direkt im `<iframe>` angeben wie folgt:

```html
<iframe src="https://embedded.com/..." allow="otp-credentials"> ... </iframe>
```

> [!NOTE]
> Wenn eine Richtlinie die Nutzung von WebOTP `get()` verbietet, wird die von der Methode zurückgegebene {{jsxref("Promise", "Promise")}} mit einem `SecurityError` {{domxref("DOMException")}} abgelehnt.

## Schnittstellen

- {{domxref("OTPCredential")}}
  - : Wird zurückgegeben, wenn ein WebOTP-`get()`-Aufruf erfüllt wird; enthält eine `code`-Eigenschaft, die das abgerufene OTP enthält.

### Erweiterungen zu anderen Schnittstellen

- {{domxref("CredentialsContainer.get()")}}, die `otp`-Option
  - : Ein Aufruf von `get()` mit einer `otp`-Option weist den Benutzeragenten an, zu versuchen, ein OTP vom SMS-System des zugrundeliegenden Systems abzurufen.

## Beispiele

In diesem Beispiel, wenn eine SMS-Nachricht eingeht und der Benutzer die Erlaubnis erteilt, wird ein {{domxref("OTPCredential")}}-Objekt mit einem OTP zurückgegeben. Dieses Passwort wird dann in das Verifizierungsformularfeld vorausgefüllt und das Formular wird übermittelt.

[Probieren Sie diese Demo mit einem Telefon aus](https://web-otp.glitch.me/).

Das Formularfeld enthält ein [`autocomplete`](/de/docs/Web/HTML/Attributes/autocomplete)-Attribut mit dem Wert `one-time-code`. Dies ist nicht erforderlich, damit die WebOTP-API funktioniert, aber es lohnt sich, es einzuschließen. Dadurch wird Safari den Benutzer auffordern, dieses Feld mit dem OTP auszufüllen, wenn eine korrekt formatierte SMS empfangen wird, obwohl die WebOTP-API in Safari nicht vollständig unterstützt wird.

```html
<input type="text" autocomplete="one-time-code" inputmode="numeric" />
```

JavaScript sieht folgendermaßen aus:

```js
// Unterstützungsfähigkeit über OTPCredential-Verfügbarkeit überprüfen
if ("OTPCredential" in window) {
  window.addEventListener("DOMContentLoaded", (e) => {
    const input = document.querySelector('input[autocomplete="one-time-code"]');
    if (!input) return;
    // Einen AbortController einrichten, um ihn mit der OTP-Anforderung zu verwenden
    const ac = new AbortController();
    const form = input.closest("form");
    if (form) {
      // Die OTP-Anforderung abbrechen, wenn der Benutzer versucht, das Formular manuell zu übermitteln
      form.addEventListener("submit", (e) => {
        ac.abort();
      });
    }
    // Das OTP über get() anfordern
    navigator.credentials
      .get({
        otp: { transport: ["sms"] },
        signal: ac.signal,
      })
      .then((otp) => {
        // Wenn das OTP vom App-Client empfangen wird, in das Formular eingeben
        // und das Formular automatisch absenden
        input.value = otp.code;
        if (form) form.submit();
      })
      .catch((err) => {
        console.error(err);
      });
  });
}
```

Ein weiterer guter Verwendungszweck für den {{domxref("AbortController")}} ist das Abbrechen der `get()`-Anforderung nach einer bestimmten Zeitspanne:

```js
setTimeout(() => {
  // nach 30 Sekunden abbrechen
  ac.abort();
}, 30 * 1000);
```

Wenn der Benutzer abgelenkt wird oder woanders hin navigiert, ist es gut, die Anfrage abzubrechen, damit er nicht mit einer Berechtigungsaufforderung konfrontiert wird, die für ihn nicht mehr relevant ist.

## Spezifikationen

{{Specifications}}

## Weitere Informationen

- [Telefonnummern im Web mit WebOTP verifizieren](https://developer.chrome.com/docs/identity/web-apis/web-otp) auf developer.chrome.com (2023)
- [OTP-Formulare innerhalb von domainübergreifenden iframes mit WebOTP API ausfüllen](https://web.dev/articles/web-otp-iframe)
