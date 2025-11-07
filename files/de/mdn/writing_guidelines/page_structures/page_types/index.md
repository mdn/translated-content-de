---
title: Seitentypen
slug: MDN/Writing_guidelines/Page_structures/Page_types
l10n:
  sourceCommit: 0b926fc3e79782401461d389fc9f17d522b39ed3
---

Es gibt eine Reihe von Seitentypen, die auf MDN wiederholt verwendet werden. Dieser Artikel beschreibt diese Seitentypen, ihren Zweck und gibt Beispiele für jeden sowie Vorlagen zur Verwendung beim Erstellen einer neuen Seite.

Es gibt drei Hauptkategorien von Seitentypen auf MDN, obwohl einige Seitentypen in mehr als eine Kategorie fallen.

- **Referenz**-Seiten beschreiben die Details von etwas und sind gemäß der Struktur des beschriebenen Objekts organisiert.
- **Leitfaden**-Seiten beschreiben, wie man etwas tut oder verwendet, und sind basierend auf den Zielen der Leserschaft organisiert.
- **Navigations**-Seiten existieren hauptsächlich, um Links zu anderen Seiten bereitzustellen, in der Regel zu verwandten Themen.

## Erstellen einer neuen Seite

Das Hinzufügen eines neuen Dokuments ist relativ einfach, besonders wenn Sie mit dem Kopieren einer `index.md`-Datei aus einem ähnlichen Thema beginnen können. Es gibt ein paar Dinge, die Sie beachten sollten:

- Dokumente werden in Markdown in einer `index.md`-Datei geschrieben.
- Zum Beispiel, wenn Sie ein neues Dokument für einen HTTP-Header namens `foo` erstellen, erstellen Sie einen neuen Ordner unter `files/en-us/web/http/reference/headers/foo` und legen Sie die Markdown-Datei in diesem Ordner ab (`files/en-us/web/http/reference/headers/foo/index.md`).
- Eine `index.md`-Datei eines Dokuments muss mit einer Kopfdatenstruktur beginnen, die den `title`, `slug` und meistens `page-type` definiert.
  Es kann hilfreich sein, sich auf die Kopfdaten in einem ähnlichen Dokument zu beziehen.

## Anleitung zur Verwendung der Vorlagen

Wenn Sie eine neue Seite erstellen, können Sie sicherstellen, dass Sie die richtige Seitenstruktur/-inhalte verwendet haben, indem Sie auf eine unserer Seitentemplates verweisen — siehe die untenstehenden Abschnitte. Sie finden den genauen Quellcode jeder Vorlage (falls Sie diesen kopieren möchten), indem Sie dem Link "Source on **GitHub**" am Ende jeder Vorlage folgen. Diese Seitentemplates ergeben als veröffentlichte Seiten wenig Sinn, aber wenn Sie sich ihren Quellcode ansehen, werden Sie sehen, dass sie viele hilfreiche Kommentare, Platzhalter und Hinweise enthalten, die erläutern, wie Sie fehlende Informationen ausfüllen und Ihre Seite erstellen können.

Am Anfang jeder Vorlage finden Sie einen Abschnitt mit dem Titel _Remove before publishing_ — dieser enthält Informationen darüber, wie der Seitentitel, der Slug, das Seitenleistenmenü und Tags ausgefüllt werden müssen (z. B. Informationen, die nicht tatsächlich im Körper des Artikels erscheinen). Sie müssen diesen Abschnitt löschen, nachdem Sie die Anweisungen darin befolgt haben, bevor die Seite als fertig betrachtet werden kann.

## Alten Seitenlayouts

Manchmal stoßen Sie auf Referenzseiten im alten Stil, die deutlich anders aussehen als die hier präsentierten Vorlagen. Beispielsweise hatten alte Schnittstellenseiten alle Mitglieddetails der Schnittstellen auf einer einzigen Seite, und einzelne Methode-/Eigenschafts-/Konstruktor-/Eventlistener-Seiten existierten nicht.

Wenn Sie auf eine Serie von Seiten im alten Stil stoßen, würden wir es lieben, wenn Sie diese auf den neuen Stil aktualisieren! Wir verstehen jedoch, dass das eine Menge Arbeit sein könnte. Wenn die zu aktualisierenden Informationen nicht zu umfangreich sind und Sie etwas freie Zeit haben, versuchen Sie auf jeden Fall, sie auf den neuen Stil zu aktualisieren.

Wenn die Arbeit umfangreicher ist, sollten Sie einige Faktoren berücksichtigen, wenn Sie die Arbeit priorisieren:

- Wie veraltet sind die Informationen?
- Wie schlecht ist die Qualität der Informationen?
- Wie populär ist das Feature? Wie gefragt sind die Informationen?

Wenn Sie ein Team zusammenstellen möchten, um an einem Update zu arbeiten, oder wenn Sie nur etwas Inhalt melden oder diskutieren möchten, der ein Update benötigt, [reichen Sie gerne ein Inhaltsproblem ein](https://github.com/mdn/content/issues) oder [fragen Sie uns um Hilfe](/de/docs/MDN/Community/Communication_channels).

## Der page-type Kopfdaten-Schlüssel

Wir haben einen Kopfdaten-Schlüssel `page-type` definiert, um den Typ der MDN-Seiten klar zu identifizieren. Die unten verlinkten Vorlagen geben an, welche `page-type`-Werte Sie für jeden Seitentyp festlegen sollten.

Für die vollständige Liste der Seitentypen, siehe [Der page-type Kopfdaten-Schlüssel](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/Page_type_key).

## Seitentemplates

Im Folgenden finden Sie Beispiele für die verschiedenen Seiten, die Sie auf MDN finden, zusammen mit Vorlagen, die verwendet werden können, um neue Inhalte basierend auf dem Typ der präsentierten Inhalte zu erstellen, einschließlich folgender Seiten:

- [API Landing Page](#api_landing_page)
- [API Referenzseite](#api_referenzseite)
- [API Referenzunterseite](#api_referenzunterseite)
- [HTML-Elementreferenzseite](#html-elementreferenzseite)
- [HTML-Attributsreferenzseite](#html-attributsreferenzseite)
- [SVG-Elementreferenzseite](#svg-elementreferenzseite)
- [CSS-Modullandingseite](#css-modullandingseite)
- [CSS-Feature-Referenzseite](#css-feature-referenzseite)
- [HTTP-Header-Referenzseite](#http-header-referenzseite)
- [ARIA-Referenzseite](#aria-referenzseite)
- [Konzeptuelle Seite](#konzeptuelle_seite)
- [Glossarseite](#glossarseite)
- [Landingseite](#landingseite)
- [Lernen der Webentwicklung Seiten](#lernen_der_webentwicklung_seiten)

Jeder Abschnitt enthält Links zu Live-Beispielseiten für diesen Seitentyp.

### API Landing Page

Eine **{{Glossary("API", "API")}} Landing Page** bietet einen Überblick darüber, was eine bestimmte API tut, sowie Links zur Dokumentation für jede der Schnittstellen, Globals, Funktionen usw., die von der API angeboten werden. Sie verlinkt nicht direkt auf spezifische Methoden oder Eigenschaften innerhalb der API-Klassen, außer im Kontext des Übersichtstextes. Sie ist in erster Linie eine _Navigations_-Seite, dient aber auch als übersichtliche _Referenz_-Seite für die API.

Es gibt einige Fälle, in denen mehrere APIs existieren, die eigenständig und in ihren eigenen Spezifikationen definiert sind, aber eng verwandt sind und daher mit einer einzigen API Landing Page abgedeckt werden könnten. Zum Beispiel deckt die [Generic Sensor API](https://w3c.github.io/sensors/) allgemeine Sensorthemen ab, aber spezifischere Themen werden in anderen APIs wie [Ambient Light Sensor](https://w3c.github.io/ambient-light/), [Motion Sensor](https://w3c.github.io/motion-sensors/) usw. behandelt. In solchen Fällen sind viele der grundlegenden Konzepte gleich, daher macht es keinen Sinn, diese über mehrere Landing Pages zu wiederholen. In einem solchen Fall wäre es sinnvoller, sie unter einer einzigen Landing Page "Websensoren" abzudecken.

#### Beispiel

- [WebVR API](/de/docs/Web/API/WebVR_API)

#### Vorlagen

- [API Landing Page Vorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_landing_page_template)

### API Referenzseite

> [!NOTE]
> Auch bekannt als _Interface Landing Page_.

Eine **API Referenzseite** listet alle Methoden, Eigenschaften, Events usw. auf, die Mitglieder einer bestimmten Schnittstelle oder Klasse sind. Sie bietet einen Überblick darüber, was die Klasse oder Schnittstelle tut oder wofür sie verwendet wird, und gibt Links zur Dokumentation für jedes dieser Mitglieder. Sie ist detaillierter als eine API Landing Page, die typischerweise zu mehreren API-Referenzseiten verlinkt.

#### Beispiel

- [Request Schnittstelle](/de/docs/Web/API/Request) der [Fetch API](/de/docs/Web/API/Fetch_API).

#### Vorlagen

- [API Referenzseitenvorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_reference_page_template)

### API Referenzunterseite

Eine **API Referenzunterseite** ist ein Kind einer API Referenzseite. Sie dokumentiert ein einzelnes Schnittstellenmitglied im Detail.

#### Beispiele

- [`count()` Methode](/de/docs/Web/API/IDBIndex/count) der [IDBIndex](/de/docs/Web/API/IDBIndex) Schnittstelle (Teil der [IndexedDB API](/de/docs/Web/API/IndexedDB_API))
- [capabilities Eigenschaft](/de/docs/Web/API/VRDisplay/capabilities) der [VRDisplay](/de/docs/Web/API/VRDisplay) Schnittstelle (Teil der [WebVR API](/de/docs/Web/API/WebVR_API))
- [Request() Konstruktor](/de/docs/Web/API/Request/Request) der [Request](/de/docs/Web/API/Request) Schnittstelle (Teil der [Fetch API](/de/docs/Web/API/Fetch_API))
- [vrdisplaypresentchange Ereignis](/de/docs/Web/API/Window/vrdisplaypresentchange_event) (Teil der [WebVR API](/de/docs/Web/API/WebVR_API), hängt von der [Window](/de/docs/Web/API/Window)) Schnittstelle ab

#### Vorlagen

- [API Methodensubseitenvorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_method_subpage_template)
- [API Eigenschaftensubseitenvorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_property_subpage_template)
- [API Konstruktorsubseitenvorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_constructor_subpage_template)
- [API Eventsubseitenvorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_event_subpage_template)

### HTML-Elementreferenzseite

Eine **HTML Referenzseite** listet alle Attribute, die auf einem HTML-Element verfügbar sind, erklärt den Zweck und die Verwendungsweise des Elements und bietet Beispiele, Browser-Kompatibilitätsinformationen und andere wichtige Daten.

#### Beispiel

- [`<video>` Element](/de/docs/Web/HTML/Reference/Elements/video)

#### Vorlagen

- [HTML Elementseitenvorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/HTML_element_page_template)

### HTML-Attributsreferenzseite

Eine HTML-Attributseite listet alle Werte auf, die auf einem HTML-Attribut existieren, erklärt den Zweck und die Anwendungsfälle des Attributs, mit Beispielen, Browser-Kompatibilitätsinformationen und anderen wichtigen Daten.

> [!NOTE]
> Elementspezifische Attribute (z. B. `placeholder` für `<input>`) benötigen keine eigene Seite, wenn die Attribute ausreichend auf der Referenzseite des übergeordneten Elements behandelt werden können (z. B. sollte das `placeholder`-Attribut auf der Seite des `<input>`-Elements behandelt werden, nicht als eigenständige Seite).

#### Beispiel

- [`class` Attribut](/de/docs/Web/HTML/Reference/Global_attributes/class)

#### Vorlagen

- [HTML Attributsseitenvorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/HTML_attribute_page_template)

### SVG-Elementreferenzseite

Eine **SVG Referenzseite** listet alle Attribute auf, die auf einem SVG-Element verfügbar sind, erklärt den Zweck und die Verwendungsweise des Elements und bietet Beispiele, Browser-Kompatibilitätsinformationen und andere wichtige Daten.

#### Beispiel

- [\<g> Element](/de/docs/Web/SVG/Reference/Element/g)

#### Vorlagen

- [SVG Elementseitenvorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/SVG_element_page_template)

### CSS-Modullandingseite

Jedes **[CSS](/de/docs/Web/CSS) Modul** repräsentiert eine CSS-Spezifikation, die Unterstützung für bestimmte Funktionen und Implementierungen in CSS bietet. Zum Beispiel repräsentiert das [CSS-Kastenmodell](/de/docs/Web/CSS/CSS_box_model) Modul die [Spezifikation](/de/docs/Web/CSS/CSS_box_model#specifications), die die Margin- und Padding-Eigenschaften beschreibt, die es Ihnen ermöglichen, Abstände in und um einen CSS-Kasten zu schaffen.

Eine **CSS-Modullandingseite** bietet einen Überblick über die Funktionen, die das Modul bereitstellt, und listet alle Eigenschaften, Datentypen, CSS-Funktionen usw. auf, die das Modul anbietet. Wenn möglich, bietet die CSS-Modullandingseite eine schnelle Demonstration dessen, was mit den Eigenschaften des Moduls erreicht werden kann, durch ein interaktives Beispiel. Die Modullandingseite dient in erster Linie als _Navigations_-Seite, fungiert aber auch als übersichtliche _Referenz_-Seite für das Modul.

Einige verwandte Eigenschaften und Features, die in andere Module gehören, aber eng mit der Funktionalität des Moduls, das Sie dokumentieren, verwandt sind, können auch in einem Abschnitt _Verwandte Konzepte_ behandelt werden. Zum Beispiel sind der `<easing-function>` Datentyp und die `prefers-reduced-motion` Media Query nicht im CSS-Animationsmodul abgedeckt, aber da sie eng mit CSS-Animationen verwandt sind, ist es eine gute Idee, sie im Abschnitt [Verwandte Konzepte](/de/docs/Web/CSS/CSS_animations#related_concepts) der CSS-Animationsmodullandingseite hervorzuheben.

#### Beispiele

- [CSS-Animationen](/de/docs/Web/CSS/CSS_animations)
- [CSS-Basisschnittstelle für Benutzer](/de/docs/Web/CSS/CSS_basic_user_interface)
- [CSS Filtereffekte](/de/docs/Web/CSS/CSS_filter_effects)
- [CSS-Scrollsnap](/de/docs/Web/CSS/CSS_scroll_snap)

#### Vorlagen

- [CSS-Modullandingseitenvorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/CSS_module_landing_page_template)

### CSS-Feature-Referenzseite

Eine **CSS Referenzseite** listet die gesamte verfügbare Syntax für ein CSS-Feature wie einen Selektor oder eine Eigenschaft auf und erklärt den Zweck und die Verwendung des Features. Es bietet auch Beispiele, Browser-Kompatibilitätsinformationen und andere wichtige Daten.

#### Beispiele

- [`background-color` Eigenschaft](/de/docs/Web/CSS/Reference/Properties/background-color)
- [`:hover` Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/:hover)
- [`@media` At-Regel](/de/docs/Web/CSS/Reference/At-rules/@media)

#### Vorlagen

- [CSS Eigenschaftsseitenvorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/CSS_property_page_template)
- [CSS Selektorseitenvorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/CSS_selector_page_template)
- [CSS Funktionsseitenvorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/CSS_function_page_template)

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
- [`application` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/application_role)

#### Vorlagen

- [ARIA-Seitenvorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/ARIA_Page_Template)

### Konzeptuelle Seite

Eine **Konzeptseite** ist eine _Leitfaden_-Seite, die etwas erklärt oder lehrt. Im Allgemeinen, wenn eine Seite hauptsächlich aus Prosa besteht und nicht in einen anderen Seitentyp fällt, ist es wahrscheinlich eine Konzeptseite. Eine ausführliche Diskussion zu einem Thema könnte sich über mehrere Konzeptseiten erstrecken und mit [Next](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/previous_menu_next.rs) und [Previous](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/previous_menu_next.rs) Makros verknüpft werden.

#### Beispiele

- [Verwendung der WebVR API](/de/docs/Web/API/WebVR_API/Using_the_WebVR_API)
- [Visualisierungen mit der Web Audio API](/de/docs/Web/API/Web_Audio_API/Visualizations_with_Web_Audio_API)
- [Umgang mit Konflikten](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)

### Glossarseite

Eine **Glossarseite** enthält eine kurze Erklärung eines Begriffs, Themas oder Konzepts. Der erste Absatz sollte eine einfache, eigenständige Beschreibung des Begriffs sein, nicht mehr als ein paar Sätze. Dies kann durch Links zu weiteren Informationen im **See also**-Abschnitt gefolgt werden. Wenn die Seite mehr als eine Bildschirmseite oder so lang wird, ist sie zu lang und sollte in eine Konzeptseite umgewandelt werden. Siehe zur detaillierten Erklärung, wie Sie einen neuen Glossareintrag verfassen und referenzieren: [Anleitung, wie man und verweisen auf einen Eintrag im Glossar schreibt](/de/docs/MDN/Writing_guidelines/Howto/Write_a_new_entry_in_the_glossary).

#### Beispiele

- {{Glossary("DOM", "DOM")}}
- {{Glossary("Exception", "Exception")}}
- {{Glossary("Hyperlink", "Hyperlink")}}

#### Vorlagen

- [Glossarseitenvorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/Glossary_page_template)

### Landingseite

Eine **Landingseite** dient als eine Art Menü für ihre Unterseiten und ist daher in erster Linie eine _Navigations_-Seite. Ein Landingseitenlayout wird typischerweise für die Stammseite eines Baums von Seiten zu einem bestimmten Thema verwendet. Sie beginnt mit einer kurzen Zusammenfassung des Themas und präsentiert dann eine strukturierte Liste von Links zu ihren Unterseiten und optional weiteres Material, das für den Leser nützlich sein kann.

Die Liste der Unterseiten kann automatisch mit der [`SubpagesWithSummaries`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/subpages_with_summaries.rs) Vorlage generiert werden. In komplexeren Fällen muss die Liste jedoch manuell erstellt (und gepflegt) werden.

### Lernen der Webentwicklung Seiten

Der [Lernen der Webentwicklung](/de/docs/Learn_web_development) Abschnitt von MDN richtet sich speziell an Personen, die die grundlegenden Grundlagen der Webentwicklung lernen, und erfordert daher einen anderen Ansatz als der Rest des MDN-Inhalts. Weitere Richtlinien finden Sie unter [Lernen der Webentwicklung Schreibrichtlinien](/de/docs/MDN/Writing_guidelines/Learning_content).

Es gibt nur wenige Seitentypen im Abschnitt "Lernen der Webentwicklung":

- **Modulgruppen-Landingseite**, zum Beispiel [Kern-Lernmodule](/de/docs/Learn_web_development/Core)
  - : Diese enthalten einen Einleitungsabsatz, einen Abschnitt, der die Voraussetzungen beschreibt, die Sie vor dem Start der Modulgruppe haben sollten, und eine Liste der Module, gefolgt von einer optionalen Liste von "Siehe auch"-Links.
- **Modul-Landingseite**, zum Beispiel [Inhalte mit HTML strukturieren](/de/docs/Learn_web_development/Core/Structuring_content)
  - : Diese enthalten einen Einleitungsabsatz, einen Abschnitt, der die Voraussetzungen beschreibt, die Sie vor dem Start des Moduls haben sollten, und eine Liste der enthaltenen Tutorials, gefolgt von einer optionalen Liste von "Zusätzlichen Tutorials", die verwandt, aber nicht Teil des zentralen Lernpfades sind, und einer optionalen Liste von "Siehe auch"-Links.
- **Tutorialseite**, zum Beispiel [Grundlegende HTML-Syntax](/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax)
  - : Die Struktur eines Lern-Tutorials ist nicht strikt, aber es muss eine praxisorientierte Lernerfahrung bieten (siehe [Lernen der Webentwicklung Schreibrichtlinien > Ansatz](/de/docs/MDN/Writing_guidelines/Learning_content#approach)), es muss eine Reihe von "Voraussetzungen" und "Lernzielen" am Anfang haben, und der Inhalt muss die angegebenen Lernziele lehren.

### Beispiele

- [HTML](/de/docs/Web/HTML)
- [CSS](/de/docs/Web/CSS)
- [Web APIs](/de/docs/Web/API)
- [JavaScript](/de/docs/Web/JavaScript)
- [Lernen der Webentwicklung](/de/docs/Learn_web_development)
- [Community-Ressourcen](/de/docs/MDN/Community)

## Siehe auch

- [Seitenelemente](/de/docs/MDN/Writing_guidelines/Writing_style_guide#page_components)
- [Erstellen von Codebeispielen in Markdown](/de/docs/MDN/Writing_guidelines/Code_style_guide)
