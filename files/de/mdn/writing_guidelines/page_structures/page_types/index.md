---
title: Seitentypen
slug: MDN/Writing_guidelines/Page_structures/Page_types
l10n:
  sourceCommit: d2fb8cdc9422dd2b68ff23f616d70811729f1fbd
---

Es gibt eine Reihe von Seitentypen, die auf MDN wiederholt verwendet werden. Dieser Artikel beschreibt diese Seitentypen, ihren Zweck und gibt Beispiele für jeden Typ sowie Vorlagen zur Erstellung einer neuen Seite.

Es gibt drei große Kategorien von Seitentypen auf MDN, obwohl einige Seitentypen in mehr als eine Kategorie fallen.

- **Referenz**seiten beschreiben die Details von etwas und sind nach der Struktur des beschriebenen Objekts organisiert.
- **Leitfaden**seiten beschreiben, wie man etwas tut oder benutzt und sind basierend auf den Zielen des Lesers organisiert.
- **Navigations**seiten existieren hauptsächlich, um Links zu anderen Seiten bereitzustellen, meist zu verwandten Themen.

## Erstellen einer neuen Seite

Das Hinzufügen eines neuen Dokuments ist relativ einfach, besonders wenn Sie mit dem Kopieren einer `index.md` Datei aus einem ähnlichen Thema beginnen können. Es gibt ein paar Dinge, die Sie beachten sollten:

- Dokumente werden in Markdown in einer `index.md` Datei geschrieben.
- Wenn Sie beispielsweise ein neues Dokument für einen HTTP-Header namens `foo` erstellen, erstellen Sie einen neuen Ordner unter `files/en-us/web/http/reference/headers/foo` und legen Sie die Markdown-Datei in diesem Ordner ab (`files/en-us/web/http/reference/headers/foo/index.md`).
- Eine `index.md` Datei eines Dokuments muss mit einem Front-Matter beginnen, das den `title`, `slug` und meistens `page-type` definiert. Es könnte hilfreich sein, sich auf das Front-Matter in einem ähnlichen Dokument zu beziehen.

## Anleitung zur Verwendung der Vorlagen

Wenn Sie eine neue Seite erstellen, können Sie sicherstellen, dass Sie die richtige Seitenstruktur/Inhalte verwendet haben, indem Sie sich auf eine unserer Seitentemplates beziehen — siehe die untenstehenden Abschnitte. Sie können den genauen Quellcode jeder Vorlage finden (falls Sie ihn kopieren möchten), indem Sie dem Link "Source on **GitHub**" am Ende jeder Vorlage folgen. Diese Seitentemplates machen als veröffentlichte Seiten wenig Sinn, aber wenn Sie ihren Quellcode betrachten, werden Sie feststellen, dass sie viele hilfreiche Kommentare, Platzhalter und Hinweise enthalten, die erläutern, wie die fehlenden Informationen ergänzt und Ihre Seite erstellt werden.

Am Anfang jeder Vorlage finden Sie einen Abschnitt mit dem Titel _Vor der Veröffentlichung entfernen_ — dieser enthält Informationen darüber, wie der Seitentitel, der Slug, das Seitenleistenmenü und die Tags ausgefüllt werden sollen (z. B. Informationen, die eigentlich nicht im Hauptteil des Artikels erscheinen). Sie müssen diesen Abschnitt löschen, nachdem Sie die Anweisungen darin befolgt haben, bevor die Seite als fertig betrachtet werden kann.

## Alte Seitenlayouts

Manchmal stoßen Sie auf alte Referenzseiten, die sich merklich von den hier vorgestellten Vorlagen unterscheiden. Beispielsweise hatten alte Schnittstellenseiten alle Details der Mitglieder der Schnittstelle auf einer einzigen Seite, und es existierten keine separaten Seiten für Methoden/Eigenschaften/Konstruktoren/Ereignislistener.

Wenn Sie auf eine alte Sammlung von Seiten stoßen, würden wir uns freuen, wenn Sie sie in den neuen Stil aktualisieren! Wir wissen jedoch zu schätzen, dass dies eine Menge Arbeit sein könnte. Wenn die zu aktualisierende Information nicht zu umfangreich ist und Sie etwas Freizeit haben, versuchen Sie gerne, sie in den neuen Stil zu aktualisieren.

Wenn die Arbeit umfangreicher ist, sollten Sie einige Faktoren berücksichtigen, wenn Sie die Arbeit priorisieren:

- Wie veraltet sind die Informationen?
- Wie niedrig ist die Qualität der Informationen?
- Wie populär ist das Feature? Wie gefragt sind die Informationen?

Wenn Sie ein Team zusammenstellen möchten, um an einem Update zu arbeiten, oder wenn Sie einfach nur einen Inhalt melden oder diskutieren möchten, der ein Update benötigt, zögern Sie nicht, [ein Inhaltsproblem zu melden](https://github.com/mdn/content/issues) oder [uns um Hilfe zu bitten](/de/docs/MDN/Community/Communication_channels).

## Der Seitentyp-Feldschlüssel im Front Matter

Wir haben einen Front Matter Key `page-type` definiert, um den Typ der MDN-Seiten klar zu kennzeichnen. Die unten verlinkten Vorlagen geben an, welche `page-type` Werte Sie für jeden Seitentyp festlegen sollten.

Für die vollständige Liste der Seitentypen siehe [Der Seitentyp-Feldschlüssel im Front Matter](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/Page_type_key).

## Seitentemplates

Unten finden Sie Beispiele für die verschiedenen Seiten, die Sie auf MDN finden können sowie Vorlagen, die benutzt werden können, um neue Inhalte basierend auf dem Ihnen vorliegenden Typ zu erstellen, einschließlich der folgenden Seiten:

- [API-Landingpage](#api-landingpage)
- [API-Referenzseite](#api-referenzseite)
- [API-Referenzunterseite](#api-referenzunterseite)
- [HTML-Element-Referenzseite](#html-element-referenzseite)
- [HTML-Attribut-Referenzseite](#html-attribut-referenzseite)
- [SVG-Element-Referenzseite](#svg-element-referenzseite)
- [CSS-Modul-Landingpage](#css-modul-landingpage)
- [CSS-Feature-Referenzseite](#css-feature-referenzseite)
- [HTTP-Header-Referenzseite](#http-header-referenzseite)
- [ARIA-Referenzseite](#aria-referenzseite)
- [Konzeptuelle Seite](#konzeptuelle_seite)
- [Glossarseite](#glossarseite)
- [Landingpage](#landingpage)
- [Lerne-Webentwicklung-Seiten](#lerne-webentwicklung-seiten)

Jeder Abschnitt enthält Links zu Live-Beispielseiten für diesen Seitentyp.

### API-Landingpage

Eine **{{Glossary("API", "API")}}-Landingpage** bietet eine Übersicht darüber, was eine bestimmte API tut, sowie Links zur Dokumentation für jede der Schnittstellen, globalen Funktionen usw., die von der API angeboten werden. Sie verlinkt nicht direkt zu spezifischen Methoden oder Eigenschaften innerhalb der Klassen der API, außer im Kontext des Übersichts-Texts. Sie ist primär eine _Navigationsseite_, fungiert jedoch auch als Referenzseite für die API.

Es gibt einige Fälle, in denen mehrere APIs existieren, die getrennt und in ihren eigenen Spezifikationen definiert sind, jedoch eng verwandt sind und daher auf einer einzigen API-Landingpage behandelt werden sollten. Zum Beispiel deckt die [Generic Sensor API](https://w3c.github.io/sensors/) allgemeine Sensorangelegenheiten ab, spezifischere Angelegenheiten werden jedoch in anderen APIs behandelt, wie der [Ambient Light Sensor](https://w3c.github.io/ambient-light/) oder der [Motion Sensor](https://w3c.github.io/motion-sensors/). In solchen Fällen sind viele der hochrangigen Konzepte die gleichen, sodass es keinen Sinn macht, diese über mehrere Landingpages zu wiederholen. In einem solchen Fall würde es in Bezug auf Wiederholung und Auffindbarkeit mehr Sinn machen, sie alle unter einer einzigen "Websensoren"-Landingpage zusammenzufassen.

#### Beispiel

- [WebVR API](/de/docs/Web/API/WebVR_API)

#### Vorlagen

- [API-Landingpage-Vorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_landing_page_template)

### API-Referenzseite

> [!NOTE]
> Auch bekannt als _Interface-Landingpage_.

Eine **API-Referenzseite** listet alle Methoden, Eigenschaften, Ereignisse usw. auf, die Mitglieder einer bestimmten Schnittstelle oder Klasse sind. Sie bietet eine Übersicht darüber, wofür die Klasse oder Schnittstelle verwendet wird, und gibt Links zur Dokumentation für jedes dieser Mitglieder. Sie ist detaillierter als eine API-Landingpage, die typischerweise auf mehrere API-Referenzseiten verlinkt.

#### Beispiel

- [Request interface](/de/docs/Web/API/Request) der [Fetch API](/de/docs/Web/API/Fetch_API).

#### Vorlagen

- [API-Referenzseiten-Vorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_reference_page_template)

### API-Referenzunterseite

Eine **API-Referenzunterseite** ist untergeordnet zu einer API-Referenzseite. Sie dokumentiert ein einzelnes Mitglied einer Schnittstelle detailliert.

#### Beispiele

- [`count()` Methode](/de/docs/Web/API/IDBIndex/count) der [IDBIndex](/de/docs/Web/API/IDBIndex) Schnittstelle (Teil der [IndexedDB API](/de/docs/Web/API/IndexedDB_API))
- [capabilities Eigenschaft](/de/docs/Web/API/VRDisplay/capabilities) der [VRDisplay](/de/docs/Web/API/VRDisplay) Schnittstelle (Teil der [WebVR API](/de/docs/Web/API/WebVR_API))
- [Request() Konstruktor](/de/docs/Web/API/Request/Request) der [Request](/de/docs/Web/API/Request) Schnittstelle (Teil der [Fetch API](/de/docs/Web/API/Fetch_API))
- [vrdisplaypresentchange Ereignis](/de/docs/Web/API/Window/vrdisplaypresentchange_event) (Teil der [WebVR API](/de/docs/Web/API/WebVR_API), hängt von der [Window](/de/docs/Web/API/Window) Schnittstelle ab)

#### Vorlagen

- [API-Methoden-Unterseitenvorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_method_subpage_template)
- [API-Eigenschaften-Unterseitenvorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_property_subpage_template)
- [API-Konstruktor-Unterseitenvorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_constructor_subpage_template)
- [API-Ereignis-Unterseitenvorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_event_subpage_template)

### HTML-Element-Referenzseite

Eine **HTML-Referenzseite** listet alle Attribute auf, die einem HTML-Element zur Verfügung stehen, erklärt den Zweck und die Verwendung des Elements und bietet Beispiele, Informationen zur Browser-Kompatibilität und andere wichtige Daten.

#### Beispiel

- [`<video>` Element](/de/docs/Web/HTML/Reference/Elements/video)

#### Vorlagen

- [HTML-Element-Seitenvorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/HTML_element_page_template)

### HTML-Attribut-Referenzseite

Eine HTML-Attributseite listet alle Werte auf, die einem HTML-Attribut zur Verfügung stehen, erklärt den Zweck und die Anwendungsfälle des Attributs und bietet Beispiele, Informationen zur Browser-Kompatibilität und andere wichtige Daten.

> [!NOTE]
> Element-spezifische Attribute (z.B. `placeholder` für `<input>`) benötigen keine separate Seite, wenn die Attribute ausreichend innerhalb der Referenzseite des übergeordneten Elements behandelt werden können (z.B. sollte das `placeholder` Attribut auf der Seite des `<input>` Elements behandelt werden und nicht als eigenständige Seite).

#### Beispiel

- [`class` Attribut](/de/docs/Web/HTML/Reference/Global_attributes/class)

#### Vorlagen

- [HTML-Attribut-Seitenvorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/HTML_attribute_page_template)

### SVG-Element-Referenzseite

Eine **SVG-Referenzseite** listet alle Attribute auf, die einem SVG-Element zur Verfügung stehen, erklärt den Zweck und die Verwendung des Elements und bietet Beispiele, Informationen zur Browser-Kompatibilität und andere wichtige Daten.

#### Beispiel

- [\<g> Element](/de/docs/Web/SVG/Reference/Element/g)

#### Vorlagen

- [SVG-Element-Seitenvorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/SVG_element_page_template)

### CSS-Modul-Landingpage

Jedes **[CSS](/de/docs/Web/CSS)-Modul** repräsentiert eine CSS-Spezifikation, die Unterstützung für bestimmte Funktionen und Implementierungen in CSS bietet. Zum Beispiel repräsentiert das [CSS-Boxmodell](/de/docs/Web/CSS/Guides/Box_model) Modul die [Spezifikation](/de/docs/Web/CSS/Guides/Box_model#specifications), die die Rand- und Abstands-Eigenschaften beschreibt, die es Ihnen ermöglichen, Abstand in und um ein CSS-Box zu erstellen.

Eine **CSS-Modul-Landingpage** bietet einen Überblick über die Funktionen, die das Modul bereitstellt, und listet alle Eigenschaften, Datentypen, CSS-Funktionen usw. auf, die vom Modul angeboten werden. Wenn möglich, bietet die CSS-Modul-Landingpage eine schnelle Demonstration dessen, was mit den Eigenschaften des Moduls erreicht werden kann, durch ein interaktives Beispiel. Die Modul-Landingpage dient hauptsächlich als _Navigationsseite_, fungiert jedoch auch als Referenzseite für das Modul.

Einige verwandte Eigenschaften und Funktionen, die in andere Module gehören, aber eng mit der Funktionalität verbunden sind, die das von Ihnen dokumentierte Modul bietet, können auch in einem _Verwandte Konzepte_-Abschnitt behandelt werden. Beispielsweise werden der `<easing-function>` Datentyp und die `prefers-reduced-motion` Media-Query nicht im CSS Animationsmodul behandelt, aber da sie eng mit CSS-Animationen verbunden sind, ist es eine gute Idee, sie im [Verwandte Konzepte](/de/docs/Web/CSS/Guides/Animations#related_concepts) Abschnitt der CSS Animations-Modul-Landingpage hervorzuheben.

#### Beispiele

- [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations)
- [CSS-grundlegende Benutzeroberfläche](/de/docs/Web/CSS/Guides/Basic_user_interface)
- [CSS-Filter-Effekte](/de/docs/Web/CSS/Guides/Filter_effects)
- [CSS-Scroll-Snap](/de/docs/Web/CSS/Guides/Scroll_snap)

#### Vorlagen

- [CSS-Modul-Landingpage-Vorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/CSS_module_landing_page_template)

### CSS-Feature-Referenzseite

Eine **CSS-Referenzseite** listet alle verfügbaren Syntax für ein CSS-Feature wie einen Selektor oder eine Eigenschaft auf und erklärt den Zweck und die Verwendung des Features. Es bietet auch Beispiele, Informationen zur Browser-Kompatibilität und andere wichtige Daten.

#### Beispiele

- {{cssxref("background-color")}} Eigenschaft
- {{cssxref(":hover")}} Pseudoklasse
- {{cssxref("@media")}} At-Regel

#### Vorlagen

- [CSS-Eigenschafts-Pagenvorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/CSS_property_page_template)
- [CSS-Selektor-Vorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/CSS_selector_page_template)
- [CSS-Funktion-Pagenvorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/CSS_function_page_template)

### HTTP-Header-Referenzseite

Eine **HTTP-Header-Referenzseite** listet alle verfügbaren Direktiven auf, die ein HTTP-Header enthalten kann, und erklärt den Zweck und die Verwendung des Headers. Sie bietet auch Beispiele, Informationen zur Browser-Kompatibilität und andere wichtige Erklärungen.

#### Beispiel

- [Cache-Control Header](/de/docs/Web/HTTP/Reference/Headers/Cache-Control)

#### Vorlagen

- [HTTP-Header-Pagenvorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/HTTP_header_page_template)

### ARIA-Referenzseite

Eine **ARIA-Referenzseite** beschreibt eine [Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles) oder [Attribut](/de/docs/Web/Accessibility/ARIA/Reference/Attributes), die Wege definiert, um Webinhalte und Webanwendungen für Menschen mit Behinderungen zugänglicher zu machen.

#### Beispiele

- [`aria-busy` Attribut](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-busy)
- [`application` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/application_role)

#### Vorlagen

- [ARIA-Pagenvorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/ARIA_Page_Template)

### Konzeptuelle Seite

Eine **konzeptuelle Seite** ist eine _Leitfaden_ Seite, die etwas erklärt oder lehrt. Generell, wenn eine Seite hauptsächlich aus Prosa besteht und nicht in einen anderen Seitentyp fällt, ist sie wahrscheinlich eine konzeptuelle Seite. Eine ausführliche Diskussion eines Themas kann über mehrere konzeptuelle Seiten verteilt sein und mit [Weiter](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/previous_menu_next.rs) und [Zurück](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/previous_menu_next.rs) Makros verlinkt werden.

#### Beispiele

- [Verwendung der WebVR API](/de/docs/Web/API/WebVR_API/Using_the_WebVR_API)
- [Visualisierungen mit der Web Audio API](/de/docs/Web/API/Web_Audio_API/Visualizations_with_Web_Audio_API)
- [Konflikte handhaben](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)

### Glossarseite

Eine **Glossarseite** enthält eine kurze Erklärung eines Begriffs, Themas oder Konzepts. Der erste Absatz sollte eine einfache, eigenständige Beschreibung des Begriffs sein, die nicht mehr als ein paar Sätze umfasst. Dies kann gefolgt werden von Links zu weiterführenden Informationen im Abschnitt **Siehe auch**. Wenn die Seite mehr als eine Bildschirmhöhe umfasst, ist sie zu lang und sollte in eine konzeptuelle Seite umgewandelt werden. Siehe [Wie man einen neuen Eintrag im Glossar schreibt und referenziert](/de/docs/MDN/Writing_guidelines/Howto/Write_a_new_entry_in_the_glossary) für weitere Details.

#### Beispiele

- {{Glossary("DOM", "DOM")}}
- {{Glossary("Exception", "Ausnahme")}}
- {{Glossary("Hyperlink", "Hyperlink")}}

#### Vorlagen

- [Glossarseiten-Vorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/Glossary_page_template)

### Landingpage

Eine **Landingpage** dient als eine Art Menü für ihre Unterseiten und ist daher primär eine _Navigationsseite_. Ein Landingpage-Layout wird typischerweise für die Hauptseite eines Thementrees verwendet. Sie beginnt mit einer kurzen Zusammenfassung des Themas und präsentiert dann eine strukturierte Liste von Links zu ihren Unterseiten und optional weiteres Material, das für den Leser nützlich sein könnte.

Die Liste der Unterseiten kann automatisch mit der [`SubpagesWithSummaries`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/subpages_with_summaries.rs) Vorlage generiert werden. In komplexeren Fällen muss die Liste jedoch möglicherweise manuell erstellt (und gepflegt) werden.

### Lerne-Webentwicklung-Seiten

Der [Lerne-Webentwicklung](/de/docs/Learn_web_development) Abschnitt von MDN richtet sich speziell an Personen, die die grundlegenden Grundlagen der Webentwicklung erlernen, und erfordert daher einen anderen Ansatz als der Rest der MDN-Inhalte. Sie finden weitere Richtlinien unter [Lerne-Webentwicklung-Schreibrichtlinien](/de/docs/MDN/Writing_guidelines/Learning_content).

Es gibt nur wenige Seitentypen innerhalb des Bereichs Lerne-Webentwicklung:

- **Modulgruppen-Landingpage**, zum Beispiel [Kernlernmodule](/de/docs/Learn_web_development/Core)
  - : Diese enthalten einen Einführungstext, einen Abschnitt mit den Voraussetzungen, die Sie haben sollten, bevor Sie mit der Modulgruppe beginnen, und eine Liste der Module, gefolgt von einer optionalen Liste von "Siehe auch" Links.
- **Modul-Landingpage**, zum Beispiel [Inhalte mit HTML strukturieren](/de/docs/Learn_web_development/Core/Structuring_content)
  - : Diese enthalten einen Einführungstext, einen Abschnitt mit den Voraussetzungen, die Sie haben sollten, bevor Sie mit dem Modul beginnen, und eine Liste der enthaltenen Tutorials, gefolgt von einer optionalen Liste von "Zusätzlichen Tutorials", die zwar verwandt sind, aber nicht Teil des zentralen Lernpfades sind, und einer optionalen Liste von "Siehe auch" Links.
- **Tutorialseite**, zum Beispiel [Grundsätzliche HTML-Syntax](/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax)
  - : Die Struktur eines Lern-Tutorials ist nicht streng, aber es muss eine praxisbezogene Lernerfahrung bieten (siehe [Lerne-Webentwicklung-Schreibrichtlinien > Ansatz](/de/docs/MDN/Writing_guidelines/Learning_content#approach)), es muss eine Reihe von "Voraussetzungen" und "Lernzielen" haben, die oben aufgeführt sind, und der Inhalt muss die angegebenen Lernziele lehren.

### Beispiele

- [HTML](/de/docs/Web/HTML)
- [CSS](/de/docs/Web/CSS)
- [Web APIs](/de/docs/Web/API)
- [JavaScript](/de/docs/Web/JavaScript)
- [Lerne Webentwicklung](/de/docs/Learn_web_development)
- [Community-Ressourcen](/de/docs/MDN/Community)

## Siehe auch

- [Seitenkomponenten](/de/docs/MDN/Writing_guidelines/Writing_style_guide#page_components)
- [Erstellen von Code-Beispielen in Markdown](/de/docs/MDN/Writing_guidelines/Code_style_guide)
