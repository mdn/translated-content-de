---
title: Link-Makros
slug: MDN/Writing_guidelines/Page_structures/Links
l10n:
  sourceCommit: c37d4a5c0a0e464242d54ee7378d8adb2c9c5a4f
---

MDN bietet zahlreiche Makros, mit denen Sie Links zu MDN-Inhalten erstellen können, die immer auf dem neuesten Stand sind. In diesem Leitfaden lernen Sie MDN-Makros für Querverweise kennen. Damit können Sie einen einzelnen Link zu einer anderen Seite oder eine Liste mit Links zu allen Unterseiten eines Dokuments einfügen.

## Linklisten

MDN bietet Makros, die Linklisten erstellen:

- [`\{{SubpagesWithSummaries}}`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/subpages_with_summaries.rs)
  - : Fügt eine Definitionsliste ({{HTMLElement("dl")}}) der Unterseiten der aktuellen Seite ein. Der Titel jeder Seite wird als {{HTMLElement("dt")}}-Term und ihr erster Absatz als {{HTMLElement("dd")}}-Beschreibung verwendet.

- [`\{{ListSubpagesForSidebar()}}`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/list_subpages_for_sidebar.rs)
  - : Ohne Parameter fügt das Makro eine nummerierte Liste mit Links zu den Unterseiten der aktuellen Seite ein. Der erste Parameter ist ein Slug der übergeordneten Seite des Linkbaums. Der Linktext wird als Code dargestellt. Wenn Sie den zweiten Parameter auf `true` oder `1` setzen, werden die Links als einfacher Text dargestellt. Wenn Sie den dritten Parameter auf `true` oder `1` setzen, wird am Anfang der Liste ein Link zur übergeordneten Seite hinzugefügt, dessen Linktext „Overview“ lautet.

- [`\{{QuickLinksWithSubpages()}}`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/quick_links_with_subpages.rs)
  - : Erstellt eine Reihe von Schnelllinks zu den Unterseiten der aktuellen oder einer angegebenen Seite. Dabei entstehen hierarchische Listen mit bis zu zwei Ebenen. Die Seitentitel dienen als Linktext und die Zusammenfassungen als Tooltips.

Um beispielsweise eine nummerierte Linkliste einzufügen, die diese Seite und ihre Geschwisterseiten enthält, schreiben Sie Folgendes:

```md
\{{ListSubpagesForSidebar("/en-US/docs/MDN/Writing_guidelines/Page_structures/Macros", 1)}}
```

## Querverweise

Einige Makros erstellen einen einzelnen Querverweis auf ein CSS-, JavaScript-, SVG- oder HTML-Feature, darunter Attribute, Elemente, Eigenschaften, Datentypen und APIs. Makros für einzelne Links benötigen mindestens einen Parameter: das Feature, auf das verwiesen wird.

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

Den Feature-Namen für den ersten, erforderlichen Parameter leiten Sie aus dem letzten Abschnitt des Slugs des Dokuments ab, auf das Sie verlinken möchten.
Um beispielsweise auf die Seite des Elements `<select>` mit dem Slug `Web/HTML/Reference/Elements/select` zu verlinken, schreiben Sie das Makro als `\{{HTMLElement("select")}}`.
Dadurch entsteht der Link „{{HTMLElement("select")}}“, der als Code formatiert ist und die spitzen Klammern enthält.
Das liegt daran, dass Makros den Linktext zusätzlich passend zum jeweiligen Feature formatieren.
Wenn Sie ein Makro verwenden, müssen Sie sich daher nur um den Feature-Namen kümmern.
Deshalb lassen sich Links mit Makros schnell und einfach hinzufügen.

### Anzeigetext anpassen

Standardmäßig entspricht der Anzeigetext des Links dem ersten Parameter des Makros. Um einen anderen Text anzuzeigen, verwenden Sie den zweiten Parameter. Beispielsweise erzeugt `\{{JSxRef("Array")}}` den Link {{JSxRef("Array")}}. Für einen abweichenden Text verwenden Sie `\{{JSxRef("Array", "JavaScript arrays")}}`; daraus entsteht {{JSxRef("Array", "JavaScript arrays")}}. Der resultierende Link ist aufgrund des Standardverhaltens des Makros als Code formatiert. Im Abschnitt [Codeformatierung deaktivieren](#codeformatierung_deaktivieren) erfahren Sie, wie Sie diese Formatierung weglassen.

### Auf verschachtelte Seiten verlinken

Für einige Referenz-Features gibt es verschachtelte Seiten zu verwandten Features. Beispielsweise hat das HTML-Element `<input>` mehrere Unterseiten für verschiedene Eingabetypen, etwa `Web/HTML/Reference/Elements/input/range` für den Eingabetyp `range`.

Wenn Sie die Pfadangabe als ersten Parameter an das Makro übergeben, wie in `\{{HTMLElement("input/range")}}`, entsteht der Link „{{HTMLElement("input/range")}}“ – und nicht der gewünschte Linktext. Verwenden Sie den zweiten Parameter, um einen anderen Linktext anzuzeigen. Für einen Link zum Eingabetyp `range` schreiben Sie das Makro daher als `\{{HTMLElement("input/range", "<code>&lt;input type=&quot;range&quot;&gt;</code>")}}`. So entsteht „{{HTMLElement("input/range", "<code>&lt;input type=&quot;range&quot;&gt;</code>")}}“. (Beachten Sie: Wenn der zweite Parameter ein Leerzeichen enthält, wie hier zwischen `input` und `type`, entfernt dieses Makro die Codeformatierung. Deshalb wurden die {{HTMLElement("code")}}-Tags ausdrücklich hinzugefügt.)

### `CSSxRef` mit der CSS-Referenz verwenden

Die Makros unterscheiden sich in ihren Funktionen geringfügig.

Das Makro `CSSxRef` ermittelt anhand des Feature-Namens, den Sie als ersten Parameter übergeben, automatisch den richtigen Pfad. Es erkennt, ob es sich bei einem Feature um eine Eigenschaft, einen Selektor, eine At-Regel, eine Funktion oder einen Datentyp handelt, und verlinkt auf das entsprechende Dokument unter `Web/CSS/Reference/`.

Zum Beispiel:

- `\{{CSSxRef("cursor")}}` verlinkt auf die Seite der Eigenschaft unter `Web/CSS/Reference/Properties/cursor`.
- `\{{CSSxRef(":hover")}}` verlinkt auf die Seite der Pseudoklasse unter `Web/CSS/Reference/Selectors/:hover`.
- `\{{CSSxRef("@media")}}` verlinkt auf die Seite der At-Regel unter `Web/CSS/Reference/At-rules/@media`.
- `\{{CSSxRef("pow")}}` verlinkt auf die Seite der Funktion unter `Web/CSS/Reference/Values/pow`.
- `\{{CSSxRef("<color>")}}` verlinkt auf die Seite des Datentyps unter `Web/CSS/Reference/Values/color_value`.

Wie das Makro `HTMLElement` formatiert auch `CSSxRef` den Linktext passend zum Feature-Typ. Beispielsweise fügt `\{{CSSxRef("acos")}}` dem resultierenden Linktext Klammern hinzu, wie in {{CSSxRef("acos")}}.

Weitere Verhaltensweisen des Makros `CSSxRef`, die Sie kennen sollten:

- Verschachtelte Seiten werden automatisch berücksichtigt. Zum Beispiel:
  - `\{{CSSxRef("basic-shape/circle")}}` verlinkt mit {{CSSxRef("basic-shape/circle")}} auf das Dokument unter `Web/CSS/Reference/Values/basic-shape/circle`.
  - `\{{CSSxRef("animation-timeline/scroll")}}` verlinkt mit {{CSSxRef("animation-timeline/scroll")}} auf das Dokument unter `Web/CSS/Reference/Properties/animation-timeline/scroll`.
- Einige CSS-Features haben denselben Namen. Neben ihrem Verzeichnis unterscheiden sie sich durch Suffixe in ihren Slugs, die ihren Typ kennzeichnen. Beispielsweise hat die Eigenschaft `position` den Slug `Web/CSS/Reference/Properties/position`, während der Datentyp `<position>` den Slug `Web/CSS/Reference/Values/position_value` hat.

  Das Makro `CSSxRef` berücksichtigt gleichnamige Features automatisch. So verlinkt `\{{CSSxRef("position")}}` mit {{CSSxRef("position")}} auf die Seite der Eigenschaft und `\{{CSSxRef("<position>")}}` mit {{CSSxRef("&lt;position&gt;")}} auf die Seite des Datentyps.

  Weitere gleichnamige Features sind:
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

Die Makros für Querverweise formatieren den Linktext standardmäßig als Code.
Um die von den Makros angewendete HTML-Codesemantik und CSS-Codeformatierung zu vermeiden, verwenden Sie den Parameter `"nocode"`.

Beispielsweise erstellt `\{{CSSxRef("background-color")}}` den als Code formatierten Link „{{CSSxRef("background-color")}}“, während `\{{domxref("CSS.supports_static", "check support", "", "nocode")}}` den einfachen Textlink „[check support](/de/docs/Web/API/CSS/supports_static)“ erstellt. Um ebenso einen Link zu JavaScript-Arrays ohne Codeformatierung zu erstellen, schreiben Sie `\{{JSxRef("Array", "JavaScript arrays", "", "nocode")}}`. Daraus entsteht „{{JSxRef("Array", "JavaScript arrays", "", "nocode")}}“.

## Siehe auch

- [Makros verwenden](/de/docs/MDN/Writing_guidelines/Page_structures/Macros)
- [Häufig verwendete Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros), einschließlich BCD-Makros (`\{{Compat}}`) und Spezifikationsmakros (`\{{Specifications}}`).
- [Leitfaden für Banner und Hinweise](/de/docs/MDN/Writing_guidelines/Page_structures/Banners_and_notices), einschließlich der Makros `\{{SeeCompatTable}}` und `\{{SecureContext_Header}}`.
