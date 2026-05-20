---
title: "`input.fileDialogOpened` Ereignis"
short-title: fileDialogOpened
slug: Web/WebDriver/Reference/BiDi/Modules/input/fileDialogOpened
l10n:
  sourceCommit: 0e3eb297658e3fff3be9bbe2a09cb6721ed1979b
---

Das `input.fileDialogOpened` [Ereignis](/de/docs/Web/WebDriver/Reference/BiDi/Modules#events) des [`input`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/input) Moduls wird ausgelöst, wenn ein Dateiauswahldialog in einem Kontext geöffnet wird, zum Beispiel wenn [`click()`](/de/docs/Web/API/HTMLElement/click) oder [`showPicker()`](/de/docs/Web/API/HTMLInputElement/showPicker) auf einem [`<input type="file">`](/de/docs/Web/HTML/Reference/Elements/input/file) Element aufgerufen wird.

## Ereignisdaten

Das `params` Feld in der Ereignisbenachrichtigung ist ein Objekt mit den folgenden Feldern:

- `context`
  - : Ein String, der die ID ({{Glossary("UUID", "UUID")}}) des Kontexts enthält, in dem der Dateiauswahldialog ausgelöst wurde. Kontext-IDs werden von Befehlen wie [`browsingContext.getTree`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree) zurückgegeben.
- `element` {{optional_inline}}
  - : Ein Objekt, das die ID enthält, die das [`<input type="file">`](/de/docs/Web/HTML/Reference/Elements/input/file) DOM-Element eindeutig identifiziert, das den Dateiauswahldialog ausgelöst hat. Dieses Feld ist enthalten, wenn der Dateiauswahldialog von einem Datei `<input>` Element geöffnet wird.
- `multiple`
  - : Ein boolean, der angibt, ob der Dateiauswahldialog mehrere Dateipfade zulässt.
    - `true`: Der Dateiauswahldialog akzeptiert mehrere Dateien (das zugehörige `<input>` Element hat das [`multiple`](/de/docs/Web/HTML/Reference/Elements/input/file#multiple) Attribut).
    - `false`: Der Dateiauswahldialog akzeptiert nur einen einzelnen Dateipfad.
- `userContext` {{optional_inline}}
  - : Ein String, der die ID des [Benutzerkontexts](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browser#user_contexts) enthält, in dem der Dateiauswahldialog ausgelöst wurde.

## Beispiele

### Empfang eines Ereignisses, wenn ein Dateiauswahldialog geöffnet wird

Betrachten Sie ein Szenario, in dem eine Seite ein [`<input type="file">`](/de/docs/Web/HTML/Reference/Elements/input/file) Element hat, das eine einzelne Datei akzeptiert, und Ihr Skript [`click()`](/de/docs/Web/API/HTMLElement/click) darauf aufruft. Mit einer [WebDriver BiDi Verbindung](/de/docs/Web/WebDriver/How_to/Create_BiDi_connection) und einem [Abonnement](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/subscribe) für `input.fileDialogOpened` aktiv, sendet der Browser eine Benachrichtigung, wenn der Dateiauswahldialog geöffnet wird:

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

Sie können dann [`input.setFiles`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/input/setFiles) mit der `element.sharedId` aus der Benachrichtigung aufrufen, um einen Datei-Upload zu simulieren.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`session.subscribe`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/subscribe) Befehl
- [`input.setFiles`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/input/setFiles) Befehl
- [`input.performActions`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/input/performActions) Befehl
- [`input.releaseActions`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/input/releaseActions) Befehl
