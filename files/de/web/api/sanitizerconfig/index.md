---
title: SanitizerConfig
slug: Web/API/SanitizerConfig
l10n:
  sourceCommit: 7141d3f6ba3e8fbae7cd69183cb977810dabbba3
---

{{APIRef("HTML Sanitizer API")}}{{SeeCompatTable}}

Das **`SanitizerConfig`**-Dictionary der [HTML Sanitizer API](/de/docs/Web/API/HTML_Sanitizer_API) repräsentiert ein Sanitizer-Konfigurationsobjekt. Die Konfiguration gibt an, welche Elemente, Attribute und Kommentare erlaubt sind oder entfernt werden sollen, wenn HTML-Strings in ein [`Element`](/de/docs/Web/API/Element) oder [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) eingefügt werden oder wenn ein HTML-String in ein [`Document`](/de/docs/Web/API/Document) geparst wird.

Eine Instanz dieses Typs kann an den [`Sanitizer()`](/de/docs/Web/API/Sanitizer/Sanitizer)-Konstruktor übergeben werden, um einen [`Sanitizer`](/de/docs/Web/API/Sanitizer) zu konfigurieren, und wird von [`Sanitizer.get()`](/de/docs/Web/API/Sanitizer/get) zurückgegeben. Sie kann auch als `option.sanitizer`-Parameter übergeben werden, wenn die [Sanitization-Methoden](/de/docs/Web/API/HTML_Sanitizer_API#sanitization_methods) aufgerufen werden:

- [`setHTML()`](/de/docs/Web/API/Element/setHTML) oder [`setHTMLUnsafe()`](/de/docs/Web/API/Element/setHTMLUnsafe) auf [`Element`](/de/docs/Web/API/Element).
- [`setHTML()`](/de/docs/Web/API/ShadowRoot/setHTML) oder [`setHTMLUnsafe()`](/de/docs/Web/API/ShadowRoot/setHTMLUnsafe) auf [`ShadowRoot`](/de/docs/Web/API/ShadowRoot).
- [`Document.parseHTML()`](/de/docs/Web/API/Document/parseHTML_static) oder [`Document.parseHTMLUnsafe()`](/de/docs/Web/API/Document/parseHTMLUnsafe_static) statische Methoden.

Beachten Sie, dass normalerweise eine [`Sanitizer`](/de/docs/Web/API/Sanitizer)-Instanz anstelle von `SanitizerConfig` in den obigen Methoden als Option übergeben würde, insbesondere weil `sanitizer`-Instanzen effizienter zu teilen und zu modifizieren sind.

## Instanz-Eigenschaften

- `elements`
  - : Ein Array, das die zu erlaubenden Elemente beim Bereinigen von HTML angibt, optional auch ihre erlaubten oder zu entfernenden Attribute spezifizierend.

    Jedes Element kann durch einen Namen (ein String) angegeben werden oder als Objekt mit den folgenden Eigenschaften:
    - `name`
      - : Ein String, der den Namen des Elements enthält.
    - `namespace` {{optional_inline}}
      - : Ein String, der den Namespace des Elements enthält. Der Standard-Namespace ist `"http://www.w3.org/1999/xhtml"`.
    - `attributes` {{optional_inline}}
      - : Ein Array, das die Attribute angibt, die bei diesem (erlaubten) Element beim Bereinigen von HTML erlaubt sind.

        Jedes Attribut kann durch einen Namen (ein String) angegeben werden oder als Objekt mit den folgenden Eigenschaften:
        - `name`
          - : Ein String, der den Namen des Attributs enthält.
        - `namespace` {{optional_inline}}
          - : Ein String, der den Namespace des Attributs enthält, der standardmäßig `null` ist.

    - `removeAttributes` {{optional_inline}}
      - : Ein Array, das die Attribute angibt, die bei diesem (erlaubten) Element beim Bereinigen von HTML entfernt werden sollen.

        Jedes Attribut kann durch einen Namen (ein String) angegeben werden oder als Objekt mit den folgenden Eigenschaften:
        - `name`
          - : Ein String, der den Namen des Attributs enthält.
        - `namespace` {{optional_inline}}
          - : Ein String, der den Namespace des Attributs enthält, der standardmäßig `null` ist.

- `removeElements`
  - : Ein Array, das die zu entfernenden Elemente beim Bereinigen von HTML angibt.

    Jedes Element kann durch einen Namen (ein String) angegeben werden oder als Objekt mit den folgenden Eigenschaften:
    - `name`
      - : Ein String, der den Namen des Elements enthält.
    - `namespace` {{optional_inline}}
      - : Ein String, der den Namespace des Elements enthält. Der Standard-Namespace ist `"http://www.w3.org/1999/xhtml"`.

- `replaceWithChildrenElements`
  - : Ein Array, das die Elemente angibt, die durch ihren Inhalt ersetzt werden sollen, wenn HTML bereinigt wird. Dies wird hauptsächlich verwendet, um Stile aus Text zu entfernen (zum Beispiel könnte dies verwendet werden, um `<b>some text</b>` in `some text` zu ändern).

    Jedes Element kann durch einen Namen (ein String) angegeben werden oder als Objekt mit den folgenden Eigenschaften:
    - `name`
      - : Ein String, der den Namen des Elements enthält.
    - `namespace` {{optional_inline}}
      - : Ein String, der den Namespace des Elements enthält. Der Standard-Namespace ist `"http://www.w3.org/1999/xhtml"`.

- `attributes`
  - : Ein Array, das die Attribute angibt, die beim Bereinigen von HTML erlaubt sind.

    Jedes Attribut kann durch einen Namen (ein String) angegeben werden oder als Objekt mit den folgenden Eigenschaften:
    - `name`
      - : Ein String, der den Namen des Attributs enthält.
    - `namespace` {{optional_inline}}
      - : Ein String, der den Namespace des Attributs enthält, der standardmäßig `null` ist.

- `removeAttributes`
  - : Ein Array, das die Attribute angibt, die von Elementen entfernt werden sollen, wenn HTML bereinigt wird.

    Jedes Attribut kann durch einen Namen (ein String) angegeben werden oder als Objekt mit den folgenden Eigenschaften:
    - `name`
      - : Ein String, der den Namen des Attributs enthält.
    - `namespace` {{optional_inline}}
      - : Ein String, der den Namespace des Attributs enthält, der standardmäßig `null` ist.

- `comments`
  - : `true`, wenn Kommentare erlaubt sind, und `false`, wenn sie entfernt werden sollen.
- `dataAttributes`
  - : `true`, wenn Datenattribute erlaubt sind, und `false`, wenn sie entfernt werden sollen.

## Beispiele

### Erstellen einer "allow"-Konfiguration

Dieses Beispiel zeigt, wie man eine "allow"-Sanitizer-Konfiguration erstellen könnte, und in diesem Fall an den [`Sanitizer()`](/de/docs/Web/API/Sanitizer/Sanitizer)-Konstruktor übergibt.

```js
const sanitizer = new Sanitizer({
  elements: ["div", "p", "script"],
  attributes: ["id"],
  replaceWithChildrenElements: ["b"],
  comments: true,
  dataAttributes: false,
});
```

Beachten Sie, dass Sie nicht sowohl Zulassungs- als auch Entfernung-Listen in derselben Konfiguration angeben können, ohne eine Ausnahme zu verursachen, wenn die Konfiguration an den Konstruktor oder eine Bereinigungsmethode übergeben wird.

### Erstellen einer "remove"-Konfiguration

Dieses Beispiel zeigt, wie man eine "remove"-Sanitizer-Konfiguration erstellen könnte, und in diesem Fall an den [`Sanitizer()`](/de/docs/Web/API/Sanitizer/Sanitizer)-Konstruktor übergibt.

```js
const sanitizer = new Sanitizer({
  removeElements: ["span", "script"],
  removeAttributes: ["lang", "id"],
  comments: false,
});
```

Beachten Sie, dass Sie nicht sowohl Zulassungs- als auch Entfernung-Listen in derselben Konfiguration angeben können, ohne eine Ausnahme zu verursachen, wenn die Konfiguration an den Konstruktor oder eine Bereinigungsmethode übergeben wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
