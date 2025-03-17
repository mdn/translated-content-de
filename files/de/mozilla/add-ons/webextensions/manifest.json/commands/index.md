---
title: commands
slug: Mozilla/Add-ons/WebExtensions/manifest.json/commands
l10n:
  sourceCommit: ad896488bf8fac04fc6fa144c441fdbfd880737c
---

{{AddonSidebar}}

<table class="fullwidth-table standard-table">
  <tbody>
    <tr>
      <th scope="row">Typ</th>
      <td><code>Object</code></td>
    </tr>
    <tr>
      <th scope="row">Verpflichtend</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Manifest-Version</th>
      <td>2 oder höher</td>
    </tr>
    <tr>
      <th scope="row">Beispiel</th>
      <td>
        <pre class="brush: json">
"commands": {
  "toggle-feature": {
    "suggested_key": {
      "default": "Ctrl+Shift+Y",
      "linux": "Ctrl+Shift+U"
    },
    "description": "Send a 'toggle-feature' event"
  }
}</pre
        >
      </td>
    </tr>
  </tbody>
</table>

Verwenden Sie den **`commands`**-Schlüssel, um eine oder mehrere Tastenkombinationen für Ihre Erweiterung zu definieren.

Jede Tastenkombination wird mit einem **Namen**, einer **Tastenkombination** und einer **Beschreibung** definiert. Nachdem Sie Befehle in der `manifest.json`-Datei Ihrer Erweiterung definiert haben, können Sie die zugehörigen Tastenkombinationen mit der {{WebExtAPIRef("commands")}}-API überwachen.

## Syntax

Der `commands`-Schlüssel ist ein Objekt, und jeder Shortcut ist eine Eigenschaft davon. **Der Name der Eigenschaft ist der Name des Shortcuts.**

Der Wert jedes Shortcuts ist ein Objekt mit bis zu 2 Eigenschaften:

1. `suggested_key` {{optional_inline}}: die Tastenkombination, die den Shortcut aktiviert.
2. `description` {{optional_inline}}: ein String, der den Shortcut beschreibt, d.h. was er tut.

Die Eigenschaft `suggested_key` ist ein Objekt mit beliebigen oder keinen dieser Eigenschaften (alle Strings):

- `"default"`
- `"mac"`
- `"linux"`
- `"windows"`
- `"chromeos"`
- `"android"`
- `"ios"`

Der Wert jeder Eigenschaft ist der Tastatur-Shortcut für den Befehl auf dieser Plattform, als ein String mit durch "`+`" getrennten Tasten. Der Wert für `"default"` wird auf allen Plattformen verwendet, die nicht explizit aufgeführt sind. Wenn `"default"` nicht enthalten ist, hat der Befehl keinen Tastatur-Shortcut auf Plattformen, die nicht enthalten sind, es sei denn, ein Shortcut wird vom Benutzer oder durch die {{WebExtAPIRef("commands.update")}}-API konfiguriert.

Zum Beispiel:

```json
"commands": {
  "toggle-feature": {
    "suggested_key": {
      "default": "Alt+Shift+U",
      "linux": "Ctrl+Shift+U"
    },
    "description": "Send a 'toggle-feature' event to the extension"
  },
  "do-another-thing": {
    "suggested_key": {
      "default": "Ctrl+Shift+Y"
    }
  },
  "do-something-else": {
    "suggested_key": {
      "linux": "Ctrl+Shift+P"
    }
  },
  "do-nothing-yet": {}
}
```

Dieses JSON definiert diese Shortcuts:

1. `"toggle-feature"`, zugänglich mit <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>U</kbd> auf Linux und <kbd>Alt</kbd> + <kbd>Shift</kbd> + <kbd>U</kbd> auf allen anderen Plattformen.
2. `"do-another-thing"`, zugänglich mit <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Y</kbd> auf allen Plattformen.
3. `"do-something-else"`, zugänglich mit <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>P</kbd> nur auf Linux, und kein Standard-Shortcut auf anderen Plattformen.
4. `"do-nothing-yet"`, setzt keinen Tastatur-Shortcut, ermöglicht aber einen Shortcut vom Benutzer oder mit der {{WebExtAPIRef("commands.update")}}-API zu setzen.

Sie können für die Befehle mit Code wie diesem lauschen, in diesem Fall für den `"toggle-feature"`-Befehl:

```js
browser.commands.onCommand.addListener((command) => {
  if (command === "toggle-feature") {
    console.log("Toggling the feature!");
  }
});
```

### Spezielle Shortcuts

Es gibt 4 **spezielle Shortcuts mit Standardaktionen**, für die das Ereignis {{WebExtAPIRef("commands.onCommand")}} nicht ausgelöst wird:

- `_execute_browser_action`: wirkt wie ein Klick auf eine [Toolbar-Schaltfläche](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Toolbar_button), die mit {{WebExtAPIRef("browserAction")}} erstellt oder im Schlüssel [browser_action](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action) in der manifest.json-Datei angegeben wird.
- `_execute_action`: wirkt wie ein Klick auf eine [Toolbar-Schaltfläche](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Toolbar_button), die mit {{WebExtAPIRef("action")}} erstellt oder im Schlüssel [action](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/action) in der manifest.json-Datei angegeben wird.
- `_execute_page_action`: wirkt wie ein Klick auf eine [Adressleisten-Schaltfläche](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Page_actions), die mit {{WebExtAPIRef("pageAction")}} erstellt oder im Schlüssel [page_action](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action) in der manifest.json-Datei angegeben wird.
- `_execute_sidebar_action`: öffnet die [Sidebar](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Sidebars) der Erweiterung, die im Schlüssel [sidebar_action](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action) der manifest.json-Datei angegeben ist.

Die Verfügbarkeit dieser speziellen Shortcuts variiert zwischen Manifest-Versionen und Browsern, wie folgt:

<table>
<thead>
  <tr>
    <th></th>
    <th>Manifest V2</th>
    <th>Manifest V3</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><code>_execute_browser_action</code></td>
    <td>Ja</td>
    <td>Nein</td>
  </tr>
  <tr>
    <td><code>_execute_action</code></td>
    <td>Nein</td>
    <td>Ja</td>
  </tr>
  <tr>
    <td><code>_execute_page_action</code></td>
    <td>Ja</td>
    <td>Nur Firefox</td>
  </tr>
  <tr>
    <td><code>_execute_sidebar_action</code></td>
    <td>Nur Firefox</td>
    <td>Nur Firefox</td>
  </tr>
</tbody>
</table>

> [!NOTE]
> Wenn der Benutzer den Shortcut des Befehls `_execute_browser_action` ändert, wird dieser automatisch auf den Befehl `_execute_action` übertragen, wenn die Erweiterung von Manifest V2 auf V3 migriert. Dies wurde in Chrome 111 und Firefox 127 implementiert.

Zum Beispiel definiert dieses JSON eine Tastenkombination, die die Browser-Aktion der Erweiterung klickt:

```json
"commands": {
  "_execute_browser_action": {
    "suggested_key": {
      "default": "Ctrl+Shift+Y"
    }
  }
}
```

## Shortcut-Werte

Es gibt zwei gültige Formate für Shortcut-Tasten: als **Tastenkombination** oder als **Medientaste**.

### Tastenkombinationen

> [!NOTE]
> Auf Macs wird `"Ctrl"` als `"Command"` interpretiert, wenn Sie also tatsächlich `"Ctrl"` benötigen, geben Sie `"MacCtrl"` an.

Tastenkombinationen müssen aus 2 oder 3 Tasten bestehen:

1. **Modifier** (obligatorisch, außer bei Funktionstasten). Dies kann einer der folgenden sein: `"Ctrl"`, `"Alt"`, `"Command"` oder `"MacCtrl"`.
2. **Zweit-Modifier** (optional). Wenn angegeben, muss dies entweder `"Shift"` oder (für Firefox ≥ 63) einer von `"Ctrl"`, `"Alt"`, `"Command"` oder `"MacCtrl"` sein. Darf nicht der bereits als Hauptmodifier verwendete Modifier sein.
3. **Taste** (obligatorisch). Dies kann eine der folgenden sein:

   - die Buchstaben `A` – `Z`
   - die Zahlen `0` – `9`
   - die Funktionstasten `F1` – `F12`
     > [!NOTE]
     > Ab Firefox 135 können Benutzer die Tasten `F13` bis `F19` einer Erweiterung zuweisen, indem sie [Erweiterungs-Shortcuts verwalten](https://support.mozilla.org/de/kb/manage-extension-shortcuts-firefox) verwenden. Ihre Erweiterung kann diese Tasten nicht aus der Manifest-Datei zuweisen. Sie kann sie jedoch mit {{WebExtAPIRef("commands.update")}} zuweisen.
   - `Comma`, `Period`, `Home`, `End`, `PageUp`, `PageDown`, `Space`, `Insert`, `Delete`, `Up`, `Down`, `Left`, `Right`

Die Taste wird dann als ein String angegeben, der die Menge der Tastenwerte in der oben aufgeführten Reihenfolge enthält, getrennt durch "`+`". Zum Beispiel, `"Ctrl+Shift+Z"`.

Wenn eine Tastenkombination bereits vom Browser (wie `"Ctrl+P"`) oder durch ein vorhandenes Add-on verwendet wird, können Sie diese nicht überschreiben. Sie können sie definieren, aber Ihr Ereignishandler wird nicht aufgerufen, wenn der Benutzer die Tastenkombination drückt.

### Medientasten

Alternativ kann der Shortcut als eine dieser Medientasten angegeben werden:

- `"MediaNextTrack"`
- `"MediaPlayPause"`
- `"MediaPrevTrack"`
- `"MediaStop"`

## Aktualisierung von Shortcuts

In Firefox kann Ihre Erweiterung die Einstellung der Shortcut-Tasten mithilfe von {{WebExtAPIRef("commands.update()")}} aktualisieren. Benutzer können Shortcuts mit der Option [Erweiterungs-Shortcuts verwalten](https://support.mozilla.org/de/kb/manage-extension-shortcuts-firefox) unter `about:addons` aktualisieren, wie in [diesem Video](https://bug1303384.bmoattachments.org/attachment.cgi?id=9051647) gezeigt. Ihre Erweiterung kann diese Option mit {{WebExtAPIRef("commands.openShortcutSettings()")}} öffnen.

In Chrome können Erweiterungen Shortcut-Tasten nicht programmatisch aktualisieren. Benutzer können Shortcuts unter `chrome://extensions/shortcuts` ändern, das mit {{WebExtAPIRef("tabs.create()")}} geöffnet werden kann.

Safari unterstützt keine programmatische oder benutzergesteuerte Änderung von Shortcuts für Erweiterungen.

## Beispiel

Definieren Sie einen Tastatur-Shortcut, der nur die Standard-Tastenkombination verwendet:

```json
"commands": {
  "toggle-feature": {
    "suggested_key": {
      "default": "Ctrl+Shift+Y"
    },
    "description": "Send a 'toggle-feature' event"
  }
}
```

Definieren Sie zwei Tastatur-Shortcuts, einen mit einer plattformenspezifischen Tastenkombination:

```json
"commands": {
  "toggle-feature": {
    "suggested_key": {
      "default": "Alt+Shift+U",
      "linux": "Ctrl+Shift+U"
    },
    "description": "Send a 'toggle-feature' event"
  },
  "do-another-thing": {
    "suggested_key": {
      "default": "Ctrl+Shift+Y"
    }
  }
}
```

## Browser-Kompatibilität

{{Compat}}
