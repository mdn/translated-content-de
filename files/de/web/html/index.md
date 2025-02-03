---
title: "HTML: HyperText Markup Language"
short-title: HTML
slug: Web/HTML
l10n:
  sourceCommit: 27bceead8e9b1fe9c92df0fa5e418f81bd5b9fdf
---

{{HTMLSidebar}}

**HTML** (HyperText Markup Language) ist der grundlegendste Baustein des Webs. Es definiert die Bedeutung und Struktur von Web-Inhalten. Neben HTML werden in der Regel andere Technologien verwendet, um das Erscheinungsbild/Präsentation einer Webseite zu beschreiben ([CSS](/de/docs/Web/CSS)) oder deren Funktionalität/Verhalten ([JavaScript](/de/docs/Web/JavaScript)).

"Hypertext" bezieht sich auf Links, die Webseiten miteinander verbinden, entweder innerhalb einer einzigen Website oder zwischen Websites. Links sind ein grundlegender Aspekt des Webs. Indem Sie Inhalte ins Internet hochladen und mit Seiten verlinken, die von anderen Personen erstellt wurden, werden Sie ein aktiver Teilnehmer im World Wide Web.

HTML verwendet "Markup", um Text, Bilder und andere Inhalte für die Anzeige in einem Webbrowser zu annotieren. HTML-Markup umfasst spezielle "Elemente" wie {{HTMLElement("head")}}, {{HTMLElement("title")}}, {{HTMLElement("body")}}, {{HTMLElement("header")}}, {{HTMLElement("footer")}}, {{HTMLElement("article")}}, {{HTMLElement("section")}}, {{HTMLElement("p")}}, {{HTMLElement("div")}}, {{HTMLElement("span")}}, {{HTMLElement("img")}}, {{HTMLElement("aside")}}, {{HTMLElement("audio")}}, {{HTMLElement("canvas")}}, {{HTMLElement("datalist")}}, {{HTMLElement("details")}}, {{HTMLElement("embed")}}, {{HTMLElement("nav")}}, {{HTMLElement("search")}}, {{HTMLElement("output")}}, {{HTMLElement("progress")}}, {{HTMLElement("video")}}, {{HTMLElement("ul")}}, {{HTMLElement("ol")}}, {{HTMLElement("li")}} und viele andere.

Ein HTML-Element wird durch "Tags" von anderem Text in einem Dokument abgegrenzt, die aus dem Elementnamen bestehen, umschlossen von `<` und `>`. Der Name eines Elements innerhalb eines Tags ist nicht case-sensitiv. Das heißt, er kann in Großbuchstaben, Kleinbuchstaben oder einer Mischung aus beidem geschrieben werden. Zum Beispiel kann das `<title>` Tag als `<Title>`, `<TITLE>` oder in jeder anderen Form geschrieben werden. Dennoch ist es die Konvention und empfohlene Praxis, Tags in Kleinbuchstaben zu schreiben.

Die folgenden Artikel können Ihnen helfen, mehr über HTML zu lernen.

## Anfänger-Tutorials

- [Ihre erste Website: Erstellen der Inhalte](/de/docs/Learn_web_development/Getting_started/Your_first_website/Creating_the_content)
  - : Dieser Artikel bietet eine kurze Einführung in das, was HTML ist und wie es verwendet wird, und richtet sich an Personen, die völlig neu in der Webentwicklung sind.
- [Strukturierung von Inhalten mit HTML](/de/docs/Learn_web_development/Core/Structuring_content)
  - : Unser [Leitfaden zur Webentwicklung](/de/docs/Learn_web_development) enthält ein HTML-Modul, das alle HTML-Grundlagen von Grund auf lehrt.

## Leitfäden

- [HTML-Formulare](/de/docs/Learn_web_development/Extensions/Forms)
  - : Formulare sind ein sehr wichtiger Teil des Webs — sie bieten viele der Funktionalitäten, die Sie zum Interagieren mit Websites benötigen, z.B. Registrierung und Anmeldung, Feedback senden, Produkte kaufen und mehr. Dieses Modul hilft Ihnen bei den ersten Schritten zur Erstellung der clientseitigen/Front-End-Teile von Formularen.
- [CORS-aktiviertes Bild](/de/docs/Web/HTML/CORS_enabled_image)
  - : Das [`crossorigin`](/de/docs/Web/HTML/Element/img#crossorigin) Attribut, in Kombination mit einem geeigneten {{Glossary("CORS", "CORS")}} Header, ermöglicht es, Bilder, die durch das {{HTMLElement("img")}} Element definiert sind, von fremden Ursprüngen zu laden und in einem {{HTMLElement("canvas")}} Element zu verwenden, als ob sie vom aktuellen Ursprung geladen würden.
- [CORS-Einstellungen Attribute](/de/docs/Web/HTML/Attributes/crossorigin)
  - : Einige HTML-Elemente, die Unterstützung für [CORS](/de/docs/Web/HTTP/CORS) bieten, wie {{HTMLElement("img")}} oder {{HTMLElement("video")}}, haben ein `crossorigin` Attribut (`crossOrigin` Eigenschaft), das es Ihnen ermöglicht, die CORS-Anfragen für die abgerufenen Daten des Elements zu konfigurieren.
- [Vorladen von Inhalten mit rel="preload"](/de/docs/Web/HTML/Attributes/rel/preload)
  - : Der `preload` Wert des {{htmlelement("link")}} Elements [`rel`](/de/docs/Web/HTML/Element/link#rel) Attributs ermöglicht es Ihnen, deklarative Fetch-Anfragen in Ihrem HTML {{htmlelement("head")}} zu schreiben und Ressourcen anzugeben, die Ihre Seiten kurz nach dem Laden benötigen, sodass Sie das Vorladen dieser Ressourcen früh im Lebenszyklus eines Seitenladevorgangs starten möchten, bevor der Haupt-Rendering-Mechanismus des Browsers startet. Dies stellt sicher, dass sie früher verfügbar gemacht werden und weniger wahrscheinlich die erste Darstellung der Seite blockieren, was zu Leistungsverbesserungen führt. Dieser Artikel bietet eine grundlegende Anleitung dazu, wie `preload` funktioniert.
- [Responsive Bilder](/de/docs/Web/HTML/Responsive_images)
  - : In diesem Artikel lernen wir das Konzept von responsiven Bildern kennen — Bilder, die gut auf Geräten mit sehr unterschiedlichen Bildschirmgrößen, Auflösungen und anderen Merkmalen funktionieren — und schauen uns an, welche Werkzeuge HTML bereitstellt, um sie umzusetzen. Dies trägt zur Verbesserung der Leistung auf verschiedenen Geräten bei.

## Referenz

- [HTML-Referenz](/de/docs/Web/HTML/Reference)
  - : HTML besteht aus **Elementen**, von denen jedes durch eine Vielzahl von **Attributen** modifiziert werden kann. HTML-Dokumente werden durch **Links** miteinander verbunden.
- [HTML-Element-Referenz](/de/docs/Web/HTML/Element)
  - : Durchstöbern Sie eine Liste aller {{Glossary("HTML", "HTML")}} {{Glossary("Element", "Elemente")}}.
- [HTML-Attribut-Referenz](/de/docs/Web/HTML/Attributes)
  - : Elemente in HTML haben **Attribute**. Diese sind zusätzliche Werte, die die Elemente konfigurieren oder ihr Verhalten auf verschiedene Weise anpassen.
- [Globale Attribute](/de/docs/Web/HTML/Global_attributes)
  - : Globale Attribute können bei allen [HTML-Elementen](/de/docs/Web/HTML/Element) angegeben werden, _selbst bei denen, die nicht im Standard enthalten sind_. Dies bedeutet, dass alle nicht standardmäßigen Elemente diese Attribute dennoch zulassen müssen, obwohl diese Elemente das Dokument HTML5-nichtkonform machen.
- {{Glossary("Inline-level_content", "Inline-level Elemente")}} und {{Glossary("Block-level_content", "Block-level Elemente")}}
  - : HTML-Elemente sind normalerweise "inline-level" oder "block-level" Elemente. Ein Inline-Level-Element nimmt nur den Raum ein, der durch die Tags definiert wird, die es umgeben. Ein Block-Level-Element nimmt den gesamten Raum seines übergeordneten Elements (Containers) ein und erstellt damit eine "Blockbox".
- [HTML-Kommentare](/de/docs/Web/HTML/Comments)
  - : HTML-Kommentare werden verwendet, um erklärende Anmerkungen zum Markup hinzuzufügen oder um den Browser daran zu hindern, bestimmte Teile des Dokuments zu interpretieren.
- [Leitfaden zu Medientypen und Formaten im Web](/de/docs/Web/Media/Guides/Formats)
  - : Die {{HTMLElement("audio")}} und {{HTMLElement("video")}} Elemente ermöglichen es Ihnen, Audio- und Video-Medien nativ in Ihrem Inhalt abzuspielen, ohne dass eine externe Softwareunterstützung notwendig ist.
- [HTML-Inhaltskategorien](/de/docs/Web/HTML/Content_categories)
  - : HTML setzt sich aus verschiedenen Arten von Inhalten zusammen, von denen jeder in bestimmten Kontexten verwendet werden darf und in anderen nicht. Ebenso hat jeder Kontext eine Reihe anderer Inhaltskategorien, die er enthalten kann, und Elemente, die in ihnen verwendet werden dürfen oder nicht. Dies ist ein Leitfaden zu diesen Kategorien.
- [Quirks-Modus und Standards-Modus](/de/docs/Web/HTML/Quirks_Mode_and_Standards_Mode)
  - : Historische Informationen über den Quirks-Modus und den Standards-Modus.

## Verwandte Themen

- [Anwenden von Farbe auf HTML-Elemente mit CSS](/de/docs/Web/CSS/CSS_colors/Applying_color)
  - : Dieser Artikel deckt die meisten Methoden ab, wie Sie CSS verwenden, um Farbe zu HTML-Inhalten hinzuzufügen, und listet auf, welche Teile von HTML-Dokumenten gefärbt werden können und welche CSS-Eigenschaften dafür verwendet werden.
