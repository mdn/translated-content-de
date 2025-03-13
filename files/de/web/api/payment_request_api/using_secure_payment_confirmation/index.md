---
title: Verwendung von Secure Payment Confirmation
slug: Web/API/Payment_Request_API/Using_secure_payment_confirmation
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{securecontext_header}}{{DefaultAPISidebar("Payment Request API")}}

Secure Payment Confirmation (SPC), verfügbar über die Payment Request API, bietet einen Mechanismus zur starken Kundenauthentifizierung während des Checkouts, um so vor Online-Zahlungsbetrug zu schützen.

## Übersicht

Um gegen Online-Zahlungsbetrug zu schützen, ist es üblich, den Kontoinhaber zu authentifizieren. Starke Authentifizierung senkt das Betrugsrisiko, erhöht jedoch die Wahrscheinlichkeit, dass Reibungen während des Checkouts dazu führen, dass der Warenkorb aufgegeben wird. Banken, Händler, Zahlungsdienstleister und andere Akteure im Zahlungssystem ziehen daher eine Reihe von Faktoren in Betracht, wenn sie entscheiden, welche Art und Stärke der Authentifizierung für jede Transaktion zu verwenden ist, einschließlich des Betrags, der gekauften Artikel, der Zahlungshistorie des Benutzers, der Haftung im Betrugsfall und der regulatorischen Anforderungen (wie die Anforderungen der [European Payment Services Directive 2](<https://en.wikipedia.org/wiki/Payment_Services_Directive#Revised_Directive_on_Payment_Services_(PSD2)>) an starke Kundenauthentifizierung und Nachweise der Benutzerzustimmung).

Eine Reihe von Mechanismen wird in Kombination für starke Authentifizierung verwendet, darunter Passwörter, einmalige SMS-Codes, mobile Anwendungen und Web Authentication. Jeder hat seine Vor- und Nachteile. Zum Beispiel sind einmalige SMS-Codes den Nutzern inzwischen vertraut, können jedoch Usability-Probleme (wie Geräteunverfügbarkeit) und Sicherheitslücken mit sich bringen. Web Authentication bietet bessere Sicherheit und ist in allen großen Browsern und modernen Mobilgeräten und Computern verfügbar. Web Authentication allein liefert jedoch keinen Nachweis der Zustimmung des Benutzers zur Zahlung.

SPC ist darauf ausgelegt, eine optimierte starke Kundenauthentifizierung (SCA) in verschiedenen Zahlungssystemen zu ermöglichen und kryptografische Beweise dafür zu liefern, dass der Benutzer den Bedingungen einer Transaktion zugestimmt hat. Wenn die API aufgerufen wird, zeigt der Browser Elemente der Transaktion in einem Dialogfeld an: den Namen des Händlers, das Zahlungsmittel sowie den Betrag und die Währung der Zahlung. Zum Beispiel sieht so der Transaktionsdialog des Chrome-Browsers (Version M118) für SPC aus:

![Chrome M118 Transaktionsdialog für SPC](chrome-tx-dialog.png)

Die Auswahl von „Verifizieren“ initiiert einen Web Authentication-Prozess. Wenn der Benutzer erfolgreich authentifiziert (z.B. über biometrische Authentifikatoren auf ihrem Telefon oder Laptop) wird, übermittelt der Browser die im Dialog angezeigten Daten an den Authentifikator, der sie signiert und als Teil der resultierenden Web Authentication-Aussage zurückgibt. Die Aussage kann dann zur Validierung dem Relying Party übermittelt werden. Da der Browser die angezeigten Daten direkt an den Authentifikator weitergibt (ohne dass JavaScript-Code die Daten ändern kann), kann der Relying Party mit hoher Sicherheit annehmen, dass der Benutzer den angezeigten Transaktionsdaten zugestimmt hat.

So baut SPC auf Web Authentication auf, um Websites die Durchführung einer optimierten starken Authentifizierung und das Liefern von Nachweisen der Benutzerzustimmung zu ermöglichen. SPC wird typischerweise als Teil des Authentifizierungsrahmens eines bestimmten Zahlungssystems verwendet. Zum Beispiel wird SPC sowohl von EMV® 3-D Secure (Version 2.3.1) als auch von EMV® Secure Remote Commerce (Version 1.3) unterstützt, ist jedoch dafür konzipiert, mit einer Vielzahl von Zahlungsarten zu funktionieren, einschließlich „Push-Zahlungen“ wie direkte Überweisungen und Wallet-Zahlungen.

## Zahlungsmethodenanforderung

Secure Payment Confirmation nutzt die zugrunde liegenden Fähigkeiten der Payment Request API. Der standardisierte Zahlungsmethoden-Identifikator für den Secure Payment Confirmation-Zahlungshandler ist [`"secure-payment-confirmation"`](/de/docs/Web/API/Payment_Request_API/Concepts#secure-payment-confirmation).

## Web Authentication-Erweiterung

Secure Payment Confirmation definiert eine [Web Authentication-Erweiterung](/de/docs/Web/API/Web_Authentication_API/WebAuthn_extensions), [`payment`](/de/docs/Web/API/Web_Authentication_API/WebAuthn_extensions#payment), die drei zahlungsbezogene Fähigkeiten zusätzlich zu herkömmlicher Web Authentication hinzufügt:

1. Wenn der Relying Party zustimmt, erlaubt es anderen Entitäten als dem Relying Party, eine Zahlungsauthentifizierungszeremonie mit den Anmeldeinformationen des Relying Party einzuleiten. SPC entkoppelt die Authentifizierungszeremonie von der Validierung der Authentifizierungsergebnisse. Dies ermöglicht es Händlern (oder ihren Zahlungsdienstleistern in einem Cross-Origin-Iframe), die Kontrolle über das Benutzererlebnis der Authentifizierung zu behalten, ohne den Benutzer (über eine Umleitung) zu einer anderen Website oder mobilen App weiterzuleiten. Wenn der Relying Party beispielsweise eine Bank ist, ermöglicht dies einem Händler, das Benutzererlebnis der Authentifizierung zu verwalten, während die Bank die Ergebnisse der Authentifizierung dennoch validieren kann. Die Kommunikation zwischen den Parteien (der Anmeldeinformationen und Authentifizierungsergebnisse) erfolgt typischerweise über zahlungssystemspezifische Schienen wie EMV® 3-D Secure.
2. Erzwingt, dass der User Agent dem Benutzer angemessen kommuniziert, dass sie eine Transaktion und die Transaktionsdetails authentifizieren. Diese Details werden dann in der vom Authentifikator signierten Aussage aufgenommen.
3. Ermöglicht das Aufrufen von navigator.credentials.create in einem Cross-Origin-Iframe, solange eine "payment" Berechtigungspolitik im Iframe gesetzt ist.
   Hinweis: Diese Fähigkeit ist jetzt Teil von WebAuthn Level 3, wo sie die "publickey-credential-create" Berechtigungspolitik anstelle der "payment" Berechtigung von SPC verwendet. Entwicklern wird empfohlen, diese zu nutzen, wenn verfügbar, anstatt sich auf SPCs "payment" Berechtigung zu verlassen.

## Beispiele

### Erstellen eines Anmeldedatensatzes

Das Erstellen eines Anmeldedatensatzes in Secure Payment Confirmation erfolgt durch denselben Aufruf [`navigator.credentials.create()`](/de/docs/Web/API/CredentialsContainer/create) wie bei der Web Authentication, jedoch mit einer angegebenen `payment`-Erweiterung.

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

SPC erlaubt es, einen Anmeldedatensatz in einem Cross-Origin-Iframe zu erstellen (z.B. wenn `merchant.com` ein Iframe von `bank.com` einbettet).

In diesem Ablauf authentifiziert der Relying Party (z.B. eine Bank) den Kontoinhaber im Rahmen einer Transaktion über einen anderen Mechanismus als SPC (z.B. durch Verwendung eines Einmalpasscodes oder eines anderen Mechanismus). Der Relying Party bietet dem Benutzer dann die Option, ein SPC-Anmeldedatensatz zu registrieren, um zukünftige Transaktionen zu vereinfachen. Der Benutzer registriert ein SPC-Anmeldedatensatz beim Relying Party.
Damit diese Schritte im Händlerkontext (also ohne Umleitung) erfolgen können, muss das Cross-Origin-Iframe die [`payment`](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy/payment) Berechtigungspolitik gesetzt haben.

Zum Beispiel:

```html
<!-- Assume parent origin is merchant.com -->
<!-- Inside this cross-origin iframe, script would be allowed to create a SPC credential for example.org -->
<iframe src="https://example.org" allow="payment"></iframe>
```

### Authentifizierung einer Zahlung

Ein Origin kann die Payment Request API mit der Zahlungsmethode `"secure-payment-confirmation"` aufrufen, um den Benutzer zur Verifizierung eines Secure Payment Confirmation-Anmeldedatensatzes aufzufordern, der von einem anderen Origin erstellt wurde. Der Browser zeigt eine native Benutzeroberfläche (den "Transaktionsdialog") mit Transaktionsdetails an (z.B. die Währung und den Betrag der Zahlung und die Origin des Zahlungsempfängers).

> [!NOTE]
> Gemäß der Payment Request API, wenn `PaymentRequest` innerhalb eines Cross-Origin-Ifraems verwendet wird (z.B. wenn `merchant.com` ein Iframe von `psp.com` einbettet, und `psp.com` `PaymentRequest` verwenden möchte), muss dieses Iframe die `payment` Berechtigungspolitik gesetzt haben.

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
- [Payment Method Identifiers](/de/docs/Web/API/Payment_Request_API/Concepts#payment_method_identifiers)
- [Web Authentication](/de/docs/Web/API/Web_Authentication_API)
- [Secure Payment Confirmation Explainer](https://github.com/w3c/secure-payment-confirmation/blob/main/explainer.md)
- [Secure Payment Confirmation Scope](https://github.com/w3c/secure-payment-confirmation/blob/main/scope.md)
- Allgemeines [Flussdiagramm für SPC während einer Zahlung](https://github.com/w3c/wpsig/blob/gh-pages/spc-general.png)
- [Secure Payment Confirmation Test Suite](https://wpt.fyi/results/secure-payment-confirmation?label=master&label=experimental&aligned)
- [Chrome Developer-Dokumentation für SPC](https://developer.chrome.com/docs/payments/secure-payment-confirmation)
- [EMV® 3-D Secure (Version 2.3)](https://www.emvco.com/emv-technologies/3-d-secure/)
- [EMV® Secure Remote Commerce (Version 1.3)](https://www.emvco.com/emv-technologies/secure-remote-commerce/)
