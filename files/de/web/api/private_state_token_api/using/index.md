---
title: Using the Private State Token API
slug: Web/API/Private_State_Token_API/Using
l10n:
  sourceCommit: d7a0ef33dfce20818a160557b5a72d6565cec254
---

{{DefaultAPISidebar("Private State Token API")}}

Diese Seite erklärt, wie man die Private State Tokens API verwendet, um Vertrauen in die Authentizität eines Nutzers von einem Browsing-Kontext in einen anderen zu übertragen.

## Überblick auf hoher Ebene

Der Prozess, bei dem private State Tokens verwendet werden, kann in drei Phasen unterteilt werden:

1. Ausgabe von Tokens
2. Einlösen von Tokens
3. Verwendung der Einlösungsaufzeichnung

Dieser Abschnitt fasst diese Phasen zusammen. In den nachfolgenden Abschnitten werden wir diese detaillierter betrachten.

Private State Tokens verwenden im Hintergrund das [Privacy Pass Protokoll](https://privacypass.github.io/), um die Ausgabe und den Transport von Tokens zu handhaben.

### Ausgabe von Tokens

1. Nehmen wir an, ein Nutzer besucht eine Website, `issuer.example`.
2. `issuer.example` kann Schritte unternehmen, um Vertrauen in den Nutzer _aufzubauen_. Dies kann durch Methoden wie ein [CAPTCHA](https://en.wikipedia.org/wiki/CAPTCHA), die Bestätigung der E-Mail-Adresse, das Führen eines Nachweises über legitime Käufe des Nutzers oder eine Kombination mehrerer solcher Methoden geschehen.
   > [!NOTE]
   > Private State Tokens sind kein Ersatz für CAPTCHAs oder andere Mechanismen zur Vertrauensbildung. Private State Tokens bieten eine Möglichkeit, Vertrauen in einen Nutzer zu _vermitteln_, nicht Vertrauen in einen Nutzer zu _etablieren_.
3. Sobald Vertrauen aufgebaut wurde, kann `issuer.example` eine Anfrage an einen Server stellen, um ein **private state token** auszustellen — ein kryptografisches Token, das Vertrauen in den verifizierten Nutzer darstellt. In diesem Kontext wird `issuer.example` als **Issuer** bezeichnet. Der Server wird als **Issuer Server** bezeichnet.
4. Wenn die Anfrage erfolgreich ist, wird das Token sicher im Browser des Nutzers gespeichert.

### Einlösen von Tokens

Wenn eine andere Website Vertrauen in denselben Nutzer aufbauen möchte, kann sie dies durch das Einlösen eines an den Browser des Nutzers ausgestellten private state token tun, anstatt den Prozess der Vertrauensbildung von Grund auf neu durchlaufen zu müssen.

1. Nehmen wir an, der Nutzer besucht eine andere Website, `redeemer.example`.
2. `redeemer.example` kann eine Anfrage an einen Server stellen, um ein Token für diesen spezifischen Nutzer und das Gerät einzulösen.
3. Der Browser prüft, ob er ein Token für diesen Nutzer und das Gerät gespeichert hat. Ist dies der Fall und das Token ist nutzbar (es wurde noch nicht eingelöst und ist nicht abgelaufen), wird das Token an einen Server gesendet, um eingelöst zu werden. In diesem Kontext wird `redeemer.example` als **Redeemer** bezeichnet. Der Server wird als **Redeemer Server** bezeichnet.
4. Wenn das Token erfolgreich eingelöst wird, sendet der Redeemer Server eine **Einlösungsaufzeichnung** an den Browser, um das Nutzervertrauen zu bestätigen.

### Verwendung der Einlösungsaufzeichnung

Sobald der Browser die Einlösungsaufzeichnung erhalten hat, kann er sie als Vertrauenssignal für den aktuellen Nutzer in verschiedenen Kontexten verwenden, zum Beispiel, wenn er ihnen erlaubt, eine sensible Handlung wie das Anmelden, das Kaufen eines Produkts oder das Posten eines Kommentars auszuführen. Dieses Vertrauenssignal kann auch an andere Parteien weitergeleitet werden, um Vertrauen zu vermitteln.

## Beispielimplementierung

Sie können eine Beispielimplementierung von private state tokens unter [Private State Token Demo Issuer](https://privatetokens.dev/) finden (siehe den [Quellcode](https://github.com/GoogleChromeLabs/private-state-token-demo/)).

## Ausgabe von Tokens

Dieser Abschnitt führt Sie durch den Prozess der Einrichtung eines Issuer Servers und der Ausgabe von Tokens über die Website des Issuers.

### Registrierung zum Issuer

Wenn Sie ein Issuer werden möchten und Ihre Website private state tokens ausstellen soll, müssen Sie sich zuerst registrieren, indem Sie den [Issuer registration process](https://github.com/GoogleChrome/private-tokens/blob/main/PST-Registration.md) abschließen. Öffnen Sie ein neues [Issue](https://github.com/GoogleChrome/private-tokens/issues/new) im [Google private-tokens GitHub Repository](https://github.com/GoogleChrome/private-tokens) mithilfe der "New PST Issuer"-Vorlage. Folgen Sie der Anleitung im Repository, um das Issue auszufüllen. Sobald ein Endpunkt verifiziert wurde, wird er in dieses Repository zusammengeführt und die Chrome-Server-Infrastruktur beginnt mit dem Abrufen dieser Schlüssel.

> [!NOTE]
> Dieser Prozess wird von Google betrieben und steuert die Token-Ausgabe über Chromium-Browser; andere Implementierungen können einen anderen Prozess verwenden.

### Erstellen eines Issuer Servers

Um den Token-Issuer-Server zu implementieren, müssen Sie Ihre eigene serverseitige Anwendung erstellen, die HTTP-Endpunkte bereitstellt. Die Issuer-Komponente besteht aus zwei Hauptmodulen:

1. Die Issuer App
2. Der Token Issuer

![Die Hauptkomponenten des Issuer Servers: Issuer App, zum Beispiel mit Node.js gebaut, und Token Issuer (kryptografische Komponente verantwortlich für die Ausstellung von Tokens)](issuer.png)

In der Beispielimplementierung:

1. Die Issuer App ist ein [Node.js-Server, der das Express-Framework verwendet](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs), um die Issuer HTTP-Endpunkte zu hosten. Schauen Sie sich den [Beispielcode der App](https://github.com/GoogleChromeLabs/private-state-token-demo/blob/main/src/index.js) an.
2. Die kryptografische Komponente des Token-Issuers erfordert keine spezifische Sprache, aber aufgrund der Leistungsanforderungen dieser Komponente bieten wir eine C-Implementierung als Beispiel an, die die [Boring SSL](https://boringssl.googlesource.com/boringssl/) Bibliothek verwendet, um Tokens zu verwalten. Schauen Sie sich den [Beispielcode der kryptografischen Komponente und weitere Informationen zur Installation](https://github.com/GoogleChromeLabs/private-state-token-demo/tree/main?tab=readme-ov-file#private-state-token-demo) an.
3. Die Token-Issuer-Komponente verwendet benutzerdefinierte elliptische Kurven (EC)-Schlüssel, um Tokens zu verschlüsseln. Diese Schlüssel müssen geschützt und in einem sicheren Speicher gespeichert werden.

#### Technische Anforderungen für den Issuer Server

Laut dem Privacy Pass Protokoll müssen Sie mindestens zwei HTTP-Endpunkte in Ihrem Issuer Server implementieren:

- Schlüsselbindung: Dieser Endpunkt ist dort, wo Ihre Verschlüsselungs-Schlüssel-Details für Browser verfügbar sein werden, um zu bestätigen, dass Ihr Server legitim ist. Dieser Endpunkt muss sich in einem bekannten Verzeichnis befinden, das sich auf der {{Glossary("registrable_domain", "registrierbaren Domain")}} des Issuer Servers unter `/.well-known/private-state-token/key-commitment` befindet. Schauen Sie sich das [Beispiel des Key-Commitment-Endpunktes](https://github.com/GoogleChromeLabs/private-state-token-demo/blob/bf173919620f2b8203a628c3a1094c8846e6aff1/src/index.js#L55) an.
- Token-Ausgabe: Der Token-Issue-Endpunkt ist dort, wo alle Token-Anfragen bearbeitet werden. Dieser Endpunkt wird der Integrationspunkt für die Token-Issuer-Komponente sein. Er muss sich auf dem Issuer Server bei `/.well-known/private-state-token/issuance` befinden. Schauen Sie sich das [Beispiel des Token-Issue-Endpunktes](https://github.com/GoogleChromeLabs/private-state-token-demo/blob/bf173919620f2b8203a628c3a1094c8846e6aff1/src/index.js#L81) an.

Aufgrund des zu erwartenden hohen Datenverkehrs auf einem solchen Server empfehlen wir, ihn mit einer skalierbaren Infrastruktur (zum Beispiel in einer Cloud-Umgebung) zu betreiben, um Ihr Backend je nach variablem Bedarf anpassen zu können.

### Ein Token über Ihren Server ausgeben

Mit dem eingerichteten Issuer Server kann Ihre Issuer Website nun ein neues Token ausstellen, indem sie eine fetch-Anfrage an Ihren Token-Issue-Endpunkt macht. Die fetch-Anfrage muss ein `privateToken`-Objekt enthalten, dessen obligatorische Eigenschaften sind:

- `version`
  - : Die Version des kryptografischen Protokolls, die Sie verwenden möchten, um das Token zu generieren. Derzeit ist dies immer auf `1` gesetzt, was die einzige Version ist, die die Spezifikation unterstützt.
- `operation`
  - : Die Token-Operation, die Sie abzuschließen versuchen. In diesem Fall setzen wir sie auf `token-request`.

Sie können dies mithilfe eines [`fetch()`](/de/docs/Web/API/Window/fetch)-Aufrufs mit der `method` auf `POST` und einer `privateToken`-Option handhaben:

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
> Sie können auch Token-Operationsanfragen ausstellen mit:
>
> - [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest), wobei das `privateToken` in einem [`XMLHttpRequest.setPrivateToken()`](/de/docs/Web/API/XMLHttpRequest/setPrivateToken)-Aufruf angegeben wird
> - {{htmlelement("iframe")}}-Elementen, wobei das `privateToken` als Zeichenfolge in das [`privateToken`](/de/docs/Web/HTML/Reference/Elements/iframe#privatetoken)-Attribut eingefügt wird.

Im Hintergrund generiert der Browser eine Reihe von Nonces, die benötigt werden, um das Token zu generieren, verschleiert sie, und sendet sie in einem {{httpheader("Sec-Private-State-Token")}}-Anfrage-Header als Teil der fetch-Anfrage an den Issuer-Server. Zusätzlich wird die Version des kryptografischen Protokolls, das zur Generierung der Nonces verwendet wird, in einem {{httpheader("Sec-Private-State-Token-Crypto-Version")}}-Anfrage-Header an den Issuer-Server gesendet. Zum Zeitpunkt der Erstellung dieses Dokuments gibt es nur eine unterstützte Version, aber dieser Mechanismus ermöglicht es, in der Zukunft mehrere Versionen zu unterstützen.

Beachten Sie, wie Sie die Methode [`Document.hasPrivateToken()`](/de/docs/Web/API/Document/hasPrivateToken) verwenden können, um zu überprüfen, ob der Browser bereits ein Token von unserem Issuer gespeichert hat, bevor Sie ein weiteres anfordern.

Wenn die Token-Anfrage erfolgreich ist, enthält die Antwort einen {{httpheader("Sec-Private-State-Token")}}-Antwort-Header mit blind Signaturen. Der Browser entblößt sie und speichert sie zusammen mit den ursprünglichen unverschleierten Nonces in einem sicheren Token-Speicher. Diese Paarung von Signaturen und Nonces stellt ein privates State Token dar, das später eingelöst werden kann. Die rohen Tokens sind für JavaScript nicht zugänglich.

### Einschränkungen bei der Tokenausgabe

Jedes Gerät kann bis zu 500 Tokens pro oberster Website und Issuer speichern. Die maximale Anzahl von Issuern pro oberstem Ursprung ist zwei.

Jedes Token enthält Metadaten, die angeben, welchen Schlüssel der Issuer zur Ausstellung verwendet hat. Diese Information kann verwendet werden, um zu entscheiden, ob Tokens im Einlösungsprozess eingelöst werden (oder nicht). Jedes Token kann mit einem und nur einem kryptografischen Schlüssel ausgestellt werden und jeder Issuer kann maximal 6 Schlüssel haben. Eine mögliche Verwendung dieser Variablen besteht darin, eine Reichweite des Vertrauens in Ihre Tokens basierend auf Ihren kryptografischen Schlüsseln zu definieren (z.B. Schlüssel 1: hohes Vertrauen; Schlüssel 6: kein Vertrauen).

Der Browser kann das aktuelle Set gültiger Schlüssel des Issuers von dem Key-Commitment-Endpunkt abrufen. Schlüssel sollten regelmäßig rotiert werden; dies kann alle 60 Tage mindestens geschehen; eine schnellere Rotation wird ignoriert. Alle Tokens, die mit ungültigen Schlüsseln ausgestellt wurden, werden ebenfalls als ungültig betrachtet.

## Einlösen von Tokens

Dieser Abschnitt führt Sie durch den Prozess der Einrichtung eines Redeemer Servers, des Einlösens von Tokens und des Ausstellens von Einlösungsaufzeichnungen.

### Erstellen eines Redeemer Servers

Sie müssen einen Redeemer Server erstellen, um die von dem Issuer Server ausgestellten Tokens zu lesen. Die folgenden Schritte zeigen, wie Tokens eingelöst werden sowie wie die mit diesen Tokens verbundenen Einlösungsaufzeichnungen gelesen werden.

Die Redeemer-Komponente besteht aus zwei Hauptmodulen:

1. Die Redeemer App
2. Der Token Redeemer

![Die Hauptkomponenten des Redeemer Servers: Redeemer App, zum Beispiel mit Node.js gebaut, und Token Redeemer (kryptografische Komponente verantwortlich für die Überprüfung von Signaturen und Tokens im Einlösungsprozess)](redeemer.png)

Sie können wählen, den Issuer und den Redeemer im selben Server (oder der gleichen Gruppe von Servern) und kryptografischen Komponenten zu betreiben. Tatsächlich wurde dies in der Beispielimplementierung getan, um es etwas einfacher nachzuvollziehen. Schauen Sie sich den [Beispielcode der App](https://github.com/GoogleChromeLabs/private-state-token-demo/blob/main/src/index.js) und das [Beispiel des kryptografischen Komponenten-Codes und Informationen zur Installation](https://github.com/GoogleChromeLabs/private-state-token-demo/tree/main?tab=readme-ov-file#private-state-token-demo) an.

#### Technische Anforderungen für den Redeemer Server

Laut dem Privacy Pass Protokoll müssen Sie mindestens einen HTTP-Endpunkt in Ihrem Redeemer Server implementieren:

- Token-Einlösung: Hier werden alle Token-Einlösungen bearbeitet. Dieser Endpunkt wird der Integrationspunkt für die Token-Redeemer-Komponente sein. Er muss sich auf dem Issuer Server bei `/.well-known/private-state-token/redemption` befinden. Schauen Sie sich unser [Beispiel des Token-Einlösungsendpunkts](https://github.com/GoogleChromeLabs/private-state-token-demo/blob/bf173919620f2b8203a628c3a1094c8846e6aff1/src/index.js#L98) an.

### Einlösen eines Tokens über Ihren Server

Mit dem eingerichteten Redeemer Server kann Ihre Redeemer Website nun ein zuvor gespeichertes Token durch eine fetch-Anfrage an Ihren Token-Einlösungsendpunkt einlösen. Die fetch-Anfrage muss ein `privateToken`-Objekt enthalten, das dem in der Token-Ausstellungsanfrage entspricht, außer dass die angegebene `operation` auf `token-redemption` gesetzt sein sollte.

Sie können dies mit einem [`fetch()`](/de/docs/Web/API/Window/fetch)-Aufruf handhaben, wobei die `method` auf {{httpmethod("POST")}} gesetzt ist und eine `privateToken`-Option angegeben ist.

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

Hier setzen wir auch die Eigenschaft `refreshPolicy` auf `none`, was bedeutet, dass, falls ein zuvor gesetzter, nicht abgelaufener Einlösungsnachweis für diesen Nutzer und diese Seite existiert, dieser Einlösungsnachweis verwendet werden sollte und kein neuer ausgestellt werden sollte. Wenn wir `refreshPolicy: "refresh"` setzen, würde immer ein neuer Einlösungsnachweis ausgestellt werden. Beachten Sie, dass `none` der Standardwert ist, da dies das Verhalten ist, das Sie in den meisten Fällen wünschen werden, wir jedoch darauf aufmerksam machen wollten.

Im Hintergrund sendet der Browser das Token (zusammen mit zugehörigen Einlösungsmetadaten) in einem {{httpheader("Sec-Private-State-Token")}}-Anfrage-Header. Der Redeemer sendet dann einen Einlösungsnachweis in einem `Sec-Private-State-Token`-Antwort-Header, um eine Einlösungsbestätigung als Vertrauenssignal zu liefern. Der Einlösungsnachweis wird in einem sicheren Datenspeicher gespeichert, der nicht direkt über JavaScript zugänglich ist.

Zusätzlich kann der Redeemer einen {{httpheader("Sec-Private-State-Token-Lifetime")}}-Header in die Antwort einschließen, um dem Browser mitzuteilen, wie lange (in Sekunden) der Einlösungsnachweis zwischengespeichert werden soll. Wenn der `Sec-Private-State-Token-Lifetime`-Header weggelassen wird, wird die Lebensdauer des Einlösungsnachweises an die Lebensdauer des Token-Verifizierungsschlüssels gebunden, der die ausgestellte Token-Ausgabe bestätigt hat.

### Einschränkungen bei Einlösungsnachweisen

Zwei Tokens können alle 48 Stunden pro Gerät, Seite und Issuer eingelöst werden.

Die resultierenden Einlösungsnachweise werden als aktiv bis zum Ablauf betrachtet (wie durch den `Sec-Private-State-Token-Lifetime`-Antwort-Header angegeben).

## Verwendung von Einlösungsnachweisen

Sobald der Browser den Einlösungsnachweis erhalten hat, kann er als Vertrauenssignal für den aktuellen Nutzer in anderen Kontexten verwendet werden, wie zum Beispiel beim Durchführen einer sensiblen Aktion wie der Anmeldung, dem Kauf eines Produkts oder dem Posten eines Kommentars.

Dieses Vertrauenssignal kann an andere Parteien weitergeleitet werden, um Vertrauen zu vermitteln. Dazu fügen Sie eine `privateToken`-Option in fetch-Anfragen für zukünftige Ressourcen hinzu, mit einer `operation` von `send-redemption-record`:

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

Die `send-redemption-record`-Token-Operation ist nur bei `fetch()`-Aufrufen im obersten Dokument verfügbar.

Wir setzen auch die Eigenschaft `issuers` auf `[issuer.example]`, was angibt, von welchem Issuer wir erwarten, dass der Einlösungsnachweis stammt. Wenn keine Einlösungsnachweise für den angegebenen Issuer verfügbar sind, bleibt der Anfrage-Header leer. Beachten Sie, wie Sie die Methode [`Document.hasRedemptionRecord()`](/de/docs/Web/API/Document/hasRedemptionRecord) verwenden können, um zu überprüfen, ob der Browser einen Einlösungsnachweis von einem bestimmten Issuer hat, bevor Sie versuchen, ihn weiterzuleiten.

Hinter den Kulissen werden die Einlösungsnachweise in einem {{httpheader("Sec-Redemption-Record")}}-Anfrage-Header eingeschlossen. Der Header enthält eine Liste von Issuer- und Einlösungsnachweispaaren, die jedem Einlösungsnachweis entsprechen.

## Integration in Berechtigungsrichtlinien

`token-request`-Operationen werden durch die {{httpheader('Permissions-Policy/private-state-token-issuance','private-state-token-issuance')}} {{httpheader("Permissions-Policy")}}-Direktive gesteuert, während `token-redemption`- und `send-redemption-record`-Operationen durch die {{httpheader('Permissions-Policy/private-state-token-redemption','private-state-token-redemption')}}-Direktive gesteuert werden. Die Erlauben-Liste für diese Direktiven ist standardmäßig auf `*` (alle Ursprünge) gesetzt. Dies bedeutet, dass die Funktion für die oberste Seite, gleich-origine {{htmlelement("iframe")}}-Elemente und irrelevante `<iframe>`-Elemente verfügbar ist, ohne explizite Delegation.

Sie können sich entscheiden, die Token-Ausgabe oder -Einlösung für bestimmte Seiten auf Ihrer Website auszuschließen, indem Sie `private-state-token-issuance=()` und `private-state-token-redemption=()` in den `Permissions-Policy`-Header für jede Seite aufnehmen.

Sie können auch den `Permissions-Policy`-Header verwenden, um den Zugriff Dritter auf Token-Operationen zu steuern. Verwenden Sie als Parameter für die Header-Ursprungsliste self und alle Ursprünge, denen Sie den Zugriff auf die API erlauben möchten. Zum Beispiel, um die Verwendung von private state tokens innerhalb aller Browsing-Kontexte außer Ihrem eigenen Ursprung und `https://example.com` vollständig zu deaktivieren, setzen Sie den folgenden HTTP-Antwort-Header:

```http
Permissions-Policy: private-state-token-issuance=(self "https://example.com"), private-state-token-redemption=(self "https://example.com")
```

Um die API für alle Fremd-Ressourcen zu aktivieren, setzen Sie die Ursprungsliste auf `*`.

Obwohl die Standardrichtlinie `*` ist, muss ein `<iframe>` dennoch die `private-state-token-issuance`- und `private-state-token-redemption`-Direktiven in seinem allow-Attribut einschließen, um Zugriff auf die Funktion zu erhalten. Zum Beispiel, um die Verwendung beider Funktionen auf `example.com` zu erlauben:

```html
<iframe
  src="https://example.com"
  allow="private-state-token-issuance 'self';
  private-state-token-redemption 'self'">
</iframe>
```
