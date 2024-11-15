---
title: commands
slug: Mozilla/Add-ons/WebExtensions/manifest.json/commands
l10n:
  sourceCommit: 3925f2c8b3ae0d790cff9fb83aef6e40251f5318
---

{{AddonSidebar}}

<table class="fullwidth-table standard-table">
  <tbody>
    <tr>
      <th scope="row">Typ</th>
      <td><code>Object</code></td>
    </tr>
    <tr>
      <th scope="row">Erforderlich</th>
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
}</pre>
      </td>
    </tr>
  </tbody>
</table>

Verwenden Sie den Schlüssel **`commands`**, um eine oder mehrere Tastenkombinationen für Ihre Erweiterung zu definieren.

Jede Tastenkombination wird mit einem **Namen**, einer **Tastenkomination** und einer **Beschreibung** definiert. Nachdem die Befehle in der `manifest.json` Ihrer Erweiterung definiert wurden, können Sie mit der {{WebExtAPIRef("commands")}} API auf ihre zugehörigen Tastenkombinationen lauschen.

## Syntax

Der Schlüssel `commands` ist ein Objekt, und jede Verknüpfung ist eine Eigenschaft davon. **Der Name der Eigenschaft ist der Name der Verknüpfung.**

Der Wert jeder Verknüpfung ist ein Objekt mit bis zu 2 Eigenschaften:

1. `suggested_key` {{optional_inline}}: die Kombination von Tasten, die die Verknüpfung aktiviert.
2. `description` {{optional_inline}}: ein String, der die Verknüpfung beschreibt, d.h. was sie tut.

Die Eigenschaft `suggested_key` ist ein Objekt mit beliebigen oder keinen dieser Eigenschaften (alle Strings):

- `"default"`
- `"mac"`
- `"linux"`
- `"windows"`
- `"chromeos"`
- `"android"`
- `"ios"`

Der Wert jeder Eigenschaft ist die Tastenkombination für den Befehl auf dieser Plattform, als String, der Tasten enthält, getrennt durch "`+`". Der Wert von `"default"` wird auf allen Plattformen verwendet, die nicht explizit aufgeführt sind. Wenn `"default"` nicht enthalten ist, hat der Befehl auf keiner Plattform eine Tastenkombination, es sei denn, es wird vom Benutzer oder über die {{WebExtAPIRef("commands.update")}} API eine Tastenkombination konfiguriert.

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

1. `"toggle-feature"`, erreichbar mit <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>U</kbd> unter Linux und <kbd>Alt</kbd> + <kbd>Shift</kbd> + <kbd>U</kbd> auf allen anderen Plattformen.
2. `"do-another-thing"`, erreichbar mit <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Y</kbd> auf allen Plattformen.
3. `"do-something-else"`, erreichbar mit <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>P</kbd> nur unter Linux und keine Standardverknüpfung auf anderen Plattformen.
4. `"do-nothing-yet"`, legt keine Tastenkombination fest, ermöglicht aber dem Benutzer, eine Verknüpfung zu setzen oder mit der {{WebExtAPIRef("commands.update")}} API.

Sie können für die Befehle mit einem Code wie diesem lauschen, in diesem Fall für den Befehl `"toggle-feature"`:

```js
browser.commands.onCommand.addListener((command) => {
  if (command === "toggle-feature") {
    console.log("Toggling the feature!");
  }
});
```

### Spezielle Verknüpfungen

Es gibt 4 **spezielle Verknüpfungen mit Standardaktionen**, für die das {{WebExtAPIRef("commands.onCommand")}} Ereignis nicht ausgelöst wird:

- `_execute_browser_action`: Funktioniert wie ein Klick auf eine [Symbolleistenschaltfläche](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Toolbar_button), die mit {{WebExtAPIRef("browserAction")}} erstellt wurde oder im Schlüssel [browser_action](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action) in der manifest.json angegeben ist.
- `_execute_action`: Funktioniert wie ein Klick auf eine [Symbolleistenschaltfläche](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Toolbar_button), die mit {{WebExtAPIRef("action")}} erstellt wurde oder im Schlüssel [action](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/action) in der manifest.json angegeben ist.
- `_execute_page_action`: Funktioniert wie ein Klick auf eine [Adressleistenschaltfläche](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Page_actions), die mit {{WebExtAPIRef("pageAction")}} erstellt wurde oder im Schlüssel [page_action](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action) in der manifest.json angegeben ist.
- `_execute_sidebar_action`: Öffnet die [Seitenleiste](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Sidebars) der Erweiterung, die im Schlüssel [sidebar_action](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action) in der manifest.json angegeben ist.

Die Verfügbarkeit dieser speziellen Verknüpfungen variiert je nach Manifest-Versionen und Browsern, wie folgt:

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
> Wenn der Benutzer die Verknüpfung des `_execute_browser_action`-Befehls ändert, wird sie automatisch auf den `_execute_action`-Befehl übertragen, wenn die Erweiterung von Manifest V2 auf V3 migriert. Dies wurde in Chrome 111 und Firefox 127 implementiert.

Zum Beispiel definiert dieses JSON eine Tastenkomination, die wie ein Klick auf die Browseraktion der Erweiterung wirkt:

```json
"commands": {
  "_execute_browser_action": {
    "suggested_key": {
      "default": "Ctrl+Shift+Y"
    }
  }
}
```

## Werte der Verknüpfung

Es gibt zwei gültige Formate für Verknüpfungstasten: als **Tastenkombination** oder als **Media-Taste**.

### Tastenkombinationen

> [!NOTE]
> Auf Macs wird `"Ctrl"` als `"Command"` interpretiert. Wenn Sie tatsächlich `"Ctrl"` benötigen, geben Sie `"MacCtrl"` an.

Tastenkombinationen müssen aus 2 oder 3 Tasten bestehen:

1. **Modifikator** (obligatorisch, außer bei Funktionstasten). Dies kann einer der folgenden sein: `"Ctrl"`, `"Alt"`, `"Command"` oder `"MacCtrl"`.
2. **Sekundärer Modifikator** (optional). Falls vorhanden, muss dies entweder `"Shift"` oder (für Firefox ≥ 63) einer von `"Ctrl"`, `"Alt"`, `"Command"` oder `"MacCtrl"` sein. Darf nicht der bereits als Hauptmodifikator verwendete Modifikator sein.
3. **Taste** (obligatorisch). Dies kann eine der folgenden sein:

   - die Buchstaben `A` – `Z`
   - die Zahlen `0` – `9`
   - die Funktionstasten `F1` – `F12`
   - `Comma`, `Period`, `Home`, `End`, `PageUp`, `PageDown`, `Space`, `Insert`, `Delete`, `Up`, `Down`, `Left`, `Right`

Die Taste wird dann als String angegeben, der die Reihe von Tastenwerten enthält, in der obigen Reihenfolge, getrennt durch "`+`". Zum Beispiel, `"Ctrl+Shift+Z"`.

Wenn eine Tastenkombination bereits vom Browser verwendet wird (wie `"Ctrl+P"`) oder von einem bestehenden Add-On, können Sie sie nicht überschreiben. Sie können sie definieren, aber Ihr Ereignishandler wird nicht aufgerufen, wenn der Benutzer die Tastenkombination drückt.

### Media-Tasten

Alternativ kann die Verknüpfung als eine der folgenden Media-Tasten angegeben werden:

- `"MediaNextTrack"`
- `"MediaPlayPause"`
- `"MediaPrevTrack"`
- `"MediaStop"`

## Aktualisierung der Verknüpfungen

Verknüpfungen können über {{WebExtAPIRef("commands.update()")}} aktualisiert werden. Benutzer können auch Verknüpfungen über die Option „Erweiterungsverknüpfungen verwalten“ in `about:addons` in Firefox aktualisieren, wie in [diesem Video](https://bug1303384.bmoattachments.org/attachment.cgi?id=9051647) gezeigt. In Chrome können Benutzer Verknüpfungen unter `chrome://extensions/shortcuts` ändern.

## Beispiel

Definieren Sie eine einzelne Tastenkombination, die nur die Standardtastenkombination verwendet:

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
