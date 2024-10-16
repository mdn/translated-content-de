---
title: firefoxOptions
slug: Web/WebDriver/Capabilities/firefoxOptions
l10n:
  sourceCommit: 2b26cc6e576d23f68fdf992767da81de9707965e
---

{{QuickLinksWithSubpages("/de/docs/Web/WebDriver/Capabilities")}}

Die **`moz:firefoxOptions`-Fähigkeit** ist eine benannte Menge von
Fähigkeiten spezifisch für [Firefox](https://www.mozilla.org/en-US/firefox/). Sie wird verwendet, um das
Verhalten von Firefox zu steuern und kann als Mitglied von
[`alwaysMatch`](/de/docs/Web/WebDriver/Capabilities#alwaysmatch) oder als Mitglied eines der
[`firstMatch`](/de/docs/Web/WebDriver/Capabilities#firstmatch)-Einträge verwendet werden.

Sie wird verwendet, um Optionen zu definieren, die steuern, wie Firefox gestartet und ausgeführt wird.

`moz:firefoxOptions` ist ein JSON-Objekt, das eines der folgenden Felder enthalten kann:

##### `binary` (Zeichenkette)

Absoluter Pfad zur benutzerdefinierten Firefox-Binärdatei, die verwendet werden soll.

Unter macOS können Sie entweder den Pfad zum Anwendungspaket angeben, z. B. `/Applications/Firefox.app`, oder den
absoluten Pfad zur ausführbaren Datei innerhalb dieses Pakets, zum Beispiel
`/Applications/Firefox.app/Contents/MacOS/firefox-bin`.

geckodriver wird versuchen, den Standardstandort von Firefox auf dem aktuellen System abzuleiten, wenn es undefiniert bleibt. Die
Standorte von Firefox sind standardmäßig:

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
          Der erste auf dem Systempfad gefundene <code>firefox</code>. Dies ist
          äquivalent zur Ausgabe der Ausführung
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

##### `args` (Array von Zeichenketten)

Befehlszeilenargumente, die an die Firefox-Binärdatei übergeben werden. Diese müssen das führende Minuszeichen (`-`) enthalten, wo erforderlich, z. B. `["-headless"]`.

Um dass geckodriver ein vorhandenes [Profil](#profile_string) im lokalen Dateisystem erkennt, können Sie
`["-profile", "/path/to/profile"]` übergeben. Aber wenn ein Profil zu einem Zielrechner übertragen werden muss, wird empfohlen, den `profile`-Eintrag zu verwenden.

##### `profile` (Zeichenkette)

Base64-kodiertes ZIP-Verzeichnis eines Profils, das für die Firefox-Instanz verwendet werden soll. Dies kann z. B. verwendet werden, um Erweiterungen oder benutzerdefinierte Zertifikate zu installieren, aber für die Einstellung benutzerdefinierter Präferenzen empfehlen wir die Verwendung des `prefs`-([Präferenzen-Objekts](#prefs_preferences_object))-Eintrags stattdessen.

Profile werden im temporären Ordner des Systems erstellt. Hier wird auch das codierte Profil extrahiert, wenn
`profile` angegeben ist. Standardmäßig erstellt geckodriver ein neues Profil an diesem Ort.

Das effektive Profil, das von der WebDriver-Sitzung verwendet wird, wird dem Benutzer in der `moz:profile`-
Fähigkeit in der [neuen Sitzungsantwort](/de/docs/Web/WebDriver/Commands/NewSession) zurückgegeben.

Um dass geckodriver ein vorhandenes Profil im Dateisystem erkennt, setzen Sie bitte das `args`-Feld auf
`{"args": ["-profile", "/path/to/your/profile"]}`. Beachten Sie, dass wenn Sie einen entfernten Client verwenden, der auf einen Server
auf einem anderen System abzielt, das Profil bereits auf dem Zielsystem existieren muss.

##### `log` (Log-Objekt)

Um die Protokollierungsverbosität von geckodriver und Firefox zu erhöhen, können Sie ein [`log`](#log_log_object)-
Objekt übergeben, das folgendermaßen aussehen kann `{"log": {"level": "trace"}}`, um alle Trace-Level-Protokolle und höher einzubeziehen.

##### `prefs` (Präferenzen-Objekt)

Zuordnung von Präferenznamen zu Präferenzwerten, die eine Zeichenkette, ein Boolean oder eine Zahl sein können.

### Android

Ab geckodriver 0.26.0 existieren zusätzliche Fähigkeiten, wenn Firefox oder eine Anwendung, die [GeckoView](https://wiki.mozilla.org/Mobile/GeckoView) einbettet, auf Android gesteuert werden muss:

#### `androidPackage` (Zeichenkette, erforderlich)

Der Paketname von Firefox, z. B. `org.mozilla.firefox`,
`org.mozilla.firefox_beta` oder `org.mozilla.fennec` abhängig vom Release-
Kanal oder der Paketname der Anwendung, die GeckoView einbettet, z. B. `org.mozilla.geckoview_example`.

#### `androidActivity` (Zeichenkette, optional)

Der vollständig qualifizierte Klassenname der aktivierten Aktivität, z. B. `.GeckoViewActivity`. Wenn nicht
angegeben, wird die Standardaktivität des Pakets verwendet.

#### `androidDeviceSerial` (Zeichenkette, optional)

Die Seriennummer des Geräts, auf dem die Anwendung gestartet werden soll. Wenn nicht angegeben und mehrere Geräte
angeschlossen sind, wird ein Fehler zurückgegeben.

#### `androidIntentArguments` (Array von Zeichenketten, optional)

Argumente, um den Intent zu starten. Unter der Haube verwendet geckodriver [Android am](https://developer.android.com/tools/adb#am), um die Android-Anwendung
unter Test zu starten. Die angegebenen Intent-Argumente werden dem `am start`-Befehl angehängt. Siehe Androids [Spezifikation für Intent-Argumente](https://developer.android.com/tools/adb#IntentSpec) für
Details. Dies ermöglicht die Steuerung, wie die Anwendung gestartet wird, und das Hinzufügen optionaler Extras zum Aktivieren und
Deaktivieren von Funktionen. Zum Beispiel, um mit der Ansichtaktion und einer angegebenen URL vor dem Navigieren als Teil eines
Tests zu starten, schließen Sie ein:

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

Zum Beispiel, um eine Boolean-Zusatzoption anzugeben, die mit [android.content.Intent.getBooleanExtra](<https://developer.android.com/reference/android/content/Intent#getBooleanExtra(java.lang.String,%20boolean)>) verarbeitet werden kann, schließen Sie ein:

```json
{
  "androidIntentArguments": ["--ez", "customBooleanFlagName", "true"]
}
```

#### `env` (Env-Objekt)

Zuordnung von Umgebungsvariablennamen zu Umgebungsvariablenwerten, wobei beide Zeichenketten sein müssen, die an den Anwendungsprozess auf dem Android-Gerät weitergeleitet werden.

### Log-Objekt

Ein JSON-Objekt, das eines dieser Felder haben kann:

#### `level` (Zeichenkette)

Setzt das Verbositätslevel von geckodriver und Firefox. Verfügbare Levels sind `trace`, `debug`,
`config`, `info`, `warn`, `error` und `fatal`. Wenn undefiniert bleibt, ist der Standard `info`. Der Wert wird ohne Berücksichtigung der Groß- und Kleinschreibung behandelt.

### Präferenzen-Objekt

Ein JSON-Objekt mit einem Eintrag pro einzustellender Präferenz. Die Präferenz wird ins [Profil](#profile_string) geschrieben, bevor Firefox startet. Eine vollständige Liste der verfügbaren Präferenzen ist erhältlich, indem
"about:config" in Ihrem Firefox-Browser besucht wird. Einige davon sind in [dieser Quelle](https://searchfox.org/mozilla-central/source/modules/libpref/init/all.js) dokumentiert.

Ein Beispiel eines Präferenzobjekts:

```json
{
  "dom.ipc.processCount": 8,
  "javascript.options.showInConsole": false
}
```

### Env-Objekt

Ein JSON-Objekt mit einem Eintrag pro Umgebungsvariable, die eingestellt werden soll. Auf dem Desktop wird das getestete Firefox mit der
gegebenen Variable in seiner Umgebung gestartet. Auf Android, wird der App basierend auf GeckoView die gegebene Variable zum
`env`-Block in ihrer Konfigurations-YAML hinzugefügt.

Ein Beispiel eines Env-Objekts:

```json
{
  "MOZ_LOG": "nsHttp:5",
  "MOZ_LOG_FILE": "/mnt/sdcard/log"
}
```

## Beispiel

Das Folgende ist ein Beispiel eines vollständigen [Fähigkeiten-Objekts](/de/docs/Web/WebDriver/Capabilities), das
eine spezifische Firefox-Binärdatei auswählt, die mit einem vorbereiteten [Profil](#profile_string) vom Dateisystem im [kopflose Modus](https://hacks.mozilla.org/2017/12/using-headless-mode-in-firefox/) ausgeführt werden soll. Es erhöht auch die Anzahl der IPC-Prozesse
durch eine Präferenz, schaltet Chrome-Fehler/Warnungen in der Konsole aus und aktiviert eine detailliertere Protokollierung:

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

Das `moz:firefoxOptions` muss – wie oben gezeigt – innerhalb von
[`alwaysMatch`](/de/docs/Web/WebDriver/Capabilities#alwaysmatch), oder in einem der
[`firstMatch`](/de/docs/Web/WebDriver/Capabilities#firstmatch) [Fähigkeiten-Objekte](/de/docs/Web/WebDriver/Capabilities) wie hier:

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

Dies führt die GeckoView-Beispielanwendung aus, wie sie auf dem ersten Android-Emulator, der auf dem Host-Computer läuft, installiert ist:

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
- [Chrome-spezifische WebDriver-Fähigkeiten](https://developer.chrome.com/docs/chromedriver/capabilities)
  (`goog:chromeOptions)`
- [Liste der WebDriver-Fähigkeiten](/de/docs/Web/WebDriver/Capabilities)
- [Neue Sitzung](/de/docs/Web/WebDriver/Commands/NewSession) Befehl

{{QuickLinksWithSubpages}}
