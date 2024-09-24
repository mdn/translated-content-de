---
title: Föderierte Anmeldung der vertrauenden Partei
slug: Web/API/FedCM_API/RP_sign-in
l10n:
  sourceCommit: b64f587034fbb610fe12ad819b0384f4f4ce1d4f
---

{{DefaultAPISidebar("FedCM API")}}

Dieser Artikel beschreibt, wie eine vertrauende Partei (RP) die [Federated Credential Management (FedCM) API](/de/docs/Web/API/FedCM_API) nutzen kann, um über einen Identitätsanbieter (IdP) eine föderierte Anmeldung durchzuführen.

## Aufruf der Methode get()

RPs können {{domxref("CredentialsContainer.get", "navigator.credentials.get()")}} mit einer `identity`-Option aufrufen, um zu verlangen, dass sich ein Benutzer bei der RP mit einem bestehenden IdP-Konto anmeldet, bei dem er bereits im Browser angemeldet ist. Der IdP identifiziert die RP durch ihre `clientId`, die dem RP in einem separaten, idp-spezifischen Prozess vom IdP zugewiesen wurde. Der IdP identifiziert den spezifischen Benutzer anhand von Anmeldedaten (Cookies), die dem Browser beim Login bereitgestellt werden.

Die Methode gibt ein Promise zurück, das sich erfüllt, wenn der Benutzer vom IdP erfolgreich validiert wurde, und zwar mit einem {{domxref("IdentityCredential")}}-Objekt. Dieses Objekt enthält ein Token mit Benutzeridentitätsinformationen, die mit dem {{glossary("digital certificate", "digitalen Zertifikat")}} des IdP signiert wurden.

Die RP sendet das Token an ihren Server, um das Zertifikat zu validieren. Bei Erfolg kann sie die nun vertrauenswürdigen Identitätsinformationen im Token nutzen, um den Benutzer bei ihrem Dienst anzumelden (eine neue Sitzung zu starten), ihn bei ihrem Dienst anzumelden, falls er ein neuer Benutzer ist, usw.

Wenn der Benutzer nie beim IdP angemeldet war oder abgemeldet ist, wird die `get()`-Methode mit einem Fehler abgelehnt und die RP kann den Benutzer zur IdP-Anmeldeseite weiterleiten, um sich anzumelden oder ein Konto zu erstellen.

> [!NOTE]
> Die genaue Struktur und der Inhalt des Validierungstokens sind für die FedCM API und den Browser undurchsichtig. Der IdP bestimmt die Syntax und Verwendung, und das RP muss den Anweisungen des IdP folgen (siehe z. B. [Verifizieren Sie das Google ID-Token auf Ihrer Serverseite](https://developers.google.com/identity/gsi/web/guides/verify-google-id-token)), um sicherzustellen, dass es richtig verwendet wird.

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

Die `identity.providers`-Eigenschaft nimmt ein Array mit einem einzelnen Objekt an, das den Pfad zu einer IdP-Konfigurationsdatei (`configURL`) und die vom IdP ausgestellte Client-ID (`clientId`) der RP angibt.

> [!NOTE]
> Derzeit erlaubt FedCM nur die Aufruf der API mit einem einzigen IdP, d.h., das `identity.providers`-Array muss die Länge 1 haben. Um Benutzern eine Auswahl des Identitätsanbieters zu bieten, muss das RP `get()` für jeden Anbieter separat aufrufen. Dies könnte sich in Zukunft ändern.

Das obige Beispiel enthält auch ein paar optionale Funktionen:

- `identity.context` spezifiziert den Kontext, in dem der Benutzer sich mit FedCM authentifiziert. Zum Beispiel, ob es eine erstmalige Anmeldung für dieses Konto ist oder eine Anmeldung mit einem bestehenden Konto. Der Browser nutzt diese Informationen, um den Text in seiner FedCM-Benutzeroberfläche besser an den Kontext anzupassen.
- Die `nonce`-Eigenschaft bietet einen zufälligen Nonce-Wert, der sicherstellt, dass die Antwort speziell für diese Anfrage ausgegeben wird, um {{glossary("replay attack", "Wiederholungsangriffe")}} zu verhindern.
- Die `loginHint`-Eigenschaft bietet einen Hinweis auf die Kontooption(en), die der Browser für die Benutzerauthentifizierung präsentieren soll. Dieser Hinweis wird mit den Werten `login_hints` abgeglichen, die der IdP vom [Kontenlisten-Endpunkt](/de/docs/Web/API/FedCM_API/IDP_integration#the_accounts_list_endpoint) bereitstellt.

Der Browser fordert die IdP-Konfigurationsdatei an und führt den unten detaillierten Anmeldevorgang durch. Weitere Informationen zu der Art der Interaktion, die ein Benutzer von der vom Browser bereitgestellten Benutzeroberfläche erwarten kann, finden Sie unter [Melden Sie sich bei der vertrauenden Partei mit dem Identitätsanbieter an](https://developers.google.com/privacy-sandbox/cookies/fedcm#sign-in).

## FedCM-Anmeldeablauf

Am Anmeldeablauf sind drei Parteien beteiligt — die RP-App, der Browser selbst und der IdP. Das folgende Diagramm fasst visuell zusammen, was geschieht.

![ein visuelles Diagramm des im Detail beschriebenen Ablaufs](fedcm-flow.png)

Der Ablauf ist wie folgt:

1. Die RP ruft {{domxref("CredentialsContainer.get", "navigator.credentials.get()")}} auf, um den Anmeldevorgang zu starten.

2. Aus der im `get()`-Aufruf angegebenen `configURL` fordert der Browser zwei Dateien an:

   1. Die Well-known-Datei (`/.well-known/web-identity`), verfügbar unter `/.well-known/web-identity` auf der [eTLD+1](https://web.dev/articles/same-site-same-origin#site) der `configURL`.
   2. Die [IdP-Konfigurationsdatei](/de/docs/Web/API/FedCM_API/IDP_integration#provide_a_config_file_and_endpoints) (`/config.json`), verfügbar an der `configURL`.

   Dies sind beides [`GET`](/de/docs/Web/HTTP/Methods/GET) Anfragen, die keine Cookies haben und keine Umleitungen folgen. Dies verhindert effektiv, dass der IdP erfährt, wer die Anfrage gestellt hat und welches RP sich verbinden möchte.

   Alle Anfragen, die über FedCM vom Browser gesendet werden, enthalten einen `{{httpheader("Sec-Fetch-Dest")}}: webidentity` Header, um {{glossary("CSRF")}}-Angriffe zu verhindern. Alle IdP-Endpunkte müssen bestätigen, dass dieser Header enthalten ist.

3. Der IdP antwortet mit der angeforderten Well-known- und `config.json`-Dateien. Der Browser validiert die Konfigurationsdatei-URL im `get()`-Aufruf gegen die Liste der gültigen Konfigurations-URLs in der Well-known-Datei.

4. Wenn der Browser den [Anmeldestatus des IdPs](/de/docs/Web/API/FedCM_API/IDP_integration#update_login_status_using_the_login_status_api) auf `"eingeloggt"` gesetzt hat, stellt er eine authentifizierte Anfrage (d.h. mit einem Cookie, das den angemeldeten Benutzer identifiziert) an den [`accounts_endpoint`](/de/docs/Web/API/FedCM_API/IDP_integration#the_accounts_list_endpoint) in der IdP-Konfigurationsdatei für die Kontendetails des Benutzers. Dies ist eine `GET`-Anfrage mit Cookies, aber ohne `client_id`-Parameter oder den {{httpheader("Origin")}} Header. Dies verhindert effektiv, dass der IdP erfährt, bei welchem RP sich der Benutzer anmelden möchte. Das Ergebnis ist eine Liste von Konten, die RP-unabhängig ist.

   > [!NOTE]
   > Wenn der IdP-Anmeldestatus `"logged-out"` ist, wird der `get()`-Aufruf mit einem `NetworkError` {{domxref("DOMException")}} abgelehnt und es wird keine Anfrage an den `accounts_endpoint` des IdPs gestellt. In diesem Fall ist es Aufgabe des Entwicklers, den Ablauf zu steuern, indem er beispielsweise den Benutzer auffordert, sich beim entsprechenden IdP anzumelden. Beachten Sie, dass es möglicherweise zu einer Verzögerung bei der Ablehnung kommt, um zu vermeiden, dass der RP der Anmeldestatus des IdPs bekannt wird.

5. Der IdP antwortet mit den vom `accounts_endpoint` angeforderten Kontoinformationen. Dies ist ein Array aller Konten, die mit den IdP-Cookies des Benutzers für alle mit dem IdP verbundenen RPs verknüpft sind.

6. {{optional_inline}} Wenn im IdP-Konfigurationsfile enthalten, stellt der Browser eine unautorisierte Anfrage an den [`client_metadata_endpoint`](/de/docs/Web/API/FedCM_API/IDP_integration#the_client_metadata_endpoint) für den Standort der Nutzungsbedingungen und Datenschutzrichtlinienseiten des IdP. Dies ist eine `GET`-Anfrage, die mit der im `get()`-Aufruf als Parameter übermittelten `clientId`, aber ohne Cookies gesendet wird.

7. {{optional_inline}} Der IdP antwortet mit den von `client_metadata_endpoint` angeforderten URLs.

8. Der Browser verwendet die Informationen, die durch die beiden vorherigen Anfragen erhalten wurden, um die Benutzeroberfläche zu erstellen, die den Benutzer auffordert, ein Konto auszuwählen, um sich bei der RP anzumelden (falls mehr als eines verfügbar ist). Die UI fragt den Benutzer auch um Erlaubnis, sich mit ihrem gewählten föderierten IdP-Konto bei der RP anzumelden.

   > [!NOTE]
   > Zu diesem Zeitpunkt, wenn der Benutzer sich bereits mit einem föderierten RP-Konto im aktuellen Browserfenster authentifiziert hat (d.h., ein neues Konto bei der RP erstellt oder sich mit einem bestehenden Konto auf der RP-Website angemeldet hat), kann er je nach der im `get()`-Aufruf gesetzten [`mediation`](/de/docs/Web/API/CredentialsContainer/get#mediation) -Option möglicherweise ohne erneute Anmeldedatenanfrage automatisch erneut authentifiziert werden. Weitere Details finden Sie im Abschnitt [Automatische Neu-Authentifizierung](#automatische_neu-authentifizierung).

9. Wenn der Benutzer die Erlaubnis erteilt, stellt der Browser eine authentifizierte Anfrage an den [`id_assertion_endpoint`](/de/docs/Web/API/FedCM_API/IDP_integration#the_id_assertion_endpoint), um ein Validierungstoken vom IdP für das ausgewählte Konto anzufordern.

   Die Anmeldeinformationen werden in einer HTTP-['POST'](/de/docs/Web/HTTP/Methods/POST)-Anfrage mit Cookies und einem Content-Type von `application/x-www-form-urlencoded` gesendet.

   Falls der Aufruf fehlschlägt, wird eine Fehlermeldung wie in den [ID Assertion Error Responses](/de/docs/Web/API/FedCM_API/IDP_integration#id_assertion_error_responses) erklärt zurückgegeben und das vom `get()` zurückgegebene Promise lehnt mit dem Fehler ab.

10. Der IdP prüft, ob die vom RP gesendete Konten-ID mit der ID des bereits angemeldeten Kontos übereinstimmt und ob der `Origin` mit dem Ursprung der RP übereinstimmt, der im Voraus beim IdP registriert wurde. Wenn alles in Ordnung ist, antwortet er mit dem angeforderten Validierungstoken.

    > [!NOTE]
    > Der Ursprung der RP wird in einem völlig separaten Prozess beim IdP registriert, wenn das RP zuerst mit dem IdP integriert wird. Dieser Prozess ist für jeden IdP spezifisch.

11. Wenn der Ablauf abgeschlossen ist, löst das `get()`-Promise mit einem {{domxref("IdentityCredential")}}-Objekt aus, das weitere RP-Funktionalitäten bereitstellt. Am bemerkenswertesten ist, dass dieses Objekt ein Token enthält, das die RP mit einem Zertifikat verifizieren kann, dass es vom IdP stammt und dass vertrauenswürdige Informationen über den angemeldeten Benutzer enthält. Sobald die RP das Token validiert, kann sie die enthaltenen Informationen verwenden, um den Benutzer anzumelden und eine neue Sitzung zu starten, ihn bei ihrem Dienst anzumelden usw. Das Format und die Struktur des Tokens hängen vom IdP ab und haben nichts mit der FedCM API zu tun (die RP muss den Anweisungen des IdP folgen).

## Automatische Neu-Authentifizierung

Die automatische Neu-Authentifizierung von FedCM ermöglicht es Benutzern, sich automatisch erneut zu authentifizieren, wenn sie versuchen, sich nach ihrer ersten Anmeldung mit FedCM erneut bei einem RP anzumelden. "Erstmalige Authentifizierung" bezieht sich darauf, wenn der Benutzer ein Konto erstellt oder sich über das FedCM-Anmeldedialogfeld zum ersten Mal auf der RP-Website anmeldet, im selben Browserfenster.

Nach der erstmaligen Authentifizierung kann die automatische Neu-Authentifizierung verwendet werden, um sich erneut automatisch auf der RP-Website anzumelden, ohne dass dem Benutzer eine "Weiter als..." Bestätigungsaufforderung angezeigt wird. Wenn der Benutzer kürzlich die Erlaubnis erteilt hat, eine föderierte Anmeldung mit einem bestimmten Konto zuzulassen, gibt es keinen Datenschutz- oder Sicherheitsvorteil, sofort ein weiteres explizites Benutzerbestätigung zu erzwingen.

Das Verhalten der automatischen Neu-Authentifizierung wird durch die [`mediation`](/de/docs/Web/API/CredentialsContainer/get#mediation)-Option im `get()`-Aufruf gesteuert:

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
    mediation: "optional", // dies ist die Standardeinstellung
  });

  // istAutoSelected ist wahr, wenn eine automatische Neu-Authentifizierung stattgefunden hat.
  const isAutoSelected = identityCredential.isAutoSelected;
}
```

Die automatische Neu-Authentifizierung kann stattfinden, wenn `mediation` auf `optional` oder `silent` gesetzt ist.

Mit diesen `mediation`-Optionen tritt die automatische Neu-Authentifizierung unter den folgenden Bedingungen auf:

- FedCM steht zur Verfügung. Zum Beispiel hat der Benutzer FedCM weder global noch in den Einstellungen der RP deaktiviert.
- Der Benutzer hat nur ein Konto verwendet, um sich über FedCM bei der RP-Website anzumelden.
- Der Benutzer ist mit diesem Konto beim IdP angemeldet.
- Die automatische Neu-Authentifizierung ist nicht innerhalb der letzten 10 Minuten aufgetreten. Diese Einschränkung dient dazu, zu verhindern, dass Benutzer sofort nach dem Abmelden automatisch erneut authentifiziert werden, was zu einem ziemlich verwirrenden Benutzererlebnis führen würde.
- Das RP hat nicht {{domxref("CredentialsContainer.preventSilentAccess", "preventSilentAccess()")}} nach der vorherigen Anmeldung aufgerufen. Dies kann von einem RP verwendet werden, um die automatische Neu-Authentifizierung ausdrücklich zu deaktivieren, wenn gewünscht.

Wenn diese Bedingungen erfüllt sind, wird ein Versuch, den Benutzer automatisch erneut zu authentifizieren, gestartet, sobald die `get()`-Methode aufgerufen wird. Wenn die automatische Neu-Authentifizierung erfolgreich ist, wird der Benutzer erneut auf der RP-Website angemeldet, ohne dass ihm eine Bestätigungsaufforderung angezeigt wird, unter Verwendung desselben IdP-Kontos und validierten Tokens wie zuvor.

Wenn die automatische Neu-Authentifizierung fehlschlägt, hängt das Verhalten von dem gewählten `mediation`-Wert ab:

- `optional`: dem Benutzer _wird_ das Dialogfeld erneut angezeigt und er muss wieder eine Bestätigung geben. Daher macht diese Option auf einer Seite Sinn, auf der die Benutzerreise nicht in vollem Gange ist, wie eine RP-Anmeldeseite.
- `silent`: Das `get()`-Promise wird abgelehnt und der Entwickler muss den Benutzer anleiten, zurück zur Anmeldeseite zu gehen, um den Prozess erneut zu starten. Diese Option macht Sinn auf Seiten, wo eine Benutzerreise in vollem Gange ist und Sie sie bis zum Abschluss angemeldet halten müssen, zum Beispiel die Seiten eines Checkout-Flows auf einer E-Commerce-Website.

> [!NOTE]
> Die {{domxref("IdentityCredential.isAutoSelected")}}-Eigenschaft bietet einen Hinweis darauf, ob die föderierte Anmeldung durch automatische Neu-Authentifizierung durchgeführt wurde. Dies ist hilfreich, um die API-Leistung zu bewerten und die Benutzererfahrung entsprechend zu verbessern. Wenn diese nicht verfügbar ist, wird der Benutzer möglicherweise aufgefordert, sich mit expliziter Benutzervermittlung anzumelden, was ein `get()`-Aufruf mit `mediation: required` ist.

## Siehe auch

- [Federated Credential Management API](https://developers.google.com/privacy-sandbox/cookies/fedcm) auf developers.google.com (2023)
