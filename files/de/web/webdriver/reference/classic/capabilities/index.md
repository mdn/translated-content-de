---
title: WebDriver klassische Fähigkeiten
short-title: Capabilities
slug: Web/WebDriver/Reference/Classic/Capabilities
l10n:
  sourceCommit: 225de04b84b717433ffeb3bb0cf5ceddac9653ea
---

WebDriver klassische Fähigkeiten werden verwendet, um die von einer [Sitzung](/de/docs/Web/WebDriver) unterstützten Funktionen zu kommunizieren. Ein Client kann auch Fähigkeiten verwenden, um zu definieren, welche Funktionen der Treiber beim [Erstellen einer neuen Sitzung](/de/docs/Web/WebDriver/Reference/Classic/Commands/NewSession) erfüllen muss.

Wenn eine WebDriver-Sitzung erstellt wird, gibt sie eine Reihe von Fähigkeiten zurück, die die ausgehandelten und effektiven Fähigkeiten der Sitzung beschreiben. Einige der in diesem Satz enthaltenen Fähigkeiten sind [standardisiert und werden von allen Browsern geteilt](#liste_der_fähigkeiten), aber der Satz kann auch [browser-spezifische Fähigkeiten](#anbieter-spezifische_fähigkeiten) enthalten, die immer ein Präfix haben.

## Fähigkeitenverhandlung

Fähigkeiten können verwendet werden, um einen Treiber anzufordern, der eine bestimmte Teilmenge von Funktionen unterstützt. Dies kann genutzt werden, um bestimmte Browser-Funktionen anzufordern, wie z. B. die [Fähigkeit, die Fensterdimensionen zu ändern](/de/docs/Web/WebDriver/Reference/Classic/Capabilities/setWindowRect), wird aber auch in verteilten Umgebungen verwendet, um eine bestimmte Browserkonfiguration aus einer Matrix von Optionen auszuwählen.

Die Auswahl eines bestimmten Webbrowsers oder einer Plattform macht nur Sinn, wenn Sie einen Remote-WebDriver verwenden. In diesem Fall stellt der Client den Kontakt zum WebDriver über einen oder mehrere Zwischenknoten her, die aushandeln, welchen Treiber sie Ihnen basierend auf den empfangenen Fähigkeiten zurückgeben.

Das Fähigkeitenobjekt ist ein Auswahlmechanismus, der einschränkt, welche Treiberkonfigurationen der Server zurückgibt. Wenn Sie eine Firefox-Instanz mit `browserName` anfordern und Firefox nicht auf dem Remote installiert ist, oder macOS von einem Remote, das nur Linux unterstützt, haben Sie möglicherweise Pech. Aber manchmal ist es Ihnen vielleicht egal, welches spezifische Betriebssystem oder welcher Browser Ihre Sitzung hat: Sie möchten einfach nur eine Sitzung, die eine bestimmte _Fähigkeit_ hat.

Der Auswahlprozess oder die _Fähigkeitenverhandlung_ erfolgt über `alwaysMatch` und `firstMatch`.

### `alwaysMatch`

Wie der Name schon sagt, sind Fähigkeiten, die im `alwaysMatch`-Fähigkeitenobjekt beschrieben sind, Merkmale, die Sie von der Sitzung _erwarten_. Wenn der Server die angeforderten Merkmale nicht bereitstellen kann, schlägt die Anforderung fehl.

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

Das `firstMatch`-Feld akzeptiert _ein Array_ von Fähigkeitenobjekten, die nacheinander abgeglichen werden, bis eines zu dem passt, was der Server bereitstellen kann, oder es schlägt fehl.

Dies kann nützlich sein, wenn Sie einen Treiber benötigen, der unter macOS oder Linux, aber nicht unter Windows läuft:

```json
{
  "capabilities": {
    "firstMatch": [{ "platformName": "macos" }, { "platformName": "linux" }]
  }
}
```

### Kombination von `alwaysMatch` und `firstMatch`

`firstMatch` kann selbstverständlich mit `alwaysMatch` kombiniert werden, um die Auswahl einzuschränken. Wenn Sie beispielsweise einen Treiber benötigen, der unter macOS oder Linux läuft, es _muss_ jedoch Firefox sein:

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

Welche der beiden vorherigen Beispiele Sie wählen, ist nicht wichtig, aber es kann von Bedeutung sein, wenn Sie Browsereinstellungen weitergeben. Um zu vermeiden, dass Daten unnötig oft, wie beispielsweise Profile, wiederholt werden, ist es ratsam, `alwaysMatch` zu verwenden, damit diese Daten nur einmal über die Leitung übertragen werden:

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
- [`acceptInsecureCerts`](/de/docs/Web/WebDriver/Reference/Classic/Capabilities/acceptInsecureCerts)
- [`pageLoadStrategy`](/de/docs/Web/WebDriver/Reference/Capabilities/pageLoadStrategy)
- [`proxy`](/de/docs/Web/WebDriver/Reference/Capabilities/proxy)
- [`setWindowRect`](/de/docs/Web/WebDriver/Reference/Capabilities/setWindowRect)
- [`timeouts`](/de/docs/Web/WebDriver/Reference/Capabilities/timeouts)
- [`unhandledPromptBehavior`](/de/docs/Web/WebDriver/Reference/Capabilities/unhandledPromptBehavior)
- [`webSocketUrl`](/de/docs/Web/WebDriver/Reference/Classic/Capabilities/webSocketUrl)

### Anbieter-spezifische Fähigkeiten

Zusätzlich zu den [standardmäßigen Fähigkeiten](#liste_der_fähigkeiten) ermöglicht WebDriver Drittanbietern, das Set an Fähigkeiten zu _erweitern_, um ihren Anforderungen gerecht zu werden. Browseranbieter und Anbieter von Treibern verwenden in der Regel erweiterte Fähigkeiten, um Konfigurationen an den Browser zu übermitteln, sie können jedoch auch von Zwischeninstanzen für beliebige Informationen verwendet werden.

- [Firefox-Fähigkeiten](/de/docs/Web/WebDriver/Reference/Classic/Capabilities/firefoxOptions) (`moz:firefoxOptions`)
- [Chrome-Fähigkeiten](/de/docs/Web/WebDriver/Reference/Capabilities/goog/chromeOptions) (`goog:chromeOptions`)

### Veraltete Fähigkeiten

Die Mehrheit der Selenium-Clients verwendet `desiredCapabilities` und `requiredCapabilities`, um eine neue Sitzung zu konfigurieren. Diese sind den oben beschriebenen `firstMatch` und `alwaysMatch` sehr ähnlich. Einige Treiber unterstützen diese veralteten Fähigkeiten, aber sie sind veraltet und sollten vermieden werden.

Das Konvertieren eines veralteten Fähigkeitenobjekts in den neuen Stil ist einfach. Zuerst müssen Sie wissen, dass `alwaysMatch`/`firstMatch` _immer_ innerhalb eines `capabilities` JSON-Objekts eingeschlossen ist, während `desiredCapabilities`/`requiredCapabilities` auf der obersten Ebene existieren. Generell sollte alles, was zuvor in `desiredCapabilities` eingefügt wurde, in einen `firstMatch`-Zweigarm verschoben werden, um den gleichen Effekt zu erzielen.

Nehmen wir dieses veraltete Fähigkeitenobjekt:

```json
{ "desiredCapabilities": { "browserName": "firefox" } }
```

Dies wäre funktional äquivalent im neuen Stil:

```json
{ "capabilities": { "firstMatch": [{ "browserName": "firefox" }] } }
```

Da es jedoch nur einen `firstMatch`-Zweigarm gibt und wir wissen, dass die Sitzungerstellung fehlschlägt, wenn der Server keinen Firefox installiert hat, ist es auch gleichwertig zu diesem:

```json
{ "capabilities": { "alwaysMatch": { "browserName": "firefox" } } }
```

## Siehe auch

- [Neue Sitzung](/de/docs/Web/WebDriver/Reference/Commands/NewSession) Befehl
- [Sitzung löschen](/de/docs/Web/WebDriver/Reference/Commands/NewSession) Befehl
