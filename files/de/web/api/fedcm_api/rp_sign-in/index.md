---
title: Relying Party Federated Sign-In
slug: Web/API/FedCM_API/RP_sign-in
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{DefaultAPISidebar("FedCM API")}}

Dieser Artikel beschreibt den Prozess, durch den eine relying party (RP) die [Federated Credential Management (FedCM) API](/de/docs/Web/API/FedCM_API) verwenden kann, um einen föderierten Login über einen Identity Provider (IdP) durchzuführen.

## Aufruf der get()-Methode

RPs können [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) mit einer `identity`-Option aufrufen, um zu beantragen, dass sich ein Benutzer mit einem bestehenden IdP-Konto, bei dem er bereits im Browser angemeldet ist, beim RP anmeldet. Der IdP identifiziert das RP über seine `clientId`, die dem RP vom IdP in einem separaten, IdP-spezifischen Verfahren ausgestellt wurde. Der IdP identifiziert den spezifischen Benutzer anhand von Anmeldeinformationen (Cookies), die dem Browser bei der Anmeldung bereitgestellt wurden.

Die Methode gibt ein Promise zurück, das mit einem [`IdentityCredential`](/de/docs/Web/API/IdentityCredential)-Objekt erfüllt wird, wenn die Benutzeridentität vom IdP erfolgreich validiert wird. Dieses Objekt enthält ein Token, das Benutzeridentitätsinformationen enthält und mit dem {{Glossary("digital_certificate", "digitalen Zertifikat")}} des IdP signiert wurde.

Das RP sendet das Token zu seinem Server, um das Zertifikat zu validieren. Bei Erfolg kann es die (nun vertrauenswürdigen) Identitätsinformationen im Token nutzen, um den Benutzer in ihren Service einzuloggen (eine neue Sitzung zu starten), ihn in ihren Service zu registrieren, wenn er ein neuer Benutzer ist, usw.

Wenn der Benutzer sich nie beim IdP angemeldet hat oder abgemeldet ist, lehnt die `get()`-Methode mit einem Fehler ab und das RP kann den Benutzer zur Login-Seite des IdP weiterleiten, um sich anzumelden oder ein Konto zu erstellen.

> [!NOTE]
> Die genaue Struktur und der Inhalt des Validierungstokens sind der FedCM API und dem Browser nicht zugänglich. Der IdP entscheidet über die Syntax und Verwendung und das RP muss die vom IdP bereitgestellten Anweisungen befolgen, um sicherzustellen, dass es richtig verwendet wird (siehe [Verify the Google ID token on your server side](https://developers.google.com/identity/gsi/web/guides/verify-google-id-token) für ein Beispiel).

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

Die `identity.providers`-Eigenschaft nimmt ein Array auf, das ein einzelnes Objekt enthält, das den Pfad zu einer IdP-Konfigurationsdatei (`configURL`) und die vom IdP ausgestellte `clientId` des RP spezifiziert.

> [!NOTE]
> Derzeit erlaubt FedCM nur, dass die API mit einem einzelnen IdP aufgerufen wird, d.h. das `identity.providers`-Array muss die Länge 1 haben. Um Benutzern die Wahl eines Identity Providers zu ermöglichen, muss das RP `get()` separat für jeden aufrufen. Dies könnte sich in Zukunft ändern.

Das obige Beispiel enthält auch einige optionale Funktionen:

- `identity.context` spezifiziert den Kontext, in dem sich der Benutzer mit FedCM authentifiziert. Zum Beispiel, ob es sich um eine erstmalige Registrierung für dieses Konto handelt oder um eine Anmeldung mit einem bestehenden Konto. Der Browser verwendet diese Informationen, um den Text in seiner FedCM-Benutzeroberfläche an den Kontext anzupassen.
- Die `nonce`-Eigenschaft gibt einen zufälligen Nonce-Wert an, der sicherstellt, dass die Antwort speziell für diese Anfrage erstellt wird, um {{Glossary("replay_attack", "Wiederholungsangriffe")}} zu verhindern.
- Die `loginHint`-Eigenschaft gibt einen Hinweis auf die Kontenoption(en), die der Browser dem Benutzer für die Anmeldung präsentieren sollte. Dieser Hinweis wird mit den `login_hints`-Werten abgeglichen, die der IdP vom [Kontolisten-Endpunkt](/de/docs/Web/API/FedCM_API/IDP_integration#the_accounts_list_endpoint) bereitstellt.

Der Browser fordert die IdP-Konfigurationsdatei an und führt den unten beschriebenen Anmeldeprozess durch. Weitere Informationen über die Art der Interaktion, die ein Benutzer von der browsergestützten Benutzeroberfläche erwarten könnte, finden Sie unter [Sign in to the relying party with the identity provider](https://developers.google.com/privacy-sandbox/cookies/fedcm#sign-in).

## FedCM Anmeldeprozess

Es gibt drei Parteien, die im Anmeldeprozess involviert sind — die RP-App, der Browser selbst und der IdP. Das folgende Diagramm fasst das visuell zusammen.

![eine visuelle Darstellung des im Detail unten beschriebenen Flows](fedcm-flow.png)

Der Ablauf ist wie folgt:

1. Das RP ruft [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) auf, um den Anmeldeprozess zu starten.

2. Aus der `configURL`, die im `get()`-Aufruf bereitgestellt wird, fordert der Browser zwei Dateien an:

   1. Die allgemein bekannte Datei (`/.well-known/web-identity`), verfügbar unter `/.well-known/web-identity` am [eTLD+1](https://web.dev/articles/same-site-same-origin#site) der `configURL`.
   2. Die [IdP-Konfigurationsdatei](/de/docs/Web/API/FedCM_API/IDP_integration#provide_a_config_file_and_endpoints) (`/config.json`), verfügbar unter der `configURL`.

   Dies sind beides [`GET`](/de/docs/Web/HTTP/Reference/Methods/GET)-Anfragen, die keine Cookies enthalten und keine Redirects folgen. Dies verhindert effektiv, dass der IdP erfährt, wer die Anfrage gestellt hat und welches RP sich zu verbinden versucht.

   Alle vom Browser über FedCM gesendeten Anfragen enthalten einen `{{httpheader("Sec-Fetch-Dest")}}: webidentity`-Header, um {{Glossary("CSRF", "CSRF")}}-Angriffe zu verhindern. Alle IdP-Endpunkte müssen bestätigen, dass dieser Header enthalten ist.

3. Der IdP antwortet mit der angeforderten allgemein bekannten Datei und den `config.json`-Dateien. Der Browser validiert die Konfigurationsdatei-URL in der `get()`-Anfrage gegen die Liste der gültigen Konfigurations-URLs in der allgemein bekannten Datei.

4. Wenn der Browser den [Anmeldestatus des IdP](/de/docs/Web/API/FedCM_API/IDP_integration#update_login_status_using_the_login_status_api) auf `"logged-in"` gesetzt hat, erfolgt eine anspruchsvolle Anfrage (d.h. mit einem Cookie, das den angemeldeten Benutzer identifiziert) an den [`accounts_endpoint`](/de/docs/Web/API/FedCM_API/IDP_integration#the_accounts_list_endpoint) in der IdP-Konfigurationsdatei, um die Kontodetails des Benutzers anzufordern. Dies ist eine `GET`-Anfrage mit Cookies, aber ohne `client_id`-Parameter oder den {{httpheader("Origin")}}-Header. Dies verhindert effektiv, dass der IdP erfährt, bei welchem RP der Benutzer sich anzumelden versucht. Dadurch wird die zurückgegebene Kontenliste RP-agnostisch.

   > [!NOTE]
   > Wenn der Anmeldestatus des IdP `"logged-out"` ist, lehnt der `get()`-Aufruf mit einem `NetworkError`-[`DOMException`](/de/docs/Web/API/DOMException) ab und es wird keine Anfrage an den `accounts_endpoint` des IdP gesendet. In diesem Fall liegt es am Entwickler, den Prozess zu steuern, z.B. indem der Benutzer dazu aufgefordert wird, sich bei einem geeigneten IdP anzumelden. Beachten Sie, dass es zu einer Verzögerung bei der Ablehnung kommen kann, um zu verhindern, dass der Anmeldestatus des IdP an das RP weitergegeben wird.

5. Der IdP antwortet mit den von `accounts_endpoint` angeforderten Kontoinformationen. Dies ist ein Array aller Konten, die mit den IdP-Cookies des Benutzers für alle mit dem IdP verbundenen RPs verbunden sind.

6. {{optional_inline}} Falls in der IdP-Konfigurationsdatei enthalten, macht der Browser eine nicht-anstrengende Anfrage an den [`client_metadata_endpoint`](/de/docs/Web/API/FedCM_API/IDP_integration#the_client_metadata_endpoint) für den Standort der RP-Nutzungsbedingungen und Datenschutzrichtlinien. Dies ist eine `GET`-Anfrage, die mit dem `clientId` gesendet wird, der als Parameter in den `get()`-Aufruf übergeben wird, ohne Cookies.

7. {{optional_inline}} Der IdP antwortet mit den vom `client_metadata_endpoint` angeforderten URLs.

8. Der Browser verwendet die Informationen aus den vorherigen zwei Anfragen, um die Benutzeroberfläche zu erstellen, die den Benutzer darum bittet, ein Konto auszuwählen, um sich beim RP anzumelden (falls mehrere verfügbar sind). Die Benutzeroberfläche fragt den Benutzer auch um Erlaubnis, sich mit ihrem gewählten föderierten IdP-Konto beim RP anzumelden.

   > [!NOTE]
   > In diesem Stadium kann der Benutzer, falls er zuvor im aktuellen Browserfenster mit einem föderierten RP-Konto authentifiziert wurde (d.h. ein neues Konto beim RP erstellt hat oder sich auf der RP-Website mit einem bestehenden Konto angemeldet hat), automatisch **wieder authentifizieren**, abhängig davon, auf welche Weise die [`mediation`](/de/docs/Web/API/CredentialsContainer/get#mediation)-Option im `get()`-Aufruf eingestellt ist. Falls ja, wird der Benutzer automatisch ohne Eingabe seiner Anmeldedaten angemeldet, sobald `get()` aufgerufen wird. Weitere Details finden Sie im Abschnitt [Automatische Wiederanmeldung](#automatische_wiederanmeldung).

9. Wenn der Benutzer die Erlaubnis erteilt, macht der Browser eine anspruchsvolle Anfrage an den [`id_assertion_endpoint`](/de/docs/Web/API/FedCM_API/IDP_integration#the_id_assertion_endpoint), um ein Validierungstoken vom IdP für das ausgewählte Konto anzufordern.

   Die Anmeldeinformationen werden in einer HTTP-[`POST`](/de/docs/Web/HTTP/Reference/Methods/POST)-Anfrage mit Cookies und einem Inhaltstyp von `application/x-www-form-urlencoded` gesendet.

   Wenn der Aufruf fehlschlägt, wird eine Fehlernutzlast nach den in [ID Assertion Error Responses](/de/docs/Web/API/FedCM_API/IDP_integration#id_assertion_error_responses) erläuterten Erklärungen zurückgegeben und das Promise, das von `get()` zurückgegeben wird, wird mit dem Fehler abgelehnt.

10. Der IdP überprüft, ob die vom RP gesendete Konto-ID mit der ID für das bereits angemeldete Konto übereinstimmt und ob die `Origin` mit dem Ursprung des RP übereinstimmt, der im Voraus beim IdP registriert wurde. Wenn alles gut aussieht, antwortet er mit dem angeforderten Validierungstoken.

    > [!NOTE]
    > Der Ursprung des RP wird in einem völlig separaten Prozess registriert, wenn das RP das erste Mal mit dem IdP integriert wird. Dieser Prozess wird für jeden IdP spezifisch sein.

11. Wenn der Prozess abgeschlossen ist, löst sich das `get()`-Promise mit einem [`IdentityCredential`](/de/docs/Web/API/IdentityCredential)-Objekt auf, das weitere RP-Funktionalitäten bietet. Besonders bemerkenswert ist, dass dieses Objekt ein Token enthält, das das RP verifizieren kann, dass es vom IdP stammt (mit einem Zertifikat) und dass es vertrauenswürdige Informationen über den angemeldeten Benutzer enthält. Sobald das RP das Token validiert hat, kann es die enthaltenen Informationen verwenden, um den Benutzer anzumelden und eine neue Sitzung zu starten, ihn in ihren Service zu registrieren usw. Das Format und die Struktur des Tokens hängen vom IdP ab und haben nichts mit der FedCM API zu tun (das RP muss die Anweisungen des IdP befolgen).

## Automatische Wiederanmeldung

Die FedCM automatische Wiederanmeldung ermöglicht es Benutzern, sich automatisch erneut zu authentifizieren, wenn sie versuchen, sich nach ihrer ersten Authentifizierung mit FedCM erneut bei einem RP anzumelden. "Erstauthentifizierung" bezieht sich auf den Moment, wenn der Benutzer ein Konto erstellt oder sich zum ersten Mal über das FedCM-Anmeldedialog auf der RP-Website anmeldet, im selben Browserfenster.

Nach der Erstauthentifizierung kann die automatische Wiederanmeldung genutzt werden, um sich ohne "Weiter als..."-Bestätigungsaufforderung erneut bei der RP-Website anzumelden. Wenn der Benutzer kürzlich die Erlaubnis erteilt hat, eine Föderierung via FedCM durchzuführen, gibt es keine Datenschutz- oder Sicherheitsvorteile, sofort eine weitere explizite Benutzerbestätigung zu erzwingen.

Das Verhalten der automatischen Wiederanmeldung wird durch die [`mediation`](/de/docs/Web/API/CredentialsContainer/get#mediation)-Option im `get()`-Aufruf gesteuert:

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

Die automatische Wiederanmeldung kann stattfinden, wenn `mediation` auf `optional` oder `silent` gesetzt ist.

Mit diesen `mediation`-Optionen wird die automatische Wiederanmeldung unter folgenden Bedingungen ausgeführt:

- FedCM kann verwendet werden. Zum Beispiel, der Benutzer hat FedCM nicht global oder in den Einstellungen des RP deaktiviert.
- Der Benutzer hat nur ein Konto verwendet, um sich auf diesem Browser über FedCM bei der RP-Website anzumelden.
- Der Benutzer ist mit diesem Konto beim IdP angemeldet.
- Die automatische Wiederanmeldung ist nicht innerhalb der letzten 10 Minuten aufgetreten. Diese Einschränkung wurde eingeführt, um zu verhindern, dass Benutzer sofort nach dem Abmelden automatisch wieder angemeldet werden — was eine ziemlich verwirrende Benutzererfahrung wäre.
- Das RP hat nicht [`preventSilentAccess()`](/de/docs/Web/API/CredentialsContainer/preventSilentAccess) nach der vorherigen Anmeldung aufgerufen. Dies kann von einem RP verwendet werden, um die automatische Wiederanmeldung bei Bedarf explizit zu deaktivieren.

Wenn diese Bedingungen erfüllt sind, beginnt der Versuch, den Benutzer automatisch erneut zu authentifizieren, sobald `get()` aufgerufen wird. Wenn die automatische Wiederanmeldung erfolgreich ist, wird der Benutzer erneut bei der RP-Site angemeldet, ohne dass eine Bestätigungsaufforderung angezeigt wird, und zwar mit demselben IdP-Konto und validiertem Token wie zuvor.

Wenn die automatische Wiederanmeldung fehlschlägt, hängt das Verhalten von dem gewählten `mediation`-Wert ab:

- `optional`: dem Benutzer _wird_ das Dialogfeld erneut angezeigt und er wird um Bestätigung gebeten. Daher macht es Sinn, diese Option auf einer Seite zu verwenden, bei der ein User Journey nicht mitten im Ablauf ist, z.B. einer RP-Anmeldeseite.
- `silent`: Das `get()`-Promise wird abgelehnt und der Entwickler muss den Benutzer zurück zur Anmeldeseite führen, um den Prozess erneut zu starten. Diese Option macht auf Seiten Sinn, bei denen ein User Journey im Gange ist und der Benutzer bis zur Fertigstellung angemeldet bleiben soll, z.B. die Seiten eines Checkout-Ablaufs auf einer E-Commerce-Website.

> [!NOTE]
> Die [`IdentityCredential.isAutoSelected`](/de/docs/Web/API/IdentityCredential/isAutoSelected)-Eigenschaft gibt an, ob die föderierte Anmeldung mithilfe der automatischen Wiederanmeldung durchgeführt wurde. Dies ist hilfreich, um die Leistung der API zu bewerten und die UX entsprechend zu verbessern. Ist sie nicht verfügbar, kann der Benutzer aufgefordert werden, sich mit expliziter Benutzermediation anzumelden, was ein `get()`-Aufruf mit `mediation: required` ist.

## Siehe auch

- [Federated Credential Management API](https://developers.google.com/privacy-sandbox/cookies/fedcm) auf developers.google.com (2023)
