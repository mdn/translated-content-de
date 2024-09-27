---
title: firefoxOptions
slug: Web/WebDriver/Capabilities/firefoxOptions
l10n:
  sourceCommit: e03b13c7e157ec7b7bb02a6c7c4854b862195905
---

{{QuickLinksWithSubpages("/de/docs/Web/WebDriver/Capabilities")}}

Die **Fähigkeit `moz:firefoxOptions`** ist ein namensraum-spezifisches Set von Fähigkeiten, das spezifisch für [Firefox](https://www.mozilla.org/de/firefox/) ist. Es wird verwendet, um das Verhalten von Firefox zu steuern und kann als Mitglied von [`alwaysMatch`](/de/docs/Web/WebDriver/Capabilities#alwaysmatch) oder als ein Mitglied eines der [`firstMatch`](/de/docs/Web/WebDriver/Capabilities#firstmatch)-Einträge verwendet werden.

Es wird verwendet, um Optionen zu definieren, die steuern, wie Firefox gestartet und ausgeführt wird.

`moz:firefoxOptions` ist ein JSON-Objekt, das eines der folgenden Felder enthalten kann:

##### `binary` (string)

Absoluter Pfad zum benutzerdefinierten Firefox-Binary, das verwendet werden soll.

Auf macOS können Sie entweder den Pfad zum Anwendungspaket angeben, also `/Applications/Firefox.app`, oder den absoluten Pfad zum ausführbaren Binary innerhalb dieses Pakets, zum Beispiel `/Applications/Firefox.app/Contents/MacOS/firefox-bin`.

geckodriver versucht, den Standard-Standort von Firefox auf dem aktuellen System abzuleiten, falls nicht definiert. Die Standard-Standorte von Firefox sind:

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">System</th>
      <th scope="col">Standard-Standort</th>
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
          Erstes <code>firefox</code>, das im Systempfad gefunden wird. Dies entspricht dem Ausgabeergebnis des Befehls <a href="https://manpages.debian.org/stretch/debianutils/which.1.de.html">which(1)</a>:
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
        <p>Vom Windows-Systemregister:</p>
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

##### `args` (array of strings)

Kommandozeilenargumente, die an das Firefox-Binary übergeben werden. Diese müssen den führenden Strich (`-`) enthalten, wo erforderlich, z.B. `["-headless"]`.

Um geckodriver ein vorhandenes [Profil](#profile_string) im lokalen Dateisystem erkennen zu lassen, können Sie `["-profile", "/path/to/profile"]` übergeben. Wenn jedoch ein Profil auf einen Zielrechner übertragen werden muss, wird empfohlen, den Eintrag `profile` zu verwenden.

##### `profile` (string)

Base64-kodiertes ZIP eines Profildirektoriums, das für die Firefox-Instanz verwendet wird. Dies kann z.B. verwendet werden, um Erweiterungen oder benutzerdefinierte Zertifikate zu installieren, aber um benutzerdefinierte Präferenzen festzulegen, empfehlen wir die Verwendung des `prefs` ([Preferences Object](#prefs_preferences_object)) Eintrags.

Profile werden im temporären Ordner des Systems erstellt. Dies ist auch der Ort, an dem das kodierte Profil extrahiert wird, wenn `profile` angegeben ist. Standardmäßig erstellt geckodriver ein neues Profil an diesem Ort.

Das effektive Profil, das von der WebDriver-Sitzung verwendet wird, wird dem Benutzer in der Fähigkeit `moz:profile` in der [neuen Antwortsitzung](/de/docs/Web/WebDriver/Commands/NewSession) zurückgegeben.

Um geckodriver ein vorhandenes Profil auf dem Dateisystem erkennen zu lassen, setzen Sie bitte das `args`-Feld auf `{"args": ["-profile", "/path/to/your/profile"]}`. Beachten Sie, dass, wenn Sie einen Remote-Client verwenden, der auf einen Server auf einem anderen System zielt, das Profil bereits auf dem Zielsystem existieren muss.

##### `log` (Log-Objekt)

Um die Protokollierungsintensität von geckodriver und Firefox zu erhöhen, können Sie ein [`log`](#log_log_object)-Objekt übergeben, das z.B. wie `{"log": {"level": "trace"}}` aussieht, um alle Trace-Level-Protokolle und höher einzuschließen.

##### `prefs` (Preferences-Objekt)

Map von Präferenznamen zu Präferenzwert, der ein String, ein Boolean oder ein Integer sein kann.

### Android

Ab geckodriver 0.26.0 existieren zusätzliche Fähigkeiten, wenn Firefox oder eine Anwendung mit eingebettetem [GeckoView](https://wiki.mozilla.org/Mobile/GeckoView) auf Android gesteuert werden soll:

#### `androidPackage` (string, erforderlich)

Der Paketname von Firefox, z.B. `org.mozilla.firefox`, `org.mozilla.firefox_beta,` oder `org.mozilla.fennec` abhängig vom Release-Kanal, oder der Paketname der Anwendung, die GeckoView einbettet, z.B. `org.mozilla.geckoview_example`.

#### `androidActivity` (string, optional)

Der vollständig qualifizierte Klassenname der Aktivität, die gestartet werden soll, z.B. `.GeckoViewActivity`. Wenn nicht angegeben, wird die Standardaktivität des Pakets verwendet.

#### `androidDeviceSerial` (string, optional)

Die Seriennummer des Geräts, auf dem die Anwendung gestartet werden soll. Wenn nicht angegeben und mehrere Geräte angeschlossen sind, wird ein Fehler zurückgegeben.

#### `androidIntentArguments` (array of strings, optional)

Argumente, mit denen der Intent gestartet werden soll. Im Hintergrund verwendet geckodriver [Android am](https://developer.android.com/tools/adb#am), um die zu testende Android-Anwendung zu starten. Die angegebenen Intent-Argumente werden an den `am start`-Befehl angehängt. Siehe Androids [Spezifikation für Intent-Argumente](https://developer.android.com/tools/adb#IntentSpec) für Details. Dies ermöglicht es, zu steuern, wie die Anwendung gestartet wird und optionale Extras zum Aktivieren und Deaktivieren von Funktionen einzuschließen. Um beispielsweise das View-Action mit einer angegebenen URL vor einem Testaufruf zu starten, fügen Sie Folgendes hinzu:

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

Um zum Beispiel ein boolean Extra anzugeben, das mit [android.content.Intent.getBooleanExtra](<https://developer.android.com/reference/android/content/Intent#getBooleanExtra(java.lang.String,%20boolean)>) verarbeitet werden kann, fügen Sie Folgendes hinzu:

```json
{
  "androidIntentArguments": ["--ez", "customBooleanFlagName", "true"]
}
```

#### `env` (Env-Objekt)

Map von Umgebungsvariablennamen zu Umgebungsvariablenwerten, die beide Strings sein müssen, und an Prozessen auf dem Android-Gerät weitergeleitet werden.

### Log-Objekt

Ein JSON-Objekt, das eines dieser Felder haben kann:

#### `level` (string)

Legen Sie das Intensitätsniveau von geckodriver und Firefox fest. Verfügbare Levels sind `trace`, `debug`, `config`, `info`, `warn`, `error` und `fatal`. Wenn nicht definiert, ist die Standardeinstellung `info`. Der Wert wird ohne Berücksichtigung der Groß- und Kleinschreibung behandelt.

### Preferences-Objekt

Ein JSON-Objekt mit einem Eintrag pro festzulegender Präferenz. Die Präferenz wird vor dem Start von Firefox in das [Profil](#profile_string) geschrieben. Eine vollständige Liste verfügbarer Präferenzen ist abrufbar durch den Besuch von "about:config" in Ihrem Firefox-Browser. Einige davon sind in [dieser Quelle](https://searchfox.org/mozilla-central/source/modules/libpref/init/all.js) dokumentiert.

Ein Beispiel für ein Präferenzobjekt:

```json
{
  "dom.ipc.processCount": 8,
  "javascript.options.showInConsole": false
}
```

### Env-Objekt

Ein JSON-Objekt mit einem Eintrag pro festzulegender Umgebungsvariable. Auf dem Desktop wird der zu testende Firefox mit der angegebenen Variablen in seiner Umgebung gestartet. Auf Android wird die GeckoView-basierte App die gegebene Variable dem `env`-Block in ihrer Konfigurations-YAML hinzufügen.

Ein Beispiel für ein Env-Objekt:

```json
{
  "MOZ_LOG": "nsHttp:5",
  "MOZ_LOG_FILE": "/mnt/sdcard/log"
}
```

## Beispiel

Das folgende ist ein Beispiel eines vollständigen [Fähigkeitenobjekts](/de/docs/Web/WebDriver/Capabilities), das ein spezifisches Firefox-Binary auswählt, um mit einem vorbereiteten [Profil](#profile_string) vom Dateisystem im [headless mode](https://hacks.mozilla.org/2017/12/using-headless-mode-in-firefox/) zu laufen. Es erhöht auch die Anzahl der IPC-Prozesse über eine Präferenz, schaltet Chrome-Fehler/Warnungen in der Konsole aus und ermöglicht eine ausführlichere Protokollierung:

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

Das `moz:firefoxOptions` muss - wie oben - innerhalb von [`alwaysMatch`](/de/docs/Web/WebDriver/Capabilities#alwaysmatch) oder in einem der [`firstMatch`](/de/docs/Web/WebDriver/Capabilities#firstmatch) [Fähigkeitenobjekte](/de/docs/Web/WebDriver/Capabilities) platziert werden, wie hier zu sehen:

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

Dies führt die GeckoView-Beispielanwendung aus, wie sie auf dem ersten Android-Emulator, der auf dem Host-Rechner läuft, installiert ist:

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

- [Geckodrivers Dokumentation zu unterstützten Firefox-Fähigkeiten](https://firefox-source-docs.mozilla.org/testing/geckodriver/Capabilities.html)
- [Chrome-spezifische WebDriver-Fähigkeiten](https://developer.chrome.com/docs/chromedriver/capabilities) (`goog:chromeOptions)`)
- [Liste der WebDriver Fähigkeiten](/de/docs/Web/WebDriver/Capabilities)
- [Neuer Sitzungsbefehl](/de/docs/Web/WebDriver/Commands/NewSession)

{{QuickLinksWithSubpages}}
