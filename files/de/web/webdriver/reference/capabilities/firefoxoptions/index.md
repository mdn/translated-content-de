---
title: firefoxOptions
slug: Web/WebDriver/Reference/Capabilities/firefoxOptions
l10n:
  sourceCommit: 6a5c619dfad295ca9a9d317a4088908cfd33e686
---

Die **`moz:firefoxOptions`-Fähigkeit** ist ein namensraumkonfiguriertes Set von Funktionen, die spezifisch für [Firefox](https://www.mozilla.org/en-US/firefox/new/) sind. Sie wird verwendet, um das Verhalten von Firefox zu steuern und kann sowohl als Mitglied von [`alwaysMatch`](/de/docs/Web/WebDriver/Reference/Capabilities#alwaysmatch) als auch als Mitglied eines der [`firstMatch`](/de/docs/Web/WebDriver/Reference/Capabilities#firstmatch)-Einträge verwendet werden.

Sie wird verwendet, um Optionen zu definieren, die steuern, wie Firefox gestartet und ausgeführt wird.

`moz:firefoxOptions` ist ein JSON-Objekt, welches eines der folgenden Felder enthalten kann:

##### `binary` (String)

Absoluter Pfad zur benutzerdefinierten Firefox-Binärdatei, die verwendet werden soll.

Auf macOS können Sie entweder den Pfad zum Anwendungspaket angeben, z.B. `/Applications/Firefox.app`, oder den absoluten Pfad zur ausführbaren Datei innerhalb dieses Pakets, z.B. `/Applications/Firefox.app/Contents/MacOS/firefox-bin`.

Geckodriver wird versuchen, den Standardstandort von Firefox auf dem aktuellen System zu ermitteln, wenn er nicht definiert ist. Die Standardstandorte von Firefox sind:

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
          Der erste gefundene <code>firefox</code> im Systempfad. Dies ist
          äquivalent zur Ausgabe des Befehls
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

Kommandozeilenargumente, die an die Firefox-Binärdatei übergeben werden sollen. Diese müssen das führende Minuszeichen (`-`) einschließen, falls erforderlich, z.B. `["-headless"]`.

Um Geckodriver ein bestehendes [Profil](#profile_string) im lokalen Dateisystem übernehmen zu lassen, können Sie `["-profile", "/path/to/profile"]` übergeben. Aber wenn ein Profil auf eine Zielmaschine übertragen werden muss, wird empfohlen, den Eintrag `profile` zu verwenden.

##### `profile` (String)

Base64-kodierter ZIP eines Profilverzeichnisses, das für die Firefox-Instanz verwendet werden soll. Dies kann z.B. verwendet werden, um Erweiterungen oder benutzerdefinierte Zertifikate zu installieren, aber für das Setzen benutzerdefinierter Präferenzen empfehlen wir, den `prefs` ([Preferences Objekt](#prefs_preferences_object)) Eintrag zu verwenden.

Profile werden im temporären Ordner des Systems erstellt. Hier wird auch das kodierte Profil extrahiert, wenn `profile` bereitgestellt wird. Standardmäßig erstellt Geckodriver ein neues Profil an diesem Ort.

Das tatsächlich verwendete Profil in der WebDriver-Sitzung wird im `moz:profile`-Fähigkeit im [neuen Sitzungs-Response](/de/docs/Web/WebDriver/Commands/NewSession) an den Benutzer zurückgegeben.

Um Geckodriver ein bestehendes Profil im Dateisystem übernehmen zu lassen, setzen Sie bitte das `args`-Feld auf `{"args": ["-profile", "/path/to/your/profile"]}`. Beachten Sie, dass, wenn Sie einen Remote-Client haben, der auf einen Server in einem anderen System zielt, das Profil bereits auf dem Zielsystem existieren muss.

##### `log` (Log-Objekt)

Um die Protokollierungsdetails von Geckodriver und Firefox zu erhöhen, können Sie ein [`log`](#log_log_object)-Objekt übergeben, das wie `{"log": {"level": "trace"}}` aussehen kann, um alle Protokolle auf Trace-Ebene und darüber einzuschließen.

##### `prefs` (Preferences Objekt)

Mapping von Präferenznamen zu Präferenzwerten, die ein String, ein Boolean oder ein Integer sein können.

### Android

Beginnend mit Geckodriver 0.26.0 existieren zusätzliche Fähigkeiten, wenn Firefox oder eine Anwendung, die [GeckoView](https://wiki.mozilla.org/Mobile/GeckoView) einbettet, auf Android kontrolliert werden soll:

#### `androidPackage` (String, erforderlich)

Der Paketname von Firefox, z.B., `org.mozilla.firefox`, `org.mozilla.firefox_beta`, oder `org.mozilla.fennec`, abhängig vom Release-Kanal, oder der Paketname der Anwendung, die GeckoView einbettet, z.B. `org.mozilla.geckoview_example`.

#### `androidActivity` (String, optional)

Der vollständig qualifizierte Klassenname der zu startenden Aktivität, z.B. `.GeckoViewActivity`. Wenn nicht angegeben, wird die Standardaktivität des Pakets verwendet.

#### `androidDeviceSerial` (String, optional)

Die Seriennummer des Geräts, auf dem die Anwendung gestartet werden soll. Wenn nicht angegeben und mehrere Geräte angeschlossen sind, wird ein Fehler zurückgegeben.

#### `androidIntentArguments` (Array von Strings, optional)

Argumente, um das Intent zu starten. Intern verwendet Geckodriver [Android am](https://developer.android.com/tools/adb#am), um die Android-Anwendung unter Test zu starten. Die angegebenen Intent-Argumente werden dem `am start`-Befehl hinzugefügt. Siehe Androids [Spezifikation für Intent-Argumente](https://developer.android.com/tools/adb#IntentSpec) für Details. Dies ermöglicht die Kontrolle, wie die Anwendung gestartet wird, und das Einbeziehen optionaler Extras zum Aktivieren und Deaktivieren von Funktionen. Zum Beispiel, um mit der Ansichtsaktion und einer angegebenen URL vor dem Navigieren als Teil eines Tests zu starten, beinhalten Sie:

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

Zum Beispiel, um ein Boolean Extra zu spezifizieren, das mit [android.content.Intent.getBooleanExtra](<https://developer.android.com/reference/android/content/Intent#getBooleanExtra(java.lang.String,%20boolean)>) verarbeitet werden kann, beinhalten Sie:

```json
{
  "androidIntentArguments": ["--ez", "customBooleanFlagName", "true"]
}
```

#### `env` (Env-Objekt)

Mapping von Umgebungsvariablennamen zu Umgebungsvariablenwerten, die beide Strings sein müssen, und an den Anwendungsprozess auf dem Android-Gerät weitergeleitet werden.

### Log-Objekt

Ein JSON-Objekt, das eines dieser Felder haben kann:

#### `level` (String)

Setzen Sie das Detaillevel der Protokollierung von Geckodriver und Firefox. Verfügbare Level sind `trace`, `debug`, `config`, `info`, `warn`, `error`, und `fatal`. Wenn undefiniert, ist der Standard `info`. Der Wert wird ohne Berücksichtigung der Groß-/Kleinschreibung behandelt.

### Preferences Objekt

Ein JSON-Objekt mit einem Eintrag pro zu setzender Präferenz. Die Präferenz wird im [Profil](#profile_string) geschrieben, bevor Firefox gestartet wird. Eine vollständige Liste verfügbarer Präferenzen ist durch den Besuch von "about:config" in Ihrem Firefox-Browser erhältlich. Einige davon sind in [dieser Quelle](https://searchfox.org/mozilla-central/source/modules/libpref/init/all.js) dokumentiert.

Ein Beispiel für ein Präferenz-Objekt:

```json
{
  "dom.ipc.processCount": 8,
  "javascript.options.showInConsole": false
}
```

### Env-Objekt

Ein JSON-Objekt mit einem Eintrag pro Umgebungsvariable, die gesetzt werden soll. Auf dem Desktop wird der zu testende Firefox mit der angegebenen Variablen in seiner Umgebung gestartet. Auf Android wird die GeckoView-basierte App die angegebene Variable in den `env`-Block in ihrer Konfigurations-YAML haben.

Ein Beispiel für ein Env-Objekt:

```json
{
  "MOZ_LOG": "nsHttp:5",
  "MOZ_LOG_FILE": "/mnt/sdcard/log"
}
```

## Beispiel

Das folgende ist ein Beispiel für ein vollständiges [Fähigkeitsobjekt](/de/docs/Web/WebDriver/Reference/Capabilities), das eine spezifische Firefox-Binärdatei auswählt, um mit einem vorbereiteten [Profil](#profile_string) aus dem Dateisystem im [Headless-Modus](https://hacks.mozilla.org/2017/12/using-headless-mode-in-firefox/) zu laufen. Es erhöht auch die Anzahl der IPC-Prozesse durch eine Präferenz, schaltet Chrome-Fehler/Warnungen in der Konsole aus und aktiviert eine detailliertere Protokollierung:

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

Das `moz:firefoxOptions` muss—wie oben—innerhalb von [`alwaysMatch`](/de/docs/Web/WebDriver/Reference/Capabilities#alwaysmatch) oder in einem der [`firstMatch`](/de/docs/Web/WebDriver/Reference/Capabilities#firstmatch) [Fähigkeitenobjekte](/de/docs/Web/WebDriver/Reference/Capabilities) platziert werden, wie hier zu sehen ist:

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

Dies führt die GeckoView-Beispielanwendung aus, wie sie auf dem ersten Android-Emulator läuft, der auf dem Host-Computer läuft:

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
- [Chrome-spezifische WebDriver-Fähigkeiten](https://developer.chrome.com/docs/chromedriver/capabilities)
  (`goog:chromeOptions)`)
- [Liste der WebDriver-Fähigkeiten](/de/docs/Web/WebDriver/Reference/Capabilities)
- [Neuer Sitzungsbefehl](/de/docs/Web/WebDriver/Commands/NewSession)
