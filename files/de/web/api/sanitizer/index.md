---
title: Sanitizer
slug: Web/API/Sanitizer
l10n:
  sourceCommit: f9e87cf7d09830e097a2aadb5e507eb12c9a4514
---

{{APIRef("HTML Sanitizer API")}}

Das **`Sanitizer`** Interface der [HTML Sanitizer API](/de/docs/Web/API/HTML_Sanitizer_API) definiert ein Konfigurationsobjekt, das angibt, welche Elemente, Attribute und Kommentare erlaubt sind oder entfernt werden sollen, wenn HTML-Strings in ein [`Element`](/de/docs/Web/API/Element) oder ein [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) eingefügt werden oder wenn ein HTML-String in ein [`Document`](/de/docs/Web/API/Document) geparst wird.

Eine `Sanitizer`-Instanz ist effektiv ein Wrapper um ein [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) und kann als alternative Konfiguration in denselben [Sanitisierungsmethoden](/de/docs/Web/API/HTML_Sanitizer_API#sanitization_methods) übergeben werden:

- [`setHTMLUnsafe()`](/de/docs/Web/API/Element/setHTMLUnsafe) oder [`setHTMLUnsafe()`](/de/docs/Web/API/Element/setHTMLUnsafe) auf [`Element`](/de/docs/Web/API/Element).
- [`setHTMLUnsafe()`](/de/docs/Web/API/ShadowRoot/setHTMLUnsafe) oder [`setHTMLUnsafe()`](/de/docs/Web/API/ShadowRoot/setHTMLUnsafe) auf [`ShadowRoot`](/de/docs/Web/API/ShadowRoot).
- [`Document.parseHTMLUnsafe()`](/de/docs/Web/API/Document/parseHTMLUnsafe_static) oder [`Document.parseHTML()`](/de/docs/Web/API/Document/parseHTML_static) statische Methoden.

Beachten Sie, dass `Sanitizer` voraussichtlich effizienter wiederzuverwenden und bei Bedarf zu modifizieren ist.

## Konstruktoren

- [`Sanitizer()`](/de/docs/Web/API/Sanitizer/Sanitizer)
  - : Erstellt und gibt ein `Sanitizer`-Objekt zurück, optional mit benutzerdefiniertem Sanitisierungsverhalten, das in einem [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) definiert ist.

## Instanzmethoden

- [`Sanitizer.allowElement()`](/de/docs/Web/API/Sanitizer/allowElement)
  - : Setzt ein Element als vom Sanitizer erlaubt, eventuell mit einem Array von Attributen, die erlaubt oder verboten sind.
- [`Sanitizer.get()`](/de/docs/Web/API/Sanitizer/get)
  - : Gibt die aktuelle `Sanitizer`-Konfiguration als ein [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) Wörterbuchinstanz zurück.
- [`Sanitizer.removeElement()`](/de/docs/Web/API/Sanitizer/removeElement)
  - : Setzt ein Element, das vom Sanitizer entfernt werden soll.
- [`Sanitizer.removeUnsafe()`](/de/docs/Web/API/Sanitizer/removeUnsafe)
  - : Aktualisiert die Sanitizer-Konfiguration so, dass jegliches XSS-unsichere HTML entfernt wird.
- [`Sanitizer.replaceElementWithChildren()`](/de/docs/Web/API/Sanitizer/replaceElementWithChildren)
  - : Setzt ein Element, das durch seine Kindelemente ersetzt werden soll.
- [`Sanitizer.allowAttribute()`](/de/docs/Web/API/Sanitizer/allowAttribute)
  - : Setzt ein Attribut als auf jedem Element erlaubt.
- [`Sanitizer.removeAttribute()`](/de/docs/Web/API/Sanitizer/removeAttribute)
  - : Setzt ein Attribut, das von jedem Element entfernt werden soll.
- [`Sanitizer.setComments()`](/de/docs/Web/API/Sanitizer/setComments)
  - : Legt fest, ob Kommentare vom Sanitizer erlaubt oder entfernt werden.
- [`Sanitizer.setDataAttributes()`](/de/docs/Web/API/Sanitizer/setDataAttributes)
  - : Legt fest, ob Datenattribute auf Elementen vom Sanitizer erlaubt oder entfernt werden.

## Beispiele

Für weitere Beispiele siehe die [HTML Sanitizer API](/de/docs/Web/API/HTML_Sanitizer_API) und die einzelnen Methoden.
Im Folgenden zeigen wir einige Beispiele, wie Sie unterschiedliche Sanitizer-Konfigurationen erstellen könnten.

### Erstellen eines Standardsanitizers

Der Standardsanitizer wird wie unten gezeigt erstellt.

```js
const sanitizer = new Sanitizer();
```

Die XSS-sicheren [Sanitisierungsmethoden](/de/docs/Web/API/HTML_Sanitizer_API#sanitization_methods) erstellen denselben Sanitzer automatisch, wenn keine Optionen übergeben werden.

### Erstellen eines leeren Sanitizers

Um einen leeren Sanitizer zu erstellen, übergeben Sie ein leeres Objekt an den Konstruktor.
Die resultierende Sanitizer-Konfiguration ist unten gezeigt.

```js
const sanitizer = new Sanitizer({});
/*
{
  "attributes": [],
  "comments": true,
  "dataAttributes": true,
  "elements": [],
  "removeAttributes": [],
  "removeElements": [],
  "replaceWithChildrenElements": []
}
*/
```

### Erstellen eines "Erlauben"-Sanitizers

Dieses Beispiel zeigt, wie Sie einen "Erlauber-Sanitizer" erstellen könnten: ein Sanitizer, der nur eine Teilmenge von Attributen und Elementen erlaubt.

Der Code verwendet zuerst den [`Sanitizer()`](/de/docs/Web/API/Sanitizer/Sanitizer) Konstruktor, um einen `Sanitizer` zu erstellen, wobei eine [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) angegeben wird, die das Element `<div>`, `<p>` und `<script>` erlaubt.

Das Beispiel verwendet dann `allowElement()`, um weitere `<span>`-Elemente zu erlauben, `allowAttribute()`, um das `id`-Attribut auf jedem Element zu erlauben, und die Methode `replaceElementWithChildren()`, um festzulegen, dass alle `<b>`-Elemente durch ihren inneren Inhalt ersetzt werden sollen (dies ist eine Art "Erlauben", da Sie explizit einige Entitäten angeben, die beibehalten werden sollen).
Schließlich geben wir an, dass Kommentare beibehalten werden sollen.

```js
const sanitizer = new Sanitizer({ elements: ["div", "p", "script"] });
sanitizer.allowElement("span");
sanitizer.allowAttribute("id");
sanitizer.replaceElementWithChildren("b");
sanitizer.setComments(true);
```

### Erstellen eines "Entfernen"-Sanitizers

Dieses Beispiel zeigt, wie Sie einen "Entferner-Sanitizer" erstellen könnten, indem Sie angeben, welche Elemente aus der Eingabe entfernt werden sollen.

Der Code verwendet zuerst den [`Sanitizer()`](/de/docs/Web/API/Sanitizer/Sanitizer) Konstruktor, um einen `Sanitizer` zu erstellen, wobei eine [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) angegeben wird, die das Element `<span>` und `<script>` entfernt.
Wir verwenden dann `removeElement()`, um `<h6>` zum Array der zu entfernenden Elemente hinzuzufügen, und `removeAttribute()`, um `lang` aus der Attributliste zu entfernen. Wir entfernen auch Kommentare.

```js
const sanitizer = new Sanitizer({ removeElements: ["span", "script"] });
sanitizer.removeElement("h6");
sanitizer.removeAttribute("lang");
sanitizer.setComments(false);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
