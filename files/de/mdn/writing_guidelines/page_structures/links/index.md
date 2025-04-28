---
title: Link-Makros
slug: MDN/Writing_guidelines/Page_structures/Links
l10n:
  sourceCommit: c6cab7f1aa7dc9f3495486a5b46020db320101cf
---

MDN stellt zahlreiche Makros zur Verfügung, um immer aktuelle Links zu MDN-Inhalten zu erstellen. In diesem Leitfaden erfahren Sie mehr über MDN-Cross-Reference-Makros, die Sie verwenden können, um einen einzelnen Link zu einer anderen Seite oder eine Liste von Links zu allen Unterseiten eines Dokuments einzufügen.

## Listen von Links

MDN bietet Makros, die eine Liste von Links erstellen:

- [`\{{SubpagesWithSummaries}}`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/subpages_with_summaries.rs)

  - : Fügt eine Definitionsliste ({{HTMLElement("dl")}}) der Unterseiten der aktuellen Seite ein, wobei der Titel jeder Seite als {{HTMLElement("dt")}}-Begriff und der erste Absatz als {{HTMLElement("dd")}}-Begriff dient.

- [`\{{ListSubpagesForSidebar()}}`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/list_subpages_for_sidebar.rs)

  - : Wenn ohne Parameter eingebunden, fügt eine geordnete Liste von Links zu den Unterseiten der aktuellen Seite ein. Der erste Parameter ist ein Slug der übergeordneten Seite des Linkbaums. Der Linktext wird als Code angezeigt. Wird ein zweiter Parameter auf `true` oder `1` gesetzt, werden die Links in einfachen Text umgewandelt. Ein dritter Parameter auf `true` oder `1` fügt einen Link zur übergeordneten Seite (Slug) am Anfang der Liste mit "Übersicht" als Linktext hinzu.

- [`\{{QuickLinksWithSubpages()}}`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/quick_links_with_subpages.rs)

  - : Erzeugt eine Reihe von Schnelllinks mit den Kindern der aktuellen Seite (oder einer angegebenen Seite) als Ziele. Dies erstellt hierarchische Listen bis zu zwei Ebenen tief. Die Titel der Seiten werden als Linktext verwendet und ihre Zusammenfassungen als Tooltips.

### Beispiel-Linkliste

Um eine geordnete Liste von Links einzufügen, die diese Seite und ihre Geschwister enthält, schreiben Sie folgendes:

```md
\{{ListSubpagesForSidebar("/en-US/docs/MDN/Writing_guidelines/Page_structures/Macros", 1)}}
```

## Cross-Reference-Links

Einige Makros erstellen einen einzelnen Link, um ein CSS-, JavaScript-, SVG- oder HTML-Feature zu referenzieren, einschließlich Attribute, Elemente, Eigenschaften, Datentypen und APIs. Die Makros, die einzelne Links erstellen, benötigen mindestens einen Parameter: das referenzierte Feature.

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

Der erste Parameter jedes dieser Makros ist der letzte Abschnitt des Slugs des referenzierten Dokuments. Zum Beispiel, für HTML-Elemente, fügen Sie `\{{HTMLElement("")}}` mit dem Teil des Slugs, der nach `Web/HTML/Reference/Elements/` kommt, als ersten Parameter ein. Bei `\{{CSSxRef("")}}` fügen Sie den Teil des Slugs hinzu, der nach `Web/CSS/` im Slug kommt. Der Link wird auf diese Seite verweisen.

Standardmäßig wird der als erster Parameter angegebene verlinkte Ressourcenname als Anzeigetext verwendet, im Fall von `\{{HTMLElement()}}` in spitzen Klammern. Dies ist möglicherweise nicht das, was Sie möchten. Zum Beispiel, der Slug für den Bereichseingabetyp ist `Web/HTML/Reference/Elements/input/range`. Das Einfügen von `\{{HTMLElement("input/range")}}` ergibt "{{HTMLElement("input/range")}}". Das ist nicht, was Sie wollen. Alle Makros akzeptieren zusätzliche Parameter, sodass Sie den Text angeben können, den Sie anzeigen möchten.

Der zweite Parameter, falls vorhanden, gibt den Linktext an. Im Fall des Bereicheingabetypen würden wir `\{{HTMLElement("input/range", "<code>&lt;input type=&quot;range&quot;&gt;</code>")}}` schreiben, was "{{HTMLElement("input/range", "<code>&lt;input type=&quot;range&quot;&gt;</code>")}}" ergibt. Dieses spezielle Makro entfernt das {{htmlelement("code")}} und die spitzen Klammern, wenn der zweite Parameter ein Leerzeichen enthält, daher haben wir die Klammern und Code-Tags hinzugefügt.

Jedes Makro ist verschieden!

Um HTML-Code-Semantik und CSS-Code-Styling zu verhindern, enthalten einige Cross-Reference-Makros einen Parameter mit dem `"nocode"`, um dieses Styling zu deaktivieren.

Zum Beispiel, `\{{CSSxRef("background-color")}}` erzeugt den Code-Link "{{CSSxRef("background-color")}}" und `\{{domxref("CSS.supports_static", "check support", "", "nocode")}}` erzeugt den Klartext-Link "[check support](/de/docs/Web/API/CSS/supports_static)".

Stellen Sie sicher, dass Sie sich den Quellcode ansehen, um zu verstehen, wie das Makro, das Sie verwenden, funktioniert und um die verschiedenen Parameter zu verstehen; während die Parameter im Allgemeinen gut dokumentiert sind, existieren Ausnahmen wie "nicht als Code darstellen, wenn der zweite Parameter ein Leerzeichen enthält", die wir im `\{{HTMLElement("")}}`-Makro gesehen haben, im Code, sind aber anderweitig nicht dokumentiert.

Um zu erfahren, welche Parameter jedes Makro unterstützt und die Reihenfolge der Parameter für jedes Makro, enthält die oben verlinkte Quelldatei des Makros Dokumentation. Es gibt eine [Liste häufig verwendeter Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros), die Links im Hauptinhalt des Seitenbereichs ausgibt.

## Siehe auch

- [Verwendung von Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Macros)
- [Häufig verwendete Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros), einschließlich BCD-Makros (`\{{Compat}}`) und Spezifikationsmakros (`\{{Specifications}}`).
- [Leitfaden für Banner und Hinweise](/de/docs/MDN/Writing_guidelines/Page_structures/Banners_and_notices) einschließlich der Makros `\{{SeeCompatTable}}`, `\{{Deprecated_Header}}` und `\{{SecureContext_Header}}`.
