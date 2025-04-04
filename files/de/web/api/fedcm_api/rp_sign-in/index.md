---
title: Relying party federated sign-in
slug: Web/API/FedCM_API/RP_sign-in
l10n:
  sourceCommit: a6c32a2d0add510c95ef74e85bd8e17551d508b6
---

{{DefaultAPISidebar("FedCM API")}}

Dieser Artikel beschreibt den Prozess, durch den eine relying party (RP) die [Federated Credential Management (FedCM) API](/de/docs/Web/API/FedCM_API) verwenden kann, um eine föderierte Anmeldung über einen Identitätsanbieter (IdP) durchzuführen.

## Aufrufen der get()-Methode

RPs können [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) mit einer `identity`-Option aufrufen, um zu verlangen, dass ein Benutzer sich mit einem bestehenden IdP-Konto, bei dem er bereits im Browser angemeldet ist, bei der RP anmeldet. Der IdP identifiziert die RP durch ihre `clientId`, die dem RP vom IdP in einem separaten, IdP-spezifischen Prozess zugeteilt wurde. Der IdP identifiziert den spezifischen Benutzer mit Hilfe von Anmeldeinformationen (Cookies), die dem Browser beim Login bereitgestellt werden.

Die Methode gibt ein Versprechen zurück, das mit einem [`IdentityCredential`](/de/docs/Web/API/IdentityCredential)-Objekt erfüllt wird, wenn die Benutzeridentität vom IdP erfolgreich validiert wird. Dieses Objekt enthält ein Token, das Benutzeridentitätsinformationen enthält, die mit dem {{Glossary("digital_certificate", "digitalen Zertifikat")}} des IdP signiert sind.

Die RP sendet das Token an ihren Server, um das Zertifikat zu validieren. Bei Erfolg kann sie die nun als vertrauenswürdig geltenden Identitätsinformationen im Token nutzen, um den Benutzer in ihren Dienst anzumelden (eine neue Sitzung zu starten), ihn zu registrieren, falls er ein neuer Benutzer ist, etc.

Falls der Benutzer sich noch nie beim IdP angemeldet hat oder abgemeldet ist, wird die `get()`-Methode mit einem Fehler abgelehnt und die RP kann den Benutzer zur IdP-Anmeldeseite weiterleiten, um sich anzumelden oder ein Konto zu erstellen.

> [!NOTE]
> Die genaue Struktur und der Inhalt des Validierungstokens sind für die FedCM API und den Browser undurchsichtig. Der IdP entscheidet über die Syntax und Verwendung, und die RP muss den Anweisungen folgen, die vom IdP bereitgestellt werden (siehe [Google ID-Token auf der Serverseite verifizieren](https://developers.google.com/identity/gsi/web/guides/verify-google-id-token), zum Beispiel), um sicherzustellen, dass sie es korrekt benutzt.

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

Die Eigenschaft `identity.providers` nimmt ein Array entgegen, das ein einzelnes Objekt enthält, das den Pfad zu einer IdP-Konfigurationsdatei (`configURL`) und die dem RP vom IdP zugeteilte `clientId` festlegt.

> [!NOTE]
> Zurzeit erlaubt FedCM das Aufrufen der API nur mit einem einzelnen IdP, d.h. das `identity.providers`-Array muss die Länge 1 haben. Um Benutzern die Wahl eines Identitätsanbieters zu ermöglichen, muss die RP `get()` für jeden IdP einzeln aufrufen. Dies könnte sich in der Zukunft ändern.

Das obige Beispiel enthält auch einige optionale Funktionen:

- `identity.context` gibt den Kontext an, in dem sich der Benutzer mit FedCM authentifiziert. Handelt es sich zum Beispiel um die erste Anmeldung für dieses Konto oder um eine Anmeldung mit einem bestehenden Konto? Der Browser nutzt diese Information, um den Text in seiner FedCM-Benutzeroberfläche kontextgerechter zu gestalten.
- Die `nonce`-Eigenschaft liefert einen zufälligen Nonce-Wert, der sicherstellt, dass die Antwort speziell für diese Anfrage ausgestellt wird, um {{Glossary("replay_attack", "Replay-Angriffe")}} zu verhindern.
- Die `loginHint`-Eigenschaft gibt einen Hinweis auf die Kontenoption(en), die der Browser dem Benutzer zur Anmeldung präsentieren soll. Dieser Hinweis wird mit den `login_hints`-Werten abgeglichen, die der IdP vom [endpoint der Kontenliste](/de/docs/Web/API/FedCM_API/IDP_integration#the_accounts_list_endpoint) bereitstellt.

Der Browser fordert die IdP-Konfigurationsdatei an und führt den unten beschriebenen Anmeldeprozess durch. Weitere Informationen über die Art der Interaktion, die ein Benutzer von der Benutzeroberfläche des Browsers erwarten könnte, finden Sie unter [Bei der relying party mit dem Identitätsanbieter anmelden](https://privacysandbox.google.com/cookies/fedcm#sign-in).

## FedCM-Anmeldeablauf

Beim Anmeldeablauf sind drei Parteien beteiligt — die RP-App, der Browser selbst und der IdP. Das folgende Diagramm fasst zusammen, was visuell passiert.

![eine visuelle Darstellung des unten detailliert beschriebenen Ablaufs](fedcm-flow.png)

Der Ablauf ist wie folgt:

1. Die RP ruft [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) auf, um den Anmeldeablauf einzuleiten.

2. Aus der im `get()`-Aufruf angegebenen `configURL` fordert der Browser zwei Dateien an:

   1. Die well-known Datei (`/.well-known/web-identity`), verfügbar von `/.well-known/web-identity` beim [eTLD+1](https://web.dev/articles/same-site-same-origin#site) der `configURL`.
   2. Die [IdP-Konfigurationsdatei](/de/docs/Web/API/FedCM_API/IDP_integration#provide_a_config_file_and_endpoints) (`/config.json`), verfügbar bei der `configURL`.

   Dies sind beides [`GET`](/de/docs/Web/HTTP/Reference/Methods/GET)-Anfragen, die keine Cookies enthalten und keinen Weiterleitungen folgen. Dies verhindert effektiv, dass der IdP erfährt, wer die Anfrage gestellt hat und welche RP versucht, eine Verbindung herzustellen.

   Alle Anfragen, die vom Browser über FedCM gesendet werden, enthalten einen `{{httpheader("Sec-Fetch-Dest")}}: webidentity`-Header, um {{Glossary("CSRF", "CSRF")}}-Angriffe zu verhindern. Alle IdP-Endpunkte müssen bestätigen, dass dieser Header enthalten ist.

3. Der IdP antwortet mit der angeforderten well-known und `config.json`-Datei. Der Browser validiert die Konfigurationsdatei-URL in der `get()`-Anfrage gegen die Liste der gültigen Konfigurations-URLs in der well-known Datei.

4. Wenn der Browser den [Anmeldestatus des IdP](/de/docs/Web/API/FedCM_API/IDP_integration#update_login_status_using_the_login_status_api) auf `"logged-in"` gesetzt hat, macht er eine credentialisierte Anfrage (d.h. mit einem Cookie, das den angemeldeten Benutzer identifiziert) zum [`accounts_endpoint`](/de/docs/Web/API/FedCM_API/IDP_integration#the_accounts_list_endpoint) in der IdP-Konfigurationsdatei für die Kontodetails des Benutzers. Dies ist eine `GET`-Anfrage mit Cookies, aber ohne `client_id`-Parameter oder den {{httpheader("Origin")}}-Header. Dies verhindert effektiv, dass der IdP erfährt, bei welcher RP der Benutzer sich anmelden möchte. Infolgedessen ist die zurückgegebene Liste von Konten RP-agnostisch.

   > [!NOTE]
   > Wenn der Anmeldestatus des IdP `"logged-out"` lautet, wird der `get()`-Aufruf mit einem `NetworkError`-[`DOMException`](/de/docs/Web/API/DOMException) abgelehnt und es wird keine Anfrage an das `accounts_endpoint` des IdP gestellt. In diesem Fall obliegt es dem Entwickler, den Ablauf zu handhaben, indem zum Beispiel der Benutzer aufgefordert wird, sich bei einem geeigneten IdP anzumelden. Beachten Sie, dass es zu einer Verzögerung bei der Ablehnung kommen kann, um zu verhindern, dass der Anmeldestatus des IdP an die RP weitergegeben wird.

5. Der IdP antwortet mit den angeforderten Kontoinformationen vom `accounts_endpoint`. Dies ist ein Array aller Konten, die mit den IdP-Cookies des Benutzers für alle RPs, die mit dem IdP verbunden sind, assoziiert sind.

6. {{optional_inline}} Falls in der IdP-Konfigurationsdatei enthalten, macht der Browser eine nicht credentialisierte Anfrage an den [`client_metadata_endpoint`](/de/docs/Web/API/FedCM_API/IDP_integration#the_client_metadata_endpoint) für die Lage der Nutzungsbedingungen und Datenschutzbestimmungen der RP. Dies ist eine `GET`-Anfrage, die mit dem in den `get()`-Aufruf als Parameter übergebenen `clientId`, aber ohne Cookies gesendet wird.

7. {{optional_inline}} Der IdP antwortet mit den von `client_metadata_endpoint` angeforderten URLs.

8. Der Browser verwendet die Informationen aus den vorherigen beiden Anfragen, um die Benutzeroberfläche zu erstellen, die den Benutzer auffordert, ein Konto auszuwählen, mit dem er sich bei der RP anmelden möchte (für den Fall, dass mehr als eines verfügbar ist). Die Benutzeroberfläche fragt den Benutzer auch um Erlaubnis, sich mit seinem ausgewählten föderierten IdP-Konto bei der RP anzumelden.

   > [!NOTE]
   > Zu diesem Zeitpunkt, wenn der Benutzer zuvor mit einem föderierten RP-Konto in der aktuellen Browsersitzung authentifiziert wurde (d.h. ein neues Konto bei der RP erstellt oder sich mit einem bestehenden Konto bei der Website der RP angemeldet hat), können sie möglicherweise **automatisch erneut authentifiziert werden**, abhängig davon, was die Option [`mediation`](/de/docs/Web/API/CredentialsContainer/get#mediation) im `get()`-Aufruf eingestellt ist. Falls ja, wird der Benutzer automatisch ohne Eingabe seiner Anmeldedaten angemeldet, sobald `get()` aufgerufen wird. Weitere Informationen finden Sie im Abschnitt [Automatische erneute Authentifizierung](#automatische_erneute_authentifizierung).

9. Wenn der Benutzer die Erlaubnis dazu erteilt, macht der Browser eine credentialisierte Anfrage an den [`id_assertion_endpoint`](/de/docs/Web/API/FedCM_API/IDP_integration#the_id_assertion_endpoint), um ein Validierungstoken vom IdP für das ausgewählte Konto anzufordern.

   Die Anmeldeinformationen werden in einer HTTP-[`POST`](/de/docs/Web/HTTP/Reference/Methods/POST)-Anfrage mit Cookies und einem Inhaltstyp von `application/x-www-form-urlencoded` gesendet.

   Wenn der Aufruf fehlschlägt, wird eine Fehlerrückmeldung zurückgegeben, wie in [ID-Bestätigungs-Fehlerantworten](/de/docs/Web/API/FedCM_API/IDP_integration#id_assertion_error_responses) erklärt, und das von `get()` zurückgegebene Versprechen wird mit dem Fehler abgelehnt.

10. Der IdP prüft, ob die von der RP gesendete Konto-ID mit der ID für das bereits angemeldete Konto übereinstimmt und ob der `Origin` mit dem Ursprung der RP übereinstimmt, die im Voraus beim IdP registriert wurde. Wenn alles in Ordnung ist, antwortet er mit dem angeforderten Validierungstoken.

    > [!NOTE]
    > Der Ursprung der RP wird in einem völlig separaten Prozess beim IdP registriert, wenn die RP sich erstmals mit dem IdP integriert. Dieser Prozess ist für jeden IdP spezifisch.

11. Wenn der Ablauf abgeschlossen ist, wird das `get()`-Versprechen mit einem [`IdentityCredential`](/de/docs/Web/API/IdentityCredential)-Objekt erfüllt, das weitere Funktionen für die RP bereitstellt. Besonders bemerkenswert ist, dass dieses Objekt ein Token enthält, das die RP überprüfen kann, stammt vom IdP (mithilfe eines Zertifikats) und enthält vertrauenswürdige Informationen über den angemeldeten Benutzer. Sobald die RP das Token validiert hat, kann sie die enthaltenen Informationen nutzen, um den Benutzer anzumelden und eine neue Sitzung zu starten, ihn bei ihrem Dienst zu registrieren usw. Das Format und die Struktur des Tokens hängen vom IdP ab und haben nichts mit der FedCM API zu tun (die RP muss den Anweisungen des IdP folgen).

## Automatische erneute Authentifizierung

FedCM ermöglicht die automatische erneute Authentifizierung, damit Benutzer sich automatisch wieder anmelden können, wenn sie versuchen, sich nach ihrer ersten Authentifizierung mit FedCM erneut bei einer RP anzumelden. "Erste Authentifizierung" bezieht sich auf den Zeitpunkt, an dem der Benutzer ein Konto erstellt oder sich zum ersten Mal über das FedCM-Anmeldedialogfeld auf der RP-Website im selben Browser anmeldet.

Nach der ersten Authentifizierung kann die automatische erneute Authentifizierung genutzt werden, um sich erneut automatisch auf der RP-Website anzumelden, ohne dass der Benutzer eine „Weiter als...“-Bestätigungsaufforderung angezeigt bekommt. Wenn der Benutzer kürzlich die Erlaubnis erteilt hat, dass eine föderierte Anmeldung mit einem bestimmten Konto erfolgen darf, gibt es keinen datenschutz- oder sicherheitsmäßigen Vorteil, sofort wieder eine ausdrückliche Bestätigung des Benutzers zu verlangen.

Das Verhalten der automatischen erneuten Authentifizierung wird durch die Option [`mediation`](/de/docs/Web/API/CredentialsContainer/get#mediation) im `get()`-Aufruf gesteuert:

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

Automatische erneute Authentifizierung kann auftreten, wenn `mediation` auf `optional` oder `silent` gesetzt ist.

Mit diesen `mediation`-Optionen erfolgt die automatische erneute Authentifizierung unter den folgenden Bedingungen:

- FedCM ist verfügbar. Zum Beispiel hat der Benutzer FedCM weder global noch in den Einstellungen der RP deaktiviert.
- Der Benutzer hat sich ausschließlich mit einem Konto bei der RP-Website über FedCM in diesem Browser angemeldet.
- Der Benutzer ist mit diesem Konto beim IdP angemeldet.
- Die automatische erneute Authentifizierung ist nicht innerhalb der letzten 10 Minuten erfolgt. Diese Einschränkung wurde eingeführt, um zu verhindern, dass Benutzer unmittelbar nach dem Abmelden automatisch wieder authentifiziert werden, was für ein ziemlich verwirrendes Benutzererlebnis sorgen würde.
- Die RP hat nach dem letzten Anmelden nicht [`preventSilentAccess()`](/de/docs/Web/API/CredentialsContainer/preventSilentAccess) aufgerufen. Dies kann von einer RP verwendet werden, um die automatische erneute Authentifizierung ausdrücklich zu deaktivieren, falls gewünscht.

Wenn diese Bedingungen erfüllt sind, beginnt ein Versuch, den Benutzer automatisch erneut zu authentifizieren, sobald `get()` aufgerufen wird. Wenn die automatische erneute Authentifizierung erfolgreich ist, wird der Benutzer erneut bei der RP-Website angemeldet, ohne dass ihm eine Bestätigungsaufforderung angezeigt wird, mithilfe desselben IdP-Kontos und des validierten Tokens, die er zuvor verwendete.

Wenn die automatische erneute Authentifizierung fehlschlägt, hängt das Verhalten von der gewählten `mediation`-Wert ab:

- `optional`: dem Benutzer _wird_ der Dialog angezeigt und er wird erneut um Bestätigung gebeten. Infolgedessen macht es mit dieser Option Sinn, sie auf einer Seite zu verwenden, auf der der Benutzerfluss nicht mitten im Gange ist, wie einer Anmeldeseite der RP.
- `silent`: Das `get()`-Versprechen wird abgelehnt und der Entwickler muss die weitere Leitung des Benutzers zurück zur Anmeldeseite handhaben, um den Prozess neu zu starten. Diese Option macht auf Seiten Sinn, auf denen ein Benutzerfluss im Gange ist und Sie ihn bis zum Abschluss angemeldet halten möchten, wie beispielsweise den Seiten eines Checkout-Flows auf einer E-Commerce-Website.

> [!NOTE]
> Die Eigenschaft [`IdentityCredential.isAutoSelected`](/de/docs/Web/API/IdentityCredential/isAutoSelected) gibt Aufschluss darüber, ob die föderierte Anmeldung mit automatischer erneuter Authentifizierung durchgeführt wurde. Dies ist nützlich, um die API-Leistung zu evaluieren und die Benutzererfahrung entsprechend zu verbessern. Außerdem kann der Benutzer möglicherweise aufgefordert werden, sich mit ausdrücklicher Benutzervermittlung anzumelden, was ein `get()`-Aufruf mit `mediation: required` ist.

## Siehe auch

- [Federated Credential Management API](https://privacysandbox.google.com/cookies/fedcm) auf privacysandbox.google.com (2023)
