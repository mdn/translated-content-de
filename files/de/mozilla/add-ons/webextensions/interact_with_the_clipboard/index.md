---
title: Interaktion mit der Zwischenablage
slug: Mozilla/Add-ons/WebExtensions/Interact_with_the_clipboard
l10n:
  sourceCommit: 942bbbe848b4b742a689de970f697d4c5b355bde
---

{{AddonSidebar}}

Die Arbeit mit der Zwischenablage in Erweiterungen entwickelt sich von der Web-API {{domxref("Document.execCommand()","document.execCommand")}} Methode (die veraltet ist) zur {{domxref("Clipboard", "navigator.clipboard")}} Methode.

> [!NOTE]
> Die {{domxref("Clipboard", "navigator.clipboard")}} API ist eine neue Ergänzung der Spezifikation und möglicherweise nicht in allen Browsern vollständig implementiert. Dieser Artikel beschreibt einige Einschränkungen, aber überprüfen Sie die Kompatibilitätstabellen für jede Methode, bevor Sie sie verwenden, um sicherzustellen, dass die API Ihren Anforderungen entspricht.

Der Unterschied zwischen den beiden APIs besteht darin, dass {{domxref("Document.execCommand()","document.execCommand")}} analog zu den Tastaturaktionen Kopieren, Ausschneiden und Einfügen funktioniert – also ein Austausch von Daten zwischen einer Webseite und der Zwischenablage – während {{domxref("Clipboard", "navigator.clipboard")}} beliebige Daten zur und von der Zwischenablage schreibt und liest.

{{domxref("Clipboard", "navigator.clipboard")}} bietet separate Methoden zum Lesen oder Schreiben:

- von Textinhalten, mit {{domxref("Clipboard.readText", "navigator.clipboard.readText()")}} und {{domxref("Clipboard.writeText", "navigator.clipboard.writeText()")}}.
- von Bildern, Rich-Text, HTML und anderen Rich-Inhalten, mit {{domxref("Clipboard.read", "navigator.clipboard.read()")}} und {{domxref("Clipboard.write", "navigator.clipboard.write()")}}.

Während jedoch {{domxref("Clipboard.readText", "navigator.clipboard.readText()")}} und {{domxref("Clipboard.writeText", "navigator.clipboard.writeText()")}} in allen Browsern funktionieren, tun dies {{domxref("Clipboard.read", "navigator.clipboard.read()")}} und {{domxref("Clipboard.write", "navigator.clipboard.write()")}} nicht. Beispielsweise sind in Firefox zum Zeitpunkt der Erstellung dieses Dokuments {{domxref("Clipboard.read", "navigator.clipboard.read()")}} und {{domxref("Clipboard.write", "navigator.clipboard.write()")}} nicht vollständig implementiert, sodass Sie:

- bei der Arbeit mit Bildern {{WebExtAPIRef("clipboard.setImageData","browser.clipboard.setImageData()")}} verwenden, um Bilder in die Zwischenablage zu schreiben, und {{domxref("Document.execCommand()","document.execCommand(&#34;paste&#34;)")}}, um Bilder auf einer Webseite einzufügen.
- Um Rich-Inhalte (wie HTML, Rich-Text einschließlich Bildern usw.) in die Zwischenablage zu schreiben, verwenden Sie {{domxref("Document.execCommand()","document.execCommand(&#34;copy&#34;)")}} oder {{domxref("Document.execCommand()","document.execCommand(&#34;cut&#34;)")}}. Dann entweder {{domxref("Clipboard.read","navigator.clipboard.read()")}} (empfohlen) oder {{domxref("Document.execCommand()","document.execCommand(&#34;paste&#34;)")}}, um den Inhalt aus der Zwischenablage zu lesen.

## Schreiben in die Zwischenablage

Dieser Abschnitt beschreibt die Optionen zum Schreiben von Daten in die Zwischenablage.

### Verwendung der Clipboard API

Die Clipboard API schreibt beliebige Daten aus Ihrer Erweiterung in die Zwischenablage. Die Verwendung der API erfordert die Berechtigung `"clipboardRead"` oder `"clipboardWrite"` in Ihrer `manifest.json` Datei. Da die API nur für [Secure Contexts](/de/docs/Web/Security/Secure_Contexts) verfügbar ist, kann sie nicht von einem Inhalts-Skript verwendet werden, das auf `http:`-Seiten läuft, sondern nur auf `https:`-Seiten.

Für Skripte auf Webseiten muss die Berechtigung `"clipboard-write"` mithilfe der Web-API {{domxref("Permissions", "navigator.permissions")}} angefordert werden. Sie können diese Berechtigung mit {{domxref("Permissions.query", "navigator.permissions.query()")}} überprüfen:

```js
navigator.permissions.query({ name: "clipboard-write" }).then((result) => {
  if (result.state === "granted" || result.state === "prompt") {
    /* jetzt in die Zwischenablage schreiben */
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

Die Befehle `"cut"` und `"copy"` der {{domxref("Document.execCommand", "document.execCommand()")}} Methode werden verwendet, um den Inhalt der Zwischenablage mit dem ausgewählten Material zu ersetzen. Diese Befehle können ohne besondere Berechtigungen in kurzlebigen Ereignishandlern für eine Benutzeraktion (zum Beispiel ein Klick-Handler) verwendet werden.

Angenommen, Sie haben ein Popup, das den folgenden HTML-Code enthält:

```html
<input id="input" type="text" /> <button id="copy">Kopieren</button>
```

Um die `"copy"`-Taste dazu zu bringen, den Inhalt des {{HTMLElement("input")}} Elements zu kopieren, können Sie folgenden Code verwenden:

```js
function copy() {
  let copyText = document.querySelector("#input");
  copyText.select();
  document.execCommand("copy");
}

document.querySelector("#copy").addEventListener("click", copy);
```

Da der `execCommand()`-Aufruf innerhalb eines Klickereignishandlers liegt, benötigen Sie keine besonderen Berechtigungen.

Angenommen, Sie lösen das Kopieren stattdessen durch einen Alarm aus:

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

Je nach Browser funktioniert dies möglicherweise nicht. In Firefox wird es nicht funktionieren, und Sie sehen eine Meldung wie diese in Ihrer Konsole:

`document.execCommand('cut'/'copy') was denied because it was not called from inside a short running user-generated event handler.`

Um diesen Anwendungsfall zu ermöglichen, müssen Sie die Berechtigung `"clipboardWrite"` [anfordern](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions). Also: `"clipboardWrite"` ermöglicht Ihnen, außerhalb eines kurzlebigen Ereignishandlers für eine Benutzeraktion in die Zwischenablage zu schreiben.

> **Hinweis:** {{domxref("Document.execCommand", "document.execCommand()")}} funktioniert nicht auf Eingabefeldern des Typs `type="hidden"`, mit dem HTML5-Attribut `"hidden"` oder mit einer übereinstimmenden CSS-Regel, die `"display: none;"` verwendet. Um eine Schaltfläche "In Zwischenablage kopieren" zu einem `span`, `div` oder `p` Tag hinzuzufügen, müssen Sie einen Workaround verwenden, z.B. die Position der Eingabe auf absolut setzen und sie aus dem Ansichtsfenster verschieben.

### Browser-spezifische Überlegungen

Die hier beteiligte Zwischenablage und andere APIs entwickeln sich schnell weiter, sodass es Unterschiede zwischen den Browsern gibt, wie sie funktionieren.

In Chrome:

- Sie benötigen kein `"clipboardWrite"`, selbst um außerhalb eines durch den Benutzer generierten Ereignishandlers in die Zwischenablage zu schreiben.

In Firefox:

- {{domxref("Clipboard.write", "navigator.clipboard.write()")}} wird nicht unterstützt.

Weitere Informationen finden Sie in den [Browser-Kompatibilitätstabellen](#browser-kompatibilität).

## Lesen aus der Zwischenablage

Dieser Abschnitt beschreibt die Optionen zum Lesen oder Einfügen von Daten aus der Zwischenablage.

### Verwendung der Clipboard API

Die Methoden {{domxref("Clipboard.readText", "navigator.clipboard.readText()")}} und {{domxref("Clipboard.read", "navigator.clipboard.read()")}} der Clipboard API ermöglichen es Ihnen, beliebigen Text oder Binärdaten aus der Zwischenablage in [sicheren Kontexten](/de/docs/Web/Security/Secure_Contexts) zu lesen. Dadurch können Sie auf die Daten in der Zwischenablage zugreifen, ohne sie in ein bearbeitbares Element einzufügen.

Sobald Sie die Berechtigung `"clipboard-read"` von der [Permissions API](/de/docs/Web/API/Permissions_API) erhalten haben, können Sie einfach von der Zwischenablage lesen. Zum Beispiel holt dieser Codeausschnitt den Text aus der Zwischenablage und ersetzt die Inhalte des Elements mit der ID `"outbox"` mit diesem Text.

```js
navigator.clipboard
  .readText()
  .then((clipText) => (document.getElementById("outbox").innerText = clipText));
```

### Verwendung von execCommand()

Um {{domxref("Document.execCommand()","document.execCommand(&#34;paste&#34;)")}} zu verwenden, benötigt Ihre Erweiterung die Berechtigung `"clipboardRead"` [anfordern](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions). Dies gilt auch, wenn Sie den `"paste"` Befehl innerhalb eines durch den Benutzer generierten Ereignishandlers wie {{domxref("Element/click_event", "klicken")}} oder {{domxref("Element/keypress_event", "Tastendruck")}} verwenden.

Betrachten Sie HTML, das beispielsweise so aussieht:

```html
<textarea id="output"></textarea> <button id="paste">Einfügen</button>
```

Um den Inhalt des {{HTMLElement("textarea")}} Elements mit der ID `"output"` aus der Zwischenablage festzulegen, wenn der Benutzer auf die Schaltfläche `"paste"` klickt, können Sie folgenden Code verwenden:

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

Firefox unterstützt die Berechtigung `"clipboardRead"` [anfordern](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) ab Version 54, unterstützt jedoch nur das Einfügen in Elemente im [content editierbaren Modus](/de/docs/Web/HTML/Global_attributes/contenteditable), was für Inhalts-Skripte nur mit einem {{HTMLElement("textarea")}} funktioniert. Für Hintergrundskripte kann jedes Element auf den content editierbaren Modus gesetzt werden.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Clipboard API](/de/docs/Web/API/Clipboard_API)
- [Permissions API](/de/docs/Web/API/Permissions_API)
- [Inhalt editierbar machen](/de/docs/Web/HTML/Global_attributes#contenteditable)
