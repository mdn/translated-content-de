---
title: Vertrauenswürdige Partei für föderiertes Anmelden
slug: Web/API/FedCM_API/RP_sign-in
l10n:
  sourceCommit: 4761340e600daad008747fb9aa48e28748a78422
---

{{DefaultAPISidebar("FedCM API")}}

Dieser Artikel beschreibt den Prozess, durch den eine {{Glossary("Relying_party", "vertrauenswürdige Partei")}} (RP) die [Federated Credential Management (FedCM) API](/de/docs/Web/API/FedCM_API) nutzen kann, um ein föderiertes Anmelden über einen {{Glossary("Identity_provider", "Identitätsanbieter")}} (IdP) durchzuführen.

## Aufruf der `get()`-Methode

RPs können [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) mit einer `identity`-Option aufrufen, um zu verlangen, dass einem Benutzer die Möglichkeit gegeben wird, sich bei der RP mit einer Auswahl bestehender IdP-Konten anzumelden. Die IdPs identifizieren die RP anhand ihrer `clientId`, die jedem RP in einem separaten idP-spezifischen Prozess von jedem IdP ausgestellt wurde. Der gewählte IdP identifiziert den spezifischen Benutzer, der versucht, sich mittels der dem Browser bereitgestellten Anmeldedaten (Cookies) anzumelden, während des [Anmeldevorgangs](#fedcm-anmeldevorgang).

Falls der Benutzer sich noch nie bei einem IdP angemeldet hat oder abgemeldet ist, lehnt `CredentialsContainer.get()` mit einem Fehler ab und die RP kann den Benutzer zu einer IdP-Seite weiterleiten, um sich anzumelden oder ein Konto zu erstellen.

Andernfalls, wenn die Benutzeridentität erfolgreich vom gewählten IdP validiert wurde, gibt `CredentialsContainer.get()` ein versprochenes [`IdentityCredential`](/de/docs/Web/API/IdentityCredential)-Objekt zurück.

### Das `IdentityCredential.token`-Objekt

Das `IdentityCredential` umfasst eine `token`-Eigenschaft, die die RP verwenden kann, um den Benutzer anzumelden.

Die FedCM API definiert weder die Struktur des `token`-Objekts noch was die RP damit tun soll: Dies hängt vollständig vom föderierten Identitätsprotokoll ab, das der IdP implementiert.

Zum Beispiel im Profil [FedCM für OAuth](https://github.com/aaronpk/oauth-fedcm-profile), das beschreibt, wie das Protokoll [OpenID Connect (OIDC)](/de/docs/Web/Security/Authentication/Federated_identity#openid_connect) mit FedCM implementiert werden könnte, ist das Token, das von `CredentialsContainer.get()` zurückgegeben wird, ein OAuth-Autorisierungscode. Die RP verwendet diesen Code, um das Identitätstoken vom Token-Endpunkt des IdP zu erhalten.

Wenn eine RP sich dazu entschließt, mit einem bestimmten IdP zu arbeiten, wird der IdP Anweisungen geben, wie der zurückgegebene `token`-Wert zu verwenden ist.

### Beispielanfrage

Eine typische Anfrage könnte so aussehen:

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
        {
          // ...
        },
      ],
    },
  });
}
```

Die `identity.providers`-Eigenschaft nimmt ein Array an, das ein oder mehrere Objekte beinhaltet, die den Pfad zu jeder IdP-Konfigurationsdatei (`configURL`) und die von IdP ausgegebene `clientId` der RP spezifizieren.

Das vorherige Beispiel beinhaltet auch einige optionale Funktionen:

- `identity.context` spezifiziert den Kontext, in dem sich der Benutzer mit FedCM authentifiziert. Zum Beispiel, ob es eine erstmalige Anmeldung für dieses Konto ist, oder eine Anmeldung mit einem bestehenden Konto. Der Browser verwendet diese Informationen, um den Text in seiner FedCM-Benutzeroberfläche entsprechend dem Kontext anzupassen.
- Die `params`-Eigenschaft enthält alle Parameter, die dieser IdP benötigt. Ihr Aufbau und Inhalt wird durch den spezifischen IdP bestimmt.
- Die `loginHint`-Eigenschaft liefert einen Hinweis auf die Kontenauswahl(en), die der Browser für die Benutzeranmeldung präsentieren sollte. Dieser Hinweis wird mit den `login_hints`-Werten abgeglichen, die der IdP am [Accounts List Endpoint](/de/docs/Web/API/FedCM_API/IDP_integration#the_accounts_list_endpoint) bereitstellt.

Der Browser fordert die IdP-Konfigurationsdateien an und führt den unten beschriebenen Anmeldevorgang durch. Weitere Informationen über die Art der Interaktion, die ein Benutzer von der browsergestützten Benutzeroberfläche erwarten könnte, finden Sie unter [Implementieren einer Identitätslösung mit FedCM auf der Seite der Vertrauenspartei](https://developer.chrome.com/docs/identity/fedcm/implement/relying-party).

## FedCM-Anmeldevorgang

Am Anmeldevorgang sind drei Parteien beteiligt — die RP-App, der Browser selbst und der IdP. Das folgende Diagramm fasst visuell zusammen, was passiert.

![eine visuelle Darstellung des unten detailliert beschriebenen Flusses](fedcm-flow.png)

Der Vorgang ist wie folgt:

1. Die RP ruft [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) auf, um den Anmeldevorgang zu starten.

2. Aus der `configURL`, die für jeden IdP bereitgestellt wird, fordert der Browser zwei Dateien an:
   1. Die wohlbekannte Datei (`/.well-known/web-identity`), die unter `/.well-known/web-identity` an der {{Glossary("registrable_domain", "registrierbaren Domäne")}} der `configURL` verfügbar ist.
   2. Die [IdP-Konfigurationsdatei](/de/docs/Web/API/FedCM_API/IDP_integration#provide_a_config_file_and_endpoints) (`/config.json`), die an der `configURL` verfügbar ist.

   Diese sind beide [`GET`](/de/docs/Web/HTTP/Reference/Methods/GET)-Anfragen, die keine Cookies haben und keinen Weiterleitungen folgen. Dies verhindert effektiv, dass IdPs erfahren, wer die Anfrage gemacht hat und welche RP versucht, sich zu verbinden.

   Alle Anfragen, die vom Browser über FedCM gesendet werden, enthalten einen `{{httpheader("Sec-Fetch-Dest")}}: webidentity`-Header, um {{Glossary("CSRF", "CSRF")}}-Angriffe zu verhindern. Alle IdP-Endpunkte müssen bestätigen, dass dieser Header enthalten ist.

3. Die IdPs antworten mit der angeforderten wohlbekannten Datei und den `config.json`-Dateien. Der Browser validiert die URL der Konfigurationsdatei in der `get()`-Anfrage gegen die Liste der gültigen Konfigurations-URLs in der wohlbekannten Datei.

4. Wenn der Browser den [Anmeldestatus eines IdP](/de/docs/Web/API/FedCM_API/IDP_integration#update_login_status_using_the_login_status_api) auf `"eingeloggt"` gesetzt hat, macht er eine berechtigte Anfrage (d.h. mit einem Cookie, das den angemeldeten Benutzer identifiziert) zum [`accounts_endpoint`](/de/docs/Web/API/FedCM_API/IDP_integration#the_accounts_list_endpoint) innerhalb der IdP-Konfigurationsdatei für die Kontodetails des Benutzers. Dies ist eine `GET`-Anfrage mit Cookies, jedoch ohne `client_id`-Parameter oder {{httpheader("Origin")}}-Header. Dies verhindert effektiv, dass IdPs erfahren, bei welcher RP sich der Benutzer anmelden möchte. Infolgedessen ist die zurückgegebene Liste der Konten RP-agnostisch.

   > [!NOTE]
   > Wenn alle Anmeldestatus der IdPs auf `"abgemeldet"` gesetzt sind, lehnt der `get()`-Aufruf mit einer `NetworkError`-[`DOMException`](/de/docs/Web/API/DOMException) ab und macht keine Anfrage an den `accounts_endpoint` eines IdP. In diesem Fall liegt es in der Verantwortung des Entwicklers, den Ablauf zu handhaben, z.B., indem der Benutzer aufgefordert wird, sich bei einem geeigneten IdP anzumelden. Beachten Sie, dass es zu einer Verzögerung bei der Ablehnung kommen kann, um das Auslaufen des Anmeldestatus des IdP an die RP zu vermeiden.

5. Die IdPs antworten mit den Kontoinformationen, die von ihren `accounts_endpoint`s angefordert wurden. Dies sind Arrays aller Konten, die mit den IdP-Cookies des Benutzers für alle RPs assoziiert sind, die mit einem IdP verbunden sind.

6. {{optional_inline}} Wenn in einer IdP-Konfigurationsdatei enthalten, macht der Browser eine unberechtigte Anfrage an den [`client_metadata_endpoint`](/de/docs/Web/API/FedCM_API/IDP_integration#the_client_metadata_endpoint) für den Standort der Dienstleistungs- und Datenschutzerklärungsseiten der RP. Dies ist eine `GET`-Anfrage, die mit dem `clientId`, das in den `get()`-Aufruf als Parameter übermittelt wurde, gesendet wird, ohne Cookies.

7. {{optional_inline}} Die IdPs antworten mit den URLs, die vom `client_metadata_endpoint` angefordert wurden.

8. Der Browser verwendet die Informationen, die durch die vorherigen beiden Anfragen erhalten wurden, um die Benutzeroberfläche zu erstellen, die den Benutzer auffordert, einen IdP (falls mehr als einer angemeldet ist) und ein Konto auszuwählen, um sich bei der RP anzumelden. Die Benutzeroberfläche fordert den Benutzer auch um Erlaubnis, sich mit ihrem ausgewählten föderierten IdP-Konto bei der RP anzumelden.

   > [!NOTE]
   > In diesem Stadium, wenn der Benutzer zuvor mit einem föderierten RP-Konto im aktuellen Browserfenster authentifiziert wurde (d.h. ein neues Konto bei der RP erstellt oder sich mit einem bestehenden Konto auf der RP-Website angemeldet hat), kann er unter Umständen **automatisch erneut authentifiziert** werden, abhängig davon, was die [`mediation`](/de/docs/Web/API/CredentialsContainer/get#mediation)-Option im `get()`-Aufruf einstellt. Falls ja, wird der Benutzer ohne Eingabe seiner Zugangsdaten automatisch angemeldet, sobald `get()` aufgerufen wird. Weitere Informationen finden Sie im Abschnitt über [Automatische Reauthentifizierung](#automatische_reauthentifizierung).

9. Wenn der Benutzer die Erlaubnis erteilt, macht der Browser eine berechtigte Anfrage an den [`id_assertion_endpoint`](/de/docs/Web/API/FedCM_API/IDP_integration#the_id_assertion_endpoint), um ein Validierungstoken vom gewählten IdP für das ausgewählte Konto anzufordern.

   Die Anmeldedaten werden in einer HTTP-`[`POST`](/de/docs/Web/HTTP/Reference/Methods/POST)`-Anfrage mit Cookies und einem Inhaltstyp von `application/x-www-form-urlencoded` gesendet.

   Wenn der Aufruf fehlschlägt, wird eine Fehlermenge zurückgegeben, wie in [ID Assertion Error Responses](/de/docs/Web/API/FedCM_API/IDP_integration#id_assertion_error_responses) erklärt, und das von `get()` zurückgegebene Versprechen wird mit dem Fehler abgelehnt.

10. Der gewählte IdP prüft, ob die von der RP gesendete Konto-ID mit der ID des bereits angemeldeten Kontos übereinstimmt und dass der `Origin` mit dem Ursprung der RP übereinstimmt, der im Voraus beim IdP registriert wurde. Wenn alles in Ordnung erscheint, antwortet er mit dem angeforderten Validierungstoken.

    > [!NOTE]
    > Der Ursprung der RP wird beim IdP in einem völlig separaten Prozess registriert, wenn die RP sich erstmals mit dem IdP integriert. Dieser Prozess ist spezifisch für jeden IdP.

11. Wenn der Vorgang abgeschlossen ist, wird das `get()`-Versprechen mit einem [`IdentityCredential`](/de/docs/Web/API/IdentityCredential)-Objekt gelöst, das weitere RP-Funktionalität bietet. Am bemerkenswertesten ist, dass dieses Objekt ein Token enthält, das die RP bestätigen kann, dass es vom IdP kommt (unter Verwendung eines Zertifikats) und das vertrauenswürdige Informationen über den angemeldeten Benutzer enthält. Sobald die RP das Token validiert hat, können sie die enthaltenen Informationen verwenden, um den Benutzer anzumelden und eine neue Sitzung zu starten, ihn für ihren Service zu registrieren, usw. Das Format und die Struktur des Tokens hängen vom IdP ab und haben nichts mit der FedCM API zu tun (die RP muss den Anweisungen des IdP folgen).

## Aktiver versus passiver Modus

Es gibt zwei verschiedene UI-Modi, die der Browser einem RP-Benutzer beim Anmelden über die FedCM API bereitstellen kann, den **`aktiven`** und den **`passiven`** Modus. Welcher Modus zum Anmelden verwendet wird, wird durch die [`mode`](/de/docs/Web/API/IdentityCredentialRequestOptions#mode)-Option des `identity`-Objekts gesteuert:

```js
async function signIn() {
  const identityCredential = await navigator.credentials.get({
    identity: {
      mode: active,
      providers: [
        {
          configURL: "https://accounts.idp.example/config.json",
          clientId: "********",
        },
      ],
    },
  });
}
```

Der Standardwert für `mode` ist `passive`. Wenn `mode` nicht gesetzt ist oder explizit auf `passive` gesetzt ist, kann der Browser den Anmeldevorgang über einen `get()`-Aufruf ohne direkte Benutzerinteraktion einleiten. Beispielsweise möchten Sie möglicherweise den Anmeldevorgang einleiten, sobald der Benutzer zur Anmeldeseite navigiert, vorausgesetzt, sie haben IdP-Konten zum Anmelden. In diesem Modus zeigt der Browser dem Benutzer typischerweise ein Anmeldedialogfenster an, das alle in der `providers`-Objekte spezifizierten Anmeldeoptionen enthält, und sie können die für sie passende Option auswählen und dann die entsprechenden Anmeldedaten eingeben.

Wenn `mode` auf `active` gesetzt ist, erfordert der Browser, dass der Anmeldevorgang durch eine Benutzeraktion wie das Klicken eines Buttons initiiert wird ({{Glossary("transient_activation", "transiente Aktivierung")}} ist erforderlich), und das `providers`-Objekt kann nur eine `1`-Länge haben, sonst wird das `get()`-Versprechen ablehnen. Dieser Modus wird typischerweise verwendet, wenn die RP einen separaten Button für jede IdP-Wahl bereitstellen möchte. Wenn der Benutzer einen dieser Buttons anklickt, erscheint ein vereinfachtes Dialogfenster, das nur erfordert, dass sie die Anmeldedaten für dieses Konto eingeben.

Siehe [FedCM UI-Modi](https://developer.chrome.com/docs/identity/fedcm/overview#fedcm_ui_modes) auf developer.chrome.com, um ein Beispiel dafür zu sehen, wie die verschiedenen UI-Modi in Google Chrome präsentiert werden.

## Automatische Reauthentifizierung

Die FedCM-Auto-Reauthentifizierung ermöglicht es Benutzern, sich automatisch erneut zu authentifizieren, wenn sie versuchen, sich wieder bei einer RP anzumelden, nachdem sie sich ursprünglich über FedCM authentifiziert haben. "Ursprüngliche Authentifizierung" bezieht sich darauf, wann der Benutzer ein Konto erstellt oder sich zum ersten Mal über das FedCM-Anmeldedialogfenster auf der RP-Seite auf der gleichen Browserinstanz bei der RP-Website anmeldet.

Nach der ursprünglichen Authentifizierung kann die automatische Reauthentifizierung verwendet werden, um wieder automatisch auf der RP-Website angemeldet zu werden, ohne dass dem Benutzer ein "Weiter als..."-Bestätigungsaufruf gezeigt wird. Wenn der Benutzer kürzlich die Erlaubnis erteilt hat, dass eine föderierte Anmeldung mit einem bestimmten Konto erfolgen darf, gibt es keinen Datenschutz- oder Sicherheitsvorteil, sofort eine weitere ausdrückliche Benutzerbestätigung zu erzwingen.

Das Verhalten der automatischen Reauthentifizierung wird durch die [`mediation`](/de/docs/Web/API/CredentialsContainer/get#mediation)-Option im `get()`-Aufruf gesteuert:

```js
async function signIn() {
  const identityCredential = await navigator.credentials.get({
    identity: {
      providers: [
        {
          configURL: "https://accounts.idp.example/config.json",
          clientId: "********",
        },
      ],
    },
    mediation: "optional", // this is the default
  });

  // isAutoSelected is true if auto-reauthentication occurred.
  const isAutoSelected = identityCredential.isAutoSelected;
}
```

Eine automatische Reauthentifizierung kann auftreten, wenn `mediation` auf `optional` oder `silent` gesetzt ist.

Mit diesen `mediation`-Optionen wird die automatische Reauthentifizierung unter den folgenden Bedingungen erfolgen:

- FedCM ist verfügbar. Zum Beispiel hat der Benutzer FedCM weder global noch in den Einstellungen der RP deaktiviert.
- Der Benutzer hat nur ein Konto verwendet, um sich über FedCM auf dieser Browserinstanz bei der RP-Website anzumelden. Wenn Konten für mehrere IdPs existieren, wird der Benutzer nicht automatisch erneut authentifiziert.
- Der Benutzer ist mit diesem Konto beim IdP angemeldet.
- Es hat keine automatische Reauthentifizierung in den letzten 10 Minuten stattgefunden. Diese Einschränkung wird eingeführt, um zu verhindern, dass Benutzer sofort nach dem Abmelden automatisch erneut authentifiziert werden – was zu einer ziemlich verwirrenden Benutzererfahrung führen würde.
- Die RP hat [`preventSilentAccess()`](/de/docs/Web/API/CredentialsContainer/preventSilentAccess) nach der vorherigen Anmeldung nicht aufgerufen. Dies kann von einer RP verwendet werden, um die automatische Reauthentifizierung explizit zu deaktivieren, wenn gewünscht.
- Der UI-Modus ist [passive](<>).

Wenn diese Bedingungen erfüllt sind, wird der Versuch, den Benutzer automatisch erneut zu authentifizieren, gestartet, sobald `get()` aufgerufen wird. Wenn die automatische Reauthentifizierung erfolgreich ist, wird der Benutzer wieder auf der RP-Website angemeldet, ohne dass ihm eine Bestätigungsaufforderung angezeigt wird, und zwar mit demselben IdP-Konto und validierten Token wie zuvor.

Wenn die automatische Reauthentifizierung fehlschlägt, hängt das Verhalten vom gewählten `mediation`-Wert ab:

- `optional`: dem Benutzer _wird_ das Dialogfeld angezeigt und er wird erneut um Bestätigung gebeten. Folglich macht es in der Regel Sinn, diese Option auf einer Seite zu verwenden, auf der der Benutzerfluss nicht in vollem Gange ist, wie etwa einer RP-Anmeldeseite.
- `silent`: Das `get()`-Versprechen lehnt ab und der Entwickler muss den Benutzer zurück zur Anmeldeseite führen, um den Prozess erneut zu starten. Diese Option macht auf Seiten Sinn, auf denen ein Benutzerfluss in vollem Gange ist und Sie ihn bis zum Abschluss angemeldet halten müssen, zum Beispiel auf den Seiten eines Checkout-Flusses auf einer E-Commerce-Website.

> [!NOTE]
> Die [`IdentityCredential.isAutoSelected`](/de/docs/Web/API/IdentityCredential/isAutoSelected)-Eigenschaft gibt an, ob die föderierte Anmeldung über automatische Reauthentifizierung durchgeführt wurde. Dies ist hilfreich, um die API-Leistung zu bewerten und die Benutzererfahrung entsprechend zu verbessern. Wenn dies nicht verfügbar ist, wird der Benutzer möglicherweise aufgefordert, sich mit ausdrücklicher Benutzermediation anzumelden, was ein `get()`-Aufruf mit `mediation: required` ist.

## Trennen einer föderierten Anmeldung

Die RP kann ein angegebenes föderiertes Anmeldekonto vom zugehörigen IdP trennen, indem sie [`IdentityCredential.disconnect()`](/de/docs/Web/API/IdentityCredential/disconnect_static) aufruft. Diese Funktion kann von einem Top-Level-RP-Rahmen aufgerufen werden.

```js
IdentityCredential.disconnect({
  configURL: "https://idp.example.com/config.json",
  clientId: "rp123",
  accountHint: "account456",
});
```

Damit ein `disconnect()`-Aufruf funktioniert, muss der IdP einen [`disconnect_endpoint`](/de/docs/Web/API/FedCM_API/IDP_integration#disconnect_endpoint) in seiner Konfigurationsdatei enthalten. Siehe [Der Disconnect-Endpunkt](/de/docs/Web/API/FedCM_API/IDP_integration#the_disconnect_endpoint) für weitere Details zur zugrunde liegenden HTTP-Kommunikation.

## Siehe auch

- [Federated Credential Management API](https://developer.chrome.com/docs/identity/fedcm/overview) auf developer.chrome.com (2023)
