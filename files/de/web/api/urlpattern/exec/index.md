---
title: "URLPattern: exec() Methode"
short-title: exec()
slug: Web/API/URLPattern/exec
l10n:
  sourceCommit: f06142077fabbb1e0fe791d74b856ae4f8d058b4
---

{{APIRef("URL Pattern API")}} {{AvailableInWorkers}}

Die **`exec()`** Methode des [`URLPattern`](/de/docs/Web/API/URLPattern) Interfaces nimmt eine URL oder ein Objekt von URL-Teilen und gibt entweder ein Objekt zurück, das die Ergebnisse des Abgleichs der URL mit dem Muster enthält, oder `null`, wenn die URL nicht mit dem Muster übereinstimmt.

## Syntax

```js-nolint
exec(input)
exec(url)
exec(url, baseURL)
```

### Parameter

- `input`
  - : Ein Objekt, das die einzelnen URL-Teile bereitstellt.
    Die Objektmitglieder können eines von `protocol`, `username`, `password`, `hostname`, `port`, `pathname`, `search`, `hash` oder `baseURL` sein.
- `url`
  - : Ein String, der eine absolute oder relative URL definiert.
    Wenn eine relative URL angegeben wird, muss auch [`baseURL`](#baseurl) bereitgestellt werden, und zusammen müssen sie zu einer absoluten URL aufgelöst werden.
    Wenn der Eingabe-String nicht analysiert werden kann oder eine relative URL ohne Basis-URL angegeben wird, gibt die Methode `false` zurück.
- `baseURL` {{optional_inline}}
  - : Ein String, der die Basis-URL darstellt, die in Fällen verwendet werden soll, in denen [`url`](#url) eine relative URL ist.
    Wird sie nicht angegeben, ist der Standardwert `undefined`.
    Wenn sie angegeben wird, aber die Basis-URL nicht analysiert werden kann, gibt die Methode `false` zurück.

URL-Teile, die nicht in der `url`/`input` angegeben sind, können [von einer Basis-URL geerbt werden](#vererbung_von_einer_basis-url) in einigen Fällen.
Weggelassene Teile werden als leere Strings behandelt.

### Rückgabewert

Ein {{jsxref("object")}}, das die übereinstimmenden Elemente und Gruppen definiert, oder `null`, wenn die übergebenen Eingaben nicht mit dem Muster übereinstimmen.

Das Objekt hat die folgenden Eigenschaften:

- `inputs`
  - : Ein Array, das die an die `exec()`-Funktion übergebenen Eingaben enthält.
    Dies umfasst entweder ein übergebenes `input`-Objekt, einen absoluten `url`-String oder eine relative `url` und eine `baseURL`.

- `protocol`, `username`, `password`, `hostname`, `port`, `pathname`, `search` und `hash`
  - : Benannte Eigenschaften für jeden URL-Teil.
    Jede Eigenschaft enthält ein Objekt mit den folgenden Eigenschaften:
    - `input`
      - : Der Teil der Eingabe, der der aktuellen URL-Teil-Eigenschaft entspricht (dieser muss mit dem Muster übereingestimmt haben).
        Dies könnte der leere String (`""`) sein.
    - `groups`
      - : Ein Objekt mit Eigenschaften für jede Übereinstimmungsgruppe im URL-Teil (falls vorhanden) und den entsprechenden Werten in den Eingaben.
        Die Gruppeneigenschaften sind von 0 an für unbenannte Übereinstimmungsgruppen nummeriert (wie das Platzhalterzeichen).
        Bei benannten Übereinstimmungsgruppen ist der Eigenschaftsname der Gruppenname.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Zeigt an, dass eine `baseURL` bereitgestellt wird, wenn ein [`input`](#input)-Objekt übergeben wird (sie sollte nur mit dem `url`-String übergeben werden).

## Beschreibung

Die Methode wird auf einem [`URLPattern`](/de/docs/Web/API/URLPattern) aufgerufen, wobei eine Eingabe-URL als String mit optionaler Basis-URL oder als Objekt mit Eigenschaften für jeden URL-Teil angegeben wird.

Die Methode gibt ein Objekt zurück, das die Ergebnisse des Abgleichs der URL mit dem Muster enthält, oder `null`, wenn die URL nicht mit dem Muster übereinstimmt.
Sie gibt auch `null` zurück, wenn eine relative `url` übergeben wird, aber `baseURL` nicht spezifiziert ist (eine absolute Test-URL kann nicht aufgelöst werden).
Beachten Sie, dass beim Übergeben eines `input`-Objekts `input.baseURL` immer optional ist.

### Vererbung von einer Basis-URL

URL-Teile, die spezifischer sind als der am wenigsten spezifische Teil, der in der `url` definiert ist, können von `baseURL` geerbt werden (oder von `input.baseURL` für `input`).
Intuitiv bedeutet dies, dass wenn der `pathname` Teil in der Eingabe spezifiziert wird, die Teile links davon in einer URL von der Basis-URL vererbt werden können (`protocol`, `hostname` und `port`), während die Teile rechts davon nicht (`search` und `hash`).
Die `username` und `password` werden niemals von einer Basis-URL geerbt.

Weitere Informationen finden Sie unter [Vererbung von einer Basis-URL](/de/docs/Web/API/URL_Pattern_API#inheritance_from_a_base_url) im API-Überblick.

## Beispiele

Die Beispiele zeigen, wie die `exec()`-Methode verwendet wird, um eine URL mit einem Muster abzugleichen.

### Abgleich einer absoluten URL

Zuerst definieren wir das Muster, das zum Abgleich von URLs verwendet wird.
Dieses Muster gleicht URLs ab, die entweder das `http` oder `https` Protokoll haben, Subdomains von `.example.com` sind und einen Pfad haben, der `/books/` gefolgt von einem beliebigen Wert ist.

```js
const pattern = new URLPattern("http{s}?://*.example.com/books/:id");
```

Als Nächstes testen wir den URL-String `"https://store.example.com/books/123"` gegen dieses Muster und loggen dann separat die Objekte für jede Eigenschaft.
Beachten Sie, dass `input` die Eingabe in der URL zeigt, die dem Muster entspricht.
In vielen Fällen ist dies der leere String (`""`), weil die Eingabe-URL den bestimmten URL-Teil nicht spezifiziert (dies entspricht dem Muster, da standardmäßig ein Platzhalter für nicht spezifizierte URL-Teile verwendet wird).

```js
let match = pattern.exec("https://store.example.com/books/123");

console.log(match.inputs); // ['https://store.example.com/books/123']
console.log(match.protocol); // { input: "https", groups: {} }
console.log(match.username); // { input: "", groups: {"0": ""} }
console.log(match.password); // { input: "", groups: {"0": ""} }
console.log(match.hostname); // { input: "store.example.com", groups: { "0": "store" } }
console.log(match.port); // { input: "", groups: {} }
console.log(match.pathname); // { input: "/books/123", groups: { "id": "123" } }
console.log(match.search); // { input: "", groups: {"0": ""} }
console.log(match.hash); // { input: "", groups: {"0": ""} }
```

Beachten Sie auch, wie das `pathname` Eingabe `"/books/123"` mit dem Muster `/books/:id` übereinstimmt, und `groups` enthält eine benannte Eigenschaft `id`, die den übereinstimmenden Wert in der Eingabe enthält.

### Abgleich einer relativen URL

Dieses Beispiel verwendet dasselbe Muster wie zuvor, um mit einer Anzahl von relativen URLs und deren entsprechenden Basis-URLs abzugleichen.

```js
const pattern = new URLPattern("http{s}?://*.example.com/books/:id");
```

Der unten stehende Code gleicht effektiv dieselbe absolute URL ab wie im vorherigen Beispiel, jedoch aufgeteilt in einen relativen `url`-String und eine Basis-URL.
Das zurückgegebene Objekt unterscheidet sich nur in den `inputs`:

```js
match = pattern.exec("/books/123", "http://store.example.com"); // returns object
console.log(match.inputs); // ['/books/123', 'https://store.example.com']
```

Die beiden untenstehenden Beispiele geben beide `null` zurück.
Das erste Beispiel stimmt nicht überein, weil die relative URL und die Basis-URL nicht zu einer gültigen absoluten URL aufgelöst werden.
Das zweite Beispiel stimmt nicht überein, weil keine Basis-URL angegeben wird.

```js
pattern.exec("/books/123", "data:text/plain,hello world!"); // returns null
pattern.exec("/books/123"); // returns null
```

### Abgleich mit einem URL-Objekt

Dieses Beispiel verwendet dasselbe Muster wie zuvor, um mit einer Anzahl von URLs abzugleichen, die als strukturierte Objekte definiert sind.

```js
const pattern = new URLPattern("http{s}?://*.example.com/books/:id");
```

Dieser Code testet gegen dieselbe URL, die im vorherigen Beispiel [Abgleich einer absoluten URL](#abgleich_einer_absoluten_url) verwendet wurde.
In diesem Fall wird sie jedoch als strukturiertes Objekt übergeben.
Da es sich um dieselbe URL handelt, ändert sich nur, dass die `inputs`-Eigenschaft das unten übergebene Objekt enthalten wird.

```js
pattern.exec({
  protocol: "https",
  hostname: "store.example.com",
  pathname: "/books/123",
}); // returns object
```

Der folgende Code stimmt ebenfalls überein, aber diesmal ist das `protocol` `http`, das von der `baseURL` geerbt wird.
Das zurückgegebene Objekt wäre ähnlich, außer dass `protocol.input` `http` wäre, und das `inputs`-Array würde das übergebene Objekt enthalten.

```js
pattern.exec({
  pathname: "/books/123",
  baseURL: "http://store.example.com",
}); // returns object
```

Der folgende Code stimmt nicht überein, weil das Protokoll `file` nicht zu den im Muster angegebenen Optionen gehört (`http` oder `https`).
Dies gibt `null` zurück.

```js
pattern.exec({
  protocol: "file",
  hostname: "store.example.com",
  pathname: "/books/123",
}); // returns null
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Ein Polyfill von `URLPattern` ist verfügbar [auf GitHub](https://github.com/kenchris/urlpattern-polyfill)
