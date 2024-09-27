---
title: "CredentialsContainer: get() Methode"
short-title: get()
slug: Web/API/CredentialsContainer/get
l10n:
  sourceCommit: dcbb1d99185118360cc84b3a0e935e77fe0a03e3
---

{{APIRef("Credential Management API")}}{{SecureContext_Header}}

Die **`get()`** Methode des [`CredentialsContainer`](/de/docs/Web/API/CredentialsContainer) Interfaces gibt ein {{jsxref("Promise")}} zurück, das mit einem einzelnen [Anmeldedaten](/de/docs/Glossary/credential) erfüllt wird, der dann verwendet werden kann, um einen Benutzer auf einer Website zu authentifizieren.

Die Methode akzeptiert ein einzelnes optionales `options`-Argument, das Folgendes umfassen kann:

- Eine `mediation`-Eigenschaft, die angibt, wie und ob der Benutzer gebeten werden soll, an der Operation teilzunehmen. Dies steuert beispielsweise, ob die Seite einen Benutzer stillschweigend mit einem gespeicherten Anmeldedaten anmelden kann.
- Eine `signal`-Eigenschaft, die es ermöglicht, die Operation mit einem [`AbortController`](/de/docs/Web/API/AbortController) abzubrechen.
- Eine oder mehrere Eigenschaften - `password`, `federated`, `identity`, `otp`, `publicKey` - die die [Typen von Anmeldedaten](/de/docs/Web/API/Credential_Management_API/Credential_types) angeben, die angefordert werden. Wenn festgelegt, enthalten die Werte dieser Eigenschaften alle Parameter, die der Browser benötigt, um ein geeignetes Anmeldedaten des angeforderten Typs zu finden.

Die API wird immer mit einem einzigen Anmeldedaten oder `null` erfüllt. Wenn mehrere Anmeldedaten verfügbar sind und Benutzermediation erlaubt ist, wird der Browser den Benutzer bitten, ein einziges Anmeldedaten auszuwählen.

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

        - `"conditional"`: Entdeckte Anmeldedaten werden dem Benutzer in einem nicht-modalen Dialogfeld angezeigt, zusammen mit einem Hinweis auf den Ursprung, der die Anmeldedaten anfordert. In der Praxis bedeutet dies das automatische Ausfüllen verfügbarer Anmeldedaten; siehe [Mit einem Passkey durch Formulardatenfüllung anmelden](https://web.dev/articles/passkey-form-autofill) für weitere Details zur Nutzung; [`PublicKeyCredential.isConditionalMediationAvailable()`](/de/docs/Web/API/PublicKeyCredential/isConditionalMediationAvailable_static) bietet ebenfalls nützliche Informationen.

        - `"optional"`: Wenn Anmeldedaten für eine bestimmte Operation ohne Benutzermediation übergeben werden können, werden sie übergeben, was eine automatische Reauthentifizierung ohne Benutzermediation ermöglicht. Wenn Benutzermediation erforderlich ist, wird der Benutzeragent den Benutzer zur Authentifizierung auffordern. Dieser Wert ist für Situationen gedacht, in denen Sie ein berechtigtes Vertrauen haben, dass ein Benutzer nicht überrascht oder verwirrt sein wird, wenn er ein Anmeldedialogfeld sieht — zum Beispiel auf einer Site, die Benutzer nicht automatisch anmeldet, wenn ein Benutzer gerade auf eine "Login/Signup"-Schaltfläche geklickt hat.

        - `"required"`: Der Benutzer wird immer aufgefordert, sich zu authentifizieren, selbst wenn das stille Zugreifen verhindern (siehe [`CredentialsContainer.preventSilentAccess()`](/de/docs/Web/API/CredentialsContainer/preventSilentAccess)) auf `false` gesetzt ist. Dieser Wert ist für Situationen gedacht, in denen Sie die Benutzerauthentifizierung erzwingen möchten — zum Beispiel, wenn Sie möchten, dass ein Benutzer sich bei einer sensiblen Operation (wie der Bestätigung einer Kreditkartenzahlung) erneut authentifiziert, oder wenn Benutzer gewechselt werden.

        - `"silent"`: Der Benutzer wird nicht aufgefordert, sich zu authentifizieren. Der Benutzeragent authentifiziert den Benutzer automatisch erneut und meldet ihn an, wenn möglich. Wenn eine Zustimmung erforderlich ist, wird das Versprechen mit `null` erfüllt. Dieser Wert ist für Situationen gedacht, in denen Sie einen Benutzer automatisch bei der Besuch einer Web-App anmelden möchten, wenn möglich, aber wenn nicht, ihn nicht mit einem verwirrenden Anmeldedialogfeld konfrontieren möchten. Stattdessen sollten Sie auf einen expliziten Klick auf eine "Login/Signup"-Schaltfläche warten.

        Der Standardwert ist `"optional"`.

        > [!NOTE]
        > Im Falle einer [föderierten Authentifizierungsanfrage (FedCM API)](/de/docs/Web/API/FedCM_API) kann ein `mediation`-Wert von `optional` oder `silent` zu einem Versuch der [automatischen Reauthentifizierung](/de/docs/Web/API/FedCM_API/RP_sign-in#auto-reauthentication) führen. Ob dies aufgetreten ist, wird dem Identitätsanbieter (IdP) über den Parameter [`is_auto_selected`](/de/docs/Web/API/FedCM_API/IDP_integration#is_auto_selected) mitgeteilt, der während der Validierung an den `id_assertion_endpoint` des IdP gesendet wird, und der Vertrauensstelle (RP) über die Eigenschaft [`IdentityCredential.isAutoSelected`](/de/docs/Web/API/IdentityCredential/isAutoSelected). Dies ist nützlich für Leistungsbewertung, Sicherheitsanforderungen (der IdP könnte automatische Reauthentifizierungsanfragen ablehnen und immer Benutzermediation erfordern), und allgemeine Benutzererfahrung (ein IdP oder RP könnte unterschiedliche UX für automatische und nicht-automatische Anmeldevorgänge präsentieren wollen).

    - `signal` {{optional_inline}}

      - : Ein [`AbortSignal`](/de/docs/Web/API/AbortSignal)-Objektinstanz, die es ermöglicht, eine laufende `get()`-Operation abzubrechen. Eine abgebrochene Operation kann normal abgeschlossen werden (normalerweise, wenn der Abbruch empfangen wurde, nachdem die Operation abgeschlossen wurde) oder mit einem `AbortError` [`DOMException`](/de/docs/Web/API/DOMException) abgelehnt werden.

    - `password` {{optional_inline}}
      - : Diese Option fordert den Browser auf, ein gespeichertes [Passwort](/de/docs/Web/API/Credential_Management_API/Credential_types#passwords) als [`PasswordCredential`](/de/docs/Web/API/PasswordCredential)-Objekt abzurufen. Es ist ein boolescher Wert.
    - `identity` {{optional_inline}}

      - : Diese Option fordert den Browser auf, ein [föderiertes Identitätsanmeldedaten](/de/docs/Web/API/Credential_Management_API/Credential_types#federated_identity_credentials) als [`IdentityCredential`](/de/docs/Web/API/IdentityCredential)-Objekt abzurufen, wobei die [föderierte Anmeldedaten-Management-API](/de/docs/Web/API/FedCM_API) verwendet wird.

        Der Wert dieser Option ist ein [`IdentityCredentialRequestOptions`](/de/docs/Web/API/IdentityCredentialRequestOptions)-Objekt, das Details der spezifischen Identitätsanbieter enthält, die die Website verwenden möchte.

    - `federated` {{optional_inline}}

      - : Diese Option fordert den Browser auf, ein [föderiertes Identitätsanmeldedaten](/de/docs/Web/API/Credential_Management_API/Credential_types#federated_identity_credentials) als [`FederatedCredential`](/de/docs/Web/API/FederatedCredential)-Objekt abzurufen. Dieses Interface ist nun veraltet, Entwickler sollten stattdessen die `identity`-Option verwenden, wenn sie verfügbar ist.

        Der Wert dieser Option ist ein Objekt mit den folgenden Eigenschaften:

        - `protocols`
          - : Ein Array von Strings, das die Protokolle der angeforderten föderierten Identitätsanbieter-Credentials (zum Beispiel `"openidconnect"`) darstellt.
        - `providers`
          - : Ein Array von Strings, das die föderierten Identitätsanbieter-Credentials (zum Beispiel `"https://www.facebook.com"` oder `"https://accounts.google.com"`) darstellt.

    - `otp` {{optional_inline}}

      - : Diese Option fordert den Browser auf, ein [Einmalpasswort (OTP)](/de/docs/Web/API/Credential_Management_API/Credential_types#one-time_passwords) als [`OTPCredential`](/de/docs/Web/API/OTPCredential)-Objekt abzurufen.

        Der Wert dieser Option ist ein Array von Strings, das nur den String-Wert `"sms"` enthalten darf.

    - `publicKey` {{optional_inline}}

      - : Diese Option fordert den Browser auf, eine [Signierbestätigung mit der Web Authentication API](/de/docs/Web/API/Credential_Management_API/Credential_types#web_authentication_assertions) als ein [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential) abzurufen.

        Der Wert dieser Option ist ein [`PublicKeyCredentialRequestOptions`](/de/docs/Web/API/PublicKeyCredentialRequestOptions)-Objekt.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einer der folgenden Unterklassen von [`Credential`](/de/docs/Web/API/Credential) auflöst:

- [`PasswordCredential`](/de/docs/Web/API/PasswordCredential)
- [`IdentityCredential`](/de/docs/Web/API/IdentityCredential)
- [`FederatedCredential`](/de/docs/Web/API/FederatedCredential)
- [`OTPCredential`](/de/docs/Web/API/OTPCredential)
- [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)

Wenn ein einzelnes Anmeldedaten nicht eindeutig beschafft werden kann, löst sich das Versprechen mit `null` auf.

### Ausnahmen

- `AbortError` [`DOMException`](/de/docs/Web/API/DOMException)

  - : Die Anfrage wurde durch einen Aufruf der [`abort()`](/de/docs/Web/API/AbortController/abort)-Methode des [`AbortController`](/de/docs/Web/API/AbortController), der mit der `[`signal`](#signal)-Option dieser Methode verbunden ist, abgebrochen.

- `IdentityCredentialError` [`DOMException`](/de/docs/Web/API/DOMException)

  - : Wenn ein [`IdentityCredential`](/de/docs/Web/API/IdentityCredential) angefordert wird, kann die Anfrage an den [ID-Assertion-Endpunkt](/de/docs/Web/API/FedCM_API/IDP_integration#the_id_assertion_endpoint) die Authentifizierung nicht validieren und lehnt mit einer Fehlerantwort ab, die Informationen über den Grund enthält.

- `NetworkError` [`DOMException`](/de/docs/Web/API/DOMException)

  - : Wenn ein [`IdentityCredential`](/de/docs/Web/API/IdentityCredential) angefordert wird, antwortet der [Identitätsanbieter](/de/docs/Glossary/identity_provider) (IdP) nicht innerhalb von 60 Sekunden, die bereitgestellten Anmeldedaten waren nicht gültig oder wurden nicht gefunden, oder der Login-Status des Browsers für den IdP ist auf `"logged-out"` gesetzt (siehe [Anmeldestatus aktualisieren mit der Login-Status-API](/de/docs/Web/API/FedCM_API/IDP_integration#update_login_status_using_the_login_status_api) für weitere Informationen über den FedCM-Anmeldestatus). Im letzteren Fall kann es zu einer Verzögerung bei der Ablehnung kommen, um zu vermeiden, dass der Anmeldestatus des IdP an die RP weitergegeben wird.

- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)

  - : Wird in einer der folgenden Situationen geworfen:

    - Die Nutzung dieser API wurde durch eine der folgenden [Berechtigungsrichtlinien](/de/docs/Web/HTTP/Permissions_Policy) blockiert:

      - {{HTTPHeader("Permissions-Policy/identity-credentials-get","identity-credentials-get")}}
      - {{HTTPHeader("Permissions-Policy/publickey-credentials-get","publickey-credentials-get")}}
      - {{HTTPHeader("Permissions-Policy/otp-credentials","otp-credentials")}}

    - Der aufrufende Ursprung ist ein [undurchsichtiger Ursprung](/de/docs/Web/HTTP/Headers/Origin#null).

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)

  - : Die aufrufende Domain ist keine gültige Domain.

## Beispiele

### Abrufen eines föderierten Identitätsanmeldedatensatzes

Vertrauensstellen können `get()` mit der `identity`-Option aufrufen, um eine Anfrage zu stellen, dass sich Benutzer über einen Identitätsanbieter (IdP) bei der Vertrauensstelle anmelden, indem Identitätsföderation genutzt wird. Eine typische Anfrage würde so aussehen:

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

Weitere Details dazu, wie das funktioniert, finden Sie in der [Föderierten Anmeldedaten-Management-API (FedCM)](/de/docs/Web/API/FedCM_API). Dieser Aufruf startet den Anmeldefluss, wie in [FedCM-Anmeldefluss](/de/docs/Web/API/FedCM_API/RP_sign-in#fedcm_sign-in_flow) beschrieben.

Ein ähnlicher Aufruf, der die `context`- und `loginHint`-Erweiterungen einschließt, würde so aussehen:

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

Wenn der IdP nicht in der Lage ist, eine Anfrage an den [ID-Assertion-Endpunkt](/de/docs/Web/API/FedCM_API/IDP_integration#the_id_assertion_endpoint) zu validieren, lehnt er das zurückgegebene Versprechen von `CredentialsContainer.get()` ab:

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

### Abrufen eines öffentlichen Schlüsselanmeldedatensatzes

Der folgende Ausschnitt zeigt einen typischen `get()`-Aufruf mit der WebAuthn-Option `publicKey`:

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

Ein erfolgreicher `get()`-Aufruf gibt ein Versprechen zurück, das mit einem [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Objektinstance abgeschlossen wird, das ein zuvor erstelltes öffentliches Schlüsselanmeldedatensatz über ein WebAuthn [`create()`](/de/docs/Web/API/CredentialsContainer/create) repräsentiert und nun zur Authentifizierung eines Benutzers verwendet wurde. Seine [`PublicKeyCredential.response`](/de/docs/Web/API/PublicKeyCredential/response)-Eigenschaft enthält ein [`AuthenticatorAssertionResponse`](/de/docs/Web/API/AuthenticatorAssertionResponse)-Objekt, das Zugang zu mehreren nützlichen Informationen wie den Authenticator-Daten, der Signatur und dem Benutzerhandle bietet.

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

Einige dieser Daten müssen auf dem Server gespeichert werden — zum Beispiel die `signature`, um den Beweis zu erbringen, dass der Authenticator den echten privaten Schlüssel besitzt, der zur Erstellung des Anmeldedatensatzes verwendet wurde, und das `userHandle`, um den Benutzer mit dem Anmeldedatensatz, dem Anmeldeversuch und anderen Daten zu verknüpfen.

Siehe [Benutzer autenticieren](/de/docs/Web/API/Web_Authentication_API#authenticating_a_user) für weitere Informationen darüber, wie der gesamte Fluss funktioniert.

### Abrufen eines Einmalpassworts

Der folgende Code löst den Berechtigungsfluss des Browsers aus, wenn eine SMS-Nachricht eintrifft. Wenn die Berechtigung erteilt wird, wird das Versprechen mit einem `OTPCredential`-Objekt abgeschlossen. Der enthaltene `code`-Wert wird dann als Wert eines {{htmlelement("input")}}-Formularelements gesetzt, das dann abgesendet wird.

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
