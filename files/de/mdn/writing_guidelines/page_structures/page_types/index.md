---
title: Seitentypen
slug: MDN/Writing_guidelines/Page_structures/Page_types
l10n:
  sourceCommit: e0a2b683c4ddaeecdc4ddebf16e4a72c2dda17ac
---

Es gibt eine Reihe von Seitentypen, die wiederholt in den MDN-Web-Dokumentationen verwendet werden. Dieser Artikel beschreibt diese Seitentypen, deren Zweck und gibt Beispiele für jede sowie Vorlagen, die bei der Erstellung einer neuen Seite verwendet werden können.

Es gibt drei breite Kategorien von Seitentypen auf MDN, obwohl einige Seitentypen in mehr als eine Kategorie fallen.

- **Referenz**-Seiten beschreiben die Details von etwas und sind gemäß der Struktur des beschriebenen Objekts organisiert.
- **Leitfaden**-Seiten beschreiben, wie man etwas tut oder benutzt, und sind basierend auf den Zielen des Lesers organisiert.
- **Navigations**-Seiten existieren in erster Linie, um Links zu anderen Seiten bereitzustellen, üblicherweise über verwandte Themen.

## Eine neue Seite erstellen

Das Hinzufügen eines neuen Dokuments ist relativ einfach, insbesondere wenn Sie damit beginnen, eine `index.md`-Datei von einem ähnlichen Thema zu kopieren. Es gibt einige Dinge zu beachten:

- Dokumente werden in Markdown in einer `index.md`-Datei geschrieben.
- Erstellen Sie zum Beispiel, wenn Sie ein neues Dokument für einen HTTP-Header namens `foo` erstellen, einen neuen Ordner unter `files/en-us/web/http/reference/headers/foo` und legen Sie die Markdown-Datei in diesem Ordner ab (`files/en-us/web/http/reference/headers/foo/index.md`).
- Eine `index.md`-Datei eines Dokuments muss mit dem Front-Matter beginnen, das den `title`, `slug` und meistens `page-type` definiert. Es kann hilfreich sein, sich auf das Front-Matter in einer ähnlichen `index.md`-Datei zu beziehen.

## Wie die Vorlagen zu verwenden sind

Wenn Sie eine neue Seite erstellen, können Sie sicherstellen, dass Sie die richtige Seitenstruktur/-inhalte verwendet haben, indem Sie sich auf eine unserer Seitenschablonen beziehen — siehe die Abschnitte unten. Sie können den genauen Quellcode jeder Vorlage (wenn Sie ihn kopieren möchten) über den "Source on **GitHub**" Link am unteren Ende jeder Seite finden. Diese Seitenvorlagen ergeben als veröffentlichte Seiten nicht viel Sinn, aber wenn Sie sich den Quellcode ansehen, werden Sie feststellen, dass sie viele hilfreiche Kommentare, Platzhalter und Hinweise enthalten, die erklären, wie Sie die fehlenden Informationen ausfüllen und Ihre Seite erstellen.

Am Anfang jeder Vorlage finden Sie einen Abschnitt mit dem Titel _Remove before publishing_ — dieser enthält Informationen darüber, wie Sie den Seitentitel, den Slug, das Seitenleistenmenü und Tags ausfüllen (z. B. Informationen, die tatsächlich nicht im Hauptteil des Artikels erscheinen). Sie müssen diesen Abschnitt löschen, nachdem Sie die Anweisungen darin befolgt haben, bevor die Seite als fertig betrachtet werden kann.

## Alte Seitendesigns

Manchmal stoßen Sie auf Referenzseiten im alten Stil, die sich merklich von den hier präsentierten Vorlagen unterscheiden. Zum Beispiel hatten alte Schnittstellenseiten alle Mitgliederdetails der Schnittstellen auf einer einzigen Seite, und einzelne Methoden-/Eigenschafts-/Konstruktor-/Ereignislistener-Seiten existierten nicht.

Wenn Sie auf einen alten Satz von Seiten stoßen, würden wir es begrüßen, wenn Sie diese auf den neuen Stil aktualisieren würden! Wir wissen jedoch zu schätzen, dass dies eine große Menge Arbeit sein könnte. Wenn die zu aktualisierenden Informationen nicht zu umfangreich sind und Sie etwas freie Zeit haben, versuchen Sie in jedem Fall, sie auf den neuen Stil zu aktualisieren.

Wenn die Arbeit umfangreicher ist, sollten Sie einige Faktoren berücksichtigen, um die Arbeit zu priorisieren:

- Wie veraltet sind die Informationen?
- Wie gering ist die Qualität der Informationen?
- Wie populär ist das Feature? Wie gefragt sind die Informationen?

Wenn Sie ein Team zusammenstellen möchten, um an einem Update zu arbeiten, oder wenn Sie einfach nur einige Inhalte melden oder diskutieren möchten, die ein Update benötigen, können Sie gerne ein [Inhaltsproblem melden](https://github.com/mdn/content/issues) oder [uns um Hilfe bitten](/de/docs/MDN/Community/Communication_channels).

## Der page-type Front-Matter-Schlüssel

Wir haben einen Front-Matter-Schlüssel `page-type` definiert, um den Typ der MDN-Seiten eindeutig zu identifizieren. Die unten verlinkten Vorlagen geben an, welche `page-type` Werte Sie für jeden Seitentyp festlegen sollten.

Für die vollständige Liste der Seitentypen siehe [Der page-type Front-Matter-Schlüssel](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/Page_type_key).

## Seitenschablonen

Nachfolgend finden Sie Beispiele der verschiedenen Seiten, die Sie auf MDN finden werden, zusammen mit Vorlagen, die verwendet werden können, um neue Inhalte zu erstellen, basierend auf dem Typ der Inhalte, die Sie präsentieren werden, einschließlich der folgenden Seiten:

- [API Landing Page](#api_landing_page)
- [API Referenzseite](#api_referenzseite)
- [API Referenzunterseite](#api_referenzunterseite)
- [HTML Element-Referenzseite](#html_element-referenzseite)
- [HTML Attribut-Referenzseite](#html_attribut-referenzseite)
- [SVG Element-Referenzseite](#svg_element-referenzseite)
- [CSS Modulseite](#css_modulseite)
- [CSS Feature-Referenzseite](#css_feature-referenzseite)
- [HTTP Header-Referenzseite](#http_header-referenzseite)
- [ARIA Referenzseite](#aria_referenzseite)
- [Konzeptuelle Seite](#konzeptuelle_seite)
- [Glossarseite](#glossarseite)
- [Landing Page](#landing_page)
- [Seiten zur Webentwicklung lernen](#seiten_zur_webentwicklung_lernen)

Jeder Abschnitt enthält Links zu Live-Beispielseiten für diesen Seitentyp.

### API Landing Page

Eine **{{Glossary("API", "API")}} Landing Page** bietet einen Überblick darüber, was eine bestimmte API macht, sowie Links zur Dokumentation für jede der von der API angebotenen Schnittstellen, globalen Funktionen usw. Sie verlinkt nicht direkt zu spezifischen Methoden oder Eigenschaften innerhalb der Klassen der API, außer im Kontext der Übersichtstexte. Es handelt sich in erster Linie um eine \_Navigations_Seite, die aber auch als \_Referenz_Seite für die API dient.

Es gibt einige Fälle, in denen mehrere APIs existieren, die eigenständig sind und in ihren eigenen Spezifikationen definiert sind, jedoch eng miteinander verwandt sind und daher mit einer einzigen API-Landing Page abgedeckt werden könnten. Zum Beispiel deckt die [Generic Sensor API](https://w3c.github.io/sensors/) allgemeine Sensorbelange ab, aber spezifischere Anliegen werden in anderen APIs wie [Ambient Light Sensor](https://w3c.github.io/ambient-light/), [Motion Sensor](https://w3c.github.io/motion-sensors/) usw. behandelt. In solchen Fällen sind viele der grundlegenden Konzepte die gleichen, weshalb es keinen Sinn ergibt, diese über mehrere Landing Pages hinweg zu wiederholen. In so einem Fall würde es in Bezug auf Wiederholung und Auffindbarkeit mehr Sinn ergeben, sie alle unter einer einzigen "Web Sensoren" Landing Page abzudecken.

#### Beispiel

- [WebVR API](/de/docs/Web/API/WebVR_API)

#### Vorlagen

- [API Landing Page Vorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_landing_page_template)

### API Referenzseite

> [!NOTE]
> Auch bekannt als eine _Interface Landing Page_.

Eine **API Referenzseite** listet alle Methoden, Eigenschaften, Ereignisse usw. auf, die Mitglieder einer bestimmten Schnittstelle oder Klasse sind. Sie bietet einen Überblick darüber, was die Klasse oder Schnittstelle tut oder wofür sie verwendet wird, und gibt Links zur Dokumentation jedes dieser Mitglieder. Sie ist granularer als eine API Landing Page, die typischerweise zu mehreren API-Referenzseiten verlinkt.

#### Beispiel

- [Request-Schnittstelle](/de/docs/Web/API/Request) der [Fetch API](/de/docs/Web/API/Fetch_API).

#### Vorlagen

- [API Referenzseiten Vorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_reference_page_template)

### API Referenzunterseite

Eine **API Referenzunterseite** ist untergeordnet zu einer API-Referenzseite. Sie dokumentiert ein einzelnes Schnittstellenmitglied im Detail.

#### Beispiele

- [`count()` Methode](/de/docs/Web/API/IDBIndex/count) der [IDBIndex](/de/docs/Web/API/IDBIndex) Schnittstelle (Teil der [IndexedDB API](/de/docs/Web/API/IndexedDB_API))
- [capabilities Eigenschaft](/de/docs/Web/API/VRDisplay/capabilities) der [VRDisplay](/de/docs/Web/API/VRDisplay) Schnittstelle (Teil der [WebVR API](/de/docs/Web/API/WebVR_API))
- [Request() Konstruktor](/de/docs/Web/API/Request/Request) der [Request](/de/docs/Web/API/Request) Schnittstelle (Teil der [Fetch API](/de/docs/Web/API/Fetch_API))
- [vrdisplaypresentchange Ereignis](/de/docs/Web/API/Window/vrdisplaypresentchange_event) (Teil der [WebVR API](/de/docs/Web/API/WebVR_API), hängt an der [Window](/de/docs/Web/API/Window) Schnittstelle)

#### Vorlagen

- [API Methoden Unterseiten Vorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_method_subpage_template)
- [API Eigenschaften Unterseiten Vorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_property_subpage_template)
- [API Konstruktoren Unterseiten Vorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_constructor_subpage_template)
- [API Ereignisse Unterseiten Vorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_event_subpage_template)

### HTML Element-Referenzseite

Eine **HTML Referenzseite** listet alle Attribute auf, die auf einem HTML-Element verfügbar sind, erklärt den Zweck und die Nutzung des Elements und bietet Beispiele, Browser-Kompatibilitätsinformationen und andere wichtige Daten.

#### Beispiel

- [`<video>`-Element](/de/docs/Web/HTML/Reference/Elements/video)

#### Vorlagen

- [HTML Element Seitenvorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/HTML_element_page_template)

### HTML Attribut-Referenzseite

Eine HTML Attributseite listet alle Werte auf, die auf einem HTML-Attribut existieren, erklärt den Zweck und die Anwendungsfälle des Attributs und bietet Beispiele, Browser-Kompatibilitätsinformationen und andere wichtige Daten.

> [!NOTE]
> Elementspezifische Attribute (z.B. `placeholder` für `<input>`) benötigen keine eigene Seite, wenn die Attribute ausreichend innerhalb der Referenzseite des Elternelements behandelt werden können (z.B. sollte das `placeholder`-Attribut auf der Seite des `<input>`-Elements behandelt werden, nicht als eigenständige Seite).

#### Beispiel

- [`class`-Attribut](/de/docs/Web/HTML/Reference/Global_attributes/class)

#### Vorlagen

- [HTML Attribut Seitenvorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/HTML_attribute_page_template)

### SVG Element-Referenzseite

Eine **SVG Referenzseite** listet alle Attribute auf, die auf einem SVG-Element verfügbar sind, erklärt den Zweck und die Nutzung des Elements und bietet Beispiele, Browser-Kompatibilitätsinformationen und andere wichtige Daten.

#### Beispiel

- [\<g>-Element](/de/docs/Web/SVG/Reference/Element/g)

#### Vorlagen

- [SVG Element Seitenvorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/SVG_element_page_template)

### CSS Modulseite

Jedes **[CSS](/de/docs/Web/CSS) Modul** repräsentiert eine CSS-Spezifikation, die Unterstützung für bestimmte Features und Implementierungen in CSS bietet. Zum Beispiel repräsentiert das [CSS-Boxmodell](/de/docs/Web/CSS/Guides/Box_model) Modul die [Spezifikation](/de/docs/Web/CSS/Guides/Box_model#specifications), die die Margin- und Padding-Eigenschaften beschreibt, die es Ihnen ermöglichen, Abstände in und um ein CSS-Box zu erstellen.

Eine **CSS Modulseite** bietet einen Überblick über die Eigenschaften, die das Modul bietet, und listet alle Eigenschaften, Datentypen, CSS-Funktionen usw. auf, die das Modul bietet. Wenn möglich, bietet die CSS Modulseite eine kurze Demonstration dessen, was mit den Eigenschaften des Moduls erreicht werden kann, durch ein interaktives Beispiel. Die Modulseite dient in erster Linie als \_Navigations_Seite, dient jedoch auch als Übersicht für das Modul.

Einige verwandte Eigenschaften und Features, die in anderen Modulen enthalten sind, aber eng mit den Funktionen des Moduls, das Sie dokumentieren, verknüpft sind, können auch in einem Abschnitt _Verwandte Konzepte_ behandelt werden. Zum Beispiel ist der `<easing-function>` Datentyp und die `prefers-reduced-motion` Media Query nicht im CSS-Animationsmodul abgedeckt, aber da sie eng mit CSS-Animationen verwandt sind, ist es eine gute Idee, sie im [Verwandte Konzepte](/de/docs/Web/CSS/Guides/Animations#related_concepts) Abschnitt der CSS-Animationsmodulseite hervorzuheben.

#### Beispiele

- [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations)
- [CSS Basic User Interface](/de/docs/Web/CSS/Guides/Basic_user_interface)
- [CSS-Filtereffekte](/de/docs/Web/CSS/Guides/Filter_effects)
- [CSS Scroll Snap](/de/docs/Web/CSS/Guides/Scroll_snap)

#### Vorlagen

- [CSS Modul Vorlagen Seite](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/CSS_module_page_template)

### CSS Feature-Referenzseite

Eine **CSS Referenzseite** listet die gesamte verfügbare Syntax für ein CSS-Feature wie einen Selektor oder eine Eigenschaft auf und erklärt den Zweck und die Nutzung des Features. Sie bietet auch Beispiele, Browser-Kompatibilitätsinformationen und andere wichtige Daten.

#### Beispiele

- {{cssxref("background-color")}}-Eigenschaft
- {{cssxref(":hover")}}-Pseudoklasse
- {{cssxref("@media")}}-Regel

#### Vorlagen

- [CSS Eigenschaften Seitenvorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/CSS_property_page_template)
- [CSS Selektor Seitenvorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/CSS_selector_page_template)
- [CSS Funktionen Seitenvorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/CSS_function_page_template)

### HTTP Header-Referenzseite

Eine **HTTP Header Referenzseite** listet alle verfügbaren Direktiven auf, die ein HTTP-Header enthalten kann, und erklärt den Zweck und die Nutzung des Headers. Sie bietet auch Beispiele, Browser-Kompatibilitätsinformationen und andere wichtige Erklärungen.

#### Beispiel

- [Cache-Control Header](/de/docs/Web/HTTP/Reference/Headers/Cache-Control)

#### Vorlagen

- [HTTP Header Seitenvorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/HTTP_header_page_template)

### ARIA Referenzseite

Eine **ARIA Referenzseite** beschreibt eine [Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles) oder ein [Attribut](/de/docs/Web/Accessibility/ARIA/Reference/Attributes), das Möglichkeiten definiert, Webinhalte und Webanwendungen für Menschen mit Behinderungen zugänglicher zu machen.

#### Beispiele

- [`aria-busy` Attribut](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-busy)
- [`application` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/application_role)

#### Vorlagen

- [ARIA Seitenvorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/ARIA_Page_Template)

### Konzeptuelle Seite

Eine **konzeptuelle Seite** ist eine \_Leitfaden_Seite, die etwas erklärt oder lehrt. Allgemein gilt, wenn eine Seite hauptsächlich Prosa enthält und nicht in einen anderen Seitentyp fällt, ist sie wahrscheinlich eine konzeptuelle Seite. Eine ausführliche Diskussion eines Themas könnte sich über mehrere konzeptuelle Seiten erstrecken und mit [Next](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/previous_menu_next.rs) und [Previous](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/previous_menu_next.rs) Makros verlinkt werden.

#### Beispiele

- [Verwendung der WebVR API](/de/docs/Web/API/WebVR_API/Using_the_WebVR_API)
- [Visualisierungen mit Web Audio API](/de/docs/Web/API/Web_Audio_API/Visualizations_with_Web_Audio_API)
- [Umgang mit Konflikten](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)

### Glossarseite

Eine **Glossarseite** enthält eine kurze Erklärung eines Begriffs, Themas oder Konzepts. Der erste Absatz sollte eine einfache, in sich geschlossene Beschreibung des Begriffs sein, nicht mehr als ein paar Sätze. Dieser kann durch Links zu weiterführenden Informationen im Abschnitt **Siehe auch** ergänzt werden. Wenn die Seite mehr als eine Bildschirmseite lang wird, ist sie zu lang und sollte in eine konzeptuelle Seite umgewandelt werden. Weitere Details finden Sie unter [Wie man einen neuen Eintrag im Glossar schreibt und referenziert](/de/docs/MDN/Writing_guidelines/Howto/Write_a_new_entry_in_the_glossary).

#### Beispiele

- {{Glossary("DOM", "DOM")}}
- {{Glossary("Exception", "Ausnahme")}}
- {{Glossary("Hyperlink", "Hyperlink")}}

#### Vorlagen

- [Glossarseitenvorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/Glossary_page_template)

### Landing Page

Eine **Landing Page** dient als eine Art Menü für ihre Unterseiten und ist daher in erster Linie eine \_Navigations_Seite. Ein Landing Page-Layout wird typischerweise für die Stammseite eines Themenseitenbaums verwendet. Sie beginnt mit einer kurzen Zusammenfassung des Themas und präsentiert dann eine strukturierte Liste von Links zu ihren Unterseiten und optionalem zusätzlichen Material, das für den Leser nützlich sein kann.

Die Liste der Unterseiten kann automatisch mit der [`SubpagesWithSummaries`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/subpages_with_summaries.rs) Vorlage generiert werden. In komplexeren Fällen muss die Liste jedoch manuell erstellt (und gepflegt) werden.

### Seiten zur Webentwicklung lernen

Der Abschnitt [Webentwicklung lernen](/de/docs/Learn_web_development) der MDN richtet sich speziell an Personen, die die grundlegenden Grundlagen der Webentwicklung lernen, und erfordert daher einen anderen Ansatz als der Rest der MDN-Inhalte. Weitere Richtlinien finden Sie unter [Schreibrichtlinien für Webentwicklung lernen](/de/docs/MDN/Writing_guidelines/Learning_content).

Es gibt nur wenige Arten von Seiten im Bereich "Webentwicklung lernen":

- **Modulgruppen-Landing-Page**, zum Beispiel [Kern-Lernmodule](/de/docs/Learn_web_development/Core)
  - : Diese enthalten einen Einführungstext, einen Abschnitt mit den Voraussetzungen, die Sie vor dem Start der Modulgruppe haben sollten, und eine Liste der Module, gefolgt von einer optionalen Liste von „Siehe auch“-Links.
- **Modul-Landing-Page**, zum Beispiel [Inhalte mit HTML strukturieren](/de/docs/Learn_web_development/Core/Structuring_content)
  - : Diese enthalten einen Einführungstext, einen Abschnitt mit den Voraussetzungen, die Sie vor dem Start des Moduls haben sollten, und eine Liste der enthaltenen Tutorials, gefolgt von einer optionalen Liste „Zusätzliche Tutorials“, die thematisch verwandt sind, aber nicht Teil des zentralen Lernweges sind, und einer optionalen Liste von „Siehe auch“-Links.
- **Tutorial-Seite**, zum Beispiel [Grundlegende HTML-Syntax](/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax)
  - : Die Struktur eines Lerntutorials ist nicht strikt, muss jedoch eine praktische Lernerfahrung bieten (siehe [Schreibrichtlinien für Webentwicklung lernen > Ansatz](/de/docs/MDN/Writing_guidelines/Learning_content#approach)), es muss eine Reihe von „Voraussetzungen“ und „Lernzielen“ am Anfang auflisten und der Inhalt muss die genannten Lernziele vermitteln.

### Beispiele

- [HTML](/de/docs/Web/HTML)
- [CSS](/de/docs/Web/CSS)
- [Web APIs](/de/docs/Web/API)
- [JavaScript](/de/docs/Web/JavaScript)
- [Webentwicklung lernen](/de/docs/Learn_web_development)
- [Community-Ressourcen](/de/docs/MDN/Community)

## Siehe auch

- [Seitenelemente](/de/docs/MDN/Writing_guidelines/Writing_style_guide#page_components)
- [Erstellung von Codebeispielen in Markdown](/de/docs/MDN/Writing_guidelines/Code_style_guide)
