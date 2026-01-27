---
title: Arbeiten mit der Zwischenablage
slug: Mozilla/Add-ons/WebExtensions/Interact_with_the_clipboard
l10n:
  sourceCommit: bdb21cdfa9a7dc7c65222d2219aa2d96543d8a2e
---

Sie arbeiten in Erweiterungen mit der Zwischenablage mithilfe der Web API [`navigator.clipboard`](/de/docs/Web/API/Clipboard) Methode und den Erweiterungsberechtigungen `"clipboardRead"` oder `"clipboardWrite"`. [`navigator.clipboard`](/de/docs/Web/API/Clipboard) ermöglicht es Ihrer Erweiterung, beliebige Daten aus der Zwischenablage zu lesen und darin zu schreiben.

> [!NOTE]
> Die Web API Methode [`document.execCommand`](/de/docs/Web/API/Document/execCommand) wurde verwendet, um Funktionen für die Zwischenablage bereitzustellen. Jedoch sind [`document.execCommand(&#34;copy&#34;)`](/de/docs/Web/API/Document/execCommand), [`document.execCommand(&#34;cut&#34;)`](/de/docs/Web/API/Document/execCommand) und [`document.execCommand(&#34;paste&#34;)`](/de/docs/Web/API/Document/execCommand) veraltet und es wird nicht mehr garantiert, dass sie funktionieren oder in einem Browser verfügbar sind. Diese Funktionen sind in diesem Artikel als historischer Verweis dokumentiert.

Die [`navigator.clipboard`](/de/docs/Web/API/Clipboard) API stellt Methoden bereit für:

- Textinhalte mit [`navigator.clipboard.readText()`](/de/docs/Web/API/Clipboard/readText) und [`navigator.clipboard.writeText()`](/de/docs/Web/API/Clipboard/writeText).
- Bilder, Rich Text, HTML und andere umfangreiche Inhalte mit [`navigator.clipboard.read()`](/de/docs/Web/API/Clipboard/read) und [`navigator.clipboard.write()`](/de/docs/Web/API/Clipboard/write).

> [!NOTE]
> Die Schreib- und Lesemethoden der Clipboard API sind nur in [sicheren Kontexten](/de/docs/Web/Security/Defenses/Secure_Contexts) verfügbar. Ihre Erweiterung kann sie nicht aus einem Inhaltsskript verwenden, das auf `http:`-Seiten läuft; sie können nur von `https:`-Seiten aus verwendet werden.

## Schreiben in die Zwischenablage

Die Methoden der Clipboard API [`navigator.clipboard.write()`](/de/docs/Web/API/Clipboard/write) und [`navigator.clipboard.writeText()`](/de/docs/Web/API/Clipboard/writeText) schreiben beliebige Inhalte in die Zwischenablage. Die Methoden sind in einem sicheren Kontext verfügbar, funktionieren jedoch nur, nachdem der Benutzer der Erweiterung eine {{Glossary("Transient_Activation", "transiente Aktivierung")}} durchgeführt hat. Mit der Berechtigung [`"clipboardWrite"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#clipboardwrite) ist die transiente Aktivierung jedoch nicht erforderlich.

> [!NOTE]
> In Firefox und Chrome ermöglicht die Berechtigung `"clipboardWrite"`, aus allen Erweiterungskontexten und Inhaltsskripten in die Zwischenablage zu schreiben. In Safari wird die Berechtigung `"clipboardWrite"` nur in Erweiterungskontexten (nicht in Inhaltsskripten) unterstützt.

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
> [`document.execCommand(&#34;copy&#34;)`](/de/docs/Web/API/Document/execCommand) und [`document.execCommand(&#34;cut&#34;)`](/de/docs/Web/API/Document/execCommand) sind veraltet und es wird nicht mehr garantiert, dass sie funktionieren oder in einem Browser verfügbar sind.

Die Befehle `"cut"` und `"copy"` der [`document.execCommand()`](/de/docs/Web/API/Document/execCommand) Methode werden verwendet, um den Inhalt der Zwischenablage mit dem ausgewählten Material zu ersetzen. Erweiterungen können diese Befehle ohne spezielle Berechtigungen in kurzlebigen Ereignis-Handlern verwenden, die durch Benutzeraktionen ausgelöst wurden (zum Beispiel ein Klick-Handler).

Angenommen, Sie haben ein Popup, das dieses HTML enthält:

```html
<input id="input" type="text" /> <button id="copy">Copy</button>
```

Um die `"copy"`-Schaltfläche den Inhalt des {{HTMLElement("input")}}-Elements kopieren zu lassen, können Sie einen Code wie diesen verwenden:

```js
function copy() {
  let copyText = document.querySelector("#input");
  copyText.select();
  document.execCommand("copy");
}

document.querySelector("#copy").addEventListener("click", copy);
```

Da sich der `execCommand()`-Aufruf innerhalb eines Klickereignis-Handlers befindet, benötigt Ihre Erweiterung keine speziellen Berechtigungen.

Betrachten Sie jedoch das Beispiel einer Erweiterung, die das Kopieren von einem Alarm auslöst:

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

Abhängig vom Browser funktioniert dies möglicherweise nicht. In Firefox funktioniert es nicht und Sie sehen eine Nachricht wie diese in der Konsole:

`document.execCommand('cut'/'copy') was denied because it was not called from inside a short running user-generated event handler.`

Um diesen Anwendungsfall zu ermöglichen, muss Ihre Erweiterung die Berechtigung `"clipboardWrite"` [anfordern](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions): `"clipboardWrite"` ermöglicht es Ihrer Erweiterung, außerhalb eines kurzlebigen Ereignis-Handlers für eine Benutzeraktion in die Zwischenablage zu schreiben.

> [!NOTE]
> [`document.execCommand()`](/de/docs/Web/API/Document/execCommand) funktioniert nicht bei Eingabefeldern mit `type="hidden"`, mit dem HTML5-Attribut `"hidden"` oder mit einer passenden CSS-Regel, die `"display: none;"` verwendet. Um einer `span`, `div` oder `p` Tag eine "In Zwischenablage kopieren"-Schaltfläche hinzuzufügen, müssen Sie einen Workaround verwenden, beispielsweise das Setzen der Position des Eingabefelds auf absolut und es außerhalb des Ansichtsfensters zu verschieben.

## Lesen aus der Zwischenablage

Die Methoden der Clipboard API [`navigator.clipboard.read()`](/de/docs/Web/API/Clipboard/read) und [`navigator.clipboard.readText()`](/de/docs/Web/API/Clipboard/readText) lesen beliebigen Text oder binäre Daten aus der Zwischenablage. Diese Methoden ermöglichen es Erweiterungen, auf Daten in der Zwischenablage zuzugreifen, ohne sie in ein bearbeitbares Element einzufügen.

Die Methoden sind in einem sicheren Kontext verfügbar, funktionieren jedoch nur nach einer {{Glossary("Transient_Activation", "transienten Aktivierung")}} des Benutzers der Erweiterung und einem Klick auf eine Einfügeaufforderung in einem flüchtigen Kontextmenü. Mit der Berechtigung [`"clipboardRead"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#clipboardRead) kann Ihre Erweiterung jedoch ohne Benutzerbestätigung oder transiente Aktivierung aus der Zwischenablage lesen.

> [!NOTE]
> In Firefox und Chrome ermöglicht die Berechtigung `"clipboardRead"`, aus allen Erweiterungskontexten und Inhaltsskripten in die Zwischenablage zu schreiben. Safari unterstützt die Berechtigung `"clipboardRead"` nicht.

Dieses Code-Snippet ruft den Text aus der Zwischenablage ab und ersetzt den Inhalt des Elements mit der ID `"outbox"` durch diesen Text.

```js
navigator.clipboard
  .readText()
  .then((clipText) => (document.getElementById("outbox").innerText = clipText));
```

### Verwendung von execCommand()

> [!NOTE]
> [`document.execCommand(&#34;paste&#34;)`](/de/docs/Web/API/Document/execCommand) ist veraltet und es wird nicht mehr garantiert, dass es funktioniert oder in einem Browser verfügbar ist.

Um [`document.execCommand(&#34;paste&#34;)`](/de/docs/Web/API/Document/execCommand) zu verwenden, benötigt Ihre Erweiterung die Berechtigung `"clipboardRead"` [anfordern](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions). Diese Anforderung besteht selbst dann, wenn Sie den `"paste"` Befehl innerhalb eines benutzergenerierten Ereignis-Handlers, wie [`click`](/de/docs/Web/API/Element/click_event) oder [`keypress`](/de/docs/Web/API/Element/keypress_event), verwenden.

Betrachten Sie HTML, das Folgendes enthält:

```html
<textarea id="output"></textarea> <button id="paste">Paste</button>
```

Um den Inhalt des {{HTMLElement("textarea")}} Elements mit der ID `"output"` aus der Zwischenablage zu setzen, wenn der Benutzer auf die `"paste"` {{HTMLElement("button")}} klickt, können Sie folgenden Code verwenden:

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

- Chrome stellt `navigator.clipboard` nicht für Erweiterungs-Service-Worker zur Verfügung, und Offscreen-Dokumente können nicht auf `navigator.clipboard` zugreifen, aufgrund der Fokusanforderungen der API für Dokumente. Daher müssen Chrome-Erweiterungen die veralteten `document.execCommand()` APIs in einem Offscreen-Dokument verwenden oder `navigator.clipboard` in einem anderen Kontext, wie einem Inhaltsskript oder einer Erweiterungsseite, verwenden.
  Um Seitenskripte ohne Benutzerinteraktion in die Zwischenablage schreiben zu lassen, muss die Berechtigung `"clipboard-write"` mithilfe der Web API [`navigator.permissions`](/de/docs/Web/API/Permissions) angefordert werden. Ihre Erweiterung kann diese Berechtigung mit [`navigator.permissions.query()`](/de/docs/Web/API/Permissions/query) prüfen:

  ```js
  navigator.permissions.query({ name: "clipboard-write" }).then((result) => {
    if (result.state === "granted" || result.state === "prompt") {
      /* write to the clipboard now */
    }
  });
  ```

  > [!NOTE]
  > Die Berechtigung `clipboard-write` wird in Firefox und Safari nicht unterstützt.

In Firefox:

- Die Verfügbarkeit der Clipboard API Lese-Methoden bei der Antwort des Benutzers auf eine Einfügeaufforderung wurde für Webseiten in Firefox 127 und für Erweiterungen in Firefox 147 eingeführt. Zuvor waren die Methoden nur verfügbar, wenn die Berechtigung `"clipboardRead"` gesetzt war.

In Safari:

- Die Berechtigung `"clipboardWrite"` wird nur in Erweiterungskontexten (nicht in Inhaltsskripten) unterstützt.
- Die Berechtigung `"clipboardRead"` wird nicht unterstützt.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Clipboard API](/de/docs/Web/API/Clipboard_API)
- [Permissions API](/de/docs/Web/API/Permissions_API)
- [Make content editable](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable)
