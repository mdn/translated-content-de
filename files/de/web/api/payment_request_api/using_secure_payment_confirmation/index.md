---
title: Verwendung der Secure Payment Confirmation
slug: Web/API/Payment_Request_API/Using_secure_payment_confirmation
l10n:
  sourceCommit: 0d0ccc861fa024fa10836fbf0cc2c3813cd74745
---

{{DefaultAPISidebar("Payment Request API")}}

Secure Payment Confirmation (SPC), verfügbar über die Payment Request API, bietet einen Mechanismus für eine starke Kundenauthentifizierung während des Checkouts und schützt dadurch vor Online-Zahlungsbetrug.

## Überblick

Um sich vor Online-Zahlungsbetrug zu schützen, ist es üblich, den Kontoinhaber zu authentifizieren. Eine starke Authentifizierung senkt das Betrugsrisiko, erhöht jedoch die Wahrscheinlichkeit, dass Reibungen während des Checkouts zum Abbruch des Einkaufswagens führen. Banken, Händler, Zahlungsdienstleister und andere Einrichtungen im Zahlungssystem berücksichtigen daher eine Reihe von Faktoren, wenn sie entscheiden, welche Art und Stärke der Authentifizierung für jede Transaktion zu verwenden ist, einschließlich Betrag, der zu kaufenden Artikel, der Zahlungshistorie des Benutzers, welche Partei im Betrugsfall haftet und regulatorischer Anforderungen (wie z.B. [Europäische Zahlungsdiensterichtlinie 2](<https://en.wikipedia.org/wiki/Payment_Services_Directive#Revised_Directive_on_Payment_Services_(PSD2)>) Anforderungen an eine starke Kundenauthentifizierung und der Nachweis der Zustimmung des Benutzers).

Eine Reihe von Mechanismen wird in Kombination für eine starke Authentifizierung verwendet, darunter Passwörter, einmalige SMS-Codes, mobile Anwendungen und Web-Authentifizierung. Jeder hat seine Vor- und Nachteile. Beispielsweise sind einmalige SMS-Codes den Nutzern inzwischen vertraut, können jedoch Probleme mit der Benutzerfreundlichkeit (z.B. Geräteunverfügbarkeit) und Sicherheitslücken beinhalten. Die Web-Authentifizierung bietet eine bessere Sicherheit und ist in allen gängigen Browsern sowie modernen mobilen Geräten und Computern verfügbar. Allerdings bietet die Web-Authentifizierung allein keinen Nachweis der Zustimmung des Nutzers zur Durchführung einer Zahlung.

SPC ist darauf ausgelegt, eine optimierte starke Kundenauthentifizierung (SCA) in einer Vielzahl von Zahlungssystemen zu ermöglichen und kryptografische Beweise dafür zu liefern, dass der Benutzer den Bedingungen einer Transaktion zugestimmt hat. Wenn die API aufgerufen wird, zeigt der Browser Elemente der Transaktion in einem Dialogfeld an: den Namen des Händlers, das Zahlungsmittel sowie den Betrag und die Währung der Zahlung. Zum Beispiel, hier ist das Transaktionsdialogfenster des Chrome-Browsers (Version M118) für SPC:

![Chrome M118 Transaktionsdialog für SPC](chrome-tx-dialog.png)

Die Auswahl von "Verifizieren" initiiert einen Web-Authentifizierungsprozess. Wenn der Benutzer erfolgreich authentifiziert (z.B. durch biometrische Authentifikatoren auf seinem Telefon oder Laptop) ist, überträgt der Browser die im Dialog angezeigten Daten an den Authentifikator, der diese signiert und als Teil der resultierenden Web-Authentifizierungs-Assertion zurückgibt. Die Assertion kann dann an die vertrauende Partei zur Validierung übergeben werden. Da der Browser die angezeigten Daten direkt an den Authentifikator überträgt (ohne dass JavaScript-Code die Daten ändern kann), kann die vertrauende Partei mit hoher Sicherheit davon ausgehen, dass der Benutzer den angezeigten Transaktionsdaten zugestimmt hat.

Daher baut SPC auf der Web-Authentifizierung auf, um Websites zu ermöglichen, eine optimierte starke Authentifizierung durchzuführen und den Nachweis der Zustimmung des Benutzers zu erbringen. SPC wird typischerweise als Teil des Authentifizierungsrahmens eines bestimmten Zahlungssystems verwendet. Zum Beispiel wird SPC sowohl von EMV® 3-D Secure (Version 2.3.1) als auch von EMV® Secure Remote Commerce (Version 1.3) unterstützt, ist jedoch für die Zusammenarbeit mit einer Vielzahl von Zahlungsarten, einschließlich "Push Payments" wie Direktüberweisungen und Wallet-Zahlungen, konzipiert.

## Zahlungsmethodenanforderung

Die Secure Payment Confirmation nutzt die zugrunde liegenden Fähigkeiten der Payment Request API. Der standardisierte Zahlungsartenbezeichner für den Secure Payment Confirmation-Zahlungshandler ist [`"secure-payment-confirmation"`](/de/docs/Web/API/Payment_Request_API/Concepts#secure-payment-confirmation).

## Webauthentifizierungserweiterung

Die Secure Payment Confirmation definiert eine [Webauthentifizierungserweiterung](/de/docs/Web/API/Web_Authentication_API/WebAuthn_extensions), [`payment`](/de/docs/Web/API/Web_Authentication_API/WebAuthn_extensions#payment), die drei zahlungsspezifische Fähigkeiten zur herkömmlichen Webauthentifizierung hinzufügt:

1. Wenn die vertrauende Partei zustimmt, können andere Einheiten als die vertrauende Partei mit den Anmeldeinformationen der vertrauenden Partei eine Zahlungsauthentifizierungszeremonie einleiten. SPC entkoppelt die Authentifizierungszeremonie von der Validierung der Authentifizierungsergebnisse. Dies ermöglicht es Händlern (oder ihren Zahlungsdienstleistern in einem Cross-Origin-Iframe), die Kontrolle über die Benutzer-Erfahrung der Authentifizierung zu behalten, ohne den Benutzer (über eine Umleitung) auf eine andere Website oder mobile App weiterzuleiten. Wenn die vertrauende Partei zum Beispiel die Bank ist, ermöglicht dies einem Händler, die Benutzer-Erfahrung der Authentifizierung zu steuern, während die Bank weiterhin die Ergebnisse der Authentifizierung validieren kann. Die Kommunikation zwischen den Parteien (über Anmeldeinformationen und Authentifizierungsergebnisse) erfolgt typischerweise über zahlungssystem-spezifische Kanäle wie EMV® 3-D Secure.
2. Erzwingt, dass der Benutzer-Agent dem Benutzer angemessen kommuniziert, dass er eine Transaktion und die Transaktionsdetails authentifiziert. Diese Details sind dann in der vom Authentifikator unterzeichneten Assertion enthalten.
3. Ermöglicht das Aufrufen von navigator.credentials.create in einem Cross-Origin-Iframe, solange eine "payment"-Berechtigungsrichtlinie auf dem Iframe festgelegt ist.
   Hinweis: Diese Fähigkeit ist jetzt Teil von WebAuthn Level 3, wo sie die Berechtigungsrichtlinie "publickey-credential-create" verwendet. Entwickler werden ermutigt, diese zu nutzen, wo verfügbar, anstatt sich auf die "payment"-Berechtigung von SPC zu verlassen.

## Beispiele

### Erstellen eines Anmeldeinstruments

Das Erstellen eines Anmeldeinstruments in der Secure Payment Confirmation erfolgt durch denselben Aufruf von [`navigator.credentials.create()`](/de/docs/Web/API/CredentialsContainer/create) wie bei der Web-Authentifizierung, jedoch mit einer angegebenen `payment`-Erweiterung.

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

### Erstellen eines Anmeldeinstruments in einem Cross-Origin-Iframe

SPC ermöglicht es, ein Anmeldeinstrument in einem Cross-Origin-Iframe zu erstellen (z.B. wenn `merchant.com` ein Iframe von `bank.com` einbettet).

In diesem Ablauf authentifiziert die vertrauende Partei (z.B. eine Bank) den Kontoinhaber im Rahmen einer Transaktion durch einen anderen Mechanismus als SPC (z.B. durch die Verwendung eines Einmalpassworts oder eines anderen Mechanismus). Die vertrauende Partei bietet dem Benutzer dann die Option, ein SPC-Anmeldeinstrument zu registrieren, um zukünftige Transaktionen zu optimieren. Der Benutzer registriert ein SPC-Anmeldeinstrument bei der vertrauenden Partei.
Damit diese Schritte im Kontext des Händlers stattfinden können (d.h. ohne Umleitung), muss das Cross-Origin-Iframe die [`payment`](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy/payment)-Berechtigungsrichtlinie gesetzt haben.

Zum Beispiel:

```html
<!-- Assume parent origin is merchant.com -->
<!-- Inside this cross-origin iframe, script would be allowed to create a SPC credential for example.org -->
<iframe src="https://example.org" allow="payment"></iframe>
```

### Authentifizieren einer Zahlung

Ein Ursprung kann die Payment Request API mit der Zahlungsmethode `"secure-payment-confirmation"` aufrufen, um den Benutzer zur Verifizierung eines Secure Payment Confirmation-Anmeldeinstruments aufzufordern, das von jedem anderen Ursprung erstellt wurde. Der Browser zeigt eine native Benutzeroberfläche (den "Transaktionsdialog") mit Transaktionsdetails an (z.B. die Zahlungswährung, der Betrag und der Zahlungsempfänger-Ursprung).

> [!NOTE]
> Laut der Payment Request API, wenn `PaymentRequest` innerhalb eines Cross-Origin-Iframes verwendet wird (z.B. wenn `merchant.com` ein Iframe von `psp.com` einbettet und `psp.com` `PaymentRequest` verwenden möchte), muss dieses Iframe die `payment`-Berechtigungsrichtlinie gesetzt haben.

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
- [Secure Payment Confirmation Erläuterung](https://github.com/w3c/secure-payment-confirmation/blob/main/explainer.md)
- [Secure Payment Confirmation Scope](https://github.com/w3c/secure-payment-confirmation/blob/main/scope.md)
- Allgemeines [Flussdiagramm für SPC während einer Zahlung](https://github.com/w3c/wpsig/blob/gh-pages/spc-general.png)
- [Secure Payment Confirmation Test Suite](https://wpt.fyi/results/secure-payment-confirmation?label=master&label=experimental&aligned)
- [Chrome-Entwicklerdokumentation für SPC](https://developer.chrome.com/docs/payments/secure-payment-confirmation)
- [EMV® 3-D Secure (Version 2.3)](https://www.emvco.com/emv-technologies/3-d-secure/)
- [EMV® Secure Remote Commerce (Version 1.3)](https://www.emvco.com/emv-technologies/secure-remote-commerce/)
