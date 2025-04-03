---
title: WebOTP API
slug: Web/API/WebOTP_API
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{securecontext_header}}{{DefaultAPISidebar("WebOTP API")}}

Die **WebOTP API** bietet eine optimierte Benutzererfahrung für Webanwendungen, um zu überprüfen, ob eine Telefonnummer zu einem Nutzer gehört, wenn diese als Anmeldefaktor verwendet wird. WebOTP ist eine Erweiterung der [Credential Management API](/de/docs/Web/API/Credential_Management_API).

Die Verifizierung erfolgt in einem zweistufigen Prozess:

1. Der App-Client fordert ein Einmalpasswort (OTP) an, das aus einer speziell formatierten SMS-Nachricht stammt, die vom App-Server gesendet wird.
2. JavaScript wird verwendet, um das OTP in ein Validierungsformular im App-Client einzugeben, das dann an den Server zurückgesendet wird, um zu überprüfen, ob es mit dem in der SMS ursprünglich gesendeten übereinstimmt.

## Konzepte und Nutzung

Telefonnummern werden häufig verwendet, um den Nutzer einer App zu identifizieren. Oft wird eine SMS eingesetzt, um zu überprüfen, ob die Nummer dem Nutzer gehört. Die SMS enthält typischerweise ein OTP, das der Nutzer kopieren und in ein Formular in der App einfügen muss, um zu bestätigen, dass er die Nummer besitzt. Dies ist eine etwas umständliche Benutzererfahrung.

Anwendungsfälle für OTP umfassen:

- Verbesserung der Anmeldesicherheit durch die Verwendung einer Telefonnummer als zusätzlichen Faktor (z.B. für Zwei-Faktor-Authentifizierung (2FA) oder Multfaktor-Authentifizierung (MFA)).
- Verifizierung sensibler Aktionen wie Zahlungen.

Die WebOTP API ermöglicht es Webanwendungen, diesen Validierungsprozess zu beschleunigen, indem das OTP automatisch aus der SMS kopiert und an die App weitergegeben wird, nachdem der Nutzer sein Einverständnis gegeben hat (die meisten nativen Plattformen haben eine entsprechende API).

Beachten Sie, dass ein OTP an die sendende Domain gebunden ist. Dies ist eine nützliche Sicherheitsbeschränkung, um zu überprüfen, dass das OTP aus der richtigen Quelle stammt, was das Risiko von Phishing-Angriffen während der alltäglichen Re-Authentifizierung verringern kann.

### Sicherheitsbedenken bei SMS-OTPs

SMS-OTPs sind nützlich zur Verifizierung von Telefonnummern, und die Verwendung von SMS als zweiten Faktor ist sicherlich besser als kein zweiter Faktor. In einigen Regionen sind andere Kennungen wie E-Mail-Adressen und Authentifikatoren nicht weit verbreitet, daher sind SMS-OTPs sehr gebräuchlich.

Allerdings sind SMS nicht so sicher. Angreifer können eine SMS fälschen und die Telefonnummer einer Person kapern. Netzbetreiber können Telefonnummern an neue Nutzer weitergeben, nachdem ein Account geschlossen wurde.

Es wird daher empfohlen, eine stärkere Authentifizierungsform zu verwenden, wenn möglich, z.B. eine auf der [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) basierende Lösung, die ein Passwort und einen Sicherheitsschlüssel oder einen Passkey umfasst.

## Wie funktioniert die WebOTP API?

Der Prozess funktioniert folgendermaßen:

1. In dem Moment, in dem eine Telefonnummern-Verifizierung erforderlich ist, wird ein Nutzer vom App-Client gebeten, ihre Telefonnummer in ein Formular einzugeben, das dann an den App-Server gesendet wird.
2. Der App-Client ruft dann [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) mit einer `otp`-Option auf, die einen `transport`-Typ von `"sms"` angibt. Dies löst eine Anfrage nach einem OTP aus dem zugrunde liegenden System aus, dessen Quelle eine [speziell formatierte SMS-Nachricht](#sms-nachrichtenformat) (die das OTP und die Domain der App enthält) ist, die vom App-Server empfangen wurde. Der `get()`-Aufruf ist {{jsxref("Promise")}}-basiert und wartet darauf, dass die SMS-Nachricht empfangen wird.
3. Der App-Server sendet die SMS-Nachricht an die angegebene Telefonnummer. Dies muss direkt nach Schritt 2 geschehen.
4. Wenn die SMS auf dem Gerät empfangen wird und sie die Domain der App enthält, fragt der Browser den Nutzer, ob er zustimmt, dass das OTP abgerufen/verwendet wird. Chrome zeigt beispielsweise ein Dialogfeld an, das um Erlaubnis bittet, das OTP aus der SMS abzurufen; andere Browser könnten dies anders handhaben. Wenn der Nutzer zustimmt, wird der `get()`-Aufruf mit einem [`OTPCredential`](/de/docs/Web/API/OTPCredential)-Objekt erfüllt, das das OTP enthält.
5. Sie können das OTP dann nach Belieben verwenden. Eine typische Nutzung wäre, es als Wert des Validierungsformulars im App-Client festzulegen und dann das Formular abzuschicken, um den Prozess so nahtlos wie möglich zu gestalten.
6. Der App-Server überprüft dann, ob das an ihn zurückgesendete OTP mit dem ursprünglich in der SMS gesendeten übereinstimmt, und wenn dies der Fall ist, wird der Prozess abgeschlossen (beispielsweise wird der Nutzer angemeldet).

### SMS-Nachrichtenformat

Eine typische SMS-Nachricht sieht folgendermaßen aus:

```plain
Your verification code is 123456.

@www.example.com #123456
```

- Die erste Zeile und die zweite leere Zeile sind optional und dienen der menschlichen Lesbarkeit.
- Die letzte Zeile ist obligatorisch. Sie muss die letzte Zeile sein, wenn weitere vorhanden sind, und muss bestehen aus:
  - Dem Domain-Teil der URL der Website, die die API aufgerufen hat, vorangestellt von einem `@`.
  - Gefolgt von einem Leerzeichen.
  - Gefolgt von dem OTP, vorangestellt von einem Doppelkreuz (`#`).

> [!NOTE]
> Der angegebene Domain-Wert darf kein URL-Schema, keinen Port oder andere nicht oben gezeigte URL-Features enthalten.

Wenn die `get()`-Methode von einer eingebetteten Drittanbieterseite in einem {{htmlelement("iframe")}} aufgerufen wird, sollte die SMS-Struktur sein:

```plain
Your verification code is 123456.

@top-level.example.com #123456 @embedded.com
```

In diesem Fall muss die letzte Zeile bestehen aus:

- Dem Domain-Teil der Top-Level-Domain, vorangestellt von einem `@`.
- Gefolgt von einem Leerzeichen.
- Gefolgt von dem OTP, vorangestellt von einem Doppelkreuz (`#`).
- Gefolgt von einem Leerzeichen.
- Gefolgt von dem Domain-Teil der eingebetteten Domain, vorangestellt von einem `@`.

## Kontrolle des Zugriffs auf die API

Die Verfügbarkeit von WebOTP kann mit einer [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) gesteuert werden, die eine {{httpheader("Permissions-Policy/otp-credentials", "otp-credentials")}}-Richtlinie angibt. Diese Richtlinie hat einen Standard-zulassen-Wert von `"self"`, was bedeutet, dass diese Methoden standardmäßig in obersten Dokumentkontexten verwendet werden können.

Sie könnten eine Richtlinie angeben, die die Verwendung von WebOTP in einer bestimmten Cross-Origin-Domain (d.h. innerhalb eines {{htmlelement("iframe")}}) erlaubt, so:

```http
Permissions-Policy: otp-credentials=(self "https://embedded.com")
```

Oder Sie könnten sie direkt im `<iframe>` angeben, so:

```html
<iframe src="https://embedded.com/..." allow="otp-credentials"> ... </iframe>
```

> [!NOTE]
> Wo eine Richtlinie die Verwendung von WebOTP `get()` verbietet, werden zurückgegebene {{jsxref("Promise", "Versprechen")}} von dieser mit einem `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException) abgelehnt.

## Schnittstellen

- [`OTPCredential`](/de/docs/Web/API/OTPCredential)
  - : Wird zurückgegeben, wenn ein WebOTP `get()`-Aufruf erfüllt wird; enthält eine `code`-Eigenschaft, die das abgerufene OTP enthält.

### Erweiterungen für andere Schnittstellen

- [`CredentialsContainer.get()`](/de/docs/Web/API/CredentialsContainer/get), die `otp`-Option
  - : Ein Aufruf von `get()` mit einer `otp`-Option weist den Benutzeragenten an, zu versuchen, ein OTP aus der SMS-App des zugrunde liegenden Systems abzurufen.

## Beispiele

In diesem Beispiel, wenn eine SMS-Nachricht eintrifft und der Nutzer die Erlaubnis erteilt, wird ein [`OTPCredential`](/de/docs/Web/API/OTPCredential)-Objekt mit einem OTP zurückgegeben. Dieses Passwort wird dann in das Verifizierungsformularfeld vorausgefüllt und das Formular wird abgeschickt.

[Probieren Sie diese Demo mit einem Telefon aus](https://web-otp.glitch.me/).

Das Formularfeld enthält ein [`autocomplete`](/de/docs/Web/HTML/Attributes/autocomplete)-Attribut mit dem Wert `one-time-code`. Dies ist nicht erforderlich, damit die WebOTP API funktioniert, aber es lohnt sich, es aufzunehmen. Infolgedessen wird Safari den Nutzer auffordern, dieses Feld mit dem OTP automatisch auszufüllen, wenn eine korrekt formatierte SMS empfangen wird, obwohl die WebOTP API in Safari nicht vollständig unterstützt wird.

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

Ein weiterer guter Anwendungsfall für den [`AbortController`](/de/docs/Web/API/AbortController) ist die Kündigung der `get()`-Anfrage nach einer bestimmten Zeit:

```js
setTimeout(() => {
  // abort after 30 seconds
  ac.abort();
}, 30 * 1000);
```

Wenn der Nutzer abgelenkt wird oder woanders hingeht, ist es gut, die Anfrage abzubrechen, damit ihm kein Erlaubnisdialog mehr angezeigt wird, der für ihn nicht mehr relevant ist.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Telefonnummern im Web mit WebOTP überprüfen](https://developer.chrome.com/docs/identity/web-apis/web-otp) auf developer.chrome.com (2023)
- [OTP-Formulare in Cross-Origin-Iframes mit der WebOTP API ausfüllen](https://web.dev/articles/web-otp-iframe)
