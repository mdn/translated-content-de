---
title: Link-Makros
slug: MDN/Writing_guidelines/Page_structures/Links
l10n:
  sourceCommit: 7e97f3c5ada65b6638909bde92881a4b8d46a2b8
---

{{MDNSidebar}}

MDN bietet zahlreiche Makros, um stets aktuelle Links zu MDN-Inhalten zu erstellen. In diesem Leitfaden lernen Sie die MDN-Querverweis-Makros kennen, die Sie verwenden können, um einen einzelnen Link zu einer anderen Seite oder eine Liste von Links zu allen Unterseiten eines Dokuments einzufügen.

## Listen von Links

MDN bietet Makros, die eine Liste von Links erstellen:

- [`\{{LandingPageListSubPages}}`](https://github.com/mdn/yari/blob/main/kumascript/macros/LandingPageListSubpages.ejs)

  - : Fügt eine Definitionsliste ({{HTMLElement("dl")}}) der Unterseiten der aktuellen Seite ein, mit dem Titel jeder Seite als {{HTMLElement("dt")}}-Begriff und dem ersten Absatz als {{HTMLElement("dd")}}-Begriff.

- [`\{{ListSubpagesForSidebar()}}`](https://github.com/mdn/yari/blob/main/kumascript/macros/ListSubpagesForSidebar.ejs)

  - : Wenn ohne Parameter eingefügt, wird eine geordnete Liste von Links zu den Unterseiten der aktuellen Seite eingefügt. Dieses Makro wird meist innerhalb von [Sidebars](/de/docs/MDN/Writing_guidelines/Page_structures/Sidebars) verwendet (daher der Makroname), bei denen die Aufzählungspunkte nicht dargestellt werden. Der erste Parameter ist ein Slug der übergeordneten Seite des Linkbaums. Der Linktext wird als Code angezeigt. Wenn ein zweiter Parameter auf `true` oder `1` gesetzt ist, werden die Links in Klartext konvertiert. Ein dritter Parameter auf `true` oder `1` fügt einen Link zur Slug-Seite (übergeordnet) oben in der Liste mit "Übersicht" als Linktext hinzu.

- [`\{{QuickLinksWithSubpages()}}`](https://github.com/mdn/yari/blob/main/kumascript/macros/QuickLinksWithSubpages.ejs)

  - : Erstellt eine Reihe von Schnelllinks mit den Kindern der aktuellen (oder der angegebenen) Seite als Ziele. Dies erstellt hierarchische Listen bis zu zwei Ebenen tief. Die Titel der Seiten werden als Linktext verwendet, und ihre Zusammenfassungen als Tooltips.

### Beispiel-Linkliste

Um eine geordnete Liste von Links, die diese Seite und ihre Geschwister enthält, einzufügen, schreiben Sie Folgendes:

```md
\{{ListSubpagesForSidebar("/en-US/docs/MDN/Writing_guidelines/Page_structures/Macros", 1)}}
```

Dies ergibt:

{{ListSubpagesForSidebar("/de/docs/MDN/Writing_guidelines/Page_structures/Macros", 1)}}

## Querverweis-Links

Einige Makros erstellen einen einzelnen Link, um auf eine CSS-, JavaScript-, SVG- oder HTML-Funktion zu verweisen, einschließlich Attribute, Elemente, Eigenschaften, Datentypen und APIs. Die Makros, die einzelne Links erstellen, erfordern mindestens einen Parameter: die referenzierte Funktion.

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

Der erste Parameter jedes dieser Makros ist der letzte Abschnitt des Slugs des referenzierten Dokuments. Zum Beispiel, für HTML-Elemente, schließen Sie `\{{HTMLElement("")}}` mit dem Teil des Slugs ein, der nach `Web/HTML/Element/` kommt, wobei der erste Parameter ist. Mit `\{{CSSxRef("")}}` fügen Sie den Teil des Slugs hinzu, der nach `Web/CSS/` kommt. Der Link führt zu dieser Seite.

Standardmäßig wird als angezeigter Text die verlinkte Ressource so angezeigt, wie sie im ersten Parameter geschrieben ist, in spitzen Klammern im Falle von `\{{HTMLElement()}}`. Das ist möglicherweise nicht das, was Sie wollen. Der Slug für das Input-Range-Typ-Feld ist beispielsweise `Web/HTML/Element/input/range`. Das Einschließen von `\{{HTMLElement("input/range")}}` erzeugt "{{HTMLElement("input/range")}}". Das ist nicht das, was Sie wollen. Alle Makros akzeptieren zusätzliche Parameter, sodass Sie den gewünschten Text angeben können.

Der zweite Parameter, sofern vorhanden, liefert den Linktext. Im Fall des Input-Range würden wir `\{{HTMLElement("input/range", "<code>&lt;input type=&quot;range&quot;&gt;</code>")}}` schreiben, was "{{HTMLElement("input/range", "<code>&lt;input type=&quot;range&quot;&gt;</code>")}}" produziert. Dieses spezielle Makro entfernt die {{htmlelement("code")}} und die spitzen Klammern, wenn der zweite Parameter ein Leerzeichen enthält, sodass wir die Klammern und Code-Tags hinzugefügt haben.

Jedes Makro ist anders!

Um HTML-Code-Semantik und CSS-Code-Styling zu verhindern, beinhalten einige Querverweis-Makros einen Parameter mit "nocode", um dieses Styling zu deaktivieren.

Zum Beispiel erstellt `\{{CSSxRef("background-color")}}` den Code-Link "{{CSSxRef("background-color")}}" und `\{{domxref("CSS.supports_static", "check support", "", "nocode")}}` erstellt den Klartext-Link "[check support](/de/docs/Web/API/CSS/supports_static)".

Achten Sie darauf, den Quellcode zu betrachten, um zu verstehen, wie das von Ihnen verwendete Makro funktioniert, und um die verschiedenen Parameter zu verstehen; während die Parameter im Allgemeinen gut dokumentiert sind, finden sich Ausnahmen wie "nicht als Code rendern, wenn der zweite Parameter ein Leerzeichen enthält" im `\{{HTMLElement("")}}`-Makro im Code, aber nicht anderweitig dokumentiert.

Um zu erfahren, welche Parameter jedes Makro unterstützt und die Reihenfolge der Parameter für jedes Makro, enthält die oben verlinkte Quelldatei des Makros eine Dokumentation. Es gibt eine [Liste der häufig verwendeten Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros), von denen jedes Links im Hauptinhalt der Seite ausgibt.

## Siehe auch

- [Verwendung von Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Macros)
- [Makros](https://github.com/mdn/yari/tree/main/kumascript/macros) auf GitHub
- [Häufig verwendete Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros), einschließlich BCD-Makros ( `\{{Compat}}`, `\{{Compat(&lt;feature>)}}`, und `\{{Compat(&lt;feature>, &lt;depth>)}}`) und Spezifikationsmakros (`\{{Specifications}}` / `\{{Specifications(&lt;feature>)}}`)
- [Leitfaden zu Bannern und Hinweisen](/de/docs/MDN/Writing_guidelines/Page_structures/Banners_and_notices) einschließlich der `\{{SeeCompatTable}}`, `\{{Deprecated_Header}}`, und `\{{SecureContext_Header}}` Makros.
