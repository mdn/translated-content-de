---
title: "HTML: HyperText Markup Language"
short-title: HTML
slug: Web/HTML
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

**HTML** (HyperText Markup Language) ist der fundamentalste Baustein des Webs. Es definiert die Bedeutung und Struktur von Webinhalten. Andere Technologien neben HTML werden im Allgemeinen verwendet, um das Erscheinungsbild/die Präsentation einer Webseite zu beschreiben ([CSS](/de/docs/Web/CSS)) oder die Funktionalität/das Verhalten ([JavaScript](/de/docs/Web/JavaScript)).

"Hypertext" bezieht sich auf Links, die Webseiten miteinander verbinden, entweder innerhalb einer einzigen Website oder zwischen Websites. Links sind ein grundlegender Aspekt des Webs. Indem Sie Inhalte ins Internet hochladen und sie mit Seiten verknüpfen, die von anderen erstellt wurden, werden Sie ein aktiver Teilnehmer im World Wide Web.

HTML verwendet "Markup", um Text, Bilder und andere Inhalte für die Anzeige in einem Webbrowser zu annotieren. HTML-Markup umfasst spezielle "Elemente" wie {{HTMLElement("head")}}, {{HTMLElement("title")}}, {{HTMLElement("body")}}, {{HTMLElement("header")}}, {{HTMLElement("footer")}}, {{HTMLElement("article")}}, {{HTMLElement("section")}}, {{HTMLElement("p")}}, {{HTMLElement("div")}}, {{HTMLElement("span")}}, {{HTMLElement("img")}}, {{HTMLElement("aside")}}, {{HTMLElement("audio")}}, {{HTMLElement("canvas")}}, {{HTMLElement("datalist")}}, {{HTMLElement("details")}}, {{HTMLElement("embed")}}, {{HTMLElement("nav")}}, {{HTMLElement("search")}}, {{HTMLElement("output")}}, {{HTMLElement("progress")}}, {{HTMLElement("video")}}, {{HTMLElement("ul")}}, {{HTMLElement("ol")}}, {{HTMLElement("li")}} und viele andere.

Ein HTML-Element wird durch "Tags" von anderem Text in einem Dokument abgesetzt, die aus dem Elementnamen bestehen, der von `<` und `>` umgeben ist. Der Name eines Elements innerhalb eines Tags ist nicht case-sensitiv, das heißt, er kann in Großbuchstaben, Kleinbuchstaben oder einer Mischung davon geschrieben werden. Zum Beispiel kann das `<title>`-Tag als `<Title>`, `<TITLE>` oder in irgendeiner anderen Weise geschrieben werden. Allerdings ist die Konvention und empfohlene Praxis, Tags in Kleinbuchstaben zu schreiben.

Die folgenden Artikel können Ihnen helfen, mehr über HTML zu lernen.

## Einsteiger-Tutorials

Unsere [Kernmodule zur Webentwicklung lernen](/de/docs/Learn_web_development/Core) enthalten moderne, aktuelle Tutorials, die die Grundlagen von HTML abdecken.

- [Ihre erste Website: Den Inhalt erstellen](/de/docs/Learn_web_development/Getting_started/Your_first_website/Creating_the_content)
  - : Dieser Artikel bietet eine kurze Einführung, was HTML ist und wie es verwendet wird, und richtet sich an Personen, die völlig neu in der Webentwicklung sind.
- [Inhalte mit HTML strukturieren](/de/docs/Learn_web_development/Core/Structuring_content)
  - : Dieses Modul behandelt die Grundlagen der HTML-Sprache, bevor es sich auf zentrale Bereiche wie Dokumentstruktur, Links, Listen, Bilder, Formulare und mehr konzentriert.

## Leitfäden

Die [HTML-Leitfäden](/de/docs/Web/HTML/Guides) helfen Ihnen beim Erstellen mit HTML im Web und behandeln Themen wie Formulare, CORS, Content-Preloading und responsive Bilder.

- [HTML-Formulare](/de/docs/Learn_web_development/Extensions/Forms)
  - : Formulare sind ein sehr wichtiger Teil des Webs – sie bieten einen Großteil der Funktionalität, die Sie für die Interaktion mit Websites benötigen, z.B. registrieren und einloggen, Feedback geben, Produkte kaufen und mehr. Dieses Modul hilft Ihnen, die clientseitigen/front-end Teile von Formularen zu erstellen.
- [CORS-fähiges Bild](/de/docs/Web/HTML/How_to/CORS_enabled_image)
  - : Das [`crossorigin`](/de/docs/Web/HTML/Reference/Elements/img#crossorigin)-Attribut, in Kombination mit einem geeigneten {{Glossary("CORS", "CORS")}}-Header, ermöglicht es, Bilder, die durch das {{HTMLElement("img")}}-Element definiert sind, von fremden Ursprüngen zu laden und in einem {{HTMLElement("canvas")}}-Element zu verwenden, als ob sie vom aktuellen Ursprung geladen würden.
- [CORS-Einstellungen Attribute](/de/docs/Web/HTML/Reference/Attributes/crossorigin)
  - : Einige HTML-Elemente, die CORS unterstützen, wie {{HTMLElement("img")}} oder {{HTMLElement("video")}}, haben ein `crossorigin`-Attribut (`crossOrigin`-Eigenschaft), mit dem Sie die CORS-Anfragen für die abgerufenen Daten des Elements konfigurieren können.
- [Inhalte mit rel="preload" vorladen](/de/docs/Web/HTML/Reference/Attributes/rel/preload)
  - : Der `preload`-Wert des {{htmlelement("link")}}-Elements [`rel`](/de/docs/Web/HTML/Reference/Elements/link#rel)-Attributs ermöglicht es Ihnen, deklarative Fetch-Anfragen in Ihrem HTML {{htmlelement("head")}} zu schreiben, Ressourcen zu spezifizieren, die Ihre Seiten sehr bald nach dem Laden benötigen werden, die Sie daher früh im Lebenszyklus eines Seitenladevorgangs vorladen möchten, bevor der Haupt-Rendering-Mechanismus des Browsers einsetzt. Dies stellt sicher, dass sie früher verfügbar gemacht werden und weniger wahrscheinlich den ersten Render der Seite blockieren, was zu Leistungsverbesserungen führt. Dieser Artikel bietet einen grundlegenden Leitfaden dazu, wie `preload` funktioniert.
- [Responsive Bilder](/de/docs/Web/HTML/Guides/Responsive_images)
  - : In diesem Artikel lernen wir das Konzept von responsive images kennen – Bilder, die auf Geräten mit sehr unterschiedlichen Bildschirmgrößen, Auflösungen und anderen solchen Merkmalen gut funktionieren – und betrachten, welche Tools HTML bereitstellt, um sie zu implementieren. Dies hilft, die Leistung auf verschiedenen Geräten zu verbessern.

## Referenz

- [HTML-Referenz](/de/docs/Web/HTML/Reference)
  - : HTML besteht aus **Elementen**, von denen jedes durch einige **Attribute** modifiziert werden kann. HTML-Dokumente sind durch **Links** miteinander verbunden.
- [HTML-Elementreferenz](/de/docs/Web/HTML/Reference/Elements)
  - : Durchsuchen Sie eine Liste aller {{Glossary("HTML", "HTML")}}-{{Glossary("Element", "Elemente")}}.
- [HTML-Attributreferenz](/de/docs/Web/HTML/Reference/Attributes)
  - : Elemente in HTML haben **Attribute**. Diese sind zusätzliche Werte, die die Elemente konfigurieren oder ihr Verhalten auf verschiedene Weise anpassen.
- [Globale Attribute](/de/docs/Web/HTML/Reference/Global_attributes)
  - : Globale Attribute können auf alle [HTML-Elemente](/de/docs/Web/HTML/Reference/Elements) angewendet werden, _selbst auf die, die nicht im Standard spezifiziert sind_. Das bedeutet, dass auch nicht standardisierte Elemente diese Attribute zulassen müssen, obwohl diese Elemente das Dokument HTML5-inkompatibel machen.
- {{Glossary("Inline-level_content", "Inline-Level-Elemente")}} und {{Glossary("Block-level_content", "Block-Level-Elemente")}}
  - : HTML-Elemente sind normalerweise "Inline-Level"- oder "Block-Level"-Elemente. Ein Inline-Level-Element nimmt nur den Platz ein, der durch die Tags begrenzt ist, die es definieren. Ein Block-Level-Element nimmt den gesamten Raum seines übergeordneten Elements (Containers) ein und erzeugt dadurch eine "Blockbox".
- [HTML-Kommentare](/de/docs/Web/HTML/Guides/Comments)
  - : HTML-Kommentare werden verwendet, um erklärende Anmerkungen zum Markup hinzuzufügen oder um zu verhindern, dass der Browser bestimmte Teile des Dokuments interpretiert.
- [Leitfaden zu Medientypen und Formaten im Web](/de/docs/Web/Media/Guides/Formats)
  - : Die {{HTMLElement("audio")}}- und {{HTMLElement("video")}}-Elemente ermöglichen es Ihnen, Audio- und Videomedien nativ in Ihren Inhalten abzuspielen, ohne dass externe Softwareunterstützung erforderlich ist.
- [HTML-Inhaltskategorien](/de/docs/Web/HTML/Guides/Content_categories)
  - : HTML besteht aus mehreren Arten von Inhalten, von denen jede in bestimmten Kontexten verwendet werden darf und in anderen nicht. Ebenso hat jeder Kontext eine Reihe anderer Inhaltskategorien, die er enthalten kann, und Elemente, die in ihnen benutzt oder nicht benutzt werden können. Dies ist ein Leitfaden zu diesen Kategorien.
- [Quirks-Modus und Standards-Modus](/de/docs/Web/HTML/Guides/Quirks_mode_and_standards_mode)
  - : Historische Informationen über den Quirks-Modus und den Standards-Modus.

## Verwandte Themen

- [Farbe auf HTML-Elemente mit CSS anwenden](/de/docs/Web/CSS/Guides/Colors/Applying_color)
  - : Dieser Artikel behandelt die meisten Möglichkeiten, wie Sie CSS verwenden, um Farbe zu HTML-Inhalten hinzuzufügen, und listet auf, welche Teile von HTML-Dokumenten eingefärbt werden können und welche CSS-Eigenschaften dabei zu verwenden sind.
