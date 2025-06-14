---
title: Web-Authentifizierungs-Erweiterungen
slug: Web/API/Web_Authentication_API/WebAuthn_extensions
l10n:
  sourceCommit: 5c688c903e29dbc7f8de7819bc0cac2061e9813e
---

{{DefaultAPISidebar("Web Authentication API")}}

Die [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) verfügt über ein System von Erweiterungen – zusätzliche Funktionalitäten, die während der Erstellung von Anmeldedaten ([`navigator.credentials.create()`](/de/docs/Web/API/CredentialsContainer/create)) oder Authentifizierung ([`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get)) angefordert werden können. Dieser Artikel erklärt, wie Sie WebAuthn-Erweiterungen anfordern, Informationen über die Antworten auf diese Anfragen abrufen und welche Erweiterungen verfügbar sind – einschließlich Browser-Unterstützung und erwarteter Eingaben und Ausgaben.

## Anleitung zur Verwendung von WebAuthn-Erweiterungen

Beim Aufrufen von [`navigator.credentials.create()`](/de/docs/Web/API/CredentialsContainer/create) oder [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) kann das erforderliche `publicKey`-Objektparameter zum Initiieren eines WebAuthn-Flows eine `extensions`-Property enthalten. Der Wert von `extensions` ist selbst ein Objekt, dessen Eigenschaften die Eingabewerte für alle Erweiterungen sind, deren Verwendung die relying party in der von Ihnen aufgerufenen Methode anfordern möchte.

Im Hintergrund werden die Eingaben vom Benutzeragenten und/oder dem Authentifizierungsgerät verarbeitet.

Zum Beispiel möchten wir in einem `publicKey`-Objekt für einen `create()`-Aufruf die Verwendung von zwei Erweiterungen anfordern:

1. Die `credProps`-Erweiterung. Relying Parties setzen `credProps`, um zu verlangen, dass der Browser der Relying Party mitteilt, ob die Anmeldedaten nach der Registrierung resident/auffindbar sind. Dies ist nützlich, wenn `create()` mit `publicKey.authenticatorSelection.residentKey = "preferred"` aufgerufen wird. Um dies anzufordern, müssen Sie außerdem `publicKey.extensions.credProps = true` setzen, wenn der Browser Anmeldedaten erstellt, und je nach Art des verwendeten Authentifizierungsgeräts werden diese auffindbar sein (zum Beispiel würde ein FIDO2-Authenticator sie typischerweise auffindbar machen; ein FIDO1/U2F-Sicherheitsschlüssel wäre nicht auffindbar). `credProps` wird nur vom Benutzeragenten verarbeitet.
2. Die `minPinLength`-Erweiterung ermöglicht es Relying Parties, die Mindest-PIN-Länge des Authentifizierungsgeräts anzufordern. Dazu muss `extensions.minPinLength` auf `true` gesetzt werden. `minPinLength` wird vom Authentifizierungsgerät verarbeitet, wobei der Benutzeragent nur dazu dient, die Eingabedaten weiterzuleiten.

```js
const publicKey = {
  challenge: new Uint8Array([117, 61, 252, 231, 191, 241 /* … */]),
  rp: { id: "acme.com", name: "ACME Corporation" },
  user: {
    id: new Uint8Array([79, 252, 83, 72, 214, 7, 89, 26]),
    name: "jamiedoe",
    displayName: "Jamie Doe",
  },
  pubKeyCredParams: [{ type: "public-key", alg: -7 }],
  authenticatorSelection: {
    residentKey: "preferred",
  },
  extensions: {
    credProps: true,
    minPinLength: true,
  },
};
```

Wir können dann das `publicKey`-Objekt in einen `create()`-Aufruf übergeben, um den Anmeldeerstellungsprozess zu starten:

```js
navigator.credentials.create({ publicKey });
```

## Abrufen von Ergebnissen der Erweiterungsanfrage

Wenn erfolgreich, gibt der `create()`-Aufruf ein {{jsxref("Promise")}} zurück, das ein [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Objekt auflöst. Sobald die Verarbeitung der Erweiterung abgeschlossen ist, werden die Ergebnisse der Verarbeitung in der Antwort mitgeteilt (obwohl nicht in allen Fällen – es ist möglich, dass Erweiterungen keine Ausgabe haben).

```js
navigator.credentials
  .create({ publicKey })
  .then((publicKeyCred) => {
    const myClientExtResults = publicKeyCred.getClientExtensionResults();
    // myClientExtResults will contain the output of processing
    // the "credProps" extension

    const authData = publicKeyCred.response.getAuthenticatorData();
    // authData will contain authenticator data, which will include
    // authenticator extension processing results, i.e., minPinLength
  })
  .catch((err) => {
    console.error(err);
  });
```

Wie das obige Codebeispiel zeigt, gibt es zwei verschiedene Orte, um die Ergebnisse Ihrer Ausgabeerweiterungen zu finden:

1. Sie können die Ergebnisse der Erweiterungsverarbeitung des Clients (Benutzeragenten) finden, indem Sie die Methode [`PublicKeyCredential.getClientExtensionResults()`](/de/docs/Web/API/PublicKeyCredential/getClientExtensionResults) aufrufen. Dies gibt eine {{jsxref("Map", "Map")}} zurück, wobei jeder Eintrag eine Zeichenfolge zur Identifizierung der Erweiterung als Schlüssel und die Ausgabe der Verarbeitung der Erweiterung durch den Client als Wert enthält. In dem oben genannten Beispiel würde, wenn der Browser die `credProps`-Erweiterung unterstützt und sie korrekt verarbeitet wurde, das `myClientExtResults`-Map-Objekt einen Eintrag enthalten, `"credProps"`, mit einem Wert von `{ rk: true }`. Dies würde bestätigen, dass die erstellte Anmeldeinformation tatsächlich auffindbar ist.

2. Die Ergebnisse der Erweiterungsverarbeitung durch das Authentifizierungsgerät finden Sie in den Authentifizierungsdaten für den Vorgang:

   - Im Fall von `PublicKeyCredential`s, die aus erfolgreichen `create()`-Aufrufen zurückgegeben werden, kann dies über einen Aufruf von [`publicKeyCredential.response.getAuthenticatorData()`](/de/docs/Web/API/AuthenticatorAttestationResponse/getAuthenticatorData) zurückgegeben werden.
   - Im Fall von `PublicKeyCredential`s, die aus erfolgreichen `get()`-Aufrufen zurückgegeben werden, finden Sie dies in der [`publicKeyCredential.response.authenticatorData`](/de/docs/Web/API/AuthenticatorAssertionResponse/authenticatorData)-Eigenschaft.

   Authentifizierungsdaten haben die Form eines {{jsxref("ArrayBuffer")}} mit einer konsistenten Struktur – siehe [authenticator data](/de/docs/Web/API/Web_Authentication_API/Authenticator_data). Die Daten der Erweiterungsergebnisse des Authentifizierungsgeräts befinden sich immer in einem Abschnitt am Ende, als [CBOR-Karte](https://cbor.io/), die die Ergebnisse darstellt. Siehe [`AuthenticatorAssertionResponse.authenticatorData`](/de/docs/Web/API/AuthenticatorAssertionResponse/authenticatorData) für eine detaillierte Beschreibung der vollständigen Authentifizierungsdatenstruktur.

   Zurück zu unserem Beispiel: Wenn die relying party autorisiert ist, den `minPinLength`-Wert zu erhalten, würden die Authentifizierungsdaten eine Darstellung davon enthalten: `"minPinLength": uint`.

## Verfügbare Erweiterungen

Die folgenden Erweiterungen stellen keine vollständige Liste aller verfügbaren Erweiterungen dar. Wir haben uns entschieden, Erweiterungen zu dokumentieren, von denen wir wissen, dass sie standardisiert und von mindestens einer Rendering-Engine unterstützt werden.

### `appid`

- Nutzbar in: Authentifizierung ([`get()`](/de/docs/Web/API/CredentialsContainer/get))
- Verarbeitet von: Benutzeragent
- Spezifikation: [FIDO AppID Erweiterung (appid)](https://w3c.github.io/webauthn/#sctn-appid-extension)

Ermöglicht es einer relying party, eine Behauptung für eine zuvor mit der alten FIDO U2F JavaScript API registrierte Anmeldeinformation anzufordern, um den Aufwand einer erneuten Registrierung der Anmeldeinformation zu vermeiden. Die `appid` ist das Äquivalent zu der `rpId` in WebAuthn (obwohl zu beachten ist, dass `appid`s in Form von URLs vorliegen, während `rpId`s in Form von Domains vorliegen).

#### Eingabe

Die `extensions`-Property der `publicKey` muss eine `appid`-Property enthalten, deren Wert die Anwendungskennzeichnung ist, die in der alten API verwendet wurde. Zum Beispiel:

```js
({
  extensions: {
    appid: "https://accounts.example.com",
  },
});
```

Sie müssen auch die FIDO U2F-Credential-IDs in der `allowCredentials` Property der `publicKey` auflisten, zum Beispiel:

```js
({
  allowCredentials: [
    {
      id: arrayBuffer, // needs to contain decoded binary form of id
      transports: ["nfc", "usb"],
      type: "public-key",
    },
  ],
});
```

#### Ausgabe

Gibt `appid: true` aus, wenn die `appid` erfolgreich für die Behauptung verwendet wurde, oder `appid: false` anderenfalls.

### `appidExclude`

- Nutzbar in: Registrierung ([`create()`](/de/docs/Web/API/CredentialsContainer/create))
- Verarbeitet von: Benutzeragent
- Spezifikation: [FIDO AppID Ausschluss-Erweiterung (appidExclude)](https://w3c.github.io/webauthn/#sctn-appid-exclude-extension)

Ermöglicht es einer relying party, Authentifizierungsgeräte mit bestimmten zuvor registrierten Anmeldeinformationen unter Verwendung der alten FIDO U2F JavaScript API während der Registrierung auszuschließen. Dies ist erforderlich, weil standardmäßig die Inhalte des `excludeCredentials`-Felds als WebAuthn-Anmeldeinformationen angesehen werden. Wenn Sie diese Erweiterung verwenden, können Sie alte FIDO U2F-Anmeldeinformationen im `excludeCredentials`-Feld einfügen, und sie werden als solche erkannt.

#### Eingabe

Die `extensions`-Property der `publicKey` muss eine `appidExclude`-Property enthalten, deren Wert der Bezeichner des relying party ist, der anfordert, Authentifizierungsgeräte durch alte FIDO U2F-Anmeldeinformationen auszuschließen. Zum Beispiel:

```js
({
  extensions: {
    appidExclude: "https://accounts.example.com",
  },
});
```

Sie können dann FIDO U2F-Anmeldeinformationen in der `excludeCredentials` Property der `publicKey` auflisten, zum Beispiel:

```js
({
  excludeCredentials: [
    {
      id: arrayBuffer, // needs to contain decoded binary form of id
      transports: ["nfc", "usb"],
      type: "public-key",
    },
  ],
});
```

#### Ausgabe

Gibt `appidExclude: true` aus, wenn die Erweiterung angewendet wurde, oder `appidExclude: false` anderenfalls.

### `credProps`

- Nutzbar in: Registrierung ([`create()`](/de/docs/Web/API/CredentialsContainer/create))
- Verarbeitet von: Benutzeragent
- Spezifikation: [Credential Properties Erweiterung (credProps)](https://w3c.github.io/webauthn/#sctn-authenticator-credential-properties-extension)

Ermöglicht es einer relying party, zusätzliche Informationen/Eigenschaften über die erstellten Anmeldeinformationen anzufordern. Dies ist derzeit nur nützlich, wenn `create()` mit `publicKey.authenticatorSelection.residentKey = "preferred"` aufgerufen wird; es fordert Informationen darüber an, ob die erstellte Anmeldeinformation auffindbar ist.

#### Eingabe

Die `extensions`-Property der `publicKey` muss eine `credProps`-Property mit einem Wert von `true` enthalten:

```js
({
  extensions: {
    credProps: true,
  },
});
```

Sie müssen auch `authenticatorSelection.requireResidentKey` auf `true` setzen, was darauf hinweist, dass ein residenter Schlüssel erforderlich ist.

```js
({
  authenticatorSelection: {
    requireResidentKey: true,
  },
});
```

#### Ausgabe

Gibt folgendes aus, wenn das registrierte [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential) eine clientseitig auffindbare Anmeldeinformation ist:

```js
({
  credProps: {
    rk: true,
  },
});
```

Wenn `rk` im Ausgabeergebnis auf `false` gesetzt ist, handelt es sich bei der Anmeldeinformation um eine serverseitige Anmeldeinformation. Wenn `rk` im Ausgabeergebnis nicht vorhanden ist, ist nicht bekannt, ob die Anmeldeinformation clientseitig auffindbar oder serverseitig ist.

### `credProtect`

- Nutzbar in: Registrierung ([`create()`](/de/docs/Web/API/CredentialsContainer/create))
- Verarbeitet von: Authentifizierungsgerät
- Spezifikation: [Credential Protection (credProtect)](https://fidoalliance.org/specs/fido-v2.1-ps-20210615/fido-client-to-authenticator-protocol-v2.1-ps-20210615.html#sctn-credProtect-extension)

Ermöglicht es einer relying party, eine Mindestkreditialschutzrichtlinie anzugeben, wenn eine Anmeldeinformation erstellt wird.

#### Eingabe

Die `extensions`-Property der `publicKey` muss eine `credentialProtectionPolicy`-Property enthalten, die das Schutzniveau der zu erstellenden Anmeldeinformation angibt, und eine boolesche `enforceCredentialProtectionPolicy`-Property, die angibt, ob der `create()`-Aufruf scheitern soll, anstatt eine Anmeldeinformation zu erstellen, die nicht der festgelegten Richtlinie entspricht:

```js
({
  extensions: {
    credentialProtectionPolicy: "userVerificationOptional",
    enforceCredentialProtectionPolicy: true,
  },
});
```

Die verfügbaren `credentialProtectionPolicy`-Werte sind wie folgt:

- `"userVerificationOptional"` {{Experimental_Inline}}
  - : Benutzerüberprüfung ist optional. Der entsprechende `credProtect`-Wert, der an den Authentifizierer zur Verarbeitung gesendet wird, ist `0x01`.
- `"userVerificationOptionalWithCredentialIDList"`
  - : Benutzerüberprüfung ist nur optional, wenn die Anmeldeinformation auffindbar ist (d.h. sie ist clientseitig auffindbar). Der entsprechende `credProtect`-Wert, der an den Authentifizierer zur Verarbeitung gesendet wird, ist `0x02`.
- `"userVerificationRequired"`
  - : Benutzerüberprüfung wird immer benötigt. Der entsprechende `credProtect`-Wert, der an den Authentifizierer zur Verarbeitung gesendet wird, ist `0x03`.

> [!NOTE]
> Chromium setzt standardmäßig `userVerificationOptionalWithCredentialIDList` oder `userVerificationRequired`, abhängig von der Anfrageart:
>
> - Chromium fordert ein Schutzniveau von `userVerificationOptionalWithCredentialIDList` an, wenn eine Anmeldeinformation erstellt wird, wenn `residentKey` auf `preferred` oder `required` gesetzt ist. (Das Setzen von `requireResidentKey` wird genauso behandelt wie required.) Dies stellt sicher, dass der bloße physische Besitz eines Sicherheitsschlüssels nicht ausreicht, um die Abfrage einer auffindbaren Anmeldeinformation für eine bestimmte `rpId` zu ermöglichen.
> - Wenn `residentKey` erforderlich ist und `userVerification` bevorzugt ist, wird das Schutzniveau auf `userVerificationRequired` erhöht. Dies stellt sicher, dass der physische Besitz eines Sicherheitsschlüssels die Anmeldung bei einer Website, die keine Benutzerüberprüfung erfordert, nicht ermöglicht. (Dies ist jedoch kein vollständiger Schutz; Websites sollten dennoch sorgfältig die Sicherheit ihrer Benutzer berücksichtigen.)
> - Wenn die Website ein explizites `credProtect`-Niveau anfordert, wird dies die Standardeinstellungen überschreiben. Diese Standardeinstellungen führen niemals dazu, dass das Schutzniveau niedriger ist als der Standard des Sicherheitsschlüssels, wenn dieser höher ist.
>
> Wenn der Wert von `enforceCredentialProtectionPolicy` `true` ist, scheitert der `create()`-Aufruf, wenn die Richtlinie nicht eingehalten werden kann (z. B. erfordert sie eine Benutzerüberprüfung, aber der Authentifizierer unterstützt keine Benutzerüberprüfung). Wenn er `false` ist, wird das System sein Bestes tun, eine Anmeldeinformation zu erstellen, die der Richtlinie entspricht, aber sie wird dennoch eine erstellen, die so nah wie möglich an die Richtlinie heranreicht, wenn dies nicht möglich ist.

#### Ausgabe

Wenn der `create()`-Aufruf erfolgreich ist, werden die Authentifizierungsdaten eine Darstellung des `credProtect`-Wertes enthalten, der die festgelegte Richtlinie in folgender Form darstellt:

```js
({ credProtect: 0x01 });
```

### `largeBlob`

- Nutzbar in: Registrierung ([`create()`](/de/docs/Web/API/CredentialsContainer/create)) und Authentifizierung ([`get()`](/de/docs/Web/API/CredentialsContainer/get))
- Verarbeitet von: Benutzeragent
- Spezifikation: [Large blob storage extension (largeBlob)](https://w3c.github.io/webauthn/#sctn-large-blob-extension)

Ermöglicht es einer relying party, Blobs zu speichern, die mit einer Anmeldeinformation auf dem Authentifizierer verknüpft sind – zum Beispiel kann sie direkt Zertifikate speichern, anstatt einen zentralisierten Authentifizierungsdienst zu betreiben.

#### Eingabe

Während eines `create()`-Aufrufs muss die `extensions`-Property der `publicKey` eine `largeBlob`-Property mit folgender Objektstruktur enthalten:

```js
({
  extensions: {
    largeBlob: {
      support: "required",
    },
  },
});
```

Der Wert der `support`-Property ist eine Zeichenfolge, die folgende sein kann:

- `"preferred"`: Die Anmeldeinformation wird nach Möglichkeit mit einem Authentifizierer erstellt, der Blobs speichern kann, wird aber dennoch erstellt, wenn nicht. Die Ausgabe `supported` Property berichtet über die Fähigkeit des Authentifizierers, Blobs zu speichern.
- `"required"`: Die Anmeldeinformation wird mit einem Authentifizierer erstellt, der Blobs speichern kann. Der `create()`-Aufruf scheitert, wenn dies unmöglich ist.

Während eines `get()`-Aufrufs muss die `extensions`-Property der `publicKey` eine `largeBlob`-Property mit einer von zwei Untereigenschaften enthalten – `read` oder `write` (`get()` scheitert, wenn beide vorhanden sind):

Die `read`-Property ist ein boolescher Wert. Ein Wert von `true` zeigt an, dass die relying party ein zuvor geschriebenes Blob, das mit der behaupteten Anmeldeinformation verknüpft ist, abrufen möchte:

```js
({
  extensions: {
    largeBlob: {
      read: true,
    },
  },
});
```

Die `write`-Property nimmt als Wert ein {{jsxref("ArrayBuffer")}}, {{jsxref("TypedArray")}} oder {{jsxref("DataView")}}, das ein Blob darstellt, das die relying party neben einer vorhandenen Anmeldeinformation speichern möchte:

```js
({
  extensions: {
    largeBlob: {
      write: arrayBuffer,
    },
  },
});
```

> [!NOTE]
> Damit ein Schreibauthentifizierungsvorgang erfolgreich ist, muss `publicKey.allowCredentials` nur ein einzelnes Element enthalten, das die Anmeldeinformation darstellt, neben der das Blob gespeichert werden soll.

#### Ausgabe

Ein erfolgreicher `create()`-Aufruf liefert die folgende Erweiterungsausgabe, wenn die registrierte Anmeldeinformation in der Lage ist, Blobs zu speichern:

```js
({
  largeBlob: {
    supported: true, // false if it cannot store blobs
  },
});
```

Ein `get()`-Lesen macht das Blob als {{jsxref("ArrayBuffer")}} in der Erweiterungsausgabe verfügbar, wenn es erfolgreich ist:

```js
({
  largeBlob: {
    blob: arrayBuffer,
  },
});
```

> [!NOTE]
> Wenn nicht erfolgreich, wird das `largeBlob`-Objekt zurückgegeben, aber `blob` wird nicht vorhanden sein.

Ein `get()`-Schreiben gibt an, ob der Schreibvorgang mit einem `written` booleschen Wert in der Erweiterungsausgabe erfolgreich war. Ein Wert von `true` bedeutet, dass es erfolgreich auf dem zugehörigen Authentifizierer geschrieben wurde, und `false` bedeutet, dass es erfolglos war.

```js
({
  largeBlob: {
    written: true,
  },
});
```

### `minPinLength`

- Nutzbar in: Registrierung ([`create()`](/de/docs/Web/API/CredentialsContainer/create))
- Verarbeitet von: Authentifizierungsgerät
- Spezifikation: [Minimum PIN Length Extension (minPinLength)](https://fidoalliance.org/specs/fido-v2.1-ps-20210615/fido-client-to-authenticator-protocol-v2.1-ps-20210615.html#sctn-minpinlength-extension)

Ermöglicht es relying parties, die Mindest-PIN-Länge des Authentifizierers anzufordern.

#### Eingabe

Die `extensions`-Property der `publicKey` muss eine `minPinLength`-Property mit einem Wert von `true` enthalten:

```js
({
  extensions: {
    minPinLength: true,
  },
});
```

#### Ausgabe

Wenn die relying party autorisiert ist, den `minPinLength`-Wert zu erhalten (wenn ihre `rpId` auf der autorisierten relying party-Liste des Authentifizierers vorhanden ist), enthalten die Authentifizierungsdaten eine Darstellung davon in der folgenden Form:

```js
({ minPinLength: uint });
```

Wenn die relying party nicht autorisiert ist, wird die Erweiterung ignoriert und kein `"minPinLength"`-Ausgabewert bereitgestellt.

### `payment`

- Nutzbar in: Registrierung ([`create()`](/de/docs/Web/API/CredentialsContainer/create))
- Verarbeitet von: Benutzeragent
- Spezifikation: [Secure Payment Confirmation](https://w3c.github.io/secure-payment-confirmation/)

Ermöglicht es einer relying party, die Erstellung einer WebAuthn-Anmeldeinformation anzufordern, die sowohl von der relying party als auch von anderen Parteien mit Secure Payment Confirmation genutzt werden kann; siehe [Using Secure Payment Confirmation](/de/docs/Web/API/Payment_Request_API/Using_secure_payment_confirmation).

#### Eingabe

Die Eingaben für die `payment`-Erweiterung sind im [AuthenticationExtensionsPaymentInputs-Dictionary](https://w3c.github.io/secure-payment-confirmation/#dictdef-authenticationextensionspaymentinputs) definiert.

- `isPayment`
  - : Ein boolescher Wert, der angibt, dass die Erweiterung aktiv ist.
- `rpID`
  - : Die [Relying Party](https://w3c.github.io/webauthn/#relying-party)-ID der verwendeten Anmeldeinformationen. Wird nur zur Authentifizierungszeit verwendet; nicht bei der Registrierung.
- `topOrigin`
  - : Der Ursprung des obersten Frames. Wird nur zur Authentifizierungszeit verwendet; nicht bei der Registrierung.
- `payeeName`
  - : Der Name des Zahlungsempfängers, falls vorhanden, der dem Benutzer angezeigt wurde. Wird nur zur Authentifizierungszeit verwendet; nicht bei der Registrierung.
- `payeeOrigin`
  - : Der Ursprung des Zahlungsempfängers, falls vorhanden, der dem Benutzer angezeigt wurde. Wird nur zur Authentifizierungszeit verwendet; nicht bei der Registrierung.
- `total`
  - : Der Betrag der Transaktion, der dem Benutzer angezeigt wurde. Wird nur zur Authentifizierungszeit verwendet; nicht bei der Registrierung. Der Betrag ist vom Typ [PaymentCurrencyAmount](https://w3c.github.io/payment-request/#dom-paymentcurrencyamount).
- `instrument`
  - : Die Instrumentendetails, die dem Benutzer angezeigt wurden. Wird nur zur Authentifizierungszeit verwendet; nicht bei der Registrierung. Das Instrument ist vom Typ [PaymentCredentialInstrument](https://w3c.github.io/secure-payment-confirmation/#dictdef-paymentcredentialinstrument).

#### Ausgabe

Keine

### `prf`

- Nutzbar in: Registrierung ([`create()`](/de/docs/Web/API/CredentialsContainer/create)) und Authentifizierung ([`get()`](/de/docs/Web/API/CredentialsContainer/get))
- Verarbeitet von: Benutzeragent
- Spezifikation: [Pseudo-random function extension (prf)](https://w3c.github.io/webauthn/#prf-extension)

Ermöglicht es einer relying party, Ausgaben für entweder einen oder zwei Eingaben aus einer pseudorandomisierten Funktion (PRF) zu erhalten, die mit einer Anmeldeinformation verknüpft ist.
Eine PRF ist im Wesentlichen eine [random oracle](https://en.wikipedia.org/wiki/Random_oracle) – eine Funktion, die für jede gegebene Eingabe einen zufälligen Wert zurückgibt, aber immer denselben Wert für dieselbe Eingabe zurückgibt.

Die Fähigkeit, eine zufällige Zahl zu generieren, die mit der Anmeldeinformation eines Benutzers verknüpft ist, ist in einer Reihe von kryptografischen Anwendungen nützlich.
Beispielsweise kann es verwendet werden, um einen symmetrischen Schlüssel zur Verschlüsselung sensibler Daten zu generieren, der nur von einem Benutzer entschlüsselt werden kann, der das Seed und den zugehörigen Authentifizierer hat.
Es könnte ähnlich verwendet werden, um einen symmetrischen Schlüssel für End-to-End-Verschlüsselung zu erstellen, der mit einem Wert vom Server initialisiert wird und für diese Anmeldeinformation und Sitzung einzigartig ist.

Die Erweiterung ermöglicht es Ihnen, Pufferwerte des Typs {{jsxref("ArrayBuffer")}} oder {{jsxref("TypedArray")}} an den Authentifizierer zu übermitteln, der das Ergebnis der Bewertung des Wertes mit der PRF der zugehörigen Anmeldeinformation zurückgibt.
Dies kann in einer Aussage erfolgen, als Teil des Authentifizierungsablaufs – unter Angabe der Anmeldeinformation oder der Anmeldeinformationen, für die das Ergebnis ausgewertet werden soll.
Es kann auch bei der Erstellung einer Anmeldeinformation erfolgen; jedoch unterstützen weniger Authentifizierer die Generierung von Ausgaben bei der Erstellung von Anmeldeinformationen.

#### Eingabe

Während eines `create()`-Aufrufs kann die `extensions`-Property der `publicKey` eine `prf`-Property enthalten, die über ein `eval`-Objekt mit der Eigenschaft `first` und optional der Eigenschaft `second` verfügt.
Diese Eigenschaften sind entweder {{jsxref("ArrayBuffer")}} oder {{jsxref("TypedArray")}}-Instanzen, die Werte enthalten, die an die PRF für die Anmeldeinformation übermittelt werden.

Zum Beispiel könnte die unten stehende Definition verwendet werden, wenn eine neue Anmeldeinformation erstellt wird, um einen neuen symmetrischen Schlüssel aus einem vom Server bereitgestellten Geheimnis zu erstellen.

```js
({
  extensions: {
    prf: {
      eval: { first: new TextEncoder().encode("Salt for new symmetric key") },
    },
  },
});
```

Die optionale `second`-Eigenschaft kann verwendet werden, wenn zwei Zufallswerte für eine Anmeldeinformation erstellt werden müssen, wie in einem Workflow, in dem der Verschlüsselungsschlüssel bei jeder Sitzung gedreht wird.
Als Beispiel für einen solchen Workflow übermitteln Sie in jeder Sitzung zwei Salts: Der `first`-Salt gibt einen Wert zurück, der verwendet werden kann, um die vorherigen Sitzungsdaten zu entschlüsseln, während der `second`-Salt einen Wert zurückgibt, der verwendet werden kann, um die Sitzungsdaten dieser Sitzung zu verschlüsseln.
In den nachfolgenden Sitzungen wird der `second`-Salt an die Position des `first`-Salts verschoben, sodass die Lebensdauer, in der ein bestimmter Salt nützlich kompromittiert werden kann, begrenzt ist.

```js
{
  extensions: {
    prf: {
      eval: {
        first: currentSessionKey /* salt for current session */,
        second: nextSessionKey /* salt for next session */,
      },
    },
  },
};
```

Der `create()`-Aufruf kann mit folgenden Ausnahmen abgelehnt werden:

- `NotSupportedError` [`DomException`](/de/docs/Web/API/DOMException)
  - Der Schlüssel `evalByCredential` ist im `eval`-Objekt vorhanden.

Beachten Sie, dass die Auswertung einer PRF bei der Erstellung einer Anmeldeinformation möglicherweise nicht unterstützt wird, und dies würde in der Ausgabe gemeldet werden.
Sie können immer noch versuchen, die PRF in einer Aussage zu evaluieren, wie unten gezeigt.

Während eines `get()`-Aufrufs kann die `extensions`-Property der `publicKey` eine `prf`-Property mit der Untereigenschaft `evalByCredential` enthalten.
Dies ist ein Objekt, das {{Glossary("Base64", "Base64")}} URL-codierte Anmeldeinformations-IDs auf Bewertungobjekte mit der im obigen Beispiel gezeigten Form abbildet.
Mit anderen Worten, dies ermöglicht Ihnen, Werte für verschiedene Anmeldeinformationen zu evaluieren.

```js
{
  extensions: {
    prf: {
      evalByCredential: {"<credentialId>": {first: bufferOne, second: bufferTwo}, ..., "<credentialId>": {first: anotherBufferOne, second: anotherBufferTwo} }
    },
  },
};
```

Der `get()`-Aufruf kann mit folgenden Ausnahmen abgelehnt werden:

- `NotSupportedError` [`DomException`](/de/docs/Web/API/DOMException)
  - : Wenn `eval` das `prf`-Objekt ist, oder wenn `allowCredentials` leer ist, wenn `evalByCredential` nicht leer ist.
- `SyntaxError` [`DomException`](/de/docs/Web/API/DOMException)
  - : Jeder Schlüssel in `evalByCredential` ist die leere Zeichenfolge oder keine gültige Base64-URL-Codierung oder stimmt nicht mit der ID eines Elements in [`publicKey.allowCredentials`](/de/docs/Web/API/PublicKeyCredentialRequestOptions#allowcredentials) überein.

#### Ausgabe

Ein erfolgreicher `create()`-Aufruf liefert die folgende Erweiterungsausgabe, wenn die registrierte Anmeldeinformation die Verwendung der PRF bei der Erstellung von Anmeldeinformationen unterstützt.

```js
{
  prf: {
    enabled: true, // PRF can be used when creating credentials.
    results: {first: outputBuffer1, second: outputBuffer2}
  },
};
```

Die `enabled`-Property gibt an, ob die PRF bei der Erstellung von Anmeldeinformationen verwendet werden kann.
Die `first` und `second` Properties enthalten das Ergebnis der Auswertung von `first` und `second` auf der Eingabe, und `second` wird weggelassen, wenn die entsprechende Eingabe nicht spezifiziert wurde.

Wenn der Authentifizierer die Verwendung der PRF bei der Erstellung nicht unterstützt, sieht die Ausgabe von `create()` so aus:

```js
{
  prf: {
    enabled: false, // PRF cannot be used when creating credentials.
  },
};
```

Ein `get()` gibt ein gleiches `prf`-Objekt mit der gleichen Struktur wie `create()` zurück, mit Ausnahme, dass es den `enabled`-Schlüssel weglässt.
Das Objekt enthält PRF-Werte, die den Eingaben für die vom Benutzer ausgewählte Anmeldeinformation entsprechen.

```js
{
  prf: {
    results: {first: outputBuffer1, second: outputBuffer2}
  },
};
```

Beachten Sie, dass `enabled` nur als Ausgabe für `create()` vorhanden ist und angibt, ob die PRF vom Authentifizierer unterstützt wird, wenn eine Anmeldeinformation erstellt wird.
Wenn der Authentifizierer die PRF überhaupt nicht unterstützt, sieht das Ergebnis für den `get()`-Aufruf so aus:

```js
{
  prf: {},
};
```

## Spezifikationen

WebAuthn-Erweiterungen sind an mehreren Stellen spezifiziert. IANA's [WebAuthn-Erweiterungs-Identifikatoren](https://www.iana.org/assignments/webauthn/webauthn.xhtml#webauthn-extension-ids) bietet ein Register aller Erweiterungen, aber beachten Sie, dass einige der Erweiterungen veraltet sein können.

{{Specifications}}

## Browser-Kompatibilität

Die Kompatibilitätsdaten für WebAuthn-Erweiterungen wurden in zwei Tabellen unterteilt – Erweiterungen, die während der Anmeldedatenregistrierung ([`create()`](/de/docs/Web/API/CredentialsContainer/create)) verwendet werden können, und Erweiterungen, die während der Authentifizierung ([`get()`](/de/docs/Web/API/CredentialsContainer/get)) verwendet werden können. Einige Erweiterungen sind während beider Vorgänge nutzbar.

{{Compat}}
