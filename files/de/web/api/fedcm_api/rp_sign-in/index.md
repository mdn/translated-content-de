---
title: Föderierte Anmeldung einer Relying Party
slug: Web/API/FedCM_API/RP_sign-in
l10n:
  sourceCommit: 2e0b9415ed31484a4830e214eff9e06e408c7261
---

{{DefaultAPISidebar("FedCM API")}}

Dieser Artikel beschreibt den Prozess, mit dem eine {{Glossary("Relying_party", "Relying Party")}} (RP) die [Federated Credential Management (FedCM) API](/de/docs/Web/API/FedCM_API) verwenden kann, um eine föderierte Anmeldung über einen {{Glossary("Identity_provider", "Identity Provider")}} (IdP) durchzuführen.

## Aufruf der Methode `get()`

RPs können [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) mit einer `identity`-Option aufrufen, um anzufordern, dass einem Benutzer die Möglichkeit gegeben wird, sich bei der RP mit einer Auswahl vorhandener IdP-Konten anzumelden. Die IdPs identifizieren die RP anhand ihrer `clientId`, die von jedem IdP in einem separaten IdP-spezifischen Prozess an die RP ausgegeben wurde. Der ausgewählte IdP identifiziert den spezifischen Benutzer, der versucht, sich mit den während des [Anmeldeablaufs](#fedcm-anmeldeablauf) für den Browser bereitgestellten Anmeldedaten (Cookies) anzumelden.

Wenn der Benutzer sich noch nie bei einem IdP angemeldet hat oder abgemeldet ist, lehnt `CredentialsContainer.get()` mit einem Fehler ab und die RP kann den Benutzer auf eine IdP-Seite weiterleiten, um sich anzumelden oder ein Konto zu erstellen.

Andernfalls, wenn die Benutzeridentität vom ausgewählten IdP erfolgreich validiert wurde, gibt `CredentialsContainer.get()` ein Promise zurück, das mit einem [`IdentityCredential`](/de/docs/Web/API/IdentityCredential)-Objekt erfüllt wird.

### Das Objekt `IdentityCredential.token`

Das `IdentityCredential` enthält eine `token`-Eigenschaft, die die RP verwenden kann, um den Benutzer anzumelden.

Die FedCM API definiert weder die Struktur des `token`-Objekts noch, was die RP damit tun soll: Dies hängt vollständig vom föderierten Identitätsprotokoll ab, das der IdP implementiert.

Beispielsweise ist im Profil [FedCM for OAuth](https://github.com/aaronpk/oauth-fedcm-profile), das beschreibt, wie das Protokoll [OpenID Connect (OIDC)](/de/docs/Web/Security/Authentication/Federated_identity#openid_connect) mit FedCM implementiert werden könnte, das von `CredentialsContainer.get()` zurückgegebene Token ein OAuth-Autorisierungscode. Die RP verwendet diesen Code, um das Identity-Token vom Token-Endpunkt des IdP abzurufen.

Wenn eine RP sich entscheidet, mit einem bestimmten IdP zusammenzuarbeiten, stellt der IdP Anweisungen zur Verwendung des zurückgegebenen `token`-Werts bereit.

### Beispielanfrage

Eine typische Anfrage könnte wie folgt aussehen:

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

Die Eigenschaft `identity.providers` akzeptiert ein Array mit einem oder mehreren Objekten, die den Pfad zur Konfigurationsdatei jedes IdP (`configURL`) und den vom IdP ausgegebenen Client-Identifier der RP (`clientId`) angeben.

Das vorherige Beispiel enthält außerdem einige optionale Funktionen:

- `identity.context` gibt den Kontext an, in dem sich der Benutzer mit FedCM authentifiziert. Handelt es sich beispielsweise um eine erstmalige Registrierung für dieses Konto oder um eine Anmeldung mit einem vorhandenen Konto? Der Browser verwendet diese Information, um den Text in seiner FedCM-Benutzeroberfläche an den Kontext anzupassen.
- Die Eigenschaft `params` enthält alle Parameter, die dieser IdP benötigt. Ihre Struktur und ihr Inhalt werden vom jeweiligen IdP bestimmt.
- Die Eigenschaft `loginHint` liefert einen Hinweis zu den Kontooptionen, die der Browser für die Benutzeranmeldung anzeigen soll. Dieser Hinweis wird mit den `login_hints`-Werten abgeglichen, die der IdP am [Endpunkt für die Kontenliste](/de/docs/Web/API/FedCM_API/IDP_integration#the_accounts_list_endpoint) bereitstellt.

Der Browser fordert die IdP-Konfigurationsdateien an und führt den unten detailliert beschriebenen Anmeldeablauf aus. Weitere Informationen darüber, welche Art von Interaktion ein Benutzer von der vom Browser bereitgestellten Benutzeroberfläche erwarten kann, finden Sie unter [Implement an identity solution with FedCM on the Relying Party side](https://developer.chrome.com/docs/identity/fedcm/implement/relying-party).

## FedCM-Anmeldeablauf

Am Anmeldeablauf sind drei Parteien beteiligt — die RP-App, der Browser selbst und der IdP. Das folgende Diagramm fasst visuell zusammen, was geschieht.

![eine visuelle Darstellung des unten detailliert beschriebenen Ablaufs](fedcm-flow.png)

Der Ablauf ist wie folgt:

1. Die RP ruft [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) auf, um den Anmeldeablauf zu starten.

2. Über die für jeden IdP bereitgestellte `configURL` fordert der Browser zwei Dateien an:
   1. Die Well-known-Datei (`/.well-known/web-identity`), verfügbar unter `/.well-known/web-identity` auf der {{Glossary("registrable_domain", "registrierbaren Domain")}} der `configURL`.
   2. Die [IdP-Konfigurationsdatei](/de/docs/Web/API/FedCM_API/IDP_integration#provide_a_config_file_and_endpoints) (`/config.json`), verfügbar unter der `configURL`.

   Dabei handelt es sich jeweils um [`GET`](/de/docs/Web/HTTP/Reference/Methods/GET)-Anfragen, die keine Cookies enthalten und keinen Weiterleitungen folgen. Dadurch wird wirksam verhindert, dass IdPs erfahren, wer die Anfrage gestellt hat und welche RP versucht, eine Verbindung herzustellen.

   Alle vom Browser über FedCM gesendeten Anfragen enthalten einen `{{httpheader("Sec-Fetch-Dest")}}: webidentity`-Header, um {{Glossary("CSRF", "CSRF")}}-Angriffe zu verhindern. Alle IdP-Endpunkte müssen bestätigen, dass dieser Header enthalten ist.

3. Die IdPs antworten mit der angeforderten Well-known-Datei und den Dateien `config.json`. Der Browser validiert die URL der Konfigurationsdatei in der `get()`-Anfrage gegen die Liste gültiger Konfigurations-URLs in der Well-known-Datei.

4. Wenn der Browser einen [Anmeldestatus eines IdP](/de/docs/Web/API/FedCM_API/IDP_integration#update_login_status_using_the_login_status_api) auf `"logged-in"` gesetzt hat, sendet er eine Anfrage mit Anmeldedaten (also mit einem Cookie, das den angemeldeten Benutzer identifiziert) an den [`accounts_endpoint`](/de/docs/Web/API/FedCM_API/IDP_integration#the_accounts_list_endpoint) in der IdP-Konfigurationsdatei, um die Kontodetails des Benutzers abzurufen. Dies ist eine `GET`-Anfrage mit Cookies, jedoch ohne einen `client_id`-Parameter oder den {{httpheader("Origin")}}-Header. Dadurch wird wirksam verhindert, dass IdPs erfahren, bei welcher RP der Benutzer versucht, sich anzumelden. Folglich ist die zurückgegebene Kontenliste RP-unabhängig.

   > [!NOTE]
   > Wenn die Anmeldestatus aller IdPs `"logged-out"` sind, wird der `get()`-Aufruf mit einer `NetworkError`-[`DOMException`](/de/docs/Web/API/DOMException) abgelehnt und es wird keine Anfrage an den `accounts_endpoint` eines IdP gestellt. In diesem Fall liegt es am Entwickler, den Ablauf zu behandeln, beispielsweise indem der Benutzer aufgefordert wird, sich bei einem geeigneten IdP anzumelden. Beachten Sie, dass die Ablehnung möglicherweise verzögert erfolgt, um zu vermeiden, dass der IdP-Anmeldestatus an die RP preisgegeben wird.

5. Die IdPs antworten mit den von ihren `accounts_endpoint`s angeforderten Kontoinformationen. Dies sind Arrays aller Konten, die den IdP-Cookies des Benutzers für alle mit einem IdP verbundenen RPs zugeordnet sind.

6. {{optional_inline}} Wenn sie in einer IdP-Konfigurationsdatei enthalten ist, sendet der Browser eine Anfrage ohne Anmeldedaten an den [`client_metadata_endpoint`](/de/docs/Web/API/FedCM_API/IDP_integration#the_client_metadata_endpoint), um die Speicherorte der RP-Seiten für Nutzungsbedingungen und Datenschutzrichtlinien abzurufen. Dies ist eine `GET`-Anfrage, die mit der an den `get()`-Aufruf übergebenen `clientId` als Parameter und ohne Cookies gesendet wird.

7. {{optional_inline}} Die IdPs antworten mit den vom `client_metadata_endpoint` angeforderten URLs.

8. Der Browser verwendet die durch die vorherigen beiden Anfragesätze erhaltenen Informationen, um die Benutzeroberfläche zu erstellen, die den Benutzer auffordert, einen IdP auszuwählen (wenn bei mehr als einem eine Anmeldung besteht) und ein Konto, mit dem er sich bei der RP anmelden möchte. Die Benutzeroberfläche bittet den Benutzer außerdem um die Berechtigung, sich bei der RP mit dem ausgewählten föderierten IdP-Konto anzumelden.

   > [!NOTE]
   > Wenn sich der Benutzer zu diesem Zeitpunkt in der aktuellen Browserinstanz zuvor mit einem föderierten RP-Konto authentifiziert hat (d.h. ein neues Konto bei der RP erstellt oder sich mit einem vorhandenen Konto auf der Website der RP angemeldet hat), kann er möglicherweise eine **automatische Reauthentifizierung** durchführen, abhängig davon, worauf die Option [`mediation`](/de/docs/Web/API/CredentialsContainer/get#mediation) im `get()`-Aufruf gesetzt ist. In diesem Fall wird der Benutzer automatisch angemeldet, ohne seine Anmeldedaten einzugeben, sobald `get()` aufgerufen wird. Weitere Details finden Sie im Abschnitt [Automatische Reauthentifizierung](#automatische-reauthentifizierung).

9. Wenn der Benutzer die Berechtigung erteilt, sendet der Browser eine Anfrage mit Anmeldedaten an den [`id_assertion_endpoint`](/de/docs/Web/API/FedCM_API/IDP_integration#the_id_assertion_endpoint), um vom ausgewählten IdP ein Validierungstoken für das ausgewählte Konto anzufordern.

   Die Anmeldedaten werden in einer HTTP-[`POST`](/de/docs/Web/HTTP/Reference/Methods/POST)-Anfrage mit Cookies und dem Content-Type `application/x-www-form-urlencoded` gesendet.

   Wenn der Aufruf fehlschlägt, wird eine Fehler-Payload zurückgegeben, wie unter [Fehlerantworten für ID-Assertions](/de/docs/Web/API/FedCM_API/IDP_integration#id_assertion_error_responses) erläutert, und das von `get()` zurückgegebene Promise wird mit dem Fehler abgelehnt.

10. Der ausgewählte IdP prüft, ob die von der RP gesendete Konto-ID mit der ID des bereits angemeldeten Kontos übereinstimmt und ob `Origin` dem Ursprung der RP entspricht, der zuvor beim IdP registriert wurde. Wenn alles korrekt ist, antwortet er mit dem angeforderten Validierungstoken.

    > [!NOTE]
    > Der Ursprung der RP wird in einem vollständig separaten Prozess beim IdP registriert, wenn sich die RP erstmals in den IdP integriert. Dieser Prozess ist für jeden IdP spezifisch.

11. Wenn der Ablauf abgeschlossen ist, wird das `get()`-Promise mit einem [`IdentityCredential`](/de/docs/Web/API/IdentityCredential)-Objekt aufgelöst, das weitere RP-Funktionalität bereitstellt. Insbesondere enthält dieses Objekt ein Token, dessen Herkunft vom IdP die RP mithilfe eines Zertifikats überprüfen kann und das vertrauenswürdige Informationen über den angemeldeten Benutzer enthält. Sobald die RP das Token validiert, kann sie die enthaltenen Informationen verwenden, um den Benutzer anzumelden und eine neue Sitzung zu starten, ihn für ihren Dienst zu registrieren usw. Format und Struktur des Tokens hängen vom IdP ab und haben nichts mit der FedCM API zu tun (die RP muss den Anweisungen des IdP folgen).

## Aktiver gegenüber passivem Modus

Der Browser kann einem RP-Benutzer bei der Anmeldung über die FedCM API zwei verschiedene UI-Modi bereitstellen: den Modus **`active`** und den Modus **`passive`**. Welcher Modus für die Anmeldung verwendet wird, wird durch die Option [`mode`](/de/docs/Web/API/IdentityCredentialRequestOptions#mode) des `identity`-Objekts gesteuert:

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

Der Standardwert für `mode` ist `passive`. Wenn `mode` nicht gesetzt oder explizit auf `passive` gesetzt ist, kann der Browser den Anmeldeablauf über einen `get()`-Aufruf ohne direkte Benutzerinteraktion starten. Beispielsweise möchten Sie den Anmeldeablauf möglicherweise starten, sobald der Benutzer zur Anmeldeseite navigiert, sofern er über IdP-Konten zur Anmeldung verfügt. In diesem Modus zeigen Browser dem Benutzer typischerweise ein Anmeldedialogfenster mit allen unterschiedlichen Anmeldeoptionen an, die im Objekt `providers` angegeben sind. Der Benutzer kann die passende Option auswählen und anschließend die entsprechenden Anmeldedaten eingeben.

Wenn `mode` auf `active` gesetzt ist, muss der Browser den Anmeldeablauf durch eine Benutzeraktion wie das Klicken auf eine Schaltfläche initiieren ({{Glossary("transient_activation", "transient activation")}} ist erforderlich), und das Objekt `providers` darf nur die Länge `1` haben; andernfalls wird das `get()`-Promise abgelehnt. Dieser Modus wird typischerweise verwendet, wenn die RP für jede IdP-Auswahl eine separate Schaltfläche bereitstellen möchte. Wenn der Benutzer auf eine dieser Schaltflächen klickt, erscheint ein vereinfachtes Dialogfenster, in dem er nur die Anmeldedaten für dieses Konto eingeben muss.

Ein Beispiel dafür, wie die verschiedenen UI-Modi in Google Chrome dargestellt werden, finden Sie unter [FedCM UI modes](https://developer.chrome.com/docs/identity/fedcm/overview#fedcm_ui_modes) auf developer.chrome.com.

## Automatische Reauthentifizierung

Die automatische Reauthentifizierung von FedCM ermöglicht es Benutzern, sich automatisch erneut zu authentifizieren, wenn sie nach ihrer anfänglichen Authentifizierung mit FedCM versuchen, sich erneut bei einer RP anzumelden. „Anfängliche Authentifizierung“ bezieht sich darauf, wenn der Benutzer auf derselben Browserinstanz zum ersten Mal ein Konto erstellt oder sich über den FedCM-Anmeldedialog auf der RP-Website bei der RP anmeldet.

Nach der anfänglichen Authentifizierung kann die automatische Reauthentifizierung verwendet werden, um sich erneut automatisch auf der RP-Website anzumelden, ohne dem Benutzer eine Bestätigungsaufforderung wie „Weiter als ...“ anzeigen zu müssen. Wenn der Benutzer kürzlich die Berechtigung erteilt hat, die föderierte Anmeldung mit einem bestimmten Konto zuzulassen, bringt die sofortige erneute Durchsetzung einer expliziten Benutzerbestätigung keinen Vorteil für Datenschutz oder Sicherheit.

Das Verhalten der automatischen Reauthentifizierung wird durch die Option [`mediation`](/de/docs/Web/API/CredentialsContainer/get#mediation) im `get()`-Aufruf gesteuert:

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

Eine automatische Reauthentifizierung kann erfolgen, wenn `mediation` auf `optional` oder `silent` gesetzt ist.

Mit diesen `mediation`-Optionen erfolgt die automatische Reauthentifizierung unter folgenden Bedingungen:

- FedCM ist verfügbar. Der Benutzer hat FedCM beispielsweise weder global noch in den Einstellungen der RP deaktiviert.
- Der Benutzer hat sich in diesem Browser über FedCM nur mit einem Konto auf der RP-Website angemeldet. Wenn Konten für mehrere IdPs vorhanden sind, wird der Benutzer nicht automatisch erneut authentifiziert.
- Der Benutzer ist mit diesem Konto beim IdP angemeldet.
- Innerhalb der letzten 10 Minuten hat keine automatische Reauthentifizierung stattgefunden. Diese Einschränkung soll verhindern, dass Benutzer unmittelbar nach ihrer Abmeldung automatisch erneut authentifiziert werden — was zu einer ziemlich verwirrenden Benutzererfahrung führen würde.
- Die RP hat nach der vorherigen Anmeldung nicht [`preventSilentAccess()`](/de/docs/Web/API/CredentialsContainer/preventSilentAccess) aufgerufen. Dies kann von einer RP verwendet werden, um die automatische Reauthentifizierung bei Bedarf explizit zu deaktivieren.
- Der UI-Modus ist [passiv](#aktiver-gegenüber-passivem-modus).

Wenn diese Bedingungen erfüllt sind, beginnt ein Versuch, den Benutzer automatisch erneut zu authentifizieren, sobald `get()` aufgerufen wird. Wenn die automatische Reauthentifizierung erfolgreich ist, wird der Benutzer erneut auf der RP-Website angemeldet, ohne dass ihm eine Bestätigungsaufforderung angezeigt wird, und zwar mit demselben IdP-Konto und validierten Token wie zuvor.

Wenn die automatische Reauthentifizierung fehlschlägt, hängt das Verhalten vom gewählten Wert für `mediation` ab:

- `optional`: Dem Benutzer _wird_ erneut das Dialogfeld angezeigt und er wird um Bestätigung gebeten. Daher ist diese Option üblicherweise sinnvoll auf einer Seite, auf der sich eine User Journey nicht gerade im Ablauf befindet, etwa einer RP-Anmeldeseite.
- `silent`: Das `get()`-Promise wird abgelehnt und der Entwickler muss den Benutzer zurück zur Anmeldeseite führen, um den Prozess erneut zu starten. Diese Option ist sinnvoll auf Seiten, auf denen sich eine User Journey im Ablauf befindet und der Benutzer bis zum Abschluss angemeldet bleiben muss, beispielsweise auf den Seiten eines Checkout-Ablaufs auf einer E-Commerce-Website.

> [!NOTE]
> Die Eigenschaft [`IdentityCredential.isAutoSelected`](/de/docs/Web/API/IdentityCredential/isAutoSelected) gibt an, ob die föderierte Anmeldung mithilfe der automatischen Reauthentifizierung durchgeführt wurde. Dies ist hilfreich, um die API-Leistung zu bewerten und die UX entsprechend zu verbessern. Außerdem kann der Benutzer, wenn sie nicht verfügbar ist, zur Anmeldung mit expliziter Benutzervermittlung aufgefordert werden, also mit einem `get()`-Aufruf mit `mediation: required`.

## Eine föderierte Anmeldung trennen

Die RP kann ein bestimmtes föderiertes Anmeldekonto vom zugehörigen IdP trennen, indem sie [`IdentityCredential.disconnect()`](/de/docs/Web/API/IdentityCredential/disconnect_static) aufruft. Diese Funktion kann aus einem RP-Frame der obersten Ebene aufgerufen werden.

```js
IdentityCredential.disconnect({
  configURL: "https://idp.example.com/config.json",
  clientId: "rp123",
  accountHint: "account456",
});
```

Damit ein `disconnect()`-Aufruf funktioniert, muss der IdP einen [`disconnect_endpoint`](/de/docs/Web/API/FedCM_API/IDP_integration#disconnect_endpoint) in seine Konfigurationsdatei aufnehmen. Weitere Details zur zugrunde liegenden HTTP-Kommunikation finden Sie unter [Der Disconnect-Endpunkt](/de/docs/Web/API/FedCM_API/IDP_integration#the_disconnect_endpoint).

## Siehe auch

- [Federated Credential Management API](https://developer.chrome.com/docs/identity/fedcm/overview) auf developer.chrome.com (2023)
