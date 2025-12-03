---
title: SanitizerConfig
slug: Web/API/SanitizerConfig
l10n:
  sourceCommit: dd868507df863ab4f37d53c960c76e20e9ee365f
---

{{APIRef("HTML Sanitizer API")}}{{SeeCompatTable}}

Das **`SanitizerConfig`**-Wörterbuch der [HTML Sanitizer API](/de/docs/Web/API/HTML_Sanitizer_API) spezifiziert, welche Elemente, Attribute und Kommentare erlaubt sind oder entfernt werden sollten, wenn HTML-Strings in ein [`Element`](/de/docs/Web/API/Element) oder [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) eingefügt werden, oder wenn ein HTML-String in ein [`Document`](/de/docs/Web/API/Document) geparst wird.

Es ist zu beachten, dass normalerweise [`Sanitizer`](/de/docs/Web/API/Sanitizer)-Instanzen anstelle von `SanitizerConfig`-Objekten verwendet werden, da sie effizienter sind zu teilen und zu modifizieren.

## Instanzeigenschaften

- `elements`
  - : Ein Array, das die Elemente angibt, die beim Bereinigen von HTML erlaubt sind. Optional können auch deren erlaubte oder entfernte Attribute angegeben werden.

    Jedes Element kann durch den Namen (ein String) oder als Objekt mit den folgenden Eigenschaften angegeben werden:
    - `name`
      - : Ein String, der den Namen des Elements enthält.
    - `namespace` {{optional_inline}}
      - : Ein String, der den Namensraum des Elements enthält. Der Standard-Namensraum ist `"http://www.w3.org/1999/xhtml"`.
    - `attributes` {{optional_inline}}
      - : Ein Array, das die Attribute angibt, die auf diesem (erlaubten) Element beim Bereinigen von HTML erlaubt sind.

        Jedes Attribut kann durch den Namen (ein String) oder als Objekt mit den folgenden Eigenschaften angegeben werden:
        - `name`
          - : Ein String, der den Namen des Attributs enthält.
        - `namespace` {{optional_inline}}
          - : Ein String, der den Namensraum des Attributs enthält, der standardmäßig `null` ist.

    - `removeAttributes` {{optional_inline}}
      - : Ein Array, das die Attribute angibt, die auf diesem (erlaubten) Element beim Bereinigen von HTML entfernt werden sollen.

        Jedes Attribut kann durch den Namen (ein String) oder als Objekt mit den folgenden Eigenschaften angegeben werden:
        - `name`
          - : Ein String, der den Namen des Attributs enthält.
        - `namespace` {{optional_inline}}
          - : Ein String, der den Namensraum des Attributs enthält, der standardmäßig `null` ist.

- `removeElements`
  - : Ein Array, das die Elemente angibt, die beim Bereinigen von HTML entfernt werden sollen.

    Jedes Element kann durch den Namen (ein String) oder als Objekt mit den folgenden Eigenschaften angegeben werden:
    - `name`
      - : Ein String, der den Namen des Elements enthält.
    - `namespace` {{optional_inline}}
      - : Ein String, der den Namensraum des Elements enthält. Der Standard-Namensraum ist `"http://www.w3.org/1999/xhtml"`.

- `replaceWithChildrenElements`
  - : Ein Array, das die Elemente angibt, die mit ihrem Inhalt ersetzt werden sollen, wenn HTML bereinigt wird. Dies wird hauptsächlich verwendet, um Stile von Text zu entfernen (zum Beispiel könnten Sie dies verwenden, um `<b>einige Texte</b>` in `einige Texte` zu ändern).

    Jedes Element kann durch den Namen (ein String) oder als Objekt mit den folgenden Eigenschaften angegeben werden:
    - `name`
      - : Ein String, der den Namen des Elements enthält.
    - `namespace` {{optional_inline}}
      - : Ein String, der den Namensraum des Elements enthält. Der Standard-Namensraum ist `"http://www.w3.org/1999/xhtml"`.

- `attributes`
  - : Ein Array, das die Attribute angibt, die beim Bereinigen von HTML erlaubt sind.

    Jedes Attribut kann durch den Namen (ein String) oder als Objekt mit den folgenden Eigenschaften angegeben werden:
    - `name`
      - : Ein String, der den Namen des Attributs enthält.
    - `namespace` {{optional_inline}}
      - : Ein String, der den Namensraum des Attributs enthält, der standardmäßig `null` ist.

- `removeAttributes`
  - : Ein Array, das angibt, welche Attribute von Elementen beim Bereinigen von HTML entfernt werden sollen.

    Jedes Attribut kann durch den Namen (ein String) oder als Objekt mit den folgenden Eigenschaften angegeben werden:
    - `name`
      - : Ein String, der den Namen des Attributs enthält.
    - `namespace` {{optional_inline}}
      - : Ein String, der den Namensraum des Attributs enthält, der standardmäßig `null` ist.

- `comments`
  - : `true`, wenn Kommentare erlaubt sind, und `false`, wenn sie entfernt werden sollen.
- `dataAttributes`
  - : `true`, wenn alle `data-*`-Attribute erlaubt sind (in diesem Fall müssen `data-*`-Attribute nicht in der `attributes`-Liste aufgeführt werden). Wenn `false`, müssen alle erlaubten `data-*`-Attribute in der `attributes`-Liste aufgeführt werden.

## Beschreibung

Ein **`SanitizerConfig`** spezifiziert, welche Elemente, Attribute und Kommentare erlaubt sind oder entfernt werden sollten, wenn Strings von HTML in ein [`Element`](/de/docs/Web/API/Element) oder [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) eingefügt werden oder wenn ein HTML-String in ein [`Document`](/de/docs/Web/API/Document) geparst wird.

Eine Instanz dieser Art kann beim [`Sanitizer()`](/de/docs/Web/API/Sanitizer/Sanitizer)-Konstruktor übergeben werden, um einen [`Sanitizer`](/de/docs/Web/API/Sanitizer) zu konfigurieren und wird von [`Sanitizer.get()`](/de/docs/Web/API/Sanitizer/get) zurückgegeben.
Es kann auch als `option.sanitizer`-Parameter übergeben werden, wenn die [Bereinigungsmethoden](/de/docs/Web/API/HTML_Sanitizer_API#sanitization_methods) aufgerufen werden:

- [`setHTML()`](/de/docs/Web/API/Element/setHTML) oder [`setHTMLUnsafe()`](/de/docs/Web/API/Element/setHTMLUnsafe) auf [`Element`](/de/docs/Web/API/Element).
- [`setHTML()`](/de/docs/Web/API/ShadowRoot/setHTML) oder [`setHTMLUnsafe()`](/de/docs/Web/API/ShadowRoot/setHTMLUnsafe) auf [`ShadowRoot`](/de/docs/Web/API/ShadowRoot).
- [`Document.parseHTML()`](/de/docs/Web/API/Document/parseHTML_static) oder [`Document.parseHTMLUnsafe()`](/de/docs/Web/API/Document/parseHTMLUnsafe_static) statische Methoden.

### Gültige Konfiguration

Die Struktur des Konfigurationsobjekts ermöglicht die Deklaration von Filteroptionen, die widersprüchlich oder redundant sind, wie das Angeben eines Elements in sowohl Erlauben- als auch Entfernungslisten oder das mehrfache Auflisten eines Attributs in einer Liste.
Um jede Mehrdeutigkeit zu vermeiden, erfordern Methoden, die eine `SanitizerConfig`-Instanz akzeptieren, dass ein _gültiges_ Konfigurationsobjekt übergeben wird, und werfen einen {{jsxref("TypeError")}}, wenn eine ungültige Konfiguration verwendet wird.

In einer gültigen Sanitizer-Konfiguration:

- Entweder das `elements`- oder das `removeElements`-Array kann definiert sein, aber nicht beide.

  > [!NOTE]
  > Es ist unmöglich, für Elemente spezifische Attribute zu definieren, wenn das `removeElements`-Array definiert ist, da diese den Elementen im `elements`-Array hinzugefügt werden.

- Entweder das globale `attributes`- oder das `removeAttributes`-Array kann definiert sein, aber nicht beide.
- Das `replaceWithChildrenElements`-Array, wenn definiert, darf keine gemeinsamen Elemente mit `elements` oder `removeElements` haben.
- Kein Array darf doppelte Elemente oder Attribute enthalten.
- Wenn das globale `attributes`-Array definiert ist:
  - Ein Element kann eines oder keines von `attributes` und `removeAttributes` definieren.
  - Ein Element's `attributes` darf keine gemeinsamen Werte mit dem globalen `attributes`-Array haben.
  - Ein Element's `removeAttributes`-Array darf nur Werte enthalten, die auch im globalen `attributes`-Array vorhanden sind.
  - Wenn `dataAttributes` `true` ist, dürfen die globalen und Element-Attribut-Arrays keine `data-*`-Attribute enthalten (da diese automatisch erlaubt sind).
- Wenn das globale `removeAttributes`-Array definiert ist:
  - Ein Element kann entweder `attributes` oder `removeAttributes` angeben, aber nicht beides.
  - Ein Element's `attributes`- oder `removeAttributes`-Array, je nachdem welches (wenn überhaupt) definiert ist, darf keine gemeinsamen Werte mit dem globalen `removeAttributes`-Array haben.
  - Die `dataAttributes`-Boolescherwert darf nicht definiert sein.

Das leere Objekt `{}` ist eine gültige Konfiguration.

> [!NOTE]
> Die oben genannten Bedingungen gelten aus der Perspektive eines Webentwicklers.
> Die [Gültigkeitsprüfung, die in der Spezifikation definiert ist](https://wicg.github.io/sanitizer-api/#sanitizerconfig-valid), ist etwas anders, weil sie nach der Kanonisierung der Konfiguration durchgeführt wird, wie das Hinzufügen von `removeElements`, wenn beide fehlen, und das Hinzufügen von Standard-Namensräumen.

### Erlauben- und Entfernen-Konfigurationen

Eine der Hauptimplikationen des vorherigen Abschnitts ist, dass eine gültige Konfiguration entweder `elements`- oder `removeElements`-Arrays (aber nicht beide) und entweder `attributes`- oder `removeAttributes`-Arrays (aber nicht beide) spezifizieren kann.

Eine Konfiguration, die über die `elements`- und/oder `attributes`-Arrays verfügt, wird als [Erlauben-Konfiguration](/de/docs/Web/API/HTML_Sanitizer_API#allow_configurations) bezeichnet, da sie das Bereinigungsverhalten in Bezug auf die Werte definiert, die im Ausgang erlaubt sind.
Eine [Entfernen-Konfiguration](/de/docs/Web/API/HTML_Sanitizer_API#remove_configurations) ist eine, die entweder `removeElements` und/oder `removeAttributes` enthält und das Verhalten in Bezug auf die Werte definiert, die aus dem Ausgang entfernt werden.

## Beispiele

### Erstellen einer "erlauben" Konfiguration

Dieses Beispiel zeigt, wie Sie eine "erlauben" Sanitizer-Konfiguration erstellen könnten, die spezifische Elemente und Attribute erlaubt, {{htmlelement("b")}}-Elemente durch ihre Kinder ersetzt, erlaubt, dass Kommentare in der Ausgabe enthalten sind, und erfordert, dass `data-*`-Attribute explizit in der `attributes`-Liste aufgeführt werden, um enthalten zu sein.
Das Konfigurationsobjekt wird dem [`Sanitizer()`](/de/docs/Web/API/Sanitizer/Sanitizer)-Konstruktor übergeben.

```js
const sanitizer = new Sanitizer({
  elements: ["div", "p", "script"],
  attributes: ["id"],
  replaceWithChildrenElements: ["b"],
  comments: true,
  dataAttributes: false,
});
```

### Erstellen einer "entfernen" Konfiguration

Dieses Beispiel zeigt, wie Sie eine "entfernen" Sanitizer-Konfiguration erstellen könnten, die sowohl Elemente als auch Attribute entfernt.

```js
const sanitizer = new Sanitizer({
  removeElements: ["span", "script"],
  removeAttributes: ["lang", "id"],
  comments: false,
});
```

### Erlauben von Elementen und Entfernen von Attributen Konfiguration

Dieses Beispiel zeigt, wie Sie eine "hybrid" Sanitizer-Konfiguration erstellen könnten, die einige Elemente erlaubt und bestimmte Attribute entfernt.
Sie könnten ähnlich eine Konfiguration spezifizieren, die Elemente entfernt und Attribute erlaubt.

```js
const sanitizer = new Sanitizer({
  elements: ["span", "script"],
  removeAttributes: ["lang", "id"],
});
```

Beachten Sie, dass das gleichzeitige Vorhandensein von Erlauben- und Entfernen-Arrays für Elemente oder sowohl Erlauben- als auch Entfernen-Arrays für Attribute keine [gültige Konfiguration](#gültige_konfiguration) ist und zu einem `TypeError` führen würde.

### Ungültige Konfigurationen

Dieser Abschnitt zeigt eine Reihe von ungültigen Konfigurationen.
Diese werden einen `TypeError` werfen.

Ungültig, weil sowohl `elements` als auch `removeElements` definiert sind:

```js
const sanitizer1 = new Sanitizer({
  elements: ["span", "script"],
  removeElements: ["div", "b"],
});
```

Ungültig, weil {{htmlelement("span")}} sowohl in `elements` als auch in `removeElements` enthalten ist.

```js
const sanitizer2 = new Sanitizer({
  elements: ["span", "div"],
  replaceWithChildrenElements: ["span"],
});
```

Ungültig, weil das redundante Attribut `"data-test"` definiert ist, wenn `dataAttributes` wahr ist:

```js
const sanitizer3 = new Sanitizer({
  attributes: ["lang", "id", "data-test"],
  dataAttributes: true,
});
```

Ungültig, weil es `removeAttributes` und `dataAttributes` definiert hat.

```js
const sanitizer4 = new Sanitizer({
  removeAttributes: ["lang", "id"],
  dataAttributes: true,
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
