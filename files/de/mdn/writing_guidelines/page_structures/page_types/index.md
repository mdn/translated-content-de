---
title: Seitentypen
slug: MDN/Writing_guidelines/Page_structures/Page_types
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Es gibt eine Reihe von Seitentypen, die auf MDN wiederholt verwendet werden. Dieser Artikel beschreibt diese Seitentypen, ihren Zweck und gibt Beispiele für jeden sowie Vorlagen, die beim Erstellen einer neuen Seite verwendet werden können.

Es gibt drei breite Kategorien von Seitentypen auf MDN, obwohl einige Seitentypen in mehr als eine Kategorie fallen.

- **Referenz**-Seiten beschreiben die Details von etwas und sind entsprechend der Struktur des beschriebenen Objekts organisiert.
- **Leitfaden**-Seiten beschreiben, wie man etwas tut oder verwendet, und sind basierend auf den Zielen des Lesers organisiert.
- **Navigations**-Seiten existieren hauptsächlich, um Links zu anderen Seiten bereitzustellen, meist über verwandte Themen.

## Eine neue Seite erstellen

Das Hinzufügen eines neuen Dokuments ist relativ unkompliziert, besonders wenn Sie eine `index.md` Datei aus einem ähnlichen Thema kopieren können. Es gibt ein paar Dinge zu beachten:

- Dokumente werden in Markdown in einer `index.md` Datei geschrieben.
- Zum Beispiel, wenn Sie ein neues Dokument für einen HTTP-Header namens `foo` erstellen, erstellen Sie einen neuen Ordner unter `files/en-us/web/http/reference/headers/foo` und legen Sie die Markdown-Datei in diesen Ordner (`files/en-us/web/http/reference/headers/foo/index.md`).
- Die `index.md` Datei eines Dokuments muss mit Front-Matter beginnen, die den `title`, `slug` und meist den `page-type` definiert. Es könnte hilfreich sein, sich auf das Front-Matter eines ähnlichen Dokuments in dessen `index.md` zu beziehen.

## Wie man die Vorlagen verwendet

Wenn Sie eine neue Seite erstellen, können Sie sicherstellen, dass Sie die richtige Seitenstruktur/-inhalte verwendet haben, indem Sie sich auf eine unserer Seitenvorlagen beziehen — siehe die folgenden Abschnitte. Sie können den genauen Quellcode jeder Vorlage finden (wenn Sie sie kopieren möchten), indem Sie dem Link „Source on **GitHub**“ am Ende jeder Vorlage folgen. Diese Seitenvorlagen machen als veröffentlichte Seiten nicht viel Sinn, aber wenn Sie ihren Quellcode ansehen, werden Sie sehen, dass sie viele hilfreiche Kommentare, Platzhalter und Hinweise enthalten, die detailliert erklären, wie die fehlenden Informationen ausgefüllt werden und wie Sie Ihre Seite erstellen können.

Oben in jeder Vorlage finden Sie einen Abschnitt mit dem Titel _Before publishing entfernen_ — dieser enthält Informationen darüber, wie der Seitentitel, der Slug, das Seitenleistenmenü und die Tags ausgefüllt werden (z. B. Informationen, die nicht im Artikelkörper erscheinen). Sie müssen diesen Abschnitt nach Befolgung der Anweisungen darin löschen, bevor die Seite als fertig betrachtet werden kann.

## Alte Seitengestaltungen

Manchmal stoßen Sie auf alte Referenzseiten, die merklich anders aussehen als die hier präsentierten Vorlagen. Zum Beispiel hatten alte Schnittstellenseiten alle Mitgliederdetails der Schnittstellen auf einer einzigen Seite, und einzelne Methoden-/Eigenschafts-/Konstruktions-/Ereignislistenerseiten existierten nicht.

Wenn Sie auf eine alte Seitengestaltung treffen, würden wir uns freuen, wenn Sie sie auf die neue Gestaltung aktualisieren! Wir schätzen jedoch, dass dies eine große Menge Arbeit sein könnte. Wenn die Informationen, die aktualisiert werden müssen, nicht zu umfangreich sind und Sie etwas freie Zeit haben, versuchen Sie es unbedingt, sie auf die neue Gestaltung zu aktualisieren.

Wenn die Arbeit bedeutender ist, sollten Sie einige Faktoren bei der Priorisierung der Arbeit in Betracht ziehen:

- Wie veraltet sind die Informationen?
- Wie minderwertig sind die Informationen?
- Wie populär ist das Feature? Wie gefragt sind die Informationen?

Wenn Sie ein Team zusammenstellen möchten, um an einem Update zu arbeiten, oder wenn Sie einfach nur ein Inhaltsthema melden oder diskutieren möchten, das ein Update benötigt, zögern Sie nicht, [ein Inhaltsproblem zu melden](https://github.com/mdn/content/issues) oder [uns um Hilfe zu bitten](/de/docs/MDN/Community/Communication_channels).

## Der Front Matter Key „page-type“

Wir haben einen Front Matter Key `page-type` definiert, um den Seitentyp auf MDN eindeutig zu identifizieren. Die unten verlinkten Vorlagen geben an, welche `page-type` Werte für jeden Seitentyp gesetzt werden sollten.

Für die vollständige Liste der Seitentypen siehe [Der Front Matter Key „page-type“](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/Page_type_key).

## Seitentemplates

Unten sind Beispiele der verschiedenen Seiten, die Sie auf MDN finden werden, sowie Vorlagen, die verwendet werden können, um neue Inhalte basierend auf dem präsentierten Inhaltstyp zu erstellen, einschließlich der folgenden Seiten:

- [API-Übersichtsseite](#api-übersichtsseite)
- [API-Referenzseite](#api-referenzseite)
- [Unterseite der API-Referenz](#unterseite_der_api-referenz)
- [HTML-Element-Referenzseite](#html-element-referenzseite)
- [HTML-Attribut-Referenzseite](#html-attribut-referenzseite)
- [SVG-Element-Referenzseite](#svg-element-referenzseite)
- [CSS-Modul-Übersichtsseite](#css-modul-übersichtsseite)
- [CSS-Feature-Referenzseite](#css-feature-referenzseite)
- [HTTP-Header-Referenzseite](#http-header-referenzseite)
- [ARIA-Referenzseite](#aria-referenzseite)
- [Konzeptionelle Seite](#konzeptionelle_seite)
- [Glossarseite](#glossarseite)
- [Übersichtsseite](#übersichtsseite)
- [Lernen der Webentwicklung Seiten](#lernen_der_webentwicklung_seiten)

Jeder Abschnitt enthält Links zu lebenden Beispielseiten für diesen Seitentyp.

### API-Übersichtsseite

Eine **{{Glossary("API", "API")}}-Übersichtsseite** bietet einen Überblick darüber, was eine bestimmte API tut, sowie Links zur Dokumentation der einzelnen Schnittstellen, globalen Objekte, Funktionen usw., die von der API angeboten werden. Sie verlinkt nicht direkt auf spezifische Methoden oder Eigenschaften innerhalb der API-Klassen, außer im Kontext des Überblickstextes. Sie ist primär eine _Navigationsseite_, fungiert aber auch als schnell erfassbare _Referenzseite_ für die API.

Es gibt einige Fälle, in denen mehrere APIs existieren, die zwar eigenständig sind und in ihren eigenen Spezifikationen definiert sind, aber eng verwandt sind und daher auf einer einzigen API-Übersichtsseite behandelt werden sollten. Zum Beispiel deckt die [Generic Sensor API](https://w3c.github.io/sensors/) allgemeine Belange von Sensoren ab, aber spezifischere Belange werden in anderen APIs wie der [Ambient Light Sensor](https://w3c.github.io/ambient-light/), [Motion Sensor](https://w3c.github.io/motion-sensors/) usw. abgedeckt. In solchen Fällen sind viele der übergeordneten Konzepte dieselben, sodass es keinen Sinn macht, diese mehrfach in mehreren Übersichtsseiten zu wiederholen. In einem solchen Fall ist es im Hinblick auf Wiederholung und Auffindbarkeit sinnvoller, alle unter einer einzigen "Web Sensors"-Übersichtsseite abzudecken.

#### Beispiel

- [WebVR API](/de/docs/Web/API/WebVR_API)

#### Vorlagen

- [API-Übersichtsseitenvorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_landing_page_template)

### API-Referenzseite

> [!NOTE]
> Auch bekannt als eine _Schnittstellen-Übersichtsseite_.

Eine **API-Referenzseite** listet alle Methoden, Eigenschaften, Ereignisse usw. auf, die Mitglieder einer bestimmten Schnittstelle oder Klasse sind. Sie bietet einen Überblick darüber, was die Klasse oder Schnittstelle tut oder wofür sie verwendet wird, und gibt Links zur Dokumentation für jedes dieser Mitglieder. Sie ist granularer als eine API-Übersichtsseite, die typischerweise auf mehrere API-Referenzseiten verweist.

#### Beispiel

- [Request-Schnittstelle](/de/docs/Web/API/Request) der [Fetch API](/de/docs/Web/API/Fetch_API).

#### Vorlagen

- [API-Referenzseitenvorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_reference_page_template)

### Unterseite der API-Referenz

Eine **API-Referenzunterseite** ist ein Kind einer API-Referenzseite. Sie dokumentiert ein einzelnes Schnittstellenmitglied im Detail.

#### Beispiele

- [`count()` Methode](/de/docs/Web/API/IDBIndex/count) der [IDBIndex](/de/docs/Web/API/IDBIndex) Schnittstelle (Teil der [IndexedDB API](/de/docs/Web/API/IndexedDB_API))
- [Capabilities-Eigenschaft](/de/docs/Web/API/VRDisplay/capabilities) der [VRDisplay](/de/docs/Web/API/VRDisplay) Schnittstelle (Teil der [WebVR API](/de/docs/Web/API/WebVR_API))
- [Request()-Konstruktor](/de/docs/Web/API/Request/Request) der [Request](/de/docs/Web/API/Request) Schnittstelle (Teil der [Fetch API](/de/docs/Web/API/Fetch_API))
- [vrdisplaypresentchange-Ereignis](/de/docs/Web/API/Window/vrdisplaypresentchange_event) (Teil der [WebVR API](/de/docs/Web/API/WebVR_API), hängt an der [Window](/de/docs/Web/API/Window)-Schnittstelle)

#### Vorlagen

- [API-Methodenunterseitenvorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_method_subpage_template)
- [API-Eigenschaftenunterseitenvorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_property_subpage_template)
- [API-Konstruktorunterseitenvorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_constructor_subpage_template)
- [API-Ereignisunterseitenvorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_event_subpage_template)

### HTML-Element-Referenzseite

Eine **HTML-Referenzseite** listet alle Attribute auf, die auf einem HTML-Element verfügbar sind, erklärt den Zweck und die Verwendung des Elements und liefert Beispiele, Informationen zur Browser-Kompatibilität und andere wichtige Daten.

#### Beispiel

- [`<video>` Element](/de/docs/Web/HTML/Reference/Elements/video)

#### Vorlagen

- [HTML-Element-Seitenvorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/HTML_element_page_template)

### HTML-Attribut-Referenzseite

Eine HTML-Attribut-Seite listet alle Werte auf, die für ein HTML-Attribut existieren, erklärt den Zweck und die Anwendungsfälle des Attributs und liefert Beispiele, Informationen zur Browser-Kompatibilität und andere wichtige Daten.

> [!NOTE]
> Element-spezifische Attribute (z. B. `placeholder` für `<input>`) benötigen keine eigene Seite, wenn die Attribute ausreichend innerhalb der Referenzseite des übergeordneten Elements behandelt werden können (z. B. sollte das `placeholder`-Attribut auf der `<input>`-Elementseite und nicht als eigenständige Seite behandelt werden).

#### Beispiel

- [`class` Attribut](/de/docs/Web/HTML/Reference/Global_attributes/class)

#### Vorlagen

- [HTML-Attribut-Seitenvorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/HTML_attribute_page_template)

### SVG-Element-Referenzseite

Eine **SVG-Referenzseite** listet alle Attribute auf, die auf einem SVG-Element verfügbar sind, erklärt den Zweck und die Verwendung des Elements und liefert Beispiele, Informationen zur Browser-Kompatibilität und andere wichtige Daten.

#### Beispiel

- [\<g> Element](/de/docs/Web/SVG/Reference/Element/g)

#### Vorlagen

- [SVG-Element-Seitenvorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/SVG_element_page_template)

### CSS-Modul-Übersichtsseite

Jedes **[CSS](/de/docs/Web/CSS)-Modul** repräsentiert eine CSS-Spezifikation, die Unterstützung für bestimmte Features und Implementierungen in CSS bietet. Zum Beispiel repräsentiert das [CSS-Box-Modell](/de/docs/Web/CSS/Guides/Box_model) Modul die [Spezifikation](/de/docs/Web/CSS/Guides/Box_model#specifications), die die Rand- und Abstandseigenschaften beschreibt, mit denen Sie Abstände in und um ein CSS-Box-Element erstellen können.

Eine **CSS-Modul-Übersichtsseite** bietet einen Überblick über die Funktionen, die das Modul bietet, und listet alle Eigenschaften, Datentypen, CSS-Funktionen usw. auf, die vom Modul angeboten werden. Wenn möglich, bietet die CSS-Modul-Übersichtsseite eine schnelle Demonstration dessen, was mit den Eigenschaften des Moduls erreicht werden kann, durch ein interaktives Beispiel. Die Modul-Übersichtseite dient hauptsächlich als _Navigationsseite_, fungiert aber auch als schnell erfasste _Referenzseite_ für das Modul.

Einige verwandte Eigenschaften und Features, die in anderen Modulen gehören, aber die eng mit der vom Modul beschriebenen Funktionalität in Verbindung stehen, können auch in einem Abschnitt _Verwandte Konzepte_ behandelt werden. Zum Beispiel wird der `<easing-function>` Datentyp und die `prefers-reduced-motion` Media-Query nicht im CSS-Animationsmodul behandelt, aber da sie eng mit CSS-Animationen verbunden sind, ist es eine gute Idee, sie im [Verwandte Konzepte](/de/docs/Web/CSS/Guides/Animations#related_concepts) Abschnitt der CSS-Animationsmodul-Übersichtsseite hervorzuheben.

#### Beispiele

- [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations)
- [CSS-Benutzeroberfläche](/de/docs/Web/CSS/Guides/Basic_user_interface)
- [CSS-Filtern](/de/docs/Web/CSS/Guides/Filter_effects)
- [CSS-Scroll-Snap](/de/docs/Web/CSS/Guides/Scroll_snap)

#### Vorlagen

- [CSS-Modul-Übersichtsseitenvorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/CSS_module_landing_page_template)

### CSS-Feature-Referenzseite

Eine **CSS-Referenzseite** listet alle verfügbaren Syntaxen für ein CSS-Feature wie einen Selektor oder eine Eigenschaft auf und erklärt den Zweck und die Verwendung des Features. Sie liefert auch Beispiele, Informationen zur Browser-Kompatibilität und andere wichtige Daten.

#### Beispiele

- [`background-color` Eigenschaft](/de/docs/Web/CSS/Reference/Properties/background-color)
- [`:hover` Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/:hover)
- [`@media` At-Regel](/de/docs/Web/CSS/Reference/At-rules/@media)

#### Vorlagen

- [CSS-Eigenschaften-Seitenvorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/CSS_property_page_template)
- [CSS-Selektor-Seitenvorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/CSS_selector_page_template)
- [CSS-Funktionsseitenvorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/CSS_function_page_template)

### HTTP-Header-Referenzseite

Eine **HTTP-Header-Referenzseite** listet alle verfügbaren Direktiven auf, die ein HTTP-Header enthalten kann, und erklärt den Zweck und die Verwendung des Headers. Sie liefert auch Beispiele, Informationen zur Browser-Kompatibilität und andere wichtige Erklärungen.

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

### Konzeptionelle Seite

Eine **konzeptionelle Seite** ist eine _Leitfaden_-Seite, die etwas erklärt oder lehrt. Im Allgemeinen, wenn eine Seite hauptsächlich Text enthält und nicht in eine andere Seitentypkategorie fällt, ist es wahrscheinlich eine konzeptionelle Seite. Eine ausführliche Diskussion eines Themas könnte über mehrere konzeptionelle Seiten verteilt sein und mit den Makros [Next](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/previous_menu_next.rs) und [Previous](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/previous_menu_next.rs) verlinkt sein.

#### Beispiele

- [Verwendung der WebVR API](/de/docs/Web/API/WebVR_API/Using_the_WebVR_API)
- [Visualisierungen mit der Web Audio API](/de/docs/Web/API/Web_Audio_API/Visualizations_with_Web_Audio_API)
- [Umgang mit Konflikten](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)

### Glossarseite

Eine **Glossarseite** enthält eine kurze Erklärung eines Begriffs, Themas oder Konzepts. Der erste Absatz sollte eine einfache, in sich geschlossene Beschreibung des Begriffs sein, nicht länger als ein paar Sätze. Darauf können Links zu weiterführenden Informationen im Abschnitt **Siehe auch** folgen. Wenn die Seite mehr als eine Bildschirmseite lang wird, ist sie zu lang und sollte in eine konzeptionelle Seite umgewandelt werden. Siehe [Anleitung zum Schreiben und Referenzieren eines Glossarbeitrags](/de/docs/MDN/Writing_guidelines/Howto/Write_a_new_entry_in_the_glossary) für weitere Details.

#### Beispiele

- {{Glossary("DOM", "DOM")}}
- {{Glossary("Exception", "Exception")}}
- {{Glossary("Hyperlink", "Hyperlink")}}

#### Vorlagen

- [Glossarseitenvorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/Glossary_page_template)

### Übersichtsseite

Eine **Übersichtsseite** dient als eine Art Menü für ihre Unterseiten und ist daher primär eine _Navigationsseite_. Eine Übersichtsseite wird typischerweise für die Hauptseite eines Baums von Seiten über ein bestimmtes Thema verwendet. Sie beginnt mit einer kurzen Zusammenfassung des Themas, dann wird eine strukturierte Liste von Links zu den Unterseiten präsentiert, und optional weiteres Material, das für den Leser nützlich sein könnte.

Die Liste der Unterseiten kann automatisch unter Verwendung der [`SubpagesWithSummaries`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/subpages_with_summaries.rs) Vorlage generiert werden. In komplexeren Fällen muss die Liste jedoch möglicherweise manuell erstellt und gepflegt werden.

### Lernen der Webentwicklung Seiten

Der [Lernen der Webentwicklung](/de/docs/Learn_web_development) Abschnitt von MDN richtet sich speziell an Personen, die die grundlegenden Grundlagen der Webentwicklung erlernen möchten, und erfordert daher einen anderen Ansatz als der Rest des MDN-Inhalts. Weitere Richtlinien finden Sie in den [Richtlinien zum Schreiben des Lernens der Webentwicklung](/de/docs/MDN/Writing_guidelines/Learning_content).

Es gibt nur einige wenige seitentypische Konventionen im Lernen der Webentwicklung:

- **Modulgruppen-Übersichtsseite**, zum Beispiel [Kernlerneinheiten](/de/docs/Learn_web_development/Core)
  - : Diese enthalten einen Einführungstext, einen Abschnitt, der die Voraussetzungen beschreibt, die Sie für den Beginn der Modulgruppe haben sollten, und eine Liste der Module, gefolgt von einer optionalen Liste von „Siehe auch“-Links.
- **Modul-Übersichtsseite**, zum Beispiel [Strukturieren von Inhalten mit HTML](/de/docs/Learn_web_development/Core/Structuring_content)
  - : Diese enthalten einen Einführungstext, einen Abschnitt, der die Voraussetzungen beschreibt, die Sie für den Beginn des Moduls haben sollten, und eine Liste der enthaltenen Tutorials, gefolgt von einer optionalen Liste von „Zusätzliche Tutorials“, die verwandt, aber nicht Teil des zentralen Lernpfads sind, und einer optionalen Liste von „Siehe auch“-Links.
- **Tutorial-Seite**, zum Beispiel [Grundlegende HTML-Syntax](/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax)
  - : Die Struktur eines Lern-Tutorials ist nicht strikt, aber es muss eine praktische Lernerfahrung bieten (siehe [Richtlinien zum Schreiben des Lernens der Webentwicklung > Ansatz](/de/docs/MDN/Writing_guidelines/Learning_content#approach)), es muss einen Satz von „Voraussetzungen“ und „Lernergebnisse“ oben auflisten, und der Inhalt muss die angegebenen Lernergebnisse lehren.

### Beispiele

- [HTML](/de/docs/Web/HTML)
- [CSS](/de/docs/Web/CSS)
- [Web-APIs](/de/docs/Web/API)
- [JavaScript](/de/docs/Web/JavaScript)
- [Lernen der Webentwicklung](/de/docs/Learn_web_development)
- [Community-Ressourcen](/de/docs/MDN/Community)

## Siehe auch

- [Seitenkomponenten](/de/docs/MDN/Writing_guidelines/Writing_style_guide#page_components)
- [Erstellen von Code-Beispielen in Markdown](/de/docs/MDN/Writing_guidelines/Code_style_guide)
