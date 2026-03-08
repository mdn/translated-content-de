---
title: <url>
slug: Web/CSS/Reference/Values/url_value
l10n:
  sourceCommit: 95f5082a5f9243fe901ce45ea454b07c76af639a
---

Der **`<url>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/Reference/Values/Data_types) ist ein Verweis auf eine Ressource.

## Syntax

```plain
<url> = url()
```

### Werte

Der Wert kann eine absolute oder relative URL sein.

- [`<url()>`](/de/docs/Web/CSS/Reference/Values/url_function)
  - : Die `url()`-Funktion akzeptiert eine URL, die entweder als Zeichenkette im Anführungszeichen oder als nicht zitierter URL-Token angegeben werden kann.

> [!NOTE]
> Das [CSS Werte und Einheiten Modul](/de/docs/Web/CSS/Guides/Values_and_units) führt auch die `src()` Funktion als einen `<url>`-Wert ein. Aktuell unterstützt jedoch kein Browser dieses Feature.

## Beschreibung

Der `<url>`-Datentyp, geschrieben mit der [`url()`](/de/docs/Web/CSS/Reference/Values/url_function) Funktion, repräsentiert eine `URL`, die ein Verweis auf eine interne oder externe Ressource ist. Die Ressource kann ein Bild, ein Video, eine CSS-Datei, eine Schriftartdatei, ein SVG-Feature usw. sein. Die URL kann absolut oder relativ sein.

```css
/* Relative URL */
url(styles.css)
url(assets/icon.svg)
url("../assets/image.png")

/* Absolute URL */
url(http://example.com/fonts/myFont.ttf)
url("https://example.com/images/background.jpg")

/* Data URL */
url("data:image/svg+xml,%3Csvg'%3E%3Cpath d='M10 10h60' stroke='%2300F' stroke-width='5'/%3E%3Cpath d='M10 20h60' stroke='%230F0' stroke-width='5'/%3E%3C/svg%3E")
 url("data:image/png;base64,iVBORw0KGgoAAA...")
```

### Externe Ressourcen und CORS

Die Fähigkeit, externe Ressourcen über den `<url>`-Wert zu importieren, ist implementierungsabhängig und oft aus Sicherheitsgründen eingeschränkt.

Je nach CSS-Eigenschaft, auf die eine `<url>` verweist, die externe Ressourcen nutzt, kann die Ressource Einschränkungen durch [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/Guides/CORS) unterliegen.

Einige CSS-Eigenschaften, einschließlich {{cssxref("mask-image")}}, {{cssxref("filter")}}, sowie {{cssxref("clip-path")}} und einige andere, wenn sie auf {{htmlelement("svg")}} Bild-Elemente verweisen, können eine erfolgreiche CORS-Validierung erfordern, wenn sie externe, Cross-Origin-Ressourcen im CORS-Modus abrufen. Wenn die CORS-Validierung fehlschlägt, kann die Ressource blockiert und daher nicht zur Darstellung verwendet werden.

Beachten Sie, dass der `<url>`-Wertetyp selbst keine CORS-Validierung erzwingt, aber einzelne CSS-Eigenschaften dies tun.

Wenn Sie eine HTML-Datei direkt mit `file://` öffnen, können Ressourcen fehlschlagen, da CORS-Regeln lokal angewendet werden. Moderne Browser behandeln `file://` als einzigartigen Ursprung, was bedeutet, dass Ressourcen zwischen Dateien blockiert werden können. In diesem Fall kann ein [HTTP-Server](/de/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server) eingerichtet werden, um CORS-Fehler zu vermeiden. Das Sicherheitsverhalten von `file://` URLs variiert auch je nach Browser und Dateiberechtigungen des Betriebssystems.

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
