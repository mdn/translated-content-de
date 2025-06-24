---
title: "Window: sessionStorage-Eigenschaft"
short-title: sessionStorage
slug: Web/API/Window/sessionStorage
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("Web Storage API")}}

Die schreibgeschützte Eigenschaft **`sessionStorage`** greift auf ein session [`Storage`](/de/docs/Web/API/Storage)-Objekt für den aktuellen {{Glossary("origin", "Origin")}} zu. `sessionStorage` ist ähnlich wie [`localStorage`](/de/docs/Web/API/Window/localStorage); der Unterschied besteht darin, dass `localStorage` nur nach dem Origin partitioniert ist, während `sessionStorage` sowohl nach Origin als auch nach Browser-Tabs (Top-Level-Browsing-Kontexte) partitioniert ist. Die Daten in `sessionStorage` werden nur für die Dauer der Sitzung der Seite aufbewahrt.

- Jedes Mal, wenn ein Dokument in einem bestimmten Tab im Browser geladen wird, wird eine einzigartige Sitzung der Seite erstellt und diesem spezifischen Tab zugewiesen. Diese Sitzung der Seite ist nur in diesem spezifischen Tab zugänglich. Das Hauptdokument und alle eingebetteten {{Glossary("browsing_context", "Browsing-Kontexte")}} (iframes) werden nach ihrem Origin gruppiert, und jeder Origin hat Zugriff auf seinen eigenen separaten Speicherbereich.
- Wenn die Seite eine [`opener`](/de/docs/Web/API/Window/opener) hat, ist die `sessionStorage` anfänglich eine Kopie des `sessionStorage`-Objekts des Openers. Sie bleiben jedoch getrennt, und Änderungen an einer haben keinen Einfluss auf die andere. Um zu verhindern, dass die `sessionStorage` kopiert wird, verwenden Sie eine der Techniken, die den `opener` entfernen (siehe [`Window.opener`](/de/docs/Web/API/Window/opener)).
- Eine Sitzung der Seite dauert, solange der Tab oder der Browser geöffnet ist, und überlebt Seiten-Neuladungen und -Wiederherstellungen.
- Das Öffnen einer Seite in einem neuen Tab oder Fenster erstellt eine neue Sitzung mit dem Wert des Top-Level-Browsing-Kontextes, was sich von der Funktionsweise der Sitzungs-Cookies unterscheidet.
- Das Schließen des Tabs/Fensters beendet die Sitzung und löscht die Daten in `sessionStorage`.

## Wert

Ein [`Storage`](/de/docs/Web/API/Storage)-Objekt, das verwendet werden kann, um auf den Sitzungsspeicherraum des aktuellen Origins zuzugreifen.

### Ausnahmen

- `SecurityError`

  - : Wird in einem der folgenden Fälle ausgelöst:

    - Der Origin ist kein [gültiges Schema/Host/Port-Tupel](/de/docs/Web/Security/Same-origin_policy#definition_of_an_origin). Dies kann passieren, wenn der Origin beispielsweise die `file:`- oder `data:`-Schemata verwendet.
    - Die Anfrage verstößt gegen eine Richtlinienentscheidung. Zum Beispiel hat der Benutzer den Browser so konfiguriert, dass er der Seite verbietet, Daten zu speichern.

    Beachten Sie, dass, wenn der Benutzer Cookies blockiert, die Browser dies wahrscheinlich als Anweisung interpretieren, der Seite zu verbieten, Daten zu speichern.

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

### Speicherung von Text zwischen Aktualisierungen

Das folgende Beispiel speichert den Inhalt eines Textfeldes automatisch, und wenn der Browser aktualisiert wird, stellt es den Inhalt des Textfeldes wieder her, sodass kein Text verloren geht.

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
> Bitte konsultieren Sie den Artikel [Using the Web Storage API](/de/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API) für ein vollständiges Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Using the Web Storage API](/de/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)
- [`Window.localStorage`](/de/docs/Web/API/Window/localStorage)
