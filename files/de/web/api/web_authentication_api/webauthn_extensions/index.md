---
title: Web-Authentifizierungserweiterungen
slug: Web/API/Web_Authentication_API/WebAuthn_extensions
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{DefaultAPISidebar("Web Authentication API")}}

Die [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) verfügt über ein System von Erweiterungen – zusätzliche Funktionen, die während der Erstellung von Anmeldeinformationen ([`navigator.credentials.create()`](/de/docs/Web/API/CredentialsContainer/create)) oder Authentifizierungsoperationen ([`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get)) angefordert werden können. Dieser Artikel erklärt, wie Sie WebAuthn-Erweiterungen anfordern, Informationen über die Antworten auf diese Anfragen abrufen und welche Erweiterungen verfügbar sind – einschließlich Browser-Unterstützung sowie erwarteter Eingaben und Ausgaben.

## Anleitung zur Nutzung von WebAuthn-Erweiterungen

Beim Aufruf von [`navigator.credentials.create()`](/de/docs/Web/API/CredentialsContainer/create) oder [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) kann das erforderliche `publicKey`-Objekt, um einen WebAuthn-Flow zu initiieren, eine `extensions`-Eigenschaft enthalten. Der Wert von `extensions` ist selbst ein Objekt, dessen Eigenschaften die Eingabewerte für alle Erweiterungen sind, die die vertrauende Seite in der von Ihnen aufgerufenen Methode nutzen möchte.

Hinter den Kulissen werden die Eingaben vom Benutzeragenten und/oder dem Authentifikator verarbeitet.

Zum Beispiel könnten wir in einem `publicKey`-Objekt für einen `create()`-Aufruf die Nutzung von zwei Erweiterungen anfordern:

1. Die `credProps`-Erweiterung. Vertrauende Parteien setzen `credProps`, um den Browser zu bitten, der vertrauenden Partei mitzuteilen, ob die Anmeldeinformationen nach der Registrierung ansässig/erkennbar sind. Dies ist nützlich, wenn `create()` mit `publicKey.authenticatorSelection.residentKey = "preferred"` aufgerufen wird. Um es anzufordern, muss `publicKey.extensions.credProps = true` gesetzt werden, wenn der Browser eine Anmeldeinformation erstellt, und je nach verwendetem Authentifikatortyp wird sie erkennbar sein (zum Beispiel würde der FIDO2-Authentifikator sie typischerweise erkennbar machen; FIDO1/U2F-Sicherheitsschlüssel wäre nicht erkennbar). `credProps` wird nur vom Benutzeragenten verarbeitet.
2. Die `minPinLength`-Erweiterung erlaubt es vertrauenden Parteien, die minimale PIN-Länge des Authentifikators abzufragen. Dafür muss `extensions.minPinLength` auf `true` gesetzt werden. `minPinLength` wird durch den Authentifikator verarbeitet, während der Benutzeragent nur dazu dient, die Eingabedaten an ihn weiterzureichen.

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

Wir können dann das `publicKey`-Objekt in einen `create()`-Aufruf übergeben, um den Flow zur Erstellung von Anmeldeinformationen zu initiieren:

```js
navigator.credentials.create({ publicKey });
```

## Abrufen der Ergebnisse von Erweiterungsanfragen

Wenn erfolgreich, gibt der `create()`-Aufruf ein {{jsxref("Promise")}} zurück, das sich mit einem [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Objekt auflöst. Sobald die Verarbeitung der Erweiterungen abgeschlossen ist, werden die Ergebnisse dieser Verarbeitung in der Antwort kommuniziert (obwohl nicht in allen Fällen – es ist möglich, dass Erweiterungen keine Ausgabe haben).

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

Wie das obige Code-Snippet zeigt, gibt es zwei verschiedene Orte, an denen Sie Ihre output-Erweiterungsergebnisse finden können:

1. Sie können die Ergebnisse der Client (Benutzeragenten) Erweiterungsverarbeitung finden, indem Sie die Methode [`PublicKeyCredential.getClientExtensionResults()`](/de/docs/Web/API/PublicKeyCredential/getClientExtensionResults) aufrufen. Diese gibt eine {{jsxref("Map", "map")}} zurück, wobei jeder Eintrag ein Erweiterungs-Identifikator-String als Schlüssel und die Ausgabe aus der Verarbeitung der Erweiterung durch den Client als Wert enthält. In dem obigen Beispiel würde, wenn der Browser die `credProps`-Erweiterung unterstützt und korrekt verarbeitet wurde, das `myClientExtResults`-Map-Objekt einen Eintrag, `"credProps"`, mit einem Wert von `{ rk: true }` enthalten. Dies würde bestätigen, dass die erstellte Anmeldeinformation tatsächlich erkennbar ist.

2. Sie können die Ergebnisse der Authentifikator-Erweiterungsverarbeitung in den Authentifikatordaten für die Operation finden:
   - Im Fall von `PublicKeyCredential`s, die von erfolgreichen `create()`-Aufrufen zurückgegeben wurden, kann dies über einen Aufruf von [`publicKeyCredential.response.getAuthenticatorData()`](/de/docs/Web/API/AuthenticatorAttestationResponse/getAuthenticatorData) zurückgegeben werden.
   - Im Fall von `PublicKeyCredential`s, die von erfolgreichen `get()`-Aufrufen zurückgegeben wurden, kann dies in der [`publicKeyCredential.response.authenticatorData`](/de/docs/Web/API/AuthenticatorAssertionResponse/authenticatorData)-Eigenschaft gefunden werden.

   Authentifikatordaten nehmen die Form eines {{jsxref("ArrayBuffer")}} mit einer konsistenten Struktur an – siehe [authenticator data](/de/docs/Web/API/Web_Authentication_API/Authenticator_data). Die Daten der Ergebnisse von Authentifikator-Erweiterungen sind immer in einem Abschnitt am Ende zu finden, als [CBOR-Karte](https://cbor.io/), die die Ergebnisse darstellt. Siehe [`AuthenticatorAssertionResponse.authenticatorData`](/de/docs/Web/API/AuthenticatorAssertionResponse/authenticatorData) für eine detaillierte Beschreibung der vollständigen Struktur der Authentifikatordaten.

   Zurück zu unserem Beispiel, wenn die vertrauende Partei autorisiert ist, den `minPinLength`-Wert zu erhalten, würden die Authentifikatordaten eine Darstellung dessen in folgender Form enthalten: `"minPinLength": uint`.

## Verfügbare Erweiterungen

Die unten aufgeführten Erweiterungen stellen keine vollständige Liste aller verfügbaren Erweiterungen dar. Wir haben uns entschieden, Erweiterungen zu dokumentieren, die nachweislich standardisiert und von mindestens einem Rendering-Engine unterstützt werden.

### `appid`

- Nutzbar in: Authentifizierung ([`get()`](/de/docs/Web/API/CredentialsContainer/get))
- Verarbeitet von: Benutzeragent
- Spezifikation: [FIDO AppID-Erweiterung (appid)](https://w3c.github.io/webauthn/#sctn-appid-extension)

Ermöglicht es einer vertrauenden Partei, eine Behauptung für ein zuvor mit der Legacy-FIDO U2F JavaScript-API registriertes Credential anzufordern, um die Mühe der erneuten Registrierung der Anmeldeinformationen zu vermeiden. Das `appid` ist das Äquivalent von WebAuthn's `rpId` (obwohl zu beachten ist, dass `appid`s in Form von URLs vorliegen, während `rpId`s in Form von Domains vorliegen).

#### Eingabe

Die `extensions`-Eigenschaft des `publicKey` muss eine `appid`-Eigenschaft enthalten, deren Wert der in der Legacy-API verwendete Anwendungkennzeichner ist. Zum Beispiel:

```js
({
  extensions: {
    appid: "https://accounts.example.com",
  },
});
```

Sie müssen auch die FIDO U2F-Anmeldeinformationen-IDs in der `allowCredentials`-Eigenschaft des `publicKey` auflisten, zum Beispiel:

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

Gibt `appid: true` aus, wenn das `appid` erfolgreich für die Behauptung verwendet wurde, oder `appid: false` andernfalls.

### `appidExclude`

- Nutzbar in: Registrierung ([`create()`](/de/docs/Web/API/CredentialsContainer/create))
- Verarbeitet von: Benutzeragent
- Spezifikation: [FIDO AppID-Ausschlusserweiterung (appidExclude)](https://w3c.github.io/webauthn/#sctn-appid-exclude-extension)

Ermöglicht es einer vertrauenden Partei, Authentikatoren mit bestimmten Anmeldeinformationen auszuschließen, die zuvor mit der Legacy-FIDO U2F JavaScript-API während der Registrierung registriert wurden. Dies ist erforderlich, da standardmäßig der Inhalt des Feldes `excludeCredentials` als WebAuthn-Anmeldeinformationen angenommen wird. Wenn Sie diese Erweiterung verwenden, können Sie Legacy-FIDO U2F-Anmeldeinformationen in `excludeCredentials` aufnehmen, und sie werden als solche erkannt.

#### Eingabe

Die `extensions`-Eigenschaft des `publicKey` muss eine `appidExclude`-Eigenschaft enthalten, deren Wert der Kennzeichner der vertrauenden Partei ist, die Authentikatoren anhand von Legacy-FIDO U2F-Anmeldeinformationen ausschließen möchte. Zum Beispiel:

```js
({
  extensions: {
    appidExclude: "https://accounts.example.com",
  },
});
```

Sie können dann FIDO U2F-Anmeldeinformationen in der `excludeCredentials`-Eigenschaft des `publicKey` auflisten, zum Beispiel:

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

Gibt `appidExclude: true` aus, wenn die Erweiterung beachtet wurde, oder `appidExclude: false` andernfalls.

### `credProps`

- Nutzbar in: Registrierung ([`create()`](/de/docs/Web/API/CredentialsContainer/create))
- Verarbeitet von: Benutzeragent
- Spezifikation: [Credential Properties-Erweiterung (credProps)](https://w3c.github.io/webauthn/#sctn-authenticator-credential-properties-extension)

Ermöglicht es einer vertrauenden Partei, zusätzliche Informationen/Eigenschaften über das erstellte Credential zu erhalten. Dies ist derzeit nur nützlich, wenn `create()` mit `publicKey.authenticatorSelection.residentKey = "preferred"` aufgerufen wird; es fordert Informationen darüber an, ob das erstellte Credential erkennbar ist.

#### Eingabe

Die `extensions`-Eigenschaft des `publicKey` muss eine `credProps`-Eigenschaft mit einem Wert von `true` enthalten:

```js
({
  extensions: {
    credProps: true,
  },
});
```

Sie müssen auch `authenticatorSelection.requireResidentKey` auf `true` setzen, was angibt, dass ein ansässiger Schlüssel erforderlich ist.

```js
({
  authenticatorSelection: {
    requireResidentKey: true,
  },
});
```

#### Ausgabe

Gibt das Folgende aus, wenn das registrierte [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential) ein clientseitig erkennbares Credential ist:

```js
({
  credProps: {
    rk: true,
  },
});
```

Wenn `rk` im Output auf `false` gesetzt ist, ist das Credential ein serverseitiges Credential. Wenn `rk` im Output nicht vorhanden ist, ist es unbekannt, ob das Credential clientseitig erkennbar oder serverseitig ist.

### `credProtect`

- Nutzbar in: Registrierung ([`create()`](/de/docs/Web/API/CredentialsContainer/create))
- Verarbeitet von: Authentifikator
- Spezifikation: [Credential Protection (credProtect)](https://fidoalliance.org/specs/fido-v2.1-ps-20210615/fido-client-to-authenticator-protocol-v2.1-ps-20210615.html#sctn-credProtect-extension)

Ermöglicht es einer vertrauenden Partei, eine Mindest-Credential-Schutzrichtlinie festzulegen, wenn ein Credential erstellt wird.

#### Eingabe

Die `extensions`-Eigenschaft des `publicKey` muss eine `credentialProtectionPolicy`-Eigenschaft enthalten, die das Schutzlevel des zu erstellenden Credentials angibt, und eine boolesche Eigenschaft `enforceCredentialProtectionPolicy`, die angibt, ob der `create()`-Aufruf fehlschlagen soll, anstatt ein Credential zu erstellen, das nicht den angegebenen Richtlinien entspricht:

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
  - : Benutzerüberprüfung ist optional. Der entsprechende `credProtect`-Wert, der an den Authentifikator zur Verarbeitung gesendet wird, ist `0x01`.
- `"userVerificationOptionalWithCredentialIDList"`
  - : Benutzerüberprüfung ist nur dann optional, wenn das Credential erkennbar ist (d.h. es ist clientseitig erkennbar). Der entsprechende `credProtect`-Wert, der an den Authentifikator zur Verarbeitung gesendet wird, ist `0x02`.
- `"userVerificationRequired"`
  - : Benutzerüberprüfung ist immer erforderlich. Der entsprechende `credProtect`-Wert, der an den Authentifikator zur Verarbeitung gesendet wird, ist `0x03`.

> [!NOTE]
> Chromium wird standardmäßig auf `userVerificationOptionalWithCredentialIDList` oder `userVerificationRequired` setzen, abhängig von der Art der Anfrage:
>
> - Chromium fordert ein Schutzlevel von `userVerificationOptionalWithCredentialIDList` an, wenn ein Credential erstellt wird und `residentKey` auf `preferred` oder `required` gesetzt ist. (Das Setzen von `requireResidentKey` wird als gleichwertig mit erforderlich behandelt.) Dies stellt sicher, dass der einfache physische Besitz eines Sicherheitsschlüssels nicht ermöglicht, die Anwesenheit eines erkennbaren Credentials für ein gegebenes `rpId` abzufragen.
> - Zusätzlich wird, falls `residentKey` `required` ist und `userVerification` bevorzugt wird, das Schutzlevel auf `userVerificationRequired` erhöht. Dies stellt sicher, dass der physische Besitz eines Sicherheitsschlüssels keinen Anmeldeversuch für eine Seite erlaubt, die keine Benutzerüberprüfung erfordert. (Dies ist kein vollständiger Schutz; Seiten sollten dennoch sorgfältig die Sicherheit ihrer Benutzer in Betracht ziehen.)
> - Wenn die Seite ein explizites `credProtect`-Level anfordert, wird dies diese Standardeinstellungen außer Kraft setzen. Diese Standardeinstellungen führen nie dazu, dass das Schutzlevel niedriger ist als das Standard-Sicherheitsniveau des Sicherheitsschlüssels, falls dieses höher ist.
>
> Angenommen, der Wert `enforceCredentialProtectionPolicy` ist `true`. In diesem Fall wird der `create()`-Aufruf fehlschlagen, wenn die Richtlinie nicht eingehalten werden kann (zum Beispiel wird Benutzerüberprüfung gefordert, aber der Authentifikator unterstützt keine Benutzerüberprüfung). Ist er `false`, versucht das System, ein Credential zu erstellen, das der Richtlinie so gut wie möglich entspricht, wird jedoch trotzdem eines erstellen, das so nah wie möglich konform ist, wenn dies nicht möglich ist.

#### Ausgabe

Wenn der `create()`-Aufruf erfolgreich ist, enthalten die Authentifikatordaten eine Darstellung des `credProtect`-Werts, der die festgelegte Richtlinie in folgender Form repräsentiert:

```js
({ credProtect: 0x01 });
```

### `largeBlob`

- Nutzbar in: Registrierung ([`create()`](/de/docs/Web/API/CredentialsContainer/create)) und Authentifizierung ([`get()`](/de/docs/Web/API/CredentialsContainer/get))
- Verarbeitet von: Benutzeragent
- Spezifikation: [Speicherungserweiterung für große Blobs (largeBlob)](https://w3c.github.io/webauthn/#sctn-large-blob-extension)

Ermöglicht es einer vertrauenden Partei, Blobs, die mit einem Credential auf dem Authentifikator assoziiert sind, zu speichern – zum Beispiel könnte sie Zertifikate direkt speichern wollen, anstatt einen zentralisierten Authentifizierungsdienst zu betreiben.

#### Eingabe

Während eines `create()`-Aufrufs muss die `extensions`-Eigenschaft des `publicKey` eine `largeBlob`-Eigenschaft mit der folgenden Objektstruktur enthalten:

```js
({
  extensions: {
    largeBlob: {
      support: "required",
    },
  },
});
```

Der Wert der `support`-Eigenschaft ist ein String, der einer der folgenden sein kann:

- `"preferred"`: Das Credential wird nach Möglichkeit mit einem Authentifikator erstellt, der Blobs speichern kann, es wird jedoch trotzdem eines erstellt, auch wenn dies nicht der Fall ist. Die Ausgabe der Eigenschaft 'supported' gibt die Fähigkeit des Authentifikators an, Blobs zu speichern.
- `"required"`: Das Credential wird mit einem Authentifikator erstellt, um Blobs zu speichern. Der `create()`-Aufruf schlägt fehl, wenn dies nicht möglich ist.

Während eines `get()`-Aufrufs muss die `extensions`-Eigenschaft des `publicKey` eine `largeBlob`-Eigenschaft mit einem der beiden Untereigenschaften `read` oder `write` enthalten (`get()` schlägt fehl, wenn beide vorhanden sind):

Die `read`-Eigenschaft ist ein Boolescher Wert. Ein Wert von `true` bedeutet, dass die vertrauende Partei ein zuvor mit dem behaupteten Credential verbundenes Blob abrufen möchte:

```js
({
  extensions: {
    largeBlob: {
      read: true,
    },
  },
});
```

Die `write`-Eigenschaft nimmt als Wert ein {{jsxref("ArrayBuffer")}}, {{jsxref("TypedArray")}} oder {{jsxref("DataView")}}, das ein Blob darstellt, das die vertrauende Partei zusammen mit einem vorhandenen Credential speichern möchte:

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
> Damit ein Schreib-Authentifizierungsvorgang erfolgreich ist, muss das `publicKey.allowCredentials` nur ein einzelnes Element enthalten, das das Credential darstellt, neben dem Sie das Blob speichern möchten.

#### Ausgabe

Ein erfolgreicher `create()`-Aufruf liefert die folgende Erweiterungsausgabe, wenn das registrierte Credential in der Lage ist, Blobs zu speichern:

```js
({
  largeBlob: {
    supported: true, // false if it cannot store blobs
  },
});
```

Ein `get()`-Leseaufruf macht das Blob in der Erweiterungsausgabe als {{jsxref("ArrayBuffer")}} verfügbar, wenn er erfolgreich ist:

```js
({
  largeBlob: {
    blob: arrayBuffer,
  },
});
```

> [!NOTE]
> Wenn es fehlschlägt, wird das `largeBlob`-Objekt zurückgegeben, aber `blob` wird nicht vorhanden sein.

Ein `get()`-Schreibaufruf gibt an, ob der Schreibvorgang mit einem `written`-Booleschen Wert in der Erweiterungsausgabe erfolgreich war. Ein `true`-Wert bedeutet, dass es erfolgreich auf den zugehörigen Authentifikator geschrieben wurde, und `false` bedeutet, dass es erfolglos war.

```js
({
  largeBlob: {
    written: true,
  },
});
```

### `minPinLength`

- Nutzbar in: Registrierung ([`create()`](/de/docs/Web/API/CredentialsContainer/create))
- Verarbeitet von: Authentifikator
- Spezifikation: [Mindest-PIN-Längen-Erweiterung (minPinLength)](https://fidoalliance.org/specs/fido-v2.1-ps-20210615/fido-client-to-authenticator-protocol-v2.1-ps-20210615.html#sctn-minpinlength-extension)

Ermöglicht es vertrauenden Parteien, die minimale PIN-Länge des Authentikators abzufragen.

#### Eingabe

Die `extensions`-Eigenschaft des `publicKey` muss eine `minPinLength`-Eigenschaft mit einem Wert von `true` enthalten:

```js
({
  extensions: {
    minPinLength: true,
  },
});
```

#### Ausgabe

Wenn die vertrauende Partei autorisiert ist, den `minPinLength`-Wert zu erhalten (wenn ihr `rpId` in der autorisierten Liste der vertrauenden Parteien des Authentiksator ist), werden die Authentifikatordaten eine Darstellung dessen enthalten in folgender Form:

```js
({ minPinLength: uint });
```

Wenn die vertrauende Partei nicht autorisiert ist, wird die Erweiterung ignoriert, und kein `"minPinLength"`-Ausgabewert wird bereitgestellt.

### `payment`

- Nutzbar in: Registrierung ([`create()`](/de/docs/Web/API/CredentialsContainer/create))
- Verarbeitet von: Benutzeragent
- Spezifikation: [Sichere Zahlungsbestätigung](https://w3c.github.io/secure-payment-confirmation/)

Ermöglicht es einer vertrauenden Partei, die Erstellung eines WebAuthn-Credentials anzufordern, das – sowohl von der vertrauenden Partei als auch von anderen Parteien – mit Secure Payment Confirmation verwendet werden kann; siehe [Verwendung der sicheren Zahlungsbestätigung](/de/docs/Web/API/Payment_Request_API/Using_secure_payment_confirmation).

#### Eingabe

Die Eingaben für die `payment`-Erweiterung sind im [AuthenticationExtensionsPaymentInputs dictionary](https://w3c.github.io/secure-payment-confirmation/#dictdef-authenticationextensionspaymentinputs) definiert.

- `isPayment`
  - : Ein Boolescher Wert, der anzeigt, dass die Erweiterung aktiv ist.
- `rpID`
  - : Die [verlassende Parteidentifikation](https://w3c.github.io/webauthn/#relying-party) der verwendeten Credentials. Nur zur Authentifizierungszeit verwendet; nicht zur Registrierung.
- `topOrigin`
  - : Der Ursprung des höchstinstanzlichen Frames. Nur zur Authentifizierungszeit verwendet; nicht zur Registrierung.
- `payeeName`
  - : Der verwendete Name des Zahlungsempfängers, falls vorhanden, der dem Benutzer angezeigt wurde. Nur zur Authentifizierungszeit verwendet; nicht zur Registrierung.
- `payeeOrigin`
  - : Der verwendete Ursprung des Zahlungsempfängers, falls vorhanden, der dem Benutzer angezeigt wurde. Nur zur Authentifizierungszeit verwendet; nicht zur Registrierung.
- `total`
  - : Der dem Benutzer angezeigte Transaktionsbetrag. Nur zur Authentifizierungszeit verwendet; nicht zur Registrierung. Der Betrag hat den Typ [PaymentCurrencyAmount](https://w3c.github.io/payment-request/#dom-paymentcurrencyamount).
- `instrument`
  - : Die dem Benutzer angezeigten Instrumentendetails. Nur zur Authentifizierungszeit verwendet; nicht zur Registrierung. Das Instrument hat den Typ [PaymentCredentialInstrument](https://w3c.github.io/secure-payment-confirmation/#dictdef-paymentcredentialinstrument).

#### Ausgabe

Keine

### `prf`

- Nutzbar in: Registrierung ([`create()`](/de/docs/Web/API/CredentialsContainer/create)) und Authentifizierung ([`get()`](/de/docs/Web/API/CredentialsContainer/get))
- Verarbeitet von: Benutzeragent
- Spezifikation: [Pseudozufallsfunktions-Erweiterung (prf)](https://w3c.github.io/webauthn/#prf-extension)

Ermöglicht es einer vertrauenden Partei, Ausgaben für eines oder zwei Eingaben von einer pseudozufälligen Funktion (PRF), die mit einem Credential verknüpft ist, zu erhalten.
Eine PRF ist im Grunde eine [Zufallsorakel](https://en.wikipedia.org/wiki/Random_oracle) — eine Funktion, die für jede gegebene Eingabe einen zufälligen Wert zurückgibt, aber immer denselben Wert für dieselbe Eingabe liefert.

Die Fähigkeit, eine mit dem Benutzer-Credential assoziierte Zufallszahl zu generieren, ist in mehreren kryptografischen Anwendungen nützlich.
Zum Beispiel kann es verwendet werden, um einen symmetrischen Schlüssel zu erzeugen, mit dem sensible Daten verschlüsselt werden, und der nur von einem Benutzer entschlüsselt werden kann, der den Seed und den zugehörigen Authentifikator besitzt.
Es könnte ähnlich verwendet werden, um einen symmetrischen Schlüssel für die Ende-zu-Ende-Verschlüsselung zu erstellen, der mit einem Wert vom Server und einzigartig für dasselbe Credential und dieselbe Sitzung gesät wird.

Die Erweiterung erlaubt es Ihnen, Pufferwerte vom Typ {{jsxref("ArrayBuffer")}} oder {{jsxref("TypedArray")}} an den Authentifikator zu übergeben, der das Ergebnis der Bewertung des Wertes mit der PRF des zugehörigen Credentials zurückgibt.
Dies kann in einer Behauptung im Rahmen des Authentifizierungsablaufs erfolgen — indem das Credential oder die Credentials angegeben werden, für die das Ergebnis bewertet werden soll.
Es kann auch bei der Erstellung eines Credentials erfolgen; jedoch unterstützen weniger Authentikatoren die Generierung von Ausgaben bei der Erstellung von Credentials.

#### Eingabe

Während eines `create()`-Aufrufs kann die `extensions`-Eigenschaft des `publicKey` eine `prf`-Eigenschaft enthalten, die ein `eval`-Objekt mit der Eigenschaft `first` und optional der Eigenschaft `second` enthält.
Diese Eigenschaften sind entweder {{jsxref("ArrayBuffer")}} oder {{jsxref("TypedArray")}} Instanzen, die die Werte enthalten, die an die PRF für das Credential übergeben werden sollen.

Zum Beispiel könnte die untenstehende Definition verwendet werden, um ein neues Credential zu erstellen, um einen neuen symmetrischen Schlüssel von einem vom Server bereitgestellten Geheimnis zu erstellen.

```js
({
  extensions: {
    prf: {
      eval: { first: new TextEncoder().encode("Salt for new symmetric key") },
    },
  },
});
```

Die optionale Eigenschaft `second` kann verwendet werden, wenn zwei zufällige Werte für ein Credential erstellt werden müssen, wie in einem Arbeitsablauf, bei dem der Verschlüsselungscode in jeder Sitzung rotiert wird.
Als Beispiel für einen solchen Arbeitsablauf geben Sie in jeder Sitzung zwei Salze weiter: das `first`-Salz gibt einen Wert zurück, der verwendet werden kann, um die vorherigen Sitzungsdaten zu entschlüsseln, während das `second`-Salz einen Wert zurückgibt, der verwendet werden kann, um diese Sitzungsdaten zu verschlüsseln.
In nachfolgenden Sitzungen wird das `second`-Salz an die Position des `first`-Salzes verschoben, sodass die Lebensdauer, in der ein bestimmtes Salz sinnvoll kompromittiert werden kann, begrenzt ist.

```js
({
  extensions: {
    prf: {
      eval: {
        first: currentSessionKey, // salt for current session
        second: nextSessionKey, // salt for next session
      },
    },
  },
});
```

Der `create()`-Aufruf kann mit den folgenden Ausnahmen abgelehnt werden:

- `NotSupportedError` [`DomException`](/de/docs/Web/API/DOMException)
  - Der Schlüssel `evalByCredential` ist im `eval`-Objekt vorhanden.

Beachten Sie, dass die Bewertung einer PRF bei der Erstellung eines Credentials möglicherweise nicht unterstützt wird, und dies würde im Output gemeldet.
Sie könnten trotzdem versuchen, die PRF in einer Behauptung, wie unten gezeigt, zu bewerten.

Während eines `get()`-Aufrufs kann die `extensions`-Eigenschaft des `publicKey` eine `prf`-Eigenschaft mit der `evalByCredential`-Unter-Eigenschaft enthalten.
Dies ist ein Objekt, das {{Glossary("Base64", "Base64")}} URL-encodierte Credential-IDs mit Bewertungsobjekten mit derselben Form wie oben beschrieben abbildet.
Mit anderen Worten, dies ermöglicht es, Werte für verschiedene Credentials zur Bewertung anzugeben.

```js
({
  extensions: {
    prf: {
      evalByCredential: {
        "<credentialId>": { first: bufferOne, second: bufferTwo },
        // …
        "<credentialId2>": {
          first: anotherBufferOne,
          second: anotherBufferTwo,
        },
      },
    },
  },
});
```

Der `get()`-Aufruf kann mit den folgenden Ausnahmen abgelehnt werden:

- `NotSupportedError` [`DomException`](/de/docs/Web/API/DOMException)
  - : Wenn `eval` das `prf`-Objekt ist oder wenn `allowCredentials` leer ist, wenn `evalByCredential` nicht leer ist.
- `SyntaxError` [`DomException`](/de/docs/Web/API/DOMException)
  - : Ein beliebiger Schlüssel in `evalByCredential` ist der leere String oder ist keine gültige Base64 URL-Codierung, oder stimmt nicht mit der ID eines Elements mit [`publicKey.allowCredentials`](/de/docs/Web/API/PublicKeyCredentialRequestOptions#allowcredentials) überein.

#### Ausgabe

Ein erfolgreicher `create()`-Aufruf bietet die folgende Erweiterungsausgabe, wenn das registrierte Credential PRF bei der Erstellung von Credentials unterstützt.

```js
({
  prf: {
    enabled: true, // PRF can be used when creating credentials.
    results: { first: outputBuffer1, second: outputBuffer2 },
  },
});
```

Die Eigenschaft `enabled` gibt an, ob PRF bei der Erstellung von Credentials verwendet werden kann.
Die Eigenschaften `first` und `second` enthalten das Ergebnis der Bewertung von `first` und `second` auf der Eingabe, und `second` wird weggelassen, wenn die entsprechende Eingabe nicht angegeben wurde.

Wenn der Authentifikator die Verwendung von PRF bei der Erstellung nicht unterstützt, sieht die Ausgabe bei `create()` so aus:

```js
({
  prf: {
    enabled: false, // PRF cannot be used when creating credentials.
  },
});
```

Ein `get()` gibt dasselbe `prf`-Objekt mit derselben Struktur wie `create()` zurück, außer dass es den `enabled`-Schlüssel weglässt.
Das Objekt enthält PRF-Werte, die den Eingaben für das vom Benutzer ausgewählte Credential entsprechen.

```js
({
  prf: {
    results: { first: outputBuffer1, second: outputBuffer2 },
  },
});
```

Beachten Sie, dass `enabled` nur als Ausgabe für `create()` vorhanden ist und angibt, ob PRF vom Authentifikator unterstützt wird, wenn ein Credential erstellt wird.
Wenn der Authentifikator PRF überhaupt nicht unterstützt, sieht das Ergebnis des `get()`-Aufrufs so aus:

```js
({
  prf: {},
});
```

## Spezifikationen

Es gibt mehrere Orte, an denen WebAuthn-Erweiterungen spezifiziert sind. IANAs [WebAuthn Extension Identifiers](https://www.iana.org/assignments/webauthn/webauthn.xhtml#webauthn-extension-ids) bietet ein Register aller Erweiterungen, aber beachten Sie, dass einige veraltet sein können.

{{Specifications}}

## Browser-Kompatibilität

Die Kompatibilitätsdaten für WebAuthn-Erweiterungen wurden in zwei Tabellen aufgeteilt – Erweiterungen, die während der Registrierung von Anmeldeinformationen ([`create()`](/de/docs/Web/API/CredentialsContainer/create)) verwendet werden können, und Erweiterungen, die während der Authentifizierung ([`get()`](/de/docs/Web/API/CredentialsContainer/get)) verwendet werden können. Einige Erweiterungen sind während beider Vorgänge nutzbar.

{{Compat}}
