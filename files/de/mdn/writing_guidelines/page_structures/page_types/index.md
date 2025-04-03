---
title: Seitentypen
slug: MDN/Writing_guidelines/Page_structures/Page_types
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

Es gibt eine Vielzahl von Seitentypen, die auf MDN wiederholt verwendet werden. Dieser Artikel beschreibt diese Seitentypen, ihre Zwecke und gibt Beispiele sowie Vorlagen zum Erstellen einer neuen Seite.

Es gibt drei allgemeine Kategorien von Seitentypen auf MDN, obwohl einige Seitentypen in mehr als eine Kategorie fallen können.

- **Referenz**-Seiten beschreiben die Details von etwas und sind entsprechend der Struktur des beschriebenen Objekts organisiert.
- **Leitfaden**-Seiten beschreiben, wie man etwas tut oder nutzt und sind basierend auf den Zielen des Lesers organisiert.
- **Navigations**-Seiten existieren hauptsächlich, um Links zu anderen Seiten bereitzustellen, in der Regel über verwandte Themen.

## Eine neue Seite erstellen

Um neue Seiten auf MDN zu erstellen, müssen Sie GitHub verwenden — werfen Sie einen Blick auf unseren [Content-Repo](https://github.com/mdn/content) Abschnitt über das [Hinzufügen eines neuen Dokuments](https://github.com/mdn/content/blob/main/CONTRIBUTING.md#adding-a-new-document) für weitere Anweisungen.

## Wie man die Vorlagen verwendet

Wenn Sie eine neue Seite erstellen, können Sie sicherstellen, dass Sie die richtige Seitenstruktur/Inhalte verwendet haben, indem Sie eine unserer Seitentemplates konsultieren — siehe die Abschnitte unten. Sie können den genauen Quellcode jeder Vorlage (wenn Sie ihn kopieren möchten) durch Folgen des Links "Source on **GitHub**" am Ende jeder Seite finden. Diese Seitentemplates machen als veröffentlichte Seiten wenig Sinn, aber wenn Sie ihren Quellcode ansehen, werden Sie sehen, dass sie viele hilfreiche Kommentare, Platzhalter und Hinweise enthalten, die detaillieren, wie man die fehlenden Informationen ausfüllt und Ihre Seite erstellt.

Am Anfang jeder Vorlage finden Sie einen Abschnitt mit dem Titel _Remove before publishing_ — dieser enthält Informationen darüber, wie Sie den Seitentitel, Slug, die Seitenleisten-Menü und Tags ausfüllen (z.B. Informationen, die eigentlich nicht im Hauptteil des Artikels erscheinen). Sie müssen diesen Abschnitt löschen, nachdem Sie die Anweisungen befolgt haben, bevor die Seite als fertig angesehen werden kann.

## Alte Seitenlayouts

Manchmal stoßen Sie auf alte, stilisierte Referenzseiten, die deutlich anders aussehen als die hier vorgestellten Vorlagen. Beispielsweise hatten alte Interface-Seiten alle Mitgliederdetails eines Interface auf einer einzigen Seite, und individuelle Methoden/Eigenschaften/Konstruktor/Ereignislistener-Seiten existierten nicht.

Wenn Sie auf ein altes Set von Seiten stoßen, würden wir uns freuen, wenn Sie diese auf den neuen Stil aktualisieren! Wir schätzen jedoch, dass dies eine Menge Arbeit sein könnte. Wenn die Informationen zum Aktualisieren nicht zu umfangreich sind und Sie etwas freie Zeit haben, versuchen Sie unbedingt, diese auf den neuen Stil zu aktualisieren.

Wenn die Arbeit umfangreicher ist, sollten Sie einige Faktoren berücksichtigen, wenn Sie die Arbeit priorisieren:

- Wie veraltet sind die Informationen?
- Wie minderwertig sind die Informationen?
- Wie beliebt ist das Feature? Wie sehr wird nach den Informationen gefragt?

Wenn Sie ein Team zusammenstellen möchten, um an einem Update zu arbeiten, oder einige Inhalte melden oder diskutieren möchten, die ein Update benötigen, zögern Sie nicht, ein [Content-Issue einzureichen](https://github.com/mdn/content/issues) oder [uns um Hilfe zu bitten](/de/docs/MDN/Community/Communication_channels).

## Der Schlüssel für Seitentypen im Frontmatter

Wir haben einen Frontmatter-Schlüssel `page-type` definiert, um den Typ von MDN-Seiten klar zu identifizieren. Die unten verlinkten Vorlagen geben an, welche `page-type`-Werte Sie für jeden Seitentyp festlegen sollten.

Für die vollständige Liste der Seitentypen siehe [Der Schlüssel für Seitentypen im Frontmatter](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/Page_type_key).

## Vorlagen für Seitentypen

Im Folgenden finden Sie Beispiele für die verschiedenen Seiten, die Sie auf MDN finden, zusammen mit Vorlagen, die verwendet werden können, um neuen Inhalt basierend auf dem Typ des präsentierten Inhalts zu erstellen, einschließlich der folgenden Seiten:

- [API-Startseiten](#api-startseite)
- [API-Referenzseite](#api-referenzseite)
- [API-Referenz-Unterseite](#api-referenz-unterseite)
- [Konzeptuelle Seiten](#konzeptuelle_seite)
- [CSS-Feature-Referenz](#css-feature-referenzseite)
- [CSS-Modul-Startseite](#css-modul-startseite)
- [Glossareintrag](#glossarseite)
- [HTML-Element](#html-element-referenzseite)
- [HTTP-Header](#http-header-referenzseite)
- [Startseite](#startseite)
- [SVG-Element](#svg-element-referenzseite)
- [Webentwicklung lernen Seiten](#lernseiten_zur_webentwicklung)

Jeder Abschnitt enthält Links zu Live-Beispielseiten für diesen Seitentyp.

### API-Startseite

Eine **{{Glossary("API", "API")}}-Startseite** bietet einen Überblick darüber, was eine bestimmte API tut, sowie Links zur Dokumentation für jede der Schnittstellen, globale Funktionen usw., die von der API angeboten werden. Sie verlinkt nicht direkt auf spezifische Methoden oder Eigenschaften innerhalb der Klassen der API, außer im Kontext des Überblickstextes. Es ist primär eine _Navigationsseite_, fungiert aber auch als Überblicks-_Referenzseite_ für die API.

In einigen Fällen gibt es mehrere APIs, die eigenständig sind und in ihren eigenen Spezifikationen definiert sind, aber eng verwandt sind und daher sinnvoll wäre, sie auf einer einzigen API-Startseite abzudecken. Zum Beispiel deckt die [Generic Sensor API](https://www.w3.org/TR/generic-sensor/) allgemeine Sensorbelange ab, aber spezifischere Belange werden in anderen APIs wie [Ambient Light Sensor](https://www.w3.org/TR/ambient-light/), [Motion Sensor](https://www.w3.org/TR/motion-sensors/) usw. behandelt. In solchen Fällen sind viele der hochrangigen Konzepte gleich, sodass es wenig Sinn macht, diese über mehrere Startseiten zu wiederholen. In einem solchen Fall wäre es im Hinblick auf Redundanz und Auffindbarkeit sinnvoller, sie alle unter einer einzigen "Web-Sensoren"-Startseite abzudecken.

#### Beispiel

- [WebVR-API](/de/docs/Web/API/WebVR_API)

#### Vorlagen

- [API-Startseitenvorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_landing_page_template)

### API-Referenzseite

> [!NOTE]
> Auch als _Interface-Startseite_ bekannt.

Eine **API-Referenzseite** listet alle Methoden, Eigenschaften, Ereignisse usw. auf, die Mitglieder einer bestimmten Schnittstelle oder Klasse sind. Sie bietet einen Überblick darüber, was die Klasse oder Schnittstelle tut oder wofür sie verwendet wird, und gibt Links zur Dokumentation für jedes dieser Mitglieder. Sie ist detaillierter als eine API-Startseite, die typischerweise auf mehrere API-Referenzseiten verweist.

#### Beispiel

- [Request-Schnittstelle](/de/docs/Web/API/Request) der [Fetch-API](/de/docs/Web/API/Fetch_API).

#### Vorlagen

- [API-Referenzseitenvorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_reference_page_template)

### API-Referenz-Unterseite

Eine **API-Referenz-Unterseite** ist ein Kind einer API-Referenzseite. Sie dokumentiert ein einzelnes Schnittstellenmitglied im Detail.

#### Beispiele

- [`count()`-Methode](/de/docs/Web/API/IDBIndex/count) der [IDBIndex](/de/docs/Web/API/IDBIndex)-Schnittstelle (Teil der [IndexedDB-API](/de/docs/Web/API/IndexedDB_API))
- [capabilities-Eigenschaft](/de/docs/Web/API/VRDisplay/capabilities) der [VRDisplay](/de/docs/Web/API/VRDisplay)-Schnittstelle (Teil der [WebVR-API](/de/docs/Web/API/WebVR_API))
- [Request()-Konstruktor](/de/docs/Web/API/Request/Request) der [Request](/de/docs/Web/API/Request)-Schnittstelle (Teil der [Fetch-API](/de/docs/Web/API/Fetch_API))
- [vrdisplaypresentchange-Ereignis](/de/docs/Web/API/Window/vrdisplaypresentchange_event) (Teil der [WebVR-API](/de/docs/Web/API/WebVR_API), gehört zur [Window](/de/docs/Web/API/Window) Schnittstelle)

#### Vorlagen

- [API-Methode-Unterseitenvorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_method_subpage_template)
- [API-Eigenschaft-Unterseitenvorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_property_subpage_template)
- [API-Konstruktor-Unterseitenvorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_constructor_subpage_template)
- [API-Ereignis-Unterseitenvorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_event_subpage_template)

### HTML-Element-Referenzseite

Eine **HTML-Referenzseite** listet alle Attribute auf, die für ein HTML-Element verfügbar sind, erklärt den Zweck und die Verwendung des Elements und bietet Beispiele, Informationen zur Browser-Kompatibilität und andere wichtige Daten.

#### Beispiel

- [`<video>`-Element](/de/docs/Web/HTML/Element/video)

#### Vorlagen

- [HTML-Elementseitentemplate](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/HTML_element_page_template)

### SVG-Element-Referenzseite

Eine **SVG-Referenzseite** listet alle Attribute auf, die für ein SVG-Element verfügbar sind, erklärt den Zweck und die Verwendung des Elements und bietet Beispiele, Informationen zur Browser-Kompatibilität und andere wichtige Daten.

#### Beispiel

- [\<g>-Element](/de/docs/Web/SVG/Reference/Element/g)

#### Vorlagen

- [SVG-Elementseitentemplate](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/SVG_element_page_template)

### CSS-Modul-Startseite

Jedes **[CSS](/de/docs/Web/CSS)-Modul** stellt eine CSS-Spezifikation dar, die Unterstützung für bestimmte Funktionen und Implementierungen in CSS bietet. Beispielsweise stellt das [CSS-Boxmodell](/de/docs/Web/CSS/CSS_box_model)-Modul die [Spezifikation](/de/docs/Web/CSS/CSS_box_model#specifications) dar, die die Rand- und Padding-Eigenschaften beschreibt, mit denen Sie in und um ein CSS-Box Abstände erstellen können.

Eine **CSS-Modul-Startseite** bietet einen Überblick über die Funktionen, die das Modul bietet, und listet alle Eigenschaften, Datentypen, CSS-Funktionen usw. auf, die vom Modul angeboten werden. Wenn möglich, bietet die CSS-Modul-Startseite eine kurze Demonstration dessen, was mit den Eigenschaften des Moduls erreicht werden kann, durch ein interaktives Beispiel. Die Modul-Startseite dient primär als _Navigationsseite_, fungiert aber auch als Überblicks-_Referenzseite_ für das Modul.

Einige verwandte Eigenschaften und Funktionen, die zu anderen Modulen gehören, aber eng mit der vom von Ihnen dokumentierten Modul angebotenen Funktionalität zusammenhängen, können auch in einem Abschnitt _Verwandte Konzepte_ behandelt werden. Beispielsweise sind der `<easing-function>`-Datentyp und der `prefers-reduced-motion`-Medienabfrage nicht im CSS-Animationsmodul enthalten, aber da sie eng mit CSS-Animationen zusammenhängen, ist es eine gute Idee, sie im [Verwandte Konzepte](/de/docs/Web/CSS/CSS_animations#related_concepts)-Abschnitt der CSS-Animationsmodul-Startseite hervorzuheben.

#### Beispiele

- [CSS-Animationen](/de/docs/Web/CSS/CSS_animations)
- [CSS-Benutzeroberfläche](/de/docs/Web/CSS/CSS_basic_user_interface)
- [CSS-Filtereffekte](/de/docs/Web/CSS/CSS_filter_effects)
- [CSS-Scroll-Snap](/de/docs/Web/CSS/CSS_scroll_snap)

#### Vorlagen

- [CSS-Modul-Startseitentemplate](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/CSS_module_landing_page_template)

### CSS-Feature-Referenzseite

Eine **CSS-Referenzseite** listet alle verfügbaren Syntaxen für ein CSS-Feature wie einen Selektor oder eine Eigenschaft auf und erklärt den Zweck und die Verwendung des Features. Sie bietet auch Beispiele, Informationen zur Browser-Kompatibilität und andere wichtige Daten.

#### Beispiele

- [`background-color`-Eigenschaft](/de/docs/Web/CSS/background-color)
- [`:hover`-Pseudoklasse](/de/docs/Web/CSS/:hover)
- [`@media`-At-Regel](/de/docs/Web/CSS/@media)

#### Vorlagen

- [CSS-Eigenschaftsseitentemplate](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/CSS_property_page_template)
- [CSS-Selektor-Seitentemplate](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/CSS_selector_page_template)
- [CSS-Funktions-Seitentemplate](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/CSS_function_page_template)

### HTTP-Header-Referenzseite

Eine **HTTP-Header-Referenzseite** listet alle verfügbaren Direktiven auf, die ein HTTP-Header enthalten kann, und erklärt den Zweck und die Verwendung des Headers. Sie bietet auch Beispiele, Informationen zur Browser-Kompatibilität und andere wichtige Erklärungen.

#### Beispiel

- [Cache-Control-Header](/de/docs/Web/HTTP/Reference/Headers/Cache-Control)

#### Vorlagen

- [HTTP-Header-Seitentemplate](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/HTTP_header_page_template)

### Konzeptuelle Seite

Eine **konzeptuelle Seite** ist eine _Leitfaden_-Seite, die etwas erklärt oder lehrt. Im Allgemeinen, wenn eine Seite hauptsächlich Prosa enthält und nicht auf einen anderen Seitentyp fällt, ist es wahrscheinlich eine konzeptuelle Seite. Eine ausführliche Diskussion eines Themas könnte sich über mehrere konzeptuelle Seiten erstrecken und mit [Next](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/previous_menu_next.rs) und [Previous](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/previous_menu_next.rs) Makros verknüpft werden.

#### Beispiele

- [Die WebVR-API verwenden](/de/docs/Web/API/WebVR_API/Using_the_WebVR_API)
- [Visualisierungen mit der Web-Audio-API](/de/docs/Web/API/Web_Audio_API/Visualizations_with_Web_Audio_API)
- [Konflikte handhaben](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)

### Glossarseite

Eine **Glossarseite** enthält eine kurze Erklärung eines Begriffs, Themas oder Konzepts. Der erste Absatz sollte eine einfache, in sich geschlossene Beschreibung des Begriffs sein, nicht mehr als ein paar Sätze. Dies kann von Links zu weiteren Informationen im **siehe auch**-Abschnitt gefolgt werden. Wenn die Seite mehr als eine Bildschirmseite wächst, ist sie zu lang und sollte in eine konzeptuelle Seite umgewandelt werden. Siehe [Wie schreibt man und referenziert einen Eintrag im Glossar](/de/docs/MDN/Writing_guidelines/Howto/Write_a_new_entry_in_the_glossary) für weitere Details.

#### Beispiele

- {{Glossary("DOM", "DOM")}}
- {{Glossary("Exception", "Exception")}}
- {{Glossary("Hyperlink", "Hyperlink")}}

#### Vorlagen

- [Glossarseitenschtablone](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/Glossary_page_template)

### Startseite

Eine **Startseite** dient als Menü, gewissermaßen, für ihre Unterseiten und ist daher in erster Linie eine _Navigationsseite_. Ein Startseitenlayout wird typischerweise für die Hauptseite eines Baums von Seiten zu einem bestimmten Thema verwendet. Es beginnt mit einer kurzen Zusammenfassung des Themas und präsentiert dann eine strukturierte Liste von Links zu seinen Unterseiten und gegebenenfalls zusätzliches Material, das für den Leser nützlich sein könnte.

Die Liste der Unterseiten kann automatisch unter Verwendung des [`SubpagesWithSummaries`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/subpages_with_summaries.rs) Templates generiert werden. In komplexeren Fällen muss die Liste jedoch möglicherweise von Hand erstellt (und gepflegt) werden.

### Lernseiten zur Webentwicklung

Der Abschnitt [Webentwicklung lernen](/de/docs/Learn_web_development) von MDN richtet sich speziell an Leute, die die grundlegenden Grundlagen der Webentwicklung lernen, und erfordert daher einen anderen Ansatz als der Rest der MDN-Inhalte. Sie können weitere Richtlinien unter [Richtlinien zum Schreiben von Lernwebentwicklungen](/de/docs/MDN/Writing_guidelines/Learning_content) finden.

Es gibt nur wenige Seitentypen in "Webentwicklung lernen":

- **Modulgruppen-Startseite**, zum Beispiel [Kernmodule lernen](/de/docs/Learn_web_development/Core)
  - : Diese enthalten einen einleitenden Absatz, einen Abschnitt, der die Voraussetzungen behandelt, die Sie haben sollten, bevor Sie die Modulgruppe beginnen, und eine Liste der Module, gefolgt von einer optionalen Liste von "siehe auch"-Links.
- **Modul-Startseite**, zum Beispiel [Strukturieren von Inhalten mit HTML](/de/docs/Learn_web_development/Core/Structuring_content)
  - : Diese enthalten einen einleitenden Absatz, einen Abschnitt, der die Voraussetzungen behandelt, die Sie haben sollten, bevor Sie das Modul beginnen, und eine Liste der darin enthaltenen Tutorials, gefolgt von einer optionalen Liste von "zusätzlichen Tutorials", die verwandt sind, aber nicht Teil des zentralen Lernpfades sind, und einer optionalen Liste von "siehe auch"-Links.
- **Tutorial-Seite**, zum Beispiel [Grundlegende HTML-Syntax](/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax)
  - : Die Struktur eines Lerntutorials ist nicht strikt, aber es muss eine praxisorientierte Lernerfahrung bieten (siehe [Richtlinien für das Schreiben von Lernwebentwicklungen > Ansatz](/de/docs/MDN/Writing_guidelines/Learning_content#approach)), es muss eine Liste von "Voraussetzungen" und "Lernergebnissen" am Anfang aufweisen, und der Inhalt muss die angegebenen Lernergebnisse vermitteln.

### Beispiele

- [HTML](/de/docs/Web/HTML)
- [CSS](/de/docs/Web/CSS)
- [Web-APIs](/de/docs/Web/API)
- [JavaScript](/de/docs/Web/JavaScript)
- [Webentwicklung lernen](/de/docs/Learn_web_development)
- [Community-Ressourcen](/de/docs/MDN/Community)

## Siehe auch

- [Seitenelemente](/de/docs/MDN/Writing_guidelines/Writing_style_guide#page_components)
- [Erstellen von Codebeispielen in Markdown](/de/docs/MDN/Writing_guidelines/Code_style_guide)
