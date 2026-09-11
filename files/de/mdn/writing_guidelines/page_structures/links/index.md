---
title: Link-Makros
slug: MDN/Writing_guidelines/Page_structures/Links
l10n:
  sourceCommit: abc914f085fb9913c41c4cd4453da432e9d4e761
---

MDN stellt zahlreiche Makros bereit, um stets aktuelle Links zu MDN-Inhalten zu erstellen. In diesem Leitfaden erfahren Sie mehr über MDN-Querverweis-Makros, mit denen Sie einen einzelnen Link zu einer anderen Seite oder eine Liste von Links zu allen Unterseiten eines Dokuments einfügen können.

## Linklisten

MDN stellt Makros bereit, die eine Liste von Links erstellen:

- [`\{{SubpagesWithSummaries}}`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/subpages_with_summaries.rs)
  - : Fügt eine Definitionsliste ({{HTMLElement("dl")}}) der Unterseiten der aktuellen Seite ein, wobei der Titel jeder Seite als {{HTMLElement("dt")}}-Begriff und ihr erster Absatz als {{HTMLElement("dd")}}-Begriff verwendet wird.

- [`\{{ListSubpagesForSidebar()}}`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/list_subpages_for_sidebar.rs)
  - : Wenn es ohne Parameter eingefügt wird, fügt es eine geordnete Liste von Links zu den Unterseiten der aktuellen Seite ein. Der erste Parameter ist ein Slug der übergeordneten Seite des Linkbaums. Der Linktext wird als Code angezeigt. Wenn der zweite Parameter auf `true` oder `1` gesetzt wird, werden die Links in einfachen Text umgewandelt. Wenn der dritte Parameter auf `true` oder `1` gesetzt wird, wird oben in der Liste ein Link zur Slug-Seite (übergeordneten Seite) mit „Overview“ als Linktext hinzugefügt.

- [`\{{QuickLinksWithSubpages()}}`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/quick_links_with_subpages.rs)
  - : Erstellt eine Reihe von Schnelllinks, die die untergeordneten Seiten der aktuellen Seite (oder der angegebenen Seite) als Ziele verwenden. Dadurch werden hierarchische Listen mit einer Tiefe von bis zu zwei Ebenen erstellt. Die Titel der Seiten werden als Linktext und ihre Zusammenfassungen als Tooltips verwendet.

Um beispielsweise eine geordnete Liste von Links einzufügen, die diese Seite und ihre Geschwisterseiten enthält, schreiben Sie Folgendes:

```md
\{{ListSubpagesForSidebar("/en-US/docs/MDN/Writing_guidelines/Page_structures/Macros", 1)}}
```

## Querverweis-Links

Einige Makros erstellen einen einzelnen Link, um auf ein CSS-, JavaScript-, SVG- oder HTML-Feature zu verweisen, einschließlich Attribute, Elemente, Eigenschaften, Datentypen und APIs. Die Makros, die einzelne Links erstellen, erfordern mindestens einen Parameter: das referenzierte Feature.

Diese Makros sind:

- [`\{{CSSxRef("")}}`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/links/cssxref.rs)
- [`\{{DOMxRef("")}}`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/links/domxref.rs)
- [`\{{HTMLElement("")}}`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/links/htmlxref.rs)
- [`\{{glossary("")}}`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/glossary.rs)
- [`\{{JSxRef("")}}`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/links/jsxref.rs)
- [`\{{SVGAttr("")}}`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/links/svgattr.rs)
- [`\{{SVGElement("")}}`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/links/svgxref.rs)
- [`\{{HTTPMethod("")}}`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/links/http.rs)
- [`\{{HTTPStatus("")}}`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/links/http.rs)

### Grundlegende Verwendung

Für den ersten erforderlichen Parameter leiten Sie den Namen des Features aus dem letzten Abschnitt des Slugs des Dokuments ab, auf das Sie verlinken möchten.
Um beispielsweise auf die Seite des `<select>`-Elements mit dem Slug `Web/HTML/Reference/Elements/select` zu verlinken, schreiben Sie das Makro als `\{{HTMLElement("select")}}`.
Dadurch wird der Link „{{HTMLElement("select")}}“ erzeugt, der sowohl als Code formatiert ist als auch die spitzen Klammern enthält.
Das liegt daran, dass Makros dem Linktext zusätzliches Feature-spezifisches Formatieren hinzufügen.
Bei der Verwendung eines Makros müssen Sie sich daher nie um mehr als den Namen des Features selbst kümmern.
Deshalb ist das Hinzufügen von Links mithilfe von Makros schnell und einfach.

### Anzeigetext anpassen

Standardmäßig ist der Anzeigetext des Links der erste Parameter, der an das Makro übergeben wird. Um einen anderen Text anzuzeigen, verwenden Sie den zweiten Parameter. Beispielsweise erzeugt `\{{JSxRef("Array")}}` {{JSxRef("Array")}}. Um eine Variante dieses Textes anzuzeigen, verwenden Sie `\{{JSxRef("Array", "JavaScript arrays")}}`, wodurch {{JSxRef("Array", "JavaScript arrays")}} erzeugt wird. Sie werden feststellen, dass der resultierende Link aufgrund des Standardverhaltens des Makros als Code formatiert ist. Im Abschnitt [Codeformatierung deaktivieren](#codeformatierung_deaktivieren) erfahren Sie, wie Sie die Codeformatierung überspringen können.

### Verlinken auf verschachtelte Seiten

Einige Referenz-Features haben verschachtelte Seiten für verwandte Features. Beispielsweise hat das HTML-Element `<input>` mehrere verschachtelte Seiten für verschiedene Eingabetypen, etwa `Web/HTML/Reference/Elements/input/range` für den Eingabetyp range.

Wenn Sie die Pfadinformationen im ersten Parameter an das Makro übergeben, wie in `\{{HTMLElement("input/range")}}`, wird der Link als „{{HTMLElement("input/range")}}“ erzeugt, was nicht erwünscht ist. Verwenden Sie den zweiten Parameter, um einen anderen Linktext anzuzeigen. Für einen Link zum Eingabetyp range würden wir das Makro daher als `\{{HTMLElement("input/range", "<code>&lt;input type=&quot;range&quot;&gt;</code>")}}` schreiben, um „{{HTMLElement("input/range", "<code>&lt;input type=&quot;range&quot;&gt;</code>")}}“ zu erzeugen. (Beachten Sie, dass dieses Makro die Codeformatierung entfernt, wenn der zweite Parameter ein Leerzeichen enthält, etwa zwischen `input` und `type`; deshalb haben wir die Tags {{HTMLElement("code")}} explizit hinzugefügt.)

### Verwendung von `CSSxRef` mit der CSS-Referenz

Jedes Makro unterscheidet sich geringfügig.

Das Makro `CSSxRef` ermittelt automatisch den korrekten Pfad anhand des Feature-Namens, den Sie als ersten Parameter an das Makro übergeben. Das Makro erkennt, ob ein Feature eine Eigenschaft, ein Selektor, eine At-Regel, eine Funktion oder ein Datentyp ist, und verlinkt auf das entsprechende Dokument unter `Web/CSS/Reference/`.

Beispiele:

- `\{{CSSxRef("cursor")}}` verlinkt auf die Eigenschaftsseite unter `Web/CSS/Reference/Properties/cursor`.
- `\{{CSSxRef(":hover")}}` verlinkt auf die Pseudoklassenseite unter `Web/CSS/Reference/Selectors/:hover`.
- `\{{CSSxRef("@media")}}` verlinkt auf die At-Regelseite unter `Web/CSS/Reference/At-rules/@media`.
- `\{{CSSxRef("pow")}}` verlinkt auf die Funktionsseite unter `Web/CSS/Reference/Values/pow`.
- `\{{CSSxRef("<color>")}}` verlinkt auf die Datentypseite unter `Web/CSS/Reference/Values/color_value`.

Genau wie das Makro `HTMLElement` fügt das Makro `CSSxRef` dem Linktext je nach Typ des Features die entsprechende Formatierung hinzu. Daher fügt `\{{CSSxRef("acos")}}` dem resultierenden Linktext spitze Klammern hinzu, wie in {{CSSxRef("acos")}}.

Einige weitere erwähnenswerte Verhaltensweisen des Makros `CSSxRef` sind:

- Verschachtelte Seiten werden automatisch verarbeitet. Beispiel:
  - `\{{CSSxRef("basic-shape/circle")}}` verlinkt auf das Dokument unter `Web/CSS/Reference/Values/basic-shape/circle` mit dem Link {{CSSxRef("basic-shape/circle")}}.
  - `\{{CSSxRef("animation-timeline/scroll")}}` verlinkt auf das Dokument unter `Web/CSS/Reference/Properties/animation-timeline/scroll` mit dem Link {{CSSxRef("animation-timeline/scroll")}}.
- Einige CSS-Features haben denselben Namen. Zusätzlich zu ihrer Verzeichnisposition enthalten ihre Slugs Suffixe, die ihren Typ widerspiegeln. Beispielsweise hat die Eigenschaft `position` den Slug `Web/CSS/Reference/Properties/position`, während der Datentyp `<position>` den Slug `Web/CSS/Reference/Values/position_value` hat.

  Das Makro `CSSxRef` verarbeitet diese gleichnamigen Features automatisch. So verlinkt `\{{CSSxRef("position")}}` auf die Eigenschaftsseite mit dem Link {{CSSxRef("position")}}, und `\{{CSSxRef("<position>")}}` verlinkt auf die Datentypseite mit dem Link {{CSSxRef("&lt;position&gt;")}}.

  Weitere Features mit gemeinsamen Namen sind:
  - Eigenschaft `color` (`Web/CSS/Reference/Properties/color`) gegenüber Datentyp `<color>` (`Web/CSS/Reference/Values/color_value`)

    **Makro**: `\{{CSSxRef("color")}}` gegenüber `\{{CSSxRef("<color>")}}`

  - Funktion `fit-content()` (`Web/CSS/Reference/Values/fit-content_function`) gegenüber Schlüsselwort `fit-content` (`Web/CSS/Reference/Values/fit-content`)

    **Makro**: `\{{CSSxRef("fit-content()")}}` gegenüber `\{{CSSxRef("fit-content")}}`

  - Eigenschaft `flex` (`Web/CSS/Reference/Properties/flex`) gegenüber Datentyp `<flex>` (`Web/CSS/Reference/Values/flex_value`)

    **Makro**: `\{{CSSxRef("flex")}}` gegenüber `\{{CSSxRef("<flex>")}}`

  - Pseudoklasse `:host` (`Web/CSS/Reference/Selectors/:host`) gegenüber Pseudoklassenfunktion `:host()` (`Web/CSS/Reference/Values/:host_function`)

    **Makro**: `\{{CSSxRef(":host")}}` gegenüber `\{{CSSxRef(":host()")}}`

  - Eigenschaft `overflow` (`Web/CSS/Reference/Properties/overflow`) gegenüber Datentyp `<overflow>` (`Web/CSS/Reference/Values/overflow_value`)

    **Makro**: `\{{CSSxRef("overflow")}}` gegenüber `\{{CSSxRef("<overflow>")}}`

  - Funktion `url()` (`Web/CSS/Reference/Values/url_function`) gegenüber Datentyp `<url>` (`Web/CSS/Reference/Values/url_value`)

    **Makro**: `\{{CSSxRef("url()")}}` gegenüber `\{{CSSxRef("<url>")}}`

### Codeformatierung deaktivieren

Die Querverweis-Makros wenden standardmäßig eine Codeformatierung auf den Linktext an.
Um die von den Makros angewendete HTML-Code-Semantik und CSS-Codeformatierung zu vermeiden, verwenden Sie den Parameter `"nocode"`.

Beispielsweise erstellt `\{{CSSxRef("background-color")}}` den Link „{{CSSxRef("background-color")}}“ mit Codeformatierung, während `\{{domxref("CSS.supports_static", "check support", "", "nocode")}}` den einfachen Textlink „[check support](/de/docs/Web/API/CSS/supports_static)“ erstellt. Um den JavaScript-Array-Link ohne Codeformatierung zu erstellen, würden wir entsprechend `\{{JSxRef("Array", "JavaScript arrays", "", "nocode")}}` schreiben, um „{{JSxRef("Array", "JavaScript arrays", "", "nocode")}}“ zu erzeugen.

## Siehe auch

- [Makros verwenden](/de/docs/MDN/Writing_guidelines/Page_structures/Macros)
- [Häufig verwendete Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros), einschließlich BCD-Makros (`\{{Compat}}`) und Spezifikationsmakros (`\{{Specifications}}`).
- [Leitfaden zu Bannern und Hinweisen](/de/docs/MDN/Writing_guidelines/Page_structures/Banners_and_notices), einschließlich der Makros `\{{SeeCompatTable}}` und `\{{SecureContext_Header}}`.
