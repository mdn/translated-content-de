---
title: Seitentypen
slug: MDN/Writing_guidelines/Page_structures/Page_types
l10n:
  sourceCommit: 40af149a5cf9cbc99a3d22f30e8cc83fe64b6636
---

Es gibt eine Reihe von Seitentypen, die auf MDN wiederholt verwendet werden.
Dieser Artikel beschreibt diese Seitentypen, ihren Zweck und gibt Beispiele für jeden Typ sowie Vorlagen, die bei der Erstellung einer neuen Seite verwendet werden können.

Auf MDN gibt es drei Hauptkategorien von Seitentypen, obwohl einige Seitentypen in mehr als eine Kategorie fallen.

- **Referenzseiten** beschreiben die Details von etwas und sind entsprechend der Struktur des beschriebenen Objekts organisiert.
- **Leitfaden**-Seiten beschreiben, wie man etwas tut oder verwendet, und sind basierend auf den Zielen des Lesers organisiert.
- **Navigationsseiten** existieren in erster Linie, um Links zu anderen Seiten bereitzustellen, üblicherweise zu verwandten Themen.

## Eine neue Seite erstellen

Um neue Seiten auf MDN zu erstellen, müssen Sie GitHub verwenden — schauen Sie sich unseren [Inhalts-Repo](https://github.com/mdn/content) Abschnitt über das [Hinzufügen eines neuen Dokuments](https://github.com/mdn/content/blob/main/CONTRIBUTING.md#adding-a-new-document) für weitere Anweisungen an.

## Wie man die Vorlagen verwendet

Beim Erstellen einer neuen Seite können Sie sicherstellen, dass Sie die richtige Seitenstruktur/-inhalte verwendet haben, indem Sie auf eine unserer Seitenschablonen zurückgreifen — siehe die untenstehenden Abschnitte.
Sie finden den genauen Quellcode jeder Vorlage (falls Sie ihn kopieren möchten), indem Sie dem Link "Source auf **GitHub**" am Ende jeder Vorlage folgen.
Diese Seitenschablonen machen als veröffentlichte Seiten wenig Sinn, aber wenn Sie ihren Quellcode betrachten, werden Sie sehen, dass sie viele hilfreiche Kommentare, Platzhalter und Hinweise enthalten, die beschreiben, wie man die fehlenden Informationen ausfüllt und Ihre Seite erstellt.

Am Anfang jeder Vorlage finden Sie einen Abschnitt mit dem Titel _Vor der Veröffentlichung entfernen_ — dieser enthält Informationen darüber, wie man den Seitentitel, den Slug, das Seitenleistenmenü und die Tags ausfüllt (z. B. Informationen, die nicht tatsächlich im Hauptteil des Artikels erscheinen).
Sie müssen diesen Abschnitt löschen, nachdem Sie die Anweisungen darin befolgt haben, bevor die Seite als fertig betrachtet werden kann.

## Alte Seitenlayouts

Manchmal stoßen Sie auf Referenzseiten im alten Stil, die sich merklich von den hier vorgestellten Vorlagen unterscheiden.
Zum Beispiel hatten alte Schnittstellenseiten alle Details zu den Schnittstellenmitgliedern auf einer einzigen Seite, und einzelne Seiten zu Methoden/Eigenschaften/Konstruktoren/Event-Listern existierten nicht.

Wenn Sie auf eine alte Seitengruppe stoßen, würden wir uns freuen, wenn Sie sie auf den neuen Stil aktualisieren!
Wir verstehen jedoch, dass dies eine große Menge an Arbeit sein könnte.
Wenn die Informationen nicht zu umfangreich sind und Sie etwas Zeit haben, versuchen Sie gern, diese auf den neuen Stil zu aktualisieren.

Wenn die Arbeit umfangreicher ist, sollten Sie einige Faktoren bei der Priorisierung der Arbeit berücksichtigen:

- Wie veraltet sind die Informationen?
- Wie niedrig ist die Qualität der Informationen?
- Wie populär ist die Funktion? Wie sehr werden die Informationen gesucht?

Wenn Sie ein Team zusammenstellen möchten, um an einem Update zu arbeiten, oder wenn Sie einfach nur einige Inhalte melden oder diskutieren möchten, die ein Update benötigen, zögern Sie nicht, ein [Inhaltsproblem zu melden](https://github.com/mdn/content/issues) oder [uns um Hilfe zu bitten](/de/docs/MDN/Community/Communication_channels).

## Der Seitentyp-Schlüssel im Frontmatter

Wir haben einen Frontmatter-Schlüssel `page-type` definiert, um den Typ der MDN-Seiten eindeutig zu identifizieren. Die unten verlinkten Vorlagen zeigen an, welche `page-type`-Werte Sie für jeden Seitentyp festlegen sollten.

Für die vollständige Liste der Seitentypen siehe [Der Seitentyp-Schlüssel im Frontmatter](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/Page_type_key).

## Seitenschablonen

Im Folgenden finden Sie Beispiele für die verschiedenen Seiten, die Sie auf MDN finden werden, zusammen mit Vorlagen, die verwendet werden können, um neuen Inhalt basierend auf dem Typ des zu präsentierenden Inhalts zu erstellen, einschließlich der folgenden Seiten:

- [API-Startseite](#api-startseite)
- [API-Referenzseite](#api-referenzseite)
- [Unterseite der API-Referenz](#unterseite_der_api-referenz)
- [Konzeptuelle Seiten](#konzeptuelle_seite)
- [CSS-Feature-Referenz](#css-feature-referenzseite)
- [CSS-Modul-Startseite](#css-modul-startseite)
- [Glossareintrag](#glossarseite)
- [HTML-Element](#html-element-referenzseite)
- [HTML-Attribut](#html-attribut-referenzseite)
- [HTTP-Header](#http-header-referenzseite)
- [Startseite](#startseite)
- [SVG-Element](#svg-element-referenzseite)
- [Seiten zum Erlernen der Webentwicklung](#seiten_zum_erlernen_der_webentwicklung)

Jeder Abschnitt enthält Links zu Live-Beispielseiten für diesen Seitentyp.

### API-Startseite

Eine **{{Glossary("API", "API")}}-Startseite** bietet einen Überblick darüber, was eine bestimmte API tut, sowie Links zur Dokumentation für jede der Schnittstellen, Globals, Funktionen usw., die von der API angeboten werden.
Sie verlinkt nicht direkt zu spezifischen Methoden oder Eigenschaften innerhalb der Klassen der API, außer im Kontext des Übersichtstextes.
Sie ist in erster Linie eine \_Navigations_Seite, dient aber auch als Überblicks-\_Referenz_seite für die API.

Es gibt einige Fälle, in denen mehrere APIs existieren, die eigenständig und in eigenen Spezifikationen definiert sind, aber eng verwandt sind und daher sinnvollerweise auf einer einzigen API-Startseite behandelt werden könnten.
Zum Beispiel deckt die [Generic Sensor API](https://www.w3.org/TR/generic-sensor/) allgemeine Sensorthemen ab, aber spezifischere Themen werden in anderen APIs wie [Ambient Light Sensor](https://www.w3.org/TR/ambient-light/), [Motion Sensor](https://www.w3.org/TR/motion-sensors/), usw. behandelt.
In solchen Fällen sind viele der übergeordneten Konzepte die gleichen, sodass es keinen Sinn macht, diese auf mehreren Startseiten zu wiederholen.
In einem solchen Fall wäre es sinnvoller im Hinblick auf Wiederholungen und Auffindbarkeit, sie alle unter einer einzigen "Websensoren"-Startseite zu behandeln.

#### Beispiel

- [WebVR API](/de/docs/Web/API/WebVR_API)

#### Vorlagen

- [API-Startseitenvorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_landing_page_template)

### API-Referenzseite

> [!NOTE]
> Auch bekannt als _Schnittstellen-Startseite_.

Eine **API-Referenzseite** listet alle Methoden, Eigenschaften, Ereignisse usw. auf, die Mitglieder einer bestimmten Schnittstelle oder Klasse sind.
Sie bietet einen Überblick darüber, was die Klasse oder Schnittstelle tut oder wofür sie verwendet wird und gibt Links zur Dokumentation für jedes dieser Mitglieder an.
Sie ist detaillierter als eine API-Startseite, die typischerweise zu mehreren API-Referenzseiten verlinkt.

#### Beispiel

- [Request-Schnittstelle](/de/docs/Web/API/Request) der [Fetch API](/de/docs/Web/API/Fetch_API).

#### Vorlagen

- [API-Referenzseitenvorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_reference_page_template)

### Unterseite der API-Referenz

Eine **Unterseite der API-Referenz** ist ein Kind einer API-Referenzseite.
Sie dokumentiert ein einzelnes Mitglied einer Schnittstelle im Detail.

#### Beispiele

- [`count()` Methode](/de/docs/Web/API/IDBIndex/count) der [IDBIndex](/de/docs/Web/API/IDBIndex) Schnittstelle (Teil der [IndexedDB API](/de/docs/Web/API/IndexedDB_API))
- [capabilities Eigenschaft](/de/docs/Web/API/VRDisplay/capabilities) der [VRDisplay](/de/docs/Web/API/VRDisplay) Schnittstelle (Teil der [WebVR API](/de/docs/Web/API/WebVR_API))
- [Request() Konstruktor](/de/docs/Web/API/Request/Request) der [Request](/de/docs/Web/API/Request) Schnittstelle (Teil der [Fetch API](/de/docs/Web/API/Fetch_API))
- [vrdisplaypresentchange Ereignis](/de/docs/Web/API/Window/vrdisplaypresentchange_event) (Teil der [WebVR API](/de/docs/Web/API/WebVR_API), gehört zur [Window](/de/docs/Web/API/Window) Schnittstelle)

#### Vorlagen

- [API-Methode-Unterseite Vorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_method_subpage_template)
- [API-Eigenschaft-Unterseite Vorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_property_subpage_template)
- [API-Konstruktor-Unterseite Vorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_constructor_subpage_template)
- [API-Ereignis-Unterseite Vorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_event_subpage_template)

### HTML-Element-Referenzseite

Eine **HTML-Referenzseite** listet alle Attribute auf, die für ein HTML-Element verfügbar sind, erklärt den Zweck und die Nutzung des Elements und bietet Beispiele, Browser-Kompatibilitätsinformationen und andere wichtige Daten.

#### Beispiel

- [`<video>` Element](/de/docs/Web/HTML/Reference/Elements/video)

#### Vorlagen

- [HTML-Element-Seiten Vorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/HTML_element_page_template)

### HTML-Attribut-Referenzseite

Eine HTML-Attributseite listet alle Werte auf, die für ein HTML-Attribut existieren, erklärt den Zweck und die Anwendungsfälle des Attributs und bietet Beispiele, Browser-Kompatibilitätsinformationen und andere wichtige Daten.

> [!NOTE]
> Element-spezifische Attribute (z. B. `placeholder` für `<input>`) erfordern keine separate Seite, wenn die Attribute ausreichend innerhalb der Referenzseite des übergeordneten Elements abgedeckt werden können (z. B. sollte das `placeholder`-Attribut auf der `<input>`-Elementseite abgedeckt werden, nicht als eigenständige Seite).

#### Beispiel

- [`class` Attribut](/de/docs/Web/HTML/Reference/Global_attributes/class)

#### Vorlagen

- [HTML-Attribut-Seiten Vorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/HTML_attribute_page_template)

### SVG-Element-Referenzseite

Eine **SVG-Referenzseite** listet alle Attribute auf, die für ein SVG-Element verfügbar sind, erklärt den Zweck und die Nutzung des Elements und bietet Beispiele, Browser-Kompatibilitätsinformationen und andere wichtige Daten.

#### Beispiel

- [\<g> Element](/de/docs/Web/SVG/Reference/Element/g)

#### Vorlagen

- [SVG-Element-Seiten Vorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/SVG_element_page_template)

### CSS-Modul-Startseite

Jedes **[CSS](/de/docs/Web/CSS) Modul** repräsentiert eine CSS-Spezifikation, die Unterstützung für bestimmte Funktionen und Implementierungen in CSS bietet. Zum Beispiel repräsentiert das [CSS-Boxmodell](/de/docs/Web/CSS/CSS_box_model) Modul die [Spezifikation](/de/docs/Web/CSS/CSS_box_model#specifications), die die Margin- und Padding-Eigenschaften beschreibt, mit denen Sie Abstände in und um eine CSS-Box erstellen können.

Eine **CSS-Modul-Startseite** bietet einen Überblick über die Funktionen, die das Modul bietet, und listet alle Eigenschaften, Datentypen, CSS-Funktionen und so weiter auf, die das Modul bietet. Wenn möglich, bietet die CSS-Modul-Startseite eine schnelle Demonstration dessen, was mit den Eigenschaften des Moduls durch ein interaktives Beispiel erreicht werden kann.
Die Modul-Startseite dient in erster Linie als \_Navigations_Seite, aber auch als Überblicks-\_Referenz_seite für das Modul.

Einige verwandte Eigenschaften und Funktionen, die zu anderen Modulen gehören, die jedoch eng mit der vom Dokumentierten Modul angebotenen Funktionalität verwandt sind, können auch in einem Abschnitt _Verwandte Konzepte_ behandelt werden.
Zum Beispiel sind der `<easing-function>` Datentyp und die `prefers-reduced-motion` Medienabfrage nicht im CSS-Animationsmodul enthalten, aber da sie eng mit CSS-Animationen verwandt sind, ist es eine gute Idee, sie im [Verwandte Konzepte](/de/docs/Web/CSS/CSS_animations#related_concepts) Abschnitt der CSS-Animations-Modul-Startseite hervorzuheben.

#### Beispiele

- [CSS-Animationen](/de/docs/Web/CSS/CSS_animations)
- [CSS Basic User Interface](/de/docs/Web/CSS/CSS_basic_user_interface)
- [CSS-Filtereffekte](/de/docs/Web/CSS/CSS_filter_effects)
- [CSS Scroll Snap](/de/docs/Web/CSS/CSS_scroll_snap)

#### Vorlagen

- [CSS-Modul-Startseiten Vorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/CSS_module_landing_page_template)

### CSS-Feature-Referenzseite

Eine **CSS-Referenzseite** listet alle verfügbaren Syntaxen für ein CSS-Feature wie einen Selektor oder eine Eigenschaft auf und erklärt den Zweck und die Nutzung des Features. Sie bietet auch Beispiele, Browser-Kompatibilitätsinformationen und andere wichtige Daten.

#### Beispiele

- [`background-color` Eigenschaft](/de/docs/Web/CSS/background-color)
- [`:hover` Pseudoklasse](/de/docs/Web/CSS/:hover)
- [`@media` Regel](/de/docs/Web/CSS/@media)

#### Vorlagen

- [CSS-Eigenschaftsseite Vorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/CSS_property_page_template)
- [CSS-Selektorseite Vorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/CSS_selector_page_template)
- [CSS-Funktionsseite Vorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/CSS_function_page_template)

### HTTP-Header-Referenzseite

Eine **HTTP-Header-Referenzseite** listet alle verfügbaren Direktiven auf, die ein HTTP-Header enthalten kann, und erklärt den Zweck und die Nutzung des Headers.
Sie bietet auch Beispiele, Browser-Kompatibilitätsinformationen und andere wichtige Erklärungen.

#### Beispiel

- [Cache-Control Header](/de/docs/Web/HTTP/Reference/Headers/Cache-Control)

#### Vorlagen

- [HTTP-Header-Seiten Vorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/HTTP_header_page_template)

### Konzeptuelle Seite

Eine **konzeptuelle Seite** ist eine _Leitfaden_-Seite, die etwas erklärt oder lehrt.
In der Regel, wenn eine Seite hauptsächlich aus Prosa besteht und nicht in eine andere Seitentypkategorie fällt, handelt es sich wahrscheinlich um eine konzeptuelle Seite.
Eine ausführliche Diskussion über ein Thema könnte sich über mehrere konzeptuelle Seiten erstrecken und mithilfe von [Next](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/previous_menu_next.rs) und [Previous](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/previous_menu_next.rs) Makros miteinander verlinkt sein.

#### Beispiele

- [Verwendung der WebVR API](/de/docs/Web/API/WebVR_API/Using_the_WebVR_API)
- [Visualisierungen mit Web Audio API](/de/docs/Web/API/Web_Audio_API/Visualizations_with_Web_Audio_API)
- [Konflikte behandeln](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)

### Glossarseite

Eine **Glossarseite** enthält eine kurze Erklärung eines Begriffs, Themas oder Konzeptes.
Der erste Absatz sollte eine einfache, in sich geschlossene Beschreibung des Begriffs sein, die nicht mehr als ein paar Sätze umfasst.
Dies kann durch Links zu weiteren Informationen im **Siehe auch**-Abschnitt ergänzt werden.
Wenn die Seite länger als ein Bildschirm voll wird, ist sie zu lang und sollte in eine konzeptuelle Seite umgewandelt werden. Weitere Informationen finden Sie unter [Wie man einen Eintrag im Glossar schreibt und referenziert](/de/docs/MDN/Writing_guidelines/Howto/Write_a_new_entry_in_the_glossary).

#### Beispiele

- {{Glossary("DOM", "DOM")}}
- {{Glossary("Exception", "Ausnahme")}}
- {{Glossary("Hyperlink", "Hyperlink")}}

#### Vorlagen

- [Glossarseite Vorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/Glossary_page_template)

### Startseite

Eine **Startseite** dient als eine Art Menü für ihre Unterseiten und ist daher hauptsächlich eine _Navigationsseite_.
Ein Startseiten-Layout wird typischerweise für die Startseite eines Baums von Seiten über ein bestimmtes Thema verwendet.
Sie beginnt mit einer kurzen Zusammenfassung des Themas und präsentiert dann eine strukturierte Liste von Links zu ihren Unterseiten sowie optional zusätzliches Material, das für den Leser nützlich sein kann.

Die Liste der Unterseiten kann automatisch mithilfe der [`SubpagesWithSummaries`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/subpages_with_summaries.rs) Vorlage generiert werden. In komplexeren Fällen muss die Liste jedoch manuell erstellt (und gepflegt) werden.

### Seiten zum Erlernen der Webentwicklung

Der [Lernen Webentwicklung](/de/docs/Learn_web_development) Abschnitt von MDN richtet sich speziell an Personen, die die grundlegenden Grundlagen der Webentwicklung lernen, und erfordert daher einen anderen Ansatz als der Rest des MDN-Inhalts. Weitere Richtlinien finden Sie unter [Richtlinien zum Schreiben über Lernen von Webentwicklung](/de/docs/MDN/Writing_guidelines/Learning_content).

Es gibt nur wenige Seitentypen innerhalb von Lernen Webentwicklung:

- **Modulgruppen-Startseite**, zum Beispiel [Kernlernmodule](/de/docs/Learn_web_development/Core)
  - : Diese enthalten einen Einführungstext, einen Abschnitt, der die Voraussetzungen beschreibt, die Sie vor dem Start der Modulgruppe haben sollten, und eine Liste der Module, gefolgt von einer optionalen Liste von "Siehe auch" Links.
- **Modul-Startseite**, zum Beispiel [Strukturierung von Inhalten mit HTML](/de/docs/Learn_web_development/Core/Structuring_content)
  - : Diese enthalten einen Einführungstext, einen Abschnitt, der die Voraussetzungen beschreibt, die Sie vor dem Start des Moduls haben sollten, und eine Liste der enthaltenen Tutorials, gefolgt von einer optionalen Liste von "Zusätzlichen Tutorials", die verwandt, aber nicht Teil des zentralen Lernwegs sind, und einer optionalen Liste von "Siehe auch"-Links.
- **Tutorialseite**, zum Beispiel [Grundlegende HTML-Syntax](/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax)
  - : Die Struktur eines Lern-Tutorials ist nicht streng festgelegt, aber es muss eine praktische Lernerfahrung bieten (siehe [Richtlinien zum Schreiben über Lernen von Webentwicklung > Ansatz](/de/docs/MDN/Writing_guidelines/Learning_content#approach)), es muss eine Liste von "Voraussetzungen" und "Lernergebnissen" enthalten und der Inhalt muss die angegebenen Lernziele lehren.

### Beispiele

- [HTML](/de/docs/Web/HTML)
- [CSS](/de/docs/Web/CSS)
- [Web-APIs](/de/docs/Web/API)
- [JavaScript](/de/docs/Web/JavaScript)
- [Lernen Webentwicklung](/de/docs/Learn_web_development)
- [Community-Ressourcen](/de/docs/MDN/Community)

## Siehe auch

- [Seitenkomponenten](/de/docs/MDN/Writing_guidelines/Writing_style_guide#page_components)
- [Erstellen von Code-Beispielen in Markdown](/de/docs/MDN/Writing_guidelines/Code_style_guide)
