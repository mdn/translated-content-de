---
title: SanitizerConfig
slug: Web/API/SanitizerConfig
l10n:
  sourceCommit: 438ac3c8511239d9ef8f4b562980ffc57ea8b358
---

{{APIRef("HTML Sanitizer API")}}

Das **`SanitizerConfig`** Dictionary der [HTML Sanitizer API](/de/docs/Web/API/HTML_Sanitizer_API) legt fest, welche Elemente, Attribute und Kommentare erlaubt oder entfernt werden sollen, wenn HTML-Strings in ein [`Element`](/de/docs/Web/API/Element) oder [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) eingefügt werden, oder beim Parsen eines HTML-Strings in ein [`Document`](/de/docs/Web/API/Document).

Beachten Sie, dass normalerweise [`Sanitizer`](/de/docs/Web/API/Sanitizer) Instanzen anstatt von `SanitizerConfig` Objekten verwendet werden, da sie effizienter zu teilen und zu modifizieren sind.

## Instanz-Eigenschaften

- `elements`
  - : Ein Array, das die Elemente angibt, die beim Bereinigen von HTML erlaubt sind, und optional auch deren erlaubte oder entfernte Attribute.

    Jedes Element kann entweder durch seinen Namen (ein String) oder als Objekt mit den folgenden Eigenschaften angegeben werden:
    - `name`
      - : Ein String, der den Namen des Elements enthält.
    - `namespace` {{optional_inline}}
      - : Ein String, der den Namensraum des Elements enthält.
        Der Standard-Namensraum ist `"http://www.w3.org/1999/xhtml"`.
    - `attributes` {{optional_inline}}
      - : Ein Array, das die Attribute angibt, die bei diesem (erlaubten) Element beim Bereinigen von HTML erlaubt sind.

        Jedes Attribut kann entweder durch seinen Namen (ein String) oder als Objekt mit den folgenden Eigenschaften angegeben werden:
        - `name`
          - : Ein String, der den Namen des Attributs enthält.
        - `namespace` {{optional_inline}}
          - : Ein String, der den Namensraum des Attributs enthält, welcher standardmäßig `null` ist.

    - `removeAttributes` {{optional_inline}}
      - : Ein Array, das die Attribute angibt, die bei diesem (erlaubten) Element beim Bereinigen von HTML entfernt werden sollen.

        Jedes Attribut kann entweder durch seinen Namen (ein String) oder als Objekt mit den folgenden Eigenschaften angegeben werden:
        - `name`
          - : Ein String, der den Namen des Attributs enthält.
        - `namespace` {{optional_inline}}
          - : Ein String, der den Namensraum des Attributs enthält, welcher standardmäßig `null` ist.

- `removeElements`
  - : Ein Array, das die Elemente angibt, die beim Bereinigen von HTML entfernt werden sollen.

    Jedes Element kann entweder durch seinen Namen (ein String) oder als Objekt mit den folgenden Eigenschaften angegeben werden:
    - `name`
      - : Ein String, der den Namen des Elements enthält.
    - `namespace` {{optional_inline}}
      - : Ein String, der den Namensraum des Elements enthält.
        Der Standard-Namensraum ist `"http://www.w3.org/1999/xhtml"`.

- `replaceWithChildrenElements`
  - : Ein Array, das die Elemente angibt, die durch ihren Inhalt ersetzt werden sollen, wenn HTML bereinigt wird.
    Dies wird hauptsächlich verwendet, um Stile von Text zu entfernen (zum Beispiel, um `<b>ein Text</b>` in `ein Text` zu ändern).

    Jedes Element kann entweder durch seinen Namen (ein String) oder als Objekt mit den folgenden Eigenschaften angegeben werden:
    - `name`
      - : Ein String, der den Namen des Elements enthält.
    - `namespace` {{optional_inline}}
      - : Ein String, der den Namensraum des Elements enthält.
        Der Standard-Namensraum ist `"http://www.w3.org/1999/xhtml"`.

- `attributes`
  - : Ein Array, das die Attribute angibt, die beim Bereinigen von HTML erlaubt sind.

    Jedes Attribut kann entweder durch seinen Namen (ein String) oder als Objekt mit den folgenden Eigenschaften angegeben werden:
    - `name`
      - : Ein String, der den Namen des Attributs enthält.
    - `namespace` {{optional_inline}}
      - : Ein String, der den Namensraum des Attributs enthält, welcher standardmäßig `null` ist.

- `removeAttributes`
  - : Ein Array, das die Attribute angibt, die beim Bereinigen von HTML von Elementen entfernt werden sollen.

    Jedes Attribut kann entweder durch seinen Namen (ein String) oder als Objekt mit den folgenden Eigenschaften angegeben werden:
    - `name`
      - : Ein String, der den Namen des Attributs enthält.
    - `namespace` {{optional_inline}}
      - : Ein String, der den Namensraum des Attributs enthält, welcher standardmäßig `null` ist.

- `comments`
  - : `true`, wenn Kommentare erlaubt sind, und `false`, wenn sie entfernt werden sollen.
- `dataAttributes`
  - : `true`, wenn alle `data-*` Attribute erlaubt sind (in diesem Fall dürfen `data-*` Attribute nicht im `attributes` Array aufgeführt sein).
    Wenn `false`, müssen alle zu erlaubenden `data-*` Attribute im `attributes` Array aufgeführt werden.

## Beschreibung

Ein **`SanitizerConfig`** gibt an, welche Elemente, Attribute und Kommentare erlaubt oder entfernt werden sollen, wenn HTML-Strings in ein [`Element`](/de/docs/Web/API/Element) oder [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) eingefügt werden oder wenn ein HTML-String in ein [`Document`](/de/docs/Web/API/Document) geparst wird.

Eine Instanz dieses Typs kann dem [`Sanitizer()`](/de/docs/Web/API/Sanitizer/Sanitizer) Konstruktor übergeben werden, um einen [`Sanitizer`](/de/docs/Web/API/Sanitizer) zu konfigurieren, und wird von [`Sanitizer.get()`](/de/docs/Web/API/Sanitizer/get) zurückgegeben.
Es kann auch als `option.sanitizer` Parameter beim Aufrufen der [Sanitization-Methoden](/de/docs/Web/API/HTML_Sanitizer_API#sanitization_methods) übergeben werden:

- [`setHTML()`](/de/docs/Web/API/Element/setHTML) oder [`setHTMLUnsafe()`](/de/docs/Web/API/Element/setHTMLUnsafe) auf [`Element`](/de/docs/Web/API/Element).
- [`setHTML()`](/de/docs/Web/API/ShadowRoot/setHTML) oder [`setHTMLUnsafe()`](/de/docs/Web/API/ShadowRoot/setHTMLUnsafe) auf [`ShadowRoot`](/de/docs/Web/API/ShadowRoot).
- [`Document.parseHTML()`](/de/docs/Web/API/Document/parseHTML_static) oder [`Document.parseHTMLUnsafe()`](/de/docs/Web/API/Document/parseHTMLUnsafe_static) statische Methoden.

### Gültige Konfiguration

Die Struktur des Konfigurationsobjekts erlaubt die Deklaration von Filteroptionen, die widersprüchlich oder redundant sind, wie zum Beispiel das Angeben eines Elements sowohl in der Erlauben- als auch in der Entfernen-Liste oder das mehrfache Auflisten eines Attributs in einer Liste.
Um jegliche Mehrdeutigkeit zu vermeiden, erfordern Methoden, die eine `SanitizerConfig` Instanz verwenden, dass ein _gültiges_ Konfigurationsobjekt übergeben wird und werfen einen {{jsxref("TypeError")}}, wenn eine ungültige Konfiguration verwendet wird.

In einer gültigen Sanitizer-Konfiguration:

- Es darf entweder das `elements` oder das `removeElements` Array definiert sein, aber nicht beide.

  > [!NOTE]
  > Es ist unmöglich, pro Element-Attribute zu definieren, wenn das `removeElements` Array definiert ist, da diese zu Elementen im `elements` Array hinzugefügt werden.

- Es darf entweder das globale `attributes` oder `removeAttributes` Array definiert sein, aber nicht beide.
- Das `replaceWithChildrenElements` Array, falls definiert, darf keine Elemente gemeinsam mit `elements` oder `removeElements` haben.
- Kein Array darf doppelte Elemente oder Attribute enthalten.
- Wenn das globale `attributes` Array definiert ist:
  - Ein Element kann beliebige oder keine der `attributes` und `removeAttributes` definieren.
  - Die `attributes` eines Elements dürfen keine gemeinsamen Werte mit dem globalen `attributes` Array haben.
  - Das `removeAttributes` Array eines Elements darf nur Werte enthalten, die auch im globalen `attributes` Array vorhanden sind.
  - Wenn `dataAttributes` `true` ist, dürfen die globalen und elementbasierte Attribut-Arrays keine `data-*` Attribute enthalten (da diese automatisch erlaubt werden).
- Wenn das globale `removeAttributes` Array definiert ist:
  - Ein Element kann entweder `attributes` oder `removeAttributes` angeben, aber nicht beide.
  - Das `attributes` oder `removeAttributes` Array eines Elements, je nach dem, welches (falls überhaupt) definiert ist, darf keine gemeinsamen Werte mit dem globalen `removeAttributes` Array haben.
  - Der `dataAttributes` Boolean darf nicht definiert sein.

Das leere Objekt `{}` ist eine gültige Konfiguration.

> [!NOTE]
> Die obigen Bedingungen stammen aus der Perspektive eines Webentwicklers.
> Die [Gültigkeitsprüfung, die in der Spezifikation definiert ist](https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html#dom-sanitizerconfig-valid), ist etwas anders, da sie nach der Kanonisierung der Konfiguration ausgeführt wird, wie zum Beispiel das Hinzufügen von `removeElements`, wenn beide fehlen, und das Hinzufügen von Standard-Namensräumen.

### Erlauben- und Entfernen-Konfigurationen

Eine der Hauptimplikationen des vorherigen Abschnitts ist, dass eine gültige Konfiguration entweder `elements` oder `removeElements` Arrays (aber nicht beide) und entweder `attributes` oder `removeAttributes` Arrays (aber nicht beide) festlegen kann.

Eine Konfiguration, die die Arrays `elements` und/oder `attributes` hat, wird als [Erlauben-Konfiguration](/de/docs/Web/API/HTML_Sanitizer_API#allow_configurations) bezeichnet, da sie das Bereinigungsverhalten in Bezug auf die Werte definiert, die im Ausgang enthalten sein dürfen.
Eine [Entfernen-Konfiguration](/de/docs/Web/API/HTML_Sanitizer_API#remove_configurations) ist eine, die entweder `removeElements` und/oder `removeAttributes` hat und das Verhalten in Bezug auf die Werte definiert, die aus dem Ausgang entfernt werden.

## Beispiele

### Erstellung einer "Erlauben"-Konfiguration

Dieses Beispiel zeigt, wie Sie eine "Erlauben" Sanitizer-Konfiguration erstellen können, die bestimmte Elemente und Attribute erlaubt, {{htmlelement("b")}} Elemente durch deren Kinder ersetzt, es erlaubt, Kommentare im Ausgang einzuschließen, und erfordert, dass `data-*` Attribute explizit im `attributes` Array aufgelistet werden, um einbezogen zu werden.
Das Konfigurationsobjekt wird dem [`Sanitizer()`](/de/docs/Web/API/Sanitizer/Sanitizer) Konstruktor übergeben.

```js
const sanitizer = new Sanitizer({
  elements: ["div", "p", "script"],
  attributes: ["id"],
  replaceWithChildrenElements: ["b"],
  comments: true,
  dataAttributes: false,
});
```

### Erstellung einer "Entfernen"-Konfiguration

Dieses Beispiel zeigt, wie Sie eine "Entfernen" Sanitizer-Konfiguration erstellen können, die sowohl Elemente als auch Attribute entfernt.

```js
const sanitizer = new Sanitizer({
  removeElements: ["span", "script"],
  removeAttributes: ["lang", "id"],
  comments: false,
});
```

### Erlauben von Elementen und Entfernen von Attributen Konfiguration

Dieses Beispiel zeigt, wie Sie eine "hybride" Sanitizer-Konfiguration erstellen können, die einige Elemente erlaubt und bestimmte Attribute entfernt.
Sie könnten auf ähnliche Weise eine Konfiguration festlegen, die Elemente entfernt und Attribute erlaubt.

```js
const sanitizer = new Sanitizer({
  elements: ["span", "script"],
  removeAttributes: ["lang", "id"],
});
```

Beachten Sie, dass das gleichzeitige Vorhandensein von Erlauben- und Entfernen-Arrays für Elemente oder das gleichzeitige Vorhandensein von Erlauben- und Entfernen-Arrays für Attribute keine [gültige Konfiguration](#gültige_konfiguration) ist und zu einem `TypeError` führen würde.

### Ungültige Konfigurationen

Dieser Abschnitt zeigt eine Reihe ungültiger Konfigurationen.
Diese werden einen `TypeError` auslösen.

Ungültig, da sowohl `elements` als auch `removeElements` definiert sind:

```js
const sanitizer1 = new Sanitizer({
  elements: ["span", "script"],
  removeElements: ["div", "b"],
});
```

Ungültig, da {{htmlelement("span")}} sowohl in `elements` als auch in `replaceWithChildrenElements` enthalten ist:

```js
const sanitizer2 = new Sanitizer({
  elements: ["span", "div"],
  replaceWithChildrenElements: ["span"],
});
```

Ungültig, da das redundante Attribut `"data-test"` definiert ist, wenn `dataAttributes` true ist:

```js
const sanitizer3 = new Sanitizer({
  attributes: ["lang", "id", "data-test"],
  dataAttributes: true,
});
```

Ungültig, da sowohl `removeAttributes` als auch `dataAttributes` definiert sind:

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
