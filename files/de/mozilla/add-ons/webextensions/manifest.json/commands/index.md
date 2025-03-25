---
title: commands
slug: Mozilla/Add-ons/WebExtensions/manifest.json/commands
l10n:
  sourceCommit: e13b6ffe7c9cb05c6a89fcb3c8fcbc987eb05211
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

Jede Tastenkombination wird mit einem **Namen**, einer **Tastenfolge** und einer **Beschreibung** definiert. Nachdem Sie Befehle in der `manifest.json` Ihrer Erweiterung definiert haben, können Sie mit der {{WebExtAPIRef("commands")}} API auf ihre zugeordneten Tastenkombinationen lauschen.

## Syntax

Der `commands` Schlüssel ist ein Objekt, und jede Verknüpfung ist eine Eigenschaft davon. **Der Name der Eigenschaft ist der Name der Verknüpfung.**

Der Wert jeder Verknüpfung ist ein Objekt mit bis zu 2 Eigenschaften:

1. `suggested_key` {{optional_inline}}: die Kombination von Tasten, die die Verknüpfung aktiviert.
2. `description` {{optional_inline}}: ein String, der die Verknüpfung beschreibt, d.h. was sie tut.

Die Eigenschaft `suggested_key` ist ein Objekt mit einer beliebigen Anzahl dieser Eigenschaften (alles Strings):

- `"default"`
- `"mac"`
- `"linux"`
- `"windows"`
- `"chromeos"`
- `"android"`
- `"ios"`

Der Wert jeder Eigenschaft ist die Tastenkombination für den Befehl auf dieser Plattform, dargestellt als ein String, der Tasten enthält, die durch `+` getrennt sind. Der Wert für `"default"` wird auf allen Plattformen verwendet, die nicht explizit aufgeführt sind. Wenn `"default"` nicht enthalten ist, hat der Befehl auf keiner nicht aufgeführten Plattform eine Tastenkombination, es sei denn, ein Benutzer konfiguriert eine Verknüpfung oder durch die {{WebExtAPIRef("commands.update")}} API.

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

1. `"toggle-feature"`, zugänglich mit <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>U</kbd> unter Linux und <kbd>Alt</kbd> + <kbd>Shift</kbd> + <kbd>U</kbd> auf allen anderen Plattformen.
2. `"do-another-thing"`, zugänglich mit <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Y</kbd> auf allen Plattformen.
3. `"do-something-else"`, zugänglich mit <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>P</kbd> nur unter Linux, und keine Standardverknüpfung auf anderen Plattformen.
4. `"do-nothing-yet"`, setzt keine Tastenkombination, ermöglicht aber, dass eine Verknüpfung vom Benutzer oder mit der {{WebExtAPIRef("commands.update")}} API gesetzt wird.

Sie können den Befehlen mit Code wie diesem lauschen, in diesem Fall für den Befehl `"toggle-feature"`:

```js
browser.commands.onCommand.addListener((command) => {
  if (command === "toggle-feature") {
    console.log("Toggling the feature!");
  }
});
```

### Spezielle Verknüpfungen

Es gibt 4 **spezielle Verknüpfungen mit Standardaktionen**, für die das {{WebExtAPIRef("commands.onCommand")}} Ereignis nicht ausgelöst wird:

- `_execute_browser_action`: funktioniert wie ein Klick auf einen [Toolbar-Button](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Toolbar_button), der mit {{WebExtAPIRef("browserAction")}} erstellt wurde oder in dem [browser_action](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action) Schlüssel in der manifest.json angegeben ist.
- `_execute_action`: funktioniert wie ein Klick auf einen [Toolbar-Button](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Toolbar_button), der mit {{WebExtAPIRef("action")}} erstellt wurde oder in dem [action](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/action) Schlüssel in der manifest.json angegeben ist.
- `_execute_page_action`: funktioniert wie ein Klick auf einen [Adressleisten-Button](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Page_actions), der mit {{WebExtAPIRef("pageAction")}} erstellt wurde oder in dem [page_action](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action) Schlüssel in der manifest.json angegeben ist.
- `_execute_sidebar_action`: öffnet die Erweiterung [Seitenleiste](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Sidebars), die im [sidebar_action](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action) manifest.json Schlüssel angegeben ist.

Die Verfügbarkeit dieser speziellen Verknüpfungen variiert zwischen Manifest-Versionen und Browsern, wie folgt:

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
> Wenn der Benutzer die Verknüpfung des `_execute_browser_action` Befehls ändert, wird diese automatisch auf den `_execute_action` Befehl übertragen, wenn die Erweiterung von Manifest V2 zu V3 migriert. Dies wurde in Chrome 111 und Firefox 127 implementiert.

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

## Verknüpfungswerte

Es gibt zwei gültige Formate für Verknüpfungstasten: als **Tastenkombination** oder als **Medientaste**.

### Tastenkombinationen

> [!NOTE]
> Auf Macs wird `"Ctrl"` als `"Command"` interpretiert. Wenn Sie tatsächlich `"Ctrl"` benötigen, geben Sie `"MacCtrl"` an.

Tastenkombinationen müssen aus 2 oder 3 Tasten bestehen:

1. **Modifikator** (verpflichtend, außer bei Funktionstasten). Dies kann einer der folgenden sein: `"Ctrl"`, `"Alt"`, `"Command"`, oder `"MacCtrl"`.
2. **Sekundärer Modifikator** (optional). Wenn angegeben, muss dies entweder `"Shift"` sein oder (für Firefox ≥ 63) einer aus `"Ctrl"`, `"Alt"`, `"Command"`, oder `"MacCtrl"`. Darf nicht der bereits verwendete Hauptmodifikator sein.
3. **Taste** (verpflichtend). Dies kann eine der folgenden sein:

   - die Buchstaben `A` – `Z`
   - die Zahlen `0` – `9`
   - die Funktionstasten `F1` – `F12`
     > [!NOTE]
     > Ab Firefox 135 können Benutzer die Tasten `F13` bis `F19` einer Erweiterung über [Manage Extension Shortcuts](https://support.mozilla.org/en-US/kb/manage-extension-shortcuts-firefox) zuweisen. Ihre Erweiterung kann diese Tasten nicht über die Manifestdatei zuweisen. Sie kann sie jedoch mit {{WebExtAPIRef("commands.update")}} zuweisen.
   - `Comma`, `Period`, `Home`, `End`, `PageUp`, `PageDown`, `Space`, `Insert`, `Delete`, `Up`, `Down`, `Left`, `Right`

Die Taste wird dann als String angegeben, der die Menge der Tastenwerte enthält, in der oben genannten Reihenfolge, getrennt durch `+`. Zum Beispiel: `"Ctrl+Shift+Z"`.

Wenn eine Tastenkombination bereits vom Browser (wie `"Ctrl+P"`) oder von einem bestehenden Add-on verwendet wird, können Sie diese nicht überschreiben. Sie können sie definieren, aber Ihr Ereignishandler wird nicht aufgerufen, wenn der Benutzer die Tastenkombination drückt.

### Medientasten

Alternativ kann die Verknüpfung als eine dieser Medientasten angegeben werden:

- `"MediaNextTrack"`
- `"MediaPlayPause"`
- `"MediaPrevTrack"`
- `"MediaStop"`

## Aktualisierung von Verknüpfungen

In Firefox kann Ihre Erweiterung die Einstellungen der Verknüpfungstasten mit {{WebExtAPIRef("commands.update()")}} aktualisieren. Benutzer können Verknüpfungen über die [Manage Extension Shortcuts](https://support.mozilla.org/en-US/kb/manage-extension-shortcuts-firefox) Option unter `about:addons` aktualisieren, wie in [diesem Video](https://bug1303384.bmoattachments.org/attachment.cgi?id=9051647) gezeigt. Ihre Erweiterung kann diese Option mit {{WebExtAPIRef("commands.openShortcutSettings()")}} öffnen.

In Chrome können Erweiterungen Verknüpfungstasten nicht programmgesteuert aktualisieren. Benutzer können Verknüpfungen unter `chrome://extensions/shortcuts` ändern, die mit {{WebExtAPIRef("tabs.create()")}} geöffnet werden können.

Safari unterstützt weder die programmgesteuerte noch die Benutzermodifikation von Erweiterungs-Verknüpfungstasten.

## Beispiel

Definieren Sie eine Tastenkombination mit nur der Standard-Tastenfolge:

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

Definieren Sie zwei Tastenkombinationen, eine mit einer plattformspezifischen Tastenfolge:

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
