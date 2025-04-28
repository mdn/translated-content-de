---
title: WebDriver-Funktionen
short-title: Capabilities
slug: Web/WebDriver/Reference/Capabilities
l10n:
  sourceCommit: c6cab7f1aa7dc9f3495486a5b46020db320101cf
---

WebDriver **_Fähigkeiten_** werden verwendet, um die von einer [Sitzung](/de/docs/Web/WebDriver) unterstützten Funktionen zu kommunizieren. Ein Client kann auch Fähigkeiten nutzen, um zu definieren, welche Funktionen der Treiber erfüllen muss, wenn eine [neue Sitzung erstellt wird](/de/docs/Web/WebDriver/Reference/Commands/NewSession).

Wenn eine WebDriver-Sitzung erstellt wird, gibt sie eine Reihe von Fähigkeiten zurück, die die ausgehandelten und effektiven Fähigkeiten der Sitzung beschreiben. Einige der in diesem Satz enthaltenen Fähigkeiten sind [standardisiert und werden von allen Browsern geteilt](#liste_der_fähigkeiten), aber der Satz kann auch [browserspezifische Fähigkeiten](#browserspezifische_fähigkeiten) enthalten, die immer ein Präfix haben.

## Aushandlung der Fähigkeiten

Fähigkeiten können verwendet werden, um einen Treiber anzufordern, der einen bestimmten Satz von Funktionen unterstützt. Dies kann verwendet werden, um bestimmte Browserfunktionen wie die [Fähigkeit zum Ändern der Fensterausmaße](/de/docs/Web/WebDriver/Reference/Capabilities/setWindowRect) anzufordern, wird aber auch in verteilten Umgebungen verwendet, um eine bestimmte Browserkonfiguration aus einer Matrix von Auswahlmöglichkeiten auszuwählen.

Die Auswahl eines bestimmten Webbrowsers oder einer Plattform macht nur Sinn, wenn Sie einen Remote-WebDriver verwenden. In diesem Fall nimmt der Client über ein oder mehrere Zwischenknoten Kontakt mit dem WebDriver auf, die aushandeln, welchen Treiber sie Ihnen basierend auf den empfangenen Fähigkeiten zurückgeben.

Das Fähigkeiten-Objekt ist ein Auswahlmechanismus, der begrenzt, welche Treiberkonfigurationen der Server zurückgeben wird. Wenn Sie beispielsweise eine Firefox-Instanz mit `browserName` anfordern und Firefox nicht auf dem Remote installiert ist oder macOS von einem Remote, das nur Linux unterstützt, haben Sie möglicherweise Pech. Aber gelegentlich ist es Ihnen egal, welches Betriebssystem oder welchen Webbrowser Ihre Sitzung hat: Sie möchten einfach eine Sitzung, die über eine bestimmte _Fähigkeit_ verfügt.

Der Auswahlprozess oder die _Aushandlung der Fähigkeiten_ erfolgt durch `alwaysMatch` und `firstMatch`.

### `alwaysMatch`

Wie der Name schon sagt, sind Fähigkeiten, die innerhalb des `alwaysMatch`-Fähigkeiten-Objekts beschrieben werden, Funktionen, die Sie _erfordern_, dass die Sitzung sie hat. Wenn der Server nicht in der Lage ist, die von Ihnen angeforderten Funktionen bereitzustellen, wird er scheitern.

Wenn Sie beispielsweise Firefox Version 62 auf einem System anfordern, das nur 60 installiert hat, wird die Sitzungserstellung fehlschlagen:

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

Das `firstMatch`-Feld akzeptiert _ein Array_ von Fähigkeiten-Objekten, das nacheinander abgeglichen wird, bis eines mit dem übereinstimmt, was der Server bereitstellen kann, oder es wird fehlschlagen.

Dies kann nützlich sein, wenn Sie einen Treiber möchten, der unter macOS oder Linux ausgeführt wird, aber nicht unter Windows:

```json
{
  "capabilities": {
    "firstMatch": [{ "platformName": "macos" }, { "platformName": "linux" }]
  }
}
```

### Kombination von `alwaysMatch` und `firstMatch`

`firstMatch` kann natürlich mit `alwaysMatch` kombiniert werden, um die Auswahl einzugrenzen. Wenn Sie beispielsweise einen Treiber wünschen, der unter macOS oder Linux läuft, aber es _muss_ Firefox sein:

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

Das vorherige Beispiel ist genau gleichwertig damit, die Firefox-Anforderung in jedem `firstMatch`-Arm zu setzen:

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

Welche der beiden vorhergehenden Beispiele Sie wählen, ist nicht wichtig, aber es kann von Bedeutung sein, wenn Sie Browserkonfigurationen weitergeben. Um zu vermeiden, dass Daten unnötig wiederholt werden, wie z. B. Profile, ist es ratsam, `alwaysMatch` zu verwenden, damit diese Daten nur einmal über die Leitung übertragen werden:

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
- [`acceptInsecureCerts`](/de/docs/Web/WebDriver/Reference/Capabilities/acceptInsecureCerts): Diese Fähigkeit kommuniziert, ob abgelaufene oder ungültige {{Glossary("TLS", "TLS-Zertifikate")}} beim [Navigieren](/de/docs/Web/WebDriver/Reference/Commands/NavigateTo) überprüft werden. Wenn die Fähigkeit falsch ist, wird ein [unsicheres Zertifikat](/de/docs/Web/WebDriver/Reference/Errors/InsecureCertificate) Fehler zurückgegeben, wenn die Navigation auf Domains mit Zertifikatproblemen stößt. Andernfalls werden selbstsignierte oder anderweitig ungültige Zertifikate implizit vom Browser beim Navigieren vertraut. Die Fähigkeit hat Wirkung für die Dauer der Sitzung.
- [`pageLoadStrategy`](/de/docs/Web/WebDriver/Reference/Capabilities/pageLoadStrategy)
- [`proxy`](/de/docs/Web/WebDriver/Reference/Capabilities/proxy)
- [`setWindowRect`](/de/docs/Web/WebDriver/Reference/Capabilities/setWindowRect)
- [`timeouts`](/de/docs/Web/WebDriver/Reference/Capabilities/timeouts)
- [`unhandledPromptBehavior`](/de/docs/Web/WebDriver/Reference/Capabilities/unhandledPromptBehavior)
- [`webSocketUrl`](/de/docs/Web/WebDriver/Reference/Capabilities/webSocketUrl)

## Browserspezifische Fähigkeiten

Zusätzlich zu den [Standardfähigkeiten](#liste_der_fähigkeiten) ermöglicht WebDriver dritten Parteien, die Menge der Fähigkeiten zu _erweitern_, um ihren Bedürfnissen gerecht zu werden. Browser-Anbieter und Lieferanten von Treibern verwenden typischerweise Erweiterungsfähigkeiten, um die Konfiguration des Browsers bereitzustellen, aber sie können auch von Zwischenstellen für beliebige Informationsbrocken verwendet werden.

- [Firefox-Fähigkeiten](/de/docs/Web/WebDriver/Reference/Capabilities/firefoxOptions) (`moz:firefoxOptions`)
- [Chrome-Fähigkeiten](/de/docs/Web/WebDriver/Reference/Capabilities/goog/chromeOptions) (`goog:chromeOptions`)

## Legacy-Fähigkeiten

Die Mehrheit der Selenium-Clients verwendet `desiredCapabilities` und `requiredCapabilities`, um die neue Sitzung zu konfigurieren. Diese sind den oben beschriebenen `firstMatch` und `alwaysMatch` sehr ähnlich. Einige Treiber unterstützen diese veralteten Fähigkeiten, aber sie sind veraltet und sollten vermieden werden.

Das Konvertieren eines veralteten Fähigkeiten-Objekts in den neuen Stil ist einfach. Das Erste, was Sie wissen müssen, ist, dass `alwaysMatch`/`firstMatch` _immer_ innerhalb eines `capabilities`-JSON-Objekts eingewickelt ist, während `desiredCapabilities`/`requiredCapabilities` auf oberster Ebene existieren. Allgemein gesagt, sollte alles, was zuvor in `desiredCapabilities` ging, in einen `firstMatch`-Zweigarm verschoben werden, um denselben Effekt zu erzielen.

Nehmen Sie dieses veraltete Fähigkeiten-Objekt:

```json
{ "desiredCapabilities": { "browserName": "firefox" } }
```

Dieses wäre im neuen Stil funktional gleichwertig:

```json
{ "capabilities": { "firstMatch": [{ "browserName": "firefox" }] } }
```

Aber da es nur einen `firstMatch`-Arm gibt und wir wissen, dass die Sitzungserstellung fehlschlagen wird, wenn der Server keinen Firefox installiert hat, ist es auch gleichwertig mit diesem:

```json
{ "capabilities": { "alwaysMatch": { "browserName": "firefox" } } }
```

## Siehe auch

- Befehl [Neue Sitzung](/de/docs/Web/WebDriver/Reference/Commands/NewSession)
- Befehl [Sitzung löschen](/de/docs/Web/WebDriver/Reference/Commands/NewSession)
