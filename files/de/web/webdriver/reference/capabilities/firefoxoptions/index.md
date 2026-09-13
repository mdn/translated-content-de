---
title: firefoxOptions
slug: Web/WebDriver/Reference/Capabilities/firefoxOptions
l10n:
  sourceCommit: e3a2272d272f21ea38e5fff9bd6ccec2d0dfb1a8
---

Die **`moz:firefoxOptions`-Capability** ist ein namensgebundener Satz von
Capabilities, die spezifisch für [Firefox](https://www.firefox.com/en-US/) sind. Sie wird verwendet, um das
Verhalten von Firefox zu steuern, und kann als Mitglied von
[`alwaysMatch`](/de/docs/Web/WebDriver/Reference/Capabilities#alwaysmatch) oder als Mitglied eines der
[`firstMatch`](/de/docs/Web/WebDriver/Reference/Capabilities#firstmatch)-Einträge verwendet werden.

Sie wird verwendet, um Optionen zu definieren, die steuern, wie Firefox gestartet wird und ausgeführt wird.

## Wert

`moz:firefoxOptions` ist ein JSON-Objekt, das eines der folgenden Felder enthalten kann:

### `binary` (string)

Absoluter Pfad zur zu verwendenden benutzerdefinierten Firefox-Binärdatei.

Unter macOS können Sie entweder den Pfad zum Anwendungs-Bundle, also `/Applications/Firefox.app`, oder den
absoluten Pfad zur ausführbaren Binärdatei innerhalb dieses Bundles angeben, zum Beispiel
`/Applications/Firefox.app/Contents/MacOS/firefox-bin`.

Wenn keine Angabe erfolgt, versucht geckodriver, den Standardort von Firefox auf dem aktuellen System zu ermitteln. Die
Standardorte von Firefox sind:

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">System</th>
      <th scope="col">Standardort</th>
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
          Das erste im Systempfad gefundene <code>firefox</code>. Dies entspricht
          der Ausgabe der Ausführung von
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

Befehlszeilenargumente, die an die Firefox-Binärdatei übergeben werden. Diese müssen gegebenenfalls den führenden Bindestrich (`-`) enthalten,
z. B. `["-headless"]`.

Damit geckodriver ein vorhandenes [Profil](#profile_string) im lokalen Dateisystem verwendet, können Sie
`["-profile", "/path/to/profile"]` übergeben. Wenn ein Profil jedoch auf einen Zielrechner übertragen werden muss, wird
empfohlen, den Eintrag `profile` zu verwenden.

### `profile` (string)

Base64-kodierte ZIP-Datei eines Profilverzeichnisses, das für die Firefox-Instanz verwendet werden soll. Dies kann beispielsweise verwendet werden, um
Erweiterungen oder benutzerdefinierte Zertifikate zu installieren. Zum Festlegen benutzerdefinierter Einstellungen empfehlen wir jedoch stattdessen den Eintrag `prefs` ([Preferences-Objekt](#prefs_preferences_object)).

Profile werden im temporären Ordner des Systems erstellt. Dort wird auch das kodierte Profil extrahiert, wenn
`profile` angegeben wird. Standardmäßig erstellt geckodriver an diesem Ort ein neues Profil.

Das effektive Profil, das von der WebDriver-Sitzung verwendet wird, wird dem Benutzer in der Capability `moz:profile`
in der [Antwort auf eine neue Sitzung](/de/docs/Web/WebDriver/Reference/Classic/Commands/NewSession) zurückgegeben.

Damit geckodriver ein vorhandenes Profil im Dateisystem verwendet, setzen Sie das Feld `args` auf
`{"args": ["-profile", "/path/to/your/profile"]}`. Beachten Sie, dass das Profil bereits auf dem Zielsystem vorhanden sein muss, wenn Sie einen Remote-Client verwenden, der auf einen Server
auf einem anderen System abzielt.

### `log` (Log-Objekt)

Um die Ausführlichkeit der Protokollierung von geckodriver und Firefox zu erhöhen, können Sie ein `log`-Objekt
übergeben, das wie `{"log": {"level": "trace"}}` aussehen kann, um alle Protokolle der Trace-Ebene und höher einzubeziehen.

Ein JSON-Objekt, das eines dieser Felder enthalten kann:

#### `level` (string)

Legt die Ausführlichkeitsstufe von geckodriver und Firefox fest. Verfügbare Stufen sind `trace`, `debug`,
`config`, `info`, `warn`, `error` und `fatal`. Wenn keine Angabe erfolgt,
ist der Standardwert `info`. Der Wert wird ohne Berücksichtigung der Groß- und Kleinschreibung behandelt.

### `prefs` (Preferences-Objekt)

Zuordnung von Einstellungsname zu Einstellungswert, der ein String, ein Boolean oder eine Ganzzahl sein kann.

Ein JSON-Objekt mit einem Eintrag pro festzulegender Einstellung. Die Einstellung wird vor dem Start von Firefox in das [Profil](#profile_string) geschrieben. Eine vollständige Liste der verfügbaren Einstellungen erhalten Sie, indem Sie
in Ihrem Firefox-Browser „about:config“ aufrufen. Einige davon sind in [dieser Quelldatei](https://searchfox.org/firefox-main/source/modules/libpref/init/all.js) dokumentiert.

Ein Beispiel für ein Einstellungsobjekt:

```json
{
  "dom.ipc.processCount": 8,
  "javascript.options.showInConsole": false
}
```

### Android

Ab geckodriver 0.26.0 gibt es zusätzliche Capabilities, wenn Firefox oder eine Anwendung, die [GeckoView](https://wiki.mozilla.org/Mobile/GeckoView) einbettet, unter Android gesteuert werden soll:

#### `androidPackage` (string, erforderlich)

Der Paketname von Firefox, z. B. `org.mozilla.firefox`,
`org.mozilla.firefox_beta` oder `org.mozilla.fennec`, abhängig vom Release-Kanal,
oder der Paketname der Anwendung, die GeckoView einbettet, z. B. `org.mozilla.geckoview_example`.

#### `androidActivity` (string, optional)

Der vollständig qualifizierte Klassenname der zu startenden Activity, z. B. `.GeckoViewActivity`. Wenn
keine Angabe erfolgt, wird die Standard-Activity des Pakets verwendet.

#### `androidDeviceSerial` (string, optional)

Die Seriennummer des Geräts, auf dem die Anwendung gestartet werden soll. Wenn keine Angabe erfolgt und mehrere Geräte
angeschlossen sind, wird ein Fehler zurückgegeben.

#### `androidIntentArguments` (Array von Strings, optional)

Argumente, mit denen der Intent gestartet wird. Intern verwendet geckodriver [Android am](https://developer.android.com/tools/adb#am), um die zu testende Android-Anwendung
zu starten. Die angegebenen Intent-Argumente werden an den Befehl `am start` angehängt. Weitere
Einzelheiten finden Sie in der Android-[Spezifikation für Intent-Argumente](https://developer.android.com/tools/adb#IntentSpec).
Damit können Sie steuern, wie die Anwendung gestartet wird, und optionale Extras zum Aktivieren und
Deaktivieren von Funktionen einbeziehen. Um beispielsweise vor der Navigation im Rahmen eines
Tests mit der View-Aktion und einer angegebenen URL zu starten, fügen Sie Folgendes ein:

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

Um beispielsweise ein Boolean-Extra anzugeben, das mit [android.content.Intent.getBooleanExtra](<https://developer.android.com/reference/android/content/Intent#getBooleanExtra(java.lang.String,%20boolean)>) verarbeitet werden kann, fügen Sie Folgendes ein:

```json
{
  "androidIntentArguments": ["--ez", "customBooleanFlagName", "true"]
}
```

#### `env` (Env-Objekt)

Zuordnung von Umgebungsvariablenname zu Umgebungsvariablenwert, die beide Strings sein müssen und an den auf dem Android-Gerät ausgeführten Anwendungsprozess weitergeleitet werden.

Ein JSON-Objekt mit einem Eintrag pro festzulegender Umgebungsvariable. Auf Desktop-Systemen wird der zu testende Firefox mit
der angegebenen Variable in seiner Umgebung gestartet. Unter Android wird bei der GeckoView-basierten App die angegebene Variable zum
`env`-Block in ihrer Konfigurations-YAML hinzugefügt.

Ein Beispiel für ein env-Objekt:

```json
{
  "MOZ_LOG": "nsHttp:5",
  "MOZ_LOG_FILE": "/mnt/sdcard/log"
}
```

## Beispiel

Im Folgenden sehen Sie ein Beispiel für ein vollständiges [Capabilities-Objekt](/de/docs/Web/WebDriver/Reference/Capabilities), das
eine bestimmte Firefox-Binärdatei auswählt, die mit einem vorbereiteten [Profil](#profile_string) aus dem Dateisystem im [Headless-Modus](https://hacks.mozilla.org/2017/12/using-headless-mode-in-firefox/) ausgeführt wird. Außerdem erhöht es die Anzahl der IPC-Prozesse
über eine Einstellung, deaktiviert Chrome-Fehler/-Warnungen in der Konsole und aktiviert eine ausführlichere Protokollierung:

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

Die `moz:firefoxOptions` muss – wie oben – innerhalb von
[`alwaysMatch`](/de/docs/Web/WebDriver/Reference/Capabilities#alwaysmatch) oder in einem der
[`firstMatch`](/de/docs/Web/WebDriver/Reference/Capabilities#firstmatch)-[Capabilities-Objekte](/de/docs/Web/WebDriver/Reference/Capabilities) platziert werden, wie hier zu sehen:

```json
{
  "capabilities": {
    "firstMatch": [{ "moz:firefoxOptions": {} }]
  }
}
```

### Android

Dies führt die GeckoView-Beispielanwendung aus, wie sie auf dem ersten Android-Emulator installiert ist, der auf dem Host-Rechner ausgeführt wird:

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

- [Dokumentation von geckodriver zu unterstützten Firefox-Capabilities](https://firefox-source-docs.mozilla.org/testing/geckodriver/Capabilities.html)
- [Chrome-spezifische WebDriver-Capabilities](https://developer.chrome.com/docs/chromedriver/capabilities)
  (`goog:chromeOptions`)
- [Liste der WebDriver-Capabilities](/de/docs/Web/WebDriver/Reference/Capabilities)
- Befehl [New Session](/de/docs/Web/WebDriver/Reference/Classic/Commands/NewSession)
