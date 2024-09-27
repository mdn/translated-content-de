---
title: "Window: localStorage-Eigenschaft"
short-title: localStorage
slug: Web/API/Window/localStorage
l10n:
  sourceCommit: 44c4ec928281dc2d7c5ea42b7d2c74a2013f16ac
---

{{APIRef("Web Storage API")}}

Die **`localStorage`**-Eigenschaft des [`window`](/de/docs/Web/API/Window)-Interfaces ist schreibgeschützt und ermöglicht den Zugriff auf ein [`Storage`](/de/docs/Web/API/Storage)-Objekt für den [Ursprung](/de/docs/Glossary/origin) des [`Dokuments`](/de/docs/Web/API/Document); die gespeicherten Daten werden über Browsersitzungen hinweg erhalten.

`localStorage` ist ähnlich wie [`sessionStorage`](/de/docs/Web/API/Window/sessionStorage), mit dem Unterschied, dass `localStorage`-Daten kein Ablaufdatum haben, während `sessionStorage`-Daten gelöscht werden, wenn die Seitensitzung endet — das heißt, wenn die Seite geschlossen wird. (`localStorage`-Daten für ein Dokument, das in einer "privaten Browsing"- oder "Inkognito"-Sitzung geladen wird, werden gelöscht, wenn der letzte "private" Tab geschlossen wird.)

## Wert

Ein [`Storage`](/de/docs/Web/API/Storage)-Objekt, das zum Zugriff auf den lokalen Speicherplatz des aktuellen Ursprungs verwendet werden kann.

### Ausnahmen

- `SecurityError`

  - : Wird in einem der folgenden Fälle ausgelöst:

    - Der Ursprung ist kein [gültiges Schema/Host/Port-Tripel](/de/docs/Web/Security/Same-origin_policy#definition_of_an_origin). Dies kann beispielsweise passieren, wenn der Ursprung die `file:`- oder `data:`-Schemen verwendet.
    - Die Anforderung verletzt eine Richtlinienentscheidung. Zum Beispiel hat der Benutzer den Browser so konfiguriert, dass die Seite keine Daten dauerhaft speichern darf.

    Beachten Sie, dass, wenn der Benutzer Cookies blockiert, Browser dies wahrscheinlich als Anweisung interpretieren, die Seite daran zu hindern, Daten dauerhaft zu speichern.

## Beschreibung

Die mit `localStorage` gespeicherten Schlüssel und Werte sind _immer_ im UTF-16-String-Format, das zwei Bytes pro Zeichen verwendet. Wie bei Objekten werden ganzzahlige Schlüssel automatisch in Strings umgewandelt.

`localStorage`-Daten **sind spezifisch für das Protokoll des Dokuments**. Insbesondere für eine Seite, die über HTTP geladen wird (z. B. `http://example.com`), gibt `localStorage` ein anderes Objekt zurück als `localStorage` für die entsprechende Seite, die über HTTPS geladen wird (z. B. `https://example.com`).

Für Dokumente, die von `file:`-URLs geladen werden (also Dateien, die direkt vom lokalen Dateisystem des Benutzers im Browser geöffnet werden, anstatt von einem Webserver bereitgestellt zu werden), sind die Anforderungen für das Verhalten von `localStorage` undefiniert und können von Browser zu Browser variieren.

In allen aktuellen Browsern scheint `localStorage` ein anderes Objekt für jede `file:`-URL zurückzugeben. Mit anderen Worten, jede `file:`-URL scheint ihren eigenen, einzigartigen lokalen Speicherbereich zu haben. Aber es gibt keine Garantien für dieses Verhalten, daher sollten Sie sich nicht darauf verlassen, da, wie oben erwähnt, die Anforderungen für `file:`-URLs undefiniert bleiben. Es ist möglich, dass Browser ihren Umgang mit `file:`-URLs für `localStorage` jederzeit ändern können. Tatsächlich _haben_ einige Browser ihre Handhabung im Laufe der Zeit geändert.

## Beispiele

Der folgende Ausschnitt greift auf das lokale [`Storage`](/de/docs/Web/API/Storage)-Objekt der aktuellen Domain zu und fügt ihm einen Datenpunkt mit [`Storage.setItem()`](/de/docs/Web/API/Storage/setItem) hinzu.

```js
localStorage.setItem("myCat", "Tom");
```

Die Syntax zum Lesen des `localStorage`-Elements lautet wie folgt:

```js
const cat = localStorage.getItem("myCat");
```

Die Syntax zum Entfernen des `localStorage`-Elements lautet wie folgt:

```js
localStorage.removeItem("myCat");
```

Die Syntax zum Entfernen aller `localStorage`-Elemente lautet wie folgt:

```js
localStorage.clear();
```

> [!NOTE]
> Bitte beachten Sie den Artikel [Verwendung der Web Storage API](/de/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API) für ein vollständiges Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Storage API](/de/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)
- [`Window.sessionStorage`](/de/docs/Web/API/Window/sessionStorage)
