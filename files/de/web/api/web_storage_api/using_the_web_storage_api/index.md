---
title: Verwendung der Web Storage API
slug: Web/API/Web_Storage_API/Using_the_Web_Storage_API
l10n:
  sourceCommit: cfee421b61f247bf45a048b2c80b1c195345c519
---

{{DefaultAPISidebar("Web Storage API")}}

Die Web Storage API bietet Mechanismen, durch die Browser Schlüssel/Wert-Paare sicher speichern können.

Dieser Artikel bietet eine Schritt-für-Schritt-Anleitung zur Nutzung dieser Technologie.

## Grundkonzepte

Storage-Objekte sind einfache Key-Value-Stores, ähnlich wie Objekte, bleiben aber über Seitenladungen hinweg intakt. Die Schlüssel und die Werte sind immer Strings (beachten Sie, dass, wie bei Objekten, ganzzahlige Schlüssel automatisch in Strings umgewandelt werden). Sie können auf diese Werte wie auf ein Objekt zugreifen oder mit den Methoden [`Storage.getItem()`](/de/docs/Web/API/Storage/getItem) und [`Storage.setItem()`](/de/docs/Web/API/Storage/setItem). Diese drei Zeilen setzen alle denselben Eintrag colorSetting:

```js
localStorage.colorSetting = "#a4509b";
localStorage["colorSetting"] = "#a4509b";
localStorage.setItem("colorSetting", "#a4509b");
```

> [!NOTE]
> Sie sollten immer die Web Storage API (`setItem()`, `getItem()`, `removeItem()`, `key`, `length`) anstelle des direkten Zugriffs auf Objekteigenschaften wie `localStorage.key = value` oder `localStorage["key"] = value` verwenden.
> Dies vermeidet die Fallstricke, ein Objekt zu übergeben, wie z. B. die Kollision mit nativ eingebauten Methoden (wie `.clear()` oder `.getItem()`), unerwartete Datenlecks durch Prototyp-Vererbung und Sicherheitslücken wie Prototypenverschmutzung beim Umgang mit unzuverlässigen Benutzereingaben.

Die zwei Mechanismen innerhalb der Web Storage sind wie folgt:

- `sessionStorage` hält einen separaten Speicherbereich für jeden gegebenen Ursprung, der für die Dauer der Seitensitzung verfügbar ist (solange der Browser geöffnet ist, einschließlich Seitenneuladungen und -wiederherstellungen).
- `localStorage` tut dasselbe, bleibt jedoch bestehen, auch wenn der Browser geschlossen und wieder geöffnet wird.

Diese Mechanismen sind über die Eigenschaften [`Window.sessionStorage`](/de/docs/Web/API/Window/sessionStorage) und [`Window.localStorage`](/de/docs/Web/API/Window/localStorage) verfügbar (genauer gesagt, in unterstützenden Browsern implementiert das `Window`-Objekt die Objekte `WindowLocalStorage` und `WindowSessionStorage`, deren Mitglieder die Eigenschaften `localStorage` und `sessionStorage` sind) — das Aufrufen einer dieser Eigenschaften erstellt eine Instanz des [`Storage`](/de/docs/Web/API/Storage)-Objekts, über die Datenobjekte gesetzt, abgerufen und entfernt werden können. Ein anderes Storage-Objekt wird für das `sessionStorage` und `localStorage` für jeden Ursprung verwendet — sie funktionieren und werden separat gesteuert.

Wenn Sie also zunächst `localStorage` in einem Dokument aufrufen, wird ein [`Storage`](/de/docs/Web/API/Storage)-Objekt zurückgegeben; das Aufrufen von `sessionStorage` in einem Dokument wird ein anderes [`Storage`](/de/docs/Web/API/Storage)-Objekt zurückgeben. Beide können auf dieselbe Weise manipuliert werden, jedoch getrennt.

## Lokale Speicherung auf Funktionsfähigkeit überprüfen

Um `localStorage` nutzen zu können, sollten wir zuerst überprüfen, ob es in der aktuellen Browsersitzung unterstützt und verfügbar ist.

### Verfügbarkeit testen

Browser, die `localStorage` unterstützen, haben eine Eigenschaft im Fensterobjekt namens `localStorage`. Das bloße Testen, ob die Eigenschaft existiert, wie bei der normalen Funktionsüberprüfung, kann jedoch unzureichend sein. Verschiedene Browser bieten Einstellungen, die die Storage-API deaktivieren, ohne das globale Objekt zu verbergen. Ein Browser kann `localStorage` also _unterstützen_, aber es den Skripten auf der Seite nicht _verfügbar_ machen.

Beispielsweise können einige Browser uns in einem Dokument, das im privaten Modus eines Browsers angesehen wird, ein leeres `localStorage`-Objekt mit einem Kontingent von Null geben, was es effektiv unbrauchbar macht. Im Gegenzug könnten wir einen legitimierten `QuotaExceededError` erhalten, was bedeutet, dass wir den gesamten verfügbaren Speicherplatz aufgebraucht haben, der Speicher _ist_ jedoch tatsächlich _verfügbar_. Unsere Funktionsprüfung sollte diese Szenarien berücksichtigen.

Hier ist eine Funktion, die erkennt, ob `localStorage` sowohl unterstützt als auch verfügbar ist:

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

Sie können für `sessionStorage` testen, indem Sie `storageAvailable("sessionStorage")` aufrufen.

## Beispiel

Um eine typische Verwendung von Web Storage zu veranschaulichen, haben wir ein Beispiel erstellt, das **Web Storage Demo** heißt. Die [Startseite](https://mdn.github.io/dom-examples/web-storage/) bietet Steuerungen, mit denen Sie die Farbe, die Schriftart und das dekorative Bild anpassen können:

![Beispiel für Web Storage mit einem Textfeld, um die Farbe durch Eingabe eines Hex-Werts auszuwählen, und zwei Dropdown-Menüs, um den Schriftstil und das dekorative Bild auszuwählen.](landing.png)

Wenn Sie verschiedene Optionen auswählen, wird die Seite sofort aktualisiert; zusätzlich werden Ihre Auswahlmöglichkeiten in `localStorage` gespeichert, sodass Ihre Auswahl erinnert wird, wenn Sie die Seite verlassen und später erneut laden.

Wir haben auch eine [Ereignisausgabeseite](https://mdn.github.io/dom-examples/web-storage/event.html) bereitgestellt — wenn Sie diese Seite in einem anderen Tab laden und dann Ihre Auswahl auf der Startseite ändern, wird die aktualisierte Speicherdateninformation ausgegeben, sobald ein [`StorageEvent`](/de/docs/Web/API/StorageEvent) ausgelöst wird.

![Ereignisausgabeseite](event-output.png)

> [!NOTE]
> Neben der Live-Ansicht der Beispielseiten mit den obigen Links können Sie auch [den Quellcode überprüfen](https://github.com/mdn/dom-examples/tree/main/web-storage).

### Testen, ob Ihr Speicher befüllt wurde

Zu Beginn testen wir in [main.js](https://github.com/mdn/dom-examples/blob/main/web-storage/main.js), ob das Speicherobjekt bereits befüllt wurde (d.h. die Seite wurde zuvor aufgerufen):

```js
if (!localStorage.getItem("bgcolor")) {
  populateStorage();
} else {
  setStyles();
}
```

Die Methode [`Storage.getItem()`](/de/docs/Web/API/Storage/getItem) wird verwendet, um ein Datenobjekt aus dem Speicher abzurufen; in diesem Fall testen wir, ob das `bgcolor`-Element existiert; falls nicht, führen wir `populateStorage()` aus, um die vorhandenen Anpassungswerte in den Speicher einzutragen. Wenn bereits Werte vorhanden sind, führen wir `setStyles()` aus, um das Seitenstyling mit den gespeicherten Werten zu aktualisieren.

> [!NOTE]
> Sie könnten auch [`Storage.length`](/de/docs/Web/API/Storage/length) verwenden, um zu testen, ob das Speicherobjekt leer ist oder nicht.

### Werte aus dem Speicher abrufen

Wie oben erwähnt, können Werte aus dem Speicher mit [`Storage.getItem()`](/de/docs/Web/API/Storage/getItem) abgerufen werden. Dies erfordert den Schlüssel des Datenobjekts als Argument und gibt den Datenwert zurück.

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

Hier holen sich die ersten drei Zeilen die Werte aus dem lokalen Speicher. Danach setzen wir die Werte, die in den Formularelementen angezeigt werden, auf diese Werte, sodass sie synchron bleiben, wenn Sie die Seite neu laden. Schließlich aktualisieren wir die Stile/dekorative Bilder auf der Seite, sodass Ihre Anpassungsoptionen beim erneuten Laden wieder angezeigt werden.

### Werte im Speicher setzen

[`Storage.setItem()`](/de/docs/Web/API/Storage/setItem) wird sowohl zum Erstellen neuer Datenobjekte als auch (wenn das Datenobjekt bereits existiert) zum Aktualisieren bestehender Werte verwendet. Dies erfordert zwei Argumente: den Schlüssel des zu erstellenden/zu ändernden Datenobjekts und den Wert, der darin gespeichert werden soll.

```js
function populateStorage() {
  localStorage.setItem("bgcolor", document.getElementById("bgcolor").value);
  localStorage.setItem("font", document.getElementById("font").value);
  localStorage.setItem("image", document.getElementById("image").value);

  setStyles();
}
```

Die Funktion `populateStorage()` setzt drei Elemente im lokalen Speicher — die Hintergrundfarbe, Schriftart und den Bildpfad. Anschließend wird die Funktion `setStyles()` ausgeführt, um die Seitenstile usw. zu aktualisieren.

Wir haben auch einen `onchange`-Handler an jedes Formularelement angehängt, sodass die Daten und das Styling aktualisiert werden, sobald ein Formularwert geändert wird:

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

Es gibt jedoch keine generische Möglichkeit, beliebige Datentypen zu speichern. Darüber hinaus ist das zurückgegebene Objekt eine {{Glossary("Deep_copy", "tiefe Kopie")}} des ursprünglichen Objekts und Änderungen daran wirken sich nicht auf das ursprüngliche Objekt aus.

### Auf Speicheränderungen mit StorageEvent reagieren

Das [`storage`](/de/docs/Web/API/Window/storage_event) Ereignis wird ausgelöst, wenn eine Änderung an dem [`Storage`](/de/docs/Web/API/Storage)-Objekt eines anderen Dokuments vorgenommen wird, das denselben Speicherbereich teilt. Dies funktioniert nicht auf derselben Seite, die die Änderungen vornimmt — es ist wirklich eine Möglichkeit, andere Seiten der Herkunft, die den Speicher verwenden, mit den vorgenommenen Änderungen zu synchronisieren. Seiten anderer Ursprünge können nicht auf dieselben Speicherobjekte zugreifen.

Für `localStorage` wird der Speicherbereich zwischen allen Tabs mit demselben Ursprung geteilt. Für `sessionStorage` wird der Speicherbereich nur innerhalb des Tabs geteilt, unter allen iframes des gleichen Ursprungs.

Auf der Ereignisseite (siehe [events.js](https://github.com/mdn/dom-examples/blob/main/web-storage/event.js)) besteht das einzige JavaScript wie folgt:

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

Hier fügen wir dem `window`-Objekt einen Ereignislistener hinzu, der ausgelöst wird, wenn das [`Storage`](/de/docs/Web/API/Storage)-Objekt, das mit dem aktuellen Ursprung verwandt ist, geändert wird. Wie Sie oben sehen können, verfügt das mit diesem Ereignis verknüpfte Ereignisobjekt über eine Reihe von Eigenschaften, die nützliche Informationen enthalten — den Schlüssel der veränderten Daten, den alten Wert vor der Änderung, den neuen Wert nach der Änderung, die URL des Dokuments, das den Speicher verändert hat, und das Speicherobjekt selbst (das wir stringifiziert haben, damit Sie seinen Inhalt sehen können).

### Datenaufzeichnungen löschen

Web Storage bietet auch einige einfache Methoden, um Daten zu entfernen. Wir verwenden diese in unserem Demo nicht, aber sie lassen sich sehr einfach in Ihr Projekt integrieren:

- [`Storage.removeItem()`](/de/docs/Web/API/Storage/removeItem) nimmt ein einziges Argument an — den Schlüssel des Datenobjekts, das Sie entfernen möchten — und entfernt es aus dem Speicherobjekt für diesen Ursprung.
- [`Storage.clear()`](/de/docs/Web/API/Storage/clear) nimmt keine Argumente an und leert das gesamte Speicherobjekt für diesen Ursprung.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Storage API Startseite](/de/docs/Web/API/Web_Storage_API)
