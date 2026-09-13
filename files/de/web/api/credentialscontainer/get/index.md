---
title: "CredentialsContainer: get()-Methode"
short-title: get()
slug: Web/API/CredentialsContainer/get
l10n:
  sourceCommit: 65692fd4d256d5647749b7c7005dcf53d425a533
---

{{APIRef("Credential Management API")}}{{SecureContext_Header}}

Die **`get()`**-Methode der [`CredentialsContainer`](/de/docs/Web/API/CredentialsContainer)-Schnittstelle gibt ein {{jsxref("Promise")}} zurück, das mit einem einzelnen {{Glossary("credential", "Credential")}} erfüllt wird, welches verwendet werden kann, um einen Benutzer bei einer Website zu authentifizieren.

Die Methode akzeptiert ein einzelnes optionales `options`-Argument, das Folgendes enthalten kann:

- Eine `mediation`-Eigenschaft, die angibt, wie und ob der Benutzer an der Operation beteiligt werden soll. Dies steuert beispielsweise, ob die Site einen Benutzer mit einem gespeicherten Credential stillschweigend anmelden kann.
- Eine `signal`-Eigenschaft, die ermöglicht, die Operation mit einem [`AbortController`](/de/docs/Web/API/AbortController) abzubrechen.
- Eine oder mehrere Eigenschaften — `password`, `federated`, `identity`, `otp`, `publicKey` — die die [Anforderungs-Typen des Credentials](/de/docs/Web/API/Credential_Management_API/Credential_types) angeben. Wenn gesetzt, beinhalten die Werte dieser Eigenschaften alle Parameter, die der Browser benötigt, um ein entsprechendes Credential des angeforderten Typs zu finden.

Die API wird immer mit einem einzelnen Credential oder `null` erfüllt. Falls mehrere Credentials verfügbar sind und Benutzermediation erlaubt ist, wird der Browser den Benutzer bitten, ein einzelnes Credential auszuwählen.

## Syntax

```js-nolint
get()
get(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Objekt, das Optionen für die Anfrage enthält. Es kann die folgenden Eigenschaften enthalten:
    - `mediation` {{optional_inline}}
      - : Ein String, der angibt, wie der Benutzer an das Abrufen des Credentials beteiligt ist. Der Wert kann eines der folgenden sein:
        - `"conditional"`
          - : Entdeckte Credentials werden dem Benutzer in einem nicht-modalen Dialogfeld zusammen mit einem Hinweis auf den Ursprung, der die Credentials anfordert, präsentiert. Praktisch bedeutet dies, dass verfügbare Credentials automatisch ausgefüllt werden; siehe [Autofill-Benutzeroberfläche](/de/docs/Web/API/Web_Authentication_API#autofill_ui) für weitere Details zur Nutzung.

        - `"optional"`
          - : Wenn Credentials für eine gegebene Operation ohne Benutzermediation übergeben werden können, werden sie übergeben, was eine automatische erneute Authentifizierung ohne Benutzermediation ermöglicht. Wenn Benutzermediation erforderlich ist, fragt der Benutzeragent den Benutzer zur Authentifizierung. Dieser Wert ist für Situationen gedacht, in denen Sie berechtigte Zuversicht haben, dass ein Benutzer nicht überrascht oder verwirrt sein wird, wenn er einen Anmeldedialog sieht — zum Beispiel auf einer Website, die Benutzer nicht automatisch anmeldet, wenn ein Benutzer gerade auf eine "Login/Signup"-Schaltfläche geklickt hat.

        - `"required"`
          - : Der Benutzer wird immer aufgefordert, sich zu authentifizieren. Dieser Wert ist für Situationen gedacht, in denen Sie eine Benutzer-Authentifizierung erzwingen möchten — zum Beispiel, wenn Sie möchten, dass sich ein Benutzer bei einer sensiblen Operation erneut authentifiziert (wie bei der Bestätigung einer Kreditkartenzahlung) oder beim Wechseln von Benutzern.

        - `"silent"`
          - : Der Benutzer wird nicht zur Authentifizierung aufgefordert. Der Benutzeragent wird den Benutzer automatisch erneut authentifizieren und anmelden, falls möglich. Falls eine Zustimmung erforderlich ist, wird das Versprechen mit `null` erfüllt. Dieser Wert ist für Situationen gedacht, in denen Sie einen Benutzer bei einem Besuch in einer Web-App automatisch anmelden möchten, wenn möglich. Wenn dies nicht möglich ist, sollten Sie ihn nicht mit einem verwirrenden Anmeldedialog konfrontieren, sondern vielmehr warten, bis er ausdrücklich auf eine "Login/Signup"-Schaltfläche klickt.

        Der Standardwert ist `"optional"`.

        > [!NOTE]
        > Im Fall einer Anfrage zur [föderierten Authentifizierung (FedCM-API)](/de/docs/Web/API/FedCM_API) kann ein `mediation`-Wert von `optional` oder `silent` zu einem versuchten [automatischen Re-Authentifizierung](/de/docs/Web/API/FedCM_API/RP_sign-in#auto-reauthentication) führen. Ob dies geschah, wird dem Identitätsanbieter (IdP) über den [`is_auto_selected`](/de/docs/Web/API/FedCM_API/IDP_integration#is_auto_selected)-Parameter mitgeteilt, der während der Validierung an den `id_assertion_endpoint` des IdP und über die [`IdentityCredential.isAutoSelected`](/de/docs/Web/API/IdentityCredential/isAutoSelected)-Eigenschaft an die vertrauende Partei (RP) gesendet wird. Dies ist nützlich für die Performance-Bewertung, Sicherheitsanforderungen (der IdP könnte automatische Re-Authentifizierungsanfragen ablehnen und immer eine Benutzermediation verlangen) und allgemeine Benutzererfahrung (ein IdP oder RP könnte verschiedene Benutzererfahrungen für automatische und nicht-automatische Anmeldeerfahrungen präsentieren).

    - `signal` {{optional_inline}}
      - : Eine Instanz des [`AbortSignal`](/de/docs/Web/API/AbortSignal)-Objekts, die es ermöglicht, eine laufende `get()`-Operation abzubrechen. Eine abgebrochene Operation kann normal abgeschlossen werden (im Allgemeinen, wenn der Abbruch nach Abschluss der Operation empfangen wurde) oder mit dem Grund des Signals abgelehnt werden (welches standardmäßig ein `AbortError` [`DOMException`](/de/docs/Web/API/DOMException) ist oder einen benutzerdefinierten Wert, wenn einer beim Aufruf von [`abort()`](/de/docs/Web/API/AbortController/abort) angegeben wurde).

    - `password` {{optional_inline}}
      - : Diese Option fordert den Browser auf, ein gespeichertes [Passwort](/de/docs/Web/API/Credential_Management_API/Credential_types#passwords) als ein [`PasswordCredential`](/de/docs/Web/API/PasswordCredential)-Objekt abzurufen. Es ist ein boolescher Wert.
    - `identity` {{optional_inline}}
      - : Diese Option fordert den Browser auf, ein [föderiertes Identitäts-Credential](/de/docs/Web/API/Credential_Management_API/Credential_types#federated_identity_credentials) als ein [`IdentityCredential`](/de/docs/Web/API/IdentityCredential)-Objekt unter Verwendung der [Föderierten Credential-Management-API](/de/docs/Web/API/FedCM_API) abzurufen.

        Der Wert dieser Option ist ein [`IdentityCredentialRequestOptions`](/de/docs/Web/API/IdentityCredentialRequestOptions)-Objekt, das Details zu den spezifischen Identitätsanbietern enthält, die die Website verwenden möchte.

    - `federated` {{optional_inline}}
      - : Diese Option fordert den Browser auf, ein [föderiertes Identitäts-Credential](/de/docs/Web/API/Credential_Management_API/Credential_types#federated_identity_credentials) als ein [`FederatedCredential`](/de/docs/Web/API/FederatedCredential)-Objekt abzurufen. Diese Schnittstelle ist inzwischen veraltet, und Entwickler sollten die Verwendung der `identity`-Option bevorzugen, wenn sie verfügbar ist.

        Der Wert dieser Option ist ein Objekt mit den folgenden Eigenschaften:
        - `protocols`
          - : Ein Array von Zeichenfolgen, die die Protokolle der angeforderten Credentials der föderierten Identitätsanbieter darstellen (zum Beispiel `"openidconnect"`).
        - `providers`
          - : Ein Array von Zeichenfolgen, die die föderierten Identitätsanbieter der Credentials darstellen (zum Beispiel `"https://www.facebook.com"` oder `"https://accounts.google.com"`).

    - `otp` {{optional_inline}}
      - : Diese Option fordert den Browser auf, ein [Einmalpasswort (OTP)](/de/docs/Web/API/Credential_Management_API/Credential_types#one-time_passwords) als ein [`OTPCredential`](/de/docs/Web/API/OTPCredential)-Objekt abzurufen.

        Der Wert dieser Option ist ein Array von Zeichenfolgen, das nur den Zeichenfolgenwert `"sms"` enthalten darf.

    - `publicKey` {{optional_inline}}
      - : Diese Option fordert den Browser auf, eine [Signatur-Aussage mithilfe der Web Authentication API](/de/docs/Web/API/Credential_Management_API/Credential_types#web_authentication_assertions) als ein [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential) abzurufen.

        Der Wert dieser Option ist ein [`PublicKeyCredentialRequestOptions`](/de/docs/Web/API/PublicKeyCredentialRequestOptions)-Objekt.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einer der folgenden Unterklassen von [`Credential`](/de/docs/Web/API/Credential) aufgelöst wird:

- [`PasswordCredential`](/de/docs/Web/API/PasswordCredential)
- [`IdentityCredential`](/de/docs/Web/API/IdentityCredential)
- [`FederatedCredential`](/de/docs/Web/API/FederatedCredential)
- [`OTPCredential`](/de/docs/Web/API/OTPCredential)
- [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)

Falls [konditionale Mediation](#mediation) im `get()`-Aufruf spezifiziert wurde, wird der Browser-UI-Dialog angezeigt und das Promise bleibt ausstehend, bis der Benutzer ein Konto aus verfügbaren Autofill-Vorschlägen zur Anmeldung auswählt:

- Wenn der Benutzer dann außerhalb des Browser-UI-Dialogs eine Geste macht, schließt es sich ohne das Promise aufzulösen oder abzulehnen und ohne einen für den Benutzer sichtbaren Fehler zu verursachen.
- Wenn der Benutzer ein Credential auswählt, wird das entsprechende [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential) an den Aufrufer zurückgegeben.

Wenn ein einzelnes Credential nicht eindeutig erhalten werden kann, wird das Promise mit `null` aufgelöst.

### Ausnahmen

- `AbortError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die Anfrage wurde durch einen Aufruf der [`abort()`](/de/docs/Web/API/AbortController/abort)-Methode des mit dieser Methode verbundenen [`AbortController`](/de/docs/Web/API/AbortController)-Signals abgebrochen. Beachten Sie, dass, wenn der Aufrufer von `abort()` ein `reason`-Argument bereitgestellt hat, `get()` mit dem Wert von `reason` abgelehnt wird, anstatt mit einer `AbortController`-Ausnahme.

- `TimeoutError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die Anfrage wurde automatisch aufgrund einer festgelegten Zeitüberschreitung mit [`AbortSignal.timeout()`](/de/docs/Web/API/AbortSignal/timeout_static) abgebrochen.

- [`IdentityCredentialError`](/de/docs/Web/API/IdentityCredentialError)
  - : Bei der Anfrage eines [`IdentityCredential`](/de/docs/Web/API/IdentityCredential) kann die Anfrage an den [ID Assertion Endpoint](/de/docs/Web/API/FedCM_API/IDP_integration#the_id_assertion_endpoint) die Authentifizierung nicht validieren und lehnt mit einer Fehlerrückmeldung ab, die Informationen über den Grund enthält.

- `NetworkError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Bei der Anfrage eines [`IdentityCredential`](/de/docs/Web/API/IdentityCredential) hat der {{Glossary("identity_provider", "Identitätsanbieter")}} (IdP) nicht innerhalb von 60 Sekunden geantwortet, die bereitgestellten Credentials waren nicht gültig/nicht gefunden oder der Anmeldestatus des Browsers für den IdP ist auf `"logged-out"` gesetzt (siehe [Aktualisieren des Anmeldestatuses mit der Login Status API](/de/docs/Web/API/FedCM_API/IDP_integration#update_login_status_using_the_login_status_api) für mehr Informationen über den FedCM Anmeldestatus). Im letzten Fall kann es zu einer Verzögerung bei der Ablehnung kommen, um zu vermeiden, dass der IdP-Anmeldestatus an die RP durchgesickert wird.

- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst in einer der folgenden Situationen:
    - Der Benutzer hat die Anfrage abgebrochen.

    - Die Nutzung dieser API wurde durch eine der folgenden [Berechtigungsrichtlinien](/de/docs/Web/HTTP/Guides/Permissions_Policy) blockiert:
      - {{HTTPHeader("Permissions-Policy/identity-credentials-get","identity-credentials-get")}}
      - {{HTTPHeader("Permissions-Policy/publickey-credentials-get","publickey-credentials-get")}}
      - {{HTTPHeader("Permissions-Policy/otp-credentials","otp-credentials")}}

    - Der aufrufende Ursprung ist ein [opaker Ursprung](/de/docs/Web/HTTP/Reference/Headers/Origin#null).

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die aufrufende Domain ist keine gültige Domain.

## Beispiele

### Abrufen eines föderierten Identitäts-Credentials

Vertrauensparteien können `get()` mit der `identity`-Option aufrufen, um eine Anfrage zu stellen, damit sich Benutzer bei der Vertrauenspartei über einen Identitätsanbieter (IdP) mithilfe der Identitätsföderation anmelden. Eine typische Anfrage sieht so aus:

```js
async function signIn() {
  const identityCredential = await navigator.credentials.get({
    identity: {
      providers: [
        {
          configURL: "https://accounts.idp.example/config.json",
          clientId: "********",
          params: {/* IdP-specific parameters */},
        },
      ],
    },
  });
}
```

Weitere Details zum Funktionieren finden Sie unter [Federated Credential Management (FedCM) API](/de/docs/Web/API/FedCM_API). Dieser Aufruf startet den Anmeldeablauf, der im [FedCM-Anmeldeablauf](/de/docs/Web/API/FedCM_API/RP_sign-in#fedcm_sign-in_flow) beschrieben wird.

Ein ähnlicher Aufruf, der die Erweiterungen `context` und `loginHint` umfasst, würde folgendermaßen aussehen:

```js
async function signIn() {
  const identityCredential = await navigator.credentials.get({
    identity: {
      context: "signup",
      providers: [
        {
          configURL: "https://accounts.idp.example/config.json",
          clientId: "********",
          params: {/* IdP-specific parameters */},
          loginHint: "user1@example.com",
        },
      ],
    },
  });
}
```

Wenn der IdP eine Anfrage an den [ID Assertion Endpoint](/de/docs/Web/API/FedCM_API/IDP_integration#the_id_assertion_endpoint) nicht validieren kann, wird das von `CredentialsContainer.get()` zurückgegebene Versprechen abgelehnt:

```js
async function signIn() {
  try {
    const identityCredential = await navigator.credentials.get({
      identity: {
        providers: [
          {
            configURL: "https://accounts.idp.example/config.json",
            clientId: "********",
            params: {/* IdP-specific parameters */},
          },
        ],
      },
    });
  } catch (e) {
    // Handle the error in some way, for example provide information
    // to help the user succeed in a future sign-in attempt
    console.error(e);
  }
}
```

### Abrufen eines Public Key Credentials

Der folgende Ausschnitt zeigt einen typischen Aufruf von `get()` mit der WebAuthn-Option `publicKey`:

```js
const publicKey = {
  challenge: new Uint8Array([139, 66, 181, 87, 7, 203 /* ,… */]),
  rpId: "acme.com",
  allowCredentials: [
    {
      type: "public-key",
      id: new Uint8Array([64, 66, 25, 78, 168, 226, 174 /* ,… */]),
    },
  ],
  userVerification: "required",
};

navigator.credentials.get({ publicKey });
```

Ein erfolgreicher `get()`-Aufruf gibt ein Versprechen zurück, das mit einem [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Objektinstanz aufgelöst wird, das ein zuvor über eine WebAuthn-`create()` erstelltes Public Key Credential darstellt, das nun zur Authentifizierung eines Benutzers verwendet wurde. Die [`PublicKeyCredential.response`](/de/docs/Web/API/PublicKeyCredential/response)-Eigenschaft enthält ein [`AuthenticatorAssertionResponse`](/de/docs/Web/API/AuthenticatorAssertionResponse)-Objekt, das Zugriff auf mehrere nützliche Informationen bietet, einschließlich der Authenticator-Daten, Signatur und Benutzer-Handle.

```js
navigator.credentials.get({ publicKey }).then((publicKeyCredential) => {
  const response = publicKeyCredential.response;

  // Access authenticator data ArrayBuffer
  const authenticatorData = response.authenticatorData;

  // Access client JSON
  const clientJSON = response.clientDataJSON;

  // Access signature ArrayBuffer
  const signature = response.signature;

  // Access userHandle ArrayBuffer
  const userHandle = response.userHandle;
});
```

Einige dieser Daten müssen auf dem Server gespeichert werden — zum Beispiel die `signature`, um den Nachweis zu erbringen, dass der Authenticator den echten privaten Schlüssel besitzt, der zum Erstellen des Credentials verwendet wurde, und das `userHandle`, um den Benutzer mit dem Credential, dem Anmeldeversuch und anderen Daten zu verknüpfen.

Weitere Informationen zum Ablauf der Gesamtprozesse finden Sie unter [Authentifizierung eines Benutzers](/de/docs/Web/API/Web_Authentication_API#authenticating_a_user).

### Abrufen eines Einmalpasswortes

Der untenstehende Code löst den Berechtigungsablauf des Browsers aus, wenn eine SMS-Nachricht ankommt. Wenn die Berechtigung erteilt wird, löst sich das Versprechen mit einem `OTPCredential`-Objekt auf. Der enthaltene `code`-Wert wird dann als Wert eines {{htmlelement("input")}}-Formularfelds gesetzt, das dann abgeschickt wird.

```js
navigator.credentials
  .get({
    otp: { transport: ["sms"] },
    signal: ac.signal,
  })
  .then((otp) => {
    input.value = otp.code;
    if (form) form.submit();
  })
  .catch((err) => {
    console.error(err);
  });
```

### Implementierung eines Timeouts

In diesem Beispiel verwenden wir [`AbortSignal.timeout()`](/de/docs/Web/API/AbortSignal/timeout_static), um die Anfrage automatisch abzubrechen, wenn sie länger als 10 Sekunden dauert.

```js
async function authenticateUser() {
  const publicKey = {
    challenge: new Uint8Array([139, 66, 181, 87, 7, 203 /* ,… */]),
    rpId: "acme.com",
    allowCredentials: [
      {
        type: "public-key",
        id: new Uint8Array([64, 66, 25, 78, 168, 226, 174 /* ,… */]),
      },
    ],
    userVerification: "required",
  };

  try {
    const credential = await navigator.credentials.get({
      publicKey,
      signal: AbortSignal.timeout(10000), // Abort after 10 seconds
    });
    console.log("Authentication successful:", credential);
  } catch (err) {
    if (err.name === "TimeoutError") {
      console.error("The authentication request timed out.");
    } else if (err.name === "AbortError") {
      console.log("The request was canceled by the user.");
    } else {
      console.error("An unexpected error occurred:", err);
    }
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
