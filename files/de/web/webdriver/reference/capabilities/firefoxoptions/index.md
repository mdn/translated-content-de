---
title: firefoxOptions
slug: Web/WebDriver/Reference/Capabilities/firefoxOptions
l10n:
  sourceCommit: 676631fd27c8096c3ae3ceb2a6b4ffd6f687055f
---

Die **`moz:firefoxOptions`-Fähigkeit** ist ein namespaced Satz von Fähigkeiten, die spezifisch für [Firefox](https://www.firefox.com/en-US/) sind. Sie wird verwendet, um das Verhalten von Firefox zu steuern und kann sowohl als Mitglied von [`alwaysMatch`](/de/docs/Web/WebDriver/Reference/Capabilities#alwaysmatch) als auch als Mitglied eines der [`firstMatch`](/de/docs/Web/WebDriver/Reference/Capabilities#firstmatch)-Einträge verwendet werden.

Sie dient dazu, Optionen zu definieren, die steuern, wie Firefox gestartet und ausgeführt wird.

## Wert

`moz:firefoxOptions` ist ein JSON-Objekt, das beliebige der folgenden Felder enthalten kann:

### `binary` (String)

Absoluter Pfad zur benutzerdefinierten Firefox-Binärdatei, die verwendet werden soll.

Unter macOS können Sie entweder den Pfad zum Anwendungsbundle angeben, z. B. `/Applications/Firefox.app`, oder den absoluten Pfad zur ausführbaren Binärdatei innerhalb dieses Bundles, zum Beispiel `/Applications/Firefox.app/Contents/MacOS/firefox-bin`.

Geckodriver versucht, den Standardort von Firefox auf dem aktuellen System zu ermitteln, wenn er undefiniert gelassen wird. Die Standardorte von Firefox sind:

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
          Erstes <code>firefox</code>, das im Systempfad gefunden wird. Dies entspricht dem Ergebnis des Ausführens von
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

Kommandozeilenargumente, die an die Firefox-Binärdatei übergeben werden. Diese müssen das führende Minuszeichen (`-`) enthalten, wenn erforderlich, z.B. `["-headless"]`.

Um geckodriver ein vorhandenes [Profil](#profile_string) auf dem lokalen Dateisystem erkennen zu lassen, können Sie `["-profile", "/path/to/profile"]` übergeben. Wenn ein Profil jedoch auf eine Zielmaschine übertragen werden muss, wird empfohlen, den `profile`-Eintrag zu verwenden.

### `profile` (String)

Base64-kodierte ZIP eines Profilverzeichnisses, das für die Firefox-Instanz verwendet werden soll. Dies kann z.B. verwendet werden, um Erweiterungen oder benutzerdefinierte Zertifikate zu installieren. Für das Setzen benutzerdefinierter Präferenzen empfehlen wir jedoch die Verwendung des `prefs`-Eintrags ([Präferenzen-Objekt](#prefs_preferences_object)).

Profile werden im temporären Ordner des Systems erstellt. Dort wird auch das kodierte Profil extrahiert, wenn `profile` bereitgestellt wird. Standardmäßig erstellt geckodriver ein neues Profil an diesem Ort.

Das effektive Profil, das in der WebDriver-Sitzung verwendet wird, wird dem Benutzer in der `moz:profile`-Fähigkeit in der [neuen Sitzungsantwort](/de/docs/Web/WebDriver/Reference/Commands/NewSession) zurückgegeben.

Um geckodriver ein vorhandenes Profil im Dateisystem erkennen zu lassen, setzen Sie bitte das `args`-Feld auf `{"args": ["-profile", "/path/to/your/profile"]}`. Beachten Sie, dass das Profil bereits auf dem Zielsystem existieren muss, wenn Sie einen Remote-Client verwenden, der auf einem anderen System zielt.

### `log` (Log-Objekt)

Um die Protokollierungsverbosität von geckodriver und Firefox zu erhöhen, können Sie ein `log`-Objekt übergeben, das wie `{"log": {"level": "trace"}}` aussieht, um alle Trace-Level-Protokolle und höher einzuschließen.

Ein JSON-Objekt, das eines dieser Felder haben kann:

#### `level` (String)

Setzt die Verbositätsstufe von geckodriver und Firefox. Verfügbare Stufen sind `trace`, `debug`, `config`, `info`, `warn`, `error` und `fatal`. Wenn undefiniert gelassen, ist der Standard `info`. Der Wert wird ohne Berücksichtigung der Groß- und Kleinschreibung behandelt.

### `prefs` (Präferenzen-Objekt)

Zuordnung von Präferenznamen zu Präferenzwerten, die ein String, ein Boolean oder ein Integer sein können.

Ein JSON-Objekt mit einem Eintrag pro einzustellender Präferenz. Die Präferenz wird dem [Profil](#profile_string) vor dem Start von Firefox hinzugefügt. Eine vollständige Liste der verfügbaren Präferenzen ist verfügbar, wenn Sie "about:config" in Ihrem Firefox-Browser aufrufen. Einige davon sind in [dieser Quelle](https://searchfox.org/firefox-main/source/modules/libpref/init/all.js) dokumentiert.

Ein Beispiel für ein Präferenzobjekt:

```json
{
  "dom.ipc.processCount": 8,
  "javascript.options.showInConsole": false
}
```

### Android

Mit geckodriver 0.26.0 existieren zusätzliche Fähigkeiten, wenn Firefox oder eine Anwendung, die [GeckoView](https://wiki.mozilla.org/Mobile/GeckoView) einbettet, unter Android gesteuert werden muss:

#### `androidPackage` (String, erforderlich)

Der Paketname von Firefox, z.B. `org.mozilla.firefox`, `org.mozilla.firefox_beta` oder `org.mozilla.fennec`, abhängig vom Release-Kanal, oder der Paketname der Anwendung, die GeckoView einbettet, z.B. `org.mozilla.geckoview_example`.

#### `androidActivity` (String, optional)

Der vollqualifizierte Klassenname der zu startenden Aktivität, z.B. `.GeckoViewActivity`. Wenn nicht angegeben, wird die Standardaktivität des Pakets verwendet.

#### `androidDeviceSerial` (String, optional)

Die Seriennummer des Geräts, auf dem die Anwendung gestartet werden soll. Wenn nicht angegeben und mehrere Geräte angeschlossen sind, wird ein Fehler zurückgegeben.

#### `androidIntentArguments` (Array von Strings, optional)

Argumente für den Start des Intents. Im Hintergrund verwendet geckodriver [Android am](https://developer.android.com/tools/adb#am), um die zu testende Android-Anwendung zu starten. Die angegebenen Intent-Argumente werden dem `am start`-Befehl hinzugefügt. Siehe Androids [Spezifikation für Intent-Argumente](https://developer.android.com/tools/adb#IntentSpec) für Details. Dies ermöglicht es, zu steuern, wie die Anwendung gestartet wird, und optionale Extras zum Aktivieren und Deaktivieren von Features einzuschließen. Um beispielsweise mit der Ansichtaktion und einer angegebenen URL zu starten, bevor im Rahmen eines Tests navigiert wird, schließen Sie Folgendes ein:

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

Um zum Beispiel ein zusätzliches Boolean zu spezifizieren, das mit [android.content.Intent.getBooleanExtra](<https://developer.android.com/reference/android/content/Intent#getBooleanExtra(java.lang.String,%20boolean)>) verarbeitet werden kann, schließen Sie folgendes ein:

```json
{
  "androidIntentArguments": ["--ez", "customBooleanFlagName", "true"]
}
```

#### `env` (Env-Objekt)

Zuordnung des Namens der Umgebungsvariable zu ihrem Wert, die beide Strings sein müssen, die an den Anwendungsprozess auf dem Android-Gerät weitergeleitet werden.

Ein JSON-Objekt mit einem Eintrag pro zu setzender Umgebungsvariable. Auf dem Desktop wird der zu testende Firefox mit der gegebenen Variablen in seiner Umgebung gestartet. Auf Android wird die auf GeckoView basierende App die gegebene Variable im `env`-Block ihrer Konfigurations-YAML hinzugefügt.

Ein Beispiel für ein Env-Objekt:

```json
{
  "MOZ_LOG": "nsHttp:5",
  "MOZ_LOG_FILE": "/mnt/sdcard/log"
}
```

## Beispiel

Das Folgende ist ein Beispiel für ein vollständiges [Fähigkeiten-Objekt](/de/docs/Web/WebDriver/Reference/Capabilities), das ein spezifisches Firefox-Binärprogramm auswählt, um mit einem vorbereiteten [Profil](#profile_string) vom Dateisystem im [Headless-Modus](https://hacks.mozilla.org/2017/12/using-headless-mode-in-firefox/) auszuführen. Auch wird die Anzahl der IPC-Prozesse durch eine Präferenz erhöht, Chrome-Fehler/Warnungen in der Konsole werden deaktiviert und eine ausführlichere Protokollierung wird aktiviert:

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

Die `moz:firefoxOptions` müssen – wie oben – innerhalb von [`alwaysMatch`](/de/docs/Web/WebDriver/Reference/Capabilities#alwaysmatch) oder in einem der [`firstMatch`](/de/docs/Web/WebDriver/Reference/Capabilities#firstmatch) [Fähigkeiten-Objekte](/de/docs/Web/WebDriver/Reference/Capabilities) platziert werden, wie hier gezeigt:

```json
{
  "capabilities": {
    "firstMatch": [{ "moz:firefoxOptions": {} }]
  }
}
```

### Android

Dies führt die GeckoView-Beispielanwendung aus, wie sie auf dem ersten Android-Emulator installiert ist, der auf dem Host-Computer ausgeführt wird:

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
- [Chrome-spezifische WebDriver-Fähigkeiten](https://developer.chrome.com/docs/chromedriver/capabilities) (`goog:chromeOptions`)
- [Liste der WebDriver-Fähigkeiten](/de/docs/Web/WebDriver/Reference/Capabilities)
- [Neuer Sitzungsbefehl](/de/docs/Web/WebDriver/Reference/Commands/NewSession)
