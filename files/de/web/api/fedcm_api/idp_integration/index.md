---
title: Integration des Identitätsanbieters mit FedCM
slug: Web/API/FedCM_API/IDP_integration
l10n:
  sourceCommit: d7a0ef33dfce20818a160557b5a72d6565cec254
---

{{DefaultAPISidebar("FedCM API")}}

Dieser Artikel beschreibt alle Schritte, die ein {{Glossary("Identity_provider", "Identitätsanbieter")}} (IdP) unternehmen muss, um sich mit der Federated Credential Management (FedCM) API zu integrieren.

## Schritte zur IdP-Integration

Um sich mit FedCM zu integrieren, muss ein IdP Folgendes tun:

1. [Bereitstellung einer Well-Known-Datei](#bereitstellung_einer_well-known-datei) zur Identifizierung des IdP.
2. [Bereitstellung einer Konfigurationsdatei und von Endpunkten](#bereitstellung_einer_konfigurationsdatei_und_von_endpunkten) für Kontenlisten und Ausstellungsnachweisen (und optional, Metadaten des Clients).
3. [Aktualisierung des Anmeldestatus](#aktualisierung_des_anmeldestatus_mit_der_login_status_api) mit der Login Status API.

## Bereitstellung einer Well-Known-Datei

Es gibt ein potenzielles Datenschutzproblem, wobei ein [IdP in der Lage ist festzustellen, ob ein Benutzer eine relying party (RP) ohne ausdrückliche Zustimmung besucht hat](https://github.com/w3c-fedid/FedCM/issues/230). Dies hat Tracking-Implikationen, daher ist ein IdP verpflichtet, eine Well-Known-Datei bereitzustellen, um seine Identität zu verifizieren und dieses Problem zu mindern.

Die Well-Known-Datei wird über eine nicht authentifizierte [`GET`](/de/docs/Web/HTTP/Reference/Methods/GET)-Anfrage, die keine Umleitungen verfolgt, abgerufen. Dadurch wird effektiv verhindert, dass der IdP erfährt, wer die Anfrage gestellt hat und welche {{Glossary("Relying_party", "RP")}} versucht zu verbinden.

Die Well-Known-Datei muss von der {{Glossary("registrable_domain", "eintragbaren Domain")}} des IdP unter `/.well-known/web-identity` bereitgestellt werden. Wenn die IdP-Endpunkte beispielsweise unter `https://accounts.idp.example/` bereitgestellt werden, müssen sie eine Well-Known-Datei unter `https://idp.example/.well-known/web-identity` bereitstellen. Der Inhalt der Well-Known-Datei sollte die folgende JSON-Struktur aufweisen:

```json
{
  "provider_urls": ["https://accounts.idp.example/config.json"]
}
```

Das `provider_urls`-Element sollte ein Array von URLs enthalten, die auf gültige IdP-Konfigurationsdateien verweisen, die von RPs zur Interaktion mit dem IdP verwendet werden können. Die Länge des Arrays ist derzeit auf eins begrenzt.

## Der `Sec-Fetch-Dest` HTTP-Header

Alle Anfragen, die vom Browser über FedCM gesendet werden, enthalten einen `{{httpheader("Sec-Fetch-Dest")}}: webidentity`-Header. Alle IdP-Endpunkte, die gesicherte Anfragen erhalten (d.h. `accounts_endpoint` und `id_assertion_endpoint`), müssen diesen Header bestätigen, um Schutz gegen {{Glossary("CSRF", "CSRF")}}-Angriffe zu bieten.

## Bereitstellung einer Konfigurationsdatei und von Endpunkten

Die IdP-Konfigurationsdatei stellt eine Liste der Endpunkte bereit, die der Browser benötigt, um den Identitätsfederationsfluss zu verarbeiten und die Anmeldungen zu verwalten. Die Endpunkte müssen den gleichen Ursprung wie die Konfiguration haben.

Der Browser fordert die Konfigurationsdatei über die nicht authentifizierte [`GET`](/de/docs/Web/HTTP/Reference/Methods/GET)-Methode an, die keine Weiterleitungen verfolgt. Dadurch wird effektiv verhindert, dass der IdP erfährt, wer die Anfrage gestellt hat und welche RP versucht zu verbinden.

Die Konfigurationsdatei (in unserem Beispiel gehostet unter `https://accounts.idp.example/config.json`) sollte die folgende JSON-Struktur aufweisen:

```json
{
  "accounts_endpoint": "/accounts.php",
  "account_label": "developer",
  "supports_use_other_account": true,
  "client_metadata_endpoint": "/client_metadata.php",
  "disconnect_endpoint": "/disconnect.php",
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
  - : Die URL für den Kontenlisten-Endpunkt, der eine Liste der Konten zurückgibt, bei denen der Benutzer derzeit beim IdP angemeldet ist. Der Browser verwendet diese, um eine Liste von Anmeldeoptionen zu erstellen, die dem Benutzer in der browsergesteuerten FedCM-Benutzeroberfläche angezeigt werden.
- `account_label` {{optional_inline}}
  - : Ein String, der, falls vorhanden, einen Bezeichner für eine Teilmenge von Konten angibt, die zurückgegeben werden sollen, wenn dieser IdP für die föderierte Authentifizierung verwendet wird. Wenn eine `get()`-Anfrage gestellt wird, werden nur Konten zurückgegeben, die diesen String in ihren `label_hints`-Parametern enthalten, vom [accounts endpoint](#der_kontenlisten-endpunkt).
- `supports_use_other_account` {{optional_inline}}
  - : Ein boolescher Wert, der standardmäßig auf `false` gesetzt ist; wenn er auf `true` gesetzt ist, bedeutet dies, dass Benutzer mit einem anderen Konto angemeldet werden können, als dem, bei dem sie derzeit angemeldet sind (sofern der IdP mehrere Konten unterstützt). Dies gilt nur für `get()`-Anfragen, die [aktiven Modus](/de/docs/Web/API/IdentityCredentialRequestOptions#active) angeben.
    > [!NOTE]
    > In der Anmelde-Benutzeroberfläche des Browsers wird dies wahrscheinlich als eine Art "Anderes Konto wählen"-Schaltfläche dargestellt.
- `client_metadata_endpoint` {{optional_inline}}
  - : Die URL für den Metadaten-Endpunkt des Clients, der URLs bereitstellt, die auf die Metadaten und die Nutzungsbedingungen der RP verweisen, die in der FedCM-Benutzeroberfläche verwendet werden sollen.
- `disconnect_endpoint` {{optional_inline}}
  - : Die URL für den Endpunkt zur Trennung, der von der RP verwendet wird, um sich über die [`IdentityCredential.disconnect()`](/de/docs/Web/API/IdentityCredential/disconnect_static)-Methode vom IdP zu trennen.
- `id_assertion_endpoint`
  - : Die URL für den ID-Ausstellungs-Endpunkt, die, wenn gültige Benutzeranmeldeinformationen gesendet werden, mit einem Validierungstoken antwortet, das die RP verwenden kann, um die Authentifizierung zu validieren.
- `login_url`
  - : Die Anmeldeseite-URL, damit der Benutzer sich beim IdP anmelden kann.
- `branding` {{optional_inline}}
  - : Enthält Branding-Informationen, die in der vom Browser bereitgestellten FedCM-Benutzeroberfläche verwendet werden, um ihr Aussehen gemäß den Wünschen des IdP anzupassen. Die bereitgestellte Icon-Größe muss im passiven Modus größer oder gleich `25` (`25px`) und im aktiven Modus größer oder gleich `40` (`40px`) sein (siehe [Aktiver versus passiver Modus](/de/docs/Web/API/FedCM_API/RP_sign-in#active_versus_passive_mode) für weitere Details).

Die folgende Tabelle fasst die verschiedenen Anfragen zusammen, die von der FedCM-API gestellt werden:

| Endpunkt/Ressource         | Methode | Gesichert (mit Cookies) | Beinhaltet {{httpheader("Origin")}} |
| -------------------------- | ------- | ----------------------- | ----------------------------------- |
| `well-known`/`config.json` | `GET`   | Nein                    | Nein                                |
| `accounts_endpoint`        | `GET`   | Ja                      | Nein                                |
| `client_metadata_endpoint` | `GET`   | Nein                    | Ja                                  |
| `disconnect_endpoint`      | `POST`  | Ja                      | Ja                                  |
| `id_assertion_endpoint`    | `POST`  | Ja                      | Ja                                  |

> [!NOTE]
> Eine Beschreibung des FedCM-Flusses, in dem auf diese Endpunkte zugegriffen wird, finden Sie unter [FedCM-Anmeldefluss](/de/docs/Web/API/FedCM_API/RP_sign-in#fedcm_sign-in_flow).

> [!NOTE]
> Keine der von der FedCM-API zu den hier detaillierten Endpunkten gestellten Anforderungen erlaubt es, redirects zu folgen, aus Datenschutzgründen.

### Der Kontenlisten-Endpunkt

Der Browser sendet authentifizierte Anfragen (d.h. mit einem Cookie, das den Benutzer identifiziert, der angemeldet ist) an diesen Endpunkt über die `GET`-Methode. Die Anfrage hat keinen `client_id`-Parameter, {{httpheader("Origin")}}-Header oder {{httpheader("Referer")}}-Header. Dies verhindert effektiv, dass der IdP erfährt, bei welcher RP der Benutzer sich anmelden möchte. Die zurückgegebene Kontenliste ist RP-agnostisch.

Zum Beispiel:

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
      "id": "elaina_maduro",
      "given_name": "Elaina",
      "name": "Elaina Maduro",
      "email": "elaina_maduro@idp.example",
      "tel": "+491234567890",
      "username": "elaina420",
      "picture": "https://idp.example/profile/123",
      "approved_clients": ["123", "456", "789"],
      "domain_hints": ["rp1.example.com", "rp3.example.com"],
      "label_hints": ["developer", "admin"],
      "login_hints": ["elaina_maduro", "elaina_maduro@idp.example"]
    },
    {
      "id": "elly",
      "given_name": "Elly",
      "username": "elly123",
      "email": "Elly@idp.example",
      "picture": "https://idp.example/profile/456",
      "approved_clients": ["abc", "def", "ghi"],
      "domain_hints": ["rp1.example.com", "rp2.example.com"],
      "label_hints": ["developer", "test"],
      "login_hints": ["elly", "elly@idp.example"]
    }
  ]
}
```

Dies umfasst die folgenden Informationen, wobei `name`, `email`, `username` und `tel` optional sind, aber mindestens eines von ihnen muss vorhanden und nicht leer sein.

- `id`
  - : Die eindeutige ID des Benutzers.
- `name` {{optional_inline}}
  - : Der Nachname des Benutzers.
- `email` {{optional_inline}}
  - : Die E-Mail-Adresse des Benutzers.
- `tel` {{optional_inline}}
  - : Die Telefonnummer des Benutzers. Kann in jedem Format sein.
- `username` {{optional_inline}}
  - : Der Benutzername des Benutzers.
- `given_name` {{optional_inline}}
  - : Der Vorname des Benutzers.
- `picture` {{optional_inline}}
  - : Die URL des Benutzerprofilbilds.
- `approved_clients` {{optional_inline}}
  - : Ein Array von RP-Clients, die der Benutzer registriert hat.
- `domain_hints` {{optional_inline}}
  - : Ein Array von Domains, mit denen das Konto verbunden ist. Die RP kann einen `get()`-Aufruf machen, der eine [`domainHint`](/de/docs/Web/API/IdentityCredentialRequestOptions#domainhint)-Eigenschaft enthält, um die zurückgegebenen Konten nach Domain zu filtern.
- `label_hints` {{optional_inline}}
  - : Ein Array von Strings, die Bezeichnungen angeben, die Kontoarten definieren, mit denen das Konto identifiziert wird. Wenn die Konfigurationsdatei ein [`account_label`](#account_label) angibt, werden nur Konten, die dieses Label in ihren `label_hints` enthalten, von dem Kontenlisten-Endpunkt zurückgegeben.
- `login_hints` {{optional_inline}}
  - : Ein Array von Zeichenfolgen, die das Konto repräsentieren. Diese Zeichenfolgen werden verwendet, um die Liste der Kontooptionen zu filtern, die der Browser dem Benutzer zur Anmeldung anbietet. Dies geschieht, wenn die `loginHint`-Eigenschaft innerhalb von [`identity.providers`](/de/docs/Web/API/IdentityCredentialRequestOptions#providers) in einem verwandten `get()`-Aufruf bereitgestellt wird. Jedes Konto mit einer Zeichenfolge in seinem `login_hints`-Array, die mit dem bereitgestellten `loginHint` übereinstimmt, wird aufgenommen.

> [!NOTE]
> Wenn der Benutzer nicht bei einem IdP-Konten angemeldet ist, sollte der Endpunkt mit [HTTP 401 (Unauthorized)](/de/docs/Web/HTTP/Reference/Status/401) antworten.

### Der Metadaten-Endpunkt des Clients

Der Browser sendet ungesicherte Anfragen an diesen Endpunkt über die `GET`-Methode, wobei der `clientId` als Parameter in den `get()`-Aufruf übergeben wird.

Zum Beispiel:

```http
GET /client_metadata.php?client_id=1234 HTTP/1.1
Host: idp.example
Origin: https://rp.example/
Accept: application/json
Sec-Fetch-Dest: webidentity
```

Die Antwort auf eine erfolgreiche Anfrage umfasst URLs, die auf die Metadaten- und Nutzungsbedingungen-Seiten der RP verweisen, die in der vom Browser bereitgestellten FedCM-Benutzeroberfläche verwendet werden sollen. Diese sollten der folgenden JSON-Struktur folgen:

```json
{
  "privacy_policy_url": "https://rp.example/privacy_policy.html",
  "terms_of_service_url": "https://rp.example/terms_of_service.html"
}
```

### Der Endpunkt zur Trennung

Durch den Aufruf von [`IdentityCredential.disconnect()`](/de/docs/Web/API/IdentityCredential/disconnect_static) sendet der Browser eine Cross-Origin {{httpmethod("POST")}}-Anfrage mit Cookies und einem {{httpheader("Content-Type")}} von `application/x-www-form-urlencoded` an den Trennungs-Endpunkt mit den folgenden Informationen:

- `account_hint`
  - : Eine Zeichenfolge, die einen Kontohint angibt, den der IdP verwendet, um das zu trennende Konto zu identifizieren.
- `client_id`
  - : Eine Zeichenfolge, die den Client-Identifikator der RP angibt.

Zum Beispiel:

```http
POST /disconnect HTTP/1.1
Host: idp.example
Origin: rp.example
Content-Type: application/x-www-form-urlencoded
Cookie: 0x123
Sec-Fetch-Dest: webidentity

account_hint=account456&client_id=rp123
```

Nach Erhalt der Anfrage sollte der IdP-Server:

1. Auf die Anfrage mit [CORS (Cross-Origin Resource Sharing)](/de/docs/Web/HTTP/Guides/CORS) antworten.
2. Verifizieren, dass die Anfrage einen {{httpheader("Sec-Fetch-Dest")}} HTTP-Header mit einer Anweisung von `webidentity` enthält.
3. Den {{httpheader("Origin")}}-Header mit dem RP-Ursprung abgleichen, der durch den `client_id` bestimmt wurde. Das Versprechen ablehnen, wenn sie nicht übereinstimmen.
4. Das Konto finden, das mit dem `account_hint` übereinstimmt.
5. Das Benutzerkonto aus der Liste der verbundenen Konten der RP trennen.
6. Mit der identifizierten `account_id` des Benutzers im JSON-Format antworten:

   ```json
   {
     "account_id": "account456"
   }
   ```

> [!NOTE]
> Wenn der IdP alle mit der RP verbundenen Konten trennen möchte, kann er eine Zeichenfolge übergeben, die mit keiner `account_id` übereinstimmt, zum Beispiel `"account_id": "*"`.

### Der ID-Ausstellungs-Endpunkt

Der Browser sendet authentifizierte Anfragen an diesen Endpunkt über die [`POST`](/de/docs/Web/HTTP/Reference/Methods/POST)-Methode, mit einem Content-Type von `application/x-www-form-urlencoded`. Die Anfrage enthält auch eine Nutzlast mit Details über den versuchten Anmeldevorgang und das zu validierende Konto.

Sie sollte folgendermaßen aussehen:

```http
POST /assertion.php HTTP/1.1
Host: idp.example
Origin: https://rp.example/
Content-Type: application/x-www-form-urlencoded
Cookie: 0x23223
Sec-Fetch-Dest: webidentity
account_id=123&client_id=client1234&disclosure_text_shown=true&is_auto_selected=true
```

Eine Anfrage an diesen Endpunkt wird gesendet, wenn der Benutzer ein Konto auswählt, um sich über die entsprechende Browser-Benutzeroberfläche anzumelden. Wenn gültige Benutzeranmeldeinformationen gesendet werden, sollte dieser Endpunkt mit einem Validierungstoken antworten, das die RP verwenden kann, um den Benutzer auf ihrem eigenen Server zu validieren, gemäß den Nutzungsanweisungen, die vom IdP bereitgestellt werden, den sie für die Identitätsfederation verwenden. Sobald die RP den Benutzer validiert hat, können sie ihn anmelden, für ihren Dienst registrieren, etc.

```json
{
  "token": "***********"
}
```

Die Anfragenutzlast enthält die folgenden Parameter:

- `client_id`
  - : Der Client-Identifikator der RP (der mit dem `clientId` aus der ursprünglichen `get()`-Anfrage übereinstimmt).
- `account_id`
  - : Die eindeutige ID des Benutzerkontos, das angemeldet werden soll (die mit der `id` des Benutzers aus der Antwort des Kontenlisten-Endpunkts übereinstimmt).
- `params` {{optional_inline}}
  - : Die Serialisierung des `params`-Objekts aus der ursprünglichen `get()`-Anfrage.
- `disclosure_text_shown`
  - : Eine Zeichenfolge von `"true"` oder `"false"`, die angibt, ob der Offenlegungstext angezeigt wurde oder nicht. Der Offenlegungstext ist die den Benutzern gezeigte Information (die Links zu den Nutzungsbedingungen und Datenschutzrichtlinien enthalten kann, wenn vorhanden), wenn der Benutzer beim IdP angemeldet ist, aber kein Konto speziell auf der aktuellen RP hat (in diesem Fall müssen sie sich damit entscheiden, als ihre IdP-Identität "Weiterzumachen..." und dann ein entsprechendes Konto auf der RP zu erstellen).
- `is_auto_selected`
  - : Eine Zeichenfolge von `"true"` oder `"false"`, die angibt, ob die Authentifizierungsvalidierungsanfrage infolge einer [automatischen Neuauthentifizierung](/de/docs/Web/API/FedCM_API/RP_sign-in#auto-reauthentication) ausgegeben wurde, d.h. ohne Benutzermediation. Dies kann auftreten, wenn der [`get()`](/de/docs/Web/API/CredentialsContainer/get)-Aufruf mit einer [`mediation`](/de/docs/Web/API/CredentialsContainer/get#mediation)-Optionswert von `"optional"` oder `"silent"` ausgegeben wird. Es ist nützlich für den IdP zu wissen, ob eine automatische Neuauthentifizierung für die Leistungsbewertung aufgetreten ist und ob eine höhere Sicherheit gewünscht wird. Beispielsweise könnte der IdP einen Fehlercode zurückgeben, der der RP mitteilt, dass eine explizite Benutzermediation erforderlich ist (`mediation="required"`).

> [!NOTE]
> Wenn der [`get()`](/de/docs/Web/API/CredentialsContainer/get)-Aufruf erfolgreich ist, wird der `is_auto_selected`-Wert auch an die RP über die [`IdentityCredential.isAutoSelected`](/de/docs/Web/API/IdentityCredential/isAutoSelected)-Eigenschaft kommuniziert.

#### CORS-Header für den ID-Ausstellungs-Endpunkt

Die Antwort vom ID-Ausstellungs-Endpunkt muss die {{httpheader("Access-Control-Allow-Origin")}}- und {{httpheader("Access-Control-Allow-Credentials")}}-Header enthalten, und die `Access-Control-Allow-Origin` muss den Ursprung des Anfragestellers beinhalten:

```http
Access-Control-Allow-Origin: https://rp.example
Access-Control-Allow-Credentials: true
```

Beachten Sie, dass `Access-Control-Allow-Origin` auf den spezifischen Ursprung des Anfragestellers (der RP) gesetzt werden muss und nicht auf den Wert `*`.

Ohne diese Header schlägt die Anfrage mit einem Netzwerkfehler fehl.

#### Fehlerantworten des ID-Ausstellungs-Endpunkts

Wenn der IdP kein Token ausstellen kann — zum Beispiel, wenn der Client nicht autorisiert ist — antwortet der ID-Ausstellungs-Endpunkt mit einer Fehlerantwort, die Informationen über die Art des Fehlers enthält. Beispielsweise:

```json
{
  "error": {
    "code": "access_denied",
    "url": "https://idp.example/error?type=access_denied"
  }
}
```

Die Felder der Fehlerantwort sind wie folgt:

- `code` {{optional_inline}}
  - : Eine Zeichenfolge. Dies kann entweder ein bekannter Fehler aus der [OAuth 2.0-spezifizierten Fehlerliste](https://datatracker.ietf.org/doc/html/rfc6749#section-4.1.2.1) oder eine beliebige Zeichenkette sein.
- `url` {{optional_inline}}
  - : Eine URL. Dies sollte eine Webseite sein, die für Benutzer lesbare Informationen über den Fehler enthält, die angezeigt werden können, wie z.B. wie der Fehler behoben oder der Kundendienst kontaktiert werden kann. Die URL muss sitespezifisch mit der Konfigurations-URL des IdP sein.

Diese Informationen können auf verschiedene Weise verwendet werden:

- Der Browser kann dem Benutzer eine benutzerdefinierte Benutzeroberfläche anzeigen, die ihm mitteilt, was schiefgelaufen ist (siehe die [Chrome-Dokumentation](https://privacysandbox.google.com/blog/fedcm-chrome-120-updates#error-api) für ein Beispiel). Beachten Sie, dass der Anfragefehler, wenn der IdP-Server nicht verfügbar ist, natürlich keine Informationen zurückgeben kann. In solchen Fällen wird der Browser dies mit einer generischen Nachricht melden.
- Der zugehörige RP [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get)-Aufruf, der zum Versuch der Anmeldung verwendet wurde, wird sein Versprechen mit einem [`IdentityCredentialError`](/de/docs/Web/API/IdentityCredentialError) ablehnen, der die Fehlerinformationen enthält. Eine RP kann diesen Fehler abfangen und dann die benutzerdefinierte Benutzeroberfläche des Browsers mit einigen Informationen ergänzen, um dem Benutzer bei einem zukünftigen Anmeldeversuch zum Erfolg zu verhelfen.

## Aktualisierung des Anmeldestatus mit der Login Status API

Die **Login Status API** ermöglicht es einem IdP, einen Browser über seinen Anmeldestatus in diesem bestimmten Browser zu informieren — damit meinen wir "ob derzeit Benutzer im aktuellen Browser beim IdP angemeldet sind oder nicht". Der Browser speichert diesen Status für jeden IdP; die FedCM API verwendet ihn dann, um die Anzahl der Anfragen an den IdP zu reduzieren (da keine Zeit damit verschwendet werden muss, Konten anzufordern, wenn keine Benutzer beim IdP angemeldet sind). Sie mindert auch [potenzielle Timing-Angriffe](https://github.com/w3c-fedid/FedCM/issues/447).

Für jeden bekannten IdP (identifiziert durch seine Konfigurations-URL) hält der Browser eine Tri-State-Variable bereit, die den Anmeldestatus mit drei möglichen Werten darstellt:

- `"logged-in"`: Der IdP hat mindestens ein Benutzerkonto angemeldet. Beachten Sie, dass RP und Browser zu diesem Zeitpunkt nicht wissen, um welchen Benutzer es sich handelt. Informationen zu spezifischen Benutzern werden zu einem späteren Zeitpunkt im FedCM-Fluss vom [`accounts_endpoint`](#der_kontenlisten-endpunkt) des IdP zurückgegeben.
- `"logged-out"`: Aktuell sind alle IdP-Konten abgemeldet.
- `"unknown"`: Der Anmeldestatus dieses IdP ist nicht bekannt. Dies ist der Standardwert.

### Einstellen des Anmeldestatus

Der IdP sollte seinen Anmeldestatus aktualisieren, wenn ein Benutzer sich beim IdP an- oder abmeldet. Dies kann auf zwei verschiedene Arten geschehen:

- Der {{httpheader("Set-Login")}} HTTP-Antwort-Header kann in einer Top-Level-Navigation oder einer gleichstufigen Subresource-Anfrage gesetzt werden:

  ```http
  Set-Login: logged-in

  Set-Login: logged-out
  ```

- Die [`Navigator.login.setStatus()`](/de/docs/Web/API/NavigatorLogin/setStatus)-Methode kann vom IdP-Ursprung aus aufgerufen werden:

  ```js
  /* Set logged-in status */
  navigator.login.setStatus("logged-in");

  /* Set logged-out status */
  navigator.login.setStatus("logged-out");
  ```

### Wie sich der Anmeldestatus auf den föderierten Anmeldevorgang auswirkt

Wenn eine [RP föderierte Anmeldung versucht](/de/docs/Web/API/FedCM_API/RP_sign-in), wird der Anmeldestatus überprüft:

- Wenn der Anmeldestatus eines IdP `"logged-in"` ist, wird eine Anfrage an den [Kontenlisten-Endpunkt](#der_kontenlisten-endpunkt) gesendet, und verfügbare Konten zur Anmeldung werden dem Benutzer im browsergesteuerten FedCM-Dialog angezeigt.
- Wenn der Anmeldestatus aller IdPs `"logged-out"` ist, lehnt das FedCM `get()`-Anfrageversprechen ab, ohne eine Anfrage an den Kontenlisten-Endpunkt zu senden. In einem solchen Fall liegt es am Entwickler, den Prozess zu handhaben, zum Beispiel indem er den Benutzer auffordert, sich bei einem geeigneten IdP anzumelden.
- Wenn der Anmeldestatus eines IdP `"unknown"` ist, wird eine Anfrage an den Kontenlisten-Endpunkt gesendet und der Anmeldestatus je nach Antwort aktualisiert:
  - Wenn der Endpunkt eine Liste verfügbarer Konten zur Anmeldung zurückgibt, den Status auf `"logged-in"` aktualisieren und die Anmeldeoptionen im browsergesteuerten FedCM-Dialog dem Benutzer anzeigen.
  - Wenn der Endpunkt keine Konten zurückgibt, den Status auf `"logged-out"` aktualisieren; das Versprechen, das von der FedCM `get()`-Anfrage zurückgegeben wird, wird abgelehnt, wenn keine anderen `logged-in` IdPs verfügbar sind.

### Was passiert, wenn der Browser und der IdP-Anmeldestatus außer Sync geraten?

Trotz der Login Status API, die den Browser über den IdP-Anmeldestatus informiert, ist es möglich, dass der Browser und ein IdP außer Sync geraten. Zum Beispiel könnten die IdP-Sitzungen ablaufen, was bedeutet, dass alle Benutzerkonten abgemeldet werden, aber der Anmeldestatus noch auf `"logged-in"` gesetzt ist (die Anwendung konnte den Anmeldestatus nicht auf `"logged-out"`setzen). In einem solchen Fall wird, wenn eine föderierte Anmeldung versucht wird, eine Anfrage an den Kontenlisten-Endpunkt des IdP gestellt, aber keine verfügbaren Konten werden zurückgegeben, weil die Sitzung nicht mehr verfügbar ist.

In einem solchen Fall kann der Browser einem Benutzer dynamisch erlauben, sich bei einem IdP anzumelden, indem die Anmeldeseite des IdP in einem Dialog geöffnet wird (die Anmelde-URL findet sich in der [Konfigurationsdatei](#bereitstellung_einer_konfigurationsdatei_und_von_endpunkten) des IdP `login_url`). Die genaue Natur dieses Flusses liegt im Ermessen des Browsers; beispielsweise behandelt [Chrome es so](https://privacysandbox.google.com/blog/fedcm-chrome-120-updates#what_if_the_user_session_expires_let_the_user_sign_in_through_a_dynamic_login_flow).

Sobald der Benutzer beim IdP angemeldet ist, sollte der IdP:

- Den Browser darüber informieren, dass der Benutzer angemeldet ist, indem [der Anmeldestatus](#einstellen_des_anmeldestatus) auf `"logged-in"` gesetzt wird.
- Den Anmeldedialog schließen, indem die [`IdentityProvider.close()`](/de/docs/Web/API/IdentityProvider/close_static)-Methode aufgerufen wird.

## Siehe auch

- [Federated Credential Management API](https://developer.chrome.com/docs/identity/fedcm/overview) auf developer.chrome.com (2023)
