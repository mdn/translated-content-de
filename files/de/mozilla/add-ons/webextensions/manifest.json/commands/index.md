---
title: commands
slug: Mozilla/Add-ons/WebExtensions/manifest.json/commands
l10n:
  sourceCommit: 668b38a4f6cd96609b9a969fe4653b46aec4e712
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

Jede Tastenkombination wird mit einem **Namen**, einer **Kombination von Tasten** und einer **Beschreibung** definiert. Sobald Sie Befehle im `manifest.json` Ihrer Erweiterung definiert haben, können Sie mit der {{WebExtAPIRef("commands")}} JavaScript-API deren zugeordnete Tastenkombinationen abhören.

## Syntax

Der `commands` Schlüssel ist ein Objekt, und jede Verknüpfung ist eine Eigenschaft davon. **Der Name der Eigenschaft ist der Name der Verknüpfung.**

Der Wert jeder Verknüpfung ist ein Objekt mit bis zu 2 Eigenschaften:

1. `suggested_key`: die Kombination von Tasten, die die Verknüpfung aktiviert.
2. `description`: ein String, der die Verknüpfung beschreibt; d.h., was sie tut.

Die Eigenschaft `suggested_key` ist ein Objekt mit beliebigen der folgenden Eigenschaften (alle Strings):

- `"default"`
- `"mac"`
- `"linux"`
- `"windows"`
- `"chromeos"`
- `"android"`
- `"ios"`

Der Wert jeder Eigenschaft ist die Tastenkombination für den Befehl auf dieser Plattform, als String mit Tasten, die durch "`+`" getrennt sind. Der Wert für `"default"` wird auf allen Plattformen verwendet, die nicht explizit aufgeführt sind.

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

Dieses JSON definiert 2 Verknüpfungen:

1. `"toggle-feature"`, aufgerufen mit

   <kbd>Ctrl</kbd>

   \+

   <kbd>Shift</kbd>

   \+

   <kbd>U</kbd>

   unter Linux, und

   <kbd>Alt</kbd>

   \+

   <kbd>Shift</kbd>

   \+

   <kbd>U</kbd>

   auf allen anderen Plattformen.

2. `"do-another-thing"`, aufgerufen mit

   <kbd>Ctrl</kbd>

   \+

   <kbd>Shift</kbd>

   \+

   <kbd>Y</kbd>

   auf allen Plattformen.

Sie könnten dann für den `"toggle-feature"` Befehl mit einem Code wie diesem lauschen:

```js
browser.commands.onCommand.addListener((command) => {
  if (command === "toggle-feature") {
    console.log("Toggling the feature!");
  }
});
```

### Spezielle Verknüpfungen

Es gibt diese 4 **speziellen Verknüpfungen mit Standardaktionen**, für die das {{WebExtAPIRef("commands.onCommand")}} Ereignis nicht ausgelöst wird:

- `_execute_browser_action`: funktioniert wie ein Klick auf eine [Symbolleisten-Schaltfläche](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Toolbar_button), die mit {{WebExtAPIRef("browserAction")}} erstellt oder im Schlüssel [browser_action](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action) in der manifest.json angegeben wurde.
- `_execute_action`: funktioniert wie ein Klick auf eine [Symbolleisten-Schaltfläche](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Toolbar_button), die mit {{WebExtAPIRef("action")}} erstellt oder im Schlüssel [action](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/action) in der manifest.json angegeben wurde.
- `_execute_page_action`: funktioniert wie ein Klick auf eine [Adressleisten-Schaltfläche](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Page_actions), die mit {{WebExtAPIRef("pageAction")}} erstellt oder im Schlüssel [page_action](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action) in der manifest.json angegeben wurde.
- `_execute_sidebar_action`: öffnet die [Seitenleiste](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Sidebars) der Erweiterung, die im Schlüssel [sidebar_action](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action) der manifest.json angegeben wurde.

Die Verfügbarkeit dieser speziellen Verknüpfungen variiert zwischen Manifest-Versionen und Browsern wie folgt:

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
> Wenn der Benutzer die Verknüpfung des `_execute_browser_action` Befehls ändert, wird diese automatisch auf den `_execute_action` Befehl übertragen, wenn die Erweiterung von Manifest V2 auf V3 migriert. Dies wurde in Chrome 111 und Firefox 127 implementiert.

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

## Verknüpfungswerte

Es gibt zwei gültige Formate für Verknüpfungstasten: als **Tastenkombination** oder als **Medientaste**.

### Tastenkombinationen

> [!NOTE]
> Auf Macs wird `"Ctrl"` als `"Command"` interpretiert, sodass, wenn Sie tatsächlich `"Ctrl"` benötigen, `"MacCtrl"` angegeben werden muss.

Tastenkombinationen müssen aus 2 oder 3 Tasten bestehen:

1. **Modifier** (obligatorisch, außer bei Funktionstasten). Dies kann eine der folgenden sein: `"Ctrl"`, `"Alt"`, `"Command"`, oder `"MacCtrl"`.
2. **Sekundär-Modifikator** (optional). Wenn angegeben, muss dies entweder `"Shift"` sein oder (für Firefox ≥ 63) eine von `"Ctrl"`, `"Alt"`, `"Command"`, oder `"MacCtrl"`. Darf nicht der bereits als Hauptmodifikator verwendete Modifikator sein.
3. **Taste** (obligatorisch). Dies kann eine der folgenden sein:

   - die Buchstaben `A` – `Z`
   - die Zahlen `0` – `9`
   - die Funktionstasten `F1` – `F12`
   - `Comma`, `Period`, `Home`, `End`, `PageUp`, `PageDown`, `Space`, `Insert`, `Delete`, `Up`, `Down`, `Left`, `Right`

Die Taste wird dann als String gegeben, der die Menge der Tastenwerte in der oben genannten Reihenfolge enthält, getrennt durch "`+`". Zum Beispiel, `"Ctrl+Shift+Z"`.

Wenn eine Tastenkombination bereits vom Browser (wie `"Ctrl+P"`) oder von einem bestehenden Add-on verwendet wird, können Sie sie nicht überschreiben. Sie können sie definieren, aber Ihr Ereignishandler wird nicht aufgerufen, wenn der Benutzer die Tastenkombination drückt.

### Medientasten

Alternativ kann die Verknüpfung als eine der folgenden Medientasten angegeben werden:

- `"MediaNextTrack"`
- `"MediaPlayPause"`
- `"MediaPrevTrack"`
- `"MediaStop"`

## Aktualisierung von Verknüpfungen

Verknüpfungen können über {{WebExtAPIRef("commands.update()")}} aktualisiert werden. Benutzer können Verknüpfungen auch über die Option "Verknüpfungen der Erweiterung verwalten" bei `about:addons` in Firefox aktualisieren, wie in [diesem Video](https://bug1303384.bmoattachments.org/attachment.cgi?id=9051647) gezeigt. In Chrome können Benutzer Verknüpfungen unter `chrome://extensions/shortcuts` ändern.

## Beispiel

Definieren Sie eine einzelne Tastenkombination, die nur die Standard-Tastenkombination verwendet:

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
