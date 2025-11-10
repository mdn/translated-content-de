---
title: Sanitizer
slug: Web/API/Sanitizer
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{APIRef("HTML Sanitizer API")}}{{SeeCompatTable}}

Das **`Sanitizer`**-Interface der [HTML Sanitizer API](/de/docs/Web/API/HTML_Sanitizer_API) definiert ein Konfigurationsobjekt, das festlegt, welche Elemente, Attribute und Kommentare erlaubt sind oder entfernt werden sollen, wenn HTML-Strings in ein [`Element`](/de/docs/Web/API/Element) oder [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) eingefügt werden, oder wenn ein HTML-String in ein [`Document`](/de/docs/Web/API/Document) geparst wird.

Eine `Sanitizer`-Instanz ist effektiv ein Wrapper um eine [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) und kann als Konfigurationsalternative in denselben [Sanitierungsmethoden](/de/docs/Web/API/HTML_Sanitizer_API#sanitization_methods) verwendet werden:

- [`setHTML()`](/de/docs/Web/API/Element/setHTML) oder [`setHTMLUnsafe()`](/de/docs/Web/API/Element/setHTMLUnsafe) auf einem [`Element`](/de/docs/Web/API/Element).
- [`setHTML()`](/de/docs/Web/API/ShadowRoot/setHTML) oder [`setHTMLUnsafe()`](/de/docs/Web/API/ShadowRoot/setHTMLUnsafe) auf einem [`ShadowRoot`](/de/docs/Web/API/ShadowRoot).
- Statische Methoden [`Document.parseHTML()`](/de/docs/Web/API/Document/parseHTML_static) oder [`Document.parseHTMLUnsafe()`](/de/docs/Web/API/Document/parseHTMLUnsafe_static).

Beachten Sie, dass `Sanitizer` effizienter wiederverwendet und bei Bedarf modifiziert werden kann.

## Konstruktoren

- [`Sanitizer()`](/de/docs/Web/API/Sanitizer/Sanitizer) {{experimental_inline}}
  - : Erstellt und gibt ein `Sanitizer`-Objekt zurück, optional mit einem benutzerdefinierten Sanitierungsverhalten, das in einer [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) definiert ist.

## Instanzmethoden

- [`Sanitizer.allowElement()`](/de/docs/Web/API/Sanitizer/allowElement) {{experimental_inline}}
  - : Legt ein Element als vom Sanitizer erlaubt fest, optional mit einem Array von Attributen, die erlaubt oder nicht erlaubt sind.
- [`Sanitizer.get()`](/de/docs/Web/API/Sanitizer/get) {{experimental_inline}}
  - : Gibt die aktuelle `Sanitizer`-Konfiguration als eine [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig)-Wörterbuchinstanz zurück.
- [`Sanitizer.removeElement()`](/de/docs/Web/API/Sanitizer/removeElement) {{experimental_inline}}
  - : Legt ein Element fest, das vom Sanitizer entfernt werden soll.
- [`Sanitizer.removeUnsafe()`](/de/docs/Web/API/Sanitizer/removeUnsafe) {{experimental_inline}}
  - : Aktualisiert die Konfiguration des Sanitizers so, dass er jegliches XSS-unsichere HTML entfernt.
- [`Sanitizer.replaceElementWithChildren()`](/de/docs/Web/API/Sanitizer/replaceElementWithChildren) {{experimental_inline}}
  - : Legt ein Element fest, das durch seine Kindelemente ersetzt werden soll.
- [`Sanitizer.allowAttribute()`](/de/docs/Web/API/Sanitizer/allowAttribute) {{experimental_inline}}
  - : Legt ein Attribut fest, das an jedem Element erlaubt ist.
- [`Sanitizer.removeAttribute()`](/de/docs/Web/API/Sanitizer/removeAttribute) {{experimental_inline}}
  - : Legt ein Attribut fest, das von jedem Element entfernt werden soll.
- [`Sanitizer.setComments()`](/de/docs/Web/API/Sanitizer/setComments) {{experimental_inline}}
  - : Legt fest, ob Kommentare vom Sanitizer erlaubt oder entfernt werden.
- [`Sanitizer.setDataAttributes()`](/de/docs/Web/API/Sanitizer/setDataAttributes) {{experimental_inline}}
  - : Legt fest, ob Datenattribute an Elementen vom Sanitizer erlaubt oder entfernt werden.

## Beispiele

Weitere Beispiele finden Sie in der [HTML Sanitizer API](/de/docs/Web/API/HTML_Sanitizer_API) und den einzelnen Methoden. Unten zeigen wir einige Beispiele, wie Sie unterschiedliche Konfigurationen für den Sanitizer erstellen können.

### Erstellen eines Standard-Sanitizers

Der Standard-Sanitizer wird wie unten gezeigt konstruiert.

```js
const sanitizer = new Sanitizer();
```

Die XSS-sicheren [Sanitierungsmethoden](/de/docs/Web/API/HTML_Sanitizer_API#sanitization_methods) erstellen denselben Sanitizer automatisch, wenn keine Optionen übergeben werden.

### Erstellen eines leeren Sanitizers

Um einen leeren Sanitizer zu erstellen, übergeben Sie ein leeres Objekt an den Konstruktor. Die resultierende Sanitizer-Konfiguration wird unten gezeigt.

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

Dieses Beispiel zeigt, wie Sie einen "Allow Sanitizer" erstellen können: einen Sanitizer, der nur eine Teilmenge von Attributen und Elementen zulässt.

Der Code verwendet zuerst den [`Sanitizer()`](/de/docs/Web/API/Sanitizer/Sanitizer)-Konstruktor, um einen `Sanitizer` zu erstellen, wobei eine [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) angegeben wird, die die Elemente `<div>`, `<p>` und `<script>` zulässt.

Das Beispiel verwendet dann `allowElement()`, um weitere `<span>`-Elemente zuzulassen, `allowAttribute()`, um das `id`-Attribut an jedem Element zuzulassen, und die `replaceElementWithChildren()`-Methode, um festzulegen, dass jedes `<b>`-Element durch seinen inneren Inhalt ersetzt werden soll (dies ist eine Art "Allow", indem Sie explizit einige Entitäten angeben, die beibehalten werden sollen). Schließlich geben wir an, dass Kommentare beibehalten werden sollen.

```js
const sanitizer = new Sanitizer({ elements: ["div", "p", "script"] });
sanitizer.allowElement("span");
sanitizer.allowAttribute("id");
sanitizer.replaceElementWithChildren("b");
sanitizer.setComments(true);
```

### Erstellen eines "Remove"-Sanitizers

Dieses Beispiel zeigt, wie Sie einen "Remove Sanitizer" erstellen können, der zu entfernende Elemente aus der Eingabe spezifiziert.

Der Code verwendet zuerst den [`Sanitizer()`](/de/docs/Web/API/Sanitizer/Sanitizer)-Konstruktor, um einen `Sanitizer` zu erstellen, wobei eine [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) angegeben wird, die die Elemente `<span>` und `<script>` entfernt. Wir verwenden dann `removeElement()`, um `<h6>` zur Liste der zu entfernenden Elemente hinzuzufügen, und `removeAttribute()`, um `lang` aus der Attributliste zu entfernen. Außerdem entfernen wir Kommentare.

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
