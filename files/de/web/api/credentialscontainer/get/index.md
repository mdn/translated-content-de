---
title: "CredentialsContainer: get()-Methode"
short-title: get()
slug: Web/API/CredentialsContainer/get
l10n:
  sourceCommit: dcbb1d99185118360cc84b3a0e935e77fe0a03e3
---

{{APIRef("Credential Management API")}}{{SecureContext_Header}}

Die **`get()`**-Methode des [`CredentialsContainer`](/de/docs/Web/API/CredentialsContainer)-Interfaces gibt ein {{jsxref("Promise")}} zurück, das mit einem einzelnen [Credential](/de/docs/Glossary/credential) erfüllt wird, welches dann verwendet werden kann, um einen Benutzer bei einer Website zu authentifizieren.

Die Methode akzeptiert ein einzelnes optionales `options`-Argument, das Folgendes enthalten kann:

- Eine `mediation`-Eigenschaft, die angibt, wie und ob der Benutzer aufgefordert werden soll, an der Operation teilzunehmen.
  Dies steuert beispielsweise, ob die Seite einen Benutzer stillschweigend mit einem gespeicherten Anmeldedaten einloggen kann.
- Eine `signal`-Eigenschaft, die es ermöglicht, die Operation mit einem [`AbortController`](/de/docs/Web/API/AbortController) abzubrechen.
- Eine oder mehrere Eigenschaften — `password`, `federated`, `identity`, `otp`, `publicKey` — die die [Arten von Anmeldedaten](/de/docs/Web/API/Credential_Management_API/Credential_types) angeben, die angefordert werden. Wenn gesetzt, beinhalten die Werte dieser Eigenschaften alle Parameter, die der Browser benötigt, um eine passende Anmeldedaten des angeforderten Typs zu finden.

Die API wird immer mit einem einzelnen Anmeldedaten oder `null` erfüllt. Wenn mehrere Anmeldedaten verfügbar sind und Benutzerbeteiligung erlaubt ist, wird der Browser den Benutzer bitten, ein einzelnes Anmeldedaten auszuwählen.

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

        - `"conditional"`: Entdeckte Anmeldedaten werden dem Benutzer in einem nicht-modalen Dialogfeld präsentiert, zusammen mit einem Hinweis auf den Ursprung der Anfrage. In der Praxis bedeutet dies das automatische Ausfüllen verfügbarer Anmeldedaten; siehe [Anmelden mit einem Passkey über Formular-Autofill](https://web.dev/articles/passkey-form-autofill) für weitere Details, wie dies verwendet wird; [`PublicKeyCredential.isConditionalMediationAvailable()`](/de/docs/Web/API/PublicKeyCredential/isConditionalMediationAvailable_static) bietet ebenfalls einige nützliche Informationen.

        - `"optional"`: Wenn Anmeldedaten für eine gegebene Operation ohne Benutzerbeteiligung übergeben werden können, werden sie es, wodurch eine automatische Reauthentifizierung ohne Benutzerbeteiligung ermöglicht wird. Wenn Benutzerbeteiligung erforderlich ist, wird der Benutzeragent den Benutzer zur Authentifizierung auffordern. Dieser Wert ist für Situationen gedacht, in denen Sie mit angemessener Sicherheit davon ausgehen können, dass ein Benutzer nicht überrascht oder verwirrt sein wird, ein Anmeldedialogfeld zu sehen — zum Beispiel auf einer Seite, die Benutzer nicht automatisch einloggt, wenn ein Benutzer gerade auf eine "Anmelden/Registrieren"-Schaltfläche geklickt hat.

        - `"required"`: Der Benutzer wird immer zur Authentifizierung aufgefordert, auch wenn das Verhindern von stillem Zugriff (siehe [`CredentialsContainer.preventSilentAccess()`](/de/docs/Web/API/CredentialsContainer/preventSilentAccess)) auf `false` gesetzt ist. Dieser Wert ist für Situationen gedacht, in denen Sie eine Benutzer-Authentifizierung erzwingen möchten — zum Beispiel, wenn Sie möchten, dass ein Benutzer sich bei einer sensiblen Operation (wie der Bestätigung einer Kreditkartenzahlung) oder beim Wechseln von Benutzern erneut authentifiziert.

        - `"silent"`: Der Benutzer wird nicht zur Authentifizierung aufgefordert. Der Benutzeragent wird den Benutzer automatisch erneut authentifizieren und einloggen, wenn möglich. Wenn eine Zustimmung erforderlich ist, wird die Promise mit `null` erfüllt. Dieser Wert ist für Situationen gedacht, in denen Sie einen Benutzer beim Besuch einer Web-App automatisch einloggen möchten, wenn möglich, aber wenn nicht, möchten Sie ihm kein verwirrendes Anmeldedialogfeld präsentieren. Stattdessen möchten Sie warten, bis er explizit auf eine "Anmelden/Registrieren"-Schaltfläche klickt.

        Der Standardwert ist `"optional"`.

        > [!NOTE]
        > Im Falle einer [föderierten Authentifizierungsanfrage (FedCM API)](/de/docs/Web/API/FedCM_API) kann ein `mediation`-Wert von `optional` oder `silent` zu einem Versuch der [automatischen Reauthentifizierung](/de/docs/Web/API/FedCM_API/RP_sign-in#auto-reauthentication) führen. Ob dies erfolgt ist, wird dem Identitätsanbieter (IdP) über den [`is_auto_selected`](/de/docs/Web/API/FedCM_API/IDP_integration#is_auto_selected)-Parameter, der an den `id_assertion_endpoint` des IdP während der Validierung gesendet wird und der auf den [`IdentityCredential.isAutoSelected`](/de/docs/Web/API/IdentityCredential/isAutoSelected)-Eigenschaft des relying party (RP) kommuniziert. Dies ist nützlich für die Leistungsevaluation, Sicherheitsanforderungen (der IdP möchte möglicherweise automatische Reauthentifizierungsanfragen ablehnen und immer Benutzerbeteiligung verlangen) und allgemeine Benutzererfahrung (ein IdP oder RP möchte möglicherweise unterschiedliche Benutzererfahrungen für automatische und nicht-automatische Anmeldung bieten).

    - `signal` {{optional_inline}}

      - : Eine [`AbortSignal`](/de/docs/Web/API/AbortSignal)-Objektinstanz, die es ermöglicht, eine laufende `get()`-Operation abzubrechen. Eine abgebrochene Operation kann normal abgeschlossen werden (im Allgemeinen, wenn der Abbruch nach Abschluss der Operation empfangen wurde) oder mit einem `AbortError` [`DOMException`](/de/docs/Web/API/DOMException) abgelehnt werden.

    - `password` {{optional_inline}}
      - : Diese Option fordert den Browser auf, ein gespeichertes [Passwort](/de/docs/Web/API/Credential_Management_API/Credential_types#passwords) als [`PasswordCredential`](/de/docs/Web/API/PasswordCredential)-Objekt abzurufen. Es ist ein boolescher Wert.
    - `identity` {{optional_inline}}

      - : Diese Option fordert den Browser auf, ein [föderiertes Identitätsanmeldediel](/de/docs/Web/API/Credential_Management_API/Credential_types#federated_identity_credentials) als ein [`IdentityCredential`](/de/docs/Web/API/IdentityCredential)-Objekt mit Hilfe der [Föderierten Anmeldemanagement API](/de/docs/Web/API/FedCM_API) abzurufen.

        Der Wert dieser Option ist ein [`IdentityCredentialRequestOptions`](/de/docs/Web/API/IdentityCredentialRequestOptions)-Objekt, das Details der spezifischen Identitätsanbieter enthält, die die Website verwenden möchte.

    - `federated` {{optional_inline}}

      - : Diese Option fordert den Browser auf, ein [föderiertes Identitätsanmeldedaten](/de/docs/Web/API/Credential_Management_API/Credential_types#federated_identity_credentials) als ein [`FederatedCredential`](/de/docs/Web/API/FederatedCredential)-Objekt abzurufen. Dieses Interface ist nun veraltet, und Entwickler sollten bevorzugt die `identity`-Option verwenden, wenn sie verfügbar ist.

        Der Wert dieser Option ist ein Objekt mit den folgenden Eigenschaften:

        - `protocols`
          - : Ein Array von Strings, die die Protokolle der angeforderten Anmeldedaten der föderierten Identitätsanbieter darstellen (zum Beispiel `"openidconnect"`).
        - `providers`
          - : Ein Array von Strings, das die föderierten Identitätsanbieter der Anmeldedaten repräsentiert (zum Beispiel `"https://www.facebook.com"` oder `"https://accounts.google.com"`).

    - `otp` {{optional_inline}}

      - : Diese Option fordert den Browser auf, ein [Einmal-Passwort (OTP)](/de/docs/Web/API/Credential_Management_API/Credential_types#one-time_passwords) als ein [`OTPCredential`](/de/docs/Web/API/OTPCredential)-Objekt abzurufen.

        Der Wert dieser Option ist ein Array von Strings, das nur den String-Wert `"sms"` enthalten kann.

    - `publicKey` {{optional_inline}}

      - : Diese Option fordert den Browser auf, eine [Web-Authentifizierung-Assertion](/de/docs/Web/API/Credential_Management_API/Credential_types#web_authentication_assertions) als ein [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential) abzurufen.

        Der Wert dieser Option ist ein [`PublicKeyCredentialRequestOptions`](/de/docs/Web/API/PublicKeyCredentialRequestOptions)-Objekt.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einer der folgenden Unterklassen von [`Credential`](/de/docs/Web/API/Credential) aufgelöst wird:

- [`PasswordCredential`](/de/docs/Web/API/PasswordCredential)
- [`IdentityCredential`](/de/docs/Web/API/IdentityCredential)
- [`FederatedCredential`](/de/docs/Web/API/FederatedCredential)
- [`OTPCredential`](/de/docs/Web/API/OTPCredential)
- [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)

Wenn ein einzelnes Anmeldedaten nicht eindeutig erhalten werden kann, wird die Promise mit `null` aufgelöst.

### Ausnahmen

- `AbortError` [`DOMException`](/de/docs/Web/API/DOMException)

  - : Die Anfrage wurde durch einen Aufruf der [`abort()`](/de/docs/Web/API/AbortController/abort)-Methode des mit der `signal`](#signal)-Option dieser Methode verbundenen [`AbortController`](/de/docs/Web/API/AbortController) abgebrochen.

- `IdentityCredentialError` [`DOMException`](/de/docs/Web/API/DOMException)

  - : Bei einer Anfrage nach einem [`IdentityCredential`](/de/docs/Web/API/IdentityCredential) ist die Anfrage an den [ID Assertion Endpoint](/de/docs/Web/API/FedCM_API/IDP_integration#the_id_assertion_endpoint) nicht in der Lage, die Authentifizierung zu validieren, und lehnt mit einer Fehlermeldung ab, die Informationen über den Grund enthält.

- `NetworkError` [`DOMException`](/de/docs/Web/API/DOMException)

  - : Bei einer Anfrage nach einem [`IdentityCredential`](/de/docs/Web/API/IdentityCredential) hat der [Identitätsanbieter](/de/docs/Glossary/identity_provider) (IdP) nicht innerhalb von 60 Sekunden geantwortet, die bereitgestellten Anmeldedaten waren ungültig/nicht gefunden oder der Login-Status des Browsers für den IdP ist auf `"logged-out"` gesetzt (siehe [Aktualisierung des Login-Status mithilfe der Login-Status-API](/de/docs/Web/API/FedCM_API/IDP_integration#update_login_status_using_the_login_status_api) für weitere Informationen zum FedCM-Login-Status). Im letzteren Fall kann es zu einer Verzögerung bei der Ablehnung kommen, um zu vermeiden, dass der IdP-Login-Status an die RP weitergegeben wird.

- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)

  - : Wird in einer der folgenden Situationen ausgelöst:

    - Die Nutzung dieser API wurde durch eine der folgenden [Berechtigungsrichtlinien](/de/docs/Web/HTTP/Permissions_Policy) blockiert:

      - {{HTTPHeader("Permissions-Policy/identity-credentials-get","identity-credentials-get")}}
      - {{HTTPHeader("Permissions-Policy/publickey-credentials-get","publickey-credentials-get")}}
      - {{HTTPHeader("Permissions-Policy/otp-credentials","otp-credentials")}}

    - Der aufrufende Ursprung ist ein [undurchsichtiger Ursprung](/de/docs/Web/HTTP/Headers/Origin#null).

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)

  - : Die aufrufende Domain ist keine gültige Domain.

## Beispiele

### Abrufen eines föderierten Identitätsanmeldedaten

Relying Parties können `get()` mit der `identity`-Option aufrufen, um eine Anfrage zu stellen, damit sich die Benutzer über einen Identitätsanbieter (IdP) mithilfe der Identitätsföderation bei der Relying Party anmelden. Eine typische Anfrage könnte so aussehen:

```js
async function signIn() {
  const identityCredential = await navigator.credentials.get({
    identity: {
      providers: [
        {
          configURL: "https://accounts.idp.example/config.json",
          clientId: "********",
          nonce: "******",
        },
      ],
    },
  });
}
```

Schauen Sie sich den [Föderierten Anmeldungsmanagement (FedCM) API](/de/docs/Web/API/FedCM_API) für weitere Details an, wie dies funktioniert. Dieser Aufruf wird den Anmeldefluss starten, der im [FedCM-Anmeldefluss](/de/docs/Web/API/FedCM_API/RP_sign-in#fedcm_sign-in_flow) beschrieben wird.

Ein ähnlicher Aufruf, der die `context`- und `loginHint`-Erweiterungen beinhaltet, würde so aussehen:

```js
async function signIn() {
  const identityCredential = await navigator.credentials.get({
    identity: {
      context: "signup",
      providers: [
        {
          configURL: "https://accounts.idp.example/config.json",
          clientId: "********",
          nonce: "******",
          loginHint: "user1@example.com",
        },
      ],
    },
  });
}
```

Wenn der IdP nicht in der Lage ist, eine Anfrage an den [ID Assertion Endpoint](/de/docs/Web/API/FedCM_API/IDP_integration#the_id_assertion_endpoint) zu validieren, wird er die Promise ablehnen, die von `CredentialsContainer.get()` zurückgegeben wird:

```js
async function signIn() {
  try {
    const identityCredential = await navigator.credentials.get({
      identity: {
        providers: [
          {
            configURL: "https://accounts.idp.example/config.json",
            clientId: "********",
            nonce: "******",
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

### Abrufen eines Public-Key-Anmeldedaten

Das folgende Snippet zeigt einen typischen `get()`-Aufruf mit der WebAuthn-`publicKey`-Option:

```js
const publicKey = {
  challenge: new Uint8Array([139, 66, 181, 87, 7, 203, ...]),
  rpId: "acme.com",
  allowCredentials: [{
    type: "public-key",
    id: new Uint8Array([64, 66, 25, 78, 168, 226, 174, ...])
  }],
  userVerification: "required",
}

navigator.credentials.get({ publicKey })
```

Ein erfolgreicher `get()`-Aufruf gibt eine Promise zurück, die mit einem [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Objektinstanz aufgelöst wird, das ein zuvor über einen WebAuthn-`create()`](/de/docs/Web/API/CredentialsContainer/create) erstelltes Public-Key-Anmeldedaten darstellt, das nun zur Authentifizierung eines Benutzers verwendet wurde. Seine [`PublicKeyCredential.response`](/de/docs/Web/API/PublicKeyCredential/response)-Eigenschaft enthält ein [`AuthenticatorAssertionResponse`](/de/docs/Web/API/AuthenticatorAssertionResponse)-Objekt, das Zugriff auf mehrere nützliche Informationen bietet, einschließlich der Authentifikator-Daten, der Signatur und des Benutzer-Handles.

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

Ein Teil dieser Daten muss auf dem Server gespeichert werden — beispielsweise die `signature`, um den Beweis zu erbringen, dass der Authentifikator den echten privaten Schlüssel besitzt, der zur Erstellung des Anmeldedaten verwendet wurde, und der `userHandle`, um den Benutzer mit den Anmeldedaten, dem Anmeldeversuch und anderen Daten zu verknüpfen.

Siehe [Authentifizierung eines Benutzers](/de/docs/Web/API/Web_Authentication_API#authenticating_a_user) für weitere Informationen darüber, wie der Gesamtprozess funktioniert.

### Abrufen eines Einmal-Passworts

Der folgende Code löst den Berechtigungsfluss des Browsers aus, wenn eine SMS-Nachricht eintrifft. Wenn die Berechtigung gewährt wird, dann wird die Promise mit einem `OTPCredential`-Objekt erfüllt. Der enthaltene `code`-Wert wird dann als Wert eines {{htmlelement("input")}}-Formularelements gesetzt, das dann übermittelt wird.

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

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
