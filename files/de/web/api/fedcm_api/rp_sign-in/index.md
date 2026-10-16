---
title: Föderierte Anmeldung bei einer Relying Party
slug: Web/API/FedCM_API/RP_sign-in
l10n:
  sourceCommit: c0cb69611b6489b8fa102b635f783dc765380001
---

{{DefaultAPISidebar("FedCM API")}}

Dieser Artikel beschreibt, wie eine {{Glossary("Relying_party", "Relying Party")}} (RP) die [Federated Credential Management (FedCM) API](/de/docs/Web/API/FedCM_API) verwenden kann, um eine föderierte Anmeldung über einen {{Glossary("Identity_provider", "Identity Provider")}} (IdP) durchzuführen.

## Aufrufen der Methode `get()`

RPs können [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) mit der Option `identity` aufrufen, um Nutzern die Möglichkeit zu geben, sich mit einem ihrer bestehenden IdP-Konten bei der RP anzumelden. Die IdPs identifizieren die RP anhand ihrer `clientId`, die jeder IdP der RP in einem separaten, IdP-spezifischen Verfahren zugewiesen hat. Der ausgewählte IdP identifiziert die Person, die sich anmelden möchte, anhand der Anmeldedaten (Cookies), die dem Browser während des [Anmeldeablaufs](#fedcm-anmeldeablauf) bereitgestellt wurden.

Wenn sich die Person noch nie bei einem IdP angemeldet hat oder dort abgemeldet ist, wird `CredentialsContainer.get()` mit einem Fehler zurückgewiesen. Die RP kann die Person dann auf eine IdP-Seite weiterleiten, auf der sie sich anmelden oder ein Konto erstellen kann.

Andernfalls gibt `CredentialsContainer.get()` ein Promise zurück, das mit einem [`IdentityCredential`](/de/docs/Web/API/IdentityCredential)-Objekt erfüllt wird, sofern der ausgewählte IdP die Identität erfolgreich überprüft hat.

### Das `IdentityCredential.token`-Objekt

`IdentityCredential` enthält eine `token`-Eigenschaft, mit der die RP die Person anmelden kann.

Die FedCM API legt weder die Struktur des `token`-Objekts noch dessen Verwendung durch die RP fest. Beides hängt vollständig vom föderierten Identitätsprotokoll ab, das der IdP implementiert.

Im Profil [FedCM for OAuth](https://github.com/aaronpk/oauth-fedcm-profile), das beschreibt, wie das [OpenID Connect (OIDC)](/de/docs/Web/Security/Authentication/Federated_identity#openid_connect)-Protokoll mit FedCM implementiert werden könnte, ist das von `CredentialsContainer.get()` zurückgegebene Token beispielsweise ein OAuth-Autorisierungscode. Die RP verwendet diesen Code, um das Identitätstoken vom Token-Endpunkt des IdP abzurufen.

Wenn eine RP mit einem bestimmten IdP zusammenarbeitet, stellt dieser Anweisungen zur Verwendung des zurückgegebenen `token`-Werts bereit.

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

Die Eigenschaft `identity.providers` erwartet ein Array mit einem oder mehreren Objekten. Jedes Objekt gibt den Pfad zur Konfigurationsdatei eines IdP (`configURL`) und die vom IdP zugewiesene Client-Kennung der RP (`clientId`) an.

Das vorherige Beispiel enthält außerdem einige optionale Funktionen:

- `identity.context` gibt den Kontext an, in dem sich die Person mit FedCM authentifiziert. Handelt es sich beispielsweise um die erstmalige Registrierung für dieses Konto oder um die Anmeldung mit einem bestehenden Konto? Der Browser verwendet diese Information, um den Text seiner FedCM-Benutzeroberfläche an den Kontext anzupassen.
- Die Eigenschaft `params` enthält alle Parameter, die dieser IdP benötigt. Ihre Struktur und ihr Inhalt werden vom jeweiligen IdP festgelegt.
- Die Eigenschaft `loginHint` gibt einen Hinweis darauf, welche Kontooptionen der Browser für die Anmeldung anzeigen sollte. Dieser Hinweis wird mit den `login_hints`-Werten abgeglichen, die der IdP am [Endpunkt für die Kontoliste](/de/docs/Web/API/FedCM_API/IDP_integration#the_accounts_list_endpoint) bereitstellt.

Der Browser fordert die IdP-Konfigurationsdateien an und führt den unten beschriebenen Anmeldeablauf aus. Weitere Informationen dazu, wie die vom Browser bereitgestellte Benutzeroberfläche für Nutzer aussehen kann, finden Sie unter [Implement an identity solution with FedCM on the Relying Party side](https://developer.chrome.com/docs/identity/fedcm/implement/relying-party).

## FedCM-Anmeldeablauf

Am Anmeldeablauf sind drei Parteien beteiligt: die RP-Anwendung, der Browser selbst und der IdP. Das folgende Diagramm veranschaulicht den Ablauf.

![Visuelle Darstellung des unten ausführlich beschriebenen Ablaufs](fedcm-flow.png)

Der Ablauf ist wie folgt:

1. Die RP ruft [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) auf, um den Anmeldeablauf zu starten.

2. Anhand der für jeden IdP angegebenen `configURL` fordert der Browser zwei Dateien an:
   1. Die Well-Known-Datei (`/.well-known/web-identity`), die unter `/.well-known/web-identity` auf der {{Glossary("registrable_domain", "registrierbaren Domain")}} der `configURL` verfügbar ist.
   2. Die [IdP-Konfigurationsdatei](/de/docs/Web/API/FedCM_API/IDP_integration#provide_a_config_file_and_endpoints) (`/config.json`), die unter der `configURL` verfügbar ist.

   Beides sind [`GET`](/de/docs/Web/HTTP/Reference/Methods/GET)-Anfragen, die keine Cookies enthalten und Weiterleitungen nicht folgen. Dadurch wird verhindert, dass IdPs erfahren, wer die Anfrage gestellt hat und welche RP eine Verbindung herstellen möchte.

   Alle Anfragen, die der Browser über FedCM sendet, enthalten einen `{{httpheader("Sec-Fetch-Dest")}}: webidentity`-Header, um {{Glossary("CSRF", "CSRF")}}-Angriffe zu verhindern. Alle IdP-Endpunkte müssen prüfen, ob dieser Header vorhanden ist.

3. Die IdPs antworten mit der angeforderten Well-Known-Datei und den `config.json`-Dateien. Der Browser gleicht die URL der Konfigurationsdatei aus der `get()`-Anfrage mit der Liste gültiger Konfigurations-URLs in der Well-Known-Datei ab.

4. Wenn der [Anmeldestatus eines IdP](/de/docs/Web/API/FedCM_API/IDP_integration#update_login_status_using_the_login_status_api) im Browser auf `"logged-in"` gesetzt ist, sendet der Browser eine Anfrage mit Anmeldedaten an den in der IdP-Konfigurationsdatei angegebenen [`accounts_endpoint`](/de/docs/Web/API/FedCM_API/IDP_integration#the_accounts_list_endpoint), um die Kontodaten der Person abzurufen. Die Anfrage enthält ein Cookie, das die angemeldete Person identifiziert. Es handelt sich um eine `GET`-Anfrage mit Cookies, aber ohne `client_id`-Parameter und ohne {{httpheader("Origin")}}-Header. Dadurch wird verhindert, dass IdPs erfahren, bei welcher RP sich die Person anmelden möchte. Die zurückgegebene Kontoliste ist daher unabhängig von der RP.

   > [!NOTE]
   > Wenn der Anmeldestatus aller IdPs `"logged-out"` ist, wird der `get()`-Aufruf mit einer `NetworkError`-[`DOMException`](/de/docs/Web/API/DOMException) zurückgewiesen. Es wird keine Anfrage an einen `accounts_endpoint` gesendet. In diesem Fall müssen Entwickelnde den weiteren Ablauf selbst handhaben, indem sie die Person beispielsweise auffordern, sich bei einem geeigneten IdP anzumelden. Beachten Sie, dass die Zurückweisung verzögert erfolgen kann, damit die RP den Anmeldestatus beim IdP nicht daraus ableiten kann.

5. Die IdPs antworten mit den von ihren `accounts_endpoint`s angeforderten Kontoinformationen. Die Antworten enthalten Arrays mit allen Konten, die mit den IdP-Cookies der Person verknüpft sind, unabhängig davon, zu welcher mit dem IdP verbundenen RP die Konten gehören.

6. {{optional_inline}} Falls ein Endpunkt in der IdP-Konfigurationsdatei angegeben ist, sendet der Browser eine Anfrage ohne Anmeldedaten an den [`client_metadata_endpoint`](/de/docs/Web/API/FedCM_API/IDP_integration#the_client_metadata_endpoint), um die URLs der Nutzungsbedingungen und der Datenschutzerklärung der RP abzurufen. Es handelt sich um eine `GET`-Anfrage ohne Cookies, bei der die an `get()` übergebene `clientId` als Parameter mitgesendet wird.

7. {{optional_inline}} Die IdPs antworten mit den vom `client_metadata_endpoint` angeforderten URLs.

8. Der Browser verwendet die Informationen aus den beiden vorherigen Anfragegruppen, um eine Benutzeroberfläche zu erstellen. Darin wählt die Person einen IdP (falls sie bei mehreren angemeldet ist) und ein Konto für die Anmeldung bei der RP aus. Außerdem bittet die Benutzeroberfläche um ihre Zustimmung, sich mit dem ausgewählten föderierten IdP-Konto bei der RP anzumelden.

   Wenn die Person beim IdP angemeldet ist, aber _kein_ Konto bei der aktuellen RP hat, enthält die angezeigte Benutzeroberfläche einen **Hinweistext**. Der Browser erklärt darin, dass die Person aufgefordert wird, mit ihrer beim IdP registrierten Identität ein neues Konto bei der RP zu erstellen. Der Hinweistext erscheint üblicherweise in einem Dialog mit einer Option wie „Weiter als …“, gefolgt vom Namen, unter dem die Person beim IdP registriert ist. Er kann auch Links zu den Nutzungsbedingungen und der Datenschutzerklärung der RP enthalten, sofern diese für die RP über den [Endpunkt für Client-Metadaten](/de/docs/Web/API/FedCM_API/IDP_integration#the_client_metadata_endpoint) bereitgestellt wurden. Stimmt die Person der Fortsetzung zu, wird sie anschließend aufgefordert, mit ihrer IdP-Identität ein Konto bei der RP zu erstellen.

   Wenn die Person beim IdP angemeldet ist, _bereits_ ein Konto bei der aktuellen RP hat und sich damit in derselben Browserinstanz schon einmal angemeldet hat, ist möglicherweise eine [automatische erneute Authentifizierung](#automatische_erneute_authentifizierung) möglich. In diesem Fall wird sie automatisch angemeldet, ohne ihre Anmeldedaten erneut einzugeben.

9. Wenn die Person ihre Zustimmung erteilt, sendet der Browser eine Anfrage mit Anmeldedaten an den [`id_assertion_endpoint`](/de/docs/Web/API/FedCM_API/IDP_integration#the_id_assertion_endpoint), um beim ausgewählten IdP ein Validierungstoken für das gewählte Konto anzufordern.

   Die Anmeldedaten werden in einer HTTP-[`POST`](/de/docs/Web/HTTP/Reference/Methods/POST)-Anfrage mit Cookies und dem Inhaltstyp `application/x-www-form-urlencoded` gesendet.

   Schlägt der Aufruf fehl, wird eine Fehlerantwort zurückgegeben, wie unter [Fehlerantworten bei ID-Assertions](/de/docs/Web/API/FedCM_API/IDP_integration#id_assertion_error_responses) erläutert. Das von `get()` zurückgegebene Promise wird mit dem Fehler zurückgewiesen.

10. Der ausgewählte IdP prüft, ob die von der RP gesendete Konto-ID mit der ID des bereits angemeldeten Kontos übereinstimmt und ob `Origin` dem Origin der RP entspricht, der zuvor beim IdP registriert wurde. Wenn alle Prüfungen erfolgreich sind, antwortet er mit dem angeforderten Validierungstoken.

    > [!NOTE]
    > Der Origin der RP wird bei der erstmaligen Integration mit dem IdP in einem vollständig separaten Verfahren registriert. Dieses Verfahren ist für jeden IdP spezifisch.

11. Nach Abschluss des Ablaufs wird das `get()`-Promise mit einem [`IdentityCredential`](/de/docs/Web/API/IdentityCredential)-Objekt erfüllt, das der RP weitere Funktionen bereitstellt. Insbesondere enthält dieses Objekt ein Token. Die RP kann mithilfe eines Zertifikats überprüfen, ob es vom IdP stammt und vertrauenswürdige Informationen über die angemeldete Person enthält. Sobald die RP das Token validiert hat, kann sie die enthaltenen Informationen verwenden, um die Person anzumelden und eine neue Sitzung zu starten, sie für ihren Dienst zu registrieren und so weiter. Format und Struktur des Tokens hängen vom IdP ab und werden nicht durch die FedCM API festgelegt. Die RP muss die Anweisungen des IdP befolgen.

## Aktiver und passiver Modus

Der Browser kann Personen, die sich über die FedCM API bei einer RP anmelden, zwei verschiedene UI-Modi anbieten: **`active`** und **`passive`**. Welcher Modus verwendet wird, steuert die Option [`mode`](/de/docs/Web/API/IdentityCredentialRequestOptions#mode) des `identity`-Objekts:

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

Der Standardwert für `mode` ist `passive`. Wenn `mode` nicht gesetzt oder ausdrücklich auf `passive` gesetzt ist, kann der Browser den Anmeldeablauf über einen `get()`-Aufruf ohne direkte Interaktion der Person starten. Beispielsweise könnten Sie den Anmeldeablauf starten, sobald die Person die Anmeldeseite aufruft, sofern sie IdP-Konten für die Anmeldung besitzt. In diesem Modus zeigen Browser üblicherweise ein Anmeldedialogfenster mit allen im `providers`-Objekt angegebenen Anmeldeoptionen an. Die Person kann eine passende Option auswählen und anschließend die entsprechenden Anmeldedaten eingeben.

Wenn `mode` auf `active` gesetzt ist, muss der Anmeldeablauf durch eine Aktion der Person gestartet werden, etwa durch einen Klick auf eine Schaltfläche ({{Glossary("transient_activation", "transient activation")}} ist erforderlich). Außerdem darf das `providers`-Objekt nur die Länge `1` haben; andernfalls wird das `get()`-Promise zurückgewiesen. Dieser Modus wird üblicherweise verwendet, wenn die RP für jeden IdP eine eigene Schaltfläche anbieten möchte. Klickt die Person auf eine dieser Schaltflächen, erscheint ein vereinfachtes Dialogfenster, in dem sie nur noch die Anmeldedaten für dieses Konto eingeben muss.

Ein Beispiel dafür, wie die verschiedenen UI-Modi in Google Chrome dargestellt werden, finden Sie unter [FedCM UI modes](https://developer.chrome.com/docs/identity/fedcm/overview#fedcm_ui_modes) auf developer.chrome.com.

## Automatische erneute Authentifizierung

Mit der automatischen erneuten Authentifizierung von FedCM können sich Nutzer automatisch erneut authentifizieren, wenn sie sich nach ihrer ersten Authentifizierung mit FedCM wieder bei einer RP anmelden möchten. „Erste Authentifizierung“ bezeichnet den Moment, in dem eine Person auf der Website der RP in derselben Browserinstanz erstmals über den FedCM-Anmeldedialog ein Konto erstellt oder sich anmeldet.

Nach der ersten Authentifizierung kann die Person mithilfe der automatischen erneuten Authentifizierung wieder auf der RP-Website angemeldet werden, ohne dass eine Bestätigungsaufforderung wie „Weiter als …“ angezeigt werden muss. Wenn sie vor Kurzem zugestimmt hat, sich mit einem bestimmten Konto föderiert anzumelden, bringt eine sofortige erneute ausdrückliche Bestätigung keinen Vorteil für Datenschutz oder Sicherheit.

Das Verhalten der automatischen erneuten Authentifizierung wird über die Option [`mediation`](/de/docs/Web/API/CredentialsContainer/get#mediation) im `get()`-Aufruf gesteuert:

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

Eine automatische erneute Authentifizierung ist möglich, wenn `mediation` auf `optional` oder `silent` gesetzt ist.

Bei diesen `mediation`-Optionen erfolgt die automatische erneute Authentifizierung unter folgenden Bedingungen:

- FedCM ist verfügbar. Die Person hat FedCM beispielsweise weder global noch in den Einstellungen der RP deaktiviert.
- Die Person hat sich in diesem Browser über FedCM nur mit einem Konto auf der RP-Website angemeldet. Wenn Konten bei mehreren IdPs vorhanden sind, erfolgt keine automatische erneute Authentifizierung.
- Die Person ist mit diesem Konto beim IdP angemeldet.
- Die Person hat bereits ein Konto bei der RP, das ihre vom IdP verwaltete Identität verwendet. Dies wird durch das Array [`approved_clients`](/de/docs/Web/API/FedCM_API/IDP_integration#approved_clients) im JSON angegeben, das vom [Endpunkt für die Kontoliste](/de/docs/Web/API/FedCM_API/IDP_integration#the_accounts_list_endpoint) zurückgegeben wird.
- Innerhalb der letzten 10 Minuten hat keine automatische erneute Authentifizierung stattgefunden. Diese Einschränkung verhindert, dass Personen unmittelbar nach dem Abmelden automatisch wieder angemeldet werden, was verwirrend wäre.
- Die RP hat seit der vorherigen Anmeldung [`preventSilentAccess()`](/de/docs/Web/API/CredentialsContainer/preventSilentAccess) nicht aufgerufen. Mit dieser Methode kann eine RP die automatische erneute Authentifizierung bei Bedarf ausdrücklich deaktivieren.
- Der UI-Modus ist [passiv](#aktiver_und_passiver_modus).

Wenn diese Bedingungen erfüllt sind, beginnt der Versuch der automatischen erneuten Authentifizierung, sobald `get()` aufgerufen wird. Ist er erfolgreich, wird die Person ohne Bestätigungsaufforderung erneut auf der RP-Website angemeldet. Dabei werden dasselbe IdP-Konto und ein validiertes Token wie zuvor verwendet.

Schlägt die automatische erneute Authentifizierung fehl, hängt das weitere Verhalten vom gewählten `mediation`-Wert ab:

- `optional`: Der Person wird _erneut_ das Dialogfenster angezeigt und sie wird um Bestätigung gebeten. Diese Option eignet sich daher eher für eine Seite, auf der sich die Person nicht mitten in einem Ablauf befindet, beispielsweise für die Anmeldeseite einer RP.
- `silent`: Das `get()`-Promise wird zurückgewiesen. Entwickelnde müssen die Person dann zur Anmeldeseite zurückführen, damit sie den Vorgang erneut starten kann. Diese Option eignet sich für Seiten, auf denen die Person sich mitten in einem Ablauf befindet und bis zu dessen Abschluss angemeldet bleiben muss, beispielsweise während des Bezahlvorgangs auf einer E-Commerce-Website.

> [!NOTE]
> Die Eigenschaft [`IdentityCredential.isAutoSelected`](/de/docs/Web/API/IdentityCredential/isAutoSelected) gibt an, ob die föderierte Anmeldung mittels automatischer erneuter Authentifizierung durchgeführt wurde. Das hilft dabei, die Leistung der API zu bewerten und die Nutzererfahrung entsprechend zu verbessern. Wenn die automatische erneute Authentifizierung nicht verfügbar ist, kann die Person außerdem zur Anmeldung mit ausdrücklicher Nutzerbestätigung aufgefordert werden. Dafür wird `get()` mit `mediation: required` aufgerufen.

## Trennen einer föderierten Anmeldung

Die RP kann die Verknüpfung eines bestimmten Kontos für die föderierte Anmeldung mit dem zugehörigen IdP trennen, indem sie [`IdentityCredential.disconnect()`](/de/docs/Web/API/IdentityCredential/disconnect_static) aufruft. Diese Funktion kann aus einem RP-Frame auf oberster Ebene aufgerufen werden.

```js
IdentityCredential.disconnect({
  configURL: "https://idp.example.com/config.json",
  clientId: "rp123",
  accountHint: "account456",
});
```

Damit ein `disconnect()`-Aufruf funktioniert, muss der IdP in seiner Konfigurationsdatei einen [`disconnect_endpoint`](/de/docs/Web/API/FedCM_API/IDP_integration#disconnect_endpoint) angeben. Weitere Einzelheiten zur zugrunde liegenden HTTP-Kommunikation finden Sie unter [Der Endpunkt zum Trennen der Verknüpfung](/de/docs/Web/API/FedCM_API/IDP_integration#the_disconnect_endpoint).

## Siehe auch

- [Federated Credential Management API](https://developer.chrome.com/docs/identity/fedcm/overview) auf developer.chrome.com (2023)
