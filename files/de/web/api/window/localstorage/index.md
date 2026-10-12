---
title: "Window: localStorage-Eigenschaft"
short-title: localStorage
slug: Web/API/Window/localStorage
l10n:
  sourceCommit: 5b85e27155260155bd829fc6d4b98ca2c476b2d1
---

{{APIRef("Web Storage API")}}

Die schreibgeschützte Eigenschaft **`localStorage`** der Schnittstelle [`window`](/de/docs/Web/API/Window) ermöglicht den Zugriff auf ein [`Storage`](/de/docs/Web/API/Storage)-Objekt für den {{Glossary("origin", "Origin")}} des [`Document`](/de/docs/Web/API/Document). Die gespeicherten Daten bleiben über Browsersitzungen hinweg erhalten.

`localStorage` ähnelt [`sessionStorage`](/de/docs/Web/API/Window/sessionStorage). Während Daten in `localStorage` jedoch nicht ablaufen, werden Daten in `sessionStorage` gelöscht, wenn die Seitensitzung endet – also wenn die Seite geschlossen wird. (`localStorage`-Daten eines Dokuments, das in einer Sitzung zum „privaten Surfen“ oder im „Inkognito-Modus“ geladen wurde, werden gelöscht, wenn der letzte „private“ Tab geschlossen wird.)

## Wert

Ein [`Storage`](/de/docs/Web/API/Storage)-Objekt, mit dem auf den lokalen Speicherbereich des aktuellen Origins zugegriffen werden kann.

### Ausnahmen

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird in einem der folgenden Fälle ausgelöst:
    - Der Origin ist kein [gültiges Tupel aus Schema, Host und Port](/de/docs/Web/Security/Defenses/Same-origin_policy#definition_of_an_origin). Dies kann beispielsweise der Fall sein, wenn der Origin das Schema `file:` oder `data:` verwendet.
    - Die Anfrage verstößt gegen eine Richtlinie. Beispielsweise hat der Benutzer den Browser so konfiguriert, dass die Seite keine Daten dauerhaft speichern darf.

    Beachten Sie, dass Browser das Blockieren von Cookies durch den Benutzer wahrscheinlich als Anweisung interpretieren, die dauerhafte Speicherung von Daten durch die Seite zu verhindern.

## Beschreibung

Die mit `localStorage` gespeicherten Schlüssel und Werte liegen als Zeichenfolgen im Format {{Glossary("UTF-16", "UTF-16")}} vor. Wie bei Objekten werden ganzzahlige Schlüssel automatisch in Zeichenfolgen umgewandelt.

`localStorage`-Daten sind **spezifisch für das Protokoll des Dokuments**. Für eine über HTTP geladene Website (z. B. `http://example.com`) gibt `localStorage` ein anderes Objekt zurück als für dieselbe über HTTPS geladene Website (z. B. `https://example.com`).

Für Dokumente, die über `file:`-URLs geladen werden (also Dateien, die direkt aus dem lokalen Dateisystem des Benutzers im Browser geöffnet und nicht von einem Webserver bereitgestellt werden), ist das Verhalten von `localStorage` nicht festgelegt und kann sich zwischen Browsern unterscheiden.

In allen aktuellen Browsern scheint `localStorage` für jede `file:`-URL ein anderes Objekt zurückzugeben. Mit anderen Worten: Jede `file:`-URL scheint einen eigenen lokalen Speicherbereich zu haben. Dieses Verhalten ist jedoch nicht garantiert. Sie sollten sich daher nicht darauf verlassen, denn wie bereits erwähnt ist das Verhalten für `file:`-URLs nicht festgelegt. Browser könnten ihre Behandlung von `file:`-URLs bei `localStorage` jederzeit ändern. Einige Browser _haben_ ihr Verhalten diesbezüglich im Laufe der Zeit geändert.

## Beispiele

Der folgende Ausschnitt greift auf das lokale [`Storage`](/de/docs/Web/API/Storage)-Objekt der aktuellen Domain zu und fügt ihm mit [`Storage.setItem()`](/de/docs/Web/API/Storage/setItem) einen Dateneintrag hinzu. Falls für diesen Schlüssel bereits ein Eintrag vorhanden ist, wird er aktualisiert.

```js
localStorage.setItem("myCat", "Tom");
```

Die Syntax zum Lesen eines Eintrags aus `localStorage` lautet:

```js
const cat = localStorage.getItem("myCat");
```

Die Syntax zum Entfernen eines Eintrags aus `localStorage` lautet:

```js
localStorage.removeItem("myCat");
```

Die Syntax zum Entfernen aller Einträge aus `localStorage` lautet:

```js
localStorage.clear();
```

> [!NOTE]
> Ein vollständiges Beispiel finden Sie im Artikel [Verwendung der Web Storage API](/de/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Storage API](/de/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)
- [`Window.sessionStorage`](/de/docs/Web/API/Window/sessionStorage)
