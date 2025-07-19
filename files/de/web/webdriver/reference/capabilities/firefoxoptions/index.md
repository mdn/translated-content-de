---
title: firefoxOptions
slug: Web/WebDriver/Reference/Capabilities/firefoxOptions
l10n:
  sourceCommit: bdb97b3e01499ce52f02caa3f51d6dd245a48782
---

Die **`moz:firefoxOptions` capability** ist eine namensraumorientierte Menge von Fähigkeiten, die speziell für [Firefox](https://www.firefox.com/en-US/) entwickelt wurden. Sie wird verwendet, um das Verhalten von Firefox zu steuern und kann als Mitglied von [`alwaysMatch`](/de/docs/Web/WebDriver/Reference/Capabilities#alwaysmatch) oder als Mitglied eines der [`firstMatch`](/de/docs/Web/WebDriver/Reference/Capabilities#firstmatch) Einträge verwendet werden.

Sie wird verwendet, um Optionen zu definieren, die steuern, wie Firefox gestartet und ausgeführt wird.

`moz:firefoxOptions` ist ein JSON-Objekt, das eines der folgenden Felder enthalten kann:

##### `binary` (Zeichenkette)

Absoluter Pfad zum benutzerdefinierten Firefox-Binärprogramm, das verwendet werden soll.

Auf macOS können Sie entweder den Pfad zum Anwendungs-Bundle angeben, also `/Applications/Firefox.app`, oder den absoluten Pfad zur ausführbaren Datei innerhalb dieses Bundles, zum Beispiel `/Applications/Firefox.app/Contents/MacOS/firefox-bin`.

geckodriver versucht, den Standardspeicherort von Firefox auf dem aktuellen System zu ermitteln, wenn nicht anders angegeben. Die Standardspeicherorte von Firefox sind:

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">System</th>
      <th scope="col">Standard-Speicherort</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>macOS</td>
      <td>
        <ol>
          <li>
            <code>/Applications/Firefox.app/Contents/MacOS/firefox-bin</code>
          </li>
          <li>
            <code
              >$HOME/Applications/Firefox.app/Contents/MacOS/firefox-bin</code
            >
          </li>
        </ol>
      </td>
    </tr>
    <tr>
      <td>Linux<br />BSD</td>
      <td>
        <p>
          Zuerst wird das <code>firefox</code> im Systempfad gefunden. Dies entspricht der Ausgabe des folgenden Befehls
          <a
            href="https://manpages.debian.org/stretch/debianutils/which.1.en.html"
            >which(1)</a
          >:
        </p>
        <pre class="brush: plain">
% which firefox
/usr/bin/firefox
</pre
        >
      </td>
    </tr>
    <tr>
      <td>Windows</td>
      <td>
        <p>Aus der Windows-Systemregistrierung:</p>
        <ol>
          <li>
            <code
              >HKEY_LOCAL_MACHINE\SOFTWARE WOW6432Node\Mozilla\Mozilla
              Firefox\[VERSION]\Main\PathToExe</code
            >
          </li>
          <li>
            <code
              >HKEY_LOCAL_MACHINE\SOFTWARE\Mozilla\Mozilla
              Firefox\[VERSION]\Main\PathToExe</code
            >
          </li>
        </ol>
      </td>
    </tr>
  </tbody>
</table>

##### `args` (Array von Zeichenketten)

Kommandozeilenargumente, die an das Firefox-Binärprogramm übergeben werden. Diese müssen das führende Minuszeichen (`-`) enthalten, wenn erforderlich, z.B. `["-headless"]`.

Um geckodriver ein vorhandenes [Profil](#profile_string) im lokalen Dateisystem verwenden zu lassen, können Sie `["-profile", "/path/to/profile"]` übergeben. Aber wenn ein Profil auf einen Zielrechner übertragen werden muss, wird empfohlen, den Eintrag `profile` zu verwenden.

##### `profile` (Zeichenkette)

Base64-kodiertes ZIP eines Profilverzeichnisses, das für die Firefox-Instanz verwendet werden soll. Dies kann verwendet werden, um z.B. Erweiterungen oder benutzerdefinierte Zertifikate zu installieren. Für das Setzen benutzerdefinierter Einstellungen empfehlen wir jedoch die Verwendung des `prefs` ([Preferences Object](#prefs_preferences_object)) Eintrags.

Profile werden im temporären Ordner des Systems erstellt. Hier wird auch das kodierte Profil extrahiert, wenn `profile` bereitgestellt wird. Standardmäßig erstellt geckodriver ein neues Profil an diesem Ort.

Das effektiv verwendete Profil der WebDriver-Sitzung wird dem Benutzer in der `moz:profile` Fähigkeit in der [neuen Sitzung Antwort](/de/docs/Web/WebDriver/Reference/Commands/NewSession) zurückgegeben.

Um geckodriver ein vorhandenes Profil im Dateisystem verwenden zu lassen, setzen Sie bitte das `args`-Feld auf `{"args": ["-profile", "/path/to/your/profile"]}`. Beachten Sie, dass, wenn Sie einen Remote-Client verwenden, der auf einen Server auf einem anderen System zielt, das Profil bereits auf dem Zielsystem vorhanden sein muss.

##### `log` (Log-Objekt)

Um die Protokollierungsdetails von geckodriver und Firefox zu erhöhen, können Sie ein [`log`](#log_log_object) Objekt übergeben, das wie `{"log": {"level": "trace"}}` aussehen kann, um alle Protokolle auf Trace-Ebene und darüber zu erfassen.

##### `prefs` (Preferences-Objekt)

Map vom Einstellungsnamen zum Einstellungswert, der eine Zeichenkette, ein boolescher Wert oder eine ganze Zahl sein kann.

### Android

Seit geckodriver 0.26.0 existieren zusätzliche Fähigkeiten, wenn Firefox oder eine Anwendung, die [GeckoView](https://wiki.mozilla.org/Mobile/GeckoView) einbettet, auf Android kontrolliert werden muss:

#### `androidPackage` (Zeichenkette, erforderlich)

Der Paketname von Firefox, z.B. `org.mozilla.firefox`, `org.mozilla.firefox_beta` oder `org.mozilla.fennec`, abhängig vom Release-Kanal oder der Paketname der Anwendung, die GeckoView einbettet, z.B. `org.mozilla.geckoview_example`.

#### `androidActivity` (Zeichenkette, optional)

Der vollständig qualifizierte Klassenname der zu startenden Aktivität, z.B. `.GeckoViewActivity`. Wenn nicht angegeben, wird die Standardaktivität des Pakets verwendet.

#### `androidDeviceSerial` (Zeichenkette, optional)

Die Seriennummer des Gerätes, auf dem die Anwendung gestartet werden soll. Wenn nicht angegeben und mehrere Geräte angeschlossen sind, wird ein Fehler zurückgegeben.

#### `androidIntentArguments` (Array von Zeichenketten, optional)

Argumente, um den Intent zu starten. Intern verwendet geckodriver [Android am](https://developer.android.com/tools/adb#am), um die zu testende Android-Anwendung zu starten. Die angegebenen Intent-Argumente werden dem Befehl `am start` hinzugefügt. Siehe Androids [Spezifikation für Intent-Argumente](https://developer.android.com/tools/adb#IntentSpec) für Details. Dies ermöglicht die Steuerung, wie die Anwendung gestartet wird, und das Hinzufügen optionaler Extras zum Aktivieren und Deaktivieren von Funktionen. Zum Beispiel, um mit der Ansicht Aktion und einer bestimmten URL zu starten, bevor als Teil eines Tests navigiert wird, fügen Sie ein:

```json
{
  "androidIntentArguments": [
    "-a",
    "android.intent.action.VIEW",
    "-d",
    "https://example.com"
  ]
}
```

Zum Beispiel, um ein boolesches Extra zu spezifizieren, das mit [android.content.Intent.getBooleanExtra](<https://developer.android.com/reference/android/content/Intent#getBooleanExtra(java.lang.String,%20boolean)>) verarbeitet werden kann, fügen Sie ein:

```json
{
  "androidIntentArguments": ["--ez", "customBooleanFlagName", "true"]
}
```

#### `env` (Umgebungs-Objekt)

Map von Umgebungsvariablenname zu Umgebungsvariablenwert, beide müssen Zeichenketten sein, die an den Anwendungsprozess weitergeleitet werden, der auf dem Android-Gerät läuft.

### Log-Objekt

Ein JSON-Objekt, das eines dieser Felder haben kann:

#### `level` (Zeichenkette)

Setzt das Detailgradniveau für geckodriver und Firefox. Verfügbare Ebenen sind `trace`, `debug`, `config`, `info`, `warn`, `error` und `fatal`. Wenn nicht anders angegeben, ist der Standardwert `info`. Der Wert ist nicht empfindlich gegenüber Groß-/Kleinschreibung.

### Preferences-Objekt

Ein JSON-Objekt mit einem Eintrag pro einzustellender Präferenz. Die Präferenz wird in das [Profil](#profile_string) geschrieben, bevor Firefox gestartet wird. Eine vollständige Liste der verfügbaren Einstellungen ist verfügbar, indem Sie "about:config" in Ihrem Firefox-Browser besuchen. Einige davon sind in [dieser Quelle](https://searchfox.org/mozilla-central/source/modules/libpref/init/all.js) dokumentiert.

Ein Beispiel für ein Preferences-Objekt:

```json
{
  "dom.ipc.processCount": 8,
  "javascript.options.showInConsole": false
}
```

### Env-Objekt

Ein JSON-Objekt mit einem Eintrag pro einzustellender Umgebungsvariable. Auf dem Desktop wird das zu testende Firefox mit der angegebenen Variablen in seiner Umgebung gestartet. Auf Android wird die auf GeckoView basierende App die angegebene Variable im `env` Block in ihrer YAML-Konfigurationsdatei haben.

Ein Beispiel für ein Env-Objekt:

```json
{
  "MOZ_LOG": "nsHttp:5",
  "MOZ_LOG_FILE": "/mnt/sdcard/log"
}
```

## Beispiel

Der folgende ist ein Beispiel für ein vollständiges [Capabilities-Objekt](/de/docs/Web/WebDriver/Reference/Capabilities), das ein spezifisches Firefox-Binärprogramm auswählt, um mit einem vorbereiteten [Profil](#profile_string) vom Dateisystem im [Headless Mode](https://hacks.mozilla.org/2017/12/using-headless-mode-in-firefox/) ausgeführt zu werden. Es erhöht auch die Anzahl der IPC-Prozesse durch eine Präferenz, schaltet Chrome-Fehler/Warnungen in der Konsole aus und aktiviert detailliertere Protokollierung:

```json
{
  "capabilities": {
    "alwaysMatch": {
      "moz:firefoxOptions": {
        "binary": "/usr/local/firefox/bin/firefox",
        "args": ["-headless", "-profile", "/path/to/my/profile"],
        "prefs": {
          "dom.ipc.processCount": 8,
          "javascript.options.showInConsole": false
        },
        "log": { "level": "trace" },
        "env": {
          "MOZ_LOG": "nsHttp:5",
          "MOZ_LOG_FILE": "/path/to/my/profile/log"
        }
      }
    }
  }
}
```

`moz:firefoxOptions` muss—wie oben gezeigt—innerhalb von [`alwaysMatch`](/de/docs/Web/WebDriver/Reference/Capabilities#alwaysmatch) platziert werden oder in einem der [`firstMatch`](/de/docs/Web/WebDriver/Reference/Capabilities#firstmatch) [Capabilities Objekte](/de/docs/Web/WebDriver/Reference/Capabilities), wie hier gezeigt:

```json
{
  "capabilities": {
    "firstMatch": [
      {"moz:firefoxOptions": …}
    ]
  }
}
```

### Android

Dies führt die GeckoView-Beispielanwendung aus, die auf dem ersten Android-Emulator auf dem Host-Computer installiert ist:

```json
{
  "capabilities": {
    "alwaysMatch": {
      "moz:firefoxOptions": {
        "androidPackage": "org.mozilla.geckoview_example",
        "androidActivity": "org.mozilla.geckoview_example.GeckoView",
        "androidDeviceSerial": "emulator-5554",
        "androidIntentArguments": ["-d", "http://example.org"],
        "env": {
          "MOZ_LOG": "nsHttp:5",
          "MOZ_LOG_FILE": "/mnt/sdcard/log"
        }
      }
    }
  }
}
```

## Siehe auch

- [geckodriver's Dokumentation zu unterstützten Firefox-Fähigkeiten](https://firefox-source-docs.mozilla.org/testing/geckodriver/Capabilities.html)
- [Chrome-spezifische WebDriver-Fähigkeiten](https://developer.chrome.com/docs/chromedriver/capabilities) (`goog:chromeOptions)`)
- [Liste von WebDriver-Fähigkeiten](/de/docs/Web/WebDriver/Reference/Capabilities)
- [New Session](/de/docs/Web/WebDriver/Reference/Commands/NewSession)-Befehl
