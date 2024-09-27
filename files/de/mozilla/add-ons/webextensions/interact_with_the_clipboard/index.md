---
title: Mit der Zwischenablage interagieren
slug: Mozilla/Add-ons/WebExtensions/Interact_with_the_clipboard
l10n:
  sourceCommit: 942bbbe848b4b742a689de970f697d4c5b355bde
---

{{AddonSidebar}}

Die Arbeit mit der Zwischenablage in Erweiterungen entwickelt sich von der Web-API-Methode [`document.execCommand`](/de/docs/Web/API/Document/execCommand) (die veraltet ist) zur Methode [`navigator.clipboard`](/de/docs/Web/API/Clipboard).

> [!NOTE]
> Die [`navigator.clipboard`](/de/docs/Web/API/Clipboard)-API ist eine neue Ergänzung zur Spezifikation und möglicherweise nicht in allen Browsern vollständig implementiert. Dieser Artikel beschreibt einige Einschränkungen, aber vergewissern Sie sich, dass Sie die Kompatibilitätstabellen für jede Methode überprüfen, bevor Sie sie verwenden, um sicherzustellen, dass die API Ihre Anforderungen unterstützt.

Der Unterschied zwischen den beiden APIs besteht darin, dass [`document.execCommand`](/de/docs/Web/API/Document/execCommand) analog zu den Tastaturaktionen Kopieren, Ausschneiden und Einfügen – den Datenaustausch zwischen einer Webseite und der Zwischenablage – ermöglicht, während [`navigator.clipboard`](/de/docs/Web/API/Clipboard) beliebige Daten in die Zwischenablage schreibt und daraus liest.

[`navigator.clipboard`](/de/docs/Web/API/Clipboard) stellt separate Methoden zum Lesen oder Schreiben bereit:

- Textinhalte, mit [`navigator.clipboard.readText()`](/de/docs/Web/API/Clipboard/readText) und [`navigator.clipboard.writeText()`](/de/docs/Web/API/Clipboard/writeText).
- Bilder, Rich-Text, HTML und andere Rich-Content mit [`navigator.clipboard.read()`](/de/docs/Web/API/Clipboard/read) und [`navigator.clipboard.write()`](/de/docs/Web/API/Clipboard/write).

Allerdings funktionieren [`navigator.clipboard.readText()`](/de/docs/Web/API/Clipboard/readText) und [`navigator.clipboard.writeText()`](/de/docs/Web/API/Clipboard/writeText) in allen Browsern, während [`navigator.clipboard.read()`](/de/docs/Web/API/Clipboard/read) und [`navigator.clipboard.write()`](/de/docs/Web/API/Clipboard/write) nicht funktionieren. Zum Beispiel sind in Firefox zum Zeitpunkt der Erstellung dieses Artikels [`navigator.clipboard.read()`](/de/docs/Web/API/Clipboard/read) und [`navigator.clipboard.write()`](/de/docs/Web/API/Clipboard/write) nicht vollständig implementiert, daher:

- Verwenden Sie {{WebExtAPIRef("clipboard.setImageData","browser.clipboard.setImageData()")}}, um Bilder in die Zwischenablage zu schreiben und [`document.execCommand(&#34;paste&#34;)`](/de/docs/Web/API/Document/execCommand), um Bilder in eine Webseite einzufügen.
- Um Rich-Content (z.B. HTML, Rich-Text inklusive Bildern usw.) in die Zwischenablage zu schreiben, verwenden Sie [`document.execCommand(&#34;copy&#34;)`](/de/docs/Web/API/Document/execCommand) oder [`document.execCommand(&#34;cut&#34;)`](/de/docs/Web/API/Document/execCommand). Anschließend entweder [`navigator.clipboard.read()`](/de/docs/Web/API/Clipboard/read) (empfohlen) oder [`document.execCommand(&#34;paste&#34;)`](/de/docs/Web/API/Document/execCommand), um den Inhalt aus der Zwischenablage zu lesen.

## In die Zwischenablage schreiben

Dieser Abschnitt beschreibt die Optionen zum Schreiben von Daten in die Zwischenablage.

### Verwendung der Clipboard-API

Die Clipboard-API schreibt beliebige Daten aus Ihrer Erweiterung in die Zwischenablage. Die Verwendung der API erfordert die Berechtigung `"clipboardRead"` oder `"clipboardWrite"` in Ihrer `manifest.json`-Datei. Da die API nur für [sichere Kontexte](/de/docs/Web/Security/Secure_Contexts) verfügbar ist, kann sie nicht von einem Inhaltsskript verwendet werden, das auf `http:`-Seiten läuft, sondern nur auf `https:`-Seiten.

Für Seitenskripte muss die Berechtigung `"clipboard-write"` über die Web-API [`navigator.permissions`](/de/docs/Web/API/Permissions) angefordert werden. Sie können diese Berechtigung mit [`navigator.permissions.query()`](/de/docs/Web/API/Permissions/query) überprüfen:

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

Die Befehle `"cut"` und `"copy"` der Methode [`document.execCommand()`](/de/docs/Web/API/Document/execCommand) werden verwendet, um den Inhalt der Zwischenablage mit dem ausgewählten Material zu ersetzen. Diese Befehle können ohne spezielle Berechtigung in kurzlebigen Ereignishandlern für eine Benutzeraktion (z.B. ein Klick-Handler) verwendet werden.

Angenommen, Sie haben ein Popup, das den folgenden HTML-Code enthält:

```html
<input id="input" type="text" /> <button id="copy">Copy</button>
```

Um den `"copy"`-Button dazu zu bringen, die Inhalte des {{HTMLElement("input")}}-Elements zu kopieren, können Sie Code wie diesen verwenden:

```js
function copy() {
  let copyText = document.querySelector("#input");
  copyText.select();
  document.execCommand("copy");
}

document.querySelector("#copy").addEventListener("click", copy);
```

Da der Aufruf von `execCommand()` in einem Klick-Ereignishandler erfolgt, benötigen Sie keine speziellen Berechtigungen.

Wenn Sie jedoch stattdessen das Kopieren durch einen Alarm auslösen:

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

Je nach Browser funktioniert dies möglicherweise nicht. In Firefox wird es nicht funktionieren, und Sie sehen eine Nachricht wie diese in Ihrer Konsole:

`document.execCommand('cut'/'copy') was denied because it was not called from inside a short running user-generated event handler.`

Um diesen Anwendungsfall zu ermöglichen, müssen Sie um die Berechtigung `"clipboardWrite"` [bitten](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions). Also: `"clipboardWrite"` ermöglicht es Ihnen, außerhalb eines kurzlebigen Ereignishandlers für eine Benutzeraktion in die Zwischenablage zu schreiben.

> **Hinweis:** [`document.execCommand()`](/de/docs/Web/API/Document/execCommand) funktioniert nicht bei Eingabefeldern des Typs `type="hidden"`, mit dem HTML5-Attribut `"hidden"` oder bei jeglicher passenden CSS-Regel, die `"display: none;"` verwendet. Um also einer `span`, `div` oder `p`-Markierung einen "In die Zwischenablage kopieren"-Button hinzuzufügen, müssen Sie einen Workaround verwenden, wie zum Beispiel die Eingabeposition auf absolut zu setzen und aus dem Ansichtsfenster zu verschieben.

### Browser-spezifische Überlegungen

Die Zwischenablage und andere hier beteiligte APIs entwickeln sich rapide, daher gibt es unter den Browsern Unterschiede, wie sie arbeiten.

In Chrome:

- Sie benötigen `"clipboardWrite"` nicht, selbst um außerhalb eines benutzergenerierten Ereignishandlers in die Zwischenablage zu schreiben.

In Firefox:

- [`navigator.clipboard.write()`](/de/docs/Web/API/Clipboard/write) wird nicht unterstützt.

Weitere Informationen finden Sie in den [Browser-Kompatibilitätstabellen](#browser-kompatibilität).

## Aus der Zwischenablage lesen

Dieser Abschnitt beschreibt die Optionen zum Lesen oder Einfügen von Daten aus der Zwischenablage.

### Verwendung der Clipboard-API

Die Methoden [`navigator.clipboard.readText()`](/de/docs/Web/API/Clipboard/readText) und [`navigator.clipboard.read()`](/de/docs/Web/API/Clipboard/read) der Clipboard-API ermöglichen es Ihnen, beliebigen Text oder binäre Daten aus der Zwischenablage in [sicheren Kontexts](/de/docs/Web/Security/Secure_Contexts) zu lesen. Damit können Sie auf die Daten in der Zwischenablage zugreifen, ohne sie in ein bearbeitbares Element einfügen zu müssen.

Sobald Sie die Berechtigung `"clipboard-read"` von der [Permissions API](/de/docs/Web/API/Permissions_API) haben, können Sie leicht aus der Zwischenablage lesen. Zum Beispiel ruft dieser Codeausschnitt den Text aus der Zwischenablage ab und ersetzt den Inhalt des Elements mit der ID `"outbox"` mit diesem Text.

```js
navigator.clipboard
  .readText()
  .then((clipText) => (document.getElementById("outbox").innerText = clipText));
```

### Verwendung von execCommand()

Um [`document.execCommand(&#34;paste&#34;)`](/de/docs/Web/API/Document/execCommand) zu verwenden, benötigt Ihre Erweiterung die Berechtigung `"clipboardRead"` [permission](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions). Dies ist der Fall, selbst wenn Sie den `"paste"`-Befehl innerhalb eines benutzergenerierten Ereignishandlers wie [`click`](/de/docs/Web/API/Element/click_event) oder [`keypress`](/de/docs/Web/API/Element/keypress_event) verwenden.

Betrachten Sie HTML, das so etwas wie dies enthält:

```html
<textarea id="output"></textarea> <button id="paste">Paste</button>
```

Um den Inhalt des {{HTMLElement("textarea")}}-Elements mit der ID `"output"` aus der Zwischenablage zu setzen, wenn der Benutzer den `"paste"`-{{HTMLElement("button")}} drückt, können Sie einen Code wie diesen verwenden:

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

Firefox unterstützt die Berechtigung `"clipboardRead"` [permission](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) ab Version 54, unterstützt jedoch nur das Einfügen in Elemente im [content editable mode](/de/docs/Web/HTML/Global_attributes/contenteditable), was für Inhaltsskripte nur mit einem {{HTMLElement("textarea")}} funktioniert. Für Hintergrundskripte kann jedes Element in den content editable mode gesetzt werden.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Clipboard API](/de/docs/Web/API/Clipboard_API)
- [Permissions API](/de/docs/Web/API/Permissions_API)
- [Inhalte bearbeitbar machen](/de/docs/Web/HTML/Global_attributes#contenteditable)
