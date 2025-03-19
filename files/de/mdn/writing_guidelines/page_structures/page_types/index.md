---
title: Seitentypen
slug: MDN/Writing_guidelines/Page_structures/Page_types
l10n:
  sourceCommit: 0e7eafea05cd771c86e77947639f3396e7a59b2b
---

Auf MDN gibt es eine Reihe von Seitentypen, die wiederholt verwendet werden. Dieser Artikel beschreibt diese Seitentypen, ihren Zweck und gibt Beispiele für jeden sowie Vorlagen, die beim Erstellen einer neuen Seite verwendet werden können.

Es gibt drei Hauptkategorien von Seitentypen auf MDN, obwohl einige Seitentypen in mehr als eine Kategorie fallen.

- **Referenzseiten** beschreiben die Details von etwas und sind entsprechend der Struktur des beschriebenen Objekts organisiert.
- **Leitfaden**-Seiten beschreiben, wie etwas getan oder verwendet wird, und sind basierend auf den Zielen des Lesers organisiert.
- **Navigationsseiten** existieren hauptsächlich dazu, Links zu anderen Seiten bereitzustellen, meist zu verwandten Themen.

## Erstellen einer neuen Seite

Um neue Seiten auf MDN zu erstellen, müssen Sie GitHub verwenden – schauen Sie sich unseren [Inhalts-Repository](https://github.com/mdn/content) Abschnitt über das [Hinzufügen eines neuen Dokuments](https://github.com/mdn/content/blob/main/CONTRIBUTING.md#adding-a-new-document) für weitere Anweisungen an.

## Wie man die Vorlagen verwendet

Wenn Sie eine neue Seite erstellen, können Sie sicherstellen, dass Sie die richtige Seitenstruktur/Inhalte verwendet haben, indem Sie sich auf eine unserer Seitenvorlagen beziehen – siehe die Abschnitte unten. Sie können den exakten Quellcode jeder Vorlage finden (wenn Sie ihn kopieren möchten), indem Sie dem "Source on **GitHub**" Link am Ende jeder Vorlage folgen. Diese Seitenvorlagen machen als veröffentlichte Seiten nicht viel Sinn, aber wenn Sie ihren Quellcode anzeigen, werden Sie sehen, dass sie viele hilfreiche Kommentare, Platzhalter und Hinweise enthalten, wie Sie die fehlenden Informationen ausfüllen und Ihre Seite erstellen können.

Am Anfang jeder Vorlage finden Sie einen Abschnitt mit der Bezeichnung _Vor der Veröffentlichung entfernen_ – dieser enthält Informationen darüber, wie Sie den Seitentitel, den Slug, das Sidebar-Menü und die Tags ausfüllen (z.B. Informationen, die tatsächlich nicht im Körper des Artikels erscheinen). Sie müssen diesen Abschnitt löschen, nachdem Sie die Anweisungen darin befolgt haben, bevor die Seite als fertig betrachtet werden kann.

## Alte Seitenlayouts

Manchmal stoßen Sie auf alte Referenzseiten, die deutlich anders aussehen als die hier präsentierten Vorlagen. Zum Beispiel hatten alte Schnittstellenseiten alle Details der Schnittstellenmitglieder auf einer einzigen Seite, und einzelne Methoden-/Eigenschafts-/Konstruktor-/Ereignislistener-Seiten existierten nicht.

Wenn Sie auf ein altes Set von Seiten stoßen, würden wir uns freuen, wenn Sie sie auf den neuen Stil aktualisieren! Wir schätzen jedoch, dass dies eine große Menge an Arbeit sein könnte. Wenn die Informationen, die aktualisiert werden sollen, nicht zu umfangreich sind und Sie etwas freie Zeit haben, versuchen Sie, sie auf den neuen Stil zu aktualisieren.

Wenn die Arbeit umfangreicher ist, sollten Sie ein paar Faktoren berücksichtigen, wenn Sie die Arbeit priorisieren:

- Wie veraltet sind die Informationen?
- Wie niedrig ist die Qualität der Informationen?
- Wie beliebt ist das Feature? Wie stark gefragt sind die Informationen?

Wenn Sie ein Team zusammenstellen möchten, um an einem Update zu arbeiten, oder einfach nur einige Inhalte, die ein Update benötigen, melden oder diskutieren möchten, zögern Sie nicht, ein [Inhaltsproblem zu melden](https://github.com/mdn/content/issues) oder [uns um Hilfe zu bitten](/de/docs/MDN/Community/Communication_channels).

## Der Seitentyp-Schlüssel im Frontmatter

Wir haben einen Frontmatter-Schlüssel `page-type` definiert, um den Typ von MDN-Seiten klar zu identifizieren. Die unten verlinkten Vorlagen geben an, welche `page-type` Werte Sie für jeden Seitentyp festlegen sollten.

Für die vollständige Liste der Seitentypen siehe [Der Seitentyp-Schlüssel im Frontmatter](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/Page_type_key).

## Seitenvorlagen

Unten finden Sie Beispiele der verschiedenen Seiten, die Sie auf MDN finden, zusammen mit Vorlagen, die verwendet werden können, um neue Inhalte basierend auf dem Typ der Inhalte, die Sie präsentieren werden, zu erstellen, einschließlich der folgenden Seiten:

- [API-Einstiegsseiten](#api-einstiegsseite)
- [API-Referenzseite](#api-referenzseite)
- [API-Referenz Unterseite](#api-referenz_unterseite)
- [Konzeptionelle Seiten](#konzeptionelle_seite)
- [CSS-Feature-Referenz](#css-feature-referenzseite)
- [CSS-Modul Einstiegsseite](#css-modul_einstiegsseite)
- [Glossareintrag](#glossar_seite)
- [HTML-Element](#html-element_referenzseite)
- [HTTP-Header](#http-header_referenzseite)
- [Einstiegsseite](#einstiegsseite)
- [SVG-Element](#svg-element_referenzseite)
- [Lernen Sie Webentwicklung Seiten](#lernen_sie_webentwicklung_seiten)

Jeder Abschnitt enthält Links zu Live-Beispielseiten für diesen Seitentyp.

### API-Einstiegsseite

Eine **{{Glossary("API", "API")}} Einstiegsseite** bietet einen Überblick darüber, was eine bestimmte API tut, sowie Links zur Dokumentation für jede der Schnittstellen, Globalen, Funktionen usw., die von der API angeboten werden. Sie verlinkt nicht direkt auf spezielle Methoden oder Eigenschaften innerhalb der Klassen der API, außer im Kontext des Übersichtstextes. Sie ist hauptsächlich eine _Navigation_ Seite, funktioniert aber auch als eine _Referenzseite_ auf einen Blick für die API.

Es gibt einige Fälle, in denen mehrere APIs existieren, die eigenständig sind und in eigenen Spezifikationen definiert sind, aber eng miteinander verwandt sind und daher mit einer einzigen API-Einstiegsseite behandelt werden sollten. Zum Beispiel deckt die [Generic Sensor API](https://www.w3.org/TR/generic-sensor/) allgemeine Sensorbedenken ab, aber spezifischere Anliegen werden in anderen APIs wie [Ambient Light Sensor](https://www.w3.org/TR/ambient-light/), [Motion Sensor](https://www.w3.org/TR/motion-sensors/) usw. behandelt. In solchen Fällen sind viele der grundlegenden Konzepte die gleichen, sodass es keinen Sinn macht, diese über mehrere Einstiegsseiten zu wiederholen. In einem solchen Fall wäre es im Hinblick auf Wiederholung und Auffindbarkeit sinnvoller, sie alle unter einer einzigen "Web-Sensoren" Einstiegsseite zusammenzufassen.

#### Beispiel

- [WebVR API](/de/docs/Web/API/WebVR_API)

#### Vorlagen

- [API-Einstiegsseite Vorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_landing_page_template)

### API-Referenzseite

> [!NOTE]
> Auch bekannt als _Interface-Einstiegsseite_.

Eine **API-Referenzseite** listet alle Methoden, Eigenschaften, Ereignisse usw. auf, die Mitglieder einer bestimmten Schnittstelle oder Klasse sind. Sie bietet einen Überblick darüber, was die Klasse oder Schnittstelle tut oder wofür sie verwendet wird, und gibt Links zur Dokumentation für jedes dieser Mitglieder. Sie ist granularer als eine API-Einstiegsseite, die typischerweise auf mehrere API-Referenzseiten verlinkt.

#### Beispiel

- [Request Schnittstelle](/de/docs/Web/API/Request) der [Fetch API](/de/docs/Web/API/Fetch_API).

#### Vorlagen

- [API-Referenzseite Vorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_reference_page_template)

### API-Referenz Unterseite

Eine **API-Referenz Unterseite** ist ein Kind einer API-Referenzseite. Sie dokumentiert ein einzelnes Schnittstellenmitglied im Detail.

#### Beispiele

- [`count()` Methode](/de/docs/Web/API/IDBIndex/count) der [IDBIndex](/de/docs/Web/API/IDBIndex) Schnittstelle (Teil der [IndexedDB API](/de/docs/Web/API/IndexedDB_API))
- [capabilities Eigenschaft](/de/docs/Web/API/VRDisplay/capabilities) der [VRDisplay](/de/docs/Web/API/VRDisplay) Schnittstelle (Teil der [WebVR API](/de/docs/Web/API/WebVR_API))
- [Request() Konstruktor](/de/docs/Web/API/Request/Request) der [Request](/de/docs/Web/API/Request) Schnittstelle (Teil der [Fetch API](/de/docs/Web/API/Fetch_API))
- [vrdisplaypresentchange Ereignis](/de/docs/Web/API/Window/vrdisplaypresentchange_event) (Teil der [WebVR API](/de/docs/Web/API/WebVR_API), hängt von der [Window](/de/docs/Web/API/Window)) Schnittstelle ab

#### Vorlagen

- [API-Methode Unterseitenvorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_method_subpage_template)
- [API-Eigenschaft Unterseitenvorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_property_subpage_template)
- [API-Konstruktor Unterseitenvorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_constructor_subpage_template)
- [API-Ereignis Unterseitenvorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_event_subpage_template)

### HTML-Element Referenzseite

Eine **HTML-Referenzseite** listet alle Attribute auf, die für ein HTML-Element verfügbar sind, erklärt den Zweck und die Verwendung des Elements und bietet Beispiele, Browser-Kompatibilitätsinformationen und andere wichtige Daten.

#### Beispiel

- [`<video>` Element](/de/docs/Web/HTML/Element/video)

#### Vorlagen

- [HTML-Elementseiten Vorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/HTML_element_page_template)

### SVG-Element Referenzseite

Eine **SVG-Referenzseite** listet alle Attribute auf, die für ein SVG-Element verfügbar sind, erklärt den Zweck und die Verwendung des Elements und bietet Beispiele, Browser-Kompatibilitätsinformationen und andere wichtige Daten.

#### Beispiel

- [\<g> Element](/de/docs/Web/SVG/Reference/Element/g)

#### Vorlagen

- [SVG-Elementseiten Vorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/SVG_element_page_template)

### CSS-Modul Einstiegsseite

Jedes **[CSS](/de/docs/Web/CSS) Modul** repräsentiert eine CSS-Spezifikation, die Unterstützung für bestimmte Features und Implementierungen in CSS bietet. Zum Beispiel repräsentiert das Modul [CSS-Boxmodell](/de/docs/Web/CSS/CSS_box_model) die [Spezifikation](/de/docs/Web/CSS/CSS_box_model#specifications), die die Margin- und Padding-Eigenschaften beschreibt, die es Ihnen ermöglichen, Abstände in und um ein CSS-Feld zu erzeugen.

Eine **CSS-Modul Einstiegsseite** bietet einen Überblick über die von dem Modul bereitgestellten Funktionen und listet alle Eigenschaften, Datentypen, CSS-Funktionen usw. auf, die das Modul bietet. Wann immer möglich, bietet die CSS-Modul Einstiegsseite eine schnelle Demonstration dessen, was mit den Eigenschaften des Moduls erreicht werden kann, durch ein interaktives Beispiel. Die Modulseite dient hauptsächlich als _Navigationsseite_, funktioniert aber auch als eine _Referenzseite_ auf einen Blick für das Modul.

Einige verwandte Eigenschaften und Features, die zu anderen Modulen gehören, aber eng mit der von dem Modul angebotenen Funktionalität verbunden sind, können auch in einem _Verwandte Konzepte_ Abschnitt behandelt werden. Zum Beispiel werden der `<easing-function>` Datentyp und die `prefers-reduced-motion` Medienabfrage nicht im CSS-Animationsmodul behandelt, aber da sie eng mit CSS-Animationen verbunden sind, ist es eine gute Idee, sie im [Verwandte Konzepte](/de/docs/Web/CSS/CSS_animations#related_concepts) Abschnitt der CSS-Animationsmodulseite hervorzuheben.

#### Beispiele

- [CSS-Animationen](/de/docs/Web/CSS/CSS_animations)
- [CSS-Basic-User-Interface](/de/docs/Web/CSS/CSS_basic_user_interface)
- [CSS-Filtereffekte](/de/docs/Web/CSS/CSS_filter_effects)
- [CSS-Scroll-Snap](/de/docs/Web/CSS/CSS_scroll_snap)

#### Vorlagen

- [CSS-Modul Einstiegsseite Vorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/CSS_module_landing_page_template)

### CSS-Feature-Referenzseite

Eine **CSS-Referenzseite** listet alle verfügbaren Syntaxen für ein CSS-Feature wie einen Selektor oder eine Eigenschaft auf und erklärt den Zweck und die Verwendung des Features. Sie bietet auch Beispiele, Browser-Kompatibilitätsinformationen und andere wichtige Daten.

#### Beispiele

- [`background-color` Eigenschaft](/de/docs/Web/CSS/background-color)
- [`:hover` Pseudoklasse](/de/docs/Web/CSS/:hover)
- [`@media` At-Regel](/de/docs/Web/CSS/@media)

#### Vorlagen

- [CSS-Eigenschaft Seitenvorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/CSS_property_page_template)
- [CSS-Selektor Seitenvorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/CSS_selector_page_template)
- [CSS-Funktionsseiten Vorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/CSS_function_page_template)

### HTTP-Header Referenzseite

Eine **HTTP-Header Referenzseite** listet alle verfügbaren Direktiven auf, die ein HTTP-Header enthalten kann, und erklärt den Zweck und die Verwendung des Headers. Sie bietet auch Beispiele, Browser-Kompatibilitätsinformationen und andere wichtige Erklärungen.

#### Beispiel

- [Cache-Control Header](/de/docs/Web/HTTP/Reference/Headers/Cache-Control)

#### Vorlagen

- [HTTP-Header Seitenvorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/HTTP_header_page_template)

### Konzeptionelle Seite

Eine **konzeptionelle Seite** ist eine _Leitfaden_-Seite, die etwas erklärt oder lehrt. Allgemein gesagt, wenn eine Seite hauptsächlich aus Prosa besteht und nicht in einen anderen Seitentyp fällt, ist sie wahrscheinlich eine konzeptionelle Seite. Eine ausführliche Diskussion zu einem Thema kann sich über mehrere konzeptionelle Seiten erstrecken und mithilfe der [Next](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/previous_menu_next.rs) und [Previous](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/previous_menu_next.rs) Makros verlinkt werden.

#### Beispiele

- [Verwendung der WebVR API](/de/docs/Web/API/WebVR_API/Using_the_WebVR_API)
- [Visualisierungen mit der Web Audio API](/de/docs/Web/API/Web_Audio_API/Visualizations_with_Web_Audio_API)
- [Konflikte handhaben](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)

### Glossar Seite

Eine **Glossarseite** enthält eine kurze Erklärung eines Begriffs, Themas oder Konzepts. Der erste Absatz sollte eine einfache, eigenständige Beschreibung des Begriffs sein, nicht mehr als ein oder zwei Sätze. Dies kann durch Links zu weiterführenden Informationen im Abschnitt **Siehe auch** ergänzt werden. Wenn die Seite mehr als eine Bildschirmseite lang wird, ist sie zu lang und sollte in eine konzeptionelle Seite umgewandelt werden. Siehe [Anleitung zur Erstellung und Referenzierung eines Eintrags im Glossar](/de/docs/MDN/Writing_guidelines/Howto/Write_a_new_entry_in_the_glossary) für weitere Details.

#### Beispiele

- {{Glossary("DOM", "DOM")}}
- {{Glossary("Exception", "Exception")}}
- {{Glossary("Hyperlink", "Hyperlink")}}

#### Vorlagen

- [Glossarseiten Vorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/Glossary_page_template)

### Einstiegsseite

Eine **Einstiegsseite** dient als eine Art Menü für ihre Unterseiten und ist deshalb hauptsächlich eine _Navigationsseite_. Ein Einstiegsseitenlayout wird typischerweise für die Stammseite eines Seitengruppenbaums zu einem bestimmten Thema verwendet. Sie öffnet mit einer kurzen Zusammenfassung des Themas, dann präsentiert sie eine strukturierte Liste von Links zu ihren Unterseiten und optional weiteres Material, das für den Leser nützlich sein könnte.

Die Liste der Unterseiten kann automatisch mithilfe der [`SubpagesWithSummaries`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/subpages_with_summaries.rs) Vorlage generiert werden. In komplexeren Fällen muss die Liste jedoch möglicherweise von Hand erstellt (und gepflegt) werden.

### Lernen Sie Webentwicklung Seiten

Der [Lernen Sie Webentwicklung](/de/docs/Learn_web_development) Abschnitt von MDN richtet sich speziell an Personen, die die grundlegenden Grundlagen der Webentwicklung lernen, und erfordert daher einen anderen Ansatz als der Rest der MDN-Inhalte. Sie finden weitere Richtlinien unter [Lernen Sie Webentwicklung Schreibrichtlinien](/de/docs/MDN/Writing_guidelines/Learning_content).

Es gibt nur einige wenige Arten von Seiten innerhalb des Lernen Sie Webentwicklung Abschnitts:

- **Modulgruppen Einstiegsseite**, zum Beispiel [Kernlernmodule](/de/docs/Learn_web_development/Core)
  - : Diese enthalten einen Einführungsabschnitt, einen Abschnitt, der die Voraussetzungen beschreibt, die Sie haben sollten, bevor Sie die Modulgruppe beginnen, und eine Liste der Module, gefolgt von einer optionalen Liste von "Siehe auch"-Links.
- **Modul Einstiegsseite**, zum Beispiel [Inhalte mit HTML strukturieren](/de/docs/Learn_web_development/Core/Structuring_content)
  - : Diese enthalten einen Einführungsabschnitt, einen Abschnitt, der die Voraussetzungen beschreibt, die Sie haben sollten, bevor Sie das Modul beginnen, und eine Liste der enthaltenen Tutorials, gefolgt von einer optionalen Liste von "Zusätzlichen Tutorials", die verwandt sind, aber nicht zentraler Bestandteil des Lernweges sind, und eine optionale Liste von "Siehe auch"-Links.
- **Tutorialseite**, zum Beispiel [Grundlegende HTML-Syntax](/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax)
  - : Die Struktur eines Lern-Tutorials ist nicht strikt, aber es muss eine praxisnahe Lernerfahrung bieten (siehe [Lernen Sie Webentwicklung Schreibrichtlinien > Ansatz](/de/docs/MDN/Writing_guidelines/Learning_content#approach)), es muss eine Reihe von "Voraussetzungen" und "Lernzielen" auflisten, und der Inhalt muss die angegebenen Lernziele lehren.

### Beispiele

- [HTML](/de/docs/Web/HTML)
- [CSS](/de/docs/Web/CSS)
- [Web APIs](/de/docs/Web/API)
- [JavaScript](/de/docs/Web/JavaScript)
- [Lernen Sie Webentwicklung](/de/docs/Learn_web_development)
- [Community-Ressourcen](/de/docs/MDN/Community)

## Siehe auch

- [Seitenelemente](/de/docs/MDN/Writing_guidelines/Writing_style_guide#page_components)
- [Erstellen von Code-Beispielen in Markdown](/de/docs/MDN/Writing_guidelines/Code_style_guide)
