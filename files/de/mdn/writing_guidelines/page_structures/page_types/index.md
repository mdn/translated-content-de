---
title: Seitentypen
slug: MDN/Writing_guidelines/Page_structures/Page_types
l10n:
  sourceCommit: 719645a32546d9e514ac530a5eb66aa4c26d4f51
---

Es gibt mehrere Seitentypen, die auf MDN wiederholt verwendet werden. Dieser Artikel beschreibt diese Seitentypen, ihren Zweck und gibt Beispiele für jeden sowie Vorlagen, die beim Erstellen einer neuen Seite verwendet werden sollen.

Es gibt drei Hauptkategorien von Seitentypen auf MDN, obwohl einige Seitentypen in mehr als eine Kategorie fallen.

- **Referenzseiten** beschreiben die Details von etwas und sind entsprechend der Struktur des beschriebenen Objekts organisiert.
- **Leitfaden-Seiten** beschreiben, wie man etwas macht oder benutzt und sind basierend auf den Zielen des Lesers organisiert.
- **Navigationsseiten** existieren hauptsächlich, um Links zu anderen Seiten bereitzustellen, normalerweise zu verwandten Themen.

## Erstellen einer neuen Seite

Um neue Seiten auf MDN zu erstellen, müssen Sie GitHub verwenden — schauen Sie sich unseren [Inhalts-Repo](https://github.com/mdn/content) Abschnitt über das [Hinzufügen eines neuen Dokuments](https://github.com/mdn/content/blob/main/CONTRIBUTING.md#adding-a-new-document) für weitere Anweisungen an.

## Wie man die Vorlagen verwendet

Beim Erstellen einer neuen Seite können Sie sicherstellen, dass Sie die richtige Seitenstruktur/-inhalte verwendet haben, indem Sie auf eine unserer Seitenvorlagen verweisen — siehe die folgenden Abschnitte. Sie können den genauen Quellcode jeder Vorlage finden (wenn Sie ihn kopieren möchten), indem Sie dem "Source on **GitHub**" Link am Ende jeder Vorlage folgen. Diese Seitenvorlagen machen als veröffentlichte Seiten wenig Sinn, aber wenn Sie ihren Quellcode ansehen, werden Sie sehen, dass sie viele hilfreiche Kommentare, Platzhalter und Hinweise enthalten, die beschreiben, wie Sie die fehlenden Informationen ausfüllen und Ihre Seite erstellen.

Am Anfang jeder Vorlage finden Sie einen Abschnitt mit dem Titel _Vor der Veröffentlichung entfernen_ — dieser enthält Informationen dazu, wie Sie den Seitentitel, den Slug, das Seitenleistenmenü und die Tags ausfüllen (z.B. Informationen, die nicht tatsächlich im Körper des Artikels erscheinen). Sie müssen diesen Abschnitt löschen, nachdem Sie die Anweisungen darin befolgt haben, bevor die Seite als fertig betrachtet werden kann.

## Alte Seitenlayouts

Manchmal stoßen Sie auf alte Referenzseiten, die merklich anders aussehen als die hier vorgestellten Vorlagen. Zum Beispiel hatten alte Schnittstellenseiten alle Details zu den Mitgliedern der Schnittstellen auf einer einzigen Seite, und einzelne Seiten für Methodik/Eigenschaft/Konstruktor/Veranstaltungslistener existierten nicht.

Wenn Sie auf eine alte Seitengruppe stoßen, würden wir uns freuen, wenn Sie diese auf den neuen Stil aktualisieren! Allerdings wissen wir zu schätzen, dass das eine große Menge an Arbeit sein kann. Wenn die Informationen zur Aktualisierung nicht zu umfangreich sind und Sie etwas freie Zeit haben, versuchen Sie gern, sie auf den neuen Stil zu aktualisieren.

Wenn die Arbeit umfangreicher ist, sollten Sie bei der Priorisierung der Arbeit einige Faktoren berücksichtigen:

- Wie veraltet sind die Informationen?
- Wie niedrig ist die Qualität der Informationen?
- Wie beliebt ist das Feature? Wie sehr werden die Informationen gesucht?

Wenn Sie ein Team zusammenstellen möchten, um an einer Aktualisierung zu arbeiten, oder wenn Sie einfach nur ein Inhaltsproblem melden oder einigen Inhalt besprechen möchten, der eine Aktualisierung benötigt, können Sie gern [ein Inhaltsproblem melden](https://github.com/mdn/content/issues) oder [uns um Hilfe bitten](/de/docs/MDN/Community/Communication_channels).

## Der „page-type“ Front-Matter-Schlüssel

Wir haben einen Front-Matter-Schlüssel `page-type` definiert, um den Typ der MDN-Seiten klar zu identifizieren. Die unten verlinkten Vorlagen geben an, welche `page-type` Werte Sie für jeden Seitentyp festlegen sollten.

Für die vollständige Liste der Seitentypen siehe [Der „page-type“ Front-Matter-Schlüssel](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/Page_type_key).

## Seitentemplates

Im Folgenden sind Beispiele für die verschiedenen Seiten, die Sie auf MDN finden, zusammen mit Vorlagen, die verwendet werden können, um neue Inhalte basierend auf dem Typ der Inhalte, die Sie präsentieren werden, zu erstellen, einschließlich der folgenden Seiten:

- [API-Landingseiten](#api-landingseite)
- [API-Referenzseite](#api-referenzseite)
- [API-Referenz-Unterseite](#api-referenz-unterseite)
- [Konzeptuelle Seiten](#konzeptuelle_seite)
- [CSS-Feature-Referenz](#css-feature-referenzseite)
- [CSS-Modul-Landingseite](#css-modul-landingseite)
- [Glossareintrag](#glossarseite)
- [HTML-Element](#html-element-referenzseite)
- [HTTP-Header](#http-header-referenzseite)
- [Landing-Seite](#landingseite)
- [SVG-Element](#svg-element-referenzseite)

Jeder Abschnitt enthält Links zu Live-Beispielseiten für diesen Seitentyp.

### API-Landingseite

Eine **{{Glossary("API", "API")}}-Landingseite** bietet einen Überblick darüber, was eine bestimmte API macht, sowie Links zur Dokumentation für jede der Schnittstellen, globalen Objekte, Funktionen usw., die von der API angeboten werden. Sie verlinkt nicht direkt zu spezifischen Methoden oder Eigenschaften innerhalb der Klassen der API, außer im Kontext des Übersichtstextes. Sie ist hauptsächlich eine _Navigationsseite_, fungiert aber auch als Kurzübersichts-_Referenzseite_ für die API.

In einigen Fällen existieren mehrere APIs, die voneinander getrennt sind und in ihren eigenen Spezifikationen definiert sind, aber eng verwandt sind und es daher sinnvoll wäre, sie auf einer einzigen API-Landingseite abzudecken. Zum Beispiel deckt die [Generic Sensor API](https://www.w3.org/TR/generic-sensor/) allgemeine Sensoranliegen ab, aber spezifischere Anliegen werden in anderen APIs wie [Ambient Light Sensor](https://www.w3.org/TR/ambient-light/), [Motion Sensor](https://www.w3.org/TR/motion-sensors/) usw. behandelt. In solchen Fällen sind viele der hochrangigen Konzepte dieselben, es macht also keinen Sinn, diese über mehrere Landingseiten zu wiederholen. In einem solchen Fall wäre es sinnvoller, sie alle unter einer einzigen "Web-Sensoren"-Landingseite abzudecken, um Wiederholungen und Auffindbarkeit zu verbessern.

#### Beispiel

- [WebVR API](/de/docs/Web/API/WebVR_API)

#### Vorlagen

- [API-Landingseiten-Vorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_landing_page_template)

### API-Referenzseite

> [!NOTE]
> Auch bekannt als _Schnittstellen-Landingseite_.

Eine **API-Referenzseite** listet alle Methoden, Eigenschaften, Ereignisse usw. auf, die Mitglieder einer bestimmten Schnittstelle oder Klasse sind. Sie bietet einen Überblick darüber, was die Klasse oder Schnittstelle macht oder wofür sie verwendet wird, und gibt Links zur Dokumentation für jedes dieser Mitglieder. Sie ist detaillierter als eine API-Landingseite, die typischerweise auf mehrere API-Referenzseiten verlinkt.

#### Beispiel

- [Request Schnittstelle](/de/docs/Web/API/Request) der [Fetch API](/de/docs/Web/API/Fetch_API).

#### Vorlagen

- [API-Referenzseiten-Vorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_reference_page_template)

### API-Referenz-Unterseite

Eine **API-Referenz-Unterseite** ist ein Kind einer API-Referenzseite. Sie dokumentiert ein einzelnes Schnittstellenmitglied im Detail.

#### Beispiele

- [`count()` Methode](/de/docs/Web/API/IDBIndex/count) der [IDBIndex](/de/docs/Web/API/IDBIndex) Schnittstelle (Teil der [IndexedDB API](/de/docs/Web/API/IndexedDB_API))
- [capabilities Eigenschaft](/de/docs/Web/API/VRDisplay/capabilities) der [VRDisplay](/de/docs/Web/API/VRDisplay) Schnittstelle (Teil der [WebVR API](/de/docs/Web/API/WebVR_API))
- [Request() Konstruktor](/de/docs/Web/API/Request/Request) der [Request](/de/docs/Web/API/Request) Schnittstelle (Teil der [Fetch API](/de/docs/Web/API/Fetch_API))
- [vrdisplaypresentchange Ereignis](/de/docs/Web/API/Window/vrdisplaypresentchange_event) (Teil der [WebVR API](/de/docs/Web/API/WebVR_API), gehört zur [Window](/de/docs/Web/API/Window) Schnittstelle)

#### Vorlagen

- [API-Methoden-Unterseiten-Vorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_method_subpage_template)
- [API-Eigenschaften-Unterseiten-Vorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_property_subpage_template)
- [API-Konstruktor-Unterseiten-Vorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_constructor_subpage_template)
- [API-Ereignis-Unterseiten-Vorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_event_subpage_template)

### HTML-Element-Referenzseite

Eine **HTML-Referenzseite** listet alle Attribute auf, die für ein HTML-Element verfügbar sind, erklärt den Zweck und die Verwendung des Elements und bietet Beispiele, Informationen zur Browser-Kompatibilität und andere wichtige Daten.

#### Beispiel

- [`<video>` Element](/de/docs/Web/HTML/Element/video)

#### Vorlagen

- [HTML-Element-Seiten-Vorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/HTML_element_page_template)

### SVG-Element-Referenzseite

Eine **SVG-Referenzseite** listet alle Attribute auf, die für ein SVG-Element verfügbar sind, erklärt den Zweck und die Verwendung des Elements und bietet Beispiele, Informationen zur Browser-Kompatibilität und andere wichtige Daten.

#### Beispiel

- [\<g> Element](/de/docs/Web/SVG/Element/g)

#### Vorlagen

- [SVG-Element-Seiten-Vorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/SVG_element_page_template)

### CSS-Modul-Landingseite

Jedes **[CSS](/de/docs/Web/CSS)-Modul** repräsentiert eine CSS-Spezifikation, die Unterstützung für bestimmte Funktionen und Implementierungen in CSS bietet. Zum Beispiel stellt das [CSS box model](/de/docs/Web/CSS/CSS_box_model) Modul die [Spezifikation](/de/docs/Web/CSS/CSS_box_model#specifications) dar, die die margin- und padding-Eigenschaften beschreibt, die es Ihnen erlauben, Abstände in und um ein CSS-Feld zu erstellen.

Eine **CSS-Modul-Landingseite** bietet einen Überblick über die Funktionen, die das Modul bereitstellt, und listet alle Eigenschaften, Datentypen, CSS-Funktionen usw. auf, die vom Modul angeboten werden. Wenn möglich, bietet die CSS-Modul-Landingseite eine kurze Demonstration dessen, was mit den Eigenschaften des Moduls erreicht werden kann, durch ein interaktives Beispiel. Die Modul-Landingseite dient in erster Linie als _Navigationsseite_, fungiert aber auch als Kurzübersichts-_Referenzseite_ für das Modul.

Einige verwandte Eigenschaften und Funktionen, die zu anderen Modulen gehören, aber eng mit der Funktionalität verbunden sind, die das Modul, das Sie dokumentieren, bietet, können auch in einem Abschnitt _Verwandte Konzepte_ behandelt werden. Zum Beispiel werden der `<easing-function>` Datentyp und die `prefers-reduced-motion` Media Query nicht im CSS-Animationsmodul behandelt, aber weil sie eng mit CSS-Animationen verwandt sind, ist es eine gute Idee, sie im [Verwandte Konzepte](/de/docs/Web/CSS/CSS_animations#related_concepts) Abschnitt der CSS-Animationsmodul-Landingseite hervorzuheben.

#### Beispiele

- [CSS-Animationen](/de/docs/Web/CSS/CSS_animations)
- [CSS-basis-Benutzeroberfläche](/de/docs/Web/CSS/CSS_basic_user_interface)
- [CSS-Filtereffekte](/de/docs/Web/CSS/CSS_filter_effects)
- [CSS-Scroll-Snap](/de/docs/Web/CSS/CSS_scroll_snap)

#### Vorlagen

- [CSS-Modul-Landingseiten-Vorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/CSS_module_landing_page_template)

### CSS-Feature-Referenzseite

Eine **CSS-Referenzseite** listet alle verfügbaren Syntaxen für ein CSS-Feature wie einen Selektor oder eine Eigenschaft auf und erklärt den Zweck und die Verwendung des Features. Sie bietet auch Beispiele, Informationen zur Browser-Kompatibilität und andere wichtige Daten.

#### Beispiele

- [`background-color` Eigenschaft](/de/docs/Web/CSS/background-color)
- [`:hover` Pseudo-Klasse](/de/docs/Web/CSS/:hover)
- [`@media` At-Regel](/de/docs/Web/CSS/@media)

#### Vorlagen

- [CSS-Eigenschafts-Seiten-Vorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/CSS_property_page_template)
- [CSS-Selektor-Seiten-Vorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/CSS_selector_page_template)
- [CSS-Funktions-Seiten-Vorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/CSS_function_page_template)

### HTTP-Header-Referenzseite

Eine **HTTP-Header-Referenzseite** listet alle verfügbaren Direktiven auf, die ein HTTP-Header enthalten kann, und erklärt den Zweck und die Verwendung des Headers. Sie bietet auch Beispiele, Informationen zur Browser-Kompatibilität und andere wichtige Erklärungen.

#### Beispiel

- [Cache-Control Header](/de/docs/Web/HTTP/Headers/Cache-Control)

#### Vorlagen

- [HTTP-Header-Seiten-Vorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/HTTP_header_page_template)

### Konzeptuelle Seite

Eine **konzeptuelle Seite** ist eine _Leitfaden_-Seite, die etwas erklärt oder lehrt. Im Allgemeinen, wenn eine Seite hauptsächlich Prosa enthält und nicht in einen anderen Seitentyp fällt, ist es wahrscheinlich eine konzeptuelle Seite. Eine erweiterte Diskussion eines Themas könnte über mehrere konzeptuelle Seiten verteilt sein und mit [Next](https://github.com/mdn/yari/blob/main/kumascript/macros/Next.ejs) und [Previous](https://github.com/mdn/yari/blob/main/kumascript/macros/Previous.ejs) Makros verlinkt werden.

#### Beispiele

- [Verwendung der WebVR API](/de/docs/Web/API/WebVR_API/Using_the_WebVR_API)
- [Visualisierungen mit der Web Audio API](/de/docs/Web/API/Web_Audio_API/Visualizations_with_Web_Audio_API)
- [Konflikte bewältigen](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)

### Glossarseite

Eine **Glossarseite** enthält eine kurze Erklärung eines Begriffs, Themas oder Konzepts. Der erste Absatz sollte eine einfache, in sich geschlossene Beschreibung des Begriffs sein, nicht mehr als ein paar Sätze. Das kann durch Links zu weiteren Informationen im **Siehe auch**-Abschnitt ergänzt werden. Wenn die Seite mehr als einen Bildschirm voll oder so lang wird, ist sie zu lang und sollte in eine konzeptuelle Seite umgewandelt werden. Weitere Details finden Sie in der [Anleitung zum Schreiben und Verweisen eines Eintrags im Glossar](/de/docs/MDN/Writing_guidelines/Howto/Write_a_new_entry_in_the_glossary).

#### Beispiele

- {{Glossary("DOM", "DOM")}}
- {{Glossary("Exception", "Exception")}}
- {{Glossary("Hyperlink", "Hyperlink")}}

#### Vorlagen

- [Glossarseiten-Vorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/Glossary_page_template)

### Landingseite

Eine **Landingseite** dient als eine Art Menü für ihre Unterseiten und ist daher hauptsächlich eine _Navigationsseite_. Ein Landingseiten-Layout wird typischerweise für die Hauptseite eines Baumes von Seiten über ein bestimmtes Thema verwendet. Sie beginnt mit einer kurzen Zusammenfassung des Themas, gefolgt von einer strukturierten Liste von Links zu ihren Unterseiten und optional zusätzlichem Material, das dem Leser nützlich sein kann.

Die Liste der Unterseiten kann automatisch mit der [`SubpagesWithSummaries`](https://github.com/mdn/yari/blob/main/kumascript/macros/SubpagesWithSummaries.ejs) Vorlage generiert werden. In komplexeren Fällen könnte die Liste jedoch von Hand erstellt (und gepflegt) werden müssen.

### Beispiele

- [HTML](/de/docs/Web/HTML)
- [CSS](/de/docs/Web/CSS)
- [Web APIs](/de/docs/Web/API)
- [JavaScript](/de/docs/Web/JavaScript)
- [Webentwicklung lernen](/de/docs/Learn_web_development)
- [Community-Ressourcen](/de/docs/MDN/Community)

## Siehe auch

- [Seitenkomponenten](/de/docs/MDN/Writing_guidelines/Writing_style_guide#page_components)
- [Codebeispiele in Markdown erstellen](/de/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide)
