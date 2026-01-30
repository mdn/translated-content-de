---
title: Link-Makros
slug: MDN/Writing_guidelines/Page_structures/Links
l10n:
  sourceCommit: 6d81acb9d225e001d00c42a529b8964100429c0c
---

MDN bietet zahlreiche Makros, um immer aktuelle Links zu MDN-Inhalten zu erstellen. In diesem Leitfaden erfahren Sie mehr über MDN-Querverweis-Makros, die Sie verwenden können, um einen einzelnen Link zu einer anderen Seite oder eine Liste von Links zu allen Unterseiten eines Dokuments einzufügen.

## Listen von Links

MDN bietet Makros, die eine Liste von Links erstellen:

- [`\{{SubpagesWithSummaries}}`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/subpages_with_summaries.rs)
  - : Fügt eine Definitionsliste ({{HTMLElement("dl")}}) der Unterseiten der aktuellen Seite ein, wobei der Titel jeder Seite als {{HTMLElement("dt")}} Begriff und der erste Absatz als {{HTMLElement("dd")}} Begriff verwendet wird.

- [`\{{ListSubpagesForSidebar()}}`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/list_subpages_for_sidebar.rs)
  - : Wenn ohne Parameter eingeschlossen, fügt eine geordnete Liste von Links zu den Unterseiten der aktuellen Seite ein. Der erste Parameter ist ein Slug der übergeordneten Seite des Linkbaums. Der Linktext wird als Code angezeigt. Das Setzen eines zweiten Parameters auf `true` oder `1` konvertiert die Links in Klartext. Das Setzen eines dritten Parameters auf `true` oder `1` fügt einen Link zur Slug (übergeordnete) Seite oben in der Liste ein, mit "Übersicht" als Linktext.

- [`\{{QuickLinksWithSubpages()}}`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/quick_links_with_subpages.rs)
  - : Erstellt eine Reihe von Schnelllinks, wobei die Unterseiten der aktuellen Seite (oder der angegebenen Seite) als Ziele verwendet werden. Dies erstellt hierarchische Listen bis zu zwei Ebenen tief. Die Titel der Seiten werden als Linktext verwendet und ihre Zusammenfassungen als Tooltips.

Zum Beispiel, um eine geordnete Liste von Links einzuschließen, die diese Seite und ihre Geschwister enthält, schreiben Sie Folgendes:

```md
\{{ListSubpagesForSidebar("/en-US/docs/MDN/Writing_guidelines/Page_structures/Macros", 1)}}
```

## Querverweis-Links

Einige Makros erstellen einen einzelnen Link, um ein CSS-, JavaScript-, SVG- oder HTML-Feature, einschließlich Attributen, Elementen, Eigenschaften, Datentypen und APIs, zu referenzieren. Die Makros, die einzelne Links erstellen, erfordern mindestens einen Parameter: das referenzierte Feature.

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

Für den ersten erforderlichen Parameter leiten Sie den Feature-Namen aus dem letzten Abschnitt des Slugs des Dokuments ab, zu dem Sie verlinken möchten. Zum Beispiel, um zur `<select>` Elementseite mit dem Slug `Web/HTML/Reference/Elements/select` zu verlinken, würden Sie das Makro als `\{{HTMLElement("select")}}` schreiben. Dies erzeugt den Link "{{HTMLElement("select")}}", der sowohl als Code formatiert ist als auch die Winkelklammern einschließt. Dies liegt daran, dass Makros zusätzliche, feature-spezifische Formatierungen zum Linktext hinzufügen. Daher müssen Sie sich beim Verwenden eines Makros nie um mehr als den Featurenamen selbst kümmern. Deshalb ist das Hinzufügen von Links mit Makros schnell und einfach.

### Anpassen des Anzeigetextes

Standardmäßig ist der Anzeigetext des Links der erste Parameter, der an das Makro übergeben wird. Um einen anderen Text anzuzeigen, verwenden Sie den zweiten Parameter. Zum Beispiel erzeugt `\{{JSxRef("Array")}}` {{JSxRef("Array")}}. Um eine Variation dieses Textes anzuzeigen, verwenden Sie `\{{JSxRef("Array", "JavaScript arrays")}}`, was {{JSxRef("Array", "JavaScript arrays")}} ergibt. Sie werden bemerken, dass der resultierende Link aufgrund des Standardverhaltens des Makros als Code formatiert ist. Überprüfen Sie den Abschnitt über [Deaktivieren der Codeformatierung](#deaktivieren_der_codeformatierung), um zu erfahren, wie Sie das Codestyling überspringen.

### Verlinken zu verzweigten Seiten

Einige Referenz-Features haben verzweigte Seiten für verwandte Features. Zum Beispiel hat das HTML `<input>` Element mehrere verzweigte Seiten für verschiedene Eingabetypen, wie `Web/HTML/Reference/Elements/input/range` für den Bereichseingabetyp.

Das Übergeben der Pfadinformationen an das Makro im ersten Parameter, wie in `\{{HTMLElement("input/range")}}`, erzeugt den Link als "{{HTMLElement("input/range")}}", was nicht das gewünschte Ergebnis ist. Verwenden Sie den zweiten Parameter, um einen anderen Linktext anzuzeigen. So würden wir für einen Link zum Bereichseingabetyp das Makro als `\{{HTMLElement("input/range", "<code>&lt;input type=&quot;range&quot;&gt;<code>")}}` schreiben, um "{{HTMLElement("input/range", "<code>&lt;input type=&quot;range&quot;&gt;</code>")}}" zu erzeugen. (Beachten Sie, dass, wenn der zweite Parameter ein Leerzeichen enthält, wie das zwischen `input` und `type` hier, dieses Makro die Codeformatierung entfernt; daher haben wir die {{HTMLElement("code")}} Tags explizit hinzugefügt.)

### Verwendung von `CSSxRef` mit der CSS-Referenz

Jedes Makro ist leicht unterschiedlich.

Das `CSSxRef` Makro ermittelt automatisch den korrekten Pfad aus dem Feature-Namen, den Sie als ersten Parameter an das Makro übergeben. Das Makro erkennt, ob ein Feature eine Eigenschaft, ein Selektor, eine Direktive, eine Funktion oder ein Datentyp ist, und verlinkt zum entsprechenden Dokument unter `Web/CSS/Reference/`.

Zum Beispiel:

- `\{{CSSxRef("cursor")}}` verlinkt zur Eigenschaftsseite unter `Web/CSS/Reference/Properties/cursor`.
- `\{{CSSxRef(":hover")}}` verlinkt zur Pseudoklassen-Seite unter `Web/CSS/Reference/Selectors/:hover`.
- `\{{CSSxRef("@media")}}` verlinkt zur At-Direktive-Seite unter `Web/CSS/Reference/At-rules/@media`.
- `\{{CSSxRef("pow")}}` verlinkt zur Funktionsseite unter `Web/CSS/Reference/Values/pow`.
- `\{{CSSxRef("<color>")}}` verlinkt zur Datentypen-Seite unter `Web/CSS/Reference/Values/color_value`.

Genau wie das `HTMLElement` Makro fügt das `CSSxRef` Makro die passende Formatierung zum Linktext basierend auf dem Typ des Features hinzu. So fügt `\{{CSSxRef("acos")}}` Winkelklammern zum resultierenden Linktext hinzu, wie in {{CSSxRef("acos")}}.

Einige andere Verhaltensweisen des `CSSxRef` Makros, die erwähnenswert sind:

- Verschachtelte Seiten werden automatisch behandelt. Zum Beispiel:
  - `\{{CSSxRef("basic-shape/circle")}}` verlinkt auf das Dokument unter `Web/CSS/Reference/Values/basic-shape/circle` mit dem Link {{CSSxRef("basic-shape/circle")}}.
  - `\{{CSSxRef("animation-timeline/scroll")}}` verlinkt auf das Dokument unter `Web/CSS/Reference/Properties/animation-timeline/scroll` mit dem Link {{CSSxRef("animation-timeline/scroll")}}.
- Einige CSS-Features haben denselben Namen. Zusätzlich zu ihrer Verzeichnisposition enthalten ihre Slugs Anhänge, die ihren Typ widerspiegeln. Zum Beispiel hat die Eigenschaft `position` den Slug `Web/CSS/Reference/Properties/position`, während der Datentyp `<position>` den Slug `Web/CSS/Reference/Values/position_value`.

  Das `CSSxRef` Makro verarbeitet diese gleichnamigen Features automatisch. So verlinkt `\{{CSSxRef("position")}}` auf die Eigenschaftsseite mit dem Link {{CSSxRef("position")}}, und `\{{CSSxRef("<position>")}}` verlinkt auf die Datentypen-Seite mit dem Link {{CSSxRef("&lt;position&gt;")}}.

  Andere Features mit gleichen Namen umfassen:
  - Die `color` Eigenschaft (`Web/CSS/Reference/Properties/color`) vs. der `<color>` Datentyp (`Web/CSS/Reference/Values/color_value`)

    **Makro**: `\{{CSSxRef("color")}}` vs. `\{{CSSxRef("<color>")}}`

  - Die Funktion `fit-content()` (`Web/CSS/Reference/Values/fit-content_function`) vs. das `fit-content` Schlüsselwort (`Web/CSS/Reference/Values/fit-content`)

    **Makro**: `\{{CSSxRef("fit-content()")}}` vs. `\{{CSSxRef("fit-content")}}`

  - Die `flex` Eigenschaft (`Web/CSS/Reference/Properties/flex`) vs. der `<flex>` Datentyp (`Web/CSS/Reference/Values/flex_value`)

    **Makro**: `\{{CSSxRef("flex")}}` vs. `\{{CSSxRef("<flex>")}}`

  - Die `:host` Pseudoklasse (`Web/CSS/Reference/Selectors/:host`) vs. die `:host()` Pseudoklassenfunktion (`Web/CSS/Reference/Values/:host_function`)

    **Makro**: `\{{CSSxRef(":host")}}` vs. `\{{CSSxRef(":host()")}}`

  - Die `overflow` Eigenschaft (`Web/CSS/Reference/Properties/overflow`) vs. der `<overflow>` Datentyp (`Web/CSS/Reference/Values/overflow_value`)

    **Makro**: `\{{CSSxRef("overflow")}}` vs. `\{{CSSxRef("<overflow>")}}`

  - Die Funktion `url()` (`Web/CSS/Reference/Values/url_function`) vs. der `<url>` Datentyp (`Web/CSS/Reference/Values/url_value`)

    **Makro**: `\{{CSSxRef("url()")}}` vs. `\{{CSSxRef("<url>")}}`

### Deaktivieren der Codeformatierung

Die Querverweis-Makros wenden standardmäßig die Codeformatierung auf den Linktext an.
Um HTML-Code-Semantik und CSS-Code-Styling, die von den Makros hinzugefügt werden, zu vermeiden, verwenden Sie den Parameter `"nocode"`.

Zum Beispiel erstellt `\{{CSSxRef("background-color")}}` den Link "{{CSSxRef("background-color")}}" mit Code-Styling, während `\{{domxref("CSS.supports_static", "support überprüfen", "", "nocode")}}` den Klartextlink "[support überprüfen](/de/docs/Web/API/CSS/supports_static)" erstellt. Ebenso würden wir, um den JavaScript-Array-Link ohne Codeformatierung zu erstellen, `\{{JSxRef("Array", "JavaScript arrays", "", "nocode")}}` schreiben, um "{{JSxRef("Array", "JavaScript arrays", "", "nocode")}}" zu erzeugen.

## Siehe auch

- [Verwendung von Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Macros)
- [Häufig verwendete Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros), einschließlich BCD-Makros (`\{{Compat}}`) und Spezifikationsmakros (`\{{Specifications}}`).
- [Banner und Hinweise Leitfaden](/de/docs/MDN/Writing_guidelines/Page_structures/Banners_and_notices), einschließlich der Makros `\{{SeeCompatTable}}`, `\{{Deprecated_Header}}` und `\{{SecureContext_Header}}`.
