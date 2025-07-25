---
title: Föderierte Anmeldung durch vertrauende Partei
slug: Web/API/FedCM_API/RP_sign-in
l10n:
  sourceCommit: 8cd7f0fdcb2ea8d53ec7dae071eb2eb76bf5bfaf
---

{{DefaultAPISidebar("FedCM API")}}

Dieser Artikel beschreibt den Prozess, durch den eine {{Glossary("Relying_party", "vertrauende Partei")}} (RP) die [Federated Credential Management (FedCM) API](/de/docs/Web/API/FedCM_API) verwenden kann, um eine föderierte Anmeldung über einen {{Glossary("Identity_provider", "Identitätsanbieter")}} (IdP) durchzuführen.

## Aufrufen der `get()`-Methode

RPs können [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) mit einer `identity`-Option aufrufen, um zu verlangen, dass einem Benutzer die Option gegeben wird, sich bei der RP mit einer Auswahl bestehender IdP-Konten (mit denen sie bereits im Browser angemeldet sind) anzumelden. Die IdPs identifizieren die RP durch ihre `clientId`, die jedem IdP in einem separaten, IdP-spezifischen Prozess an die RP ausgegeben wurde. Der gewählte IdP identifiziert den spezifischen Benutzer, der versucht, sich mit den Anmeldeinformationen (Cookies) anzumelden, die dem Browser während des [Anmeldevorgangs](#fedcm_anmeldevorgang) bereitgestellt wurden.

Die Methode gibt ein Versprechen zurück, das mit einem [`IdentityCredential`](/de/docs/Web/API/IdentityCredential)-Objekt erfüllt wird, wenn die Benutzeridentität erfolgreich vom gewählten IdP validiert wird. Dieses Objekt enthält ein Token, das Benutzeridentifikationsinformationen enthält, die mit dem {{Glossary("digital_certificate", "digitalen Zertifikat")}} des IdPs signiert wurden.

Die RP sendet das Token an ihren Server, um das Zertifikat zu validieren, und kann bei Erfolg die (nun vertrauenswürdigen) Identitätsinformationen im Token verwenden, um sie in ihren Dienst einzuloggen (eine neue Sitzung zu starten), sie für ihren Dienst zu registrieren, wenn sie neue Benutzer sind, usw.

Wenn der Benutzer sich noch nie bei einem IdP angemeldet hat oder ausgeloggt ist, lehnt die `get()`-Methode mit einem Fehler ab und die RP kann den Benutzer auf eine IdP-Seite weiterleiten, um sich anzumelden oder ein Konto zu erstellen.

> [!NOTE]
> Die genaue Struktur und der Inhalt des Validierungstokens sind für die FedCM API und den Browser undurchsichtig. Ein IdP entscheidet über die Syntax und Verwendungsweise, und die RP muss den Anweisungen des IdPs folgen (siehe z.B. [Google ID-Token auf Ihrer Serverseite validieren](https://developers.google.com/identity/gsi/web/guides/verify-google-id-token)), um sicherzustellen, dass sie es korrekt verwenden.

Eine typische Anfrage könnte folgendermaßen aussehen:

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
          //...
        },
      ],
    },
  });
}
```

Die Eigenschaft `identity.providers` nimmt ein Array auf, das ein oder mehrere Objekte enthält, die den Pfad zu jeder IdP-Konfigurationsdatei (`configURL`) und die dem IdP von der RP zugewiesene Client-ID (`clientId`) spezifizieren.

Das vorherige Beispiel beinhaltet auch einige optionale Funktionen:

- `identity.context` spezifiziert den Kontext, in dem der Benutzer mit FedCM authentifiziert wird. Zum Beispiel, handelt es sich um eine erstmalige Anmeldung für dieses Konto oder um eine Anmeldung mit einem bestehenden Konto? Der Browser verwendet diese Informationen, um den Text in seiner FedCM-Benutzeroberfläche entsprechend dem Kontext anzupassen.
- Die Eigenschaft `nonce` bietet einen zufälligen Nonce-Wert, der sicherstellt, dass die Antwort für diese spezifische Anfrage ausgestellt wird, wodurch {{Glossary("replay_attack", "Replay-Angriffe")}} verhindert werden.
- Die Eigenschaft `loginHint` bietet einen Hinweis auf die Konten, die der Browser für die Benutzeranmeldung präsentieren sollte. Dieser Hinweis wird mit den `login_hints`-Werten abgeglichen, die der IdP am [accounts list endpoint](/de/docs/Web/API/FedCM_API/IDP_integration#the_accounts_list_endpoint) bereitstellt.

Der Browser fordert die IdP-Konfigurationsdateien an und führt den unten beschriebenen Anmeldevorgang durch. Weitere Informationen darüber, welche Art von Interaktion ein Benutzer von der browsergestützten Benutzeroberfläche erwarten könnte, finden Sie unter [Anmeldung beim vertrauenden Dienst mit dem Identitätsanbieter](https://privacysandbox.google.com/cookies/fedcm#sign-in).

## FedCM Anmeldevorgang

Am Anmeldeprozess sind drei Parteien beteiligt — die RP-App, der Browser selbst und der IdP. Das folgende Diagramm fasst zusammen, was visuell passiert.

![eine visuelle Darstellung des unten im Detail beschriebenen Ablaufs](fedcm-flow.png)

Der Ablauf ist wie folgt:

1. Die RP ruft [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) auf, um den Anmeldeprozess zu starten.

2. Vom `configURL`, das für jeden IdP bereitgestellt wird, fordert der Browser zwei Dateien an:
   1. Die bekannte Datei (`/.well-known/web-identity`), verfügbar unter `/.well-known/web-identity` auf dem [eTLD+1](https://web.dev/articles/same-site-same-origin#site) des `configURL`.
   2. Die [IdP-Konfigurationsdatei](/de/docs/Web/API/FedCM_API/IDP_integration#provide_a_config_file_and_endpoints) (`/config.json`), verfügbar unter der `configURL`.

   Diese sind beide [`GET`](/de/docs/Web/HTTP/Reference/Methods/GET)-Anfragen, die keine Cookies haben und keine Umleitungen folgen. Dies verhindert effektiv, dass IdPs erfahren, wer die Anfrage gestellt hat und welche RP zu verbinden versucht.

   Alle Anfragen, die über FedCM vom Browser gesendet werden, beinhalten einen `{{httpheader("Sec-Fetch-Dest")}}: webidentity`-Header, um {{Glossary("CSRF", "CSRF")}}-Angriffe zu verhindern. Alle IdP-Endpunkte müssen bestätigen, dass dieser Header enthalten ist.

3. Die IdPs reagieren mit der angeforderten bekannten Datei und `config.json`-Dateien. Der Browser validiert die URL der Konfigurationsdatei in der `get()`-Anfrage gegen die Liste der gültigen Konfigurations-URLs in der bekannten Datei.

4. Wenn der Browser einen [Anmeldestatus eines IdPs](/de/docs/Web/API/FedCM_API/IDP_integration#update_login_status_using_the_login_status_api) auf `"logged-in"` gesetzt hat, macht er eine berechtigte Anfrage (d.h. mit einem Cookie, das den angemeldeten Benutzer identifiziert) an den [`accounts_endpoint`](/de/docs/Web/API/FedCM_API/IDP_integration#the_accounts_list_endpoint) innerhalb der IdP-Konfigurationsdatei für die Benutzerdetails. Dies ist eine `GET`-Anfrage mit Cookies, aber ohne `client_id`-Parameter oder den {{httpheader("Origin")}}-Header. Dies verhindert effektiv, dass IdPs herausfinden, bei welcher RP sich der Benutzer anmelden möchte. Infolgedessen ist die Liste der zurückgegebenen Konten RP-agnostisch.

   > [!NOTE]
   > Wenn der Anmeldestatus der IdPs alle auf `"logged-out"` sind, lehnt der `get()`-Aufruf mit einem `NetworkError` [`DOMException`](/de/docs/Web/API/DOMException) ab und es wird keine Anfrage an den `accounts_endpoint` eines IdPs gesendet. In diesem Fall liegt es am Entwickler, den Ablauf zu handhaben, zum Beispiel indem er den Benutzer auffordert, sich bei einem geeigneten IdP anzumelden. Beachten Sie, dass es zu einigen Verzögerungen bei der Ablehnung kommen kann, um das Durchsickern des IdP-Anmeldestatus zur RP zu vermeiden.

5. Die IdPs reagieren mit den angeforderten Kontoinformationen von ihren `accounts_endpoint`s. Dies sind Arrays aller Konten, die mit den IdP-Cookies des Benutzers für alle RPs verbunden sind, die mit einem IdP verbunden sind.

6. {{optional_inline}} Wenn in einer IdP-Konfigurationsdatei enthalten, macht der Browser eine unberechtigte Anfrage an den [`client_metadata_endpoint`](/de/docs/Web/API/FedCM_API/IDP_integration#the_client_metadata_endpoint) für den Standort der Seiten mit den Allgemeinen Geschäftsbedingungen und der Datenschutzrichtlinie der RP. Dies ist eine `GET`-Anfrage, die mit der `clientId`, die in den `get()`-Aufruf als Parameter übergeben wurde, und ohne Cookies gesendet wird.

7. {{optional_inline}} Die IdPs antworten mit den von `client_metadata_endpoint` angeforderten URLs.

8. Der Browser verwendet die durch die vorhergehenden zwei Anfragen erhaltenen Informationen, um die Benutzeroberfläche zu erstellen, die den Benutzer dazu auffordert, einen IdP auszuwählen (falls mehr als einer angemeldet ist) und ein Konto auszuwählen, um sich bei der RP anzumelden. Die Benutzeroberfläche fordert den Benutzer auch dazu auf, die Erlaubnis zu erteilen, sich bei der RP mit ihrem ausgewählten federierten IdP-Konto anzumelden.

   > [!NOTE]
   > In diesem Stadium, wenn der Benutzer zuvor in der aktuellen Browserinstanz mit einem federierten RP-Konto authentifiziert wurde (das heißt, ein neues Konto mit der RP erstellt oder sich auf der RP-Webseite mit einem vorhandenen Konto angemeldet hat), könnte es möglich sein, **automatisch erneut zu authentifizieren**, abhängig davon, auf welche Option [`mediation`](/de/docs/Web/API/CredentialsContainer/get#mediation) im `get()`-Aufruf gesetzt wurde. Wenn ja, wird der Benutzer automatisch angemeldet, ohne seine Anmeldeinformationen einzugeben, sobald `get()` aufgerufen wird. Siehe den Abschnitt [Automatische Neuauthentifizierung](#automatische_neuauthentifizierung) für weitere Details.

9. Wenn der Benutzer die Erlaubnis erteilt, sendet der Browser eine berechtigte Anfrage an den [`id_assertion_endpoint`](/de/docs/Web/API/FedCM_API/IDP_integration#the_id_assertion_endpoint), um ein Validierungstoken vom ausgewählten IdP für das ausgewählte Konto anzufordern.

   Die Anmeldeinformationen werden in einer HTTP [`POST`](/de/docs/Web/HTTP/Reference/Methods/POST)-Anfrage mit Cookies und einem Content-Type von `application/x-www-form-urlencoded` gesendet.

   Wenn der Aufruf fehlschlägt, wird eine Fehlermeldung wie in [ID-Ausstellungsfehlerantworten](/de/docs/Web/API/FedCM_API/IDP_integration#id_assertion_error_responses) erklärt zurückgegeben und das Versprechen, das von `get()` zurückgegeben wird, wird mit dem Fehler abgelehnt.

10. Der gewählte IdP überprüft, ob die von der RP gesendete Konto-ID mit der ID des bereits angemeldeten Kontos übereinstimmt, und ob der `Origin` mit dem Ursprung der RP übereinstimmt, der im Voraus beim IdP registriert wurde. Wenn alles in Ordnung ist, antwortet er mit dem angeforderten Validierungstoken.

    > [!NOTE]
    > Der Ursprung der RP wird in einem völlig separaten Prozess bei dem IdP registriert, wenn die RP erstmals mit dem IdP integriert wird. Dieser Prozess ist spezifisch für jeden IdP.

11. Wenn der Ablauf abgeschlossen ist, löst sich das `get()`-Versprechen mit einem [`IdentityCredential`](/de/docs/Web/API/IdentityCredential)-Objekt auf, das weitere RP-Funktionalität bereitstellt. Besonders bemerkenswert ist, dass dieses Objekt ein Token enthält, das die RP überprüfen kann, dass es vom IdP stammt (unter Verwendung eines Zertifikats) und das vertrauenswürdige Informationen über den angemeldeten Benutzer enthält. Nachdem die RP das Token validiert hat, kann sie die enthaltenen Informationen verwenden, um den Benutzer anzumelden und eine neue Sitzung zu starten, ihn für ihren Dienst zu registrieren usw. Das Format und die Struktur des Tokens hängen vom IdP ab und haben nichts mit der FedCM API zu tun (die RP muss den Anweisungen des IdPs folgen).

## Aktiver versus passiver Modus

Es gibt zwei verschiedene UI-Modi, die der Browser einer RP-Benutzers anbieten kann, wenn sie sich über die FedCM API anmelden, **`active`** und **`passive`** Modus. Welcher Modus für die Anmeldung verwendet wird, wird durch die Option [`mode`](/de/docs/Web/API/IdentityCredentialRequestOptions#mode) des `identity`-Objekts gesteuert:

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

Der Standardwert für `mode` ist `passive`. Wenn `mode` nicht gesetzt ist oder explizit auf `passive` gesetzt wurde, kann der Browser den Anmeldeprozess über einen `get()`-Aufruf ohne direkte Benutzerinteraktion initiieren. Zum Beispiel, Sie könnten den Anmeldeprozess initiieren wollen, sobald der Benutzer zur Anmeldeseite navigiert, vorausgesetzt er hat IdP-Konten zur Anmeldung. In diesem Modus präsentieren Browser dem Benutzer typischerweise ein Anmeldefenster mit allen verschiedenen Anmeldeoptionen, die im `providers`-Objekt angegeben sind, und sie können diejenige auswählen, die ihnen am besten passt, und dann die entsprechenden Anmeldeinformationen eingeben.

Wenn `mode` auf `active` gesetzt ist, erfordert der Browser, dass der Anmeldeprozess durch eine Benutzeraktion wie das Klicken auf eine Schaltfläche initiiert wird ({{Glossary("transient_activation", "transiente Aktivierung")}} ist erforderlich), und das `providers`-Objekt darf nur eine Länge von `1` haben, ansonsten wird das `get()`-Promise abgelehnt. Dieser Modus wird typischerweise verwendet, wenn die RP eine separate Schaltfläche für jede IdP-Auswahl bereitstellen möchte. Wenn der Benutzer auf eine dieser Schaltflächen klickt, erscheint ein vereinfachtes Dialogfenster, das nur die Eingabe der Anmeldeinformationen für dieses Konto erfordert.

Siehe [FedCM UI-Modi](https://privacysandbox.google.com/cookies/fedcm/why#fedcm_ui_modes) auf privacysandbox.google.com für ein Beispiel, wie die verschiedenen UI-Modi in Google Chrome präsentiert werden.

## Automatische Neuauthentifizierung

Die FedCM-Automatische-Neuauthentifizierung erlaubt es Benutzern, sich automatisch erneut zu authentifizieren, wenn sie versuchen, sich erneut bei einer RP anzumelden, nachdem sie sich initial mit FedCM authentifiziert haben. "Initiale Authentifizierung" bezieht sich darauf, wann der Benutzer ein Konto erstellt oder sich zum ersten Mal auf der Webseite der RP über das FedCM-Anmeldedialog bei der RP anmeldet, in derselben Browserinstanz.

Nach der initialen Authentifizierung kann die automatische Neuauthentifizierung verwendet werden, um sich erneut automatisch auf der RP-Webseite anzumelden, ohne dem Benutzer eine "Fortfahren als..."-Bestätigungsaufforderung zeigen zu müssen. Wenn der Benutzer kürzlich die Erlaubnis erteilt hat, das federierte Anmelden mit einem bestimmten Konto durchzuführen, gibt es keinen Datenschutz- oder Sicherheitsvorteil, eine weitere explizite Benutzerbestätigung sofort zu erzwingen.

Das Verhalten der automatischen Neuauthentifizierung wird durch die Option [`mediation`](/de/docs/Web/API/CredentialsContainer/get#mediation) im `get()`-Aufruf gesteuert:

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

Die automatische Neuauthentifizierung kann erfolgen, wenn `mediation` auf `optional` oder `silent` gesetzt ist.

Mit diesen `mediation`-Optionen erfolgt die automatische Neuauthentifizierung unter den folgenden Bedingungen:

- FedCM steht zur Verfügung. Zum Beispiel hat der Benutzer FedCM weder global noch in den Einstellungen der RP deaktiviert.
- Der Benutzer hat nur ein Konto verwendet, um sich über FedCM im Browser auf der Webseite der RP anzumelden. Wenn Konten für mehrere IdPs existieren, wird der Benutzer nicht automatisch neu authentifiziert.
- Der Benutzer ist bei dem IdP mit diesem Konto angemeldet.
- Die automatische Neuauthentifizierung fand nicht innerhalb der letzten 10 Minuten statt. Diese Einschränkung wird vorgenommen, um zu verhindern, dass Benutzer unmittelbar nach dem Abmelden automatisch neu authentifiziert werden — was eine ziemlich verwirrende Benutzererfahrung darstellen würde.
- Die RP hat nicht [`preventSilentAccess()`](/de/docs/Web/API/CredentialsContainer/preventSilentAccess) nach der vorherigen Anmeldung aufgerufen. Dies kann von einer RP verwendet werden, um die automatische Neuauthentifizierung bei Bedarf explizit zu deaktivieren.
- Der UI-Modus ist [passiv]().

Wenn diese Bedingungen erfüllt sind, wird versucht, den Benutzer automatisch erneut zu authentifizieren, sobald `get()` aufgerufen wird. Wenn die automatische Neuauthentifizierung erfolgreich ist, wird der Benutzer erneut auf der RP-Seite angemeldet, ohne dass ihm eine Bestätigungsaufforderung angezeigt wird, und verwendet dasselbe IdP-Konto und validierte Token wie zuvor.

Wenn die automatische Neuauthentifizierung fehlschlägt, hängt das Verhalten vom gewählten `mediation`-Wert ab:

- `optional`: dem Benutzer _wird_ das Dialogfenster angezeigt und er wird erneut um Bestätigung gebeten. Daraus ergibt sich, dass sich diese Option idealerweise auf einer Seite eignet, auf der sich der Benutzer nicht gerade mitten im Ablauf befindet, wie eine RP-Anmeldeseite.
- `silent`: Das `get()`-Promise wird abgelehnt und der Entwickler muss den Benutzer zur Anmeldeseite leiten, um den Prozess erneut zu starten. Diese Option macht auf Seiten Sinn, wo der Nutzerfluss im Gange ist und Sie den Benutzer bis zur Fertigstellung angemeldet halten müssen, beispielsweise die Seiten eines Checkout-Ablaufs auf einer E-Commerce-Webseite.

> [!NOTE]
> Die [`IdentityCredential.isAutoSelected`](/de/docs/Web/API/IdentityCredential/isAutoSelected)-Eigenschaft gibt einen Hinweis darauf, ob die föderierte Anmeldung mithilfe der automatischen Neuauthentifizierung durchgeführt wurde. Dies ist hilfreich, um die API-Leistung zu evaluieren und die Benutzererfahrung entsprechend zu verbessern. Auch wenn sie nicht verfügbar ist, wird der Benutzer möglicherweise aufgefordert, sich mit einer expliziten Benutzersteuerung anzumelden, was ein `get()`-Aufruf mit `mediation: required` ist.

## Trennen einer föderierten Anmeldung

Die RP kann ein angegebenes föderiertes Anmeldekonto vom zugehörigen IdP trennen, indem sie [`IdentityCredential.disconnect()`](/de/docs/Web/API/IdentityCredential/disconnect_static) aufruft. Diese Funktion kann aus einem Top-Level-RP-Frame aufgerufen werden.

```js
IdentityCredential.disconnect({
  configURL: "https://idp.example.com/config.json",
  clientId: "rp123",
  accountHint: "account456",
});
```

Damit ein `disconnect()`-Aufruf funktioniert, muss der IdP einen [`disconnect_endpoint`](/docs/Web/API/FedCM_API/IDP_integration#disconnect_endpoint) in seiner Konfigurationsdatei enthalten. Siehe [Der Disconnect-Endpunkt](/de/docs/Web/API/FedCM_API/IDP_integration#the_disconnect_endpoint) für weitere Details zur zugrunde liegenden HTTP-Kommunikation.

## Siehe auch

- [Federated Credential Management API](https://privacysandbox.google.com/cookies/fedcm) auf privacysandbox.google.com (2023)
