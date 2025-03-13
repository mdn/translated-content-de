---
title: "HTML: HyperText Markup Language"
short-title: HTML
slug: Web/HTML
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTMLSidebar}}

**HTML** (HyperText Markup Language) ist der grundlegendste Baustein des Webs. Es definiert die Bedeutung und Struktur von Webinhalten. Neben HTML werden auch andere Technologien verwendet, um das Erscheinungsbild/Präsentation einer Webseite zu beschreiben ([CSS](/de/docs/Web/CSS)) oder ihre Funktionalität/Verhalten ([JavaScript](/de/docs/Web/JavaScript)).

"Hypertext" bezieht sich auf Links, die Webseiten miteinander verbinden, entweder innerhalb einer einzelnen Website oder zwischen Websites. Links sind ein grundlegender Aspekt des Webs. Indem Sie Inhalte ins Internet hochladen und sie mit von anderen erstellten Seiten verlinken, werden Sie zu einem aktiven Teilnehmer des World Wide Web.

HTML verwendet "Markup", um Text, Bilder und andere Inhalte für die Anzeige in einem Webbrowser zu annotieren. HTML-Markup umfasst spezielle "Elemente" wie {{HTMLElement("head")}}, {{HTMLElement("title")}}, {{HTMLElement("body")}}, {{HTMLElement("header")}}, {{HTMLElement("footer")}}, {{HTMLElement("article")}}, {{HTMLElement("section")}}, {{HTMLElement("p")}}, {{HTMLElement("div")}}, {{HTMLElement("span")}}, {{HTMLElement("img")}}, {{HTMLElement("aside")}}, {{HTMLElement("audio")}}, {{HTMLElement("canvas")}}, {{HTMLElement("datalist")}}, {{HTMLElement("details")}}, {{HTMLElement("embed")}}, {{HTMLElement("nav")}}, {{HTMLElement("search")}}, {{HTMLElement("output")}}, {{HTMLElement("progress")}}, {{HTMLElement("video")}}, {{HTMLElement("ul")}}, {{HTMLElement("ol")}}, {{HTMLElement("li")}} und viele andere.

Ein HTML-Element wird durch "Tags" vom restlichen Text in einem Dokument abgesetzt, die aus dem Elementnamen bestehen, der von `<` und `>` umgeben ist. Der Name eines Elements innerhalb eines Tags ist nicht case-sensitive. Das heißt, es kann in Großbuchstaben, Kleinbuchstaben oder gemischt geschrieben werden. Beispielsweise kann das `<title>`-Tag als `<Title>`, `<TITLE>` oder auf jede andere Weise geschrieben werden. Die Konvention und empfohlene Praxis ist jedoch, Tags in Kleinbuchstaben zu schreiben.

Die untenstehenden Artikel helfen Ihnen, mehr über HTML zu lernen.

## Einsteiger-Tutorials

- [Ihre erste Website: Erstellen der Inhalte](/de/docs/Learn_web_development/Getting_started/Your_first_website/Creating_the_content)
  - : Dieser Artikel bietet einen kurzen Überblick darüber, was HTML ist und wie es verwendet wird, und richtet sich an Personen, die völlig neu in der Webentwicklung sind.
- [Strukturierung von Inhalten mit HTML](/de/docs/Learn_web_development/Core/Structuring_content)
  - : Unser [Lernen Sie Webentwicklung](/de/docs/Learn_web_development)-Abschnitts-HTML-Modul lehrt alle HTML-Grundlagen von Grund auf.

## Leitfäden

- [HTML-Formulare](/de/docs/Learn_web_development/Extensions/Forms)
  - : Formulare sind ein sehr wichtiger Teil des Webs — sie bieten viel von der Funktionalität, die zum Interagieren mit Websites benötigt wird, z.B. Registrierung und Anmeldung, Feedback senden, Produkte kaufen und mehr. Dieses Modul gibt Ihnen einen Einstieg in das Erstellen der klientenseitigen/frontend Teile von Formularen.
- [CORS-fähiges Bild](/de/docs/Web/HTML/CORS_enabled_image)
  - : Das [`crossorigin`](/de/docs/Web/HTML/Element/img#crossorigin)-Attribut, in Kombination mit einem geeigneten {{Glossary("CORS", "CORS")}}-Header, ermöglicht es, dass Bilder, die durch das {{HTMLElement("img")}}-Element definiert werden, aus fremden Ursprüngen geladen und in einem {{HTMLElement("canvas")}}-Element verwendet werden, so als ob sie vom aktuellen Ursprung geladen würden.
- [CORS-Einstellungs-Attribute](/de/docs/Web/HTML/Attributes/crossorigin)
  - : Einige HTML-Elemente, die Unterstützung für [CORS](/de/docs/Web/HTTP/Guides/CORS) bieten, wie {{HTMLElement("img")}} oder {{HTMLElement("video")}}, haben ein `crossorigin`-Attribut (`crossOrigin`-Eigenschaft), das es Ihnen ermöglicht, die CORS-Anfragen für die vom Element geladenen Daten zu konfigurieren.
- [Inhalte mit rel="preload" vorladen](/de/docs/Web/HTML/Attributes/rel/preload)
  - : Der `preload`-Wert des {{htmlelement("link")}}-Elements [`rel`](/de/docs/Web/HTML/Element/link#rel)-Attributs ermöglicht es Ihnen, deklarative Fetch-Anfragen in Ihrem HTML-{{htmlelement("head")}} zu schreiben, indem Sie Ressourcen angeben, die Ihre Seiten sehr bald nach dem Laden benötigen werden, die Sie daher bereits früh im Ladezyklus einer Seite vorladen möchten, bevor die Haupt-Rendering-Maschinerie des Browsers einschaltet. Dies stellt sicher, dass sie früher verfügbar gemacht werden und weniger wahrscheinlich die erste Darstellung der Seite blockieren, was zu Leistungsverbesserungen führt. Dieser Artikel bietet eine grundlegende Anleitung dazu, wie `preload` funktioniert.
- [Responsive Bilder](/de/docs/Web/HTML/Responsive_images)
  - : In diesem Artikel lernen Sie das Konzept von responsiven Bildern kennen — Bilder, die gut auf Geräten mit unterschiedlichen Bildschirmgrößen, Auflösungen und anderen solchen Merkmalen funktionieren — und wir sehen uns an, welche Tools HTML bietet, um sie umzusetzen. Dies hilft, die Leistung über verschiedene Geräte hinweg zu verbessern.

## Referenz

- [HTML-Referenz](/de/docs/Web/HTML/Reference)
  - : HTML besteht aus **Elementen**, von denen jedes durch eine Anzahl von **Attributen** modifiziert werden kann. HTML-Dokumente sind durch **Links** miteinander verbunden.
- [HTML-Elemente-Referenz](/de/docs/Web/HTML/Element)
  - : Durchsuchen Sie eine Liste aller {{Glossary("HTML", "HTML")}}-{{Glossary("Element", "Elemente")}}.
- [HTML-Attributreferenz](/de/docs/Web/HTML/Attributes)
  - : Elemente in HTML haben **Attribute**. Diese sind zusätzliche Werte, die die Elemente konfigurieren oder ihr Verhalten auf verschiedene Weise anpassen.
- [Globale Attribute](/de/docs/Web/HTML/Global_attributes)
  - : Globale Attribute können auf allen [HTML-Elementen](/de/docs/Web/HTML/Element) angegeben werden, _selbst auf denen, die nicht im Standard angegeben sind_. Das bedeutet, dass alle nicht standardmäßigen Elemente diese Attribute dennoch zulassen müssen, auch wenn diese Elemente das Dokument HTML5-nonkonform machen.
- {{Glossary("Inline-level_content", "Inline-Elemente")}} und {{Glossary("Block-level_content", "Block-Elemente")}}
  - : HTML-Elemente sind normalerweise "Inline-Elemente" oder "Block-Elemente". Ein Inline-Element nimmt nur den Raum ein, der durch die Tags definiert wird, die es umgeben. Ein Block-Element nimmt den gesamten Raum seines übergeordneten Elements (Containers) ein und erzeugt damit eine "Block-Box".
- [HTML-Kommentare](/de/docs/Web/HTML/Comments)
  - : HTML-Kommentare werden verwendet, um erläuternde Notizen zum Markup hinzuzufügen oder um den Browser daran zu hindern, bestimmte Teile des Dokuments zu interpretieren.
- [Leitfaden zu Medientypen und Formaten im Web](/de/docs/Web/Media/Guides/Formats)
  - : Die {{HTMLElement("audio")}}- und {{HTMLElement("video")}}-Elemente ermöglichen es Ihnen, Audio- und Videomedien nativ innerhalb Ihrer Inhalte abzuspielen, ohne dass eine zusätzliche Softwareunterstützung erforderlich ist.
- [HTML-Inhaltskategorien](/de/docs/Web/HTML/Content_categories)
  - : HTML besteht aus verschiedenen Arten von Inhalten, von denen jeder in bestimmten Kontexten verwendet werden darf und in anderen nicht. Ebenso hat jeder Kontext eine Reihe anderer Inhaltskategorien, die er enthalten kann, und Elemente, die er verwenden darf oder nicht darf. Dies ist ein Leitfaden zu diesen Kategorien.
- [Quirks-Modus und Standardmodus](/de/docs/Web/HTML/Quirks_Mode_and_Standards_Mode)
  - : Historische Informationen über den Quirks-Modus und den Standardmodus.

## Verwandte Themen

- [Anwenden von Farbe auf HTML-Elemente mit CSS](/de/docs/Web/CSS/CSS_colors/Applying_color)
  - : Dieser Artikel behandelt die meisten Möglichkeiten, wie Sie CSS verwenden, um HTML-Inhalte einzufärben, indem aufgelistet wird, welche Teile von HTML-Dokumenten gefärbt werden können und welche CSS-Eigenschaften dabei verwendet werden sollten.
