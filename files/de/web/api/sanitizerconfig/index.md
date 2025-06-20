---
title: SanitizerConfig
slug: Web/API/SanitizerConfig
l10n:
  sourceCommit: b97dae0887fb02713db610eed4855545a9c81bcd
---

{{APIRef("HTML Sanitizer API")}}{{SeeCompatTable}}

Das **`SanitizerConfig`** Wörterbuch der [HTML Sanitizer API](/de/docs/Web/API/HTML_Sanitizer_API) repräsentiert ein Konfigurationsobjekt für den Sanitizer.
Die Konfiguration gibt an, welche Elemente, Attribute und Kommentare erlaubt sind oder entfernt werden sollen, wenn HTML-Strings in ein [`Element`](/de/docs/Web/API/Element) oder [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) eingefügt werden oder wenn eine HTML-Zeichenkette in ein [`Document`](/de/docs/Web/API/Document) geparst werden soll.

Eine Instanz dieses Typs kann dem [`Sanitizer()`](/de/docs/Web/API/Sanitizer/Sanitizer) Konstruktor übergeben werden, um einen [`Sanitizer`](/de/docs/Web/API/Sanitizer) zu konfigurieren, und wird von [`Sanitizer.get()`](/de/docs/Web/API/Sanitizer/get) zurückgegeben.
Außerdem kann sie als das `option.sanitizer`-Parameter bei der Aufruf der [Sanitization-Methoden](/de/docs/Web/API/HTML_Sanitizer_API#sanitization_methods) übergeben werden:

- [`setHTMLUnsafe()`](/de/docs/Web/API/Element/setHTMLUnsafe) oder [`setHTMLUnsafe()`](/de/docs/Web/API/Element/setHTMLUnsafe) auf [`Element`](/de/docs/Web/API/Element).
- [`setHTMLUnsafe()`](/de/docs/Web/API/ShadowRoot/setHTMLUnsafe) oder [`setHTMLUnsafe()`](/de/docs/Web/API/ShadowRoot/setHTMLUnsafe) auf [`ShadowRoot`](/de/docs/Web/API/ShadowRoot).
- [`Document.parseHTMLUnsafe()`](/de/docs/Web/API/Document/parseHTMLUnsafe_static) oder [`Document.parseHTML()`](/de/docs/Web/API/Document/parseHTML_static) statische Methoden.

Beachten Sie, dass normalerweise eine [`Sanitizer`](/de/docs/Web/API/Sanitizer) Instanz statt `SanitizerConfig` in den oben genannten Methoden als Option übergeben würde, insbesondere weil `sanitizer`-Instanzen effizienter zu teilen und zu ändern sind.

## Instanz-Eigenschaften

- `elements`

  - : Ein Array, das die zuzulassenden Elemente beim Bereinigen von HTML angibt, wobei optional auch deren erlaubte oder entfernte Attribute spezifiziert werden können.

    Jedes Element kann entweder durch seinen Namen (ein Zeichenkette) oder als ein Objekt mit den folgenden Eigenschaften angegeben werden:

    - `name`
      - : Eine Zeichenkette, die den Namen des Elements enthält.
    - `namespace` {{optional_inline}}
      - : Eine Zeichenkette, die den Namespace des Elements enthält.
        Der Standard-Namespace ist `"http://www.w3.org/1999/xhtml"`.
    - `attributes` {{optional_inline}}

      - : Ein Array, das die erlaubten Attribute dieses Elements bei der HTML-Bereinigung angibt.

        Jedes Attribut kann durch seinen Namen (eine Zeichenkette) oder als ein Objekt mit den folgenden Eigenschaften angegeben werden:

        - `name`
          - : Eine Zeichenkette, die den Namen des Attributs enthält.
        - `namespace` {{optional_inline}}
          - : Eine Zeichenkette, die den Namespace des Attributs enthält, der standardmäßig `null` ist.

    - `removeAttributes` {{optional_inline}}

      - : Ein Array, das die zu entfernenden Attribute dieses Elements bei der HTML-Bereinigung angibt.

        Jedes Attribut kann durch seinen Namen (eine Zeichenkette) oder als ein Objekt mit den folgenden Eigenschaften angegeben werden:

        - `name`
          - : Eine Zeichenkette, die den Namen des Attributs enthält.
        - `namespace` {{optional_inline}}
          - : Eine Zeichenkette, die den Namespace des Attributs enthält, der standardmäßig `null` ist.

- `removeElements`

  - : Ein Array, das die zu entfernenden Elemente bei der HTML-Bereinigung angibt.

    Jedes Element kann entweder durch seinen Namen (ein Zeichenkette) oder als ein Objekt mit den folgenden Eigenschaften angegeben werden:

    - `name`
      - : Eine Zeichenkette, die den Namen des Elements enthält.
    - `namespace` {{optional_inline}}
      - : Eine Zeichenkette, die den Namespace des Elements enthält.
        Der Standard-Namespace ist `"http://www.w3.org/1999/xhtml"`.

- `replaceWithChildrenElements`

  - : Ein Array, das die Elemente angibt, die beim Bereinigen von HTML mit ihrem Inhalt ersetzt werden sollen.
    Dies wird hauptsächlich verwendet, um Stil von Text zu entfernen (zum Beispiel könnten Sie dies verwenden, um `<b>einige text</b>` zu `einige text` zu ändern).

    Jedes Element kann entweder durch seinen Namen (ein Zeichenkette) oder als ein Objekt mit den folgenden Eigenschaften angegeben werden:

    - `name`
      - : Eine Zeichenkette, die den Namen des Elements enthält.
    - `namespace` {{optional_inline}}
      - : Eine Zeichenkette, die den Namespace des Elements enthält.
        Der Standard-Namespace ist `"http://www.w3.org/1999/xhtml"`.

- `attributes`

  - : Ein Array, das die zu erlaubenden Attribute beim Bereinigen von HTML angibt.

    Jedes Attribut kann durch seinen Namen (eine Zeichenkette) oder als ein Objekt mit den folgenden Eigenschaften angegeben werden:

    - `name`
      - : Eine Zeichenkette, die den Namen des Attributs enthält.
    - `namespace` {{optional_inline}}
      - : Eine Zeichenkette, die den Namespace des Attributs enthält, der standardmäßig `null` ist.

- `removeAttributes`

  - : Ein Array, das die zu entfernenden Attribute von Elementen beim Bereinigen von HTML angibt.

    Jedes Attribut kann durch seinen Namen (eine Zeichenkette) oder als ein Objekt mit den folgenden Eigenschaften angegeben werden:

    - `name`
      - : Eine Zeichenkette, die den Namen des Attributs enthält.
    - `namespace` {{optional_inline}}
      - : Eine Zeichenkette, die den Namespace des Attributs enthält, der standardmäßig `null` ist.

- `comments`
  - : `true`, wenn Kommentare erlaubt sind, und `false`, wenn sie entfernt werden sollen.
- `dataAttributes`
  - : `true`, wenn Datenattribute erlaubt sind, und `false`, wenn sie entfernt werden sollen.

## Beispiele

### Erstellen einer "erlauben" Konfiguration

Dieses Beispiel zeigt, wie Sie eine "erlauben" Konfiguration für den Sanitizer erstellen können und in diesem Fall dem [`Sanitizer()`](/de/docs/Web/API/Sanitizer/Sanitizer) Konstruktor übergeben.

```js
const sanitizer = new Sanitizer({
  elements: ["div", "p", "script"],
  attributes: ["id"],
  replaceWithChildrenElements: ["b"],
  comments: true,
  dataAttributes: false,
});
```

Beachten Sie, dass Sie nicht sowohl Erlauben- als auch Entfernen-Listen in derselben Konfiguration angeben können, ohne bei der Übergabe der Konfiguration an den Konstruktor oder eine Bereinigungsmethode eine Ausnahme zu verursachen.

### Erstellen einer "entfernen" Konfiguration

Dieses Beispiel zeigt, wie Sie eine "entfernen" Konfiguration für den Sanitizer erstellen können und in diesem Fall dem [`Sanitizer()`](/de/docs/Web/API/Sanitizer/Sanitizer) Konstruktor übergeben.

```js
const sanitizer = new Sanitizer({
  removeElements: ["span", "script"],
  removeAttributes: ["lang", "id"],
  comments: false,
});
```

Beachten Sie, dass Sie nicht sowohl Erlauben- als auch Entfernen-Listen in derselben Konfiguration angeben können, ohne bei der Übergabe der Konfiguration an den Konstruktor oder eine Bereinigungsmethode eine Ausnahme zu verursachen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
