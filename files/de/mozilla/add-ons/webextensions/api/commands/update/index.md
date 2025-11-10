---
title: commands.update()
slug: Mozilla/Add-ons/WebExtensions/API/commands/update
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Ändern Sie die Beschreibung oder Tastenkombination für den angegebenen Befehl.

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
      - : `string`. Eine neue Abkürzung, die für den Befehl festgelegt werden soll. Dies kann sein:
        - ein leerer String, um die Abkürzung zu löschen.
        - ein String, der dem Format des [`commands` manifest.json key](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands) entspricht, um eine neue Abkürzungstaste festzulegen. Wenn der String dieses Format nicht erfüllt, löst die Funktion einen Fehler aus.
          > [!NOTE]
          > Ab Firefox 135 können Erweiterungen mit dieser Methode die Tasten `F13` bis `F19` zusätzlich zu den von `commands` unterstützten Tasten zuweisen.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das ohne Argumente erfüllt wird, wenn die Abkürzung aktualisiert wurde. Das Versprechen wird mit einem Fehler abgelehnt, wenn der Befehl nicht gefunden werden konnte.

## Beispiele

Aktualisiert den Befehl namens "my-command" mit dem angegebenen Abkürzungswert, wenn der Benutzer auf "update" klickt:

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

## Browser-Kompatibilität

{{Compat}}
