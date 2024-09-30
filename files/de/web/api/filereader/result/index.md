---
title: "FileReader: result-Eigenschaft"
short-title: result
slug: Web/API/FileReader/result
l10n:
  sourceCommit: ce85e3fb7865330e4ac2a6dad25db5cf5d27ea74
---

{{APIRef("File API")}}{{AvailableInWorkers}}

Die schreibgeschützte **`result`**-Eigenschaft der [`FileReader`](/de/docs/Web/API/FileReader)-Schnittstelle gibt den Inhalt der Datei zurück. Diese Eigenschaft ist nur gültig, nachdem der Lesevorgang abgeschlossen ist, und das Format der Daten hängt davon ab, welche Methode verwendet wurde, um den Lesevorgang zu starten.

## Wert

Ein entsprechender String oder {{jsxref("ArrayBuffer")}}, je nachdem, welche der Lesemethoden verwendet wurde, um den Lesevorgang zu starten. Der Wert ist `null`, wenn das Lesen noch nicht abgeschlossen oder erfolglos war.

Die Ergebnistypen sind unten beschrieben.

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">Methode</th>
      <th scope="col">Beschreibung</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        [`readAsArrayBuffer()`](/de/docs/Web/API/FileReader/readAsArrayBuffer)
      </td>
      <td>
        Das <code>result</code> ist ein JavaScript
        {{jsxref("Global_Objects/ArrayBuffer", "ArrayBuffer")}},
        das Binärdaten enthält.
      </td>
    </tr>
    <tr>
      <td>
        [`readAsBinaryString()`](/de/docs/Web/API/FileReader/readAsBinaryString)
      </td>
      <td>
        Das <code>result</code> enthält die rohen Binärdaten der Datei in einem
        String.
      </td>
    </tr>
    <tr>
      <td>
        [`readAsDataURL()`](/de/docs/Web/API/FileReader/readAsDataURL)
      </td>
      <td>
        Das <code>result</code> ist ein String mit einer <code>data:</code>-URL,
        die die Daten der Datei darstellt.
      </td>
    </tr>
    <tr>
      <td>
        [`readAsText()`](/de/docs/Web/API/FileReader/readAsText)
      </td>
      <td>Das <code>result</code> ist Text als String.</td>
    </tr>
  </tbody>
</table>

## Beispiele

Dieses Beispiel zeigt eine Funktion `reader()`, die eine Datei von einem [File-Input](/de/docs/Web/HTML/Element/input/file) liest. Sie funktioniert, indem ein [`FileReader`](/de/docs/Web/API/FileReader)-Objekt erstellt und ein Listener für [`load`](/de/docs/Web/API/FileReader/load_event)-Ereignisse erstellt wird, sodass, wenn die Datei gelesen ist, das `result` abgerufen und zur Callback-Funktion übergeben wird, die an `reader()` übergeben wurde.

Der Inhalt wird als Rohtextdaten behandelt.

```js
// Given this HTMLInputElement of type="file":
// <input id="image" type="file" accept="image/*">

function reader(file, callback) {
  const fr = new FileReader();
  fr.onload = () => callback(null, fr.result);
  fr.onerror = (err) => callback(err);
  fr.readAsDataURL(file);
}

document.querySelector("#image").addEventListener("change", (evt) => {
  // No files, do nothing.
  if (!evt.target.files) {
    return;
  }
  reader(evt.target.files[0], (err, res) => {
    console.log(res); // Base64 `data:image/...` String result.
  });
});
```

Angesichts der asynchronen Natur von [`FileReader`](/de/docs/Web/API/FileReader) könnten Sie einen auf Promise basierenden Ansatz verwenden. Hier ist ein Beispiel für ein [File-Input](/de/docs/Web/HTML/Element/input/file) mit dem Attribut `multiple`, das ein {{jsxref("Promise")}} zurückgibt.

```js
// Given this HTMLInputElement:
// <input id="images" type="file" accept="image/*" multiple>

const reader = (file) =>
  new Promise((resolve, reject) => {
    const fr = new FileReader();
    fr.onload = () => resolve(fr);
    fr.onerror = (err) => reject(err);
    fr.readAsDataURL(file);
  });

async function logImagesData(fileList) {
  let fileResults = [];
  const frPromises = fileList.map(reader);

  try {
    fileResults = await Promise.all(frPromises);
  } catch (err) {
    // In this specific case, Promise.all() might be preferred
    // over Promise.allSettled(), since it isn't trivial to modify
    // a FileList to a subset of files of what the user initially
    // selected. Therefore, let's just stash the entire operation.
    console.error(err);
    return;
  }

  fileResults.forEach((fr) => {
    console.log(fr.result); // Base64 `data:image/...` String result.
  });
}

// HTMLInputElement type="file" Event handler:
document.querySelector("#images").addEventListener("change", (evt) => {
  // If no files, do nothing.
  if (!evt.target.files) {
    return;
  }
  logImagesData([...evt.target.files]);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`FileReader`](/de/docs/Web/API/FileReader)
