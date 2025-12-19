---
title: Verbundene Anmeldung des abhängigen Partners
slug: Web/API/FedCM_API/RP_sign-in
l10n:
  sourceCommit: bd24c97c059464e426fc24461cf4ceb4b2cd0809
---

{{DefaultAPISidebar("FedCM API")}}

Dieser Artikel beschreibt den Prozess, durch den ein {{Glossary("Relying_party", "abhängiger Partner")}} (RP) die [Federated Credential Management (FedCM) API](/de/docs/Web/API/FedCM_API) verwenden kann, um eine verbundene Anmeldung über einen {{Glossary("Identity_provider", "Identitätsanbieter")}} (IdP) durchzuführen.

## Aufruf der `get()`-Methode

RPs können [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) mit einer `identity`-Option aufrufen, um anzufordern, dass einem Benutzer die Möglichkeit gegeben wird, sich beim RP mit einer Auswahl bestehender IdP-Konten anzumelden. Die IdPs identifizieren das RP anhand seiner `clientId`, die jedem RP in einem separaten idP-spezifischen Prozess von jedem IdP ausgestellt wurde. Der gewählte IdP identifiziert den spezifischen Benutzer, der versucht, sich mit den Anmeldeinformationen (Cookies) anzumelden, die dem Browser während des [Anmeldeablaufs](#fedcm-anmeldeablauf) zur Verfügung gestellt wurden.

Wenn sich der Benutzer noch nie bei einem IdP angemeldet hat oder abgemeldet ist, lehnt `CredentialsContainer.get()` mit einem Fehler ab und das RP kann den Benutzer auf eine IdP-Seite weiterleiten, um sich anzumelden oder ein Konto zu erstellen.

Andernfalls, wenn die Benutzeridentität erfolgreich vom gewählten IdP validiert wird, gibt `CredentialsContainer.get()` ein Promise zurück, das mit einem [`IdentityCredential`](/de/docs/Web/API/IdentityCredential)-Objekt erfüllt wird.

### Das `IdentityCredential.token`-Objekt

Das `IdentityCredential` enthält eine `token`-Eigenschaft, die das RP verwenden kann, um den Benutzer anzumelden.

Die FedCM-API definiert nicht die Struktur des `token`-Objekts oder was das RP damit tun soll: Dies hängt vollständig vom verbundenen Identitätsprotokoll ab, das der IdP implementiert.

Zum Beispiel im [FedCM for OAuth](https://github.com/aaronpk/oauth-fedcm-profile)-Profil, das beschreibt, wie das [OpenID Connect (OIDC)](/de/docs/Web/Security/Authentication/Federated_identity#openid_connect)-Protokoll über FedCM implementiert werden könnte, ist das von `CredentialsContainer.get()` zurückgegebene Token ein OAuth-Autorisierungscode. Das RP verwendet diesen Code, um das Identity-Token vom Token-Endpunkt des IdPs abzurufen.

Wenn ein RP sich entscheidet, mit einem bestimmten IdP zu arbeiten, wird der IdP Anweisungen dafür bereitstellen, wie der zurückgegebene `token`-Wert verwendet werden soll.

### Beispielanforderung

Eine typische Anforderung könnte so aussehen:

```js
async function signIn() {
  const identityCredential = await navigator.credentials.get({
    identity: {
      context: "signup",
      providers: [
        {
          configURL: "https://accounts.idp.example/config.json",
          clientId: "********",
          params: {
            /* IdP-specific parameters */
          },
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

Die `identity.providers`-Eigenschaft nimmt ein Array an, das ein oder mehrere Objekte enthält, die den Pfad zu jeder IdP-Konfigurationsdatei (`configURL`) und die vom IdP ausgestellte Client-ID (`clientId`) des RP spezifizieren.

Das vorherige Beispiel enthält auch einige optionale Funktionen:

- `identity.context` gibt den Kontext an, in dem sich der Benutzer mit FedCM authentifiziert. Zum Beispiel, handelt es sich um eine erstmalige Anmeldung für dieses Konto oder um eine Anmeldung mit einem bestehenden Konto? Der Browser verwendet diese Informationen, um den Text in seiner FedCM-Benutzeroberfläche so anzupassen, dass er besser zum Kontext passt.
- Die `params`-Eigenschaft enthält alle Parameter, die dieser IdP benötigt. Ihre Struktur und ihr Inhalt wird durch den speziellen IdP bestimmt.
- Die `loginHint`-Eigenschaft liefert einen Hinweis auf die Konto-Option(en), die der Browser für die Benutzeranmeldung anzeigen sollte. Dieser Hinweis wird mit den `login_hints`-Werten abgeglichen, die der IdP am [Kontenlisten-Endpunkt](/de/docs/Web/API/FedCM_API/IDP_integration#the_accounts_list_endpoint) bereitstellt.

Der Browser fordert die IdP-Konfigurationsdateien an und führt den unten beschriebenen Anmeldeablauf durch. Weitere Informationen über die Art der Interaktionen, die ein Benutzer von der browsergestützten Benutzeroberfläche erwarten könnte, finden Sie unter [Implementieren einer Identitätslösung mit FedCM auf der Seite des abhängigen Partners](https://developer.chrome.com/docs/identity/fedcm/implement/relying-party).

## FedCM-Anmeldeablauf

Am Anmeldeablauf sind drei Parteien beteiligt — die RP-App, der Browser selbst und der IdP. Das folgende Diagramm fasst die Abläufe visuell zusammen.

![Eine visuelle Darstellung des detailliert unten beschriebenen Ablaufs](fedcm-flow.png)

Der Ablauf ist wie folgt:

1. Das RP ruft [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) auf, um den Anmeldeablauf zu starten.

2. Vom `configURL`, das für jeden IdP bereitgestellt wird, fordert der Browser zwei Dateien an:
   1. Die bekannte Datei (`/.well-known/web-identity`), die unter `/.well-known/web-identity` am [eTLD+1](https://web.dev/articles/same-site-same-origin#site) des `configURL` verfügbar ist.
   2. Die [IdP-Konfigurationsdatei](/de/docs/Web/API/FedCM_API/IDP_integration#provide_a_config_file_and_endpoints) (`/config.json`), die unter dem `configURL` verfügbar ist.

   Dies sind beide [`GET`](/de/docs/Web/HTTP/Reference/Methods/GET) Anfragen, die keine Cookies beinhalten und keine Umleitungen folgen. Dies verhindert effektiv, dass IdPs erfahren, wer die Anfrage gestellt hat und welches RP versucht, sich zu verbinden.

   Alle Anfragen, die vom Browser über FedCM gesendet werden, enthalten einen `{{httpheader("Sec-Fetch-Dest")}}: webidentity` Header, um {{Glossary("CSRF", "CSRF")}}-Angriffe zu verhindern. Alle IdP-Endpunkte müssen bestätigen, dass dieser Header enthalten ist.

3. Die IdPs antworten mit der angeforderten bekannten Datei und den `config.json`-Dateien. Der Browser validiert die Konfigurationsdatei-URL in der `get()`-Anfrage gegen die Liste der gültigen Konfigurations-URLs in der bekannten Datei.

4. Wenn der Browser einen [Login-Status eines IdP](/de/docs/Web/API/FedCM_API/IDP_integration#update_login_status_using_the_login_status_api) auf `"eingeloggt"` gesetzt hat, stellt er eine request mit Anmeldedaten her (d.h. mit einem Cookie, das den Benutzer identifiziert, der eingeloggt ist) an den [`accounts_endpoint`](/de/docs/Web/API/FedCM_API/IDP_integration#the_accounts_list_endpoint) innerhalb der IdP-Konfigurationsdatei, um die Kontodetails des Benutzers anzufordern. Dies ist eine `GET`-Anfrage mit Cookies, jedoch ohne einen `client_id`-Parameter oder den {{httpheader("Origin")}}-Header. Dies verhindert effektiv, dass IdPs erfahren, bei welchem RP der Benutzer einzuloggen versucht. Infolgedessen ist die Liste der zurückgegebenen Konten RP-agnostisch.

   > [!HINWEIS]
   > Wenn die Login-Status der IdPs alle auf `"ausgeloggt"` gesetzt sind, lehnt der `get()`-Aufruf mit einer `NetworkError` [`DOMException`](/de/docs/Web/API/DOMException) ab und stellt keine Anfrage an einen `accounts_endpoint` eines IdP. In diesem Fall liegt es in der Verantwortung des Entwicklers, den Ablauf zu steuern, zum Beispiel indem der Benutzer aufgefordert wird, sich bei einem geeigneten IdP anzumelden. Beachten Sie, dass es möglicherweise zu einer Verzögerung bei der Ablehnung kommt, um das Leaken des IdP-Login-Status an das RP zu vermeiden.

5. Die IdPs antworten mit den Kontoinformationen, die von ihren `accounts_endpoint`s angefordert wurden. Dies sind Arrays aller Konten, die mit den IdP-Cookies des Benutzers für beliebige RPs verknüpft sind, die mit einem IdP verbunden sind.

6. {{optional_inline}} Wenn in einer IdP-Konfigurationsdatei enthalten, stellt der Browser eine Anforderung ohne Anmeldedaten an den [`client_metadata_endpoint`](/de/docs/Web/API/FedCM_API/IDP_integration#the_client_metadata_endpoint), um den Standort der Seiten mit den Geschäftsbedingungen und Datenschutzrichtlinien des RP anzufordern. Dies ist eine `GET`-Anfrage, die mit dem an den `get()`-Aufruf übergebenen `clientId`-Parameter gesendet wird, jedoch ohne Cookies.

7. {{optional_inline}} Die IdPs antworten mit den von `client_metadata_endpoint` angeforderten URLs.

8. Der Browser verwendet die Informationen, die durch die vorherigen zwei Anfragesätze erhalten wurden, um die Benutzeroberfläche zu erstellen, die den Benutzer bittet, einen IdP (sofern mehr als einer angemeldet ist) und ein Konto auszuwählen, um sich beim RP anzumelden. Die Benutzeroberfläche bittet den Benutzer auch um die Erlaubnis, sich beim RP mit dem ausgewählten föderierten IdP-Konto anzumelden.

   > [!HINWEIS]
   > An dieser Stelle, wenn der Benutzer sich bereits mit einem föderierten RP-Konto in der aktuellen Browser-Instanz authentifiziert hat (d.h. ein neues Konto beim RP erstellt oder sich auf der RP-Website mit einem vorhandenen Konto angemeldet hat), kann es möglich sein, **automatisch erneut zu authentifizieren**, abhängig davon, wie die [`mediation`](/de/docs/Web/API/CredentialsContainer/get#mediation)-Option im `get()`-Aufruf gesetzt ist. Wenn ja, wird der Benutzer automatisch angemeldet, ohne seine Anmeldedaten eingeben zu müssen, sobald `get()` aufgerufen wird. Weitere Einzelheiten finden Sie im Abschnitt [Automatische erneute Authentifizierung](#automatische_erneute_authentifizierung).

9. Wenn der Benutzer die Erlaubnis dafür erteilt, sendet der Browser eine Anfrage mit Anmeldedaten an den [`id_assertion_endpoint`](/de/docs/Web/API/FedCM_API/IDP_integration#the_id_assertion_endpoint), um ein Validierungstoken vom ausgewählten IdP für das ausgewählte Konto anzufordern.

   Die Anmeldedaten werden in einer HTTP [`POST`](/de/docs/Web/HTTP/Reference/Methods/POST)-Anfrage mit Cookies und einem Content-Type von `application/x-www-form-urlencoded` gesendet.

   Wenn der Aufruf fehlschlägt, wird eine Fehlernutzlast zurückgegeben, wie in [Fehlerantworten zur ID-Bestätigung](/de/docs/Web/API/FedCM_API/IDP_integration#id_assertion_error_responses) erklärt, und das Promise, das von `get()` zurückgegeben wird, wird mit dem Fehler abgelehnt.

10. Der ausgewählte IdP überprüft, ob die vom RP gesendete Konto-ID mit der ID des Kontos übereinstimmt, das bereits eingeloggt ist, und dass der `Origin` mit dem Ursprungsort des RP übereinstimmt, der im Voraus beim IdP registriert wurde. Wenn alles in Ordnung ist, antwortet er mit dem angeforderten Validierungstoken.

    > [!HINWEIS]
    > Der Ursprung des RP wird in einem vollständig separaten Prozess beim IdP registriert, wenn das RP erstmals mit dem IdP integriert wird. Dieser Prozess ist für jeden IdP spezifisch.

11. Wenn der Ablauf abgeschlossen ist, wird das `get()`-Promise mit einem [`IdentityCredential`](/de/docs/Web/API/IdentityCredential)-Objekt gelöst, das weitere RP-Funktionen bietet. Besonders hervorzuheben ist, dass dieses Objekt ein Token enthält, das das RP verifizieren kann, dass es vom IdP stammt (mithilfe eines Zertifikats), und das vertrauenswürdige Informationen über den angemeldeten Benutzer enthält. Nachdem das RP das Token validiert hat, kann es die darin enthaltenen Informationen verwenden, um den Benutzer anzumelden und eine neue Sitzung zu beginnen, ihn für seinen Dienst zu registrieren usw. Das Format und die Struktur des Tokens hängen vom IdP ab und haben nichts mit der FedCM-API zu tun (das RP muss den Anweisungen des IdP folgen).

## Aktiver versus passiver Modus

Es gibt zwei verschiedene Benutzermodi, die der Browser einem RP-Benutzer zur Verfügung stellen kann, wenn er sich über die FedCM-API anmeldet, den **`aktiven`** und den **`passiven`** Modus. Welcher Modus für die Anmeldung verwendet wird, wird durch die [`mode`](/de/docs/Web/API/IdentityCredentialRequestOptions#mode)-Option des `identity`-Objekts gesteuert:

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

Der Standardwert für `mode` ist `passive`. Wenn `mode` nicht gesetzt ist oder explizit auf `passive` gesetzt ist, kann der Browser den Anmeldevorgang über einen `get()`-Aufruf ohne direkte Benutzerinteraktion initiieren. Beispielsweise möchten Sie möglicherweise den Anmeldevorgang sofort starten, sobald der Benutzer auf die Anmeldeseite navigiert, vorausgesetzt, er verfügt über IdP-Konten, mit denen er sich anmelden kann. In diesem Modus präsentieren Browser dem Benutzer in der Regel ein Anmeldedialogfenster mit all den verschiedenen Anmeldeoptionen, die im `providers`-Objekt angegeben sind, und sie können diejenige auswählen, die ihnen am besten passt, und dann die entsprechenden Anmeldedaten eingeben.

Wenn `mode` auf `active` gesetzt ist, erfordert der Browser, dass der Anmeldevorgang durch eine Benutzeraktion wie das Klicken auf einen Button initiiert wird ({{Glossary("transient_activation", "vorübergehende Aktivierung")}} ist erforderlich), und das `providers`-Objekt kann nur eine Länge von `1` haben, ansonsten wird das `get()`-Promise abgelehnt. Dieser Modus wird typischerweise verwendet, wenn das RP einen separaten Button für jede IdP-Auswahl bereitstellen möchte. Wenn der Benutzer auf eine dieser Schaltflächen klickt, erscheint ein vereinfachtes Dialogfenster, das nur erfordert, dass er die Anmeldedaten für dieses Konto eingibt.

Siehe [FedCM-Benutzermodi](https://developer.chrome.com/docs/identity/fedcm/overview#fedcm_ui_modes) auf developer.chrome.com für ein Beispiel dafür, wie die verschiedenen Benutzermodi in Google Chrome präsentiert werden.

## Automatische erneute Authentifizierung

FedCM ermöglicht eine automatische erneute Authentifizierung, wodurch Benutzer sich automatisch erneut authentifizieren können, wenn sie versuchen, sich erneut bei einem RP anzumelden, nachdem sie sich erstmals mit FedCM authentifiziert haben. „Erste Authentifizierung“ bezieht sich auf die Situation, in der der Benutzer bei der RP-Website ein Konto erstellt oder sich erstmalig über das FedCM-Anmeldedialog bei der RP-Website anmeldet, auf derselben Browserinstanz.

Nach der ersten Authentifizierung kann die automatische erneute Authentifizierung verwendet werden, um sich erneut automatisch bei der RP-Website anzumelden, ohne dass dem Benutzer eine "Weiter als..." Bestätigungsaufforderung angezeigt werden muss. Wenn der Benutzer kürzlich die Erlaubnis erteilt hat, dass eine verbundene Anmeldung mit einem bestimmten Konto erfolgen darf, gibt es keinen Datenschutz- oder Sicherheitsvorteil, sofort eine weitere explizite Benutzerbestätigung zu erzwingen.

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

Automatische erneute Authentifizierung kann auftreten, wenn `mediation` auf `optional` oder `silent` gesetzt ist.

Mit diesen `mediation`-Optionen tritt eine automatische erneute Authentifizierung unter den folgenden Bedingungen auf:

- FedCM ist verfügbar. Zum Beispiel hat der Benutzer FedCM nicht global oder in den RP-Einstellungen deaktiviert.
- Der Benutzer hat nur ein Konto verwendet, um sich über FedCM bei der RP-Website anzumelden. Wenn Konten für mehrere IdPs existieren, wird der Benutzer nicht automatisch erneut authentifiziert.
- Der Benutzer ist bei dem IdP mit diesem Konto angemeldet.
- Die automatische erneute Authentifizierung ist in den letzten 10 Minuten nicht aufgetreten. Diese Einschränkung wird eingeführt, um zu verhindern, dass Benutzer sofort nach dem Abmelden automatisch erneut authentifiziert werden — was eine ziemlich verwirrende Benutzererfahrung wäre.
- Das RP hat [`preventSilentAccess()`](/de/docs/Web/API/CredentialsContainer/preventSilentAccess) nicht nach der vorherigen Anmeldung aufgerufen. Dies kann von einem RP verwendet werden, um die automatische erneute Authentifizierung ausdrücklich zu deaktivieren, falls gewünscht.
- Der Benutzermodus ist [passiv]().

Wenn diese Bedingungen erfüllt sind, wird versucht, den Benutzer automatisch erneut zu authentifizieren, sobald `get()` aufgerufen wird. Wenn die automatische erneute Authentifizierung erfolgreich ist, wird der Benutzer erneut auf der RP-Seite angemeldet, ohne dass ihm eine Bestätigungsaufforderung angezeigt wird, und zwar mit demselben IdP-Konto und validierten Token wie zuvor.

Falls die automatische erneute Authentifizierung fehlschlägt, hängt das Verhalten vom gewählten `mediation`-Wert ab:

- `optional`: Dem Benutzer _wird_ der Dialog erneut angezeigt und um Bestätigung gebeten. Infolgedessen macht es Sinn, diese Option auf einer Seite zu verwenden, auf der sich ein Benutzerweg nicht in einem mittleren Ablauf befindet, wie z. B. eine RP-Anmeldeseite.
- `silent`: Das `get()`-Promise wird abgelehnt und der Entwickler muss den Benutzer zur Anmeldung zurückführen, um den Prozess erneut zu starten. Diese Option ergibt auf Seiten Sinn, auf denen sich ein Benutzerweg im Fluss befindet und Sie ihn bis zum Abschluss angemeldet halten müssen, zum Beispiel auf den Seiten eines Checkout-Ablaufs auf einer E-Commerce-Website.

> [!HINWEIS]
> Die [`IdentityCredential.isAutoSelected`](/de/docs/Web/API/IdentityCredential/isAutoSelected)-Eigenschaft gibt einen Hinweis darauf, ob die föderierte Anmeldung mit automatischer erneuter Authentifizierung durchgeführt wurde. Dies ist hilfreich, um die API-Leistung zu bewerten und die Nutzbarkeit entsprechend zu verbessern. Wenn sie nicht verfügbar ist, kann der Benutzer möglicherweise aufgefordert werden, sich mit expliziter Benutzermediation anzumelden, was ein `get()`-Aufruf mit `mediation: required` ist.

## Trennen einer verbundenen Anmeldung

Das RP kann ein angegebenes Konto für die verbundene Anmeldung vom zugehörigen IdP trennen, indem [`IdentityCredential.disconnect()`](/de/docs/Web/API/IdentityCredential/disconnect_static) aufgerufen wird. Diese Funktion kann aus einem Top-Level-RP-Frame aufgerufen werden.

```js
IdentityCredential.disconnect({
  configURL: "https://idp.example.com/config.json",
  clientId: "rp123",
  accountHint: "account456",
});
```

Damit ein `disconnect()`-Aufruf funktioniert, muss der IdP einen [`disconnect_endpoint`](/de/docs/Web/API/FedCM_API/IDP_integration#disconnect_endpoint) in seiner Konfigurationsdatei einschließen. Siehe [Der Trennungsendpunkt](/de/docs/Web/API/FedCM_API/IDP_integration#the_disconnect_endpoint) für weitere Details zur zugrunde liegenden HTTP-Kommunikation.

## Siehe auch

- [Federated Credential Management API](https://developer.chrome.com/docs/identity/fedcm/overview) auf developer.chrome.com (2023)
