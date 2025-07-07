---
title: WebOTP API
slug: Web/API/WebOTP_API
l10n:
  sourceCommit: 90eafc463fe122c86a64836f4f3953a0bee85be9
---

{{securecontext_header}}{{DefaultAPISidebar("WebOTP API")}}

Die **WebOTP API** bietet eine optimierte Benutzererfahrung für Web-Apps, um zu verifizieren, dass eine Telefonnummer zu einem Benutzer gehört, wenn sie als Anmeldemittel verwendet wird. WebOTP ist eine Erweiterung der [Credential Management API](/de/docs/Web/API/Credential_Management_API).

Die Verifizierung erfolgt in zwei Schritten:

1. Der App-Client fordert ein Einmalpasswort (OTP) an, das aus einer speziell formatierten SMS-Nachricht stammt, die vom App-Server gesendet wird.
2. JavaScript wird verwendet, um das OTP in ein Validierungsformular auf dem App-Client einzugeben, das dann zurück an den Server gesendet wird, um zu überprüfen, ob es mit dem ursprünglich gesendeten OTP übereinstimmt.

## Konzepte und Verwendung

Telefonnummern werden häufig verwendet, um den Benutzer einer App zu identifizieren. Eine SMS wird häufig eingesetzt, um zu überprüfen, dass die Nummer dem Benutzer gehört. Die SMS enthält in der Regel ein OTP, das der Benutzer in ein Formular in der App kopieren und einfügen muss, um zu bestätigen, dass er die Nummer besitzt. Dies ist eine etwas umständliche Benutzererfahrung.

Verwendungszwecke für OTP umfassen:

- Verbesserung der Anmeldungssicherheit durch Verwendung einer Telefonnummer als zusätzlichen Faktor (d.h. für die Zwei-Faktor-Authentifizierung (2FA) oder Multifaktor-Authentifizierung (MFA)).
- Verifizierung sensibler Aktionen wie Zahlungen.

Die WebOTP API ermöglicht es Web-Apps, diesen Validierungsprozess zu beschleunigen, indem das OTP automatisch aus der SMS kopiert und an die App weitergegeben wird, nachdem der Benutzer seine Zustimmung gegeben hat (die meisten nativen Plattformen haben eine entsprechende API).

Beachten Sie, dass ein OTP an die sendende Domain gebunden ist. Dies ist eine nützliche Sicherheitsmaßnahme, um zu überprüfen, dass das OTP aus der richtigen Quelle stammt, was das Risiko von Phishing-Angriffen bei alltäglicher Neuauthentifizierung mindern kann.

### Sicherheitsbedenken bei SMS-OTPs

SMS-OTPs sind nützlich zur Verifizierung von Telefonnummern, und die Verwendung von SMS als zweiter Faktor ist sicherlich besser als gar kein zweiter Faktor. In einigen Regionen werden andere Identifikatoren wie E-Mail-Adressen und Authentifikatoren nicht häufig verwendet, daher sind SMS-OTPs sehr gebräuchlich.

Allerdings sind SMS nicht sehr sicher. Angreifer können eine SMS fälschen und die Telefonnummer einer Person kapern. Anbieter können Telefonnummern nach Schließung eines Kontos an neue Benutzer weitergeben.

Daher wird empfohlen, eine stärkere Form der Authentifizierung zu verwenden, wenn möglich, wie beispielsweise eine auf der [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) basierende Lösung, die ein Passwort und einen Sicherheitsschlüssel oder einen Passkey umfasst.

## Wie funktioniert die WebOTP API?

Der Prozess funktioniert wie folgt:

1. Wenn eine Telefonnummernverifizierung erforderlich ist, bittet ein App-Client den Benutzer, seine Telefonnummer in ein Formular einzugeben, das dann an den App-Server übermittelt wird.
2. Der App-Client ruft dann [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) mit einer `otp`-Option und dem `transport`-Typ `"sms"` auf. Dies löst eine Anfrage nach einem OTP aus dem zugrunde liegenden System aus, dessen Quelle eine [speziell formatierte SMS-Nachricht](#format_der_sms-nachricht) (die das OTP und die Domain der App enthält) ist, die vom App-Server empfangen wird. Der `get()`-Aufruf basiert auf {{jsxref("Promise")}} und wartet, bis die SMS-Nachricht empfangen wird.
3. Der App-Server sendet die SMS-Nachricht an die angegebene Telefonnummer. Dies muss direkt nach Schritt 2 geschehen.
4. Wenn die SMS auf dem Gerät empfangen wird und die Domain der App enthält, fragt der Browser den Benutzer, ob er zustimmt, dass das OTP abgerufen/verwendet wird. Chrome zeigt beispielsweise ein Dialogfeld an, das um Erlaubnis bittet, das OTP aus der SMS abzurufen; andere Browser können es anders handhaben. Wenn der Benutzer zustimmt, wird der `get()`-Aufruf mit einem [`OTPCredential`](/de/docs/Web/API/OTPCredential)-Objekt erfüllt, das das OTP enthält.
5. Dann können Sie das OTP auf beliebige Weise verwenden. Die typische Verwendung wäre, es als Wert des Validierungsformulars im App-Client zu setzen und dann das Formular einzureichen, um den Prozess so nahtlos wie möglich zu gestalten.
6. Der App-Server wird dann überprüfen, ob das zurückgesendete OTP mit dem ursprünglich in der SMS gesendeten OTP übereinstimmt, und falls ja, den Prozess abschließen (zum Beispiel den Benutzer anmelden).

### Format der SMS-Nachricht

Eine typische SMS-Nachricht sieht wie folgt aus:

```plain
Your verification code is 123456.

@www.example.com #123456
```

- Die erste Zeile und die zweite leere Zeile sind optional und dienen der Lesbarkeit für den Menschen.
- Die letzte Zeile ist obligatorisch. Sie muss die letzte Zeile sein, wenn andere vorhanden sind, und muss bestehen aus:
  - Dem Domain-Teil der URL der Website, die die API aufgerufen hat, vorangestellt von einem `@`.
  - Gefolgt von einem Leerzeichen.
  - Gefolgt vom OTP, vorangestellt von einem Rautezeichen (`#`).

> [!NOTE]
> Der angegebene Domain-Wert darf kein URL-Schema, keinen Port oder andere URL-Funktionen enthalten, die oben nicht gezeigt sind.

Wenn die `get()`-Methode von einer in einem {{htmlelement("iframe")}} eingebetteten Drittanbieter-Website aufgerufen wird, sollte die SMS-Struktur folgendermaßen aussehen:

```plain
Your verification code is 123456.

@top-level.example.com #123456 @embedded.com
```

In diesem Fall muss die letzte Zeile bestehen aus:

- Dem Domain-Teil der obersten Ebene, vorangestellt von einem `@`.
- Gefolgt von einem Leerzeichen.
- Gefolgt vom OTP, vorangestellt von einem Rautezeichen (`#`).
- Gefolgt von einem Leerzeichen.
- Gefolgt vom Domain-Teil der eingebetteten Domain, vorangestellt von einem `@`.

## Kontrolle des Zugriffs auf die API

Die Verfügbarkeit von WebOTP kann mit einer [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) gesteuert werden, die eine {{httpheader("Permissions-Policy/otp-credentials", "otp-credentials")}}-Direktive angibt. Diese Direktive hat einen Standard-Wert von `"self"`, was bedeutet, dass diese Methoden standardmäßig in Top-Level-Dokumentkontexten verwendet werden können.

Sie könnten eine Direktive angeben, die die Verwendung von WebOTP in einem spezifischen Cross-Origin-Domain erlaubt (d.h. innerhalb eines {{htmlelement("iframe")}}) wie folgt:

```http
Permissions-Policy: otp-credentials=(self "https://embedded.com")
```

Oder Sie könnten es direkt im `<iframe>` so angeben:

```html
<iframe src="https://embedded.com/..." allow="otp-credentials"> ... </iframe>
```

> [!NOTE]
> Wenn eine Richtlinie die Verwendung von WebOTP `get()` verbietet, wird {{jsxref("Promise", "promises")}}, die davon zurückgegeben wird, mit einem `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException) abgelehnt.

## Schnittstellen

- [`OTPCredential`](/de/docs/Web/API/OTPCredential)
  - : Wird zurückgegeben, wenn ein WebOTP `get()`-Aufruf erfüllt wird; enthält eine `code`-Eigenschaft, die das abgerufene OTP enthält.

### Erweiterungen zu anderen Schnittstellen

- [`CredentialsContainer.get()`](/de/docs/Web/API/CredentialsContainer/get), die `otp`-Option
  - : Der Aufruf von `get()` mit einer `otp`-Option weist den Benutzeragenten an, zu versuchen, ein OTP aus der SMS-App des zugrunde liegenden Systems abzurufen.

## Beispiele

In diesem Beispiel, wenn eine SMS-Nachricht eintrifft und der Benutzer die Erlaubnis erteilt, wird ein [`OTPCredential`](/de/docs/Web/API/OTPCredential)-Objekt mit einem OTP zurückgegeben. Dieses Passwort wird dann in das Verifizierungsformularfeld vorausgefüllt und das Formular eingereicht.

[Probieren Sie diese Demo mit einem Telefon aus](https://chrome.dev/web-otp-demo/).

Das Formularfeld enthält ein [`autocomplete`](/de/docs/Web/HTML/Reference/Attributes/autocomplete)-Attribut mit dem Wert `one-time-code`. Dies ist nicht erforderlich, damit die WebOTP API funktioniert, aber es lohnt sich, es zu inkludieren. Infolgedessen wird Safari den Benutzer auffordern, dieses Feld mit dem OTP automatisch auszufüllen, wenn eine korrekt formatierte SMS empfangen wird, obwohl die WebOTP API in Safari nicht vollständig unterstützt wird.

```html
<input type="text" autocomplete="one-time-code" inputmode="numeric" />
```

Das JavaScript ist wie folgt:

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

Eine weitere gute Verwendung für den [`AbortController`](/de/docs/Web/API/AbortController) ist es, die `get()`-Anfrage nach einer bestimmten Zeitspanne abzubrechen:

```js
setTimeout(() => {
  // abort after 30 seconds
  ac.abort();
}, 30 * 1000);
```

Wenn der Benutzer abgelenkt wird oder woanders hin navigiert, ist es gut, die Anfrage abzubrechen, damit ihm keine Erlaubnisaufforderung mehr angezeigt wird, die für ihn nicht mehr relevant ist.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Telefonnummern im Web mit WebOTP verifizieren](https://developer.chrome.com/docs/identity/web-apis/web-otp) auf developer.chrome.com (2023)
- [OTP-Formulare innerhalb von Cross-Origin iframes mit WebOTP API ausfüllen](https://web.dev/articles/web-otp-iframe)
