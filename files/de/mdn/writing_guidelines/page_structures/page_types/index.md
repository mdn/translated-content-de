---
title: Seitentypen
slug: MDN/Writing_guidelines/Page_structures/Page_types
l10n:
  sourceCommit: c68f51255b41e080f34f27aafc6fcd3aafa52114
---

Es gibt eine Reihe von Seitentypen, die auf MDN wiederholt verwendet werden. Dieser Artikel beschreibt diese Seitentypen, ihren Zweck und gibt Beispiele für jeden sowie Vorlagen zur Verwendung beim Erstellen einer neuen Seite.

Auf MDN gibt es drei große Kategorien von Seitentypen, obwohl einige Seitentypen in mehr als eine Kategorie fallen.

- **Referenzseiten** beschreiben die Details von etwas und sind gemäß der Struktur des beschriebenen Objekts organisiert.
- **Leitfaden-Seiten** beschreiben, wie man etwas tut oder verwendet, und sind basierend auf den Zielen des Lesers organisiert.
- **Navigationsseiten** existieren in erster Linie, um Links zu anderen Seiten bereitzustellen, normalerweise über verwandte Themen.

## Erstellen einer neuen Seite

Das Hinzufügen eines neuen Dokuments ist relativ einfach, besonders wenn Sie mit dem Kopieren einer `index.md`-Datei aus einem ähnlichen Thema beginnen können. Es gibt ein paar Dinge, die Sie beachten sollten:

- Dokumente werden in Markdown in einer `index.md`-Datei geschrieben.
- Wenn Sie beispielsweise ein neues Dokument für einen HTTP-Header namens `foo` erstellen, erstellen Sie einen neuen Ordner unter `files/en-us/web/http/reference/headers/foo` und legen Sie die Markdown-Datei in diesem Ordner ab (`files/en-us/web/http/reference/headers/foo/index.md`).
- Eine `index.md`-Datei eines Dokuments muss mit einem Front-Matter beginnen, das den `title`, `slug` und meistens den `page-type` definiert. Es könnte hilfreich sein, sich auf das Front-Matter einer ähnlichen Dokumentation in einer `index.md` zu beziehen.

## Verwendung der Vorlagen

Wenn Sie eine neue Seite erstellen, können Sie durch Beziehen auf eine unserer Seitentemplates sicherstellen, dass Sie die richtige Seitenstruktur/Inhalte verwendet haben – siehe die Abschnitte unten. Sie können den genauen Quellcode jeder Vorlage finden (wenn Sie ihn kopieren möchten), indem Sie dem "Source on **GitHub**"-Link am Ende jeder Vorlage folgen. Diese Seitentemplates machen als veröffentlichte Seiten nicht viel Sinn, aber wenn Sie ihren Quellcode anzeigen, werden Sie sehen, dass sie viele hilfreiche Kommentare, Platzhalter und Hinweise enthalten, die detaillieren, wie die fehlenden Informationen ausgefüllt und Ihre Seite erstellt werden können.

Am Anfang jeder Vorlage finden Sie einen Abschnitt mit dem Titel _Vor der Veröffentlichung entfernen_ – dieser enthält Informationen darüber, wie Sie den Seitentitel, den Slug, das Seitenleistenmenü und die Tags ausfüllen können (z. B. Informationen, die nicht im Körper des Artikels erscheinen). Sie müssen diesen Abschnitt löschen, nachdem Sie die Anweisungen befolgt haben, bevor die Seite als fertig betrachtet werden kann.

## Alte Seitenlayouts

Manchmal stoßen Sie auf alte Referenzseiten, die deutlich anders aussehen als die hier vorgestellten Vorlagen. Beispielsweise hatten alte Schnittstellenseiten alle Details der Mitglieder einer Schnittstelle auf einer einzigen Seite, und es gab keine einzelnen Seiten für Methode/Eigenschaft/Konstruktor/Ereignis-Listener.

Wenn Sie auf ein altes Set von Seiten stoßen, wären wir froh, wenn Sie diese auf den neuen Stil aktualisieren würden! Wir schätzen jedoch, dass dies eine Menge Arbeit sein kann. Wenn die Informationen zu aktualisieren nicht allzu umfangreich sind und Sie etwas Zeit haben, versuchen Sie es ruhig, sie auf den neuen Stil zu aktualisieren.

Wenn die Arbeit bedeutender ist, sollten Sie einige Faktoren berücksichtigen, wenn Sie die Prioritäten des Projekts festlegen:

- Wie veraltet sind die Informationen?
- Wie niedrig ist die Qualität der Informationen?
- Wie beliebt ist die Funktion? Wie sehr wird die Information gesucht?

Wenn Sie ein Team zusammenstellen möchten, um an einem Update zu arbeiten, oder wenn Sie einfach nur einige Inhalte melden oder diskutieren möchten, die ein Update benötigen, zögern Sie nicht, [ein Inhaltsproblem zu melden](https://github.com/mdn/content/issues) oder [uns um Hilfe zu bitten](/de/docs/MDN/Community/Communication_channels).

## Der Front-Matter-Schlüssel für Seitentypen

Wir haben einen Front-Matter-Schlüssel `page-type` definiert, um den Typ der MDN-Seiten klar zu identifizieren. Die unten verlinkten Vorlagen geben an, welche `page-type`-Werte Sie für jeden Seitentyp festlegen sollen.

Die vollständige Liste der Seitentypen finden Sie unter [The page-type front matter key](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/Page_type_key).

## Seitentemplates

Unten finden Sie Beispiele für die verschiedenen Seiten, die Sie auf MDN finden, sowie Templates, die verwendet werden können, um neue Inhalte basierend auf dem Typ der präsentierten Inhalte zu erstellen, einschließlich der folgenden Seiten:

- [API-Übersichtsseiten](#api-übersichtsseite)
- [API-Referenzseite](#api-referenzseite)
- [API-Referenzunterseite](#api-referenzunterseite)
- [ARIA-Referenz](#aria-referenzseite)
- [Konzeptuelle Seiten](#konzeptuelle_seite)
- [CSS-Feature-Referenzseite](#css-feature-referenzseite)
- [CSS-Modul-Übersichtsseite](#css-modul-übersichtsseite)
- [Glossareintrag](#glossarseite)
- [HTML-Element](#html-elementreferenzseite)
- [HTML-Attribut](#html-attributreferenzseite)
- [HTTP-Header](#http-header-referenzseite)
- [Übersichtsseite](#übersichtsseite)
- [SVG-Element](#svg-elementreferenzseite)
- [Webentwicklung lernen Seiten](#webentwicklung_lernen_seiten)

Jeder Abschnitt enthält Links zu Beispielen für diese Seitentypen.

### API-Übersichtsseite

Eine **{{Glossary("API", "API")}}-Übersichtsseite** bietet einen Überblick darüber, was eine bestimmte API tut, sowie Links zur Dokumentation für jede der angebotenen Schnittstellen, globalen Funktionen usw. Sie verlinkt nicht direkt auf spezifische Methoden oder Eigenschaften innerhalb der Klassen der API, außer im Kontext des Übersichtstextes. Sie ist in erster Linie eine _Navigationsseite_, aber sie fungiert auch als eine übersichtliche _Referenzseite_ für die API.

Es gibt Fälle, in denen mehrere APIs existieren, die unterscheidbar und in eigenen Spezifikationen definiert sind, aber eng verwandt sind und deshalb sinnvollerweise mit einer einzigen API-Landingpage abgedeckt werden. Zum Beispiel behandelt die [Generic Sensor API](https://w3c.github.io/sensors/) allgemeine Sensoren betreffenden Angelegenheiten, aber spezifischere Angelegenheiten werden in anderen APIs wie [Ambient Light Sensor](https://w3c.github.io/ambient-light/), [Motion Sensor](https://w3c.github.io/motion-sensors/) usw. behandelt. In solchen Fällen sind viele der grundlegenden Konzepte gleich, daher ergibt es keinen Sinn, diese über mehrere Landingpages hinweg zu wiederholen. In einem solchen Fall wäre es in Bezug auf Wiederholung und Auffindbarkeit sinnvoller, sie alle unter einer einzigen "Web-Sensoren"-Landingpage abzudecken.

#### Beispiel

- [WebVR API](/de/docs/Web/API/WebVR_API)

#### Vorlagen

- [API Landing Page Template](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_landing_page_template)

### API-Referenzseite

> [!NOTE]
> Auch bekannt als eine _Schnittstellen-Startseite_.

Eine **API-Referenzseite** listet alle Methoden, Eigenschaften, Ereignisse usw. auf, die Mitglieder einer bestimmten Schnittstelle oder Klasse sind. Sie bietet einen Überblick darüber, was die Klasse oder Schnittstelle tut oder wofür sie verwendet wird, und gibt Links zur Dokumentation für jedes dieser Mitglieder. Sie ist granularer als eine API-Übersichtsseite, die typischerweise zu mehreren API-Referenzseiten verlinkt.

#### Beispiel

- [Request-Schnittstelle](/de/docs/Web/API/Request) der [Fetch API](/de/docs/Web/API/Fetch_API).

#### Vorlagen

- [API Reference Page Template](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_reference_page_template)

### API-Referenzunterseite

Eine **API-Referenzunterseite** ist ein Kind einer API-Referenzseite. Sie dokumentiert ein einzelnes Schnittstellenmitglied im Detail.

#### Beispiele

- [`count()`-Methode](/de/docs/Web/API/IDBIndex/count) der [IDBIndex](/de/docs/Web/API/IDBIndex) Schnittstelle (Teil der [IndexedDB-API](/de/docs/Web/API/IndexedDB_API))
- [capabilities-Eigenschaft](/de/docs/Web/API/VRDisplay/capabilities) der [VRDisplay](/de/docs/Web/API/VRDisplay) Schnittstelle (Teil der [WebVR API](/de/docs/Web/API/WebVR_API))
- [Request()-Konstruktor](/de/docs/Web/API/Request/Request) der [Request](/de/docs/Web/API/Request) Schnittstelle (Teil der [Fetch API](/de/docs/Web/API/Fetch_API))
- [vrdisplaypresentchange-Ereignis](/de/docs/Web/API/Window/vrdisplaypresentchange_event) (Teil der [WebVR API](/de/docs/Web/API/WebVR_API), hängt von der [Window](/de/docs/Web/API/Window)-Schnittstelle ab)

#### Vorlagen

- [API Method Subpage Template](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_method_subpage_template)
- [API Property Subpage Template](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_property_subpage_template)
- [API Constructor Subpage Template](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_constructor_subpage_template)
- [API Event Subpage Template](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_event_subpage_template)

### HTML-Elementreferenzseite

Eine **HTML-Referenzseite** listet alle Attribute auf, die auf einem HTML-Element verfügbar sind, erklärt den Zweck und die Verwendung des Elements und bietet Beispiele, Browser-Kompatibilitätsinformationen und andere wichtige Daten.

#### Beispiel

- [`<video>`-Element](/de/docs/Web/HTML/Reference/Elements/video)

#### Vorlagen

- [HTML Element Page Template](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/HTML_element_page_template)

### HTML-Attributreferenzseite

Eine HTML-Attributseite listet alle Werte auf, die auf einem HTML-Attribut existieren, erklärt den Zweck und die Anwendungsfälle des Attributs und bietet Beispiele, Browser-Kompatibilitätsinformationen und andere wichtige Daten.

> [!NOTE]
> Elementspezifische Attribute (wie `placeholder` für `<input>`) erfordern keine separate Seite, wenn die Attribute ausreichend innerhalb der Referenzseite des übergeordneten Elements behandelt werden können (zum Beispiel sollte das `placeholder`-Attribut auf der Seite des `<input>`-Elements behandelt werden, nicht als eigene Seite).

#### Beispiel

- [`class`-Attribut](/de/docs/Web/HTML/Reference/Global_attributes/class)

#### Vorlagen

- [HTML Attribute Page Template](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/HTML_attribute_page_template)

### SVG-Elementreferenzseite

Eine **SVG-Referenzseite** listet alle Attribute auf, die auf einem SVG-Element verfügbar sind, erklärt den Zweck und die Verwendung des Elements und bietet Beispiele, Browser-Kompatibilitätsinformationen und andere wichtige Daten.

#### Beispiel

- [\<g>-Element](/de/docs/Web/SVG/Reference/Element/g)

#### Vorlagen

- [SVG Element Page Template](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/SVG_element_page_template)

### CSS-Modul-Übersichtsseite

Jedes **[CSS](/de/docs/Web/CSS)-Modul** repräsentiert eine CSS-Spezifikation, die Unterstützung für bestimmte Funktionen und Implementierungen in CSS bietet. Zum Beispiel repräsentiert das Modul [CSS-Boxmodell](/de/docs/Web/CSS/CSS_box_model) die [Spezifikation](/de/docs/Web/CSS/CSS_box_model#specifications), die die Rand- und Abstands-Eigenschaften beschreibt, mit denen Sie Abstand in und um eine CSS-Box herum schaffen können.

Eine **CSS-Modul-Übersichtsseite** bietet einen Überblick über die Funktionen, die das Modul bietet und listet alle Eigenschaften, Datentypen, CSS-Funktionen usw. auf, die das Modul bietet. Wenn möglich, bietet die CSS-Modul-Übersichtsseite eine schnelle Demonstration dessen, was mit den Eigenschaften des Moduls erreicht werden kann, durch ein interaktives Beispiel. Die Modul-Übersichtsseite dient in erster Linie als _Navigationsseite_, fungiert aber auch als eine Übersichtliche _Referenzseite_ für das Modul.

Einige verwandte Eigenschaften und Funktionen, die zu anderen Modulen gehören, jedoch eng mit der Funktionalität verbunden sind, die das Modul, das Sie dokumentieren, bietet, können ebenfalls in einem _Verwandte Konzepte_-Abschnitt behandelt werden. Zum Beispiel wird der Datentyp `<easing-function>` und die `prefers-reduced-motion`-Media-Abfrage nicht im CSS-Animationsmodul behandelt, aber da sie eng mit CSS-Animationen verwandt sind, ist es eine gute Idee, sie im [Verwandte Konzepte](/de/docs/Web/CSS/CSS_animations#related_concepts)-Abschnitt der CSS-Animationsmodul-Übersichtsseite hervorzuheben.

#### Beispiele

- [CSS-Animationen](/de/docs/Web/CSS/CSS_animations)
- [CSS-Benutzerschnittstelle](/de/docs/Web/CSS/CSS_basic_user_interface)
- [CSS-Filtereffekte](/de/docs/Web/CSS/CSS_filter_effects)
- [CSS-Scroll-Snap](/de/docs/Web/CSS/CSS_scroll_snap)

#### Vorlagen

- [CSS Module Landing Page Template](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/CSS_module_landing_page_template)

### CSS-Feature-Referenzseite

Eine **CSS-Referenzseite** listet alle verfügbaren Syntaxen für ein CSS-Feature wie ein Selektor oder eine Eigenschaft auf und erklärt den Zweck und die Verwendung des Features. Sie bietet auch Beispiele, Browser-Kompatibilitätsinformationen und andere wichtige Daten.

#### Beispiele

- [`background-color`-Eigenschaft](/de/docs/Web/CSS/background-color)
- [`:hover`-Pseudoklasse](/de/docs/Web/CSS/:hover)
- [`@media`-At-Regel](/de/docs/Web/CSS/@media)

#### Vorlagen

- [CSS Property Page Template](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/CSS_property_page_template)
- [CSS Selector Page Template](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/CSS_selector_page_template)
- [CSS Function Page Template](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/CSS_function_page_template)

### HTTP-Header-Referenzseite

Eine **HTTP-Header-Referenzseite** listet alle verfügbaren Direktiven auf, die ein HTTP-Header enthalten kann, und erklärt den Zweck und die Verwendung des Headers. Außerdem bietet sie Beispiele, Browser-Kompatibilitätsinformationen und andere wichtige Erklärungen.

#### Beispiel

- [Cache-Control-Header](/de/docs/Web/HTTP/Reference/Headers/Cache-Control)

#### Vorlagen

- [HTTP Header Page Template](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/HTTP_header_page_template)

### ARIA-Referenzseite

Eine **ARIA-Referenzseite** beschreibt eine [Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles) oder ein [Attribut](/de/docs/Web/Accessibility/ARIA/Reference/Attributes), die Möglichkeiten definieren, um Webinhalte und Webanwendungen für Menschen mit Behinderungen zugänglicher zu machen.

#### Beispiele

- [`aria-busy`-Attribut](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-busy)
- [`application`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/application_role)

#### Vorlagen

- [ARIA Page Template](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/ARIA_Page_Template)

### Konzeptuelle Seite

Eine **konzeptuelle Seite** ist eine _Leitfaden-Seite_, die etwas erklärt oder lehrt. Im Allgemeinen, wenn eine Seite hauptsächlich Prosa enthält und nicht in einen anderen Seitentyp fällt, ist sie wahrscheinlich eine konzeptuelle Seite. Eine erweiterte Diskussion eines Themas könnte sich über mehrere konzeptuelle Seiten erstrecken und über [Next](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/previous_menu_next.rs) und [Previous](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/previous_menu_next.rs) Makros verlinkt sein.

#### Beispiele

- [Verwendung der WebVR API](/de/docs/Web/API/WebVR_API/Using_the_WebVR_API)
- [Visualisierungen mit der Web-Audio-API](/de/docs/Web/API/Web_Audio_API/Visualizations_with_Web_Audio_API)
- [Umgang mit Konflikten](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)

### Glossarseite

Eine **Glossarseite** enthält eine kurze Erklärung eines Begriffs, Themas oder Konzepts. Der erste Absatz sollte eine einfache, abgeschlossene Beschreibung des Begriffs sein, nicht mehr als ein paar Sätze. Dies kann von Links zu weiterführenden Informationen im Abschnitt **Siehe auch** gefolgt werden. Wenn die Seite länger als etwa eine Bildschirmseite wird, ist sie zu lang und sollte in eine konzeptuelle Seite umgewandelt werden. Siehe [Anleitung für das Schreiben und Verweisen eines Glossareintrags](/de/docs/MDN/Writing_guidelines/Howto/Write_a_new_entry_in_the_glossary) für weitere Details.

#### Beispiele

- {{Glossary("DOM", "DOM")}}
- {{Glossary("Exception", "Ausnahme")}}
- {{Glossary("Hyperlink", "Hyperlink")}}

#### Vorlagen

- [Glossary Page Template](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/Glossary_page_template)

### Übersichtsseite

Eine **Übersichtsseite** dient als eine Art Menü für ihre Unterseiten und ist daher in erster Linie eine _Navigationsseite_. Ein Übersichtsseitenlayout wird typischerweise für die Hauptseite eines Seitenbaums über ein bestimmtes Thema verwendet. Sie beginnt mit einer kurzen Zusammenfassung des Themas und präsentiert dann eine strukturierte Liste von Links zu ihren Unterseiten und optional zusätzliches Material, das dem Leser nützlich sein könnte.

Die Liste der Unterseiten kann automatisch mit der [`SubpagesWithSummaries`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/subpages_with_summaries.rs) Vorlage generiert werden. In komplexeren Fällen muss die Liste jedoch manuell erstellt (und gepflegt) werden.

### Webentwicklung lernen Seiten

Der Abschnitt [Webentwicklung lernen](/de/docs/Learn_web_development) von MDN richtet sich speziell an Personen, die die grundlegenden Grundlagen der Webentwicklung lernen, und erfordert daher einen anderen Ansatz als der andere Inhalt von MDN. Weitere Richtlinien finden Sie unter [Richtlinien für das Schreiben von Webentwicklungsinhalten](/de/docs/MDN/Writing_guidelines/Learning_content).

Es gibt nur wenige Seitentypen innerhalb von Webentwicklung lernen:

- **Modulgruppen-Übersichtsseite**, z.B. [Kernlernmodule](/de/docs/Learn_web_development/Core)
  - : Diese enthalten einen Einführungstext, einen Abschnitt, der die Voraussetzungen beschreibt, die Sie vor dem Beginn der Modulgruppe haben sollten, und eine Liste der Module, gefolgt von einer optionalen Liste von "Siehe auch"-Links.
- **Modul-Übersichtsseite**, z.B. [Strukturierung von Inhalten mit HTML](/de/docs/Learn_web_development/Core/Structuring_content)
  - : Diese enthalten einen Einführungstext, einen Abschnitt, der die Voraussetzungen beschreibt, die Sie haben sollten, bevor Sie das Modul angehen, und eine Liste der enthaltenen Tutorials, gefolgt von einer optionalen Liste von "Zusätzlichen Tutorials", die verwandte aber nicht Teil des zentralen Lernpfades sind, und einer optionalen Liste von "Siehe auch"-Links.
- **Tutorial-Seite**, z.B. [Grundlegende HTML-Syntax](/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax)
  - : Die Struktur eines Lern-Tutorials ist nicht strikt, aber es muss ein praktisches Lernerlebnis bieten (siehe [Richtlinien für das Schreiben von Webentwicklungsinhalten > Ansatz](/de/docs/MDN/Writing_guidelines/Learning_content#approach)), es muss eine Reihe von "Voraussetzungen" und "Lernergebnissen" am Anfang auflisten, und der Inhalt muss die angegebenen Lernergebnisse unterrichten.

### Beispiele

- [HTML](/de/docs/Web/HTML)
- [CSS](/de/docs/Web/CSS)
- [Web-APIs](/de/docs/Web/API)
- [JavaScript](/de/docs/Web/JavaScript)
- [Webentwicklung lernen](/de/docs/Learn_web_development)
- [Community-Ressourcen](/de/docs/MDN/Community)

## Siehe auch

- [Seitenelemente](/de/docs/MDN/Writing_guidelines/Writing_style_guide#page_components)
- [Erstellung von Codebeispielen in Markdown](/de/docs/MDN/Writing_guidelines/Code_style_guide)
