---
title: firefoxOptionen
slug: Web/WebDriver/Capabilities/firefoxOptions
l10n:
  sourceCommit: e03b13c7e157ec7b7bb02a6c7c4854b862195905
---

{{QuickLinksWithSubpages("/de/docs/Web/WebDriver/Capabilities")}}

Die **`moz:firefoxOptions`-Fähigkeit** ist eine Namespaced-Sammlung von Fähigkeiten, die spezifisch für [Firefox](https://www.mozilla.org/en-US/firefox/) sind. Sie wird verwendet, um das Verhalten von Firefox zu steuern und kann als Mitglied von [`alwaysMatch`](/de/docs/Web/WebDriver/Capabilities#alwaysmatch) oder als Mitglied eines der [`firstMatch`](/de/docs/Web/WebDriver/Capabilities#firstmatch)-Einträge verwendet werden.

Sie wird genutzt, um Optionen zu definieren, die steuern, wie Firefox gestartet und ausgeführt wird.

`moz:firefoxOptions` ist ein JSON-Objekt, das eines der folgenden Felder enthalten kann:

##### `binary` (string)

Absoluter Pfad zur benutzerdefinierten Firefox-Binärdatei, die verwendet werden soll.

Unter macOS können Sie entweder den Pfad zum Anwendungspaket angeben, z.B. `/Applications/Firefox.app`, oder den absoluten Pfad zur ausführbaren Binärdatei innerhalb dieses Pakets, beispielsweise `/Applications/Firefox.app/Contents/MacOS/firefox-bin`.

geckodriver versucht, den Standardstandort von Firefox im aktuellen System zu ermitteln, wenn er nicht definiert ist. Die Standardstandorte von Firefox sind:

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
          Der erste gefundene <code>firefox</code> im Systempfad. Dies entspricht der Ausgabe des Befehls
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

##### `args` (Array von Strings)

Befehlszeilenargumente, die an die Firefox-Binärdatei übergeben werden. Diese müssen das führende Minuszeichen (`-`) enthalten, wo erforderlich, z.B. `["-headless"]`.

Um geckodriver dazu zu bringen, ein vorhandenes [Profil](#profile_string) auf dem lokalen Dateisystem zu erkennen, können Sie `["-profile", "/path/to/profile"]` übergeben. Aber wenn ein Profil auf ein Zielgerät übertragen werden muss, wird empfohlen, den `profile`-Eintrag zu verwenden.

##### `profile` (string)

Base64-kodiertes ZIP eines Profilverzeichnisses, das für die Firefox-Instanz verwendet werden soll. Dies kann z.B. verwendet werden, um Erweiterungen oder benutzerdefinierte Zertifikate zu installieren, aber für das Einstellen benutzerdefinierter Präferenzen empfehlen wir die Verwendung des `prefs` ([Preferences Object](#prefs_preferences_object)) Eintrags.

Profile werden im temporären Ordner des Systems erstellt. Hier wird auch das codierte Profil extrahiert, wenn `profile` bereitgestellt wird. Standardmäßig erstellt geckodriver ein neues Profil an diesem Ort.

Das effektiv genutzte Profil der WebDriver-Sitzung wird dem Benutzer in der `moz:profile`-Fähigkeit in der [neuen Sitzungsantwort](/de/docs/Web/WebDriver/Commands/NewSession) zurückgegeben.

Um geckodriver dazu zu bringen, ein vorhandenes Profil im Dateisystem zu erkennen, setzen Sie bitte das `args`-Feld auf `{"args": ["-profile", "/path/to/your/profile"]}`. Beachten Sie, dass, wenn Sie einen Remote-Client verwenden, der auf einen Server in einem anderen System zielt, das Profil bereits auf dem Zielsystem existieren muss.

##### `log` (Log-Objekt)

Um die Protokollierungsverbindlichkeit von geckodriver und Firefox zu erhöhen, können Sie ein [`log`](#log_log_object)-Objekt übergeben, das so aussieht: `{"log": {"level": "trace"}}`, um alle Protokolle auf Spur-Ebene und höher einzuschließen.

##### `prefs` (Preferences-Objekt)

Map von Präferenznamen zu Präferenzwerten, die ein String, ein Boolean oder ein Integer sein können.

### Android

Ab geckodriver 0.26.0 bestehen zusätzliche Fähigkeiten, wenn Firefox oder eine Anwendung, die [GeckoView](https://wiki.mozilla.org/Mobile/GeckoView) einbettet, auf Android gesteuert werden muss:

#### `androidPackage` (string, erforderlich)

Der Paketname von Firefox, z.B. `org.mozilla.firefox`, `org.mozilla.firefox_beta` oder `org.mozilla.fennec` je nach Release-Kanal, oder der Paketname der Anwendung, die GeckoView einbettet, z.B. `org.mozilla.geckoview_example`.

#### `androidActivity` (string, optional)

Der vollständig qualifizierte Klassenname der zu startenden Aktivität, z.B. `.GeckoViewActivity`. Wenn nicht angegeben, wird die Standardaktivität des Pakets verwendet.

#### `androidDeviceSerial` (string, optional)

Die Seriennummer des Geräts, auf dem die Anwendung gestartet werden soll. Wenn nicht angegeben und mehrere Geräte angeschlossen sind, wird ein Fehler zurückgegeben.

#### `androidIntentArguments` (Array von Strings, optional)

Argumente, um den Intent mit zu starten. Im Hintergrund verwendet geckodriver [Android am](https://developer.android.com/tools/adb#am), um die Android-Anwendung unter Test zu starten. Die angegebenen Intent-Argumente werden dem `am start`-Befehl angehängt. Siehe Androids [Spezifikation für Intent-Argumente](https://developer.android.com/tools/adb#IntentSpec) für Details. Dies ermöglicht die Kontrolle, wie die Anwendung gestartet wird und das Hinzufügen optionaler Extras zum Aktivieren und Deaktivieren von Funktionen. Zum Beispiel, um mit der View-Aktion und einer angegebenen URL vor dem Navigieren als Teil eines Tests zu starten, fügen Sie hinzu:

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

Zum Beispiel, um ein Boolean-Extra zu spezifizieren, das mit [android.content.Intent.getBooleanExtra](<https://developer.android.com/reference/android/content/Intent#getBooleanExtra(java.lang.String,%20boolean)>) verarbeitet werden kann, fügen Sie hinzu:

```json
{
  "androidIntentArguments": ["--ez", "customBooleanFlagName", "true"]
}
```

#### `env` (Env-Objekt)

Map von Umgebungsvariablennamen zu Umgebungsvariablenwerten, die beide Strings sein müssen, die an den Anwendungsprozess auf dem Android-Gerät weitergeleitet werden.

### Log-Objekt

Ein JSON-Objekt, das eines der folgenden Felder haben kann:

#### `level` (string)

Legen Sie die Protokollebene von geckodriver und Firefox fest. Verfügbare Ebenen sind `trace`, `debug`, `config`, `info`, `warn`, `error` und `fatal`. Wenn undefiniert, ist der Standard `info`. Der Wert wird unbeachtet der Groß- und Kleinschreibung behandelt.

### Preferences-Objekt

Ein JSON-Objekt mit einem Eintrag pro zu setzender Präferenz. Die Präferenz wird vor dem Starten von Firefox in das [Profil](#profile_string) geschrieben. Eine vollständige Liste der verfügbaren Präferenzen ist durch den Besuch von "about:config" in Ihrem Firefox-Browser verfügbar. Einige davon sind in dieser [Quelle](https://searchfox.org/mozilla-central/source/modules/libpref/init/all.js) dokumentiert.

Ein Beispiel für ein Präferenzobjekt:

```json
{
  "dom.ipc.processCount": 8,
  "javascript.options.showInConsole": false
}
```

### Env-Objekt

Ein JSON-Objekt mit einem Eintrag pro zu setzender Umgebungsvariablen. Auf dem Desktop wird der getestete Firefox mit der gegebenen Variablen in seiner Umgebung gestartet. Auf Android wird die GeckoView-basierte App die gegebene Variable dem `env`-Block in seiner Konfiguration YAML hinzufügen.

Ein Beispiel für ein Env-Objekt:

```json
{
  "MOZ_LOG": "nsHttp:5",
  "MOZ_LOG_FILE": "/mnt/sdcard/log"
}
```

## Beispiel

Im Folgenden finden Sie ein Beispiel für ein vollständiges [Capabilities-Objekt](/de/docs/Web/WebDriver/Capabilities), das eine bestimmte Firefox-Binärdatei auswählt, um mit einem vorbereiteten [Profil](#profile_string) vom Dateisystem im [Kopfmodus](https://hacks.mozilla.org/2017/12/using-headless-mode-in-firefox/) ausgeführt zu werden. Es erhöht auch die Anzahl der IPC-Prozesse durch eine Präferenz, deaktiviert Chrome-Fehler/Warnungen in der Konsole und ermöglicht ausführlichere Protokollierung:

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

Die `moz:firefoxOptions` müssen – wie oben – innerhalb von [`alwaysMatch`](/de/docs/Web/WebDriver/Capabilities#alwaysmatch) oder in einem der [`firstMatch`](/de/docs/Web/WebDriver/Capabilities#firstmatch) [Capabilities-Objekte](/de/docs/Web/WebDriver/Capabilities) platziert werden, wie hier zu sehen:

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

Dies führt die GeckoView-Beispielanwendung aus, wie sie auf dem ersten Android-Emulator installiert ist, der auf der Hostmaschine läuft:

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
- [Chrome-spezifische WebDriver-Fähigkeiten](https://developer.chrome.com/docs/chromedriver/capabilities)
  (`goog:chromeOptions)`)
- [Liste der WebDriver-Fähigkeiten](/de/docs/Web/WebDriver/Capabilities)
- [Neuer Sitzungsbefehl](/de/docs/Web/WebDriver/Commands/NewSession)

{{QuickLinksWithSubpages}}
