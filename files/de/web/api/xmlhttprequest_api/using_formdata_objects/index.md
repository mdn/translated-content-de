---
title: Verwenden von FormData-Objekten
slug: Web/API/XMLHttpRequest_API/Using_FormData_Objects
l10n:
  sourceCommit: 9a4005caa5cc13f5174e3b8981eeec5631ed83d1
---

{{DefaultAPISidebar("XMLHttpRequest API")}}

Das [`FormData`](/de/docs/Web/API/FormData)-Objekt ermöglicht es Ihnen, eine Reihe von Schlüssel/Wert-Paaren zusammenzustellen, die mit der [Fetch](/de/docs/Web/API/Fetch_API) oder [XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest_API) API gesendet werden sollen. Es ist hauptsächlich für die Verwendung beim Senden von Formulardaten gedacht, kann jedoch unabhängig von Formularen verwendet werden, um mit Schlüssel versehene Daten zu übertragen. Die übertragenen Daten haben dasselbe Format, das die Methode [`submit()`](/de/docs/Web/API/HTMLFormElement/submit) des Formulars verwenden würde, wenn der Encoding-Typ des Formulars auf `multipart/form-data` gesetzt wäre.

## Erstellen eines `FormData`-Objekts von Grund auf

Sie können ein `FormData`-Objekt selbst erstellen, indem Sie es instanziieren und dann Felder durch Aufrufen der Methode [`append()`](/de/docs/Web/API/FormData/append) hinzufügen, so:

```js
const send = document.querySelector("#send");

send.addEventListener("click", async () => {
  const formData = new FormData();
  formData.append("username", "Groucho");
  formData.append("accountNum", 123456);

  // A file <input> element
  const avatar = document.querySelector("#avatar");
  formData.append("avatar", avatar.files[0]);

  // JavaScript file-like object
  const content = '<q id="a"><span id="b">hey!</span></q>';
  const blob = new Blob([content], { type: "text/xml" });
  formData.append("webmasterFile", blob);

  const response = await fetch("http://example.org/post", {
    method: "POST",
    body: formData,
  });
  console.log(await response.json());
});
```

> [!NOTE]
> Die Felder `"avatar"` und `"webmasterFile"` enthalten beide eine Datei. Die Nummer, die dem Feld `"accountNum"` zugewiesen wird, wird sofort in einen String umgewandelt durch die Methode [`FormData.append()`](/de/docs/Web/API/FormData/append) (der Wert des Feldes kann ein [`Blob`](/de/docs/Web/API/Blob), [`File`](/de/docs/Web/API/File) oder ein String sein. Wenn der Wert weder ein `Blob` noch eine `File` ist, wird der Wert in einen String umgewandelt).

Dieses Beispiel erstellt eine `FormData`-Instanz mit Werten für Felder namens `"username"`, `"accountNum"`, `"avatar"` und `"webmasterFile"`, und verwendet dann [`fetch()`](/de/docs/Web/API/Window/fetch), um die Daten des Formulars zu senden. Das Feld `"webmasterFile"` ist ein [`Blob`](/de/docs/Web/API/Blob). Ein `Blob`-Objekt repräsentiert ein dateiähnliches Objekt aus unveränderlichen, rohen Daten. Blobs repräsentieren Daten, die nicht unbedingt im JavaScript-eigenen Format vorliegen. Das [`File`](/de/docs/Web/API/File)-Interface basiert auf `Blob` und erbt die Blob-Funktionalität und erweitert sie zur Unterstützung von Dateien auf dem Benutzer-System. Um ein `Blob` zu erstellen, können Sie [den `Blob()`-Konstruktor](/de/docs/Web/API/Blob/Blob) aufrufen.

## Abrufen eines `FormData`-Objekts aus einem HTML-Formular

Um ein `FormData`-Objekt zu erstellen, das die Daten eines vorhandenen {{HTMLElement("form")}} enthält, geben Sie dieses Formularelement beim Erstellen des `FormData`-Objekts an:

> **Hinweis:** `FormData` verwendet nur Eingabefelder, die das `name`-Attribut verwenden.

```js
const formData = new FormData(someFormElement);
```

Zum Beispiel:

```js
const send = document.querySelector("#send");

send.addEventListener("click", async () => {
  // A <form> element
  const userInfo = document.querySelector("#user-info");
  const formData = new FormData(userInfo);

  const response = await fetch("http://example.org/post", {
    method: "POST",
    body: formData,
  });
  console.log(await response.json());
});
```

Sie können dem `FormData`-Objekt auch zusätzliche Daten hinzufügen, nachdem Sie es aus einem Formular abgerufen haben und bevor Sie es senden, so:

```js
const send = document.querySelector("#send");

send.addEventListener("click", async () => {
  const userInfo = document.querySelector("#user-info");
  const formData = new FormData(userInfo);
  formData.append("serialnumber", 12345);

  const response = await fetch("http://example.org/post", {
    method: "POST",
    body: formData,
  });
  console.log(await response.json());
});
```

Dies ermöglicht es Ihnen, die Formulardaten vor dem Senden zu erweitern, um zusätzliche Informationen einzuschließen, die nicht unbedingt von Benutzern bearbeitet werden können.

## Senden von Dateien mit einem `FormData`-Objekt

Sie können auch Dateien mit `FormData` senden. Fügen Sie ein {{HTMLElement("input")}}-Element des Typs `file` in Ihr {{htmlelement("form")}} ein:

```html
<form enctype="multipart/form-data" method="post" name="fileinfo" id="fileinfo">
  <p>
    <label
      >Your email address:
      <input
        type="email"
        autocomplete="on"
        name="userid"
        placeholder="email"
        required
        size="32"
        maxlength="64" />
    </label>
  </p>
  <p>
    <label
      >Custom file label:
      <input type="text" name="file-label" size="12" maxlength="32" />
    </label>
  </p>
  <p>
    <label
      >File to stash:
      <input type="file" name="file" required />
    </label>
  </p>
  <p>
    <input type="submit" value="Stash the file!" />
  </p>
</form>
```

Dann können Sie es mit folgendem Code senden:

```js
const form = document.querySelector("#fileinfo");

form.addEventListener("submit", async (event) => {
  const formData = new FormData(form);

  formData.append("CustomField", "This is some extra data");

  const response = await fetch("stash.php", {
    method: "POST",
    body: formData,
  });
  event.preventDefault();
});
```

> [!NOTE]
> Wenn Sie einen Verweis auf das Formular übergeben, wird die im Formular angegebene [HTTP-Methodenanforderung](/de/docs/Web/HTTP/Methods) gegenüber der in dem `open()`-Aufruf angegebenen Methode verwendet.

> [!WARNING]
> Wenn Sie `FormData` verwenden, um POST-Anfragen mit [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) oder der [Fetch API](/de/docs/Web/API/Fetch_API) mit dem Inhaltstyp `multipart/form-data` einzureichen (z. B. beim Hochladen von Dateien und Blobs auf den Server), _setzen Sie nicht_ explizit den [`Content-Type`](/de/docs/Web/HTTP/Headers/Content-Type) Header in der Anfrage. Andernfalls verhindert dies, dass der Browser den `Content-Type`-Header mit dem Grenzausdruck festlegt, den er zur Abgrenzung der Formularfelder im Anfragetext verwendet.

Sie können auch direkt eine [`File`](/de/docs/Web/API/File) oder ein [`Blob`](/de/docs/Web/API/Blob) zu dem [`FormData`](/de/docs/Web/API/FormData)-Objekt hinzufügen, so:

```js
data.append("myfile", myBlob, "filename.txt");
```

Bei Verwendung der [`append()`](/de/docs/Web/API/FormData/append)-Methode ist es möglich, den dritten optionalen Parameter zu nutzen, um einen Dateinamen im `Content-Disposition`-Header zu übermitteln, der an den Server gesendet wird. Wenn kein Dateiname angegeben ist (oder der Parameter nicht unterstützt wird), wird der Name "blob" verwendet.

## Verwendung eines `formdata`-Ereignisses

Das [`formdata`-Ereignis](/de/docs/Web/API/HTMLFormElement/formdata_event), aktueller als das [`FormData`](/de/docs/Web/API/FormData)-Objekt, wird auf einem [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement)-Objekt ausgelöst, nachdem die Eintragsliste, die die Formulardaten darstellt, erstellt wurde. Dies geschieht, wenn das Formular eingereicht wird, kann aber auch durch den Aufruf eines [`FormData()`](/de/docs/Web/API/FormData/FormData)-Konstruktors ausgelöst werden.

Dies ermöglicht es, schnell ein [`FormData`](/de/docs/Web/API/FormData)-Objekt als Antwort auf das Auslösen eines `formdata`-Ereignisses zu erhalten, anstatt es selbst zusammenstellen zu müssen.

Zum Beispiel können wir im JavaScript auf ein Formular verweisen:

```js
const formElem = document.querySelector("form");
```

In unserem [`submit`-Ereignis](/de/docs/Web/API/HTMLFormElement/submit_event)-Handler verwenden wir [`preventDefault`](/de/docs/Web/API/Event/preventDefault), um das standardmäßige Formulareinreichen zu stoppen, und rufen dann einen [`FormData()`](/de/docs/Web/API/FormData/FormData)-Konstruktor auf, um das `formdata`-Ereignis auszulösen:

```js
formElem.addEventListener("submit", (e) => {
  // on form submission, prevent default
  e.preventDefault();

  // construct a FormData object, which fires the formdata event
  new FormData(formElem);
});
```

Wenn das `formdata`-Ereignis ausgelöst wird, können wir auf das [`FormData`](/de/docs/Web/API/FormData)-Objekt zugreifen, indem wir [`FormDataEvent.formData`](/de/docs/Web/API/FormDataEvent/formData) verwenden, und anschließend damit machen, was wir möchten (unten posten wir es an den Server mit [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)).

```js
formElem.addEventListener("formdata", (e) => {
  console.log("formdata fired");

  // Get the form data from the event object
  const data = e.formData;
  for (const value of data.values()) {
    console.log(value);
  }

  // Submit the data via fetch()
  fetch("/formHandler", {
    method: "POST",
    body: data,
  });
});
```

## Stolpersteine

Das `FormData`-Objekt enthält keine Daten aus Feldern, die deaktiviert sind, oder Feldsätzen, die deaktiviert sind.

## Siehe auch

- [Verwendung der Fetch API](/de/docs/Web/API/Fetch_API/Using_Fetch)
- [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement)
- [`Blob`](/de/docs/Web/API/Blob)
- [Typed Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays)
