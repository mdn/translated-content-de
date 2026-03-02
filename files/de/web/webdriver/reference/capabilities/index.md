---
title: WebDriver Klassische Fähigkeiten
short-title: Capabilities
slug: Web/WebDriver/Reference/Capabilities
l10n:
  sourceCommit: 676631fd27c8096c3ae3ceb2a6b4ffd6f687055f
---

WebDriver klassische Fähigkeiten werden verwendet, um die von einer [Session](/de/docs/Web/WebDriver) unterstützten Funktionen zu kommunizieren. Ein Client kann auch Fähigkeiten verwenden, um festzulegen, welche Funktionen der Treiber beim [Erstellen einer neuen Session](/de/docs/Web/WebDriver/Reference/Classic/Commands/NewSession) erfüllen muss.

Wenn eine WebDriver-Session erstellt wird, gibt diese eine Reihe von Fähigkeiten zurück, die die ausgehandelten, effektiven Fähigkeiten der Session beschreiben. Einige der Fähigkeiten in diesem Satz sind [standardisiert und werden von allen Browsern geteilt](#liste_der_fähigkeiten), aber der Satz kann auch [browser-spezifische Fähigkeiten](#anbieter-spezifische_fähigkeiten) enthalten, die stets ein Präfix haben.

## Aushandlung von Fähigkeiten

Fähigkeiten können verwendet werden, um einen Treiber zu verlangen, der eine bestimmte Teilmenge von Funktionen unterstützt. Dies kann verwendet werden, um bestimmte Browserfunktionen zu verlangen, wie die [Fähigkeit, die Fenstermaße zu ändern](/de/docs/Web/WebDriver/Reference/Classic/Capabilities/setWindowRect), wird aber auch in verteilten Umgebungen genutzt, um eine bestimmte Browserkonfiguration aus einer Vielzahl von Möglichkeiten auszuwählen.

Die Auswahl eines bestimmten Webbrowsers oder einer Plattform ergibt nur Sinn, wenn Sie einen Remote-WebDriver verwenden. In diesem Fall nimmt der Client Kontakt mit dem WebDriver über einen oder mehrere Vermittlungsknoten auf, die aushandeln, welchen Treiber Sie basierend auf den erhaltenen Fähigkeiten zurückerhalten.

Das Fähigkeitsobjekt ist ein Auswahlmechanismus, der begrenzt, welche Treiberkonfigurationen der Server zurückgibt. Wenn Sie eine Firefox-Instanz unter Verwendung von `browserName` anfordern und Firefox nicht auf dem Remote-Rechner installiert ist, oder macOS von einem Remote-Rechner, der nur Linux unterstützt, haben Sie möglicherweise Pech. Aber gelegentlich ist es Ihnen vielleicht egal, welches spezifische Betriebssystem oder welcher Webbrowser Ihre Sitzung hat: Sie möchten einfach nur eine Sitzung, die eine bestimmte _Fähigkeit_ hat.

Der Auswahlprozess, oder die _Fähigkeitsverhandlung_, erfolgt über `alwaysMatch` und `firstMatch`.

### `alwaysMatch`

Wie der Name schon sagt, sind die in dem `alwaysMatch` Fähigkeitsobjekt beschriebenen Fähigkeiten Funktionen, die Sie _erfordern_, dass die Sitzung sie hat. Wenn der Server nicht die von Ihnen geforderten Funktionen bereitstellen kann, schlägt er fehl.

Wenn Sie beispielsweise Firefox Version 62 auf einem System anfordern, das nur Version 60 installiert hat, schlägt die Sitzungerstellung fehl:

```json
{
  "capabilities": {
    "alwaysMatch": {
      "browserName": "firefox",
      "browserVersion": "60"
    }
  }
}
```

### `firstMatch`

Das Feld `firstMatch` akzeptiert _ein Array_ von Fähigkeitsobjekten, die nacheinander abgeglichen werden, bis eines dem entspricht, was der Server bereitstellen kann, oder es schlägt fehl.

Dies kann nützlich sein, wenn Sie einen Treiber möchten, der auf macOS oder Linux, jedoch nicht auf Windows läuft:

```json
{
  "capabilities": {
    "firstMatch": [{ "platformName": "macos" }, { "platformName": "linux" }]
  }
}
```

### Kombination von `alwaysMatch` und `firstMatch`

`firstMatch` kann selbstverständlich mit `alwaysMatch` kombiniert werden, um die Auswahl einzuengen. Wenn Sie beispielsweise einen Treiber möchten, der auf macOS oder Linux läuft, es _muss_ jedoch Firefox sein:

```json
{
  "capabilities": {
    "alwaysMatch": {
      "browserName": "firefox"
    },
    "firstMatch": [{ "platformName": "macos" }, { "platformName": "linux" }]
  }
}
```

Das vorherige Beispiel ist genau äquivalent dazu, die Firefox-Anforderung in jedem `firstMatch`-Zweig zu platzieren:

```json
{
  "capabilities": {
    "firstMatch": [
      { "browserName": "firefox", "platformName": "macos" },
      { "browserName": "firefox", "platformName": "linux" }
    ]
  }
}
```

Welche der beiden vorherigen Beispiele Sie wählen, ist nicht wichtig, aber es kann von Bedeutung sein, wenn Sie Browserkonfigurationen weitergeben. Um unnötige Wiederholungen von Daten, wie insbesondere Profilen, zu vermeiden, wird empfohlen, `alwaysMatch` zu verwenden, sodass diese Daten nur einmal über das Netz übertragen werden:

```json
{
  "capabilities": {
    "alwaysMatch": {
      "browserName": "firefox",
      "moz:firefoxOptions": {
        "profile": "<base64 encoded profile>",
        "args": ["-headless"],
        "prefs": { "dom.ipc.processCount": 8 },
        "log": { "level": "trace" }
      }
    },
    "firstMatch": [{ "platformName": "macos" }, { "platformName": "linux" }]
  }
}
```

## Liste der Fähigkeiten

- [`browserName`](/de/docs/Web/WebDriver/Reference/Capabilities/browserName)
- [`browserVersion`](/de/docs/Web/WebDriver/Reference/Capabilities/browserVersion)
- [`platformName`](/de/docs/Web/WebDriver/Reference/Capabilities/platformName)
- [`acceptInsecureCerts`](/de/docs/Web/WebDriver/Reference/Capabilities/acceptInsecureCerts)
- [`pageLoadStrategy`](/de/docs/Web/WebDriver/Reference/Capabilities/pageLoadStrategy)
- [`proxy`](/de/docs/Web/WebDriver/Reference/Capabilities/proxy)
- [`setWindowRect`](/de/docs/Web/WebDriver/Reference/Capabilities/setWindowRect)
- [`timeouts`](/de/docs/Web/WebDriver/Reference/Capabilities/timeouts)
- [`unhandledPromptBehavior`](/de/docs/Web/WebDriver/Reference/Capabilities/unhandledPromptBehavior)
- [`webSocketUrl`](/de/docs/Web/WebDriver/Reference/Capabilities/webSocketUrl)

### Anbieter-spezifische Fähigkeiten

Neben den [standardmäßigen Fähigkeiten](#liste_der_fähigkeiten) erlaubt WebDriver Dritten, den Satz von Fähigkeiten zu _erweitern_, um ihren Bedürfnissen gerecht zu werden. Browseranbieter und Lieferanten von Treibern verwenden in der Regel Erweiterungsfähigkeiten, um Konfigurationen an den Browser zu übergeben, aber sie können auch von Intermediären für beliebige Informationsblöcke verwendet werden.

- [Firefox Fähigkeiten](/de/docs/Web/WebDriver/Reference/Capabilities/firefoxOptions) (`moz:firefoxOptions`)
- [Chrome Fähigkeiten](/de/docs/Web/WebDriver/Reference/Capabilities/goog/chromeOptions) (`goog:chromeOptions`)

### Veraltete Fähigkeiten

Die Mehrheit der Selenium-Clients verwendet `desiredCapabilities` und `requiredCapabilities`, um die neue Sitzung zu konfigurieren. Diese sind den oben beschriebenen `firstMatch` und `alwaysMatch` sehr ähnlich. Einige Treiber unterstützen diese veralteten Fähigkeiten, aber sie sind veraltet und sollten vermieden werden.

Die Umwandlung eines veralteten Fähigkeitsobjekts in den neuen Stil ist einfach. Das Erste, was Sie wissen müssen, ist, dass `alwaysMatch`/`firstMatch` _immer_ in ein `capabilities` JSON-Objekt eingebettet sind, während `desiredCapabilities`/`requiredCapabilities` auf der obersten Ebene existieren. Allgemein gesprochen sollte alles, was zuvor in `desiredCapabilities` eingefügt wurde, in einen `firstMatch`-Zweigarm gehen, um dieselbe Wirkung zu erzielen.

Nehmen Sie dieses veraltete Fähigkeitsobjekt:

```json
{ "desiredCapabilities": { "browserName": "firefox" } }
```

Dies wäre funktional äquivalent im neuen Stil:

```json
{ "capabilities": { "firstMatch": [{ "browserName": "firefox" }] } }
```

Da es jedoch nur einen `firstMatch`-Zweigarm gibt und wir wissen, dass die Sitzungserstellung fehlschlägt, wenn der Server kein Firefox installiert hat, ist es auch äquivalent dazu:

```json
{ "capabilities": { "alwaysMatch": { "browserName": "firefox" } } }
```

## Siehe auch

- [Neuer Sitzung](/de/docs/Web/WebDriver/Reference/Commands/NewSession) Befehl
- [Sitzung löschen](/de/docs/Web/WebDriver/Reference/Commands/NewSession) Befehl
