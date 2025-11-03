---
title: Seitentypen
slug: MDN/Writing_guidelines/Page_structures/Page_types
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Es gibt eine Reihe von Seitentypen, die auf MDN wiederholt verwendet werden. Dieser Artikel beschreibt diese Seitentypen, ihren Zweck, und gibt Beispiele für jeden sowie Vorlagen zur Verwendung bei der Erstellung einer neuen Seite.

Es gibt drei Hauptkategorien von Seitentypen auf MDN, obwohl einige Seitentypen in mehr als eine Kategorie fallen.

- **Referenzseiten** beschreiben die Details von etwas und sind entsprechend der Struktur des beschriebenen Gegenstands organisiert.
- **Leitfaden**-Seiten beschreiben, wie man etwas macht oder benutzt, und sind basierend auf den Zielen des Lesers organisiert.
- **Navigationsseiten** existieren hauptsächlich, um Links zu anderen Seiten bereitzustellen, meistens über verwandte Themen.

## Eine neue Seite erstellen

Eine neue Seite hinzuzufügen ist relativ unkompliziert, besonders wenn Sie mit dem Kopieren einer `index.md`-Datei aus einem ähnlichen Thema beginnen können. Es gibt ein paar Dinge zu beachten:

- Dokumente werden in Markdown in einer `index.md`-Datei verfasst.
- Wenn Sie beispielsweise ein neues Dokument für einen HTTP-Header namens `foo` erstellen, erstellen Sie einen neuen Ordner unter `files/en-us/web/http/reference/headers/foo` und legen Sie die Markdown-Datei in diesem Ordner ab (`files/en-us/web/http/reference/headers/foo/index.md`).
- Eine `index.md`-Datei eines Dokuments muss mit einem Front-Matter beginnen, das den `title`, `slug` und meistens den `page-type` definiert. Es könnte hilfreich sein, sich auf das Front-Matter innerhalb einer ähnlichen `index.md`-Datei zu beziehen.

## Anleitung zur Verwendung der Vorlagen

Wenn Sie eine neue Seite erstellen, können Sie sicherstellen, dass Sie die richtige Seitenstruktur/Inhalte verwendet haben, indem Sie sich auf eine unserer Seitenschablonen beziehen – siehe die Abschnitte unten. Sie können den genauen Quellcode jeder Vorlage (falls Sie ihn kopieren möchten) über den "Source on **GitHub**"-Link am Ende jeder Vorlage finden. Diese Seitenschablonen machen als veröffentlichte Seiten nicht viel Sinn, aber wenn Sie ihren Quellcode betrachten, werden Sie feststellen, dass sie viele hilfreiche Kommentare, Platzhalter und Hinweise enthalten, die darlegen, wie man die fehlenden Informationen ausfüllt und seine Seite erstellt.

Oben in jeder Vorlage finden Sie einen Abschnitt mit dem Titel _Remove before publishing_ — dieser enthält Informationen darüber, wie man den Seitentitel, Slug, das Seitenleisten-Menü und die Tags ausfüllt (z. B. Informationen, die nicht im Inhalt des Artikels erscheinen). Sie müssen diesen Abschnitt löschen, nachdem Sie die Anweisungen darin befolgt haben, bevor die Seite als fertig betrachtet werden kann.

## Alte Seitenlayouts

Manchmal stoßen Sie auf alte Referenzseiten, die sich deutlich von den hier präsentierten Vorlagen unterscheiden. Zum Beispiel hatten alte Interface-Seiten alle Mitgliedsdetails der Schnittstellen auf einer einzigen Seite, und einzelne Methoden-/Eigenschafts-/Konstruktor-/Ereignislistener-Seiten existierten nicht.

Wenn Sie auf einen alten Satz von Seiten stoßen, würden wir uns freuen, wenn Sie sie auf das neue Design aktualisieren! Wir wissen jedoch, dass dies eine große Menge Arbeit sein könnte. Wenn die zu aktualisierenden Informationen nicht zu umfangreich sind und Sie etwas Freizeit haben, versuchen Sie ruhig, sie auf das neue Design zu aktualisieren.

Wenn die Arbeit umfangreicher ist, sollten Sie einige Faktoren berücksichtigen, wenn Sie die Arbeit priorisieren:

- Wie veraltet sind die Informationen?
- Wie niedrig ist die Qualität der Informationen?
- Wie beliebt ist das Feature? Wie gefragt sind die Informationen?

Wenn Sie ein Team zusammenstellen möchten, um an einem Update zu arbeiten, oder einfach nur ein Inhaltsproblem melden oder besprechen möchten, das aktualisiert werden muss, zögern Sie nicht, ein [Inhaltsproblem einzureichen](https://github.com/mdn/content/issues) oder [uns um Hilfe zu bitten](/de/docs/MDN/Community/Communication_channels).

## Der Front-Matter Schlüssel `page-type`

Wir haben einen Front-Matter-Schlüssel `page-type` definiert, um den Typ der MDN-Seiten klar zu identifizieren. Die unten verlinkten Vorlagen geben an, welche `page-type`-Werte Sie für jeden Seitentyp festlegen sollten.

Für die vollständige Liste der Seitentypen siehe [Das Front-Matter-Schlüsselwort `page-type`](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/Page_type_key).

## Seitenschablonen

Unten finden Sie Beispiele für die verschiedenen Seiten, die Sie auf MDN finden, zusammen mit Vorlagen, die verwendet werden können, um neue Inhalte basierend auf dem Typ der Inhalte, die Sie präsentieren werden, zu erstellen, einschließlich der folgenden Seiten:

- [API-Startseiten](#api-startseite)
- [API-Referenzseite](#api-referenzseite)
- [API-Referenzunterseite](#api-referenzunterseite)
- [ARIA-Referenz](#aria-referenzseite)
- [Konzeptuelle Seiten](#konzeptuelle_seite)
- [CSS-Feature-Referenz](#css-feature-referenzseite)
- [CSS-Modul-Startseite](#css-modul-startseite)
- [Glossareintrag](#glossarseite)
- [HTML-Element](#html-element-referenzseite)
- [HTML-Attribut](#html-attribut-referenzseite)
- [HTTP-Header](#http-header-referenzseite)
- [Startseite](#startseite)
- [SVG-Element](#svg-element-referenzseite)
- [Lernen Sie Webentwicklung Seiten](#lernen_sie_webentwicklung_seiten)

Jeder Abschnitt enthält Links zu Live-Beispielseiten für diesen Seitentyp.

### API-Startseite

Eine **{{Glossary("API", "API")}}-Startseite** bietet einen Überblick darüber, was eine bestimmte API tut, sowie Links zur Dokumentation für jede der Schnittstellen, globalen Funktionen usw., die von der API angeboten werden. Es gibt keinen direkten Link zu spezifischen Methoden oder Eigenschaften innerhalb der Klassen der API, außer im Kontext des zusammenfassenden Textes. Sie ist hauptsächlich eine _Navigationsseite_, fungiert aber auch als übersichtliche _Referenzseite_ für die API.

Es gibt einige Instanzen, in denen mehrere APIs existieren, die eigenständig sind und in ihren eigenen Spezifikationen definiert sind, aber eng verwandt sind und daher sinnvoll mit einer einzigen API-Startseite abgedeckt werden könnten. Zum Beispiel deckt die [Generic Sensor API](https://w3c.github.io/sensors/) allgemeine Sensoranliegen ab, aber spezifische Anliegen werden in anderen APIs wie [Ambient Light Sensor](https://w3c.github.io/ambient-light/), [Motion Sensor](https://w3c.github.io/motion-sensors/) usw. behandelt. In solchen Fällen sind viele der grundlegenden Konzepte gleich, sodass es keinen Sinn macht, diese über mehrere Startseiten hinweg zu wiederholen. In einem solchen Fall würde es aus Gründen der Wiederholung und Auffindbarkeit mehr Sinn machen, alle unter einer einzelnen "Web Sensoren" Startseite abzudecken.

#### Beispiel

- [WebVR API](/de/docs/Web/API/WebVR_API)

#### Vorlagen

- [API-Startseiten-Vorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_landing_page_template)

### API-Referenzseite

> [!NOTE]
> Auch bekannt als _Interface-Startseite_.

Eine **API-Referenzseite** listet alle Methoden, Eigenschaften, Ereignisse usw. auf, die Mitglieder einer bestimmten Schnittstelle oder Klasse sind. Sie bietet einen Überblick darüber, was die Klasse oder Schnittstelle tut oder wofür sie verwendet wird, und gibt Links zur Dokumentation für jedes dieser Mitglieder. Sie ist detaillierter als eine API-Startseite, die typischerweise zu mehreren API-Referenzseiten verlinkt.

#### Beispiel

- [Request-Schnittstelle](/de/docs/Web/API/Request) der [Fetch API](/de/docs/Web/API/Fetch_API).

#### Vorlagen

- [API-Referenzseiten-Vorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_reference_page_template)

### API-Referenzunterseite

Eine **API-Referenzunterseite** ist ein Kind einer API-Referenzseite. Sie dokumentiert ein einzelnes Schnittstellenmitglied im Detail.

#### Beispiele

- [`count()` Methode](/de/docs/Web/API/IDBIndex/count) der [IDBIndex](/de/docs/Web/API/IDBIndex) Schnittstelle (Teil der [IndexedDB API](/de/docs/Web/API/IndexedDB_API))
- [capabilities Eigenschaft](/de/docs/Web/API/VRDisplay/capabilities) der [VRDisplay](/de/docs/Web/API/VRDisplay) Schnittstelle (Teil der [WebVR API](/de/docs/Web/API/WebVR_API))
- [Request() Konstruktor](/de/docs/Web/API/Request/Request) der [Request](/de/docs/Web/API/Request) Schnittstelle (Teil der [Fetch API](/de/docs/Web/API/Fetch_API))
- [vrdisplaypresentchange Ereignis](/de/docs/Web/API/Window/vrdisplaypresentchange_event) (Teil der [WebVR API](/de/docs/Web/API/WebVR_API), hängt an der [Window](/de/docs/Web/API/Window) Schnittstelle)

#### Vorlagen

- [API Methoden-Unterseiten-Vorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_method_subpage_template)
- [API Eigenschaften-Unterseiten-Vorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_property_subpage_template)
- [API Konstruktor-Unterseiten-Vorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_constructor_subpage_template)
- [API Ereignis-Unterseiten-Vorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_event_subpage_template)

### HTML-Element-Referenzseite

Eine **HTML-Referenzseite** listet alle Attribute auf, die auf einem HTML-Element verfügbar sind, erklärt den Zweck und die Nutzung des Elements und bietet Beispiele, Browser-Kompatibilitätsinformationen und andere wichtige Daten.

#### Beispiel

- [`<video>` Element](/de/docs/Web/HTML/Reference/Elements/video)

#### Vorlagen

- [HTML-Element-Seiten-Vorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/HTML_element_page_template)

### HTML-Attribut-Referenzseite

Eine HTML-Attributseite listet alle existierenden Werte eines HTML-Attributs auf, erklärt den Zweck und die Anwendungsfälle des Attributs, bietet Beispiele, Browser-Kompatibilitätsinformationen und andere wichtige Daten.

> [!NOTE]
> Element-spezifische Attribute (z. B. `placeholder` für `<input>`) benötigen keine separate Seite, wenn die Attribute ausreichend innerhalb der Referenzseite des Elternelements behandelt werden können (z. B. sollte das `placeholder`-Attribut auf der Seite des `<input>`-Elements behandelt werden, nicht als eigenständige Seite).

#### Beispiel

- [`class` Attribut](/de/docs/Web/HTML/Reference/Global_attributes/class)

#### Vorlagen

- [HTML-Attribut-Seiten-Vorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/HTML_attribute_page_template)

### SVG-Element-Referenzseite

Eine **SVG-Referenzseite** listet alle Attribute auf, die auf einem SVG-Element verfügbar sind, erklärt den Zweck und die Nutzung des Elements und bietet Beispiele, Browser-Kompatibilitätsinformationen und andere wichtige Daten.

#### Beispiel

- [\<g> Element](/de/docs/Web/SVG/Reference/Element/g)

#### Vorlagen

- [SVG-Element-Seiten-Vorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/SVG_element_page_template)

### CSS-Modul-Startseite

Jedes **[CSS](/de/docs/Web/CSS) Modul** repräsentiert eine CSS-Spezifikation, die Unterstützung für bestimmte Funktionen und Implementierungen in CSS bietet. Zum Beispiel repräsentiert das [CSS-Boxmodell](/de/docs/Web/CSS/CSS_box_model) Modul die [Spezifikation](/de/docs/Web/CSS/CSS_box_model#specifications), die die Margin- und Padding-Eigenschaften beschreibt, die es Ihnen ermöglichen, Abstände in und um ein CSS-Box zu schaffen.

Eine **CSS-Modul-Startseite** bietet eine Übersicht über die Funktionen, die das Modul bietet, und listet alle Eigenschaften, Datentypen, CSS-Funktionen usw. auf, die das Modul anbietet. Wenn möglich bietet die CSS-Modul-Startseite eine schnelle Demonstration dessen, was mit den Eigenschaften des Moduls erreicht werden kann, durch ein interaktives Beispiel. Die Modul-Startseite dient hauptsächlich als _Navigationsseite_, fungiert aber auch als übersichtliche _Referenzseite_ für das Modul.

Einige verwandte Eigenschaften und Funktionen, die in anderen Modulen enthalten sind, aber eng mit der Funktionalität des von Ihnen dokumentierten Moduls verbunden sind, können ebenfalls in einem Abschnitt _Verwandte Konzepte_ behandelt werden. Zum Beispiel sind der `<easing-function>` Datentyp und die `prefers-reduced-motion` Medienabfrage nicht im CSS-Animationsmodul enthalten, aber da sie eng mit CSS-Animationen verbunden sind, ist es eine gute Idee, sie im Abschnitt [Verwandte Konzepte](/de/docs/Web/CSS/CSS_animations#related_concepts) der CSS-Animationsmodul-Startseite hervorzuheben.

#### Beispiele

- [CSS-Animationen](/de/docs/Web/CSS/CSS_animations)
- [CSS-Benutzeroberfläche](/de/docs/Web/CSS/CSS_basic_user_interface)
- [CSS-Filtereffekte](/de/docs/Web/CSS/CSS_filter_effects)
- [CSS-Scrollen-Snap](/de/docs/Web/CSS/CSS_scroll_snap)

#### Vorlagen

- [CSS-Modul-Startseiten-Vorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/CSS_module_landing_page_template)

### CSS-Feature-Referenzseite

Eine **CSS-Referenzseite** listet die gesamte verfügbare Syntax für ein CSS-Feature wie einen Selektor oder eine Eigenschaft auf und erklärt den Zweck und die Verwendung des Features. Sie bietet auch Beispiele, Browser-Kompatibilitätsinformationen und andere wichtige Daten.

#### Beispiele

- [`background-color` Eigenschaft](/de/docs/Web/CSS/Reference/Properties/background-color)
- [`:hover` Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/:hover)
- [`@media` Regel](/de/docs/Web/CSS/@media)

#### Vorlagen

- [CSS-Eigenschaftsseiten-Vorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/CSS_property_page_template)
- [CSS-Selektor-Seiten-Vorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/CSS_selector_page_template)
- [CSS-Funktionsseiten-Vorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/CSS_function_page_template)

### HTTP-Header-Referenzseite

Eine **HTTP-Header-Referenzseite** listet alle verfügbaren Direktiven auf, die ein HTTP-Header enthalten kann, und erklärt den Zweck und die Anwendung des Headers. Sie bietet auch Beispiele, Browser-Kompatibilitätsinformationen und andere wichtige Erklärungen.

#### Beispiel

- [Cache-Control Header](/de/docs/Web/HTTP/Reference/Headers/Cache-Control)

#### Vorlagen

- [HTTP-Header-Seiten-Vorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/HTTP_header_page_template)

### ARIA-Referenzseite

Eine **ARIA-Referenzseite** beschreibt eine [Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles) oder ein [Attribut](/de/docs/Web/Accessibility/ARIA/Reference/Attributes), die Möglichkeiten definieren, um Webinhalte und Webanwendungen für Menschen mit Behinderungen zugänglicher zu machen.

#### Beispiele

- [`aria-busy` Attribut](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-busy)
- [`application` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/application_role)

#### Vorlagen

- [ARIA-Seiten-Vorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/ARIA_Page_Template)

### Konzeptuelle Seite

Eine **konzeptuelle Seite** ist eine _Leitfaden_-Seite, die etwas erklärt oder lehrt. Im Allgemeinen, wenn eine Seite hauptsächlich Prosa enthält und nicht in einen anderen Seitentyp fällt, ist es wahrscheinlich eine konzeptuelle Seite. Eine ausführliche Diskussion eines Themas könnte sich über mehrere konzeptuelle Seiten erstrecken und mit [Next](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/previous_menu_next.rs) und [Previous](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/previous_menu_next.rs) Makros verlinkt sein.

#### Beispiele

- [Die WebVR API verwenden](/de/docs/Web/API/WebVR_API/Using_the_WebVR_API)
- [Visualisierungen mit Web Audio API](/de/docs/Web/API/Web_Audio_API/Visualizations_with_Web_Audio_API)
- [Konflikte bearbeiten](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)

### Glossarseite

Eine **Glossarseite** enthält eine kurze Erklärung eines Begriffs, Themas oder Konzepts. Der erste Absatz sollte eine einfache, eigenständige Beschreibung des Begriffs sein, nicht mehr als ein paar Sätze. Dies kann durch Links zu weiteren Informationen im Abschnitt **Siehe auch** ergänzt werden. Wenn die Seite länger als ein Bildschirm wird, ist sie zu lang und sollte in eine konzeptuelle Seite umgewandelt werden. Siehe [Anleitung zum Schreiben und Referenzieren eines Eintrags im Glossar](/de/docs/MDN/Writing_guidelines/Howto/Write_a_new_entry_in_the_glossary) für weitere Details.

#### Beispiele

- {{Glossary("DOM", "DOM")}}
- {{Glossary("Exception", "Ausnahme")}}
- {{Glossary("Hyperlink", "Hyperlink")}}

#### Vorlagen

- [Glossarseiten-Vorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/Glossary_page_template)

### Startseite

Eine **Startseite** dient als eine Art Menü für ihre Unterseiten und ist daher hauptsächlich eine _Navigationsseite_. Ein Layout für die Startseite wird typischerweise für die Stammseite eines Baums von Seiten über ein bestimmtes Thema verwendet. Sie beginnt mit einer kurzen Zusammenfassung des Themas und präsentiert dann eine strukturierte Liste von Links zu ihren Unterseiten und optional weiteres Material, das für den Leser nützlich sein könnte.

Die Liste der Unterseiten kann automatisch unter Verwendung der [`SubpagesWithSummaries`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/subpages_with_summaries.rs) Vorlage generiert werden. In komplexeren Fällen muss die Liste jedoch möglicherweise von Hand erstellt (und gepflegt) werden.

### Lernen Sie Webentwicklung Seiten

Der Abschnitt [Lernen Sie Webentwicklung](/de/docs/Learn_web_development) von MDN zielt speziell darauf ab, Menschen die grundlegenden Grundlagen der Webentwicklung zu vermitteln, und erfordert daher einen anderen Ansatz als der Rest der MDN-Inhalte. Sie können weitere Richtlinien unter [Richtlinien zum Schreiben von Inhalten für das Lernen Sie Webentwicklung](/de/docs/MDN/Writing_guidelines/Learning_content) finden.

Es gibt nur wenige Arten von Seiten innerhalb von Lernen Sie Webentwicklung:

- **Modulgruppen-Startseite**, zum Beispiel [Essenzielle Lernmodule](/de/docs/Learn_web_development/Core)
  - : Diese enthalten einen Einführungstext, einen Abschnitt, der die Voraussetzungen beschreibt, die Sie vor dem Starten der Modulgruppe haben sollten, und eine Liste der Module, gefolgt von einer optionalen Liste von "Siehe auch"-Links.
- **Modul-Startseite**, zum Beispiel [Inhalte mit HTML strukturieren](/de/docs/Learn_web_development/Core/Structuring_content)
  - : Diese enthalten einen Einführungstext, einen Abschnitt, der die Voraussetzungen beschreibt, die Sie vor dem Starten des Moduls haben sollten, und eine Liste der enthaltenen Tutorials, gefolgt von einer optionalen Liste von "Zusätzlichen Tutorials", die zwar verwandt sind, aber nicht Teil des zentralen Lernpfads, und einer optionalen Liste von "Siehe auch"-Links.
- **Tutorial-Seite**, zum Beispiel [Grundlegende HTML-Syntax](/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax)
  - : Die Struktur eines Lern-Tutorials ist nicht streng festgelegt, es muss jedoch ein praxisorientiertes Lernerlebnis bieten (siehe [Richtlinien zum Schreiben von Inhalten für das Lernen Sie Webentwicklung > Ansatz](/de/docs/MDN/Writing_guidelines/Learning_content#approach)), es muss am Anfang eine Liste von "Voraussetzungen" und "Lernzielen" haben, und der Inhalt muss die angegebenen Lernziele vermitteln.

### Beispiele

- [HTML](/de/docs/Web/HTML)
- [CSS](/de/docs/Web/CSS)
- [Web-APIs](/de/docs/Web/API)
- [JavaScript](/de/docs/Web/JavaScript)
- [Lernen Sie Webentwicklung](/de/docs/Learn_web_development)
- [Community-Ressourcen](/de/docs/MDN/Community)

## Siehe auch

- [Seitenkomponenten](/de/docs/MDN/Writing_guidelines/Writing_style_guide#page_components)
- [Codebeispiele in Markdown erstellen](/de/docs/MDN/Writing_guidelines/Code_style_guide)
