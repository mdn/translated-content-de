---
title: "Window: Eigenschaft localStorage"
short-title: localStorage
slug: Web/API/Window/localStorage
l10n:
  sourceCommit: 44c4ec928281dc2d7c5ea42b7d2c74a2013f16ac
---

{{APIRef("Web Storage API")}}

Die **`localStorage`** schreibgeschützte Eigenschaft der {{domxref("window")}}-Schnittstelle ermöglicht den Zugriff auf ein {{DOMxRef("Storage")}}-Objekt für den {{DOMxRef("Document")}} Ursprung (origin); die gespeicherten Daten werden über Browsersitzungen hinweg gespeichert.

`localStorage` ist ähnlich wie {{DOMxRef("Window.sessionStorage", "sessionStorage")}}, mit dem Unterschied, dass Daten in `localStorage` keine Ablaufzeit haben, während Daten in `sessionStorage` gelöscht werden, wenn die Seitensitzung endet – das heißt, wenn die Seite geschlossen wird. (Daten in `localStorage` für ein Dokument, das in einer "privaten Browsing"- oder "Inkognito"-Sitzung geladen wurde, werden gelöscht, wenn der letzte "private" Tab geschlossen wird.)

## Wert

Ein {{DOMxRef("Storage")}}-Objekt, das zum Zugriff auf den lokalen Speicherbereich des aktuellen Ursprungs (origin) verwendet werden kann.

### Ausnahmen

- `SecurityError`

  - : Wird in einem der folgenden Fälle ausgelöst:

    - Der Ursprung (origin) ist kein [gültiges Schema/Host/Port-Tupel](/de/docs/Web/Security/Same-origin_policy#definition_of_an_origin). Dies kann beispielsweise passieren, wenn der Ursprung die `file:`- oder `data:`-Schemata verwendet.
    - Die Anfrage verstößt gegen eine Richtlinienentscheidung. Zum Beispiel hat der Benutzer den Browser so konfiguriert, dass die Seite keine Daten speichern darf.

    Beachten Sie, dass wenn der Benutzer Cookies blockiert, Browser dies wahrscheinlich als Anweisung interpretieren werden, die Seite daran zu hindern, Daten zu speichern.

## Beschreibung

Die Schlüssel und Werte, die mit `localStorage` gespeichert werden, sind _immer_ im UTF-16-String-Format, das zwei Bytes pro Zeichen verwendet. Wie bei Objekten werden Integer-Schlüssel automatisch in Strings umgewandelt.

Daten in `localStorage` **sind spezifisch für das Protokoll des Dokuments**. Insbesondere liefert `localStorage` für eine über HTTP geladene Seite (z. B. `http://example.com`) ein anderes Objekt als `localStorage` für die entsprechende Seite, die über HTTPS geladen wird (z. B. `https://example.com`).

Für Dokumente, die aus `file:`-URLs geladen werden (das heißt, Dateien, die direkt aus dem lokalen Dateisystem des Benutzers im Browser geöffnet werden, anstatt von einem Webserver bereitgestellt zu werden), sind die Anforderungen an das Verhalten von `localStorage` undefiniert und können sich zwischen verschiedenen Browsern unterscheiden.

In allen aktuellen Browsern scheint `localStorage` ein anderes Objekt für jede `file:`-URL zurückzugeben. Mit anderen Worten, jede `file:`-URL scheint ihren eigenen einzigartigen lokalen Speicherbereich zu haben. Es gibt jedoch keine Garantien für dieses Verhalten, daher sollten Sie sich nicht darauf verlassen, da, wie oben erwähnt, die Anforderungen für `file:`-URLs undefiniert bleiben. Es ist möglich, dass Browser ihre Handhabung von `file:`-URLs für `localStorage` jederzeit ändern können. Tatsächlich haben einige Browser im Laufe der Zeit ihre Handhabung dafür geändert.

## Beispiele

Das folgende Codebeispiel greift auf das lokale {{DOMxRef("Storage")}}-Objekt der aktuellen Domain zu und fügt ihm mithilfe von {{DOMxRef("Storage.setItem()")}} ein Datenelement hinzu.

```js
localStorage.setItem("myCat", "Tom");
```

Die Syntax, um das `localStorage`-Element zu lesen, lautet wie folgt:

```js
const cat = localStorage.getItem("myCat");
```

Die Syntax, um das `localStorage`-Element zu entfernen, lautet wie folgt:

```js
localStorage.removeItem("myCat");
```

Die Syntax, um alle `localStorage`-Elemente zu entfernen, lautet wie folgt:

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
- {{DOMxRef("Window.sessionStorage")}}
