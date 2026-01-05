---
title: Vom vertrauenden Partner initiierte Anmeldung mit Föderation
slug: Web/API/FedCM_API/RP_sign-in
l10n:
  sourceCommit: d7a0ef33dfce20818a160557b5a72d6565cec254
---

{{DefaultAPISidebar("FedCM API")}}

Dieser Artikel beschreibt den Prozess, mit dem eine {{Glossary("Relying_party", "Relying Party")}} (RP) die [Federated Credential Management (FedCM) API](/de/docs/Web/API/FedCM_API) nutzen kann, um sich über einen {{Glossary("Identity_provider", "Identity Provider")}} (IdP) anzumelden.

## Aufruf der `get()`-Methode

RP können [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) mit einer `identity`-Option aufrufen, um dem Nutzer die Möglichkeit zu geben, sich bei der RP mit einer Auswahl bestehender IdP-Konten anzumelden. Die IdPs identifizieren die RP durch deren `clientId`, die jedem IdP in einem gesonderten, IdP-spezifischen Prozess von der RP zugewiesen wurde. Der gewählte IdP identifiziert den spezifischen Nutzer, der versucht, sich mit den Anmeldedaten (Cookies), die dem Browser während des [Anmeldeablaufs](#fedcm-anmeldeablauf) bereitgestellt werden, anzumelden.

Falls sich der Nutzer noch nie bei einem IdP angemeldet hat oder abgemeldet ist, lehnt `CredentialsContainer.get()` mit einem Fehler ab, und die RP kann den Nutzer auf eine IdP-Seite umleiten, um sich anzumelden oder ein Konto zu erstellen.

Andernfalls, wenn die Nutzeridentität erfolgreich vom gewählten IdP validiert wird, gibt `CredentialsContainer.get()` ein Promise zurück, das mit einem [`IdentityCredential`](/de/docs/Web/API/IdentityCredential)-Objekt erfüllt wird.

### Das `IdentityCredential.token`-Objekt

Das `IdentityCredential` enthält eine `token`-Eigenschaft, die die RP verwenden kann, um den Nutzer anzumelden.

Die FedCM-API definiert weder die Struktur des `token`-Objekts noch was die RP damit machen soll: Dies hängt vollständig vom föderierten Identitätsprotokoll ab, das der IdP implementiert.

Zum Beispiel im [FedCM für OAuth](https://github.com/aaronpk/oauth-fedcm-profile)-Profil, das beschreibt, wie das [OpenID Connect (OIDC)](/de/docs/Web/Security/Authentication/Federated_identity#openid_connect)-Protokoll unter Verwendung von FedCM implementiert werden könnte, ist das von `CredentialsContainer.get()` zurückgegebene Token ein OAuth-Autorisierungscode. Die RP verwendet diesen Code, um das Identifikationstoken vom Token-Endpoint des IdP abzurufen.

Wenn eine RP sich entscheidet, mit einem bestimmten IdP zusammenzuarbeiten, wird der IdP Anweisungen zur Nutzung des zurückgegebenen `token`-Werts bereitstellen.

### Beispielanforderung

Eine typische Anforderung könnte wie folgt aussehen:

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
        {
          // ...
        },
      ],
    },
  });
}
```

Die Eigenschaft `identity.providers` nimmt ein Array auf, das ein oder mehrere Objekte enthält, die den Pfad zur Konfigurationsdatei (`configURL`) jedes IdP und den von IdP an die RP ausgegebenen Client-Identifier (`clientId`) spezifizieren.

Das vorherige Beispiel enthält auch einige optionale Funktionen:

- `identity.context` spezifiziert den Kontext, in dem der Nutzer sich bei FedCM authentifiziert. Zum Beispiel handelt es sich um eine erstmalige Anmeldung für dieses Konto oder um eine Anmeldung mit einem bestehenden Konto? Der Browser verwendet diese Informationen, um den Text in seiner FedCM-UI besser an den Kontext anzupassen.
- Die Eigenschaft `params` enthält alle Parameter, die dieser IdP benötigt. Struktur und Inhalt werden vom spezifischen IdP bestimmt.
- Die Eigenschaft `loginHint` gibt einen Hinweis auf die Kontenoption(en), die der Browser für die Nutzeranmeldung präsentieren soll. Dieser Hinweis wird mit den Werten `login_hints` abgeglichen, die der IdP am [Kontenlisten-Endpoint](/de/docs/Web/API/FedCM_API/IDP_integration#the_accounts_list_endpoint) bereitstellt.

Der Browser fordert die IdP-Konfigurationsdateien an und führt den unten beschriebenen Anmeldeablauf durch. Weitere Informationen über die Art der Interaktion, die ein Nutzer von der browserseitig bereitgestellten UI erwarten könnte, finden Sie unter [Implementierung einer Identitätslösung mit FedCM auf Seiten der Relying Party](https://developer.chrome.com/docs/identity/fedcm/implement/relying-party).

## FedCM-Anmeldeablauf

Es gibt drei Parteien, die am Anmeldeablauf beteiligt sind: die RP-App, der Browser selbst und der IdP. Das folgende Diagramm fasst zusammen, was visuell passiert.

![eine visuelle Darstellung des im Detail beschriebenen Ablaufs](fedcm-flow.png)

Der Ablauf ist wie folgt:

1. Die RP ruft [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) auf, um den Anmeldeablauf zu starten.

2. Vom `configURL`, das für jeden IdP bereitgestellt wird, fordert der Browser zwei Dateien an:
   1. Die wohlbekannte Datei (`/.well-known/web-identity`), verfügbar unter `/.well-known/web-identity` in der {{Glossary("registrable_domain", "registrierbaren Domain")}} der `configURL`.
   2. Die [IdP-Konfigurationsdatei](/de/docs/Web/API/FedCM_API/IDP_integration#provide_a_config_file_and_endpoints) (`/config.json`), verfügbar unter der `configURL`.

   Diese sind beides [`GET`](/de/docs/Web/HTTP/Reference/Methods/GET)-Anfragen, die keine Cookies haben und keine Weiterleitungen folgen. Dies verhindert effektiv, dass IdPs wissen, wer die Anfrage gestellt hat und welche RP versucht, sich zu verbinden.

   Alle Anfragen, die vom Browser über FedCM gesendet werden, enthalten einen `{{httpheader("Sec-Fetch-Dest")}}: webidentity`-Header, um {{Glossary("CSRF", "CSRF")}}-Angriffe zu verhindern. Alle IdP-Endpunkte müssen bestätigen, dass dieser Header enthalten ist.

3. Die IdPs antworten mit den angeforderten wohlbekannten Dateien und `config.json`-Dateien. Der Browser validiert die im `get()`-Aufruf angegebene Konfigurationsdatei-URL gegen die Liste der gültigen Konfigurations-URLs im wohlbekannten Dokument.

4. Wenn der Browser über einen [Anmeldestatus eines IdP](/de/docs/Web/API/FedCM_API/IDP_integration#update_login_status_using_the_login_status_api) verfügt, der auf `"logged-in"` gesetzt ist, stellt er eine authentifizierte Anfrage (d.h. mit einem Cookie, das den angemeldeten Nutzer identifiziert) an den [`accounts_endpoint`](/de/docs/Web/API/FedCM_API/IDP_integration#the_accounts_list_endpoint) in der IdP-Konfigurationsdatei für die Kontodetails des Nutzers. Dies ist eine `GET`-Anfrage mit Cookies, aber ohne `client_id`-Parameter oder den {{httpheader("Origin")}}-Header. Dies verhindert effektiv, dass IdPs erfahren, bei welcher RP sich der Nutzer anmelden möchte. Daher ist die zurückgegebenen Kontenliste RP-unabhängig.

   > [!NOTE]
   > Wenn die Anmeldestatus der IdPs alle `"logged-out"` sind, lehnt der `get()`-Aufruf mit einem `NetworkError`-[`DOMException`](/de/docs/Web/API/DOMException) ab und es wird keine Anfrage an irgendeinen `accounts_endpoint` des IdP gestellt. In diesem Fall liegt es am Entwickler, den Ablauf zu behandeln, indem er beispielsweise den Nutzer auffordert, sich bei einem geeigneten IdP anzumelden. Beachten Sie, dass es zu einer gewissen Verzögerung bei der Ablehnung kommen kann, um zu verhindern, dass der Anmeldestatus des IdP an die RP weitergegeben wird.

5. Die IdPs antworten mit den Anmeldeinformationen, die von ihren `accounts_endpoint`s angefordert werden. Dies sind Arrays aller Konten, die mit den IdP-Cookies des Nutzers für alle mit einem IdP verbundenen RP assoziiert sind.

6. {{optional_inline}} Falls in einer IdP-Konfigurationsdatei enthalten, stellt der Browser eine nicht authentifizierte Anfrage an den [`client_metadata_endpoint`](/de/docs/Web/API/FedCM_API/IDP_integration#the_client_metadata_endpoint), um die Position der Bedingungen und Datenschutzrichtlinien-Seiten der RP abzurufen. Dies ist eine `GET`-Anfrage, die mit dem in den `get()`-Aufruf übergebenen `clientId`-Parameter gesendet wird, jedoch ohne Cookies.

7. {{optional_inline}} Die IdPs antworten mit den von `client_metadata_endpoint` angeforderten URLs.

8. Der Browser verwendet die durch die vorhergehenden beiden Anfragen erhaltenen Informationen, um die UI zu erstellen, die den Nutzer auffordert, einen IdP auszuwählen (falls mehr als einer angemeldet ist) und ein Konto zu wählen, bei dem er sich bei der RP anmelden möchte. Die UI fragt den Nutzer außerdem um Erlaubnis, sich bei der RP mit ihrem gewählten föderierten IdP-Konto anzumelden.

   > [!NOTE]
   > In diesem Stadium, wenn sich der Nutzer zuvor mit einem föderierten RP-Konto in der aktuellen Browserinstanz authentifiziert hat (d.h. ein neues Konto bei der RP erstellt oder sich mit einem bestehenden Konto auf der Website der RP angemeldet hat), können sie sich je nach dem auf die Mediation-Option, die im `get()`-Aufruf festgelegt ist, möglicherweise **automatisch erneut authentifizieren** lassen. Ist das der Fall, wird der Nutzer automatisch angemeldet, ohne seine Anmeldeinformationen eingeben zu müssen, sobald `get()` aufgerufen wird. Weitere Informationen finden Sie im Abschnitt [Automatische erneute Authentifizierung](#automatische_erneute_authentifizierung).

9. Wenn der Nutzer die Erlaubnis erteilt, stellt der Browser eine authentifizierte Anfrage an den [`id_assertion_endpoint`](/de/docs/Web/API/FedCM_API/IDP_integration#the_id_assertion_endpoint), um ein Validierungstoken vom ausgewählten IdP für das gewählte Konto anzufordern.

   Die Anmeldedaten werden in einer HTTP-`POST`-Anfrage mit Cookies und einem Content-Type von `application/x-www-form-urlencoded` gesendet.

   Falls der Aufruf fehlschlägt, wird eine Fehlermeldung zurückgegeben, wie unter [ID-Assertions-Fehlerantworten](/de/docs/Web/API/FedCM_API/IDP_integration#id_assertion_error_responses) erklärt, und das von `get()` zurückgegebene Versprechen wird mit dem Fehler abgelehnt.

10. Der gewählte IdP überprüft, ob die von der RP übermittelte Konto-ID mit der ID des bereits angemeldeten Kontos übereinstimmt und ob der `Origin` mit dem Ursprung der RP übereinstimmt, das im Voraus vom IdP registriert worden sein wird. Wenn alles in Ordnung ist, antwortet er mit dem angeforderten Validierungstoken.

    > [!NOTE]
    > Der Ursprung der RP wird in einem vollständig separaten Prozess beim IdP registriert, wenn die RP erstmals in den IdP integriert wird. Dieser Prozess ist für jeden IdP spezifisch.

11. Ist der Ablauf abgeschlossen, wird das `get()`-Versprechen mit einem [`IdentityCredential`](/de/docs/Web/API/IdentityCredential)-Objekt gelöst, das weitere RP-Funktionalitäten bietet. Besonders hervorzuheben ist, dass dieses Objekt ein Token enthält, das die RP mit einem Zertifikat verifizieren kann, dass es vom IdP stammt und dass es vertrauensvolle Informationen über den angemeldeten Nutzer enthält. Sobald die RP das Token validiert, können sie die enthaltenen Informationen nutzen, um den Nutzer anzumelden und eine neue Sitzung zu starten, ihn für ihren Dienst anzumelden, etc. Das Format und die Struktur des Tokens hängen vom IdP ab und haben nichts mit der FedCM API zu tun (die RP muss den Anweisungen des IdP folgen).

## Aktiver versus passiver Modus

Es gibt zwei verschiedene UI-Modi, die der Browser einer RP anbieten kann, wenn sie sich über die FedCM API anmelden, den **`aktiven`** und den **`passiven`** Modus. Welcher Modus für die Anmeldung verwendet wird, wird durch die [`mode`](/de/docs/Web/API/IdentityCredentialRequestOptions#mode)-Option des `identity`-Objekts gesteuert:

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

Der Standardwert für `mode` ist `passive`. Wenn `mode` nicht gesetzt oder explizit auf `passive` gesetzt wird, kann der Browser den Anmeldeablauf über einen `get()`-Aufruf ohne direkte Nutzerinteraktion initiieren. Beispielsweise möchten Sie den Anmeldeablauf möglicherweise initiieren, sobald der Nutzer zur Anmeldeseite navigiert, vorausgesetzt, er verfügt über IdP-Konten zum Anmelden. In diesem Modus zeigen Browser dem Nutzer typischerweise ein Anmeldedialogfenster an, das alle in dem `providers`-Objekt angegebenen Anmeldeoptionen enthält, und sie können diejenige auswählen, die ihnen am besten passt, und dann die entsprechenden Anmeldeinformationen eingeben.

Wenn `mode` auf `active` gesetzt ist, erfordert der Browser, dass der Anmeldeablauf durch eine Nutzeraktion wie das Klicken auf einen Button gestartet wird (eine {{Glossary("transient_activation", "transiente Aktivierung")}} ist erforderlich), und das `providers`-Objekt kann nur eine Länge von `1` haben, andernfalls wird das `get()`-Versprechen abgelehnt. Dieser Modus wird typischerweise verwendet, wenn die RP ein separates Button für jede IdP-Auswahl anbieten möchte. Wenn der Nutzer auf einen dieser Buttons klickt, erscheint ein vereinfachtes Dialogfenster, das nur die Eingabe der Anmeldeinformationen für dieses Konto erfordert.

Siehe [FedCM UI-Modi](https://developer.chrome.com/docs/identity/fedcm/overview#fedcm_ui_modes) auf developer.chrome.com für ein Beispiel, wie die verschiedenen UI-Modi in Google Chrome dargestellt werden.

## Automatische erneute Authentifizierung

FedCM auto-reauthentication ermöglicht es Nutzern, sich automatisch erneut zu authentifizieren, wenn sie sich wieder bei einer RP anmelden, nachdem sie sich zum ersten Mal über FedCM authentifiziert haben. "Erste Authentifizierung" bezieht sich darauf, wenn der Nutzer ein Konto erstellt oder sich erstmals über das FedCM-Anmeldedialog auf der RP-Website in der gleichen Browserinstanz anmeldet.

Nach der ersten Authentifizierung kann die automatische erneute Authentifizierung verwendet werden, um sich wieder automatisch auf der RP-Website anzumelden, ohne dass der Nutzer eine "Weiter als..."-Bestätigungsaufforderung sehen muss. Wenn der Nutzer kürzlich die Erlaubnis erteilt hat, sich mit einem bestimmten Konto über die Föderation anzumelden, gibt es keinen Datenschutz- oder Sicherheitsvorteil, sofort eine weitere ausdrückliche Nutzerbestätigung zu erzwingen.

Das Verhalten der automatischen erneuten Authentifizierung wird durch die [`mediation`](/de/docs/Web/API/CredentialsContainer/get#mediation)-Option im `get()`-Aufruf gesteuert:

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

Eine automatische erneute Authentifizierung kann erfolgen, wenn `mediation` auf `optional` oder `silent` gesetzt ist.

Bei diesen `mediation`-Optionen erfolgt die automatische erneute Authentifizierung unter folgenden Bedingungen:

- FedCM ist verfügbar zur Nutzung. Zum Beispiel hat der Nutzer FedCM weder global noch in den RP-Einstellungen deaktiviert.
- Der Nutzer hat nur ein Konto verwendet, um sich über FedCM auf dieser Website anzumelden. Wenn Konten für mehrere IdPs existieren, wird der Nutzer nicht automatisch erneut authentifiziert.
- Der Nutzer ist mit diesem Konto beim IdP angemeldet.
- Die automatische erneute Authentifizierung erfolgte nicht innerhalb der letzten 10 Minuten. Diese Einschränkung wurde eingeführt, um zu verhindern, dass Nutzer sofort nach dem Abmelden automatisch erneut authentifiziert werden - was sehr verwirrend wäre.
- Die RP hat nach der letzten Anmeldung nicht [`preventSilentAccess()`](/de/docs/Web/API/CredentialsContainer/preventSilentAccess) aufgerufen. Dies kann von einer RP verwendet werden, um die automatische erneute Authentifizierung ausdrücklich zu deaktivieren, falls gewünscht.
- Der UI-Modus ist [passiv]().

Wenn diese Bedingungen erfüllt sind, beginnt der automatische erneute Authentifizierungsversuch, sobald das `get()` aufgerufen wird. Ist die automatische erneute Authentifizierung erfolgreich, meldet sich der Nutzer erneut auf der RP-Website an, ohne dass eine Bestätigungsaufforderung angezeigt wird, unter Verwendung desselben IdP-Kontos und validierten Tokens wie zuvor.

Wenn die automatische erneute Authentifizierung fehlschlägt, hängt das Verhalten von dem gewählten `mediation`-Wert ab:

- `optional`: Dem Nutzer _wird_ das Dialogfeld angezeigt, und er wird erneut um Bestätigung gebeten. Dementsprechend macht es Sinn, diese Option auf einer Seite zu verwenden, auf der kein laufender Nutzerabschnitt ist, wie z.B. auf einer RP-Anmeldeseite.
- `silent`: Das `get()`-Versprechen wird abgelehnt, und der Entwickler muss den Nutzer zurück zur Anmeldeseite führen, um den Prozess erneut zu starten. Diese Option ist sinnvoll auf Seiten, auf denen ein laufender Nutzerabschnitt vollendet werden muss, beispielsweise den Seiten eines Kaufabwicklungsprozesses auf einer E-Commerce-Website.

> [!NOTE]
> Die [`IdentityCredential.isAutoSelected`](/de/docs/Web/API/IdentityCredential/isAutoSelected)-Eigenschaft gibt einen Hinweis darauf, ob die föderierte Anmeldung durch eine automatische erneute Authentifizierung durchgeführt wurde. Dies ist nützlich, um die API-Leistung zu bewerten und die Benutzererfahrung entsprechend zu verbessern. Wenn es nicht verfügbar ist, kann der Nutzer aufgefordert werden, sich mit ausdrücklicher Nutzermediation anzumelden, was einem `get()`-Aufruf mit `mediation: required` entspricht.

## Trennen einer föderierten Anmeldung

Die RP kann ein angegebenes föderiertes Anmeldekonto vom zugehörigen IdP trennen, indem sie [`IdentityCredential.disconnect()`](/de/docs/Web/API/IdentityCredential/disconnect_static) aufruft. Diese Funktion kann von einem Top-Level-Rahmen der RP aufgerufen werden.

```js
IdentityCredential.disconnect({
  configURL: "https://idp.example.com/config.json",
  clientId: "rp123",
  accountHint: "account456",
});
```

Damit ein `disconnect()`-Aufruf funktioniert, muss der IdP einen [`disconnect_endpoint`](/de/docs/Web/API/FedCM_API/IDP_integration#disconnect_endpoint) in seiner Konfigurationsdatei enthalten. Weitere Informationen zur zugrunde liegenden HTTP-Kommunikation finden Sie unter [Der Disconnect-Endpunkt](/de/docs/Web/API/FedCM_API/IDP_integration#the_disconnect_endpoint).

## Siehe auch

- [Federated Credential Management API](https://developer.chrome.com/docs/identity/fedcm/overview) auf developer.chrome.com (2023)
