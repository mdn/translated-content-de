---
title: Auflösen relativer Verweise zu einer URL
slug: Web/API/URL_API/Resolving_relative_references
l10n:
  sourceCommit: 216794e76611c18e53222bb8efa570e898e990de
---

{{DefaultAPISidebar("URL API")}}

Der [`URL()`-Konstruktor](/de/docs/Web/API/URL/URL) oder die statische Methode [`URL.parse()`](/de/docs/Web/API/URL/parse_static) der [URL API](/de/docs/Web/API/URL_API) können verwendet werden, um einen relativen Verweis und eine Basis-URL zu einer absoluten URL aufzulösen.

Beide Methoden nehmen bis zu zwei Zeichenketten-Argumente entgegen und geben ein [`URL()`](/de/docs/Web/API/URL)-Objekt zurück, das eine absolute URL darstellt.
Das erste Argument stellt entweder eine absolute URL oder einen relativen Verweis auf eine URL dar, während das zweite eine Basis-URL ist, die verwendet wird, um den relativen Verweis aufzulösen, wenn einer im ersten Argument angegeben ist.
Die Methoden lösen den relativen Verweis auf gleiche Weise auf, außer dass der `URL()`-Konstruktor eine Ausnahme auslöst, wenn ungültige URLs übergeben werden, während `parse()` `null` zurückgibt.

Der folgende Code zeigt, wie die Methoden mit denselben `url`- und `base`-URL-Werten verwendet werden.

```js
const url = "articles";
const base = "https://developer.mozilla.org/some/path";
const constructorResult = new URL(url, base);
// => https://developer.mozilla.org/some/articles
const parseResult = URL.parse(url, base);
// => https://developer.mozilla.org/some/articles
```

Sie können aus dem Beispiel sehen, dass das Auflösen der `URL` aus einer angegebenen Basis-URL und einem relativen Verweis nicht einfach eine Verknüpfung der angegebenen Parameter ist.

In diesem Fall wird ein relativer Pfad zum aktuellen Verzeichnis übergeben (`articles`).
Das aktuelle Verzeichnis der `base`-URL ist die URL-Zeichenkette bis zum letzten Schrägstrich.
Hier hat `https://developer.mozilla.org/some/path` keinen abschließenden Schrägstrich, sodass das aktuelle Verzeichnis `https://developer.mozilla.org/some/` ist und folglich zu einer endgültigen URL von `https://developer.mozilla.org/some/articles` aufgelöst wird.

Relative Verweise werden gegen die Basis-URL unter Verwendung eines Pfadverweises aufgelöst, der relativ zu folgendem ist: dem aktuellen Verzeichnis (`./`), dem übergeordneten Verzeichnis des aktuellen Verzeichnisses (`../`) oder dem Stammverzeichnis der Website (`/`).
Die folgenden Abschnitte zeigen, wie die Auflösung für jede Art von relativem Pfad funktioniert.

## Aktuelles Verzeichnis relativ

Ein relativer Verweis, der mit `./` oder ohne Präfix versehen ist, wie `./article`, `article` oder `./article/`, ist relativ zum aktuellen Verzeichnis der URL, die durch das `base`-Argument repräsentiert wird.

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

Das aktuelle Verzeichnis der `base`-URL ist die URL-Zeichenkette bis zum letzten Schrägstrich, das ist `https://test.example.org/api/` für beide `base`-Zeichenketten im folgenden Codeblock.
Der aktuelle Verzeichnis-Verweis `article` wird daran angehängt und löst sich zu `https://test.example.org/api/article` auf.

```js
log(new URL("./article", "https://test.example.org/api/").href);
// => https://test.example.org/api/article
log(new URL("article", "https://test.example.org/api/v1").href);
// => https://test.example.org/api/article
```

Ähnlich haben unten beide Basis-URL-Zeichenketten ein aktuelles Verzeichnis von `https://test.example.org/api/v2/`.
Wir hängen `story/` und `story` daran an, um die endgültige URL aufzulösen.

```js
log(new URL("./story/", "https://test.example.org/api/v2/").href);
// => https://test.example.org/api/v2/story/
log(new URL("./story", "https://test.example.org/api/v2/v3").href);
// => https://test.example.org/api/v2/story
```

{{EmbedLiveSample('Current directory relative', '100%', '140px')}}

## Übergeordnetes Verzeichnis relativ

Ein relativer Verweis, der mit `../` versehen ist, wie `../path`, ist relativ zum übergeordneten Verzeichnis des aktuellen Verzeichnisses der URL, die durch das `base`-Argument repräsentiert wird.
Jedes Vorkommen von `../` entfernt einen Ordner aus dem aktuellen Verzeichnis, und dann wird jeder Text nach `../` an den verbleibenden Basis-Pfad angehängt.
Sie können durch die Elternverzeichnisse navigieren, indem Sie `../` mehrfach angeben, aber nur bis zur Ebene des Site-Roots.

Zum Beispiel ergibt sich aus einer Basis-URL von `https://test.example.com/test/api/v1/` und einer relativ zum übergeordneten Verzeichnis stehenden URL von `../some/path`, dass das aktuelle Verzeichnis `https://test.example.com/test/api/v1/` ist, das übergeordnete Verzeichnis `https://test.example.com/test/api/` und die aufgelöste absolute URL ist `https://test.example.com/test/api/some/path`.

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

Die folgenden Beispiele veranschaulichen dies ausführlicher.
In allen Fällen ist das aktuelle Verzeichnis `https://test.example.org/api/v1/v2/` (im zweiten Fall folgt `v3` dem letzten Schrägstrich), wobei sich jeder relative Verweis zu einem anderen übergeordneten Verzeichnis auflöst.

```js
log(new URL("../path", "https://test.example.org/api/v1/v2/").href);
// => https://test.example.org/api/v1/path
log(new URL("../../path", "https://test.example.org/api/v1/v2/v3").href);
// => https://test.example.org/api/path
log(new URL("../../../../path", "https://test.example.org/api/v1/v2/").href);
// => https://test.example.org/path
```

{{EmbedLiveSample('Parent-directory relative', '100%')}}

## Root relativ

Ein relativer Verweis mit Präfix `/`, wie `/path`, ist relativ zum Site-Root der URL, die im `base`-Argument angegeben ist.
Zum Beispiel wird bei einer Basis-URL von `https://test.example.com/api/v1` die aufgelöste URL für die relativ zum Stammverzeichnis stehende URL `/some/path` zu `https://test.example.com/some/path`.

> [!NOTE]
> Der Pfadteil der `base`-URL ist bei der Auflösung von relativen URLs zum Stammverzeichnis nicht relevant.

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

Im Folgenden finden Sie einige weitere Beispiele.

```js
log(new URL("/some/path", "https://test.example.org/api/").href);
// => https://test.example.org/some/path
log(new URL("/", "https://test.example.org/api/v1/").href);
// => https://test.example.org/
log(new URL("/article", "https://example.com/api/v1/").href);
// => https://example.com/article
```

{{EmbedLiveSample('Root relative', '100%')}}

## Siehe auch

- [RFC 3986 - Relative Resolution](https://datatracker.ietf.org/doc/html/rfc3986.html#section-5.2), die Spezifikation zur Auflösung von Basis- und relativen URLs
