---
title: WebOTP API
slug: Web/API/WebOTP_API
l10n:
  sourceCommit: 0d0ccc861fa024fa10836fbf0cc2c3813cd74745
---

{{DefaultAPISidebar("WebOTP API")}}{{SeeCompatTable}}{{securecontext_header}}

Die **WebOTP-API** bietet ein verbessertes Benutzererlebnis für Webanwendungen, um zu verifizieren, dass eine Telefonnummer einem Benutzer gehört, wenn diese als Anmeldefaktor verwendet wird. WebOTP ist eine Erweiterung der [Credential Management API](/de/docs/Web/API/Credential_Management_API).

Die Verifikation erfolgt in einem zweistufigen Prozess:

1. Der App-Client fordert ein Einmalpasswort (OTP) an, das aus einer speziell formatierten SMS-Nachricht stammt, die vom App-Server gesendet wird.
2. JavaScript wird verwendet, um das OTP in ein Bestätigungsformular im App-Client einzufügen und es zurück an den Server zu übermitteln, um zu überprüfen, ob es mit dem ursprünglich in der SMS gesendeten übereinstimmt.

## Konzepte und Nutzung

Telefonnummern werden häufig verwendet, um den Benutzer einer App zu identifizieren. Eine SMS wird häufig eingesetzt, um zu überprüfen, dass die Nummer dem Benutzer gehört. Die SMS enthält typischerweise ein OTP, das der Benutzer in ein Formular der App kopieren und einfügen muss, um zu verifizieren, dass er der Inhaber der Nummer ist. Dies ist ein etwas umständliches Benutzererlebnis.

OTP-Anwendungsfälle umfassen:

- Verbesserung der Anmeldesicherheit durch Verwendung einer Telefonnummer als zusätzlichen Faktor (z. B. für Zwei-Faktor-Authentifizierung (2FA) oder Multifaktor-Authentifizierung (MFA)).
- Überprüfung sensibler Aktionen wie Zahlungen.

Die WebOTP-API ermöglicht es Webanwendungen, diesen Validierungsprozess zu beschleunigen, indem das OTP automatisch von der SMS kopiert und an die App weitergeleitet wird, nachdem der Benutzer seine Zustimmung gegeben hat (die meisten nativen Plattformen haben eine entsprechende API).

Beachten Sie, dass ein OTP an die sendende Domain gebunden ist. Dies ist eine nützliche Sicherheitsmaßnahme, um zu verifizieren, dass das OTP von der richtigen Quelle stammt, was das Risiko von Phishing-Angriffen im täglichen Autentifizierungsprozess mindern kann.

### Sicherheitsbedenken bei SMS-OTPs

SMS-OTPs sind nützlich, um Telefonnummern zu verifizieren, und die Verwendung von SMS als zweiten Faktor ist sicherlich besser, als keinen zweiten Faktor zu haben. In einigen Regionen sind andere Kennungen wie E-Mail-Adressen und Authentifikatoren nicht weit verbreitet, sodass SMS-OTPs sehr häufig sind.

Allerdings sind SMS nicht so sicher. Angreifer können eine SMS fälschen und die Telefonnummer einer Person kapern. Netzbetreiber können Telefonnummern an neue Benutzer weitergeben, nachdem ein Konto geschlossen wurde.

Es wird daher empfohlen, eine stärkere Form der Authentifizierung zu verwenden, wenn möglich, wie eine auf der [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) basierende Lösung, die ein Passwort und einen Sicherheitsschlüssel oder einen Passkey beinhaltet.

## Wie funktioniert die WebOTP-API?

Der Prozess funktioniert wie folgt:

1. Zu dem Zeitpunkt, an dem eine Telefonnummernverifikation erforderlich ist, wird der App-Client den Benutzer bitten, seine Telefonnummer in ein Formular einzugeben, welches dann an den App-Server übermittelt wird.
2. Der App-Client ruft dann [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) mit einer `otp`-Option auf, die einen `transport`-Typ von `"sms"` spezifiziert. Dies löst eine Anforderung für ein OTP vom zugrunde liegenden System aus, dessen Quelle eine [speziell formatierte SMS-Nachricht](#sms-nachrichtenformat) (die das OTP und die Domain der App enthält) ist, die vom App-Server empfangen wurde. Der `get()`-Aufruf basiert auf einem {{jsxref("Promise")}} und wartet darauf, dass die SMS-Nachricht empfangen wird.
3. Der App-Server sendet die SMS-Nachricht an die angegebene Telefonnummer. Dies muss unmittelbar nach Schritt 2 geschehen.
4. Wenn die SMS auf dem Gerät empfangen wird und die Domain der App enthält, wird der Browser den Benutzer fragen, ob er dem Abrufen/Nutzen des OTPs zustimmt. Chrome zeigt beispielsweise ein Dialogfeld an, in dem um Erlaubnis gebeten wird, das OTP aus der SMS abzurufen; andere Browser können es anders handhaben. Wenn der Benutzer zustimmt, wird der `get()`-Aufruf mit einem [`OTPCredential`](/de/docs/Web/API/OTPCredential)-Objekt, das das OTP enthält, erfüllt.
5. Sie können das OTP dann beliebig verwenden. Üblicherweise wird es als Wert des Bestätigungsformulars im App-Client gesetzt und das Formular wird eingereicht, um den Prozess so nahtlos wie möglich zu gestalten.
6. Der App-Server wird dann überprüfen, ob das zurückgesendete OTP mit dem ursprünglich in der SMS gesendeten übereinstimmt und, falls ja, den Prozess abschließen (zum Beispiel den Benutzer anmelden).

### SMS-Nachrichtenformat

Eine typische SMS-Nachricht sieht folgendermaßen aus:

```plain
Your verification code is 123456.

@www.example.com #123456
```

- Die erste Zeile und die zweite leere Zeile sind optional und dienen der menschlichen Lesbarkeit.
- Die letzte Zeile ist obligatorisch. Sie muss die letzte Zeile sein, wenn weitere vorhanden sind, und muss bestehen aus:
  - Dem Domain-Teil der URL der Website, die die API aufgerufen hat, vorangestellt mit einem `@`.
  - Gefolgt von einem Leerzeichen.
  - Gefolgt vom OTP, vorangestellt mit einem Nummernzeichen (`#`).

> [!NOTE]
> Der bereitgestellte Domain-Wert darf kein URL-Schema, keinen Port oder andere URL-Funktionen enthalten, die oben nicht angezeigt werden.

Wenn die `get()`-Methode von einer eingebetteten Drittanbieterseite in einem {{htmlelement("iframe")}} aufgerufen wird, sollte die SMS-Struktur folgendermaßen aussehen:

```plain
Your verification code is 123456.

@top-level.example.com #123456 @embedded.com
```

In diesem Fall muss die letzte Zeile bestehen aus:

- Dem Domain-Teil der obersten Domain, vorangestellt mit einem `@`.
- Gefolgt von einem Leerzeichen.
- Gefolgt vom OTP, vorangestellt mit einem Nummernzeichen (`#`).
- Gefolgt von einem Leerzeichen.
- Gefolgt vom Domain-Teil der eingebetteten Domain, vorangestellt mit einem `@`.

## Zugriffskontrolle auf die API

Die Verfügbarkeit von WebOTP kann durch die Verwendung einer [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) gesteuert werden, die eine {{httpheader("Permissions-Policy/otp-credentials", "otp-credentials")}}-Direktive spezifiziert. Diese Direktive hat einen Standard-Zulassungswert von `"self"`, was bedeutet, dass diese Methoden standardmäßig in obersten Dokumentenkontexten verwendet werden können.

Sie könnten eine Direktive spezifizieren, die den Gebrauch von WebOTP in einer bestimmten cross-origin Domain (z. B. innerhalb eines {{htmlelement("iframe")}}) erlaubt, wie folgt:

```http
Permissions-Policy: otp-credentials=(self "https://embedded.com")
```

Oder Sie könnten es direkt auf dem `<iframe>` spezifizieren, wie folgt:

```html
<iframe src="https://embedded.com/..." allow="otp-credentials"> ... </iframe>
```

> [!NOTE]
> Wo eine Richtlinie die Verwendung von WebOTP `get()` verbietet, werden die von ihr zurückgegebenen {{jsxref("Promise", "Versprechungen")}} mit einem `SecurityError`-[`DOMException`](/de/docs/Web/API/DOMException) abgelehnt.

## Schnittstellen

- [`OTPCredential`](/de/docs/Web/API/OTPCredential)
  - : Wird zurückgegeben, wenn ein WebOTP `get()`-Aufruf erfüllt wird; enthält eine `code`-Eigenschaft, die das abgerufene OTP enthält.

### Erweiterungen zu anderen Schnittstellen

- [`CredentialsContainer.get()`](/de/docs/Web/API/CredentialsContainer/get), die `otp`-Option
  - : Der Aufruf von `get()` mit einer `otp`-Option weist den Benutzeragenten an, zu versuchen, ein OTP aus der SMS-App des zugrunde liegenden Systems abzurufen.

## Beispiele

In diesem Beispiel wird, wenn eine SMS-Nachricht eintrifft und der Benutzer die Erlaubnis erteilt, ein [`OTPCredential`](/de/docs/Web/API/OTPCredential)-Objekt mit einem OTP zurückgegeben. Dieses Passwort wird dann in das Verifizierungsformularfeld vorausgefüllt, und das Formular wird abgeschickt.

[Probieren Sie dieses Demo mit einem Telefon aus](https://chrome.dev/web-otp-demo/).

Das Formularfeld enthält ein [`autocomplete`](/de/docs/Web/HTML/Reference/Attributes/autocomplete)-Attribut mit dem Wert `one-time-code`. Dies ist nicht erforderlich, damit die WebOTP-API funktioniert, aber es ist sinnvoll, es einzuschließen. Infolgedessen wird Safari den Benutzer auffordern, dieses Feld mit dem OTP automatisch auszufüllen, wenn eine korrekt formatierte SMS empfangen wird, auch wenn die WebOTP-API in Safari nicht vollständig unterstützt wird.

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

Ein weiterer guter Anwendungsfall für den [`AbortController`](/de/docs/Web/API/AbortController) ist das Abbrechen der `get()`-Anforderung nach einer bestimmten Zeit:

```js
setTimeout(() => {
  // abort after 30 seconds
  ac.abort();
}, 30 * 1000);
```

Wenn der Benutzer abgelenkt wird oder woanders navigiert, ist es gut, die Anforderung abzubrechen, damit er nicht mit einer Berechtigungsanfrage konfrontiert wird, die für ihn nicht mehr relevant ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Telefonnummern im Web mit WebOTP verifizieren](https://developer.chrome.com/docs/identity/web-apis/web-otp) auf developer.chrome.com (2023)
- [OTP-Formulare in cross-origin-Iframes mit der WebOTP-API ausfüllen](https://web.dev/articles/web-otp-iframe)
