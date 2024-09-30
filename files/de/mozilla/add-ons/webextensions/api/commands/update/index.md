---
title: commands.update()
slug: Mozilla/Add-ons/WebExtensions/API/commands/update
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

Ändern Sie die Beschreibung oder die Tastenkombination für den angegebenen Befehl.

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
      - : `string`. Der Name des zu aktualisierenden Befehls. Dieser muss mit dem Namen eines vorhandenen Befehls übereinstimmen, wie er beispielsweise in der `name`-Eigenschaft des {{WebExtAPIRef("commands.Command")}}-Objekts angegeben ist.
    - `description` {{optional_inline}}
      - : `string`. Eine neue Beschreibung, die für den Befehl festgelegt werden soll.
    - `shortcut` {{optional_inline}}

      - : `string`. Eine neue Tastenkombination, die für den Befehl festgelegt werden soll. Diese kann sein:

        - ein leerer String, um die Tastenkombination zu entfernen.
        - ein String, der dem Format des [`commands` manifest.json key](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands) entspricht, um einen neuen Tastenkurzbefehl festzulegen. Wenn der String diesem Format nicht entspricht, wirft die Funktion einen Fehler.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das ohne Argumente erfüllt wird, wenn die Tastenkombination aktualisiert wurde. Das Promise wird mit einem Fehler abgelehnt, wenn der Befehl nicht gefunden werden konnte.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Aktualisiert den Befehl mit dem Namen "my-command" mit dem angegebenen Tastenkombinationswert, wenn der Benutzer auf "update" klickt:

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
