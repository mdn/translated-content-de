---
title: "Window: localStorage-Eigenschaft"
short-title: localStorage
slug: Web/API/Window/localStorage
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

{{APIRef("Web Storage API")}}

Die **`localStorage`** schreibgeschützte Eigenschaft des [`window`](/de/docs/Web/API/Window)-Interfaces ermöglicht Ihnen den Zugriff auf ein [`Storage`](/de/docs/Web/API/Storage)-Objekt für den {{Glossary("origin", "Ursprung")}} des [`Dokuments`](/de/docs/Web/API/Document); die gespeicherten Daten werden über Browsersitzungen hinweg gespeichert.

`localStorage` ist ähnlich wie [`sessionStorage`](/de/docs/Web/API/Window/sessionStorage), außer dass `localStorage`-Daten kein Ablaufdatum haben, während `sessionStorage`-Daten gelöscht werden, wenn die Seitensitzung endet — das heißt, wenn die Seite geschlossen wird. (`localStorage`-Daten für ein Dokument, das in einem "privaten Browsing" oder "Inkognito"-Modus geladen wird, werden gelöscht, wenn der letzte "private" Tab geschlossen wird.)

## Wert

Ein [`Storage`](/de/docs/Web/API/Storage)-Objekt, das verwendet werden kann, um auf den lokalen Speicherbereich des aktuellen Ursprungs zuzugreifen.

### Ausnahmen

- `SecurityError`
  - : Wird in einem der folgenden Fälle ausgelöst:
    - Der Ursprung ist kein [gültiges Schema/Host/Port-Tupel](/de/docs/Web/Security/Defenses/Same-origin_policy#definition_of_an_origin). Dies kann beispielsweise passieren, wenn der Ursprung die `file:` oder `data:`-Schemen verwendet.
    - Die Anfrage verstößt gegen eine Richtlinie. Zum Beispiel hat der Benutzer den Browser so konfiguriert, dass die Seite keine Daten speichern darf.

    Beachten Sie, dass wenn der Benutzer Cookies blockiert, die Browser dies wahrscheinlich als Anweisung interpretieren, die Seite daran zu hindern, Daten zu speichern.

## Beschreibung

Die Schlüssel und Werte, die mit `localStorage` gespeichert werden, sind im {{Glossary("UTF-16", "UTF-16")}}-String-Format. Wie bei Objekten werden ganze Zahlenschlüssel automatisch in Strings umgewandelt.

`localStorage`-Daten **sind spezifisch für das Protokoll des Dokuments**. Insbesondere für eine über HTTP geladene Seite (z.B. `http://example.com`) gibt `localStorage` ein anderes Objekt zurück als `localStorage` für die entsprechende Seite, die über HTTPS geladen wird (z.B. `https://example.com`).

Für Dokumente, die aus `file:` URLs geladen werden (d.h. Dateien, die direkt vom lokalen Dateisystem des Benutzers im Browser geöffnet werden, anstatt von einem Webserver bereitgestellt zu werden), sind die Anforderungen an das Verhalten von `localStorage` undefiniert und können zwischen verschiedenen Browsern variieren.

In allen aktuellen Browsern scheint `localStorage` ein anderes Objekt für jede `file:` URL zurückzugeben. Mit anderen Worten, jede `file:` URL scheint ihren eigenen einzigartigen lokalen Speicherbereich zu haben. Es gibt jedoch keine Garantien für dieses Verhalten, daher sollten Sie sich nicht darauf verlassen, denn wie oben erwähnt, bleiben die Anforderungen für `file:` URLs undefiniert. Es ist möglich, dass Browser ihr `file:` URL-Handling für `localStorage` jederzeit ändern. Tatsächlich _haben_ einige Browser ihr Handling dafür im Laufe der Zeit geändert.

## Beispiele

Das folgende Snippet greift auf das lokale [`Storage`](/de/docs/Web/API/Storage)-Objekt der aktuellen Domäne zu und fügt einen Datenpunkt hinzu, indem [`Storage.setItem()`](/de/docs/Web/API/Storage/setItem) verwendet wird.

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
> Bitte beachten Sie den Artikel [Verwendung der Web Storage API](/de/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API) für ein vollständiges Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Storage API](/de/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)
- [`Window.sessionStorage`](/de/docs/Web/API/Window/sessionStorage)
