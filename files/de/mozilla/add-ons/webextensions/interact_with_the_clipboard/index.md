---
title: Interaktion mit der Zwischenablage
slug: Mozilla/Add-ons/WebExtensions/Interact_with_the_clipboard
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Die Arbeit mit der Zwischenablage in Erweiterungen wechselt von der Web-API-Methode [`document.execCommand`](/de/docs/Web/API/Document/execCommand) (die veraltet ist) zur [`navigator.clipboard`](/de/docs/Web/API/Clipboard)-Methode.

> [!NOTE]
> Die [`navigator.clipboard`](/de/docs/Web/API/Clipboard)-API ist eine neuere Ergänzung der Spezifikation und möglicherweise nicht in allen Browsern vollständig implementiert. Dieser Artikel beschreibt einige Einschränkungen, aber stellen Sie sicher, dass Sie die Kompatibilitätstabellen für jede Methode überprüfen, bevor Sie sie verwenden, um sicherzustellen, dass die API Ihre Anforderungen erfüllt.

Der Unterschied zwischen den beiden APIs besteht darin, dass [`document.execCommand`](/de/docs/Web/API/Document/execCommand) analog zu den Tastaturaktionen Kopieren, Ausschneiden und Einfügen ist – Daten zwischen einer Webseite und der Zwischenablage austauschen –, während [`navigator.clipboard`](/de/docs/Web/API/Clipboard) beliebige Daten zur und von der Zwischenablage liest und schreibt.

[`navigator.clipboard`](/de/docs/Web/API/Clipboard) bietet separate Methoden zum Lesen oder Schreiben:

- von Textinhalten, unter Verwendung von [`navigator.clipboard.readText()`](/de/docs/Web/API/Clipboard/readText) und [`navigator.clipboard.writeText()`](/de/docs/Web/API/Clipboard/writeText).
- von Bildern, Rich-Text, HTML und anderen reichhaltigen Inhalten, unter Verwendung von [`navigator.clipboard.read()`](/de/docs/Web/API/Clipboard/read) und [`navigator.clipboard.write()`](/de/docs/Web/API/Clipboard/write).

Während jedoch [`navigator.clipboard.readText()`](/de/docs/Web/API/Clipboard/readText) und [`navigator.clipboard.writeText()`](/de/docs/Web/API/Clipboard/writeText) in allen Browsern funktionieren, tun dies [`navigator.clipboard.read()`](/de/docs/Web/API/Clipboard/read) und [`navigator.clipboard.write()`](/de/docs/Web/API/Clipboard/write) nicht. Zum Beispiel sind zum Zeitpunkt des Schreibens auf Firefox [`navigator.clipboard.read()`](/de/docs/Web/API/Clipboard/read) und [`navigator.clipboard.write()`](/de/docs/Web/API/Clipboard/write) nicht vollständig implementiert, sodass:

- Um mit Bildern zu arbeiten, verwenden Sie {{WebExtAPIRef("clipboard.setImageData","browser.clipboard.setImageData()")}} zum Schreiben von Bildern in die Zwischenablage und [`document.execCommand(&#34;paste&#34;)`](/de/docs/Web/API/Document/execCommand), um Bilder in eine Webseite einzufügen.
- Um reichhaltige Inhalte (wie HTML, Rich-Text einschließlich Bildern usw.) in die Zwischenablage zu schreiben, verwenden Sie [`document.execCommand(&#34;copy&#34;)`](/de/docs/Web/API/Document/execCommand) oder [`document.execCommand(&#34;cut&#34;)`](/de/docs/Web/API/Document/execCommand). Dann entweder [`navigator.clipboard.read()`](/de/docs/Web/API/Clipboard/read) (empfohlen) oder [`document.execCommand(&#34;paste&#34;)`](/de/docs/Web/API/Document/execCommand), um den Inhalt aus der Zwischenablage zu lesen.

## In die Zwischenablage schreiben

Dieser Abschnitt beschreibt die Optionen zum Schreiben von Daten in die Zwischenablage.

### Verwendung der Clipboard-API

Die Clipboard-API schreibt beliebige Daten von Ihrer Erweiterung in die Zwischenablage. Die Verwendung der API erfordert die Berechtigungen `"clipboardRead"` oder `"clipboardWrite"` in Ihrer `manifest.json`-Datei. Da die API nur in [sicheren Kontexten](/de/docs/Web/Security/Defenses/Secure_Contexts) verfügbar ist, kann sie nicht von einem Inhalts-Script verwendet werden, das auf `http:`-Seiten läuft, nur auf `https:`-Seiten.

Für Seitenskripte muss die Berechtigung `"clipboard-write"` über die Web-API [`navigator.permissions`](/de/docs/Web/API/Permissions) angefordert werden. Sie können diese Berechtigung mit [`navigator.permissions.query()`](/de/docs/Web/API/Permissions/query) prüfen:

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

### Verwendung von execCommand()

Die `"cut"`- und `"copy"`-Befehle der Methode [`document.execCommand()`](/de/docs/Web/API/Document/execCommand) ersetzen den Inhalt der Zwischenablage mit dem ausgewählten Material. Diese Befehle können ohne spezielle Berechtigung in kurzlebigen Ereignishandlern für eine Benutzeraktion verwendet werden (z.B. ein Klick-Handler).

Angenommen, Sie haben ein Popup, das den folgenden HTML-Code enthält:

```html
<input id="input" type="text" /> <button id="copy">Copy</button>
```

Damit die Schaltfläche `"copy"` den Inhalt des {{HTMLElement("input")}}-Elements kopiert, können Sie einen Code wie diesen verwenden:

```js
function copy() {
  let copyText = document.querySelector("#input");
  copyText.select();
  document.execCommand("copy");
}

document.querySelector("#copy").addEventListener("click", copy);
```

Da sich der `execCommand()`-Aufruf innerhalb eines Klick-Ereignishandlers befindet, benötigen Sie keine besonderen Berechtigungen.

Angenommen jedoch, Sie lösen das Kopieren stattdessen aus einem Alarm aus:

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

Je nach Browser funktioniert dies möglicherweise nicht. In Firefox funktioniert es nicht und Sie sehen eine Meldung wie diese in Ihrer Konsole:

`document.execCommand('cut'/'copy') wurde verweigert, da es nicht innerhalb eines kurzlebigen benutzergenerierten Ereignishandlers aufgerufen wurde.`

Um diesen Anwendungsfall zu aktivieren, müssen Sie die Berechtigung `"clipboardWrite"` [anfordern](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions). Somit: `"clipboardWrite"` ermöglicht es Ihnen, außerhalb eines kurzlebigen Ereignishandlers für eine Benutzeraktion in die Zwischenablage zu schreiben.

> [!NOTE]
> [`document.execCommand()`](/de/docs/Web/API/Document/execCommand) funktioniert nicht in Eingabefeldern vom Typ `type="hidden"`, mit dem HTML5-Attribut `"hidden"` oder bei übereinstimmenden CSS-Regeln mit `"display: none;"`. Um also einer `span`, `div` oder `p`-Tag eine "In die Zwischenablage kopieren"-Schaltfläche hinzuzufügen, müssen Sie einen Workaround verwenden, wie das Setzen der Position des Eingabefelds auf absolut und das Verschieben aus dem Viewport.

### Browser-spezifische Überlegungen

Die Zwischenablage und andere hier beteiligte APIs entwickeln sich schnell weiter, sodass es Unterschiede zwischen den Browsern gibt, wie sie funktionieren.

In Chrome:

- Sie benötigen `"clipboardWrite"` nicht, selbst um außerhalb eines benutzergenerierten Ereignishandlers in die Zwischenablage zu schreiben.

In Firefox:

- [`navigator.clipboard.write()`](/de/docs/Web/API/Clipboard/write) wird nicht unterstützt.

Siehe die [Browser-Kompatibilitätstabellen](#browser-kompatibilität) für weitere Informationen.

## Aus der Zwischenablage lesen

Dieser Abschnitt beschreibt die Optionen zum Lesen oder Einfügen von Daten aus der Zwischenablage.

### Verwendung der Clipboard-API

Die Methoden [`navigator.clipboard.readText()`](/de/docs/Web/API/Clipboard/readText) und [`navigator.clipboard.read()`](/de/docs/Web/API/Clipboard/read) der Clipboard-API erlauben Ihnen, beliebigen Text oder Binärdaten aus der Zwischenablage in [sicheren Kontexten](/de/docs/Web/Security/Defenses/Secure_Contexts) zu lesen. Dies ermöglicht es Ihnen, auf die Daten in der Zwischenablage zuzugreifen, ohne sie in ein bearbeitbares Element einfügen zu müssen.

Sobald Sie die Berechtigung `"clipboard-read"` von der [Permissions API](/de/docs/Web/API/Permissions_API) haben, können Sie einfach aus der Zwischenablage lesen. Beispielsweise holt dieses Code-Snippet den Text aus der Zwischenablage und ersetzt den Inhalt des Elements mit der ID `"outbox"` mit diesem Text.

```js
navigator.clipboard
  .readText()
  .then((clipText) => (document.getElementById("outbox").innerText = clipText));
```

### Verwendung von execCommand()

Um [`document.execCommand(&#34;paste&#34;)`](/de/docs/Web/API/Document/execCommand) zu verwenden, benötigt Ihre Erweiterung die Berechtigung `"clipboardRead"` [/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions]. Dies gilt auch, wenn Sie den `"paste"`-Befehl innerhalb eines benutzergenerierten Ereignishandlers verwenden, wie z.B. [`click`](/de/docs/Web/API/Element/click_event) oder [`keypress`](/de/docs/Web/API/Element/keypress_event).

Berücksichtigen Sie HTML, das in etwa so aussieht:

```html
<textarea id="output"></textarea> <button id="paste">Paste</button>
```

Um den Inhalt des {{HTMLElement("textarea")}}-Elements mit der ID `"output"` aus der Zwischenablage zu setzen, wenn der Benutzer auf die Schaltfläche `"paste"` klickt, können Sie Code wie diesen verwenden:

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

Firefox unterstützt die Berechtigung `"clipboardRead"` [/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions] ab Version 54, unterstützt jedoch nur das Einfügen in Elemente im [contenteditable-Modus](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable), was für Inhaltsskripte nur mit einem {{HTMLElement("textarea")}} funktioniert. Für Hintergrundskripte kann jedes Element in den contenteditable-Modus versetzt werden.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Clipboard-API](/de/docs/Web/API/Clipboard_API)
- [Permissions-API](/de/docs/Web/API/Permissions_API)
- [Inhalte editierbar machen](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable)
