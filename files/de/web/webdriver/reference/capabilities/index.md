---
title: WebDriver-Funktionen
short-title: Capabilities
slug: Web/WebDriver/Reference/Capabilities
l10n:
  sourceCommit: fbf733732bf531a1be40a0c646bcbc4b31618476
---

Die klassischen WebDriver-Funktionen werden verwendet, um die von einer [Sitzung](/de/docs/Web/WebDriver) unterstützten Funktionen zu kommunizieren. Ein Client kann auch Funktionen nutzen, um zu definieren, welche Merkmale der Treiber bei der [Erstellung einer neuen Sitzung](/de/docs/Web/WebDriver/Reference/Classic/Commands/NewSession) erfüllen muss.

Wenn eine WebDriver-Sitzung erstellt wird, gibt sie eine Menge von Fähigkeiten zurück, die die ausgehandelten, effektiven Funktionen der Sitzung beschreiben. Einige der in diesem Satz enthaltenen Funktionen sind [standardmäßig und werden von allen Browsern geteilt](#liste_der_funktionen), aber der Satz kann auch [browserspezifische Funktionen](#anbieter-spezifische_funktionen) enthalten, die immer mit einem Präfix versehen sind.

## Aushandlung der Funktionen

Fähigkeiten können verwendet werden, um einen Treiber zu verlangen, der einen bestimmten Satz von Funktionen unterstützt. Dies kann verwendet werden, um bestimmte Browserfunktionen zu verlangen, wie z. B. die [Fähigkeit, die Fensterabmessungen zu ändern](/de/docs/Web/WebDriver/Reference/Classic/Capabilities/setWindowRect), wird aber auch in verteilten Umgebungen genutzt, um eine bestimmte Browserkonfiguration aus einer Matrix von Auswahlmöglichkeiten auszuwählen.

Die Auswahl eines bestimmten Webbrowsers oder einer Plattform ergibt nur Sinn, wenn Sie einen Remote-WebDriver verwenden. In diesem Fall stellt der Client über einen oder mehrere zwischengeschaltete Knoten eine Verbindung zum WebDriver her, die aushandelt, welcher Treiber Ihnen basierend auf den erhaltenen Fähigkeiten zurückgegeben wird.

Das Fähigkeitenobjekt ist ein Auswahlmechanismus, der einschränkt, welche Treiberkonfigurationen der Server zurückgibt. Wenn Sie beispielsweise eine Firefox-Instanz mit `browserName` anfordern und Firefox nicht auf dem Remote installiert ist, oder macOS von einem Remote, das nur Linux unterstützt, haben Sie vielleicht Pech. Aber gelegentlich ist es Ihnen egal, welches spezifische Betriebssystem oder welcher Webbrowser Ihre Sitzung hat: Sie wollen nur eine Sitzung, die eine bestimmte _Fähigkeit_ hat.

Der Auswahlprozess, oder die _Aushandlung der Fähigkeiten_, erfolgt über `alwaysMatch` und `firstMatch`.

### `alwaysMatch`

Wie der Name schon sagt, sind die in dem `alwaysMatch`-Fähigkeitenobjekt beschriebenen Funktionen Merkmale, die die Sitzung _haben muss_. Wenn der Server die von Ihnen angeforderten Funktionen nicht bereitstellen kann, wird dies fehlschlagen.

Wenn Sie zum Beispiel Firefox Version 62 auf einem System anfordern, das nur 60 installiert hat, wird die Sitzungserstellung fehlschlagen:

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

Das `firstMatch`-Feld akzeptiert _ein Array_ von Fähigkeitenobjekten, die der Reihe nach abgeglichen werden, bis eines bereitgestellt wird, was der Server bereitstellen kann, andernfalls wird es fehlschlagen.

Dies kann nützlich sein, wenn Sie einen Treiber möchten, der unter macOS oder Linux läuft, aber nicht unter Windows:

```json
{
  "capabilities": {
    "firstMatch": [{ "platformName": "macos" }, { "platformName": "linux" }]
  }
}
```

### Kombination von `alwaysMatch` und `firstMatch`

`firstMatch` kann natürlich mit `alwaysMatch` kombiniert werden, um die Auswahl einzugrenzen. Wenn Sie zum Beispiel einen Treiber wollen, der unter macOS oder Linux läuft, es _muss_ jedoch Firefox sein:

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

Das vorherige Beispiel entspricht genau dem Setzen der Firefox-Anforderung in jeden `firstMatch`-Zweig:

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

Welche der beiden vorherigen Beispiele Sie wählen, ist nicht wichtig, aber es kann von Bedeutung sein, wenn Sie Browserkonfigurationen weitergeben. Um zu vermeiden, unnötig Daten wie Profile zu wiederholen, ist es ratsam, `alwaysMatch` zu verwenden, damit diese Daten nur einmal übertragen werden:

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

## Liste der Funktionen

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

### Anbieter-spezifische Funktionen

Zusätzlich zu den [Standardfunktionen](#liste_der_funktionen) erlaubt WebDriver Dritten, den Satz an Funktionen zu _erweitern_, um ihre Bedürfnisse abzustimmen. Browseranbieter und Anbieter von Treibern verwenden typischerweise Erweiterungsfunktionen, um Konfigurationen an den Browser zu übermitteln, aber sie können auch von Vermittlern für beliebige Informationsblöcke genutzt werden.

- [Firefox-Funktionen](/de/docs/Web/WebDriver/Reference/Capabilities/firefoxOptions) (`moz:firefoxOptions`)
- [Chrome-Funktionen](/de/docs/Web/WebDriver/Reference/Capabilities/goog/chromeOptions) (`goog:chromeOptions`)

### Veraltete Funktionen

Die Mehrheit der Selenium-Clients verwendet `desiredCapabilities` und `requiredCapabilities`, um die neue Sitzung zu konfigurieren. Diese sind den oben beschriebenen `firstMatch` und `alwaysMatch` sehr ähnlich. Einige Treiber unterstützen diese veralteten Funktionen, aber sie sind veraltet und sollten vermieden werden.

Ein veraltetes Fähigkeitenobjekt in den neuen Stil zu konvertieren ist einfach. Das erste, was Sie wissen müssen, ist, dass `alwaysMatch`/`firstMatch` _immer_ in einem `capabilities` JSON-Objekt gekapselt ist, während `desiredCapabilities`/`requiredCapabilities` auf der obersten Ebene existieren. Generell sollte alles, was bisher in `desiredCapabilities` war, in einen `firstMatch`-Zweig gesetzt werden, um den gleichen Effekt zu erzielen.

Nehmen Sie dieses veraltete Fähigkeitenobjekt:

```json
{ "desiredCapabilities": { "browserName": "firefox" } }
```

Dies wäre funktional gleichwertig im neuen Format:

```json
{ "capabilities": { "firstMatch": [{ "browserName": "firefox" }] } }
```

Aber weil es nur einen `firstMatch`-Zweig gibt und wir wissen, dass die Sitzungserstellung fehlschlägt, wenn der Server kein Firefox installiert hat, ist es ebenfalls gleichwertig mit diesem:

```json
{ "capabilities": { "alwaysMatch": { "browserName": "firefox" } } }
```

## Siehe auch

- [New Session](/de/docs/Web/WebDriver/Reference/Commands/NewSession) Befehl
- [Delete Session](/de/docs/Web/WebDriver/Reference/Commands/NewSession) Befehl
