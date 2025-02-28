---
title: firefoxOptions
slug: Web/WebDriver/Reference/Capabilities/firefoxOptions
l10n:
  sourceCommit: 57b855a52a2d2e8914a30e3a47567bff0806ae23
---

Die **`moz:firefoxOptions`-Fähigkeit** ist eine namensraumbezogene Menge von Fähigkeiten, die spezifisch für [Firefox](https://www.mozilla.org/en-US/firefox/) sind. Sie wird verwendet, um das Verhalten von Firefox zu steuern und kann als Mitglied von [`alwaysMatch`](/de/docs/Web/WebDriver/Reference/Capabilities#alwaysmatch) oder als Mitglied eines der [`firstMatch`](/de/docs/Web/WebDriver/Reference/Capabilities#firstmatch)-Einträge verwendet werden.

Es wird verwendet, um Optionen festzulegen, die steuern, wie Firefox gestartet und ausgeführt wird.

`moz:firefoxOptions` ist ein JSON-Objekt, das eines der folgenden Felder enthalten kann:

##### `binary` (String)

Absoluter Pfad zum benutzerdefinierten Firefox-Binary, das verwendet werden soll.

Unter macOS können Sie entweder den Pfad zum Anwendungsbundle angeben, d.h. `/Applications/Firefox.app`, oder den absoluten Pfad zum ausführbaren Binary innerhalb dieses Bundles, beispielsweise `/Applications/Firefox.app/Contents/MacOS/firefox-bin`.

geckodriver versucht, den Standardstandort von Firefox auf dem aktuellen System abzuleiten, wenn er nicht definiert ist. Die Standardstandorte von Firefox sind:

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
            <code>$HOME/Applications/Firefox.app/Contents/MacOS/firefox-bin</code>
          </li>
        </ol>
      </td>
    </tr>
    <tr>
      <td>Linux<br />BSD</td>
      <td>
        <p>
          Erstes <code>firefox</code> im Systempfad. Dies entspricht der Ausgabe von
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
        <p>Aus dem Windows-Systemregistrierungsdatenbank:</p>
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

Befehlszeilenargumente, die an das Firefox-Binary übergeben werden sollen. Diese müssen bei Bedarf das führende Minuszeichen (`-`) enthalten, z.B. `["-headless"]`.

Um geckodriver ein vorhandenes [Profil](#profile_string) im lokalen Dateisystem erkennen zu lassen, können Sie `["-profile", "/path/to/profile"]` übergeben. Wenn jedoch ein Profil auf eine Zielmaschine übermittelt werden muss, wird empfohlen, den `profile`-Eintrag zu verwenden.

##### `profile` (String)

Base64-kodiertes ZIP eines Profilverzeichnisses, das für die Firefox-Instanz verwendet werden soll. Dies kann z. B. zur Installation von Erweiterungen oder benutzerdefinierten Zertifikaten verwendet werden. Für das Setzen benutzerdefinierter Einstellungen empfehlen wir jedoch die Verwendung des `prefs` ([Preferences Object](#prefs_preferences_object))-Eintrags.

Profile werden im temporären Ordner des Systems erstellt. Dorthin wird auch das kodierte Profil extrahiert, wenn `profile` bereitgestellt wird. Standardmäßig erstellt geckodriver ein neues Profil an diesem Ort.

Das effektiv im WebDriver-Session verwendete Profil wird dem Benutzer in der `moz:profile`-Fähigkeit in der [neuen Sitzungsantwort](/de/docs/Web/WebDriver/Commands/NewSession) zurückgegeben.

Um geckodriver ein vorhandenes Profil im Dateisystem erkennen zu lassen, setzen Sie bitte das `args`-Feld auf `{"args": ["-profile", "/path/to/your/profile"]}`. Beachten Sie, dass, wenn Sie einen Remote-Client verwenden, der auf einem anderen System zielt, das Profil bereits auf dem Zielsystem existieren muss.

##### `log` (Log-Objekt)

Um die Protokollierungsdetails von geckodriver und Firefox zu erhöhen, können Sie ein [`log`](#log_log_object)-Objekt, das wie `{"log": {"level": "trace"}}` aussieht, übergeben, um alle Trace-Level-Protokolle und darüber einzuschließen.

##### `prefs` (Einstellungen-Objekt)

Zuordnung von Einstellungsnamen zu Einstellungswerten, die ein String, ein Boolean oder ein Integer sein können.

### Android

Ab geckodriver 0.26.0 existieren zusätzliche Fähigkeiten, wenn Firefox oder eine Anwendung, die [GeckoView](https://wiki.mozilla.org/Mobile/GeckoView) einbettet, auf Android kontrolliert werden muss:

#### `androidPackage` (String, erforderlich)

Der Paketname von Firefox, z.B. `org.mozilla.firefox`, `org.mozilla.firefox_beta` oder `org.mozilla.fennec` abhängig vom Release-Kanal, oder der Paketname der Anwendung, die GeckoView einbettet, z.B. `org.mozilla.geckoview_example`.

#### `androidActivity` (String, optional)

Der vollständig qualifizierte Klassenname der Aktivität, die gestartet werden soll, z.B. `.GeckoViewActivity`. Wenn nicht angegeben, wird die Standardaktivität des Pakets verwendet.

#### `androidDeviceSerial` (String, optional)

Die Seriennummer des Geräts, auf dem die Anwendung gestartet werden soll. Wenn nicht angegeben und mehrere Geräte angeschlossen sind, wird ein Fehler zurückgegeben.

#### `androidIntentArguments` (Array von Strings, optional)

Argumente, um den Intent zu starten. Intern verwendet geckodriver [Android am](https://developer.android.com/tools/adb#am), um die zu testende Android-Anwendung zu starten. Die angegebenen Intent-Argumente werden dem `am start`-Befehl hinzugefügt. Siehe Androids [Spezifikation für Intent-Argumente](https://developer.android.com/tools/adb#IntentSpec) für Details. Dies ermöglicht die Kontrolle darüber, wie die Anwendung gestartet wird, und das Hinzufügen optionaler Extras zum Aktivieren und Deaktivieren von Funktionen. Zum Beispiel, um mit der View-Aktion und einer angegebenen URL zu starten, bevor im Rahmen eines Tests navigiert wird, fügen Sie Folgendes hinzu:

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

Zum Beispiel, um ein boolesches Extra anzugeben, das mit [android.content.Intent.getBooleanExtra](<https://developer.android.com/reference/android/content/Intent#getBooleanExtra(java.lang.String,%20boolean)>) verarbeitet werden kann, fügen Sie Folgendes hinzu:

```json
{
  "androidIntentArguments": ["--ez", "customBooleanFlagName", "true"]
}
```

#### `env` (Env-Objekt)

Zuordnung von Umgebungsvariablennamen zu Umgebungsvariablenwerten, die beide Strings sein müssen und an den Anwendungsprozess, der auf dem Android-Gerät läuft, weitergeleitet werden.

### Log-Objekt

Ein JSON-Objekt, das eines dieser Felder haben kann:

#### `level` (String)

Festlegen des Detaillierungsgrads von geckodriver und Firefox. Verfügbare Ebenen sind `trace`, `debug`, `config`, `info`, `warn`, `error` und `fatal`. Wenn nicht definiert, ist der Standard `info`. Der Wert wird nicht case-sensitiv behandelt.

### Einstellungen-Objekt

Ein JSON-Objekt mit einem Eintrag pro zu setzender Einstellung. Die Einstellung wird vor dem Starten von Firefox in das [Profil](#profile_string) geschrieben. Eine vollständige Liste der verfügbaren Einstellungen finden Sie, wenn Sie "about:config" in Ihrem Firefox-Browser besuchen. Einige davon sind in [dieser Quelle](https://searchfox.org/mozilla-central/source/modules/libpref/init/all.js) dokumentiert.

Ein Beispiel für ein Einstellungs-Objekt:

```json
{
  "dom.ipc.processCount": 8,
  "javascript.options.showInConsole": false
}
```

### Env-Objekt

Ein JSON-Objekt mit einem Eintrag pro einzustellender Umgebungsvariable. Auf dem Desktop wird der zu testende Firefox mit der gegebenen Variablen in seiner Umgebung gestartet. Auf Android wird die GeckoView-basierte App die gegebene Variable dem `env`-Block in ihrer Konfigurations-YAML hinzugefügt.

Ein Beispiel für ein Env-Objekt:

```json
{
  "MOZ_LOG": "nsHttp:5",
  "MOZ_LOG_FILE": "/mnt/sdcard/log"
}
```

## Beispiel

Folgendes ist ein Beispiel für ein vollständiges [Fähigkeitsobjekt](/de/docs/Web/WebDriver/Reference/Capabilities), das ein bestimmtes Firefox-Binary auswählt, um mit einem vorbereiteten [Profil](#profile_string) aus dem Dateisystem im [Headless-Modus](https://hacks.mozilla.org/2017/12/using-headless-mode-in-firefox/) ausgeführt zu werden. Es erhöht auch die Anzahl der IPC-Prozesse durch eine Einstellung, schaltet Chrome-Fehler/Warnungen in der Konsole aus und aktiviert eine ausführlichere Protokollierung:

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

Das `moz:firefoxOptions` muss—wie oben gezeigt—in [`alwaysMatch`](/de/docs/Web/WebDriver/Reference/Capabilities#alwaysmatch) oder in einem der [`firstMatch`](/de/docs/Web/WebDriver/Reference/Capabilities#firstmatch) [Fähigkeitsobjekte](/de/docs/Web/WebDriver/Reference/Capabilities) platziert sein, wie hier zu sehen:

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

Dies führt die GeckoView-Beispielanwendung aus, die auf dem ersten auf dem Host-Rechner laufenden Android-Emulator installiert ist:

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
- [Liste der WebDriver-Fähigkeiten](/de/docs/Web/WebDriver/Reference/Capabilities)
- [Neuer Sitzung](/de/docs/Web/WebDriver/Commands/NewSession)-Befehl
