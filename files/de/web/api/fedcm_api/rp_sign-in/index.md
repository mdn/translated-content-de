---
title: Anbieter für föderierte Anmeldung
slug: Web/API/FedCM_API/RP_sign-in
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{DefaultAPISidebar("FedCM API")}}

Dieser Artikel beschreibt den Prozess, durch den eine anfragende Partei (RP) die [Federated Credential Management (FedCM) API](/de/docs/Web/API/FedCM_API) verwenden kann, um eine föderierte Anmeldung über einen Identitätsanbieter (IdP) durchzuführen.

## Aufrufen der get()-Methode

RPs können [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) mit einer `identity`-Option aufrufen, um zu verlangen, dass sich ein Benutzer mit einem vorhandenen IdP-Konto anmeldet, bei dem er bereits im Browser angemeldet ist. Der IdP identifiziert die RP anhand ihrer `clientId`, die vom IdP an die RP in einem separaten, spezifischen Prozess ausgegeben wurde. Der IdP identifiziert den spezifischen Benutzer mithilfe von Anmeldedaten (Cookies), die dem Browser beim Login zur Verfügung gestellt werden.

Die Methode gibt ein Versprechen zurück, das mit einem [`IdentityCredential`](/de/docs/Web/API/IdentityCredential)-Objekt erfüllt wird, wenn die Benutzeridentität erfolgreich vom IdP validiert wurde. Dieses Objekt enthält ein Token mit Benutzeridentitätsinformationen, die mit dem {{Glossary("digital_certificate", "digitalen Zertifikat")}} des IdP signiert wurden.

Die RP sendet das Token an ihren Server, um das Zertifikat zu validieren. Bei Erfolg kann sie die (jetzt vertrauenswürdigen) Identitätsinformationen im Token verwenden, um den Benutzer in ihren Dienst einzuloggen (eine neue Sitzung zu beginnen), ihn bei ihrem Dienst anzumelden, falls es sich um einen neuen Benutzer handelt, usw.

Wenn der Benutzer sich noch nie beim IdP angemeldet hat oder ausgeloggt ist, lehnt die `get()`-Methode mit einem Fehler ab und die RP kann den Benutzer zur IdP-Anmeldeseite leiten, um sich anzumelden oder ein Konto zu erstellen.

> [!NOTE]
> Die genaue Struktur und der Inhalt des Validierungstokens sind für die FedCM API und den Browser undurchsichtig. Der IdP entscheidet über die Syntax und Anwendung und die RP muss den Anweisungen des IdP folgen (siehe [Überprüfen des Google-ID-Tokens auf Ihrer Serverseite](https://developers.google.com/identity/gsi/web/guides/verify-google-id-token) als Beispiel), um sicherzustellen, dass es richtig verwendet wird.

Ein typischer Request könnte so aussehen:

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

Die `identity.providers`-Eigenschaft nimmt ein Array entgegen, das ein einzelnes Objekt enthält, das den Pfad zu einer IdP-Konfigurationsdatei (`configURL`) und die vom IdP ausgegebene Kundenkennung (`clientId`) der RP angibt.

> [!NOTE]
> Derzeit erlaubt FedCM nur, dass die API mit einem einzigen IdP aufgerufen wird, d.h. das `identity.providers`-Array muss die Länge 1 haben. Um den Benutzern die Wahl eines Identitätsanbieters zu ermöglichen, muss die RP `get()` für jeden IdP separat aufrufen. Dies könnte sich in Zukunft ändern.

Das obige Beispiel enthält auch einige optionale Funktionen:

- `identity.context` spezifiziert den Kontext, in dem der Benutzer sich mit FedCM authentifiziert. Zum Beispiel, ob es sich um eine erstmalige Anmeldung für dieses Konto handelt oder um eine Anmeldung mit einem vorhandenen Konto. Der Browser verwendet diese Informationen, um den Text in seiner FedCM-Benutzeroberfläche entsprechend dem Kontext anzupassen.
- Die Eigenschaft `nonce` bietet einen zufälligen Nonce-Wert, der sicherstellt, dass die Antwort für diese spezifische Anfrage ausgestellt wird, um {{Glossary("replay_attack", "Wiederholungsangriffe")}} zu verhindern.
- Die Eigenschaft `loginHint` gibt einen Hinweis auf die Kontenoptionen, die der Browser für die Benutzeranmeldung präsentieren sollte. Dieser Hinweis wird mit den `login_hints`-Werten abgeglichen, die der IdP vom [Konto-Liste-Endpunkt](/de/docs/Web/API/FedCM_API/IDP_integration#the_accounts_list_endpoint) bereitstellt.

Der Browser fordert die IdP-Konfigurationsdatei an und führt den unten detaillierten Anmeldefluss durch. Für weitere Informationen über die Art der Interaktion, die ein Benutzer von der browsergesteuerten Benutzeroberfläche erwarten könnte, siehe [Anmeldung bei der anfragenden Partei mit dem Identitätsanbieter](https://privacysandbox.google.com/cookies/fedcm#sign-in).

## FedCM-Anmeldefluss

Am Anmeldefluss sind drei Parteien beteiligt — die RP-App, der Browser selbst und der IdP. Das folgende Diagramm fasst zusammen, was visuell geschieht.

![eine visuelle Darstellung des unten detailliert beschriebenen Flusses](fedcm-flow.png)

Der Fluss ist wie folgt:

1. Die RP ruft [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) auf, um den Anmeldefluss zu starten.

2. Vom in der `get()`-Anfrage angegebenen `configURL` fordert der Browser zwei Dateien an:

   1. Die bekannte Datei (`/.well-known/web-identity`), verfügbar unter `/.well-known/web-identity` auf der [eTLD+1](https://web.dev/articles/same-site-same-origin#site) des `configURL`.
   2. Die [IdP-Konfigurationsdatei](/de/docs/Web/API/FedCM_API/IDP_integration#provide_a_config_file_and_endpoints) (`/config.json`), verfügbar am `configURL`.

   Dies sind beide [`GET`](/de/docs/Web/HTTP/Reference/Methods/GET)-Anfragen, die keine Cookies haben und keinen Weiterleitungen folgen. Dies verhindert effektiv, dass der IdP erfährt, wer die Anfrage gestellt hat und welche RP eine Verbindung herzustellen versucht.

   Alle über FedCM vom Browser gesendeten Anfragen enthalten einen `{{httpheader("Sec-Fetch-Dest")}}: webidentity`-Header, um {{Glossary("CSRF", "CSRF")}}-Angriffe zu verhindern. Alle IdP-Endpunkte müssen bestätigen, dass dieser Header enthalten ist.

3. Der IdP antwortet mit der angeforderten bekannten Datei und den `config.json`-Dateien. Der Browser validiert die Konfigurationsdatei-URL in der `get()`-Anfrage anhand der Liste der gültigen Konfigurations-URLs in der bekannten Datei.

4. Wenn der Browser den [IdP-Anmeldestatus](/de/docs/Web/API/FedCM_API/IDP_integration#update_login_status_using_the_login_status_api) auf `"eingeloggt"` gesetzt hat, stellt er eine autorisierte Anfrage (d.h. mit einem Cookie, das den angemeldeten Benutzer identifiziert) an den [`accounts_endpoint`](/de/docs/Web/API/FedCM_API/IDP_integration#the_accounts_list_endpoint) in der IdP-Konfigurationsdatei für die Kontodetails des Benutzers. Dies ist eine `GET`-Anfrage mit Cookies, jedoch ohne `client_id`-Parameter oder {{httpheader("Origin")}}-Header. Dies verhindert effektiv, dass der IdP erfährt, bei welcher RP sich der Benutzer anmelden möchte. Infolgedessen ist die Liste der zurückgegebenen Konten RP-agnostisch.

   > [!NOTE]
   > Wenn der IdP-Anmeldestatus `"logged-out"` ist, lehnt der `get()`-Aufruf mit einem `NetworkError` [`DOMException`](/de/docs/Web/API/DOMException) ab und es wird keine Anfrage an den `accounts_endpoint` des IdP gestellt. In diesem Fall liegt es am Entwickler, den Fluss zu steuern, zum Beispiel indem er den Benutzer auffordert, sich beim richtigen IdP anzumelden. Beachten Sie, dass es eine gewisse Verzögerung bei der Ablehnung geben kann, um zu verhindern, dass der Anmeldestatus des IdP an die RP weitergegeben wird.

5. Der IdP antwortet mit den angeforderten Kontoinformationen vom `accounts_endpoint`. Dies ist ein Array aller Konten, die mit den IdP-Cookies des Benutzers für alle RPs, die mit dem IdP verbunden sind, assoziiert sind.

6. {{optional_inline}} Wenn in der IdP-Konfigurationsdatei enthalten, sendet der Browser eine nicht autorisierte Anfrage an den [`client_metadata_endpoint`](/de/docs/Web/API/FedCM_API/IDP_integration#the_client_metadata_endpoint) für die Lage der RP-Servicebedingungen und Datenschutzrichtlinienseiten. Dies ist eine `GET`-Anfrage, die mit dem als Parameter in den `get()`-Aufruf übergebenen `clientId` gesendet wird, ohne Cookies.

7. {{optional_inline}} Der IdP antwortet mit den angeforderten URLs vom `client_metadata_endpoint`.

8. Der Browser verwendet die Informationen aus den vorherigen beiden Anfragen, um die Benutzeroberfläche zu erstellen, die den Benutzer auffordert, ein Konto auszuwählen, mit dem er sich bei der RP anmelden möchte (für den Fall, dass mehr als eines verfügbar ist). Die Benutzeroberfläche bittet den Benutzer auch um Erlaubnis, sich mit ihrem gewählten föderierten IdP-Konto bei der RP anzumelden.

   > [!NOTE]
   > In diesem Stadium, wenn sich der Benutzer zuvor bei einem föderierten RP-Konto in der aktuellen Browserinstanz authentifiziert hat (d.h. ein neues Konto bei der RP erstellt oder sich mit einem bestehenden Konto auf der RP-Website angemeldet hat), ist es ihm möglich, sich **auto-authentifizieren** zu lassen, abhängig davon, was die [`mediation`](/de/docs/Web/API/CredentialsContainer/get#mediation)-Option im `get()`-Aufruf eingestellt hat. Wenn es so ist, wird der Benutzer automatisch ohne Eingabe seiner Anmeldedaten angemeldet, sobald `get()` aufgerufen wird. Weitere Details finden Sie im Abschnitt [Auto-authentication](#automatische_reauthentifizierung).

9. Wenn der Benutzer die Erlaubnis erteilt, sendet der Browser eine autorisierte Anfrage an den [`id_assertion_endpoint`](/de/docs/Web/API/FedCM_API/IDP_integration#the_id_assertion_endpoint), um vom IdP ein Validierungstoken für das ausgewählte Konto anzufordern.

   Die Anmeldedaten werden in einer HTTP-`POST`-Anfrage mit Cookies und einem Inhaltstyp von `application/x-www-form-urlencoded` gesendet.

   Wenn der Aufruf fehlschlägt, wird eine Fehlernutzlast zurückgegeben, wie in [ID-Bestätigungsfehlerantworten](/de/docs/Web/API/FedCM_API/IDP_integration#id_assertion_error_responses) erläutert wird, und das von `get()` zurückgegebene Versprechen wird mit dem Fehler abgelehnt.

10. Der IdP überprüft, ob die von der RP gesendete Konto-ID mit der ID des bereits angemeldeten Kontos übereinstimmt und ob der `Origin` mit dem Ursprung der RP übereinstimmt, der im Voraus beim IdP registriert wurde. Wenn alles in Ordnung ist, antwortet er mit dem angeforderten Validierungstoken.

    > [!NOTE]
    > Der Ursprung der RP wird in einem völlig separaten Prozess registriert, wenn die RP erstmals mit dem IdP integriert wird. Dieser Prozess ist für jeden IdP spezifisch.

11. Wenn der Fluss abgeschlossen ist, löst das `get()`-Versprechen mit einem [`IdentityCredential`](/de/docs/Web/API/IdentityCredential)-Objekt aus, das weitere RP-Funktionalitäten bietet. Am bemerkenswertesten ist, dass dieses Objekt ein Token enthält, das die RP verifizieren kann, dass es vom IdP stammt (mithilfe eines Zertifikats) und das vertrauenswürdige Informationen über den angemeldeten Benutzer enthält. Sobald die RP das Token validiert hat, kann sie die darin enthaltenen Informationen verwenden, um den Benutzer anzumelden und eine neue Sitzung zu starten, ihn bei ihrem Dienst anzumelden usw. Das Format und die Struktur des Tokens hängen vom IdP ab und haben nichts mit der FedCM-API zu tun (die RP muss den Anweisungen des IdP folgen).

## Automatische Reauthentifizierung

FedCM ermöglicht die automatische Reauthentifizierung, indem Benutzer sich automatisch wieder authentifizieren können, wenn sie versuchen, sich nach ihrer anfänglichen Authentifizierung mit FedCM erneut bei einer RP anzumelden. "Anfängliche Authentifizierung" bezieht sich auf den Zeitpunkt, zu dem der Benutzer ein Konto erstellt oder sich über das FedCM-Anmeldedialogfeld zum ersten Mal auf der RP-Website im selben Browser anmeldet.

Nach der anfänglichen Authentifizierung kann die automatische Reauthentifizierung genutzt werden, um sich erneut automatisch auf der RP-Website anzumelden, ohne dass dem Benutzer eine "Weiter als..."-Bestätigung angezeigt werden muss. Wenn der Benutzer kürzlich die Erlaubnis erteilt hat, eine föderierte Anmeldung mit einem bestimmten Konto durchzuführen, gibt es keinen Datenschutz- oder Sicherheitsvorteil, eine sofortige weitere ausdrückliche Benutzerbestätigung zu erzwingen.

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

Die automatische Reauthentifizierung kann erfolgen, wenn `mediation` auf `optional` oder `silent` gesetzt ist.

Mit diesen `mediation`-Optionen tritt die automatische Reauthentifizierung unter folgenden Bedingungen auf:

- FedCM steht zur Nutzung zur Verfügung. Zum Beispiel hat der Benutzer FedCM nicht global oder in den Einstellungen der RP deaktiviert.
- Der Benutzer hat sich nur mit einem Konto über FedCM auf dieser Browserinstanz auf der RP-Website angemeldet.
- Der Benutzer ist mit diesem Konto beim IdP angemeldet.
- Die automatische Reauthentifizierung fand nicht in den letzten 10 Minuten statt. Diese Einschränkung dient dazu, zu verhindern, dass Benutzer sofort nach dem Abmelden automatisch wieder authentifiziert werden, was zu einer ziemlich verwirrenden Benutzererfahrung führen würde.
- Die RP hat nach der vorherigen Anmeldung nicht [`preventSilentAccess()`](/de/docs/Web/API/CredentialsContainer/preventSilentAccess) aufgerufen. Dies kann von einer RP verwendet werden, um die automatische Reauthentifizierung explizit zu deaktivieren, wenn gewünscht.

Wenn diese Bedingungen erfüllt sind, wird ein Versuch gestartet, den Benutzer automatisch erneut zu authentifizieren, sobald `get()` aufgerufen wird. Wenn die automatische Reauthentifizierung erfolgreich ist, wird der Benutzer erneut auf der RP-Website angemeldet, ohne dass ihm ein Bestätigungsdialogfeld angezeigt wird, wobei dasselbe IdP-Konto und das validierte Token wie zuvor verwendet werden.

Wenn die automatische Reauthentifizierung fehlschlägt, hängt das Verhalten von dem gewählten `mediation`-Wert ab:

- `optional`: dem Benutzer _wird_ der Dialog angezeigt und er wird erneut um Bestätigung gebeten. Infolgedessen macht es meist Sinn, diese Option auf einer Seite zu verwenden, auf der eine Benutzerreise nicht mitten im Fluss ist, wie auf einer RP-Anmeldeseite.
- `silent`: Das `get()`-Versprechen wird abgelehnt, und der Entwickler muss den Benutzer zur Anmeldeseite zurückführen, um den Prozess von neuem zu starten. Diese Option ergibt auf Seiten Sinn, auf denen sich eine Benutzerreise im Fluss befindet und Sie ihn bis zum Abschluss angemeldet halten müssen, zum Beispiel auf den Seiten eines Checkout-Flows auf einer E-Commerce-Website.

> [!NOTE]
> Die [`IdentityCredential.isAutoSelected`](/de/docs/Web/API/IdentityCredential/isAutoSelected)-Eigenschaft gibt an, ob die föderierte Anmeldung mit einer automatischen Reauthentifizierung durchgeführt wurde. Dies ist hilfreich, um die API-Leistung zu evaluieren und das Benutzererlebnis entsprechend zu verbessern. Außerdem könnte der Benutzer, wenn sie nicht verfügbar ist, mit einer expliziten Benutzervermittlung zur Anmeldung aufgefordert werden, was ein `get()`-Aufruf mit `mediation: required` ist.

## Siehe auch

- [Federated Credential Management API](https://privacysandbox.google.com/cookies/fedcm) auf privacysandbox.google.com (2023)
