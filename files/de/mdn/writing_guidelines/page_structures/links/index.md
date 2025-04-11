---
title: Link-Makros
slug: MDN/Writing_guidelines/Page_structures/Links
l10n:
  sourceCommit: b2f5e6cc0fe097a4eaabe53f3c134432c6e5824d
---

MDN bietet zahlreiche Makros, um stets aktuelle Links zu MDN-Inhalten zu erstellen. In diesem Leitfaden erfahren Sie mehr über MDN-Querreferenz-Makros, die Sie verwenden können, um entweder einen einzelnen Link zu einer anderen Seite oder eine Liste von Links zu allen Unterseiten eines Dokuments einzufügen.

## Listen von Links

MDN bietet Makros, die eine Liste von Links erstellen:

- [`\{{SubpagesWithSummaries}}`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/subpages_with_summaries.rs)

  - : Fügt eine Definitionsliste ({{HTMLElement("dl")}}) der Unterseiten der aktuellen Seite ein, wobei der Titel jeder Seite als {{HTMLElement("dt")}} Begriff und der erste Absatz als {{HTMLElement("dd")}} Begriff eingefügt wird.

- [`\{{ListSubpagesForSidebar()}}`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/list_subpages_for_sidebar.rs)

  - : Wenn ohne Parameter eingefügt, wird eine geordnete Liste von Links zu den Unterseiten der aktuellen Seite eingefügt. Der erste Parameter ist ein Slug der übergeordneten Seite des Linkbaums. Der Linktext wird als Code angezeigt. Ein zweiter Parameter, der auf `true` oder `1` gesetzt wird, wandelt die Links in einfachen Text um. Ein dritter Parameter, der auf `true` oder `1` gesetzt wird, fügt einen Link zur Slug-Seite (Elternteil) oben in der Liste mit „Übersicht“ als Linktext hinzu.

- [`\{{QuickLinksWithSubpages()}}`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/quick_links_with_subpages.rs)

  - : Erstellt eine Reihe von Schnellnavigationen, bei denen die Kinder der aktuellen Seite (oder der angegebenen Seite) als Ziele verwendet werden. Dies erstellt hierarchische Listen bis zu zwei Ebenen tief. Die Titel der Seiten werden als Linktext verwendet und ihre Zusammenfassungen als Tooltips.

### Beispiel-Linkliste

Um eine geordnete Liste von Links einzuschließen, die diese Seite und ihre Geschwister enthält, schreiben Sie Folgendes:

```md
\{{ListSubpagesForSidebar("/en-US/docs/MDN/Writing_guidelines/Page_structures/Macros", 1)}}
```

## Querreferenz-Links

Einige Makros erstellen einen einzelnen Link, um eine CSS-, JavaScript-, SVG- oder HTML-Funktion zu referenzieren, einschließlich Attribute, Elemente, Eigenschaften, Datentypen und APIs. Die Makros, die einzelne Links erstellen, erfordern mindestens einen Parameter: die referenzierte Funktion.

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

Der erste Parameter jedes dieser Makros ist der letzte Abschnitt des Slugs des referenzierten Dokuments. Zum Beispiel, für HTML-Elemente, schließen Sie `\{{HTMLElement("")}}` mit dem Teil des Slugs ein, der nach `Web/HTML/Element/` im Slug als erster Parameter kommt. Bei `\{{CSSxRef("")}}`, fügen Sie den Teil des Slugs hinzu, der nach `Web/CSS/` im Slug kommt. Der Link wird zu dieser Seite führen.

Standardmäßig wird der verlinkte Text als Ressource angezeigt, wie sie im ersten Parameter geschrieben ist, bei `\{{HTMLElement()}}` in spitzen Klammern. Das ist möglicherweise nicht das, was Sie möchten. Zum Beispiel ist der Slug für den Eingabetyp "range" `Web/HTML/Element/input/range`. Die Einbeziehung von `\{{HTMLElement("input/range")}}` ergibt "{{HTMLElement("input/range")}}". Das ist nicht das, was Sie wollen. Alle Makros akzeptieren zusätzliche Parameter, sodass Sie den Text angeben können, den Sie anzeigen möchten.

Der zweite Parameter, falls vorhanden, bietet den Linktext. Im Fall des input-range-Beispiels würden wir `\{{HTMLElement("input/range", "<code>&lt;input type=&quot;range&quot;&gt;</code>")}}` schreiben, was "{{HTMLElement("input/range", "<code>&lt;input type=&quot;range&quot;&gt;</code>")}}" ergibt. Dieses spezielle Makro entfernt die {{htmlelement("code")}} und die spitzen Klammern, wenn der zweite Parameter ein Leerzeichen enthält, daher haben wir die Klammern und Code-Tags hinzugefügt.

Jedes Makro ist unterschiedlich!

Um HTML-Code-Semantik und CSS-Codestil zu verhindern, beinhalten einige Querreferenz-Makros einen Parameter mit dem `"nocode"` um diese Formatierung zu deaktivieren.

Zum Beispiel, `\{{CSSxRef("background-color")}}` erstellt den Code-Link "{{CSSxRef("background-color")}}" und `\{{domxref("CSS.supports_static", "support überprüfen", "", "nocode")}}` erstellt den einfachen Textlink "[support überprüfen](/de/docs/Web/API/CSS/supports_static)".

Stellen Sie sicher, dass Sie den Quellcode anschauen, um zu verstehen, wie das von Ihnen verwendete Makro funktioniert und um die verschiedenen Parameter zu verstehen; während die Parameter im Allgemeinen gut dokumentiert sind, gibt es Ausnahmen wie "als Code nicht rendern, wenn der zweite Parameter ein Leerzeichen enthält", wie wir sie im `\{{HTMLElement("")}}`-Makro gesehen haben, die im Code, aber nicht anderweitig dokumentiert ist.

Um zu erfahren, welche Parameter jedes Makro unterstützt und die Reihenfolge der Parameter für jedes Makro, enthält die Quelldatei des Makros, die oben verlinkt ist, Dokumentation. Es gibt eine [Liste häufig verwendeter Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros), von denen jedes Links im Hauptinhaltsbereich der Seite ausgibt.

## Siehe auch

- [Verwendung von Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Macros)
- [Häufig verwendete Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros), einschließlich BCD-Makros (`\{{Compat}}`) und Spezifikations-Makros (`\{{Specifications}}`).
- [Leitfaden zu Bannern und Hinweisen](/de/docs/MDN/Writing_guidelines/Page_structures/Banners_and_notices) einschließlich der `\{{SeeCompatTable}}`, `\{{Deprecated_Header}}` und `\{{SecureContext_Header}}` Makros.
