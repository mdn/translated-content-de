---
title: Verwendung von FormData-Objekten
slug: Web/API/XMLHttpRequest_API/Using_FormData_Objects
l10n:
  sourceCommit: e561fa67af347b9770b359ba93e8579d2a540682
---

{{DefaultAPISidebar("XMLHttpRequest API")}}

Das [`FormData`](/de/docs/Web/API/FormData) Objekt ermöglicht es Ihnen, ein Set von Schlüssel/Wert-Paaren zusammenzustellen, um es mit der [Fetch](/de/docs/Web/API/Fetch_API) oder [XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest_API) API zu senden. Es ist in erster Linie für die Übermittlung von Formulardaten gedacht, kann aber unabhängig von Formularen verwendet werden, um Daten mit Schlüsseln zu übertragen. Die übermittelten Daten haben dasselbe Format, das die `submit()` Methode eines Formulars verwenden würde, wenn der Kodierungstyp des Formulars auf `multipart/form-data` gesetzt wäre.

## Erstellen eines `FormData`-Objekts von Grund auf

Sie können ein `FormData`-Objekt selbst erstellen, indem Sie es instanziieren und dann Felder hinzufügen, indem Sie die [`append()`](/de/docs/Web/API/FormData/append) Methode aufrufen, wie folgt:

```js
const send = document.querySelector("#send");

send.addEventListener("click", async () => {
  const formData = new FormData();
  formData.append("username", "Groucho");
  formData.append("accountnum", 123456);

  // A file <input> element
  const avatar = document.querySelector("#avatar");
  formData.append("avatar", avatar.files[0]);

  // JavaScript file-like object
  const content = '<q id="a"><span id="b">hey!</span></q>';
  const blob = new Blob([content], { type: "text/xml" });
  formData.append("webmasterfile", blob);

  const response = await fetch("http://example.org/post", {
    method: "POST",
    body: formData,
  });
  console.log(await response.json());
});
```

> [!NOTE]
> Die Felder `"avatar"` und `"webmasterfile"` enthalten beide eine Datei. Die der `"accountnum"` Felder zugewiesene Zahl wird von der [`FormData.append()`](/de/docs/Web/API/FormData/append) Methode sofort in eine Zeichenkette umgewandelt (der Wert des Feldes kann ein [`Blob`](/de/docs/Web/API/Blob), eine [`File`](/de/docs/Web/API/File) oder eine Zeichenkette sein. Ist der Wert weder Blob noch File, wird der Wert in eine Zeichenkette konvertiert).

Dieses Beispiel erstellt eine `FormData` Instanz mit Werten für Felder mit den Namen `"username"`, `"accountnum"`, `"avatar"` und `"webmasterfile"` und verwendet dann [`fetch()`](/de/docs/Web/API/Window/fetch), um die Formulardaten zu senden. Das Feld `"webmasterfile"` ist ein [`Blob`](/de/docs/Web/API/Blob). Ein `Blob`-Objekt stellt ein dateiähnliches Objekt von unveränderlichen, rohen Daten dar. Blobs repräsentieren Daten, die nicht unbedingt im nativen JavaScript-Format vorliegen. Die [`File`](/de/docs/Web/API/File) Schnittstelle basiert auf `Blob` und erweitert die Funktionalität, um Dateien auf dem System des Nutzers zu unterstützen. Um einen `Blob` zu erstellen, können Sie [den `Blob()` Konstruktor](/de/docs/Web/API/Blob/Blob) aufrufen.

## Abrufen eines `FormData`-Objekts aus einem HTML-Formular

Um ein `FormData`-Objekt zu erstellen, das die Daten aus einem bestehenden {{ HTMLElement("form") }} enthält, geben Sie dieses Formularelement beim Erstellen des `FormData`-Objekts an:

> **Hinweis:** `FormData` verwendet nur Eingabefelder, die das `name` Attribut haben.

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

Sie können auch zusätzliche Daten dem `FormData`-Objekt hinzufügen, nachdem es aus einem Formular abgerufen wurde, und bevor es gesendet wird, wie hier:

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

Dies ermöglicht es Ihnen, die Formulardaten vor dem Senden zu ergänzen, um zusätzliche Informationen hinzuzufügen, die nicht unbedingt vom Benutzer bearbeitbar sind.

## Senden von Dateien mit einem `FormData`-Objekt

Sie können auch Dateien unter Verwendung von `FormData` senden. Fügen Sie ein {{ HTMLElement("input") }} Element vom Typ `file` in Ihr {{htmlelement("form")}} ein:

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
      <input type="text" name="filelabel" size="12" maxlength="32" />
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

Dann können Sie sie mit folgendem Code senden:

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
> Wenn Sie eine Referenz zum Formular übergeben, wird die im Formular angegebene [HTTP-Anfragemethode](/de/docs/Web/HTTP/Methods) über die in dem `open()` Aufruf angegebene Methode verwendet.

> [!WARNING]
> Wenn Sie `FormData` verwenden, um POST-Anfragen mit [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) oder der [Fetch API](/de/docs/Web/API/Fetch_API) mit dem `multipart/form-data` Inhaltstyp zu senden (z.B. beim Hochladen von Dateien und Blobs auf den Server), setzen Sie den [`Content-Type`](/de/docs/Web/HTTP/Headers/Content-Type) Header der Anfrage _nicht_ explizit. Andernfalls wird der Browser daran gehindert, den `Content-Type` Header mit dem zu verwendenden Grenzausdruck festzulegen, der die Formularfelder im Anfragetext abgrenzen wird.

Sie können auch eine [`File`](/de/docs/Web/API/File) oder ein [`Blob`](/de/docs/Web/API/Blob) direkt zu dem [`FormData`](/de/docs/Web/API/FormData) Objekt hinzufügen, wie folgt:

```js
data.append("myfile", myBlob, "filename.txt");
```

Bei Verwendung der [`append()`](/de/docs/Web/API/FormData/append) Methode ist es möglich, den dritten optionalen Parameter zu verwenden, um einen Dateinamen im `Content-Disposition` Header zu übergeben, der an den Server gesendet wird. Wenn kein Dateiname angegeben ist (oder der Parameter nicht unterstützt wird), wird der Name "blob" verwendet.

## Verwendung eines `formdata`-Ereignisses

Das [`formdata` Ereignis](/de/docs/Web/API/HTMLFormElement/formdata_event), das neuer ist als das [`FormData`](/de/docs/Web/API/FormData) Objekt, wird auf einem [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement) Objekt ausgelöst, nachdem die Eintragsliste, die die Formulardaten darstellt, erstellt wurde. Dies geschieht, wenn das Formular übermittelt wird, kann jedoch auch durch Aufrufen eines [`FormData()`](/de/docs/Web/API/FormData/FormData) Konstruktors ausgelöst werden.

Dies ermöglicht es, ein [`FormData`](/de/docs/Web/API/FormData) Objekt schnell als Reaktion auf ein `formdata`-Ereignis zu erhalten, anstatt es selbst zusammenstellen zu müssen.

Beispielsweise können wir im JavaScript auf ein Formular verweisen:

```js
const formElem = document.querySelector("form");
```

In unserem [`submit` Ereignis](/de/docs/Web/API/HTMLFormElement/submit_event) Handler verwenden wir [`preventDefault`](/de/docs/Web/API/Event/preventDefault), um die Standard-Formularübermittlung zu stoppen, und rufen dann einen [`FormData()`](/de/docs/Web/API/FormData/FormData) Konstruktor auf, um das `formdata`-Ereignis auszulösen:

```js
formElem.addEventListener("submit", (e) => {
  // on form submission, prevent default
  e.preventDefault();

  // construct a FormData object, which fires the formdata event
  new FormData(formElem);
});
```

Wenn das `formdata`-Ereignis ausgelöst wird, können wir auf das [`FormData`](/de/docs/Web/API/FormData) Objekt mit [`FormDataEvent.formData`](/de/docs/Web/API/FormDataEvent/formData) zugreifen, um dann damit zu machen, was wir wollen (unten posten wir es auf den Server mit [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)).

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

## Tücken

Das `FormData` Objekt enthält keine Daten von deaktivierten Feldern oder von deaktivierten Fieldsets.

## Siehe auch

- [Using the Fetch API](/de/docs/Web/API/Fetch_API/Using_Fetch)
- [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement)
- [`Blob`](/de/docs/Web/API/Blob)
- [Typed Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays)
