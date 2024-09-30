---
title: FileList
slug: Web/API/FileList
l10n:
  sourceCommit: cfa628aedb53a83b315943ef19fa6c73298fb7d5
---

{{APIRef("File API")}}{{AvailableInWorkers}}

Die **`FileList`** Schnittstelle stellt ein Objekt dar, das von der `files`-Eigenschaft des HTML-{{HTMLElement("input")}}-Elements zurückgegeben wird. Dies ermöglicht den Zugriff auf die Liste der mit dem `<input type="file">`-Element ausgewählten Dateien. Sie wird auch für eine Liste von Dateien verwendet, die in Webinhalte gezogen wurden, wenn die Drag-and-Drop-API verwendet wird; siehe das [`DataTransfer`](/de/docs/Web/API/DataTransfer)-Objekt für Details zu diesem Anwendungsfall.

Alle `<input>`-Elementknoten haben ein `files`-Attribut vom Typ `FileList`, das den Zugriff auf die Elemente in dieser Liste ermöglicht. Wenn das HTML beispielsweise die folgende Datei-Eingabe enthält:

```html
<input id="fileItem" type="file" />
```

Die folgende Codezeile ruft die erste Datei in der Dateiliste des Knotens als [`File`](/de/docs/Web/API/File)-Objekt ab:

```js
const file = document.getElementById("fileItem").files[0];
```

Diese Schnittstelle war ein [Versuch, eine nicht modifizierbare Liste zu erstellen](https://stackoverflow.com/questions/74630989/why-use-domstringlist-rather-than-an-array/74641156#74641156) und wird weiterhin unterstützt, um bestehenden Code nicht zu brechen, der sie bereits verwendet. Moderne APIs stellen Listenstrukturen mit Typen dar, die auf JavaScript-[Arrays](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) basieren, wodurch viele Array-Methoden verfügbar werden, während gleichzeitig zusätzliche Semantiken für ihre Verwendung auferlegt werden (wie das Festlegen ihrer Elemente auf "read-only").

Diese historischen Gründe bedeuten nicht, dass Sie als Entwickler `FileList` vermeiden sollten. Sie erstellen keine `FileList`-Objekte selbst, sondern erhalten sie von APIs wie [`HTMLInputElement.files`](/de/docs/Web/API/HTMLInputElement/files), und diese APIs sind nicht veraltet. Seien Sie jedoch vorsichtig mit den semantischen Unterschieden zu einem echten Array.

## Instanz-Eigenschaften

- [`length`](/de/docs/Web/API/FileList/length) {{ReadOnlyInline}}
  - : Ein schreibgeschützter Wert, der die Anzahl der Dateien in der Liste angibt.

## Instanz-Methoden

- [`item()`](/de/docs/Web/API/FileList/item)
  - : Gibt ein [`File`](/de/docs/Web/API/File)-Objekt zurück, das die Datei am angegebenen Index in der Dateiliste darstellt.

## Beispiel

### Dateinamen protokollieren

In diesem Beispiel protokollieren wir die Namen aller Dateien, die vom Benutzer ausgewählt wurden.

#### HTML

```html
<input id="myfiles" multiple type="file" />
<pre class="output">Selected files:</pre>
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
- [`File`](/de/docs/Web/API/File)
- [`FileReader`](/de/docs/Web/API/FileReader)
