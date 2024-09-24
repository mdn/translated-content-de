---
title: Fähigkeiten
slug: Web/WebDriver/Capabilities
l10n:
  sourceCommit: c640274a19227cd5790912ea76841732baa6731f
---

{{QuickLinksWithSubpages("/de/docs/Web/WebDriver")}}

WebDriver **_Fähigkeiten_** werden verwendet, um die von einer [Session](/de/docs/Web/WebDriver) unterstützten Funktionen zu kommunizieren. Ein Client kann auch Fähigkeiten nutzen, um zu definieren, welche Funktionen der Treiber bei der [Erstellung einer neuen Session](/de/docs/Web/WebDriver/Commands/NewSession) erfüllen muss.

Wenn eine WebDriver-Session erstellt wird, gibt sie eine Reihe von Fähigkeiten zurück, die die verhandelten, effektiven Fähigkeiten der Session beschreiben. Einige der in diesem Set enthaltenen Fähigkeiten sind [standardisiert und bei allen Browsern gleich](#liste_der_fähigkeiten), aber das Set kann auch [browser-spezifische Fähigkeiten](#anbieter-spezifische_fähigkeiten) enthalten, die immer mit einem Präfix versehen sind.

## Fähigkeiten-Verhandlung

Fähigkeiten können verwendet werden, um einen Treiber zu verlangen, der eine bestimmte Teilmenge von Funktionen unterstützt. Dies kann verwendet werden, um bestimmte Browser-Funktionen, wie die [Möglichkeit, die Fensterabmessungen anzupassen](/de/docs/Web/WebDriver/Capabilities/setWindowRect), zu verlangen, wird aber auch in verteilten Umgebungen eingesetzt, um eine bestimmte Browser-Konfiguration aus einer Auswahlmatrix auszuwählen.

Die Auswahl eines bestimmten Webbrowsers oder einer Plattform ist nur sinnvoll, wenn Sie einen Remote-WebDriver verwenden. In diesem Fall tritt der Client über einen oder mehrere Zwischenknoten mit dem WebDriver in Kontakt, die darüber verhandeln, welchen Treiber sie Ihnen auf Basis der empfangenen Fähigkeiten zurückgeben.

Das Fähigkeiten-Objekt ist ein Auswahlmechanismus, der begrenzt, welche Treiberkonfigurationen der Server zurückgibt. Wenn Sie eine Firefox-Instanz mit `browserName` anfordern und Firefox auf dem Remote-Server nicht installiert ist, oder macOS von einem Remote-Server anfordern, der nur Linux unterstützt, haben Sie möglicherweise kein Glück. Aber manchmal kann es Ihnen egal sein, welches spezifische Betriebssystem oder welcher Webbrowser Ihre Session hat: Sie wollen einfach nur eine Session, die eine bestimmte _Fähigkeit_ hat.

Der Auswahlprozess, oder die _Fähigkeiten-Verhandlung_, wird durch `alwaysMatch` und `firstMatch` durchgeführt.

### `alwaysMatch`

Wie der Name schon sagt, sind Fähigkeiten, die im Fähigkeiten-Objekt `alwaysMatch` beschrieben werden, Funktionen, die Sie _verlangen_, dass die Session sie hat. Wenn der Server nicht bereitstellen kann, was Sie verlangen, schlägt die Erzeugung der Session fehl.

Wenn Sie beispielsweise Firefox Version 62 auf einem System anfordern, das nur Version 60 installiert hat, wird die Session-Erstellung fehlschlagen:

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

Das Feld `firstMatch` akzeptiert _ein Array_ von Fähigkeiten-Objekten, die nacheinander geprüft werden, bis eines mit dem übereinstimmt, was der Server bereitstellen kann, oder es wird fehlschlagen.

Dies kann nützlich sein, wenn Sie einen Treiber wollen, der auf macOS oder Linux läuft, aber nicht auf Windows:

```json
{
  "capabilities": {
    "firstMatch": [{ "platformName": "macos" }, { "platformName": "linux" }]
  }
}
```

### Kombination von `alwaysMatch` und `firstMatch`

`firstMatch` kann natürlich mit `alwaysMatch` kombiniert werden, um die Auswahl einzugrenzen. Wenn Sie beispielsweise einen Treiber benötigen, der auf macOS oder Linux läuft, aber es muss _Firefox_ sein:

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

Das vorhergehende Beispiel ist genau gleichwertig damit, die Firefox-Anforderung in jedem `firstMatch`-Teil zu setzen:

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

Welche der beiden vorhergehenden Beispiele Sie wählen, ist nicht wichtig, aber es kann von Bedeutung sein, wenn Sie Konfigurationen für den Browser übergeben. Um zu vermeiden, dass Daten unnötig wiederholt werden, wie z. B. Profile, ist es ratsam, `alwaysMatch` zu verwenden, sodass diese Daten nur einmal übertragen werden:

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
- [`acceptInsecureCerts`](/de/docs/Web/WebDriver/Capabilities/acceptInsecureCerts): Diese Fähigkeit teilt mit, ob abgelaufene oder ungültige [TLS-Zertifikate](/de/docs/Glossary/TLS) beim [Navigieren](/de/docs/Web/WebDriver/Commands/NavigateTo) überprüft werden. Wenn die Fähigkeit false ist, wird ein [unsicheres Zertifikat](/de/docs/Web/WebDriver/Errors/InsecureCertificate) Fehler zurückgegeben, wenn die Navigation auf Domains mit Zertifikatsproblemen trifft. Andernfalls werden selbstsignierte oder anderweitig ungültige Zertifikate während der Navigation vom Browser implizit vertraut. Die Fähigkeit hat Auswirkungen für die Dauer der Session.
- [`pageLoadStrategy`](/de/docs/Web/WebDriver/Capabilities/pageLoadStrategy)
- [`proxy`](/de/docs/Web/WebDriver/Capabilities/proxy)
- [`setWindowRect`](/de/docs/Web/WebDriver/Capabilities/setWindowRect)
- [`timeouts`](/de/docs/Web/WebDriver/Capabilities/timeouts)
- [`unhandledPromptBehavior`](/de/docs/Web/WebDriver/Capabilities/unhandledPromptBehavior)
- [`webSocketUrl`](/de/docs/Web/WebDriver/Capabilities/webSocketUrl)

## Anbieter-spezifische Fähigkeiten

Zusätzlich zu den [Standardfähigkeiten](#liste_der_fähigkeiten) erlaubt es WebDriver Drittanbietern, den Satz von Fähigkeiten zu _erweitern_, um ihren Bedürfnissen gerecht zu werden. Browseranbieter und Treiberlieferanten nutzen Erweiterungsfähigkeiten typischerweise, um Konfigurationen für den Browser bereitzustellen, aber sie können auch von Zwischenknoten für beliebige Informationsblobs verwendet werden.

- [Firefox-Fähigkeiten](/de/docs/Web/WebDriver/Capabilities/firefoxOptions) (`moz:firefoxOptions`)
- [Chrome-Fähigkeiten](/de/docs/Web/WebDriver/Capabilities/goog/chromeOptions) (`goog:chromeOptions`)

## Veraltete Fähigkeiten

Die Mehrheit der Selenium-Clients verwendet `desiredCapabilities` und `requiredCapabilities`, um die neue Session zu konfigurieren. Diese sind den oben beschriebenen `firstMatch` und `alwaysMatch` sehr ähnlich. Einige Treiber unterstützen diese veralteten Fähigkeiten, aber sie sind veraltet und sollten vermieden werden.

Das Umwandeln eines veralteten Fähigkeiten-Objekts in den neuen Stil ist einfach. Das Erste, was Sie wissen müssen, ist, dass `alwaysMatch`/`firstMatch` _immer_ in einem `capabilities` JSON-Objekt eingeschlossen ist, während `desiredCapabilities`/`requiredCapabilities` auf der obersten Ebene existieren. Im Allgemeinen sollte alles, was zuvor in `desiredCapabilities` enthalten war, in ein `firstMatch`-Anzweigungsarm integriert werden, um denselben Effekt zu erzielen.

Nehmen Sie dieses veraltete Fähigkeiten-Objekt:

```json
{ "desiredCapabilities": { "browserName": "firefox" } }
```

Dies wäre im neuen Stil funktional gleichwertig:

```json
{ "capabilities": { "firstMatch": [{ "browserName": "firefox" }] } }
```

Aber da es nur einen `firstMatch`-Arm gibt und wir wissen, dass die Session-Erstellung fehlschlagen wird, wenn der Server kein Firefox installiert hat, ist es auch gleichwertig mit diesem:

```json
{ "capabilities": { "alwaysMatch": { "browserName": "firefox" } } }
```

## Siehe auch

- [New Session](/de/docs/Web/WebDriver/Commands/NewSession) Befehl
- [Delete Session](/de/docs/Web/WebDriver/Commands/NewSession) Befehl
