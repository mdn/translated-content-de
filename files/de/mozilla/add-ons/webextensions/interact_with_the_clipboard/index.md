---
title: Interaktion mit der Zwischenablage
slug: Mozilla/Add-ons/WebExtensions/Interact_with_the_clipboard
l10n:
  sourceCommit: 6aca3e5157dbc163fe8209d9bf8cc3f2e8ec3f9d
---

Sie arbeiten in Erweiterungen mit der Zwischenablage mithilfe der Web-API-Methode [`navigator.clipboard`](/de/docs/Web/API/Clipboard) und den Erweiterungsberechtigungen `"clipboardRead"` oder `"clipboardWrite"`. [`navigator.clipboard`](/de/docs/Web/API/Clipboard) ermöglicht es Ihrer Erweiterung, beliebige Daten von und zur Zwischenablage zu lesen und zu schreiben.

> [!NOTE]
> Die Web-API-Methode [`document.execCommand`](/de/docs/Web/API/Document/execCommand) wurde verwendet, um Zwischenablage-Funktionalität bereitzustellen. Allerdings sind [`document.execCommand(&#34;copy&#34;)`](/de/docs/Web/API/Document/execCommand), [`document.execCommand(&#34;cut&#34;)`](/de/docs/Web/API/Document/execCommand) und [`document.execCommand(&#34;paste&#34;)`](/de/docs/Web/API/Document/execCommand) veraltet und nicht mehr garantiert, dass sie funktionieren oder in irgendeinem Browser verfügbar sind. Diese Funktionen werden in diesem Artikel aus historischen Gründen dokumentiert.

Die [`navigator.clipboard`](/de/docs/Web/API/Clipboard) API bietet Methoden für:

- Textinhalte, mittels [`navigator.clipboard.readText()`](/de/docs/Web/API/Clipboard/readText) und [`navigator.clipboard.writeText()`](/de/docs/Web/API/Clipboard/writeText).
- Bilder, Rich-Text, HTML und andere Rich-Inhalte, mittels [`navigator.clipboard.read()`](/de/docs/Web/API/Clipboard/read) und [`navigator.clipboard.write()`](/de/docs/Web/API/Clipboard/write).

> [!NOTE]
> Die Schreib- und Lesemethoden der Clipboard API sind nur in [sicheren Kontexten](/de/docs/Web/Security/Defenses/Secure_Contexts) verfügbar. Ihre Erweiterung kann sie nicht aus einem Content-Skript verwenden, das auf `http:`-Seiten läuft; sie können nur von `https:`-Seiten verwendet werden.

## Schreiben in die Zwischenablage

Die Methoden [`navigator.clipboard.write()`](/de/docs/Web/API/Clipboard/write) und [`navigator.clipboard.writeText()`](/de/docs/Web/API/Clipboard/writeText) der Clipboard API schreiben beliebige Inhalte in die Zwischenablage. Die Methoden sind in einem sicheren Kontext verfügbar, funktionieren jedoch nur, nachdem der Benutzer der Erweiterung eine {{Glossary("Transient_Activation", "transiente Aktivierung")}} vorgenommen hat. Mit der Berechtigung [`"clipboardWrite"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#clipboardwrite) ist jedoch keine transiente Aktivierung erforderlich.

> [!NOTE]
> In Firefox und Chrome ermöglicht die Berechtigung `"clipboardWrite"` das Schreiben in die Zwischenablage aus allen Erweiterungskontexten und Content-Skripten. In Safari wird die Berechtigung `"clipboardWrite"` nur in Erweiterungskontexten unterstützt (nicht in Content-Skripten).

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

> [!NOTE]
> [`document.execCommand(&#34;copy&#34;)`](/de/docs/Web/API/Document/execCommand) und [`document.execCommand(&#34;cut&#34;)`](/de/docs/Web/API/Document/execCommand) sind veraltet und nicht mehr garantiert, dass sie funktionieren oder in irgendeinem Browser verfügbar sind.

Die Befehle `"cut"` und `"copy"` der Methode [`document.execCommand()`](/de/docs/Web/API/Document/execCommand) werden verwendet, um den Inhalt der Zwischenablage mit dem ausgewählten Material zu ersetzen. Erweiterungen können diese Befehle ohne spezielle Berechtigung in kurzlebigen Ereignishandlern verwenden, die durch Benutzeraktionen ausgelöst werden (zum Beispiel ein Klick-Handler).

Angenommen, Sie haben ein Popup, das dieses HTML enthält:

```html
<input id="input" type="text" /> <button id="copy">Copy</button>
```

Um die Schaltfläche `"copy"` dazu zu bringen, den Inhalt des {{HTMLElement("input")}}-Elements zu kopieren, können Sie Code wie diesen verwenden:

```js
function copy() {
  let copyText = document.querySelector("#input");
  copyText.select();
  document.execCommand("copy");
}

document.querySelector("#copy").addEventListener("click", copy);
```

Da der `execCommand()`-Aufruf innerhalb eines Klick-Ereignishandlers erfolgt, benötigt Ihre Erweiterung keine besonderen Berechtigungen.

Betrachten Sie jedoch das Beispiel, bei dem Ihre Erweiterung die Kopie von einem Alarm auslöst:

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

Je nach Browser funktioniert dies möglicherweise nicht. In Firefox funktioniert es nicht, und Sie sehen eine Meldung wie diese in der Konsole:

`document.execCommand('cut'/'copy') wurde abgelehnt, da es nicht aus einem kurzlebigen, nutzergenerierten Ereignishandler heraus aufgerufen wurde.`

Um diesen Anwendungsfall zu ermöglichen, muss Ihre Erweiterung die Berechtigung `"clipboardWrite"` [anforderung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions): `"clipboardWrite"` ermöglicht es Ihrer Erweiterung, außerhalb eines kurzlebigen Ereignishandlers für eine Benutzeraktion in die Zwischenablage zu schreiben.

> [!NOTE]
> [`document.execCommand()`](/de/docs/Web/API/Document/execCommand) funktioniert nicht bei Eingabefeldern vom `type="hidden"`, mit dem HTML5-Attribut `"hidden"` oder einer CSS-Regel, die "`display: none;`" verwendet. Um einer `span`, `div` oder `p`-Tag-Schaltfläche "in die Zwischenablage kopieren" hinzuzufügen, müssen Sie einen Workaround verwenden, wie z.B. das Setzen der Position des Eingabeobjekts auf absolut und es aus dem Viewport zu verschieben.

## Aus der Zwischenablage lesen

Die Methoden [`navigator.clipboard.read()`](/de/docs/Web/API/Clipboard/read) und [`navigator.clipboard.readText()`](/de/docs/Web/API/Clipboard/readText) der Clipboard API lesen beliebigen Text oder Binärdaten aus der Zwischenablage. Diese Methoden ermöglichen es Erweiterungen, auf Daten in der Zwischenablage zuzugreifen, ohne sie in ein bearbeitbares Element einfügen zu müssen.

Die Methoden sind in einem sicheren Kontext verfügbar, funktionieren jedoch nur, nachdem der Benutzer der Erweiterung eine {{Glossary("Transient_Activation", "transiente Aktivierung")}} vorgenommen hat und auf eine Einfügeaufforderung in einem flüchtigen Kontextmenü klickt. Mit der Berechtigung [`"clipboardRead"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#clipboardread) kann Ihre Erweiterung jedoch ohne Benutzerbestätigung oder transiente Aktivierung aus der Zwischenablage lesen.

> [!NOTE]
> In Firefox und Chrome ermöglicht die Berechtigung `"clipboardRead"` das Schreiben in die Zwischenablage aus allen Erweiterungskontexten und Content-Skripten. Safari unterstützt die Berechtigung `"clipboardRead"` nicht.

Dieser Codeausschnitt holt den Text aus der Zwischenablage und ersetzt den Inhalt des Elements mit der ID `"outbox"` durch diesen Text:

```js
navigator.clipboard
  .readText()
  .then((clipText) => (document.getElementById("outbox").innerText = clipText));
```

### Verwendung von execCommand()

> [!NOTE]
> [`document.execCommand(&#34;paste&#34;)`](/de/docs/Web/API/Document/execCommand) ist veraltet und nicht mehr garantiert, dass es funktioniert oder in irgendeinem Browser verfügbar ist.

Um [`document.execCommand(&#34;paste&#34;)`](/de/docs/Web/API/Document/execCommand) zu verwenden, benötigt Ihre Erweiterung die Berechtigung `"clipboardRead"` [/anforderung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions). Diese Anforderung besteht, auch wenn Sie den Befehl `"paste"` innerhalb eines nutzergenerierten Ereignishandlers verwenden, wie z.B. [`click`](/de/docs/Web/API/Element/click_event) oder [`keypress`](/de/docs/Web/API/Element/keypress_event).

Stellen Sie sich HTML vor, das Folgendes enthält:

```html
<textarea id="output"></textarea> <button id="paste">Paste</button>
```

Um den Inhalt des {{HTMLElement("textarea")}}-Elements mit der ID `"output"` von der Zwischenablage zu setzen, wenn der Benutzer auf die Schaltfläche `"paste"` klickt, können Sie Code wie diesen verwenden:

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

In Chrome:

- Chrome stellt `navigator.clipboard` für Erweiterungs-Service-Worker nicht bereit und Offscreen-Dokumente können wegen der Anforderungen der API an die Dokumentenfokussierung nicht auf `navigator.clipboard` zugreifen. Daher müssen Chrome-Erweiterungen entweder die veralteten `document.execCommand()`-APIs in einem Offscreen-Dokument verwenden oder `navigator.clipboard` in einem anderen Kontext, wie z.B. einem Content-Skript oder einer Erweiterungsseite, nutzen.
  Damit Seitenskripte ohne Benutzerinteraktion in die Zwischenablage schreiben können, muss die Berechtigung `"clipboard-write"` mit der Web-API [`navigator.permissions`](/de/docs/Web/API/Permissions) angefordert werden. Ihre Erweiterung kann diese Berechtigung mit [`navigator.permissions.query()`](/de/docs/Web/API/Permissions/query) überprüfen:

  ```js
  navigator.permissions.query({ name: "clipboard-write" }).then((result) => {
    if (result.state === "granted" || result.state === "prompt") {
      /* write to the clipboard now */
    }
  });
  ```

  > [!NOTE]
  > Die Berechtigung `clipboard-write` wird in Firefox oder Safari nicht unterstützt.

In Firefox:

- Die Verfügbarkeit der Lese-Methoden der Clipboard API als Reaktion des Benutzers auf eine Einfügeaufforderung wurde für Webseiten in Firefox 127 und Erweiterungen in Firefox 147 eingeführt. Zuvor waren die Methoden nur verfügbar, wenn die Berechtigung `"clipboardRead"` festgelegt war.

In Safari:

- Die Berechtigung `"clipboardWrite"` wird nur in Erweiterungskontexten unterstützt (nicht in Content-Skripten).
- Die Berechtigung `"clipboardRead"` wird nicht unterstützt.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Clipboard API](/de/docs/Web/API/Clipboard_API)
- [Permissions API](/de/docs/Web/API/Permissions_API)
- [Inhalt bearbeitbar machen](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable)
