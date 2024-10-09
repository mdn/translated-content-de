---
title: Interagieren mit der Zwischenablage
slug: Mozilla/Add-ons/WebExtensions/Interact_with_the_clipboard
l10n:
  sourceCommit: 92447fec056cc89b7f28445851bea0c981fcbc12
---

{{AddonSidebar}}

Die Arbeit mit der Zwischenablage in Erweiterungen bewegt sich vom Web-API-Ansatz mit [`document.execCommand`](/de/docs/Web/API/Document/execCommand) (das veraltet ist) hin zum [`navigator.clipboard`](/de/docs/Web/API/Clipboard)-Ansatz.

> [!NOTE]
> Das [`navigator.clipboard`](/de/docs/Web/API/Clipboard) API ist eine neuere Ergänzung der Spezifikation und möglicherweise nicht in allen Browsern vollständig implementiert. Dieser Artikel beschreibt einige Einschränkungen, aber stellen Sie sicher, dass Sie die Kompatibilitätstabellen für jede Methode überprüfen, bevor Sie sie verwenden, um sicherzustellen, dass das API Ihre Anforderungen unterstützt.

Der Unterschied zwischen den beiden APIs besteht darin, dass [`document.execCommand`](/de/docs/Web/API/Document/execCommand) analog zu den Tastaturaktionen zum Kopieren, Ausschneiden und Einfügen ist – es tauscht Daten zwischen einer Webseite und der Zwischenablage aus –, während [`navigator.clipboard`](/de/docs/Web/API/Clipboard) beliebige Daten zur und von der Zwischenablage schreibt und liest.

[`navigator.clipboard`](/de/docs/Web/API/Clipboard) bietet separate Methoden zum Lesen oder Schreiben:

- von Textinhalten, mit [`navigator.clipboard.readText()`](/de/docs/Web/API/Clipboard/readText) und [`navigator.clipboard.writeText()`](/de/docs/Web/API/Clipboard/writeText).
- von Bildern, Rich-Text, HTML und anderen komplexen Inhalten, mit [`navigator.clipboard.read()`](/de/docs/Web/API/Clipboard/read) und [`navigator.clipboard.write()`](/de/docs/Web/API/Clipboard/write).

Jedoch funktionieren [`navigator.clipboard.readText()`](/de/docs/Web/API/Clipboard/readText) und [`navigator.clipboard.writeText()`](/de/docs/Web/API/Clipboard/writeText) in allen Browsern, während [`navigator.clipboard.read()`](/de/docs/Web/API/Clipboard/read) und [`navigator.clipboard.write()`](/de/docs/Web/API/Clipboard/write) dies nicht tun. Zum Beispiel sind zum Zeitpunkt des Schreibens in Firefox [`navigator.clipboard.read()`](/de/docs/Web/API/Clipboard/read) und [`navigator.clipboard.write()`](/de/docs/Web/API/Clipboard/write) nicht vollständig implementiert, sodass:

- um mit Bildern zu arbeiten, verwenden Sie {{WebExtAPIRef("clipboard.setImageData","browser.clipboard.setImageData()")}}, um Bilder in die Zwischenablage zu schreiben und [`document.execCommand("paste")`](/de/docs/Web/API/Document/execCommand), um Bilder auf eine Webseite einzufügen.
- um komplexe Inhalte (wie HTML, Rich-Text einschließlich Bilder usw.) in die Zwischenablage zu schreiben, verwenden Sie [`document.execCommand("copy")`](/de/docs/Web/API/Document/execCommand) oder [`document.execCommand("cut")`](/de/docs/Web/API/Document/execCommand). Dann entweder [`navigator.clipboard.read()`](/de/docs/Web/API/Clipboard/read) (empfohlen) oder [`document.execCommand("paste")`](/de/docs/Web/API/Document/execCommand), um den Inhalt aus der Zwischenablage zu lesen.

## Schreiben in die Zwischenablage

Dieser Abschnitt beschreibt die Optionen zum Schreiben von Daten in die Zwischenablage.

### Verwenden des Clipboard API

Das Clipboard API schreibt beliebige Daten von Ihrer Erweiterung in die Zwischenablage. Die Nutzung des API erfordert die Berechtigung `"clipboardRead"` oder `"clipboardWrite"` in Ihrer `manifest.json`-Datei. Da das API nur in [sicheren Kontexten](/de/docs/Web/Security/Secure_Contexts) verfügbar ist, kann es nicht von einem Inhalts-Skript auf `http:`-Seiten, sondern nur auf `https:`-Seiten verwendet werden.

Für Seitenskripte muss die Berechtigung `"clipboard-write"` mithilfe des Web-APIs [`navigator.permissions`](/de/docs/Web/API/Permissions) angefordert werden. Sie können diese Berechtigung mit [`navigator.permissions.query()`](/de/docs/Web/API/Permissions/query) überprüfen:

```js
navigator.permissions.query({ name: "clipboard-write" }).then((result) => {
  if (result.state === "granted" || result.state === "prompt") {
    /* write to the clipboard now */
  }
});
```

> [!NOTE]
> Der Berechtigungsname `clipboard-write` wird in Firefox nicht unterstützt, nur in Chromium-Browsern.

Diese Funktion nimmt einen String und schreibt ihn in die Zwischenablage:

```js
function updateClipboard(newClip) {
  navigator.clipboard.writeText(newClip).then(
    () => {
      /* clipboard successfully set */
    },
    () => {
      /* clipboard write failed */
    },
  );
}
```

### Verwenden von execCommand()

Die Befehle `"cut"` und `"copy"` der Methode [`document.execCommand()`](/de/docs/Web/API/Document/execCommand) werden verwendet, um den Inhalt der Zwischenablage durch das ausgewählte Material zu ersetzen. Diese Befehle können ohne spezielle Berechtigung in kurzlebigen Ereignishandlern für eine Benutzeraktion (zum Beispiel ein Click-Handler) verwendet werden.

Angenommen, Sie haben ein Popup, das den folgenden HTML-Code enthält:

```html
<input id="input" type="text" /> <button id="copy">Copy</button>
```

Um den `"copy"`-Button den Inhalt des {{HTMLElement("input")}}-Elements kopieren zu lassen, können Sie einen Code wie diesen verwenden:

```js
function copy() {
  let copyText = document.querySelector("#input");
  copyText.select();
  document.execCommand("copy");
}

document.querySelector("#copy").addEventListener("click", copy);
```

Da der Aufruf von `execCommand()` innerhalb eines Klick-Ereignishandlers erfolgt, sind keine besonderen Berechtigungen erforderlich.

Angenommen, Sie lösen das Kopieren stattdessen durch einen Alarm aus:

```js
function copy() {
  let copyText = document.querySelector("#input");
  copyText.select();
  document.execCommand("copy");
}

browser.alarms.create({
  delayInMinutes: 0.1,
});

browser.alarms.onAlarm.addListener(copy);
```

Je nach Browser funktioniert dies möglicherweise nicht. In Firefox wird dies nicht funktionieren, und Sie sehen eine Nachricht wie diese in Ihrer Konsole:

`document.execCommand('cut'/'copy') wurde abgelehnt, da es nicht aus einem kurz laufenden, benutzergenerierten Ereignishandler heraus aufgerufen wurde.`

Um diesen Anwendungsfall zu ermöglichen, müssen Sie die Berechtigung `"clipboardWrite"` [anfordern](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions). So ermöglicht `"clipboardWrite"` Ihnen, außerhalb eines kurzlebigen Ereignishandlers für eine Benutzeraktion in die Zwischenablage zu schreiben.

> **Hinweis:** [`document.execCommand()`](/de/docs/Web/API/Document/execCommand) funktioniert nicht bei Eingabefeldern vom Typ `type="hidden"`, mit dem HTML5-Attribut `"hidden"` oder einer übereinstimmenden CSS-Regel mit `"display: none;"`. Um also einer `span`, `div` oder `p`-Tag einen "In die Zwischenablage kopieren"-Button hinzuzufügen, müssen Sie einen Workaround verwenden, wie zum Beispiel die Position des Eingabefelds auf absolut zu setzen und es aus dem Viewport zu bewegen.

### Browser-spezifische Überlegungen

Die Zwischenablage- und andere hiermit verbundene APIs entwickeln sich schnell weiter, sodass es Unterschiede zwischen den Browsern gibt, wie sie funktionieren.

In Chrome:

- Sie benötigen `"clipboardWrite"` nicht, selbst wenn Sie außerhalb eines benutzergenerierten Ereignishandlers in die Zwischenablage schreiben.

In Firefox:

- [`navigator.clipboard.write()`](/de/docs/Web/API/Clipboard/write) wird nicht unterstützt.

Sehen Sie sich die [Browser-Kompatibilitätstabellen](#browser-kompatibilität) für weitere Informationen an.

## Lesen aus der Zwischenablage

Dieser Abschnitt beschreibt die Optionen zum Lesen oder Einfügen von Daten aus der Zwischenablage.

### Verwenden des Clipboard API

Die Methoden [`navigator.clipboard.readText()`](/de/docs/Web/API/Clipboard/readText) und [`navigator.clipboard.read()`](/de/docs/Web/API/Clipboard/read) des Clipboard API ermöglichen es Ihnen, beliebigen Text oder binäre Daten aus der Zwischenablage in [sicheren Kontexten](/de/docs/Web/Security/Secure_Contexts) zu lesen. Dadurch können Sie auf die Daten in der Zwischenablage zugreifen, ohne sie in ein bearbeitbares Element einzufügen.

Sobald Sie die Berechtigung `"clipboard-read"` vom [Permissions API](/de/docs/Web/API/Permissions_API) haben, können Sie leicht von der Zwischenablage lesen. Zum Beispiel holt dieser Codeschnipsel den Text aus der Zwischenablage und ersetzt den Inhalt des Elements mit der ID `"outbox"` durch diesen Text.

```js
navigator.clipboard
  .readText()
  .then((clipText) => (document.getElementById("outbox").innerText = clipText));
```

### Verwenden von execCommand()

Um [`document.execCommand("paste")`](/de/docs/Web/API/Document/execCommand) zu verwenden, benötigt Ihre Erweiterung die [Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) `"clipboardRead"`. Dies gilt selbst dann, wenn Sie den `"paste"`-Befehl innerhalb eines benutzergenerierten Ereignishandlers verwenden, wie [`click`](/de/docs/Web/API/Element/click_event) oder [`keypress`](/de/docs/Web/API/Element/keypress_event).

Berücksichtigen Sie HTML, das so etwas enthält:

```html
<textarea id="output"></textarea> <button id="paste">Paste</button>
```

Um den Inhalt des {{HTMLElement("textarea")}}-Elements mit der ID `"output"` bei einem Klick auf den `"paste"`-{{HTMLElement("button")}}-Button aus der Zwischenablage zu setzen, können Sie einen Code wie diesen verwenden:

```js
function paste() {
  let pasteText = document.querySelector("#output");
  pasteText.focus();
  document.execCommand("paste");
  console.log(pasteText.textContent);
}

document.querySelector("#paste").addEventListener("click", paste);
```

### Browser-spezifische Überlegungen

Firefox unterstützt die Berechtigung `"clipboardRead"` ab Version 54, unterstützt jedoch das Einfügen in Elemente nur im [Content Edit Mode](/de/docs/Web/HTML/Global_attributes/contenteditable), was für Inhalts-Skripte nur mit einem {{HTMLElement("textarea")}} funktioniert. Für Hintergrund-Skripte kann jedes Element in den Content Edit Mode gesetzt werden.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Clipboard API](/de/docs/Web/API/Clipboard_API)
- [Permissions API](/de/docs/Web/API/Permissions_API)
- [Inhalt bearbeitbar machen](/de/docs/Web/HTML/Global_attributes/contenteditable)
