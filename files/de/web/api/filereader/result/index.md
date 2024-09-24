---
title: "FileReader: Ergebnis-Eigenschaft"
short-title: Ergebnis
slug: Web/API/FileReader/result
l10n:
  sourceCommit: ce85e3fb7865330e4ac2a6dad25db5cf5d27ea74
---

{{APIRef("File API")}}{{AvailableInWorkers}}

Die **`result`**-Eigenschaft der {{domxref("FileReader")}}-Schnittstelle ist eine schreibgeschützte Eigenschaft, die den Inhalt der Datei zurückgibt. Diese Eigenschaft ist nur gültig, nachdem der Lesevorgang abgeschlossen ist, und das Format der Daten hängt davon ab, welche der Methoden verwendet wurde, um den Lesevorgang zu starten.

## Wert

Ein entsprechender String oder {{jsxref("ArrayBuffer")}}, basierend darauf, welche der Lesemethoden verwendet wurde, um den Lesevorgang zu starten. Der Wert ist `null`, wenn das Lesen noch nicht abgeschlossen ist oder fehlschlug.

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
        {{domxref("FileReader/readAsArrayBuffer", "readAsArrayBuffer()")}}
      </td>
      <td>
        Das <code>result</code> ist ein JavaScript
        {{jsxref("Global_Objects/ArrayBuffer", "ArrayBuffer")}}, das binäre Daten enthält.
      </td>
    </tr>
    <tr>
      <td>
        {{domxref("FileReader/readAsBinaryString", "readAsBinaryString()")}}
      </td>
      <td>
        Das <code>result</code> enthält die rohen binären Daten aus der Datei in einem
        String.
      </td>
    </tr>
    <tr>
      <td>
        {{domxref("FileReader/readAsDataURL", "readAsDataURL()")}}
      </td>
      <td>
        Das <code>result</code> ist ein String mit einer <code>data:</code>-URL, die die Daten der Datei repräsentiert.
      </td>
    </tr>
    <tr>
      <td>
        {{domxref("FileReader/readAsText", "readAsText()")}}
      </td>
      <td>Das <code>result</code> ist Text in einem String.</td>
    </tr>
  </tbody>
</table>

## Beispiele

Dieses Beispiel zeigt eine Funktion `reader()`, die eine Datei aus einer [Dateieingabe](/de/docs/Web/HTML/Element/input/file) liest. Es funktioniert, indem ein {{domxref("FileReader")}}-Objekt erstellt wird, und indem ein Listener für {{domxref("FileReader/load_event", "load")}}-Ereignisse erstellt wird, sodass, wenn die Datei gelesen wird, das `result` erhalten und an die Rückruffunktion übergeben wird, die `reader()` zugeführt wurde.

Der Inhalt wird als rohe Textdaten behandelt.

```js
// Gegeben dieses HTMLInputElement vom Typ="file":
// <input id="image" type="file" accept="image/*">

function reader(file, callback) {
  const fr = new FileReader();
  fr.onload = () => callback(null, fr.result);
  fr.onerror = (err) => callback(err);
  fr.readAsDataURL(file);
}

document.querySelector("#image").addEventListener("change", (evt) => {
  // Keine Dateien, nichts tun.
  if (!evt.target.files) {
    return;
  }
  reader(evt.target.files[0], (err, res) => {
    console.log(res); // Base64 `data:image/...` String-Ergebnis.
  });
});
```

Angesichts der asynchronen Natur von {{domxref("FileReader")}} könnten Sie einen auf Versprechen basierenden Ansatz verwenden. Hier ist ein Beispiel für eine [Dateieingabe](/de/docs/Web/HTML/Element/input/file) mit dem Attribut `multiple`, das ein {{jsxref("Promise")}} zurückgibt.

```js
// Gegeben dieses HTMLInputElement:
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
    // In diesem speziellen Fall könnte Promise.all() gegenüber Promise.allSettled() bevorzugt werden,
    // da es nicht trivial ist, eine FileList in eine Teilmenge der ursprünglich vom Benutzer
    // ausgewählten Dateien zu ändern. Lassen Sie uns daher einfach den gesamten Vorgang speichern.
    console.error(err);
    return;
  }

  fileResults.forEach((fr) => {
    console.log(fr.result); // Base64 `data:image/...` String-Ergebnis.
  });
}

// HTMLInputElement vom Typ="file" Ereignishandler:
document.querySelector("#images").addEventListener("change", (evt) => {
  // Wenn keine Dateien, nichts tun.
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

- {{domxref("FileReader")}}
