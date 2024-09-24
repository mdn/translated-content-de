---
title: Verwendung der sicheren Zahlungsbestätigung
slug: Web/API/Payment_Request_API/Using_secure_payment_confirmation
l10n:
  sourceCommit: aa8fa82a902746b0bd97839180fc2b5397088140
---

{{securecontext_header}}{{DefaultAPISidebar("Payment Request API")}}

Die Secure Payment Confirmation (SPC), verfügbar durch die Payment Request API, bietet einen Mechanismus zur starken Kundenauthentifizierung während des Bezahlvorgangs und schützt so vor Online-Zahlungsbetrug.

## Überblick

Zum Schutz vor Online-Zahlungsbetrug ist es üblich, den Kontoinhaber zu authentifizieren. Starke Authentifizierung verringert das Betrugsrisiko, erhöht jedoch die Wahrscheinlichkeit, dass Reibungen während des Bezahlvorgangs zum Abbruch des Einkaufswagens führen. Banken, Händler, Zahlungsdienstleister und andere Beteiligte in einem Zahlungssystem berücksichtigen daher mehrere Faktoren, um zu entscheiden, welche Art und Stärke der Authentifizierung sie für jede Transaktion verwenden, einschließlich des Betrags, der gekauften Artikel, der Zahlungshistorie des Nutzers, wer im Betrugsfall haftet und regulatorische Anforderungen (wie beispielsweise die Anforderungen der [Europäischen Zahlungsdiensterichtlinie 2](<https://en.wikipedia.org/wiki/Payment_Services_Directive#Revised_Directive_on_Payment_Services_(PSD2)>) für starke Kundenauthentifizierung und den Nachweis der Nutzerzustimmung).

Eine Reihe von Mechanismen werden in Kombination für starke Authentifizierung verwendet, darunter Passwörter, einmalige SMS-Codes, mobile Anwendungen und Web-Authentifizierung. Jede hat ihre Vor- und Nachteile. Zum Beispiel sind einmalige SMS-Codes den Nutzern mittlerweile vertraut, können jedoch Usability-Probleme (wie Geräteunverfügbarkeit) und Sicherheitsanfälligkeiten aufweisen. Web-Authentifizierung bietet bessere Sicherheit und ist in allen großen Browsern sowie allen modernen Mobilgeräten und Computern verfügbar. Allerdings bietet die Web-Authentifizierung allein keinen Nachweis der Zustimmung des Nutzers zur Zahlung.

SPC wurde entwickelt, um eine vereinfachte starke Kundenauthentifizierung (SCA) in verschiedenen Zahlungssystemen zu ermöglichen und kryptographische Beweise dafür zu liefern, dass der Nutzer den Bedingungen einer Transaktion zugestimmt hat. Wenn die API aufgerufen wird, zeigt der Browser Elemente der Transaktion in einem Dialogfeld an: den Namen des Händlers, das Zahlungsmittel sowie Betrag und Währung der Zahlung. Zum Beispiel hier ist der Transaktionsdialog für SPC im Chrome-Browser (Version M118):

![Transaktionsdialog für SPC in Chrome M118](chrome-tx-dialog.png)

Durch Auswahl von "Verifizieren" wird ein Web-Authentifizierungsablauf initiiert. Wenn der Nutzer erfolgreich authentifiziert wird (z.B. durch biometrische Authentifizierungen auf ihrem Telefon oder Laptop), übergibt der Browser die im Dialogfeld angezeigten Daten an den Authentifikator, der diese signiert und als Teil der resultierenden Web-Authentifizierungs-Aussage zurückgibt. Die Aussage kann dann zur Validierung an die vertrauende Partei übergeben werden. Da der Browser die angezeigten Daten direkt an den Authentifikator übergibt (ohne dass JavaScript-Code die Daten ändern kann), kann die vertrauende Partei mit hoher Sicherheit davon ausgehen, dass der Nutzer den angezeigten Transaktionsdaten zugestimmt hat.

SPC baut somit auf Web-Authentifizierung auf, um Websites zu ermöglichen, eine vereinfachte starke Authentifizierung durchzuführen und den Nachweis der Zustimmung des Nutzers zu erbringen. SPC wird in der Regel als Teil des Authentifizierungsrahmens eines bestimmten Zahlungssystems verwendet. Zum Beispiel wird SPC sowohl von EMV® 3-D Secure (Version 2.3.1) als auch von EMV® Secure Remote Commerce (Version 1.3) unterstützt, ist jedoch so konzipiert, dass es mit einer Vielzahl von Zahlungsarten, einschließlich "Push-Zahlungen" wie direkten Kreditüberweisungen und Wallet-Zahlungen, funktioniert.

## Zahlungsmethodenanforderung

Die Secure Payment Confirmation nutzt die zugrunde liegenden Funktionen der Payment Request API. Der standardisierte Zahlungsmethoden-Identifikator für den Secure Payment Confirmation-Zahlungsanbieter ist [`"secure-payment-confirmation"`](/de/docs/Web/API/Payment_Request_API/Concepts#secure-payment-confirmation).

## Web-Authentifizierungs-Erweiterung

Secure Payment Confirmation definiert eine [Web-Authentifizierungs-Erweiterung](/de/docs/Web/API/Web_Authentication_API/WebAuthn_extensions), [`payment`](/de/docs/Web/API/Web_Authentication_API/WebAuthn_extensions#payment), die drei zahlungsspezifische Fähigkeiten über die traditionelle Web-Authentifizierung hinaus hinzufügt:

1. Wenn die vertrauende Partei zustimmt, ermöglicht es anderen Entitäten als der vertrauenden Partei, eine Authentifizierungszeremonie für Zahlungen mit den Anmeldeinformationen der vertrauenden Partei einzuleiten. SPC entkoppelt die Authentifizierungszeremonie von der Validierung der Authentifizierungsergebnisse. Dadurch können Händler (oder ihre Zahlungsdienstleister in einem Cross-Origin-Iframe) die Kontrolle über die Nutzererfahrung der Authentifizierung behalten, ohne den Nutzer (über einen Redirect) auf eine andere Website oder mobile App weiterzuleiten. Wenn die vertrauende Partei beispielsweise die Bank ist, kann ein Händler die Nutzererfahrung der Authentifizierung verwalten, während die Bank dennoch die Ergebnisse der Authentifizierung validieren kann. Die Kommunikation zwischen den Parteien (von Anmeldeinformationen und Authentifizierungsergebnissen) erfolgt typischerweise über zahlungssystemspezifische Kanäle wie EMV® 3-D Secure.
2. Erzwingt, dass der User Agent dem Nutzer angemessen mitteilt, dass er eine Transaktion und die Transaktionsdetails authentifiziert. Diese Details werden dann in die vom Authentifikator signierte Aussage aufgenommen.
3. Ermöglicht das Aufrufen von navigator.credentials.create in einem Cross-Origin-Iframe, solange eine "payment" Genehmigungsrichtlinie auf dem Iframe gesetzt ist.
   Hinweis: Diese Fähigkeit ist jetzt Teil von WebAuthn Level 3, wo es die "publickey-credential-create" Genehmigungsrichtlinie verwendet. Entwickler werden ermutigt, diese dort zu verwenden, wo verfügbar, anstatt sich auf SPCs "payment" Genehmigung zu verlassen.

## Beispiele

### Erstellen eines Anmeldeinformation

Das Erstellen eines Anmeldedatensatzes in Secure Payment Confirmation erfolgt durch denselben Aufruf von {{domxref("CredentialsContainer.create()", "navigator.credentials.create()")}} wie bei der Web-Authentifizierung, jedoch mit einer angegebenen `payment` Erweiterung.

```js
const publicKey = {
  challenge: Uint8Array.from(randomStringFromServer, (c) => c.charCodeAt(0)),
  rp: {
    name: "Fancy Bank",
  },
  user: {
    // Angenommen, dass userId nur aus ASCII-Zeichen besteht
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
  timeout: 60000, // 1 Minute
  extensions: {
    payment: {
      isPayment: true,
    },
  },
};
navigator.credentials
  .create({ publicKey })
  .then((newCredentialInfo) => {
    // Neue Anmeldeinformationen zur Überprüfung und Registrierung an den Server senden.
  })
  .catch((err) => {
    // Kein akzeptabler Authentifikator oder der Nutzer hat die Zustimmung verweigert. Angemessen behandeln.
  });
```

### Erstellen eines Anmeldeinformation in einem Cross-Origin-Iframe

SPC ermöglicht es, ein Anmeldeinformationen in einem Cross-Origin-Iframe zu erstellen (z.B., wenn `merchant.com` ein Iframe von `bank.com` einbettet).

In diesem Ablauf authentifiziert die vertrauende Partei (z.B., eine Bank) den Kontoinhaber als Teil einer Transaktion durch einen anderen Mechanismus als SPC (z.B. durch die Verwendung eines Einmalpasscodes oder eines anderen Mechanismus). Die vertrauende Partei bietet dem Nutzer dann die Möglichkeit an, ein SPC-Anmeldedatensatz zu registrieren, um zukünftige Transaktionen zu vereinfachen. Der Nutzer registriert ein SPC-Anmeldedatensatz bei der vertrauenden Partei. Damit diese Schritte im Händler-Kontext (d.h. ohne Weiterleitung) erfolgen können, muss das Cross-Origin-Iframe über die [`payment`](/de/docs/Web/HTTP/Headers/Permissions-Policy/payment) Genehmigungsrichtlinie verfügen.

Zum Beispiel:

```html
<!-- Angenommen, die Herkunft des Elternteils ist merchant.com -->
<!-- Innerhalb dieses Cross-Origin-Iframes wäre es erlaubt, ein SPC-Anmeldedatensatz für example.org zu erstellen -->
<iframe src="https://example.org" allow="payment"></iframe>
```

### Authentifizierung einer Zahlung

Ein Ursprung kann die Payment Request API mit der Zahlungsmethode `"secure-payment-confirmation"` aufrufen, um den Nutzer aufzufordern, ein Secure Payment Confirmation-Anmeldedatensatz zu bestätigen, das von einem beliebigen anderen Ursprung erstellt wurde. Der Browser zeigt eine native Benutzeroberfläche (den "Transaktionsdialog") mit den Transaktionsdetails an (z.B. die Währung und den Betrag der Zahlung sowie den Ursprung des Zahlungsempfängers).

> [!NOTE]
> Gemäß der Payment Request API muss, wenn `PaymentRequest` in einem Cross-Origin-Iframe verwendet wird (z.B. wenn `merchant.com` ein Iframe von `psp.com` einbettet und `psp.com` `PaymentRequest` verwenden möchte), dieses Iframe über die `payment` Genehmigungsrichtlinie verfügen.

```js
const request = new PaymentRequest(
  [
    {
      supportedMethods: "secure-payment-confirmation",
      data: {
        // Liste der Anmeldeinformation-IDs, die vom Kontodienstanbieter erhalten wurden.
        credentialIds,
        // Die Herausforderung wird ebenfalls vom Kontodienstanbieter bereitgestellt.
        challenge: new Uint8Array(randomStringFromServer, (c) =>
          c.charCodeAt(0),
        ),
        instrument: {
          displayName: "Fancy Card ****1234",
          icon: "https://fancybank.com/card-art.png",
        },
        payeeOrigin: "https://merchant.com",
        timeout: 60000, // 1 Minute
      },
    },
  ],
  {
    total: {
      label: "Gesamt",
      amount: {
        currency: "USD",
        value: "5.00",
      },
    },
  },
);
try {
  // HINWEIS: canMakePayment() prüft nur öffentliche Informationen, ob der SPC
  // Aufruf gültig ist. Um die Privatsphäre der Nutzer zu wahren, wird nicht geprüft, ob
  // übergebene Anmeldedaten mit dem aktuellen Gerät übereinstimmen.
  const canMakePayment = await request.canMakePayment();
  if (!canMakePayment) {
    throw new Error("Zahlung kann nicht durchgeführt werden");
  }
  const response = await request.show();
  await response.complete("success");
  // response.details ist ein PublicKeyCredential, mit einem clientDataJSON, das
  // die Transaktionsdaten zur Überprüfung durch die ausstellende Bank enthält.
  // send response.details to the issuing bank for verification
} catch (err) {
  // SPC kann nicht verwendet werden; der Händler sollte auf traditionelle Prozesse zurückgreifen
}
```

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Payment Request API](/de/docs/Web/API/Payment_Request_API)
- [Zahlungsmethoden-Identifikatoren](/de/docs/Web/API/Payment_Request_API/Concepts#payment_method_identifiers)
- [Web-Authentifizierung](/de/docs/Web/API/Web_Authentication_API)
- [Secure Payment Confirmation Erklärer](https://github.com/w3c/secure-payment-confirmation/blob/main/explainer.md)
- [Secure Payment Confirmation Umfang](https://github.com/w3c/secure-payment-confirmation/blob/main/scope.md)
- Allgemeines [Flussdiagramm für SPC während einer Zahlung](https://github.com/w3c/wpsig/blob/gh-pages/spc-general.png)
- [Secure Payment Confirmation Test Suite](https://wpt.fyi/results/secure-payment-confirmation?label=master&label=experimental&aligned)
- [Chrome Entwicklerdokumentation für SPC](https://developer.chrome.com/docs/payments/secure-payment-confirmation)
- [EMV® 3-D Secure (Version 2.3)](https://www.emvco.com/emv-technologies/3-d-secure/)
- [EMV® Secure Remote Commerce (Version 1.3)](https://www.emvco.com/emv-technologies/secure-remote-commerce/)
