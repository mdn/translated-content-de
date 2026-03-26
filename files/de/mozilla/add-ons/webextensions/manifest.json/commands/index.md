---
title: commands
slug: Mozilla/Add-ons/WebExtensions/manifest.json/commands
l10n:
  sourceCommit: ceaac5d55bef85edef9a4a716e6bd6ca3d3ec9c1
---

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

Verwenden Sie den **`commands`**-Schlüssel, um in Ihrer Erweiterung eine oder mehrere Tastaturkürzel zu definieren.

Jedes Tastaturkürzel wird mit einem **Namen**, einer **Tastenkombination** und einer **Beschreibung** definiert. Nachdem Sie Befehle im `manifest.json` Ihrer Erweiterung definiert haben, können Sie mit der {{WebExtAPIRef("commands")}} API deren zugehörige Tastenkombinationen erfassen.

## Syntax

Der `commands`-Schlüssel ist ein Objekt, und jedes Kürzel ist eine Eigenschaft davon. **Der Name der Eigenschaft ist der Name des Kürzels.**

Der Wert jedes Kürzels ist ein Objekt mit bis zu 2 Eigenschaften:

1. `suggested_key` {{optional_inline}}: Die Tastenkombination, die das Kürzel aktiviert.
2. `description` {{optional_inline}}: Eine Zeichenkette, die das Kürzel beschreibt, d.h. was es tut.

Die `suggested_key`-Eigenschaft ist ein Objekt mit eventuell vorhandenen dieser Eigenschaften (alle als Strings):

- `"default"`
- `"mac"`
- `"linux"`
- `"windows"`
- `"chromeos"`
- `"android"`
- `"ios"`

Der Wert jeder Eigenschaft ist das Tastaturkürzel für den Befehl auf dieser Plattform, als String, der Tasten durch `+` getrennt enthält. Der Wert für `"default"` wird auf allen Plattformen verwendet, die nicht explizit aufgeführt sind. Wenn `"default"` nicht enthalten ist, hat der Befehl auf keiner nicht aufgeführten Plattform ein Tastaturkürzel, es sei denn, ein Kürzel wird vom Benutzer oder über die {{WebExtAPIRef("commands.update")}} API konfiguriert.

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

Dieser JSON definiert diese Kürzel:

1. `"toggle-feature"`, zugänglich mit <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>U</kbd> unter Linux und <kbd>Alt</kbd> + <kbd>Shift</kbd> + <kbd>U</kbd> auf allen anderen Plattformen.
2. `"do-another-thing"`, zugänglich mit <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Y</kbd> auf allen Plattformen.
3. `"do-something-else"`, zugänglich mit <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>P</kbd> nur unter Linux und ohne Standardkürzel auf anderen Plattformen.
4. `"do-nothing-yet"`, setzt kein Tastaturkürzel, aber ermöglicht das Setzen eines Kürzels vom Benutzer oder mit der {{WebExtAPIRef("commands.update")}} API.

Sie können die Befehle mit Code wie diesem überwachen, in diesem Fall für den `"toggle-feature"` Befehl:

```js
browser.commands.onCommand.addListener((command) => {
  if (command === "toggle-feature") {
    console.log("Toggling the feature!");
  }
});
```

### Spezielle Kürzel

Es gibt 4 **spezielle Kürzel mit Standardaktionen**, für die das {{WebExtAPIRef("commands.onCommand")}}-Ereignis nicht ausgelöst wird:

- `_execute_browser_action`: funktioniert wie ein Klick auf eine [Toolbar-Schaltfläche](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Toolbar_button), die mit {{WebExtAPIRef("browserAction")}} erstellt oder im [browser_action](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action) Schlüssel im manifest.json Schlüssel angegeben wurde.
- `_execute_action`: funktioniert wie ein Klick auf eine [Toolbar-Schaltfläche](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Toolbar_button), die mit {{WebExtAPIRef("action")}} erstellt oder im [action](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/action) Schlüssel im manifest.json Schlüssel angegeben wurde.
- `_execute_page_action`: funktioniert wie ein Klick auf eine [Adressleisten-Schaltfläche](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Page_actions), die mit {{WebExtAPIRef("pageAction")}} erstellt oder im [page_action](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action) Schlüssel im manifest.json Schlüssel angegeben wurde.
- `_execute_sidebar_action`: öffnet die [Sidebar](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Sidebars) der Erweiterung, die im [sidebar_action](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action) manifest.json Schlüssel angegeben ist.

Die Verfügbarkeit dieser speziellen Kürzel variiert zwischen Manifest-Versionen und Browsern, wie folgt:

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
> Wenn der Benutzer das Kürzel des `_execute_browser_action`-Befehls ändert, wird es automatisch auf den `_execute_action`-Befehl übertragen, wenn die Erweiterung von Manifest V2 zu V3 migriert. Dies wurde in Chrome 111 und Firefox 127 implementiert.

Zum Beispiel definiert dieses JSON eine Tastenkombination, die auf die Browser-Aktion der Erweiterung klickt:

```json
"commands": {
  "_execute_browser_action": {
    "suggested_key": {
      "default": "Ctrl+Shift+Y"
    }
  }
}
```

## Kürzelwerte

Es gibt zwei gültige Formate für Kürzeltasten: als **Tastenkombination** oder als **Medientaste**.

### Tastenkombinationen

> [!NOTE]
> Auf Macs wird `"Ctrl"` als `"Command"` interpretiert. Wenn Sie tatsächlich `"Ctrl"` benötigen, geben Sie `"MacCtrl"` an.

Tastenkombinationen müssen aus 2 oder 3 Tasten bestehen:

1. **Modifier** (verpflichtend, außer bei Funktionstasten). Dies kann einer der folgenden sein: `"Ctrl"`, `"Alt"`, `"Command"`, oder `"MacCtrl"`.
2. **Sekundärer Modifier** (optional). Wenn angegeben, muss dies entweder `"Shift"` oder (für Firefox ≥ 63) einer von `"Ctrl"`, `"Alt"`, `"Command"`, oder `"MacCtrl"` sein. Er darf nicht der Modifier sein, der bereits als Hauptmodifier verwendet wird.
3. **Taste** (verpflichtend). Dies kann eine der folgenden sein:
   - die Buchstaben `A` – `Z`
   - die Zahlen `0` – `9`
   - die Funktionstasten `F1` – `F12`
     > [!NOTE]
     > Ab Firefox 135 können Benutzer die Tasten `F13` bis `F19` einer Erweiterung zuordnen, indem sie [Manage Extension Shortcuts](https://support.mozilla.org/en-US/kb/manage-extension-shortcuts-firefox) verwenden. Ihre Erweiterung kann diese Tasten nicht aus der Manifest-Datei zuordnen. Sie kann sie jedoch mit {{WebExtAPIRef("commands.update")}} zuordnen.
   - `Comma`, `Period`, `Home`, `End`, `PageUp`, `PageDown`, `Space`, `Insert`, `Delete`, `Up`, `Down`, `Left`, `Right`

Die Taste wird dann als String angegeben, der die Tastenkombinationen in der oben aufgeführten Reihenfolge enthält, getrennt durch `+`. Zum Beispiel, `"Ctrl+Shift+Z"`.

Wenn eine Tastenkombination bereits vom Browser (wie `"Ctrl+P"`) oder von einem bestehenden Add-on verwendet wird, können Sie sie nicht überschreiben. Sie können sie definieren, aber Ihr Ereignishandler wird nicht aufgerufen, wenn der Benutzer die Tastenkombination drückt.

### Medientasten

Alternativ kann das Kürzel als eine dieser Medientasten angegeben werden:

- `"MediaNextTrack"`
- `"MediaPlayPause"`
- `"MediaPrevTrack"`
- `"MediaStop"`

## Kürzel aktualisieren

In Firefox kann Ihre Erweiterung die Einstellungen für Tastenkombinationen mit {{WebExtAPIRef("commands.update()")}} aktualisieren. Benutzer können Kürzel über die [Manage Extension Shortcuts](https://support.mozilla.org/en-US/kb/manage-extension-shortcuts-firefox) Option bei `about:addons` aktualisieren, wie in [diesem Video](https://bug1303384.bmoattachments.org/attachment.cgi?id=9051647) gezeigt. Ihre Erweiterung kann diese Option mit {{WebExtAPIRef("commands.openShortcutSettings()")}} öffnen.

In Chrome können Erweiterungen Tastenkombinationen nicht programmgesteuert aktualisieren. Benutzer können Kürzel unter `chrome://extensions/shortcuts` ändern, die mit {{WebExtAPIRef("tabs.create()")}} geöffnet werden kann.

Safari unterstützt keine programmgesteuerte Änderung von Kürzeln für Erweiterungen. Ab Safari 26 können Benutzer die Kürzel einer Erweiterung in den Erweiterungseinstellungen von Safari ändern.

## Beispiel

Definieren Sie ein Tastaturkürzel nur mit der Standard-Tastenkombination:

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

Definieren Sie zwei Tastaturkürzel, eines mit einer plattformspezifischen Tastenkombination:

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
