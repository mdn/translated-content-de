---
title: Link-Makros
slug: MDN/Writing_guidelines/Page_structures/Links
l10n:
  sourceCommit: 7e97f3c5ada65b6638909bde92881a4b8d46a2b8
---

{{MDNSidebar}}

MDN bietet zahlreiche Makros, um stets aktuelle Links zu MDN-Inhalten zu erstellen. In diesem Leitfaden lernen Sie die MDN-Cross-Reference-Makros kennen, die Sie verwenden können, um einen einzelnen Link zu einer anderen Seite oder eine Liste von Links zu allen Unterseiten eines Dokuments einzufügen.

## Listen von Links

MDN bietet Makros, die eine Liste von Links erstellen:

- [`\{{LandingPageListSubPages}}`](https://github.com/mdn/yari/blob/main/kumascript/macros/LandingPageListSubpages.ejs)

  - : Fügt eine Definitionsliste ({{HTMLElement("dl")}}) der Unterseiten der aktuellen Seite ein, mit dem Titel jeder Seite als {{HTMLElement("dt")}}-Begriff und deren erstem Absatz als {{HTMLElement("dd")}}-Begriff.

- [`\{{ListSubpagesForSidebar()}}`](https://github.com/mdn/yari/blob/main/kumascript/macros/ListSubpagesForSidebar.ejs)

  - : Wenn ohne Parameter verwendet, wird eine geordnete Liste von Links zu den Unterseiten der aktuellen Seite eingefügt. Dieses Makro wird am häufigsten in [Seitenleisten](/de/docs/MDN/Writing_guidelines/Page_structures/Sidebars) verwendet (daher der Name des Makros), wo die Aufzählungszeichen nicht gerendert werden. Der erste Parameter ist ein Slug der übergeordneten Seite des Linkbaums. Der Linktext wird als Code angezeigt. Das Setzen eines zweiten Parameters auf `true` oder `1` konvertiert die Links in einfachen Text. Das Setzen eines dritten Parameters auf `true` oder `1` fügt einen Link zur Slug-(Eltern-)Seite oben in der Liste mit "Überblick" als Linktext hinzu.

- [`\{{QuickLinksWithSubpages()}}`](https://github.com/mdn/yari/blob/main/kumascript/macros/QuickLinksWithSubpages.ejs)

  - : Erstellt eine Reihe von Schnelllinks mithilfe der Kinder der aktuellen Seite (oder der angegebenen Seite) als Ziele. Dies erstellt hierarchische Listen bis zu zwei Ebenen tief. Die Titel der Seiten werden als Linktext verwendet und ihre Zusammenfassungen als Tooltips.

### Beispiel-Linkliste

Um eine geordnete Liste von Links einzufügen, die diese Seite und ihre Geschwister enthält, schreiben Sie Folgendes:

```md
\{{ListSubpagesForSidebar("/de/docs/MDN/Writing_guidelines/Page_structures/Macros", 1)}}
```

Dies ergibt:

{{ListSubpagesForSidebar("/de/docs/MDN/Writing_guidelines/Page_structures/Macros", 1)}}

## Cross-Reference-Links

Einige Makros erstellen einen einzelnen Link, um eine CSS-, JavaScript-, SVG- oder HTML-Funktion zu referenzieren, einschließlich Attributen, Elementen, Eigenschaften, Datentypen und APIs. Die Makros, die einzelne Links erstellen, benötigen mindestens einen Parameter: die zu referenzierende Funktion.

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

Der erste Parameter jedes dieser Makros ist der letzte Abschnitt des Slugs des zu referenzierenden Dokuments. Zum Beispiel, bei HTML-Elementen, verwenden Sie `\{{HTMLElement("")}}` mit dem Teil des Slugs, der nach `Web/HTML/Element/` folgt, als ersten Parameter. Bei `\{{CSSxRef("")}}` fügen Sie den Teil des Slugs hinzu, der nach `Web/CSS/` folgt. Der Link führt zu dieser Seite.

Standardmäßig wird der im ersten Parameter angegebene Ressourcenname als Text angezeigt, im Fall von `\{{HTMLElement()}}` in spitzen Klammern. Das ist möglicherweise nicht das, was Sie möchten. Zum Beispiel, der Slug für den Eingabebereichstyp ist `Web/HTML/Element/input/range`. Das Einfügen von `\{{HTMLElement("input/range")}}` ergibt "{{HTMLElement("input/range")}}". Das ist nicht das, was Sie möchten. Alle Makros akzeptieren zusätzliche Parameter, sodass Sie den Text angeben können, den Sie anzeigen möchten.

Der zweite Parameter, falls vorhanden, liefert den Linktext. Im Fall von Eingabebereichen würden wir `\{{HTMLElement("input/range", "<code>&lt;input type=&quot;range&quot;&gt;</code>")}}` schreiben, was "{{HTMLElement("input/range", "<code>&lt;input type=&quot;range&quot;&gt;</code>")}}" ergibt. Dieses spezielle Makro entfernt die {{htmlelement("code")}} und spitzen Klammern, wenn der zweite Parameter ein Leerzeichen enthält, daher haben wir die Klammern und Code-Tags hinzugefügt.

Jedes Makro ist anders!

Um HTML-Code-Semantik und CSS-Code-Styling zu verhindern, enthalten einige Cross-Reference-Makros einen Parameter mit dem `"nocode"`, um dieses Styling zu deaktivieren.

Zum Beispiel erzeugt `\{{CSSxRef("background-color")}}` den Code-Link "{{CSSxRef("background-color")}}" und `\{{domxref("CSS.supports_static", "check support", "", "nocode")}}` erzeugt den einfachen Textlink "{{domxref("CSS.supports_static", "check support", "", "nocode")}}".

Stellen Sie sicher, dass Sie sich den Quellcode ansehen, um zu verstehen, wie das von Ihnen verwendete Makro funktioniert und um die verschiedenen Parameter zu verstehen; während die Parameter im Allgemeinen gut dokumentiert sind, gibt es Ausnahmen wie "nicht als Code rendern, wenn der zweite Parameter ein Leerzeichen enthält", die wir beim `\{{HTMLElement("")}}` Makro gesehen haben, welche im Code aber nicht anderweitig dokumentiert ist.

Um zu erfahren, welche Parameter jedes Makro unterstützt und die Reihenfolge der Parameter für jedes Makro, enthält die oben verlinkte Makro-Quelldatei Dokumentation. Es gibt eine [Liste häufiger Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros), von denen jedes Links im Hauptinhalt der Seite ausgibt.

## Siehe auch

- [Verwendung von Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Macros)
- [Makros](https://github.com/mdn/yari/tree/main/kumascript/macros) auf GitHub
- [Häufig verwendete Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros), einschließlich BCD-Makros (`\{{Compat}}`, `\{{Compat(&lt;feature>)}}`, und `\{{Compat(&lt;feature>, &lt;depth>)}}`) und Spezifikationsmakros (`\{{Specifications}}` / `\{{Specifications(&lt;feature>)}}`)
- [Leitfaden für Banner und Hinweise](/de/docs/MDN/Writing_guidelines/Page_structures/Banners_and_notices) einschließlich der Makros `\{{SeeCompatTable}}`, `\{{Deprecated_Header}}`, und `\{{SecureContext_Header}}`.
