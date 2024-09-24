---
title: "HTML: HyperText Markup Language"
short-title: HTML
slug: Web/HTML
l10n:
  sourceCommit: cf331ccff0dd88648dc9fe22a14f9aaa595ec4bf
---

{{HTMLSidebar}}

**HTML** (HyperText Markup Language) ist der grundlegendste Baustein des Webs. Es definiert die Bedeutung und Struktur von Webinhalten. Neben HTML werden im Allgemeinen andere Technologien verwendet, um das Erscheinungsbild/Präsentation einer Webseite zu beschreiben ([CSS](/de/docs/Web/CSS)) oder die Funktionalität/Verhalten ([JavaScript](/de/docs/Web/JavaScript)).

"Hypertext" bezieht sich auf Links, die Webseiten miteinander verbinden, entweder innerhalb einer einzelnen Website oder zwischen Websites. Links sind ein grundlegender Aspekt des Webs. Indem Sie Inhalte ins Internet hochladen und mit Seiten verlinken, die von anderen Personen erstellt wurden, werden Sie ein aktiver Teilnehmer des World Wide Web.

HTML verwendet "Markup", um Text, Bilder und andere Inhalte für die Anzeige in einem Webbrowser zu annotieren. HTML-Markup umfasst spezielle "Elemente" wie {{HTMLElement("head")}}, {{HTMLElement("title")}}, {{HTMLElement("body")}}, {{HTMLElement("header")}}, {{HTMLElement("footer")}}, {{HTMLElement("article")}}, {{HTMLElement("section")}}, {{HTMLElement("p")}}, {{HTMLElement("div")}}, {{HTMLElement("span")}}, {{HTMLElement("img")}}, {{HTMLElement("aside")}}, {{HTMLElement("audio")}}, {{HTMLElement("canvas")}}, {{HTMLElement("datalist")}}, {{HTMLElement("details")}}, {{HTMLElement("embed")}}, {{HTMLElement("nav")}}, {{HTMLElement("search")}}, {{HTMLElement("output")}}, {{HTMLElement("progress")}}, {{HTMLElement("video")}}, {{HTMLElement("ul")}}, {{HTMLElement("ol")}}, {{HTMLElement("li")}} und viele andere.

Ein HTML-Element wird von anderem Text in einem Dokument durch "Tags" abgetrennt, die aus dem Elementnamen bestehen, der von "`<`" und "`>`" umgeben ist. Der Name eines Elements innerhalb eines Tags ist nicht case-sensitiv. Das bedeutet, dass es in Großbuchstaben, Kleinbuchstaben oder einer Mischung geschrieben werden kann. Zum Beispiel kann das `<title>`-Tag als `<Title>`, `<TITLE>` oder in jeder anderen Variante geschrieben werden. Es ist jedoch konventionell und empfohlen, Tags in Kleinbuchstaben zu schreiben.

Die unten stehenden Artikel können Ihnen helfen, mehr über HTML zu lernen.

## Wichtige Ressourcen

- Einführung in HTML
  - : Wenn Sie neu in der Webentwicklung sind, lesen Sie unbedingt unseren Artikel [HTML-Grundlagen](/de/docs/Learn/Getting_started_with_the_web/HTML_basics), um zu lernen, was HTML ist und wie es verwendet wird.
- HTML-Tutorials
  - : Für Artikel darüber, wie HTML verwendet wird, sowie Tutorials und vollständige Beispiele, besuchen Sie unser [HTML-Lernbereich](/de/docs/Learn/HTML).
- HTML-Referenz
  - : In unserem umfangreichen [HTML-Referenz](/de/docs/Web/HTML/Reference)-Abschnitt finden Sie Details zu jedem Element und Attribut in HTML.

## Tutorials für Anfänger

Unser [HTML-Lernbereich](/de/docs/Learn/HTML) bietet mehrere Module, die HTML von Grund auf neu lehren — keine Vorkenntnisse erforderlich.

- [Einführung in HTML](/de/docs/Learn/HTML/Introduction_to_HTML)
  - : Dieses Modul bereitet Sie auf wichtige Konzepte und die Syntax vor, wie das Anwenden von HTML auf Text, das Erstellen von Hyperlinks und wie HTML verwendet wird, um eine Webseite zu strukturieren.
- [Multimedia und Einbettungen](/de/docs/Learn/HTML/Multimedia_and_embedding)
  - : Dieses Modul untersucht, wie HTML verwendet wird, um Multimedia in Ihre Webseiten einzubetten, einschließlich der verschiedenen Möglichkeiten, Bilder einzubetten, sowie das Einbetten von Videos, Audio und sogar ganzen anderen Webseiten.
- [HTML-Tabellen](/de/docs/Learn/HTML/Tables)
  - : Tabellarische Daten auf einer Webseite auf verständliche, zugängliche Weise darzustellen, kann eine Herausforderung sein. Dieses Modul behandelt grundlegendes Tabellen-Markup sowie komplexere Funktionen wie das Implementieren von Bildunterschriften und Zusammenfassungen.
- [HTML-Formulare](/de/docs/Learn/Forms)
  - : Formulare sind ein sehr wichtiger Teil des Webs — sie bieten viele der Funktionen, die Sie für die Interaktion mit Websites benötigen, z.B. Registrieren und Anmelden, Feedback senden, Produkte kaufen und mehr. Dieses Modul macht Sie mit der Erstellung der clientseitigen/front-end Teile von Formularen vertraut.
- [HTML zur Lösung häufiger Probleme verwenden](/de/docs/Learn/HTML/Howto)
  - : Bietet Links zu Inhalten, die erklären, wie HTML verwendet wird, um sehr häufige Probleme bei der Erstellung einer Webseite zu lösen: Umgang mit Titeln, Hinzufügen von Bildern oder Videos, Hervorheben von Inhalten, Erstellen eines einfachen Formulars usw.

## Erweiterte Themen

- [CORS-fähiges Bild](/de/docs/Web/HTML/CORS_enabled_image)
  - : Das [`crossorigin`](/de/docs/Web/HTML/Element/img#crossorigin)-Attribut in Kombination mit einem geeigneten {{glossary("CORS")}}-Header ermöglicht es, Bilder, die durch das {{HTMLElement("img")}}-Element definiert sind, aus fremden Ursprüngen zu laden und in einem {{HTMLElement("canvas")}}-Element zu verwenden, als ob sie vom aktuellen Ursprung geladen würden.
- [CORS-Einstellungsattribute](/de/docs/Web/HTML/Attributes/crossorigin)
  - : Einige HTML-Elemente, die Unterstützung für [CORS](/de/docs/Web/HTTP/CORS) bieten, wie {{HTMLElement("img")}} oder {{HTMLElement("video")}}, haben ein `crossorigin`-Attribut (`crossOrigin`-Eigenschaft), mit dem Sie die CORS-Anfragen für die abgerufenen Daten des Elements konfigurieren können.
- [Inhalte mit rel="preload" vorladen](/de/docs/Web/HTML/Attributes/rel/preload)
  - : Der `preload`-Wert des [`rel`](/de/docs/Web/HTML/Element/link#rel)-Attributs des {{htmlelement("link")}}-Elements ermöglicht es Ihnen, deklarative Fetch-Anfragen in Ihrem HTML-{{htmlelement("head")}} zu schreiben, um Ressourcen anzugeben, die Ihre Seiten sehr bald nach dem Laden benötigen werden, und die Sie daher frühzeitig im Ladelebenszyklus vorladen möchten, bevor die Haupt-Render-Maschinerie des Browsers aktiviert wird. Dies stellt sicher, dass sie früher verfügbar gemacht werden und weniger wahrscheinlich das erste Rendern der Seite blockieren, was zu Leistungsverbesserungen führt. Dieser Artikel bietet eine grundlegende Anleitung, wie `preload` funktioniert.

## Referenz

- [HTML-Referenz](/de/docs/Web/HTML/Reference)
  - : HTML besteht aus **Elementen**, von denen jedes durch eine gewisse Anzahl von **Attributen** modifiziert werden kann. HTML-Dokumente sind durch **Links** miteinander verbunden.
- [HTML-Element-Referenz](/de/docs/Web/HTML/Element)
  - : Durchsuchen Sie eine Liste aller {{glossary("HTML")}} {{glossary("Element", "Elemente")}}.
- [HTML-Attribut-Referenz](/de/docs/Web/HTML/Attributes)
  - : Elemente in HTML besitzen **Attribute**. Diese sind zusätzliche Werte, die die Elemente konfigurieren oder ihr Verhalten auf verschiedene Weise anpassen.
- [Globale Attribute](/de/docs/Web/HTML/Global_attributes)
  - : Globale Attribute können für alle [HTML-Elemente](/de/docs/Web/HTML/Element) angegeben werden, _selbst für diejenigen, die nicht im Standard angegeben sind_. Das bedeutet, dass jeder nicht standardmäßige Element diese Attribute dennoch erlauben muss, auch wenn diese Elemente das Dokument HTML5-inkompatibel machen.
- [Inline-Elemente](/de/docs/Glossary/Inline-level_content) und [Block-Elemente](/de/docs/Glossary/Block-level_content)
  - : HTML-Elemente sind normalerweise "Inline-Elemente" oder "Block-Elemente". Ein Inline-Element beansprucht nur den Raum, der von den Tags, die es definieren, begrenzt wird. Ein Block-Element nimmt den gesamten Raum seines übergeordneten Elements (Containers) ein und erzeugt dadurch eine "Block-Box".
- [HTML-Kommentare](/de/docs/Web/HTML/Comments)
  - : HTML-Kommentare werden verwendet, um erklärende Notizen zum Markup hinzuzufügen oder um zu verhindern, dass der Browser bestimmte Teile des Dokuments interpretiert.
- [Leitfaden zu Medientypen und Formaten im Web](/de/docs/Web/Media/Formats)
  - : Die {{HTMLElement("audio")}}- und {{HTMLElement("video")}}-Elemente ermöglichen es Ihnen, Audio- und Videomedien nativ in Ihren Inhalten abzuspielen, ohne dass dafür Unterstützung durch externe Software erforderlich ist.
- [HTML-Inhaltskategorien](/de/docs/Web/HTML/Content_categories)
  - : HTML besteht aus mehreren Arten von Inhalten, von denen jeder in bestimmten Kontexten verwendet werden darf und in anderen nicht. Ebenso hat jeder Kontext eine Reihe anderer Inhaltskategorien, die er enthalten kann, und von Elementen, die er verwenden darf oder nicht. Dies ist ein Leitfaden zu diesen Kategorien.
- [Quirks-Modus und Standardmodus](/de/docs/Web/HTML/Quirks_Mode_and_Standards_Mode)
  - : Historische Informationen über den Quirks- und den Standardmodus.

## Verwandte Themen

- [Farben auf HTML-Elemente mit CSS anwenden](/de/docs/Web/CSS/CSS_colors/Applying_color)
  - : Dieser Artikel deckt die meisten Möglichkeiten ab, wie Sie CSS verwenden, um Farbe auf HTML-Inhalte anzuwenden, und listet auf, welche Teile von HTML-Dokumenten gefärbt werden können und welche CSS-Eigenschaften beim Färben zu verwenden sind.
