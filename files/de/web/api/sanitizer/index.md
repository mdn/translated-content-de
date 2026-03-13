---
title: Sanitizer
slug: Web/API/Sanitizer
l10n:
  sourceCommit: cda9415220ba812ba2ee24e0af1c8e8001ab9924
---

{{APIRef("HTML Sanitizer API")}}

Das **`Sanitizer`** Interface der [HTML Sanitizer API](/de/docs/Web/API/HTML_Sanitizer_API) definiert ein Konfigurationsobjekt, das festlegt, welche Elemente, Attribute und Kommentare erlaubt sind oder entfernt werden sollen, wenn HTML-Strings in ein [`Element`](/de/docs/Web/API/Element) oder [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) eingefügt werden oder wenn ein HTML-String in ein [`Document`](/de/docs/Web/API/Document) geparst wird.

## Konstruktoren

- [`Sanitizer()`](/de/docs/Web/API/Sanitizer/Sanitizer)
  - : Erstellt und gibt ein `Sanitizer`-Objekt zurück, optional mit benutzerdefiniertem Sanitierungsverhalten, das in einer [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) definiert ist.

## Instanzmethoden

- [`Sanitizer.allowElement()`](/de/docs/Web/API/Sanitizer/allowElement)
  - : Legt ein Element fest, das durch den Sanitizer erlaubt wird, optional mit einem Array von Attributen, die erlaubt oder nicht erlaubt sind.
- [`Sanitizer.get()`](/de/docs/Web/API/Sanitizer/get)
  - : Gibt die aktuelle `Sanitizer`-Konfiguration als eine [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) Wörterbuchinstanz zurück.
- [`Sanitizer.removeElement()`](/de/docs/Web/API/Sanitizer/removeElement)
  - : Legt ein Element fest, das durch den Sanitizer entfernt wird.
- [`Sanitizer.removeUnsafe()`](/de/docs/Web/API/Sanitizer/removeUnsafe)
  - : Aktualisiert die Sanitizer-Konfiguration, sodass sie jegliches XSS-unsichere HTML entfernt.
- [`Sanitizer.replaceElementWithChildren()`](/de/docs/Web/API/Sanitizer/replaceElementWithChildren)
  - : Legt ein Element fest, das durch seine HTML-Kindelemente ersetzt wird.
- [`Sanitizer.allowAttribute()`](/de/docs/Web/API/Sanitizer/allowAttribute)
  - : Legt ein Attribut fest, das bei jedem Element erlaubt ist.
- [`Sanitizer.removeAttribute()`](/de/docs/Web/API/Sanitizer/removeAttribute)
  - : Legt ein Attribut fest, das von jedem Element entfernt werden soll.
- [`Sanitizer.setComments()`](/de/docs/Web/API/Sanitizer/setComments)
  - : Legt fest, ob Kommentare durch den Sanitizer erlaubt oder entfernt werden.
- [`Sanitizer.setDataAttributes()`](/de/docs/Web/API/Sanitizer/setDataAttributes)
  - : Legt fest, ob Datenattribute bei Elementen durch den Sanitizer erlaubt oder entfernt werden.

## Beschreibung

Ein `Sanitizer` ist ein wiederverwendbares Konfigurationsobjekt, das festlegt, welche Elemente, Attribute und Kommentare erlaubt sind oder entfernt werden sollen, wenn HTML-Strings in ein [`Element`](/de/docs/Web/API/Element) oder [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) eingefügt werden oder wenn ein HTML-String in ein [`Document`](/de/docs/Web/API/Document) geparst wird.
Es kann mit den folgenden [Sanitisierungsmethoden](/de/docs/Web/API/HTML_Sanitizer_API#sanitization_methods) verwendet werden:

- Sichere Methoden: [`Element.setHTML()`](/de/docs/Web/API/Element/setHTML), [`ShadowRoot.setHTML()`](/de/docs/Web/API/ShadowRoot/setHTML) und [`Document.parseHTML()`](/de/docs/Web/API/Document/parseHTML_static).
- Unsichere Methoden: [`Element.setHTMLUnsafe()`](/de/docs/Web/API/Element/setHTMLUnsafe), [`ShadowRoot.setHTMLUnsafe()`](/de/docs/Web/API/ShadowRoot/setHTMLUnsafe) und [`Document.parseHTMLUnsafe()`](/de/docs/Web/API/Document/parseHTMLUnsafe_static).

Eine `Sanitizer`-Instanz kann aus einer [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) konstruiert werden und ist im Wesentlichen ein Wrapper um dieses Objekt. Ein `Sanitizer` und eine `SanitizerConfig` können mit den gleichen Methoden verwendet werden, aber wenn dieselbe Konfiguration mehrfach verwendet wird, ist es voraussichtlich effizienter, einen `Sanitizer` zu verwenden und diesen bei Bedarf zu ändern.
Wenn dem Konstruktor keine `SanitizerConfig` übergeben wird, wird der Sanitizer mit der [Standard-Sanitizerkonfiguration](/de/docs/Web/API/HTML_Sanitizer_API/Default_sanitizer_configuration) erstellt, die XSS-unsichere Elemente und Attribute sowie andere Elemente und Attribute, die potenziell für andere Angriffe wie Clickjacking und Spoofing genutzt werden können, entfernt.

Beachten Sie, dass jeder `Sanitizer` XSS-sicher gemacht werden kann, indem [`Sanitizer.removeUnsafe()`](/de/docs/Web/API/Sanitizer/removeUnsafe) aufgerufen wird, aber andere potenziell gefährliche Elemente und Attribute — die durch die Standardkonfiguration entfernt werden — können weiterhin vorhanden sein.

### Verwendung von `Sanitizer` mit den Sanitisierungsmethoden

Die Standardkonfiguration des `Sanitizer` wird automatisch verwendet, wenn kein `Sanitizer` an [`Element.setHTML`](/de/docs/Web/API/Element/setHTML) oder die anderen sicheren Sanitisierungsmethoden übergeben wird.
Dies ist eine vernünftige Standardeinstellung, da sie die Angriffsfläche einschränkt, während die Mehrheit der Anwendungsfälle weiterhin möglich ist.

Wenn ein benutzerdefinierter Sanitizer an diese Methoden übergeben wird, würden alle XSS-unsicheren Elemente und Attribute, die durch den Sanitizer erlaubt werden, ebenfalls entfernt.
Beachten Sie, dass, obwohl dies dieselben Elemente wie [`Sanitizer.removeUnsafe()`](/de/docs/Web/API/Sanitizer/removeUnsafe) entfernt, der übergebene `Sanitizer` durch die Operation tatsächlich nicht geändert wird: er wäre "unsicher", wenn er in einer unsicheren Methode verwendet wird.

Die unsicheren Sanitisierungsmethoden führen standardmäßig keine Sanitisierung durch.
Sie können jedoch, wie bereits erwähnt, [`Sanitizer.removeUnsafe()`](/de/docs/Web/API/Sanitizer/removeUnsafe) aufrufen, um alle XSS-unsicheren Elemente zu entfernen (wenn Sie die Standardkonfiguration verwenden möchten, sollten Sie die sicheren Methoden verwenden).

## Beispiele

Weitere Beispiele finden Sie in der [HTML Sanitizer API](/de/docs/Web/API/HTML_Sanitizer_API) und in den einzelnen Methoden.
Nachfolgend zeigen wir einige Beispiele, wie Sie verschiedene Sanitizer-Konfigurationen erstellen könnten.

### Erstellen eines Standardsanitizers

Der Standardsanitizer wird wie unten gezeigt erstellt.

```js
const sanitizer = new Sanitizer();
```

Die XSS-sicheren [Sanitisierungsmethoden](/de/docs/Web/API/HTML_Sanitizer_API#sanitization_methods) erstellen denselben Sanitizer automatisch, wenn keine Optionen übergeben werden.

### Erstellen eines leeren Sanitizers

Um einen leeren Sanitizer zu erstellen, übergeben Sie ein leeres Objekt an den Konstruktor.
Die resultierende Sanitizer-Konfiguration ist eine [remove configuration](/de/docs/Web/API/HTML_Sanitizer_API#remove_configurations) mit leeren Arrays.

```js
const sanitizer = new Sanitizer({});
console.log(sanitizer.get());
/*
{
  "comments": true,
  "removeAttributes": [],
  "removeElements": []
}
*/
```

### Erstellen eines "allow" Sanitizers

Dieses Beispiel zeigt, wie Sie einen "allow sanitizer" erstellen könnten: einen Sanitizer, der nur eine Teilmenge von Attributen und Elementen zulässt.

Der Code verwendet zunächst den [`Sanitizer()`](/de/docs/Web/API/Sanitizer/Sanitizer) Konstruktor, um einen `Sanitizer` zu erstellen, wobei eine [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) angegeben wird, die die Elemente `<div>`, `<p>` und `<script>` erlaubt.

Das Beispiel verwendet dann `allowElement()`, um zusätzlich `<span>` Elemente zuzulassen, `allowAttribute()`, um das `id` Attribut bei jedem Element zu erlauben, und die Methode `replaceElementWithChildren()`, um festzulegen, dass jedes `<b>` Element durch seinen inneren Inhalt ersetzt werden soll (dies ist eine Art "allow", indem Sie explizit einige Entitäten zum Behalten angeben).
Zuletzt geben wir an, dass Kommentare beibehalten werden sollen.

```js
const sanitizer = new Sanitizer({ elements: ["div", "p", "script"] });
sanitizer.allowElement("span");
sanitizer.allowAttribute("id");
sanitizer.replaceElementWithChildren("b");
sanitizer.setComments(true);
```

### Erstellen eines "remove" Sanitizers

Dieses Beispiel zeigt, wie Sie einen "remove sanitizer" erstellen könnten, indem Sie Elemente zum Entfernen aus der Eingabe festlegen.

Der Code verwendet zunächst den [`Sanitizer()`](/de/docs/Web/API/Sanitizer/Sanitizer) Konstruktor, um einen `Sanitizer` zu erstellen, wobei eine [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) angegeben wird, die die Elemente `<span>` und `<script>` entfernt.
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
