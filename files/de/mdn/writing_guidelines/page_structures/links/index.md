---
title: Link-Makros
slug: MDN/Writing_guidelines/Page_structures/Links
l10n:
  sourceCommit: 514d1d2690c6374cd65921193ff6b166677395fd
---

{{MDNSidebar}}

MDN bietet zahlreiche Makros, um stets aktuelle Links zu MDN-Inhalten zu erstellen. In diesem Leitfaden erfahren Sie mehr über die MDN-Kreuzreferenz-Makros, die Sie verwenden können, um einen einzelnen Link zu einer anderen Seite oder eine Liste von Links zu allen Unterseiten eines Dokuments einzufügen.

## Listen von Links

MDN bietet Makros, die eine Liste von Links erstellen:

- [`\{{SubpagesWithSummaries}}`](https://github.com/mdn/yari/blob/main/kumascript/macros/SubpagesWithSummaries.ejs)

  - : Fügt eine Definitionsliste ({{HTMLElement("dl")}}) der Unterseiten der aktuellen Seite ein, wobei der Titel jeder Seite als {{HTMLElement("dt")}} Begriff und der erste Absatz als {{HTMLElement("dd")}} Begriff verwendet wird.

- [`\{{ListSubpagesForSidebar()}}`](https://github.com/mdn/yari/blob/main/kumascript/macros/ListSubpagesForSidebar.ejs)

  - : Wenn ohne Parameter eingefügt, wird eine geordnete Liste von Links zu den Unterseiten der aktuellen Seite eingefügt. Dieses Makro wird am häufigsten in [Seitenleisten](/de/docs/MDN/Writing_guidelines/Page_structures/Sidebars) verwendet (daher der Name des Makros), wo die Aufzählungszeichen nicht angezeigt werden. Der erste Parameter ist ein Slug der übergeordneten Seite des Link-Baums. Der Linktext wird als Code angezeigt. Durch Setzen eines zweiten Parameters auf `true` oder `1` werden die Links in einfachen Text umgewandelt. Durch Setzen eines dritten Parameters auf `true` oder `1` wird ein Link zur übergeordneten (Slug-) Seite an der Spitze der Liste mit "Übersicht" als Linktext hinzugefügt.

- [`\{{QuickLinksWithSubpages()}}`](https://github.com/mdn/yari/blob/main/kumascript/macros/QuickLinksWithSubpages.ejs)

  - : Erstellt eine Reihe von Schnellverknüpfungen, wobei die Kinder der aktuellen (oder der angegebenen) Seite als Ziele verwendet werden. Dies erzeugt hierarchische Listen bis zu zwei Ebenen tief. Die Titel der Seiten werden als Linktext verwendet und ihre Zusammenfassungen als Tooltips.

### Beispiel-Linkliste

Um eine geordnete Liste von Links einzufügen, die diese Seite und ihre Geschwister enthält, schreiben Sie Folgendes:

```md
\{{ListSubpagesForSidebar("/en-US/docs/MDN/Writing_guidelines/Page_structures/Macros", 1)}}
```

Dies erzeugt:

{{ListSubpagesForSidebar("/de/docs/MDN/Writing_guidelines/Page_structures/Macros", 1)}}

## Kreuzreferenz-Links

Einige Makros erstellen einen einzelnen Link, um auf ein CSS-, JavaScript-, SVG- oder HTML-Feature zu verweisen, einschließlich Attribute, Elemente, Eigenschaften, Datentypen und APIs. Die Makros, die einzelne Links erstellen, erfordern mindestens einen Parameter: das angesprochene Feature.

Diese Makros sind:

- [`\{{CSSxRef("")}}`](https://github.com/mdn/yari/blob/main/kumascript/macros/cssxref.ejs)
- [`\{{DOMxRef("")}}`](https://github.com/mdn/yari/blob/main/kumascript/macros/DOMxRef.ejs)
- [`\{{HTMLElement("")}}`](https://github.com/mdn/yari/blob/main/kumascript/macros/HTMLElement.ejs)
- [`\{{glossary("")}}`](https://github.com/mdn/yari/blob/main/kumascript/macros/Glossary.ejs)
- [`\{{JSxRef("")}}`](https://github.com/mdn/yari/blob/main/kumascript/macros/jsxref.ejs)
- [`\{{SVGAttr("")}}`](https://github.com/mdn/yari/blob/main/kumascript/macros/SVGAttr.ejs)
- [`\{{SVGElement("")}}`](https://github.com/mdn/yari/blob/main/kumascript/macros/SVGElement.ejs)
- [`\{{HTTPMethod("")}}`](https://github.com/mdn/yari/blob/main/kumascript/macros/HTTPMethod.ejs)
- [`\{{HTTPStatus("")}}`](https://github.com/mdn/yari/blob/main/kumascript/macros/HTTPStatus.ejs)

Der erste Parameter jedes dieser Makros ist der letzte Abschnitt des Slugs des referenzierten Dokuments. Zum Beispiel, für HTML-Elemente, verwenden Sie `\{{HTMLElement("")}}` mit dem Teil des Slugs, der nach `Web/HTML/Element/` kommt, als ersten Parameter. Bei `\{{CSSxRef("")}}` fügen Sie den Teil des Slugs hinzu, der nach `Web/CSS/` kommt. Der Link wird zu dieser Seite führen.

Standardmäßig wird der im ersten Parameter angegebene, verlinkte Ressourcenname im Text angezeigt, im Fall von `\{{HTMLElement()}}` in spitzen Klammern. Dies ist möglicherweise nicht das, was Sie möchten. Zum Beispiel lautet der Slug für den Eingabetyp `range` `Web/HTML/Element/input/range`. Bei der Verwendung von `\{{HTMLElement("input/range")}}` wird " {{HTMLElement("input/range")}} " erzeugt. Das ist nicht das, was Sie möchten. Alle Makros akzeptieren zusätzliche Parameter, sodass Sie den Text angeben können, den Sie anzeigen möchten.

Der zweite Parameter, falls vorhanden, liefert den Linktext. Im Fall des Eingabebereichs würden wir `\{{HTMLElement("input/range", "<code>&lt;input type=&quot;range&quot;&gt;</code>")}}` schreiben, was "{{HTMLElement("input/range", "<code>&lt;input type=&quot;range&quot;&gt;</code>")}}" ergibt. Dieses spezielle Makro entfernt das {{htmlelement("code")}} und die spitzen Klammern, wenn der zweite Parameter ein Leerzeichen enthält, daher haben wir die Klammern und Code-Tags hinzugefügt.

Jedes Makro ist anders!

Um HTML-Code-Semantik und CSS-Code-Styling zu verhindern, enthalten einige Kreuzreferenz-Makros einen Parameter mit `"nocode"` um dieses Styling zu deaktivieren.

Zum Beispiel erzeugt `\{{CSSxRef("background-color")}}` den Code-Link "{{CSSxRef("background-color")}}" und `\{{domxref("CSS.supports_static", "check support", "", "nocode")}}` erstellt den Textlink "[check support](/de/docs/Web/API/CSS/supports_static)".

Stellen Sie sicher, dass Sie den Quellcode untersuchen, um zu verstehen, wie das von Ihnen verwendete Makro funktioniert und welche verschiedenen Parameter es gibt. Während die Parameter im Allgemeinen gut dokumentiert sind, existieren Ausnahmen wie "nicht als Code rendern, wenn der zweite Parameter ein Leerzeichen enthält", die wir im `\{{HTMLElement("")}}` Makro gesehen haben, im Code, aber nicht anderweitig dokumentiert.

Um zu erfahren, welche Parameter jedes Makro unterstützt und die Reihenfolge der Parameter für jedes Makro, enthält die oben verlinkte Makro-Quelldatei eine Dokumentation. Es gibt eine [Liste häufig verwendeter Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros), von denen jedes Links im Hauptinhaltsbereich der Seite ausgibt.

## Siehe auch

- [Verwendung von Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Macros)
- [Makros](https://github.com/mdn/yari/tree/main/kumascript/macros) auf GitHub
- [Häufig verwendete Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros), einschließlich BCD-Makros (`\{{Compat}}`, `\{{Compat(&lt;feature>)}}` und `\{{Compat(&lt;feature>, &lt;depth>)}}`) und Spezifikationsmakros (`\{{Specifications}}` / `\{{Specifications(&lt;feature>)}}`)
- [Banner- und Hinweis-Leitfaden](/de/docs/MDN/Writing_guidelines/Page_structures/Banners_and_notices) einschließlich der Makros `\{{SeeCompatTable}}`, `\{{Deprecated_Header}}` und `\{{SecureContext_Header}}`.
