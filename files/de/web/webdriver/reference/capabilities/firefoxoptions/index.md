---
title: firefoxOptions
slug: Web/WebDriver/Reference/Capabilities/firefoxOptions
l10n:
  sourceCommit: 6d363614de8a40c33d1afe92e4e846b75beea986
---

Die **`moz:firefoxOptions`-Funktion** ist ein namensraumdefinierter Satz von Funktionen, die spezifisch für [Firefox](https://www.firefox.com/en-US/) sind. Sie wird verwendet, um das Verhalten von Firefox zu steuern und kann als Mitglied von [`alwaysMatch`](/de/docs/Web/WebDriver/Reference/Capabilities#alwaysmatch) oder als Mitglied eines der [`firstMatch`](/de/docs/Web/WebDriver/Reference/Capabilities#firstmatch)-Einträge verwendet werden.

Sie dient dazu, Optionen zu definieren, die steuern, wie Firefox gestartet und ausgeführt wird.

`moz:firefoxOptions` ist ein JSON-Objekt, das beliebige der folgenden Felder enthalten kann:

##### `binary` (String)

Absoluter Pfad zur benutzerdefinierten Firefox-Binärdatei, die verwendet werden soll.

Unter macOS können Sie entweder den Pfad zum Anwendungspaket angeben, also `/Applications/Firefox.app`, oder den absoluten Pfad zur ausführbaren Binärdatei innerhalb dieses Pakets, zum Beispiel `/Applications/Firefox.app/Contents/MacOS/firefox-bin`.

geckodriver wird versuchen, den Standardort von Firefox auf dem aktuellen System zu ermitteln, wenn keine Angabe gemacht wird. Die Standardorte von Firefox sind:

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
            <code>$HOME/Applications/Firefox.app/Contents/MacOS/firefox-bin</code>
          </li>
        </ol>
      </td>
    </tr>
    <tr>
      <td>Linux<br />BSD</td>
      <td>
        <p>
          Erstes auf dem Systempfad gefundenes <code>firefox</code>. Dies entspricht der Ausgabe der Ausführung von
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

Kommandozeilenargumente, die an die Firefox-Binärdatei übergeben werden sollen. Diese müssen den führenden Bindestrich (`-`) enthalten, wo erforderlich, z.B. `["-headless"]`.

Um geckodriver ein bestehendes [Profil](#profile_string) auf dem lokalen Dateisystem erkennen zu lassen, können Sie `["-profile", "/pfad/zum/profil"]` übergeben. Wenn ein Profil auf eine Zielmaschine übertragen werden muss, wird jedoch empfohlen, den `profile`-Eintrag zu verwenden.

##### `profile` (String)

Base64-kodierte ZIP eines Profilverzeichnisses, das für die Firefox-Instanz verwendet wird. Dies kann beispielsweise verwendet werden, um Erweiterungen oder benutzerdefinierte Zertifikate zu installieren. Für die Einstellung benutzerdefinierter Präferenzen wird jedoch empfohlen, den `prefs` ([Preferences Object](#prefs_preferences_object))-Eintrag zu verwenden.

Profile werden im temporären Ordner des Systems erstellt. Hier wird das kodierte Profil auch extrahiert, wenn `profile` angegeben wird. Standardmäßig erstellt geckodriver an diesem Ort ein neues Profil.

Das effektiv in der WebDriver-Sitzung verwendete Profil wird dem Benutzer in der `moz:profile`-Funktion in der [New Session Response](/de/docs/Web/WebDriver/Reference/Commands/NewSession) zurückgegeben.

Um geckodriver ein bestehendes Profil auf dem Dateisystem erkennen zu lassen, setzen Sie bitte das `args`-Feld auf `{"args": ["-profile", "/pfad/zu/Ihrem/profil"]}`. Beachten Sie, dass, wenn Sie einen Remote-Client verwenden, der auf einen Server auf einem anderen System zielt, das Profil bereits auf dem Zielsystem existieren muss.

##### `log` (Log-Objekt)

Um die Protokollierungs-Detailstufe von geckodriver und Firefox zu erhöhen, können Sie ein [`log`](#log_log_object)-Objekt übergeben, das so aussieht wie `{"log": {"level": "trace"}}`, um alle Trace-Level-Protokolle und darüber einzuschließen.

##### `prefs` (Preferences-Objekt)

Abbildung von Präferenznamen zu Präferenzwerten, die ein String, ein Boolescher Wert oder eine ganze Zahl sein können.

### Android

Ab geckodriver 0.26.0 existieren zusätzliche Funktionen für den Fall, dass Firefox oder eine Anwendung, die [GeckoView](https://wiki.mozilla.org/Mobile/GeckoView) eingebettet hat, unter Android gesteuert werden muss:

#### `androidPackage` (String, erforderlich)

Der Paketname von Firefox, z.B. `org.mozilla.firefox`, `org.mozilla.firefox_beta` oder `org.mozilla.fennec`, abhängig vom Release-Kanal, oder der Paketname der Anwendung, die GeckoView einbettet, z.B. `org.mozilla.geckoview_example`.

#### `androidActivity` (String, optional)

Der vollständig qualifizierte Klassenname der zu startenden Aktivität, z.B. `.GeckoViewActivity`. Wenn nicht angegeben, wird die Standardaktivität des Pakets verwendet.

#### `androidDeviceSerial` (String, optional)

Die Seriennummer des Geräts, auf dem die Anwendung gestartet werden soll. Wenn nicht angegeben und mehrere Geräte verbunden sind, wird ein Fehler zurückgegeben.

#### `androidIntentArguments` (Array von Strings, optional)

Argumente, mit denen der Intent gestartet wird. Unter der Haube verwendet geckodriver [Android am](https://developer.android.com/tools/adb#am), um die zu testende Android-Anwendung zu starten. Die angegebenen Intent-Argumente werden dem `am start`-Befehl angehängt. Siehe Androids [Spezifikation für Intent-Argumente](https://developer.android.com/tools/adb#IntentSpec) für Einzelheiten. Dies ermöglicht es zu steuern, wie die Anwendung gestartet wird, und optionale Extras zur Aktivierung und Deaktivierung von Funktionen einzuschließen. Um zum Beispiel eine Ansicht mit einer angegebenen URL zu starten, bevor als Teil eines Tests navigiert wird, einschließen:

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

Um beispielsweise ein Boolesches Extra anzugeben, das mit [android.content.Intent.getBooleanExtra](<https://developer.android.com/reference/android/content/Intent#getBooleanExtra(java.lang.String,%20boolean)>) verarbeitet werden kann, einschließen:

```json
{
  "androidIntentArguments": ["--ez", "customBooleanFlagName", "true"]
}
```

#### `env` (Env-Objekt)

Abbildung des Umgebungsvariablennamens auf Umgebungsvariablenwert, die beide Strings sein müssen, die an den Anwendungsprozess weitergeleitet werden, der auf dem Android-Gerät läuft.

### Log-Objekt

Ein JSON-Objekt, das eines dieser Felder haben kann:

#### `level` (String)

Legen Sie die Protokollierungs-Detailstufe von geckodriver und Firefox fest. Verfügbare Stufen sind `trace`, `debug`, `config`, `info`, `warn`, `error` und `fatal`. Wenn nicht definiert, ist der Standardwert `info`. Der Wert wird case-insensitiv behandelt.

### Preferences-Objekt

Ein JSON-Objekt mit einem Eintrag pro festzulegender Präferenz. Die Präferenz wird in das [Profil](#profile_string) geschrieben, bevor Firefox gestartet wird. Eine vollständige Liste der verfügbaren Präferenzen ist durch den Besuch von "about:config" in Ihrem Firefox-Browser erreichbar. Einige dieser Präferenzen sind in [dieser Quelle](https://searchfox.org/firefox-main/source/modules/libpref/init/all.js) dokumentiert.

Ein Beispiel für ein Präferenzobjekt:

```json
{
  "dom.ipc.processCount": 8,
  "javascript.options.showInConsole": false
}
```

### Env-Objekt

Ein JSON-Objekt mit einem Eintrag pro festzulegender Umgebungsvariable. Auf dem Desktop wird der getestete Firefox mit der angegebenen Variablen in seiner Umgebung gestartet. Auf Android wird die auf GeckoView basierte App die angegebene Variable zum `env`-Block in ihrer Konfigurations-YAML haben.

Ein Beispiel für ein Env-Objekt:

```json
{
  "MOZ_LOG": "nsHttp:5",
  "MOZ_LOG_FILE": "/mnt/sdcard/log"
}
```

## Beispiel

Das folgende ist ein Beispiel eines vollständigen [Funktionalitäten-Objekts](/de/docs/Web/WebDriver/Reference/Capabilities), das eine spezifische Firefox-Binärdatei auswählt, um mit einem vorbereiteten [Profil](#profile_string) vom Dateisystem im [Headless-Modus](https://hacks.mozilla.org/2017/12/using-headless-mode-in-firefox/) ausgeführt zu werden. Es erhöht auch die Anzahl der IPC-Prozesse durch eine Präferenz, schaltet Chrome-Fehler/Warnungen in der Konsole aus und ermöglicht ausführlichere Protokollierung:

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

Die `moz:firefoxOptions` müssen – wie oben – innerhalb von [`alwaysMatch`](/de/docs/Web/WebDriver/Reference/Capabilities#alwaysmatch) oder in einem der [`firstMatch`](/de/docs/Web/WebDriver/Reference/Capabilities#firstmatch) [Funktionalitäten-Objekte](/de/docs/Web/WebDriver/Reference/Capabilities) platziert werden, wie hier gezeigt:

```json
{
  "capabilities": {
    "firstMatch": [{ "moz:firefoxOptions": {} }]
  }
}
```

### Android

Dies führt die GeckoView-Beispielanwendung aus, die auf dem ersten Android-Emulator installiert ist, der auf dem Host-Computer läuft:

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

- [geckodrivers Dokumentation zu unterstützten Firefox-Funktionalitäten](https://firefox-source-docs.mozilla.org/testing/geckodriver/Capabilities.html)
- [Chrome-spezifische WebDriver-Funktionalitäten](https://developer.chrome.com/docs/chromedriver/capabilities) (`goog:chromeOptions)`)
- [Liste der WebDriver-Funktionalitäten](/de/docs/Web/WebDriver/Reference/Capabilities)
- [Neues Sitzungs-Kommando](/de/docs/Web/WebDriver/Reference/Commands/NewSession)
