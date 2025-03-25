---
title: Link-Makros
slug: MDN/Writing_guidelines/Page_structures/Links
l10n:
  sourceCommit: e13b6ffe7c9cb05c6a89fcb3c8fcbc987eb05211
---

MDN bietet zahlreiche Makros, um stets aktuelle Links zu MDN-Inhalten zu erstellen. In diesem Leitfaden erfahren Sie mehr über MDN-Querverweis-Makros, die Sie nutzen können, um einen einzelnen Link zu einer anderen Seite oder eine Liste von Links zu allen Unterseiten eines Dokuments einzufügen.

## Listen von Links

MDN stellt Makros bereit, die eine Liste von Links erstellen:

- [`\{{SubpagesWithSummaries}}`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/subpages_with_summaries.rs)

  - : Fügt eine Definitionsliste ({{HTMLElement("dl")}}) der Unterseiten der aktuellen Seite ein, wobei der Titel jeder Seite als {{HTMLElement("dt")}} Begriff und der erste Absatz als {{HTMLElement("dd")}} Begriff verwendet wird.

- [`\{{ListSubpagesForSidebar()}}`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/list_subpages_for_sidebar.rs)

  - : Wenn ohne Parameter eingebunden, wird eine geordnete Liste von Links zu den Unterseiten der aktuellen Seite eingefügt. Dieses Makro wird meist in [Sidebars](/de/docs/MDN/Writing_guidelines/Page_structures/Sidebars) verwendet (daher der Makroname), wobei die Aufzählungszeichen nicht gerendert werden. Der erste Parameter ist ein Slug der übergeordneten Seite des Linkbaums. Der Linktext wird als Code angezeigt. Wenn ein zweiter Parameter auf `true` oder `1` gesetzt wird, werden die Links in normalen Text umgewandelt. Wird ein dritter Parameter auf `true` oder `1` gesetzt, wird oben in der Liste ein Link zur Slug-(übergeordneten) Seite mit "Übersicht" als Linktext hinzugefügt.

- [`\{{QuickLinksWithSubpages()}}`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/quick_links_with_subpages.rs)

  - : Erstellt ein Set von Schnelllinks, das die Kinder der aktuellen Seite (oder der angegebenen Seite) als Ziele verwendet. Dies erzeugt hierarchische Listen bis zu zwei Ebenen tief. Die Titel der Seiten werden als Linktext verwendet und ihre Zusammenfassungen als Tooltips.

### Beispiel für eine Linkliste

Um eine geordnete Liste von Links zu erstellen, die diese Seite und ihre Geschwister umfasst, schreiben Sie folgendes:

```md
\{{ListSubpagesForSidebar("/en-US/docs/MDN/Writing_guidelines/Page_structures/Macros", 1)}}
```

## Querverweis-Links

Einige Makros erstellen einen einzelnen Link, um auf eine CSS-, JavaScript-, SVG- oder HTML-Funktion, einschließlich Attribute, Elemente, Eigenschaften, Datentypen und APIs, zu verweisen. Die Makros, die einzelne Links erstellen, erfordern mindestens einen Parameter: die Funktion, auf die verwiesen wird.

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

Der erste Parameter jedes dieser Makros ist der letzte Abschnitt des Slugs des referenzierten Dokuments. Zum Beispiel, für HTML-Elemente, fügen Sie `\{{HTMLElement("")}}` mit dem Teil des Slugs ein, der nach `Web/HTML/Element/` folgt und geben diesen als ersten Parameter an. Mit `\{{CSSxRef("")}}`, fügen Sie den Teil des Slugs ein, der nach `Web/CSS/` folgt. Der Link wird auf diese Seite verweisen.

Standardmäßig wird der Text, der angezeigt wird, als die verlinkte Ressource dargestellt, wie sie im ersten Parameter angegeben ist, in spitzen Klammern im Fall von `\{{HTMLElement()}}`. Das ist möglicherweise nicht das gewünschte Ergebnis. Beispielsweise ist der Slug für den Bereichs-Input-Typ `Web/HTML/Element/input/range`. Die Einbindung von `\{{HTMLElement("input/range")}}` ergibt "{{HTMLElement("input/range")}}". Das ist nicht das gewünschte Ergebnis. Alle Makros akzeptieren zusätzliche Parameter, sodass Sie den gewünschten Anzeigetext angeben können.

Der zweite Parameter, wenn vorhanden, stellt den Linktext bereit. Im Fall des Input-Bereichs würden wir `\{{HTMLElement("input/range", "<code>&lt;input type=&quot;range&quot;&gt;</code>")}}` schreiben, was "{{HTMLElement("input/range", "<code>&lt;input type=&quot;range&quot;&gt;</code>")}}" ergibt. Dieses spezielle Makro entfernt die {{htmlelement("code")}}- und spitzen Klammern, wenn der zweite Parameter ein Leerzeichen enthält, daher haben wir die Klammern und Code-Tags hinzugefügt.

Jedes Makro ist anders!

Um HTML-Code-Semantik und CSS-Code-Styling zu verhindern, enthalten einige Querverweismakros einen Parameter mit dem `"nocode"`, um dieses Styling zu deaktivieren.

Zum Beispiel erstellt `\{{CSSxRef("background-color")}}` den Code-Link "{{CSSxRef("background-color")}}" und `\{{domxref("CSS.supports_static", "Unterstützung prüfen", "", "nocode")}}` erstellt den normalen Text-Link "[Unterstützung prüfen](/de/docs/Web/API/CSS/supports_static)".

Stellen Sie sicher, dass Sie den Quellcode ansehen, um zu verstehen, wie das von Ihnen verwendete Makro funktioniert und um die verschiedenen Parameter zu verstehen; während die Parameter im Allgemeinen gut dokumentiert sind, gibt es Ausnahmen wie "nicht als Code rendern, wenn der zweite Parameter ein Leerzeichen enthält", die wir im `\{{HTMLElement("")}}` Makro gesehen haben, die im Code aber sonst nicht dokumentiert sind.

Um zu erfahren, welche Parameter jedes Makro unterstützt und die Reihenfolge der Parameter für jedes Makro, enthält die oben verlinkte Makro-Quelldatei Dokumentation. Es gibt eine [Liste häufig verwendeter Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros), von denen jedes Links im Hauptinhaltbereich der Seite erzeugt.

## Weitere Informationen

- [Verwendung von Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Macros)
- [Häufig verwendete Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros), einschließlich BCD-Makros (`\{{Compat}}`, `\{{Compat(&lt;feature>)}}`, und `\{{Compat(&lt;feature>, &lt;depth>)}}`) und Spezifikationsmakros (`\{{Specifications}}` / `\{{Specifications(&lt;feature>)}}`)
- [Leitfaden für Banner und Hinweise](/de/docs/MDN/Writing_guidelines/Page_structures/Banners_and_notices) einschließlich der Makros `\{{SeeCompatTable}}`, `\{{Deprecated_Header}}`, und `\{{SecureContext_Header}}`.
