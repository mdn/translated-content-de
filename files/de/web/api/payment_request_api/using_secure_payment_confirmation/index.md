---
title: Secure Payment Confirmation verwenden
slug: Web/API/Payment_Request_API/Using_secure_payment_confirmation
l10n:
  sourceCommit: 97b8f99cd4089ed6c02c623ccaeb6b5c3fe134c6
---

{{DefaultAPISidebar("Payment Request API")}}

Secure Payment Confirmation (SPC) ist über die Payment Request API verfügbar und bietet einen Mechanismus zur starken Kundenauthentifizierung während des Bezahlvorgangs. Dadurch schützt SPC vor Online-Zahlungsbetrug.

## Überblick

Zum Schutz vor Online-Zahlungsbetrug wird häufig der Kontoinhaber authentifiziert. Eine starke Authentifizierung senkt das Betrugsrisiko, erhöht aber auch die Wahrscheinlichkeit, dass Schwierigkeiten beim Bezahlvorgang zum Abbruch des Einkaufs führen. Banken, Händler, Zahlungsdienstleister und andere Beteiligte im Zahlungsverkehr berücksichtigen daher mehrere Faktoren, wenn sie Art und Stärke der Authentifizierung für eine Transaktion festlegen. Dazu gehören der Betrag, die gekauften Artikel, die Zahlungshistorie des Nutzers, die Haftung im Betrugsfall und regulatorische Anforderungen – etwa die Anforderungen der [europäischen Zahlungsdiensterichtlinie 2](<https://en.wikipedia.org/wiki/Payment_Services_Directive#Revised_Directive_on_Payment_Services_(PSD2)>) an eine starke Kundenauthentifizierung und den Nachweis der Zustimmung des Nutzers.

Für eine starke Authentifizierung werden verschiedene Verfahren kombiniert, darunter Passwörter, einmalige SMS-Codes, mobile Anwendungen und Web Authentication. Jedes Verfahren hat Vor- und Nachteile. Einmalige SMS-Codes sind Nutzern inzwischen vertraut, können aber Probleme bei der Bedienbarkeit mit sich bringen, etwa wenn das Gerät nicht verfügbar ist, und Sicherheitslücken aufweisen. Web Authentication bietet mehr Sicherheit und ist in allen wichtigen Browsern sowie auf allen modernen Mobilgeräten und Computern verfügbar. Web Authentication allein liefert jedoch keinen Nachweis dafür, dass der Nutzer einer Zahlung zugestimmt hat.

SPC wurde entwickelt, um eine reibungsarme starke Kundenauthentifizierung (SCA) in unterschiedlichen Zahlungssystemen zu ermöglichen und einen kryptografischen Nachweis dafür zu liefern, dass der Nutzer den Bedingungen einer Transaktion zugestimmt hat. Beim Aufruf der API zeigt der Browser Angaben zur Transaktion in einem Dialogfeld an: den Namen des Händlers, das Zahlungsmittel sowie Betrag und Währung der Zahlung. So sieht beispielsweise der Transaktionsdialog für SPC im Chrome-Browser (Version M118) aus:

![Transaktionsdialog für SPC in Chrome M118](chrome-tx-dialog.png)

Durch Auswahl von „Verify“ wird ein Web-Authentication-Ablauf gestartet. Wenn sich der Nutzer erfolgreich authentifiziert, beispielsweise mit einem biometrischen Authentifikator auf seinem Smartphone oder Laptop, übergibt der Browser die im Dialog angezeigten Daten an den Authentifikator. Dieser signiert sie und gibt sie als Teil der resultierenden Web-Authentication-Assertion zurück. Die Assertion kann anschließend zur Validierung an die Relying Party übermittelt werden. Da der Browser die angezeigten Daten direkt an den Authentifikator übergibt und kein JavaScript-Code sie verändern kann, kann die Relying Party mit hoher Sicherheit davon ausgehen, dass der Nutzer den angezeigten Transaktionsdaten zugestimmt hat.

SPC baut somit auf Web Authentication auf und ermöglicht Websites eine reibungsarme starke Authentifizierung sowie den Nachweis der Zustimmung des Nutzers. SPC wird in der Regel als Teil des Authentifizierungsrahmens eines bestimmten Zahlungssystems eingesetzt. Beispielsweise wird SPC sowohl von EMV® 3-D Secure (Version 2.3.1) als auch von EMV® Secure Remote Commerce (Version 1.3) unterstützt. Es ist jedoch für viele Zahlungsarten ausgelegt, darunter auch „Push-Zahlungen“ wie direkte Überweisungen und Zahlungen per Wallet.

## Zahlungsmethode für Zahlungsanfragen

Secure Payment Confirmation nutzt zugrunde liegende Funktionen der Payment Request API. Der standardisierte Zahlungsmethodenbezeichner für den Secure-Payment-Confirmation-Payment-Handler lautet [`"secure-payment-confirmation"`](/de/docs/Web/API/Payment_Request_API/Concepts#secure-payment-confirmation).

## Web-Authentication-Erweiterung

Secure Payment Confirmation definiert eine [Web-Authentication-Erweiterung](/de/docs/Web/API/Web_Authentication_API/WebAuthn_extensions), [`payment`](/de/docs/Web/API/Web_Authentication_API/WebAuthn_extensions#payment), die Web Authentication um drei zahlungsspezifische Funktionen ergänzt:

1. Wenn die Relying Party dem zustimmt, können auch andere Stellen als die Relying Party einen Authentifizierungsvorgang für eine Zahlung mit den Anmeldedaten der Relying Party einleiten. SPC entkoppelt den Authentifizierungsvorgang von der Validierung seines Ergebnisses. Dadurch können Händler oder ihre Zahlungsdienstleister in einem Cross-Origin-iframe die Kontrolle über die Nutzererfahrung bei der Authentifizierung behalten, ohne den Nutzer per Weiterleitung auf eine andere Website oder in eine mobile App zu schicken. Ist die Relying Party beispielsweise eine Bank, kann der Händler die Nutzererfahrung bei der Authentifizierung gestalten, während die Bank das Ergebnis weiterhin validieren kann. Die Kommunikation zwischen den Beteiligten – etwa zur Übermittlung von Anmeldedaten und Authentifizierungsergebnissen – erfolgt üblicherweise über zahlungssystemspezifische Kanäle wie EMV® 3-D Secure.
2. Die Erweiterung stellt sicher, dass der User Agent dem Nutzer angemessen vermittelt, dass er eine Transaktion authentifiziert, und ihm die Transaktionsdetails anzeigt. Diese Details werden anschließend in die vom Authentifikator signierte Assertion aufgenommen.
3. Sie ermöglicht den Aufruf von navigator.credentials.create in einem Cross-Origin-iframe, sofern für das iframe eine `payment`-Permissions-Policy festgelegt ist.
   Hinweis: Diese Möglichkeit ist inzwischen Teil von WebAuthn Level 3 und verwendet dort stattdessen die `publickey-credential-create`-Permissions-Policy. Entwicklern wird empfohlen, diese zu verwenden, sofern sie verfügbar ist, statt sich auf die `payment`-Berechtigung von SPC zu verlassen.

## Beispiele

### Anmeldedaten erstellen

Anmeldedaten für Secure Payment Confirmation werden mit demselben Aufruf von [`navigator.credentials.create()`](/de/docs/Web/API/CredentialsContainer/create) wie bei Web Authentication erstellt, jedoch unter Angabe der Erweiterung `payment`.

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

### Anmeldedaten in einem Cross-Origin-iframe erstellen

SPC ermöglicht es, Anmeldedaten in einem Cross-Origin-iframe zu erstellen, beispielsweise wenn `merchant.com` ein iframe von `bank.com` einbettet.

Bei diesem Ablauf authentifiziert die Relying Party, beispielsweise eine Bank, den Kontoinhaber im Rahmen einer Transaktion zunächst mit einem anderen Verfahren als SPC, etwa mit einem Einmalcode. Anschließend bietet sie dem Nutzer an, SPC-Anmeldedaten zu registrieren, um künftige Transaktionen zu vereinfachen. Der Nutzer registriert die SPC-Anmeldedaten bei der Relying Party.
Damit diese Schritte im Kontext des Händlers, also ohne Weiterleitung, stattfinden können, muss für das Cross-Origin-iframe die [`payment`](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy/payment)-Permissions-Policy festgelegt sein.

Zum Beispiel:

```html
<!-- Assume parent origin is merchant.com -->
<!-- Inside this cross-origin iframe, script would be allowed to create a SPC credential for example.org -->
<iframe src="https://example.org" allow="payment"></iframe>
```

### Eine Zahlung authentifizieren

Ein Origin kann die Payment Request API mit der Zahlungsmethode `"secure-payment-confirmation"` aufrufen, um den Nutzer zur Bestätigung von Secure-Payment-Confirmation-Anmeldedaten aufzufordern, die von einem beliebigen anderen Origin erstellt wurden. Der Browser zeigt eine native Benutzeroberfläche – den „Transaktionsdialog“ – mit Transaktionsdetails an, beispielsweise der Zahlungswährung, dem Betrag und dem Origin des Zahlungsempfängers.

> [!NOTE]
> Gemäß der Payment Request API muss für ein Cross-Origin-iframe die `payment`-Permissions-Policy festgelegt sein, wenn `PaymentRequest` darin verwendet wird. Das gilt beispielsweise, wenn `merchant.com` ein iframe von `psp.com` einbettet und `psp.com` `PaymentRequest` verwenden möchte.

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

Bevor Sie einen Zahlungsvorgang starten, können Sie durch Aufruf der statischen Methode [`PaymentRequest.securePaymentConfirmationAvailability()`](/de/docs/Web/API/PaymentRequest/securePaymentConfirmationAvailability_static) feststellen, ob SPC verfügbar ist. Zum Beispiel:

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
- [Zahlungsmethodenbezeichner](/de/docs/Web/API/Payment_Request_API/Concepts#payment_method_identifiers)
- [Web Authentication](/de/docs/Web/API/Web_Authentication_API)
- [Erläuterung zu Secure Payment Confirmation](https://github.com/w3c/secure-payment-confirmation/blob/main/explainers/secure-payment-confirmation.md)
- [Anwendungsbereich von Secure Payment Confirmation](https://github.com/w3c/secure-payment-confirmation/blob/main/scope.md)
- Allgemeines [Ablaufdiagramm für SPC während einer Zahlung](https://github.com/w3c/wpsig/blob/gh-pages/spc-general.png)
- [Testsuite für Secure Payment Confirmation](https://wpt.fyi/results/secure-payment-confirmation?label=master&label=experimental&aligned)
- [Chrome-Entwicklerdokumentation zu SPC](https://developer.chrome.com/docs/payments/secure-payment-confirmation)
- [EMV® 3-D Secure (Version 2.3)](https://www.emvco.com/emv-technologies/3-d-secure/)
- [EMV® Secure Remote Commerce (Version 1.3)](https://www.emvco.com/emv-technologies/secure-remote-commerce/)
