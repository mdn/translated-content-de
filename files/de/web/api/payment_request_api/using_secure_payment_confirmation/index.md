---
title: Verwendung der Secure Payment Confirmation
slug: Web/API/Payment_Request_API/Using_secure_payment_confirmation
l10n:
  sourceCommit: aa8fa82a902746b0bd97839180fc2b5397088140
---

{{securecontext_header}}{{DefaultAPISidebar("Payment Request API")}}

Secure Payment Confirmation (SPC), verfügbar über die Payment Request API, bietet einen Mechanismus zur starken Kundenauthentifizierung während des Checkouts, um so vor Online-Zahlungsbetrug zu schützen.

## Überblick

Um vor Online-Zahlungsbetrug zu schützen, wird häufig die Authentifizierung des Kontoinhabers durchgeführt. Eine starke Authentifizierung senkt das Betrugsrisiko, erhöht jedoch die Wahrscheinlichkeit, dass Reibungsverluste während des Checkouts zu einem Abbruch des Einkaufswagens führen. Banken, Händler, Zahlungsdienstanbieter und andere Beteiligte im Zahlungsökosystem berücksichtigen daher eine Reihe von Faktoren, wenn sie entscheiden, welche Art und Stärke der Authentifizierung sie für jede Transaktion nutzen, einschließlich des Betrags, der gekauften Artikel, der Zahlungshistorie des Benutzers, wer bei Betrug haftet und regulatorische Anforderungen (wie z.B. die Anforderungen der [europäischen Zahlungsdiensterichtlinie 2](<https://en.wikipedia.org/wiki/Payment_Services_Directive#Revised_Directive_on_Payment_Services_(PSD2)>) für eine starke Kundenauthentifizierung und den Nachweis der Zustimmung des Benutzers).

Eine Reihe von Mechanismen wird zur starken Authentifizierung in Kombination verwendet, einschließlich Passwörter, einmalige SMS-Codes, mobile Anwendungen und Web Authentication. Jeder hat seine Vor- und Nachteile. Zum Beispiel sind einmalige SMS-Codes den Benutzern mittlerweile vertraut, können aber Usability-Probleme (wie Geräteinverfügbarkeit) und Sicherheitsanfälligkeiten mit sich bringen. Web Authentication bietet eine bessere Sicherheit und ist in allen großen Browsern sowie in allen modernen Mobilgeräten und Computern verfügbar. Allein für sich genommen bietet Web Authentication jedoch keinen Nachweis der Zustimmung des Benutzers zur Zahlung.

SPC ist so konzipiert, dass es eine optimierte starke Kundenauthentifizierung (SCA) in einer Vielzahl von Zahlungssystemen ermöglicht und kryptographische Nachweise liefert, dass der Benutzer den Bedingungen einer Transaktion zugestimmt hat. Wenn die API aufgerufen wird, zeigt der Browser Elemente der Transaktion in einem Dialogfeld an: den Namen des Händlers, das Zahlungsmittel sowie Betrag und Währung der Zahlung. Zum Beispiel folgt hier das Transaktionsdialogfeld des Chrome-Browsers (Version M118) für SPC:

![Chrome M118 Transaktionsdialog für SPC](chrome-tx-dialog.png)

Mit der Auswahl von "Überprüfen" wird ein Web Authentication-Prozess eingeleitet. Wenn der Benutzer erfolgreich authentifiziert wird (z.B. durch biometrische Authentifikatoren auf seinem Telefon oder Laptop), übermittelt der Browser die im Dialog angezeigten Daten an den Authentifikator, der sie signiert und als Teil der resultierenden Web Authentication-Aussage zurücksendet. Die Aussage kann dann zur Validierung an die vertrauende Partei weitergeleitet werden. Da der Browser die angezeigten Daten direkt an den Authentifikator übergibt (ohne dass JavaScript-Code die Daten ändern kann), kann die vertrauende Partei mit hoher Sicherheit davon ausgehen, dass der Benutzer den angezeigten Transaktionsdaten zugestimmt hat.

Somit baut SPC auf Web Authentication auf, um Websites eine optimierte starke Authentifizierung und den Nachweis der Benutzerzustimmung zu ermöglichen. SPC wird typischerweise als Teil des Authentifizierungsrahmenwerks eines bestimmten Zahlungssystems verwendet. So wird SPC sowohl von EMV® 3-D Secure (Version 2.3.1) als auch von EMV® Secure Remote Commerce (Version 1.3) unterstützt, ist aber dafür ausgelegt, mit einer Vielzahl von Zahlungsmethoden zu arbeiten, einschließlich "Push-Zahlungen" wie direkten Kreditüberweisungen und Wallet-Zahlungen.

## Zahlungsmethodenanforderung

Secure Payment Confirmation nutzt die zugrunde liegenden Fähigkeiten der Payment Request API. Der standardisierte Zahlungsmethodenbezeichner für den Secure Payment Confirmation-Zahlungsmanager ist [`"secure-payment-confirmation"`](/de/docs/Web/API/Payment_Request_API/Concepts#secure-payment-confirmation).

## Web-Authentifizierungs-Erweiterung

Secure Payment Confirmation definiert eine [Web Authentication-Erweiterung](/de/docs/Web/API/Web_Authentication_API/WebAuthn_extensions), [`payment`](/de/docs/Web/API/Web_Authentication_API/WebAuthn_extensions#payment), die drei zahlungsspezifische Fähigkeiten zusätzlich zur traditionellen Web Authentication bietet:

1. Wenn sich die vertrauende Partei anmeldet, erlaubt es anderen Entitäten als der vertrauenden Partei, eine Zahlungsauthentifizierungszeremonie mit den Anmeldeinformationen der vertrauenden Partei einzuleiten. SPC entkoppelt die Authentifizierungszeremonie von der Validierung der Authentifizierungsergebnisse. Dadurch können Händler (oder deren Zahlungsdienstanbieter in einem Cross-Origin-Iframe) die Kontrolle über die Benutzererfahrung der Authentifizierung behalten, ohne den Benutzer (über eine Umleitung) auf eine andere Website oder mobile App weiterzuleiten. Wenn die vertrauende Partei beispielsweise die Bank ist, kann der Händler das Benutzererlebnis der Authentifizierung verwalten, während die Bank dennoch die Authentifizierungsergebnisse validieren kann. Die Kommunikation zwischen den Parteien (von Anmeldeinformationen und Authentifizierungsergebnissen) erfolgt typischerweise über zahlungssystemspezifische Wege wie EMV® 3-D Secure.
2. Erzwingt, dass der Benutzeragent dem Benutzer angemessen kommuniziert, dass er eine Transaktion und die Transaktionsdetails authentifiziert. Diese Details werden dann in die vom Authentifikator signierte Aussage aufgenommen.
3. Erlaubt das Aufrufen von navigator.credentials.create in einem Cross-Origin-Iframe, solange eine "payment" Berechtigungspolitik auf dem Iframe festgelegt ist.
   Hinweis: Diese Fähigkeit ist jetzt Teil von WebAuthn Level 3, wo sie die "publickey-credential-create" Berechtigungspolitik verwendet. Entwickler werden ermutigt, diese zu verwenden, wenn verfügbar, anstatt sich auf die "payment" Berechtigung von SPC zu verlassen.

## Beispiele

### Erstellen eines Anmeldedatensatzes

Das Erstellen eines Anmeldedatensatzes in Secure Payment Confirmation erfolgt durch denselben Aufruf von [`navigator.credentials.create()`](/de/docs/Web/API/CredentialsContainer/create) wie bei Web Authentication, jedoch mit einer angegebenen `payment`-Erweiterung.

```js
const publicKey = {
  challenge: Uint8Array.from(randomStringFromServer, (c) => c.charCodeAt(0)),
  rp: {
    name: "Fancy Bank",
  },
  user: {
    // Assuming that userId is ASCII-only
    id: Uint8Array.from(userId, (c) => c.charCodeAt(0)),
    name: "jane.doe@example.org",
    displayName: "Jane Doe",
  },
  pubKeyCredParams: [
    {
      type: "public-key",
      alg: -7, // "ES256"
    },
    {
      type: "public-key",
      alg: -257, // "RS256"
    },
  ],
  authenticatorSelection: {
    userVerification: "required",
    residentKey: "required",
    authenticatorAttachment: "platform",
  },
  timeout: 60000, // 1 minute
  extensions: {
    payment: {
      isPayment: true,
    },
  },
};
navigator.credentials
  .create({ publicKey })
  .then((newCredentialInfo) => {
    // Send new credential info to server for verification and registration.
  })
  .catch((err) => {
    // No acceptable authenticator or user refused consent. Handle appropriately.
  });
```

### Erstellen eines Anmeldedatensatzes in einem Cross-Origin-Iframe

SPC erlaubt es, einen Anmeldedatensatz in einem Cross-Origin-Iframe zu erstellen (z.B., wenn `merchant.com` ein Iframe von `bank.com` einbettet).

In diesem Prozess authentifiziert die vertrauende Partei (z.B. eine Bank) den Kontoinhaber als Teil einer Transaktion durch einen anderen Mechanismus als SPC (z.B. durch Verwendung eines Einmalpasscodes oder eines anderen Mechanismus). Die vertrauende Partei bietet dem Benutzer dann die Möglichkeit, ein SPC-Anmeldedatensatz zu registrieren, um zukünftige Transaktionen zu vereinfachen. Der Benutzer registriert einen SPC-Anmeldedatensatz bei der vertrauenden Partei.
Damit diese Schritte im Kontext des Händlers geschehen können (d.h. ohne Umleitung), muss auf dem Cross-Origin-Iframe die [`payment`](/de/docs/Web/HTTP/Headers/Permissions-Policy/payment) Berechtigungspolitik gesetzt sein.

Zum Beispiel:

```html
<!-- Assume parent origin is merchant.com -->
<!-- Inside this cross-origin iframe, script would be allowed to create a SPC credential for example.org -->
<iframe src="https://example.org" allow="payment"></iframe>
```

### Authentifizieren einer Zahlung

Ein Origin kann die Payment Request API mit der Zahlungsmethode `"secure-payment-confirmation"` aufrufen, um den Benutzer aufzufordern, ein Secure Payment Confirmation Anmeldedatensatz zu überprüfen, das von einem anderen Origin erstellt wurde. Der Browser zeigt eine native Benutzeroberfläche (den "Transaktionsdialog") mit Transaktionsdetails an (z.B. die Zahlungswährung und den Betrag sowie den Herausgeber-Origin).

> [!NOTE]
> Gemäß der Payment Request API, wenn `PaymentRequest` innerhalb eines Cross-Origin-Iframes verwendet wird (z.B. wenn `merchant.com` ein Iframe von `psp.com` einbettet und `psp.com` `PaymentRequest` verwenden möchte), muss auf diesem Iframe die `payment` Berechtigungspolitik gesetzt sein.

```js
const request = new PaymentRequest(
  [
    {
      supportedMethods: "secure-payment-confirmation",
      data: {
        // List of credential IDs obtained from the Account Provider.
        credentialIds,
        // The challenge is also obtained from the Account Provider.
        challenge: new Uint8Array(randomStringFromServer, (c) =>
          c.charCodeAt(0),
        ),
        instrument: {
          displayName: "Fancy Card ****1234",
          icon: "https://fancybank.com/card-art.png",
        },
        payeeOrigin: "https://merchant.com",
        timeout: 60000, // 1 minute
      },
    },
  ],
  {
    total: {
      label: "Total",
      amount: {
        currency: "USD",
        value: "5.00",
      },
    },
  },
);
try {
  // NOTE: canMakePayment() checks only public information for whether the SPC
  // call is valid. To preserve user privacy, it does not check whether any
  // passed credentials match the current device.
  const canMakePayment = await request.canMakePayment();
  if (!canMakePayment) {
    throw new Error("Cannot make payment");
  }
  const response = await request.show();
  await response.complete("success");
  // response.details is a PublicKeyCredential, with a clientDataJSON that
  // contains the transaction data for verification by the issuing bank.
  // send response.details to the issuing bank for verification
} catch (err) {
  // SPC cannot be used; merchant should fallback to traditional flows
}
```

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Payment Request API](/de/docs/Web/API/Payment_Request_API)
- [Zahlungsmethoden-Bezeichner](/de/docs/Web/API/Payment_Request_API/Concepts#payment_method_identifiers)
- [Web Authentication](/de/docs/Web/API/Web_Authentication_API)
- [Secure Payment Confirmation Erklärungsdokument](https://github.com/w3c/secure-payment-confirmation/blob/main/explainer.md)
- [Secure Payment Confirmation Umfang](https://github.com/w3c/secure-payment-confirmation/blob/main/scope.md)
- Allgemeines [Flussdiagramm für SPC während einer Zahlung](https://github.com/w3c/wpsig/blob/gh-pages/spc-general.png)
- [Secure Payment Confirmation Test Suite](https://wpt.fyi/results/secure-payment-confirmation?label=master&label=experimental&aligned)
- [Chrome-Entwicklerdokumentation für SPC](https://developer.chrome.com/docs/payments/secure-payment-confirmation)
- [EMV® 3-D Secure (Version 2.3)](https://www.emvco.com/emv-technologies/3-d-secure/)
- [EMV® Secure Remote Commerce (Version 1.3)](https://www.emvco.com/emv-technologies/secure-remote-commerce/)
