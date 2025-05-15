---
title: "HTML: HyperText Markup Language"
short-title: HTML
slug: Web/HTML
l10n:
  sourceCommit: f08eb478696946da474cf5c5ecdead4f5955f1b4
---

{{HTMLSidebar}}

**HTML** (HyperText Markup Language) ist der grundlegendste Baustein des Webs. Es definiert die Bedeutung und Struktur von Webinhalten. Neben HTML werden in der Regel andere Technologien verwendet, um das Erscheinungsbild/die Präsentation einer Webseite zu beschreiben ([CSS](/de/docs/Web/CSS)) oder deren Funktionalität/Verhalten ([JavaScript](/de/docs/Web/JavaScript)).

"Hypertext" bezieht sich auf Links, die Webseiten miteinander verbinden, entweder innerhalb einer einzigen Website oder zwischen Websites. Links sind ein grundlegender Aspekt des Webs. Indem Sie Inhalte ins Internet hochladen und mit von anderen erstellten Seiten verknüpfen, werden Sie ein aktiver Teilnehmer im World Wide Web.

HTML verwendet "Markup", um Text, Bilder und andere Inhalte für die Anzeige in einem Webbrowser zu annotieren. HTML-Markup umfasst spezielle "Elemente" wie {{HTMLElement("head")}}, {{HTMLElement("title")}}, {{HTMLElement("body")}}, {{HTMLElement("header")}}, {{HTMLElement("footer")}}, {{HTMLElement("article")}}, {{HTMLElement("section")}}, {{HTMLElement("p")}}, {{HTMLElement("div")}}, {{HTMLElement("span")}}, {{HTMLElement("img")}}, {{HTMLElement("aside")}}, {{HTMLElement("audio")}}, {{HTMLElement("canvas")}}, {{HTMLElement("datalist")}}, {{HTMLElement("details")}}, {{HTMLElement("embed")}}, {{HTMLElement("nav")}}, {{HTMLElement("search")}}, {{HTMLElement("output")}}, {{HTMLElement("progress")}}, {{HTMLElement("video")}}, {{HTMLElement("ul")}}, {{HTMLElement("ol")}}, {{HTMLElement("li")}} und viele andere.

Ein HTML-Element wird durch "Tags", die aus dem Elementnamen bestehen, der von `<` und `>` umgeben ist, vom übrigen Text in einem Dokument abgetrennt. Der Name eines Elements innerhalb eines Tags ist nicht case-sensitiv. Das heißt, er kann in Großbuchstaben, Kleinbuchstaben oder einer Mischung davon geschrieben werden. Zum Beispiel kann das `<title>` Tag als `<Title>`, `<TITLE>` oder in beliebiger anderer Weise geschrieben werden. Die Konvention und empfohlene Praxis ist jedoch, Tags in Kleinbuchstaben zu schreiben.

Die folgenden Artikel können Ihnen helfen, mehr über HTML zu lernen.

## Einsteiger-Tutorials

- [Ihre erste Website: Erstellen der Inhalte](/de/docs/Learn_web_development/Getting_started/Your_first_website/Creating_the_content)
  - : Dieser Artikel bietet eine kurze Einführung in das, was HTML ist und wie es verwendet wird, und richtet sich an Personen, die völlig neu in der Webentwicklung sind.
- [Strukturierung von Inhalten mit HTML](/de/docs/Learn_web_development/Core/Structuring_content)
  - : Unser [Lernen Sie Webentwicklung](/de/docs/Learn_web_development) Abschnitts-HTML-Modul lehrt alle HTML-Grundlagen von Grund auf.

## Leitfäden

Die [HTML-Leitfäden](/de/docs/Web/HTML/Guides) helfen Ihnen beim Erstellen mit HTML im Web und behandeln Themen wie Formulare, CORS, Inhaltspreloading und responsive Bilder.

- [HTML-Formulare](/de/docs/Learn_web_development/Extensions/Forms)
  - : Formulare sind ein sehr wichtiger Teil des Webs. Sie bieten viele der Funktionalitäten, die Sie für die Interaktion mit Websites benötigen, z.B. Registrierung und Anmeldung, Feedback senden, Produkte kaufen und mehr. Dieses Modul führt Sie in die Erstellung der clientseitigen/front-end Teile von Formularen ein.
- [CORS-fähiges Bild](/de/docs/Web/HTML/How_to/CORS_enabled_image)
  - : Das [`crossorigin`](/de/docs/Web/HTML/Reference/Elements/img#crossorigin) Attribut, in Kombination mit einem geeigneten {{Glossary("CORS", "CORS")}} Header, erlaubt es, Bilder, die durch das {{HTMLElement("img")}} Element definiert sind, von fremden Ursprüngen zu laden und in einem {{HTMLElement("canvas")}} Element zu verwenden, als ob sie vom aktuellen Ursprung geladen würden.
- [CORS-Einstellungen Attribute](/de/docs/Web/HTML/Reference/Attributes/crossorigin)
  - : Einige HTML-Elemente, die Unterstützung für [CORS](/de/docs/Web/HTTP/Guides/CORS) bieten, wie {{HTMLElement("img")}} oder {{HTMLElement("video")}}, haben ein `crossorigin` Attribut (`crossOrigin` Eigenschaft), das Ihnen ermöglicht, die CORS-Anfragen für die vom Element abgerufenen Daten zu konfigurieren.
- [Content mit rel="preload" vorladen](/de/docs/Web/HTML/Reference/Attributes/rel/preload)
  - : Der `preload` Wert des {{htmlelement("link")}} Elements [`rel`](/de/docs/Web/HTML/Reference/Elements/link#rel) Attributs ermöglicht es Ihnen, deklarative Abrufanforderungen in Ihrem HTML {{htmlelement("head")}} zu schreiben, in dem Ressourcen angegeben werden, die Ihre Seiten sehr bald nach dem Laden benötigen werden, die Sie daher frühzeitig im Lebenszyklus eines Seitenladevorgangs vorladen möchten, bevor der Haupt-Rendering-Mechanismus des Browsers aktiviert wird. Dies stellt sicher, dass sie früher verfügbar gemacht werden und weniger wahrscheinlich die erste Darstellung der Seite blockieren, was zu Leistungsverbesserungen führt. Dieser Artikel bietet eine grundlegende Anleitung dazu, wie `preload` funktioniert.
- [Responsive Bilder](/de/docs/Web/HTML/Guides/Responsive_images)
  - : In diesem Artikel lernen wir das Konzept von responsiven Bildern kennen — Bilder, die auf Geräten mit stark unterschiedlichen Bildschirmgrößen, Auflösungen und anderen solchen Merkmalen gut funktionieren — und sehen, welche Werkzeuge HTML bietet, um sie umzusetzen. Dies hilft, die Leistung auf verschiedenen Geräten zu verbessern.

## Referenz

- [HTML-Referenz](/de/docs/Web/HTML/Reference)
  - : HTML besteht aus **Elementen**, von denen jedes durch eine Anzahl von **Attributen** modifiziert werden kann. HTML-Dokumente sind durch **Links** miteinander verbunden.
- [HTML-Elementreferenz](/de/docs/Web/HTML/Reference/Elements)
  - : Durchsuchen Sie eine Liste aller {{Glossary("HTML", "HTML")}} {{Glossary("Element", "Elemente")}}.
- [HTML-Attributreferenz](/de/docs/Web/HTML/Reference/Attributes)
  - : Elemente in HTML verfügen über **Attribute**. Diese sind zusätzliche Werte, die die Elemente konfigurieren oder ihr Verhalten auf verschiedene Weise anpassen.
- [Globale Attribute](/de/docs/Web/HTML/Reference/Global_attributes)
  - : Globale Attribute können bei allen [HTML-Elementen](/de/docs/Web/HTML/Reference/Elements) angegeben werden, _selbst bei denen, die nicht im Standard angegeben sind_. Das bedeutet, dass alle nicht standardmäßigen Elemente diese Attribute dennoch zulassen müssen, auch wenn diese Elemente das Dokument HTML5-unzulässig machen.
- {{Glossary("Inline-level_content", "Inline-Level-Elemente")}} und {{Glossary("Block-level_content", "Block-Level-Elemente")}}
  - : HTML-Elemente sind normalerweise "Inline-Level" oder "Block-Level" Elemente. Ein Inline-Level-Element nimmt nur den Raum ein, der durch die Tags begrenzt wird, die es definieren. Ein Block-Level-Element nimmt den gesamten Raum seines Elternelements (Containers) ein und bildet dadurch eine "Block-Box".
- [HTML-Kommentare](/de/docs/Web/HTML/Guides/Comments)
  - : HTML-Kommentare werden verwendet, um erklärende Notizen zum Markup hinzuzufügen oder um den Browser daran zu hindern, bestimmte Teile des Dokuments zu interpretieren.
- [Leitfaden zu Medientypen und -formaten im Web](/de/docs/Web/Media/Guides/Formats)
  - : Die {{HTMLElement("audio")}} und {{HTMLElement("video")}} Elemente ermöglichen es, Audio- und Videomedien nativ innerhalb Ihrer Inhalte abzuspielen, ohne dass externe Softwareunterstützung notwendig ist.
- [HTML-Inhaltskategorien](/de/docs/Web/HTML/Guides/Content_categories)
  - : HTML besteht aus verschiedenen Arten von Inhalten, von denen jeder in bestimmten Kontexten verwendet werden darf und in anderen nicht zulässig ist. Ähnlich hat jeder Kontext eine Reihe anderer Inhaltskategorien, die er enthalten kann und Elemente, die nicht verwendet werden dürfen. Dies ist eine Anleitung zu diesen Kategorien.
- [Quirks-Modus und Standards-Modus](/de/docs/Web/HTML/Guides/Quirks_mode_and_standards_mode)
  - : Historische Informationen über den Quirks-Modus und den Standards-Modus.

## Verwandte Themen

- [Farben auf HTML-Elemente mit CSS anwenden](/de/docs/Web/CSS/CSS_colors/Applying_color)
  - : Dieser Artikel behandelt die meisten Möglichkeiten, wie Sie CSS verwenden, um Farbe zu HTML-Inhalten hinzuzufügen. Er listet auf, welche Teile von HTML-Dokumenten gefärbt werden können und welche CSS-Eigenschaften dabei verwendet werden sollten.
