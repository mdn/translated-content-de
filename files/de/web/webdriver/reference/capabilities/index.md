---
title: WebDriver-Fähigkeiten
short-title: Capabilities
slug: Web/WebDriver/Reference/Capabilities
l10n:
  sourceCommit: fb6aa6056407ba69d96da0fe140a1ae2320f0fb2
---

WebDriver Classic-Fähigkeiten werden verwendet, um die von einer [Sitzung](/de/docs/Web/WebDriver) unterstützten Funktionen zu kommunizieren. Ein Client kann auch Fähigkeiten verwenden, um festzulegen, welche Funktionen der Treiber beim [Erstellen einer neuen Sitzung](/de/docs/Web/WebDriver/Reference/Classic/Commands/NewSession) erfüllen muss.

Wenn eine WebDriver-Sitzung erstellt wird, gibt sie eine Reihe von Fähigkeiten zurück, die die verhandelten, effektiven Fähigkeiten der Sitzung beschreiben. Einige der in diesem Satz enthaltenen Fähigkeiten sind [standardisiert und werden von allen Browsern geteilt](#liste_der_fähigkeiten), aber der Satz kann auch [browser-spezifische Fähigkeiten](#anbieter-spezifische_fähigkeiten) enthalten, die immer ein Präfix haben.

## Fähigkeiten-Verhandlung

Fähigkeiten können verwendet werden, um einen Treiber zu benötigen, der eine bestimmte Teilmenge von Funktionen unterstützt. Dies kann verwendet werden, um bestimmte Browser-Funktionen zu erfordern, wie zum Beispiel die [Fähigkeit, die Fensterausmaße zu ändern](/de/docs/Web/WebDriver/Reference/Classic/Capabilities/setWindowRect), wird aber auch in verteilten Umgebungen genutzt, um aus einer Auswahlmatrix eine bestimmte Browser-Konfiguration zu wählen.

Die Auswahl eines bestimmten Webbrowsers oder einer Plattform ergibt nur Sinn, wenn Sie einen Remote-WebDriver verwenden. In diesem Fall nimmt der Client Kontakt mit WebDriver über einen oder mehrere Vermittlungsknoten auf, die verhandeln, welchen Treiber sie Ihnen basierend auf den empfangenen Fähigkeiten zurückgeben.

Das Fähigkeiten-Objekt ist ein Auswahlmechanismus, der einschränkt, welche Treiberkonfigurationen der Server zurückgeben wird. Wenn Sie eine Firefox-Instanz mit `browserName` anfordern und Firefox nicht auf dem Remote installiert ist, oder macOS von einem Remote, das nur Linux unterstützt, haben Sie möglicherweise kein Glück. Aber gelegentlich ist es Ihnen egal, welches spezifische Betriebssystem oder welcher Webbrowser Ihre Sitzung hat: Sie möchten einfach eine Sitzung, die eine bestimmte _Fähigkeit_ hat.

Der Auswahlprozess oder die _Fähigkeiten-Verhandlung_ erfolgt über `alwaysMatch` und `firstMatch`.

### `alwaysMatch`

Wie der Name schon sagt, sind die in dem `alwaysMatch`-Fähigkeiten-Objekt beschriebenen Fähigkeiten Funktionen, die Sie _erfordern_, dass die Sitzung diese hat. Wenn der Server die von Ihnen geforderten Funktionen nicht bereitstellen kann, wird es fehlschlagen.

Wenn Sie zum Beispiel Firefox Version 62 auf einem System anfordern, auf dem nur Version 60 installiert ist, wird die Sitzungserstellung fehlschlagen:

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

Das `firstMatch`-Feld akzeptiert ein _Array_ von Fähigkeiten-Objekten, die nacheinander abgeglichen werden, bis eines mit dem übereinstimmt, was der Server bereitstellen kann, oder es wird fehlschlagen.

Dies kann nützlich sein, wenn Sie einen Treiber möchten, der auf macOS oder Linux, aber nicht auf Windows läuft:

```json
{
  "capabilities": {
    "firstMatch": [{ "platformName": "macos" }, { "platformName": "linux" }]
  }
}
```

### Kombination von `alwaysMatch` und `firstMatch`

`firstMatch` kann selbstverständlich mit `alwaysMatch` kombiniert werden, um die Auswahl einzugrenzen. Wenn Sie zum Beispiel einen Treiber möchten, der auf macOS oder Linux läuft, aber es _muss_ Firefox sein:

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

Das vorherige Beispiel ist genau gleichbedeutend damit, die Firefox-Anforderung in jedem `firstMatch`-Zweig zu setzen:

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

Welche der beiden vorhergehenden Beispiele Sie wählen, ist nicht wichtig, aber es kann von Bedeutung sein, wenn Sie Browser-Konfigurationen übergeben. Um zu vermeiden, dass Daten unnötig wiederholt werden, wie z.B. Profile, ist es ratsam, `alwaysMatch` zu verwenden, so dass diese Daten nur einmal über die Leitung übertragen werden:

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

Zusätzlich zu den [Standardfähigkeiten](#liste_der_fähigkeiten) erlaubt WebDriver Dritten, den Satz von Fähigkeiten zu _erweitern_, um ihren Bedürfnissen gerecht zu werden. Browserhersteller und Anbieter von Treibern verwenden in der Regel Erweiterungsfähigkeiten, um Konfigurationen an den Browser zu übermitteln, aber sie können auch von Vermittlern für beliebige Informationsblöcke verwendet werden.

- [Firefox-Fähigkeiten](/de/docs/Web/WebDriver/Reference/Capabilities/firefoxOptions) (`moz:firefoxOptions`)
- [Chrome-Fähigkeiten](/de/docs/Web/WebDriver/Reference/Capabilities/goog/chromeOptions) (`goog:chromeOptions`)

### Legacy-Fähigkeiten

Die Mehrheit der Selenium-Clients verwendet `desiredCapabilities` und `requiredCapabilities` zur Konfiguration der neuen Sitzung. Diese sind den oben beschriebenen `firstMatch` und `alwaysMatch` sehr ähnlich. Einige Treiber unterstützen diese Legacy-Fähigkeiten, aber sie sind veraltet und sollten vermieden werden.

Das Umwandeln eines Legacy-Fähigkeiten-Objekts in den neuen Stil ist einfach. Das Wichtigste ist, dass `alwaysMatch`/`firstMatch` _immer_ innerhalb eines `capabilities` JSON-Objekts eingeschlossen wird, während `desiredCapabilities`/`requiredCapabilities` auf der obersten Ebene existieren. Generell gilt, dass alles, was zuvor in `desiredCapabilities` stand, in einen `firstMatch`-Zweig eingefügt werden sollte, um denselben Effekt zu erzielen.

Sehen Sie sich dieses veraltete Fähigkeiten-Objekt an:

```json
{ "desiredCapabilities": { "browserName": "firefox" } }
```

Dies wäre im neuen Stil funktional gleichwertig:

```json
{ "capabilities": { "firstMatch": [{ "browserName": "firefox" }] } }
```

Weil es nur einen `firstMatch`-Zweig gibt und wir wissen, dass die Sitzungserstellung fehlschlagen wird, wenn der Server keinen installierten Firefox hat, ist es auch gleichwertig mit diesem:

```json
{ "capabilities": { "alwaysMatch": { "browserName": "firefox" } } }
```

## Siehe auch

- [New Session](/de/docs/Web/WebDriver/Reference/Classic/Commands/NewSession) Befehl
- [Session löschen](/de/docs/Web/WebDriver/Reference/Classic/Commands/NewSession) Befehl
