---
title: "Relying Party: Federated Sign-In"
slug: Web/API/FedCM_API/RP_sign-in
l10n:
  sourceCommit: 8d9cda4e9080e9c324a521f40c7e0704ef94ce07
---

{{DefaultAPISidebar("FedCM API")}}

Dieser Artikel beschreibt den Prozess, durch den eine {{Glossary("Relying_party", "relying party")}} (RP) die [Federated Credential Management (FedCM) API](/de/docs/Web/API/FedCM_API) nutzen kann, um sich über einen {{Glossary("Identity_provider", "identity provider")}} (IdP) anzumelden.

## Aufrufen der `get()`-Methode

RPs können [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) mit einer `identity`-Option aufrufen, um einem Benutzer die Möglichkeit zu geben, sich mit einer Auswahl vorhandener IdP-Konten beim RP anzumelden. Die IdPs identifizieren das RP anhand seiner `clientId`, die jedem RP in einem separaten, IdP-spezifischen Prozess zugewiesen wurde. Der ausgewählte IdP identifiziert den spezifischen Benutzer, der versucht, sich mit den dem Browser bereitgestellten Anmeldeinformationen (Cookies) während des [Anmeldeflusses](#fedcm-anmeldefluss) anzumelden.

Falls sich der Benutzer noch nie in einem IdP angemeldet hat oder abgemeldet ist, lehnt `CredentialsContainer.get()` mit einem Fehler ab und das RP kann den Benutzer zu einer IdP-Seite leiten, um sich anzumelden oder ein Konto zu erstellen.

Andernfalls, wenn die Benutzeridentität erfolgreich vom ausgewählten IdP validiert wird, gibt `CredentialsContainer.get()` ein Promise zurück, das mit einem [`IdentityCredential`](/de/docs/Web/API/IdentityCredential)-Objekt erfüllt wird.

### Das `IdentityCredential.token`-Objekt

`IdentityCredential` enthält eine `token`-Eigenschaft, die das RP verwenden kann, um den Benutzer anzumelden.

Die FedCM API definiert nicht die Struktur des `token`-Objekts oder was das RP damit tun sollte: dies hängt vollständig vom föderierten Identitätsprotokoll ab, das der IdP implementiert.

Beispielsweise im [FedCM für OAuth](https://github.com/aaronpk/oauth-fedcm-profile)-Profil, das beschreibt, wie das [OpenID Connect (OIDC)](/de/docs/Web/Security/Authentication/Federated_identity#openid_connect)-Protokoll unter Verwendung von FedCM implementiert werden könnte, ist das von `CredentialsContainer.get()` zurückgegebene Token ein OAuth-Autorisierungscode. Das RP verwendet diesen Code, um das Identitätstoken vom Token-Endpunkt des IdP abzurufen.

Wenn ein RP sich dafür entscheidet, mit einem bestimmten IdP zusammenzuarbeiten, wird der IdP Anweisungen geben, wie der zurückgegebene `token`-Wert zu verwenden ist.

### Beispielanfrage

Eine typische Anfrage könnte folgendermaßen aussehen:

```js
async function signIn() {
  const identityCredential = await navigator.credentials.get({
    identity: {
      context: "signup",
      providers: [
        {
          configURL: "https://accounts.idp.example/config.json",
          clientId: "********",
          params: {/* IdP-specific parameters */},
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

Die `identity.providers`-Eigenschaft nimmt ein Array mit einem oder mehreren Objekten an, die den Pfad zur Konfigurationsdatei (`configURL`) jedes IdP und die vom IdP ausgegebene client identifier (`clientId`) des RP spezifizieren.

Das vorherige Beispiel enthält auch einige optionale Funktionen:

- `identity.context` gibt den Kontext an, in dem der Benutzer sich mit FedCM authentifiziert. Handelt es sich beispielweise um eine erstmalige Anmeldung für dieses Konto oder um eine Anmeldung mit einem bestehenden Konto? Der Browser verwendet diese Informationen, um den Text in seiner FedCM-Benutzeroberfläche dem Kontext entsprechend anzupassen.
- Die `params`-Eigenschaft enthält alle Parameter, die dieser IdP benötigt. Ihre Struktur und ihr Inhalt werden durch den spezifischen IdP bestimmt.
- Die `loginHint`-Eigenschaft gibt einen Hinweis auf die Kontooption(en), die der Browser für die Benutzeranmeldung anzeigen sollte. Dieser Hinweis wird mit den vom IdP am [accounts list endpoint](/de/docs/Web/API/FedCM_API/IDP_integration#the_accounts_list_endpoint) bereitgestellten `login_hints`-Werten abgeglichen.

Der Browser fordert die IdP-Konfigurationsdateien an und führt den unten beschriebenen Anmeldefluss durch. Weitere Informationen darüber, welche Art von Interaktion ein Benutzer von der vom Browser bereitgestellten Benutzeroberfläche erwarten könnte, finden Sie unter [Implementieren einer Identitätslösung mit FedCM auf der Seite der Relying Party](https://developer.chrome.com/docs/identity/fedcm/implement/relying-party).

## FedCM-Anmeldefluss

Beim Anmeldefluss sind drei Parteien beteiligt — die RP-Anwendung, der Browser selbst und der IdP. Das folgende Diagramm fasst zusammen, was visuell passiert.

![eine visuelle Darstellung des unten im Detail beschriebenen Flusses](fedcm-flow.png)

Der Ablauf ist wie folgt:

1. Das RP ruft [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) auf, um den Anmeldefluss zu starten.

2. Aus der für jeden IdP bereitgestellten `configURL` fordert der Browser zwei Dateien an:
   1. Die wohlbekannte Datei (`/.well-known/web-identity`), die unter `/.well-known/web-identity` in der {{Glossary("registrable_domain", "registrierbaren Domäne")}} der `configURL` verfügbar ist.
   2. Die [IdP-Konfigurationsdatei](/de/docs/Web/API/FedCM_API/IDP_integration#provide_a_config_file_and_endpoints) (`/config.json`), die unter der `configURL` verfügbar ist.

   Dies sind beides [`GET`](/de/docs/Web/HTTP/Reference/Methods/GET)-Anfragen, die keine Cookies haben und keine Weiterleitungen verfolgen. Dies verhindert effektiv, dass IdPs herausfinden, wer die Anfrage gemacht hat und welches RP versucht, sich zu verbinden.

   Alle Anfragen, die vom Browser über FedCM gesendet werden, enthalten einen `{{httpheader("Sec-Fetch-Dest")}}: webidentity`-Header, um {{Glossary("CSRF", "CSRF")}}-Angriffe zu verhindern. Alle IdP-Endpunkte müssen bestätigen, dass dieser Header enthalten ist.

3. Die IdPs antworten mit der angeforderten wohlbekannten Datei und den `config.json`-Dateien. Der Browser validiert die URL der Konfigurationsdatei in der `get()`-Anfrage anhand der Liste gültiger Konfigurations-URLs in der wohlbekannten Datei.

4. Wenn der Browser einen [Login-Status eines IdP](/de/docs/Web/API/FedCM_API/IDP_integration#update_login_status_using_the_login_status_api) auf `"logged-in"` gesetzt hat, führt er eine authentifizierte Anfrage (d.h. mit einem Cookie, das den Benutzer identifiziert, der angemeldet ist) an den [`accounts_endpoint`](/de/docs/Web/API/FedCM_API/IDP_integration#the_accounts_list_endpoint) in der IdP-Konfigurationsdatei für die Kontodetails des Benutzers aus. Dies ist eine `GET`-Anfrage mit Cookies, jedoch ohne `client_id`-Parameter oder den {{httpheader("Origin")}}-Header. Damit wird effektiv verhindert, dass IdPs herausfinden, bei welchem RP sich der Benutzer anmelden möchte. Infolgedessen ist die zurückgegebene Liste der Konten RP-agnostisch.

   > [!NOTE]
   > Wenn die Login-Status der IdPs alle auf `"logged-out"` stehen, lehnt der `get()`-Aufruf mit einem `NetworkError` [`DOMException`](/de/docs/Web/API/DOMException) ab und es wird keine Anfrage an einen `accounts_endpoint` eines IdP gestellt. In diesem Fall ist es Sache des Entwicklers, den Fluss zu handhaben, z. B. indem der Benutzer aufgefordert wird, sich bei einem geeigneten IdP anzumelden. Beachten Sie, dass es zu einer Verzögerung bei der Ablehnung kommen kann, um zu vermeiden, dass der Login-Status des IdP an das RP weitergegeben wird.

5. Die IdPs antworten mit den Kontoinformationen, die von ihren `accounts_endpoint`s angefordert wurden. Dies sind Arrays aller Konten, die mit den IdP-Cookies des Benutzers für alle mit einem IdP verbundenen RPs verknüpft sind.

6. {{optional_inline}} Wenn in einer IdP-Konfigurationsdatei enthalten, führt der Browser eine nicht authentifizierte Anfrage an den [`client_metadata_endpoint`](/de/docs/Web/API/FedCM_API/IDP_integration#the_client_metadata_endpoint) durch, um den Standort der Seiten für die Nutzungsbedingungen und Datenschutzrichtlinien des RP zu ermitteln. Dies ist eine `GET`-Anfrage, die mit der in den `get()`-Aufruf als Parameter übergebene `clientId` gesendet wird, jedoch ohne Cookies.

7. {{optional_inline}} Die IdPs beantworten die URLs, die vom `client_metadata_endpoint` angefordert wurden.

8. Der Browser verwendet die Informationen, die aus den vorherigen zwei Anfragen erhalten wurden, um die Benutzeroberfläche zu erstellen, die den Benutzer auffordert, einen IdP (falls mehr als einer angemeldet ist) und ein Konto auszuwählen, um sich beim RP anzumelden. Die Benutzeroberfläche bittet den Benutzer auch um die Erlaubnis, sich beim RP mit ihrem gewählten föderierten IdP-Konto anzumelden.

   > [!NOTE]
   > In dieser Phase, wenn der Benutzer zuvor mit einem föderierten RP-Konto in der aktuellen Browser-Instanz authentifiziert wurde (d.h. ein neues Konto beim RP erstellt oder sich mit einem bestehenden Konto auf der RP-Website angemeldet hat), kann er möglicherweise **automatische Wiederanmeldung** durchführen, abhängig davon, was die [`mediation`](/de/docs/Web/API/CredentialsContainer/get#mediation)-Option im `get()`-Aufruf eingestellt ist. In diesem Fall wird der Benutzer automatisch angemeldet, ohne seine Anmeldedaten einzugeben, sobald `get()` aufgerufen wird. Weitere Details finden Sie im Abschnitt [Automatische Wiederanmeldung](#automatische_wiederanmeldung).

9. Wenn der Benutzer die Erlaubnis erteilt, sendet der Browser eine authentifizierte Anfrage an den [`id_assertion_endpoint`](/de/docs/Web/API/FedCM_API/IDP_integration#the_id_assertion_endpoint), um ein Validierungstoken für das ausgewählte Konto vom gewählten IdP anzufordern.

   Die Anmeldeinformationen werden in einer HTTP-[`POST`](/de/docs/Web/HTTP/Reference/Methods/POST)-Anfrage mit Cookies und einem Inhaltstyp von `application/x-www-form-urlencoded` gesendet.

   Wenn der Aufruf fehlschlägt, wird eine Fehlerrückmeldung gemäß den [Fehlerrückmeldungen für ID-Behauptungen](/de/docs/Web/API/FedCM_API/IDP_integration#id_assertion_error_responses) zurückgegeben und das Promise, das von `get()` zurückgegeben wird, lehnt mit dem Fehler ab.

10. Der gewählte IdP überprüft, ob die vom RP gesendete Konto-ID mit der ID für das Konto übereinstimmt, das bereits angemeldet ist, und dass der `Origin` mit dem Ursprung des RP übereinstimmt, der im Voraus mit dem IdP registriert wurde. Wenn alles korrekt aussieht, wird das angeforderte Validierungstoken zurückgegeben.

    > [!NOTE]
    > Der Ursprung des RP wird in einem völlig separaten Prozess beim ersten Mal, dass das RP sich mit dem IdP integriert, beim IdP registriert. Dieser Prozess wird für jeden IdP spezifisch sein.

11. Wenn der Fluss abgeschlossen ist, wird das `get()`-Promise mit einem [`IdentityCredential`](/de/docs/Web/API/IdentityCredential)-Objekt aufgelöst, das weitere RP-Funktionalität bereitstellt. Am bemerkenswertesten enthält dieses Objekt ein Token, das das RP als von dem IdP stammend verifizieren kann (unter Verwendung eines Zertifikats) und das vertrauenswürdige Informationen über den angemeldeten Benutzer enthält. Sobald das RP das Token validiert, kann es die darin enthaltenen Informationen verwenden, um den Benutzer anzumelden und eine neue Sitzung zu starten, ihn für ihren Dienst anzumelden, usw. Das Format und die Struktur des Tokens hängt vom IdP ab und hat nichts mit der FedCM API zu tun (das RP muss den Anweisungen des IdP folgen).

## Aktiver versus passiver Modus

Es gibt zwei verschiedene UI-Modi, die der Browser einem RP-Benutzer anbieten kann, wenn er sich über die FedCM API anmeldet, den **`active`** und den **`passive`** Modus. Welcher Modus für die Anmeldung verwendet wird, wird durch die [`mode`](/de/docs/Web/API/IdentityCredentialRequestOptions#mode)-Option des `identity`-Objekts gesteuert:

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

Der Standardwert für `mode` ist `passive`. Wenn `mode` nicht gesetzt ist oder explizit auf `passive` gesetzt wird, kann der Browser den Anmeldefluss über einen `get()`-Aufruf ohne direkte Benutzerinteraktion initiieren. Beispielsweise könnte man den Anmeldefluss beim Laden einer Anmelde-Seite initiieren, sofern sie IdP-Konten zur Anmeldung haben. In diesem Modus zeigt der Browser dem Benutzer typischerweise ein Anmeldedialogfenster mit allen unterschiedlichen Anmeldeoptionen, die im `providers`-Objekt spezifiziert sind, und der Benutzer kann diejenige auswählen, die ihm am besten passt, und dann die entsprechenden Anmeldedaten eingeben.

Wenn `mode` auf `active` gesetzt ist, erfordert der Browser, dass der Anmeldefluss durch eine Benutzeraktion wie das Klicken auf einen Button initiiert wird (eine {{Glossary("transient_activation", "flüchtige Aktivierung")}} ist notwendig), und das `providers`-Objekt kann nur eine Länge von `1` haben, andernfalls lehnt das `get()`-Promise ab. Dieser Modus wird typischerweise verwendet, wenn das RP einen separaten Button für jede IdP-Wahl bereitstellen möchte. Wenn der Benutzer auf einen dieser Buttons klickt, erscheint ein vereinfachtes Dialogfenster, das nur erfordert, dass sie die Anmeldedaten für dieses Konto eingeben.

Siehe [FedCM UI-Modi](https://developer.chrome.com/docs/identity/fedcm/overview#fedcm_ui_modes) auf developer.chrome.com für ein Beispiel, wie die verschiedenen UI-Modi in Google Chrome aussehen.

## Automatische Wiederanmeldung

Die FedCM-Automatische Wiederanmeldung ermöglicht es Benutzern, sich automatisch erneut anzumelden, wenn sie versuchen, sich nach ihrer ursprünglichen Authentifizierung über FedCM wieder bei einem RP anzumelden. "Ursprüngliche Authentifizierung" bezieht sich darauf, wenn der Benutzer ein Konto erstellt oder sich zum ersten Mal über den FedCM-Anmeldedialog auf der RP-Website anmeldet, auf derselben Browserinstanz.

Nach der ursprünglichen Authentifizierung kann die automatische Wiederanmeldung verwendet werden, um erneut automatisch auf die RP-Website zuzugreifen, ohne dass dem Benutzer ein "Weiter mit..."-Bestätigungsdialog angezeigt wird. Wenn der Benutzer kürzlich die Berechtigung erteilt hat, Anmeldungen über Föderationen mit einem bestimmten Konto zuzulassen, gibt es keinen Datenschutz- oder Sicherheitsvorteil, eine erneute ausdrückliche Benutzerbestätigung sofort zu erzwingen.

Das Verhalten der automatischen Wiederanmeldung wird von der [`mediation`](/de/docs/Web/API/CredentialsContainer/get#mediation)-Option im `get()`-Aufruf gesteuert:

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

Die automatische Wiederanmeldung kann erfolgen, wenn `mediation` auf `optional` oder `silent` eingestellt ist.

Mit diesen `mediation`-Optionen erfolgt die automatische Wiederanmeldung unter den folgenden Bedingungen:

- FedCM steht zur Nutzung bereit. Zum Beispiel hat der Benutzer FedCM weder global noch in den RP-Einstellungen deaktiviert.
- Der Benutzer hat sich nur mit einem Konto auf dieser Browser-Instanz über FedCM auf der RP-Website angemeldet. Wenn Konten für mehrere IdPs existieren, wird der Benutzer nicht automatisch erneut authentifiziert.
- Der Benutzer ist mit diesem Konto beim IdP angemeldet.
- Es sind nicht mehr als 10 Minuten seit der letzten automatischen Wiederanmeldung vergangen. Diese Einschränkung wird eingeführt, um zu verhindern, dass Benutzer direkt nach dem Abmelden automatisch wieder angemeldet werden — was zu einer sehr verwirrenden Benutzererfahrung führen würde.
- Das RP hat nicht [`preventSilentAccess()`](/de/docs/Web/API/CredentialsContainer/preventSilentAccess) nach der letzten Anmeldung aufgerufen. Dies kann von einem RP verwendet werden, um die automatische Wiederanmeldung explizit zu deaktivieren, wenn gewünscht.
- Der UI-Modus ist [passive]().

Wenn diese Bedingungen erfüllt sind, beginnt ein Versuch zur automatischen Wiederanmeldung des Benutzers, sobald `get()` aufgerufen wird. Wenn die automatische Wiederanmeldung erfolgreich ist, wird der Benutzer erneut auf der RP-Seite angemeldet, ohne dass ihm eine Bestätigungsaufforderung angezeigt wird, unter Verwendung desselben IdP-Kontos und validierten Tokens wie zuvor.

Wenn die automatische Wiederanmeldung fehlschlägt, hängt das Verhalten von dem gewählten `mediation`-Wert ab:

- `optional`: dem Benutzer _wird_ das Dialogfenster zur erneuten Bestätigung angezeigt. Daher macht es mit dieser Option Sinn, sie auf einer Seite zu verwenden, bei der die Benutzerreise nicht gerade im Fluss ist, wie bspw. einer RP-Anmeldeseite.
- `silent`: Das `get()`-Promise wird abgelehnt, und der Entwickler muss den Benutzer auf die Anmeldeseite zurückführen, um den Prozess erneut zu starten. Diese Option macht auf Seiten Sinn, auf denen eine Benutzerreise im Fluss ist und man sicherstellen möchte, dass der Benutzer bis zum Abschluss angemeldet bleibt, z. B. die Seiten eines Checkout-Flusses auf einer E-Commerce-Website.

> [!NOTE]
> Die [`IdentityCredential.isAutoSelected`](/de/docs/Web/API/IdentityCredential/isAutoSelected)-Eigenschaft gibt Aufschluss darüber, ob die föderierte Anmeldung unter Verwendung der automatischen Wiederanmeldung durchgeführt wurde. Dies ist hilfreich, um die API-Leistung zu bewerten und die Benutzererfahrung entsprechend zu verbessern. Wenn sie nicht verfügbar ist, wird der Benutzer möglicherweise aufgefordert, sich mit ausdrücklicher Benutzermediation anzumelden, was ein `get()`-Aufruf mit `mediation: required` ist.

## Trennen einer föderierten Anmeldung

Das RP kann ein angegebenes föderiertes Anmeldekonto vom zugehörigen IdP trennen, indem es [`IdentityCredential.disconnect()`](/de/docs/Web/API/IdentityCredential/disconnect_static) aufruft. Diese Funktion kann von einem obersten RP-Frame aufgerufen werden.

```js
IdentityCredential.disconnect({
  configURL: "https://idp.example.com/config.json",
  clientId: "rp123",
  accountHint: "account456",
});
```

Damit ein `disconnect()`-Aufruf funktioniert, muss der IdP einen [`disconnect_endpoint`](/de/docs/Web/API/FedCM_API/IDP_integration#disconnect_endpoint) in seiner Konfigurationsdatei enthalten. Siehe [Der Disconnect-Endpunkt](/de/docs/Web/API/FedCM_API/IDP_integration#the_disconnect_endpoint) für weitere Details zur zugrunde liegenden HTTP-Kommunikation.

## Siehe auch

- [Federated Credential Management API](https://developer.chrome.com/docs/identity/fedcm/overview) auf developer.chrome.com (2023)
