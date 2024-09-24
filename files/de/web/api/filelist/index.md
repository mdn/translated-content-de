---
title: FileList
slug: Web/API/FileList
l10n:
  sourceCommit: cfa628aedb53a83b315943ef19fa6c73298fb7d5
---

{{APIRef("File API")}}{{AvailableInWorkers}}

Das **`FileList`** Interface stellt ein Objekt dieses Typs dar, das von der `files` Eigenschaft des HTML {{HTMLElement("input")}} Elements zurückgegeben wird; dies ermöglicht Ihnen den Zugriff auf die Liste der Dateien, die mit dem `<input type="file">` Element ausgewählt wurden. Es wird auch für eine Liste von Dateien verwendet, die in Webinhalte gezogen werden, wenn die Drag-and-Drop-API verwendet wird; sehen Sie sich das {{domxref("DataTransfer")}} Objekt für Details zu dieser Verwendung an.

Alle `<input>` Elementknoten haben eine `files` Attribut vom Typ `FileList`, das den Zugriff auf die Elemente in dieser Liste ermöglicht. Zum Beispiel, wenn das HTML das folgende Datei-Eingabefeld enthält:

```html
<input id="fileItem" type="file" />
```

Die folgende Codezeile ruft die erste Datei in der Dateiliste des Knotens als {{domxref("File")}} Objekt ab:

```js
const file = document.getElementById("fileItem").files[0];
```

Dieses Interface war ein [Versuch, eine nicht modifizierbare Liste zu erstellen](https://stackoverflow.com/questions/74630989/why-use-domstringlist-rather-than-an-array/74641156#74641156) und wird nur weiterhin unterstützt, um bereits benutzten Code nicht zu brechen. Moderne APIs repräsentieren Listenstrukturen mithilfe von Typen, die auf JavaScript [arrays](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) basieren. Dadurch werden viele Array-Methoden verfügbar gemacht und gleichzeitig zusätzliche Semantiken für deren Verwendung auferlegt (wie z.B. das Festlegen, dass ihre Elemente schreibgeschützt sind).

Diese historischen Gründe bedeuten nicht, dass Sie als Entwickler `FileList` vermeiden sollten. Sie erstellen keine `FileList` Objekte selbst, sondern erhalten sie von APIs wie {{domxref("HTMLInputElement.files")}}, und diese APIs sind nicht veraltet. Seien Sie jedoch auf die semantischen Unterschiede zu einem echten Array acht.

## Instanz-Eigenschaften

- {{DOMxRef("FileList.length", "length")}} {{ReadOnlyInline}}
  - : Ein schreibgeschützter Wert, der die Anzahl der Dateien in der Liste angibt.

## Instanz-Methoden

- {{DOMxRef("FileList.item()", "item()")}}
  - : Gibt ein {{domxref("File")}} Objekt zurück, das die Datei am angegebenen Index in der Dateiliste repräsentiert.

## Beispiel

### Dateinamen protokollieren

In diesem Beispiel protokollieren wir die Namen aller vom Benutzer ausgewählten Dateien.

#### HTML

```html
<input id="myfiles" multiple type="file" />
<pre class="output">Ausgewählte Dateien:</pre>
```

#### CSS

```css
.output {
  overflow: scroll;
  margin: 1rem 0;
  height: 200px;
}
```

#### JavaScript

```js
const output = document.querySelector(".output");
const fileInput = document.querySelector("#myfiles");

fileInput.addEventListener("change", () => {
  for (const file of fileInput.files) {
    output.innerText += `\n${file.name}`;
  }
});
```

#### Ergebnis

{{EmbedLiveSample("Logging filenames")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Dateien aus Webanwendungen](/de/docs/Web/API/File_API/Using_files_from_web_applications)
- {{domxref("File")}}
- {{domxref("FileReader")}}
