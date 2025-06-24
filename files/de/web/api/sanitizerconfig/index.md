---
title: SanitizerConfig
slug: Web/API/SanitizerConfig
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("HTML Sanitizer API")}}{{SeeCompatTable}}

Das **`SanitizerConfig`** Wörterbuch der [HTML Sanitizer API](/de/docs/Web/API/HTML_Sanitizer_API) repräsentiert ein Konfigurationsobjekt eines Sanitizers.
Die Konfiguration gibt an, welche Elemente, Attribute und Kommentare erlaubt sind oder entfernt werden sollen, wenn HTML-Strings in ein [`Element`](/de/docs/Web/API/Element) oder [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) eingefügt werden, oder wenn ein HTML-String in ein [`Document`](/de/docs/Web/API/Document) geparst wird.

Eine Instanz dieses Typs kann an den [`Sanitizer()`](/de/docs/Web/API/Sanitizer/Sanitizer)-Konstruktor übergeben werden, um einen [`Sanitizer`](/de/docs/Web/API/Sanitizer) zu konfigurieren, und wird von [`Sanitizer.get()`](/de/docs/Web/API/Sanitizer/get) zurückgegeben.
Sie kann auch als `option.sanitizer`-Parameter übergeben werden, wenn die [Sanitisierungs-Methoden](/de/docs/Web/API/HTML_Sanitizer_API#sanitization_methods) aufgerufen werden:

- [`setHTMLUnsafe()`](/de/docs/Web/API/Element/setHTMLUnsafe) oder [`setHTMLUnsafe()`](/de/docs/Web/API/Element/setHTMLUnsafe) auf einem [`Element`](/de/docs/Web/API/Element).
- [`setHTMLUnsafe()`](/de/docs/Web/API/ShadowRoot/setHTMLUnsafe) oder [`setHTMLUnsafe()`](/de/docs/Web/API/ShadowRoot/setHTMLUnsafe) auf einem [`ShadowRoot`](/de/docs/Web/API/ShadowRoot).
- [`Document.parseHTMLUnsafe()`](/de/docs/Web/API/Document/parseHTMLUnsafe_static) oder [`Document.parseHTML()`](/de/docs/Web/API/Document/parseHTML_static) statische Methoden.

Beachten Sie, dass normalerweise eine [`Sanitizer`](/de/docs/Web/API/Sanitizer)-Instanz anstelle von `SanitizerConfig` in den obigen Methoden übergeben würde, insbesondere weil `sanitizer`-Instanzen effizienter zu teilen und zu bearbeiten sind.

## Instanz-Eigenschaften

- `elements`

  - : Ein Array, das die Elemente angibt, die bei der Sanitisierung von HTML erlaubt sind, und optional auch deren erlaubte oder zu entfernende Attribute.

    Jedes Element kann durch den Namen (ein String) oder als Objekt mit den folgenden Eigenschaften angegeben werden:

    - `name`
      - : Ein String, der den Namen des Elements enthält.
    - `namespace` {{optional_inline}}
      - : Ein String, der den Namensraum des Elements enthält.
        Der Standard-Namensraum ist `"http://www.w3.org/1999/xhtml"`.
    - `attributes` {{optional_inline}}

      - : Ein Array, das die Attribute angibt, die bei diesem (erlaubten) Element erlaubt sind, wenn HTML sanitisiert wird.

        Jedes Attribut kann durch den Namen (ein String) oder als Objekt mit den folgenden Eigenschaften angegeben werden:

        - `name`
          - : Ein String, der den Namen des Attributs enthält.
        - `namespace` {{optional_inline}}
          - : Ein String, der den Namensraum des Attributs enthält, welcher standardmäßig `null` ist.

    - `removeAttributes` {{optional_inline}}

      - : Ein Array, das die Attribute angibt, die bei diesem (erlaubten) Element entfernt werden sollen, wenn HTML sanitisiert wird.

        Jedes Attribut kann durch den Namen (ein String) oder als Objekt mit den folgenden Eigenschaften angegeben werden:

        - `name`
          - : Ein String, der den Namen des Attributs enthält.
        - `namespace` {{optional_inline}}
          - : Ein String, der den Namensraum des Attributs enthält, welcher standardmäßig `null` ist.

- `removeElements`

  - : Ein Array, das die Elemente angibt, die entfernt werden sollen, wenn HTML sanitisiert wird.

    Jedes Element kann durch den Namen (ein String) oder als Objekt mit den folgenden Eigenschaften angegeben werden:

    - `name`
      - : Ein String, der den Namen des Elements enthält.
    - `namespace` {{optional_inline}}
      - : Ein String, der den Namensraum des Elements enthält.
        Der Standard-Namensraum ist `"http://www.w3.org/1999/xhtml"`.

- `replaceWithChildrenElements`

  - : Ein Array, das die Elemente angibt, die durch ihren Inhalt ersetzt werden sollen, wenn HTML sanitisiert wird.
    Dies wird vor allem verwendet, um Stile von Texten zu entfernen (zum Beispiel könnte man dies verwenden, um `<b>some text</b>` in `some text` zu ändern).

    Jedes Element kann durch den Namen (ein String) oder als Objekt mit den folgenden Eigenschaften angegeben werden:

    - `name`
      - : Ein String, der den Namen des Elements enthält.
    - `namespace` {{optional_inline}}
      - : Ein String, der den Namensraum des Elements enthält.
        Der Standard-Namensraum ist `"http://www.w3.org/1999/xhtml"`.

- `attributes`

  - : Ein Array, das die Attribute angibt, die bei der Sanitisierung von HTML erlaubt sind.

    Jedes Attribut kann durch den Namen (ein String) oder als Objekt mit den folgenden Eigenschaften angegeben werden:

    - `name`
      - : Ein String, der den Namen des Attributs enthält.
    - `namespace` {{optional_inline}}
      - : Ein String, der den Namensraum des Attributs enthält, welcher standardmäßig `null` ist.

- `removeAttributes`

  - : Ein Array, das die Attribute angibt, die aus Elementen entfernt werden sollen, wenn HTML sanitisiert wird.

    Jedes Attribut kann durch den Namen (ein String) oder als Objekt mit den folgenden Eigenschaften angegeben werden:

    - `name`
      - : Ein String, der den Namen des Attributs enthält.
    - `namespace` {{optional_inline}}
      - : Ein String, der den Namensraum des Attributs enthält, welcher standardmäßig `null` ist.

- `comments`
  - : `true`, wenn Kommentare erlaubt sind, und `false`, wenn sie entfernt werden sollen.
- `dataAttributes`
  - : `true`, wenn Datenattribute erlaubt sind, und `false`, wenn sie entfernt werden sollen.

## Beispiele

### Erstellung einer "Erlauben"-Konfiguration

Dieses Beispiel zeigt, wie Sie eine "Erlauben"-Sanitizer-Konfiguration erstellen und in diesem Fall an den [`Sanitizer()`](/de/docs/Web/API/Sanitizer/Sanitizer)-Konstruktor übergeben können.

```js
const sanitizer = new Sanitizer({
  elements: ["div", "p", "script"],
  attributes: ["id"],
  replaceWithChildrenElements: ["b"],
  comments: true,
  dataAttributes: false,
});
```

Beachten Sie, dass Sie nicht gleichzeitig Erlauben- und Entfernen-Listen in derselben Konfiguration angeben können, ohne eine Ausnahme zu verursachen, wenn die Konfiguration an den Konstruktor oder eine Sanitisierungs-Methode übergeben wird.

### Erstellung einer "Entfernen"-Konfiguration

Dieses Beispiel zeigt, wie Sie eine "Entfernen"-Sanitizer-Konfiguration erstellen und in diesem Fall an den [`Sanitizer()`](/de/docs/Web/API/Sanitizer/Sanitizer)-Konstruktor übergeben können.

```js
const sanitizer = new Sanitizer({
  removeElements: ["span", "script"],
  removeAttributes: ["lang", "id"],
  comments: false,
});
```

Beachten Sie, dass Sie nicht gleichzeitig Erlauben- und Entfernen-Listen in derselben Konfiguration angeben können, ohne eine Ausnahme zu verursachen, wenn die Konfiguration an den Konstruktor oder eine Sanitisierungs-Methode übergeben wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
