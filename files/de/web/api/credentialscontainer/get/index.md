---
title: "CredentialsContainer: get() Methode"
short-title: get()
slug: Web/API/CredentialsContainer/get
l10n:
  sourceCommit: 619530807f05334b2dd66088cf9e1f22a23a8c20
---

{{APIRef("Credential Management API")}}{{SecureContext_Header}}

Die **`get()`**-Methode des [`CredentialsContainer`](/de/docs/Web/API/CredentialsContainer)-Interfaces gibt ein {{jsxref("Promise")}} zurück, das mit einem einzelnen {{Glossary("credential", "Credential")}} erfüllt wird, das dann verwendet werden kann, um einen Benutzer bei einer Website zu authentifizieren.

Die Methode akzeptiert ein einzelnes optionales `options`-Argument, das Folgendes enthalten kann:

- Eine `mediation`-Eigenschaft, die angibt, wie und ob der Benutzer gebeten werden soll, an der Operation teilzunehmen.
  Dies steuert beispielsweise, ob die Website einen Benutzer mithilfe eines gespeicherten Credentials unbemerkt anmelden kann.
- Eine `signal`-Eigenschaft, die es ermöglicht, die Operation mithilfe eines [`AbortController`](/de/docs/Web/API/AbortController) abzubrechen.
- Eine oder mehrere Eigenschaften — `password`, `federated`, `identity`, `otp`, `publicKey` — die die [Arten von Credentials](/de/docs/Web/API/Credential_Management_API/Credential_types) angeben, die angefordert werden. Wenn gesetzt, umfassen die Werte dieser Eigenschaften alle Parameter, die der Browser benötigt, um ein geeignetes Credential des angeforderten Typs zu finden.

Die API wird immer mit einem einzelnen Credential oder `null` erfüllt. Wenn mehrere Credentials verfügbar sind und Benutzermediation erlaubt ist, wird der Browser den Benutzer bitten, ein einzelnes Credential auszuwählen.

## Syntax

```js-nolint
get()
get(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Objekt, das Optionen für die Anfrage enthält. Es kann die folgenden Eigenschaften enthalten:
    - `mediation` {{optional_inline}}
      - : Ein String, der angibt, ob der Benutzer bei jedem Besuch einer Client-App zur Anmeldung aufgefordert wird. Der Wert kann einer der folgenden sein:
        - `"conditional"`
          - : Entdeckte Credentials werden dem Benutzer in einem nicht-modalen Dialogfeld zusammen mit einem Hinweis auf die anfragende Herkunft angezeigt. Praktisch bedeutet dies das automatische Ausfüllen verfügbarer Credentials; siehe [Anmelden mit einem Passkey durch Formular-Autofill](https://web.dev/articles/passkey-form-autofill) für weitere Einzelheiten zu dessen Verwendung; [`PublicKeyCredential.isConditionalMediationAvailable()`](/de/docs/Web/API/PublicKeyCredential/isConditionalMediationAvailable_static) bietet ebenfalls nützliche Informationen.

        - `"optional"`
          - : Wenn Credentials ohne Benutzermediation für eine gegebene Operation übergeben werden können, geschieht dies, was eine automatische erneute Authentifizierung ohne Benutzermediation ermöglicht. Wenn Benutzermediation erforderlich ist, wird der Benutzeragent den Benutzer bitten, sich zu authentifizieren. Dieser Wert ist für Situationen gedacht, in denen Sie berechtigten Anlass zur Annahme haben, dass ein Benutzer nicht überrascht oder verwirrt sein wird, wenn er ein Anmelde-Dialogfeld sieht — zum Beispiel auf einer Seite, die Benutzer nicht automatisch anmeldet, wenn ein Benutzer gerade auf einen "Login/Signup"-Button geklickt hat.

        - `"required"`
          - : Der Benutzer wird immer aufgefordert, sich zu authentifizieren. Dieser Wert ist für Situationen gedacht, in denen Sie eine Benutzerauthentifizierung erzwingen möchten — zum Beispiel wenn Sie möchten, dass ein Benutzer sich erneut authentifiziert, wenn eine sensible Operation durchgeführt wird (wie die Bestätigung einer Kreditkartenzahlung) oder beim Wechseln von Benutzern.

        - `"silent"`
          - : Der Benutzer wird nicht aufgefordert, sich zu authentifizieren. Der Benutzeragent wird den Benutzer automatisch erneut authentifizieren und ihn anmelden, falls möglich. Wenn eine Zustimmung erforderlich ist, wird das Promise mit `null` erfüllt. Dieser Wert ist für Situationen gedacht, in denen Sie einen Benutzer bei einem Besuch in einer Web-App automatisch anmelden möchten, falls möglich, aber wenn nicht, möchten Sie ihnen kein verwirrendes Anmelde-Dialog anzeigen. Stattdessen möchten Sie, dass sie ausdrücklich auf einen "Login/Signup"-Button klicken.

        Der Standardwert ist `"optional"`.

        > [!NOTE]
        > Im Falle einer Anfrage zur [föderierten Authentifizierung (FedCM API)](/de/docs/Web/API/FedCM_API) kann ein `mediation`-Wert von `optional` oder `silent` zu einem Versuch der [automatischen erneuten Authentifizierung](/de/docs/Web/API/FedCM_API/RP_sign-in#auto-reauthentication) führen. Ob dies geschehen ist, wird dem Identitätsanbieter (IdP) über den Parameter [`is_auto_selected`](/de/docs/Web/API/FedCM_API/IDP_integration#is_auto_selected) mitgeteilt, der während der Validierung an den `id_assertion_endpoint` des IdP gesendet wird, und der vertrauenden Partei (RP) über die Eigenschaft [`IdentityCredential.isAutoSelected`](/de/docs/Web/API/IdentityCredential/isAutoSelected). Dies ist nützlich für Leistungsbewertung, Sicherheitsanforderungen (der IdP möchte möglicherweise automatische Authentifizierungsanfragen ablehnen und immer Benutzermediation verlangen), und allgemeine UX (ein IdP oder RP möchte möglicherweise eine andere UX für automatische und nicht-automatische Anmeldeerfahrungen präsentieren).

    - `signal` {{optional_inline}}
      - : Eine Instanz eines [`AbortSignal`](/de/docs/Web/API/AbortSignal)-Objekts, die es ermöglicht, eine laufende `get()`-Operation abzubrechen. Eine abgebrochene Operation kann normal abgeschlossen werden (in der Regel, wenn der Abbruch nach dem Abschluss der Operation empfangen wurde) oder mit dem Grund des Signals zurückgewiesen werden (was standardmäßig ein `AbortError` [`DOMException`](/de/docs/Web/API/DOMException) ist oder ein benutzerdefinierter Wert, wenn einer beim Aufruf von [`abort()`](/de/docs/Web/API/AbortController/abort) angegeben wurde).

    - `password` {{optional_inline}}
      - : Diese Option fordert den Browser auf, ein gespeichertes [Passwort](/de/docs/Web/API/Credential_Management_API/Credential_types#passwords) als ein [`PasswordCredential`](/de/docs/Web/API/PasswordCredential)-Objekt abzurufen. Es ist ein boolescher Wert.
    - `identity` {{optional_inline}}
      - : Diese Option fordert den Browser auf, ein [föderiertes Identitäts-Credential](/de/docs/Web/API/Credential_Management_API/Credential_types#federated_identity_credentials) als ein [`IdentityCredential`](/de/docs/Web/API/IdentityCredential)-Objekt abzurufen, unter Verwendung der [Föderierten Credential-Management-API](/de/docs/Web/API/FedCM_API).

        Der Wert dieser Option ist ein [`IdentityCredentialRequestOptions`](/de/docs/Web/API/IdentityCredentialRequestOptions)-Objekt, das Details zu den spezifischen Identitätsanbietern enthält, die die Website verwenden möchte.

    - `federated` {{optional_inline}}
      - : Diese Option fordert den Browser auf, ein [föderiertes Identitäts-Credential](/de/docs/Web/API/Credential_Management_API/Credential_types#federated_identity_credentials) als ein [`FederatedCredential`](/de/docs/Web/API/FederatedCredential)-Objekt abzurufen. Dieses Interface ist inzwischen veraltet, und Entwickler sollten die `identity`-Option bevorzugen, falls verfügbar.

        Der Wert dieser Option ist ein Objekt mit folgenden Eigenschaften:
        - `protocols`
          - : Ein Array von Strings, die die Protokolle der gemeinsam genutzten föderierten Identitätsanbieter der angeforderten Credentials darstellen (zum Beispiel `"openidconnect"`).
        - `providers`
          - : Ein Array von Strings, die die föderierten Identitätsanbieter der Credentials darstellen (zum Beispiel `"https://www.facebook.com"` oder `"https://accounts.google.com"`).

    - `otp` {{optional_inline}}
      - : Diese Option fordert den Browser auf, ein [Einmalpasswort (OTP)](/de/docs/Web/API/Credential_Management_API/Credential_types#one-time_passwords) als ein [`OTPCredential`](/de/docs/Web/API/OTPCredential)-Objekt abzurufen.

        Der Wert dieser Option ist ein Array von Strings, das nur den String-Wert `"sms"` enthalten darf.

    - `publicKey` {{optional_inline}}
      - : Diese Option fordert den Browser auf, eine [mit der Web Authentication API signierte Assertion](/de/docs/Web/API/Credential_Management_API/Credential_types#web_authentication_assertions) als ein [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential) abzurufen.

        Der Wert dieser Option ist ein [`PublicKeyCredentialRequestOptions`](/de/docs/Web/API/PublicKeyCredentialRequestOptions)-Objekt.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einer der folgenden Unterklassen von [`Credential`](/de/docs/Web/API/Credential) aufgelöst wird:

- [`PasswordCredential`](/de/docs/Web/API/PasswordCredential)
- [`IdentityCredential`](/de/docs/Web/API/IdentityCredential)
- [`FederatedCredential`](/de/docs/Web/API/FederatedCredential)
- [`OTPCredential`](/de/docs/Web/API/OTPCredential)
- [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)

Wenn [konditionale Mediation](#mediation) im `get()`-Aufruf angegeben wurde, wird der Browser-UI-Dialog angezeigt und das Promise bleibt ausstehend, bis der Benutzer ein Konto zum Anmelden aus den verfügbaren Autofill-Vorschlägen auswählt:

- Falls der Benutzer dann eine Geste außerhalb des Browser-UI-Dialogs macht, schließt es ohne Hinweise auf eine von Benutzer sichtbare Fehlerbedingung oder das Promise ohne Auflösung oder Ablehnung.
- Wenn der Benutzer ein Credential auswählt, wird das relevante [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential) dem Aufrufer zurückgegeben.

Wenn ein einzelnes Credential nicht eindeutig erhalten werden kann, wird das Promise mit `null` aufgelöst.

### Ausnahmen

- `AbortError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die Anfrage wurde durch einen Aufruf der [`abort()`](/de/docs/Web/API/AbortController/abort)-Methode des [`AbortController`](/de/docs/Web/API/AbortController) abgebrochen, der mit der `signal`-Option dieser Methode verknüpft ist.
    Beachten Sie, dass wenn der Aufrufer von `abort()` ein `reason`-Argument angegeben hat, `get()` mit dem Wert von `reason`, anstelle einer `AbortController`-Ausnahme, abgelehnt wird.

- `TimeoutError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die Anfrage wurde automatisch aufgrund eines Zeitlimits abgebrochen, das mit [`AbortSignal.timeout()`](/de/docs/Web/API/AbortSignal/timeout_static) festgelegt wurde.

- [`IdentityCredentialError`](/de/docs/Web/API/IdentityCredentialError)
  - : Wenn ein [`IdentityCredential`](/de/docs/Web/API/IdentityCredential) angefordert wird, kann die Anfrage an den [ID Assertion Endpoint](/de/docs/Web/API/FedCM_API/IDP_integration#the_id_assertion_endpoint) die Authentifizierung nicht validieren und lehnt mit einer Fehlerantwort ab, die Informationen über den Grund enthält.

- `NetworkError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wenn ein [`IdentityCredential`](/de/docs/Web/API/IdentityCredential) angefordert wird, hat der {{Glossary("identity_provider", "Identitätsanbieter")}} (IdP) nicht innerhalb von 60 Sekunden geantwortet, die bereitgestellten Credentials waren nicht gültig/gefunden, oder der Login-Status des Browsers für den IdP ist auf `"logged-out"` gesetzt (siehe [Login-Status mit der Login-Status-API aktualisieren](/de/docs/Web/API/FedCM_API/IDP_integration#update_login_status_using_the_login_status_api) für weitere Informationen über den FedCM-Login-Status). Im letzteren Fall kann es zu einer Verzögerung bei der Ablehnung kommen, um zu vermeiden, den Login-Status des IdP an die RP preiszugeben.

- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird in einer der folgenden Situationen ausgelöst:
    - Der Benutzer hat die Anfrage abgebrochen.

    - Die Verwendung dieser API wurde von einer der folgenden [Permissions Policies](/de/docs/Web/HTTP/Guides/Permissions_Policy) blockiert:
      - {{HTTPHeader("Permissions-Policy/identity-credentials-get","identity-credentials-get")}}
      - {{HTTPHeader("Permissions-Policy/publickey-credentials-get","publickey-credentials-get")}}
      - {{HTTPHeader("Permissions-Policy/otp-credentials","otp-credentials")}}

    - Der aufrufende Ursprung ist ein [intransparenter Ursprung](/de/docs/Web/HTTP/Reference/Headers/Origin#null).

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die aufrufende Domäne ist keine gültige Domäne.

## Beispiele

### Abrufen eines föderierten Identitäts-Credentials

Vertrauensparteien können `get()` mit der `identity`-Option aufrufen, um eine Anfrage zu stellen, dass sich Benutzer über einen Identitätsanbieter (IdP) mithilfe der Identitätsföderation bei der Vertrauenspartei anmelden. Eine typische Anfrage sieht folgendermaßen aus:

```js
async function signIn() {
  const identityCredential = await navigator.credentials.get({
    identity: {
      providers: [
        {
          configURL: "https://accounts.idp.example/config.json",
          clientId: "********",
          params: {
            /* IdP-specific parameters */
          },
        },
      ],
    },
  });
}
```

Lesen Sie den [Federated Credential Management (FedCM) API](/de/docs/Web/API/FedCM_API) für weitere Einzelheiten darüber, wie dies funktioniert. Dieser Aufruf wird den in [FedCM-Anmeldefluss](/de/docs/Web/API/FedCM_API/RP_sign-in#fedcm_sign-in_flow) beschriebenen Anmeldefluss starten.

Ein ähnlicher Aufruf, der die `context`- und `loginHint`-Erweiterungen einbezieht, würde wie folgt aussehen:

```js
async function signIn() {
  const identityCredential = await navigator.credentials.get({
    identity: {
      context: "signup",
      providers: [
        {
          configURL: "https://accounts.idp.example/config.json",
          clientId: "********",
          params: {
            /* IdP-specific parameters */
          },
          loginHint: "user1@example.com",
        },
      ],
    },
  });
}
```

Wenn der IdP eine Anfrage an den [ID Assertion Endpoint](/de/docs/Web/API/FedCM_API/IDP_integration#the_id_assertion_endpoint) nicht validieren kann, wird das Promise, das von `CredentialsContainer.get()` zurückgegeben wird, abgelehnt:

```js
async function signIn() {
  try {
    const identityCredential = await navigator.credentials.get({
      identity: {
        providers: [
          {
            configURL: "https://accounts.idp.example/config.json",
            clientId: "********",
            params: {
              /* IdP-specific parameters */
            },
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

### Abrufen eines öffentlichen Schlüssel-Credentials

Das folgende Beispiel zeigt einen typischen `get()`-Aufruf mit der WebAuthn-`publicKey`-Option:

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

Ein erfolgreicher `get()`-Aufruf gibt ein Promise zurück, das mit einem [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Objekt instanziiert wird, das ein öffentliches Schlüssel-Credential darstellt, das zuvor über eine WebAuthn-[`create()`](/de/docs/Web/API/CredentialsContainer/create) erstellt wurde und jetzt zur Authentifizierung eines Benutzers verwendet wurde. Seine [`PublicKeyCredential.response`](/de/docs/Web/API/PublicKeyCredential/response)-Eigenschaft enthält ein [`AuthenticatorAssertionResponse`](/de/docs/Web/API/AuthenticatorAssertionResponse)-Objekt, das Zugriff auf mehrere nützliche Informationen wie Authenticator-Daten, Signatur und Benutzer-Handle bietet.

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

Einige dieser Daten müssen auf dem Server gespeichert werden — beispielsweise die `signature`, um den Nachweis zu erbringen, dass der Authenticator den echten privaten Schlüssel besitzt, der zur Erstellung des Credentials verwendet wurde, und der `userHandle`, um den Benutzer mit dem Credential, dem Anmeldeversuch und anderen Daten zu verknüpfen.

Siehe [Authentifizierung eines Benutzers](/de/docs/Web/API/Web_Authentication_API#authenticating_a_user) für weitere Informationen darüber, wie der gesamte Ablauf funktioniert.

### Abrufen eines Einmalpassworts

Der folgende Code löst den Berechtigungsablauf des Browsers aus, wenn eine SMS-Nachricht eintrifft. Wenn die Erlaubnis erteilt wird, wird das Promise mit einem `OTPCredential`-Objekt erfüllt. Der enthaltene `code`-Wert wird dann als Wert eines {{htmlelement("input")}}-Formular-Elements festgelegt, das dann übermittelt wird.

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

### Implementierung eines Zeitlimits

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
      console.log("The request was cancelled by the user.");
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
