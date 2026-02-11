---
title: firefoxOptions
slug: Web/WebDriver/Reference/Classic/Capabilities/firefoxOptions
l10n:
  sourceCommit: 225de04b84b717433ffeb3bb0cf5ceddac9653ea
---

Die **`moz:firefoxOptions`-Fähigkeit** ist eine namensbasierte Sammlung von
Fähigkeiten, die speziell für [Firefox](https://www.firefox.com/en-US/) sind. Sie wird verwendet, um das Verhalten von Firefox zu steuern und kann als Mitglied von [`alwaysMatch`](/de/docs/Web/WebDriver/Reference/Classic/Capabilities#alwaysmatch) oder als Mitglied eines der [`firstMatch`](/de/docs/Web/WebDriver/Reference/Classic/Capabilities#firstmatch)-Einträge verwendet werden.

Sie wird verwendet, um Optionen zu definieren, die steuern, wie Firefox gestartet und ausgeführt wird.

## Wert

`moz:firefoxOptions` ist ein JSON-Objekt, das eines der folgenden Felder enthalten kann:

### `binary` (String)

Absoluter Pfad zu dem benutzerdefinierten Firefox-Binärprogramm, das verwendet werden soll.

Unter macOS können Sie entweder den Pfad zum Anwendungsbundle angeben, d.h. `/Applications/Firefox.app`, oder den absoluten Pfad zum ausführbaren Binärprogramm in diesem Bundle, z. B. `/Applications/Firefox.app/Contents/MacOS/firefox-bin`.

Der geckodriver versucht, den Standard-Speicherort von Firefox auf dem aktuellen System abzuleiten, wenn keine Angabe erfolgt. Die Standard-Speicherorte von Firefox sind:

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
          Erstes `firefox`, das im Systempfad gefunden wird. Dies entspricht der Ausgabe des Befehls
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

Kommandozeilenargumente, die an das Firefox-Binärprogramm übergeben werden sollen. Diese müssen den führenden Bindestrich (`-`) enthalten, wo erforderlich, z. B. `["-headless"]`.

Um einen vorhandenen [Profile](#profile_string) auf dem lokalen Dateisystem durch geckodriver verwenden zu lassen, können Sie `["-profile", "/path/to/profile"]` übergeben. Wenn jedoch ein Profil auf einen Zielcomputer übertragen werden muss, wird empfohlen, den `profile`-Eintrag zu verwenden.

### `profile` (String)

Base64-kodiertes ZIP eines Profilverzeichnisses, das für die Firefox-Instanz verwendet werden soll. Dies kann verwendet werden, um z. B. Erweiterungen oder benutzerdefinierte Zertifikate zu installieren. Für die Einstellung benutzerdefinierter Präferenzen empfehlen wir jedoch die Verwendung des `prefs` ([Preferences-Objekt](#prefs_preferences_object))-Eintrags.

Profile werden im temporären Ordner des Systems erstellt. Dies ist auch der Ort, an dem das kodierte Profil extrahiert wird, wenn `profile` angegeben ist. Standardmäßig erstellt geckodriver in diesem Speicherort ein neues Profil.

Das effektiv verwendete Profil in der WebDriver-Sitzung wird in der `moz:profile`-Fähigkeit in der [Antwort der neuen Sitzung](/de/docs/Web/WebDriver/Reference/Commands/NewSession) an den Benutzer zurückgegeben.

Um geckodriver ein vorhandenes Profil auf dem Dateisystem verwenden zu lassen, setzen Sie bitte das `args`-Feld auf `{"args": ["-profile", "/path/to/your/profile"]}`. Beachten Sie, dass, wenn Sie einen Remote-Client verwenden, der auf einen Server in einem anderen System abzielt, das Profil bereits auf dem Zielsystem vorhanden sein muss.

### `log` (Log-Objekt)

Um die Protokollierungsverbindlichkeit von geckodriver und Firefox zu erhöhen, können Sie ein `log`-Objekt übergeben, das so aussieht wie `{"log": {"level": "trace"}}`, um alle Trace-Level-Protokolle und höher einzuschließen.

Ein JSON-Objekt, das eines dieser Felder haben kann:

#### `level` (String)

Setzt das Level der Verbindlichkeit von geckodriver und Firefox. Verfügbare Stufen sind `trace`, `debug`, `config`, `info`, `warn`, `error` und `fatal`. Wenn nicht angegeben, ist der Standard `info`. Der Wert wird ohne Berücksichtigung der Groß- und Kleinschreibung behandelt.

### `prefs` (Preferences-Objekt)

Zuordnung von Präferenznamen zu Präferenzwerten, die ein String, ein Boolean oder ein Integer sein können.

Ein JSON-Objekt mit einem Eintrag pro zu setzender Präferenz. Die Präferenz wird vor dem Start von Firefox in das [Profile](#profile_string) geschrieben. Eine vollständige Liste der verfügbaren Präferenzen ist verfügbar, indem Sie "about:config" in Ihrem Firefox-Browser besuchen. Einige davon sind in [dieser Quelle](https://searchfox.org/firefox-main/source/modules/libpref/init/all.js) dokumentiert.

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

Der Paketname von Firefox, z. B. `org.mozilla.firefox`, `org.mozilla.firefox_beta` oder `org.mozilla.fennec` abhängig vom Kanal der Version oder der Paketname der Anwendung, die GeckoView einbettet, z. B. `org.mozilla.geckoview_example`.

#### `androidActivity` (String, optional)

Der vollständig qualifizierte Klassenname der zu startenden Aktivität, z. B. `.GeckoViewActivity`. Wenn nicht angegeben, wird die Standardaktivität des Pakets verwendet.

#### `androidDeviceSerial` (String, optional)

Die Seriennummer des Geräts, auf dem die Anwendung gestartet werden soll. Wenn nicht angegeben und mehrere Geräte angeschlossen sind, wird ein Fehler zurückgegeben.

#### `androidIntentArguments` (Array von Strings, optional)

Argumente, um den Intent zu starten. Im Hintergrund verwendet geckodriver [Android am](https://developer.android.com/tools/adb#am), um die zu testende Android-Anwendung zu starten. Die angegebenen Intent-Argumente werden dem `am start`-Befehl angehängt. Siehe die [Spezifikation für Intent-Argumente](https://developer.android.com/tools/adb#IntentSpec) von Android für Details. Dies ermöglicht die Steuerung, wie die Anwendung gestartet wird und das Einschließen optionaler Extras zum Aktivieren und Deaktivieren von Funktionen. Um beispielsweise mit der View-Aktion und einer angegebenen URL zu starten, bevor im Rahmen eines Tests navigiert wird, schließen Sie ein:

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

Um beispielsweise ein boolesches Extra anzugeben, das mit [android.content.Intent.getBooleanExtra](<https://developer.android.com/reference/android/content/Intent#getBooleanExtra(java.lang.String,%20boolean)>) verarbeitet werden kann, schließen Sie ein:

```json
{
  "androidIntentArguments": ["--ez", "customBooleanFlagName", "true"]
}
```

#### `env` (Env-Objekt)

Zuordnung von Umgebungsvariablennamen zu Umgebungsvariablenwerten, die beide Strings sein müssen und an den Anwendungsprozess auf dem Android-Gerät weitergeleitet werden.

Ein JSON-Objekt mit einem Eintrag pro zu setzender Umgebungsvariable. Auf dem Desktop wird Firefox unter den angegebenen Variablen in seiner Umgebung gestartet. Auf Android wird die auf GeckoView basierende App die angegebene Variable zum `env`-Block in ihrer Konfigurations-YAML hinzufügen.

Ein Beispiel für ein env-Objekt:

```json
{
  "MOZ_LOG": "nsHttp:5",
  "MOZ_LOG_FILE": "/mnt/sdcard/log"
}
```

## Beispiel

Das folgende Beispiel ist ein vollständiges Beispiel für ein [Capabilities-Objekt](/de/docs/Web/WebDriver/Reference/Classic/Capabilities) das ein bestimmtes Firefox-Binärprogramm auswählt, um mit einem vorbereiteten [Profile](#profile_string) vom Dateisystem im [Headless-Modus](https://hacks.mozilla.org/2017/12/using-headless-mode-in-firefox/) auszuführen. Es erhöht auch die Anzahl der IPC-Prozesse durch eine Präferenz, schaltet Chrome-Fehler/Warnungen in der Konsole ab und aktiviert eine detailliertere Protokollierung:

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

Die `moz:firefoxOptions` müssen—wie oben—innerhalb von [`alwaysMatch`](/de/docs/Web/WebDriver/Reference/Classic/Capabilities#alwaysmatch) oder in einem der [`firstMatch`](/de/docs/Web/WebDriver/Reference/Classic/Capabilities#firstmatch)-[Capabilities-Objekten](/de/docs/Web/WebDriver/Reference/Classic/Capabilities) platziert werden, wie hier gezeigt:

```json
{
  "capabilities": {
    "firstMatch": [{ "moz:firefoxOptions": {} }]
  }
}
```

### Android

Dies führt die GeckoView-Beispielanwendung aus, wie sie auf dem ersten Android-Emulator auf dem Host-Computer installiert ist:

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
- [Chrome-spezifische WebDriver-Fähigkeiten](https://developer.chrome.com/docs/chromedriver/capabilities) (`goog:chromeOptions`)
- [Liste der WebDriver-Fähigkeiten](/de/docs/Web/WebDriver/Reference/Classic/Capabilities)
- [Befehl für neue Sitzung](/de/docs/Web/WebDriver/Reference/Commands/NewSession)
