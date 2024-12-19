---
title: "HTML: HyperText Markup Language"
short-title: HTML
slug: Web/HTML
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{HTMLSidebar}}

**HTML** (HyperText Markup Language) ist der grundlegendste Baustein des Webs. Es definiert die Bedeutung und Struktur von Webinhalten. Neben HTML werden in der Regel andere Technologien verwendet, um das Erscheinungsbild/Präsentation einer Webseite zu beschreiben ([CSS](/de/docs/Web/CSS)) oder die Funktionalität/Verhalten ([JavaScript](/de/docs/Web/JavaScript)).

"Hypertext" bezieht sich auf Links, die Webseiten miteinander verbinden, entweder innerhalb einer einzigen Website oder zwischen verschiedenen Websites. Links sind ein grundlegender Aspekt des Webs. Indem Sie Inhalte ins Internet hochladen und mit Seiten verknüpfen, die von anderen Personen erstellt wurden, werden Sie zu einem aktiven Teilnehmer des World Wide Web.

HTML verwendet "Markup", um Text, Bilder und andere Inhalte für die Anzeige in einem Webbrowser zu annotieren. HTML-Markup umfasst spezielle "Elemente" wie {{HTMLElement("head")}}, {{HTMLElement("title")}}, {{HTMLElement("body")}}, {{HTMLElement("header")}}, {{HTMLElement("footer")}}, {{HTMLElement("article")}}, {{HTMLElement("section")}}, {{HTMLElement("p")}}, {{HTMLElement("div")}}, {{HTMLElement("span")}}, {{HTMLElement("img")}}, {{HTMLElement("aside")}}, {{HTMLElement("audio")}}, {{HTMLElement("canvas")}}, {{HTMLElement("datalist")}}, {{HTMLElement("details")}}, {{HTMLElement("embed")}}, {{HTMLElement("nav")}}, {{HTMLElement("search")}}, {{HTMLElement("output")}}, {{HTMLElement("progress")}}, {{HTMLElement("video")}}, {{HTMLElement("ul")}}, {{HTMLElement("ol")}}, {{HTMLElement("li")}} und viele andere.

Ein HTML-Element wird durch "Tags" von anderem Text in einem Dokument abgesetzt, die aus dem Elementnamen bestehen, der von `<` und `>` umgeben ist. Der Name eines Elements innerhalb eines Tags ist nicht case-sensitiv. Das bedeutet, dass er in Großbuchstaben, Kleinbuchstaben oder einer Mischung daraus geschrieben werden kann. Zum Beispiel kann das `<title>`-Tag als `<Title>`, `<TITLE>` oder auf jede andere Weise geschrieben werden. Die Konvention und empfohlene Praxis ist jedoch, Tags in Kleinbuchstaben zu schreiben.

Die folgenden Artikel können Ihnen helfen, mehr über HTML zu lernen.

## Anfänger-Tutorials

- [Ihre erste Website: Erstellen des Inhalts](/de/docs/Learn_web_development/Getting_started/Your_first_website/Creating_the_content)
  - : Dieser Artikel bietet eine kurze Einführung, was HTML ist und wie es verwendet wird, und richtet sich an Personen, die völlig neu in der Webentwicklung sind.
- [Strukturierung von Inhalten mit HTML](/de/docs/Learn_web_development/Core/Structuring_content)
  - : Unser [Leitfaden zur Webentwicklung](/de/docs/Learn_web_development) HTML-Modul lehrt alle grundlegenden HTML-Fundamente von Grund auf.

## Leitfäden

- [HTML-Formulare](/de/docs/Learn_web_development/Extensions/Forms)
  - : Formulare sind ein sehr wichtiger Teil des Webs — sie bieten viel der Funktionalität, die Sie für die Interaktion mit Websites benötigen, z. B. Registrierung und Anmeldung, Feedback senden, Produkte kaufen und mehr. Dieses Modul vermittelt Ihnen den Einstieg in die Erstellung der clientseitigen/frontend-Teile von Formularen.
- [CORS-aktiviertes Bild](/de/docs/Web/HTML/CORS_enabled_image)
  - : Das [`crossorigin`](/de/docs/Web/HTML/Element/img#crossorigin) Attribut, in Kombination mit einem geeigneten {{Glossary("CORS", "CORS")}} Header, erlaubt es, dass Bilder, die durch das {{HTMLElement("img")}} Element definiert sind, von fremden Ursprüngen geladen und in einem {{HTMLElement("canvas")}} Element verwendet werden, als ob sie vom aktuellen Ursprung geladen würden.
- [CORS-Einstellung-Attribute](/de/docs/Web/HTML/Attributes/crossorigin)
  - : Einige HTML-Elemente, die Unterstützung für [CORS](/de/docs/Web/HTTP/CORS) bieten, wie {{HTMLElement("img")}} oder {{HTMLElement("video")}}, haben ein `crossorigin` Attribut (`crossOrigin` Eigenschaft), das es Ihnen ermöglicht, die CORS-Anfragen für die abgerufenen Daten des Elements zu konfigurieren.
- [Vorab laden von Inhalten mit rel="preload"](/de/docs/Web/HTML/Attributes/rel/preload)
  - : Der `preload` Wert des {{htmlelement("link")}} Elements [`rel`](/de/docs/Web/HTML/Element/link#rel) Attributs ermöglicht Ihnen, deklarative Abrufanfragen in Ihrem HTML {{htmlelement("head")}} zu schreiben und Ressourcen zu spezifizieren, die Ihre Seiten kurz nach dem Laden benötigen. Dadurch möchten Sie frühzeitig im Lebenszyklus eines Seitenladens mit dem Vorladen beginnen, bevor die Haupt-Render-Maschinerie des Browsers in Gang kommt. Damit wird sichergestellt, dass sie früher verfügbar sind und weniger wahrscheinlich die erste Darstellung der Seite blockieren, was zu Leistungsverbesserungen führt. Dieser Artikel bietet eine grundlegende Anleitung, wie `preload` funktioniert.
- [Responsive Bilder](/de/docs/Web/HTML/Responsive_images)
  - : In diesem Artikel lernen wir das Konzept responsiver Bilder kennen – Bilder, die gut auf Geräten mit stark unterschiedlichen Bildschirmgrößen, Auflösungen und anderen Merkmalen funktionieren – und schauen, welche Werkzeuge HTML bereitstellt, um diese umzusetzen. Dies trägt zur Leistungsverbesserung über verschiedene Geräte hinweg bei.

## Referenz

- [HTML-Referenz](/de/docs/Web/HTML/Reference)
  - : HTML besteht aus **Elementen**, von denen jedes durch eine Anzahl von **Attributen** modifiziert werden kann. HTML-Dokumente sind durch **Links** miteinander verbunden.
- [HTML-Element-Referenz](/de/docs/Web/HTML/Element)
  - : Durchsuchen Sie eine Liste aller {{Glossary("HTML", "HTML")}} {{Glossary("Element", "Elemente")}}.
- [HTML-Attribut-Referenz](/de/docs/Web/HTML/Attributes)
  - : Elemente in HTML haben **Attribute**. Diese sind zusätzliche Werte, die die Elemente konfigurieren oder ihr Verhalten auf verschiedene Weise anpassen.
- [Globale Attribute](/de/docs/Web/HTML/Global_attributes)
  - : Globale Attribute können bei allen [HTML-Elementen](/de/docs/Web/HTML/Element) angegeben werden, _auch bei denen, die nicht standardmäßig definiert sind_. Das bedeutet, dass auch nicht-standardisierte Elemente diese Attribute zulassen müssen, obwohl diese Elemente das Dokument HTML5-nicht-konform machen.
- {{Glossary("Inline-level_content", "Inline-Elemente")}} und {{Glossary("Block-level_content", "Blockebenen-Elemente")}}
  - : HTML-Elemente sind üblicherweise "inline-level"- oder "block-level"-Elemente. Ein Inline-Element beansprucht nur den Raum, der durch die Tags begrenzt ist, die es definieren. Ein Blockebenen-Element nimmt den gesamten Raum seines übergeordneten Elements (Containers) ein und bildet dadurch eine "Blockbox".
- [HTML-Kommentare](/de/docs/Web/HTML/Comments)
  - : HTML-Kommentare werden verwendet, um erklärende Anmerkungen zum Markup hinzuzufügen oder den Browser daran zu hindern, bestimmte Teile des Dokuments zu interpretieren.
- [Leitfaden zu Medientypen und Formaten im Web](/de/docs/Web/Media/Formats)
  - : Die {{HTMLElement("audio")}} und {{HTMLElement("video")}} Elemente erlauben es Ihnen, Audio- und Video-Medien nativ in Ihrem Inhalt abzuspielen, ohne dass externe Software-Unterstützung erforderlich ist.
- [HTML-Inhaltskategorien](/de/docs/Web/HTML/Content_categories)
  - : HTML besteht aus mehreren Arten von Inhalten, von denen jede in bestimmten Kontexten verwendet werden darf und in anderen nicht. Ähnlich hat jeder Kontext eine Reihe anderer Inhaltstypen, die er enthalten kann oder nicht verwenden darf. Dies ist ein Leitfaden zu diesen Kategorien.
- [Quirks-Modus und Standards-Modus](/de/docs/Web/HTML/Quirks_Mode_and_Standards_Mode)
  - : Historische Informationen über den Quirks-Modus und den Standards-Modus.

## Verwandte Themen

- [Anwenden von Farbe auf HTML-Elemente mit CSS](/de/docs/Web/CSS/CSS_colors/Applying_color)
  - : Dieser Artikel behandelt die meisten Möglichkeiten, wie Sie CSS verwenden können, um HTML-Inhalte zu färben, listet auf, welche Teile eines HTML-Dokuments gefärbt werden können und welche CSS-Eigenschaften verwendet werden, wenn dies geschieht.
