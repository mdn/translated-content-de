---
title: Seitentypen
slug: MDN/Writing_guidelines/Page_structures/Page_types
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

Es gibt eine Reihe von Seitentypen, die auf MDN wiederholt verwendet werden. Dieser Artikel beschreibt diese Seitentypen, ihren Zweck und gibt Beispiele und Vorlagen für jeden, die verwendet werden können, wenn eine neue Seite erstellt wird.

Es gibt drei große Kategorien von Seitentypen auf MDN, obwohl einige Seitentypen in mehr als eine Kategorie fallen.

- **Referenz**-Seiten beschreiben die Details von etwas und sind entsprechend der Struktur des beschriebenen Objekts organisiert.
- **Leitfaden**-Seiten beschreiben, wie man etwas tut oder verwendet und sind basierend auf den Zielen des Lesers organisiert.
- **Navigations**-Seiten existieren hauptsächlich, um Links zu anderen Seiten bereitzustellen, üblicherweise zu verwandten Themen.

## Erstellen einer neuen Seite

Um neue Seiten auf MDN zu erstellen, müssen Sie GitHub verwenden — werfen Sie einen Blick auf unseren [Content-Repo-Bereich](https://github.com/mdn/content) über [Hinzufügen eines neuen Dokuments](https://github.com/mdn/content/blob/main/CONTRIBUTING.md#adding-a-new-document) für weitere Anweisungen.

## Verwendung der Vorlagen

Wenn Sie eine neue Seite erstellen, können Sie sicherstellen, dass Sie die richtige Seitenstruktur/inhalte verwendet haben, indem Sie sich auf eine unserer Seitenschablonen beziehen — siehe die Abschnitte unten. Sie können den genauen Quellcode jeder Vorlage (falls Sie ihn kopieren möchten) finden, indem Sie dem "Source on **GitHub**" Link am Ende jeder Vorlage folgen. Diese Seitenschablonen machen nicht viel Sinn als veröffentlichte Seiten, aber wenn Sie ihren Quellcode betrachten, werden Sie feststellen, dass sie viele hilfreiche Kommentare, Platzhalter und Hinweise enthalten, die detailliert beschreiben, wie die fehlenden Informationen ergänzt und Ihre Seite erstellt werden kann.

Am Anfang jeder Vorlage finden Sie einen Abschnitt mit dem Titel _Vor dem Veröffentlichen entfernen_ — dieser enthält Informationen darüber, wie der Seitentitel, der Slug, das Sidebar-Menü und die Tags ausgefüllt werden sollen (z. B. Informationen, die tatsächlich nicht im Artikelkörper erscheinen). Sie müssen diesen Abschnitt löschen, nachdem Sie den Anweisungen gefolgt sind, bevor die Seite als fertig angesehen werden kann.

## Alte Seitenlayouts

Manchmal stoßen Sie auf Referenzseiten im alten Stil, die deutlich anders aussehen als die hier vorgestellten Vorlagen. Zum Beispiel hatten alte Schnittstellenseiten alle Detailinformationen zu Schnittstellenmitgliedern auf einer einzigen Seite, und einzelne Methoden-/Eigenschaften-/Konstruktor-/Ereignislistenerseiten existierten nicht.

Wenn Sie auf ein Set von alten Seiten stoßen, würden wir es begrüßen, wenn Sie es auf den neuen Stil aktualisieren würden! Wir wissen jedoch, dass dies eine große Menge Arbeit sein könnte. Wenn die zu aktualisierenden Informationen nicht zu umfangreich sind und Sie etwas Zeit haben, versuchen Sie es gerne, sie auf den neuen Stil zu aktualisieren.

Wenn die Arbeit umfangreicher ist, sollten Sie einige Faktoren berücksichtigen, wenn Sie die Arbeit priorisieren:

- Wie veraltet sind die Informationen?
- Wie niedrig ist die Qualität der Informationen?
- Wie populär ist die Funktion? Wie begehrt sind die Informationen?

Wenn Sie ein Team zusammenstellen möchten, um an einem Update zu arbeiten, oder einfach nur ein Inhaltsproblem melden oder diskutieren möchten, das ein Update benötigt, können Sie gerne ein [Inhaltsproblem melden](https://github.com/mdn/content/issues) oder [uns um Hilfe bitten](/de/docs/MDN/Community/Communication_channels).

## Der Frontmatter-Schlüssel für Seitentypen

Wir haben einen Frontmatter-Schlüssel `page-type` definiert, um den Typ von MDN-Seiten klar zu identifizieren. Die unten angegebenen Vorlagen zeigen, welche `page-type`-Werte Sie für jeden Seitentyp festlegen sollten.

Für die vollständige Liste der Seitentypen siehe [Der Frontmatter-Schlüssel für Seitentypen](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/Page_type_key).

## Seitenvorlagen

Unten sind Beispiele für die verschiedenen Seiten, die Sie auf MDN finden, zusammen mit Vorlagen, die verwendet werden können, um neue Inhalte basierend auf dem von Ihnen vorgestellten Inhaltstyp zu erstellen, einschließlich der folgenden Seiten:

- [API-Startseiten](#api-startseite)
- [API-Referenzseite](#api-referenzseite)
- [API-Referenzunterseite](#api-referenzunterseite)
- [Konzeptionelle Seiten](#konzeptionelle_seite)
- [CSS-Feature-Referenz](#css-feature-referenzseite)
- [CSS-Modul-Startseite](#css-modul-startseite)
- [Glossareintrag](#glossarseite)
- [HTML-Element](#html-element-referenzseite)
- [HTTP-Header](#http-header-referenzseite)
- [Landingpage](#landingpage)
- [SVG-Element](#svg-element-referenzseite)
- [Lernen-Webentwicklung-Seiten](#lernen-webentwicklung-seiten)

Jeder Abschnitt enthält Links zu Live-Beispielseiten für diesen Seitentyp.

### API-Startseite

Eine **{{Glossary("API", "API")}}-Startseite** bietet einen Überblick darüber, was eine bestimmte API tut, sowie Links zur Dokumentation für jede der von der API angebotenen Schnittstellen, Globalen, Funktionen usw. Es verlinkt nicht direkt auf spezifische Methoden oder Eigenschaften innerhalb der Klassen der API, außer im Kontext des Überblicktextes. Es ist hauptsächlich eine \_Navigations_Seite, dient aber auch als eine Zusammenfassende \_Referenz_Seite für die API.

Es gibt einige Fälle, in denen mehrere APIs existieren, die unterschiedlich sind und in ihren eigenen Spezifikationen definiert sind, aber eng verwandt sind und daher sinnvollerweise mit einer einzigen API-Startseite abgedeckt werden sollten. Zum Beispiel deckt die [Generic Sensor API](https://www.w3.org/TR/generic-sensor/) allgemeine Sensorfragen ab, aber spezialisiertere Fragen werden in anderen APIs wie [Ambient Light Sensor](https://www.w3.org/TR/ambient-light/), [Motion Sensor](https://www.w3.org/TR/motion-sensors/) usw. behandelt. In solchen Fällen sind viele der Konzepte auf hoher Ebene gleich, sodass es keinen Sinn macht, diese über mehrere Startseiten hinweg zu wiederholen. In einem solchen Fall wäre es in Bezug auf Wiederholung und Auffindbarkeit sinnvoller, sie alle unter einer einzigen "Websensoren"-Startseite zu behandeln.

#### Beispiel

- [WebVR API](/de/docs/Web/API/WebVR_API)

#### Vorlagen

- [API-Startseitenvorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_landing_page_template)

### API-Referenzseite

> [!NOTE]
> Auch bekannt als eine _Schnittstellen-Startseite_.

Eine **API-Referenzseite** listet alle Methoden, Eigenschaften, Ereignisse usw. auf, die Mitglieder einer bestimmten Schnittstelle oder Klasse sind. Sie bietet einen Überblick darüber, was die Klasse oder Schnittstelle tut oder wofür sie verwendet wird, und gibt Links zur Dokumentation für jedes dieser Mitglieder. Sie ist detaillierter als eine API-Startseite, die typischerweise Links zu mehreren API-Referenzseiten bereitstellt.

#### Beispiel

- [Request-Schnittstelle](/de/docs/Web/API/Request) der [Fetch API](/de/docs/Web/API/Fetch_API).

#### Vorlagen

- [API-Referenzseitenvorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_reference_page_template)

### API-Referenzunterseite

Eine **API-Referenzunterseite** ist ein Kind einer API-Referenzseite. Sie dokumentiert ein einzelnes Schnittstellenmitglied im Detail.

#### Beispiele

- [`count()` Methode](/de/docs/Web/API/IDBIndex/count) der [IDBIndex](/de/docs/Web/API/IDBIndex) Schnittstelle (Teil der [IndexedDB API](/de/docs/Web/API/IndexedDB_API))
- [Capabilities-Eigenschaft](/de/docs/Web/API/VRDisplay/capabilities) der [VRDisplay](/de/docs/Web/API/VRDisplay) Schnittstelle (Teil der [WebVR API](/de/docs/Web/API/WebVR_API))
- [Request() Konstruktor](/de/docs/Web/API/Request/Request) der [Request](/de/docs/Web/API/Request) Schnittstelle (Teil der [Fetch API](/de/docs/Web/API/Fetch_API))
- [vrdisplaypresentchange Ereignis](/de/docs/Web/API/Window/vrdisplaypresentchange_event) (Teil der [WebVR API](/de/docs/Web/API/WebVR_API), hängt von der [Window](/de/docs/Web/API/Window) Schnittstelle ab)

#### Vorlagen

- [API-Methodenunterseitenvorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_method_subpage_template)
- [API-Eigenschaftenunterseitenvorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_property_subpage_template)
- [API-Konstruktorsubseitenvorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_constructor_subpage_template)
- [API-Ereignisunterseitenvorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_event_subpage_template)

### HTML-Element-Referenzseite

Eine **HTML-Referenzseite** listet alle Attribute auf, die an einem HTML-Element verfügbar sind, erklärt den Zweck und die Verwendung des Elements und bietet Beispiele, Browser-Kompatibilitätsinformationen und andere wichtige Daten.

#### Beispiel

- [`<video>` Element](/de/docs/Web/HTML/Element/video)

#### Vorlagen

- [HTML-Element-Seitenvorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/HTML_element_page_template)

### SVG-Element-Referenzseite

Eine **SVG-Referenzseite** listet alle Attribute auf, die an einem SVG-Element verfügbar sind, erklärt den Zweck und die Verwendung des Elements und bietet Beispiele, Browser-Kompatibilitätsinformationen und andere wichtige Daten.

#### Beispiel

- [\<g> Element](/de/docs/Web/SVG/Reference/Element/g)

#### Vorlagen

- [SVG-Element-Seitenvorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/SVG_element_page_template)

### CSS-Modul-Startseite

Jedes **[CSS](/de/docs/Web/CSS)-Modul** stellt eine CSS-Spezifikation dar, die Unterstützung für bestimmte Funktionen und Implementierungen in CSS bietet. Beispielsweise repräsentiert das [CSS-Boxmodell](/de/docs/Web/CSS/CSS_box_model) Modul die [Spezifikation](/de/docs/Web/CSS/CSS_box_model#specifications) die die Rand- und Abstandeigenschaften beschreibt, mit denen Sie Abstände in und um ein CSS-Box-Element erstellen können.

Eine **CSS-Modul-Startseite** bietet einen Überblick über die Funktionen, die das Modul bereitstellt, und listet alle vom Modul angebotenen Eigenschaften, Datentypen, CSS-Funktionen usw. auf. Wenn möglich, bietet die CSS-Modul-Startseite eine schnelle Demonstration dessen, was mit den Eigenschaften des Moduls erreicht werden kann, durch ein interaktives Beispiel. Die Modul-Startseite dient hauptsächlich als \_Navigations_Seite, funktioniert aber auch als eine Schnellübersicht \_Referenz_Seite für das Modul.

Einige verwandte Eigenschaften und Funktionen, die zu anderen Modulen gehören, aber eng mit den vom Modul angebotenen Funktionen verwandt sind, das Sie dokumentieren, können auch in einem Abschnitt _Verwandte Konzepte_ behandelt werden. Zum Beispiel werden der `<easing-function>` Datentyp und die `prefers-reduced-motion` Media-Query nicht im CSS-Animationsmodul behandelt, aber da sie eng mit CSS-Animationen verwandt sind, ist es eine gute Idee, sie im Abschnitt [Verwandte Konzepte](/de/docs/Web/CSS/CSS_animations#related_concepts) der CSS-Animationsmodul-Startseite hervorzuheben.

#### Beispiele

- [CSS-Animationen](/de/docs/Web/CSS/CSS_animations)
- [CSS-Benutzeroberfläche](/de/docs/Web/CSS/CSS_basic_user_interface)
- [CSS-Filtereffekte](/de/docs/Web/CSS/CSS_filter_effects)
- [CSS-Scroll-Snap](/de/docs/Web/CSS/CSS_scroll_snap)

#### Vorlagen

- [CSS-Modul-Startseitenschablone](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/CSS_module_landing_page_template)

### CSS-Feature-Referenzseite

Eine **CSS-Referenzseite** listet alle verfügbaren Syntax für ein CSS-Feature wie einen Selektor oder eine Eigenschaft auf und erklärt den Zweck und die Verwendung des Features. Sie bietet auch Beispiele, Browser-Kompatibilitätsinformationen und andere wichtige Daten.

#### Beispiele

- [`background-color` Eigenschaft](/de/docs/Web/CSS/background-color)
- [`:hover` Pseudo-Klasse](/de/docs/Web/CSS/:hover)
- [`@media` At-Regel](/de/docs/Web/CSS/@media)

#### Vorlagen

- [CSS-Eigenschaftsseitenschablone](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/CSS_property_page_template)
- [CSS-Selektorseitenschablone](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/CSS_selector_page_template)
- [CSS-Funktionsseitenschablone](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/CSS_function_page_template)

### HTTP-Header-Referenzseite

Eine **HTTP-Header-Referenzseite** listet alle verfügbaren Direktiven auf, die ein HTTP-Header enthalten kann, und erklärt den Zweck und die Verwendung des Headers. Sie bietet auch Beispiele, Browser-Kompatibilitätsinformationen und andere wichtige Erklärungen.

#### Beispiel

- [Cache-Control Header](/de/docs/Web/HTTP/Reference/Headers/Cache-Control)

#### Vorlagen

- [HTTP-Header-Seitenvorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/HTTP_header_page_template)

### Konzeptionelle Seite

Eine **konzeptionelle Seite** ist eine \_Leitfaden_Seite, die etwas erklärt oder lehrt. Im Allgemeinen, wenn eine Seite hauptsächlich Prosa enthält und nicht in einen anderen Seitentyp fällt, ist es wahrscheinlich eine konzeptionelle Seite. Eine ausführliche Diskussion eines Themas könnte sich über mehrere konzeptionelle Seiten erstrecken und mit den Makros [Next](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/previous_menu_next.rs) und [Previous](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/previous_menu_next.rs) verlinkt werden.

#### Beispiele

- [Verwendung der WebVR API](/de/docs/Web/API/WebVR_API/Using_the_WebVR_API)
- [Visualisierungen mit Web Audio API](/de/docs/Web/API/Web_Audio_API/Visualizations_with_Web_Audio_API)
- [Konflikte behandeln](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)

### Glossarseite

Eine **Glossarseite** enthält eine kurze Erklärung eines Begriffs, Themas oder Konzepts. Der erste Absatz sollte eine einfache, eigenständige Beschreibung des Begriffs sein, die nicht mehr als ein paar Sätze umfasst. Dies kann durch Links zu weiteren Informationen im Abschnitt **Siehe auch** ergänzt werden. Wenn die Seite mehr als eine Bildschirmseite lang wird, ist sie zu lang und sollte in eine konzeptionelle Seite umgewandelt werden. Weitere Informationen finden Sie unter [Anleitung zum Schreiben und Verweisen auf einen Eintrag im Glossar](/de/docs/MDN/Writing_guidelines/Howto/Write_a_new_entry_in_the_glossary).

#### Beispiele

- {{Glossary("DOM", "DOM")}}
- {{Glossary("Exception", "Exception")}}
- {{Glossary("Hyperlink", "Hyperlink")}}

#### Vorlagen

- [Glossarseitenschablone](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/Glossary_page_template)

### Landingpage

Eine **Landingpage** dient als Menü für ihre Unterseiten und ist daher hauptsächlich eine \_Navigations_Seite. Ein Landingpage-Layout wird typischerweise für die Stammseite eines Baums von Seiten zu einem bestimmten Thema verwendet. Sie beginnt mit einer kurzen Zusammenfassung des Themas und präsentiert dann eine strukturierte Liste von Links zu ihren Unterseiten sowie gegebenenfalls zusätzliches Material, das für den Leser nützlich sein könnte.

Die Liste der Unterseiten kann automatisch mit der [`SubpagesWithSummaries`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/subpages_with_summaries.rs) Vorlage generiert werden. In komplexeren Fällen muss die Liste jedoch möglicherweise von Hand erstellt (und gepflegt) werden.

### Lernen-Webentwicklung-Seiten

Der [Learn Web Development](/de/docs/Learn_web_development) Abschnitt von MDN richtet sich speziell an Personen, die die grundlegenden Grundlagen der Webentwicklung erlernen, und erfordert daher einen anderen Ansatz als der Rest der MDN-Inhalte. Weitere Richtlinien finden Sie unter [Learn Web Development Schreibrichtlinien](/de/docs/MDN/Writing_guidelines/Learning_content).

Es gibt nur wenige Seitentypen innerhalb von Learn Web Development:

- **Modulgruppen-Startseite**, zum Beispiel [Core Learning Modules](/de/docs/Learn_web_development/Core)
  - : Diese enthalten einen Einführungsabschnitt, einen Abschnitt, der die Voraussetzungen beschreibt, die Sie haben sollten, bevor Sie die Modulgruppe starten, und eine Liste der Module, gefolgt von einer optionalen Liste von "Siehe auch"-Links.
- **Modul-Startseite**, zum Beispiel [Structuring Content with HTML](/de/docs/Learn_web_development/Core/Structuring_content)
  - : Diese enthalten einen Einführungsabschnitt, einen Abschnitt, der die Voraussetzungen beschreibt, die Sie haben sollten, bevor Sie das Modul starten, und eine Liste der enthaltenen Tutorials, gefolgt von einer optionalen Liste von "Zusätzlichen Tutorials", die mit dem Thema verwandt sind, aber nicht Teil des zentralen Lernpfads sind, sowie einer optionalen Liste von "Siehe auch"-Links.
- **Tutorialseite**, zum Beispiel [Basic HTML Syntax](/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax)
  - : Die Struktur eines Learn-Tutorials ist nicht strikt, muss jedoch ein interaktives Lernerlebnis bieten (siehe [Learn Web Development Schreibrichtlinien > Ansatz](/de/docs/MDN/Writing_guidelines/Learning_content#approach)), es muss eine Reihe von "Voraussetzungen" und "Lernzielen" am Anfang enthalten, und der Inhalt muss die festgelegten Lernziele lehren.

### Beispiele

- [HTML](/de/docs/Web/HTML)
- [CSS](/de/docs/Web/CSS)
- [Web APIs](/de/docs/Web/API)
- [JavaScript](/de/docs/Web/JavaScript)
- [Lernen-Webentwicklung](/de/docs/Learn_web_development)
- [Community-Ressourcen](/de/docs/MDN/Community)

## Siehe auch

- [Seitenkomponenten](/de/docs/MDN/Writing_guidelines/Writing_style_guide#page_components)
- [Erstellen von Codebeispielen in Markdown](/de/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide)
