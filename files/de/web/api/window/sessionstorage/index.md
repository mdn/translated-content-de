---
title: "Window: sessionStorage-Eigenschaft"
short-title: sessionStorage
slug: Web/API/Window/sessionStorage
l10n:
  sourceCommit: 5b85e27155260155bd829fc6d4b98ca2c476b2d1
---

{{APIRef("Web Storage API")}}

Die schreibgeschützte Eigenschaft **`sessionStorage`** ermöglicht den Zugriff auf ein [`Storage`](/de/docs/Web/API/Storage)-Objekt für die aktuelle {{Glossary("origin", "Origin")}}. `sessionStorage` ähnelt [`localStorage`](/de/docs/Web/API/Window/localStorage). Der Unterschied besteht darin, dass `localStorage` nur nach Origin aufgeteilt ist, `sessionStorage` hingegen sowohl nach Origin als auch nach Browser-Tab (Top-Level-Browsing-Kontext). Die Daten in `sessionStorage` bleiben nur für die Dauer der Seitensitzung erhalten.

- Wenn ein Dokument in einem bestimmten Browser-Tab geladen wird, wird für diesen Tab eine eigene Seitensitzung erstellt. Auf diese Seitensitzung kann nur über diesen Tab zugegriffen werden. Das Hauptdokument und alle eingebetteten {{Glossary("browsing_context", "Browsing-Kontexte")}} (iframes) werden nach ihrer Origin gruppiert. Jede Origin hat Zugriff auf ihren eigenen, separaten Speicherbereich.
- Wenn die Seite einen [`opener`](/de/docs/Web/API/Window/opener) hat, ist `sessionStorage` zunächst eine Kopie des `sessionStorage`-Objekts des `opener`. Die Objekte bleiben jedoch getrennt: Änderungen an einem wirken sich nicht auf das andere aus. Um das Kopieren von `sessionStorage` zu verhindern, verwenden Sie eine der Methoden, die `opener` entfernen (siehe [`Window.opener`](/de/docs/Web/API/Window/opener)).
- Eine Seitensitzung dauert an, solange der Tab oder der Browser geöffnet ist. Sie bleibt auch beim Neuladen und Wiederherstellen der Seite bestehen.
- Wenn eine Seite in einem neuen Tab oder Fenster geöffnet wird, entsteht eine neue Sitzung mit dem Wert des Top-Level-Browsing-Kontexts. Darin unterscheidet sich dieses Verhalten von Sitzungscookies.
- Durch das Schließen des Tabs oder Fensters endet die Sitzung, und die Daten in `sessionStorage` werden gelöscht.

## Wert

Ein [`Storage`](/de/docs/Web/API/Storage)-Objekt, mit dem auf den Sitzungsspeicherbereich der aktuellen Origin zugegriffen werden kann.

### Ausnahmen

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird in einem der folgenden Fälle ausgelöst:
    - Die Origin ist kein [gültiges Schema-Host-Port-Tupel](/de/docs/Web/Security/Defenses/Same-origin_policy#definition_of_an_origin). Das kann beispielsweise der Fall sein, wenn die Origin das Schema `file:` oder `data:` verwendet.
    - Die Anfrage verstößt gegen eine Sicherheitsrichtlinie. Beispielsweise hat der Benutzer den Browser so konfiguriert, dass die Seite keine Daten dauerhaft speichern darf.

    Beachten Sie, dass Browser das Blockieren von Cookies wahrscheinlich als Anweisung interpretieren, die dauerhafte Speicherung von Daten durch die Seite zu verhindern.

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

### Text beim Neuladen speichern

Das folgende Beispiel speichert den Inhalt eines Textfelds automatisch. Wenn der Browser neu geladen wird, stellt es den Inhalt des Textfelds wieder her, sodass kein eingegebener Text verloren geht.

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
> Ein vollständiges Beispiel finden Sie im Artikel [Die Web Storage API verwenden](/de/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Die Web Storage API verwenden](/de/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)
- [`Window.localStorage`](/de/docs/Web/API/Window/localStorage)
