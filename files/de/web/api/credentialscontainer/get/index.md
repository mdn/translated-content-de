---
title: "CredentialsContainer: get() Methode"
short-title: get()
slug: Web/API/CredentialsContainer/get
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("Credential Management API")}}{{SecureContext_Header}}

Die **`get()`** Methode des [`CredentialsContainer`](/de/docs/Web/API/CredentialsContainer) Interfaces gibt ein {{jsxref("Promise")}} zurück, das mit einem einzelnen {{Glossary("credential", "Credential")}} erfüllt wird, welches dann verwendet werden kann, um einen Benutzer bei einer Webseite zu authentifizieren.

Die Methode akzeptiert ein einzelnes optionales `options` Argument, das folgende Elemente enthalten kann:

- Eine `mediation` Eigenschaft, die angibt, wie und ob der Benutzer gebeten werden soll, an der Operation teilzunehmen. Dies steuert zum Beispiel, ob die Seite einen Benutzer ohne Eingreifen stumm anmelden kann, indem ein gespeichertes Credential verwendet wird.
- Eine `signal` Eigenschaft, die es ermöglicht, die Operation mittels eines [`AbortController`](/de/docs/Web/API/AbortController) abzubrechen.
- Eine oder mehrere Eigenschaften — `password`, `federated`, `identity`, `otp`, `publicKey` —, die die [Arten von Credentials](/de/docs/Web/API/Credential_Management_API/Credential_types) angeben, die angefordert werden. Wenn gesetzt, beinhalten die Werte dieser Eigenschaften alle Parameter, die der Browser benötigt, um ein passendes Credential des angeforderten Typs zu finden.

Die API wird immer mit einem einzigen Credential oder `null` erfüllt. Wenn mehrere Credentials verfügbar sind und Benutzermediation erlaubt ist, wird der Browser den Benutzer bitten, ein einzelnes Credential auszuwählen.

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

          - : Entdeckte Credentials werden dem Benutzer in einem nicht-modalen Dialogfeld zusammen mit einer Angabe des Ursprungs, der die Credentials anfordert, präsentiert. In der Praxis bedeutet dies, dass verfügbare Credentials automatisch ausgefüllt werden; siehe [Sign in with a passkey through form autofill](https://web.dev/articles/passkey-form-autofill) für weitere Details zur Verwendung; [`PublicKeyCredential.isConditionalMediationAvailable()`](/de/docs/Web/API/PublicKeyCredential/isConditionalMediationAvailable_static) bietet ebenfalls nützliche Informationen.

        - `"optional"`

          - : Wenn Credentials ohne Benutzermediation für eine bestimmte Operation übergeben werden können, werden sie es, um eine automatische Reauthentifizierung ohne Benutzermediation zu ermöglichen. Wenn Benutzermediation erforderlich ist, wird die Benutzeroberfläche den Benutzer zur Authentifizierung auffordern. Dieser Wert ist für Situationen gedacht, in denen Sie vernünftigerweise annehmen, dass ein Benutzer nicht überrascht oder verwirrt sein wird, wenn er ein Anmeldedialogfeld sieht — beispielsweise auf einer Seite, die Benutzer nicht automatisch anmeldet, wenn ein Benutzer gerade die Schaltfläche „Login/Signup“ geklickt hat.

        - `"required"`

          - : Der Benutzer wird immer zur Authentifizierung aufgefordert. Dieser Wert ist für Situationen gedacht, in denen Sie die Benutzer-Authentifizierung erzwingen möchten — zum Beispiel, wenn Sie möchten, dass ein Benutzer sich erneut authentifiziert, wenn eine sensible Operation durchgeführt wird (wie die Bestätigung einer Kreditkartenzahlung) oder beim Wechseln von Benutzern.

        - `"silent"`

          - : Der Benutzer wird nicht zur Authentifizierung aufgefordert. Der Benutzer-Agent wird den Benutzer automatisch erneut authentifizieren und ihn anmelden, wenn möglich. Wenn eine Einwilligung erforderlich ist, wird das Versprechen mit `null` erfüllt. Dieser Wert ist für Situationen gedacht, in denen Sie einen Benutzer bei einem Web-App-Besuch automatisch anmelden möchten, wenn möglich, aber wenn nicht, möchten Sie ihm kein verwirrendes Anmeldedialogfeld präsentieren. Stattdessen sollten Sie darauf warten, dass der Benutzer explizit eine „Login/Signup“-Schaltfläche klickt.

        Der Standardwert ist `"optional"`.

        > [!NOTE]
        > Im Falle einer [federierten Authentifizierung (FedCM API)](/de/docs/Web/API/FedCM_API) Anfrage kann ein `mediation` Wert von `optional` oder `silent` eine versuchte [automatische Reauthentifizierung](/de/docs/Web/API/FedCM_API/RP_sign-in#auto-reauthentication) verursachen. Ob dies geschehen ist, wird über den [`is_auto_selected`](/de/docs/Web/API/FedCM_API/IDP_integration#is_auto_selected) Parameter, der an den `id_assertion_endpoint` des Identitätsanbieters (IdP) während der Validierung gesendet wird, und die [`IdentityCredential.isAutoSelected`](/de/docs/Web/API/IdentityCredential/isAutoSelected) Eigenschaft der relying party (RP) mitgeteilt. Dies ist nützlich für die Leistungsevaluierung, Sicherheitsanforderungen (der IdP möchte eventuell automatische Reauthentifizierungsanforderungen ablehnen und immer eine Benutzermediation verlangen) und die allgemeine Benutzererfahrung (ein IdP oder RP möchte vielleicht unterschiedliche UX für automatische und nicht-automatische Anmeldeerfahrungen präsentieren).

    - `signal` {{optional_inline}}

      - : Ein [`AbortSignal`](/de/docs/Web/API/AbortSignal) Objektinstanz, die es erlaubt, eine laufende `get()` Operation abzubrechen. Eine abgebrochene Operation kann normal abgeschlossen werden (allgemein wenn der Abbruch nach Abschluss der Operation empfangen wurde) oder mit einem `AbortError` [`DOMException`](/de/docs/Web/API/DOMException) abgelehnt werden.

    - `password` {{optional_inline}}
      - : Diese Option fordert den Browser auf, ein gespeichertes [Passwort](/de/docs/Web/API/Credential_Management_API/Credential_types#passwords) als ein [`PasswordCredential`](/de/docs/Web/API/PasswordCredential) Objekt abzurufen. Es handelt sich um einen booleanischen Wert.
    - `identity` {{optional_inline}}

      - : Diese Option fordert den Browser auf, ein [federiertes Identitäts-Credential](/de/docs/Web/API/Credential_Management_API/Credential_types#federated_identity_credentials) als ein [`IdentityCredential`](/de/docs/Web/API/IdentityCredential) Objekt mit der [Federated Credential Management API](/de/docs/Web/API/FedCM_API) abzurufen.

        Der Wert dieser Option ist ein [`IdentityCredentialRequestOptions`](/de/docs/Web/API/IdentityCredentialRequestOptions) Objekt, das Details der spezifischen Identitätsanbieter enthält, die die Webseite verwenden möchte.

    - `federated` {{optional_inline}}

      - : Diese Option fordert den Browser auf, ein [federiertes Identitäts-Credential](/de/docs/Web/API/Credential_Management_API/Credential_types#federated_identity_credentials) als ein [`FederatedCredential`](/de/docs/Web/API/FederatedCredential) Objekt abzurufen. Dieses Interface wurde inzwischen ersetzt und Entwickler sollten bevorzugt die `identity` Option verwenden, wenn sie verfügbar ist.

        Der Wert dieser Option ist ein Objekt mit den folgenden Eigenschaften:

        - `protocols`
          - : Ein Array von Strings, die die Protokolle der angeforderten Credentials' federierten Identitätsanbieter repräsentieren (beispielsweise „openidconnect“).
        - `providers`
          - : Ein Array von Strings, die die federierten Identitätsanbieter der Credentials repräsentieren (beispielsweise „https://www.facebook.com“ oder „https://accounts.google.com“).

    - `otp` {{optional_inline}}

      - : Diese Option fordert den Browser auf, ein [Einmalpasswort (OTP)](/de/docs/Web/API/Credential_Management_API/Credential_types#one-time_passwords) als ein [`OTPCredential`](/de/docs/Web/API/OTPCredential) Objekt abzurufen.

        Der Wert dieser Option ist ein Array von Strings, das nur den String-Wert „sms“ enthalten darf.

    - `publicKey` {{optional_inline}}

      - : Diese Option fordert den Browser auf, eine [Assertion über die Web Authentication API signiert](/de/docs/Web/API/Credential_Management_API/Credential_types#web_authentication_assertions) als ein [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential) abzurufen.

        Der Wert dieser Option ist ein [`PublicKeyCredentialRequestOptions`](/de/docs/Web/API/PublicKeyCredentialRequestOptions) Objekt.

### Rückgabewert

Ein {{jsxref("Promise")}}, das sich mit einer der folgenden Unterklassen von [`Credential`](/de/docs/Web/API/Credential) auflöst:

- [`PasswordCredential`](/de/docs/Web/API/PasswordCredential)
- [`IdentityCredential`](/de/docs/Web/API/IdentityCredential)
- [`FederatedCredential`](/de/docs/Web/API/FederatedCredential)
- [`OTPCredential`](/de/docs/Web/API/OTPCredential)
- [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)

Wenn [konditionelle Mediation](#mediation) im `get()` Aufruf spezifiziert wurde, wird der Browser-UI-Dialog angezeigt und das Promise bleibt schwebend, bis der Benutzer ein Konto aus den verfügbaren Autofill-Vorschlägen auswählt, um sich anzumelden:

- Wenn der Benutzer dann eine Geste außerhalb des Browser-UI-Dialogs macht, schließt dieser ohne das Versprechen aufzulösen oder abzulehnen und ohne eine benutzersichtbare Fehlermeldung zu verursachen.
- Wenn der Benutzer ein Credential auswählt, wird das relevante [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential) dem Aufrufer zurückgegeben.

Wenn ein einzelnes Credential nicht eindeutig erhalten werden kann, löst sich das Versprechen mit `null` auf.

### Ausnahmen

- `AbortError` [`DOMException`](/de/docs/Web/API/DOMException)

  - : Die Anfrage wurde durch einen Aufruf der [`abort()`](/de/docs/Web/API/AbortController/abort) Methode des [`AbortController`](/de/docs/Web/API/AbortController), das mit der [`signal`](#signal) Option dieser Methode verbunden ist, abgebrochen.

- `IdentityCredentialError` [`DOMException`](/de/docs/Web/API/DOMException)

  - : Bei der Anforderung eines [`IdentityCredential`](/de/docs/Web/API/IdentityCredential) ist die Anfrage an den [ID Assertion Endpoint](/de/docs/Web/API/FedCM_API/IDP_integration#the_id_assertion_endpoint) nicht in der Lage, die Authentifizierung zu validieren, und lehnt mit einer Fehlermeldung ab, die Informationen über den Grund enthält.

- `NetworkError` [`DOMException`](/de/docs/Web/API/DOMException)

  - : Bei der Anforderung eines [`IdentityCredential`](/de/docs/Web/API/IdentityCredential) hat der {{Glossary("identity_provider", "Identitätsanbieter")}} (IdP) nicht innerhalb von 60 Sekunden geantwortet, die bereitgestellten Credentials waren nicht gültig/gefunden oder der Anmeldestatus des Browsers für den IdP ist auf `"logged-out"` gesetzt (siehe [Update login status using the Login Status API](/de/docs/Web/API/FedCM_API/IDP_integration#update_login_status_using_the_login_status_api) für weitere Informationen über den FedCM-Anmeldestatus). Im letzteren Fall kann die Ablehnung verzögert sein, um zu vermeiden, den IdP-Anmeldestatus an die RP offenzulegen.

- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)

  - : Geworfen in einer der folgenden Situationen:

    - Der Benutzer hat die Anfrage abgebrochen.

    - Die Verwendung dieser API wurde durch eine der folgenden [Permissions Policies](/de/docs/Web/HTTP/Guides/Permissions_Policy) blockiert:

      - {{HTTPHeader("Permissions-Policy/identity-credentials-get","identity-credentials-get")}}
      - {{HTTPHeader("Permissions-Policy/publickey-credentials-get","publickey-credentials-get")}}
      - {{HTTPHeader("Permissions-Policy/otp-credentials","otp-credentials")}}

    - Der aufrufende Ursprung ist ein [opaker Ursprung](/de/docs/Web/HTTP/Reference/Headers/Origin#null).

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)

  - : Die aufrufende Domain ist keine gültige Domain.

## Beispiele

### Abrufen eines federierten Identitäts-Credentials

Relying-Party-Anwendungen können `get()` mit der `identity` Option aufrufen, um eine Anfrage an die Benutzer zu stellen, sich bei der Relying Party über einen Identitätsanbieter (IdP) anzumelden, indem Identitätsföderation verwendet wird. Eine typische Anfrage könnte so aussehen:

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

Sehen Sie sich [Federierte Credential-Management (FedCM) API](/de/docs/Web/API/FedCM_API) für weitere Details an, wie dies funktioniert. Dieser Aufruf wird den Anmeldefluss gemäß [FedCM Anmeldefluss](/de/docs/Web/API/FedCM_API/RP_sign-in#fedcm_sign-in_flow) starten.

Ein ähnlicher Aufruf, der die `context` und `loginHint` Erweiterungen einschließt, würde so aussehen:

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

### Abrufen eines Public-Key-Credentials

Der folgende Codeausschnitt zeigt einen typischen `get()` Aufruf mit der WebAuthn `publicKey` Option:

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

Ein erfolgreicher `get()` Aufruf gibt ein Promise zurück, das sich mit einer [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential) Objektinstanz auflöst, die ein zuvor über eine WebAuthn [`create()`](/de/docs/Web/API/CredentialsContainer/create) erstelltes Public-Key-Credential darstellt, das nun verwendet wurde, um einen Benutzer zu authentifizieren. Seine [`PublicKeyCredential.response`](/de/docs/Web/API/PublicKeyCredential/response) Eigenschaft enthält ein [`AuthenticatorAssertionResponse`](/de/docs/Web/API/AuthenticatorAssertionResponse) Objekt, das Zugriff auf mehrere nützliche Informationen bietet, einschließlich der Authenticator-Daten, Signatur und Benutzerkennung.

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

Einige dieser Daten müssen auf dem Server gespeichert werden — zum Beispiel die `signature`, um den Nachweis zu erbringen, dass der Authenticator den echten privaten Schlüssel besitzt, der verwendet wurde, um das Credential zu erstellen, und die `userHandle`, um den Benutzer mit dem Credential, dem Anmeldeversuch und anderen Daten zu verknüpfen.

Siehe [Authentifizierung eines Benutzers](/de/docs/Web/API/Web_Authentication_API#authenticating_a_user) für weitere Informationen darüber, wie der gesamte Ablauf funktioniert.

### Abrufen eines Einmalpassworts

Der untenstehende Code löst den Berechtigungsfluss des Browsers aus, wenn eine SMS-Nachricht eingeht. Wenn die Erlaubnis erteilt wird, wird das Promise mit einem `OTPCredential` Objekt erfüllt. Der enthaltene `code` Wert wird dann als Wert eines {{htmlelement("input")}} Formularelements gesetzt, das dann gesendet wird.

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
