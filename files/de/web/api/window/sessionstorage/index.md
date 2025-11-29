---
title: "Window: sessionStorage-Eigenschaft"
short-title: sessionStorage
slug: Web/API/Window/sessionStorage
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{APIRef("Web Storage API")}}

Die schreibgeschützte **`sessionStorage`**-Eigenschaft greift auf ein Sitzungs-[`Storage`](/de/docs/Web/API/Storage)-Objekt für den aktuellen {{Glossary("origin", "Origin")}} zu. `sessionStorage` ist ähnlich wie [`localStorage`](/de/docs/Web/API/Window/localStorage); der Unterschied besteht darin, dass `localStorage` nur nach Origin partitioniert wird, während `sessionStorage` sowohl nach Origin als auch nach Browser-Tabs (Top-Level-Browsing-Kontexte) partitioniert wird. Die Daten in `sessionStorage` werden nur für die Dauer der Seitensitzung gespeichert.

- Jedes Mal, wenn ein Dokument in einem bestimmten Tab im Browser geladen wird, wird eine eindeutige Seitensitzung erstellt und diesem bestimmten Tab zugeordnet. Diese Seitensitzung ist nur in diesem bestimmten Tab zugänglich. Das Hauptdokument und alle eingebetteten {{Glossary("browsing_context", "Browsing-Kontexte")}} (iframes) werden nach ihrem Origin gruppiert und jeder Origin hat Zugriff auf seinen eigenen separaten Speicherbereich.
- Wenn die Seite einen [`opener`](/de/docs/Web/API/Window/opener) hat, ist das `sessionStorage` anfangs eine Kopie des `sessionStorage`-Objekts des Openers. Sie sind jedoch weiterhin getrennt, und Änderungen bei einem wirken sich nicht auf den anderen aus. Um zu verhindern, dass das `sessionStorage` kopiert wird, verwenden Sie eine der Techniken, die den `opener` entfernen (siehe [`Window.opener`](/de/docs/Web/API/Window/opener)).
- Eine Seitensitzung dauert so lange, wie der Tab oder der Browser geöffnet ist, und überlebt Seitenaktualisierungen und -wiederherstellungen.
- Das Öffnen einer Seite in einem neuen Tab oder Fenster erstellt eine neue Sitzung mit dem Wert des Top-Level-Browsing-Kontexts, was sich von der Funktionsweise von Sitzungscookies unterscheidet.
- Das Schließen des Tabs/Fensters beendet die Sitzung und löscht die Daten im `sessionStorage`.

## Wert

Ein [`Storage`](/de/docs/Web/API/Storage)-Objekt, das verwendet werden kann, um auf den Sitzungs-Speicherbereich des aktuellen Origins zuzugreifen.

### Ausnahmen

- `SecurityError`
  - : Wird in einem der folgenden Fälle ausgelöst:
    - Der Origin ist kein [gültiges Schema/Host/Port-Tupel](/de/docs/Web/Security/Defenses/Same-origin_policy#definition_of_an_origin). Dies kann passieren, wenn der Origin z.B. die Schemas `file:` oder `data:` verwendet.
    - Die Anforderung verstößt gegen eine Richtlinienentscheidung. Beispielsweise hat der Benutzer den Browser so konfiguriert, dass verhindert wird, dass die Seite Daten speichert.

    Beachten Sie, dass, wenn der Benutzer Cookies blockiert, Browser dies wahrscheinlich als Anweisung interpretieren, dass die Seite keine Daten speichern soll.

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

Das folgende Beispiel speichert automatisch den Inhalt eines Textfeldes, und wenn der Browser aktualisiert wird, wird der Textfeldinhalt wiederhergestellt, sodass kein Schreiben verloren geht.

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
