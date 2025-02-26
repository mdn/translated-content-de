---
title: "CredentialsContainer: get() Methode"
short-title: get()
slug: Web/API/CredentialsContainer/get
l10n:
  sourceCommit: 46771af16e0d578d18e132900d553709218f7f47
---

{{APIRef("Credential Management API")}}{{SecureContext_Header}}

Die **`get()`** Methode der [`CredentialsContainer`](/de/docs/Web/API/CredentialsContainer)-Schnittstelle gibt ein {{jsxref("Promise")}} zurück, das mit einem einzelnen {{Glossary("credential", "Credential")}} erfüllt wird, welches anschließend verwendet werden kann, um einen Benutzer auf einer Website zu authentifizieren.

Die Methode akzeptiert ein einzelnes, optionales `options`-Argument, das Folgendes enthalten kann:

- Eine `mediation`-Eigenschaft, die angibt, ob und wie der Benutzer zur Teilnahme an der Operation aufgefordert werden soll. Dies steuert zum Beispiel, ob die Website einen Benutzer ohne dessen Eingreifen mit einem gespeicherten Credential einloggen kann.
- Eine `signal`-Eigenschaft, die es ermöglicht, die Operation mit einem [`AbortController`](/de/docs/Web/API/AbortController) abzubrechen.
- Eine oder mehrere Eigenschaften — `password`, `federated`, `identity`, `otp`, `publicKey` — die die [Arten von Credentials](/de/docs/Web/API/Credential_Management_API/Credential_types) angeben, die angefordert werden. Sind sie gesetzt, beinhalten die Werte dieser Eigenschaften jegliche Parameter, die der Browser benötigt, um ein passendes Credential des angeforderten Typs zu finden.

Die API erfüllt immer mit einem einzigen Credential oder `null`. Wenn mehrere Credentials verfügbar sind und Benutzerbeteiligung erlaubt ist, wird der Browser den Benutzer bitten, ein einzelnes Credential auszuwählen.

## Syntax

```js-nolint
get()
get(options)
```

### Parameter

- `options` {{optional_inline}}

  - : Ein Objekt, das Optionen für die Anfrage enthält. Es kann die folgenden Eigenschaften enthalten:

    - `mediation` {{optional_inline}}

      - : Ein String, der angibt, ob der Benutzer bei jedem Besuch einer Client-App einloggen muss. Der Wert kann einer der folgenden sein:

        - `"conditional"`

          - : Entdeckte Credentials werden dem Benutzer in einem nicht-modalen Dialogfeld zusammen mit einem Hinweis auf die anfragende Quelle präsentiert. Dies bedeutet in der Praxis das automatische Ausfüllen verfügbarer Credentials; siehe [Einloggen mit einem Passkey über das Formular-Autofill](https://web.dev/articles/passkey-form-autofill) für weitere Details zur Nutzung; [`PublicKeyCredential.isConditionalMediationAvailable()`](/de/docs/Web/API/PublicKeyCredential/isConditionalMediationAvailable_static) bietet ebenfalls nützliche Informationen.

        - `"optional"`

          - : Können Credentials für eine gegebene Operation ohne Benutzerbeteiligung übergeben werden, werden sie dies, wodurch eine automatische Wiederanmeldung ohne Benutzerbeteiligung ermöglicht wird. Ist Benutzerbeteiligung erforderlich, wird der Benutzer gebeten, sich zu authentifizieren. Dieser Wert ist für Situationen gedacht, in denen Sie mit hoher Wahrscheinlichkeit davon ausgehen können, dass ein Benutzer nicht überrascht oder verwirrt ist, wenn ein Login-Dialogfeld angezeigt wird — beispielsweise auf einer Seite, die Benutzer nicht automatisch einloggt, wenn ein Benutzer gerade auf einen "Login/Signup"-Button geklickt hat.

        - `"required"`

          - : Der Benutzer wird immer gebeten, sich zu authentifizieren. Dieser Wert ist für Situationen gedacht, in denen Sie eine Benutzer-Authentifizierung erzwingen möchten — beispielsweise wenn Sie möchten, dass ein Benutzer sich neuanmeldet, wenn eine sensible Operation ausgeführt wird (wie die Bestätigung einer Kreditkartenzahlung) oder beim Wechsel von Benutzern.

        - `"silent"`
          - : Der Benutzer wird nicht gebeten, sich zu authentifizieren. Die Benutzeragentur wird den Benutzer automatisch wieder authentifizieren und einloggen, wenn möglich. Sollte die Zustimmung erforderlich sein, wird das Promise mit `null` erfüllt. Dieser Wert ist für Situationen gedacht, in denen Sie einen Benutzer beim Besuch einer Web-App, wenn möglich, automatisch einloggen möchten, aber wenn nicht, möchten Sie ihm kein verwirrendes Login-Dialogfeld präsentieren. Stattdessen sollten Sie warten, bis der Benutzer explizit auf einen "Login/Signup"-Button klickt.

        Der Standardwert ist `"optional"`.

        > [!NOTE]
        > Im Falle einer Anfrage zur [federated authentication (FedCM API)](/de/docs/Web/API/FedCM_API) kann ein `mediation`-Wert von `optional` oder `silent` zu einem Versuch der [automatischen Wiederanmeldung](/de/docs/Web/API/FedCM_API/RP_sign-in#auto-reauthentication) führen. Ob dies geschehen ist, wird dem Identitätsanbieter (IdP) über den [`is_auto_selected`](/de/docs/Web/API/FedCM_API/IDP_integration#is_auto_selected)-Parameter mitgeteilt, der beim Validierungsprozess an den `id_assertion_endpoint` des IdP gesendet wird und der vertrauenden Partei (RP) über die [`IdentityCredential.isAutoSelected`](/de/docs/Web/API/IdentityCredential/isAutoSelected)-Eigenschaft. Dies ist nützlich für Leistungsbewertungen, Sicherheitsanforderungen (der IdP möchte möglicherweise automatische Wiederanfragen ablehnen und immer Benutzerbeteiligung verlangen)

    - `signal` {{optional_inline}}

      - : Eine Instanz des [`AbortSignal`](/de/docs/Web/API/AbortSignal)-Objekts, die es ermöglicht, eine laufende `get()`-Operation abzubrechen. Eine abgebrochene Operation kann normal abgeschlossen werden (im Allgemeinen, wenn der Abbruch nach Abschluss der Operation empfangen wurde) oder mit einem `AbortError` [`DOMException`](/de/docs/Web/API/DOMException) abgelehnt werden.

    - `password` {{optional_inline}}
      - : Diese Option fordert den Browser auf, ein gespeichertes [passwort](/de/docs/Web/API/Credential_Management_API/Credential_types#passwords) als [`PasswordCredential`](/de/docs/Web/API/PasswordCredential)-Objekt abzurufen. Es handelt sich um einen booleschen Wert.
    - `identity` {{optional_inline}}

      - : Diese Option fordert den Browser auf, ein [federiertes Identitäts-Credential](/de/docs/Web/API/Credential_Management_API/Credential_types#federated_identity_credentials) als [`IdentityCredential`](/de/docs/Web/API/IdentityCredential)-Objekt abzurufen, unter Verwendung der [Federated Credential Management API](/de/docs/Web/API/FedCM_API).

        Der Wert dieser Option ist ein [`IdentityCredentialRequestOptions`](/de/docs/Web/API/IdentityCredentialRequestOptions)-Objekt, das Details der spezifischen Identitätsanbieter enthält, die die Website verwenden möchte.

    - `federated` {{optional_inline}}

      - : Diese Option fordert den Browser auf, ein [federiertes Identitäts-Credential](/de/docs/Web/API/Credential_Management_API/Credential_types#federated_identity_credentials) als [`FederatedCredential`](/de/docs/Web/API/FederatedCredential)-Objekt abzurufen. Diese Schnittstelle ist mittlerweile veraltet, und Entwickler sollten die `identity`-Option bevorzugen, sofern verfügbar.

        Der Wert dieser Option ist ein Objekt mit den folgenden Eigenschaften:

        - `protocols`
          - : Ein Array von Strings, das die Protokolle der angeforderten Credentials der federierten Identitätsanbieter darstellt (zum Beispiel `"openidconnect"`).
        - `providers`
          - : Ein Array von Strings, das die federierten Identitätsanbieter der Credentials darstellt (zum Beispiel `"https://www.facebook.com"` oder `"https://accounts.google.com"`).

    - `otp` {{optional_inline}}

      - : Diese Option fordert den Browser auf, ein [Einmalpasswort (OTP)](/de/docs/Web/API/Credential_Management_API/Credential_types#one-time_passwords/) als [`OTPCredential`](/de/docs/Web/API/OTPCredential)-Objekt abzurufen.

        Der Wert dieser Option ist ein Array von Strings, das nur den String-Wert `"sms"` enthalten darf.

    - `publicKey` {{optional_inline}}

      - : Diese Option fordert den Browser auf, eine [mit der Web Authentication API signierte Assertion](/de/docs/Web/API/Credential_Management_API/Credential_types#web_authentication_assertions) als [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential) abzurufen.

        Der Wert dieser Option ist ein [`PublicKeyCredentialRequestOptions`](/de/docs/Web/API/PublicKeyCredentialRequestOptions)-Objekt.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einer der folgenden Unterklassen von [`Credential`](/de/docs/Web/API/Credential) aufgelöst wird:

- [`PasswordCredential`](/de/docs/Web/API/PasswordCredential)
- [`IdentityCredential`](/de/docs/Web/API/IdentityCredential)
- [`FederatedCredential`](/de/docs/Web/API/FederatedCredential)
- [`OTPCredential`](/de/docs/Web/API/OTPCredential)
- [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)

Wenn [conditional mediation](#mediation) im `get()`-Aufruf angegeben wurde, wird der Browser-UI-Dialog angezeigt und das Promise bleibt ausstehend, bis der Benutzer ein Konto aus verfügbaren Autofill-Vorschlägen zum Anmelden auswählt:

- Wenn der Benutzer dann eine Geste außerhalb des Browser-UI-Dialogs macht, schließt es sich, ohne das Promise zu lösen oder abzulehnen und ohne einen für den Benutzer sichtbaren Fehlerzustand zu verursachen.
- Wenn der Benutzer ein Credential auswählt, wird das relevante [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential) an den Aufrufer zurückgegeben.

Kann kein einzelnes Credential eindeutig ermittelt werden, wird das Promise mit `null` aufgelöst.

### Ausnahmen

- `AbortError` [`DOMException`](/de/docs/Web/API/DOMException)

  - : Die Anfrage wurde durch einen Aufruf der [`abort()`](/de/docs/Web/API/AbortController/abort)-Methode des mit dieser Methode verbundenen [`AbortController`](/de/docs/Web/API/AbortController) [`signal`](#signal)-Options abgebrochen.

- `IdentityCredentialError` [`DOMException`](/de/docs/Web/API/DOMException)

  - : Wenn ein [`IdentityCredential`](/de/docs/Web/API/IdentityCredential) angefordert wird, ist die Anfrage an den [ID-Assertion-Endpoint](/de/docs/Web/API/FedCM_API/IDP_integration#the_id_assertion_endpoint) nicht in der Lage, die Authentifizierung zu validieren, und lehnt mit einer Fehlerantwort ab, die Informationen über den Grund enthält.

- `NetworkError` [`DOMException`](/de/docs/Web/API/DOMException)

  - : Beim Anfordern eines [`IdentityCredential`](/de/docs/Web/API/IdentityCredential) hat der {{Glossary("identity_provider", "Identitätsanbieter")}} (IdP) nicht innerhalb von 60 Sekunden geantwortet, die bereitgestellten Credentials waren nicht gültig/gefunden oder der Login-Status des Browsers für den IdP ist auf `"logged-out"` gesetzt (siehe [Update login status using the Login Status API](/de/docs/Web/API/FedCM_API/IDP_integration#update_login_status_using_the_login_status_api) für weitere Informationen über den FedCM-Login-Status). In letzterem Fall kann es eine gewisse Verzögerung bei der Ablehnung geben, um zu verhindern, dass der IdP-Login-Status an den RP durchgesickert wird.

- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)

  - : Wird in einer der folgenden Situationen ausgelöst:

    - Der Benutzer hat die Anfrage abgebrochen.

    - Die Nutzung dieser API wurde durch eine der folgenden [Berechtigungsrichtlinien](/de/docs/Web/HTTP/Permissions_Policy) blockiert:

      - {{HTTPHeader("Permissions-Policy/identity-credentials-get","identity-credentials-get")}}
      - {{HTTPHeader("Permissions-Policy/publickey-credentials-get","publickey-credentials-get")}}
      - {{HTTPHeader("Permissions-Policy/otp-credentials","otp-credentials")}}

    - Der aufrufende Ursprung ist ein [undurchsichtiger Ursprung](/de/docs/Web/HTTP/Headers/Origin#null).

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)

  - : Die aufrufende Domain ist keine gültige Domain.

## Beispiele

### Abruf eines föderierten Identitäts-Credentials

Vertrauende Parteien können `get()` mit der `identity` Option aufrufen, um eine Anfrage zu starten, damit sich Benutzer über einen Identitätsanbieter (IdP) bei der vertrauenden Partei anmelden, wobei Identitätsverbund verwendet wird. Ein typischer Aufruf würde so aussehen:

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

Schauen Sie sich die [Federated Credential Management (FedCM) API](/de/docs/Web/API/FedCM_API) für weitere Details an, wie dies funktioniert. Dieser Aufruf startet den Anmeldeprozess, der in [FedCM sign-in flow](/de/docs/Web/API/FedCM_API/RP_sign-in#fedcm_sign-in_flow) beschrieben wird.

Ein ähnlicher Aufruf einschließlich der `context` und `loginHint` Erweiterungen würde so aussehen:

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

Wenn der IdP nicht in der Lage ist, eine Anfrage an den [ID-Assertion-Endpoint](/de/docs/Web/API/FedCM_API/IDP_integration#the_id_assertion_endpoint) zu validieren, lehnt er das von `CredentialsContainer.get()` zurückgegebene Promise ab:

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

### Abruf eines public key credentials

Das folgende Beispiel zeigt einen typischen `get()`-Aufruf mit der WebAuthn `publicKey`-Option:

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

Ein erfolgreicher `get()`-Aufruf gibt ein Promise zurück, das mit einem [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Objektinstanz aufgelöst wird, das ein public key credential darstellt, das zuvor über ein WebAuthn [`create()`](/de/docs/Web/API/CredentialsContainer/create) erstellt wurde und das jetzt zur Authentifizierung eines Benutzers verwendet wurde. Die [`PublicKeyCredential.response`](/de/docs/Web/API/PublicKeyCredential/response)-Eigenschaft enthält ein [`AuthenticatorAssertionResponse`](/de/docs/Web/API/AuthenticatorAssertionResponse)-Objekt, das Zugriff auf mehrere nützliche Informationen bietet, einschließlich der Authenticator-Daten, der Signatur und des Benutzerhandhabung.

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

Einige dieser Daten müssen auf dem Server gespeichert werden — zum Beispiel die `signature`, um nachzuweisen, dass der Authenticator den echten privaten Schlüssel besitzt, der zur Erstellung des Credentials verwendet wurde, und der `userHandle`, um den Benutzer mit dem Credential, dem Anmeldeversuch und anderen Daten zu verknüpfen.

Weitere Informationen darüber, wie der gesamte Prozess funktioniert, finden Sie unter [Authenticating a user](/de/docs/Web/API/Web_Authentication_API#authenticating_a_user).

### Abruf eines Einmalpassworts

Der unten stehende Code löst den Berechtigungsfluss des Browsers aus, wenn eine SMS-Nachricht eintrifft. Wenn die Berechtigung erteilt wird, wird das Promise mit einem `OTPCredential`-Objekt erfüllt. Der enthaltene `code`-Wert wird dann als Wert eines {{htmlelement("input")}}-Formularfelds gesetzt, das dann übermittelt wird.

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
