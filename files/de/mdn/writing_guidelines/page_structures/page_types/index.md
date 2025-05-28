---
title: Seitentypen
slug: MDN/Writing_guidelines/Page_structures/Page_types
l10n:
  sourceCommit: 941ade970fd7ebad52af692b6ac27cfd96f94100
---

Es gibt eine Reihe von Seitentypen, die auf MDN wiederholt verwendet werden. Dieser Artikel beschreibt diese Seitentypen, ihren Zweck und gibt Beispiele für jeden sowie Vorlagen, die beim Erstellen einer neuen Seite verwendet werden können.

Es gibt drei übergeordnete Kategorien von Seitentypen auf MDN, obwohl einige Seitentypen in mehr als eine Kategorie fallen.

- **Referenz**-Seiten beschreiben die Details von etwas und sind nach der Struktur des beschriebenen Objekts organisiert.
- **Leitfaden**-Seiten beschreiben, wie man etwas tut oder verwendet und sind basierend auf den Zielen des Lesers organisiert.
- **Navigations**-Seiten dienen in erster Linie dazu, Links zu anderen Seiten bereitzustellen, meist zu verwandten Themen.

## Erstellen einer neuen Seite

Um neue Seiten auf MDN zu erstellen, müssen Sie GitHub verwenden – sehen Sie sich unseren [Inhalts-Repo](https://github.com/mdn/content) Abschnitt über [Hinzufügen eines neuen Dokuments](https://github.com/mdn/content/blob/main/CONTRIBUTING.md#adding-a-new-document) für weitere Anweisungen an.

## Verwendung der Vorlagen

Beim Erstellen einer neuen Seite können Sie sicherstellen, dass Sie die richtige Seitenstruktur/Inhalte verwendet haben, indem Sie auf eine unserer Seitenvorlagen verweisen – siehe die unten stehenden Abschnitte. Sie können den exakten Quellcode jeder Vorlage (wenn Sie ihn kopieren möchten) finden, indem Sie dem "Source on **GitHub**" Link am Ende jeder Vorlage folgen. Diese Seitenvorlagen machen als veröffentlichte Seiten nicht viel Sinn, aber wenn Sie deren Quellcode betrachten, werden Sie sehen, dass sie viele hilfreiche Kommentare, Platzhalter und Hinweise enthalten, wie Sie die fehlenden Informationen ausfüllen und Ihre Seite erstellen können.

Am Anfang jeder Vorlage finden Sie einen Abschnitt mit dem Titel _Vor der Veröffentlichung entfernen_ – dieser enthält Informationen darüber, wie Sie den Seitentitel, den Slug, das Sidebar-Menü und die Tags ausfüllen (z.B. Informationen, die nicht im Haupttext des Artikels erscheinen). Sie müssen diesen Abschnitt löschen, nachdem Sie die Anweisungen darin befolgt haben, bevor die Seite als fertig betrachtet werden kann.

## Alte Seitenlayouts

Manchmal stoßen Sie auf alte Referenzseiten, die sich deutlich von den hier vorgestellten Vorlagen unterscheiden. Zum Beispiel hatten alte Schnittstellenseiten alle Details der Mitglieder der Schnittstellen auf einer einzigen Seite, und es existierten keine einzelnen Seiten für Methoden/Eigenschaften/Konstruktoren/Ereignis-Listener.

Wenn Sie auf eine alte Sammlung von Seiten stoßen, würden wir uns freuen, wenn Sie diese auf den neuen Stil aktualisieren würden! Wir wissen jedoch zu schätzen, dass dies eine große Menge an Arbeit sein kann. Wenn die zu aktualisierenden Informationen nicht zu umfangreich sind und Sie etwas Freizeit haben, versuchen Sie gerne, diese auf den neuen Stil zu aktualisieren.

Wenn die Arbeit bedeutender ist, sollten Sie einige Faktoren berücksichtigen, wenn Sie die Arbeit priorisieren:

- Wie veraltet sind die Informationen?
- Wie niedrig ist die Qualität der Informationen?
- Wie populär ist das Feature? Wie gefragt sind die Informationen?

Wenn Sie ein Team für die Arbeit an einem Update zusammenstellen oder einfach nur einige zu aktualisierende Inhalte melden oder diskutieren möchten, zögern Sie nicht, ein [Inhaltsproblem einzureichen](https://github.com/mdn/content/issues) oder [um Hilfe zu bitten](/de/docs/MDN/Community/Communication_channels).

## Der `page-type` front matter key

Wir haben einen front matter key `page-type` definiert, um den Typ der MDN-Seiten klar zu identifizieren. Die unten verlinkten Vorlagen zeigen, welche `page-type` Werte Sie für jeden Seitentyp einstellen sollten.

Für die vollständige Liste der Seitentypen siehe [Der `page-type` front matter key](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/Page_type_key).

## Seitenvorlagen

Nachfolgend finden Sie Beispiele der verschiedenen Seiten, die Sie auf MDN finden, zusammen mit Vorlagen, die zum Erstellen neuer Inhalte basierend auf dem Inhaltstyp, den Sie präsentieren möchten, verwendet werden können, einschließlich der folgenden Seiten:

- [API-Startseiten](#api-startseite)
- [API-Referenzseite](#api-referenzseite)
- [Unterseite der API-Referenz](#unterseite_der_api-referenz)
- [ARIA-Referenz](#aria-referenzseite)
- [Konzeptionelle Seiten](#konzeptuelle_seite)
- [CSS-Feature-Referenz](#css-feature-referenzseite)
- [CSS-Modul-Startseite](#css-modul-startseite)
- [Glossareintrag](#glossarseite)
- [HTML-Element](#html-element-referenzseite)
- [HTML-Attribut](#html-attribut-referenzseite)
- [HTTP-Header](#http-header-referenzseite)
- [Startseite](#startseite)
- [SVG-Element](#svg-element-referenzseite)
- [Lernen von Webseitenentwicklung-Seiten](#lernen_von_webseitenentwicklung-seiten)

Jeder Abschnitt enthält Links zu Live-Beispielseiten für diesen Seitentyp.

### API-Startseite

Eine **{{Glossary("API", "API")}}-Startseite** bietet einen Überblick darüber, was eine bestimmte API tut, sowie Links zur Dokumentation für jede der Schnittstellen, Globalen, Funktionen usw., die von der API angeboten werden. Sie verlinkt nicht direkt auf spezifische Methoden oder Eigenschaften innerhalb der Klassen der API, außer im Kontext des Übersichtstextes. Sie ist hauptsächlich eine _Navigations_-Seite, dient jedoch auch als _Referenz_-Seite für die API.

In einigen Fällen existieren mehrere APIs, die eigenständig sind und in ihren eigenen Spezifikationen definiert sind, jedoch eng miteinander verwandt sind und daher sinnvollerweise mit einer einzigen API-Startseite abgedeckt werden würden. Zum Beispiel deckt die [Generic Sensor API](https://w3c.github.io/sensors/) allgemeine Sensorthemen ab, aber spezifischere Themen werden in anderen APIs wie [Ambient Light Sensor](https://w3c.github.io/ambient-light/), [Motion Sensor](https://w3c.github.io/motion-sensors/) usw. behandelt. In solchen Fällen sind viele der grundlegenden Konzepte gleich, sodass es keinen Sinn macht, diese auf mehreren Startseiten zu wiederholen. In einem solchen Fall wäre es in Bezug auf Wiederholung und Auffindbarkeit sinnvoller, sie alle unter einer einzigen "Web-Sensoren"-Startseite zu behandeln.

#### Beispiel

- [WebVR API](/de/docs/Web/API/WebVR_API)

#### Vorlagen

- [API-Startseitenvorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_landing_page_template)

### API-Referenzseite

> [!NOTE]
> Auch bekannt als _Schnittstellen-Startseite_.

Eine **API-Referenzseite** listet alle Methoden, Eigenschaften, Ereignisse usw., die Mitglieder einer bestimmten Schnittstelle oder Klasse sind. Sie bietet einen Überblick darüber, was die Klasse oder Schnittstelle tut oder wofür sie verwendet wird, und gibt Links zur Dokumentation für jedes dieser Mitglieder. Sie ist detaillierter als eine API-Startseite, die in der Regel Links zu mehreren API-Referenzseiten enthält.

#### Beispiel

- [Request-Schnittstelle](/de/docs/Web/API/Request) der [Fetch API](/de/docs/Web/API/Fetch_API).

#### Vorlagen

- [API-Referenzseitenvorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_reference_page_template)

### Unterseite der API-Referenz

Eine **Unterseite der API-Referenz** ist ein Kind einer API-Referenzseite. Sie dokumentiert ein einzelnes Schnittstellenmitglied im Detail.

#### Beispiele

- [`count()`-Methode](/de/docs/Web/API/IDBIndex/count) der [IDBIndex](/de/docs/Web/API/IDBIndex)-Schnittstelle (Teil der [IndexedDB API](/de/docs/Web/API/IndexedDB_API))
- [capabilities-Eigenschaft](/de/docs/Web/API/VRDisplay/capabilities) der [VRDisplay](/de/docs/Web/API/VRDisplay)-Schnittstelle (Teil der [WebVR API](/de/docs/Web/API/WebVR_API))
- [Request()-Konstruktor](/de/docs/Web/API/Request/Request) der [Request](/de/docs/Web/API/Request)-Schnittstelle (Teil der [Fetch API](/de/docs/Web/API/Fetch_API))
- [vrdisplaypresentchange-Ereignis](/de/docs/Web/API/Window/vrdisplaypresentchange_event) (Teil der [WebVR API](/de/docs/Web/API/WebVR_API), hängt von der [Window](/de/docs/Web/API/Window)-Schnittstelle ab)

#### Vorlagen

- [API-Methodenunterseitenvorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_method_subpage_template)
- [API-Eigenschaftsunterseitenvorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_property_subpage_template)
- [API-Konstruktorunterseitenvorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_constructor_subpage_template)
- [API-Ereignisunterseitenvorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_event_subpage_template)

### HTML-Element-Referenzseite

Eine **HTML-Referenzseite** listet alle Attribute auf, die auf einem HTML-Element verfügbar sind, erklärt den Zweck und die Nutzung des Elements und bietet Beispiele, Informationen zur Browser-Kompatibilität und andere wichtige Daten.

#### Beispiel

- [`<video>`-Element](/de/docs/Web/HTML/Reference/Elements/video)

#### Vorlagen

- [HTML-Element-Seitenvorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/HTML_element_page_template)

### HTML-Attribut-Referenzseite

Eine HTML-Attributseite listet alle Werte auf, die auf einem HTML-Attribut existieren, erklärt den Zweck und die Anwendungsfälle des Attributs, liefert Beispiele, Informationen zur Browser-Kompatibilität und andere wichtige Daten.

> [!NOTE]
> Elemente-spezifische Attribute (z.B. `placeholder` für `<input>`) erfordern keine separate Seite, wenn die Attribute ausreichend innerhalb der Referenzseite des übergeordneten Elements abgedeckt werden können (z.B. sollte das `placeholder`-Attribut auf der Seite des `<input>`-Elements abgedeckt werden, nicht als eigenständige Seite).

#### Beispiel

- [`class`-Attribut](/de/docs/Web/HTML/Reference/Global_attributes/class)

#### Vorlagen

- [HTML-Attribut-Seitenvorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/HTML_attribute_page_template)

### SVG-Element-Referenzseite

Eine **SVG-Referenzseite** listet alle Attribute auf, die auf einem SVG-Element verfügbar sind, erklärt den Zweck und die Nutzung des Elements und bietet Beispiele, Informationen zur Browser-Kompatibilität und andere wichtige Daten.

#### Beispiel

- [\<g>-Element](/de/docs/Web/SVG/Reference/Element/g)

#### Vorlagen

- [SVG-Element-Seitenvorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/SVG_element_page_template)

### CSS-Modul-Startseite

Jedes **[CSS](/de/docs/Web/CSS) Modul** stellt eine CSS-Spezifikation dar, die Unterstützung für bestimmte Features und Implementierungen in CSS bietet. Zum Beispiel repräsentiert das [CSS-Boxmodell](/de/docs/Web/CSS/CSS_box_model)-Modul die [Spezifikation](/de/docs/Web/CSS/CSS_box_model#specifications), die die Margin- und Padding-Eigenschaften beschreibt, mit denen Sie Abstände in und um ein CSS-Box erstellen können.

Eine **CSS-Modul-Startseite** bietet einen Überblick über die Funktionen, die das Modul bereitstellt, und listet alle Eigenschaften, Datentypen, CSS-Funktionen usw. auf, die das Modul bietet. Wenn möglich, bietet die CSS-Modul-Startseite eine schnelle Demonstration dessen, was mit den Eigenschaften des Moduls durch ein interaktives Beispiel erreicht werden kann. Die Modul-Startseite dient in erster Linie als _Navigations_-Seite, fungiert jedoch auch als _Referenz_-Seite für das Modul.

Einige verwandte Eigenschaften und Features, die zu anderen Modulen gehören, aber eng mit der im jeweiligen Modul dokumentierten Funktionalität verbunden sind, können ebenfalls in einem Abschnitt _Verwandte Konzepte_ abgedeckt werden. Zum Beispiel werden der `<easing-function>` Datentyp und die `prefers-reduced-motion` Media Query nicht im CSS-Animationsmodul behandelt, aber da sie eng mit CSS-Animationen verbunden sind, ist es eine gute Idee, sie im Abschnitt [Verwandte Konzepte](/de/docs/Web/CSS/CSS_animations#related_concepts) der CSS-Animationsmodul-Startseite hervorzuheben.

#### Beispiele

- [CSS-Animationen](/de/docs/Web/CSS/CSS_animations)
- [CSS-Benutzeroberfläche](/de/docs/Web/CSS/CSS_basic_user_interface)
- [CSS-Filtereffekte](/de/docs/Web/CSS/CSS_filter_effects)
- [CSS-Scroll-Snap](/de/docs/Web/CSS/CSS_scroll_snap)

#### Vorlagen

- [CSS-Modul-Startseitenvorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/CSS_module_landing_page_template)

### CSS-Feature-Referenzseite

Eine **CSS-Referenzseite** listet alle verfügbaren Syntaxoptionen für ein CSS-Feature wie einen Selektor oder eine Eigenschaft auf und erklärt den Zweck und die Verwendung des Features. Sie bietet außerdem Beispiele, Informationen zur Browser-Kompatibilität und andere wichtige Daten.

#### Beispiele

- [`background-color` Eigenschaft](/de/docs/Web/CSS/background-color)
- [`:hover` Pseudo-Klasse](/de/docs/Web/CSS/:hover)
- [`@media` Regel](/de/docs/Web/CSS/@media)

#### Vorlagen

- [CSS-Eigenschaftsseitenvorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/CSS_property_page_template)
- [CSS-Selektorseitenvorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/CSS_selector_page_template)
- [CSS-Funktionsseitenvorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/CSS_function_page_template)

### HTTP-Header-Referenzseite

Eine **HTTP-Header-Referenzseite** listet alle verfügbaren Direktiven auf, die ein HTTP-Header enthalten kann und erklärt den Zweck und die Verwendung des Headers. Sie bietet außerdem Beispiele, Informationen zur Browser-Kompatibilität und andere wichtige Erklärungen.

#### Beispiel

- [Cache-Control Header](/de/docs/Web/HTTP/Reference/Headers/Cache-Control)

#### Vorlagen

- [HTTP-Header-Seitenvorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/HTTP_header_page_template)

### ARIA-Referenzseite

Eine **ARIA-Referenzseite** beschreibt eine [Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles) oder ein [Attribut](/de/docs/Web/Accessibility/ARIA/Reference/Attributes), das Möglichkeiten definiert, Webinhalte und Webanwendungen für Menschen mit Behinderungen zugänglicher zu machen.

#### Beispiele

- [`aria-busy` Attribut](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-busy)
- [`application` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/application_role)

#### Vorlagen

- [ARIA-Seitenvorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/ARIA_Page_Template)

### Konzeptuelle Seite

Eine **konzeptuelle Seite** ist eine _Leitfaden_-Seite, die etwas erklärt oder lehrt. Im Allgemeinen, wenn eine Seite primär aus Fließtext besteht und nicht in einen anderen Seitentyp fällt, ist sie wahrscheinlich eine konzeptuelle Seite. Eine umfangreiche Diskussion eines Themas könnte über mehrere konzeptuelle Seiten verteilt sein, die mit [Nächste](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/previous_menu_next.rs) und [Vorherige](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/previous_menu_next.rs) Makros verlinkt sind.

#### Beispiele

- [Verwendung der WebVR API](/de/docs/Web/API/WebVR_API/Using_the_WebVR_API)
- [Visualisierungen mit der Web Audio API](/de/docs/Web/API/Web_Audio_API/Visualizations_with_Web_Audio_API)
- [Konflikte behandeln](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)

### Glossarseite

Eine **Glossarseite** enthält eine kurze Erklärung eines Begriffs, Themas oder Konzepts. Der erste Absatz sollte eine einfache, in sich geschlossene Beschreibung des Begriffs sein, die nicht mehr als ein oder zwei Sätze umfasst. Dies kann durch Links zu weiterführenden Informationen im Abschnitt **Siehe auch** ergänzt werden. Wenn die Seite länger als ein Bildschirm ist, ist sie zu lang und sollte in eine konzeptionelle Seite umgewandelt werden. Siehe [Anleitung zum Schreiben und Referenzieren eines Eintrags im Glossar](/de/docs/MDN/Writing_guidelines/Howto/Write_a_new_entry_in_the_glossary) für weitere Details.

#### Beispiele

- {{Glossary("DOM", "DOM")}}
- {{Glossary("Exception", "Ausnahme")}}
- {{Glossary("Hyperlink", "Hyperlink")}}

#### Vorlagen

- [Glossarseitenvorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/Glossary_page_template)

### Startseite

Eine **Startseite** dient als eine Art Menü für ihre Unterseiten und ist daher hauptsächlich eine _Navigations_-Seite. Ein Layout für eine Startseite wird typischerweise für die Wurzelseite eines Baums von Seiten über ein bestimmtes Thema verwendet. Sie beginnt mit einer kurzen Zusammenfassung des Themas und präsentiert dann eine strukturierte Liste von Links zu den Unterseiten sowie optional weiteres Material, das für den Leser nützlich sein kann.

Die Liste der Unterseiten kann automatisch mit der [`SubpagesWithSummaries`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/subpages_with_summaries.rs) Vorlage generiert werden. In komplexeren Fällen muss die Liste jedoch möglicherweise von Hand erstellt (und gepflegt) werden.

### Lernen von Webseitenentwicklung-Seiten

Der [Lernen von Webseitenentwicklung](/de/docs/Learn_web_development)-Bereich von MDN richtet sich speziell an Personen, die die grundlegenden Grundlagen der Webentwicklung erlernen, und erfordert daher einen anderen Ansatz als der Rest der MDN-Inhalte. Sie können weitere Richtlinien unter [Schreibrichtlinien zur Webentwicklung lernen](/de/docs/MDN/Writing_guidelines/Learning_content) finden.

Es gibt nur wenige Seitentypen innerhalb der Webseitenentwicklung lernen:

- **Modulgruppen-Startseite**, zum Beispiel [KernlernmModule](/de/docs/Learn_web_development/Core)
  - : Diese enthalten einen Einführungsabsatz, einen Abschnitt, der die Voraussetzungen beschreibt, die Sie vor Beginn der Modulgruppe haben sollten, und eine Liste der Module, gefolgt von einer optionalen Liste von "Siehe auch"-Links.
- **Modul-Startseite**, zum Beispiel [Inhalte mit HTML strukturieren](/de/docs/Learn_web_development/Core/Structuring_content)
  - : Diese enthalten einen Einführungsabsatz, einen Abschnitt, der die Voraussetzungen beschreibt, die Sie vor Beginn des Moduls haben sollten, und eine Liste der enthaltenen Tutorials, gefolgt von einer optionalen Liste weiterer "Zusätzliche Tutorials", die zwar nicht Teil des zentralen Lernpfads sind, aber mit ihm verwandt sind, sowie einer optionalen Liste von "Siehe auch"-Links.
- **Tutorial-Seite**, zum Beispiel [Grundlegende HTML-Syntax](/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax)
  - : Die Struktur eines Tutorials ist nicht streng, aber es muss ein interaktives Lernerlebnis bieten (siehe [Schreibrichtlinien zur Webentwicklung > Ansatz lernen](/de/docs/MDN/Writing_guidelines/Learning_content#approach)), es muss eine Menge "Voraussetzungen" und "Lernergebnisse" am Anfang aufgelistet haben, und der Inhalt muss die genannten Lernergebnisse lehren.

### Beispiele

- [HTML](/de/docs/Web/HTML)
- [CSS](/de/docs/Web/CSS)
- [Web-APIs](/de/docs/Web/API)
- [JavaScript](/de/docs/Web/JavaScript)
- [Lernen von Webseitenentwicklung](/de/docs/Learn_web_development)
- [Gemeinschaftsressourcen](/de/docs/MDN/Community)

## Siehe auch

- [Seitenkomponenten](/de/docs/MDN/Writing_guidelines/Writing_style_guide#page_components)
- [Erstellen von Codebeispielen in Markdown](/de/docs/MDN/Writing_guidelines/Code_style_guide)
