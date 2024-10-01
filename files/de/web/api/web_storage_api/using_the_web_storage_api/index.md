---
title: Verwendung der Web Storage API
slug: Web/API/Web_Storage_API/Using_the_Web_Storage_API
l10n:
  sourceCommit: 44c4ec928281dc2d7c5ea42b7d2c74a2013f16ac
---

{{DefaultAPISidebar("Web Storage API")}}

Die Web Storage API bietet Mechanismen, mit denen Browser Schlüssel/Wert-Paare sicher speichern können.

Dieser Artikel bietet eine Anleitung zur Nutzung dieser Technologie.

## Grundkonzepte

Storage-Objekte sind einfache Schlüssel-Wert-Speicher, ähnlich wie Objekte, bleiben jedoch auch bei Seitenladevorgängen intakt. Die Schlüssel und Werte sind immer Strings (beachten Sie, dass, wie bei Objekten, Ganzzahlschlüssel automatisch in Strings konvertiert werden). Sie können diese Werte wie ein Objekt oder mit den Methoden [`Storage.getItem()`](/de/docs/Web/API/Storage/getItem) und [`Storage.setItem()`](/de/docs/Web/API/Storage/setItem) zugreifen. Diese drei Zeilen setzen alle den (gleichen) `colorSetting`-Eintrag:

```js
localStorage.colorSetting = "#a4509b";
localStorage["colorSetting"] = "#a4509b";
localStorage.setItem("colorSetting", "#a4509b");
```

> [!NOTE]
> Es wird empfohlen, die Web Storage API (`setItem`, `getItem`, `removeItem`, `key`, `length`) zu nutzen, um die [Fallstricke](https://2ality.com/2012/01/objects-as-maps.html) zu vermeiden, die mit der Verwendung von einfachen Objekten als Schlüssel-Wert-Speicher verbunden sind.

Die beiden Mechanismen innerhalb von Web Storage sind wie folgt:

- `sessionStorage` pflegt einen separaten Speicherbereich für jeden angegebenen Ursprung, der für die Dauer der Seitensitzung (solange der Browser geöffnet ist, einschließlich Seitenneuladen und -wiederherstellungen) verfügbar ist.
- `localStorage` tut dasselbe, bleibt jedoch auch erhalten, wenn der Browser geschlossen und erneut geöffnet wird.

Diese Mechanismen sind über die Eigenschaften [`Window.sessionStorage`](/de/docs/Web/API/Window/sessionStorage) und [`Window.localStorage`](/de/docs/Web/API/Window/localStorage) zugänglich (genauer gesagt implementiert in unterstützenden Browsern das `Window`-Objekt die Objekte `WindowLocalStorage` und `WindowSessionStorage`, deren Mitglieder die Eigenschaften `localStorage` und `sessionStorage` sind) — das Aufrufen eines dieser Objekte erstellt eine Instanz des [`Storage`](/de/docs/Web/API/Storage)-Objekts, über das Dateneinträge gesetzt, abgerufen und gelöscht werden können. Ein anderes Storage-Objekt wird für `sessionStorage` und `localStorage` für jeden Ursprung verwendet - sie funktionieren und werden separat gesteuert.

Wenn Sie zum Beispiel `localStorage` in einem Dokument aufrufen, wird ein [`Storage`](/de/docs/Web/API/Storage)-Objekt zurückgegeben; das Aufrufen von `sessionStorage` im selben Dokument gibt ein anderes [`Storage`](/de/docs/Web/API/Storage)-Objekt zurück. Beide können auf die gleiche Weise manipuliert werden, jedoch getrennt.

## Erkennung von localStorage-Features

Um localStorage verwenden zu können, sollten wir zunächst sicherstellen, dass es in der aktuellen Browsersitzung unterstützt und verfügbar ist.

### Verfügbarkeit testen

> [!NOTE]
> Diese API ist in den aktuellen Versionen aller großen Browser verfügbar. Das Testen auf Verfügbarkeit ist nur erforderlich, wenn Sie sehr alte Browser unterstützen müssen oder in den unten beschriebenen begrenzten Situationen.

Browser, die localStorage unterstützen, haben eine Eigenschaft im Window-Objekt mit dem Namen `localStorage`. Das bloße Bejahen, dass die Eigenschaft existiert, kann jedoch Ausnahmen werfen. Selbst wenn das `localStorage`-Objekt existiert, garantiert das nicht, dass die localStorage API tatsächlich verfügbar ist, da verschiedene Browser Einstellungen anbieten, die localStorage deaktivieren. Ein Browser kann also localStorage _unterstützen_, es jedoch nicht _verfügbar_ für die Skripte auf der Seite machen.

Zum Beispiel könnte ein Browser im privaten Modus ein leeres `localStorage`-Objekt mit einem Kontingent von Null geben, was es im Wesentlichen unbrauchbar macht. Im Gegensatz dazu könnte ein legitimer `QuotaExceededError` auftreten, der bedeutet, dass der gesamte verfügbare Speicherplatz verwendet wurde, der Speicher jedoch _tatsächlich_ _verfügbar_ ist. Unsere Feature-Erkennung sollte diese Szenarien berücksichtigen.

Hier ist eine Funktion, die erkennt, ob localStorage sowohl unterstützt als auch verfügbar ist:

```js
function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const x = "__storage_test__";
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      e.name === "QuotaExceededError" &&
      // acknowledge QuotaExceededError only if there's something already stored
      storage &&
      storage.length !== 0
    );
  }
}
```

Und so würden Sie es verwenden:

```js
if (storageAvailable("localStorage")) {
  // Yippee! We can use localStorage awesomeness
} else {
  // Too bad, no localStorage for us
}
```

Sie können auf sessionStorage testen, indem Sie `storageAvailable('sessionStorage')` aufrufen.

Sehen Sie hier eine [kurze Geschichte zur Erkennung von localStorage-Features](https://gist.github.com/paulirish/5558557).

## Beispiel

Um eine typische Nutzung von Web Storage zu veranschaulichen, haben wir ein Beispiel erstellt, das **Web Storage Demo** heißt. Die [Startseite](https://mdn.github.io/dom-examples/web-storage/) bietet Steuerelemente, die verwendet werden können, um die Farbe, die Schriftart und das dekorative Bild anzupassen:

![Web Storage Beispiel mit Textfeld zur Auswahl der Farbe durch Eingabe eines Hex-Wertes und zwei Dropdown-Menüs zur Auswahl des Schriftstils und des dekorativen Bildes.](landing.png)

Wenn Sie unterschiedliche Optionen auswählen, wird die Seite sofort aktualisiert; zusätzlich werden Ihre Auswahlmöglichkeiten in `localStorage` gespeichert, damit sie wiederhergestellt werden, wenn Sie die Seite verlassen und später erneut laden.

Wir haben auch eine [Ereignisausgabeseite](https://mdn.github.io/dom-examples/web-storage/event.html) bereitgestellt — wenn Sie diese Seite in einem anderen Tab laden und dann Änderungen auf der Startseite vornehmen, werden Sie die aktualisierten Speicherinformationen sehen, die als [`StorageEvent`](/de/docs/Web/API/StorageEvent) ausgegeben werden.

![Ereignisausgabeseite](event-output.png)

> [!NOTE]
> Neben der Live-Anzeige der Beispielseiten über die oben angegebenen Links können Sie auch den [Quellcode überprüfen](https://github.com/mdn/dom-examples/tree/main/web-storage).

### Testen, ob Ihr Speicher bereits gefüllt wurde

Zunächst testen wir in [main.js](https://github.com/mdn/dom-examples/blob/main/web-storage/main.js), ob das Speicherobjekt bereits gefüllt wurde (d. h., ob die Seite zuvor aufgerufen wurde):

```js
if (!localStorage.getItem("bgcolor")) {
  populateStorage();
} else {
  setStyles();
}
```

Die Methode [`Storage.getItem()`](/de/docs/Web/API/Storage/getItem) wird verwendet, um ein Datenelement aus dem Speicher zu holen; in diesem Fall testen wir, ob das `bgcolor`-Element existiert; wenn nicht, führen wir `populateStorage()` aus, um die vorhandenen Anpassungswerte in den Speicher zu laden. Wenn dort bereits Werte vorhanden sind, führen wir `setStyles()` aus, um das Seitenstyling mit den gespeicherten Werten zu aktualisieren.

> [!NOTE]
> Sie könnten auch [`Storage.length`](/de/docs/Web/API/Storage/length) verwenden, um zu testen, ob das Speicherobjekt leer ist oder nicht.

### Werte aus dem Speicher abrufen

Wie oben erwähnt, können Werte aus dem Speicher mit [`Storage.getItem()`](/de/docs/Web/API/Storage/getItem) abgerufen werden.
Dies nimmt den Schlüssel des Datenelements als Argument und gibt den Datenwert zurück.

Zum Beispiel:

```js
function setStyles() {
  const currentColor = localStorage.getItem("bgcolor");
  const currentFont = localStorage.getItem("font");
  const currentImage = localStorage.getItem("image");

  document.getElementById("bgcolor").value = currentColor;
  document.getElementById("font").value = currentFont;
  document.getElementById("image").value = currentImage;

  htmlElem.style.backgroundColor = `#${currentColor}`;
  pElem.style.fontFamily = currentFont;
  imgElem.setAttribute("src", currentImage);
}
```

Hier holen die ersten drei Zeilen die Werte aus dem lokalen Speicher.
Anschließend setzen wir die in den Formularelementen angezeigten Werte auf diese Werte, damit sie synchron bleiben, wenn Sie die Seite neu laden.
Schließlich aktualisieren wir die Stile/das dekorative Bild auf der Seite, sodass Ihre Anpassungsoptionen bei einem Neuladen erneut angezeigt werden.

### Werte im Speicher setzen

[`Storage.setItem()`](/de/docs/Web/API/Storage/setItem) wird sowohl zum Erstellen neuer Datenelemente als auch zum Aktualisieren bestehender Werte (falls das Datenelement bereits existiert) verwendet. Dies erfordert zwei Argumente — den Schlüssel des zu erstellenden/zu ändernden Datenelements und den Wert, der darin gespeichert werden soll.

```js
function populateStorage() {
  localStorage.setItem("bgcolor", document.getElementById("bgcolor").value);
  localStorage.setItem("font", document.getElementById("font").value);
  localStorage.setItem("image", document.getElementById("image").value);

  setStyles();
}
```

Die Funktion `populateStorage()` legt drei Elemente im lokalen Speicher fest — die Hintergrundfarbe, die Schriftart und den Bildpfad. Danach wird die Funktion `setStyles()` ausgeführt, um die Seitenstile usw. zu aktualisieren.

Wir haben auch einen `onchange`-Handler für jedes Formularelement hinzugefügt, sodass die Daten und das Styling immer dann aktualisiert werden, wenn ein Formularwert geändert wird:

```js
bgcolorForm.onchange = populateStorage;
fontForm.onchange = populateStorage;
imageForm.onchange = populateStorage;
```

`Storage` unterstützt nur das Speichern und Abrufen von Strings. Wenn Sie andere Datentypen speichern möchten, müssen Sie diese in Strings umwandeln. Für einfache Objekte und Arrays können Sie {{jsxref("JSON.stringify()")}} verwenden.

```js
const person = { name: "Alex" };
localStorage.setItem("user", person);
console.log(localStorage.getItem("user")); // "[object Object]"; not useful!
localStorage.setItem("user", JSON.stringify(person));
console.log(JSON.parse(localStorage.getItem("user"))); // { name: "Alex" }
```

Es gibt jedoch keinen generischen Weg, um beliebige Datentypen zu speichern. Außerdem ist das abgerufene Objekt eine {{Glossary("Deep_copy", "tiefe Kopie")}} des ursprünglichen Objekts und Änderungen daran beeinflussen nicht das ursprüngliche Objekt.

### Auf Speicheränderungen mit dem StorageEvent reagieren

Das [`StorageEvent`](/de/docs/Web/API/StorageEvent) wird immer dann ausgelöst, wenn eine Änderung am [`Storage`](/de/docs/Web/API/Storage)-Objekt vorgenommen wird (beachten Sie, dass dieses Ereignis nicht für Änderungen an sessionStorage ausgelöst wird). Dies funktioniert nicht auf der gleichen Seite, auf der die Änderungen vorgenommen werden — es ist wirklich eine Möglichkeit für andere Seiten auf der Domain, die den Speicher verwenden, um Änderungen zu synchronisieren, die vorgenommen werden. Seiten auf anderen Domains können nicht auf dieselben Speicherobjekte zugreifen.

Auf der Ereignisseite (siehe [events.js](https://github.com/mdn/dom-examples/blob/main/web-storage/event.js)) ist das einzige JavaScript wie folgt:

```js
window.addEventListener("storage", (e) => {
  document.querySelector(".my-key").textContent = e.key;
  document.querySelector(".my-old").textContent = e.oldValue;
  document.querySelector(".my-new").textContent = e.newValue;
  document.querySelector(".my-url").textContent = e.url;
  document.querySelector(".my-storage").textContent = JSON.stringify(
    e.storageArea,
  );
});
```

Hier fügen wir dem `window`-Objekt einen Ereignislistener hinzu, der ausgelöst wird, wenn sich das zum aktuellen Ursprung zugehörige [`Storage`](/de/docs/Web/API/Storage)-Objekt ändert. Wie Sie oben sehen können, hat das mit diesem Ereignis verbundene Ereignisobjekt eine Reihe von Eigenschaften, die nützliche Informationen enthalten — den Schlüssel der geänderten Daten, den alten Wert vor der Änderung, den neuen Wert nach dieser Änderung, die URL des Dokuments, das den Speicher geändert hat, und das Speicherobjekt selbst (das wir serialisiert haben, damit Sie seinen Inhalt sehen können).

### Löschen von Datensätzen

Web Storage bietet auch ein paar einfache Methoden zum Entfernen von Daten. Wir verwenden diese in unserem Demo nicht, aber sie sind sehr einfach in Ihr Projekt zu integrieren:

- [`Storage.removeItem()`](/de/docs/Web/API/Storage/removeItem) nimmt ein einziges Argument — den Schlüssel des zu entfernenden Datenelements — und entfernt es aus dem Speicherobjekt für diese Domain.
- [`Storage.clear()`](/de/docs/Web/API/Storage/clear) nimmt keine Argumente und leert das gesamte Speicherobjekt für diese Domain.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Storage API Startseite](/de/docs/Web/API/Web_Storage_API)
