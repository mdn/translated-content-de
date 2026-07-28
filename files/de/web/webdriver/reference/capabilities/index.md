---
title: WebDriver-Fähigkeiten
short-title: Capabilities
slug: Web/WebDriver/Reference/Capabilities
l10n:
  sourceCommit: d4ed0cee8e7185c5180743e5141096e117b5fa76
---

Die klassischen WebDriver-Fähigkeiten werden verwendet, um die von einer [Sitzung](/de/docs/Web/WebDriver) unterstützten Funktionen zu kommunizieren. Ein Client kann auch Fähigkeiten verwenden, um festzulegen, welche Funktionen der Treiber erfüllen muss, wenn er eine [neue Sitzung erstellt](/de/docs/Web/WebDriver/Reference/Classic/Commands/NewSession).

Wenn eine WebDriver-Sitzung erstellt wird, gibt sie einen Satz von Fähigkeiten zurück, der die ausgehandelten, effektiven Fähigkeiten der Sitzung beschreibt. Einige der in diesem Satz enthaltenen Fähigkeiten sind [standardisiert und werden von allen Browsern gemeinsam genutzt](#liste_von_fähigkeiten), der Satz kann jedoch auch [browser-spezifische Fähigkeiten](#anbieter-spezifische_fähigkeiten) enthalten, die stets mit einem Präfix versehen sind.

## Aushandlung von Fähigkeiten

Fähigkeiten können verwendet werden, um einen Treiber anzufordern, der eine bestimmte Teilmenge von Funktionen unterstützt. Dies kann genutzt werden, um bestimmte Browser-Funktionen zu verlangen, wie etwa die [Fähigkeit, die Fenstergröße anzupassen](/de/docs/Web/WebDriver/Reference/Classic/Capabilities/setWindowRect), wird aber auch in verteilten Umgebungen verwendet, um eine bestimmte Browser-Konfiguration aus einer Vielzahl von Optionen auszuwählen.

Die Auswahl eines bestimmten Webbrowsers oder einer Plattform ergibt nur Sinn, wenn Sie einen Remote-WebDriver verwenden. In diesem Fall nimmt der Client Kontakt mit WebDriver über einen oder mehrere Zwischenknoten auf, die aushandeln, welchen Treiber Sie basierend auf den empfangenen Fähigkeiten erhalten.

Das Fähigkeitenobjekt ist ein Auswahlmechanismus, der einschränkt, welche Treiberkonfigurationen der Server zurückgibt. Wenn Sie ein Firefox-Exemplar mit `browserName` anfordern und Firefox nicht auf dem Remote installiert ist, oder macOS von einem Remote, das nur Linux unterstützt, haben Sie möglicherweise Pech. Aber gelegentlich ist es Ihnen vielleicht egal, welches spezifische Betriebssystem oder welcher Webbrowser Ihre Sitzung hat: Sie wollen einfach nur eine Sitzung, die eine bestimmte _Fähigkeit_ hat.

Der Auswahlprozess, oder die _Aushandlung von Fähigkeiten_, erfolgt über `alwaysMatch` und `firstMatch`.

### `alwaysMatch`

Wie der Name schon sagt, sind die im `alwaysMatch`-Fähigkeitenobjekt beschriebenen Fähigkeiten Funktionen, die die Sitzung _erforderlich_ haben muss. Wenn der Server die von Ihnen geforderten Funktionen nicht bereitstellen kann, wird er scheitern.

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

Das `firstMatch`-Feld akzeptiert _ein Array_ von Fähigkeitenobjekten, die nacheinander abgeglichen werden, bis eines gefunden wird, das der Server bereitstellen kann, andernfalls wird es fehlschlagen.

Dies kann nützlich sein, wenn Sie einen Treiber möchten, der auf macOS oder Linux, aber nicht auf Windows läuft:

```json
{
  "capabilities": {
    "firstMatch": [{ "platformName": "macos" }, { "platformName": "linux" }]
  }
}
```

### Kombination von `alwaysMatch` und `firstMatch`

`firstMatch` kann natürlich mit `alwaysMatch` kombiniert werden, um die Auswahl einzugrenzen. Wenn Sie zum Beispiel einen Treiber möchten, der auf macOS oder Linux läuft, aber _unbedingt_ Firefox sein muss:

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

Das vorherige Beispiel entspricht genau dem, dass die Firefox-Anforderung in jedem `firstMatch`-Zweig platziert wird:

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

Welche der beiden vorherigen Beispiele Sie wählen, ist nicht wichtig, aber es kann von Bedeutung sein, wenn Sie Browser-Konfigurationen weitergeben. Um zu vermeiden, Daten wie Profile unnötigerweise zu wiederholen, ist es ratsam, `alwaysMatch` zu verwenden, sodass diese Daten nur einmal übertragen werden:

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

## Liste von Fähigkeiten

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

Zusätzlich zu den [Standardfähigkeiten](#liste_von_fähigkeiten) ermöglicht WebDriver Drittanbietern, den Satz von Fähigkeiten zu _erweitern_, um ihre Bedürfnisse anzupassen. Browserhersteller und Lieferanten von Treibern nutzen in der Regel Erweiterungsfähigkeiten, um Konfigurationen für den Browser bereitzustellen, aber sie können auch von Zwischenstellen für willkürliche Datenblöcke verwendet werden.

- [Firefox Fähigkeiten](/de/docs/Web/WebDriver/Reference/Capabilities/firefoxOptions) (`moz:firefoxOptions`)
- [Chrome Fähigkeiten](/de/docs/Web/WebDriver/Reference/Capabilities/goog/chromeOptions) (`goog:chromeOptions`)

### Legacy-Fähigkeiten

Die Mehrheit der Selenium-Clients verwendet `desiredCapabilities` und `requiredCapabilities`, um die neue Sitzung zu konfigurieren. Diese sind sehr ähnlich zu den oben beschriebenen `firstMatch` und `alwaysMatch`. Einige Treiber unterstützen diese Legacy-Fähigkeiten, aber sie sind veraltet und sollten vermieden werden.

Ein Legacy-Fähigkeitenobjekt in den neuen Stil umzuwandeln ist einfach. Das erste, was Sie wissen müssen, ist, dass `alwaysMatch`/`firstMatch` _immer_ in ein `capabilities` JSON-Objekt eingebettet ist, während `desiredCapabilities`/`requiredCapabilities` auf der obersten Ebene existiert. Im Allgemeinen sollte alles, was vorher in `desiredCapabilities` ging, in einen `firstMatch`-Zweig gebracht werden, um den gleichen Effekt zu erzielen.

Nehmen Sie dieses veraltete Fähigkeitenobjekt:

```json
{ "desiredCapabilities": { "browserName": "firefox" } }
```

Dies wäre funktional äquivalent im neuen Stil:

```json
{ "capabilities": { "firstMatch": [{ "browserName": "firefox" }] } }
```

Aber da es nur einen `firstMatch`-Zweig gibt und wir wissen, dass die Sitzungserstellung fehlschlagen wird, wenn der Server kein Firefox installiert hat, ist es auch gleichbedeutend mit diesem:

```json
{ "capabilities": { "alwaysMatch": { "browserName": "firefox" } } }
```

## Siehe auch

- [Neue Sitzung](/de/docs/Web/WebDriver/Reference/Classic/Commands/NewSession) Befehl
- [Sitzung löschen](/de/docs/Web/WebDriver/Reference/Classic/Commands/DeleteSession) Befehl
