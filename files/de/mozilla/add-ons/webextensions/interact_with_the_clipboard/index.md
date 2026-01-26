---
title: Interaktion mit der Zwischenablage
slug: Mozilla/Add-ons/WebExtensions/Interact_with_the_clipboard
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

Die Arbeit mit der Zwischenablage in Erweiterungen verlagert sich von der Web-API-Methode [`document.execCommand`](/de/docs/Web/API/Document/execCommand) (die veraltet ist) zur Methode [`navigator.clipboard`](/de/docs/Web/API/Clipboard).

> [!NOTE]
> Die [`navigator.clipboard`](/de/docs/Web/API/Clipboard) API ist eine neuere Ergänzung zur Spezifikation und möglicherweise nicht in allen Browsern vollständig implementiert. Dieser Artikel beschreibt einige Einschränkungen. Überprüfen Sie jedoch die Kompatibilitätstabellen für jede Methode, bevor Sie sie nutzen, um sicherzustellen, dass die API Ihre Anforderungen unterstützt.

Der Unterschied zwischen den beiden APIs besteht darin, dass [`document.execCommand`](/de/docs/Web/API/Document/execCommand) analog zu den Tastaturaktionen Kopieren, Ausschneiden und Einfügen - dem Austausch von Daten zwischen einer Webseite und der Zwischenablage - ist, während [`navigator.clipboard`](/de/docs/Web/API/Clipboard) beliebige Daten zur und von der Zwischenablage schreibt und liest.

[`navigator.clipboard`](/de/docs/Web/API/Clipboard) bietet separate Methoden zum Lesen oder Schreiben von:

- Textinhalten, mit [`navigator.clipboard.readText()`](/de/docs/Web/API/Clipboard/readText) und [`navigator.clipboard.writeText()`](/de/docs/Web/API/Clipboard/writeText).
- Bildern, Rich-Text, HTML und anderen Rich-Inhalten, mit [`navigator.clipboard.read()`](/de/docs/Web/API/Clipboard/read) und [`navigator.clipboard.write()`](/de/docs/Web/API/Clipboard/write).

Allerdings funktionieren [`navigator.clipboard.readText()`](/de/docs/Web/API/Clipboard/readText) und [`navigator.clipboard.writeText()`](/de/docs/Web/API/Clipboard/writeText) in allen Browsern, [`navigator.clipboard.read()`](/de/docs/Web/API/Clipboard/read) und [`navigator.clipboard.write()`](/de/docs/Web/API/Clipboard/write) jedoch nicht. Beispielsweise sind [`navigator.clipboard.read()`](/de/docs/Web/API/Clipboard/read) und [`navigator.clipboard.write()`](/de/docs/Web/API/Clipboard/write) zum Zeitpunkt des Schreibens in Firefox nicht vollständig implementiert, sodass z.B.:

- um mit Bildern zu arbeiten, verwenden Sie {{WebExtAPIRef("clipboard.setImageData","browser.clipboard.setImageData()")}}, um Bilder in die Zwischenablage zu schreiben, und [`document.execCommand(&#34;paste&#34;)`](/de/docs/Web/API/Document/execCommand), um Bilder auf eine Webseite zu kopieren.
- um Rich-Inhalte (wie HTML, Rich-Text einschließlich Bilder usw.) in die Zwischenablage zu schreiben, verwenden Sie [`document.execCommand(&#34;copy&#34;)`](/de/docs/Web/API/Document/execCommand) oder [`document.execCommand(&#34;cut&#34;)`](/de/docs/Web/API/Document/execCommand). Dann entweder [`navigator.clipboard.read()`](/de/docs/Web/API/Clipboard/read) (empfohlen) oder [`document.execCommand(&#34;paste&#34;)`](/de/docs/Web/API/Document/execCommand), um den Inhalt aus der Zwischenablage zu lesen.

## Schreiben in die Zwischenablage

Dieser Abschnitt beschreibt die Möglichkeiten, Daten in die Zwischenablage zu schreiben.

### Verwendung der Clipboard API

Die Clipboard API schreibt beliebige Daten aus Ihrer Erweiterung in die Zwischenablage. Die Verwendung der API erfordert die Berechtigung `"clipboardRead"` oder `"clipboardWrite"` in Ihrer `manifest.json`-Datei. Da die API nur in [sicheren Kontexten](/de/docs/Web/Security/Defenses/Secure_Contexts) verfügbar ist, kann sie nicht von einem in `http:`-Seiten laufenden Inhalts-Skript, sondern nur von `https:`-Seiten verwendet werden.

Für Seiten-Skripte muss die Berechtigung `"clipboard-write"` mithilfe der Web-API [`navigator.permissions`](/de/docs/Web/API/Permissions) angefordert werden. Sie können diese Berechtigung mit [`navigator.permissions.query()`](/de/docs/Web/API/Permissions/query) überprüfen:

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

Die `"cut"`- und `"copy"`-Befehle der Methode [`document.execCommand()`](/de/docs/Web/API/Document/execCommand) werden verwendet, um den Inhalt der Zwischenablage mit dem ausgewählten Material zu ersetzen. Diese Befehle können ohne besondere Berechtigung in kurzlebigen Ereignis-Handlern für eine Benutzeraktion (z. B. ein Klick-Handler) verwendet werden.

Angenommen, Sie haben ein Popup, das das folgende HTML enthält:

```html
<input id="input" type="text" /> <button id="copy">Copy</button>
```

Um den `"copy"`-Button so einzustellen, dass er den Inhalt des {{HTMLElement("input")}}-Elements kopiert, können Sie folgenden Code verwenden:

```js
function copy() {
  let copyText = document.querySelector("#input");
  copyText.select();
  document.execCommand("copy");
}

document.querySelector("#copy").addEventListener("click", copy);
```

Da der `execCommand()`-Aufruf innerhalb eines Klick-Ereignis-Handlers liegt, sind keine speziellen Berechtigungen erforderlich.

Angenommen, Sie möchten stattdessen die Kopie von einem Alarm auslösen:

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

Je nach Browser funktioniert dies möglicherweise nicht. In Firefox wird es nicht funktionieren und Sie sehen eine Meldung wie diese in Ihrer Konsole:

`document.execCommand('cut'/'copy') wurde abgelehnt, weil es nicht innerhalb eines kurzlebigen, benutzergenerierten Ereignis-Handlers aufgerufen wurde.`

Um diesen Anwendungsfall zu ermöglichen, müssen Sie die Berechtigung `"clipboardWrite"` [anfordern](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions). Also: `"clipboardWrite"` ermöglicht es Ihnen, außerhalb eines kurzlebigen Ereignis-Handlers für eine Benutzeraktion in die Zwischenablage zu schreiben.

> [!NOTE]
> [`document.execCommand()`](/de/docs/Web/API/Document/execCommand) funktioniert nicht in Eingabefeldern vom Typ `type="hidden"`, mit dem HTML5-Attribut `"hidden"` oder bei übereinstimmenden CSS-Regeln, die `"display: none;"` verwenden. Um also einen "Kopieren in Zwischenablage"-Button zu einem `span`-, `div`- oder `p`-Tag hinzuzufügen, müssen Sie einen Workaround nutzen, z.B. das Positionieren des Eingabefelds auf absolut setzen und es aus dem sichtbaren Bereich verschieben.

### Browserspezifische Überlegungen

Die Zwischenablage und andere beteiligte APIs entwickeln sich rasch weiter, sodass es zwischen den Browsern Unterschiede gibt, wie sie funktionieren.

In Chrome:

- Sie benötigen nicht `"clipboardWrite"`, selbst um außerhalb eines benutzergenerierten Ereignis-Handlers in die Zwischenablage zu schreiben.

In Firefox:

- [`navigator.clipboard.write()`](/de/docs/Web/API/Clipboard/write) wird nicht unterstützt.

Siehe die [Browser-Kompatibilitätstabelle](#browser-kompatibilität) für weitere Informationen.

## Lesen aus der Zwischenablage

Dieser Abschnitt beschreibt die Möglichkeiten, Daten aus der Zwischenablage zu lesen oder einzufügen.

### Verwendung der Clipboard API

Die Methoden [`navigator.clipboard.readText()`](/de/docs/Web/API/Clipboard/readText) und [`navigator.clipboard.read()`](/de/docs/Web/API/Clipboard/read) der Clipboard API erlauben Ihnen das Lesen von beliebigem Text oder Binärdaten aus der Zwischenablage in [sicheren Kontexten](/de/docs/Web/Security/Defenses/Secure_Contexts). Dies ermöglicht den Zugriff auf Daten in der Zwischenablage, ohne sie in ein bearbeitbares Element einzufügen.

Sobald Sie die Berechtigung `"clipboard-read"` von der [Permissions API](/de/docs/Web/API/Permissions_API) haben, können Sie problemlos aus der Zwischenablage lesen. Zum Beispiel holt dieses Codesnippet den Text aus der Zwischenablage und ersetzt den Inhalt des Elements mit der ID `"outbox"` durch diesen Text.

```js
navigator.clipboard
  .readText()
  .then((clipText) => (document.getElementById("outbox").innerText = clipText));
```

### Verwendung von execCommand()

Um [`document.execCommand(&#34;paste&#34;)`](/de/docs/Web/API/Document/execCommand) zu verwenden, benötigt Ihre Erweiterung die Berechtigung `"clipboardRead"` [anfordern](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions). Dies ist auch der Fall, wenn Sie den `"paste"`-Befehl innerhalb eines benutzergenerierten Ereignis-Handlers wie [`click`](/de/docs/Web/API/Element/click_event) oder [`keypress`](/de/docs/Web/API/Element/keypress_event) verwenden.

Betrachten Sie HTML, das in etwa so aussieht:

```html
<textarea id="output"></textarea> <button id="paste">Paste</button>
```

Um den Inhalt des {{HTMLElement("textarea")}}-Elements mit der ID `"output"` aus der Zwischenablage zu setzen, wenn der Benutzer den `"paste"` {{HTMLElement("button")}} klickt, können Sie folgenden Code verwenden:

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

Firefox unterstützt die Berechtigung `"clipboardRead"` [anfordern](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) ab Version 54, unterstützte jedoch nur das Einfügen in Elemente im [inhaltlich bearbeitbaren Modus](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable), was für Inhalts-Skripte nur mit einem {{HTMLElement("textarea")}} funktioniert. Für Hintergrund-Skripte kann jedes Element in den inhaltlich bearbeitbaren Modus versetzt werden.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Clipboard API](/de/docs/Web/API/Clipboard_API)
- [Permissions API](/de/docs/Web/API/Permissions_API)
- [Inhalte bearbeitbar machen](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable)
