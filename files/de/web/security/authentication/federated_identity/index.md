---
title: Föderierte Identität
slug: Web/Security/Authentication/Federated_identity
l10n:
  sourceCommit: 300c27d29717bdf19fd1c4345501dc73a7f03a35
---

In einem **föderierten Identitätssystem** delegiert eine Website die Authentifizierung an eine dritte Partei.

- Die dritte Partei, die üblicherweise als {{Glossary("identity_provider", "Identity Provider (IdP)")}} bezeichnet wird, verwaltet die Anmeldedaten eines Benutzers und kann Benutzer authentifizieren.
- Die Website, die üblicherweise als {{Glossary("relying_party", "Relying Party (RP)")}} bezeichnet wird, vertraut dem IdP, Aussagen über die Identität eines Benutzers zu machen.

Wenn der Benutzer sich auf der Website anmelden möchte, leitet die Website ihn an den IdP weiter. Der Benutzer authentifiziert sich beim IdP, und der IdP gibt ein Token an die Website zurück, das anzeigt, dass die Authentifizierung erfolgreich war. Die Website überprüft, ob das Token gültig ist, und meldet den Benutzer an, wenn dies der Fall ist.

![Überblick über die Anmeldung mit föderierter Identität.](federated-identity-overview.svg)

> [!NOTE]
> Föderierte Identität ist eigentlich keine Authentifizierungsmethode: Sie ist vielmehr eine Architektur, innerhalb derer verschiedene Authentifizierungsmethoden verwendet werden können. Ein IdP könnte sich dafür entscheiden, Benutzer mit einer oder mehreren Methoden zu authentifizieren, wie z.B. traditionellen Passwörtern, Einmalkennwörtern, Biometrie oder Passkeys.

Dieses Modell bietet sowohl für Benutzer als auch für Websites einige Vorteile:

- Websites müssen keine eigene Authentifizierung implementieren oder Benutzerdaten sicher handhaben.
- Ein einzelner IdP kann Benutzer für viele verschiedene Websites authentifizieren. Das bedeutet, dass der Benutzer nicht für jede Website ein anderes Anmeldedatum verwenden muss: Wenn Anmeldedaten Passwörter sind, verringert dies das Risiko der Passwortwiederverwendung oder dass der Benutzer schwache, leicht zu merkende Passwörter wählt.
- Wenn ein Benutzer bereits ein Konto bei einem IdP hat, dem Ihre Website vertraut, dann können sich Benutzer viel leichter auf Ihrer Seite anmelden, da sie keine neuen Anmeldedaten speziell für Ihre Seite erhalten müssen.

In diesem Leitfaden werden wir untersuchen, wie eine Website mit einem IdP zusammenarbeiten kann, um ihren Nutzern eine föderierte Anmeldung hinzuzufügen. Wir werden Folgendes behandeln:

- Die Hauptabläufe, die im [OpenID Connect (OIDC)](https://openid.net/developers/how-connect-works/) Protokoll definiert sind, das der dominierende Standard für föderierte Identität ist, und bewährte Vorgehensweisen bei deren Implementierung.
- Wie Browsereinschränkungen für Drittanbieter-Cookies Probleme für die Implementierung von föderierten Identitäten schaffen.
- Die [Federated Credential Management (FedCM) API](/de/docs/Web/API/FedCM_API), die die Rolle des Browsers deutlich aktiver macht, um die Rolle der RP zu vereinfachen und die Abhängigkeit von Cookies von Drittanbietern zu vermeiden.
- Wie eine Website einen IdP auswählen kann, und wie diese Wahl den Implementierungsprozess der föderierten Anmeldung beeinflussen kann.

## OpenID Connect

Der Standard, der am häufigsten für föderierte Identitäten im Web verwendet wird, ist [OpenID Connect (OIDC)](https://openid.net/developers/how-connect-works/), ein Authentifizierungsprotokoll, das auf dem [OAuth 2.0-Authorization-Framework](https://datatracker.ietf.org/doc/html/rfc6749) aufgebaut ist.

### Authentifizierungsablauf

In diesem Abschnitt werden wir zunächst den Hauptauthentifizierungsablauf in OIDC durchgehen. Es gibt viele Optionen innerhalb des OIDC-Authentifizierungsablaufs: In diesem Durchgang werden wir die empfohlenen Optionen vorstellen und später auf Alternativen eingehen.

Dieser Ablauf ist in der [OpenID Connect Core](https://openid.net/specs/openid-connect-core-1_0.html) Spezifikation definiert.

Voraussetzung ist, dass die RP dem IdP bekannt ist:

- Der IdP muss eine Kennung für die RP haben, die als Client-ID bezeichnet wird.
- Die RP muss in der Lage sein, sich beim IdP zu authentifizieren.

Die Authentifizierung könnte ein gemeinsames Geheimnis namens Client-Geheimnis oder einen anderen Mechanismus wie die TLS-Client-Authentifizierung verwenden.

> [!NOTE]
> Die OpenID-Spezifikationen verwenden den Begriff "OpenID Provider" (OP) für das, was wir in diesem Leitfaden als IdP bezeichnen.

![Der OIDC-Authentifizierungsablauf](oidc-auth-flow.svg)

Das erste, was hier zu beachten ist, ist, dass der Ablauf aus zwei Teilen besteht.

- **Authentifizierungsanfrage**: Die RP stellt eine Anfrage an den _Authorization Endpoint_ des IdP und bittet den IdP, den Benutzer zu authentifizieren. Der IdP authentifiziert den Benutzer und gibt einen _Authorization Code_ an die RP zurück. Der Code läuft nach einer kurzen Zeit ab (empfohlen sind maximal 10 Minuten).
- **Token-Anfrage**: Die RP sendet den Authorization Code an einen separaten Endpunkt im IdP, genannt _Token Endpoint_, und dieser Endpunkt antwortet mit einem Objekt, das zwei Tokens enthält:
  - Ein _Access Token_, das dem Benutzer den Zugriff auf spezifische Ressourcen auf der Website ermöglicht (ähnlich einem API-Schlüssel).
  - Ein _ID-Token_, das den Benutzer identifiziert und es der RP ermöglicht, den Benutzer anzumelden.

In der Authentifizierungsanfrage:

1. Der Benutzer fordert an, sich bei der RP anzumelden.

2. Die RP leitet den Browser an den Authorization Endpoint des IdP weiter und bittet um die Authentifizierung des Benutzers. Die RP kann verschiedene Parameter zusammen mit der Anfrage bereitstellen, darunter:
   - `client_id`: Identifiziert diese RP beim IdP.
   - `response_type`: Immer `"code"`, wenn wir den hier beschriebenen zweistufigen Ablauf verwenden, was die empfohlene Option ist.
   - `redirect_uri`: Die URL in der RP, zu der der IdP umleiten soll, sobald er versucht hat, den Benutzer zu authentifizieren. Dies ist die URL, an die der IdP den Authorization Code übermittelt.
   - `code_challenge`: Ein kryptografischer {{Glossary("hash", "Hash")}} eines geheimen Schlüssels, der speziell für diese Authorization-Anfrage verwendet wird und vom Token Endpoint verwendet wird, um sicherzustellen, dass die Token-Anfrage wirklich das Gegenstück zu dieser Authorization-Anfrage ist.
   - `scope`: Eine Liste von Zeichenfolgen, die angeben, welche Benutzerdatenmengen die RP anfordern möchte.

3. Der IdP authentifiziert den Benutzer. Das Protokoll schreibt keine spezielle Methode vor: Der IdP könnte ein Passwort, ein Einmalkennwort, biometrische Daten oder eine andere geeignete Methode verwenden.

4. Wenn die Authentifizierung erfolgreich ist, generiert der IdP den Authorization Code. Er speichert auch den `code_challenge`-Wert und verknüpft ihn mit dem Authorization Code. Anschließend leitet der IdP den Browser zur `redirect_uri` der RP um und übergibt den Authorization Code als Parameter.

In der Token-Anfrage:

1. Die RP stellt eine {{httpmethod("POST")}}-Anfrage an den Token Endpoint des IdP. Diese Anfrage enthält die folgenden Parameter:
   - `client_id`: Identifiziert diese RP beim IdP.
   - `client_secret`: Das geheime, mit dem sich die RP beim IdP authentifiziert: Dies könnte jeder zwischen der RP und dem IdP zuvor vereinbarte Wert sein. Anstatt eines gemeinsamen Geheimnisses könnten die RP und der IdP einen alternativen Mechanismus zur Client-Authentifizierung verwenden, wie z.B. TLS-Client-Authentifizierung.
   - `grant_type`: Dies sollte `"authorization_code"` sein.
   - `code`: Der Authorization Code.
   - `code_verifier`: Dies ist das ursprüngliche Geheimnis, das verwendet wurde, um den `code_challenge`-Parameter in der Authentifizierungsanfrage zu erstellen.

2. Der IdP validiert die Anfrage:
   - Er authentifiziert, dass die Anfrage von der bestimmten RP stammt, entweder durch das Client-Geheimnis oder durch eine andere Form der Client-Authentifizierung.
   - Er hasht den `code_verifier`-Parameter und überprüft, ob das Ergebnis mit dem `code_challenge` übereinstimmt.

3. Wenn die Anfrage gültig ist, antwortet der IdP mit zwei Tokens:
   - Ein Access Token, das dem Benutzer den Zugriff auf gewisse Ressourcen in der RP gewährt.
   - Ein ID Token, das den Benutzer identifiziert. Dies ist ein kryptografisch signierter [JSON Web Token](https://www.jwt.io/).

4. Die RP validiert die Tokens: Unter anderem überprüft sie die Signatur des IdP auf dem ID Token. Wenn die Validierung erfolgreich ist, meldet die RP den Benutzer an.

### Sicherheitsmerkmale

In diesem Abschnitt fassen wir die Hauptsicherheitsmerkmale des OIDC-Authentifizierungsablaufs zusammen, den wir gerade beschrieben haben. Für die vollständigen Details siehe Best Current Practice for OAuth 2.0 Security.

#### Authorization Code Flow

Der zweistufige Ablauf, den wir beschrieben haben, wird als "Authorization Code Flow" bezeichnet. In einem alternativen Ablauf, der als "Implicit Flow" bekannt ist, existiert nur der erste Schritt, und die Antwort auf die Authentifizierungsanfrage enthält bereits die Access und ID Tokens. Dies ist unsicher, da die Tokens dem Frontend der RP ausgesetzt sind, das als weitaus weniger sicher als das Backend gilt. Beispielsweise könnte ein Angreifer bei einem erfolgreichen [XSS](/de/docs/Web/Security/Attacks/XSS)-Angriff oder wenn der Benutzer eine bösartige Browsererweiterung installiert, möglicherweise die Tokens des Benutzers stehlen.

Aus diesem Grund sollten Websites immer den Authorization Code Flow verwenden. Selbst wenn ein Angreifer den Authorization Code stehlen kann, muss er den Token Endpoint noch dazu bringen, ihm die Tokens im Austausch für den Code zu geben.

#### Client-Authentifizierung

In dem Ablauf, den wir beschrieben haben, authentifiziert sich die RP beim Token Endpoint, wenn sie die Token-Anfrage stellt. Das bedeutet, dass ein Angreifer, falls er es schafft, den Authorization Code zu stehlen, dennoch erfolgreich die RP nachahmen muss, um die Tokens vom IdP zu erhalten.

Die OAuth-Spezifikation unterscheidet zwischen [_confidential_ und _public_ clients](https://datatracker.ietf.org/doc/html/rfc6749#section-2.1). Vertrauliche Clients sind im Wesentlichen RPs, die ein Geheimnis bewahren können, während öffentliche Clients solche sind, die dies nicht können.

Die Spezifikation sieht vor, dass Clients im Browser des Benutzers öffentliche Clients sind, aus dem Grund, den wir bereits angesprochen haben: Es ist zu einfach für einen Angreifer, Zugriff auf Geheimnisse im Browser zu erhalten, z.B. durch Angriffe wie XSS. Clients auf einem Webserver sind vertrauliche Clients.

In OIDC dürfen nur vertrauliche Clients die Client-Authentifizierung verwenden, da nur vertrauliche Clients berechtigt sind, die Sicherheit der Client-Anmeldedaten aufrechtzuerhalten.

Die RP kann sich beim IdP mit einem gemeinsamen Geheimnis authentifizieren, aber [es ist besser, eine Methode zu verwenden, die auf Public-Key-Kryptographie basiert](https://www.rfc-editor.org/rfc/rfc9700.html#name-client-authentication), wie z.B. die {{Glossary("TLS", "TLS")}}-Client-Authentifizierung.

#### Proof Key for Code Exchange (PKCE)

Die in der Authentifizierungsanfrage und der Token-Anfrage bereitgestellten Werte `code_challenge` und `code_verifier` stammen von einem Mechanismus namens _Proof Key for Code Exchange_ (PKCE), der in {{rfc("7636")}} spezifiziert ist.

In der Authentifizierungsanrequest:

- Die RP generiert einen schwer zu erratenden und spezifisch für diese Authentifizierungsanfrage gültigen Wert. Dieser Wert wird als _code verifier_ bezeichnet.
- Die RP erstellt einen {{Glossary("hash", "kryptografischen Hash")}} des Code-Verifiers und verwendet ihn als `code_challenge`-Parameter in der Authentifizierungsanfrage.
- Der IdP speichert die Code-Challenge und verknüpft sie mit dem Autorisierungscode, den er an die RP zurückgibt.

In der Token-Anfrage:

- Die RP übergibt den Code-Verifier im _code_verifier_-Parameter.
- Der IdP hasht den Code-Verifier und vergleicht das Ergebnis mit der gespeicherten Code-Challenge: Wenn sie nicht übereinstimmen, wird die Token-Anfrage abgelehnt.

PKCE schützt vor zwei Angriffen: [CSRF gegen die Redirect-URL der RP](#csrf_gegen_die_redirect_url) und [Autorisierungscode-Injection](#autorisation_code_injection).

##### CSRF gegen die Redirect-URL

In einem CSRF-Angriff wird der Browser des Benutzers dazu gebracht, den Benutzer in das Konto des Angreifers einzuloggen. Dies kann verschiedene negative Folgen haben: Beispielsweise sind alle privaten Daten, die der Benutzer auf das Konto hochlädt, für den Angreifer verfügbar und unter dessen Kontrolle.

Wenn PKCE nicht verwendet würde, funktioniert der CSRF-Angriff wie folgt:

1. Der Angreifer beantragt, sich bei der RP anzumelden. Die RP stellt eine Authentifizierungsanfrage an den IdP und der Angreifer authentifiziert sich beim IdP.

2. Der IdP generiert einen Autorisierungscode für den Angreifer und leitet den Angreiferbrowser zur Redirect-URL der RP mit dem Autorisierungscode als URL-Parameter um.

3. Der Angreifer fängt diese Umleitung ab, extrahiert die Redirect-URL einschließlich des Autorisierungscodes und beendet den Ablauf.

4. Der Angreifer bringt den Benutzer dazu, auf die Redirect-URL zu klicken. Für die RP sieht es aus, als wäre es eine Antwort des IdP auf eine Authentifizierungsanfrage, die vom Benutzer stammt.

5. Die RP stellt eine Token-Anfrage an den IdP, einschließlich des Autorisierungscodes des Angreifers, den sie von der Redirect-URL übernommen hat.

6. Der IdP antwortet mit den Tokens des Angreifers.

7. Die RP meldet den Benutzer im Konto des Angreifers an: Jetzt stehen alle Informationen oder Anweisungen, die sie bereitstellen, unter der Kontrolle des Angreifers.

Im Wesentlichen funktioniert der Angriff, weil die RP nicht weiß, dass die Anfrage zur Redirect-URL keine Antwort auf eine im Auftrag des Benutzers gestellte Anfrage ist.

Wenn PKCE verwendet wird:

- In Schritt 1 generiert die RP einen Code-Verifier für die Anfrage des Angreifers und sendet die gehashte Code-Challenge an den IdP.
- In Schritt 2 speichert der IdP die Code-Challenge zusammen mit dem Autorisierungscode des Angreifers.
- In Schritt 5 kann die RP keinen Code-Verifier für den Benutzer finden, der zur im IdP gespeicherten Challenge passt, sodass die Token-Anfrage fehlschlägt.

Eine alternative Verteidigung ist der in OAuth 2.0 definierte `state`-Parameter. Bei dieser Verteidigung liefert die RP einen unvorhersehbaren Wert als Parameter in der Authentifizierungsanfrage, und der IdP enthält den gleichen Wert in der Antwort: Die RP überprüft, ob sie übereinstimmen. Da der Angreifer den Wert von `state` nicht vorhersagen kann, kann er keinen passenden Wert an die Redirect-URL der RP senden.

##### Autorisierungscode-Injection

Bei einem Autorisierungscode-Injection-Angriff stiehlt der Angreifer den Autorisierungscode des Zielbenutzers und kann ihn in den Anmeldevorgang des Angreifers selbst einschleusen. Das Ergebnis ist, dass der Angreifer in das Konto des Benutzers eingeloggt wird.

Es wird allgemein akzeptiert, dass Autorisierungscodes in OIDC aufgrund ihrer Exposition gegenüber dem Browser des Benutzers verwundbar sind. Beispielsweise kann eine bösartige Browsererweiterung, wenn der Benutzer eine solche installiert hat, Autorisierungscodes stehlen.

Die Hauptabschreckung hier ist die [Client-Authentifizierung](#client-authentifizierung): Da sich die RP beim IdP authentifiziert, wenn sie eine Token-Anfrage stellt, kann ein Angreifer nicht einfach eine eigene Token-Anfrage mit dem gestohlenen Code stellen. Bei dem Autorisierungscode-Injection-Angriff handelt es sich jedoch um die echte RP, die die Token-Anfrage stellt, sodass die Client-Authentifizierung erfolgreich ist.

Wenn PKCE nicht verwendet würde, funktioniert der Autorisierungscode-Injection-Angriff wie folgt:

1. Dem Angreifer gelingt es, den Autorisierungscode des Benutzers zu stehlen. Beispielsweise hat der Benutzer eine bösartige Browsererweiterung installiert, die auf die vom Browser besuchten URLs zugreifen kann.

2. Der Benutzer versucht, sich anzumelden. Die RP stellt eine Authentifizierungsanfrage, der Benutzer authentifiziert sich, und der IdP leitet den Browser zur Redirect-URL der RP mit dem Autorisierungscode als URL-Parameter um.

3. An diesem Punkt ruft die bösartige Browsererweiterung den Autorisierungscode auf, sendet ihn dem Angreifer und beendet den Authentifizierungsablauf des Benutzers.

4. Der Angreifer erhält den Autorisierungscode des Benutzers.

5. Der Angreifer startet seinen eigenen OIDC-Authentifizierungsablauf, fängt jedoch die Authentifizierungsantwort des IdP ab und ersetzt den Autorisierungscode durch den Code, den er vom Benutzer gestohlen hat. Dies ist einfach, da die Authentifizierungsantwort für den Angreifer bestimmt ist und durch das Gerät des Angreifers läuft.

6. Die RP setzt dann der Authentifizierungsablauf für den Angreifer fort, indem sie die Token-Anfrage an den IdP stellt, einschließlich des injizierten Autorisierungscodes des Benutzers durch den Angreifer.

7. Der IdP antwortet mit den Tokens des Benutzers.

8. Die RP meldet den Angreifer in das Benutzerkonto an.

Beachten Sie, dass in diesem Fall die Verwendung eines `state`-Parameters nicht hilft, weil die Authentifizierungsanfrage und -antwort wirklich zum selben Ablauf - dem des Angreifers - gehören.

PKCE schützt vor diesem Angriff, weil:

- In Schritt 2 generierte die RP einen Code-Verifier und sendete die gehashte Code-Challenge an den IdP, der sie zusammen mit dem Benutzer-Code speichert.
- In Schritt 6 enthält die Token-Anfrage der RP den Code-Verifier _des Angreifers_, aber den _Code des Benutzers_. Der IdP sieht die Code-Challenge für den Benutzer-Code nach: Sie wird nicht zum Code-Verifier des Angreifers passen, und die Token-Anfrage wird abgelehnt.

Eine Alternative zu PKCE, die in OIDC spezifiziert ist, ist der [`nonce`](https://datatracker.ietf.org/doc/html/draft-ietf-oauth-security-topics#name-nonce)-Wert. Die RP gibt diesen als weiteren Parameter in der Authentifizierungsanfrage an: Der IdP speichert ihn, und der Token-Endpunkt gibt ihn zusammen mit den Tokens an die RP zurück. Die RP überprüft dann, ob der zurückgegebene Wert identisch mit dem ursprünglichen Wert ist.

##### Sicherstellen, dass PKCE verwendet wird

Um sicherzustellen, dass PKCE verwendet wird, muss die RP bestätigen, dass der gewählte IdP nicht nur PKCE unterstützt, sondern auch die Verwendung von PKCE _verlangt_ - die Token-Anfrage wird abgelehnt, wenn kein gültiger Code-Verifier enthalten ist.

Andernfalls ist eine RP anfällig für einen [PKCE-Downgrade-Angriff](https://datatracker.ietf.org/doc/html/rfc9700#name-pkce-downgrade-attack), bei dem ein Angreifer den IdP dazu bringt zu glauben, dass die RP PKCE in einer Token-Anfrage nicht wünscht.

### Architekturen für OIDC-Clients

Die [OAuth 2.0 for Browser-Based Applications](https://datatracker.ietf.org/doc/html/draft-ietf-oauth-browser-based-apps-25) Spezifikation beschreibt, wie die Webanwendungsarchitektur die Sicherheitsbedrohungen beeinflussen kann, denen OIDC-Clients (d.h. relying parties) ausgesetzt sind, und gibt einige Empfehlungen zur Architektur von Webanwendungen.

Insbesondere wird festgestellt, dass:

- Das sicherste Muster ist eines, bei dem die Website einen Webserver verwendet, um alle OAuth/OIDC-Interaktionen und Interaktionen mit APIs zu handhaben, die durch Access Tokens geschützt sind. In diesem Muster kann die RP ein vertraulicher Client sein, da sie Client-Geheimnisse im Server aufbewahren kann. Sie kann auch alle Tokens im Server aufbewahren, einschließlich Access Tokens.

- Das nächstsicherste Muster ist eines, bei dem die Website einen Webserver verwendet, um alle OAuth/OIDC-Interaktionen zu handhaben, die das Access Token dann jedoch an das Frontend zurückgibt, und das Frontend dann direkt API-Anfragen stellt. In diesem Szenario kann die Website ein vertraulicher Client sein, aber bösartiger Code, der im Browser läuft (z.B. durch einen XSS-Angriff), kann möglicherweise Access Tokens stehlen. Das Frontend muss jedoch keine Access Tokens langfristig speichern: Es kann sie vom Backend abrufen, wenn es sie benötigt.

- Das am wenigsten sichere Muster ist eines, bei dem OAuth/OIDC-Interaktionen und Interaktionen mit APIs beide im Frontend stattfinden. Dies wäre beispielsweise die natürliche Architektur für eine Anwendung, die vollständig im Browser ausgeführt wird. In dieser Architektur kann die RP kein vertraulicher Client sein, da sie kein Client-Geheimnis zuverlässig aufbewahren kann. Das bedeutet, dass sie sich nicht beim IdP authentifizieren kann. Sie muss auch persistente Tokens speichern, was das Risiko erhöht, dass bösartiger Code sie stiehlt.

Die Spezifikation umfasst auch detaillierte Empfehlungen für Sicherheitspraktiken, die in jedem dieser drei Szenarien befolgt werden sollten.

### OIDC-Abmeldung

Abmeldungsszenarien sind in einem föderierten Identitätssystem komplexer als in einem nicht-föderierten System, weil:

- Der Benutzer könnte sich entweder auf der Seite der RP oder auf der Seite des IdP abmelden.
- Der Benutzer könnte sich entscheiden, sich nur von der RP abzumelden oder global abzumelden: das heißt, sich von allen RPs abzumelden, bei denen er mit diesem IdP angemeldet ist. Dies ist eine häufige Anforderung, wenn wir föderierte Identität verwenden, um ein {{Glossary("single_sign-on", "Single Sign-On (SSO)")}} System zu erstellen, bei dem ein Mitarbeiter mit einem einzigen Satz von Unternehmensanmeldedaten auf E-Mails, einen Bug-Tracker und ein Diskussionsforum zugreifen kann.

Die Unterstützung dieser Szenarien bedeutet die Implementierung eines Kommunikationsmechanismus zwischen der RP und dem IdP. Beispielsweise:

- Wenn sich der Benutzer beim IdP abmeldet, sollte die RP benachrichtigt werden und den Benutzer bei der RP abmelden.
- Wenn sich der Benutzer bei der RP abmeldet, sollte der IdP benachrichtigt werden und in der Lage sein, den Benutzer bei allen RPs abzumelden, bei denen er derzeit angemeldet ist.

Die OpenID-Spezifikationen definieren zwei allgemeine Ansätze zur Implementierung dieser Koordination, die sie als "Front Channel Logout" und "Back Channel Logout" bezeichnen.

Beim [Front Channel Logout](https://openid.net/specs/openid-connect-frontchannel-1_0.html) wird der Browser zur Vermittlung der Kommunikation verwendet. Bei diesem Ansatz bettet die Seite des Senders ein {{htmlelement("iframe")}} ein, dessen Inhalt vom Empfänger geladen wird. Beispielsweise, wenn sich der Benutzer beim IdP abmeldet, kann der IdP ein `<iframe>` einbetten, dessen `src`-Attribut auf die Logout-URL der RP zeigt: Wenn das `<iframe>` gerendert wird, stellt der Browser eine {{httpmethod("GET")}}-Anfrage an diese URL, die von der RP als Anweisung interpretiert wird, den Benutzer abzumelden.

Beim [Back Channel Logout](https://openid.net/specs/openid-connect-backchannel-1_0.html) kommunizieren die RP und der IdP direkt miteinander, ohne den Browser. Beispielsweise, wenn der IdP die RP informieren muss, den Benutzer abzumelden, stellt der IdP eine {{httpmethod("POST")}}-Anfrage direkt an die RP.

## Cookies von Drittanbietern

Bei der Implementierung eines föderierten Identitätssystems müssen wir die Interaktionen zwischen der RP, dem IdP und dem Benutzer koordinieren. Einige Implementierungen dieser Koordination hängen von der Unterstützung durch den Browser für [Cookies von Drittanbietern](/de/docs/Web/Privacy/Guides/Third-party_cookies) ab.

Beispielsweise verwenden wir beim "Front Channel Logout" (einer der Ansätze zur Implementierung der [Abmeldung in OpenID Connect](#oidc_abmeldung)) bereichsübergreifende {{htmlelement("iframe")}}-Elemente, bei denen das Dokument der RP ein `<iframe>` enthält, dessen Inhalt vom IdP geladen wird, oder umgekehrt. Dies hängt davon ab, dass das eingebettete `<iframe>` seine Cookies an seinen Ursprung senden kann.

Ebenso verwendet der Hauptablauf der [OpenID Connect-Authentifizierung](#authentifizierungsablauf) Seitenumleitungen in voller Größe, um die Teilnehmer zu koordinieren. Dies ist eine ablenkende Erfahrung für Benutzer und schwer für {{Glossary("SPA", "Single-Page-Apps")}} zu unterstützen. Eine bessere Benutzererfahrung kann erreicht werden, indem der IdP als `<iframe>` auf der Seite der RP eingebettet wird, und dies hängt wiederum von Dritten-Cookies ab.

Da Cookies von Drittanbietern jedoch häufig zur [Verfolgung von Benutzern](/de/docs/Web/Privacy/Guides/Third-party_cookies#what_is_the_problem_with_third-party_cookies) verwendet werden, haben Browser Schritte unternommen, um die Unterstützung für sie abzulehnen und zu entfernen, und sie werden standardmäßig in einigen Browsern nicht mehr unterstützt.

Aus diesem Grund empfehlen wir, keine Funktionen für föderierte Identität zu implementieren, die von Cookies von Drittanbietern abhängig sind.

## Die FedCM API

Die [Federated Credential Management API (FedCM API)](/de/docs/Web/API/FedCM_API) bietet integrierte Browserunterstützung für föderierte Identität. Wir können ihre Verwendung derzeit nicht uneingeschränkt empfehlen, da die API noch nicht von allen Browsern unterstützt wird und sich noch in aktiver Entwicklung befindet. Dennoch verspricht sie mehrere Vorteile gegenüber der direkten Implementierung eines Protokolls wie OpenID Connect:

- Im zuvor beschriebenen OIDC-Ablauf muss die Website, die OIDC verwendet (d.h. die RP), die Interaktionen zwischen sich, dem Benutzer und dem IdP koordinieren. Wie wir gesehen haben, ist dies kompliziert und daher fehleranfällig. Mit FedCM übernimmt der Browser diesen Vorgang: Als RP rufen Sie eine Browser-API auf, und der Browser findet den IdP, fordert den Benutzer zur Authentifizierung auf und gibt ein Token vom IdP zurück, das die RP zum Anmelden des Benutzers verwenden kann.
- Als Folge davon müssen Sie nicht auf Trittanbieter-Cookies angewiesen sein, sodass FedCM in Browsern funktioniert, die sie blockieren.
- In FedCM ist die Oberfläche, in der sich der Benutzer beim IdP authentifiziert, in den Browser integriert, was ihm ein konsistenteres und nahtloseres Erlebnis ohne Umleitungen bietet.

FedCM ist in die [Credential Management API](/de/docs/Web/API/Credential_Management_API) integriert, ein Framework, das es Browsern ermöglicht, mit einer Vielzahl verschiedener Anmeldedaten zu arbeiten. Um sich mit der FedCM API zu authentifizieren, rufen Sie [`CredentialsContainer.get()`](/de/docs/Web/API/CredentialsContainer/get) auf, wobei verschiedene Optionen übergeben werden, darunter:

- Kennungen für die IdP(s), die der Benutzer möglicherweise verwendet, um sich bei dieser RP anzumelden
- Der Kontext, in dem die RP den IdP verwendet (z.B. ob der Benutzer sich registrieren oder anmelden möchte).

Wenn Sie `CredentialsContainer.get()` aufrufen, wird der Browser:

- Die von Ihnen angegebenen IdPs kontaktieren
- Den Benutzer auffordern, sich bei dem von ihm gewählten IdP anzumelden, wenn er nicht bereits angemeldet ist
- Den IdP bitten, die Identität des Benutzers zu überprüfen
- Ein Token zurückgeben, das die RP zum Anmelden des Benutzers verwenden kann.

### FedCM und föderierte Identitätsprotokolle

FedCM selbst implementiert kein föderiertes Identitätsprotokoll wie OIDC. Sie können es sich als eine Art Transport zwischen der RP, dem Benutzer und dem IdP vorstellen, aber es ist offen in Bezug auf die ausgetauschten Elemente oder deren Interpretation.

Beispielsweise kann bei einer Implementierung von OIDC unter Verwendung von FedCM das von `CredentialsContainer.get()` zurückgegebene Token ein Autorisierungscode sein, und die RP muss dann das Identitätstoken vom Token-Endpunkt des IdP abrufen. Das heißt, FedCM übernimmt nur den ersten Teil des [Authentifizierungsablaufs](#authentifizierungsablauf). Das [FedCM für OAuth](https://github.com/aaronpk/oauth-fedcm-profile) Dokument beschreibt, wie OAuth und OIDC mit FedCM implementiert werden könnten.

Im Allgemeinen, wenn eine RP beschließt, einen bestimmten IdP für die federierte Anmeldung zu verwenden, wird die RP sich beim IdP registrieren, und im Rahmen dieses Prozesses sollte der IdP der RP genau erklären, welche Argumente erwartet werden, wie die vom IdP zurückgegebenen Objekte gehandhabt werden sollen und welches Verhalten von der RP erwartet wird.

## Wahl der IdPs

Wenn Sie sich entscheiden, eine föderierte Anmeldung zu Ihrer Website hinzuzufügen, ist eine der grundlegenden Entscheidungen, die Sie treffen müssen, welche Identity Provider Sie verwenden möchten. Wenn ein potenzieller Benutzer Ihrer Website bereits ein Konto bei einem Ihrer gewählten IdPs hat, ist es für ihn viel einfacher, ein neues Konto auf Ihrer Website zu erstellen.

Daher werden Sie wahrscheinlich mehr Anmeldungen sehen, wenn ein großer Teil Ihrer erwarteten Benutzerbasis bereits ein Konto bei Ihrem gewählten IdP besitzt.

Es ist üblich, dass eine Website ihren Benutzern ermöglicht, sich bei mehr als einem IdP anzumelden, um mehr Benutzer abzudecken und ihnen mehr Wahlmöglichkeiten zu geben. Wenn jedoch zu viele Optionen angeboten werden, führt dies zu einer verwirrenden Benutzererfahrung, und Benutzer, die Konten bei mehreren Ihrer IdPs haben, haben möglicherweise Schwierigkeiten, sich daran zu erinnern, bei welchem sie sich angemeldet haben.

Es ist auch eine gängige Praxis, eine Rückfallebene für Benutzer anzubieten, die keinen Ihrer gewählten IdPs verwenden können. In dieser Option authentifizieren sich Benutzer direkt bei Ihrer Website mit einer Methode wie einem [Passwort](/de/docs/Web/Security/Authentication/Passwords) oder einem [OTP](/de/docs/Web/Security/Authentication/OTP).

Welche Identity Provider Sie auch wählen, sie werden detaillierte Anweisungen und Tools zur Integration Ihrer Website mit ihrem System bereitstellen, und dies wird wahrscheinlich viele der komplexen Aspekte eines Protokolls wie OIDC abdecken. Dennoch ist es äußerst hilfreich zu verstehen, was im Hintergrund passiert.

## Stärken und Schwächen

Für Webentwickler ist der größte Vorteil der Verwendung föderierter Identität die Verringerung der Anmeldehemmnisse für Benutzer, die bereits ein Konto bei einem der ausgewählten IdPs haben. Zusätzlich können die gewählten IdPs Websites helfen, föderierte Identität sicher zu implementieren.

Aus Sicherheitsperspektive besteht der größte Vorteil darin, dass Benutzer, weil sie keine neuen Anmeldedaten für jedes Konto erstellen müssen, ein geringeres Risiko haben, schwache, leicht zu merkende Passwörter zu wählen oder Passwörter zwischen Websites wiederzuverwenden.

Die Verwendung föderierter Identität ist eine sicherere Option als nur Passwörter, aber es gibt dennoch Probleme:

- Der Vorteil für Websites, IdPs mit einer großen Benutzerbasis zu wählen, bedeutet, dass dieser Bereich dazu neigt, durch wenige sehr große Anbieter monopolisiert zu werden. Dies wiederum neigt dazu, Benutzer an diese Anbieter zu binden und Websites eine schlechtere Erfahrung für Benutzer anzubieten, die sie nicht nutzen wollen oder können.

- Es sei denn, eine Website ist bereit, Benutzer vollständig auszuschließen, die sich nicht bei den gewählten IdPs anmelden wollen oder können, muss die Seite dennoch mit der gesamten Komplexität der Implementierung einer Authentifizierungsmethode als Fallback umgehen.

- Wie bei jedem Authentifizierungssystem, das sich darauf verlässt, dass der Benutzer ein Geheimnis auf einer Website eingibt, ist föderierte Identität anfällig für [Phishing](/de/docs/Web/Security/Attacks/Phishing)-Angriffe.
