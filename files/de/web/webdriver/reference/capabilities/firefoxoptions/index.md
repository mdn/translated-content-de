---
title: firefoxOptions
slug: Web/WebDriver/Reference/Capabilities/firefoxOptions
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

Die **`moz:firefoxOptions`-Funktion** ist eine namensraumdefinierte Menge von Funktionen, die spezifisch für [Firefox](https://www.mozilla.org/en-US/firefox/) sind. Sie wird verwendet, um das Verhalten von Firefox zu steuern und kann als Mitglied von [`alwaysMatch`](/de/docs/Web/WebDriver/Reference/Capabilities#alwaysmatch) oder als Mitglied eines der [`firstMatch`](/de/docs/Web/WebDriver/Reference/Capabilities#firstmatch)-Einträge verwendet werden.

Sie wird verwendet, um Optionen zu definieren, die steuern, wie Firefox gestartet und ausgeführt wird.

`moz:firefoxOptions` ist ein JSON-Objekt, das eines der folgenden Felder enthalten kann:

##### `binary` (String)

Absoluter Pfad zur benutzerdefinierten Firefox-Binärdatei, die verwendet werden soll.

Unter macOS können Sie entweder den Pfad zum Anwendungs-Bundle angeben, z.B. `/Applications/Firefox.app`, oder den absoluten Pfad zur ausführbaren Binärdatei innerhalb dieses Bundles, zum Beispiel `/Applications/Firefox.app/Contents/MacOS/firefox-bin`.

Geckodriver wird versuchen, den Standard-Standort von Firefox auf dem aktuellen System zu ermitteln, wenn er nicht definiert ist. Die Standardstandorte von Firefox sind:

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
          Das erste auf dem Systempfad gefundene <code>firefox</code>. Dies entspricht der Ausgabe von
          <a href="https://manpages.debian.org/stretch/debianutils/which.1.en.html">which(1)</a>:
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
        <p>Aus der Windows-Systemregistrierung:</p>
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

##### `args` (Array von Strings)

Befehlszeilenargumente, die an die Firefox-Binärdatei übergeben werden. Diese müssen den führenden Bindestrich (`-`) enthalten, wo erforderlich, z.B. `["-headless"]`.

Um geckodriver ein vorhandenes [Profil](#profile_string) im lokalen Dateisystem erkennen zu lassen, können Sie `["-profile", "/path/to/profile"]` übergeben. Wenn jedoch ein Profil auf eine Zielmaschine übertragen werden muss, wird empfohlen, den `profile`-Eintrag zu verwenden.

##### `profile` (String)

Base64-codierte ZIP eines Profilverzeichnisses, das für die Firefox-Instanz verwendet werden soll. Dies kann z.B. verwendet werden, um Erweiterungen oder benutzerdefinierte Zertifikate zu installieren, aber um benutzerdefinierte Präferenzen festzulegen, empfehlen wir die Verwendung des `prefs`-([Preferences Object](#prefs_preferences_object))-Eintrags.

Profile werden im temporären Ordner des Systems erstellt. Hier wird auch das codierte Profil extrahiert, wenn `profile` bereitgestellt wird. Standardmäßig erstellt geckodriver ein neues Profil an diesem Ort.

Das tatsächlich verwendete Profil der WebDriver-Sitzung wird dem Benutzer in der `moz:profile`-Funktion in der [neuen Sitzungsantwort](/de/docs/Web/WebDriver/Commands/NewSession) zurückgegeben.

Um geckodriver ein bestehendes Profil im Dateisystem erkennen zu lassen, bitte das `args`-Feld auf `{"args": ["-profile", "/path/to/your/profile"]}` setzen. Beachten Sie, dass, wenn Sie einen Remote-Client verwenden, der auf einen Server auf einem anderen System abzielt, das Profil bereits auf dem Zielsystem vorhanden sein muss.

##### `log` (Log-Objekt)

Um die Protokollierungsintensität von geckodriver und Firefox zu erhöhen, können Sie ein [`log`](#log_log_object)-Objekt übergeben, das z.B. so aussieht: `{"log": {"level": "trace"}}`, um alle Trace-Level-Protokolle und darüber aufzunehmen.

##### `prefs` (Preferences-Objekt)

Map von Präferenznamen zu Präferenzwerten, die ein String, ein Boolean oder eine Ganzzahl sein können.

### Android

Ab geckodriver 0.26.0 existieren zusätzliche Funktionen, wenn Firefox oder eine Anwendung, die [GeckoView](https://wiki.mozilla.org/Mobile/GeckoView) einbettet, auf Android kontrolliert werden muss:

#### `androidPackage` (String, erforderlich)

Der Paketname von Firefox, z.B. `org.mozilla.firefox`,
`org.mozilla.firefox_beta` oder `org.mozilla.fennec` je nach Veröffentlichungskanal, oder der Paketname der Anwendung, die GeckoView einbettet, z.B. `org.mozilla.geckoview_example`.

#### `androidActivity` (String, optional)

Der vollqualifizierte Klassenname der zu startenden Aktivität, z.B. `.GeckoViewActivity`. Wenn nicht angegeben, wird die Standardaktivität des Pakets verwendet.

#### `androidDeviceSerial` (String, optional)

Die Seriennummer des Geräts, auf dem die Anwendung gestartet werden soll. Wenn nicht angegeben und mehrere Geräte angeschlossen sind, wird ein Fehler zurückgegeben.

#### `androidIntentArguments` (Array von Strings, optional)

Argumente, um den Intent zu starten. Im Hintergrund verwendet geckodriver [Android am](https://developer.android.com/tools/adb#am), um die zu testende Android-Anwendung zu starten. Die angegebenen Intent-Argumente werden an das `am start`-Kommando angehängt. Siehe Androids [Spezifikation für Intent-Argumente](https://developer.android.com/tools/adb#IntentSpec) für Details. Dies ermöglicht die Kontrolle darüber, wie die Anwendung gestartet wird und zusätzliche Extras zum Aktivieren und Deaktivieren von Funktionen hinzuzufügen. Beispiel zum Starten mit der Ansichtsaktion und einer angegebenen URL vor dem Navigieren als Teil eines Tests:

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

Um zum Beispiel ein boolesches Extra anzugeben, das mit [android.content.Intent.getBooleanExtra](<https://developer.android.com/reference/android/content/Intent#getBooleanExtra(java.lang.String,%20boolean)>) verarbeitet werden kann, fügen Sie hinzu:

```json
{
  "androidIntentArguments": ["--ez", "customBooleanFlagName", "true"]
}
```

#### `env` (Env-Objekt)

Map von Umgebungsvariablennamen zu Umgebungsvariablenwerten, die beide Strings sein müssen und an den Anwendungsprozess auf dem Android-Gerät weitergeleitet werden.

### Log-Objekt

Ein JSON-Objekt, das eines dieser Felder haben kann:

#### `level` (String)

Setzt die Intensitätsebene der Protokollierung von geckodriver und Firefox. Verfügbare Stufen sind `trace`, `debug`, `config`, `info`, `warn`, `error` und `fatal`. Wenn undefiniert bleibt, ist der Standard `info`. Der Wert wird ohne Berücksichtigung der Groß- und Kleinschreibung behandelt.

### Preferences-Objekt

Ein JSON-Objekt mit einem Eintrag pro zu setzender Präferenz. Die Präferenz wird in das [Profil](#profile_string) geschrieben, bevor Firefox gestartet wird. Eine vollständige Liste der verfügbaren Präferenzen finden Sie unter "about:config" in Ihrem Firefox-Browser. Einige davon sind in [dieser Quelle](https://searchfox.org/mozilla-central/source/modules/libpref/init/all.js) dokumentiert.

Ein Beispiel für ein Präferenzobjekt:

```json
{
  "dom.ipc.processCount": 8,
  "javascript.options.showInConsole": false
}
```

### Env-Objekt

Ein JSON-Objekt mit einem Eintrag pro zu setzender Umgebungsvariable. Auf dem Desktop wird Firefox mit der angegebenen Variablen in seiner Umgebung gestartet. Auf Android wird die auf GeckoView-basierte App die angegebene Variable dem `env`-Block in ihrer Konfigurations-YAML hinzugefügt.

Ein Beispiel für ein Env-Objekt:

```json
{
  "MOZ_LOG": "nsHttp:5",
  "MOZ_LOG_FILE": "/mnt/sdcard/log"
}
```

## Beispiel

Das folgende ist ein Beispiel für ein vollständiges [Fähigkeitenobjekt](/de/docs/Web/WebDriver/Reference/Capabilities), das eine bestimmte Firefox-Binärdatei auswählt, um mit einem vorbereiteten [Profil](#profile_string) aus dem Dateisystem im [Headless-Modus](https://hacks.mozilla.org/2017/12/using-headless-mode-in-firefox/) zu laufen. Es erhöht auch die Anzahl der IPC-Prozesse durch eine Präferenz, schaltet Chrome-Fehler/Warnungen in der Konsole aus und aktiviert eine umfangreichere Protokollierung:

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

Die `moz:firefoxOptions` müssen — wie oben gezeigt — innerhalb von [`alwaysMatch`](/de/docs/Web/WebDriver/Reference/Capabilities#alwaysmatch) platziert werden oder in einem der [`firstMatch`](/de/docs/Web/WebDriver/Reference/Capabilities#firstmatch)-[Fähigkeitenobjekte](/de/docs/Web/WebDriver/Reference/Capabilities), wie hier zu sehen:

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

Dies führt die auf dem ersten Android-Emulator auf dem Host-Maschine installierte GeckoView-Beispielanwendung aus:

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

- [geckodrivers Dokumentation zu unterstützten Firefox-Funktionen](https://firefox-source-docs.mozilla.org/testing/geckodriver/Capabilities.html)
- [Chrome-spezifische WebDriver-Funktionen](https://developer.chrome.com/docs/chromedriver/capabilities) (`goog:chromeOptions)`)
- [Liste der WebDriver-Funktionen](/de/docs/Web/WebDriver/Reference/Capabilities)
- [Neuer Sitzungsbefehl](/de/docs/Web/WebDriver/Commands/NewSession)
