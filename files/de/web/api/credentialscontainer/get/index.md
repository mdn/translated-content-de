---
title: "CredentialsContainer: get() Methode"
short-title: get()
slug: Web/API/CredentialsContainer/get
l10n:
  sourceCommit: 1e98f1356a5eda11db10cd9b08dc52cce868ebff
---

{{APIRef("Credential Management API")}}{{SecureContext_Header}}

Die **`get()`** Methode des [`CredentialsContainer`](/de/docs/Web/API/CredentialsContainer) Interfaces gibt ein {{jsxref("Promise")}} zurück, das mit einem einzelnen {{Glossary("credential", "Credential")}} erfüllt wird, welches dann verwendet werden kann, um einen Benutzer auf einer Website zu authentifizieren.

Die Methode akzeptiert ein einzelnes optionales `options` Argument, das Folgendes enthalten kann:

- Eine `mediation` Eigenschaft, die angibt, wie und ob der Benutzer gebeten werden sollte, an der Operation teilzunehmen. Dies steuert zum Beispiel, ob die Seite einen Benutzer stillschweigend mit einem gespeicherten Credential anmelden kann.
- Eine `signal` Eigenschaft, die es ermöglicht, die Operation mit einem [`AbortController`](/de/docs/Web/API/AbortController) abzubrechen.
- Eine oder mehrere Eigenschaften — `password`, `federated`, `identity`, `otp`, `publicKey` — die die [Arten von Credentials](/de/docs/Web/API/Credential_Management_API/Credential_types) angeben, die angefordert werden. Wenn gesetzt, enthalten die Werte dieser Eigenschaften alle Parameter, die der Browser benötigt, um ein passendes Credential des angeforderten Typs zu finden.

Die API erfüllt immer mit einem einzigen Credential oder `null`. Wenn mehrere Credentials verfügbar sind und Benutzermediation erlaubt ist, wird der Browser den Benutzer bitten, ein einzelnes Credential auszuwählen.

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

          - : Entdeckte Credentials werden dem Benutzer in einem nicht-modalen Dialogfeld zusammen mit einem Hinweis auf den Ursprung präsentiert, der nach Credentials fragt. In der Praxis bedeutet dies, verfügbare Credentials automatisch auszufüllen; siehe [Anmeldung mit einem Passkey durch Formular-Autofill](https://web.dev/articles/passkey-form-autofill) für weitere Details zur Verwendung; [`PublicKeyCredential.isConditionalMediationAvailable()`](/de/docs/Web/API/PublicKeyCredential/isConditionalMediationAvailable_static) liefert ebenfalls einige nützliche Informationen.

        - `"optional"`

          - : Wenn Credentials für eine gegebene Operation ohne Benutzermediation übergeben werden können, werden sie es, was eine automatische Wiederanmeldung ohne Benutzermediation ermöglicht. Wenn Benutzermediation erforderlich ist, wird der Benutzeragent den Benutzer zur Authentifizierung auffordern. Dieser Wert ist für Situationen gedacht, in denen Sie hinreichendes Vertrauen haben, dass ein Benutzer nicht überrascht oder verwirrt über das Auftauchen eines Anmeldedialogs ist – zum Beispiel auf einer Website, die Benutzer nicht automatisch anmeldet, wenn ein Benutzer gerade einen "Login/Signup"-Button geklickt hat.

        - `"required"`

          - : Der Benutzer wird immer zur Authentifizierung aufgefordert, selbst wenn das stille Zugreifen verhindern (siehe [`CredentialsContainer.preventSilentAccess()`](/de/docs/Web/API/CredentialsContainer/preventSilentAccess)) auf `false` gesetzt ist. Dieser Wert ist für Situationen gedacht, in denen Sie die Benutzer-Authentifizierung erzwingen wollen – zum Beispiel, wenn Sie wollen, dass ein Benutzer bei einer sensiblen Operation (wie der Bestätigung einer Kreditkartenzahlung) erneut authentifiziert wird oder wenn Benutzer gewechselt werden.

        - `"silent"`
          - : Der Benutzer wird nicht zur Authentifizierung aufgefordert. Der Benutzeragent wird den Benutzer automatisch wieder authentifizieren und anmelden, wenn möglich. Wenn eine Zustimmung erforderlich ist, wird das Promise mit `null` erfüllt. Dieser Wert ist für Situationen gedacht, in denen Sie wollen, dass ein Benutzer beim Besuch einer Web-App automatisch angemeldet wird, wenn möglich, aber wenn nicht, wollen Sie ihm keinen verwirrenden Anmeldedialog anzeigen. Stattdessen wollen Sie darauf warten, dass er explizit auf einen "Login/Signup"-Button klickt.

        Der Standardwert ist `"optional"`.

        > [!NOTE]
        > Im Falle einer [federated authentication (FedCM API)](/de/docs/Web/API/FedCM_API) Anfrage kann ein `mediation`-Wert von `optional` oder `silent` zu einem Versuch der [automatischen Wiederanmeldung](/de/docs/Web/API/FedCM_API/RP_sign-in#auto-reauthentication) führen. Ob dies erfolgt ist, wird dem Identitätsanbieter (IdP) über den [`is_auto_selected`](/de/docs/Web/API/FedCM_API/IDP_integration#is_auto_selected) Parameter mitgeteilt, der während der Validierung an den `id_assertion_endpoint` des IdP gesendet wird, sowie der verlassenden Partei (RP) über die [`IdentityCredential.isAutoSelected`](/de/docs/Web/API/IdentityCredential/isAutoSelected) Eigenschaft. Dies ist nützlich für Leistungsevaluierungen, Sicherheitsanforderungen (der IdP könnte wünschen, automatische Wiederanfragen abzulehnen und immer Benutzermediation zu verlangen) sowie für die allgemeine Benutzererfahrung (ein IdP oder RP könnte wünschen, unterschiedliche UX für Auto- und Nicht-Auto-Login-Erfahrungen zu zeigen).

    - `signal` {{optional_inline}}

      - : Ein [`AbortSignal`](/de/docs/Web/API/AbortSignal) Objektinstanz, die es erlaubt, eine laufende `get()` Operation abzubrechen. Eine abgebrochene Operation kann normal abgeschlossen werden (normalerweise, wenn der Abbruch nach Abschluss der Operation empfangen wurde) oder mit einem `AbortError` [`DOMException`](/de/docs/Web/API/DOMException) abgewiesen werden.

    - `password` {{optional_inline}}

      - : Diese Option fordert den Browser auf, ein gespeichertes [Passwort](/de/docs/Web/API/Credential_Management_API/Credential_types#passwords) als ein [`PasswordCredential`](/de/docs/Web/API/PasswordCredential) Objekt abzurufen. Es ist ein boolescher Wert.

    - `identity` {{optional_inline}}

      - : Diese Option fordert den Browser auf, ein [federated identity credential](/de/docs/Web/API/Credential_Management_API/Credential_types#federated_identity_credentials) als ein [`IdentityCredential`](/de/docs/Web/API/IdentityCredential) Objekt unter Verwendung der [Federated Credential Management API](/de/docs/Web/API/FedCM_API) abzurufen.

        Der Wert dieser Option ist ein [`IdentityCredentialRequestOptions`](/de/docs/Web/API/IdentityCredentialRequestOptions) Objekt, das Details der spezifischen Identitätsanbieter enthält, die die Website verwenden möchte.

    - `federated` {{optional_inline}}

      - : Diese Option fordert den Browser auf, ein [federated identity credential](/de/docs/Web/API/Credential_Management_API/Credential_types#federated_identity_credentials) als ein [`FederatedCredential`](/de/docs/Web/API/FederatedCredential) Objekt abzurufen. Dieses Interface ist jetzt veraltet, und Entwickler sollten bevorzugt die `identity` Option verwenden, wenn sie verfügbar ist.

        Der Wert dieser Option ist ein Objekt mit den folgenden Eigenschaften:

        - `protocols`
          - : Ein Array von Strings, die die Protokolle der angeforderten Credentials der föderierten Identitätsanbieter repräsentieren (zum Beispiel `"openidconnect"`).
        - `providers`
          - : Ein Array von Strings, die die Anbieter der föderierten Identitäts-Credentials repräsentieren (zum Beispiel `"https://www.facebook.com"` oder `"https://accounts.google.com"`).

    - `otp` {{optional_inline}}

      - : Diese Option fordert den Browser auf, ein [Einmal-Passwort (OTP)](/de/docs/Web/API/Credential_Management_API/Credential_types#one-time_passwords) als ein [`OTPCredential`](/de/docs/Web/API/OTPCredential) Objekt abzurufen.

        Der Wert dieser Option ist ein Array von Strings, das nur den Stringwert `"sms"` enthalten kann.

    - `publicKey` {{optional_inline}}

      - : Diese Option fordert den Browser auf, eine [Behauptung, die mit der Web Authentication API signiert wurde](/de/docs/Web/API/Credential_Management_API/Credential_types#web_authentication_assertions) als ein [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential) abzurufen.

        Der Wert dieser Option ist ein [`PublicKeyCredentialRequestOptions`](/de/docs/Web/API/PublicKeyCredentialRequestOptions) Objekt.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einer der folgenden Unterklassen von [`Credential`](/de/docs/Web/API/Credential) aufgelöst wird:

- [`PasswordCredential`](/de/docs/Web/API/PasswordCredential)
- [`IdentityCredential`](/de/docs/Web/API/IdentityCredential)
- [`FederatedCredential`](/de/docs/Web/API/FederatedCredential)
- [`OTPCredential`](/de/docs/Web/API/OTPCredential)
- [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)

Wenn [konditionale Mediation](#mediation) in dem `get()` Aufruf spezifiziert war, wird das Browser-UI-Dialog angezeigt und das Promise bleibt schwebend, bis der Benutzer ein Konto auswählt, mit dem er sich anmelden möchte, aus den verfügbaren Auto-Fill-Vorschlägen:

- Wenn der Benutzer dann eine Geste außerhalb des Browser-UI-Dialogs macht, schließt es sich, ohne das Promise aufzulösen oder abzulehnen und ohne eine Benutzersichtbare Fehlermeldung zu verursachen.
- Wenn der Benutzer ein Credential auswählt, wird das relevante [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential) dem Anrufer zurückgegeben.

Wenn ein einzelnes Credential nicht eindeutig ermittelt werden kann, wird das Promise mit `null` aufgelöst.

### Ausnahmen

- `AbortError` [`DOMException`](/de/docs/Web/API/DOMException)

  - : Die Anfrage wurde durch einen Aufruf der [`abort()`](/de/docs/Web/API/AbortController/abort) Methode des [`AbortController`](/de/docs/Web/API/AbortController), der mit der [`signal`](#signal) Option dieser Methode verbunden ist, abgebrochen.

- `IdentityCredentialError` [`DOMException`](/de/docs/Web/API/DOMException)

  - : Beim Anfordern eines [`IdentityCredential`](/de/docs/Web/API/IdentityCredential) ist die Anfrage an den [ID Assertion Endpoint](/de/docs/Web/API/FedCM_API/IDP_integration#the_id_assertion_endpoint) nicht fähig, die Authentifizierung zu validieren, und lehnt mit einer Fehlermeldung ab, die Informationen über den Grund enthält.

- `NetworkError` [`DOMException`](/de/docs/Web/API/DOMException)

  - : Beim Anfordern eines [`IdentityCredential`](/de/docs/Web/API/IdentityCredential) hat der {{Glossary("identity_provider", "Identitätsanbieter")}} (IdP) nicht innerhalb von 60 Sekunden geantwortet, die bereitgestellten Credentials waren nicht gültig/gefunden, oder der Anmeldestatus des Browsers für den IdP ist auf "abgemeldet" gesetzt (siehe [Loginstatus mit der Login Status API aktualisieren](/de/docs/Web/API/FedCM_API/IDP_integration#update_login_status_using_the_login_status_api) für weitere Informationen zum FedCM-Anmeldestatus). Im letzteren Fall kann es eine gewisse Verzögerung bei der Ablehnung geben, um den IdP-Anmeldestatus nicht an die RP weiterzugeben.

- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)

  - : In einer der folgenden Situationen ausgelöst:

    - Die Verwendung dieser API wurde durch eine der folgenden [Permissions Policies](/de/docs/Web/HTTP/Permissions_Policy) blockiert:

      - {{HTTPHeader("Permissions-Policy/identity-credentials-get","identity-credentials-get")}}
      - {{HTTPHeader("Permissions-Policy/publickey-credentials-get","publickey-credentials-get")}}
      - {{HTTPHeader("Permissions-Policy/otp-credentials","otp-credentials")}}

    - Der aufrufende Ursprung ist ein [opaker Ursprung](/de/docs/Web/HTTP/Headers/Origin#null).

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)

  - : Die aufrufende Domain ist keine gültige Domain.

## Beispiele

### Abrufen eines federierten Identitätscredentials

Vertrauenswürdige Parteien können `get()` mit der `identity` Option aufrufen, um eine Anfrage zur Anmeldung der Benutzer bei der vertrauenswürdigen Partei über einen Identitätsanbieter (IdP) mittels Identitätsföderation zu stellen. Eine typische Anfrage sieht so aus:

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

Sehen Sie sich [Federated Credential Management (FedCM) API](/de/docs/Web/API/FedCM_API) für weitere Details darüber an, wie dies funktioniert. Dieser Aufruf beginnt den Anmeldeablauf, der in [FedCM-Anmeldeablauf](/de/docs/Web/API/FedCM_API/RP_sign-in#fedcm_sign-in_flow) beschrieben ist.

Ein ähnlicher Aufruf, der die `context` und `loginHint` Erweiterungen beinhaltet, würde so aussehen:

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

Wenn der IdP nicht in der Lage ist, eine Anfrage an den [ID Assertion Endpoint](/de/docs/Web/API/FedCM_API/IDP_integration#the_id_assertion_endpoint) zu validieren, wird er das Promise, das aus `CredentialsContainer.get()` zurückgegeben wird, ablehnen:

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

### Abrufen eines öffentlichen Schlüsselcredentials

Der folgende Ausschnitt zeigt einen typischen `get()` Aufruf mit der WebAuthn `publicKey` Option:

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

Ein erfolgreicher `get()` Aufruf gibt ein Promise zurück, das mit einem [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential) Objektinstanz aufgelöst wird, das ein über WebAuthn [`create()`](/de/docs/Web/API/CredentialsContainer/create) zuvor erstelltes öffentliches Schlüsselcredential darstellt, das nun verwendet wurde, um einen Benutzer zu authentifizieren. Seine [`PublicKeyCredential.response`](/de/docs/Web/API/PublicKeyCredential/response) Eigenschaft enthält ein [`AuthenticatorAssertionResponse`](/de/docs/Web/API/AuthenticatorAssertionResponse) Objekt, das Zugriff auf mehrere nützliche Informationsstücke bietet, darunter die Authenticator-Daten, Unterschrift und Benutzerkennung.

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

Einige dieser Daten müssen auf dem Server gespeichert werden — zum Beispiel die `signature`, um den Nachweis zu erbringen, dass der Authenticator den echten privaten Schlüssel besitzt, der zur Erstellung des Credentials verwendet wurde, und die `userHandle`, um den Benutzer mit dem Credential, dem Anmeldeversuch und anderen Daten zu verknüpfen.

Siehe [Authentifizieren eines Benutzers](/de/docs/Web/API/Web_Authentication_API#authenticating_a_user) für mehr Informationen darüber, wie der gesamte Ablauf funktioniert.

### Abrufen eines Einmal-Passworts

Der folgende Code löst den Berechtigungsfluss des Browsers aus, wenn eine SMS-Nachricht eintrifft. Wird die Berechtigung erteilt, wird das Promise mit einem `OTPCredential` Objekt aufgelöst. Der darin enthaltene `code` Wert wird dann als Wert eines {{htmlelement("input")}} Formularelements gesetzt, das anschließend übermittelt wird.

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
