---
title: "HTML: HyperText Markup Language"
short-title: HTML
slug: Web/HTML
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}

**HTML** (HyperText Markup Language) ist der grundlegendste Baustein des Webs. Es definiert die Bedeutung und Struktur von Webinhalten. Neben HTML werden in der Regel andere Technologien verwendet, um das Erscheinungsbild/Präsentation einer Webseite zu beschreiben ([CSS](/de/docs/Web/CSS)) oder die Funktionalität/Verhalten ([JavaScript](/de/docs/Web/JavaScript)).

"Hypertext" bezieht sich auf Links, die Webseiten miteinander verbinden, entweder innerhalb einer einzigen Website oder zwischen Websites. Links sind ein grundlegender Aspekt des Webs. Indem Sie Inhalte ins Internet hochladen und mit von anderen erstellten Seiten verlinken, werden Sie ein aktiver Teilnehmer des World Wide Web.

HTML verwendet "Markup", um Text, Bilder und andere Inhalte für die Anzeige in einem Webbrowser zu annotieren. HTML-Markup umfasst spezielle "Elemente" wie {{HTMLElement("head")}}, {{HTMLElement("title")}}, {{HTMLElement("body")}}, {{HTMLElement("header")}}, {{HTMLElement("footer")}}, {{HTMLElement("article")}}, {{HTMLElement("section")}}, {{HTMLElement("p")}}, {{HTMLElement("div")}}, {{HTMLElement("span")}}, {{HTMLElement("img")}}, {{HTMLElement("aside")}}, {{HTMLElement("audio")}}, {{HTMLElement("canvas")}}, {{HTMLElement("datalist")}}, {{HTMLElement("details")}}, {{HTMLElement("embed")}}, {{HTMLElement("nav")}}, {{HTMLElement("search")}}, {{HTMLElement("output")}}, {{HTMLElement("progress")}}, {{HTMLElement("video")}}, {{HTMLElement("ul")}}, {{HTMLElement("ol")}}, {{HTMLElement("li")}} und viele andere.

Ein HTML-Element wird durch "Tags" von anderem Text in einem Dokument abgegrenzt, die aus dem Elementnamen bestehen, umgeben von `<` und `>`. Der Name eines Elements innerhalb eines Tags ist nicht case-sensitiv. Das bedeutet, er kann in Großbuchstaben, Kleinbuchstaben oder einer Mischung geschrieben werden. Zum Beispiel kann das `<title>`-Tag als `<Title>`, `<TITLE>` oder in irgendeiner anderen Weise geschrieben werden. Die Konvention und empfohlene Praxis ist jedoch, Tags in Kleinbuchstaben zu schreiben.

Die unten stehenden Artikel können Ihnen helfen, mehr über HTML zu lernen.

## Tutorials für Anfänger

- [Ihre erste Website: Erstellen der Inhalte](/de/docs/Learn_web_development/Getting_started/Your_first_website/Creating_the_content)
  - : Dieser Artikel bietet eine kurze Einführung in das, was HTML ist und wie man es verwendet, und richtet sich an Personen, die völlig neu in der Webentwicklung sind.
- [Inhalte mit HTML strukturieren](/de/docs/Learn_web_development/Core/Structuring_content)
  - : Unser [Leitfaden zur Webentwicklung](/de/docs/Learn_web_development) im HTML-Modul vermittelt alle HTML-Grundlagen von Grund auf.

## Leitfäden

- [HTML-Formulare](/de/docs/Learn_web_development/Extensions/Forms)
  - : Formulare sind ein sehr wichtiger Bestandteil des Webs - sie bieten viel der Funktionalität, die Sie für die Interaktion mit Websites benötigen, z. B. Registrierung und Anmeldung, Feedback senden, Produkte kaufen und mehr. Dieses Modul gibt Ihnen eine Einführung in die Erstellung der clientseitigen/front-end Teile von Formularen.
- [CORS-fähiges Bild](/de/docs/Web/HTML/How_to/CORS_enabled_image)
  - : Das Attribut [`crossorigin`](/de/docs/Web/HTML/Reference/Elements/img#crossorigin) ermöglicht es zusammen mit einem geeigneten {{Glossary("CORS", "CORS")}}-Header, dass Bilder, die durch das {{HTMLElement("img")}}-Element definiert sind, von fremden Ursprüngen geladen und in einem {{HTMLElement("canvas")}}-Element verwendet werden können, als ob sie vom aktuellen Ursprung geladen würden.
- [CORS-Einstellungen für Attribute](/de/docs/Web/HTML/Reference/Attributes/crossorigin)
  - : Einige HTML-Elemente, die Unterstützung für [CORS](/de/docs/Web/HTTP/Guides/CORS) bieten, wie {{HTMLElement("img")}} oder {{HTMLElement("video")}}, haben ein `crossorigin`-Attribut (`crossOrigin`-Eigenschaft), das Ihnen erlaubt, die CORS-Anfragen für die abgerufenen Daten des Elements zu konfigurieren.
- [Inhalte mit rel="preload" vorladen](/de/docs/Web/HTML/Reference/Attributes/rel/preload)
  - : Der `preload`-Wert des [`rel`](/de/docs/Web/HTML/Reference/Elements/link#rel)-Attributs des {{htmlelement("link")}}-Elements ermöglicht es Ihnen, deklarative Abrufanforderungen in Ihr HTML-{{htmlelement("head")}} zu schreiben. Dabei geben Sie Ressourcen an, die Ihre Seiten sehr bald nach dem Laden benötigen und die Sie daher frühzeitig im Lebenszyklus eines Seitenladevorgangs vorladen möchten, bevor der Hauptbrowser-Rendering-Mechanismus einsetzt. Dies stellt sicher, dass sie früher verfügbar gemacht und die erste Darstellung der Seite weniger wahrscheinlich blockiert wird, was zu Leistungsverbesserungen führt. Dieser Artikel bietet einen grundlegenden Leitfaden dazu, wie `preload` funktioniert.
- [Responsive Bilder](/de/docs/Web/HTML/Guides/Responsive_images)
  - : In diesem Artikel werden wir das Konzept der responsiven Bilder erlernen - Bilder, die gut auf Geräten mit stark unterschiedlichen Bildschirmgrößen, Auflösungen und anderen ähnlichen Merkmalen funktionieren - und sehen, welche Werkzeuge HTML bietet, um sie zu implementieren. Dies hilft, die Leistung auf verschiedenen Geräten zu verbessern.

## Referenz

- [HTML-Referenz](/de/docs/Web/HTML/Reference)
  - : HTML besteht aus **Elementen**, von denen jedes durch eine Anzahl von **Attributen** modifiziert werden kann. HTML-Dokumente sind durch **Links** miteinander verbunden.
- [HTML-Element-Referenz](/de/docs/Web/HTML/Reference/Elements)
  - : Durchsuchen Sie eine Liste aller {{Glossary("HTML", "HTML")}}-{{Glossary("Element", "Elemente")}}.
- [HTML-Attribut-Referenz](/de/docs/Web/HTML/Reference/Attributes)
  - : Elemente in HTML haben **Attribute**. Diese sind zusätzliche Werte, die die Elemente konfigurieren oder deren Verhalten auf verschiedene Arten anpassen.
- [Globale Attribute](/de/docs/Web/HTML/Reference/Global_attributes)
  - : Globale Attribute können auf alle [HTML-Elemente](/de/docs/Web/HTML/Reference/Elements) angewendet werden, _selbst auf die, die nicht im Standard spezifiziert sind_. Dies bedeutet, dass alle nicht standardisierten Elemente trotzdem diese Attribute erlauben müssen, auch wenn diese Elemente das Dokument HTML5-nichtkonform machen.
- {{Glossary("Inline-level_content", "Inline-Level-Elemente")}} und {{Glossary("Block-level_content", "Block-Level-Elemente")}}
  - : HTML-Elemente sind in der Regel "Inline-Level"- oder "Block-Level"-Elemente. Ein Inline-Level-Element nimmt nur den Platz ein, der durch die Tags definiert wird, die es umgeben. Ein Block-Level-Element nimmt den gesamten Platz seines übergeordneten Elements (Containers) ein und bildet so eine "Blockbox".
- [HTML-Kommentare](/de/docs/Web/HTML/Guides/Comments)
  - : HTML-Kommentare werden verwendet, um erklärende Anmerkungen zum Markup hinzuzufügen oder zu verhindern, dass der Browser bestimmte Teile des Dokuments interpretiert.
- [Leitfaden zu Medientypen und -formaten im Web](/de/docs/Web/Media/Guides/Formats)
  - : Die {{HTMLElement("audio")}}- und {{HTMLElement("video")}}-Elemente ermöglichen es Ihnen, Audio- und Videomedien nativ innerhalb Ihrer Inhalte abzuspielen, ohne dass eine externe Softwareunterstützung erforderlich ist.
- [HTML-Inhaltskategorien](/de/docs/Web/HTML/Guides/Content_categories)
  - : HTML besteht aus verschiedenen Arten von Inhalten, die jeweils in bestimmten Kontexten verwendet werden dürfen und in anderen nicht. Ebenso hat jeder Kontext eine Reihe von anderen Inhaltskategorien, die er enthalten kann, und Elemente, die darin verwendet werden dürfen oder nicht. Dies ist ein Leitfaden zu diesen Kategorien.
- [Quirks-Modus und Standardsmodus](/de/docs/Web/HTML/Guides/Quirks_mode_and_standards_mode)
  - : Historische Informationen über den Quirks-Modus und den Standardsmodus.

## Verwandte Themen

- [Farbe auf HTML-Elemente mit CSS anwenden](/de/docs/Web/CSS/CSS_colors/Applying_color)
  - : Dieser Artikel behandelt die meisten Methoden, mit denen Sie CSS verwenden, um Farbe zu HTML-Inhalten hinzuzufügen, und listet auf, welche Teile von HTML-Dokumenten farbig gestaltet werden können und welche CSS-Eigenschaften dabei verwendet werden.
