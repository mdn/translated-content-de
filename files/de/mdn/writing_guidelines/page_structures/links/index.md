---
title: Link-Makros
slug: MDN/Writing_guidelines/Page_structures/Links
l10n:
  sourceCommit: 8f0171397993605739530a8d32f24a804d06f882
---

MDN bietet zahlreiche Makros, um stets aktuelle Links zu MDN-Inhalten zu erstellen. In diesem Leitfaden lernen Sie die MDN-Cross-Reference-Makros kennen, die Sie verwenden können, um einen einzelnen Link zu einer anderen Seite oder eine Liste von Links zu allen Unterseiten eines Dokuments einzufügen.

## Listen von Links

MDN bietet Makros, die eine Liste von Links erstellen:

- [`\{{SubpagesWithSummaries}}`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/subpages_with_summaries.rs)
  - : Fügt eine Definitionsliste ({{HTMLElement("dl")}}) der Unterseiten der aktuellen Seite ein, wobei der Titel jeder Seite als {{HTMLElement("dt")}} Begriff und der erste Absatz als {{HTMLElement("dd")}} Bezeichnung verwendet wird.

- [`\{{ListSubpagesForSidebar()}}`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/list_subpages_for_sidebar.rs)
  - : Wenn ohne Parameter eingefügt, fügt eine geordnete Liste von Links zu den Unterseiten der aktuellen Seite ein. Der erste Parameter ist ein Slug der Elternseite des Linkbaums. Der Linktext wird als Code angezeigt. Das Setzen eines zweiten Parameters auf `true` oder `1` konvertiert die Links in einfachen Text. Das Setzen eines dritten Parameters auf `true` oder `1` fügt einen Link zur Elternseite (Slug) oben in der Liste mit "Übersicht" als Linktext hinzu.

- [`\{{QuickLinksWithSubpages()}}`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/quick_links_with_subpages.rs)
  - : Erstellt ein Set von Schnelllinks, die die Kinder der aktuellen Seite (oder der angegebenen Seite) als Ziele verwenden. Dies erstellt hierarchische Listen bis zu zwei Ebenen tief. Die Titel der Seiten werden als Linktext verwendet und ihre Zusammenfassungen als Tooltips.

Zum Beispiel, um eine geordnete Liste von Links einzufügen, die diese Seite und ihre Geschwister umfasst, schreiben Sie Folgendes:

```md
\{{ListSubpagesForSidebar("/en-US/docs/MDN/Writing_guidelines/Page_structures/Macros", 1)}}
```

## Cross-Reference-Links

Einige Makros erstellen einen einzelnen Link, um auf ein CSS-, JavaScript-, SVG- oder HTML-Feature zu verweisen, einschließlich Attribute, Elemente, Eigenschaften, Datentypen und APIs. Die Makros, die einzelne Links erstellen, erfordern mindestens einen Parameter: das Feature, auf das verwiesen wird.

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

Für den ersten erforderlichen Parameter leiten Sie den Featurename aus dem letzten Abschnitt des Slugs des Dokuments ab, zu dem Sie verlinken möchten. Zum Beispiel, um auf die `<select>`-Elementseite mit dem Slug `Web/HTML/Reference/Elements/select` zu verlinken, schreiben Sie das Makro als `\{{HTMLElement("select")}}`. Dies erzeugt den Link "{{HTMLElement("select")}}", der sowohl als Code formatiert als auch in spitze Klammern eingeschlossen ist. Dies liegt daran, dass Makros zusätzliche, feature-spezifische Formatierungen zum Linktext hinzufügen. Somit müssen Sie sich beim Verwenden eines Makros nie um mehr als den Featurename selbst kümmern. Deshalb ist die Verwendung von Makros zum Hinzufügen von Links schnell und einfach.

### Anpassung des angezeigten Textes

Standardmäßig ist der angezeigte Text des Links der erste Parameter, der an das Makro übergeben wird. Um einen anderen Text anzuzeigen, verwenden Sie den zweiten Parameter. Zum Beispiel, `\{{JSxRef("Array")}}` erzeugt {{JSxRef("Array")}}. Um eine Variation dieses Textes anzuzeigen, verwenden Sie `\{{JSxRef("Array", "JavaScript arrays")}}`, was {{JSxRef("Array", "JavaScript arrays")}} erzeugt. Sie werden bemerken, dass der resultierende Link aufgrund des Standardverhaltens des Makros als Code formatiert ist. Überprüfen Sie den Abschnitt [Deaktivierung des Code-Stylings](#deaktivierung_des_code-stylings), um zu sehen, wie Sie das Code-Styling überspringen können.

### Verlinken auf verschachtelte Seiten

Einige Referenz-Features haben verschachtelte Seiten für verwandte Funktionen. Zum Beispiel hat das HTML-`<input>`-Element mehrere verschachtelte Seiten für verschiedene Eingabetypen, wie `Web/HTML/Reference/Elements/input/range` für den Range-Eingabetyp.

Das Übergeben der Pfadinformationen an das Makro im ersten Parameter, wie in `\{{HTMLElement("input/range")}}`, erzeugt den Link als "{{HTMLElement("input/range")}}", was nicht gewünscht ist. Verwenden Sie den zweiten Parameter, um einen anderen Linktext anzuzeigen. Also, für einen Link zum Range-Eingabetyp würden wir das Makro als `\{{HTMLElement("input/range", "<code>&lt;input type=&quot;range&quot;&gt;</code>")}}` schreiben, um "{{HTMLElement("input/range", "<code>&lt;input type=&quot;range&quot;&gt;</code>")}}" zu erzeugen. (Beachten Sie, dass, wenn der zweite Parameter ein Leerzeichen enthält, wie das zwischen `input` und `type` hier, dieses Makro das Code-Styling entfernt; daher haben wir die {{HTMLElement("code")}}-Tags explizit hinzugefügt.)

### Verwendung von `CSSxRef` mit der CSS-Referenz

Jedes Makro ist leicht unterschiedlich.

Das `CSSxRef`-Makro bestimmt den korrekten Pfad automatisch aus dem Featurename, den Sie als ersten Parameter an das Makro übergeben. Das Makro erkennt, ob ein Feature eine Eigenschaft, ein Selektor, eine Regel, eine Funktion oder ein Datentyp ist und verlinkt das entsprechende Dokument unter `Web/CSS/Reference/`.

Zum Beispiel:

- `\{{CSSxRef("cursor")}}` verlinkt auf die Eigenschaftsseite unter `Web/CSS/Reference/Properties/cursor`.
- `\{{CSSxRef(":hover")}}` verlinkt auf die Pseudoklassen-Seite unter `Web/CSS/Reference/Selectors/:hover`.
- `\{{CSSxRef("@media")}}` verlinkt auf die Regel-Seite unter `Web/CSS/Reference/At-rules/@media`.
- `\{{CSSxRef("pow")}}` verlinkt auf die Funktionsseite unter `Web/CSS/Reference/Values/pow`.
- `\{{CSSxRef("<color>")}}` verlinkt auf die Datentyp-Seite unter `Web/CSS/Reference/Values/color_value`.

Genau wie das `HTMLElement`-Makro fügt das `CSSxRef`-Makro dem Linktext das passende Styling basierend auf der Art des Features hinzu. Daher fügt `\{{CSSxRef("acos")}}` spitze Klammern zum resultierenden Linktext hinzu, wie in {{CSSxRef("acos")}}.

Einige andere Verhaltensweisen des `CSSxRef`-Makros, die beachtet werden sollten, sind:

- Verschachtelte Seiten werden automatisch behandelt. Zum Beispiel:
  - `\{{CSSxRef("basic-shape/circle")}}` verlinkt zum Dokument unter `Web/CSS/Reference/Values/basic-shape/circle` mit dem Link {{CSSxRef("basic-shape/circle")}}.
  - `\{{CSSxRef("animation-timeline/scroll")}}` verlinkt zum Dokument unter `Web/CSS/Reference/Properties/animation-timeline/scroll` mit dem Link {{CSSxRef("animation-timeline/scroll")}}.
- Einige CSS-Features haben den gleichen Namen. Zusätzlich zu ihrem Verzeichnispfad enthalten ihre Slugs Suffixe, um ihren Typ zu reflektieren. Zum Beispiel hat die `position`-Eigenschaft den Slug `Web/CSS/Reference/Properties/position`, während der `<position>`-Datentyp den Slug `Web/CSS/Reference/Values/position_value` hat.

  Das `CSSxRef`-Makro behandelt diese gleichnamigen Features automatisch. Somit verlinkt `\{{CSSxRef("position")}}` auf die Eigenschaftsseite mit dem Link {{CSSxRef("position")}}, und `\{{CSSxRef("<position>")}}` verlinkt auf die Datentyp-Seite mit dem Link {{CSSxRef("&lt;position&gt;")}}.

  Andere Features mit gemeinsamen Namen umfassen:
  - `color` Eigenschaft (`Web/CSS/Reference/Properties/color`) vs. `<color>` Datentyp (`Web/CSS/Reference/Values/color_value`)

    **Makro**: `\{{CSSxRef("color")}}` vs. `\{{CSSxRef("<color>")}}`

  - `fit-content()` Funktion (`Web/CSS/Reference/Values/fit-content_function`) vs. `fit-content` Schlüsselwort (`Web/CSS/Reference/Values/fit-content`)

    **Makro**: `\{{CSSxRef("fit-content()")}}` vs. `\{{CSSxRef("fit-content")}}`

  - `flex` Eigenschaft (`Web/CSS/Reference/Properties/flex`) vs. `<flex>` Datentyp (`Web/CSS/Reference/Values/flex_value`)

    **Makro**: `\{{CSSxRef("flex")}}` vs. `\{{CSSxRef("<flex>")}}`

  - `:host` Pseudoklasse (`Web/CSS/Reference/Selectors/:host`) vs. `:host()` Pseudoklassenfunktion (`Web/CSS/Reference/Values/:host_function`)

    **Makro**: `\{{CSSxRef(":host")}}` vs. `\{{CSSxRef(":host()")}}`

  - `overflow` Eigenschaft (`Web/CSS/Reference/Properties/overflow`) vs. `<overflow>` Datentyp (`Web/CSS/Reference/Values/overflow_value`)

    **Makro**: `\{{CSSxRef("overflow")}}` vs. `\{{CSSxRef("<overflow>")}}`

  - `url()` Funktion (`Web/CSS/Reference/Values/url_function`) vs. `<url>` Datentyp (`Web/CSS/Reference/Values/url_value`)

    **Makro**: `\{{CSSxRef("url()")}}` vs. `\{{CSSxRef("<url>")}}`

### Deaktivierung des Code-Stylings

Die Cross-Reference-Makros wenden standardmäßig Codeformatierungen auf den Linktext an. Um HTML-Code-Semantik und CSS-Code-Styling zu vermeiden, das von den Makros angewendet wird, verwenden Sie den `"nocode"`-Parameter.

Zum Beispiel erstellt `\{{CSSxRef("background-color")}}` den "{{CSSxRef("background-color")}}" Link mit Codeformatierung, während `\{{domxref("CSS.supports_static", "check support", "", "nocode")}}` den Klartext-Link "[check support](/de/docs/Web/API/CSS/supports_static)" erstellt. Ebenso, um den JavaScript-Array-Link ohne Codeformatierung zu erstellen, würden wir `\{{JSxRef("Array", "JavaScript arrays", "", "nocode")}}` schreiben, um "{{JSxRef("Array", "JavaScript arrays", "", "nocode")}}" zu erzeugen.

## Siehe auch

- [Verwendung von Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Macros)
- [Häufig verwendete Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros), einschließlich BCD-Makros (`\{{Compat}}`) und Spezifikationsmakros (`\{{Specifications}}`).
- [Leitfaden zu Bannern und Hinweisen](/de/docs/MDN/Writing_guidelines/Page_structures/Banners_and_notices) einschließlich der Makros `\{{SeeCompatTable}}` und `\{{SecureContext_Header}}`.
