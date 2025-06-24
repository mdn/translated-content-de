---
title: Interaktion mit der Zwischenablage
slug: Mozilla/Add-ons/WebExtensions/Interact_with_the_clipboard
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{AddonSidebar}}

Die Arbeit mit der Zwischenablage in Erweiterungen wechselt von der Web-API-Methode [`document.execCommand`](/de/docs/Web/API/Document/execCommand) (die veraltet ist) zur Methode [`navigator.clipboard`](/de/docs/Web/API/Clipboard).

> [!NOTE]
> Die [`navigator.clipboard`](/de/docs/Web/API/Clipboard)-API ist eine neue Ergänzung zur Spezifikation und möglicherweise nicht vollständig in allen Browsern implementiert. Dieser Artikel beschreibt einige Einschränkungen, dennoch sollten Sie die Kompatibilitätstabellen für jede Methode überprüfen, bevor Sie sie verwenden, um sicherzustellen, dass die API Ihre Anforderungen unterstützt.

Der Unterschied zwischen den beiden APIs besteht darin, dass [`document.execCommand`](/de/docs/Web/API/Document/execCommand) ähnlich wie die Tastenkombinationen Kopieren, Ausschneiden und Einfügen arbeitet – das Daten zwischen einer Webseite und der Zwischenablage austauscht – während [`navigator.clipboard`](/de/docs/Web/API/Clipboard) beliebige Daten in die Zwischenablage schreibt und daraus liest.

[`navigator.clipboard`](/de/docs/Web/API/Clipboard) bietet separate Methoden zum Lesen oder Schreiben:

- von Textinhalten mit [`navigator.clipboard.readText()`](/de/docs/Web/API/Clipboard/readText) und [`navigator.clipboard.writeText()`](/de/docs/Web/API/Clipboard/writeText).
- von Bildern, Rich-Text, HTML und anderen reichhaltigen Inhalten mit [`navigator.clipboard.read()`](/de/docs/Web/API/Clipboard/read) und [`navigator.clipboard.write()`](/de/docs/Web/API/Clipboard/write).

Allerdings funktionieren [`navigator.clipboard.readText()`](/de/docs/Web/API/Clipboard/readText) und [`navigator.clipboard.writeText()`](/de/docs/Web/API/Clipboard/writeText) in allen Browsern, während [`navigator.clipboard.read()`](/de/docs/Web/API/Clipboard/read) und [`navigator.clipboard.write()`](/de/docs/Web/API/Clipboard/write) dies nicht tun. Beispielsweise sind in Firefox zum Zeitpunkt des Schreibens [`navigator.clipboard.read()`](/de/docs/Web/API/Clipboard/read) und [`navigator.clipboard.write()`](/de/docs/Web/API/Clipboard/write) nicht vollständig implementiert, sodass, um:

- mit Bildern zu arbeiten, verwenden Sie {{WebExtAPIRef("clipboard.setImageData","browser.clipboard.setImageData()")}}, um Bilder in die Zwischenablage zu schreiben, und [`document.execCommand("paste")`](/de/docs/Web/API/Document/execCommand), um Bilder auf einer Webseite einzufügen.
- Rich-Content (wie HTML, Rich-Text einschließlich Bilder usw.) in die Zwischenablage zu schreiben, verwenden Sie [`document.execCommand("copy")`](/de/docs/Web/API/Document/execCommand) oder [`document.execCommand("cut")`](/de/docs/Web/API/Document/execCommand). Dann entweder [`navigator.clipboard.read()`](/de/docs/Web/API/Clipboard/read) (empfohlen) oder [`document.execCommand("paste")`](/de/docs/Web/API/Document/execCommand), um den Inhalt aus der Zwischenablage zu lesen.

## In die Zwischenablage schreiben

Dieser Abschnitt beschreibt die Optionen zum Schreiben von Daten in die Zwischenablage.

### Verwenden der Clipboard-API

Die Clipboard-API schreibt beliebige Daten von Ihrer Erweiterung in die Zwischenablage. Die Verwendung der API erfordert die Berechtigung `"clipboardRead"` oder `"clipboardWrite"` in Ihrer `manifest.json`-Datei. Da die API nur für [Sichere Kontexte](/de/docs/Web/Security/Secure_Contexts) verfügbar ist, kann sie nicht von einem Inhaltsskript verwendet werden, das auf `http:`-Seiten läuft, nur auf `https:`-Seiten.

Für Seitenskripte muss die Berechtigung `"clipboard-write"` über die Web-API [`navigator.permissions`](/de/docs/Web/API/Permissions) angefordert werden. Sie können diese Berechtigung mit [`navigator.permissions.query()`](/de/docs/Web/API/Permissions/query) überprüfen:

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

Die Befehle `"cut"` und `"copy"` der Methode [`document.execCommand()`](/de/docs/Web/API/Document/execCommand) werden verwendet, um den Inhalt der Zwischenablage mit dem ausgewählten Material zu ersetzen. Diese Befehle können ohne spezielle Berechtigungen in kurzlebigen Ereignis-Handlern für eine Benutzeraktion (zum Beispiel einem Klick-Handler) verwendet werden.

Angenommen, Sie haben ein Popup, das das folgende HTML enthält:

```html
<input id="input" type="text" /> <button id="copy">Copy</button>
```

Um die Schaltfläche `"copy"` den Inhalt des {{HTMLElement("input")}}-Elements kopieren zu lassen, können Sie diesen Code verwenden:

```js
function copy() {
  let copyText = document.querySelector("#input");
  copyText.select();
  document.execCommand("copy");
}

document.querySelector("#copy").addEventListener("click", copy);
```

Da sich der `execCommand()`-Aufruf in einem Klick-Ereignis-Handler befindet, benötigen Sie keine speziellen Berechtigungen.

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

Je nach Browser funktioniert das möglicherweise nicht. In Firefox wird es nicht funktionieren, und Sie sehen eine Meldung wie diese in Ihrer Konsole:

`document.execCommand('cut'/'copy') wurde abgelehnt, da es nicht aus einem benutzergenerierten kurzlebigen Ereignis-Handler aufgerufen wurde.`

Um diesen Anwendungsfall zu ermöglichen, müssen Sie die Berechtigung `"clipboardWrite"` [anfordern](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions). Daher: `"clipboardWrite"` ermöglicht es Ihnen, außerhalb eines kurzlebigen Ereignis-Handlers für eine Benutzeraktion in die Zwischenablage zu schreiben.

> [!NOTE] > [`document.execCommand()`](/de/docs/Web/API/Document/execCommand) funktioniert nicht in Eingabefeldern des Typs `type="hidden"`, mit dem HTML5-Attribut `"hidden"`, oder in übereinstimmenden CSS-Regeln mit `"display: none;"`. Um also eine "In die Zwischenablage kopieren" Schaltfläche zu einem `span`, `div` oder `p` Tag hinzuzufügen, müssen Sie einen Workaround verwenden, wie das Setzen der Position des Eingabefelds auf absolut und das Verschieben aus dem Ansichtsbereich.

### Browserspezifische Überlegungen

Die Zwischenablage und andere betroffene APIs entwickeln sich schnell weiter, daher gibt es Unterschiede zwischen den Browsern, wie sie funktionieren.

In Chrome:

- Sie benötigen nicht `"clipboardWrite"`, selbst wenn Sie außerhalb eines benutzergenerierten Ereignis-Handlers in die Zwischenablage schreiben.

In Firefox:

- [`navigator.clipboard.write()`](/de/docs/Web/API/Clipboard/write) wird nicht unterstützt.

Siehe die [Browser-Kompatibilitäts-Tabellen](#browser-kompatibilität) für weitere Informationen.

## Aus der Zwischenablage lesen

Dieser Abschnitt beschreibt die Optionen zum Lesen oder Einfügen von Daten aus der Zwischenablage.

### Verwenden der Clipboard-API

Die Methoden [`navigator.clipboard.readText()`](/de/docs/Web/API/Clipboard/readText) und [`navigator.clipboard.read()`](/de/docs/Web/API/Clipboard/read) der Clipboard-API ermöglichen es Ihnen, beliebigen Text oder Binärdaten aus der Zwischenablage in [sicheren Kontexten](/de/docs/Web/Security/Secure_Contexts) zu lesen. Dadurch können Sie auf die Daten in der Zwischenablage zugreifen, ohne sie in ein editierbares Element einzufügen.

Sobald Sie die Berechtigung `"clipboard-read"` von der [Berechtigungs-API](/de/docs/Web/API/Permissions_API) haben, können Sie problemlos aus der Zwischenablage lesen. Zum Beispiel wird in diesem Code-Snippet der Text aus der Zwischenablage abgerufen und der Inhalt des Elements mit der ID `"outbox"` durch diesen Text ersetzt.

```js
navigator.clipboard
  .readText()
  .then((clipText) => (document.getElementById("outbox").innerText = clipText));
```

### Verwenden von execCommand()

Um [`document.execCommand("paste")`](/de/docs/Web/API/Document/execCommand) zu verwenden, benötigt Ihre Erweiterung die Berechtigung `"clipboardRead"` [anfordern](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions). Dies gilt auch, wenn Sie den `"paste"`-Befehl innerhalb eines benutzergenerierten Ereignis-Handlers verwenden, wie zum Beispiel [`click`](/de/docs/Web/API/Element/click_event) oder [`keypress`](/de/docs/Web/API/Element/keypress_event).

Berücksichtigen Sie HTML, das etwa Folgendes enthält:

```html
<textarea id="output"></textarea> <button id="paste">Paste</button>
```

Um den Inhalt des {{HTMLElement("textarea")}}-Elements mit der ID `"output"` aus der Zwischenablage zu setzen, wenn der Benutzer auf den `"paste"`-{{HTMLElement("button")}} klickt, können Sie folgenden Code verwenden:

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

Firefox unterstützt die Berechtigung `"clipboardRead"` [Permissions](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) ab Version 54, unterstützt jedoch nur das Einfügen in Elemente im [content editable mode](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable), was für Inhaltsskripte nur mit einem {{HTMLElement("textarea")}} funktioniert. Für Hintergrundskripte kann jedes Element in den content editable mode versetzt werden.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Clipboard-API](/de/docs/Web/API/Clipboard_API)
- [Berechtigungs-API](/de/docs/Web/API/Permissions_API)
- [Inhalt editierbar machen](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable)
