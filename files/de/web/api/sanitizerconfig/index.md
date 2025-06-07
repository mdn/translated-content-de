---
title: SanitizerConfig
slug: Web/API/SanitizerConfig
l10n:
  sourceCommit: 2033446e38e93f71eb28a0efd3f663a8e0e7aeb7
---

{{APIRef("HTML Sanitizer API")}}

Das **`SanitizerConfig`** Dictionary der [HTML Sanitizer API](/de/docs/Web/API/HTML_Sanitizer_API) stellt ein Konfigurationsobjekt für den Sanitizer dar. Die Konfiguration gibt an, welche Elemente, Attribute und Kommentare erlaubt oder entfernt werden sollen, wenn HTML-Strings in ein [`Element`](/de/docs/Web/API/Element) oder [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) eingefügt werden oder wenn ein HTML-String in ein [`Document`](/de/docs/Web/API/Document) geparst wird.

Eine Instanz dieses Typs kann dem Konstruktor [`Sanitizer()`](/de/docs/Web/API/Sanitizer/Sanitizer) übergeben werden, um einen [`Sanitizer`](/de/docs/Web/API/Sanitizer) zu konfigurieren, und wird von [`Sanitizer.get()`](/de/docs/Web/API/Sanitizer/get) zurückgegeben. Sie kann auch als `option.sanitizer` Parameter übergeben werden, wenn die [Sanitisierungsmethoden](/de/docs/Web/API/HTML_Sanitizer_API#sanitization_methods) aufgerufen werden:

- [`setHTMLUnsafe()`](/de/docs/Web/API/Element/setHTMLUnsafe) oder [`setHTMLUnsafe()`](/de/docs/Web/API/Element/setHTMLUnsafe) auf [`Element`](/de/docs/Web/API/Element).
- [`setHTMLUnsafe()`](/de/docs/Web/API/ShadowRoot/setHTMLUnsafe) oder [`setHTMLUnsafe()`](/de/docs/Web/API/ShadowRoot/setHTMLUnsafe) auf [`ShadowRoot`](/de/docs/Web/API/ShadowRoot).
- [`Document.parseHTMLUnsafe()`](/de/docs/Web/API/Document/parseHTMLUnsafe_static) oder [`Document.parseHTML()`](/de/docs/Web/API/Document/parseHTML_static) statische Methoden.

Beachten Sie, dass in den oben genannten Methoden normalerweise eine [`Sanitizer`](/de/docs/Web/API/Sanitizer) Instanz statt `SanitizerConfig` als Option übergeben werden würde, insbesondere weil `sanitizer` Instanzen effizienter zu teilen und zu ändern sind.

## Instanz-Eigenschaften

- `elements`

  - : Ein Array, das die zu erlaubenden Elemente bei der HTML-Sanitisierung angibt und optional ihre erlaubten oder zu entfernenden Attribute spezifiziert.

    Jedes Element kann durch seinen Namen (ein String) oder als Objekt mit den folgenden Eigenschaften spezifiziert werden:

    - `name`
      - : Ein String, der den Namen des Elements enthält.
    - `namespace` {{optional_inline}}
      - : Ein String, der den Namensraum des Elements enthält. Der Standard-Namensraum ist `"http://www.w3.org/1999/xhtml"`.
    - `attributes` {{optional_inline}}

      - : Ein Array, das die Attribute angibt, die auf diesem (erlaubten) Element bei der HTML-Sanitisierung erlaubt sind.

        Jedes Attribut kann durch seinen Namen (ein String) oder als Objekt mit den folgenden Eigenschaften spezifiziert werden:

        - `name`
          - : Ein String, der den Namen des Attributs enthält.
        - `namespace` {{optional_inline}}
          - : Ein String, der den Namensraum des Attributs enthält, das standardmäßig `null` ist.

    - `removeAttributes` {{optional_inline}}

      - : Ein Array, das die Attribute angibt, die auf diesem (erlaubten) Element bei der HTML-Sanitisierung entfernt werden sollen.

        Jedes Attribut kann durch seinen Namen (ein String) oder als Objekt mit den folgenden Eigenschaften spezifiziert werden:

        - `name`
          - : Ein String, der den Namen des Attributs enthält.
        - `namespace` {{optional_inline}}
          - : Ein String, der den Namensraum des Attributs enthält, das standardmäßig `null` ist.

- `removeElements`

  - : Ein Array, das die zu entfernenden Elemente bei der HTML-Sanitisierung angibt.

    Jedes Element kann durch seinen Namen (ein String) oder als Objekt mit den folgenden Eigenschaften spezifiziert werden:

    - `name`
      - : Ein String, der den Namen des Elements enthält.
    - `namespace` {{optional_inline}}
      - : Ein String, der den Namensraum des Elements enthält. Der Standard-Namensraum ist `"http://www.w3.org/1999/xhtml"`.

- `replaceWithChildrenElements`

  - : Ein Array, das die Elemente angibt, die beim Sanitisieren von HTML durch ihren Inhalt ersetzt werden sollen. Dies wird hauptsächlich verwendet, um Stile von Text zu entfernen (zum Beispiel könnte man `<b>einige Texte</b>` in `einige Texte` ändern).

    Jedes Element kann durch seinen Namen (ein String) oder als Objekt mit den folgenden Eigenschaften spezifiziert werden:

    - `name`
      - : Ein String, der den Namen des Elements enthält.
    - `namespace` {{optional_inline}}
      - : Ein String, der den Namensraum des Elements enthält. Der Standard-Namensraum ist `"http://www.w3.org/1999/xhtml"`.

- `attributes`

  - : Ein Array, das die Attribute angibt, die bei der HTML-Sanitisierung erlaubt sind.

    Jedes Attribut kann durch seinen Namen (ein String) oder als Objekt mit den folgenden Eigenschaften spezifiziert werden:

    - `name`
      - : Ein String, der den Namen des Attributs enthält.
    - `namespace` {{optional_inline}}
      - : Ein String, der den Namensraum des Attributs enthält, das standardmäßig `null` ist.

- `removeAttributes`

  - : Ein Array, das die Attribute angibt, die bei der HTML-Sanitisierung von Elementen entfernt werden sollen.

    Jedes Attribut kann durch seinen Namen (ein String) oder als Objekt mit den folgenden Eigenschaften spezifiziert werden:

    - `name`
      - : Ein String, der den Namen des Attributs enthält.
    - `namespace` {{optional_inline}}
      - : Ein String, der den Namensraum des Attributs enthält, das standardmäßig `null` ist.

- `comments`
  - : `true`, wenn Kommentare erlaubt sind, und `false`, wenn sie entfernt werden sollen.
- `dataAttributes`
  - : `true`, wenn Daten-Attribute erlaubt sind, und `false`, wenn sie entfernt werden sollen.

## Beispiele

### Erstellen einer "Erlauben"-Konfiguration

Dieses Beispiel zeigt, wie Sie eine "Erlauben"-Sanitizer-Konfiguration erstellen und in diesem Fall an den [`Sanitizer()`](/de/docs/Web/API/Sanitizer/Sanitizer) Konstruktor übergeben könnten.

```js
const sanitizer = new Sanitizer({
  elements: ["div", "p", "script"],
  attributes: ["id"],
  replaceWithChildrenElements: ["b"],
  comments: true,
  dataAttributes: false,
});
```

Beachten Sie, dass Sie nicht sowohl Erlauben- als auch Entfernen-Listen in derselben Konfiguration angeben können, ohne eine Ausnahme zu verursachen, wenn die Konfiguration an den Konstruktor oder eine Sanitisierungsmethode übergeben wird.

### Erstellen einer "Entfernen"-Konfiguration

Dieses Beispiel zeigt, wie Sie eine "Entfernen"-Sanitizer-Konfiguration erstellen und in diesem Fall an den [`Sanitizer()`](/de/docs/Web/API/Sanitizer/Sanitizer) Konstruktor übergeben könnten.

```js
const sanitizer = new Sanitizer({
  removeElements: ["span", "script"],
  removeAttributes: ["lang", "id"],
  comments: false,
});
```

Beachten Sie, dass Sie nicht sowohl Erlauben- als auch Entfernen-Listen in derselben Konfiguration angeben können, ohne eine Ausnahme zu verursachen, wenn die Konfiguration an den Konstruktor oder eine Sanitisierungsmethode übergeben wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
