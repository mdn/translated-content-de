---
title: commands
slug: Mozilla/Add-ons/WebExtensions/manifest.json/commands
l10n:
  sourceCommit: fa98e7a82bde55434e22f26e72bdcb509e7d169f
---

{{AddonSidebar}}

<table class="fullwidth-table standard-table">
  <tbody>
    <tr>
      <th scope="row">Type</th>
      <td><code>Object</code></td>
    </tr>
    <tr>
      <th scope="row">Pflicht</th>
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

Jede Tastenkombination wird mit einem **Namen**, einer **Tastenkombination** und einer **Beschreibung** definiert. Nachdem Sie Befehle in der `manifest.json` Ihrer Erweiterung definiert haben, können Sie mit der {{WebExtAPIRef("commands")}}-API deren zugehörige Tastenkombinationen abhören.

## Syntax

Der `commands`-Schlüssel ist ein Objekt, und jede Verknüpfung ist eine Eigenschaft davon. **Der Name der Eigenschaft ist der Name der Verknüpfung.**

Der Wert jeder Verknüpfung ist ein Objekt mit bis zu 2 Eigenschaften:

1. `suggested_key` {{optional_inline}}: die Tastenkombination, die die Verknüpfung aktiviert.
2. `description` {{optional_inline}}: ein String, der die Verknüpfung beschreibt, d. h., was sie tut.

Die Eigenschaft `suggested_key` ist ein Objekt mit beliebigen oder keinen dieser Eigenschaften (alle Strings):

- `"default"`
- `"mac"`
- `"linux"`
- `"windows"`
- `"chromeos"`
- `"android"`
- `"ios"`

Der Wert jeder Eigenschaft ist die Tastenkombination für den Befehl auf dieser Plattform, als String, der Tasten enthält, die mit "`+`" getrennt sind. Der Wert für `"default"` wird auf allen Plattformen verwendet, die nicht explizit aufgeführt sind. Wenn `"default"` nicht enthalten ist, hat der Befehl auf keiner der nicht enthaltenen Plattformen eine Tastenkombination, es sei denn, es wird eine Verknüpfung vom Benutzer oder durch die {{WebExtAPIRef("commands.update")}}-API konfiguriert.

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

1. `"toggle-feature"`, zugegriffen mit <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>U</kbd> auf Linux und <kbd>Alt</kbd> + <kbd>Shift</kbd> + <kbd>U</kbd> auf allen anderen Plattformen.
2. `"do-another-thing"`, zugegriffen mit <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Y</kbd> auf allen Plattformen.
3. `"do-something-else"`, zugegriffen mit <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>P</kbd> nur auf Linux, und keine Standardverknüpfung auf anderen Plattformen.
4. `"do-nothing-yet"`, legt keine Tastenkombination fest, ermöglicht aber, dass eine Verknüpfung vom Benutzer oder mit der {{WebExtAPIRef("commands.update")}}-API gesetzt wird.

Sie können wie folgt auf die Befehle hören, in diesem Fall für den Befehl `"toggle-feature"`:

```js
browser.commands.onCommand.addListener((command) => {
  if (command === "toggle-feature") {
    console.log("Toggling the feature!");
  }
});
```

### Spezielle Verknüpfungen

Es gibt 4 **spezielle Verknüpfungen mit Standardaktionen**, für die das {{WebExtAPIRef("commands.onCommand")}}-Ereignis nicht ausgelöst wird:

- `_execute_browser_action`: funktioniert wie ein Klick auf eine [Toolbar-Schaltfläche](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Toolbar_button), die mit {{WebExtAPIRef("browserAction")}} erstellt oder im [browser_action](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action)-Schlüssel in der manifest.json angegeben wurde.
- `_execute_action`: funktioniert wie ein Klick auf eine [Toolbar-Schaltfläche](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Toolbar_button), die mit {{WebExtAPIRef("action")}} erstellt oder im [action](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/action)-Schlüssel in der manifest.json angegeben wurde.
- `_execute_page_action`: funktioniert wie ein Klick auf eine [Adressleisten-Schaltfläche](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Page_actions), die mit {{WebExtAPIRef("pageAction")}} erstellt oder im [page_action](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action)-Schlüssel in der manifest.json angegeben wurde.
- `_execute_sidebar_action`: öffnet die [Seitenleiste](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Sidebars) der Erweiterung, die im [sidebar_action](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action)-Schlüssel in der manifest.json angegeben wurde.

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
> Wenn der Benutzer die Verknüpfung des `_execute_browser_action`-Befehls ändert, wird diese automatisch auf den `_execute_action`-Befehl übertragen, wenn die Erweiterung von Manifest V2 auf V3 migriert. Dies wurde in Chrome 111 und Firefox 127 implementiert.

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
> Auf Macs wird `"Ctrl"` als `"Command"` interpretiert, daher müssen Sie, wenn Sie tatsächlich `"Ctrl"` benötigen, `"MacCtrl"` angeben.

Tastenkombinationen müssen aus 2 oder 3 Tasten bestehen:

1. **Modifikator** (verpflichtend, außer bei Funktionstasten). Dies kann sein: `"Ctrl"`, `"Alt"`, `"Command"` oder `"MacCtrl"`.
2. **Sekundärer Modifikator** (optional). Wenn angegeben, muss dies entweder `"Shift"` sein oder (für Firefox ≥ 63) einer von `"Ctrl"`, `"Alt"`, `"Command"` oder `"MacCtrl"`. Darf nicht der bereits als Hauptmodifikator verwendete Modifikator sein.
3. **Taste** (verpflichtend). Dies kann eine der folgenden sein:

   - die Buchstaben `A` – `Z`
   - die Zahlen `0` – `9`
   - die Funktionstasten `F1` – `F12`
     > [!NOTE]
     > Ab Firefox 135 können Benutzer die Tasten `F13` bis `F19` einer Erweiterung mit [Verwalten von Erweiterungsverknüpfungen](https://support.mozilla.org/de/kb/manage-extension-shortcuts-firefox) zuweisen. Ihre Erweiterung kann diese Tasten nicht aus der Manifest-Datei zuweisen. Sie kann sie jedoch mit {{WebExtAPIRef("commands.update")}} zuweisen.
   - `Comma`, `Period`, `Home`, `End`, `PageUp`, `PageDown`, `Space`, `Insert`, `Delete`, `Up`, `Down`, `Left`, `Right`

Die Taste wird dann als ein String angegeben, der die Reihe von Tastenwerten enthält, in der oben aufgelisteten Reihenfolge, getrennt durch "`+`". Zum Beispiel, `"Ctrl+Shift+Z"`.

Wenn eine Tastenkombination bereits vom Browser verwendet wird (wie `"Ctrl+P"`) oder von einem vorhandenen Add-on, können Sie sie nicht überschreiben. Sie können sie definieren, aber Ihr Event-Handler wird nicht aufgerufen, wenn der Benutzer die Tastenkombination drückt.

### Medientasten

Alternativ kann die Verknüpfung als eine dieser Medientasten angegeben werden:

- `"MediaNextTrack"`
- `"MediaPlayPause"`
- `"MediaPrevTrack"`
- `"MediaStop"`

## Aktualisierung von Verknüpfungen

In Firefox kann Ihre Erweiterung die Einstellungen der Verknüpfungstasten mit {{WebExtAPIRef("commands.update()")}} aktualisieren. Benutzer können Verknüpfungen mit der Option [Verwalten von Erweiterungsverknüpfungen](https://support.mozilla.org/de/kb/manage-extension-shortcuts-firefox) unter `about:addons` aktualisieren, wie in [diesem Video](https://bug1303384.bmoattachments.org/attachment.cgi?id=9051647) gezeigt. Ihre Erweiterung kann diese Option mit {{WebExtAPIRef("commands.openShortcutSettings()")}} öffnen.

In Chrome können Erweiterungen Tastenkombinationen nicht programmgesteuert aktualisieren. Benutzer können Verknüpfungen unter `chrome://extensions/shortcuts` ändern, die mit {{WebExtAPIRef("tabs.create()")}} geöffnet werden kann.

Safari unterstützt keine programmgesteuerte oder benutzerseitige Änderung der Verknüpfungstasten von Erweiterungen.

## Beispiel

Definieren Sie eine Tastaturverknüpfung nur mit der Standardtastenkombination:

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

Definieren Sie zwei Tastaturverknüpfungen, eine mit einer plattformspezifischen Tastenkombination:

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
