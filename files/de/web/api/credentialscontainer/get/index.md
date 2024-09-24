---
title: "CredentialsContainer: get()-Methode"
short-title: get()
slug: Web/API/CredentialsContainer/get
l10n:
  sourceCommit: d2b78565fb33a7ebfa7314be61f6a887d2d90ace
---

{{APIRef("Credential Management API")}}{{SecureContext_Header}}

Die **`get()`**-Methode der {{domxref("CredentialsContainer")}}-Schnittstelle gibt ein {{jsxref("Promise")}} zurück, das mit einem einzelnen {{glossary("credential")}} erfüllt wird, welches dann zur Authentifizierung eines Benutzers auf einer Website verwendet werden kann.

Die Methode akzeptiert ein einziges optionales Argument `options`, welches Folgendes enthalten kann:

- Eine `mediation`-Eigenschaft, die angibt, wie und ob der Benutzer zur Teilnahme an der Operation aufgefordert werden soll. Dies steuert beispielsweise, ob die Seite einen Benutzer stillschweigend mit gespeicherten Anmeldeinformationen anmelden kann.
- Eine `signal`-Eigenschaft, die es ermöglicht, die Operation mit einem {{domxref("AbortController")}} abzubrechen.
- Eine oder mehrere Eigenschaften — `password`, `federated`, `identity`, `otp`, `publicKey` — die die [Arten von Anmeldeinformationen](/de/docs/Web/API/Credential_Management_API/Credential_types) angeben, die angefordert werden. Wenn festgelegt, enthalten die Werte dieser Eigenschaften alle Parameter, die der Browser benötigt, um eine geeignete Anmeldeinformation des angeforderten Typs zu finden.

Die API erfüllt immer entweder mit einer einzelnen Anmeldeinformation oder `null`. Wenn mehrere Anmeldeinformationen verfügbar sind und Benutzermediation erlaubt ist, wird der Browser den Benutzer bitten, eine einzelne Anmeldeinformation auszuwählen.

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

        - `"conditional"`: Entdeckte Anmeldeinformationen werden dem Benutzer in einem nicht-modalen Dialogfeld zusammen mit einem Hinweis auf die Ursprungsanfrage für Anmeldeinformationen präsentiert. In der Praxis bedeutet dies das automatische Ausfüllen verfügbarer Anmeldeinformationen; siehe [Anmeldung mit einem Passkey durch automatisches Ausfüllen von Formularen](https://web.dev/articles/passkey-form-autofill) für weitere Details zur Nutzung; {{domxref("PublicKeyCredential.isConditionalMediationAvailable_static", "PublicKeyCredential.isConditionalMediationAvailable()")}} liefert ebenfalls nützliche Informationen.

        - `"optional"`: Wenn Anmeldeinformationen für eine gegebene Operation ohne Benutzermediation übergeben werden können, werden sie dies tun, was eine automatische erneute Authentifizierung ohne Benutzermediation ermöglicht. Wenn Benutzermediation erforderlich ist, wird der Benutzeragent den Benutzer zur Authentifizierung auffordern. Dieser Wert ist für Situationen gedacht, in denen Sie eine begründete Zuversicht haben, dass ein Benutzer nicht überrascht oder verwirrt sein wird, wenn er ein Anmelde-Dialogfeld sieht — zum Beispiel auf einer Website, die Benutzer nicht automatisch einloggt, wenn ein Benutzer gerade auf den "Login/Signup"-Button geklickt hat.

        - `"required"`: Der Benutzer wird immer zur Authentifizierung aufgefordert, auch wenn das vorbeugende stille Zugreifen (siehe {{domxref("CredentialsContainer.preventSilentAccess()")}}) auf `false` gesetzt ist. Dieser Wert ist für Situationen gedacht, in denen Sie eine Benutzer-Authentifizierung erzwingen möchten — zum Beispiel, wenn Sie möchten, dass ein Benutzer sich erneut authentifiziert, wenn eine sensible Operation durchgeführt wird (wie das Bestätigen einer Kreditkartenzahlung), oder beim Wechseln von Benutzern.

        - `"silent"`: Der Benutzer wird nicht zur Authentifizierung aufgefordert. Der Benutzeragent wird den Benutzer automatisch erneut authentisieren und, wenn möglich, anmelden. Wenn eine Einwilligung erforderlich ist, wird das Versprechen mit `null` erfüllt. Dieser Wert ist für Situationen gedacht, in denen Sie einen Benutzer automatisch beim Besuch einer Web-App anmelden möchten, wenn möglich, aber wenn nicht, möchten Sie ihm kein verwirrendes Anmelde-Dialogfeld präsentieren. Stattdessen möchten Sie warten, bis er explizit auf einen "Login/Signup"-Button klickt.

        Der Standardwert ist `"optional"`.

        > [!NOTE]
        > Im Fall einer [föderierten Authentifizierungsanfrage (FedCM API)](/de/docs/Web/API/FedCM_API) kann ein `mediation`-Wert von `optional` oder `silent` zu einem Versuch der [automatisierten erneuten Authentifizierung](/de/docs/Web/API/FedCM_API/RP_sign-in#auto-reauthentication) führen. Ob dies geschah, wird dem Identitätsanbieter (IdP) über den [`is_auto_selected`](/de/docs/Web/API/FedCM_API/IDP_integration#is_auto_selected)-Parameter, der während der Validierung an den `id_assertion_endpoint`-Parameter des IdP gesendet wird, und der vertrauenden Partei (RP) über die {{domxref("IdentityCredential.isAutoSelected")}}-Eigenschaft mitgeteilt. Dies ist nützlich für Leistungsevaluierung, Sicherheitsanforderungen (der IdP möchte möglicherweise automatische erneute Authentifizierungsanfragen ablehnen und immer Benutzermediation erfordern) und allgemeines UX (ein IdP oder RP möchte möglicherweise unterschiedliche UX für automatische und nicht-automatische Anmeldeerfahrungen präsentieren).

    - `signal` {{optional_inline}}

      - : Eine Instanz des {{domxref("AbortSignal")}}-Objekts, das es ermöglicht, eine laufende `get()`-Operation abzubrechen. Eine abgebrochene Operation kann normal abgeschlossen werden (in der Regel, wenn der Abbruch nach Abschluss der Operation eingegangen ist) oder mit einem "`AbortError`" {{domxref("DOMException")}} abgelehnt werden.

    - `password` {{optional_inline}}
      - : Diese Option fordert den Browser auf, ein gespeichertes [Passwort](/de/docs/Web/API/Credential_Management_API/Credential_types#passwords) als {{domxref("PasswordCredential")}}-Objekt abzurufen. Es ist ein boolescher Wert.

    - `identity` {{optional_inline}}

      - : Diese Option fordert den Browser auf, ein [föderiertes Identitätsanmeldedatensatz](/de/docs/Web/API/Credential_Management_API/Credential_types#federated_identity_credentials) als {{domxref("IdentityCredential")}}-Objekt unter Verwendung der [FedCM API](/de/docs/Web/API/FedCM_API) abzurufen.

        Der Wert dieser Option ist ein {{domxref("IdentityCredentialRequestOptions")}}-Objekt, das Details zu den spezifischen Identitätsanbietern enthält, die die Website verwenden möchte.

    - `federated` {{optional_inline}}

      - : Diese Option fordert den Browser auf, ein [föderiertes Identitätsanmeldedatensatz](/de/docs/Web/API/Credential_Management_API/Credential_types#federated_identity_credentials) als {{domxref("FederatedCredential")}}-Objekt abzurufen. Diese Schnittstelle ist inzwischen überholt und Entwickler sollten bevorzugen, die `identity`-Option zu verwenden, wenn sie verfügbar ist.

        Der Wert dieser Option ist ein Objekt mit den folgenden Eigenschaften:

        - `protocols`
          - : Ein Array von Strings, das die Protokolle der angeforderten Anmeldeinformationen der föderierten Identitätsanbieter darstellt (zum Beispiel `"openidconnect"`).
        - `providers`
          - : Ein Array von Strings, das die Anmeldeinformationen der föderierten Identitätsanbieter darstellt (zum Beispiel `"https://www.facebook.com"` oder `"https://accounts.google.com"`).

    - `otp` {{optional_inline}}

      - : Diese Option fordert den Browser auf, ein [einmaliges Passwort (OTP)](/de/docs/Web/API/Credential_Management_API/Credential_types#one-time_passwords) als {{domxref("OTPCredential")}}-Objekt abzurufen.

        Der Wert dieser Option ist ein Array von Strings, das nur den Stringwert `"sms"` enthalten kann.

    - `publicKey` {{optional_inline}}

      - : Diese Option fordert den Browser auf, eine [Assertion, die mit der Web Authentication API signiert wurde](/de/docs/Web/API/Credential_Management_API/Credential_types#web_authentication_assertions), als {{domxref("PublicKeyCredential")}} abzurufen.

        Der Wert dieser Option ist ein {{domxref("PublicKeyCredentialRequestOptions")}}-Objekt.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einer der folgenden Unterklassen von {{domxref("Credential")}} aufgelöst wird:

- {{domxref("PasswordCredential")}}
- {{domxref("IdentityCredential")}}
- {{domxref("FederatedCredential")}}
- {{domxref("OTPCredential")}}
- {{domxref("PublicKeyCredential")}}

Wenn eine einzelne Anmeldeinformation nicht eindeutig ermittelt werden kann, wird das Promise mit `null` aufgelöst.

### Ausnahmen

- `AbortError` {{domxref("DOMException")}}

  - : Die Anfrage wurde durch einen Aufruf der {{domxref("AbortController.abort", "abort()")}}-Methode des {{domxref("AbortController")}}, das mit der [`signal`](#signal)-Option dieser Methode assoziiert ist, abgebrochen.

- `IdentityCredentialError` {{domxref("DOMException")}}

  - : Beim Anfordern eines {{domxref("IdentityCredential")}} ist die Anfrage an den [ID Assertion Endpoint](/de/docs/Web/API/FedCM_API/IDP_integration#the_id_assertion_endpoint) nicht in der Lage, die Authentifizierung zu validieren, und lehnt mit einer Fehlermeldung ab, die Informationen über den Grund enthält.

- `NetworkError` {{domxref("DOMException")}}

  - : Beim Anfordern eines {{domxref("IdentityCredential")}} hat der {{glossary("identity provider")}} (IdP) nicht innerhalb von 60 Sekunden geantwortet, die bereitgestellten Anmeldeinformationen waren nicht gültig/gefunden oder der Anmeldestatus des Browsers für den IdP ist auf `"logged-out"` gesetzt (siehe [Update login status using the Login Status API](/de/docs/Web/API/FedCM_API/IDP_integration#update_login_status_using_the_login_status_api) für mehr Informationen über den FedCM-Anmeldestatus). Im letzteren Fall kann es zu einer Verzögerung bei der Ablehnung kommen, um den IdP-Anmeldestatus nicht an die RP weiterzuleiten.

- `NotAllowedError` {{domxref("DOMException")}}

  - : Ausgelöst in einer der folgenden Situationen:

    - Die Nutzung dieser API wurde durch eine der folgenden [Berechtigungsrichtlinien](/de/docs/Web/HTTP/Permissions_Policy) blockiert:

      - {{HTTPHeader("Permissions-Policy/identity-credentials-get","identity-credentials-get")}}
      - {{HTTPHeader("Permissions-Policy/publickey-credentials-get","publickey-credentials-get")}}
      - {{HTTPHeader("Permissions-Policy/otp-credentials","otp-credentials")}}

    - Der aufrufende Ursprung ist ein [undurchsichtiger Ursprung](/de/docs/Web/HTTP/Headers/Origin#null).

- `SecurityError` {{domxref("DOMException")}}

  - : Die aufrufende Domäne ist keine gültige Domäne.

## Beispiele

### Abrufen einer föderierten Identitätsanmeldeinformation

Vertrauende Parteien können `get()` mit der `identity`-Option aufrufen, um eine Anfrage zu stellen, dass Benutzer sich über einen Identitätsanbieter (IdP) bei der vertrauenden Partei anmelden, mithilfe der Identitätsföderation. Eine typische Anfrage könnte wie folgt aussehen:

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

Schauen Sie sich [FedCM API](/de/docs/Web/API/FedCM_API) für weitere Details an, wie dies funktioniert. Dieser Aufruf startet den Anmeldefluss, der im [FedCM-Anmeldefluss](/de/docs/Web/API/FedCM_API/RP_sign-in#fedcm_sign-in_flow) beschrieben ist.

Ein ähnlicher Aufruf, der die Erweiterungen `context` und `loginHint` einschließt, könnte so aussehen:

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

Wenn der IdP nicht in der Lage ist, eine Anfrage an den [ID Assertion Endpoint](/de/docs/Web/API/FedCM_API/IDP_integration#the_id_assertion_endpoint) zu validieren, wird das Promise, das von `CredentialsContainer.get()` zurückgegeben wird, abgelehnt:

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
    // Behandeln Sie den Fehler auf irgendeine Weise, zum Beispiel durch Bereitstellen 
    // von Informationen, die dem Benutzer helfen, bei einem zukünftigen Anmeldeversuch Erfolg zu haben
    console.error(e);
  }
}
```

### Abrufen einer öffentlichen Schlüsselanmeldeinformation

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

Ein erfolgreicher `get()`-Aufruf gibt ein Promise zurück, das mit einem {{domxref("PublicKeyCredential")}}-Objekt aufgelöst wird, welches eine zuvor über eine WebAuthn-{{domxref("CredentialsContainer.create()", "create()")}}-Methode erstellte öffentliche Schlüsselanmeldeinformation darstellt, die nun zur Authentifizierung eines Benutzers verwendet wurde. Die {{domxref("PublicKeyCredential.response")}}-Eigenschaft enthält ein {{domxref("AuthenticatorAssertionResponse")}}-Objekt, das Zugriff auf mehrere nützliche Informationen bietet, darunter die Authentifikator-Daten, die Signatur und den Benutzer-Handle.

```js
navigator.credentials.get({ publicKey }).then((publicKeyCredential) => {
  const response = publicKeyCredential.response;

  // Zugriff auf Authentifikator-Daten-ArrayBuffer
  const authenticatorData = response.authenticatorData;

  // Zugriff auf Client-JSON
  const clientJSON = response.clientDataJSON;

  // Zugriff auf Signatur-ArrayBuffer
  const signature = response.signature;

  // Zugriff auf Benutzer-Handle-ArrayBuffer
  const userHandle = response.userHandle;
});
```

Einige dieser Daten müssen auf dem Server gespeichert werden — zum Beispiel die `signature`, um den Beweis zu erbringen, dass der Authentifikator den echten privaten Schlüssel besitzt, der zur Erstellung der Anmeldeinformation verwendet wurde, und den `userHandle`, um den Benutzer mit der Anmeldeinformation, dem Anmeldeversuch und anderen Daten zu verknüpfen.

Siehe [Authentifizierung eines Benutzers](/de/docs/Web/API/Web_Authentication_API#authenticating_a_user) für weitere Informationen darüber, wie der gesamte Ablauf funktioniert.

### Abrufen eines Einmalpassworts

Der untenstehende Code löst den Berechtigungsablauf des Browsers aus, wenn eine SMS-Nachricht eintrifft. Wenn die Erlaubnis erteilt wird, wird das Promise mit einem `OTPCredential`-Objekt erfüllt. Der enthaltene `code`-Wert wird dann als Wert eines {{htmlelement("input")}}-Formular-Elements gesetzt, welches dann abgesendet wird.

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

## Kompatibilität der Browser

{{Compat}}
