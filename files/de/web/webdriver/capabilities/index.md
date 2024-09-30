---
title: Capabilities
slug: Web/WebDriver/Capabilities
l10n:
  sourceCommit: c640274a19227cd5790912ea76841732baa6731f
---

{{QuickLinksWithSubpages("/de/docs/Web/WebDriver")}}

WebDriver **_capabilities_** werden verwendet, um die von einer [Sitzung](/de/docs/Web/WebDriver) unterstützten Funktionen zu kommunizieren. Ein Client kann auch Fähigkeiten nutzen, um festzulegen, welche Funktionen der Treiber beim [Erstellen einer neuen Sitzung](/de/docs/Web/WebDriver/Commands/NewSession) erfüllen muss.

Wenn eine WebDriver-Sitzung erstellt wird, liefert sie eine Menge von Fähigkeiten zurück, die die ausgehandelten, effektiven Fähigkeiten der Sitzung beschreiben. Einige der in diesem Satz enthaltenen Fähigkeiten sind [standardisiert und von allen Browsern geteilt](#liste_der_fähigkeiten), aber der Satz kann auch [browser-spezifische Fähigkeiten](#vendor-spezifische_fähigkeiten) enthalten, die immer mit einem Präfix versehen sind.

## Aushandlung von Fähigkeiten

Fähigkeiten können verwendet werden, um einen Treiber zu verlangen, der einen bestimmten Funktionsumfang unterstützt. Dies kann dazu dienen, bestimmte Browserfunktionen zu verlangen, wie die [Fähigkeit, die Fensterausmaße zu ändern](/de/docs/Web/WebDriver/Capabilities/setWindowRect), wird aber auch in verteilten Umgebungen genutzt, um eine bestimmte Browserkonfiguration aus einer Auswahlmatrix auszuwählen.

Die Auswahl eines bestimmten Webbrowsers oder einer Plattform macht nur Sinn, wenn Sie einen Remote-WebDriver verwenden. In diesem Fall tritt der Client über einen oder mehrere Zwischenknoten mit WebDriver in Kontakt, der anhand der empfangenen Fähigkeiten aushandelt, welchen Treiber er Ihnen zurückgibt.

Das Fähigkeitenobjekt ist ein Selektionsmechanismus, der einschränkt, welche Treiberkonfigurationen der Server zurückgeben wird. Wenn Sie eine Firefox-Instanz mit `browserName` anfordern und Firefox nicht auf dem Remote-Host installiert ist, oder macOS von einem Remote-Host, der nur Linux unterstützt, haben Sie möglicherweise kein Glück. Aber manchmal ist es Ihnen möglicherweise egal, welches spezifische Betriebssystem oder welcher Webbrowser Ihre Sitzung hat: Sie möchten einfach nur eine Sitzung, die eine bestimmte _Fähigkeit_ hat.

Der Auswahlprozess, oder die _Aushandlung von Fähigkeiten_, erfolgt durch `alwaysMatch` und `firstMatch`.

### `alwaysMatch`

Wie der Name schon sagt, sind die im `alwaysMatch`-Fähigkeitenobjekt beschriebenen Fähigkeiten Funktionen, die Sie _erwarten_, dass die Sitzung sie hat. Wenn der Server nicht bereitstellen kann, was Sie benötigen, wird er fehlschlagen.

Wenn Sie beispielsweise Version 62 von Firefox auf einem System anfordern, das nur 60 installiert hat, schlägt die Sitzungserstellung fehl:

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

Das Feld `firstMatch` akzeptiert _ein Array_ von Fähigkeitenobjekten, die nacheinander abgeglichen werden, bis eines mit dem übereinstimmt, was der Server bereitstellen kann, oder es schlägt fehl.

Dies kann nützlich sein, wenn Sie einen Treiber möchten, der auf macOS oder Linux, aber nicht auf Windows läuft:

```json
{
  "capabilities": {
    "firstMatch": [{ "platformName": "macos" }, { "platformName": "linux" }]
  }
}
```

### Kombination von `alwaysMatch` und `firstMatch`

`firstMatch` kann natürlich mit `alwaysMatch` kombiniert werden, um die Auswahl einzuschränken. Wenn Sie zum Beispiel einen Treiber möchten, der auf macOS oder Linux läuft, es _muss_ jedoch Firefox sein:

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

Das vorherige Beispiel ist genau gleichbedeutend damit, die Firefox-Anforderung in jeden `firstMatch`-Zweig zu setzen:

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

Welche der beiden vorhergehenden Beispiele Sie wählen, ist nicht wichtig, aber es kann von Bedeutung sein, wenn Sie Browserkonfiguration übergeben. Um zu vermeiden, dass Daten wie Profile unnötig wiederholt werden, ist es ratsam, `alwaysMatch` zu verwenden, sodass diese Daten nur einmal über das Netzwerk übertragen werden:

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

- [`browserName`](/de/docs/Web/WebDriver/Capabilities/browserName)
- [`browserVersion`](/de/docs/Web/WebDriver/Capabilities/browserVersion)
- [`platformName`](/de/docs/Web/WebDriver/Capabilities/platformName)
- [`acceptInsecureCerts`](/de/docs/Web/WebDriver/Capabilities/acceptInsecureCerts): Diese Fähigkeit kommuniziert, ob abgelaufene oder ungültige [TLS-Zertifikate](/de/docs/Glossary/TLS) beim [Navigieren](/de/docs/Web/WebDriver/Commands/NavigateTo) überprüft werden. Wenn die Fähigkeit falsch ist, wird ein [ungültiges Zertifikat](/de/docs/Web/WebDriver/Errors/InsecureCertificate) Fehler zurückgegeben, wenn die Navigation auf Domains mit Zertifikatsproblemen trifft. Andernfalls werden selbstsignierte oder anderweitig ungültige Zertifikate vom Browser bei der Navigation implizit akzeptiert. Die Fähigkeit hat Wirkung während der gesamten Sitzung.
- [`pageLoadStrategy`](/de/docs/Web/WebDriver/Capabilities/pageLoadStrategy)
- [`proxy`](/de/docs/Web/WebDriver/Capabilities/proxy)
- [`setWindowRect`](/de/docs/Web/WebDriver/Capabilities/setWindowRect)
- [`timeouts`](/de/docs/Web/WebDriver/Capabilities/timeouts)
- [`unhandledPromptBehavior`](/de/docs/Web/WebDriver/Capabilities/unhandledPromptBehavior)
- [`webSocketUrl`](/de/docs/Web/WebDriver/Capabilities/webSocketUrl)

## Vendor-spezifische Fähigkeiten

Zusätzlich zu den [standardisierten Fähigkeiten](#liste_der_fähigkeiten) erlaubt WebDriver Dritten, den Satz der Fähigkeiten zu _erweitern_, um ihren Anforderungen gerecht zu werden. Browserhersteller und Anbieter von Treibern verwenden Erweiterungsfähigkeiten typischerweise, um Konfigurationen an den Browser zu übergeben, sie können jedoch auch von Zwischenstellen für beliebige Informationsblöcke verwendet werden.

- [Firefox-Fähigkeiten](/de/docs/Web/WebDriver/Capabilities/firefoxOptions) (`moz:firefoxOptions`)
- [Chrome-Fähigkeiten](/de/docs/Web/WebDriver/Capabilities/goog/chromeOptions) (`goog:chromeOptions`)

## Legacy-Fähigkeiten

Die Mehrheit der Selenium-Clients verwendet `desiredCapabilities` und `requiredCapabilities` zur Konfiguration der neuen Sitzung. Diese sind den oben beschriebenen `firstMatch` und `alwaysMatch` sehr ähnlich. Einige Treiber unterstützen diese veralteten Fähigkeiten, sie sind jedoch veraltet und sollten vermieden werden.

Die Umwandlung eines veralteten Fähigkeitenobjekts in das neue Format ist einfach. Das Erste, was Sie wissen müssen, ist, dass `alwaysMatch`/`firstMatch` _immer_ in ein `capabilities` JSON-Objekt eingebettet ist, während `desiredCapabilities`/`requiredCapabilities` auf oberster Ebene existieren. Allgemein gesprochen sollte alles, was zuvor in `desiredCapabilities` enthalten war, in einen `firstMatch`-Zweigarm gehen, um denselben Effekt zu erzielen.

Nehmen Sie dieses veraltete Fähigkeitenobjekt:

```json
{ "desiredCapabilities": { "browserName": "firefox" } }
```

Dies wäre im neuen Stil funktional gleichwertig:

```json
{ "capabilities": { "firstMatch": [{ "browserName": "firefox" }] } }
```

Aber da es nur einen `firstMatch`-Zweigarm gibt und wir wissen, dass die Sitzungserstellung fehlschlagen wird, wenn der Server kein Firefox installiert hat, ist es auch gleichwertig mit diesem:

```json
{ "capabilities": { "alwaysMatch": { "browserName": "firefox" } } }
```

## Siehe auch

- [Neuen Session](/de/docs/Web/WebDriver/Commands/NewSession) Befehl
- [Session löschen](/de/docs/Web/WebDriver/Commands/NewSession) Befehl
