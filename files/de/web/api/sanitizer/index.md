---
title: Sanitizer
slug: Web/API/Sanitizer
l10n:
  sourceCommit: 6f149f431481b7119eb12ef206e0f107d6df3b2a
---

{{APIRef("HTML Sanitizer API")}}{{SeeCompatTable}}

Das **`Sanitizer`**-Interface der [HTML Sanitizer API](/de/docs/Web/API/HTML_Sanitizer_API) definiert ein Konfigurationsobjekt, das angibt, welche Elemente, Attribute und Kommentare erlaubt oder entfernt werden sollen, wenn HTML-Strings in ein [`Element`](/de/docs/Web/API/Element) oder [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) eingefügt werden, oder wenn ein HTML-String in ein [`Document`](/de/docs/Web/API/Document) geparst wird.

Eine `Sanitizer`-Instanz ist effektiv ein Wrapper um ein [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) und kann als Konfigurationsalternative in denselben [Sanitization-Methoden](/de/docs/Web/API/HTML_Sanitizer_API#sanitization_methods) verwendet werden:

- [`setHTML()`](/de/docs/Web/API/Element/setHTML) oder [`setHTMLUnsafe()`](/de/docs/Web/API/Element/setHTMLUnsafe) auf [`Element`](/de/docs/Web/API/Element).
- [`setHTML()`](/de/docs/Web/API/ShadowRoot/setHTML) oder [`setHTMLUnsafe()`](/de/docs/Web/API/ShadowRoot/setHTMLUnsafe) auf [`ShadowRoot`](/de/docs/Web/API/ShadowRoot).
- [`Document.parseHTML()`](/de/docs/Web/API/Document/parseHTML_static) oder [`Document.parseHTMLUnsafe()`](/de/docs/Web/API/Document/parseHTMLUnsafe_static) statische Methoden.

Beachten Sie, dass `Sanitizer` voraussichtlich effizienter ist, wiederverwendet und bei Bedarf modifiziert zu werden.

## Konstruktoren

- [`Sanitizer()`](/de/docs/Web/API/Sanitizer/Sanitizer) {{experimental_inline}}
  - : Erstellt und gibt ein `Sanitizer`-Objekt zurück, optional mit einem in einem [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) definierten benutzerdefinierten Bereinigungsverhalten.

## Instanzmethoden

- [`Sanitizer.allowElement()`](/de/docs/Web/API/Sanitizer/allowElement) {{experimental_inline}}
  - : Legt ein Element als vom Sanitizer erlaubt fest, optional mit einem Array von Attributen, die erlaubt oder nicht erlaubt sind.
- [`Sanitizer.get()`](/de/docs/Web/API/Sanitizer/get) {{experimental_inline}}
  - : Gibt die aktuelle `Sanitizer`-Konfiguration als Instanz eines [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig)-Dictionaries zurück.
- [`Sanitizer.removeElement()`](/de/docs/Web/API/Sanitizer/removeElement) {{experimental_inline}}
  - : Legt ein Element als vom Sanitizer zu entfernend fest.
- [`Sanitizer.removeUnsafe()`](/de/docs/Web/API/Sanitizer/removeUnsafe) {{experimental_inline}}
  - : Aktualisiert die Sanitizer-Konfiguration, sodass unsicheres XSS-HTML entfernt wird.
- [`Sanitizer.replaceElementWithChildren()`](/de/docs/Web/API/Sanitizer/replaceElementWithChildren) {{experimental_inline}}
  - : Legt fest, dass ein Element durch seine Kind-HTML-Elemente ersetzt werden soll.
- [`Sanitizer.allowAttribute()`](/de/docs/Web/API/Sanitizer/allowAttribute) {{experimental_inline}}
  - : Legt ein Attribut fest, das bei jedem Element erlaubt ist.
- [`Sanitizer.removeAttribute()`](/de/docs/Web/API/Sanitizer/removeAttribute) {{experimental_inline}}
  - : Legt ein Attribut fest, das von jedem Element entfernt werden soll.
- [`Sanitizer.setComments()`](/de/docs/Web/API/Sanitizer/setComments) {{experimental_inline}}
  - : Legt fest, ob Kommentare vom Sanitizer erlaubt oder entfernt werden.
- [`Sanitizer.setDataAttributes()`](/de/docs/Web/API/Sanitizer/setDataAttributes) {{experimental_inline}}
  - : Legt fest, ob Datenattribute auf Elementen vom Sanitizer erlaubt oder entfernt werden.

## Beispiele

Weitere Beispiele finden Sie in der [HTML Sanitizer API](/de/docs/Web/API/HTML_Sanitizer_API) und den einzelnen Methoden.
Im Folgenden zeigen wir einige Beispiele, wie Sie unterschiedliche Sanitizer-Konfigurationen erstellen können.

### Erstellen eines Standardsanitizers

Der Standardsanitizer wird wie folgt erstellt.

```js
const sanitizer = new Sanitizer();
```

Die XSS-sicheren [Sanitization-Methoden](/de/docs/Web/API/HTML_Sanitizer_API#sanitization_methods) erstellen denselben Sanitizer automatisch, wenn keine Optionen übergeben werden.

### Erstellen eines leeren Sanitizers

Um einen leeren Sanitizer zu erstellen, übergeben Sie ein leeres Objekt an den Konstruktor.
Die resultierende Sanitizer-Konfiguration wird unten gezeigt.

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

Dieses Beispiel zeigt, wie Sie einen "Erlauben-Sanitizer" erstellen könnten: einen Sanitizer, der nur eine Teilmenge von Attributen und Elementen zulässt.

Der Code verwendet zuerst den [`Sanitizer()`](/de/docs/Web/API/Sanitizer/Sanitizer)-Konstruktor, um einen `Sanitizer` zu erstellen, wobei ein [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) spezifiziert wird, das das Element `<div>`, `<p>` und `<script>` zulässt.

Das Beispiel verwendet dann `allowElement()`, um zusätzlich `<span>`-Elemente zu erlauben, `allowAttribute()`, um das Attribut `id` auf jedem Element zu erlauben, und die `replaceElementWithChildren()`-Methode, um festzulegen, dass `<b>`-Elemente durch ihren inneren Inhalt ersetzt werden sollen (dies ist eine Art "Erlauben", da Sie ausdrücklich einige Entitäten angeben, die behalten werden sollen).
Abschließend geben wir an, dass Kommentare beibehalten werden sollen.

```js
const sanitizer = new Sanitizer({ elements: ["div", "p", "script"] });
sanitizer.allowElement("span");
sanitizer.allowAttribute("id");
sanitizer.replaceElementWithChildren("b");
sanitizer.setComments(true);
```

### Erstellen eines "Entfernen"-Sanitizers

Dieses Beispiel zeigt, wie Sie einen "Entfernen-Sanitizer" erstellen könnten, der Elemente zum Entfernen aus dem Eingabematerial spezifiziert.

Der Code verwendet zuerst den [`Sanitizer()`](/de/docs/Web/API/Sanitizer/Sanitizer)-Konstruktor, um einen `Sanitizer` zu erstellen, wobei ein [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) spezifiziert wird, das das Element `<span>` und `<script>` entfernt.
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
