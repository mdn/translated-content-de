---
title: Verwenden der Web Storage API
slug: Web/API/Web_Storage_API/Using_the_Web_Storage_API
l10n:
  sourceCommit: 940b352725f7e803b194af619702071630f3d6a6
---

{{DefaultAPISidebar("Web Storage API")}}

Die Web Storage API bietet Mechanismen, mit denen Browser Schlüssel/Wert-Paare sicher speichern können.

Dieser Artikel bietet eine Schritt-für-Schritt-Anleitung zur Nutzung dieser Technologie.

## Grundkonzepte

Storage-Objekte sind einfache Schlüssel-Wert-Speicher, ähnlich wie Objekte, bleiben aber auch bei Seitenladevorgängen erhalten. Die Schlüssel und die Werte sind immer Strings (beachten Sie, dass wie bei Objekten ganze Zahlenschlüssel automatisch in Strings umgewandelt werden). Sie können auf diese Werte wie auf ein Objekt zugreifen oder mit den Methoden [`Storage.getItem()`](/de/docs/Web/API/Storage/getItem) und [`Storage.setItem()`](/de/docs/Web/API/Storage/setItem). Diese drei Zeilen setzen alle den (gleichen) Eintrag `colorSetting`:

```js
localStorage.colorSetting = "#a4509b";
localStorage["colorSetting"] = "#a4509b";
localStorage.setItem("colorSetting", "#a4509b");
```

> [!NOTE]
> Es wird empfohlen, die Web Storage API (`setItem`, `getItem`, `removeItem`, `key`, `length`) zu verwenden, um die [Fallstricke](https://2ality.com/2012/01/objects-as-maps.html) zu vermeiden, die mit der Verwendung von einfachen Objekten als Schlüssel-Wert-Speicher verbunden sind.

Die zwei Mechanismen innerhalb von Web Storage sind wie folgt:

- `sessionStorage` behält einen separaten Speicherbereich für den jeweiligen Origin bei, der für die Dauer der Sitzung der Seite verfügbar ist (solange der Browser geöffnet ist, einschließlich Seiten-Reloads und -Wiederherstellungen).
- `localStorage` tut dasselbe, bleibt jedoch erhalten, auch wenn der Browser geschlossen und wieder geöffnet wird.

Diese Mechanismen sind über die Eigenschaften [`Window.sessionStorage`](/de/docs/Web/API/Window/sessionStorage) und [`Window.localStorage`](/de/docs/Web/API/Window/localStorage) verfügbar (genauer gesagt implementiert in unterstützenden Browsern das `Window`-Objekt die Objekte `WindowLocalStorage` und `WindowSessionStorage`, von denen `localStorage` und `sessionStorage` Mitglieder sind) — das Aufrufen eines dieser Objekte erstellt eine Instanz des [`Storage`](/de/docs/Web/API/Storage)-Objekts, über das Datenelemente gesetzt, abgerufen und entfernt werden können. Ein unterschiedliches Storage-Objekt wird für `sessionStorage` und `localStorage` für jeden Origin verwendet — sie funktionieren und werden separat gesteuert.

Beispielsweise wird beim ersten Aufruf von `localStorage` bei einem Dokument ein [`Storage`](/de/docs/Web/API/Storage)-Objekt zurückgegeben; beim Aufruf von `sessionStorage` bei einem Dokument wird ein anderes [`Storage`](/de/docs/Web/API/Storage)-Objekt zurückgegeben. Beide können auf die gleiche Art und Weise, aber getrennt, manipuliert werden.

## Erkennen von localStorage-Funktionen

Um `localStorage` verwenden zu können, sollten wir zunächst überprüfen, ob es in der aktuellen Browsersitzung unterstützt und verfügbar ist.

### Testen der Verfügbarkeit

Browser, die `localStorage` unterstützen, verfügen über eine Eigenschaft im `window`-Objekt namens `localStorage`. Das bloße Testen, ob die Eigenschaft existiert, wie bei der normalen Feature-Erkennung, kann jedoch unzureichend sein. Verschiedene Browser bieten Einstellungen, die die Storage-API deaktivieren, ohne das globale Objekt zu verstecken. Ein Browser kann also `localStorage` _unterstützen_, aber nicht _verfügbar_ für die Skripte auf der Seite machen.

In einem Dokument, das im privaten Browsing-Modus eines Browsers angezeigt wird, könnten uns einige Browser zum Beispiel ein leeres `localStorage`-Objekt mit einem Kontingent von null geben, was es effektiv unbrauchbar macht. Umgekehrt könnten wir einen legitimen `QuotaExceededError` erhalten, was bedeutet, dass wir den gesamten verfügbaren Speicherplatz aufgebraucht haben, aber Speicher ist _tatsächlich_ _verfügbar_. Unsere Feature-Erkennung sollte diese Szenarien berücksichtigen.

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

Sie können stattdessen für `sessionStorage` testen, indem Sie `storageAvailable("sessionStorage")` aufrufen.

## Beispiel

Um einige typische Web Storage-Nutzungen zu veranschaulichen, haben wir ein Beispiel erstellt, das fantasievoll **Web Storage Demo** genannt wird. Die [Startseite](https://mdn.github.io/dom-examples/web-storage/) bietet Steuerungen, mit denen die Farbe, Schriftart und dekorative Bild angepasst werden können:

![Beispiel für Web Storage mit einem Textfeld zur Auswahl der Farbe durch Eingabe eines Hex-Wertes und zwei Dropdown-Menüs zur Auswahl des Schriftartstils und des dekorativen Bildes.](landing.png)

Wenn Sie verschiedene Optionen wählen, wird die Seite sofort aktualisiert; zusätzlich werden Ihre Auswahloptionen in `localStorage` gespeichert, sodass sie beim Verlassen und erneuten Laden der Seite später beibehalten werden.

Wir haben auch eine [Ereignisausgabeseite](https://mdn.github.io/dom-examples/web-storage/event.html) bereitgestellt — wenn Sie diese Seite in einem anderen Tab laden und dann Änderungen an Ihren Auswahloptionen auf der Startseite vornehmen, wird Ihnen die aktualisierte Speicherinformation als [`StorageEvent`](/de/docs/Web/API/StorageEvent) angezeigt, das ausgelöst wird.

![Ereignisausgabeseite](event-output.png)

> [!NOTE]
> Zusätzlich zur Live-Ansicht der Beispielseiten über die obigen Links können Sie auch den [Quellcode einsehen](https://github.com/mdn/dom-examples/tree/main/web-storage).

### Prüfen, ob Ihr Speicher gefüllt ist

Zu Beginn testen wir in [main.js](https://github.com/mdn/dom-examples/blob/main/web-storage/main.js), ob das Storage-Objekt bereits gefüllt wurde (d. h. ob die Seite zuvor aufgerufen wurde):

```js
if (!localStorage.getItem("bgcolor")) {
  populateStorage();
} else {
  setStyles();
}
```

Die Methode [`Storage.getItem()`](/de/docs/Web/API/Storage/getItem) wird verwendet, um ein Datenelement aus dem Speicher zu holen; in diesem Fall testen wir, ob das Element `bgcolor` existiert; wenn nicht, führen wir `populateStorage()` aus, um die vorhandenen Anpassungswerte in den Speicher hinzuzufügen. Wenn bereits Werte vorhanden sind, führen wir `setStyles()` aus, um das Seitenstyling mit den gespeicherten Werten zu aktualisieren.

> [!NOTE]
> Sie könnten auch [`Storage.length`](/de/docs/Web/API/Storage/length) verwenden, um zu überprüfen, ob das Storage-Objekt leer ist.

### Abrufen von Werten aus dem Speicher

Wie oben erwähnt, können Werte mit [`Storage.getItem()`](/de/docs/Web/API/Storage/getItem) aus dem Speicher abgerufen werden.
Dies erfordert den Schlüssel des Datenelements als Argument und gibt den Datenwert zurück.

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

Hier greifen die ersten drei Zeilen die Werte aus dem lokalen Speicher ab.
Anschließend setzen wir die in den Formularelementen angezeigten Werte auf diese Werte, damit sie beim Neuladen der Seite synchron bleiben.
Schließlich aktualisieren wir die Stile/das dekorative Bild auf der Seite, sodass Ihre Anpassungsoptionen beim Neuladen erneut angezeigt werden.

### Festlegen von Werten im Speicher

[`Storage.setItem()`](/de/docs/Web/API/Storage/setItem) wird sowohl zum Erstellen neuer Datenelemente als auch (falls das Datenelement bereits vorhanden ist) zum Aktualisieren bestehender Werte verwendet. Es erfordert zwei Argumente — den Schlüssel des zu erstellenden/zu modifizierenden Datenelements und den Wert, der gespeichert werden soll.

```js
function populateStorage() {
  localStorage.setItem("bgcolor", document.getElementById("bgcolor").value);
  localStorage.setItem("font", document.getElementById("font").value);
  localStorage.setItem("image", document.getElementById("image").value);

  setStyles();
}
```

Die Funktion `populateStorage()` setzt drei Elemente im lokalen Speicher — die Hintergrundfarbe, die Schriftart und den Bildpfad. Danach wird die Funktion `setStyles()` ausgeführt, um die Seitenstile usw. zu aktualisieren.

Wir haben auch einen `onchange`-Handler an jedem Formularelement hinzugefügt, damit die Daten und das Styling jedes Mal, wenn ein Formularwert geändert wird, aktualisiert werden:

```js
bgcolorForm.onchange = populateStorage;
fontForm.onchange = populateStorage;
imageForm.onchange = populateStorage;
```

`Storage` unterstützt nur das Speichern und Abrufen von Strings. Wenn Sie andere Datentypen speichern möchten, müssen Sie sie in Strings umwandeln. Für einfache Objekte und Arrays können Sie {{jsxref("JSON.stringify()")}} verwenden.

```js
const person = { name: "Alex" };
localStorage.setItem("user", person);
console.log(localStorage.getItem("user")); // "[object Object]"; not useful!
localStorage.setItem("user", JSON.stringify(person));
console.log(JSON.parse(localStorage.getItem("user"))); // { name: "Alex" }
```

Es gibt jedoch keine generische Methode zum Speichern beliebiger Datentypen. Darüber hinaus ist das abgerufene Objekt eine {{Glossary("Deep_copy", "tiefe Kopie")}} des ursprünglichen Objekts und Änderungen daran wirken sich nicht auf das ursprüngliche Objekt aus.

### Reagieren auf Speicheränderungen mit dem StorageEvent

Das [`storage`](/de/docs/Web/API/Window/storage_event)-Ereignis wird ausgelöst, wenn eine Änderung am [`Storage`](/de/docs/Web/API/Storage)-Objekt von einem anderen Dokument vorgenommen wird, das denselben Speicherbereich teilt. Dies funktioniert nicht auf der gleichen Seite, die die Änderungen vornimmt — es ist wirklich eine Möglichkeit für andere Seiten im Origin, die den Speicher nutzen, eventuelle Änderungen zu synchronisieren, die vorgenommen werden. Seiten auf anderen Origins können nicht auf dieselben Speicherobjekte zugreifen.

Für `localStorage` wird der Speicherbereich zwischen allen Tabs mit demselben Ursprung geteilt. Für `sessionStorage` wird der Speicherbereich nur innerhalb des Tabs geteilt, unter allen iframes vom gleichen Ursprung.

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

Hier fügen wir dem `window`-Objekt einen Ereignislistener hinzu, der ausgelöst wird, wenn das `Storage`-Objekt, das mit dem aktuellen Ursprung verknüpft ist, geändert wird. Wie oben zu sehen, enthält das mit diesem Ereignis verknüpfte Event-Objekt eine Reihe von Eigenschaften mit nützlichen Informationen — den Schlüssel der Daten, die geändert wurden, den alten Wert vor der Änderung, den neuen Wert nach dieser Änderung, die URL des Dokuments, das den Speicher geändert hat, und das Storage-Objekt selbst (das wir serialisiert haben, damit Sie seinen Inhalt sehen können).

### Löschen von Datensätzen

Web Storage bietet auch ein paar einfache Methoden zum Entfernen von Daten. Wir verwenden diese in unserem Demo nicht, aber sie lassen sich sehr einfach zu Ihrem Projekt hinzufügen:

- [`Storage.removeItem()`](/de/docs/Web/API/Storage/removeItem) erfordert ein einziges Argument — den Schlüssel des zu entfernenden Datenelements — und entfernt es aus dem Speicherobjekt für diesen Ursprung.
- [`Storage.clear()`](/de/docs/Web/API/Storage/clear) erfordert keine Argumente und leert das gesamte Speicherobjekt für diesen Ursprung.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Storage API Startseite](/de/docs/Web/API/Web_Storage_API)
