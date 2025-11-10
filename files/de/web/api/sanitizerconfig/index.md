---
title: SanitizerConfig
slug: Web/API/SanitizerConfig
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{APIRef("HTML Sanitizer API")}}{{SeeCompatTable}}

Das **`SanitizerConfig`** Dictionary der [HTML Sanitizer API](/de/docs/Web/API/HTML_Sanitizer_API) repräsentiert ein Sanitizer-Konfigurationsobjekt.
Die Konfiguration gibt an, welche Elemente, Attribute und Kommentare erlaubt sind oder entfernt werden sollen, wenn HTML-Strings in ein [`Element`](/de/docs/Web/API/Element) oder [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) eingefügt oder wenn ein HTML-String in ein [`Document`](/de/docs/Web/API/Document) geparst wird.

Eine Instanz dieses Typs kann dem [`Sanitizer()`](/de/docs/Web/API/Sanitizer/Sanitizer)-Konstruktor übergeben werden, um einen [`Sanitizer`](/de/docs/Web/API/Sanitizer) zu konfigurieren, und wird von [`Sanitizer.get()`](/de/docs/Web/API/Sanitizer/get) zurückgegeben.
Es kann auch als Parameter `option.sanitizer` übergeben werden, wenn die [Sanitierungs-Methoden](/de/docs/Web/API/HTML_Sanitizer_API#sanitization_methods) aufgerufen werden:

- [`setHTML()`](/de/docs/Web/API/Element/setHTML) oder [`setHTMLUnsafe()`](/de/docs/Web/API/Element/setHTMLUnsafe) auf [`Element`](/de/docs/Web/API/Element).
- [`setHTML()`](/de/docs/Web/API/ShadowRoot/setHTML) oder [`setHTMLUnsafe()`](/de/docs/Web/API/ShadowRoot/setHTMLUnsafe) auf [`ShadowRoot`](/de/docs/Web/API/ShadowRoot).
- [`Document.parseHTML()`](/de/docs/Web/API/Document/parseHTML_static) oder [`Document.parseHTMLUnsafe()`](/de/docs/Web/API/Document/parseHTMLUnsafe_static) statische Methoden.

Beachten Sie, dass normalerweise eine [`Sanitizer`](/de/docs/Web/API/Sanitizer)-Instanz anstelle von `SanitizerConfig` in den oben genannten Methoden übergeben würde, insbesondere weil `sanitizer`-Instanzen effizienter geteilt und modifiziert werden können.

## Instanzeigenschaften

- `elements`
  - : Ein Array, das angibt, welche Elemente beim Sanitisieren von HTML erlaubt sind und optional ihre erlaubten oder entfernten Attribute spezifiziert.

    Jedes Element kann durch Namen (ein String) oder als Objekt mit den folgenden Eigenschaften spezifiziert werden:
    - `name`
      - : Ein String, der den Namen des Elements enthält.
    - `namespace` {{optional_inline}}
      - : Ein String, der den Namensraum des Elements enthält.
        Der Standard-Namensraum ist `"http://www.w3.org/1999/xhtml"`.
    - `attributes` {{optional_inline}}
      - : Ein Array, das angibt, welche Attribute auf diesem (erlaubten) Element beim Sanitisieren von HTML erlaubt sind.

        Jedes Attribut kann durch Namen (ein String) oder als Objekt mit den folgenden Eigenschaften spezifiziert werden:
        - `name`
          - : Ein String, der den Namen des Attributs enthält.
        - `namespace` {{optional_inline}}
          - : Ein String, der den Namensraum des Attributs enthält, was standardmäßig `null` ist.

    - `removeAttributes` {{optional_inline}}
      - : Ein Array, das angibt, welche Attribute von diesem (erlaubten) Element beim Sanitisieren von HTML entfernt werden sollen.

        Jedes Attribut kann durch Namen (ein String) oder als Objekt mit den folgenden Eigenschaften spezifiziert werden:
        - `name`
          - : Ein String, der den Namen des Attributs enthält.
        - `namespace` {{optional_inline}}
          - : Ein String, der den Namensraum des Attributs enthält, was standardmäßig `null` ist.

- `removeElements`
  - : Ein Array, das angibt, welche Elemente beim Sanitisieren von HTML entfernt werden sollen.

    Jedes Element kann durch Namen (ein String) oder als Objekt mit den folgenden Eigenschaften spezifiziert werden:
    - `name`
      - : Ein String, der den Namen des Elements enthält.
    - `namespace` {{optional_inline}}
      - : Ein String, der den Namensraum des Elements enthält.
        Der Standard-Namensraum ist `"http://www.w3.org/1999/xhtml"`.

- `replaceWithChildrenElements`
  - : Ein Array, das angibt, welche Elemente durch ihren Inhalt ersetzt werden sollen, wenn HTML sanitisiert wird.
    Dies wird hauptsächlich verwendet, um Stile von Text zu entfernen (zum Beispiel könnten Sie dies verwenden, um `<b>some text</b>` zu `some text` zu ändern).

    Jedes Element kann durch Namen (ein String) oder als Objekt mit den folgenden Eigenschaften spezifiziert werden:
    - `name`
      - : Ein String, der den Namen des Elements enthält.
    - `namespace` {{optional_inline}}
      - : Ein String, der den Namensraum des Elements enthält.
        Der Standard-Namensraum ist `"http://www.w3.org/1999/xhtml"`.

- `attributes`
  - : Ein Array, das angibt, welche Attribute beim Sanitisieren von HTML erlaubt sind.

    Jedes Attribut kann durch Namen (ein String) oder als Objekt mit den folgenden Eigenschaften spezifiziert werden:
    - `name`
      - : Ein String, der den Namen des Attributs enthält.
    - `namespace` {{optional_inline}}
      - : Ein String, der den Namensraum des Attributs enthält, was standardmäßig `null` ist.

- `removeAttributes`
  - : Ein Array, das angibt, welche Attribute von Elementen entfernt werden sollen, wenn HTML sanitisiert wird.

    Jedes Attribut kann durch Namen (ein String) oder als Objekt mit den folgenden Eigenschaften spezifiziert werden:
    - `name`
      - : Ein String, der den Namen des Attributs enthält.
    - `namespace` {{optional_inline}}
      - : Ein String, der den Namensraum des Attributs enthält, was standardmäßig `null` ist.

- `comments`
  - : `true`, wenn Kommentare erlaubt sind, und `false`, wenn sie entfernt werden sollen.
- `dataAttributes`
  - : `true`, wenn Datenattribute erlaubt sind, und `false`, wenn sie entfernt werden sollen.

## Beispiele

### Erstellen einer "allow"-Konfiguration

Dieses Beispiel zeigt, wie Sie eine "allow" Sanitizer-Konfiguration erstellen könnten, und in diesem Fall an den [`Sanitizer()`](/de/docs/Web/API/Sanitizer/Sanitizer)-Konstruktor übergeben.

```js
const sanitizer = new Sanitizer({
  elements: ["div", "p", "script"],
  attributes: ["id"],
  replaceWithChildrenElements: ["b"],
  comments: true,
  dataAttributes: false,
});
```

Beachten Sie, dass Sie nicht sowohl Erlauben- als auch Entfernen-Listen in derselben Konfiguration spezifizieren können, ohne eine Ausnahme zu verursachen, wenn die Konfiguration an den Konstruktor oder eine Sanitierungs-Methode übergeben wird.

### Erstellen einer "remove"-Konfiguration

Dieses Beispiel zeigt, wie Sie eine "remove" Sanitizer-Konfiguration erstellen könnten, und in diesem Fall an den [`Sanitizer()`](/de/docs/Web/API/Sanitizer/Sanitizer)-Konstruktor übergeben.

```js
const sanitizer = new Sanitizer({
  removeElements: ["span", "script"],
  removeAttributes: ["lang", "id"],
  comments: false,
});
```

Beachten Sie, dass Sie nicht sowohl Erlauben- als auch Entfernen-Listen in derselben Konfiguration spezifizieren können, ohne eine Ausnahme zu verursachen, wenn die Konfiguration an den Konstruktor oder eine Sanitierungs-Methode übergeben wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
