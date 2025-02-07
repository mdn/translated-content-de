---
title: commands.update()
slug: Mozilla/Add-ons/WebExtensions/API/commands/update
l10n:
  sourceCommit: c5849bd1313be60afdf4126aacd587c52bace335
---

{{AddonSidebar}}

Ändert die Beschreibung oder Tastenkombination für den angegebenen Befehl.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
browser.commands.update(
  details // object
);
```

### Parameter

- `details`

  - : `object`. Ein Objekt mit den folgenden Eigenschaften:

    - `name`
      - : `string`. Der Name des zu aktualisierenden Befehls. Dieser muss mit dem Namen eines bestehenden Befehls übereinstimmen, wie z. B. im `name`-Eigenschaftsmerkmal des {{WebExtAPIRef("commands.Command")}}-Objekts angegeben.
    - `description` {{optional_inline}}
      - : `string`. Eine neue Beschreibung, die für den Befehl festgelegt werden soll.
    - `shortcut` {{optional_inline}}

      - : `string`. Eine neue Tastenkombination, die für den Befehl festgelegt werden soll. Dies kann sein:

        - ein leerer String, um die Tastenkombination zu löschen.
        - ein String, der dem Format des [`commands` manifest.json key](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands) entspricht, um eine neue Tastenkombination zu setzen. Wenn der String nicht diesem Format entspricht, löst die Funktion einen Fehler aus.
          > [!NOTE]
          > Ab Firefox 135 können Erweiterungen mit dieser Methode die Tasten `F13` bis `F19` zusätzlich zu den von `commands` unterstützten Tasten zuweisen.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das ohne Argument erfüllt wird, wenn die Tastenkombination aktualisiert wurde. Das Promise wird mit einem Fehler abgelehnt, wenn der Befehl nicht gefunden werden konnte.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Aktualisiert den Befehl mit dem Namen "my-command" mit dem angegebenen Shortcut-Wert, wenn der Benutzer auf "update" klickt:

```js
const commandName = "my-command";

function updateShortcut() {
  browser.commands.update({
    name: commandName,
    shortcut: document.querySelector("#shortcut").value,
  });
}

document.querySelector("#update").addEventListener("click", updateShortcut);
```

{{WebExtExamples}}
