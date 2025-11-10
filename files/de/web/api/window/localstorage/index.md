---
title: "Window: localStorage-Eigenschaft"
short-title: localStorage
slug: Web/API/Window/localStorage
l10n:
  sourceCommit: 3e097148b4c6cb9c6d8824275599f855ca63827b
---

{{APIRef("Web Storage API")}}

Die **`localStorage`** Lese-Eigenschaft des [`window`](/de/docs/Web/API/Window)-Interfaces ermöglicht Ihnen den Zugriff auf ein [`Storage`](/de/docs/Web/API/Storage)-Objekt für den {{Glossary("origin", "Ursprung")}} des [`Document`](/de/docs/Web/API/Document); die gespeicherten Daten werden über Browser-Sitzungen hinweg gespeichert.

`localStorage` ist ähnlich wie [`sessionStorage`](/de/docs/Web/API/Window/sessionStorage), außer dass `localStorage`-Daten keine Ablaufzeit haben, während `sessionStorage`-Daten gelöscht werden, wenn die Seitensitzung endet — das heißt, wenn die Seite geschlossen wird. (`localStorage`-Daten für ein Dokument, das in einer "privaten" oder "Inkognito"-Sitzung geladen wurde, werden gelöscht, wenn der letzte "private" Tab geschlossen wird.)

## Wert

Ein [`Storage`](/de/docs/Web/API/Storage)-Objekt, das verwendet werden kann, um auf den lokalen Speicherbereich des aktuellen Ursprungs zuzugreifen.

### Ausnahmen

- `SecurityError`

  - : Wird in einem der folgenden Fälle ausgelöst:

    - Der Ursprung ist kein [gültiges Schema/Host/Port-Tupel](/de/docs/Web/Security/Same-origin_policy#definition_of_an_origin). Dies kann passieren, wenn der Ursprung beispielsweise die Schemas `file:` oder `data:` verwendet.
    - Die Anfrage verletzt eine Richtlinienentscheidung. Zum Beispiel, wenn der Benutzer den Browser so konfiguriert hat, dass verhindert wird, dass die Seite Daten speichert.

    Beachten Sie, dass wenn der Benutzer Cookies blockiert, Browser dies wahrscheinlich als Anweisung interpretieren werden, zu verhindern, dass die Seite Daten speichert.

## Beschreibung

Die mit `localStorage` gespeicherten Schlüssel und Werte sind im {{Glossary("UTF-16", "UTF-16")}}-String-Format. Wie bei Objekten werden Ganzzahlschlüssel automatisch in Strings umgewandelt.

`localStorage`-Daten sind **spezifisch für das Protokoll des Dokuments**. Insbesondere für eine Seite, die über HTTP geladen wird (z.B. `http://example.com`), liefert `localStorage` ein anderes Objekt als `localStorage` für die entsprechende Seite, die über HTTPS geladen wird (z.B. `https://example.com`).

Für Dokumente, die von `file:` URLs geladen werden (d.h. Dateien, die im Browser direkt vom lokalen Dateisystem des Benutzers geöffnet werden, anstatt von einem Webserver bereitgestellt zu werden), sind die Anforderungen an das `localStorage`-Verhalten undefiniert und können je nach Browser variieren.

In allen aktuellen Browsern scheint `localStorage` für jede `file:` URL ein anderes Objekt zurückzugeben. Mit anderen Worten, jede `file:` URL scheint ihren eigenen, einzigartigen lokalen Speicherbereich zu haben. Aber es gibt keine Garantien für dieses Verhalten, daher sollten Sie sich nicht darauf verlassen, denn wie oben erwähnt, bleiben die Anforderungen für `file:` URLs undefiniert. Es ist also möglich, dass Browser ihr `file:` URL-Handling für `localStorage` jederzeit ändern könnten. Tatsächlich haben einige Browser ihr Handling im Laufe der Zeit _geändert_.

## Beispiele

Das folgende Code-Snippet greift auf das aktuelle [`Storage`](/de/docs/Web/API/Storage)-Objekt der aktuellen Domain zu und fügt ein Datenelement mithilfe von [`Storage.setItem()`](/de/docs/Web/API/Storage/setItem) hinzu.

```js
localStorage.setItem("myCat", "Tom");
```

Die Syntax zum Lesen des `localStorage`-Elements ist wie folgt:

```js
const cat = localStorage.getItem("myCat");
```

Die Syntax zum Entfernen des `localStorage`-Elements ist wie folgt:

```js
localStorage.removeItem("myCat");
```

Die Syntax zum Entfernen aller `localStorage`-Elemente ist wie folgt:

```js
localStorage.clear();
```

> [!NOTE]
> Bitte beziehen Sie sich auf den Artikel [Using the Web Storage API](/de/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API) für ein vollständiges Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Using the Web Storage API](/de/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)
- [`Window.sessionStorage`](/de/docs/Web/API/Window/sessionStorage)
