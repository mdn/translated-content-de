---
title: "HTML: HyperText Markup Language"
short-title: HTML
slug: Web/HTML
l10n:
  sourceCommit: 5bd9fe2b25c6eee2a14d0406ce7116998fa48c13
---

{{HTMLSidebar}}

**HTML** (HyperText Markup Language) ist der grundlegendste Baustein des Webs. Es definiert die Bedeutung und Struktur von Webinhalten. Andere Technologien neben HTML werden in der Regel verwendet, um das Erscheinungsbild/Präsentation einer Webseite zu beschreiben ([CSS](/de/docs/Web/CSS)) oder Funktionalität/Verhalten ([JavaScript](/de/docs/Web/JavaScript)).

"Hypertext" bezieht sich auf Links, die Webseiten miteinander verbinden, entweder innerhalb einer einzelnen Website oder zwischen Websites. Links sind ein grundlegender Aspekt des Webs. Indem Sie Inhalte ins Internet hochladen und mit Seiten verlinken, die von anderen Menschen erstellt wurden, werden Sie ein aktiver Teilnehmer am World Wide Web.

HTML verwendet "Markup", um Text, Bilder und andere Inhalte für die Anzeige in einem Webbrowser zu annotieren. HTML-Markup enthält spezielle "Elemente" wie {{HTMLElement("head")}}, {{HTMLElement("title")}}, {{HTMLElement("body")}}, {{HTMLElement("header")}}, {{HTMLElement("footer")}}, {{HTMLElement("article")}}, {{HTMLElement("section")}}, {{HTMLElement("p")}}, {{HTMLElement("div")}}, {{HTMLElement("span")}}, {{HTMLElement("img")}}, {{HTMLElement("aside")}}, {{HTMLElement("audio")}}, {{HTMLElement("canvas")}}, {{HTMLElement("datalist")}}, {{HTMLElement("details")}}, {{HTMLElement("embed")}}, {{HTMLElement("nav")}}, {{HTMLElement("search")}}, {{HTMLElement("output")}}, {{HTMLElement("progress")}}, {{HTMLElement("video")}}, {{HTMLElement("ul")}}, {{HTMLElement("ol")}}, {{HTMLElement("li")}} und viele andere.

Ein HTML-Element wird von anderem Text in einem Dokument durch "Tags" abgegrenzt, die aus dem Elementnamen bestehen, der von `<` und `>` umgeben ist. Der Name eines Elements innerhalb eines Tags ist nicht case-sensitiv. Das heißt, es kann in Großbuchstaben, Kleinbuchstaben oder einer Mischung geschrieben werden. Beispielsweise kann das `<title>`-Tag als `<Title>`, `<TITLE>` oder in jeder anderen Weise geschrieben werden. Die Konvention und empfohlene Praxis besteht jedoch darin, Tags in Kleinbuchstaben zu schreiben.

Die folgenden Artikel können Ihnen helfen, mehr über HTML zu lernen.

## Wichtige Ressourcen

- HTML-Einführung
  - : Wenn Sie neu im Bereich der Webentwicklung sind, lesen Sie unbedingt unseren Artikel [HTML-Grundlagen](/de/docs/Learn/Getting_started_with_the_web/HTML_basics), um zu lernen, was HTML ist und wie man es verwendet.
- HTML-Tutorials
  - : Für Artikel darüber, wie man HTML verwendet, sowie Tutorials und vollständige Beispiele, besuchen Sie unser [HTML-Lernbereich](/de/docs/Learn/HTML).
- HTML-Referenz
  - : In unserem umfangreichen [HTML-Referenz](/de/docs/Web/HTML/Reference)-Bereich finden Sie die Details zu jedem Element und Attribut in HTML.

## Anfängertutorials

Unser [HTML-Lernbereich](/de/docs/Learn/HTML) bietet mehrere Module, die HTML von Grund auf lehren — ohne dass Vorkenntnisse erforderlich sind.

- [Einführung in HTML](/de/docs/Learn/HTML/Introduction_to_HTML)
  - : Dieses Modul bildet die Grundlage, indem es Ihnen die Einführung in wichtige Konzepte und Syntax wie die Anwendung von HTML auf Text, das Erstellen von Hyperlinks und die Strukturierung einer Webseite mit HTML vermittelt.
- [Multimedia und Einbettung](/de/docs/Learn/HTML/Multimedia_and_embedding)
  - : Dieses Modul untersucht, wie Sie HTML verwenden, um Multimedia in Ihre Webseiten einzubinden, einschließlich der verschiedenen Möglichkeiten, wie Bilder integriert werden können, und wie Videos, Audios und sogar ganze andere Webseiten eingebettet werden können.
- [HTML-Tabellen](/de/docs/Learn/HTML/Tables)
  - : Die tabellarische Darstellung von Daten auf einer Webseite auf eine verständliche, zugängliche Weise kann eine Herausforderung darstellen. Dieses Modul behandelt grundlegendes Tabellen-Markup sowie komplexere Funktionen wie das Implementieren von Beschriftungen und Zusammenfassungen.
- [HTML-Formulare](/de/docs/Learn/Forms)
  - : Formulare sind ein sehr wichtiger Teil des Webs — sie bieten viele der Funktionen, die Sie für die Interaktion mit Websites benötigen, z.B. Registrierung und Anmeldung, Feedback senden, Produkte kaufen und mehr. Dieses Modul hilft Ihnen beim Erstellen der clientseitigen/front-end Teile von Formularen.
- [HTML zur Lösung häufiger Probleme verwenden](/de/docs/Learn/HTML/Howto)
  - : Bietet Links zu Inhaltsabschnitten, die erklären, wie man HTML verwendet, um sehr häufige Probleme beim Erstellen einer Webseite zu lösen: Umgang mit Titeln, Hinzufügen von Bildern oder Videos, Hervorheben von Inhalten, Erstellen eines grundlegenden Formulars usw.

## Fortgeschrittene Themen

- [CORS-fähige Bilder](/de/docs/Web/HTML/CORS_enabled_image)
  - : Das [`crossorigin`](/de/docs/Web/HTML/Element/img#crossorigin)-Attribut, in Kombination mit einem entsprechenden [CORS](/de/docs/Glossary/CORS)-Header, ermöglicht das Laden von Bildern, die durch das {{HTMLElement("img")}}-Element definiert sind, aus externen Ursprüngen und deren Verwendung in einem {{HTMLElement("canvas")}}-Element, als ob sie vom aktuellen Ursprung geladen würden.
- [CORS-Einstellungen-Attribute](/de/docs/Web/HTML/Attributes/crossorigin)
  - : Einige HTML-Elemente, die Unterstützung für [CORS](/de/docs/Web/HTTP/CORS) bieten, wie {{HTMLElement("img")}} oder {{HTMLElement("video")}}, haben ein `crossorigin`-Attribut (`crossOrigin`-Eigenschaft), das es Ihnen ermöglicht, die CORS-Anfragen für die abgerufenen Daten des Elements zu konfigurieren.
- [Inhalte mit rel="preload" vorab laden](/de/docs/Web/HTML/Attributes/rel/preload)
  - : Der `preload`-Wert des [`rel`](/de/docs/Web/HTML/Element/link#rel)-Attributs des {{htmlelement("link")}}-Elements ermöglicht es Ihnen, deklarative Fetch-Anfragen in Ihrem HTML-{{htmlelement("head")}} zu schreiben und Ressourcen anzugeben, die Ihre Seiten sehr bald nach dem Laden benötigen werden und die Sie daher frühzeitig im Lebenszyklus eines Seitenladens vorab laden möchten, bevor die Hauptwiedergabemaschinerie des Browsers aktiv wird. Dies stellt sicher, dass sie früher verfügbar gemacht werden und weniger wahrscheinlich das erste Rendering der Seite blockieren, was zu Leistungsverbesserungen führt. Dieser Artikel bietet eine grundlegende Anleitung dazu, wie `preload` funktioniert.

## Referenz

- [HTML-Referenz](/de/docs/Web/HTML/Reference)
  - : HTML besteht aus **Elementen**, von denen jedes durch eine gewisse Anzahl von **Attributen** modifiziert werden kann. HTML-Dokumente sind durch **Links** miteinander verbunden.
- [HTML-Element-Referenz](/de/docs/Web/HTML/Element)
  - : Durchsuchen Sie eine Liste aller [HTML](/de/docs/Glossary/HTML)-[Elemente](/de/docs/Glossary/Element).
- [HTML-Attribut-Referenz](/de/docs/Web/HTML/Attributes)
  - : Elemente in HTML haben **Attribute**. Dies sind zusätzliche Werte, die die Elemente konfigurieren oder ihr Verhalten auf verschiedene Weisen anpassen.
- [Globale Attribute](/de/docs/Web/HTML/Global_attributes)
  - : Globale Attribute können auf alle [HTML-Elemente](/de/docs/Web/HTML/Element), _auch die nicht im Standard spezifizierten_, angewendet werden. Das bedeutet, dass auch nicht standardmäßige Elemente diese Attribute erlauben müssen, obwohl diese Elemente das Dokument HTML5-inkompatibel machen.
- [Inline-Elemente](/de/docs/Glossary/Inline-level_content) und [Block-Level-Elemente](/de/docs/Glossary/Block-level_content)
  - : HTML-Elemente sind in der Regel "Inline-Elemente" oder "Block-Level-Elemente". Ein Inline-Element beansprucht nur den Raum, der von den Tags definiert wird, die es umgeben. Ein Block-Level-Element nimmt den gesamten Raum seines übergeordneten Elements (Containers) ein und schafft dadurch eine "Blockbox".
- [HTML-Kommentare](/de/docs/Web/HTML/Comments)
  - : HTML-Kommentare werden verwendet, um erklärende Notizen in das Markup einzufügen oder um zu verhindern, dass der Browser bestimmte Teile des Dokuments interpretiert.
- [Leitfaden zu Medientypen und -formaten im Web](/de/docs/Web/Media/Formats)
  - : Die {{HTMLElement("audio")}}- und {{HTMLElement("video")}}-Elemente ermöglichen es Ihnen, Audio- und Videomedien nativ innerhalb Ihrer Inhalte abzuspielen, ohne zusätzliche Softwareunterstützung.
- [HTML-Inhaltskategorien](/de/docs/Web/HTML/Content_categories)
  - : HTML besteht aus mehreren Arten von Inhalten, von denen jeder nur in bestimmten Kontexten verwendet werden darf und in anderen nicht erlaubt ist. Ebenso hat jeder Kontext eine Reihe anderer Inhaltskategorien, die er enthalten kann, und Elemente, die darin verwendet werden können oder nicht. Dies ist ein Leitfaden zu diesen Kategorien.
- [Quirks-Modus und Standards-Modus](/de/docs/Web/HTML/Quirks_Mode_and_Standards_Mode)
  - : Historische Informationen über den Quirks-Modus und den Standards-Modus.

## Verwandte Themen

- [Anwendung von Farbe auf HTML-Elemente mit CSS](/de/docs/Web/CSS/CSS_colors/Applying_color)
  - : Dieser Artikel behandelt die meisten Möglichkeiten, wie Sie CSS verwenden, um Farbe zu HTML-Inhalten hinzuzufügen. Er listet auf, welche Teile von HTML-Dokumenten eingefärbt werden können und welche CSS-Eigenschaften dabei verwendet werden sollen.
