---
title: SanitizerConfig
slug: Web/API/SanitizerConfig
l10n:
  sourceCommit: ba886c384e385689ce8feffacf4f7ce1d8c5e736
---

{{APIRef("HTML Sanitizer API")}}

Das **`SanitizerConfig`**-Wörterbuch der [HTML Sanitizer API](/de/docs/Web/API/HTML_Sanitizer_API) gibt an, welche Elemente, Attribute und Kommentare erlaubt oder entfernt werden sollen, wenn HTML-Strings in ein [`Element`](/de/docs/Web/API/Element) oder [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) eingefügt oder beim Parsen eines HTML-Strings in ein [`Document`](/de/docs/Web/API/Document) umgewandelt werden.

Bitte beachten Sie, dass normalerweise [`Sanitizer`](/de/docs/Web/API/Sanitizer)-Instanzen anstelle von `SanitizerConfig`-Objekten verwendet werden, da sie effizienter zu teilen und zu modifizieren sind.

## Instanz-Eigenschaften

- `elements`
  - : Ein Array, das die Elemente angibt, die beim Bereinigen von HTML zugelassen sind, und optional deren erlaubte oder entfernte Attribute.

    Jedes Element kann durch seinen Namen (einen String) oder als Objekt mit den folgenden Eigenschaften angegeben werden:
    - `name`
      - : Ein String, der den Namen des Elements enthält.
    - `namespace` {{optional_inline}}
      - : Ein String, der den Namensraum des Elements enthält.
        Der Standardnamensraum ist `"http://www.w3.org/1999/xhtml"`.
    - `attributes` {{optional_inline}}
      - : Ein Array, das die Attribute angibt, die auf diesem (erlaubten) Element beim Bereinigen von HTML zugelassen sind.

        Jedes Attribut kann durch seinen Namen (einen String) oder als Objekt mit den folgenden Eigenschaften angegeben werden:
        - `name`
          - : Ein String, der den Namen des Attributs enthält.
        - `namespace` {{optional_inline}}
          - : Ein String, der den Namensraum des Attributs enthält, der standardmäßig `null` ist.

    - `removeAttributes` {{optional_inline}}
      - : Ein Array, das die Attribute angibt, die auf diesem (erlaubten) Element beim Bereinigen von HTML entfernt werden sollen.

        Jedes Attribut kann durch seinen Namen (einen String) oder als Objekt mit den folgenden Eigenschaften angegeben werden:
        - `name`
          - : Ein String, der den Namen des Attributs enthält.
        - `namespace` {{optional_inline}}
          - : Ein String, der den Namensraum des Attributs enthält, der standardmäßig `null` ist.

- `removeElements`
  - : Ein Array, das die Elemente angibt, die beim Bereinigen von HTML entfernt werden sollen.

    Jedes Element kann durch seinen Namen (einen String) oder als Objekt mit den folgenden Eigenschaften angegeben werden:
    - `name`
      - : Ein String, der den Namen des Elements enthält.
    - `namespace` {{optional_inline}}
      - : Ein String, der den Namensraum des Elements enthält.
        Der Standardnamensraum ist `"http://www.w3.org/1999/xhtml"`.

- `replaceWithChildrenElements`
  - : Ein Array, das die Elemente angibt, die durch ihren Inhalt ersetzt werden sollen, wenn HTML bereinigt wird.
    Dies wird hauptsächlich verwendet, um Stile aus Text zu entfernen (zum Beispiel könnte dies verwendet werden, um `<b>einige Texte</b>` zu `einige Texte` zu ändern).

    Jedes Element kann durch seinen Namen (einen String) oder als Objekt mit den folgenden Eigenschaften angegeben werden:
    - `name`
      - : Ein String, der den Namen des Elements enthält.
    - `namespace` {{optional_inline}}
      - : Ein String, der den Namensraum des Elements enthält.
        Der Standardnamensraum ist `"http://www.w3.org/1999/xhtml"`.

- `attributes`
  - : Ein Array, das die Attribute angibt, die beim Bereinigen von HTML zugelassen sind.

    Jedes Attribut kann durch seinen Namen (einen String) oder als Objekt mit den folgenden Eigenschaften angegeben werden:
    - `name`
      - : Ein String, der den Namen des Attributs enthält.
    - `namespace` {{optional_inline}}
      - : Ein String, der den Namensraum des Attributs enthält, der standardmäßig `null` ist.

- `removeAttributes`
  - : Ein Array, das die Attribute angibt, die aus Elementen entfernt werden sollen, wenn HTML bereinigt wird.

    Jedes Attribut kann durch seinen Namen (einen String) oder als Objekt mit den folgenden Eigenschaften angegeben werden:
    - `name`
      - : Ein String, der den Namen des Attributs enthält.
    - `namespace` {{optional_inline}}
      - : Ein String, der den Namensraum des Attributs enthält, der standardmäßig `null` ist.

- `comments`
  - : `true`, wenn Kommentare erlaubt sind, und `false`, wenn sie entfernt werden sollen.
- `dataAttributes`
  - : `true`, wenn alle `data-*`-Attribute zugelassen werden (in diesem Fall dürfen `data-*`-Attribute nicht im `attributes`-Array aufgelistet sein).
    Wenn `false`, müssen alle zugelassenen `data-*`-Attribute im `attributes`-Array aufgelistet sein.

## Beschreibung

Ein **`SanitizerConfig`** gibt an, welche Elemente, Attribute und Kommentare erlaubt oder entfernt werden sollen, wenn Strings von HTML in ein [`Element`](/de/docs/Web/API/Element) oder [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) eingefügt oder beim Parsen eines HTML-Strings in ein [`Document`](/de/docs/Web/API/Document) umgewandelt werden.

Eine Instanz dieses Typs kann an den Konstruktor von [`Sanitizer()`](/de/docs/Web/API/Sanitizer/Sanitizer) übergeben werden, um einen [`Sanitizer`](/de/docs/Web/API/Sanitizer) zu konfigurieren, und wird von [`Sanitizer.get()`](/de/docs/Web/API/Sanitizer/get) zurückgegeben.
Sie kann auch als `option.sanitizer`-Parameter beim Aufrufen der [Sanitizerungsmethoden](/de/docs/Web/API/HTML_Sanitizer_API#sanitization_methods) übergeben werden:

- [`setHTML()`](/de/docs/Web/API/Element/setHTML) oder [`setHTMLUnsafe()`](/de/docs/Web/API/Element/setHTMLUnsafe) auf [`Element`](/de/docs/Web/API/Element).
- [`setHTML()`](/de/docs/Web/API/ShadowRoot/setHTML) oder [`setHTMLUnsafe()`](/de/docs/Web/API/ShadowRoot/setHTMLUnsafe) auf [`ShadowRoot`](/de/docs/Web/API/ShadowRoot).
- [`Document.parseHTML()`](/de/docs/Web/API/Document/parseHTML_static) oder [`Document.parseHTMLUnsafe()`](/de/docs/Web/API/Document/parseHTMLUnsafe_static) statische Methoden.

### Gültige Konfiguration

Die Struktur des Konfigurationsobjekts erlaubt die Deklaration von Filteroptionen, die widersprüchlich oder redundant sind, wie das Angeben eines Elements in sowohl Zulassungs- als auch Entfernenlisten oder das mehrfache Auflisten eines Attributs in einer Liste.
Um jegliche Unklarheiten zu vermeiden, erfordern Methoden, die eine `SanitizerConfig`-Instanz übernehmen, dass ein _gültiges_ Konfigurationsobjekt übergeben wird, und werfen einen {{jsxref("TypeError")}}, wenn eine ungültige Konfiguration verwendet wird.

In einer gültigen Sanitizer-Konfiguration:

- Entweder das `elements`- oder `removeElements`-Array darf definiert sein, aber nicht beide.

  > [!NOTE]
  > Es ist unmöglich, pro-Element-Attribute zu definieren, wenn das `removeElements`-Array definiert ist, da diese zu den Elementen im `elements`-Array hinzugefügt werden.

- Entweder das globale `attributes`- oder `removeAttributes`-Array darf definiert sein, aber nicht beide
- Das `replaceWithChildrenElements`-Array, falls definiert, darf keine gemeinsamen Elemente mit `elements` oder `removeElements` haben
- Kein Array darf doppelte Elemente oder Attribute enthalten
- Wenn das globale `attributes`-Array definiert ist:
  - Ein Element darf keine oder beliebige `attributes` und `removeAttributes` definieren
  - Ein Element-`attributes` darf keine gemeinsamen Werte mit dem globalen `attributes`-Array haben
  - Ein Element-`removeAttributes`-Array darf nur Werte enthalten, die auch im globalen `attributes`-Array vorhanden sind.
  - Wenn `dataAttributes` `true` ist, dürfen die globalen und Element-Attribut-Arrays keine `data-*`-Attribute enthalten (da diese automatisch erlaubt werden).
- Wenn das globale `removeAttributes`-Array definiert ist:
  - Ein Element darf entweder `attributes` oder `removeAttributes` angeben, aber nicht beides
  - Ein Element-`attributes`- oder `removeAttributes`-Array, je nachdem, welches (falls vorhanden) definiert ist, darf keine gemeinsamen Werte mit dem globalen `removeAttributes`-Array haben.
  - Der `dataAttributes`-Boolean darf nicht definiert sein.

Das leere Objekt `{}` ist eine gültige Konfiguration.

> [!NOTE]
> Die oben genannten Bedingungen sind aus der Perspektive eines Webentwicklers.
> Die [Gültigkeitsprüfung, die in der Spezifikation definiert ist](https://wicg.github.io/sanitizer-api/#sanitizerconfig-valid), ist leicht anders, da sie nach der Kanonisierung der Konfiguration ausgeführt wird, wie das Hinzufügen von `removeElements`, wenn beide fehlen, und das Hinzufügen von Standard-Namensräumen.

### Zulassungs- und Entfernungskonfigurationen

Eine der Hauptimplikationen des vorherigen Abschnitts ist, dass eine gültige Konfiguration entweder `elements`- oder `removeElements`-Arrays (aber nicht beide) und entweder die `attributes`- oder `removeAttributes`-Arrays (aber nicht beide) spezifizieren kann.

Eine Konfiguration, die die `elements`- und/oder `attributes`-Arrays hat, wird als [Zulassungskonfiguration](/de/docs/Web/API/HTML_Sanitizer_API#allow_configurations) bezeichnet, da sie das Bereinigungsverhalten in Bezug auf die Werte definiert, die im Ausgang erlaubt sind.
Eine [Entfernungskonfiguration](/de/docs/Web/API/HTML_Sanitizer_API#remove_configurations) ist eine, die entweder `removeElements` und/oder `removeAttributes` hat und das Verhalten in Bezug auf die Werte definiert, die aus dem Ausgang entfernt werden.

## Beispiele

### Erstellen einer "Zulassungs"-Konfiguration

Dieses Beispiel zeigt, wie Sie eine "Zulassungs"-Sanitizer-Konfiguration erstellen könnten, die bestimmte Elemente und Attribute erlaubt, {{htmlelement("b")}}-Elemente mit ihren Kindern ersetzt, es erlaubt, dass Kommentare im Ausgang enthalten sind, und erfordert, dass `data-*`-Attribute explizit in der `attributes`-Array aufgelistet werden, um enthalten zu sein.
Das Konfigurationsobjekt wird an den Konstruktor von [`Sanitizer()`](/de/docs/Web/API/Sanitizer/Sanitizer) übergeben.

```js
const sanitizer = new Sanitizer({
  elements: ["div", "p", "script"],
  attributes: ["id"],
  replaceWithChildrenElements: ["b"],
  comments: true,
  dataAttributes: false,
});
```

### Erstellen einer "Entfernungs"-Konfiguration

Dieses Beispiel zeigt, wie Sie eine "Entfernungs"-Sanitizer-Konfiguration erstellen könnten, die sowohl Elemente als auch Attribute entfernt.

```js
const sanitizer = new Sanitizer({
  removeElements: ["span", "script"],
  removeAttributes: ["lang", "id"],
  comments: false,
});
```

### Zulassungs-Element- und Entfernungs-Attribut-Konfiguration

Dieses Beispiel zeigt, wie Sie eine "hybride" Sanitizer-Konfiguration erstellen könnten, die einige Elemente erlaubt und bestimmte Attribute entfernt.
Sie könnten ähnlich eine Konfiguration angeben, die Elemente entfernt und Attribute erlaubt.

```js
const sanitizer = new Sanitizer({
  elements: ["span", "script"],
  removeAttributes: ["lang", "id"],
});
```

Beachten Sie, dass das gleichzeitige Vorhandensein von Zulassungs- und Entfernungssammlungen für Elemente, oder sowohl Zulassungs- als auch Entfernungssammlungen für Attribute keine [gültige Konfiguration](#gültige_konfiguration) ist und zu einem `TypeError` führen würde.

### Ungültige Konfigurationen

Dieser Abschnitt zeigt eine Reihe von ungültigen Konfigurationen.
Diese werden einen `TypeError` auslösen.

Ungültig, weil sowohl `elements` als auch `removeElements` definiert sind:

```js
const sanitizer1 = new Sanitizer({
  elements: ["span", "script"],
  removeElements: ["div", "b"],
});
```

Ungültig, weil {{htmlelement("span")}} in sowohl `elements` als auch `replaceWithChildrenElements` enthalten ist:

```js
const sanitizer2 = new Sanitizer({
  elements: ["span", "div"],
  replaceWithChildrenElements: ["span"],
});
```

Ungültig, weil das redundante Attribut `"data-test"` definiert ist, obwohl `dataAttributes` wahr ist:

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
