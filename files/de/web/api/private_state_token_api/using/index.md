---
title: Using the Private State Token API
slug: Web/API/Private_State_Token_API/Using
l10n:
  sourceCommit: f6e66d18205c93fcaeb2ea9ad51541b5b4d7d2b1
---

{{DefaultAPISidebar("Private State Token API")}}

Diese Seite erklärt, wie man die Private State Tokens API verwendet, um Vertrauen in die Authentizität eines Benutzers von einem Browsing-Kontext in einen anderen zu übertragen.

## Überblick auf hoher Ebene

Der Prozess, bei dem private Zustands-Token verwendet werden, kann in drei Phasen unterteilt werden:

1. Ausgabe von Tokens
2. Einlösen von Tokens
3. Verwendung des Einlösungsnachweises

Dieser Abschnitt fasst diese Phasen zusammen. Wir werden diese in den folgenden Abschnitten genauer betrachten.

Private Zustands-Token verwenden das [Privacy Pass-Protokoll](https://privacypass.github.io/) im Hintergrund, um die Ausgabe und den Transport von Tokens zu handhaben, usw.

### Ausgabe von Tokens

1. Angenommen, ein Benutzer besucht eine Website, `issuer.example`.
2. `issuer.example` kann Schritte unternehmen, um Vertrauen in den Benutzer _zu etablieren_. Dies kann durch Methoden wie ein [CAPTCHA](https://en.wikipedia.org/wiki/CAPTCHA), die Verifizierung der E-Mail-Adresse, die Aufzeichnung legitimer Käufe des Benutzers oder eine Kombination mehrerer solcher Methoden durchgeführt werden.
   > [!NOTE]
   > Private State Tokens sind kein Ersatz für CAPTCHAs oder andere Mechanismen zur Vertrauensbildung. Private State Tokens bieten eine Möglichkeit, Vertrauen in einen Benutzer _zu übermitteln_, nicht Vertrauen in einen Benutzer _zu etablieren_.
3. Sobald Vertrauen etabliert wurde, kann `issuer.example` eine Anfrage an einen Server stellen, um ein **Private State Token** auszustellen — ein kryptografisches Token, das Vertrauen in den verifizierten Benutzer darstellt. In diesem Kontext wird `issuer.example` als **Issuer** bezeichnet. Der Server wird als **Issuer Server** bezeichnet.
4. Wenn die Anfrage erfolgreich ist, wird das Token dann sicher im Browser des Benutzers gespeichert.

### Einlösen von Tokens

Wenn eine andere Website Vertrauen in denselben Benutzer herstellen möchte, kann sie dies tun, indem sie ein privates Zustands-Token einlöst, das dem Browser des Benutzers von einer anderen Website ausgestellt wurde, anstatt den Prozess der Vertrauensbildung von Grund auf neu zu durchlaufen.

1. Angenommen, der Benutzer besucht eine andere Website, `redeemer.example`.
2. `redeemer.example` kann eine Anfrage an einen Server stellen, um ein Token für diesen spezifischen Benutzer und dieses Gerät einzulösen.
3. Der Browser prüft, ob ein Token für diesen Benutzer und dieses Gerät gespeichert ist. Wenn ja, und das Token noch gültig ist (es wurde noch nicht eingelöst und ist nicht abgelaufen), sendet es das Token an einen Server zur Einlösung. In diesem Kontext wird `redeemer.example` als **Redemer** bezeichnet. Der Server wird als **Redemer-Server** bezeichnet.
4. Wenn das Token erfolgreich eingelöst wird, sendet der Redemer-Server einen **Einlösungsnachweis** an den Browser, um das Vertrauen des Benutzers zu verifizieren.

### Verwendung des Einlösungsnachweises

Sobald der Browser den Einlösungsnachweis erhalten hat, kann er ihn als Vertrauenssignal für den aktuellen Benutzer in verschiedenen Kontexten verwenden, zum Beispiel wenn er dem Benutzer erlaubt, eine sensible Aktion wie das Anmelden, den Kauf eines Produkts oder das Veröffentlichen eines Kommentars durchzuführen. Dieses Vertrauenssignal kann auch an andere Parteien weitergegeben werden, um Vertrauen zu vermitteln.

## Beispielimplementierung

Sie finden eine Beispielimplementierung der Private State Tokens unter [Private State Token Demo Issuer](https://privatetokens.dev/) (siehe den [Quellcode](https://github.com/GoogleChromeLabs/private-state-token-demo/)).

## Ausgabe von Tokens

In diesem Abschnitt wird der Prozess beschrieben, wie ein Issuer-Server eingerichtet und Token über die Issuer-Website ausgegeben werden.

### Anmeldung, um ein Issuer zu werden

Wenn Sie ein Issuer werden möchten und Ihre Website Private State Tokens ausstellen soll, müssen Sie sich zunächst registrieren, indem Sie den [Issuer-Registrierungsprozess](https://github.com/GoogleChrome/private-tokens/blob/main/PST-Registration.md) abschließen. Öffnen Sie ein neues [Issue](https://github.com/GoogleChrome/private-tokens/issues/new) im [Google Private-Tokens GitHub Repository](https://github.com/GoogleChrome/private-tokens) und verwenden Sie die Vorlage "New PST Issuer". Folgen Sie der Anleitung im Repository, um das Issue auszufüllen. Sobald ein Endpunkt verifiziert wurde, wird er in dieses Repository aufgenommen und die Chrome-Server-Infrastruktur beginnt, diese Schlüssel abzurufen.

> [!NOTE]
> Dieser Prozess wird von Google betrieben und kontrolliert die Token-Ausgabe über Chromium-Browser; andere Implementierungen können sich für einen anderen Prozess entscheiden.

### Erstellen eines Issuer-Servers

Um den Token-Issuer-Server zu implementieren, müssen Sie Ihre eigene serverseitige Anwendung erstellen, die HTTP-Endpunkte bereitstellt. Die Issuer-Komponente besteht aus zwei Hauptmodulen:

1. Die Issuer-App
2. Der Token-Issuer

![Die Hauptkomponenten des Issuer-Servers: Issuer-App, gebaut mit, zum Beispiel, Node.js, und Token-Issuer (kryptografische Komponente, verantwortlich für die Ausgabe von Tokens)](issuer.png)

In der Beispielimplementierung:

1. Die Issuer-App ist ein [Node.js-Server, der das Express-Framework verwendet](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs), um die Issuer-HTTP-Endpunkte zu hosten. Sehen Sie sich den [App-Beispielcode](https://github.com/GoogleChromeLabs/private-state-token-demo/blob/main/src/index.js) an.
2. Die kryptografische Komponente des Token-Issuers erfordert keine spezifische Sprache, aber aufgrund der Leistungsanforderungen dieser Komponente stellen wir ein C-Beispiel bereit, das die [Boring SSL](https://boringssl.googlesource.com/boringssl/)-Bibliothek verwendet, um Tokens zu verwalten. Sehen Sie sich das [Beispiel für die kryptografische Komponente und weitere Informationen zur Installation](https://github.com/GoogleChromeLabs/private-state-token-demo/tree/main?tab=readme-ov-file#private-state-token-demo) an.
3. Die Token-Issuer-Komponente verwendet benutzerdefinierte elliptische Kurven (EC)-Schlüssel, um Tokens zu verschlüsseln. Diese Schlüssel müssen geschützt und sicher aufbewahrt werden.

#### Technische Anforderungen für Issuer-Server

Laut dem Privacy Pass-Protokoll müssen Sie in Ihrem Issuer-Server mindestens zwei HTTP-Endpunkte implementieren:

- Schlüsselverpflichtung: Dieser Endpunkt ist der Ort, an dem Ihre Verschlüsselungsschlüsseldetails für Browser verfügbar sind, um zu bestätigen, dass Ihr Server legitim ist. Dieser Endpunkt muss sich in einem bekannten Verzeichnis befinden, das sich auf dem [eTLD+1](https://web.dev/articles/same-site-same-origin#site) des Issuer-Servers unter `/.well-known/private-state-token/key-commitment` befindet. Sehen Sie sich das [Beispiel für den Key-Commitment-Endpunkt](https://github.com/GoogleChromeLabs/private-state-token-demo/blob/bf173919620f2b8203a628c3a1094c8846e6aff1/src/index.js#L55) an.
- Token-Ausgabe: Der Endpunkt für die Token-Ausgabe ist der Ort, an dem alle Token-Anfragen bearbeitet werden. Dieser Endpunkt ist der Integrationspunkt für die Token-Issuer-Komponente. Es muss sich auf dem Issuer-Server unter `/.well-known/private-state-token/issuance` befinden. Sehen Sie sich das [Beispiel für den Token-Ausgabe-Endpunkt](https://github.com/GoogleChromeLabs/private-state-token-demo/blob/bf173919620f2b8203a628c3a1094c8846e6aff1/src/index.js#L81) an.

Aufgrund des hohen erwarteten Traffics auf einem solchen Server empfehlen wir Ihnen, ihn mit einer skalierbaren Infrastruktur bereitzustellen (zum Beispiel in einer Cloud-Umgebung), um Ihr Backend basierend auf einer variablen Nachfrage anpassen zu können.

### Ausgabe eines Tokens über Ihren Server

Mit dem eingerichteten Issuer-Server kann Ihre Issuer-Website nun ein neues Token ausstellen, indem sie eine Fetch-Anfrage an Ihren Token-Ausgabeendpunkt sendet. Die Fetch-Anfrage muss ein `privateToken`-Objekt enthalten, dessen Pflichtfelder sind:

- `version`
  - : Die Version des kryptografischen Protokolls, das Sie beim Generieren des Tokens verwenden möchten. Derzeit ist dies immer auf `1` festgelegt, was die einzige Version ist, die die Spezifikation unterstützt.
- `operation`
  - : Die Token-Operation, die Sie abschließen möchten. In diesem Fall setzen wir sie auf `token-request`.

Dies kann mit einem [`fetch()`](/de/docs/Web/API/Window/fetch)-Aufruf mit der `method` auf `POST` eingestellt und mit einer spezifizierten `privateToken`-Option gehandhabt werden:

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
> Sie können auch Token-Operationsanfragen stellen mit:
>
> - [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) mit dem `privateToken` angegeben in einem [`XMLHttpRequest.setPrivateToken()`](/de/docs/Web/API/XMLHttpRequest/setPrivateToken)-Aufruf
> - {{htmlelement("iframe")}}-Elementen, wobei das `privateToken` als Zeichenkette im [`privateToken`](/de/docs/Web/HTML/Reference/Elements/iframe#privatetoken)-Attribut enthalten ist.

Hinter den Kulissen generiert der Browser eine Reihe von Nonces, die für die Token-Generierung benötigt werden, verblindet sie und sendet sie im Rahmen der Fetch-Anfrage in einem {{httpheader("Sec-Private-State-Token")}}-Anfrageheader an den Issuer-Server. Zusätzlich wird die Version des kryptografischen Protokolls, das zur Generierung der Nonces verwendet wurde, in einem {{httpheader("Sec-Private-State-Token-Crypto-Version")}}-Anfrageheader an den Issuer-Server gesendet. Zum Zeitpunkt des Schreibens wird nur eine Version unterstützt, aber dieser Mechanismus ermöglicht es, in Zukunft mehrere Versionen zu unterstützen.

Beachten Sie, wie Sie die Methode [`Document.hasPrivateToken()`](/de/docs/Web/API/Document/hasPrivateToken) verwenden können, um zu prüfen, ob der Browser bereits ein Token von unserem Issuer gespeichert hat, bevor Sie versuchen, ein weiteres anzufordern.

Wenn die Token-Anfrage erfolgreich ist, enthält die Antwort einen {{httpheader("Sec-Private-State-Token")}}-Antwortheader mit Blindunterschriften. Der Browser entblindet sie und speichert sie zusammen mit den ursprünglichen unblinded Nonces in einem sicheren Token-Store. Diese Kombination aus Unterschriften und Nonces stellt ein privates Zustands-Token dar, das später eingelöst werden kann. Die Roh-Tokens sind für JavaScript nicht zugänglich.

### Token-Ausgabelimits

Jedes Gerät kann bis zu 500 Tokens pro Top-Level-Website und Issuer speichern. Die maximale Anzahl an Issuers pro Top-Level-Ursprung ist zwei.

Jedes Token hat Metadaten, die angeben, welchen Schlüssel der Issuer zur Ausgabe verwendet hat. Diese Informationen können verwendet werden, um zu entscheiden, Tokens (oder nicht) während des Einlösungsprozesses einzulösen. Jedes Token kann nur mit einem einzigen kryptografischen Schlüssel ausgestellt werden und jeder Issuer kann maximal 6 Schlüssel haben. Ein möglicher Weg, diese Variable zu verwenden, besteht darin, Ihren Tokens basierend auf Ihren kryptografischen Schlüsseln eine Vertrauensreichweite zuzuweisen (zum Beispiel Schlüssel 1: hohes Vertrauen; Schlüssel 6: kein Vertrauen).

Der Browser kann den aktuellen Satz gültiger Schlüssel des Issuers vom Schlüsselverpflichtungsendpunkt abrufen. Schlüssel sollten regelmäßig rotiert werden; dies kann mindestens alle 60 Tage erfolgen; jede schnellere Rotation wird ignoriert. Alle Token, die mit ungültigen Schlüsseln ausgestellt wurden, werden ebenfalls als ungültig angesehen.

## Einlösen von Tokens

In diesem Abschnitt wird der Prozess beschrieben, wie ein Redeemer-Server eingerichtet wird, wie Tokens eingelöst werden und wie Einlösungsnachweise ausgegeben werden.

### Erstellen eines Redeemer-Servers

Sie müssen einen Redeemer-Server erstellen, um die von der Issuer-Server ausgestellten Tokens zu lesen. Die folgenden Schritte skizzieren, wie Tokens eingelöst werden und wie die Einlösungsnachweise gelesen werden, die mit diesen Tokens verbunden sind.

Die Redeemer-Komponente besteht aus zwei Hauptmodulen:

1. Die Redeemer-App
2. Der Token-Redeemer

![Die Hauptkomponenten des Redeemer-Servers: Redeemer-App, gebaut mit, zum Beispiel, Node.js, und Token-Redeemer (kryptografische Komponente, die für das Verifizieren der Unterschriften und Tokens im Einlösungsprozess verantwortlich ist)](redeemer.png)

Sie können sich dazu entscheiden, den Issuer und den Redeemer auf demselben Server (oder einer Gruppe von Servern) und kryptografischen Komponente auszuführen. Tatsächlich ist dies genau das, was in der Beispielimplementierung gemacht wurde, um es ein wenig einfacher zu machen, dem Ganzen zu folgen. Sehen Sie sich den [App-Beispielcode](https://github.com/GoogleChromeLabs/private-state-token-demo/blob/main/src/index.js) und das [Beispiel für die kryptografische Komponente sowie Informationen zur Installation](https://github.com/GoogleChromeLabs/private-state-token-demo/tree/main?tab=readme-ov-file#private-state-token-demo) an.

#### Technische Anforderungen für Redeemer-Server

Laut dem Privacy Pass-Protokoll müssen Sie in Ihrem Redeemer-Server mindestens einen HTTP-Endpunkt implementieren:

- Token-Einlösung: Hier werden alle Token-Einlösungen behandelt. Dieser Endpunkt wird der Integrationspunkt für die Token-Redeemer-Komponente sein. Er muss sich auf dem Issuer-Server unter `/.well-known/private-state-token/redemption` befinden. Sehen Sie sich unser [Beispiel für den Token-Einlösungsendpunkt](https://github.com/GoogleChromeLabs/private-state-token-demo/blob/bf173919620f2b8203a628c3a1094c8846e6aff1/src/index.js#L98) an.

### Einlösen eines Tokens über Ihren Server

Mit dem eingerichteten Redeemer-Server kann Ihre Redeemer-Website nun ein zuvor gespeichertes Token einlösen, indem sie eine Fetch-Anfrage an Ihren Token-Einlösungsendpunkt sendet. Die Fetch-Anfrage muss ein `privateToken`-Objekt enthalten, dasselbe wie in der Token-Ausgabeanfrage, außer dass in diesem Fall das angegebene `operation` auf `token-redemption` gesetzt werden sollte.

Dies kann mit einem [`fetch()`](/de/docs/Web/API/Window/fetch)-Aufruf mit der `method` auf {{httpmethod("POST")}} eingestellt und mit einer spezifizierten `privateToken`-Option gehandhabt werden.

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

Hier setzen wir auch die `refreshPolicy`-Eigenschaft auf `none`, was bedeutet, dass, wenn für diesen Benutzer und diese Website ein zuvor festgesetzter, nicht abgelaufener Einlösungsnachweis vorhanden ist, dieser Einlösungsnachweis verwendet werden sollte und kein neuer ausgestellt werden sollte. Wenn wir `refreshPolicy: "refresh"` setzen, würde immer ein neuer Einlösungsnachweis ausgestellt werden. Beachten Sie, dass `none` der Standardwert ist, da dies in den meisten Fällen das gewünschte Verhalten ist, aber wir wollten darauf aufmerksam machen.

Hinter den Kulissen sendet der Browser das Token (zusammen mit den zugehörigen Einlösungsmetadaten), angehängt in einem {{httpheader("Sec-Private-State-Token")}}-Anfrageheader. Der Redeemer sendet dann einen Einlösungsnachweis in einem `Sec-Private-State-Token`-Antwortheader, um eine Einlösungsbescheinigung zur Verwendung zur Vertrauensvermittlung zu liefern. Der Einlösungsnachweis wird in einem sicheren Datenspeicher gespeichert, der über JavaScript nicht direkt zugänglich ist.

Zusätzlich kann der Redeemer einen {{httpheader("Sec-Private-State-Token-Lifetime")}}-Header in die Antwort aufnehmen, um dem Browser mitzuteilen, wie lange (in Sekunden) der Einlösungsnachweis zwischengespeichert werden sollte. Wenn der `Sec-Private-State-Token-Lifetime`-Header weggelassen wird, wird die Lebensdauer des Einlösungsnachweises an die Lebensdauer des Token-Überprüfungsschlüssels gebunden, der die Ausgabe des eingelösten Tokens bestätigt hat.

### Einlösungsnachweislösungen

Zwei Tokens können alle 48 Stunden eingelöst werden, pro Gerät, Seite und Issuer.

Die resultierenden Einlösungsnachweise gelten als aktiv bis zum Ablaufdatum (wie im `Sec-Private-State-Token-Lifetime`-Antwortheader angegeben).

## Verwendung des Einlösungsnachweises

Sobald der Browser den Einlösungsnachweis erhalten hat, kann er als Vertrauenssignal für den aktuellen Benutzer in anderen Kontexten verwendet werden, zum Beispiel wenn er ihnen erlaubt, eine sensible Aktion wie das Anmelden, den Kauf eines Produkts oder das Kommentieren durchzuführen.

Dieses Vertrauenssignal kann auch an andere Parteien weitergegeben werden, um Vertrauen zu vermitteln. Dazu fügen Sie eine `privateToken`-Option in Fetch-Aufrufe für zukünftige Ressourcen ein, mit einer `operation` von `send-redemption-record`:

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

Die Token-Operation `send-redemption-record` ist nur für `fetch()`-Aufrufe im Top-Level-Dokument verfügbar.

Wir setzen auch die `issuers`-Eigenschaft auf `[issuer.example]`, was angibt, von welchem Issuer wir erwarten, dass der Einlösungsnachweis stammt. Wenn für die angegebenen Issuer keine Einlösungsnachweise verfügbar sind, bleibt der Anfrageheader leer. Beachten Sie, wie Sie die Methode [`Document.hasRedemptionRecord()`](/de/docs/Web/API/Document/hasRedemptionRecord) verwenden können, um zu prüfen, ob der Browser einen Einlösungsnachweis von einem bestimmten Issuer hat, bevor Sie versuchen, ihn weiterzuleiten.

Hinter den Kulissen werden die Einlösungsnachweise im {{httpheader("Sec-Redemption-Record")}}-Anfrageheader enthalten sein. Der Header enthält eine Liste von Issuer- und Einlösungsnachweis-Paaren, die jedem Einlösungsnachweis entsprechen.

## Permissions Policy-Integration

`token-request`-Operationen werden durch die {{httpheader('Permissions-Policy/private-state-token-issuance','private-state-token-issuance')}} {{httpheader("Permissions-Policy")}}-Direktive kontrolliert, während `token-redemption`- und `send-redemption-record`-Operationen durch die {{httpheader('Permissions-Policy/private-state-token-redemption','private-state-token-redemption')}}-Direktive kontrolliert werden. Die Zulassungsliste für diese Direktiven ist standardmäßig auf `*` (alle Ursprünge) gesetzt. Dies bedeutet, dass das Feature für die Top-Level-Seite, gleich-originierte {{htmlelement("iframe")}}-Elemente und Cross-Origin `<iframe>`-Elemente ohne explizite Delegation verfügbar ist.

Sie können die Token-Ausgabe oder -Einlösung für bestimmte Seiten auf Ihrer Website ausschließen, indem Sie `private-state-token-issuance=()` und `private-state-token-redemption=()` in den `Permissions-Policy`-Header für jede Seite aufnehmen.

Sie können den `Permissions-Policy`-Header auch verwenden, um den Zugriff Dritter auf Token-Operationen zu steuern. Verwenden Sie als Parameter für die Header-Ursprungsliste "self" und alle Ursprünge, denen Sie den Zugang zur API gewähren möchten. Um beispielsweise die Verwendung von Private State Tokens in allen Browsing-Kontexten außer Ihrem eigenen Ursprung und `https://example.com` vollständig zu deaktivieren, setzen Sie den folgenden HTTP-Antwortheader:

```http
Permissions-Policy: private-state-token-issuance=(self "https://example.com"), private-state-token-redemption=(self "https://example.com")
```

Um die API für alle Cross-Origin-Ressourcen zu aktivieren, setzen Sie die Ursprungs-Liste auf `*`.

Auch wenn die Standardrichtlinie `*` ist, muss ein `<iframe>` dennoch die `private-state-token-issuance`- und `private-state-token-redemption`-Direktiven im allow-Attribut enthalten, um Zugriff auf das Feature zu erhalten. Um beispielsweise beide Funktionen auf `example.com` zuzulassen:

```html
<iframe
  src="https://example.com"
  allow="private-state-token-issuance 'self';
  private-state-token-redemption 'self'">
</iframe>
```
