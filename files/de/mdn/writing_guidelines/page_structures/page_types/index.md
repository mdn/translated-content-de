---
title: Seitentypen
slug: MDN/Writing_guidelines/Page_structures/Page_types
l10n:
  sourceCommit: ce83b64f1132a29a19471e46bfffced755f775eb
---

{{MDNSidebar}}

Es gibt eine Anzahl von Seitentypen, die auf MDN wiederholt verwendet werden. Dieser Artikel beschreibt diese Seitentypen, ihren Zweck und gibt Beispiele sowie Vorlagen für die Erstellung einer neuen Seite.

Es gibt drei breite Kategorien von Seitentypen auf MDN, obwohl einige Seitentypen in mehr als eine Kategorie fallen.

- **Referenz**seiten beschreiben die Details von etwas und sind gemäß der Struktur des beschriebenen Objekts organisiert.
- **Leitfaden**seiten erklären, wie man etwas tut oder benutzt, und sind basierend auf den Zielen des Lesers organisiert.
- **Navigations**seiten dienen in erster Linie dazu, Links zu anderen Seiten bereitzustellen, meist über verwandte Themen.

## Erstellung einer neuen Seite

Um neue Seiten auf MDN zu erstellen, müssen Sie GitHub verwenden — schauen Sie sich unseren [Inhalts-Repo](https://github.com/mdn/content) Abschnitt über [das Hinzufügen eines neuen Dokuments](https://github.com/mdn/content/blob/main/CONTRIBUTING.md#adding-a-new-document) für weitere Anweisungen an.

## Wie man die Vorlagen verwendet

Wenn Sie eine neue Seite erstellen, können Sie sicherstellen, dass Sie die richtige Seitenstruktur/inhalt verwendet haben, indem Sie sich auf eine unserer Seitvorlagen beziehen — sehen Sie die Abschnitte unten. Sie können den genauen Quellcode jeder Vorlage (falls Sie ihn kopieren möchten) über den „Source on **GitHub**” Link am Ende jeder Vorlage finden. Diese Seitvorlagen machen nicht viel Sinn als veröffentlichte Seiten, aber wenn Sie ihren Quellcode betrachten, werden Sie sehen, dass sie viele hilfreiche Kommentare, Platzhalter und Hinweise enthalten, wie Sie die fehlenden Informationen ausfüllen und Ihre Seite erstellen können.

Am Anfang jeder Vorlage finden Sie einen Abschnitt mit dem Titel _Vor der Veröffentlichung entfernen_ — dieser enthält Informationen darüber, wie Sie den Seitentitel, den Slug, das Seitenleistenmenü und die Tags ausfüllen (z. B. Informationen, die nicht im Hauptteil des Artikels erscheinen). Sie müssen diesen Abschnitt löschen, nachdem Sie die Anweisungen darin befolgt haben, bevor die Seite als fertig angesehen werden kann.

## Alte Seitenlayouts

Manchmal stoßen Sie auf alte Referenzseiten, die deutlich anders aussehen als die hier vorgestellten Vorlagen. Zum Beispiel hatten alte Schnittstellen-Seiten alle Details zu den Mitgliedern der Schnittstellen auf einer einzigen Seite, und individuelle Methoden-/Eigenschafts-/Konstruktor-/Ereignislisten-Seiten existierten nicht.

Wenn Sie auf eine Reihe alter Seiten stoßen, würden wir uns freuen, wenn Sie sie auf den neuen Stil aktualisieren! Wir wissen jedoch zu schätzen, dass dies eine große Menge Arbeit sein kann. Falls die zu aktualisierenden Informationen nicht zu groß sind und Sie etwas freie Zeit haben, versuchen Sie auf jeden Fall, sie auf den neuen Stil zu aktualisieren.

Wenn die Arbeit umfangreicher ist, sollten Sie einige Faktoren bei der Priorisierung der Arbeit berücksichtigen:

- Wie veraltet sind die Informationen?
- Wie niedrig ist die Qualität der Informationen?
- Wie populär ist das Feature? Wie stark wird nach den Informationen gesucht?

Wenn Sie ein Team zusammenstellen möchten, um an einem Update zu arbeiten, oder wenn Sie einfach nur ein Inhaltsproblem melden oder diskutieren möchten, das ein Update benötigt, reichen Sie gerne ein [Inhaltsproblem ein](https://github.com/mdn/content/issues) oder [fragen Sie uns um Hilfe](/de/docs/MDN/Community/Communication_channels).

## Der Front-Matter-Schlüssel page-type

Wir haben einen Front-Matter-Schlüssel `page-type` definiert, um den Typ der MDN-Seiten klar zu identifizieren. Die unten verlinkten Vorlagen geben an, welche `page-type` Werte Sie für jeden Seitentyp festlegen sollten.

Für die vollständige Liste der Seitentypen siehe [Der Front-Matter-Schlüssel page-type](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/Page_type_key).

## Seitvorlagen

Unten finden Sie Beispiele der verschiedenen Seiten, die Sie auf MDN finden, zusammen mit Vorlagen, die verwendet werden können, um neuen Inhalt basierend auf dem Typ des präsentierten Inhalts zu erstellen, einschließlich der folgenden Seiten:

- [API-Landingpages](#api-landingpage)
- [API-Referenzseite](#api-referenzseite)
- [API-Referenz-Unterseite](#api-referenz-unterseite)
- [Konzeptuelle Seiten](#konzeptuelle_seite)
- [CSS-Feature-Referenz](#css-feature-referenzseite)
- [CSS-Modul-Landingpage](#css-modul-landingpage)
- [Glossareintrag](#glossarseite)
- [HTML-Element](#html-element-referenzseite)
- [HTTP-Header](#http-header-referenzseite)
- [Landingpage](#landingpage)
- [SVG-Element](#svg-element-referenzseite)

Jeder Abschnitt enthält Links zu live Beispielseiten für diesen Seitentyp.

### API-Landingpage

Eine **[API](/de/docs/Glossary/API)-Landingpage** bietet eine Übersicht darüber, was eine bestimmte API tut, sowie Links zur Dokumentation für jede der von der API angebotenen Schnittstellen, Globalen, Funktionen usw. Sie verlinkt nicht direkt auf spezifische Methoden oder Eigenschaften innerhalb der Klassen der API, außer im Kontext des Übersichtstextes. Sie ist in erster Linie eine _Navigations_seite, dient jedoch auch als Übersicht, _Referenz_seite für die API.

In einigen Fällen existieren mehrere APIs, die separat sind und in ihren eigenen Spezifikationen definiert sind, aber eng miteinander verwandt sind und daher sinnvollerweise mit einer einzigen API-Landingpage abgedeckt werden könnten. Beispiel: Die [Generic Sensor API](https://www.w3.org/TR/generic-sensor/) behandelt allgemeine Sensorbelange, aber speziellere Belange werden in anderen APIs wie [Ambient Light Sensor](https://www.w3.org/TR/ambient-light/), [Motion Sensor](https://www.w3.org/TR/motion-sensors/) usw. behandelt. In solchen Fällen sind viele der grundlegenden Konzepte gleich, sodass es keinen Sinn macht, diese auf mehreren Landingpages zu wiederholen. In einem solchen Fall wäre es sinnvoller in Bezug auf Wiederholung und Auffindbarkeit, sie alle unter einer einzigen "Web-Sensoren" Landingpage abzudecken.

#### Beispiel

- [WebVR API](/de/docs/Web/API/WebVR_API)

#### Vorlagen

- [API-Landingpage-Vorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_landing_page_template)

### API-Referenzseite

> [!NOTE]
> Auch bekannt als _Schnittstellen-Landingpage_.

Eine **API-Referenzseite** listet alle Methoden, Eigenschaften, Ereignisse usw. auf, die Mitglieder einer bestimmten Schnittstelle oder Klasse sind. Sie bietet einen Überblick darüber, was die Klasse oder Schnittstelle tut oder wofür sie verwendet wird, und gibt Links zur Dokumentation für jedes dieser Mitglieder. Sie ist granularer als eine API-Landingpage, die typischerweise auf mehrere API-Referenzseiten verlinkt.

#### Beispiel

- [Request-Schnittstelle](/de/docs/Web/API/Request) der [Fetch API](/de/docs/Web/API/Fetch_API).

#### Vorlagen

- [API-Referenzseiten-Vorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_reference_page_template)

### API-Referenz-Unterseite

Eine **API-Referenz-Unterseite** ist ein Kind einer API-Referenzseite. Sie dokumentiert ein einzelnes Schnittstellenmitglied im Detail.

#### Beispiele

- [`count()` Methode](/de/docs/Web/API/IDBIndex/count) der [IDBIndex](/de/docs/Web/API/IDBIndex) Schnittstelle (Teil der [IndexedDB API](/de/docs/Web/API/IndexedDB_API))
- [capabilities Eigenschaft](/de/docs/Web/API/VRDisplay/capabilities) der [VRDisplay](/de/docs/Web/API/VRDisplay) Schnittstelle (Teil der [WebVR API](/de/docs/Web/API/WebVR_API))
- [Request() Konstruktor](/de/docs/Web/API/Request/Request) der [Request](/de/docs/Web/API/Request) Schnittstelle (Teil der [Fetch API](/de/docs/Web/API/Fetch_API))
- [vrdisplaypresentchange-Ereignis](/de/docs/Web/API/Window/vrdisplaypresentchange_event) (Teil der [WebVR API](/de/docs/Web/API/WebVR_API), hängt an der [Window](/de/docs/Web/API/Window) Schnittstelle)

#### Vorlagen

- [API-Methoden-Unterseite-Vorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_method_subpage_template)
- [API-Eigenschafts-Unterseite-Vorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_property_subpage_template)
- [API-Konstruktor-Unterseite-Vorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_constructor_subpage_template)
- [API-Ereignis-Unterseite-Vorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_event_subpage_template)

### HTML-Element-Referenzseite

Eine **HTML-Referenzseite** listet alle Attribute auf, die auf einem HTML-Element verfügbar sind, erklärt den Zweck und die Verwendung des Elements und enthält Beispiele, Browser-Kompatibilitätsinformationen und andere wichtige Daten.

#### Beispiel

- [`<video>` Element](/de/docs/Web/HTML/Element/video)

#### Vorlagen

- [HTML-Element-Seiten-Vorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/HTML_element_page_template)

### SVG-Element-Referenzseite

Eine **SVG-Referenzseite** listet alle Attribute auf, die auf einem SVG-Element verfügbar sind, erklärt den Zweck und die Verwendung des Elements und enthält Beispiele, Browser-Kompatibilitätsinformationen und andere wichtige Daten.

#### Beispiel

- [\<g> Element](/de/docs/Web/SVG/Element/g)

#### Vorlagen

- [SVG-Element-Seiten-Vorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/SVG_element_page_template)

### CSS-Modul-Landingpage

Jedes **[CSS](/de/docs/Web/CSS) Modul** repräsentiert eine CSS-Spezifikation, die Unterstützung für bestimmte Features und Implementierungen in CSS bietet. Zum Beispiel repräsentiert das [CSS-Boxmodell](/de/docs/Web/CSS/CSS_box_model) Modul die [Spezifikation](/de/docs/Web/CSS/CSS_box_model#specifications), die die Margen- und Abstands-Eigenschaften beschreibt, die es Ihnen ermöglichen, Abstände innerhalb und um eine CSS-Box zu erstellen.

Eine **CSS-Modul-Landingpage** bietet einen Überblick über die Funktionen, die das Modul bietet, und listet alle Eigenschaften, Datentypen, CSS-Funktionen und so weiter auf, die das Modul anbietet. Wenn möglich, bietet die CSS-Modul-Landingpage eine schnelle Demonstration dessen, was mit den Eigenschaften des Moduls erreicht werden kann, durch ein interaktives Beispiel. Die Modul-Landingpage dient in erster Linie als _Navigations_seite, fungiert jedoch auch als Übersicht, _Referenz_seite für das Modul.

Einige verwandte Eigenschaften und Funktionen, die in andere Module gehören, aber eng mit der Funktionalität des dokumentierten Moduls verwandt sind, können auch in einem Abschnitt _Verwandte Konzepte_ behandelt werden. Zum Beispiel werden der `<easing-function>` Datentyp und die `prefers-reduced-motion` Medienabfrage nicht im CSS-Animationsmodul abgedeckt, aber da sie eng mit CSS-Animationen verwandt sind, ist es eine gute Idee, sie im [Verwandte Konzepte](/de/docs/Web/CSS/CSS_animations#related_concepts) Abschnitt der CSS-Animationsmodul-Landingpage hervorzuheben.

#### Beispiele

- [CSS-Animationen](/de/docs/Web/CSS/CSS_animations)
- [CSS-Grundlegende Benutzeroberfläche](/de/docs/Web/CSS/CSS_basic_user_interface)
- [CSS-Filtereffekte](/de/docs/Web/CSS/CSS_filter_effects)
- [CSS-Scroll-Snap](/de/docs/Web/CSS/CSS_scroll_snap)

#### Vorlagen

- [CSS-Modul-Landingpage-Vorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/CSS_module_landing_page_template)

### CSS-Feature-Referenzseite

Eine **CSS-Referenzseite** listet alle verfügbaren Syntaxelemente für ein CSS-Feature wie einen Selektor oder eine Eigenschaft auf und erklärt den Zweck und die Verwendung des Features. Sie enthält auch Beispiele, Browser-Kompatibilitätsinformationen und andere wichtige Daten.

#### Beispiele

- [background-color Eigenschaft](/de/docs/Web/CSS/background-color)
- [:hover Pseudo-Klasse](/de/docs/Web/CSS/:hover)
- [@media At-Regel](/de/docs/Web/CSS/@media)

#### Vorlagen

- [CSS-Eigenschaftsseiten-Vorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/CSS_property_page_template)
- [CSS-Selektor-Seiten-Vorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/CSS_selector_page_template)
- [CSS-Funktionsseiten-Vorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/CSS_function_page_template)

### HTTP-Header-Referenzseite

Eine **HTTP-Header-Referenzseite** listet alle verfügbaren Direktiven auf, die ein HTTP-Header enthalten kann, und erklärt den Zweck und die Verwendung des Headers. Sie enthält auch Beispiele, Browser-Kompatibilitätsinformationen und andere wichtige Erklärungen.

#### Beispiel

- [Cache-Control Header](/de/docs/Web/HTTP/Headers/Cache-Control)

#### Vorlagen

- [HTTP-Header-Seiten-Vorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/HTTP_header_page_template)

### Konzeptuelle Seite

Eine **konzeptionelle Seite** ist eine _Leitfaden_seite, die etwas erklärt oder lehrt. Generell gilt, wenn eine Seite hauptsächlich aus Prosa besteht und nicht in eine andere Seitentyp fällt, ist es wahrscheinlich eine konzeptionelle Seite. Eine ausführliche Diskussion über ein Thema kann sich über mehrere konzeptionelle Seiten erstrecken und mit den Makros [Next](https://github.com/mdn/yari/blob/main/kumascript/macros/Next.ejs) und [Previous](https://github.com/mdn/yari/blob/main/kumascript/macros/Previous.ejs) verknüpft werden.

#### Beispiele

- [Using the WebVR API](/de/docs/Web/API/WebVR_API/Using_the_WebVR_API)
- [Visualisierungen mit Web Audio API](/de/docs/Web/API/Web_Audio_API/Visualisations_with_Web_Audio_API)
- [Cascade und Vererbung in CSS](/de/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance)

### Glossarseite

Eine **Glossarseite** enthält eine kurze Erklärung eines Begriffs, Themas oder Konzepts. Der erste Absatz sollte eine einfache, in sich geschlossene Beschreibung des Begriffs sein, die nicht mehr als ein paar Sätze umfasst. Dies kann durch Links zu weiteren Informationen im **Siehe auch**-Abschnitt ergänzt werden. Wenn die Seite länger als ein Bildschirm wird, ist sie zu lang und sollte in eine konzeptionelle Seite umgewandelt werden. Siehe [Anleitung: Schreiben und Referenzieren eines Eintrags im Glossar](/de/docs/MDN/Writing_guidelines/Howto/Write_a_new_entry_in_the_glossary) für mehr Details.

#### Beispiele

- [DOM](/de/docs/Glossary/DOM)
- [Exception](/de/docs/Glossary/Exception)
- [Hyperlink](/de/docs/Glossary/Hyperlink)

#### Vorlagen

- [Glossarseiten-Vorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/Glossary_page_template)

### Landingpage

Eine **Landingpage** dient als Menü für seine Unterseiten und ist daher in erster Linie eine _Navigations_seite. Ein Landingpage-Layout wird typischerweise für die Hauptseite eines Themenbaums verwendet. Sie beginnt mit einer kurzen Zusammenfassung des Themas, gefolgt von einer strukturierten Liste von Links zu ihren Unterseiten und optionalem zusätzlichem Material, das für den Leser nützlich sein könnte.

Die Liste der Unterseiten kann automatisch mit den Vorlagen [`SubpagesWithSummaries`](https://github.com/mdn/yari/blob/main/kumascript/macros/SubpagesWithSummaries.ejs) und [`LandingPageListSubpages`](https://github.com/mdn/yari/blob/main/kumascript/macros/LandingPageListSubpages.ejs) generiert werden. In komplexeren Fällen muss die Liste jedoch möglicherweise manuell erstellt und gepflegt werden.

### Beispiele

- [HTML](/de/docs/Web/HTML)
- [CSS](/de/docs/Web/CSS)
- [Web-APIs](/de/docs/Web/API)
- [JavaScript](/de/docs/Web/JavaScript)
- [Lernbereich](/de/docs/Learn)
- [Beiträge zu MDN](/de/docs/MDN/Community/Contributing)

## Siehe auch

- [Seitenkomponenten](/de/docs/MDN/Writing_guidelines/Writing_style_guide#page_components)
- [Erstellung von Codebeispielen in Markdown](/de/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide)
