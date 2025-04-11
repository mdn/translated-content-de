---
title: Arbeiten mit der Zwischenablage
slug: Mozilla/Add-ons/WebExtensions/Interact_with_the_clipboard
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{AddonSidebar}}

Das Arbeiten mit der Zwischenablage in Erweiterungen wechselt von der Web-API-Methode [`document.execCommand`](/de/docs/Web/API/Document/execCommand) (die veraltet ist) zur Methode [`navigator.clipboard`](/de/docs/Web/API/Clipboard).

> [!NOTE]
> Die API [`navigator.clipboard`](/de/docs/Web/API/Clipboard) ist eine kürzlich hinzugefügte Ergänzung zur Spezifikation und ist möglicherweise nicht in allen Browsern vollständig implementiert. Dieser Artikel beschreibt einige Einschränkungen, dennoch sollten Sie die Kompatibilitätstabellen für jede Methode überprüfen, bevor Sie sie verwenden, um sicherzustellen, dass die API Ihre Anforderungen unterstützt.

Der Unterschied zwischen den beiden APIs besteht darin, dass [`document.execCommand`](/de/docs/Web/API/Document/execCommand) analog zu den Tastaturaktionen Kopieren, Ausschneiden und Einfügen ist – Datenaustausch zwischen einer Webseite und der Zwischenablage – während [`navigator.clipboard`](/de/docs/Web/API/Clipboard) beliebige Daten in die Zwischenablage schreibt und von dort liest.

[`navigator.clipboard`](/de/docs/Web/API/Clipboard) bieten separate Methoden zum Lesen oder Schreiben:

- von Textinhalten, mithilfe von [`navigator.clipboard.readText()`](/de/docs/Web/API/Clipboard/readText) und [`navigator.clipboard.writeText()`](/de/docs/Web/API/Clipboard/writeText).
- von Bildern, Rich-Text, HTML und anderen Inhalten, mithilfe von [`navigator.clipboard.read()`](/de/docs/Web/API/Clipboard/read) und [`navigator.clipboard.write()`](/de/docs/Web/API/Clipboard/write).

Jedoch funktionieren [`navigator.clipboard.readText()`](/de/docs/Web/API/Clipboard/readText) und [`navigator.clipboard.writeText()`](/de/docs/Web/API/Clipboard/writeText) in allen Browsern, während [`navigator.clipboard.read()`](/de/docs/Web/API/Clipboard/read) und [`navigator.clipboard.write()`](/de/docs/Web/API/Clipboard/write) dies nicht tun. Zum Beispiel sind sie in Firefox zum Zeitpunkt des Schreibens nicht vollständig implementiert, so dass:

- um mit Bildern zu arbeiten, verwenden Sie {{WebExtAPIRef("clipboard.setImageData","browser.clipboard.setImageData()")}}, um Bilder in die Zwischenablage zu schreiben, und [`document.execCommand(&#34;paste&#34;)`](/de/docs/Web/API/Document/execCommand), um Bilder in eine Webseite einzufügen.
- um reichhaltige Inhalte (wie HTML, Rich-Text inklusive Bildern usw.) in die Zwischenablage zu schreiben, verwenden Sie [`document.execCommand(&#34;copy&#34;)`](/de/docs/Web/API/Document/execCommand) oder [`document.execCommand(&#34;cut&#34;)`](/de/docs/Web/API/Document/execCommand). Dann entweder [`navigator.clipboard.read()`](/de/docs/Web/API/Clipboard/read) (empfohlen) oder [`document.execCommand(&#34;paste&#34;)`](/de/docs/Web/API/Document/execCommand), um den Inhalt von der Zwischenablage zu lesen.

## Schreiben in die Zwischenablage

Dieser Abschnitt beschreibt die Optionen zum Schreiben von Daten in die Zwischenablage.

### Verwendung der Clipboard API

Die Clipboard API schreibt beliebige Daten aus Ihrer Erweiterung in die Zwischenablage. Die Verwendung der API erfordert die Berechtigung `"clipboardRead"` oder `"clipboardWrite"` in Ihrer `manifest.json`-Datei. Da die API nur in [Sicheren Kontexten](/de/docs/Web/Security/Secure_Contexts) verfügbar ist, kann sie nicht von einem Inhaltsskript genutzt werden, das auf `http:`-Seiten läuft, sondern nur auf `https:`-Seiten.

Für Skripte auf Webseiten muss die Berechtigung `"clipboard-write"` über die Web-API [`navigator.permissions`](/de/docs/Web/API/Permissions) angefordert werden. Sie können diese Berechtigung mit [`navigator.permissions.query()`](/de/docs/Web/API/Permissions/query) überprüfen:

```js
navigator.permissions.query({ name: "clipboard-write" }).then((result) => {
  if (result.state === "granted" || result.state === "prompt") {
    /* write to the clipboard now */
  }
});
```

> [!NOTE]
> Der Berechtigungsname `clipboard-write` wird in Firefox nicht unterstützt, sondern nur in Chromium-Browsern.

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

### Verwendung von execCommand()

Die Befehle `"cut"` und `"copy"` der Methode [`document.execCommand()`](/de/docs/Web/API/Document/execCommand) werden verwendet, um den Inhalt der Zwischenablage mit dem ausgewählten Material zu ersetzen. Diese Befehle können ohne spezielle Berechtigung in kurzlebigen Ereignishandlern für eine Benutzeraktion verwendet werden (zum Beispiel ein Klick-Handler).

Zum Beispiel, wenn Sie ein Popup haben, das das folgende HTML enthält:

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

Da sich der `execCommand()`-Aufruf innerhalb eines Klick-Ereignishandlers befindet, benötigen Sie keine speziellen Berechtigungen.

Angenommen, Sie lösen stattdessen das Kopieren von einem Alarm aus:

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

Je nach Browser könnte dies nicht funktionieren. In Firefox wird es nicht funktionieren, und Sie sehen eine Nachricht wie diese in Ihrer Konsole:

`document.execCommand('cut'/'copy') wurde abgelehnt, weil es nicht von innerhalb eines kurz laufenden, benutzergenerierten Ereignishandlers aufgerufen wurde.`

Um diesen Anwendungsfall zu ermöglichen, müssen Sie die Berechtigung `"clipboardWrite"` anfordern. Also: `"clipboardWrite"` ermöglicht es Ihnen, außerhalb eines kurzlebigen Ereignishandlers für eine Benutzeraktion in die Zwischenablage zu schreiben.

> **Hinweis:** [`document.execCommand()`](/de/docs/Web/API/Document/execCommand) funktioniert nicht bei Eingabefeldern des Typs `type="hidden"`, mit dem HTML5-Attribut `"hidden"` oder einer entsprechenden CSS-Regel mit `"display: none;"`. Um eine Schaltfläche "In die Zwischenablage kopieren" zu einem `span`, `div` oder `p`-Tag hinzuzufügen, müssen Sie einen Workaround verwenden, wie das Setzen der Position des Eingabefelds auf absolut und das Verschieben aus dem sichtbaren Bereich.

### Browser-spezifische Überlegungen

Die Zwischenablage und andere hier beteiligte APIs entwickeln sich schnell, daher gibt es Unterschiede zwischen Browsern, wie sie funktionieren.

In Chrome:

- Sie benötigen kein `"clipboardWrite"`, selbst um außerhalb eines benutzergenerierten Ereignishandlers auf die Zwischenablage zu schreiben.

In Firefox:

- [`navigator.clipboard.write()`](/de/docs/Web/API/Clipboard/write) wird nicht unterstützt.

Weitere Informationen finden Sie in den [Browser-Kompatibilitätstabellen](#browser-kompatibilität).

## Lesen von der Zwischenablage

Dieser Abschnitt beschreibt die Optionen zum Lesen oder Einfügen von Daten aus der Zwischenablage.

### Verwendung der Clipboard API

Die Methoden [`navigator.clipboard.readText()`](/de/docs/Web/API/Clipboard/readText) und [`navigator.clipboard.read()`](/de/docs/Web/API/Clipboard/read) der Clipboard-API ermöglichen es Ihnen, beliebigen Text oder Binärdaten von der Zwischenablage in [sicheren Kontexten](/de/docs/Web/Security/Secure_Contexts) zu lesen. Dadurch können Sie auf die Daten in der Zwischenablage zugreifen, ohne sie in ein bearbeitbares Element einfügen zu müssen.

Sobald Sie die Berechtigung `"clipboard-read"` von der [Permissions API](/de/docs/Web/API/Permissions_API) erhalten haben, können Sie leicht von der Zwischenablage lesen. Zum Beispiel holt dieses Code-Snippet den Text von der Zwischenablage und ersetzt den Inhalt des Elements mit der ID `"outbox"` durch diesen Text.

```js
navigator.clipboard
  .readText()
  .then((clipText) => (document.getElementById("outbox").innerText = clipText));
```

### Verwendung von execCommand()

Um [`document.execCommand(&#34;paste&#34;)`](/de/docs/Web/API/Document/execCommand) zu verwenden, benötigt Ihre Erweiterung die Berechtigung `"clipboardRead"`. Dies gilt auch, wenn Sie den Befehl `"paste"` in einem benutzergenerierten Ereignishandler verwenden, wie [`click`](/de/docs/Web/API/Element/click_event) oder [`keypress`](/de/docs/Web/API/Element/keypress_event).

Betrachten Sie HTML, das etwas wie dies enthält:

```html
<textarea id="output"></textarea> <button id="paste">Paste</button>
```

Um den Inhalt des {{HTMLElement("textarea")}}-Elements mit der ID `"output"` von der Zwischenablage zu setzen, wenn der Benutzer auf den `"paste"` {{HTMLElement("button")}} klickt, können Sie einen Code verwenden wie diesen:

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

Firefox unterstützt die Berechtigung `"clipboardRead"` ab Version 54, erlaubt aber nur das Einfügen in Elemente im [Content Editable Mode](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable), was für Inhaltsskripte nur mit einem {{HTMLElement("textarea")}} funktioniert. Für Hintergrundskripte kann jedes Element in den Content Editable Mode gesetzt werden.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Clipboard API](/de/docs/Web/API/Clipboard_API)
- [Permissions API](/de/docs/Web/API/Permissions_API)
- [Inhalt bearbeitbar machen](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable)
