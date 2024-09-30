---
title: WebOTP API
slug: Web/API/WebOTP_API
l10n:
  sourceCommit: 44c4ec928281dc2d7c5ea42b7d2c74a2013f16ac
---

{{securecontext_header}}{{DefaultAPISidebar("WebOTP API")}}

Die **WebOTP API** bietet ein benutzerfreundliches Erlebnis für Webanwendungen, um zu überprüfen, ob eine Telefonnummer einem Benutzer gehört, wenn diese als Anmeldefaktor verwendet wird. WebOTP ist eine Erweiterung der [Credential Management API](/de/docs/Web/API/Credential_Management_API).

Die Überprüfung erfolgt über einen zweistufigen Prozess:

1. Der App-Client fordert ein Einmalpasswort (OTP) an, das aus einer speziell formatierten SMS-Nachricht stammt, die vom App-Server gesendet wird.
2. JavaScript wird verwendet, um das OTP in ein Validierungsformular auf dem App-Client einzutragen und dann zurück an den Server zu übermitteln, um zu überprüfen, ob es mit dem ursprünglich in der SMS gesendeten übereinstimmt.

## Konzepte und Nutzung

Telefonnummern werden oft verwendet, um den Benutzer einer App zu identifizieren. Eine SMS wird häufig eingesetzt, um zu überprüfen, ob die Nummer dem Benutzer gehört. Die SMS enthält typischerweise ein OTP, das der Benutzer in ein Formular in der App kopieren und einfügen muss, um zu verifizieren, dass er die Nummer besitzt. Dies ist eine etwas umständliche Benutzererfahrung.

OTP-Anwendungsfälle umfassen:

- Verbesserung der Anmeldesicherheit durch Verwendung einer Telefonnummer als zusätzlichen Faktor (z. B. für Zwei-Faktor-Authentifizierung (2FA) oder Multifaktor-Authentifizierung (MFA)).
- Überprüfung sensibler Aktionen wie Zahlungen.

Die WebOTP API ermöglicht es Web-Apps, diesen Validierungsprozess zu beschleunigen, indem das OTP aus der SMS kopiert und nach Zustimmung des Benutzers automatisch an die App übergeben wird (die meisten nativen Plattformen haben eine gleichwertige API).

Beachten Sie, dass ein OTP an die sendende Domain gebunden ist. Dies ist eine nützliche Sicherheitsmaßnahme, um zu überprüfen, dass das OTP aus der richtigen Quelle stammt, was das Risiko von Phishing-Angriffen bei der täglichen Wiederanmeldung verringern kann.

### Sicherheitsbedenken bei SMS-OTPs

SMS-OTPs sind nützlich, um Telefonnummern zu verifizieren, und die Verwendung von SMS als zweiten Faktor ist sicherlich besser als kein zweiter Faktor. In einigen Regionen werden andere Bezeichner wie E-Mail-Adressen und Authentifizierer nicht weit verbreitet verwendet, sodass SMS-OTPs sehr häufig sind.

Allerdings sind SMS nicht sehr sicher. Angreifer können eine SMS fälschen und die Telefonnummer einer Person übernehmen. Anbieter können Telefonnummern an neue Benutzer weitergeben, nachdem ein Konto geschlossen wurde.

Es wird daher empfohlen, eine stärkere Authentifizierungsmethode zu verwenden, wenn möglich, z. B. eine auf der [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) basierende Lösung mit einem Passwort und einem Sicherheitsschlüssel oder einem Passkey.

## Wie funktioniert die WebOTP API?

Der Prozess funktioniert folgendermaßen:

1. An dem Punkt, an dem eine Telefonnummernüberprüfung erforderlich ist, wird ein Benutzer von einem App-Client aufgefordert, seine Telefonnummer in ein Formular einzugeben, das dann an den App-Server übermittelt wird.
2. Der App-Client ruft dann [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) mit einer `otp`-Option auf, die einen `transport`-Typ von `"sms"` angibt. Dies löst eine Anforderung für ein OTP aus dem zugrunde liegenden System aus, dessen Quelle eine [speziell formatierte SMS-Nachricht](#sms-nachrichtenformat) (die das OTP und die Domain der App enthält) vom App-Server sein wird. Der `get()`-Aufruf basiert auf einem {{jsxref("Promise")}} und wartet darauf, dass die SMS-Nachricht empfangen wird.
3. Der App-Server sendet die SMS-Nachricht an die angegebene Telefonnummer. Dies muss unmittelbar nach Schritt 2 erfolgen.
4. Wenn die SMS auf dem Gerät empfangen wird und die Domain der App enthält, wird der Benutzer vom Browser gefragt, ob er der Verwendung des OTP zustimmt. Chrome beispielsweise zeigt einen Dialog an, der um Erlaubnis bittet, das OTP aus der SMS abzurufen; andere Browser können es anders handhaben. Wenn der Benutzer zustimmt, wird der `get()`-Aufruf mit einem [`OTPCredential`](/de/docs/Web/API/OTPCredential)-Objekt erfüllt, das das OTP enthält.
5. Sie können das OTP dann auf beliebige Weise verwenden. Die typische Nutzung wäre, es als Wert des Validierungsformulars auf dem App-Client festzulegen und das Formular dann abzusenden, um den Prozess so nahtlos wie möglich zu gestalten.
6. Der App-Server wird dann überprüfen, ob das zurückgesendete OTP mit dem in der SMS ursprünglich gesendeten übereinstimmt, und falls ja, den Prozess abschließen (z. B. den Benutzer anmelden).

### SMS-Nachrichtenformat

Eine typische SMS-Nachricht sieht so aus:

```plain
Your verification code is 123456.

@www.example.com #123456
```

- Die erste und zweite leere Zeile sind optional und dienen der menschlichen Lesbarkeit.
- Die letzte Zeile ist zwingend erforderlich. Sie muss die letzte Zeile sein, wenn andere vorhanden sind, und muss bestehen aus:
  - Dem Domain-Teil der URL der Website, die die API aufgerufen hat, vorangestellt mit einem `@`.
  - Gefolgt von einem Leerzeichen.
  - Gefolgt vom OTP, vorangestellt mit einem Rautezeichen (`#`).

> [!NOTE]
> Der angegebene Domain-Wert darf kein URL-Schema, keinen Port oder andere URL-Funktionen enthalten, die oben nicht angezeigt werden.

Wenn die `get()`-Methode von einer Drittanbieter-Site in einem {{htmlelement("iframe")}} aufgerufen wird, sollte die SMS-Struktur wie folgt aussehen:

```plain
Your verification code is 123456.

@top-level.example.com #123456 @embedded.com
```

In diesem Fall muss die letzte Zeile bestehen aus:

- Dem Domain-Teil des Top-Level-Domains, vorangestellt mit einem `@`.
- Gefolgt von einem Leerzeichen.
- Gefolgt vom OTP, vorangestellt mit einem Rautezeichen (`#`).
- Gefolgt von einem Leerzeichen.
- Gefolgt vom Domain-Teil der eingebetteten Domain, vorangestellt mit einem `@`.

## Steuerung des Zugriffs auf die API

Die Verfügbarkeit von WebOTP kann mit einer [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Permissions_Policy) gesteuert werden, die eine {{httpheader("Permissions-Policy/otp-credentials", "otp-credentials")}} Direktive angibt. Diese Direktive hat standardmäßig eine Erlaubnisliste von `"self"`, was bedeutet, dass diese Methoden standardmäßig in Kontexten auf oberster Dokumentenebene verwendet werden können.

Sie könnten eine Direktive angeben, die die Verwendung von WebOTP in einer bestimmten Cross-Origin-Domain (z. B. innerhalb eines {{htmlelement("iframe")}}) wie folgt ermöglicht:

```http
Permissions-Policy: otp-credentials=(self "https://embedded.com")
```

Oder Sie könnten es direkt im `<iframe>` wie folgt spezifizieren:

```html
<iframe src="https://embedded.com/..." allow="otp-credentials"> ... </iframe>
```

> [!NOTE]
> Wenn eine Richtlinie die Verwendung von WebOTP `get()` verbietet, werden von ihm zurückgegebene {{jsxref("Promise", "Promises")}} mit einem `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException) abgelehnt.

## Schnittstellen

- [`OTPCredential`](/de/docs/Web/API/OTPCredential)
  - : Wird zurückgegeben, wenn ein WebOTP `get()`-Aufruf erfüllt wird; enthält eine `code`-Eigenschaft, die das abgerufene OTP enthält.

### Erweiterungen anderer Schnittstellen

- [`CredentialsContainer.get()`](/de/docs/Web/API/CredentialsContainer/get), die `otp`-Option
  - : Der Aufruf von `get()` mit einer `otp`-Option weist den Benutzeragenten an, zu versuchen, ein OTP aus der SMS-App des darunter liegenden Systems abzurufen.

## Beispiele

In diesem Beispiel wird, wenn eine SMS-Nachricht eingeht und der Benutzer die Erlaubnis erteilt, ein [`OTPCredential`](/de/docs/Web/API/OTPCredential)-Objekt mit einem OTP zurückgegeben. Dieses Passwort wird dann in das Verifizierungsformularfeld vorab ausgefüllt, und das Formular wird übermittelt.

[Testen Sie diese Demo mit einem Telefon](https://web-otp.glitch.me/).

Das Formularfeld enthält ein [`autocomplete`](/de/docs/Web/HTML/Attributes/autocomplete)-Attribut mit dem Wert `one-time-code`. Dies ist für das Funktionieren der WebOTP API nicht erforderlich, aber es ist sinnvoll, es zu inkludieren. Infolgedessen wird Safari den Benutzer auffordern, dieses Feld mit dem OTP automatisch zu füllen, wenn eine korrekt formatierte SMS empfangen wird, auch wenn die WebOTP API in Safari nicht vollständig unterstützt wird.

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

Ein weiterer guter Anwendungsfall für den [`AbortController`](/de/docs/Web/API/AbortController) ist das Abbrechen der `get()`-Anfrage nach einer bestimmten Zeit:

```js
setTimeout(() => {
  // abort after 30 seconds
  ac.abort();
}, 30 * 1000);
```

Wenn der Benutzer abgelenkt wird oder woanders hin navigiert, ist es gut, die Anfrage abzubrechen, damit er nicht mit einem Erlaubnisdialog konfrontiert wird, der für ihn nicht mehr relevant ist.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Telefonnummern im Web mit WebOTP verifizieren](https://developer.chrome.com/docs/identity/web-apis/web-otp) auf developer.chrome.com (2023)
- [OTP-Formulare in Cross-Origin-iframes mit WebOTP API ausfüllen](https://web.dev/articles/web-otp-iframe)
