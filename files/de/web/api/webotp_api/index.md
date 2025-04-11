---
title: WebOTP API
slug: Web/API/WebOTP_API
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{securecontext_header}}{{DefaultAPISidebar("WebOTP API")}}

Die **WebOTP-API** bietet eine vereinfachte Benutzererfahrung für Webanwendungen, um zu überprüfen, ob eine Telefonnummer zu einem Benutzer gehört, wenn diese als Anmeldefaktor verwendet wird. WebOTP ist eine Erweiterung der [Credential Management-API](/de/docs/Web/API/Credential_Management_API).

Die Verifizierung erfolgt in einem zweistufigen Prozess:

1. Der App-Client fordert ein Einmalpasswort (OTP) an, das aus einer speziell formatierten SMS-Nachricht stammt, die vom App-Server gesendet wird.
2. JavaScript wird verwendet, um das OTP in ein Validierungsformular auf dem App-Client einzugeben und an den Server zurückzusenden, um zu überprüfen, ob es mit dem ursprünglich in der SMS gesendeten übereinstimmt.

## Konzepte und Verwendung

Telefonnummern werden häufig verwendet, um den Benutzer einer App zu identifizieren. Eine SMS wird häufig eingesetzt, um zu überprüfen, dass die Nummer dem Benutzer gehört. Die SMS enthält in der Regel ein OTP, das der Benutzer kopieren und in ein Formular in der App einfügen muss, um zu bestätigen, dass die Nummer ihm gehört. Dies ist eine eher umständliche Benutzererfahrung.

Verwendungsfälle für OTPs umfassen:

- Verbesserung der Anmeldesicherheit, indem eine Telefonnummer als zusätzlicher Faktor verwendet wird (d.h. für Zwei-Faktor-Authentifizierung (2FA) oder Multi-Faktor-Authentifizierung (MFA)).
- Verifizierung sensibler Aktionen wie Zahlungen.

Die WebOTP-API ermöglicht es Webanwendungen, diesen Validierungsprozess zu beschleunigen, indem das OTP aus der SMS kopiert und automatisch an die App weitergegeben wird, nachdem der Benutzer sein Einverständnis gegeben hat (die meisten nativen Plattformen haben eine äquivalente API).

Beachten Sie, dass ein OTP an die sendende Domain gebunden ist. Dies ist eine nützliche Sicherheitsvorgabe, um zu verifizieren, dass das OTP von der richtigen Quelle kommt, was das Phishing-Risiko bei alltäglichen Reauthentifizierungen mindern kann.

### Sicherheitsbedenken bei SMS-OTPs

SMS-OTPs sind nützlich für die Verifizierung von Telefonnummern und die Verwendung von SMS als zweiten Faktor ist sicherlich besser, als keinen zweiten Faktor zu verwenden. In einigen Regionen sind andere Identifikatoren wie E-Mail-Adressen und Authentifikatoren nicht weit verbreitet, daher sind SMS-OTPs sehr häufig.

Allerdings sind SMS nicht besonders sicher. Angreifer können eine SMS fälschen und die Telefonnummer einer Person kapern. Netzbetreiber können Telefonnummern an neue Nutzer vergeben, nachdem ein Konto geschlossen wurde.

Es wird daher empfohlen, wenn möglich eine stärkere Form der Authentifizierung zu verwenden, wie z.B. eine Lösung, die auf der [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) basiert und ein Passwort sowie einen Sicherheitsschlüssel oder einen Passkey umfasst.

## Wie funktioniert die WebOTP-API?

Der Prozess funktioniert folgendermaßen:

1. An dem Punkt, an dem die Telefonnummer verifiziert werden muss, wird der Benutzer von einem App-Client gebeten, seine Telefonnummer in ein Formular einzugeben, das dann an den App-Server übermittelt wird.
2. Der App-Client ruft dann [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) mit einer `otp`-Option auf, die einen `transport`-Typ `"sms"` angibt. Dies löst eine Anfrage für ein OTP vom zugrunde liegenden System aus, dessen Quelle eine [speziell formatierte SMS-Nachricht](#format_der_sms-nachricht) (die das OTP und die Domain der App enthält) ist, die vom App-Server empfangen wurde. Der `get()`-Aufruf basiert auf einem {{jsxref("Promise")}} und wartet darauf, dass die SMS-Nachricht empfangen wird.
3. Der App-Server sendet die SMS-Nachricht an die angegebene Telefonnummer. Dies muss unmittelbar nach Schritt 2 geschehen.
4. Wenn die SMS auf dem Gerät empfangen wird und sie die Domain der App enthält, fragt der Browser den Benutzer, ob er der Nutzung des OTP zustimmt. Chrome zeigt beispielsweise ein Dialogfeld an, in dem die Erlaubnis zur Verwendung des OTP aus der SMS erfragt wird; andere Browser könnten es anders handhaben. Wenn der Benutzer zustimmt, wird der `get()`-Aufruf mit einem [`OTPCredential`](/de/docs/Web/API/OTPCredential)-Objekt erfüllt, das das OTP enthält.
5. Sie können das OTP dann nach Belieben verwenden. Die typische Verwendung wäre, es als Wert des Validierungsformulars auf dem App-Client zu setzen und dann das Formular abzuschicken, um den Prozess so nahtlos wie möglich zu gestalten.
6. Der App-Server überprüft dann, ob das zurückgesendete OTP mit dem übereinstimmt, das ursprünglich in der SMS gesendet wurde, und schließt den Prozess ab (z.B. Anmelden des Benutzers).

### Format der SMS-Nachricht

Eine typische SMS-Nachricht sieht folgendermaßen aus:

```plain
Your verification code is 123456.

@www.example.com #123456
```

- Die erste Zeile und die zweite Leerzeile sind optional und dienen der Lesbarkeit für Menschen.
- Die letzte Zeile ist zwingend erforderlich. Sie muss die letzte Zeile sein, wenn andere vorhanden sind, und muss bestehen aus:
  - Dem Domain-Teil der URL der Website, die die API aufgerufen hat, vorangestellt durch ein `@`.
  - Gefolgt von einem Leerzeichen.
  - Gefolgt vom OTP, vorangestellt durch ein Nummernzeichen (`#`).

> [!NOTE]
> Der angegebene Domain-Wert darf kein URL-Schema, keinen Port oder andere nicht oben gezeigte URL-Merkmale enthalten.

Wenn die `get()`-Methode von einer eingebetteten Drittanbieter-Site in einem {{htmlelement("iframe")}} aufgerufen wird, sollte die SMS-Struktur folgendermaßen sein:

```plain
Your verification code is 123456.

@top-level.example.com #123456 @embedded.com
```

In diesem Fall muss die letzte Zeile bestehen aus:

- Dem Domain-Teil der obersten Domain, vorangestellt durch ein `@`.
- Gefolgt von einem Leerzeichen.
- Gefolgt vom OTP, vorangestellt durch ein Nummernzeichen (`#`).
- Gefolgt von einem Leerzeichen.
- Gefolgt vom Domain-Teil der eingebetteten Domain, vorangestellt durch ein `@`.

## Steuerung des Zugangs zur API

Die Verfügbarkeit von WebOTP kann durch die Verwendung einer [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) gesteuert werden, die eine {{httpheader("Permissions-Policy/otp-credentials", "otp-credentials")}}-Direktive spezifiziert. Diese Direktive hat einen Standard-Wert von `"self"`, was bedeutet, dass diese Methoden standardmäßig in obersten Dokumentkontexten verwendet werden können.

Sie könnten eine Direktive festlegen, die die Verwendung von WebOTP in einer bestimmten Cross-Origin-Domain erlaubt (d.h. innerhalb eines {{htmlelement("iframe")}}), wie folgt:

```http
Permissions-Policy: otp-credentials=(self "https://embedded.com")
```

Oder Sie könnten es direkt auf dem `<iframe>` wie folgt angeben:

```html
<iframe src="https://embedded.com/..." allow="otp-credentials"> ... </iframe>
```

> [!NOTE]
> Wo eine Richtlinie die Nutzung von WebOTP `get()` verbietet, werden die von ihm zurückgegebenen {{jsxref("Promise", "promises")}} mit einem `SecurityError`[`DOMException`](/de/docs/Web/API/DOMException) abgelehnt.

## Schnittstellen

- [`OTPCredential`](/de/docs/Web/API/OTPCredential)
  - : Wird zurückgegeben, wenn ein WebOTP `get()`-Aufruf erfüllt wird; enthält eine `code`-Eigenschaft, die das abgerufene OTP enthält.

### Erweiterungen zu anderen Schnittstellen

- [`CredentialsContainer.get()`](/de/docs/Web/API/CredentialsContainer/get), die `otp`-Option
  - : Der Aufruf von `get()` mit einer `otp`-Option weist den Benutzeragenten an, zu versuchen, ein OTP von der SMS-App des zugrunde liegenden Systems abzurufen.

## Beispiele

In diesem Beispiel wird beim Eintreffen einer SMS-Nachricht und der Erlaubnis des Benutzers ein [`OTPCredential`](/de/docs/Web/API/OTPCredential)-Objekt mit einem OTP zurückgegeben. Dieses Passwort wird dann im Prüfungsformularfeld vorausgefüllt und das Formular abgeschickt.

[Probieren Sie diese Demo mit einem Telefon](https://web-otp.glitch.me/) aus.

Das Formularfeld enthält ein [`autocomplete`](/de/docs/Web/HTML/Reference/Attributes/autocomplete)-Attribut mit dem Wert `one-time-code`. Dies ist nicht notwendig, damit die WebOTP-API funktioniert, aber es lohnt sich, es einzuschließen. Infolgedessen wird Safari den Benutzer auffordern, dieses Feld mit dem OTP automatisch auszufüllen, wenn eine korrekt formatierte SMS empfangen wird, obwohl die WebOTP-API in Safari nicht vollständig unterstützt wird.

```html
<input type="text" autocomplete="one-time-code" inputmode="numeric" />
```

Das JavaScript sieht so aus:

```js
// Detect feature support via OTPCredential availability
if ("OTPCredential" in window) {
  window.addEventListener("DOMContentLoaded", (e) => {
    const input = document.querySelector('input[autocomplete="one-time-code"]');
    if (!input) return;
    // Set up an AbortController to use with the OTP request
    const ac = new AbortController();
    const form = input.closest("form");
    if (form) {
      // Abort the OTP request if the user attempts to submit the form manually
      form.addEventListener("submit", (e) => {
        ac.abort();
      });
    }
    // Request the OTP via get()
    navigator.credentials
      .get({
        otp: { transport: ["sms"] },
        signal: ac.signal,
      })
      .then((otp) => {
        // When the OTP is received by the app client, enter it into the form
        // input and submit the form automatically
        input.value = otp.code;
        if (form) form.submit();
      })
      .catch((err) => {
        console.error(err);
      });
  });
}
```

Ein weiterer guter Nutzen für den [`AbortController`](/de/docs/Web/API/AbortController) besteht darin, die `get()`-Anfrage nach einer bestimmten Zeitspanne abzubrechen:

```js
setTimeout(() => {
  // abort after 30 seconds
  ac.abort();
}, 30 * 1000);
```

Wenn der Benutzer abgelenkt wird oder woanders hin navigiert, ist es gut, die Anfrage abzubrechen, damit er nicht mit einer Erlaubnisanfrage konfrontiert wird, die für ihn nicht mehr relevant ist.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Verifizieren von Telefonnummern im Web mit WebOTP](https://developer.chrome.com/docs/identity/web-apis/web-otp) auf developer.chrome.com (2023)
- [Formulare mit OTP in Cross-Origin-Iframes mit der WebOTP-API ausfüllen](https://web.dev/articles/web-otp-iframe)
