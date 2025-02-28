---
title: WebDriver-Fähigkeiten
short-title: Capabilities
slug: Web/WebDriver/Reference/Capabilities
l10n:
  sourceCommit: 57b855a52a2d2e8914a30e3a47567bff0806ae23
---

WebDriver **_Fähigkeiten_** werden verwendet, um die von einer [Sitzung](/de/docs/Web/WebDriver) unterstützten Funktionen zu kommunizieren. Ein Client kann auch Fähigkeiten nutzen, um zu definieren, welche Funktionen der Treiber bei der [Erstellung einer neuen Sitzung](/de/docs/Web/WebDriver/Commands/NewSession) bereitstellen muss.

Wenn eine WebDriver-Sitzung erstellt wird, gibt sie eine Menge von Fähigkeiten zurück, die die verhandelten, effektiven Fähigkeiten der Sitzung beschreiben. Einige der in dieser Menge enthaltenen Fähigkeiten sind [standardisiert und von allen Browsern geteilt](#liste_der_fähigkeiten), aber die Menge kann auch [browser-spezifische Fähigkeiten](#hersteller-spezifische_fähigkeiten) enthalten, die immer einen Präfix haben.

## Fähigkeiten-Verhandlung

Fähigkeiten können verwendet werden, um einen Treiber zu verlangen, der eine bestimmte Untermenge von Funktionen unterstützt. Dies kann genutzt werden, um bestimmte Browser-Funktionen zu verlangen, wie die [Fähigkeit, die Fensterabmessungen zu ändern](/de/docs/Web/WebDriver/Capabilities/setWindowRect), wird aber auch in verteilten Umgebungen verwendet, um eine bestimmte Browser-Konfiguration aus einer Vielzahl von Optionen auszuwählen.

Die Auswahl eines bestimmten Webbrowsers oder einer Plattform macht nur Sinn, wenn Sie einen Remote-WebDriver verwenden. In diesem Fall stellt der Client über einen oder mehrere Zwischenknoten eine Verbindung mit WebDriver her, die aushandeln, welchen Treiber er Ihnen basierend auf den empfangenen Fähigkeiten zurückgibt.

Das Fähigkeiten-Objekt ist ein Auswahlmechanismus, der einschränkt, welche Treiberausführungen der Server zurückgibt. Wenn Sie eine Firefox-Instanz mit `browserName` anfragen und Firefox nicht auf dem Remote installiert ist, oder macOS von einem Remote, der nur Linux unterstützt, haben Sie möglicherweise Pech. Aber gelegentlich ist es Ihnen egal, welches spezifische Betriebssystem oder welcher Webbrowser Ihre Sitzung hat: Sie möchten einfach eine Sitzung, die eine bestimmte _Fähigkeit_ hat.

Der Auswahlprozess, oder die _Fähigkeiten-Verhandlung_, wird über `alwaysMatch` und `firstMatch` gesteuert.

### `alwaysMatch`

Wie der Name schon sagt, sind Fähigkeiten, die im `alwaysMatch`-Objekt beschrieben sind, Funktionen, die Sie _verlangen_, dass die Sitzung sie hat. Wenn der Server nicht bieten kann, was Sie verlangen, schlägt die Sitzungserstellung fehl.

Wenn Sie beispielsweise Firefox Version 62 auf einem System anfordern, das nur 60 installiert hat, schlägt die Sitzungserstellung fehl:

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

Das `firstMatch`-Feld akzeptiert _ein Array_ von Fähigkeiten-Objekten, die nacheinander abgeglichen werden, bis eines gefunden wird, das der Server bereitstellen kann, oder es schlägt fehl.

Dies kann nützlich sein, wenn Sie einen Treiber möchten, der unter macOS oder Linux, aber nicht unter Windows läuft:

```json
{
  "capabilities": {
    "firstMatch": [{ "platformName": "macos" }, { "platformName": "linux" }]
  }
}
```

### Kombination von `alwaysMatch` und `firstMatch`

`firstMatch` kann natürlich mit `alwaysMatch` kombiniert werden, um die Auswahl einzugrenzen. Wenn Sie beispielsweise einen Treiber möchten, der unter macOS oder Linux läuft, aber _unbedingt_ Firefox sein muss:

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

Das vorherige Beispiel ist genau äquivalent dazu, die Anforderung an Firefox in jedem `firstMatch`-Arm zu platzieren:

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

Welche der beiden vorhergehenden Beispiele Sie wählen, ist nicht wichtig, aber es kann relevant sein, wenn Sie eine Browserkonfiguration übergeben. Um zu vermeiden, dass Daten unnötig wiederholt werden, wie z.B. Profile, ist es ratsam, `alwaysMatch` zu verwenden, so dass diese Daten nur einmal über die Leitung übertragen werden:

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
- [`acceptInsecureCerts`](/de/docs/Web/WebDriver/Reference/Capabilities/acceptInsecureCerts): Diese Fähigkeit kommuniziert, ob abgelaufene oder ungültige {{Glossary("TLS", "TLS-Zertifikate")}} bei der [Navigation](/de/docs/Web/WebDriver/Commands/NavigateTo) überprüft werden. Wenn die Fähigkeit auf false gesetzt ist, wird ein Fehler aufgrund eines [unsicheren Zertifikats](/de/docs/Web/WebDriver/Reference/Errors/InsecureCertificate) zurückgegeben, sobald die Navigation auf Domains mit Zertifikatproblemen stößt. Andernfalls werden selbstsignierte oder anderweitig ungültige Zertifikate vom Browser bei der Navigation implizit vertraut. Die Fähigkeit hat Wirkung während der gesamten Sitzung.
- [`pageLoadStrategy`](/de/docs/Web/WebDriver/Capabilities/pageLoadStrategy)
- [`proxy`](/de/docs/Web/WebDriver/Capabilities/proxy)
- [`setWindowRect`](/de/docs/Web/WebDriver/Capabilities/setWindowRect)
- [`timeouts`](/de/docs/Web/WebDriver/Capabilities/timeouts)
- [`unhandledPromptBehavior`](/de/docs/Web/WebDriver/Capabilities/unhandledPromptBehavior)
- [`webSocketUrl`](/de/docs/Web/WebDriver/Reference/Capabilities/webSocketUrl)

## Hersteller-spezifische Fähigkeiten

Zusätzlich zu den [Standardfähigkeiten](#liste_der_fähigkeiten) erlaubt WebDriver Drittanbietern, die Menge der Fähigkeiten zu _erweitern_, um ihren Anforderungen gerecht zu werden. Browseranbieter und Anbieter von Treibern verwenden typischerweise Erweiterungsfähigkeiten, um die Konfiguration des Browsers bereitzustellen, aber sie können auch von Zwischenstellen für beliebige Informationen verwendet werden.

- [Firefox-Fähigkeiten](/de/docs/Web/WebDriver/Reference/Capabilities/firefoxOptions) (`moz:firefoxOptions`)
- [Chrome-Fähigkeiten](/de/docs/Web/WebDriver/Capabilities/goog/chromeOptions) (`goog:chromeOptions`)

## Veraltete Fähigkeiten

Die Mehrheit der Selenium-Clients verwendet `desiredCapabilities` und `requiredCapabilities`, um die neue Sitzung zu konfigurieren. Diese sind den oben beschriebenen `firstMatch` und `alwaysMatch` sehr ähnlich. Einige Treiber unterstützen diese veralteten Fähigkeiten, aber sie sind nicht mehr aktuell und sollten vermieden werden.

Die Konvertierung eines veralteten Fähigkeiten-Objekts in den neuen Stil ist einfach. Das Erste, was Sie wissen müssen, ist, dass `alwaysMatch`/`firstMatch` _immer_ innerhalb eines `capabilities`-JSON-Objekts eingeschlossen ist, während `desiredCapabilities`/`requiredCapabilities` auf oberster Ebene existieren. Im Allgemeinen gilt, dass alles, was zuvor in `desiredCapabilities` ging, in einen `firstMatch`-Zweigarm gehen sollte, um denselben Effekt zu erzielen.

Nehmen Sie dieses veraltete Fähigkeiten-Objekt:

```json
{ "desiredCapabilities": { "browserName": "firefox" } }
```

Dies wäre im neuen Stil funktional äquivalent:

```json
{ "capabilities": { "firstMatch": [{ "browserName": "firefox" }] } }
```

Aber da es nur einen `firstMatch`-Arm gibt und wir wissen, dass die Sitzungserstellung fehlschlagen wird, wenn der Server kein Firefox installiert hat, ist es auch äquivalent zu diesem:

```json
{ "capabilities": { "alwaysMatch": { "browserName": "firefox" } } }
```

## Siehe auch

- [Neuen Sitzung](/de/docs/Web/WebDriver/Commands/NewSession)-Befehl
- [Sitzung löschen](/de/docs/Web/WebDriver/Commands/NewSession)-Befehl
