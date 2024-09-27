---
title: "Window: sessionStorage-Eigenschaft"
short-title: sessionStorage
slug: Web/API/Window/sessionStorage
l10n:
  sourceCommit: 2b6f99e45534ce662f842d8b4d2f7845492e353c
---

{{APIRef("Web Storage API")}}

Die schreibgeschützte **`sessionStorage`**-Eigenschaft greift auf ein Sitzungs-`Storage`-Objekt für den aktuellen [origin](/de/docs/Glossary/origin) zu. `sessionStorage` ist ähnlich wie [`localStorage`](/de/docs/Web/API/Window/localStorage); der Unterschied besteht darin, dass die Daten in `localStorage` nicht ablaufen, während die Daten in `sessionStorage` gelöscht werden, wenn die _Seiten-Sitzung_ endet.

- Immer wenn ein Dokument in einem bestimmten Tab im Browser geladen wird, wird eine einzigartige Seiten-Sitzung erstellt und diesem Tab zugewiesen. Diese Seiten-Sitzung ist nur für diesen Tab gültig.
- Eine Seiten-Sitzung dauert so lange wie der Tab oder der Browser geöffnet ist und bleibt über Seitenaktualisierungen und -wiederherstellungen hinweg bestehen.
- **Das Öffnen einer Seite in einem neuen Tab oder Fenster erstellt eine neue Sitzung mit dem Wert des Top-Level-Browsing-Kontexts, was sich von der Funktionsweise von Sitzungs-Cookies unterscheidet.**
- Das Öffnen mehrerer Tabs/Fenster mit derselben URL erstellt `sessionStorage` für jeden Tab/Fenster.
- Das Duplizieren eines Tabs kopiert das `sessionStorage` des Tabs in den neuen Tab.
- Das Schließen eines Tabs/Fensters beendet die Sitzung und löscht die Objekte in `sessionStorage`.

Die in `sessionStorage` gespeicherten Daten **sind spezifisch für das Protokoll der Seite**. Insbesondere werden Daten, die von einem Skript auf einer über HTTP aufgerufenen Website (z.B. `http://example.com/`) gespeichert werden, in einem anderen `sessionStorage`-Objekt abgelegt als dieselbe Website, die über HTTPS (z.B. `https://example.com/`) aufgerufen wird.

Die Schlüssel und die Werte sind _immer_ im UTF-16-String-Format, das zwei Bytes pro Zeichen verwendet. Wie bei Objekten werden ganze Zahlenschlüssel automatisch in Strings konvertiert.

## Wert

Ein [`Storage`](/de/docs/Web/API/Storage)-Objekt, das verwendet werden kann, um auf den Sitzungs-Speicherbereich des aktuellen Ursprungs zuzugreifen.

### Ausnahmen

- `SecurityError`

  - : Wird in einem der folgenden Fälle ausgelöst:

    - Der Ursprung ist kein [gültiges Schema/Host/Port-Tupel](/de/docs/Web/Security/Same-origin_policy#definition_of_an_origin). Dies kann passieren, wenn der Ursprung beispielsweise die `file:`- oder `data:`-Schemen verwendet.
    - Die Anforderung verstößt gegen eine Richtlinie. Zum Beispiel, wenn der Benutzer den Browser so konfiguriert hat, dass die Seite daran gehindert wird, Daten zu speichern.

    Beachten Sie, dass, wenn der Benutzer Cookies blockiert, Browser dies wahrscheinlich als Anweisung interpretieren, die Seite daran zu hindern, Daten zu speichern.

## Beispiele

### Grundlegende Verwendung

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

Das folgende Beispiel speichert automatisch den Inhalt eines Textfeldes, und wenn der Browser aktualisiert wird, stellt es den Inhalt des Textfeldes wieder her, sodass keine Eingaben verloren gehen.

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
> Bitte beziehen Sie sich auf den Artikel [Using the Web Storage API](/de/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API) für ein vollständiges Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Using the Web Storage API](/de/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)
- [`Window.localStorage`](/de/docs/Web/API/Window/localStorage)
