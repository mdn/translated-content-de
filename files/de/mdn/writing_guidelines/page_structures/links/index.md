---
title: Link-Makros
slug: MDN/Writing_guidelines/Page_structures/Links
l10n:
  sourceCommit: 269fa421f0a79b18f6000a26baebe30c74571b1f
---

MDN bietet zahlreiche Makros, um stets aktuelle Links zu MDN-Inhalten zu erstellen. In diesem Leitfaden erfahren Sie mehr über MDN-Referenz-Makros, die Sie verwenden können, um entweder einen einzelnen Link zu einer anderen Seite oder eine Liste von Links zu allen Unterseiten eines Dokuments einzufügen.

## Listen von Links

MDN bietet Makros, die eine Liste von Links erstellen:

- [`\{{SubpagesWithSummaries}}`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/subpages_with_summaries.rs)

  - : Fügt eine Definitionsliste ({{HTMLElement("dl")}}) der Unterseiten der aktuellen Seite ein, wobei der Titel jeder Seite als {{HTMLElement("dt")}}-Begriff und ihr erster Absatz als {{HTMLElement("dd")}}-Begriff verwendet wird.

- [`\{{ListSubpagesForSidebar()}}`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/list_subpages_for_sidebar.rs)

  - : Wenn ohne Parameter eingefügt, wird eine geordnete Liste von Links zu den Unterseiten der aktuellen Seite eingefügt. Dieses Makro wird am häufigsten in [Sidebars](/de/docs/MDN/Writing_guidelines/Page_structures/Sidebars) verwendet (daher der Name des Makros), wo die Aufzählungszeichen nicht angezeigt werden. Der erste Parameter ist ein Slug der übergeordneten Seite des Link-Trees. Der Linktext wird als Code angezeigt. Wenn der zweite Parameter auf `true` oder `1` gesetzt ist, werden die Links in normalen Text umgewandelt. Ein dritter Parameter, der auf `true` oder `1` gesetzt ist, fügt einen Link zur übergeordneten (Slug-)Seite oben in der Liste hinzu, wobei "Übersicht" als Linktext verwendet wird.

- [`\{{QuickLinksWithSubpages()}}`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/quick_links_with_subpages.rs)

  - : Erstellt eine Reihe von Quicklinks unter Verwendung der Unterseiten der aktuellen Seite (oder der angegebenen Seite) als Ziele. Dies erstellt hierarchische Listen mit bis zu zwei Ebenen. Die Titel der Seiten werden als Linktext verwendet, und ihre Zusammenfassungen dienen als Tooltips.

### Beispiel für eine Linkliste

Um eine geordnete Liste von Links einzufügen, die diese Seite und ihre Schwesterseiten enthält, schreiben Sie Folgendes:

```md
\{{ListSubpagesForSidebar("/en-US/docs/MDN/Writing_guidelines/Page_structures/Macros", 1)}}
```

Dies erzeugt:

{{ListSubpagesForSidebar("/de/docs/MDN/Writing_guidelines/Page_structures/Macros", 1)}}

## Querverweis-Links

Einige Makros erstellen einen einzelnen Link, um auf eine Funktion von CSS, JavaScript, SVG oder HTML zu verweisen, einschließlich Attribute, Elemente, Eigenschaften, Datentypen und APIs. Die Makros, die einzelne Links erstellen, erfordern mindestens einen Parameter: die referenzierte Funktion.

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

Der erste Parameter jedes dieser Makros ist der letzte Abschnitt des Slugs des referenzierten Dokuments. Zum Beispiel für HTML-Elemente verwenden Sie `\{{HTMLElement("")}}`, wobei der Teil des Slugs, der nach `Web/HTML/Element/` kommt, als erster Parameter eingefügt wird. Bei `\{{CSSxRef("")}}` fügen Sie den Teil des Slugs ein, der nach `Web/CSS/` kommt. Der Link führt zu dieser Seite.

Standardmäßig wird der Text, der angezeigt wird, als die verlinkte Ressource angegeben, wie im ersten Parameter geschrieben, für `\{{HTMLElement()}}` in spitzen Klammern. Das ist möglicherweise nicht das, was Sie möchten. Zum Beispiel ist der Slug für den Eingabetyp "range" `Web/HTML/Element/input/range`. Der Einschluss von `\{{HTMLElement("input/range")}}` ergibt "{{HTMLElement("input/range")}}". Das ist nicht, was Sie möchten. Alle Makros akzeptieren zusätzliche Parameter, sodass Sie den anzuzeigenden Text selbst festlegen können.

Der zweite Parameter, falls vorhanden, gibt den Linktext an. Im Fall des Eingabetyps "range" würden wir schreiben: `\{{HTMLElement("input/range", "<code>&lt;input type=&quot;range&quot;&gt;</code>")}}`, was "{{HTMLElement("input/range", "<code>&lt;input type=&quot;range&quot;&gt;</code>")}}" ergibt. Dieses spezielle Makro entfernt die {{htmlelement("code")}}- und spitzen Klammern, wenn der zweite Parameter ein Leerzeichen enthält, also haben wir die Klammern und Code-Tags hinzugefügt.

Jedes Makro ist unterschiedlich!

Um HTML-Code-Semantik und CSS-Code-Styling zu verhindern, enthalten einige Querverweis-Makros einen Parameter mit `"nocode"`, um dieses Styling zu deaktivieren.

Zum Beispiel erzeugt `\{{CSSxRef("background-color")}}` den Code-Link "{{CSSxRef("background-color")}}" und `\{{domxref("CSS.supports_static", "check support", "", "nocode")}}` den einfachen Text-Link "[check support](/de/docs/Web/API/CSS/supports_static)".

Schauen Sie sich unbedingt den Quellcode an, um zu verstehen, wie das Makro funktioniert, das Sie verwenden, und um die verschiedenen Parameter zu verstehen. Während die Parameter im Allgemeinen gut dokumentiert sind, befinden sich Ausnahmen wie "nicht als Code rendern, wenn der zweite Parameter ein Leerzeichen enthält", die wir im Makro `\{{HTMLElement("")}}` gesehen haben, im Code, sind jedoch sonst nicht dokumentiert.

Um zu erfahren, welche Parameter jedes Makro unterstützt und die Reihenfolge der Parameter jedes Makros, enthält die oben verlinkte Quelldatei des Makros die Dokumentation. Es gibt eine [Liste der häufig verwendeten Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros), von denen jede Links im Hauptinhalt der Seite ausgibt.

## Siehe auch

- [Verwendung von Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Macros)
- [Häufig verwendete Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros), einschließlich BCD-Makros (`\{{Compat}}`, `\{{Compat(&lt;feature>)}}` und `\{{Compat(&lt;feature>, &lt;depth>)}}`) und Spezifikations-Makros (`\{{Specifications}}` / `\{{Specifications(&lt;feature>)}}`)
- [Leitfaden zu Bannern und Hinweisen](/de/docs/MDN/Writing_guidelines/Page_structures/Banners_and_notices), einschließlich der Makros `\{{SeeCompatTable}}`, `\{{Deprecated_Header}}` und `\{{SecureContext_Header}}`.
