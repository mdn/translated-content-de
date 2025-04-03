---
title: "HTML: HyperText Markup Language"
short-title: HTML
slug: Web/HTML
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{HTMLSidebar}}

**HTML** (HyperText Markup Language) ist der grundlegendste Baustein des Webs. Es definiert die Bedeutung und Struktur von Webinhalten. Neben HTML werden in der Regel andere Technologien verwendet, um das Erscheinungsbild/Präsentation einer Webseite zu beschreiben ([CSS](/de/docs/Web/CSS)) oder deren Funktionalität/Verhalten ([JavaScript](/de/docs/Web/JavaScript)).

"Hypertext" bezieht sich auf Links, die Webseiten miteinander verbinden, entweder innerhalb einer einzelnen Website oder zwischen Websites. Links sind ein grundlegender Aspekt des Webs. Indem Sie Inhalte ins Internet hochladen und mit Seiten verlinken, die von anderen Personen erstellt wurden, werden Sie zu einem aktiven Teilnehmer des World Wide Web.

HTML verwendet "Markup", um Text, Bilder und andere Inhalte für die Anzeige in einem Webbrowser zu annotieren. Zu den HTML-Markups gehören spezielle "Elemente" wie {{HTMLElement("head")}}, {{HTMLElement("title")}}, {{HTMLElement("body")}}, {{HTMLElement("header")}}, {{HTMLElement("footer")}}, {{HTMLElement("article")}}, {{HTMLElement("section")}}, {{HTMLElement("p")}}, {{HTMLElement("div")}}, {{HTMLElement("span")}}, {{HTMLElement("img")}}, {{HTMLElement("aside")}}, {{HTMLElement("audio")}}, {{HTMLElement("canvas")}}, {{HTMLElement("datalist")}}, {{HTMLElement("details")}}, {{HTMLElement("embed")}}, {{HTMLElement("nav")}}, {{HTMLElement("search")}}, {{HTMLElement("output")}}, {{HTMLElement("progress")}}, {{HTMLElement("video")}}, {{HTMLElement("ul")}}, {{HTMLElement("ol")}}, {{HTMLElement("li")}} und viele andere.

Ein HTML-Element wird im Dokument durch "Tags" von anderem Text abgesetzt, die aus dem Elementnamen bestehen, umgeben von `<` und `>`. Der Name eines Elements innerhalb eines Tags ist nicht case-sensitiv. Das bedeutet, dass es in Großbuchstaben, Kleinbuchstaben oder einer Mischung daraus geschrieben werden kann. Zum Beispiel kann das `<title>` Tag als `<Title>`, `<TITLE>` oder in jeder anderen Variante geschrieben werden. Die Konvention und empfohlene Praxis ist es jedoch, Tags in Kleinbuchstaben zu schreiben.

Die folgenden Artikel können Ihnen helfen, mehr über HTML zu lernen.

## Anfänger-Tutorials

- [Ihre erste Website: Erstellen der Inhalte](/de/docs/Learn_web_development/Getting_started/Your_first_website/Creating_the_content)
  - : Dieser Artikel bietet einen kurzen Überblick darüber, was HTML ist und wie es verwendet wird, und richtet sich an Personen, die absolut neu in der Webentwicklung sind.
- [Strukturierung von Inhalten mit HTML](/de/docs/Learn_web_development/Core/Structuring_content)
  - : Unser [Lernen Sie Webentwicklung](/de/docs/Learn_web_development) Abschnitts-HTML-Modul vermittelt alle HTML-Grundlagen von Grund auf.

## Leitfäden

- [HTML-Formulare](/de/docs/Learn_web_development/Extensions/Forms)
  - : Formulare sind ein sehr wichtiger Bestandteil des Webs – sie bieten viel von der Funktionalität, die Sie benötigen, um mit Websites zu interagieren, z. B. Registrierung und Anmeldung, Feedback senden, Produkte kaufen und mehr. Dieses Modul hilft Ihnen beim Einstieg in die Erstellung der Client-seitigen/Frontend-Teile von Formularen.
- [CORS-fähiges Bild](/de/docs/Web/HTML/CORS_enabled_image)
  - : Das [`crossorigin`](/de/docs/Web/HTML/Element/img#crossorigin) Attribut, in Kombination mit einem geeigneten {{Glossary("CORS", "CORS")}} Header, erlaubt es, Bilder, die durch das {{HTMLElement("img")}} Element definiert sind, von fremden Ursprüngen zu laden und in einem {{HTMLElement("canvas")}} Element zu verwenden, als ob sie vom aktuellen Ursprung geladen würden.
- [CORS-Einstellungen Attribute](/de/docs/Web/HTML/Attributes/crossorigin)
  - : Einige HTML-Elemente, die Unterstützung für [CORS](/de/docs/Web/HTTP/Guides/CORS) bieten, wie {{HTMLElement("img")}} oder {{HTMLElement("video")}}, haben ein `crossorigin` Attribut (`crossOrigin` Eigenschaft), mit dem Sie die CORS-Anfragen für die vom Element abgerufenen Daten konfigurieren können.
- [Vorladen von Inhalten mit rel="preload"](/de/docs/Web/HTML/Attributes/rel/preload)
  - : Der `preload` Wert des [`rel`](/de/docs/Web/HTML/Element/link#rel) Attributs des {{htmlelement("link")}} Elements erlaubt es Ihnen, deklarative Abrufanfragen in Ihrem HTML {{htmlelement("head")}} zu schreiben, um Ressourcen zu spezifizieren, die Ihre Seiten sehr bald nach dem Laden benötigen, die Sie daher früh im Lebenszyklus eines Seitenladevorgangs vorladen möchten, bevor der Haupt-Rendering-Mechanismus des Browsers aktiv wird. Dies stellt sicher, dass sie früher verfügbar gemacht werden und weniger wahrscheinlich das erste Rendern der Seite blockieren, was zu Leistungsverbesserungen führt. Dieser Artikel bietet eine grundlegende Anleitung dazu, wie `preload` funktioniert.
- [Responsive Bilder](/de/docs/Web/HTML/Responsive_images)
  - : In diesem Artikel lernen wir das Konzept von responsiven Bildern kennen – Bilder, die auf Geräten mit sehr unterschiedlichen Bildschirmgrößen, Auflösungen und anderen derartigen Merkmalen gut funktionieren – und betrachten, welche Werkzeuge HTML bietet, um sie umzusetzen. Dies hilft, die Leistung auf verschiedenen Geräten zu verbessern.

## Referenz

- [HTML-Referenz](/de/docs/Web/HTML/Reference)
  - : HTML besteht aus **Elementen**, von denen jedes durch eine Anzahl von **Attributen** modifiziert werden kann. HTML-Dokumente sind durch **Links** miteinander verbunden.
- [HTML-Elemente-Referenz](/de/docs/Web/HTML/Element)
  - : Durchsuchen Sie eine Liste aller {{Glossary("HTML", "HTML")}} {{Glossary("Element", "Elemente")}}.
- [HTML-Attribute-Referenz](/de/docs/Web/HTML/Attributes)
  - : Elemente in HTML haben **Attribute**. Diese sind zusätzliche Werte, die die Elemente konfigurieren oder deren Verhalten auf verschiedene Weise anpassen.
- [Globale Attribute](/de/docs/Web/HTML/Global_attributes)
  - : Globale Attribute können für alle [HTML-Elemente](/de/docs/Web/HTML/Element) angegeben werden, _auch für solche, die nicht im Standard spezifiziert sind_. Das bedeutet, dass alle nicht-standardisierten Elemente diese Attribute dennoch erlauben müssen, auch wenn diese Elemente das Dokument HTML5-inkompatibel machen.
- {{Glossary("Inline-level_content", "Inline-Level-Elemente")}} und {{Glossary("Block-level_content", "Block-Level-Elemente")}}
  - : HTML-Elemente sind in der Regel "Inline-Level" oder "Block-Level" Elemente. Ein Inline-Level-Element nimmt nur den Raum ein, der durch die Tags, die es definieren, begrenzt ist. Ein Block-Level-Element beansprucht den gesamten Raum seines übergeordneten Elements (Containers) und erstellt dadurch eine "Block-Box".
- [HTML-Kommentare](/de/docs/Web/HTML/Comments)
  - : HTML-Kommentare werden verwendet, um erläuternde Anmerkungen zur Markup hinzuzufügen oder um zu verhindern, dass der Browser bestimmte Teile des Dokuments interpretiert.
- [Leitfaden zu Medientypen und Formaten im Web](/de/docs/Web/Media/Guides/Formats)
  - : Die {{HTMLElement("audio")}} und {{HTMLElement("video")}} Elemente erlauben es Ihnen, Audio- und Videomedien nativ innerhalb Ihrer Inhalte abzuspielen, ohne dass externe Softwareunterstützung benötigt wird.
- [HTML-Inhaltskategorien](/de/docs/Web/HTML/Content_categories)
  - : HTML besteht aus verschiedenen Arten von Inhalten, von denen jeder in bestimmten Kontexten verwendet werden darf und in anderen nicht. Ebenso hat jeder Kontext eine Reihe von anderen Inhaltskategorien, die er enthalten kann, sowie Elemente, die darin verwendet werden können oder nicht. Dies ist ein Leitfaden zu diesen Kategorien.
- [Quirks-Mode und Standard-Mode](/de/docs/Web/HTML/Quirks_Mode_and_Standards_Mode)
  - : Historische Informationen über den Quirks-Mode und Standard-Mode.

## Verwandte Themen

- [Anwenden von Farbe auf HTML-Elemente mit CSS](/de/docs/Web/CSS/CSS_colors/Applying_color)
  - : Dieser Artikel behandelt die meisten Möglichkeiten, wie Sie CSS verwenden, um Farbe zu HTML-Inhalten hinzuzufügen, und listet auf, welche Teile von HTML-Dokumenten gefärbt werden können und welche CSS-Eigenschaften dabei genutzt werden sollten.
