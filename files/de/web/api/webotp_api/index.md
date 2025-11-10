---
title: WebOTP API
slug: Web/API/WebOTP_API
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{DefaultAPISidebar("WebOTP API")}}{{SeeCompatTable}}{{securecontext_header}}

Die **WebOTP API** bietet eine vereinfachte Benutzererfahrung für Webanwendungen, um zu überprüfen, dass eine Telefonnummer zu einem Benutzer gehört, wenn sie als Anmeldefaktor verwendet wird. WebOTP ist eine Erweiterung der [Credential Management API](/de/docs/Web/API/Credential_Management_API).

Die Verifizierung erfolgt in einem zweistufigen Prozess:

1. Der App-Client fordert ein Einmalpasswort (OTP) an, das aus einer speziell formatierten SMS-Nachricht stammt, die vom App-Server gesendet wird.
2. JavaScript wird verwendet, um das OTP in ein Validierungsformular auf dem App-Client einzutragen und es zurück an den Server zu senden, um zu bestätigen, dass es mit dem ursprünglich in der SMS gesendeten übereinstimmt.

## Konzepte und Verwendung

Telefonnummern werden oft verwendet, um den Benutzer einer App zu identifizieren. Häufig wird eine SMS geschickt, um zu überprüfen, dass die Nummer zum Benutzer gehört. Die SMS enthält normalerweise ein OTP, das der Benutzer kopieren und in ein Formular in der App einfügen muss, um zu bestätigen, dass er die Nummer besitzt. Dies ist eine etwas umständliche Benutzererfahrung.

Anwendungsfälle für OTP umfassen:

- Verbesserung der Anmeldesicherheit durch Verwendung einer Telefonnummer als zusätzlichen Faktor im Rahmen eines {{Glossary("multi-factor_authentication", "Multi-Faktor-Authentifizierungssystems")}}.
- Verifizierung sensibler Aktionen, wie z. B. Zahlungen.

Die WebOTP API ermöglicht es Webanwendungen, diesen Validierungsprozess zu beschleunigen, indem das OTP aus der SMS kopiert und nach der Zustimmung des Benutzers automatisch an die App weitergeleitet wird (die meisten nativen Plattformen haben eine entsprechende API).

Beachten Sie, dass ein OTP an die sendende Domain gebunden ist. Dies ist eine nützliche Sicherheitsbeschränkung, um zu überprüfen, dass das OTP von der richtigen Quelle stammt, was das Risiko von Phishing-Angriffen während der täglichen Reauthentifizierung verringern kann.

### Sicherheitsbedenken bei SMS OTPs

SMS OTPs sind nützlich zur Verifizierung von Telefonnummern, und die Verwendung von SMS als zweiten Faktor ist sicherlich besser, als keinen zweiten Faktor zu haben. In einigen Regionen sind andere Identifikatoren wie E-Mail-Adressen und Authentifikatoren nicht weit verbreitet, daher sind SMS OTPs sehr häufig.

Jedoch sind SMS nicht besonders sicher. Angreifer können eine SMS fälschen und die Telefonnummer einer Person übernehmen. Anbieter können Telefonnummern nach Schließung eines Kontos an neue Benutzer weitergeben.

Es wird daher empfohlen, eine stärkere Form der Authentifizierung zu verwenden, wenn möglich, wie eine auf der [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) basierende Lösung, die ein Passwort und einen Sicherheitsschlüssel oder einen Zugangsschlüssel beinhaltet.

## Wie funktioniert die WebOTP API?

Der Prozess funktioniert wie folgt:

1. An dem Punkt, an dem die Telefonnummer-Verifizierung erforderlich ist, wird ein App-Client den Benutzer auffordern, seine Telefonnummer in ein Formular einzugeben, welches dann an den App-Server übermittelt wird.
2. Der App-Client ruft anschließend [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) mit einer `otp`-Option auf, die einen `transport`-Typ von `"sms"` angibt. Dies löst eine Anforderung für ein OTP aus dem zugrunde liegenden System aus, dessen Quelle eine [speziell formatierte SMS-Nachricht](#sms-nachrichtenformat) (die das OTP und die Domain der App enthält) ist, die vom App-Server empfangen wird. Der `get()`-Aufruf basiert auf {{jsxref("Promise")}} und wartet, bis die SMS-Nachricht empfangen wird.
3. Der App-Server sendet die SMS-Nachricht an die angegebene Telefonnummer. Dies muss kurz nach Schritt 2 geschehen.
4. Wenn die SMS auf dem Gerät empfangen wird und die Domain der App enthält, wird der Browser den Benutzer fragen, ob er zustimmt, dass das OTP abgerufen/verwendet wird. Chrome zeigt beispielsweise ein Dialogfeld an, in dem um Erlaubnis gebeten wird, das OTP aus der SMS abzurufen; andere Browser können dies anders handhaben. Stimmt der Benutzer zu, wird der `get()`-Aufruf mit einem [`OTPCredential`](/de/docs/Web/API/OTPCredential)-Objekt erfüllt, das das OTP enthält.
5. Sie können das OTP dann nach Belieben verwenden. Eine typische Verwendung wäre, es als Wert des Validierungsformulars auf dem App-Client zu setzen und dann das Formular einzureichen, um den Prozess so nahtlos wie möglich zu gestalten.
6. Der App-Server verifiziert dann, dass das zurückgesendete OTP mit dem ursprünglich in der SMS gesendeten übereinstimmt und schließt, wenn ja, den Prozess ab (zum Beispiel, um den Benutzer anzumelden).

### SMS-Nachrichtenformat

Eine typische SMS-Nachricht sieht folgendermaßen aus:

```plain
Your verification code is 123456.

@www.example.com #123456
```

- Die erste und die zweite leere Zeile sind optional und dienen der Lesbarkeit für Menschen.
- Die letzte Zeile ist obligatorisch. Sie muss die letzte Zeile sein, wenn andere vorhanden sind, und muss bestehen aus:
  - Dem Domain-Teil der URL der Website, die die API aufgerufen hat, vorangestellt von einem `@`.
  - Gefolgt von einem Leerzeichen.
  - Gefolgt vom OTP, vorangestellt von einem Pfundzeichen (`#`).

> [!NOTE]
> Der angegebene Domain-Wert darf kein URL-Schema, keinen Port oder andere nicht oben gezeigte URL-Features enthalten.

Wenn die `get()`-Methode von einer eingebetteten Drittanbieter-Website in einem {{htmlelement("iframe")}} aufgerufen wird, sollte die SMS-Struktur sein:

```plain
Your verification code is 123456.

@top-level.example.com #123456 @embedded.com
```

In diesem Fall muss die letzte Zeile bestehen aus:

- Dem Domain-Teil der obersten Domain, vorangestellt von einem `@`.
- Gefolgt von einem Leerzeichen.
- Gefolgt vom OTP, vorangestellt von einem Pfundzeichen (`#`).
- Gefolgt von einem Leerzeichen.
- Gefolgt vom Domain-Teil der eingebetteten Domain, vorangestellt von einem `@`.

## Zugriffskontrolle für die API

Die Verfügbarkeit von WebOTP kann durch Verwendung einer [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) gesteuert werden, die eine {{httpheader("Permissions-Policy/otp-credentials", "otp-credentials")}}-Direktive spezifiziert. Diese Direktive hat standardmäßig einen Allowlist-Wert von `"self"`, was bedeutet, dass diese Methoden standardmäßig in Top-Level-Dokumentkontexten verwendet werden können.

Sie könnten eine Direktive angeben, um die Nutzung von WebOTP in einer bestimmten, domänenübergreifenden Domain zu erlauben (d.h. innerhalb eines {{htmlelement("iframe")}}) wie folgt:

```http
Permissions-Policy: otp-credentials=(self "https://embedded.com")
```

Oder Sie könnten es direkt im `<iframe>` angeben wie folgt:

```html
<iframe src="https://embedded.com/..." allow="otp-credentials"> ... </iframe>
```

> [!NOTE]
> Wo eine Richtlinie die Nutzung von WebOTP `get()` verbietet, werden die von ihm zurückgegebenen {{jsxref("Promise", "promises")}} mit einem `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException) zurückgewiesen.

## Schnittstellen

- [`OTPCredential`](/de/docs/Web/API/OTPCredential)
  - : Wird zurückgegeben, wenn ein WebOTP `get()`-Aufruf erfüllt wird; enthält eine `code`-Eigenschaft, die das abgerufene OTP enthält.

### Erweiterungen zu anderen Schnittstellen

- [`CredentialsContainer.get()`](/de/docs/Web/API/CredentialsContainer/get), die `otp`-Option
  - : Das Aufrufen von `get()` mit einer `otp`-Option weist den Benutzeragenten an, zu versuchen, ein OTP aus der SMS-App des zugrunde liegenden Systems abzurufen.

## Beispiele

In diesem Beispiel wird, wenn eine SMS-Nachricht ankommt und der Benutzer die Erlaubnis erteilt, ein [`OTPCredential`](/de/docs/Web/API/OTPCredential)-Objekt mit einem OTP zurückgegeben. Dieses Passwort wird dann in das Verifizierungsformularfeld vorausgefüllt und das Formular wird eingereicht.

[Probieren Sie dieses Demo mit einem Telefon aus](https://chrome.dev/web-otp-demo/).

Das Formularfeld enthält ein [`autocomplete`](/de/docs/Web/HTML/Reference/Attributes/autocomplete)-Attribut mit dem Wert `one-time-code`. Dies ist nicht erforderlich, damit die WebOTP API funktioniert, aber es ist sinnvoll, es zu inkludieren. Dadurch wird Safari den Benutzer auffordern, dieses Feld mit dem OTP automatisch auszufüllen, wenn eine korrekt formatierte SMS empfangen wird, obwohl die WebOTP API nicht vollständig in Safari unterstützt wird.

```html
<input type="text" autocomplete="one-time-code" inputmode="numeric" />
```

Das JavaScript sieht wie folgt aus:

```js
// Detect feature support via OTPCredential availability
if ("OTPCredential" in window) {
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
}
```

Eine weitere gute Verwendung für den [`AbortController`](/de/docs/Web/API/AbortController) ist es, die `get()`-Anfrage nach einer bestimmten Zeitspanne abzubrechen:

```js
setTimeout(() => {
  // abort after 30 seconds
  ac.abort();
}, 30 * 1000);
```

Wenn der Benutzer abgelenkt wird oder woanders hin navigiert, ist es sinnvoll, die Anfrage abzubrechen, damit er nicht mit einer Erlaubnisaufforderung konfrontiert wird, die für ihn nicht mehr relevant ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Telefonnummern im Web mit WebOTP verifizieren](https://developer.chrome.com/docs/identity/web-apis/web-otp) auf developer.chrome.com (2023)
- [OTP-Formulare in domänenübergreifenden iframes mit WebOTP API ausfüllen](https://web.dev/articles/web-otp-iframe)
