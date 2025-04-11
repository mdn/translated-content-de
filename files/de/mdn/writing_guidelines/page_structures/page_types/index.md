---
title: Seitentypen
slug: MDN/Writing_guidelines/Page_structures/Page_types
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

Es gibt eine Reihe von Seitentypen, die auf MDN wiederholt verwendet werden.
Dieser Artikel beschreibt diese Seitentypen, ihren Zweck und gibt Beispiele sowie Vorlagen für die Erstellung einer neuen Seite.

Es gibt drei Hauptkategorien von Seitentypen auf MDN, obwohl einige Seitentypen in mehr als eine Kategorie fallen.

- **Referenzseiten** beschreiben die Details von etwas und sind entsprechend der Struktur des beschriebenen Objekts organisiert.
- **Leitfaden-Seiten** beschreiben, wie man etwas tut oder verwendet, und sind basierend auf den Zielen des Lesers organisiert.
- **Navigationsseiten** existieren in erster Linie, um Links zu anderen Seiten bereitzustellen, normalerweise zu verwandten Themen.

## Erstellen einer neuen Seite

Um neue Seiten auf MDN zu erstellen, müssen Sie GitHub verwenden – werfen Sie einen Blick auf unseren [Inhalts-Repo](https://github.com/mdn/content) Abschnitt über [Hinzufügen eines neuen Dokuments](https://github.com/mdn/content/blob/main/CONTRIBUTING.md#adding-a-new-document) für weitere Anweisungen.

## Anleitung zur Nutzung der Vorlagen

Wenn Sie eine neue Seite erstellen, können Sie sicherstellen, dass Sie die richtige Seitenstruktur/-inhalte verwendet haben, indem Sie auf eine unserer Seitenvorlagen zurückgreifen – siehe die untenstehenden Abschnitte.
Sie finden den genauen Quellcode jeder Vorlage (wenn Sie ihn kopieren möchten), indem Sie dem "Source on **GitHub**"-Link am Ende jeder Vorlage folgen.
Diese Seitentypen und Vorlagen sind als veröffentlichte Seiten nicht sonderlich sinnvoll, aber wenn Sie deren Quellcode betrachten, sehen Sie, dass sie viele hilfreiche Kommentare, Platzhalter und Hinweise enthalten, die erläutern, wie die fehlenden Informationen ergänzt werden können, um Ihre Seite zu erstellen.

Am Anfang jeder Vorlage finden Sie einen Abschnitt mit dem Titel _Remove before publishing_ – dieser enthält Informationen darüber, wie der Seitentitel, der Slug, das Seitenleistenmenü und die Tags ausgefüllt werden (z.B. Informationen, die nicht im eigentlichen Text des Artikels erscheinen).
Sie müssen diesen Abschnitt löschen, nachdem Sie die Anweisungen darin befolgt haben, bevor die Seite als fertig betrachtet werden kann.

## Alte Seitenlayouts

Manchmal stoßen Sie auf Referenzseiten im alten Stil, die sich deutlich von den hier vorgestellten Vorlagen unterscheiden.
Zum Beispiel hatten alte Schnittstellenseiten alle Details zu den Mitgliedern der Schnittstellen auf einer einzigen Seite, und einzelne Seiten für Methoden/Eigenschaften/Konstruktoren/Ereignis-Listener existierten nicht.

Wenn Sie auf eine alte Seitengruppe stoßen, wären wir dankbar, wenn Sie sie auf den neuen Stil aktualisieren könnten.
Wir wissen jedoch, dass dies eine große Menge Arbeit sein kann.
Wenn die zu aktualisierenden Informationen nicht zu umfangreich sind und Sie etwas Freizeit haben, versuchen Sie ruhig, sie auf den neuen Stil zu aktualisieren.

Wenn die Arbeit umfangreicher ist, sollten Sie ein paar Faktoren berücksichtigen, um die Arbeit zu priorisieren:

- Wie veraltet sind die Informationen?
- Wie niedrig ist die Qualität der Informationen?
- Wie beliebt ist die Funktion? Wie gefragt sind die Informationen?

Wenn Sie ein Team zusammenstellen möchten, um an einem Update zu arbeiten, oder wenn Sie einfach nur einen Inhalt melden oder diskutieren möchten, der ein Update benötigt, können Sie gerne ein [Inhaltsproblem melden](https://github.com/mdn/content/issues) oder [uns um Hilfe bitten](/de/docs/MDN/Community/Communication_channels).

## Der Front-Matter-Schlüssel des Seitentyps

Wir haben einen Front-Matter-Schlüssel `page-type` definiert, um den Typ der MDN-Seiten klar zu identifizieren. Die unten verlinkten Vorlagen geben an, welche `page-type`-Werte Sie für jeden Seitentyp festlegen sollten.

Für die vollständige Liste der Seitentypen siehe [Der Front-Matter-Schlüssel des Seitentyps](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/Page_type_key).

## Seitenvorlagen

Im Folgenden finden Sie Beispiele der verschiedenen Seiten, die Sie auf MDN finden, sowie Vorlagen, die verwendet werden können, um neuen Inhalt basierend auf dem Inhaltstyp zu erstellen, den Sie präsentieren werden, einschließlich der folgenden Seiten:

- [API Landing Pages](#api_landing_page)
- [API-Referenzseite](#api-referenzseite)
- [API-Referenzunterseiten](#api-referenzunterseiten)
- [Konzeptuelle Seiten](#konzeptuelle_seite)
- [CSS Funktionenreferenz](#css_funktionen-referenzseite)
- [CSS Modul Landing Pages](#css_modul-landing_page)
- [Glossareintrag](#glossarseite)
- [HTML-Element](#html-element-referenzseite)
- [HTTP-Header](#http-header-referenzseite)
- [Landing Page](#landing_page)
- [SVG-Element](#svg-element-referenzseite)
- [Lernen Sie Webentwicklungsseiten kennen](#lernen_sie_webentwicklungsseiten_kennen)

Jeder Abschnitt enthält Links zu Live-Beispielseiten für diesen Seitentyp.

### API Landing Page

Eine **{{Glossary("API", "API")}} Landing Page** bietet einen Überblick darüber, was eine bestimmte API macht, sowie Links zur Dokumentation für jede der Schnittstellen, globale Funktionen, etc., die von der API angeboten werden.
Sie verlinkt nicht direkt auf spezifische Methoden oder Eigenschaften innerhalb der Klassen der API, außer im Kontext des Übersichtstextes.
Es ist in erster Linie eine _Navigationsseite_, dient aber auch als Überblicksreferenz für die API.

In einigen Fällen existieren mehrere APIs, die unterschiedlich und in ihren eigenen Spezifikationen definiert sind, sich aber nahe stehen und daher sinnvollerweise mit einer einzigen API-Landing Page abgedeckt werden könnten.
Zum Beispiel deckt die [Generic Sensor API](https://www.w3.org/TR/generic-sensor/) allgemeine Sensoranliegen ab, spezifischere Anliegen werden jedoch in anderen APIs wie [Ambient Light Sensor](https://www.w3.org/TR/ambient-light/), [Motion Sensor](https://www.w3.org/TR/motion-sensors/) usw. behandelt.
In solchen Fällen sind viele der grundlegenden Konzepte dieselben, daher macht es wenig Sinn, diese über mehrere Landing Pages zu wiederholen.
In einem solchen Fall wäre es sinnvoller, aus Gründen der Wiederholbarkeit und Auffindbarkeit, sie alle unter einer einzigen "Websensoren"-Landing Page zu behandeln.

#### Beispiel

- [WebVR API](/de/docs/Web/API/WebVR_API)

#### Vorlagen

- [API Landing Page Vorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_landing_page_template)

### API-Referenzseite

> [!NOTE]
> Auch bekannt als _Schnittstellen-Landing Page_.

Eine **API-Referenzseite** listet alle Methoden, Eigenschaften, Ereignisse usw. auf, die Mitglieder einer bestimmten Schnittstelle oder Klasse sind.
Sie bietet einen Überblick darüber, was die Klasse oder Schnittstelle tut oder wofür sie verwendet wird, und gibt Links zur Dokumentation für jedes dieser Mitglieder.
Sie ist detaillierter als eine API-Landing Page, die typischerweise auf mehrere API-Referenzseiten verlinkt.

#### Beispiel

- [Request Schnittstelle](/de/docs/Web/API/Request) der [Fetch API](/de/docs/Web/API/Fetch_API).

#### Vorlagen

- [API-Referenzseite Vorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_reference_page_template)

### API-Referenzunterseiten

Eine **API-Referenzunterseite** ist ein Kind einer API-Referenzseite.
Sie dokumentiert ein einzelnes Schnittstellenmitglied im Detail.

#### Beispiele

- [`count()` Methode](/de/docs/Web/API/IDBIndex/count) der [IDBIndex](/de/docs/Web/API/IDBIndex) Schnittstelle (Teil der [IndexedDB API](/de/docs/Web/API/IndexedDB_API))
- [Eigenschaft capabilities](/de/docs/Web/API/VRDisplay/capabilities) der [VRDisplay](/de/docs/Web/API/VRDisplay) Schnittstelle (Teil der [WebVR API](/de/docs/Web/API/WebVR_API))
- [Request() Konstruktor](/de/docs/Web/API/Request/Request) der [Request](/de/docs/Web/API/Request) Schnittstelle (Teil der [Fetch API](/de/docs/Web/API/Fetch_API))
- [vrdisplaypresentchange Ereignis](/de/docs/Web/API/Window/vrdisplaypresentchange_event) (Teil der [WebVR API](/de/docs/Web/API/WebVR_API), hängt an der [Window](/de/docs/Web/API/Window) Schnittstelle)

#### Vorlagen

- [API Method-Unterseiten Vorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_method_subpage_template)
- [API Property-Unterseiten Vorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_property_subpage_template)
- [API Konstruktor-Unterseiten Vorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_constructor_subpage_template)
- [API Event-Unterseiten Vorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_event_subpage_template)

### HTML-Element-Referenzseite

Eine **HTML-Referenzseite** listet alle Attribute auf, die auf einem HTML-Element verfügbar sind, erklärt den Zweck und die Verwendung des Elements und bietet Beispiele, Informationen zur Browser-Kompatibilität und andere wichtige Daten.

#### Beispiel

- [`<video>` Element](/de/docs/Web/HTML/Reference/Elements/video)

#### Vorlagen

- [HTML Elementseite Vorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/HTML_element_page_template)

### SVG-Element-Referenzseite

Eine **SVG-Referenzseite** listet alle Attribute auf, die auf einem SVG-Element verfügbar sind, erklärt den Zweck und die Verwendung des Elements und bietet Beispiele, Informationen zur Browser-Kompatibilität und andere wichtige Daten.

#### Beispiel

- [\<g> Element](/de/docs/Web/SVG/Reference/Element/g)

#### Vorlagen

- [SVG Elementseite Vorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/SVG_element_page_template)

### CSS Modul-Landing Page

Jedes **[CSS](/de/docs/Web/CSS) Modul** stellt eine CSS-Spezifikation dar, die Unterstützung für bestimmte Funktionen und Implementierungen in CSS bietet. Zum Beispiel repräsentiert das [CSS Box Model](/de/docs/Web/CSS/CSS_box_model) Modul die [Spezifikation](/de/docs/Web/CSS/CSS_box_model#specifications), die die Margin- und Padding-Eigenschaften beschreibt, die es ermöglichen, Abstände in und um eine CSS-Box zu erstellen.

Eine **CSS Modul-Landing Page** bietet einen Überblick über die Funktionen, die das Modul bietet, und listet alle Eigenschaften, Datentypen, CSS-Funktionen usw. auf, die vom Modul angeboten werden. Wenn möglich, bietet die CSS Modul-Landing Page eine kurze Demonstration dessen, was mit den Eigenschaften des Moduls erreicht werden kann, durch ein interaktives Beispiel.
Die Modul-Landing Page dient in erster Linie als _Navigationsseite_, erfüllt aber auch die Funktion einer Überblicksreferenz für das Modul.

Einige verwandte Eigenschaften und Merkmale, die in andere Module gehören, aber eng mit der Funktionalität zusammenhängen, die das zu dokumentierende Modul bietet, können auch in einem _Verwandte Konzepte_ Abschnitt behandelt werden.
Zum Beispiel ist der `<easing-function>` Datentyp und die `prefers-reduced-motion` Media Query nicht im CSS Animationsmodul abgedeckt, aber weil sie eng mit CSS Animationen verbunden sind, ist es eine gute Idee, sie im [Verwandte Konzepte](/de/docs/Web/CSS/CSS_animations#related_concepts) Abschnitt der CSS Animationsmodul-Landing Page hervorzuheben.

#### Beispiele

- [CSS Animationen](/de/docs/Web/CSS/CSS_animations)
- [CSS Basisbenutzeroberfläche](/de/docs/Web/CSS/CSS_basic_user_interface)
- [CSS Filtereffekte](/de/docs/Web/CSS/CSS_filter_effects)
- [CSS Scroll Snap](/de/docs/Web/CSS/CSS_scroll_snap)

#### Vorlagen

- [CSS Modul-Landing Page Vorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/CSS_module_landing_page_template)

### CSS Funktionen-Referenzseite

Eine **CSS Referenzseite** listet die gesamte verfügbare Syntax für eine CSS-Funktion wie einen Selektor oder eine Eigenschaft auf und erklärt den Zweck und die Verwendung der Funktion. Sie bietet auch Beispiele, Informationen zur Browser-Kompatibilität und andere wichtige Daten.

#### Beispiele

- [`background-color` Eigenschaft](/de/docs/Web/CSS/background-color)
- [`:hover` Pseudo-Klasse](/de/docs/Web/CSS/:hover)
- [`@media` Regel](/de/docs/Web/CSS/@media)

#### Vorlagen

- [CSS Eigenschaftsseite Vorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/CSS_property_page_template)
- [CSS Selektorseite Vorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/CSS_selector_page_template)
- [CSS Funktionseite Vorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/CSS_function_page_template)

### HTTP-Header-Referenzseite

Eine **HTTP-Header-Referenzseite** listet alle verfügbaren Direktiven auf, die ein HTTP-Header enthalten kann und erklärt den Zweck und die Verwendung des Headers.
Sie bietet auch Beispiele, Informationen zur Browser-Kompatibilität und andere wichtige Erklärungen.

#### Beispiel

- [Cache-Control Header](/de/docs/Web/HTTP/Reference/Headers/Cache-Control)

#### Vorlagen

- [HTTP Headerseite Vorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/HTTP_header_page_template)

### Konzeptuelle Seite

Eine **konzeptuelle Seite** ist eine _Leitfaden_-Seite, die etwas erklärt oder lehrt.
In der Regel, wenn eine Seite hauptsächlich Prosa enthält und nicht in einen anderen Seitentyp fällt, ist sie wahrscheinlich eine konzeptuelle Seite.
Eine ausführliche Diskussion eines Themas könnte über mehrere konzeptionelle Seiten verbreitet sein und mit [Next](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/previous_menu_next.rs) and [Previous](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/previous_menu_next.rs) Makros verlinkt werden.

#### Beispiele

- [Verwendung der WebVR API](/de/docs/Web/API/WebVR_API/Using_the_WebVR_API)
- [Visualisierungen mit der Web Audio API](/de/docs/Web/API/Web_Audio_API/Visualizations_with_Web_Audio_API)
- [Konflikte behandeln](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)

### Glossarseite

Eine **Glossarseite** enthält eine kurze Erklärung eines Begriffs, Themas oder Konzepts.
Der erste Absatz sollte eine einfache, eigenständige Beschreibung des Begriffs sein, nicht mehr als ein paar Sätze.
Dies kann gefolgt werden von Links zu weiteren Informationen im **Siehe auch** Abschnitt.
Wenn die Seite mehr als eine Bildschirmseite lang wird, ist sie zu lang und sollte in eine konzeptuelle Seite umgewandelt werden. Siehe [Anleitung zur Erstellung und Referenz eines Eintrags im Glossar](/de/docs/MDN/Writing_guidelines/Howto/Write_a_new_entry_in_the_glossary) für mehr Details.

#### Beispiele

- {{Glossary("DOM", "DOM")}}
- {{Glossary("Exception", "Ausnahme")}}
- {{Glossary("Hyperlink", "Hyperlink")}}

#### Vorlagen

- [Glossarseite Vorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/Glossary_page_template)

### Landing Page

Eine **Landing Page** dient als eine Art Menü für ihre Unterseiten und ist daher in erster Linie eine _Navigationsseite_.
Ein Landing Page-Layout wird typischerweise für die Root-Seite eines Baumes von Seiten über ein bestimmtes Thema verwendet.
Es beginnt mit einer kurzen Zusammenfassung des Themas, dann präsentiert es eine strukturierte Liste von Links zu seinen Unterseiten und optional, zusätzliches Material, das für den Leser nützlich sein könnte.

Die Liste der Unterseiten kann automatisch mit der [`SubpagesWithSummaries`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/subpages_with_summaries.rs) Vorlage generiert werden. In komplexeren Fällen muss die Liste jedoch manuell erstellt (und gepflegt) werden.

### Lernen Sie Webentwicklungsseiten kennen

Der [Lernen Sie Webentwicklungsseiten kennen](/de/docs/Learn_web_development) Abschnitt von MDN richtet sich speziell an Personen, die die grundlegenden Grundlagen der Webentwicklung erlernen möchten, und erfordert daher einen anderen Ansatz als der Rest des MDN-Inhalts. Sie finden weitere Richtlinien unter [Richtlinien zum Schreiben von Lerninhalten für die Webentwicklung](/de/docs/MDN/Writing_guidelines/Learning_content).

Es gibt nur wenige Arten von Seiten im Bereich Lernen Sie Webentwicklungsseiten kennen:

- **Modulgruppen-Landing Page**, zum Beispiel [Kern-Lernmodule](/de/docs/Learn_web_development/Core)
  - : Diese enthalten einen Einführungsteil, einen Abschnitt, der die Voraussetzungen beschreibt, die Sie vor Beginn der Modulgruppe haben sollten, und eine Liste der Module, gefolgt von einer optionalen Liste von "Siehe auch"-Links.
- **Modul-Landing Page**, zum Beispiel [Inhalte mit HTML strukturieren](/de/docs/Learn_web_development/Core/Structuring_content)
  - : Diese enthalten einen Einführungsteil, einen Abschnitt, der die Voraussetzungen beschreibt, die Sie vor Beginn des Moduls haben sollten, und eine Liste der enthaltenen Tutorials, gefolgt von einer optionalen Liste von "Zusätzlichen Tutorials", die verwandt, aber nicht Teil des zentralen Lernpfads sind, und einer optionalen Liste von "Siehe auch"-Links.
- **Tutorial-Seite**, zum Beispiel [Grundlegende HTML-Syntax](/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax)
  - : Die Struktur eines Lern-Tutorials ist nicht strikt, aber es muss eine praktische Lernerfahrung bieten (siehe [Richtlinien zum Schreiben von Lerninhalten für die Webentwicklung > Ansatz](/de/docs/MDN/Writing_guidelines/Learning_content#approach)), es muss eine Liste von "Voraussetzungen" und "Lernergebnissen" am Anfang haben, und der Inhalt muss die angegebenen Lernergebnisse lehren.

### Beispiele

- [HTML](/de/docs/Web/HTML)
- [CSS](/de/docs/Web/CSS)
- [Web-APIs](/de/docs/Web/API)
- [JavaScript](/de/docs/Web/JavaScript)
- [Lernen Sie Webentwicklung](/de/docs/Learn_web_development)
- [Community-Ressourcen](/de/docs/MDN/Community)

## Siehe auch

- [Seitenkomponenten](/de/docs/MDN/Writing_guidelines/Writing_style_guide#page_components)
- [Erstellen von Code-Beispielen in Markdown](/de/docs/MDN/Writing_guidelines/Code_style_guide)
