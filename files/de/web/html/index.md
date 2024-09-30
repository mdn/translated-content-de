---
title: "HTML: HyperText Markup Language"
short-title: HTML
slug: Web/HTML
l10n:
  sourceCommit: 5bd9fe2b25c6eee2a14d0406ce7116998fa48c13
---

{{HTMLSidebar}}

**HTML** (HyperText Markup Language) ist der grundlegendste Baustein des Webs. Es definiert die Bedeutung und Struktur von Webinhalten. Neben HTML werden in der Regel andere Technologien verwendet, um das Aussehen/Darstellung ([CSS](/de/docs/Web/CSS)) oder Funktionalität/Verhalten ([JavaScript](/de/docs/Web/JavaScript)) einer Webseite zu beschreiben.

"Hypertext" bezieht sich auf Links, die Webseiten miteinander verbinden, entweder innerhalb einer einzelnen Website oder zwischen Websites. Links sind ein grundlegender Aspekt des Webs. Indem Sie Inhalte ins Internet hochladen und mit Seiten verlinken, die von anderen Personen erstellt wurden, werden Sie ein aktiver Teilnehmer am World Wide Web.

HTML verwendet "Markup", um Text, Bilder und andere Inhalte zur Anzeige in einem Webbrowser zu annotieren. HTML-Markup umfasst spezielle "Elemente" wie {{HTMLElement("head")}}, {{HTMLElement("title")}}, {{HTMLElement("body")}}, {{HTMLElement("header")}}, {{HTMLElement("footer")}}, {{HTMLElement("article")}}, {{HTMLElement("section")}}, {{HTMLElement("p")}}, {{HTMLElement("div")}}, {{HTMLElement("span")}}, {{HTMLElement("img")}}, {{HTMLElement("aside")}}, {{HTMLElement("audio")}}, {{HTMLElement("canvas")}}, {{HTMLElement("datalist")}}, {{HTMLElement("details")}}, {{HTMLElement("embed")}}, {{HTMLElement("nav")}}, {{HTMLElement("search")}}, {{HTMLElement("output")}}, {{HTMLElement("progress")}}, {{HTMLElement("video")}}, {{HTMLElement("ul")}}, {{HTMLElement("ol")}}, {{HTMLElement("li")}} und viele andere.

Ein HTML-Element wird im Dokument von anderem Text durch "Tags" abgegrenzt, die aus dem Elementnamen bestehen, umgeben von `<` und `>`. Der Name eines Elements innerhalb eines Tags ist nicht case-sensitive. Das bedeutet, es kann in Großbuchstaben, Kleinbuchstaben oder in einer Mischung geschrieben werden. Zum Beispiel kann das `<title>`-Tag als `<Title>`, `<TITLE>` oder auf jede andere Weise geschrieben werden. Die Konvention und empfohlene Praxis ist jedoch, Tags in Kleinbuchstaben zu schreiben.

Die untenstehenden Artikel können Ihnen helfen, mehr über HTML zu lernen.

## Wichtige Ressourcen

- HTML Einführung
  - : Wenn Sie neu in der Webentwicklung sind, lesen Sie unbedingt unseren Artikel [HTML-Grundlagen](/de/docs/Learn/Getting_started_with_the_web/HTML_basics), um zu lernen, was HTML ist und wie es verwendet wird.
- HTML Tutorials
  - : Für Artikel darüber, wie man HTML verwendet, sowie Anleitungen und vollständige Beispiele, besuchen Sie unseren [HTML-Lernbereich](/de/docs/Learn/HTML).
- HTML Referenz
  - : In unserem umfangreichen [HTML-Referenz](/de/docs/Web/HTML/Reference) Bereich finden Sie die Details zu jedem Element und Attribut in HTML.

## Einsteiger-Tutorials

Unser [HTML-Lernbereich](/de/docs/Learn/HTML) bietet mehrere Module, die HTML von Grund auf lehren — keine Vorkenntnisse erforderlich.

- [Einführung in HTML](/de/docs/Learn/HTML/Introduction_to_HTML)
  - : Dieses Modul bereitet Sie auf wichtige Konzepte und Syntax vor, wie z.B. die Anwendung von HTML auf Text, das Erstellen von Hyperlinks und die Verwendung von HTML zur Strukturierung einer Webseite.
- [Multimedia und Einbettung](/de/docs/Learn/HTML/Multimedia_and_embedding)
  - : Dieses Modul untersucht, wie HTML verwendet wird, um Multimedia in Ihre Webseiten einzubinden, einschließlich der verschiedenen Möglichkeiten, wie Bilder eingebettet werden können, sowie das Einbetten von Videos, Audio und sogar ganzen anderen Webseiten.
- [HTML-Tabellen](/de/docs/Learn/HTML/Tables)
  - : Die Darstellung tabellarischer Daten auf einer Webseite auf verständliche, zugängliche Weise kann eine Herausforderung sein. Dieses Modul behandelt grundlegendes Tabellenmarkup, zusammen mit komplexeren Funktionen wie der Implementierung von Beschriftungen und Zusammenfassungen.
- [HTML-Formulare](/de/docs/Learn/Forms)
  - : Formulare sind ein sehr wichtiger Teil des Webs — sie bieten viele der Funktionen, die für die Interaktion mit Websites benötigt werden, z.B. Registrierung und Login, Feedback senden, Produkte kaufen und mehr. Dieses Modul hilft Ihnen beim Einstieg in die Erstellung der Client-seitigen/Front-End-Teile von Formularen.
- [HTML verwenden, um häufige Probleme zu lösen](/de/docs/Learn/HTML/Howto)
  - : Bietet Links zu Inhaltsbereichen, die erklären, wie HTML verwendet wird, um sehr häufige Probleme bei der Erstellung einer Webseite zu lösen: Umgang mit Titeln, Hinzufügen von Bildern oder Videos, Hervorheben von Inhalten, Erstellen eines einfachen Formulars usw.

## Fortgeschrittene Themen

- [CORS-fähiges Bild](/de/docs/Web/HTML/CORS_enabled_image)
  - : Das [`crossorigin`](/de/docs/Web/HTML/Element/img#crossorigin) Attribut, in Verbindung mit einem geeigneten [CORS](/de/docs/Glossary/CORS) Header, ermöglicht es, dass Bilder, die durch das {{HTMLElement("img")}} Element definiert sind, aus fremden Ursprüngen geladen werden und in einem {{HTMLElement("canvas")}} Element verwendet werden können, als ob sie vom aktuellen Ursprung geladen würden.
- [CORS-Einstellungen Attribute](/de/docs/Web/HTML/Attributes/crossorigin)
  - : Einige HTML-Elemente, die Unterstützung für [CORS](/de/docs/Web/HTTP/CORS) bieten, wie {{HTMLElement("img")}} oder {{HTMLElement("video")}}, haben ein `crossorigin` Attribut (`crossOrigin` Eigenschaft), mit dem Sie die CORS-Anfragen für die abgerufenen Daten des Elements konfigurieren können.
- [Inhalte mit rel="preload" vorladen](/de/docs/Web/HTML/Attributes/rel/preload)
  - : Der `preload` Wert des {{htmlelement("link")}} Elements des [`rel`](/de/docs/Web/HTML/Element/link#rel) Attributs ermöglicht es Ihnen, deklarative Fetch-Anfragen in Ihrem HTML-{{htmlelement("head")}} zu schreiben, indem Sie Ressourcen spezifizieren, die Ihre Seiten sehr bald nach dem Laden benötigen werden, die Sie daher früh im Lebenszyklus eines Seitenladens vorladen möchten, bevor der Hauptteil des Render-Mechanismus des Browsers einsetzt. Dies stellt sicher, dass sie früher verfügbar gemacht werden und weniger wahrscheinlich die erste Darstellung der Seite blockieren, was zu Leistungsverbesserungen führt. Dieser Artikel bietet eine grundlegende Anleitung, wie `preload` funktioniert.

## Referenz

- [HTML Referenz](/de/docs/Web/HTML/Reference)
  - : HTML besteht aus **Elementen**, von denen jedes durch eine Anzahl von **Attributen** modifiziert werden kann. HTML-Dokumente sind über **Links** miteinander verbunden.
- [HTML-Element-Referenz](/de/docs/Web/HTML/Element)
  - : Durchsuchen Sie eine Liste aller [HTML](/de/docs/Glossary/HTML) [Elemente](/de/docs/Glossary/Element).
- [HTML-Attribut-Referenz](/de/docs/Web/HTML/Attributes)
  - : Elemente in HTML haben **Attribute**. Diese sind zusätzliche Werte, die die Elemente konfigurieren oder ihr Verhalten auf verschiedene Weise anpassen.
- [Globale Attribute](/de/docs/Web/HTML/Global_attributes)
  - : Globale Attribute können auf alle [HTML-Elemente](/de/docs/Web/HTML/Element) angewendet werden, _selbst auf die, die im Standard nicht spezifiziert sind_. Das bedeutet, dass auch nicht standardmäßige Elemente diese Attribute zulassen müssen, obwohl diese Elemente das Dokument HTML5-inkompatibel machen.
- [Inline-level-Elemente](/de/docs/Glossary/Inline-level_content) und [Block-level-Elemente](/de/docs/Glossary/Block-level_content)
  - : HTML-Elemente sind normalerweise "inline-level" oder "block-level" Elemente. Ein Inline-level-Element nimmt nur den Raum ein, der von den Tags begrenzt wird, die es definieren. Ein Block-level-Element nimmt den gesamten Raum seines übergeordneten Elements (Containers) ein und erstellt damit eine "Blockbox".
- [HTML-Kommentare](/de/docs/Web/HTML/Comments)
  - : HTML-Kommentare werden verwendet, um erklärende Notizen zum Markup hinzuzufügen oder um den Browser daran zu hindern, bestimmte Teile des Dokuments zu interpretieren.
- [Leitfaden zu Medientypen und -formaten im Web](/de/docs/Web/Media/Formats)
  - : Die {{HTMLElement("audio")}} und {{HTMLElement("video")}} -Elemente ermöglichen es Ihnen, Audio- und Videomedien nativ in Ihrem Inhalt abzuspielen, ohne dass eine externe Softwareunterstützung erforderlich ist.
- [HTML-Inhaltskategorien](/de/docs/Web/HTML/Content_categories)
  - : HTML besteht aus mehreren Inhaltsarten, die jeweils in bestimmten Kontexten verwendet werden dürfen und in anderen nicht. Ähnlich hat jeder Kontext eine Menge anderer Inhaltskategorien, die er enthalten kann und Elemente, die er nicht enthalten darf. Dies ist ein Leitfaden zu diesen Kategorien.
- [Quirks-Modus und Standards-Modus](/de/docs/Web/HTML/Quirks_Mode_and_Standards_Mode)
  - : Historische Informationen zu Quirks-Modus und Standards-Modus.

## Verwandte Themen

- [Farbanwendung auf HTML-Elemente mit CSS](/de/docs/Web/CSS/CSS_colors/Applying_color)
  - : Dieser Artikel behandelt die meisten Möglichkeiten, wie Sie CSS verwenden können, um Farbe zu HTML-Inhalten hinzuzufügen, und listet auf, welche Teile von HTML-Dokumenten gefärbt werden können und welche CSS-Eigenschaften dabei zu verwenden sind.
