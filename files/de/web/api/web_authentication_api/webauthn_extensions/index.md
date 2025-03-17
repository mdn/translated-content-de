---
title: Web-Authentifizierungs-Erweiterungen
slug: Web/API/Web_Authentication_API/WebAuthn_extensions
l10n:
  sourceCommit: ad896488bf8fac04fc6fa144c441fdbfd880737c
---

{{DefaultAPISidebar("Web Authentication API")}}

Die [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) verfügt über ein System von Erweiterungen – zusätzliche Funktionalität, die während der Erstellung von Berechtigungsnachweisen ([`navigator.credentials.create()`](/de/docs/Web/API/CredentialsContainer/create)) oder Authentifizierungsvorgängen ([`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get)) angefordert werden kann. Dieser Artikel erklärt, wie man WebAuthn-Erweiterungen anfordert, Informationen über die Antworten von diesen Anfragen erhält und welche Erweiterungen verfügbar sind — einschließlich der Browser-Unterstützung und der erwarteten Eingaben und Ausgaben.

## Anleitung zur Nutzung von WebAuthn-Erweiterungen

Beim Aufrufen von [`navigator.credentials.create()`](/de/docs/Web/API/CredentialsContainer/create) oder [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) kann das für den Start eines WebAuthn-Flows erforderliche `publicKey`-Objektparameter eine `extensions`-Eigenschaft enthalten. Der Wert von `extensions` ist selbst ein Objekt, dessen Eigenschaften die Eingabewerte für alle Erweiterungen sind, deren Nutzung die vertrauende Partei in der von Ihnen aufgerufenen Methode anfordern möchte.

Im Hintergrund werden die Eingaben vom Benutzeragenten und/oder dem Authentifizierungsgerät verarbeitet.

Zum Beispiel könnten wir in einem `publicKey`-Objekt für einen `create()`-Aufruf die Nutzung von zwei Erweiterungen anfordern:

1. Die Erweiterung `credProps`. Vertrauende Parteien setzen `credProps`, um den Browser zu bitten, der vertrauenden Partei mitzuteilen, ob das Berechtigungsnachweis ansässig/entdeckbar ist, nachdem es registriert wurde. Dies ist nützlich beim Aufrufen von `create()` mit `publicKey.authenticatorSelection.residentKey = "preferred"`. Um es anzufordern, müssen Sie auch `publicKey.extensions.credProps = true` setzen, wenn der Browser ein Berechtigungsnachweis erstellt und, abhängig vom verwendeten Authentifizierungsgerät, wird es entdeckbar sein (zum Beispiel würde das FIDO2-Authentifizierungsgerät es typischerweise entdeckbar machen; FIDO1/U2F-Sicherheitsschlüssel wäre nicht entdeckbar). `credProps` wird nur vom Benutzeragenten verarbeitet.
2. Die Erweiterung `minPinLength` erlaubt es vertrauenden Parteien, die minimale PIN-Länge des Authentifizierungsgeräts anzufordern. Dies erfordert, dass `extensions.minPinLength` auf `true` gesetzt wird. `minPinLength` wird vom Authentifizierungsgerät verarbeitet, wobei der Benutzeragent nur dazu dient, die Eingabedaten an dieses weiterzugeben.

```js
const publicKey = {
  challenge: new Uint8Array([117, 61, 252, 231, 191, 241, ...]),
  rp: { id: "acme.com", name: "ACME Corporation" },
  user: {
    id: new Uint8Array([79, 252, 83, 72, 214, 7, 89, 26]),
    name: "jamiedoe",
    displayName: "Jamie Doe"
  },
  pubKeyCredParams: [ {type: "public-key", alg: -7} ],
  authenticatorSelection: {
    residentKey: "preferred"
  },
  extensions: {
    credProps: true,
    minPinLength: true
  }
}
```

Wir können dann das `publicKey`-Objekt in einen `create()`-Aufruf übergeben, um den Erstellungsfluss des Berechtigungsnachweises zu starten:

```js
navigator.credentials.create({ publicKey });
```

## Abrufen von Ergebnissen von Erweiterungsanfragen

Bei Erfolg wird der `create()`-Aufruf ein {{jsxref("Promise")}} zurückgeben, das mit einem [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Objekt aufgelöst wird. Sobald die Erweiterungsverarbeitung abgeschlossen ist, werden die Ergebnisse der Verarbeitung in der Antwort mitgeteilt (obwohl nicht in allen Fällen – es ist möglich, dass Erweiterungen keine Ausgabe haben).

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

Wie das obige Codebeispiel zeigt, gibt es zwei verschiedene Orte, um die Ausgabeergebnisse der Erweiterungsergebnisse zu finden:

1. Sie können die Ergebnisse der Benutzeragenten-Erweiterungsverarbeitung abrufen, indem Sie die Methode [`PublicKeyCredential.getClientExtensionResults()`](/de/docs/Web/API/PublicKeyCredential/getClientExtensionResults) aufrufen. Diese gibt eine {{jsxref("Map", "map")}} zurück, wobei jeder Eintrag eine Identifikator-Zeichenfolge der Erweiterungen als Schlüssel und die Ausgabe der Verarbeitung der Erweiterung durch den Client als Wert hat. In dem obigen Beispiel würde das `myClientExtResults`-Map-Objekt einen Eintrag, `"credProps"` enthalten, wobei der Wert `{ rk: true }` wäre, wenn der Browser die Erweiterung `credProps` unterstützt und korrekt verarbeitet hat. Dies würde bestätigen, dass das erstellte Berechtigungsnachweis tatsächlich entdeckbar ist.

2. Sie können die Ergebnisse der Authentifizierungsgerät-Erweiterungsverarbeitung in den Authentifizierungsgerätedaten für den Vorgang finden:

   - Im Fall von `PublicKeyCredential`s, die von erfolgreichen `create()`-Aufrufen zurückgegeben werden, kann dies über einen Aufruf zu [`publicKeyCredential.response.getAuthenticatorData()`](/de/docs/Web/API/AuthenticatorAttestationResponse/getAuthenticatorData) zurückgegeben werden.
   - Im Fall von `PublicKeyCredential`s, die von erfolgreichen `get()`-Aufrufen zurückgegeben werden, kann dies in der [`publicKeyCredential.response.authenticatorData`](/de/docs/Web/API/AuthenticatorAssertionResponse/authenticatorData)-Eigenschaft gefunden werden.

   Authentifizierungsgerätedaten haben die Form eines {{jsxref("ArrayBuffer")}} mit einer konsistenten Struktur – siehe [authentifizierungsgerätedaten](/de/docs/Web/API/Web_Authentication_API/Authenticator_data). Die Daten der Authentifizierungsgeräts-Erweiterungsergebnisse werden immer in einem Abschnitt am Ende, als [CBOR map](https://cbor.io/), die die Ergebnisse darstellt, gefunden. Siehe [`AuthenticatorAssertionResponse.authenticatorData`](/de/docs/Web/API/AuthenticatorAssertionResponse/authenticatorData) für eine detaillierte Beschreibung der kompletten Authentifizierungsgerätedatenstruktur.

   Zurück zu unserem Beispiel, wenn die vertrauende Partei autorisiert ist, den `minPinLength`-Wert zu erhalten, würden die Authentifizierungsgerätedaten eine Darstellung davon in folgender Form enthalten: `"minPinLength": uint`.

## Verfügbare Erweiterungen

Die unten aufgeführten Erweiterungen stellen keine erschöpfende Liste aller verfügbaren Erweiterungen dar. Wir haben uns entschieden, Erweiterungen zu dokumentieren, von denen wir wissen, dass sie standardisiert sind und von mindestens einer Rendering-Engine unterstützt werden.

### `appid`

- Nutzbar in: Authentifizierung ([`get()`](/de/docs/Web/API/CredentialsContainer/get))
- Verarbeitet von: Benutzeragent
- Spezifikation: [FIDO AppID-Erweiterung (appid)](https://w3c.github.io/webauthn/#sctn-appid-extension)

Erlaubt es einer vertrauenden Partei, eine Bestätigung für ein Berechtigungsnachweis anzufordern, das zuvor mit der Legacy-FIDO U2F-JavaScript-API registriert wurde, um das lästige Neuregistrieren des Berechtigungsnachweises zu vermeiden. Die `appid` ist das Äquivalent der API zum `rpId` in WebAuthn (obwohl zu beachten ist, dass `appid`s in Form von URLs vorliegen, während `rpId`s in Form von Domains vorliegen).

#### Eingabe

Die `publicKey`-`extensions`-Eigenschaft muss eine `appid`-Eigenschaft enthalten, deren Wert der in der Legacy-API verwendete Anwendungsbezeichner ist. Zum Beispiel:

```js
extensions: {
  appid: "https://accounts.example.com";
}
```

Sie müssen auch die FIDO U2F-Berechtigungsnachweis-IDs in der `allowCredentials`-Eigenschaft von `publicKey` auflisten, zum Beispiel:

```js
allowCredentials: {
  [
    id: arrayBuffer, // needs to contain decoded binary form of id
    transports: ["nfc", "usb"]
    type: "public-key"
  ]
}
```

#### Ausgabe

Gibt `appid: true` aus, wenn die `appid` erfolgreich für die Bestätigung verwendet wurde, oder `appid: false` andernfalls.

### `appidExclude`

- Nutzbar in: Registrierung ([`create()`](/de/docs/Web/API/CredentialsContainer/create))
- Verarbeitet von: Benutzeragent
- Spezifikation: [FIDO AppID-Ausschlusserweiterung (appidExclude)](https://w3c.github.io/webauthn/#sctn-appid-exclude-extension)

Erlaubt es einer vertrauenden Partei, Authentifizierungsgeräte in der Registrierung auszuschließen, die bestimmte Berechtigungsnachweise enthalten, die zuvor mit der Legacy-FIDO U2F-JavaScript-API registriert wurden. Dies ist erforderlich, da standardmäßig der Inhalt des `excludeCredentials`-Feldes als WebAuthn-Berechtigungsnachweise angenommen wird. Bei Verwendung dieser Erweiterung können Sie Legacy-FIDO U2F-Berechtigungsnachweise in `excludeCredentials` aufnehmen, und sie werden als solche erkannt.

#### Eingabe

Die `publicKey`-`extensions`-Eigenschaft muss eine `appidExclude`-Eigenschaft enthalten, deren Wert der Bezeichner der vertrauenden Partei ist, die das Ausschließen von Authentifizierungsgeräten durch Legacy-FIDO U2F-Berechtigungsnachweise anfordert. Zum Beispiel:

```js
extensions: {
  appidExclude: "https://accounts.example.com";
}
```

Sie können dann FIDO U2F-Berechtigungsnachweise in der `publicKey`-`excludeCredentials`-Eigenschaft auflisten, zum Beispiel:

```js
excludeCredentials: {
  [
    id: arrayBuffer, // needs to contain decoded binary form of id
    transports: ["nfc", "usb"]
    type: "public-key"
  ]
}
```

#### Ausgabe

Gibt `appidExclude: true` aus, wenn die Erweiterung beachtet wurde, oder `appidExclude: false` andernfalls.

### `credProps`

- Nutzbar in: Registrierung ([`create()`](/de/docs/Web/API/CredentialsContainer/create))
- Verarbeitet von: Benutzeragent
- Spezifikation: [Credential Properties Extension (credProps)](https://w3c.github.io/webauthn/#sctn-authenticator-credential-properties-extension)

Erlaubt es einer vertrauenden Partei, zusätzliche Informationen/Eigenschaften über das erstellte Berechtigungsnachweis anzufordern. Dies ist derzeit nur nützlich, wenn `create()` mit `publicKey.authenticatorSelection.residentKey = "preferred"` aufgerufen wird; es fragt Informationen darüber an, ob das erstellte Berechtigungsnachweis entdeckbar ist.

#### Eingabe

Die `publicKey`-`extensions`-Eigenschaft muss eine `credProps`-Eigenschaft mit einem Wert von `true` enthalten:

```js
extensions: {
  credProps: true;
}
```

Sie müssen auch `authenticatorSelection.requireResidentKey` auf `true` setzen, was anzeigt, dass ein ansässiger Schlüssel erforderlich ist.

```js
authenticatorSelection: {
  requireResidentKey: true;
}
```

#### Ausgabe

Gibt Folgendes aus, wenn das registrierte [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential) ein clientseitig entdeckbares Berechtigungsnachweis ist:

```js
credProps: {
  rk: true;
}
```

Wenn `rk` im Ausgabeergebnis auf `false` gesetzt ist, ist das Berechtigungsnachweis ein serverseitiges Berechtigungsnachweis. Wenn `rk` nicht im Ausgabeergebnis vorhanden ist, ist nicht bekannt, ob das Berechtigungsnachweis clientseitig entdeckbar oder serverseitig ist.

### `credProtect`

- Nutzbar in: Registrierung ([`create()`](/de/docs/Web/API/CredentialsContainer/create))
- Verarbeitet von: Authentifikator
- Spezifikation: [Credential Protection (credProtect)](https://fidoalliance.org/specs/fido-v2.1-ps-20210615/fido-client-to-authenticator-protocol-v2.1-ps-20210615.html#sctn-credProtect-extension)

Erlaubt es einer vertrauenden Partei, eine minimale Schutzpolitik für Berechtigungsnachweise festzulegen, wenn ein Berechtigungsnachweis erstellt wird.

#### Eingabe

Die `publicKey`-`extensions`-Eigenschaft muss eine `credentialProtectionPolicy`-Eigenschaft enthalten, die das Schutzniveau des zu erstellenden Berechtigungsnachweises festlegt, und eine boolesche `enforceCredentialProtectionPolicy`-Eigenschaft, die angibt, ob der `create()`-Aufruf scheitern soll, anstatt ein Berechtigungsnachweis zu erstellen, das nicht der angegebenen Politik entspricht:

```js
extensions: {
  credentialProtectionPolicy: "userVerificationOptional",
  enforceCredentialProtectionPolicy: true
}
```

Die verfügbaren `credentialProtectionPolicy`-Werte sind wie folgt:

- `"userVerificationOptional"` {{Experimental_Inline}}
  - : Benutzerüberprüfung ist optional. Der äquivalente `credProtect`-Wert, der an den Authentifizierer zur Verarbeitung gesendet wird, ist `0x01`.
- `"userVerificationOptionalWithCredentialIDList"`
  - : Benutzerüberprüfung ist nur dann optional, wenn das Berechtigungsnachweis entdeckbar ist (d.h. es ist clientseitig entdeckbar). Der äquivalente `credProtect`-Wert, der an den Authentifizierer zur Verarbeitung gesendet wird, ist `0x02`.
- `"userVerificationRequired"`
  - : Benutzerüberprüfung ist immer erforderlich. Der äquivalente `credProtect`-Wert, der an den Authentifizierer zur Verarbeitung gesendet wird, ist `0x03`.

> [!NOTE]
> Chromium wird standardmäßig `userVerificationOptionalWithCredentialIDList` oder `userVerificationRequired` verwenden, je nach Art der Anfrage:
>
> - Chromium wird ein Schutzniveau von `userVerificationOptionalWithCredentialIDList` anfordern, wenn ein Berechtigungsnachweis erstellt wird, wenn `residentKey` auf `preferred` oder `required` gesetzt ist. (Das Setzen von `requireResidentKey` wird wie `required` behandelt.) Dies stellt sicher, dass allein der physische Besitz eines Sicherheitsschlüssels es nicht erlaubt, das Vorhandensein eines entdeckbaren Berechtigungsnachweises für ein gegebenes `rpId` zu überprüfen.
> - Wenn `residentKey` `required` ist und `userVerification` bevorzugt wird, wird das Schutzniveau auf `userVerificationRequired` erhöht. Dies stellt sicher, dass der physische Besitz eines Sicherheitsschlüssels es nicht erlaubt, sich bei einer Website anzumelden, die keine Benutzerüberprüfung benötigt. (Dies ist kein vollständiger Schutz; Websites sollten immer noch sorgfältig die Sicherheit ihrer Benutzer berücksichtigen.)
> - Wenn die Website ein explizites `credProtect`-Niveau anfordert, wird diese Voreinstellung überschrieben. Diese Voreinstellungen führen niemals dazu, dass das Schutzniveau niedriger ist als die Standardeinstellung des Sicherheitsschlüssels, falls diese höher ist.
>
> Wenn der Wert von `enforceCredentialProtectionPolicy` `true` ist, wird der `create()`-Aufruf scheitern, wenn die Politik nicht eingehalten werden kann (zum Beispiel, wenn eine Benutzerüberprüfung erforderlich ist, der Authentifizierer jedoch keine Benutzerüberprüfung unterstützt). Wenn es `false` ist, wird das System den besten Versuch unternehmen, ein Berechtigungsnachweis zu erstellen, das der Politik entspricht, aber es wird immer noch eines erstellen, das so nah wie möglich der Politik entspricht, wenn dies nicht möglich ist.

#### Ausgabe

Wenn der `create()`-Aufruf erfolgreich ist, werden die Authentifizierungsgerätedaten eine Darstellung des `credProtect`-Wertes enthalten, die die festgelegte Politik in folgender Form widerspiegelt:

```js
{ "credProtect": 0x01 }
```

### `largeBlob`

- Nutzbar in: Registrierung ([`create()`](/de/docs/Web/API/CredentialsContainer/create)) und Authentifizierung ([`get()`](/de/docs/Web/API/CredentialsContainer/get))
- Verarbeitet von: Benutzeragent
- Spezifikation: [Large Blob Storage Extension (largeBlob)](https://w3c.github.io/webauthn/#sctn-large-blob-extension)

Erlaubt es einer vertrauenden Partei, Blobs im Zusammenhang mit einem Berechtigungsnachweis auf dem Authentifizierungsgerät zu speichern – beispielsweise kann es direkt Zertifikate speichern, anstatt einen zentralen Authentifizierungsdienst auszuführen.

#### Eingabe

Während eines `create()`-Aufrufs muss die `publicKey`-`extensions`-Eigenschaft eine `largeBlob`-Eigenschaft mit der folgenden Objektstruktur enthalten:

```js
extensions: {
  largeBlob: {
    support: "required";
  }
}
```

Der Wert der `support`-Eigenschaft ist eine Zeichenkette, die einen der folgenden Werte haben kann:

- `"preferred"`: Das Berechtigungsnachweis wird mit einem Authentifikator erstellt, der Blobs speichern kann, wenn möglich, aber es wird immer noch eines erstellen, falls nicht. Die Ausgabeergebnis-'supported'-Eigenschaft berichtet über die Fähigkeit des Authentifikators, Blobs zu speichern.
- `"required"`: Das Berechtigungsnachweis wird mit einem Authentifikator erstellt, um Blobs zu speichern. Der `create()`-Aufruf wird fehlschlagen, wenn dies nicht möglich ist.

Während eines `get()`-Aufrufs muss die `publicKey`-`extensions`-Eigenschaft eine `largeBlob`-Eigenschaft mit einem von zwei Untereigenschaften enthalten – `read` oder `write` (`get()` schlägt fehl, wenn beide vorhanden sind):

Die `read`-Eigenschaft ist ein boolean. Ein Wert von `true` gibt an, dass die vertrauende Partei einen zuvor geschriebenen Blob im Zusammenhang mit dem bestätigten Berechtigungsnachweis abrufen möchte:

```js
extensions: {
  largeBlob: {
    read: true;
  }
}
```

Die `write`-Eigenschaft nimmt als Wert einen {{jsxref("ArrayBuffer")}}, {{jsxref("TypedArray")}} oder {{jsxref("DataView")}} an, der einen Blob darstellt, den die vertrauende Partei neben einem vorhandenen Berechtigungsnachweis speichern möchte:

```js
extensions: {
  largeBlob: {
    write: arrayBuffer;
  }
}
```

> [!NOTE]
> Damit ein Schreib-Authentifizierungsvorgang erfolgreich ist, muss `publicKey.allowCredentials` nur ein einziges Element enthalten, das das Berechtigungsnachweis darstellt, neben dem Sie den Blob speichern möchten.

#### Ausgabe

Ein erfolgreicher `create()`-Aufruf liefert die folgende Erweiterungsausgabe, wenn das registrierte Berechtigungsnachweis in der Lage ist, Blobs zu speichern:

```js
largeBlob: {
  supported: true; // false if it cannot store blobs
}
```

Ein `get()`-Lesen-Aufruf macht den Blob bei erfolgreichem Ausgang als {{jsxref("ArrayBuffer")}} in der Erweiterungsausgabe verfügbar:

```js
largeBlob: {
  blob: arrayBuffer;
}
```

> [!NOTE]
> Wenn erfolglos, wird das `largeBlob`-Objekt zurückgegeben, aber `blob` wird nicht vorhanden sein.

Ein `get()`-Schreiben-Aufruf zeigt an, ob der Schreibvorgang erfolgreich war, mit einem `written`-boolean-Wert in der Erweiterungsausgabe. Ein Wert von `true` bedeutet, dass er erfolgreich auf dem zugeordneten Authentifizierungsgerät geschrieben wurde, und `false` bedeutet, dass er erfolglos war.

```js
largeBlob: {
  written: true;
}
```

### `minPinLength`

- Nutzbar in: Registrierung ([`create()`](/de/docs/Web/API/CredentialsContainer/create))
- Verarbeitet von: Authentifizierer
- Spezifikation: [Minimum PIN Length Extension (minPinLength)](https://fidoalliance.org/specs/fido-v2.1-ps-20210615/fido-client-to-authenticator-protocol-v2.1-ps-20210615.html#sctn-minpinlength-extension)

Erlaubt vertrauenden Parteien, die minimale PIN-Länge des Authentifizierers anzufordern.

#### Eingabe

Die `publicKey`-`extensions`-Eigenschaft muss eine `minPinLength`-Eigenschaft mit dem Wert `true` enthalten:

```js
extensions: {
  minPinLength: true;
}
```

#### Ausgabe

Wenn die vertrauende Partei autorisiert ist, den `minPinLength`-Wert zu erhalten (wenn ihr `rpId` auf der autorisierten vertrauenden Parteienliste des Authentifizierers vorhanden ist), werden die Authentifizierungsgerätedaten eine Darstellung davon in der folgenden Form enthalten:

```js
{"minPinLength": uint}
```

Wenn die vertrauende Partei nicht autorisiert ist, wird die Erweiterung ignoriert und es wird kein `"minPinLength"`-Ausgabewert bereitgestellt.

### `payment`

- Nutzbar in: Registrierung ([`create()`](/de/docs/Web/API/CredentialsContainer/create))
- Verarbeitet von: Benutzeragent
- Spezifikation: [Secure Payment Confirmation](https://w3c.github.io/secure-payment-confirmation/)

Erlaubt einer vertrauenden Partei, die Erstellung eines WebAuthn-Berechtigungsnachweises anzufordern, das sowohl von der vertrauenden Partei als auch von anderen Parteien mit Secure Payment Confirmation genutzt werden kann; siehe [Using Secure Payment Confirmation](/de/docs/Web/API/Payment_Request_API/Using_secure_payment_confirmation).

#### Eingabe

Die Eingaben für die `payment`-Erweiterung sind im [AuthenticationExtensionsPaymentInputs-Wörterbuch](https://w3c.github.io/secure-payment-confirmation/#dictdef-authenticationextensionspaymentinputs) definiert:

- `isPayment`
  - : Ein boolean, der anzeigt, dass die Erweiterung aktiv ist.
- `rpID`
  - : Die [vertrauende Partei](https://w3c.github.io/webauthn/#relying-party)-ID der verwendeten Berechtigungsnachweise. Wird nur zum Zeitpunkt der Authentifizierung verwendet; nicht Registrierung.
- `topOrigin`
  - : Der Ursprung des obersten Frames. Wird nur zum Zeitpunkt der Authentifizierung verwendet; nicht Registrierung.
- `payeeName`
  - : Der, falls vorhanden, an den Benutzer angezeigte Zahlungsempfängername. Wird nur zum Zeitpunkt der Authentifizierung verwendet; nicht Registrierung.
- `payeeOrigin`
  - : Der, falls vorhanden, an den Benutzer angezeigte Zahlungsherkunftsort. Wird nur zum Zeitpunkt der Authentifizierung verwendet; nicht Registrierung.
- `total`
  - : Der, falls vorhanden, an den Benutzer angezeigte Transaktionsbetrag. Wird nur zum Zeitpunkt der Authentifizierung verwendet; nicht Registrierung. Der Gesamtbetrag ist vom Typ [PaymentCurrencyAmount](https://w3c.github.io/payment-request/#dom-paymentcurrencyamount).
- `instrument`
  - : Die, falls vorhanden, an den Benutzer angezeigten Instrumentendetails. Wird nur zum Zeitpunkt der Authentifizierung verwendet; nicht Registrierung. Das Instrument ist vom Typ [PaymentCredentialInstrument](https://w3c.github.io/secure-payment-confirmation/#dictdef-paymentcredentialinstrument).

#### Ausgabe

Keine

## Spezifikationen

Es gibt mehrere Stellen, an denen WebAuthn-Erweiterungen spezifiziert sind. IANAs [WebAuthn Extension Identifiers](https://www.iana.org/assignments/webauthn/webauthn.xhtml#webauthn-extension-ids) bietet ein Register aller Erweiterungen, jedoch sind einige möglicherweise veraltet.

{{Specifications}}

## Browser-Kompatibilität

Die Kompatibilitätsdaten für WebAuthn-Erweiterungen wurden in zwei Tabellen unterteilt — Erweiterungen, die während der Berechtigungsnachweis-Registrierung ([`create()`](/de/docs/Web/API/CredentialsContainer/create)) verwendet werden können, und Erweiterungen, die während der Authentifizierung ([`get()`](/de/docs/Web/API/CredentialsContainer/get)) verwendet werden können. Einige Erweiterungen sind während beider Vorgänge nutzbar.

{{Compat}}
