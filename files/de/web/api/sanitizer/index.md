---
title: Sanitizer
slug: Web/API/Sanitizer
l10n:
  sourceCommit: 2033446e38e93f71eb28a0efd3f663a8e0e7aeb7
---

{{APIRef("HTML Sanitizer API")}}

Das **`Sanitizer`**-Interface der [HTML Sanitizer API](/de/docs/Web/API/HTML_Sanitizer_API) definiert ein Konfigurationsobjekt, das angibt, welche Elemente, Attribute und Kommentare erlaubt sind oder entfernt werden sollten, wenn HTML-Zeichenfolgen in ein [`Element`](/de/docs/Web/API/Element) oder [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) eingefügt werden, oder wenn eine HTML-Zeichenfolge in ein [`Document`](/de/docs/Web/API/Document) geparst wird.

Eine `Sanitizer`-Instanz ist effektiv ein Wrapper um eine [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) und kann als alternative Konfiguration in denselben [Sanitization-Methoden](/de/docs/Web/API/HTML_Sanitizer_API#sanitization_methods) verwendet werden:

- [`setHTMLUnsafe()`](/de/docs/Web/API/Element/setHTMLUnsafe) oder [`setHTMLUnsafe()`](/de/docs/Web/API/Element/setHTMLUnsafe) auf [`Element`](/de/docs/Web/API/Element).
- [`setHTMLUnsafe()`](/de/docs/Web/API/ShadowRoot/setHTMLUnsafe) oder [`setHTMLUnsafe()`](/de/docs/Web/API/ShadowRoot/setHTMLUnsafe) auf [`ShadowRoot`](/de/docs/Web/API/ShadowRoot).
- Statische Methoden [`Document.parseHTMLUnsafe()`](/de/docs/Web/API/Document/parseHTMLUnsafe_static) oder [`Document.parseHTML()`](/de/docs/Web/API/Document/parseHTML_static).

Beachten Sie, dass `Sanitizer` effizienter wiederverwendet und bei Bedarf modifiziert werden kann.

## Konstruktoren

- [`Sanitizer()`](/de/docs/Web/API/Sanitizer/Sanitizer)
  - : Erstellt und gibt ein `Sanitizer`-Objekt zurück, optional mit benutzerdefiniertem Sanitisierungsverhalten, das in einer [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) definiert ist.

## Instanzmethoden

- [`Sanitizer.allowElement()`](/de/docs/Web/API/Sanitizer/allowElement)
  - : Legt ein Element als vom Sanitizer erlaubt fest, optional mit einem Array von Attributen, die erlaubt oder nicht erlaubt sind.
- [`Sanitizer.get()`](/de/docs/Web/API/Sanitizer/get)
  - : Gibt die aktuelle `Sanitizer`-Konfiguration als ein [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig)-Dictionary-Instanz zurück.
- [`Sanitizer.removeElement()`](/de/docs/Web/API/Sanitizer/removeElement)
  - : Legt ein Element fest, das vom Sanitizer entfernt werden soll.
- [`Sanitizer.removeUnsafe()`](/de/docs/Web/API/Sanitizer/removeUnsafe)
  - : Aktualisiert die Sanitizer-Konfiguration so, dass jedes XSS-unsichere HTML entfernt wird.
- [`Sanitizer.replaceElementWithChildren()`](/de/docs/Web/API/Sanitizer/replaceElementWithChildren)
  - : Legt fest, dass ein Element durch seine untergeordneten HTML-Elemente ersetzt werden soll.
- [`Sanitizer.allowAttribute()`](/de/docs/Web/API/Sanitizer/allowAttribute)
  - : Legt ein Attribut als auf jedem Element erlaubt fest.
- [`Sanitizer.removeAttribute()`](/de/docs/Web/API/Sanitizer/removeAttribute)
  - : Legt ein Attribut fest, das von jedem Element entfernt werden soll.
- [`Sanitizer.setComments()`](/de/docs/Web/API/Sanitizer/setComments)
  - : Legt fest, ob Kommentare vom Sanitizer erlaubt oder entfernt werden.
- [`Sanitizer.setDataAttributes()`](/de/docs/Web/API/Sanitizer/setDataAttributes)
  - : Legt fest, ob Datenattribute auf Elementen vom Sanitizer erlaubt oder entfernt werden.

## Beispiele

Weitere Beispiele finden Sie in der [HTML Sanitizer API](/de/docs/Web/API/HTML_Sanitizer_API) und den einzelnen Methoden. Unten zeigen wir einige Beispiele, wie Sie verschiedene Sanitizer-Konfigurationen erstellen können.

### Erstellen eines Standard-Sanitizers

Der Standard-Sanitizer wird wie unten gezeigt erstellt.

```js
const sanitizer = new Sanitizer();
```

Die XSS-sicheren [Sanitization-Methoden](/de/docs/Web/API/HTML_Sanitizer_API#sanitization_methods) erstellen denselben Sanitizer automatisch, wenn keine Optionen übergeben werden.

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

### Erstellen eines "allow"-Sanitizers

Dieses Beispiel zeigt, wie Sie einen "allow Sanitizer" erstellen können: einen Sanitizer, der nur eine Teilmenge von Attributen und Elementen erlaubt.

Der Code verwendet zuerst den [`Sanitizer()`](/de/docs/Web/API/Sanitizer/Sanitizer)-Konstruktor, um einen `Sanitizer` zu erstellen, unter Angabe einer [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig), die das Element `<div>`, `<p>` und `<script>` erlaubt.

Das Beispiel verwendet dann `allowElement()`, um zusätzlich `<span>`-Elemente zu erlauben, `allowAttribute()`, um das `id`-Attribut auf jedem Element zu erlauben, und die Methode `replaceElementWithChildren()`, um festzulegen, dass jedes `<b>`-Element durch seinen inneren Inhalt ersetzt werden soll (dies ist eine Art "allow", da Sie ausdrücklich einige Entitäten angeben, die beibehalten werden sollen). Schließlich legen wir fest, dass Kommentare beibehalten werden sollen.

```js
const sanitizer = new Sanitizer({ elements: ["div", "p", "script"] });
sanitizer.allowElement("span");
sanitizer.allowAttribute("id");
sanitizer.replaceElementWithChildren("b");
sanitizer.setComments(true);
```

### Erstellen eines "remove"-Sanitizers

Dieses Beispiel zeigt, wie Sie einen "remove Sanitizer" erstellen können, um Elemente aus der Eingabe zu entfernen.

Der Code verwendet zuerst den [`Sanitizer()`](/de/docs/Web/API/Sanitizer/Sanitizer)-Konstruktor, um einen `Sanitizer` zu erstellen, unter Angabe einer [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig), die das Element `<span>` und `<script>` entfernt.
Wir verwenden dann `removeElement()`, um `<h6>` zur Liste der zu entfernenden Elemente hinzuzufügen, und `removeAttribute()`, um `lang` aus der Attributliste zu entfernen. Wir entfernen auch Kommentare.

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
