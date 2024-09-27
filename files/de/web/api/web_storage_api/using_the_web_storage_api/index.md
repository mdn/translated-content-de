---
title: Die Verwendung der Web Storage API
slug: Web/API/Web_Storage_API/Using_the_Web_Storage_API
l10n:
  sourceCommit: 44c4ec928281dc2d7c5ea42b7d2c74a2013f16ac
---

{{DefaultAPISidebar("Web Storage API")}}

Die Web Storage API bietet Mechanismen, durch die Browser Schlüssel/Wert-Paare sicher speichern können.

Dieser Artikel bietet eine Anleitung zur Nutzung dieser Technologie.

## Grundlegende Konzepte

Speicherobjekte sind einfache Schlüssel-Wert-Speicher, ähnlich zu Objekten, aber sie bleiben durch Seitenladevorgänge hinweg intakt. Die Schlüssel und Werte sind immer Zeichenfolgen (beachten Sie, dass, wie bei Objekten, ganze Schlüssel automatisch in Zeichenfolgen umgewandelt werden). Sie können auf diese Werte wie auf ein Objekt zugreifen oder mit den Methoden [`Storage.getItem()`](/de/docs/Web/API/Storage/getItem) und [`Storage.setItem()`](/de/docs/Web/API/Storage/setItem). Diese drei Zeilen setzen alle den (gleichen) Eintrag "colorSetting":

```js
localStorage.colorSetting = "#a4509b";
localStorage["colorSetting"] = "#a4509b";
localStorage.setItem("colorSetting", "#a4509b");
```

> [!NOTE]
> Es wird empfohlen, die Web Storage API (`setItem`, `getItem`, `removeItem`, `key`, `length`) zu verwenden, um die [Fallstricke](https://2ality.com/2012/01/objects-as-maps.html) zu vermeiden, die mit der Verwendung von einfachen Objekten als Schlüssel-Wert-Speicher verbunden sind.

Die zwei Mechanismen innerhalb von Web Storage sind wie folgt:

- `sessionStorage` hält einen separaten Speicherbereich für jeden gegebenen Ursprung vor, der für die Dauer der Seitensitzung verfügbar ist (solange der Browser geöffnet ist, einschließlich Seiten-Neuladungen und -Wiederherstellungen).
- `localStorage` macht dasselbe, bleibt jedoch auch erhalten, wenn der Browser geschlossen und wieder geöffnet wird.

Diese Mechanismen sind über die Eigenschaften [`Window.sessionStorage`](/de/docs/Web/API/Window/sessionStorage) und [`Window.localStorage`](/de/docs/Web/API/Window/localStorage) verfügbar (genauer gesagt, in unterstützenden Browsern implementiert das `Window`-Objekt die `WindowLocalStorage`- und `WindowSessionStorage`-Objekte, deren Mitglieder die Eigenschaften `localStorage` und `sessionStorage` sind) — das Aufrufen eines dieser Objekte erstellt eine Instanz des [`Storage`](/de/docs/Web/API/Storage)-Objekts, über das Dateneinträge gesetzt, abgerufen und entfernt werden können. Für den `sessionStorage` und `localStorage` wird für jeden Ursprung ein anderes Storage-Objekt verwendet – sie funktionieren und werden separat gesteuert.

Zum Beispiel gibt anfangs das Aufrufen von `localStorage` auf einem Dokument ein [`Storage`](/de/docs/Web/API/Storage)-Objekt zurück; das Aufrufen von `sessionStorage` auf einem Dokument gibt ein anderes [`Storage`](/de/docs/Web/API/Storage)-Objekt zurück. Beide können auf die gleiche Weise, aber separat, manipuliert werden.

## Feature-Erkennung von localStorage

Um localStorage nutzen zu können, sollten wir zunächst sicherstellen, dass es in der aktuellen Browsersitzung unterstützt und verfügbar ist.

### Verfügbarkeit testen

> [!NOTE]
> Diese API ist in aktuellen Versionen aller wichtigen Browser verfügbar. Das Testen auf Verfügbarkeit ist nur notwendig, wenn Sie sehr alte Browser unterstützen müssen oder in den unten beschriebenen begrenzten Umständen.

Browser, die localStorage unterstützen, haben eine Eigenschaft im window-Objekt namens `localStorage`. Allerdings kann das bloße Behaupten, dass die Eigenschaft existiert, Ausnahmen auslösen. Wenn das `localStorage`-Objekt existiert, gibt es immer noch keine Garantie dafür, dass die localStorage-API tatsächlich verfügbar ist, da verschiedene Browser Einstellungen bieten, die localStorage deaktivieren. Ein Browser kann also localStorage _unterstützen_, es aber nicht _verfügbar_ machen für die Skripte auf der Seite.

Zum Beispiel könnte uns bei einem Dokument, das im privaten Browsing-Modus eines Browsers betrachtet wird, ein leeres `localStorage`-Objekt mit einem Kontingent von null gegeben werden, was es effektiv unbrauchbar macht. Umgekehrt könnten wir eine legitime `QuotaExceededError` erhalten, was bedeutet, dass wir den gesamten verfügbaren Speicherplatz aufgebraucht haben, der Speicher aber tatsächlich _verfügbar_ ist. Unsere Feature-Erkennung sollte diese Szenarien berücksichtigen.

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

Und hier sehen Sie, wie Sie sie verwenden würden:

```js
if (storageAvailable("localStorage")) {
  // Yippee! We can use localStorage awesomeness
} else {
  // Too bad, no localStorage for us
}
```

Sie können `sessionStorage` stattdessen testen, indem Sie `storageAvailable('sessionStorage')` aufrufen.

Hier finden Sie eine [kurze Geschichte der Feature-Erkennung von localStorage](https://gist.github.com/paulirish/5558557).

## Beispiel

Um einige typische Verwendungen der Web Storage zu veranschaulichen, haben wir ein Beispiel erstellt, das fantasievoll **Web Storage Demo** genannt wird. Die [Startseite](https://mdn.github.io/dom-examples/web-storage/) bietet Steuerungen, mit denen die Farbe, Schriftart und das dekorative Bild angepasst werden können:

![Web Storage Beispiel mit Textfeld zum Eingeben eines Hex-Werts für die Farbe und zwei Dropdown-Menüs zur Auswahl des Schriftschnitts und des dekorativen Bildes.](landing.png)

Wenn Sie verschiedene Optionen auswählen, wird die Seite sofort aktualisiert; zudem werden Ihre Auswahl in `localStorage` gespeichert, sodass sie beim späteren Verlassen und erneuten Laden der Seite in Erinnerung bleiben.

Wir haben auch eine [Ereignisausgabeseite](https://mdn.github.io/dom-examples/web-storage/event.html) bereitgestellt — wenn Sie diese Seite in einem anderen Tab laden, dann Ihre Auswahl auf der Startseite ändern, sehen Sie, wie die aktualisierten Speicherinformationen ausgegeben werden, wenn ein [`StorageEvent`](/de/docs/Web/API/StorageEvent) ausgelöst wird.

![Ereignisausgabeseite](event-output.png)

> [!NOTE]
> Neben dem Live-Betrachten der Beispielseiten über die obigen Links können Sie auch den [Quellcode überprüfen](https://github.com/mdn/dom-examples/tree/main/web-storage).

### Testen, ob Ihr Speicher befüllt wurde

Zu Beginn testen wir in [main.js](https://github.com/mdn/dom-examples/blob/main/web-storage/main.js), ob das Speicherobjekt bereits befüllt wurde (d.h., die Seite wurde zuvor aufgerufen):

```js
if (!localStorage.getItem("bgcolor")) {
  populateStorage();
} else {
  setStyles();
}
```

Die Methode [`Storage.getItem()`](/de/docs/Web/API/Storage/getItem) wird verwendet, um ein Datenelement aus dem Speicher zu erhalten; in diesem Fall überprüfen wir, ob das `bgcolor`-Element existiert; wenn nicht, führen wir `populateStorage()` aus, um die vorhandenen Anpassungswerte zum Speicher hinzuzufügen. Gibt es dort bereits Werte, führen wir `setStyles()` aus, um das Seitenstyling mit den gespeicherten Werten zu aktualisieren.

> [!NOTE]
> Sie können auch [`Storage.length`](/de/docs/Web/API/Storage/length) verwenden, um zu prüfen, ob das Speicherobjekt leer ist oder nicht.

### Werte aus dem Speicher abrufen

Wie oben beschrieben, können Werte mit [`Storage.getItem()`](/de/docs/Web/API/Storage/getItem) aus dem Speicher abgerufen werden.
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

Hier holen sich die ersten drei Zeilen die Werte aus dem lokalen Speicher.
Anschließend setzen wir die in den Formularelementen angezeigten Werte auf diese Werte, damit sie beim Neuladen der Seite synchron bleiben.
Schließlich aktualisieren wir die Stile/ dekorativen Bilder auf der Seite, sodass Ihre Anpassungsoptionen bei einem Neuladen erneut angezeigt werden.

### Werte im Speicher setzen

[`Storage.setItem()`](/de/docs/Web/API/Storage/setItem) wird sowohl verwendet, um neue Datenelemente zu erstellen als auch (wenn das Datenelement bereits existiert) bestehende Werte zu aktualisieren. Dies nimmt zwei Argumente an — den Schlüssel des Datenelements zum Erstellen/Ändern und den Wert, der darin gespeichert werden soll.

```js
function populateStorage() {
  localStorage.setItem("bgcolor", document.getElementById("bgcolor").value);
  localStorage.setItem("font", document.getElementById("font").value);
  localStorage.setItem("image", document.getElementById("image").value);

  setStyles();
}
```

Die Funktion `populateStorage()` setzt drei Elemente im lokalen Speicher — die Hintergrundfarbe, die Schriftart und den Bildpfad. Danach wird die Funktion `setStyles()` ausgeführt, um die Seitenstile usw. zu aktualisieren.

Wir haben auch einen `onchange`-Handler in jedes Formelement eingefügt, sodass die Daten und das Styling aktualisiert werden, wann immer ein Formularwert geändert wird:

```js
bgcolorForm.onchange = populateStorage;
fontForm.onchange = populateStorage;
imageForm.onchange = populateStorage;
```

`Storage` unterstützt nur das Speichern und Abrufen von Zeichenfolgen. Wenn Sie andere Datentypen speichern möchten, müssen Sie diese in Zeichenfolgen konvertieren. Für einfache Objekte und Arrays können Sie {{jsxref("JSON.stringify()")}} verwenden.

```js
const person = { name: "Alex" };
localStorage.setItem("user", person);
console.log(localStorage.getItem("user")); // "[object Object]"; not useful!
localStorage.setItem("user", JSON.stringify(person));
console.log(JSON.parse(localStorage.getItem("user"))); // { name: "Alex" }
```

Es gibt jedoch keine generische Möglichkeit, beliebige Datentypen zu speichern. Darüber hinaus ist das abgerufene Objekt eine [tiefe Kopie](/de/docs/Glossary/Deep_copy) des Originalobjekts und Änderungen daran wirken sich nicht auf das Originalobjekt aus.

### Auf Speicheränderungen mit dem StorageEvent reagieren

Das [`StorageEvent`](/de/docs/Web/API/StorageEvent) wird jedes Mal ausgelöst, wenn eine Änderung am [`Storage`](/de/docs/Web/API/Storage)-Objekt vorgenommen wird (beachten Sie, dass dieses Ereignis nicht für Änderungen an sessionStorage ausgelöst wird). Das bedeutet nicht, dass es auf der gleichen Seite funktioniert, die die Änderungen vornimmt — es ist wirklich eine Möglichkeit für andere Seiten auf der Domain, die den Speicher nutzen, jede vorgenommene Änderung zu synchronisieren. Seiten auf anderen Domains können nicht auf die gleichen Speicherobjekte zugreifen.

Auf der Ereignisseite (siehe [events.js](https://github.com/mdn/dom-examples/blob/main/web-storage/event.js)) besteht das einzige JavaScript aus Folgendem:

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

Hier fügen wir dem `window`-Objekt einen Ereignis-Listener hinzu, der ausgelöst wird, wenn das [`Storage`](/de/docs/Web/API/Storage)-Objekt, das mit dem aktuellen Ursprung verknüpft ist, geändert wird. Wie oben zu sehen, enthält das mit diesem Ereignis verbundene Ereignisobjekt eine Reihe von Eigenschaften mit nützlichen Informationen - den Schlüssel der sich ändernden Daten, den alten Wert vor der Änderung, den neuen Wert nach der Änderung, die URL des Dokuments, das den Speicher geändert hat, und das Speicherobjekt selbst (das wir stringifiziert haben, damit Sie seinen Inhalt sehen können).

### Datenaufzeichnungen löschen

Web Storage bietet auch ein paar einfache Methoden zum Entfernen von Daten. Wir nutzen diese nicht in unserem Demo, aber sie sind sehr einfach in Ihr Projekt zu integrieren:

- [`Storage.removeItem()`](/de/docs/Web/API/Storage/removeItem) nimmt ein einzelnes Argument an - den Schlüssel des Datenelements, das Sie entfernen möchten - und entfernt es aus dem Speicherobjekt für diese Domain.
- [`Storage.clear()`](/de/docs/Web/API/Storage/clear) nimmt keine Argumente an und leert das gesamte Speicherobjekt für diese Domain.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Storage API Landing Page](/de/docs/Web/API/Web_Storage_API)
