---
title: SanitizerConfig
slug: Web/API/SanitizerConfig
l10n:
  sourceCommit: baec726bf3fe1bd82cf22a0f8ba9523e0f7ccd80
---

{{APIRef("HTML Sanitizer API")}}{{SeeCompatTable}}

Das **`SanitizerConfig`**-Wörterbuch der [HTML Sanitizer API](/de/docs/Web/API/HTML_Sanitizer_API) repräsentiert ein Sanitizer-Konfigurationsobjekt.
Die Konfiguration gibt an, welche Elemente, Attribute und Kommentare zugelassen oder entfernt werden sollen, wenn HTML-Strings in ein [`Element`](/de/docs/Web/API/Element) oder [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) eingefügt werden oder wenn ein HTML-String in ein [`Document`](/de/docs/Web/API/Document) geparst wird.

Eine Instanz dieses Typs kann dem [`Sanitizer()`](/de/docs/Web/API/Sanitizer/Sanitizer)-Konstruktor übergeben werden, um einen [`Sanitizer`](/de/docs/Web/API/Sanitizer) zu konfigurieren, und wird von [`Sanitizer.get()`](/de/docs/Web/API/Sanitizer/get) zurückgegeben.
Sie kann auch als `option.sanitizer`-Parameter bei Aufrufen der [Sanitierungs-Methoden](/de/docs/Web/API/HTML_Sanitizer_API#sanitization_methods) verwendet werden:

- [`setHTMLUnsafe()`](/de/docs/Web/API/Element/setHTMLUnsafe) oder [`setHTMLUnsafe()`](/de/docs/Web/API/Element/setHTMLUnsafe) auf [`Element`](/de/docs/Web/API/Element).
- [`setHTMLUnsafe()`](/de/docs/Web/API/ShadowRoot/setHTMLUnsafe) oder [`setHTMLUnsafe()`](/de/docs/Web/API/ShadowRoot/setHTMLUnsafe) auf [`ShadowRoot`](/de/docs/Web/API/ShadowRoot).
- [`Document.parseHTMLUnsafe()`](/de/docs/Web/API/Document/parseHTMLUnsafe_static) oder [`Document.parseHTML()`](/de/docs/Web/API/Document/parseHTML_static) statische Methoden.

Beachten Sie, dass normalerweise eine [`Sanitizer`](/de/docs/Web/API/Sanitizer)-Instanz anstelle von `SanitizerConfig` in den obigen Methoden als Option übergeben wird, insbesondere weil `sanitizer`-Instanzen effizienter zu teilen und zu modifizieren sind.

## Instanzeigenschaften

- `elements`

  - : Ein Array, das die beim Sanitieren von HTML zu erlaubenden Elemente angibt und optional auch deren erlaubte oder zu entfernenden Attribute spezifiziert.

    Jedes Element kann durch einen Namen (einen String) oder als Objekt mit den folgenden Eigenschaften spezifiziert werden:

    - `name`
      - : Ein String, der den Namen des Elements enthält.
    - `namespace` {{optional_inline}}
      - : Ein String, der den Namespace des Elements enthält.
        Der Standardnamespace ist `"http://www.w3.org/1999/xhtml"`.
    - `attributes` {{optional_inline}}

      - : Ein Array, das die Attribute angibt, die auf diesem (erlaubten) Element beim Sanitieren von HTML erlaubt sind.

        Jedes Attribut kann durch einen Namen (einen String) oder als Objekt mit den folgenden Eigenschaften spezifiziert werden:

        - `name`
          - : Ein String, der den Namen des Attributs enthält.
        - `namespace` {{optional_inline}}
          - : Ein String, der den Namespace des Attributs enthält, standardmäßig `null`.

    - `removeAttributes` {{optional_inline}}

      - : Ein Array, das die Attribute angibt, die bei diesem (erlaubten) Element beim Sanitieren von HTML entfernt werden sollen.

        Jedes Attribut kann durch einen Namen (einen String) oder als Objekt mit den folgenden Eigenschaften spezifiziert werden:

        - `name`
          - : Ein String, der den Namen des Attributs enthält.
        - `namespace` {{optional_inline}}
          - : Ein String, der den Namespace des Attributs enthält, standardmäßig `null`.

- `removeElements`

  - : Ein Array, das die zu entfernenden Elemente beim Sanitieren von HTML angibt.

    Jedes Element kann durch einen Namen (einen String) oder als Objekt mit den folgenden Eigenschaften spezifiziert werden:

    - `name`
      - : Ein String, der den Namen des Elements enthält.
    - `namespace` {{optional_inline}}
      - : Ein String, der den Namespace des Elements enthält.
        Der Standardnamespace ist `"http://www.w3.org/1999/xhtml"`.

- `replaceWithChildrenElements`

  - : Ein Array, das die Elemente angibt, die durch ihren Inhalt ersetzt werden sollen, wenn HTML saniert wird.
    Dies wird hauptsächlich verwendet, um Stile von Text zu entfernen (zum Beispiel könnte man damit `<b>some text</b>` in `some text` ändern).

    Jedes Element kann durch einen Namen (einen String) oder als Objekt mit den folgenden Eigenschaften spezifiziert werden:

    - `name`
      - : Ein String, der den Namen des Elements enthält.
    - `namespace` {{optional_inline}}
      - : Ein String, der den Namespace des Elements enthält.
        Der Standardnamespace ist `"http://www.w3.org/1999/xhtml"`.

- `attributes`

  - : Ein Array, das die Attribute angibt, die beim Sanitieren von HTML erlaubt sind.

    Jedes Attribut kann durch einen Namen (einen String) oder als Objekt mit den folgenden Eigenschaften spezifiziert werden:

    - `name`
      - : Ein String, der den Namen des Attributs enthält.
    - `namespace` {{optional_inline}}
      - : Ein String, der den Namespace des Attributs enthält, standardmäßig `null`.

- `removeAttributes`

  - : Ein Array, das die Attribute angibt, die beim Sanitieren von HTML von Elementen entfernt werden sollen.

    Jedes Attribut kann durch einen Namen (einen String) oder als Objekt mit den folgenden Eigenschaften spezifiziert werden:

    - `name`
      - : Ein String, der den Namen des Attributs enthält.
    - `namespace` {{optional_inline}}
      - : Ein String, der den Namespace des Attributs enthält, standardmäßig `null`.

- `comments`
  - : `true`, wenn Kommentare erlaubt sind, und `false`, wenn sie entfernt werden sollen.
- `dataAttributes`
  - : `true`, wenn Datenattribute erlaubt sind, und `false`, wenn sie entfernt werden sollen.

## Beispiele

### Erstellen einer "Erlauben"-Konfiguration

Dieses Beispiel zeigt, wie Sie eine "Erlauben"-Sanitizer-Konfiguration erstellen und in diesem Fall dem [`Sanitizer()`](/de/docs/Web/API/Sanitizer/Sanitizer)-Konstruktor übergeben können.

```js
const sanitizer = new Sanitizer({
  elements: ["div", "p", "script"],
  attributes: ["id"],
  replaceWithChildrenElements: ["b"],
  comments: true,
  dataAttributes: false,
});
```

Beachten Sie, dass Sie nicht sowohl Erlauben- als auch Entfernen-Listen in derselben Konfiguration spezifizieren können, ohne beim Übergeben der Konfiguration an den Konstruktor oder eine Sanitisierungs-Methode eine Ausnahme zu verursachen.

### Erstellen einer "Entfernen"-Konfiguration

Dieses Beispiel zeigt, wie Sie eine "Entfernen"-Sanitizer-Konfiguration erstellen und in diesem Fall dem [`Sanitizer()`](/de/docs/Web/API/Sanitizer/Sanitizer)-Konstruktor übergeben können.

```js
const sanitizer = new Sanitizer({
  removeElements: ["span", "script"],
  removeAttributes: ["lang", "id"],
  comments: false,
});
```

Beachten Sie, dass Sie nicht sowohl Erlauben- als auch Entfernen-Listen in derselben Konfiguration spezifizieren können, ohne beim Übergeben der Konfiguration an den Konstruktor oder eine Sanitisierungs-Methode eine Ausnahme zu verursachen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
