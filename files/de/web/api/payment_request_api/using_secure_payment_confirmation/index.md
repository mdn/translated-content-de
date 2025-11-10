---
title: Verwenden der sicheren Zahlungsbestätigung
slug: Web/API/Payment_Request_API/Using_secure_payment_confirmation
l10n:
  sourceCommit: 43875884a5ebc2c7de4702c31a9bdc3ecbeed610
---

{{DefaultAPISidebar("Payment Request API")}}

Die sichere Zahlungsbestätigung (Secure Payment Confirmation, SPC), die über die Payment Request API verfügbar ist, bietet einen Mechanismus für starke Kundenauthentifizierung während des Checkouts, um somit gegen Online-Zahlungsbetrug zu schützen.

## Übersicht

Um gegen Online-Zahlungsbetrug zu schützen, ist es üblich, den Kontoinhaber zu authentifizieren. Starke Authentifizierung senkt das Betrugsrisiko, erhöht jedoch die Wahrscheinlichkeit, dass Reibungen während des Checkouts zum Abbruch des Einkaufswagens führen. Banken, Händler, Zahlungsdienstleister und andere Parteien in einem Zahlungssystem erwägen daher verschiedene Faktoren, wenn sie entscheiden, welche Art und Stärke der Authentifizierung sie für jede Transaktion verwenden, einschließlich des Betrags, der zu kaufenden Artikel, der Zahlungsmethode des Nutzers, welcher Partei die Haftung im Betrugsfall obliegt, und gesetzlicher Anforderungen (wie z.B. die Anforderungen der [Europäischen Zahlungsdiensterichtlinie 2](<https://en.wikipedia.org/wiki/Payment_Services_Directive#Revised_Directive_on_Payment_Services_(PSD2)>) für starke Kundenauthentifizierung und den Nachweis der Nutzerzustimmung).

Eine Vielzahl von Mechanismen wird in Kombination für eine starke Authentifizierung verwendet, darunter Passwörter, einmalige SMS-Codes, mobile Anwendungen und Web-Authentifizierung. Jeder hat seine Vor- und Nachteile. Beispielsweise sind einmalige SMS-Codes mittlerweile den Nutzern vertraut, können jedoch benutzerfreundliche Probleme (wie Geräteunverfügbarkeit) und Sicherheitsanfälligkeiten beinhalten. Web-Authentifizierung bietet bessere Sicherheit und ist in allen großen Browsern und allen modernen mobilen Geräten und Computern verfügbar. Allerdings liefert die Web-Authentifizierung allein keinen Nachweis der Nutzerzustimmung zur Durchführung einer Zahlung.

Die SPC ist darauf ausgelegt, eine reibungslose starke Kundenauthentifizierung (SCA) in einer Vielzahl von Zahlungssystemen zu ermöglichen und kryptografischen Nachweis darüber zu liefern, dass der Nutzer den Bedingungen einer Transaktion zugestimmt hat. Wenn die API aufgerufen wird, zeigt der Browser die Elemente der Transaktion in einem Dialogfeld an: den Namen des Händlers, das Zahlungsmittel sowie Betrag und Währung der Zahlung. Hier ein Beispiel für das Transaktionsdialogfeld für SPC im Chrome-Browser (Version M118):

![Transaktionsdialogfeld für SPC in Chrome M118](chrome-tx-dialog.png)

Die Auswahl von "Verify" löst einen Web-Authentifizierungsprozess aus. Nach erfolgreicher Authentifizierung des Nutzers (z.B. durch biometrische Authentifikatoren auf ihrem Telefon oder Laptop) übermittelt der Browser die im Dialogfeld angezeigten Daten an den Authenticator, der diese signiert und sie zusammen mit der resultierenden Web-Authentifizierungsbehauptung zurückgibt. Die Behauptung kann dann an den "Relying Party" zur Validierung übergeben werden. Da der Browser die angezeigten Daten direkt an den Authenticator übergibt (ohne dass JavaScript-Code in der Lage ist, die Daten zu ändern), kann der "Relying Party" mit hoher Sicherheit davon ausgehen, dass der Nutzer den angezeigten Transaktionsdaten zugestimmt hat.

Somit baut SPC auf Web-Authentifizierung auf, um Websites die Durchführung einer reibungslosen starken Authentifizierung sowie den Nachweis der Nutzerzustimmung zu ermöglichen. SPC wird normalerweise als Teil des Authentifizierungsrahmens eines bestimmten Zahlungssystems verwendet. Beispielsweise wird SPC sowohl von EMV® 3-D Secure (Version 2.3.1) als auch von EMV® Secure Remote Commerce (Version 1.3) unterstützt, ist jedoch darauf ausgelegt, mit einer Vielzahl von Zahlungsarten zu funktionieren, einschließlich "Push-Zahlungen" wie Direktüberweisungen und Wallet-Zahlungen.

## Zahlungsmethodenanforderung

Die sichere Zahlungsbestätigung nutzt die zugrunde liegenden Funktionen der Payment Request API. Der standardisierte Zahlungsmethodenidentifikator für den Zahlungs-Handler der sicheren Zahlungsbestätigung ist [`"secure-payment-confirmation"`](/de/docs/Web/API/Payment_Request_API/Concepts#secure-payment-confirmation).

## Webauthentication-Erweiterung

Die sichere Zahlungsbestätigung definiert eine [Web-Authentifizierungs-Erweiterung](/de/docs/Web/API/Web_Authentication_API/WebAuthn_extensions), [`payment`](/de/docs/Web/API/Web_Authentication_API/WebAuthn_extensions#payment), die drei zahlungsspezifische Funktionen zur traditionellen Web-Authentifizierung hinzufügt:

1. Wenn der "Relying Party" sich dafür entscheidet, können andere Entitäten als der "Relying Party" eine Zahlungsauthentifizierungszeremonie mit den Anmeldeinformationen des "Relying Party" einleiten. SPC entkoppelt die Authentifizierungszeremonie von der Validierung der Authentifizierungsergebnisse. Dies ermöglicht es Händlern (oder ihren Zahlungsdienstleistern in einem cross-origin iframe), die Kontrolle über die Benutzererfahrung der Authentifizierung zu behalten, ohne den Nutzer (über eine Umleitung) zu einer anderen Website oder mobilen App weiterzuleiten. Wenn der "Relying Party" beispielsweise die Bank ist, ermöglicht dies einem Händler, die Benutzererfahrung der Authentifizierung zu verwalten, während die Bank dennoch die Ergebnisse der Authentifizierung validieren kann. Die Kommunikation zwischen den Parteien (von Anmeldeinformationen und Authentifizierungsergebnissen) erfolgt typischerweise über zahlungssystemspezifische Wege wie EMV® 3-D Secure.
2. Erzwingt, dass der User Agent dem Nutzer angemessen kommuniziert, dass er eine Transaktion und die Transaktionsdetails authentifiziert. Diese Details sind dann in der vom Authenticator signierten Behauptung enthalten.
3. Ermöglicht das Aufrufen von navigator.credentials.create in einem cross-origin iframe, solange eine "Zahlungs"-Berechtigungsrichtlinie im iframe festgelegt ist.
   Hinweis: Diese Fähigkeit ist jetzt Teil von WebAuthn Level 3, wo es die "publickey-credential-create"-Berechtigungsrichtlinie verwendet. Entwickler werden ermutigt, dies dort zu verwenden, wo es verfügbar ist, anstatt sich auf die "Zahlungs"-Berechtigung von SPC zu verlassen.

## Beispiele

### Erstellung eines Anmeldeinstruments

Das Erstellen eines Anmeldeinstruments in der sicheren Zahlungsbestätigung erfolgt durch denselben Aufruf [`navigator.credentials.create()`](/de/docs/Web/API/CredentialsContainer/create) wie bei der Web-Authentifizierung, jedoch mit einer angegebenen `payment`-Erweiterung.

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

### Erstellung eines Anmeldeinstruments in einem cross-origin iframe

SPC ermöglicht die Erstellung eines Anmeldeinstruments in einem cross-origin iframe (z.B. wenn `merchant.com` ein iframe von `bank.com` einbettet).

In diesem Ablauf authentifiziert der "Relying Party" (z.B. eine Bank) den Kontoinhaber im Rahmen einer Transaktion durch einen Mechanismus außerhalb von SPC (z.B. durch Verwendung eines Einmalpasscodes oder eines anderen Mechanismus). Der "Relying Party" bietet dann dem Nutzer die Option, ein SPC-Anmeldeinstrument zu registrieren, um zukünftige Transaktionen zu vereinfachen. Der Nutzer registriert ein SPC-Anmeldeinstrument mit dem "Relying Party".
Damit diese Schritte im Händlerkontext geschehen können (ohne eine Umleitung), muss das cross-origin iframe die [`payment`](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy/payment)-Berechtigungsrichtlinie gesetzt haben.

Zum Beispiel:

```html
<!-- Assume parent origin is merchant.com -->
<!-- Inside this cross-origin iframe, script would be allowed to create a SPC credential for example.org -->
<iframe src="https://example.org" allow="payment"></iframe>
```

### Authentifizierung einer Zahlung

Ein Origin kann die Payment Request API mit der Zahlungsmethode `"secure-payment-confirmation"` aufrufen, um den Nutzer zu veranlassen, ein von einem anderen Origin erstelltes Secure Payment Confirmation-Anmeldeinstrument zu überprüfen. Der Browser zeigt eine native Benutzeroberfläche (den "Transaktionsdialog") mit Transaktionsdetails an (z.B. Währung und Betrag der Zahlung sowie das Zahlungsempfänger-Origin).

> [!NOTE]
> Laut der Payment Request API, wenn `PaymentRequest` innerhalb eines cross-origin iframes verwendet wird (z.B. wenn `merchant.com` ein iframe von `psp.com` einbettet und `psp.com` `PaymentRequest` verwenden möchte), muss dieses iframe die `payment`-Berechtigungsrichtlinie gesetzt haben.

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

Bevor ein Zahlungsvorgang gestartet wird, können Sie feststellen, ob SPC verfügbar ist, indem Sie die statische Methode [`PaymentRequest.securePaymentConfirmationAvailability()`](/de/docs/Web/API/PaymentRequest/securePaymentConfirmationAvailability_static) aufrufen. Zum Beispiel:

```js
async function spcSupport() {
  const support = await PaymentRequest.securePaymentConfirmationAvailability();
  if (support === "available") {
    // Commence SPC payment flow
  } else {
    // Fallback to traditional flows
  }
}
```

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Payment Request API](/de/docs/Web/API/Payment_Request_API)
- [Zahlungsmethodenkennungen](/de/docs/Web/API/Payment_Request_API/Concepts#payment_method_identifiers)
- [Web-Authentifizierung](/de/docs/Web/API/Web_Authentication_API)
- [Secure Payment Confirmation Erläuterung](https://github.com/w3c/secure-payment-confirmation/blob/main/explainer.md)
- [Secure Payment Confirmation Umfang](https://github.com/w3c/secure-payment-confirmation/blob/main/scope.md)
- Allgemeines [Flussdiagramm für SPC während einer Zahlung](https://github.com/w3c/wpsig/blob/gh-pages/spc-general.png)
- [Test-Suite zur sicheren Zahlungsbestätigung](https://wpt.fyi/results/secure-payment-confirmation?label=master&label=experimental&aligned)
- [Chrome Entwicklerdokumentation für SPC](https://developer.chrome.com/docs/payments/secure-payment-confirmation)
- [EMV® 3-D Secure (Version 2.3)](https://www.emvco.com/emv-technologies/3-d-secure/)
- [EMV® Secure Remote Commerce (Version 1.3)](https://www.emvco.com/emv-technologies/secure-remote-commerce/)
