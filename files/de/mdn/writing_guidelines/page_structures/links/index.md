---
title: Link-Makros
slug: MDN/Writing_guidelines/Page_structures/Links
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

MDN bietet zahlreiche Makros, um stets aktuelle Links zu MDN-Inhalten zu erstellen. In diesem Leitfaden erfahren Sie mehr über MDN-Querverweis-Makros, die Sie verwenden können, um entweder einen einzigen Link zu einer anderen Seite oder eine Liste von Links zu allen Unterseiten eines Dokuments einzufügen.

## Listen von Links

MDN bietet Makros, die eine Liste von Links erstellen:

- [`\{{SubpagesWithSummaries}}`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/subpages_with_summaries.rs)
  - : Fügt eine Definitionsliste ({{HTMLElement("dl")}}) der Unterseiten der aktuellen Seite ein, wobei der Titel jeder Seite als {{HTMLElement("dt")}} Begriff und der erste Absatz als {{HTMLElement("dd")}} Begriff verwendet wird.

- [`\{{ListSubpagesForSidebar()}}`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/list_subpages_for_sidebar.rs)
  - : Wenn ohne Parameter eingefügt, wird eine geordnete Liste von Links zu den Unterseiten der aktuellen Seite eingefügt. Der erste Parameter ist ein Slug der übergeordneten Seite des Linkbaums. Der Linktext wird als Code angezeigt. Wenn ein zweiter Parameter auf `true` oder `1` gesetzt wird, werden die Links in einfachen Text konvertiert. Wenn ein dritter Parameter auf `true` oder `1` gesetzt wird, wird am Anfang der Liste ein Link zur übergeordneten (Slug-)Seite mit "Übersicht" als Linktext eingefügt.

- [`\{{QuickLinksWithSubpages()}}`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/quick_links_with_subpages.rs)
  - : Erstellt eine Reihe von Schnelllinks, die die Kinder der aktuellen Seite (oder der angegebenen Seite) als Ziel verwenden. Es werden hierarchische Listen bis zu zwei Ebenen tief erstellt. Die Titel der Seiten werden als Linktext verwendet und ihre Zusammenfassungen als Tooltips.

### Beispiel-Linkliste

Um eine geordnete Liste von Links zu erstellen, die diese Seite und ihre Geschwister enthält, schreiben Sie Folgendes:

```md
\{{ListSubpagesForSidebar("/en-US/docs/MDN/Writing_guidelines/Page_structures/Macros", 1)}}
```

## Querverweis-Links

Einige Makros erstellen einen einzelnen Link, um auf eine CSS-, JavaScript-, SVG- oder HTML-Funktion zu verweisen, einschließlich Attribute, Elemente, Eigenschaften, Datentypen und APIs. Die Makros, die einzelne Links erstellen, benötigen mindestens einen Parameter: die Funktion, auf die verwiesen wird.

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

Der erste Parameter jedes dieser Makros ist der letzte Abschnitt des Slugs des Dokuments, auf das verwiesen wird. Zum Beispiel, bei HTML-Elementen, fügen Sie `\{{HTMLElement("")}}` mit dem Teil des Slugs ein, der nach `Web/HTML/Reference/Elements/` im Slug folgt, als erster Parameter. Mit `\{{CSSxRef("")}}`, fügen Sie den Teil des Slugs ein, der nach `Web/CSS/` im Slug erscheint. Der Link führt zu dieser Seite.

Standardmäßig wird der angezeigte Text als die verlinkte Ressource so angezeigt, wie im ersten Parameter geschrieben, bei `\{{HTMLElement()}}` in spitzen Klammern. Das ist möglicherweise nicht das, was Sie möchten. Beispielsweise ist der Slug für den Eingabetyp "range" `Web/HTML/Reference/Elements/input/range`. Das Einfügen von `\{{HTMLElement("input/range")}}` ergibt "{{HTMLElement("input/range")}}". Das ist nicht das, was Sie möchten. Alle Makros akzeptieren zusätzliche Parameter, sodass Sie den Text angeben können, den Sie anzeigen möchten.

Der zweite Parameter, falls vorhanden, liefert den Linktext. Im Fall des Eingaberange würden wir `\{{HTMLElement("input/range", "<code>&lt;input type=&quot;range&quot;&gt;</code>")}}` schreiben, was "{{HTMLElement("input/range", "<code>&lt;input type=&quot;range&quot;&gt;</code>")}}" ergibt. Dieses spezielle Makro entfernt die {{htmlelement("code")}} und die spitzen Klammern, wenn der zweite Parameter ein Leerzeichen enthält, daher haben wir die Klammern und Code-Tags hinzugefügt.

Jedes Makro ist unterschiedlich!

Um die HTML-Code-Semantik und CSS-Code-Styling zu verhindern, enthalten einige Querverweis-Makros einen Parameter mit `"nocode"`, um dieses Styling zu deaktivieren.

Beispielsweise erstellt `\{{CSSxRef("background-color")}}` den Code-Link "{{CSSxRef("background-color")}}" und `\{{domxref("CSS.supports_static", "check support", "", "nocode")}}` erstellt den einfachen Textlink "[check support](/de/docs/Web/API/CSS/supports_static)".

Stellen Sie sicher, dass Sie sich den Quellcode ansehen, um zu verstehen, wie das Makro, das Sie verwenden, funktioniert und um die verschiedenen Parameter zu verstehen; obwohl die Parameter im Allgemeinen gut dokumentiert sind, sind Ausnahmen wie "nicht als Code rendern, wenn der zweite Parameter ein Leerzeichen enthält", die wir im `\{{HTMLElement("")}}` Makro gesehen haben, im Code, aber sonst nicht dokumentiert.

Um zu erfahren, welche Parameter jedes Makro unterstützt und die Reihenfolge der Parameter für jedes Makro, enthält die oben verlinkte Quelldatei des Makros die Dokumentation. Es gibt eine [Liste häufig verwendeter Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros), von denen jedes Links im Hauptinhaltsbereich der Seite ausgibt.

## Siehe auch

- [Verwendung von Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Macros)
- [Häufig verwendete Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros), einschließlich BCD-Makros (`\{{Compat}}`) und Spezifikationsmakros (`\{{Specifications}}`).
- [Leitfaden für Banner und Hinweise](/de/docs/MDN/Writing_guidelines/Page_structures/Banners_and_notices) einschließlich der Makros `\{{SeeCompatTable}}`, `\{{Deprecated_Header}}` und `\{{SecureContext_Header}}`.
