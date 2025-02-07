---
title: commands
slug: Mozilla/Add-ons/WebExtensions/manifest.json/commands
l10n:
  sourceCommit: c5849bd1313be60afdf4126aacd587c52bace335
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

Nutzen Sie den Schlüssel **`commands`**, um eine oder mehrere Tastenkombinationen für Ihre Erweiterung zu definieren.

Jede Tastenkombination wird durch einen **Namen**, eine **Tastenkombination** und eine **Beschreibung** definiert. Nachdem Sie in der Datei `manifest.json` Ihrer Erweiterung Befehle definiert haben, können Sie auf die entsprechenden Tastenkombinationen mit der {{WebExtAPIRef("commands")}} API reagieren.

## Syntax

Der Schlüssel `commands` ist ein Objekt, und jede Tastenkombination ist eine Eigenschaft davon. **Der Name der Eigenschaft ist der Name der Tastenkombination.**

Der Wert jeder Tastenkombination ist ein Objekt mit bis zu 2 Eigenschaften:

1. `suggested_key` {{optional_inline}}: die Tastenkombination, die die Tastenkombination aktiviert.
2. `description` {{optional_inline}}: ein String, der die Tastenkombination beschreibt, d. h. was sie macht.

Die Eigenschaft `suggested_key` ist ein Objekt mit beliebigen oder keinen dieser Eigenschaften (alle als Strings):

- `"default"`
- `"mac"`
- `"linux"`
- `"windows"`
- `"chromeos"`
- `"android"`
- `"ios"`

Der Wert jeder Eigenschaft ist die Tastenkombination für den Befehl auf dieser Plattform, angegeben als String mit durch "`+`" getrennten Tasten. Der Wert für `"default"` wird auf allen Plattformen verwendet, die nicht explizit aufgeführt sind. Wenn `"default"` nicht enthalten ist, hat der Befehl auf keiner Plattform, die nicht ausgeschlossen wurde, eine Tastenkombination, es sei denn, sie wird vom Benutzer oder durch die {{WebExtAPIRef("commands.update")}} API konfiguriert.

Beispiel:

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

Dieses JSON definiert folgende Tastenkombinationen:

1. `"toggle-feature"`: erreichbar mit <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>U</kbd> auf Linux und <kbd>Alt</kbd> + <kbd>Shift</kbd> + <kbd>U</kbd> auf allen anderen Plattformen.
2. `"do-another-thing"`: erreichbar mit <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Y</kbd> auf allen Plattformen.
3. `"do-something-else"`: erreichbar mit <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>P</kbd> nur auf Linux und ohne Standard-Tastenkombination auf anderen Plattformen.
4. `"do-nothing-yet"`: setzt keine Tastenkombination, erlaubt jedoch dem Benutzer oder der {{WebExtAPIRef("commands.update")}} API, eine Tastenkombination festzulegen.

Sie können auf diese Befehle mithilfe eines Codes wie diesem reagieren, hier für den Befehl `"toggle-feature"`:

```js
browser.commands.onCommand.addListener((command) => {
  if (command === "toggle-feature") {
    console.log("Toggling the feature!");
  }
});
```

### Spezielle Tastenkombinationen

Es gibt 4 **spezielle Tastenkombinationen mit Standardaktionen**, bei denen das {{WebExtAPIRef("commands.onCommand")}}-Ereignis nicht ausgelöst wird:

- `_execute_browser_action`: funktioniert wie ein Klick auf eine [Werkzeugleisten-Schaltfläche](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Toolbar_button), die mit {{WebExtAPIRef("browserAction")}} erstellt oder im [browser_action](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action)-Schlüssel der manifest.json-Datei angegeben wurde.
- `_execute_action`: funktioniert wie ein Klick auf eine [Werkzeugleisten-Schaltfläche](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Toolbar_button), die mit {{WebExtAPIRef("action")}} erstellt oder im [action](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/action)-Schlüssel der manifest.json-Datei angegeben wurde.
- `_execute_page_action`: funktioniert wie ein Klick auf eine [Adressleisten-Schaltfläche](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Page_actions), die mit {{WebExtAPIRef("pageAction")}} erstellt oder im [page_action](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action)-Schlüssel der manifest.json-Datei angegeben wurde.
- `_execute_sidebar_action`: öffnet die [Seitenleiste](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Sidebars) der Erweiterung, die im [sidebar_action](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action)-Schlüssel der manifest.json-Datei angegeben ist.

Die Verfügbarkeit dieser speziellen Tastenkombinationen variiert je nach Manifest-Version und Browser, wie folgt:

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
> Wenn der Benutzer die Tastenkombination des Befehls `_execute_browser_action` ändert, wird diese automatisch auf den Befehl `_execute_action` übertragen, wenn die Erweiterung von Manifest V2 auf V3 migriert. Dies wurde in Chrome 111 und Firefox 127 implementiert.

Beispiel: Dieses JSON definiert eine Tastenkombination, die die Schaltfläche der Browser-Aktion der Erweiterung anklickt:

```json
"commands": {
  "_execute_browser_action": {
    "suggested_key": {
      "default": "Ctrl+Shift+Y"
    }
  }
}
```

## Werte der Tastenkombinationen

Es gibt zwei gültige Formate für Tastenkombinationen: als **Tastenkombination** oder als **Medientaste**.

### Tastenkombinationen

> [!NOTE]
> Auf Macs wird `"Ctrl"` als `"Command"` interpretiert. Wenn Sie tatsächlich `"Ctrl"` benötigen, geben Sie `"MacCtrl"` an.

Tastenkombinationen müssen aus 2 oder 3 Tasten bestehen:

1. **Modifikationstaste** (obligatorisch, außer bei Funktionstasten). Dies kann eine der folgenden sein: `"Ctrl"`, `"Alt"`, `"Command"` oder `"MacCtrl"`.
2. **Sekundäre Modifikationstaste** (optional). Falls angegeben, muss diese entweder `"Shift"` sein oder (für Firefox ≥ 63) eine der folgenden: `"Ctrl"`, `"Alt"`, `"Command"` oder `"MacCtrl"`. Sie darf nicht dieselbe Modifikationstaste sein wie die Hauptmodifikationstaste.
3. **Schlüssel** (obligatorisch). Dies kann eine der folgenden sein:

   - die Buchstaben `A` – `Z`
   - die Zahlen `0` – `9`
   - die Funktionstasten `F1` – `F12`
     > [!NOTE]
     > Ab Firefox 135 können Benutzer die Tasten `F13` bis `F19` einer Erweiterung über [Erweiterungskürzel verwalten](https://support.mozilla.org/de/kb/erweiterungskuerzel-verwalten-firefox) zuweisen. Ihre Erweiterung kann diese Tasten nicht über die Manifestdatei zuweisen, jedoch mit {{WebExtAPIRef("commands.update")}}.
   - `Comma`, `Period`, `Home`, `End`, `PageUp`, `PageDown`, `Space`, `Insert`, `Delete`, `Up`, `Down`, `Left`, `Right`

Der Schlüssel wird dann als String angegeben, der die Reihe der Tastenwerte enthält, in der oben beschriebenen Reihenfolge, getrennt durch "`+`", z. B. `"Ctrl+Shift+Z"`.

Wenn eine Tastenkombination bereits vom Browser (z. B. `"Ctrl+P"`) oder von einer bestehenden Erweiterung verwendet wird, können Sie sie nicht überschreiben. Sie können sie definieren, jedoch wird Ihr Ereignishandler nicht aufgerufen, wenn der Benutzer die Tastenkombination drückt.

### Medientasten

Alternativ kann die Kombination als eine der folgenden Medientasten angegeben werden:

- `"MediaNextTrack"`
- `"MediaPlayPause"`
- `"MediaPrevTrack"`
- `"MediaStop"`

## Aktualisierung von Tastenkombinationen

Tastenkombinationen können mit {{WebExtAPIRef("commands.update()")}} aktualisiert werden. Benutzer können Tastenkombinationen auch über die Option "Erweiterungskürzel verwalten" in `about:addons` in Firefox aktualisieren, wie in [diesem Video](https://bug1303384.bmoattachments.org/attachment.cgi?id=9051647) dargestellt. In Chrome können Benutzer Tastenkombinationen unter `chrome://extensions/shortcuts` ändern.

## Beispiel

Definieren Sie eine einzige Tastenkombination, nur mit der Standard-Tastenkombination:

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

Definieren Sie zwei Tastenkombinationen, eine mit einer plattformabhängigen Tastenkombination:

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
