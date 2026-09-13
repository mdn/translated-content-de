---
title: Using the Private State Token API
slug: Web/API/Private_State_Token_API/Using
l10n:
  sourceCommit: f37e438c6dece2b381d2b9f35dc53af21a916a75
---

{{DefaultAPISidebar("Private State Token API")}}

Diese Seite erläutert, wie Sie die Private State Tokens API verwenden, um Vertrauen in die Authentizität eines Benutzers von einem Browsing-Kontext in einen anderen zu übertragen.

## Überblick

Der Prozess zur Verwendung privater State Tokens lässt sich in drei Phasen unterteilen:

1. Tokens ausstellen
2. Tokens einlösen
3. Einlösungsdatensätze verwenden

Dieser Abschnitt fasst diese Phasen zusammen. In den folgenden Abschnitten betrachten wir sie ausführlicher.

Private State Tokens verwenden im Hintergrund das [Privacy Pass-Protokoll](https://privacypass.github.io/), um die Ausstellung und Übertragung von Tokens usw. zu handhaben.

### Tokens ausstellen

1. Nehmen wir an, ein Benutzer besucht eine Website, `issuer.example`.
2. `issuer.example` kann Maßnahmen ergreifen, um Vertrauen in den Benutzer _aufzubauen_. Dies kann mithilfe einer Methode wie einem [CAPTCHA](https://en.wikipedia.org/wiki/CAPTCHA), durch die Überprüfung seiner E-Mail-Adresse, durch das Führen eines Nachweises über legitime Käufe des Benutzers oder durch eine Kombination mehrerer solcher Methoden erfolgen.
   > [!NOTE]
   > Private State Tokens ersetzen keine CAPTCHAs oder andere Mechanismen zum Aufbau von Vertrauen. Private State Tokens bieten eine Möglichkeit, Vertrauen in einen Benutzer zu _übertragen_, nicht Vertrauen in einen Benutzer _aufzubauen_.
3. Sobald Vertrauen aufgebaut wurde, kann `issuer.example` eine Anfrage an einen Server stellen, um einen **privaten State Token** auszustellen — einen kryptografischen Token, der Vertrauen in den verifizierten Benutzer repräsentiert. In diesem Kontext wird `issuer.example` als **Aussteller** bezeichnet. Der Server wird als **Ausstellerserver** bezeichnet.
4. Wenn die Anfrage erfolgreich ist, wird der Token anschließend sicher vom Browser des Benutzers gespeichert.

### Tokens einlösen

Wenn eine andere Website Vertrauen in denselben Benutzer aufbauen möchte, kann sie dies tun, indem sie einen privaten State Token einlöst, der vom Browser des Benutzers durch eine andere Website ausgestellt wurde, statt den Prozess zum Aufbau von Vertrauen von Grund auf durchlaufen zu müssen.

1. Nehmen wir an, der Benutzer besucht eine andere Website, `redeemer.example`.
2. `redeemer.example` kann eine Anfrage an einen Server stellen, um einen Token für diesen bestimmten Benutzer und dieses Gerät einzulösen.
3. Der Browser prüft, ob er einen Token für diesen Benutzer und dieses Gerät gespeichert hat. Falls dies der Fall ist und der Token verwendet werden kann (er wurde noch nicht eingelöst und ist nicht abgelaufen), sendet er den Token an einen Server zur Einlösung. In diesem Kontext wird `redeemer.example` als **Einlöser** bezeichnet. Der Server wird als **Einlöserserver** bezeichnet.
4. Wenn der Token erfolgreich eingelöst wurde, sendet der Einlöserserver einen **Einlösungsdatensatz** an den Browser, um das Vertrauen in den Benutzer zu bestätigen.

### Verwendung von Einlösungsdatensätzen

Sobald der Browser den Einlösungsdatensatz erhalten hat, kann er ihn in verschiedenen Kontexten als Vertrauenssignal für den aktuellen Benutzer verwenden, beispielsweise wenn dieser eine sensible Aktion wie das Anmelden, den Kauf eines Produkts oder das Veröffentlichen eines Kommentars ausführen darf. Dieses Vertrauenssignal kann auch an andere Parteien weitergeleitet werden, um Vertrauen zu übertragen.

## Beispielimplementierung

Eine Beispielimplementierung für private State Tokens finden Sie unter [Private State Token Demo Issuer](https://privatetokens.dev/) (siehe den [Quellcode](https://github.com/GoogleChromeLabs/private-state-token-demo/)).

## Tokens ausstellen

Dieser Abschnitt führt Sie durch den Prozess zum Einrichten eines Ausstellerservers und zum Ausstellen von Tokens über die Ausstellerwebsite.

### Registrierung als Aussteller

Wenn Sie Aussteller werden und Ihre Website private State Tokens ausstellen lassen möchten, müssen Sie sich zunächst registrieren, indem Sie den [Registrierungsprozess für Aussteller](https://github.com/GoogleChrome/private-tokens/blob/main/PST-Registration.md) abschließen. Erstellen Sie ein neues [Issue](https://github.com/GoogleChrome/private-tokens/issues/new) im [Google-private-tokens-GitHub-Repository](https://github.com/GoogleChrome/private-tokens), indem Sie die Vorlage „New PST Issuer“ verwenden. Befolgen Sie die Hinweise im Repository, um das Issue auszufüllen. Sobald ein Endpunkt verifiziert wurde, wird er in dieses Repository übernommen, und die serverseitige Infrastruktur von Chrome beginnt, diese Schlüssel abzurufen.

> [!NOTE]
> Dieser Prozess wird von Google durchgeführt und steuert die Token-Ausstellung über Chromium-Browser; andere Implementierungen können sich dafür entscheiden, einen anderen Prozess zu verwenden.

### Einen Ausstellerserver erstellen

Um den Token-Ausstellerserver zu implementieren, müssen Sie eine eigene serverseitige Anwendung erstellen, die HTTP-Endpunkte bereitstellt. Die Ausstellerkomponente besteht aus zwei Hauptmodulen:

1. Der Aussteller-App
2. Dem Token-Aussteller

![Die Hauptkomponenten des Ausstellerservers: Aussteller-App, die beispielsweise mit Node.js erstellt wurde, und Token-Aussteller (kryptografische Komponente, die für das Ausstellen von Tokens verantwortlich ist)](issuer.png)

In der Beispielimplementierung:

1. Die Aussteller-App ist ein [Node.js-Server, der das Express-Framework verwendet](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs), um die HTTP-Endpunkte des Ausstellers zu hosten. Sehen Sie sich den [Beispielcode der App](https://github.com/GoogleChromeLabs/private-state-token-demo/blob/main/src/index.js) an.
2. Die kryptografische Komponente des Token-Ausstellers erfordert keine bestimmte Sprache. Aufgrund der Leistungsanforderungen dieser Komponente stellen wir jedoch eine C-Implementierung als Beispiel bereit, die die Bibliothek [Boring SSL](https://boringssl.googlesource.com/boringssl/) zur Verwaltung von Tokens verwendet. Sehen Sie sich das [Codebeispiel der kryptografischen Komponente und weitere Informationen zur Installation](https://github.com/GoogleChromeLabs/private-state-token-demo/tree/main?tab=readme-ov-file#private-state-token-demo) an.
3. Die Token-Ausstellerkomponente verwendet benutzerdefinierte Schlüssel für elliptische Kurven (EC), um Tokens zu verschlüsseln. Diese Schlüssel müssen geschützt und in einem sicheren Speicher abgelegt werden.

#### Technische Anforderungen an den Ausstellerserver

Gemäß dem Privacy Pass-Protokoll müssen Sie mindestens zwei HTTP-Endpunkte in Ihrem Ausstellerserver implementieren:

- Schlüsselbindung: An diesem Endpunkt sind Details Ihres öffentlichen Verschlüsselungsschlüssels für Browser verfügbar, damit diese bestätigen können, dass Ihr Server legitim ist. Dieser Endpunkt muss sich in einem Well-known-Verzeichnis befinden, das unter der {{Glossary("registrable_domain", "registrierbaren Domain")}} des Ausstellerservers unter `/.well-known/private-state-token/key-commitment` liegt. Sehen Sie sich das [Beispiel für den Key-commitment-Endpunkt](https://github.com/GoogleChromeLabs/private-state-token-demo/blob/bf173919620f2b8203a628c3a1094c8846e6aff1/src/index.js#L55) an.
- Token-Ausstellung: Der Endpunkt für die Token-Ausstellung verarbeitet alle Token-Anfragen. Dieser Endpunkt ist der Integrationspunkt für die Token-Ausstellerkomponente. Er muss sich auf dem Ausstellerserver unter `/.well-known/private-state-token/issuance` befinden. Sehen Sie sich das [Beispiel für den Endpunkt zur Token-Ausstellung](https://github.com/GoogleChromeLabs/private-state-token-demo/blob/bf173919620f2b8203a628c3a1094c8846e6aff1/src/index.js#L81) an.

Aufgrund des erwarteten hohen Datenverkehrs auf einem solchen Server empfehlen wir, ihn mithilfe einer skalierbaren Infrastruktur bereitzustellen (beispielsweise in einer Cloud-Umgebung), damit Sie Ihr Backend an einen variablen Bedarf anpassen können.

### Einen Token über Ihren Server ausstellen

Nachdem der Ausstellerserver eingerichtet ist, kann Ihre Ausstellerwebsite nun einen neuen Token ausstellen, indem sie eine Fetch-Anfrage an Ihren Endpunkt zur Token-Ausstellung sendet. Die Fetch-Anfrage muss ein `privateToken`-Objekt enthalten, dessen obligatorische Eigenschaften folgende sind:

- `version`
  - : Die Version des kryptografischen Protokolls, die Sie beim Generieren des Tokens verwenden möchten. Derzeit ist dies stets auf `1` gesetzt; dies ist die einzige Version, die die Spezifikation unterstützt.
- `operation`
  - : Die Token-Operation, die Sie ausführen möchten. In diesem Fall setzen wir sie auf `token-request`.

Sie können dies mit einem [`fetch()`](/de/docs/Web/API/Window/fetch)-Aufruf verarbeiten, bei dem `method` auf `POST` gesetzt und eine `privateToken`-Option angegeben wird:

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
> Sie können Anfragen für Token-Operationen auch mithilfe folgender Optionen ausstellen:
>
> - [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) mit dem in einem Aufruf von [`XMLHttpRequest.setPrivateToken()`](/de/docs/Web/API/XMLHttpRequest/setPrivateToken) angegebenen `privateToken`
> - {{htmlelement("iframe")}}-Elemente, bei denen `privateToken` als Zeichenkette im Attribut [`privateToken`](/de/docs/Web/HTML/Reference/Elements/iframe#privatetoken) enthalten ist.

Im Hintergrund generiert der Browser eine Gruppe von Nonces, die zum Generieren des Tokens erforderlich sind, blindiert sie und sendet sie als Teil der Fetch-Anfrage in einem {{httpheader("Sec-Private-State-Token")}}-Anfrage-Header an den Ausstellerserver. Zusätzlich wird die Version des kryptografischen Protokolls, die zum Generieren der Nonces verwendet wurde, in einem {{httpheader("Sec-Private-State-Token-Crypto-Version")}}-Anfrage-Header an den Ausstellerserver gesendet. Zum Zeitpunkt der Erstellung wird nur eine Version unterstützt, aber dieser Mechanismus ermöglicht es, künftig mehrere Versionen zu unterstützen.

Beachten Sie, dass Sie die Methode [`Document.hasPrivateToken()`](/de/docs/Web/API/Document/hasPrivateToken) verwenden können, um zu prüfen, ob der Browser bereits einen Token von unserem Aussteller gespeichert hat, bevor Sie versuchen, einen weiteren anzufordern.

Wenn die Token-Anfrage erfolgreich ist, enthält die Antwort einen {{httpheader("Sec-Private-State-Token")}}-Antwort-Header mit blinden Signaturen. Der Browser entfernt deren Blindierung und speichert sie zusammen mit den ursprünglichen nicht blindierten Nonces in einem sicheren Token-Speicher. Diese Paarung aus Signaturen und Nonces bildet einen privaten State Token, der später eingelöst werden kann. Die rohen Tokens sind für JavaScript nicht zugänglich.

### Einschränkungen bei der Token-Ausstellung

Jedes Gerät kann bis zu 500 Tokens pro Website der obersten Ebene und Aussteller speichern. Die maximale Anzahl von Ausstellern pro Origin der obersten Ebene beträgt zwei.

Jeder Token enthält Metadaten, die angeben, welchen Schlüssel der Aussteller zur Ausstellung verwendet hat. Diese Informationen können während des Einlösungsprozesses verwendet werden, um zu entscheiden, ob Tokens eingelöst werden sollen oder nicht. Jeder Token kann mit genau einem kryptografischen Schlüssel ausgestellt werden, und jeder Aussteller kann maximal 6 Schlüssel haben. Eine mögliche Verwendung dieser Variablen besteht darin, auf Grundlage Ihrer kryptografischen Schlüssel einen Vertrauensbereich für Ihre Tokens zu definieren (zum Beispiel: Schlüssel 1: hohes Vertrauen; Schlüssel 6: kein Vertrauen).

Der Browser kann den aktuellen Satz gültiger Schlüssel des Ausstellers über den Endpunkt zur Schlüsselbindung abrufen. Schlüssel sollten regelmäßig rotiert werden; dies kann mindestens alle 60 Tage erfolgen. Jede schnellere Rotation wird ignoriert. Alle Tokens, die mit ungültigen Schlüsseln ausgestellt wurden, gelten ebenfalls als ungültig.

## Tokens einlösen

Dieser Abschnitt führt Sie durch den Prozess zum Einrichten eines Einlöserservers, zum Einlösen von Tokens und zum Ausstellen von Einlösungsdatensätzen.

### Einen Einlöserserver erstellen

Sie müssen einen Einlöserserver erstellen, um die vom Ausstellerserver ausgestellten Tokens zu lesen. Die folgenden Schritte erläutern, wie Tokens eingelöst werden und wie die mit diesen Tokens verknüpften Einlösungsdatensätze gelesen werden.

Die Einlöserkomponente besteht aus zwei Hauptmodulen:

1. Der Einlöser-App
2. Dem Token-Einlöser

![Die Hauptkomponenten des Einlöserservers: Einlöser-App, die beispielsweise mit Node.js erstellt wurde, und Token-Einlöser (kryptografische Komponente, die für die Überprüfung von Signaturen und Tokens innerhalb des Einlösungsprozesses verantwortlich ist)](redeemer.png)

Sie können den Aussteller und den Einlöser auf demselben Server (oder derselben Servergruppe) sowie mit derselben kryptografischen Komponente ausführen. Tatsächlich wurde dies in der Beispielimplementierung getan, um die Nachverfolgung etwas zu erleichtern. Sehen Sie sich erneut den [Beispielcode der App](https://github.com/GoogleChromeLabs/private-state-token-demo/blob/main/src/index.js) sowie das [Codebeispiel der kryptografischen Komponente und Informationen zur Installation](https://github.com/GoogleChromeLabs/private-state-token-demo/tree/main?tab=readme-ov-file#private-state-token-demo) an.

#### Technische Anforderungen an den Einlöserserver

Gemäß dem Privacy Pass-Protokoll müssen Sie mindestens einen HTTP-Endpunkt in Ihrem Einlöserserver implementieren:

- Token-Einlösung: Hier wird die gesamte Token-Einlösung verarbeitet. Dieser Endpunkt ist der Integrationspunkt für die Token-Einlöserkomponente. Er muss sich auf dem Ausstellerserver unter `/.well-known/private-state-token/redemption` befinden. Sehen Sie sich unser [Beispiel für einen Endpunkt zur Token-Einlösung](https://github.com/GoogleChromeLabs/private-state-token-demo/blob/bf173919620f2b8203a628c3a1094c8846e6aff1/src/index.js#L98) an.

### Einen Token über Ihren Server einlösen

Nachdem der Einlöserserver eingerichtet ist, kann Ihre Einlöserwebsite nun einen zuvor gespeicherten Token einlösen, indem sie eine Fetch-Anfrage an Ihren Endpunkt zur Token-Einlösung sendet. Die Fetch-Anfrage muss ein `privateToken`-Objekt enthalten, genau wie bei der Anfrage zur Token-Ausstellung, außer dass die angegebene `operation` den Wert `token-redemption` haben sollte.

Sie können dies mit einem [`fetch()`](/de/docs/Web/API/Window/fetch)-Aufruf verarbeiten, bei dem `method` auf {{httpmethod("POST")}} gesetzt und eine `privateToken`-Option angegeben wird.

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

Hier setzen wir auch die Eigenschaft `refreshPolicy` auf `none`. Das bedeutet, dass dieser Einlösungsdatensatz verwendet und kein neuer ausgestellt werden soll, wenn es für diesen Benutzer und diese Website einen zuvor gesetzten, nicht abgelaufenen Einlösungsdatensatz gibt. Wenn wir `refreshPolicy: "refresh"` setzen würden, würde immer ein neuer Einlösungsdatensatz ausgestellt. Beachten Sie, dass `none` der Standardwert ist, da dieses Verhalten in den meisten Fällen erwünscht ist. Wir wollten jedoch darauf aufmerksam machen.

Im Hintergrund sendet der Browser den Token zusammen mit zugehörigen Einlösungsmetadaten in einem {{httpheader("Sec-Private-State-Token")}}-Anfrage-Header. Der Einlöser sendet anschließend einen Redemption Record in einem `Sec-Private-State-Token`-Antwort-Header, um eine Einlösungsbestätigung bereitzustellen, die zur Übertragung von Benutzervertrauen verwendet werden kann. Der Einlösungsdatensatz wird in einem sicheren Datenspeicher abgelegt, auf den JavaScript nicht direkt zugreifen kann.

Zusätzlich kann der Einlöser in der Antwort einen {{httpheader("Sec-Private-State-Token-Lifetime")}}-Header einschließen, um dem Browser mitzuteilen, wie lange der Einlösungsdatensatz zwischengespeichert werden soll (in Sekunden). Wenn der Header `Sec-Private-State-Token-Lifetime` weggelassen wird, ist die Lebensdauer des Einlösungsdatensatzes an die Lebensdauer des Schlüssels zur Token-Verifizierung gebunden, der die Ausstellung des eingelösten Tokens bestätigt hat.

### Einschränkungen für Einlösungsdatensätze

Pro Gerät, Seite und Aussteller können alle 48 Stunden zwei Tokens eingelöst werden.

Die resultierenden Einlösungsdatensätze gelten bis zu ihrem Ablauf als aktiv, wie im `Sec-Private-State-Token-Lifetime`-Antwort-Header angegeben.

## Verwendung von Einlösungsdatensätzen

Sobald der Browser den Einlösungsdatensatz erhalten hat, kann er in anderen Kontexten als Vertrauenssignal für den aktuellen Benutzer verwendet werden, beispielsweise wenn dieser eine sensible Aktion wie das Anmelden, den Kauf eines Produkts oder das Veröffentlichen eines Kommentars ausführen darf.

Dieses Vertrauenssignal kann an andere Parteien weitergeleitet werden, um Vertrauen zu übertragen. Fügen Sie dazu bei Fetch-Aufrufen für zukünftige Ressourcen eine `privateToken`-Option mit der `operation` `send-redemption-record` ein:

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

Wir setzen außerdem die Eigenschaft `issuers` auf `[issuer.example]`, wodurch angegeben wird, von welchem Aussteller der Einlösungsdatensatz stammen soll. Wenn für den angegebenen Aussteller bzw. die angegebenen Aussteller keine Einlösungsdatensätze verfügbar sind, ist der Anfrage-Header leer. Beachten Sie, dass Sie die Methode [`Document.hasRedemptionRecord()`](/de/docs/Web/API/Document/hasRedemptionRecord) verwenden können, um zu prüfen, ob der Browser einen von einem bestimmten Aussteller stammenden Einlösungsdatensatz hat, bevor Sie versuchen, ihn weiterzuleiten.

Im Hintergrund werden die Einlösungsdatensätze in einem {{httpheader("Sec-Redemption-Record")}}-Anfrage-Header eingeschlossen. Der Header enthält eine Liste von Aussteller- und Einlösungsdatensatzpaaren, die jedem Einlösungsdatensatz entsprechen.

## Integration der Permissions Policy

`token-request`-Operationen werden durch die Direktive {{httpheader('Permissions-Policy/private-state-token-issuance','private-state-token-issuance')}} von {{httpheader("Permissions-Policy")}} gesteuert, während `token-redemption`- und `send-redemption-record`-Operationen durch die Direktive {{httpheader('Permissions-Policy/private-state-token-redemption','private-state-token-redemption')}} gesteuert werden. Die Allowlist für diese Direktiven ist standardmäßig auf `*` gesetzt (alle Origins). Das bedeutet, dass das Feature für die Seite der obersten Ebene, gleichoriginige {{htmlelement("iframe")}}-Elemente und herkunftsübergreifende `<iframe>`-Elemente ohne explizite Delegierung verfügbar ist.

Sie können die Token-Ausstellung oder -Einlösung für bestimmte Seiten Ihrer Website deaktivieren, indem Sie `private-state-token-issuance=()` und `private-state-token-redemption=()` im `Permissions-Policy`-Header für jede Seite einschließen.

Sie können den `Permissions-Policy`-Header auch verwenden, um den Zugriff Dritter auf Token-Operationen zu steuern. Verwenden Sie als Parameter für die Origin-Liste des Headers `self` sowie alle Origins, denen Sie Zugriff auf die API erlauben möchten. Um beispielsweise die Verwendung privater State Tokens in allen Browsing-Kontexten vollständig zu deaktivieren, mit Ausnahme Ihrer eigenen Origin und `https://example.com`, setzen Sie den folgenden HTTP-Antwort-Header:

```http
Permissions-Policy: private-state-token-issuance=(self "https://example.com"), private-state-token-redemption=(self "https://example.com")
```

Um die API für alle herkunftsübergreifenden Ressourcen zu aktivieren, setzen Sie die Origin-Liste auf `*`.

Obwohl die Standardrichtlinie `*` ist, muss ein `<iframe>` weiterhin die Direktiven `private-state-token-issuance` und `private-state-token-redemption` in seinem `allow`-Attribut einschließen, um Zugriff auf das Feature zu erhalten. Um beispielsweise die Verwendung beider Features auf `example.com` zu erlauben:

```html
<iframe
  src="https://example.com"
  allow="private-state-token-issuance 'self';
  private-state-token-redemption 'self'">
</iframe>
```
