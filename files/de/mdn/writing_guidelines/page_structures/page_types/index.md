---
title: Seitentypen
slug: MDN/Writing_guidelines/Page_structures/Page_types
l10n:
  sourceCommit: 7819249f906dcfc59a2c4cb702b80a35b7964842
---

Es gibt eine Reihe von Seitentypen, die auf MDN wiederholt verwendet werden. Dieser Artikel beschreibt diese Seitentypen, ihren Zweck und gibt Beispiele sowie Vorlagen, die bei der Erstellung einer neuen Seite verwendet werden können.

Es gibt drei große Kategorien von Seitentypen auf MDN, obwohl einige Seitentypen in mehr als eine Kategorie fallen.

- **Referenzseiten** beschreiben die Details von etwas und sind nach der Struktur des beschriebenen Elements organisiert.
- **Leitfaden**-Seiten beschreiben, wie man etwas tut oder benutzt, und sind basierend auf den Zielen des Lesers organisiert.
- **Navigationsseiten** existieren hauptsächlich, um Links zu anderen Seiten bereitzustellen, normalerweise zu verwandten Themen.

## Erstellen einer neuen Seite

Um neue Seiten auf MDN zu erstellen, müssen Sie GitHub verwenden — sehen Sie sich unseren Abschnitt über [Inhaltstools](https://github.com/mdn/content) zum [Hinzufügen eines neuen Dokuments](https://github.com/mdn/content/blob/main/CONTRIBUTING.md#adding-a-new-document) an, um weitere Anweisungen zu erhalten.

## So verwenden Sie die Vorlagen

Wenn Sie eine neue Seite erstellen, können Sie sicherstellen, dass die richtige Seitenstruktur/-inhalt verwendet wurde, indem Sie sich auf eine unserer Seitenschablonen beziehen — siehe die folgenden Abschnitte unten. Sie können den exakten Quellcode jeder Vorlage (falls Sie ihn kopieren möchten) finden, indem Sie dem Link "Source on **GitHub**" am Ende jeder Vorlage folgen. Diese Seitenschablonen machen als veröffentlichte Seiten nicht viel Sinn, aber wenn Sie ihren Quellcode ansehen, werden Sie feststellen, dass sie viele hilfreiche Kommentare, Platzhalter und Hinweise enthalten, die beschreiben, wie Sie die fehlenden Informationen ausfüllen und Ihre Seite erstellen.

Am Anfang jeder Vorlage finden Sie einen Abschnitt mit dem Titel _Vor dem Veröffentlichen entfernen_ — dieser enthält Informationen dazu, wie Sie den Seitentitel, den Slug, das Seitenleistenmenü und die Tags ausfüllen (z. B. Informationen, die nicht im Artikeltext selbst erscheinen). Dieser Abschnitt muss gelöscht werden, nachdem Sie die Anweisungen darin befolgt haben, bevor die Seite als fertig betrachtet werden kann.

## Alte Seitenlayouts

Manchmal stoßen Sie auf alte Referenzseiten, die sich deutlich von den hier vorgestellten Vorlagen unterscheiden. Beispielsweise hatten alte Schnittstellenseiten alle Mitgliedsdetails der Schnittstelle auf einer einzigen Seite, und einzelne Methoden-/Eigenschafts-/Konstruktor-/Ereignislisterseiten existierten nicht.

Wenn Sie auf eine alte Anzahl von Seiten stoßen, würden wir uns freuen, wenn Sie sie auf den neuen Stil aktualisieren! Wir verstehen jedoch, dass dies eine große Menge Arbeit sein könnte. Wenn die zu aktualisierende Information nicht zu groß ist und Sie etwas Freizeit haben, versuchen Sie es doch, sie im neuen Stil zu aktualisieren.

Wenn die Arbeit bedeutender ist, sollten Sie einige Faktoren berücksichtigen, wenn Sie die Arbeit priorisieren:

- Wie veraltet ist die Information?
- Wie niedrig ist die Qualität der Information?
- Wie populär ist die Funktion? Wie sehr werden die Informationen gesucht?

Wenn Sie ein Team zusammenstellen möchten, um an einem Update zu arbeiten, oder wenn Sie ein Problem melden oder über Inhalte diskutieren möchten, die ein Update benötigen, zögern Sie nicht, ein [Inhaltsproblem zu melden](https://github.com/mdn/content/issues) oder [uns um Hilfe zu bitten](/de/docs/MDN/Community/Communication_channels).

## Der `page-type`-Front-Matter-Schlüssel

Wir haben einen Front-Matter-Schlüssel `page-type` definiert, um den Typ der MDN-Seiten klar zu identifizieren. Die unten verlinkten Vorlagen geben an, welche `page-type`-Werte Sie für jeden Seitentyp festlegen sollten.

Für die vollständige Liste der Seitentypen siehe [Der `page-type` Front-Matter-Schlüssel](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/Page_type_key).

## Seitenschablonen

Unten finden Sie Beispiele der verschiedenen Seiten, die Sie auf MDN finden, zusammen mit Vorlagen, die verwendet werden können, um neue Inhalte basierend auf dem zu präsentierenden Inhaltstyp zu erstellen, einschließlich der folgenden Seiten:

- [API-Startseiten](#api-startseite)
- [API-Referenzseite](#api-referenzseite)
- [API-Referenz-Unterseite](#api-referenz-unterseite)
- [ARIA-Referenz](#aria-referenzseite)
- [Konzeptuelle Seiten](#konzeptuelle_seite)
- [CSS-Funktionsreferenz](#css-funktionsreferenzseite)
- [CSS-Modul-Startseite](#css-modul-startseite)
- [Glossareintrag](#glossarseite)
- [HTML-Element](#html-element-referenzseite)
- [HTML-Attribut](#html-attribut-referenzseite)
- [HTTP-Header](#http-header-referenzseite)
- [Startseite](#startseite)
- [SVG-Element](#svg-element-referenzseite)
- [Web-Entwicklung lernen Seiten](#web-entwicklung_lernen_seiten)

Jede Sektion enthält Links zu Live-Beispielseiten für diesen Seitentyp.

### API-Startseite

Eine **{{Glossary("API", "API")}}-Startseite** bietet einen Überblick darüber, was eine bestimmte API macht, sowie Links zur Dokumentation für jede der Schnittstellen, Globals, Funktionen usw., die von der API bereitgestellt werden. Sie verlinkt nicht direkt zu spezifischen Methoden oder Eigenschaften innerhalb der API-Klassen, außer im Kontext des Überblickstextes. Es handelt sich hauptsächlich um eine _Navigationsseite_, die aber auch als Überblicks-_Referenzseite_ für die API fungiert.

In einigen Fällen existieren mehrere APIs, die eigenständig sind und in ihren eigenen Spezifikationen definiert sind, aber eng verwandt sind und daher sinnvollerweise mit einer einzigen API-Startseite abgedeckt werden können. Zum Beispiel deckt die [Generic Sensor API](https://www.w3.org/TR/generic-sensor/) allgemeine Sensorbelange ab, spezifischere Belange werden jedoch in anderen APIs wie der [Ambient Light Sensor](https://www.w3.org/TR/ambient-light/), [Motion Sensor](https://www.w3.org/TR/motion-sensors/) usw. behandelt. In solchen Fällen sind viele der grundlegenden Konzepte die gleichen, sodass es keinen Sinn ergibt, diese über mehrere Startseiten zu wiederholen. In einem solchen Fall macht es aus Gründen der Wiederholung und Auffindbarkeit mehr Sinn, alles unter einer einzigen "Web-Sensoren"-Startseite abzudecken.

#### Beispiel

- [WebVR API](/de/docs/Web/API/WebVR_API)

#### Vorlagen

- [API-Startseitenvorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_landing_page_template)

### API-Referenzseite

> [!NOTE]
> Auch bekannt als _Interface Landing Page_.

Eine **API-Referenzseite** listet alle Methoden, Eigenschaften, Ereignisse usw. auf, die Mitglieder einer bestimmten Schnittstelle oder Klasse sind. Sie bietet einen Überblick darüber, was die Klasse oder Schnittstelle macht oder wofür sie verwendet wird, und gibt Links zur Dokumentation für jedes dieser Mitglieder. Sie ist granualer als eine API-Startseite, die typischerweise auf mehrere API-Referenzseiten verlinkt.

#### Beispiel

- [Anfrage-Schnittstelle](/de/docs/Web/API/Request) der [Fetch API](/de/docs/Web/API/Fetch_API).

#### Vorlagen

- [API-Referenzseitenvorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_reference_page_template)

### API-Referenz-Unterseite

Eine **API-Referenz-Unterseite** ist ein Kind einer API-Referenzseite. Sie dokumentiert ein einzelnes Schnittstellenmitglied im Detail.

#### Beispiele

- [`count()` Methode](/de/docs/Web/API/IDBIndex/count) der [IDBIndex](/de/docs/Web/API/IDBIndex)-Schnittstelle (Teil der [IndexedDB API](/de/docs/Web/API/IndexedDB_API))
- [capabilities Eigenschaft](/de/docs/Web/API/VRDisplay/capabilities) der [VRDisplay](/de/docs/Web/API/VRDisplay)-Schnittstelle (Teil der [WebVR API](/de/docs/Web/API/WebVR_API))
- [Request() Konstruktor](/de/docs/Web/API/Request/Request) der [Request](/de/docs/Web/API/Request)-Schnittstelle (Teil der [Fetch API](/de/docs/Web/API/Fetch_API))
- [vrdisplaypresentchange Ereignis](/de/docs/Web/API/Window/vrdisplaypresentchange_event) (Teil der [WebVR API](/de/docs/Web/API/WebVR_API), hängt von der [Window](/de/docs/Web/API/Window)-Schnittstelle ab)

#### Vorlagen

- [API-Methode-Unterseitenvorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_method_subpage_template)
- [API-Eigenschaft-Unterseitenvorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_property_subpage_template)
- [API-Konstruktor-Unterseitenvorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_constructor_subpage_template)
- [API-Ereignis-Unterseitenvorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_event_subpage_template)

### HTML-Element-Referenzseite

Eine **HTML-Referenzseite** listet alle Attribute auf, die für ein HTML-Element verfügbar sind, erklärt den Zweck und die Verwendung des Elements und liefert Beispiele, Browser-Kompatibilitätsinformationen und andere wichtige Daten.

#### Beispiel

- [`<video>` Element](/de/docs/Web/HTML/Reference/Elements/video)

#### Vorlagen

- [HTML-Element-Seitenvorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/HTML_element_page_template)

### HTML-Attribut-Referenzseite

Eine HTML-Attributseite listet alle Werte auf, die für ein HTML-Attribut existieren, erklärt den Zweck und die Anwendungsfälle des Attributs, liefert Beispiele, Browser-Kompatibilitätsinformationen und andere wichtige Daten.

> [!NOTE]
> Element-spezifische Attribute (z. B. `placeholder` für `<input>`) erfordern keine separate Seite, wenn die Attribute ausreichend auf der Referenzseite des übergeordneten Elements behandelt werden können (z. B. sollte das `placeholder`-Attribut auf der Seite `<input>` behandelt werden, nicht als eigenständige Seite).

#### Beispiel

- [`class` Attribut](/de/docs/Web/HTML/Reference/Global_attributes/class)

#### Vorlagen

- [HTML-Attribut-Seitenvorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/HTML_attribute_page_template)

### SVG-Element-Referenzseite

Eine **SVG-Referenzseite** listet alle Attribute auf, die für ein SVG-Element verfügbar sind, erklärt den Zweck und die Verwendung des Elements und liefert Beispiele, Browser-Kompatibilitätsinformationen und andere wichtige Daten.

#### Beispiel

- [\<g> Element](/de/docs/Web/SVG/Reference/Element/g)

#### Vorlagen

- [SVG-Element-Seitenvorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/SVG_element_page_template)

### CSS-Modul-Startseite

Jedes **[CSS](/de/docs/Web/CSS) Modul** stellt eine CSS-Spezifikation dar, die Unterstützung für bestimmte Funktionen und Implementierungen in CSS bietet. Zum Beispiel repräsentiert das [CSS-Box-Modell](/de/docs/Web/CSS/CSS_box_model)-Modul die [Spezifikation](/de/docs/Web/CSS/CSS_box_model#specifications), die die Margin- und Padding-Eigenschaften beschreibt, die es Ihnen ermöglichen, Abstände in und um ein CSS-Box zu erstellen.

Eine **CSS-Modul-Startseite** bietet einen Überblick über die Funktionen, die das Modul bietet, und listet alle von dem Modul angebotenen Eigenschaften, Datentypen, CSS-Funktionen usw. auf. Wenn möglich, bietet die CSS-Modul-Startseite eine schnelle Demonstration dessen, was mit den Eigenschaften des Moduls erreicht werden kann, durch ein interaktives Beispiel. Die Modul-Startseite dient hauptsächlich als _Navigationsseite_, fungiert aber auch als Übersicht-_Referenzseite_ für das Modul.

Einige verwandte Eigenschaften und Funktionen, die zu anderen Modulen gehören, aber eng mit der im zu dokumentierenden Modul angebotenen Funktionalität verbunden sind, können auch in einem Abschnitt _Verwandte Konzepte_ abgedeckt werden. Zum Beispiel werden der `<easing-function>`-Datentyp und die `prefers-reduced-motion`-Media-Query nicht im CSS-Animationsmodul abgedeckt, aber da sie eng mit CSS-Animationen verbunden sind, ist es eine gute Idee, sie im [Verwandte Konzepte](/de/docs/Web/CSS/CSS_animations#related_concepts)-Abschnitt der CSS-Animationsmodul-Startseite hervorzuheben.

#### Beispiele

- [CSS-Animationen](/de/docs/Web/CSS/CSS_animations)
- [CSS-Einfaches-Benutzeroberfläche](/de/docs/Web/CSS/CSS_basic_user_interface)
- [CSS-Filtereffekte](/de/docs/Web/CSS/CSS_filter_effects)
- [CSS-Scrollen-Einrasten](/de/docs/Web/CSS/CSS_scroll_snap)

#### Vorlagen

- [CSS-Modul-Startseitenvorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/CSS_module_landing_page_template)

### CSS-Funktionsreferenzseite

Eine **CSS-Referenzseite** listet die gesamte verfügbare Syntax für eine CSS-Funktion wie einen Selektor oder eine Eigenschaft auf und erklärt den Zweck und die Verwendung dieser Funktion. Sie bietet auch Beispiele, Browser-Kompatibilitätsinformationen und andere wichtige Daten.

#### Beispiele

- [`background-color` Eigenschaft](/de/docs/Web/CSS/background-color)
- [`:hover` Pseudoklasse](/de/docs/Web/CSS/:hover)
- [`@media` At-Regel](/de/docs/Web/CSS/@media)

#### Vorlagen

- [CSS-Eigenschaft-Seitenvorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/CSS_property_page_template)
- [CSS-Selektor-Seitenvorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/CSS_selector_page_template)
- [CSS-Funktionsseitenvorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/CSS_function_page_template)

### HTTP-Header-Referenzseite

Eine **HTTP-Header-Referenzseite** listet alle verfügbaren Direktiven auf, die ein HTTP-Header enthalten kann, und erklärt den Zweck und die Verwendung des Headers. Sie bietet auch Beispiele, Browser-Kompatibilitätsinformationen und andere wichtige Erklärungen.

#### Beispiel

- [Cache-Control Header](/de/docs/Web/HTTP/Reference/Headers/Cache-Control)

#### Vorlagen

- [HTTP-Header-Seitenvorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/HTTP_header_page_template)

### ARIA-Referenzseite

Eine **ARIA-Referenzseite** beschreibt eine [Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles) oder ein [Attribut](/de/docs/Web/Accessibility/ARIA/Reference/Attributes), das Möglichkeiten definiert, um Webinhalte und Webanwendungen für Menschen mit Behinderungen zugänglicher zu machen.

#### Beispiele

- [`aria-busy` Attribut](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-busy)
- [`Anwendung` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/application_role)

#### Vorlagen

- [ARIA-Seitenvorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/ARIA_Page_Template)

### Konzeptuelle Seite

Eine **konzeptuelle Seite** ist eine _Leitfaden_-Seite, die etwas erklärt oder lehrt. Im Allgemeinen, wenn eine Seite hauptsächlich aus Prosa besteht und nicht in einen anderen Seitentyp fällt, handelt es sich wahrscheinlich um eine konzeptuelle Seite. Eine erweiterte Diskussion eines Themas könnte über mehrere konzeptuelle Seiten verteilt sein und mit [Nächste](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/previous_menu_next.rs) und [Vorherige](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/previous_menu_next.rs) Makros verlinkt werden.

#### Beispiele

- [Verwendung der WebVR-API](/de/docs/Web/API/WebVR_API/Using_the_WebVR_API)
- [Visualisierungen mit der Web Audio API](/de/docs/Web/API/Web_Audio_API/Visualizations_with_Web_Audio_API)
- [Konflikte Handhaben](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)

### Glossarseite

Eine **Glossarseite** enthält eine kurze Erklärung eines Begriffs, Themas oder Konzepts. Der erste Absatz sollte eine einfache, in sich geschlossene Beschreibung des Begriffs sein, nicht mehr als ein paar Sätze. Dies kann durch Links zu weiteren Informationen im Abschnitt **Siehe auch** gefolgt werden. Wenn die Seite mehr als eine Bildschirmfüllung hat, ist sie zu lang und sollte in eine konzeptuelle Seite umgewandelt werden. Siehe [Anleitung zum Schreiben und Verweisen auf einen Eintrag im Glossar](/de/docs/MDN/Writing_guidelines/Howto/Write_a_new_entry_in_the_glossary) für mehr Details.

#### Beispiele

- {{Glossary("DOM", "DOM")}}
- {{Glossary("Exception", "Ausnahme")}}
- {{Glossary("Hyperlink", "Hyperlink")}}

#### Vorlagen

- [Glossar-Seitenvorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/Glossary_page_template)

### Startseite

Eine **Startseite** dient als eine Art Menü für ihre Unterseiten und ist daher hauptsächlich eine _Navigationsseite_. Ein Startseitenlayout wird typischerweise für die Hauptseite eines Baums von Seiten über ein bestimmtes Thema verwendet. Es beginnt mit einer kurzen Zusammenfassung des Themas und präsentiert dann eine strukturierte Liste von Links zu seinen Unterseiten und optional zusätzliches Material, das für den Leser nützlich sein könnte.

Die Liste der Unterseiten kann automatisch unter Verwendung der [`SubpagesWithSummaries`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/subpages_with_summaries.rs) Vorlage generiert werden. In komplexeren Fällen muss die Liste jedoch möglicherweise von Hand erstellt (und gepflegt) werden.

### Web-Entwicklung lernen Seiten

Der Abschnitt [Web-Entwicklung lernen](/de/docs/Learn_web_development) von MDN richtet sich speziell an Personen, die die grundlegenden Grundlagen der Webentwicklung lernen, und erfordert daher einen anderen Ansatz als der Rest der Inhalte von MDN. Weitere Richtlinien finden Sie in den [Schreibrichtlinien für das Lernen der Webentwicklung](/de/docs/MDN/Writing_guidelines/Learning_content).

Es gibt nur wenige Arten von Seiten innerhalb von Lernen der Webentwicklung:

- **Modulgruppen-Startseite**, zum Beispiel [Grundlegende Lernmodule](/de/docs/Learn_web_development/Core)
  - : Diese enthalten einen Einführungsabschnitt, einen Abschnitt, der die Voraussetzungen beschreibt, die Sie haben sollten, bevor Sie mit der Modulgruppe beginnen, und eine Liste der Module, gefolgt von einer optionalen Liste von "Siehe auch"-Links.
- **Modul-Startseite**, zum Beispiel [Strukturierung von Inhalten mit HTML](/de/docs/Learn_web_development/Core/Structuring_content)
  - : Diese enthalten einen Einführungsabschnitt, einen Abschnitt, der die Voraussetzungen beschreibt, die Sie haben sollten, bevor Sie mit dem Modul beginnen, und eine Liste der enthaltenen Tutorials, gefolgt von einer optionalen Liste von "Zusätzlich Tutorials", die verwandt, aber nicht Teil des zentralen Lernpfads sind, und einer optionalen Liste von "Siehe auch"-Links.
- **Tutorialseite**, zum Beispiel [Grundlegende HTML-Syntax](/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax)
  - : Der Aufbau eines Lerntutorials ist nicht strikt, aber es muss eine praktische Lernerfahrung bieten (siehe [Schreibrichtlinien für das Lernen der Webentwicklung > Ansatz](/de/docs/MDN/Writing_guidelines/Learning_content#approach)), es muss eine Liste von "Voraussetzungen" und "Lernziele" am Anfang enthalten, und der Inhalt muss die angegebenen Lernziele lehren.

### Beispiele

- [HTML](/de/docs/Web/HTML)
- [CSS](/de/docs/Web/CSS)
- [Web-APIs](/de/docs/Web/API)
- [JavaScript](/de/docs/Web/JavaScript)
- [Web-Entwicklung lernen](/de/docs/Learn_web_development)
- [Community-Ressourcen](/de/docs/MDN/Community)

## Siehe auch

- [Seitenkomponenten](/de/docs/MDN/Writing_guidelines/Writing_style_guide#page_components)
- [Erstellen von Codebeispielen in Markdown](/de/docs/MDN/Writing_guidelines/Code_style_guide)
