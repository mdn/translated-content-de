---
title: Using the Private State Token API
slug: Web/API/Private_State_Token_API/Using
l10n:
  sourceCommit: 11790c8b36e1163509f65285b88d6139eba64399
---

{{DefaultAPISidebar("Private State Token API")}}

Diese Seite erläutert, wie Sie die Private State Tokens API verwenden, um Vertrauen in die Authentizität eines Benutzers von einem Browsing-Kontext in einen anderen zu übertragen.

## Überblick

Der Prozess, durch den Private State Tokens verwendet werden, lässt sich in drei Phasen unterteilen:

1. Ausgabe von Tokens
2. Einlösen von Tokens
3. Verwendung von Einlöseaufzeichnungen

Dieser Abschnitt fasst diese Phasen zusammen. In den folgenden Abschnitten betrachten wir sie genauer.

Private State Tokens verwenden im Hintergrund das [Privacy-Pass-Protokoll](https://privacypass.github.io/), um die Ausgabe und Übertragung von Tokens usw. zu verarbeiten.

### Ausgabe von Tokens

1. Nehmen wir an, ein Benutzer besucht eine Website, `issuer.example`.
2. `issuer.example` kann Maßnahmen ergreifen, um Vertrauen in den Benutzer _aufzubauen_. Dies kann mithilfe einer Methode wie einem [CAPTCHA](https://en.wikipedia.org/wiki/CAPTCHA), durch die Überprüfung seiner E-Mail-Adresse, durch das Führen eines Nachweises über legitime Käufe des Benutzers oder durch eine Kombination mehrerer solcher Methoden erfolgen.
   > [!NOTE]
   > Private State Tokens sind kein Ersatz für CAPTCHAs oder andere Mechanismen zum Aufbau von Vertrauen. Private State Tokens bieten eine Möglichkeit, Vertrauen in einen Benutzer zu _übertragen_, nicht Vertrauen in einen Benutzer _aufzubauen_.
3. Sobald Vertrauen aufgebaut wurde, kann `issuer.example` eine Anfrage an einen Server stellen, um einen **Private State Token** auszugeben – einen kryptografischen Token, der Vertrauen in den verifizierten Benutzer repräsentiert. In diesem Kontext wird `issuer.example` als **Issuer** bezeichnet. Der Server wird als **Issuer Server** bezeichnet.
4. Wenn die Anfrage erfolgreich ist, wird der Token anschließend sicher vom Browser des Benutzers gespeichert.

### Einlösen von Tokens

Wenn eine andere Website Vertrauen in denselben Benutzer aufbauen möchte, kann sie dies tun, indem sie einen Private State Token einlöst, der vom Browser des Benutzers durch eine andere Website ausgegeben wurde, anstatt den Prozess zum Aufbau von Vertrauen von Grund auf durchlaufen zu müssen.

1. Nehmen wir an, der Benutzer besucht eine andere Website, `redeemer.example`.
2. `redeemer.example` kann eine Anfrage an einen Server stellen, um einen Token für diesen bestimmten Benutzer und dieses Gerät einzulösen.
3. Der Browser prüft, ob er einen Token für diesen Benutzer und dieses Gerät gespeichert hat. Wenn dies der Fall ist und der Token verwendet werden kann (er wurde noch nicht eingelöst und ist nicht abgelaufen), sendet er den Token zum Einlösen an einen Server. In diesem Kontext wird `redeemer.example` als **Redeemer** bezeichnet. Der Server wird als **Redeemer Server** bezeichnet.
4. Wenn der Token erfolgreich eingelöst wurde, sendet der Redeemer Server eine **Einlöseaufzeichnung** an den Browser, um das Vertrauen in den Benutzer zu bestätigen.

### Verwendung von Einlöseaufzeichnungen

Sobald der Browser die Einlöseaufzeichnung erhalten hat, kann er sie in verschiedenen Kontexten als Vertrauenssignal für den aktuellen Benutzer verwenden, beispielsweise wenn er eine sensible Aktion ausführen darf, etwa sich anzumelden, ein Produkt zu kaufen oder einen Kommentar zu veröffentlichen. Dieses Vertrauenssignal kann auch an andere Parteien weitergeleitet werden, um Vertrauen zu übertragen.

## Beispielimplementierung

Eine Beispielimplementierung für Private State Tokens finden Sie unter [Private State Token Demo Issuer](https://privatetokens.dev/) (siehe den [Quellcode](https://github.com/GoogleChromeLabs/private-state-token-demo/)).

## Ausgabe von Tokens

Dieser Abschnitt führt Sie durch den Prozess der Einrichtung eines Issuer Servers und der Ausgabe von Tokens über die Issuer-Website.

### Registrierung als Issuer

Wenn Sie Issuer werden und Ihre Website Private State Tokens ausgeben lassen möchten, müssen Sie sich zunächst registrieren, indem Sie den [Registrierungsprozess für Issuer](https://github.com/GoogleChrome/private-tokens/blob/main/PST-Registration.md) abschließen. Erstellen Sie ein neues [Issue](https://github.com/GoogleChrome/private-tokens/issues/new) im [Google-private-tokens-GitHub-Repository](https://github.com/GoogleChrome/private-tokens), indem Sie die Vorlage „New PST Issuer“ verwenden. Befolgen Sie die Anweisungen im Repository, um das Issue auszufüllen. Sobald ein Endpoint verifiziert wurde, wird er in dieses Repository gemergt, und die serverseitige Infrastruktur von Chrome beginnt mit dem Abrufen dieser Schlüssel.

> [!NOTE]
> Dieser Prozess wird von Google durchgeführt und steuert die Token-Ausgabe über Chromium-Browser; andere Implementierungen können sich dafür entscheiden, einen anderen Prozess zu verwenden.

### Erstellen eines Issuer Servers

Um den Token-Issuer-Server zu implementieren, müssen Sie eine eigene serverseitige Anwendung erstellen, die HTTP-Endpoints bereitstellt. Die Issuer-Komponente besteht aus zwei Hauptmodulen:

1. Der Issuer App
2. Dem Token Issuer

![Die Hauptkomponenten des Issuer Servers: Issuer App, erstellt beispielsweise mit Node.js, und Token Issuer (kryptografische Komponente, die für die Ausgabe von Tokens verantwortlich ist)](issuer.png)

In der Beispielimplementierung:

1. Die Issuer App ist ein [Node.js-Server, der das Express-Framework verwendet](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs), um die Issuer-HTTP-Endpoints zu hosten. Sehen Sie sich den [Beispielcode der App](https://github.com/GoogleChromeLabs/private-state-token-demo/blob/main/src/index.js) an.
2. Die kryptografische Komponente Token Issuer erfordert keine bestimmte Sprache. Aufgrund der Leistungsanforderungen dieser Komponente stellen wir jedoch eine C-Implementierung als Beispiel bereit, die die Bibliothek [Boring SSL](https://boringssl.googlesource.com/boringssl/) zur Verwaltung von Tokens verwendet. Sehen Sie sich das [Codebeispiel für die kryptografische Komponente und weitere Informationen zur Installation](https://github.com/GoogleChromeLabs/private-state-token-demo/tree/main?tab=readme-ov-file#private-state-token-demo) an.
3. Die Token-Issuer-Komponente verwendet benutzerdefinierte Schlüssel für elliptische Kurven (EC), um Tokens zu verschlüsseln. Diese Schlüssel müssen geschützt und in einem sicheren Speicher abgelegt werden.

#### Technische Anforderungen an den Issuer Server

Gemäß dem Privacy-Pass-Protokoll müssen Sie mindestens zwei HTTP-Endpoints in Ihrem Issuer Server implementieren:

- Key Commitment: Dieser Endpoint stellt die Details Ihres öffentlichen Verschlüsselungsschlüssels für Browser bereit, damit diese bestätigen können, dass Ihr Server legitim ist. Dieser Endpoint muss sich in einem Well-Known-Verzeichnis befinden, das unter der {{Glossary("registrable_domain", "registrierbaren Domain")}} des Issuer Servers unter `/.well-known/private-state-token/key-commitment` liegt. Sehen Sie sich das [Beispiel für den Key-Commitment-Endpoint](https://github.com/GoogleChromeLabs/private-state-token-demo/blob/bf173919620f2b8203a628c3a1094c8846e6aff1/src/index.js#L55) an.
- Token issuance: Der Endpoint für die Token-Ausgabe verarbeitet alle Token-Anfragen. Dieser Endpoint ist der Integrationspunkt für die Token-Issuer-Komponente. Er muss sich auf dem Issuer Server unter `/.well-known/private-state-token/issuance` befinden. Sehen Sie sich das [Beispiel für den Token-Issuance-Endpoint](https://github.com/GoogleChromeLabs/private-state-token-demo/blob/bf173919620f2b8203a628c3a1094c8846e6aff1/src/index.js#L81) an.

Aufgrund des hohen Datenverkehrs, der auf einem solchen Server erwartet wird, empfehlen wir, ihn mithilfe einer skalierbaren Infrastruktur bereitzustellen (beispielsweise in einer Cloud-Umgebung), damit Sie Ihr Backend an einen variablen Bedarf anpassen können.

### Ausgabe eines Tokens über Ihren Server

Nachdem der Issuer Server eingerichtet wurde, kann Ihre Issuer-Website nun einen neuen Token ausgeben, indem sie eine Fetch-Anfrage an Ihren Token-Issuance-Endpoint sendet. Die Fetch-Anfrage muss ein `privateToken`-Objekt enthalten, dessen verpflichtende Eigenschaften folgende sind:

- `version`
  - : Die Version des kryptografischen Protokolls, das Sie bei der Generierung des Tokens verwenden möchten. Derzeit ist dies immer auf `1` gesetzt, da dies die einzige von der Spezifikation unterstützte Version ist.
- `operation`
  - : Die Token-Operation, die Sie ausführen möchten. In diesem Fall setzen wir sie auf `token-request`.

Sie können dies mithilfe eines [`fetch()`](/de/docs/Web/API/Window/fetch)-Aufrufs verarbeiten, bei dem `method` auf `POST` gesetzt und eine `privateToken`-Option angegeben wird:

```js
const hasToken = await Document.hasPrivateToken(`issuer.example`);
if (!hasToken) {
  await fetch(
    "https://issuer.example/.well-known/private-state-token/issuance",
    {
      method: "POST",
      privateToken: {
        version: 1,
        operation: "token-request",
      },
    },
  );
}
```

> [!NOTE]
> Sie können Anfragen für Token-Operationen auch verwenden mit:
>
> - [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest), wobei `privateToken` innerhalb eines Aufrufs von [`XMLHttpRequest.setPrivateToken()`](/de/docs/Web/API/XMLHttpRequest/setPrivateToken) angegeben wird
> - {{htmlelement("iframe")}}-Elementen, bei denen `privateToken` als String innerhalb des Attributs [`privateToken`](/de/docs/Web/HTML/Reference/Elements/iframe#privatetoken) enthalten ist.

Im Hintergrund generiert der Browser eine Reihe von Nonces, die zur Generierung des Tokens benötigt werden, verblindet sie und sendet sie als Teil der Fetch-Anfrage in einem {{httpheader("Sec-Private-State-Token")}}-Anfrage-Header an den Issuer Server. Zusätzlich wird die Version des kryptografischen Protokolls, die zur Generierung der Nonces verwendet wird, in einem {{httpheader("Sec-Private-State-Token-Crypto-Version")}}-Anfrage-Header an den Issuer Server gesendet. Zum Zeitpunkt der Erstellung wird nur eine Version unterstützt, aber dieser Mechanismus ermöglicht künftig die Unterstützung mehrerer Versionen.

Beachten Sie, dass Sie die Methode [`Document.hasPrivateToken()`](/de/docs/Web/API/Document/hasPrivateToken) verwenden können, um zu prüfen, ob der Browser bereits einen Token von unserem Issuer gespeichert hat, bevor Sie versuchen, einen weiteren anzufordern.

Wenn die Token-Anfrage erfolgreich ist, enthält die Antwort einen {{httpheader("Sec-Private-State-Token")}}-Antwort-Header mit verblindeten Signaturen. Der Browser entfernt deren Verblindung und speichert sie zusammen mit den ursprünglichen unverblindeten Nonces in einem sicheren Token-Speicher. Diese Paarung aus Signaturen und Nonces bildet einen Private State Token, der später eingelöst werden kann. Die Roh-Tokens sind für JavaScript nicht zugänglich.

### Einschränkungen bei der Token-Ausgabe

Jedes Gerät kann bis zu 500 Tokens pro Website der obersten Ebene und Issuer speichern. Die maximale Anzahl von Issuern pro Origin der obersten Ebene beträgt zwei.

Jeder Token enthält Metadaten, die angeben, welchen Schlüssel der Issuer zu seiner Ausgabe verwendet hat. Diese Informationen können verwendet werden, um während des Einlöseprozesses zu entscheiden, ob Tokens eingelöst werden sollen oder nicht. Jeder Token kann mit genau einem kryptografischen Schlüssel ausgegeben werden, und jeder Issuer kann maximal 6 Schlüssel haben. Eine mögliche Verwendung dieser Variablen besteht darin, anhand Ihrer kryptografischen Schlüssel einen Vertrauensbereich für Ihre Tokens zu definieren (beispielsweise Schlüssel 1: hohes Vertrauen; Schlüssel 6: kein Vertrauen).

Der Browser kann den aktuellen Satz gültiger Schlüssel des Issuers über den Key-Commitment-Endpoint abrufen. Schlüssel sollten regelmäßig rotiert werden; dies kann mindestens alle 60 Tage erfolgen. Jede schnellere Rotation wird ignoriert. Alle mit ungültigen Schlüsseln ausgegebenen Tokens gelten ebenfalls als ungültig.

## Einlösen von Tokens

Dieser Abschnitt führt Sie durch den Prozess der Einrichtung eines Redeemer Servers, des Einlösens von Tokens und der Ausgabe von Einlöseaufzeichnungen.

### Erstellen eines Redeemer Servers

Sie müssen einen Redeemer Server erstellen, um die vom Issuer Server ausgegebenen Tokens zu lesen. Die folgenden Schritte beschreiben, wie Tokens eingelöst und die diesen Tokens zugeordneten Einlöseaufzeichnungen gelesen werden.

Die Redeemer-Komponente besteht aus zwei Hauptmodulen:

1. Der Redeemer App
2. Dem Token Redeemer

![Die Hauptkomponenten des Redeemer Servers: Redeemer App, erstellt beispielsweise mit Node.js, und Token Redeemer (kryptografische Komponente, die für die Verifizierung von Signaturen und Tokens innerhalb des Einlöseprozesses verantwortlich ist)](redeemer.png)

Sie können den Issuer und den Redeemer auf demselben Server (oder derselben Gruppe von Servern) und mit derselben kryptografischen Komponente ausführen. Tatsächlich wurde dies in der Beispielimplementierung getan, um das Nachvollziehen etwas zu erleichtern. Sehen Sie sich erneut den [Beispielcode der App](https://github.com/GoogleChromeLabs/private-state-token-demo/blob/main/src/index.js) sowie das [Codebeispiel für die kryptografische Komponente und Informationen zur Installation](https://github.com/GoogleChromeLabs/private-state-token-demo/tree/main?tab=readme-ov-file#private-state-token-demo) an.

#### Technische Anforderungen an den Redeemer Server

Gemäß dem Privacy-Pass-Protokoll müssen Sie mindestens einen HTTP-Endpoint in Ihrem Redeemer Server implementieren:

- Token redemption: Hier wird das gesamte Einlösen von Tokens verarbeitet. Dieser Endpoint ist der Integrationspunkt für die Token-Redeemer-Komponente. Er muss sich auf dem Issuer Server unter `/.well-known/private-state-token/redemption` befinden. Sehen Sie sich unser [Beispiel für den Token-Redemption-Endpoint](https://github.com/GoogleChromeLabs/private-state-token-demo/blob/bf173919620f2b8203a628c3a1094c8846e6aff1/src/index.js#L98) an.

### Einlösen eines Tokens über Ihren Server

Nachdem der Redeemer Server eingerichtet wurde, kann Ihre Redeemer-Website nun einen zuvor gespeicherten Token einlösen, indem sie eine Fetch-Anfrage an Ihren Token-Redemption-Endpoint sendet. Die Fetch-Anfrage muss ein `privateToken`-Objekt enthalten, wie bei der Anfrage zur Token-Ausgabe, mit Ausnahme der angegebenen `operation`, die `token-redemption` sein sollte.

Sie können dies mithilfe eines [`fetch()`](/de/docs/Web/API/Window/fetch)-Aufrufs verarbeiten, bei dem `method` auf {{httpmethod("POST")}} gesetzt und eine `privateToken`-Option angegeben wird.

```js
await fetch(
  "https://issuer.example/.well-known/private-state-token/redemption",
  {
    method: "POST",
    privateToken: {
      version: 1,
      operation: "token-redemption",
      refreshPolicy: "none",
    },
  },
);
```

Hier setzen wir außerdem die Eigenschaft `refreshPolicy` auf `none`. Das bedeutet, dass, wenn für diesen Benutzer und diese Website bereits eine festgelegte, nicht abgelaufene Einlöseaufzeichnung vorhanden ist, diese Einlöseaufzeichnung verwendet und keine neue ausgegeben werden soll. Wenn wir `refreshPolicy: "refresh"` setzen würden, würde immer eine neue Einlöseaufzeichnung ausgegeben. Beachten Sie, dass `none` der Standardwert ist, da dies in den meisten Fällen das gewünschte Verhalten ist; wir wollten jedoch darauf aufmerksam machen.

Im Hintergrund sendet der Browser den Token zusammen mit zugehörigen Einlösemetadaten in einem {{httpheader("Sec-Private-State-Token")}}-Anfrage-Header. Der Redeemer sendet dann eine Redemption Record in einem `Sec-Private-State-Token`-Antwort-Header, um eine Einlösebestätigung bereitzustellen, die zur Übertragung von Benutzervertrauen verwendet werden kann. Die Einlöseaufzeichnung wird in einem sicheren Datenspeicher gespeichert, der nicht direkt über JavaScript zugänglich ist.

Zusätzlich kann der Redeemer in der Antwort einen {{httpheader("Sec-Private-State-Token-Lifetime")}}-Header einschließen, um dem Browser mitzuteilen, wie lange die Einlöseaufzeichnung zwischengespeichert werden soll (in Sekunden). Wenn der Header `Sec-Private-State-Token-Lifetime` ausgelassen wird, ist die Lebensdauer der Einlöseaufzeichnung an die Lebensdauer des Schlüssels zur Token-Verifizierung gebunden, der die Ausgabe des eingelösten Tokens bestätigt hat.

### Einschränkungen für Einlöseaufzeichnungen

Pro Gerät, Seite und Issuer können alle 48 Stunden zwei Tokens eingelöst werden.

Die resultierenden Einlöseaufzeichnungen gelten bis zu ihrem Ablauf als aktiv (wie durch den `Sec-Private-State-Token-Lifetime`-Antwort-Header angegeben).

## Verwendung von Einlöseaufzeichnungen

Sobald der Browser die Einlöseaufzeichnung erhalten hat, kann sie in anderen Kontexten als Vertrauenssignal für den aktuellen Benutzer verwendet werden, beispielsweise wenn er eine sensible Aktion ausführen darf, etwa sich anzumelden, ein Produkt zu kaufen oder einen Kommentar zu veröffentlichen.

Dieses Vertrauenssignal kann an andere Parteien weitergeleitet werden, um Vertrauen zu übertragen. Fügen Sie dazu in Fetch-Aufrufen für zukünftige Ressourcen eine `privateToken`-Option mit einer `operation` von `send-redemption-record` hinzu:

```js
const hasRR = await Document.hasRedemptionRecord(`issuer.example`);
if (hasRR) {
  await fetch("some-resource.example", {
    method: "POST",
    privateToken: {
      version: 1,
      operation: "send-redemption-record",
      issuers: ["https://issuer.example"],
    },
  });
}
```

Die Token-Operation `send-redemption-record` ist nur bei `fetch()`-Aufrufen verfügbar, die im Dokument der obersten Ebene ausgeführt werden.

Wir setzen außerdem die Eigenschaft `issuers` auf `[issuer.example]`, wodurch angegeben wird, von welchem Issuer die Einlöseaufzeichnung stammen soll. Wenn für die angegebenen Issuer keine Einlöseaufzeichnungen verfügbar sind, ist der Anfrage-Header leer. Beachten Sie, dass Sie die Methode [`Document.hasRedemptionRecord()`](/de/docs/Web/API/Document/hasRedemptionRecord) verwenden können, um zu prüfen, ob der Browser eine von einem bestimmten Issuer stammende Einlöseaufzeichnung besitzt, bevor Sie versuchen, sie weiterzuleiten.

Im Hintergrund werden die Einlöseaufzeichnungen in einem {{httpheader("Sec-Redemption-Record")}}-Anfrage-Header eingeschlossen. Der Header enthält eine Liste von Issuer- und Einlöseaufzeichnungs-Paaren, die jeweils einer Einlöseaufzeichnung entsprechen.

## Integration der Permissions Policy

`token-request`-Operationen werden durch die {{httpheader('Permissions-Policy/private-state-token-issuance','private-state-token-issuance')}}-Direktive von {{httpheader("Permissions-Policy")}} gesteuert, während `token-redemption`- und `send-redemption-record`-Operationen durch die {{httpheader('Permissions-Policy/private-state-token-redemption','private-state-token-redemption')}}-Direktive gesteuert werden. Die Allowlist für diese Direktiven ist standardmäßig auf `*` gesetzt (alle Origins). Dies bedeutet, dass das Feature für die Seite der obersten Ebene, Same-Origin-{{htmlelement("iframe")}}-Elemente und Cross-Origin-`<iframe>`-Elemente ohne explizite Delegierung verfügbar ist.

Sie können die Token-Ausgabe oder -Einlösung für bestimmte Seiten Ihrer Website deaktivieren, indem Sie für jede Seite `private-state-token-issuance=()` und `private-state-token-redemption=()` im `Permissions-Policy`-Header einschließen.

Sie können den `Permissions-Policy`-Header auch verwenden, um den Zugriff Dritter auf Token-Operationen zu steuern. Verwenden Sie als Parameter für die Origin-Liste des Headers `self` und alle Origins, denen Sie Zugriff auf die API gewähren möchten. Um beispielsweise die Verwendung von Private State Tokens in allen Browsing-Kontexten vollständig zu deaktivieren, außer für Ihre eigene Origin und `https://example.com`, setzen Sie den folgenden HTTP-Antwort-Header:

```http
Permissions-Policy: private-state-token-issuance=(self "https://example.com"), private-state-token-redemption=(self "https://example.com")
```

Um die API für alle Cross-Origin-Ressourcen zu aktivieren, setzen Sie die Origin-Liste auf `*`.

Auch wenn die Standardrichtlinie `*` lautet, muss ein `<iframe>` weiterhin die Direktiven `private-state-token-issuance` und `private-state-token-redemption` in seinem `allow`-Attribut einschließen, um Zugriff auf das Feature zu erhalten. Um beispielsweise die Verwendung beider Features auf `example.com` zu erlauben:

```html
<iframe
  src="https://example.com"
  allow="private-state-token-issuance 'self';
  private-state-token-redemption 'self'">
</iframe>
```
