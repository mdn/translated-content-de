---
title: "HTML: HyperText Markup Language"
short-title: HTML
slug: Web/HTML
l10n:
  sourceCommit: 04158640487c17d515de8078c9307a2f906377d0
---

**HTML** (HyperText Markup Language) ist der grundlegendste Baustein des Webs. Es definiert die Bedeutung und Struktur von Webinhalten. Neben HTML werden in der Regel andere Technologien verwendet, um das Erscheinungsbild/Präsentation einer Webseite zu beschreiben ([CSS](/de/docs/Web/CSS)) oder deren Funktionalität/Verhalten ([JavaScript](/de/docs/Web/JavaScript)).

"Hypertext" bezieht sich auf Links, die Webseiten miteinander verbinden, entweder innerhalb einer einzelnen Website oder zwischen Websites. Links sind ein grundlegender Aspekt des Webs. Indem Sie Inhalte ins Internet hochladen und mit Seiten verknüpfen, die von anderen Personen erstellt wurden, werden Sie zu einem aktiven Teilnehmer des World Wide Web.

HTML verwendet "Markup", um Text, Bilder und andere Inhalte zur Anzeige in einem Webbrowser zu annotieren. HTML-Markup umfasst spezielle "Elemente" wie {{HTMLElement("head")}}, {{HTMLElement("title")}}, {{HTMLElement("body")}}, {{HTMLElement("header")}}, {{HTMLElement("footer")}}, {{HTMLElement("article")}}, {{HTMLElement("section")}}, {{HTMLElement("p")}}, {{HTMLElement("div")}}, {{HTMLElement("span")}}, {{HTMLElement("img")}}, {{HTMLElement("aside")}}, {{HTMLElement("audio")}}, {{HTMLElement("canvas")}}, {{HTMLElement("datalist")}}, {{HTMLElement("details")}}, {{HTMLElement("embed")}}, {{HTMLElement("nav")}}, {{HTMLElement("search")}}, {{HTMLElement("output")}}, {{HTMLElement("progress")}}, {{HTMLElement("video")}}, {{HTMLElement("ul")}}, {{HTMLElement("ol")}}, {{HTMLElement("li")}} und viele andere.

Ein HTML-Element wird durch "Tags" von anderem Text in einem Dokument abgegrenzt, die aus dem Elementnamen bestehen, der von `<` und `>` umgeben ist. Der Elementname innerhalb eines Tags ist nicht case-sensitiv. Das heißt, er kann in Großbuchstaben, Kleinbuchstaben oder gemischt geschrieben werden. Zum Beispiel kann das `<title>`-Tag als `<Title>`, `<TITLE>` oder in jeglicher anderer Weise geschrieben werden. Allerdings ist die Konvention und empfohlene Praxis, Tags in Kleinbuchstaben zu schreiben.

Die folgenden Artikel können Ihnen helfen, mehr über HTML zu erfahren.

## Tutorials für Anfänger

Unsere [Kernmodule zum Lernen der Webentwicklung](/de/docs/Learn_web_development/Core) enthalten moderne, aktuelle Tutorials, die die Grundlagen von HTML abdecken.

- [Ihre erste Website: Erstellen der Inhalte](/de/docs/Learn_web_development/Getting_started/Your_first_website/Creating_the_content)
  - : Dieser Artikel bietet eine kurze Einführung, was HTML ist und wie es zu verwenden ist, und richtet sich an Leute, die ganz neu in der Webentwicklung sind.
- [Strukturieren von Inhalten mit HTML](/de/docs/Learn_web_development/Core/Structuring_content)
  - : Dieses Modul behandelt die Grundlagen der HTML-Sprache, bevor es sich mit Schlüsselbereichen wie Dokumentstruktur, Links, Listen, Bilder, Formulare und mehr befasst.

## Leitfäden

Die [HTML-Leitfäden](/de/docs/Web/HTML/Guides) helfen Ihnen beim Erstellen mit HTML im Web und decken Themen wie Formulare, CORS, Inhaltspreloading und responsive Bilder ab.

- [HTML-Formulare](/de/docs/Learn_web_development/Extensions/Forms)
  - : Formulare sind ein sehr wichtiger Teil des Webs — sie bieten einen Großteil der Funktionalität, die Sie für die Interaktion mit Websites benötigen, z. B. Registrierung und Anmeldung, Senden von Feedback, Kauf von Produkten und mehr. Dieses Modul führt Sie in die Erstellung der clientseitigen/front-End Teile von Formularen ein.
- [CORS-fähiges Bild](/de/docs/Web/HTML/How_to/CORS_enabled_image)
  - : Das [`crossorigin`](/de/docs/Web/HTML/Reference/Elements/img#crossorigin)-Attribut in Kombination mit einem geeigneten {{Glossary("CORS", "CORS")}}-Header ermöglicht es, dass Bilder, die durch das {{HTMLElement("img")}}-Element definiert sind, aus fremden Ursprüngen geladen und in einem {{HTMLElement("canvas")}}-Element verwendet werden können, als ob sie vom aktuellen Ursprung geladen würden.
- [CORS-Einstellungsattribute](/de/docs/Web/HTML/Reference/Attributes/crossorigin)
  - : Einige HTML-Elemente, die Unterstützung für [CORS](/de/docs/Web/HTTP/Guides/CORS) bieten, wie {{HTMLElement("img")}} oder {{HTMLElement("video")}}, haben ein `crossorigin`-Attribut (`crossOrigin`-Eigenschaft), das es Ihnen ermöglicht, die CORS-Anforderungen für die vom Element abgerufenen Daten zu konfigurieren.
- [Vorladen von Inhalten mit rel="preload"](/de/docs/Web/HTML/Reference/Attributes/rel/preload)
  - : Der `preload`-Wert des {{htmlelement("link")}}-Elements [`rel`](/de/docs/Web/HTML/Reference/Elements/link#rel)-Attribut erlaubt es Ihnen, deklarative Abrufanforderungen in Ihrem HTML-{{htmlelement("head")}} zu schreiben und Ressourcen anzugeben, die Ihre Seiten sehr bald nach dem Laden benötigen werden, die Sie daher frühzeitig im Lebenszyklus eines Seitenladens vorladen möchten, bevor die Haupt-Rendering-Maschinerie des Browsers einsetzt. Dies stellt sicher, dass sie früher verfügbar gemacht werden und weniger wahrscheinlich die erste Darstellung der Seite blockieren, was zu Leistungsverbesserungen führt. Dieser Artikel bietet einen grundlegenden Leitfaden zu der Funktionsweise von `preload`.
- [Responsive Bilder](/de/docs/Web/HTML/Guides/Responsive_images)
  - : In diesem Artikel lernen wir das Konzept von responsiven Bildern – Bilder, die gut auf Geräten mit sehr unterschiedlichen Bildschirmgrößen, Auflösungen und anderen Merkmalen funktionieren – kennen und erfahren, welche Werkzeuge HTML bietet, um sie zu implementieren. Dies hilft, die Leistung auf verschiedenen Geräten zu verbessern.

## Referenz

- [HTML-Referenz](/de/docs/Web/HTML/Reference)
  - : HTML besteht aus **Elementen**, von denen jedes durch eine Anzahl von **Attributen** modifiziert werden kann. HTML-Dokumente sind durch **Links** miteinander verbunden.
- [HTML-Element-Referenz](/de/docs/Web/HTML/Reference/Elements)
  - : Durchsuchen Sie eine Liste aller {{Glossary("HTML", "HTML")}}-{{Glossary("Element", "Elemente")}}.
- [HTML-Attribut-Referenz](/de/docs/Web/HTML/Reference/Attributes)
  - : Elemente in HTML haben **Attribute**. Diese sind zusätzliche Werte, die die Elemente konfigurieren oder ihr Verhalten auf verschiedene Weise anpassen.
- [Globale Attribute](/de/docs/Web/HTML/Reference/Global_attributes)
  - : Globale Attribute können für alle [HTML-Elemente](/de/docs/Web/HTML/Reference/Elements) spezifiziert werden, _selbst für diejenigen, die nicht im Standard spezifiziert sind_. Das bedeutet, dass alle nicht standardmäßigen Elemente diese Attribute weiterhin zulassen müssen, auch wenn diese Elemente das Dokument HTML5-inkompatibel machen.
- {{Glossary("Inline-level_content", "Inline-Level-Elemente")}} und {{Glossary("Block-level_content", "Block-Level-Elemente")}}
  - : HTML-Elemente sind normalerweise "Inline-Level"- oder "Block-Level"-Elemente. Ein Inline-Level-Element nimmt nur den Platz ein, der durch die Tags definiert wird, die es umgeben. Ein Block-Level-Element nimmt den gesamten Platz des übergeordneten Elements (Containers) ein und erstellt damit eine "Block-Box".
- [HTML-Kommentare](/de/docs/Web/HTML/Guides/Comments)
  - : HTML-Kommentare werden verwendet, um erklärende Anmerkungen zum Markup hinzuzufügen oder um zu verhindern, dass der Browser bestimmte Teile des Dokuments interpretiert.
- [Leitfaden zu Medientypen und -formaten im Web](/de/docs/Web/Media/Guides/Formats)
  - : Die {{HTMLElement("audio")}}- und {{HTMLElement("video")}}-Elemente ermöglichen es Ihnen, Audio- und Videomedien nativ innerhalb Ihrer Inhalte abzuspielen, ohne dass externe Softwareunterstützung erforderlich ist.
- [HTML-Inhaltskategorien](/de/docs/Web/HTML/Guides/Content_categories)
  - : HTML besteht aus mehreren Arten von Inhalten, von denen jeder in bestimmten Kontexten verwendet werden darf und in anderen nicht erlaubt ist. Ebenso hat jeder Kontext eine Reihe von anderen Inhaltskategorien, die er enthalten kann und Elemente, die in ihnen verwendet werden können oder nicht. Dies ist ein Leitfaden zu diesen Kategorien.
- [Quirks-Modus und Standards-Modus](/de/docs/Web/HTML/Guides/Quirks_mode_and_standards_mode)
  - : Historische Informationen zum Quirks-Modus und Standards-Modus.

## Verwandte Themen

- [Farbe auf HTML-Elemente mit CSS anwenden](/de/docs/Web/CSS/CSS_colors/Applying_color)
  - : Dieser Artikel behandelt die meisten Möglichkeiten, mit CSS Farbe zu HTML-Inhalten hinzuzufügen und listet auf, welche Teile von HTML-Dokumenten eingefärbt werden können und welche CSS-Eigenschaften dafür zu verwenden sind.
