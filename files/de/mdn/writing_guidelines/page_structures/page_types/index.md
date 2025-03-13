---
title: Seitentypen
slug: MDN/Writing_guidelines/Page_structures/Page_types
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

Es gibt eine Anzahl von Seitentypen, die auf MDN wiederholt verwendet werden. Dieser Artikel beschreibt diese Seitentypen, ihren Zweck und gibt Beispiele für jeden sowie Vorlagen zur Erstellung einer neuen Seite.

Es gibt drei Hauptkategorien von Seitentypen auf MDN, obwohl einige Seitentypen in mehr als eine Kategorie fallen.

- **Referenzseiten** beschreiben die Details von etwas und sind entsprechend der Struktur des beschriebenen Objekts organisiert.
- **Leitfaden**-Seiten erklären, wie man etwas tut oder benutzt, und sind basierend auf den Zielen des Lesers organisiert.
- **Navigationsseiten** existieren hauptsächlich, um Links zu anderen Seiten bereitzustellen, normalerweise zu verwandten Themen.

## Erstellen einer neuen Seite

Um neue Seiten auf MDN zu erstellen, müssen Sie GitHub verwenden — sehen Sie sich unseren Abschnitt [content repo](https://github.com/mdn/content) über das [Hinzufügen eines neuen Dokuments](https://github.com/mdn/content/blob/main/CONTRIBUTING.md#adding-a-new-document) für weitere Anweisungen an.

## Verwendung der Vorlagen

Wenn Sie eine neue Seite erstellen, können Sie sicherstellen, dass Sie die richtige Seitenstruktur/-inhalte verwendet haben, indem Sie auf eine unserer Seitenvorlagen zurückgreifen — siehe die Abschnitte unten. Sie können den genauen Quellcode jeder Vorlage finden (falls Sie ihn kopieren möchten), indem Sie dem "Source on **GitHub**"-Link am Ende jeder Vorlage folgen. Diese Seitenvorlagen machen als veröffentlichte Seiten wenig Sinn, aber wenn Sie ihren Quellcode anschauen, werden Sie sehen, dass sie viele hilfreiche Kommentare, Platzhalter und Hinweise enthalten, die detaillieren, wie man die fehlenden Informationen einfügt und Ihre Seite erstellt.

Am Anfang jeder Vorlage finden Sie einen Abschnitt mit dem Titel _Remove before publishing_ — dieser enthält Informationen darüber, wie man den Seitentitel, Slug, das Seitenleistenmenü und Tags ausfüllt (z. B. Informationen, die nicht tatsächlich im Textkörper des Artikels erscheinen). Sie müssen diesen Abschnitt löschen, nachdem Sie die Anweisungen darin befolgt haben, bevor die Seite als fertig angesehen werden kann.

## Alte Seitendesigns

Manchmal stoßen Sie auf alte Referenzseiten, die sich deutlich von den hier vorgestellten Vorlagen unterscheiden. Zum Beispiel hatten alte Schnittstellenseiten alle Mitgliederdetails einer Schnittstelle auf einer einzigen Seite, und einzelne Methoden-/Eigenschafts-/Konstruktor-/Ereignislistenerseiten existierten nicht.

Wenn Sie auf einen alten Satz von Seiten stoßen, würden wir uns freuen, wenn Sie sie auf das neue Stil aktualisieren! Wir wissen jedoch, dass dies eine große Menge Arbeit sein kann. Wenn die zu aktualisierende Information nicht zu umfangreich ist und Sie etwas Freizeit haben, versuchen Sie gerne, sie auf den neuen Stil zu aktualisieren.

Wenn die Arbeit umfangreicher ist, sollten Sie einige Faktoren bei der Priorisierung der Arbeit berücksichtigen:

- Wie veraltet ist die Information?
- Wie niedrig ist die Qualität der Information?
- Wie populär ist das Feature? Wie gefragt ist die Information?

Wenn Sie ein Team zusammenstellen möchten, um an einem Update zu arbeiten, oder wenn Sie nur einige Inhalte melden oder besprechen möchten, die ein Update benötigen, zögern Sie nicht, ein [Inhaltsproblem zu melden](https://github.com/mdn/content/issues) oder [uns um Hilfe zu bitten](/de/docs/MDN/Community/Communication_channels).

## Der Front-Matter-Schlüssel für den Seitentyp

Wir haben einen Front-Matter-Schlüssel `page-type` definiert, um den Typ der MDN-Seiten klar zu identifizieren. Die unten verlinkten Vorlagen geben an, welche `page-type`-Werte Sie für jeden Seitentyp festlegen sollten.

Für die vollständige Liste der Seitentypen siehe [Der Front-Matter-Schlüssel für den Seitentyp](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/Page_type_key).

## Seitenvorlagen

Unten finden Sie Beispiele der verschiedenen Seiten, die Sie auf MDN finden, zusammen mit Vorlagen, die zum Erstellen neuer Inhalte basierend auf dem Typ der präsentierten Inhalte verwendet werden können, einschließlich der folgenden Seiten:

- [API-Startseiten](#api-startseite)
- [API-Referenzseite](#api-referenzseite)
- [API-Referenzunterseite](#api-referenzunterseite)
- [Konzeptuelle Seiten](#konzeptuelle_seite)
- [CSS-Feature-Referenz](#css-feature-referenzseite)
- [CSS-Modul-Startseite](#css-modul-startseite)
- [Glossareintrag](#glossarseite)
- [HTML-Element](#html-element-referenzseite)
- [HTTP-Header](#http-header-referenzseite)
- [Startseite](#startseite)
- [SVG-Element](#svg-element-referenzseite)
- [Lernen-Webentwicklung-Seiten](#lernen-webentwicklung-seiten)

Jeder Abschnitt enthält Links zu Live-Beispielseiten für diesen Seitentyp.

### API-Startseite

Eine **{{Glossary("API", "API-Startseite")}}** bietet einen Überblick darüber, was eine bestimmte API tut, sowie Links zur Dokumentation für jede der Schnittstellen, globalen Objekte, Funktionen usw., die von der API angeboten werden. Sie verlinkt nicht direkt auf spezifische Methoden oder Eigenschaften innerhalb der Klassen der API, außer im Kontext des Überblicktexts. Sie ist primär eine _Navigationsseite_, hat jedoch auch die Funktion einer Überblicks-_Referenzseite_ für die API.

Es gibt einige Fälle, in denen mehrere APIs existieren, die eigenständig und in ihren eigenen Spezifikationen definiert sind, aber eng verwandt sind und daher sinnvoll mit einer einzigen API-Startseite abgedeckt werden könnten. Zum Beispiel deckt die [Generic Sensor API](https://www.w3.org/TR/generic-sensor/) allgemeine Sensoranliegen ab, aber spezifischere Anliegen werden in anderen APIs wie der [Ambient Light Sensor](https://www.w3.org/TR/ambient-light/), [Motion Sensor](https://www.w3.org/TR/motion-sensors/) usw. behandelt. In solchen Fällen sind viele der hochrangigen Konzepte gleich, sodass es keinen Sinn macht, diese über mehrere Startseiten hinweg zu wiederholen. In einem solchen Fall wäre es im Hinblick auf Wiederholungen und Auffindbarkeit sinnvoller, alle unter einer einzigen "Web-Sensoren"-Startseite abzudecken.

#### Beispiel

- [WebVR API](/de/docs/Web/API/WebVR_API)

#### Vorlagen

- [API-Startseitenvorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_landing_page_template)

### API-Referenzseite

> [!NOTE]
> Auch bekannt als _Interface-Startseite_.

Eine **API-Referenzseite** listet alle Methoden, Eigenschaften, Ereignisse usw. auf, die Mitglieder einer bestimmten Schnittstelle oder Klasse sind. Sie bietet einen Überblick darüber, wofür die Klasse oder Schnittstelle verwendet wird und verlinkt zur Dokumentation für jedes dieser Mitglieder. Sie ist detaillierter als eine API-Startseite, die typischerweise Verweise auf mehrere API-Referenzseiten enthält.

#### Beispiel

- [Request-Schnittstelle](/de/docs/Web/API/Request) der [Fetch API](/de/docs/Web/API/Fetch_API).

#### Vorlagen

- [API-Referenzseitenvorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_reference_page_template)

### API-Referenzunterseite

Eine **API-Referenzunterseite** ist ein Kind einer API-Referenzseite. Sie dokumentiert ein einzelnes Mitglied einer Schnittstelle im Detail.

#### Beispiele

- [`count()`-Methode](/de/docs/Web/API/IDBIndex/count) der Schnittstelle [IDBIndex](/de/docs/Web/API/IDBIndex) (Teil der [IndexedDB API](/de/docs/Web/API/IndexedDB_API))
- [Eigenschaft `capabilities`](/de/docs/Web/API/VRDisplay/capabilities) der Schnittstelle [VRDisplay](/de/docs/Web/API/VRDisplay) (Teil der [WebVR API](/de/docs/Web/API/WebVR_API))
- [Konstruktor `Request()`](/de/docs/Web/API/Request/Request) der Schnittstelle [Request](/de/docs/Web/API/Request) (Teil der [Fetch API](/de/docs/Web/API/Fetch_API))
- [Ereignis `vrdisplaypresentchange`](/de/docs/Web/API/Window/vrdisplaypresentchange_event) (Teil der [WebVR API](/de/docs/Web/API/WebVR_API), hängt von der [Window](/de/docs/Web/API/Window)-Schnittstelle ab)

#### Vorlagen

- [API-Methodenunterseitenvorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_method_subpage_template)
- [API-Eigenschaftenunterseitenvorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_property_subpage_template)
- [API-Konstruktorunterseitenvorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_constructor_subpage_template)
- [API-Ereignisunterseitenvorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_event_subpage_template)

### HTML-Element-Referenzseite

Eine **HTML-Referenzseite** listet alle Attribute auf, die für ein HTML-Element verfügbar sind, erklärt den Zweck und die Verwendung des Elements und bietet Beispiele, Browser-Kompatibilitätsinformationen und andere wichtige Daten.

#### Beispiel

- [`<video>`-Element](/de/docs/Web/HTML/Element/video)

#### Vorlagen

- [HTML-Elementseitenschablone](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/HTML_element_page_template)

### SVG-Element-Referenzseite

Eine **SVG-Referenzseite** listet alle Attribute auf, die für ein SVG-Element verfügbar sind, erklärt den Zweck und die Verwendung des Elements und bietet Beispiele, Browser-Kompatibilitätsinformationen und weitere wichtige Daten.

#### Beispiel

- [\<g>-Element](/de/docs/Web/SVG/Element/g)

#### Vorlagen

- [SVG-Elementseitenschablone](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/SVG_element_page_template)

### CSS-Modul-Startseite

Jedes **[CSS](/de/docs/Web/CSS)-Modul** stellt eine CSS-Spezifikation dar, die Unterstützung für bestimmte Funktionen und Implementierungen in CSS bietet. Zum Beispiel repräsentiert das [CSS-Boxmodell](/de/docs/Web/CSS/CSS_box_model)-Modul die [Spezifikation](/de/docs/Web/CSS/CSS_box_model#specifications), die die Margin- und Padding-Eigenschaften beschreibt, mit denen Sie Abstände in und um ein CSS-Feld erstellen können.

Eine **CSS-Modul-Startseite** bietet einen Überblick über die Funktionen, die das Modul bietet, und listet alle Eigenschaften, Datentypen, CSS-Funktionen usw. auf, die das Modul bietet. Wenn möglich, bietet die CSS-Modul-Startseite eine kurze Demonstration dessen, was mit den Eigenschaften des Moduls erreicht werden kann, durch ein interaktives Beispiel. Die Modul-Startseite dient primär als _Navigationsseite_, hat jedoch auch die Funktion einer Überblicks-_Referenzseite_ für das Modul.

Einige verwandte Eigenschaften und Funktionen, die in andere Module gehören, aber eng mit den vom zu dokumentierenden Modul angebotenen Funktionen zusammenhängen, können ebenfalls in einem Abschnitt _Zugehörige Konzepte_ behandelt werden. Zum Beispiel sind der Datentyp `<easing-function>` und die Medienabfrage `prefers-reduced-motion` nicht im CSS-Animationsmodul enthalten, aber da sie eng mit CSS-Animationen zusammenhängen, ist es eine gute Idee, sie im Abschnitt [Zugehörige Konzepte](/de/docs/Web/CSS/CSS_animations#related_concepts) der CSS-Animationsmodul-Startseite hervorzuheben.

#### Beispiele

- [CSS-Animationen](/de/docs/Web/CSS/CSS_animations)
- [CSS-Benutzeroberfläche](/de/docs/Web/CSS/CSS_basic_user_interface)
- [CSS-Filtereffekte](/de/docs/Web/CSS/CSS_filter_effects)
- [CSS-Scroll-Snap](/de/docs/Web/CSS/CSS_scroll_snap)

#### Vorlagen

- [CSS-Modul-Startseitenschablone](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/CSS_module_landing_page_template)

### CSS-Feature-Referenzseite

Eine **CSS-Referenzseite** listet die gesamte verfügbare Syntax für ein CSS-Feature wie einen Selektor oder eine Eigenschaft auf und erklärt den Zweck und die Verwendung des Features. Sie bietet auch Beispiele, Browser-Kompatibilitätsinformationen und andere wichtige Daten.

#### Beispiele

- [`background-color`-Eigenschaft](/de/docs/Web/CSS/background-color)
- [`:hover`-Pseudo-Klasse](/de/docs/Web/CSS/:hover)
- [`@media`-At-Regel](/de/docs/Web/CSS/@media)

#### Vorlagen

- [CSS-Eigenschaftsseitenschablone](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/CSS_property_page_template)
- [CSS-Selektorseitenschablone](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/CSS_selector_page_template)
- [CSS-Funktionsseitenschablone](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/CSS_function_page_template)

### HTTP-Header-Referenzseite

Eine **HTTP-Header-Referenzseite** listet alle verfügbaren Direktiven auf, die ein HTTP-Header enthalten kann, und erklärt den Zweck und die Verwendung des Headers. Sie bietet auch Beispiele, Browser-Kompatibilitätsinformationen und andere wichtige Erklärungen.

#### Beispiel

- [Cache-Control-Header](/de/docs/Web/HTTP/Reference/Headers/Cache-Control)

#### Vorlagen

- [HTTP-Header-Seitenschablone](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/HTTP_header_page_template)

### Konzeptuelle Seite

Eine **konzeptuelle Seite** ist eine _Leitfaden_-Seite, die etwas erklärt oder lehrt. Allgemein gesagt, wenn eine Seite hauptsächlich Text enthält und nicht in einen anderen Seitentyp fällt, ist es wahrscheinlich eine Konzeptseite. Eine ausführliche Diskussion eines Themas kann sich über mehrere konzeptuelle Seiten erstrecken, die mit den [Next](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/previous_menu_next.rs) und [Previous](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/previous_menu_next.rs) Makros verlinkt sind.

#### Beispiele

- [Verwendung der WebVR API](/de/docs/Web/API/WebVR_API/Using_the_WebVR_API)
- [Visualisierungen mit der Web Audio API](/de/docs/Web/API/Web_Audio_API/Visualizations_with_Web_Audio_API)
- [Konflikte verwalten](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)

### Glossarseite

Eine **Glossarseite** enthält eine kurze Erklärung eines Begriffs, Themas oder Konzepts. Der erste Absatz sollte eine einfache, in sich geschlossene Beschreibung des Begriffs sein, nicht mehr als ein paar Sätze. Dies kann durch Links zu weiteren Informationen im Abschnitt **Siehe auch** ergänzt werden. Wenn die Seite länger als ein Bildschirm wird, ist sie zu lang und sollte in eine Konzeptseite umgewandelt werden. Weitere Details finden Sie unter [Anleitung zur Erstellung und Verweise einer neuen Glossareintragung](/de/docs/MDN/Writing_guidelines/Howto/Write_a_new_entry_in_the_glossary).

#### Beispiele

- {{Glossary("DOM", "DOM")}}
- {{Glossary("Exception", "Ausnahme")}}
- {{Glossary("Hyperlink", "Hyperlink")}}

#### Vorlagen

- [Glossarseitenschablone](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/Glossary_page_template)

### Startseite

Eine **Startseite** dient als eine Art Menü für ihre Unterseiten und ist daher primär eine _Navigationsseite_. Ein Startseitenlayout wird typischerweise für die Root-Seite eines Baums von Seiten über ein bestimmtes Thema verwendet. Sie beginnt mit einer kurzen Zusammenfassung des Themas, gefolgt von einer strukturierten Liste von Links zu ihren Unterseiten und optional zusätzlichen Material, das für den Leser nützlich sein kann.

Die Liste der Unterseiten kann automatisch mit der [`SubpagesWithSummaries`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/subpages_with_summaries.rs)-Vorlage generiert werden. In komplexeren Fällen muss die Liste jedoch manuell erstellt (und gepflegt) werden.

### Lernen-Webentwicklung-Seiten

Der Abschnitt [Lernen-Webentwicklung](/de/docs/Learn_web_development) von MDN richtet sich speziell an Personen, die die grundlegenden Grundlagen der Webentwicklung erlernen, und erfordert daher einen anderen Ansatz als der Rest der Inhalte von MDN. Weitere Richtlinien finden Sie unter [Schreibrichtlinien für Lernen-Webentwicklung](/de/docs/MDN/Writing_guidelines/Learning_content).

Es gibt nur wenige Seitentypen innerhalb von Lernen-Webentwicklung:

- **Modulgruppen-Startseite**, zum Beispiel [Core-Lernmodule](/de/docs/Learn_web_development/Core)
  - : Diese enthalten einen Einleitungsabschnitt, einen Abschnitt, der die Voraussetzungen für den Start der Modulgruppe beschreibt, und eine Liste der Module, gefolgt von einer optionalen Liste von "Siehe auch"-Links.
- **Modul-Startseite**, zum Beispiel [Inhalte mit HTML strukturieren](/de/docs/Learn_web_development/Core/Structuring_content)
  - : Diese enthalten einen Einleitungsabschnitt, einen Abschnitt, der die Voraussetzungen für den Start des Moduls beschreibt, und eine Liste der enthaltenen Tutorials, gefolgt von einer optionalen Liste von "Zusätzlichen Tutorials", die verwandt, aber nicht Teil des zentralen Lernpfads sind, und einer optionalen Liste von "Siehe auch"-Links.
- **Tutorial-Seite**, zum Beispiel [Grundlegende HTML-Syntax](/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax)
  - : Die Struktur eines Lernen-Tutorials ist nicht strikt, aber es muss eine praktische Lernerfahrung bieten (siehe [Schreibrichtlinien für Lernen-Webentwicklung > Ansatz](/de/docs/MDN/Writing_guidelines/Learning_content#approach)), es muss eine Liste von "Voraussetzungen" und "Lernzielen" oben enthalten, und der Inhalt muss die angegebenen Lernziele unterrichten.

### Beispiele

- [HTML](/de/docs/Web/HTML)
- [CSS](/de/docs/Web/CSS)
- [Web APIs](/de/docs/Web/API)
- [JavaScript](/de/docs/Web/JavaScript)
- [Lernen-Webentwicklung](/de/docs/Learn_web_development)
- [Community-Ressourcen](/de/docs/MDN/Community)

## Siehe auch

- [Seitenelemente](/de/docs/MDN/Writing_guidelines/Writing_style_guide#page_components)
- [Erstellen von Codebeispielen in Markdown](/de/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide)
