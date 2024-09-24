---
title: Seitentypen
slug: MDN/Writing_guidelines/Page_structures/Page_types
l10n:
  sourceCommit: ce83b64f1132a29a19471e46bfffced755f775eb
---

{{MDNSidebar}}

Es gibt eine Reihe von Seitentypen, die auf MDN wiederholt verwendet werden. Dieser Artikel beschreibt diese Seitentypen, ihren Zweck und gibt Beispiele für jeden sowie Vorlagen, die beim Erstellen einer neuen Seite verwendet werden können.

Es gibt auf MDN drei übergeordnete Kategorien von Seitentypen, wobei einige Seitentypen in mehr als eine Kategorie fallen.

- **Referenz**-Seiten beschreiben die Details von etwas und sind gemäß der Struktur des beschriebenen Objekts organisiert.
- **Anleitungs**-Seiten beschreiben, wie man etwas tut oder benutzt, und sind basierend auf den Zielen des Lesers organisiert.
- **Navigations**-Seiten existieren hauptsächlich, um Links zu anderen Seiten bereitzustellen, in der Regel über verwandte Themen.

## Erstellen einer neuen Seite

Um neue Seiten auf MDN zu erstellen, müssen Sie GitHub verwenden — schauen Sie sich unseren [Inhalts-Repo](https://github.com/mdn/content) Abschnitt zum [Hinzufügen eines neuen Dokuments](https://github.com/mdn/content/blob/main/CONTRIBUTING.md#adding-a-new-document) für weitere Anweisungen an.

## Verwendung der Vorlagen

Beim Erstellen einer neuen Seite können Sie sicherstellen, dass Sie die richtige Seitenstruktur/Inhalte verwendet haben, indem Sie auf eine unserer Seitentemplates verweisen — siehe die unten stehenden Abschnitte. Den genauen Quellcode jeder Vorlage (wenn Sie ihn kopieren möchten) finden Sie, indem Sie dem Link "Source on **GitHub**" am Ende jeder Vorlage folgen. Diese Seitentemplates ergeben nicht viel Sinn als veröffentlichte Seiten, aber wenn Sie ihren Quellcode ansehen, werden Sie sehen, dass sie viele hilfreiche Kommentare, Platzhalter und Hinweise enthalten, die erklären, wie die fehlenden Informationen ergänzt und Ihre Seite erstellt werden können.

Am Anfang jeder Vorlage finden Sie einen Abschnitt mit dem Titel _Vor Veröffentlichung entfernen_ — dieser enthält Informationen darüber, wie Sie den Seitentitel, den Slug, das Seitenleistenmenü und die Tags ausfüllen (z. B. Informationen, die im eigentlichen Artikeltext nicht erscheinen). Sie müssen diesen Abschnitt löschen, nachdem Sie die Anweisungen darin befolgt haben, bevor die Seite als fertig betrachtet werden kann.

## Alte Seitenlayouts

Manchmal stoßen Sie auf alte Referenzseiten, die deutlich anders aussehen als die hier dargestellten Vorlagen. Zum Beispiel hatten alte Schnittstellenseiten alle Mitgliederdetails der Schnittstellen auf einer einzigen Seite, und individuelle Methoden-/Eigenschafts-/Konstruktor-/Ereignislistenerseiten existierten nicht.

Wenn Sie auf ein altes Set von Seiten stoßen, würden wir uns freuen, wenn Sie sie auf den neuen Stil aktualisieren! Wir sind uns jedoch bewusst, dass dies eine große Menge Arbeit sein könnte. Wenn die zu aktualisierenden Informationen nicht zu umfangreich sind und Sie etwas freie Zeit haben, versuchen Sie es ruhig, sie auf den neuen Stil zu aktualisieren.

Wenn die Arbeit umfangreicher ist, sollten Sie einige Faktoren berücksichtigen, wenn Sie die Arbeit priorisieren:

- Wie veraltet sind die Informationen?
- Wie niedrig ist die Qualität der Informationen?
- Wie populär ist das Feature? Wie gefragt sind die Informationen?

Wenn Sie ein Team zusammenstellen möchten, um an einem Update zu arbeiten, oder wenn Sie einfach nur einige Inhalte melden oder diskutieren möchten, die ein Update benötigen, fühlen Sie sich frei, ein [Inhaltsproblem zu melden](https://github.com/mdn/content/issues) oder [uns um Hilfe zu bitten](/de/docs/MDN/Community/Communication_channels).

## Der front matter Schlüssel page-type

Wir haben einen front matter Schlüssel `page-type` definiert, um den Typ der MDN-Seiten klar zu identifizieren. Die unten verlinkten Vorlagen geben an, welche Werte für `page-type` Sie für jeden Seitentyp festlegen sollten.

Für die vollständige Liste der Seitentypen siehe [Der page-type front matter Schlüssel](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/Page_type_key).

## Seitentemplates

Unten sind Beispiele für die verschiedenen Seiten, die Sie auf MDN finden, zusammen mit Vorlagen, die verwendet werden können, um neue Inhalte basierend auf dem zu präsentierenden Inhaltstyp zu erstellen, darunter die folgenden Seiten:

- [API Landing Pages](#api_landing_page)
- [API Referenzseite](#api_referenzseite)
- [API Referenz Unterseite](#api_referenz_unterseite)
- [Konzeptuelle Seiten](#konzeptuelle_seite)
- [CSS Feature-Referenz](#css_feature-referenzseite)
- [CSS Modul Landing Page](#css_modul_landing_page)
- [Glossareintrag](#glossarseite)
- [HTML-Element](#html_element_referenzseite)
- [HTTP-Header](#http_header_referenzseite)
- [Landing Page](#landing_page)
- [SVG-Element](#svg_element_referenzseite)

Jeder Abschnitt enthält Links zu Live-Beispielsseiten für diesen Seitentyp.

### API Landing Page

Eine **{{Glossary("API")}} Landing Page** bietet einen Überblick darüber, was eine bestimmte API tut, sowie Links zur Dokumentation für jedes der von der API angebotenen Schnittstellen, Globals, Funktionen usw. Sie verlinkt nicht direkt auf spezifische Methoden oder Eigenschaften innerhalb der Klassen der API, außer im Kontext des Überblicks. Sie ist hauptsächlich eine _Navigationsseite_, fungiert aber auch als _Referenzseite_ für die API.

Es gibt einige Fälle, in denen mehrere APIs existieren, die eigenständig sind und in ihren eigenen Spezifikationen definiert sind, aber eng verwandt sind und daher sinnvoll wäre, sie mit einer einzigen API Landing Page abzudecken. Zum Beispiel deckt die [Generic Sensor API](https://www.w3.org/TR/generic-sensor/) allgemeine Sensoranliegen ab, aber spezifischere Bedenken werden in anderen APIs wie [Ambient Light Sensor](https://www.w3.org/TR/ambient-light/), [Motion Sensor](https://www.w3.org/TR/motion-sensors/) usw. behandelt. In solchen Fällen sind viele der übergeordneten Konzepte dieselben, sodass es keinen Sinn macht, diese über mehrere Landing Pages zu wiederholen. In einem solchen Fall wäre es im Sinne der Wiederholung und Auffindbarkeit sinnvoller, sie alle unter einer einzigen "Websensoren" Landing Page abzudecken.

#### Beispiel

- [WebVR API](/de/docs/Web/API/WebVR_API)

#### Vorlagen

- [API Landing Page Vorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_landing_page_template)

### API Referenzseite

> [!NOTE]
> Auch bekannt als eine _Interface Landing Page_.

Eine **API Referenzseite** listet alle Methoden, Eigenschaften, Ereignisse usw. auf, die Mitglieder einer bestimmten Schnittstelle oder Klasse sind. Sie bietet einen Überblick darüber, was die Klasse oder Schnittstelle tut oder wofür sie verwendet wird, und gibt Links zur Dokumentation für jedes dieser Mitglieder. Sie ist detaillierter als eine API Landing Page, die typischerweise Links zu mehreren API Referenzseiten enthält.

#### Beispiel

- [Request-Schnittstelle](/de/docs/Web/API/Request) der [Fetch API](/de/docs/Web/API/Fetch_API).

#### Vorlagen

- [API Referenzseite Vorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_reference_page_template)

### API Referenz Unterseite

Eine **API Referenz Unterseite** ist ein Kind einer API Referenzseite. Sie dokumentiert ein einzelnes Schnittstellenmitglied im Detail.

#### Beispiele

- [`count()` Methode](/de/docs/Web/API/IDBIndex/count) der [IDBIndex](/de/docs/Web/API/IDBIndex) Schnittstelle (Teil der [IndexedDB API](/de/docs/Web/API/IndexedDB_API))
- [capabilities-Eigenschaft](/de/docs/Web/API/VRDisplay/capabilities) der [VRDisplay](/de/docs/Web/API/VRDisplay) Schnittstelle (Teil der [WebVR API](/de/docs/Web/API/WebVR_API))
- [Request() Konstruktor](/de/docs/Web/API/Request/Request) der [Request](/de/docs/Web/API/Request) Schnittstelle (Teil der [Fetch API](/de/docs/Web/API/Fetch_API))
- [vrdisplaypresentchange Ereignis](/de/docs/Web/API/Window/vrdisplaypresentchange_event) (Teil der [WebVR API](/de/docs/Web/API/WebVR_API), hängt von der [Window](/de/docs/Web/API/Window) Schnittstelle ab)

#### Vorlagen

- [API Methodenseite Vorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_method_subpage_template)
- [API Eigenschaftsseite Vorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_property_subpage_template)
- [API Konstruktorseite Vorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_constructor_subpage_template)
- [API Ereignisseite Vorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_event_subpage_template)

### HTML Element Referenzseite

Eine **HTML Referenzseite** listet alle Attribute auf, die auf einem HTML-Element verfügbar sind, erklärt den Zweck und die Verwendung des Elements und bietet Beispiele, Informationen zu Browserkompatibilität und andere wichtige Daten.

#### Beispiel

- [`<video>` Element](/de/docs/Web/HTML/Element/video)

#### Vorlagen

- [HTML Elementseite Vorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/HTML_element_page_template)

### SVG Element Referenzseite

Eine **SVG Referenzseite** listet alle Attribute auf, die auf einem SVG-Element verfügbar sind, erklärt den Zweck und die Verwendung des Elements und bietet Beispiele, Informationen zu Browserkompatibilität und andere wichtige Daten.

#### Beispiel

- [\<g> Element](/de/docs/Web/SVG/Element/g)

#### Vorlagen

- [SVG Elementseite Vorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/SVG_element_page_template)

### CSS Modul Landing Page

Jedes **[CSS](/de/docs/Web/CSS) Modul** repräsentiert eine CSS-Spezifikation, die Unterstützung für bestimmte Funktionen und Implementierungen in CSS bereitstellt. Zum Beispiel repräsentiert das [CSS Box Model](/de/docs/Web/CSS/CSS_box_model) Modul die [Spezifikation](/de/docs/Web/CSS/CSS_box_model#specifications), die die Margin- und Padding-Eigenschaften beschreibt, mit denen Sie Abstände innerhalb und um eine CSS-Box erzeugen können.

Eine **CSS Modul Landing Page** bietet einen Überblick über die Funktionen, die das Modul bietet, und listet alle von diesem Modul angebotenen Eigenschaften, Datentypen, CSS-Funktionen usw. auf. Wenn möglich, sorgt die CSS Modul Landing Page für eine schnelle Demonstration dessen, was mit den Eigenschaften des Moduls erreicht werden kann, durch ein interaktives Beispiel. Die Modul Landing Page dient hauptsächlich als _Navigationsseite_, fungiert aber auch als _Referenzseite_ für das Modul.

Einige verwandte Eigenschaften und Funktionen, die zu anderen Modulen gehören, aber eng mit der Funktionalität verwandt sind, die das Modul, das Sie dokumentieren, bietet, können auch in einem Abschnitt _Verwandte Konzepte_ behandelt werden. Zum Beispiel sind der `<easing-function>` Datentyp und die `prefers-reduced-motion` Media Query nicht im CSS Animationsmodul behandelt, aber da sie eng mit CSS-Animationen verwandt sind, ist es eine gute Idee, sie im [Verwandte Konzepte](/de/docs/Web/CSS/CSS_animations#related_concepts) Abschnitt der CSS Animate Modul Landing Page hervorzuheben.

#### Beispiele

- [CSS-Animationen](/de/docs/Web/CSS/CSS_animations)
- [CSS Grundlegende Benutzeroberfläche](/de/docs/Web/CSS/CSS_basic_user_interface)
- [CSS-Filtereffekte](/de/docs/Web/CSS/CSS_filter_effects)
- [CSS Scroll Snap](/de/docs/Web/CSS/CSS_scroll_snap)

#### Vorlagen

- [CSS Modul Landing Page Vorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/CSS_module_landing_page_template)

### CSS Feature-Referenzseite

Eine **CSS Referenzseite** listet die gesamte verfügbare Syntax für ein CSS-Feature wie einen Selektor oder eine Eigenschaft auf und erklärt den Zweck und die Verwendung des Features. Sie bietet auch Beispiele, Informationen zur Browserkompatibilität und andere wichtige Daten.

#### Beispiele

- [background-color Eigenschaft](/de/docs/Web/CSS/background-color)
- [:hover Pseudoklasse](/de/docs/Web/CSS/:hover)
- [@media At-Regel](/de/docs/Web/CSS/@media)

#### Vorlagen

- [CSS Eigenschaftsseite Vorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/CSS_property_page_template)
- [CSS Selektorseite Vorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/CSS_selector_page_template)
- [CSS Funktionsseite Vorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/CSS_function_page_template)

### HTTP Header Referenzseite

Eine **HTTP Header Referenzseite** listet alle verfügbaren Direktiven auf, die ein HTTP-Header enthalten kann, und erklärt den Zweck und die Verwendung des Headers. Sie bietet auch Beispiele, Informationen zur Browserkompatibilität und andere wichtige Erklärungen.

#### Beispiel

- [Cache-Control Header](/de/docs/Web/HTTP/Headers/Cache-Control)

#### Vorlagen

- [HTTP Header Seite Vorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/HTTP_header_page_template)

### Konzeptuelle Seite

Eine **konzeptuelle Seite** ist eine _Anleitungsseite_, die etwas erklärt oder lehrt. Im Allgemeinen, wenn eine Seite hauptsächlich aus Prosa besteht und nicht in eine andere Seitentyp fällt, ist es wahrscheinlich eine konzeptuelle Seite. Eine ausführliche Diskussion eines Themas könnte sich über mehrere konzeptuelle Seiten erstrecken und mithilfe von [Next](https://github.com/mdn/yari/blob/main/kumascript/macros/Next.ejs) und [Previous](https://github.com/mdn/yari/blob/main/kumascript/macros/Previous.ejs) Makros verlinkt werden.

#### Beispiele

- [Verwendung der WebVR API](/de/docs/Web/API/WebVR_API/Using_the_WebVR_API)
- [Visualisierungen mit Web Audio API](/de/docs/Web/API/Web_Audio_API/Visualizations_with_Web_Audio_API)
- [Cascade und Vererbung in CSS](/de/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance)

### Glossarseite

Eine **Glossarseite** enthält eine kurze Erklärung eines Begriffs, Themas oder Konzepts. Der erste Absatz sollte eine einfache, eigenständige Beschreibung des Begriffs sein, die nicht mehr als ein paar Sätze umfasst. Dies kann durch Links zu weiteren Informationen im Abschnitt **Siehe auch** ergänzt werden. Wenn die Seite länger als etwa eine Bildschirmseite wird, ist sie zu lang und sollte in eine konzeptuelle Seite umgewandelt werden. Weitere Details finden Sie unter [Wie man einen Eintrag im Glossar schreibt und referenziert](/de/docs/MDN/Writing_guidelines/Howto/Write_a_new_entry_in_the_glossary).

#### Beispiele

- [DOM](/de/docs/Glossary/DOM)
- [Exception](/de/docs/Glossary/Exception)
- [Hyperlink](/de/docs/Glossary/Hyperlink)

#### Vorlagen

- [Glossarseite Vorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/Glossary_page_template)

### Landing Page

Eine **Landing Page** dient als Menü, gewissermaßen, für ihre Unterseiten und ist daher hauptsächlich eine _Navigationsseite_. Ein Landing Page Layout wird typischerweise für die Hauptseite eines Themenbaums verwendet. Sie beginnt mit einer kurzen Zusammenfassung des Themas und präsentiert dann eine strukturierte Liste von Links zu ihren Unterseiten und optional zusätzliche Materialien, die für den Leser nützlich sein können.

Die Liste der Unterseiten kann automatisch generiert werden, indem die Templates [`SubpagesWithSummaries`](https://github.com/mdn/yari/blob/main/kumascript/macros/SubpagesWithSummaries.ejs) und [`LandingPageListSubpages`](https://github.com/mdn/yari/blob/main/kumascript/macros/LandingPageListSubpages.ejs) verwendet werden. In komplexeren Fällen kann es jedoch erforderlich sein, die Liste manuell zu erstellen (und zu pflegen).

### Beispiele

- [HTML](/de/docs/Web/HTML)
- [CSS](/de/docs/Web/CSS)
- [Web-APIs](/de/docs/Web/API)
- [JavaScript](/de/docs/Web/JavaScript)
- [Lernbereich](/de/docs/Learn)
- [Mitarbeit bei MDN](/de/docs/MDN/Community/Contributing)

## Siehe auch

- [Seitenkomponenten](/de/docs/MDN/Writing_guidelines/Writing_style_guide#page_components)
- [Erstellen von Codebeispielen in Markdown](/de/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide)
