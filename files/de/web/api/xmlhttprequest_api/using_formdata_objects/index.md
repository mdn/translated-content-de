---
title: Verwendung von FormData-Objekten
slug: Web/API/XMLHttpRequest_API/Using_FormData_Objects
l10n:
  sourceCommit: e561fa67af347b9770b359ba93e8579d2a540682
---

{{DefaultAPISidebar("XMLHttpRequest API")}}

Das [`FormData`](/de/docs/Web/API/FormData)-Objekt ermöglicht es Ihnen, eine Sammlung von Schlüssel/Wert-Paaren zu erstellen, die Sie mit der [Fetch](/de/docs/Web/API/Fetch_API)- oder der [XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest_API)-API senden können. Es ist hauptsächlich dazu bestimmt, Formulardaten zu senden, kann jedoch auch unabhängig von Formularen verwendet werden, um schlüsselbasierte Daten zu übertragen. Die übertragenen Daten haben dasselbe Format, das die {{domxref("HTMLFormElement.submit","submit()")}}-Methode verwenden würde, um die Daten zu senden, wenn der Kodierungstyp des Formulars auf `multipart/form-data` gesetzt wäre.

## Erstellen eines `FormData`-Objekts von Grund auf

Sie können ein `FormData`-Objekt selbst erstellen, es initialisieren und dann Felder durch Aufrufen seiner {{domxref("FormData.append","append()")}}-Methode hinzufügen, so wie folgt:

```js
const send = document.querySelector("#send");

send.addEventListener("click", async () => {
  const formData = new FormData();
  formData.append("username", "Groucho");
  formData.append("accountnum", 123456);

  // Ein Datei-<input>-Element
  const avatar = document.querySelector("#avatar");
  formData.append("avatar", avatar.files[0]);

  // Dateiähnliches JavaScript-Objekt
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
> Die Felder `"avatar"` und `"webmasterfile"` enthalten beide eine Datei. Die Nummer, die dem Feld `"accountnum"` zugewiesen ist, wird sofort in eine Zeichenkette umgewandelt, da dies die Methode [`FormData.append()`](/de/docs/Web/API/FormData/append) automatisch tut (der Wert eines Feldes kann ein {{ domxref("Blob") }}, {{ domxref("File") }} oder eine Zeichenkette sein. Ist der Wert weder ein `Blob` noch eine `File`, wird der Wert in eine Zeichenkette konvertiert).

Dieses Beispiel erstellt eine `FormData`-Instanz mit Werten für die Felder mit den Namen `"username"`, `"accountnum"`, `"avatar"` und `"webmasterfile"` und verwendet dann {{domxref("Window/fetch", "fetch()")}}, um die Daten des Formulars zu senden. Das Feld `"webmasterfile"` ist ein {{domxref("Blob")}}. Ein `Blob`-Objekt repräsentiert ein dateiähnliches Objekt aus unveränderlichen, rohen Daten. Blobs repräsentieren Daten, die nicht unbedingt im nativen JavaScript-Format vorliegen. Die {{ domxref("File") }}-Schnittstelle basiert auf `Blob`, erbt Blob-Funktionalität und erweitert diese, um Dateien auf dem System des Nutzers zu unterstützen. Um ein `Blob` zu erstellen, können Sie [den Konstruktor `Blob()`](/de/docs/Web/API/Blob/Blob) aufrufen.

## Abrufen eines `FormData`-Objekts aus einem HTML-Formular

Um ein `FormData`-Objekt zu konstruieren, das die Daten aus einem vorhandenen {{ HTMLElement("form") }} enthält, geben Sie dieses Formularelement bei der Erstellung des `FormData`-Objekts an:

> **Hinweis:** `FormData` wird nur Eingabefelder verwenden, die das `name`-Attribut verwenden.

```js
const formData = new FormData(someFormElement);
```

Zum Beispiel:

```js
const send = document.querySelector("#send");

send.addEventListener("click", async () => {
  // Ein <form>-Element
  const userInfo = document.querySelector("#user-info");
  const formData = new FormData(userInfo);

  const response = await fetch("http://example.org/post", {
    method: "POST",
    body: formData,
  });
  console.log(await response.json());
});
```

Sie können auch zusätzliche Daten an das `FormData`-Objekt anfügen, nachdem Sie es aus einem Formular abgerufen haben und bevor Sie es senden, so wie folgt:

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

Damit können Sie die Daten des Formulars vor dem Senden erweitern, um zusätzliche Informationen einzuschließen, die nicht unbedingt vom Benutzer bearbeitet werden können.

## Senden von Dateien mit einem `FormData`-Objekt

Sie können auch Dateien mit `FormData` senden. Fügen Sie ein {{ HTMLElement("input") }}-Element vom Typ `file` in Ihr {{htmlelement("form")}} ein:

```html
<form enctype="multipart/form-data" method="post" name="fileinfo" id="fileinfo">
  <p>
    <label
      >Ihre E-Mail-Adresse:
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
      >Benutzerdefinierte Dateibeschriftung:
      <input type="text" name="filelabel" size="12" maxlength="32" />
    </label>
  </p>
  <p>
    <label
      >Zu speichernde Datei:
      <input type="file" name="file" required />
    </label>
  </p>
  <p>
    <input type="submit" value="Datei speichern!" />
  </p>
</form>
```

Dann können Sie es mit dem folgenden Code senden:

```js
const form = document.querySelector("#fileinfo");

form.addEventListener("submit", async (event) => {
  const formData = new FormData(form);

  formData.append("CustomField", "Dies sind einige zusätzliche Daten");

  const response = await fetch("stash.php", {
    method: "POST",
    body: formData,
  });
  event.preventDefault();
});
```

> [!NOTE]
> Wenn Sie eine Referenz auf das Formular übergeben, wird die im Formular angegebene [HTTP-Anfragemethode](/de/docs/Web/HTTP/Methods) über die Methode in dem `open()`-Aufruf verwendet.

> [!WARNING]
> Wenn Sie `FormData` verwenden, um POST-Anfragen mit {{ domxref("XMLHttpRequest") }} oder der [Fetch API](/de/docs/Web/API/Fetch_API) mit dem `multipart/form-data`-Inhaltstyp (z. B. beim Hochladen von Dateien und Blobs auf den Server) zu übermitteln, sollten Sie den [`Content-Type`](/de/docs/Web/HTTP/Headers/Content-Type)-Header der Anfrage _nicht_ explizit setzen. Andernfalls kann der Browser den `Content-Type`-Header nicht mit dem Boundary-Ausdruck setzen, den er verwendet, um Formularfelder im Anfragekörper zu trennen.

Sie können auch eine {{ domxref("File") }} oder ein {{ domxref("Blob") }} direkt an das {{ domxref("FormData") }}-Objekt anhängen, so wie folgt:

```js
data.append("myfile", myBlob, "filename.txt");
```

Beim Gebrauch der {{domxref("FormData.append","append()")}}-Methode ist es möglich, den dritten optionalen Parameter zu verwenden, um einen Dateinamen im `Content-Disposition`-Header zu übermitteln, der an den Server gesendet wird. Wenn kein Dateiname angegeben ist (oder der Parameter nicht unterstützt wird), wird der Name "blob" verwendet.

## Verwendung eines `formdata`-Events

Das [`formdata`-Event](/de/docs/Web/API/HTMLFormElement/formdata_event), das neuer ist als das {{domxref("FormData")}}-Objekt, wird auf einem {{domxref("HTMLFormElement")}}-Objekt ausgelöst, nachdem die Eintragsliste, die die Daten des Formulars repräsentiert, erstellt wurde. Dies geschieht bei der Einreichung des Formulars, kann aber auch durch den Aufruf eines {{domxref("FormData.FormData", "FormData()")}}-Konstruktors ausgelöst werden.

Dies ermöglicht es, ein {{domxref("FormData")}}-Objekt direkt als Reaktion auf das Auslösen des `formdata`-Events zu erhalten, anstatt es selbst zusammenstellen zu müssen.

Zum Beispiel, in JavaScript können wir auf ein Formular verweisen:

```js
const formElem = document.querySelector("form");
```

In unserem [`submit`-Event](/de/docs/Web/API/HTMLFormElement/submit_event)-Handler verwenden wir [`preventDefault`](/de/docs/Web/API/Event/preventDefault), um die standardmäßige Formularübermittlung zu stoppen, und rufen dann einen {{domxref("FormData.FormData", "FormData()")}}-Konstruktor auf, um das `formdata`-Event zu triggern:

```js
formElem.addEventListener("submit", (e) => {
  // Bei der Formularübermittlung, Standardverhalten verhindern
  e.preventDefault();

  // Ein FormData-Objekt erstellen, welches das formdata-Event auslöst
  new FormData(formElem);
});
```

Wenn das `formdata`-Event ausgelöst wird, können wir auf das {{domxref("FormData")}}-Objekt mit {{domxref("FormDataEvent.formData")}} zugreifen und dann damit tun, was wir möchten (unten senden wir es mit {{domxref("XMLHttpRequest")}} an den Server).

```js
formElem.addEventListener("formdata", (e) => {
  console.log("formdata ausgelöst");

  // Erfassen Sie die Formulardaten aus dem Event-Objekt
  const data = e.formData;
  for (const value of data.values()) {
    console.log(value);
  }

  // Übermitteln der Daten via fetch()
  fetch("/formHandler", {
    method: "POST",
    body: data,
  });
});
```

## Tücken

Das `FormData`-Objekt enthält keine Daten aus Feldern, die deaktiviert sind, oder aus deaktivierten Fieldsets.

## Siehe auch

- [Verwendung der Fetch API](/de/docs/Web/API/Fetch_API/Using_Fetch)
- {{domxref("HTMLFormElement")}}
- {{domxref("Blob")}}
- [Typisierte Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays)
