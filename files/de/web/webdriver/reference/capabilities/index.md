---
title: WebDriver-Fähigkeiten
short-title: Capabilities
slug: Web/WebDriver/Reference/Capabilities
l10n:
  sourceCommit: c9f3d85f24d7839c9fe36a68d8042d088d906147
---

WebDriver-klassische Fähigkeiten werden verwendet, um die von einer [Sitzung](/de/docs/Web/WebDriver) unterstützten Funktionen zu kommunizieren. Ein Client kann auch Fähigkeiten verwenden, um zu definieren, welche Funktionen der Treiber erfüllen muss, wenn eine [neue Sitzung erstellt wird](/de/docs/Web/WebDriver/Reference/Classic/Commands/NewSession).

Wenn eine WebDriver-Sitzung erstellt wird, gibt sie eine Reihe von Fähigkeiten zurück, die die ausgehandelten, effektiven Fähigkeiten der Sitzung beschreiben. Einige der in diesem Satz enthaltenen Fähigkeiten sind [standardisiert und werden von allen Browsern geteilt](#liste_der_fähigkeiten), aber der Satz kann auch [browserspezifische Fähigkeiten](#anbieter-spezifische_fähigkeiten) enthalten, die immer mit einem Präfix versehen sind.

## Fähigkeitsverhandlung

Fähigkeiten können verwendet werden, um einen Treiber zu verlangen, der einen bestimmten Funktionsumfang unterstützt. Dies kann verwendet werden, um bestimmte Browserfunktionen zu verlangen, wie z.B. die [Möglichkeit, die Fenstergröße zu ändern](/de/docs/Web/WebDriver/Reference/Classic/Capabilities/setWindowRect), wird aber auch in verteilten Umgebungen genutzt, um eine bestimmte Browserkonfiguration aus einer Matrix von Optionen auszuwählen.

Die Auswahl eines bestimmten Webbrowsers oder einer Plattform ergibt nur Sinn, wenn Sie einen Remote-WebDriver verwenden. In diesem Fall stellt der Client über einen oder mehrere Zwischenknoten Kontakt mit WebDriver her, die verhandeln, welchen Treiber Sie basierend auf den empfangenen Fähigkeiten zurückerhalten sollen.

Das Fähigkeiten-Objekt ist ein Auswahlmechanismus, der einschränkt, welche Treiberkonfigurationen der Server zurückgibt. Wenn Sie eine Firefox-Instanz mit `browserName` anfordern und Firefox nicht auf dem Remote installiert ist oder macOS von einem Remote, das nur Linux unterstützt, können Sie Pech haben. Aber gelegentlich könnte es Ihnen egal sein, welches spezifische Betriebssystem oder welcher Webbrowser Ihre Sitzung hat: Sie möchten einfach nur eine Sitzung, die eine gewisse _Fähigkeit_ hat.

Der Auswahlprozess oder die _Fähigkeitsverhandlung_ erfolgt über `alwaysMatch` und `firstMatch`.

### `alwaysMatch`

Wie der Name schon sagt, sind die in dem `alwaysMatch`-Fähigkeiten-Objekt beschriebenen Fähigkeiten solche, die Sie _erfordern_, dass die Sitzung sie hat. Wenn der Server die von Ihnen geforderten Funktionen nicht bereitstellen kann, schlägt die Sitzungserstellung fehl.

Wenn Sie beispielsweise Firefox-Version 62 auf einem System anfordern, das nur 60 installiert hat, schlägt die Sitzungserstellung fehl:

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

Das `firstMatch`-Feld akzeptiert _ein Array_ von Fähigkeitsobjekten, die der Reihe nach abgeglichen werden, bis eines gefunden wird, das der Server bereitstellen kann, oder es wird fehlschlagen.

Dies kann nützlich sein, wenn Sie einen Treiber auf macOS oder Linux, aber nicht auf Windows wünschen:

```json
{
  "capabilities": {
    "firstMatch": [{ "platformName": "macos" }, { "platformName": "linux" }]
  }
}
```

### Kombination von `alwaysMatch` und `firstMatch`

`firstMatch` kann natürlich mit `alwaysMatch` kombiniert werden, um die Auswahl einzugrenzen. Wenn Sie beispielsweise einen Treiber wünschen, der unter macOS oder Linux läuft, aber _es muss_ Firefox sein:

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

Das vorherige Beispiel ist genau gleichbedeutend damit, das Firefox-Erfordernis in jedem `firstMatch`-Arm zu setzen:

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

Welche der beiden vorhergehenden Beispiele Sie wählen, ist nicht wichtig, aber es kann eine Rolle spielen, wenn Sie Browserkonfigurationen weitergeben. Um zu vermeiden, dass Daten unnötig wiederholt werden, wie z.B. Profile, ist es ratsam, `alwaysMatch` zu verwenden, sodass diese Daten nur einmal über das Netzwerk übertragen werden:

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

Zusätzlich zu den [Standardfähigkeiten](#liste_der_fähigkeiten) erlaubt WebDriver Dritten, den Satz von Fähigkeiten ihren Bedürfnissen entsprechend _zu erweitern_. Browserhersteller und Treiberanbieter verwenden in der Regel Erweiterungsfähigkeiten, um Konfigurationen an den Browser zu übermitteln, sie können aber auch von Zwischenstellen für beliebige Informationsblöcke genutzt werden.

- [Firefox-Fähigkeiten](/de/docs/Web/WebDriver/Reference/Capabilities/firefoxOptions) (`moz:firefoxOptions`)
- [Chrome-Fähigkeiten](/de/docs/Web/WebDriver/Reference/Capabilities/goog/chromeOptions) (`goog:chromeOptions`)

### Veraltete Fähigkeiten

Die Mehrheit der Selenium-Clients verwendet `desiredCapabilities` und `requiredCapabilities`, um die neue Sitzung zu konfigurieren. Diese sind den oben beschriebenen `firstMatch` und `alwaysMatch` sehr ähnlich. Einige Treiber unterstützen diese veralteten Fähigkeiten, aber sie sind nicht mehr aktuell und sollten vermieden werden.

Die Umwandlung eines veralteten Fähigkeitenobjekts in den neuen Stil ist einfach. Das erste, was Sie wissen müssen, ist, dass `alwaysMatch`/`firstMatch` _immer_ innerhalb eines `capabilities` JSON-Objekts eingehüllt ist, während `desiredCapabilities`/`requiredCapabilities` auf der obersten Ebene existieren. Im Allgemeinen sollte alles, was zuvor in `desiredCapabilities` enthalten war, in einen `firstMatch`-Zweigarm gehen, um denselben Effekt zu erzielen.

Nehmen Sie dieses veraltete Fähigkeitenobjekt:

```json
{ "desiredCapabilities": { "browserName": "firefox" } }
```

Dies wäre im neuen Stil funktional äquivalent:

```json
{ "capabilities": { "firstMatch": [{ "browserName": "firefox" }] } }
```

Aber da es nur einen `firstMatch`-Arm gibt und wir wissen, dass die Sitzungserstellung fehlschlagen wird, wenn der Server keinen Firefox installiert hat, ist es auch äquivalent zu diesem:

```json
{ "capabilities": { "alwaysMatch": { "browserName": "firefox" } } }
```

## Siehe auch

- [Neue Sitzung](/de/docs/Web/WebDriver/Reference/Classic/Commands/NewSession) Befehl
- [Sitzung löschen](/de/docs/Web/WebDriver/Reference/Classic/Commands/DeleteSession) Befehl
