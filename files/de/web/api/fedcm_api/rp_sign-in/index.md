---
title: Relying party federated sign-in
slug: Web/API/FedCM_API/RP_sign-in
l10n:
  sourceCommit: b64f587034fbb610fe12ad819b0384f4f4ce1d4f
---

{{DefaultAPISidebar("FedCM API")}}

Dieser Artikel beschreibt den Prozess, wie eine relying party (RP) die [Federated Credential Management (FedCM) API](/de/docs/Web/API/FedCM_API) nutzen kann, um eine föderierte Anmeldung über einen Identitätsanbieter (IdP) durchzuführen.

## Aufruf der Methode get()

RPs können [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) mit einer `identity`-Option aufrufen, um zu verlangen, dass ein Benutzer sich mit einem bestehenden IdP-Konto, bei dem er bereits im Browser angemeldet ist, bei der RP anmeldet. Der IdP identifiziert die RP durch ihre `clientId`, die vom IdP in einem separaten, spezifischen Prozess der RP ausgestellt wurde. Der IdP identifiziert den spezifischen Benutzer mit Anmeldeinformationen (Cookies), die dem Browser beim Login bereitgestellt werden.

Die Methode gibt ein Promise zurück, das mit einem [`IdentityCredential`](/de/docs/Web/API/IdentityCredential)-Objekt erfüllt wird, wenn die Benutzeridentität vom IdP erfolgreich validiert wird. Dieses Objekt enthält ein Token, das Benutzeridentitätsinformationen umfasst, die mit dem {{Glossary("digital_certificate", "digitalen Zertifikat")}} des IdP signiert wurden.

Die RP sendet das Token an ihren Server zur Zertifikatsvalidierung, und bei Erfolg kann sie die (nun vertrauenswürdigen) Identitätsinformationen im Token nutzen, um den Benutzer in ihren Dienst einzuloggen (eine neue Sitzung starten), ihn für ihren Dienst zu registrieren, falls er ein neuer Benutzer ist, usw.

Falls der Benutzer sich noch nie beim IdP angemeldet hat oder ausgeloggt ist, wird die `get()`-Methode mit einem Fehler zurückgewiesen und die RP kann den Benutzer zur Anmeldeseite des IdP leiten, um sich anzumelden oder ein Konto zu erstellen.

> [!NOTE]
> Die genaue Struktur und der Inhalt des Validierungstokens sind für die FedCM API und den Browser intransparent. Der IdP entscheidet über Syntax und Nutzung, und die RP muss den vom IdP bereitgestellten Anweisungen folgen (siehe [Verify the Google ID token on your server side](https://developers.google.com/identity/gsi/web/guides/verify-google-id-token) als Beispiel), um sicherzustellen, dass sie es korrekt verwenden.

Ein typischer Aufruf könnte so aussehen:

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

Die `identity.providers`-Eigenschaft nimmt ein Array mit einem einzigen Objekt auf, das den Pfad zu einer IdP-Konfigurationsdatei (`configURL`) und die von der IdP ausgestellte Client-Kennung der RP (`clientId`) spezifiziert.

> [!NOTE]
> Derzeit erlaubt FedCM nur den Aufruf der API mit einem einzigen IdP, d.h., das `identity.providers`-Array muss eine Länge von 1 haben. Um den Benutzern eine Auswahl an Identitätsanbietern zu bieten, muss die RP `get()` für jeden separat aufrufen. Dies könnte sich in der Zukunft ändern.

Das obige Beispiel umfasst auch einige optionale Features:

- `identity.context` gibt den Kontext an, in dem sich der Benutzer mit FedCM authentifiziert. Zum Beispiel, ob es sich um eine erstmalige Registrierung für dieses Konto handelt oder um eine Anmeldung mit einem bestehenden Konto. Der Browser verwendet diese Informationen, um den Text in seiner FedCM-Benutzeroberfläche passend zum Kontext zu variieren.
- Die `nonce`-Eigenschaft bietet einen zufälligen Nonce-Wert, der sicherstellt, dass die Antwort für diese spezifische Anfrage ausgestellt wird und Wiederholungsangriffe verhindert.
- Die `loginHint`-Eigenschaft bietet einen Hinweis auf die Kontoauswahl(en), die der Browser für die Benutzeranmeldung präsentieren sollte. Dieser Hinweis wird mit den `login_hints`-Werten abgeglichen, die der IdP vom [Kontenlisten-Endpunkt](/de/docs/Web/API/FedCM_API/IDP_integration#the_accounts_list_endpoint) bereitstellt.

Der Browser fordert die IdP-Konfigurationsdatei an und führt den unten beschriebenen Anmeldefluss durch. Für weitere Informationen über die Art von Interaktion, die ein Benutzer von der vom Browser bereitgestellten Benutzeroberfläche erwarten könnte, siehe [Sign in to the relying party with the identity provider](https://developers.google.com/privacy-sandbox/cookies/fedcm#sign-in).

## FedCM Anmeldefluss

Am Anmeldefluss sind drei Parteien beteiligt — die RP-App, der Browser selbst und der IdP. Das folgende Diagramm fasst visuell zusammen, was passiert.

![Eine visuelle Darstellung des hier im Detail beschriebenen Flusses](fedcm-flow.png)

Der Ablauf ist wie folgt:

1. Die RP ruft [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) auf, um den Anmeldefluss zu starten.

2. Vom `configURL`, das im `get()`-Aufruf bereitgestellt wird, fordert der Browser zwei Dateien an:

   1. Die allgemein bekannte Datei (`/.well-known/web-identity`), verfügbar unter `/.well-known/web-identity` am [eTLD+1](https://web.dev/articles/same-site-same-origin#site) des `configURL`.
   2. Die [IdP-Konfigurationsdatei](/de/docs/Web/API/FedCM_API/IDP_integration#provide_a_config_file_and_endpoints) (`/config.json`), verfügbar unter dem `configURL`.

   Diese sind beides [`GET`](/de/docs/Web/HTTP/Methods/GET)-Anfragen, die keine Cookies haben und keine Weiterleitungen verfolgen. Dies verhindert effektiv, dass der IdP erfährt, wer die Anfrage gestellt hat und welche RP versucht, sich zu verbinden.

   Alle Anfragen, die vom Browser über FedCM gesendet werden, beinhalten einen `{{httpheader("Sec-Fetch-Dest")}}: webidentity`-Header, um {{Glossary("CSRF", "CSRF")}}-Angriffe zu verhindern. Alle IdP-Endpunkte müssen bestätigen, dass dieser Header enthalten ist.

3. Der IdP antwortet mit der angeforderten 'well-known'-Datei und `config.json`-Dateien. Der Browser validiert die Konfigurationsdatei-URL im `get()`-Request gegen die Liste der gültigen Konfigurations-URLs innerhalb der 'well-known'-Datei.

4. Falls der Browser den [Anmeldestatus des IdP](/de/docs/Web/API/FedCM_API/IDP_integration#update_login_status_using_the_login_status_api) auf `"logged-in"` gesetzt hat, macht er eine Anforderung mit Anmeldeinformationen (d.h. mit einem Cookie, das den angemeldeten Benutzer identifiziert) zum [`accounts_endpoint`](/de/docs/Web/API/FedCM_API/IDP_integration#the_accounts_list_endpoint) innerhalb der IdP-Konfigurationsdatei für die Kontodetails des Benutzers. Dies ist eine `GET`-Anfrage mit Cookies, aber ohne einen `client_id`-Parameter oder den {{httpheader("Origin")}}-Header. Dies verhindert effektiv, dass der IdP erfährt, bei welcher RP der Benutzer sich anzumelden versucht. Infolgedessen ist die zurückgegebene Kontenliste RP-agnostisch.

   > [!NOTE]
   > Wenn der IdP-Anmeldestatus `"logged-out"` lautet, lehnt der `get()`-Aufruf mit einem `NetworkError`-[`DOMException`](/de/docs/Web/API/DOMException) ab und macht keine Anfrage an den IdP's `accounts_endpoint`. In diesem Fall liegt es am Entwickler, den Ablauf zu steuern, z.B. indem er dem Benutzer empfiehlt, sich bei einem geeigneten IdP anzumelden. Beachten Sie, dass es einige Verzögerung bei der Ablehnung geben kann, um zu verhindern, dass der IdP-Anmeldestatus an die RP durchsickert.

5. Der IdP antwortet mit den vom `accounts_endpoint` angeforderten Kontoinformationen. Dies ist ein Array aller Konten, die mit den IdP-Cookies des Benutzers für jegliche mit dem IdP verbundenen RPs verbunden sind.

6. {{optional_inline}} Falls in der IdP-Konfigurationsdatei enthalten, macht der Browser eine nicht authentifizierte Anfrage zum [`client_metadata_endpoint`](/de/docs/Web/API/FedCM_API/IDP_integration#the_client_metadata_endpoint) für den Standort der IdP-Nutzungsbedingungen und Datenschutzrichtlinien-Seiten. Dies ist eine `GET`-Anfrage, die mit der `clientId`, die in den `get()`-Aufruf als Parameter übergeben wird, ohne Cookies erfolgt.

7. {{optional_inline}} Der IdP antwortet mit den vom `client_metadata_endpoint` angeforderten URLs.

8. Der Browser verwendet die durch die vorherigen zwei Anfragen erhaltenen Informationen, um die Benutzeroberfläche zu erstellen, die den Benutzer auffordert, ein Konto zur Anmeldung bei der RP auszuwählen (für den Fall, dass mehr als eines verfügbar ist). Die Benutzeroberfläche fordert den Benutzer auch um Erlaubnis für die Anmeldung bei der RP mit ihrem gewählten föderierten IdP-Konto.

   > [!NOTE]
   > In dieser Phase, falls der Benutzer zuvor mit einem föderierten RP-Konto im aktuellen Browserfenster authentifiziert wurde (d.h. ein neues Konto bei der RP erstellt oder sich auf der Website der RP mit einem bestehenden Konto angemeldet hat), können sie sich möglicherweise **auto-reauthentifizieren**, abhängig davon, was in der `get()`-Anforderung als [`mediation`](/de/docs/Web/API/CredentialsContainer/get#mediation)-Option festgelegt ist. In diesem Fall wird der Benutzer automatisch angemeldet, ohne seine Anmeldeinformationen einzugeben, sobald `get()` aufgerufen wird. Siehe den Abschnitt [Auto-reauthentication](#auto-reauthentication) für weitere Details.

9. Falls der Benutzer die Erlaubnis erteilt, macht der Browser eine Anforderung mit Anmeldeinformationen zum [`id_assertion_endpoint`](/de/docs/Web/API/FedCM_API/IDP_integration#the_id_assertion_endpoint), um ein Validierungstoken für das ausgewählte Konto vom IdP anzufordern.

   Die Anmeldeinformationen werden in einer HTTP-[`POST`](/de/docs/Web/HTTP/Methods/POST)-Anfrage mit Cookies und einem Inhaltstyp von `application/x-www-form-urlencoded` gesendet.

   Falls der Aufruf fehlschlägt, wird ein Fehler-Payload wie in [ID assertion error responses](/de/docs/Web/API/FedCM_API/IDP_integration#id_assertion_error_responses) erklärt zurückgegeben und das Promise, das von `get()` zurückgegeben wird, lehnt mit dem Fehler ab.

10. Der IdP überprüft, dass die von der RP gesendete Konten-ID mit der ID des bereits angemeldeten Kontos übereinstimmt und dass der `Origin` mit dem Ursprung der RP übereinstimmt, der im Voraus beim IdP registriert wurde. Wenn alles in Ordnung ist, antwortet er mit dem angeforderten Validierungstoken.

    > [!NOTE]
    > Der Ursprung der RP wird in einem völlig separaten Prozess registriert, wenn die RP sich erstmalig mit dem IdP integriert. Dieser Prozess wird für jeden IdP spezifisch sein.

11. Wenn der Ablauf abgeschlossen ist, wird das `get()`-Promise mit einem [`IdentityCredential`](/de/docs/Web/API/IdentityCredential)-Objekt aufgelöst, welches weitere RP-Funktionalitäten bereitstellt. Am bemerkenswertesten ist, dass dieses Objekt ein Token enthält, das die RP verifizieren kann, um zu bestätigen, dass es vom IdP stammt (unter Verwendung eines Zertifikats) und vertrauenswürdige Informationen über den angemeldeten Benutzer enthält. Sobald die RP das Token validiert hat, kann sie die enthaltenen Informationen nutzen, um den Benutzer anzumelden und eine neue Sitzung zu starten, ihn für ihren Dienst zu registrieren, usw. Das Format und die Struktur des Tokens hängt vom IdP ab und hat nichts mit der FedCM API zu tun (die RP muss den Anweisungen des IdP folgen).

## Auto-reauthentication

Die FedCM-Auto-reauthentication ermöglicht es Benutzern, sich automatisch erneut zu authentifizieren, wenn sie versuchen, sich nach ihrer initialen Authentifizierung mit FedCM erneut bei einer RP anzumelden. "Initiale Authentifizierung" bezieht sich darauf, wenn der Benutzer ein Konto erstellt oder sich über das FedCM-Anmeldedialogfeld erstmals auf der RP-Website mit dem FedCM anmeldet, im gleichen Browserfenster.

Nach der initialen Authentifizierung kann Auto-reauthentication verwendet werden, um sich erneut auf der RP-Website anzumelden, ohne dass der Benutzer eine „Als... fortfahren“-Bestätigungsaufforderung angezeigt bekommt. Wenn der Benutzer kürzlich die Erlaubnis erteilt hat, die föderierte Anmeldung mit einem bestimmten Konto zu ermöglichen, gibt es keinen Privatsphäre- oder Sicherheitsvorteil, wenn sofort eine weitere explizite Benutzerbestätigung erzwungen wird.

Das Verhalten der Auto-reauthentication wird durch die [`mediation`](/de/docs/Web/API/CredentialsContainer/get#mediation)-Option im `get()`-Aufruf gesteuert:

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

Auto-reauthentication kann auftreten, wenn `mediation` auf `optional` oder `silent` gesetzt ist.

Unter diesen `mediation`-Optionen erfolgt Auto-reauthentication unter folgenden Bedingungen:

- FedCM ist zur Nutzung bereit. Zum Beispiel hat der Benutzer FedCM nicht global oder in den Einstellungen der RP deaktiviert.
- Der Benutzer hat im Browser nur ein Konto verwendet, um sich über FedCM auf der RP-Website einzuloggen.
- Der Benutzer ist mit diesem Konto beim IdP angemeldet.
- Auto-reauthentication ist innerhalb der letzten 10 Minuten nicht aufgetreten. Diese Einschränkung wurde eingeführt, um zu verhindern, dass sich Benutzer sofort nach dem Abmelden automatisch erneut authentifizieren - was eine ziemlich verwirrende Benutzererfahrung darstellen würde.
- Die RP hat [`preventSilentAccess()`](/de/docs/Web/API/CredentialsContainer/preventSilentAccess) nach der vorherigen Anmeldung nicht aufgerufen. Dies kann von einer RP verwendet werden, um Auto-reauthentication ausdrücklich zu deaktivieren, wenn gewünscht.

Wenn diese Bedingungen erfüllt sind, beginnt ein Versuch, den Benutzer automatisch wieder zu authentifizieren, sobald `get()` aufgerufen wird. Wenn die Auto-reauthentication erfolgreich ist, wird der Benutzer erneut auf der RP-Website eingeloggt, ohne ein Bestätigungsfeld angezeigt zu bekommen, unter Verwendung des gleichen IdP-Kontos und validierten Tokens wie zuvor.

Falls die Auto-reauthentication fehlschlägt, hängt das Verhalten vom gewählten `mediation`-Wert ab:

- `optional`: dem Benutzer _wird_ das Dialogfeld erneut angezeigt und er wird um erneute Bestätigung gebeten. Infolgedessen ergibt diese Option in der Regel Sinn auf einer Seite, auf der eine Benutzerreise nicht in vollem Gange ist, wie z.B. auf einer RP-Anmeldeseite.
- `silent`: Das `get()`-Promise lehnt ab und der Entwickler muss daraufhin den Benutzer zur Anmeldeseite zurückführen, um den Prozess erneut zu starten. Diese Option macht auf Seiten Sinn, auf denen ein Benutzerfluss im Gange ist und Sie den Benutzer bis zum Abschluss angemeldet halten müssen, z.B. den Seiten eines Check-out-Flusses auf einer E-Commerce-Website.

> [!NOTE]
> Die [`IdentityCredential.isAutoSelected`](/de/docs/Web/API/IdentityCredential/isAutoSelected)-Eigenschaft stellt einen Hinweis darauf bereit, ob die föderierte Anmeldung unter Verwendung der Auto-reauthentication durchgeführt wurde. Dies ist hilfreich für die Bewertung der API-Leistung und zur Verbesserung der Benutzererfahrung entsprechend. Wenn es nicht verfügbar ist, kann der Benutzer aufgefordert werden, sich mit ausdrücklicher Benutzermediation anzumelden, was ein `get()`-Aufruf mit `mediation: required` ist.

## Siehe auch

- [Federated Credential Management API](https://developers.google.com/privacy-sandbox/cookies/fedcm) auf developers.google.com (2023)
