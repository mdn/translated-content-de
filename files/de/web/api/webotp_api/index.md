---
title: WebOTP API
slug: Web/API/WebOTP_API
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{securecontext_header}}{{DefaultAPISidebar("WebOTP API")}}

Die **WebOTP-API** bietet eine optimierte Benutzererfahrung für Web-Apps, um zu überprüfen, ob eine Telefonnummer einem Benutzer gehört, wenn diese als Anmeldungsfaktor verwendet wird. WebOTP ist eine Erweiterung der [Credential Management API](/de/docs/Web/API/Credential_Management_API).

Die Verifizierung erfolgt in einem zweistufigen Prozess:

1. Der App-Client fordert ein Einmalpasswort (OTP) an, das aus einer speziell formatierten SMS-Nachricht stammt, die vom App-Server gesendet wird.
2. JavaScript wird verwendet, um das OTP in ein Validierungsformular im App-Client einzugeben und es dann an den Server zurückzusenden, um zu überprüfen, ob es mit dem übereinstimmt, was ursprünglich in der SMS gesendet wurde.

## Konzepte und Verwendung

Telefonnummern werden häufig verwendet, um den Benutzer einer App zu identifizieren. Eine SMS wird oft eingesetzt, um zu überprüfen, ob die Nummer dem Benutzer gehört. Die SMS enthält in der Regel ein OTP, das der Benutzer in ein Formular in der App kopieren und einfügen muss, um zu überprüfen, dass er die Nummer besitzt. Dies ist eine etwas umständliche Benutzererfahrung.

Anwendungsfälle für OTP sind:

- Verbesserung der Anmeldesicherheit, indem eine Telefonnummer als zusätzlicher Faktor verwendet wird (d.h. für Zwei-Faktor-Authentifizierung (2FA) oder Multi-Faktor-Authentifizierung (MFA)).
- Verifizierung sensibler Aktionen wie Zahlungen.

Die WebOTP-API ermöglicht es Web-Apps, diesen Validierungsprozess zu beschleunigen, indem das OTP aus der SMS kopiert und automatisch an die App übergeben wird, nachdem der Benutzer seine Zustimmung gegeben hat (die meisten nativen Plattformen haben eine entsprechende API).

Beachten Sie, dass ein OTP an die sendende Domain gebunden ist. Dies ist eine nützliche Sicherheitsbeschränkung, um sicherzustellen, dass das OTP aus der richtigen Quelle stammt, was das Risiko von Phishing-Angriffen bei alltäglichen Reauthentifizierungen verringern kann.

### Sicherheitsbedenken bei SMS-OTPs

SMS-OTPs sind nützlich, um Telefonnummern zu verifizieren, und SMS für einen zweiten Faktor zu verwenden, ist sicherlich besser als keinen zweiten Faktor zu haben. In einigen Regionen sind andere Identifikatoren wie E-Mail-Adressen und Authenticatoren nicht weit verbreitet, daher sind SMS-OTPs sehr häufig.

Allerdings sind SMS nicht sehr sicher. Angreifer können eine SMS fälschen und die Telefonnummer einer Person kapern. Netzbetreiber können Telefonnummern nach Schließung eines Kontos an neue Benutzer weitergeben.

Es wird daher empfohlen, eine stärkere Form der Authentifizierung zu verwenden, wenn möglich, wie z.B. eine auf der [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) basierende Lösung, die ein Passwort und einen Sicherheitsschlüssel oder einen Zugangsschlüssel umfasst.

## Wie funktioniert die WebOTP-API?

Der Prozess funktioniert folgendermaßen:

1. An dem Punkt, an dem die Telefonnummernverifizierung erforderlich ist, wird ein App-Client den Benutzer bitten, seine Telefonnummer in ein Formular einzugeben, das dann an den App-Server übermittelt wird.
2. Der App-Client ruft dann [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) mit einer `otp`-Option auf, die einen `transport`-Typ von `"sms"` angibt. Dies löst eine Anfrage für ein OTP aus dem zugrundeliegenden System aus, dessen Quelle eine [speziell formatierte SMS-Nachricht](#sms-nachrichtenformat) (die das OTP und die Domain der App enthält) vom App-Server ist. Der `get()`-Aufruf basiert auf einem {{jsxref("Promise")}} und wartet darauf, dass die SMS-Nachricht empfangen wird.
3. Der App-Server sendet die SMS-Nachricht an die angegebene Telefonnummer. Dies muss direkt nach Schritt 2 erfolgen.
4. Wenn die SMS auf dem Gerät empfangen wird und sie die Domain der App enthält, wird der Browser den Benutzer fragen, ob er zustimmt, dass das OTP abgerufen/verwendet wird. Chrome zeigt beispielsweise einen Dialog an, in dem um Erlaubnis gebeten wird, das OTP aus der SMS abzurufen; andere Browser könnten es anders handhaben. Wenn der Benutzer zustimmt, wird der `get()`-Aufruf mit einem [`OTPCredential`](/de/docs/Web/API/OTPCredential)-Objekt erfüllt, das das OTP enthält.
5. Sie können das OTP dann nach Belieben verwenden. Typischerweise würde man es als Wert des Validierungsformulars im App-Client setzen und dann das Formular übermitteln, um den Prozess so reibungslos wie möglich zu gestalten.
6. Der App-Server überprüft dann, ob das zurückgesendete OTP mit dem ursprünglich in der SMS gesendeten übereinstimmt, und schließt den Prozess ab (zum Beispiel, indem der Benutzer angemeldet wird).

### SMS-Nachrichtenformat

Eine typische SMS-Nachricht sieht folgendermaßen aus:

```plain
Your verification code is 123456.

@www.example.com #123456
```

- Die erste Zeile und die zweite Leerzeile sind optional und dienen der besseren Lesbarkeit für Menschen.
- Die letzte Zeile ist obligatorisch. Sie muss die letzte Zeile sein, wenn andere vorhanden sind, und muss bestehen aus:
  - Dem Domain-Teil der URL der Website, die die API aufgerufen hat, vorangestellt mit einem `@`.
  - Gefolgt von einem Leerzeichen.
  - Gefolgt vom OTP, vorangestellt mit einem Rautezeichen (`#`).

> [!NOTE]
> Der angegebene Domain-Wert darf kein URL-Schema, keinen Port oder andere hier nicht angezeigte URL-Features enthalten.

Wenn die `get()`-Methode von einer Drittanbieter-Website in einem {{htmlelement("iframe")}} aufgerufen wird, sollte die SMS-Struktur so aussehen:

```plain
Your verification code is 123456.

@top-level.example.com #123456 @embedded.com
```

In diesem Fall muss die letzte Zeile bestehen aus:

- Dem Domain-Teil der Top-Level-Domain, vorangestellt mit einem `@`.
- Gefolgt von einem Leerzeichen.
- Gefolgt vom OTP, vorangestellt mit einem Rautezeichen (`#`).
- Gefolgt von einem Leerzeichen.
- Gefolgt vom Domain-Teil der eingebetteten Domain, vorangestellt mit einem `@`.

## Zugriff auf die API steuern

Die Verfügbarkeit von WebOTP kann durch die Verwendung einer [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) gesteuert werden, die eine {{httpheader("Permissions-Policy/otp-credentials", "otp-credentials")}}-Direktive angibt. Diese Direktive hat einen Standard-Wert von `"self"`, was bedeutet, dass diese Methoden standardmäßig in Top-Level-Dokumenten verwendet werden können.

Sie könnten eine Direktive angeben, die die Verwendung von WebOTP in einer bestimmten Cross-Origin-Domain erlaubt (d.h. innerhalb eines {{htmlelement("iframe")}}) wie folgt:

```http
Permissions-Policy: otp-credentials=(self "https://embedded.com")
```

Oder Sie könnten es direkt im `<iframe>` angeben:

```html
<iframe src="https://embedded.com/..." allow="otp-credentials"> ... </iframe>
```

> [!NOTE]
> Wo eine Richtlinie die Verwendung von WebOTP `get()` verbietet, werden {{jsxref("Promise", "Promise")}}, die von dieser Methode zurückgegeben werden, mit einem `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException) zurückgewiesen.

## Schnittstellen

- [`OTPCredential`](/de/docs/Web/API/OTPCredential)
  - : Wird zurückgegeben, wenn ein WebOTP `get()`-Aufruf erfüllt wird; enthält eine `code`-Eigenschaft, die das abgerufene OTP enthält.

### Erweiterungen für andere Schnittstellen

- [`CredentialsContainer.get()`](/de/docs/Web/API/CredentialsContainer/get), die `otp`-Option
  - : Der Aufruf von `get()` mit einer `otp`-Option weist den Benutzeragenten an, zu versuchen, ein OTP von der SMS-App des zugrundeliegenden Systems abzurufen.

## Beispiele

In diesem Beispiel wird, wenn eine SMS-Nachricht eintrifft und der Benutzer die Erlaubnis erteilt, ein [`OTPCredential`](/de/docs/Web/API/OTPCredential)-Objekt mit einem OTP zurückgegeben. Dieses Passwort wird dann automatisch in das Verifizierungsformularfeld eingefüllt und das Formular wird übermittelt.

[Probieren Sie diese Demo mit einem Telefon aus](https://web-otp.glitch.me/).

Das Formularfeld enthält ein [`autocomplete`](/de/docs/Web/HTML/Attributes/autocomplete)-Attribut mit dem Wert von `one-time-code`. Dies ist nicht erforderlich, damit die WebOTP-API funktioniert, aber es lohnt sich, es hinzuzufügen. Als Ergebnis wird Safari den Benutzer auffordern, dieses Feld automatisch mit dem OTP auszufüllen, wenn eine korrekt formatierte SMS empfangen wird, auch wenn die WebOTP-API in Safari nicht vollständig unterstützt wird.

```html
<input type="text" autocomplete="one-time-code" inputmode="numeric" />
```

Das JavaScript sieht wie folgt aus:

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

Wenn der Benutzer abgelenkt wird oder woanders hin navigiert, ist es sinnvoll, die Anfrage abzubrechen, damit ihm keine Erlaubnisanfrage angezeigt wird, die für ihn nicht mehr relevant ist.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Telefonnummern im Web mit WebOTP verifizieren](https://developer.chrome.com/docs/identity/web-apis/web-otp) auf developer.chrome.com (2023)
- [OTP-Formulare in Cross-Origin-Iframes mit WebOTP-API ausfüllen](https://web.dev/articles/web-otp-iframe)
