---
title: Sanitizer
slug: Web/API/Sanitizer
l10n:
  sourceCommit: 94ffd165232b5205418f8aa57127ee0854421db2
---

{{APIRef("HTML Sanitizer API")}}{{SeeCompatTable}}

Das **`Sanitizer`**-Interface der [HTML Sanitizer API](/de/docs/Web/API/HTML_Sanitizer_API) definiert ein Konfigurationsobjekt, das angibt, welche Elemente, Attribute und Kommentare erlaubt sind oder entfernt werden sollten, wenn HTML-Zeichenfolgen in ein [`Element`](/de/docs/Web/API/Element) oder ein [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) eingefügt oder wenn eine HTML-Zeichenfolge in ein [`Document`](/de/docs/Web/API/Document) geparst wird.

Eine `Sanitizer`-Instanz ist im Wesentlichen ein Wrapper um ein [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) und kann als Konfigurationsalternative in denselben [Sanitisierungsmethoden](/de/docs/Web/API/HTML_Sanitizer_API#sanitization_methods) übergeben werden:

- [`setHTML()`](/de/docs/Web/API/Element/setHTML) oder [`setHTMLUnsafe()`](/de/docs/Web/API/Element/setHTMLUnsafe) auf [`Element`](/de/docs/Web/API/Element).
- [`setHTML()`](/de/docs/Web/API/ShadowRoot/setHTML) oder [`setHTMLUnsafe()`](/de/docs/Web/API/ShadowRoot/setHTMLUnsafe) auf [`ShadowRoot`](/de/docs/Web/API/ShadowRoot).
- [`Document.parseHTML()`](/de/docs/Web/API/Document/parseHTML_static) oder [`Document.parseHTMLUnsafe()`](/de/docs/Web/API/Document/parseHTMLUnsafe_static) statische Methoden.

Beachten Sie, dass `Sanitizer` erwartet wird, effizienter zur Anpassung und Änderung wiederverwendet zu werden, wenn nötig.

## Konstruktoren

- [`Sanitizer()`](/de/docs/Web/API/Sanitizer/Sanitizer) {{experimental_inline}}
  - : Erstellt und gibt ein `Sanitizer`-Objekt zurück, optional mit benutzerdefiniertem Sanitisierungsverhalten, das in einem [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) definiert ist.

## Instanzmethoden

- [`Sanitizer.allowElement()`](/de/docs/Web/API/Sanitizer/allowElement) {{experimental_inline}}
  - : Legt ein Element als vom Sanitizer erlaubt fest, optional mit einem Array von Attributen, die erlaubt oder nicht erlaubt sind.
- [`Sanitizer.get()`](/de/docs/Web/API/Sanitizer/get) {{experimental_inline}}
  - : Gibt die aktuelle `Sanitizer`-Konfiguration als Dictionary-Instanz von [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) zurück.
- [`Sanitizer.removeElement()`](/de/docs/Web/API/Sanitizer/removeElement) {{experimental_inline}}
  - : Legt ein Element fest, das vom Sanitizer entfernt werden soll.
- [`Sanitizer.removeUnsafe()`](/de/docs/Web/API/Sanitizer/removeUnsafe) {{experimental_inline}}
  - : Aktualisiert die Sanitizer-Konfiguration so, dass sämtliches XSS-unsicheres HTML entfernt wird.
- [`Sanitizer.replaceElementWithChildren()`](/de/docs/Web/API/Sanitizer/replaceElementWithChildren) {{experimental_inline}}
  - : Legt fest, dass ein Element durch seine Kind-HTML-Elemente ersetzt werden soll.
- [`Sanitizer.allowAttribute()`](/de/docs/Web/API/Sanitizer/allowAttribute) {{experimental_inline}}
  - : Legt ein Attribut als auf jedem Element erlaubt fest.
- [`Sanitizer.removeAttribute()`](/de/docs/Web/API/Sanitizer/removeAttribute) {{experimental_inline}}
  - : Legt ein Attribut fest, das von jedem Element entfernt werden soll.
- [`Sanitizer.setComments()`](/de/docs/Web/API/Sanitizer/setComments) {{experimental_inline}}
  - : Legt fest, ob Kommentare vom Sanitizer erlaubt oder entfernt werden.
- [`Sanitizer.setDataAttributes()`](/de/docs/Web/API/Sanitizer/setDataAttributes) {{experimental_inline}}
  - : Legt fest, ob Datenattribute auf Elementen vom Sanitizer erlaubt oder entfernt werden.

## Beispiele

Weitere Beispiele finden Sie in der [HTML Sanitizer API](/de/docs/Web/API/HTML_Sanitizer_API) und den einzelnen Methoden. Im Folgenden zeigen wir einige Beispiele, wie Sie verschiedene Sanitizer-Konfigurationen erstellen könnten.

### Erstellen eines Standardsanitizers

Der Standard-Sanitizer wird wie unten gezeigt erstellt.

```js
const sanitizer = new Sanitizer();
```

Die XSS-sicheren [Sanitisierungsmethoden](/de/docs/Web/API/HTML_Sanitizer_API#sanitization_methods) erstellen denselben Sanitizer automatisch, wenn keine Optionen übergeben werden.

### Erstellen eines leeren Sanitizers

Um einen leeren Sanitizer zu erstellen, übergeben Sie dem Konstruktor ein leeres Objekt. Die resultierende Sanitizer-Konfiguration ist unten gezeigt.

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

Dieses Beispiel zeigt, wie Sie einen "Erlauben-Sanitizer" erstellen könnten: einen Sanitizer, der nur eine Teilmenge von Attributen und Elementen erlaubt.

Der Code verwendet zuerst den [`Sanitizer()`](/de/docs/Web/API/Sanitizer/Sanitizer) Konstruktor, um einen `Sanitizer` zu erstellen, und spezifiziert eine [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig), die die Elemente `<div>`, `<p>` und `<script>` erlaubt.

Das Beispiel verwendet dann `allowElement()`, um zusätzlich `<span>`-Elemente zu erlauben, `allowAttribute()`, um das `id`-Attribut auf jedem Element zu erlauben, und die `replaceElementWithChildren()`-Methode, um festzulegen, dass `<b>`-Elemente durch ihren inneren Inhalt ersetzt werden sollen (dies ist eine Art "Erlauben", da Sie explizit einige Entitäten zum Behalten angeben). Schließlich geben wir an, dass Kommentare beibehalten werden sollen.

```js
const sanitizer = new Sanitizer({ elements: ["div", "p", "script"] });
sanitizer.allowElement("span");
sanitizer.allowAttribute("id");
sanitizer.replaceElementWithChildren("b");
sanitizer.setComments(true);
```

### Erstellen eines "Entfernen"-Sanitizers

Dieses Beispiel zeigt, wie Sie einen "Entfernen-Sanitizer" erstellen könnten, indem Sie Elemente angeben, die aus dem Eingabedokument entfernt werden sollen.

Der Code verwendet zuerst den [`Sanitizer()`](/de/docs/Web/API/Sanitizer/Sanitizer) Konstruktor, um einen `Sanitizer` zu erstellen und spezifiziert eine [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig), die die Elemente `<span>` und `<script>` entfernt. Dann verwenden wir `removeElement()`, um `<h6>` zur Liste der zu entfernenden Elemente hinzuzufügen, und `removeAttribute()`, um `lang` von der Attributsliste zu entfernen. Wir entfernen auch Kommentare.

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
