---
title: CSS-Typ `<url>`
short-title: <url>
slug: Web/CSS/Reference/Values/url_value
l10n:
  sourceCommit: 91e08923c809ca8deded3e3294f49bbe1a4a00b3
---

Der CSS-[Datentyp](/de/docs/Web/CSS/Reference/Values/Data_types) **`<url>`** ist ein Verweis auf eine Ressource.

## Syntax

```plain
<url> = url()
```

### Werte

Der Wert kann eine absolute oder relative URL sein.

- [`<url()>`](/de/docs/Web/CSS/Reference/Values/url_function)
  - : Die Funktion `url()` akzeptiert eine URL, die als Zeichenkette in Anführungszeichen oder als nicht in Anführungszeichen gesetztes URL-Token geschrieben werden kann.

> [!NOTE]
> Das [Modul CSS values and units](/de/docs/Web/CSS/Guides/Values_and_units) führt außerdem die Funktion `src()` als `<url>`-Wert ein. Derzeit unterstützt kein Browser diese Funktion.

## Beschreibung

Der mit der Funktion [`url()`](/de/docs/Web/CSS/Reference/Values/url_function) geschriebene Datentyp `<url>` stellt eine `URL` dar, die ein Verweis auf eine interne oder externe Ressource ist. Die Ressource kann ein Bild, ein Video, eine CSS-Datei, eine Schriftdatei, eine SVG-Funktion usw. sein. Die URL kann absolut oder relativ sein.

```css
/* Relative URL */
url("styles.css")
url("assets/icon.svg")
url("../assets/image.png")

/* Absolute URL */
url("http://example.com/fonts/myFont.woff2")
url("https://example.com/images/background.jpg")

/* Data URL */
url("data:image/svg+xml,%3Csvg'%3E%3Cpath d='M10 10h60' stroke='%2300F' stroke-width='5'/%3E%3Cpath d='M10 20h60' stroke='%230F0' stroke-width='5'/%3E%3C/svg%3E")
url("data:image/png;base64,iVBORw0KGgoAAA...")
```

### Externe Ressourcen und CORS

Die Möglichkeit, externe Ressourcen über den Wert `<url>` zu importieren, ist implementierungsdefiniert und aus Sicherheitsgründen häufig eingeschränkt.

Abhängig von der CSS-Eigenschaft, auf die ein `<url>` angewendet wird, das auf externe Ressourcen verweist, kann die Ressource Einschränkungen durch [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/Guides/CORS) unterliegen.

Einige CSS-Eigenschaften, einschließlich {{cssxref("mask-image")}}, {{cssxref("filter")}} sowie {{cssxref("clip-path")}} und einige andere, wenn sie auf {{SVGElement("svg")}}-Bildelemente verweisen, können eine erfolgreiche CORS-Validierung erfordern, wenn sie dazu führen, dass externe, ursprungsübergreifende Ressourcen im CORS-Modus abgerufen werden. Wenn die CORS-Validierung fehlschlägt, kann die Ressource blockiert werden und daher nicht zum Rendern verwendet werden.

Beachten Sie, dass der Werttyp `<url>` selbst keine CORS-Validierung erzwingt, einzelne CSS-Eigenschaften jedoch schon.

Beim direkten Öffnen einer HTML-Datei mit `file://` können Ressourcen fehlschlagen, da CORS-Regeln lokal gelten. Moderne Browser behandeln `file://` als eindeutigen Ursprung, wodurch dateiübergreifende Ressourcen blockiert werden können. In diesem Fall kann ein [HTTP-Server](/de/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server) gehostet werden, um CORS-Fehler zu vermeiden. Das Sicherheitsverhalten von `file://`-URLs variiert außerdem je nach Browser und Dateiberechtigungen des Betriebssystems.

## Beispiele

Relative URL

```css
body {
  background-image: url("images/background.jpg");
}
```

Absolute URL

```css
body {
  background-image: url("https://example.com/images/background.jpg");
}
```

## Spezifikationen

{{Specifications}}

## Siehe auch

- {{cssxref("url_function", "url()")}}
