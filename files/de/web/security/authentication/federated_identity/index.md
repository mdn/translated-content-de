---
title: Föderierte Identität
slug: Web/Security/Authentication/Federated_identity
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

In einem **föderierten Identitätssystem** delegiert eine Website die Authentifizierung an einen Drittanbieter.

- Der Drittanbieter, der häufig [Identity Provider (IdP)](/de/docs/Glossary/Identity_provider) genannt wird, verwaltet die Anmeldedaten eines Benutzers und kann Benutzer authentifizieren.
- Die Website, die üblicherweise [Relying Party (RP)](/de/docs/Glossary/Relying_party) genannt wird, vertraut dem IdP, Aussagen über die Identität eines Benutzers zu machen.

Wenn der Benutzer sich auf der Website anmelden möchte, leitet die Website ihn zum IdP weiter. Der Benutzer authentifiziert sich beim IdP, und der IdP gibt ein Token an die Website zurück, das anzeigt, dass der Benutzer erfolgreich authentifiziert wurde. Die Website überprüft, ob das Token gültig ist, und wenn ja, meldet sie den Benutzer an.

![Übersicht über den Anmeldeprozess mit föderierter Identität.](federated-identity-overview.svg)

> [!NOTE]
> Eine föderierte Identität ist eigentlich keine Authentifizierungs*methode*: es ist eher eine _Architektur_, in der verschiedene Authentifizierungsmethoden verwendet werden können. Ein IdP könnte sich dafür entscheiden, Benutzer mit einer oder mehreren Methoden zu authentifizieren, wie z.B. traditionelle Passwörter, Einmalpasswörter, Biometrie oder Zugangsschlüssel.

Dieses Modell bietet sowohl für Benutzer als auch für Websites einige Vorteile:

- Websites müssen ihre eigene Authentifizierung nicht implementieren oder Benutzeranmeldedaten sicher handhaben.
- Ein einzelner IdP kann Benutzer für viele verschiedene Websites authentifizieren. Das bedeutet, dass der Benutzer nicht für jede Website unterschiedliche Anmeldedaten verwenden muss: Wenn Anmeldedaten Passwörter sind, reduziert dies das Risiko der Wiederverwendung von Passwörtern oder dass der Benutzer schwache, leicht zu merkende Passwörter wählt.
- Wenn ein Benutzer bereits ein Konto bei einem IdP hat, dem Ihre Website vertraut, dann ist es für Benutzer viel einfacher, sich auf Ihrer Website anzumelden, da sie keine neuen Anmeldedaten speziell für Ihre Website erhalten müssen.

In diesem Leitfaden werden wir untersuchen, wie eine Website mit einem IdP zusammenarbeiten kann, um eine föderierte Anmeldung für ihre Benutzer hinzuzufügen. Wir werden behandeln:

- Die Hauptabläufe, die im [OpenID Connect (OIDC)](https://openid.net/developers/how-connect-works/) Protokoll definiert sind, welches der dominierende Standard für föderierte Identität ist und bewährte Praktiken zur Implementierung.
- Wie Browserbeschränkungen für Cookies von Drittanbietern Probleme für Implementierungen einer föderierten Identität schaffen.
- Die [Federated Credential Management (FedCM) API](/de/docs/Web/API/FedCM_API), die die Rolle des Browsers aktiver macht, um die Rolle der RP zu vereinfachen und die Abhängigkeit von Drittanbieter-Cookies zu vermeiden.
- Wie eine Website einen IdP auswählen kann und wie sich diese Wahl auf den Prozess der Implementierung einer föderierten Anmeldung auswirken kann.

## OpenID Connect

Der Standard, der am häufigsten für föderierte Identität im Web verwendet wird, ist [OpenID Connect (OIDC)](https://openid.net/developers/how-connect-works/), ein Authentifizierungsprotokoll, das auf dem [OAuth 2.0 Authorization Framework](https://datatracker.ietf.org/doc/html/rfc6749) aufbaut.

### Authentifizierungsablauf

In diesem Abschnitt führen wir den wichtigsten Authentifizierungsablauf, der in OIDC definiert ist, durch. Es gibt viele Optionen innerhalb des OIDC-Authentifizierungsablaufs: In dieser Beschreibung stellen wir die empfohlenen Optionen vor und sprechen später über Alternativen.

Dieser Ablauf ist in der [OpenID Connect Core](https://openid.net/specs/openid-connect-core-1_0.html) Spezifikation definiert.

Als Voraussetzung muss die RP dem IdP bekannt sein:

- Der IdP benötigt einen Bezeichner für die RP, der als client ID bezeichnet wird
- Die RP muss in der Lage sein, sich gegenüber dem IdP zu authentifizieren

Die Authentifizierung kann ein gemeinsam genutztes Geheimnis, genannt Client-Geheimnis, oder einen anderen Mechanismus wie die TLS-Client-Authentifizierung verwenden.

> [!NOTE]
> Die OpenID-Spezifikationen verwenden den Begriff „OpenID Provider“ (OP), um das zu bezeichnen, was wir in diesem Leitfaden einen IdP nennen.

![Der OIDC Authentifizierungsablauf](oidc-auth-flow.svg)

Das Erste, was hier zu beachten ist, ist, dass der Ablauf aus zwei Teilen besteht.

- **Authentifizierungsanfrage**: Die RP stellt eine Anfrage an den _Authorization Endpoint_ des IdP und bittet diesen, den Benutzer zu authentifizieren. Der IdP authentifiziert den Benutzer und gibt der RP einen _Authorization Code_ zurück. Der Code läuft nach kurzer Zeit ab (empfohlen wird, nicht mehr als 10 Minuten).
- **Token-Anfrage**: Die RP sendet den Autorisierungscode an einen separaten Endpunkt im IdP, genannt _Token Endpoint_, und dieser Endpunkt antwortet mit einem Objekt, das zwei Tokens enthält:
  - Ein _Access Token_, das dem Benutzer Zugang zu spezifischen Ressourcen auf der Website ermöglicht (wie ein API-Schlüssel)
  - Ein _ID Token_, das den Benutzer identifiziert und der RP ermöglicht, den Benutzer anzumelden.

In der Authentifizierungsanfrage:

1. Der Benutzer bittet, sich bei der RP anzumelden.

2. Die RP leitet den Browser an den Authorization-Endpoint des IdP weiter und bittet ihn, den Benutzer zu authentifizieren. Die RP kann verschiedene Parameter zusammen mit der Anfrage bereitstellen, darunter:
   - `client_id`: Identifiziert diese RP beim IdP.
   - `response_type`: Immer `"code"`, wenn wir den hier beschriebenen zweistufigen Ablauf verwenden, der die empfohlene Option ist.
   - `redirect_uri`: Die URL in der RP, zu der der IdP weiterleiten soll, sobald er versucht hat, den Benutzer zu authentifizieren. Dies ist die URL, an die der IdP den Authorization Code liefern wird.
   - `code_challenge`: Ein kryptografischer {{Glossary("hash", "Hash")}} eines geheimen Werts, spezifisch für diese Autorisierungsanfrage, der vom Token-Endpunkt verwendet wird, um sicherzustellen, dass die Token-Anfrage wirklich das Gegenstück zu dieser Autorisierungsanfrage ist.
   - `scope`: Eine Liste von Zeichenfolgen, die angeben, auf welche Benutzerinformationen die RP zugreifen möchte.

3. Der IdP authentifiziert den Benutzer. Das Protokoll legt keine spezielle Methode dafür fest: Der IdP könnte ein Passwort, eine Einmalpasswort, eine Biometriefunktion oder eine andere geeignete Methode verwenden.

4. Wenn die Authentifizierung erfolgreich ist, generiert der IdP den Authorization Code. Er speichert auch den Wert `code_challenge` und assoziiert ihn mit dem Autorisierungscode. Dann leitet der IdP den Browser zur Redirect-URL der RP weiter und übergibt den Authorization Code als Parameter.

In der Token-Anfrage:

1. Die RP macht einen {{httpmethod("POST")}}-Request an den Token-Endpunkt des IdP. Diese Anfrage enthält die folgenden Parameter:
   - `client_id`: Identifiziert diese RP beim IdP.
   - `client_secret`: Das Geheimnis, das verwendet wird, um die RP gegenüber dem IdP zu authentifizieren: dies könnte ein beliebiger Wert sein, der vorher zwischen der RP und dem IdP vereinbart wurde. Anstelle eines gemeinsamen Geheimnisses könnten die RP und der IdP einen alternativen Mechanismus zur Client-Authentifizierung verwenden, wie z.B. TLS-Client-Authentifizierung.
   - `grant_type`: Dies sollte `"authorization_code"` sein.
   - `code`: Der Autorisierungscode.
   - `code_verifier`: Dies ist das ursprüngliche Geheimnis, das verwendet wurde, um den `code_challenge` Parameter in der Authentifizierungsanfrage zu erstellen.

2. Der IdP validiert die Anfrage:
   - Es authentifiziert, dass die Anfrage von der bestimmten RP stammt, indem es das Client-Geheimnis oder eine andere Form der Client-Authentifizierung verwendet.
   - Es hashiert den `code_verifier` Parameter und überprüft, ob das Ergebnis mit `code_challenge` übereinstimmt.

3. Wenn die Anfrage gültig ist, antwortet der IdP mit zwei Tokens:
   - Ein Access Token, das dem Benutzer den Zugriff auf einige Ressourcen in der RP gewährt.
   - Ein ID Token, das den Benutzer identifiziert. Dies ist ein kryptografisch signiertes [JSON Web Token](https://www.jwt.io/).

4. Die RP validiert die Tokens: unter anderem überprüft sie die Signatur des IdP auf dem ID Token. Wenn die Validierung erfolgreich ist, meldet die RP den Benutzer an.

### Sicherheitsmerkmale

In diesem Abschnitt fassen wir die wichtigsten Sicherheitsmerkmale des OIDC-Authentifizierungsablaufs zusammen, den wir gerade beschrieben haben. Für die vollständigen Details siehe [Beste aktuelle Praxis für OAuth 2.0-Sicherheit](https://www.rfc-editor.org/rfc/rfc9700.html).

#### Authorization Code Flow

Der zweistufige Ablauf, den wir beschrieben haben, wird "Authorization Code Flow" genannt. In einem alternativen Ablauf, dem sogenannten "Implicit Flow", existiert nur der erste Schritt, und die Antwort auf die Authentifizierungsanfrage enthält bereits die Access und ID Tokens. Dies ist unsicher, da die Tokens für das Frontend der RP ausgesetzt sind, das als wesentlich unsicherer als das Backend betrachtet wird. Beispielsweise kann bei einem erfolgreichen [XSS](/de/docs/Web/Security/Attacks/XSS) Angriff oder wenn der Benutzer eine bösartige Browser-Erweiterung installiert, der Angreifer möglicherweise die Tokens des Benutzers stehlen.

Aus diesem Grund sollten Websites immer den Authorization Code Flow verwenden. Selbst wenn es einem Angreifer gelingt, den Authorization Code zu stehlen, müssen sie den Token-Endpunkt überzeugen, ihnen im Austausch für den Code die Tokens zu geben.

#### Client-Authentifizierung

In dem beschriebenen Ablauf authentifiziert sich die RP beim Token-Endpunkt, wenn sie die Token-Anfrage stellt. Das bedeutet, dass selbst wenn ein Angreifer den Authorization Code stiehlt, er die RP erfolgreich imitieren muss, um die Tokens vom IdP zu erhalten.

Die OAuth-Spezifikation unterscheidet zwischen [_confidential_ und _public_ clients](https://datatracker.ietf.org/doc/html/rfc6749#section-2.1). Vertrauliche Clients sind im Wesentlichen RPs, die ein Geheimnis bewahren können, und öffentliche Clients sind solche, die dies nicht können.

Die Spezifikation betrachtet Clients, die im Browser des Benutzers ausgeführt werden, als öffentliche Clients aus dem bereits genannten Grund: es ist zu einfach für einen Angreifer, Geheimnisse in einem Browser über Angriffe wie XSS zuzugreifen. Clients, die auf einem Web-_Server_ ausgeführt werden, sind vertrauliche Clients.

In OIDC dürfen nur vertrauliche Clients die Client-Authentifizierung verwenden, da nur vertrauliche Clients als zuverlässig angesehen werden können, die Sicherheit der Anmeldedaten des Clients zu wahren.

Die RP kann sich gegenüber dem IdP mit einem gemeinsamen Geheimnis authentifizieren, aber [es ist besser, eine Methode zu verwenden, die auf öffentlicher Schlüsselkryptographie basiert](https://www.rfc-editor.org/rfc/rfc9700.html#name-client-authentication), wie z.B. die {{Glossary("TLS", "TLS-Client-Authentifizierung")}}.

#### Proof Key for Code Exchange (PKCE)

Die `code_challenge` und `code_verifier` Werte, die die RP in der Authentifizierungsanfrage bzw. in der Token-Anfrage bereitstellt, sind Teil eines Mechanismus namens _Proof Key for Code Exchange_ (PKCE), spezifiziert in {{rfc("7636")}}.

In der Authentifizierungsanfrage:

- Die RP generiert einen schwer zu erratenden Wert, der spezifisch für diese Authentifizierungsanfrage ist. Dieser Wert wird _code verifier_ genannt.
- Die RP erzeugt einen {{Glossary("hash", "kryptografischen Hash")}} des code verifiers und verwendet ihn als `code_challenge` Parameter in der Authentifizierungsanfrage.
- Der IdP speichert den code challenge und assoziiert ihn mit dem Autorisierungscode, den er an die RP zurückgibt.

In der Token-Anfrage:

- Die RP übergibt den code verifier im _code_verifier_ Parameter.
- Der IdP hashiert den code verifier und vergleicht das Ergebnis mit dem gespeicherten code challenge: wenn sie nicht übereinstimmen, wird die Token-Anfrage abgelehnt.

PKCE schützt vor zwei Angriffen: [CSRF gegen die Redirect-URL der RP](#csrf_gegen_die_redirect_url) und [Authorization Code Injection](#authorization_code_injection).

##### CSRF gegen die Redirect-URL

Bei einem CSRF-Angriff bringt der Angreifer den Browser des Benutzers dazu, den Benutzer beim Account des Angreifers anzumelden. Dies kann verschiedene negative Auswirkungen haben: Zum Beispiel ist jede private Datei, die der Benutzer im Account hochlädt, für den Angreifer verfügbar und unter seiner Kontrolle.

Wenn PKCE nicht verwendet würde, funktioniert der CSRF-Angriff wie folgt:

1. Der Angreifer bittet um Anmeldung bei der RP. Die RP stellt eine Authentifizierungsanfrage an den IdP und der Angreifer authentifiziert sich beim IdP.

2. Der IdP generiert einen Autorisierungscode für den Angreifer und leitet den Browser des Angreifers zur Redirect-URL der RP weiter, wobei der Autorisierungscode als URL-Parameter übergeben wird.

3. Der Angreifer fängt diese Weiterleitung ab, extrahiert die Redirect-URL einschließlich des Autorisierungscodes und beendet den Ablauf.

4. Der Angreifer bringt den Benutzer dazu, auf die Redirect-URL zu klicken. Für die RP sieht dies wie eine Antwort des IdP auf eine Authentifizierungsanfrage aus, die vom Benutzer stammt.

5. Die RP stellt eine Token-Anfrage an den IdP einschließlich des Autorisierungscodes des Angreifers, den sie von der Redirect-URL genommen hat.

6. Der IdP antwortet mit den Tokens des Angreifers.

7. Die RP meldet den Benutzer beim Account des Angreifers an: jetzt ist jede Information oder Anweisung, die sie bereitstellen, unter der Kontrolle des Angreifers.

Der Angriff gelingt im Wesentlichen, weil die RP nicht weiß, dass die Anfrage an die Redirect-URL keine Antwort auf eine Anfrage ist, die im Auftrag des Benutzers gestellt wurde.

Wenn PKCE verwendet wird:

- In Schritt 1 generiert die RP einen code verifier für die Anfrage des Angreifers und sendet den gehashten code verifier (den code challenge) an den IdP.
- In Schritt 2 speichert der IdP den code challenge zusammen mit dem Autorisierungscode des Angreifers.
- In Schritt 5 kann die RP keinen code verifier für den Benutzer finden, der zum challenge des IdP passt, sodass die Token-Anfrage scheitert.

Eine alternative Verteidigung ist der `state` Parameter, der in OAuth 2.0 definiert ist. Bei dieser Verteidigung stellt die RP einen unvorhersehbaren Wert als Parameter in der Authentifizierungsanfrage bereit, und der IdP schließt denselben Wert in die Antwort ein: die RP überprüft, ob sie übereinstimmen. Da der Angreifer den Wert von `state` nicht vorhersagen kann, kann er keinen passenden Wert zur Redirect-URL der RP übergeben.

##### Authorization Code Injection

Bei einem Authorization Code Injection-Angriff stiehlt der Angreifer einen Autorisierungscode vom Zielbenutzer und kann ihn in den eigenen Anmeldeablauf injizieren. Das Ergebnis ist, dass der Angreifer beim Account des Benutzers angemeldet wird.

Es wird allgemein akzeptiert, dass Autorisierungscodes in OIDC in gewissem Maße gefährdet sind, da sie dem Browser des Benutzers ausgesetzt sind. Beispielsweise kann, wenn der Benutzer eine bösartige Browser-Erweiterung installiert hat, diese in der Lage sein, Autorisierungscodes zu stehlen.

Die Hauptabmilderung hier ist [Client-Authentifizierung](#client-authentifizierung): Da sich die RP beim IdP authentifiziert, wenn sie eine Token-Anfrage stellt, kann ein Angreifer keine eigene Token-Anfrage mit dem gestohlenen Code stellen. Beim Authorization Code Injection-Angriff ist es jedoch die echte RP, die die Token-Anfrage stellt, sodass die Client-Authentifizierung erfolgreich ist.

Wenn PKCE nicht verwendet würde, funktioniert der Authorization Code Injection-Angriff wie folgt:

1. Der Angreifer kann den Autorisierungscode des Benutzers stehlen. Zum Beispiel hat der Benutzer eine bösartige Browser-Erweiterung installiert, die auf die URLs zugreifen kann, die der Browser besucht.

2. Der Benutzer versucht sich anzumelden. Die RP stellt eine Authentifizierungsanfrage, der Benutzer authentifiziert sich, und der IdP leitet den Browser zur Redirect-URL der RP weiter, mit dem Autorisierungscode als URL-Parameter.

3. Zu diesem Zeitpunkt ruft die bösartige Browser-Erweiterung den Autorisierungscode ab, sendet ihn an den Angreifer und beendet den Authentifizierungsablauf des Benutzers.

4. Der Angreifer erhält den Autorisierungscode des Benutzers.

5. Der Angreifer beginnt seinen eigenen OIDC-Authentifizierungsablauf, fängt jedoch die Authentifizierungsantwort des IdP ab und ersetzt den Autorisierungscode durch den Code, den er vom Benutzer gestohlen hat. Dies ist unkompliziert, da die Authentifizierungsantwort für den Angreifer bestimmt ist und daher das Gerät des Angreifers passiert.

6. Die RP setzt den Authentifizierungsablauf für den Angreifer fort, indem sie die Token-Anfrage an den IdP stellt, einschließlich des Autorisierungscodes des Benutzers, den der Angreifer injiziert hat.

7. Der IdP antwortet mit den Tokens des Benutzers.

8. Die RP meldet den Angreifer beim Account des Benutzers an.

Beachten Sie, dass die Verwendung eines `state` Parameters in diesem Fall nicht hilft, weil die Authentifizierungsanfrage und -antwort tatsächlich zum selben Ablauf gehören - dem des Angreifers.

PKCE schützt vor diesem Angriff, da:

- In Schritt 2 generiert die RP einen Code-Verifier und sendet den gehashten Code-Challenge an den IdP, der den Challenge zusammen mit dem Code des Benutzers speichert.
- In Schritt 6 enthält die Token-Anfrage der RP den _Code-Verifier des Angreifers_, aber den _Code des Benutzers_. Der IdP sucht den Code-Challenge für den Code des Benutzers nach: er wird nicht mit dem Code-Verifier des Angreifers übereinstimmen, und die Token-Anfrage wird abgelehnt.

Eine Alternative zu PKCE, spezifiziert in OIDC, ist der [`nonce`](https://datatracker.ietf.org/doc/html/draft-ietf-oauth-security-topics#name-nonce) Wert. Die RP schließt dies als weiteren Parameter in die Authentifizierungsanfrage ein: der IdP speichert ihn, und der Token-Endpunkt gibt ihn zusammen mit den Tokens an die RP zurück. Die RP überprüft dann, ob der zurückgegebene Wert derselbe wie der ursprüngliche Wert ist.

##### Sicherstellen, dass PKCE verwendet wird

Um sicherzustellen, dass PKCE verwendet wird, muss die RP bestätigen, dass ihr gewählter IdP nicht nur PKCE unterstützt, sondern dass er auch _vorschreibt_, dass PKCE verwendet wird — indem er die Token-Anfrage ablehnt, wenn kein gültiger Code-Verifier enthalten ist.

Andernfalls ist eine RP anfällig für einen [PKCE-Downgrade-Angriff](https://datatracker.ietf.org/doc/html/rfc9700#name-pkce-downgrade-attack), bei dem ein Angreifer den IdP dazu bringt zu denken, dass die RP bei einer Token-Anfrage PKCE nicht verwenden möchte.

### Architekturen für OIDC-Clients

Die [OAuth 2.0 for Browser-Based Applications](https://datatracker.ietf.org/doc/html/draft-ietf-oauth-browser-based-apps-25) Spezifikation beschreibt, wie sich die Webanwendungsarchitektur auf die Sicherheitsbedrohungen auswirken kann, denen OIDC-Clients ( d.h. relying parties) gegenüberstehen, und macht einige Empfehlungen für die Webanwendungsarchitektur.

Insbesondere stellt sie fest:

- Das sicherste Muster besteht darin, dass die Website einen Webserver verwendet, um alle OAuth/OIDC-Interaktionen und Interaktionen mit APIs, die durch Zugangstokens geschützt werden, zu bearbeiten. In diesem Muster kann die RP ein vertraulicher Client sein, da sie Client-Geheimnisse auf dem Server aufbewahren kann. Sie kann auch alle Tokens auf dem Server aufbewahren, einschließlich der Zugangstokens.

- Das nächstsicherste Muster besteht darin, dass die Website einen Webserver verwendet, um alle OAuth/OIDC-Interaktionen zu bearbeiten, aber dann das Zugangstoken an das Frontend zurückgibt, und das Frontend dann direkte API-Anfragen stellt. In diesem Szenario kann die Website ein vertraulicher Client sein, aber bösartiger Code, der im Browser ausgeführt wird (zum Beispiel durch einen XSS-Angriff), kann potenziell Zugangstokens stehlen. Das Frontend muss die Zugangstokens jedoch nicht langfristig speichern: es kann sie vom Backend abrufen, wenn es sie benötigt.

- Das unsicherste Muster besteht darin, dass OAuth/OIDC-Interaktionen und Interaktionen mit APIs beide im Frontend stattfinden. Dies wäre zum Beispiel die natürliche Architektur für eine Anwendung, die vollständig im Browser ausgeführt wird. In dieser Architektur kann die RP kein vertraulicher Client sein, da sie kein Client-Geheimnis zuverlässig bewahren kann. Dies bedeutet, dass sie sich nicht beim IdP authentifizieren kann. Sie muss auch Tokens dauerhaft speichern, was das Risiko erhöht, dass bösartiger Code diese stiehlt.

Die Spezifikation enthält auch detaillierte Empfehlungen zu Sicherheitspraktiken, denen in jedem dieser drei Szenarien gefolgt werden soll.

### OIDC Abmelden

Abmeldeszenarien sind in einem föderierten Identitätssystem komplexer als in einem nicht-föderierten System, weil:

- Der Benutzer könnte sich entweder auf der Website der RP oder auf der Website des IdP abmelden.
- Der Benutzer könnte sich entscheiden, sich nur von der RP abzumelden oder sich global abzumelden: d.h. sich von allen RPs, bei denen sie mit diesem IdP angemeldet sind, abzumelden. Dies ist eine häufige Anforderung, wenn wir eine föderierte Identität verwenden, um ein [Single Sign-On (SSO)](/de/docs/Glossary/single_sign-on) System aufzubauen, in dem ein Mitarbeiter ein einziges Set von Unternehmensanmeldedaten verwenden könnte, um sich bei E-Mail, einem Bug-Tracker und einem Diskussionsforum anzumelden.

Die Unterstützung dieser Szenarien bedeutet die Implementierung eines Kommunikationsmechanismus zwischen der RP und dem IdP. Beispielsweise:

- Wenn sich der Benutzer beim IdP abmeldet, sollte die RP benachrichtigt werden und den Benutzer in der RP abmelden.
- Wenn sich der Benutzer bei der RP abmeldet, sollte der IdP benachrichtigt werden und in der Lage sein, den Benutzer von allen RPs abzumelden, bei denen er derzeit angemeldet ist.

Die OpenID-Spezifikationen definieren zwei allgemeine Ansätze zur Implementierung dieser Koordination, die sie "Front-Channel-Logout" und "Back-Channel-Logout" nennen.

Beim [Front-Channel-Logout](https://openid.net/specs/openid-connect-frontchannel-1_0.html) wird der Browser verwendet, um die Kommunikation zu vermitteln. Bei diesem Ansatz bettet die Seite des Absenders ein {{htmlelement("iframe")}} ein, dessen Inhalt vom Empfänger geladen wird. Beispielsweise kann der IdP, wenn sich der Benutzer beim IdP abmeldet, ein `<iframe>` einbetten, dessen `src`-Attribut auf die Logout-URL der RP verweist: Wenn das `<iframe>` gerendert wird, macht der Browser einen {{httpmethod("GET")}}-Request an diese URL, die RP als Befehl interpretiert, den Benutzer abzumelden.

Beim [Back-Channel-Logout](https://openid.net/specs/openid-connect-backchannel-1_0.html) kommunizieren die RP und der IdP direkt miteinander unter Umgehung des Browsers. Beispielsweise macht der IdP, wenn er die RP darüber informieren muss, den Benutzer abzumelden, einen {{httpmethod("POST")}}-Request direkt an die RP.

## Cookies von Drittanbietern

Bei der Implementierung eines föderierten Identitätssystems müssen wir die Interaktionen zwischen der RP, dem IdP und dem Benutzer koordinieren. Einige Implementierungen dieser Koordination hängen von der Unterstützung von [Cookies von Drittanbietern](/de/docs/Web/Privacy/Guides/Third-party_cookies) durch den Browser ab.

Beispielsweise verwenden wir beim Front-Channel-Logout (einer der Ansätze zur Implementierung des [Abmelden in OpenID Connect](#oidc_abmelden)) plattformübergreifende {{htmlelement("iframe")}} Elemente, in denen das Dokument der RP ein `<iframe>` enthält, dessen Inhalt vom IdP geladen wird, oder umgekehrt. Dies hängt davon ab, dass das eingebettete `<iframe>` in der Lage ist, seine Cookies an seinen Ursprung zu senden.

In ähnlicher Weise verwendet der Haupt-[OpenID Connect-Authentifizierungsablauf](#authentifizierungsablauf) vollständige Seitenumleitungen, um die Teilnehmer zu koordinieren. Dies ist eine ablenkende Erfahrung für Benutzer und ist für {{Glossary("SPA", "Single-Page-Apps")}} schwer zu unterstützen. Eine bessere Benutzererfahrung kann erreicht werden, indem der IdP als `<iframe>` in die Seite der RP eingebettet wird, und dies hängt wiederum von Cookies von Drittanbietern ab.

Da Cookies von Drittanbietern jedoch weit verbreitet zur [Verfolgung von Benutzern](/de/docs/Web/Privacy/Guides/Third-party_cookies#what_is_the_problem_with_third-party_cookies) verwendet werden, haben Browser Maßnahmen ergriffen, um ihre Unterstützung zu veralten und zu entfernen, und sie werden jetzt standardmäßig in einigen Browsern nicht unterstützt.

Daher empfehlen wir, keine föderierten Identitätsmerkmale in einer Weise zu implementieren, die von Cookies von Drittanbietern abhängt.

## Die FedCM API

Die [API zur Verwaltung von federativen Anmeldedaten (FedCM API)](/de/docs/Web/API/FedCM_API) bietet integrierte Browserunterstützung für föderierte Identität. Wir können die Nutzung nicht vollständig empfehlen, da die API noch keine plattformübergreifende Unterstützung hat und weiterhin aktiv entwickelt wird. Sie verspricht jedoch mehrere Vorteile gegenüber der direkten Implementierung eines Protokolls wie OpenID Connect:

- In dem zuvor beschriebenen OIDC-Ablauf muss die Website, die OIDC verwendet (d.h. die RP), die Interaktionen zwischen sich selbst, dem Benutzer und dem IdP koordinieren. Wie wir gesehen haben, ist dies kompliziert und daher fehleranfällig. Mit FedCM übernimmt der Browser diese Interaktion: Als RP rufen Sie eine Browser-API auf, und der Browser findet den IdP, bittet den Benutzer sich zu authentifizieren und gibt ein Token vom IdP zurück, das die RP verwenden kann, um den Benutzer anzumelden.
- Infolgedessen müssen Sie sich nicht mehr auf Cookies von Drittanbietern verlassen, sodass FedCM in Browsern funktioniert, die diese blockieren.
- In FedCM ist die Schnittstelle, in der sich der Benutzer beim IdP authentifiziert, in den Browser integriert, was ihm eine konsistentere und nahtlosere Erfahrung ohne Umleitungen bietet.

FedCM ist in die [Credential Management API](/de/docs/Web/API/Credential_Management_API) integriert, ein Framework, das es Browsern ermöglicht, mit verschiedenen Arten von Anmeldedaten zu arbeiten. Um über die FedCM API zu authentifizieren, rufen Sie [`CredentialsContainer.get()`](/de/docs/Web/API/CredentialsContainer/get) auf und übergeben verschiedene Optionen, einschließlich:

- Bezeichner für die IdP(s), die der Benutzer verwenden kann, um sich bei dieser RP anzumelden
- Den Kontext, in dem die RP den IdP verwendet (z.B. ob der Benutzer sich registrieren oder anmelden möchte).

Wenn Sie `CredentialsContainer.get()` aufrufen, wird der Browser:

- Die von Ihnen angegebenen IdP(s) kontaktieren
- Den Benutzer bitten, sich bei seinem gewählten IdP anzumelden, falls er noch nicht angemeldet ist
- Den IdP bitten, die Identität des Benutzers zu überprüfen
- Ein Token zurückgeben, das die RP verwenden kann, um den Benutzer anzumelden.

### FedCM und föderierte Identitätsprotokolle

FedCM implementiert selbst kein föderiertes Identitätsprotokoll wie OIDC. Sie können es sich als Transport zwischen der RP, dem Benutzer und dem IdP vorstellen, aber es ist agnostisch gegenüber den ausgetauschten Gegenständen oder ihrer Interpretation.

Zum Beispiel könnte das von `CredentialsContainer.get()` zurückgegebene Token in einer Implementierung von OIDC mit FedCM ein Autorisierungscode sein und die RP müsste dann das Identitätstoken vom Token-Endpunkt des IdP abrufen. Das heißt, FedCM kümmert sich nur um den ersten Teil des [Authentifizierungsablaufs](#authentifizierungsablauf). Das [FedCM for OAuth](https://github.com/aaronpk/oauth-fedcm-profile) Dokument beschreibt, wie OAuth und OIDC mit FedCM implementiert werden könnten.

Im Allgemeinen, wenn eine RP beschließt, einen bestimmten IdP für die föderierte Anmeldung zu verwenden, registriert sich die RP beim IdP, und als Teil dieses Prozesses sollte der IdP der RP genau erklären, welche Argumente erwartet werden, wie mit den vom IdP zurückgegebenen Objekte umzugehen ist und welches andere Verhalten von der RP erwartet wird.

## Auswahl von IdPs

Wenn Sie sich entscheiden, Ihrer Website eine föderierte Anmeldung hinzuzufügen, gehört zu den grundlegendsten Entscheidungen, die Sie treffen müssen, die Auswahl der Identitätsanbieter, mit denen Sie arbeiten möchten. Wenn ein potenzieller Benutzer Ihrer Website bereits ein Konto bei einem Ihrer ausgewählten IdPs hat, ist es für ihn viel einfacher, ein neues Konto auf Ihrer Website zu erstellen.

Daher werden Sie wahrscheinlich mehr Registrierungen sehen, wenn ein großer Teil Ihrer erwarteten Benutzerbasis bereits ein Konto bei Ihrem gewählten IdP hat.

Es ist üblich, dass eine Website ihren Benutzern die Anmeldung mit mehr als einem IdP ermöglicht, um mehr Benutzer abzudecken und ihnen mehr Wahlmöglichkeiten zu geben. Das Anbieten zu vieler Optionen führt jedoch zu einer verwirrenden Benutzererfahrung, und Benutzer, die Konten bei mehr als einem Ihrer IdPs haben, können Schwierigkeiten haben, sich zu erinnern, bei welchem sie sich angemeldet haben.

Es ist auch üblich, eine Fallback-Option für Benutzer bereitzustellen, die keinen Ihrer ausgewählten IdPs nutzen können. Bei dieser Option authentifizieren sich Benutzer direkt bei Ihrer Website und verwenden eine Methode wie ein [Passwort](/de/docs/Web/Security/Authentication/Passwords) oder ein [OTP](/de/docs/Web/Security/Authentication/OTP).

Welche Identitätsanbieter Sie auch wählen, sie werden Ihnen detaillierte Anweisungen und Werkzeuge zur Integration Ihrer Website mit ihrem System bereitstellen, und dies wird wahrscheinlich viele der Komplexitäten eines Protokolls wie OIDC bewältigen. Es ist jedoch äußerst hilfreich zu verstehen, was unter der Oberfläche passiert.

## Stärken und Schwächen

Für Webentwickler besteht der größte Vorteil der Verwendung föderierter Identität darin, den Anmeldeablauf für diejenigen Benutzer zu verringern, die bereits ein Konto bei einem der ausgewählten IdPs haben. Zusätzlich können ihre ausgewählten IdPs Websites helfen, föderierte Identität sicher zu implementieren.

Aus sicherheitstechnischer Sicht besteht der größte Vorteil darin, dass Benutzer keine neuen Anmeldedaten für jedes Konto erstellen müssen, sodass das Risiko verringert wird, dass sie schwache, leicht zu merkende Passwörter wählen oder Passwörter über verschiedene Websites hinweg wiederverwenden.

Die Verwendung einer föderierten Identität ist eine sicherere Option als nur Passwörter, aber sie hat immer noch Probleme:

- Die Vorteile für Websites, IdPs mit einer großen Benutzerbasis zu wählen, führen dazu, dass der Raum tendenziell von wenigen sehr großen Anbietern monopolisiert wird. Dies führt wiederum dazu, dass Benutzer an diese Anbieter gebunden sind, was dazu führt, dass Websites für Benutzer, die sie nicht nutzen möchten (oder nicht können), ein schlechteres Erlebnis bieten.

- Wenn eine Website nicht bereit ist, Benutzer, die sich nicht bei ihren ausgewählten IdPs anmelden möchten (oder nicht können), vollständig auszuschließen, muss die Website immer noch alle Komplexitäten einer Fallback-Authentifizierungsmethode bewältigen.

- Wie jedes Authentifizierungssystem, das darauf beruht, dass der Benutzer ein Geheimnis auf einer Website eingibt, ist föderierte Identität anfällig für [Phishing](/de/docs/Web/Security/Attacks/Phishing)-Angriffe.
