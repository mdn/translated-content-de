---
title: Using the Private State Token API
slug: Web/API/Private_State_Token_API/Using
l10n:
  sourceCommit: 06e6e54baef7032c4e81ca93291fde0a0585de8b
---

{{DefaultAPISidebar("Private State Token API")}}

Diese Seite erklärt, wie die Private State Tokens API verwendet wird, um Vertrauen in die Authentizität eines Benutzers von einem Browsing-Kontext in einen anderen zu übertragen.

## Überblick auf hoher Ebene

Der Prozess, wie private Zustands-Token verwendet werden, kann in drei Phasen unterteilt werden:

1. Ausgabe von Tokens
2. Einlösen von Tokens
3. Nutzung von Einlösungsaufzeichnungen

Dieser Abschnitt fasst diese Phasen zusammen. Wir werden diese in den folgenden Abschnitten detaillierter betrachten.

Private Zustands-Token verwenden das [Privacy Pass Protokoll](https://privacypass.github.io/) im Hintergrund, um die Ausgabe und den Transport von Tokens usw. zu verwalten.

### Ausgabe von Tokens

1. Angenommen, ein Benutzer besucht eine Website, `issuer.example`.
2. `issuer.example` kann Schritte unternehmen, um Vertrauen in den Benutzer _zu etablieren_. Dies kann durch Methoden wie ein [CAPTCHA](https://en.wikipedia.org/wiki/CAPTCHA), die Überprüfung ihrer E-Mail-Adresse, das Führen eines Protokolls der legitimen Käufe des Benutzers oder eine Kombination mehrerer solcher Methoden geschehen.
   > [!NOTE]
   > Private Zustandstokens sind kein Ersatz für CAPTCHAs oder andere Mechanismen zur Vertrauensetablierung. Private Zustandstokens bieten eine Möglichkeit, Vertrauen in einen Benutzer _zu übermitteln_, nicht _zu etablieren_.
3. Sobald das Vertrauen etabliert ist, kann `issuer.example` eine Anfrage an einen Server senden, um ein **Private State Token** auszustellen — ein kryptografisches Token, das Vertrauen in den verifizierten Benutzer darstellt. In diesem Kontext wird `issuer.example` als **Issuer** bezeichnet. Der Server wird als **Issuer Server** bezeichnet.
4. Wenn die Anfrage erfolgreich ist, wird das Token dann sicher im Browser des Benutzers gespeichert.

### Einlösen von Tokens

Wenn eine andere Website das Vertrauen in denselben Benutzer herstellen möchte, kann sie dies tun, indem sie ein private Zustands-Token einlöst, das vom Browser des Benutzers von einer anderen Website ausgestellt wurde, anstatt den Prozess der Vertrauensetablierung von Grund auf neu durchzuführen.

1. Angenommen, der Benutzer besucht eine andere Website, `redeemer.example`.
2. `redeemer.example` kann eine Anfrage an einen Server stellen, um ein Token für diesen bestimmten Benutzer und sein Gerät einzulösen.
3. Der Browser überprüft, ob er ein Token für diesen Benutzer und das Gerät gespeichert hat. Wenn ja, und das Token verwendbar ist (es wurde noch nicht eingelöst und ist nicht abgelaufen), sendet es das Token an einen Server zur Einlösung. In diesem Kontext wird `redeemer.example` als **Redeemer** bezeichnet. Der Server wird als **Redeemer Server** bezeichnet.
4. Wenn das Token erfolgreich eingelöst wird, sendet der Redeemer-Server eine **Einlösungsaufzeichnung** an den Browser, um das Benutzervetrauen zu bestätigen.

### Nutzung von Einlösungsaufzeichnungen

Sobald der Browser die Einlösungsaufzeichnung erhalten hat, kann er sie als Vertrauenssignal für den aktuellen Benutzer in verschiedenen Kontexten verwenden, z. B. wenn er ihnen erlaubt, eine sensible Aktion wie das Anmelden, den Kauf eines Produkts oder das Posten eines Kommentars durchzuführen. Dieses Vertrauenssignal kann auch an andere Parteien weitergegeben werden, um Vertrauen zu übertragen.

## Beispielimplementierung

Sie können eine Beispielimplementierung von private Zustandstokens bei [Private State Token Demo Issuer](https://privatetokens.dev/) finden (sehen Sie sich den [Quellcode](https://github.com/GoogleChromeLabs/private-state-token-demo/) an).

## Token-Ausgabe

Dieser Abschnitt führt Sie durch den Prozess des Aufsetzens eines Issuer-Servers und der Ausgabe von Tokens über die Issuer-Website.

### Anmeldung als Issuer

Wenn Sie ein Issuer werden möchten und Ihre Website private Zustandstokens ausgeben soll, müssen Sie sich zuerst registrieren, indem Sie den [Issuer-Registrierungsprozess](https://github.com/GoogleChrome/private-tokens/blob/main/PST-Registration.md) abschließen. Öffnen Sie ein neues [Issue](https://github.com/GoogleChrome/private-tokens/issues/new) im [Google private-tokens GitHub-Repository](https://github.com/GoogleChrome/private-tokens) unter Verwendung der Vorlage "New PST Issuer". Folgen Sie den Anweisungen im Repository, um das Issue auszufüllen. Sobald ein Endpunkt verifiziert wurde, wird er in dieses Repository integriert und die Chrome-Server-Infrastruktur beginnt, diese Schlüssel abzurufen.

> [!NOTE]
> Dieser Prozess wird von Google verwaltet und kontrolliert die Token-Ausgabe über Chrome-Browser; andere Implementierungen könnten einen anderen Prozess verwenden.

### Erstellung eines Issuer-Servers

Um den Token-Issuer-Server zu implementieren, müssen Sie Ihre eigene serverseitige Anwendung erstellen, die HTTP-Endpunkte bereitstellt. Die Issuer-Komponente besteht aus zwei Hauptmodulen:

1. Die Issuer-App
2. Der Token-Issuer

![Die Hauptkomponenten des Issuer-Servers: Issuer-App gebaut mit zum Beispiel, Node.js, und Token-Issuer (kryptografische Komponente, die für die Ausstellung von Tokens verantwortlich ist)](issuer.png)

In der Beispielimplementierung:

1. Die Issuer-App ist ein [Node.js-Server, der das Express-Framework verwendet](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs), um die HTTP-Endpunkte des Issuers zu hosten. Sehen Sie sich den [Code der App-Beispiel](https://github.com/GoogleChromeLabs/private-state-token-demo/blob/main/src/index.js) an.
2. Die kryptografische Komponente des Token-Issuers erfordert keine spezielle Sprache, aber aufgrund der Leistungsanforderungen dieser Komponente stellen wir Ihnen eine C-Implementierung als Beispiel zur Verfügung, die die [Boring SSL](https://boringssl.googlesource.com/boringssl/)-Bibliothek verwendet, um Tokens zu verwalten. Sehen Sie sich das [Beispiel des kryptografischen Komponenten-Codes und weitere Informationen zur Installation](https://github.com/GoogleChromeLabs/private-state-token-demo/tree/main?tab=readme-ov-file#private-state-token-demo) an.
3. Die Token-Issuer-Komponente verwendet benutzerdefinierte elliptische Kurven (EC)-Schlüssel zur Verschlüsselung von Tokens. Diese Schlüssel müssen geschützt und in einem sicheren Speicher aufbewahrt werden.

#### Technische Anforderungen an den Issuer-Server

Entsprechend dem Privacy Pass Protokoll müssen Sie mindestens zwei HTTP-Endpunkte in Ihrem Issuer-Server implementieren:

- Schlüsselselbstverpflichtung: Dieser Endpunkt ist dort, wo Ihre Verschlüsselungs-öffentliche-Schlüssel-Details für Browser verfügbar sind, um zu bestätigen, dass Ihr Server legitim ist. Dieser Endpunkt muss sich in einem bekannten Verzeichnis befinden, das sich innerhalb der {{Glossary("registrable_domain", "registrierbaren Domain")}} des Issuer-Servers bei `/.well-known/private-state-token/key-commitment` befindet. Sehen Sie sich das [Schlüsselselbstverpflichtungs-Endpunkt Beispiel](https://github.com/GoogleChromeLabs/private-state-token-demo/blob/bf173919620f2b8203a628c3a1094c8846e6aff1/src/index.js#L55) an.
- Token-Ausgabe: Der Token-Output-Endpunkt ist der, an dem alle Token-Anfragen bearbeitet werden. Dieser Endpunkt wird der Integrationspunkt für die Token-Issuer-Komponente sein. Er muss sich auf dem Issuer-Server bei `/.well-known/private-state-token/issuance` befinden. Sehen Sie sich das [Token-Output-Endpunkt Beispiel](https://github.com/GoogleChromeLabs/private-state-token-demo/blob/bf173919620f2b8203a628c3a1094c8846e6aff1/src/index.js#L81) an.

Aufgrund des erwarteten hohen Verkehrsaufkommens auf einem solchen Server empfehlen wir, ihn unter Verwendung einer skalierbaren Infrastruktur bereitzustellen (z. B. in einer Cloud-Umgebung), um Ihr Backend je nach variabler Nachfrage anpassen zu können.

### Ausgabe eines Tokens über Ihren Server

Mit dem aufgesetzten Issuer-Server kann Ihre Issuer-Website nun ein neues Token ausgeben, indem eine Fetch-Anfrage an Ihren Token-Output-Endpunkt gestellt wird. Die Fetch-Anfrage muss ein `privateToken`-Objekt enthalten, dessen obligatorische Eigenschaften sind:

- `version`
  - : Die Version des kryptografischen Protokolls, die Sie bei der Generierung des Tokens verwenden möchten. Derzeit wird dies immer auf `1` gesetzt, was die einzige von der Spezifikation unterstützte Version ist.
- `operation`
  - : Die Token-Operation, die Sie ausführen möchten. In diesem Fall setzen wir sie auf `token-request`.

Sie können dies mit einem [`fetch()`](/de/docs/Web/API/Window/fetch)-Aufruf und mit der `method` auf `POST` festgelegt und einer `privateToken`-Option spezifiziert handhaben:

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
> Sie können auch Token-Operationen mit folgenden Methoden anfordern:
>
> - [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) mit dem `privateToken`, das in einem [`XMLHttpRequest.setPrivateToken()`](/de/docs/Web/API/XMLHttpRequest/setPrivateToken)-Aufruf angegeben ist
> - {{htmlelement("iframe")}} Elemente mit dem `privateToken`, das als Zeichenkette im [`privateToken`](/de/docs/Web/HTML/Reference/Elements/iframe#privatetoken)-Attribut eingeschlossen ist.

Im Hintergrund generiert der Browser eine Reihe von Nonces, die zur Generierung des Tokens benötigt werden, verschleiert sie und sendet sie im Rahmen der Fetch-Anfrage in einem {{httpheader("Sec-Private-State-Token")}}-Request-Header an den Issuer-Server. Zusätzlich wird die Version des kryptografischen Protokolls, das zur Generierung der Nonces verwendet wird, in einem {{httpheader("Sec-Private-State-Token-Crypto-Version")}}-Request-Header an den Issuer-Server gesendet. Zum Zeitpunkt des Schreibens wird nur eine Version unterstützt, aber dieser Mechanismus ermöglicht es, in Zukunft mehrere Versionen zu unterstützen.

Beachten Sie, wie Sie die Methode [`Document.hasPrivateToken()`](/de/docs/Web/API/Document/hasPrivateToken) verwenden können, um zu überprüfen, ob der Browser bereits ein Token von unserem Issuer gespeichert hat, bevor Sie versuchen, ein weiteres anzufordern.

Wenn die Token-Anfrage erfolgreich ist, wird die Antwort einen {{httpheader("Sec-Private-State-Token")}}-Response-Header mit blinden Signaturen enthalten. Der Browser hebt diese Verschleierung auf und speichert sie zusammen mit den ursprünglichen nicht verschleierten Nonces in einem sicheren Token-Store. Diese Paarung von Signaturen und Nonces stellt ein privates Zustandstoken dar, das später eingelöst werden kann. Die Rohtokens sind für JavaScript nicht zugänglich.

### Token-Ausgabelimitationen

Jedes Gerät kann bis zu 500 Tokens pro Top-Level-Website und Issuer speichern. Die maximale Anzahl von Issuers pro Top-Level-Herkunft ist zwei.

Jedes Token hat Metadaten, die angeben, welchen Schlüssel der Issuer zur Ausgabe verwendet hat. Diese Informationen können verwendet werden, um zu entscheiden, ob Tokens während des Einlösungsprozesses eingelöst werden sollen (oder nicht). Jedes Token kann nur mit einem einzigen kryptografischen Schlüssel ausgegeben werden und jeder Issuer kann maximal 6 Schlüssel besitzen. Eine potenzielle Möglichkeit, dies zu nutzen, besteht darin, Ihren Tokens basierend auf Ihren kryptografischen Schlüsseln einen Vertrauensbereich zu definieren (z. B. Schlüssel 1: hohes Vertrauen; Schlüssel 6: kein Vertrauen).

Der Browser kann die aktuelle Menge gültiger Schlüssel des Issuers von dem Schlüsselselbstverpflichtungs-Endpunkt erhalten. Schlüssel sollten regelmäßig rotiert werden; dies kann mindestens alle 60 Tage erfolgen; jede Rotation, die schneller erfolgt, wird ignoriert. Alle Tokens, die mit ungültigen Schlüsseln ausgegeben wurden, werden auch als ungültig angesehen.

## Einlösung von Tokens

Dieser Abschnitt führt Sie durch den Prozess des Aufsetzens eines Redeemer-Servers, des Einlösens von Tokens und der Ausgabe von Einlösungsaufzeichnungen.

### Erstellung eines Redeemer-Servers

Sie müssen einen Redeemer-Server erstellen, um die vom Issuer-Server ausgegebenen Tokens zu lesen. Die folgenden Schritte skizzieren, wie Tokens eingelöst werden können sowie wie die Einlösungsaufzeichnungen, die mit diesen Tokens verbunden sind, gelesen werden.

Die Redeemer-Komponente besteht aus zwei Hauptmodulen:

1. Die Redeemer-App
2. Der Token-Redeemer

![Die Hauptkomponenten des Redeemer-Servers: Redeemer-App gebaut mit zum Beispiel, Node.js, und Token-Redeemer (kryptografische Komponente, die für die Überprüfung von Signaturen und Tokens innerhalb des Einlösungsprozesses verantwortlich ist)](redeemer.png)

Sie können wählen, den Issuer und den Redeemer im selben Server (oder einer Gruppe von Servern) laufen zu lassen und gleiche kryptografische Komponenten zu verwenden. Tatsächlich wurde dies in der Beispielimplementierung gemacht, um es einfacher nachzuvollziehen. Sehen Sie sich wieder den [App-Beispielcode](https://github.com/GoogleChromeLabs/private-state-token-demo/blob/main/src/index.js) und das [Beispiel des kryptografischen Komponenten-Codes und Informationen über die Installation](https://github.com/GoogleChromeLabs/private-state-token-demo/tree/main?tab=readme-ov-file#private-state-token-demo) an.

#### Technische Anforderungen an den Redeemer-Server

Entsprechend dem Privacy Pass Protokoll müssen Sie mindestens einen HTTP-Endpunkt in Ihrem Redeemer-Server implementieren:

- Token-Einlösung: Hier werden alle Token-Einlösungen bearbeitet. Dieser Endpunkt wird der Integrationspunkt für die Token-Redeemer-Komponente sein. Er muss sich auf dem Issuer-Server bei `/.well-known/private-state-token/redemption` befinden. Sehen Sie sich unser [Token-Einlösungsendpunkt Beispiel](https://github.com/GoogleChromeLabs/private-state-token-demo/blob/bf173919620f2b8203a628c3a1094c8846e6aff1/src/index.js#L98) an.

### Einlösen eines Tokens über Ihren Server

Mit dem aufgesetzten Redeemer-Server kann Ihre Redeemer-Website nun ein zuvor gespeichertes Token einlösen, indem eine Fetch-Anfrage an Ihren Token-Einlösungsendpunkt gestellt wird. Die Fetch-Anfrage muss ein `privateToken`-Objekt enthalten, genau wie in der Token-Ausgabeanfrage, außer dass die spezifizierte `operation` `token-redemption` sein sollte.

Sie können dies mit einem [`fetch()`](/de/docs/Web/API/Window/fetch)-Aufruf und mit der `method` auf {{httpmethod("POST")}} festgelegt und einer `privateToken`-Option spezifiziert handhaben.

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

Hier setzen wir auch die `refreshPolicy`-Eigenschaft auf `none`, was bedeutet, dass, wenn es eine zuvor gesetzte, nicht abgelaufene Einlösungsaufzeichnung für diesen Benutzer und diese Website gibt, diese Einlösungsaufzeichnung verwendet werden sollte und keine neue erstellt werden sollte. Wenn wir `refreshPolicy: "refresh"` setzen, würde immer eine neue Einlösungsaufzeichnung erstellt werden. Beachten Sie, dass `none` der Standardwert ist, da dies das Verhalten ist, das Sie in den meisten Fällen möchten, aber wir wollten darauf aufmerksam machen.

Im Hintergrund sendet der Browser das Token (zusammen mit relevanten Einlösungsmetadaten) in einem {{httpheader("Sec-Private-State-Token")}}-Request-Header. Der Redeemer sendet dann eine Einlösungsaufzeichnung in einem `Sec-Private-State-Token`-Response-Header, um eine Einlösungsbescheinigung zu geben, die verwendet werden kann, um Benutzervetrauen zu übermitteln. Die Einlösungsaufzeichnung wird in einem sicheren Datenspeicher gespeichert, der nicht direkt über JavaScript zugänglich ist.

Zusätzlich kann der Redeemer einen {{httpheader("Sec-Private-State-Token-Lifetime")}}-Header in die Antwort einfügen, um dem Browser anzuzeigen, wie lange (in Sekunden) die Einlösungsaufzeichnung zwischengespeichert werden soll. Wenn der `Sec-Private-State-Token-Lifetime`-Header weggelassen wird, wird die Lebensdauer der Einlösungsaufzeichnung an die Lebensdauer des Token-Verifikationsschlüssels gekoppelt, der die Ausgabe des eingelösten Tokens bestätigt hat.

### Einschränkungen bei Einlösungsaufzeichnungen

Zwei Tokens können alle 48 Stunden pro Gerät, Seite und Issuer eingelöst werden.

Die resultierenden Einlösungsaufzeichnungen gelten bis zum Ablauf (wie im `Sec-Private-State-Token-Lifetime`-Response-Header angegeben) als aktiv.

## Nutzung der Einlösungsaufzeichnung

Sobald der Browser die Einlösungsaufzeichnung erhalten hat, kann sie als Vertrauenssignal für den aktuellen Benutzer in anderen Kontexten verwendet werden, beispielsweise wenn man ihm erlaubt, eine sensible Aktion wie das Anmelden, den Kauf eines Produkts oder das Posten eines Kommentars auszuführen.

Dieses Vertrauenssignal kann an andere Parteien weitergegeben werden, um Vertrauen weiterzugeben. Um dies zu tun, schließen Sie eine `privateToken`-Option in Fetch-Aufrufe für zukünftige Ressourcen ein, mit der `operation` auf `send-redemption-record`:

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

Die `send-redemption-record`-Token-Operation ist nur verfügbar bei `fetch()`-Aufrufen, die im Top-Level-Dokument gemacht werden.

Wir setzen auch die `issuers`-Eigenschaft auf `[issuer.example]`, was spezifiziert, von welchem Issuer wir erwarten, dass die Einlösungsaufzeichnung stammt. Wenn keine Einlösungsaufzeichnungen für die angegebenen Issuer verfügbar sind, wird der Anforderungs-Header leer sein. Beachten Sie, wie Sie die Methode [`Document.hasRedemptionRecord()`](/de/docs/Web/API/Document/hasRedemptionRecord) verwenden können, um zu überprüfen, ob der Browser eine Einlösungsaufzeichnung hat, die von einem bestimmten Issuer stammt, bevor Sie versuchen, sie weiterzugeben.

Im Hintergrund werden die Einlösungsaufzeichnungen in einem {{httpheader("Sec-Redemption-Record")}}-Anforderungs-Header enthalten sein. Der Header enthält eine Liste von Issuer- und Einlösungsaufzeichnungspaaren, die jeder Einlösungsaufzeichnung entsprechen.

## Integration in die Berechtigungsrichtlinie

`token-request`-Operationen werden durch die {{httpheader('Permissions-Policy/private-state-token-issuance','private-state-token-issuance')}}-{{httpheader("Permissions-Policy")}}-Direktive kontrolliert, während `token-redemption`- und `send-redemption-record`-Operationen durch die {{httpheader('Permissions-Policy/private-state-token-redemption','private-state-token-redemption')}}-Direktive kontrolliert werden. Die Allowlist für diese Direktiven ist standardmäßig auf `*` (alle Herkünfte) gesetzt. Das bedeutet, dass die Funktion für die oberste Seite, gleichherkunftsbezogene {{htmlelement("iframe")}}-Elemente und fremdherkunftsbezogene `<iframe>`-Elemente ohne explizite Delegation verfügbar ist.

Sie können die Token-Ausgabe oder -Einlösung für bestimmte Seiten auf Ihrer Website ablehnen, indem Sie `private-state-token-issuance=()` und `private-state-token-redemption=()` in den `Permissions-Policy`-Header für jede Seite einschließen.

Sie können auch den `Permissions-Policy`-Header verwenden, um den Zugriff Dritter auf Token-Operationen zu steuern. Verwenden Sie als Parameter zur Kopfzeilen-Herkuftsliste self und alle Herkünfte, denen Sie den Zugang zur API erlauben möchten. Zum Beispiel, um die Verwendung von privaten Zustandstokens in allen Browsing-Kontexten außer Ihrer eigenen Herkunft und `https://example.com` vollständig zu deaktivieren, setzen Sie den folgenden HTTP-Response-Header:

```http
Permissions-Policy: private-state-token-issuance=(self "https://example.com"), private-state-token-redemption=(self "https://example.com")
```

Um die API für alle fremden Ressourcen zu aktivieren, setzen Sie die Herkuftsliste auf `*`.

Obwohl die Standard-Politik `*` ist, muss ein `<iframe>` dennoch die Direktiven `private-state-token-issuance` und `private-state-token-redemption` in seinem Allow-Attribut enthalten, um Zugriff auf die Funktion zu erhalten. Zum Beispiel, um beide Funktionen auf `example.com` zuzulassen:

```html
<iframe
  src="https://example.com"
  allow="private-state-token-issuance 'self';
  private-state-token-redemption 'self'">
</iframe>
```
