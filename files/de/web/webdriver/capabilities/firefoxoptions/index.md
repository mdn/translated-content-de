---
title: firefoxOptions
slug: Web/WebDriver/Capabilities/firefoxOptions
l10n:
  sourceCommit: e03b13c7e157ec7b7bb02a6c7c4854b862195905
---

{{QuickLinksWithSubpages("/de/docs/Web/WebDriver/Capabilities")}}

Die **`moz:firefoxOptions`-Fähigkeit** ist ein namensraumbegrenzter Satz von Fähigkeiten, die speziell für [Firefox](https://www.mozilla.org/en-US/firefox/) sind. Sie wird verwendet, um das Verhalten von Firefox zu steuern und kann als Mitglied von [`alwaysMatch`](/de/docs/Web/WebDriver/Capabilities#alwaysmatch) oder als Mitglied eines der [`firstMatch`](/de/docs/Web/WebDriver/Capabilities#firstmatch)-Einträge verwendet werden.

Sie wird verwendet, um Optionen zu definieren, die steuern, wie Firefox gestartet und ausgeführt wird.

`moz:firefoxOptions` ist ein JSON-Objekt, das eines der folgenden Felder enthalten kann:

##### `binary` (string)

Absoluter Pfad zur benutzerdefinierten Firefox-Binärdatei, die verwendet werden soll.

Unter macOS können Sie entweder den Pfad zum Anwendungspaket angeben, also `/Applications/Firefox.app`, oder den absoluten Pfad zur ausführbaren Binärdatei innerhalb dieses Pakets, zum Beispiel `/Applications/Firefox.app/Contents/MacOS/firefox-bin`.

geckodriver versucht, den Standard-Speicherort von Firefox auf dem aktuellen System abzuleiten, wenn nicht definiert. Die Standard-Speicherorte von Firefox sind:

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">System</th>
      <th scope="col">Standardspeicherort</th>
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
          Erster <code>firefox</code>, der im Systempfad gefunden wurde. Dies entspricht dem Ergebnis des Befehls
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

Kommandozeilenargumente, die an die Firefox-Binärdatei übergeben werden sollen. Diese müssen den führenden Bindestrich (`-`) dort enthalten, wo erforderlich, z.B. `["-headless"]`.

Um geckodriver ein vorhandenes [Profil](#profile_string) im lokalen Dateisystem übernehmen zu lassen, können Sie `["-profile", "/path/to/profile"]` übergeben. Muss jedoch ein Profil auf eine Zielmaschine übertragen werden, wird empfohlen, den `profile`-Eintrag zu verwenden.

##### `profile` (string)

Base64-codiertes ZIP eines Profilverzeichnisses, das für die Firefox-Instanz verwendet werden soll. Dies kann verwendet werden, um z.B. Erweiterungen oder benutzerdefinierte Zertifikate zu installieren, aber für die Einstellung benutzerdefinierter Präferenzen empfehlen wir die Verwendung des `prefs` ([Preferences Object](#prefs_preferences_object))-Eintrags.

Profile werden im temporären Ordner des Systems erstellt. Hier wird das codierte Profil entpackt, wenn `profile` bereitgestellt wird. Standardmäßig erstellt geckodriver ein neues Profil in diesem Speicherort.

Das verwendete Profil in der WebDriver-Sitzung wird dem Benutzer in der Fähigkeit `moz:profile` in der [neuen Sitzungsantwort](/de/docs/Web/WebDriver/Commands/NewSession) zurückgegeben.

Um geckodriver ein vorhandenes Profil im Dateisystem übernehmen zu lassen, setzen Sie bitte das `args`-Feld auf `{"args": ["-profile", "/path/to/your/profile"]}`. Beachten Sie, dass, wenn Sie einen Remote-Client verwenden, der auf einen Server in einem anderen System abzielt, das Profil bereits auf dem Zielsystem existieren muss.

##### `log` (Log-Objekt)

Um die Protokollierausführlichkeit von geckodriver und Firefox zu erhöhen, können Sie ein [`log`](#log_log_object)-Objekt übergeben, das so aussehen kann: `{"log": {"level": "trace"}}`, um alle Trace-Level-Logs und darüber einzuschließen.

##### `prefs` (Preferences-Objekt)

Zuordnung von Präferenznamen zu Präferenzwerten, die ein String, ein Boolean oder ein Integer sein können.

### Android

Ab geckodriver 0.26.0 existieren zusätzliche Fähigkeiten, wenn Firefox oder eine Anwendung, die [GeckoView](https://wiki.mozilla.org/Mobile/GeckoView) einbettet, auf Android gesteuert werden soll:

#### `androidPackage` (string, erforderlich)

Der Paketname von Firefox, z.B. `org.mozilla.firefox`, `org.mozilla.firefox_beta`, oder `org.mozilla.fennec` abhängig vom Releasekanal, oder der Paketname der Anwendung, die GeckoView einbettet, z.B. `org.mozilla.geckoview_example`.

#### `androidActivity` (string, optional)

Der vollqualifizierte Klassenname der zu startenden Aktivität, z.B. `.GeckoViewActivity`. Wenn nicht angegeben, wird die Standardaktivität des Pakets verwendet.

#### `androidDeviceSerial` (string, optional)

Die Seriennummer des Geräts, auf dem die Anwendung gestartet werden soll. Wird nicht angegeben und sind mehrere Geräte angeschlossen, wird ein Fehler zurückgegeben.

#### `androidIntentArguments` (Array von Strings, optional)

Argumente zum Starten des Intents. Im Hintergrund verwendet geckodriver [Android am](https://developer.android.com/tools/adb#am), um die zu testende Android-Anwendung zu starten. Die angegebenen Intent-Argumente werden dem `am start`-Befehl hinzugefügt. Details finden Sie in Androids [Spezifikation für Intent-Argumente](https://developer.android.com/tools/adb#IntentSpec). Dies ermöglicht die Steuerung, wie die Anwendung gestartet wird, und das Einfügen optionaler Extras zum Aktivieren und Deaktivieren von Funktionen. Beispielsweise, um mit der Ansicht Aktion zu starten und eine bestimmte URL festzulegen, bevor als Teil eines Tests navigiert wird, fügen Sie Folgendes hinzu:

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

Um beispielsweise ein boolesches Extra anzugeben, das mit [android.content.Intent.getBooleanExtra](<https://developer.android.com/reference/android/content/Intent#getBooleanExtra(java.lang.String,%20boolean)>) verarbeitet werden kann, fügen Sie Folgendes hinzu:

```json
{
  "androidIntentArguments": ["--ez", "customBooleanFlagName", "true"]
}
```

#### `env` (Env-Objekt)

Zuordnung von Umgebungsvariablennamen zu Umgebungsvariablenwerten, die beide Strings sein müssen, die an den Anwendungsprozess, der auf dem Android-Gerät läuft, weitergeleitet werden.

### Log-Objekt

Ein JSON-Objekt, das eines dieser Felder haben kann:

#### `level` (string)

Legen Sie die Protokollierausführlichkeit von geckodriver und Firefox fest. Verfügbare Ebenen sind `trace`, `debug`, `config`, `info`, `warn`, `error` und `fatal`. Wenn undefined gelassen, ist der Standard `info`. Der Wert wird ohne Berücksichtigung der Groß-/Kleinschreibung behandelt.

### Preferences-Objekt

Ein JSON-Objekt mit einem Eintrag pro festzulegender Präferenz. Die Präferenz wird in das [Profil](#profile_string) geschrieben, bevor Firefox gestartet wird. Eine vollständige Liste der verfügbaren Präferenzen ist verfügbar, indem Sie "about:config" in Ihrem Firefox-Browser besuchen. Einige dieser Präferenzen sind in [dieser Quelle](https://searchfox.org/mozilla-central/source/modules/libpref/init/all.js) dokumentiert.

Ein Beispiel für ein Präferenzobjekt:

```json
{
  "dom.ipc.processCount": 8,
  "javascript.options.showInConsole": false
}
```

### Env-Objekt

Ein JSON-Objekt mit einem Eintrag pro festzulegender Umgebungsvariable. Auf dem Desktop wird der zu testende Firefox mit der angegebenen Variable in seiner Umgebung gestartet. Auf Android wird die auf GeckoView-basierende App die gegebene Variable dem `env` Block in ihrer Konfigurations-YAML hinzufügen.

Ein Beispiel für ein Env-Objekt:

```json
{
  "MOZ_LOG": "nsHttp:5",
  "MOZ_LOG_FILE": "/mnt/sdcard/log"
}
```

## Beispiel

Das folgende ist ein Beispiel für ein vollständiges [Fähigkeitenobjekt](/de/docs/Web/WebDriver/Capabilities), das ein spezifisches Firefox-Binärprogramm auswählt, um mit einem vorbereiteten [Profil](#profile_string) vom Dateisystem im [Headless-Mode](https://hacks.mozilla.org/2017/12/using-headless-mode-in-firefox/) zu laufen. Es erhöht auch die Anzahl der IPC-Prozesse über eine Präferenz, schaltet Chrome-Fehler/Warnungen in der Konsole aus und ermöglicht ausführlichere Protokollierung:

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

Die `moz:firefoxOptions` müssen—wie oben—innerhalb von [`alwaysMatch`](/de/docs/Web/WebDriver/Capabilities#alwaysmatch), oder in einem der [`firstMatch`](/de/docs/Web/WebDriver/Capabilities#firstmatch) [Fähigkeitenobjekte](/de/docs/Web/WebDriver/Capabilities) wie hier platziert werden:

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

Dies führt die GeckoView-Beispielanwendung aus, wie sie auf dem ersten auf dem Host-Rechner laufenden Android-Emulator installiert ist:

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
- [Chrome-spezifische WebDriver-Fähigkeiten](https://developer.chrome.com/docs/chromedriver/capabilities)
  (`goog:chromeOptions)`
- [Liste der WebDriver-Fähigkeiten](/de/docs/Web/WebDriver/Capabilities)
- [Neuer Sitzungsbefehl](/de/docs/Web/WebDriver/Commands/NewSession)

{{QuickLinksWithSubpages}}
