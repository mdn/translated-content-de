---
title: Seitentypen
slug: MDN/Writing_guidelines/Page_structures/Page_types
l10n:
  sourceCommit: 514d1d2690c6374cd65921193ff6b166677395fd
---

{{MDNSidebar}}

Es gibt eine Reihe von Seitentypen, die auf MDN wiederholt verwendet werden. Dieser Artikel beschreibt diese Seitentypen, ihren Zweck und gibt Beispiele für jeden sowie Vorlagen zur Verwendung beim Erstellen einer neuen Seite.

Es gibt drei breite Kategorien von Seitentypen auf MDN, obwohl einige Seitentypen in mehr als eine Kategorie fallen.

- **Referenz**-Seiten beschreiben die Details von etwas und sind entsprechend der Struktur des beschriebenen Objekts organisiert.
- **Leitfaden**-Seiten beschreiben, wie man etwas tut oder benutzt, und sind basierend auf den Zielen des Lesers organisiert.
- **Navigations**-Seiten existieren hauptsächlich, um Links zu anderen Seiten bereitzustellen, normalerweise zu verwandten Themen.

## Erstellen einer neuen Seite

Um neue Seiten auf MDN zu erstellen, müssen Sie GitHub verwenden — schauen Sie sich unseren [Content-Repo](https://github.com/mdn/content) Abschnitt über [Hinzufügen eines neuen Dokuments](https://github.com/mdn/content/blob/main/CONTRIBUTING.md#adding-a-new-document) für weitere Anweisungen an.

## Verwendung der Vorlagen

Wenn Sie eine neue Seite erstellen, können Sie sicherstellen, dass Sie die richtige Seitenstruktur/den richtigen Inhalt verwendet haben, indem Sie auf eine unserer Seitenschablonen verweisen — siehe die untenstehenden Abschnitte. Der genaue Quellcode jeder Vorlage kann durch Klicken auf den Link "Source on **GitHub**" am Ende jeder Vorlage gefunden werden, wenn Sie ihn kopieren möchten. Diese Seitenschablonen machen nicht viel Sinn als veröffentlichte Seiten, aber wenn Sie ihren Quellcode ansehen, werden Sie feststellen, dass sie viele hilfreiche Kommentare, Platzhalter und Hinweise enthalten, die detailliert erklären, wie Sie die fehlenden Informationen ausfüllen und Ihre Seite erstellen können.

Am Anfang jeder Vorlage finden Sie einen Abschnitt mit dem Titel _Vor dem Veröffentlichen entfernen_ — dieser enthält Informationen darüber, wie Sie den Seitentitel, die Slug-, die Seitenleistenauswahl und die Tags ausfüllen (z.B. Informationen, die im Artikelkörper nicht tatsächlich erscheinen). Nachdem Sie die Anweisungen darin befolgt haben, müssen Sie diesen Abschnitt löschen, bevor die Seite als fertig betrachtet werden kann.

## Alte Seitenlayouts

Manchmal stoßen Sie auf alte Referenzseiten, die sich deutlich von den hier präsentierten Vorlagen unterscheiden. Zum Beispiel hatten alte Schnittstellenseiten alle Details der Mitglieder einer Schnittstelle auf einer einzigen Seite, und einzelne Methoden-/Eigenschafts-/Konstruktor-/Ereignis-Listener-Seiten existierten nicht.

Wenn Sie auf ein altes Set von Seiten stoßen, würden wir uns freuen, wenn Sie diese auf das neue Design aktualisieren würden! Wir schätzen jedoch, dass dies eine große Menge an Arbeit sein könnte. Wenn die zu aktualisierende Information nicht zu groß ist und Sie etwas Freizeit haben, versuchen Sie bitte, sie auf das neue Design zu aktualisieren.

Wenn die Arbeit umfangreicher ist, sollten Sie einige Faktoren in Betracht ziehen, wenn Sie die Arbeit priorisieren:

- Wie veraltet sind die Informationen?
- Wie minderwertig sind die Informationen?
- Wie populär ist das Feature? Wie sehr werden die Informationen gesucht?

Wenn Sie ein Team zusammenstellen möchten, um an einem Update zu arbeiten, oder wenn Sie einfach nur ein Inhaltsproblem melden oder diskutieren möchten, das ein Update benötigt, fühlen Sie sich frei, [ein Inhaltsproblem zu melden](https://github.com/mdn/content/issues) oder [uns um Hilfe zu bitten](/de/docs/MDN/Community/Communication_channels).

## Der Front Matter Schlüssel für den Seitentyp

Wir haben einen Front Matter Schlüssel `page-type` definiert, um den Typ der MDN-Seiten klar zu identifizieren. Die unten verlinkten Vorlagen geben an, welche `page-type` Werte Sie für jeden Seitentyp festlegen sollten.

Für die vollständige Liste der Seitentypen siehe [Der Front Matter Schlüssel für den Seitentyp](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/Page_type_key).

## Seitenschablonen

Unten sind Beispiele der verschiedenen Seiten, die Sie auf MDN finden, sowie Vorlagen, die verwendet werden können, um neuen Inhalt basierend auf dem Typ des Inhalts zu erstellen, den Sie präsentieren, einschließlich der folgenden Seiten:

- [API Übersichtsseite](#api_übersichtsseite)
- [API Referenzseite](#api_referenzseite)
- [API Referenz Unterseite](#api_referenz_unterseite)
- [Konzeptuelle Seiten](#konzeptuelle_seite)
- [CSS Feature Referenz](#css_feature_referenzseite)
- [CSS Modulübersichtsseite](#css_modulübersichtsseite)
- [Glossareintrag](#glossarseite)
- [HTML-Element](#html-element_referenzseite)
- [HTTP-Header](#http-header_referenzseite)
- [Übersichtsseite](#übersichtsseite)
- [SVG-Element](#svg-element_referenzseite)

Jeder Abschnitt enthält Links zu Live-Beispielseiten für diesen Seitentyp.

### API Übersichtsseite

Eine **{{Glossary("API", "API")}} Übersichtsseite** bietet einen Überblick darüber, was eine bestimmte API tut, sowie Links zur Dokumentation für jede der Schnittstellen, globalen Objekte, Funktionen usw., die von der API angeboten werden. Sie verlinkt nicht direkt zu spezifischen Methoden oder Eigenschaften innerhalb der Klassen der API, außer im Kontext des Übersichtstextes. Sie ist hauptsächlich eine _Navigations_ Seite, fungiert aber auch als eine Kurzübersicht _Referenz_ Seite für die API.

Es gibt einige Fälle, in denen mehrere APIs existieren, die zwar eigenständig sind und in ihren eigenen Spezifikationen definiert sind, aber dennoch eng verwandt sind und daher sinnvollerweise mit einer einzigen API Übersichtsseite abgedeckt werden könnten. Zum Beispiel deckt die [Generic Sensor API](https://www.w3.org/TR/generic-sensor/) allgemeine Sensorthemen ab, aber spezifischere Themen werden in anderen APIs wie [Ambient Light Sensor](https://www.w3.org/TR/ambient-light/), [Motion Sensor](https://www.w3.org/TR/motion-sensors/), usw. behandelt. In solchen Fällen sind viele der grundlegenden Konzepte gleich, sodass es keinen Sinn machen würde, diese mehrfach auf verschiedenen Übersichtsseiten zu wiederholen. In einem solchen Fall wäre es sinnvoller, sie alle unter einer einzigen "Web-Sensoren" Übersichtsseite zusammenzufassen.

#### Beispiel

- [WebVR API](/de/docs/Web/API/WebVR_API)

#### Vorlagen

- [API Übersichtsseiten Vorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_landing_page_template)

### API Referenzseite

> [!NOTE]
> Auch bekannt als eine _Interface Übersichtsseite_.

Eine **API Referenzseite** listet alle Methoden, Eigenschaften, Ereignisse usw. auf, die Mitglieder einer bestimmten Schnittstelle oder Klasse sind. Sie bietet einen Überblick darüber, was die Klasse oder Schnittstelle tut oder wofür sie verwendet wird, und gibt Links zur Dokumentation für jedes dieser Mitglieder. Sie ist detaillierter als eine API Übersichtsseite, die typischerweise auf mehrere API Referenzseiten verlinkt.

#### Beispiel

- [Request Schnittstelle](/de/docs/Web/API/Request) der [Fetch API](/de/docs/Web/API/Fetch_API).

#### Vorlagen

- [API Referenzseiten Vorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_reference_page_template)

### API Referenz Unterseite

Eine **API Referenz Unterseite** ist ein Kind einer API Referenzseite. Sie dokumentiert ein einzelnes Schnittstellenmitglied im Detail.

#### Beispiele

- [`count()` Methode](/de/docs/Web/API/IDBIndex/count) der [IDBIndex](/de/docs/Web/API/IDBIndex) Schnittstelle (Teil der [IndexedDB API](/de/docs/Web/API/IndexedDB_API))
- [capabilities Eigenschaft](/de/docs/Web/API/VRDisplay/capabilities) der [VRDisplay](/de/docs/Web/API/VRDisplay) Schnittstelle (Teil der [WebVR API](/de/docs/Web/API/WebVR_API))
- [Request() Konstruktor](/de/docs/Web/API/Request/Request) der [Request](/de/docs/Web/API/Request) Schnittstelle (Teil der [Fetch API](/de/docs/Web/API/Fetch_API))
- [vrdisplaypresentchange Ereignis](/de/docs/Web/API/Window/vrdisplaypresentchange_event) (Teil der [WebVR API](/de/docs/Web/API/WebVR_API), hängt an der [Window](/de/docs/Web/API/Window) Schnittstelle)

#### Vorlagen

- [API Methoden Unterseiten Vorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_method_subpage_template)
- [API Eigenschafts Unterseiten Vorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_property_subpage_template)
- [API Konstruktions Unterseiten Vorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_constructor_subpage_template)
- [API Ereignis Unterseiten Vorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_event_subpage_template)

### HTML-Element Referenzseite

Eine **HTML Referenzseite** listet alle Attribute auf, die für ein HTML-Element verfügbar sind, erklärt den Zweck und die Verwendung des Elements und bietet Beispiele, Browser-Kompatibilitätsinformationen und andere wichtige Daten.

#### Beispiel

- [`<video>` Element](/de/docs/Web/HTML/Element/video)

#### Vorlagen

- [HTML-Element Seitenschablone](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/HTML_element_page_template)

### SVG-Element Referenzseite

Eine **SVG Referenzseite** listet alle Attribute auf, die für ein SVG-Element verfügbar sind, erklärt den Zweck und die Verwendung des Elements und bietet Beispiele, Browser-Kompatibilitätsinformationen und andere wichtige Daten.

#### Beispiel

- [\<g> Element](/de/docs/Web/SVG/Element/g)

#### Vorlagen

- [SVG-Element Seitenschablone](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/SVG_element_page_template)

### CSS Modulübersichtsseite

Jedes **[CSS](/de/docs/Web/CSS) Modul** stellt eine CSS-Spezifikation dar, die Unterstützung für bestimmte Funktionen und Implementierungen in CSS bietet. Zum Beispiel repräsentiert das [CSS box model](/de/docs/Web/CSS/CSS_box_model) Modul die [Spezifikation](/de/docs/Web/CSS/CSS_box_model#specifications), die die Eigenschaften Margin und Padding beschreibt, mit denen Sie Abstände in und um ein CSS-Feld herum erstellen können.

Eine **CSS Modulübersichtsseite** bietet einen Überblick über die Funktionen, die das Modul bereitstellt, und listet alle Eigenschaften, Datentypen, CSS-Funktionen usw. auf, die das Modul anbietet. Wenn möglich, bietet die CSS Modulübersichtsseite eine schnelle Demonstration dessen, was mit den Eigenschaften des Moduls erreicht werden kann, durch ein interaktives Beispiel. Die Modulübersichtsseite dient hauptsächlich als _Navigations_ Seite, fungiert aber auch als eine Kurzübersicht _Referenz_ Seite für das Modul.

Einige verwandte Eigenschaften und Funktionen, die zu anderen Modulen gehören, aber eng mit den Funktionen verwandt sind, die durch das Modul, das Sie dokumentieren, angeboten werden, können auch in einem Abschnitt _Verwandte Konzepte_ behandelt werden. Zum Beispiel werden der `<easing-function>` Datentyp und die `prefers-reduced-motion` Medienabfrage nicht im CSS Animationsmodul behandelt, aber da sie eng mit CSS-Animationen zusammenhängen, ist es eine gute Idee, sie im Abschnitt [Verwandte Konzepte](/de/docs/Web/CSS/CSS_animations#related_concepts) der CSS Animationsmodulübersichtsseite hervorzuheben.

#### Beispiele

- [CSS Animationen](/de/docs/Web/CSS/CSS_animations)
- [CSS grundlegende Benutzeroberfläche](/de/docs/Web/CSS/CSS_basic_user_interface)
- [CSS Filtereffekte](/de/docs/Web/CSS/CSS_filter_effects)
- [CSS Scroll Snap](/de/docs/Web/CSS/CSS_scroll_snap)

#### Vorlagen

- [CSS Modulübersichtsseiten Vorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/CSS_module_landing_page_template)

### CSS Feature Referenzseite

Eine **CSS Referenzseite** listet die gesamte verfügbare Syntax für ein CSS-Feature wie einen Selektor oder eine Eigenschaft auf und erklärt den Zweck und die Verwendung des Features. Sie bietet auch Beispiele, Browser-Kompatibilitätsinformationen und andere wichtige Daten.

#### Beispiele

- [`background-color` Eigenschaft](/de/docs/Web/CSS/background-color)
- [`:hover` Pseudo-Klasse](/de/docs/Web/CSS/:hover)
- [`@media` at-rule](/de/docs/Web/CSS/@media)

#### Vorlagen

- [CSS Eigenschaftsseitenschablone](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/CSS_property_page_template)
- [CSS Selektorseitenschablone](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/CSS_selector_page_template)
- [CSS Funktionsseitenschablone](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/CSS_function_page_template)

### HTTP-Header Referenzseite

Eine **HTTP-Header Referenzseite** listet alle verfügbaren Direktiven auf, die ein HTTP-Header enthalten kann, und erklärt den Zweck und die Verwendung des Headers. Sie bietet auch Beispiele, Browser-Kompatibilitätsinformationen und andere wichtige Erklärungen.

#### Beispiel

- [Cache-Control Header](/de/docs/Web/HTTP/Headers/Cache-Control)

#### Vorlagen

- [HTTP-Header Seitenschablone](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/HTTP_header_page_template)

### Konzeptuelle Seite

Eine **konzeptuelle Seite** ist eine _Leitfaden_-Seite, die etwas erklärt oder lehrt. Im Allgemeinen, wenn eine Seite hauptsächlich aus Prosa besteht und nicht in einen anderen Seitentyp fällt, ist es wahrscheinlich eine konzeptuelle Seite. Eine erweiterte Diskussion eines Themas könnte auf mehrere konzeptuelle Seiten verteilt sein und mit [Next](https://github.com/mdn/yari/blob/main/kumascript/macros/Next.ejs) und [Previous](https://github.com/mdn/yari/blob/main/kumascript/macros/Previous.ejs) Makros verlinkt werden.

#### Beispiele

- [Die WebVR API verwenden](/de/docs/Web/API/WebVR_API/Using_the_WebVR_API)
- [Visualisierungen mit Web Audio API](/de/docs/Web/API/Web_Audio_API/Visualizations_with_Web_Audio_API)
- [Kaskadierung und Vererbung in CSS](/de/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance)

### Glossarseite

Eine **Glossarseite** enthält eine kurze Erklärung eines Begriffs, Themas oder Konzepts. Der erste Absatz sollte eine einfache, selbsterklärende Beschreibung des Begriffs sein, nicht mehr als ein paar Sätze lang. Dies kann durch Links zu weiteren Informationen im Abschnitt **Siehe auch** gefolgt werden. Wenn die Seite länger als etwa eine Bildschirmseite wird, ist sie zu lang und sollte in eine konzeptuelle Seite umgewandelt werden. Siehe [Anleitung zum Schreiben und Verweisen eines Eintrags im Glossar](/de/docs/MDN/Writing_guidelines/Howto/Write_a_new_entry_in_the_glossary) für weitere Details.

#### Beispiele

- {{Glossary("DOM", "DOM")}}
- {{Glossary("Exception", "Exception")}}
- {{Glossary("Hyperlink", "Hyperlink")}}

#### Vorlagen

- [Glossarseite Vorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/Glossary_page_template)

### Übersichtsseite

Eine **Übersichtsseite** dient als eine Art Menü für ihre Unterseiten und ist daher hauptsächlich eine _Navigations_ Seite. Ein Übersichtsseitenlayout wird typischerweise für die Hauptseite eines Baumes von Seiten über ein bestimmtes Thema verwendet. Sie beginnt mit einer kurzen Zusammenfassung des Themas und präsentiert dann eine strukturierte Liste von Links zu ihren Unterseiten und optional weiteres Material, das für den Leser nützlich sein könnte.

Die Liste der Unterseiten kann automatisch mit der [`SubpagesWithSummaries`](https://github.com/mdn/yari/blob/main/kumascript/macros/SubpagesWithSummaries.ejs) Vorlage generiert werden. In komplexeren Fällen muss die Liste jedoch möglicherweise manuell erstellt (und gepflegt) werden.

### Beispiele

- [HTML](/de/docs/Web/HTML)
- [CSS](/de/docs/Web/CSS)
- [Web APIs](/de/docs/Web/API)
- [JavaScript](/de/docs/Web/JavaScript)
- [Lernbereich](/de/docs/Learn)
- [Beitrag zu MDN](/de/docs/MDN/Community/Contributing)

## Siehe auch

- [Seitenkomponenten](/de/docs/MDN/Writing_guidelines/Writing_style_guide#page_components)
- [Erstellen von Codebeispielen in Markdown](/de/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide)
