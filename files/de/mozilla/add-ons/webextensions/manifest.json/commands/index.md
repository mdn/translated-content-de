---
title: commands
slug: Mozilla/Add-ons/WebExtensions/manifest.json/commands
l10n:
  sourceCommit: b7a7c441fa025458f2bf67d714c3303085e8258a
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

Verwenden Sie den Schlüssel **`commands`**, um eine oder mehrere Tastenkombinationen für Ihre Erweiterung zu definieren.

Jede Tastenkombination wird mit einem **Namen**, einer **Tastenkombination** und einer **Beschreibung** definiert. Sobald Sie Befehle in der `manifest.json` Ihrer Erweiterung definiert haben, können Sie mit der {{WebExtAPIRef("commands")}} JavaScript-API die zugehörigen Tastenkombinationen abhören.

## Syntax

Der Schlüssel `commands` ist ein Objekt, und jede Tastenkombination ist eine Eigenschaft davon. **Der Name der Eigenschaft ist der Name des Tastenkürzels.**

Der Wert jedes Tastenkürzels ist ein Objekt mit bis zu 2 Eigenschaften:

1. `suggested_key`: die Tasten-Kombination, die das Kürzel aktiviert.
2. `description`: eine Zeichenkette, die das Kürzel beschreibt; d.h., was es macht.

Die Eigenschaft `suggested_key` ist ein Objekt mit einer der folgenden Eigenschaften (alle Zeichenketten):

- `"default"`
- `"mac"`
- `"linux"`
- `"windows"`
- `"chromeos"`
- `"android"`
- `"ios"`

Der Wert jeder Eigenschaft ist das Tastenkürzel für den Befehl auf dieser Plattform, als Zeichenfolge, die Tasten enthält, getrennt durch "`+`". Der Wert für `"default"` wird auf allen Plattformen verwendet, die nicht explizit aufgeführt sind.

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
  }
}
```

Dieses JSON definiert 2 Kürzel:

1. `"toggle-feature"`, aufgerufen mit <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>U</kbd> auf Linux, und <kbd>Alt</kbd> + <kbd>Shift</kbd> + <kbd>U</kbd> auf allen anderen Plattformen.
2. `"do-another-thing"`, aufgerufen mit <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Y</kbd> auf allen Plattformen.

Sie könnten dann den `"toggle-feature"` Befehl mit einem Code wie diesem abhören:

```js
browser.commands.onCommand.addListener((command) => {
  if (command === "toggle-feature") {
    console.log("Toggling the feature!");
  }
});
```

### Besondere Kürzel

Es gibt 4 **besondere Kürzel mit Standardaktionen**, für die das {{WebExtAPIRef("commands.onCommand")}}-Ereignis nicht ausgelöst wird:

- `_execute_browser_action`: funktioniert wie ein Klick auf eine [Toolbar-Schaltfläche](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Toolbar_button), die mit {{WebExtAPIRef("browserAction")}} erstellt oder im [browser_action](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action) Schlüssel in der manifest.json angegeben wurde.
- `_execute_action`: funktioniert wie ein Klick auf eine [Toolbar-Schaltfläche](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Toolbar_button), die mit {{WebExtAPIRef("action")}} erstellt oder im [action](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/action) Schlüssel in der manifest.json angegeben wurde.
- `_execute_page_action`: funktioniert wie ein Klick auf eine [Adressleisten-Schaltfläche](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Page_actions), die mit {{WebExtAPIRef("pageAction")}} erstellt oder im [page_action](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action) Schlüssel in der manifest.json angegeben wurde.
- `_execute_sidebar_action`: öffnet die [Sidebar](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Sidebars) der Erweiterung, die im [sidebar_action](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action) manifest.json Schlüssel angegeben ist.

Die Verfügbarkeit dieser speziellen Kürzel variiert zwischen Manifest-Versionen und Browsern:

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

Zum Beispiel definiert dieses JSON eine Tasten-Kombination, die die Browseraktion der Erweiterung anklickt:

```json
"commands": {
  "_execute_browser_action": {
    "suggested_key": {
      "default": "Ctrl+Shift+Y"
    }
  }
}
```

## Werte für Kürzel

Es gibt zwei gültige Formate für Tastaturkürzel: als **Tastenkombination** oder als **Medientaste**.

### Tastenkombinationen

> [!NOTE]
> Auf Macs wird `"Ctrl"` als `"Command"` interpretiert, wenn Sie also tatsächlich `"Ctrl"` benötigen, spezifizieren Sie `"MacCtrl"`.

Tastenkombinationen müssen aus 2 oder 3 Tasten bestehen:

1. **Modifier** (verpflichtend, außer bei Funktionstasten). Dies kann eine der folgenden sein: `"Ctrl"`, `"Alt"`, `"Command"`, oder `"MacCtrl"`.
2. **Sekundärer Modifier** (optional). Wenn angegeben, muss dies entweder `"Shift"` oder (für Firefox ≥ 63) einer von `"Ctrl"`, `"Alt"`, `"Command"`, oder `"MacCtrl"` sein. Darf nicht der Modifier sein, der bereits als Hauptmodifier verwendet wird.
3. **Taste** (verpflichtend). Dies kann eine der folgenden sein:

   - die Buchstaben `A` – `Z`
   - die Zahlen `0` – `9`
   - die Funktionstasten `F1` – `F12`
   - `Comma`, `Period`, `Home`, `End`, `PageUp`, `PageDown`, `Space`, `Insert`, `Delete`, `Up`, `Down`, `Left`, `Right`

Die Taste wird dann als Zeichenfolge angegeben, die die Menge der Tastenwerte, in der oben genannten Reihenfolge, getrennt durch "`+`" enthält. Zum Beispiel `"Ctrl+Shift+Z"`.

Wenn eine Tastenkombination bereits vom Browser (wie `"Ctrl+P"`) oder von einem bestehenden Add-On verwendet wird, können Sie diese nicht überschreiben. Sie können es definieren, aber Ihr Ereignis-Handler wird nicht aufgerufen, wenn der Benutzer die Tastenkombination drückt.

### Medientasten

Alternativ kann das Kürzel als eine der folgenden Medientasten angegeben werden:

- `"MediaNextTrack"`
- `"MediaPlayPause"`
- `"MediaPrevTrack"`
- `"MediaStop"`

## Aktualisieren von Kürzeln

Kürzel können über {{WebExtAPIRef("commands.update()")}} aktualisiert werden. Benutzer können Kürzel auch über die Option "Erweiterungskürzel verwalten" unter `about:addons` in Firefox aktualisieren, wie in [diesem Video](https://bug1303384.bmoattachments.org/attachment.cgi?id=9051647) gezeigt. In Chrome können Benutzer Kürzel unter `chrome://extensions/shortcuts` ändern.

## Beispiel

Definieren Sie ein einziges Tastaturkürzel, nur mit der Standard-Tastenkombination:

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
