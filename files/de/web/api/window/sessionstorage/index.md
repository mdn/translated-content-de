---
title: "Window: sessionStorage-Eigenschaft"
short-title: sessionStorage
slug: Web/API/Window/sessionStorage
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

{{APIRef("Web Storage API")}}

Die schreibgeschützte **`sessionStorage`**-Eigenschaft greift auf ein Sitzungs-[`Storage`](/de/docs/Web/API/Storage)-Objekt für den aktuellen {{Glossary("origin", "Ursprung")}} zu. `sessionStorage` ähnelt der [`localStorage`](/de/docs/Web/API/Window/localStorage); der Unterschied besteht darin, dass `localStorage` nur nach Ursprung partitioniert ist, während `sessionStorage` sowohl nach Ursprung als auch nach Browser-Tabs (oberste Browsing-Kontexte) partitioniert ist. Die Daten in `sessionStorage` werden nur für die Dauer der Sitzung der Seite aufbewahrt.

- Jedes Mal, wenn ein Dokument in einem bestimmten Tab im Browser geladen wird, wird eine eindeutige Sitzung der Seite erstellt und diesem bestimmten Tab zugewiesen. Diese Sitzung der Seite ist nur in diesem bestimmten Tab zugänglich. Das Hauptdokument und alle eingebetteten {{Glossary("browsing_context", "Browsing-Kontexte")}} (iframes) werden nach ihrem Ursprung gruppiert, und jeder Ursprung hat Zugang zu seinem eigenen separaten Speicherbereich.
- Wenn die Seite einen [`opener`](/de/docs/Web/API/Window/opener) hat, ist das `sessionStorage` anfangs eine Kopie des `sessionStorage`-Objekts des Openers. Sie sind jedoch weiterhin getrennt, und Änderungen an einem wirken sich nicht auf das andere aus. Um zu verhindern, dass das `sessionStorage` kopiert wird, verwenden Sie eine der Techniken, die den `opener` entfernen (siehe [`Window.opener`](/de/docs/Web/API/Window/opener)).
- Eine Sitzung der Seite dauert so lange, wie der Tab oder der Browser geöffnet ist, und übersteht Seitenaktualisierungen und -wiederherstellungen.
- Das Öffnen einer Seite in einem neuen Tab oder Fenster erstellt eine neue Sitzung mit dem Wert des obersten Browsing-Kontextes, was sich von der Funktionsweise von Sitzungscookies unterscheidet.
- Das Schließen des Tabs/Fensters beendet die Sitzung und löscht die Daten in `sessionStorage`.

## Wert

Ein [`Storage`](/de/docs/Web/API/Storage)-Objekt, das zum Zugriff auf den Speicherbereich der aktuellen Ursprungs-Sitzung verwendet werden kann.

### Ausnahmen

- `SecurityError`
  - : Wird in einem der folgenden Fälle ausgelöst:
    - Der Ursprung ist kein [gültiges Schema/Host/Port-Tupel](/de/docs/Web/Security/Defenses/Same-origin_policy#definition_of_an_origin). Dies kann passieren, wenn der Ursprung die `file:`- oder `data:`-Schemen verwendet, zum Beispiel.
    - Die Anfrage verstößt gegen eine Richtlinienentscheidung. Beispielsweise hat der Benutzer die Browser so konfiguriert, dass die Seite keine Daten speichern darf.

    Beachten Sie, dass wenn der Benutzer Cookies blockiert, dies von den Browsern wahrscheinlich als Anweisung interpretiert wird, die Seite daran zu hindern, Daten zu speichern.

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

### Text zwischen Aktualisierungen speichern

Das folgende Beispiel speichert den Inhalt eines Textfeldes automatisch und stellt bei Aktualisierung des Browsers den Inhalt des Textfeldes wieder her, sodass kein Schreibvorgang verloren geht.

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
> Bitte lesen Sie den Artikel [Verwendung der Web Storage API](/de/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API) für ein vollständiges Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Storage API](/de/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)
- [`Window.localStorage`](/de/docs/Web/API/Window/localStorage)
