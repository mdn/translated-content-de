---
title: Verwenden von FormData-Objekten
slug: Web/API/XMLHttpRequest_API/Using_FormData_Objects
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{DefaultAPISidebar("XMLHttpRequest API")}}

Das [`FormData`](/de/docs/Web/API/FormData)-Objekt ermöglicht es Ihnen, eine Menge von Schlüssel/Wert-Paaren zu erstellen, die mit der [Fetch](/de/docs/Web/API/Fetch_API)- oder [XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest_API)-API gesendet werden können. Es ist hauptsächlich zum Senden von Formulardaten gedacht, kann aber unabhängig von Formularen verwendet werden, um Schlüssel-Daten zu übermitteln. Die übertragenen Daten haben dasselbe Format, das die [`submit()`](/de/docs/Web/API/HTMLFormElement/submit)-Methode des Formulars verwenden würde, um die Daten zu senden, wenn der Codierungstyp des Formulars auf `multipart/form-data` eingestellt wäre.

## Erstellen eines `FormData`-Objekts von Grund auf

Sie können ein `FormData`-Objekt selbst erstellen, indem Sie es instanziieren und dann Felder hinzufügen, indem Sie seine [`append()`](/de/docs/Web/API/FormData/append)-Methode aufrufen, wie folgt:

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
> Die Felder `"avatar"` und `"webmasterFile"` enthalten beide eine Datei. Die der Feldzuweisung zugeordnete Zahl `"accountNum"` wird unmittelbar durch die [`FormData.append()`](/de/docs/Web/API/FormData/append)-Methode in einen String umgewandelt (der Wert des Feldes kann ein [`Blob`](/de/docs/Web/API/Blob), ein [`File`](/de/docs/Web/API/File) oder ein String sein. Wenn der Wert weder ein `Blob` noch eine `File` ist, wird der Wert in einen String umgewandelt).

Dieses Beispiel erstellt eine `FormData`-Instanz mit Werten für Felder namens `"username"`, `"accountNum"`, `"avatar"` und `"webmasterFile"` und verwendet dann [`fetch()`](/de/docs/Web/API/Window/fetch), um die Daten des Formulars zu senden. Das Feld `"webmasterFile"` ist ein [`Blob`](/de/docs/Web/API/Blob). Ein `Blob`-Objekt stellt ein dateiähnliches Objekt aus unveränderlichen, rohen Daten dar. Blobs repräsentieren Daten, die nicht unbedingt in einem JavaScript-nativen Format vorliegen. Das [`File`](/de/docs/Web/API/File)-Interface basiert auf `Blob`, erbt die Blob-Funktionalität und erweitert sie, um Dateien auf dem System des Benutzers zu unterstützen. Um ein `Blob` zu erstellen, können Sie [den `Blob()`-Konstruktor](/de/docs/Web/API/Blob/Blob) aufrufen.

## Abrufen eines `FormData`-Objekts aus einem HTML-Formular

Um ein `FormData`-Objekt zu konstruieren, das die Daten eines bestehenden {{ HTMLElement("form") }} enthält, geben Sie dieses Formularelement beim Erstellen des `FormData`-Objekts an:

> [!NOTE] > `FormData` verwendet nur Eingabefelder, die das `name`-Attribut verwenden.

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

Sie können dem `FormData`-Objekt auch zusätzliche Daten hinzufügen, nachdem Sie es aus einem Formular abgerufen haben und bevor Sie es senden, wie folgt:

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

Dies ermöglicht es Ihnen, die Daten des Formulars vor dem Versand anzureichern, um zusätzliche Informationen einzuschließen, die nicht unbedingt vom Benutzer bearbeitbar sind.

## Versenden von Dateien mit einem `FormData`-Objekt

Sie können auch Dateien mit `FormData` senden. Fügen Sie ein {{ HTMLElement("input") }}-Element des Typs `file` in Ihr {{htmlelement("form")}} ein:

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
> Wenn Sie eine Referenz zum Formular übergeben, wird die im Formular angegebene [HTTP-Anfragemethode](/de/docs/Web/HTTP/Reference/Methods) anstelle der in der `open()`-Aufruf angegebenen Methode verwendet.

> [!WARNING]
> Wenn Sie `FormData` verwenden, um POST-Anfragen mit [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) oder der [Fetch API](/de/docs/Web/API/Fetch_API) mit dem `multipart/form-data`-Content-Type zu senden (z.B. beim Hochladen von Dateien und Blobs zum Server), _setzen Sie nicht_ explizit den [`Content-Type`](/de/docs/Web/HTTP/Reference/Headers/Content-Type)-Header in der Anfrage. Andernfalls kann der Browser den `Content-Type`-Header mit dem Grenzausdruck, den er verwenden wird, um Formularfelder im Anfragetext zu trennen, nicht setzen.

Sie können auch eine [`File`](/de/docs/Web/API/File) oder [`Blob`](/de/docs/Web/API/Blob) direkt zum [`FormData`](/de/docs/Web/API/FormData)-Objekt hinzufügen, wie folgt:

```js
data.append("myfile", myBlob, "filename.txt");
```

Wenn Sie die [`append()`](/de/docs/Web/API/FormData/append)-Methode verwenden, ist es möglich, den dritten optionalen Parameter zu verwenden, um einen Dateinamen innerhalb des `Content-Disposition`-Headers, der an den Server gesendet wird, zu übergeben. Wenn kein Dateiname angegeben ist (oder der Parameter nicht unterstützt wird), wird der Name "blob" verwendet.

## Verwendung eines `formdata`-Events

Das [`formdata`-Ereignis](/de/docs/Web/API/HTMLFormElement/formdata_event), das neuer als das [`FormData`](/de/docs/Web/API/FormData)-Objekt ist, wird auf einem [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement)-Objekt ausgelöst, nachdem die Eintragsliste, die die Formulardaten repräsentiert, erstellt wurde. Dies geschieht beim Absenden des Formulars, kann aber auch durch den Aufruf eines [`FormData()`](/de/docs/Web/API/FormData/FormData)-Konstruktors ausgelöst werden.

Dies ermöglicht es, ein [`FormData`](/de/docs/Web/API/FormData)-Objekt schnell in Antwort auf ein `formdata`-Ereignis zu erhalten, anstatt es selbst zusammenstellen zu müssen.

Zum Beispiel können wir im JavaScript ein Formular referenzieren:

```js
const formElem = document.querySelector("form");
```

In unserem [`submit`-Ereignis](/de/docs/Web/API/HTMLFormElement/submit_event)-Handler verwenden wir [`preventDefault`](/de/docs/Web/API/Event/preventDefault), um die Standardformularübermittlung zu stoppen, und rufen dann einen [`FormData()`](/de/docs/Web/API/FormData/FormData)-Konstruktor auf, um das `formdata`-Ereignis auszulösen:

```js
formElem.addEventListener("submit", (e) => {
  // on form submission, prevent default
  e.preventDefault();

  // construct a FormData object, which fires the formdata event
  new FormData(formElem);
});
```

Wenn das `formdata`-Ereignis ausgelöst wird, können wir auf das [`FormData`](/de/docs/Web/API/FormData)-Objekt über [`FormDataEvent.formData`](/de/docs/Web/API/FormDataEvent/formData) zugreifen und damit machen, was wir möchten (unten posten wir es mit [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) an den Server).

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

Das `FormData`-Objekt enthält keine Daten aus Feldern, die deaktiviert sind, oder aus deaktivierten Fieldsets.

## Siehe auch

- [Verwendung der Fetch API](/de/docs/Web/API/Fetch_API/Using_Fetch)
- [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement)
- [`Blob`](/de/docs/Web/API/Blob)
- [Typisierte Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays)
