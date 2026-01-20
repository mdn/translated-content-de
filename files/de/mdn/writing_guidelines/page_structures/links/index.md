---
title: Link-Makros
slug: MDN/Writing_guidelines/Page_structures/Links
l10n:
  sourceCommit: 078deef4b52f337f2ef69e037ee80d1feae0d96a
---

MDN bietet zahlreiche Makros, um stets aktuelle Links zu MDN-Inhalten zu erstellen. In diesem Leitfaden erfahren Sie mehr über die MDN-Cross-Reference-Makros, die Sie verwenden können, um einen einzelnen Link zu einer anderen Seite oder eine Liste von Links zu allen Unterseiten eines Dokuments hinzuzufügen.

## Listen von Links

MDN bietet Makros, die eine Liste von Links erstellen:

- [`\{{SubpagesWithSummaries}}`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/subpages_with_summaries.rs)
  - : Fügt eine Definitionsliste ({{HTMLElement("dl")}}) der Unterseiten der aktuellen Seite ein, wobei der Titel jeder Seite als {{HTMLElement("dt")}}-Begriff und der erste Absatz als {{HTMLElement("dd")}}-Begriff verwendet wird.

- [`\{{ListSubpagesForSidebar()}}`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/list_subpages_for_sidebar.rs)
  - : Wenn ohne Parameter einbezogen, fügt es eine geordnete Liste von Links zu den Unterseiten der aktuellen Seite ein. Der erste Parameter ist ein Slug der übergeordneten Seite des Linkbaums. Der Linktext wird als Code angezeigt. Das Setzen eines zweiten Parameters auf `true` oder `1` konvertiert die Links zu einfachem Text. Das Setzen eines dritten Parameters auf `true` oder `1` fügt einen Link zur Slug- (übergeordneten) Seite am Anfang der Liste mit "Overview" als Linktext hinzu.

- [`\{{QuickLinksWithSubpages()}}`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/quick_links_with_subpages.rs)
  - : Erstellt eine Reihe von Schnelllinks, die die Kinder der aktuellen Seite (oder der angegebenen Seite) als Ziele verwenden. Dies erstellt hierarchische Listen bis zu zwei Ebenen tief. Die Titel der Seiten werden als Linktext verwendet und ihre Zusammenfassungen als Tooltips.

Zum Beispiel, um eine geordnete Liste von Links einzufügen, die diese Seite und ihre Geschwister umfasst, schreiben Sie Folgendes:

```md
\{{ListSubpagesForSidebar("/en-US/docs/MDN/Writing_guidelines/Page_structures/Macros", 1)}}
```

## Cross-Reference-Links

Einige Makros erstellen einen einzelnen Link, um ein CSS-, JavaScript-, SVG- oder HTML-Feature, einschließlich Attribute, Elemente, Eigenschaften, Datentypen und APIs zu referenzieren. Die Makros, die einzelne Links erstellen, benötigen mindestens einen Parameter: das referenzierte Feature.

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

### Grundlagen der Nutzung

Für den ersten erforderlichen Parameter leiten Sie den Funktionsnamen aus dem letzten Abschnitt des Slugs des Dokuments ab, auf das Sie verlinken möchten. Um beispielsweise auf die Seite des `<select>`-Elements mit dem Slug `Web/HTML/Reference/Elements/select` zu verlinken, schreiben Sie das Makro als `\{{HTMLElement("select")}}`. Dies erzeugt den Link "{{HTMLElement("select")}}", der sowohl als Code formatiert als auch die spitzen Klammern enthält. Dies liegt daran, dass Makros zusätzliche feature-spezifische Formatierungen zum Linktext hinzufügen. Sie müssen sich also nie um mehr als den Funktionsnamen selbst kümmern, wenn Sie ein Makro verwenden. Deshalb ist die Verwendung von Makros zum Hinzufügen von Links schnell und einfach.

### Anpassen des Anzeigetexts

Standardmäßig ist der Anzeigetext des Links der erste Parameter, der an das Makro übergeben wird. Um einen anderen Text anzuzeigen, verwenden Sie den zweiten Parameter. Zum Beispiel erzeugt `\{{JSxRef("Array")}}` {{JSxRef("Array")}}. Um eine Variante dieses Textes anzuzeigen, verwenden Sie `\{{JSxRef("Array", "JavaScript arrays")}}`, was {{JSxRef("Array", "JavaScript arrays")}} ergibt. Sie werden feststellen, dass der resultierende Link aufgrund des Standardverhaltens des Makros als Code formatiert ist. Schauen Sie sich den Abschnitt über das [Deaktivieren der Codeformatierung](#deaktivieren_der_codeformatierung) an, um zu sehen, wie Sie die Code-Styling überspringen können.

### Verlinkung zu verschachtelten Seiten

Einige Referenz-Features haben verschachtelte Seiten für verwandte Features. Zum Beispiel hat das HTML-Element `<input>` mehrere verschachtelte Seiten für verschiedene Eingabetypen, wie z.B. `Web/HTML/Reference/Elements/input/range` für den Eingabetyp "range".

Das Übergeben der Pfadinformationen an das Makro im ersten Parameter, wie in `\{{HTMLElement("input/range")}}`, erzeugt den Link als "{{HTMLElement("input/range")}}", was nicht gewünscht ist. Verwenden Sie den zweiten Parameter, um einen anderen Linktext anzuzeigen. Für einen Link zum Eingabetyp "range" würden wir das Makro als `\{{HTMLElement("input/range", "<code>&lt;input type=&quot;range&quot;&gt;<code>")}}` schreiben, um "{{HTMLElement("input/range", "<code>&lt;input type=&quot;range&quot;&gt;</code>")}}" zu erzeugen. (Beachten Sie, dass, wenn der zweite Parameter ein Leerzeichen enthält, wie das zwischen `input` und `type` hier, dieses Makro das Codeformat entfernt; daher haben wir die {{HTMLElement("code")}}-Tags explizit hinzugefügt.)

### Verwendung von `CSSxRef` mit der CSS-Referenz

Jedes Makro ist leicht unterschiedlich.

Das `CSSxRef`-Makro bestimmt automatisch den richtigen Pfad anhand des von Ihnen als ersten Parameter angegebenen Funktionsnamens. Das Makro erkennt, ob ein Feature eine Eigenschaft, ein Selektor, eine At-Regel, eine Funktion oder ein Datentyp ist und verlinkt auf das entsprechende Dokument unter `Web/CSS/Reference/`.

Zum Beispiel:

- `\{{CSSxRef("cursor")}}` verlinkt auf die Eigenschaftsseite unter `Web/CSS/Reference/Properties/cursor`.
- `\{{CSSxRef(":hover")}}` verlinkt auf die Pseudoklassenseite unter `Web/CSS/Reference/Selectors/:hover`.
- `\{{CSSxRef("@media")}}` verlinkt auf die Atregel-Seite unter `Web/CSS/Reference/At-rules/@media`.
- `\{{CSSxRef("pow")}}` verlinkt auf die Funktionsseite unter `Web/CSS/Reference/Values/pow`.
- `\{{CSSxRef("<color>")}}` verlinkt auf die Datentypseite unter `Web/CSS/Reference/Values/color_value`.

Genau wie das `HTMLElement`-Makro fügt das `CSSxRef`-Makro eine geeignete Formatierung zum Linktext basierend auf dem Typ des Features hinzu. Also fügt `\{{CSSxRef("acos")}}` spitze Klammern zum resultierenden Linktext hinzu, wie in {{CSSxRef("acos")}}.

Einige andere Verhaltensweisen des `CSSxRef`-Makros, die es zu beachten gilt:

- Verschachtelte Seiten werden automatisch behandelt. Zum Beispiel:
  - `\{{CSSxRef("basic-shape/circle")}}` verlinkt auf das Dokument unter `Web/CSS/Reference/Values/basic-shape/circle` mit dem Link {{CSSxRef("basic-shape/circle")}}.
  - `\{{CSSxRef("animation-timeline/scroll")}}` verlinkt auf das Dokument unter `Web/CSS/Reference/Properties/animation-timeline/scroll` mit dem Link {{CSSxRef("animation-timeline/scroll")}}.
- Einige CSS-Features haben denselben Namen. Zusätzlich zu ihrem Verzeichnispfad enthalten ihre Slugs Suffixe, um ihren Typ widerzuspiegeln. Beispielsweise hat die Eigenschaft `position` den Slug `Web/CSS/Reference/Properties/position`, während der `<position>`-Datentyp den Slug `Web/CSS/Reference/Values/position_value` hat.

  Das `CSSxRef`-Makro behandelt diese gleichnamigen Features automatisch. Also verlinkt `\{{CSSxRef("position")}}` auf die Eigenschaftsseite mit dem Link {{CSSxRef("position")}}, und `\{{CSSxRef("<position>")}}` verlinkt auf die Datentypseite mit dem Link {{CSSxRef("&lt;position&gt;")}}.

  Andere Features mit gemeinsamen Namen umfassen:
  - `color`-Eigenschaft (`Web/CSS/Reference/Properties/color`) vs. `<color>`-Datentyp (`Web/CSS/Reference/Values/color_value`)

    **Makro**: `\{{CSSxRef("color")}}` vs. `\{{CSSxRef("<color>")}}`

  - `fit-content()`-Funktion (`Web/CSS/Reference/Values/fit-content_function`) vs. `fit-content`-Schlüsselwort (`Web/CSS/Reference/Values/fit-content`)

    **Makro**: `\{{CSSxRef("fit-content_function", "fit-content()")}}` vs. `\{{CSSxRef("fit-content")}}` (dies ist derzeit eine Ausnahme, bei der Sie den zweiten Parameter angeben müssen, um den richtigen Linktext für die Funktion zu erhalten.)

  - `flex`-Eigenschaft (`Web/CSS/Reference/Properties/flex`) vs. `<flex>`-Datentyp (`Web/CSS/Reference/Values/flex_value`)

    **Makro**: `\{{CSSxRef("flex")}}` vs. `\{{CSSxRef("<flex>")}}`

  - `:host`-Pseudoklasse (`Web/CSS/Reference/Selectors/:host`) vs. `:host()`-Pseudoklassen-Funktion (`Web/CSS/Reference/Values/:host_function`)

    **Makro**: `\{{CSSxRef(":host")}}` vs. `\{{CSSxRef(":host()")}}`

  - `overflow`-Eigenschaft (`Web/CSS/Reference/Properties/overflow`) vs. `<overflow>`-Datentyp (`Web/CSS/Reference/Values/overflow_value`)

    **Makro**: `\{{CSSxRef("overflow")}}` vs. `\{{CSSxRef("<overflow>")}}`

  - `url()`-Funktion (`Web/CSS/Reference/Values/url_function`) vs. `<url>`-Datentyp (`Web/CSS/Reference/Values/url_value`)

    **Makro**: `\{{CSSxRef("url()")}}` vs. `\{{CSSxRef("<url>")}}`

### Deaktivieren der Codeformatierung

Die Cross-Reference-Makros wenden standardmäßig eine Codeformatierung auf den Linktext an. Um die HTML-Code-Semantik und das CSS-Code-Styling, das durch die Makros angewendet wird, zu vermeiden, verwenden Sie den `"nocode"`-Parameter.

Zum Beispiel erstellt `\{{CSSxRef("background-color")}}` den Link "{{CSSxRef("background-color")}}" mit Code-Styling, während `\{{domxref("CSS.supports_static", "check support", "", "nocode")}}` den einfachen Textlink "[check support](/de/docs/Web/API/CSS/supports_static)" erstellt. In ähnlicher Weise würden wir schreiben `\{{JSxRef("Array", "JavaScript arrays", "", "nocode")}}`, um den JavaScript-Array-Link ohne Code-Formatierung zu erzeugen, was zu "{{JSxRef("Array", "JavaScript arrays", "", "nocode")}}" führt.

## Siehe auch

- [Verwendung von Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Macros)
- [Häufig verwendete Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros), einschließlich BCD-Makros (`\{{Compat}}`) und Spezifikations-Makros (`\{{Specifications}}`).
- [Banner und Hinweise Leitfaden](/de/docs/MDN/Writing_guidelines/Page_structures/Banners_and_notices) einschließlich der `\{{SeeCompatTable}}`, `\{{Deprecated_Header}}` und `\{{SecureContext_Header}}` Makros.
