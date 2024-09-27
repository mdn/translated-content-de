---
title: WebOTP API
slug: Web/API/WebOTP_API
l10n:
  sourceCommit: 44c4ec928281dc2d7c5ea42b7d2c74a2013f16ac
---

{{securecontext_header}}{{DefaultAPISidebar("WebOTP API")}}

Die **WebOTP API** bietet ein vereinfachtes Benutzererlebnis für Webanwendungen, um zu überprüfen, dass eine Telefonnummer einem Benutzer gehört, wenn diese als Anmeldemethode verwendet wird. WebOTP ist eine Erweiterung der [Credential Management API](/de/docs/Web/API/Credential_Management_API).

Die Verifizierung erfolgt durch einen zweistufigen Prozess:

1. Der Anwendungsclient fordert ein Einmalpasswort (OTP) an, das aus einer speziell formatierten SMS-Nachricht vom Anwendungsserver stammt.
2. JavaScript wird verwendet, um das OTP in ein Validierungsformular auf dem Anwendungsclient einzugeben, und es wird zurück an den Server gesendet, um zu überprüfen, ob es mit dem ursprünglich in der SMS gesendeten übereinstimmt.

## Konzepte und Verwendung

Telefonnummern werden oft verwendet, um den Benutzer einer App zu identifizieren. Eine SMS wird häufig eingesetzt, um zu überprüfen, dass die Nummer dem Benutzer gehört. Die SMS enthält normalerweise ein OTP, das der Benutzer in ein Formular in der App kopieren und einfügen muss, um zu bestätigen, dass er Besitzer der Nummer ist. Dies ist ein etwas umständliches Benutzererlebnis.

Anwendungsfälle für OTPs umfassen:

- Verbesserung der Anmeldesicherheit durch Verwendung einer Telefonnummer als zusätzlichen Faktor (z. B. für Zwei-Faktor-Authentifizierung (2FA) oder Multi-Faktor-Authentifizierung (MFA)).
- Verifizierung sensibler Aktionen wie Zahlungen.

Die WebOTP API ermöglicht es Webanwendungen, diesen Validierungsprozess zu beschleunigen, indem sie das OTP aus der SMS kopiert und automatisch an die App weitergibt, nachdem der Benutzer seine Einwilligung gegeben hat (die meisten nativen Plattformen haben eine entsprechende API).

Es ist zu beachten, dass ein OTP an die sendende Domain gebunden ist. Dies ist eine nützliche Sicherheitsmaßnahme, um zu überprüfen, dass das OTP aus der richtigen Quelle stammt, was das Risiko von Phishing-Angriffen bei der täglichen Wiederanmeldung verringern kann.

### Sicherheitsbedenken bei SMS-OTPs

SMS-OTPs sind nützlich zur Überprüfung von Telefonnummern, und die Verwendung von SMS als zweiten Faktor ist sicherlich besser, als keinen zweiten Faktor zu haben. In einigen Regionen werden andere Identifikatoren wie E-Mail-Adressen und Authentifikatoren nicht weit verbreitet genutzt, sodass SMS-OTPs sehr verbreitet sind.

Allerdings sind SMS nicht besonders sicher. Angreifer können eine SMS fälschen und die Telefonnummer einer Person kapern. Anbieter können Telefonnummern an neue Benutzer vergeben, nachdem ein Konto geschlossen wurde.

Daher wird empfohlen, eine stärkere Authentifizierungsform zu verwenden, wenn möglich, wie eine auf der [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) basierende Lösung mit einem Passwort und einem Sicherheitsschlüssel oder einem Passkey.

## Wie funktioniert die WebOTP API?

Der Prozess funktioniert folgendermaßen:

1. An dem Punkt, an dem die Telefonnummernverifizierung erforderlich ist, wird der Anwendungsclient den Benutzer bitten, seine Telefonnummer in ein Formular einzugeben, das dann an den Anwendungsserver übermittelt wird.
2. Der Anwendungsclient ruft dann [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) mit einer `otp`-Option auf, wobei ein `transport`-Typ von `"sms"` angegeben wird. Dies löst eine Anforderung für ein OTP aus dem zugrundeliegenden System aus, dessen Quelle eine [speziell formatierte SMS-Nachricht](#sms-nachrichtenformat) (die das OTP und die Domain der App enthält) sein wird, die vom Anwendungsserver empfangen wird. Der `get()`-Aufruf basiert auf einem {{jsxref("Promise")}} und wartet darauf, dass die SMS-Nachricht empfangen wird.
3. Der Anwendungsserver sendet die SMS-Nachricht an die angegebene Telefonnummer. Dies muss direkt nach Schritt 2 erfolgen.
4. Wenn die SMS auf dem Gerät empfangen wird und die Domain der App enthält, wird der Benutzer vom Browser gefragt, ob er einverstanden ist, dass das OTP abgerufen/verwendet wird. Chrome zeigt beispielsweise ein Dialogfeld an, das ihn um Erlaubnis bittet, das OTP aus der SMS abzurufen; andere Browser könnten es anders handhaben. Wenn der Benutzer zustimmt, wird der `get()`-Aufruf mit einem [`OTPCredential`](/de/docs/Web/API/OTPCredential)-Objekt erfüllt, das das OTP enthält.
5. Sie können das OTP dann nach Belieben verwenden. Die typische Verwendung wäre, es als Wert des Validierungsformulars auf dem Anwendungsclient festzulegen und das Formular dann abzusenden, was den Prozess so nahtlos wie möglich macht.
6. Der Anwendungsserver überprüft dann, ob das zurückgesendete OTP mit dem ursprünglich in der SMS gesendeten übereinstimmt, und schließt den Prozess ab (zum Beispiel durch Anmelden des Benutzers).

### SMS-Nachrichtenformat

Eine typische SMS-Nachricht sieht folgendermaßen aus:

```plain
Your verification code is 123456.

@www.example.com #123456
```

- Die erste Zeile und die zweite leere Zeile sind optional und dienen der Lesbarkeit für Menschen.
- Die letzte Zeile ist obligatorisch. Sie muss die letzte Zeile sein, wenn andere vorhanden sind, und muss bestehen aus:
  - Dem Domain-Teil der URL der Website, die die API aufgerufen hat, vorangestellt mit einem `@`.
  - Gefolgt von einem Leerzeichen.
  - Gefolgt vom OTP, vorangestellt mit einem Doppelkreuz (`#`).

> [!NOTE]
> Der angegebene Domainwert darf kein URL-Schema, keinen Port oder andere URL-Features enthalten, die oben nicht gezeigt sind.

Wenn die `get()`-Methode von einer eingebetteten Drittanbieter-Site in einem {{htmlelement("iframe")}} aufgerufen wird, sollte die SMS-Struktur wie folgt sein:

```plain
Your verification code is 123456.

@top-level.example.com #123456 @embedded.com
```

In diesem Fall muss die letzte Zeile bestehen aus:

- Dem Domain-Teil der obersten Domain, vorangestellt mit einem `@`.
- Gefolgt von einem Leerzeichen.
- Gefolgt vom OTP, vorangestellt mit einem Doppelkreuz (`#`).
- Gefolgt von einem Leerzeichen.
- Gefolgt vom Domain-Teil der eingebetteten Domain, vorangestellt mit einem `@`.

## Zugriffskontrolle zur API

Die Verfügbarkeit von WebOTP kann über eine [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy) gesteuert werden, die eine {{httpheader("Permissions-Policy/otp-credentials", "otp-credentials")}}-Direktive spezifiziert. Diese Direktive hat standardmäßig einen Allowlist-Wert von `"self"`, was bedeutet, dass diese Methoden standardmäßig in den Dokumentkontexten der obersten Ebene verwendet werden können.

Sie könnten eine Direktive festlegen, die die Verwendung von WebOTP in einer bestimmten domain-übergreifenden Domain erlaubt (z. B. innerhalb eines {{htmlelement("iframe")}}) wie diese:

```http
Permissions-Policy: otp-credentials=(self "https://embedded.com")
```

Oder Sie könnten sie direkt im `<iframe>` angeben wie diese:

```html
<iframe src="https://embedded.com/..." allow="otp-credentials"> ... </iframe>
```

> [!NOTE]
> Wenn eine Richtlinie die Verwendung von WebOTP `get()` verbietet, werden die von ihr zurückgegebenen {{jsxref("Promise", "Promises")}} mit einem `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException) abgelehnt.

## Schnittstellen

- [`OTPCredential`](/de/docs/Web/API/OTPCredential)
  - : Wird zurückgegeben, wenn ein WebOTP `get()`-Aufruf erfüllt wird; enthält eine `code`-Eigenschaft, die das abgerufene OTP enthält.

### Erweiterungen zu anderen Schnittstellen

- [`CredentialsContainer.get()`](/de/docs/Web/API/CredentialsContainer/get), die `otp`-Option
  - : Ein Aufruf von `get()` mit einer `otp`-Option weist den Benutzeragenten an, zu versuchen, ein OTP von der SMS-App des zugrundeliegenden Systems abzurufen.

## Beispiele

In diesem Beispiel wird, wenn eine SMS-Nachricht eintrifft und der Benutzer die Erlaubnis erteilt, ein [`OTPCredential`](/de/docs/Web/API/OTPCredential)-Objekt mit einem OTP zurückgegeben. Dieses Passwort wird dann in das Überprüfungsformularfeld vorausgefüllt und das Formular wird abgeschickt.

[Probieren Sie diese Demo mit einem Telefon aus](https://web-otp.glitch.me/).

Das Formularfeld enthält ein [`autocomplete`](/de/docs/Web/HTML/Attributes/autocomplete)-Attribut mit dem Wert `one-time-code`. Dies ist nicht notwendig, damit die WebOTP API funktioniert, aber es lohnt sich, es zu integrieren. Infolgedessen wird Safari den Benutzer auffordern, dieses Feld mit dem OTP auto-auszufüllen, wenn eine korrekt-formatierte SMS empfangen wird, auch wenn die WebOTP API in Safari nicht vollständig unterstützt wird.

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

Eine weitere gute Verwendung für den [`AbortController`](/de/docs/Web/API/AbortController) ist das Abbrechen der `get()`-Anfrage nach einer bestimmten Zeit:

```js
setTimeout(() => {
  // abort after 30 seconds
  ac.abort();
}, 30 * 1000);
```

Wenn der Benutzer abgelenkt wird oder irgendwo anders hin navigiert, ist es gut, die Anfrage abzubrechen, damit ihm kein irrelevantes Berechtigungsfenster mehr angezeigt wird.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Telefonnummern im Web mit WebOTP verifizieren](https://developer.chrome.com/docs/identity/web-apis/web-otp) auf developer.chrome.com (2023)
- [OTP-Formulare innerhalb von Cross-Origin iframes mit der WebOTP API ausfüllen](https://web.dev/articles/web-otp-iframe)
