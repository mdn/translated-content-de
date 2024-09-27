---
title: Fähigkeiten
slug: Web/WebDriver/Capabilities
l10n:
  sourceCommit: c640274a19227cd5790912ea76841732baa6731f
---

{{QuickLinksWithSubpages("/de/docs/Web/WebDriver")}}

WebDriver **_Fähigkeiten_** werden verwendet, um die von einer [Session](/de/docs/Web/WebDriver) unterstützten Funktionen zu kommunizieren. Ein Client kann auch Fähigkeiten nutzen, um festzulegen, welche Funktionen der Treiber beim [Erstellen einer neuen Session](/de/docs/Web/WebDriver/Commands/NewSession) erfüllen muss.

Wenn eine WebDriver-Session erstellt wird, gibt sie eine Reihe von Fähigkeiten zurück, die die ausgehandelten, effektiven Fähigkeiten der Sitzung beschreiben. Einige der in diesem Satz enthaltenen Fähigkeiten sind [standardisiert und werden von allen Browsern geteilt](#liste_der_fähigkeiten), aber der Satz kann auch [browser-spezifische Fähigkeiten](#anbieter-spezifische_fähigkeiten) enthalten, die immer vorangestellt sind.

## Aushandlung von Fähigkeiten

Fähigkeiten können verwendet werden, um einen Treiber anzufordern, der eine bestimmte Teilmenge von Funktionen unterstützt. Dies kann verwendet werden, um bestimmte Browser-Funktionen zu erfordern, z.B. die [Fähigkeit, die Fensterabmessungen zu ändern](/de/docs/Web/WebDriver/Capabilities/setWindowRect), wird aber auch in verteilten Umgebungen verwendet, um eine bestimmte Browser-Konfiguration aus einer Vielzahl von Optionen auszuwählen.

Die Auswahl eines bestimmten Webbrowsers oder einer Plattform macht nur Sinn, wenn Sie einen Remote-WebDriver verwenden. In diesem Fall kontaktiert der Client WebDriver über einen oder mehrere Vermittlungsknoten, die aushandeln, welchen Treiber sie Ihnen basierend auf den empfangenen Fähigkeiten zurückgeben.

Das Fähigkeitenobjekt ist ein Auswahlmechanismus, der begrenzt, welche Treiberkonfigurationen der Server zurückgibt. Wenn Sie eine Firefox-Instanz unter Verwendung von `browserName` anfordern und Firefox ist auf dem Remote nicht installiert, oder macOS von einem Remote, das nur Linux unterstützt, haben Sie möglicherweise Pech. Aber gelegentlich ist es Ihnen vielleicht egal, welches spezifische Betriebssystem oder welcher Webbrowser Ihre Sitzung hat: Sie möchten nur eine Sitzung, die eine bestimmte _Fähigkeit_ hat.

Der Auswahlprozess oder die _Aushandlung der Fähigkeiten_ erfolgt durch `alwaysMatch` und `firstMatch`.

### `alwaysMatch`

Wie der Name schon sagt, sind die innerhalb des `alwaysMatch` Fähigkeitenobjekts beschriebenen Fähigkeiten Eigenschaften, die Sie _erfordern_, dass die Session sie hat. Wenn der Server nicht bieten kann, was Sie benötigen, wird er fehlschlagen.

Wenn Sie zum Beispiel Firefox Version 62 auf einem System anfordern, das nur 60 installiert hat, wird die Sitzungerstellung fehlschlagen:

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

Das `firstMatch`-Feld akzeptiert _ein Array_ von Fähigkeitenobjekten, die nacheinander abgeglichen werden, bis eines das trifft, was der Server bieten kann, oder es wird fehlschlagen.

Dies kann nützlich sein, wenn Sie einen Treiber wollen, der auf macOS oder Linux läuft, aber nicht auf Windows:

```json
{
  "capabilities": {
    "firstMatch": [{ "platformName": "macos" }, { "platformName": "linux" }]
  }
}
```

### Kombination von `alwaysMatch` und `firstMatch`

`firstMatch` kann natürlich mit `alwaysMatch` kombiniert werden, um die Auswahl einzugrenzen. Wenn Sie zum Beispiel einen Treiber möchten, der auf macOS oder Linux läuft, aber es _muss_ Firefox sein:

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

Das vorherige Beispiel ist genau gleichwertig dazu, die Firefox-Anforderung in jedem `firstMatch` Zweig zu platzieren:

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

Welche Sie von den zwei vorhergehenden Beispielen wählen, ist nicht wichtig, aber es kann von Bedeutung sein, wenn Sie Browser-Konfigurationen weitergeben. Um unnötige Datenwiederholungen, wie Profile, zu vermeiden, ist es ratsam, `alwaysMatch` zu verwenden, damit diese Daten nur einmal übertragen werden:

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
- [`acceptInsecureCerts`](/de/docs/Web/WebDriver/Capabilities/acceptInsecureCerts): Diese Fähigkeit kommuniziert, ob abgelaufene oder ungültige [TLS-Zertifikate](/de/docs/Glossary/TLS) beim [Navigieren](/de/docs/Web/WebDriver/Commands/NavigateTo) überprüft werden. Falls die Fähigkeit auf falsch gesetzt ist, wird als Navigation ein [unsichere Zertifikat](/de/docs/Web/WebDriver/Errors/InsecureCertificate) Fehler zurückgegeben, wenn Domains mit Zertifikatsproblemen angetroffen werden. Andernfalls werden selbstsignierte oder anderweitig ungültige Zertifikate bei der Navigation implizit vom Browser vertraut. Die Fähigkeit hat Auswirkungen für die Lebensdauer der Sitzung.
- [`pageLoadStrategy`](/de/docs/Web/WebDriver/Capabilities/pageLoadStrategy)
- [`proxy`](/de/docs/Web/WebDriver/Capabilities/proxy)
- [`setWindowRect`](/de/docs/Web/WebDriver/Capabilities/setWindowRect)
- [`timeouts`](/de/docs/Web/WebDriver/Capabilities/timeouts)
- [`unhandledPromptBehavior`](/de/docs/Web/WebDriver/Capabilities/unhandledPromptBehavior)
- [`webSocketUrl`](/de/docs/Web/WebDriver/Capabilities/webSocketUrl)

## Anbieter-spezifische Fähigkeiten

Zusätzlich zu den [standardisierten Fähigkeiten](#liste_der_fähigkeiten) ermöglicht WebDriver Drittanbietern die _Erweiterung_ der Fähigkeiten, um ihren Bedürfnissen gerecht zu werden. Browser-Anbieter und Lieferanten von Treibern nutzen in der Regel Erweiterungsfähigkeiten, um Konfigurationen im Browser zu ermöglichen, sie können jedoch auch von Vermittlern für beliebige Informationsblöcke verwendet werden.

- [Firefox-Fähigkeiten](/de/docs/Web/WebDriver/Capabilities/firefoxOptions) (`moz:firefoxOptions`)
- [Chrome-Fähigkeiten](/de/docs/Web/WebDriver/Capabilities/goog/chromeOptions) (`goog:chromeOptions`)

## Veraltete Fähigkeiten

Die Mehrheit der Selenium-Clients verwenden `desiredCapabilities` und `requiredCapabilities`, um die neue Sitzung zu konfigurieren. Diese sind sehr ähnlich zu den oben beschriebenen `firstMatch` und `alwaysMatch`. Einige Treiber unterstützen diese veralteten Fähigkeiten, sie sind jedoch veraltet und sollten vermieden werden.

Das Konvertieren eines veralteten Fähigkeitenobjekts in den neuen Stil ist einfach. Das Erste, das Sie wissen müssen, ist, dass `alwaysMatch`/`firstMatch` _immer_ in ein `capabilities` JSON-Objekt eingebettet ist, während `desiredCapabilities`/`requiredCapabilities` auf der obersten Ebene existiert. Allgemein gesagt, alles, was bisher in `desiredCapabilities` verwendet wurde, sollte in einen `firstMatch` Zweig kommen, um den gleichen Effekt zu erzielen.

Nehmen Sie dieses veraltete Fähigkeitenobjekt:

```json
{ "desiredCapabilities": { "browserName": "firefox" } }
```

Dies wäre funktional gleichwertig im neuen Stil:

```json
{ "capabilities": { "firstMatch": [{ "browserName": "firefox" }] } }
```

Aber da es nur einen `firstMatch` Zweig gibt und wir wissen, dass die Sitzungserstellung fehlschlägt, wenn der Server keinen Firefox installiert hat, ist es auch gleichwertig zu diesem:

```json
{ "capabilities": { "alwaysMatch": { "browserName": "firefox" } } }
```

## Siehe auch

- [Neuer Session](/de/docs/Web/WebDriver/Commands/NewSession) Befehl
- [Session löschen](/de/docs/Web/WebDriver/Commands/NewSession) Befehl
