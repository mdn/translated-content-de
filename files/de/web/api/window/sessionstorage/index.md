---
title: "Window: sessionStorage-Eigenschaft"
short-title: sessionStorage
slug: Web/API/Window/sessionStorage
l10n:
  sourceCommit: bc2cef34be29df5439a5a6162bd9e5b07d173571
---

{{APIRef("Web Storage API")}}

Die schreibgeschützte **`sessionStorage`**-Eigenschaft greift auf ein Sitzungs-`Storage`-Objekt für den aktuellen {{Glossary("origin", "Origin")}} zu. `sessionStorage` ist ähnlich wie [`localStorage`](/de/docs/Web/API/Window/localStorage), mit dem Unterschied, dass `localStorage` nur nach Origin partitioniert ist, während `sessionStorage` sowohl nach Origin als auch nach Browser-Tabs (Top-Level-Browsing-Kontexte) partitioniert ist. Die Daten in `sessionStorage` werden nur für die Dauer der Seitensitzung gespeichert.

- Jedes Mal, wenn ein Dokument in einem bestimmten Tab im Browser geladen wird, wird eine eindeutige Seitensitzung erstellt und diesem speziellen Tab zugewiesen. Diese Seitensitzung ist nur in diesem speziellen Tab zugänglich. Das Hauptdokument und alle eingebetteten {{Glossary("browsing_context", "Browsing-Kontexte")}} (iframes) werden nach ihrem Origin gruppiert und jeder Origin hat Zugriff auf seinen eigenen separaten Speicherbereich.
- Wenn die Seite einen [`opener`](/de/docs/Web/API/Window/opener) hat, ist das `sessionStorage` anfangs eine Kopie des `sessionStorage`-Objekts des Openers. Sie sind jedoch immer noch separat, und Änderungen an einem beeinflussen das andere nicht. Um zu verhindern, dass das `sessionStorage` kopiert wird, verwenden Sie eine der Techniken, die den `opener` entfernen (siehe [`Window.opener`](/de/docs/Web/API/Window/opener)).
- Eine Seitensitzung dauert so lange wie der Tab oder der Browser geöffnet ist und überdauert Seitenneu laden und Wiederherstellungen.
- Das Öffnen einer Seite in einem neuen Tab oder Fenster erstellt eine neue Sitzung mit dem Wert des Top-Level-Browsing-Kontextes, was sich von der Funktionsweise von Sitzungscookies unterscheidet.
- Das Schließen des Tabs/Fensters beendet die Sitzung und löscht die Daten in `sessionStorage`.

## Wert

Ein [`Storage`](/de/docs/Web/API/Storage)-Objekt, das verwendet werden kann, um auf den Sitzungs-Speicherbereich des aktuellen Origins zuzugreifen.

### Ausnahmen

- `SecurityError`

  - : Wird in einem der folgenden Fälle ausgelöst:

    - Der Ursprung ist kein [gültiges Schema/Host/Port-Tupel](/de/docs/Web/Security/Same-origin_policy#definition_of_an_origin). Dies kann passieren, wenn das Origin beispielsweise die `file:`- oder `data:`-Schemata verwendet.
    - Die Anfrage verstößt gegen eine Richtlinienentscheidung. Beispielsweise hat der Benutzer die Browser so konfiguriert, dass die Seite keine Daten speichern darf.

    Beachten Sie, dass wenn der Benutzer Cookies blockiert, Browser dies wahrscheinlich als Anweisung interpretieren werden, die Seite daran zu hindern, Daten zu persistieren.

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

Das folgende Beispiel speichert den Inhalt eines Textfeldes automatisch und stellt den Textfeldinhalt wieder her, wenn der Browser aktualisiert wird, sodass kein Schreiben verloren geht.

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
> Bitte beziehen Sie sich auf den Artikel [Verwendung der Web Storage API](/de/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API) für ein vollständiges Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Storage API](/de/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)
- [`Window.localStorage`](/de/docs/Web/API/Window/localStorage)
