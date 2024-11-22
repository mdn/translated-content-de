---
title: Seitentypen
slug: MDN/Writing_guidelines/Page_structures/Page_types
l10n:
  sourceCommit: b692821c494fd3a25dd883b6fe14998fa2621f7b
---

{{MDNSidebar}}

Es gibt eine Vielzahl von Seitentypen, die auf MDN wiederholt verwendet werden. Dieser Artikel beschreibt diese Seitentypen, ihren Zweck und gibt Beispiele für jeden und Vorlagen, die bei der Erstellung einer neuen Seite verwendet werden können.

Es gibt drei Hauptkategorien von Seitentypen auf MDN, obwohl einige Seitentypen in mehr als eine Kategorie fallen können.

- **Referenz**-Seiten beschreiben die Details von etwas und sind gemäß der Struktur des beschriebenen Gegenstands organisiert.
- **Leitfaden**-Seiten beschreiben, wie man etwas tut oder benutzt, und sind basierend auf den Zielen des Lesers organisiert.
- **Navigations**-Seiten existieren hauptsächlich, um Links zu anderen Seiten, üblicherweise zu verwandten Themen, bereitzustellen.

## Erstellen einer neuen Seite

Um neue Seiten auf MDN zu erstellen, müssen Sie GitHub verwenden – schauen Sie sich unseren [Content-Repo](https://github.com/mdn/content) Bereich über das [Hinzufügen eines neuen Dokuments](https://github.com/mdn/content/blob/main/CONTRIBUTING.md#adding-a-new-document) für weitere Anweisungen an.

## Wie man die Vorlagen verwendet

Beim Erstellen einer neuen Seite können Sie sicherstellen, dass Sie die richtige Seitenstruktur/inhalte verwendet haben, indem Sie sich auf eine unserer Seitentemplates beziehen – siehe die Abschnitte unten. Sie können den exakten Quellcode jeder Vorlage (falls Sie ihn kopieren möchten) finden, indem Sie dem "Source on **GitHub**" Link am Ende jeder Vorlage folgen. Diese Seitentemplates machen als veröffentlichte Seiten nicht viel Sinn, aber wenn Sie ihren Quellcode betrachten, werden Sie sehen, dass sie viele hilfreiche Kommentare, Platzhalter und Hinweise enthalten, wie man die fehlenden Informationen ausfüllt und Ihre Seite erstellt.

Oben in jeder Vorlage finden Sie einen Abschnitt mit dem Titel _Remove before publishing_ – dieser enthält Informationen darüber, wie Sie den Seitentitel, das Slug, das Seitenleistenmenü und Tags ausfüllen (z. B. Informationen, die nicht tatsächlich im Körper des Artikels erscheinen). Sie müssen diesen Abschnitt löschen, nachdem Sie die Anweisungen darin befolgt haben, bevor die Seite als fertig angesehen werden kann.

## Alte Seitendesigns

Manchmal stoßen Sie auf alte Referenzseiten, die sich deutlich von den hier vorgestellten Vorlagen unterscheiden. Beispielsweise hatten alte Schnittstellenseiten alle Informationen zu den Mitgliedern der Schnittstellen auf einer einzigen Seite, und individuelle Methoden-/Eigenschafts-/Konstruktor-/Ereignislistener-Seiten existierten nicht.

Wenn Sie auf eine Gruppe alter Seiten stoßen, würden wir uns freuen, wenn Sie sie auf den neuen Stil aktualisieren! Wir schätzen jedoch, dass dies eine große Menge an Arbeit sein kann. Wenn die zu aktualisierenden Informationen nicht zu umfangreich sind und Sie etwas freie Zeit haben, versuchen Sie bitte, sie auf den neuen Stil zu aktualisieren.

Falls die Arbeit erheblich ist, sollten Sie bei der Priorisierung der Arbeit einige Faktoren berücksichtigen:

- Wie veraltet sind die Informationen?
- Wie niedrig ist die Qualität der Informationen?
- Wie beliebt ist die Funktion? Wie gefragt sind die Informationen?

Wenn Sie ein Team zusammenstellen möchten, um an einem Update zu arbeiten, oder wenn Sie einfach nur einen Inhalt melden oder besprechen möchten, der ein Update benötigt, können Sie gerne ein [Content-Problem melden](https://github.com/mdn/content/issues) oder [uns um Hilfe bitten](/de/docs/MDN/Community/Communication_channels).

## Der "page-type" Front Matter Key

Wir haben einen Front Matter Key `page-type` definiert, um den Typ von MDN-Seiten klar zu identifizieren. Die unten verlinkten Templates geben an, welche `page-type` Werte Sie für jeden Seitentyp festlegen sollten.

Für die vollständige Liste der Seitentypen siehe [Der "page-type" Front Matter Key](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/Page_type_key).

## Seitentemplates

Unten sind Beispiele für die verschiedenen Seiten, die Sie auf MDN finden, zusammen mit Vorlagen, die verwendet werden können, um neue Inhalte basierend auf dem Typ der zu präsentierenden Inhalte zu erstellen, einschließlich der folgenden Seiten:

- [API-Startseite](#api-startseite)
- [API-Referenzseite](#api-referenzseite)
- [API-Referenz-Unterseite](#api-referenz-unterseite)
- [Konzeptionelle Seiten](#konzeptionelle_seite)
- [CSS-Feature-Referenz](#css-feature-referenzseite)
- [CSS-Modul-Startseite](#css-modul-startseite)
- [Glossareintrag](#glossarseite)
- [HTML-Element](#html-element-referenzseite)
- [HTTP-Header](#http-header-referenzseite)
- [Startseite](#startseite)
- [SVG-Element](#svg-element-referenzseite)

Jeder Abschnitt enthält Links zu Live-Beispielseiten für diesen Seitentyp.

### API-Startseite

Eine **{{Glossary("API", "API")}} Startseite** bietet einen Überblick darüber, was eine bestimmte API macht, sowie Links zur Dokumentation für jede der von der API angebotenen Schnittstellen, Globals, Funktionen etc. Sie verlinkt nicht direkt auf spezifische Methoden oder Eigenschaften innerhalb der API-Klassen, außer im Kontext des Überblickstextes. Sie ist primär eine _Navigations_ Seite, dient aber auch als ein schnell einsehbares _Referenz_ Seite für die API.

Es gibt einige Fälle, in denen mehrere APIs existieren, die eigenständig sind und in ihren eigenen Spezifikationen definiert sind, aber eng verwandt sind und daher sinnvollerweise mit einer einzigen API-Startseite abgedeckt werden könnten. Zum Beispiel deckt die [Generic Sensor API](https://www.w3.org/TR/generic-sensor/) allgemeine Sensorbelange ab, aber spezifischere Belange werden in anderen APIs wie der [Ambient Light Sensor](https://www.w3.org/TR/ambient-light/), [Motion Sensor](https://www.w3.org/TR/motion-sensors/) etc. abgedeckt. In solchen Fällen sind viele der grundlegenden Konzepte dieselben, sodass es keinen Sinn macht, diese auf mehreren Startseiten zu wiederholen. In einem solchen Fall wäre es bezüglich Wiederholung und Auffindbarkeit sinnvoller, sie unter einer einzigen "Websensoren" Startseite zu behandeln.

#### Beispiel

- [WebVR API](/de/docs/Web/API/WebVR_API)

#### Vorlagen

- [API-Startseiten-Vorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_landing_page_template)

### API-Referenzseite

> [!NOTE]
> Auch bekannt als _Schnittstellen-Startseite_.

Eine **API-Referenzseite** listet alle Methoden, Eigenschaften, Events usw. auf, die Mitglieder einer bestimmten Schnittstelle oder Klasse sind. Sie bietet einen Überblick darüber, was die Klasse oder Schnittstelle macht oder wofür sie verwendet wird, und gibt Links zur Dokumentation für jedes dieser Mitglieder. Sie ist detaillierter als eine API-Startseite, die typischerweise zu mehreren API-Referenzseiten verlinkt.

#### Beispiel

- [Request-Schnittstelle](/de/docs/Web/API/Request) der [Fetch API](/de/docs/Web/API/Fetch_API).

#### Vorlagen

- [API-Referenzseiten-Vorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_reference_page_template)

### API-Referenz-Unterseite

Eine **API-Referenz-Unterseite** ist ein Kind einer API-Referenzseite. Sie dokumentiert ein einzelnes Mitglied der Schnittstelle im Detail.

#### Beispiele

- [`count()` Methode](/de/docs/Web/API/IDBIndex/count) der [IDBIndex](/de/docs/Web/API/IDBIndex) Schnittstelle (Teil der [IndexedDB API](/de/docs/Web/API/IndexedDB_API))
- [capabilities Eigenschaft](/de/docs/Web/API/VRDisplay/capabilities) der [VRDisplay](/de/docs/Web/API/VRDisplay) Schnittstelle (Teil der [WebVR API](/de/docs/Web/API/WebVR_API))
- [Request() Konstruktor](/de/docs/Web/API/Request/Request) der [Request](/de/docs/Web/API/Request) Schnittstelle (Teil der [Fetch API](/de/docs/Web/API/Fetch_API))
- [vrdisplaypresentchange Event](/de/docs/Web/API/Window/vrdisplaypresentchange_event) (Teil der [WebVR API](/de/docs/Web/API/WebVR_API), hängt von der [Window](/de/docs/Web/API/Window) Schnittstelle ab)

#### Vorlagen

- [API-Methode-Unterseiten-Vorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_method_subpage_template)
- [API-Eigenschaft-Unterseiten-Vorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_property_subpage_template)
- [API-Konstruktor-Unterseiten-Vorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_constructor_subpage_template)
- [API-Event-Unterseiten-Vorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_event_subpage_template)

### HTML-Element-Referenzseite

Eine **HTML-Referenzseite** listet alle Attribute auf, die auf ein HTML-Element angewendet werden können, erklärt den Zweck und die Verwendung des Elements und liefert Beispiele, Browser-Kompatibilitätsinformationen und andere wichtige Daten.

#### Beispiel

- [`<video>` Element](/de/docs/Web/HTML/Element/video)

#### Vorlagen

- [HTML-Element-Seiten-Vorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/HTML_element_page_template)

### SVG-Element-Referenzseite

Eine **SVG-Referenzseite** listet alle Attribute auf, die auf ein SVG-Element angewendet werden können, erklärt den Zweck und die Verwendung des Elements und liefert Beispiele, Browser-Kompatibilitätsinformationen und andere wichtige Daten.

#### Beispiel

- [\<g> Element](/de/docs/Web/SVG/Element/g)

#### Vorlagen

- [SVG-Element-Seiten-Vorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/SVG_element_page_template)

### CSS-Modul-Startseite

Jedes **[CSS](/de/docs/Web/CSS) Modul** repräsentiert eine CSS-Spezifikation, die Unterstützung für bestimmte Funktionen und Implementierungen in CSS bietet. Zum Beispiel repräsentiert das [CSS-Boxmodell](/de/docs/Web/CSS/CSS_box_model) Modul die [Spezifikation](/de/docs/Web/CSS/CSS_box_model#specifications), die die Rand- und Auffüllungseigenschaften beschreibt, mit denen Sie Abstände in und um eine CSS-Box erzeugen können.

Eine **CSS-Modul-Startseite** bietet einen Überblick über die Funktionen, die das Modul bietet, und listet alle Eigenschaften, Datentypen, CSS-Funktionen usw. auf, die das Modul bietet. Wann immer möglich, bietet die CSS-Modul-Startseite eine schnelle Demo dessen, was mit den Eigenschaften des Moduls erreicht werden kann, durch ein interaktives Beispiel. Die Modul-Startseite dient primär als _Navigations_ Seite, aber auch als ein schnell einsehbares _Referenz_ Seite für das Modul.

Einige verwandte Eigenschaften und Funktionen, die zu anderen Modulen gehören, aber eng mit den vom Modul angebotenen Funktionalitäten verwandt sind, können ebenfalls in einem Abschnitt _Verwandte Konzepte_ behandelt werden. Zum Beispiel sind der `<easing-function>` Datentyp und die `prefers-reduced-motion` Media Query nicht im CSS-Animationsmodul abgedeckt, aber da sie eng mit CSS-Animationen verwandt sind, ist es eine gute Idee, sie im Abschnitt [Verwandte Konzepte](/de/docs/Web/CSS/CSS_animations#related_concepts) der CSS-Animationsmodul-Startseite hervorzuheben.

#### Beispiele

- [CSS-Animationen](/de/docs/Web/CSS/CSS_animations)
- [CSS-Benutzeroberflächen-Basics](/de/docs/Web/CSS/CSS_basic_user_interface)
- [CSS-Filtereffekte](/de/docs/Web/CSS/CSS_filter_effects)
- [CSS-Scroll-Snap](/de/docs/Web/CSS/CSS_scroll_snap)

#### Vorlagen

- [CSS-Modul-Startseiten-Vorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/CSS_module_landing_page_template)

### CSS-Feature-Referenzseite

Eine **CSS-Referenzseite** listet alle verfügbaren Syntaxoptionen für ein CSS-Feature wie einen Selektor oder eine Eigenschaft und erklärt den Zweck und die Verwendung des Features. Sie bietet auch Beispiele, Browser-Kompatibilitätsinformationen und andere wichtige Daten.

#### Beispiele

- [`background-color` Eigenschaft](/de/docs/Web/CSS/background-color)
- [`:hover` Pseudo-Klasse](/de/docs/Web/CSS/:hover)
- [`@media` At-Regel](/de/docs/Web/CSS/@media)

#### Vorlagen

- [CSS-Eigenschaftsseiten-Vorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/CSS_property_page_template)
- [CSS-Selektor-Seiten-Vorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/CSS_selector_page_template)
- [CSS-Funktionsseiten-Vorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/CSS_function_page_template)

### HTTP-Header-Referenzseite

Eine **HTTP-Header-Referenzseite** listet alle verfügbaren Direktiven auf, die ein HTTP-Header enthalten kann, und erklärt den Zweck und die Verwendung des Headers. Sie bietet auch Beispiele, Browser-Kompatibilitätsinformationen und andere wichtige Erklärungen.

#### Beispiel

- [Cache-Control Header](/de/docs/Web/HTTP/Headers/Cache-Control)

#### Vorlagen

- [HTTP-Header-Seiten-Vorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/HTTP_header_page_template)

### Konzeptionelle Seite

Eine **Konzeptionelle Seite** ist eine _Leitfaden_ Seite, die etwas erklärt oder lehrt. Im Allgemeinen, wenn eine Seite hauptsächlich aus Prosa besteht und nicht in einen anderen Seitentyp fällt, ist es wahrscheinlich eine konzeptionelle Seite. Eine erweiterte Diskussion eines Themas könnte über mehrere konzeptionelle Seiten verteilt sein und mit den Makros [Next](https://github.com/mdn/yari/blob/main/kumascript/macros/Next.ejs) und [Previous](https://github.com/mdn/yari/blob/main/kumascript/macros/Previous.ejs) verlinkt werden.

#### Beispiele

- [Verwendung der WebVR API](/de/docs/Web/API/WebVR_API/Using_the_WebVR_API)
- [Visualisierungen mit der Web Audio API](/de/docs/Web/API/Web_Audio_API/Visualizations_with_Web_Audio_API)
- [Kaskadierung und Vererbung in CSS](/de/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance)

### Glossarseite

Eine **Glossarseite** enthält eine kurze Erklärung eines Begriffs, Themas oder Konzepts. Der erste Absatz sollte eine einfache, in sich geschlossene Beschreibung des Begriffs sein, die nicht mehr als ein paar Sätze umfasst. Dies kann durch Links zu weiteren Informationen im Abschnitt **Siehe auch** ergänzt werden. Wenn die Seite mehr als einen Bildschirmvoll oder so umfasst, ist sie zu lang und sollte in eine konzeptionelle Seite umgewandelt werden. Siehe [Anleitung zur Erstellung und Verweis auf einen Eintrag im Glossar](/de/docs/MDN/Writing_guidelines/Howto/Write_a_new_entry_in_the_glossary) für weitere Details.

#### Beispiele

- {{Glossary("DOM", "DOM")}}
- {{Glossary("Exception", "Ausnahme")}}
- {{Glossary("Hyperlink", "Hyperlink")}}

#### Vorlagen

- [Glossarseiten-Vorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/Glossary_page_template)

### Startseite

Eine **Startseite** dient als eine Art Menü für ihre Unterseiten und ist daher primär eine _Navigations_ Seite. Ein Startseitenlayout wird typischerweise für die Wurzel einer Baumstruktur von Seiten zu einem bestimmten Thema verwendet. Sie beginnt mit einem kurzen Überblick über das Thema, dann folgt eine strukturierte Liste von Links zu ihren Unterseiten und optional zusätzliches Material, das für den Leser nützlich sein könnte.

Die Liste der Unterseiten kann automatisch mit den Templates [`SubpagesWithSummaries`](https://github.com/mdn/yari/blob/main/kumascript/macros/SubpagesWithSummaries.ejs), und [`LandingPageListSubpages`](https://github.com/mdn/yari/blob/main/kumascript/macros/LandingPageListSubpages.ejs) generiert werden. In komplexeren Fällen muss die Liste jedoch manuell erstellt (und gepflegt!) werden.

### Beispiele

- [HTML](/de/docs/Web/HTML)
- [CSS](/de/docs/Web/CSS)
- [Web-APIs](/de/docs/Web/API)
- [JavaScript](/de/docs/Web/JavaScript)
- [Lernbereich](/de/docs/Learn)
- [Beitragen zu MDN](/de/docs/MDN/Community/Contributing)

## Siehe auch

- [Seitenelemente](/de/docs/MDN/Writing_guidelines/Writing_style_guide#page_components)
- [Code-Beispiele in Markdown erstellen](/de/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide)
