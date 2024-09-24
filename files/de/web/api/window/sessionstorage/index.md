---
title: "Fenster: sessionStorage-Eigenschaft"
short-title: sessionStorage
slug: Web/API/Window/sessionStorage
l10n:
  sourceCommit: 2b6f99e45534ce662f842d8b4d2f7845492e353c
---

{{APIRef("Web Storage API")}}

Die schreibgeschützte **`sessionStorage`**
Eigenschaft greift auf ein Sitzungs-{{DOMxRef("Storage")}}-Objekt für den aktuellen
{{glossary("Origin")}} zu. `sessionStorage` ist ähnlich wie
{{DOMxRef("Window.localStorage", "localStorage")}}; der Unterschied besteht darin, dass während Daten
in `localStorage` nicht ablaufen, Daten in `sessionStorage` gelöscht werden, wenn die _Seitensitzung_ endet.

- Immer wenn ein Dokument in einem bestimmten Tab im Browser geladen wird, wird eine eindeutige Seitensitzung erstellt und diesem bestimmten Tab zugewiesen. Diese Seitensitzung ist nur für diesen bestimmten Tab gültig.
- Eine Seitensitzung dauert, solange der Tab oder der Browser geöffnet ist, und bleibt auch bei Seitenneuladen und -wiederherstellungen bestehen.
- **Das Öffnen einer Seite in einem neuen Tab oder Fenster erstellt eine neue Sitzung mit dem Wert des Top-Level-Browsing-Kontexts, was sich von der Funktionsweise von Sitzungscookies unterscheidet.**
- Beim Öffnen mehrerer Tabs/Fenster mit derselben URL wird `sessionStorage`
  für jeden Tab/jedes Fenster erstellt.
- Das Duplizieren eines Tabs kopiert das `sessionStorage` des Tabs in den neuen
  Tab.
- Das Schließen eines Tabs/Fensters beendet die Sitzung und löscht Objekte in
  `sessionStorage`.

Daten, die in `sessionStorage` gespeichert sind, sind **spezifisch für das Protokoll der
Seite**. Insbesondere werden Daten, die von einem Skript auf einer mit HTTP
zugänglichen Seite gespeichert werden (z.B. `http://example.com/`),
in einem anderen `sessionStorage`-Objekt gespeichert als die gleiche Seite, die mit
HTTPS (z.B. `https://example.com/`) aufgerufen wird.

Die Schlüssel und die Werte sind _immer_ im UTF-16-String-
Format, das zwei Bytes pro Zeichen verwendet. Wie bei Objekten werden Ganzzahlschlüssel
automatisch in Zeichenfolgen umgewandelt.

## Wert

Ein {{DOMxRef("Storage")}}-Objekt, das verwendet werden kann, um auf den aktuellen Sitzungs-Speicherplatz des Origin zuzugreifen.

### Ausnahmen

- `SecurityError`

  - : Wird in einem der folgenden Fälle ausgelöst:

    - Der Origin ist kein [gültiges Schema/Host/Port-Tupel](/de/docs/Web/Security/Same-origin_policy#definition_of_an_origin). Dies kann beispielsweise passieren, wenn der Origin die `file:`- oder `data:`-Schemen verwendet.
    - Die Anforderung verstößt gegen eine Richtlinienentscheidung. Zum Beispiel hat der Benutzer den Browser so konfiguriert, dass die Seite keine Daten speichern darf.

    Beachten Sie, dass, wenn der Benutzer Cookies blockiert, Browser dies wahrscheinlich als Anweisung interpretieren werden, zu verhindern, dass die Seite Daten speichert.

## Beispiele

### Grundlegende Verwendung

```js
// Daten in sessionStorage speichern
sessionStorage.setItem("key", "value");

// Gespeicherte Daten aus sessionStorage abrufen
let data = sessionStorage.getItem("key");

// Gespeicherte Daten aus sessionStorage entfernen
sessionStorage.removeItem("key");

// Alle gespeicherten Daten aus sessionStorage entfernen
sessionStorage.clear();
```

### Text zwischen Aktualisierungen speichern

Das folgende Beispiel speichert den Inhalt eines Textfeldes automatisch und stellt beim Aktualisieren des Browsers den Inhalt des Textfeldes wieder her, sodass kein Text verloren geht.

```js
// Das Textfeld abrufen, das wir verfolgen möchten
let field = document.getElementById("field");

// Prüfen, ob wir einen Autosave-Wert haben
// (dies passiert nur, wenn die Seite versehentlich aktualisiert wird)
if (sessionStorage.getItem("autosave")) {
  // Den Inhalt des Textfeldes wiederherstellen
  field.value = sessionStorage.getItem("autosave");
}

// Auf Änderungen im Textfeld hören
field.addEventListener("change", () => {
  // Und die Ergebnisse im sessionStorage-Objekt speichern
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
- {{DOMxRef("Window.localStorage")}}
