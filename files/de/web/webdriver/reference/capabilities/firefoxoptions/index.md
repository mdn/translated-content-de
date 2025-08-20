---
title: firefoxOptions
slug: Web/WebDriver/Reference/Capabilities/firefoxOptions
l10n:
  sourceCommit: 886f2641ae90a70858c5e7d0d20959c70ee44d9d
---

Die **`moz:firefoxOptions`-Fähigkeit** ist eine namensraum-spezifische Menge von Fähigkeiten, die speziell für [Firefox](https://www.firefox.com/en-US/) sind. Sie wird verwendet, um das Verhalten von Firefox zu steuern, und kann als Mitglied von [`alwaysMatch`](/de/docs/Web/WebDriver/Reference/Capabilities#alwaysmatch) oder als Mitglied eines der [`firstMatch`](/de/docs/Web/WebDriver/Reference/Capabilities#firstmatch)-Einträge verwendet werden.

Sie wird genutzt, um Optionen zu definieren, die steuern, wie Firefox gestartet und ausgeführt wird.

`moz:firefoxOptions` ist ein JSON-Objekt, das eines der folgenden Felder enthalten kann:

##### `binary` (string)

Absoluter Pfad zur benutzerdefinierten Firefox-Binärdatei, die verwendet werden soll.

Auf macOS können Sie entweder den Pfad zum Application-Bundle angeben, z.B. `/Applications/Firefox.app`, oder den absoluten Pfad zur ausführbaren Datei innerhalb dieses Bundles, zum Beispiel `/Applications/Firefox.app/Contents/MacOS/firefox-bin`.

geckodriver wird versuchen, den Standardpfad von Firefox auf dem aktuellen System zu ermitteln, wenn er nicht definiert ist. Die Standardpfade von Firefox sind:

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">System</th>
      <th scope="col">Standardpfad</th>
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
          Erstes `firefox`, das im Systempfad gefunden wird. Dies entspricht der Ausgabe des Befehls
          <a href="https://manpages.debian.org/stretch/debianutils/which.1.en.html">which(1)</a>:
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
            <code>HKEY_LOCAL_MACHINE\SOFTWARE WOW6432Node\Mozilla\Mozilla Firefox\[VERSION]\Main\PathToExe</code>
          </li>
          <li>
            <code>HKEY_LOCAL_MACHINE\SOFTWARE\Mozilla\Mozilla Firefox\[VERSION]\Main\PathToExe</code>
          </li>
        </ol>
      </td>
    </tr>
  </tbody>
</table>

##### `args` (Array von Strings)

Kommandozeilenargumente, die an die Firefox-Binärdatei übergeben werden. Diese müssen das führende Minuszeichen (`-`) enthalten, wo erforderlich, z.B. `["-headless"]`.

Um ein bestehendes [Profile](#profile_string) im lokalen Dateisystem mit geckodriver zu verwenden, können Sie `["-profile", "/path/to/profile"]` übergeben. Wenn jedoch ein Profil auf einen Zielrechner übertragen werden muss, wird empfohlen, den `profile`-Eintrag zu verwenden.

##### `profile` (string)

Base64-kodiertes ZIP eines Profilverzeichnisses, das für die Firefox-Instanz verwendet werden soll. Dies kann verwendet werden, um z.B. Erweiterungen oder benutzerdefinierte Zertifikate zu installieren, aber für das Setzen benutzerdefinierter Präferenzen empfehlen wir die Verwendung des `prefs`-Eintrags ([Preferences Object](#prefs_preferences_object)).

Profile werden im temporären Ordner des Systems erstellt. Auch dort wird das kodierte Profil extrahiert, wenn `profile` bereitgestellt wird. Standardmäßig erstellt geckodriver ein neues Profil in diesem Verzeichnis.

Das tatsächlich verwendete Profil der WebDriver-Sitzung wird dem Benutzer in der `moz:profile`-Fähigkeit in der [neuen Sitzungsantwort](/de/docs/Web/WebDriver/Reference/Commands/NewSession) zurückgegeben.

Um ein bestehendes Profil im Dateisystem mit geckodriver zu verwenden, setzen Sie bitte das `args`-Feld auf `{"args": ["-profile", "/path/to/your/profile"]}`. Beachten Sie, dass, wenn Sie einen Remote-Client verwenden, der auf einen Server auf einem anderen System abzielt, das Profil bereits auf dem Zielsystem vorhanden sein muss.

##### `log` (Log-Objekt)

Um die Protokollierungsdetails von geckodriver und Firefox zu erhöhen, können Sie ein [`log`](#log_log_object)-Objekt übergeben, das wie `{"log": {"level": "trace"}}` aussehen kann, um alle Trace-Level-Protokolle und höher einzuschließen.

##### `prefs` (Preferences-Objekt)

Karte von Präferenznamen zu Präferenzwerten, die ein String, ein Boolean oder ein Integer sein können.

### Android

Beginnend mit geckodriver 0.26.0 existieren zusätzliche Fähigkeiten, wenn Firefox oder eine Anwendung, die [GeckoView](https://wiki.mozilla.org/Mobile/GeckoView) einbettet, auf Android gesteuert werden muss:

#### `androidPackage` (string, erforderlich)

Der Paketname von Firefox, z.B. `org.mozilla.firefox`, `org.mozilla.firefox_beta` oder `org.mozilla.fennec`, abhängig vom Release-Kanal, oder der Paketname der Anwendung, die GeckoView einbettet, z.B. `org.mozilla.geckoview_example`.

#### `androidActivity` (string, optional)

Der vollständig qualifizierte Klassenname der zu startenden Aktivität, z.B. `.GeckoViewActivity`. Falls nicht angegeben, wird die Standardaktivität des Pakets verwendet.

#### `androidDeviceSerial` (string, optional)

Die Seriennummer des Geräts, auf dem die Anwendung gestartet werden soll. Falls nicht angegeben und mehrere Geräte angeschlossen sind, wird ein Fehler zurückgegeben.

#### `androidIntentArguments` (Array von Strings, optional)

Argumente, um den Intent zu starten. Hinter den Kulissen verwendet geckodriver [Android am](https://developer.android.com/tools/adb#am), um die zu testende Android-Anwendung zu starten. Die angegebenen Intent-Argumente werden an den `am start`-Befehl angehängt. Siehe Androids [Spezifikation für Intent-Argumente](https://developer.android.com/tools/adb#IntentSpec) für Details. Dies erlaubt es, zu steuern, wie die Anwendung gestartet wird, und optionale Extras zum Aktivieren und Deaktivieren von Funktionen einzuschließen. Um beispielsweise mit der Ansichtaktionen und einer angegebenen URL zu starten, bevor Sie als Teil eines Tests navigieren, fügen Sie hinzu:

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

Um beispielsweise ein Boolean-Extra anzugeben, das mit [android.content.Intent.getBooleanExtra](<https://developer.android.com/reference/android/content/Intent#getBooleanExtra(java.lang.String,%20boolean)>) verarbeitet werden kann, fügen Sie hinzu:

```json
{
  "androidIntentArguments": ["--ez", "customBooleanFlagName", "true"]
}
```

#### `env` (Env-Objekt)

Karte von Umgebungsvariablennamen zu Umgebungsvariablenwerten, die beide Strings sein müssen und die an den Anwendungsprozess auf dem Android-Gerät weitergeleitet werden.

### Log-Objekt

Ein JSON-Objekt, das eines der folgenden Felder haben kann:

#### `level` (string)

Setzt das Detaillevel der Protokollierung für geckodriver und Firefox. Verfügbare Level sind `trace`, `debug`, `config`, `info`, `warn`, `error` und `fatal`. Wenn nicht definiert, ist der Standard `info`. Der Wert wird ohne Beachtung der Groß- und Kleinschreibung behandelt.

### Preferences-Objekt

Ein JSON-Objekt mit einem Eintrag pro zu setzender Präferenz. Die Präferenz wird in das [Profile](#profile_string) geschrieben, bevor Firefox gestartet wird. Eine vollständige Liste der verfügbaren Präferenzen ist beim Aufrufen von "about:config" im Firefox-Browser ersichtlich. Einige davon sind in [dieser Quelle](https://searchfox.org/firefox-main/source/modules/libpref/init/all.js) dokumentiert.

Ein Beispiel eines Preference-Objekts:

```json
{
  "dom.ipc.processCount": 8,
  "javascript.options.showInConsole": false
}
```

### Env-Objekt

Ein JSON-Objekt mit einem Eintrag pro zu setzender Umgebungsvariable. Auf dem Desktop wird der zu testende Firefox mit der gegebenen Variablen in seiner Umgebung gestartet. Auf Android wird die GeckoView-basierte App die gegebene Variable zum `env`-Block in ihrer Konfigurations-YAML hinzufügen.

Ein Beispiel eines Env-Objekts:

```json
{
  "MOZ_LOG": "nsHttp:5",
  "MOZ_LOG_FILE": "/mnt/sdcard/log"
}
```

## Beispiel

Das Folgende ist ein Beispiel für ein vollständiges [Fähigkeitsobjekt](/de/docs/Web/WebDriver/Reference/Capabilities), das eine spezifische Firefox-Binärdatei auswählt, um sie mit einem vorbereiteten [Profile](#profile_string) aus dem Dateisystem im [Headless-Modus](https://hacks.mozilla.org/2017/12/using-headless-mode-in-firefox/) auszuführen. Es erhöht außerdem die Anzahl der IPC-Prozesse durch eine Präferenz, schaltet Chrome-Fehler/Warnungen in der Konsole aus und aktiviert mehr detaillierte Protokollierung:

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

Die `moz:firefoxOptions` müssen—wie oben—innerhalb von [`alwaysMatch`](/de/docs/Web/WebDriver/Reference/Capabilities#alwaysmatch) platziert werden, oder in einem der [`firstMatch`](/de/docs/Web/WebDriver/Reference/Capabilities#firstmatch) [Capabilities-Objekte](/de/docs/Web/WebDriver/Reference/Capabilities), wie hier zu sehen:

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

- [geckodriver-Dokumentation zu unterstützten Firefox-Fähigkeiten](https://firefox-source-docs.mozilla.org/testing/geckodriver/Capabilities.html)
- [Chrome-spezifische WebDriver-Fähigkeiten](https://developer.chrome.com/docs/chromedriver/capabilities) (`goog:chromeOptions)`)
- [Liste der WebDriver-Fähigkeiten](/de/docs/Web/WebDriver/Reference/Capabilities)
- [Neuer Sitzungsbefehl](/de/docs/Web/WebDriver/Reference/Commands/NewSession)
