---
title: Seitentypen
slug: MDN/Writing_guidelines/Page_structures/Page_types
l10n:
  sourceCommit: ce83b64f1132a29a19471e46bfffced755f775eb
---

{{MDNSidebar}}

Es gibt eine Reihe von Seitentypen, die auf MDN wiederholt verwendet werden. Dieser Artikel beschreibt diese Seitentypen, ihren Zweck und gibt Beispiele für jeden sowie Vorlagen, die beim Erstellen einer neuen Seite verwendet werden können.

Auf MDN gibt es drei Hauptkategorien von Seitentypen, obwohl einige Seitentypen in mehr als eine Kategorie fallen.

- **Referenzseiten** beschreiben die Details von etwas und sind entsprechend der Struktur des beschriebenen Elements organisiert.
- **Leitfaden-Seiten** beschreiben, wie man etwas tut oder etwas verwendet, und sind basierend auf den Zielen des Lesers organisiert.
- **Navigationsseiten** existieren hauptsächlich, um Links zu anderen Seiten bereitzustellen, meist zu verwandten Themen.

## Erstellen einer neuen Seite

Um neue Seiten auf MDN zu erstellen, müssen Sie GitHub verwenden — sehen Sie sich unseren [Content-Repository](https://github.com/mdn/content) Abschnitt über [Hinzufügen eines neuen Dokuments](https://github.com/mdn/content/blob/main/CONTRIBUTING.md#adding-a-new-document) für weitere Anweisungen an.

## Anleitung zur Verwendung der Vorlagen

Wenn Sie eine neue Seite erstellen, können Sie sicherstellen, dass Sie die richtige Seitenstruktur/Inhalte verwendet haben, indem Sie sich auf eine unserer Seitenvorlagen beziehen — siehe die folgenden Abschnitte. Sie können den genauen Quellcode jeder Vorlage (falls Sie ihn kopieren möchten) über den "Source on **GitHub**" Link am Ende jeder Vorlage finden. Diese Seitenvorlagen ergeben als veröffentlichte Seiten nicht viel Sinn, aber wenn Sie sich ihren Quellcode ansehen, werden Sie feststellen, dass sie viele hilfreiche Kommentare, Platzhalter und Hinweise enthalten, die erläutern, wie die fehlenden Informationen ausgefüllt und Ihre Seite erstellt werden.

Am Anfang jeder Vorlage finden Sie einen Abschnitt mit dem Titel _Vor der Veröffentlichung entfernen_ — dieser enthält Informationen dazu, wie der Seitentitel, der Slug, das Seitenleistenmenü und die Tags ausgefüllt werden (z.B. Informationen, die im Hauptteil des Artikels nicht erscheinen). Sie müssen diesen Abschnitt löschen, nachdem Sie die Anweisungen darin befolgt haben, bevor die Seite als fertig betrachtet werden kann.

## Alte Seitenlayouts

Manchmal stoßen Sie auf Referenzseiten im alten Stil, die sich deutlich von den hier präsentierten Vorlagen unterscheiden. Beispielsweise hatten Seiten zu alten Schnittstellen alle Member-Details der Schnittstellen auf einer einzigen Seite, und einzelne Methoden-/Eigenschafts-/Konstruktor-/Ereignishörer-Seiten existierten nicht.

Wenn Sie auf ein altes Seitenset stoßen, wären wir Ihnen dankbar, wenn Sie sie auf den neuen Stil aktualisieren würden! Wir verstehen jedoch, dass dies viel Arbeit sein könnte. Wenn die zu aktualisierenden Informationen nicht zu umfangreich sind und Sie etwas freie Zeit haben, versuchen Sie sie gerne auf den neuen Stil zu aktualisieren.

Wenn die Arbeit umfangreich ist, sollten Sie einige Faktoren bei der Priorisierung der Arbeit berücksichtigen:

- Wie veraltet sind die Informationen?
- Wie minderwertig sind die Informationen?
- Wie beliebt ist das Feature? Wie gefragt sind die Informationen?

Wenn Sie ein Team zusammenstellen möchten, um an einem Update zu arbeiten, oder wenn Sie nur einen Inhalt melden oder besprechen möchten, der ein Update benötigt, zögern Sie nicht, ein [Inhaltsproblem einzureichen](https://github.com/mdn/content/issues) oder [uns um Hilfe zu bitten](/de/docs/MDN/Community/Communication_channels).

## Der page-type Frontmatter-Schlüssel

Wir haben einen Frontmatter-Schlüssel `page-type` definiert, um den Typ von MDN-Seiten klar zu identifizieren. Die unten verlinkten Vorlagen geben an, welche `page-type` Werte Sie für jeden Seitentyp festlegen sollten.

Für die vollständige Liste der Seitentypen siehe [Der page-type Frontmatter-Schlüssel](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/Page_type_key).

## Seitenvorlagen

Unten finden Sie Beispiele der verschiedenen Seiten, die Sie auf MDN finden, zusammen mit Vorlagen, die verwendet werden können, um neuen Inhalt basierend auf dem zu präsentierenden Inhaltstyp zu erstellen, einschließlich der folgenden Seiten:

- [API Landingpages](#api_landingpage)
- [API-Referenzseite](#api-referenzseite)
- [API-Referenzunterseite](#api-referenzunterseite)
- [Konzeptionelle Seiten](#konzeptionelle_seite)
- [CSS-Feature-Referenz](#css-feature-referenzseite)
- [CSS-Modul-Landingpage](#css-modul-landingpage)
- [Glossar-Eintrag](#glossarseite)
- [HTML-Element](#html-element-referenzseite)
- [HTTP-Header](#http-header-referenzseite)
- [Landingpage](#landingpage)
- [SVG-Element](#svg-element-referenzseite)

Jeder Abschnitt enthält Links zu Live-Beispielseiten für diesen Seitentyp.

### API Landingpage

Eine **[API](/de/docs/Glossary/API) Landingpage** bietet eine Übersicht darüber, was eine bestimmte API tut, sowie Links zur Dokumentation für jede der Schnittstellen, globalen Objekte, Funktionen usw., die von der API angeboten werden. Sie verlinkt nicht direkt auf spezifische Methoden oder Eigenschaften innerhalb der Klassen der API, außer im Kontext des Übersichtstextes. Sie ist in erster Linie eine _Navigations-Seite_, fungiert aber auch als eine Schnellübersicht _Referenz-Seite_ für die API.

Es gibt einige Fälle, in denen mehrere APIs existieren, die zwar eigenständig und in ihren eigenen Spezifikationen definiert sind, aber nahe verwandt und daher sinnvoll mit einer einzigen API Landingpage abgedeckt sind. Zum Beispiel deckt die [Generic Sensor API](https://www.w3.org/TR/generic-sensor/) allgemeine Sensoranliegen ab, aber spezifischere Anliegen werden in anderen APIs wie [Ambient Light Sensor](https://www.w3.org/TR/ambient-light/), [Motion Sensor](https://www.w3.org/TR/motion-sensors/) usw. behandelt. In solchen Fällen sind viele der grundlegenden Konzepte dieselben, sodass es keinen Sinn macht, diese über mehrere Landingpages hinweg zu wiederholen. In einem solchen Fall wäre es in Bezug auf Wiederholung und Auffindbarkeit sinnvoller, sie alle unter einer einzigen "Websensoren" Landingpage abzudecken.

#### Beispiel

- [WebVR API](/de/docs/Web/API/WebVR_API)

#### Vorlagen

- [API Landingpage-Vorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_landing_page_template)

### API-Referenzseite

> [!NOTE]
> Auch bekannt als eine _Schnittstellen-Landingpage_.

Eine **API-Referenzseite** listet alle Methoden, Eigenschaften, Ereignisse usw. auf, die Mitglieder einer bestimmten Schnittstelle oder Klasse sind. Sie bietet eine Übersicht darüber, was die Klasse oder Schnittstelle tut oder wofür sie verwendet wird, und gibt Links zur Dokumentation für jedes dieser Mitglieder. Sie ist granularer als eine API Landingpage, die typischerweise auf mehrere API-Referenzseiten verlinkt.

#### Beispiel

- [Request-Schnittstelle](/de/docs/Web/API/Request) der [Fetch API](/de/docs/Web/API/Fetch_API).

#### Vorlagen

- [API-Referenzseite-Vorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_reference_page_template)

### API-Referenzunterseite

Eine **API-Referenzunterseite** ist eine Unterseite einer API-Referenzseite. Sie dokumentiert ein einzelnes Interface-Mitglied im Detail.

#### Beispiele

- [`count()` Methode](/de/docs/Web/API/IDBIndex/count) der [IDBIndex](/de/docs/Web/API/IDBIndex) Schnittstelle (Teil der [IndexedDB API](/de/docs/Web/API/IndexedDB_API))
- [Eigenschaft capabilities](/de/docs/Web/API/VRDisplay/capabilities) der [VRDisplay](/de/docs/Web/API/VRDisplay) Schnittstelle (Teil der [WebVR API](/de/docs/Web/API/WebVR_API))
- [Request() Konstruktor](/de/docs/Web/API/Request/Request) der [Request](/de/docs/Web/API/Request) Schnittstelle (Teil der [Fetch API](/de/docs/Web/API/Fetch_API))
- [vrdisplaypresentchange Ereignis](/de/docs/Web/API/Window/vrdisplaypresentchange_event) (Teil der [WebVR API](/de/docs/Web/API/WebVR_API), hängt von der [Window](/de/docs/Web/API/Window) Schnittstelle ab)

#### Vorlagen

- [API-Methodenunterseite-Vorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_method_subpage_template)
- [API-Eigenschaftsunterseite-Vorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_property_subpage_template)
- [API-Konstruktorunterseite-Vorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_constructor_subpage_template)
- [API-Ereignisunterseite-Vorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_event_subpage_template)

### HTML-Element-Referenzseite

Eine **HTML-Referenzseite** listet alle Attribute auf, die für ein HTML-Element verfügbar sind, erklärt den Zweck und die Verwendung des Elements und bietet Beispiele, Browser-Kompatibilitätsinformationen und andere wichtige Daten.

#### Beispiel

- `<video>` Element](/de/docs/Web/HTML/Element/video)

#### Vorlagen

- [HTML-Element-Seitenschablone](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/HTML_element_page_template)

### SVG-Element-Referenzseite

Eine **SVG-Referenzseite** listet alle Attribute auf, die für ein SVG-Element verfügbar sind, erklärt den Zweck und die Verwendung des Elements und bietet Beispiele, Browser-Kompatibilitätsinformationen und andere wichtige Daten.

#### Beispiel

- [\<g> Element](/de/docs/Web/SVG/Element/g)

#### Vorlagen

- [SVG-Element-Seitenschablone](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/SVG_element_page_template)

### CSS-Modul-Landingpage

Jedes **[CSS](/de/docs/Web/CSS) Modul** stellt eine CSS-Spezifikation dar, die Unterstützung für bestimmte Features und Implementierungen in CSS bietet. Zum Beispiel repräsentiert das [CSS-Boxmodell](/de/docs/Web/CSS/CSS_box_model) Modul die [Spezifikation](/de/docs/Web/CSS/CSS_box_model#specifications), die die Margin- und Padding-Eigenschaften beschreibt, mit denen Sie Abstände in und um eine CSS-Box herum erstellen können.

Eine **CSS-Modul-Landingpage** bietet eine Übersicht über die Features, die das Modul bietet, und listet alle Eigenschaften, Datentypen, CSS-Funktionen usw. auf, die vom Modul angeboten werden. Wenn möglich, bietet die CSS-Modul-Landingpage eine schnelle Demonstration dessen, was mithilfe der Eigenschaften des Moduls erreicht werden kann, durch ein interaktives Beispiel.
Die Modul-Landingpage dient in erster Linie als _Navigations-Seite_, fungiert aber auch als eine Schnellübersicht _Referenz-Seite_ für das Modul.

Einige verwandte Eigenschaften und Features, die in anderen Modulen enthalten sind, aber eng mit der Funktionalität des Moduls, das Sie dokumentieren, verwandt sind, können auch in einem Abschnitt _Verwandte Konzepte_ behandelt werden. Zum Beispiel sind der Datentyp `<easing-function>` und die `prefers-reduced-motion` Medienabfrage nicht im CSS-Animationsmodul enthalten, aber da sie eng mit CSS-Animationen verbunden sind, ist es eine gute Idee, sie im Abschnitt [Verwandte Konzepte](/de/docs/Web/CSS/CSS_animations#related_concepts) der CSS-Animationsmodul-Landingpage hervorzuheben.

#### Beispiele

- [CSS Animationen](/de/docs/Web/CSS/CSS_animations)
- [CSS Grundlegende Benutzeroberfläche](/de/docs/Web/CSS/CSS_basic_user_interface)
- [CSS Filter Effekte](/de/docs/Web/CSS/CSS_filter_effects)
- [CSS Scroll Snap](/de/docs/Web/CSS/CSS_scroll_snap)

#### Vorlagen

- [CSS-Modul-Landingpage-Vorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/CSS_module_landing_page_template)

### CSS-Feature-Referenzseite

Eine **CSS-Referenzseite** listet alle verfügbaren Syntaxen für ein CSS-Feature wie einen Selektor oder eine Eigenschaft auf und erklärt den Zweck und die Verwendung des Features. Sie bietet auch Beispiele, Browser-Kompatibilitätsinformationen und andere wichtige Daten.

#### Beispiele

- [background-color Eigenschaft](/de/docs/Web/CSS/background-color)
- [:hover Pseudo-Klasse](/de/docs/Web/CSS/:hover)
- [@media At-Regel](/de/docs/Web/CSS/@media)

#### Vorlagen

- [CSS-Eigenschaftenseitenvorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/CSS_property_page_template)
- [CSS-Selektorseitenvorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/CSS_selector_page_template)
- [CSS-Funktionsseitenvorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/CSS_function_page_template)

### HTTP-Header-Referenzseite

Eine **HTTP-Header-Referenzseite** listet alle verfügbaren Direktiven auf, die ein HTTP-Header enthalten kann, und erklärt den Zweck und die Verwendung des Headers. Sie bietet auch Beispiele, Browser-Kompatibilitätsinformationen und andere wichtige Erklärungen.

#### Beispiel

- [Cache-Control Header](/de/docs/Web/HTTP/Headers/Cache-Control)

#### Vorlagen

- [HTTP-Header-Seitenschablone](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/HTTP_header_page_template)

### Konzeptionelle Seite

Eine **konzeptionelle Seite** ist eine _Leitfaden-Seite_, die etwas erklärt oder lehrt. Im Allgemeinen, wenn eine Seite hauptsächlich aus Prosa besteht und nicht in einen anderen Seitentyp fällt, ist sie wahrscheinlich eine konzeptionelle Seite. Eine erweiterte Diskussion eines Themas könnte über mehrere konzeptionelle Seiten verteilt sein und mit Hilfe der [Next](https://github.com/mdn/yari/blob/main/kumascript/macros/Next.ejs) und [Previous](https://github.com/mdn/yari/blob/main/kumascript/macros/Previous.ejs) Makros verlinkt sein.

#### Beispiele

- [Verwendung der WebVR API](/de/docs/Web/API/WebVR_API/Using_the_WebVR_API)
- [Visualisierungen mit der Web Audio API](/de/docs/Web/API/Web_Audio_API/Visualizations_with_Web_Audio_API)
- [Kaskadierung und Vererbung in CSS](/de/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance)

### Glossarseite

Eine **Glossarseite** enthält eine kurze Erklärung eines Begriffs, Themas oder Konzepts. Der erste Absatz sollte eine einfache, eigenständige Beschreibung des Begriffs sein, die nicht mehr als ein paar Sätze umfasst. Dies kann durch Links zu weiteren Informationen im **Siehe auch** Abschnitt ergänzt werden. Wenn die Seite länger als eine Bildschirmseite wird, ist sie zu lang und sollte in eine konzeptionelle Seite umgewandelt werden. Weitere Details finden Sie unter [Anleitung zum Schreiben und Referenzieren eines Glossareintrags](/de/docs/MDN/Writing_guidelines/Howto/Write_a_new_entry_in_the_glossary).

#### Beispiele

- [DOM](/de/docs/Glossary/DOM)
- [Ausnahme](/de/docs/Glossary/Exception)
- [Hyperlink](/de/docs/Glossary/Hyperlink)

#### Vorlagen

- [Glossarseitenvorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/Glossary_page_template)

### Landingpage

Eine **Landingpage** dient als Menü, gewissermaßen, für ihre Unterseiten und ist daher in erster Linie eine _Navigations-Seite_. Ein Landingpage-Layout wird typischerweise für die Wurzelseite eines Seitenbaums über ein bestimmtes Thema verwendet. Es beginnt mit einer kurzen Zusammenfassung des Themas, präsentiert dann eine strukturierte Liste von Links zu seinen Unterseiten und gegebenenfalls zusätzliches Material, das für den Leser nützlich sein könnte.

Die Liste der Unterseiten kann automatisch mithilfe der Vorlagen [`SubpagesWithSummaries`](https://github.com/mdn/yari/blob/main/kumascript/macros/SubpagesWithSummaries.ejs) und [`LandingPageListSubpages`](https://github.com/mdn/yari/blob/main/kumascript/macros/LandingPageListSubpages.ejs) generiert werden. In komplexeren Fällen muss die Liste jedoch möglicherweise manuell erstellt (und gepflegt) werden.

### Beispiele

- [HTML](/de/docs/Web/HTML)
- [CSS](/de/docs/Web/CSS)
- [Web-APIs](/de/docs/Web/API)
- [JavaScript](/de/docs/Web/JavaScript)
- [Lernbereich](/de/docs/Learn)
- [Beitrag zu MDN](/de/docs/MDN/Community/Contributing)

## Siehe auch

- [Seitenkomponenten](/de/docs/MDN/Writing_guidelines/Writing_style_guide#page_components)
- [Codebeispiele in Markdown erstellen](/de/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide)
