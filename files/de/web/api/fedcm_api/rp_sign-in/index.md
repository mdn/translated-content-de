---
title: Verbundene Anmeldung über eine vertrauende Partei
slug: Web/API/FedCM_API/RP_sign-in
l10n:
  sourceCommit: 6722199b4d63fad3c33db1146af380fc98b6c202
---

{{DefaultAPISidebar("FedCM API")}}

Dieser Artikel beschreibt den Prozess, mit dem eine {{Glossary("Relying_party", "vertrauende Partei")}} (RP) die [Federated Credential Management (FedCM) API](/de/docs/Web/API/FedCM_API) verwenden kann, um eine verbundene Anmeldung über einen {{Glossary("Identity_provider", "Identity Provider")}} (IdP) durchzuführen.

## Aufruf der `get()`-Methode

RPs können [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) mit einer `identity`-Option aufrufen, um dem Benutzer die Möglichkeit zu geben, sich mit einem vorhandenen IdP-Konto (bei dem er im Browser bereits angemeldet ist) beim RP anzumelden. Die IdPs identifizieren das RP durch seine `clientId`, die jedem IdP im Rahmen eines separaten idP-spezifischen Prozesses ausgestellt wurde. Der ausgewählte IdP identifiziert den spezifischen Benutzer, der versucht sich mit den Anmeldedaten (Cookies), die dem Browser während des [Anmeldevorgangs](#fedcm_anmeldevorgang) bereitgestellt wurden, anzumelden.

Die Methode gibt ein Promise zurück, das mit einem [`IdentityCredential`](/de/docs/Web/API/IdentityCredential)-Objekt erfüllt wird, wenn die Benutzeridentität erfolgreich vom ausgewählten IdP validiert wird. Dieses Objekt enthält ein Token mit Benutzeridentitätsinformationen, die mit dem {{Glossary("digital_certificate", "digitalen Zertifikat")}} des IdP signiert wurden.

Das RP sendet das Token an seinen Server, um das Zertifikat zu validieren, und kann bei Erfolg die (nun vertrauenswürdigen) Identitätsinformationen im Token verwenden, um den Benutzer in seinen Dienst einzuloggen (eine neue Sitzung zu starten), ihn für seinen Dienst anzumelden, wenn er ein neuer Benutzer ist, etc.

Wenn der Benutzer sich noch nie bei einem IdP angemeldet hat oder abgemeldet ist, lehnt die `get()`-Methode mit einem Fehler ab und das RP kann den Benutzer zu einer IdP-Seite weiterleiten, um sich anzumelden oder ein Konto zu erstellen.

> [!NOTE]
> Die genaue Struktur und der Inhalt des Validierungstokens sind der FedCM API und dem Browser nicht ersichtlich. Ein IdP entscheidet über dessen Syntax und Verwendung, und das RP muss den Anweisungen des IdP folgen (z.B. [Google ID-Token auf Ihrer Serverseite verifizieren](https://developers.google.com/identity/gsi/web/guides/verify-google-id-token)), um sicherzustellen, dass sie es korrekt verwenden.

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

Die Eigenschaft `identity.providers` nimmt ein Array, das ein oder mehrere Objekte enthält, die den Pfad zur Konfigurationsdatei (`configURL`) jedes IdP und die vom IdP an das RP ausgestellte Client-Kennung (`clientId`) angeben.

Das vorhergehende Beispiel beinhaltet auch einige optionale Funktionen:

- `identity.context` gibt den Kontext an, in dem sich der Benutzer mit FedCM authentifiziert. Zum Beispiel, ob es sich um eine erstmalige Anmeldung für dieses Konto oder eine Anmeldung mit einem bestehenden Konto handelt. Der Browser verwendet diese Informationen, um den Text in seiner FedCM-Benutzeroberfläche dem Kontext besser anzupassen.
- Die Eigenschaft `nonce` stellt einen zufällig erzeugten Nonce-Wert bereit, um sicherzustellen, dass die Antwort auf diese spezifische Anfrage ausgestellt wird, wodurch {{Glossary("replay_attack", "Replay-Angriffe")}} verhindert werden.
- Die Eigenschaft `loginHint` gibt einen Hinweis darauf, welche Kontooption(en) der Browser zur Benutzeranmeldung anzeigen soll. Dieser Hinweis wird mit den `login_hints`-Werten abgeglichen, die der IdP am [Endpoint der Kontoliste](/de/docs/Web/API/FedCM_API/IDP_integration#the_accounts_list_endpoint) bereitstellt.

Der Browser fordert die IdP-Konfigurationsdateien an und führt den unten beschriebenen Anmeldefluss durch. Weitere Informationen darüber, welche Art von Interaktion ein Benutzer von der vom Browser bereitgestellten Benutzeroberfläche erwarten könnte, finden Sie unter [Implementieren einer Identitätslösung mit FedCM auf der Seite der vertrauenden Partei](https://developer.chrome.com/docs/identity/fedcm/implement/relying-party).

## FedCM Anmeldevorgang

Am Anmeldevorgang sind drei Parteien beteiligt — die RP-App, der Browser selbst und der IdP. Das folgende Diagramm fasst optisch zusammen, was geschieht.

![Eine visuelle Darstellung des unten näher beschriebenen Ablaufs](fedcm-flow.png)

Der Ablauf ist wie folgt:

1. Das RP ruft [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) auf, um den Anmeldevorgang zu starten.

2. Vom `configURL`, das für jeden IdP bereitgestellt wird, fordert der Browser zwei Dateien an:
   1. Die gut bekannte Datei (`/.well-known/web-identity`), verfügbar unter `/.well-known/web-identity` bei [eTLD+1](https://web.dev/articles/same-site-same-origin#site) des `configURL`.
   2. Die [IdP-Konfigurationsdatei](/de/docs/Web/API/FedCM_API/IDP_integration#provide_a_config_file_and_endpoints) (`/config.json`), verfügbar unter dem `configURL`.

   Dies sind beide [`GET`](/de/docs/Web/HTTP/Reference/Methods/GET) Anfragen, die keine Cookies haben und keine Weiterleitungen folgen. Dies verhindert effektiv, dass IdPs erfahren, wer die Anfrage gestellt hat und welches RP versucht, eine Verbindung herzustellen.

   Alle Anfragen, die der Browser über FedCM sendet, enthalten einen `{{httpheader("Sec-Fetch-Dest")}}: webidentity` Header, um {{Glossary("CSRF", "CSRF")}}-Angriffe zu verhindern. Alle IdP-Endpunkte müssen bestätigen, dass dieser Header enthalten ist.

3. Die IdPs antworten mit den angeforderten gut bekannten Dateien und `config.json`-Dateien. Der Browser validiert die URL der Konfigurationsdatei in der `get()`-Anfrage anhand der Liste der gültigen Konfigurations-URLs in der gut bekannten Datei.

4. Wenn der Browser den [Anmeldestatus eines IdP](/de/docs/Web/API/FedCM_API/IDP_integration#update_login_status_using_the_login_status_api) auf `"eingeloggt"` gesetzt hat, macht er eine authentifizierte Anfrage (d.h. mit einem Cookie, das den angemeldeten Benutzer identifiziert) zum [`accounts_endpoint`](/de/docs/Web/API/FedCM_API/IDP_integration#the_accounts_list_endpoint) innerhalb der IdP-Konfigurationsdatei für die Kontodaten des Benutzers. Dies ist eine `GET`-Anfrage mit Cookies, aber ohne `client_id`-Parameter oder den {{httpheader("Origin")}}-Header. Dies verhindert effektiv, dass IdPs erfahren, bei welchem RP der Benutzer sich anzumelden versucht. Infolgedessen ist die zurückgegebene Liste der Konten RP-agnostisch.

   > [!NOTE]
   > Wenn die Anmeldestatus der IdPs alle `"abgemeldet"` sind, lehnt der `get()`-Aufruf mit einem `NetworkError` [`DOMException`](/de/docs/Web/API/DOMException) ab und macht keine Anfrage an irgendeinen IdP-`accounts_endpoint`. In diesem Fall liegt es am Entwickler, den Fluss zu steuern, indem z.B. der Benutzer aufgefordert wird, sich bei einem geeigneten IdP anzumelden. Beachten Sie, dass es möglicherweise zu einer Verzögerung bei der Ablehnung kommt, um eine Offenlegung des IdP-Anmeldestatus an das RP zu vermeiden.

5. Die IdPs antworten mit den angeforderten Kontoinformationen von ihren `accounts_endpoint`s. Diese sind Arrays aller Konten, die mit den IdP-Cookies des Benutzers für alle RPs verbunden sind, die mit einem IdP assoziiert sind.

6. {{optional_inline}} Wenn sie in einer IdP-Konfigurationsdatei enthalten sind, stellt der Browser eine nicht authentifizierte Anfrage an den [`client_metadata_endpoint`](/de/docs/Web/API/FedCM_API/IDP_integration#the_client_metadata_endpoint) für die Position der RP-Dienstleistungsbedingungen und Datenschutzrichtlinien-Seiten. Dies ist eine `GET`-Anfrage, die mit der `clientId` gesendet wird, die als Parameter in den `get()`-Aufruf übergeben wurde, ohne Cookies.

7. {{optional_inline}} Die IdPs antworten mit den URLs, die vom `client_metadata_endpoint` angefordert wurden.

8. Der Browser verwendet die Informationen, die durch die vorherigen beiden Anfragen erhalten wurden, um die Benutzeroberfläche zu erstellen, in der der Benutzer aufgefordert wird, einen IdP (falls mehr als einer angemeldet ist) und ein Konto auszuwählen, um sich beim RP anzumelden. Die Benutzeroberfläche fordert den Benutzer auch auf, die Erlaubnis zu erteilen, sich beim RP mit seinem ausgewählten verbundenen IdP-Konto anzumelden.

   > [!NOTE]
   > Zu diesem Zeitpunkt, wenn der Benutzer sich zuvor mit einem verbundenen RP-Konto in der aktuellen Browserinstanz authentifiziert hat (d.h. ein neues Konto beim RP erstellt oder sich mit einem bestehenden Konto auf der RP-Website angemeldet hat), kann er möglicherweise **automatisch erneut authentifizieren**, abhängig davon, was die [`mediation`](/de/docs/Web/API/CredentialsContainer/get#mediation)-Option im `get()`-Aufruf eingestellt ist. Wenn ja, wird der Benutzer automatisch angemeldet, ohne seine Anmeldedaten einzugeben, sobald `get()` aufgerufen wird. Siehe den Abschnitt [Automatische erneute Authentifizierung](#automatische_erneute_authentifizierung) für weitere Details.

9. Wenn der Benutzer die Erlaubnis erteilt, stellt der Browser eine authentifizierte Anfrage an den [`id_assertion_endpoint`](/de/docs/Web/API/FedCM_API/IDP_integration#the_id_assertion_endpoint), um ein Validierungstoken vom ausgewählten IdP für das ausgewählte Konto anzufordern.

   Die Anmeldedaten werden in einer HTTP-[`POST`](/de/docs/Web/HTTP/Reference/Methods/POST)-Anfrage mit Cookies und einem Inhaltstyp von `application/x-www-form-urlencoded` gesendet.

   Wenn der Aufruf fehlschlägt, wird eine Fehlermeldung zurückgegeben, wie in [ID-Bestätigungsfehlerantworten](/de/docs/Web/API/FedCM_API/IDP_integration#id_assertion_error_responses) erklärt, und das von `get()` zurückgegebene Promise wird mit dem Fehler abgelehnt.

10. Der ausgewählte IdP überprüft, ob die vom RP gesendete Konto-ID mit der ID für das Konto übereinstimmt, das bereits angemeldet ist, und dass der `Origin` mit dem Ursprung des RP übereinstimmt, der im Voraus beim IdP registriert wurde. Wenn alles in Ordnung ist, antwortet der IdP mit dem angeforderten Validierungstoken.

    > [!NOTE]
    > Der Ursprung des RP wird in einem völlig separaten Prozess vom IdP registriert, wenn das RP sich erstmals mit dem IdP integriert. Dieser Prozess wird für jeden IdP spezifisch sein.

11. Wenn der Fluss abgeschlossen ist, wird das `get()`-Promise mit einem [`IdentityCredential`](/de/docs/Web/API/IdentityCredential)-Objekt aufgelöst, das der RP für weitere Funktionen verwenden kann. Am bemerkenswertesten ist, dass dieses Objekt ein Token enthält, das das RP verifizieren kann, um sicherzustellen, dass es vom IdP stammt (unter Verwendung eines Zertifikats) und vertrauenswürdige Informationen über den angemeldeten Benutzer enthält. Sobald das RP das Token validiert hat, kann es die enthaltenen Informationen verwenden, um den Benutzer anzumelden und eine neue Sitzung zu starten, ihn für seinen Dienst anzumelden, etc. Der Format und die Struktur des Tokens hängen vom IdP ab und haben nichts mit der FedCM API zu tun (das RP muss die Anweisungen des IdP befolgen).

## Aktiver versus passiver Modus

Es gibt zwei verschiedene Benutzeroberflächenmodi, die der Browser einem RP-Benutzer bereitstellen kann, wenn er sich über die FedCM API anmeldet, **`aktiv`** und **`passiv`**. Welcher Modus für die Anmeldung verwendet wird, wird durch die [`mode`](/de/docs/Web/API/IdentityCredentialRequestOptions#mode)-Option des `identity`-Objekts gesteuert:

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

Der Standardwert für `mode` ist `passiv`. Wenn `mode` nicht gesetzt ist oder explizit auf `passiv` gesetzt ist, kann der Browser die Anmeldung über einen `get()`-Aufruf ohne direkte Benutzerinteraktion initiieren. Zum Beispiel möchten Sie möglicherweise die Anmeldung initiieren, sobald der Benutzer zur Anmeldeseite navigiert, vorausgesetzt, er hat IdP-Konten, mit denen er sich anmelden kann. In diesem Modus zeigt der Browser dem Benutzer in der Regel ein Anmeldedialogfeld an, das alle verschiedenen Anmeldeoptionen des `providers`-Objekts enthält, und er kann die für ihn am besten geeignete auswählen und dann die passenden Anmeldedaten eingeben.

Wenn `mode` auf `aktiv` gesetzt ist, erfordert der Browser, dass die Anmeldung durch eine Benutzeraktion wie das Klicken auf einen Button gestartet wird (es ist eine {{Glossary("transient_activation", "transiente Aktivierung")}} erforderlich), und das `providers`-Objekt kann nur eine Länge von `1` haben, andernfalls wird das `get()`-Promise abgelehnt. Dieser Modus wird typischerweise verwendet, wenn das RP einen separaten Button für jede IdP-Auswahl bereitstellen möchte. Wenn der Benutzer auf einen dieser Buttons klickt, erscheint ein vereinfachtes Dialogfenster, das nur erfordert, dass er die Anmeldedaten für dieses Konto eingibt.

Siehe [FedCM-Benutzeroberflächenmodi](https://developer.chrome.com/docs/identity/fedcm/overview#fedcm_ui_modes) auf developer.chrome.com für ein Beispiel, wie die verschiedenen Benutzeroberflächenmodi in Google Chrome präsentiert werden.

## Automatische erneute Authentifizierung

FedCM bietet die Möglichkeit zur automatischen erneuten Authentifizierung, damit Benutzer sich automatisch erneut authentifizieren können, wenn sie sich bei einem RP erneut anmelden möchten, nachdem sie sich zum ersten Mal über FedCM authentifiziert haben. "Erstanmeldung" bezieht sich darauf, wenn der Benutzer ein Konto erstellt oder sich zum ersten Mal auf der RP-Website über das FedCM-Anmeldedialogfeld auf der RP-Website anmeldet, im selben Browser.

Nach der ersten Authentifizierung kann die automatische erneute Authentifizierung verwendet werden, um sich erneut bei der RP-Website anzumelden, ohne dem Benutzer ein "Weiter als..." Bestätigungsfenster anzuzeigen. Wenn der Benutzer kürzlich die Erlaubnis erteilt hat, die verbundene Anmeldung mit einem bestimmten Konto zuzulassen, gibt es keinen Datenschutz- oder Sicherheitsvorteil, sofort eine weitere explizite Benutzerbestätigung zu erzwingen.

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

Die automatische erneute Authentifizierung kann auftreten, wenn `mediation` auf `optional` oder `silent` gesetzt ist.

Bei diesen `mediation`-Optionen tritt die automatische erneute Authentifizierung unter den folgenden Bedingungen ein:

- FedCM steht zur Verfügung. Zum Beispiel, wenn der Benutzer FedCM nicht global oder in den RP-Einstellungen deaktiviert hat.
- Der Benutzer hat nur ein Konto verwendet, um sich über FedCM auf der RP-Website anzumelden. Wenn Konten für mehrere IdPs vorhanden sind, wird der Benutzer nicht automatisch erneut authentifiziert.
- Der Benutzer ist bei dem IdP mit diesem Konto angemeldet.
- Die automatische erneute Authentifizierung fand in den letzten 10 Minuten nicht statt. Diese Einschränkung soll verhindern, dass Benutzer automatisch unmittelbar nach dem Abmelden erneut authentifiziert werden, was eine verwirrende Benutzererfahrung wäre.
- Das RP hat nach dem vorherigen Anmelden nicht [`preventSilentAccess()`](/de/docs/Web/API/CredentialsContainer/preventSilentAccess) aufgerufen. Dies kann vom RP ausdrücklich verwendet werden, um die automatische erneute Authentifizierung zu verhindern, falls gewünscht.
- Der Benutzeroberflächenmodus ist [passiv]().

Wenn diese Bedingungen erfüllt sind, wird ein Versuch, den Benutzer automatisch erneut zu authentifizieren, gestartet, sobald `get()` aufgerufen wird. Wenn die automatische erneute Authentifizierung erfolgreich ist, wird der Benutzer erneut auf die RP-Website eingeloggt, ohne dass eine Bestätigungsaufforderung angezeigt wird, und zwar mit demselben IdP-Konto und dem validierten Token wie zuvor.

Wenn die automatische erneute Authentifizierung fehlschlägt, hängt das Verhalten von dem gewählten `mediation`-Wert ab:

- `optional`: Dem Benutzer _wird_ das Dialogfeld angezeigt und er wird erneut um Bestätigung gebeten. Daher lohnt es sich, diese Option auf einer Seite zu verwenden, auf der der Benutzer sich nicht in der Mitte eines Prozesses befindet, wie zum Beispiel einer RP-Anmeldeseite.
- `silent`: Das `get()`-Promise wird abgelehnt und der Entwickler muss den Benutzer zurück zur Anmeldeseite führen, um den Prozess erneut zu starten. Diese Option macht Sinn auf Seiten, auf denen der Benutzerfluss im Gange ist und Sie ihn bis zum Abschluss eingeloggt halten müssen, z.B. auf den Seiten eines Checkout-Flusses auf einer E-Commerce-Website.

> [!NOTE]
> Die [`IdentityCredential.isAutoSelected`](/de/docs/Web/API/IdentityCredential/isAutoSelected)-Eigenschaft gibt einen Hinweis darauf, ob die verbundene Anmeldung durch die automatische erneute Authentifizierung durchgeführt wurde. Dies ist hilfreich, um die Leistung der API zu bewerten und die Benutzererfahrung entsprechend zu verbessern. Auch wenn sie nicht verfügbar ist, kann der Benutzer möglicherweise aufgefordert werden, sich mit expliziter Benutzermediation anzumelden, was einen `get()`-Aufruf mit `mediation: required` darstellt.

## Trennen einer verbundenen Anmeldung

Das RP kann ein angegebenes verbundenes Anmeldekonto vom zugehörigen IdP trennen, indem es [`IdentityCredential.disconnect()`](/de/docs/Web/API/IdentityCredential/disconnect_static) aufruft. Diese Funktion kann von einem obersten RP-Frame aus aufgerufen werden.

```js
IdentityCredential.disconnect({
  configURL: "https://idp.example.com/config.json",
  clientId: "rp123",
  accountHint: "account456",
});
```

Damit ein `disconnect()`-Aufruf funktioniert, muss der IdP einen [`disconnect_endpoint`](/de/docs/Web/API/FedCM_API/IDP_integration#disconnect_endpoint) in seiner Konfigurationsdatei aufnehmen. Siehe [Der Disconnect-Endpoint](/de/docs/Web/API/FedCM_API/IDP_integration#the_disconnect_endpoint) für weitere Details zur zugrunde liegenden HTTP-Kommunikation.

## Siehe auch

- [Federated Credential Management API](https://developer.chrome.com/docs/identity/fedcm/overview) auf developer.chrome.com (2023)
