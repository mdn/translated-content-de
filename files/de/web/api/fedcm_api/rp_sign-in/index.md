---
title: Abhängige Partei föderierter Login
slug: Web/API/FedCM_API/RP_sign-in
l10n:
  sourceCommit: dc788bf0ea36cb1ebe809c82aaae2c77cb3e18c0
---

{{DefaultAPISidebar("FedCM API")}}

Dieser Artikel beschreibt den Prozess, durch den eine {{Glossary("Relying_party", "abhängige Partei")}} (RP) die [Federated Credential Management (FedCM) API](/de/docs/Web/API/FedCM_API) verwenden kann, um einen föderierten Login über einen {{Glossary("Identity_provider", "Identitätsanbieter")}} (IdP) durchzuführen.

## Aufruf der `get()`-Methode

RPs können [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) mit einer `identity`-Option aufrufen, um anzufordern, dass einem Benutzer die Option angeboten wird, sich beim RP mit einer Auswahl von bestehenden IdP-Konten (mit denen sie bereits im Browser angemeldet sind) anzumelden. Die IdPs identifizieren das RP anhand seiner `clientId`, die von jedem IdP in einem separaten IdP-spezifischen Prozess an das RP ausgegeben wurde. Der gewählte IdP identifiziert den spezifischen Benutzer, der sich mit den dem Browser während des [Login-Flows](#fedcm-login-fluss) bereitgestellten Anmeldeinformationen (Cookies) anmeldet.

Die Methode gibt ein Versprechen zurück, das mit einem [`IdentityCredential`](/de/docs/Web/API/IdentityCredential)-Objekt erfüllt wird, wenn die Benutzeridentität erfolgreich vom gewählten IdP validiert wird. Dieses Objekt enthält ein Token, das Benutzeridentitätsinformationen umfasst, die mit dem {{Glossary("digital_certificate", "digitalen Zertifikat")}} des IdP signiert wurden.

Das RP sendet das Token an seinen Server, um das Zertifikat zu validieren. Bei Erfolg kann es die (nun vertrauenswürdigen) Identitätsinformationen im Token verwenden, um den Benutzer in seinen Dienst einzuloggen (eine neue Sitzung zu starten), ihn bei seinem Dienst anzumelden, wenn er ein neuer Benutzer ist, usw.

Wenn sich der Benutzer noch nie bei einem IdP angemeldet hat oder ausgeloggt ist, lehnt die `get()`-Methode mit einem Fehler ab und das RP kann den Benutzer zu einer IdP-Seite weiterleiten, um sich anzumelden oder ein Konto zu erstellen.

> [!NOTE]
> Die genaue Struktur und der Inhalt des Validierungstokens sind für die FedCM API und den Browser undurchsichtig. Ein IdP entscheidet über die Syntax und Verwendung des Tokens, und das RP muss den Anweisungen des IdP folgen (siehe [Verifizieren des Google ID-Tokens auf Ihrem Server](https://developers.google.com/identity/gsi/web/guides/verify-google-id-token), zum Beispiel), um sicherzustellen, dass sie es korrekt verwenden.

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
          nonce: "******",
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

Die `identity.providers`-Eigenschaft nimmt ein Array entgegen, das ein oder mehrere Objekte enthält, die den Pfad zur Konfigurationsdatei jedes IdP (`configURL`) und den vom IdP ausgegebenen Client-Identifikator des RP (`clientId`) angeben.

Das vorherige Beispiel enthält auch einige optionale Funktionen:

- `identity.context` spezifiziert den Kontext, in dem sich der Benutzer mit FedCM authentifiziert. Zum Beispiel, ob es sich um eine erstmalige Anmeldung für dieses Konto oder um eine Anmeldung mit einem bestehenden Konto handelt. Der Browser verwendet diese Informationen, um den Text in seiner FedCM-Benutzeroberfläche besser an den Kontext anzupassen.
- Die `nonce`-Eigenschaft stellt einen zufälligen {{Glossary("Nonce", "Nonce")}}-Wert bereit, der sicherstellt, dass die Antwort speziell für diese Anfrage ausgegeben wird, um {{Glossary("replay_attack", "Replay-Angriffe")}} zu verhindern.
- Die `loginHint`-Eigenschaft bietet einen Hinweis auf die Kontenoption(en), die der Browser für die Benutzerauthentifizierung präsentieren soll. Dieser Hinweis wird mit den `login_hints`-Werten abgeglichen, die der IdP am [Kontenliste-Endpunkt](/de/docs/Web/API/FedCM_API/IDP_integration#the_accounts_list_endpoint) bereitstellt.

Der Browser fordert die IdP-Konfigurationsdateien an und führt den unten beschriebenen Login-Flow durch. Für weitere Informationen über die Art der Interaktion, die ein Benutzer von der vom Browser bereitgestellten Benutzeroberfläche erwarten könnte, siehe [Implementierung einer Identitätslösung mit FedCM auf der Seite der Abhängige Partei](https://developer.chrome.com/docs/identity/fedcm/implement/relying-party).

## FedCM-Login-Fluss

Am Login-Flow sind drei Parteien beteiligt — die RP-App, der Browser selbst und der IdP. Das folgende Diagramm fasst zusammen, was visuell geschieht.

![eine visuelle Darstellung des unten detailliert beschriebenen Flusses](fedcm-flow.png)

Der Ablauf ist wie folgt:

1. Das RP ruft [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) auf, um den Anmeldungsfluss zu starten.

2. Aus der für jeden IdP angegebenen `configURL` fordert der Browser zwei Dateien an:
   1. Die well-known-Datei (`/.well-known/web-identity`), verfügbar unter `/.well-known/web-identity` beim [eTLD+1](https://web.dev/articles/same-site-same-origin#site) der `configURL`.
   2. Die [IdP-Konfigurationsdatei](/de/docs/Web/API/FedCM_API/IDP_integration#provide_a_config_file_and_endpoints) (`/config.json`), verfügbar an der `configURL`.

   Dies sind beide [`GET`](/de/docs/Web/HTTP/Reference/Methods/GET)-Anfragen, die keine Cookies haben und denen keine Weiterleitungen folgen. Dies verhindert effektiv, dass IdPs erfahren, wer die Anfrage gestellt hat und welches RP eine Verbindung herstellen will.

   Alle über FedCM vom Browser gesendeten Anfragen enthalten einen `{{httpheader("Sec-Fetch-Dest")}}: webidentity`-Header, um {{Glossary("CSRF", "CSRF")}}-Angriffe zu verhindern. Alle IdP-Endpunkte müssen diesen Header bestätigen.

3. Die IdPs antworten mit der angeforderten well-known-Datei und `config.json`-Dateien. Der Browser validiert die Konfigurationsdatei-URL in der `get()`-Anfrage anhand der Liste gültiger Konfigurations-URLs in der well-known-Datei.

4. Wenn der Browser einen [Login-Status eines IdP](/de/docs/Web/API/FedCM_API/IDP_integration#update_login_status_using_the_login_status_api) auf `"eingeloggt"` gesetzt hat, macht er eine Anfrage mit Anmeldeinformationen (d.h. mit einem Cookie, das den Benutzer identifiziert, der angemeldet ist) an den [`accounts_endpoint`](/de/docs/Web/API/FedCM_API/IDP_integration#the_accounts_list_endpoint) innerhalb der IdP-Konfigurationsdatei für die Kontodetails des Benutzers. Dies ist eine `GET`-Anfrage mit Cookies, jedoch ohne `client_id`-Parameter oder den {{httpheader("Origin")}}-Header. Dies verhindert effektiv, dass IdPs erfahren, bei welchem RP sich der Benutzer anmelden will. Als Ergebnis ist die zurückgegebene Kontoübersicht RP-agnostisch.

   > [!NOTE]
   > Wenn die Login-Status der IdPs alle `"ausgeloggt"` sind, lehnt der `get()`-Aufruf mit einem `NetworkError` [`DOMException`](/de/docs/Web/API/DOMException) ab und stellt keine Anfrage an irgendeinen `accounts_endpoint` des IdP. In diesem Fall liegt es am Entwickler, den Fluss zu handhaben, z. B. den Benutzer aufzufordern, sich bei einem geeigneten IdP anzumelden. Beachten Sie, dass es zu einer Verzögerung bei der Ablehnung kommen kann, um zu verhindern, dass der Login-Status des IdP an das RP weitergeleitet wird.

5. Die IdPs antworten mit den Kontoinformationen, die von ihren `accounts_endpoint`s angefordert wurden. Dies sind Arrays aller Konten, die mit den IdP-Cookies des Benutzers für alle mit einem IdP verbundenen RPs verbunden sind.

6. {{optional_inline}} Wenn in einer IdP-Konfigurationsdatei enthalten, macht der Browser eine unbeglaubigte Anfrage an den [`client_metadata_endpoint`](/de/docs/Web/API/FedCM_API/IDP_integration#the_client_metadata_endpoint) für die Lage der Nutzungsbedingungen des RP und Datenschutzrichtlinienseiten. Dies ist eine `GET`-Anfrage, die mit dem in das `get()`-Aufruf übergebenen `clientId` als Parameter, jedoch ohne Cookies gesendet wird.

7. {{optional_inline}} Die IdPs antworten mit den von dem `client_metadata_endpoint` angeforderten URLs.

8. Der Browser verwendet die Informationen, die durch die vorherigen beiden Sets von Anfragen erhalten wurden, um die Benutzeroberfläche zu erstellen, die den Benutzer auffordert, einen IdP auszuwählen (falls mehr als einer angemeldet ist) und ein Konto zu wählen, um sich beim RP anzumelden. Die Benutzeroberfläche fragt den Benutzer auch um Erlaubnis, sich mit seinem gewählten föderierten IdP-Konto beim RP anzumelden.

   > [!NOTE]
   > In diesem Stadium, wenn sich der Benutzer zuvor mit einem föderierten RP-Konto in der aktuellen Browserinstanz authentifiziert hat (d.h. ein neues Konto mit dem RP erstellt oder sich auf der Website des RP mit einem bestehenden Konto eingeloggt hat), kann er möglicherweise **automatisch reauthentifizieren**, abhängig davon, was die [`mediation`](/de/docs/Web/API/CredentialsContainer/get#mediation)-Option im `get()`-Aufruf festgelegt ist. Wenn dies der Fall ist, wird der Benutzer automatisch ohne Eingabe seiner Anmeldedaten angemeldet, sobald `get()` aufgerufen wird. Weitere Details finden Sie im Abschnitt [Auto-Reauthentifizierung](#auto-reauthentifizierung).

9. Wenn der Benutzer die Erlaubnis dazu erteilt, macht der Browser eine Anfrage mit Anmeldeinformationen an den [`id_assertion_endpoint`](/de/docs/Web/API/FedCM_API/IDP_integration#the_id_assertion_endpoint) um ein Validierungstoken vom gewählten IdP für das ausgewählte Konto anzufordern.

   Die Anmeldeinformationen werden in einer HTTP [`POST`](/de/docs/Web/HTTP/Reference/Methods/POST)-Anfrage mit Cookies und einem Content-Typ `application/x-www-form-urlencoded` gesendet.

   Wenn der Aufruf fehlschlägt, wird eine Fehlernutzlast zurückgegeben, wie in [Fehlerantworten bei ID-Bestätigung](/de/docs/Web/API/FedCM_API/IDP_integration#id_assertion_error_responses) erklärt, und das Versprechen, das von `get()` zurückgegeben wird, lehnt mit dem Fehler ab.

10. Der gewählte IdP überprüft, ob die vom RP gesendete Konto-ID mit der ID des Kontos übereinstimmt, das bereits angemeldet ist, und dass der `Origin` mit dem Ursprung des RP übereinstimmt, der im Voraus beim IdP registriert wurde. Wenn alles gut aussieht, antwortet er mit dem angeforderten Validierungstoken.

    > [!NOTE]
    > Der Ursprung des RP wird in einem völlig separaten Prozess registriert, wenn das RP zuerst in den IdP integriert wird. Dieser Prozess wird für jeden IdP spezifisch sein.

11. Wenn der Flow abgeschlossen ist, löst das `get()`-Versprechen sich mit einem [`IdentityCredential`](/de/docs/Web/API/IdentityCredential)-Objekt auf, das weitere RP-Funktionalitäten bietet. Insbesondere enthält dieses Objekt ein Token, das das RP verifizieren kann, dass es vom IdP stammt (mithilfe eines Zertifikats) und das vertrauenswürdige Informationen über den angemeldeten Benutzer enthält. Sobald das RP das Token validiert, kann es die darin enthaltenen Informationen verwenden, um den Benutzer einzuloggen und eine neue Sitzung zu starten, ihn bei seinem Dienst anzumelden usw. Das Format und die Struktur des Tokens hängen vom IdP ab und haben nichts mit der FedCM-API zu tun (das RP muss den Anweisungen des IdP folgen).

## Aktiver versus passiver Modus

Es gibt zwei verschiedene Benutzeroberflächenmodi, die der Browser einem RP-Benutzer bei einem Login über die FedCM-API bereitstellen kann, den **`active`** und den **`passive`** Modus. Welcher Modus für die Anmeldung verwendet wird, wird durch die [`mode`](/de/docs/Web/API/IdentityCredentialRequestOptions#mode)-Option des `identity`-Objekts gesteuert:

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

Der Standardwert für `mode` ist `passive`. Wenn `mode` nicht gesetzt ist oder explizit auf `passive` gesetzt wird, kann der Browser den Anmeldefluss über einen `get()`-Aufruf ohne direkte Benutzerinteraktion initiieren. Zum Beispiel könnte man den Anmeldefluss starten wollen, sobald der Benutzer auf die Anmeldeseite navigiert, vorausgesetzt, er hat IdP-Konten, mit denen er sich anmelden kann. In diesem Modus präsentieren Browser dem Benutzer normalerweise ein Anmeldedialogfenster mit allen verschiedenen Anmeldeoptionen, die im `providers`-Objekt angegeben sind, und er kann diejenige auswählen, die ihm am besten passt, und dann die entsprechenden Anmeldedaten eingeben.

Wenn `mode` auf `active` gesetzt ist, erfordert der Browser, dass der Anmeldefluss durch eine Benutzeraktion ausgelöst wird, z. B. durch das Klicken auf eine Schaltfläche ({{Glossary("transient_activation", "flüchtige Aktivierung")}} ist erforderlich), und das `providers`-Objekt darf nur eine Länge von `1` haben, sonst lehnt das `get()`-Versprechen ab. Dieser Modus wird typischerweise verwendet, wenn das RP für jede IdP-Auswahl eine separate Schaltfläche bereitstellen möchte. Wenn der Benutzer eine dieser Schaltflächen klickt, erscheint ein vereinfachtes Dialogfenster, das nur erfordert, dass er die Anmeldedaten für dieses Konto eingibt.

Siehe [FedCM Benutzeroberflächenmodi](https://developer.chrome.com/docs/identity/fedcm/overview#fedcm_ui_modes) auf developer.chrome.com für ein Beispiel dafür, wie die unterschiedlichen Benutzeroberflächenmodi in Google Chrome präsentiert werden.

## Auto-Reauthentifizierung

Die FedCM-Auto-Reauthentifizierung ermöglicht es Benutzern, sich automatisch erneut zu authentifizieren, wenn sie versuchen, sich nach ihrer anfänglichen Authentifizierung über FedCM erneut bei einem RP anzumelden. Bei "anfänglicher Authentifizierung" handelt es sich um den Zeitpunkt, zu dem der Benutzer ein Konto erstellt oder sich zum ersten Mal über den FedCM-Anmeldedialog auf der RP-Website mit einem bestehenden Konto anmeldet, und zwar in derselben Browserinstanz.

Nach der anfänglichen Authentifizierung kann die Auto-Reauthentifizierung verwendet werden, um sich erneut automatisch bei der RP-Website anzumelden, ohne dass dem Benutzer eine "Weiter als..."-Bestätigungsaufforderung angezeigt werden muss. Wenn der Benutzer kürzlich die Erlaubnis erteilt hat, einen föderierten Login mit einem bestimmten Konto durchzuführen, gibt es keinen Datenschutz- oder Sicherheitsvorteil, sofort eine weitere ausdrückliche Benutzerbestätigung durchzusetzen.

Das Verhalten der Auto-Reauthentifizierung wird durch die [`mediation`](/de/docs/Web/API/CredentialsContainer/get#mediation)-Option im `get()`-Aufruf gesteuert:

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

Die Auto-Reauthentifizierung kann erfolgen, wenn `mediation` auf `optional` oder `silent` gesetzt ist.

Mit diesen `mediation`-Optionen wird die Auto-Reauthentifizierung unter folgenden Bedingungen durchgeführt:

- FedCM kann verwendet werden. Zum Beispiel hat der Benutzer FedCM nicht entweder global oder in den Einstellungen des RP deaktiviert.
- Der Benutzer hat nur ein Konto verwendet, um sich auf dieser Browserinstanz über FedCM bei der RP-Website anzumelden. Wenn Konten für mehrere IdPs existieren, wird der Benutzer nicht automatisch erneut authentifiziert.
- Der Benutzer ist mit diesem Konto beim IdP angemeldet.
- Die Auto-Reauthentifizierung fand nicht innerhalb der letzten 10 Minuten statt. Diese Beschränkung wurde eingeführt, um zu verhindern, dass Benutzer sofort nach dem Abmelden automatisch erneut authentifiziert werden — was sehr verwirrend für den Benutzer wäre.
- Das RP hat [`preventSilentAccess()`](/de/docs/Web/API/CredentialsContainer/preventSilentAccess) nicht nach dem vorherigen Login aufgerufen. Dies kann von einem RP verwendet werden, um die Auto-Reauthentifizierung explizit zu deaktivieren, wenn gewünscht.
- Der Benutzeroberflächenmodus ist [passive]().

Wenn diese Bedingungen erfüllt sind, startet der Versuch, den Benutzer automatisch erneut zu authentifizieren, sobald `get()` aufgerufen wird. Wenn die Auto-Reauthentifizierung erfolgreich ist, wird der Benutzer erneut angemeldet, ohne dass ihm eine Bestätigungsaufforderung angezeigt wird, wobei dasselbe IdP-Konto und das gleiche validierte Token verwendet werden, wie zuvor.

Wenn die Auto-Reauthentifizierung fehlschlägt, hängt das Verhalten von dem gewählten `mediation`-Wert ab:

- `optional`: dem Benutzer _wird_ das Dialogfeld angezeigt und er wird erneut um Bestätigung gebeten. Dies führt dazu, dass diese Option auf einer Seite sinnvoll ist, bei der sich der Benutzer nicht in einem laufenden Prozess befindet, wie einer Anmeldeseite des RP.
- `silent`: Das `get()`-Versprechen wird abgelehnt und der Entwickler muss den Benutzer zurück zur Anmeldeseite führen, um den Prozess erneut zu starten. Diese Option macht auf Seiten Sinn, bei denen ein Benutzerprozess im Gang ist und Sie ihn bis zum Abschluss angemeldet halten müssen, z. B. auf den Seiten eines Kaufprozesses auf einer E-Commerce-Website.

> [!NOTE]
> Die [`IdentityCredential.isAutoSelected`](/de/docs/Web/API/IdentityCredential/isAutoSelected)-Eigenschaft gibt an, ob der föderierte Login durch Auto-Reauthentifizierung durchgeführt wurde. Dies ist hilfreich zur Bewertung der API-Leistung und zur Verbesserung des Benutzererlebnisses entsprechend. Außerdem kann der Benutzer, wenn diese Option nicht verfügbar ist, mit ausdrücklicher Benutzerintervention aufgefordert werden, sich anzumelden, was einem `get()`-Aufruf mit `mediation: required` entspricht.

## Trennen eines föderierten Logins

Das RP kann ein bestimmtes föderiertes Anmeldekonto vom zugehörigen IdP trennen, indem es [`IdentityCredential.disconnect()`](/de/docs/Web/API/IdentityCredential/disconnect_static) aufruft. Diese Funktion kann von einem obersten RP-Rahmen aufgerufen werden.

```js
IdentityCredential.disconnect({
  configURL: "https://idp.example.com/config.json",
  clientId: "rp123",
  accountHint: "account456",
});
```

Damit ein `disconnect()`-Aufruf funktioniert, muss der IdP einen [`disconnect_endpoint`](/de/docs/Web/API/FedCM_API/IDP_integration#disconnect_endpoint) in seiner Konfigurationsdatei einschließen. Siehe [Der Disconnect-Endpunkt](/de/docs/Web/API/FedCM_API/IDP_integration#the_disconnect_endpoint) für weitere Details zur zugrunde liegenden HTTP-Kommunikation.

## Siehe auch

- [Federated Credential Management API](https://developer.chrome.com/docs/identity/fedcm/overview) auf developer.chrome.com (2023)
