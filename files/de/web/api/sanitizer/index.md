---
title: Sanitizer
slug: Web/API/Sanitizer
l10n:
  sourceCommit: ba886c384e385689ce8feffacf4f7ce1d8c5e736
---

{{APIRef("HTML Sanitizer API")}}

Die **`Sanitizer`**-Schnittstelle der [HTML Sanitizer API](/de/docs/Web/API/HTML_Sanitizer_API) definiert ein Konfigurationsobjekt, das spezifiziert, welche Elemente, Attribute und Kommentare erlaubt sind oder entfernt werden sollen, wenn HTML-Strings in ein [`Element`](/de/docs/Web/API/Element) oder [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) eingefügt werden oder wenn ein HTML-String in ein [`Document`](/de/docs/Web/API/Document) geparst wird.

Eine `Sanitizer`-Instanz ist effektiv ein Wrapper um eine [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) und kann als Konfigurationsalternative in den gleichen [Sanitisierungs-Methoden](/de/docs/Web/API/HTML_Sanitizer_API#sanitization_methods) verwendet werden:

- [`setHTML()`](/de/docs/Web/API/Element/setHTML) oder [`setHTMLUnsafe()`](/de/docs/Web/API/Element/setHTMLUnsafe) auf [`Element`](/de/docs/Web/API/Element).
- [`setHTML()`](/de/docs/Web/API/ShadowRoot/setHTML) oder [`setHTMLUnsafe()`](/de/docs/Web/API/ShadowRoot/setHTMLUnsafe) auf [`ShadowRoot`](/de/docs/Web/API/ShadowRoot).
- [`Document.parseHTML()`](/de/docs/Web/API/Document/parseHTML_static) oder [`Document.parseHTMLUnsafe()`](/de/docs/Web/API/Document/parseHTMLUnsafe_static) statische Methoden.

Beachten Sie, dass `Sanitizer` erwartungsgemäß effizienter ist, um bei Bedarf wiederverwendet und modifiziert zu werden.

## Konstruktoren

- [`Sanitizer()`](/de/docs/Web/API/Sanitizer/Sanitizer)
  - : Erstellt und gibt ein `Sanitizer`-Objekt zurück, optional mit benutzerdefiniertem Sanitisierungsverhalten, das in einer [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) definiert ist.

## Instanzmethoden

- [`Sanitizer.allowElement()`](/de/docs/Web/API/Sanitizer/allowElement)
  - : Setzt ein Element als vom Sanitizer erlaubt, optional mit einem Array von Attributen, die erlaubt oder nicht erlaubt sind.
- [`Sanitizer.get()`](/de/docs/Web/API/Sanitizer/get)
  - : Gibt die aktuelle `Sanitizer`-Konfiguration als [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig)-Dictionary-Instanz zurück.
- [`Sanitizer.removeElement()`](/de/docs/Web/API/Sanitizer/removeElement)
  - : Setzt ein Element so, dass es vom Sanitizer entfernt wird.
- [`Sanitizer.removeUnsafe()`](/de/docs/Web/API/Sanitizer/removeUnsafe)
  - : Aktualisiert die Sanitizer-Konfiguration so, dass jegliches XSS-unsichere HTML entfernt wird.
- [`Sanitizer.replaceElementWithChildren()`](/de/docs/Web/API/Sanitizer/replaceElementWithChildren)
  - : Setzt ein Element so, dass es durch seine Kind-HTML-Elemente ersetzt wird.
- [`Sanitizer.allowAttribute()`](/de/docs/Web/API/Sanitizer/allowAttribute)
  - : Setzt ein Attribut als auf jedem Element erlaubt.
- [`Sanitizer.removeAttribute()`](/de/docs/Web/API/Sanitizer/removeAttribute)
  - : Setzt ein Attribut so, dass es von jedem Element entfernt wird.
- [`Sanitizer.setComments()`](/de/docs/Web/API/Sanitizer/setComments)
  - : Legt fest, ob Kommentare vom Sanitizer erlaubt oder entfernt werden.
- [`Sanitizer.setDataAttributes()`](/de/docs/Web/API/Sanitizer/setDataAttributes)
  - : Legt fest, ob Dateneigenschaften auf Elementen vom Sanitizer erlaubt oder entfernt werden.

## Beispiele

Für weitere Beispiele sehen Sie die [HTML Sanitizer API](/de/docs/Web/API/HTML_Sanitizer_API) und die einzelnen Methoden. Nachfolgend zeigen wir einige Beispiele, wie Sie verschiedene Sanitizer-Konfigurationen erstellen könnten.

### Erstellen eines Standard-Sanitizers

Der Standard-Sanitizer wird wie unten gezeigt konstruiert.

```js
const sanitizer = new Sanitizer();
```

Die XSS-sicheren [Sanitisierungs-Methoden](/de/docs/Web/API/HTML_Sanitizer_API#sanitization_methods) erstellen denselben Sanitizer automatisch, wenn keine Optionen übergeben werden.

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

Dieses Beispiel zeigt, wie Sie einen "Allow"-Sanitizer erstellen: einen Sanitizer, der nur eine Teilmenge von Attributen und Elementen zulässt.

Der Code verwendet zunächst den [`Sanitizer()`](/de/docs/Web/API/Sanitizer/Sanitizer) Konstruktor, um einen `Sanitizer` zu erstellen, wobei eine [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) angegeben wird, die die Elemente `<div>`, `<p>` und `<script>` zulässt.

Das Beispiel verwendet dann `allowElement()`, um zusätzlich `<span>`-Elemente zuzulassen, `allowAttribute()`, um das `id`-Attribut auf jedem Element zuzulassen, und die `replaceElementWithChildren()`-Methode, um festzulegen, dass `<b>`-Elemente durch ihren inneren Inhalt ersetzt werden sollen (dies ist eine Art von "Allow", da Sie explizit einige Entitäten spezifizieren, die beibehalten werden sollen). Schließlich geben wir an, dass Kommentare beibehalten werden sollen.

```js
const sanitizer = new Sanitizer({ elements: ["div", "p", "script"] });
sanitizer.allowElement("span");
sanitizer.allowAttribute("id");
sanitizer.replaceElementWithChildren("b");
sanitizer.setComments(true);
```

### Erstellen eines "Remove"-Sanitizers

Dieses Beispiel zeigt, wie Sie einen "Remove"-Sanitizer erstellen, der angibt, welche Elemente aus der Eingabe entfernt werden sollen.

Der Code verwendet zunächst den [`Sanitizer()`](/de/docs/Web/API/Sanitizer/Sanitizer) Konstruktor, um einen `Sanitizer` zu erstellen, wobei eine [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) angegeben wird, die die Elemente `<span>` und `<script>` entfernt. Dann verwenden wir `removeElement()`, um `<h6>` zur Liste der zu entfernenden Elemente hinzuzufügen, und `removeAttribute()`, um `lang` von der Attributliste zu entfernen. Wir entfernen auch Kommentare.

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
