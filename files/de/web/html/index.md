---
title: "HTML: HyperText Markup Language"
short-title: HTML
slug: Web/HTML
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

**HTML** (HyperText Markup Language) ist der grundlegende Baustein des Webs. Es definiert die Bedeutung und Struktur von Webinhalten. Neben HTML werden generell andere Technologien genutzt, um das Aussehen/Präsentation einer Webseite zu beschreiben ([CSS](/de/docs/Web/CSS)) oder deren Funktionalität/Verhalten ([JavaScript](/de/docs/Web/JavaScript)).

"Hypertext" bezieht sich auf Links, die Webseiten miteinander verbinden, entweder innerhalb einer einzigen Website oder zwischen verschiedenen Websites. Links sind ein grundlegender Aspekt des Webs. Indem Sie Inhalte ins Internet hochladen und mit Seiten verlinken, die von anderen erstellt wurden, werden Sie zu einem aktiven Teilnehmer am World Wide Web.

HTML nutzt "Markup", um Text, Bilder und andere Inhalte für die Anzeige in einem Webbrowser zu kennzeichnen. HTML-Markup enthält spezielle "Elemente" wie {{HTMLElement("head")}}, {{HTMLElement("title")}}, {{HTMLElement("body")}}, {{HTMLElement("header")}}, {{HTMLElement("footer")}}, {{HTMLElement("article")}}, {{HTMLElement("section")}}, {{HTMLElement("p")}}, {{HTMLElement("div")}}, {{HTMLElement("span")}}, {{HTMLElement("img")}}, {{HTMLElement("aside")}}, {{HTMLElement("audio")}}, {{HTMLElement("canvas")}}, {{HTMLElement("datalist")}}, {{HTMLElement("details")}}, {{HTMLElement("embed")}}, {{HTMLElement("nav")}}, {{HTMLElement("search")}}, {{HTMLElement("output")}}, {{HTMLElement("progress")}}, {{HTMLElement("video")}}, {{HTMLElement("ul")}}, {{HTMLElement("ol")}}, {{HTMLElement("li")}} und viele andere.

Ein HTML-Element wird durch "Tags" von anderem Text in einem Dokument abgegrenzt, die aus dem Namen des Elements umgeben von `<` und `>` bestehen. Der Name eines Elements innerhalb eines Tags ist nicht case-sensitiv. Das bedeutet, er kann in Großbuchstaben, Kleinbuchstaben oder einer Mischung aus beidem geschrieben werden. Zum Beispiel kann das `<title>`-Tag als `<Title>`, `<TITLE>` oder in anderer Weise geschrieben werden. Allerdings ist es Konvention und empfohlene Praxis, Tags in Kleinbuchstaben zu schreiben.

Die folgenden Artikel können Ihnen helfen, mehr über HTML zu lernen.

## Einsteiger-Tutorials

- [Ihre erste Website: Erstellen der Inhalte](/de/docs/Learn_web_development/Getting_started/Your_first_website/Creating_the_content)
  - : Dieser Artikel bietet einen kurzen Überblick darüber, was HTML ist und wie man es verwendet, speziell für Personen, die völlig neu in der Webentwicklung sind.
- [Strukturierung von Inhalten mit HTML](/de/docs/Learn_web_development/Core/Structuring_content)
  - : Unser HTML-Modul im [Webentwicklung lernen](/de/docs/Learn_web_development) Abschnitt lehrt alle grundlegenden HTML-Fundamente von Grund auf.

## Leitfäden

Die [HTML-Leitfäden](/de/docs/Web/HTML/Guides) helfen Ihnen beim Entwickeln mit HTML im Web und behandeln Themen wie Formulare, CORS, Content Preloading und responsive Bilder.

- [HTML-Formulare](/de/docs/Learn_web_development/Extensions/Forms)
  - : Formulare sind ein sehr wichtiger Teil des Webs – sie bieten viel von der Funktionalität, die Sie zur Interaktion mit Websites benötigen, z.B. zur Registrierung und Anmeldung, zum Senden von Feedback, zum Kauf von Produkten und mehr. Dieses Modul führt Sie in die Erstellung der Client-Seite/Front-End-Teile von Formularen ein.
- [CORS aktivierte Bilder](/de/docs/Web/HTML/How_to/CORS_enabled_image)
  - : Das [`crossorigin`](/de/docs/Web/HTML/Reference/Elements/img#crossorigin) Attribut, in Kombination mit einem passenden {{Glossary("CORS", "CORS")}} Header, ermöglicht das Laden von Bildern, die durch das {{HTMLElement("img")}} Element definiert sind, von fremden Ursprungsorten und deren Verwendung in einem {{HTMLElement("canvas")}} Element, als ob sie vom aktuellen Ursprung geladen würden.
- [CORS-Einstellung Attribute](/de/docs/Web/HTML/Reference/Attributes/crossorigin)
  - : Einige HTML-Elemente, die Unterstützung für [CORS](/de/docs/Web/HTTP/Guides/CORS) bieten, wie {{HTMLElement("img")}} oder {{HTMLElement("video")}}, haben ein `crossorigin` Attribut (`crossOrigin` Property), welches Ihnen erlaubt, die CORS-Anfragen für die vom Element abgerufenen Daten zu konfigurieren.
- [Inhalte mit rel="preload" vorladen](/de/docs/Web/HTML/Reference/Attributes/rel/preload)
  - : Der `preload`-Wert des [`rel`](/de/docs/Web/HTML/Reference/Elements/link#rel) Attributs des {{htmlelement("link")}} Elements ermöglicht es Ihnen, deklarative Fetch-Anfragen in Ihrem HTML {{htmlelement("head")}} zu schreiben und Ressourcen anzugeben, die Ihre Seiten sehr bald nach dem Laden benötigen, die Sie daher frühzeitig im Lebenszyklus eines Seitenladevorgangs vorladen möchten, bevor die Haupt-Rendering-Maschine des Browsers einsetzt. Dies gewährleistet, dass sie früher verfügbar gemacht werden und weniger wahrscheinlich das erste Rendering der Seite blockieren, was zu Leistungsverbesserungen führt. Dieser Artikel bietet eine grundlegende Anleitung dazu, wie `preload` funktioniert.
- [Responsive Bilder](/de/docs/Web/HTML/Guides/Responsive_images)
  - : In diesem Artikel lernen wir das Konzept der responsiven Bilder kennen – Bilder, die auf Geräten mit stark unterschiedlichen Bildschirmgrößen, Auflösungen und anderen Merkmalen gut funktionieren – und sehen uns an, welche Tools HTML bereitstellt, um sie zu implementieren. Dies hilft, die Leistung auf verschiedenen Geräten zu verbessern.

## Referenz

- [HTML-Referenz](/de/docs/Web/HTML/Reference)
  - : HTML besteht aus **Elementen**, von denen jedes durch eine Anzahl von **Attributen** modifiziert werden kann. HTML-Dokumente sind über **Links** miteinander verbunden.
- [HTML-Elementreferenz](/de/docs/Web/HTML/Reference/Elements)
  - : Stöbern Sie in einer Liste aller {{Glossary("HTML", "HTML")}} {{Glossary("Element", "Elemente")}}.
- [HTML-Attributreferenz](/de/docs/Web/HTML/Reference/Attributes)
  - : Elemente in HTML haben **Attribute**. Diese sind zusätzliche Werte, die die Elemente konfigurieren oder deren Verhalten auf unterschiedliche Weise anpassen.
- [Globale Attribute](/de/docs/Web/HTML/Reference/Global_attributes)
  - : Globale Attribute können bei allen [HTML-Elementen](/de/docs/Web/HTML/Reference/Elements) angegeben werden, _auch bei denen, die nicht im Standard spezifiziert sind_. Das bedeutet, dass alle nicht-standardmäßigen Elemente diese Attribute trotzdem erlauben müssen, auch wenn diese Elemente das Dokument HTML5-nicht-konform machen.
- {{Glossary("Inline-level_content", "Inline-Elemente")}} und {{Glossary("Block-level_content", "Block-Elemente")}}
  - : HTML-Elemente sind normalerweise "Inline-Elemente" oder "Block-Elemente". Ein Inline-Element nimmt nur den Platz ein, der durch die Tags, die es definieren, begrenzt ist. Ein Block-Element nimmt den gesamten Platz des übergeordneten Elements (Containers) ein und erzeugt dadurch eine "Blockbox".
- [HTML-Kommentare](/de/docs/Web/HTML/Guides/Comments)
  - : HTML-Kommentare werden verwendet, um erklärende Notizen zum Markup hinzuzufügen oder um zu verhindern, dass der Browser bestimmte Teile des Dokuments interpretiert.
- [Leitfaden zu Medientypen und -formaten im Web](/de/docs/Web/Media/Guides/Formats)
  - : Die {{HTMLElement("audio")}} und {{HTMLElement("video")}} Elemente erlauben es Ihnen, Audio- und Videomedien nativ innerhalb Ihrer Inhalte abzuspielen, ohne dass zusätzliche Softwareunterstützung nötig ist.
- [HTML-Inhaltskategorien](/de/docs/Web/HTML/Guides/Content_categories)
  - : HTML besteht aus verschiedenen Arten von Inhalten, von denen jeder in bestimmten Kontexten verwendet werden darf und in anderen nicht. Ebenso hat jeder Kontext eine Reihe von anderen Inhaltskategorien, die er enthalten kann oder nicht enthalten darf. Dies ist ein Leitfaden zu diesen Kategorien.
- [Quirks-Modus und Standards-Modus](/de/docs/Web/HTML/Guides/Quirks_mode_and_standards_mode)
  - : Historische Informationen zu Quirks-Modus und Standards-Modus.

## Verwandte Themen

- [Anwendung von Farbe auf HTML-Elemente mit CSS](/de/docs/Web/CSS/CSS_colors/Applying_color)
  - : Dieser Artikel behandelt die meisten Möglichkeiten, wie Sie CSS verwenden, um Farbe zu HTML-Inhalten hinzuzufügen, und listet auf, welche Teile von HTML-Dokumenten gefärbt werden können und welche CSS-Eigenschaften dabei verwendet werden sollten.
