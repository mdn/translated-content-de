---
title: SanitizerConfig
slug: Web/API/SanitizerConfig
l10n:
  sourceCommit: ae4577f45feb1515c2b887255c45ce0694dbb676
---

{{APIRef("HTML Sanitizer API")}}{{SeeCompatTable}}

Das **`SanitizerConfig`** Dictionary der [HTML Sanitizer API](/de/docs/Web/API/HTML_Sanitizer_API) gibt an, welche Elemente, Attribute und Kommentare erlaubt sind oder entfernt werden sollen, wenn HTML-Strings in ein [`Element`](/de/docs/Web/API/Element) oder [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) eingefügt werden oder wenn ein HTML-String in ein [`Document`](/de/docs/Web/API/Document) geparst wird.

Beachten Sie, dass in der Regel [`Sanitizer`](/de/docs/Web/API/Sanitizer)-Instanzen anstelle von `SanitizerConfig`-Objekten verwendet werden, da sie effizienter zu teilen und zu modifizieren sind.

## Instanzeigenschaften

- `elements`
  - : Ein Array, das die zu erlaubenden Elemente beim HTML-Sanitisieren angibt und optional ihre erlaubten oder zu entfernenden Attribute spezifiziert.

    Jedes Element kann durch seinen Namen (ein String) oder als Objekt mit folgenden Eigenschaften angegeben werden:
    - `name`
      - : Ein String, der den Namen des Elements enthält.
    - `namespace` {{optional_inline}}
      - : Ein String, der den Namensraum des Elements enthält.
        Der Standard-Namensraum ist `"http://www.w3.org/1999/xhtml"`.
    - `attributes` {{optional_inline}}
      - : Ein Array, das die Attribute angibt, die bei diesem (erlaubten) Element beim HTML-Sanitisieren zugelassen werden.

        Jedes Attribut kann durch seinen Namen (ein String) oder als Objekt mit folgenden Eigenschaften angegeben werden:
        - `name`
          - : Ein String, der den Namen des Attributs enthält.
        - `namespace` {{optional_inline}}
          - : Ein String, der den Namensraum des Attributs enthält, der standardmäßig `null` ist.

    - `removeAttributes` {{optional_inline}}
      - : Ein Array, das die Attribute angibt, die bei diesem (erlaubten) Element beim HTML-Sanitisieren entfernt werden sollen.

        Jedes Attribut kann durch seinen Namen (ein String) oder als Objekt mit folgenden Eigenschaften angegeben werden:
        - `name`
          - : Ein String, der den Namen des Attributs enthält.
        - `namespace` {{optional_inline}}
          - : Ein String, der den Namensraum des Attributs enthält, der standardmäßig `null` ist.

- `removeElements`
  - : Ein Array, das die zu entfernenden Elemente beim HTML-Sanitisieren angibt.

    Jedes Element kann durch seinen Namen (ein String) oder als Objekt mit folgenden Eigenschaften angegeben werden:
    - `name`
      - : Ein String, der den Namen des Elements enthält.
    - `namespace` {{optional_inline}}
      - : Ein String, der den Namensraum des Elements enthält.
        Der Standard-Namensraum ist `"http://www.w3.org/1999/xhtml"`.

- `replaceWithChildrenElements`
  - : Ein Array, das die Elemente angibt, die beim Sanitisieren von HTML mit ihrem Inhalt ersetzt werden sollen.
    Dies wird hauptsächlich verwendet, um Stile von Text zu entfernen (zum Beispiel könnten Sie damit `<b>some text</b>` in `some text` umwandeln).

    Jedes Element kann durch seinen Namen (ein String) oder als Objekt mit folgenden Eigenschaften angegeben werden:
    - `name`
      - : Ein String, der den Namen des Elements enthält.
    - `namespace` {{optional_inline}}
      - : Ein String, der den Namensraum des Elements enthält.
        Der Standard-Namensraum ist `"http://www.w3.org/1999/xhtml"`.

- `attributes`
  - : Ein Array, das die Attribute angibt, die beim HTML-Sanitisieren zugelassen werden.

    Jedes Attribut kann durch seinen Namen (ein String) oder als Objekt mit folgenden Eigenschaften angegeben werden:
    - `name`
      - : Ein String, der den Namen des Attributs enthält.
    - `namespace` {{optional_inline}}
      - : Ein String, der den Namensraum des Attributs enthält, der standardmäßig `null` ist.

- `removeAttributes`
  - : Ein Array, das die Attribute angibt, die von Elementen entfernt werden sollen, wenn HTML sanitisiert wird.

    Jedes Attribut kann durch seinen Namen (ein String) oder als Objekt mit folgenden Eigenschaften angegeben werden:
    - `name`
      - : Ein String, der den Namen des Attributs enthält.
    - `namespace` {{optional_inline}}
      - : Ein String, der den Namensraum des Attributs enthält, der standardmäßig `null` ist.

- `comments`
  - : `true`, wenn Kommentare erlaubt sind, und `false`, wenn sie entfernt werden sollen.
- `dataAttributes`
  - : `true`, wenn alle `data-*` Attribute erlaubt sind (in diesem Fall dürfen `data-*` Attribute nicht im `attributes` Array aufgelistet sein).
    Falls `false`, müssen alle zu erlaubenden `data-*` Attribute im `attributes` Array aufgelistet sein.

## Beschreibung

Ein **`SanitizerConfig`** spezifiziert, welche Elemente, Attribute und Kommentare erlaubt sind oder entfernt werden sollen, wenn HTML-Strings in ein [`Element`](/de/docs/Web/API/Element) oder [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) eingefügt werden oder wenn ein HTML-String in ein [`Document`](/de/docs/Web/API/Document) geparst wird.

Eine Instanz dieses Typs kann an den Konstruktor von [`Sanitizer()`](/de/docs/Web/API/Sanitizer/Sanitizer) übergeben werden, um einen [`Sanitizer`](/de/docs/Web/API/Sanitizer) zu konfigurieren, und wird von [`Sanitizer.get()`](/de/docs/Web/API/Sanitizer/get) zurückgegeben.
Sie kann auch als `option.sanitizer` Parameter beim Aufrufen der [Sanitisierungsmethoden](/de/docs/Web/API/HTML_Sanitizer_API#sanitization_methods) übergeben werden:

- [`setHTML()`](/de/docs/Web/API/Element/setHTML) oder [`setHTMLUnsafe()`](/de/docs/Web/API/Element/setHTMLUnsafe) auf [`Element`](/de/docs/Web/API/Element).
- [`setHTML()`](/de/docs/Web/API/ShadowRoot/setHTML) oder [`setHTMLUnsafe()`](/de/docs/Web/API/ShadowRoot/setHTMLUnsafe) auf [`ShadowRoot`](/de/docs/Web/API/ShadowRoot).
- [`Document.parseHTML()`](/de/docs/Web/API/Document/parseHTML_static) oder [`Document.parseHTMLUnsafe()`](/de/docs/Web/API/Document/parseHTMLUnsafe_static) statische Methoden.

### Gültige Konfiguration

Die Struktur des Konfigurationsobjekts erlaubt die Deklaration von Filteroptionen, die widersprüchlich oder redundant sind, wie z.B. ein Element sowohl in den Erlauben- als auch den Entfernen-Listen anzugeben oder ein Attribut mehrfach in einer Liste zu führen.
Um jegliche Mehrdeutigkeit zu vermeiden, erfordern Methoden, die eine `SanitizerConfig`-Instanz verwenden, dass ein _gültiges_ Konfigurationsobjekt übergeben wird, und werfen einen {{jsxref("TypeError")}}, wenn eine ungültige Konfiguration verwendet wird.

In einer gültigen Sanitizer-Konfiguration:

- Entweder das `elements` oder das `removeElements` Array kann definiert werden, aber nicht beide.

  > [!NOTE]
  > Es ist unmöglich, pro Elemente Attribute zu definieren, wenn das `removeElements` Array definiert ist, da diese den Elementen im `elements` Array hinzugefügt werden.

- Entweder das globale `attributes` oder das `removeAttributes` Array kann definiert werden, aber nicht beide.
- Das `replaceWithChildrenElements` Array, falls definiert, darf keine Elemente gemeinsam mit `elements` oder `removeElements` enthalten.
- Kein Array darf doppelte Elemente oder Attribute enthalten.
- Wenn das globale `attributes` Array definiert ist:
  - Ein Element kann beliebig `attributes` und/oder `removeAttributes` definieren.
  - Die `attributes` eines Elements dürfen keine gemeinsamen Werte mit dem globalen `attributes` Array haben.
  - Das `removeAttributes` Array eines Elements darf nur Werte enthalten, die auch im globalen `attributes` Array vorhanden sind.
  - Wenn `dataAttributes` `true` ist, dürfen die globalen und elementbezogenen Attribut-Arrays keine `data-*` Attribute enthalten (da diese automatisch erlaubt werden).
- Wenn das globale `removeAttributes` Array definiert ist:
  - Ein Element darf entweder `attributes` oder `removeAttributes` spezifizieren, aber nicht beides.
  - Das `attributes` oder `removeAttributes` Array eines Elements, je nachdem welches (falls eines) definiert ist, darf keine gemeinsamen Werte mit dem globalen `removeAttributes` Array haben.
  - Das `dataAttributes` Boolean darf nicht definiert sein.

Das leere Objekt `{}` ist eine gültige Konfiguration.

> [!NOTE]
> Die oben genannten Bedingungen gelten aus der Sicht eines Webentwicklers.
> Die [Gültigkeitsprüfung, die in der Spezifikation definiert ist](https://wicg.github.io/sanitizer-api/#sanitizerconfig-valid), ist leicht unterschiedlich, da sie nach der Kanonisierung der Konfiguration ausgeführt wird, wie z.B. das Hinzufügen von `removeElements`, wenn beide fehlen, und das Hinzufügen von Standard-Namensräumen.

### Erlauben- und Entfernen-Konfigurationen

Eine der Hauptimplikationen des vorhergehenden Abschnitts ist, dass eine gültige Konfiguration entweder `elements` oder `removeElements` Arrays (aber nicht beide) und entweder das `attributes` oder `removeAttributes` Arrays (aber nicht beide) spezifizieren kann.

Eine Konfiguration, die die `elements` und/oder `attributes` Arrays enthält, wird als [Erlauben-Konfiguration](/de/docs/Web/API/HTML_Sanitizer_API#allow_configurations) bezeichnet, da sie das Sanitisierungsverhalten in Bezug auf die Werte definiert, die im Ausgang erlaubt sein sollen.
Eine [Entfernen-Konfiguration](/de/docs/Web/API/HTML_Sanitizer_API#remove_configurations) ist eine, die entweder `removeElements` und/oder `removeAttributes` enthält und das Verhalten in Bezug auf die Werte definiert, die aus dem Ausgang entfernt werden sollen.

## Beispiele

### Erstellen einer "Erlauben"-Konfiguration

Dieses Beispiel zeigt, wie Sie eine "Erlauben"-Sanitizer-Konfiguration erstellen können, die bestimmte Elemente und Attribute erlaubt, {{htmlelement("b")}} Elemente durch ihre Kinder ersetzt, Kommentare im Ausgang enthalten lässt und erfordert, dass `data-*` Attribute explizit im `attributes` Array aufgelistet sind, um eingeschlossen zu werden.
Das Konfigurationsobjekt wird dem Konstruktor von [`Sanitizer()`](/de/docs/Web/API/Sanitizer/Sanitizer) übergeben.

```js
const sanitizer = new Sanitizer({
  elements: ["div", "p", "script"],
  attributes: ["id"],
  replaceWithChildrenElements: ["b"],
  comments: true,
  dataAttributes: false,
});
```

### Erstellen einer "Entfernen"-Konfiguration

Dieses Beispiel zeigt, wie Sie eine "Entfernen"-Sanitizer-Konfiguration erstellen können, die sowohl Elemente als auch Attribute entfernt.

```js
const sanitizer = new Sanitizer({
  removeElements: ["span", "script"],
  removeAttributes: ["lang", "id"],
  comments: false,
});
```

### Erlaubte Element- und Entfernte Attribut-Konfiguration

Dieses Beispiel zeigt, wie Sie eine "Hybrid"-Sanitizer-Konfiguration erstellen können, die einige Elemente erlaubt und bestimmte Attribute entfernt.
Ähnlich könnten Sie eine Konfiguration spezifizieren, die Elemente entfernt und Attribute erlaubt.

```js
const sanitizer = new Sanitizer({
  elements: ["span", "script"],
  removeAttributes: ["lang", "id"],
});
```

Beachten Sie, dass das gleichzeitige Vorhandensein von Erlauben- und Entfernen-Arrays für Elemente oder Erlauben- und Entfernen-Arrays für Attribute keine [gültige Konfiguration](#gültige_konfiguration) darstellt und zu einem `TypeError` führen würde.

### Ungültige Konfigurationen

Dieser Abschnitt zeigt einige ungültige Konfigurationen.
Diese werfen einen `TypeError`.

Ungültig, weil sowohl `elements` als auch `removeElements` definiert sind:

```js
const sanitizer1 = new Sanitizer({
  elements: ["span", "script"],
  removeElements: ["div", "b"],
});
```

Ungültig, weil {{htmlelement("span")}} sowohl in `elements` als auch in `replaceWithChildrenElements` vorkommt:

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

Ungültig, weil `removeAttributes` und `dataAttributes` definiert sind:

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
