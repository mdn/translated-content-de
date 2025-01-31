---
title: Link-Makros
slug: MDN/Writing_guidelines/Page_structures/Links
l10n:
  sourceCommit: 719645a32546d9e514ac530a5eb66aa4c26d4f51
---

MDN bietet zahlreiche Makros, um stets aktuelle Links zu MDN-Inhalten zu erstellen. In diesem Leitfaden lernen Sie MDN-Querverweis-Makros kennen, mit denen Sie entweder einen einzigen Link zu einer anderen Seite oder eine Liste von Links zu allen Unterseiten eines Dokuments einfügen können.

## Listen von Links

MDN bietet Makros, die eine Liste von Links erstellen:

- [`\{{SubpagesWithSummaries}}`](https://github.com/mdn/yari/blob/main/kumascript/macros/SubpagesWithSummaries.ejs)

  - : Fügt eine Definitionsliste ({{HTMLElement("dl")}}) der Unterseiten der aktuellen Seite ein, wobei der Titel jeder Seite als {{HTMLElement("dt")}}-Begriff und der erste Absatz als {{HTMLElement("dd")}}-Begriff verwendet wird.

- [`\{{ListSubpagesForSidebar()}}`](https://github.com/mdn/yari/blob/main/kumascript/macros/ListSubpagesForSidebar.ejs)

  - : Fügt, wenn es ohne Parameter eingeschlossen wird, eine geordnete Liste von Links zu den Unterseiten der aktuellen Seite ein. Dieses Makro wird am häufigsten innerhalb von [Seitenleisten](/de/docs/MDN/Writing_guidelines/Page_structures/Sidebars) verwendet (daher der Makroname), wobei die Aufzählungszeichen nicht dargestellt werden. Der erste Parameter ist ein Slug der übergeordneten Seite des Link-Baums. Der Linktext wird als Code angezeigt. Wenn ein zweiter Parameter auf `true` oder `1` gesetzt wird, werden die Links in einfachen Text umgewandelt. Wird ein dritter Parameter auf `true` oder `1` gesetzt, wird ein Link zur Slug-Seite (Eltern) oben in der Liste mit "Überblick" als Linktext hinzugefügt.

- [`\{{QuickLinksWithSubpages()}}`](https://github.com/mdn/yari/blob/main/kumascript/macros/QuickLinksWithSubpages.ejs)

  - : Erstellt eine Reihe von Schnelllinks, die die Kinder der aktuellen Seite (oder der angegebenen Seite) als Ziele nutzen. Dies erstellt hierarchische Listen bis zu zwei Ebenen tief. Die Titel der Seiten werden als Linktext und ihre Zusammenfassungen als Tooltips verwendet.

### Beispiel Linkliste

Um eine geordnete Liste von Links zu erstellen, die diese Seite und ihre Geschwister umfasst, verwenden Sie Folgendes:

```md
\{{ListSubpagesForSidebar("/en-US/docs/MDN/Writing_guidelines/Page_structures/Macros", 1)}}
```

Dies erzeugt:

{{ListSubpagesForSidebar("/de/docs/MDN/Writing_guidelines/Page_structures/Macros", 1)}}

## Querverweis-Links

Einige Makros erstellen einen einzelnen Link, um auf ein CSS-, JavaScript-, SVG- oder HTML-Feature zu verweisen, einschließlich Attribute, Elemente, Eigenschaften, Datentypen und APIs. Die Makros, die einzelne Links erstellen, erfordern mindestens einen Parameter: das referenzierte Feature.

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

Der erste Parameter jedes dieser Makros ist der letzte Abschnitt des Slugs des referenzierten Dokuments. Zum Beispiel für HTML-Elemente, fügen Sie `\{{HTMLElement("")}}` ein, wobei der Teil des Slugs, der nach `Web/HTML/Element/` kommt, der erste Parameter ist. Bei `\{{CSSxRef("")}}`, fügen Sie den Teil des Slugs ein, der nach `Web/CSS/` kommt. Der Link wird auf diese Seite verweisen.

Standardmäßig wird der Text des verlinkten Ressourcen als im ersten Parameter geschrieben angezeigt, in spitzen Klammern im Fall von `\{{HTMLElement()}}`. Dies ist möglicherweise nicht das, was Sie wollen. Der Slug für den Eingabetyp „range“ ist zum Beispiel `Web/HTML/Element/input/range`. Das Einfügen von `\{{HTMLElement("input/range")}}` ergibt "{{HTMLElement("input/range")}}". Das ist nicht das, was Sie wollen. Alle Makros akzeptieren zusätzliche Parameter, damit Sie den Text angeben können, den Sie anzeigen möchten.

Der zweite Parameter, falls vorhanden, bietet den Linktext. Im Fall des Eingabebereichs würden wir `\{{HTMLElement("input/range", "<code>&lt;input type=&quot;range&quot;&gt;</code>")}}` schreiben, was "{{HTMLElement("input/range", "<code>&lt;input type=&quot;range&quot;&gt;</code>")}}" produziert. Dieses spezielle Makro entfernt die {{htmlelement("code")}}- und spitzen Klammern, wenn der zweite Parameter ein Leerzeichen enthält, daher haben wir die Klammern und Code-Tags hinzugefügt.

Jedes Makro ist anders!

Um HTML-Code-Semantiken und CSS-Code-Styling zu verhindern, beinhalten einige Querverweis-Makros einen Parameter mit dem `"nocode"`, um dieses Styling zu deaktivieren.

Zum Beispiel erstellt `\{{CSSxRef("background-color")}}` den Code-Link "{{CSSxRef("background-color")}}" und `\{{domxref("CSS.supports_static", "check support", "", "nocode")}}` erstellt den Klartext-Link "[check support](/de/docs/Web/API/CSS/supports_static)".

Stellen Sie sicher, dass Sie sich den Quellcode ansehen, um zu verstehen, wie das von Ihnen verwendete Makro funktioniert, und um die verschiedenen Parameter zu verstehen; während die Parameter im Allgemeinen gut dokumentiert sind, sind Ausnahmen wie „nicht als Code rendern, wenn der zweite Parameter ein Leerzeichen enthält“, die wir im `\{{HTMLElement("")}}`-Makro gesehen haben, im Code, aber sonst nicht dokumentiert.

Um zu erfahren, welche Parameter jedes Makro unterstützt und die Reihenfolge der Parameter für jedes Makro, enthält die oben verlinkte Makro-Quelldatei eine Dokumentation. Es gibt eine [Liste der häufig verwendeten Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros), von denen jedes Links im Hauptinhaltsbereich der Seite ausgibt.

## Siehe auch

- [Verwendung von Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Macros)
- [Makros](https://github.com/mdn/yari/tree/main/kumascript/macros) auf GitHub
- [Häufig verwendete Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros), einschließlich BCD-Makros (`\{{Compat}}`, `\{{Compat(&lt;feature>)}}` und `\{{Compat(&lt;feature>, &lt;depth>)}}`) und Spezifikationsmakros (`\{{Specifications}}` / `\{{Specifications(&lt;feature>)}}`)
- [Leitfaden für Banner und Hinweise](/de/docs/MDN/Writing_guidelines/Page_structures/Banners_and_notices) einschließlich der Makros `\{{SeeCompatTable}}`, `\{{Deprecated_Header}}` und `\{{SecureContext_Header}}`.
