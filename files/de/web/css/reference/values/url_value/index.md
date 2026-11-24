---
title: "`<url>`-CSS-Typ"
short-title: <url>
slug: Web/CSS/Reference/Values/url_value
l10n:
  sourceCommit: 37e65fd48969fe85f6a3be0ca203d97848019a35
---

Der **`<url>`**-[CSS](/de/docs/Web/CSS)-[Datentyp](/de/docs/Web/CSS/Reference/Values/Data_types) ist ein Verweis auf eine Ressource.

## Zugehörige Eigenschaften

Dieser Datentyp wird in den Wertdefinitionen der folgenden CSS-Eigenschaften akzeptiert:

- {{cssxref("backdrop-filter")}}
- {{cssxref("background")}}
- {{cssxref("background-image")}}
- {{cssxref("bookmark-label")}}
- {{cssxref("border-image")}}
- {{cssxref("border-image-source")}}
- {{cssxref("clip-path")}}
- {{cssxref("content")}}
- {{cssxref("cue")}}
- {{cssxref("cue-after")}}
- {{cssxref("cue-before")}}
- {{cssxref("cursor")}}
- {{cssxref("fill")}}
- {{cssxref("fill-image")}}
- {{cssxref("filter")}}
- {{cssxref("list-style")}}
- {{cssxref("list-style-image")}}
- {{cssxref("marker")}}
- {{cssxref("marker-end")}}
- {{cssxref("marker-mid")}}
- {{cssxref("marker-start")}}
- {{cssxref("mask")}}
- {{cssxref("mask-border")}}
- {{cssxref("mask-border-source")}}
- {{cssxref("mask-image")}}
- {{cssxref("offset")}}
- {{cssxref("offset-path")}}
- {{cssxref("shape-inside")}}
- {{cssxref("shape-outside")}}
- {{cssxref("stroke")}}
- {{cssxref("stroke-image")}}

## Syntax

```plain
<url> = url()
```

### Werte

Der Wert kann eine absolute oder relative URL oder ein Daten-{{Glossary("URI", "URI")}} sein.

- [`<url()>`](/de/docs/Web/CSS/Reference/Values/url_function)
  - : Die Funktion `url()` akzeptiert eine URL, die als Zeichenfolge in Anführungszeichen oder als URL-Token ohne Anführungszeichen geschrieben werden kann.

> [!NOTE]
> Das [CSS-Modul für Werte und Einheiten](/de/docs/Web/CSS/Guides/Values_and_units) führt auch die Funktion `src()` als `<url>`-Wert ein. Derzeit unterstützt kein Browser diese Funktion.

## Beschreibung

Der mit der Funktion [`url()`](/de/docs/Web/CSS/Reference/Values/url_function) geschriebene Datentyp `<url>` stellt eine `URL` dar. Sie verweist auf eine interne oder externe Ressource oder enthält eine Daten-URI-Darstellung der Ressource. Bei der Ressource kann es sich um ein Bild, ein Video, eine CSS-Datei, eine Schriftdatei, ein SVG-Element usw. handeln. URLs können absolut oder relativ sein.

```css
/* Relative URL */
url("styles.css")
url("assets/icon.svg")
url("../assets/image.png")

/* Absolute URL */
url("http://example.com/fonts/myFont.woff2")
url("https://example.com/images/background.jpg")

/* Data URI */
url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 10h60' stroke='%2300F' stroke-width='5'/%3E%3Cpath d='M10 20h60' stroke='%230F0' stroke-width='5'/%3E%3C/svg%3E")
url("data:image/png;base64,iVBORw0KGgoAAA...")
```

### Externe Ressourcen und CORS

Ob externe Ressourcen über den Wert `<url>` eingebunden werden können, hängt von der Implementierung ab und ist aus Sicherheitsgründen häufig eingeschränkt.

Je nachdem, auf welche CSS-Eigenschaft ein `<url>`-Wert angewendet wird, der auf eine externe Ressource verweist, kann die Ressource den Beschränkungen von [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/Guides/CORS) unterliegen.

Bei einigen CSS-Eigenschaften, darunter {{cssxref("mask-image")}}, {{cssxref("filter")}} und {{cssxref("clip-path")}}, sowie bei einigen weiteren Eigenschaften, die auf {{SVGElement("svg")}}-Bildelemente verweisen, kann eine erfolgreiche CORS-Validierung erforderlich sein, wenn dadurch externe Ressourcen anderer Ursprünge im CORS-Modus abgerufen werden. Schlägt die CORS-Validierung fehl, kann die Ressource blockiert und daher nicht zum Rendern verwendet werden.

Beachten Sie, dass der Werttyp `<url>` selbst keine CORS-Validierung erzwingt; dies tun einzelne CSS-Eigenschaften.

Wenn Sie eine HTML-Datei direkt über `file://` öffnen, können Ressourcen aufgrund lokal geltender CORS-Regeln möglicherweise nicht geladen werden. Moderne Browser behandeln `file://` als einen eindeutigen Ursprung. Dadurch können Ressourcen aus anderen Dateien blockiert werden. In diesem Fall können Sie einen [HTTP-Server](/de/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server) einrichten, um CORS-Fehler zu vermeiden. Das Sicherheitsverhalten von `file://`-URLs variiert außerdem je nach Browser und Dateiberechtigungen des Betriebssystems.

## Beispiele

### Daten-URI

Dieses Beispiel zeigt, wie Sie mithilfe eines Daten-URI ein SVG als Hintergrundbild einbinden.

#### HTML

Unser HTML enthält ein einzelnes {{htmlelement("p")}}-Element:

```html
<p>This has a background image</p>
```

#### CSS

Wir legen grundlegende Stile fest und fügen dann die Eigenschaft {{cssxref("background-image")}} hinzu. Ihr Wert ist eine `url()`-Funktion, die ein `data:`-URI enthält. Damit wird ein SVG als Hintergrundbild festgelegt.

```css
p {
  font: 2rem sans-serif;
  border: 1px dashed;

  background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%3E%3Cpath%20d%3D'M5%2C100L100%2C100%20L100%2C5L5%2C5z'%20fill%3D'pink'%2F%3E%3C%2Fsvg%3E");
}
```

Das SVG besteht aus dem maskierten Markup `<svg xmlns="http://www.w3.org/2000/svg"><path d="M5,100L100,100 L100,5L5,5z" fill="pink"/></svg>`. Beachten Sie, dass das Attribut `xmlns` erforderlich ist, wenn SVGs als Hintergrund- oder Rahmenbilder eingebunden werden.

#### Ergebnis

{{EmbedLiveSample("Data URI", "100%", "100")}}

## Spezifikationen

{{Specifications}}

## Siehe auch

- {{cssxref("url_function", "url()")}}
