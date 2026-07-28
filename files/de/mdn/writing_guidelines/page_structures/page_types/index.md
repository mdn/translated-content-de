---
title: Seitentypen
slug: MDN/Writing_guidelines/Page_structures/Page_types
l10n:
  sourceCommit: 7ed7b730bf88307cc6cf34b82bb1d735b9a1aa1f
---

Es gibt eine Reihe von Seitentypen, die auf MDN wiederholt verwendet werden. Dieser Artikel beschreibt diese Seitentypen, ihren Zweck, und gibt Beispiele sowie Vorlagen, die bei der Erstellung einer neuen Seite verwendet werden können.

Auf MDN gibt es drei große Kategorien von Seitentypen, obwohl einige Seitentypen in mehr als eine Kategorie fallen.

- **Referenz**-Seiten beschreiben die Details von etwas und sind nach der Struktur des beschriebenen Objekts organisiert.
- **Leitfaden**-Seiten beschreiben, wie man etwas tut oder verwendet, und sind basierend auf den Zielen des Lesers organisiert.
- **Navigations**-Seiten existieren hauptsächlich, um Links zu anderen Seiten bereitzustellen, meist zu verwandten Themen.

## Erstellen einer neuen Seite

Das Hinzufügen eines neuen Dokuments ist relativ unkompliziert, besonders wenn Sie mit dem Kopieren einer `index.md`-Datei von einem ähnlichen Thema beginnen können. Es gibt ein paar Dinge, die Sie beachten sollten:

- Dokumente werden in Markdown in einer `index.md`-Datei geschrieben.
- Wenn Sie beispielsweise ein neues Dokument für einen HTTP-Header namens `foo` erstellen, erstellen Sie einen neuen Ordner unter `files/en-us/web/http/reference/headers/foo` und legen Sie die Markdown-Datei in diesem Ordner ab (`files/en-us/web/http/reference/headers/foo/index.md`).
- Eine `index.md`-Datei eines Dokuments muss mit einem Front-Matter beginnen, das den `title`, `slug` und meistens den `page-type` definiert. Es könnte hilfreich sein, das Front-Matter in einer ähnlichen `index.md`-Datei zu konsultieren.

## Anleitung zur Verwendung der Vorlagen

Beim Erstellen einer neuen Seite können Sie sicherstellen, dass Sie die richtige Seitenstruktur/Inhalte verwendet haben, indem Sie eine unserer Seitentemplates konsultieren — siehe die Abschnitte weiter unten. Sie können den genauen Quellcode jeder Vorlage (falls Sie ihn kopieren möchten) finden, indem Sie dem Link „Source on **GitHub**“ am Ende jeder Vorlage folgen. Diese Seitentemplates machen als veröffentlichte Seiten wenig Sinn, aber wenn Sie deren Quellcode ansehen, werden Sie feststellen, dass sie viele hilfreiche Kommentare, Platzhalter und Hinweise enthalten, die detailliert beschreiben, wie fehlende Informationen ausgefüllt und Ihre Seite erstellt werden können.

Am Anfang jeder Vorlage finden Sie einen Abschnitt mit dem Titel _Vor Veröffentlichung entfernen_ — dieser enthält Informationen darüber, wie der Seitentitel, Slug, das Seitenleistenmenü und die Tags gefüllt werden müssen (z.B. Informationen, die nicht im Hauptteil des Artikels erscheinen). Sie müssen diesen Abschnitt löschen, nachdem Sie die Anweisungen darin befolgt haben, bevor die Seite als fertig betrachtet werden kann.

## Alte Seitenlayouts

Manchmal stoßen Sie auf alte Referenzseiten, die deutlich anders aussehen als die hier vorgestellten Vorlagen. Zum Beispiel hatten alte Interface-Seiten alle Mitgliederdetails auf einer einzigen Seite, und individuelle Methoden/Attribute/Konstruktoren/Event-Listener-Seiten existierten nicht.

Wenn Sie auf ein altes Set von Seiten stoßen, würden wir uns freuen, wenn Sie sie auf den neuen Stil aktualisieren! Wir verstehen jedoch, dass dies eine Menge Arbeit sein könnte. Wenn die zu aktualisierenden Informationen nicht zu umfangreich sind und Sie etwas Freizeit haben, versuchen Sie sie auf den neuen Stil zu aktualisieren.

Wenn die Arbeit bedeutender ist, sollten Sie einige Faktoren berücksichtigen, wenn Sie die Arbeit priorisieren:

- Wie veraltet sind die Informationen?
- Wie gering ist die Qualität der Informationen?
- Wie populär ist die Funktion? Wie gefragt sind die Informationen?

Wenn Sie ein Team zusammenstellen möchten, um an einem Update zu arbeiten, oder einfach nur ein inhaltliches Problem melden oder diskutieren möchten, das ein Update benötigt, können Sie gerne ein [Inhaltsproblem melden](https://github.com/mdn/content/issues) oder [uns um Hilfe bitten](/de/docs/MDN/Community/Communication_channels).

## Der Front-Matter-Schlüssel "page-type"

Wir haben einen Front-Matter-Schlüssel `page-type` definiert, um den Typ der MDN-Seiten eindeutig zu identifizieren. Die unten verlinkten Vorlagen geben an, welche `page-type`-Werte Sie für jeden Seitentyp festlegen sollten.

Für die vollständige Liste der Seitentypen siehe [Der page-type Front-Matter-Schlüssel](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/Page_type_key).

## Seitentemplates

Nachfolgend finden Sie Beispiele für die verschiedenen Seiten, die Sie auf MDN finden, zusammen mit Vorlagen, die zur Erstellung neuer Inhalte basierend auf dem Typ des Inhalts verwendet werden können, den Sie präsentieren werden, einschließlich der folgenden Seiten:

- [API-Landingpage](#api-landingpage)
- [API-Referenzseite](#api-referenzseite)
- [API-Referenz-Unterseite](#api-referenz-unterseite)
- [HTML-Elementreferenzseite](#html-elementreferenzseite)
- [HTML-Attributreferenzseite](#html-attributreferenzseite)
- [SVG-Elementreferenzseite](#svg-elementreferenzseite)
- [CSS-Modulseite](#css-modulseite)
- [CSS-Feature-Referenzseite](#css-feature-referenzseite)
- [HTTP-Header-Referenzseite](#http-header-referenzseite)
- [ARIA-Referenzseite](#aria-referenzseite)
- [Konzeptseite](#konzeptseite)
- [Glossarseite](#glossarseite)
- [Landingpage](#landingpage)
- [Web-Entwicklung lernen Seiten](#web-entwicklung_lernen_seiten)

Jeder Abschnitt enthält Links zu Live-Beispielseiten für diesen Seitentyp.

### API-Landingpage

Eine **{{Glossary("API", "API")}} Landingpage** bietet einen Überblick darüber, was eine bestimmte API macht, sowie Links zur Dokumentation für jede der Schnittstellen, Globalen, Funktionen usw., die von der API angeboten werden. Sie verlinkt nicht direkt auf spezifische Methoden oder Eigenschaften innerhalb der Klassen der API, außer im Kontext des Überblickstextes. Sie ist primär eine _Navigations_Seite, fungiert aber auch als Überblicks-_Referenz_Seite für die API.

Es gibt einige Fälle, in denen mehrere APIs existieren, die eigenständig sind und in ihren eigenen Spezifikationen definiert sind, aber eng verwandt sind und deshalb sinnvollerweise mit einer einzigen API-Landingpage abgedeckt werden können. Zum Beispiel deckt die [Generic Sensor API](https://w3c.github.io/sensors/) allgemeine Sensoranliegen ab, aber spezifischere Anliegen werden in anderen APIs behandelt, wie der [Ambient Light Sensor](https://w3c.github.io/ambient-light/), [Motion Sensor](https://w3c.github.io/motion-sensors/) usw. In solchen Fällen sind viele der übergeordneten Konzepte identisch, sodass es keinen Sinn macht, diese auf mehreren Landingpages zu wiederholen. In solchen Fällen wäre es in Bezug auf Wiederholung und Auffindbarkeit sinnvoller, sie alle unter einer einzigen „Websensors“-Landingpage abzudecken.

#### Beispiel

- [WebVR API](/de/docs/Web/API/WebVR_API)

#### Templates

- [API-Landingpage-Template](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_landing_page_template)

### API-Referenzseite

> [!NOTE]
> Auch bekannt als _Interface-Landingpage_.

Eine **API-Referenzseite** listet alle Methoden, Eigenschaften, Ereignisse usw. auf, die Mitglieder einer bestimmten Schnittstelle oder Klasse sind. Sie gibt einen Überblick darüber, was die Klasse oder Schnittstelle macht oder wofür sie verwendet wird, und bietet Links zur Dokumentation für jedes dieser Mitglieder. Sie ist granularer als eine API-Landingpage, die typischerweise auf mehrere API-Referenzseiten verweist.

#### Beispiel

- [Request-Schnittstelle](/de/docs/Web/API/Request) der [Fetch API](/de/docs/Web/API/Fetch_API).

#### Templates

- [API-Referenzseite-Template](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_reference_page_template)

### API-Referenz-Unterseite

Eine **API-Referenz-Unterseite** ist ein Kind einer API-Referenzseite. Sie dokumentiert ein einzelnes Schnitstellenmitglied im Detail.

#### Beispiele

- [`count()`-Methode](/de/docs/Web/API/IDBIndex/count) der [IDBIndex](/de/docs/Web/API/IDBIndex) Schnittstelle (Teil der [IndexedDB API](/de/docs/Web/API/IndexedDB_API))
- [capabilities-Eigenschaft](/de/docs/Web/API/VRDisplay/capabilities) der [VRDisplay](/de/docs/Web/API/VRDisplay) Schnittstelle (Teil der [WebVR API](/de/docs/Web/API/WebVR_API))
- [Request()-Konstruktor](/de/docs/Web/API/Request/Request) der [Request](/de/docs/Web/API/Request) Schnittstelle (Teil der [Fetch API](/de/docs/Web/API/Fetch_API))
- [vrdisplaypresentchange-Ereignis](/de/docs/Web/API/Window/vrdisplaypresentchange_event) (Teil der [WebVR API](/de/docs/Web/API/WebVR_API), hängt von der [Window](/de/docs/Web/API/Window) Schnittstelle ab)

#### Templates

- [API-Methode-Unterseite-Template](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_method_subpage_template)
- [API-Eigenschaft-Unterseite-Template](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_property_subpage_template)
- [API-Konstruktor-Unterseite-Template](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_constructor_subpage_template)
- [API-Ereignis-Unterseite-Template](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_event_subpage_template)

### HTML-Elementreferenzseite

Eine **HTML-Referenzseite** listet alle Attribute auf, die auf ein HTML-Element anwendbar sind, erklärt den Zweck und die Verwendung des Elements und bietet Beispiele, Browser-Kompatibilitätsinformationen und andere wichtige Daten.

#### Beispiel

- [`<video>`-Element](/de/docs/Web/HTML/Reference/Elements/video)

#### Templates

- [HTML-Element-Template](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/HTML_element_page_template)

### HTML-Attributreferenzseite

Eine HTML-Attributseite listet alle Werte auf, die auf ein HTML-Attribut existieren, erklärt den Zweck und die Anwendungsfälle des Attributs, bietet Beispiele, Browser-Kompatibilitätsinformationen und andere wichtige Daten.

> [!NOTE]
> Element-spezifische Attribute (z.B. `placeholder` für `<input>`) benötigen keine separate Seite, wenn die Attribute ausreichend innerhalb der Referenzseite des übergeordneten Elements abgedeckt werden können (z.B. sollte das `placeholder`-Attribut auf der Seite des `<input>`-Elements und nicht als eigenständige Seite behandelt werden).

#### Beispiel

- [`class`-Attribut](/de/docs/Web/HTML/Reference/Global_attributes/class)

#### Templates

- [HTML-Attributseite-Template](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/HTML_attribute_page_template)

### SVG-Elementreferenzseite

Eine **SVG-Referenzseite** listet alle Attribute auf, die auf ein SVG-Element anwendbar sind, erklärt den Zweck und die Verwendung des Elements und bietet Beispiele, Browser-Kompatibilitätsinformationen und andere wichtige Daten.

#### Beispiel

- [\<g>-Element](/de/docs/Web/SVG/Reference/Element/g)

#### Templates

- [SVG-Elementseite-Template](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/SVG_element_page_template)

### CSS-Modulseite

Jedes **[CSS](/de/docs/Web/CSS) Modul** stellt eine CSS-Spezifikation dar, die Unterstützung für bestimmte Features und Implementierungen in CSS bietet. Zum Beispiel repräsentiert das [CSS-Boxmodell](/de/docs/Web/CSS/Guides/Box_model) Modul die [Spezifikation](/de/docs/Web/CSS/Guides/Box_model#specifications), die die Margin- und Padding-Eigenschaften beschreibt, die es ermöglichen, Abstände innerhalb und um eine CSS-Box zu erstellen.

Eine **CSS-Modulseite** bietet einen Überblick über die Features, die das Modul bietet, und listet alle Eigenschaften, Datentypen, CSS-Funktionen usw. auf, die das Modul bietet. Wenn möglich, bietet die CSS-Modulseite eine schnelle Demonstration dessen, was mit den Eigenschaften des Moduls erreicht werden kann, durch ein interaktives Beispiel. Die Modulseite dient hauptsächlich als _Navigations_Seite, fungiert aber auch als Überblicks-_Referenz_Seite für das Modul.

Einige verwandte Eigenschaften und Features, die in andere Module gehören, aber eng mit der Funktionalität des von Ihnen dokumentierten Moduls verwandt sind, können auch in einem Abschnitt _Verwandte Konzepte_ behandelt werden. Zum Beispiel sind der `<easing-function>` Datentyp und die `prefers-reduced-motion` Media Query nicht im CSS-Animationen-Modul abgedeckt, aber da sie eng mit CSS-Animationen verwandt sind, ist es eine gute Idee, sie im Abschnitt [Verwandte Konzepte](/de/docs/Web/CSS/Guides/Animations#related_concepts) der CSS-Animationen-Modulseite hervorzuheben.

#### Beispiele

- [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations)
- [CSS-Benutzeroberfläche](/de/docs/Web/CSS/Guides/Basic_user_interface)
- [CSS-Filtereffekte](/de/docs/Web/CSS/Guides/Filter_effects)
- [CSS-Scroll-Snap](/de/docs/Web/CSS/Guides/Scroll_snap)

#### Templates

- [CSS-Modulseite-Template](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/CSS_module_page_template)

### CSS-Feature-Referenzseite

Eine **CSS-Referenzseite** listet alle verfügbaren Syntaxen für ein CSS-Feature wie einen Selektor oder eine Eigenschaft auf und erklärt den Zweck und die Verwendung des Features. Sie bietet auch Beispiele, Browser-Kompatibilitätsinformationen und andere wichtige Daten.

#### Beispiele

- {{cssxref("background-color")}} Eigenschaft
- {{cssxref(":hover")}} Pseudo-Klasse
- {{cssxref("@media")}} At-Regel

#### Templates

- [CSS-Eigenschaft-Template](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/CSS_property_page_template)
- [CSS-Selektor-Template](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/CSS_selector_page_template)
- [CSS-Funktions-Template](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/CSS_function_page_template)

### HTTP-Header-Referenzseite

Eine **HTTP-Header-Referenzseite** listet alle verfügbaren Direktiven auf, die ein HTTP-Header enthalten kann, und erklärt den Zweck und die Nutzung des Headers. Sie bietet auch Beispiele, Browser-Kompatibilitätsinformationen und andere wichtige Erklärungen.

#### Beispiel

- [Cache-Control-Header](/de/docs/Web/HTTP/Reference/Headers/Cache-Control)

#### Templates

- [HTTP-Header-Seite-Template](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/HTTP_header_page_template)

### ARIA-Referenzseite

Eine **ARIA-Referenzseite** beschreibt eine [Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles) oder ein [Attribut](/de/docs/Web/Accessibility/ARIA/Reference/Attributes), das Möglichkeiten definiert, um Webinhalte und Webanwendungen für Menschen mit Behinderungen zugänglicher zu machen.

#### Beispiele

- [`aria-busy`-Attribut](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-busy)
- [`application`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/application_role)

#### Templates

- [ARIA-Seite-Template](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/ARIA_Page_Template)

### Konzeptseite

Eine **Konzeptseite** ist eine _Leitfaden_-Seite, die etwas erklärt oder lehrt. Im Allgemeinen, wenn eine Seite hauptsächlich Prosa enthält und nicht in einen anderen Seitentyp fällt, ist es wahrscheinlich eine Konzeptseite. Eine ausführliche Diskussion eines Themas könnte über mehrere Konzeptseiten verteilt sein und mit Hilfe von [Nächste](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/previous_menu_next.rs) und [Vorherige](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/previous_menu_next.rs) Makros verbunden werden.

#### Beispiele

- [Verwendung der WebVR API](/de/docs/Web/API/WebVR_API/Using_the_WebVR_API)
- [Visualisierungen mit Web Audio API](/de/docs/Web/API/Web_Audio_API/Visualizations_with_Web_Audio_API)
- [Konflikte handhaben](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)

### Glossarseite

Eine **Glossarseite** enthält eine kurze Erklärung eines Begriffs, Themas oder Konzepts. Der erste Absatz sollte eine einfache, in sich geschlossene Beschreibung des Begriffs sein, nicht länger als ein paar Sätze. Dies kann durch Links zu weiterführenden Informationen im Abschnitt **Siehe auch** ergänzt werden. Wenn die Seite mehr als eine Bildschirmseite lang wird, ist sie zu lang und sollte in eine Konzeptseite umgewandelt werden. Siehe [Anleitung zur Erstellung und Referenzierung eines Eintrags im Glossar](/de/docs/MDN/Writing_guidelines/Howto/Write_a_new_entry_in_the_glossary) für weitere Details.

#### Beispiele

- {{Glossary("DOM", "DOM")}}
- {{Glossary("Exception", "Ausnahme")}}
- {{Glossary("Hyperlink", "Hyperlink")}}

#### Templates

- [Glossarseite-Template](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/Glossary_page_template)

### Landingpage

Eine **Landingpage** dient als ein Menü, gewissermaßen, für ihre Unterseiten, und ist deshalb hauptsächlich eine _Navigations_Seite. Ein Landingpage-Layout wird typischerweise für die Hauptseite eines Baums von Seiten zu einem bestimmten Thema verwendet. Sie beginnt mit einer kurzen Zusammenfassung des Themas, gefolgt von einer strukturierten Liste von Links zu ihren Unterseiten und optionalem zusätzlichen Material, das für den Leser nützlich sein könnte.

Die Liste der Unterseiten kann automatisch mit der [`SubpagesWithSummaries`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/subpages_with_summaries.rs) Vorlage generiert werden. In komplexeren Fällen muss die Liste jedoch möglicherweise von Hand erstellt (und gepflegt) werden.

### Web-Entwicklung lernen Seiten

Der Abschnitt [Web-Entwicklung lernen](/de/docs/Learn_web_development) von MDN richtet sich speziell an Personen, die die grundlegenden Grundlagen der Webentwicklung erlernen, und erfordert daher einen anderen Ansatz als der Rest der MDN-Inhalte. Sie können weitere Richtlinien bei den [Schreibrichtlinien für das Lernen von Webentwicklung](/de/docs/MDN/Writing_guidelines/Learning_content) finden.

Es gibt nur einige wenige Arten von Seiten innerhalb des Web-Entwicklung lernen:

- **Module-Gruppen-Landingpage**, zum Beispiel [Kern-Lernmodule](/de/docs/Learn_web_development/Core)
  - : Diese enthalten einen Einführungsabschnitt, einen Abschnitt, der die Voraussetzungen detailliert beschreibt, die Sie haben sollten, bevor Sie die Modulgruppe starten, und eine Liste der Module, gefolgt von einer optionalen Liste von „Siehe auch“-Links.
- **Module-Landingpage**, zum Beispiel [Strukturieren von Inhalten mit HTML](/de/docs/Learn_web_development/Core/Structuring_content)
  - : Diese enthalten einen Einführungsabschnitt, einen Abschnitt, der die Voraussetzungen detailliert beschreibt, die Sie haben sollten, bevor Sie das Modul starten, und eine Liste der enthaltenen Tutorials, gefolgt von einer optionalen Liste von „Zusätzlichen Tutorials“, die verwandt sind, aber nicht Teil des zentralen Lernweges sind, und einer optionalen Liste von „Siehe auch“-Links.
- **Tutorialseite**, zum Beispiel [Grundlegende HTML-Syntax](/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax)
  - : Die Struktur eines Lern-Tutorials ist nicht strikt, aber es muss eine praktische Lernerfahrung bieten (siehe [Schreibrichtlinien für das Lernen von Webentwicklung > Ansatz](/de/docs/MDN/Writing_guidelines/Learning_content#approach)), es muss eine Liste von „Voraussetzungen“ und „Lernzielen“ am Anfang enthalten, und der Inhalt muss die angegebenen Lernziele vermitteln.

### Beispiele

- [HTML](/de/docs/Web/HTML)
- [CSS](/de/docs/Web/CSS)
- [Web APIs](/de/docs/Web/API)
- [JavaScript](/de/docs/Web/JavaScript)
- [Web-Entwicklung lernen](/de/docs/Learn_web_development)
- [Community-Ressourcen](/de/docs/MDN/Community)

## Siehe auch

- [Seitenkomponenten](/de/docs/MDN/Writing_guidelines/Writing_style_guide#page_components)
- [Erstellen von Codebeispielen in Markdown](/de/docs/MDN/Writing_guidelines/Code_style_guide)
