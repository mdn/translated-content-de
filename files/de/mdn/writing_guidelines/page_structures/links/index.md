---
title: Link-Makros
slug: MDN/Writing_guidelines/Page_structures/Links
l10n:
  sourceCommit: 94e900db86109d76e8a1e120e3b135db0d543c87
---

MDN bietet zahlreiche Makros, um stets aktuelle Links zu MDN-Inhalten zu erstellen. In diesem Leitfaden erfahren Sie mehr über MDN-Querverweis-Makros, die Sie verwenden können, um einen einzelnen Link zu einer anderen Seite oder eine Liste von Links zu allen Unterseiten eines Dokuments einzufügen.

## Listen von Links

MDN bietet Makros, die eine Liste von Links erstellen:

- [`\{{SubpagesWithSummaries}}`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/subpages_with_summaries.rs)
  - : Fügt eine Definitionsliste ({{HTMLElement("dl")}}) der Unterseiten der aktuellen Seite ein, wobei der Titel jeder Seite als {{HTMLElement("dt")}}-Begriff und der erste Absatz als {{HTMLElement("dd")}}-Begriff verwendet wird.

- [`\{{ListSubpagesForSidebar()}}`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/list_subpages_for_sidebar.rs)
  - : Wenn ohne Parameter eingeschlossen, wird eine geordnete Liste von Links zu den Unterseiten der aktuellen Seite eingefügt. Der erste Parameter ist ein Slug der übergeordneten Seite des Linkbaums. Der Linktext wird als Code angezeigt. Das Setzen eines zweiten Parameters auf `true` oder `1` wandelt die Links in reinen Text um. Das Setzen eines dritten Parameters auf `true` oder `1` fügt oben in der Liste einen Link zur Slug- (übergeordneten) Seite mit "Überblick" als Linktext hinzu.

- [`\{{QuickLinksWithSubpages()}}`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/quick_links_with_subpages.rs)
  - : Erstellt eine Reihe von Schnelllinks, die die Kinder der aktuellen Seite (oder der angegebenen Seite) als Ziele verwenden. Dies erstellt hierarchische Listen bis zu zwei Ebenen tief. Die Titel der Seiten werden als Linktexte und deren Zusammenfassungen als Tooltips verwendet.

Um beispielsweise eine geordnete Liste von Links einzuschließen, die diese Seite und ihre Geschwister umfasst, schreiben Sie Folgendes:

```md
\{{ListSubpagesForSidebar("/en-US/docs/MDN/Writing_guidelines/Page_structures/Macros", 1)}}
```

## Querverweis-Links

Einige Makros erstellen einen einzelnen Link, um ein CSS-, JavaScript-, SVG- oder HTML-Feature zu referenzieren, einschließlich Attribute, Elemente, Eigenschaften, Datentypen und APIs. Die Makros, die einzelne Links erstellen, erfordern mindestens einen Parameter: das referenzierte Feature.

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

Für den ersten erforderlichen Parameter leiten Sie den Featurename aus dem letzten Abschnitt des Slugs des Dokuments ab, auf das Sie verweisen möchten. Um zum Beispiel auf die `<select>`-Elementseite mit dem Slug `Web/HTML/Reference/Elements/select` zu verlinken, schreiben Sie das Makro als `\{{HTMLElement("select")}}`. Dies erzeugt den Link "{{HTMLElement("select")}}", der sowohl als Code formatiert ist als auch die spitzen Klammern einschließt. Dies liegt daran, dass Makros zusätzliche formatierungsspezifische Anpassungen zum Linktext hinzufügen. Daher müssen Sie sich beim Verwenden eines Makros nie um mehr als den Featurename kümmern. Deshalb ist die Verwendung von Makros zum Hinzufügen von Links schnell und einfach.

### Anpassen des Anzeigetextes

Standardmäßig ist der Anzeigetext des Links der erste Parameter, der an das Makro übergeben wird. Um einen anderen Text anzuzeigen, verwenden Sie den zweiten Parameter. Zum Beispiel erzeugt `\{{JSxRef("Array")}}` {{JSxRef("Array")}}. Um eine Variation dieses Texts anzuzeigen, verwenden Sie `\{{JSxRef("Array", "JavaScript arrays")}}`, was {{JSxRef("Array", "JavaScript arrays")}} produziert. Sie werden bemerken, dass der resultierende Link codeformatiert ist, wegen des Standardverhaltens des Makros. Schauen Sie sich den Abschnitt über [Deaktivieren der Code-Formatierung](#deaktivieren_der_code-formatierung) an, um zu sehen, wie Sie die Code-Styling überspringen.

### Verlinken zu verschachtelten Seiten

Einige Referenz-Features haben verschachtelte Seiten für verwandte Features. Zum Beispiel hat das HTML-`<input>`-Element mehrere verschachtelte Seiten für unterschiedliche Eingabetypen, wie `Web/HTML/Reference/Elements/input/range` für den Bereichs-Eingabetyp.

Das Übergeben der Pfadinfo an das Makro im ersten Parameter wie in `\{{HTMLElement("input/range")}}` erzeugt den Link als "{{HTMLElement("input/range")}}", was nicht wünschenswert ist. Verwenden Sie den zweiten Parameter, um einen anderen Linktext anzuzeigen. Für einen Link zum Bereichs-Eingabetyp schreiben wir das Makro als `\{{HTMLElement("input/range", "<code>&lt;input type=&quot;range&quot;&gt;</code>")}}`, um "{{HTMLElement("input/range", "<code>&lt;input type=&quot;range&quot;&gt;</code>")}}" zu erzeugen. (Beachten Sie, dass wenn der zweite Parameter ein Leerzeichen enthält, wie zwischen `input` und `type` hier, dieses Makro die Code-Formatierung entfernt; daher haben wir die {{HTMLElement("code")}}-Tags explizit hinzugefügt.)

### Verwendung von `CSSxRef` mit der CSS-Referenz

Jedes Makro ist leicht unterschiedlich.

Das `CSSxRef`-Makro bestimmt automatisch den korrekten Pfad vom Featurename, den Sie als ersten Parameter an das Makro angeben. Das Makro erkennt, ob ein Feature eine Eigenschaft, ein Selektor, eine Regel, eine Funktion oder ein Datentyp ist, und verlinkt auf das entsprechende Dokument unter `Web/CSS/Reference/`.

Zum Beispiel:

- `\{{CSSxRef("cursor")}}` verlinkt auf die Eigenschaftsseite unter `Web/CSS/Reference/Properties/cursor`.
- `\{{CSSxRef(":hover")}}` verlinkt auf die Pseudoklassen-Seite unter `Web/CSS/Reference/Selectors/:hover`.
- `\{{CSSxRef("@media")}}` verlinkt auf die Regel-Seite unter `Web/CSS/Reference/At-rules/@media`.
- `\{{CSSxRef("pow")}}` verlinkt auf die Funktionsseite unter `Web/CSS/Reference/Values/pow`.
- `\{{CSSxRef("<color>")}}` verlinkt auf die Datentyp-Seite unter `Web/CSS/Reference/Values/color_value`.

Genau wie das `HTMLElement`-Makro fügt das `CSSxRef`-Makro dem Linktext das passende Styling basierend auf dem Typ des Features hinzu. So fügt `\{{CSSxRef("acos")}}` spitze Klammern zum resultierenden Linktext wie in {{CSSxRef("acos")}} hinzu.

Einige weitere Verhaltensweisen des `CSSxRef`-Makros, die es zu beachten gilt, umfassen:

- Verschachtelte Seiten werden automatisch behandelt. Zum Beispiel:
  - `\{{CSSxRef("basic-shape/circle")}}` verlinkt auf das Dokument unter `Web/CSS/Reference/Values/basic-shape/circle` mit dem Link {{CSSxRef("basic-shape/circle")}}.
  - `\{{CSSxRef("animation-timeline/scroll")}}` verlinkt auf das Dokument unter `Web/CSS/Reference/Properties/animation-timeline/scroll` mit dem Link {{CSSxRef("animation-timeline/scroll")}}.
- Einige CSS-Features haben denselben Namen. Neben ihrem Verzeichnisstandort enthalten ihre Slugs Suffixe, um ihren Typ widerzuspiegeln. Zum Beispiel hat die `position`-Eigenschaft den Slug `Web/CSS/Reference/Properties/position`, während der `<position>`-Datentyp den Slug `Web/CSS/Reference/Values/position_value` hat.

  Das `CSSxRef`-Makro behandelt diese gleichnamigen Features automatisch. Daher verlinkt `\{{CSSxRef("position")}}` auf die Eigenschaftsseite mit dem Link {{CSSxRef("position")}}, und `\{{CSSxRef("<position>")}}` verlinkt auf die Datentyp-Seite mit dem Link {{CSSxRef("&lt;position&gt;")}}.

  Weitere Features mit gemeinsamen Namen sind:
  - `color`-Eigenschaft (`Web/CSS/Reference/Properties/color`) vs. `<color>`-Datentyp (`Web/CSS/Reference/Values/color_value`)

    **Makro**: `\{{CSSxRef("color")}}` vs. `\{{CSSxRef("<color>")}}`

  - `fit-content()`-Funktion (`Web/CSS/Reference/Values/fit-content_function`) vs. `fit-content`-Schlüsselwort (`Web/CSS/Reference/Values/fit-content`)

    **Makro**: `\{{CSSxRef("fit-content()")}}` vs. `\{{CSSxRef("fit-content")}}`

  - `flex`-Eigenschaft (`Web/CSS/Reference/Properties/flex`) vs. `<flex>`-Datentyp (`Web/CSS/Reference/Values/flex_value`)

    **Makro**: `\{{CSSxRef("flex")}}` vs. `\{{CSSxRef("<flex>")}}`

  - `:host`-Pseudoklasse (`Web/CSS/Reference/Selectors/:host`) vs. `:host()`-Pseudoklassenfunktion (`Web/CSS/Reference/Values/:host_function`)

    **Makro**: `\{{CSSxRef(":host")}}` vs. `\{{CSSxRef(":host()")}}`

  - `overflow`-Eigenschaft (`Web/CSS/Reference/Properties/overflow`) vs. `<overflow>`-Datentyp (`Web/CSS/Reference/Values/overflow_value`)

    **Makro**: `\{{CSSxRef("overflow")}}` vs. `\{{CSSxRef("<overflow>")}}`

  - `url()`-Funktion (`Web/CSS/Reference/Values/url_function`) vs. `<url>`-Datentyp (`Web/CSS/Reference/Values/url_value`)

    **Makro**: `\{{CSSxRef("url()")}}` vs. `\{{CSSxRef("<url>")}}`

### Deaktivieren der Code-Formatierung

Die Querverweis-Makros wenden standardmäßig eine Code-Formatierung auf den Linktext an.
Um HTML-Code-Semantik und CSS-Code-Styling, die von den Makros angewendet werden, zu vermeiden, verwenden Sie den `"nocode"`-Parameter.

Zum Beispiel erstellt `\{{CSSxRef("background-color")}}` den "{{CSSxRef("background-color")}}" Link mit Code-Styling, während `\{{domxref("CSS.supports_static", "check support", "", "nocode")}}` den einfachen Textlink "[check support](/de/docs/Web/API/CSS/supports_static)" erstellt. Ebenso schreiben wir, um den JavaScript-Array-Link ohne Code-Formatierung zu erstellen, `\{{JSxRef("Array", "JavaScript arrays", "", "nocode")}}`, um "{{JSxRef("Array", "JavaScript arrays", "", "nocode")}}" zu produzieren.

## Siehe auch

- [Verwendung von Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Macros)
- [Häufig verwendete Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros), einschließlich BCD-Makros (`\{{Compat}}`) und Spezifikations-Makros (`\{{Specifications}}`).
- [Hinweise und Warnhinweise Leitfaden](/de/docs/MDN/Writing_guidelines/Page_structures/Banners_and_notices) einschließlich der `\{{SeeCompatTable}}`, `\{{Deprecated_Header}}` und `\{{SecureContext_Header}}` Makros.
