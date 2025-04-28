---
title: firefoxOptions
slug: Web/WebDriver/Reference/Capabilities/firefoxOptions
l10n:
  sourceCommit: c6cab7f1aa7dc9f3495486a5b46020db320101cf
---

Die **`moz:firefoxOptions` Fähigkeit** ist eine namensraumspezifische Menge von Fähigkeiten, die spezifisch für [Firefox](https://www.mozilla.org/de/firefox/new/) sind. Sie wird verwendet, um das Verhalten von Firefox zu steuern, und kann als Mitglied von [`alwaysMatch`](/de/docs/Web/WebDriver/Reference/Capabilities#alwaysmatch) oder als Mitglied eines von den [`firstMatch`](/de/docs/Web/WebDriver/Reference/Capabilities#firstmatch) Einträgen genutzt werden.

Sie wird verwendet, um Optionen festzulegen, die steuern, wie Firefox gestartet und ausgeführt wird.

`moz:firefoxOptions` ist ein JSON-Objekt, das eines der folgenden Felder enthalten kann:

##### `binary` (String)

Absoluter Pfad zu einer benutzerdefinierten Firefox-Binärdatei, die verwendet werden soll.

Auf macOS können Sie entweder den Pfad zum Anwendungspaket angeben, z. B. `/Applications/Firefox.app`, oder den absoluten Pfad zur ausführbaren Binärdatei innerhalb dieses Pakets, z. B. `/Applications/Firefox.app/Contents/MacOS/firefox-bin`.

geckodriver wird versuchen, den Standardort von Firefox auf dem aktuellen System zu ermitteln, wenn dieser nicht definiert ist. Die Standardorte von Firefox sind:

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
          Erstes <code>firefox</code>, das im Systempfad gefunden wird. Dies entspricht der Ausgabe des Befehls
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

Befehlszeilenargumente, die an die Firefox-Binärdatei übergeben werden. Diese müssen das führende Minuszeichen (`-`) enthalten, wo erforderlich, z. B. `["-headless"]`.

Um geckodriver ein vorhandenes [Profil](#profile_string) im lokalen Dateisystem erkennen zu lassen, können Sie `["-profile", "/path/to/profile"]` übergeben. Wenn jedoch ein Profil auf eine Zielmaschine übertragen werden muss, wird empfohlen, den Eintrag `profile` zu verwenden.

##### `profile` (String)

Base64-codiertes ZIP eines Profilverzeichnisses, das für die Firefox-Instanz verwendet werden soll. Dies kann z. B. verwendet werden, um Erweiterungen oder benutzerdefinierte Zertifikate zu installieren. Für die Einstellung benutzerdefinierter Präferenzen empfehlen wir jedoch, den Eintrag `prefs` ([Preferences Object](#prefs_preferences_object)) zu verwenden.

Profile werden im temporären Ordner des Systems erstellt. Dies ist auch der Ort, an dem das codierte Profil extrahiert wird, wenn `profile` bereitgestellt wird. Standardmäßig erstellt geckodriver ein neues Profil an diesem Ort.

Das tatsächlich vom WebDriver-Session verwendete Profil wird dem Benutzer in der `moz:profile`-Fähigkeit in der [neuen Sitzungsantwort](/de/docs/Web/WebDriver/Reference/Commands/NewSession) zurückgegeben.

Um geckodriver ein vorhandenes Profil im Dateisystem erkennen zu lassen, setzen Sie bitte das `args`-Feld auf `{"args": ["-profile", "/path/to/your/profile"]}`. Beachten Sie, dass, wenn Sie einen Remote-Client verwenden, der auf einen Server auf einem anderen System abzielt, das Profil bereits auf dem Zielsystem existieren muss.

##### `log` (Log-Objekt)

Um die Protokollierung von geckodriver und Firefox zu erhöhen, können Sie ein [`log`](#log_log_object)-Objekt übergeben, das wie folgt aussehen könnte: `{"log": {"level": "trace"}}`, um alle Protokollen auf Trace-Ebene und darüber zu erfassen.

##### `prefs` (Preferences-Objekt)

Map von Präferenznamen zu Präferenzwert, was ein String, ein Boolean oder ein Integer sein kann.

### Android

Ab geckodriver 0.26.0 existieren zusätzliche Fähigkeiten, wenn Firefox oder eine Anwendung, die [GeckoView](https://wiki.mozilla.org/Mobile/GeckoView) einbettet, unter Android gesteuert werden soll:

#### `androidPackage` (String, erforderlich)

Der Paketname von Firefox, z. B. `org.mozilla.firefox`, `org.mozilla.firefox_beta` oder `org.mozilla.fennec`, abhängig vom Verteilungskanal, oder der Paketname der Anwendung, die GeckoView einbettet, z. B. `org.mozilla.geckoview_example`.

#### `androidActivity` (String, optional)

Der vollqualifizierte Klassenname der Aktivität, die gestartet werden soll, z. B. `.GeckoViewActivity`. Wenn nicht angegeben, wird die Standardaktivität des Pakets verwendet.

#### `androidDeviceSerial` (String, optional)

Die Seriennummer des Geräts, auf dem die Anwendung gestartet werden soll. Wenn nicht angegeben und mehrere Geräte angeschlossen sind, wird ein Fehler zurückgegeben.

#### `androidIntentArguments` (Array von Strings, optional)

Argumente, um den Intent zu starten. Im Hintergrund verwendet geckodriver [Android am](https://developer.android.com/tools/adb#am), um die zu testende Android-Anwendung zu starten. Die angegebenen Intent-Argumente werden zum `am start`-Befehl hinzugefügt. Siehe Androids [Spezifikation für Intent-Argumente](https://developer.android.com/tools/adb#IntentSpec) für Details. Auf diese Weise kann gesteuert werden, wie die Anwendung gestartet wird, und optionale Extras für das Aktivieren oder Deaktivieren von Funktionen können hinzugefügt werden. Um beispielsweise mit der View-Aktion und einer angegebenen URL zu starten, bevor im Rahmen eines Tests navigiert wird, schließen Sie ein:

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

Um beispielsweise ein boolean Extra zu spezifizieren, das mit [android.content.Intent.getBooleanExtra](<https://developer.android.com/reference/android/content/Intent#getBooleanExtra(java.lang.String,%20boolean)>) verarbeitet werden kann, schließen Sie ein:

```json
{
  "androidIntentArguments": ["--ez", "customBooleanFlagName", "true"]
}
```

#### `env` (Env-Objekt)

Map von Umgebungsvariablennamen zu Umgebungsvariablenwerten, die beide Strings sein müssen und an den Prozess der Anwendung übergeben werden, der auf dem Android-Gerät läuft.

### Log-Objekt

Ein JSON-Objekt, das eines dieser Felder haben kann:

#### `level` (String)

Setzt das Niveau der Protokollierungsumfang von geckodriver und Firefox. Verfügbare Ebenen sind `trace`, `debug`, `config`, `info`, `warn`, `error` und `fatal`. Wenn nicht definiert, ist der Standardwert `info`. Der Wert wird nicht groß-/kleinschreibungssensitiv behandelt.

### Preferences-Objekt

Ein JSON-Objekt mit einem Eintrag pro zu setzender Präferenz. Die Präferenz wird vor dem Start von Firefox in das [Profil](#profile_string) geschrieben. Eine vollständige Liste der verfügbaren Präferenzen ist durch Besuch von "about:config" in Ihrem Firefox-Browser verfügbar. Einige davon sind in [dieser Quelle](https://searchfox.org/mozilla-central/source/modules/libpref/init/all.js) dokumentiert.

Ein Beispiel für ein Präferenzobjekt:

```json
{
  "dom.ipc.processCount": 8,
  "javascript.options.showInConsole": false
}
```

### Env-Objekt

Ein JSON-Objekt mit einem Eintrag pro zu setzender Umgebungsvariable. Auf einem Desktop wird das zu testende Firefox mit der gegebenen Variable in seiner Umgebung gestartet. Auf Android wird die GeckoView-basierte App die angegebene Variable in den `env`-Block ihrer YAML-Konfiguration eingefügt haben.

Ein Beispiel für ein Env-Objekt:

```json
{
  "MOZ_LOG": "nsHttp:5",
  "MOZ_LOG_FILE": "/mnt/sdcard/log"
}
```

## Beispiel

Folgendes ist ein Beispiel für ein vollständiges [Fähigkeitenobjekt](/de/docs/Web/WebDriver/Reference/Capabilities), das eine bestimmte Firefox-Binärdatei auswählt, um sie mit einem vorbereiteten [Profil](#profile_string) vom Dateisystem im [Headless-Modus](https://hacks.mozilla.org/2017/12/using-headless-mode-in-firefox/) auszuführen. Es erhöht auch die Anzahl der IPC-Prozesse durch eine Präferenz, schaltet Chrome-Fehler/Warnungen in der Konsole ab und aktiviert eine umfangreichere Protokollierung:

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

Das `moz:firefoxOptions` muss – wie oben gezeigt – innerhalb von [`alwaysMatch`](/de/docs/Web/WebDriver/Reference/Capabilities#alwaysmatch) oder in einem der [`firstMatch`](/de/docs/Web/WebDriver/Reference/Capabilities#firstmatch) [Fähigkeitenobjekte](/de/docs/Web/WebDriver/Reference/Capabilities) platziert werden, wie hier gezeigt:

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

Dies startet die GeckoView-Beispielanwendung, wie sie auf dem ersten Android-Emulator installiert ist, der auf dem Hostrechner läuft:

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

- [geckodrivers Dokumentation zu unterstützten Firefox-Fähigkeiten](https://firefox-source-docs.mozilla.org/testing/geckodriver/Capabilities.html)
- [Chrome-spezifische WebDriver-Fähigkeiten](https://developer.chrome.com/docs/chromedriver/capabilities) (`goog:chromeOptions)`
- [Liste der WebDriver-Fähigkeiten](/de/docs/Web/WebDriver/Reference/Capabilities)
- [Neuen Sitzung](/de/docs/Web/WebDriver/Reference/Commands/NewSession) Befehl
