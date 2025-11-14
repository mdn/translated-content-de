---
title: firefoxOptions
slug: Web/WebDriver/Reference/Capabilities/firefoxOptions
l10n:
  sourceCommit: 0c81cbce5f95a0be935724bcd936f5592774eb3a
---

Die **`moz:firefoxOptions`-Fähigkeit** ist eine untergeordnete Menge von Fähigkeiten, die spezifisch für [Firefox](https://www.firefox.com/en-US/) sind. Sie wird verwendet, um das Verhalten von Firefox zu steuern und kann als Mitglied von [`alwaysMatch`](/de/docs/Web/WebDriver/Reference/Capabilities#alwaysmatch) oder als Mitglied eines der [`firstMatch`](/de/docs/Web/WebDriver/Reference/Capabilities#firstmatch)-Einträge verwendet werden.

Sie wird verwendet, um Optionen zu definieren, die steuern, wie Firefox gestartet und ausgeführt wird.

## Wert

`moz:firefoxOptions` ist ein JSON-Objekt, das die folgenden Felder enthalten kann:

### `binary` (string)

Absoluter Pfad zum benutzerdefinierten Firefox-Binary, das verwendet werden soll.

Unter macOS können Sie entweder den Pfad zum Anwendungspaket angeben, z. B. `/Applications/Firefox.app`, oder den absoluten Pfad zur ausführbaren Datei innerhalb dieses Pakets, z. B. `/Applications/Firefox.app/Contents/MacOS/firefox-bin`.

Geckodriver wird versuchen, den Standardpfad von Firefox auf dem aktuellen System abzuleiten, wenn nichts definiert wurde. Die Standardpfade von Firefox sind:

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">System</th>
      <th scope="col">Standardpfad</th>
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
          Der erste <code>firefox</code>, der im Systempfad gefunden wird. Dies entspricht dem Ergebnis der Ausführung von
          <a
            href="https://manpages.debian.org/stretch/debianutils/which.1.en.html"
            >which(1)</a
          >:
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
        <p>Aus der Windows-Systemregisterdatenbank:</p>
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

Kommandozeilenargumente, die an das Firefox-Binary übergeben werden. Diese müssen den führenden Bindestrich (`-`) beinhalten, wo erforderlich, z.B. `["-headless"]`.

Um geckodriver ein bestehendes [Profil](#profile_string) im lokalen Dateisystem verwenden zu lassen, können Sie `["-profile", "/path/to/profile"]` übergeben. Wenn jedoch ein Profil auf eine Zielmaschine übertragen werden muss, wird empfohlen, den `profile`-Eintrag zu verwenden.

### `profile` (string)

Base64-codiertes ZIP eines Profilverzeichnisses, das für die Firefox-Instanz verwendet werden soll. Dies kann z.B. verwendet werden, um Erweiterungen oder benutzerdefinierte Zertifikate zu installieren, aber für das Setzen benutzerdefinierter Präferenzen empfehlen wir die Verwendung des `prefs`-Eintrags ([Preferences Object](#prefs_preferences_object)).

Profile werden im temporären Ordner des Systems erstellt. Dies ist auch der Ort, an dem das codierte Profil extrahiert wird, wenn `profile` bereitgestellt wird. Standardmäßig erstellt geckodriver ein neues Profil an diesem Ort.

Das effektive Profil, das von der WebDriver-Sitzung verwendet wird, wird dem Benutzer in der `moz:profile`-Fähigkeit in der [neuen Sitzungsantwort](/de/docs/Web/WebDriver/Reference/Commands/NewSession) zurückgegeben.

Um geckodriver ein bestehendes Profil im Dateisystem verwenden zu lassen, setzen Sie bitte das `args`-Feld auf `{"args": ["-profile", "/path/to/your/profile"]}`. Beachten Sie, dass, wenn Sie ein Remote-Client verwenden, das auf einen Server in einem anderen System abzielt, das Profil auf dem Zielsystem bereits existieren muss.

### `log` (Log-Objekt)

Um die Protokollierungsstufe von geckodriver und Firefox zu erhöhen, können Sie ein `log`-Objekt mitgeben, das wie `{"log": {"level": "trace"}}` aussieht, um alle Trace-Level-Logs und darüber einzuschließen.

Ein JSON-Objekt, das eines dieser Felder haben kann:

#### `level` (string)

Setzen Sie die Verbositätsstufe von geckodriver und Firefox. Verfügbare Stufen sind `trace`, `debug`, `config`, `info`, `warn`, `error` und `fatal`. Wenn nicht definiert, ist der Standardwert `info`. Der Wert wird nicht auf Groß- und Kleinschreibung überprüft.

### `prefs` (Preferences-Objekt)

Zuordnung von Präferenznamen zu Präferenzwerten, die ein String, ein Boolean oder ein Integer sein können.

Ein JSON-Objekt mit einem Eintrag pro zu setzender Präferenz. Die Präferenz wird in das [Profil](#profile_string) geschrieben, bevor Firefox gestartet wird. Eine vollständige Liste der verfügbaren Präferenzen ist verfügbar, indem Sie "about:config" in Ihrem Firefox-Browser besuchen. Einige davon sind in [dieser Quelle](https://searchfox.org/firefox-main/source/modules/libpref/init/all.js) dokumentiert.

Ein Beispiel für ein Präferenzobjekt:

```json
{
  "dom.ipc.processCount": 8,
  "javascript.options.showInConsole": false
}
```

### Android

Beginnend mit geckodriver 0.26.0 gibt es zusätzliche Fähigkeiten, wenn Firefox oder eine Anwendung, die [GeckoView](https://wiki.mozilla.org/Mobile/GeckoView) einbettet, auf Android gesteuert werden soll:

#### `androidPackage` (string, erforderlich)

Der Paketname von Firefox, z.B. `org.mozilla.firefox`, `org.mozilla.firefox_beta` oder `org.mozilla.fennec` abhängig vom Release-Kanal, oder der Paketname der Anwendung, die GeckoView einbettet, z.B. `org.mozilla.geckoview_example`.

#### `androidActivity` (string, optional)

Der vollständig qualifizierte Klassenname der zu startenden Aktivität, z.B. `.GeckoViewActivity`. Wenn nicht angegeben, wird die Standardaktivität des Pakets verwendet.

#### `androidDeviceSerial` (string, optional)

Die Seriennummer des Geräts, auf dem die Anwendung gestartet werden soll. Wenn nicht angegeben und mehrere Geräte angeschlossen sind, wird ein Fehler zurückgegeben.

#### `androidIntentArguments` (Array von Strings, optional)

Argumente zum Starten des Intents. Im Hintergrund verwendet geckodriver [Android am](https://developer.android.com/tools/adb#am), um die Android-Anwendung unter Test zu starten. Die gegebenen Intent-Argumente werden dem `am start`-Befehl hinzugefügt. Siehe Androids [Spezifikation für Intent-Argumente](https://developer.android.com/tools/adb#IntentSpec) für Details. Dies ermöglicht die Kontrolle, wie die Anwendung gestartet wird und optionale Extras zur Aktivierung und Deaktivierung von Funktionen hinzuzufügen. Zum Beispiel, um mit der View-Action zu starten und eine bestimmte URL, bevor im Rahmen eines Tests navigiert wird, hinzuzufügen:

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

Zum Beispiel, um ein boolesches Extra zu spezifizieren, das mit [android.content.Intent.getBooleanExtra](<https://developer.android.com/reference/android/content/Intent#getBooleanExtra(java.lang.String,%20boolean)>) verarbeitet werden kann:

```json
{
  "androidIntentArguments": ["--ez", "customBooleanFlagName", "true"]
}
```

#### `env` (Env-Objekt)

Zuordnung von Umgebungsvariablennamen zu Umgebungsvariablenwerten, die beide Strings sein müssen, die an den Anwendungsprozess auf dem Android-Gerät weitergeleitet werden.

Ein JSON-Objekt mit einem Eintrag pro zu setzender Umgebungsvariable. Auf dem Desktop wird der getestete Firefox mit der gegebenen Variablen in seiner Umgebung gestartet. Auf Android wird die auf GeckoView basierende App die gegebene Variable dem `env`-Block in ihrer Konfigurations-YAML hinzufügen.

Ein Beispiel für ein Env-Objekt:

```json
{
  "MOZ_LOG": "nsHttp:5",
  "MOZ_LOG_FILE": "/mnt/sdcard/log"
}
```

## Beispiel

Folgendes ist ein Beispiel für ein vollständiges [Capabilities-Objekt](/de/docs/Web/WebDriver/Reference/Capabilities), das ein spezifisches Firefox-Binary auswählt, um mit einem vorbereiteten [Profil](#profile_string) aus dem Dateisystem im [headless mode](https://hacks.mozilla.org/2017/12/using-headless-mode-in-firefox/) zu laufen. Es erhöht auch die Anzahl der IPC-Prozesse durch eine Präferenz, schaltet Chrome-Fehler/Warnungen in der Konsole aus und aktiviert eine detailliertere Protokollierung:

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

Die `moz:firefoxOptions` müssen—wie oben—innerhalb von [`alwaysMatch`](/de/docs/Web/WebDriver/Reference/Capabilities#alwaysmatch) oder in einem der [`firstMatch`](/de/docs/Web/WebDriver/Reference/Capabilities#firstmatch) [Capabilities-Objekte](/de/docs/Web/WebDriver/Reference/Capabilities) platziert werden, wie hier zu sehen:

```json
{
  "capabilities": {
    "firstMatch": [{ "moz:firefoxOptions": {} }]
  }
}
```

### Android

Dies führt die GeckoView-Beispielanwendung aus, wie auf dem ersten Android-Emulator, der auf dem Host-Rechner läuft, installiert:

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

- [Die Dokumentation zu geckodriver über unterstützte Firefox-Fähigkeiten](https://firefox-source-docs.mozilla.org/testing/geckodriver/Capabilities.html)
- [Chrome-spezifische WebDriver-Fähigkeiten](https://developer.chrome.com/docs/chromedriver/capabilities)
  (`goog:chromeOptions)`)
- [Liste der WebDriver-Fähigkeiten](/de/docs/Web/WebDriver/Reference/Capabilities)
- [Neuer Sitzung](/de/docs/Web/WebDriver/Reference/Commands/NewSession)-Befehl
