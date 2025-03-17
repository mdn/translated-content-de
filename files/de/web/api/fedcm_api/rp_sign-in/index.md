---
title: Federierter Login eines vertrauenden Dienstes
slug: Web/API/FedCM_API/RP_sign-in
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{DefaultAPISidebar("FedCM API")}}

Dieser Artikel beschreibt den Prozess, wie ein vertrauender Dienst (Relying Party, RP) die [Federated Credential Management (FedCM) API](/de/docs/Web/API/FedCM_API) nutzen kann, um über einen Identitätsanbieter (IdP) einen federierten Login auszuführen.

## Aufrufen der `get()`-Methode

RPs können [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) mit einer `identity`-Option aufrufen, um zu verlangen, dass ein Benutzer sich mit einem vorhandenen IdP-Konto, mit dem er bereits im Browser angemeldet ist, beim RP anmeldet. Der IdP identifiziert das RP durch seine `clientId`, die dem RP in einem separaten, IdP-spezifischen Prozess zugeteilt wurde. Der IdP identifiziert den spezifischen Benutzer mithilfe von Anmeldeinformationen (Cookies), die dem Browser beim Anmelden zur Verfügung gestellt wurden.

Die Methode gibt ein Versprechen zurück, das mit einem [`IdentityCredential`](/de/docs/Web/API/IdentityCredential)-Objekt erfüllt wird, wenn die Benutzeridentität erfolgreich vom IdP validiert wurde. Dieses Objekt enthält ein Token, das Benutzeridentitätsinformationen enthält, die mit dem {{Glossary("digital_certificate", "digitalen Zertifikat")}} des IdPs signiert sind.

Das RP sendet das Token an seinen Server, um das Zertifikat zu validieren, und kann bei Erfolg die (nun vertrauenswürdigen) Identitätsinformationen im Token verwenden, um den Benutzer bei seinem Dienst anzumelden (eine neue Sitzung beginnen), ihn für seinen Dienst zu registrieren, wenn es ein neuer Benutzer ist, etc.

Falls der Benutzer sich noch nie beim IdP angemeldet hat oder ausgeloggt ist, lehnt die `get()`-Methode mit einem Fehler ab und das RP kann den Benutzer zur Anmeldeseite des IdPs leiten, um sich anzumelden oder ein Konto zu erstellen.

> [!NOTE]
> Die genaue Struktur und der Inhalt des Validierungstokens sind für die FedCM API und den Browser undurchsichtig. Der IdP entscheidet über die Syntax und Nutzung davon, und das RP muss den Anleitungen des IdPs folgen (siehe [Überprüfen des Google ID-Tokens auf Ihrer Serverseite](https://developers.google.com/identity/gsi/web/guides/verify-google-id-token), zum Beispiel), um sicherzustellen, dass sie es korrekt verwenden.

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

Die Eigenschaft `identity.providers` nimmt ein Array an, das ein einzelnes Objekt enthält, das den Pfad zu einer IdP-Konfigurationsdatei (`configURL`) und die dem RP vom IdP zugewiesene Clientkennung (`clientId`) spezifiziert.

> [!NOTE]
> Derzeit erlaubt FedCM nur, dass die API mit einem einzigen IdP aufgerufen wird, d.h. das `identity.providers`-Array muss eine Länge von 1 haben. Um Benutzern eine Auswahl an Identitätsanbietern zu bieten, muss das RP `get()` für jeden separat aufrufen. Dies kann sich in Zukunft ändern.

Das obige Beispiel enthält auch einige optionale Funktionen:

- `identity.context` spezifiziert den Kontext, in dem sich der Benutzer mit FedCM authentifiziert. Zum Beispiel, ob es sich um eine erstmalige Anmeldung für dieses Konto handelt oder um eine Anmeldung mit einem bestehenden Konto. Der Browser verwendet diese Informationen, um den Text in seiner FedCM-Benutzeroberfläche besser an den Kontext anzupassen.
- Die `nonce`-Eigenschaft stellt einen zufälligen Nonce-Wert bereit, der sicherstellt, dass die Antwort für diese spezielle Anfrage erteilt wird und {{Glossary("replay_attack", "Wiedergabeangriffe")}} verhindert.
- Die `loginHint`-Eigenschaft gibt einen Hinweis über die Kontooption(en), die der Browser für die Anmeldung des Benutzers präsentieren soll. Dieser Hinweis wird mit den `login_hints`-Werten abgeglichen, die der IdP vom [Kontenlisten-Endpunkt](/de/docs/Web/API/FedCM_API/IDP_integration#the_accounts_list_endpoint) bereitstellt.

Der Browser fordert die IdP-Konfigurationsdatei an und führt den unten detaillierten Anmeldefluss durch. Für weitere Informationen über die Art der Interaktion, die ein Benutzer von der browserseitig bereitgestellten Benutzeroberfläche erwarten könnte, siehe [Anmelden beim vertrauenden Dienst mit dem Identitätsanbieter](https://developers.google.com/privacy-sandbox/cookies/fedcm#sign-in).

## FedCM Anmeldefluss

Am Anmeldefluss sind drei Parteien beteiligt — die RP-Anwendung, der Browser selbst und der IdP. Das folgende Diagramm fasst visuell zusammen, was passiert.

![eine visuelle Darstellung des im Detail beschriebenen Ablaufs unten](fedcm-flow.png)

Der Fluss ist wie folgt:

1. Das RP ruft [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) auf, um den Anmeldefluss zu starten.

2. Vom `configURL`, das im `get()`-Aufruf bereitgestellt wird, fordert der Browser zwei Dateien an:

   1. Die bekannte Datei (`/.well-known/web-identity`), die unter `/.well-known/web-identity` beim [eTLD+1](https://web.dev/articles/same-site-same-origin#site) des `configURL` verfügbar ist.
   2. Die [IdP-Konfigurationsdatei](/de/docs/Web/API/FedCM_API/IDP_integration#provide_a_config_file_and_endpoints) (`/config.json`), die am `configURL` verfügbar ist.

   Dies sind beide [`GET`](/de/docs/Web/HTTP/Reference/Methods/GET)-Anfragen, die keine Cookies haben und keine Weiterleitungen befolgen. Dies verhindert effektiv, dass der IdP erfährt, wer die Anfrage gestellt hat und welches RP versucht, sich zu verbinden.

   Alle Anfragen, die der Browser über FedCM sendet, enthalten einen `{{httpheader("Sec-Fetch-Dest")}}: webidentity` Header, um {{Glossary("CSRF", "CSRF")}}-Angriffe zu verhindern. Alle IdP-Endpunkte müssen bestätigen, dass dieser Header enthalten ist.

3. Der IdP antwortet mit der angeforderten bekannten Datei und den `config.json`-Dateien. Der Browser validiert die URL der Konfigurationsdatei im `get()`-Anruf gegen die Liste der gültigen Konfigurations-URLs in der bekannten Datei.

4. Wenn der Browser den [Anmeldestatus des IdPs](/de/docs/Web/API/FedCM_API/IDP_integration#update_login_status_using_the_login_status_api) auf `"logged-in"` gesetzt hat, macht er eine authentifizierte Anfrage (d.h. mit einem Cookie, das den angemeldeten Benutzer identifiziert) zum [`accounts_endpoint`](/de/docs/Web/API/FedCM_API/IDP_integration#the_accounts_list_endpoint) innerhalb der IdP-Konfigurationsdatei für die Kontodetails des Benutzers. Dies ist eine `GET`-Anfrage mit Cookies, aber ohne `client_id`-Parameter oder den {{httpheader("Origin")}} Header. Dies verhindert effektiv, dass der IdP erfährt, bei welchem RP sich der Benutzer anzumelden versucht. Als Ergebnis ist die Liste der zurückgegebenen Konten RP-unabhängig.

   > [!NOTE]
   > Wenn der Anmeldestatus des IdPs `"logged-out"` ist, lehnt der `get()`-Aufruf mit einem `NetworkError` [`DOMException`](/de/docs/Web/API/DOMException) ab und macht keine Anfrage an den `accounts_endpoint` des IdPs. In diesem Fall ist es Aufgabe des Entwicklers, den Fluss zu handhaben, zum Beispiel indem er den Benutzer auffordert, sich bei einem geeigneten IdP anzumelden. Beachten Sie, dass es zu einer Verzögerung bei der Ablehnung kommen kann, um zu vermeiden, dass der Anmeldestatus des IdPs an das RP weitergegeben wird.

5. Der IdP antwortet mit den Kontoinformationen, die vom `accounts_endpoint` angefordert wurden. Dies ist ein Array aller Konten, die mit den IdP-Cookies des Benutzers für alle RPs verbunden sind, die mit dem IdP verbunden sind.

6. {{optional_inline}} Wenn in der IdP-Konfigurationsdatei enthalten, stellt der Browser eine nicht authentifizierte Anfrage an den [`client_metadata_endpoint`](/de/docs/Web/API/FedCM_API/IDP_integration#the_client_metadata_endpoint) für den Ort der RP-Nutzungsbedingungen und Datenschutzrichtlinien-Seiten. Dies ist eine `GET`-Anfrage, die mit dem in den `get()`-Aufruf als Parameter übergebenen `clientId` gesendet wird, ohne Cookies.

7. {{optional_inline}} Der IdP antwortet mit den URLs, die vom `client_metadata_endpoint` angefordert wurden.

8. Der Browser verwendet die durch die vorherigen beiden Anfragen erhaltenen Informationen, um die Benutzeroberfläche zu erstellen, die den Benutzer auffordert, ein Konto auszuwählen, mit dem er sich beim RP anmelden möchte (im Fall, dass mehr als eines verfügbar ist). Die Benutzeroberfläche fragt den Benutzer auch um Erlaubnis, sich mit seinem ausgewählten föderierten IdP-Konto beim RP anzumelden.

   > [!NOTE]
   > An diesem Punkt, wenn sich der Benutzer bereits in der aktuellen Browser-Sitzung mit einem föderierten RP-Konto authentifiziert hat (d.h. ein neues Konto beim RP erstellt oder sich mit einem bestehenden Konto auf der RP-Website angemeldet hat), könnte es möglich sein, dass er sich **automatisch erneut authentifiziert**, abhängig davon, was die Option [`mediation`](/de/docs/Web/API/CredentialsContainer/get#mediation) im `get()`-Aufruf eingestellt ist. In diesem Fall wird der Benutzer automatisch angemeldet, ohne seine Anmeldedaten einzugeben, sobald `get()` aufgerufen wird. Siehe den Abschnitt [Automatische erneute Authentifizierung](#automatische_erneute_authentifizierung) für weitere Details.

9. Falls der Benutzer die Erlaubnis erteilt, stellt der Browser eine authentifizierte Anfrage an den [`id_assertion_endpoint`](/de/docs/Web/API/FedCM_API/IDP_integration#the_id_assertion_endpoint), um ein Validierungstoken vom IdP für das ausgewählte Konto anzufordern.

   Die Anmeldedaten werden in einer HTTP-`POST`-Anfrage mit Cookies und einem Inhaltstyp von `application/x-www-form-urlencoded` gesendet.

   Wenn der Aufruf fehlschlägt, wird eine Fehlermitteilung, wie in [ID-Assertions-Fehlerantworten](/de/docs/Web/API/FedCM_API/IDP_integration#id_assertion_error_responses) erklärt, zurückgegeben, und das von `get()` zurückgegebene Versprechen wird mit dem Fehler ablehnen.

10. Der IdP überprüft, ob die vom RP gesendete Konto-ID mit der ID für das Konto übereinstimmt, das bereits angemeldet ist, und dass die `Origin` mit dem Ursprung des RP übereinstimmt, der im Voraus beim IdP registriert wurde. Wenn alles gut aussieht, antwortet er mit dem angeforderten Validierungstoken.

    > [!NOTE]
    > Der Ursprung des RP wird beim IdP in einem völlig separaten Prozess registriert, wenn das RP zuerst mit dem IdP integriert wird. Dieser Prozess wird spezifisch für jeden IdP sein.

11. Wenn der Fluss abgeschlossen ist, löst das `get()`-Versprechen sich mit einem [`IdentityCredential`](/de/docs/Web/API/IdentityCredential)-Objekt auf, das weitere RP-Funktionalitäten bereitstellt. Am bemerkenswertesten ist, dass dieses Objekt ein Token enthält, das das RP als vom IdP kommend verifizieren kann (unter Verwendung eines Zertifikats) und das vertrauenswürdige Informationen über den angemeldeten Benutzer enthält. Sobald das RP das Token validiert hat, können sie die enthaltenen Informationen verwenden, um den Benutzer anzumelden und eine neue Sitzung zu starten, ihn für ihren Dienst zu registrieren, etc. Das Format und die Struktur des Tokens hängt vom IdP ab und hat nichts mit der FedCM-API zu tun (das RP muss den Anweisungen des IdP folgen).

## Automatische erneute Authentifizierung

Die automatische erneute Authentifizierung von FedCM ermöglicht es Nutzern, sich automatisch erneut zu authentifizieren, wenn sie versuchen, sich erneut bei einem RP anzumelden, nachdem sie sich erstmals über FedCM authentifiziert haben. "Erstmalige Authentifizierung" bezieht sich darauf, wenn der Benutzer ein Konto erstellt oder sich über das FedCM-Anmeldedialogfeld zum ersten Mal auf der RP-Website anmeldet, auf derselben Browsersitzung.

Nach der erstmaligen Authentifizierung kann die automatische erneute Authentifizierung verwendet werden, um sich wieder automatisch bei der RP-Website anzumelden, ohne dass dem Benutzer ein Bestätigungsdialog mit "Weiter als..." angezeigt wird. Wenn der Benutzer kürzlich die Erlaubnis erteilt hat, eine federierte Anmeldung mit einem bestimmten Konto durchzuführen, gibt es keinen Datenschutz- oder Sicherheitsvorteil, sofort eine weitere ausdrückliche Benutzerbestätigung zu erzwingen.

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

Die automatische erneute Authentifizierung kann erfolgen, wenn `mediation` auf `optional` oder `silent` gesetzt ist.

Bei diesen `mediation`-Optionen tritt die automatische erneute Authentifizierung unter den folgenden Bedingungen auf:

- FedCM ist verwendbar. Beispielsweise hat der Benutzer FedCM nicht global oder in den RP-Einstellungen deaktiviert.
- Der Benutzer hat nur ein Konto verwendet, um sich auf diesem Browser über FedCM bei der RP-Website anzumelden.
- Der Benutzer ist mit diesem Konto beim IdP angemeldet.
- Die automatische erneute Authentifizierung ist nicht innerhalb der letzten 10 Minuten erfolgt. Diese Einschränkung wurde eingeführt, um zu verhindern, dass Benutzer sofort nach dem Abmelden automatisch erneut authentifiziert werden — was zu einem ziemlich verwirrenden Benutzererlebnis führen würde.
- Das RP hat [`preventSilentAccess()`](/de/docs/Web/API/CredentialsContainer/preventSilentAccess) nach der letzten Anmeldung nicht aufgerufen. Dies kann von einem RP verwendet werden, um die automatische erneute Authentifizierung bei Bedarf explizit zu deaktivieren.

Wenn diese Bedingungen erfüllt sind, startet ein Versuch, den Benutzer automatisch erneut zu authentifizieren, sobald `get()` aufgerufen wird. Wenn die automatische erneute Authentifizierung erfolgreich ist, meldet sich der Benutzer wieder auf der RP-Website an, ohne dass ihm ein Bestätigungsdialog angezeigt wird, unter Verwendung desselben IdP-Kontos und des validierten Tokens wie zuvor.

Wenn die automatische erneute Authentifizierung fehlschlägt, hängt das Verhalten von dem gewählten `mediation`-Wert ab:

- `optional`: Dem Benutzer _wird_ der Dialog erneut angezeigt und um Bestätigung gebeten. Daher macht es Sinn, diese Option auf einer Seite zu verwenden, auf der kein Benutzerfluss in vollem Gange ist, wie zum Beispiel auf einer RP-Anmeldeseite.
- `silent`: Das `get()`-Versprechen wird abgelehnt und der Entwickler muss den Benutzer zurück zur Anmeldeseite führen, um den Prozess erneut zu starten. Diese Option ist sinnvoll auf Seiten, auf denen ein Benutzerfluss im Gange ist und Sie ihn bis zum Abschluss angemeldet halten müssen, zum Beispiel auf den Seiten eines Checkout-Flows auf einer E-Commerce-Website.

> [!NOTE]
> Die [`IdentityCredential.isAutoSelected`](/de/docs/Web/API/IdentityCredential/isAutoSelected)-Eigenschaft gibt an, ob der federierte Login mithilfe der automatischen erneuten Authentifizierung durchgeführt wurde. Dies ist hilfreich, um die API-Leistung zu bewerten und die Benutzererfahrung entsprechend zu verbessern. Wenn sie nicht verfügbar ist, wird der Benutzer möglicherweise aufgefordert, sich mit ausdrücklicher Benutzermediation anzumelden, was ein `get()`-Aufruf mit `mediation: required` ist.

## Siehe auch

- [Federated Credential Management API](https://developers.google.com/privacy-sandbox/cookies/fedcm) auf developers.google.com (2023)
