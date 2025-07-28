---
title: Vertrauenspartei föderierte Anmeldung
slug: Web/API/FedCM_API/RP_sign-in
l10n:
  sourceCommit: 90e5b796c5741c209aaa674e9ff86d4d7c8e0427
---

{{DefaultAPISidebar("FedCM API")}}

Dieser Artikel beschreibt den Prozess, durch den eine {{Glossary("Relying_party", "Vertrauenspaartei")}} (RP) die [Federated Credential Management (FedCM) API](/de/docs/Web/API/FedCM_API) nutzen kann, um eine föderierte Anmeldung über einen {{Glossary("Identity_provider", "Identitätsanbieter")}} (IdP) durchzuführen.

## Aufruf der `get()` Methode

RPs können [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) mit einer `identity`-Option aufrufen, um dem Benutzer die Möglichkeit zu geben, sich bei der RP mit einer Auswahl bestehender IdP-Konten anzumelden (mit denen sie bereits im Browser angemeldet sind). Die IdPs identifizieren die RP durch ihre `clientId`, die jedem IdP in einem separaten, IdP-spezifischen Prozess an die RP ausgegeben wurde. Der gewählte IdP identifiziert den spezifischen Benutzer, der versucht, sich mit den dem Browser während des [Anmeldevorgangs](#fedcm-anmeldevorgang) bereitgestellten Anmeldeinformationen (Cookies) anzumelden.

Die Methode gibt ein Promise zurück, das mit einem [`IdentityCredential`](/de/docs/Web/API/IdentityCredential)-Objekt erfüllt wird, wenn die Benutzeridentität vom gewählten IdP erfolgreich validiert wurde. Dieses Objekt enthält ein Token, das Benutzeridentitätsinformationen enthält, die mit dem {{Glossary("digital_certificate", "digitalen Zertifikat")}} des IdP signiert wurden.

Die RP sendet das Token an ihren Server, um das Zertifikat zu validieren. Bei Erfolg kann sie die (nun vertrauenswürdigen) Identitätsinformationen im Token verwenden, um den Benutzer in ihren Dienst einzuloggen (eine neue Sitzung zu starten), sich anzumelden, wenn er ein neuer Benutzer ist usw.

Wenn der Benutzer sich noch nie bei einem IdP angemeldet hat oder abgemeldet ist, lehnt die `get()` Methode mit einem Fehler ab, und die RP kann den Benutzer zu einer IdP-Seite weiterleiten, um sich anzumelden oder ein Konto zu erstellen.

> [!NOTE]
> Die genaue Struktur und der Inhalt des Validierungstokens sind für die FedCM API und den Browser undurchsichtig. Ein IdP entscheidet über die Syntax und Nutzung, und die RP muss den vom IdP bereitgestellten Anweisungen folgen (siehe zum Beispiel [Überprüfen Sie das Google ID-Token auf Ihrer Serverseite](https://developers.google.com/identity/gsi/web/guides/verify-google-id-token)), um sicherzustellen, dass sie es richtig verwenden.

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

Die `identity.providers`-Eigenschaft nimmt ein Array an, das ein oder mehrere Objekte enthält, die den Pfad zu jeder IdP-Konfigurationsdatei (`configURL`) und die vom IdP ausgegebene Client-ID (`clientId`) der RP spezifizieren.

Das vorherige Beispiel enthält auch einige optionale Features:

- `identity.context` gibt den Kontext an, in dem sich der Benutzer mit FedCM authentifiziert. Zum Beispiel, ob es sich um eine erstmalige Anmeldung für dieses Konto oder eine Anmeldung mit einem bestehenden Konto handelt. Der Browser verwendet diese Informationen, um den Text in seiner FedCM-Benutzeroberfläche an den Kontext anzupassen.
- Die Eigenschaft `nonce` liefert einen zufälligen Nonce-Wert, der sicherstellt, dass die Antwort speziell für diese Anfrage ausgestellt wird und dadurch {{Glossary("replay_attack", "Wiederholungsangriffe")}} verhindert.
- Die Eigenschaft `loginHint` bietet einen Hinweis auf die Kontooption(en), die der Browser zur Benutzeranmeldung präsentieren soll. Dieser Hinweis wird mit den `login_hints`-Werten abgeglichen, die der IdP am [Kontenlisten-Endpunkt](/de/docs/Web/API/FedCM_API/IDP_integration#the_accounts_list_endpoint) bereitstellt.

Der Browser fordert die IdP-Konfigurationsdateien an und führt den unten beschriebenen Anmeldevorgang durch. Weitere Informationen über die Art der Interaktion, die ein Benutzer von der vom Browser bereitgestellten Benutzeroberfläche erwarten könnte, finden Sie unter [Anmelden bei der Vertrauenspartei mit dem Identitätsanbieter](https://privacysandbox.google.com/cookies/fedcm#sign-in).

## FedCM-Anmeldevorgang

Am Anmeldevorgang sind drei Parteien beteiligt — die RP-App, der Browser und der IdP. Das folgende Diagramm bietet eine visuelle Zusammenfassung dessen, was geschieht.

![visuelle Darstellung des unten detailliert beschriebenen Ablaufs](fedcm-flow.png)

Der Ablauf ist wie folgt:

1. Die RP ruft [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) auf, um den Anmeldevorgang zu starten.

2. Vom `configURL` bereitgestellt für jeden IdP, fordert der Browser zwei Dateien an:
   1. Die allgemein bekannte Datei (`/.well-known/web-identity`), verfügbar unter `/.well-known/web-identity` am [eTLD+1](https://web.dev/articles/same-site-same-origin#site) des `configURL`.
   2. Die [IdP-Konfigurationsdatei](/de/docs/Web/API/FedCM_API/IDP_integration#provide_a_config_file_and_endpoints) (`/config.json`), verfügbar unter dem `configURL`.

   Dies sind beide [`GET`](/de/docs/Web/HTTP/Reference/Methods/GET)-Anfragen, die keine Cookies enthalten und keine Weiterleitungen folgen. Dies verhindert effektiv, dass IdPs erfahren, wer die Anfrage gestellt hat und welche RP versucht, sich zu verbinden.

   Alle Anfragen, die über FedCM vom Browser gesendet werden, enthalten einen `{{httpheader("Sec-Fetch-Dest")}}: webidentity`-Header, um {{Glossary("CSRF", "CSRF")}}-Angriffe zu verhindern. Alle IdP-Endpunkte müssen bestätigen, dass dieser Header enthalten ist.

3. Die IdPs antworten mit den angeforderten allgemein bekannten Dateien und `config.json`-Dateien. Der Browser validiert die URL der Konfigurationsdatei in der `get()`-Anfrage gegen die Liste der gültigen Konfigurations-URLs in der allgemein bekannten Datei.

4. Wenn der Browser einen [Anmeldestatus des IdP](/de/docs/Web/API/FedCM_API/IDP_integration#update_login_status_using_the_login_status_api) auf `"eingeloggt"` gesetzt hat, macht er eine berechtigte Anfrage (d.h. mit einem Cookie, das den angemeldeten Benutzer identifiziert) an den [`accounts_endpoint`](/de/docs/Web/API/FedCM_API/IDP_integration#the_accounts_list_endpoint) in der IdP-Konfigurationsdatei für die Kontodetails des Benutzers. Dies ist eine `GET`-Anfrage mit Cookies, jedoch ohne `client_id`-Parameter oder den {{httpheader("Origin")}}-Header. Dies verhindert effektiv, dass IdPs erfahren, bei welcher RP der Benutzer sich anmelden möchte. Dadurch ist die Liste der zurückgegebenen Konten unabhängig von der RP.

   > [!NOTE]
   > Wenn alle Anmeldestatus der IdPs `"ausgeloggt"` sind, lehnt der `get()`-Aufruf mit einem `Netzwerkfehler` [`DOMException`](/de/docs/Web/API/DOMException) ab und macht keine Anfrage an einen `accounts_endpoint` eines IdP. In diesem Fall liegt es am Entwickler, den Ablauf zu steuern, z.B. indem er den Benutzer auffordert, sich bei einem geeigneten IdP anzumelden. Beachten Sie, dass es eine Verzögerung bei der Ablehnung geben kann, um den Anmeldestatus des IdP nicht an die RP preiszugeben.

5. Die IdPs antworten mit den Kontoinformationen, die von ihren `accounts_endpoint`s angefordert wurden. Diese sind Arrays aller Konten, die mit den IdP-Cookies des Benutzers für alle mit einem IdP verbundenen RPs verbunden sind.

6. {{optional_inline}} Wenn in einer IdP-Konfigurationsdatei enthalten, macht der Browser eine unberechtigte Anfrage an den [`client_metadata_endpoint`](/de/docs/Web/API/FedCM_API/IDP_integration#the_client_metadata_endpoint), um den Standort der Dienstleistungs- und Datenschutzrichtlinienseiten der RP zu finden. Dies ist eine `GET`-Anfrage, die mit der `clientId` gesendet wird, die in den `get()`-Aufruf als Parameter übergeben wird, jedoch ohne Cookies.

7. {{optional_inline}} Die IdPs antworten mit den von ihnen vom `client_metadata_endpoint` angeforderten URLs.

8. Der Browser verwendet die durch die vorherigen beiden Anfrage-Sets erhaltenen Informationen, um die Benutzeroberfläche zu erstellen, die den Benutzer auffordert, einen IdP (wenn mehr als einer angemeldet ist) und ein Konto auszuwählen, um sich bei der RP anzumelden. Die Benutzeroberfläche bittet auch um Erlaubnis, die RP mit dem gewählten föderierten IdP-Konto anzumelden.

   > [!NOTE]
   > Zu diesem Zeitpunkt, wenn der Benutzer sich zuvor in der aktuellen Browserinstanz mit einem föderierten RP-Konto authentifiziert hat (d.h. ein neues Konto bei der RP erstellt oder sich auf der RP-Website mit einem bestehenden Konto angemeldet hat), kann er je nach Einstellung der [`mediation`](/de/docs/Web/API/CredentialsContainer/get#mediation)-Option im `get()`-Aufruf **automatisch erneut authentifiziert** werden. Wenn dies der Fall ist, wird der Benutzer automatisch angemeldet, ohne seine Anmeldeinformationen einzugeben, sobald `get()` aufgerufen wird. Weitere Einzelheiten finden Sie im Abschnitt [Automatische erneute Authentifizierung](#automatische_erneute_authentifizierung).

9. Wenn der Benutzer die Erlaubnis dazu erteilt, macht der Browser eine berechtigte Anfrage an den [`id_assertion_endpoint`](/de/docs/Web/API/FedCM_API/IDP_integration#the_id_assertion_endpoint), um ein Validierungstoken für das ausgewählte Konto vom gewählten IdP anzufordern.

   Die Anmeldeinformationen werden in einer HTTP-[`POST`](/de/docs/Web/HTTP/Reference/Methods/POST)-Anfrage mit Cookies und einem Content-Typ von `application/x-www-form-urlencoded` gesendet.

   Wenn der Aufruf fehlschlägt, wird ein Fehlerrückgabewert wie in [ID-Assertion-Fehlerrückgaben](/de/docs/Web/API/FedCM_API/IDP_integration#id_assertion_error_responses) erklärt zurückgegeben und das von `get()` zurückgegebene Promise lehnt mit dem Fehler ab.

10. Der gewählte IdP überprüft, ob die von der RP gesendete Konto-ID mit der ID übereinstimmt, die für das Konto bereits angemeldet ist, und dass der `Origin` mit dem Ursprung der RP übereinstimmt, die im Voraus beim IdP registriert wurde. Wenn alles gut aussieht, reagiert er mit dem angeforderten Validierungstoken.

    > [!NOTE]
    > Der Ursprung der RP wird in einem völlig separaten Prozess beim IdP registriert, wenn die RP erstmals mit dem IdP integriert wird. Dieser Prozess ist für jeden IdP spezifisch.

11. Wenn der Ablauf abgeschlossen ist, wird das `get()`-Promise mit einem [`IdentityCredential`](/de/docs/Web/API/IdentityCredential)-Objekt erfüllt, das weitere RP-Funktionalität bietet. Besonders wichtig ist, dass dieses Objekt ein Token enthält, das die RP überprüften kann, stammt vom IdP (mithilfe eines Zertifikats) und enthält vertrauenswürdige Informationen über den angemeldeten Benutzer. Sobald der RP das Token validiert hat, kann sie die enthaltenen Informationen verwenden, um den Benutzer anzumelden und eine neue Sitzung zu starten, sich in ihren Dienst anzumelden usw. Das Format und die Struktur des Tokens hängt vom IdP ab und hat nichts mit der FedCM API zu tun (die RP muss den Anweisungen des IdP folgen).

## Aktiver gegen passiven Modus

Es gibt zwei verschiedene Benutzeroberflächenmodi, die der Browser einer RP anbieten kann, wenn sich Benutzer über die FedCM API anmelden, **`active`** und **`passive`** Modus. Welcher Modus für die Anmeldung verwendet wird, wird durch die [`mode`](/de/docs/Web/API/IdentityCredentialRequestOptions#mode)-Option des `identity`-Objekts gesteuert:

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

Der Standardwert für `mode` ist `passive`. Wenn `mode` nicht gesetzt ist oder explizit auf `passive` gesetzt wird, kann der Browser den Anmeldevorgang über einen `get()`-Aufruf ohne direkte Benutzerinteraktion starten. Beispielsweise könnte der Anmeldevorgang gestartet werden, sobald der Benutzer zur Anmeldeseite navigiert, vorausgesetzt, dass sie IdP-Konten zur Anmeldung haben. In diesem Modus zeigt der Browser dem Benutzer in der Regel ein Anmeldedialogfenster mit allen unterschiedlichen Anmeldeoptionen, die im `providers`-Objekt angegeben sind, und sie können diejenige auswählen, die ihnen am besten passt, und dann die entsprechenden Anmeldeinformationen eingeben.

Wenn `mode` auf `active` gesetzt ist, erfordert der Browser, dass der Anmeldevorgang durch eine Benutzeraktion wie das Klicken auf einen Button eingeleitet wird ({{Glossary("transient_activation", "transiente Aktivierung")}} ist erforderlich), also es darf im `providers`-Objekt höchstens ein IdP angegeben sein, sonst lehnt das `get()`-Promise ab. Dieser Modus wird normalerweise verwendet, wenn die RP für jede IdP-Wahl eine separate Schaltfläche bereitstellen möchte. Wenn der Benutzer auf eine dieser Schaltflächen klickt, erscheint ein vereinfachtes Dialogfenster, in dem er nur die Anmeldeinformationen für dieses Konto eingeben muss.

Sehen Sie sich [FedCM-Benutzeroberflächenmodi](https://privacysandbox.google.com/cookies/fedcm/why#fedcm_ui_modes) auf privacysandbox.google.com an, um ein Beispiel dafür zu sehen, wie die verschiedenen Benutzeroberflächenmodi in Google Chrome präsentiert werden.

## Automatische erneute Authentifizierung

FedCM ermöglicht es Benutzern, sich automatisch erneut zu authentifizieren, wenn sie versuchen, sich erneut bei einer RP anzumelden, nachdem sie sich zum ersten Mal mit FedCM authentifiziert haben. "Erste Authentifizierung" bezieht sich darauf, wenn der Benutzer ein Konto erstellt oder sich zum ersten Mal über das FedCM-Anmeldedialogfenster auf der RP-Website im aktuellen Browser angemeldet hat.

Nach der ersten Authentifizierung kann die automatische erneute Authentifizierung verwendet werden, um erneut automatisch auf der RP-Website anzumelden, ohne dass dem Benutzer ein "Weiter als..."-Bestätigungsdialog angezeigt wird. Wenn der Benutzer kürzlich die Erlaubnis erteilt hat, eine föderierte Anmeldung mit einem bestimmten Konto durchzuführen, gibt es keinen nichts zum unmittelbaren Durchsetzen einer weiteren expliziten Benutzerbestätigung.

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

Eine automatische erneute Authentifizierung kann auftreten, wenn `mediation` auf `optional` oder `silent` gesetzt ist.

Mit diesen `mediation`-Optionen tritt die automatische erneute Authentifizierung unter den folgenden Bedingungen auf:

- FedCM ist verfügbar. Beispielsweise hat der Benutzer FedCM entweder global oder in den Einstellungen der RP nicht deaktiviert.
- Der Benutzer hat sich auf diesem Browser mit nur einem Konto auf der RP-Website über FedCM angemeldet. Wenn Konten für mehrere IdPs existieren, wird der Benutzer nicht automatisch wieder angemeldet.
- Der Benutzer ist mit diesem Konto beim IdP angemeldet.
- Die automatische erneute Authentifizierung fand in den letzten 10 Minuten nicht statt. Diese Einschränkung wird eingeführt, um zu verhindern, dass der Benutzer sofort nach dem Abmelden automatisch angemeldet wird - was ein ziemlich verwirrendes Benutzererlebnis wäre.
- Die RP hat nicht [`preventSilentAccess()`](/de/docs/Web/API/CredentialsContainer/preventSilentAccess) nach der letzten Anmeldung aufgerufen. Dies kann von einer RP verwendet werden, um die automatische erneute Authentifizierung explizit zu deaktivieren, falls gewünscht.
- Der Benutzeroberflächenmodus ist [passive]().

Wenn diese Bedingungen erfüllt sind, wird ein Versuch, den Benutzer automatisch erneut zu authentifizieren, gestartet, sobald `get()` aufgerufen wird. Wenn die automatische erneute Authentifizierung erfolgreich ist, wird der Benutzer ohne Bestätigungsdialog erneut auf der RP-Site angemeldet und verwendet das gleiche IdP-Konto und validierte Token wie zuvor.

Wenn die automatische erneute Authentifizierung fehlschlägt, hängt das Verhalten von dem ausgewählten `mediation`-Wert ab:

- `optional`: Dem Benutzer wird _wieder_ das Dialogfeld angezeigt und er wird erneut um Bestätigung gebeten. Daher macht diese Option in der Regel auf einer Seite Sinn, auf der ein Benutzerfluss nicht mitten im Gange ist, wie zum Beispiel auf einer RP-Anmeldeseite.
- `silent`: Das `get()`-Promise lehnt ab und der Entwickler muss den Benutzer zurück zur Anmeldeseite leiten, um den Prozess erneut zu starten. Diese Option macht auf Seiten Sinn, auf denen ein Benutzerfluss im Gange ist und Sie ihn bis zum Abschluss angemeldet halten müssen, beispielsweise auf den Seiten eines Checkout-Flows einer E-Commerce-Website.

> [!NOTE]
> Die [`IdentityCredential.isAutoSelected`](/de/docs/Web/API/IdentityCredential/isAutoSelected)-Eigenschaft liefert einen Hinweis darauf, ob die föderierte Anmeldung mit der automatischen erneuten Authentifizierung durchgeführt wurde. Dies ist hilfreich, um die API-Leistung zu bewerten und die Benutzerfreundlichkeit entsprechend zu verbessern. Wenn sie nicht verfügbar ist, kann der Benutzer zur Anmeldung mit expliziter Benutzermediation aufgefordert werden, was ein `get()`-Aufruf mit `mediation: required` ist.

## Trennen einer föderierten Anmeldung

Die RP kann ein bestimmtes föderiertes Anmeldekonto vom zugehörigen IdP trennen, indem sie [`IdentityCredential.disconnect()`](/de/docs/Web/API/IdentityCredential/disconnect_static) aufruft. Diese Funktion kann von einem Top-Level-RP-Frame aus aufgerufen werden.

```js
IdentityCredential.disconnect({
  configURL: "https://idp.example.com/config.json",
  clientId: "rp123",
  accountHint: "account456",
});
```

Damit ein `disconnect()`-Aufruf funktioniert, muss der IdP einen [`disconnect_endpoint`](/de/docs/Web/API/FedCM_API/IDP_integration#disconnect_endpoint) in seiner Konfigurationsdatei enthalten. Weitere Details zur zugrundeliegenden HTTP-Kommunikation finden Sie unter [Der Trennung-Endpunkt](/de/docs/Web/API/FedCM_API/IDP_integration#the_disconnect_endpoint).

## Siehe auch

- [Federated Credential Management API](https://privacysandbox.google.com/cookies/fedcm) auf privacysandbox.google.com (2023)
