---
title: Identitätsanbieter-Föderierte Anmeldung
slug: Web/API/FedCM_API/RP_sign-in
l10n:
  sourceCommit: 5d6f5187d1c657edec7e735d3cc5ad36907e2030
---

{{DefaultAPISidebar("FedCM API")}}

Dieser Artikel beschreibt den Prozess, durch den eine {{Glossary("Relying_party", "vertrauende Partei")}} (RP) die [Federated Credential Management (FedCM) API](/de/docs/Web/API/FedCM_API) verwenden kann, um eine föderierte Anmeldung über einen {{Glossary("Identity_provider", "Identitätsanbieter")}} (IdP) durchzuführen.

## Aufruf der `get()`-Methode

Vertrauensparteien können [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) mit einer `identity`-Option aufrufen, um anzufordern, dass einem Benutzer die Möglichkeit gegeben wird, sich bei der RP mit einer Auswahl bestehender IdP-Konten anzumelden (mit denen sie bereits im Browser angemeldet sind). Die IdPs identifizieren die RP durch ihre `clientId`, die jedem IdP im Rahmen eines separaten IdP-spezifischen Prozesses durch die RP zugewiesen wurde. Der ausgewählte IdP identifiziert den spezifischen Benutzer, der versucht, sich mit den Anmeldedaten (Cookies) anzumelden, die dem Browser während des [Anmeldeablaufs](#fedcm-anmeldeablauf) zur Verfügung gestellt wurden.

Die Methode gibt ein Promise zurück, das mit einem [`IdentityCredential`](/de/docs/Web/API/IdentityCredential)-Objekt erfüllt wird, wenn die Benutzeridentität erfolgreich vom gewählten IdP validiert wurde. Dieses Objekt enthält ein Token, das Benutzeridentitätsinformationen umfasst, die mit dem {{Glossary("digital_certificate", "digitalen Zertifikat")}} des IdP signiert wurden.

Die RP sendet das Token an ihren Server, um das Zertifikat zu validieren. Bei Erfolg kann sie die (jetzt vertrauenswürdigen) Identitätsinformationen im Token verwenden, um den Benutzer in ihren Dienst anzumelden (eine neue Sitzung zu starten), ihn zu ihrem Dienst anzumelden, falls es sich um einen neuen Benutzer handelt, usw.

Wenn der Benutzer sich noch nie bei einem IdP angemeldet oder ausgeloggt hat, lehnt die `get()`-Methode mit einem Fehler ab und die RP kann den Benutzer zu einer IdP-Seite weiterleiten, um sich anzumelden oder ein Konto zu erstellen.

> [!NOTE]
> Die genaue Struktur und der Inhalt des Validierungstokens sind für die FedCM API und den Browser undurchsichtig. Ein IdP entscheidet über die Syntax und Nutzung davon, und die RP muss den vom IdP bereitgestellten Anweisungen folgen (siehe [Verify the Google ID token on your server side](https://developers.google.com/identity/gsi/web/guides/verify-google-id-token) als Beispiel), um sicherzustellen, dass sie es korrekt verwenden.

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

Die `identity.providers`-Eigenschaft nimmt ein Array mit einem oder mehreren Objekten an, die den Pfad zu jeder IdP-Konfigurationsdatei (`configURL`) und die der RP vom IdP zugewiesene Client-ID (`clientId`) angeben.

Das vorherige Beispiel enthält auch einige optionale Funktionen:

- `identity.context` gibt den Kontext an, in dem sich der Benutzer mit FedCM authentifiziert. Beispielweise, ob es sich um eine erstmalige Anmeldung für dieses Konto handelt oder um eine Anmeldung mit einem bestehenden Konto. Der Browser verwendet diese Informationen, um den Text in seiner FedCM-Benutzeroberfläche dem Kontext entsprechend anzupassen.
- Die Eigenschaft `nonce` stellt einen zufälligen Nonce-Wert bereit, der sicherstellt, dass die Antwort für diese spezifische Anfrage ausgestellt wird, wodurch {{Glossary("replay_attack", "Replay-Angriffe")}} verhindert werden.
- Die Eigenschaft `loginHint` bietet einen Hinweis darauf, welche Kontenoption(en) der Browser für die Benutzeranmeldung präsentieren sollte. Dieser Hinweis wird mit den `login_hints`-Werten abgeglichen, die der IdP am [accounts list endpoint](/de/docs/Web/API/FedCM_API/IDP_integration#the_accounts_list_endpoint) bereitstellt.

Der Browser fordert die IdP-Konfigurationsdateien an und führt den unten erläuterten Anmeldeablauf durch. Weitere Informationen darüber, welche Art von Interaktion ein Benutzer von der browserbasierten Benutzeroberfläche erwarten könnte, finden Sie unter [Sign in to the relying party with the identity provider](https://privacysandbox.google.com/cookies/fedcm#sign-in).

## FedCM-Anmeldeablauf

Am Anmeldeprozess sind drei Parteien beteiligt — die RP-App, der Browser selbst und der IdP. Das folgende Diagramm fasst visuell zusammen, was passiert.

![eine visuelle Darstellung des im Detail unten beschriebenen Ablaufs](fedcm-flow.png)

Der Ablauf ist wie folgt:

1. Die RP ruft [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) auf, um den Anmeldeprozess zu starten.

2. Vom `configURL` aus, das für jeden IdP bereitgestellt wird, fordert der Browser zwei Dateien an:
   1. Die Well-Known-Datei (`/.well-known/web-identity`), verfügbar unter `/.well-known/web-identity` beim [eTLD+1](https://web.dev/articles/same-site-same-origin#site) des `configURL`.
   2. Die [IdP-Konfigurationsdatei](/de/docs/Web/API/FedCM_API/IDP_integration#provide_a_config_file_and_endpoints) (`/config.json`), verfügbar unter dem `configURL`.

   Diese sind beide [`GET`](/de/docs/Web/HTTP/Reference/Methods/GET)-Anfragen, die keine Cookies enthalten und keine Weiterleitungen folgen. Dies verhindert effektiv, dass IdPs erfahren, wer die Anfrage gemacht hat und welche RP versucht, sich zu verbinden.

   Alle vom Browser via FedCM gesendeten Anfragen beinhalten einen `{{httpheader("Sec-Fetch-Dest")}}: webidentity` Header, um {{Glossary("CSRF", "CSRF")}}-Angriffe zu verhindern. Alle IdP-Endpunkte müssen bestätigen, dass dieser Header enthalten ist.

3. Die IdPs antworten mit der angeforderten Well-Known-Datei und den `config.json`-Dateien. Der Browser validiert die Config-URL der `get()`-Anfrage gegen die Liste gültiger Konfigurations-URLs innerhalb der Well-Known-Datei.

4. Hat der Browser den [Anmeldestatus eines IdP](/de/docs/Web/API/FedCM_API/IDP_integration#update_login_status_using_the_login_status_api) auf `"logged-in"` gesetzt, führt er eine authentifizierte Anfrage (d.h. mit einem Cookie, das den angemeldeten Benutzer identifiziert) an den [`accounts_endpoint`](/de/docs/Web/API/FedCM_API/IDP_integration#the_accounts_list_endpoint) innerhalb der IdP-Konfigurationsdatei aus, um die Kontodaten des Benutzers zu erhalten. Dies ist eine `GET`-Anfrage mit Cookies, aber ohne `client_id`-Parameter oder {{httpheader("Origin")}} Header. Dies verhindert effektiv, dass IdPs erfahren, bei welcher RP der Benutzer versucht, sich anzumelden. Infolgedessen ist die Liste der zurückgegebenen Konten RP-agnostisch.

   > [!NOTE]
   > Wenn der Anmeldestatus aller IdPs `"logged-out"` ist, lehnt der `get()`-Aufruf mit einem `NetworkError` [`DOMException`](/de/docs/Web/API/DOMException) ab und es wird keine Anfrage an den `accounts_endpoint` eines IdP gestellt. In diesem Fall liegt es am Entwickler, den Verlauf zu steuern, zum Beispiel indem er den Benutzer auffordert, sich bei einem geeigneten IdP anzumelden. Beachten Sie, dass es zu einer Verzögerung bei der Ablehnung kommen kann, um das Leaken des IdP-Anmeldestatus an die RP zu vermeiden.

5. Die IdPs antworten mit den Kontoinformationen, die von ihren `accounts_endpoint`s angefordert wurden. Diese sind Arrays aller Konten, die mit den IdP-Cookies des Benutzers für alle mit einem IdP verbundenen RP verknüpft sind.

6. {{optional_inline}} Wenn in einer IdP-Konfigurationsdatei enthalten, führt der Browser eine nicht authentifizierte Anfrage an den [`client_metadata_endpoint`](/de/docs/Web/API/FedCM_API/IDP_integration#the_client_metadata_endpoint) durch, um den Standort der Dienstleistungs- und Datenschutzrichtlinienseiten der RP abzurufen. Dies ist eine `GET`-Anfrage, die mit der `clientId`, die in den `get()`-Aufruf als Parameter übergeben wurde, aber ohne Cookies gesendet wird.

7. {{optional_inline}} Die IdPs antworten mit den von den `client_metadata_endpoint`s angeforderten URLs.

8. Der Browser nutzt die Informationen, die durch die vorherigen beiden Anfragesets erhalten wurden, um die Benutzeroberfläche zu erstellen, in der der Benutzer aufgefordert wird, einen IdP (falls mehr als einer angemeldet ist) und ein Konto auszuwählen, um sich bei der RP anzumelden. Die Benutzeroberfläche fragt den Benutzer auch um Erlaubnis, um sich bei der RP mit ihrem ausgewählten föderierten IdP-Konto anzumelden.

   > [!NOTE]
   > In diesem Stadium, wenn sich der Benutzer bereits mit einem föderierten RP-Konto in der aktuellen Browserinstanz authentifiziert hat (das heißt, ein neues Konto bei der RP erstellt oder sich mit einem bestehenden Konto auf der Website der RP angemeldet hat), kann er möglicherweise **automatisch erneut authentifizieren**, abhängig davon, welcher [`mediation`](/de/docs/Web/API/CredentialsContainer/get#mediation)-Option im `get()`-Aufruf eingestellt ist. Wenn ja, wird der Benutzer automatisch angemeldet, ohne seine Anmeldedaten einzugeben, sobald `get()` aufgerufen wird. Weitere Details finden Sie im Abschnitt [Auto-reauthentication](#automatische_wiederauthentifizierung).

9. Wenn der Benutzer die Erlaubnis erteilt, sendet der Browser eine authentifizierte Anfrage an den [`id_assertion_endpoint`](/de/docs/Web/API/FedCM_API/IDP_integration#the_id_assertion_endpoint), um ein Validierungstoken für das ausgewählte Konto vom gewählten IdP anzufordern.

   Die Anmeldedaten werden in einer HTTP-`POST`-Anfrage mit Cookies und einem Inhaltstyp von `application/x-www-form-urlencoded` gesendet.

   Schlägt der Aufruf fehl, wird eine Fehlernutzlast zurückgegeben, wie in [ID assertion error responses](/de/docs/Web/API/FedCM_API/IDP_integration#id_assertion_error_responses) erläutert, und das Promise, das von `get()` zurückgegeben wird, lehnt mit dem Fehler ab.

10. Der gewählte IdP überprüft, ob die von der RP gesendete Konto-ID mit der ID für das bereits angemeldete Konto übereinstimmt und dass die `Origin`-Übereinstimmung mit der Origin von der RP übereinstimmt, welche im Voraus beim IdP registriert worden ist. Wenn alles gut aussieht, antwortet er mit dem angeforderten Validierungstoken.

    > [!NOTE]
    > Die Origin der RP wird in einem komplett separaten Prozess beim IdP registriert, wenn die RP zuerst mit dem IdP integriert wird. Dieser Prozess wird für jeden IdP spezifisch sein.

11. Wenn der Ablauf abgeschlossen ist, wird das `get()`-Promise mit einem [`IdentityCredential`](/de/docs/Web/API/IdentityCredential)-Objekt gelöst, das weitere RP-Funktionen bietet. Insbesondere enthält dieses Objekt ein Token, das die RP verifizieren kann, dass es vom IdP stammt (mithilfe eines Zertifikats) und das vertrauenswürdige Informationen über den angemeldeten Benutzer enthält. Nachdem die RP das Token validiert hat, kann sie die darin enthaltenen Informationen verwenden, um den Benutzer einzuloggen und eine neue Sitzung zu starten, ihn bei ihrem Dienst anzumelden, usw. Das Format und die Struktur des Tokens hängt vom IdP ab und hat nichts mit der FedCM API zu tun (die RP muss den Anweisungen des IdP folgen).

## Aktiver versus passiver Modus

Es gibt zwei verschiedene Benutzeroberflächenmodi, die der Browser einer RP-Benutzerin bei der Anmeldung über die FedCM API bieten kann, der **`aktive`** und der **`passive`** Modus. Welcher Modus für die Anmeldung verwendet wird, wird durch die [`mode`](/de/docs/Web/API/IdentityCredentialRequestOptions#mode)-Option des `identity`-Objekts gesteuert:

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

Der Standardwert für `mode` ist `passive`. Wenn `mode` nicht gesetzt ist oder explizit auf `passive` gesetzt wird, kann der Browser den Anmeldeablauf über einen `get()`-Aufruf ohne direkte Benutzerinteraktion einleiten. Beispielsweise möchten Sie möglicherweise den Anmeldeablauf einleiten, sobald der Benutzer zur Anmeldeseite navigiert, vorausgesetzt, er hat IdP-Konten, um sich anzumelden. In diesem Modus präsentiert der Browser dem Benutzer typischerweise ein Anmeldedialogfenster, das alle verschiedenen Anmeldeoptionen enthält, die im `providers`-Objekt angegeben sind, und sie können die für sie am besten passende auswählen und dann die entsprechenden Anmeldedaten eingeben.

Wenn `mode` auf `active` gesetzt ist, erfordert der Browser, dass der Anmeldeablauf durch eine Benutzeraktion wie das Klicken auf einen Button eingeleitet wird ({{Glossary("transient_activation", "transient activation")}} ist erforderlich), und das `providers`-Objekt kann nur eine Länge von `1` haben, andernfalls lehnt das `get()`-Promise ab. Dieser Modus wird typischerweise verwendet, wenn die RP einen separaten Button für jede IdP-Auswahl bieten möchte. Wenn der Benutzer auf einen dieser Buttons klickt, erscheint ein vereinfachtes Dialogfenster, das nur erfordert, dass sie die Anmeldedaten für dieses Konto eingeben.

Siehe [FedCM UI modes](https://privacysandbox.google.com/cookies/fedcm/why#fedcm_ui_modes) auf privacysandbox.google.com für ein Beispiel, wie die verschiedenen Benutzeroberflächenmodi in Google Chrome präsentiert werden.

## Automatische Wiederauthentifizierung

Die automatische Wiederauthentifizierung von FedCM ermöglicht es Benutzern, sich automatisch erneut zu authentifizieren, wenn sie erneut versuchen, sich bei einer RP anzumelden, nachdem sie sich ursprünglich über FedCM authentifiziert haben. "Ursprüngliche Authentifizierung" bezieht sich auf die Anmeldung des Benutzers bei der RP-Website über den FedCM-Anmeldedialog zum ersten Mal auf der RP-Seite im selben Browser.

Nach der ursprünglichen Authentifizierung kann die automatische Wiederauthentifizierung verwendet werden, um sich erneut automatisch bei der RP-Website anzumelden, ohne dass dem Benutzer ein "Fortfahren als..."-Bestätigungsdialog gezeigt wird. Wenn der Benutzer kürzlich die Erlaubnis erteilt hat, dass eine Föderierte Anmeldung mit einem bestimmten Konto erfolgen darf, gibt es keinen datenschutz- oder sicherheitsbezogenen Vorteil, sofort eine weitere explizite Benutzerbestätigung zu erzwingen.

Das Verhalten der automatischen Wiederauthentifizierung wird durch die [`mediation`](/de/docs/Web/API/CredentialsContainer/get#mediation)-Option im `get()`-Aufruf gesteuert:

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

Die automatische Wiederauthentifizierung kann erfolgen, wenn `mediation` auf `optional` oder `silent` gesetzt ist.

Mit diesen `mediation`-Optionen erfolgt die automatische Wiederauthentifizierung unter folgenden Bedingungen:

- FedCM steht zur Verfügung. Zum Beispiel hat der Benutzer FedCM weder global noch in den RP-Einstellungen deaktiviert.
- Der Benutzer hat nur ein Konto verwendet, um sich auf dieser Browser-Instanz über FedCM bei der RP-Website anzumelden. Wenn Konten für mehrere IdPs existieren, wird der Benutzer nicht automatisch wieder authentifiziert.
- Der Benutzer ist mit diesem Konto beim IdP angemeldet.
- Die automatische Wiederauthentifizierung ist nicht innerhalb der letzten 10 Minuten erfolgt. Diese Einschränkung wird eingeführt, um zu verhindern, dass Benutzer unmittelbar nach der Abmeldung automatisch wieder authentifiziert werden, was eine ziemlich verwirrende Benutzererfahrung darstellen würde.
- Die RP hat [`preventSilentAccess()`](/de/docs/Web/API/CredentialsContainer/preventSilentAccess) nicht nach der vorherigen Anmeldung aufgerufen. Dies kann von einer RP verwendet werden, um die automatische Wiederauthentifizierung explizit zu deaktivieren, falls gewünscht.
- Die Benutzeroberflächenmodus ist [passiv]().

Wenn diese Bedingungen erfüllt sind, wird versucht, den Benutzer automatisch erneut zu authentifizieren, sobald `get()` aufgerufen wird. Wenn die automatische Wiederauthentifizierung erfolgreich ist, wird der Benutzer erneut in die RP-Website eingeloggt, ohne dass ihm ein Bestätigungsdialog angezeigt wird, unter Verwendung desselben IdP-Kontos und validierten Tokens wie zuvor.

Wenn die automatische Wiederauthentifizierung fehlschlägt, hängt das Verhalten von dem gewählten `mediation`-Wert ab:

- `optional`: dem Benutzer _wird_ erneut der Dialog angezeigt und um Bestätigung gebeten. Daher macht dies auf einer Seite, auf der eine Benutzerreise nicht im Fluss ist, wie eine RP-Anmeldeseite, normalerweise Sinn.
- `silent`: Das `get()`-Promise wird abgelehnt und der Entwickler muss den Benutzer zurück zur Anmeldeseite führen, um den Prozess erneut zu starten. Diese Option macht auf Seiten, auf denen sich eine Benutzerreise im Fluss befindet und Sie ihn bis zum Abschluss im angemeldeten Zustand halten müssen, wie zum Beispiel den Seiten eines Checkout-Vorgangs auf einer E-Commerce-Website, Sinn.

> [!NOTE]
> Die [`IdentityCredential.isAutoSelected`](/de/docs/Web/API/IdentityCredential/isAutoSelected)-Eigenschaft gibt an, ob die föderierte Anmeldung mithilfe der automatischen Wiederauthentifizierung durchgeführt wurde. Dies ist hilfreich, um die Leistung der API zu bewerten und die Benutzererfahrung entsprechend zu verbessern. Außerdem, wenn sie nicht verfügbar ist, kann der Benutzer aufgefordert werden, sich mit expliziter Benutzervermittlung anzumelden, was ein `get()`-Aufruf mit `mediation: required` bedeutet.

## Trennung der föderierten Anmeldung

Die RP kann ein angegebenes föderiertes Anmeldekonto durch Aufruf von [`IdentityCredential.disconnect()`](/de/docs/Web/API/IdentityCredential/disconnect_static) vom zugehörigen IdP trennen. Diese Funktion kann von einem obersten RP-Frame aufgerufen werden.

```js
IdentityCredential.disconnect({
  configURL: "https://idp.example.com/config.json",
  clientId: "rp123",
  accountHint: "account456",
});
```

Für einen `disconnect()`-Aufruf muss der IdP ein [`disconnect_endpoint`](/de/docs/Web/API/FedCM_API/IDP_integration#disconnect_endpoint) in seiner Konfigurationsdatei enthalten. Siehe [Der Trennend-Punkt](/de/docs/Web/API/FedCM_API/IDP_integration#the_disconnect_endpoint) für mehr Details zur zugrunde liegenden HTTP-Kommunikation.

## Weitere Informationen

- [Federated Credential Management API](https://privacysandbox.google.com/cookies/fedcm) auf privacysandbox.google.com (2023)
