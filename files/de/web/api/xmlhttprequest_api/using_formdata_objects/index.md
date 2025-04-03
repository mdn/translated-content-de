---
title: Verwendung von FormData-Objekten
slug: Web/API/XMLHttpRequest_API/Using_FormData_Objects
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{DefaultAPISidebar("XMLHttpRequest API")}}

Das [`FormData`](/de/docs/Web/API/FormData)-Objekt ermöglicht es Ihnen, eine Sammlung von Key/Value-Paaren zusammenzustellen, die Sie mit der [Fetch](/de/docs/Web/API/Fetch_API) oder der [XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest_API) API senden können. Es ist in erster Linie dafür gedacht, Formulardaten zu senden, kann aber unabhängig von Formularen verwendet werden, um bestimmte Daten zu übertragen. Die übermittelten Daten haben das gleiche Format, das auch die [`submit()`](/de/docs/Web/API/HTMLFormElement/submit)-Methode eines Formulars verwenden würde, wenn der Encoding-Typ des Formulars auf `multipart/form-data` gesetzt wäre.

## Erstellen eines `FormData`-Objekts von Grund auf

Sie können ein `FormData`-Objekt selbst erstellen, indem Sie es instanziieren und anschließend Felder durch Aufruf der [`append()`](/de/docs/Web/API/FormData/append)-Methode hinzufügen, wie hier gezeigt:

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
> Die Felder `"avatar"` und `"webmasterFile"` enthalten beide eine Datei. Die Nummer, die dem Feld `"accountNum"` zugewiesen ist, wird sofort in einen String umgewandelt durch die [`FormData.append()`](/de/docs/Web/API/FormData/append)-Methode (der Wert des Felds kann ein [`Blob`](/de/docs/Web/API/Blob), [`File`](/de/docs/Web/API/File) oder ein String sein. Wenn der Wert weder ein `Blob` noch eine `File` ist, wird der Wert in einen String konvertiert).

Dieses Beispiel erstellt eine `FormData`-Instanz mit Werten für Felder mit den Namen `"username"`, `"accountNum"`, `"avatar"` und `"webmasterFile"` und verwendet dann [`fetch()`](/de/docs/Web/API/Window/fetch), um die Formulardaten zu senden. Das Feld `"webmasterFile"` ist ein [`Blob`](/de/docs/Web/API/Blob). Ein `Blob`-Objekt repräsentiert ein dateiähnliches Objekt von unveränderlichen, rohen Daten. Blobs stellen Daten dar, die nicht notwendigerweise in einem JavaScript-nativen Format vorliegen. Das [`File`](/de/docs/Web/API/File)-Interface basiert auf `Blob` und erweitert die Blob-Funktionalität, um Dateien auf dem Benutzersystem zu unterstützen. Um ein `Blob` zu erstellen, können Sie [den `Blob()`-Konstruktor](/de/docs/Web/API/Blob/Blob) aufrufen.

## Ein `FormData`-Objekt aus einem HTML-Formular abrufen

Um ein `FormData`-Objekt zu erstellen, das die Daten eines bestehenden {{ HTMLElement("form") }} enthält, geben Sie dieses Formelement beim Erstellen des `FormData`-Objekts an:

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

Sie können auch zusätzliche Daten zum `FormData`-Objekt hinzufügen, nachdem Sie es aus einem Formular abgerufen haben und bevor Sie es senden, wie hier gezeigt:

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

Dies ermöglicht es Ihnen, die Formulardaten vor dem Senden zu ergänzen, um zusätzliche Informationen zu enthalten, die nicht unbedingt vom Benutzer bearbeitbar sind.

## Dateien mit einem `FormData`-Objekt senden

Mit `FormData` können Sie auch Dateien senden. Fügen Sie ein {{ HTMLElement("input") }}-Element vom Typ `file` in Ihr {{htmlelement("form")}} ein:

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

Dann können Sie es mit einem Code wie dem folgenden senden:

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
> Wenn Sie eine Referenz auf das Formular übergeben, wird die [HTTP-Anfragemethode](/de/docs/Web/HTTP/Reference/Methods) verwendet, die im Formular angegeben ist, anstelle der in der `open()`-Aufruf spezifizierten Methode.

> [!WARNING]
> Wenn Sie `FormData` verwenden, um POST-Anfragen mit [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) oder der [Fetch API](/de/docs/Web/API/Fetch_API) mit dem Content-Typ `multipart/form-data` einzureichen (z.B. beim Hochladen von Dateien und Blobs auf den Server), _setzen Sie nicht_ explizit den [`Content-Type`](/de/docs/Web/HTTP/Reference/Headers/Content-Type)-Header für die Anfrage. Andernfalls kann der Browser den `Content-Type`-Header nicht mit dem Grenzausdruck setzen, den er zur Begrenzung der Formularfelder im Anfragetext verwenden wird.

Sie können auch eine [`File`](/de/docs/Web/API/File) oder einen [`Blob`](/de/docs/Web/API/Blob) direkt zum [`FormData`](/de/docs/Web/API/FormData)-Objekt hinzufügen, wie folgt:

```js
data.append("myfile", myBlob, "filename.txt");
```

Bei Verwendung der [`append()`](/de/docs/Web/API/FormData/append)-Methode ist es möglich, den dritten optionalen Parameter zu nutzen, um einen Dateinamen innerhalb des `Content-Disposition`-Headers an den Server zu übergeben. Wenn kein Dateiname angegeben ist (oder der Parameter nicht unterstützt wird), wird der Name "blob" verwendet.

## Verwendung eines `formdata`-Events

Das [`formdata`-Event](/de/docs/Web/API/HTMLFormElement/formdata_event), das neuer ist als das [`FormData`](/de/docs/Web/API/FormData)-Objekt, wird auf einem [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement) Objekt ausgelöst, nachdem die Eintragsliste, die die Formulardaten darstellt, konstruiert wurde. Dies geschieht, wenn das Formular eingereicht wird, kann aber auch durch den Aufruf eines [`FormData()`](/de/docs/Web/API/FormData/FormData)-Konstruktors ausgelöst werden.

Dies ermöglicht es, ein [`FormData`](/de/docs/Web/API/FormData)-Objekt schnell als Reaktion auf ein auslösendes `formdata`-Event zu erhalten, anstatt es selbst zusammenstellen zu müssen.

Zum Beispiel, im JavaScript können wir auf ein Formular verweisen:

```js
const formElem = document.querySelector("form");
```

In unserem [`submit`-Event](/de/docs/Web/API/HTMLFormElement/submit_event)-Handler verwenden wir [`preventDefault`](/de/docs/Web/API/Event/preventDefault), um die Standardformulareinreichung zu stoppen, und rufen dann einen [`FormData()`](/de/docs/Web/API/FormData/FormData)-Konstruktor auf, um das `formdata`-Event auszulösen:

```js
formElem.addEventListener("submit", (e) => {
  // on form submission, prevent default
  e.preventDefault();

  // construct a FormData object, which fires the formdata event
  new FormData(formElem);
});
```

Wenn das `formdata`-Event ausgelöst wird, können wir auf das [`FormData`](/de/docs/Web/API/FormData)-Objekt mit [`FormDataEvent.formData`](/de/docs/Web/API/FormDataEvent/formData) zugreifen und dann damit machen, was wir wollen (unten senden wir es mit [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) an den Server):

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

Das `FormData`-Objekt enthält keine Daten aus Feldern, die deaktiviert sind, oder aus fieldsets, die deaktiviert sind.

## Siehe auch

- [Verwendung der Fetch API](/de/docs/Web/API/Fetch_API/Using_Fetch)
- [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement)
- [`Blob`](/de/docs/Web/API/Blob)
- [Typed Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays)
