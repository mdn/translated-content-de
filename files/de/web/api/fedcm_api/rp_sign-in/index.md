---
title: Relying party federated sign-in
slug: Web/API/FedCM_API/RP_sign-in
l10n:
  sourceCommit: b64f587034fbb610fe12ad819b0384f4f4ce1d4f
---

{{DefaultAPISidebar("FedCM API")}}

Dieser Artikel beschreibt den Prozess, durch den eine relying party (RP) die [Federated Credential Management (FedCM) API](/de/docs/Web/API/FedCM_API) verwenden kann, um eine föderierte Anmeldung über einen Identity Provider (IdP) durchzuführen.

## Aufruf der get()-Methode

RPs können [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) mit der Option `identity` aufrufen, um zu verlangen, dass ein Benutzer sich bei der RP mit einem vorhandenen IdP-Konto anmeldet, bei dem er bereits im Browser angemeldet ist. Der IdP identifiziert die RP durch ihre `clientId`, die vom IdP an die RP in einem separaten Prozess ausgegeben wurde, der spezifisch für den IdP ist. Der IdP identifiziert den spezifischen Benutzer mit Anmeldeinformationen (Cookies), die dem Browser beim Anmelden bereitgestellt wurden.

Die Methode gibt ein Promise zurück, das mit einem [`IdentityCredential`](/de/docs/Web/API/IdentityCredential)-Objekt erfüllt wird, wenn die Benutzeridentität erfolgreich vom IdP validiert wird. Dieses Objekt enthält ein Token, das Benutzeridentitätsinformationen enthält, die mit dem [digitalen Zertifikat](/de/docs/Glossary/digital_certificate) des IdP signiert wurden.

Die RP sendet das Token an ihren Server, um das Zertifikat zu validieren, und kann bei Erfolg die (nun vertrauenswürdigen) Identitätsinformationen im Token verwenden, um den Benutzer in ihren Dienst anzumelden (eine neue Sitzung zu starten), ihn für ihren Dienst zu registrieren, wenn es sich um einen neuen Benutzer handelt, usw.

Wenn der Benutzer sich noch nie beim IdP angemeldet hat oder abgemeldet ist, lehnt die `get()`-Methode mit einem Fehler ab und die RP kann den Benutzer zur IdP-Anmeldeseite weiterleiten, um sich anzumelden oder ein Konto zu erstellen.

> [!NOTE]
> Die genaue Struktur und der Inhalt des Validierungstokens sind für die FedCM API und den Browser undurchsichtig. Der IdP entscheidet über die Syntax und Nutzung davon, und die RP muss den Anweisungen folgen, die vom IdP bereitgestellt werden (siehe zum Beispiel [Verify the Google ID token on your server side](https://developers.google.com/identity/gsi/web/guides/verify-google-id-token)), um sicherzustellen, dass sie es korrekt verwenden.

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
      ],
    },
  });
}
```

Die Eigenschaft `identity.providers` nimmt ein Array auf, das ein einzelnes Objekt enthält, das den Pfad zu einer IdP-Konfigurationsdatei (`configURL`) und die vom IdP ausgegebene Client-ID der RP (`clientId`) spezifiziert.

> [!NOTE]
> Aktuell erlaubt FedCM nur, dass die API mit einem einzigen IdP aufgerufen wird, d.h. das `identity.providers`-Array muss eine Länge von 1 haben. Um den Benutzern die Auswahl eines Identitätsanbieters zu ermöglichen, muss die RP `get()` getrennt für jeden aufrufen. Dies könnte sich in der Zukunft ändern.

Das obige Beispiel enthält auch ein paar optionale Funktionen:

- `identity.context` gibt den Kontext an, in dem der Benutzer sich mit FedCM authentifiziert. Beispielsweise, ob es sich um eine erstmalige Registrierung für dieses Konto handelt oder um eine Anmeldung mit einem bestehenden Konto. Der Browser verwendet diese Informationen, um den Text in seiner FedCM-UI besser an den Kontext anzupassen.
- Die `nonce`-Eigenschaft stellt einen zufälligen Nonce-Wert bereit, der sicherstellt, dass die Antwort für diese spezifische Anfrage ausgegeben wird, und verhindert so [Replay-Angriffe](/de/docs/Glossary/replay_attack).
- Die `loginHint`-Eigenschaft bietet einen Hinweis auf die Kontooption(en), die der Browser für die Benutzeranmeldung präsentieren sollte. Dieser Hinweis wird mit den `login_hints`-Werten abgeglichen, die der IdP vom [Kontenlisten-Endpunkt](/de/docs/Web/API/FedCM_API/IDP_integration#the_accounts_list_endpoint) bereitstellt.

Der Browser fordert die IdP-Konfigurationsdatei an und führt den unten beschriebenen Anmeldefluss durch. Für weitere Informationen zu der Art von Interaktion, die ein Benutzer von der browsergelieferten Benutzeroberfläche erwarten könnte, siehe [Sign in to the relying party with the identity provider](https://developers.google.com/privacy-sandbox/cookies/fedcm#sign-in).

## FedCM Anmeldefluss

Beim Anmeldefluss sind drei Parteien beteiligt — die RP-App, der Browser selbst und der IdP. Das folgende Diagramm fasst zusammen, was visuell passiert.

![eine visuelle Darstellung des unten im Detail beschriebenen Ablaufs](fedcm-flow.png)

Der Ablauf ist wie folgt:

1. Die RP ruft [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) auf, um den Anmeldefluss zu starten.

2. Vom `configURL` in dem `get()`-Aufruf bereitgestellt, fordert der Browser zwei Dateien an:

   1. Die wohlbekannte Datei (`/.well-known/web-identity`), verfügbar unter `/.well-known/web-identity` auf der [eTLD+1](https://web.dev/articles/same-site-same-origin#site) der `configURL`.
   2. Die [IdP-Konfigurationsdatei](/de/docs/Web/API/FedCM_API/IDP_integration#provide_a_config_file_and_endpoints) (`/config.json`), verfügbar unter `configURL`.

   Dies sind beide `GET`-Anfragen, die keine Cookies haben und keine Weiterleitungen folgen. Dies verhindert effektiv, dass der IdP erfährt, wer die Anfrage gestellt hat und welche RP eine Verbindung herzustellen versucht.

   Alle Anfragen, die über FedCM vom Browser gesendet werden, enthalten einen `{{httpheader("Sec-Fetch-Dest")}}: webidentity`-Header, um [CSRF](/de/docs/Glossary/CSRF)-Angriffe zu verhindern. Alle IdP-Endpunkte müssen bestätigen, dass dieser Header enthalten ist.

3. Der IdP antwortet mit der angeforderten wohlbekannten Datei und `config.json`-Dateien. Der Browser validiert die Konfigurationsdatei-URL in der `get()`-Anfrage gegen die Liste der gültigen Konfigurations-URLs innerhalb der wohlbekannten Datei.

4. Wenn der Browser den [Anmeldestatus des IdP](/de/docs/Web/API/FedCM_API/IDP_integration#update_login_status_using_the_login_status_api) auf `"logged-in"` gesetzt hat, macht er eine Anfrage mit Anmeldeinformationen (d.h. mit einem Cookie, das den angemeldeten Benutzer identifiziert) an den [`accounts_endpoint`](/de/docs/Web/API/FedCM_API/IDP_integration#the_accounts_list_endpoint) innerhalb der IdP-Konfigurationsdatei, um die Kontodetails des Benutzers zu erhalten. Dies ist eine `GET`-Anfrage mit Cookies, aber ohne `client_id`-Parameter oder den {{httpheader("Origin")}}-Header. Dies verhindert effektiv, dass der IdP erfährt, bei welcher RP sich der Benutzer anzumelden versucht. Infolgedessen ist die zurückgegebene Kontenliste RP-agnostisch.

   > [!NOTE]
   > Wenn der Anmeldestatus des IdP `"logged-out"` ist, lehnt `get()` mit einem `NetworkError`-[`DOMException`](/de/docs/Web/API/DOMException) ab und macht keine Anfrage an den IdP-`accounts_endpoint`. In diesem Fall ist es Aufgabe des Entwicklers, den Fluss zu handhaben, indem er den Benutzer beispielsweise auffordert, sich bei einem geeigneten IdP anzumelden. Beachten Sie, dass es zu einer gewissen Verzögerung bei der Ablehnung kommen kann, um zu verhindern, dass der Anmeldestatus des IdP an die RP durchsickert.

5. Der IdP antwortet mit den von `accounts_endpoint` angeforderten Kontoinformationen. Dies ist ein Array aller Konten, die mit den IdP-Cookies des Benutzers für alle mit dem IdP verbundenen RPs assoziiert sind.

6. {{optional_inline}} Falls in der IdP-Konfigurationsdatei enthalten, macht der Browser eine unberechtigte Anfrage an den [`client_metadata_endpoint`](/de/docs/Web/API/FedCM_API/IDP_integration#the_client_metadata_endpoint) für den Standort der IdP-Nutzungsbedingungen und Datenschutzrichtlinienseiten. Dies ist eine `GET`-Anfrage, die mit `clientId` gesendet wird, das als Parameter in den `get()`-Aufruf übergeben wurde, ohne Cookies.

7. {{optional_inline}} Der IdP antwortet mit den von `client_metadata_endpoint` angeforderten URLs.

8. Der Browser verwendet die durch die vorherigen zwei Anfragen erhaltenen Informationen, um die Benutzeroberfläche zu erstellen, die den Benutzer auffordert, ein Konto auszuwählen, um sich bei der RP anzumelden (falls mehr als eines verfügbar ist). Die Benutzeroberfläche bittet den Benutzer auch um Erlaubnis, sich mit seinem gewählten föderierten IdP-Konto bei der RP anzumelden.

   > [!NOTE]
   > In diesem Stadium, wenn der Benutzer sich zuvor mit einem föderierten RP-Konto in der aktuellen Browserinstanz authentifiziert hat (d.h. ein neues Konto bei der RP erstellt oder sich auf der Website der RP mit einem bestehenden Konto angemeldet hat), kann er möglicherweise **automatisch nachauthentifizieren**, abhängig davon, welcher [`mediation`](/de/docs/Web/API/CredentialsContainer/get#mediation)-Option im `get()`-Aufruf gewählt wurde. Wenn ja, wird der Benutzer automatisch angemeldet, ohne seine Anmeldeinformationen einzugeben, sobald `get()` aufgerufen wird. Weitere Details finden Sie im Abschnitt [Automatische Nachauthentifizierung](#automatische_nachauthentifizierung).

9. Wenn der Benutzer die Erlaubnis erteilt, macht der Browser eine authentifizierte Anfrage an den [`id_assertion_endpoint`](/de/docs/Web/API/FedCM_API/IDP_integration#the_id_assertion_endpoint), um ein Validierungstoken vom IdP für das ausgewählte Konto anzufordern.

   Die Anmeldeinformationen werden in einer HTTP-`POST`-Anfrage mit Cookies und einem Content-Type von `application/x-www-form-urlencoded` gesendet.

   Wenn der Aufruf fehlschlägt, wird eine Fehlerrückmeldung zurückgegeben, wie in [ID assertion error responses](/de/docs/Web/API/FedCM_API/IDP_integration#id_assertion_error_responses) erklärt, und das Promise, das von `get()` zurückgegeben wird, wird mit dem Fehler abgelehnt.

10. Der IdP überprüft, ob die von der RP gesendete Konto-ID mit der ID für das Konto übereinstimmt, das bereits angemeldet ist und dass der `Origin` mit dem Ursprung der RP übereinstimmt, der im Voraus mit dem IdP registriert wurde. Wenn alles gut aussieht, antwortet er mit dem angeforderten Validierungstoken.

    > [!NOTE]
    > Der Ursprung der RP wird in einem völlig separaten Prozess mit dem IdP registriert, wenn die RP sich erstmals in den IdP integriert. Dieser Prozess wird für jeden IdP spezifisch sein.

11. Wenn der Ablauf abgeschlossen ist, wird das `get()`-Promise mit einem [`IdentityCredential`](/de/docs/Web/API/IdentityCredential)-Objekt gelöst, das weitere RP-Funktionalitäten bietet. Am bemerkenswertesten ist, dass dieses Objekt ein Token enthält, das die RP verifizieren kann, dass es vom IdP stammt (unter Verwendung eines Zertifikats) und dass es vertrauenswürdige Informationen über den angemeldeten Benutzer enthält. Sobald die RP das Token validiert hat, kann sie die enthaltenen Informationen verwenden, um den Benutzer anzumelden und eine neue Sitzung zu starten, ihn in ihren Dienst zu registrieren, usw. Das Format und die Struktur des Tokens hängt vom IdP ab und hat nichts mit der FedCM API zu tun (die RP muss den Anweisungen des IdP folgen).

## Automatische Nachauthentifizierung

FedCM ermöglicht es Benutzern, sich automatisch erneut zu authentifizieren, wenn sie versuchen, sich nach ihrer ersten Authentifizierung mit FedCM erneut bei einer RP anzumelden. "Erstauthentifizierung" bezieht sich darauf, wenn der Benutzer ein Konto erstellt oder sich zum ersten Mal auf der Website der RP über das FedCM-Anmeldedialogfeld anmeldet, auf derselben Browserinstanz.

Nach der Erstauthentifizierung kann die automatische Nachauthentifizierung verwendet werden, um sich erneut automatisch auf der RP-Website anzumelden, ohne dass der Benutzer ein "Fortsetzen als..."-Bestätigungsdialogfeld angezeigt bekommt. Wenn der Benutzer kürzlich die Erlaubnis erteilt hat, die föderierte Anmeldung mit einem bestimmten Konto zuzulassen, gibt es keinen Datenschutz- oder Sicherheitsvorteil, sofort eine weitere explizite Benutzerbestätigung zu erzwingen.

Das Verhalten der automatischen Nachauthentifizierung wird durch die [`mediation`](/de/docs/Web/API/CredentialsContainer/get#mediation)-Option im `get()`-Aufruf gesteuert:

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

Die automatische Nachauthentifizierung kann auftreten, wenn `mediation` auf `optional` oder `silent` gesetzt ist.

Mit diesen `mediation`-Optionen tritt automatische Nachauthentifizierung unter folgenden Bedingungen auf:

- FedCM ist nutzbar. Zum Beispiel hat der Benutzer FedCM weder global noch in den RP-Einstellungen deaktiviert.
- Der Benutzer hat sich nur mit einem Konto bei der RP-Website auf diesem Browser über FedCM angemeldet.
- Der Benutzer ist mit diesem Konto beim IdP angemeldet.
- Die automatische Nachauthentifizierung ist nicht innerhalb der letzten 10 Minuten erfolgt. Diese Einschränkung ist vorgesehen, um zu verhindern, dass Benutzer sofort nach der Abmeldung automatisch erneut authentifiziert werden — was eine ziemlich verwirrende Benutzererfahrung darstellen würde.
- Die RP hat nicht [`preventSilentAccess()`](/de/docs/Web/API/CredentialsContainer/preventSilentAccess) nach der letzten Anmeldung aufgerufen. Dies kann von einer RP verwendet werden, um die automatische Nachauthentifizierung ausdrücklich zu deaktivieren, falls gewünscht.

Wenn diese Bedingungen erfüllt sind, beginnt ein Versuch, den Benutzer automatisch erneut zu authentifizieren, sobald `get()` aufgerufen wird. Wenn die automatische Nachauthentifizierung erfolgreich ist, meldet sich der Benutzer erneut auf der RP-Website an, ohne dass ihm ein Bestätigungsdialog angezeigt wird, und verwendet dasselbe IdP-Konto und validierte Token wie zuvor.

Wenn die automatische Nachauthentifizierung fehlschlägt, hängt das Verhalten von dem gewählten `mediation`-Wert ab:

- `optional`: der Benutzer _wird_ erneut das Dialogfeld angezeigt bekommen und um Bestätigung gebeten. Daher tendiert diese Option dazu Sinn zu ergeben auf einer Seite, auf der ein Benutzerfluss nicht in der Mitte des Flusses ist, wie eine RP-Anmeldeseite.
- `silent`: Das `get()`-Promise wird abgelehnt und der Entwickler muss den Benutzer zurück zur Anmeldeseite führen, um den Prozess von Neuem zu starten. Diese Option macht auf Seiten Sinn, wo ein Benutzerfluss in Bearbeitung ist und Sie ihn bis zum Abschluss angemeldet halten müssen, beispielsweise auf den Seiten eines Checkout-Flows auf einer E-Commerce-Website.

> [!NOTE]
> Die [`IdentityCredential.isAutoSelected`](/de/docs/Web/API/IdentityCredential/isAutoSelected)-Eigenschaft gibt einen Hinweis, ob die föderierte Anmeldung unter Verwendung der automatischen Nachauthentifizierung durchgeführt wurde. Dies ist hilfreich, um die API-Performance zu bewerten und die Benutzererfahrung entsprechend zu verbessern. Außerdem, wenn sie nicht verfügbar ist, könnte der Benutzer aufgefordert werden, sich mit expliziter Benutzerinteraktion anzumelden, was ein `get()`-Aufruf mit `mediation: required` ist.

## Siehe auch

- [Federated Credential Management API](https://developers.google.com/privacy-sandbox/cookies/fedcm) auf developers.google.com (2023)
