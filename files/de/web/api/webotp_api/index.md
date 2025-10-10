---
title: WebOTP API
slug: Web/API/WebOTP_API
l10n:
  sourceCommit: 79f65d8322a4e55e9f3f4c91441c9188dbe670e0
---

{{DefaultAPISidebar("WebOTP API")}}{{SeeCompatTable}}{{securecontext_header}}

Die **WebOTP API** bietet ein optimiertes Benutzererlebnis für Web-Apps, um zu verifizieren, dass eine Telefonnummer einem Benutzer gehört, wenn diese als Anmeldemethode verwendet wird. WebOTP ist eine Erweiterung der [Credential Management API](/de/docs/Web/API/Credential_Management_API).

Die Verifizierung erfolgt über einen zweistufigen Prozess:

1. Der App-Client fordert ein Einmalpasswort (OTP) an, das aus einer speziell formatierten SMS-Nachricht gewonnen wird, die vom App-Server gesendet wird.
2. JavaScript wird verwendet, um das OTP in ein Validierungsformular im App-Client einzugeben und es an den Server zurückzusenden, um zu überprüfen, ob es mit dem übereinstimmt, was ursprünglich in der SMS gesendet wurde.

## Konzepte und Verwendung

Telefonnummern werden häufig verwendet, um den Benutzer einer App zu identifizieren. Eine SMS wird häufig eingesetzt, um zu verifizieren, dass die Nummer dem Benutzer gehört. Die SMS enthält typischerweise ein OTP, das der Benutzer kopieren und in ein Formular in der App einfügen muss, um zu bestätigen, dass er die Nummer besitzt. Dies ist ein etwas umständliches Benutzererlebnis.

OTP-Anwendungsfälle umfassen:

- Verbesserung der Anmeldesicherheit, indem eine Telefonnummer als zusätzlicher Faktor in einem {{Glossary("multi-factor_authentication", "Mehrfaktor-Authentifizierungssystem")}} verwendet wird.
- Verifizierung sensibler Aktionen, wie z. B. Zahlungen.

Die WebOTP API ermöglicht es Web-Apps, diesen Validierungsprozess zu beschleunigen, indem das OTP aus der SMS kopiert und nach Zustimmung des Benutzers automatisch an die App übermittelt wird (die meisten nativen Plattformen haben eine äquivalente API).

Beachten Sie, dass ein OTP an die sendende Domain gebunden ist. Dies ist eine nützliche Sicherheitsrestriktion, um zu überprüfen, dass das OTP aus der richtigen Quelle stammt, was das Risiko von Phishing-Angriffen bei alltäglichen Re-Authentifizierungen mindern kann.

### Sicherheitsbedenken bei SMS-OTPs

SMS-OTPs sind nützlich, um Telefonnummern zu verifizieren, und die Verwendung von SMS als zweiten Faktor ist sicherlich besser, als keinen zweiten Faktor zu haben. In einigen Regionen sind andere Identifikatoren wie E-Mail-Adressen und Authenticatoren nicht weit verbreitet, daher sind SMS-OTPs sehr häufig.

Allerdings sind SMS nicht sehr sicher. Angreifer können eine SMS fälschen und die Telefonnummer einer Person kapern. Anbieter können Telefonnummern nach Schließung eines Kontos an neue Benutzer vergeben.

Es wird daher empfohlen, eine stärkere Form der Authentifizierung zu verwenden, falls möglich, z. B. eine auf der [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) basierende Lösung mit einem Passwort und einem Sicherheitsschlüssel oder ein Passkey.

## Wie funktioniert die WebOTP API?

Der Prozess funktioniert folgendermaßen:

1. An dem Punkt, an dem eine Telefonnummerüberprüfung erforderlich ist, wird der App-Client den Benutzer bitten, seine Telefonnummer in ein Formular einzugeben, das dann an den App-Server übermittelt wird.
2. Der App-Client ruft dann [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) mit einer `otp`-Option auf, die einen `transport`-Typ von `"sms"` angibt. Dies löst eine Anfrage an das darunterliegende System aus, wobei die Quelle eine [speziell formatierte SMS-Nachricht](#sms-nachrichtenformat) (die das OTP und die Domain der App enthält) ist, die vom App-Server empfangen wird. Der `get()`-Aufruf basiert auf {{jsxref("Promise")}} und wartet darauf, dass die SMS-Nachricht empfangen wird.
3. Der App-Server sendet die SMS-Nachricht an die angegebene Telefonnummer. Dies muss direkt nach Schritt 2 geschehen sein.
4. Wenn die SMS auf dem Gerät empfangen wird und die Domain der App enthält, wird der Browser den Benutzer fragen, ob er zustimmt, dass das OTP abgerufen/verwendet wird. Chrome zeigt beispielsweise ein Dialogfeld an, in dem um Erlaubnis gefragt wird, das OTP aus der SMS abzurufen; andere Browser können es anders handhaben. Wenn sie zustimmen, wird der `get()`-Aufruf mit einem [`OTPCredential`](/de/docs/Web/API/OTPCredential)-Objekt erfüllt, das das OTP enthält.
5. Sie können das OTP dann nach Belieben verwenden. Typischerweise wird es als Wert in das Validierungsformular auf dem App-Client gesetzt und dann das Formular übermittelt, um den Prozess so nahtlos wie möglich zu gestalten.
6. Der App-Server wird dann überprüfen, ob das zurückgesendete OTP mit dem übereinstimmt, was ursprünglich in der SMS gesendet wurde, und den Prozess abschließen (zum Beispiel den Benutzer anmelden).

### SMS-Nachrichtenformat

Eine typische SMS-Nachricht sieht wie folgt aus:

```plain
Your verification code is 123456.

@www.example.com #123456
```

- Die erste Zeile und die zweite leere Zeile sind optional und dienen der Lesbarkeit für Menschen.
- Die letzte Zeile ist obligatorisch. Sie muss die letzte Zeile sein, wenn weitere Zeilen vorhanden sind, und muss bestehen aus:
  - Dem Domain-Teil der URL der Webseite, die die API aufgerufen hat, vorangestellt mit einem `@`.
  - Gefolgt von einem Leerzeichen.
  - Gefolgt von dem OTP, vorangestellt mit einem Nummernzeichen (`#`).

> [!NOTE]
> Der angegebene Domain-Wert darf kein URL-Schema, keinen Port oder andere URL-Funktionen enthalten, die oben nicht angezeigt werden.

Wenn die `get()`-Methode von einer eingebetteten Drittanbieter-Website in einem {{htmlelement("iframe")}} aufgerufen wird, sollte die SMS-Struktur wie folgt sein:

```plain
Your verification code is 123456.

@top-level.example.com #123456 @embedded.com
```

In diesem Fall muss die letzte Zeile bestehen aus:

- Dem Domain-Teil der obersten Domain, vorangestellt mit einem `@`.
- Gefolgt von einem Leerzeichen.
- Gefolgt von dem OTP, vorangestellt mit einem Nummernzeichen (`#`).
- Gefolgt von einem Leerzeichen.
- Gefolgt von dem Domain-Teil der eingebetteten Domain, vorangestellt mit einem `@`.

## Steuerung des Zugriffs auf die API

Die Verfügbarkeit von WebOTP kann mithilfe einer [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy) gesteuert werden, die eine {{httpheader("Permissions-Policy/otp-credentials", "otp-credentials")}}-Direktive angibt. Diese Direktive hat einen standardmäßigen Zulassungswert von `"self"`, was bedeutet, dass diese Methoden standardmäßig in Top-Level-Dokumentkontexten verwendet werden können.

Sie könnten eine Direktive angeben, die die Verwendung von WebOTP in einer bestimmten Cross-Origin-Domain zulässt (d.h. innerhalb eines {{htmlelement("iframe")}}) wie diese:

```http
Permissions-Policy: otp-credentials=(self "https://embedded.com")
```

Oder Sie könnten es direkt im `<iframe>` angeben, wie folgt:

```html
<iframe src="https://embedded.com/..." allow="otp-credentials"> ... </iframe>
```

> [!NOTE]
> Wo eine Richtlinie die Verwendung von WebOTP `get()` verbietet, werden {{jsxref("Promise", "Promises")}}, die dadurch zurückgegeben werden, mit einem `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException) abgelehnt.

## Schnittstellen

- [`OTPCredential`](/de/docs/Web/API/OTPCredential)
  - : Wird zurückgegeben, wenn ein WebOTP `get()`-Aufruf erfolgreich ist; enthält eine `code`-Eigenschaft, die das abgerufene OTP enthält.

### Erweiterungen zu anderen Schnittstellen

- [`CredentialsContainer.get()`](/de/docs/Web/API/CredentialsContainer/get), die `otp`-Option
  - : Ein Aufruf von `get()` mit einer `otp`-Option weist den Benutzeragenten an, zu versuchen, ein OTP aus der SMS-App des darunterliegenden Systems abzurufen.

## Beispiele

In diesem Beispiel, wenn eine SMS-Nachricht eintrifft und der Benutzer die Erlaubnis erteilt, wird ein [`OTPCredential`](/de/docs/Web/API/OTPCredential)-Objekt mit einem OTP zurückgegeben. Dieses Passwort wird dann in das Verifizierungsformularfeld vorab ausgefüllt, und das Formular wird übermittelt.

[Probieren Sie diese Demo mit einem Telefon aus](https://chrome.dev/web-otp-demo/).

Das Formularfeld enthält ein [`autocomplete`](/de/docs/Web/HTML/Reference/Attributes/autocomplete)-Attribut mit dem Wert `one-time-code`. Dies ist nicht notwendig, damit die WebOTP API funktioniert, aber es ist sinnvoll, es einzuschließen. Dadurch wird Safari den Benutzer dazu auffordern, dieses Feld mit dem OTP auszufüllen, wenn eine korrekt formatierte SMS empfangen wird, obwohl die WebOTP API in Safari nicht vollständig unterstützt wird.

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

Ein weiterer guter Anwendungsfall für den [`AbortController`](/de/docs/Web/API/AbortController) ist das Abbrechen der `get()`-Anfrage nach einer gewissen Zeitspanne:

```js
setTimeout(() => {
  // abort after 30 seconds
  ac.abort();
}, 30 * 1000);
```

Wenn der Benutzer abgelenkt wird oder woanders hingeht, ist es gut, die Anfrage abzubrechen, damit er nicht mit einem Berechtigungsdialog konfrontiert wird, der nicht mehr für ihn relevant ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Telefonnummern im Web mit WebOTP verifizieren](https://developer.chrome.com/docs/identity/web-apis/web-otp) auf developer.chrome.com (2023)
- [OTP-Formulare in Cross-Origin-Iframes mit WebOTP API ausfüllen](https://web.dev/articles/web-otp-iframe)
