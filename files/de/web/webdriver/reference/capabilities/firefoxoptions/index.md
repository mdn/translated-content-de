---
title: firefoxOptions
slug: Web/WebDriver/Reference/Capabilities/firefoxOptions
l10n:
  sourceCommit: fb6aa6056407ba69d96da0fe140a1ae2320f0fb2
---

Die Fähigkeit **`moz:firefoxOptions`** ist ein Namensraum-set spezifischer Fähigkeiten für [Firefox](https://www.firefox.com/en-US/). Sie wird verwendet, um das Verhalten von Firefox zu steuern und kann als Mitglied von [`alwaysMatch`](/de/docs/Web/WebDriver/Reference/Capabilities#alwaysmatch) oder als Mitglied eines der [`firstMatch`](/de/docs/Web/WebDriver/Reference/Capabilities#firstmatch)-Einträge verwendet werden.

Sie wird verwendet, um Optionen zu definieren, die steuern, wie Firefox gestartet und ausgeführt wird.

## Wert

`moz:firefoxOptions` ist ein JSON-Objekt, das eines der folgenden Felder enthalten kann:

### `binary` (String)

Absoluter Pfad zum benutzerdefinierten Firefox-Binary, das verwendet werden soll.

Unter macOS können Sie entweder den Pfad zum Anwendungsbundle angeben, d.h. `/Applications/Firefox.app`, oder den absoluten Pfad zur ausführbaren Binärdatei innerhalb dieses Bundles, zum Beispiel `/Applications/Firefox.app/Contents/MacOS/firefox-bin`.

geckodriver versucht, den Standard-Speicherort von Firefox auf dem aktuellen System zu ermitteln, wenn er nicht definiert ist. Die Standardspeicherorte von Firefox sind:

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
            <code>$HOME/Applications/Firefox.app/Contents/MacOS/firefox-bin</code>
          </li>
        </ol>
      </td>
    </tr>
    <tr>
      <td>Linux<br />BSD</td>
      <td>
        <p>
          Erstes <code>firefox</code>, das im Systempfad gefunden wird. Dies ist
          äquivalent zur Ausgabe beim Ausführen von
          <a
            href="https://manpages.debian.org/stretch/debianutils/which.1.en.html"
            >which(1)</a
          >:
        </p>
        <pre class="brush: plain">
% which firefox
/usr/bin/firefox
</pre>
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

### `args` (Array von Strings)

Befehlszeilenargumente, die an das Firefox-Binary übergeben werden sollen. Diese müssen den führenden Bindestrich (`-`) enthalten, wenn erforderlich, z. B. `["-headless"]`.

Um geckodriver ein vorhandenes [Profil](#profile_string) auf dem lokalen Dateisystem aufnehmen zu lassen, können Sie `["-profile", "/path/to/profile"]` übergeben. Wenn ein Profil jedoch auf eine Zielmaschine übertragen werden muss, wird empfohlen, den `profile`-Eintrag zu verwenden.

### `profile` (String)

Base64-codiertes ZIP eines Profilverzeichnisses, das für die Firefox-Instanz verwendet werden soll. Dies kann z. B. genutzt werden, um Erweiterungen oder benutzerdefinierte Zertifikate zu installieren, aber für das Festlegen benutzerdefinierter Einstellungen empfehlen wir die Verwendung des `prefs` ([Preferences Object](#prefs_preferences_object))-Eintrags.

Profile werden im temporären Ordner des Systems erstellt. Dies ist auch der Ort, an dem das encodierte Profil extrahiert wird, wenn `profile` bereitgestellt wird. Standardmäßig wird geckodriver an diesem Ort ein neues Profil erstellen.

Das tatsächlich verwendete Profil in der WebDriver-Sitzung wird dem Benutzer in der `moz:profile`-Fähigkeit in der [Antwort auf die neue Sitzung](/de/docs/Web/WebDriver/Reference/Classic/Commands/NewSession) zurückgegeben.

Um geckodriver ein vorhandenes Profil auf dem Dateisystem aufnehmen zu lassen, setzen Sie bitte das `args`-Feld auf `{"args": ["-profile", "/path/to/your/profile"]}`. Beachten Sie, dass, wenn Sie einen Remote-Client verwenden, der einen Server auf einem anderen System ansteuert, das Profil bereits auf dem Zielsystem vorhanden sein muss.

### `log` (Log-Objekt)

Um die Protokollierungs-Ausführlichkeit von geckodriver und Firefox zu erhöhen, können Sie ein `log`-Objekt übergeben, das wie `{"log": {"level": "trace"}}` aussieht, um alle Trace-Ebene-Protokolle und höher einzuschließen.

Ein JSON-Objekt, das eines dieser Felder haben kann:

#### `level` (String)

Setzt die Ausführlichkeit der Protokollierung von geckodriver und Firefox fest. Verfügbare Ebenen sind `trace`, `debug`, `config`, `info`, `warn`, `error` und `fatal`. Wenn nicht definiert, ist der Standard `info`. Der Wert wird ohne Berücksichtigung der Groß- und Kleinschreibung behandelt.

### `prefs` (Präferenzen-Objekt)

Map von Präferenznamen zu Präferenzwert, der ein String, ein Boolean oder ein Integer sein kann.

Ein JSON-Objekt mit einem Eintrag pro zu setzender Präferenz. Die Präferenz wird in das [Profil](#profile_string) geschrieben, bevor Firefox gestartet wird. Eine vollständige Liste der verfügbaren Präferenzen ist aufrufbar durch Besuch von "about:config" in Ihrem Firefox-Browser. Einige davon sind in [dieser Quelle](https://searchfox.org/firefox-main/source/modules/libpref/init/all.js) dokumentiert.

Ein Beispiel für ein Präferenzen-Objekt:

```json
{
  "dom.ipc.processCount": 8,
  "javascript.options.showInConsole": false
}
```

### Android

Beginnend mit geckodriver 0.26.0 existieren zusätzliche Fähigkeiten, wenn Firefox oder eine Anwendung, die [GeckoView](https://wiki.mozilla.org/Mobile/GeckoView) einbettet, unter Android gesteuert werden soll:

#### `androidPackage` (String, erforderlich)

Der Paketname von Firefox, z. B. `org.mozilla.firefox`, `org.mozilla.firefox_beta` oder `org.mozilla.fennec` je nach Release-Kanal oder der Paketname der Anwendung, die GeckoView einbettet, z. B. `org.mozilla.geckoview_example`.

#### `androidActivity` (String, optional)

Der voll qualifizierte Klassenname der zu startenden Aktivität, z. B. `.GeckoViewActivity`. Wenn nicht angegeben, wird die Standardaktivität des Pakets verwendet.

#### `androidDeviceSerial` (String, optional)

Die Seriennummer des Geräts, auf dem die Anwendung gestartet werden soll. Wenn nicht angegeben und mehrere Geräte angeschlossen sind, wird ein Fehler zurückgegeben.

#### `androidIntentArguments` (Array von Strings, optional)

Argumente, die zum Starten des Intents verwendet werden. Hinter den Kulissen verwendet geckodriver [Android am](https://developer.android.com/tools/adb#am), um die zu testende Android-Anwendung zu starten. Die angegebenen Intent-Argumente werden an den `am start`-Befehl angehängt. Siehe [Androids Spezifikation für Intent-Argumente](https://developer.android.com/tools/adb#IntentSpec) für Details. Dies ermöglicht die Kontrolle, wie die Anwendung gestartet wird, und es können optionale Extras zum Aktivieren und Deaktivieren von Funktionen hinzugefügt werden. Um beispielsweise eine Ansichtsaktion mit einer angegebenen URL vor dem Navigieren im Rahmen eines Tests zu starten, fügen Sie Folgendes hinzu:

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

Beispielsweise, um ein boolesches Extra zu spezifizieren, das mit [android.content.Intent.getBooleanExtra](<https://developer.android.com/reference/android/content/Intent#getBooleanExtra(java.lang.String,%20boolean)>) verarbeitet werden kann, fügen Sie Folgendes hinzu:

```json
{
  "androidIntentArguments": ["--ez", "customBooleanFlagName", "true"]
}
```

#### `env` (Env-Objekt)

Map von Umgebungsvariablennamen zu Umgebungsvariablenwerten, die beide Strings sein müssen und die an den auf dem Android-Gerät laufenden Anwendungsprozess weitergeleitet werden.

Ein JSON-Objekt mit einem Eintrag pro zu setzender Umgebungsvariable. Auf dem Desktop wird der zu testende Firefox mit der gegebenen Variablen in seiner Umgebung gestartet. Auf Android wird die auf GeckoView basierende App die gegebene Variable dem `env`-Block in ihrer Konfigurations-YAML hinzufügen.

Ein Beispiel für ein env-Objekt:

```json
{
  "MOZ_LOG": "nsHttp:5",
  "MOZ_LOG_FILE": "/mnt/sdcard/log"
}
```

## Beispiel

Das folgende ist ein Beispiel für ein vollständiges [Fähigkeiten-Objekt](/de/docs/Web/WebDriver/Reference/Capabilities), das ein bestimmtes Firefox-Binary auswählt, um mit einem vorbereiteten [Profil](#profile_string) vom Dateisystem im [headless-Modus](https://hacks.mozilla.org/2017/12/using-headless-mode-in-firefox/) ausgeführt zu werden. Es erhöht auch die Anzahl der IPC-Prozesse durch eine Präferenz, schaltet Chrome-Fehler/Warnungen in der Konsole aus und aktiviert eine ausführlichere Protokollierung:

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

Die `moz:firefoxOptions` müssen — wie oben gezeigt — innerhalb von [`alwaysMatch`](/de/docs/Web/WebDriver/Reference/Capabilities#alwaysmatch) oder in einem der [`firstMatch`](/de/docs/Web/WebDriver/Reference/Capabilities#firstmatch) [Fähigkeiten-Objekte](/de/docs/Web/WebDriver/Reference/Capabilities) platziert werden, wie hier zu sehen:

```json
{
  "capabilities": {
    "firstMatch": [{ "moz:firefoxOptions": {} }]
  }
}
```

### Android

Dies führt die GeckoView-Beispielanwendung aus, wie sie auf dem ersten auf dem Hostsystem laufenden Android-Emulator installiert ist:

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

- [Dokumentation von geckodriver zu unterstützten Firefox-Fähigkeiten](https://firefox-source-docs.mozilla.org/testing/geckodriver/Capabilities.html)
- [Chrome-spezifische WebDriver-Fähigkeiten](https://developer.chrome.com/docs/chromedriver/capabilities) (`goog:chromeOptions)`)
- [Liste der WebDriver-Fähigkeiten](/de/docs/Web/WebDriver/Reference/Capabilities)
- [Neuer Sitzung](/de/docs/Web/WebDriver/Reference/Classic/Commands/NewSession)-Befehl
