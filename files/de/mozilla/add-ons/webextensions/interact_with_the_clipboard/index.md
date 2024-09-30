---
title: Mit der Zwischenablage interagieren
slug: Mozilla/Add-ons/WebExtensions/Interact_with_the_clipboard
l10n:
  sourceCommit: 942bbbe848b4b742a689de970f697d4c5b355bde
---

{{AddonSidebar}}

Die Arbeit mit der Zwischenablage in Erweiterungen wechselt von der Web-API-Methode [`document.execCommand`](/de/docs/Web/API/Document/execCommand) (die veraltet ist) zur Methode [`navigator.clipboard`](/de/docs/Web/API/Clipboard).

> [!NOTE]
> Die [`navigator.clipboard`](/de/docs/Web/API/Clipboard) API ist eine jüngere Ergänzung zur Spezifikation und möglicherweise nicht in allen Browsern vollständig implementiert. Dieser Artikel beschreibt einige Einschränkungen, aber überprüfen Sie die Kompatibilitätstabellen für jede Methode, bevor Sie sie verwenden, um sicherzustellen, dass die API Ihre Anforderungen unterstützt.

Der Unterschied zwischen den beiden APIs ist, dass [`document.execCommand`](/de/docs/Web/API/Document/execCommand) analog zu den Tastaturaktionen Kopieren, Ausschneiden und Einfügen – Daten zwischen einer Webseite und der Zwischenablage austauschen – arbeitet, während [`navigator.clipboard`](/de/docs/Web/API/Clipboard) beliebige Daten in die und aus der Zwischenablage schreibt und liest.

[`navigator.clipboard`](/de/docs/Web/API/Clipboard) bietet separate Methoden zum Lesen oder Schreiben von:

- Textinhalten, mit [`navigator.clipboard.readText()`](/de/docs/Web/API/Clipboard/readText) und [`navigator.clipboard.writeText()`](/de/docs/Web/API/Clipboard/writeText).
- Bildern, Rich-Text, HTML und anderen reichhaltigen Inhalten, mit [`navigator.clipboard.read()`](/de/docs/Web/API/Clipboard/read) und [`navigator.clipboard.write()`](/de/docs/Web/API/Clipboard/write).

Allerdings funktionieren [`navigator.clipboard.readText()`](/de/docs/Web/API/Clipboard/readText) und [`navigator.clipboard.writeText()`](/de/docs/Web/API/Clipboard/writeText) in allen Browsern, während [`navigator.clipboard.read()`](/de/docs/Web/API/Clipboard/read) und [`navigator.clipboard.write()`](/de/docs/Web/API/Clipboard/write) dies nicht tun. Beispielsweise sind zum Zeitpunkt des Schreibens in Firefox [`navigator.clipboard.read()`](/de/docs/Web/API/Clipboard/read) und [`navigator.clipboard.write()`](/de/docs/Web/API/Clipboard/write) nicht vollständig implementiert, sodass um zu:

- mit Bildern zu arbeiten, verwenden Sie {{WebExtAPIRef("clipboard.setImageData","browser.clipboard.setImageData()")}}, um Bilder in die Zwischenablage zu schreiben, und [`document.execCommand(&#34;paste&#34;)`](/de/docs/Web/API/Document/execCommand), um Bilder in eine Webseite einzufügen.
- um reichhaltige Inhalte (wie HTML, Rich-Text einschließlich Bildern usw.) in die Zwischenablage zu schreiben, verwenden Sie [`document.execCommand(&#34;copy&#34;)`](/de/docs/Web/API/Document/execCommand) oder [`document.execCommand(&#34;cut&#34;)`](/de/docs/Web/API/Document/execCommand). Verwenden Sie dann entweder [`navigator.clipboard.read()`](/de/docs/Web/API/Clipboard/read) (empfohlen) oder [`document.execCommand(&#34;paste&#34;)`](/de/docs/Web/API/Document/execCommand), um den Inhalt aus der Zwischenablage zu lesen.

## Schreiben in die Zwischenablage

Dieser Abschnitt beschreibt die Optionen zum Schreiben von Daten in die Zwischenablage.

### Verwendung der Clipboard API

Die Clipboard API schreibt beliebige Daten aus Ihrer Erweiterung in die Zwischenablage. Die Verwendung der API erfordert die Berechtigung `"clipboardRead"` oder `"clipboardWrite"` in Ihrer `manifest.json`-Datei. Da die API nur in [sicheren Kontexten](/de/docs/Web/Security/Secure_Contexts) verfügbar ist, kann sie nicht von einem Inhalts-Skript verwendet werden, das auf `http:`-Seiten läuft, sondern nur auf `https:`-Seiten.

Für Seiten-Skripte muss die Berechtigung `"clipboard-write"` mit der Web-API [`navigator.permissions`](/de/docs/Web/API/Permissions) angefordert werden. Sie können diese Berechtigung mit [`navigator.permissions.query()`](/de/docs/Web/API/Permissions/query) überprüfen:

```js
navigator.permissions.query({ name: "clipboard-write" }).then((result) => {
  if (result.state === "granted" || result.state === "prompt") {
    /* write to the clipboard now */
  }
});
```

> [!NOTE]
> Der Name der Berechtigung `clipboard-write` wird in Firefox nicht unterstützt, sondern nur in Chromium-Browsern.

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

Die `"cut"`- und `"copy"`-Befehle der [`document.execCommand()`](/de/docs/Web/API/Document/execCommand) Methode werden verwendet, um den Inhalt der Zwischenablage mit dem ausgewählten Material zu ersetzen. Diese Befehle können ohne spezielle Berechtigungen in kurzlebigen Ereignis-Handlern für eine Benutzeraktion (z. B. einen Klick-Handler) verwendet werden.

Angenommen, Sie haben ein Popup, das das folgende HTML enthält:

```html
<input id="input" type="text" /> <button id="copy">Copy</button>
```

Um den `"copy"`-Button dazu zu bringen, den Inhalt des {{HTMLElement("input")}}-Elements zu kopieren, können Sie Code wie diesen verwenden:

```js
function copy() {
  let copyText = document.querySelector("#input");
  copyText.select();
  document.execCommand("copy");
}

document.querySelector("#copy").addEventListener("click", copy);
```

Da der `execCommand()`-Aufruf innerhalb eines Klick-Ereignis-Handlers erfolgt, benötigen Sie keine speziellen Berechtigungen.

Angenommen, stattdessen wird das Kopieren von einem Alarm ausgelöst:

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

`document.execCommand('cut'/'copy') wurde verweigert, weil es nicht innerhalb eines kurzlebigen benutzergenerierten Ereignis-Handlers aufgerufen wurde.`

Um diesen Anwendungsfall zu ermöglichen, müssen Sie die Berechtigung `"clipboardWrite"` [anfordern](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions). Also: `"clipboardWrite"` ermöglicht es Ihnen, in die Zwischenablage außerhalb eines kurzlebigen Ereignis-Handlers für eine Benutzeraktion zu schreiben.

> **Hinweis:** [`document.execCommand()`](/de/docs/Web/API/Document/execCommand) funktioniert nicht bei Eingabefeldern vom `type="hidden"`, mit dem HTML5-Attribut `"hidden"` oder mit einer beliebigen passenden CSS-Regel mit `"display: none;"`. Um also einen "In die Zwischenablage kopieren"-Button zu einem `span`, `div` oder `p`-Tag hinzuzufügen, müssen Sie einen Workaround verwenden, wie zum Beispiel die Position des Eingabefelds auf absolut zu setzen und es aus dem Ansichtsbereich zu verschieben.

### Browserspezifische Überlegungen

Die Zwischenablage und andere hier beteiligte APIs entwickeln sich schnell weiter, sodass es Unterschiede zwischen den Browsern gibt, wie sie funktionieren.

In Chrome:

- Sie benötigen `"clipboardWrite"` nicht, selbst um außerhalb eines benutzergenerierten Ereignis-Handlers in die Zwischenablage zu schreiben.

In Firefox:

- [`navigator.clipboard.write()`](/de/docs/Web/API/Clipboard/write) wird nicht unterstützt.

Weitere Informationen finden Sie in den [Browser-Kompatibilitätstabellen](#browser-kompatibilität).

## Lesen aus der Zwischenablage

Dieser Abschnitt beschreibt die Optionen, um Daten aus der Zwischenablage zu lesen oder einzufügen.

### Verwendung der Clipboard API

Die [`navigator.clipboard.readText()`](/de/docs/Web/API/Clipboard/readText) und [`navigator.clipboard.read()`](/de/docs/Web/API/Clipboard/read) Methoden der Clipboard API ermöglichen es Ihnen, beliebigen Text oder Binärdaten aus der Zwischenablage in [sicheren Kontexten](/de/docs/Web/Security/Secure_Contexts) zu lesen. Dadurch können Sie auf die Daten in der Zwischenablage zugreifen, ohne sie in ein bearbeitbares Element einzufügen.

Sobald Sie die `"clipboard-read"` Berechtigung von der [Permissions API](/de/docs/Web/API/Permissions_API) erhalten haben, können Sie einfach aus der Zwischenablage lesen. Zum Beispiel holt dieses Codesnippet den Text aus der Zwischenablage und ersetzt den Inhalt des Elements mit der ID `"outbox"` durch diesen Text.

```js
navigator.clipboard
  .readText()
  .then((clipText) => (document.getElementById("outbox").innerText = clipText));
```

### Verwendung von execCommand()

Um [`document.execCommand(&#34;paste&#34;)`](/de/docs/Web/API/Document/execCommand) zu verwenden, benötigt Ihre Erweiterung die Berechtigung `"clipboardRead"` [anfordern](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions). Dies ist auch dann der Fall, wenn Sie den `"paste"`-Befehl innerhalb eines benutzergenerierten Ereignis-Handlers, wie [`click`](/de/docs/Web/API/Element/click_event) oder [`keypress`](/de/docs/Web/API/Element/keypress_event), verwenden.

Betrachten Sie HTML, das etwas wie dieses enthält:

```html
<textarea id="output"></textarea> <button id="paste">Paste</button>
```

Um den Inhalt des {{HTMLElement("textarea")}}-Elements mit der ID `"output"` aus der Zwischenablage zu setzen, wenn der Benutzer auf den `"paste"` {{HTMLElement("button")}} klickt, können Sie Code wie diesen verwenden:

```js
function paste() {
  let pasteText = document.querySelector("#output");
  pasteText.focus();
  document.execCommand("paste");
  console.log(pasteText.textContent);
}

document.querySelector("#paste").addEventListener("click", paste);
```

### Browserspezifische Überlegungen

Firefox unterstützt die `"clipboardRead"` [Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) ab Version 54, unterstützt jedoch nur das Einfügen in Elemente im [inhalt bearbeitbaren Modus](/de/docs/Web/HTML/Global_attributes/contenteditable), was für Inhalts-Skripte nur mit einem {{HTMLElement("textarea")}} funktioniert. Für Hintergrund-Skripte kann jedes Element auf den inhalt bearbeitbaren Modus gesetzt werden.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Clipboard API](/de/docs/Web/API/Clipboard_API)
- [Permissions API](/de/docs/Web/API/Permissions_API)
- [Inhalte bearbeitbar machen](/de/docs/Web/HTML/Global_attributes#contenteditable)
