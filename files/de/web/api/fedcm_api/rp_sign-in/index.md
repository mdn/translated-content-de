---
title: Relying party federated sign-in
slug: Web/API/FedCM_API/RP_sign-in
l10n:
  sourceCommit: 0a0661cb9a59f853d9cc97e9f3821e707993fa77
---

{{DefaultAPISidebar("FedCM API")}}

Dieser Artikel beschreibt den Prozess, durch den eine vertrauende Partei (RP) die [Federated Credential Management (FedCM) API](/de/docs/Web/API/FedCM_API) nutzen kann, um eine föderierte Anmeldung über einen Identitätsanbieter (IdP) durchzuführen.

## Aufrufen der get()-Methode

RPs können [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) mit einer `identity`-Option aufrufen, um zu beantragen, dass sich ein Benutzer mit einem bereits im Browser angemeldeten IdP-Konto beim RP anmeldet. Der IdP identifiziert das RP durch dessen `clientId`, die dem RP vom IdP in einem separaten, für den IdP spezifischen Prozess zugeteilt wurde. Der IdP identifiziert den spezifischen Benutzer mithilfe von Anmeldedaten (Cookies), die dem Browser bei der Anmeldung bereitgestellt wurden.

Die Methode gibt ein Promise zurück, das sich mit einem [`IdentityCredential`](/de/docs/Web/API/IdentityCredential)-Objekt erfüllt, wenn die Benutzeridentität vom IdP erfolgreich validiert wird. Dieses Objekt enthält einen Token, der Benutzerdateninformationen umfasst, die mit dem {{Glossary("digital_certificate", "digitalen Zertifikat")}} des IdP signiert wurden.

Das RP sendet den Token zu seinem Server, um das Zertifikat zu validieren. Bei Erfolg kann es die (nun vertrauenswürdigen) Identitätsinformationen im Token nutzen, um den Benutzer bei seinem Dienst anzumelden (eine neue Sitzung zu starten), den Benutzer bei seinem Dienst anzumelden, wenn er ein neuer Benutzer ist, usw.

Wenn der Benutzer sich noch nie beim IdP angemeldet hat oder abgemeldet ist, weist die `get()`-Methode mit einem Fehler zurück, und das RP kann den Benutzer zur IdP-Anmeldeseite weiterleiten, um sich anzumelden oder ein Konto zu erstellen.

> [!NOTE]
> Die genaue Struktur und der Inhalt des Validierungstokens sind für die FedCM-API und den Browser undurchsichtig. Der IdP entscheidet über die Syntax und Verwendung; das RP muss den Anweisungen des IdP folgen (siehe [Google ID-Token auf Ihrer Server-Seite verifizieren](https://developers.google.com/identity/gsi/web/guides/verify-google-id-token) zum Beispiel) um sicherzustellen, dass es korrekt genutzt wird.

Eine typische Anfrage könnte wie folgt aussehen:

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

Die `identity.providers`-Eigenschaft nimmt ein Array mit einem einzelnen Objekt auf, das den Pfad zu einer IdP-Konfigurationsdatei (`configURL`) und die vom IdP ausgegebene Client-ID (`clientId`) des RP angibt.

> [!NOTE]
> Derzeit erlaubt FedCM, dass die API nur mit einem einzelnen IdP aufgerufen wird, d.h. das `identity.providers`-Array muss eine Länge von 1 haben. Um Benutzern eine Auswahl an Identitätsanbietern zu bieten, muss das RP `get()` für jeden separat aufrufen. Dies kann sich in Zukunft ändern.

Das obige Beispiel enthält auch einige optionale Funktionen:

- `identity.context` spezifiziert den Kontext, in dem der Benutzer sich mit FedCM authentifiziert. Zum Beispiel, ob es sich um eine erstmalige Anmeldung für dieses Konto oder eine Anmeldung mit einem bestehenden Konto handelt. Der Browser verwendet diese Informationen, um den Text in seiner FedCM-Benutzeroberfläche besser an den Kontext anzupassen.
- Die `nonce`-Eigenschaft liefert einen zufälligen Nonce-Wert, der sicherstellt, dass die Antwort speziell für diese Anfrage ausgestellt wird, um {{Glossary("replay_attack", "Replay-Angriffe")}} zu verhindern.
- Die `loginHint`-Eigenschaft bietet einen Hinweis auf die Kontooption(en), die der Browser zur Benutzeranmeldung präsentieren soll. Dieser Hinweis wird mit den vom IdP bereitgestellten `login_hints`-Werten vom [Konto-Listen-Endpunkt](/de/docs/Web/API/FedCM_API/IDP_integration#the_accounts_list_endpoint) abgeglichen.

Der Browser fordert die IdP-Konfigurationsdatei an und führt den unten beschriebenen Anmeldevorgang durch. Für weitere Informationen über die Art der Interaktion, die ein Benutzer von der vom Browser bereitgestellten Benutzeroberfläche erwarten könnte, siehe [Bei der vertrauenden Partei mit dem Identitätsanbieter anmelden](https://developers.google.com/privacy-sandbox/cookies/fedcm#sign-in).

## FedCM-Anmeldevorgang

Am Anmeldevorgang sind drei Parteien beteiligt — die RP-App, der Browser selbst und der IdP. Das folgende Diagramm fasst visuell zusammen, was passiert.

![eine visuelle Darstellung des unten detailliert beschriebenen Ablaufs](fedcm-flow.png)

Der Ablauf ist wie folgt:

1. Das RP ruft [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) auf, um den Anmeldevorgang zu starten.

2. Vom `configURL`, das im `get()`-Aufruf bereitgestellt wird, fordert der Browser zwei Dateien an:

   1. Die wohlbekannte Datei (`/.well-known/web-identity`), verfügbar von `/.well-known/web-identity` unter dem [eTLD+1](https://web.dev/articles/same-site-same-origin#site) des `configURL`.
   2. Die [IdP-Konfigurationsdatei](/de/docs/Web/API/FedCM_API/IDP_integration#provide_a_config_file_and_endpoints) (`/config.json`), die unter dem `configURL` verfügbar ist.

   Diese sind beide [`GET`](/de/docs/Web/HTTP/Methods/GET)-Anfragen, die keine Cookies haben und keine Weiterleitungen folgen. Dies verhindert effektiv, dass der IdP erfährt, wer die Anfrage gestellt hat und welches RP versucht, sich zu verbinden.

   Alle vom Browser über FedCM gesendeten Anfragen enthalten einen `{{httpheader("Sec-Fetch-Dest")}}: webidentity`-Header, um {{Glossary("CSRF", "CSRF")}}-Angriffe zu verhindern. Alle IdP-Endpunkte müssen bestätigen, dass dieser Header enthalten ist.

3. Der IdP antwortet mit der angeforderten wohlbekannten Datei und den `config.json`-Dateien. Der Browser validiert die Konfigurationsdatei-URL in der `get()`-Anfrage gegen die Liste der gültigen Konfigurations-URLs innerhalb der wohlbekannten Datei.

4. Wenn der Browser den [IdP-Anmeldestatus](/de/docs/Web/API/FedCM_API/IDP_integration#update_login_status_using_the_login_status_api) auf `"logged-in"` gesetzt hat, macht er eine anmeldebestätigte Anfrage (d.h. mit einem Cookie, das den angemeldeten Benutzer identifiziert) zum [`accounts_endpoint`](/de/docs/Web/API/FedCM_API/IDP_integration#the_accounts_list_endpoint) innerhalb der IdP-Konfigurationsdatei, um die Kontodetails des Benutzers zu erhalten. Dies ist eine `GET`-Anfrage mit Cookies, aber ohne `client_id`-Parameter oder den {{httpheader("Origin")}}-Header. Dies verhindert effektiv, dass der IdP erfährt, in welches RP der Benutzer versuchen möchte, sich anzumelden. Daher ist die zurückgegebene Kontenliste RP-agnostisch.

   > [!NOTE]
   > Wenn der IdP-Anmeldestatus `"logged-out"` ist, weist der `get()`-Aufruf mit einem `NetworkError` [`DOMException`](/de/docs/Web/API/DOMException) zurück und stellt keine Anfrage an den `accounts_endpoint` des IdP. In diesem Fall ist es Sache des Entwicklers, den Fluss zu steuern, zum Beispiel, indem er den Benutzer auffordert, sich bei einem geeigneten IdP anzumelden. Beachten Sie, dass es möglicherweise eine Verzögerung bei der Zurückweisung gibt, um zu vermeiden, dass der RP der Anmeldestatus des IdP bekannt wird.

5. Der IdP antwortet mit den angeforderten Kontoinformationen vom `accounts_endpoint`. Dies ist ein Array aller Konten, die mit den IdP-Cookies des Benutzers für alle mit dem IdP verbundenen RPs verknüpft sind.

6. {{optional_inline}} Falls in der IdP-Konfigurationsdatei enthalten, macht der Browser eine nicht anmeldebestätigte Anfrage zum [`client_metadata_endpoint`](/de/docs/Web/API/FedCM_API/IDP_integration#the_client_metadata_endpoint) für die Standortangaben der Geschäfts- und Datenschutzbestimmungen des RP. Dies ist eine `GET`-Anfrage, die mit dem im `get()`-Aufruf als Parameter übergebenen `clientId`, aber ohne Cookies gesendet wird.

7. {{optional_inline}} Der IdP antwortet mit den von dem `client_metadata_endpoint` angeforderten URLs.

8. Der Browser nutzt die durch die vorherigen zwei Anfragen erhaltenen Informationen, um die Benutzeroberfläche zu erstellen, die den Benutzer auffordert, ein Konto auszuwählen, um sich beim RP anzumelden (falls mehr als eines verfügbar ist). Die Benutzeroberfläche fordert den Benutzer auch um Erlaubnis, sich mit dem gewählten föderierten IdP-Konto beim RP anzumelden.

   > [!NOTE]
   > In diesem Stadium, wenn der Benutzer zuvor in der aktuellen Browserinstanz mit einem föderierten RP-Konto authentifiziert wurde (d.h. ein neues Konto beim RP erstellt oder sich mit einem bestehenden Konto auf der RP-Website angemeldet hat), könnte es möglich sein, **automatisch erneut zu authentifizieren**, abhängig davon, was die [`mediation`](/de/docs/Web/API/CredentialsContainer/get#mediation)-Option im `get()`-Aufruf eingestellt ist. Wenn ja, wird der Benutzer automatisch ohne Eingabe von Anmeldedaten angemeldet, sobald `get()` aufgerufen wird. Siehe den Abschnitt [Automatische Re-Authentifizierung](#automatische_re-authentifizierung) für mehr Details.

9. Gewährt der Benutzer die Erlaubnis, macht der Browser eine anmeldebestätigte Anfrage an den [`id_assertion_endpoint`](/de/docs/Web/API/FedCM_API/IDP_integration#the_id_assertion_endpoint), um ein Validierungstoken vom IdP für das ausgewählte Konto anzufordern.

   Die Anmeldedaten werden in einer HTTP-[`POST`](/de/docs/Web/HTTP/Methods/POST)-Anfrage mit Cookies und einem Content-Type von `application/x-www-form-urlencoded` gesendet.

   Falls der Aufruf fehlschlägt, wird eine Fehlernutzdaten wie in [Fehlerantworten bei ID-Bestätigungen](/de/docs/Web/API/FedCM_API/IDP_integration#id_assertion_error_responses) erläutert zurückgegeben und das von `get()` zurückgegebene Promise wird mit dem Fehler abgelehnt.

10. Der IdP überprüft, ob die vom RP gesendete Konto-ID mit der ID für das Konto übereinstimmt, bei dem der Benutzer bereits angemeldet ist, und dass der `Origin` mit dem Ursprungsort des RP übereinstimmt, der im Voraus beim IdP registriert wurde. Wenn alles in Ordnung ist, antwortet er mit dem angeforderten Validierungstoken.

    > [!NOTE]
    > Der Ursprung des RP wird in einem völlig separaten Prozess beim IdP registriert, wenn das RP erstmals in den IdP integriert wird. Dieser Prozess wird für jeden IdP spezifisch sein.

11. Wenn der Vorgang abgeschlossen ist, löst das `get()`-Promise mit einem [`IdentityCredential`](/de/docs/Web/API/IdentityCredential)-Objekt auf, das weitere RP-Funktionalitäten bietet. Dieses Objekt enthält insbesondere einen Token, den das RP überprüfen kann, kommt vom IdP (mithilfe eines Zertifikats) und enthält vertrauenswürdige Informationen über den angemeldeten Benutzer. Sobald das RP den Token validiert, kann es die darin enthaltenen Informationen verwenden, um den Benutzer anzumelden und eine neue Sitzung zu starten, ihn bei seinem Dienst anzumelden, usw. Das Format und die Struktur des Tokens hängen vom IdP ab und haben nichts mit der FedCM API zu tun (das RP muss den Anweisungen des IdP folgen).

## Automatische Re-Authentifizierung

Die FedCM-Automatische Re-Authentifizierung ermöglicht es Benutzern, sich automatisch erneut zu authentifizieren, wenn sie versuchen, sich nach ihrer ersten Authentifizierung mit FedCM erneut bei einem RP anzumelden. "Erstauthentifizierung" bezieht sich darauf, wenn der Benutzer ein Konto erstellt oder sich zum ersten Mal über den FedCM-Anmelde-Dialog auf der RP-Seite auf der RP-Website anmeldet, in derselben Browserinstanz.

Nach der Erstauthentifizierung kann die automatische Re-Authentifizierung verwendet werden, um sich auf der RP-Website erneut automatisch anzumelden, ohne dass dem Benutzer eine Bestätigungsaufforderung "Fortfahren als..." angezeigt wird. Wenn der Benutzer kürzlich die Erlaubnis zur Durchführung einer föderierten Anmeldung mit einem bestimmten Konto erteilt hat, gibt es keinen Datenschutz- oder Sicherheitsvorteil, sofort eine weitere explizite Benutzerbestätigung durchzusetzen.

Das Verhalten der automatischen Re-Authentifizierung wird durch die [`mediation`](/de/docs/Web/API/CredentialsContainer/get#mediation)-Option im `get()`-Aufruf gesteuert:

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

Eine automatische Re-Authentifizierung kann erfolgen, wenn `mediation` auf `optional` oder `silent` gesetzt wird.

Bei diesen `mediation`-Optionen erfolgt die automatische Re-Authentifizierung unter folgenden Bedingungen:

- FedCM ist nutzbar. Zum Beispiel hat der Benutzer FedCM weder global noch in den Einstellungen des RP deaktiviert.
- Der Benutzer hat nur ein Konto verwendet, um sich auf dieser Browserinstanz über FedCM auf der RP-Website anzumelden.
- Der Benutzer ist bei diesem Konto mit dem IdP angemeldet.
- Die automatische Re-Authentifizierung ist nicht binnen der letzten 10 Minuten erfolgt. Diese Einschränkung wird eingeführt, um zu verhindern, dass Benutzer sofort nach dem Abmelden automatisch wiederauthentifiziert werden, was eine ziemlich verwirrende Benutzererfahrung wäre.
- Der RP hat nicht [`preventSilentAccess()`](/de/docs/Web/API/CredentialsContainer/preventSilentAccess) nach der vorherigen Anmeldung aufgerufen. Dies kann von einem RP verwendet werden, um bei Bedarf explizit die automatische Re-Authentifizierung zu deaktivieren.

Wenn diese Bedingungen erfüllt sind, beginnt der Versuch, den Benutzer automatisch erneut zu authentifizieren, sobald `get()` aufgerufen wird. Wenn die automatische Re-Authentifizierung erfolgreich ist, wird der Benutzer erneut auf der RP-Seite angemeldet, ohne dass ihm eine Bestätigungsaufforderung angezeigt wird, und verwendet dabei das gleiche IdP-Konto und den validierten Token wie zuvor.

Wenn die automatische Re-Authentifizierung fehlschlägt, hängt das Verhalten vom gewählten `mediation`-Wert ab:

- `optional`: Dem Benutzer _wird_ das Dialogfeld erneut angezeigt und um Bestätigung gebeten. Infolgedessen macht es normalerweise Sinn, diese Option auf einer Seite zu verwenden, auf der kein Benutzerprozess im Fluss ist, wie z.B. eine RP-Anmeldeseite.
- `silent`: Das `get()`-Promise wird abgelehnt und der Entwickler muss den Benutzer zurück zur Anmeldeseite führen, um den Prozess erneut zu starten. Diese Option macht auf Seiten Sinn, auf denen ein Benutzerprozess im Fluss ist und Sie sie bis zum Abschluss angemeldet halten müssen, zum Beispiel die Seiten eines Checkout-Prozesses auf einer E-Commerce-Website.

> [!NOTE]
> Die [`IdentityCredential.isAutoSelected`](/de/docs/Web/API/IdentityCredential/isAutoSelected)-Eigenschaft gibt einen Hinweis darauf, ob die föderierte Anmeldung durch automatische Re-Authentifizierung durchgeführt wurde. Dies ist hilfreich, um die API-Leistung zu bewerten und die Benutzererfahrung entsprechend zu verbessern. Darüber hinaus kann der Benutzer aufgefordert werden, sich mit expliziter Benutzermediation anzumelden, falls dies nicht verfügbar ist, was ein `get()`-Aufruf mit `mediation: required` ist.

## Siehe auch

- [Federated Credential Management API](https://developers.google.com/privacy-sandbox/cookies/fedcm) auf developers.google.com (2023)
