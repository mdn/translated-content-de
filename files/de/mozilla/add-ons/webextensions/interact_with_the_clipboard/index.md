---
title: Mit der Zwischenablage interagieren
slug: Mozilla/Add-ons/WebExtensions/Interact_with_the_clipboard
l10n:
  sourceCommit: d2635245ab110f84ef26cf0946d84478e597a42d
---

Sie arbeiten in Erweiterungen mit der Zwischenablage unter Verwendung der Web-API-Methode [`navigator.clipboard`](/de/docs/Web/API/Clipboard) und der Erweiterungsberechtigungen `"clipboardRead"` oder `"clipboardWrite"`. [`navigator.clipboard`](/de/docs/Web/API/Clipboard) ermöglicht Ihrer Erweiterung, beliebige Daten aus der Zwischenablage zu lesen und in sie zu schreiben.

> [!NOTE]
> Die Web-API-Methode [`document.execCommand`](/de/docs/Web/API/Document/execCommand) wurde verwendet, um Zwischenablagenfunktionen bereitzustellen. Allerdings sind [`document.execCommand(&#34;copy&#34;)`](/de/docs/Web/API/Document/execCommand), [`document.execCommand(&#34;cut&#34;)`](/de/docs/Web/API/Document/execCommand) und [`document.execCommand(&#34;paste&#34;)`](/de/docs/Web/API/Document/execCommand) veraltet, und es wird nicht mehr garantiert, dass sie in irgendeinem Browser funktionieren oder verfügbar sind. Diese Funktionen werden in diesem Artikel aus historischen Gründen dokumentiert.

Die API [`navigator.clipboard`](/de/docs/Web/API/Clipboard) bietet Methoden für:

- Textinhalte unter Verwendung von [`navigator.clipboard.readText()`](/de/docs/Web/API/Clipboard/readText) und [`navigator.clipboard.writeText()`](/de/docs/Web/API/Clipboard/writeText).
- Bilder, Rich Text, HTML und andere umfangreiche Inhalte unter Verwendung von [`navigator.clipboard.read()`](/de/docs/Web/API/Clipboard/read) und [`navigator.clipboard.write()`](/de/docs/Web/API/Clipboard/write).

> [!NOTE]
> Die Schreib- und Lesemethoden der Clipboard API sind nur in [sicheren Kontexten](/de/docs/Web/Security/Defenses/Secure_Contexts) verfügbar. Ihre Erweiterung kann sie nicht aus einem Content-Script verwenden, das auf `http:`-Seiten ausgeführt wird; sie können nur von `https:`-Seiten aus verwendet werden.

## In die Zwischenablage schreiben

Die Clipboard-API-Methoden [`navigator.clipboard.write()`](/de/docs/Web/API/Clipboard/write) und [`navigator.clipboard.writeText()`](/de/docs/Web/API/Clipboard/writeText) schreiben beliebige Inhalte in die Zwischenablage. Die Methoden sind in einem sicheren Kontext verfügbar, funktionieren jedoch nur, nachdem der Benutzer der Erweiterung eine {{Glossary("Transient_Activation", "transiente Aktivierung")}} durchgeführt hat. Mit der [Berechtigung `"clipboardWrite"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#clipboardwrite) ist jedoch keine transiente Aktivierung erforderlich.

> [!NOTE]
> In Firefox und Chrome ermöglicht die Berechtigung `"clipboardWrite"` das Schreiben in die Zwischenablage aus allen Erweiterungskontexten und Content-Scripts. In Safari wird die Berechtigung `"clipboardWrite"` nur in Erweiterungskontexten unterstützt (nicht in Content-Scripts).

Diese Funktion nimmt einen String entgegen und schreibt ihn in die Zwischenablage:

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

### execCommand() verwenden

> [!NOTE]
> [`document.execCommand(&#34;copy&#34;)`](/de/docs/Web/API/Document/execCommand) und [`document.execCommand(&#34;cut&#34;)`](/de/docs/Web/API/Document/execCommand) sind veraltet, und es wird nicht mehr garantiert, dass sie in irgendeinem Browser funktionieren oder verfügbar sind.

Die Befehle `"cut"` und `"copy"` der Methode [`document.execCommand()`](/de/docs/Web/API/Document/execCommand) werden verwendet, um den Inhalt der Zwischenablage durch das ausgewählte Material zu ersetzen. Erweiterungen können diese Befehle ohne besondere Berechtigung in kurzlebigen Event-Handlern verwenden, die durch Benutzeraktionen ausgelöst werden (beispielsweise ein Click-Handler).

Nehmen wir beispielsweise an, Sie haben ein Popup, das dieses HTML enthält:

```html
<input id="input" type="text" /> <button id="copy">Copy</button>
```

Um die Schaltfläche `"copy"` den Inhalt des {{HTMLElement("input")}}-Elements kopieren zu lassen, können Sie folgenden Code verwenden:

```js
function copy() {
  let copyText = document.querySelector("#input");
  copyText.select();
  document.execCommand("copy");
}

document.querySelector("#copy").addEventListener("click", copy);
```

Da sich der Aufruf von `execCommand()` innerhalb eines Click-Event-Handlers befindet, benötigt Ihre Erweiterung keine besonderen Berechtigungen.

Betrachten Sie jedoch das Beispiel, bei dem Ihre Erweiterung das Kopieren durch einen Alarm auslöst:

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

Abhängig vom Browser funktioniert dies möglicherweise nicht. In Firefox funktioniert es nicht, und in der Konsole wird eine Meldung wie diese angezeigt:

`document.execCommand('cut'/'copy') was denied because it was not called from inside a short running user-generated event handler.`

Um diesen Anwendungsfall zu ermöglichen, muss Ihre Erweiterung die [Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) `"clipboardWrite"` anfordern: `"clipboardWrite"` ermöglicht Ihrer Erweiterung, außerhalb eines kurzlebigen Event-Handlers für eine Benutzeraktion in die Zwischenablage zu schreiben.

> [!NOTE]
> [`document.execCommand()`](/de/docs/Web/API/Document/execCommand) funktioniert nicht bei Eingabefeldern vom Typ `type="hidden"`, mit dem HTML5-Attribut `"hidden"` oder einer passenden CSS-Regel mit `"display: none;"`. Um einer `span`-, `div`- oder `p`-Markierung eine Schaltfläche zum Kopieren in die Zwischenablage hinzuzufügen, müssen Sie eine Umgehungslösung verwenden, beispielsweise indem Sie die Position der Eingabe auf absolut setzen und sie aus dem Viewport verschieben.

## Aus der Zwischenablage lesen

Die Clipboard-API-Methoden [`navigator.clipboard.read()`](/de/docs/Web/API/Clipboard/read) und [`navigator.clipboard.readText()`](/de/docs/Web/API/Clipboard/readText) lesen beliebigen Text oder binäre Daten aus der Zwischenablage. Diese Methoden ermöglichen Erweiterungen den Zugriff auf Daten in der Zwischenablage, ohne sie in ein bearbeitbares Element einzufügen.

Die Methoden sind in einem sicheren Kontext verfügbar, funktionieren jedoch nur, nachdem der Benutzer der Erweiterung eine {{Glossary("Transient_Activation", "transiente Aktivierung")}} durchgeführt und in einem temporären Kontextmenü auf eine Einfügeaufforderung geklickt hat. Mit der [Berechtigung `"clipboardRead"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#clipboardread) kann Ihre Erweiterung jedoch ohne Benutzerbestätigung oder transiente Aktivierung aus der Zwischenablage lesen.

> [!NOTE]
> In Firefox und Chrome ermöglicht die Berechtigung `"clipboardRead"` das Schreiben in die Zwischenablage aus allen Erweiterungskontexten und Content-Scripts. Safari unterstützt die Berechtigung `"clipboardRead"` nicht.

Dieser Codeausschnitt ruft den Text aus der Zwischenablage ab und ersetzt den Inhalt des Elements mit der ID `"outbox"` durch diesen Text.

```js
navigator.clipboard
  .readText()
  .then((clipText) => (document.getElementById("outbox").innerText = clipText));
```

### execCommand() verwenden

> [!NOTE]
> [`document.execCommand(&#34;paste&#34;)`](/de/docs/Web/API/Document/execCommand) ist veraltet, und es wird nicht mehr garantiert, dass es in irgendeinem Browser funktioniert oder verfügbar ist.

Um [`document.execCommand(&#34;paste&#34;)`](/de/docs/Web/API/Document/execCommand) zu verwenden, benötigt Ihre Erweiterung die [Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) `"clipboardRead"`. Diese Anforderung besteht auch dann, wenn Sie den Befehl `"paste"` innerhalb eines vom Benutzer generierten Event-Handlers verwenden, beispielsweise [`click`](/de/docs/Web/API/Element/click_event) oder [`keypress`](/de/docs/Web/API/Element/keypress_event).

Betrachten Sie HTML, das Folgendes enthält:

```html
<textarea id="output"></textarea> <button id="paste">Paste</button>
```

Um den Inhalt des {{HTMLElement("textarea")}}-Elements mit der ID `"output"` aus der Zwischenablage zu setzen, wenn der Benutzer auf die {{HTMLElement("button")}}-Schaltfläche `"paste"` klickt, können Sie folgenden Code verwenden:

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

In Chrome:

- Chrome stellt `navigator.clipboard` nicht für Erweiterungs-Service-Worker bereit, und Offscreen-Dokumente können aufgrund der Anforderungen der API an den Dokumentfokus nicht auf `navigator.clipboard` zugreifen. Daher müssen Chrome-Erweiterungen die veralteten `document.execCommand()`-APIs in einem Offscreen-Dokument verwenden oder `navigator.clipboard` in einem anderen Kontext nutzen, beispielsweise einem Content-Script oder einer Erweiterungsseite.
  Damit Seitenskripte ohne Benutzerinteraktion in die Zwischenablage schreiben können, muss die Berechtigung `"clipboard-write"` über die Web-API [`navigator.permissions`](/de/docs/Web/API/Permissions) angefordert werden. Ihre Erweiterung kann diese Berechtigung mit [`navigator.permissions.query()`](/de/docs/Web/API/Permissions/query) überprüfen:

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

- Die Verfügbarkeit der Lese-Methoden der Clipboard API nach der Reaktion des Benutzers auf eine Einfügeaufforderung wurde für Webseiten in Firefox 127 und für Erweiterungen in Firefox 147 eingeführt. Davor waren die Methoden nur verfügbar, wenn die Berechtigung `"clipboardRead"` gesetzt war.

In Safari:

- Die Berechtigung `"clipboardWrite"` wird nur in Erweiterungskontexten unterstützt (nicht in Content-Scripts).
- Die Berechtigung `"clipboardRead"` wird nicht unterstützt.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Clipboard API](/de/docs/Web/API/Clipboard_API)
- [Permissions API](/de/docs/Web/API/Permissions_API)
- [Inhalte bearbeitbar machen](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable)
