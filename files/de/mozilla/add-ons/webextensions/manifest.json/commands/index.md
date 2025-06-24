---
title: commands
slug: Mozilla/Add-ons/WebExtensions/manifest.json/commands
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
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

Verwenden Sie den **`commands`** Schlüssel, um eine oder mehrere Tastenkombinationen für Ihre Erweiterung zu definieren.

Jede Tastenkombination wird mit einem **Name**, einer **Tastenkombination** und einer **Beschreibung** definiert. Nachdem Sie Befehle in der `manifest.json` Ihrer Erweiterung definiert haben, können Sie mit der {{WebExtAPIRef("commands")}} API auf ihre zugeordneten Tastenkombinationen hören.

## Syntax

Der `commands` Schlüssel ist ein Objekt, und jede Tastenkombination ist eine Eigenschaft davon. **Der Name der Eigenschaft ist der Name der Tastenkombination.**

Der Wert jeder Tastenkombination ist ein Objekt mit bis zu 2 Eigenschaften:

1. `suggested_key` {{optional_inline}}: die Tastenkombination, die die Tastenkombination aktiviert.
2. `description` {{optional_inline}}: ein String, der die Tastenkombination beschreibt, d.h. was sie tut.

Die `suggested_key` Eigenschaft ist ein Objekt mit beliebigen oder keinen dieser Eigenschaften (alle Zeichenketten):

- `"default"`
- `"mac"`
- `"linux"`
- `"windows"`
- `"chromeos"`
- `"android"`
- `"ios"`

Der Wert jeder Eigenschaft ist die Tastenkombination für den Befehl auf dieser Plattform, als eine Zeichenkette, die Tasten enthält, die durch `+` getrennt sind. Der Wert für `"default"` wird auf allen Plattformen verwendet, die nicht explizit aufgeführt sind. Wenn `"default"` nicht enthalten ist, hat der Befehl keine Tastenkombination auf einer nicht enthaltenen Plattform, es sei denn, ein Benutzer oder die {{WebExtAPIRef("commands.update")}} API konfiguriert eine Tastenkombination.

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

Dieses JSON definiert diese Tastenkombinationen:

1. `"toggle-feature"`, zugänglich mit <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>U</kbd> auf Linux und <kbd>Alt</kbd> + <kbd>Shift</kbd> + <kbd>U</kbd> auf allen anderen Plattformen.
2. `"do-another-thing"`, zugänglich mit <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Y</kbd> auf allen Plattformen.
3. `"do-something-else"`, zugänglich mit <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>P</kbd> nur auf Linux, und keine Standard-Tastenkombination auf anderen Plattformen.
4. `"do-nothing-yet"`, setzt keine Tastenkombination, ermöglicht es jedoch, eine Tastenkombination durch den Benutzer oder mit der {{WebExtAPIRef("commands.update")}} API einzurichten.

Sie können auf die Befehle mit einem solchen Code hören, in diesem Fall für den `"toggle-feature"` Befehl:

```js
browser.commands.onCommand.addListener((command) => {
  if (command === "toggle-feature") {
    console.log("Toggling the feature!");
  }
});
```

### Besondere Tastenkombinationen

Es gibt 4 **besondere Tastenkombinationen mit Standardaktionen**, für die das {{WebExtAPIRef("commands.onCommand")}} Ereignis nicht ausgelöst wird:

- `_execute_browser_action`: funktioniert wie ein Klick auf eine [Toolbar-Schaltfläche](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Toolbar_button), die mit {{WebExtAPIRef("browserAction")}} erstellt wurde oder im [browser_action](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action) Schlüssel in der manifest.json angegeben ist.
- `_execute_action`: funktioniert wie ein Klick auf eine [Toolbar-Schaltfläche](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Toolbar_button), die mit {{WebExtAPIRef("action")}} erstellt wurde oder im [action](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/action) Schlüssel in der manifest.json angegeben ist.
- `_execute_page_action`: funktioniert wie ein Klick auf eine [Adressleiste-Schaltfläche](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Page_actions), die mit {{WebExtAPIRef("pageAction")}} erstellt wurde oder im [page_action](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action) Schlüssel in der manifest.json angegeben ist.
- `_execute_sidebar_action`: öffnet die [Seitenleiste](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Sidebars) der Erweiterung, die im [sidebar_action](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action) manifest.json Schlüssel angegeben ist.

Die Verfügbarkeit dieser besonderen Tastenkombinationen variiert zwischen Manifest-Versionen und Browsern, wie folgt:

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
> Wenn der Benutzer die Tastenkombination des `_execute_browser_action` Befehls ändert, wird diese automatisch auf den `_execute_action` Befehl übertragen, wenn die Erweiterung von Manifest V2 zu V3 migriert. Dies wurde in Chrome 111 und Firefox 127 eingeführt.

Zum Beispiel definiert dieses JSON eine Tastenkombination, die auf die Browseraktion der Erweiterung klickt:

```json
"commands": {
  "_execute_browser_action": {
    "suggested_key": {
      "default": "Ctrl+Shift+Y"
    }
  }
}
```

## Tastenkombinationswerte

Es gibt zwei gültige Formate für Tastenkombinationen: als **Tastenkombination** oder als **Media-Taste**.

### Tastenkombinationen

> [!NOTE]
> Auf Macs wird `"Ctrl"` als `"Command"` interpretiert, daher, wenn Sie tatsächlich `"Ctrl"` benötigen, geben Sie `"MacCtrl"` an.

Tastenkombinationen müssen aus 2 oder 3 Tasten bestehen:

1. **Modifier** (erforderlich, außer bei Funktionstasten). Dies kann einer der folgenden sein: `"Ctrl"`, `"Alt"`, `"Command"`, oder `"MacCtrl"`.
2. **Sekundärer Modifier** (optional). Wenn angegeben, muss dies entweder `"Shift"` oder (für Firefox ≥ 63) eine der folgenden Angaben sein: `"Ctrl"`, `"Alt"`, `"Command"`, oder `"MacCtrl"`. Darf nicht der bereits als Hauptmodifier verwendete Modifier sein.
3. **Taste** (erforderlich). Dies kann eine der folgenden sein:
   - die Buchstaben `A` – `Z`
   - die Zahlen `0` – `9`
   - die Funktionstasten `F1` – `F12`
     > [!NOTE]
     > Ab Firefox 135 können Benutzer die `F13` bis `F19` Tasten einer Erweiterung mithilfe der Option [Manage Extension Shortcuts](https://support.mozilla.org/en-US/kb/manage-extension-shortcuts-firefox) zuweisen. Ihre Erweiterung kann diese Tasten nicht aus der Manifest-Datei zuweisen. Sie kann sie jedoch mit {{WebExtAPIRef("commands.update")}} zuweisen.
   - `Comma`, `Period`, `Home`, `End`, `PageUp`, `PageDown`, `Space`, `Insert`, `Delete`, `Up`, `Down`, `Left`, `Right`

Die Taste wird dann als Zeichenkette angegeben, die die Gruppe von Tasteneingaben in der oben genannten Reihenfolge enthält, getrennt durch `+`. Beispielsweise `"Ctrl+Shift+Z"`.

Wenn eine Tastenkombination bereits vom Browser (wie `"Ctrl+P"`) oder von einem bestehenden Add-on verwendet wird, können Sie sie nicht überschreiben. Sie können sie definieren, aber Ihr Event-Handler wird nicht aufgerufen, wenn der Benutzer die Tastenkombination drückt.

### Media-Tasten

Alternativ kann die Tastenkombination als eine dieser Media-Tasten angegeben werden:

- `"MediaNextTrack"`
- `"MediaPlayPause"`
- `"MediaPrevTrack"`
- `"MediaStop"`

## Aktualisierung von Tastenkombinationen

In Firefox kann Ihre Erweiterung die Tastenkombinationseinstellungen mit {{WebExtAPIRef("commands.update()")}} aktualisieren. Benutzer können Tastenkombinationen mithilfe der Option [Manage Extension Shortcuts](https://support.mozilla.org/en-US/kb/manage-extension-shortcuts-firefox) unter `about:addons` aktualisieren, wie in [diesem Video](https://bug1303384.bmoattachments.org/attachment.cgi?id=9051647) gezeigt. Ihre Erweiterung kann diese Option mit {{WebExtAPIRef("commands.openShortcutSettings()")}} öffnen.

In Chrome können Erweiterungen Tastenkombinationen nicht programmatisch aktualisieren. Benutzer können Tastenkombinationen unter `chrome://extensions/shortcuts` ändern, die mit {{WebExtAPIRef("tabs.create()")}} geöffnet werden kann.

Safari unterstützt keine programmatische oder benutzergesteuerte Änderung von Tastenkombinationen für Erweiterungen.

## Beispiel

Definieren Sie eine Tastenkombination nur mit der Standard-Tastenkombination:

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
