---
title: Auflösen von relativen Referenzen zu einer URL
slug: Web/API/URL_API/Resolving_relative_references
l10n:
  sourceCommit: 216794e76611c18e53222bb8efa570e898e990de
---

{{DefaultAPISidebar("URL API")}}

Der [`URL()` Konstruktor](/de/docs/Web/API/URL/URL) oder die {{domxref("URL.parse_static", "URL.parse()")}} statische Methode der [URL API](/de/docs/Web/API/URL_API) kann verwendet werden, um eine relative Referenz und eine Basis-URL zu einer absoluten URL aufzulösen.

Beide Methoden akzeptieren bis zu zwei Zeichenfolgen-Argumente und geben ein [`URL()`](/de/docs/Web/API/URL) Objekt zurück, das eine absolute URL darstellt.
Das erste Argument repräsentiert entweder eine absolute URL oder eine relative Referenz zu einer URL, während das zweite eine Basis-URL ist, die verwendet wird, um die relative Referenz aufzulösen, falls eine im ersten Argument angegeben ist.
Die Methoden lösen die relative Referenz auf die gleiche Weise auf, außer dass der `URL()` Konstruktor eine Ausnahme auslöst, wenn ungültige URLs übergeben werden, während `parse()` `null` zurückgibt.

Der folgende Code zeigt, wie die Methoden mit den gleichen `url` und `base` URL-Werten verwendet werden.

```js
const url = "articles";
const base = "https://developer.mozilla.org/some/path";
const constructorResult = new URL(url, base);
// => https://developer.mozilla.org/some/articles
const parseResult = URL.parse(url, base);
// => https://developer.mozilla.org/some/articles
```

Aus dem Beispiel können Sie sehen, dass die Auflösung der `URL` von einer angegebenen Basis-URL und relativen Referenz nicht einfach eine Verkettung der angegebenen Parameter ist.

In diesem Fall wird ein relativer Pfad zum aktuellen Verzeichnis übergeben (`articles`).
Das aktuelle Verzeichnis der `base` URL ist der URL-String bis zum letzten Schrägstrich.
Hier hat `https://developer.mozilla.org/some/path` keinen abschließenden Schrägstrich, daher ist das aktuelle Verzeichnis `https://developer.mozilla.org/some/`, und löst sich somit in eine endgültige URL von `https://developer.mozilla.org/some/articles` auf.

Relative Referenzen werden gegen die Basis-URL mittels eines Pfadreferenz aufgelöst, der relativ zu: dem aktuellen Verzeichnis (`./`), dem übergeordneten Verzeichnis des aktuellen Verzeichnisses (`../`) oder dem Site-Root (`/`) ist.
Die folgenden Abschnitte zeigen, wie die Auflösung für jeden Typ von relativem Pfad funktioniert.

## Relativ zum aktuellen Verzeichnis

Eine relative Referenz mit dem Präfix `./` oder ohne Präfix, wie `./article`, `article` oder `./article/`, ist relativ zum aktuellen Verzeichnis der durch das `base` Argument repräsentierten URL.

```html hidden
<pre id="log"></pre>
```

```css hidden
#log {
  height: 90px;
  padding: 0.5rem;
  border: 1px solid black;
}
```

```js hidden
const logElement = document.getElementById("log");
function log(text) {
  logElement.innerText += `${text}\n`;
}
```

Das aktuelle Verzeichnis der `base` URL ist der URL-String bis zum letzten Schrägstrich, was `https://test.example.org/api/` für beide `base` Strings im folgenden Codeblock ist.
Die aktuelle Verzeichnis-Relative Referenz `article` wird daran angehängt und löst sich zu `https://test.example.org/api/article` auf.

```js
log(new URL("./article", "https://test.example.org/api/").href);
// => https://test.example.org/api/article
log(new URL("article", "https://test.example.org/api/v1").href);
// => https://test.example.org/api/article
```

Ähnlich haben unten beide Basis-URL-Strings ein aktuelles Verzeichnis von `https://test.example.org/api/v2/`.
Wir hängen `story/` und `story` an diese an, um die endgültige URL aufzulösen.

```js
log(new URL("./story/", "https://test.example.org/api/v2/").href);
// => https://test.example.org/api/v2/story/
log(new URL("./story", "https://test.example.org/api/v2/v3").href);
// => https://test.example.org/api/v2/story
```

{{EmbedLiveSample('Relativ zum aktuellen Verzeichnis', '100%', '140px')}}

## Relativ zum übergeordneten Verzeichnis

Eine relative Referenz mit dem Präfix `../`, wie `../path`, ist relativ zum _übergeordneten_ Verzeichnis des durch das `base` Argument repräsentierten aktuellen Verzeichnisses.
Jede Instanz von `../` entfernt einen Ordner vom aktuellen Verzeichnis, und dann wird jeder Text nach `../` zum verbleibenden Basis-Pfad hinzugefügt.
Sie können sich durch Angabe von `../` mehrmals durch die übergeordneten Verzeichnisse nach oben bewegen, aber nur bis zur Ebene des Site-Roots.

Zum Beispiel, bei einer Basis-URL `https://test.example.com/test/api/v1/` und einer zugehörigen relativen URL von `../some/path`, ist das aktuelle Verzeichnis `https://test.example.com/test/api/v1/`, das übergeordnete Verzeichnis ist `https://test.example.com/test/api/`, und die aufgelöste absolute URL ist `https://test.example.com/test/api/some/path`.

```html hidden
<pre id="log"></pre>
```

```css hidden
#log {
  height: 80px;
  padding: 0.5rem;
  border: 1px solid black;
}
```

```js hidden
const logElement = document.getElementById("log");
function log(text) {
  logElement.innerText += `${text}\n`;
}
```

Die folgenden Beispiele demonstrieren dies im Detail.
In allen Fällen ist das aktuelle Verzeichnis `https://test.example.org/api/v1/v2/` (im zweiten Fall ist `v3` nach dem letzten Schrägstrich), wobei jede relative Referenz zu einem anderen übergeordneten Verzeichnis aufgelöst wird.

```js
log(new URL("../path", "https://test.example.org/api/v1/v2/").href);
// => https://test.example.org/api/v1/path
log(new URL("../../path", "https://test.example.org/api/v1/v2/v3").href);
// => https://test.example.org/api/path
log(new URL("../../../../path", "https://test.example.org/api/v1/v2/").href);
// => https://test.example.org/path
```

{{EmbedLiveSample('Relativ zum übergeordneten Verzeichnis', '100%')}}

## Root relativ

Eine relative Referenz mit dem Präfix `/`, wie `/path`, ist relativ zum Site-Root der URL, die im `base` Argument angegeben ist.
Zum Beispiel, bei einer Basis-URL von `https://test.example.com/api/v1` ist die aufgelöste URL für die Root-relative URL `/some/path` `https://test.example.com/some/path`.

> [!NOTE]
> Der Pfadteil der `base` URL spielt keine Rolle beim Auflösen von Root-relativen URLs.

```html hidden
<pre id="log"></pre>
```

```css hidden
#log {
  height: 80px;
  padding: 0.5rem;
  border: 1px solid black;
}
```

```js hidden
const logElement = document.getElementById("log");
function log(text) {
  logElement.innerText += `${text}\n`;
}
```

Unten sind ein paar weitere Beispiele.

```js
log(new URL("/some/path", "https://test.example.org/api/").href);
// => https://test.example.org/some/path
log(new URL("/", "https://test.example.org/api/v1/").href);
// => https://test.example.org/
log(new URL("/article", "https://example.com/api/v1/").href);
// => https://example.com/article
```

{{EmbedLiveSample('Root relativ', '100%')}}

## Siehe auch

- [RFC 3986 - Relative Resolution](https://datatracker.ietf.org/doc/html/rfc3986.html#section-5.2), die Spezifikation für das Auflösen von Basis- und relativen URLs
