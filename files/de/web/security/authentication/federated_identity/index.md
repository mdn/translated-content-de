---
title: Föderierte Identität
slug: Web/Security/Authentication/Federated_identity
l10n:
  sourceCommit: a516a9818e8cef06c626d436ee1d73fc6d87ec51
---

In einem **föderierten Identitätssystem** delegiert eine Website die Authentifizierung an eine dritte Partei.

- Die dritte Partei, die üblicherweise als {{Glossary("identity_provider", "Identity Provider (IdP)")}} bezeichnet wird, verwaltet die Zugangsdaten eines Benutzers und kann Benutzer authentifizieren.
- Die Website, die üblicherweise als {{Glossary("relying_party", "Relying Party (RP)")}} bezeichnet wird, vertraut dem IdP, Aussagen über die Identität eines Benutzers zu machen.

Wenn der Benutzer sich auf der Website anmelden möchte, leitet die Website ihn zum IdP weiter. Der Benutzer authentifiziert sich beim IdP, und der IdP gibt ein Token an die Website zurück, das bestätigt, dass der Benutzer erfolgreich authentifiziert wurde. Die Website überprüft, ob das Token gültig ist, und wenn ja, meldet sie den Benutzer an.

![Übersicht über die Anmeldung mittels föderierter Identität.](federated-identity-overview.svg)

> [!NOTE]
> Föderierte Identität ist nicht wirklich eine Authentifizierungsmethode: es handelt sich vielmehr um eine Architektur, innerhalb derer verschiedene Authentifizierungsmethoden verwendet werden könnten. Ein IdP könnte also wählen, Benutzer mit einer oder mehreren Methoden zu authentifizieren, wie zum Beispiel mit traditionellen Passwörtern, Einmalpasswörtern, Biometrie oder Passkeys.

Dieses Modell bringt einige Vorteile für sowohl Benutzer als auch Websites:

- Websites müssen keine eigene Authentifizierung implementieren oder Benutzerdaten {{Glossary("credential", "credentials")}} sicher handhaben.
- Ein einzelner IdP kann Benutzer für viele verschiedene Websites authentifizieren. Das bedeutet, dass der Benutzer nicht für jede Seite unterschiedliche Zugangsdaten verwenden muss: wenn Passwörter verwendet werden, reduziert dies das Risiko der Wiederverwendung von Passwörtern oder der Wahl schwacher, leicht zu merkender Passwörter.
- Wenn ein Benutzer bereits ein Konto bei einem IdP hat, dem Ihre Website vertraut, dann ist es für die Benutzer einfacher, sich für Ihre Website zu registrieren, da sie keine neuen Zugangsdaten speziell für Ihre Website benötigen.

In diesem Leitfaden werden wir untersuchen, wie eine Website mit einem IdP zusammenarbeiten kann, um eine föderierte Anmeldung für ihre Benutzer zu ermöglichen. Wir werden abdecken:

- Die Hauptabläufe, die im [OpenID Connect (OIDC)](https://openid.net/developers/how-connect-works/) Protokoll definiert sind, welches der dominierende Standard für föderierte Identität ist, und gute Praktiken, die bei deren Implementierung zu beachten sind.
- Wie Browser-Einschränkungen bei Drittanbieter-Cookies Probleme für Implementierungen föderierter Identität schaffen.
- Die [Federated Credential Management (FedCM) API](/de/docs/Web/API/FedCM_API), die die Rolle des Browsers aktiver macht, um die Rolle des RP zu vereinfachen und die Abhängigkeit von Drittanbieter-Cookies zu vermeiden.
- Wie eine Website einen IdP auswählen kann, mit dem sie zusammenarbeiten möchte, und wie diese Wahl den Prozess der Implementierung einer föderierten Anmeldung beeinflussen kann.

## OpenID Connect

Der am häufigsten für föderierte Identität im Web verwendete Standard ist [OpenID Connect (OIDC)](https://openid.net/developers/how-connect-works/), ein Authentifizierungsprotokoll, das auf dem [OAuth 2.0 Autorisierungs-Framework](https://datatracker.ietf.org/doc/html/rfc6749) aufgebaut ist.

### Authentifizierungsfluss

In diesem Abschnitt beginnen wir mit der Durchsicht des Haupt-Authentifizierungsflusses, der in OIDC definiert ist. Es gibt viele Optionen innerhalb des OIDC Authentifizierungsflusses: in diesem Durchgang präsentieren wir die empfohlenen Optionen und sprechen später über Alternativen.

Dieser Fluss ist in der [OpenID Connect Core](https://openid.net/specs/openid-connect-core-1_0.html) Spezifikation definiert.

Als Voraussetzung muss das RP dem IdP bekannt sein:

- Der IdP benötigt einen Bezeichner für das RP, der Client-ID genannt wird.
- Das RP muss sich beim IdP authentifizieren können.

Die Authentifizierung kann ein gemeinsames Geheimnis, genannt Client-Secret, oder einen anderen Mechanismus wie TLS-Client-Authentifizierung verwenden.

> [!NOTE]
> Die OpenID-Spezifikationen verwenden den Begriff "OpenID Provider" (OP) für das, was wir in diesem Leitfaden als IdP bezeichnen.

![Der OIDC Authentifizierungsfluss](oidc-auth-flow.svg)

Das erste, was man hier bemerken sollte, ist, dass der Fluss aus zwei Teilen besteht.

- **Authentifizierungsanfrage**: Das RP richtet eine Anfrage an den _Autorisierungsendpunkt_ des IdP und bittet den IdP, den Benutzer zu authentifizieren. Der IdP authentifiziert den Benutzer und gibt einen _Autorisierungscode_ an das RP zurück. Der Code verfällt nach kurzer Zeit (es wird empfohlen, nicht mehr als 10 Minuten).
- **Token-Anfrage**: Das RP sendet den Autorisierungscode an einen separaten Endpunkt beim IdP, genannt _Token-Endpunkt_, und dieser Endpunkt antwortet mit einem Objekt, das zwei Tokens enthält:
  - Ein _Zugriffstoken_, das es dem Benutzer ermöglicht, auf bestimmte Ressourcen auf der Website zuzugreifen (wie ein API-Schlüssel)
  - Ein _ID-Token_, das den Benutzer identifiziert und es dem RP ermöglicht, den Benutzer anzumelden.

In der Authentifizierungsanfrage:

1. Der Benutzer bittet darum, sich beim RP anzumelden.

2. Das RP leitet den Browser zum Autorisierungsendpunkt des IdP weiter und bittet ihn, den Benutzer zu authentifizieren. Das RP kann verschiedene Parameter zusammen mit der Anfrage übermitteln, einschließlich:
   - `client_id`: Identifiziert dieses RP gegenüber dem IdP.
   - `response_type`: Immer `"code"`, wenn wir den hier beschriebenen zweiteiligen Fluss verwenden, der die empfohlene Option ist.
   - `redirect_uri`: Die URL im RP, zu der der IdP weiterleiten sollte, sobald er versucht hat, den Benutzer zu authentifizieren. Dies ist die URL, an die der IdP den Autorisierungscode liefert.
   - `code_challenge`: Ein kryptografischer {{Glossary("hash_function", "Hash")}} eines spezifischen Geheimnisses für diese Autorisierungsanfrage, der vom Token-Endpunkt verwendet wird, um sicherzustellen, dass die Token-Anfrage wirklich das Gegenstück zu dieser Autorisierungsanfrage ist.
   - `scope`: Eine Liste von Zeichenfolgen, die angeben, auf welche Benutzerdaten das RP zugreifen möchte.

3. Der IdP authentifiziert den Benutzer. Das Protokoll schreibt keine bestimmte Methode dafür vor: der IdP könnte ein Passwort, ein Einmalpasswort, eine Biometrie oder eine andere geeignete Methode verwenden.

4. Wenn die Authentifizierung erfolgreich ist, generiert der IdP den Autorisierungscode. Er speichert auch den `code_challenge`-Wert und verknüpft ihn mit dem Autorisierungscode. Der IdP leitet dann den Browser zur Weiterleitungs-URL des RP um und übergibt den Autorisierungscode als Parameter.

In der Token-Anfrage:

1. Das RP macht eine {{httpmethod("POST")}} Anfrage an den Token-Endpunkt des IdP. Diese Anfrage enthält die folgenden Parameter:
   - `client_id`: Identifiziert dieses RP gegenüber dem IdP.
   - `client_secret`: Das Geheimnis, das zur Authentifizierung des RP gegenüber dem IdP verwendet wird: dies könnte ein zuvor zwischen dem RP und dem IdP vereinbarter Wert sein. Anstelle eines gemeinsamen Geheimnisses könnten das RP und der IdP einen alternativen Mechanismus zur Client-Authentifizierung verwenden, wie zum Beispiel die TLS-Client-Authentifizierung.
   - `grant_type`: Dies sollte `"authorization_code"` sein.
   - `code`: Der Autorisierungscode.
   - `code_verifier`: Dies ist das ursprüngliche Geheimnis, das verwendet wurde, um den `code_challenge`-Parameter in der Authentifizierungsanfrage zu erstellen.

2. Der IdP validiert die Anfrage:
   - Er authentifiziert, dass die Anfrage von dem bestimmten RP stammt, indem er das Client-Secret oder eine andere Form der Client-Authentifizierung verwendet.
   - Er hasht den `code_verifier`-Parameter und überprüft dann, ob das Ergebnis mit dem `code_challenge` übereinstimmt.

3. Wenn die Anfrage gültig ist, antwortet der IdP mit zwei Tokens:
   - Ein Zugriffstoken, das dem Benutzer Zugang zu einigen Ressourcen im RP gewährt.
   - Ein ID-Token, das den Benutzer identifiziert. Dies ist ein kryptografisch signiertes [JSON Web Token](https://www.jwt.io/).

4. Das RP validiert die Tokens: Neben anderen Prüfungen verifiziert es die Signatur des IdP auf dem ID-Token. Wenn die Validierung erfolgreich ist, meldet das RP den Benutzer an.

### Sicherheitsfunktionen

In diesem Abschnitt werden wir die wichtigsten Sicherheitsfunktionen des OIDC-Authentifizierungsflusses zusammenfassen, den wir gerade beschrieben haben. Für die vollständigen Details, siehe [Best Current Practice for OAuth 2.0 Security](https://www.rfc-editor.org/rfc/rfc9700.html).

#### Autorisierungscodefluss

Der beschriebene zweistufige Fluss wird "Autorierungscodefluss" genannt. In einem alternativen Fluss, dem sogenannten "impliziten Fluss", existiert nur der erste Schritt, und die Antwort auf die Authentifizierungsanfrage enthält bereits die Zugangs- und ID-Tokens. Dies ist unsicher, da die Tokens der Frontend-Seite des RP ausgesetzt sind, die als viel weniger sicher als das Backend angesehen wird. Zum Beispiel könnte in einem erfolgreichen [XSS](/de/docs/Web/Security/Attacks/XSS)-Angriff oder wenn der Benutzer eine bösartige Browsererweiterung installiert, der Angreifer in der Lage sein, die Tokens des Benutzers zu stehlen.

Aus diesem Grund sollten Websites immer den Autorisierungscodefluss verwenden. Selbst wenn ein Angreifer den Autorisierungscode stehlen kann, muss er den Token-Endpunkt überreden, ihm die Tokens im Austausch gegen den Code zu geben.

#### Client-Authentifizierung

In dem beschriebenen Fluss authentifiziert sich das RP beim Token-Endpunkt, wenn es die Token-Anfrage stellt. Das bedeutet, dass, selbst wenn ein Angreifer den Autorisierungscode stiehlt, er sich erfolgreich als RP ausgeben muss, um die Tokens vom IdP zu erhalten.

Die OAuth-Spezifikation unterscheidet zwischen [_confidential_ und _public_ clients](https://datatracker.ietf.org/doc/html/rfc6749#section-2.1). Vertrauliche Clients sind im Wesentlichen RPs, die ein Geheimnis bewahren können, während öffentliche Clients solche sind, die es nicht können.

Die Spezifikation betrachtet Clients, die im Browser des Benutzers laufen, als öffentliche Clients, aus dem gleichen Grund, den wir bereits behandelt haben: Es ist zu einfach für einen Angreifer, über Angriffe wie XSS auf Geheimnisse in einem Browser zuzugreifen. Clients, die auf einem Web-_server_ laufen, sind vertrauliche Clients.

In OIDC dürfen nur vertrauliche Clients die Client-Authentifizierung verwenden, da nur vertrauliche Clients das Sicherheitsniveau der Client-Zugangsdaten aufrechterhalten können.

Das RP kann sich gegenüber dem IdP mit einem gemeinsamen Geheimnis authentifizieren, aber [es ist besser, eine Methode zu verwenden, die auf öffentlicher Schlüssel-Kryptographie basiert](https://www.rfc-editor.org/rfc/rfc9700.html#name-client-authentication), wie zum Beispiel die {{Glossary("TLS", "TLS")}}-Client-Authentifizierung.

#### Proof Key for Code Exchange (PKCE)

Die `code_challenge` und `code_verifier` Werte, die das RP in der Authentifizierungsanfrage und der Token-Anfrage bereitstellt, sind Teil eines Mechanismus namens _Proof Key for Code Exchange_ (PKCE), spezifiziert in {{rfc("7636")}}.

In der Authentifizierungsanfrage:

- Das RP generiert einen schwer zu erratenden Wert, der spezifisch für diese Authentifizierungsanfrage ist. Dieser Wert wird als _code verifier_ bezeichnet.
- Das RP erstellt einen {{Glossary("hash_function", "kryptografischen Hash")}} des Code-Verifiers und verwendet ihn als `code_challenge` Parameter in der Authentifizierungsanfrage.
- Der IdP speichert die Code-Challenge und verknüpft sie mit dem Autorisierungscode, den er an das RP zurückgibt.

In der Token-Anfrage:

- Das RP übergibt den Code-Verifier im _code_verifier_-Parameter.
- Der IdP hasht den Code-Verifier und vergleicht das Ergebnis mit der gespeicherten Code-Challenge: Wenn sie nicht übereinstimmen, wird die Token-Anfrage abgelehnt.

PKCE schützt vor zwei Angriffen: [CSRF gegen die Redirect-URL des RP](#csrf_gegen_die_redirect-url) und [Autorisierungscode-Injektion](#autorisierungscode-injektion).

##### CSRF gegen die Redirect-URL

In einem CSRF-Angriff trickst der Angreifer den Browser des Benutzers dazu, den Benutzer in das Konto des Angreifers einzuloggen. Dies kann verschiedene negative Effekte haben: Zum Beispiel stehen alle privaten Daten, die der Benutzer in das Konto hochlädt, dem Angreifer zur Verfügung und unter dessen Kontrolle.

Wenn PKCE nicht verwendet würde, funktioniert der CSRF-Angriff wie folgt:

1. Der Angreifer bittet darum, sich beim RP anzumelden. Das RP stellt eine Authentifizierungsanfrage an den IdP und der Angreifer authentifiziert sich beim IdP.

2. Der IdP generiert einen Autorisierungscode für den Angreifer und leitet den Browser des Angreifers zur Redirect-URL des RP um, mit dem Autorisierungscode als URL-Parameter.

3. Der Angreifer fängt diese Umleitung ab, extrahiert die Redirect-URL einschließlich des Autorisierungscodes, und beendet den Fluss.

4. Der Angreifer trickst den Benutzer dazu, die Redirect-URL zu klicken. Für das RP scheint dies eine Antwort vom IdP zu sein, die einer Authentifizierungsanfrage entspricht, die mit dem Benutzer gestartet wurde.

5. Das RP stellt eine Token-Anfrage an den IdP, einschließlich des Autorisierungscodes des Angreifers, den es von der Redirect-URL übernommen hat.

6. Der IdP antwortet mit den Tokens des Angreifers.

7. Das RP meldet den Benutzer im Konto des Angreifers an: Nun stehen alle Informationen oder Anweisungen, die sie bereitstellen, unter der Kontrolle des Angreifers.

Im Wesentlichen gelingt der Angriff, weil das RP nicht weiß, dass die Anfrage an die Redirect-URL keine Antwort auf eine Anfrage ist, die im Namen des Benutzers gestartet wurde.

Wenn PKCE verwendet wird:

- In Schritt 1 generiert das RP einen Code-Verifier für die Anfrage des Angreifers und sendet die gehashte Code-Challenge an den IdP.
- In Schritt 2 speichert der IdP die Code-Challenge zusammen mit dem Autorisierungscode des Angreifers.
- In Schritt 5 wird das RP nicht in der Lage sein, einen passenden Code-Verifier für den Benutzer zu finden, der zur vom IdP gespeicherten Challenge passt, sodass die Token-Anfrage scheitern wird.

Eine alternative Verteidigung ist der `state`-Parameter, der in OAuth 2.0 definiert ist. Bei dieser Verteidigung stellt das RP einen unvorhersehbaren Wert als Parameter in der Authentifizierungsanfrage bereit, und der IdP sendet denselben Wert in der Antwort zurück: Das RP überprüft, ob sie übereinstimmen. Da der Angreifer den Wert von `state` nicht vorhersagen kann, kann er keinen passenden Wert zur Redirect-URL des RP übergeben.

##### Autorisierungscode-Injektion

In einem Autorisierungscode-Injektionsangriff stiehlt der Angreifer den Autorisierungscode eines Zielbenutzers und kann diesen in seinen eigenen Anmeldefluss einfügen. Das Ergebnis ist, dass der Angreifer im Konto des Benutzers angemeldet wird.

Es wird allgemein akzeptiert, dass Autorisierungscodes in OIDC verwundbar sind, teilweise, weil sie dem Browser des Benutzers ausgesetzt sind. Zum Beispiel kann eine bösartige Browsererweiterung, wenn sie vom Benutzer installiert wird, in der Lage sein, Autorisierungscodes zu stehlen.

Die Hauptmaßnahme hier ist [Client-Authentifizierung](#client-authentifizierung): Da sich das RP beim IdP authentifiziert, wenn es eine Token-Anfrage macht, kann ein Angreifer nicht einfach seine eigene Token-Anfrage mit dem gestohlenen Code machen. Bei dem Autorisierungscode-Injektionsangriff handelt es sich jedoch um die echte Token-Anfrage des RP, sodass die Client-Authentifizierung erfolgreich ist.

Wenn PKCE nicht verwendet wird, funktioniert der Autorisierungscode-Injektionsangriff wie folgt:

1. Der Angreifer ist in der Lage, den Autorisierungscode des Benutzers zu stehlen. Zum Beispiel hat der Benutzer eine bösartige Browsererweiterung installiert, die auf die URLs zugreifen kann, die der Browser besucht.

2. Der Benutzer versucht, sich anzumelden. Das RP stellt eine Authentifizierungsanfrage, der Benutzer authentifiziert sich, und der IdP leitet den Browser zur Redirect-URL des RP um, mit dem Autorisierungscode als URL-Parameter.

3. Zu diesem Zeitpunkt ruft die bösartige Browsererweiterung den Autorisierungscode ab, sendet ihn an den Angreifer und beendet den Authentifizierungsfluss des Benutzers.

4. Der Angreifer erhält den Autorisierungscode des Benutzers.

5. Der Angreifer startet seinen eigenen OIDC-Authentifizierungsfluss, fängt jedoch die Authentifizierungsantwort des IdP ab und ersetzt den Autorisierungscode durch den gestohlenen Code des Benutzers. Dies ist unkompliziert, weil die Authentifizierungsantwort für den Angreifer bestimmt ist, sodass sie durch das Gerät des Angreifers geleitet wird.

6. Das RP setzt den Authentifizierungsfluss für den Angreifer fort, indem es die Token-Anfrage an den IdP stellt und den Autorisierungscode des Benutzers verwendet, den der Angreifer eingefügt hat.

7. Der IdP antwortet mit den Tokens des Benutzers.

8. Das RP meldet den Angreifer im Konto des Benutzers an.

Beachten Sie, dass die Verwendung eines `state`-Parameters in diesem Fall nicht hilft, da die Authentifizierungsanfrage und -antwort wirklich zum selben Fluss gehören - dem des Angreifers.

PKCE schützt vor diesem Angriff, weil:

- In Schritt 2 generiert das RP einen Code-Verifier und sendet die gehashte Code-Challenge an den IdP, der die Challenge zusammen mit dem Code des Benutzers speichert.
- In Schritt 6 enthält die Token-Anfrage des RP den _Code-Verifier des Angreifers_, aber den _Code des Benutzers_. Der IdP ruft die Code-Challenge für den Code des Benutzers ab: Sie wird nicht zum Code-Verifier des Angreifers passen, und die Token-Anfrage wird abgelehnt.

Eine Alternative zu PKCE, die in OIDC spezifiziert ist, ist der [`nonce`](https://datatracker.ietf.org/doc/html/draft-ietf-oauth-security-topics#name-nonce)-Wert. Das RP fügt diesen als weiteren Parameter in der Authentifizierungsanfrage hinzu: Der IdP speichert ihn, und der Token-Endpunkt gibt ihn zusammen mit den Tokens an das RP zurück. Das RP überprüft dann, ob der zurückgegebene Wert derselbe wie der ursprüngliche Wert ist.

##### Sicherstellen, dass PKCE verwendet wird

Um sicherzustellen, dass PKCE verwendet wird, muss das RP bestätigen, dass sein gewählter IdP nicht nur PKCE unterstützt, sondern auch, dass es _voraussetzt_, dass PKCE verwendet wird — indem er die Token-Anfrage ablehnt, wenn kein gültiger Code-Verifier enthalten ist.

Andernfalls ist ein RP anfällig für einen [PKCE-Downgrade-Angriff](https://datatracker.ietf.org/doc/html/rfc9700#name-pkce-downgrade-attack), bei dem ein Angreifer den IdP dazu bringt zu denken, dass das RP PKCE in einer Token-Anfrage nicht verwenden möchte.

### Architekturen für OIDC-Clients

Die [OAuth 2.0 für Browser-basierte Anwendungen](https://datatracker.ietf.org/doc/html/draft-ietf-oauth-browser-based-apps-25)-Spezifikation beschreibt, wie sich die Webanwendungsarchitektur auf die Sicherheitsbedrohungen auswirken kann, denen OIDC-Clients (das heißt, Relying Parties) ausgesetzt sind, und gibt einige Empfehlungen zur Webanwendungsarchitektur.

Insbesondere stellt sie fest:

- Das sicherste Muster ist, dass die Website einen Webserver verwendet, um alle OAuth/OIDC-Interaktionen und Interaktionen mit APIs zu verwalten, die durch Zugriffstokens geschützt sind. In diesem Muster kann das RP ein vertraulicher Client sein, da es Client-Geheimnisse auf dem Server speichern kann. Es kann auch alle Tokens auf dem Server speichern, einschließlich Zugriffstokens.

- Das nächst sicherere Muster ist, dass die Website einen Webserver verwendet, um alle OAuth/OIDC-Interaktionen zu verwalten, der dann das Zugriffstoken an das Frontend zurückgibt, und das Frontend stellt dann die API-Anfragen direkt. In diesem Szenario kann die Website ein vertraulicher Client sein, aber bösartiger Code, der im Browser läuft (zum Beispiel durch einen XSS-Angriff), könnte möglicherweise Zugriffstokens stehlen. Allerdings muss das Frontend Zugriffstokens nicht langfristig speichern: Es kann sie bei Bedarf vom Backend abrufen.

- Das am wenigsten sichere Muster ist, dass OAuth/OIDC-Interaktionen und Interaktionen mit APIs beide im Frontend stattfinden. Dies wäre zum Beispiel die natürliche Architektur für eine Anwendung, die vollständig im Browser ausgeführt wird. In dieser Architektur kann das RP kein vertraulicher Client sein, da es kein Client-Geheimnis zuverlässig bewahren kann. Dies bedeutet, dass es sich nicht beim IdP authentifizieren kann. Es muss auch Tokens dauerhaft speichern, was das Risiko erhöht, dass bösartiger Code sie stiehlt.

Die Spezifikation enthält auch detaillierte Empfehlungen für Sicherheitspraktiken, die in jedem dieser drei Szenarien zu beachten sind.

### OIDC-Abmeldung

Abmeldeszenerien sind in einem föderierten Identitätssystem komplexer als in einem nicht föderierten System, da:

- Der Benutzer sich entweder auf der Seite des RP oder auf der Seite des IdP abmelden kann.
- Der Benutzer sich möglicherweise nur vom RP abmelden möchte oder global abmelden möchte: das heißt, sich von allen RPs abzumelden, bei denen er sich mit diesem IdP angemeldet hat. Dies ist eine allgemeine Anforderung, wenn wir föderierte Identität verwenden, um ein Single-Sign-On (SSO)-System zu erstellen, bei dem ein Mitarbeiter ein einziges Set von Unternehmens-Zugangsdaten für die Anmeldung bei E-Mail, einem Fehlerverfolgungssystem und einem Diskussionsforum verwenden könnte.

Diese Szenarien zu unterstützen, bedeutet, einen Kommunikationsmechanismus zwischen dem RP und dem IdP zu implementieren. Zum Beispiel:

- Wenn der Benutzer sich beim IdP abmeldet, sollte das RP benachrichtigt werden und den Benutzer im RP abmelden.
- Wenn der Benutzer sich beim RP abmeldet, sollte der IdP benachrichtigt werden und in der Lage sein, den Benutzer von allen RPs abzumelden, bei denen er derzeit angemeldet ist.

Die OpenID-Spezifikationen definieren zwei allgemeine Ansätze zur Umsetzung dieser Koordination, die sie "Front-Channel-Logout" und "Back-Channel-Logout" nennen.

Beim [Front-Channel-Logout](https://openid.net/specs/openid-connect-frontchannel-1_0.html) wird der Browser zur Vermittlung der Kommunikation verwendet. Bei diesem Ansatz bettet die Seite des Senders ein {{htmlelement("iframe")}} ein, dessen Inhalt vom Empfänger geladen wird. Zum Beispiel, wenn der Benutzer sich beim IdP abmeldet, kann der IdP ein `<iframe>` einbetten, dessen `src`-Attribut auf die Abmelde-URL des RP zeigt: Wenn das `<iframe>` gerendert wird, macht der Browser eine {{httpmethod("GET")}}-Anfrage an diese URL, die das RP als Anweisung interpretiert, den Benutzer abzumelden.

Beim [Back-Channel-Logout](https://openid.net/specs/openid-connect-backchannel-1_0.html) kommunizieren das RP und der IdP direkt miteinander und umgehen den Browser. Zum Beispiel, wenn der IdP dem RP mitteilen muss, den Benutzer abzumelden, macht der IdP eine {{httpmethod("POST")}}-Anfrage direkt an das RP.

## Drittanbieter-Cookies

Bei der Implementierung eines föderierten Identitätssystems müssen wir die Interaktionen zwischen dem RP, dem IdP und dem Benutzer koordinieren. Einige Implementierungen dieser Koordination hängen von der Browserunterstützung für [Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies) ab.

Zum Beispiel verwenden wir beim Front-Channel-Logout (einer der Ansätze zur Umsetzung der [Abmeldung in OpenID Connect](#oidc-abmeldung)) cross-site {{htmlelement("iframe")}} Elemente, in denen das Dokument des RP ein `<iframe>` enthält, dessen Inhalt vom IdP geladen wird, oder umgekehrt. Dies hängt davon ab, dass das eingebettete `<iframe>` seine Cookies an seine Herkunft senden kann.

Ebenso verwendet der Haupt-[OpenID Connect Authentifizierungsfluss](#authentifizierungsfluss) vollständige Seitenumleitungen, um die Teilnehmer zu koordinieren. Dies ist eine ablenkende Erfahrung für Benutzer und schwierig für {{Glossary("SPA", "Single-Page-Apps")}} zu unterstützen. Ein besseres Benutzererlebnis kann erreicht werden, indem der IdP als `<iframe>` in die Seite des RP eingebettet wird, und dies hängt wiederum von Drittanbieter-Cookies ab.

Da Drittanbieter-Cookies jedoch weit verbreitet für das [Tracking von Benutzern](/de/docs/Web/Privacy/Guides/Third-party_cookies#what_is_the_problem_with_third-party_cookies) verwendet werden, haben Browser Schritte unternommen, um Unterstützung für sie zu veralten und zu entfernen, und sie werden jetzt standardmäßig in einigen Browsern nicht mehr unterstützt.

Daher empfehlen wir, die Implementierung föderierter Identitätsfunktionen nicht von Drittanbieter-Cookies abhängig zu machen.

## Die FedCM API

Die [Federated Credential Management API (FedCM API)](/de/docs/Web/API/FedCM_API) bietet integrierte Browserunterstützung für föderierte Identität. Wir können ihre Verwendung nicht vollständig empfehlen, da die API noch keine browserübergreifende Unterstützung hat und sich noch in aktiver Entwicklung befindet. Sie verspricht jedoch mehrere Vorteile gegenüber der direkten Implementierung eines Protokolls wie OpenID Connect:

- Im zuvor beschriebenen OIDC-Fluss muss die OIDC verwendende Website (das heißt, das RP) die Interaktionen zwischen sich selbst, dem Benutzer und dem IdP koordinieren. Wie wir gesehen haben, ist dies kompliziert und daher fehleranfällig. Mit FedCM übernimmt der Browser diese Interaktion: Als RP rufen Sie eine Browser-API auf, und der Browser lokalisiert den IdP, bittet den Benutzer um Authentifizierung und gibt ein Token vom IdP zurück, das das RP zur Anmeldung des Benutzers verwenden kann.
- Dadurch müssen Sie sich nicht auf Drittanbieter-Cookies verlassen, sodass FedCM in Browsern funktioniert, die diese blockieren.
- Bei FedCM ist die Benutzeroberfläche, in der sich der Benutzer beim IdP authentifiziert, in den Browser integriert, was ihnen eine konsistentere und nahtlosere Erfahrung ohne Umleitungen bietet.

FedCM ist in die [Credential Management API](/de/docs/Web/API/Credential_Management_API) integriert, ein Framework, das es Browsern ermöglicht, mit einer Vielzahl verschiedener Zugangsdatenarten zu arbeiten. Um sich mit der FedCM API zu authentifizieren, rufen Sie [`CredentialsContainer.get()`](/de/docs/Web/API/CredentialsContainer/get) auf und übergeben die verschiedenen Optionen, einschließlich:

- Identifikatoren für die IdP(s), die der Benutzer möglicherweise zur Anmeldung bei diesem RP nutzen kann
- Der Kontext, in dem das RP den IdP verwendet (zum Beispiel, ob der Benutzer sich registriert oder anmeldet).

Wenn Sie `CredentialsContainer.get()` aufrufen, wird der Browser:

- Die angegebenen IdPs kontaktieren
- Den Benutzer bitten, sich bei seinem gewählten IdP anzumelden, falls er nicht bereits angemeldet ist
- Den IdP bitten, die Identität des Benutzers zu überprüfen
- Ein Token zurückgeben, das das RP zur Anmeldung des Benutzers verwenden kann.

### FedCM und föderierte Identitätsprotokolle

FedCM implementiert selbst kein föderiertes Identitätsprotokoll wie OIDC. Sie können es sich als Transportmittel zwischen dem RP, dem Benutzer und dem IdP vorstellen, aber es ist agnostisch gegenüber den ausgetauschten Gegenständen oder ihrer Interpretation.

Zum Beispiel kann in einer Implementierung von OIDC mit FedCM das Token, das von `CredentialsContainer.get()` zurückgegeben wird, ein Autorisierungscode sein, und das RP muss dann das Identitätstoken vom Token-Endpunkt des IdP abrufen. Das bedeutet, FedCM übernimmt nur den ersten Teil des [Authentifizierungsflusses](#authentifizierungsfluss). Das [FedCM für OAuth](https://github.com/aaronpk/oauth-fedcm-profile)-Dokument beschreibt, wie OAuth und OIDC mit FedCM implementiert werden könnten.

Im Allgemeinen, wenn ein RP sich entscheidet, einen bestimmten IdP für einen föderierten Login zu verwenden, registriert sich das RP beim IdP, und als Teil dieses Prozesses sollte der IdP dem RP genau erklären, welche Argumente es erwartet, wie es die Objekte behandeln soll, die der IdP zurückgibt, und welches Verhalten es vom RP erwartet.

## Wahl der IdPs

Wenn Sie sich entscheiden, eine föderierte Anmeldung zu Ihrer Website hinzuzufügen, ist eine der grundlegenden Entscheidungen die Wahl, mit welchen Identity Providern Sie zusammenarbeiten möchten. Wenn ein potenzieller Benutzer Ihrer Website bereits ein Konto bei einem der von Ihnen gewählten IdPs hat, ist es für ihn viel einfacher, ein neues Konto auf Ihrer Website zu erstellen.

Daher werden Sie voraussichtlich mehr Anmeldungen sehen, wenn ein großer Teil Ihrer erwarteten Benutzerbasis bereits ein Konto bei Ihrem gewählten IdP hat.

Es ist üblich, dass eine Website ihren Benutzern ermöglicht, sich mit mehr als einem IdP anzumelden, um mehr Benutzer abzudecken und ihnen mehr Auswahlmöglichkeiten zu bieten. Allerdings führen zu viele Optionen zu einer verwirrenden Benutzererfahrung, und Benutzer, die Konten bei mehreren Ihrer IdPs haben, haben möglicherweise Schwierigkeiten sich zu erinnern, bei welchem sie sich angemeldet haben.

Es ist auch gängige Praxis, eine Fallback-Option für Benutzer bereitzustellen, die keinen Ihrer ausgewählten IdPs verwenden können. In dieser Option authentifizieren sich Benutzer direkt mit Ihrer Website mit einer Methode wie einem [Passwort](/de/docs/Web/Security/Authentication/Passwords) oder einer [Einmalpasswort](/de/docs/Web/Security/Authentication/OTP).

Welche Identity Provider Sie auch immer wählen, diese werden detaillierte Anweisungen und Werkzeuge bereitstellen, um Ihre Website mit ihrem System zu integrieren, und dies wird wahrscheinlich viele der Komplexitäten, die in einem Protokoll wie OIDC inhärent sind, ausräumen. Es ist jedoch immer noch äußerst hilfreich zu verstehen, was unter der Oberfläche passiert.

## Stärken und Schwächen

Für Webentwickler besteht der größte Vorteil der Verwendung föderierter Identität darin, die Anmeldungshürde für jene Benutzer zu reduzieren, die bereits ein Konto bei einem der gewählten IdPs haben. Darüber hinaus können ihre gewählten IdPs Websites helfen, die föderierte Identität sicher zu implementieren.

Aus einer Sicherheitsperspektive besteht der größte Vorteil darin, dass Benutzer keine neuen Zugangsdaten für jedes Konto erstellen müssen, was das Risiko verringert, dass sie schwache Passwörter wählen, die leichter zu merken sind, oder dass sie Passwörter auf verschiedenen Websites wiederverwenden.

Die Verwendung föderierter Identität ist eine sicherere Option als nur Passwörter, aber sie hat immer noch Probleme:

- Die Vorteile für Websites, IdPs auszuwählen, die eine große Nutzerbasis haben, führen dazu, dass der Raum tendenziell von wenigen sehr großen Anbietern monopolisiert wird. Dies wiederum neigt dazu, Benutzer an diese Anbieter zu binden, was dazu führt, dass Websites eine schlechtere Erfahrung für Benutzer bieten, die sie nicht verwenden wollen oder können.

- Wenn eine Website nicht bereit ist, Benutzer vollständig auszuschließen, die sich nicht bei ihren gewählten IdPs anmelden wollen oder können, dann muss die Website immer noch mit der gesamten Komplexität einer Fallback-Authentifizierungsmethode umgehen.

- Wie jedes Authentifizierungssystem, das darauf basiert, dass der Benutzer ein Geheimnis in eine Website eingibt, ist auch die föderierte Identität anfällig für [Phishing](/de/docs/Web/Security/Attacks/Phishing)-Angriffe.
