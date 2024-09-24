---
title: Integration des Identitätsanbieters mit FedCM
slug: Web/API/FedCM_API/IDP_integration
l10n:
  sourceCommit: 2b6f99e45534ce662f842d8b4d2f7845492e353c
---

{{DefaultAPISidebar("FedCM API")}}

Dieser Artikel beschreibt alle Schritte, die ein Identitätsanbieter (IdP) unternehmen muss, um sich mit der Federated Credential Management (FedCM) API zu integrieren.

## Schritte zur IdP-Integration

Um sich mit FedCM zu integrieren, muss ein IdP Folgendes tun:

1. [Stellen Sie eine well-known file bereit](#stellen_sie_eine_well-known_file_bereit), um den IdP zu identifizieren.
2. [Stellen Sie eine Konfigurationsdatei und Endpunkte bereit](#stellen_sie_eine_konfigurationsdatei_und_endpunkte_bereit) für Kontolisten und die Ausstellung von Aussagen (und optional, Client-Metadaten).
3. [Aktualisieren Sie den Anmeldestatus](#aktualisieren_des_anmeldestatus_mit_der_login_status_api) mithilfe der Login Status API.

## Stellen Sie eine well-known file bereit

Es besteht ein potenzielles Datenschutzproblem, bei dem ein [IdP in der Lage ist, zu erkennen, ob ein Benutzer eine RP ohne ausdrückliche Zustimmung besucht hat](https://github.com/w3c-fedid/FedCM/issues/230). Dies hat Auswirkungen auf das Tracking, daher ist ein IdP verpflichtet, eine well-known file bereitzustellen, um seine Identität zu verifizieren und dieses Problem zu mildern.

Die well-known file wird über eine nicht authentifizierte [`GET`](/de/docs/Web/HTTP/Methods/GET)-Anfrage angefordert, die keine Weiterleitungen verfolgt. Dies verhindert effektiv, dass der IdP erfährt, wer die Anfrage gestellt hat und welche RP zu verbinden versucht.

Die well-known file muss vom [eTLD+1](https://web.dev/articles/same-site-same-origin#site) des IdP unter `/.well-known/web-identity` bereitgestellt werden. Zum Beispiel, wenn die IdP-Endpunkte unter `https://accounts.idp.example/` bereitgestellt werden, müssen sie eine well-known file unter `https://idp.example/.well-known/web-identity` bereitstellen. Der Inhalt der well-known file sollte die folgende JSON-Struktur haben:

```json
{
  "provider_urls": ["https://accounts.idp.example/config.json"]
}
```

Der `provider_urls`-Eintrag sollte ein Array von URLs enthalten, die auf gültige IdP-Konfigurationsdateien verweisen, die von RPs verwendet werden können, um mit dem IdP zu interagieren. Die Array-Länge ist momentan auf eins begrenzt.

## Der `Sec-Fetch-Dest` HTTP-Header

Alle Anfragen, die über FedCM vom Browser gesendet werden, enthalten einen `{{httpheader("Sec-Fetch-Dest")}}: webidentity`-Header. Alle IdP-Endpunkte, die authentifizierte Anfragen erhalten (d.h. `accounts_endpoint` und `id_assertion_endpoint`), müssen bestätigen, dass dieser Header enthalten ist, um sich gegen {{glossary("CSRF")}}-Angriffe zu schützen.

## Stellen Sie eine Konfigurationsdatei und Endpunkte bereit

Die IdP-Konfigurationsdatei bietet eine Liste der Endpunkte, die der Browser benötigt, um den Identitätsfederationsfluss zu verarbeiten und die Anmeldungen zu verwalten. Die Endpunkte müssen denselben Ursprung haben wie die Konfiguration.

Der Browser macht eine nicht authentifizierte Anfrage für die Konfigurationsdatei über die [`GET`](/de/docs/Web/HTTP/Methods/GET)-Methode, die keine Weiterleitungen verfolgt. Dies verhindert effektiv, dass der IdP erfährt, wer die Anfrage gestellt hat und welche RP zu verbinden versucht.

Die Konfigurationsdatei (in unserem Beispiel gehostet unter `https://accounts.idp.example/config.json`) sollte die folgende JSON-Struktur haben:

```json
{
  "accounts_endpoint": "/accounts.php",
  "client_metadata_endpoint": "/client_metadata.php",
  "id_assertion_endpoint": "/assertion.php",
  "login_url": "/login",
  "branding": {
    "background_color": "green",
    "color": "0xFFEEAA",
    "icons": [
      {
        "url": "https://idp.example/icon.ico",
        "size": 25
      }
    ]
  }
}
```

Die Eigenschaften sind wie folgt:

- `accounts_endpoint`
  - : Die URL für den Kontolisten-Endpunkt, der eine Liste von Konten zurückgibt, bei denen der Benutzer derzeit beim IdP angemeldet ist. Der Browser verwendet diese, um dem Benutzer in der vom Browser bereitgestellten FedCM-Benutzeroberfläche eine Liste von Anmeldeoptionen anzuzeigen.
- `client_metadata_endpoint` {{optional_inline}}
  - : Die URL für den Client-Metadaten-Endpunkt, der URLs zu den Metadaten und den Nutzungsbedingungen der RP liefert, die in der FedCM-Benutzeroberfläche verwendet werden sollen.
- `id_assertion_endpoint`
  - : Die URL für den ID Assertions-Endpunkt, der, wenn er mit gültigen Benutzeranmeldeinformationen gesendet wird, mit einem Validierungstoken antworten sollte, das die RP verwenden kann, um die Authentifizierung zu validieren.
- `login_url`
  - : Die URL zur Anmeldeseite, auf der sich der Benutzer beim IdP anmelden kann.
- `branding` {{optional_inline}}
  - : Beinhaltet Markeninformationen, die in der vom Browser bereitgestellten FedCM-Benutzeroberfläche verwendet werden, um ihr Aussehen gemäß den Wünschen des IdP anzupassen.

Die folgende Tabelle fasst die verschiedenen Anfragen zusammen, die von der FedCM API gestellt werden:

| Endpunkt/Ressource         | Methode | Authentifiziert (mit Cookies) | Beinhaltet {{httpheader("Origin")}} |
| ---------------------------| ------- | ----------------------------- | ---------------------------------- |
| `well-known`/`config.json` | `GET`   | Nein                          | Nein                               |
| `accounts_endpoint`        | `GET`   | Ja                            | Nein                               |
| `client_metadata_endpoint` | `GET`   | Nein                          | Ja                                 |
| `id_assertion_endpoint`    | `POST`  | Ja                            | Ja                                 |

> [!NOTE]
> Eine Beschreibung des FedCM-Ablaufs, in dem diese Endpunkte aufgerufen werden, finden Sie unter [FedCM-Anmeldefluss](/de/docs/Web/API/FedCM_API/RP_sign-in#fedcm_sign-in_flow).

> [!NOTE]
> Keine der von der FedCM API an die hier beschriebenen Endpunkte gestellten Anfragen erlaubt das Folgen von Weiterleitungen, aus Datenschutzgründen.

### Der Kontolisten-Endpunkt

Der Browser sendet authentifizierte Anfragen (d.h. mit einem Cookie, das den angemeldeten Benutzer identifiziert) an diesen Endpunkt über die `GET`-Methode. Die Anfrage hat keinen `client_id`-Parameter, keinen {{httpheader("Origin")}}-Header und keinen {{httpheader("Referer")}}-Header. Dies verhindert effektiv, dass der IdP erfährt, bei welcher RP der Benutzer sich anzumelden versucht. Die zurückgegebene Liste der Konten ist RP-agnostisch.

Beispiel:

```http
GET /accounts.php HTTP/1.1
Host: idp.example
Accept: application/json
Cookie: 0x23223
Sec-Fetch-Dest: webidentity
```

Die Antwort auf eine erfolgreiche Anfrage gibt eine Liste aller IdP-Konten zurück, bei denen der Benutzer derzeit angemeldet ist (nicht spezifisch für eine bestimmte RP), mit einer JSON-Struktur, die der folgenden entspricht:

```json
{
  "accounts": [
    {
      "id": "john_doe",
      "given_name": "John",
      "name": "John Doe",
      "email": "john_doe@idp.example",
      "picture": "https://idp.example/profile/123",
      "approved_clients": ["123", "456", "789"],
      "login_hints": ["john_doe", "john_doe@idp.example"]
    },
    {
      "id": "johnny",
      "given_name": "Johnny",
      "name": "Johnny",
      "email": "johnny@idp.example",
      "picture": "https://idp.example/profile/456",
      "approved_clients": ["abc", "def", "ghi"],
      "login_hints": ["johnny", "johnny@idp.example"]
    }
  ]
}
```

Dies beinhaltet die folgenden Informationen:

- `id`
  - : Die eindeutige ID des Benutzers.
- `name`
  - : Der Nachname des Benutzers.
- `email`
  - : Die E-Mail-Adresse des Benutzers.
- `given_name` {{optional_inline}}
  - : Der Vorname des Benutzers.
- `picture` {{optional_inline}}
  - : Die URL des Benutzeravatars.
- `approved_clients` {{optional_inline}}
  - : Ein Array von RP-Clients, bei denen sich der Benutzer angemeldet hat.
- `login_hints` {{optional_inline}}
  - : Ein Array von Zeichenfolgen, die das Konto darstellen. Diese Zeichenfolgen werden verwendet, um die Liste der Kontooptionen zu filtern, die der Browser dem Benutzer zur Anmeldung anbietet. Dies tritt auf, wenn die `loginHint`-Eigenschaft innerhalb von [`identity.providers`](/de/docs/Web/API/CredentialsContainer/get#providers_2) in einem zugehörigen `get()`-Aufruf bereitgestellt wird. Jedes Konto mit einer Zeichenfolge in seinem `login_hints`-Array, die mit dem bereitgestellten `loginHint` übereinstimmt, wird einbezogen.

> [!NOTE]
> Wenn der Benutzer bei keinem IdP-Konto angemeldet ist, sollte der Endpunkt mit [HTTP 401 (Unauthorized)](/de/docs/Web/HTTP/Status/401) antworten.

### Der Client-Metadaten-Endpunkt

Der Browser sendet nicht authentifizierte Anfragen an diesen Endpunkt über die `GET`-Methode, wobei die `clientId` als Parameter in den `get()`-Aufruf übergeben wird.

Beispiel:

```http
GET /client_metadata.php?client_id=1234 HTTP/1.1
Host: idp.example
Origin: https://rp.example/
Accept: application/json
Sec-Fetch-Dest: webidentity
```

Die Antwort auf eine erfolgreiche Anfrage enthält URLs, die zu den Metadaten der RP und zu deren Nutzungsbedingungen führen, welche in der vom Browser gelieferten FedCM-Benutzeroberfläche verwendet werden sollen. Dies sollte der folgenden JSON-Struktur entsprechen:

```json
{
  "privacy_policy_url": "https://rp.example/privacy_policy.html",
  "terms_of_service_url": "https://rp.example/terms_of_service.html"
}
```

### Der ID Assertions-Endpunkt

Der Browser sendet authentifizierte Anfragen an diesen Endpunkt über die [`POST`](/de/docs/Web/HTTP/Methods/POST)-Methode mit einem Inhaltstyp von `application/x-www-form-urlencoded`. Die Anfrage enthält zudem eine Nutzlast mit Details zur versuchten Anmeldung und dem zu validierenden Konto.

So sollte es aussehen:

```http
POST /assertion.php HTTP/1.1
Host: idp.example
Origin: https://rp.example/
Content-Type: application/x-www-form-urlencoded
Cookie: 0x23223
Sec-Fetch-Dest: webidentity
account_id=123&client_id=client1234&nonce=Ct60bD&disclosure_text_shown=true&is_auto_selected=true
```

Eine Anfrage an diesen Endpunkt wird als Ergebnis der Auswahl eines Kontos zur Anmeldung durch den Benutzer aus der betreffenden Browser-Benutzeroberfläche gesendet. Wenn gültige Benutzeranmeldeinformationen gesendet werden, sollte dieser Endpunkt mit einem Validierungstoken antworten, das die RP verwenden kann, um den Benutzer auf ihrem eigenen Server zu validieren, entsprechend den vom IdP beschriebenen Anweisungen zur Nutzung der Identitätsföderation. Sobald die RP den Benutzer validiert hat, kann sie ihn anmelden oder ihm die Registrierung für ihren Dienst ermöglichen usw.

```json
{
  "token": "***********"
}
```

Die Anfragenutzlast enthält die folgenden Parameter:

- `client_id`
  - : Die Client-ID der RP (die mit der `clientId` aus der ursprünglichen `get()`-Anfrage übereinstimmt).
- `account_id`
  - : Die eindeutige ID des Benutzerkontos, das angemeldet werden soll (die mit der `id` des Benutzers aus der Antwort des Endpunkts für die Kontoliste übereinstimmt).
- `nonce` {{optional_inline}}
  - : Der Anfrage-Nonce, bereitgestellt von der RP.
- `disclosure_text_shown`
  - : Eine Zeichenkette `"true"` oder `"false"`, die angibt, ob der Offenlegungstext angezeigt wurde oder nicht. Der Offenlegungstext ist die dem Benutzer angezeigte Information (die die Links zu den Nutzungsbedingungen und zur Datenschutzrichtlinie enthalten kann, wenn bereitgestellt), wenn der Benutzer beim IdP angemeldet ist, jedoch kein spezielles Konto auf der aktuellen RP hat (in diesem Fall müsste er sich entscheiden, als sein IdP-Identität "Weiterzumachen..." und dann ein entsprechendes Konto auf der RP zu erstellen).
- `is_auto_selected`
  - : Eine Zeichenkette `"true"` oder `"false"`, die angibt, ob die Authentifizierungsvalidierungsanfrage als Ergebnis einer [automatischen erneuten Authentifizierung](/de/docs/Web/API/FedCM_API/RP_sign-in#auto-reauthentication) ausgestellt wurde, d.h. ohne Benutzerintervention. Dies kann auftreten, wenn der {{domxref("CredentialsContainer.get", "get()")}}-Aufruf mit einem [`mediation`](/de/docs/Web/API/CredentialsContainer/get#mediation)-Optionswert von `"optional"` oder `"silent"` ausgeführt wird. Es ist nützlich für den IdP, zu wissen, ob eine automatische erneute Authentifizierung erfolgt ist, um die Leistung zu bewerten und, falls höhere Sicherheit gewünscht wird. Zum Beispiel könnte der IdP einen Fehlercode zurückgeben, der der RP mitteilt, dass er eine ausdrückliche Benutzermediation erfordert (`mediation="required"`).

> [!NOTE]
> Wenn der {{domxref("CredentialsContainer.get", "get()")}}-Aufruf Erfolg hat, wird der `is_auto_selected`-Wert auch über die {{domxref("IdentityCredential.isAutoSelected")}}-Eigenschaft an die RP kommuniziert.

#### Fehlerantworten des ID Assertions-Endpunkts

Wenn der IdP kein Token ausstellen kann — zum Beispiel, wenn der Client nicht autorisiert ist —, antwortet der ID Assertion-Endpunkt mit einer Fehlermeldung, die Informationen über die Art des Fehlers enthält. Zum Beispiel:

```json
{
  "error": {
    "code": "access_denied",
    "url": "https://idp.example/error?type=access_denied"
  }
}
```

Die Fehlerantwortfelder sind wie folgt:

- `code` {{optional_inline}}
  - : Eine Zeichenkette. Dies kann entweder ein bekannter Fehler aus der [OAuth 2.0 spezifizierten Fehlerliste](https://datatracker.ietf.org/doc/html/rfc6749#section-4.1.2.1) oder eine beliebige Zeichenfolge sein.
- `url` {{optional_inline}}
  - : Eine URL. Dies sollte eine Webseite mit menschenlesbaren Informationen über den Fehler sein, um den Benutzern zu zeigen, wie der Fehler behoben werden kann oder wie sie den Kundendienst kontaktieren können. Die URL muss die gleiche Site haben wie die Konfigurations-URL des IdP.

Diese Informationen können auf verschiedene Arten verwendet werden:

- Der Browser kann dem Benutzer eine benutzerdefinierte Benutzeroberfläche anzeigen, die ihn darüber informiert, was schiefgelaufen ist (siehe die [Chrome-Dokumentation](https://developers.google.com/privacy-sandbox/blog/fedcm-chrome-120-updates#error-api) für ein Beispiel). Beachten Sie, dass wenn die Anfrage fehlgeschlagen ist, weil der IdP-Server nicht verfügbar ist, er offensichtlich keine Informationen zurückgeben kann. In solchen Fällen wird der Browser dies über eine generische Nachricht melden.
- Der zugehörige RP {{domxref("CredentialsContainer.get", "navigator.credentials.get()")}}-Aufruf, der für den Versuch der Anmeldung verwendet wird, lehnt sein Versprechen mit einem `IdentityCredentialError` ab, der die Fehlerinformationen enthält. Eine RP kann diesen Fehler abfangen und dann die benutzerdefinierte Benutzeroberfläche des Browsers mit einigen Informationen fortsetzen, um dem Benutzer zu helfen, in einem zukünftigen Anmeldeversuch erfolgreich zu sein.

## Aktualisieren des Anmeldestatus mit der Login Status API

Die **Login Status API** ermöglicht es einem IdP, einen Browser über seinen Anmeldestatus (Login-Status) in diesem bestimmten Browser zu informieren — damit meinen wir „ob irgendwelche Benutzer im aktuellen Browser beim IdP angemeldet sind oder nicht". Der Browser speichert diesen Status für jeden IdP; die FedCM API verwendet dies dann, um die Anzahl der Anfragen an den IdP zu reduzieren (da sie keine Zeit mit Anfragen für Konten verschwenden muss, wenn keine Benutzer beim IdP angemeldet sind). Sie mindert auch [potenzielle Timing-Angriffe](https://github.com/w3c-fedid/FedCM/issues/447).

Für jeden bekannten IdP (identifiziert durch seine Konfigurations-URL) hält der Browser eine dreistufige Variable bereit, die den Anmeldestatus mit drei möglichen Werten darstellt:

- `"logged-in"`: Der IdP hat mindestens ein Benutzerkonto angemeldet. Beachten Sie, dass zu diesem Zeitpunkt die RP und der Browser nicht wissen, welcher Benutzer das ist. Informationen zu bestimmten Benutzern werden zu einem späteren Zeitpunkt im FedCM-Ablauf vom [`accounts_endpoint`](#der_kontolisten-endpunkt) des IdP zurückgegeben.
- `"logged-out"`: Alle IdP-Konten sind derzeit abgemeldet.
- `"unknown"`: Der Anmeldestatus dieses IdP ist nicht bekannt. Dies ist der Standardwert.

### Einstellen des Anmeldestatus

Der IdP sollte seinen Anmeldestatus aktualisieren, wenn sich ein Benutzer beim IdP an- oder abmeldet. Dies kann auf zwei verschiedene Arten erfolgen:

- Der {{httpheader("Set-Login")}} HTTP-Antwort-Header kann in einer Top-Level-Navigation oder einer gleich-originierten Teilressourcenanforderung gesetzt werden:

  ```http
  Set-Login: logged-in

  Set-Login: logged-out
  ```

- Die {{domxref("NavigatorLogin.setStatus", "Navigator.login.setStatus()")}}-Methode kann vom Ursprung des IdP aufgerufen werden:

  ```js
  /* Setzen Sie den Anmeldestatus auf eingeloggt */
  navigator.login.setStatus("logged-in");

  /* Setzen Sie den Anmeldestatus auf abgemeldet */
  navigator.login.setStatus("logged-out");
  ```

### Wie sich der Anmeldestatus auf den föderierten Anmeldefluss auswirkt

Wenn ein [RP einen föderierten Anmeldeversuch unternimmt](/de/docs/Web/API/FedCM_API/RP_sign-in), wird der Anmeldestatus überprüft:

- Wenn der Anmeldestatus `"logged-in"` ist, wird eine Anfrage an den [`accounts_endpoint`](#der_kontolisten-endpunkt) des IdP gestellt und verfügbare Anmeldungen werden dem Benutzer im vom Browser bereitgestellten FedCM-Dialog angezeigt.
- Wenn der Anmeldestatus `"logged-out"` ist, lehnt das von der FedCM `get()`-Anfrage zurückgegebene Versprechen ab, ohne eine Anfrage an den Kontolisten-Endpunkt zu stellen. In einem solchen Fall liegt es am Entwickler, den Fluss zu verwalten, z.B. indem er den Benutzer auffordert, sich bei einem geeigneten IdP anzumelden.
- Wenn der Anmeldestatus `"unknown"` ist, wird eine Anfrage an den Kontolisten-Endpunkt des IdP gestellt und der Anmeldestatus wird je nach Antwort aktualisiert:
  - Wenn der Endpunkt eine Liste von verfügbaren Anmeldungen zurückgibt, aktualisieren Sie den Status auf `"logged-in"` und zeigen Sie die Anmeldeoptionen dem Benutzer im vom Browser bereitgestellten FedCM-Dialog an.
  - Wenn der Endpunkt keine Konten zurückgibt, aktualisieren Sie den Status auf `"logged-out"`; das von der FedCM `get()`-Anfrage zurückgegebene Versprechen lehnt dann ab.

### Was passiert, wenn der Browser und der Anmeldestatus des IdP nicht synchron sind?

Trotz der Tatsache, dass die Login Status API den Browser über den Anmeldestatus des IdP informiert, ist es möglich, dass der Browser und der IdP nicht synchron sind. Zum Beispiel könnten die IdP-Sitzungen ablaufen, was bedeutet, dass alle Benutzerkonten abgemeldet werden, während der Anmeldestatus weiterhin auf `"logged-in"` gesetzt ist (die Anwendung konnte den Anmeldestatus nicht auf `"logged-out"` setzen). In einem solchen Fall wird, wenn ein föderierter Anmeldeversuch unternommen wird, eine Anfrage an den Kontolisten-Endpunkt des IdP gestellt, aber es werden keine verfügbaren Konten zurückgegeben, da die Sitzung nicht mehr verfügbar ist.

Wenn dies geschieht, kann der Browser dem Benutzer dynamisch erlauben, sich beim IdP anzumelden, indem er die Anmeldeseite des IdP in einem Dialog öffnet (die Anmelde-URL ist in der [Konfigurationsdatei](#stellen_sie_eine_konfigurationsdatei_und_endpunkte_bereit) des IdP im `login_url`-Eintrag zu finden). Die genaue Natur dieses Ablaufs bleibt dem Browser überlassen; zum Beispiel [Chrome handhabt es so](https://developers.google.com/privacy-sandbox/blog/fedcm-chrome-120-updates#what_if_the_user_session_expires_let_the_user_sign_in_through_a_dynamic_login_flow).

Sobald der Benutzer beim IdP angemeldet ist, sollte der IdP:

- Den Browser informieren, dass der Benutzer angemeldet ist, indem er den [Anmeldestatus](#einstellen_des_anmeldestatus) auf `"logged-in"` setzt.
- Den Anmeldedialog schließen, indem er die {{domxref("IdentityProvider.close_static", "IdentityProvider.close()")}}-Methode aufruft.

## Siehe auch

- [Federated Credential Management API](https://developers.google.com/privacy-sandbox/cookies/fedcm) auf developers.google.com (2023)
