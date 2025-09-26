---
title: WebOTP API
slug: Web/API/WebOTP_API
l10n:
  sourceCommit: 9584088475846ff014dadddf8f6eff25c0796bbb
---

{{DefaultAPISidebar("WebOTP API")}}{{SeeCompatTable}}{{securecontext_header}}

Die **WebOTP-API** bietet eine optimierte Benutzererfahrung für Webanwendungen, um zu verifizieren, dass eine Telefonnummer einem Benutzer gehört, wenn sie als Anmeldefaktor verwendet wird. WebOTP ist eine Erweiterung der [Credential Management API](/de/docs/Web/API/Credential_Management_API).

Die Verifizierung erfolgt über einen zweistufigen Prozess:

1. Der App-Client fordert ein Einmalkennwort (OTP) an, das aus einer speziell formatierten SMS-Nachricht stammt, die vom App-Server gesendet wird.
2. JavaScript wird verwendet, um das OTP in ein Validierungsformular auf dem App-Client einzugeben, und es wird zurück an den Server gesendet, um zu überprüfen, ob es mit dem übereinstimmt, was ursprünglich in der SMS gesendet wurde.

## Konzepte und Nutzung

Telefonnummern werden häufig verwendet, um den Benutzer einer App zu identifizieren. Eine SMS wird häufig eingesetzt, um zu überprüfen, ob die Nummer dem Benutzer gehört. Die SMS enthält typischerweise ein OTP, das der Benutzer in ein Formular in der App kopieren und einfügen muss, um zu bestätigen, dass er die Nummer besitzt. Dies ist eine etwas umständliche Benutzererfahrung.

OTP-Anwendungsfälle umfassen:

- Verbesserung der Anmeldesicherheit durch Verwendung einer Telefonnummer als zusätzlichen Faktor (d.h. für Zwei-Faktor-Authentifizierung (2FA) oder Mehrfaktor-Authentifizierung (MFA)).
- Überprüfung sensibler Aktionen wie Zahlungen.

Die WebOTP-API ermöglicht es Webanwendungen, diesen Validierungsprozess zu beschleunigen, indem sie das OTP aus der SMS kopieren und es automatisch an die App übergeben, nachdem der Benutzer sein Einverständnis gegeben hat (die meisten nativen Plattformen haben eine gleichwertige API).

Beachten Sie, dass ein OTP an die sendende Domain gebunden ist. Dies ist eine nützliche Sicherheitsbeschränkung, um zu überprüfen, dass das OTP aus der richtigen Quelle stammt, was das Risiko von Phishing-Angriffen bei täglichen Reauthentifizierungen mindern kann.

### Sicherheitsbedenken bei SMS-OTPs

SMS-OTPs sind nützlich, um Telefonnummern zu überprüfen, und die Verwendung von SMS als zweiten Faktor ist sicherlich besser als keinen zweiten Faktor zu haben. In einigen Regionen werden andere Identifikatoren wie E-Mail-Adressen und Authentifikatoren nicht weit verbreitet eingesetzt, weshalb SMS-OTPs sehr häufig verwendet werden.

Allerdings sind SMS nicht sehr sicher. Angreifer können eine SMS fälschen und die Telefonnummer einer Person kapern. Anbieter können Telefonnummern an neue Benutzer weitergeben, nachdem ein Konto geschlossen wurde.

Es wird daher empfohlen, wenn möglich eine stärkere Form der Authentifizierung zu verwenden, wie zum Beispiel eine Lösung auf Basis der [Web Authentication API](/de/docs/Web/API/Web_Authentication_API), die ein Passwort und einen Sicherheitsschlüssel oder ein Passkey beinhaltet.

## Wie funktioniert die WebOTP-API?

Der Prozess funktioniert folgendermaßen:

1. Wenn eine Telefonnummernverifizierung erforderlich ist, wird ein App-Client den Benutzer bitten, seine Telefonnummer in ein Formular einzugeben, das dann an den App-Server gesendet wird.
2. Der App-Client ruft dann [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) mit einer `otp`-Option auf, die einen `transport`-Typ von `"sms"` angibt. Dies löst eine Anfrage nach einem OTP aus dem zugrunde liegenden System aus, dessen Quelle eine [speziell formatierte SMS-Nachricht](#sms-nachrichtenformat) ist (die das OTP und die Domain der App enthält), die vom App-Server empfangen wird. Der `get()`-Aufruf basiert auf {{jsxref("Promise")}} und wartet darauf, dass die SMS empfangen wird.
3. Der App-Server sendet die SMS-Nachricht an die angegebene Telefonnummer. Dies muss unmittelbar nach Schritt 2 geschehen.
4. Wenn die SMS auf dem Gerät empfangen wird und die Domain der App enthält, wird der Browser den Benutzer fragen, ob er dem Abruf/der Verwendung des OTP zustimmt. Chrome zeigt beispielsweise einen Dialog an, in dem um Erlaubnis gebeten wird, das OTP aus der SMS abzurufen; andere Browser könnten es anders handhaben. Wenn der Benutzer zustimmt, wird der `get()`-Aufruf mit einem [`OTPCredential`](/de/docs/Web/API/OTPCredential)-Objekt erfüllt, das das OTP enthält.
5. Sie können dann das OTP nach Belieben verwenden. Die typische Nutzung wäre, es als Wert des Validierungsformulars auf dem App-Client zu setzen und dann das Formular abzusenden, um den Prozess so nahtlos wie möglich zu gestalten.
6. Der App-Server wird dann überprüfen, ob das an ihn zurückgesandte OTP mit dem ursprünglich in der SMS gesendeten übereinstimmt, und, falls ja, den Prozess abschließen (zum Beispiel den Benutzer anmelden).

### SMS-Nachrichtenformat

Eine typische SMS-Nachricht sieht folgendermaßen aus:

```plain
Your verification code is 123456.

@www.example.com #123456
```

- Die erste Zeile und die zweite leere Zeile sind optional und dienen der Lesbarkeit durch Menschen.
- Die letzte Zeile ist obligatorisch. Sie muss die letzte Zeile sein, wenn weitere vorhanden sind, und muss bestehen aus:
  - Dem Domain-Teil der URL der Website, die die API aufgerufen hat, vorangestellt mit einem `@`.
  - Gefolgt von einem Leerzeichen.
  - Gefolgt vom OTP, vorangestellt mit einem Rautezeichen (`#`).

> [!NOTE]
> Der angegebene Domainwert darf kein URL-Schema, keinen Port oder andere hier nicht gezeigte URL-Features enthalten.

Falls die `get()`-Methode von einer Drittanbieter-Seite innerhalb eines {{htmlelement("iframe")}} aufgerufen wird, sollte die SMS-Struktur folgendermaßen aussehen:

```plain
Your verification code is 123456.

@top-level.example.com #123456 @embedded.com
```

In diesem Fall muss die letzte Zeile bestehen aus:

- Dem Domain-Teil der obersten Domain, vorangestellt mit einem `@`.
- Gefolgt von einem Leerzeichen.
- Gefolgt vom OTP, vorangestellt mit einem Rautezeichen (`#`).
- Gefolgt von einem Leerzeichen.
- Gefolgt vom Domain-Teil der eingebetteten Domain, vorangestellt mit einem `@`.

## Zugriffskontrolle auf die API

Die Verfügbarkeit von WebOTP kann über eine [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) gesteuert werden, die eine {{httpheader("Permissions-Policy/otp-credentials", "otp-credentials")}}-Direktive angibt. Diese Direktive hat einen Standard-Zulassungslistenwert von `"self"`, was bedeutet, dass diese Methoden standardmäßig in obersten Dokumentkontexten verwendet werden können.

Sie könnten eine Direktive angeben, die die Verwendung von WebOTP in einer bestimmten plattformübergreifenden Domain (z.B. innerhalb eines {{htmlelement("iframe")}}) erlaubt, wie folgt:

```http
Permissions-Policy: otp-credentials=(self "https://embedded.com")
```

Oder Sie könnten es direkt auf dem `<iframe>` angeben:

```html
<iframe src="https://embedded.com/..." allow="otp-credentials"> ... </iframe>
```

> [!NOTE]
> Wo eine Richtlinie die Nutzung von WebOTP `get()` verbietet, werden die von {{jsxref("Promise", "promises")}} zurückgegebenen durch sie mit einem `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException) zurückgewiesen.

## Schnittstellen

- [`OTPCredential`](/de/docs/Web/API/OTPCredential)
  - : Wird zurückgegeben, wenn ein WebOTP-`get()`-Aufruf erfüllt wird; enthält eine `code`-Eigenschaft, die das abgerufene OTP enthält.

### Erweiterungen zu anderen Schnittstellen

- [`CredentialsContainer.get()`](/de/docs/Web/API/CredentialsContainer/get), die `otp`-Option
  - : Der Aufruf von `get()` mit einer `otp`-Option weist den User-Agent an, zu versuchen, ein OTP aus der SMS-App des zugrunde liegenden Systems abzurufen.

## Beispiele

In diesem Beispiel wird, wenn eine SMS-Nachricht eingeht und der Benutzer die Erlaubnis erteilt, ein [`OTPCredential`](/de/docs/Web/API/OTPCredential)-Objekt mit einem OTP zurückgegeben. Dieses Passwort wird dann im Verifikationsformularfeld vorausgefüllt und das Formular wird abgeschickt.

[Probieren Sie diese Demo mit einem Telefon aus](https://chrome.dev/web-otp-demo/).

Das Formularfeld enthält ein [`autocomplete`](/de/docs/Web/HTML/Reference/Attributes/autocomplete)-Attribut mit dem Wert `one-time-code`. Dies ist nicht notwendig, damit die WebOTP-API funktioniert, aber es ist sinnvoll, es einzuschließen. Infolgedessen wird Safari den Benutzer auffordern, dieses Feld mit dem OTP automatisch auszufüllen, wenn eine korrekt formatierte SMS empfangen wird, obwohl die WebOTP-API in Safari nicht vollständig unterstützt wird.

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

Wenn der Benutzer abgelenkt wird oder woanders hingelangt, ist es gut, die Anfrage abzubrechen, damit ihm keine Berechtigungsaufforderung mehr angezeigt wird, die für ihn nicht mehr relevant ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Telefonnummern im Web mit WebOTP verifizieren](https://developer.chrome.com/docs/identity/web-apis/web-otp) auf developer.chrome.com (2023)
- [OTP-Formulare innerhalb von plattformübergreifenden iframes mit der WebOTP-API ausfüllen](https://web.dev/articles/web-otp-iframe)
