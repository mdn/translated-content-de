---
title: "`input.fileDialogOpened`-Ereignis"
short-title: fileDialogOpened
slug: Web/WebDriver/Reference/BiDi/Modules/input/fileDialogOpened
l10n:
  sourceCommit: a3d6e24e23dccd757487d9ed97b0eb241f107d96
---

Das `input.fileDialogOpened`-[Ereignis](/de/docs/Web/WebDriver/Reference/BiDi/Modules#events) des [`input`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/input)-Moduls wird ausgelöst, wenn ein Datei-Auswahldialog in einem Kontext geöffnet wird, zum Beispiel wenn [`click()`](/de/docs/Web/API/HTMLElement/click) oder [`showPicker()`](/de/docs/Web/API/HTMLInputElement/showPicker) bei einem [`<input type="file">`](/de/docs/Web/HTML/Reference/Elements/input/file)-Element aufgerufen wird.

## Ereignisdaten

Das `params`-Feld in der Ereignisbenachrichtigung ist ein Objekt mit den folgenden Feldern:

- `context`
  - : Ein String, der die ID des Kontexts enthält, in dem der Datei-Auswahldialog ausgelöst wurde.
    Kontext-IDs werden von Befehlen wie [`browsingContext.getTree`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree) zurückgegeben.
- `element` {{optional_inline}}
  - : Ein Objekt, das die ID enthält, die das [`<input type="file">`](/de/docs/Web/HTML/Reference/Elements/input/file)-DOM-Element, das den Datei-Auswahldialog ausgelöst hat, eindeutig identifiziert.
    Dieses Feld ist enthalten, wenn der Datei-Auswahldialog durch ein Datei-`<input>`-Element geöffnet wird.
- `multiple`
  - : Ein boolescher Wert, der angibt, ob der Datei-Auswahldialog mehrere Dateipfade zulässt.
    - `true`: Der Datei-Auswahldialog akzeptiert mehrere Dateien (das zugehörige `<input>`-Element hat das [`multiple`](/de/docs/Web/HTML/Reference/Elements/input/file#multiple)-Attribut).
    - `false`: Der Datei-Auswahldialog akzeptiert nur einen einzelnen Dateipfad.
- `userContext` {{optional_inline}}
  - : Ein String, der die ID des [Benutzerkontexts](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browser#user_contexts) enthält, in dem der Datei-Auswahldialog ausgelöst wurde.

## Beispiele

### Empfang eines Ereignisses, wenn ein Datei-Auswahldialog geöffnet wird

Angenommen, Sie haben eine [WebDriver-BiDi-Verbindung](/de/docs/Web/WebDriver/How_to/Create_BiDi_connection), eine [aktive Sitzung](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/new) und ein [Abonnement](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/subscribe) für `input.fileDialogOpened` aktiv.

Angenommen, Ihre Seite hat ein [`<input type="file">`](/de/docs/Web/HTML/Reference/Elements/input/file)-Element, das eine einzelne Datei akzeptiert, und Ihr Skript ruft [`click()`](/de/docs/Web/API/HTMLElement/click) auf dem `<input>`-Element auf. Der Browser sendet folgende Benachrichtigung, wenn der Datei-Auswahldialog geöffnet wird:

```json
{
  "type": "event",
  "method": "input.fileDialogOpened",
  "params": {
    "context": "5f07e3ca-ecac-465e-b9ef-49000c196ecf",
    "element": {
      "sharedId": "3be28343-afd3-4dea-a2b6-a863fbbb80e1"
    },
    "multiple": false
  }
}
```

Sie können dann [`input.setFiles`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/input/setFiles) mit der `element.sharedId` aus der Benachrichtigung aufrufen, um den Datei-Upload zu simulieren.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Befehl [`session.subscribe`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/subscribe)
- Befehl [`input.setFiles`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/input/setFiles)
- Befehl [`input.performActions`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/input/performActions)
- Befehl [`input.releaseActions`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/input/releaseActions)
