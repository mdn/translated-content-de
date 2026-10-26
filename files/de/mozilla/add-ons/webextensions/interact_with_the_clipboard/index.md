---
title: Mit der Zwischenablage interagieren
slug: Mozilla/Add-ons/WebExtensions/Interact_with_the_clipboard
l10n:
  sourceCommit: eb2b83a4617c86cc1d59db5910806e51addcc4c6
---

In Erweiterungen arbeiten Sie mit der Zwischenablage über die Web-API [`navigator.clipboard`](/de/docs/Web/API/Clipboard) und die Erweiterungsberechtigungen `"clipboardRead"` oder `"clipboardWrite"`. Mit [`navigator.clipboard`](/de/docs/Web/API/Clipboard) kann Ihre Erweiterung beliebige Daten aus der Zwischenablage lesen und in sie schreiben.

> [!NOTE]
> Früher wurde die Web-API-Methode [`document.execCommand`](/de/docs/Web/API/Document/execCommand) für den Zugriff auf die Zwischenablage verwendet. [`document.execCommand(&#34;copy&#34;)`](/de/docs/Web/API/Document/execCommand), [`document.execCommand(&#34;cut&#34;)`](/de/docs/Web/API/Document/execCommand) und [`document.execCommand(&#34;paste&#34;)`](/de/docs/Web/API/Document/execCommand) sind jedoch veraltet. Es ist nicht mehr gewährleistet, dass sie in einem Browser funktionieren oder verfügbar sind. Diese Funktionen werden in diesem Artikel aus historischen Gründen dokumentiert.

Die API [`navigator.clipboard`](/de/docs/Web/API/Clipboard) stellt Methoden für folgende Inhalte bereit:

- Text, mit [`navigator.clipboard.readText()`](/de/docs/Web/API/Clipboard/readText) und [`navigator.clipboard.writeText()`](/de/docs/Web/API/Clipboard/writeText).
- Bilder, formatierten Text, HTML und andere komplexe Inhalte, mit [`navigator.clipboard.read()`](/de/docs/Web/API/Clipboard/read) und [`navigator.clipboard.write()`](/de/docs/Web/API/Clipboard/write).

> [!NOTE]
> Die Schreib- und Lesemethoden der Clipboard API sind nur in [sicheren Kontexten](/de/docs/Web/Security/Defenses/Secure_Contexts) verfügbar. Ihre Erweiterung kann sie nicht aus einem Content-Skript verwenden, das auf `http:`-Seiten ausgeführt wird, sondern nur auf `https:`-Seiten.

## In die Zwischenablage schreiben

Die Methoden [`navigator.clipboard.write()`](/de/docs/Web/API/Clipboard/write) und [`navigator.clipboard.writeText()`](/de/docs/Web/API/Clipboard/writeText) der Clipboard API schreiben beliebige Inhalte in die Zwischenablage. Die Methoden sind in einem sicheren Kontext verfügbar, funktionieren aber nur, nachdem ein Benutzer der Erweiterung eine {{Glossary("Transient_Activation", "transiente Aktivierung")}} ausgelöst hat. Mit der [Berechtigung `"clipboardWrite"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#clipboardwrite) ist keine transiente Aktivierung erforderlich.

> [!NOTE]
> In Firefox und Chrome ermöglicht die Berechtigung `"clipboardWrite"` das Schreiben in die Zwischenablage aus allen Erweiterungskontexten und Content-Skripten. In Safari wird die Berechtigung `"clipboardWrite"` nur in Erweiterungskontexten unterstützt, nicht in Content-Skripten.

Diese Funktion nimmt eine Zeichenfolge entgegen und schreibt sie in die Zwischenablage:

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
> [`document.execCommand(&#34;copy&#34;)`](/de/docs/Web/API/Document/execCommand) und [`document.execCommand(&#34;cut&#34;)`](/de/docs/Web/API/Document/execCommand) sind veraltet. Es ist nicht mehr gewährleistet, dass sie in einem Browser funktionieren oder verfügbar sind.

Die Befehle `"cut"` und `"copy"` der Methode [`document.execCommand()`](/de/docs/Web/API/Document/execCommand) ersetzen den Inhalt der Zwischenablage durch den ausgewählten Inhalt. Erweiterungen können diese Befehle ohne besondere Berechtigung in kurzlebigen Event-Handlern verwenden, die durch Benutzeraktionen ausgelöst werden, beispielsweise durch einen Klick.

Angenommen, Sie haben ein Popup mit folgendem HTML:

```html
<input id="input" type="text" /> <button id="copy">Copy</button>
```

Damit die Schaltfläche `"copy"` den Inhalt des Elements {{HTMLElement("input")}} kopiert, können Sie Code wie diesen verwenden:

```js
function copy() {
  let copyText = document.querySelector("#input");
  copyText.select();
  document.execCommand("copy");
}

document.querySelector("#copy").addEventListener("click", copy);
```

Da der Aufruf von `execCommand()` innerhalb eines Klick-Event-Handlers erfolgt, benötigt Ihre Erweiterung keine besonderen Berechtigungen.

Betrachten Sie dagegen ein Beispiel, in dem Ihre Erweiterung den Kopiervorgang durch einen Alarm auslöst:

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

Je nach Browser funktioniert dies möglicherweise nicht. In Firefox funktioniert es nicht, und in der Konsole erscheint eine Meldung wie diese:

`document.execCommand('cut'/'copy') was denied because it was not called from inside a short running user-generated event handler.`

Für diesen Anwendungsfall muss Ihre Erweiterung die [Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) `"clipboardWrite"` anfordern. Mit `"clipboardWrite"` kann Ihre Erweiterung auch außerhalb eines kurzlebigen Event-Handlers für eine Benutzeraktion in die Zwischenablage schreiben.

> [!NOTE]
> [`document.execCommand()`](/de/docs/Web/API/Document/execCommand) funktioniert nicht bei Eingabefeldern mit `type="hidden"`, dem HTML5-Attribut `"hidden"` oder einer passenden CSS-Regel mit `"display: none;"`. Um einem `span`-, `div`- oder `p`-Tag eine Schaltfläche zum Kopieren in die Zwischenablage hinzuzufügen, benötigen Sie eine Umgehungslösung. Sie können beispielsweise die Position des Eingabefelds auf „absolute“ setzen und es aus dem sichtbaren Bereich verschieben.

## Aus der Zwischenablage lesen

Die Methoden [`navigator.clipboard.read()`](/de/docs/Web/API/Clipboard/read) und [`navigator.clipboard.readText()`](/de/docs/Web/API/Clipboard/readText) der Clipboard API lesen beliebigen Text oder Binärdaten aus der Zwischenablage. Mit diesen Methoden können Erweiterungen auf Daten in der Zwischenablage zugreifen, ohne sie in ein bearbeitbares Element einzufügen.

Die Methoden sind in einem sicheren Kontext verfügbar, funktionieren aber nur, nachdem ein Benutzer der Erweiterung eine {{Glossary("Transient_Activation", "transiente Aktivierung")}} ausgelöst und in einem temporären Kontextmenü auf eine Einfügeaufforderung geklickt hat. Mit der [Berechtigung `"clipboardRead"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#clipboardread) kann Ihre Erweiterung ohne Benutzerbestätigung oder transiente Aktivierung aus der Zwischenablage lesen.

> [!NOTE]
> In Firefox und Chrome ermöglicht die Berechtigung `"clipboardRead"` das Lesen aus der Zwischenablage in allen Erweiterungskontexten außer Service-Workern sowie in Content-Skripten. Safari unterstützt die Berechtigung `"clipboardRead"` nicht.

Dieser Codeausschnitt liest den Text aus der Zwischenablage und ersetzt damit den Inhalt des Elements mit der ID `"outbox"`.

```js
navigator.clipboard
  .readText()
  .then((clipText) => (document.getElementById("outbox").innerText = clipText));
```

### execCommand() verwenden

> [!NOTE]
> [`document.execCommand(&#34;paste&#34;)`](/de/docs/Web/API/Document/execCommand) ist veraltet. Es ist nicht mehr gewährleistet, dass die Methode in einem Browser funktioniert oder verfügbar ist.

Um [`document.execCommand(&#34;paste&#34;)`](/de/docs/Web/API/Document/execCommand) zu verwenden, benötigt Ihre Erweiterung die [Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) `"clipboardRead"`. Dies gilt auch dann, wenn Sie den Befehl `"paste"` innerhalb eines durch eine Benutzeraktion ausgelösten Event-Handlers verwenden, etwa für [`click`](/de/docs/Web/API/Element/click_event) oder [`keypress`](/de/docs/Web/API/Element/keypress_event).

Betrachten Sie HTML mit folgendem Inhalt:

```html
<textarea id="output"></textarea> <button id="paste">Paste</button>
```

Um den Inhalt des Elements {{HTMLElement("textarea")}} mit der ID `"output"` auf den Inhalt der Zwischenablage zu setzen, wenn der Benutzer auf {{HTMLElement("button")}} `"paste"` klickt, können Sie Code wie diesen verwenden:

```js
function paste() {
  let pasteText = document.querySelector("#output");
  pasteText.focus();
  document.execCommand("paste");
  console.log(pasteText.textContent);
}
document.querySelector("#paste").addEventListener("click", paste);
```

### Browserspezifische Hinweise

In Chrome:

- Ab Chrome 157 können Erweiterungs-Service-Worker mit der Berechtigung `"clipboardWrite"` über `navigator.clipboard` in die Zwischenablage schreiben. Das Lesen aus der Zwischenablage in einem Service-Worker wird hingegen nicht unterstützt. Vor Chrome 157 oder wenn Chrome-Erweiterungen im Hintergrund aus der Zwischenablage lesen, müssen sie die veralteten `document.execCommand()`-APIs in einem Offscreen-Dokument verwenden oder `navigator.clipboard` in einem anderen Kontext nutzen, beispielsweise in einem Content-Skript oder auf einer Erweiterungsseite.
  Damit Seitenskripte ohne Benutzerinteraktion in die Zwischenablage schreiben können, muss die Berechtigung `"clipboard-write"` über die Web-API [`navigator.permissions`](/de/docs/Web/API/Permissions) angefordert werden. Ihre Erweiterung kann diese Berechtigung mit [`navigator.permissions.query()`](/de/docs/Web/API/Permissions/query) prüfen:

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

- Die Möglichkeit, die Lesemethoden der Clipboard API nach Bestätigung einer Einfügeaufforderung durch den Benutzer zu verwenden, wurde für Webseiten in Firefox 127 und für Erweiterungen in Firefox 147 eingeführt. Davor waren die Methoden nur verfügbar, wenn die Berechtigung `"clipboardRead"` festgelegt war.

In Safari:

- Die Berechtigung `"clipboardWrite"` wird nur in Erweiterungskontexten unterstützt, nicht in Content-Skripten.
- Die Berechtigung `"clipboardRead"` wird nicht unterstützt.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Clipboard API](/de/docs/Web/API/Clipboard_API)
- [Permissions API](/de/docs/Web/API/Permissions_API)
- [Inhalte bearbeitbar machen](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable)
