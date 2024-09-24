---
title: Verwenden der Web-Storage-API
slug: Web/API/Web_Storage_API/Using_the_Web_Storage_API
l10n:
  sourceCommit: 44c4ec928281dc2d7c5ea42b7d2c74a2013f16ac
---

{{DefaultAPISidebar("Web Storage API")}}

Die Web-Storage-API bietet Mechanismen, mit denen Browser Schlüssel/Wert-Paare sicher speichern können.

Dieser Artikel bietet eine Schritt-für-Schritt-Anleitung zur Nutzung dieser Technologie.

## Grundkonzepte

Storage-Objekte sind einfache Key-Value-Speicher, ähnlich wie Objekte, bleiben jedoch auch nach dem Neuladen der Seite erhalten. Die Schlüssel und Werte sind immer Strings (beachten Sie, dass, wie bei Objekten, ganzzahlige Schlüssel automatisch in Strings umgewandelt werden). Sie können auf diese Werte wie auf ein Objekt zugreifen oder mit den Methoden {{domxref("Storage.getItem()")}} und {{domxref("Storage.setItem()")}}. Diese drei Zeilen setzen alle den (gleichen) Eintrag `colorSetting` fest:

```js
localStorage.colorSetting = "#a4509b";
localStorage["colorSetting"] = "#a4509b";
localStorage.setItem("colorSetting", "#a4509b");
```

> [!NOTE]
> Es wird empfohlen, die Web-Storage-API (`setItem`, `getItem`, `removeItem`, `key`, `length`) zu verwenden, um die [Fallstricke](https://2ality.com/2012/01/objects-as-maps.html) zu vermeiden, die mit der Verwendung von Objekten als Key-Value-Speicher verbunden sind.

Die zwei Mechanismen innerhalb von Web-Storage sind wie folgt:

- `sessionStorage` hält für jede gegebene Herkunft einen separaten Speicherbereich bereit, der während der gesamten Seitensitzung (solange der Browser geöffnet ist, einschließlich Neuladen und Wiederherstellung der Seite) verfügbar ist.
- `localStorage` tut dasselbe, bleibt aber auch dann bestehen, wenn der Browser geschlossen und erneut geöffnet wird.

Diese Mechanismen sind über die Eigenschaften {{domxref("Window.sessionStorage")}} und {{domxref("Window.localStorage")}} verfügbar (genauer gesagt, in unterstützten Browsern implementiert das `Window`-Objekt die Objekte `WindowLocalStorage` und `WindowSessionStorage`, deren Mitglieder die Eigenschaften `localStorage` und `sessionStorage` sind) — das Aufrufen eines dieser Objekte erstellt eine Instanz des {{domxref("Storage")}}-Objekts, über die Datenobjekte gesetzt, abgerufen und entfernt werden können. Ein separates Storage-Objekt wird für `sessionStorage` und `localStorage` für jede Herkunft verwendet — sie funktionieren und werden separat gesteuert.

Wenn man zum Beispiel `localStorage` auf einem Dokument aufruft, wird ein {{domxref("Storage")}}-Objekt zurückgegeben; das Aufrufen von `sessionStorage` auf einem Dokument gibt ein anderes {{domxref("Storage")}}-Objekt zurück. Beide können auf die gleiche Weise, aber separat manipuliert werden.

## Erkennen von localStorage

Um localStorage verwenden zu können, sollten wir zuerst überprüfen, ob es in der aktuellen Browsing-Sitzung unterstützt und verfügbar ist.

### Verfügbarkeit testen

> [!NOTE]
> Diese API ist in den aktuellen Versionen aller großen Browser verfügbar. Das Testen auf Verfügbarkeit ist nur nötig, wenn Sie sehr alte Browser unterstützen müssen oder in den begrenzten unten beschriebenen Umständen.

Browser, die localStorage unterstützen, haben eine Eigenschaft namens `localStorage` im Window-Objekt. Allerdings kann das bloße Überprüfen, ob die Eigenschaft existiert, zu Ausnahmen führen. Wenn das `localStorage`-Objekt existiert, gibt es trotzdem keine Garantie dafür, dass die localStorage-API tatsächlich verfügbar ist, da verschiedene Browser Einstellungen bieten, die localStorage deaktivieren. Ein Browser kann also localStorage _unterstützen_, es aber nicht _bereitstellen_ für die Skripte auf der Seite.

Zum Beispiel kann uns ein Browser im privaten Modus ein leeres `localStorage`-Objekt mit einem Kontingent von null geben, wodurch es im Grunde unbrauchbar wird. Umgekehrt könnten wir einen legitimen `QuotaExceededError` erhalten, was bedeutet, dass wir den gesamten verfügbaren Speicherplatz genutzt haben, aber der Speicher tatsächlich _verfügbar_ ist. Unsere Funktionsprüfung sollte diese Szenarien berücksichtigen.

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
      // QuotaExceededError nur anerkennen, wenn bereits etwas gespeichert ist
      storage &&
      storage.length !== 0
    );
  }
}
```

Und so würden Sie es verwenden:

```js
if (storageAvailable("localStorage")) {
  // Juhu! Wir können die tollen Features von localStorage nutzen
} else {
  // Leider kein localStorage für uns
}
```

Sie können stattdessen für sessionStorage testen, indem Sie `storageAvailable('sessionStorage')` aufrufen.

Hier finden Sie eine [kurze Geschichte der Funktionsprüfung von localStorage](https://gist.github.com/paulirish/5558557).

## Beispiel

Um eine typische Nutzung des Web-Speichers zu veranschaulichen, haben wir ein Beispiel erstellt, das **Web Storage Demo** genannt wird. Die [Startseite](https://mdn.github.io/dom-examples/web-storage/) bietet Steuerelemente, mit denen Sie die Farbe, Schriftart und das dekorative Bild anpassen können:

![Beispiel für Web-Speicher mit Textfeld, um die Farbe durch Eingeben eines Hex-Wertes auszuwählen, und zwei Dropdown-Menüs, um den Schriftstil und das dekorative Bild auszuwählen.](landing.png)

Wenn Sie unterschiedliche Optionen wählen, wird die Seite sofort aktualisiert; außerdem werden Ihre Auswahlen in `localStorage` gespeichert, sodass Ihre Auswahlen beim Verlassen der Seite und erneuten Laden später gespeichert bleiben.

Wir haben auch eine [Ereignisausgabeseite](https://mdn.github.io/dom-examples/web-storage/event.html) bereitgestellt — wenn Sie diese Seite in einem anderen Tab laden und dann Ihre Auswahlen auf der Startseite ändern, werden die aktualisierten Speicherinformationen ausgegeben, da ein {{domxref("StorageEvent")}} ausgelöst wird.

![Ereignisausgabeseite](event-output.png)

> [!NOTE]
> Neben dem Live-Anzeigen der Beispielseiten über die obigen Links können Sie auch [den Quellcode ansehen](https://github.com/mdn/dom-examples/tree/main/web-storage).

### Testen, ob Ihr Speicher gefüllt wurde

Zunächst testen wir in [main.js](https://github.com/mdn/dom-examples/blob/main/web-storage/main.js), ob das Speicherobjekt bereits gefüllt wurde (d. h. die Seite wurde zuvor aufgerufen):

```js
if (!localStorage.getItem("bgcolor")) {
  populateStorage();
} else {
  setStyles();
}
```

Die Methode {{domxref("Storage.getItem()")}} wird verwendet, um ein Datenobjekt aus dem Speicher abzurufen; in diesem Fall prüfen wir, ob das `bgcolor`-Element existiert; falls nicht, führen wir `populateStorage()` aus, um die bestehenden Anpassungswerte im Speicher zu speichern. Wenn bereits Werte vorhanden sind, rufen wir `setStyles()` auf, um die Seitenstile mit den gespeicherten Werten zu aktualisieren.

> [!NOTE]
> Sie können auch {{domxref("Storage.length")}} verwenden, um zu testen, ob das Speicherobjekt leer ist oder nicht.

### Werte aus dem Speicher abrufen

Wie oben erwähnt, können Werte mit {{domxref("Storage.getItem()")}} aus dem Speicher abgerufen werden. Dies nimmt den Schlüssel des Datenobjekts als Argument und gibt den Datenwert zurück.

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

Hier greifen die ersten drei Zeilen die Werte aus dem lokalen Speicher ab. Dann setzen wir die angezeigten Werte in den Formularelementen auf diese Werte, damit sie beim Neuladen der Seite synchron bleiben. Schließlich aktualisieren wir die Stile/das dekorative Bild auf der Seite, sodass Ihre Anpassungsoptionen beim erneuten Laden angezeigt werden.

### Werte im Speicher setzen

{{domxref("Storage.setItem()")}} wird sowohl zum Erstellen neuer Datenobjekte als auch (wenn das Datenobjekt bereits existiert) zur Aktualisierung bestehender Werte verwendet. Diese nimmt zwei Argumente — den Schlüssel des zu erstellenden/zu ändernden Datenobjekts und den Wert, der darin gespeichert werden soll.

```js
function populateStorage() {
  localStorage.setItem("bgcolor", document.getElementById("bgcolor").value);
  localStorage.setItem("font", document.getElementById("font").value);
  localStorage.setItem("image", document.getElementById("image").value);

  setStyles();
}
```

Die Funktion `populateStorage()` setzt drei Elemente im lokalen Speicher — die Hintergrundfarbe, die Schriftart und den Bildpfad. Anschließend führt sie die Funktion `setStyles()` aus, um die Seitenstile usw. zu aktualisieren.

Wir haben auch einen `onchange`-Handler für jedes Formularelement hinzugefügt, sodass die Daten und Stile aktualisiert werden, wann immer ein Formularwert geändert wird:

```js
bgcolorForm.onchange = populateStorage;
fontForm.onchange = populateStorage;
imageForm.onchange = populateStorage;
```

`Storage` unterstützt nur das Speichern und Abrufen von Strings. Wenn Sie andere Datentypen speichern möchten, müssen Sie diese in Strings umwandeln. Für einfache Objekte und Arrays können Sie {{jsxref("JSON.stringify()")}} verwenden.

```js
const person = { name: "Alex" };
localStorage.setItem("user", person);
console.log(localStorage.getItem("user")); // "[object Object]"; nicht nützlich!
localStorage.setItem("user", JSON.stringify(person));
console.log(JSON.parse(localStorage.getItem("user"))); // { name: "Alex" }
```

Es gibt jedoch keine generische Methode zur Speicherung beliebiger Datentypen. Außerdem ist das abgerufene Objekt eine [tiefe Kopie](/de/docs/Glossary/Deep_copy) des Originalobjekts und Änderungen daran beeinflussen das Originalobjekt nicht.

### Auf Änderungen im Speicher mit StorageEvent reagieren

Das {{domxref("StorageEvent")}} wird immer dann ausgelöst, wenn eine Änderung am {{domxref("Storage")}}-Objekt vorgenommen wird (beachten Sie, dass dieses Ereignis nicht für Änderungen in sessionStorage ausgelöst wird). Dies funktioniert nicht auf derselben Seite, auf der die Änderungen vorgenommen werden — es ist wirklich eine Möglichkeit für andere Seiten unter derselben Domain, sich mit den vorgenommenen Änderungen zu synchronisieren. Seiten auf anderen Domains können nicht auf dieselben Speicherobjekte zugreifen.

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

Hier fügen wir ein Ereignis-Listener zum `window`-Objekt hinzu, der ausgelöst wird, wenn das mit der aktuellen Herkunft verbundene {{domxref("Storage")}}-Objekt geändert wird. Wie Sie oben sehen können, hat das Ereignisobjekt, das mit diesem Ereignis verbunden ist, eine Reihe von Eigenschaften mit hilfreichen Informationen — der Schlüssel der geänderten Daten, der alte Wert vor der Änderung, der neue Wert nach der Änderung, die URL des Dokuments, das den Speicher geändert hat, und das Speicherobjekt selbst (das wir in eine Zeichenkette umgewandelt haben, damit Sie seinen Inhalt sehen können).

### Löschen von Datensätzen

Web Storage bietet auch einige einfache Methoden zum Entfernen von Daten. Wir verwenden diese in unserem Demo nicht, aber sie sind sehr einfach in Ihr Projekt hinzuzufügen:

- {{domxref("Storage.removeItem()")}} nimmt ein einziges Argument — den Schlüssel des Datenobjekts, das Sie entfernen möchten — und entfernt es aus dem Speicherobjekt für diese Domain.
- {{domxref("Storage.clear()")}} nimmt keine Argumente und leert das gesamte Speicherobjekt für diese Domain.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web-Storage-API-Startseite](/de/docs/Web/API/Web_Storage_API)
