---
title: "Window: localStorage-Eigenschaft"
short-title: localStorage
slug: Web/API/Window/localStorage
l10n:
  sourceCommit: fbe455624f7a57d897260d947580428087a48c09
---

{{APIRef("Web Storage API")}}

Die **`localStorage`** Nur-Lese-Eigenschaft der [`window`](/de/docs/Web/API/Window)-Schnittstelle ermöglicht es Ihnen, auf ein [`Storage`](/de/docs/Web/API/Storage)-Objekt für den {{Glossary("origin", "Ursprung")}} des [`Dokuments`](/de/docs/Web/API/Document) zuzugreifen; die gespeicherten Daten werden über Browsersitzungen hinweg beibehalten.

`localStorage` ist ähnlich wie [`sessionStorage`](/de/docs/Web/API/Window/sessionStorage), allerdings hat `localStorage` keinen Ablaufzeitpunkt, während `sessionStorage`-Daten gelöscht werden, wenn die Seitensitzung endet — das heißt, wenn die Seite geschlossen wird. (`localStorage`-Daten für ein Dokument, das in einer "Privates Surfen"- oder "Inkognito"-Sitzung geladen wurde, werden gelöscht, wenn der letzte "private" Tab geschlossen wird.)

## Wert

Ein [`Storage`](/de/docs/Web/API/Storage)-Objekt, das verwendet werden kann, um auf den lokalen Speicherplatz des aktuellen Ursprungs zuzugreifen.

### Ausnahmen

- `SecurityError`
  - : Wird in einem der folgenden Fälle ausgelöst:
    - Der Ursprung ist kein [gültiges Schema/Host/Port-Tupel](/de/docs/Web/Security/Defenses/Same-origin_policy#definition_of_an_origin). Dies kann passieren, wenn der Ursprung die `file:`- oder `data:`-Schemas verwendet, zum Beispiel.
    - Die Anfrage verletzt eine politische Entscheidung. Zum Beispiel hat der Benutzer den Browser so konfiguriert, dass die Seite daran gehindert wird, Daten zu speichern.

    Beachten Sie, dass, wenn der Benutzer Cookies blockiert, die Browser dies wahrscheinlich als Anweisung interpretieren, die Seite daran zu hindern, Daten zu speichern.

## Beschreibung

Die Schlüssel und die Werte, die mit `localStorage` gespeichert werden, befinden sich im {{Glossary("UTF-16", "UTF-16")}}-Zeichenfolgenformat. Wie bei Objekten werden ganze Zahl-Schlüssel automatisch in Zeichenfolgen umgewandelt.

`localStorage`-Daten **sind spezifisch für das Protokoll des Dokuments**. Insbesondere für eine über HTTP geladene Seite (z.B. `http://example.com`) gibt `localStorage` ein anderes Objekt zurück als `localStorage` für die entsprechende über HTTPS geladene Seite (z.B. `https://example.com`).

Für Dokumente, die von `file:`-URLs geladen werden (das heißt, Dateien, die im Browser direkt vom lokalen Dateisystem des Benutzers geöffnet werden, anstatt von einem Webserver bereitgestellt zu werden), sind die Anforderungen für das Verhalten von `localStorage` undefiniert und können zwischen verschiedenen Browsern variieren.

In allen aktuellen Browsern scheint `localStorage` ein anderes Objekt für jede `file:`-URL zurückzugeben. Mit anderen Worten: Jeder `file:`-URL scheint über einen eigenen einzigartigen lokalen Speicherbereich zu verfügen. Aber es gibt keine Garantien über dieses Verhalten, daher sollten Sie sich nicht darauf verlassen, da, wie oben erwähnt, die Anforderungen für `file:`-URLs undefiniert bleiben. Es ist möglich, dass Browser ihr `file:`-URL-Handling für `localStorage` jederzeit ändern können. Tatsächlich haben einige Browser ihr Handling dafür im Laufe der Zeit geändert.

## Beispiele

Der folgende Codeausschnitt greift auf das lokale [`Storage`](/de/docs/Web/API/Storage)-Objekt der aktuellen Domain zu und fügt ihm ein Datenelement hinzu, indem er [`Storage.setItem()`](/de/docs/Web/API/Storage/setItem) nutzt, oder aktualisiert das Element, falls bereits ein Schlüssel vorhanden ist.

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
> Bitte lesen Sie den Artikel [Verwendung der Web Storage API](/de/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API) für ein vollständiges Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Storage API](/de/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)
- [`Window.sessionStorage`](/de/docs/Web/API/Window/sessionStorage)
