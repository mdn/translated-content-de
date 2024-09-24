---
title: commands.update()
slug: Mozilla/Add-ons/WebExtensions/API/commands/update
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
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
      - : `string`. Der Name des zu aktualisierenden Befehls. Dieser muss mit dem Namen eines bestehenden Befehls übereinstimmen, wie er beispielsweise in der `name`-Eigenschaft des {{WebExtAPIRef("commands.Command")}} Objekts angegeben ist.
    - `description` {{optional_inline}}
      - : `string`. Eine neue Beschreibung für den Befehl.
    - `shortcut` {{optional_inline}}

      - : `string`. Eine neue Tastenkombination für den Befehl. Dies kann sein:

        - ein leerer String, um die Tastenkombination zu löschen.
        - ein String im Format des [`commands` manifest.json keys](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands), um eine neue Tastenkombination festzulegen. Wenn der String dieses Format nicht erfüllt, löst die Funktion einen Fehler aus.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das ohne Argumente erfüllt wird, wenn die Tastenkombination aktualisiert wurde. Das Promise wird mit einem Fehler abgelehnt, wenn der Befehl nicht gefunden werden konnte.

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
