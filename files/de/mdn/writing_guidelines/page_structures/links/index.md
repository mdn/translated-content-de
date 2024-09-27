---
title: Link-Makros
slug: MDN/Writing_guidelines/Page_structures/Links
l10n:
  sourceCommit: 7e97f3c5ada65b6638909bde92881a4b8d46a2b8
---

{{MDNSidebar}}

MDN bietet zahlreiche Makros, um stets aktuelle Links zu MDN-Inhalten zu erstellen. In diesem Leitfaden lernen Sie die MDN-Querverweis-Makros kennen, mit denen Sie einen einzelnen Link zu einer anderen Seite oder eine Liste von Links zu allen Unterseiten eines Dokuments hinzufügen können.

## Listen von Links

MDN bietet Makros, die eine Liste von Links erstellen:

- [`\{{LandingPageListSubPages}}`](https://github.com/mdn/yari/blob/main/kumascript/macros/LandingPageListSubpages.ejs)

  - : Fügt eine Definitionsliste ({{HTMLElement("dl")}}) der Unterseiten der aktuellen Seite ein, wobei der Titel jeder Seite als {{HTMLElement("dt")}}-Begriff und der erste Absatz als {{HTMLElement("dd")}}-Begriff dient.

- [`\{{ListSubpagesForSidebar()}}`](https://github.com/mdn/yari/blob/main/kumascript/macros/ListSubpagesForSidebar.ejs)

  - : Wenn ohne Parameter eingefügt, wird eine geordnete Liste mit Links zu den Unterseiten der aktuellen Seite eingefügt. Dieses Makro wird am häufigsten in [Sidebars](/de/docs/MDN/Writing_guidelines/Page_structures/Sidebars) verwendet (daher der Makroname), wo die Aufzählungszeichen nicht angezeigt werden. Der erste Parameter ist ein Slug der übergeordneten Seite der Linkstruktur. Der Linktext wird als Code angezeigt. Wenn ein zweiter Parameter auf `true` oder `1` gesetzt wird, werden die Links in einfachen Text umgewandelt. Wenn ein dritter Parameter auf `true` oder `1` gesetzt wird, wird oben in der Liste ein Link zur Slug-Seite (Eltern) mit "Überblick" als Linktext hinzugefügt.

- [`\{{QuickLinksWithSubpages()}}`](https://github.com/mdn/yari/blob/main/kumascript/macros/QuickLinksWithSubpages.ejs)

  - : Erstellt eine Reihe von Schnelllinks, bei denen die Kinder der aktuellen Seite (oder der angegebenen Seite) als Ziele dienen. Dies erzeugt hierarchische Listen bis zu zwei Ebenen tief. Die Titel der Seiten werden als Linktext verwendet und deren Zusammenfassungen als Tooltips.

### Beispiel-Linkliste

Um eine geordnete Liste von Links, die diese Seite und ihre Geschwister beinhaltet, einzufügen, schreiben Sie folgendes:

```md
\{{ListSubpagesForSidebar("/en-US/docs/MDN/Writing_guidelines/Page_structures/Macros", 1)}}
```

Dies produziert:

{{ListSubpagesForSidebar("/de/docs/MDN/Writing_guidelines/Page_structures/Macros", 1)}}

## Querverweislinks

Einige Makros erstellen einen einzelnen Link, um ein CSS-, JavaScript-, SVG- oder HTML-Feature zu referenzieren, einschließlich Attribute, Elemente, Eigenschaften, Datentypen und APIs. Die Makros, die einzelne Links erstellen, erfordern mindestens einen Parameter: das referenzierte Feature.

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

Der erste Parameter jedes dieser Makros ist der letzte Abschnitt des Slugs des referenzierten Dokuments. Zum Beispiel, für HTML-Elemente, schließen Sie `\{{HTMLElement("")}}` mit dem Teil des Slugs ein, der nach `Web/HTML/Element/` im Slug kommt, als erster Parameter. Bei `\{{CSSxRef("")}}` fügen Sie den Teil des Slugs ein, der nach `Web/CSS/` im Slug kommt. Der Link wird zu dieser Seite führen.

Standardmäßig ist der angezeigte Text die verlinkte Ressource, wie im ersten Parameter geschrieben, in spitzen Klammern im Fall von `\{{HTMLElement()}}`. Das entspricht möglicherweise nicht Ihren Wünschen. Zum Beispiel ist der Slug für den Bereichseingabetyp `Web/HTML/Element/input/range`. Die Einbeziehung von `\{{HTMLElement("input/range")}}` ergibt "{{HTMLElement("input/range")}}". Das ist nicht das, was Sie möchten. Alle Makros akzeptieren zusätzliche Parameter, damit Sie den anzuzeigenden Text bereitstellen können.

Der zweite Parameter, falls vorhanden, gibt den Linktext an. Im Fall des Bereichseingabetyps würden wir `\{{HTMLElement("input/range", "<code>&lt;input type=&quot;range&quot;&gt;</code>")}}` schreiben, was "{{HTMLElement("input/range", "<code>&lt;input type=&quot;range&quot;&gt;</code>")}}" ergibt. Dieses spezielle Makro entfernt das {{htmlelement("code")}} und die spitzen Klammern, wenn der zweite Parameter ein Leerzeichen enthält, sodass wir die Klammern und Code-Tags hinzugefügt haben.

Jedes Makro ist unterschiedlich!

Um HTML-Code-Semantik und CSS-Code-Styling zu vermeiden, beinhalten einige Querverweis-Makros einen Parameter mit dem `"nocode"`, um dieses Styling zu deaktivieren.

Zum Beispiel erstellt `\{{CSSxRef("background-color")}}` den Code-Link "{{CSSxRef("background-color")}}" und `\{{domxref("CSS.supports_static", "Unterstützung prüfen", "", "nocode")}}` erstellt den einfachen Textlink "[Unterstützung prüfen](/de/docs/Web/API/CSS/supports_static)".

Stellen Sie sicher, den Quellcode anzusehen, um zu verstehen, wie das Makro, das Sie verwenden, funktioniert und um die verschiedenen Parameter zu verstehen; obwohl die Parameter im Allgemeinen gut dokumentiert sind, gibt es Ausnahmen wie "nicht als Code rendern, wenn der zweite Parameter ein Leerzeichen enthält", die wir im `\{{HTMLElement("")}}`-Makro gesehen haben und die im Code, aber sonst nicht dokumentiert sind.

Um zu erfahren, welche Parameter jedes Makro unterstützt und die Reihenfolge der Parameter für jedes Makro, enthält die oben verlinkte Makro-Quelldatei Dokumentation. Es gibt eine [Liste häufig verwendeter Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros), von denen jedes Links im Hauptinhaltsbereich der Seite ausgibt.

## Siehe auch

- [Verwendung von Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Macros)
- [Makros](https://github.com/mdn/yari/tree/main/kumascript/macros) auf GitHub
- [Häufig verwendete Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros), einschließlich BCD-Makros ( `\{{Compat}}`, `\{{Compat(&lt;feature>)}}`, und `\{{Compat(&lt;feature>, &lt;depth>)}}`) und Spezifikationsmakros (`\{{Specifications}}` / `\{{Specifications(&lt;feature>)}}`)
- [Leitfaden für Banner und Hinweise](/de/docs/MDN/Writing_guidelines/Page_structures/Banners_and_notices) einschließlich der `\{{SeeCompatTable}}`, `\{{Deprecated_Header}}` und `\{{SecureContext_Header}}` Makros.
