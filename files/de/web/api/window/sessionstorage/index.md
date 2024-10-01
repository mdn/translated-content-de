---
title: "Window: sessionStorage-Eigenschaft"
short-title: sessionStorage
slug: Web/API/Window/sessionStorage
l10n:
  sourceCommit: 2b6f99e45534ce662f842d8b4d2f7845492e353c
---

{{APIRef("Web Storage API")}}

Die schreibgeschützte **`sessionStorage`**-Eigenschaft greift auf ein Sitzungs-[`Storage`](/de/docs/Web/API/Storage)-Objekt für den aktuellen {{Glossary("origin", "Origin")}} zu. `sessionStorage` ist ähnlich wie [`localStorage`](/de/docs/Web/API/Window/localStorage); der Unterschied besteht darin, dass Daten in `localStorage` nicht ablaufen, während Daten in `sessionStorage` gelöscht werden, wenn die _Seitensitzung_ endet.

- Jedes Mal, wenn ein Dokument in einem bestimmten Tab im Browser geladen wird, wird eine eindeutige Seitensitzung erstellt und diesem speziellen Tab zugeordnet. Diese Seitensitzung ist nur für diesen speziellen Tab gültig.
- Eine Seitensitzung dauert so lange an, wie der Tab oder der Browser geöffnet ist, und überlebt Seitenaktualisierungen und Wiederherstellungen.
- **Das Öffnen einer Seite in einem neuen Tab oder Fenster erstellt eine neue Sitzung mit dem Wert des obersten Browsing-Kontexts, was sich von der Funktionsweise von Sitzungscookies unterscheidet.**
- Das Öffnen mehrerer Tabs/Fenster mit derselben URL erstellt für jeden Tab/jedes Fenster ein eigenes `sessionStorage`.
- Das Duplizieren eines Tabs kopiert das `sessionStorage` des Tabs in den neuen Tab.
- Das Schließen eines Tabs/Fensters beendet die Sitzung und löscht Objekte in `sessionStorage`.

Daten, die in `sessionStorage` gespeichert werden, **sind spezifisch für das Protokoll der Seite**. Insbesondere werden Daten, die von einem Skript auf einer über HTTP aufgerufenen Website (z.B. `http://example.com/`) gespeichert werden, in einem anderen `sessionStorage`-Objekt abgelegt als dieselbe Website, die über HTTPS (z.B. `https://example.com/`) aufgerufen wird.

Die Schlüssel und die Werte sind _immer_ im UTF-16-String-Format, das zwei Bytes pro Zeichen verwendet. Wie bei Objekten werden ganzzahlige Schlüssel automatisch in Strings umgewandelt.

## Wert

Ein [`Storage`](/de/docs/Web/API/Storage)-Objekt, das verwendet werden kann, um auf den Sitzungsspeicherplatz des aktuellen Origins zuzugreifen.

### Ausnahmen

- `SecurityError`

  - : Wird in einem der folgenden Fälle ausgelöst:

    - Der Origin ist kein [gültiges Schema/Host/Port-Tupel](/de/docs/Web/Security/Same-origin_policy#definition_of_an_origin). Dies kann passieren, wenn der Origin die `file:`- oder `data:`-Schemen verwendet, zum Beispiel.
    - Die Anforderung verstößt gegen eine Sicherheitsrichtlinie. Zum Beispiel, wenn der Benutzer den Browser so konfiguriert hat, dass die Seite keine Daten speichern darf.

    Beachten Sie, dass, wenn der Benutzer Cookies blockiert, Browser dies wahrscheinlich als Anweisung interpretieren, um zu verhindern, dass die Seite Daten speichert.

## Beispiele

### Grundlegende Nutzung

```js
// Save data to sessionStorage
sessionStorage.setItem("key", "value");

// Get saved data from sessionStorage
let data = sessionStorage.getItem("key");

// Remove saved data from sessionStorage
sessionStorage.removeItem("key");

// Remove all saved data from sessionStorage
sessionStorage.clear();
```

### Speichern von Text zwischen Aktualisierungen

Das folgende Beispiel speichert automatisch den Inhalt eines Textfelds, und wenn der Browser aktualisiert wird, wird der Inhalt des Textfelds wiederhergestellt, sodass kein geschriebenes Wort verloren geht.

```js
// Get the text field that we're going to track
let field = document.getElementById("field");

// See if we have an autosave value
// (this will only happen if the page is accidentally refreshed)
if (sessionStorage.getItem("autosave")) {
  // Restore the contents of the text field
  field.value = sessionStorage.getItem("autosave");
}

// Listen for changes in the text field
field.addEventListener("change", () => {
  // And save the results into the session storage object
  sessionStorage.setItem("autosave", field.value);
});
```

> [!NOTE]
> Bitte beachten Sie den Artikel [Verwendung der Web Storage API](/de/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API) für ein vollständiges Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Storage API](/de/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)
- [`Window.localStorage`](/de/docs/Web/API/Window/localStorage)
