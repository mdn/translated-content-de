---
title: Verwendung von FormData-Objekten
slug: Web/API/XMLHttpRequest_API/Using_FormData_Objects
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{DefaultAPISidebar("XMLHttpRequest API")}}

Das [`FormData`](/de/docs/Web/API/FormData) Objekt ermöglicht es Ihnen, eine Reihe von Schlüssel/Wert-Paaren zusammenzustellen, die mithilfe der [Fetch](/de/docs/Web/API/Fetch_API) oder [XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest_API) API gesendet werden können. Es ist hauptsächlich dafür gedacht, Formulardaten zu senden, kann jedoch auch unabhängig von Formularen verwendet werden, um mit Schlüsseln versehene Daten zu übertragen. Die übertragenen Daten sind im gleichen Format, das die [`submit()`](/de/docs/Web/API/HTMLFormElement/submit)-Methode des Formulars verwenden würde, wenn der Codierungstyp des Formulars auf `multipart/form-data` gesetzt wäre.

## Erstellen eines `FormData`-Objekts von Grund auf

Sie können ein `FormData`-Objekt selbst erstellen, indem Sie es instanziieren und anschließend Felder hinzufügen, indem Sie die [`append()`](/de/docs/Web/API/FormData/append)-Methode aufrufen, wie folgt:

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
> Die Felder `"avatar"` und `"webmasterFile"` beinhalten beide eine Datei. Die Nummer, die dem Feld `"accountNum"` zugewiesen wird, wird von der [`FormData.append()`](/de/docs/Web/API/FormData/append)-Methode sofort in einen String umgewandelt (der Wert des Feldes kann ein [`Blob`](/de/docs/Web/API/Blob), [`File`](/de/docs/Web/API/File) oder ein String sein. Wenn der Wert weder ein `Blob` noch eine `File` ist, wird der Wert in einen String umgewandelt).

Dieses Beispiel erstellt eine `FormData`-Instanz mit Werten für Felder mit den Namen `"username"`, `"accountNum"`, `"avatar"` und `"webmasterFile"`, und verwendet dann [`fetch()`](/de/docs/Web/API/Window/fetch), um die Daten des Formulars zu senden. Das Feld `"webmasterFile"` ist ein [`Blob`](/de/docs/Web/API/Blob). Ein `Blob`-Objekt repräsentiert ein dateiähnliches Objekt mit unveränderlichen rohen Daten. Blobs stellen Daten dar, die nicht notwendigerweise im nativen JavaScript-Format vorliegen. Das [`File`](/de/docs/Web/API/File)-Interface basiert auf `Blob`, erbt die Blob-Funktionalitäten und erweitert sie, um Dateien auf dem System des Benutzers zu unterstützen. Um ein `Blob` zu erstellen, können Sie den [den `Blob()`-Konstruktor](/de/docs/Web/API/Blob/Blob) aufrufen.

## Abrufen eines `FormData`-Objekts aus einem HTML-Formular

Um ein `FormData`-Objekt zu erstellen, das die Daten eines vorhandenen {{ HTMLElement("form") }} enthält, müssen Sie dieses Formularelement angeben, wenn Sie das `FormData`-Objekt erstellen:

> **Hinweis:** `FormData` verwendet nur Eingabefelder, die das `name`-Attribut verwenden.

```js
const formData = new FormData(someFormElement);
```

Beispielsweise:

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

Dies ermöglicht es Ihnen, die Daten des Formulars vor dem Versenden zu erweitern, um zusätzliche Informationen einzuschließen, die nicht unbedingt vom Benutzer bearbeitet werden können.

## Senden von Dateien mit einem `FormData`-Objekt

Sie können auch Dateien mit `FormData` senden. Fügen Sie in Ihrem {{htmlelement("form")}} ein {{ HTMLElement("input") }}-Element vom Typ `file` ein:

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
> Wenn Sie eine Referenz auf das Formular übergeben, wird die [HTTP-Anfragemethode](/de/docs/Web/HTTP/Reference/Methods), die im Formular angegeben ist, anstelle der in dem `open()`-Aufruf angegebenen Methode verwendet.

> [!WARNING]
> Beim Verwenden von `FormData` zum Übermitteln von POST-Anfragen mithilfe von [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) oder der [Fetch API](/de/docs/Web/API/Fetch_API) mit dem Inhaltstyp `multipart/form-data` (z.B. beim Hochladen von Dateien und Blobs auf den Server), _sollten Sie nicht_ den [`Content-Type`](/de/docs/Web/HTTP/Reference/Headers/Content-Type)-Header explizit in der Anfrage setzen. Andernfalls kann der Browser den `Content-Type`-Header mit dem Begrenzungsausdruck, den er zur Abgrenzung von Formularfeldern im Anfrage-Body verwendet, nicht setzen.

Sie können auch eine [`File`](/de/docs/Web/API/File) oder ein [`Blob`](/de/docs/Web/API/Blob) direkt dem [`FormData`](/de/docs/Web/API/FormData)-Objekt hinzufügen, wie folgt:

```js
data.append("myfile", myBlob, "filename.txt");
```

Beim Verwenden der [`append()`](/de/docs/Web/API/FormData/append)-Methode ist es möglich, den dritten optionalen Parameter zu verwenden, um einen Dateinamen im `Content-Disposition`-Header zu übergeben, der an den Server gesendet wird. Wenn kein Dateiname angegeben ist (oder der Parameter nicht unterstützt wird), wird der Name "blob" verwendet.

## Verwendung eines `formdata`-Ereignisses

Das [`formdata`-Ereignis](/de/docs/Web/API/HTMLFormElement/formdata_event), das neuer als das [`FormData`](/de/docs/Web/API/FormData)-Objekt ist, wird auf einem [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement) ausgelöst, nachdem die Eintragsliste, die die Daten des Formulars repräsentiert, erstellt wurde. Dies geschieht, wenn das Formular übermittelt wird, kann aber auch durch den Aufruf eines [`FormData()`](/de/docs/Web/API/FormData/FormData)-Konstruktors ausgelöst werden.

Dies ermöglicht es, ein [`FormData`](/de/docs/Web/API/FormData)-Objekt schnell als Reaktion auf das Auslösen eines `formdata`-Ereignisses zu erhalten, anstatt es selbst zusammenstellen zu müssen.

Zum Beispiel können wir im JavaScript auf ein Formular referenzieren:

```js
const formElem = document.querySelector("form");
```

In unserem [`submit`-Ereignishandler](/de/docs/Web/API/HTMLFormElement/submit_event) verwenden wir [`preventDefault`](/de/docs/Web/API/Event/preventDefault), um die Standardformularübermittlung zu stoppen, und rufen dann einen [`FormData()`](/de/docs/Web/API/FormData/FormData)-Konstruktor auf, um das `formdata`-Ereignis auszulösen:

```js
formElem.addEventListener("submit", (e) => {
  // on form submission, prevent default
  e.preventDefault();

  // construct a FormData object, which fires the formdata event
  new FormData(formElem);
});
```

Wenn das `formdata`-Ereignis ausgelöst wird, können wir auf das [`FormData`](/de/docs/Web/API/FormData)-Objekt mit [`FormDataEvent.formData`](/de/docs/Web/API/FormDataEvent/formData) zugreifen, und dann damit machen, was wir möchten (unten senden wir es mit [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) an den Server).

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
