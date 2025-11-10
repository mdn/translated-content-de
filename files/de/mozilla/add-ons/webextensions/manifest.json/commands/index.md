---
title: commands
slug: Mozilla/Add-ons/WebExtensions/manifest.json/commands
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
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
      <th scope="row">Manifestversion</th>
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

Verwenden Sie den **`commands`** Schlüssel, um eine oder mehrere Tastenkombinationen für Ihre Erweiterung zu definieren.

Jede Tastenkombination wird mit einem **Namen**, einer **Kombination von Tasten** und einer **Beschreibung** definiert. Nachdem Sie Befehle im `manifest.json` Ihrer Erweiterung definiert haben, können Sie mit der {{WebExtAPIRef("commands")}} API auf deren zugehörige Tastenkombinationen hören.

## Syntax

Der `commands` Schlüssel ist ein Objekt, und jede Verknüpfung ist eine Eigenschaft davon. **Der Name der Eigenschaft ist der Name der Verknüpfung.**

Der Wert jeder Verknüpfung ist ein Objekt mit bis zu 2 Eigenschaften:

1. `suggested_key` {{optional_inline}}: die Tastenkombination, die die Verknüpfung aktiviert.
2. `description` {{optional_inline}}: ein String, der die Verknüpfung beschreibt, d.h. was sie tut.

Die `suggested_key` Eigenschaft ist ein Objekt mit diesen oder keinen dieser Eigenschaften (alle Strings):

- `"default"`
- `"mac"`
- `"linux"`
- `"windows"`
- `"chromeos"`
- `"android"`
- `"ios"`

Der Wert jeder Eigenschaft ist die Tastenkombination für den Befehl auf dieser Plattform, als ein String, der Tasten enthält, die durch `+` getrennt sind. Der Wert für `"default"` wird auf allen Plattformen verwendet, die nicht explizit aufgeführt sind. Wenn `"default"` nicht enthalten ist, hat der Befehl keine Tastenkombination auf Plattformen, die nicht enthalten sind, es sei denn, eine Verknüpfung wird vom Benutzer oder durch die {{WebExtAPIRef("commands.update")}} API konfiguriert.

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

Dieses JSON definiert diese Verknüpfungen:

1. `"toggle-feature"`, wird mit <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>U</kbd> auf Linux aufgerufen und mit <kbd>Alt</kbd> + <kbd>Shift</kbd> + <kbd>U</kbd> auf allen anderen Plattformen.
2. `"do-another-thing"`, wird mit <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Y</kbd> auf allen Plattformen aufgerufen.
3. `"do-something-else"`, wird mit <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>P</kbd> nur auf Linux aufgerufen und hat keine Standardverknüpfung auf anderen Plattformen.
4. `"do-nothing-yet"`, setzt keine Tastenkombination, ermöglicht aber eine Verknüpfung, die vom Benutzer oder mit der {{WebExtAPIRef("commands.update")}} API festgelegt werden kann.

Sie können für die Befehle mit einem Code wie diesem lauschen, in diesem Fall für den `"toggle-feature"` Befehl:

```js
browser.commands.onCommand.addListener((command) => {
  if (command === "toggle-feature") {
    console.log("Toggling the feature!");
  }
});
```

### Spezielle Verknüpfungen

Es gibt 4 **spezielle Verknüpfungen mit Standardaktionen**, für die das {{WebExtAPIRef("commands.onCommand")}} Ereignis nicht ausgelöst wird:

- `_execute_browser_action`: funktioniert wie ein Klick auf eine [Toolbar-Schaltfläche](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Toolbar_button), die mit {{WebExtAPIRef("browserAction")}} erstellt wurde oder im [browser_action](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action) Schlüssel in der manifest.json angegeben ist.
- `_execute_action`: funktioniert wie ein Klick auf eine [Toolbar-Schaltfläche](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Toolbar_button), die mit {{WebExtAPIRef("action")}} erstellt wurde oder im [action](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/action) Schlüssel in der manifest.json angegeben ist.
- `_execute_page_action`: funktioniert wie ein Klick auf eine [Adressleisten-Schaltfläche](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Page_actions), die mit {{WebExtAPIRef("pageAction")}} erstellt wurde oder im [page_action](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action) Schlüssel in der manifest.json angegeben ist.
- `_execute_sidebar_action`: öffnet die [Sidebar](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Sidebars) der Erweiterung, die im [sidebar_action](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action) manifest.json-Schlüssel angegeben ist.

Die Verfügbarkeit dieser speziellen Verknüpfungen variiert zwischen Manifestversionen und Browsern, wie folgt:

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
> Wenn der Benutzer die Verknüpfung des `_execute_browser_action` Befehls ändert, wird diese automatisch auf den `_execute_action` Befehl übernommen, wenn die Erweiterung von Manifest V2 zu V3 migriert. Dies wurde in Chrome 111 und Firefox 127 implementiert.

Zum Beispiel definiert dieses JSON eine Tastenkombination, die die Browseraktion der Erweiterung anklickt:

```json
"commands": {
  "_execute_browser_action": {
    "suggested_key": {
      "default": "Ctrl+Shift+Y"
    }
  }
}
```

## Verknüpfungswerte

Es gibt zwei gültige Formate für Verknüpfungstasten: als **Tastenkombination** oder als **Mediensteuerungstaste**.

### Tastenkombinationen

> [!NOTE]
> Auf Macs wird `"Ctrl"` als `"Command"` interpretiert, daher, wenn Sie tatsächlich `"Ctrl"` benötigen, geben Sie `"MacCtrl"` an.

Tastenkombinationen müssen aus 2 oder 3 Tasten bestehen:

1. **Modifier** (erforderlich, außer für Funktionstasten). Dies kann einer der folgenden sein: `"Ctrl"`, `"Alt"`, `"Command"` oder `"MacCtrl"`.
2. **Sekundärer Modifier** (optional). Falls angegeben, muss dies entweder `"Shift"` sein oder (für Firefox ≥ 63) einer von `"Ctrl"`, `"Alt"`, `"Command"` oder `"MacCtrl"`. Darf nicht der Modifier sein, der bereits als Hauptmodifier verwendet wird.
3. **Taste** (erforderlich). Dies kann eine der folgenden sein:
   - die Buchstaben `A` – `Z`
   - die Zahlen `0` – `9`
   - die Funktionstasten `F1` – `F12`
     > [!NOTE]
     > Ab Firefox 135 können Benutzer die Tasten `F13` bis `F19` einer Erweiterung mit [Manage Extension Shortcuts](https://support.mozilla.org/en-US/kb/manage-extension-shortcuts-firefox) zuweisen. Ihre Erweiterung kann diese Tasten nicht aus der Manifestdatei zuweisen. Sie kann sie jedoch mit {{WebExtAPIRef("commands.update")}} zuweisen.
   - `Comma`, `Period`, `Home`, `End`, `PageUp`, `PageDown`, `Space`, `Insert`, `Delete`, `Up`, `Down`, `Left`, `Right`

Die Taste wird dann als Zeichenfolge angegeben, die die Reihe von Tastenwerten enthält, in der oben aufgeführten Reihenfolge, getrennt durch `+`. Zum Beispiel `"Ctrl+Shift+Z"`.

Wenn eine Tastenkombination bereits vom Browser (wie `"Ctrl+P"`) oder von einem bestehenden Add-on verwendet wird, können Sie sie nicht überschreiben. Sie können sie definieren, aber Ihr Ereignishandler wird nicht aufgerufen, wenn der Benutzer die Tastenkombination drückt.

### Mediensteuerungstasten

Alternativ kann die Verknüpfung als eine der folgenden Mediensteuerungstasten angegeben werden:

- `"MediaNextTrack"`
- `"MediaPlayPause"`
- `"MediaPrevTrack"`
- `"MediaStop"`

## Aktualisieren von Verknüpfungen

In Firefox kann Ihre Erweiterung die Einstellungen für Verknüpfungstasten mithilfe von {{WebExtAPIRef("commands.update()")}} aktualisieren. Benutzer können Verknüpfungen mit der Option [Manage Extension Shortcuts](https://support.mozilla.org/en-US/kb/manage-extension-shortcuts-firefox) bei `about:addons` aktualisieren, wie in [diesem Video](https://bug1303384.bmoattachments.org/attachment.cgi?id=9051647) gezeigt. Ihre Erweiterung kann diese Option mit {{WebExtAPIRef("commands.openShortcutSettings()")}} öffnen.

In Chrome können Erweiterungen Verknüpfungstasten nicht programmgesteuert aktualisieren. Benutzer können Verknüpfungen unter `chrome://extensions/shortcuts` ändern, was mit {{WebExtAPIRef("tabs.create()")}} geöffnet werden kann.

Safari unterstützt weder die programmgesteuerte noch die Benutzeränderung von Erweiterungsverknüpfungstasten.

## Beispiel

Definieren Sie eine Tastenkombination nur mit der Standardtastenkombination:

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

Definieren Sie zwei Tastenkombinationen, eine mit einer plattformspezifischen Tastenkombination:

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
