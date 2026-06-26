---
title: Föderierte Identität
slug: Web/Security/Authentication/Federated_identity
l10n:
  sourceCommit: 87ca9db1ebe56eb20c1f20b91fca43955d8f0e26
---

In einem **föderierten Identitäts**system delegiert eine Website die Authentifizierung an einen Drittanbieter.

- Der Drittanbieter, der üblicherweise als {{Glossary("identity_provider", "Identity Provider (IdP)")}} bezeichnet wird, verwaltet die Anmeldedaten eines Nutzers und kann Nutzer authentifizieren.
- Die Website, die üblicherweise als {{Glossary("relying_party", "Relying Party (RP)")}} bezeichnet wird, vertraut dem IdP, Aussagen über die Identität eines Nutzers zu treffen.

Wenn der Nutzer sich auf der Website anmelden möchte, leitet die Website ihn zum IdP weiter. Der Nutzer authentifiziert sich beim IdP, und der IdP gibt ein Token an die Website zurück, das angibt, dass die Authentifizierung des Nutzers erfolgreich war. Die Website prüft, ob das Token gültig ist, und wenn ja, meldet sie den Nutzer an.

![Übersicht über die Anmeldung mit föderierter Identität.](federated-identity-overview.svg)

> [!NOTE]
> Föderierte Identität ist kein wirkliches Authentifizierungs*methode*: es ist eher eine _Architektur_, in der verschiedene Authentifizierungsmethoden verwendet werden könnten. Ein IdP könnte also wählen, Nutzer mit einer oder mehreren Methoden zu authentifizieren, wie traditionelle Passwörter, Einmalkennwörter, Biometrie oder Passkeys.

Dieses Modell bietet einige Vorteile sowohl für Nutzer als auch für Websites:

- Websites müssen keine eigene Authentifizierung implementieren oder Benutzerdaten {{Glossary("credential", "sicher handhaben")}}.
- Ein einzelner IdP kann Nutzer für viele verschiedene Websites authentifizieren. Das bedeutet, dass der Nutzer nicht für jede Seite andere Anmeldedaten verwenden muss: Werden Passwörter als Anmeldedaten genutzt, wird das Risiko der Wiederverwendung von Passwörtern oder die Wahl schwacher, leicht zu merkender Passwörter verringert.
- Wenn ein Nutzer bereits ein Konto bei einem IdP hat, dem Ihre Website vertraut, um Nutzer zu authentifizieren, ist es für die Nutzer viel einfacher, sich auf Ihrer Seite anzumelden, da sie keine neuen Anmeldedaten speziell für Ihre Seite erhalten müssen.

In diesem Leitfaden werden wir untersuchen, wie eine Website mit einem IdP zusammenarbeiten kann, um ihren Nutzern federiertes Anmelden anzubieten. Wir werden Folgendes behandeln:

- Die Hauptflüsse, die im Protokoll [OpenID Connect (OIDC)](https://openid.net/developers/how-connect-works/) definiert sind, das der dominierende Standard für föderierte Identität ist, und gute Praktiken, die bei deren Implementierung zu beachten sind.
- Wie Browsereinschränkungen für Drittanbieter-Cookies Probleme für die Implementierung von föderierten Identitäten erzeugen.
- Die [Federated Credential Management (FedCM) API](/de/docs/Web/API/FedCM_API), die die Rolle des Browsers viel aktiver macht, um die Rolle der RP zu vereinfachen und die Abhängigkeit von Drittanbieter-Cookies zu vermeiden.
- Wie eine Website einen IdP auswählen kann, mit dem sie zusammenarbeiten möchte, und wie diese Auswahl den Prozess der Implementierung des föderierten Anmeldens beeinflussen kann.

## OpenID Connect

Der am häufigsten für föderierte Identitäten im Web verwendete Standard ist [OpenID Connect (OIDC)](https://openid.net/developers/how-connect-works/), ein Authentifizierungsprotokoll, das auf dem [OAuth 2.0-Autorisierungs-Framework](https://datatracker.ietf.org/doc/html/rfc6749) aufbaut.

### Authentifizierungsablauf

In diesem Abschnitt gehen wir den Hauptauthentifizierungsablauf durch, der in OIDC definiert ist. Es gibt viele Optionen innerhalb des OIDC-Authentifizierungsablaufs: In diesem Durchgang stellen wir die empfohlenen Optionen vor und besprechen später Alternativen.

Dieser Ablauf ist in der [OpenID Connect Core](https://openid.net/specs/openid-connect-core-1_0.html) Spezifikation definiert.

Als Voraussetzung muss die RP beim IdP bekannt sein:

- Der IdP muss über eine Kennung für die RP verfügen, die als Client-ID bezeichnet wird.
- Die RP muss sich beim IdP authentifizieren können.

Die Authentifizierung könnte ein gemeinsames Geheimnis verwenden, das als Client-Geheimnis bezeichnet wird, oder einen anderen Mechanismus wie die TLS-Client-Authentifizierung.

> [!NOTE]
> Die OpenID-Spezifikationen verwenden den Begriff "OpenID Provider" (OP), um das zu bezeichnen, was wir in diesem Leitfaden als IdP bezeichnen.

![Der OIDC-Authentifizierungsablauf](oidc-auth-flow.svg)

Das erste, das hier zu beachten ist, ist, dass der Ablauf aus zwei Teilen besteht.

- **Authentifizierungsanforderung**: Die RP stellt eine Anfrage an den _Autorisierungsendpunkt_ des IdP, den Benutzer zu authentifizieren. Der IdP authentifiziert den Benutzer und gibt der RP einen _Autorisierungscode_ zurück. Der Code verfällt nach einer kurzen Zeitspanne (empfohlen werden nicht mehr als 10 Minuten).
- **Token-Anforderung**: Die RP sendet den Autorisierungscode an einen separaten Endpunkt des IdP, den _Token-Endpunkt_, und dieser Endpunkt antwortet mit einem Objekt, das zwei Tokens enthält:
  - Ein _Zugriffstoken_, das es dem Nutzer ermöglicht, auf spezifische Ressourcen der Website zuzugreifen (wie ein API-Schlüssel).
  - Ein _ID-Token_, das den Nutzer identifiziert und es der RP ermöglicht, den Nutzer anzumelden.

In der Authentifizierungsanforderung:

1. Der Nutzer bittet darum, sich bei der RP anzumelden.

2. Die RP leitet den Browser zum Autorisierungsendpunkt des IdP weiter und bittet ihn, den Nutzer zu authentifizieren. Die RP kann verschiedene Parameter zusammen mit der Anfrage bereitstellen, darunter:
   - `client_id`: Identifiziert diese RP beim IdP.
   - `response_type`: Immer `"code"`, wenn wir den hier beschriebenen zweistufigen Ablauf verwenden, was die empfohlene Option ist.
   - `redirect_uri`: Die URL in der RP, zu der der IdP nach der versuchten Authentifizierung des Nutzers zurückkehren soll. Dies ist die URL, zu der der IdP den Autorisierungscode liefern wird.
   - `code_challenge`: Ein kryptografischer {{Glossary("hash_function", "Hash")}} eines spezifischen Geheimnisses für diese Autorisierungsanforderung, der vom Token-Endpunkt verwendet wird, um sicherzustellen, dass die Token-Anforderung wirklich das Gegenstück zu dieser Autorisierungsanforderung ist.
   - `scope`: Eine Liste von Strings, die spezifizieren, welche Datenmengen über den Benutzer die RP zugreifen möchte.

3. Der IdP authentifiziert den Nutzer. Das Protokoll spezifiziert keine bestimmte Methode dafür: Der IdP könnte ein Passwort, ein Einmalpasswort, einen biometrischen Faktor oder eine andere geeignete Methode verwenden.

4. Wenn die Authentifizierung erfolgreich ist, generiert der IdP den Autorisierungscode. Er speichert auch den `code_challenge`-Wert und verknüpft ihn mit dem Autorisierungscode. Dann leitet der IdP den Browser zur Weiterleitungs-URL der RP um, wobei der Autorisierungscode als Parameter übergeben wird.

In der Token-Anforderung:

1. Die RP macht eine {{httpmethod("POST")}}-Anforderung an den Token-Endpunkt des IdP. Diese Anforderung enthält die folgenden Parameter:
   - `client_id`: Identifiziert diese RP beim IdP.
   - `client_secret`: Das Geheimnis, das verwendet wird, um die RP beim IdP zu authentifizieren: Dies könnte ein beliebiger im Voraus zwischen der RP und dem IdP vereinbarter Wert sein. Anstatt eines gemeinsamen Geheimnisses könnten die RP und der IdP einen alternativen Mechanismus zur Client-Authentifizierung verwenden, wie die TLS-Client-Authentifizierung.
   - `grant_type`: Dies sollte `"authorization_code"` sein.
   - `code`: Der Autorisierungscode.
   - `code_verifier`: Dies ist das ursprüngliche Geheimnis, das verwendet wurde, um den `code_challenge`-Parameter in der Authentifizierungsanforderung zu erzeugen.

2. Der IdP validiert die Anforderung:
   - Er authentifiziert, dass die Anforderung von der bestimmten RP mithilfe des Client-Geheimnisses oder einer anderen Form der Client-Authentifizierung kommt.
   - Er hasht den `code_verifier`-Parameter und prüft dann, ob das Ergebnis mit dem `code_challenge` übereinstimmt.

3. Wenn die Anforderung gültig ist, antwortet der IdP mit zwei Tokens:
   - Einem Zugriffstoken, das dem Nutzer den Zugang zu einer Ressource in der RP gewährt.
   - Einem ID-Token, das den Nutzer identifiziert. Dies ist ein kryptografisch signiertes [JSON Web Token](https://www.jwt.io/).

4. Die RP validiert die Tokens: Unter anderem prüft sie die Signatur des IdP auf dem ID-Token. Wenn die Validierung erfolgreich ist, meldet die RP den Nutzer an.

### Sicherheitsmerkmale

In diesem Abschnitt werden wir die Hauptsicherheitsmerkmale des OIDC-Authentifizierungsablaufs, den wir gerade beschrieben haben, zusammenfassen. Für die vollständigen Details siehe [Best Current Practice for OAuth 2.0 Security](https://www.rfc-editor.org/info/rfc9700/).

#### Authorization Code Flow

Der zweistufige Ablauf, den wir beschrieben haben, wird als "Authorization Code Flow" bezeichnet. In einem alternativen Ablauf, dem sogenannten "Implicit Flow", existiert nur der erste Schritt, und die Antwort auf die Authentifizierungsanforderung enthält bereits die Zugriffs- und ID-Tokens. Dies ist unsicher, da die Tokens für das Frontend der RP zugänglich sind, welches als wesentlich weniger sicher angesehen wird als das Backend. Zum Beispiel könnte ein Angreifer in einem erfolgreichen [XSS](/de/docs/Web/Security/Attacks/XSS)-Angriff oder wenn der Benutzer eine schädliche Browser-Erweiterung installiert hat, in der Lage sein, die Tokens des Benutzers zu stehlen.

Aus diesem Grund sollten Websites immer den Authorization Code Flow verwenden. Selbst wenn ein Angreifer den Autorisierungscode stehlen kann, muss er immer noch den Token-Endpunkt davon überzeugen, ihm die Tokens im Austausch für den Code zu geben.

#### Client-Authentifizierung

In dem von uns beschriebenen Ablauf authentifiziert sich die RP am Token-Endpunkt, wenn sie die Token-Anforderung stellt. Dies bedeutet, dass ein Angreifer, der den Autorisierungscode stiehlt, sich immer noch erfolgreich als RP ausgeben muss, um die Tokens vom IdP zu erhalten.

Die OAuth-Spezifikation unterscheidet zwischen [_Confidential_ und _Public_ Clients](https://datatracker.ietf.org/doc/html/rfc6749#section-2.1). Confidential Clients sind im Wesentlichen RPs, die ein Geheimnis bewahren können, während Public Clients dies nicht können.

Die Spezifikation geht davon aus, dass Clients, die im Browser des Benutzers ausgeführt werden, Public Clients sind, aus dem Grund, den wir bereits angesprochen haben: Es ist zu einfach, dass ein Angreifer Geheimnisse im Browser über Angriffe wie XSS erlangt. Clients, die auf einem Web*server* laufen, sind Confidential Clients.

In OIDC dürfen nur Confidential Clients die Client-Authentifizierung verwenden, da nur Confidential Clients als vertrauenswürdig angesehen werden, die Sicherheit der Clients-Credentials zu gewährleisten.

Die RP kann sich beim IdP mit einem gemeinsamen Geheimnis authentifizieren, jedoch [ist es besser, eine Methode zu verwenden, die auf Public-Key-Kryptographie basiert](https://www.rfc-editor.org/info/rfc9700/#name-client-authentication), wie die {{Glossary("TLS", "TLS")}}-Client-Authentifizierung.

#### Proof Key for Code Exchange (PKCE)

Die `code_challenge`- und `code_verifier`-Werte, die die RP in der Authentifizierungsanforderung und der Token-Anforderung bereitstellt, sind Teil eines Mechanismus, der _Proof Key for Code Exchange_ (PKCE) genannt wird, spezifiziert in {{rfc("7636")}}.

In der Authentifizierungsanforderung:

- Die RP generiert einen schwer zu erratenden Wert, der spezifisch für diese Authentifizierungsanforderung ist. Dieser Wert wird der _code verifier_ genannt.
- Die RP erstellt einen {{Glossary("hash_function", "kryptografischen Hash")}} des Code-Verifiers und verwendet ihn als den `code_challenge`-Parameter in der Authentifizierungsanforderung.
- Der IdP speichert die Code-Challenge und verknüpft sie mit dem Autorisierungscode, den er der RP zurückgibt.

In der Token-Anforderung:

- Die RP übergibt den Code-Verifier im _code_verifier_-Parameter.
- Der IdP hasht den Code-Verifier und vergleicht das Ergebnis mit der gespeicherten Code-Challenge: Wenn sie nicht übereinstimmen, wird die Token-Anforderung abgelehnt.

PKCE schützt vor zwei Angriffen: [CSRF gegen die Weiterleitungs-URL der RP](#csrf_gegen_die_weiterleitungs-url) und [Authorisierungscode-Injection](#authorisierungscode-injektion).

##### CSRF gegen die Weiterleitungs-URL

In einem CSRF-Angriff (Cross-Site Request Forgery) täuscht der Angreifer den Browser des Nutzers, um diesen in das Konto des Angreifers einzuloggen. Dies kann zu verschiedenen nachteiligen Effekten führen: Zum Beispiel stehen alle privaten Daten, die der Nutzer in das Konto hochlädt, dem Angreifer zur Verfügung und unter seiner Kontrolle.

Wenn PKCE nicht verwendet würde, funktioniert der CSRF-Angriff wie folgt:

1. Der Angreifer fordert an, sich bei der RP anzumelden. Die RP stellt eine Authentifizierungsanforderung an den IdP und der Angreifer authentifiziert sich beim IdP.

2. Der IdP generiert für den Angreifer einen Autorisierungscode und leitet den Browser des Angreifers zur Weiterleitungs-URL der RP mit dem Autorisierungscode als URL-Parameter um.

3. Der Angreifer fängt diese Umleitung ab, extrahiert die Weiterleitungs-URL einschließlich des Autorisierungscodes und beendet den Ablauf.

4. Der Angreifer täuscht den Nutzer dazu, auf die Weiterleitungs-URL zu klicken. Für die RP sieht das aus wie eine Antwort des IdP auf eine Authentifizierungsanforderung, die vom Nutzer stammt.

5. Die RP stellt eine Token-Anforderung an den IdP, einschließlich des Autorisierungscodes des Angreifers, den sie von der Weiterleitungs-URL genommen hat.

6. Der IdP antwortet mit den Tokens des Angreifers.

7. Die RP meldet den Nutzer im Konto des Angreifers an: Jetzt stehen alle Informationen oder Anweisungen des Nutzers unter der Kontrolle des Angreifers.

Im Wesentlichen gelingt der Angriff, weil die RP nicht weiß, dass die Anforderung an die Weiterleitungs-URL keine Antwort auf eine Anfrage ist, die im Namen des Benutzers gemacht wurde.

Wenn PKCE verwendet wird:

- In Schritt 1 generiert die RP einen Code-Verifier für die Anfrage des Angreifers und sendet die gehashte Code-Challenge an den IdP.
- In Schritt 2 speichert der IdP die Code-Challenge zusammen mit dem Autorisierungscode des Angreifers.
- In Schritt 5 wird die RP keinen Code-Verifier für den Nutzer finden können, der mit der Challenge übereinstimmt, die der IdP gespeichert hat, sodass die Token-Anforderung fehlschlagen wird.

Ein alternativer Schutz ist der `state`-Parameter, der in OAuth 2.0 definiert ist. Bei diesem Schutz gibt die RP einen unvorhersehbaren Wert als Parameter in der Authentifizierungsanforderung an und der IdP fügt diesen Wert auch in der Antwort hinzu: Die RP überprüft, dass sie übereinstimmen. Da der Angreifer den Wert von `state` nicht vorhersagen kann, kann er keinen passenden Wert an die Weiterleitungs-URL der RP übergeben.

##### Authorisierungscode-Injektion

In einem Authorisierungscode-Injektionsangriff stiehlt der Angreifer den Autorisierungscode des Zielbenutzers und ist in der Lage, ihn in den eigenen Anmeldeablauf des Angreifers zu injizieren. Das Ergebnis ist, dass sich der Angreifer im Konto des Benutzers anmeldet.

Es wird allgemein akzeptiert, dass Autorisierungscodes in OIDC anfällig sind, teilweise weil sie dem Browser des Nutzers ausgesetzt sind. Wenn der Nutzer beispielsweise eine böswillige Browser-Erweiterung installiert hat, kann diese Autorisierungscodes stehlen.

Die wichtigste Abschwächung hier ist [die Client-Authentifizierung](#client-authentifizierung): Da sich die RP beim IdP authentifiziert, wenn sie eine Token-Anforderung stellt, kann ein Angreifer nicht einfach eine eigene Token-Anforderung mit dem gestohlenen Code stellen. Bei einem Authorisierungscode-Injektionsangriff ist es jedoch die echte RP, die die Token-Anforderung stellt, sodass die Client-Authentifizierung erfolgreich ist.

Wenn PKCE nicht verwendet würde, funktioniert der Authorisierungscode-Injektionsangriff wie folgt:

1. Der Angreifer ist in der Lage, den Autorisierungscode des Benutzers zu stehlen. Beispielsweise hat der Benutzer eine böswillige Browser-Erweiterung installiert, die auf die URLs zugreifen kann, die der Browser besucht.

2. Der Nutzer versucht sich anzumelden. Die RP stellt eine Authentifizierungsanforderung, der Nutzer authentifiziert sich, und der IdP leitet den Browser zur Weiterleitungs-URL der RP um, mit dem Autorisierungscode als URL-Parameter.

3. An diesem Punkt ruft die böswillige Browser-Erweiterung den Autorisierungscode ab, sendet ihn an den Angreifer und beendet den Authentifizierungsablauf des Benutzers.

4. Der Angreifer erhält den Autorisierungscode des Benutzers.

5. Der Angreifer startet seinen eigenen OIDC-Authentifizierungsablauf, fängt jedoch die Authentifizierungsantwort des IdP ab und ersetzt den Autorisierungscode durch den gestohlenen Code des Benutzers. Dies ist einfach, da die Authentifizierungsantwort für den Angreifer bestimmt ist und daher durch dessen Gerät läuft.

6. Die RP setzt ihren Authentifizierungsablauf für den Angreifer fort, indem sie die Token-Anforderung an den IdP stellt, einschließlich des Autorisierungscodes des Benutzers, den der Angreifer injiziert hat.

7. Der IdP antwortet mit den Tokens des Benutzers.

8. Die RP meldet den Angreifer im Konto des Benutzers an.

Beachten Sie, dass die Verwendung eines `state`-Parameters in diesem Fall nicht hilft, da die Authentifizierungsanforderung und -antwort tatsächlich demselben Ablauf gehören - dem des Angreifers.

PKCE schützt vor diesem Angriff, da:

- In Schritt 2 generiert die RP einen Code-Verifier und sendet die gehashte Code-Challenge an den IdP, der diese zusammen mit dem Code des Benutzers speichert.
- In Schritt 6 enthält die Token-Anforderung der RP den _Code-Verifier des Angreifers_, aber den _Code des Benutzers_. Der IdP sucht die Code-Challenge für den Code des Benutzers heraus: Sie stimmt nicht mit dem Code-Verifier des Angreifers überein, und die Token-Anforderung wird abgelehnt.

Eine Alternative zu PKCE, die in OIDC spezifiziert ist, ist der `nonce`-Wert. Die RP gibt diesen Wert als einen weiteren Parameter in der Authentifizierungsanforderung an: Der IdP speichert ihn und der Token-Endpunkt gibt ihn zusammen mit den Tokens an die RP zurück. Die RP überprüft dann, dass der zurückgegebene Wert derselbe ist wie der originale Wert.

##### Sicherstellen, dass PKCE verwendet wird

Um sicherzustellen, dass PKCE verwendet wird, muss die RP bestätigen, dass der von ihr gewählte IdP nicht nur PKCE unterstützt, sondern dass er auch _die Verwendung von PKCE vorschreibt_ - indem er die Token-Anforderung ablehnt, wenn kein gültiger Code-Verifier enthalten ist.

Andernfalls ist eine RP anfällig für einen [PKCE-Degradierungsangriff](https://datatracker.ietf.org/doc/html/rfc9700#name-pkce-downgrade-attack), bei dem ein Angreifer den IdP dazu bringt zu denken, dass die RP PKCE in einer Token-Anforderung nicht verwenden möchte.

### Architekturen für OIDC-Clients

Die [OAuth 2.0 for Browser-Based Applications](https://datatracker.ietf.org/doc/html/draft-ietf-oauth-browser-based-apps-25)-Spezifikation beschreibt, wie die Architektur von Webanwendungen die Sicherheitsbedrohungen, denen OIDC-Clients (d.h. Relying Parties) ausgesetzt sind, beeinflussen kann und gibt Empfehlungen für die Architektur von Webanwendungen.

Insbesondere wird festgestellt, dass:

- Das sicherste Muster eines ist, bei dem die Website einen Webserver nutzt, um alle OAuth/OIDC-Interaktionen und Interaktionen mit APIs, die durch Zugriffstokens geschützt sind, zu handhaben. In diesem Muster kann die RP ein Confidential Client sein, weil sie Client-Geheimnisse auf dem Server speichern kann. Sie kann auch alle Tokens im Server speichern, einschließlich Zugriffstokens.

- Das nächstsicherere Muster ist eines, bei dem die Website einen Webserver nutzt, um alle OAuth/OIDC-Interaktionen zu handhaben, aber dann das Zugriffstoken an das Frontend zurückgibt und das Frontend dann direkt API-Anfragen stellt. In diesem Szenario kann die Website ein Confidential Client sein, aber schädlicher Code, der im Browser ausgeführt wird (zum Beispiel durch einen XSS-Angriff), kann potenziell Zugriffstokens stehlen. Jedoch muss das Frontend Zugriffstokens nicht langfristig speichern: Es kann diese bei Bedarf vom Backend abrufen.

- Das am wenigsten sichere Muster ist eines, bei dem OAuth/OIDC-Interaktionen und Interaktionen mit APIs beide im Frontend stattfinden. Dies wäre beispielsweise die natürliche Architektur für eine Anwendung, die vollständig im Browser ausgeführt wird. In dieser Architektur kann die RP kein Confidential Client sein, weil sie kein Client-Geheimnis zuverlässig bewahren kann. Das bedeutet, dass sie sich nicht beim IdP authentifizieren kann. Sie muss auch Tokens langfristig speichern, was das Risiko erhöht, dass bösartiger Code diese stiehlt.

Die Spezifikation enthält auch detaillierte Empfehlungen für Sicherheitspraktiken, die in jedem dieser drei Szenarien zu befolgen sind.

### OIDC-Abmeldung

Abmeldungsszenarien sind in einem föderierten Identitätssystem komplexer als in einem nicht-föderierten System, weil:

- Der Nutzer sich entweder auf der Website der RP oder auf der des IdP abmelden könnte.
- Der Nutzer sich entscheiden könnte, sich nur aus der RP abzumelden oder global abzumelden: Das heißt, sich aus allen RPs abzumelden, bei denen er mit diesem IdP angemeldet ist. Dies ist eine häufige Anforderung, wenn wir eine föderierte Identität nutzen, um ein Single Sign-On (SSO)-System aufzubauen, in dem ein Mitarbeiter ein Set von Unternehmensanmeldedaten verwendet, um sich bei E-Mail, einem Bug-Tracker und einem Diskussionsforum anzumelden.

Diese Szenarien zu unterstützen bedeutet, einen Kommunikationsmechanismus zwischen der RP und dem IdP zu implementieren. Zum Beispiel:

- Wenn sich der Nutzer beim IdP abmeldet, sollte die RP benachrichtigt werden und den Nutzer in der RP abmelden.
- Wenn sich der Nutzer bei der RP abmeldet, sollte der IdP benachrichtigt werden und in der Lage sein, den Nutzer aus allen RPs, bei denen er derzeit angemeldet ist, abzumelden.

Die OpenID-Spezifikationen definieren zwei allgemeine Ansätze zur Implementierung dieser Koordination, die sie "Front Channel Logout" und "Back Channel Logout" nennen.

Im [Front Channel Logout](https://openid.net/specs/openid-connect-frontchannel-1_0.html) wird der Browser zur Vermittlung der Kommunikation genutzt. In diesem Ansatz bettet die Seite des Senders ein {{htmlelement("iframe")}} ein, dessen Inhalt vom Empfänger geladen wird. Wenn sich der Nutzer beispielsweise beim IdP abmeldet, kann der IdP ein `<iframe>` einbetten, dessen `src`-Attribut auf die Abmelde-URL der RP zeigt: Wenn das `<iframe>` gerendert wird, macht der Browser eine {{httpmethod("GET")}}-Anfrage an diese URL, die die RP als Anweisung interpretiert, den Nutzer abzumelden.

Im [Back Channel Logout](https://openid.net/specs/openid-connect-backchannel-1_0.html) kommunizieren die RP und der IdP direkt miteinander, unter Umgehung des Browsers. Wenn der IdP beispielsweise der RP mitteilen muss, den Nutzer abzumelden, macht der IdP eine {{httpmethod("POST")}}-Anfrage direkt an die RP.

## Drittanbieter-Cookies

Bei der Implementierung eines föderierten Identitätssystems müssen wir die Interaktionen zwischen RP, IdP und dem Nutzer koordinieren. Einige Implementierungen dieser Koordination hängen vom Browsersupport für [Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies) ab.

Zum Beispiel verwenden wir beim Front Channel Logout (einer der Ansätze zur Implementierung der [Abmeldung in OpenID Connect](#oidc_abmeldung)) cross-site {{htmlelement("iframe")}}-Elemente, bei denen das Dokument der RP ein `<iframe>` enthält, dessen Inhalt vom IdP geladen wird oder umgekehrt. Dies hängt davon ab, dass das eingebettete `<iframe>` seine Cookies an seinen Ursprung senden kann.

Ebenso verwendet der Haupt[OpenID Connect-Authentifizierungsablauf](#authentifizierungsablauf) vollständige Seitenumleitungen zur Koordination zwischen den Teilnehmern, was eine ablenkende Erfahrung für die Nutzer ist und schwer von {{Glossary("SPA", "Single-Page-Apps")}} unterstützt werden kann. Eine bessere Benutzererfahrung kann erreicht werden, indem der IdP als `<iframe>` in der Seite der RP eingebettet wird, und dies hängt wiederum von Drittanbieter-Cookies ab.

Da Drittanbieter-Cookies häufig für das [Tracking von Nutzern](/de/docs/Web/Privacy/Guides/Third-party_cookies#what_is_the_problem_with_third-party_cookies) verwendet werden, haben Browser Maßnahmen zur Abschaffung und Entfernung der Unterstützung ergriffen, und sie werden inzwischen standardmäßig in einigen Browsern nicht unterstützt.

Daher empfehlen wir, keine föderierten Identitätsfunktionen zu implementieren, die von Drittanbieter-Cookies abhängen.

## Die FedCM API

Die [Federated Credential Management API (FedCM API)](/de/docs/Web/API/FedCM_API) bietet integrierte Unterstützung durch den Browser für föderierte Identitäten. Wir können die Nutzung dieser API nicht vollständig empfehlen, da sie noch keine Unterstützung durch alle Browser hat und weiterhin aktiv entwickelt wird. Sie verspricht jedoch mehrere Vorteile gegenüber der direkten Implementierung eines Protokolll wie OpenID Connect:

- Im OIDC-Ablauf, den wir zuvor beschrieben haben, muss die Website, die OIDC verwendet (das heißt, die RP), die Interaktionen zwischen sich selbst, dem Nutzer und dem IdP koordinieren. Wie wir gesehen haben, ist dies kompliziert und daher fehleranfällig. Mit FedCM übernimmt der Browser diese Interaktion: Als RP rufen Sie eine Browser-API auf, und der Browser sucht den IdP, fordert den Nutzer auf, sich zu authentifizieren, und gibt ein Token des IdP zurück, das die RP zur Anmeldung des Nutzers verwenden kann.
- Als Konsequenz müssen Sie sich nicht auf Drittanbieter-Cookies verlassen, sodass FedCM in Browsern funktioniert, die sie blockieren.
- In FedCM ist die Benutzeroberfläche, in der sich der Nutzer beim IdP authentiziert, in den Browser integriert und bietet eine konsistentere und nahtlosere Benutzererfahrung ohne Umleitungen.

FedCM ist in die [Credential Management API](/de/docs/Web/API/Credential_Management_API) integriert, die einen Rahmen bietet, der es Browsern ermöglicht, mit einer Vielzahl von verschiedenen Arten von Anmeldedaten zu arbeiten. Um die Authentifizierung mit der FedCM API zu verwenden, rufen Sie [`CredentialsContainer.get()`](/de/docs/Web/API/CredentialsContainer/get) auf und übergeben dabei verschiedene Optionen, einschließlich:

- Kennungen für die IdP(s), die der Nutzer zur Anmeldung bei dieser RP verwenden könnte
- Den Kontext, in dem die RP den IdP verwendet (zum Beispiel, ob sich der Nutzer registriert oder anmeldet).

Wenn Sie `CredentialsContainer.get()` aufrufen, wird der Browser:

- Die angegebenen IdPs kontaktieren
- Den Nutzer auffordern, sich bei seinem gewählten IdP anzumelden, falls er nicht bereits angemeldet ist
- Den IdP bitten, die Identität des Nutzers zu überprüfen
- Ein Token zurückgeben, das die RP zur Anmeldung des Nutzers verwenden kann.

### FedCM und föderierte Identitätsprotokolle

FedCM selbst implementiert kein föderiertes Identitätsprotokoll wie OIDC. Sie können es sich als Transport zwischen der RP, dem Nutzer und dem IdP vorstellen, aber es ist agnostisch gegenüber den ausgetauschten Elementen oder ihrer Interpretation.

Zum Beispiel könnte in einer Implementierung von OIDC mit FedCM das Token, das durch `CredentialsContainer.get()` zurückgegeben wird, ein Autorisierungscode sein, und die RP muss dann das Identifizierungstoken vom Token-Endpunkt des IdP abrufen. Das heißt, FedCM übernimmt nur den ersten Teil des [Authentifizierungsablaufs](#authentifizierungsablauf). Das Dokument [FedCM für OAuth](https://github.com/aaronpk/oauth-fedcm-profile) beschreibt, wie OAuth und OIDC mit FedCM implementiert werden können.

Im Allgemeinen, wenn eine RP entscheidet, einen bestimmten IdP für federiertes Login zu verwenden, registriert sich die RP beim IdP, und im Rahmen dieses Prozesses sollte der IdP der RP genau erklären, welche Argumente erwartet werden, wie mit den zurückgegebenen Objekten umgegangen werden soll und welches Verhalten sonst noch von der RP erwartet wird.

## Wahl von IdPs

Wenn Sie sich entscheiden, ein föderiertes Anmelden zu Ihrer Seite hinzuzufügen, ist eine der grundlegendsten Entscheidungen, die Sie treffen müssen, die Wahl der Identitätsanbieter, mit denen Sie zusammenarbeiten. Wenn ein potenzieller Nutzer Ihrer Seite bereits ein Konto bei einem Ihrer gewählten IdPs hat, ist es für ihn viel einfacher, ein neues Konto auf Ihrer Seite zu erstellen.

Sie werden wahrscheinlich mehr Anmeldungen sehen, wenn ein großer Teil Ihrer erwarteten Nutzerbasis bereits ein Konto bei Ihrem gewählten IdP hat.

Es ist üblich, dass eine Website es ihren Nutzern ermöglicht, sich mit mehr als einem IdP anzumelden, um mehr Nutzer anzusprechen und ihnen mehr Auswahl zu bieten. Allerdings führt das Anbieten zu vieler Optionen zu einer verwirrenden Benutzererfahrung und Nutzer, die Konten bei mehr als einem Ihrer IdPs haben, können Schwierigkeiten haben, sich zu erinnern, bei welchem sie sich angemeldet haben.

Es ist auch gängige Praxis, eine Fallback-Option für Nutzer bereitzustellen, die keinen Ihrer gewählten IdPs verwenden können. In dieser Option authentifizieren sich Nutzer direkt mit Ihrer Seite unter Verwendung einer Methode wie einem [Passwort](/de/docs/Web/Security/Authentication/Passwords) oder einem [OTP](/de/docs/Web/Security/Authentication/OTP).

Welchen Identitätsanbieter Sie auch wählen, diese werden detaillierte Anleitungen und Tools zur Integration Ihrer Seite mit deren System bereitstellen, und dies wird voraussichtlich viele der Komplexitäten eines Protokolls wie OIDC übernehmen. Dennoch ist es äußerst hilfreich zu verstehen, was im Hintergrund passiert.

## Stärken und Schwächen

Für Webentwickler besteht der größtmögliche Vorteil der Verwendung von föderierter Identität darin, die Eintrittsbarrieren für Nutzer zu reduzieren, die bereits ein Konto bei einem der gewählten IdPs haben. Darüber hinaus können die gewählten IdPs Websites dabei helfen, federierte Identität sicher zu implementieren.

Aus einer Sicherheitsperspektive besteht der größte Vorteil darin, dass, weil Nutzer keine neuen Anmeldedaten für jedes Konto erstellen müssen, das Risiko geringer ist, dass sie schwächere, leichter zu merkende Passwörter wählen oder Passwörter auf verschiedenen Websites wiederverwenden.

Die Verwendung von föderierter Identität ist eine sicherere Option als nur Passwörter, weist aber dennoch Probleme auf:

- Die Vorteile für Websites, IdPs mit einer großen Nutzerbasis zu wählen, führen dazu, dass der Raum tendenziell von einigen wenigen sehr großen Anbietern monopolisiert wird. Dies wiederum neigt dazu, Nutzer an diese Anbieter zu binden, wodurch Websites für Nutzer, die diese nicht nutzen möchten (oder nicht können), eine schlechtere Erfahrung bieten.

- Wenn eine Website bereit ist, Nutzer vollständig auszuschließen, die sich nicht bei ihren gewählten IdPs registrieren möchten (oder können), muss die Seite dennoch mit der gesamten Komplexität umgehen, eine alternative Authentifizierungsmethode zu implementieren.

- Wie jedes Authentifizierungssystem, das darauf basiert, dass der Nutzer ein Geheimnis in eine Website eingibt, bleibt föderierte Identität anfällig für [Phishing](/de/docs/Web/Security/Attacks/Phishing)-Angriffe.
