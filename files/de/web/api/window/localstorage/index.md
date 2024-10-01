---
title: "Window: localStorage Eigenschaft"
short-title: localStorage
slug: Web/API/Window/localStorage
l10n:
  sourceCommit: 44c4ec928281dc2d7c5ea42b7d2c74a2013f16ac
---

{{APIRef("Web Storage API")}}

Die **`localStorage`** schreibgeschützte Eigenschaft des [`window`](/de/docs/Web/API/Window)-Interfaces ermöglicht Ihnen den Zugriff auf ein [`Storage`](/de/docs/Web/API/Storage)-Objekt für den {{Glossary("origin", "Ursprung")}} des [`Document`](/de/docs/Web/API/Document); die gespeicherten Daten werden über Browsersitzungen hinweg beibehalten.

`localStorage` ähnelt [`sessionStorage`](/de/docs/Web/API/Window/sessionStorage), mit dem Unterschied, dass `localStorage`-Daten kein Ablaufdatum haben, während `sessionStorage`-Daten gelöscht werden, wenn die Seitensitzung endet — also wenn die Seite geschlossen wird. (`localStorage`-Daten für ein Dokument, das in einer "privaten Browsing"- oder "Inkognito"-Sitzung geladen wird, werden gelöscht, wenn der letzte "private" Tab geschlossen wird.)

## Wert

Ein [`Storage`](/de/docs/Web/API/Storage)-Objekt, das zum Zugriff auf den lokalen Speicherbereich des aktuellen Ursprungs verwendet werden kann.

### Ausnahmen

- `SecurityError`

  - : Wird in einem der folgenden Fälle ausgelöst:

    - Der Ursprung ist kein [gültiges Schema/Host/Port-Tupel](/de/docs/Web/Security/Same-origin_policy#definition_of_an_origin). Dies kann beispielsweise passieren, wenn der Ursprung die `file:`- oder `data:`-Schemen verwendet.
    - Die Anforderung verletzt eine Richtlinienentscheidung. Zum Beispiel, wenn der Benutzer die Browser so konfiguriert hat, dass verhindert wird, dass die Seite Daten speichert.

    Beachten Sie, dass, wenn der Benutzer Cookies blockiert, Browser dies wahrscheinlich als Anweisung interpretieren, die Seite daran zu hindern, Daten zu speichern.

## Beschreibung

Die Schlüssel und Werte, die mit `localStorage` gespeichert werden, sind _immer_ im UTF-16-Zeichenfolgenformat, das zwei Bytes pro Zeichen verwendet. Genau wie bei Objekten werden ganzzahlige Schlüssel automatisch in Zeichenfolgen umgewandelt.

`localStorage`-Daten **sind spezifisch für das Protokoll des Dokuments**. Insbesondere liefert `localStorage` für eine über HTTP geladene Seite (z.B. `http://example.com`) ein anderes Objekt als `localStorage` für die entsprechende über HTTPS geladene Seite (z.B. `https://example.com`).

Für Dokumente, die aus `file:`-URLs geladen werden (d.h. Dateien, die direkt vom lokalen Dateisystem des Benutzers im Browser geöffnet werden und nicht von einem Webserver bereitgestellt werden), sind die Anforderungen an das Verhalten von `localStorage` undefiniert und können je nach Browser variieren.

In allen aktuellen Browsern scheint `localStorage` für jede `file:`-URL ein anderes Objekt zurückzugeben. Mit anderen Worten, jede `file:`-URL hat scheinbar ihren eigenen einzigartigen lokalen Speicherbereich. Es gibt jedoch keine Garantie für dieses Verhalten, daher sollten Sie sich nicht darauf verlassen, da, wie oben erwähnt, die Anforderungen für `file:`-URLs unklar bleiben. Es ist möglich, dass Browser ihr Verhalten für `file:`-URLs bei `localStorage` jederzeit ändern könnten. Tatsächlich haben einige Browser ihr Verhalten im Laufe der Zeit geändert.

## Beispiele

Der folgende Codeausschnitt greift auf das lokale [`Storage`](/de/docs/Web/API/Storage)-Objekt der aktuellen Domäne zu und fügt ihm ein Datenelement mit [`Storage.setItem()`](/de/docs/Web/API/Storage/setItem) hinzu.

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
> Bitte beachten Sie den Artikel [Using the Web Storage API](/de/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API) für ein vollständiges Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Using the Web Storage API](/de/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)
- [`Window.sessionStorage`](/de/docs/Web/API/Window/sessionStorage)
