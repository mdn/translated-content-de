---
title: WebOTP API
slug: Web/API/WebOTP_API
l10n:
  sourceCommit: 116577234db1d6275c74a8bb879fce54d944f4ed
---

{{DefaultAPISidebar("WebOTP API")}}{{SeeCompatTable}}{{securecontext_header}}

Die **WebOTP API** bietet eine optimierte Benutzererfahrung für Web-Apps, um zu überprüfen, dass eine Telefonnummer einem Benutzer gehört, wenn sie als Anmeldefaktor verwendet wird. WebOTP ist eine Erweiterung der [Credential Management API](/de/docs/Web/API/Credential_Management_API).

Die Verifizierung erfolgt über einen zweistufigen Prozess:

1. Der App-Client fordert ein Einmalpasswort (OTP) an, das aus einer speziell formatierten SMS-Nachricht stammt, die vom App-Server gesendet wird.
2. JavaScript wird verwendet, um das OTP in ein Validierungsformular auf dem App-Client einzugeben und es zurück an den Server zu senden, um zu überprüfen, dass es mit dem übereinstimmt, was ursprünglich in der SMS gesendet wurde.

## Konzepte und Verwendung

Telefonnummern werden häufig als Mittel zur Identifizierung des Benutzers einer App verwendet. Eine SMS wird häufig eingesetzt, um zu überprüfen, dass die Nummer dem Benutzer gehört. Die SMS enthält typischerweise ein OTP, das der Benutzer kopieren und in ein Formular in der App einfügen muss, um zu überprüfen, dass er die Nummer besitzt. Dies ist eine etwas umständliche Benutzererfahrung.

OTP-Anwendungsfälle beinhalten:

- Verbesserung der Sicherheit bei der Anmeldung, indem eine Telefonnummer als zusätzlicher Faktor verwendet wird (z. B. für Zwei-Faktor-Authentifizierung (2FA) oder Multi-Faktor-Authentifizierung (MFA)).
- Verifizierung sensibler Aktionen wie Zahlungen.

Die WebOTP API ermöglicht es Web-Apps, diesen Validierungsprozess zu beschleunigen, indem das OTP automatisch aus der SMS kopiert und an die App weitergegeben wird, nachdem der Benutzer seine Zustimmung erteilt hat (die meisten nativen Plattformen haben eine gleichwertige API).

Bitte beachten Sie, dass ein OTP an die sendende Domain gebunden ist. Dies ist eine nützliche Sicherheitsvorkehrung, um zu überprüfen, dass das OTP aus der richtigen Quelle stammt, was das Risiko von Phishing-Angriffen bei der täglichen Reauthentifizierung mindern kann.

### Sicherheitsbedenken bei SMS-OTPs

SMS-OTPs sind nützlich zur Verifizierung von Telefonnummern, und die Verwendung von SMS als zweiten Faktor ist sicherlich besser als kein zweiter Faktor. In einigen Regionen werden andere Kennungen wie E-Mail-Adressen und Authentifikatoren nicht weit verbreitet eingesetzt, sodass SMS-OTPs sehr häufig sind.

SMS sind jedoch nicht sehr sicher. Angreifer können eine SMS fälschen und die Telefonnummer einer Person übernehmen. Netzbetreiber können Telefonnummern recyclen und nach der Schließung eines Kontos an neue Benutzer vergeben.

Es wird daher empfohlen, eine stärkere Authentifizierungsform zu verwenden, wenn möglich, wie eine auf der [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) basierende Lösung mit einem Passwort und einem Sicherheitsschlüssel oder einem Passkey.

## Wie funktioniert die WebOTP API?

Der Prozess funktioniert wie folgt:

1. Wenn eine Telefonnummerüberprüfung erforderlich ist, wird der Benutzer von einem App-Client gebeten, seine Telefonnummer in ein Formular einzugeben, das dann an den App-Server gesendet wird.
2. Der App-Client ruft dann [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) mit einer `otp`-Option auf, die einen `transport`-Typ von `"sms"` angibt. Dies löst eine Anforderung für ein OTP aus dem zugrundeliegenden System aus, dessen Quelle eine [speziell formatierte SMS-Nachricht](#sms-nachrichtenformat) (mit dem OTP und der Domain der App) ist, die vom App-Server empfangen wird. Der `get()`-Aufruf basiert auf {{jsxref("Promise")}} und wartet auf den Erhalt der SMS-Nachricht.
3. Der App-Server sendet die SMS-Nachricht an die angegebene Telefonnummer. Dies muss unmittelbar nach Schritt 2 erfolgen.
4. Wenn die SMS auf dem Gerät empfangen wird, vorausgesetzt sie enthält die Domain der App, fragt der Browser den Benutzer, ob er der Verwendung des OTP zustimmt. Chrome zeigt beispielsweise einen Dialog an, in dem um die Erlaubnis gebeten wird, das OTP aus der SMS zu beziehen; andere Browser können es anders handhaben. Wenn der Benutzer zustimmt, wird der `get()`-Aufruf mit einem Objekt von [`OTPCredential`](/de/docs/Web/API/OTPCredential) erfüllt, das das OTP enthält.
5. Sie können das OTP dann nach Belieben verwenden. Typischerweise wird es als Wert des Validierungsformulars auf dem App-Client festgelegt und das Formular wird dann abgeschickt, um den Prozess so reibungslos wie möglich zu gestalten.
6. Der App-Server wird dann überprüfen, ob das zurückgesendete OTP mit dem ursprünglich in der SMS gesendeten übereinstimmt und, falls ja, den Prozess abschließen (z. B. den Benutzer anmelden).

### SMS-Nachrichtenformat

Eine typische SMS-Nachricht sieht so aus:

```plain
Your verification code is 123456.

@www.example.com #123456
```

- Die erste Zeile und die zweite leere Zeile sind optional und dienen der besseren Lesbarkeit für Menschen.
- Die letzte Zeile ist obligatorisch. Sie muss die letzte Zeile sein, wenn andere vorhanden sind, und muss bestehen aus:
  - Dem Domain-Teil der URL der Website, die die API aufgerufen hat, vorangestellt von einem `@`.
  - Gefolgt von einem Leerzeichen.
  - Gefolgt vom OTP, vorangestellt von einem Pfundzeichen (`#`).

> [!NOTE]
> Der angegebene Domain-Wert darf kein URL-Schema, keine Portangaben oder andere URL-Eigenschaften enthalten, die oben nicht gezeigt werden.

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

## Steuerung des Zugriffs auf die API

Die Verfügbarkeit von WebOTP kann über eine [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy) gesteuert werden, die eine {{httpheader("Permissions-Policy/otp-credentials", "otp-credentials")}}-Direktive angibt. Diese Direktive hat einen Standard-Wert von `"self"`, was bedeutet, dass diese Methoden standardmäßig in obersten Dokumentkontexten verwendet werden können.

Sie könnten eine Direktive spezifizieren, die die Verwendung von WebOTP in einer spezifischen, plattformübergreifenden Domain erlaubt (z. B. in einem {{htmlelement("iframe")}}) wie folgt:

```http
Permissions-Policy: otp-credentials=(self "https://embedded.com")
```

Oder Sie könnten es direkt im `<iframe>` angeben:

```html
<iframe src="https://embedded.com/..." allow="otp-credentials"> ... </iframe>
```

> [!NOTE]
> Wo eine Richtlinie die Nutzung von WebOTP `get()` verbietet, werden die von {{jsxref("Promise", "promises")}} zurückgegebenen Werte mit einem `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException) abgelehnt.

## Schnittstellen

- [`OTPCredential`](/de/docs/Web/API/OTPCredential)
  - : Wird zurückgegeben, wenn ein WebOTP `get()`-Aufruf erfolgreich ist; enthält eine `code`-Eigenschaft, die das bezogene OTP enthält.

### Erweiterungen zu anderen Schnittstellen

- [`CredentialsContainer.get()`](/de/docs/Web/API/CredentialsContainer/get), die `otp`-Option
  - : Das Aufrufen von `get()` mit einer `otp`-Option weist den Benutzeragenten an, zu versuchen, ein OTP aus der SMS-App des zugrundeliegenden Systems zu beziehen.

## Beispiele

In diesem Beispiel wird, wenn eine SMS-Nachricht eintrifft und der Benutzer die Erlaubnis erteilt, ein [`OTPCredential`](/de/docs/Web/API/OTPCredential)-Objekt mit einem OTP zurückgegeben. Dieses Passwort wird dann in das Verifizierungsformularfeld vorausgefüllt und das Formular wird abgeschickt.

[Versuchen Sie diese Demo mit einem Telefon](https://chrome.dev/web-otp-demo/).

Das Formularfeld enthält ein [`autocomplete`](/de/docs/Web/HTML/Reference/Attributes/autocomplete)-Attribut mit dem Wert `one-time-code`. Dies ist nicht nötig, damit die WebOTP API funktioniert, aber es ist sinnvoll, es einzufügen. Infolgedessen wird Safari den Benutzer auffordern, dieses Feld mit dem OTP automatisch auszufüllen, wenn eine korrekt formatierte SMS empfangen wird, obwohl die WebOTP API in Safari nicht vollständig unterstützt wird.

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

Eine weitere gute Verwendung für den [`AbortController`](/de/docs/Web/API/AbortController) besteht darin, die `get()`-Anfrage nach einer bestimmten Zeitspanne abzubrechen:

```js
setTimeout(() => {
  // abort after 30 seconds
  ac.abort();
}, 30 * 1000);
```

Wenn der Benutzer abgelenkt wird oder woanders navigiert, ist es gut, die Anfrage abzubrechen, damit er nicht mit einer Erlaubnisaufforderung konfrontiert wird, die für ihn nicht mehr relevant ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Telefonnummern im Web mit WebOTP verifizieren](https://developer.chrome.com/docs/identity/web-apis/web-otp) auf developer.chrome.com (2023)
- [OTP-Formulare innerhalb von plattformübergreifenden iframes mit der WebOTP API ausfüllen](https://web.dev/articles/web-otp-iframe)
