---
title: Sanitizer
slug: Web/API/Sanitizer
l10n:
  sourceCommit: baec726bf3fe1bd82cf22a0f8ba9523e0f7ccd80
---

{{APIRef("HTML Sanitizer API")}}{{SeeCompatTable}}

Das **`Sanitizer`**-Interface der [HTML Sanitizer API](/de/docs/Web/API/HTML_Sanitizer_API) definiert ein Konfigurationsobjekt, das angibt, welche Elemente, Attribute und Kommentare erlaubt sind oder entfernt werden sollen, wenn HTML-Strings in ein [`Element`](/de/docs/Web/API/Element) oder [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) eingefügt oder ein HTML-String in ein [`Document`](/de/docs/Web/API/Document) geparst werden.

Eine `Sanitizer`-Instanz ist im Wesentlichen ein Wrapper um eine [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) und kann als Konfigurationsalternative in den gleichen [Sanitisierungsmethoden](/de/docs/Web/API/HTML_Sanitizer_API#sanitization_methods) verwendet werden:

- [`setHTMLUnsafe()`](/de/docs/Web/API/Element/setHTMLUnsafe) oder [`setHTMLUnsafe()`](/de/docs/Web/API/Element/setHTMLUnsafe) auf [`Element`](/de/docs/Web/API/Element).
- [`setHTMLUnsafe()`](/de/docs/Web/API/ShadowRoot/setHTMLUnsafe) oder [`setHTMLUnsafe()`](/de/docs/Web/API/ShadowRoot/setHTMLUnsafe) auf [`ShadowRoot`](/de/docs/Web/API/ShadowRoot).
- [`Document.parseHTMLUnsafe()`](/de/docs/Web/API/Document/parseHTMLUnsafe_static) oder [`Document.parseHTML()`](/de/docs/Web/API/Document/parseHTML_static) statische Methoden.

Beachten Sie, dass `Sanitizer` voraussichtlich effizienter wiederzuverwenden und bei Bedarf zu ändern ist.

## Konstruktoren

- [`Sanitizer()`](/de/docs/Web/API/Sanitizer/Sanitizer) {{experimental_inline}}
  - : Erstellt und gibt ein `Sanitizer`-Objekt zurück, optional mit benutzerdefiniertem Sanitisierungsverhalten, das in einer [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) definiert ist.

## Instanzmethoden

- [`Sanitizer.allowElement()`](/de/docs/Web/API/Sanitizer/allowElement) {{experimental_inline}}
  - : Legt ein Element fest, das vom Sanitizer erlaubt ist, optional mit einem Array von Attributen, die erlaubt oder nicht erlaubt sind.
- [`Sanitizer.get()`](/de/docs/Web/API/Sanitizer/get) {{experimental_inline}}
  - : Gibt die aktuelle `Sanitizer`-Konfiguration als [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig)-Dictionary-Instanz zurück.
- [`Sanitizer.removeElement()`](/de/docs/Web/API/Sanitizer/removeElement) {{experimental_inline}}
  - : Legt ein Element fest, das vom Sanitizer entfernt werden soll.
- [`Sanitizer.removeUnsafe()`](/de/docs/Web/API/Sanitizer/removeUnsafe) {{experimental_inline}}
  - : Aktualisiert die Sanitisierungskonfiguration so, dass jegliches XSS-gefährliche HTML entfernt wird.
- [`Sanitizer.replaceElementWithChildren()`](/de/docs/Web/API/Sanitizer/replaceElementWithChildren) {{experimental_inline}}
  - : Legt fest, dass ein Element durch seine untergeordneten HTML-Elemente ersetzt werden soll.
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
Unten zeigen wir einige Beispiele, wie Sie unterschiedliche Sanitizer-Konfigurationen erstellen könnten.

### Erstellen eines Standardsanitizers

Der Standardsanitizer wird wie unten gezeigt konstruiert.

```js
const sanitizer = new Sanitizer();
```

Die XSS-sicheren [Sanitisierungsmethoden](/de/docs/Web/API/HTML_Sanitizer_API#sanitization_methods) erstellen denselben Sanitizer automatisch, wenn keine Optionen übergeben werden.

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

### Erstellen eines "Allow"-Sanitizers

In diesem Beispiel wird gezeigt, wie Sie einen "Allow-Sanitizer" erstellen können: einen Sanitizer, der nur eine Teilmenge von Attributen und Elementen erlaubt.

Der Code verwendet zunächst den [`Sanitizer()`](/de/docs/Web/API/Sanitizer/Sanitizer)-Konstruktor, um einen `Sanitizer` zu erstellen und eine [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) zu spezifizieren, die das Element `<div>`, `<p>` und `<script>` erlaubt.

Das Beispiel verwendet dann `allowElement()`, um `<span>`-Elemente weiter zu erlauben, `allowAttribute()`, um das `id`-Attribut bei jedem Element zu erlauben, und die Methode `replaceElementWithChildren()`, um festzulegen, dass alle `<b>`-Elemente durch ihren inneren Inhalt ersetzt werden sollen (dies ist eine Art "Allow", da Sie explizit einige Entitäten angeben, die beibehalten werden sollen). Schließlich geben wir an, dass Kommentare behalten werden sollen.

```js
const sanitizer = new Sanitizer({ elements: ["div", "p", "script"] });
sanitizer.allowElement("span");
sanitizer.allowAttribute("id");
sanitizer.replaceElementWithChildren("b");
sanitizer.setComments(true);
```

### Erstellen eines "Remove"-Sanitizers

Dieses Beispiel zeigt, wie Sie einen "Remove-Sanitizer" erstellen, um festzulegen, welche Elemente entfernt werden sollen.

Der Code verwendet zunächst den [`Sanitizer()`](/de/docs/Web/API/Sanitizer/Sanitizer)-Konstruktor, um einen `Sanitizer` zu erstellen und eine [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) zu spezifizieren, die das Element `<span>` und `<script>` entfernt.
Wir verwenden dann `removeElement()`, um `<h6>` zur Liste der zu entfernenden Elemente hinzuzufügen, und `removeAttribute()`, um `lang` aus der Attributliste zu entfernen. Außerdem entfernen wir Kommentare.

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
