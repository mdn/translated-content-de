---
title: firefoxOptions
slug: Web/WebDriver/Reference/Capabilities/firefoxOptions
l10n:
  sourceCommit: 56f3d7018159127dbe92842413fb45d0aa7e8193
---

Die **`moz:firefoxOptions`-Fähigkeit** ist eine namensraum-basierte Menge von Fähigkeiten, die spezifisch für [Firefox](https://www.firefox.com/en-US/) sind. Sie wird verwendet, um das Verhalten von Firefox zu steuern und kann als Mitglied von [`alwaysMatch`](/de/docs/Web/WebDriver/Reference/Capabilities#alwaysmatch) oder als Mitglied eines der [`firstMatch`](/de/docs/Web/WebDriver/Reference/Capabilities#firstmatch) Einträge verwendet werden.

Sie wird verwendet, um Optionen zu definieren, die steuern, wie Firefox gestartet und ausgeführt wird.

## Wert

`moz:firefoxOptions` ist ein JSON-Objekt, das eines der folgenden Felder enthalten kann:

### `binary` (String)

Absoluter Pfad zur benutzerdefinierten Firefox-Binärdatei, die verwendet werden soll.

Unter macOS können Sie entweder den Pfad zum Anwendungsbundle angeben, z. B. `/Applications/Firefox.app`, oder den absoluten Pfad zur ausführbaren Binärdatei innerhalb des Bundles, z. B. `/Applications/Firefox.app/Contents/MacOS/firefox-bin`.

Der geckodriver wird versuchen, den Standardstandort von Firefox auf dem aktuellen System zu ermitteln, wenn er undefiniert gelassen wird. Die Standardstandorte von Firefox sind:

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">System</th>
      <th scope="col">Standardstandort</th>
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
          Erste <code>firefox</code> im Systempfad gefunden. Dies entspricht der Ausgabe von
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

### `args` (Array von Strings)

Kommandozeilen-Argumente, die an die Firefox-Binärdatei übergeben werden. Diese müssen den führenden Bindestrich (`-`) enthalten, wo erforderlich, z.B. `["-headless"]`.

Um ein vorhandenes [Profil](#profile_string) im lokalen Dateisystem mit geckodriver zu verwenden, können Sie `["-profile", "/path/to/profile"]` übergeben. Wenn ein Profil auf eine Zielmaschine übertragen werden muss, wird empfohlen, den Eintrag `profile` zu verwenden.

### `profile` (String)

Base64-kodiertes ZIP eines Profilverzeichnisses, das für die Firefox-Instanz verwendet werden soll. Dies kann verwendet werden, um z.B. Erweiterungen oder benutzerdefinierte Zertifikate zu installieren, aber um benutzerdefinierte Präferenzen einzustellen, empfehlen wir die Verwendung des Eintrags `prefs` ([Preferences Object](#prefs_preferences_object)).

Profile werden im temporären Ordner des Systems erstellt. Hier wird das kodierte Profil extrahiert, wenn `profile` bereitgestellt wird. Standardmäßig erstellt der geckodriver ein neues Profil an diesem Ort.

Das effektive Profil, das von der WebDriver-Sitzung verwendet wird, wird dem Benutzer in der `moz:profile`-Fähigkeit in der [neuen Sitzungsantwort](/de/docs/Web/WebDriver/Reference/Classic/Commands/NewSession) zurückgegeben.

Um ein vorhandenes Profil im Dateisystem mit geckodriver zu verwenden, setzen Sie bitte das `args`-Feld auf `{"args": ["-profile", "/path/to/your/profile"]}`. Beachten Sie, dass, wenn Sie einen Remote-Client verwenden, der ein Server auf einem anderen System anvisiert, das Profil bereits auf dem Zielsystem vorhanden sein muss.

### `log` (Log-Objekt)

Um die Protokollierungsausführlichkeit von geckodriver und Firefox zu erhöhen, können Sie ein `log`-Objekt übergeben, das aussehen könnte wie `{"log": {"level": "trace"}}`, um alle Trace-Level-Logs und höher einzuschließen.

Ein JSON-Objekt, das eines dieser Felder haben kann:

#### `level` (String)

Setzen Sie die Ausführlichkeitsebene von geckodriver und Firefox. Verfügbare Ebenen sind `trace`, `debug`, `config`, `info`, `warn`, `error`, und `fatal`. Wenn nicht definiert, ist die Standardeinstellung `info`. Der Wert wird case-insensitiv behandelt.

### `prefs` (Preferences-Objekt)

Abbildung von Präferenznamen auf Präferenzwert, der ein String, ein Boolean oder ein Integer sein kann.

Ein JSON-Objekt mit einem Eintrag pro zu setzender Präferenzname. Die Präferenz wird in das [Profil](#profile_string) geschrieben, bevor Firefox gestartet wird. Eine vollständige Liste verfügbarer Präferenzen ist verfügbar, wenn Sie "about:config" in Ihrem Firefox-Browser besuchen. Einige davon sind in [dieser Quelle](https://searchfox.org/firefox-main/source/modules/libpref/init/all.js) dokumentiert.

Ein Beispiel für ein Präferenzobjekt:

```json
{
  "dom.ipc.processCount": 8,
  "javascript.options.showInConsole": false
}
```

### Android

Ab geckodriver 0.26.0 existieren zusätzliche Fähigkeiten, wenn Firefox oder eine Anwendung, die [GeckoView](https://wiki.mozilla.org/Mobile/GeckoView) einbettet, auf Android gesteuert werden muss:

#### `androidPackage` (String, erforderlich)

Der Paketname von Firefox, z.B. `org.mozilla.firefox`, `org.mozilla.firefox_beta`, oder `org.mozilla.fennec` je nach Release-Kanal, oder der Paketname der Anwendung, die GeckoView einbettet, z.B. `org.mozilla.geckoview_example`.

#### `androidActivity` (String, optional)

Der vollqualifizierte Klassenname der Aktivität, die gestartet werden soll, z.B. `.GeckoViewActivity`. Wenn nicht angegeben, wird die Standardaktivität des Pakets verwendet.

#### `androidDeviceSerial` (String, optional)

Die Seriennummer des Geräts, auf dem die Anwendung gestartet werden soll. Wenn nicht angegeben und mehrere Geräte angeschlossen sind, wird ein Fehler zurückgegeben.

#### `androidIntentArguments` (Array von Strings, optional)

Argumente, um die Absicht zu starten. Im Hintergrund verwendet geckodriver [Android am](https://developer.android.com/tools/adb#am), um die zu testende Android-Anwendung zu starten. Die angegebenen Absichtsargumente werden an den `am start`-Befehl angehängt. Siehe Androids [Spezifikation für Absichtsargumente](https://developer.android.com/tools/adb#IntentSpec) für Details. Dies ermöglicht Ihnen zu steuern, wie die Anwendung gestartet wird und optionale Extras zum Aktivieren und Deaktivieren von Funktionen einzuschließen. Zum Beispiel, um mit der Ansichtsaktion und einer angegebenen URL zu starten, bevor als Teil eines Tests navigiert wird, fügen Sie Folgendes ein:

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

Zum Beispiel, um eine boolesche Ergänzung zu spezifizieren, die mit [android.content.Intent.getBooleanExtra](<https://developer.android.com/reference/android/content/Intent#getBooleanExtra(java.lang.String,%20boolean)>) verarbeitet werden kann, fügen Sie Folgendes ein:

```json
{
  "androidIntentArguments": ["--ez", "customBooleanFlagName", "true"]
}
```

#### `env` (Env-Objekt)

Abbildung von Umgebungsvariablennamen auf Umgebungsvariablenwert, die beide Strings sein müssen und an den Anwendungsprozess weitergeleitet werden, der auf dem Android-Gerät läuft.

Ein JSON-Objekt mit einem Eintrag pro zu setzender Umgebungsvariable. Auf dem Desktop wird Firefox im Test mit der angegebenen Variablen in seiner Umgebung gestartet. Auf Android wird die GeckoView-basierte App die angegebene Variablen in den `env`-Block in ihrer Konfigurations-YAML aufnehmen.

Ein Beispiel für ein Env-Objekt:

```json
{
  "MOZ_LOG": "nsHttp:5",
  "MOZ_LOG_FILE": "/mnt/sdcard/log"
}
```

## Beispiel

Das folgende ist ein Beispiel für ein vollständiges [Fähigkeitenobjekt](/de/docs/Web/WebDriver/Reference/Capabilities), das eine bestimmte Firefox-Binärdatei auswählt, um mit einem vorbereiteten [Profil](#profile_string) vom Dateisystem im [headless mode](https://hacks.mozilla.org/2017/12/using-headless-mode-in-firefox/) zu laufen. Es erhöht auch die Anzahl der IPC-Prozesse durch eine Präferenz, schaltet Chrome-Fehler/Warnungen in der Konsole aus und ermöglicht eine ausführlichere Protokollierung:

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

Das `moz:firefoxOptions` muss—wie oben gezeigt—innerhalb von [`alwaysMatch`](/de/docs/Web/WebDriver/Reference/Capabilities#alwaysmatch) platziert werden oder in einem der [`firstMatch`](/de/docs/Web/WebDriver/Reference/Capabilities#firstmatch) [Fähigkeitenobjekte](/de/docs/Web/WebDriver/Reference/Capabilities), wie hier gezeigt:

```json
{
  "capabilities": {
    "firstMatch": [{ "moz:firefoxOptions": {} }]
  }
}
```

### Android

Dies führt die GeckoView-Beispielanwendung aus, wie sie auf dem ersten Android-Emulator installiert ist, der auf dem Host-Computer läuft:

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
- [New Session](/de/docs/Web/WebDriver/Reference/Classic/Commands/NewSession) Befehl
