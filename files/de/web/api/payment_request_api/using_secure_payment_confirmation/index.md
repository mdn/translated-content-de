---
title: Verwendung der Secure Payment Confirmation
slug: Web/API/Payment_Request_API/Using_secure_payment_confirmation
l10n:
  sourceCommit: aa8fa82a902746b0bd97839180fc2b5397088140
---

{{securecontext_header}}{{DefaultAPISidebar("Payment Request API")}}

Secure Payment Confirmation (SPC), verfügbar über die Payment Request API, bietet einen Mechanismus für eine starke Kundenauthentifizierung während des Checkouts, um sich so gegen Online-Zahlungsbetrug zu schützen.

## Überblick

Um sich gegen Online-Zahlungsbetrug zu schützen, ist es üblich, den Kontoinhaber zu authentifizieren. Starke Authentifizierung verringert das Betrugsrisiko, erhöht aber die Wahrscheinlichkeit, dass Reibungen während des Checkouts zu einem Abbruch des Einkaufswagens führen. Banken, Händler, Zahlungsdienstleister und andere Akteure im Zahlungsökosystem berücksichtigen daher eine Reihe von Faktoren bei der Entscheidung, welche Art und Stärke der Authentifizierung für jede Transaktion verwendet werden soll, einschließlich des Betrags, der gekauften Artikel, der Zahlungshistorie des Benutzers, welche Partei im Betrugsfall haftbar ist und regulatorischer Anforderungen (wie z.B. [Europäische Zahlungsdiensterichtlinie 2](<https://en.wikipedia.org/wiki/Payment_Services_Directive#Revised_Directive_on_Payment_Services_(PSD2)>) Anforderungen an starke Kundenauthentifizierung und den Nachweis des Benutzer-Einverständnisses).

Es werden eine Reihe von Mechanismen in Kombination für eine starke Authentifizierung verwendet, einschließlich Passwörter, einmaliger SMS-Codes, mobile Anwendungen und Web Authentication. Jeder hat seine Vor- und Nachteile. Beispielsweise sind einmalige SMS-Codes den Benutzern mittlerweile bekannt, können jedoch Usability-Probleme (wie die Nichtverfügbarkeit des Geräts) und Sicherheitslücken aufweisen. Web Authentication bietet eine bessere Sicherheit und ist in allen gängigen Browsern und allen modernen mobilen Geräten und Computern verfügbar. Allerdings bietet Web Authentication allein keinen Nachweis des Benutzereingeständnisses zur Durchführung einer Zahlung.

SPC ist darauf ausgelegt, eine nahtlose starke Kundenauthentifizierung (SCA) in einer Vielzahl von Zahlungssystemen zu ermöglichen und kryptografische Beweise dafür zu liefern, dass der Benutzer den Bedingungen einer Transaktion zugestimmt hat. Wenn die API aufgerufen wird, zeigt der Browser Elemente der Transaktion in einem Dialogfeld an: den Namen des Händlers, das Zahlungsmittel sowie den Betrag und die Währung der Zahlung. Hier ist beispielsweise der Transaktionsdialog des Chrome-Browsers (Version M118) für SPC:

![Chrome M118-Transaktionsdialog für SPC](chrome-tx-dialog.png)

Die Auswahl von "Verify" initiiert einen Web Authentication-Vorgang. Wenn sich der Benutzer erfolgreich authentifiziert (z.B. mit biometrischen Authentifikatoren auf seinem Telefon oder Laptop), übergibt der Browser die im Dialog angezeigten Daten an den Authentifikator, der sie signiert und als Teil der resultierenden Web Authentication-Aussage zurückgibt. Die Aussage kann dann an die Relying Party zur Validierung weitergegeben werden. Da der Browser die angezeigten Daten direkt an den Authentifikator weitergibt (ohne dass irgendein JavaScript-Code die Daten ändern kann), kann die Relying Party mit hoher Sicherheit davon ausgehen, dass der Benutzer den angezeigten Transaktionsdaten zugestimmt hat.

Daher baut SPC auf Web Authentication auf, um Websites zu ermöglichen, eine nahtlose starke Authentifizierung durchzuführen und Beweise des Benutzereingeständnisses zu liefern. SPC wird typischerweise als Teil des Authentifizierungsframeworks eines bestimmten Zahlungssystems verwendet. Beispielsweise wird SPC sowohl von EMV® 3-D Secure (Version 2.3.1) als auch von EMV® Secure Remote Commerce (Version 1.3) unterstützt, ist jedoch so konzipiert, dass es mit einer Vielzahl von Zahlungstypen arbeitet, einschließlich "Push-Zahlungen" wie direkten Kreditüberweisungen und Wallet-Zahlungen.

## Zahlungsmethodenanforderung

Secure Payment Confirmation nutzt die zugrundeliegenden Funktionen der Payment Request API. Der standardisierte Zahlungsmethoden-Identifikator für den Secure Payment Confirmation-Zahlungshandler ist [`"secure-payment-confirmation"`](/de/docs/Web/API/Payment_Request_API/Concepts#secure-payment-confirmation).

## Web-Authentifizierungserweiterung

Secure Payment Confirmation definiert eine [Web Authentication-Erweiterung](/de/docs/Web/API/Web_Authentication_API/WebAuthn_extensions), [`payment`](/de/docs/Web/API/Web_Authentication_API/WebAuthn_extensions#payment), die drei zahlungsspezifische Funktionen über die traditionelle Web Authentication hinaus hinzufügt:

1. Wenn die Relying Party zustimmt, ermöglicht es anderen Entitäten als der Relying Party, eine Zahlungsauthentifizierungszeremonie mit den Anmeldeinformationen der Relying Party zu initiieren. SPC entkoppelt die Authentifizierungszeremonie von der Validierung der Authentifizierungsergebnisse. Dies ermöglicht es Händlern (oder deren Zahlungsdienstleistern in einem Cross-Origin-iframe), die Kontrolle über die Benutzererfahrung der Authentifizierung zu behalten, ohne den Benutzer (über eine Umleitung) auf eine andere Website oder mobile App weiterzuleiten. Wenn die Relying Party beispielsweise die Bank ist, ermöglicht dies einem Händler, die Benutzererfahrung der Authentifizierung zu verwalten, während die Bank immer noch die Ergebnisse der Authentifizierung validieren kann. Die Kommunikation zwischen den Parteien (von Anmeldeinformationen und Authentifizierungsergebnissen) erfolgt typischerweise über zahlungssystemspezifische Kanäle wie EMV® 3-D Secure.
2. Erzwingt, dass der User Agent dem Benutzer angemessen kommuniziert, dass er eine Transaktion und die Transaktionsdetails authentifiziert. Diese Details sind dann in der vom Authentifikator signierten Aussage enthalten.
3. Ermöglicht das Aufrufen von `navigator.credentials.create` in einem Cross-Origin-iframe, solange auf dem iframe eine "payment"-Berechtigungsrichtlinie eingestellt ist.
   Hinweis: Diese Fähigkeit ist jetzt Teil von WebAuthn Level 3, wo sie die "publickey-credential-create"-Berechtigungsrichtlinie verwendet. Entwicklern wird empfohlen, diese zu verwenden, wenn verfügbar, anstatt sich auf die "payment"-Berechtigung von SPC zu verlassen.

## Beispiele

### Erstellen einer Anmeldeinformation

Das Erstellen einer Anmeldeinformation in Secure Payment Confirmation erfolgt durch denselben Aufruf von [`navigator.credentials.create()`](/de/docs/Web/API/CredentialsContainer/create) wie bei der Web Authentication, jedoch mit einer angegebenen `payment`-Erweiterung.

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

### Erstellen einer Anmeldeinformation in einem Cross-Origin-iframe

SPC ermöglicht das Erstellen einer Anmeldeinformation in einem Cross-Origin-iframe (z.B. wenn `merchant.com` ein iframe von `bank.com` einbettet).

In diesem Ablauf authentifiziert die Relying Party (z.B. eine Bank) als Teil einer Transaktion den Kontoinhaber durch einen anderen Mechanismus als SPC (z.B. durch die Verwendung eines Einmalpasscodes oder eines anderen Mechanismus). Die Relying Party bietet dann dem Benutzer die Möglichkeit, eine SPC-Anmeldeinformation zu registrieren, um zukünftige Transaktionen zu vereinfachen. Der Benutzer registriert eine SPC-Anmeldeinformation bei der Relying Party.
Damit diese Schritte im Händlerkontext (d.h. ohne Umleitung) stattfinden können, muss das Cross-Origin-iframe die [`payment`](/de/docs/Web/HTTP/Headers/Permissions-Policy/payment) Berechtigungsrichtlinie eingestellt haben.

Beispiel:

```html
<!-- Assume parent origin is merchant.com -->
<!-- Inside this cross-origin iframe, script would be allowed to create a SPC credential for example.org -->
<iframe src="https://example.org" allow="payment"></iframe>
```

### Authentifizieren einer Zahlung

Ein Ursprung kann die Payment Request API mit der Zahlungsmethode `"secure-payment-confirmation"` aufrufen, um den Benutzer aufzufordern, eine Secure Payment Confirmation-Anmeldeinformation zu verifizieren, die von einem anderen Ursprung erstellt wurde. Der Browser zeigt eine native Benutzeroberfläche (den "Transaktionsdialog") mit Transaktionsdetails (z.B. die Zahlungswährung und den -betrag sowie den Zahlungsempfänger-Ursprung) an.

> [!NOTE]
> Gemäß der Payment Request API muss, wenn `PaymentRequest` innerhalb eines Cross-Origin-iframe verwendet wird (z.B. wenn `merchant.com` ein iframe von `psp.com` einbettet und `psp.com` `PaymentRequest` verwenden möchte), auf diesem iframe die `payment`-Berechtigungsrichtlinie eingestellt sein.

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
- [Zahlungsmethoden-Identifikatoren](/de/docs/Web/API/Payment_Request_API/Concepts#payment_method_identifiers)
- [Web Authentication](/de/docs/Web/API/Web_Authentication_API)
- [Secure Payment Confirmation Explainer](https://github.com/w3c/secure-payment-confirmation/blob/main/explainer.md)
- [Secure Payment Confirmation Scope](https://github.com/w3c/secure-payment-confirmation/blob/main/scope.md)
- Allgemeines [Flussdiagramm für SPC während einer Zahlung](https://github.com/w3c/wpsig/blob/gh-pages/spc-general.png)
- [Secure Payment Confirmation Test Suite](https://wpt.fyi/results/secure-payment-confirmation?label=master&label=experimental&aligned)
- [Chrome-Entwicklerdokumentation für SPC](https://developer.chrome.com/docs/payments/secure-payment-confirmation)
- [EMV® 3-D Secure (Version 2.3)](https://www.emvco.com/emv-technologies/3-d-secure/)
- [EMV® Secure Remote Commerce (Version 1.3)](https://www.emvco.com/emv-technologies/secure-remote-commerce/)
