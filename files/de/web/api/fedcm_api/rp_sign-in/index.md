---
title: Vertrauende Partei föderierte Anmeldung
slug: Web/API/FedCM_API/RP_sign-in
l10n:
  sourceCommit: 7f138099644a02640a903b2abc39e685ca8ca7cd
---

{{DefaultAPISidebar("FedCM API")}}

Dieser Artikel beschreibt den Prozess, durch den eine {{Glossary("Relying_party", "vertrauende Partei")}} (RP) die [Federated Credential Management (FedCM) API](/de/docs/Web/API/FedCM_API) nutzen kann, um eine föderierte Anmeldung über einen {{Glossary("Identity_provider", "Identitätsanbieter")}} (IdP) durchzuführen.

## Aufruf der `get()` Methode

RPs können [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) mit einer `identity`-Option aufrufen, um zu beantragen, dass einem Benutzer die Möglichkeit gegeben wird, sich mit einer Auswahl bestehender IdP-Konten bei der RP anzumelden. Die IdPs identifizieren die RP durch ihre `clientId`, die jedem IdP in einem separaten IdP-spezifischen Prozess ausgestellt wurde. Der gewählte IdP identifiziert den spezifischen Benutzer, der versucht sich mit den Anmeldedaten (Cookies), die dem Browser während des [Anmeldeflusses](#fedcm_anmeldefluss) bereitgestellt wurden, anzumelden.

Wenn der Benutzer sich noch nie bei einem IdP angemeldet hat oder abgemeldet ist, verwirft `CredentialsContainer.get()` mit einem Fehler, und die RP kann den Benutzer auf eine IdP-Seite leiten, um sich anzumelden oder ein Konto zu erstellen.

Andernfalls, wenn die Benutzeridentität erfolgreich vom gewählten IdP validiert wird, gibt `CredentialsContainer.get()` ein Versprechen zurück, das mit einem [`IdentityCredential`](/de/docs/Web/API/IdentityCredential)-Objekt erfüllt wird.

### Das `IdentityCredential.token` Objekt

Das `IdentityCredential` beinhaltet eine `token`-Eigenschaft, die die RP verwenden kann, um den Benutzer anzumelden.

Die FedCM API definiert nicht die Struktur des `token`-Objekts oder was die RP damit tun sollte: Dies hängt vollständig vom föderierten Identitätsprotokoll ab, das der IdP implementiert.

Zum Beispiel im [FedCM für OAuth](https://github.com/aaronpk/oauth-fedcm-profile) Profil, das beschreibt, wie das [OpenID Connect (OIDC)](/de/docs/Web/Security/Authentication/Federated_identity#openid_connect) Protokoll mit FedCM implementiert werden könnte, ist das Token, das von `CredentialsContainer.get()` zurückgegeben wird, ein OAuth-Autorisierungscode. Die RP verwendet diesen Code, um das Identitätstoken vom Token-Endpunkt des IdP abzurufen.

Wenn eine RP wählt, mit einem bestimmten IdP zu arbeiten, wird der IdP Anweisungen zur Verfügung stellen, wie der zurückgegebene `token`-Wert verwendet werden soll.

### Beispielanforderung

Eine typische Anforderung könnte so aussehen:

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

Die `identity.providers`-Eigenschaft nimmt ein Array, das ein oder mehrere Objekte enthält, die den Pfad zur Konfigurationsdatei (`configURL`) jedes IdPs und die von der IdP ausgestellte Client-ID (`clientId`) der RP spezifizieren.

Das vorherige Beispiel umfasst auch einige optionale Funktionen:

- `identity.context` spezifiziert den Kontext, in dem der Benutzer sich mit FedCM authentifiziert. Zum Beispiel, ob es sich um eine erstmalige Anmeldung für dieses Konto handelt oder um eine Anmeldung mit einem bestehenden Konto? Der Browser verwendet diese Informationen, um den Text in seiner FedCM-Oberfläche besser an den Kontext anzupassen.
- Die `params`-Eigenschaft enthält alle Parameter, die dieser IdP benötigt. Die Struktur und der Inhalt werden vom spezifischen IdP bestimmt.
- Die `loginHint`-Eigenschaft bietet einen Hinweis auf die Kontenoption(en), die der Browser für die Benutzeranmeldung präsentieren soll. Dieser Hinweis wird mit den vom IdP bereitgestellten `login_hints`-Werten am [Kontenlisten-Endpunkt](/de/docs/Web/API/FedCM_API/IDP_integration#the_accounts_list_endpoint) abgeglichen.

Der Browser fordert die IdP-Konfigurationsdateien an und führt den detaillierten Anmeldefluss unten aus. Für weitere Informationen zur Art der Interaktion, die ein Benutzer von der vom Browser bereitgestellten Benutzeroberfläche erwarten kann, siehe [Implementieren einer Identitätslösung mit FedCM auf der Seite der vertrauenden Partei](https://developer.chrome.com/docs/identity/fedcm/implement/relying-party).

## FedCM Anmeldefluss

Beim Anmeldefluss sind drei Parteien beteiligt – die RP-App, der Browser selbst und der IdP. Das folgende Diagramm fasst visuell zusammen, was passiert.

![eine visuelle Darstellung des Flusses, der im Detail unten beschrieben wird](fedcm-flow.png)

Der Fluss lautet wie folgt:

1. Die RP ruft [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) auf, um den Anmeldefluss zu starten.

2. Vom `configURL`, das für jeden IdP bereitgestellt wird, fordert der Browser zwei Dateien an:
   1. Die bekannte Datei (`/.well-known/web-identity`), verfügbar unter `/.well-known/web-identity` auf der {{Glossary("registrable_domain", "registrierbaren Domain")}} des `configURL`.
   2. Die [IdP-Konfigurationsdatei](/de/docs/Web/API/FedCM_API/IDP_integration#provide_a_config_file_and_endpoints) (`/config.json`), verfügbar am `configURL`.

   Dies sind beides [`GET`](/de/docs/Web/HTTP/Reference/Methods/GET)-Anfragen, die keine Cookies haben und keine Umleitungen folgen. Dies verhindert effektiv, dass IdPs erfahren, wer die Anfrage gestellt hat und welche RP versucht, sich zu verbinden.

   Alle Anfragen, die vom Browser über FedCM gesendet werden, enthalten einen `{{httpheader("Sec-Fetch-Dest")}}: webidentity` Header, um {{Glossary("CSRF", "CSRF")}}-Angriffe zu verhindern. Alle IdP-Endpunkte müssen bestätigen, dass dieser Header enthalten ist.

3. Die IdPs antworten mit der angeforderten bekannten Datei und den `config.json`-Dateien. Der Browser validiert die Konfigurationsdatei-URL in der `get()`-Anfrage gegen die Liste der gültigen Konfigurations-URLs in der bekannten Datei.

4. Wenn der Browser den [Anmeldestatus des IdP](/de/docs/Web/API/FedCM_API/IDP_integration#update_login_status_using_the_login_status_api) auf `"logged-in"` gesetzt hat, stellt er eine authentifizierte Anfrage (d.h. mit einem Cookie, das den angemeldeten Benutzer identifiziert) an den [`accounts_endpoint`](/de/docs/Web/API/FedCM_API/IDP_integration#the_accounts_list_endpoint) innerhalb der IdP-Konfigurationsdatei für die Kontodaten des Benutzers. Dies ist eine `GET`-Anfrage mit Cookies, aber ohne den Parameter `client_id` oder den {{httpheader("Origin")}} Header. Dies verhindert effektiv, dass IdPs erfahren, bei welcher RP der Benutzer sich anmelden möchte. Infolgedessen ist die Liste der zurückgegebenen Konten RP-agnostisch.

   > [!NOTE]
   > Wenn alle Anmeldestatus der IdPs `"logged-out"` sind, verwirft der `get()`-Aufruf mit einem `NetworkError` [`DOMException`](/de/docs/Web/API/DOMException) und macht keine Anfrage an einen `accounts_endpoint` eines IdPs. In diesem Fall liegt es am Entwickler, den Fluss zu handhaben, z.B. indem er den Benutzer dazu anregt, sich bei einem geeigneten IdP anzumelden. Beachten Sie, dass es zu einer Verzögerung bei der Ablehnung kommen kann, um zu vermeiden, dass der Anmeldestatus des IdP an die RP weitergegeben wird.

5. Die IdPs antworten mit den Kontoinformationen, die von ihren `accounts_endpoint`s angefordert wurden. Diese sind Arrays aller Konten, die mit den Benutzer-IdP-Cookies für alle mit einem IdP verbundenen RPs verknüpft sind.

6. {{optional_inline}} Wenn in einer IdP-Konfigurationsdatei enthalten, stellt der Browser eine nicht authentifizierte Anfrage an den [`client_metadata_endpoint`](/de/docs/Web/API/FedCM_API/IDP_integration#the_client_metadata_endpoint) für den Standort der RP-Service-Bedingungen und den Datenschutzrichtlinienseiten. Dies ist eine `GET`-Anfrage, die mit dem in den `get()`-Aufruf übergebenen `clientId` als Parameter gesendet wird, jedoch ohne Cookies.

7. {{optional_inline}} Die IdPs antworten mit den von dem `client_metadata_endpoint` angeforderten URLs.

8. Der Browser verwendet die Informationen, die durch die vorherigen beiden Anfragesätze erhalten wurden, um die Benutzeroberfläche zu erstellen, die den Benutzer fragt, einen IdP (falls mehr als einer angemeldet ist) und ein Konto auszuwählen, um sich bei der RP anzumelden. Die Benutzeroberfläche fragt den Benutzer auch um Erlaubnis, sich mit ihrem gewählten föderierten IdP-Konto bei der RP anzumelden.

   > [!NOTE]
   > An diesem Punkt, wenn der Benutzer sich zuvor mit einem föderierten RP-Konto in der aktuellen Browserinstanz authentifiziert hat (d.h. ein neues Konto bei der RP erstellt oder sich mit einem bestehenden Konto auf der Website der RP angemeldet hat), kann es möglich sein, **automatisch erneut zu authentifizieren**, abhängig von der Einstellung der [`mediation`](/de/docs/Web/API/CredentialsContainer/get#mediation) Option im `get()`-Aufruf. Wenn dies der Fall ist, wird der Benutzer automatisch ohne Eingabe ihrer Anmeldedaten angemeldet, sobald `get()` aufgerufen wird. Weitere Einzelheiten finden Sie im Abschnitt [Automatische erneute Authentifizierung](#automatische_erneute_authentifizierung).

9. Wenn der Benutzer die Erlaubnis gibt, stellt der Browser eine authentifizierte Anfrage an den [`id_assertion_endpoint`](/de/docs/Web/API/FedCM_API/IDP_integration#the_id_assertion_endpoint), um ein Validierungstoken für das ausgewählte Konto vom gewählten IdP anzufordern.

   Die Anmeldedaten werden in einer HTTP [`POST`](/de/docs/Web/HTTP/Reference/Methods/POST)-Anfrage mit Cookies und einem Content-Typ von `application/x-www-form-urlencoded` gesendet.

   Wenn der Aufruf fehlschlägt, wird eine Fehlerrücklast wie in [ID Assertion-Fehlerantworten](/de/docs/Web/API/FedCM_API/IDP_integration#id_assertion_error_responses) erklärt zurückgegeben und das von `get()` zurückgegebene Versprechen wird mit dem Fehler verworfen.

10. Der gewählte IdP prüft, ob die von der RP gesendete Konten-ID mit der ID für das Konto übereinstimmt, das bereits angemeldet ist, und dass der `Origin` mit der Herkunft der RP übereinstimmt, die im Voraus mit dem IdP registriert wurde. Wenn alles gut aussieht, antwortet er mit dem angeforderten Validierungstoken.

    > [!NOTE]
    > Der Ursprung der RP wird in einem vollständig getrennten Prozess registriert, wenn die RP das Erste Mal mit dem IdP integriert wird. Dieser Prozess wird spezifisch für jeden IdP sein.

11. Wenn der Fluss abgeschlossen ist, wird das `get()`-Versprechen mit einem [`IdentityCredential`](/de/docs/Web/API/IdentityCredential)-Objekt gelöst, das weitere RP-Funktionalität bereitstellt. Am bemerkenswertesten enthält dieses Objekt ein Token, das die RP überprüfen kann, das vom IdP stammt (unter Verwendung eines Zertifikats) und das vertrauenswürdige Informationen über den angemeldeten Benutzer enthält. Sobald die RP das Token validiert hat, können sie die enthaltenen Informationen verwenden, um den Benutzer anzumelden und eine neue Sitzung zu beginnen, sie zu ihrem Dienst anzumelden usw. Das Format und die Struktur des Tokens hängen vom IdP ab und haben nichts mit der FedCM API zu tun (die RP muss den Anweisungen des IdP folgen).

## Aktiver vs. passiver Modus

Es gibt zwei verschiedene Benutzeroberflächenmodi, die der Browser einem RP-Benutzer zur Verfügung stellen kann, wenn sie sich über die FedCM API anmelden, **`active`** und **`passive`** Modus. Welcher Modus für die Anmeldung verwendet wird, wird durch die [`mode`](/de/docs/Web/API/IdentityCredentialRequestOptions#mode)-Option des `identity`-Objekts gesteuert:

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

Der Standardwert für `mode` ist `passive`. Wenn `mode` nicht gesetzt ist oder explizit auf `passive` gesetzt wird, kann der Browser den Anmeldefluss über einen `get()`-Aufruf ohne direkte Benutzerinteraktion starten. Zum Beispiel könnten Sie den Anmeldefluss sofort starten, sobald der Benutzer zur Anmeldeseite navigiert, vorausgesetzt, sie haben IdP-Konten, mit denen sie sich anmelden können. In diesem Modus präsentieren Browser dem Benutzer typischerweise ein Anmeldedialogfenster, das alle signierten Optionen enthält, die im `providers`-Objekt angegeben sind, und sie können auswählen, welche ihnen am besten passt und dann die entsprechenden Anmeldedaten eingeben.

Wenn `mode` auf `active` gesetzt wird, erfordert der Browser, dass der Anmeldefluss durch eine Benutzeraktion, wie das Klicken auf eine Schaltfläche, ausgelöst wird (eine {{Glossary("transient_activation", "vorübergehende Aktivierung")}} ist erforderlich), und das `providers`-Objekt kann nur die Länge `1` haben, andernfalls wird das `get()`-Versprechen verworfen. Dieser Modus wird typischerweise verwendet, wenn die RP eine separate Schaltfläche für jede IdP-Option bereitstellen möchte. Wenn der Benutzer eine dieser Schaltflächen anklickt, erscheint ein vereinfachtes Dialogfenster, das nur erfordert, dass er die Anmeldedaten für dieses Konto eingibt.

Siehe [FedCM UI-Modi](https://developer.chrome.com/docs/identity/fedcm/overview#fedcm_ui_modes) auf developer.chrome.com für ein Beispiel dafür, wie die verschiedenen UI-Modi in Google Chrome präsentiert werden.

## Automatische erneute Authentifizierung

FedCM automatische erneute Authentifizierung ermöglicht es Benutzern, sich automatisch erneut zu authentifizieren, wenn sie versuchen, sich bei einer RP erneut anzumelden, nachdem sie ihre erste Authentifizierung über FedCM durchgeführt haben. "Erstauthentifizierung" bezieht sich auf den Zeitpunkt, an dem der Benutzer zum ersten Mal ein Konto erstellt oder sich über das FedCM Anmeldedialog auf der Website der RP anmeldet, in derselben Browserinstanz.

Nach der Erstauthentifizierung kann die automatische erneute Authentifizierung genutzt werden, um sich wieder automatisch auf der RP-Website anzumelden, ohne dem Benutzer eine "Als ... fortfahren" Bestätigungsanfrage zeigen zu müssen. Wenn der Benutzer kürzlich die Erlaubnis erteilt hat, eine föderierte Anmeldung mit einem bestimmten Konto zu ermöglichen, gibt es keinen Datenschutz oder Sicherheitsvorteil, sofort eine weitere explizite Benutzerbestätigung zu erzwingen.

Das Verhalten der automatischen erneuten Authentifizierung wird durch die [`mediation`](/de/docs/Web/API/CredentialsContainer/get#mediation) Option im `get()` Aufruf gesteuert:

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

Eine automatische erneute Authentifizierung kann auftreten, wenn `mediation` auf `optional` oder `silent` gesetzt ist.

Bei diesen `mediation`-Optionen tritt eine automatische erneute Authentifizierung unter den folgenden Bedingungen auf:

- FedCM ist verfügbar. Zum Beispiel hat der Benutzer FedCM nicht global oder in den RP-Einstellungen deaktiviert.
- Der Benutzer hat nur ein Konto verwendet, um sich über FedCM auf dieser Browserinstanz bei der RP-Website anzumelden. Wenn Konten für mehrere IdPs existieren, wird der Benutzer nicht automatisch erneut authentifiziert.
- Der Benutzer ist mit diesem Konto beim IdP angemeldet.
- Die automatische erneute Authentifizierung trat in den letzten 10 Minuten nicht auf. Diese Einschränkung ist eingeführt, um zu verhindern, dass Benutzer sofort nach dem Abmelden automatisch erneut authentifiziert werden, was eine verwirrende Benutzererfahrung wäre.
- Die RP hat [`preventSilentAccess()`](/de/docs/Web/API/CredentialsContainer/preventSilentAccess) nach der vorherigen Anmeldung nicht aufgerufen. Dies kann von einer RP verwendet werden, um die automatische erneute Authentifizierung explizit zu deaktivieren, falls gewünscht.
- Der UI-Modus ist [passive](<>).

Wenn diese Bedingungen erfüllt sind, beginnt ein Versuch, den Benutzer automatisch erneut zu authentifizieren, sobald das `get()` aufgerufen wird. Wenn die automatische erneute Authentifizierung erfolgreich ist, wird der Benutzer erneut auf der RP-Site angemeldet, ohne dass ihm eine Bestätigungsaufforderung angezeigt wird, und zwar mit demselben IdP-Konto und validierten Token wie zuvor.

Wenn die automatische erneute Authentifizierung fehlschlägt, hängt das Verhalten vom gewählten `mediation`-Wert ab:

- `optional`: Der Benutzer _wird_ erneut das Dialogfeld angezeigt und um Bestätigung gebeten. Daher ist diese Option sinnvoll, wenn sie auf einer Seite verwendet wird, auf der eine Benutzerreise nicht im Fluss ist, wie z.B. auf einer RP-Anmeldeseite.
- `silent`: Das `get()`-Versprechen wird abgelehnt und der Entwickler muss den Benutzer zurück zur Anmeldeseite führen, um den Prozess erneut zu starten. Diese Option ist auf Seiten sinnvoll, auf denen eine Benutzerreise im Gange ist und Sie sie bis zum Abschluss angemeldet halten müssen, wie z.B. auf den Seiten eines Checkout-Flusses auf einer E-Commerce-Website.

> [!NOTE]
> Die [`IdentityCredential.isAutoSelected`](/de/docs/Web/API/IdentityCredential/isAutoSelected) Eigenschaft gibt an, ob die föderierte Anmeldung unter Verwendung der automatischen erneuten Authentifizierung durchgeführt wurde. Dies ist hilfreich, um die API-Performance zu bewerten und die Benutzerfreundlichkeit entsprechend zu verbessern. Wenn diese nicht verfügbar ist, wird der Benutzer möglicherweise aufgefordert, sich mit expliziter Benutzervermittlung anzumelden, was einen `get()`-Aufruf mit `mediation: required` erfordert.

## Trennen einer föderierten Anmeldung

Die RP kann ein angegebenes föderiertes Anmeldekonto vom zugehörigen IdP trennen, indem sie [`IdentityCredential.disconnect()`](/de/docs/Web/API/IdentityCredential/disconnect_static) aufruft. Diese Funktion kann von einem obersten RP-Frame aus aufgerufen werden.

```js
IdentityCredential.disconnect({
  configURL: "https://idp.example.com/config.json",
  clientId: "rp123",
  accountHint: "account456",
});
```

Damit ein `disconnect()`-Aufruf funktioniert, muss der IdP einen [`disconnect_endpoint`](/de/docs/Web/API/FedCM_API/IDP_integration#disconnect_endpoint) in seiner Konfigurationsdatei enthalten. Siehe [Der Disconnect-Endpunkt](/de/docs/Web/API/FedCM_API/IDP_integration#the_disconnect_endpoint) für weitere Details zur zugrundeliegenden HTTP-Kommunikation.

## Siehe auch

- [Federated Credential Management API](https://developer.chrome.com/docs/identity/fedcm/overview) auf developer.chrome.com (2023)
